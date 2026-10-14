---
id: personal-finance.cost-of-living-squeeze-plan
name: Cost-of-Living Squeeze Plan
description: "A plan for when prices outrun pay: the monthly gap measured, priority bills protected, cuts aimed at the biggest rises, income boosts and support claimed, and reviews that keep the gap closing."
category: personal
version: 1.0.0
tags: [personal-finance, cost-of-living-squeeze-plan, everyone, inflation, price-rises, priority-bills, support-schemes, household-budget]
author: Aurum Technology
starter_structure:
  templates:
    - meeting-notes
    - monthly-budget-bills
    - metrics-log
    - risk-register
  pillars:
    - name: Personal Finance
      emoji: "💷"
      description: "The day-to-day money system: income, budget, bills, debt, savings buffers, insurance, tax and big purchases, run so that nothing surprises you and every pound has a job."
      pillarFrontmatter:
        review_cadence: monthly
      areas:
        - name: Cost-of-Living Squeeze Plan
          description: "Responding to rising prices with cost cuts, income boosts and support schemes when the household budget no longer stretches."
          projects:
            - name: Monthly squeeze gap figure
              description: |-
                ## Purpose
                Most households feel the squeeze long before they can put a number on it, and a vague sense of not having enough is hard to act on. Setting your essential monthly costs, at today's prices, against reliable take-home pay produces one figure: the monthly shortfall or the margin left. Every later decision in this area is sized against that figure, so it is worth an evening this week.

                ## Milestones
                1. Take-home pay for the last three months listed, with an average where it varies.
                2. Essential costs listed at the prices you pay now, not last year's.
                3. One monthly gap figure written down, as a shortfall or a margin.
                4. The figure shared with anyone else who pays into the household.

                ## Notes
                Use net pay after tax, pension and any deductions. Gross figures make the gap look smaller than it is.
              priority: high
              deadlineOffsetDays: 14
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A dated monthly gap figure, based on three months of take-home pay and current essential prices, is written at the top of the squeeze plan."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Download the last three months of payslips or income statements"
                - "List every essential cost at the price you pay today"
                - "Subtract essentials from average take-home pay to get the gap"
                - "Write the gap figure and today's date at the top of a squeeze plan note"
            - name: Twelve-month price rise log
              description: |-
                ## Purpose
                Price rises arrive as separate letters, emails and quietly bigger card payments, so few people know how far their fixed costs have climbed in total. Collecting every increase from the last twelve months, old price beside new, shows which bills moved most and which notices were never read. It also gives you evidence when you challenge a rise or ask for a pay review.

                ## Milestones
                1. Every bill and subscription compared with its price twelve months ago.
                2. Each increase recorded as an amount and a percentage.
                3. The total monthly increase across all bills worked out.
                4. The five biggest rises marked for action.

                ## Notes
                Check bank statements as well as letters. Some rises only show up as a larger direct debit with no notice you remember seeing.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: research
                output_kind: artifact
                success_criteria: "A log lists every regular bill with its price a year ago, its price now and the percentage change, with the total monthly increase calculated."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Search your email for the words price change, tariff and increase"
                - "Compare each direct debit now with the same month last year"
                - "Record old price, new price and percentage change for each bill"
                - "Ask the agent to rank the increases by their monthly cost"
            - name: Essential, important and optional cost sort
              description: |-
                ## Purpose
                When money is short, treating every outgoing as equally fixed leads to cutting the wrong things, such as falling behind on local tax to keep a streaming service. Sorting each line into essential, important or optional gives a clear order of what goes first and what is protected. Do it with the price rise log open so the sort reflects current prices.

                ## Milestones
                1. Every regular outgoing placed in one of three groups.
                2. Essentials defined as housing, energy, water, food, local tax, travel to work and minimum debt payments.
                3. Optional costs totalled to show the most that cuts alone could release.
                4. Any disagreement about a line settled and noted.
              priority: high
              deadlineOffsetDays: 14
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "Every regular outgoing is labelled essential, important or optional, and the optional total is written beside the monthly gap figure."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Copy every regular outgoing into one list"
                - "Mark each line essential, important or optional"
                - "Total the optional column to see what cuts could release"
                - "Settle with your household any lines that were disputed"
            - name: Priority bills list and payment order
              description: |-
                ## Purpose
                Some bills carry far heavier consequences when missed than others: housing costs can lead to eviction or repossession, unpaid local tax can go to enforcement agents, and energy arrears can mean a prepayment meter. Unsecured debts such as credit cards and catalogues matter, but the remedies against you are slower and narrower. A written payment order means that in a bad month you pay the right things first.

                ## Milestones
                1. Priority bills listed with amount, due date and the consequence of missing each one.
                2. Non-priority debts listed separately with their minimum payments.
                3. A payment order written for a month when not everything can be paid.
                4. The list kept with the squeeze plan where you can find it under stress.

                ## Notes
                Debt advisers call these priority debts. Rules differ by country, so ask a free debt advice service to confirm the order for your situation.
              priority: high
              deadlineOffsetDays: 14
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A written list separates priority bills from non-priority debts, states the consequence of missing each priority bill and sets a payment order."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "List housing, local tax, energy, water and any court fines as priority bills"
                - "List credit cards, loans, catalogues and buy now pay later separately"
                - "Note what happens if each priority bill is missed"
                - "Write the order you would pay in if money ran short"
            - name: Cash runway in weeks at the current gap
              description: |-
                ## Purpose
                Knowing that some savings exist is not the same as knowing how long they last. Dividing accessible cash by the monthly gap tells you how many weeks remain before a shortfall turns into arrears or borrowing, and that number decides how fast the rest of the plan has to move. A short runway is the signal to start the advice triggers and creditor calls first.

                ## Milestones
                1. Accessible cash listed, excluding money already promised to this month's bills.
                2. The runway worked out in weeks at the current gap.
                3. A date written down for when cash would run out if nothing changed.
                4. That date added to the calendar as a checkpoint.
              priority: high
              deadlineOffsetDays: 10
              frontmatter:
                mode: building
                output_kind: knowledge
                success_criteria: "The number of weeks accessible cash covers the current gap is written down, with a run-out date entered in the calendar."
                cadence: one-shot
                effort_hours_estimate: "1"
              tasks:
                - "Add up savings you can reach within a week without a penalty"
                - "Take off money already committed to this month's bills"
                - "Divide what remains by the monthly gap and convert it to weeks"
                - "Put the run-out date in your calendar as a checkpoint"
            - name: Household squeeze meeting and shared target
              description: |-
                ## Purpose
                A squeeze plan made by one person and imposed on everyone else rarely survives the first weekend. One sit-down with everyone who earns or spends, including older children where it fits, agrees the gap, a target for closing it and who is changing what. Keep it practical: numbers on the table, three decisions, a date to check back.

                ## Milestones
                1. Everyone who earns or spends in the household has seen the gap figure.
                2. A monthly target agreed for how much of the gap to close and by when.
                3. Each adult has named at least one change they will make.
                4. A check-back date set within four weeks.

                ## Notes
                Start from the **Meeting notes** template. Give children a concrete role, such as choosing two cheaper meals a week, rather than the full figures if those would worry them.
              priority: medium
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "Meeting notes record the agreed monthly target, at least one named change per adult and a check-back date within four weeks."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Pick a time this week when everyone can sit down for forty minutes"
                - "Bring the gap figure and the cost sort to the meeting"
                - "Agree a monthly target and each person's change"
                - "Write the decisions down and set the check-back date"
            - name: Fixed-price contract and renewal date map
              description: |-
                ## Purpose
                Fixed deals hide the squeeze until the day they end, when a mortgage, energy tariff, broadband or phone contract rolls onto a standard rate that can be far higher. Mapping every fixed price with its end date shows the payment shocks coming over the next two years and gives time to shop around before each one. Many contracts allow a penalty-free switch in the final weeks of the term.

                ## Milestones
                1. Every fixed-price contract listed with its end date and exit fee.
                2. The expected price after each deal ends written beside the current one.
                3. Any rise of more than ten percent flagged as a coming shock.
                4. Calendar reminders set sixty days before each end date.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A map lists every fixed-price contract with end date, exit fee and expected new price, with a reminder sixty days before each end date."
                cadence: rolling
              tasks:
                - "List every contract with a fixed price or a minimum term"
                - "Find the end date and exit fee on each account or statement"
                - "Estimate the price each one rolls onto when the deal ends"
                - "Check the map for deals ending within 60 days @recurring(monthly:1)"
            - name: Advice triggers written before you need them
              description: |-
                ## Purpose
                People in money trouble tend to wait until arrears pile up before calling a free debt adviser, when earlier contact keeps more options open. Writing your triggers down now, while you are calm, takes the decision out of a bad week: a missed priority bill, borrowing to pay for food, or a runway under four weeks. Each trigger points to a named free service you have already found.

                ## Milestones
                1. Three to five triggers written as plain conditions.
                2. Two free, regulated debt advice services found with phone numbers and opening hours.
                3. The triggers stored beside the priority bills list.
                4. Another adult in the household knows the triggers and where they are kept.

                ## Notes
                Use free, non-profit advice services. Be wary of firms that advertise debt help, charge upfront fees or cold-call you.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "Three to five written advice triggers sit beside the priority bills list, with contact details for two free debt advice services."
                cadence: one-shot
                effort_hours_estimate: "1"
              tasks:
                - "Write three conditions that would mean you call for advice"
                - "Find two free debt advice services and save their contact details"
                - "Store the triggers beside the priority bills list"
                - "Tell your partner or a trusted person where the triggers are kept"
            - name: One-page squeeze plan across cut, earn and claim
              description: |-
                ## Purpose
                Three levers close a cost-of-living gap: spending less, earning more and claiming support you are entitled to. Putting the chosen actions from each lever on one page, with the monthly amount each should release, shows whether the plan actually closes the gap or only feels busy. Pin it somewhere visible, because it is the page every later review updates.

                ## Milestones
                1. Actions listed under cut, earn and claim, each with an expected monthly amount.
                2. The total compared with the gap, with any remaining shortfall stated plainly.
                3. A revised monthly budget set at the new spending figures.
                4. The page dated and kept where the household can see it.

                ## Notes
                Start from the **Monthly budget and bills** template for the revised budget. Be conservative with income estimates until the money has actually arrived.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A dated one-page plan lists cut, earn and claim actions with monthly amounts, totals them against the gap and sits beside a revised budget."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Pick two actions under each of cut, earn and claim"
                - "Estimate the monthly amount each action will release"
                - "Compare the total with the gap and note what is still missing"
                - "Set up the revised monthly budget at the new figures"
            - name: Cost-of-living support screen
              description: |-
                ## Purpose
                Help with rising costs is spread across government benefits, one-off payments, local welfare funds, supplier hardship grants and reduced tariffs, and many eligible households claim none of it because they assume they earn too much. One screen through an independent benefits calculator and the main local and supplier sources takes about two hours, and either finds money or rules it out with confidence.

                ## Milestones
                1. An independent benefits calculator run with current income and housing costs.
                2. Energy and water suppliers' hardship fund pages checked.
                3. Your local council or municipality's household support and welfare funds checked.
                4. A list of everything worth claiming, with the first claim started.

                ## Notes
                Keep this a screen. Claims can take weeks to decide, so start the largest one first and keep the squeeze plan running meanwhile.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A written list of every support scheme the household may qualify for exists, with the largest claim submitted."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Run an independent online benefits calculator with this month's figures"
                - "Check energy and water suppliers' hardship fund pages"
                - "Search your local council's site for household support or welfare funds"
                - "Submit the largest claim the screen turned up"
            - name: Monthly squeeze gap recheck
              description: |-
                ## Purpose
                The gap moves every month as prices change, hours shift and cuts take effect, so a figure from January says little by April. A fifteen-minute recheck on the same day each month updates income, essential costs and the gap, and shows whether the plan is closing it. A gap that widens three months running is the cue to revisit the levers.

                ## Milestones
                1. The gap recalculated on a fixed day each month.
                2. Each month's figure recorded in one running list.
                3. A three-month trend visible at a glance.
                4. Every month where the gap widened followed by a named change.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "The running list shows a recalculated gap figure for each of the last three months, with a named change after any month it widened."
                cadence: rolling
              tasks:
                - "Choose a day each month that falls just after payday"
                - "Update income and essential costs with this month's figures @recurring(monthly:3)"
                - "Add the new gap figure to the running list"
                - "Name one change whenever the gap has widened for two months"
            - name: Weekly fixed-basket price watch
              description: |-
                ## Purpose
                Headline inflation figures average across a basket that may look nothing like your shop. Tracking the price of the same fifteen items you actually buy, at the same shop each week, shows which staples are climbing fastest and when a switch of brand or store pays off. Within two months you will know your own food inflation, not the national one.

                ## Milestones
                1. A basket of fifteen regularly bought items chosen and written down.
                2. Prices recorded weekly at the same shop for at least eight weeks.
                3. The three fastest-rising items identified.
                4. A cheaper alternative tested for each of those three.

                ## Notes
                Start from the **Metrics log** template. Record the price per kilo or litre so a change in pack size cannot hide a rise.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Eight weeks of weekly prices for a fifteen-item basket are logged, with the three fastest risers named and an alternative tried for each."
                cadence: rolling
              tasks:
                - "List the fifteen items you buy most weeks"
                - "Record the price per kilo or litre of each basket item @recurring(weekly:sat)"
                - "Mark the three items rising fastest after eight weeks"
                - "Try a cheaper brand or shop for each of the three"
            - name: Price rise notice response routine
              description: |-
                ## Purpose
                Every price rise notice is a decision point, and the window to act is often short: many contracts let you leave without an exit fee within a set period after a mid-contract rise is announced. A standing routine for each notice, read, compare, call and decide, turns a pile of ignored letters into a monthly habit that stops bills drifting up unchallenged.

                ## Milestones
                1. One folder or inbox label where every price notice is filed.
                2. Each notice answered within its exit window with a recorded decision to accept, negotiate or leave.
                3. Decisions logged with the old and new price.
                4. No notice older than a month left unread.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every price notice received in the last three months is filed with a recorded decision made inside its exit window."
                cadence: rolling
              tasks:
                - "Create one folder or email label for price change notices"
                - "Sweep post and email for new price notices and file them @recurring(monthly:12)"
                - "Note the exit window on each notice before it closes"
                - "Log your decision and the new price beside each notice"
            - name: Sunday balance check against the squeeze budget
              description: |-
                ## Purpose
                Monthly budgets break in the second and third weeks, when the food shop and fuel run ahead of plan and nobody notices until payday. A ten-minute check every Sunday of the bank balance against what should be left at that point catches overspending while there is still time to adjust. It is the check that keeps a tight plan from tipping into the overdraft.

                ## Milestones
                1. A target balance worked out for the end of each week of the month.
                2. The real balance compared with the target every Sunday.
                3. Any shortfall met by an agreed adjustment that same week.
                4. A full month finished without dipping below the planned balance.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Four consecutive Sunday checks are recorded, each comparing the real balance with that week's target and noting any adjustment."
                cadence: rolling
              tasks:
                - "Work out what your balance should be at the end of each week"
                - "Compare the bank balance with this week's target @recurring(weekly:sun)"
                - "Pick the line to trim whenever the balance is behind"
                - "Note the weeks you finished on or above target"
            - name: Monthly support and discount watch
              description: |-
                ## Purpose
                New support appears through the year as one-off payments, winter grants, local funds and supplier schemes, often with short application windows and little publicity. Checking a short list of sources each month means you hear about them while they are still open. Twenty minutes is enough once the sources are bookmarked.

                ## Milestones
                1. Five to eight sources bookmarked, such as your council, your suppliers and a national advice charity.
                2. Each source checked monthly and new schemes noted.
                3. Applications made within the window for anything that fits.
                4. A running list kept of what was claimed and what it was worth.

                ## Notes
                Scammers copy real support schemes. Apply only through the official site you bookmarked, never through a link in a text or email.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A bookmarked list of at least five sources is checked monthly, and a running list records each scheme applied for and its value."
                cadence: rolling
              tasks:
                - "Bookmark your council, suppliers and a national advice charity's news page"
                - "Check each bookmarked source for new support schemes @recurring(monthly:20)"
                - "Apply within the window for any scheme you fit"
                - "Record each award and its value in a running list"
            - name: Side income ledger and tax set-aside
              description: |-
                ## Purpose
                Extra income from shifts, selling, tutoring or gig work is one of the fastest levers, but it can create a tax bill or reduce benefits later if nobody is keeping score. A simple monthly ledger of every extra payment, with a percentage moved aside for tax, keeps the boost a boost. Base the set-aside rate on the tax authority's guidance or an adviser's view.

                ## Milestones
                1. A ledger recording date, source, amount and costs for every side payment.
                2. A set-aside percentage chosen and moved to a separate pot each month.
                3. The yearly total compared with any tax-free allowance or reporting threshold.
                4. Changes reported to any benefit you claim, where the rules require it.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "The ledger shows every side payment this year, and the tax pot holds the agreed percentage of side income received so far."
                cadence: rolling
              tasks:
                - "Open a separate savings pot for the tax set-aside"
                - "Start a ledger with date, source, amount and costs"
                - "Log side income and move the set-aside @recurring(monthly:27)"
                - "Compare the running total with your tax-free allowance at year end"
            - name: Quarterly provider renegotiation calls
              description: |-
                ## Purpose
                Providers keep their best prices for customers who ask, and a ten-minute call with a competitor's quote in hand often brings a bill down without switching at all. A quarterly round of calls on the two or three bills nearest renewal spreads the effort and keeps every major contract checked at least once a year.

                ## Milestones
                1. Two or three bills chosen each quarter, starting with those nearest renewal.
                2. A competitor quote noted for each before calling.
                3. Each call logged with the offer and what you accepted.
                4. Savings from the calls added up at the end of the year.

                ## Notes
                Ask for the retentions or loyalty team. Be ready to switch if the offer is weak, otherwise the call has no weight.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Four quarterly rounds of calls are logged over a year, each with competitor quotes, offers received and the yearly saving agreed."
                cadence: rolling
              tasks:
                - "Pick the two bills closest to their renewal date"
                - "Get a competitor quote for each before you call"
                - "Call providers with competitor quotes in hand @recurring(quarterly)"
                - "Log each offer and the yearly saving you agreed"
            - name: Grocery spend ceiling with a mid-month checkpoint
              description: |-
                ## Purpose
                Food is the essential cost people can flex most, and also the one that rises most quietly, one item at a time. Setting a monthly ceiling at today's prices, with a checkpoint halfway through the month, shows early whether you are on track and lets you switch to cheaper meals for the second half rather than running dry before payday.

                ## Milestones
                1. A monthly grocery ceiling set from the last two months of real spending.
                2. Spending checked against half the ceiling at mid-month.
                3. A list of five cheap fallback meals for months that run over.
                4. Three consecutive months finished within the ceiling.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Grocery spending has finished within the agreed monthly ceiling for three consecutive months, with each mid-month check recorded."
                cadence: rolling
              tasks:
                - "Add up the last two months of grocery spending"
                - "Set a monthly ceiling a little below that figure"
                - "Compare grocery spend so far with half the ceiling @recurring(monthly:15)"
                - "Write five fallback meals for months that run over"
            - name: Quarterly squeeze plan review
              description: |-
                ## Purpose
                Plans made in a crisis carry assumptions that go stale: a supplier lowers prices, a job adds hours, a support payment ends. Reviewing the whole one-page plan each quarter, lever by lever, retires actions that no longer pay and adds new ones before the gap widens again.

                ## Milestones
                1. Each action on the plan marked working, stalled or finished.
                2. The current gap compared with three months earlier.
                3. At least one stalled action replaced with a new one.
                4. The plan page redated and shared with the household.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "The one-page plan carries a review date from the last three months, with each action's status marked and stalled actions replaced."
                cadence: cyclic
              tasks:
                - "Mark each action on the plan as working, stalled or finished"
                - "Review the plan lever by lever and redate it @recurring(quarterly)"
                - "Replace one stalled action with something new"
                - "Share the updated page with everyone in the household"
            - name: Reading a price rise notice and your exit rights
              description: |-
                ## Purpose
                Price notices are written to be skimmed, yet they usually hold three things worth finding: the new price, the date it applies and whether the rise lets you leave without an exit fee. Learning to read one properly, and knowing the consumer rules on mid-contract rises where you live, turns each notice into a choice rather than a fact.

                ## Milestones
                1. Your consumer regulator's guidance on mid-contract price rises read.
                2. Three recent notices annotated with new price, start date and exit rights.
                3. A note of which contracts allow penalty-free exit after a rise.
                4. A short checklist written for reading future notices.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Three real price notices are annotated with new price, start date and exit rights, and a five-line reading checklist is saved."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Find your consumer regulator's guidance on mid-contract price rises"
                - "Pull out three recent price notices from post or email"
                - "Mark the new price, start date and exit terms on each"
                - "Write a five-line checklist for reading the next one"
            - name: How social tariffs and concession rates work
              description: |-
                ## Purpose
                Social tariffs and concession rates are cheaper versions of essential services for people on certain benefits or low incomes, covering broadband, water, energy and sometimes travel. Few are advertised, and each has its own eligibility test. Understanding how they work, and which apply to your household, can cut some bills sharply without changing what you use.

                ## Milestones
                1. A list of social tariffs and concession schemes offered where you live.
                2. Eligibility for each checked against your household's circumstances.
                3. Applications made for any you qualify for.
                4. Renewal or reconfirmation dates noted.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A list of local social tariffs and concessions exists with eligibility marked, and an application is made for each one the household qualifies for."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Search for social tariffs on broadband, water and energy where you live"
                - "Check eligibility for each against your benefits and income"
                - "Apply to every scheme your household qualifies for"
                - "Note any date when eligibility must be reconfirmed"
            - name: Which of your debts get dearer when rates rise
              description: |-
                ## Purpose
                Rising interest rates often travel alongside rising prices, and they hit some debts straight away while leaving others untouched until a deal ends. Sorting your borrowing into fixed and variable, with the rate each one follows, tells you which repayments could jump next month and which are safe until a known date.

                ## Milestones
                1. Every debt listed as fixed or variable, with its current rate.
                2. Variable debts linked to the rate they follow, such as a central bank base rate.
                3. The monthly cost of a one percentage point rise worked out for each variable debt.
                4. Fixed debts noted with the date their rate can change.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Every debt is listed as fixed or variable with its rate, and the monthly cost of a one point rise is shown for each variable one."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "List each loan, card, overdraft and mortgage with its interest rate"
                - "Check the terms to see which rates are fixed and which can move"
                - "Work out what a one point rise would add to each variable debt"
                - "Note the date each fixed rate ends"
            - name: The real cost of payment holidays and deferrals
              description: |-
                ## Purpose
                Lenders and some utilities offer payment holidays, reduced payments or deferrals when money is tight, and they can give real breathing room. They are not free: interest usually keeps running, the deferred amount is added back later, and some arrangements show on your credit file. Understanding the costs before you ask means you choose a deferral on purpose rather than in a panic.

                ## Milestones
                1. The terms of a payment holiday or reduced payment arrangement read for each relevant lender.
                2. The extra interest from a three-month deferral estimated.
                3. How each arrangement is reported to credit reference agencies checked.
                4. A written view of when a deferral would be worth it for your household.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "For each main lender, the extra interest and credit file effect of a three-month deferral are written down, with a note on when you would use one."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Read each lender's page on payment holidays or reduced payments"
                - "Ask one lender what a three-month deferral would add in interest"
                - "Check how the arrangement would be recorded on your credit file"
                - "Note when a deferral would be worth it and when it would not"
            - name: How official inflation compares with your own costs
              description: |-
                ## Purpose
                National inflation figures track an average household, and yours may sit well above or below it depending on how much goes on energy, food, rent or fuel. Learning how the official index is built, then setting your own spending shares beside it, explains why the published number can feel wrong and tells you which of your categories are pushing your costs up fastest.

                ## Milestones
                1. How the official consumer price index is built read in plain terms.
                2. Your spending shares by category compared with the official weights.
                3. An estimate of your own yearly price rise made from the price rise log.
                4. The difference from the official figure written down with its main cause.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A note compares your estimated yearly price rise with the official inflation figure and names the categories causing the difference."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Read the statistics office's plain guide to how inflation is measured"
                - "Compare your spending shares with the official category weights"
                - "Estimate your own yearly rise from the price rise log"
                - "Note the categories pushing your rate above or below the official one"
            - name: Spotting shrinkflation in your regular shop
              description: |-
                ## Purpose
                Shrinkflation is a price rise by another route: the pack gets smaller while the price stays put, so receipts look steady while the cost per portion climbs. Learning to check weight, count and unit price on the items you buy often catches the quiet rises, and points you to the brands that have not shrunk.

                ## Milestones
                1. Pack size and weight recorded for ten regularly bought items.
                2. Each item rechecked after three months for smaller packs.
                3. Any shrunk item compared on unit price with an alternative.
                4. A switch made for at least two items that shrank.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Pack sizes for ten items are recorded and rechecked after three months, with at least two shrunk items switched to better value options."
                cadence: phased
                effort_hours_estimate: "2"
              tasks:
                - "Photograph the weight or count on ten items you buy often"
                - "Recheck the same packs after three months"
                - "Compare unit prices for any item that shrank"
                - "Switch at least two shrunk items to a better value option"
            - name: Side income rules for tax and benefits
              description: |-
                ## Purpose
                Before taking on extra work, it helps to know how it will be treated. Many tax systems have small allowances for trading or rental income, above which you must register and report, and means-tested benefits often fall as earnings rise. Learning the rules that apply to you stops an extra few hundred a month turning into an unexpected bill.

                ## Milestones
                1. The tax authority's guidance on reporting extra or casual income read.
                2. Any tax-free allowance for small trading or rental income noted.
                3. The taper on any means-tested benefit you receive understood.
                4. A short note of the rules that apply, kept with the side income ledger.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A short written summary of the reporting rules, allowances and benefit taper that apply to your side income is kept with the ledger."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Read the tax authority's page on reporting extra income"
                - "Note any tax-free allowance for small trading or rental income"
                - "Find the earnings taper rate for any means-tested benefit you claim"
                - "Write a short summary of the rules beside your side income ledger"
            - name: Preparing a standard income and expenditure statement
              description: |-
                ## Purpose
                Creditors, debt advisers and hardship funds nearly all ask for the same thing: an income and expenditure statement in a standard format that shows what you can realistically pay. Preparing one before you need it, using the categories advisers use, means any conversation about reduced payments starts from figures a creditor will accept rather than numbers made up on the phone.

                ## Milestones
                1. The standard statement format used by free debt advisers found.
                2. Income, essential spending and debts entered using its categories.
                3. Each figure checked against bank statements for the last three months.
                4. A dated copy saved where you can send it quickly.

                ## Notes
                Creditors may question spending that looks high against the standard guidelines, so note the reason for any line well above them.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: artifact
                success_criteria: "A dated income and expenditure statement in a standard adviser format is saved, with every figure checked against three months of statements."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Find the standard statement format a free debt advice service uses"
                - "Ask the agent to fill a first draft from your squeeze budget"
                - "Check every figure against the last three months of bank statements"
                - "Save a dated copy you can email at short notice"
            - name: Cutting the three costs that rose most this year
              description: |-
                ## Purpose
                Cutting across the board spreads effort thinly; the biggest returns usually sit in the few bills that rose the most. Taking the top three from the price rise log and working each one hard, by switching, renegotiating, using less or stopping, often releases more than a dozen small trims put together.

                ## Milestones
                1. The three largest monthly increases taken from the price rise log.
                2. Options for each listed: switch, negotiate, use less or stop.
                3. One action taken on each of the three.
                4. The monthly saving from each recorded against the gap.
              priority: medium
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "An action has been taken on each of the three biggest price rises, with the monthly saving from each recorded against the gap."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Take the three biggest increases from the price rise log"
                - "List switch, negotiate, use less and stop options for each"
                - "Act on the best option for each of the three"
                - "Record the monthly saving and update the gap figure"
            - name: Pay rise request backed by price evidence
              description: |-
                ## Purpose
                If your pay has stood still while prices rose, you have taken a real-terms cut, and a well-prepared request is one of the few levers that raises income in every month that follows. Bringing evidence, what your role pays elsewhere, what you have delivered and how far prices have moved, keeps the conversation about facts rather than hardship.

                ## Milestones
                1. Market pay for your role gathered from at least three sources.
                2. Your results over the last year listed with numbers.
                3. A specific figure chosen to ask for, and the lowest you would accept.
                4. The meeting held and the outcome, or the next review date, recorded.

                ## Notes
                Lead with market pay and your results. Price evidence supports the case but rarely wins it alone.
              priority: medium
              deadlineOffsetDays: 60
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A pay conversation has been held using market data and a list of results, and the outcome or next review date is written down."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Gather pay data for your role from three job sites or salary surveys"
                - "List what you delivered this year with numbers where you can"
                - "Choose the figure you will ask for and the lowest you would accept"
                - "Book the conversation with your manager"
                - "Start preparing for the annual pay review a month ahead @recurring(yearly)"
            - name: Extra hours better-off calculation
              description: |-
                ## Purpose
                Extra shifts or overtime look like obvious money, but tax, social contributions, benefit tapers, travel and childcare can swallow much of it. Working out what an extra hour actually adds to take-home pay, after every cost, shows which extra work is worth doing and which only adds tiredness.

                ## Milestones
                1. Gross pay for the extra hours worked out.
                2. Tax, contributions and any benefit reduction deducted.
                3. Added travel, childcare and food costs deducted.
                4. A net hourly figure recorded and a decision made on the hours.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A net hourly figure for extra work, after tax, benefit reduction and added costs, is written down with a decision on how many hours to take."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Ask payroll how overtime is taxed in the month it is paid"
                - "Model the benefit reduction for the extra earnings, if you claim"
                - "Add the travel, childcare and food costs of the extra hours"
                - "Decide how many extra hours are worth it at the net rate"
            - name: Hybrid working request to cut commuting costs
              description: |-
                ## Purpose
                Commuting is often the third largest essential cost after housing and food, and every day worked from home saves fares or fuel, parking and bought lunches. A formal request for more home or hybrid days, framed around how the work gets done, can cut that cost by a fifth or more without touching pay.

                ## Milestones
                1. The full cost of one commuting day worked out, including food and parking.
                2. Your employer's flexible working policy read.
                3. A written request made, showing how the work will be covered.
                4. The outcome recorded and the monthly saving added to the plan.

                ## Notes
                Working from home adds some heating and power cost. Count it before you count the saving.
              priority: medium
              deadlineOffsetDays: 45
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A written flexible working request has been submitted and its outcome and net monthly saving are recorded in the squeeze plan."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Add up fares or fuel, parking and food for one commuting day"
                - "Read your employer's flexible working policy"
                - "Write the request explaining how your work will be covered"
                - "Record the outcome and the net monthly saving"
            - name: Savings, borrowing or cutting to cover the gap
              description: |-
                ## Purpose
                Any gap left after the first cuts has to be covered somehow, and the choice between running down savings, borrowing and cutting deeper has lasting consequences. Comparing the three for your situation, the interest cost, how long the gap will last and what is left if something else goes wrong, means you choose on purpose rather than drifting onto a credit card.

                ## Milestones
                1. The expected length of the gap estimated: weeks, months or open-ended.
                2. The cost of each option worked out over that period.
                3. The effect on your emergency buffer noted for each option.
                4. One approach chosen, with a limit, and written into the squeeze plan.

                ## Notes
                This is a household decision, not advice on any product. If borrowing to pay for essentials is on the table, speak to a free debt adviser first.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "The squeeze plan records which approach covers the remaining gap, the limit on it and the date it will be reviewed."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Estimate how long the gap is likely to last"
                - "Work out the interest cost of borrowing to cover it"
                - "Note how much buffer would be left if you used savings"
                - "Write the chosen approach and its limit into the squeeze plan"
            - name: Pension contribution pause decision with guidance
              description: |-
                ## Purpose
                Reducing pension contributions is one of the few ways to raise take-home pay at once, but it can also cost you employer contributions and tax relief worth more than what you keep. Getting the numbers and free, impartial guidance before changing anything means you know exactly what you would give up, and for how long.

                ## Milestones
                1. Your own and your employer's contribution rates written down.
                2. The employer contribution lost by pausing or reducing worked out.
                3. Free, impartial pension guidance consulted.
                4. A decision recorded, with a restart date if you paused.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A written decision on pension contributions exists, showing the employer contribution at stake and a restart date if contributions were paused."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Find your own and your employer's contribution rates on a payslip"
                - "Ask HR what the employer would stop paying if you reduced yours"
                - "Book a session with a free, impartial pension guidance service"
                - "Record the decision and the restart date if you pause"
            - name: Spare room or space income decision
              description: |-
                ## Purpose
                A spare room, driveway or garage can bring in steady income for little effort, through a lodger, parking rental or storage. Each comes with rules, from mortgage or tenancy permission to tax treatment and insurance, so a short decision exercise weighs the income against the loss of space and privacy before you advertise.

                ## Milestones
                1. The spaces you could let listed with realistic local prices.
                2. Permission from your lender, landlord or insurer checked for each.
                3. Tax treatment and any allowance for letting checked.
                4. A decision made on whether to let and on what terms.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A recorded decision on letting a room or space, with local price, permissions and tax treatment checked, is filed with the squeeze plan."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Look up local prices for a lodger room, parking space or storage"
                - "Ask your lender, landlord or insurer whether letting is allowed"
                - "Check whether a tax-free allowance applies to the letting income"
                - "Decide whether to go ahead and write down your terms"
            - name: Calling a creditor before a payment is missed
              description: |-
                ## Purpose
                Lenders and suppliers have far more options before an account falls into arrears than after, and most have hardship teams trained for exactly this call. Ringing early, with your income and expenditure statement and a realistic offer, often gets a reduced payment plan, a short pause or frozen charges, and keeps the conversation in your hands.

                ## Milestones
                1. The account most at risk of a missed payment identified.
                2. A realistic monthly offer worked out from your statement.
                3. The call made, with the name of the person and the agreement recorded.
                4. Written confirmation of the arrangement received.

                ## Notes
                If several creditors need calling, a free debt adviser can contact them on your behalf.
              priority: high
              deadlineOffsetDays: 14
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "An arrangement with the creditor most at risk is agreed before a payment is missed and confirmed in writing."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Pick the account most likely to fall behind next"
                - "Work out an offer you can keep up every month"
                - "Call the financial support team and note who you spoke to"
                - "Ask for the arrangement in writing and file it"
            - name: First full month on the squeeze budget
              description: |-
                ## Purpose
                The first month on a tighter budget is when the plan meets real life: the forgotten annual payment, the birthday, the week the car needs tyres. Treating it as a dated trial, with a short note each week and an honest review at the end, shows which figures were realistic and which need resetting before month two.

                ## Milestones
                1. A start date chosen to match payday.
                2. A short weekly note kept of what went over and why.
                3. A month-end review comparing planned and actual spending.
                4. Budget figures reset for month two where they missed.
              priority: medium
              deadlineOffsetDays: 45
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A month-end review compares planned and actual spending for the first squeeze month, and any line that missed by over ten percent is reset."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Set the start date for the next payday"
                - "Write a two-line note at the end of each week"
                - "Compare planned and actual spending at month end"
                - "Reset any figure that missed by more than ten percent"
            - name: Annual bill repricing month preparation
              description: |-
                ## Purpose
                In many countries a cluster of bills reprices at the same point each year, such as water, local taxes, phone contracts and energy price caps in the spring. Preparing a month ahead, by checking which bills will rise, by roughly how much, and which contracts allow you to leave, softens the jump and gives you time to act before the new prices land.

                ## Milestones
                1. The month when most of your bills reprice identified.
                2. Expected rises listed for each bill a month in advance.
                3. Exit rights or cheaper options checked for each rising bill.
                4. The budget updated with the new prices before they take effect.
              priority: medium
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A month before the main repricing month, expected rises are listed for each bill and the budget already reflects the new prices."
                cadence: cyclic
              tasks:
                - "Find the month when most of your bills change price"
                - "List the expected rise for each bill a month ahead @recurring(yearly)"
                - "Check exit rights or cheaper options for each rising bill"
                - "Update the budget with the new prices before they apply"
            - name: Winter heating cost plan
              description: |-
                ## Purpose
                Heating turns a manageable autumn budget into a stretched winter one, and spreading that cost is far easier when planned in late summer. Estimating winter energy use from last year's bills, checking winter support payments and deciding how to spread the cost avoids the shortfall that usually lands in January or February.

                ## Milestones
                1. Last winter's energy cost worked out from bills or meter readings.
                2. A monthly winter estimate set at current unit prices.
                3. Winter fuel or cold weather support checked for eligibility.
                4. A plan to spread the cost, such as a summer top-up, agreed.

                ## Notes
                Keep the home warm enough to stay well, especially with babies, older people or anyone unwell. Cutting heat too far can cost more in health than it saves.
              priority: medium
              frontmatter:
                mode: event
                output_kind: deliverable
                success_criteria: "Before autumn, a winter energy estimate at current prices is set and a top-up plan is running to cover it."
                cadence: cyclic
              tasks:
                - "Find last winter's energy bills or meter readings"
                - "Estimate this winter's cost at current unit prices"
                - "Check winter heating support schemes you might qualify for"
                - "Start a summer top-up for the winter energy bill @recurring(yearly)"
            - name: Back-to-school cost spike plan
              description: |-
                ## Purpose
                For parents, the weeks before a new school year bring uniform, shoes, bags, trips and sometimes devices all at once, landing in a month when other prices are already high. Making the list early, checking uniform grants and secondhand swaps, and spreading the cost from early summer stops it becoming a credit card month.

                ## Milestones
                1. A full list of start-of-year costs for each child.
                2. Uniform grants and secondhand uniform options checked.
                3. A monthly amount set aside from early summer.
                4. Everything bought without new borrowing.
              priority: low
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "All start-of-year school costs are listed and bought from money set aside, with no new borrowing."
                cadence: cyclic
              tasks:
                - "List uniform, shoes, bags, trips and equipment for each child"
                - "Ask the school and council about uniform grants"
                - "Find the school's secondhand uniform sale or swap"
                - "Set aside a monthly amount from early summer @recurring(yearly)"
            - name: Ninety-day squeeze plan review
              description: |-
                ## Purpose
                After three months the plan has a track record: you know which cuts held, which income moves paid and which support came through. A dated review at day 90 compares the gap then and now, decides whether to keep going, step up or ease off, and records what the household learned while it is fresh.

                ## Milestones
                1. The gap at the start compared with the gap at day 90.
                2. Each action rated on what it actually released.
                3. A decision recorded to continue, step up or ease off.
                4. Three lessons written down for any future squeeze.
              priority: medium
              deadlineOffsetDays: 100
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A written day-90 review compares the starting and current gap, rates each action and records the decision to continue, step up or ease off."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Pull the gap figures from the monthly recheck list"
                - "Rate each action by the money it actually released"
                - "Decide with the household whether to continue, step up or ease off"
                - "Write three lessons to keep with the plan"
            - name: Squeeze plan for a family with children
              description: |-
                ## Purpose
                Children's costs rise in lumps, with growth spurts, school trips and clubs, and parents often protect them by quietly going without themselves. A family version of the plan maps the children's costs separately, checks child-related support such as free school meals and holiday activity schemes, and decides together which extras stay and which pause for now.

                ## Milestones
                1. Each child's regular costs listed separately from the household's.
                2. Child-related support checked, such as free school meals and holiday food and activity schemes.
                3. Each club or activity marked keep, swap for a cheaper option or pause.
                4. Older children told what is changing in a way that fits their age.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A list of each child's costs exists with every activity marked keep, swap or pause, and child-related support has been checked."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "List each child's regular costs for a typical month"
                - "Check eligibility for free school meals and holiday activity schemes"
                - "Mark each club or activity as keep, swap or pause"
                - "Explain the changes to older children in plain terms"
            - name: Fixed retirement income squeeze plan
              description: |-
                ## Purpose
                Pensioners on a fixed income feel rising prices with no pay rise to catch up, although state pensions and some benefits are uprated each year. A retiree's version of the plan checks pension-age entitlements that are widely underclaimed, older people's concession rates, and how the yearly uprating compares with your own cost rises.

                ## Milestones
                1. Every pension and income source listed with its yearly uprating month.
                2. Pension-age benefits and concessions checked with a free advice service.
                3. Older people's discounts on travel, energy and local services claimed.
                4. The yearly uprating compared with your own price rises.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Each pension source is listed with its uprating month, a free benefits check has been done and eligible concessions are claimed."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "List each pension and the month it is uprated"
                - "Book a free benefits check with an older people's advice charity"
                - "Apply for travel, energy and local concessions you are eligible for"
                - "Compare the yearly uprating with your price rise log @recurring(yearly)"
            - name: Squeeze plan for living alone on one income
              description: |-
                ## Purpose
                Single households carry the full cost of rent, energy and broadband that couples split, so price rises bite harder per person. A plan for one focuses on single-person discounts, the fixed costs that could be shared or cut, and a small support network to lean on in a lean month.

                ## Milestones
                1. Single-person discounts on local tax and other bills checked and claimed.
                2. Fixed costs reviewed for sharing, such as a family phone plan or a lodger.
                3. A small cushion set for one-off costs, since there is no second income to absorb them.
                4. One or two people named who you could ask for practical help.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Single-person discounts are confirmed, at least one shared-cost option has been decided on and a monthly cushion is in place."
                cadence: phased
                effort_hours_estimate: "3"
              tasks:
                - "Check you are receiving any single occupancy discount on local tax"
                - "Look for fixed costs you could share with family or friends"
                - "Set a small monthly cushion for one-off costs"
                - "Re-check single-person discounts and shared deals each year @recurring(yearly)"
            - name: Housing cost options for renters in a squeeze
              description: |-
                ## Purpose
                Rent is usually the largest essential cost, and when it rises alongside everything else the gap can widen faster than any cut can close it. Laying out the options, housing support you may qualify for, negotiating a smaller increase, taking a lodger where allowed or moving somewhere cheaper, with the real cost of each, lets you decide before arrears start.

                ## Milestones
                1. Rent as a share of take-home pay worked out.
                2. Eligibility for housing support or a rent top-up checked.
                3. The full cost of moving, including deposit and fees, compared with staying.
                4. A decision recorded on which option to pursue.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A written comparison of staying, negotiating, letting a room and moving, with costs for each, ends in a recorded decision."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Work out rent as a percentage of take-home pay"
                - "Check whether you qualify for housing support or a rent top-up"
                - "Price a move including deposit, removals and overlapping rent"
                - "Record which housing option you will pursue"
            - name: Mortgage payment rise options for homeowners
              description: |-
                ## Purpose
                Homeowners coming off a cheap fixed rate can face a monthly jump of several hundred at the same time as other bills climb. Lenders have tools for this, such as term extensions, temporary interest-only periods or product switches, and each changes the total you pay. Gathering the options and their long-run cost before the rate changes, with a broker or adviser where needed, keeps the decision yours.

                ## Milestones
                1. The new monthly payment estimated from the date your current rate ends.
                2. Your lender's support options for borrowers under pressure listed.
                3. The long-run cost of each option worked out.
                4. A decision taken with your lender or an adviser before the rate changes.
              priority: high
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "Before the current rate ends, each payment option is compared on monthly and total cost and a decision is agreed with the lender or an adviser."
                cadence: phased
                effort_hours_estimate: "5"
              tasks:
                - "Find the date your current mortgage rate ends"
                - "Ask your lender for an estimate of the new monthly payment"
                - "Request details of term extension and interest-only options"
                - "Compare the total cost of each option before deciding"
            - name: Raising your prices when your own costs rise
              description: |-
                ## Purpose
                Self-employed people and sole traders are squeezed twice: household bills rise and so do materials, fuel and software, while prices to customers stay where they were. Reviewing what each job or hour actually costs you now and setting a price rise with notice to customers protects both the business margin and the household budget.

                ## Milestones
                1. Current costs per job or per hour worked out at today's prices.
                2. Margin now compared with a year ago.
                3. A new price list and an effective date set.
                4. Regular customers notified in writing with reasonable notice.
              priority: low
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A new price list based on current costs has an effective date, and every regular customer has been given written notice."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "List materials, fuel, software and insurance costs at today's prices"
                - "Work out your cost per job or per hour"
                - "Set the new price and the date it starts"
                - "Write to regular customers giving notice of the change"
                - "Review your prices against your costs @recurring(quarterly)"
            - name: Squeeze plan for households with disability or care costs
              description: |-
                ## Purpose
                Households where someone is disabled or cared for at home often face higher essential costs, such as extra heating, powered equipment, special diets and taxis, that cannot be cut without harm. A plan built for this protects those lines first, checks support aimed at these costs, and makes sure suppliers know about medical needs.

                ## Milestones
                1. Disability and care costs listed as protected lines in the budget.
                2. Disability-related benefits and grants checked with a specialist advice service.
                3. Suppliers' priority services registers joined where someone depends on power or water.
                4. Equipment running costs and any rebate schemes checked.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Care-related costs are marked as protected in the budget, a specialist benefits check is done and suppliers' priority registers are joined."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "List the costs that come from disability or care needs"
                - "Contact a disability advice charity for a benefits and grants check"
                - "Join your energy and water suppliers' priority services register"
                - "Check each year whether new grants or rebates apply @recurring(yearly)"
            - name: Stress test for a further 10 percent price rise
              description: |-
                ## Purpose
                Once the plan closes today's gap, the useful question is what happens if prices rise again or income dips. Running the budget with essentials another 10 percent higher, and again with one income 20 percent lower, shows how much headroom you have and which levers you would pull next, so the next shock is met with a list rather than panic.

                ## Milestones
                1. The budget rerun with essentials 10 percent higher.
                2. The budget rerun with one income 20 percent lower.
                3. Headroom or shortfall noted for each scenario.
                4. A ranked list of next responses for each shock.

                ## Notes
                Start from the **Risk register** template. Record each shock with its likelihood, its monthly cost and the first two responses.
              priority: low
              deadlineOffsetDays: 120
              frontmatter:
                mode: research
                output_kind: artifact
                success_criteria: "Two scenarios are modelled with their monthly headroom or shortfall, each with a ranked list of at least three responses."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Copy your current budget into a scenario sheet"
                - "Raise every essential line by 10 percent and note the new gap"
                - "Cut one income by 20 percent and note the result"
                - "Ask the agent to draft a ranked response list for each scenario"
            - name: Helping an older relative through the squeeze
              description: |-
                ## Purpose
                Older relatives living alone are among the least likely to switch tariffs, check concessions or claim pension-age support, and many will not ask for help. Sitting down with them, with their permission and at their pace, to go through bills, entitlements and scams posing as support payments can make a real difference to their winter.

                ## Milestones
                1. Their agreement to go through their bills together.
                2. Bills, concessions and pension-age support checked with them.
                3. Any changes made by them, or with their written permission.
                4. A follow-up call agreed each quarter.

                ## Notes
                Never take over their passwords or accounts. If they need ongoing help, look into formal arrangements such as a third-party bank mandate or a power of attorney.
              priority: low
              frontmatter:
                mode: service
                output_kind: deliverable
                success_criteria: "Your relative's bills and entitlements have been reviewed with them, any changes are made with their consent and quarterly calls are scheduled."
                cadence: phased
                effort_hours_estimate: "5"
              tasks:
                - "Ask your relative whether they would like help checking their bills"
                - "Go through their bills and entitlements together at their pace"
                - "Warn them about scams that pose as cost-of-living payments"
                - "Call them to check how the bills are going @recurring(quarterly)"
            - name: Exit plan for when the squeeze eases
              description: |-
                ## Purpose
                Squeezes end, through a pay rise, falling prices or a debt cleared, and the money freed tends to vanish into everyday spending within a month unless it already has a job. Deciding now where each freed amount goes, refilling savings used, clearing borrowing taken on, then restoring the cuts you missed most, turns the hard months into a stronger position.

                ## Milestones
                1. A list of signals that the squeeze is easing.
                2. An order agreed for using freed money: buffer, borrowing, then restored spending.
                3. The cuts worth keeping permanently marked.
                4. The exit order written into the one-page squeeze plan.
              priority: low
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "The one-page squeeze plan includes easing signals, an agreed order for using freed money and a list of cuts to keep."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Write down what would tell you the squeeze is easing"
                - "Agree the order for freed money, starting with savings and new borrowing"
                - "Mark the cuts you will keep after the squeeze"
                - "Add the exit order to the one-page squeeze plan"
---

# Cost-of-Living Squeeze Plan

This area is for any household where rising prices have opened a gap between what comes in and what the essentials now cost. It starts with the foundations (the gap figure, a price rise log, a priority bills order and the triggers for free advice), then the routines that keep the gap visible, the knowledge that makes price notices and deferrals less mysterious, and the decisions to cut, earn and claim. After that come dated checkpoints such as the first squeeze month, versions for families, retirees, people living alone, renters, homeowners, the self-employed and carers, and finally a stress test, help for an older relative and an exit plan.

The rhythm is a Sunday balance check and a Saturday basket price watch, monthly rechecks of the gap, price notices, grocery spend and new support on different days, quarterly renegotiation calls and plan reviews, and a yearly round for repricing month, winter heating and school costs. The Meeting notes, Monthly budget and bills, Metrics log and Risk register templates pair with the projects that name them. Installing adds all 50 projects as active, so archive the ones that are not for you yet.
