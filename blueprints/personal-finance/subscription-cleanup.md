---
id: personal-finance.subscription-cleanup
name: Subscription Cleanup
description: "A twelve-month inventory of every subscription and membership, a verdict and cancellation sprint, then light monthly and yearly checks that stop forgotten charges, trials and price rises creeping back."
category: personal
version: 1.0.0
tags: [personal-finance, subscription-cleanup, everyone, streaming, memberships, free-trials, auto-renewal]
author: Aurum Technology
starter_structure:
  templates:
    - monthly-budget-bills
    - metrics-log
    - purchase-decision
    - operational-checklist
  pillars:
    - name: Personal Finance
      emoji: "💷"
      description: "The day-to-day money system: income, budget, bills, debt, savings buffers, insurance, tax and big purchases, run so that nothing surprises you and every pound has a job."
      pillarFrontmatter:
        review_cadence: monthly
      areas:
        - name: Subscription Cleanup
          description: "Finding and cancelling unused subscriptions and memberships, and setting a regular check so they do not creep back."
          projects:
            - name: Twelve-month subscription inventory from statements
              description: |-
                ## Purpose
                Most people guess they pay for five or six subscriptions and find twelve to twenty once they look properly, because annual charges, small app fees and payments on an old card hide well. Going through twelve months of current account, credit card and online wallet history catches the yearly renewals that a three-month look misses. The list you end with is the starting point for every cancellation decision in this area.

                ## Milestones
                1. Twelve months of statements downloaded for every current account, credit card and online payment wallet.
                2. Every repeating charge from a subscription or membership listed with merchant name, amount and billing frequency.
                3. Each line given an annualised cost, with monthly charges multiplied by twelve.
                4. A total yearly spend on subscriptions and memberships written at the top of the list.

                ## Notes
                Merchant names on statements are often cryptic. Search the exact descriptor online before deciding a charge is fraud or a mystery; it is usually a parent company or payment processor.
              priority: high
              deadlineOffsetDays: 14
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A single list shows every subscription and membership charged in the last twelve months, each with an annualised cost and a yearly total."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Download twelve months of statements for each current account and credit card"
                - "Search each statement for words such as subscription, membership, renewal and premium"
                - "List every repeating charge with merchant, amount and how often it is billed"
                - "Work out the annual cost of each line and the overall total"
            - name: App store and payment platform subscription check
              description: |-
                ## Purpose
                Charges billed through a phone's app store, a games console, a marketplace account or an online wallet show on your statement under the platform's name, not the app's, so one line can hide six subscriptions. Each platform keeps its own list of active subscriptions and stored payment agreements, and that list is the only place to see them clearly. Checking every one takes about half an hour and usually turns up at least one forgotten charge.

                ## Milestones
                1. The subscriptions page opened on every phone, tablet, console and smart TV account in the household.
                2. Each online wallet's list of automatic payments or billing agreements reviewed.
                3. Every active item added to the subscription inventory with its next charge date.
                4. Any agreement with a merchant you no longer use cancelled at the platform.
              priority: high
              deadlineOffsetDays: 14
              frontmatter:
                mode: research
                output_kind: artifact
                success_criteria: "Every app store, console and online wallet account in the household has been checked and each active subscription found there appears on the inventory."
                cadence: one-shot
                effort_hours_estimate: "1"
              tasks:
                - "Open the subscriptions page in your phone's app store account settings"
                - "Check the subscription lists on any games console and smart TV accounts"
                - "Review automatic payments and billing agreements in your online wallet"
                - "Add each item found to the inventory with its next charge date"
            - name: Inbox sweep for receipts and renewal notices
              description: |-
                ## Purpose
                Subscriptions paid by a card you have since replaced, or bought with gift balance, may not show on current statements, but the welcome email and the renewal notice are almost always in an inbox somewhere. Searching all your email addresses, including old ones you still receive, finds memberships you signed up to years ago. It also gives you the login email for each service, which is the thing people most often lack when they try to cancel.

                ## Milestones
                1. Each email address you use or still check searched for receipt, renewal, subscription, trial and membership.
                2. Services found by email but missing from the inventory added to it.
                3. The login email for every subscription recorded beside it.
                4. A mail filter or label set up that gathers future receipts and renewal notices in one place.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Every email account has been searched and each subscription on the inventory shows the email address used to log in to it."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "List every email address you have used to sign up for anything"
                - "Search each inbox for renewal, receipt, trial and your subscription"
                - "Add services found only in email to the inventory with their login email"
                - "Create a label or folder that collects future receipts and renewal notices"
            - name: Annual renewals and memberships register
              description: |-
                ## Purpose
                Yearly charges are the ones that hurt: a museum membership, a warehouse club card, a professional body fee, an antivirus licence or a domain name renews once, at full price, often months after you stopped needing it. A register of every annual and multi-year renewal, with the date and the notice period, turns these from surprises into decisions you make a few weeks ahead.

                ## Milestones
                1. Every subscription and membership billed yearly or less often listed with its renewal date.
                2. The notice period and cancellation method for each one noted from its terms.
                3. Last year's price and the expected new price recorded side by side.
                4. A total of all annual renewals, grouped by the month they fall in.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A register lists every annual or multi-year subscription with renewal date, notice period and price, grouped by month."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Pull every yearly charge out of the subscription inventory"
                - "Look up the notice period and cancellation route for each annual membership"
                - "Note last year's price beside the expected renewal price"
                - "Group the renewals by month and total each month"
            - name: Free trials and introductory prices log
              description: |-
                ## Purpose
                Free trials and first-year discounts are designed to convert into full-price payments on a date most people forget, and the jump can be two or three times the introductory price. Logging every live trial and promotional rate with the exact date it ends means the decision to keep it is made by you, a few days early, rather than by the billing system.

                ## Milestones
                1. Every current free trial listed with the date it converts to paid.
                2. Every introductory or promotional price listed with its end date and the full price that follows.
                3. A reminder set two to three days before each conversion.
                4. Any trial you already know you will not keep cancelled, with access running on to the trial end where the service allows.
              priority: high
              deadlineOffsetDays: 10
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Every live free trial and promotional price is logged with its end date, full price and a reminder set at least two days ahead."
                cadence: one-shot
                effort_hours_estimate: "1"
              tasks:
                - "List every free trial you have started in the last two months"
                - "Find the conversion date and full price for each trial and promotional rate"
                - "Set a reminder two days before each conversion date"
                - "Cancel straight away any trial you already know you will not keep"
            - name: Keep, pause, downgrade or cancel verdict for each subscription
              description: |-
                ## Purpose
                A long list of subscriptions only saves money once each line has a verdict, and four options work better than two: many services offer a pause, a cheaper tier or an ad-supported plan that keeps most of the value. Scoring each subscription on how often you used it last month and whether you would sign up again today at the current price gives a quick, defensible answer for each one.

                ## Milestones
                1. Each subscription on the inventory marked with how many times it was used in the last 30 days.
                2. A yes or no recorded for whether you would buy it again today at today's price.
                3. One of keep, pause, downgrade or cancel written beside every line.
                4. The total yearly saving from the verdicts worked out.

                ## Notes
                Be honest about aspirational subscriptions: the language app, class pass or online course you mean to use. If it has sat unused for two months, pause or cancel it and rejoin when the plan is real.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "Every subscription on the inventory carries a keep, pause, downgrade or cancel verdict and the yearly saving is totalled."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Mark each subscription with how often you used it in the last month"
                - "Ask of each one whether you would sign up again today at this price"
                - "Check which services offer a pause or a cheaper tier"
                - "Write a verdict beside every line and total the yearly saving"
            - name: First cancellation sprint
              description: |-
                ## Purpose
                Verdicts change nothing until the cancellations go through, and doing them in one sitting avoids the slow drift where three of ten get done. Setting aside two hours with the list, the login details and a phone ready for the services that insist on a call clears most of the backlog in one go. Expect a few services to need a second attempt.

                ## Milestones
                1. Every subscription marked cancel has had its cancellation submitted.
                2. Every subscription marked pause or downgrade has been changed.
                3. A confirmation email or reference number saved for each change.
                4. A short list kept of any cancellation that failed or needs a phone call, with the next step for each.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "Every cancel, pause and downgrade verdict has been actioned and each one has a saved confirmation or reference."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Block two hours in your diary for cancellations"
                - "Cancel each subscription marked cancel, starting with the most expensive"
                - "Change plans on every subscription marked pause or downgrade"
                - "List any cancellation that failed with the next step to try"
            - name: Cancellation proof folder
              description: |-
                ## Purpose
                Charges after cancellation are common enough that card issuers treat them as a standard dispute type, and the case is won or lost on proof. Keeping the confirmation email, a screenshot of the final cancellation screen and the date in one folder for each service turns an argument into a two-minute refund request.

                ## Milestones
                1. One folder, digital or paper, set up for subscription cancellation records.
                2. Confirmation emails or reference numbers saved for every cancellation in the last year.
                3. A screenshot of the final confirmation screen kept wherever no email arrived.
                4. A retention rule chosen, such as keeping each record for two years after the last charge.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A single folder holds dated proof of every subscription cancelled in the last year, each kept for at least two years."
                cadence: one-shot
                effort_hours_estimate: "1"
              tasks:
                - "Create one folder for subscription cancellation records"
                - "Move existing cancellation emails into the folder"
                - "Screenshot the confirmation screen every time you cancel"
                - "Put the date and any reference number in each file name"
            - name: Monthly subscription spending ceiling
              description: |-
                ## Purpose
                Without a limit, subscriptions grow one small charge at a time, each easy to justify on its own. Setting a monthly ceiling for all subscriptions together, sized against your take-home pay and the verdicts you have just made, gives every new sign-up a clear test: it fits under the ceiling or something else goes.

                ## Milestones
                1. Current monthly subscription spend, with annual charges counted as one twelfth, calculated.
                2. A ceiling chosen and written down as a single figure.
                3. The ceiling added as its own line in your budget.
                4. Everyone else in the household who signs up for services told the figure.

                ## Notes
                Start from the **Monthly budget and bills** template if you do not already keep a budget. A sensible first ceiling is what you pay after the cancellation sprint, lowered later once the habits settle.
              priority: medium
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A written monthly ceiling for all subscriptions exists as its own budget line and current spend sits at or below it."
                cadence: one-shot
                effort_hours_estimate: "1"
              tasks:
                - "Add up monthly subscription costs with yearly charges divided by twelve"
                - "Choose a ceiling and write it down as a single figure"
                - "Add the ceiling as a separate line in your budget"
                - "Tell everyone who signs up to services on the household card"
            - name: Monthly subscription statement scan
              description: |-
                ## Purpose
                Ten minutes once a month is enough to catch a new charge you did not expect, a price that rose quietly or a cancelled service that is still billing. Doing the scan a few days after most subscriptions renew, on the same date each month, makes it a habit rather than a project.

                ## Milestones
                1. A fixed day each month chosen for the scan.
                2. Last month's subscription charges checked against the inventory line by line.
                3. Any unexpected, changed or post-cancellation charge noted with an action.
                4. The month's subscription total compared with the ceiling.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A subscription scan is completed on the same day every month, with any unexpected charge recorded and actioned within a week."
                cadence: rolling
              tasks:
                - "Pick a scan day a few days after most of your renewals"
                - "Compare the month's subscription charges with your inventory @recurring(monthly:9)"
                - "Chase any charge that should have stopped within a week of spotting it"
                - "Check the month's total against your subscription ceiling"
            - name: Thirty-day renewal look-ahead
              description: |-
                ## Purpose
                Annual renewals usually need notice before the renewal date, and some services only send a reminder a few days before, or not at all. Looking once a month at everything due in the next thirty days gives time to use up, cancel, haggle or switch to monthly before money leaves the account.

                ## Milestones
                1. The annual renewals register checked each month for anything due in the next 30 days.
                2. A decision recorded for each upcoming renewal before its notice deadline.
                3. Calendar reminders in place for each renewal you mean to act on.
                4. The register updated with new dates and prices after each renewal.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "No annual renewal goes through without a recorded keep or cancel decision made at least a week before its date."
                cadence: rolling
              tasks:
                - "Look at every renewal due in the next 30 days @recurring(monthly:24)"
                - "Decide keep, cancel or haggle for each one before its notice date"
                - "Add a calendar reminder for each renewal you plan to act on"
                - "Update the register with the new date and price after each renewal"
            - name: Free trial end-date discipline
              description: |-
                ## Purpose
                New trials keep arriving with streaming launches, software, news sites and shopping memberships, and each one sets a fresh conversion date. A standing rule of logging the end date the moment you start a trial, plus a short weekly look at the log, means no trial ever converts by accident.

                ## Milestones
                1. A rule agreed that every trial is logged before it is first used.
                2. A reminder set at sign-up two days before each conversion.
                3. A weekly check of the trial log in place.
                4. No accidental conversions in three consecutive months.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Three consecutive months pass with every new trial logged at sign-up and no trial converting to paid without a decision."
                cadence: rolling
              tasks:
                - "Add the trial log as a shortcut on your phone's home screen"
                - "Log the end date and full price whenever you start a trial"
                - "Check the trial log for anything ending this week @recurring(weekly:sun)"
                - "Cancel trials you are unsure about while access continues"
            - name: Quarterly cost-per-use check
              description: |-
                ## Purpose
                A subscription that was good value in January can be dead weight by April, because habits change faster than billing. Once a quarter, dividing each subscription's cost by the number of times it was used gives a cost per use that makes the weak ones obvious: a service costing 15 a month and opened twice costs 7.50 a go.

                ## Milestones
                1. A cost-per-use limit chosen, above which a subscription gets reviewed.
                2. Usage for each subscription counted for the last quarter from app history or account activity.
                3. A cost per use worked out for every subscription.
                4. Anything above the limit given a fresh verdict, with each quarter's figures kept side by side.

                ## Notes
                Start from the **Metrics log** template to keep each quarter's figures together, so a slow decline in use shows up before you have paid for a year of it.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Each quarter, every subscription has a recorded cost per use and anything above your limit has a new verdict."
                cadence: cyclic
              tasks:
                - "Choose a cost per use above which a subscription gets reviewed"
                - "Count each subscription's uses this quarter and divide its cost by them @recurring(quarterly)"
                - "Give any subscription over the limit a new verdict"
                - "Record the quarter's figures alongside the previous ones"
            - name: Yearly full subscription audit
              description: |-
                ## Purpose
                Monthly scans catch new charges but rarely question the old faithfuls, the ones you have paid for so long they feel like utilities. A full audit once a year repeats the twelve-month inventory and the verdicts from scratch, compares the total with last year and resets the ceiling.

                ## Milestones
                1. A fresh twelve-month inventory built and compared line by line with last year's.
                2. Every subscription, including long-standing ones, given a new verdict.
                3. The year's total subscription spend compared with the year before.
                4. The monthly ceiling confirmed or reset for the coming year.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Once a year, a full inventory and fresh verdicts are completed and the yearly total is compared with the previous year's."
                cadence: cyclic
              tasks:
                - "Pick a quiet month each year for the full audit"
                - "Rebuild the twelve-month subscription inventory from scratch @recurring(yearly)"
                - "Give every long-standing subscription a fresh verdict"
                - "Compare this year's total with last year's and reset the ceiling"
            - name: One-in, one-out rule for new subscriptions
              description: |-
                ## Purpose
                Cancelling ten subscriptions in a weekend is satisfying, and signing up to four new ones over the following year is normal. A one-in, one-out rule, where any new paid subscription means cancelling or downgrading one of similar cost, keeps the total steady without banning anything you genuinely want.

                ## Milestones
                1. The rule written down, including what counts as similar cost.
                2. A 48-hour wait agreed before any new paid subscription.
                3. Every new subscription in the last six months matched with one that was cancelled or downgraded.
                4. The number of paid subscriptions no higher in six months than today.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Six months after starting the rule, the number of paid subscriptions is no higher than today and each new one is paired with a cancellation."
                cadence: rolling
              tasks:
                - "Write down the one-in, one-out rule and what similar cost means"
                - "Wait 48 hours before starting any new paid subscription"
                - "Name the subscription that goes before confirming a new one"
                - "Count paid subscriptions after six months against today's number"
            - name: Subscription price rise watch
              description: |-
                ## Purpose
                Streaming, software and membership prices have been rising by 10 to 20 percent at a time, often announced in an email that looks like marketing. Catching each rise when it is announced, rather than when it lands, gives you the window some terms allow to cancel without penalty and a reason to re-run the verdict.

                ## Milestones
                1. A mail filter that flags emails mentioning price changes from subscription services.
                2. Every announced rise recorded with old price, new price and start date.
                3. A fresh verdict made for each subscription whose price rose.
                4. Any right to leave without penalty after a price change used where wanted.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every subscription price rise in the year is logged with old and new price and a verdict recorded before the new price starts."
                cadence: rolling
              tasks:
                - "Set up a mail filter for the phrases price change, new price and plan update"
                - "Read flagged price change emails and log each rise @recurring(monthly:16)"
                - "Check whether the terms let you cancel without penalty after a rise"
                - "Make a keep or cancel call before each new price starts"
            - name: Streaming service rotation
              description: |-
                ## Purpose
                Few households watch more than one or two streaming services heavily at once, yet many pay for four or five all year. Rotating, keeping one or two at a time and switching each month to the one with the series you want, can halve the cost without losing anything you actually watch.

                ## Milestones
                1. Every streaming service the household pays for listed with its monthly price and renewal day.
                2. A household agreement on how many services to hold at once.
                3. A rotation order for the next six months, based on what each person wants to watch.
                4. Each switch made a few days before the renewal date so no month is paid twice.

                ## Notes
                Annual plans make rotation impossible, so move rotating services to monthly billing at their next renewal. Check whether cancelling loses watch lists or profiles you care about.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "The household holds no more than an agreed number of streaming services at once and the rotation is planned six months ahead."
                cadence: rolling
              tasks:
                - "List every streaming service with its price and renewal day"
                - "Agree how many services the household keeps at once"
                - "Plan which service to hold each month for the next six months"
                - "Cancel the outgoing service and start the next one @recurring(monthly:3)"
            - name: Shared and family plan membership check
              description: |-
                ## Purpose
                Family and group plans are good value only while every seat goes to someone who still uses it. Former partners, adult children who have left home, friends who moved on and old devices stay attached for years, and some can still buy things on your card. A quarterly look at who is on each shared plan keeps the seats and the access right.

                ## Milestones
                1. Every family or group plan listed with who holds each seat.
                2. Anyone who no longer uses a seat removed or asked to move to their own plan.
                3. Purchase approval switched on for shared members where the service allows it.
                4. A fair split of the cost agreed where friends or relatives outside the household share.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Each quarter, every family or group plan is checked and all seats belong to people who used them in the last three months."
                cadence: cyclic
              tasks:
                - "List everyone on each family and group plan you pay for"
                - "Remove members who no longer use their seat @recurring(quarterly)"
                - "Turn on purchase approval for shared members where it exists"
                - "Agree a split of the cost with anyone outside the household"
            - name: How auto-renewal and recurring card payments work
              description: |-
                ## Purpose
                Cancelling a direct debit or blocking a card does not always end a subscription: recurring card payments sit with the merchant, card updater services can pass a new card number on automatically, and the contract may still say you owe the money. Knowing how each payment route works tells you the reliable way to stop each one and what your bank can and cannot do.

                ## Milestones
                1. The difference between a direct debit, a recurring card payment and a platform subscription written in your own words.
                2. How card updater services carry subscriptions to a replacement card understood.
                3. Your bank's process for stopping a recurring card payment found and noted.
                4. Each subscription on the inventory labelled with its payment route.

                ## Notes
                In some countries you can tell your card issuer to stop a recurring card payment and they must do so. Cancel with the merchant as well, because the contract stays with them.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Every subscription on the inventory is labelled with its payment route and your bank's process for stopping card payments is noted."
                cadence: phased
                effort_hours_estimate: "2"
              tasks:
                - "Read your bank's help page on stopping recurring card payments"
                - "Find out whether your card issuer uses an automatic card updater"
                - "Label each subscription with its payment route"
                - "Note which subscriptions must be cancelled with the merchant, not the bank"
            - name: Spotting dark patterns in cancellation flows
              description: |-
                ## Purpose
                Many services make joining take one click and leaving take seven: a hidden cancel link, a guilt-laden confirmation, a pause offered as if it were cancellation, or a phone line open only in working hours. Recognising these tricks means you finish the process instead of abandoning it halfway, and know when a complaint to the regulator is justified.

                ## Milestones
                1. Six common cancellation tricks listed with an example of each.
                2. A habit of reading every button label on the final screen before clicking.
                3. Cancellation completed on at least two services that use these tricks.
                4. Any service that made leaving unreasonably hard noted for a complaint or review.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A written list of at least six cancellation tricks exists and two tricky cancellations have been completed with confirmation."
                cadence: phased
                effort_hours_estimate: "2"
              tasks:
                - "Write down the cancellation tricks you have run into before"
                - "Read a consumer group guide to subscription traps"
                - "Cancel one hard-to-leave service while noting each obstacle"
                - "Report an unreasonably hard cancellation to the consumer regulator"
            - name: Your rights when cancelling and renewing
              description: |-
                ## Purpose
                Consumer law in many countries gives a cooling-off period after signing up online, requires clear notice before renewals or price changes, and limits how hard a business can make leaving. The detail varies by country and by whether the service counts as digital content, so knowing your local rules turns a polite request into a firm one.

                ## Milestones
                1. The cooling-off period that applies to online sign-ups in your country found.
                2. Any rules on renewal reminders or easy cancellation noted.
                3. The consumer regulator and the free consumer advice service for your country identified.
                4. A one-page reference note saved for use in future disputes.

                ## Notes
                This is about knowing where to look, not legal advice. For a dispute worth real money, use your country's free consumer advice service before escalating.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A one-page note records your country's cooling-off period, renewal and cancellation rules, and the regulator and advice service to contact."
                cadence: phased
                effort_hours_estimate: "3"
              tasks:
                - "Look up the cooling-off rules for online contracts in your country"
                - "Check whether local rules require renewal reminders for subscriptions"
                - "Find the consumer regulator and the free consumer advice line"
                - "Save a one-page note of the rules in your cancellation folder"
            - name: Reading subscription terms before signing up
              description: |-
                ## Purpose
                The expensive surprises (minimum terms, annual contracts billed monthly, automatic upgrades after a trial, cancellation fees) all sit in the terms, usually in the sections on billing and termination. A five-minute read of those two sections before you pay prevents most of the problems this area exists to clean up.

                ## Milestones
                1. A five-question checklist for any new subscription written: billing date, minimum term, notice, cancellation route and price after any offer.
                2. Minimum terms and cancellation fees for current memberships found and recorded.
                3. The checklist used on the next three sign-ups.
                4. One planned sign-up changed or avoided because of something in the terms.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A written pre-sign-up checklist exists and has been used on at least three new subscriptions or memberships."
                cadence: phased
                effort_hours_estimate: "2"
              tasks:
                - "Write five questions to answer before any new subscription"
                - "Find the billing and termination sections in one current membership's terms"
                - "Record minimum terms and cancellation fees on the inventory"
                - "Run the checklist on the next subscription you consider"
            - name: Understanding subscription tiers and plan types
              description: |-
                ## Purpose
                The same service may come in ad-supported, standard, premium, student, family, annual and bundled versions, and the gap between the cheapest and dearest can be fourfold. Knowing what each tier actually removes, such as picture quality, number of screens, downloads or ads, lets you pick the tier you need rather than the one the sign-up page nudges you towards.

                ## Milestones
                1. The plan options listed for your three most expensive subscriptions.
                2. What you lose by dropping each one a tier written down.
                3. Screen, device and download limits checked against how the household really uses them.
                4. Any subscription paying for features nobody uses moved to a cheaper tier.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Your three most expensive subscriptions each have their tiers compared and any unneeded premium tier has been dropped."
                cadence: phased
                effort_hours_estimate: "2"
              tasks:
                - "Open the plans page for your three most expensive subscriptions"
                - "Note what each lower tier takes away"
                - "Check how many screens and devices the household uses at once"
                - "Switch to a cheaper tier where nothing you use is lost"
            - name: Virtual cards and merchant controls
              description: |-
                ## Purpose
                Some banks and card providers let you create a separate card number for one merchant, set a spending limit on it or freeze it with a tap, and some apps list every merchant holding your card details. Used for trials and new subscriptions, these controls stop a forgotten service billing indefinitely and make it easy to see who can charge you.

                ## Milestones
                1. The card controls your bank and card providers offer checked and listed.
                2. A single-merchant or limited card set up for trials, if one is available.
                3. Any in-app list of merchants holding your card reviewed.
                4. A rule decided on which card new trials and subscriptions go on.

                ## Notes
                A frozen or deleted card number does not end the contract. Cancel with the merchant as well, or an unpaid balance may be passed to a collection agency.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Your available card controls are listed and a rule is written saying which card or virtual card new trials go on."
                cadence: phased
                effort_hours_estimate: "2"
              tasks:
                - "Check your banking apps for virtual card and merchant block options"
                - "Create a separate card or virtual number for free trials"
                - "Review any list of merchants storing your card details"
                - "Write down which card new trials and subscriptions must use"
            - name: Retention offers and how to ask for them
              description: |-
                ## Purpose
                Many subscriptions, especially news, software, gyms and streaming, have a retention team or a cancellation screen with a discount for people about to leave. Knowing when to ask and what to say can cut a price by a third or more on subscriptions you would otherwise keep, and the worst outcome is the cancellation you were about to make anyway.

                ## Milestones
                1. Subscriptions you would keep only at a lower price identified.
                2. A short script prepared for asking about loyalty or retention prices.
                3. At least two retention conversations or cancellation flows tried.
                4. Any discount won added to the trial and promotions log with its end date.

                ## Notes
                Only ask when you are genuinely willing to leave. A discount on something you do not use is still money spent.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Two subscriptions have been through a retention request, with outcomes and any new price end dates recorded."
                cadence: phased
                effort_hours_estimate: "2"
              tasks:
                - "Mark subscriptions you would keep only at a lower price"
                - "Ask the agent to draft a short, polite retention request script"
                - "Start the cancellation flow on one service to see what it offers"
                - "Log any discount won with its end date and the full price after"
            - name: Annual or monthly billing for each keeper
              description: |-
                ## Purpose
                Paying yearly often saves 15 to 20 percent, but only on subscriptions you are sure to use for the full year, and it locks money in if your circumstances change. Deciding subscription by subscription, using a year of usage history, gets the discount where it is safe and keeps flexibility where it is not.

                ## Milestones
                1. Annual and monthly prices compared for every subscription marked keep.
                2. Each keeper rated on how certain you are to use it all year.
                3. A billing choice recorded for each, with the saving or the reason for staying monthly.
                4. Switches to annual timed for the next renewal date, not mid-term.
              priority: medium
              deadlineOffsetDays: 60
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "Every subscription marked keep has a recorded monthly or annual billing choice with the yearly saving or flexibility reason noted."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Find the annual price for each subscription you are keeping"
                - "Rate how sure you are to use each one for twelve months"
                - "Choose annual billing only where the saving and certainty are both high"
                - "Switch to annual at the next renewal date rather than mid-term"
            - name: Bundles versus separate subscriptions
              description: |-
                ## Purpose
                Bundles that combine streaming, music, storage or shopping perks look cheaper, but they only save money if you would pay for most of the parts anyway, and they make it harder to drop one piece. Pricing each part separately and marking which you actually use shows whether a bundle earns its price.

                ## Milestones
                1. Every bundle or combined plan you pay for listed with its parts.
                2. The standalone price of each part found.
                3. Each part marked as used or unused in the last three months.
                4. A decision recorded to keep the bundle, split it up or drop it.

                ## Notes
                Bundles sold with a phone or broadband contract belong with contract switching. This project covers bundles sold by the services themselves.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "Each bundle has a written comparison of its price against the parts you use and a keep, split or drop decision."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "List each bundle you pay for and what it includes"
                - "Look up what each part costs on its own"
                - "Mark which parts anyone used in the last three months"
                - "Decide whether to keep, split or drop each bundle"
            - name: Free and library alternatives swap
              description: |-
                ## Purpose
                Public libraries in many places lend ebooks, audiobooks, magazines, films and even online courses through free apps, and many paid apps have a capable free version. Testing the free option for a month before cancelling a paid one shows whether the swap holds, without giving anything up blind.

                ## Milestones
                1. A library card obtained and the library's free apps installed.
                2. Each paid reading, audio, news or learning subscription matched with a free alternative where one exists.
                3. One free alternative used for a full month in place of the paid service.
                4. Paid services that the free option fully replaced cancelled.
              priority: low
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "At least one paid subscription has been replaced by a free or library alternative after a one-month trial of the swap."
                cadence: phased
                effort_hours_estimate: "3"
              tasks:
                - "Join your local library online or in person"
                - "Install the library's ebook, audiobook and magazine apps"
                - "Match each paid media subscription with a free option"
                - "Use one free alternative for a month before cancelling the paid one"
            - name: Gym membership keep, freeze or switch
              description: |-
                ## Purpose
                Gym memberships are among the most underused subscriptions, and they often carry minimum terms, notice periods and joining fees that make leaving costly if left late. Logging visits for a month and comparing cost per visit with off-peak, pay-as-you-go and freeze options gives a clear answer before the next notice deadline.

                ## Milestones
                1. The contract's minimum term, notice period and freeze rules found.
                2. Visits logged for four weeks.
                3. Cost per visit compared with off-peak, pay-as-you-go and class pass options.
                4. A keep, freeze, downgrade or cancel decision acted on before the notice deadline.
              priority: medium
              deadlineOffsetDays: 45
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A gym decision based on four weeks of logged visits and cost per visit is made and actioned before the next notice deadline."
                cadence: phased
                effort_hours_estimate: "2"
              tasks:
                - "Find your gym contract's minimum term, notice period and freeze rules"
                - "Note every gym visit in your phone for the next four weeks"
                - "Compare cost per visit with off-peak and pay-as-you-go prices"
                - "Give notice or change plan before the notice deadline"
            - name: Cloud storage plans consolidated
              description: |-
                ## Purpose
                Photos, documents and backups spread across two or three cloud services, each with its own paid tier, are a common hidden duplicate, because phones, laptops and email providers each push their own. Choosing one main storage service and moving everything into it can end one or two monthly charges.

                ## Milestones
                1. Every paid cloud storage plan listed with size, price and what it holds.
                2. Total storage the household actually uses measured.
                3. One main service chosen that works with the household's devices.
                4. Files moved and checked before the other plans are cancelled.

                ## Notes
                Do not cancel a plan until you have opened a sample of the moved files from the new service. Some services delete data soon after a plan lapses.
              priority: low
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "All household files sit in one chosen cloud service and every other paid storage plan is cancelled, with no files lost."
                cadence: phased
                effort_hours_estimate: "5"
              tasks:
                - "List every paid cloud storage plan with its size and price"
                - "Check how much storage the household actually uses"
                - "Choose one main storage service for everyone"
                - "Move files across and open a sample before cancelling the others"
            - name: Software subscription or one-off licence
              description: |-
                ## Purpose
                Office suites, photo editors, antivirus and password managers are often sold both ways, and the subscription can cost more over three years than buying once, or less if it includes updates and storage you use. Working out the three-year cost of each option for the software you rely on settles which model makes sense.

                ## Milestones
                1. Each paid software subscription listed with what you use it for.
                2. A one-off, free or open-source alternative found for each, where one exists.
                3. Three-year cost compared for subscription and alternative.
                4. A decision recorded and any switch completed with files exported first.

                ## Notes
                Start from the **Purchase decision** template. Check file compatibility before switching; a cheaper tool that cannot open your files is no saving.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "Each paid software subscription has a recorded three-year cost comparison with an alternative and a keep or switch decision."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "List every software subscription and the task you use it for"
                - "Find a one-off or free alternative for each"
                - "Work out the three-year cost of each option"
                - "Export your files before switching any program"
            - name: All subscriptions moved onto one card
              description: |-
                ## Purpose
                Subscriptions scattered across three cards, a wallet and a partner's account are hard to review and easy to miss. Moving every subscription onto one nominated card, ideally one with good merchant controls, makes the monthly scan one statement long and shows the true total at a glance.

                ## Milestones
                1. One card chosen as the home for all subscriptions.
                2. Every subscription's payment method changed to that card.
                3. Old payment methods removed from each service's account.
                4. The monthly scan reduced to a single statement.
              priority: medium
              deadlineOffsetDays: 45
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Every subscription bills to one nominated card and no service still holds an old card or wallet as its payment method."
                cadence: phased
                effort_hours_estimate: "3"
              tasks:
                - "Choose the card that will carry every subscription"
                - "Update the payment method on each subscription account"
                - "Delete old stored cards from each service as you go"
                - "Check the next statement shows every subscription on the new card"
            - name: Refund requests for unwanted renewals
              description: |-
                ## Purpose
                Many services will refund an annual renewal you did not use if you ask within a few weeks, and app stores have their own refund request routes. Asking promptly and politely, with dates and evidence of non-use, recovers money that most people write off.

                ## Milestones
                1. Every unwanted renewal in the last 60 days identified.
                2. The refund policy for each service and platform checked.
                3. Refund requests sent with dates and usage evidence.
                4. Each outcome recorded, with refunds confirmed on the statement.
              priority: medium
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "Every unwanted renewal from the last 60 days has had a refund request sent and its outcome recorded."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Find renewals in the last 60 days you did not mean to keep"
                - "Check each service's refund policy and the app store's refund route"
                - "Send each refund request with the renewal date and evidence of non-use"
                - "Confirm refunds have reached your statement"
            - name: Pausing subscriptions before a long trip away
              description: |-
                ## Purpose
                Months travelling, a sabbatical, a long hospital stay or a work posting abroad leave subscriptions running that nobody can use, and some services do not work in other countries at all. A pause list prepared a month before you go suspends what can be paused, cancels what cannot and notes what to restart on your return.

                ## Milestones
                1. Every subscription marked as needed, pausable or cancellable for the time away.
                2. Services that work abroad checked for the countries you will be in.
                3. Pauses and cancellations made before departure, with end dates noted.
                4. A restart list ready for the week you come back.
              priority: low
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "Before departure, every subscription is paused, cancelled or confirmed as needed, and a restart list exists for the return."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Mark each subscription as needed, pausable or cancellable while away"
                - "Check which services work in the countries you will visit"
                - "Pause or cancel subscriptions a week before you leave"
                - "Write a restart list with the date you plan to use it"
            - name: Gift subscriptions and memberships received
              description: |-
                ## Purpose
                A gift subscription, magazine, box or museum membership often asks for your card at activation and then renews at full price after the gifted period. Recording the end date of every gift as it arrives means you choose whether to carry it on yourself, rather than finding out from your statement.

                ## Milestones
                1. Every gifted subscription or membership listed with its end date.
                2. Any card added during activation noted on the inventory.
                3. Auto-renewal switched off where you do not want to continue.
                4. A keep or end decision made before each gift period runs out.
              priority: low
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "Each gift subscription is logged with its end date and has auto-renewal off unless you chose to continue it."
                cadence: one-shot
                effort_hours_estimate: "1"
              tasks:
                - "List every gift subscription or membership you received this year"
                - "Note the end date and whether a card was taken at activation"
                - "Turn off auto-renewal on gifts you do not want to fund yourself"
                - "Add each gift's end date to the trial and promotions log"
            - name: Moving house subscription changeover
              description: |-
                ## Purpose
                Meal kits, veg boxes, wine clubs, local gym memberships and magazine deliveries all depend on your address, and a move is when they start delivering to the wrong door or charging for a club you can no longer reach. Working through address-tied subscriptions a few weeks before moving day decides which to move, which to end and which to restart near the new home.

                ## Milestones
                1. Every subscription and membership tied to your address listed.
                2. A move, end or restart decision recorded for each.
                3. Delivery addresses changed at least a week before moving day.
                4. Local memberships near the old home ended within their notice periods.

                ## Notes
                Start from the **Operational checklist** template to keep moving-day subscription tasks in one list. Energy, water and broadband moves belong with your household bills and contracts.
              priority: medium
              deadlineOffsetDays: 45
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "Every address-tied subscription and membership is moved, ended or restarted, with no deliveries to the old address after moving day."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "List every delivery box, club and local membership tied to your address"
                - "Check notice periods for memberships near the old home"
                - "Change delivery addresses at least a week before moving day"
                - "Look for a cheaper local equivalent near the new home"
            - name: Sports streaming for one season
              description: |-
                ## Purpose
                Sports rights are split across several services, and fans often pay for all of them year round to follow a competition that runs for a few months. Mapping which service shows which fixtures, and subscribing only for the months that matter, can save a large share of the yearly cost.

                ## Milestones
                1. Each competition you follow matched to the services that broadcast it.
                2. Season start and end dates noted.
                3. Monthly passes or short-term plans compared with annual ones.
                4. Subscriptions started at the season's start and cancelled at its end.
              priority: low
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "Sports subscriptions are held only for the months your competitions run, with start and cancel dates set for this season."
                cadence: one-shot
                effort_hours_estimate: "1"
              tasks:
                - "List the competitions you follow and which services show them"
                - "Note each season's start and end dates"
                - "Compare monthly passes with annual plans for each service"
                - "Set a reminder to cancel the day after the last fixture you care about"
            - name: Sale-season and new-year sign-up guard
              description: |-
                ## Purpose
                Late-year sales and the new-year resolution season bring the biggest wave of discounted trials and memberships: cheap first months of fitness apps, meal kits, language courses and shopping memberships. Setting a rule before the season starts, and reviewing every sign-up in early February, catches the impulse ones before they settle into full price.

                ## Milestones
                1. A personal rule written for discounted sign-ups during sale season.
                2. Every new subscription started between November and January logged.
                3. Each one reviewed in early February against how much it was used.
                4. Unused new-season subscriptions cancelled before their first full-price charge.
              priority: low
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "Every subscription started in sale season is reviewed by mid-February and the unused ones are cancelled before full price."
                cadence: cyclic
              tasks:
                - "Write your rule for discounted sign-ups before sale season starts"
                - "Log every subscription you start between November and January"
                - "Review all new-season sign-ups against how much each was used @recurring(yearly)"
                - "Cancel unused ones before their first full-price charge"
            - name: Student discounts that end at graduation
              description: |-
                ## Purpose
                Student plans for music, software, news and shopping memberships cost a fraction of the full price, and most convert automatically when verification lapses or a year after graduation. Knowing which discounts you hold and when each ends means you choose what to keep at full price instead of discovering it after your first graduate payday.

                ## Milestones
                1. Every student-rate subscription listed with its verification renewal date.
                2. The full price after the discount recorded for each.
                3. Free software and services already provided by your university or college identified.
                4. A keep or cancel decision made before each discount ends.

                ## Notes
                Check what your institution already pays for, such as office software, cloud storage or news access, before paying for a student plan of the same thing.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Every student-rate subscription is listed with its end date and full price, and each has a decision before the discount ends."
                cadence: phased
                effort_hours_estimate: "1"
              tasks:
                - "List every subscription you pay at a student rate"
                - "Find the verification date and full price for each one"
                - "Check which software your university or college already provides free"
                - "Re-check student verification dates and full prices @recurring(yearly)"
            - name: Children's app, game and in-app purchase controls
              description: |-
                ## Purpose
                Game passes, in-game currency, kids' streaming profiles and app subscriptions started on a child's tablet add up quickly and are often billed to a parent's card through the family app store account. Setting purchase approval, checking purchase history monthly and agreeing an allowance with older children keeps spending deliberate and avoids awkward surprises.

                ## Milestones
                1. Purchase approval or a password required on every child's device and account.
                2. The last six months of in-app and game purchases reviewed.
                3. A monthly game and app allowance agreed with children old enough to understand it.
                4. Unwanted subscriptions on children's accounts cancelled.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every child's device requires parent approval for purchases and the family purchase history is checked each month."
                cadence: rolling
              tasks:
                - "Turn on purchase approval for each child's account"
                - "Review six months of in-app and game purchases"
                - "Agree a monthly game and app allowance with older children"
                - "Check the family purchase history for new charges @recurring(monthly:12)"
            - name: Merging subscriptions when moving in together
              description: |-
                ## Purpose
                Two people moving in together often bring two of everything: two streaming accounts, two music plans, two cloud storage plans and two warehouse club cards. Merging onto shared or family plans and agreeing who pays for what can save a noticeable sum each month, provided you also agree what happens to shared accounts if you separate.

                ## Milestones
                1. Both partners' subscriptions listed side by side.
                2. Duplicates identified and one of each chosen to keep, on a shared or family plan where possible.
                3. An agreement on whose card each shared subscription uses and how the cost is split.
                4. The other duplicates cancelled with confirmation.
              priority: low
              deadlineOffsetDays: 60
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "No duplicate subscriptions remain across the couple and each shared one has an agreed payer and cost split."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Put both partners' subscription lists side by side"
                - "Mark every service you both pay for"
                - "Agree which account and card each shared service stays on"
                - "Cancel the duplicate accounts and save the confirmations"
            - name: Helping an older relative clear unwanted subscriptions
              description: |-
                ## Purpose
                Older people are often signed up to subscriptions that are hard to spot: mail-order clubs, magazines, charity lotteries, premium phone services and paid apps added on a tablet. Going through their statements together, with their agreement and at their pace, finds what they no longer want, and a quarterly check stops new ones taking hold.

                ## Milestones
                1. Your relative's agreement to review their subscriptions together, and how involved they want you to be.
                2. Three months of statements gone through with them and each regular payment explained.
                3. Unwanted subscriptions cancelled with them present or with their written authority.
                4. A quarterly check agreed and the first date set.

                ## Notes
                Respect their choices: some regular payments they will want to keep. If you find payments they do not recognise at all, raise them with their bank rather than the merchant.
              priority: medium
              frontmatter:
                mode: service
                output_kind: deliverable
                success_criteria: "Your relative's subscriptions have been reviewed with them, unwanted ones cancelled, and a quarterly check is in the diary."
                cadence: cyclic
              tasks:
                - "Ask your relative how they would like you to help with their payments"
                - "Go through three months of their statements together"
                - "Cancel what they no longer want while they are with you"
                - "Check their statements with them for new subscriptions @recurring(quarterly)"
            - name: Cancelling subscriptions after a death
              description: |-
                ## Purpose
                When someone dies, their subscriptions and memberships keep charging until someone tells each provider, and stopping their cards does not always end them. A list built from their statements, email and post, worked through with a copy of the death certificate, closes them in an orderly way and may bring refunds of prepaid fees.

                ## Milestones
                1. A list of the person's subscriptions and memberships built from statements, post and email.
                2. Each provider notified, using a bereavement notification service where one exists.
                3. Refunds of prepaid annual fees requested where terms allow.
                4. Shared family plans and photo or cloud accounts dealt with deliberately, with anything precious saved first.

                ## Notes
                Go gently and in stages. Save photos and messages from cloud and phone accounts before closing them, and check each service's process for closing or memorialising an account.
              priority: high
              deadlineOffsetDays: 90
              frontmatter:
                mode: service
                output_kind: deliverable
                success_criteria: "Every subscription and membership in the person's name is cancelled or transferred, with refund requests made for prepaid fees."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Gather the person's recent bank and card statements"
                - "List every subscription and membership in their name"
                - "Save photos and files from their cloud accounts before closing anything"
                - "Notify each provider with a copy of the death certificate"
            - name: Freelancer software and tools subscription review
              description: |-
                ## Purpose
                Self-employed people often run a dozen tools at once: accounting, design, scheduling, storage, website hosting, stock libraries and AI assistants, many on plans sized for a project that has ended. Reviewing them each quarter against current work, and keeping business and personal subscriptions on separate cards, cuts waste and gives your accountant clean records.

                ## Milestones
                1. Every work tool and service listed with its plan, seats and price.
                2. Seats and tiers matched to current clients and projects.
                3. Business subscriptions moved to a separate business card or account.
                4. Receipts for each business subscription saved for your bookkeeping.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every work subscription is on the business card with receipts saved, and its plan is checked against current work each quarter."
                cadence: cyclic
              tasks:
                - "List every work tool with its plan, seats and price"
                - "Downgrade tools sized for projects that have ended"
                - "Move work subscriptions to the business card"
                - "Match each work subscription to current projects @recurring(quarterly)"
            - name: Emergency cut list for a sudden income drop
              description: |-
                ## Purpose
                If income falls suddenly through job loss, illness or a quiet spell in a business, cutting subscriptions is one of the quickest savings available, but deciding what to cut while stressed is hard. A ready-made list, ranked from first to cut to last, with pause options noted, lets you act in an afternoon.

                ## Milestones
                1. Every subscription ranked from first to cut to last to cut.
                2. Pause, downgrade and cancellation options noted for each.
                3. The monthly saving at each stage of cutting worked out.
                4. The list saved where you or a partner can find it quickly.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A ranked emergency cut list exists with the monthly saving at each stage and the pause or cancel route for each subscription."
                cadence: one-shot
                effort_hours_estimate: "1"
              tasks:
                - "Rank every subscription from first to cut to last"
                - "Note which ones can be paused rather than cancelled"
                - "Work out the monthly saving at the first, second and third stage of cuts"
                - "Save the list somewhere a partner can find it"
            - name: Subscription tracker with renewal forecasting
              description: |-
                ## Purpose
                Once the clean-up is done, a single tracker with next charge date, price, billing cycle, payment card, login email and cancellation route for every subscription turns the whole area into a quick lookup. Adding a twelve-month forecast shows which months carry the heavy renewals, so you can set money aside for them in advance.

                ## Milestones
                1. A spreadsheet or app holding every subscription with next charge date, cycle, price, card and cancellation route.
                2. A twelve-month forecast showing subscription spend month by month.
                3. The heaviest renewal months flagged.
                4. The tracker updated each month after the statement scan.

                ## Notes
                Dedicated subscription tracking apps can help, but some read your bank data or email. Check exactly what access they ask for before connecting one.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A tracker holds every subscription with full details and a twelve-month forecast, and it was updated within the last month."
                cadence: rolling
              tasks:
                - "Set up the tracker with columns for date, cycle, price, card, login and cancel route"
                - "Add a month-by-month forecast for the next twelve months"
                - "Flag the two heaviest renewal months"
                - "Update the tracker after each monthly scan @recurring(monthly:28)"
            - name: Disputing charges after a failed cancellation
              description: |-
                ## Purpose
                When a merchant keeps charging after a clear cancellation, or makes cancelling impossible, the card issuer's dispute process is the backstop, and it works best with dates and proof. Learning the steps once, and using them on any charge that continues after a written cancellation, recovers money without endless calls to the merchant.

                ## Milestones
                1. Your card issuer's dispute process and time limits found and noted.
                2. The merchant contacted in writing first, with your cancellation proof attached.
                3. A dispute raised with the issuer for any charge the merchant will not refund.
                4. Each dispute's outcome and reference recorded.

                ## Notes
                Raise disputes promptly, because card schemes count time limits from the transaction date. Keep paying anything genuinely owed so the dispute stays about the charges after cancellation.
              priority: medium
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "Every charge taken after a documented cancellation has been refunded by the merchant or disputed with the card issuer, with references recorded."
                cadence: phased
                effort_hours_estimate: "2"
              tasks:
                - "Find your card issuer's dispute process and time limits"
                - "Write to the merchant with your cancellation proof and ask for a refund"
                - "Raise a dispute with your card issuer if the merchant refuses"
                - "Record each dispute's reference number and outcome"
            - name: Mobile bill third-party and premium charges
              description: |-
                ## Purpose
                Some subscriptions are billed straight to a mobile phone bill through carrier billing: games, competition entries, content clubs and premium text services, sometimes started by one tap on an advert. They hide among the itemised lines of the phone bill and never show as separate items on a bank statement. Barring third-party billing and glancing at the itemised bill monthly closes the gap.

                ## Milestones
                1. The last three itemised mobile bills checked for third-party or premium charges.
                2. Third-party and premium billing barred on every line that does not need it.
                3. Any unrecognised charge challenged with the network and the merchant.
                4. A monthly glance at the itemised bill in place.

                ## Notes
                Choosing a cheaper tariff belongs with phone and contract switching. This project is only about the charges riding on top of the tariff.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Third-party billing is barred on every mobile line in the household and no unrecognised premium charge appears for three months."
                cadence: rolling
              tasks:
                - "Download the last three itemised bills for every mobile line"
                - "Ask your network to bar third-party and premium-rate charges"
                - "Challenge any third-party charge you do not recognise"
                - "Scan the itemised mobile bill for third-party charges @recurring(monthly:19)"
            - name: Regular donations and creator memberships review
              description: |-
                ## Purpose
                Monthly gifts to charities, creator memberships, paid newsletters and crowdfunding pledges are subscriptions too, and they are the ones people feel worst about reviewing. A yearly look, deciding deliberately which causes and creators to keep supporting and at what level, keeps giving intentional rather than accidental.

                ## Milestones
                1. Every recurring donation, creator membership and paid newsletter listed with its amount.
                2. A yearly giving total compared with what you mean to give.
                3. Each one kept, changed or ended by choice.
                4. Charities told politely when a regular gift ends, where you want them to know.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "Every recurring donation and creator membership is reviewed once a year and the total matches a giving amount you chose."
                cadence: cyclic
              tasks:
                - "List every recurring donation, creator membership and paid newsletter"
                - "Decide a yearly total you want to give"
                - "Keep, change or end each one to fit that total"
                - "Review regular giving and creator memberships against the total @recurring(yearly)"
            - name: Closing accounts and removing stored cards after cancelling
              description: |-
                ## Purpose
                Cancelling a subscription usually leaves the account open, with your card, address and history stored, ready to restart with one click or to be exposed in a data breach. Deleting the account, or at least the stored payment details, for every service you have left shrinks the number of places that can charge you.

                ## Milestones
                1. Every cancelled service checked for a stored card and an open account.
                2. Stored payment details removed from each one.
                3. Account deletion requested where you will not return.
                4. Deleted and closed accounts marked on the inventory.
              priority: low
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "No cancelled service still holds your card details, and accounts you will not return to have deletion requests on record."
                cadence: phased
                effort_hours_estimate: "3"
              tasks:
                - "List every service cancelled in the last two years"
                - "Remove stored card details from each of those accounts"
                - "Request account deletion from services you will not use again"
                - "Mark each closed account on the inventory"
---

# Subscription Cleanup

This area is for anyone who suspects they pay for more subscriptions and memberships than they use, which is most people once they look. It starts with the foundations (a twelve-month inventory, the app store and wallet lists, annual renewals, live trials, a verdict on every line and a cancellation sprint), then the routines that stop charges creeping back, the skills that make signing up and cancelling safer, the decisions about tiers, bundles and billing, the events that disturb your subscriptions, the situations of students, parents, couples, carers and freelancers, and finally the specialist work of trackers, disputes and closed accounts.

What repeats is a monthly statement scan and renewal look-ahead, a weekly trial check, a monthly streaming switch, quarterly usage and shared-plan checks, and a yearly full audit. The Monthly budget and bills, Metrics log, Purchase decision and Operational checklist templates pair with the projects that name them. Installing adds all 50 projects as active, so archive the ones that are not for you yet.
