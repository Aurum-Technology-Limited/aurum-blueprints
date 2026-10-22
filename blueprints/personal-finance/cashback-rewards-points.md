---
id: personal-finance.cashback-rewards-points
name: Cashback & Rewards Points
description: "An inventory of every rewards scheme, cards cleared in full, routines that collect missed cashback and points, and the checks that stop rewards nudging you into extra spending."
category: personal
version: 1.0.0
tags: [personal-finance, cashback-rewards-points, everyone, cashback, loyalty-schemes, credit-card-rewards, air-miles]
author: Aurum Technology
starter_structure:
  templates:
    - metrics-log
    - purchase-decision
    - monthly-budget-bills
    - trip
  pillars:
    - name: Personal Finance
      emoji: "💷"
      description: "The day-to-day money system: income, budget, bills, debt, savings buffers, insurance, tax and big purchases, run so that nothing surprises you and every pound has a job."
      pillarFrontmatter:
        review_cadence: monthly
      areas:
        - name: Cashback & Rewards Points
          description: "Earning cashback and loyalty points on spending you already do, without letting rewards encourage extra spending."
          projects:
            - name: Inventory of every rewards card and loyalty scheme
              description: |-
                ## Purpose
                Most households belong to ten or more loyalty schemes, cashback sites and rewards cards without knowing which ones earn anything. A single list showing each scheme, the login, the current balance and what it pays per pound spent is the base every other decision in this area rests on. It usually turns up at least one forgotten balance worth claiming.

                ## Milestones
                1. Every rewards credit or debit card, cashback site, supermarket scheme, coffee or fuel card, airline and hotel programme in the household listed.
                2. Each entry showing its membership number, the email it is registered to and the current balance.
                3. The earn rate of each scheme written as a percentage or points per pound.
                4. Dormant schemes holding a balance flagged for a decision.

                ## Notes
                Include schemes in a partner's name if you shop together; points split across two people are a common source of waste.
              priority: high
              deadlineOffsetDays: 14
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A single list holds every rewards card and loyalty scheme in the household with its login email, current balance and earn rate."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Search your email for welcome and statement messages from loyalty schemes"
                - "Check your wallet, phone wallet and key ring for physical loyalty cards"
                - "List each scheme with its login email, membership number and current balance"
                - "Note the earn rate for each scheme in pence per pound spent"
            - name: Full-balance direct debit on every rewards card
              description: |-
                ## Purpose
                Rewards are worth having only when the card is cleared in full every month: a typical rewards card pays back around 0.5 to 1 percent while charging over 20 percent a year on any balance carried. Setting a direct debit for the full statement balance on every credit card you earn on removes the one mistake that turns rewards into a loss. Do this before applying for anything new.

                ## Milestones
                1. A direct debit for the full statement balance set up on every rewards credit card.
                2. Each card's statement date and payment date written in the rewards inventory.
                3. The paying current account checked to hold enough on each payment date.
                4. One full statement cycle completed with no interest charged on any card.

                ## Notes
                If a balance is already being carried, pause any rewards chasing and clear it first. Interest on one month's carried balance usually wipes out a year of cashback.
              priority: high
              deadlineOffsetDays: 14
              frontmatter:
                mode: building
                output_kind: habit
                success_criteria: "Every rewards credit card has a full-balance direct debit and the latest statement on each shows no interest charged."
                cadence: one-shot
                effort_hours_estimate: "1"
              tasks:
                - "Log in to each rewards card account and open the direct debit settings"
                - "Set each direct debit to pay the full statement balance"
                - "Write each card's statement date and payment date in the inventory"
                - "Confirm every card statement shows paid in full with no interest @recurring(monthly:12)"
            - name: Last year's rewards earnings worked out
              description: |-
                ## Purpose
                People often keep a fee-paying card or a time-consuming cashback habit because it feels rewarding, without ever adding up the result. Totalling what each scheme actually paid out over the past twelve months, minus any annual fees, shows which ones earn their place and gives you a baseline to beat. Expect the number to be smaller than you thought; that is useful information.

                ## Milestones
                1. Twelve months of rewards earned per scheme totalled from statements and scheme histories.
                2. Annual fees and paid memberships subtracted to give a net figure per scheme.
                3. Points converted to a cash value at the rate you actually redeemed at.
                4. A single net yearly rewards figure for the household recorded in the inventory.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "The inventory shows a net value for each scheme over the last twelve months and a single household total after fees."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Download the last twelve months of points history from each scheme"
                - "Total the cashback credited in the same period from statements and cashback sites"
                - "Subtract every annual fee and paid membership from the totals"
                - "Write the net yearly figure at the top of the rewards inventory"
            - name: Category spend profile for matching rewards
              description: |-
                ## Purpose
                Earning 5 percent on travel is worthless to someone who spends most of their money at the supermarket and on fuel. Grouping a year of spending into the categories rewards schemes use (groceries, fuel, travel, dining, online shopping and bills) shows where earning power would actually land. Use the spending records you already have rather than starting a new tracking habit.

                ## Milestones
                1. Twelve months of card and account spending grouped into six to eight reward categories.
                2. Annual spend per category totalled.
                3. Payments that rarely earn rewards, such as rent, tax and some bills, separated out.
                4. The top three categories by spend marked as the ones any rewards choice must serve.
              priority: medium
              deadlineOffsetDays: 30
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A one-page profile shows annual spend in six to eight reward categories with the top three marked and non-earning payments separated."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Export twelve months of transactions from your bank or budgeting app"
                - "Group the spending into the categories rewards schemes use"
                - "Total each category and mark the three largest"
                - "Separate out payments that usually cannot earn rewards, such as rent"
            - name: Choosing between cashback and points
              description: |-
                ## Purpose
                Cashback is simple and spends anywhere; points can be worth more, but only if you redeem them well and before they lose value. Choosing one main style for the household, based on how much time you want to spend and whether you travel, stops spending being spread across five half-used schemes. Most people who rarely travel do better with plain cashback.

                ## Milestones
                1. An honest monthly time budget for managing rewards written down.
                2. Flights or hotel stays planned for the next two years listed, or noted as none.
                3. One main style chosen: cashback, a supermarket or retail scheme, or travel points.
                4. The reasons for the choice written in two sentences.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A main rewards style for the household is written down with a monthly time budget and the reasons for choosing it."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Decide how many minutes a month you will spend managing rewards"
                - "List any flights or hotel stays planned in the next two years"
                - "Compare your top spending categories under cashback and under points"
                - "Write down the main rewards style you have chosen and why"
            - name: Personal rewards rules on one page
              description: |-
                ## Purpose
                Rewards are designed to change behaviour, and the change retailers want is more spending. A short set of written rules, such as never buying something for the points, never carrying a balance and never paying a fee the rewards do not cover, gives you a test to apply at the till. Writing them before the next sign-up is far easier than after.

                ## Milestones
                1. Five to eight personal rules written on one page.
                2. A rule on the maximum number of schemes you will run at once.
                3. A rule on the net value a fee-paying card must beat to be kept.
                4. The page saved where you will see it before any new application.

                ## Notes
                Good rules are testable at the moment of buying. Would I buy this at this price with no rewards at all? is the most useful one.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A one-page set of five to eight rewards rules, including a scheme limit and a fee threshold, is saved beside the inventory."
                cadence: one-shot
                effort_hours_estimate: "1"
              tasks:
                - "Draft five rules about what rewards must never make you do"
                - "Set a limit on how many schemes you will run at once"
                - "Write the minimum net value a fee-paying card must earn to be kept"
                - "Save the rules page next to the rewards inventory"
            - name: Loyalty accounts secured and tidied
              description: |-
                ## Purpose
                Loyalty accounts are a common target for account takeover because points can be spent quickly and few people watch the balances. Giving each account a unique password, switching on two-step sign-in where offered and merging duplicate memberships protects balances and stops points being split across two numbers. It also makes later redemptions quicker.

                ## Milestones
                1. Every loyalty and cashback account using a unique password stored in a password manager.
                2. Two-step sign-in switched on wherever a scheme offers it.
                3. Duplicate memberships merged or closed after their balances are moved.
                4. Postal address and email up to date on every account.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Every loyalty account with a balance has a unique stored password, two-step sign-in where available and no duplicate membership."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Move every loyalty login into your password manager"
                - "Change any reused password on a scheme that holds a balance"
                - "Turn on two-step sign-in wherever a scheme offers it"
                - "Ask each scheme where you have two accounts to merge the balances"
            - name: Points expiry and inactivity date list
              description: |-
                ## Purpose
                Many schemes wipe points after 12 to 36 months without activity, and some cashback sites remove balances from dormant accounts, so value disappears quietly. Recording each scheme's expiry rule and the date of your last qualifying activity shows exactly which balances are at risk and when. A small purchase or redemption is usually enough to reset the clock.

                ## Milestones
                1. Each scheme's expiry or inactivity rule taken from its current terms.
                2. The date of the last earning or redemption recorded for each scheme.
                3. A date by which each balance needs activity worked out.
                4. Every balance due to expire in the next 90 days used or reset.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Every scheme in the inventory has an expiry rule and an act-by date recorded, and nothing is due to expire unnoticed in the next 90 days."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Look up the expiry or inactivity rule in each scheme's terms"
                - "Record the last activity date for each balance"
                - "Use or reset any balance due to expire within 90 days"
                - "Check the list for anything expiring in the next 60 days @recurring(monthly:5)"
            - name: Cashback site set-up and tracking test
              description: |-
                ## Purpose
                Cashback sites pass on part of the commission a retailer pays them, but only if a tracking cookie survives from click to checkout, and ad blockers, privacy settings and comparison detours break it. Setting up one or two sites properly and testing tracking on a small purchase avoids a missed payout on a large one. Read each site's payout threshold and withdrawal options before you start.

                ## Milestones
                1. One or two cashback sites joined with a verified email address.
                2. Browser settings checked so tracking can work, with the ad blocker paused for the site.
                3. A small test purchase showing as tracked within the site's stated time.
                4. Payout threshold, withdrawal methods and any account fees written in the inventory.

                ## Notes
                Some sites charge a yearly fee for a premium tier or take a fee from payouts. Check that the higher rate covers it at your real spending.
              priority: medium
              deadlineOffsetDays: 21
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "At least one cashback site has tracked a test purchase, and its payout threshold and withdrawal options are recorded in the inventory."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Join one cashback site and verify your email address"
                - "Allow tracking for the site in your browser and pause the ad blocker"
                - "Make a small planned purchase through the site to test tracking"
                - "Record the payout threshold and withdrawal options in the inventory"
            - name: Monthly rewards posting check
              description: |-
                ## Purpose
                Points and cashback go missing more often than people expect: a hotel stay not credited, a bonus category coded wrongly, a cashback that stays pending past its date. A fifteen-minute monthly check of each active scheme against what you expected catches these while they are still easy to claim. Most schemes accept missing-points requests only within a few months.

                ## Milestones
                1. Each active scheme's latest earnings compared with the purchases that should have earned.
                2. Missing or wrong credits listed with dates and receipts.
                3. A claim raised for each missing item within the scheme's time limit.
                4. The check completed three months in a row.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Three consecutive monthly checks are logged, with every missing credit either claimed or written off with a reason."
                cadence: rolling
              tasks:
                - "List the purchases that should have earned rewards this month"
                - "Compare them with the credits shown in each scheme @recurring(monthly:9)"
                - "Raise a claim for any credit that is missing or wrong"
                - "Keep receipts for large purchases until their rewards have posted"
            - name: Missing cashback claims routine
              description: |-
                ## Purpose
                Untracked cashback can usually still be claimed, but only with an order number, the confirmation email and a request filed inside the site's window, often between 7 and 90 days. Keeping order confirmations in one email folder and filing claims on a fixed day turns lost payouts into a short admin task. Large claims, such as insurance or broadband sign-ups, are the ones to chase hardest.

                ## Milestones
                1. An email folder or label collecting every confirmation from cashback purchases.
                2. Each cashback site's claim window written down.
                3. Untracked purchases claimed within their windows.
                4. A running list of open claims with status and amount.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "No untracked cashback purchase passes its claim window without a claim, and open claims are listed with status and amount."
                cadence: rolling
              tasks:
                - "Create an email label for cashback order confirmations"
                - "Note the missing-cashback claim window for each site"
                - "File claims for purchases that have not tracked @recurring(monthly:16)"
                - "Chase any claim older than the site's stated response time"
            - name: Supermarket loyalty offers before the weekly shop
              description: |-
                ## Purpose
                Supermarket schemes now keep their best prices and bonus points for members who load personalised offers in the app, and offers not activated before the shop earn nothing. Spending five minutes in the app before the weekly shop, and taking only offers on things already on your list, captures the value without changing what you buy. Member prices on items you would buy anyway are the clearest win in this area.

                ## Milestones
                1. The app for your main supermarket installed and linked to your loyalty card.
                2. Offers loaded before each weekly shop for a month.
                3. Only offers matching the shopping list activated.
                4. A month's savings from member prices and offers noted from receipts.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Offers are loaded before four weekly shops in a row and a month of loyalty savings is recorded in the ledger."
                cadence: rolling
              tasks:
                - "Install your main supermarket's app and link your loyalty card"
                - "Load the week's personalised offers that match your list @recurring(weekly:fri)"
                - "Check each receipt shows member prices and bonus points"
                - "Note the month's loyalty savings from receipts in the rewards ledger"
            - name: Card-linked offers activation routine
              description: |-
                ## Purpose
                Banking apps and card issuers increasingly offer cashback at named retailers, but each offer must be activated before you pay and usually expires within weeks. A monthly sweep that activates offers only for shops you already use earns extra without any change in behaviour. An unactivated offer pays nothing, however much you spend.

                ## Milestones
                1. The offers section found in each banking and card app.
                2. Offers activated only for retailers already in your normal spending.
                3. Triggered offers checked as paid within their stated time.
                4. A yearly total from card-linked offers noted in the ledger.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Card-linked offers are activated monthly for existing retailers only, and a yearly total from them is recorded in the ledger."
                cadence: rolling
              tasks:
                - "Find the offers section in each banking and card app"
                - "Activate offers for shops you already use @recurring(monthly:3)"
                - "Check each triggered offer has paid within its stated time"
                - "Skip any offer that would need a new purchase to qualify"
            - name: Quarterly promotions and bonus calendar
              description: |-
                ## Purpose
                Schemes run limited bonus periods each quarter: double points on fuel, boosted cashback at a retailer, extra points for a registered promotion. Registering for the relevant ones at the start of each quarter, and moving purchases you already need into those windows, adds earnings without extra spending. Most promotions pay only if you register before the qualifying purchase.

                ## Milestones
                1. Each active scheme's promotions page checked at the start of the quarter.
                2. Relevant promotions registered for before any qualifying spend.
                3. Flexible planned purchases moved into bonus windows.
                4. Bonus earnings checked as credited when each promotion ends.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Each quarter, relevant promotions are registered before qualifying spend and their bonuses are confirmed as credited."
                cadence: cyclic
              tasks:
                - "Open each scheme's promotions page and list the current offers"
                - "Register for promotions that match planned spending @recurring(quarterly)"
                - "Move flexible planned purchases into the bonus windows"
                - "Check that each bonus has been credited after the promotion ends"
            - name: Cashback payout and withdrawal routine
              description: |-
                ## Purpose
                Cashback left sitting on a site is an unsecured balance with a company that can change its terms or close, and some sites expire dormant balances. Withdrawing to your bank as soon as the payout threshold is reached turns rewards into real money and keeps the ledger honest. Route withdrawals straight to savings or a goal so they do not dissolve into everyday spending.

                ## Milestones
                1. Each site's payout threshold and withdrawal method recorded.
                2. Balances above threshold withdrawn to your bank account.
                3. Withdrawals sent to a named savings pot rather than the current account.
                4. No site holding a confirmed balance above its threshold for more than a month.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "No cashback site holds a confirmed balance above its payout threshold for more than a month, and withdrawals land in a named savings pot."
                cadence: rolling
              tasks:
                - "Check the confirmed balance on each cashback site"
                - "Withdraw any balance above the payout threshold @recurring(monthly:22)"
                - "Send each withdrawal to a named savings pot"
                - "Record each withdrawal amount in the rewards ledger"
            - name: Rewards ledger of earned and redeemed value
              description: |-
                ## Purpose
                A simple monthly record of what each scheme earned and what you redeemed, valued in money, shows whether your rewards set-up is worth the effort. Over a year it also shows which schemes are slowing down and whether rewards are pulling spending upwards. One line per scheme per month is enough.

                ## Milestones
                1. A ledger with columns for month, scheme, earned, redeemed, cash value and fees.
                2. The opening balance of each scheme entered.
                3. Monthly entries kept for six months.
                4. A year-to-date net value visible at a glance.

                ## Notes
                Start from the **Metrics log** template. Value points at the rate you actually redeem at, not the scheme's headline value.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: artifact
                success_criteria: "The ledger holds six consecutive months of entries for every active scheme and shows a year-to-date net value after fees."
                cadence: rolling
              tasks:
                - "Create the ledger from the metrics log template"
                - "Enter the current balance of every active scheme"
                - "Add the month's earnings, redemptions and fees @recurring(monthly:28)"
                - "Ask the agent to summarise the year-to-date net value from the ledger"
            - name: Annual fee card keep or downgrade decision
              description: |-
                ## Purpose
                Cards with annual fees need to earn more than the fee every year, and issuers usually allow a downgrade to a no-fee version that keeps the account history. Deciding a month before each card's fee date, using the ledger figures, prevents another year paid on autopilot. Ask the issuer about a retention offer before cancelling.

                ## Milestones
                1. Each fee-paying card's renewal date noted in the inventory.
                2. Net value for the past year compared with the coming fee.
                3. A keep, downgrade or cancel decision made before the fee posts.
                4. Points moved or redeemed before any account is closed.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "For every fee-paying card, a keep, downgrade or cancel decision is recorded before the fee date, backed by the past year's net value."
                cadence: cyclic
              tasks:
                - "Write each fee-paying card's renewal date in the inventory"
                - "Compare last year's net rewards with the coming fee"
                - "Call the issuer to ask about downgrade and retention options"
                - "Decide keep, downgrade or cancel a month before each fee date @recurring(yearly)"
            - name: Yearly rewards portfolio audit
              description: |-
                ## Purpose
                Rewards programmes change their earn rates, partners and redemption values every year, often for the worse, so a set-up that was right two years ago may now cost you. Once a year, review every scheme against the ledger and your current spending to decide what stays, what goes and what changes. Keep the audit to a single afternoon.

                ## Milestones
                1. Each scheme's current earn rate and redemption terms reread.
                2. Each scheme's yearly net value taken from the ledger.
                3. Schemes that earned below your threshold closed or dropped.
                4. Changes for the coming year written down with dates.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: decision
                success_criteria: "A dated yearly audit note lists every scheme's net value, the schemes dropped and the changes planned for the coming year."
                cadence: cyclic
              tasks:
                - "Block out an afternoon for the yearly rewards audit @recurring(yearly)"
                - "Reread the current terms of every scheme you use"
                - "Drop schemes that fell below your minimum net value"
                - "Update the inventory and rules page with any changes"
            - name: Receipt scanning apps with a time cap
              description: |-
                ## Purpose
                Receipt-scanning and survey apps pay small amounts for photographing receipts or sharing shopping data, sometimes a few pounds a month. Whether that is worth it depends on the minutes involved and how comfortable you are with the data you hand over. Trying one app for a month with a fixed weekly time limit gives a real hourly rate to judge it by.

                ## Milestones
                1. One app chosen after reading what data it collects and shares.
                2. A weekly time cap set, such as ten minutes.
                3. Four weeks of earnings and minutes recorded.
                4. A keep or delete decision made on the hourly rate.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "After four weeks, the app's hourly rate is calculated from logged minutes and earnings and a keep or delete decision is recorded."
                cadence: phased
                effort_hours_estimate: "3"
              tasks:
                - "Read the privacy terms of one receipt-scanning app before joining"
                - "Scan the week's receipts within a ten-minute limit @recurring(weekly:sun)"
                - "Record minutes spent and points earned each week"
                - "Delete the app and close the account if the hourly rate is too low"
            - name: Valuing points in pence per point
              description: |-
                ## Purpose
                Points are not money until redeemed, and the same balance can be worth half a penny or two pence each depending on how it is spent. Learning to work out the value per point of any redemption, after taxes and fees, lets you compare a voucher, a flight and a cash-out on equal terms. It is the single most useful skill for anyone collecting points.

                ## Milestones
                1. The value-per-point calculation understood and written down.
                2. Three real redemption options in one of your schemes valued.
                3. A floor value set below which you will not redeem.
                4. The calculation used on your next real redemption.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Three redemptions in your main scheme are valued in pence per point, and a minimum redemption value is written in the inventory."
                cadence: phased
                effort_hours_estimate: "2"
              tasks:
                - "Write the formula: cash price minus fees, divided by points needed"
                - "Price three redemptions in your main scheme using the formula"
                - "Set a minimum pence-per-point value for your redemptions"
                - "Record each redemption's value per point in the ledger"
            - name: Reading rewards terms and exclusions
              description: |-
                ## Purpose
                Card terms exclude more than people assume: cash withdrawals, balance transfers, gambling, tax payments, some bill payments and purchases through certain wallets often earn nothing. Spending one evening on the earning rules for your main cards and schemes stops you choosing how to pay on a wrong assumption. The exclusions are usually in a short section near the end of the terms.

                ## Milestones
                1. The current terms for each main card and scheme saved.
                2. A list of transaction types that do not earn for each one.
                3. Rules on refunds, reversals and points clawback noted.
                4. Any of your regular payments that do not earn identified.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A saved note lists the non-earning transaction types and refund rules for each main card, with affected regular payments marked."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Download the current rewards terms for each main card"
                - "List the excluded transaction types for each card"
                - "Note how refunds and returns reverse rewards already earned"
                - "Check your regular payments against the exclusions"
            - name: Card applications and your credit file
              description: |-
                ## Purpose
                Every credit card application usually leaves a hard search on your credit file, and several in a short period can make lenders cautious just when you need a mortgage or loan. Understanding how searches, new accounts and credit limits show on your file lets you time any rewards card application around bigger borrowing. Eligibility checkers that use a soft search show your chances without leaving a mark.

                ## Milestones
                1. Your credit reports checked for hard searches in the past year.
                2. Big borrowing planned for the next year listed with rough dates.
                3. A personal rule on the minimum gap between card applications.
                4. Soft-search eligibility checkers used before any application.

                ## Notes
                If a mortgage application is within about six months, most brokers advise against new credit applications. Ask yours before applying for any rewards card.
              priority: high
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Your rewards rules page records a minimum gap between card applications and names any planned borrowing that applications must avoid."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Check your credit reports for hard searches in the past year"
                - "List any mortgage, car or loan applications planned in the next year"
                - "Set a minimum gap between rewards card applications"
                - "Use a soft-search eligibility checker before any new application"
            - name: Foreign spending fees versus rewards
              description: |-
                ## Purpose
                A card paying 1 percent cashback but charging around 3 percent on foreign transactions loses money on every purchase abroad and on many foreign-currency websites. Knowing which cards charge that fee, and refusing the offer to pay in your home currency at foreign tills and cash machines, protects the value you earn. A card with no foreign fee matters if you travel more than once a year.

                ## Milestones
                1. Each card's foreign transaction fee found in its terms.
                2. One card marked as the one to use abroad and on foreign websites.
                3. Dynamic currency conversion understood, with a rule to pay in local currency.
                4. A note in your phone naming the card to use when travelling.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "The inventory names one card for foreign spending, with every card's foreign transaction fee recorded beside it."
                cadence: one-shot
                effort_hours_estimate: "1"
              tasks:
                - "Find the foreign transaction fee for each card you hold"
                - "Mark the cheapest card for foreign spending in the inventory"
                - "Choose to pay in local currency whenever a foreign till offers a choice"
                - "Check a foreign statement line for fees after your next trip"
            - name: Price check before buying for the cashback
              description: |-
                ## Purpose
                High cashback on an inflated price is a worse deal than a lower price with no cashback, and some rewards portals list items above normal retail. Comparing the final price after rewards with the cheapest available price, delivery included, takes a minute and stops rewards from steering where you shop. It matters most on electronics, travel and insurance.

                ## Milestones
                1. A two-step check written down: cheapest price first, rewards second.
                2. The check used on five purchases above a set amount.
                3. Cases where rewards pointed to a dearer option noted.
                4. The amount above which the check is always done agreed.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: habit
                success_criteria: "Five purchases above your set amount have been price-checked before rewards, with any dearer rewards route noted."
                cadence: phased
                effort_hours_estimate: "1"
              tasks:
                - "Set the purchase amount above which you always compare prices"
                - "Find the cheapest price including delivery before opening any cashback site"
                - "Compare that with the rewards route's price after cashback"
                - "Note any purchase where the rewards route would have cost more"
            - name: Airline and hotel points basics
              description: |-
                ## Purpose
                Travel loyalty schemes rarely price rewards as simply as they appear: many now use dynamic pricing, add taxes and carrier charges to reward flights, and limit seats at the best rates. Learning how your chosen scheme prices rewards, what fees apply and how far ahead seats open stops you saving for a redemption that will not exist. Spend the learning time before collecting, not after.

                ## Milestones
                1. Your chosen scheme's reward pricing explained in a short note.
                2. Taxes and charges on three sample reward bookings compared with cash fares.
                3. Booking windows and change or cancellation fees noted.
                4. A realistic target redemption chosen with its points cost.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A short note explains your travel scheme's reward pricing, compares three sample bookings with cash and names one realistic target redemption."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Read how your chosen airline or hotel scheme prices rewards"
                - "Price three sample reward bookings including all taxes and charges"
                - "Note when reward seats or rooms open for booking"
                - "Write down one realistic target redemption and its points cost"
            - name: Discounted gift cards and retailer risk
              description: |-
                ## Purpose
                Buying gift cards at a discount or through a cashback route can cut a few percent off a planned shop, but a gift card is an unsecured claim on a retailer, and a retailer in insolvency often stops accepting them. Buying only what you will spend soon, from the retailer or a recognised reseller, keeps the saving without the risk. Anyone asking to be paid in gift cards, claiming to be a company or an official, is running a scam.

                ## Milestones
                1. Rules for discounted gift cards added to your rewards rules page.
                2. Gift cards bought only for spending planned within three months.
                3. Unspent gift card balances listed with expiry dates.
                4. No gift card held for a retailer reported to be in financial difficulty.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Gift card rules are on the rules page and every gift card in the house is listed with its balance and expiry date."
                cadence: one-shot
                effort_hours_estimate: "1"
              tasks:
                - "Add gift card rules to your rewards rules page"
                - "List any gift cards in the house with balances and expiry dates"
                - "Spend any gift card balance that has sat unused for three months"
                - "Buy discounted gift cards only for purchases planned this quarter"
            - name: Choosing an everyday cashback or rewards card
              description: |-
                ## Purpose
                Once the spending profile and rewards style are clear, one well-chosen everyday card for most spending usually beats a drawer of cards each used occasionally. Comparing three cards on net value at your real spend, after any annual fee, foreign fees and eligibility, gives a choice you can explain. Apply only once the full-balance direct debit habit is in place.

                ## Milestones
                1. Three cards shortlisted that match your rewards style.
                2. Each card's net yearly value worked out from your category spend profile.
                3. Eligibility checked with a soft-search checker.
                4. One card chosen and applied for, or a decision recorded to keep what you have.

                ## Notes
                Start from the **Purchase decision** template. This is a comparison method, not a recommendation; read each card's full terms before applying.
              priority: high
              deadlineOffsetDays: 45
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A comparison of three cards by net yearly value at your real spending is saved, with the chosen card or the decision to stay recorded."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Shortlist three rewards cards that fit your rewards style"
                - "Work out each card's net yearly value at your real spending"
                - "Run a soft-search eligibility check for the shortlisted cards"
                - "Record the decision and the reason in the rewards inventory"
            - name: Sign-up bonus spending test
              description: |-
                ## Purpose
                Welcome bonuses often require a minimum spend in the first three months, and meeting it with purchases you would not otherwise make turns a bonus into a cost. Testing the requirement against your planned spending, and scheduling the qualifying purchases before applying, shows whether a bonus is real. Missing the threshold by a small amount usually means no bonus at all.

                ## Milestones
                1. The bonus amount, spend requirement and deadline written down.
                2. Planned spending over the period listed, excluding anything bought for the bonus.
                3. A clear yes or no on whether planned spending meets the threshold.
                4. If accepted, qualifying spend tracked against the threshold before the deadline.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A written yes or no on the bonus is based only on spending already planned, and any accepted bonus shows its threshold met before the deadline."
                cadence: one-shot
                effort_hours_estimate: "1"
              tasks:
                - "Write down the bonus amount, spend requirement and deadline"
                - "List the spending already planned for the qualifying period"
                - "Decline the bonus if the plan falls short without extra purchases"
                - "Track qualifying spend every fortnight until the threshold is met"
            - name: Pruning loyalty schemes you never use
              description: |-
                ## Purpose
                Every scheme sends marketing, holds your data and pulls you towards its shops, yet most people earn meaningful value from only three or four. Closing the rest after using up their balances reduces inbox noise and the temptation to buy where you happen to have points. Ask each closed scheme to delete your data where your local privacy law allows it.

                ## Milestones
                1. Schemes with little or no yearly value identified from the inventory.
                2. Balances in those schemes used or transferred.
                3. Accounts closed and marketing permissions withdrawn.
                4. Data deletion requested where the scheme offers it.
              priority: low
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "The inventory shows the low-value schemes closed with zero balances, and a deletion request logged for each."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Mark the schemes that earned almost nothing last year"
                - "Use or transfer any balance before closing"
                - "Close each account and keep the confirmation email"
                - "Request deletion of your data from each closed scheme"
            - name: Choosing a main supermarket loyalty scheme
              description: |-
                ## Purpose
                Supermarket schemes differ in how they reward you: some give points converted to vouchers, others give member-only prices, and the better choice depends on what you buy and where you can easily shop. Pricing your normal weekly basket under two schemes settles which one to concentrate on. Concentrating usually beats splitting the shop across several stores for small offers.

                ## Milestones
                1. Two supermarkets within easy reach chosen for comparison.
                2. A typical weekly basket priced with member prices and points at each.
                3. Travel time and delivery costs included in the comparison.
                4. A main supermarket scheme chosen and noted in the inventory.
              priority: medium
              deadlineOffsetDays: 60
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A priced comparison of one typical weekly basket at two supermarkets is saved, with the chosen main scheme recorded."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Write down a typical weekly shopping list"
                - "Price that list at two supermarkets including member prices"
                - "Add the value of the points each would earn"
                - "Record which scheme you will concentrate on"
            - name: Routing regular bills onto a rewards card
              description: |-
                ## Purpose
                Some regular bills, such as insurance, phone contracts and utilities, can be paid by credit card without a fee and earn rewards that a direct debit from the current account does not. Moving eligible bills to the card, with the card cleared in full each month, adds steady earnings with no change in spending. Check each payee for card surcharges first; a 1 percent fee cancels a 1 percent reward.

                ## Milestones
                1. Regular bills listed, each marked with whether it accepts card payment without a fee.
                2. Eligible bills moved to the rewards card one at a time.
                3. The higher card spend covered by the full-balance direct debit without strain.
                4. Yearly rewards earned on bills estimated.

                ## Notes
                Start from the **Monthly budget and bills** template. Paying an annual premium by card can also avoid the interest built into monthly instalments, if the cash is there on the payment date.
              priority: medium
              frontmatter:
                mode: building
                output_kind: habit
                success_criteria: "Every fee-free eligible bill is paid by the rewards card, with a month of bills completed without a failed payment."
                cadence: phased
                effort_hours_estimate: "2"
              tasks:
                - "List each regular bill and whether it accepts card payment"
                - "Check every payee for card payment surcharges"
                - "Move eligible bills to the rewards card one at a time"
                - "Confirm the first month's bills were paid without a failed payment"
            - name: Redemption options compared by value
              description: |-
                ## Purpose
                Most schemes offer several ways to spend the same points, from cash or statement credit to vouchers, travel and merchandise, and their values can differ by a factor of three. Pricing the options in pence per point before redeeming means you take the best realistic use rather than the most visible button. Merchandise is usually the poorest value.

                ## Milestones
                1. All redemption options for your main scheme listed.
                2. Each option valued in pence per point.
                3. Partner offers where vouchers are worth more than face value noted.
                4. A default redemption chosen for when nothing better is due.
              priority: medium
              deadlineOffsetDays: 45
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "Every redemption option in your main scheme is valued in pence per point and a default redemption is written in the inventory."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "List every redemption option in your main scheme"
                - "Value each option in pence per point"
                - "Note any partner offers that multiply voucher value"
                - "Pick a default redemption and write it in the inventory"
            - name: Spending-creep check on rewards categories
              description: |-
                ## Purpose
                Loyalty schemes exist because members tend to spend more with the retailer, and a points balance makes purchases feel cheaper than they are. Comparing spending in your rewards categories this quarter with a quarter from before you started tells you whether rewards are paying you or you are paying for them. If spending has risen by more than the rewards earned, the set-up is running at a loss.

                ## Milestones
                1. Spending in your main rewards categories totalled for a baseline quarter.
                2. The same categories totalled for the latest quarter.
                3. The change set against rewards earned in the same period.
                4. A corrective rule added for any category where spending rose more than rewards.

                ## Notes
                Allow for price rises and life changes before blaming the rewards; a new baby or a longer commute changes spending for real reasons.
              priority: medium
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "Each quarter, spending change in the main rewards categories is set against rewards earned, with a rule added wherever spending rose faster."
                cadence: rolling
              tasks:
                - "Total spending in your main rewards categories for a baseline quarter"
                - "Compare the latest quarter's spending in the same categories @recurring(quarterly)"
                - "Set a rule for any category where spending rose more than rewards"
                - "Note any purchase made mainly to earn or use points"
            - name: Stacking rewards on a planned big purchase
              description: |-
                ## Purpose
                A planned purchase such as a sofa, laptop or appliance can earn from several layers at once: a cashback site, the retailer's own scheme, a card-linked offer and the card itself. Planning the order of steps a few weeks ahead, while checking the final price against the cheapest seller, can add several percent back without paying more. In some countries paying by credit card also adds purchase protection.

                ## Milestones
                1. The item, its cheapest price and the purchase window written down.
                2. Each available rewards layer identified with its rate and conditions.
                3. The purchase made through the route with the lowest net price.
                4. Every layer checked as credited within its stated time.
              priority: medium
              deadlineOffsetDays: 60
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "The item is bought through the lowest net-price route and every rewards layer used is confirmed as credited."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Find the cheapest price for the item from a reliable seller"
                - "List the cashback, retailer, card-linked and card rewards available"
                - "Buy through the route with the lowest net price after rewards"
                - "Check each rewards layer has credited and claim any that has not"
            - name: Booking a trip with saved points
              description: |-
                ## Purpose
                Saved points only pay off when they become a booking at good value, and reward seats or rooms often go months ahead. Choosing the dates, checking reward availability as soon as it opens and pricing the points booking against cash gives a trip that genuinely costs less. Keep a cash budget in reserve in case reward availability never appears.

                ## Milestones
                1. Destination, dates and travellers agreed.
                2. Reward availability checked as soon as booking opens.
                3. The points booking valued in pence per point against the cash price.
                4. The trip booked with points where the value meets your floor, or with cash where it does not.

                ## Notes
                Start from the **Trip** template. Check whether points bookings are refundable before committing; change fees can eat the saving.
              priority: medium
              deadlineOffsetDays: 180
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "The trip is booked, with the points booking's value per point recorded and shown to meet your minimum redemption value."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Agree the destination, travel dates and who is going"
                - "Check when reward seats or rooms open for those dates"
                - "Compare the points cost and fees with the cash price"
                - "Book with points only if the value meets your floor"
            - name: Sale season cashback plan
              description: |-
                ## Purpose
                During big sale periods cashback sites often raise rates for a few days and retailers add bonus points, but the same weeks bring the strongest pressure to buy things you never planned. Writing the purchase list before the sale starts, and using boosted rates only on items on that list, keeps the benefit and drops the pressure. Check that boosted rates apply to sale items, as some exclude them.

                ## Milestones
                1. A list of items you planned to buy anyway, with normal prices, written before the sale.
                2. Boosted cashback rates for those retailers checked on the day.
                3. Only listed items bought.
                4. Cashback from the sale tracked through to payment.
              priority: low
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "Every purchase in the sale period appears on the list written beforehand, and its cashback is tracked through to payment."
                cadence: cyclic
              tasks:
                - "Write the list of planned purchases before the main sale period @recurring(yearly)"
                - "Note normal prices for listed items a few weeks ahead"
                - "Check boosted cashback rates and exclusions on the day"
                - "Buy only listed items and file the confirmations in the cashback folder"
            - name: Redeeming points before closing an account
              description: |-
                ## Purpose
                Closing a credit card or current account often cancels its points immediately, and leaving a scheme can forfeit the balance outright. Redeeming or transferring every balance first, and keeping proof of the final balance, means nothing is lost when you simplify. Downgrades need the same care, as some issuers move points to a different scheme at a worse rate.

                ## Milestones
                1. The points balance and closure rules confirmed for the account.
                2. The balance redeemed or transferred before closure.
                3. A screenshot of the final balance kept.
                4. The closure confirmed in writing.
              priority: medium
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "The account is closed with a zero points balance, a screenshot of the final balance and a written closure confirmation on file."
                cadence: one-shot
                effort_hours_estimate: "1"
              tasks:
                - "Ask the issuer what happens to points when the account closes"
                - "Redeem or transfer the full balance"
                - "Screenshot the final balance before closing"
                - "Keep the written closure confirmation with your records"
            - name: Responding to a programme devaluation notice
              description: |-
                ## Purpose
                Schemes regularly cut the value of points by raising redemption prices or lowering earn rates, usually with 30 to 90 days' notice. Reading the notice quickly and deciding whether to redeem before the change, or move spending elsewhere, protects a balance built over years. Panic redemptions at poor value are the mistake to avoid.

                ## Milestones
                1. The change and its effective date summarised in two sentences.
                2. The effect on your balance and planned redemption worked out.
                3. A decision recorded: redeem early, carry on or shift spending.
                4. Any early redemption made at or above your value floor.
              priority: low
              frontmatter:
                mode: event
                output_kind: decision
                success_criteria: "Before the effective date, a written decision on the devaluation is recorded and any early redemption meets your minimum value per point."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Ask the agent to summarise the devaluation notice in plain terms"
                - "Work out what the change does to your planned redemption"
                - "Decide whether to redeem before the effective date"
                - "Move future spending elsewhere if the scheme no longer meets your floor"
            - name: Student rewards without a credit card
              description: |-
                ## Purpose
                Students can earn rewards without borrowing: debit-card cashback from some banks, student pricing in supermarket and coffee schemes, and cashback sites all work without credit. Setting up two or three of these around the term's real spending on food, travel and books earns a little without adding debt. Avoid any scheme that asks you to take a credit product as the price of entry.

                ## Milestones
                1. Term-time spending split into food, travel, books and other.
                2. Two or three no-credit rewards schemes chosen to match.
                3. Each scheme added to the rewards inventory.
                4. Earnings for the first term recorded.
              priority: medium
              frontmatter:
                mode: building
                output_kind: habit
                success_criteria: "Two or three rewards schemes that need no credit are in use for term-time spending, with the first term's earnings recorded."
                cadence: phased
                effort_hours_estimate: "2"
              tasks:
                - "List what you spend on food, travel and books in a typical term week"
                - "Join the loyalty scheme of the shop you use most for food"
                - "Join one cashback site for textbooks and travel bookings"
                - "Record the term's rewards earnings at the end of term"
            - name: Rewards on the costs of raising children
              description: |-
                ## Purpose
                Nappies, school uniform, children's clothes and family days out are predictable costs that many retail and attraction schemes reward, and some schemes let household members pool points. Concentrating these costs in one or two schemes, and pooling where allowed, builds a balance that can pay for something the family actually needs. Baby clubs and parenting schemes also send offers, so read what data they collect about your children first.

                ## Milestones
                1. Regular child-related costs listed by the shop they are bought from.
                2. One or two schemes chosen to concentrate those costs.
                3. Household pooling set up where the scheme allows it.
                4. A family use for the balance chosen, such as school shoes or a day out.
              priority: medium
              frontmatter:
                mode: building
                output_kind: habit
                success_criteria: "Child-related spending is concentrated in one or two named schemes, pooled where allowed, with a family use for the balance written down."
                cadence: phased
                effort_hours_estimate: "2"
              tasks:
                - "List where you buy nappies, uniform and children's clothes"
                - "Join the scheme for the shop that takes most of that spending"
                - "Set up household points pooling if the scheme offers it"
                - "Check the pooled balance and plan its family use @recurring(quarterly)"
            - name: Couple's rewards plan for shared spending
              description: |-
                ## Purpose
                Couples often each hold rewards cards and split shared spending between them by habit, so points end up scattered across two sets of schemes. Agreeing which card pays for joint costs, whose schemes collect the household's points and how rewards are used keeps it fair and concentrates the balance. Write the agreement down so it survives a busy month.

                ## Milestones
                1. Both partners' cards and schemes listed together.
                2. One card agreed for shared household spending.
                3. A rule agreed for how rewards on joint spending are split or used.
                4. The agreement reviewed together after three months.
              priority: low
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A written agreement names the card for shared spending and how joint rewards are used, and it has been reviewed once after three months."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Sit down together with both partners' rewards inventories"
                - "Agree which card pays for shared household costs"
                - "Agree how rewards earned on joint spending will be used"
                - "Review the agreement together after three months"
            - name: A simple rewards set-up for retirement
              description: |-
                ## Purpose
                In retirement, fewer and simpler schemes are usually better: one cashback or points card, your main supermarket scheme and perhaps one travel scheme if you travel often. Cutting down to these, with large-print or paper statements where helpful and a trusted person who knows they exist, keeps the value without the admin. Be wary of messages warning that points are about to expire, because criminals copy them to steal logins.

                ## Milestones
                1. Schemes cut to three or fewer.
                2. Statements set to whichever format is easiest to read.
                3. A trusted person told which schemes exist and where the details are kept.
                4. A rule written down never to follow links in points-expiry messages.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "No more than three schemes remain open, and a trusted person holds a note of which they are and where the details are kept."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Choose the three schemes worth keeping"
                - "Close the others after using their balances"
                - "Tell a trusted person which schemes you hold and where details are kept"
                - "Review the simple set-up and its balances each spring @recurring(yearly)"
            - name: Rewards on business spending for sole traders
              description: |-
                ## Purpose
                Sole traders and freelancers often put business costs on a personal rewards card, which earns well but tangles the records and complicates expense claims. Keeping business spending on a separate card, recording the rewards earned on it and asking your accountant how those rewards are treated keeps the books clean. The rules differ by country and by how the business is set up.

                ## Milestones
                1. Business spending moved to one dedicated card.
                2. Rewards earned on business spending recorded separately.
                3. Your accountant's view on how those rewards are treated noted.
                4. Every statement of that card saved with the business records.
              priority: low
              frontmatter:
                mode: building
                output_kind: habit
                success_criteria: "All business costs run through one dedicated card, its rewards are recorded separately and your accountant's view on them is noted."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Choose one card to use only for business costs"
                - "Move recurring business subscriptions to that card"
                - "Ask your accountant how rewards on business spending are treated"
                - "Save each statement of the business card with your bookkeeping"
            - name: Rewards while rebuilding after debt
              description: |-
                ## Purpose
                If you are clearing debt or have closed credit cards, chasing card rewards is the wrong move, but you can still collect small rewards with no borrowing at all. Using supermarket schemes, debit-card offers and cashback sites only for planned spending, and sending every payout to the debt, keeps progress moving without new risk. Revisit credit card rewards only after a year of clean, debt-free months.

                ## Milestones
                1. A written rule that no new credit is opened for rewards during repayment.
                2. Debit-only and loyalty rewards set up for planned spending.
                3. Every payout sent straight to the debt.
                4. A date set for reconsidering card rewards after a year debt-free.
              priority: high
              frontmatter:
                mode: building
                output_kind: habit
                success_criteria: "No credit has been opened for rewards during repayment, and every rewards payout in the period shows as paid towards the debt."
                cadence: phased
                effort_hours_estimate: "1"
              tasks:
                - "Write a rule that no credit is opened for rewards while repaying debt"
                - "Link your supermarket scheme and debit-card offers to planned spending"
                - "Send each cashback payout straight to the debt"
                - "Note the date you will reconsider credit card rewards"
            - name: Earning on work expenses you claim back
              description: |-
                ## Purpose
                People who travel for work often pay for hotels, trains and meals themselves and claim them back, which can earn card rewards and hotel or airline points. It only works if your employer allows it, the claim goes in quickly and the reimbursement arrives before the card's payment date. A late reimbursement that leaves a balance unpaid wipes out the gain.

                ## Milestones
                1. Your employer's expenses policy checked for personal card use.
                2. One card chosen for all reclaimable work spending.
                3. Claims submitted within a few days of each trip.
                4. Reimbursements matched to the card's payment date each month.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every reclaimable work expense is reimbursed before the card's payment date, with no interest charged on that card over three months."
                cadence: rolling
              tasks:
                - "Read your employer's expenses policy on personal card use"
                - "Use one card for all reclaimable work spending"
                - "Submit each expense claim within three days of the trip"
                - "Check reimbursements arrived before the card payment date @recurring(monthly:25)"
            - name: Transfer partners and points conversion
              description: |-
                ## Purpose
                Some card and hotel schemes let you convert points into airline or hotel partners at set ratios, which can lift their value well above cash-out rates for the right redemption. Transfers are almost always one-way and can take days, so the skill is confirming the redemption is available before moving a single point. Learn your scheme's partners and ratios before planning around them.

                ## Milestones
                1. Your scheme's transfer partners and ratios listed.
                2. Transfer times and minimum amounts noted.
                3. One target redemption priced through a partner.
                4. A rule written: confirm availability before any transfer.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A note lists your scheme's transfer partners, ratios and transfer times, with one target redemption priced through a partner."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "List your scheme's transfer partners and conversion ratios"
                - "Note typical transfer times and minimum transfer amounts"
                - "Price one target redemption through a transfer partner"
                - "Confirm reward availability before transferring any points"
            - name: Airline and hotel status worth chasing or not
              description: |-
                ## Purpose
                Elite status brings lounge access, upgrades and bonus earning, but chasing it often means booking a dearer flight or hotel than you need. Counting your realistic yearly nights or flights, and putting a value on the benefits you would really use, shows whether status is worth anything to you. Status matches, where a scheme grants a tier based on a rival's, can be worth requesting when your job or routes change.

                ## Milestones
                1. Last year's paid nights or flights counted for each scheme.
                2. The next tier's requirement compared with your realistic activity.
                3. Benefits you would actually use given a rough value.
                4. A decision recorded on whether to pursue status.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A written decision on pursuing status rests on a count of last year's paid activity and a rough value of the benefits you would use."
                cadence: phased
                effort_hours_estimate: "2"
              tasks:
                - "Count last year's paid flights or hotel nights per scheme"
                - "Compare that with the next status tier's requirements"
                - "Value the status benefits you would genuinely use"
                - "Check progress against your status decision @recurring(quarterly)"
            - name: Two or three card category strategy
              description: |-
                ## Purpose
                Experienced collectors sometimes run two or three cards, each used only in the category where it earns most, such as groceries on one and travel on another. The extra earnings are real but modest, and the cost is more payment dates, more apps and more chances to use the wrong card. Testing the split for three months against a single card shows whether the gain covers the complexity.

                ## Milestones
                1. The category each card covers written on a card-use note.
                2. Phone wallet defaults set to match.
                3. Three months of earnings compared with what one card would have earned.
                4. A decision to keep the split or return to one card.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "Three months of split-card earnings are compared with a single-card estimate and a keep or revert decision is recorded."
                cadence: phased
                effort_hours_estimate: "3"
              tasks:
                - "Write which card is used for which spending category"
                - "Set phone wallet defaults to match the category rules"
                - "Compare three months of earnings with a single-card estimate"
                - "Return to one card if the gain does not cover the extra effort"
            - name: Escalating a refused or reversed reward
              description: |-
                ## Purpose
                When a large reward is refused, such as a sign-up bonus, cashback on an insurance policy or a hotel stay worth many points, a documented complaint usually gets further than repeated chat messages. Gathering the evidence, using the formal complaints route and knowing when the matter can go to an independent complaints body gives you the best chance of payment. Rewards issued by a bank or card provider often fall within its regulated complaints process.

                ## Milestones
                1. Evidence gathered: terms at the time, confirmations, screenshots and dates.
                2. A formal written complaint sent through the scheme's complaints route.
                3. The final response or its deadline date recorded.
                4. The case taken to an independent complaints body if eligible and unresolved.
              priority: low
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "A formal complaint with dated evidence has been sent, and the response or the next escalation step is recorded with its date."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Save the terms, confirmations and screenshots for the disputed reward"
                - "Ask the agent to draft a short, factual complaint letter"
                - "Send the complaint through the scheme's formal complaints process"
                - "Note the response deadline and the next escalation step"
            - name: Referral bonus records and tax check
              description: |-
                ## Purpose
                Referral bonuses, survey payments and large promotional rewards can count as taxable income in some countries, unlike ordinary cashback on your own spending. Keeping a simple record of these payments, and checking their treatment against your tax authority's guidance, avoids an awkward question later. The amounts are usually small, but the record takes minutes.

                ## Milestones
                1. Referral and promotional payments over the last tax year listed.
                2. Your tax authority's guidance on reward and referral income found.
                3. Any amount that may need declaring flagged for your tax return.
                4. A running record set up for the current year.

                ## Notes
                If the amounts are significant or you are unsure, ask a tax adviser; this project organises the record, it does not decide the tax.
              priority: low
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A record lists every referral and promotional payment for the tax year, with any that may need declaring flagged before the return is filed."
                cadence: cyclic
              tasks:
                - "List referral bonuses and promotional payments from the last tax year"
                - "Find your tax authority's guidance on referral and reward income"
                - "Flag anything that may need declaring on your tax return"
                - "Review the record before filing each tax return @recurring(yearly)"
---

# Cashback & Rewards Points

This area is for anyone who wants the cashback and points that come from spending they already do, without the rewards quietly changing what or how much they buy. It starts with the foundations (an inventory of every scheme, a full-balance payment habit, last year's real earnings, a spending profile, a rewards style and written rules), then the routines that collect what you are owed, the skills of valuing points and reading terms, decisions about cards, schemes and redemptions, dated events such as big purchases and devaluations, versions for students, parents, couples, retirees, sole traders and people rebuilding after debt, and finally specialist work on transfers, status and disputes.

What repeats is a weekly supermarket offer load, monthly checks on postings, claims, card-linked offers, payouts and the ledger, quarterly promotions and spending-creep checks, and a yearly audit and fee review. The Metrics log, Purchase decision, Monthly budget and bills and Trip templates pair with the projects that name them. Installing adds all 50 projects as active, so archive the ones that are not for you yet.
