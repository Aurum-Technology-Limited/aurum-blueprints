---
id: personal-finance.mortgage-application-remortgage
name: Mortgage Application & Remortgage
description: "Your current deal and its end date on one page, a document pack lenders accept, deals compared on total cost, and every application, offer and switch-over handled before a fixed rate quietly ends."
category: personal
version: 1.0.0
tags: [personal-finance, mortgage-application-remortgage, homeowner, everyone, remortgage, fixed-rate, product-transfer, affordability]
author: Aurum Technology
starter_structure:
  templates:
    - monthly-budget-bills
    - vendor
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
        - name: Mortgage Application & Remortgage
          description: "Preparing for a mortgage or remortgage, comparing deals, gathering documents and timing the switch before a fixed rate ends."
          projects:
            - name: Current mortgage fact sheet
              description: |-
                ## Purpose
                Most homeowners could not say, without digging, their exact balance, rate, remaining term or account number, yet every remortgage conversation starts with exactly those figures. One page holding the lender, product name, rate, monthly payment, balance, term left, deal end date and exit charges turns a stressful phone call into a five-minute one. It also shows quickly whether you are close to a better loan-to-value band.

                ## Milestones
                1. Lender, account number, product name and rate type written on one page.
                2. Outstanding balance, monthly payment and remaining term copied from the latest statement or online account.
                3. Deal end date and any early repayment charge recorded with the date it falls away.
                4. The fact sheet saved where you and anyone you own the home with can find it.

                ## Notes
                Take figures from the lender's online account or latest annual statement, not memory. If there is more than one loan part, give each part its own line.
              priority: high
              deadlineOffsetDays: 14
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A dated one-page fact sheet lists lender, account number, rate, payment, balance, term left, deal end date and exit charges for every loan part."
                cadence: one-shot
                effort_hours_estimate: "1"
              tasks:
                - "Log in to your mortgage account and download the latest statement"
                - "Copy balance, rate, payment and remaining term onto one page"
                - "Add the deal end date and the date any exit charge falls away"
                - "Store the fact sheet in a shared household folder"
            - name: Fixed rate end date and switch window
              description: |-
                ## Purpose
                Lenders typically let you secure a new rate three to six months before a deal ends, and missing the date tips you onto the standard variable rate, which is often several points higher. Working back from the end date to the first day you can lock a new rate gives you a window in the calendar instead of a letter that arrives too late.

                ## Milestones
                1. The exact day the current deal ends confirmed with the lender.
                2. The earliest date your lender and the wider market allow a new rate to be secured noted.
                3. Calendar reminders set at six months, four months and six weeks before the end date.
                4. The lender's standard variable rate written beside your current rate so the cost of drifting is visible.

                ## Notes
                A product transfer can often be booked later than a full remortgage, because there is no new valuation or legal work. Plan to the earlier date anyway.
              priority: high
              deadlineOffsetDays: 14
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "The deal end date, the earliest booking date and three calendar reminders are in place, with the standard variable rate recorded beside the current rate."
                cadence: one-shot
                effort_hours_estimate: "1"
              tasks:
                - "Confirm the exact end date of your current deal with the lender"
                - "Ask how early the lender lets you book a new product"
                - "Set reminders at six months, four months and six weeks before the end"
                - "Write down the standard variable rate you would revert to"
            - name: Early repayment charge and exit fee check
              description: |-
                ## Purpose
                Leaving a deal a few weeks early can cost a percentage of the whole balance, while staying a few weeks too long costs the gap to the variable rate. Knowing the charge, the exact day it ends and any separate exit or deeds release fee lets you time a switch to the day rather than guessing.

                ## Milestones
                1. The early repayment charge percentage and amount for each remaining year written down.
                2. The precise date the charge stops applying confirmed in writing by the lender.
                3. Any exit, redemption administration or deeds release fee listed with its amount.
                4. A note of how much you may overpay each year without triggering the charge.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "The charge amount, its end date and every exit fee are recorded from the lender's own documents or written reply."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Find the early repayment charge table in your original mortgage offer"
                - "Ask the lender for a redemption statement showing charges and fees"
                - "Note the date the early repayment charge stops applying"
                - "Record the yearly overpayment allowance from the offer terms"
            - name: Property value and loan-to-value band estimate
              description: |-
                ## Purpose
                Your rate depends heavily on the loan-to-value band you fall into, and crossing from 76 to 75 percent or from 61 to 60 percent can cut the rate noticeably. A realistic value estimate, built from recent sold prices of similar homes nearby, shows which band you are in and how far you are from the next one down.

                ## Milestones
                1. Three to five recent sold prices for comparable homes on or near your street gathered.
                2. A cautious value estimate chosen, not the highest figure an online tool suggested.
                3. Current loan-to-value worked out as balance divided by estimated value.
                4. The balance needed to reach the next lower band noted, with the gap in money.

                ## Notes
                Lenders use their own valuer, so treat your figure as a planning number. Online estimates often run high for homes that have not been updated.
              priority: medium
              deadlineOffsetDays: 30
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A written value estimate based on at least three comparable sales, with current loan-to-value and the gap to the next band calculated."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Look up recent sold prices for similar homes within half a mile"
                - "Pick a cautious value from the comparable sales you found"
                - "Divide your balance by that value to get your loan-to-value"
                - "Work out how much lower the balance must be for the next band"
            - name: Lender-eye affordability snapshot
              description: |-
                ## Purpose
                Before a lender or broker runs the numbers, it helps to see your finances the way an underwriter will: gross income, regular commitments such as loans and childcare, and committed spending from bank statements. A snapshot built that way shows whether the loan you want is realistic and which commitments are holding the figure down.

                ## Milestones
                1. Gross annual income for each applicant listed, with any bonus, overtime or commission shown separately.
                2. Every credit commitment listed with its monthly payment and end date.
                3. Committed monthly outgoings such as childcare, travel and maintenance totalled.
                4. A rough borrowing range from two lenders' online calculators noted beside the snapshot.

                ## Notes
                Start from the **Monthly budget and bills** template. Lenders often treat variable pay more cautiously than basic salary, so keep it on its own line.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A one-page snapshot shows income by type, every commitment and committed outgoings, with borrowing estimates from two lender calculators."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "List each applicant's basic pay, bonus and overtime separately"
                - "Write down every loan, card and finance payment with its end date"
                - "Total childcare, travel and other committed monthly costs"
                - "Run the figures through two lenders' online affordability calculators"
            - name: Mortgage application document pack
              description: |-
                ## Purpose
                Underwriters routinely ask for photo ID, proof of address, three months of payslips, the latest annual tax summary and three months of bank statements, and applications stall for a week each time something is missing. Gathering the full pack before you apply, in clearly named files, means the first request is answered the same day.

                ## Milestones
                1. Photo ID and a recent proof of address scanned for every applicant.
                2. The last three payslips and the latest year-end tax summary saved as PDFs.
                3. Three months of complete statements for every current account saved, with every page included.
                4. Proof of deposit source or savings history saved, where buying.
                5. All files named by applicant, document and month in one folder.

                ## Notes
                Statements screenshotted from a banking app are often refused. Download the full PDF statement from the bank's website.
              priority: high
              deadlineOffsetDays: 45
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "One folder holds ID, proof of address, three payslips, a year-end tax summary and three months of full statements for each applicant, all clearly named."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Create a mortgage documents folder with a subfolder per applicant"
                - "Scan passports or driving licences and a recent utility bill"
                - "Download the last three payslips and the latest year-end tax form"
                - "Download three months of full PDF bank statements for every account"
            - name: Pre-application credit file and electoral roll check
              description: |-
                ## Purpose
                A lender sees your credit file, not your score, and a forgotten store card, a missing electoral roll entry or a financial link to an ex can be enough to decline or reprice an application. Reading all of the main agency files a couple of months before applying gives time to correct errors before anyone searches.

                ## Milestones
                1. Statutory or free reports downloaded from each main credit reference agency.
                2. Every account on each report matched to something you recognise.
                3. Electoral roll registration confirmed at your current address.
                4. Any wrong entry or stale financial association disputed in writing.

                ## Notes
                Corrections can take several weeks. Avoid applying for any other credit while you wait.
              priority: medium
              deadlineOffsetDays: 30
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "Reports from each main agency have been read in full, electoral roll registration confirmed and every error disputed with a dated record."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Download your free report from each main credit reference agency"
                - "Mark any account or address you do not recognise"
                - "Confirm you are on the electoral roll at your current address"
                - "Ask each agency to remove links to anyone you no longer share finances with"
            - name: Choosing a mortgage broker or going direct
              description: |-
                ## Purpose
                Brokers can see deals and lenders you cannot reach alone and handle the paperwork, but they differ in fees, panel size and whether they cover the whole market. Going direct or taking your lender's product transfer can be simpler for a straightforward case. Deciding this early, with fees and coverage written down, stops you drifting into whichever option calls first.

                ## Milestones
                1. Two or three brokers contacted and asked whether they search the whole market.
                2. Each broker's fee, when it is charged and whether it is refundable recorded.
                3. Your own lender's product transfer rate noted as the benchmark.
                4. A decision written down: broker, direct or product transfer, with the reason.

                ## Notes
                Start from the **Vendor** template. Check each broker on your financial regulator's public register before sharing documents.
              priority: high
              deadlineOffsetDays: 45
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A written decision on broker, direct application or product transfer, backed by the fees and market coverage of at least two brokers."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Ask friends or colleagues which mortgage broker they used and why"
                - "Check each shortlisted broker on the financial regulator's register"
                - "Ask each broker about fees, panel size and lender procuration fees"
                - "Record your choice and the reason in the vendor note"
            - name: Priorities brief for the next mortgage deal
              description: |-
                ## Purpose
                Deciding what matters before looking at rates prevents the cheapest headline from winning by default. A short brief covering how long you expect to stay, how much payment certainty you need, whether you plan to overpay or move, and whether any borrowing is needed gives a broker or lender something concrete to search against.

                ## Milestones
                1. Expected years in the home and any planned move written down.
                2. Your comfortable maximum monthly payment agreed with anyone you share the home with.
                3. Overpayment, porting and flexibility needs ranked by importance.
                4. Any extra borrowing or term change you want noted with the reason.
              priority: medium
              deadlineOffsetDays: 21
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A half-page brief states expected years in the home, a maximum payment, ranked flexibility needs and any borrowing change, agreed by all owners."
                cadence: one-shot
                effort_hours_estimate: "1"
              tasks:
                - "Write how many years you expect to stay in this home"
                - "Agree the highest monthly payment you would be comfortable with"
                - "Rank overpayments, porting and flexibility in order of importance"
                - "Share the brief with your broker or keep it beside your fact sheet"
            - name: Monthly mortgage payment and rate check
              description: |-
                ## Purpose
                Payments do change: a tracker moves with the central bank rate, a deal ends, or a lender recalculates after an overpayment. A two-minute check after each payment date confirms the right amount left the right account and catches a rate change before it becomes a surprise in the budget.

                ## Milestones
                1. The expected monthly payment written on the fact sheet.
                2. Each month's payment matched against the bank statement.
                3. Any change in amount traced to a rate change, overpayment or deal end.
                4. The household budget updated within a week of any payment change.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Each month's mortgage payment is checked against the expected figure, and any change is explained and reflected in the budget within a week."
                cadence: rolling
              tasks:
                - "Write the expected payment and payment date on your fact sheet"
                - "Check the mortgage payment left your account at the expected amount @recurring(monthly:3)"
                - "Ring the lender if a payment differs and you cannot explain why"
                - "Update the household budget after any payment change"
            - name: Annual mortgage statement review
              description: |-
                ## Purpose
                Once a year the lender sends a statement showing interest charged, capital repaid and the balance left, and most people file it unread. Reading it against your fact sheet confirms overpayments were applied, shows how much of the year's payments went on interest and keeps the end date and loan-to-value figures current.

                ## Milestones
                1. The annual statement downloaded and saved in the mortgage folder.
                2. Interest paid and capital repaid for the year recorded side by side.
                3. Every overpayment confirmed as applied to the balance.
                4. The fact sheet updated with the new balance and term left.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Each year's statement is saved, interest and capital repaid are recorded, overpayments are confirmed and the fact sheet carries the new balance."
                cadence: cyclic
              tasks:
                - "Find where your lender posts the annual mortgage statement"
                - "Read the annual statement and update the fact sheet @recurring(yearly)"
                - "Record interest paid and capital repaid for the year"
                - "Query any overpayment that does not appear on the statement"
            - name: Rate watch in the six months before a deal ends
              description: |-
                ## Purpose
                Rates move between the first reminder and the switch date, and many brokers will rebook a better rate if the market falls before completion. Checking best-buy tables and your lender's transfer rates on a fixed day each month during the window means you lock in early and still catch a later drop.

                ## Milestones
                1. A short list of comparison tables and your lender's rate page bookmarked.
                2. The best rate for your loan-to-value band and fix length recorded each month.
                3. A rate secured as soon as the window opens.
                4. The secured rate compared monthly with the market until completion.

                ## Notes
                Ask your broker or lender whether a secured rate can be swapped if a cheaper one appears before completion, and whether that resets any fee.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "During each six-month window, the best available rate is logged monthly and a rate is secured within two weeks of the window opening."
                cadence: cyclic
              tasks:
                - "Bookmark two comparison tables and your lender's product transfer page"
                - "Log the best rate for your band and fix length @recurring(monthly:14)"
                - "Secure a rate within two weeks of the switch window opening"
                - "Ask your broker to rebook if the market drops before completion"
            - name: Overpayment routine within the yearly allowance
              description: |-
                ## Purpose
                Small regular overpayments reduce interest every month and can move you into a cheaper loan-to-value band by the next switch, but going over the allowance can trigger an early repayment charge. A set monthly amount, logged against the yearly allowance, keeps the benefit and avoids the penalty.

                ## Milestones
                1. The yearly overpayment allowance and how the lender measures the year confirmed.
                2. A monthly overpayment amount chosen that leaves the emergency fund untouched.
                3. Overpayments logged with a running total against the allowance.
                4. The lender's choice of shorter term or lower payment confirmed and recorded.

                ## Notes
                Some lenders measure the allowance by calendar year, others by deal anniversary. Check which before planning a lump sum.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Monthly overpayments are logged with a running total that never exceeds the yearly allowance stated in the mortgage terms."
                cadence: rolling
              tasks:
                - "Ask the lender whether overpayments reduce the term or the payment"
                - "Set up a standing overpayment to the mortgage account"
                - "Log this month's overpayment against the yearly allowance @recurring(monthly:20)"
                - "Reset the allowance tracker on the deal anniversary @recurring(yearly)"
            - name: Rolling three-month document refresh
              description: |-
                ## Purpose
                Payslips and bank statements older than about three months are usually rejected, so a pack gathered in spring is stale by summer. Adding the newest payslip and statement to the folder each month keeps an application ready to send at short notice, which matters when a rate is about to be withdrawn.

                ## Milestones
                1. A documents folder with one subfolder per applicant in place.
                2. The newest payslip and statement added within a week of arriving.
                3. Anything older than four months moved to an archive subfolder.
                4. Proof of address and ID checked for expiry twice a year.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "At any point, the folder holds the latest three payslips and three full months of statements for each applicant, with older files archived."
                cadence: rolling
              tasks:
                - "Add an archive subfolder to the mortgage documents folder"
                - "Save the newest payslip and bank statements to the folder @recurring(monthly:28)"
                - "Move anything older than four months into the archive"
                - "Check passport and driving licence expiry dates"
            - name: Quarterly equity and loan-to-value tracker
              description: |-
                ## Purpose
                Every quarter of repayments and any change in local prices shift your loan-to-value, and the band you sit in at the switch date sets the rate on offer. A simple log of balance, estimated value and loan-to-value each quarter shows when you will cross into a cheaper band and whether an overpayment could get you there first.

                ## Milestones
                1. A log with date, balance, estimated value and loan-to-value columns.
                2. Four quarterly entries made from the online balance and recent local sales.
                3. The next loan-to-value threshold and the date you expect to cross it noted.
                4. Any lump sum needed to cross before the switch date worked out.

                ## Notes
                Start from the **Metrics log** template. Keep the value estimate cautious and use the same method each quarter.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Four quarterly entries of balance, value and loan-to-value exist, with the expected date of crossing the next band written beside them."
                cadence: rolling
              tasks:
                - "Create a loan-to-value log with balance, value and ratio columns"
                - "Record balance, estimated value and loan-to-value @recurring(quarterly)"
                - "Mark the next loan-to-value threshold on the log"
                - "Estimate the lump sum needed to cross it before the switch date"
            - name: No-new-credit rule before applying
              description: |-
                ## Purpose
                New credit applications in the months before a mortgage search leave hard searches on your file and raise your committed outgoings, and a new car finance deal can cut the amount a lender will offer. A simple household rule of no new credit, finance or overdraft changes until the mortgage completes protects the application at no cost.

                ## Milestones
                1. The rule and its end date agreed by every applicant.
                2. Store card offers, interest-free finance and phone upgrades named as included.
                3. A monthly check that no new searches or accounts have appeared.
                4. The rule lifted only after completion or the new product starts.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "No new credit accounts or hard searches appear on any applicant's file between agreeing the rule and completion."
                cadence: rolling
              tasks:
                - "Agree the no-new-credit rule and its end date with every applicant"
                - "Write down which finance offers and upgrades the rule covers"
                - "Check your credit file for new searches or accounts @recurring(monthly:9)"
                - "Postpone any phone upgrade or finance deal until after completion"
            - name: Annual affordability stress test
              description: |-
                ## Purpose
                Testing your budget at a rate two or three points higher than today shows whether the next switch could squeeze the household, years before it happens. A yearly check of the payment at higher rates, set against your monthly surplus, gives time to build savings, overpay or plan a longer fix while choices are still open.

                ## Milestones
                1. Monthly payment calculated at today's rate and at two and three points higher.
                2. Each figure set against the household's monthly surplus.
                3. The rate at which the budget no longer balances written down.
                4. One preparation step chosen if that rate is within reach of current market rates.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Each year a written stress test shows the payment at two higher rates and the break-even rate for the household budget."
                cadence: cyclic
              tasks:
                - "Calculate your payment at today's rate plus two and three points"
                - "Compare each payment with your monthly surplus after bills"
                - "Repeat the stress test with the current balance and term @recurring(yearly)"
                - "Choose one step if the break-even rate looks close"
            - name: Mortgage vocabulary primer
              description: |-
                ## Purpose
                Mortgage paperwork assumes you know what an arrangement fee, a standard variable rate, an annual percentage rate of charge and a redemption statement are. Learning twenty core terms in plain words, with one example each from your own mortgage, makes every later call, illustration and offer quicker to follow.

                ## Milestones
                1. A glossary of about twenty terms written in your own words.
                2. Each term linked to a real figure from your current mortgage where possible.
                3. The difference between initial rate, reversion rate and annual percentage rate of charge explained in a sentence each.
                4. The glossary kept in the mortgage folder for later projects.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A glossary of at least twenty mortgage terms exists, each in plain words, with your own figures attached where they apply."
                cadence: phased
                effort_hours_estimate: "3"
              tasks:
                - "List every term in your mortgage offer that you could not explain"
                - "Read your financial regulator's consumer guide to mortgage terms"
                - "Write each term in one plain sentence with your own example"
                - "Ask the agent to quiz you on the glossary before you speak to a broker"
            - name: How lenders assess affordability and credit
              description: |-
                ## Purpose
                Lenders do not simply multiply salary: they apply income multiples, test the payment at a higher stress rate, deduct committed spending and score the credit file, and each lender weighs these differently. Understanding the main levers explains why two lenders offer different amounts and which of your figures matter most.

                ## Milestones
                1. The typical income multiple range and how it changes with income and deposit noted.
                2. How a stress rate test works explained with your own payment.
                3. The commitments lenders deduct listed, including childcare and student loans.
                4. Three things you could change before applying identified from what you learned.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A one-page note explains income multiples, stress testing and deducted commitments, and names three changes you could make before applying."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Read two lenders' published lending criteria for employed applicants"
                - "Note how each treats bonus, overtime and student loan repayments"
                - "Recalculate your snapshot using a higher stress rate"
                - "Write the three changes that would most improve your case"
            - name: Fixed, tracker, discount and offset rates compared
              description: |-
                ## Purpose
                Fixed rates give payment certainty, trackers follow the central bank rate, discounted variables follow the lender's own rate, and offset mortgages set savings against the balance. Seeing how each would have behaved over the last five years, with your own balance, makes the choice about risk rather than about whichever rate looks lowest today.

                ## Milestones
                1. Each rate type described in two sentences, including what it is linked to.
                2. Your payment under each type calculated for today's rates.
                3. A note of how a tracker would have moved over the past five years.
                4. Collars, caps and exit charges on trackers and variables understood.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A comparison note covers four rate types with your own payment under each and a five-year history for the tracker option."
                cadence: phased
                effort_hours_estimate: "3"
              tasks:
                - "Write a two-line description of each of the four rate types"
                - "Calculate your monthly payment under each at today's rates"
                - "Look up the central bank rate history for the last five years"
                - "Note any collar, cap or exit charge on tracker deals you see"
            - name: Repayment, interest-only and term length maths
              description: |-
                ## Purpose
                Two mortgages with the same rate can cost very different totals depending on the term and whether capital is repaid. Working through what a 25, 30 and 35-year term does to the monthly payment and the total interest, and what interest-only leaves owing at the end, turns term length into a deliberate choice.

                ## Milestones
                1. Monthly payment and total interest calculated for three term lengths.
                2. The balance left at the end of an interest-only term written down.
                3. The effect of a regular overpayment on the term shown in years and months.
                4. Your preferred term chosen with the trade-off written in a sentence.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A table shows payment and total interest for three terms, the interest-only balance at term end and your chosen term with its reason."
                cadence: phased
                effort_hours_estimate: "3"
              tasks:
                - "Use a mortgage calculator to compare 25, 30 and 35-year terms"
                - "Record total interest paid for each term at the same rate"
                - "Model a regular overpayment and note the years it saves"
                - "Write down the term you prefer and why"
            - name: Reading a mortgage illustration line by line
              description: |-
                ## Purpose
                The illustration a lender or broker gives before you apply sets out the rate, fees, total amount repayable, reversion rate and charges in a standard format, but few people read past the first page. Going through one section by section shows what you are agreeing to and gives you the questions to ask before an application fee is paid.

                ## Milestones
                1. An illustration for a real deal obtained and saved.
                2. Each section summarised in one sentence in your own words.
                3. Total amount repayable and the cost per pound borrowed noted.
                4. A list of questions for the lender or broker written from what was unclear.

                ## Notes
                In the UK and EU this is often called the European Standardised Information Sheet. The format is fixed, which makes two illustrations easy to compare side by side.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A real illustration is annotated section by section, with total repayable recorded and a written list of questions sent to the lender or broker."
                cadence: phased
                effort_hours_estimate: "2"
              tasks:
                - "Ask your broker or lender for an illustration of the deal you favour"
                - "Summarise each section of the illustration in one sentence"
                - "Note the total amount repayable and the reversion rate"
                - "Send your list of questions before paying any application fee"
            - name: Remortgage conveyancing and legal work explained
              description: |-
                ## Purpose
                Remortgaging to a new lender involves a solicitor or conveyancer redeeming the old loan and registering the new charge, which product transfers usually skip. Knowing what free legal packages cover, what title or lease issues can slow things, and what you sign helps you spot delays and avoid paying twice.

                ## Milestones
                1. The steps from instruction to completion listed in order.
                2. What a lender's free legal package covers and excludes written down.
                3. Any title, lease or planning issue on your property identified in advance.
                4. Typical timescales noted so you can tell when the case has stalled.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A one-page note lists the legal steps, free legal package exclusions, known title issues and typical timings for your remortgage."
                cadence: phased
                effort_hours_estimate: "2"
              tasks:
                - "Download your title register from the land registry"
                - "Ask what the lender's free legal package covers and excludes"
                - "List any extensions or lease terms that may need explaining"
                - "Note typical timescales for each legal step"
            - name: Total-cost comparison sheet for competing deals
              description: |-
                ## Purpose
                Headline rates hide fees: a deal with a low rate and a large product fee can cost more over two years than a slightly higher rate with no fee, depending on the balance. A comparison sheet that adds rate, product fee, valuation, legal costs and cashback over the deal period shows the true winner for your loan size.

                ## Milestones
                1. A sheet with columns for rate, fees, cashback and total cost over the fixed period.
                2. At least four deals entered, including your lender's product transfer.
                3. Fees added to the loan modelled with the extra interest they carry.
                4. The cheapest deal over the period highlighted, with the gap to the runner-up.

                ## Notes
                Fee-free deals usually win on smaller balances and fee-paying deals on larger ones. Run your own numbers rather than relying on that rule.
              priority: medium
              deadlineOffsetDays: 90
              frontmatter:
                mode: research
                output_kind: artifact
                success_criteria: "A sheet compares at least four deals on total cost over the fixed period, including fees and cashback, with the cheapest clearly marked."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Set up a sheet with rate, fees, cashback and period total columns"
                - "Enter your lender's product transfer and three market deals"
                - "Model adding the product fee to the loan for each deal"
                - "Highlight the cheapest deal over the full fixed period"
            - name: Product transfer or full remortgage decision
              description: |-
                ## Purpose
                When a deal ends you can switch to a new product with your current lender, usually with no valuation, legal work or affordability check, or remortgage to a new lender for a possibly better rate. Comparing both on total cost, speed and risk, especially if income or credit has changed, gives a clear choice before the switch window closes.

                ## Milestones
                1. Your lender's best product transfer rates for your band and fix length recorded.
                2. Two or three remortgage deals from other lenders compared on total cost.
                3. Changes since the last application, such as income, job or credit, noted as risks.
                4. A decision recorded with the reason and the date by which it must be booked.

                ## Notes
                Start from the **Purchase decision** template. A product transfer is often the safer route if your income has fallen or you have changed job recently.
              priority: high
              deadlineOffsetDays: 120
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A written decision between product transfer and remortgage, based on total cost of at least three options, is recorded before the switch window opens."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Check your lender's product transfer rates in your online account"
                - "Compare two remortgage deals against the transfer on total cost"
                - "List anything about income or credit that has changed since you last applied"
                - "Write down the decision and the date you must book by"
            - name: Choosing a two, five or ten-year fix
              description: |-
                ## Purpose
                Choosing between a two, five or ten-year fix trades flexibility against certainty, and the right answer depends on how long you expect to stay, whether you may move or overpay heavily, and how much a payment rise would hurt. Writing the case for each length against your own plans prevents choosing purely on today's rate gap.

                ## Milestones
                1. Current rates for each fix length in your loan-to-value band recorded.
                2. Early repayment charges for each length noted year by year.
                3. Likely life changes in the next ten years listed, such as a move or a child.
                4. A fix length chosen and the deciding reason written down.
              priority: medium
              deadlineOffsetDays: 120
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A recorded decision on fix length, set against rates, exit charges and your expected life changes for each of three lengths."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Record current rates for two, five and ten-year fixes in your band"
                - "Note the early repayment charge for each year of each fix"
                - "List moves, career changes or family plans over the next decade"
                - "Write the chosen fix length and the reason that decided it"
            - name: Offset mortgage suitability check
              description: |-
                ## Purpose
                An offset mortgage links savings to the loan so you pay interest only on the difference, which suits people with large or growing cash balances, such as tax set-asides, but usually carries a higher rate. Checking whether your typical balance is big enough to beat a standard deal answers the question with your own numbers.

                ## Milestones
                1. Your average savings balance over the past year worked out.
                2. The offset rate compared with the best standard rate in your band.
                3. The interest saved by offsetting set against the cost of the higher rate.
                4. A yes or no recorded with the break-even savings balance.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A written yes or no on an offset mortgage, with your average savings balance and the break-even balance calculated."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Work out your average savings balance over the last twelve months"
                - "Find the best offset and standard rates for your loan-to-value band"
                - "Calculate the savings balance needed for the offset to break even"
                - "Check the offset savings balance against the break-even figure @recurring(monthly:24)"
            - name: Borrowing more at remortgage for home improvements
              description: |-
                ## Purpose
                Adding to the mortgage for an extension or new kitchen can mean a low rate, but spread over twenty years it can cost more in total than a shorter loan or savings. Pricing the work, checking the lender's view of the purpose and comparing total cost against alternatives lets you borrow only what the project needs.

                ## Milestones
                1. Two written quotes for the work with a contingency added.
                2. The lender's rules on additional borrowing purpose and evidence confirmed.
                3. Total cost of adding it to the mortgage compared with a shorter separate loan or savings.
                4. The amount to borrow, if any, agreed and written down.

                ## Notes
                Lenders may value the home as it stands, not as it will be after the work. Ask before assuming the improvement lifts your band.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A written borrowing decision based on two quotes and a total-cost comparison of mortgage borrowing against at least one alternative."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Get two written quotes for the improvement work"
                - "Ask your lender or broker what evidence they need for the purpose"
                - "Compare the total interest over the term with a shorter loan"
                - "Record the amount you have decided to borrow"
            - name: True cost of consolidating debts into a remortgage
              description: |-
                ## Purpose
                Rolling card or loan debts into a mortgage lowers the monthly payment but turns unsecured debt into debt secured on your home, often repaid over decades. Before a broker adds it to the application, checking the total interest each way and talking to a free debt advice service shows whether it helps or quietly costs more.

                ## Milestones
                1. Each debt listed with balance, rate and the date it would be cleared as things stand.
                2. Total interest compared with and without consolidation over the mortgage term.
                3. A free debt advice service consulted about the plan.
                4. A decision recorded, including a plan to close the cleared accounts if you go ahead.

                ## Notes
                Lenders may decline or limit consolidation borrowing. If you go ahead, a shorter repayment plan for the consolidated amount stops it lasting thirty years.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A recorded decision on consolidation, backed by a total-interest comparison over the term and notes from a free debt advice conversation."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "List each debt with balance, rate and current payoff date"
                - "Compare total interest with and without consolidation over the term"
                - "Book a call with a free debt advice service about the plan"
                - "Decide which cleared accounts would be closed after completion"
            - name: Overpaying the mortgage or holding cash
              description: |-
                ## Purpose
                Spare cash can go against the mortgage, where it saves interest at your mortgage rate, or stay in savings, where it stays accessible. The right split depends on your rate, savings rate after tax, emergency fund and any other debts. Recording the comparison and the split you choose, with a professional's view if large sums are involved, makes it a decision rather than a habit.

                ## Milestones
                1. Mortgage rate, after-tax savings rate and emergency fund size written side by side.
                2. Any more expensive debts listed first as candidates for spare cash.
                3. A split between overpaying and saving chosen and written down.
                4. The split revisited when your deal or savings rate changes.

                ## Notes
                Money paid into a mortgage is hard to get back. Keep the emergency fund separate whatever the split.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A written split between overpaying and saving, set against current mortgage and savings rates, is recorded and dated."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Write your mortgage rate beside your best after-tax savings rate"
                - "Confirm the emergency fund is full before overpaying anything"
                - "Choose and record a split between overpaying and saving"
                - "Revisit the split when either rate changes @recurring(yearly)"
            - name: Interest-only to repayment switch plan
              description: |-
                ## Purpose
                An interest-only mortgage leaves the whole balance owing at the end of the term, and lenders write to borrowers who have no credible plan to repay it. Checking what any repayment plan is worth today, and pricing a full or part switch to repayment, gives you time to act while there are still years left on the term.

                ## Milestones
                1. The balance due at term end and the date written down.
                2. The current value of any repayment plan, such as savings, investments or a planned sale, recorded.
                3. Monthly cost of switching all or part of the loan to repayment calculated.
                4. A switch plan agreed with the lender, or a written reason for keeping interest-only.
              priority: medium
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A written plan shows the term-end balance, the repayment plan's value and either an agreed switch with the lender or a reasoned decision to keep interest-only."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Find the interest-only balance and term end date on your statement"
                - "Value any savings or investments meant to repay the loan"
                - "Ask the lender to quote a full and a part switch to repayment"
                - "Check the repayment plan still covers the balance @recurring(yearly)"
            - name: Agreement in principle before viewing homes
              description: |-
                ## Purpose
                An agreement in principle shows estate agents and sellers that a lender is likely to lend a given amount, and many agents ask for one before accepting an offer. Getting one before viewings, ideally with a soft credit search, sets a realistic price ceiling and saves offers on homes you cannot fund.

                ## Milestones
                1. A lender or broker chosen that offers an agreement with a soft search where possible.
                2. The agreement in principle issued for a stated amount and saved as a PDF.
                3. The expiry date of the agreement noted in the calendar.
                4. A maximum purchase price set from the agreed amount plus your deposit.

                ## Notes
                An agreement in principle is not a mortgage offer. The full application can still be declined or offered for less.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A saved agreement in principle for a stated amount, with its expiry date in the calendar and a maximum purchase price written down."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Ask whether the agreement in principle uses a soft or hard credit search"
                - "Complete the agreement in principle with your lender or broker"
                - "Save the certificate and note its expiry date"
                - "Set your maximum purchase price from the amount plus your deposit"
            - name: Full mortgage application submission week
              description: |-
                ## Purpose
                Submission week is when most delays start: missing pages, mismatched addresses, unexplained transfers on statements. Treating it as a short event, with the pack checked against the lender's list, every applicant's details matching across documents and large transactions explained up front, gets the case to underwriting without a request for more.

                ## Milestones
                1. The lender's document checklist matched item by item against your pack.
                2. Names, addresses and dates of birth identical across forms and documents.
                3. Large or unusual transactions on statements explained in a short note.
                4. The application submitted and the reference number recorded with the date.
              priority: medium
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "The application is submitted with every listed document, a note explaining unusual transactions and a reference number recorded."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Tick off the lender's document checklist against your folder"
                - "Check names and addresses match exactly on every form and document"
                - "Write a short note explaining any large or unusual transactions"
                - "Record the application reference number and submission date"
            - name: Valuation day and down-valuation response
              description: |-
                ## Purpose
                If the lender's valuer puts the home below the price or your estimate, the loan-to-value rises and the deal may be withdrawn or repriced. Preparing comparable sales and a list of improvements before the visit, and knowing your options if the figure comes in low, keeps a down-valuation from derailing the purchase or switch.

                ## Milestones
                1. A list of comparable recent sales and improvements ready for the valuer.
                2. Access arranged and the valuer's visit date confirmed.
                3. The valuation figure and any conditions recorded once received.
                4. If the value is low, options written down: challenge, renegotiate, add deposit or change lender.

                ## Notes
                Many valuations for remortgages are desktop only. A challenge works best with three recent sold prices for genuinely similar homes.
              priority: medium
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "The valuation result is recorded, and if it is below expectations a written choice among challenge, renegotiation, extra deposit or another lender is made."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Prepare a one-page list of comparable sales and recent improvements"
                - "Confirm the valuation date and who will give access"
                - "Record the valuation figure and any retention or condition"
                - "Ask your broker about a challenge if the valuation comes in low"
            - name: Mortgage offer check and acceptance
              description: |-
                ## Purpose
                A formal offer can contain a different rate, term, product fee, special condition or retention from what you expected, and it has an expiry date that matters if completion slips. Reading the offer against your illustration and priorities brief before anything is signed catches errors while they are still cheap to fix.

                ## Milestones
                1. The offer compared line by line with the illustration and agreed product.
                2. Every special condition and retention listed with what is needed to satisfy it.
                3. The offer expiry date noted and checked against the expected completion date.
                4. Any discrepancy raised in writing and corrected before acceptance.
              priority: high
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "The offer is checked against the illustration, special conditions are listed, the expiry date is diarised and any error is corrected in writing."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Compare rate, term, fees and amount with the illustration"
                - "List every special condition and what you must do about it"
                - "Note the offer expiry date against the expected completion date"
                - "Email your broker or lender about any figure that does not match"
            - name: Purchase completion and first payment checklist
              description: |-
                ## Purpose
                Completion day moves the deposit and loan, hands over keys and starts a mortgage whose first payment is often larger because it includes part-month interest. A checklist covering funds, buildings insurance from exchange, the first payment amount and the direct debit date avoids a shortfall in the first month.

                ## Milestones
                1. Deposit funds cleared with your conveyancer before the deadline they set.
                2. Buildings insurance in place from exchange of contracts, as the lender requires.
                3. First payment amount and date confirmed in writing by the lender.
                4. The mortgage direct debit set to come from the account your salary lands in.

                ## Notes
                Send the deposit early and confirm the conveyancer's bank details by phone using a number you already have. Payment redirection fraud targets completion week.
              priority: medium
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "Completion happens on the agreed date with buildings insurance in place and the first payment amount and date confirmed in writing."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Phone your conveyancer to confirm their bank details before sending funds"
                - "Arrange buildings insurance to start from exchange of contracts"
                - "Ask the lender for the first payment amount and date"
                - "Check the mortgage direct debit is on the right account"
            - name: Remortgage switch-over day
              description: |-
                ## Purpose
                Switch-over day is when the old loan is redeemed and the new deal starts, and small slips cost money: an old direct debit still collecting, an exit fee unexpectedly charged, or a completion a day before the charge falls away. Running a short checklist around the date confirms the old account is closed, the new payment is right and nothing is paid twice.

                ## Milestones
                1. Completion date confirmed as on or after the day the exit charge stops.
                2. Redemption statement checked for the exact amount and fees.
                3. The old lender's direct debit cancelled only after its final collection.
                4. The new lender's first payment amount and date added to the fact sheet.

                ## Notes
                Start from the **Operational checklist** template. Some old lenders refund an overlapping payment automatically; others need a phone call.
              priority: high
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "The old loan is redeemed with no early repayment charge, the old direct debit is cancelled and the new payment is recorded on the fact sheet."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Confirm the completion date falls after the exit charge ends"
                - "Check the redemption statement for the exact amount and fees"
                - "Cancel the old direct debit once its final payment has gone"
                - "Update the fact sheet with the new lender, rate and payment"
            - name: First-time buyer mortgage application plan
              description: |-
                ## Purpose
                Buying a first home means learning the mortgage process at the same time as house hunting, often while renting with a notice period to manage. A plan that sequences the agreement in principle, deposit evidence, broker choice and full application against your viewing and tenancy dates keeps the mortgage from becoming the bottleneck once an offer is accepted.

                ## Milestones
                1. A timeline from agreement in principle to completion set against your tenancy end date.
                2. Deposit source evidence and any first-time buyer scheme paperwork gathered.
                3. Lenders' first-time buyer criteria checked for minimum deposit and income.
                4. The full application ready to submit within a week of an accepted offer.

                ## Notes
                Scheme rules for first-time buyers vary by country and change often. Check the official scheme page rather than an old article.
              priority: medium
              deadlineOffsetDays: 90
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A written timeline links mortgage steps to your tenancy dates, with deposit evidence gathered and an application ready within a week of an accepted offer."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Note your tenancy end date and notice period"
                - "Map mortgage steps from agreement in principle to completion"
                - "Gather twelve months of statements showing how the deposit was saved"
                - "Check the official page for any first-time buyer scheme you plan to use"
            - name: Joint mortgage application for couples and co-buyers
              description: |-
                ## Purpose
                Two applicants mean two credit files, two sets of documents and one shared debt that each person is fully liable for. Agreeing how deposit contributions, payments and ownership shares will work, and recording it with your conveyancer's help, protects both people if circumstances change later.

                ## Milestones
                1. Both credit files checked and any concerns discussed openly before applying.
                2. Each person's deposit contribution recorded in writing.
                3. Ownership form chosen with your conveyancer's explanation of the options.
                4. A written agreement on payments and what happens on a sale or separation.

                ## Notes
                Joint and several liability means the lender can pursue either of you for the whole debt. Agree the ownership form with a conveyancer, not from a forum post.
              priority: medium
              frontmatter:
                mode: service
                output_kind: deliverable
                success_criteria: "Both applicants have reviewed their credit files, deposit contributions are recorded and an ownership choice is confirmed with the conveyancer."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Share and read each other's credit files before applying"
                - "Write down how much each person is putting into the deposit"
                - "Ask your conveyancer to explain the ownership options for your situation"
                - "Draft a short agreement on payments and what happens on a sale"
            - name: Self-employed and contractor income evidence
              description: |-
                ## Purpose
                Self-employed applicants are usually asked for two or three years of tax calculations and tax year overviews, or accounts signed by an accountant, while contractors may be assessed on a day rate with contracts as proof. Getting the evidence ready, and knowing which lenders treat your income type kindly, avoids an application judged on the wrong figure.

                ## Milestones
                1. Two to three years of tax calculations and matching tax year overviews downloaded.
                2. Accountant-prepared accounts or a reference letter obtained where lenders ask.
                3. Current and previous contracts with day rates saved, for contractors.
                4. A broker or lender identified that assesses your income type the way you need.

                ## Notes
                In the UK these are the SA302 and tax year overview. Filing the tax return early in the year makes the latest figures usable sooner.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Two to three years of tax calculations and overviews, plus accounts or contracts as relevant, are saved and a suitable lender or broker is identified."
                cadence: phased
                effort_hours_estimate: "5"
              tasks:
                - "Download the last three years of tax calculations and overviews"
                - "Ask your accountant for signed accounts or a reference letter"
                - "Save current contracts showing your day rate and term"
                - "Save the new tax calculation as soon as the return is filed @recurring(yearly)"
            - name: Applying after a job change or during parental leave
              description: |-
                ## Purpose
                Starting a new job, being on probation or applying during maternity or paternity leave can all change how lenders treat your income, and some will lend on your return-to-work salary with the right letter. Gathering contracts and employer confirmations before applying gives the lender the evidence they need instead of a decline.

                ## Milestones
                1. Lender rules on probation periods, recent job moves or parental leave checked.
                2. A signed employment contract or offer letter showing salary saved.
                3. An employer letter confirming return date and salary obtained, if on leave.
                4. The application timed to the point where your evidence is strongest.

                ## Notes
                A product transfer with your current lender usually avoids a fresh affordability check, which can help during a job change or leave.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Contract or offer letter, any employer return-to-work letter and the relevant lender rules are saved, with the application timing decided."
                cadence: phased
                effort_hours_estimate: "3"
              tasks:
                - "Check two lenders' rules on probation, job changes and parental leave"
                - "Save your signed contract or offer letter showing salary"
                - "Ask your employer for a letter confirming return date and salary"
                - "Decide with your broker when to submit the application"
            - name: Moving home and porting your mortgage
              description: |-
                ## Purpose
                Moving mid-deal can mean paying an early repayment charge unless you port the existing rate to the new home, but porting is a fresh application and any extra borrowing may sit on a different rate. Checking porting terms, timings and the blended cost before you list your home tells you whether to move now or wait for the deal to end.

                ## Milestones
                1. Your deal's porting terms and any time limit between sale and purchase confirmed.
                2. Extra borrowing needed for the new home calculated.
                3. The blended rate and cost of porting compared with paying the exit charge and starting afresh.
                4. A decision recorded on timing the move against the deal end date.

                ## Notes
                Lenders often refund the exit charge if you port within a set window, but only if the new loan completes. Ask how the refund works before you sell.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "Porting terms and the blended cost are compared in writing with paying the exit charge, and a move timing decision is recorded."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Ask your lender whether your deal is portable and on what terms"
                - "Calculate the extra borrowing the new home would need"
                - "Compare the blended porting cost with paying the exit charge"
                - "Record whether to move now or after the deal ends"
            - name: Gifted deposit and family-assisted borrowing paperwork
              description: |-
                ## Purpose
                Gifted deposits must be documented so the lender and conveyancer can confirm the money is a gift, not a loan, and family-backed options such as joint borrower sole proprietor arrangements bring their own checks. Preparing gift letters, donor ID and source of funds early prevents completion week anti-money-laundering delays.

                ## Milestones
                1. A signed gift letter in the lender's or conveyancer's format from each donor.
                2. Donor ID and proof of where the gifted money came from collected.
                3. Any family-assisted mortgage option explained by a broker in writing.
                4. Independent legal advice arranged for family members where the lender requires it.

                ## Notes
                Donors may be asked to confirm they will have no share in the property. They should take their own advice on how the gift affects them.
              priority: low
              frontmatter:
                mode: service
                output_kind: deliverable
                success_criteria: "Signed gift letters, donor ID and source of funds evidence are with the conveyancer before exchange, with any family-assisted option explained in writing."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Ask your conveyancer for their gift letter template"
                - "Collect each donor's ID and statements showing the source of funds"
                - "Ask your broker to explain family-assisted mortgage options in writing"
                - "Send the signed letters and evidence to the conveyancer before exchange"
            - name: Mortgage borrowing in and into retirement
              description: |-
                ## Purpose
                Many lenders cap the age at which a mortgage must end, and borrowing that runs past retirement is assessed on expected pension income. Older homeowners remortgaging, or anyone whose term will end after retirement, benefit from gathering pension forecasts and checking which lenders and products fit before a deal ends rather than after.

                ## Milestones
                1. Your age at the end of the current and proposed terms written down.
                2. State and private pension forecasts gathered for every applicant.
                3. Lenders' maximum age limits and retirement income rules compared.
                4. Specialist later-life options noted for discussion with a qualified adviser if standard lenders do not fit.

                ## Notes
                Later-life products such as lifetime mortgages carry long-term consequences for the estate. Use an adviser qualified in later-life lending and involve family if you wish.
              priority: medium
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "Pension forecasts for every applicant and the age limits of at least three lenders are recorded against the proposed term end date."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Work out your age at the end of the proposed mortgage term"
                - "Request state and private pension forecasts"
                - "Compare three lenders' maximum age and retirement income rules"
                - "Review the term end date against your planned retirement @recurring(yearly)"
            - name: Transfer of equity after separation
              description: |-
                ## Purpose
                After a separation, a joint mortgage stays a joint debt until the lender agrees to release one person, and that needs the remaining borrower to pass affordability alone. Preparing the affordability case, legal steps and timings for a transfer of equity turns an agreed settlement into a mortgage the lender will actually sign off.

                ## Milestones
                1. The lender's process and criteria for removing a borrower confirmed in writing.
                2. Sole affordability checked using the remaining borrower's income alone.
                3. A conveyancer instructed for the transfer of equity.
                4. The mortgage in one name, with the leaving party formally released.

                ## Notes
                Until the lender releases them, both people remain liable for the full payment. Keep paying while the transfer is arranged.
              priority: medium
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "The lender confirms the transfer of equity is complete and the mortgage is in one name with the other borrower released."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Ask the lender how it handles removing a borrower from the mortgage"
                - "Run the remaining borrower's income through a lender calculator"
                - "Instruct a conveyancer to handle the transfer of equity"
                - "Keep a record of who pays the mortgage until the transfer completes"
            - name: Early talks with the lender over payment difficulty
              description: |-
                ## Purpose
                Missing one mortgage payment is far easier to fix than missing three, and lenders are expected to offer options such as a temporary payment reduction, a term extension or a short switch to interest-only. Calling the lender as soon as trouble is likely, with a budget ready and free debt advice alongside, keeps the home and the credit file in better shape.

                ## Milestones
                1. A current household budget showing what you can afford to pay.
                2. Free, independent debt advice contacted before agreeing anything.
                3. The lender called and the options offered recorded with dates and names.
                4. Any arrangement confirmed in writing and reviewed each month.

                ## Notes
                Never stop paying altogether without an agreement. Pay what you can and keep a written record of every call.
              priority: high
              frontmatter:
                mode: service
                output_kind: deliverable
                success_criteria: "A written arrangement with the lender is in place, based on a current budget and advice from a free debt advice service, and is reviewed monthly."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Write a current budget showing what you can pay each month"
                - "Contact a free debt advice service before calling the lender"
                - "Call the lender and note every option offered with the date"
                - "Review the arrangement with the lender's letter in hand @recurring(monthly:12)"
            - name: Buy-to-let and let-to-buy remortgage
              description: |-
                ## Purpose
                Landlord mortgages are assessed on rent rather than salary, with lenders requiring rent to cover the interest by a set margin at a stressed rate, and tax treatment can change which structure makes sense. Remortgaging a rental, or letting your current home to buy another, needs those ratios, the tenancy paperwork and specialist lenders lined up early.

                ## Milestones
                1. The rental coverage ratio for your property calculated at lenders' stress rates.
                2. Tenancy agreement, rent statements and safety certificates gathered.
                3. Consent to let or a let-to-buy product discussed with the lender or broker.
                4. Tax questions about the structure taken to a qualified tax adviser.

                ## Notes
                Letting a home on a residential mortgage without the lender's consent can breach the mortgage terms. Ask first.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "Rental coverage at stressed rates is calculated, tenancy documents are gathered and a lender-approved structure is chosen for the property."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Calculate rent cover at two lenders' stated stress rates"
                - "Gather the tenancy agreement, rent records and safety certificates"
                - "Ask your lender about consent to let or a let-to-buy product"
                - "Check rent still covers the mortgage interest at the stress rate @recurring(quarterly)"
            - name: Shared ownership staircasing and remortgage
              description: |-
                ## Purpose
                Shared owners pay rent on the share they do not own and can buy more shares through staircasing, which needs a valuation, the housing provider's consent and usually extra mortgage borrowing. Planning the share, valuation and remortgage together keeps the deal end date, provider timelines and costs in step.

                ## Milestones
                1. Current share, rent and service charge recorded from the provider's statement.
                2. The provider's staircasing process, valuation rules and fees confirmed.
                3. Lenders that remortgage shared ownership identified, with the extra borrowing priced.
                4. A target share and timing chosen against the current deal end date.

                ## Notes
                Staircasing valuations usually last three months. Book it once the mortgage route is clear to avoid paying for a second one.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A staircasing target and timing are recorded, with provider fees, valuation rules and a priced remortgage option from a suitable lender."
                cadence: phased
                effort_hours_estimate: "5"
              tasks:
                - "Ask your housing provider for the staircasing process and fees"
                - "Find lenders that remortgage shared ownership homes"
                - "Price the extra borrowing needed for your target share"
                - "Check the rent and service charge statement each year @recurring(yearly)"
            - name: Short lease, cladding or non-standard property lending
              description: |-
                ## Purpose
                Some homes are hard to mortgage: a lease under about 80 years, cladding without the right fire safety form, flats above shops, or non-standard construction such as timber frame or concrete. Identifying the issue before a lender's valuer does, and gathering the documents or extension quote that resolves it, keeps the property mortgageable for you and any future buyer.

                ## Milestones
                1. Lease length, construction type and any cladding status confirmed from documents.
                2. Lenders' criteria for your property type checked.
                3. A lease extension quote or fire safety documents obtained where needed.
                4. A plan recorded for which issue to resolve before the next application.

                ## Notes
                Lease extension costs usually rise as the lease shortens, especially once it drops below 80 years in some countries. Get a formal valuation before negotiating.
              priority: low
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "The property's lease, construction and cladding position are documented, with lender criteria checked and a resolution plan written."
                cadence: phased
                effort_hours_estimate: "5"
              tasks:
                - "Find the lease end date and years remaining from your title documents"
                - "Confirm the construction type and any cladding on the building"
                - "Ask a broker which lenders accept your property type"
                - "Diary a check of years left on the lease @recurring(yearly)"
            - name: Mortgage complaint to lender, broker or ombudsman
              description: |-
                ## Purpose
                Delays that cost you a rate, wrong redemption figures, a missed product transfer or poor advice can all justify a complaint, and the formal route has time limits. Setting out what happened, what it cost and what you want, then following the lender's process and the ombudsman route if needed, gives the best chance of putting it right.

                ## Milestones
                1. A dated timeline of events with copies of emails, letters and call notes.
                2. The financial loss calculated and the outcome you want stated.
                3. A formal written complaint sent and the acknowledgement saved.
                4. The final response received, or the deadline passed, and the ombudsman route used if unresolved.

                ## Notes
                Most financial ombudsman services will only look at a complaint after the firm has had a set time to reply, and they have deadlines for referral.
              priority: low
              frontmatter:
                mode: service
                output_kind: deliverable
                success_criteria: "A written complaint with a dated timeline and loss figure has a final response, or has been referred to the ombudsman within the time limit."
                cadence: phased
                effort_hours_estimate: "5"
              tasks:
                - "Write a dated timeline from emails, letters and call notes"
                - "Calculate what the problem cost you in extra interest or fees"
                - "Ask the agent to draft a formal complaint from your timeline"
                - "Send the complaint and diarise the firm's response deadline"
---

# Mortgage Application & Remortgage

This area is for anyone buying with a mortgage or coming to the end of a deal, from a first application to a fifth remortgage. It starts with the foundations (a fact sheet of the current loan, the fixed rate end date, exit charges, affordability and a document pack), then the routines that keep a mortgage cheap, the knowledge that makes illustrations and offers readable, the big decisions about switching, fix length and borrowing more, the dated events from agreement in principle to switch-over day, versions for first-time buyers, couples, the self-employed, movers and older borrowers, and finally the buy-to-let, shared ownership, awkward property and complaint cases.

What repeats is a monthly payment check, a monthly overpayment and document refresh, a rate watch as the deal end approaches, a quarterly loan-to-value update and a yearly statement review and stress test. The Monthly budget and bills, Vendor, Metrics log, Purchase decision and Operational checklist templates pair with the projects that name them. Installing adds all 50 projects as active, so archive the ones that are not for you yet.
