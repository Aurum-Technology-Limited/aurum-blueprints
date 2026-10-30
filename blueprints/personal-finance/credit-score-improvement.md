---
id: personal-finance.credit-score-improvement
name: Credit Score Improvement
description: "Every credit report pulled and read, errors disputed, payment history and utilisation managed month by month, and a clean, well-prepared file ready before the next big application."
category: personal
version: 1.0.0
tags: [personal-finance, credit-score-improvement, everyone, credit-report, credit-file, utilisation, disputes, credit-history]
author: Aurum Technology
starter_structure:
  templates:
    - metrics-log
    - remediation-plan
    - purchase-decision
    - operational-checklist
  pillars:
    - name: Personal Finance
      emoji: "💷"
      description: "The day-to-day money system: income, budget, bills, debt, savings buffers, insurance, tax and big purchases, run so that nothing surprises you and every pound has a job."
      pillarFrontmatter:
        review_cadence: monthly
      areas:
        - name: Credit Score Improvement
          description: "Checking credit reports, fixing errors and building a stronger credit history before a big application."
          projects:
            - name: Full credit reports from every main agency
              description: |-
                ## Purpose
                Lenders do not all use the same credit reference agency, so a clean report at one can sit beside an error at another. Most countries give you a free statutory report from each of the main agencies, and pulling all of them in the same fortnight gives you the one complete picture every later project depends on. Scores shown in apps are a summary; the full report is the evidence.

                ## Milestones
                1. The main credit reference agencies in your country identified, usually two to four of them.
                2. A free full report downloaded or requested from each agency within the same two weeks.
                3. Every report saved as a dated PDF in one folder.
                4. A one-line note per agency saying how many accounts, searches and negative entries it shows.

                ## Notes
                Use the agencies' free statutory route rather than a paid subscription you may forget to cancel. A free score service is not the same as a full report.

                Before you start: this plan is general information to help you organise your own money decisions. It is not financial, investment, tax or legal advice. Check decisions that matter with a qualified, licensed adviser in your country, and remember that investing and trading can lose money.
              priority: high
              deadlineOffsetDays: 14
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A dated full report from every main agency in your country is saved in one folder, each with a one-line summary."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Look up which credit reference agencies operate in your country"
                - "Request the free statutory report from each agency"
                - "Save each report as a dated PDF in a single credit folder"
                - "Write a one-line summary of accounts, searches and negative entries per report"
            - name: Credit file account-by-account inventory
              description: |-
                ## Purpose
                Reports list accounts in different orders, with different names for the same lender and sometimes accounts you forgot you had, such as an old mobile contract or a store card from years ago. Building one table of every account across all reports shows what each agency knows, what is missing and what does not belong to you at all.

                ## Milestones
                1. Every account from every report listed once, with lender, type, opening date and status.
                2. A column showing which agencies report each account.
                3. Accounts you do not recognise flagged for checking.
                4. Accounts you hold that appear on no report noted separately.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "One table lists every account across all reports with lender, type, dates, status and which agencies show it, with unknown accounts flagged."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Set up a table with lender, account type, opened date, status and agency columns"
                - "Copy every account from the first report into the table"
                - "Tick off matching accounts from the other reports and add any new ones"
                - "Flag any account you do not recognise for a fraud or error check"
            - name: Name, address and date of birth accuracy check
              description: |-
                ## Purpose
                Lenders match your application to your file using personal details, and a misspelt surname, a wrong date of birth or a missing previous address can cause a decline that has nothing to do with how you handle money. Checking the identity section of every report is quick and often fixes problems people blame on their score.

                ## Milestones
                1. Name, any previous names, date of birth and current address confirmed correct on every report.
                2. Three years of previous addresses checked against your own list.
                3. Every discrepancy written down with the agency and the correct detail.
                4. Corrections requested from each agency that holds a wrong detail.

                ## Notes
                Write your own address history first, with move-in and move-out months, before you open the reports. It makes gaps obvious.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Personal details on every report match your own written address and name history, or a correction request is logged for each mismatch."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Write your own address history for the last six years with months"
                - "Compare the identity section of each report against it"
                - "List every wrong or missing detail with the agency that holds it"
                - "Send each agency a correction request through its online form"
            - name: Proof of address showing on your credit file
              description: |-
                ## Purpose
                Some countries let lenders confirm your address through public records, and in the UK, for example, not being on the electoral register at your current address is one of the commonest reasons for a thin or weak file. Making sure at least one trusted record ties you to where you live helps every identity check pass first time.

                ## Milestones
                1. The public records your agencies use for address checks identified.
                2. Your registration at your current address confirmed or applied for, where that record exists.
                3. At least one active account confirmed as registered to your current address.
                4. The updated record visible on your next report.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Your next credit report shows your current address confirmed by a public record or an active account in your name."
                cadence: one-shot
                effort_hours_estimate: "1"
              tasks:
                - "Find out which public records your credit agencies use to confirm addresses"
                - "Register or update your details on that record at your current address"
                - "Check your bank account is registered to your current address"
                - "Look for the confirmed address on your next report"
            - name: Financial links to other people on your file
              description: |-
                ## Purpose
                Opening a joint account or joint loan usually links your file to the other person's, and some lenders look at their history when you apply. An ex-partner or a former flatmate with missed payments can still be dragging on your applications years after the shared account closed. Finding every link and asking for outdated ones to be removed is often a quick improvement.

                ## Milestones
                1. Every financial association on every report listed with the shared account behind it.
                2. Links that still reflect a live shared account separated from outdated ones.
                3. A removal request sent to each agency for every outdated link.
                4. A later report confirming the outdated links are gone.

                ## Notes
                Agencies usually remove a link only once the shared account is closed or settled, so close joint accounts first if you have separated.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "Every financial link on your reports is either backed by a live shared account or has a removal request logged with the agency."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "List every financial association shown on each report"
                - "Mark which links still have an open joint account behind them"
                - "Ask each agency to remove links where the joint account has closed"
                - "Check for new links after any joint application @recurring(yearly)"
            - name: Free score services and alerts set-up
              description: |-
                ## Purpose
                Each agency's score uses its own scale, and the free apps that show them also send alerts when a new account, search or address appears on your file. Signing up once, one service per agency, gives you a baseline number to measure against and an early warning if someone applies for credit in your name.

                ## Milestones
                1. One free score service linked to each main agency, without a paid trial running.
                2. A baseline score and the scale it uses recorded for each agency.
                3. Email or app alerts switched on for new searches, accounts and address changes.
                4. Login details stored in your password manager.

                ## Notes
                Scores from different agencies cannot be compared with each other. Watch the direction of each one over time, not which is highest.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A free service for each main agency is active with alerts on, and each baseline score and its scale is recorded with the date."
                cadence: one-shot
                effort_hours_estimate: "1"
              tasks:
                - "Pick one free score service for each main credit agency"
                - "Sign up and decline any paid trial offered at sign-up"
                - "Turn on alerts for new searches, accounts and address changes"
                - "Record each baseline score with its scale and the date"
            - name: Late payment markers and defaults audit
              description: |-
                ## Purpose
                Payment history is the heaviest factor in most scoring models, and one missed month on a forgotten phone contract can show on your file for years. Going through every account month by month and listing each late marker, arrangement, default or court judgement tells you exactly what lenders see and when each entry is due to drop off.

                ## Milestones
                1. Every late, missed, arrangement or default marker listed with account, month and agency.
                2. Each entry marked as accurate, wrong, or unsure.
                3. The date each entry is due to leave your file worked out.
                4. Anything wrong or unsure passed to the disputes project.

                ## Notes
                In many countries negative entries stay for six or seven years from the date of the event, not from when you paid it off.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A list of every negative payment entry on your reports exists, each marked accurate or disputed with the date it is due to drop off."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Scan the payment history grid of every account on each report"
                - "List each late, arrangement or default entry with its month"
                - "Mark each entry as accurate, wrong or unsure"
                - "Work out the month each accurate entry will leave the file"
            - name: Credit utilisation calculation across all cards
              description: |-
                ## Purpose
                Lenders look at how much of your available revolving credit you are using, both across all cards and on each card. Someone with a 900 balance on a 1,000 limit can look stretched even if they pay in full every month. Working out your overall and per-card figures as the agencies see them shows whether utilisation is quietly holding your score down.

                ## Milestones
                1. Reported balance and limit for every card and overdraft copied from your reports.
                2. Overall utilisation worked out as total balances divided by total limits.
                3. Utilisation for each card worked out separately.
                4. Any card above your chosen ceiling highlighted.

                ## Notes
                Many guides suggest keeping utilisation well under a third of your limits, and lower is generally read better. Use the balance the agency shows, not today's balance in your banking app.
              priority: medium
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "Overall and per-card utilisation percentages are calculated from reported balances and written down, with any card over your ceiling marked."
                cadence: one-shot
                effort_hours_estimate: "1"
              tasks:
                - "Copy the reported balance and limit of each card from your latest report"
                - "Divide total balances by total limits to get overall utilisation"
                - "Work out the same percentage for each card on its own"
                - "Highlight any card sitting above your chosen ceiling"
            - name: Hard and soft search history review
              description: |-
                ## Purpose
                Every full credit application leaves a hard search that other lenders can see, and several in a few months can look like someone chasing credit they cannot get. Quotes, eligibility checks and your own checks leave soft searches that lenders cannot see. Sorting the two on every report tells you how much recent applying is weighing on you and whether any search was made without your permission.

                ## Milestones
                1. Every hard search from the last two years listed with lender, date and agency.
                2. Each hard search matched to an application you remember making.
                3. Searches you do not recognise flagged for a fraud check.
                4. A count of hard searches in the last six and twelve months written down.
              priority: medium
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A list of hard searches from the past two years exists, each matched to a known application or flagged as unrecognised."
                cadence: one-shot
                effort_hours_estimate: "1"
              tasks:
                - "List every hard search shown on each report with lender and date"
                - "Match each search to an application you made"
                - "Flag any search you cannot explain"
                - "Count hard searches in the last six and twelve months"
            - name: Automatic minimum payments on every reported account
              description: |-
                ## Purpose
                Credit cards get the attention, but phone contracts, utility accounts, car finance, store cards and buy now pay later plans can all report a missed payment. Putting at least the minimum on automatic collection for every account that reports to an agency removes the most damaging and most avoidable mark a file can carry.

                ## Milestones
                1. Every account from your inventory that reports to an agency marked as such.
                2. A direct debit or automatic payment for at least the minimum on each one.
                3. Collection dates set after payday, with the funding account named.
                4. A month passed with every reported account collected on time.
              priority: high
              deadlineOffsetDays: 14
              frontmatter:
                mode: building
                output_kind: habit
                success_criteria: "Every account that reports to a credit agency has an automatic payment of at least the minimum, and one full month has collected without a miss."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Mark which accounts in your inventory report to a credit agency"
                - "Set up an automatic minimum payment on each one that lacks it"
                - "Move any collection date that falls before payday"
                - "Check the funding account covers the month's credit collections @recurring(monthly:24)"
            - name: Monthly credit file alerts check
              description: |-
                ## Purpose
                Alerts only protect you if someone reads them, and an unexplained search or a new address caught in the first month is far easier to fix than one found a year later before a mortgage. Ten minutes once a month going through each score app keeps small problems from settling into the file.

                ## Milestones
                1. A fixed day each month for the check, written in your calendar.
                2. Each score app opened and its alerts read on that day.
                3. Every unexpected alert followed up within a week.
                4. Three consecutive months completed.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Alerts from every agency's score app are read each month, with any unexpected entry followed up within seven days."
                cadence: rolling
              tasks:
                - "Choose a fixed day each month for the alerts check"
                - "Open each score app and read every new alert @recurring(monthly:9)"
                - "Follow up any alert you cannot explain within a week"
                - "Note anything unusual in your credit folder"
            - name: Quarterly agency report rotation
              description: |-
                ## Purpose
                Score apps summarise; they do not show every line. Pulling the full report from one agency each quarter, in rotation, means every agency's file gets read properly at least once a year without the task ever taking more than an hour. Errors at a less popular agency are the ones that usually slip through.

                ## Milestones
                1. A rotation order of agencies written down.
                2. One full report pulled and read each quarter.
                3. Any new account, search or marker compared against your inventory.
                4. A full year of rotation completed with every agency read.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "One agency's full report is read each quarter in a fixed rotation, so every agency is read at least once a year."
                cadence: rolling
              tasks:
                - "Write down the order you will rotate through the agencies"
                - "Pull the full report from the next agency in the rotation @recurring(quarterly)"
                - "Compare new entries against your account inventory"
                - "Save the report with the date in your credit folder"
            - name: Card balance paid before the statement date
              description: |-
                ## Purpose
                Most card providers report the balance on your statement date, not your payment due date, so someone who spends 800 and pays in full still shows 800 of utilisation every month. Making a payment a few days before the statement is generated lowers the reported balance without changing what you spend.

                ## Milestones
                1. The statement date of every card found and written down.
                2. A payment day set a few days before each statement date.
                3. The reported balance on your next report lower than before.
                4. Three months of pre-statement payments made.

                ## Notes
                Keep the regular direct debit in place as a safety net; the early payment is extra, not a replacement.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "For three months, each card's reported balance is lower than its spending because a payment landed before the statement date."
                cadence: rolling
              tasks:
                - "Find the statement date for each card in its app or on a statement"
                - "Set a reminder three days before each statement date"
                - "Pay the card balance down before the statement is generated @recurring(monthly:22)"
                - "Check the reported balance falls on the next report"
            - name: Credit score and utilisation tracker
              description: |-
                ## Purpose
                Scores wobble by a few points every month for reasons no one can see, and judging progress from memory makes every dip feel like a setback. A simple monthly row per agency, with score, utilisation and anything that changed, shows the real trend and links each movement to a cause.

                ## Milestones
                1. A tracker with columns for date, each agency's score, utilisation and notes.
                2. The baseline scores entered as the first row.
                3. A row added every month for six months.
                4. Each large movement explained in the notes column.

                ## Notes
                Start from the **Metrics log** template.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "The tracker holds at least six monthly rows of scores and utilisation, with a note explaining each change of more than a few points."
                cadence: rolling
              tasks:
                - "Create a tracker from the metrics log template"
                - "Enter your baseline scores and utilisation as the first row"
                - "Record each agency's score and your utilisation in the tracker @recurring(monthly:3)"
                - "Write a cause beside any large jump or drop"
            - name: Credit application and search log
              description: |-
                ## Purpose
                Months later it is hard to remember whether that phone upgrade or car quote was a full application or a soft check, and it matters when a report shows a search you cannot place. Logging every application as you make it, with the type of search the lender said it would run, makes reports easy to check and future applications easier to space out.

                ## Milestones
                1. A log with columns for date, lender, product, search type and outcome.
                2. Applications from the last two years entered from your search history.
                3. Every new application logged on the day it is made.
                4. The log cross-checked against hard searches on the reports.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every credit application since the log started is recorded, and each hard search on your reports matches a logged application."
                cadence: rolling
              tasks:
                - "Create a log with date, lender, product, search type and outcome"
                - "Enter applications from the last two years from your search history"
                - "Ask each lender whether it runs a hard or soft search before applying"
                - "Copy new hard searches from your reports into the log @recurring(quarterly)"
            - name: Keeping dormant cards gently active
              description: |-
                ## Purpose
                Providers can close or cut the limit on a card that has not been used for a long time, which shortens your history and raises utilisation on the cards you keep. A small planned purchase every few months, cleared in full by direct debit, keeps a useful old account open without adding any debt.

                ## Milestones
                1. Each unused card you want to keep identified, with the last date it was used.
                2. A full-balance direct debit set on each of those cards.
                3. One small recurring or planned purchase assigned to each card.
                4. A year passed with no dormant card closed by the provider.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Each dormant card you chose to keep has a full-balance direct debit and at least one small cleared purchase every quarter for a year."
                cadence: rolling
              tasks:
                - "List the unused cards you want to keep open"
                - "Set a full-balance direct debit on each of them"
                - "Put one small planned purchase on each dormant card @recurring(quarterly)"
                - "Check each card's terms for an inactivity closure rule"
            - name: Annual credit file deep review
              description: |-
                ## Purpose
                Once a year it is worth reading every report end to end, not just the alerts, because closed accounts, old addresses and links quietly accumulate. A yearly review against last year's notes shows what has dropped off, what has improved and what still needs fixing, and sets the priorities for the next twelve months.

                ## Milestones
                1. A fresh full report from every agency saved with this year's date.
                2. Inventory, personal details, links and negative entries rechecked.
                3. This year's scores and utilisation compared with last year's.
                4. Three priorities for the coming year written down.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: deliverable
                success_criteria: "A dated annual review note compares this year's reports with last year's and lists three priorities for the year ahead."
                cadence: cyclic
                effort_hours_estimate: "3"
              tasks:
                - "Pick a month for the annual review that falls before your usual big applications"
                - "Download a fresh full report from every agency @recurring(yearly)"
                - "Recheck inventory, details, links and negative entries against last year"
                - "Write three priorities for the year ahead @recurring(yearly)"
            - name: Personal utilisation ceiling rule
              description: |-
                ## Purpose
                Without a number in mind, card balances drift up in expensive months and nobody notices until a score drops before an application. Choosing your own ceiling for reported utilisation, and setting balance alerts to fire before you reach it, turns a vague aim into a rule you can actually follow.

                ## Milestones
                1. A personal ceiling for overall and per-card utilisation chosen and written down.
                2. The matching balance worked out for each card in money terms.
                3. A balance alert set on each card at that amount.
                4. Three months with no reported balance above the ceiling.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A written utilisation ceiling exists with matching balance alerts on every card, and three months of reports show no card above it."
                cadence: rolling
              tasks:
                - "Choose a utilisation ceiling and write it in your credit folder"
                - "Convert the ceiling into a balance amount for each card"
                - "Set a balance alert on each card at that amount"
                - "Recalculate the amounts after any limit change @recurring(yearly)"
            - name: What moves a credit score and what does not
              description: |-
                ## Purpose
                Myths cost people points: checking your own report does not harm it, income is not on your file, and closing cards can make things worse rather than better. A couple of hours learning the main factors, payment history, utilisation, account age, mix and recent searches, makes every later decision in this area faster and calmer.

                ## Milestones
                1. The main scoring factors listed in your own words, with a rough weight for each.
                2. At least five common credit myths written down with the correct answer.
                3. Your own file scored informally against each factor.
                4. The one factor most holding you back identified.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A one-page note explains the main scoring factors and five myths, and names the factor most holding your own file back."
                cadence: phased
                effort_hours_estimate: "3"
              tasks:
                - "Read the score guide published by each main credit agency"
                - "Write the main factors in your own words with a rough weight"
                - "List five myths you believed and what is actually true"
                - "Rate your own file against each factor and pick the weakest"
            - name: Reading a credit report line by line
              description: |-
                ## Purpose
                Full reports run to many pages of codes, status grids and abbreviations, and most people skim the score and miss the entry that matters. Learning what each section means, how a payment status grid is read and what each status code stands for, means you can spot a problem yourself instead of paying a service to explain it.

                ## Milestones
                1. Each section of one full report named and understood.
                2. The payment status codes and their meanings written down for each agency.
                3. One account traced through its full payment history grid.
                4. Three questions about your own report answered from the agency's help pages.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "You can explain each section of your report and every status code it uses, with a written key saved beside the reports."
                cadence: phased
                effort_hours_estimate: "2"
              tasks:
                - "Open one full report and list its sections in order"
                - "Write a key of every status code the report uses"
                - "Trace one account's payment grid month by month"
                - "Look up any entry you still cannot read on the agency's help pages"
            - name: Eligibility checkers and soft searches
              description: |-
                ## Purpose
                Many lenders and comparison sites now offer an eligibility check that shows your chances of acceptance using only a soft search. Learning how these work, and how a quotation search differs from a full application, lets you shop for credit without collecting hard searches for products you would never have been offered.

                ## Milestones
                1. The difference between a quotation search, soft search and hard search written down.
                2. Two eligibility checkers tried for a product type you might need.
                3. The point in an application where the hard search happens identified.
                4. A personal rule written: no full application without an eligibility check first.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A written rule requires an eligibility check before any full application, and two checkers have been tried with results recorded."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Read how a soft search differs from a hard search on one agency's site"
                - "Try two eligibility checkers for a product you may want later"
                - "Note the exact step where each lender says it runs a hard search"
                - "Write your eligibility-first rule in your credit folder"
            - name: How lenders use your file beyond the score
              description: |-
                ## Purpose
                No lender uses the number you see in an app. Each applies its own scorecard to your report and your application form, then runs an affordability check on income and outgoings, so a good score can still be declined and a modest one accepted. Understanding that process explains past declines and shows what to prepare besides the file itself.

                ## Milestones
                1. The three stages of a typical lending decision written down: identity, scorecard, affordability.
                2. The information an application form adds to your file listed.
                3. Reasons a lender gave for any past decline collected.
                4. Each past decline linked to the stage that most likely caused it.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A note describes how lenders combine report, application data and affordability, and links each past decline you know of to a likely cause."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Read a lender's published guide to how it assesses applications"
                - "List what an application form tells a lender that your file does not"
                - "Gather any decline letters or reasons from past applications"
                - "Match each decline to identity, scorecard or affordability"
            - name: How long negative marks stay on your file
              description: |-
                ## Purpose
                Defaults, missed payments, court judgements and insolvencies each have a retention period, commonly six or seven years depending on country, and lenders weigh older entries far less than recent ones. Knowing the rules and the exact drop-off dates for your own entries turns a vague sense of being stuck into a timeline you can plan applications around.

                ## Milestones
                1. The retention period for each type of negative entry in your country written down.
                2. The start date each period counts from understood for every entry type.
                3. A drop-off date calculated for each negative entry on your reports.
                4. Those dates added to your calendar.

                ## Notes
                Paying a default off does not usually remove it early; it changes its status to satisfied or settled. Check the rule with the agency, not a forum.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Every negative entry on your reports has a calculated drop-off date in your calendar, based on the retention rule published by your agencies."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Look up the retention period for each negative entry type in your country"
                - "Note whether each period runs from the default date or the payment date"
                - "Calculate the drop-off date for each negative entry you hold"
                - "Add each drop-off date to your calendar with a reminder"
            - name: Your rights over credit reference data
              description: |-
                ## Purpose
                Credit agencies and lenders hold personal data about you, and data protection and consumer credit law in most countries give you the right to see it, correct it and complain about it. Knowing the dispute timelines, how to add a statement to your file and where to escalate if an agency will not act means you negotiate from strength rather than hope.

                ## Milestones
                1. Your right to a free copy of your data and how to request it written down.
                2. The agencies' dispute process and response time noted for each.
                3. The ombudsman or regulator that handles credit data complaints in your country identified.
                4. The rule on adding a personal statement to your file noted.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A one-page note lists your data rights, each agency's dispute timeline and the regulator or ombudsman you would escalate to."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Read your data protection regulator's guidance on credit reference data"
                - "Note each agency's dispute process and promised response time"
                - "Find the ombudsman or regulator for credit data complaints"
                - "Save the note in your credit folder for use in any dispute"
            - name: Open banking and alternative credit data explained
              description: |-
                ## Purpose
                Newer scoring options can read your bank account transactions, rent payments or utility history to build a picture of reliability that a thin traditional file cannot show. Learning which agencies and lenders use this data, what you share and how to withdraw consent helps you decide whether it is worth switching on for your situation.

                ## Milestones
                1. The alternative data services offered by each main agency listed.
                2. What each service reads from your accounts, and for how long, written down.
                3. How to withdraw consent for each service noted.
                4. A decision recorded on whether to connect any of them.
              priority: low
              frontmatter:
                mode: learning
                output_kind: decision
                success_criteria: "A recorded decision on each alternative data service offered by your agencies, with what it reads and how to withdraw consent."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "List the open banking or alternative data options each agency offers"
                - "Read what data each one accesses and how long consent lasts"
                - "Note how to withdraw consent for each service"
                - "Decide which, if any, to connect and record why"
            - name: Disputing errors with the credit agencies
              description: |-
                ## Purpose
                Wrong balances, accounts that are not yours, defaults recorded twice or a payment marked late that was on time are more common than people expect. A tidy dispute, one per error, with evidence attached and a date to chase, usually gets an entry corrected or removed, and each fix can matter more than months of good behaviour.

                ## Milestones
                1. Every suspected error listed with the agency, account and the correct information.
                2. Evidence gathered for each, such as statements, payment confirmations or letters.
                3. A dispute raised with each agency holding the error, and with the lender where needed.
                4. Every dispute resolved, with the outcome and the corrected report saved.

                ## Notes
                Start from the **Remediation plan** template. Raise the dispute with every agency that shows the error, since a fix at one is not always copied to the others.
              priority: high
              deadlineOffsetDays: 60
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "Every suspected error has a logged dispute with evidence, and each has a recorded outcome with a corrected report saved."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Set up a remediation plan listing each suspected error"
                - "Gather the statement or letter that proves each correct entry"
                - "Ask the agent to draft a short, factual dispute message for each error"
                - "Submit each dispute through the agency's online form and note the date"
                - "Chase any dispute with no answer after the agency's stated response time"
            - name: Notice of correction for an accurate negative entry
              description: |-
                ## Purpose
                Some entries are accurate but have a story behind them: a missed payment during a hospital stay, a default from a bereavement or a fraud. Many agencies let you add a short personal statement, in the UK called a notice of correction, which lenders must read before deciding. It does not change the score, but it can change a human underwriter's view.

                ## Milestones
                1. Each accurate negative entry with genuine context identified.
                2. A short, factual statement drafted for each, within the agency's word limit.
                3. The statement added at every agency that shows the entry.
                4. The statement visible on the next report.

                ## Notes
                Keep it factual and brief, with no personal health detail you would not want an underwriter to read. A statement can slow automated applications because a person has to review it.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A factual statement within the word limit appears beside each chosen entry on every agency's report that shows it."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Pick the accurate entries that have genuine context worth explaining"
                - "Write a factual statement under the agency's word limit for each"
                - "Submit the statement to every agency showing the entry"
                - "Check the statement appears on the next report"
            - name: Credit limit increase decision
              description: |-
                ## Purpose
                Raising the limit on a card you already hold lowers your utilisation without any new debt, but it can also tempt more spending and some providers run a hard search to grant it. Deciding card by card whether to ask, or to accept an increase you are offered, keeps the benefit and avoids the trap.

                ## Milestones
                1. Each card's current limit and whether the provider runs a hard search for increases noted.
                2. A decision made per card: ask, accept if offered, or decline.
                3. Any requested increase applied for and the outcome recorded.
                4. Your utilisation recalculated with the new limits.

                ## Notes
                Only ask if you would carry on spending exactly as before. A higher limit that fills up leaves you worse off.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A recorded decision for each card on limit increases, with any change applied and utilisation recalculated."
                cadence: one-shot
                effort_hours_estimate: "1"
              tasks:
                - "Check whether each card provider runs a hard search for limit increases"
                - "Decide per card whether to ask, accept if offered, or decline"
                - "Request the increase on the cards where you decided to ask"
                - "Recalculate your utilisation after any change"
            - name: Choosing a credit builder card
              description: |-
                ## Purpose
                A file with no active credit cards, or only damaged ones, has little recent evidence for lenders to score. A low-limit builder card used for one small regular bill and cleared in full each month can add a clean payment record within six to twelve months, provided you choose one with eligibility checked first and fees you understand.

                ## Milestones
                1. Two or three builder cards shortlisted after soft eligibility checks.
                2. Fees, rates and limit compared on one page.
                3. One card chosen, or a decision recorded not to take one.
                4. If taken, one fixed bill moved to it with a full-balance direct debit.

                ## Notes
                Start from the **Purchase decision** template. Builder cards often carry high rates, which is harmless only if the balance is cleared in full every month.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A builder card decision is recorded after soft eligibility checks, and any card taken has one bill and a full-balance direct debit."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Run soft eligibility checks for builder cards on a comparison site"
                - "Compare fees, rates and starting limits for the top three"
                - "Record your choice, or the reason to skip a card"
                - "Move one small fixed bill to the new card with a full-balance direct debit"
            - name: Credit builder loan or savings-backed builder comparison
              description: |-
                ## Purpose
                Not everyone wants a card. Some providers offer small builder loans or savings plans that report your monthly payments to the agencies, and in some places a secured card backed by your own deposit does the same job. Comparing these against a builder card helps someone who distrusts card spending build history in a form that suits them.

                ## Milestones
                1. The builder loan, savings-backed and secured card options available to you listed.
                2. The total cost over the term worked out for each option.
                3. Which agencies each option reports to confirmed.
                4. A choice made and recorded, with the reasoning.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A written comparison of at least two non-card builder options shows cost and reporting agencies, with a recorded choice."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "List the builder loans and secured products available in your country"
                - "Work out the total cost of each over its full term"
                - "Confirm which agencies each product reports to"
                - "Record your choice and the reason beside the comparison"
            - name: Getting rent payments onto your credit file
              description: |-
                ## Purpose
                Rent is often a household's largest monthly payment, yet in many countries it never appears on a credit file. Rent reporting schemes, run through landlords, letting agents or open banking apps, can add months or years of on-time payments to a thin file, which helps most for renters saving towards their first application.

                ## Milestones
                1. The rent reporting schemes available to you, and the agencies each reports to, listed.
                2. Your landlord or agent asked whether they already report.
                3. A scheme joined, if one is suitable and free or cheap.
                4. Rent payments visible on at least one report.
              priority: medium
              deadlineOffsetDays: 60
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A decision on rent reporting is recorded, and if a scheme is joined, rent payments appear on at least one agency report."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Ask your landlord or letting agent whether they report rent to an agency"
                - "List the rent reporting schemes you can join and their costs"
                - "Sign up to the scheme that suits you, if any"
                - "Check your rent payments appear on your reports @recurring(quarterly)"
            - name: Marking old defaults as satisfied or settled
              description: |-
                ## Purpose
                A default stays for its full retention period whether you pay it or not, but a lender reading a default marked satisfied sees a very different person from one reading an unpaid balance. Where you can afford it, clearing or settling an old default and making sure the file updates is one of the few ways to soften accurate negative history.

                ## Milestones
                1. Every unpaid default listed with the current owner of the debt and the balance.
                2. A decision recorded per default on whether to pay in full, settle or leave it, with free debt advice taken if needed.
                3. Written confirmation from the creditor for each one cleared.
                4. Each cleared default showing as satisfied or settled on every report.

                ## Notes
                Debts are often sold on, so confirm who owns the debt before paying anyone. Get any settlement offer agreed in writing first.
              priority: medium
              deadlineOffsetDays: 90
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "Every default you chose to clear has written confirmation from its owner and shows as satisfied or settled on each report."
                cadence: phased
                effort_hours_estimate: "5"
              tasks:
                - "Confirm who currently owns each unpaid default and the balance owed"
                - "Decide per default whether to pay, settle or leave it for now"
                - "Get any settlement offer agreed in writing before paying"
                - "Check each report shows the cleared default as satisfied"
            - name: Hard search cooling-off before a big application
              description: |-
                ## Purpose
                Several applications in a short window can lower a score and make an underwriter wonder why, just when it matters most. Setting a personal quiet period with no new credit applications before a mortgage, car finance or tenancy, and telling the household about it, keeps the file steady for the decision that counts.

                ## Milestones
                1. The date of your next big application estimated.
                2. A quiet period, typically six months before it, chosen and written down.
                3. Planned purchases that need credit moved before or after the quiet period.
                4. No hard searches recorded during the quiet period.
              priority: medium
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A written quiet period before your next big application exists, and reports show no new hard searches during it."
                cadence: one-shot
                effort_hours_estimate: "1"
              tasks:
                - "Estimate the month of your next big credit application"
                - "Mark a quiet period before it in your calendar"
                - "Move any phone upgrade or finance purchase outside the quiet period"
                - "Tell anyone you share finances with about the quiet period"
            - name: Credit file preparation before a mortgage application
              description: |-
                ## Purpose
                Mortgage lenders read your file in more detail than almost anyone, and errors, outdated links or high card balances found three weeks before an application are hard to fix in time. Starting six months ahead gives disputes time to resolve, utilisation time to fall and the file time to show a calm, steady record.

                ## Milestones
                1. Full reports from every agency pulled six months before the planned application.
                2. Every error disputed and every outdated link removal requested.
                3. Utilisation brought down to your ceiling for at least three statements.
                4. A clean final check of all reports within a month of applying.

                ## Notes
                Start from the **Operational checklist** template. Deal choice, deposit and documents belong to the mortgage project itself; this one is only the credit file.
              priority: high
              deadlineOffsetDays: 180
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "Within a month of the mortgage application, all reports are checked clean, with no open disputes and utilisation under your ceiling."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Write the planned application month at the top of an operational checklist"
                - "Pull every agency's full report six months ahead"
                - "Check all reports for changes each month until you apply @recurring(monthly:5)"
                - "Do a final clean check of every report in the month before applying"
            - name: Credit check before renting a new home
              description: |-
                ## Purpose
                Letting agents and landlords commonly run a credit and identity check as part of tenant referencing, and a surprise county court judgement or old address error can lose you a flat in a competitive market. Checking your file before you start viewing means you can explain anything awkward up front or line up a guarantor.

                ## Milestones
                1. Your reports checked within a month before flat hunting starts.
                2. Anything a referencing company might query noted with a short explanation.
                3. A guarantor asked in advance if your file is thin or damaged.
                4. Referencing passed for the home you choose.
              priority: medium
              deadlineOffsetDays: 30
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "Reports are checked before viewings begin, any awkward entry has a written explanation ready, and referencing is passed."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Check every report in the month before you start viewing"
                - "Write a two-line explanation for any entry a referencer might query"
                - "Ask a possible guarantor now if your file is thin"
                - "Keep proof of past rent payments ready to show"
            - name: Credit file check before a car finance application
              description: |-
                ## Purpose
                Car dealers often run applications on the spot and sometimes with more than one lender, which can stack hard searches in a single afternoon. Checking your file and getting a soft-search quote before you visit the showroom lets you walk in knowing roughly what you will be offered and limits the searches to one.

                ## Milestones
                1. Every report checked in the month before you shop for a car.
                2. A soft-search eligibility quote obtained before the dealer visit.
                3. The dealer told you want a single lender application, not several.
                4. One hard search, at most, recorded for the car finance.
              priority: low
              deadlineOffsetDays: 45
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "Reports are checked and a soft-search quote is in hand before the dealer visit, and no more than one hard search appears afterwards."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Check every report in the month before you shop for a car"
                - "Get a soft-search finance quote online before visiting a dealer"
                - "Ask the dealer which lenders it will search before you sign"
                - "Confirm afterwards that only one hard search appeared"
            - name: Pre-employment credit check readiness
              description: |-
                ## Purpose
                Jobs in banking, finance, law, security and some public roles can include a credit check, usually looking for judgements, insolvencies and serious arrears rather than a score. Knowing what is on your file before the offer stage, and having a short explanation ready, is far better than an employer finding it first.

                ## Milestones
                1. Whether the role includes a credit check confirmed with the recruiter.
                2. Your reports checked for judgements, insolvencies and defaults.
                3. A short, factual explanation drafted for any entry that could raise a question.
                4. The check completed without surprises.
              priority: low
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "Before an offer stage involving a credit check, your reports have been reviewed and a written explanation exists for any serious entry."
                cadence: one-shot
                effort_hours_estimate: "1"
              tasks:
                - "Ask the recruiter whether the role includes a credit check"
                - "Check your reports for judgements, insolvencies and defaults"
                - "Draft a short explanation for any serious entry"
                - "Keep the explanation ready for the vetting stage"
            - name: Moving-home credit file update
              description: |-
                ## Purpose
                After a move, a file that still lists the old address on some accounts and the new one on others can fail identity checks and even let post with account details reach the wrong person. Updating every lender within a month, and confirming the change reaches each agency, keeps your file consistent.

                ## Milestones
                1. Every account in your inventory updated with the new address.
                2. Your public record registration moved to the new address where that applies.
                3. Each agency's report showing the new address as current.
                4. Post redirection in place for the first few months, if available.
              priority: medium
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "Within two months of moving, every account and every agency report shows the new address as current."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Update your address with every lender in your account inventory"
                - "Register at the new address on the public record your agencies check"
                - "Set up post redirection from the old address if your postal service offers it"
                - "Check each report shows the new address two months after the move"
            - name: Twelve-month credit file progress review
              description: |-
                ## Purpose
                Twelve months of steady effort is the point where changes start to show: late markers age, utilisation habits have settled and new accounts have built some history. Comparing your file now with the baseline you recorded at the start shows what worked, what did not, and whether you are ready for the application you had in mind.

                ## Milestones
                1. This month's full reports set beside the reports from the start.
                2. Scores, utilisation, search count and negative entries compared.
                3. Each change linked to the action that caused it.
                4. A readiness judgement recorded for your next planned application.
              priority: medium
              deadlineOffsetDays: 365
              frontmatter:
                mode: event
                output_kind: deliverable
                success_criteria: "A written one-year comparison of reports against the baseline exists, with a recorded judgement on readiness for the next application."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Pull this month's full reports from every agency"
                - "Compare scores, utilisation, searches and negative entries with the baseline"
                - "Note which actions caused each change"
                - "Write down whether you are ready for your next application"
            - name: Building a credit file from scratch as a young adult
              description: |-
                ## Purpose
                At eighteen or twenty, most people have no credit history at all, which lenders read as unknown risk rather than good risk. A few small, deliberate steps in the first year, such as a current account at your real address, a phone contract or builder card paid on time, and registration on public records, give lenders something to score by the time you want a tenancy or car finance.

                ## Milestones
                1. A current account in your own name at your actual address.
                2. Registration on the public address record where one exists.
                3. One small credit account taken and paid in full by direct debit.
                4. A first report showing at least six months of on-time payments.

                ## Notes
                Being added as an additional cardholder on a parent's card does not usually build your own file in every country. Check how your agencies treat it.
              priority: medium
              frontmatter:
                mode: building
                output_kind: habit
                success_criteria: "A report in your own name shows at least one account with six months of on-time payments and your current address confirmed."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Check whether a credit file exists in your name at each agency"
                - "Register on the public address record at your term-time or home address"
                - "Open one small credit account and set a full-balance direct debit"
                - "Pull your first full report once six months of payments have reported"
            - name: Credit history after moving to a new country
              description: |-
                ## Purpose
                Credit files do not travel across borders, so newcomers often arrive with years of good history at home and nothing at all in their new country. Starting the right steps in the first weeks, from address registration to a first account that reports, and asking about lenders that accept overseas history, shortens the time you are treated as a stranger.

                ## Milestones
                1. Your new address registered with a bank and any public address record.
                2. Lenders that consider overseas credit history identified.
                3. A first reporting credit product opened and paid automatically.
                4. A report in the new country showing your address and at least one account.
              priority: medium
              frontmatter:
                mode: building
                output_kind: habit
                success_criteria: "Within a year of arrival, a report in the new country shows your current address and at least one account with on-time payments."
                cadence: phased
                effort_hours_estimate: "5"
              tasks:
                - "Open a current account at your new address"
                - "Ask banks whether they accept credit history from your previous country"
                - "Take one small product that reports to the local agencies"
                - "Keep a copy of your home-country report for lenders that ask"
            - name: Rebuilding credit after a default or court judgement
              description: |-
                ## Purpose
                After a default, judgement or debt arrangement the file feels permanently damaged, yet lenders give recent behaviour more weight than old mistakes. A patient rebuild, with every current account paid on time, the old entry marked satisfied where possible, and one carefully chosen builder product, means the file looks noticeably different well before the old entry drops off.

                ## Milestones
                1. Every current account confirmed up to date with no new arrears.
                2. Old defaults or judgements marked satisfied where you could clear them.
                3. One builder product taken and paid in full every month.
                4. Twelve consecutive clean months showing on every report.

                ## Notes
                If debts still feel unmanageable, speak to a free debt advice service before taking any new credit, even a builder card.
              priority: high
              frontmatter:
                mode: building
                output_kind: habit
                success_criteria: "Every report shows twelve consecutive months of on-time payments since the default or judgement, with no new arrears."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Confirm every open account is up to date with no arrears"
                - "Check whether any judgement can be marked satisfied or set aside"
                - "Note each month of clean payments in a rebuild log @recurring(monthly:11)"
                - "Wait until three clean months show before applying for a builder product"
            - name: Credit file separation after a relationship ends
              description: |-
                ## Purpose
                Joint mortgages, loans, accounts and even shared utilities can keep two people's files linked long after they separate, and an ex-partner's missed payments then appear in your lending decisions. Closing or transferring joint credit, then asking every agency to remove the link, protects your file while the wider financial settlement is worked out.

                ## Milestones
                1. Every joint credit account and shared utility listed with who now pays it.
                2. Joint accounts closed, frozen or moved into one name where the lender allows.
                3. Removal of the financial link requested at every agency.
                4. Reports showing no remaining link to the former partner.

                ## Notes
                Joint debts usually remain the responsibility of both people until the lender agrees otherwise, so get legal advice before assuming a debt is no longer yours.
              priority: medium
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "No report shows a financial link to the former partner, or each remaining link is backed by a joint account still being closed."
                cadence: phased
                effort_hours_estimate: "5"
              tasks:
                - "List every joint credit account and shared bill with its current payer"
                - "Ask each lender whether a joint account can be closed or moved into one name"
                - "Request removal of the link at every agency once joint accounts close"
                - "Check each report shows no remaining link"
            - name: Joint applications and your partner's credit history
              description: |-
                ## Purpose
                When a couple applies for a mortgage, car finance or even a joint utility account, both files are read and the weaker one can set the terms. Sharing reports openly before a joint application, without judgement, lets you fix errors on both files and decide whether applying jointly or in one name gives a better result.

                ## Milestones
                1. Both partners' full reports pulled and read together.
                2. Errors and outdated links on each file listed and disputed.
                3. A decision made on joint versus single-name applications for the next big product.
                4. A plan agreed for whichever file is weaker.
              priority: medium
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "Both partners have reviewed each other's reports, and a written decision on joint or single-name application exists for the next big product."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Agree a time to read both full reports together"
                - "List errors and outdated links on each file"
                - "Decide whether the next big application should be joint or single-name"
                - "Review both files together before any joint application @recurring(yearly)"
            - name: Credit history while self-employed
              description: |-
                ## Purpose
                Freelancers and business owners often have files that look fine but are declined because income is harder to verify, or because business and personal credit are tangled. Keeping personal credit separate, building a strong personal file and having two or three years of income evidence ready makes the self-employed applicant as easy to approve as an employee.

                ## Milestones
                1. Business and personal credit products separated, with no personal card used for business costs.
                2. Two to three years of tax returns or accounts kept ready as income evidence.
                3. Lenders that regularly accept self-employed applicants noted.
                4. Personal reports checked for any business credit wrongly recorded.

                ## Notes
                In some countries a sole trader's business credit appears on the personal file. Find out how yours works before taking business borrowing.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Personal and business credit are separate, and an income evidence pack of at least two years is saved and ready for applications."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Move any business spending off personal credit cards"
                - "Save two to three years of tax returns in an income evidence folder"
                - "Check personal reports for business credit recorded against you"
                - "Update the income evidence pack after each tax return @recurring(yearly)"
            - name: Keeping a credit file active in retirement
              description: |-
                ## Purpose
                Retirees who have paid off the mortgage and cut up their cards can find their file going quiet, which makes later borrowing, such as a care-related loan or a car, harder than they expected. Keeping one or two accounts lightly active, details current and alerts switched on is a small effort that keeps options open.

                ## Milestones
                1. One or two credit accounts chosen to keep open and lightly used.
                2. A full-balance direct debit on each, set from the pension account.
                3. Address, name and income details current with every lender.
                4. Alerts active so any unexpected application is spotted.
              priority: low
              frontmatter:
                mode: building
                output_kind: habit
                success_criteria: "One or two accounts remain open with recent cleared use and a full-balance direct debit, and alerts are active."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Choose one or two cards or accounts to keep open"
                - "Set a full-balance direct debit from your pension account on each"
                - "Move one small regular bill onto each card you keep"
                - "Confirm your alerts are switched on for every agency"
            - name: Helping a parent or young adult check their credit file
              description: |-
                ## Purpose
                An elderly parent may never have seen their file, and a teenager may not know one exists. Sitting with a family member while they request their own reports, read them and switch on alerts helps them spot errors or fraud early, while keeping the file and the login firmly in their own name and control.

                ## Milestones
                1. The family member's agreement to look at their file together.
                2. Their full reports requested in their own name with their own login.
                3. Any errors or unrecognised entries listed for them to dispute.
                4. Alerts switched on and sent to their own email or phone.

                ## Notes
                Never use another adult's login or apply for anything in their name, even with good intentions. If they need ongoing help, look into a formal arrangement such as a power of attorney.
              priority: low
              frontmatter:
                mode: service
                output_kind: deliverable
                success_criteria: "The family member has their own reports, a list of anything to dispute, and alerts going to their own contact details."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Ask the family member if they would like help checking their file"
                - "Sit with them while they request their own full reports"
                - "Help them list any errors or unknown entries to dispute"
                - "Remind them to read their full report each year @recurring(yearly)"
            - name: Clearing fraudulent accounts from your credit file
              description: |-
                ## Purpose
                When someone opens credit in your name, the accounts, searches and missed payments can sit on your file and block your own applications until each one is formally removed. Working through it methodically, with a police or fraud report reference, each lender's fraud team and each agency, gets the file back to the true picture.

                ## Milestones
                1. Every fraudulent account and search listed with lender and agency.
                2. A crime or fraud reference number obtained from the right authority.
                3. Each lender's fraud team notified, with written confirmation that the account is not yours.
                4. Every fraudulent entry removed from every report.

                ## Notes
                Change passwords on email and financial accounts first, since identity fraud often starts with a compromised inbox.
              priority: high
              deadlineOffsetDays: 90
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "Every fraudulent account and search has a lender confirmation and has been removed from every agency report."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "List every account and search on your reports that you did not make"
                - "Report the identity fraud and note the reference number"
                - "Contact each lender's fraud team and ask for written confirmation"
                - "Pull a full report from each agency until a year passes clean @recurring(quarterly)"
            - name: Credit freeze or protective registration decision
              description: |-
                ## Purpose
                Many countries let you freeze your file, add a fraud alert or join a protective registration service so lenders take extra identity checks before opening credit. It is strong protection after a data breach or past fraud, but it also slows your own applications, so the choice deserves a clear look at the trade-off.

                ## Milestones
                1. The freeze, alert and protective registration options in your country listed with costs.
                2. The effect of each on your own future applications written down.
                3. A decision recorded on which, if any, to use.
                4. If chosen, the protection set up and the unfreeze steps saved.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A written decision on freezing or protecting your file exists, and any protection chosen is active with unfreeze steps saved."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "List the freeze, fraud alert and protective registration options available to you"
                - "Note how each would slow your own future applications"
                - "Record which protection you will use, if any"
                - "Save the steps to lift the protection before your next application"
            - name: Credit dossier for a complex application
              description: |-
                ## Purpose
                Applicants with a mixed history, such as a settled default, self-employed income, a recent move from abroad or a past fraud, are often referred to a human underwriter. A short dossier with current reports, a one-page explanation of each entry and the supporting letters lets a broker or underwriter say yes quickly rather than asking for more and losing the deal.

                ## Milestones
                1. Current full reports from every agency included.
                2. A one-page explanation covering every entry an underwriter might query.
                3. Supporting letters attached: settlement confirmations, fraud references, dispute outcomes.
                4. The dossier reviewed by a broker or adviser before use.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A dossier with current reports, a one-page explanation and every supporting letter is ready and has been reviewed by a broker or adviser."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Gather current full reports from every agency"
                - "Ask the agent to draft a one-page explanation of each awkward entry"
                - "Attach settlement letters, fraud references and dispute outcomes"
                - "Ask a broker or adviser to review the dossier before you apply"
---

# Credit Score Improvement

This area is for anyone who wants a credit file that lenders, landlords and employers read favourably, whether you are starting with no history at all, recovering from a missed payment or default, or polishing an already decent record before a mortgage. It starts with the foundations (every agency's report pulled, accounts, personal details, links and late markers checked, utilisation and searches measured), then the monthly and quarterly routines that keep the file clean, the knowledge of how scores and lending decisions really work, the decisions about disputes, builder products and rent reporting, the dated applications to prepare for, versions for young adults, newcomers, separated couples, the self-employed and retirees, and finally the fraud clean-up, freeze and application dossier work of someone who knows their file well.

What repeats is a monthly alerts check and score record, a card payment made before each statement date, a quarterly rotation through the agencies' full reports and the search log, gentle use of dormant cards, and a yearly deep review of the whole file and its financial links. The Metrics log, Remediation plan, Purchase decision and Operational checklist templates pair with the projects that name them. Installing adds all 50 projects as active, so archive the ones that are not for you yet.
