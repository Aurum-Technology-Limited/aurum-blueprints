---
id: personal-finance.household-bills-calendar
name: Household Bills Calendar
description: "Every bill, direct debit and due date mapped on one calendar against payday, with a float that stops bounced payments and routines that catch price rises and contract end dates early."
category: personal
version: 1.0.0
tags: [personal-finance, household-bills-calendar, everyone, homeowner, renter, direct-debits, due-dates, cash-flow]
author: Aurum Technology
starter_structure:
  templates:
    - monthly-budget-bills
    - operational-checklist
    - metrics-log
  pillars:
    - name: Personal Finance
      emoji: "💷"
      description: "The day-to-day money system: income, budget, bills, debt, savings buffers, insurance, tax and big purchases, run so that nothing surprises you and every pound has a job."
      pillarFrontmatter:
        review_cadence: monthly
      areas:
        - name: Household Bills Calendar
          description: "Mapping every bill, direct debit and due date across the month so payments never bounce and cash flow stays smooth."
          projects:
            - name: Master list of every household bill
              description: |-
                ## Purpose
                Most households can name the rent or mortgage and the energy bill, then lose track somewhere around the twelfth payment. Pulling three months of bank and card statements into one list, with provider, amount, frequency, due day and payment method for each, gives you the raw material every other part of this area depends on. Expect 20 to 40 lines once water, insurance, phones and annual charges are counted.

                ## Milestones
                1. Three months of statements for every current account and credit card downloaded.
                2. Every recurring outgoing entered on one list with provider, amount, frequency, due day and payment method.
                3. Each line marked as a fixed or a variable amount.
                4. A monthly total of committed bills worked out, with annual bills counted as one twelfth.

                ## Notes
                Start from the **Monthly budget and bills** template. List what you actually pay, not what you think you should pay; cancelling things belongs in a separate tidy-up.
              priority: high
              deadlineOffsetDays: 14
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A single list holds every recurring household bill with its amount, frequency, due day and payment method, plus a monthly total."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Download the last three months of statements for each account and card"
                - "Enter every repeating payment as one line on the master list"
                - "Add the frequency, due day and payment method to each line"
                - "Total the monthly committed bills, counting annual ones as one twelfth"
                - "Check the master list for new or ended bills @recurring(quarterly)"
            - name: Bank mandate list matched to the master list
              description: |-
                ## Purpose
                Your bank keeps its own list of every direct debit and standing order it will honour, and it often includes old mandates you forgot existed. Matching that list line by line against your master list catches dormant mandates that could be used again, payments set up from the wrong account and standing orders still paying an old amount.

                ## Milestones
                1. The direct debit and standing order lists saved from each bank's app or online banking.
                2. Every mandate matched to a line on the master list or marked as unknown.
                3. Each unknown or dormant mandate identified with the provider or cancelled through the bank.
                4. Standing orders with out-of-date amounts corrected.

                ## Notes
                A direct debit can stay active for years after the last collection. Cancelling a dormant one is usually safe once the account with the provider is closed, but check first that nothing is still owed.
              priority: high
              deadlineOffsetDays: 14
              frontmatter:
                mode: research
                output_kind: artifact
                success_criteria: "Every active direct debit and standing order at each bank is matched to a known bill, with unknown mandates resolved or cancelled."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Open the direct debit list in your banking app and save a copy"
                - "Save the standing order list from each account as well"
                - "Match every mandate against the master bill list"
                - "Ask the provider about any mandate you cannot identify"
                - "Compare the bank's mandate list with the master list again @recurring(yearly)"
            - name: Card-linked recurring payments map
              description: |-
                ## Purpose
                Regular payments taken from a debit or credit card, often called continuous payment authorities, never appear in the bank's direct debit list, so they are the bills most likely to surprise you. Searching card statements for repeating merchants and adding each to the calendar closes the biggest blind spot in a bills map.

                ## Milestones
                1. Twelve months of card statements searched for merchants charging more than once.
                2. Each card-linked recurring payment added to the master list with the card it uses.
                3. Annual card charges, such as memberships and software renewals, given a due date.
                4. Any repeating charge you do not recognise queried with the merchant or card issuer.

                ## Notes
                Mapping comes first. Deciding which of these to cancel belongs to a subscription tidy-up, not this project.
              priority: medium
              deadlineOffsetDays: 21
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "Every recurring payment taken by card is on the master list with its amount, date and the card it is charged to."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Search a year of card statements for merchants that repeat"
                - "Add each card-linked payment to the master list with its card"
                - "Give every yearly card charge a renewal date on the calendar"
                - "Query any repeating charge you do not recognise with the card issuer"
            - name: Annual and irregular bills register
              description: |-
                ## Purpose
                Bills that arrive once a year, twice a year or every few years are the ones that knock a month sideways: vehicle tax and inspection, a TV licence, boiler servicing, water billed half-yearly, insurance paid upfront, professional fees. A register with the month each one lands and its last amount turns those shocks into known dates.

                ## Milestones
                1. Every bill paid less often than monthly listed with its last amount.
                2. The month each one falls due written beside it.
                3. The total of irregular bills shown for each month of the year.
                4. The two heaviest months for irregular bills identified.

                ## Notes
                This register says when and how much. Saving towards the big ones gradually is a job for a sinking fund.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A register lists every non-monthly bill with its due month and last amount, and shows the total falling in each calendar month."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Search last year's statements for payments made only once or twice"
                - "List each irregular bill with the month it falls due"
                - "Add up the irregular bills falling in each month"
                - "Highlight the two months carrying the most irregular bills"
            - name: Month-at-a-glance bills calendar
              description: |-
                ## Purpose
                Your master list says what you owe; a calendar says when the money leaves. Plotting every bill on a single grid of days 1 to 31, with paydays marked, shows clusters at a glance and becomes the page you check more than any other in this area.

                ## Milestones
                1. A one-page grid of days 1 to 31 with every monthly bill placed on its collection day.
                2. Paydays for everyone in the household marked on the same grid.
                3. Variable bills shown with a typical and a high amount.
                4. The calendar stored where every adult paying bills can see it.

                ## Notes
                Use the day the money leaves your account, not the date printed on the bill. Payments due on a weekend usually move to the next working day.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A single-page calendar shows every monthly bill on its collection day alongside every household payday."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Set up a grid with one box for each day of the month"
                - "Place each monthly bill on the day it actually leaves the account"
                - "Mark each household payday on the grid"
                - "Share the calendar with every adult who pays household bills"
            - name: Payday versus due-date gap check
              description: |-
                ## Purpose
                Bounced payments rarely happen because the money is missing over the whole month; they happen because a big bill lands three days before pay. Running a simple day-by-day balance through one typical month shows the exact days the account dips lowest and which bills cause it.

                ## Milestones
                1. A typical month's balance worked out day by day from one payday to the next.
                2. The lowest point of the month and its date identified.
                3. The bills falling in the week before payday listed with their total.
                4. A shortlist of bills that would be safer collected after payday.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "The lowest-balance day of a typical month is identified, with the bills that cause it listed and a shortlist of due dates to move."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Start a running balance from the morning after your last payday"
                - "Subtract each bill on its collection day until the next payday"
                - "Circle the day the balance is at its lowest"
                - "List the bills that land in the last week before payday"
            - name: Bills account float and minimum balance rule
              description: |-
                ## Purpose
                Leaving a float, a set amount that stays in the bills account after everything due this month is covered, absorbs a bill that comes out early, a variable bill that runs high or a payday delayed by a bank holiday. Setting a figure, rather than running the account to zero, is the cheapest protection against returned payment fees.

                ## Milestones
                1. The largest variable bill of the past year and the busiest week of collections both identified.
                2. A float figure agreed and written on the calendar page.
                3. The float built up in the account over one or more paydays.
                4. A rule recorded for what happens when the balance falls below the float.

                ## Notes
                A float is not an emergency fund. It covers timing, not job loss or a broken boiler, so keep the two separate.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A written minimum balance figure for the bills account is in place and the account has held at least that amount for one full month."
                cadence: one-shot
                effort_hours_estimate: "1"
              tasks:
                - "Find the largest variable bill paid in the last twelve months"
                - "Add up the busiest single week of collections on your calendar"
                - "Set the float figure and write it at the top of the bills calendar"
                - "Write down what you will do the day the balance drops below the float"
            - name: Choosing how each bill gets paid
              description: |-
                ## Purpose
                Direct debit, standing order, card payment and manual transfer each suit different bills. Direct debits handle amounts that change, standing orders give you control of fixed sums, and manual payments make sense only for bills you want to check first. Deciding the method bill by bill, with a reason, stops the mix being an accident of whoever set each one up.

                ## Milestones
                1. Each bill on the master list given a preferred payment method with a one-line reason.
                2. Bills still paid by hand reduced to those that genuinely need checking before payment.
                3. Every planned change of method set up with the provider or bank.
                4. The payment method column on the master list brought up to date.

                ## Notes
                Some providers charge more for paying by card or on receipt of a paper bill than by direct debit. Ask before you switch.
              priority: medium
              deadlineOffsetDays: 45
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "Every bill has a recorded payment method and reason, and every planned method change has been made."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Mark each bill on the master list with its current payment method"
                - "Write the method you want for each bill and a one-line reason"
                - "Ask each affected provider whether the method changes the price"
                - "Set up the method changes with the providers or your bank"
            - name: One home for incoming bills and notices
              description: |-
                ## Purpose
                Paper bills, emails, app alerts and texts all carry billing news, and the important one is usually the one that got buried. A single email folder and a single paper tray, cleared on a fixed day, means nothing about a bill is missed because it arrived in the wrong place.

                ## Milestones
                1. One email folder or label set up for bills, with a filter for each provider's address.
                2. One physical tray or envelope for paper bills and letters.
                3. Every provider's contact email checked so notices reach an address you read.
                4. A fixed weekday chosen to clear both.
              priority: medium
              deadlineOffsetDays: 14
              frontmatter:
                mode: building
                output_kind: habit
                success_criteria: "All bill emails filter into one folder and all paper bills go to one tray, both cleared on a set weekday."
                cadence: one-shot
                effort_hours_estimate: "1"
              tasks:
                - "Create an email folder or label just for bills"
                - "Add a filter for each provider's sending address"
                - "Put a single tray or envelope by the door for paper bills"
                - "Update any provider still emailing an address you rarely check"
            - name: Weekly five-minute bills glance
              description: |-
                ## Purpose
                Five minutes on the same evening each week, looking only at the next seven days, catches nearly every problem while there is still time to fix it: a balance below what is due, a bill higher than expected, a manual payment not yet made. It is short enough to keep doing for years.

                ## Milestones
                1. A fixed weekly slot chosen and put in your calendar.
                2. Each glance covering the next seven days of collections against the current balance.
                3. Any shortfall moved into the bills account before the collection date.
                4. Eight weekly glances completed in a row.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "The next seven days of bills have been checked against the bills account balance every week for eight consecutive weeks."
                cadence: rolling
              tasks:
                - "Pick an evening and a time for the weekly bills glance"
                - "Compare the next seven days of bills with the account balance @recurring(weekly:fri)"
                - "Move money across the same evening if anything is short"
                - "Clear the bills email folder and paper tray during the glance"
            - name: Monthly bill run on a fixed day
              description: |-
                ## Purpose
                One sitting a month covers the jobs a weekly glance does not: paying manual bills, checking that last month's direct debits came out at the expected amounts, filing the month's bills and updating the master list. A fixed day just after the main payday stops it drifting.

                ## Milestones
                1. A bill run day set a day or two after the main payday.
                2. A written checklist covering manual payments, amount checks, filing and list updates.
                3. Three monthly runs completed using the checklist.
                4. The checklist trimmed after the third run to drop steps that never matter.

                ## Notes
                Start from the **Operational checklist** template. Keep the run under 45 minutes; if it takes longer, something should be automated.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A monthly bill run has been completed with the written checklist for three consecutive months."
                cadence: rolling
              tasks:
                - "Choose the bill run day and add it to your calendar"
                - "Write the bill run checklist from the operational checklist template"
                - "Work through the bill run checklist @recurring(monthly:27)"
                - "Cut any checklist step that has not mattered for three runs"
            - name: Bill amount history log
              description: |-
                ## Purpose
                Price rises often arrive as a quietly higher direct debit, and a bill that creeps up a few percent each year is easy to miss without a record. Logging each variable bill's amount once a month builds a history that shows creep, seasonal swings and the moment something looks wrong.

                ## Milestones
                1. A log with one column per variable bill and one row per month.
                2. The past six months filled in from statements.
                3. Each new month's amounts added within a week of the bill run.
                4. Any bill more than ten percent above the same month last year flagged and explained.

                ## Notes
                Start from the **Metrics log** template.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A log shows at least twelve months of amounts for every variable bill, with rises above ten percent flagged and explained."
                cadence: rolling
              tasks:
                - "Set up a log with a column for each variable bill"
                - "Fill in the last six months from your statements"
                - "Add this month's bill amounts to the log @recurring(monthly:4)"
                - "Flag any bill more than ten percent up on the year before"
            - name: Twelve-month bills forecast
              description: |-
                ## Purpose
                Knowing this month's bills is useful; knowing that October needs several hundred extra for insurance, vehicle tax and the boiler service is what stops it becoming a crisis. A rolling twelve-month forecast combines the monthly calendar and the irregular register into one figure per month.

                ## Milestones
                1. A twelve-month table with monthly bills, irregular bills and a total for each month.
                2. Known price changes and contract end dates built into the right months.
                3. The three heaviest months identified with their totals.
                4. The forecast rolled forward by three months each quarter.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: artifact
                success_criteria: "A twelve-month forecast of bills by month exists, has been rolled forward at least once and names the three heaviest months."
                cadence: rolling
              tasks:
                - "Build a table with one column per month for the next twelve months"
                - "Add monthly bills, then irregular bills, in the months they fall"
                - "Roll the forecast forward and update changed amounts @recurring(quarterly)"
                - "Ask the agent to summarise which months need extra money set aside"
            - name: Contract end dates and notice periods calendar
              description: |-
                ## Purpose
                Fixed-term deals for energy, broadband, mobile and insurance often roll onto higher prices if nothing happens at the end, and some need notice weeks in advance. Recording each end date and notice period on the bills calendar, with a reminder six weeks ahead, makes sure the decision gets made on time.

                ## Milestones
                1. Every fixed-term contract listed with its start date, end date and notice period.
                2. A reminder set six weeks before each end date.
                3. Each reminder pointing to where the comparison or renewal decision will be made.
                4. No contract in the past year rolled onto an out-of-contract price unnoticed.

                ## Notes
                This project only keeps the dates. Comparing and switching deals belongs to its own area.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every fixed-term household contract has its end date and notice period on the calendar with a reminder six weeks before."
                cadence: rolling
              tasks:
                - "Find the end date and notice period for each fixed-term contract"
                - "Put each end date on the bills calendar"
                - "Set a reminder six weeks before every end date"
                - "Look ahead at contract end dates for the next two months @recurring(monthly:12)"
            - name: Monthly meter readings for accurate bills
              description: |-
                ## Purpose
                Energy and water bills based on estimates can drift far from real use, building a debt or a credit that only shows up months later. Submitting readings on the same day each month keeps the bill matched to what you actually used and gives you evidence if a bill is ever disputed.

                ## Milestones
                1. Every meter in the home located, with its serial number recorded.
                2. A photo of each reading taken and submitted on a fixed day.
                3. Three months of reading photos saved in one folder.
                4. The next bill checked to confirm it used your readings, not an estimate.

                ## Notes
                Smart meters do not always send readings. If your bill says estimated, submit a manual reading anyway.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Readings for every meter have been photographed and submitted on a fixed day for three months, and the bills show actual readings."
                cadence: rolling
              tasks:
                - "Find each meter and note its serial number"
                - "Photograph and submit every meter reading @recurring(monthly:28)"
                - "Save each month's reading photos in one folder"
                - "Check the next bill says actual rather than estimated"
            - name: Handling payment change notices within a week
              description: |-
                ## Purpose
                Providers usually have to tell you before they change a direct debit amount or date, but the letter or email is easy to file and forget. Treating every notice as a small task, with the calendar, master list and forecast updated within a week, keeps the map true and leaves time to query a change that looks wrong.

                ## Milestones
                1. A rule written down: every payment change notice is actioned within seven days.
                2. Each notice logged with the old amount, new amount and effective date.
                3. The calendar, master list and forecast updated for each change.
                4. Any change that looks too high queried with the provider before it takes effect.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every payment change notice received in the past three months is logged and reflected in the calendar, master list and forecast within a week."
                cadence: rolling
              tasks:
                - "Write the seven-day rule at the top of the master list"
                - "Log each notice with its old amount, new amount and start date"
                - "Update the calendar, list and forecast for each change"
                - "Contact the provider about any change that looks wrong"
            - name: Yearly rebuild of the bills calendar
              description: |-
                ## Purpose
                Small edits through the year leave a calendar with stale amounts, finished contracts and bills that changed date. Rebuilding it once a year from fresh statements, in a quiet month rather than January, gives you a clean map for the next twelve months.

                ## Milestones
                1. A rebuild month chosen that avoids your heaviest bill months.
                2. The master list, mandate list and irregular register refreshed from twelve months of statements.
                3. A new month-at-a-glance calendar produced.
                4. Last year's calendar archived for comparison.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: artifact
                success_criteria: "A freshly rebuilt bills calendar and master list, dated this year, has replaced last year's version, which is archived."
                cadence: cyclic
                effort_hours_estimate: "3"
              tasks:
                - "Choose the month for the yearly rebuild and book a two-hour slot"
                - "Rebuild the master list and calendar from fresh statements @recurring(yearly)"
                - "Archive last year's calendar next to the new one"
                - "Compare this year's monthly bill total with last year's"
            - name: Paperless bill archive and retention
              description: |-
                ## Purpose
                Bills you may need later, for a dispute, a mortgage application, a tax return or proof of address, usually sit in an inbox that is hard to search. A simple folder per provider per year, filled monthly, makes any bill findable in under a minute.

                ## Milestones
                1. A folder structure by provider and year set up in your file storage.
                2. The last twelve months of bills downloaded and filed.
                3. A retention period decided for each type of bill, with a note of why.
                4. Files older than their retention period cleared once a year.

                ## Notes
                Keep anything linked to tax, property or a dispute for longer than ordinary utility bills. Check what your tax authority expects.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every bill from the last twelve months is filed by provider and year, with a written retention period for each type."
                cadence: rolling
              tasks:
                - "Create a folder for each provider with a subfolder for each year"
                - "Download and file the last twelve months of bills"
                - "Write down how long to keep each type of bill"
                - "File this month's downloaded bills @recurring(monthly:9)"
            - name: Direct debits, standing orders and card payments compared
              description: |-
                ## Purpose
                The three ways bills leave your account give you very different rights. A direct debit lets the provider set the amount but usually comes with refund protection if it is taken wrongly, a standing order is controlled entirely by you, and a recurring card payment can be stopped through the card issuer. Knowing which is which tells you who to call when something goes wrong.

                ## Milestones
                1. Who controls the amount and date written down for each method.
                2. Your country's protection for wrongly taken direct debits looked up and noted.
                3. How to stop each kind of payment, through the bank or card issuer, recorded.
                4. One example of each method on your own master list identified.

                ## Notes
                In the UK this protection is the Direct Debit Guarantee; other countries have their own schemes. Check the version that applies to your bank.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A one-page note explains who controls each payment method, how to stop it and what refund protection applies, with examples from your own bills."
                cadence: phased
                effort_hours_estimate: "2"
              tasks:
                - "Read your bank's help pages on direct debits and standing orders"
                - "Look up the refund protection for wrongly taken direct debits"
                - "Find out how your card issuer stops a recurring card payment"
                - "Write a one-page note comparing the three methods"
            - name: Reading a utility bill line by line
              description: |-
                ## Purpose
                Utility bills hide a lot in small print: standing charges, unit rates, whether the reading was estimated and whether the account is in credit or debit. Learning to read one properly once means you can spot an estimate, a wrong tariff or a growing debt in seconds every time after.

                ## Milestones
                1. Your latest energy or water bill annotated with each charge explained.
                2. The standing charge, unit rate and usage figures found and written down.
                3. Estimated and actual readings told apart on the bill.
                4. The account balance understood as credit or debit, with what that means for the next payment.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Your most recent utility bill is annotated with the standing charge, unit rate, reading type and account balance all correctly identified."
                cadence: phased
                effort_hours_estimate: "1"
              tasks:
                - "Download your latest energy or water bill as a PDF"
                - "Mark the standing charge, unit rate and total usage"
                - "Find whether each reading was actual or estimated"
                - "Ask the agent to explain any charge you still do not understand"
            - name: Billing cycles, statement dates and payment windows
              description: |-
                ## Purpose
                Rent is usually paid in advance, energy in arrears, and a credit card has a statement date weeks before its payment date. Understanding the cycle behind each bill explains why the first bill after moving is larger, why a card payment can fall due before you are paid, and which date actually belongs on your calendar.

                ## Milestones
                1. Each bill on the master list marked as paid in advance or in arrears.
                2. The statement date and payment due date of each credit card written down.
                3. The grace period, if any, before a late fee applies found for your main bills.
                4. The calendar checked so it shows collection dates rather than statement dates.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Every bill on the master list is marked advance or arrears, and every credit card has its statement and due dates recorded."
                cadence: phased
                effort_hours_estimate: "2"
              tasks:
                - "Mark each bill on the master list as paid in advance or arrears"
                - "Note the statement date and due date of every credit card"
                - "Look up the grace period before a late fee on your three biggest bills"
                - "Correct any calendar entry that shows a statement date"
            - name: What happens when a bill payment fails
              description: |-
                ## Purpose
                A returned direct debit can bring a fee from your bank, a fee from the provider, a second attempt a few days later and, if it keeps happening, a mark on your credit file. Knowing the sequence and the timings for your own bank before it happens tells you exactly how long you have to fix it and who to call first.

                ## Milestones
                1. Your bank's fee and process for an unpaid direct debit or standing order found.
                2. The retry and late fee policies of your three largest providers noted.
                3. How quickly a missed payment can reach your credit file understood.
                4. A short first-hour plan for a failed payment written on the calendar page.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A written note covers your bank's returned payment process, three providers' retry and fee rules, and a first-hour plan for a failed payment."
                cadence: phased
                effort_hours_estimate: "2"
              tasks:
                - "Search your bank's tariff for unpaid or returned payment fees"
                - "Look up the retry and late fee policy for your three biggest bills"
                - "Find out how missed payments are reported to credit reference agencies"
                - "Write a five-line plan for the day a payment fails"
            - name: Weekends, bank holidays and payment processing times
              description: |-
                ## Purpose
                Collections due on a Saturday usually come out on the next working day, standing orders may go earlier or later depending on the bank, and a transfer made late on a Friday may not land until Monday. These few rules explain most near misses in a tight month and only need learning once.

                ## Milestones
                1. Your bank's rules for direct debits and standing orders falling on non-working days found.
                2. Same-day transfer cut-off times for your accounts noted.
                3. Months where payday falls on a weekend or holiday marked on the calendar.
                4. One rule of thumb written down for moving money early before a long weekend.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Your bank's weekend and holiday rules and transfer cut-off times are written on the calendar page, with affected months marked."
                cadence: phased
                effort_hours_estimate: "1"
              tasks:
                - "Read your bank's guidance on payments due on non-working days"
                - "Note the cut-off time for same-day transfers"
                - "Mark this year's bank holidays and weekend paydays on the calendar"
                - "Write your rule for moving money before a long weekend"
            - name: Estimated bills, back-billing and catch-up charges
              description: |-
                ## Purpose
                When a provider has billed on estimates for a long time and then gets a real reading, the catch-up bill can be large. Many countries limit how far back a provider can charge for unbilled use, and knowing the rule that applies to you turns a shocking letter into a question you can ask.

                ## Milestones
                1. The back-billing rules for energy and water in your country found from the regulator or a consumer body.
                2. Any past bills based on long runs of estimates identified.
                3. A short script written for querying a catch-up bill.
                4. Contact details for the relevant ombudsman or complaints scheme saved.

                ## Notes
                In Great Britain, for example, energy suppliers generally cannot bill for use more than 12 months old when the delay was their fault. Check your own regulator's current rules.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A note records the back-billing rules that apply to you, any past estimate-heavy bills and the complaints route to use."
                cadence: phased
                effort_hours_estimate: "2"
              tasks:
                - "Find your regulator's guidance on back-billing and catch-up bills"
                - "Check the last year of bills for runs of estimated readings"
                - "Write a short script for querying a large catch-up bill"
                - "Save the complaints scheme contact details with your bill archive"
            - name: Priority order for bills in a short month
              description: |-
                ## Purpose
                If money is short this month, not every bill carries the same consequence. Housing costs, property tax, energy, child maintenance and court fines usually come first because missing them can lead to losing your home, enforcement or disconnection, while most other bills bring fees but milder outcomes. Knowing the order before a squeeze helps you pay the right things first and call the rest early.

                ## Milestones
                1. Each bill on the master list labelled priority or non-priority.
                2. The main consequence of missing each priority bill written in one line.
                3. A phone number noted for each priority provider's payment difficulties team.
                4. A free debt advice service saved in case a short month becomes a pattern.

                ## Notes
                This is an ordering tool for a one-off tight month. If it happens repeatedly, take free debt advice rather than juggling bills alone.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Every bill on the master list is labelled priority or non-priority, with the consequence and a difficulties phone number for each priority bill."
                cadence: phased
                effort_hours_estimate: "1"
              tasks:
                - "Label each bill on the master list as priority or non-priority"
                - "Write the consequence of missing each priority bill"
                - "Save the payment difficulties number for each priority provider"
                - "Save the contact details of a free debt advice service"
            - name: Moving due dates to sit after payday
              description: |-
                ## Purpose
                Many providers will move a direct debit date if you ask, often by phone or in their app, and this single change removes most near misses. Using the gap check to pick which bills to move, and aiming for two collection windows a month, makes the calendar match how money actually arrives.

                ## Milestones
                1. A shortlist of bills to move, taken from the payday gap check.
                2. Each provider asked to move the collection date, with the new date confirmed in writing.
                3. The calendar updated with the new dates.
                4. The first month after the changes checked for any double or missed collections.

                ## Notes
                Changing a date can mean one month with two collections or a short gap. Ask the provider how the switchover month works before agreeing.
              priority: high
              deadlineOffsetDays: 60
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "Every bill on the shortlist now collects after payday, with new dates confirmed by each provider and shown on the calendar."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Pick the bills to move from the payday gap check"
                - "Ask each provider to move its collection date"
                - "Ask how the switchover month will be collected"
                - "Update the calendar once each new date is confirmed"
            - name: Paying annually or monthly for each yearly bill
              description: |-
                ## Purpose
                Insurance, vehicle tax and some memberships cost more when spread monthly, sometimes by a surcharge that works out as a high interest rate. Comparing the annual and monthly price for each yearly bill, then choosing deliberately, can save real money for households that can manage the lump sum.

                ## Milestones
                1. Each yearly bill listed with its annual price and its total monthly price.
                2. The extra cost of paying monthly worked out as an amount and a percentage.
                3. A decision recorded for each bill: annual, monthly, or annual from next year.
                4. Bills switching to annual added to the irregular register in their month.

                ## Notes
                Paying annually only helps if the lump sum is set aside in advance. If it is not, monthly may be the safer choice for now.
              priority: medium
              deadlineOffsetDays: 90
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "Every yearly bill has its annual and monthly totals compared and a recorded decision on how it will be paid."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "List every bill offered as either annual or monthly"
                - "Ask each provider for the annual price and the monthly total"
                - "Work out the extra cost of paying monthly for each"
                - "Record the decision for each bill on the master list"
            - name: Late fee and returned payment audit
              description: |-
                ## Purpose
                Late fees and returned payment charges are small enough to ignore one at a time and large enough to matter over a year. Searching a year of statements for them, and giving each one a cause, usually shows that two or three bills cause nearly all of them.

                ## Milestones
                1. Twelve months of statements searched for late, unpaid and returned payment fees.
                2. Each fee listed with its date, amount and the bill that caused it.
                3. A cause and a fix recorded for each bill that triggered a fee.
                4. A goodwill refund requested where a fee was the first in a long time.
              priority: medium
              deadlineOffsetDays: 45
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "Every late or returned payment fee from the past year is listed with its cause, a fix and the outcome of any refund request."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Search a year of statements for fee, charge and returned entries"
                - "List each fee with the bill that caused it"
                - "Write the fix for each bill that triggered a fee"
                - "Ask for a goodwill refund on any first-time fee"
                - "Repeat the fee search across the past twelve months @recurring(yearly)"
            - name: Moving scattered direct debits onto one account
              description: |-
                ## Purpose
                Bills spread across a main account, an old account and a partner's account are hard to watch and easy to let bounce. Bringing every household bill onto one account, with income feeding it on a known day, turns the weekly glance into a single balance check.

                ## Milestones
                1. Every mandate listed by the account it currently draws from.
                2. One account chosen as the bills account.
                3. Each mandate on another account moved, with the provider confirming the new details.
                4. No household bill collected from any other account for two full months.

                ## Notes
                Move mandates one or two at a time and check each collects correctly before moving the next.
              priority: medium
              deadlineOffsetDays: 60
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "All household bills collect from a single account, and none has come from any other account for two consecutive months."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "List each direct debit by the account it currently uses"
                - "Choose the account every bill will be paid from"
                - "Give each provider the new account details, one or two at a time"
                - "Check each moved bill collects correctly before moving the next"
            - name: Smoothing seasonal bills across the year
              description: |-
                ## Purpose
                Heating, cooling and water use swing with the seasons, and paying exactly what you use can make winter bills double the summer ones. Most providers offer a fixed monthly payment that evens this out, but it only works if the amount is checked against real use. Choosing smoothed or pay-as-you-use for each seasonal bill, and checking the balance through the year, keeps the calendar steady.

                ## Milestones
                1. Each seasonal bill identified with its highest and lowest month.
                2. A decision recorded for each between a fixed monthly amount and paying for actual use.
                3. For fixed amounts, the provider's calculation checked against twelve months of use.
                4. The account balance reviewed each quarter, with the payment adjusted if it drifts far into credit or debit.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "Each seasonal bill has a recorded payment approach, and fixed payments have been checked against the account balance each quarter for a year."
                cadence: phased
                effort_hours_estimate: "2"
              tasks:
                - "Find the highest and lowest month for each seasonal bill"
                - "Decide between a fixed monthly amount and paying for actual use"
                - "Check the provider's fixed amount against last year's usage"
                - "Look at each seasonal account's credit or debit balance @recurring(quarterly)"
            - name: Card replacement update list
              description: |-
                ## Purpose
                Cards expire, get lost or are replaced after fraud, and every recurring payment on the old card can fail at once, usually in the week you are least ready. Keeping a list of payments grouped by card means a replacement takes one sitting to update instead of a month of declined charges.

                ## Milestones
                1. A list of every recurring payment grouped by the card it uses.
                2. Each card's expiry month on the bills calendar.
                3. A reminder set a month before each expiry to update payees.
                4. The list used for a real replacement, with every payee updated within a week.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Every card-linked recurring payment is listed by card, and each card's expiry month carries an update reminder on the calendar."
                cadence: one-shot
                effort_hours_estimate: "1"
              tasks:
                - "Group every card-linked payment by the card it uses"
                - "Add each card's expiry month to the bills calendar"
                - "Set a reminder a month before each card expires"
                - "Update every payee within a week of receiving a new card"
            - name: Recovering credit balances and overpayments
              description: |-
                ## Purpose
                Energy and water accounts often build credit over the summer, closed accounts can hold refunds nobody claimed, and a bill paid twice may sit as credit for months. Checking every account's balance once a year and asking for refunds above a sensible buffer returns money that is already yours.

                ## Milestones
                1. The balance of every bill account checked in the provider's app or on the latest statement.
                2. Accounts in credit listed with the amount.
                3. Refunds requested where the credit is more than the next one or two payments.
                4. Closed accounts from previous homes checked for unclaimed credit.

                ## Notes
                Leave enough credit on heating accounts to carry the winter months if you smooth payments.
              priority: low
              frontmatter:
                mode: research
                output_kind: deliverable
                success_criteria: "Every bill account's balance has been checked this year, and refunds have been requested on every credit above the agreed buffer."
                cadence: cyclic
              tasks:
                - "Log in to each provider and note the account balance"
                - "List every account holding credit and how much"
                - "Request a refund on credit above the next two payments"
                - "Contact providers from previous homes about any final credit"
                - "Check every bill account for credit balances @recurring(yearly)"
            - name: Paper or paperless for each bill
              description: |-
                ## Purpose
                Paperless billing is cheaper and easier to archive, but an email notice is easier to miss than an envelope, and someone in the household may rely on paper. Choosing the format bill by bill, with an alert that someone reliably reads, is better than letting each provider decide.

                ## Milestones
                1. The current format of every bill recorded on the master list.
                2. A preference chosen for each, with the reason in one line.
                3. Every paperless bill linked to an email or app alert someone checks weekly.
                4. Any provider charging extra for paper bills noted.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "Each bill has a recorded paper or paperless choice, and every paperless bill triggers an alert to an inbox checked weekly."
                cadence: one-shot
                effort_hours_estimate: "1"
              tasks:
                - "Record whether each bill arrives on paper or electronically"
                - "Choose the format you want for each bill"
                - "Switch formats with each provider that needs changing"
                - "Test that each paperless bill sends an alert you will see"
            - name: Moving house bills handover
              description: |-
                ## Purpose
                Moving is when bills go wrong most: final readings missed, an old direct debit still collecting, property tax charged at two addresses, broadband not live on day one. A handover checklist started four weeks before the move covers closing, transferring and opening every account in the right order.

                ## Milestones
                1. Every bill at the old address listed with what must happen to it: close, transfer or cancel.
                2. Final meter readings photographed on moving day at both addresses.
                3. Each provider told the move date and forwarding address.
                4. Every bill at the new address set up and added to a new calendar.
                5. Old direct debits confirmed as cancelled once final bills are paid.

                ## Notes
                Start from the **Operational checklist** template. Keep the moving-day meter photos until every final bill is settled.
              priority: high
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "Every account at the old address is closed or transferred with final bills paid, and every bill at the new address is on the new calendar."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "List every bill at the current address and what must happen to each"
                - "Book the broadband and energy changes for the new address"
                - "Photograph all meters at both homes on moving day"
                - "Tell the local authority about the move for property tax"
                - "Cancel old direct debits once each final bill is settled"
            - name: New property tax year set-up
              description: |-
                ## Purpose
                Property tax bills, such as council tax in the UK or local rates elsewhere, usually arrive once a year with a new amount and a choice of instalments. Checking the band or valuation, choosing the number of instalments and putting every date on the calendar the week the bill arrives saves a year of guessing.

                ## Milestones
                1. The new annual bill checked for the right property, occupants and discounts.
                2. The instalment option chosen, such as ten or twelve payments.
                3. Every instalment date added to the calendar.
                4. Any discount or exemption you may qualify for, such as single occupancy, applied for.
              priority: medium
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "This year's property tax bill is checked, the instalment plan is chosen and every instalment date is on the calendar."
                cadence: cyclic
              tasks:
                - "Check the new bill shows the right address, band and discounts"
                - "Choose the number of instalments and confirm it with the local authority"
                - "Add every instalment date to the bills calendar"
                - "Check whether any discount or exemption applies to your household"
                - "Set up the new property tax year when the bill arrives @recurring(yearly)"
            - name: Bills cover before a long trip away
              description: |-
                ## Purpose
                A month or more away, travelling or working abroad, means bills keep collecting while nobody is looking. Before leaving, checking every collection in the absence, funding the account to cover them plus the float and arranging for post to be seen avoids coming home to fees and warning letters.

                ## Milestones
                1. Every bill due during the absence listed with its date and amount.
                2. The bills account funded for the whole period plus the float.
                3. Manual bills paid in advance or set up as scheduled payments.
                4. Someone trusted asked to check post, or post redirected.
                5. Banking app access and security codes tested for use abroad.
              priority: low
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "Before departure, every bill due during the absence is funded or prepaid and someone is checking post for the whole period."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "List every bill due while you are away"
                - "Move enough into the bills account to cover them and the float"
                - "Schedule or prepay any manual bills that fall due"
                - "Arrange for someone trusted to check your post"
            - name: Bills check after changing your main bank
              description: |-
                ## Purpose
                Switching services in many countries move direct debits and standing orders for you, but card-linked payments, payees set up as one-off transfers and anything paid from another account do not follow automatically. A check over the first two months after a switch catches the bills that fell through the gap.

                ## Milestones
                1. The old account's mandate list saved before it closes.
                2. Each mandate confirmed as active on the new account.
                3. Card-linked payments updated with the new card details.
                4. Two months of collections checked against the calendar with nothing missing.
              priority: medium
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "Two months after a bank switch, every bill on the calendar has collected from the new account with none missed."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Download the old account's mandate list before the switch completes"
                - "Tick off each mandate as it appears on the new account"
                - "Give every card-linked payee the new card details"
                - "Compare the first two months of collections with the calendar"
            - name: Re-mapping bills when payday changes
              description: |-
                ## Purpose
                Starting a new job, moving to a different pay cycle or an employer changing its pay date can put every carefully placed due date in the wrong week. Reworking the calendar in the month before the change, and bridging the first gap, stops a perfectly normal job move from causing a bounced payment.

                ## Milestones
                1. The new payday and the first pay date confirmed in writing.
                2. The gap check redone with the new payday.
                3. Any bridge needed for the first month worked out and funded.
                4. Due dates moved where the new payday makes them unsafe.
              priority: medium
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "Before the first new payday, the gap check has been redone, the first month is funded and any unsafe due dates have been moved."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Confirm the new payday and first pay date with the employer"
                - "Redo the payday gap check using the new date"
                - "Work out and fund any shortfall before the first new payday"
                - "Ask providers to move due dates that now land before pay"
            - name: Bill responsibilities in your tenancy agreement
              description: |-
                ## Purpose
                Tenancies differ on who pays what: some include water or internet, some include everything, and some leave even the property tax to you. Reading the agreement for bills, and confirming the gaps with the landlord or agent, means you set up exactly the accounts that are yours from day one.

                ## Milestones
                1. Every bill clause in the tenancy agreement listed.
                2. Each household bill marked as yours, the landlord's or included in rent.
                3. Anything unclear confirmed with the landlord or agent in writing.
                4. Your accounts opened in your name with move-in readings submitted.

                ## Notes
                Rent itself, deposits and rent increases sit in their own area. This project covers the other bills attached to the home.
              priority: medium
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: knowledge
                success_criteria: "Each household bill is marked as yours, the landlord's or included, confirmed in writing, and your accounts are open with move-in readings."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Find every clause about bills in your tenancy agreement"
                - "Mark each household bill as yours, the landlord's or included"
                - "Email the landlord or agent to confirm anything unclear"
                - "Submit move-in meter readings to each supplier in your name"
            - name: Homeowner's fixed housing cost dates
              description: |-
                ## Purpose
                Owning a home adds bills that renters never see: the mortgage payment, buildings insurance, property tax in your own name and maintenance plans such as boiler cover. Putting these on the calendar with exact dates, and knowing which ones change when a mortgage deal ends, protects the payments with the biggest consequences.

                ## Milestones
                1. The mortgage payment date and amount on the calendar.
                2. The end of the current fixed or tracker period noted as the next date the payment will change.
                3. The buildings insurance renewal date and payment method recorded.
                4. Every home service plan or maintenance contract listed with its collection date.

                ## Notes
                Remortgaging belongs to the mortgage area. Here you only make sure the date the payment changes is on the calendar.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Mortgage, buildings insurance, property tax and home service plan payments are on the calendar with dates, and the mortgage rate end date is recorded."
                cadence: one-shot
                effort_hours_estimate: "1"
              tasks:
                - "Add the mortgage payment date and amount to the calendar"
                - "Note the date your current mortgage rate ends"
                - "Record the buildings insurance renewal date and how it is paid"
                - "List any boiler or appliance cover plans and their collection dates"
            - name: Leaseholder service charge and ground rent calendar
              description: |-
                ## Purpose
                Flats and some houses held on a lease come with service charges, ground rent and occasional major works bills, often demanded half-yearly in advance and easy to forget between demands. Mapping these dates, and the year-end reconciliation that can bring a balancing charge, keeps the largest irregular housing bills off the list of surprises.

                ## Milestones
                1. The lease checked for service charge and ground rent payment dates and amounts.
                2. Each demand date on the calendar with last year's amount.
                3. The managing agent's annual budget and year-end accounts filed.
                4. Any balancing charge or credit from the last year-end understood and recorded.
                5. Planned major works and their likely timing noted.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Service charge and ground rent demand dates are on the calendar, and the latest budget and year-end accounts are filed with any balancing charge recorded."
                cadence: cyclic
              tasks:
                - "Find the service charge and ground rent dates in your lease"
                - "Add each demand date to the calendar with last year's amount"
                - "File the managing agent's budget and year-end accounts"
                - "Ask the managing agent about planned major works @recurring(yearly)"
            - name: First bills of your own
              description: |-
                ## Purpose
                Moving out of a family home or student halls usually means paying household bills for the first time, often with no idea what is normal. Setting up a small calendar before the first bills arrive, with a realistic estimate for each and a float, avoids the first-year mistakes that are hardest to undo, such as a missed property tax instalment.

                ## Milestones
                1. A list of the bills your new home will have, checked with the landlord or previous occupant.
                2. A typical monthly cost estimated for each.
                3. Every account opened in your name with a payment method chosen.
                4. Your first three months of bills paid on time and compared with your estimates.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "All first-home bills are set up in your name, and the first three months were paid on time with actual amounts compared to estimates."
                cadence: phased
                effort_hours_estimate: "3"
              tasks:
                - "List the bills your new home will have"
                - "Estimate a typical monthly amount for each"
                - "Open each account in your name and choose how to pay"
                - "Compare your first three months of bills with the estimates"
            - name: Combining two bills calendars when moving in together
              description: |-
                ## Purpose
                Couples moving in together often keep paying from two accounts, double up on things like phone insurance, or leave one person carrying every bill without either noticing. Laying both bill lists side by side and building one household calendar settles who pays what before resentment does.

                ## Milestones
                1. Both people's bill lists laid side by side.
                2. Duplicate cover and services identified and one of each kept.
                3. One household calendar showing every shared bill and who pays it.
                4. A monthly ten-minute joint bills check agreed for a fixed day.

                ## Notes
                How you share money as a couple is a bigger decision covered elsewhere. This project only joins the calendars so nothing is paid twice or missed.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "One household bills calendar shows every shared bill with who pays it, duplicates are removed and a monthly joint check is happening."
                cadence: phased
                effort_hours_estimate: "3"
              tasks:
                - "Each write a list of the bills you pay now"
                - "Mark any bills you are both paying for the same thing"
                - "Build one shared calendar of household bills and who pays each"
                - "Run a ten-minute joint check of the coming month's bills @recurring(monthly:2)"
            - name: Keeping an older relative's bills paid
              description: |-
                ## Purpose
                Adult children often find a parent's bills in disarray only after a missed payment or a scam. With the right authority in place, such as a lasting or enduring power of attorney or a bank's third-party mandate, a separate calendar of their bills and a monthly check keeps their home running without taking over their life.

                ## Milestones
                1. The legal or bank authority you hold, or need, confirmed for each account.
                2. Your relative's bills mapped on their own calendar, separate from yours.
                3. Their wishes recorded on how involved they want to stay.
                4. A monthly check carried out with them where possible.

                ## Notes
                Keep their money and yours completely separate and record every payment you make for them. Ask the relevant authority or a solicitor what your role permits.
              priority: medium
              frontmatter:
                mode: service
                output_kind: habit
                success_criteria: "Your relative's bills are on their own calendar, checked monthly under a confirmed authority, with every payment you make recorded."
                cadence: rolling
              tasks:
                - "Ask your relative how involved they want to be in their bills"
                - "Confirm what authority you hold for each of their accounts"
                - "Map their bills on a separate calendar from yours"
                - "Go through their coming month of bills with them @recurring(monthly:15)"
            - name: Bills on weekly or four-weekly pay
              description: |-
                ## Purpose
                Weekly, fortnightly and four-weekly pay never lines up with monthly bills, and four-weekly pay brings thirteen paydays a year rather than twelve. Mapping which payday covers which bill, and planning what the extra payday is for, stops some months feeling flush and others impossibly short.

                ## Milestones
                1. Every payday for the next twelve months listed with its date.
                2. Each monthly bill assigned to the payday that funds it.
                3. Months with an extra payday identified.
                4. A plan written for each extra payday, such as topping up the float or prepaying an annual bill.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Every payday for twelve months is mapped to the bills it funds, and each extra payday has a written plan."
                cadence: phased
                effort_hours_estimate: "2"
              tasks:
                - "List every payday for the next twelve months"
                - "Assign each monthly bill to the payday that will fund it"
                - "Mark the months that contain an extra payday"
                - "Plan the use of next year's extra paydays @recurring(yearly)"
            - name: Household bills after a death
              description: |-
                ## Purpose
                When someone in the household dies, bills in their name may be frozen, cancelled or passed to the estate while the home's bills still need paying. Listing what was in their name, telling providers in a planned order and moving essential accounts to the surviving household keeps heat, water and housing secure during a hard time.

                ## Milestones
                1. Every bill in the person's name listed with its account number.
                2. Essential services, such as energy, water and housing, confirmed as continuing.
                3. Providers notified, using a bereavement notification service where your country has one.
                4. Essential accounts transferred into a surviving person's name.
                5. Refunds or final bills for the person's accounts passed to whoever is handling the estate.

                ## Notes
                Go gently and ask for help. Many providers have a bereavement team who can pause collections while things are sorted.
              priority: low
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "Every bill in the deceased person's name is listed and either transferred to a surviving person or closed, with essential services uninterrupted."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "List every bill and account in the person's name"
                - "Confirm energy, water and housing payments will carry on"
                - "Notify providers, using a bereavement notification service if one exists"
                - "Move essential accounts into a surviving person's name"
            - name: Daily balance projection for the bills account
              description: |-
                ## Purpose
                Once the calendar is stable, a projection of the bills account balance for every day of the next 90 days shows exactly how much headroom exists, when the float is at risk and how much can safely move to savings. People with tight margins or several incomes tend to find it the most useful tool in this area.

                ## Milestones
                1. A spreadsheet with one row per day for the next 90 days.
                2. Every bill and income entry placed on its expected day.
                3. The lowest projected balance and its date shown automatically.
                4. The projection matching the real month-end balance within an agreed tolerance.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A 90-day daily balance projection is updated monthly and its month-end figure has matched the real balance within an agreed tolerance for three months."
                cadence: rolling
              tasks:
                - "Set up a sheet with one row for each of the next 90 days"
                - "Enter each bill and income on its expected day"
                - "Add a cell showing the lowest projected balance and its date"
                - "Roll the projection forward and compare it with the real balance @recurring(monthly:23)"
            - name: Bills continuity file for whoever steps in
              description: |-
                ## Purpose
                If the person who runs the household bills is ill, away or dies, the other adults are often left guessing which account pays what. A short continuity file listing every bill, the account it comes from, where documents are kept and who to call lets someone else keep things running for months.

                ## Milestones
                1. A two-page file summarising the bills calendar, master list and the account each bill uses.
                2. Where documents and login instructions are kept recorded, with no passwords in the file.
                3. The file stored somewhere a trusted person can reach.
                4. That person walked through the file once.
                5. The file refreshed after each yearly calendar rebuild.

                ## Notes
                Never write passwords in the file. Point to a password manager with an emergency access feature, or to your will and estate papers.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A continuity file exists, is reachable by a named trusted person who has been walked through it, and is dated within the last year."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Ask the agent to draft a two-page summary from your master list"
                - "Note where documents and login instructions are kept"
                - "Walk a trusted person through the file"
                - "Refresh the continuity file after the yearly rebuild @recurring(yearly)"
            - name: Second home or empty property bills
              description: |-
                ## Purpose
                Second properties, holiday homes and places held while being sold carry a full set of bills with nobody living there to notice problems: standing charges on empty homes, property tax rules for second homes and insurance conditions about unoccupied periods. A separate calendar and a monthly check stop that home's bills becoming the costly surprise.

                ## Milestones
                1. Every bill at the second property listed on its own calendar.
                2. Property tax rules for second or empty homes in that area checked.
                3. Insurance conditions about unoccupied periods noted with the dates they apply.
                4. A monthly remote check of that property's bills and meter readings in place.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "The second property's bills are on their own calendar and have been checked every month for six months, with insurance occupancy conditions recorded."
                cadence: rolling
              tasks:
                - "List every bill at the second property on a separate calendar"
                - "Check the local property tax rules for second or empty homes"
                - "Note any insurance limit on how long the home can stay empty"
                - "Check that property's bills and meter readings @recurring(monthly:18)"
            - name: Escalating a billing dispute to a complaints scheme
              description: |-
                ## Purpose
                Most billing errors are fixed with one phone call, but some are not: repeated wrong bills, a refund that never arrives, a debt you do not owe passed to collectors. Knowing how to make a formal complaint, when the provider's final response or deadline is reached and which ombudsman or complaints scheme to use turns a months-long argument into a process with an end date.

                ## Milestones
                1. The disputed bill and its history set out in a dated timeline with evidence.
                2. A formal written complaint sent to the provider, quoting the account number.
                3. The provider's final response, or the deadline for one, recorded.
                4. The case submitted to the relevant ombudsman or complaints scheme if unresolved.
                5. The outcome, and any refund or credit, checked on the next bill.

                ## Notes
                In many countries you must give the provider about eight weeks, or receive its final response, before the ombudsman will look at the case. Check the scheme's own rules.
              priority: low
              frontmatter:
                mode: research
                output_kind: deliverable
                success_criteria: "A disputed bill has a dated evidence timeline, a formal complaint on record and, if unresolved, a submitted ombudsman case with the outcome recorded."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Write a dated timeline of the dispute with copies of each bill"
                - "Send a formal written complaint quoting your account number"
                - "Diary the date the provider's final response is due"
                - "Submit the case to the ombudsman or complaints scheme if unresolved"
---

# Household Bills Calendar

This area is for anyone who pays household bills, whether renting, owning or newly on their own, and wants every payment to leave on a known day from an account that can cover it. It starts with the foundations (a master list, the bank's mandate list, card-linked payments, irregular bills and a one-page calendar set against payday), then the routines that keep the map true, the skills that explain how payments actually work, the decisions that make the calendar safer, the events that disturb it, the situations that change it for renters, homeowners, couples and carers, and finally the specialist tools.

What repeats is a five-minute glance each week, a monthly bill run, meter readings and an amount log every month, a quarterly roll of the twelve-month forecast and a yearly rebuild of the whole calendar. The Monthly budget and bills, Operational checklist and Metrics log templates pair with the projects that name them. Installing adds all 50 projects as active, so archive the ones that are not for you yet.
