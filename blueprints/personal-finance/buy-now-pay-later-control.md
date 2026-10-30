---
id: personal-finance.buy-now-pay-later-control
name: Buy Now Pay Later Control
description: "A complete list of every buy now pay later plan, a collection calendar and written limits, then weekly and monthly checks, refund and missed payment know-how, and the decisions that stop small instalments stacking into a squeeze."
category: personal
version: 1.0.0
tags: [personal-finance, buy-now-pay-later-control, everyone, instalment-plans, late-fees, checkout-credit, store-finance]
author: Aurum Technology
starter_structure:
  templates:
    - monthly-budget-bills
    - metrics-log
    - purchase-decision
  pillars:
    - name: Personal Finance
      emoji: "💷"
      description: "The day-to-day money system: income, budget, bills, debt, savings buffers, insurance, tax and big purchases, run so that nothing surprises you and every pound has a job."
      pillarFrontmatter:
        review_cadence: monthly
      areas:
        - name: Buy Now Pay Later Control
          description: "Tracking and limiting buy now pay later and instalment plans so small repayments do not stack into a squeeze."
          projects:
            - name: Every live buy now pay later plan in one list
              description: |-
                ## Purpose
                Plans sit across several provider apps, store accounts and checkout logins, and each app only shows its own share, so almost nobody can say how many they have running. Pulling every live plan into one list, with provider, item, instalments left, amount and next date, is the step everything else in this area builds on. Expect to find one or two you had forgotten, especially pay monthly plans set up at a store till.

                ## Milestones
                1. Every provider app, store finance account and checkout login used in the last two years opened and checked.
                2. Each live plan listed with provider, item, amount per instalment, instalments left and next collection date.
                3. Collections found on bank statements but missing from the apps traced to their provider.
                4. The total still owed across all plans written at the top of the list.

                ## Notes
                Search your email for words such as instalment, payment schedule and order confirmed. Old confirmation emails are the fastest way to find accounts you forgot opening.

                Before you start: this plan is general information to help you organise your own money decisions. It is not financial, investment, tax or legal advice. Check decisions that matter with a qualified, licensed adviser in your country, and remember that investing and trading can lose money.
              priority: high
              deadlineOffsetDays: 7
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "One list holds every live instalment plan across all providers, each with amount, instalments left and next date, plus a total owed."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Search your email for instalment and payment schedule confirmations from the last two years"
                - "Open each provider app and copy every live plan into one list"
                - "Check three months of bank statements for collections not yet on the list"
                - "Add up the total still owed across all plans"
            - name: Instalment collection calendar for the next eight weeks
              description: |-
                ## Purpose
                Fortnightly pay in four plans and monthly plans collect on different days, so four small plans can mean eight collections in a month, some landing the day before payday. A calendar of every collection date for the next eight weeks shows the tight weeks before they arrive and gives you time to move money.

                ## Milestones
                1. Every collection date for the next eight weeks entered with provider and amount.
                2. Weekly totals worked out and the heaviest week marked.
                3. Collections that land in the days before payday flagged.
                4. The calendar kept where you already look at your bills each week.

                ## Notes
                Start from the **Monthly budget and bills** template if you already keep bills there, so instalments sit beside rent and direct debits rather than in a separate place.
              priority: high
              deadlineOffsetDays: 14
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A calendar shows every instalment collection for the next eight weeks with weekly totals, and the weeks before payday are marked."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Copy each plan's remaining collection dates into your calendar with the amount"
                - "Total the collections for each of the next eight weeks"
                - "Mark every collection that falls in the days before payday"
                - "Roll the calendar forward another four weeks @recurring(monthly:3)"
            - name: Payment source map for every plan
              description: |-
                ## Purpose
                Each plan collects from whichever card was used at checkout, and over time that spreads across a debit card, a credit card and a card that has since expired. When a collection fails because a card was replaced or an account ran low, the late fee often arrives before you notice. Mapping which card and account pays each plan makes failed collections predictable and fixable.

                ## Milestones
                1. The card and account each plan collects from recorded beside it on your list.
                2. Any plan collecting from an expired, cancelled or soon to expire card updated.
                3. Plans paid by credit card marked, since that is borrowing to repay borrowing.
                4. Collections moved, where possible, onto the account your pay lands in.
              priority: high
              deadlineOffsetDays: 14
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Every live plan shows which card and account it collects from, and none collect from an expired or cancelled card."
                cadence: one-shot
                effort_hours_estimate: "1"
              tasks:
                - "Open each provider app and note the card each plan collects from"
                - "Check the expiry date of every card listed"
                - "Update any plan collecting from an expired or cancelled card"
                - "Mark the plans that are being paid with a credit card"
            - name: Instalment load against take-home pay
              description: |-
                ## Purpose
                Each instalment looks small on its own, which is exactly why the total is easy to miss. Working out what all your plans collect in a typical month, and setting that beside monthly take-home pay, gives one number that says whether pay later is a convenience or already a squeeze. Debt advice services look at the same kind of figure when they review a budget.

                ## Milestones
                1. Total instalments due in each of the next three months calculated.
                2. Monthly take-home pay written beside each total, using an average if income varies.
                3. Instalments shown as a percentage of take-home pay.
                4. A personal ceiling for that percentage chosen and written on your plan list.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "The share of monthly take-home pay going to instalment plans is calculated for three months and a personal ceiling is written down."
                cadence: one-shot
                effort_hours_estimate: "1"
              tasks:
                - "Add up the instalments due in each of the next three months"
                - "Write your monthly take-home pay beside each total"
                - "Work out instalments as a percentage of take-home pay"
                - "Choose a ceiling percentage you will not go above"
            - name: Late fee and missed payment terms by provider
              description: |-
                ## Purpose
                Providers differ a lot: some charge a flat fee per missed instalment, some cap fees as a share of the order, some freeze your account straight away and some report missed payments to credit reference agencies. Knowing each provider's rules before anything goes wrong tells you which collections to protect first in a tight month.

                ## Milestones
                1. Each provider's late fee, fee cap and retry policy noted from its current terms.
                2. Whether each provider reports to credit reference agencies recorded.
                3. What happens after a second missed payment noted for each provider.
                4. Providers ranked by the cost and consequence of a missed payment.
              priority: medium
              deadlineOffsetDays: 30
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A one-page table shows each provider's late fees, credit reporting and missed payment process, ranked by consequence."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Find the current fees page or terms for each provider you use"
                - "Note the late fee, any cap and how many retries each provider makes"
                - "Check whether each provider reports payments to credit reference agencies"
                - "Rank providers by what a missed payment would cost you"
            - name: Provider app logins and collection reminders
              description: |-
                ## Purpose
                Reminders are the cheapest protection against a late fee, but they only work if you can log in and the alerts reach somewhere you read. Recovering forgotten logins, switching on collection reminders and pointing them at an email address you check means no plan collects in silence.

                ## Milestones
                1. Working logins for every provider you hold a plan with.
                2. Push or email reminders switched on for upcoming collections.
                3. Reminders going to an email address or phone you check daily.
                4. Two-step sign-in turned on wherever the provider offers it.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "You can log in to every provider account and each one sends a collection reminder to an address or phone you check."
                cadence: one-shot
                effort_hours_estimate: "1"
              tasks:
                - "Reset the password for any provider account you cannot log in to"
                - "Switch on collection reminders in each provider app"
                - "Change the contact email to one you read every day"
                - "Turn on two-step sign-in where it is offered"
            - name: Personal pay later rules written down
              description: |-
                ## Purpose
                Pay later works best with a few firm rules decided in a calm moment rather than at the checkout. Writing three to five rules, such as a maximum number of live plans, a minimum order size, never for food or bills, and only when the full price is already in your account, gives you something to check against when the button appears.

                ## Milestones
                1. Three to five rules written in plain words.
                2. A maximum number of live plans and a maximum total owed included.
                3. Spending categories you will never split listed.
                4. The rules saved where you can read them on your phone at a checkout.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A written set of three to five pay later rules, including a cap on live plans and total owed, is saved on your phone."
                cadence: one-shot
                effort_hours_estimate: "1"
              tasks:
                - "Write down the maximum number of plans you will have live at once"
                - "Set a maximum total you will owe across all providers"
                - "List the spending categories you will never pay for in instalments"
                - "Save the rules as a note you can open in two taps at a checkout"
                - "Reread the rules and adjust any you keep breaking @recurring(quarterly)"
            - name: Pause on new plans while current ones clear
              description: |-
                ## Purpose
                Clearing a stack of instalments while adding new ones is like bailing with the tap still running. A set period with no new plans, backed by removing saved pay later options from shops and wallets, lets the existing plans run down on schedule. Most stacks of pay in four plans clear within six to eight weeks if nothing new is added.

                ## Milestones
                1. A start and end date for the pause chosen, usually when the last current plan finishes.
                2. Pay later removed from saved payment methods in shopping accounts and wallets where possible.
                3. Provider apps moved off your home screen, or deleted once no plans remain.
                4. The pause end date reached with no new plans opened.
              priority: high
              deadlineOffsetDays: 10
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "No new instalment plan is opened between the chosen start and end dates, and saved pay later options are removed from shops and wallets."
                cadence: phased
                effort_hours_estimate: "2"
              tasks:
                - "Choose a pause end date that matches your last current instalment"
                - "Remove pay later as a saved payment method in your shopping accounts"
                - "Move provider apps off your phone's home screen"
                - "Tell anyone you regularly shop with that you are pausing new plans"
            - name: Collection buffer in the paying account
              description: |-
                ## Purpose
                A collection that fails by a few pounds costs the same late fee as one that fails by a hundred, and it can trigger a bank charge as well. Keeping a small fixed buffer, roughly one week of instalments, in the account the plans collect from absorbs timing slips such as a payday moved by a public holiday.

                ## Milestones
                1. A buffer amount set at around one week of instalments, rounded up.
                2. The buffer built up in the collecting account.
                3. A rule written for refilling the buffer by the next payday after it is used.
                4. Two months passed with no failed collections.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "The account your plans collect from holds the agreed buffer, and no instalment collection has failed for two consecutive months."
                cadence: rolling
              tasks:
                - "Find the largest single week of collections on your calendar"
                - "Set a buffer amount at or just above that figure"
                - "Move the buffer into the account your plans collect from"
                - "Refill the buffer at the next payday whenever a collection dips into it"
            - name: Weekly instalment check
              description: |-
                ## Purpose
                Five minutes once a week is enough to catch a collection due before payday, a plan you forgot to add to the list, or a refund that has not reduced a balance. Doing it on the same day each week turns it into a reflex rather than a chore.

                ## Milestones
                1. A fixed day and time chosen for the weekly check.
                2. Each week's collections compared against the balance in the paying account.
                3. New and finished plans updated on your list every week.
                4. Eight weekly checks completed in a row.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Eight consecutive weekly checks are completed, each confirming the next seven days of collections are covered."
                cadence: rolling
              tasks:
                - "Choose a day and a ten-minute slot for the weekly check"
                - "Compare the next seven days of collections with your account balance @recurring(weekly:sun)"
                - "Add new plans and strike off finished ones on your list"
                - "Move money across if a collection would not be covered"
            - name: Monthly match of collections against plans
              description: |-
                ## Purpose
                Collections appear on statements under the provider's name, sometimes with a store reference and sometimes without, so a duplicate collection or a payment for a returned item can slip past. Matching each month's provider collections against your plan list catches those errors while they are still easy to raise.

                ## Milestones
                1. Every pay later collection on last month's statements ticked off against a plan.
                2. Any collection that does not match a plan raised with the provider.
                3. Plans marked finished once the final instalment has left your account.
                4. The total collected that month recorded.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every pay later collection on each month's statements is matched to a known plan, with any mismatch raised with the provider within a week."
                cadence: rolling
              tasks:
                - "Download last month's statements for every account your plans collect from"
                - "Tick each provider collection against your plan list @recurring(monthly:5)"
                - "Contact the provider about any collection you cannot match"
                - "Write the month's total collections on your tracker"
            - name: Payday instalment set-aside
              description: |-
                ## Purpose
                Money meant for instalments that sits in the main account tends to get spent before the collection lands. Moving the coming month's instalment total into a separate pot on payday, then letting plans collect from there or topping up on the day, ring-fences it from everyday spending.

                ## Milestones
                1. A separate pot or sub-account opened for instalments.
                2. The coming month's instalment total moved there on payday.
                3. A standing transfer set up if your pay arrives on a fixed date.
                4. Two paydays completed with the full amount set aside first.

                ## Notes
                The recurring task is set for the 25th. Change the day to match your own payday when it first appears.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "On two consecutive paydays the full month's instalment total is moved into a separate pot before any other spending."
                cadence: rolling
              tasks:
                - "Open a separate pot or sub-account labelled for instalments"
                - "Work out next month's instalment total from your calendar"
                - "Move the month's instalment total into the pot on payday @recurring(monthly:25)"
                - "Set up a standing transfer if your pay arrives on a fixed date"
            - name: Returns and refunds tracker for instalment purchases
              description: |-
                ## Purpose
                Returning an item bought on instalments does not stop the collections until the retailer processes the refund and the provider updates the plan, which can take two weeks or more. Some providers pause collections while a return is in progress, but only if you report it in the app. A tracker for every open return stops you paying for something already sent back.

                ## Milestones
                1. Every item being returned listed with retailer, provider, date sent and tracking number.
                2. Each return reported in the provider app, with collections paused where offered.
                3. The reduced plan or refund confirmed in the app for each return.
                4. No collection taken for a returned item after the refund was confirmed.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: artifact
                success_criteria: "Each return of an instalment purchase is logged with proof of postage and closed only when the provider shows the plan reduced or refunded."
                cadence: rolling
              tasks:
                - "List every item you are returning with retailer, provider and postage date"
                - "Report each return in the provider app and ask for collections to pause"
                - "Keep proof of postage until the plan shows the refund"
                - "Check open returns for a provider update @recurring(weekly:wed)"
            - name: Quarterly provider account and limit review
              description: |-
                ## Purpose
                Providers raise spending limits, add pay monthly options and change terms without asking, and an account used once two years ago can quietly hold a large pre-approved limit. Looking through each account every quarter keeps limits and settings where you chose to put them.

                ## Milestones
                1. Each provider's current spending limit noted against the limit you want.
                2. Change of terms emails from the past quarter read.
                3. Unwanted new features, such as a provider card or pay monthly, switched off.
                4. Accounts you no longer need flagged for closing.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Each quarter, every provider account's limit, settings and terms are checked and any unwanted change is reversed or recorded."
                cadence: rolling
              tasks:
                - "Note each provider's current spending limit against your target @recurring(quarterly)"
                - "Read any change of terms emails from the past three months"
                - "Switch off features you did not ask for"
                - "Flag accounts with no live plans for closing"
            - name: How plans show on your credit file
              description: |-
                ## Purpose
                Reporting of pay later plans to credit reference agencies has changed in several countries and still differs by provider, so what appears on your file is not always what you expect. Getting your statutory credit reports and finding each provider's entries shows whether plans are listed, as what, and whether a payment was marked late in error.

                ## Milestones
                1. Statutory credit reports obtained from the main agencies in your country.
                2. Each pay later provider's entry found, or confirmed absent.
                3. Any late marker checked against your own payment records.
                4. Errors raised in writing with the agency and the provider.
              priority: medium
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "Your credit reports have been checked for every pay later provider entry, and any incorrect late marker has been disputed in writing."
                cadence: cyclic
              tasks:
                - "Request your free statutory credit report from each main agency"
                - "Find each pay later provider's entry on the reports"
                - "Compare any late markers with your own payment records"
                - "Recheck your reports for pay later entries and errors @recurring(yearly)"
            - name: Outstanding instalments tracker
              description: |-
                ## Purpose
                One figure, the total still owed across all providers, recorded on the same day each month, shows plainly whether the stack is shrinking. Seeing it fall is motivating, and seeing it flat for three months is the early warning that pay later has become a habit rather than a tool.

                ## Milestones
                1. A tracker set up with date, total owed, number of live plans and collections that month.
                2. Starting figures entered from your plan list.
                3. A monthly entry made on the same date each month.
                4. Six months of entries with a short note on the trend.

                ## Notes
                Start from the **Metrics log** template.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: artifact
                success_criteria: "A tracker holds at least six monthly entries of total owed and number of live plans across all providers."
                cadence: rolling
              tasks:
                - "Create a tracker from the metrics log template"
                - "Enter today's total owed and number of live plans"
                - "Record the total owed and plan count @recurring(monthly:12)"
                - "Note the reason in any month the total went up"
            - name: Month-end check against your pay later rules
              description: |-
                ## Purpose
                Rules only work if you look back at whether you kept them. A short monthly score, each rule marked kept or broken with what was going on at the time, shows which rule is unrealistic and which purchases keep slipping through, without turning it into self-criticism.

                ## Milestones
                1. Each rule marked kept or broken for the month.
                2. The purchase behind any broken rule noted with the situation around it.
                3. One rule adjusted or one safeguard added if the same rule breaks twice.
                4. Three months of scores kept together in one note.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Three consecutive monthly scores show each pay later rule as kept or broken, with a note for every break."
                cadence: rolling
              tasks:
                - "Mark each of your rules as kept or broken for the month @recurring(monthly:28)"
                - "Note the purchase and situation behind any broken rule"
                - "Change a rule that has broken two months running"
                - "Keep the monthly scores together in one note"
            - name: Card replacement updates across providers
              description: |-
                ## Purpose
                When a bank replaces a card after expiry, loss or fraud, pay later providers do not always receive the new details automatically, and the next collection fails. A short checklist to run whenever a card changes, plus a yearly look at expiry dates, prevents the most common cause of an accidental missed payment.

                ## Milestones
                1. A checklist of every provider to update when each card changes.
                2. Expiry dates of all cards held by providers noted.
                3. Every provider updated within two days of any card replacement.
                4. A full year with no collection failing because of an out of date card.
              priority: low
              frontmatter:
                mode: operating
                output_kind: artifact
                success_criteria: "Every card change in a year is followed within two days by updated details at each provider, with no collection failing on an old card."
                cadence: rolling
              tasks:
                - "List every provider that holds each of your cards"
                - "Note the expiry month of each card on the list"
                - "Update every provider within two days of receiving a new card"
                - "Check which cards expire in the coming year @recurring(yearly)"
            - name: Yearly pay later review
              description: |-
                ## Purpose
                Once a year, look at the whole picture: how much went through pay later, what it was for, what it cost in fees, and whether your rules still fit your income. A twelve-month view often shows a pattern, such as clothing every month or heavy use in December, that no single month reveals.

                ## Milestones
                1. Total spent through pay later in the year added up by provider.
                2. Purchases grouped into four or five categories.
                3. Late fees and interest paid in the year totalled.
                4. Rules and limits for the coming year set and saved.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A yearly summary shows total pay later spending by category, fees paid, and the rules and limits chosen for the next year."
                cadence: cyclic
              tasks:
                - "Download the past year's order list from each provider app"
                - "Group the purchases into four or five spending categories"
                - "Add up the late fees and interest paid in the year"
                - "Set next year's pay later rules and limits @recurring(yearly)"
            - name: How pay in three, pay in four and pay monthly differ
              description: |-
                ## Purpose
                Short interest-free splits, longer pay monthly plans with interest, and pay in thirty days are all sold under the same pay later banner but behave very differently. Knowing which type you are agreeing to tells you whether interest applies, whether a credit check is done and how a missed payment is treated.

                ## Milestones
                1. The main plan types you are offered at checkout described in your own words.
                2. For each type, interest, typical length, credit check and late fee approach noted.
                3. Every current plan on your list labelled by type.
                4. Any interest-bearing pay monthly plan highlighted for priority repayment.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A one-page note describes each pay later plan type you are offered, and every current plan on your list is labelled with its type."
                cadence: phased
                effort_hours_estimate: "2"
              tasks:
                - "Read the plan type explanations on your main provider's help pages"
                - "Write one line on interest, length and checks for each type"
                - "Label each plan on your list with its type"
                - "Highlight any plan that charges interest"
            - name: Reading a pay later agreement before confirming
              description: |-
                ## Purpose
                The agreement behind a pay later button is short, but it is still a credit agreement with a schedule, fees, a complaints route and terms for missed payments. Practising on two or three real agreements, then turning what you learn into a short question list, makes the thirty seconds before confirming count.

                ## Milestones
                1. Two or three agreements from providers you use read in full.
                2. A checklist of five questions to answer before confirming.
                3. The checklist tried on a real checkout without completing the order.
                4. The checklist saved next to your pay later rules.
              priority: low
              frontmatter:
                mode: learning
                output_kind: artifact
                success_criteria: "A five-question pre-checkout checklist exists, written after reading at least two full pay later agreements, and is saved beside your rules."
                cadence: phased
                effort_hours_estimate: "2"
              tasks:
                - "Download the full agreement from a provider you already use"
                - "Note the schedule, fees, complaints route and missed payment terms"
                - "Write five questions to ask yourself before confirming"
                - "Test the questions at a checkout without placing the order"
            - name: Refunds, returns and disputes on instalment plans
              description: |-
                ## Purpose
                If a retailer does not deliver, sends something faulty or refuses a refund, the route to your money runs through the provider's dispute process, which has its own time limits. Learning how your providers handle disputes, and how that compares with card protections, means you act within the window rather than after it closes.

                ## Milestones
                1. Each provider's dispute process and time limit noted.
                2. The difference between a provider dispute and a card chargeback or credit card claim understood.
                3. What happens to collections while a dispute is open recorded for each provider.
                4. A short message template written for raising a dispute.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Notes record each provider's dispute steps and time limits, and whether collections pause while a dispute is open."
                cadence: phased
                effort_hours_estimate: "2"
              tasks:
                - "Find the problem with an order page in each provider app"
                - "Note the time limit for raising a dispute with each provider"
                - "Check whether collections pause while a dispute is open"
                - "Write a short message you can adapt to raise a dispute"
            - name: What happens after a missed instalment
              description: |-
                ## Purpose
                Knowing the sequence after a missed payment, from retry attempts and late fees to account freezes, collections agencies and credit file markers, takes away much of the fear and shows where you can still act. Each stage has a point where contacting the provider early changes the outcome.

                ## Milestones
                1. The sequence after a missed instalment written out for your main provider.
                2. The point where the account is frozen or passed to a collections agency noted.
                3. Where a credit file marker may be added recorded.
                4. The best moment to contact the provider identified for each stage.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A written timeline for your main provider shows each stage after a missed instalment and when contacting them could change the outcome."
                cadence: phased
                effort_hours_estimate: "1"
              tasks:
                - "Read your main provider's help page on missed payments"
                - "Write the sequence of steps from first retry to collections agency"
                - "Mark the stage where a credit file marker could be added"
                - "Note the provider's contact route for payment problems"
            - name: How lenders read pay later use in affordability checks
              description: |-
                ## Purpose
                Mortgage, rental and car finance lenders increasingly see pay later on bank statements and sometimes on credit files, and some ask about it directly. Understanding what an underwriter notices, such as regular collections, many providers and late fees, helps you decide how much pay later to carry in the months before an application.

                ## Milestones
                1. Notes on what lenders typically look for on three months of statements.
                2. Your own last three months of statements read as a lender would read them.
                3. Collections, late fees and the number of providers counted.
                4. A target written for your statements in the months before your next application.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Your last three months of statements have been reviewed as a lender would, and a target for pay later use before your next application is recorded."
                cadence: phased
                effort_hours_estimate: "2"
              tasks:
                - "Read a lender or broker guide on what bank statements are checked for"
                - "Count pay later collections and providers on your last three statements"
                - "Note any late fees a lender would see"
                - "Write how clean you want statements to be before applying"
            - name: Checkout designs that steer you to pay later
              description: |-
                ## Purpose
                Showing the price as four small payments, pre-selecting pay later, and labels such as interest free or no fees are all designed to make splitting feel like the normal choice. Learning to spot these patterns lets you see the full price again before deciding, which is often all it takes to say no.

                ## Milestones
                1. Five common checkout nudges listed with an example of each.
                2. Three of your recent pay later purchases traced back to the nudge that prompted them.
                3. A counter-move written for the nudge you fall for most.
                4. The full price checked on the next three checkouts that show split prices.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A list of five checkout nudges is written, and three recent pay later purchases are each linked to the nudge behind them."
                cadence: phased
                effort_hours_estimate: "2"
              tasks:
                - "Screenshot three checkouts that show prices split into instalments"
                - "List the nudges you notice on each screen"
                - "Match three of your recent plans to the nudge that prompted them"
                - "Write one counter-move for the nudge you fall for most"
            - name: Pay later rules and protections where you live
              description: |-
                ## Purpose
                Regulation of buy now pay later is changing in many countries, with rules on affordability checks, clear agreements and complaint rights arriving at different times. Finding out what currently applies where you live, and to which of your plans, tells you what you can ask a provider for and where to complain if it refuses.

                ## Milestones
                1. The regulator's or government's current guidance on pay later found.
                2. Which of your plans count as regulated credit and which do not recorded.
                3. Your rights on affordability, information and complaints noted.
                4. The ombudsman or complaints body that covers providers identified.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Notes record which of your plans are regulated, your rights on information and complaints, and the body that handles complaints about providers."
                cadence: phased
                effort_hours_estimate: "2"
              tasks:
                - "Search your financial regulator's website for buy now pay later guidance"
                - "Check each provider's terms for whether its plans are regulated credit"
                - "Write down your rights on information, affordability and complaints"
                - "Note the complaints body that covers pay later providers"
            - name: Interest-free store finance and deferred interest
              description: |-
                ## Purpose
                Store finance sold as interest free for twelve months is sometimes a deferred interest deal, where interest for the whole period is charged if any balance remains on the last day. Understanding which kind you hold, and its exact end date, is the difference between a free loan and a large backdated charge.

                ## Milestones
                1. Every store finance or long pay monthly agreement checked for its interest terms.
                2. Deferred interest deals identified and their end dates recorded.
                3. The monthly amount needed to clear each deal before its end date calculated.
                4. Those amounts compared with what you currently pay.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Every store finance agreement is labelled as truly interest free or deferred interest, with its end date and the monthly payment needed to clear it."
                cadence: phased
                effort_hours_estimate: "2"
              tasks:
                - "Find the credit agreement for each store finance plan"
                - "Look for wording on interest charged if the balance is not cleared"
                - "Record the promotional end date for each deferred interest deal"
                - "Work out the monthly amount that clears each deal in time"
            - name: Clearing the smallest plans early
              description: |-
                ## Purpose
                Fewer live plans means fewer collection dates, fewer chances of a failed payment and fewer apps to watch. Paying off the two or three smallest plans in full, where providers allow early settlement without a fee, cuts the collection count fastest even though the total owed falls only a little.

                ## Milestones
                1. Plans sorted by remaining balance.
                2. Early settlement rules checked for the smallest plans.
                3. Two or three small plans settled in full.
                4. Fewer collection dates in the coming month than before.
              priority: medium
              deadlineOffsetDays: 60
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "At least two small plans are settled early and the number of collection dates next month is lower than before."
                cadence: one-shot
                effort_hours_estimate: "1"
              tasks:
                - "Sort your plans by the balance left on each"
                - "Check whether each small plan can be settled early without a fee"
                - "Pay off the smallest plan in full from the provider app"
                - "Remove the cleared collections from your calendar"
            - name: Lining up collection dates with payday
              description: |-
                ## Purpose
                Some providers let you move a collection date, delay one payment or choose your monthly collection day. Shifting as many collections as you can into the week after payday removes the tight days at the end of the month without changing what you owe.

                ## Milestones
                1. Each provider's options for changing or delaying a date checked.
                2. Collections that fall in the week before payday listed.
                3. Movable collections shifted to just after payday.
                4. A refreshed calendar showing the new pattern.

                ## Notes
                Check whether moving a date costs anything. Some providers charge to reschedule, and a free one-off delay is not something to rely on every month.
              priority: low
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "Every collection that providers allow to move has been shifted to the week after payday, and the calendar shows the new dates."
                cadence: one-shot
                effort_hours_estimate: "1"
              tasks:
                - "Check each provider app for options to change a collection date"
                - "List the collections that land in the week before payday"
                - "Move each movable collection to just after payday"
                - "Refresh your calendar with the new dates"
            - name: Debit card or credit card as the paying card
              description: |-
                ## Purpose
                Paying instalments with a credit card adds a second layer of borrowing and can mean interest on a plan sold as interest free, while a debit card lets collections fail when the account runs low. Deciding deliberately which card each plan uses, based on how you actually repay the credit card, avoids drifting into the worst of both.

                ## Milestones
                1. Plans paid by credit card counted and their total noted.
                2. Whether that credit card is cleared in full each month checked.
                3. A decision recorded on which card type plans will collect from.
                4. Plans moved to the chosen card where providers allow it.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A recorded decision states which card every plan should collect from, and plans have been moved to match where providers allow."
                cadence: one-shot
                effort_hours_estimate: "1"
              tasks:
                - "Count the plans collecting from a credit card and their total"
                - "Check whether you clear that credit card in full each month"
                - "Decide which card type your plans will collect from"
                - "Change the paying card in each provider app to match"
            - name: Closing provider accounts you no longer use
              description: |-
                ## Purpose
                Every open account with a spending limit is a ready-made way round your rules on a bad day. Once its plans are finished, closing an account you do not want, and getting written confirmation, removes that option along with the marketing emails that come with it.

                ## Milestones
                1. Accounts with no live plans and no reason to keep listed.
                2. Each final balance confirmed as zero.
                3. Closure requested through each app or support channel.
                4. Written confirmation of every closure saved.
              priority: low
              deadlineOffsetDays: 45
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "Each unwanted provider account with a zero balance is closed, with a written closure confirmation saved."
                cadence: one-shot
                effort_hours_estimate: "1"
              tasks:
                - "List provider accounts with no live plans"
                - "Confirm each one shows a zero balance"
                - "Request closure through the app or support chat"
                - "Save the closure confirmation emails in one folder"
            - name: Lowering pre-approved spending limits
              description: |-
                ## Purpose
                Pre-approved limits often rise after a few on-time payments, so good behaviour is rewarded with more room to overspend. Asking providers for a lower limit, or switching on any spending control in the app, keeps the room on each account close to what your rules allow.

                ## Milestones
                1. The current limit on each provider account recorded.
                2. A target limit chosen for each account from your rules.
                3. Lower limits or spending controls set where the app allows.
                4. Providers that cannot lower limits noted for closing.
              priority: medium
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "Every provider account's limit is at or below your chosen figure, or the account is listed for closing because it cannot be lowered."
                cadence: one-shot
                effort_hours_estimate: "1"
              tasks:
                - "Write down the current spending limit on each account"
                - "Choose a target limit for each from your pay later rules"
                - "Use the app's spending controls or ask support to lower the limit"
                - "Note any provider that refuses so you can close the account"
            - name: Pay later or save first for the next planned purchase
              description: |-
                ## Purpose
                For a purchase you can see coming, such as a laptop or a sofa, splitting the cost and saving first can cost the same, but they feel very different if something goes wrong halfway through. Comparing the two for one specific item, with total cost, risk and timing side by side, gives a reasoned choice rather than a default.

                ## Milestones
                1. The next planned purchase named with its full price.
                2. Total cost through each pay later option, including any interest or fees, worked out.
                3. A save-first timeline at the same monthly amount worked out.
                4. A decision recorded with the reason.

                ## Notes
                Start from the **Purchase decision** template.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "For one named purchase, the pay later and save-first routes are compared on total cost and timing, and the choice is recorded."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Name your next planned purchase and its full price"
                - "Work out the total cost through each pay later option offered"
                - "Work out how many months saving the same amount would take"
                - "Record your choice and the reason for it"
            - name: Clearing deferred interest store finance before the deadline
              description: |-
                ## Purpose
                A deferred interest deal left with even a small balance on the final day can add months of backdated interest in one go. Setting a payment that clears it a month before the end date, with a check halfway through, removes that risk entirely.

                ## Milestones
                1. The exact end date and balance on each deferred interest deal confirmed with the lender.
                2. A monthly payment that clears the balance one month early set up.
                3. Progress checked halfway through the promotional period.
                4. A zero balance confirmed in writing before the end date.
              priority: medium
              deadlineOffsetDays: 90
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "Each deferred interest deal shows a zero balance at least one month before its promotional end date, confirmed in writing."
                cadence: phased
                effort_hours_estimate: "2"
              tasks:
                - "Confirm the end date and current balance with the lender"
                - "Divide the balance by the months left minus one"
                - "Set up a monthly payment for that amount"
                - "Ask for written confirmation once the balance reaches zero"
            - name: Moving food and bills off pay later
              description: |-
                ## Purpose
                Using instalments for groceries, fuel or utility bills usually means the monthly budget no longer covers essentials, and the plans then eat into next month's essentials too. Moving these costs back to paying in full, with help from free debt advice or hardship support where needed, breaks a loop that otherwise grows each month.

                ## Milestones
                1. Every plan for food, fuel, toiletries or bills in the last three months listed.
                2. The monthly gap that made pay later necessary worked out.
                3. A free debt advice service or hardship scheme contacted if the gap cannot be closed.
                4. One full month of essentials paid without instalments.

                ## Notes
                Pay later for essentials is a warning sign worth taking seriously. Free, confidential debt advice services exist in most countries and will look at the whole budget with you.
              priority: medium
              frontmatter:
                mode: building
                output_kind: habit
                success_criteria: "A full month of food, fuel and household bills is paid without any instalment plan."
                cadence: phased
                effort_hours_estimate: "3"
              tasks:
                - "List every plan used for food, fuel, toiletries or bills in three months"
                - "Work out how far short the budget falls for essentials each month"
                - "Contact a free debt advice service if the gap cannot be closed"
                - "Pay for next month's essentials in full from your current account"
            - name: Sale season pay later guard
              description: |-
                ## Purpose
                Black Friday, the January sales and end of season events are when checkouts push instalments hardest and when stacks of new plans begin. Setting a spending total and a plan limit before the sales start, with a list of what you actually need, keeps one weekend from turning into three months of collections.

                ## Milestones
                1. A sale-season shopping list with target prices written before the sales begin.
                2. A cap on new plans for the season set, which may be zero.
                3. Shopping accounts checked for saved pay later options.
                4. Every purchase in the season logged against the list.
              priority: low
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A sale-season list and plan cap are written before the sales, and every purchase made is logged against them."
                cadence: cyclic
              tasks:
                - "Write the items you need and a target price for each"
                - "Decide how many new plans, if any, you will allow this season"
                - "Remove saved pay later options from shops you will browse"
                - "Log every sale purchase and how it was paid"
                - "Set the sale-season list and plan cap three weeks before the sales @recurring(yearly)"
            - name: Back-to-school costs without stacking instalments
              description: |-
                ## Purpose
                Uniform, shoes, bags and devices land in the same few weeks every year, and splitting each one separately can leave a parent with five plans collecting well into the autumn. Planning the list and the payment route a couple of months ahead, with one plan at most, stops the start of term carrying into the winter holidays.

                ## Milestones
                1. A back-to-school list with estimated costs for each child.
                2. The amount you can pay in full worked out.
                3. A decision on whether to spread the single largest item, or nothing.
                4. Everything bought with no more than one new plan opened.
              priority: low
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "Back-to-school items are bought with at most one new instalment plan, against a costed list made beforehand."
                cadence: cyclic
              tasks:
                - "List back-to-school items with an estimated cost for each child"
                - "Work out how much you can pay in full from savings and income"
                - "Choose at most one large item to spread, or none"
                - "Start the back-to-school list two months before term @recurring(yearly)"
            - name: Holiday bookings paid in instalments
              description: |-
                ## Purpose
                Travel firms increasingly offer pay later on flights and package holidays, sometimes with plans still collecting long after you are home. Before splitting a booking, check how cancellations, changes and refunds work under the plan, and whether the final instalment lands after you return.

                ## Milestones
                1. The holiday cost and the instalment schedule offered written down.
                2. Cancellation and refund rules for the plan checked against the booking terms.
                3. The date of the final instalment compared with your return date.
                4. A decision recorded to split, pay in full or save first.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A decision on how to pay for the holiday is recorded after checking the plan's refund rules and the date of the final instalment."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Write down the full holiday cost and the schedule offered"
                - "Read how cancellations and refunds work under the plan"
                - "Check whether any instalment falls after your return date"
                - "Record whether you will split, pay in full or save first"
            - name: Final instalment day and closing the stack
              description: |-
                ## Purpose
                The day your last plan clears is worth marking, both to confirm nothing is still owed and to decide where the money that used to go out in instalments goes next. Redirecting the same amount into savings from the following payday keeps the gain instead of letting it dissolve into everyday spending.

                ## Milestones
                1. The last live plan paid and shown as complete in the app.
                2. Every provider account showing a zero balance.
                3. The freed monthly amount worked out.
                4. A standing transfer of that amount into savings set up.
              priority: medium
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "All provider accounts show a zero balance and the former instalment amount moves into savings by standing transfer."
                cadence: one-shot
                effort_hours_estimate: "1"
              tasks:
                - "Confirm the final plan shows as complete in the provider app"
                - "Screenshot a zero balance from every provider account"
                - "Work out the monthly amount you no longer pay in instalments"
                - "Set up a standing transfer of that amount into savings"
            - name: Pay later clean-up before a mortgage or tenancy application
              description: |-
                ## Purpose
                Lenders and letting agents read three to six months of bank statements, and a run of pay later collections or a late fee can prompt questions or a smaller offer. Starting three to six months before an application, finishing plans and keeping new ones off your statements gives you a cleaner picture to show.

                ## Milestones
                1. The likely application date and the statement months a lender will read identified.
                2. Current plans scheduled to finish before that window opens, where possible.
                3. No new plans opened during the window.
                4. A short note ready to explain any plan still showing.
              priority: high
              deadlineOffsetDays: 60
              frontmatter:
                mode: event
                output_kind: deliverable
                success_criteria: "Statements for the months a lender will read show no new plans and no late fees, with a written note ready for any plan still running."
                cadence: phased
                effort_hours_estimate: "3"
              tasks:
                - "Write down your likely application date"
                - "Count back the months of statements a lender will ask for"
                - "Plan to finish current instalments before that window opens"
                - "Draft a one-paragraph note explaining any plan still running"
            - name: First pay later account as a student or young adult
              description: |-
                ## Purpose
                Pay later is often the first credit a student or young adult uses, offered at checkout with no conversation about what a missed payment means. Setting up with one provider, a low limit and collections timed to term-time income, before the first purchase, avoids instalments landing after the loan payment has run out.

                ## Milestones
                1. One provider chosen and offers from the others ignored.
                2. A low personal limit set to match term-time income.
                3. Collections timed to arrive after loan or wage payments.
                4. A friend or family member told your limit, for accountability.
              priority: medium
              frontmatter:
                mode: building
                output_kind: habit
                success_criteria: "A student or young adult has one provider account with a low limit, and every collection falls after a loan or wage payment date."
                cadence: phased
                effort_hours_estimate: "2"
              tasks:
                - "Write down your term-time income dates and amounts"
                - "Pick one provider to use and ignore offers from the rest"
                - "Set a spending limit that fits your weekly budget"
                - "Check every collection lands after your loan or wages arrive"
            - name: Talking to teenagers about pay later
              description: |-
                ## Purpose
                Teenagers see pay later on every clothing and gaming site, and many can sign up the day they turn eighteen. A parent who walks through a real checkout with them, finding the full price, the schedule and the late fee together, gives them a reference point before the first offer arrives.

                ## Milestones
                1. A real checkout with a split price looked at together.
                2. The total price, schedule and late fee found on screen by your teenager.
                3. A family rule agreed for their first year of being able to sign up.
                4. A follow-up chat held after their first real offer.
              priority: low
              frontmatter:
                mode: service
                output_kind: knowledge
                success_criteria: "A teenager has walked through a real pay later checkout with a parent, found the late fee themselves and agreed a first-year rule."
                cadence: phased
                effort_hours_estimate: "2"
              tasks:
                - "Choose a site your teenager uses that shows split prices"
                - "Look at the checkout together without buying anything"
                - "Ask them to find the late fee and the full schedule"
                - "Agree one rule for their first year of being able to sign up"
            - name: Couples making both partners' plans visible
              description: |-
                ## Purpose
                In a couple, one partner's plans can quietly take money the other is counting on for shared bills, and pay later is easy to keep out of sight. Sharing both lists once, then a short regular look together, keeps the shared budget honest without either person policing the other's spending.

                ## Milestones
                1. Each partner's live plans listed and shared.
                2. Shared costs being paid through either partner's plans identified.
                3. Agreement on when a new plan affecting shared money is talked about first.
                4. A regular check of both lists in the calendar.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Both partners' plan lists have been shared and a check of both happens together each month."
                cadence: rolling
              tasks:
                - "Each make your own list of live plans"
                - "Share the lists in a calm moment, not at bill time"
                - "Agree when a new plan needs a quick conversation first"
                - "Look at both plan lists together @recurring(monthly:15)"
            - name: Helping an older relative with instalment plans
              description: |-
                ## Purpose
                Older people are now offered pay later on mobility aids, furniture and phones, sometimes over the phone or in a showroom, and may not realise they have taken out credit. A family member or carer who helps them list plans, check terms and set reminders can prevent missed payments and spot a plan that should never have been sold.

                ## Milestones
                1. Your relative's agreement on what you will help with.
                2. Their live plans listed with amounts and dates.
                3. Collection reminders set up somewhere they will see them.
                4. Any plan that looks mis-sold noted for a complaint.

                ## Notes
                Help with their permission and keep them in charge of decisions. Do not log in to their accounts as them; use any authorised third party or carer access the provider offers.
              priority: medium
              frontmatter:
                mode: service
                output_kind: deliverable
                success_criteria: "An older relative's live plans are listed with them, reminders are set where they can see them, and any concerns are recorded."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Ask your relative what help they want with their plans"
                - "List their live plans together from letters, emails and statements"
                - "Set up collection reminders on a calendar they use"
                - "Go through their plans together @recurring(quarterly)"
            - name: Fixed instalments on irregular freelance income
              description: |-
                ## Purpose
                Instalments collect the same amount on fixed dates, while freelance and commission income arrives in lumps, often late. A freelancer who uses pay later needs every plan covered by money already in the bank, held in a set-aside, not by an invoice expected next week.

                ## Milestones
                1. A rule written that plans are only opened when the full price is already set aside.
                2. A dedicated set-aside holding the remaining total of all plans.
                3. A monthly check that the set-aside covers every remaining instalment.
                4. A slow month passed with no failed collections.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "At each monthly check, the freelancer's set-aside holds at least the full remaining total of all plans."
                cadence: rolling
              tasks:
                - "Write a rule that you only open a plan when the full price is set aside"
                - "Move the remaining total of all plans into a separate pot"
                - "Check the pot covers every remaining instalment @recurring(monthly:8)"
                - "Top up the pot from the next client payment received"
            - name: Catch-up plan after missed instalments
              description: |-
                ## Purpose
                Once one or more instalments have been missed, fees and account freezes build quickly, and some providers pass debts to collections agencies within weeks. Contacting each provider before that point, with a realistic figure you can pay, usually gets a better result than paying whichever app sends the loudest reminder.

                ## Milestones
                1. Every missed instalment listed with provider, amount, fees and days overdue.
                2. A realistic weekly or monthly amount for catching up worked out.
                3. Each provider contacted with that offer.
                4. Written confirmation of every arrangement saved.
                5. Free debt advice contacted if the total cannot be cleared within a few months.

                ## Notes
                If other debts are behind as well, free debt advice services can help you put them in order. Essentials such as housing and energy usually come first.
              priority: high
              deadlineOffsetDays: 14
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "Every provider with missed instalments has been contacted within two weeks and holds a written arrangement or a confirmed repayment."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "List every missed instalment with provider, fees and days overdue"
                - "Work out an amount you can afford each week towards catching up"
                - "Call or message each provider with your offer"
                - "Confirm each catch-up payment has gone through @recurring(weekly:fri)"
            - name: Asking providers for help before a payment is missed
              description: |-
                ## Purpose
                If income has dropped through job loss, illness or a cut in hours, most providers have a hardship or payment support route, and it is easier to use before a payment is missed than after. Asking early, with a short explanation and a figure, can pause fees, spread the remaining balance or delay collections.

                ## Milestones
                1. Each provider's hardship or payment support page found.
                2. A short explanation of the change in income written once.
                3. Each provider contacted before its next collection.
                4. The outcome from each provider recorded in writing.
              priority: high
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "Every provider has been asked for payment support before its next collection, with each answer recorded in writing."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Find the payment support or hardship page in each provider app"
                - "Write a short explanation of what has changed and what you can pay"
                - "Contact each provider before its next collection date"
                - "Save each provider's reply in one folder"
            - name: Complaint and ombudsman escalation against a provider
              description: |-
                ## Purpose
                Where a provider charged fees wrongly, ignored a hardship request, lent without proper checks or mishandled a dispute, a formal complaint followed by escalation to the ombudsman or complaints body is the route to redress. Building the file properly, with dates, screenshots and correspondence, is what separates a complaint that is upheld from one that stalls.

                ## Milestones
                1. A timeline of events with dates and evidence assembled.
                2. A formal complaint sent to the provider stating what went wrong and the outcome you want.
                3. The provider's final response, or the deadline for it, recorded.
                4. The complaint referred to the ombudsman or complaints body if unresolved.

                ## Notes
                The complaints body usually expects you to complain to the provider first and wait for a final response or the deadline. Keep copies of everything you send.
              priority: low
              deadlineOffsetDays: 90
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "A formal complaint with a dated evidence file has been sent, and an ombudsman referral is made if the provider's final response does not resolve it."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Write a dated timeline of what happened with the provider"
                - "Gather screenshots, emails and statements that support each date"
                - "Ask the agent to draft the complaint letter from your timeline, then check every date"
                - "Refer the complaint to the ombudsman if the deadline passes unresolved"
            - name: Pay later accounts opened in your name without consent
              description: |-
                ## Purpose
                Fraudsters use stolen details to open pay later accounts because sign-up takes seconds, and the first sign is often a reminder email or collections letter for an order you never made. Checking for unknown accounts, and knowing the steps to report them, means a fraudulent plan is closed before it reaches your credit file.

                ## Milestones
                1. Credit reports and email checked for pay later accounts you did not open.
                2. Any unknown account reported to the provider's fraud team.
                3. A report made to your country's fraud reporting body.
                4. Written confirmation received that the debt is not yours.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Any pay later account opened without consent has been reported and the provider has confirmed in writing that the debt is not yours."
                cadence: rolling
              tasks:
                - "Search your email for reminders about orders you did not place"
                - "Check your credit reports for pay later providers you do not use"
                - "Report any unknown account to the provider's fraud team"
                - "Scan credit alerts for new pay later accounts @recurring(quarterly)"
            - name: Two-year pay later spending analysis
              description: |-
                ## Purpose
                With two years of order history, you can see what pay later actually bought you: which purchases you still value, which were returned, how much went on fees, and how often a plan overlapped a tight month. That evidence settles whether to keep pay later as a planned tool, limit it to one provider, or stop altogether.

                ## Milestones
                1. Two years of order history exported from every provider.
                2. Each purchase marked as still valued, returned or regretted.
                3. Fees, interest and months with overlapping tight weeks counted.
                4. A decision recorded: planned use, one provider only, or stop.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "Two years of pay later purchases are each marked valued, returned or regretted, with fees totalled and a keep, limit or stop decision recorded."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Pull two years of orders from every provider into one spreadsheet"
                - "Mark each purchase as still valued, returned or regretted"
                - "Count the months where collections overlapped a tight week"
                - "Record whether you will keep, limit or stop using pay later"
---

# Buy Now Pay Later Control

This area is for anyone with a few buy now pay later plans running who wants to know exactly what they owe, when each collection leaves, and whether it all still fits their pay. It starts with foundations (a full plan list, a collection calendar, the paying cards, personal rules and a pause on new plans), then the weekly and monthly routines, the knowledge of plan types, refunds and missed payments, decisions about limits and paying cards, the sale seasons and applications that need a plan, situations for students, parents, couples, carers and freelancers, and finally complaints, fraud and a long look back.

What repeats is a weekly check of the next seven days of collections and of open returns, a payday set-aside, a monthly statement match, tracker entry and rules score, quarterly account and limit reviews, and a yearly review before sale season. The Monthly budget and bills, Metrics log and Purchase decision templates pair with the projects that name them. Installing adds all 50 projects as active, so archive the ones that are not for you yet.
