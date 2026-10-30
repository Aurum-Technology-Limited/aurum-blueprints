---
id: finance-accounting.chart-of-accounts-design
name: Chart of Accounts Design
description: "A numbering scheme, clear rules for accounts versus tracking categories, clean-ups, monthly and yearly checks, so the chart of accounts gives owners and managers reports they can actually use."
category: business
version: 1.0.0
tags: [finance-accounting, chart-of-accounts-design, small-business, founder, manager, tracking-categories, account-mapping, general-ledger]
author: Aurum Technology
starter_structure:
  templates:
    - meeting-notes
    - metrics-log
    - operational-checklist
    - onboarding-30-60-90
  pillars:
    - name: Finance & Accounting
      emoji: "🧾"
      description: "The money side of a business: bookkeeping and the monthly close, cash flow, budgeting and forecasting, billing and collections, payroll, tax, audit and financial controls."
      pillarFrontmatter:
        review_cadence: monthly
      areas:
        - name: Chart of Accounts Design
          description: "Designing, cleaning up and extending the chart of accounts, tracking categories and classes so reports answer the questions owners and managers actually ask."
          projects:
            - name: Ten questions the reports must answer
              description: |-
                ## Purpose
                Most charts of accounts grow one account at a time as bills arrive, so nobody can say which questions the reports were meant to answer. Writing down the ten questions owners and managers ask most, such as margin by service line, payroll as a share of revenue or spend by site, gives every later design choice a test to pass.

                ## Milestones
                1. A list of ten questions gathered from the owner, managers and the accountant.
                2. Each question marked with the report and the level of detail it needs.
                3. Questions the current books cannot answer flagged.
                4. The list agreed and saved with the chart of accounts notes.

                ## Notes
                Keep it to ten. A chart designed to answer fifty questions ends up with hundreds of accounts that nobody codes consistently.
              priority: high
              deadlineOffsetDays: 14
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A written list of ten agreed reporting questions exists, each marked with the report it needs and whether today's books can answer it."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Write down the five questions you ask most often about the numbers"
                - "Ask each manager and the accountant for their top two questions"
                - "Mark which questions today's reports cannot answer"
                - "Agree the final ten and save them with the chart notes"
            - name: Account usage census of the current chart
              description: |-
                ## Purpose
                Before changing anything, you need to know what is in the chart now: how many accounts exist, which carry most of the transactions and which have not been touched in a year. An export with twelve months of transaction counts and balances per account shows where the clutter, duplicates and overloaded catch-all accounts really are.

                ## Milestones
                1. The full chart exported with code, name, type, tax default and status.
                2. Twelve months of transaction counts and balances added against every account.
                3. Accounts with no activity, very few postings or suspiciously many postings marked.
                4. A short summary of the main problems written above the export.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: research
                output_kind: artifact
                success_criteria: "A spreadsheet lists every account with its type, twelve-month transaction count and balance, with unused, duplicate and overloaded accounts marked."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Export the full chart of accounts from the accounting software"
                - "Run an account transactions summary for the last twelve months"
                - "Join the counts and balances to the exported chart in one sheet"
                - "Mark accounts with no postings, under five, or over five hundred"
            - name: Tax return and statutory accounts line requirements
              description: |-
                ## Purpose
                Your accountant has to turn the ledger into the annual accounts and the tax return, and every account that does not map cleanly to a line costs them time and you fees. Asking them once which lines they need, and which costs the tax authority treats differently, such as entertaining, fines or private use, means the chart separates what the year end needs separated.

                ## Milestones
                1. A meeting held with the accountant on what the year end and tax return need from the chart.
                2. A list of costs that must sit in their own account for tax reasons.
                3. The statutory lines each group of accounts feeds noted.
                4. Changes the accountant recommends written up with their reasons.

                ## Notes
                Start from the **Meeting notes** template. The accountant decides the tax treatment; your job is to make sure the chart keeps apart the items they need kept apart.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "Written notes from the accountant list every cost that needs its own account for tax and the statutory line each account group maps to."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Email the accountant asking for a short meeting on the chart of accounts"
                - "Send them the account usage census before the meeting"
                - "Ask which costs the tax return needs kept in separate accounts"
                - "Write up their recommended changes and reasons the same day"
            - name: Account numbering scheme with room to grow
              description: |-
                ## Purpose
                A numbering scheme decides where every future account goes, so getting it right once saves years of awkward codes squeezed between neighbours. Fixing the digit length, the range for each account type and the gaps left between accounts means a new bank account or cost line has an obvious home, and reports can total by range.

                ## Milestones
                1. A digit length chosen that suits the size of the business, commonly four or five.
                2. A range assigned to assets, liabilities, equity, revenue, cost of sales and overheads.
                3. A rule for the gaps between accounts, such as steps of ten.
                4. The scheme written on one page and checked against the software's code limits.

                ## Notes
                Some small business software hides account codes by default. Use them anyway if the software allows it: codes make ordering and range totals far easier.
              priority: high
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A one-page numbering scheme sets the digit length, the range for every account type and the gap rule, and fits the software's code limits."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Check the maximum code length your accounting software allows"
                - "Pick a range for each of the six main account types"
                - "Decide the step between neighbouring accounts within a range"
                - "Write the scheme on one page with three worked examples"
            - name: Account naming and description standard
              description: |-
                ## Purpose
                Accounts called Misc 2, Sundries Old or a supplier's name get picked at random by whoever codes the next bill. A short naming standard, with plain nouns, no abbreviations, no people or supplier names and a one-line description on every account saying what belongs there, makes the right choice obvious to a new bookkeeper.

                ## Milestones
                1. Five naming rules written and agreed.
                2. Every account renamed where it breaks a rule.
                3. A one-line description on each active account saying what goes in and what does not.
                4. No account left named after a person, supplier or year.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Every active account follows the five naming rules and carries a description saying what belongs in it and what does not."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Draft five naming rules for accounts, with one example each"
                - "List every account whose name breaks a rule"
                - "Ask the agent to draft a one-line description for each active account"
                - "Rename the accounts and paste in the agreed descriptions"
            - name: Balance sheet control accounts set
              description: |-
                ## Purpose
                Control accounts such as receivables, payables, sales tax, payroll liabilities, accruals and suspense hold the balances that prove the books are complete, and they break when people post to them by hand. Setting out exactly which control accounts the business needs, restricting manual posting where the software allows and naming one clearing account per purpose keeps the balance sheet provable.

                ## Milestones
                1. A list of the control and clearing accounts the business needs, each with its purpose.
                2. Duplicate or unused control accounts identified for merging or archiving.
                3. Manual posting restricted on system control accounts where the software allows it.
                4. One clearing account per purpose, such as card payouts or payroll, with a rule that it should be empty at month end.
              priority: high
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A documented set of control and clearing accounts exists, each with a purpose and expected month-end balance, with manual posting restricted where possible."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "List every balance sheet account that is fed by a sub-ledger or app"
                - "Mark which ones the software lets you protect from manual journals"
                - "Write the purpose and expected month-end balance of each clearing account"
                - "Look for manual journals posted to control accounts @recurring(monthly:7)"
            - name: Revenue accounts by income stream
              description: |-
                ## Purpose
                Putting everything in a single Sales account hides whether growth came from projects, retainers, product sales or one-off fees, yet an account per customer makes reports unreadable. Splitting revenue into three to eight accounts that match the way the business actually earns money, and leaving customer and product detail to the sales ledger, gives a profit and loss that shows where income comes from.

                ## Milestones
                1. The ways the business earns money listed, with their share of last year's revenue.
                2. Three to eight revenue accounts agreed, each matching an income stream.
                3. Discounts, refunds and delivery charges given a clear home.
                4. Every invoice item or product pointed at the right revenue account.
              priority: medium
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "The chart holds three to eight revenue accounts that match the business's income streams, and every sales item points to one of them."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "List every way the business earned money in the last twelve months"
                - "Group the list into no more than eight income streams"
                - "Decide where discounts, refunds and delivery charges will post"
                - "Point each invoice item or product at its new revenue account"
            - name: Cost of sales and overheads boundary
              description: |-
                ## Purpose
                Gross margin only means something if the same costs sit above the line every month, and many charts put subcontractors, materials and packaging into overheads one month and cost of sales the next. Drawing the boundary in writing, for example that direct labour, materials and payment fees on sales are cost of sales and rent is not, makes margin comparable from month to month and against peers.

                ## Milestones
                1. A written definition of cost of sales for this business.
                2. Every expense account labelled as cost of sales or overhead.
                3. Accounts sitting on the wrong side of the line moved.
                4. The accountant's agreement to the boundary recorded.

                ## Notes
                There is no single right answer for service businesses. Pick a definition, write it down and apply it consistently, which matters more than exactly where the line falls.
              priority: high
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A written cost of sales definition exists, every expense account is labelled to one side of it and the accountant has agreed it."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Write one sentence defining cost of sales for your business"
                - "Label every expense account as cost of sales or overhead"
                - "Move the accounts that sit on the wrong side of the line"
                - "Send the definition to the accountant for agreement"
            - name: Account or tracking category decision rule
              description: |-
                ## Purpose
                The commonest cause of a bloated chart is creating a new account for every branch, project or product instead of tagging transactions with a tracking category, class or department. A one-page rule for when something earns its own account and when it becomes a tag stops the chart doubling in size the first time the business opens a second site.

                ## Milestones
                1. The tracking features your software offers, and how many categories it allows, confirmed.
                2. A written rule: accounts describe what was bought or earned, tags describe where or for whom.
                3. Five real examples worked through the rule.
                4. Existing accounts that should have been tags listed for later clean-up.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A one-page rule separates accounts from tracking categories, with five worked examples and a list of existing accounts that should become tags."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Check how many tracking categories or classes your software supports"
                - "Write the rule separating accounts from tags in two sentences"
                - "Test the rule on five recent requests for a new account"
                - "List existing accounts that should become tracking options"
            - name: Chart change owner and approval rule
              description: |-
                ## Purpose
                When anyone with access can add an account, the chart drifts back to clutter within a year of a clean-up. Naming one owner for the chart, a simple request route and a short list of who may create, rename or archive accounts keeps changes deliberate without slowing the bookkeeper down.

                ## Milestones
                1. One named owner of the chart of accounts and one deputy.
                2. A request route for new accounts, with a reason and the report question each serves.
                3. Account creation rights limited to the owner and deputy in the software.
                4. The rule shared with everyone who codes transactions.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A named chart owner and deputy hold the only rights to create or archive accounts, and a written request route has been shared with all coders."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Name the chart owner and a deputy"
                - "Check which users can create or edit accounts in the software"
                - "Remove account creation rights from everyone else"
                - "Review who holds account editing rights @recurring(yearly)"
            - name: Monthly misused account check
              description: |-
                ## Purpose
                Even a well designed chart decays one posting at a time: rent coded to repairs, a laptop in office supplies, a client refund in bank charges. A twenty-minute look each month at the accounts most often misused catches the pattern while it is still a handful of entries rather than a year of them.

                ## Milestones
                1. A shortlist of the eight to ten accounts most prone to misuse.
                2. A monthly slot in the calendar after the bookkeeping is up to date.
                3. Each month's mispostings found and corrected, with the coder told why.
                4. A running note of repeat mistakes fed into the account descriptions.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Twelve monthly checks completed in a year, each recording the mispostings found, corrected and explained to the person who coded them."
                cadence: rolling
              tasks:
                - "Pick the eight accounts most often coded wrongly in the census"
                - "Scan the month's postings in those eight accounts @recurring(monthly:9)"
                - "Tell the coder about each correction and the reason for it"
                - "Add any repeat mistake to that account's description"
            - name: New account request log
              description: |-
                ## Purpose
                Requests for new accounts usually arrive as a quick message and get created on the spot, which is how charts end up with three versions of software costs. Logging every request with its reason, the reporting question it serves and the decision taken gives the chart owner a record to batch, approve or refuse each quarter.

                ## Milestones
                1. A request log with date, requester, proposed account, reason and decision.
                2. Every account created since the last clean-up entered in the log.
                3. Quarterly decisions taken in one sitting rather than one by one.
                4. Refused requests answered with the tag or existing account to use instead.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A request log holds every account request with a decision, and four quarterly approval sittings have been held in twelve months."
                cadence: rolling
              tasks:
                - "Create the request log with columns for reason and decision"
                - "Enter every account created since the last clean-up"
                - "Decide the open account requests in one sitting @recurring(quarterly)"
                - "Reply to each refused request with the account or tag to use"
            - name: Tracking option list upkeep
              description: |-
                ## Purpose
                Tracking options multiply quietly: finished projects, closed sites and misspelt duplicates pile up until the drop-down list is too long to pick from correctly. Tidying the options each quarter, archiving the finished ones and merging duplicates, keeps tagging fast and reports by class clean.

                ## Milestones
                1. Every tracking category and its options listed with a last-used date.
                2. Finished, duplicate and misspelt options archived or merged.
                3. A naming rule for new options agreed, such as site name then town.
                4. The list tidied four times in a year.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Each tracking category holds only live, uniquely named options, checked and tidied four times in twelve months."
                cadence: rolling
              tasks:
                - "Export every tracking category with its options"
                - "Mark options not used in the last six months"
                - "Archive finished options and merge misspelt duplicates @recurring(quarterly)"
                - "Write the naming rule for new options at the top of the list"
            - name: Monthly tagging completeness check
              description: |-
                ## Purpose
                Reports by department, site or project are only as good as the share of transactions that carry a tag, and a gap of ten percent can make one site look far more profitable than it is. Measuring the untagged share each month, by value rather than count, and fixing the gaps before reports go out keeps class reports credible.

                ## Milestones
                1. A saved report showing revenue and costs with no tracking tag, by value.
                2. A target agreed, for example no more than two percent of costs untagged.
                3. Untagged items fixed each month before reports are shared.
                4. Twelve months of the untagged share recorded.

                ## Notes
                Start from the **Metrics log** template to record the untagged share each month.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Untagged revenue and costs are measured each month and stay under the agreed share for six months in a row."
                cadence: rolling
              tasks:
                - "Build a saved report of transactions with no tracking tag"
                - "Agree the maximum untagged share with whoever reads the reports"
                - "Record the untagged share and fix the gaps @recurring(monthly:5)"
                - "Find out why the most common untagged items were missed"
            - name: Year-end chart of accounts review
              description: |-
                ## Purpose
                The financial year end is the cleanest moment to change a chart, because new accounts start the year with nothing to reclassify. A review two months before the year end, covering unused accounts, new reporting needs, accountant feedback and tax changes, lets agreed changes go live on the first day of the new year.

                ## Milestones
                1. The review held at least two months before the financial year end.
                2. Unused accounts, open requests and accountant feedback considered together.
                3. Changes for next year agreed and listed with their effective date.
                4. Changes made in the software on the first day of the new year.
              priority: high
              frontmatter:
                mode: operating
                output_kind: event-completion
                success_criteria: "A chart review is held before each financial year end, with changes listed and live from the first day of the following year."
                cadence: cyclic
              tasks:
                - "Book the chart review two months before the year end @recurring(yearly)"
                - "Gather the request log, the census and the accountant's notes"
                - "Agree the list of changes and their effective date"
                - "Make the agreed changes in the software on the first day of the year"
            - name: Chart of accounts master document and change log
              description: |-
                ## Purpose
                Software holds the accounts but not the thinking behind them: why there are two payroll cost accounts, when the sundry account was split, what each range is for. A master document with the scheme, the rules and a dated change log means a new bookkeeper, auditor or finance hire can understand the chart in an hour.

                ## Milestones
                1. A master document holding the numbering scheme, naming rules and the account or tag rule.
                2. Every account listed with code, name, type, description and report group.
                3. A change log with date, change, reason and approver.
                4. The document checked against the software every quarter.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: artifact
                success_criteria: "A master document and change log match the live chart, with every change since the clean-up recorded and a quarterly check done."
                cadence: rolling
              tasks:
                - "Create the master document with sections for rules and accounts"
                - "Paste in the current chart with descriptions and report groups"
                - "Start the change log from the date of the last clean-up"
                - "Compare the master document with the live chart @recurring(quarterly)"
            - name: Report line mapping table upkeep
              description: |-
                ## Purpose
                Each account has to land on the right line of the management profit and loss, the statutory accounts and often a tax return, and those mappings break whenever an account is added without one. A mapping table, with one row per account and one column per report, keeps every report reconcilable to the trial balance.

                ## Milestones
                1. A table with one row per account and a column for each report it feeds.
                2. Every active account mapped to a line in every column.
                3. Each report checked to total back to the trial balance.
                4. The table updated whenever an account is added and reviewed yearly with the accountant.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: artifact
                success_criteria: "Every active account maps to a line on the management, statutory and tax reports, and each report totals back to the trial balance."
                cadence: rolling
              tasks:
                - "List the reports the chart has to feed"
                - "Fill in the report mapping for every active account"
                - "Total each mapped report and compare it with the trial balance"
                - "Walk through the mapping table with the accountant @recurring(yearly)"
            - name: Connected app posting map check
              description: |-
                ## Purpose
                Payroll, point of sale, ecommerce, expense and invoicing apps each post into accounts chosen when they were connected, often by someone who has since left. After any chart change those mappings can point at archived or wrong accounts, so a quarterly look at where each app posts stops silent misposting at volume.

                ## Milestones
                1. A list of every app that posts into the ledger, with the accounts it uses.
                2. Each mapping checked against the current chart.
                3. Wrong or archived accounts corrected in the app settings.
                4. The list rechecked every quarter and after every chart change.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A list of every connected app and its posting accounts is current and has been checked against the chart four times in a year."
                cadence: rolling
              tasks:
                - "List every app that posts transactions into the ledger"
                - "Open each app's account mapping settings and note the accounts"
                - "Correct mappings that point at archived or wrong accounts"
                - "Recheck every app's account mapping against the chart @recurring(quarterly)"
            - name: Quarterly report test against the ten questions
              description: |-
                ## Purpose
                Redesign work is only finished when the reports actually answer the questions it was built for. Running the ten agreed questions against the latest quarter's reports, and noting any that still need a spreadsheet workaround, shows whether the chart and tags are doing their job or need adjusting.

                ## Milestones
                1. Each of the ten questions answered from standard reports for the latest quarter.
                2. Questions needing manual work flagged with the reason.
                3. Fixes to accounts, tags or report layouts listed.
                4. The test repeated each quarter with the results kept.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Four quarterly tests show each of the ten questions answered from standard reports, with any gaps and their fixes recorded."
                cadence: rolling
              tasks:
                - "Open the list of ten agreed reporting questions"
                - "Answer each question from standard reports for the last quarter @recurring(quarterly)"
                - "Note which answers needed a spreadsheet and why"
                - "Add the fixes to the new account request log"
            - name: Budget lines matched to the chart each year
              description: |-
                ## Purpose
                Budget versus actual reports fall apart when the budget is built on a different list of lines from the ledger. Checking each year, before budgeting starts, that every budget line maps to one account or a clean range of accounts means actuals drop straight into the comparison without reworking.

                ## Milestones
                1. Last year's budget lines compared with the current chart.
                2. Each budget line mapped to one account or one range.
                3. Accounts with actuals but no budget line flagged.
                4. The mapping shared with whoever builds the budget.
              priority: low
              frontmatter:
                mode: operating
                output_kind: artifact
                success_criteria: "Every budget line maps to one account or range in the current chart, confirmed before the year's budget work begins."
                cadence: cyclic
              tasks:
                - "Pull last year's budget lines into a list"
                - "Map each budget line to an account or account range"
                - "Flag accounts that had actuals but no budget line"
                - "Send the mapping to the budget owner before budgeting starts @recurring(yearly)"
            - name: Five account types and how they reach the statements
              description: |-
                ## Purpose
                Assets, liabilities, equity, income and expenses behave differently: the first three carry balances into next year, while the last two reset to zero and roll into retained earnings. Understanding that flow is what lets an owner or manager see why a loan repayment is not an expense, or why a misclassified asset inflates the year's costs.

                ## Milestones
                1. Each of the five types explained in your own words with a business example.
                2. The path from each type to the balance sheet or profit and loss traced.
                3. Ten real transactions classified correctly without help.
                4. Year-end closing of income and expenses into retained earnings understood.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "You can classify ten sample transactions into the five account types and say which statement each affects, checked by your accountant."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Read a plain guide to the five account types"
                - "Write one example from your own business for each type"
                - "Trace where each example appears on the statements"
                - "Have your accountant check ten sample classifications"
            - name: Reading a trial balance by account range
              description: |-
                ## Purpose
                Laid out by account range, a trial balance is the fastest way to see whether the chart is working: subtotals by range should look like the profit and loss and balance sheet in miniature. Learning to scan it for an expense with a credit balance or an asset that should be zero turns the numbering scheme into a quick monthly check.

                ## Milestones
                1. A trial balance run in code order with subtotals by range.
                2. Each range subtotal matched to the corresponding statement total.
                3. Three wrong-side balances, such as an expense in credit, found and explained.
                4. A ten-minute scan routine written down.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "You can subtotal a trial balance by range and explain every balance on the unexpected side, with the scan routine saved in your notes."
                cadence: phased
                effort_hours_estimate: "3"
              tasks:
                - "Run a trial balance sorted by account code"
                - "Add subtotals for each account range"
                - "Find any account with a balance on the unexpected side"
                - "Write the five things you look for in a quick scan"
            - name: How larger systems split accounts and dimensions
              description: |-
                ## Purpose
                Larger accounting systems separate the natural account, meaning what was bought or earned, from dimensions such as department, location and project, and build each code from segments. Seeing how that works helps a growing business choose tags today that will move cleanly into a bigger system later.

                ## Milestones
                1. The difference between a natural account and a dimension explained in your own words.
                2. A sample account string from a larger system read segment by segment.
                3. Your current tags mapped to the dimensions a bigger system would use.
                4. Tag names that would need changing before a future move noted.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A short note maps your current accounts and tags to the natural account and dimensions a larger system would use."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Read how one larger accounting system structures its account segments"
                - "Write out a sample account string and label each segment"
                - "Map your current tracking categories to likely future dimensions"
                - "Note any tag names that would not survive a system change"
            - name: Charts of accounts compared across three industries
              description: |-
                ## Purpose
                Seeing how a retailer, a services agency and a building contractor lay out their charts shows which choices are standard and which are particular to your trade. Comparing three published sample charts, from software providers, industry bodies or your accountant, gives a benchmark for your own number of accounts and level of detail.

                ## Milestones
                1. Three sample charts gathered: your industry and two others.
                2. Account counts, revenue splits and cost of sales lines compared in a table.
                3. Two or three ideas worth adopting noted.
                4. Ideas that only suit other industries set aside with a reason.
              priority: low
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A comparison table of three sample charts exists, with at least two ideas chosen for your own chart and the reasons written down."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Find a sample chart for your industry from your software or trade body"
                - "Find two sample charts from different industries"
                - "Compare account counts, revenue splits and cost of sales lines"
                - "Note the two ideas worth adopting in your own chart"
            - name: Equity accounts for your legal form
              description: |-
                ## Purpose
                The equity section looks different for a sole trader, a partnership and a company: drawings and capital introduced in one, partners' current accounts in another, share capital, retained earnings and dividends in the third. Knowing which accounts your form needs prevents the common mess of owner payments sitting in expenses or loans.

                ## Milestones
                1. Your legal form and the equity accounts it needs confirmed with the accountant.
                2. Owner payments, owner loans and capital introduced each given the right account.
                3. Any owner payments sitting in expenses or loans identified.
                4. Corrections agreed with the accountant.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "The equity section matches your legal form as confirmed by the accountant, and no owner payments remain coded to expenses."
                cadence: phased
                effort_hours_estimate: "3"
              tasks:
                - "Confirm your legal form and ask which equity accounts it needs"
                - "List how the owner has taken out or put in money this year"
                - "Find owner payments coded to expenses or loans"
                - "Agree the corrections with the accountant before year end"
            - name: Header, total and posting accounts in report layouts
              description: |-
                ## Purpose
                Some software lets you build headers and totals into the chart itself, while others group accounts only in report layouts. Learning which yours does, and how a header or group rolls up its posting accounts, decides how you get a one-page profit and loss without deleting useful detail.

                ## Milestones
                1. How your software groups accounts, in the chart or only in layouts, confirmed.
                2. One group built that rolls up several posting accounts.
                3. A test report showing the group total and its detail correctly.
                4. A short rule written for how future groups are built.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A test report shows one group rolling up its posting accounts correctly, and a written rule explains how future groups are built."
                cadence: phased
                effort_hours_estimate: "3"
              tasks:
                - "Check whether your software supports header or summary accounts"
                - "Build one group that rolls up three related posting accounts"
                - "Run a report and check the group total matches its parts"
                - "Write down how future groups should be built"
            - name: Accruals, prepayments and deferred income accounts explained
              description: |-
                ## Purpose
                Timing accounts let the profit and loss show costs and income in the month they belong to rather than the month cash moved. Understanding what accruals, prepayments and deferred income accounts are for, and how few of each the chart really needs, avoids the tangle of a dozen prepayment accounts that some charts carry.

                ## Milestones
                1. What each timing account is for explained with one example from the business.
                2. The number of timing accounts the business needs agreed with the accountant.
                3. Duplicate timing accounts listed for merging.
                4. A note of which costs typically pass through each one.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A note explains each timing account with a real example, and the number the chart needs is agreed with the accountant."
                cadence: phased
                effort_hours_estimate: "3"
              tasks:
                - "Read a plain guide to accruals, prepayments and deferred income"
                - "Write one real example of each from the last year"
                - "Count the timing accounts in your chart today"
                - "Ask your accountant how many of each the business needs"
            - name: Duplicate account merge
              description: |-
                ## Purpose
                Charts that have grown without rules often hold two or three accounts for the same thing, such as Software, Subscriptions and IT Costs. Merging them, by moving the history into one surviving account and archiving the rest, makes trend reports meaningful and removes a choice coders keep getting wrong.

                ## Milestones
                1. Groups of accounts describing the same cost identified from the census.
                2. One surviving account chosen for each group.
                3. History moved as agreed with the accountant.
                4. Merged accounts archived and the change log updated.

                ## Notes
                Some software merges accounts in one step; others need a journal. Check what the audit trail and any filed returns need before moving prior-year balances.
              priority: medium
              deadlineOffsetDays: 60
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "No two active accounts describe the same cost, and every merge is recorded in the change log with the accountant's agreement."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Group the census accounts that describe the same cost"
                - "Choose one surviving account for each group"
                - "Check with the accountant how history should move between accounts"
                - "Move the history and archive the merged accounts"
            - name: Dormant account archive
              description: |-
                ## Purpose
                Accounts with no postings for a year still appear in every drop-down and invite a wrong pick. Archiving them, after checking they hold no balance and that no bank rule, app or budget points at them, shortens the list without losing history.

                ## Milestones
                1. Accounts with no postings in twelve months listed.
                2. Each one confirmed to have a zero balance.
                3. Bank rules, app mappings and budget lines checked for references.
                4. Dormant accounts archived and the list repeated yearly.
              priority: low
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "No active account has gone twelve months without a posting, and every archived account had a zero balance and no references."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Filter the census for accounts with no postings in twelve months"
                - "Confirm each dormant account has a zero balance"
                - "Check no bank rule, app mapping or budget line still uses it"
                - "Archive accounts that have been dormant for a year @recurring(yearly)"
            - name: Breaking up the sundry expenses account
              description: |-
                ## Purpose
                When a sundry, general or miscellaneous account holds more than a few percent of overheads, the profit and loss is quietly hiding a cost line. Sorting a year of its postings into groups and moving the recurring ones into proper accounts brings the hidden spend into view.

                ## Milestones
                1. A year of sundry postings exported and grouped by what was bought.
                2. Groups worth their own account identified, with the rest mapped to existing accounts.
                3. Current-year postings reclassified.
                4. Sundry kept below an agreed share, such as two percent of overheads.
              priority: medium
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "The sundry account holds less than the agreed share of overheads, with current-year postings reclassified into named accounts."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Export the last twelve months of sundry postings"
                - "Ask the agent to group the postings by what was bought"
                - "Decide which groups need an account of their own"
                - "Reclassify the current year's postings into the chosen accounts"
            - name: Restating or moving forward decision
              description: |-
                ## Purpose
                Once a new chart is agreed, someone has to decide whether to restate prior months or only change things from now on, and the answer affects comparisons, the audit trail and any returns already filed. Agreeing that choice with the accountant before moving a single balance avoids reopening a closed period by accident.

                ## Milestones
                1. Three options set out: from now only, the current year restated, or prior years too.
                2. Closed and filed periods identified.
                3. The chosen option agreed with the accountant in writing.
                4. Comparative reports adjusted as decided.
              priority: medium
              deadlineOffsetDays: 45
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A written decision, agreed with the accountant, states which periods will be restated and is recorded in the chart change log."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Write out the three options with what each would change"
                - "Note which periods are closed or already filed with the tax authority"
                - "Agree the option with the accountant in writing"
                - "Record the decision in the chart change log"
            - name: Payroll cost account structure
              description: |-
                ## Purpose
                One wages account cannot show what staff really cost or how much of that cost is direct. Splitting payroll into gross pay, employer taxes, pension or retirement contributions and benefits, with direct staff in cost of sales where that matches your boundary, lets a manager see the full cost of people and the margin it supports.

                ## Milestones
                1. Every payroll cost the business pays listed.
                2. Accounts for each component agreed, with the direct and indirect split decided.
                3. The payroll app's account mapping updated.
                4. One month of payroll posted and checked against the payroll report.
              priority: medium
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "Payroll posts to separate accounts for pay, employer taxes, retirement contributions and benefits, and one month agrees to the payroll report."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "List every cost on a payroll report beyond gross pay"
                - "Decide which staff costs sit in cost of sales"
                - "Create or rename the payroll cost accounts to match"
                - "Check one month's payroll journal lands in the new accounts"
            - name: Marketing spend accounts or channel tags
              description: |-
                ## Purpose
                Founders often want to know what each channel costs, from paid search and social to events and print, and the tempting fix is an account per channel. Deciding whether channels belong in accounts or a tracking category, given how often channels come and go, keeps the chart stable while still answering the question.

                ## Milestones
                1. The marketing channels used this year listed.
                2. Channels started or stopped in the last two years noted.
                3. A choice made between channel accounts and a channel tag, with the reason.
                4. The chosen structure set up and applied to this month's spend.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A recorded decision sets how marketing channels are tracked, and the current month's marketing spend can be reported by channel."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "List the marketing channels you spent money on this year"
                - "Note which channels started or stopped in the last two years"
                - "Apply the account or tag rule to marketing spend"
                - "Set up the chosen channel accounts or tags"
            - name: Location or department tag rollout
              description: |-
                ## Purpose
                Opening a second site or splitting into departments is when reporting by class starts to matter, and it only works if every transaction is tagged from a set date. Planning the rollout, with the class list, default tags on bank rules and apps and a start date, gives clean comparisons from the first month.

                ## Milestones
                1. The list of locations or departments to report on agreed.
                2. A start date set from which every transaction is tagged.
                3. Default tags set on bank rules and connected apps.
                4. The first month's report by location or department produced with no untagged items.

                ## Notes
                Sharing out overheads such as rent or head office costs is a separate allocation exercise. Tag direct costs first and keep shared costs in a clear unallocated option.
              priority: medium
              deadlineOffsetDays: 60
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "Every transaction from the agreed start date carries a location or department tag, and the first month's report by tag has been produced."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Write the list of locations or departments to report on"
                - "Pick the date from which every transaction will be tagged"
                - "Set default tags in bank rules and connected apps"
                - "Brief everyone who codes transactions on the new tags"
            - name: Customer and product reporting without extra accounts
              description: |-
                ## Purpose
                Margin by customer or product is a fair question, but answering it with an account per customer makes the chart unreadable within a year. Using the sales ledger, item lists and tracking instead, and testing that reports can show revenue by customer and product, keeps the chart at the right level of detail.

                ## Milestones
                1. Accounts named after customers or products listed.
                2. The item and customer reports your software offers checked.
                3. Customer and product detail moved onto items or tags.
                4. The emptied customer and product accounts archived.
              priority: low
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "No account is named after a customer or product, and revenue by customer and by product comes from standard reports."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "List any accounts named after a customer or product"
                - "Check which item and customer reports your software offers"
                - "Move customer or product detail onto items or tags"
                - "Archive the customer and product accounts once emptied"
            - name: Grouping overheads for a one-page profit and loss
              description: |-
                ## Purpose
                Seventy overhead accounts are useful to the bookkeeper and useless in a board meeting. Grouping those accounts into eight to twelve report lines, such as people, premises, technology and marketing, gives owners a one-page profit and loss while the detail stays one click away.

                ## Milestones
                1. Eight to twelve overhead group names agreed.
                2. Every overhead account assigned to exactly one group.
                3. A grouped profit and loss layout built in the software.
                4. The one-page version reviewed with the owner and adjusted.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A one-page profit and loss with eight to twelve overhead groups exists in the software, with every overhead account in exactly one group."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Draft eight to twelve overhead group names"
                - "Assign every overhead account to one group"
                - "Build the grouped profit and loss layout in the software"
                - "Show the one-page version to the owner and adjust the groups"
            - name: Old to new account mapping for a software move
              description: |-
                ## Purpose
                Moving to new accounting software is the moment to fix the chart, but only if every old account has a clear destination before data is imported. A mapping table from old code to new code, checked against a trial balance on both sides, stops opening balances landing in the wrong place.

                ## Milestones
                1. The old chart exported with closing balances at the planned switch date.
                2. Every old account mapped to exactly one new account.
                3. Mapped balances totalled by new account and checked.
                4. The new trial balance agreeing with the old one after import.

                ## Notes
                Choosing and setting up the software itself is a separate project; this one covers only where each account goes.
              priority: high
              deadlineOffsetDays: 45
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A mapping table sends every old account to one new account, and the trial balance after import agrees with the old one at the switch date."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Export the old chart with balances at the planned switch date"
                - "Map every old account to one new account in a table"
                - "Total the mapped balances by new account"
                - "Check the new trial balance agrees with the old one after import"
            - name: Chart redesign cutover at the start of a financial year
              description: |-
                ## Purpose
                Switching to a redesigned chart in the middle of a year leaves half the year in old accounts and half in new, so comparisons break. Planning the cutover for the first day of a financial year, with transfer journals for balance sheet accounts and every rule and app remapped the same day, gives a clean start.

                ## Milestones
                1. The cutover date fixed at the start of a financial year.
                2. A checklist covering accounts, transfer journals, bank rules, apps, report layouts and budgets.
                3. Balance sheet balances moved to their new accounts, with the trial balance agreeing before and after.
                4. The first month in the new chart closed without reposting.

                ## Notes
                Start from the **Operational checklist** template.
              priority: high
              deadlineOffsetDays: 90
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "The new chart went live on the first day of a financial year, the trial balance agreed before and after, and the first month closed without reposting."
                cadence: one-shot
                effort_hours_estimate: "12"
              tasks:
                - "Fix the cutover date and put it in the calendar"
                - "Build the cutover checklist from the operational checklist template"
                - "Prepare the transfer journals for balance sheet accounts"
                - "Remap bank rules, apps and report layouts on cutover day"
            - name: Chart readiness for investor due diligence
              description: |-
                ## Purpose
                Investors and their accountants test the numbers by asking for revenue by stream, gross margin, payroll cost and monthly burn, and a chart that cannot produce those quickly costs credibility. Checking the chart three months before a raise, and fixing what the due diligence list will ask for, means the data room figures come from the ledger rather than a spreadsheet rebuilt each time.

                ## Milestones
                1. A sample due diligence request list obtained from your adviser.
                2. Each financial request checked against what the ledger can produce.
                3. Accounts or tags fixed behind any request it cannot.
                4. Two years of revenue, margin and payroll reports produced as a test.
              priority: medium
              deadlineOffsetDays: 60
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "Two years of revenue by stream, gross margin and payroll cost come straight from the ledger, ready before the raise starts."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Get a sample due diligence request list from your adviser"
                - "Check each financial request can come straight from the ledger"
                - "Fix the accounts or tags behind any request that cannot"
                - "Produce two years of revenue, margin and payroll reports as a test"
            - name: Audit lead schedule mapping for the first audit
              description: |-
                ## Purpose
                Auditors group accounts into lead schedules such as cash, receivables, payables and revenue, and a first audit runs slower when the chart does not line up with them. Mapping every account to a lead schedule before fieldwork, with no balances left in suspense, lets the audit team test each area without untangling the chart first.

                ## Milestones
                1. The audit firm's standard lead schedule groupings obtained.
                2. Every balance sheet and revenue account mapped to a lead schedule.
                3. Suspense and sundry balances cleared or explained.
                4. The mapping sent to the auditors before fieldwork starts.
              priority: medium
              deadlineOffsetDays: 90
              frontmatter:
                mode: event
                output_kind: deliverable
                success_criteria: "Every account maps to an audit lead schedule, suspense is cleared or explained, and the mapping reached the auditors before fieldwork."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Ask the audit firm for its standard lead schedule groupings"
                - "Map every balance sheet and revenue account to a lead schedule"
                - "Clear or explain any balance left in suspense or sundry accounts"
                - "Send the mapping to the auditors before fieldwork starts"
            - name: Accounts set up for a new revenue stream launch
              description: |-
                ## Purpose
                New products, services or markets bring their own income, direct costs and sometimes their own tax treatment, and setting up accounts or tags before the first invoice is far easier than reclassifying months later. Deciding the structure a month before launch means the first sale already shows on its own line.

                ## Milestones
                1. The new stream described: what it sells, to whom and from when.
                2. Its income and direct costs placed using the account or tag rule.
                3. Any different tax treatment checked with the accountant.
                4. Accounts or tags created and the new sales items pointed at them before launch.
              priority: medium
              deadlineOffsetDays: 30
              frontmatter:
                mode: event
                output_kind: deliverable
                success_criteria: "Accounts or tags for the new stream exist before its first invoice, and its first month of income and direct costs reports on its own line."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Write down what the new stream sells, to whom and from when"
                - "Apply the account or tag rule to its income and direct costs"
                - "Ask the accountant whether the new stream needs a different tax code"
                - "Create the accounts or tags and point the new items at them"
            - name: Sole trader to company chart conversion
              description: |-
                ## Purpose
                Incorporating changes the equity section, the owner's pay, money lent between owner and business and sometimes the tax accounts, while most income and cost accounts can carry over. Working through the conversion with the accountant before the company starts trading keeps the sole trader's last year and the company's first year cleanly apart.

                ## Milestones
                1. The accountant's list of what changes in the books on incorporation.
                2. Drawings and capital accounts replaced with company equity accounts.
                3. A director's or shareholder's loan account added.
                4. The company's ledger started with its own opening balances.

                ## Notes
                Whether and when to incorporate is a tax and legal decision for your adviser. This project only prepares the books once that decision is made.
              priority: medium
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "The company has its own ledger with company equity accounts, an owner loan account and opening balances agreed with the accountant."
                cadence: phased
                effort_hours_estimate: "5"
              tasks:
                - "Ask the accountant what changes in the books on incorporation"
                - "Replace drawings and capital accounts with company equity accounts"
                - "Add a director's or shareholder's loan account"
                - "Start the company's ledger with its own opening balances"
            - name: Lean first chart for a newly incorporated startup
              description: |-
                ## Purpose
                Founders setting up books for the first time often accept the software's default chart of eighty accounts, half of which they will never use, and miss the few they need, such as share capital, founder loans and pre-trading costs. Starting from a lean chart of forty to sixty accounts built around the ten questions keeps the books simple until the business earns more detail.

                ## Milestones
                1. Default accounts the startup will not use in its first year archived.
                2. Share capital, founder loan and pre-trading cost accounts in place.
                3. Revenue accounts set up for the streams planned in year one.
                4. The lean chart reviewed by the accountant before the first month closes.
              priority: medium
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A chart of no more than sixty active accounts, including share capital and founder loan accounts, has been reviewed by the accountant."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Archive the default accounts the startup will not use in year one"
                - "Add share capital, founder loan and pre-trading cost accounts"
                - "Set up revenue accounts for the streams you plan to launch"
                - "Get the accountant to review the lean chart before the first close"
            - name: Inheriting a chart as a new finance manager
              description: |-
                ## Purpose
                New finance managers and controllers inherit a chart shaped by people who have gone, with logic nobody wrote down. Spending the first six weeks understanding it, asking the people who use the reports what they rely on and separating quick fixes from structural ones avoids breaking a report the board reads every month.

                ## Milestones
                1. Any existing chart notes collected from the previous owner or the accountant.
                2. The reports the board and managers read every month listed with their account sources.
                3. Quick fixes separated from changes that need a year-end cutover.
                4. A short findings note presented to your manager by week six.

                ## Notes
                Start from the **Onboarding 30/60/90** template. Change nothing structural before the first full month-end in the role.
              priority: medium
              deadlineOffsetDays: 45
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A findings note on the inherited chart, splitting quick fixes from year-end changes, was presented to your manager within six weeks."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "Ask the previous owner or the accountant for any chart notes"
                - "List the reports the board and managers read every month"
                - "Separate quick fixes from changes that need a year-end cutover"
                - "Present a short chart findings note to your manager by week six"
            - name: Second brand or business line in one set of books
              description: |-
                ## Purpose
                Owners adding a second brand or business line face a choice between a second company, a second set of books or one ledger with tags, and the right answer depends on legal, tax and banking advice. Where one ledger is chosen, a brand tag on every transaction and shared costs coded consistently let each line show its own margin.

                ## Milestones
                1. The structure question answered with the accountant.
                2. A brand tracking category with one option per line in place.
                3. A rule for coding shared costs agreed.
                4. Monthly revenue and direct costs reported by brand.
              priority: medium
              frontmatter:
                mode: building
                output_kind: habit
                success_criteria: "Every transaction carries a brand tag, and revenue and direct costs by brand have been reported for three consecutive months."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Ask the accountant whether the new line needs its own entity"
                - "Add a brand tracking category with an option for each line"
                - "Decide how shared costs will be coded until they are allocated"
                - "Review revenue and direct costs by brand @recurring(monthly:14)"
            - name: Multi-site retail or hospitality chart
              description: |-
                ## Purpose
                Shops, cafes and restaurants with several sites need to see sales, stock or food cost, wages and rent by site, and often by department such as food and drink. Combining a site tag with a few revenue and cost of sales accounts split by department gives a comparable site profit and loss without tripling the chart.

                ## Milestones
                1. The sites and departments to compare agreed.
                2. Revenue and cost of sales split into department accounts.
                3. The point of sale system posting each site with its tag.
                4. Gross margin by site compared each month.
              priority: low
              frontmatter:
                mode: building
                output_kind: habit
                success_criteria: "Each site's sales and cost of sales report by department from the ledger, and site gross margins have been compared for three months."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "List the sites and the departments you want to compare"
                - "Split revenue and cost of sales into department accounts"
                - "Set the point of sale system to post each site with its tag"
                - "Compare gross margin by site @recurring(monthly:16)"
            - name: SaaS chart for recurring revenue and hosting costs
              description: |-
                ## Purpose
                Software founders get asked for gross margin, recurring revenue and burn by investors who expect hosting, payment fees and customer support in cost of sales and deferred revenue on the balance sheet. Building those accounts in from the start, rather than lumping everything into Sales and Software, lets the board pack and investor metrics come from the ledger.

                ## Milestones
                1. Revenue split into subscription, services and one-off fee accounts.
                2. A deferred revenue account on the balance sheet.
                3. Hosting, payment fees and support costs in cost of sales.
                4. Monthly checks that hosting and fees land in the right place.

                ## Notes
                When revenue is recognised is a policy question for your accountant. This project only makes sure the accounts exist to record it.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "The chart separates subscription revenue, holds a deferred revenue account and places hosting and payment fees in cost of sales."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Split revenue into subscription, services and one-off fee accounts"
                - "Add a deferred revenue account on the balance sheet"
                - "Move hosting, payment fees and support costs into cost of sales"
                - "Check hosting costs landed in cost of sales @recurring(monthly:20)"
            - name: Standard group chart across several companies
              description: |-
                ## Purpose
                Groups with several companies, often built by acquisition, end up with a different chart in each entity, which makes every consolidation a mapping exercise. Agreeing one standard chart with a reserved range for local accounts, and moving each company onto it at a year end, turns group reporting into a sum rather than a translation.

                ## Milestones
                1. The charts of every company in the group compared side by side.
                2. A standard chart agreed with a reserved range for local accounts.
                3. A common set of intercompany accounts defined.
                4. Each company moved onto the standard at its next year end.

                ## Notes
                The consolidation process itself, with eliminations and group reporting, is separate work; this project gives it a common language.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Every company in the group uses the standard chart and common intercompany accounts, with local accounts only in the reserved range."
                cadence: phased
                effort_hours_estimate: "30"
              tasks:
                - "Compare the charts of every company in the group side by side"
                - "Draft a standard chart with a reserved range for local accounts"
                - "Agree a common set of intercompany accounts"
                - "Check each entity still follows the standard chart @recurring(quarterly)"
            - name: Multi-segment account string for an ERP
              description: |-
                ## Purpose
                Mid-market and enterprise systems build an account from segments such as entity, natural account, department, location and project, and each segment's length and values are hard to change once live. Designing the string on paper and testing it against real transactions and the reporting questions avoids a structure that either cannot answer questions or needs ten keystrokes per entry.

                ## Milestones
                1. Candidate segments listed, each with the question it answers.
                2. Length and value list drafted for every segment.
                3. Fifty real transactions coded with the draft string.
                4. Segments the test rarely used removed or merged.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A segment design with lengths and value lists has coded fifty real transactions, and every segment kept answers a recorded reporting question."
                cadence: phased
                effort_hours_estimate: "20"
              tasks:
                - "List the candidate segments and the question each one answers"
                - "Draft the length and value list for every segment"
                - "Code fifty real transactions using the draft string"
                - "Remove any segment the test transactions rarely used"
            - name: Metric definitions locked to account ranges
              description: |-
                ## Purpose
                Gross margin, operating expense ratio and payroll as a share of revenue often come out differently in the board pack, the lender report and the investor update, because each was built from a different set of accounts. Defining each metric once as a formula over account ranges, and keeping that definition with the chart, makes every figure agree.

                ## Milestones
                1. The metrics quoted to the board, lenders and investors listed.
                2. Each metric written as a formula over account ranges or report groups.
                3. Last quarter's metrics recalculated from the definitions and differences explained.
                4. The definitions stored in the chart master document.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Each metric quoted externally has one written formula over account ranges, and last quarter's figures were recalculated from it."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "List the metrics quoted to the board, lenders and investors"
                - "Write each metric as a formula over account ranges or groups"
                - "Recalculate last quarter's metrics from the definitions"
                - "Check the metric definitions still match the chart @recurring(yearly)"
---

# Chart of Accounts Design

This area is for owners, founders and managers who want a chart of accounts that answers their questions instead of one that grew a line at a time. It starts with the foundations (the ten questions the reports must answer, a usage census, the accountant's requirements, a numbering scheme and a rule for accounts versus tracking categories), then the routines that keep the chart tidy, the knowledge behind good design, the clean-ups and decisions, dated moments such as a software move or an investor review, situations from a new startup to a multi-site business, and finally the specialist work of group charts, account strings and metric definitions.

What repeats is a monthly check of misused accounts and untagged transactions, quarterly sittings for new account requests, tracking option upkeep, app mappings and the report test, and a yearly chart review timed before the financial year end. The Meeting notes, Metrics log, Operational checklist and Onboarding 30/60/90 templates pair with the projects that name them. Installing adds all 50 projects as active, so archive the ones that are not for you yet.
