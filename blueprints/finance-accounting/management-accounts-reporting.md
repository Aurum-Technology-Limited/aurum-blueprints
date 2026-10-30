---
id: finance-accounting.management-accounts-reporting
name: Management Accounts Reporting
description: "A monthly management accounts pack people read and act on: a decision-led layout and timetable, tied-out numbers, KPI, balance sheet and cash pages, sharp commentary, review meetings and board-ready reporting."
category: business
version: 1.0.0
tags: [finance-accounting, management-accounts-reporting, small-business, manager, founder, management-accounts, commentary, board-reporting]
author: Aurum Technology
starter_structure:
  templates:
    - meeting-notes
    - metrics-log
    - feedback-themes
    - purchase-decision
    - board-meeting
  pillars:
    - name: Finance & Accounting
      emoji: "🧾"
      description: "The money side of a business: bookkeeping and the monthly close, cash flow, budgeting and forecasting, billing and collections, payroll, tax, audit and financial controls."
      pillarFrontmatter:
        review_cadence: monthly
      areas:
        - name: Management Accounts Reporting
          description: "Producing monthly management accounts with commentary on profit, margins and key movements so owners, managers and boards can make decisions from them."
          projects:
            - name: Decisions the management accounts must support
              description: |-
                ## Purpose
                Before any layout is chosen, ask the people who will read the pack which decisions they make each month: whether to hire, reprice, chase a customer, cut a cost or draw cash out. A pack built backwards from five to ten real decisions is shorter and gets read, while one built forwards from the trial balance gets filed. Spend an hour with each main reader now, because every later choice in this area depends on the answers.

                ## Milestones
                1. Every regular reader of the management accounts named, with their role.
                2. Each reader's three to five recurring monthly decisions written down in their own words.
                3. Each decision linked to the figure or measure that would inform it.
                4. A one-page decisions brief agreed with the owner or finance lead.

                ## Notes
                Ask what readers actually did with last month's numbers, not what they would like to see. Wish lists grow without limit; real use is the better guide.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A one-page brief listing each reader's recurring decisions and the figure behind each, agreed with the owner or finance lead."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "List everyone who receives or should receive the monthly numbers"
                - "Ask each reader which decisions they made using last month's figures"
                - "Link every decision to the figure or measure that informs it"
                - "Agree the one-page decisions brief with the owner or finance lead"
            - name: Monthly reporting timetable by working day
              description: |-
                ## Purpose
                Management accounts lose value every day they are late: a pack that lands on the 25th describes a month nobody is still thinking about. Fixing issue dates by working day, for example a flash note on day three and the full pack on day eight, gives the close team a target and readers a date they can plan meetings around.

                ## Milestones
                1. Working-day deadlines set for the flash note, draft pack, review and final issue.
                2. Each date checked against when the close realistically finishes today.
                3. The monthly review meeting booked a few days after issue for the next twelve months.
                4. The timetable shared with everyone who feeds data in or reads the pack.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A written timetable with working-day dates for flash, draft, review and issue, shared with contributors and readers, with twelve meetings booked."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Note the working day on which each of the last three packs was issued"
                - "Set target working days for flash, draft, review and issue"
                - "Book the monthly review meeting for the next twelve months"
                - "Turn the working days into calendar dates for the coming year @recurring(yearly)"
            - name: Management accounts pack contents outline
              description: |-
                ## Purpose
                A consistent order of pages lets readers find the same thing in the same place every month and notice when something is missing. Most good packs fit in six to ten pages: a summary with key messages, the profit and loss, the balance sheet, cash, key measures and short commentary, with detailed schedules moved to an appendix.

                ## Milestones
                1. A contents list with every page, its purpose and its main reader.
                2. Each page traced to at least one decision in the decisions brief.
                3. Detailed schedules moved to an appendix behind the main pages.
                4. A blank mock-up of the pack shown to two readers and adjusted.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A pack outline of no more than ten main pages, each tied to a named decision, reviewed by two readers."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Draft a contents list with a one-line purpose for each page"
                - "Check every page against the decisions brief and cut the orphans"
                - "Sketch a blank mock-up of the summary page"
                - "Show the mock-up to two readers and note what they look for first"
            - name: Management profit and loss layout
              description: |-
                ## Purpose
                Statutory formats group costs for compliance, not for running the business, so a management profit and loss usually reorders them: revenue by stream, direct costs, gross margin, overheads in a handful of groups, then EBITDA and operating profit. Choosing that layout once, and mapping every ledger account to a line, stops the pack being rebuilt by hand each month.

                ## Milestones
                1. Revenue lines chosen to match the streams the owners actually manage.
                2. A clear rule for which costs sit above gross margin and which sit below it.
                3. Overheads grouped into six to ten headings readers recognise.
                4. Every ledger account mapped to exactly one report line, with no unmapped balance.
                5. The layout's bottom line agreed to the trial balance profit for a closed month.

                ## Notes
                Changing the accounts themselves belongs to chart of accounts work. Here you only map existing accounts to report lines.
              priority: high
              deadlineOffsetDays: 45
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A management profit and loss layout with every ledger account mapped to one line, reconciling to trial balance profit for at least one closed month."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Export last month's trial balance with account codes"
                - "Draft the profit and loss lines from revenue down to operating profit"
                - "Map each income and expense account to one report line"
                - "Prove that the layout's profit equals the trial balance profit"
            - name: Comparative columns for each report page
              description: |-
                ## Purpose
                A number on its own says little; the comparison beside it carries the meaning. Deciding which columns each page shows, such as this month, last month, the same month last year, year to date and budget, keeps pages readable and stops the pack sprouting twelve columns nobody can scan.

                ## Milestones
                1. A column set chosen for the summary, profit and loss and balance sheet pages.
                2. A rule for whether differences show as amounts, percentages or both.
                3. The sign convention for favourable and unfavourable differences written down.
                4. The budget or forecast column sourced from the latest approved version.

                ## Notes
                Explaining budget variances line by line is a separate discipline. The pack needs the column and a pointer to who explains it.
              priority: medium
              deadlineOffsetDays: 45
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A written column set and sign convention for every page of the pack, applied in the next issued pack."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "List the comparisons each reader asked for in the decisions brief"
                - "Choose a set of no more than five columns for each main page"
                - "Write the sign convention for favourable and unfavourable differences"
                - "Confirm which budget or forecast version feeds the budget column"
            - name: Close-to-pack handover checklist
              description: |-
                ## Purpose
                Packs drafted on half-closed books produce commentary that has to be withdrawn when the last accrual lands. A short handover checklist, confirming that bank, debtors, creditors and payroll are reconciled and the period is locked, means the reporting work starts on numbers that will not move.

                ## Milestones
                1. The items that must be complete before drafting listed in the order the close finishes them.
                2. A named person who confirms the handover each month.
                3. A rule for a late item: wait, or issue with a clearly flagged estimate.
                4. Three consecutive packs drafted only after the checklist was signed off.

                ## Notes
                Running the close itself sits in its own area. This checklist is only the gate between the close and the pack.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Three consecutive packs drafted after a signed handover checklist, with no post-issue changes caused by late close entries."
                cadence: rolling
              tasks:
                - "List the close items that must be done before any pack page is drafted"
                - "Name the person who confirms the handover each month"
                - "Write the rule for issuing with a flagged estimate when an item is late"
                - "Confirm the handover checklist is signed before drafting starts @recurring(monthly:5)"
            - name: Commentary threshold for explaining movements
              description: |-
                ## Purpose
                Without a threshold, commentary either explains every small change or skips the one movement that mattered. A simple rule, such as explaining any line that moves by more than a set percentage and a set amount against last month or budget, makes the writing faster and tells readers that silence means nothing notable happened.

                ## Milestones
                1. A percentage and an amount threshold chosen for profit and loss lines.
                2. A separate threshold set for balance sheet movements.
                3. A short list of lines that always get a comment regardless of size, such as revenue and gross margin.
                4. The thresholds printed on the notes page of the pack.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "Written commentary thresholds for profit and loss and balance sheet lines, printed in the pack and applied for three months."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Mark the movements in last month's pack that deserved a comment"
                - "Set a percentage and an amount threshold that would have caught them"
                - "List the lines that always get a comment whatever their size"
                - "Add the thresholds to the notes page of the pack"
            - name: Twelve-month history rebuilt on the new layout
              description: |-
                ## Purpose
                Trends are what management accounts show best, and they only work if past months use the same layout as this one. Rebuilding the last twelve months on the new mapping gives every reader a year of comparable history from the very first pack, rather than waiting a year for it to build up.

                ## Milestones
                1. Trial balances for the last twelve closed months exported.
                2. Each month mapped to the new layout using the same rules.
                3. Each month's profit on the new layout agreed to that month's ledger profit.
                4. Any month that looks odd investigated and either corrected or footnoted.
              priority: medium
              deadlineOffsetDays: 60
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Twelve months of history on the new layout, each month reconciled to ledger profit, with anomalies footnoted."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Export trial balances for each of the last twelve closed months"
                - "Apply the report line mapping to every month"
                - "Check each month's mapped profit against the ledger"
                - "Footnote any month with a known one-off or late correction"
            - name: Pack master file, naming and version control
              description: |-
                ## Purpose
                Two versions of the same month's pack in circulation is how a board ends up arguing about which profit figure is right. One master file, a naming rule and a locked final copy for every month give everyone a single version of the numbers and an archive showing exactly what was reported in any past month.

                ## Milestones
                1. One folder structure for working files, drafts and final issued packs.
                2. A file naming rule that includes the period and a version number.
                3. Each issued pack saved as a locked copy that is never edited afterwards.
                4. Edit access limited so only the preparer and reviewer can change the working file.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A folder holding a locked final pack for each month since adoption, named to the rule, with only one working master file."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Create folders for working files, drafts and issued packs"
                - "Write the file naming rule with period and version"
                - "Restrict edit access on the working master file"
                - "Save the issued pack as a locked copy in the month's folder @recurring(monthly:10)"
            - name: Monthly pack refresh and tie-out to the ledger
              description: |-
                ## Purpose
                Every month the numbers in the pack have to be refreshed and proved before anyone writes a word about them. Tying the profit and loss to the trial balance, the balance sheet to the ledger and cash to the bank statements catches broken links and unmapped accounts while they are still cheap to fix.

                ## Milestones
                1. A refresh routine written as numbered steps in the working file.
                2. Profit, net assets and closing cash each agreed to their source every month.
                3. New ledger accounts caught and mapped before drafting starts.
                4. Six consecutive months refreshed and tied out with no post-issue correction.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Six consecutive packs with profit, net assets and cash agreed to source, each tie-out evidenced in the working file."
                cadence: rolling
              tasks:
                - "Write the refresh steps as a numbered list in the working file"
                - "Refresh the pack and agree profit, net assets and cash to source @recurring(monthly:6)"
                - "Map any new ledger account to a report line before drafting"
                - "Keep the tie-out evidence beside the month's working file"
            - name: Flash results note by working day three
              description: |-
                ## Purpose
                Owners and boards often need a first read of the month before the full pack is ready, especially in a month when cash is tight. A short flash note with revenue, gross margin, cash and one sentence on anything surprising, clearly marked as provisional, answers the first question people ask without rushing the full pack.

                ## Milestones
                1. A flash note layout of no more than half a page.
                2. A rule for which figures are estimates and how they are flagged.
                3. Flash notes issued by working day three for three months.
                4. Differences between flash and final figures tracked so the estimates improve.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Three months of flash notes issued by working day three, with the flash to final difference recorded each month."
                cadence: rolling
              tasks:
                - "Draft a half-page flash layout with revenue, gross margin and cash"
                - "Write down how estimated figures are marked in the note"
                - "Send the flash note to the owner or leadership team @recurring(monthly:3)"
                - "Record the difference between flash and final figures each month"
            - name: Monthly commentary on profit and margin movements
              description: |-
                ## Purpose
                Readers look at the numbers for ten seconds and at the commentary for a minute, so the commentary is where the pack earns its keep. Writing it each month to the threshold, with the cause, the effect on profit and what happens next for each movement, turns a table into something a manager can act on.

                ## Milestones
                1. A commentary structure in a fixed order: headline, profit, margin, overheads, balance sheet, outlook.
                2. Every movement over the threshold explained with its cause, its impact and the next step.
                3. Causes checked with the person who runs that part of the business.
                4. Commentary issued with the pack for six consecutive months.

                ## Notes
                Ask the agent to draft a first pass from the refreshed numbers and your notes, then rewrite it in your own words once each cause has been checked with the person responsible.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Six consecutive packs issued with commentary covering every movement over the threshold, each with a cause and a next step."
                cadence: rolling
              tasks:
                - "Write the commentary headings in the order readers should meet them"
                - "List every movement over the threshold from the refreshed numbers"
                - "Check the cause of each large movement with the person responsible"
                - "Write and edit the month's commentary before review @recurring(monthly:7)"
            - name: Pre-issue review of the pack by a second person
              description: |-
                ## Purpose
                The preparer is the worst person to spot their own mistakes, and one wrong sign on the summary page can undo a year of credibility. A fifteen-minute review by a second person against a short checklist, covering totals, comparatives, commentary that matches the numbers and the right period on every page, catches most errors before readers do.

                ## Milestones
                1. A review checklist of no more than fifteen points.
                2. A named reviewer and a named backup.
                3. Review findings logged each month with how each was fixed.
                4. Six months of packs issued with a recorded review.

                ## Notes
                In a one-person business, ask your external accountant to review one pack a quarter, and review the other months yourself the morning after drafting, using the same checklist.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Six consecutive packs with a completed review checklist signed by someone other than the preparer, or a dated self-review where no second person exists."
                cadence: rolling
              tasks:
                - "Write a review checklist of no more than fifteen points"
                - "Ask a named reviewer and a backup to take on the review"
                - "Review the draft pack against the checklist before issue @recurring(monthly:8)"
                - "Log each review finding and how it was fixed"
            - name: Monthly management accounts review meeting
              description: |-
                ## Purpose
                Packs sent by email are often opened once and never discussed, so the decisions they were built for never get made. A standing 45-minute meeting each month, with the pack read beforehand and the time spent on three or four questions, turns reporting into actions with owners.

                ## Milestones
                1. A standing meeting with a fixed attendee list and a short agenda.
                2. The pack issued at least two working days before each meeting.
                3. Each meeting ending with decisions and owners written down.
                4. Six meetings held, with notes saved beside that month's pack.

                ## Notes
                Start from the **Meeting notes** template. Ask readers to send questions in advance so the meeting is spent on answers, not on reading.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Six monthly review meetings held, each with notes listing decisions and owners saved beside the pack."
                cadence: rolling
              tasks:
                - "Agree the attendees and a four-item agenda for the meeting"
                - "Ask attendees to send their questions on the pack in advance"
                - "Hold the review meeting and record decisions and owners @recurring(monthly:12)"
                - "Save the meeting notes beside the month's issued pack"
            - name: Action log from management accounts meetings
              description: |-
                ## Purpose
                The same problem appearing in the commentary three months running usually means actions agreed in meetings are not being followed through. A simple log of each action, its owner, due date and status, reviewed at the start of every meeting, closes the loop between reporting and running the business.

                ## Milestones
                1. An action log with action, owner, due date, status and the pack month that raised it.
                2. Every action from the last meeting entered.
                3. Open actions reviewed at the start of each meeting.
                4. Actions open for more than two months escalated or closed with a written reason.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "An action log reviewed at six consecutive meetings, with no action open over two months without a recorded reason."
                cadence: rolling
              tasks:
                - "Create the action log with owner, due date and status columns"
                - "Enter every action agreed at the last review meeting"
                - "Remind owners of open actions a week before the next meeting @recurring(monthly:25)"
                - "Close or escalate any action open for more than two months"
            - name: Monthly KPI page upkeep
              description: |-
                ## Purpose
                A small set of measures, tracked the same way every month, shows trends the profit and loss hides, such as order intake falling while revenue still looks fine. Keeping six to ten measures with definitions, sources and twelve months of history on one page gives readers an early warning they can trust.

                ## Milestones
                1. Six to ten measures chosen from the decisions brief.
                2. Each measure defined with its formula, source and owner.
                3. Twelve months of history loaded for every measure.
                4. The page updated on the timetable for six consecutive packs.

                ## Notes
                Start from the **Metrics log** template. A few tightly defined measures beat a long list whose definitions change every quarter.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A KPI page of six to ten defined measures with twelve months of history, updated on time for six consecutive packs."
                cadence: rolling
              tasks:
                - "Choose six to ten measures that link to readers' decisions"
                - "Write a definition, formula, source and owner for each measure"
                - "Load twelve months of history for every measure"
                - "Update the KPI page from its source data @recurring(monthly:4)"
            - name: Balance sheet and working capital summary page
              description: |-
                ## Purpose
                Profit can look healthy while cash drains into unpaid invoices and stock, and many owner-managed packs leave the balance sheet out entirely. A one-page summary of debtors, creditors, stock, cash and borrowings, with debtor, creditor and stock days, shows where money is tied up this month.

                ## Milestones
                1. A summary balance sheet of no more than fifteen lines.
                2. Debtor, creditor and stock days calculated the same way every month.
                3. Movements over the balance sheet threshold explained in a line each.
                4. Six months of the page issued, with trends visible.

                ## Notes
                Improving working capital is its own area. This page shows the position clearly enough to prompt the right question.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A one-page balance sheet summary including debtor, creditor and stock days, issued in six consecutive packs."
                cadence: rolling
              tasks:
                - "Group the balance sheet into no more than fifteen summary lines"
                - "Write the formula used for debtor, creditor and stock days"
                - "Update the balance sheet page and its day counts @recurring(monthly:9)"
                - "Explain each balance sheet movement over the threshold in one line"
            - name: Cash summary page linking profit to cash
              description: |-
                ## Purpose
                The commonest question an owner asks of management accounts is why there is a profit but less money in the bank. A cash page that starts from operating profit and walks through changes in debtors, stock, creditors, tax, capital spend, loan repayments and owner drawings to the movement in cash answers it every month.

                ## Milestones
                1. A profit to cash walk of no more than ten steps.
                2. Closing cash on the page agreed to the bank balances in the ledger.
                3. One sentence explaining the largest gap between profit and cash.
                4. The page included in six consecutive packs.

                ## Notes
                Forecasting future cash is a separate area. This page explains what has already happened.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A profit to cash walk, agreed to ledger bank balances, included in six consecutive packs with the largest gap explained."
                cadence: rolling
              tasks:
                - "Sketch the steps from operating profit to the movement in cash"
                - "Build the walk from last month's balance sheet movements"
                - "Update the cash page and agree closing cash to the ledger @recurring(monthly:8)"
                - "Write one sentence on the largest difference between profit and cash"
            - name: Quarterly reader feedback on the pack
              description: |-
                ## Purpose
                Readers rarely say a pack is unhelpful; they quietly stop reading parts of it. Asking three short questions each quarter (what did you use, what did you skip, what was missing) and sorting the answers into themes keeps the pack shaped by real use rather than habit.

                ## Milestones
                1. Three standard feedback questions written.
                2. Feedback collected from every regular reader once a quarter.
                3. Answers grouped into themes with a count of mentions.
                4. At least one change made to the pack after each round.

                ## Notes
                Start from the **Feedback themes** template.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Four quarterly feedback rounds completed, each with themed results and at least one change made to the pack."
                cadence: rolling
              tasks:
                - "Write three short feedback questions about the pack"
                - "Send the feedback questions to every regular reader @recurring(quarterly)"
                - "Group the answers into themes and count the mentions"
                - "Make one change to the pack from each round"
            - name: Annual pack refresh at the start of the financial year
              description: |-
                ## Purpose
                New financial years change almost everything the pack depends on: the budget column, year-to-date totals, prior year comparatives and sometimes the layout itself. Running a set refresh before month one is reported avoids a first pack full of last year's budget and broken year-to-date formulas.

                ## Milestones
                1. The new year's approved budget loaded into the pack.
                2. Year-to-date and prior year columns reset and tested.
                3. Layout changes agreed during the year applied, with history restated.
                4. Month one of the new year issued without formula errors.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "The pack refreshed before month one of each new financial year, with the new budget loaded and year-to-date columns tested."
                cadence: cyclic
              tasks:
                - "List every pack element that changes at the start of a financial year"
                - "Load the approved budget for the new year into the pack"
                - "Test the year-to-date and prior year columns with dummy figures"
                - "Run the new-year refresh checklist before month one is reported @recurring(yearly)"
            - name: Reading a management profit and loss
              description: |-
                ## Purpose
                Many owners and managers can read the bottom line but not the lines that explain it: gross margin, contribution, overhead ratio, EBITDA. A few hours learning what each line means, and how it moves when prices, volumes or costs change, makes every future pack faster to read and easier to question.

                ## Milestones
                1. Each line of your own management profit and loss explained in a sentence.
                2. Gross margin and gross margin percentage worked out by hand for last month.
                3. The difference between EBITDA, operating profit and net profit written in plain words.
                4. Three questions about last month's figures answered by the preparer.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A one-page note explaining each line of your own management profit and loss, with three questions answered by the preparer."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Print last month's management profit and loss"
                - "Write a one-sentence meaning beside each line"
                - "Work out gross margin percentage by hand and compare it with the pack"
                - "Send three questions about the figures to whoever prepares the pack"
            - name: Reading the balance sheet page
              description: |-
                ## Purpose
                Problems usually show first on the balance sheet, in growing debtors, ageing stock or a tax liability that has quietly built up, yet most non-finance readers skip straight past it. Learning what each summary line represents, and which movements are normal for your business, makes the page a tool rather than a formality.

                ## Milestones
                1. Each summary line on your balance sheet page explained in plain words.
                2. The link between the month's profit and the change in retained earnings understood.
                3. Three movements identified that would be worrying for your business, with the reason.
                4. A balance sheet question raised at a review meeting.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A plain-language note on each balance sheet line and three warning movements specific to your business, discussed at a review meeting."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Circle every line on the latest balance sheet page you cannot explain"
                - "Ask the preparer for twenty minutes to walk through the circled lines"
                - "Write down three movements that would worry you in your business"
                - "Raise one balance sheet question at the next review meeting"
            - name: Writing commentary that explains why, not what
              description: |-
                ## Purpose
                Weak commentary repeats the table in words, telling readers that revenue rose when they can already see that it rose. Strong commentary gives the cause, the size of its effect, whether it will recur and what is being done, in two or three sentences. It is a learnable skill, and practising on last month's pack is the quickest way to improve.

                ## Milestones
                1. Last month's commentary marked up to separate description from explanation.
                2. A four-part pattern adopted for each comment: cause, impact, recurring or not, next step.
                3. Three past comments rewritten using the pattern.
                4. A reader confirms the rewritten versions are more useful than the originals.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Three past comments rewritten in the cause, impact, recurrence and next step pattern, with a reader confirming the improvement."
                cadence: phased
                effort_hours_estimate: "5"
              tasks:
                - "Highlight every sentence in last month's commentary that only restates a number"
                - "Rewrite three comments using cause, impact, recurrence and next step"
                - "Ask a reader to compare the old and rewritten versions"
                - "Keep a short file of good comment examples to reuse"
            - name: Profit bridge from last month to this month
              description: |-
                ## Purpose
                Drawn as a waterfall chart, a profit bridge shows how one profit figure became another in a few bars: volume, price, mix, direct costs, overheads and one-offs. It answers the question readers ask first, and building one by hand teaches you which drivers really move your profit.

                ## Milestones
                1. Five to seven bridge steps chosen to fit how your business makes money.
                2. A bridge from last month's profit to this month's that adds up exactly.
                3. The bridge drawn as a waterfall chart.
                4. The bridge included on the summary page of the next pack.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: artifact
                success_criteria: "A profit bridge from last month to this month that adds up exactly, shown as a chart on the summary page of an issued pack."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Pick five to seven steps that explain profit changes in your business"
                - "Calculate each step between last month and this month"
                - "Check that the steps add up exactly to the change in profit"
                - "Draw the bridge as a waterfall chart for the summary page"
            - name: Charts that make the month's movements obvious
              description: |-
                ## Purpose
                Walls of numbers hide the trend, and cluttered charts hide it just as well. A few rules (lines for trends over time, bars for comparisons, a waterfall for bridges, no 3D effects, no more than four series, labels on the data instead of a legend) let each chart in the pack make one point at a glance.

                ## Milestones
                1. A short chart style guide written for the pack.
                2. Each chart in the pack checked for one clear message.
                3. The two most cluttered charts redrawn to the guide.
                4. Consistent colours for actual, budget and prior year across the pack.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A written chart style guide applied to every chart in an issued pack, with consistent colours for actual, budget and prior year."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "List every chart in the current pack and the message each should make"
                - "Write a five-rule chart style guide for the pack"
                - "Redraw the two most cluttered charts using the guide"
                - "Use one colour each for actuals, budget and prior year throughout"
            - name: Ratios that belong in a management pack
              description: |-
                ## Purpose
                Ratios turn amounts into something comparable across months of different sizes: gross margin percentage, overheads as a share of revenue, debtor days, the current ratio, revenue per head. Knowing how each is calculated, what moves it and which few matter for your business stops the pack filling with ratios nobody uses.

                ## Milestones
                1. Ten common management ratios understood, each with its formula.
                2. Four to six chosen as relevant to your business, with written reasons.
                3. Each chosen ratio calculated for the last six months.
                4. Ratios that inform no decision deliberately left out.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Four to six ratios chosen with written reasons, each calculated for six months and shown on the KPI page."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Write the formula for ten common management ratios"
                - "Choose the four to six that fit the decisions brief"
                - "Calculate the chosen ratios for the last six months"
                - "Note which ratios were left out and why"
            - name: Presenting the numbers to leadership in ten minutes
              description: |-
                ## Purpose
                Finance presentations often walk through the table line by line and run out of time before reaching the point. A ten-minute structure, with three messages, the evidence for each and the decision needed, keeps a leadership team or board on what matters and leaves room for questions.

                ## Milestones
                1. A ten-minute presentation structure written down.
                2. Last month's pack rehearsed aloud against it, timed.
                3. Three messages for the next meeting written before any slides.
                4. Feedback on clarity collected from one attendee after the meeting.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A ten-minute results presentation delivered at a review or board meeting, with one attendee's written feedback recorded."
                cadence: phased
                effort_hours_estimate: "5"
              tasks:
                - "Write the three messages from last month's pack in one sentence each"
                - "Build a ten-minute outline around those three messages"
                - "Rehearse the outline aloud with a timer running"
                - "Ask one attendee afterwards what was clear and what was not"
            - name: Spreadsheet checks that catch pack errors before readers do
              description: |-
                ## Purpose
                Most management packs still pass through a spreadsheet, and broken links, hard-typed numbers and rows left outside a total cause the errors readers remember. Learning a handful of checking techniques, and building a check sheet that flags anything off, protects the pack's credibility every month.

                ## Milestones
                1. A check sheet with tie-outs for profit, net assets and cash, plus cross-casts of every total.
                2. Hard-typed numbers inside formula areas found and replaced or labelled.
                3. External links listed and any broken ones fixed.
                4. The check sheet clear of failures before issue for three months.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: artifact
                success_criteria: "A check sheet covering tie-outs and cross-casts that showed no failures before issue for three consecutive packs."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Add a check sheet that compares key pack totals with their sources"
                - "Search the workbook for hard-typed numbers inside formula ranges"
                - "List every external link in the workbook and fix the broken ones"
                - "Make the check sheet show a clear flag when any check fails"
            - name: Reporting tool decision for the pack
              description: |-
                ## Purpose
                Packs can be built in a spreadsheet, in the accounting software's own report builder, in a dedicated reporting add-on or in a business intelligence tool, and each suits a different size and budget. Comparing two or three options against real needs (data sources, layout control, commentary, sharing, cost) avoids buying a tool that cannot produce the pack you designed.

                ## Milestones
                1. Requirements listed from the pack outline and timetable.
                2. Two or three options shortlisted, including staying with a spreadsheet.
                3. Each option tried on one real month of your own data.
                4. A decision recorded with annual cost, reasons and a switch-over month.

                ## Notes
                Start from the **Purchase decision** template. Trial each option with your own messy data, not the vendor's demo company.
              priority: medium
              deadlineOffsetDays: 60
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A recorded tool decision with annual cost and reasons, based on trials using one real month of your own data."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "List the must-have features from the pack outline and timetable"
                - "Shortlist two or three tools, including your current spreadsheet"
                - "Rebuild one real month's summary page in each shortlisted tool"
                - "Record the decision, the annual cost and the switch-over month"
            - name: Automated pack refresh from the accounting system
              description: |-
                ## Purpose
                Copying and pasting a trial balance into the pack every month takes hours and invites errors. Connecting the pack directly to the accounting system, through a built-in report, an add-on or a scheduled export, cuts refresh time so the preparer's effort goes into commentary instead.

                ## Milestones
                1. The current manual refresh steps listed and timed.
                2. A direct data connection or scheduled export set up.
                3. One month refreshed automatically and agreed to the manual version.
                4. Refresh time cut by at least half, measured over two months.

                ## Notes
                Keep the manual route written down for the month the connection fails, which tends to be the month it matters most.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "The pack refreshes from the accounting system without copy and paste, agreed to a manual run, with refresh time at least halved."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "Time each step of the current manual refresh"
                - "Set up a direct connection or scheduled export from the accounting system"
                - "Run one month both ways and agree the results"
                - "Check the data connection ran without errors before refreshing @recurring(monthly:2)"
            - name: Pruning the pack to the pages people read
              description: |-
                ## Purpose
                Over time a pack grows by addition: a page for one board question, a schedule for one audit, and nothing ever removed. Checking each page once a year against the decisions brief and reader feedback, and cutting or moving to the appendix anything unused, keeps the main pack short enough to read in fifteen minutes.

                ## Milestones
                1. Every page listed with who uses it and for what.
                2. Unused pages removed or moved to an appendix.
                3. The main pack back to ten pages or fewer.
                4. Readers told what was removed and how to ask for it back.
              priority: low
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "The main pack cut to ten pages or fewer after a page usage check, with readers told what moved."
                cadence: cyclic
              tasks:
                - "List every page and the last time anyone asked about it"
                - "Mark each page keep, move to appendix or remove"
                - "Tell readers what has moved and how to ask for it back"
                - "Repeat the page usage check across the whole pack @recurring(yearly)"
            - name: Non-financial measures beside the financials
              description: |-
                ## Purpose
                Financial figures report outcomes after the fact, while enquiries, orders, utilisation, staff numbers or complaints often move first. Adding three or four operating measures from outside the ledger, supplied by the managers who run them, gives the pack an earlier signal and connects the numbers to day-to-day work.

                ## Milestones
                1. Three or four operating measures chosen that lead revenue or cost.
                2. A data owner and source agreed for each measure.
                3. Each measure supplied on time for three months.
                4. Commentary linking at least one operating measure to a financial movement.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Three or four operating measures supplied by named owners for three consecutive packs, with at least one linked to a financial movement."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Ask managers which operating numbers move before revenue or cost do"
                - "Choose three or four measures and agree an owner for each"
                - "Set the working day each owner sends their figure"
                - "Link one operating measure to a financial movement in the commentary"
            - name: Department and location profit pages
              description: |-
                ## Purpose
                Once a business has more than one site, team or service line, a single company profit and loss hides which parts carry the others. A short profit page for each, built from tracking categories already in the ledger, lets each manager see their own results and lets the owner compare them fairly.

                ## Milestones
                1. The segments to report agreed: sites, departments or service lines.
                2. Tagging checked so at least 95 percent of transactions carry a segment.
                3. A one-page profit view for each segment down to direct contribution.
                4. Each manager walked through their own page once.

                ## Notes
                Allocating shared overheads across segments is a separate exercise. Stopping at direct contribution avoids arguments about allocation keys.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A contribution page for each agreed segment included in the pack, with at least 95 percent of transactions tagged."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Agree which sites, departments or service lines get their own page"
                - "Check what share of last month's transactions carry a segment tag"
                - "Build a profit page for each segment down to direct contribution"
                - "Send each manager their own page with the pack @recurring(monthly:11)"
            - name: One-off and exceptional items policy
              description: |-
                ## Purpose
                One large legal bill, an insurance payout or a restructuring cost can swamp a month's results and make trends unreadable. A written policy for what counts as one-off, how it is shown (usually a separate line below underlying profit) and who approves the label stops the category becoming a place to hide bad news.

                ## Milestones
                1. A definition of a one-off item, with examples and an amount floor.
                2. A presentation rule showing underlying profit and one-offs separately.
                3. The one-off label approved each month by someone other than the preparer.
                4. A running list of items labelled one-off, reviewed each year for repeats.

                ## Notes
                If the same kind of one-off turns up every year, it is a cost of doing business, and readers and later buyers will treat it that way.
              priority: medium
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A written one-off items policy approved by the owner or board, with a running list of every item labelled since adoption."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Write a definition of a one-off item with three examples"
                - "Set an amount below which nothing is treated as one-off"
                - "Agree who approves the one-off label each month"
                - "Start a list of every item labelled one-off with its month and amount"
            - name: Bringing pack issue forward to working day seven
              description: |-
                ## Purpose
                If the pack lands in the third week, readers have already made the month's decisions without it. Mapping where the days go between handover and issue, and removing waits and rework, can usually bring a fifteen-day pack down to seven without late nights, as long as the close keeps pace.

                ## Milestones
                1. Each step between month end and issue mapped with its elapsed days.
                2. The three biggest delays identified, each with its cause.
                3. A fix in place for each delay, such as earlier data requests or parallel review.
                4. Three consecutive packs issued by working day seven.

                ## Notes
                Shortening the close itself is covered in the close area. Focus here on the reporting days after handover.
              priority: medium
              deadlineOffsetDays: 120
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Three consecutive packs issued by working day seven, with the timing of each step recorded."
                cadence: phased
                effort_hours_estimate: "12"
              tasks:
                - "Record the working day each pack step finished for the last two months"
                - "Pick the three longest waits and find their causes"
                - "Agree one fix for each wait with the people involved"
                - "Record the issue day of each of the next three packs"
            - name: First pack issued on the new layout
              description: |-
                ## Purpose
                Readers will judge the whole redesign by the first pack on the new layout, so treat it as a launch. A dry run on the previous month, a covering note explaining what changed and time in the next meeting to walk through it get the new format adopted rather than resisted.

                ## Milestones
                1. A dry run on the previous month completed and reviewed.
                2. A covering note explaining what changed and why.
                3. The first pack issued on the date in the timetable.
                4. A walkthrough held at the first review meeting, with questions recorded.
              priority: high
              deadlineOffsetDays: 60
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "The first pack on the new layout issued on its timetabled date with a covering note, and walked through at a review meeting."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Produce a dry-run pack from last month's closed numbers"
                - "Write a half-page note on what changed and why"
                - "Issue the first pack on the timetabled date"
                - "Walk readers through the new layout at the review meeting"
            - name: Finance section of the next board pack
              description: |-
                ## Purpose
                Board members read the finance section to judge whether the business is on track and whether management knows why. Preparing it from the monthly pack, with a summary of key messages, the quarter's trends, the main risks and the decisions the board is asked to take, keeps the meeting on direction rather than arithmetic.

                ## Milestones
                1. The board meeting date and paper deadline confirmed with the chair or company secretary.
                2. A one-page finance summary with three to five messages.
                3. Supporting pages taken from the monthly pack without re-keying.
                4. Decisions requested from the board stated clearly.
                5. Board questions and the answers given recorded after the meeting.

                ## Notes
                Start from the **Board meeting** template. Send papers at least five working days ahead unless your board has agreed otherwise.
              priority: medium
              deadlineOffsetDays: 45
              frontmatter:
                mode: event
                output_kind: deliverable
                success_criteria: "A finance board paper sent by the agreed deadline, with a summary page, the decisions requested and the board's questions recorded."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Confirm the board meeting date and the paper deadline"
                - "Draft a one-page finance summary with three to five messages"
                - "Pull the supporting pages straight from the monthly pack"
                - "Record the board's questions and the answers given"
            - name: Half-year results review with owners or the board
              description: |-
                ## Purpose
                Six months in is late enough to see real trends and early enough to change the second half. A half-year review that sets the first six months against last year and the budget, and agrees what has to be true for the full year, gives owners or the board a natural point to adjust plans.

                ## Milestones
                1. A six-month summary with year-on-year and budget comparisons.
                2. The three biggest differences from plan explained.
                3. A full-year view agreed, with its assumptions written down.
                4. Changes agreed at the review recorded, each with an owner.
              priority: medium
              deadlineOffsetDays: 180
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A half-year review held with a six-month summary, written full-year assumptions and owned actions recorded."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Book the half-year review for the month after month six closes"
                - "Build a six-month summary against last year and budget"
                - "Write down what has to be true for the full year to land"
                - "Record each change agreed and who owns it"
            - name: Year-end reconciliation of management to statutory accounts
              description: |-
                ## Purpose
                When the year-end accounts come back from the accountant with a different profit from month twelve of the management accounts, readers lose trust in both. Reconciling the two, adjustment by adjustment, and feeding the lessons back into the monthly routine keeps management figures credible the following year.

                ## Milestones
                1. Full-year management profit set beside the statutory profit.
                2. Each difference listed with its cause and amount.
                3. Differences that could have been caught monthly identified.
                4. The monthly routine changed to catch them in future.
              priority: medium
              frontmatter:
                mode: event
                output_kind: artifact
                success_criteria: "A written reconciliation of full-year management and statutory profit, with at least one monthly routine change made as a result."
                cadence: cyclic
              tasks:
                - "Put month twelve management profit beside the year-end accounts profit"
                - "List each adjustment that explains the difference"
                - "Mark which adjustments could have been booked monthly"
                - "Reconcile management and statutory profit once the accounts are signed @recurring(yearly)"
            - name: Financial year in review pack
              description: |-
                ## Purpose
                Month twelve is also the moment to look at the whole year at once: revenue and margin trends, the biggest cost changes, the cash generated and what the year taught. A short year-in-review pack, issued alongside month twelve, gives owners and teams a shared account of the year before next year's plans are argued over.

                ## Milestones
                1. Twelve-month trend charts for revenue, gross margin, overheads and cash.
                2. The five biggest changes from the prior year explained.
                3. Three lessons for next year written down.
                4. The review shared with owners and the leadership team.
              priority: low
              frontmatter:
                mode: event
                output_kind: deliverable
                success_criteria: "A year-in-review pack with twelve-month trends, five explained changes and three lessons, shared with owners and leadership."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Pull twelve-month trends for revenue, margin, overheads and cash"
                - "Explain the five largest changes from the previous year"
                - "Ask the agent to draft the year's story from the twelve monthly commentaries"
                - "Share the year in review with owners and leadership"
            - name: Founder's monthly investor update from the management accounts
              description: |-
                ## Purpose
                Investors who hear from a founder every month, in good months and bad, tend to be calmer and more helpful when trouble comes. Building the update from the management accounts, with the same five or six figures each time (revenue, gross margin, burn, cash, runway and one operating measure) plus highlights, lowlights and asks, takes an hour once the pack exists.

                ## Milestones
                1. A fixed update format with the same figures every month.
                2. Every figure in the update traced to the issued pack.
                3. Highlights, lowlights and specific asks included each time.
                4. Six consecutive monthly updates sent.

                ## Notes
                Check the information rights in your investment agreement: they may set what must be reported and by when, which is separate from what you choose to share.
              priority: medium
              frontmatter:
                mode: service
                output_kind: habit
                success_criteria: "Six consecutive monthly investor updates sent, each using the same figures traced to that month's issued pack."
                cadence: rolling
              tasks:
                - "Choose the five or six figures that appear in every update"
                - "Draft the update format with highlights, lowlights and asks"
                - "Send the investor update built from the issued pack @recurring(monthly:15)"
                - "Check your investment agreement for the reporting it requires"
            - name: One-page pack for an owner without a finance team
              description: |-
                ## Purpose
                Plenty of owners receive a full set of reports from their bookkeeper and read none of them, because there is no time. A single page with revenue, gross margin, overheads, profit, cash, and money owed in and out, plus three lines of comment, produced from the accounting software in under an hour, is enough to run a small business well.

                ## Milestones
                1. A one-page layout agreed with the bookkeeper or built yourself.
                2. The page produced within ten days of each month end.
                3. Three lines of comment written by the owner each month.
                4. Six months of pages kept together so trends are visible.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Six consecutive one-page packs completed within ten days of month end, each with three lines of the owner's own comment."
                cadence: rolling
              tasks:
                - "List the eight figures you would want if you read only one page"
                - "Save a report in your accounting software for each of those figures"
                - "Fill in the one-page pack and write three lines of comment @recurring(monthly:10)"
                - "Keep the pages in date order so trends show at a glance"
            - name: Budget holder's guide to reading their own page
              description: |-
                ## Purpose
                Department managers often receive a page of numbers with no explanation of where they came from or what is expected of them. A two-page guide from finance, covering what each line includes, how costs reach their page, how to spot a miscoding and what to send back each month, turns budget holders into useful contributors to the commentary.

                ## Milestones
                1. A two-page guide written for managers, not accountants.
                2. A worked example of one manager's page, annotated.
                3. The monthly ask set out: confirm the figures and explain movements over the threshold.
                4. The guide walked through with each budget holder once.
              priority: low
              frontmatter:
                mode: service
                output_kind: artifact
                success_criteria: "A two-page guide issued to every budget holder and walked through with each, with most returning monthly confirmations within three months."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Annotate one manager's page with where each line comes from"
                - "Write a two-page plain-language guide for budget holders"
                - "Set out what each manager is asked to send back each month"
                - "Walk each budget holder through the guide in a short meeting"
            - name: Inheriting the management accounts as a new finance lead
              description: |-
                ## Purpose
                New finance managers and controllers usually inherit a pack built by someone else, with undocumented steps, hidden adjustments and readers used to its quirks. Running the first two packs exactly as found while writing down every step, then agreeing changes with readers, avoids both breaking something nobody understood and keeping problems out of politeness.

                ## Milestones
                1. The existing pack's sources, steps and manual adjustments documented.
                2. The first two packs issued unchanged and on time.
                3. A list of issues and proposed changes, ranked by risk.
                4. Changes agreed with the main readers before any are made.
              priority: medium
              deadlineOffsetDays: 60
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "Two inherited packs issued on time with every step documented, followed by a ranked change list agreed with the main readers."
                cadence: phased
                effort_hours_estimate: "12"
              tasks:
                - "Replay the previous preparer's last pack step by step"
                - "Write down every manual adjustment and where it comes from"
                - "Issue the next two packs without changing the format"
                - "Agree a ranked list of changes with the main readers"
            - name: Briefing an external bookkeeper to produce the pack
              description: |-
                ## Purpose
                Many small businesses pay an outside bookkeeper or accountant for monthly management accounts and receive a standard report that answers nobody's questions. A written brief covering layout, comparatives, commentary threshold, issue date and review gets you the pack you designed and makes the fee easier to judge.

                ## Milestones
                1. A written brief covering layout, columns, threshold and issue date.
                2. The brief discussed and any extra fee agreed in writing.
                3. The first pack produced to the brief and checked against it.
                4. Feedback on the first pack sent and the changes confirmed.

                ## Notes
                Choosing and managing the accountant is its own area. This brief covers only what the monthly pack must contain.
              priority: medium
              deadlineOffsetDays: 45
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A written pack brief accepted by the external bookkeeper, with the first pack produced to it and written feedback sent."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Write a one-page brief describing the pack you want each month"
                - "Send the brief and ask for any fee change in writing"
                - "Check the first pack produced against each point in the brief"
                - "Send written feedback on the first pack within a week"
            - name: Seasonal business pack built around the same month last year
              description: |-
                ## Purpose
                In a seasonal business, comparing December with November says little, and a normal quiet month can look like a crisis. Leading the pack with the same month last year, a rolling twelve-month total and season-to-date figures shows whether the business is really ahead or behind.

                ## Milestones
                1. Same month last year set as the main comparison on the summary page.
                2. Rolling twelve-month totals for revenue and profit added.
                3. Season-to-date figures defined around your actual trading season, not the calendar year.
                4. Commentary reframed around the season rather than the previous month.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A pack leading with same month last year, rolling twelve-month totals and season-to-date figures, issued for three months."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Mark the start and end of your trading season on a calendar"
                - "Move same month last year into the first comparison column"
                - "Add rolling twelve-month totals for revenue and profit"
                - "Add season-to-date figures to the summary page"
            - name: Normalised EBITDA schedule for investors and lenders
              description: |-
                ## Purpose
                Investors, lenders and buyers usually look at EBITDA adjusted for one-offs, owner costs and other items they treat as non-recurring, and they will build their own version if you do not. Keeping a monthly schedule from reported to normalised EBITDA, with every adjustment evidenced, means the figure you present has already survived scrutiny.

                ## Milestones
                1. Reported EBITDA defined and reconciled to operating profit.
                2. Each adjustment listed with amount, month, evidence and reason.
                3. A monthly normalised EBITDA trend covering at least twelve months.
                4. The schedule reviewed by your external accountant before it is shared.

                ## Notes
                Adjustments are judgements and will be challenged. Keep them few, evidenced and consistent, and take professional advice before relying on them in a transaction or a loan covenant.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A twelve-month normalised EBITDA schedule with evidenced adjustments, reviewed by an external accountant."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Reconcile reported EBITDA to operating profit for the last twelve months"
                - "List each proposed adjustment with its evidence and reason"
                - "Build a twelve-month normalised EBITDA trend"
                - "Ask your external accountant to review the adjustments"
            - name: Four-four-five period reporting decision
              description: |-
                ## Purpose
                Calendar months have different numbers of trading days and weekends, which distorts month-on-month comparisons for retail, hospitality and production businesses. Some move to thirteen four-week periods or a four-four-five quarter pattern, and because the choice affects payroll, the close, tax periods and every comparative, it deserves a written decision.

                ## Milestones
                1. The distortion from calendar months measured on last year's figures.
                2. Calendar months, four-four-five and thirteen periods compared on effort and benefit.
                3. Effects on payroll, tax returns and the year end confirmed with your accountant.
                4. A decision recorded, with a start date if changing.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A written decision on reporting periods, based on last year's trading-day analysis and confirmed with your accountant."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Count the trading days in each month of last year beside its revenue"
                - "Compare calendar months, four-four-five and thirteen periods in a table"
                - "Ask your accountant how a change would affect tax and year-end filings"
                - "Record the decision and the reasons behind it"
            - name: Driver tree linking operating measures to profit
              description: |-
                ## Purpose
                Profit is the product of a few drivers, such as customer numbers, orders per customer, average price, margin per order and overheads per head, and a driver tree makes those links explicit. Building one for your business shows which measures deserve a place on the KPI page and lets commentary say how much each driver moved profit.

                ## Milestones
                1. A driver tree from operating profit down four or five levels to measurable drivers.
                2. Each driver at the bottom of the tree linked to a data source.
                3. Last month's profit change explained through the tree.
                4. The KPI page revised to show the drivers that matter most.
              priority: low
              frontmatter:
                mode: research
                output_kind: artifact
                success_criteria: "A driver tree with sourced bottom-level measures, used to explain one month's profit change and to revise the KPI page."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "Sketch a tree from operating profit down to measurable drivers"
                - "Find a data source for each driver at the bottom of the tree"
                - "Explain last month's profit change through the tree's drivers"
                - "Swap out KPI page measures that do not appear in the tree"
            - name: Restated comparatives after a reclassification
              description: |-
                ## Purpose
                When costs move between lines, a department is split or a revenue stream is regrouped, the comparatives stop being comparable and readers see movements that never happened. Restating prior months on the new basis, with a note explaining the change, keeps trends honest and saves commentary from explaining phantom swings.

                ## Milestones
                1. The reclassification documented with the accounts affected and the effective month.
                2. Prior months restated on the new basis back to the start of the comparative period.
                3. Restated totals agreed to the originally reported totals.
                4. A note in the pack explaining the change and its size.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Comparatives restated after a reclassification, with totals agreed to the original figures and a note in the issued pack."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Document the accounts and report lines affected by the reclassification"
                - "Restate prior months on the new basis in the history"
                - "Agree restated totals to the originally reported totals"
                - "Add a short note to the pack explaining the restatement"
---

# Management Accounts Reporting

This area is for whoever turns a closed month into numbers people decide from: an owner reading their own business, a finance manager producing the pack, or a founder reporting to investors and a board. It starts with foundations (the decisions the pack must support, a working-day timetable, a management profit and loss layout, comparatives and a commentary threshold), then the monthly machinery of refresh, commentary, review, meeting and actions, the reading, writing and charting skills behind a good pack, the improvements that make it faster and shorter, dated moments such as the first pack, the board paper and year end, situations for founders, owners, budget holders and new finance leads, and finally specialist work on normalised EBITDA, reporting periods, driver trees and restatements.

What repeats is a monthly rhythm: a flash note around the 3rd, the handover from the close, refresh and tie-out, the KPI, balance sheet and cash pages, commentary and a second-person review before issue around the 8th, then the review meeting and its action log. Reader feedback comes quarterly, and the reporting dates, layout and year-end reconciliation come round once a year. The Meeting notes, Metrics log, Feedback themes, Purchase decision and Board meeting templates pair with the projects that name them. Installing adds all 50 projects as active, so archive the ones that are not for you yet.
