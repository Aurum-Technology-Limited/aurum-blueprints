---
id: agriculture.farm-finance-and-loans
name: Farm Finance and Loans
description: "Farm borrowing set up on purpose: debts mapped, a cash flow that follows the seasons, a lender-ready plan, loan and equipment finance offers compared properly, and repayments timed to harvest money."
category: business
version: 1.0.0
tags: [agriculture, farm-finance-and-loans, small-business, founder, agricultural-credit, equipment-finance, credit-unions, caribbean]
author: Aurum Technology
starter_structure:
  templates:
    - month-end-close
    - savings-goal
    - metrics-log
    - purchase-decision
    - risk-register
  pillars:
    - name: Agriculture & Agribusiness
      emoji: "🌾"
      description: "Farming as a business, with the Caribbean in mind: vegetables, root crops, cocoa, coffee, citrus and other tree crops, poultry, goats, cattle and pigs, aquaculture and greenhouses, soil, irrigation and pest management, farm finance, selling to markets, hotels and supermarkets, agro-processing and export, insurance, hurricane resilience and extension services."
      pillarFrontmatter:
        review_cadence: monthly
      areas:
        - name: Farm Finance and Loans
          description: "Financing a farm: agricultural development bank loans, credit unions, equipment finance, grants, a lender-ready farm plan and seasonal repayment schedules."
          projects:
            - name: Every farm debt on one page
              description: |-
                ## Purpose
                Most farmers who struggle with repayments are carrying more separate debts than they realise: a bank loan, a hire purchase on the pickup, credit at the agro shop and money owed to a relative. Listing every one with its balance, rate, instalment and due date shows the true monthly burden before any new borrowing is considered. It is also the first page any loan officer will ask to see.

                ## Milestones
                1. Every loan, hire purchase, overdraft, supplier account and informal debt listed in one table.
                2. Each line showing lender, balance, interest rate, instalment, due day and end date.
                3. Total monthly and yearly repayments worked out and set beside typical farm income.
                4. Any debt in arrears marked, with the amount overdue and the lender's contact.

                ## Notes
                Include the informal money too, such as a sou-sou hand you still owe or cash a cousin advanced for seed. Lenders find these anyway, and leaving them out makes the picture look healthier than it is.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A single debt table lists every farm and personal debt with balance, rate, instalment and due date, and a total monthly repayment figure."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Gather the latest statement for every loan, hire purchase and supplier account"
                - "List each debt with balance, rate, instalment and due day in one table"
                - "Add informal debts owed to family, friends or a sou-sou"
                - "Total the monthly repayments and compare them with average monthly farm income"
            - name: Separate bank account for the farm business
              description: |-
                ## Purpose
                When harvest money, school fees and fuel all run through one personal account, nobody can tell whether the farm makes money, least of all a lender. Opening a dedicated farm account and routing every sale and input purchase through it builds, within six months, the bank history most agricultural lenders ask to see.

                ## Milestones
                1. A bank or credit union account opened in the farm's or farmer's business name.
                2. Buyers, the market agent and the agro shop given the new account details.
                3. A fixed monthly transfer to the household account set up as the farmer's drawings.
                4. Three consecutive months of statements showing farm income and costs only.

                ## Notes
                Cash sales at the market still count: bank them weekly rather than spending them on the way home, so the account reflects the real turnover.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A farm-only account has three months of statements in which every sale and input purchase appears and household spending does not."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Ask your bank or credit union what a farm business account needs to open"
                - "Open the account and order a cheque book or card for input purchases"
                - "Send the new account details to every regular buyer"
                - "Set a fixed monthly transfer to the household account as drawings"
            - name: Twelve-month seasonal cash flow forecast
              description: |-
                ## Purpose
                Farm income arrives in lumps, often in the dry season harvest, while fertiliser, labour and loan instalments fall every month. A month-by-month cash flow forecast shows the lean months ahead of time, so borrowing is sized to the real gap and repayment dates can be matched to when the money actually comes in.

                ## Milestones
                1. Twelve monthly columns with expected sales for each crop or animal enterprise.
                2. Inputs, labour, fuel, rent and existing instalments entered in the months they are paid.
                3. Opening and closing cash worked out for every month, with the lowest month highlighted.
                4. The size and timing of any borrowing gap written in one sentence.

                ## Notes
                Use last year's sales receipts and market prices rather than hoped-for yields. A forecast built on the best season you ever had will fail its first real test.
              priority: high
              deadlineOffsetDays: 45
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A twelve-month cash flow forecast shows opening and closing cash per month and names the month and amount of the largest cash gap."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "List the months each crop or batch of animals is usually sold"
                - "Enter last year's sales and input costs month by month"
                - "Add every existing loan instalment in the month it falls due"
                - "Mark the lowest cash month and the amount needed to cover it"
                - "Replace last month's forecast figures with actual cash in and out @recurring(monthly:28)"
            - name: Farm balance sheet and income statement
              description: |-
                ## Purpose
                A loan officer reads a farm through two documents: what it owns and owes on a set date, and what it earned and spent over a year. Preparing a simple balance sheet and income statement yourself, before an accountant tidies them, means you understand every figure you will be asked about at the interview.

                ## Milestones
                1. A balance sheet dated at year end listing land rights, buildings, machinery, livestock, stored crops, cash and every debt.
                2. Assets valued on a stated basis, such as purchase price less wear or a recent valuation.
                3. An income statement for the last full year showing sales by enterprise and all costs.
                4. Net worth and net farm income figures checked against bank statements.

                ## Notes
                Livestock and standing crops are often overvalued by owners. Use what a buyer would pay today, and note the basis, so the figures survive a lender's questions.
              priority: high
              deadlineOffsetDays: 60
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A dated farm balance sheet and a twelve-month income statement exist, each figure traceable to a receipt, statement or stated valuation."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "List every farm asset with a value and the basis for that value"
                - "Copy each debt balance from the debt table onto the balance sheet"
                - "Total last year's sales and costs from receipts and bank statements"
                - "Ask your accountant to review both statements before they go to a lender"
                - "Roll both statements forward to the new year end @recurring(yearly)"
            - name: Credit report and repayment history check
              description: |-
                ## Purpose
                Many Caribbean countries now have credit bureaux, and a forgotten phone contract or a guarantee signed for a friend can sit on your record for years. Requesting your own report before applying lets you correct errors and explain any late payments on your terms rather than the lender's.

                ## Milestones
                1. Your credit report obtained from the bureau or bureaux operating in your country.
                2. Every account on it matched against your own debt table.
                3. Errors disputed in writing with the bureau, with copies kept.
                4. A short written explanation ready for any genuine late payment.

                ## Notes
                Where no bureau exists, lenders rely on statements and references, so ask your current lender for a letter confirming your repayment record.
              priority: medium
              deadlineOffsetDays: 21
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "Your current credit report has been read, any errors disputed in writing, and an explanation drafted for each late payment."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Find out which credit bureau operates in your country and how to request a report"
                - "Request your own report and compare it with your debt table"
                - "Write to the bureau about any account that is wrong or not yours"
                - "Request a fresh copy of your report before each planting season @recurring(yearly)"
            - name: Map of who lends to farmers locally
              description: |-
                ## Purpose
                Farm credit in the region comes from more places than the commercial bank: an agricultural development bank, credit unions, microfinance institutions, input suppliers, buyers who pre-finance crops and donor-backed programmes. Knowing each one's typical loan size, security demands and turnaround before you need money means you approach the right lender first instead of collecting refusals.

                ## Milestones
                1. A list of at least five lenders that finance agriculture in your country.
                2. Each lender's typical loan sizes, security, rates and decision times noted from their own published material or a conversation.
                3. Lenders that offer grace periods or seasonal repayment schedules marked.
                4. A first-choice and second-choice lender named for your next borrowing need.

                ## Notes
                Your extension officer and farmer group usually know which lender actually pays out to farmers and which only advertises it. Ask them before you ask the bank.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A written lender map covers at least five agricultural lenders with loan size, security, rate and seasonal repayment options, and names a first choice."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "List the development bank, credit unions, banks and microlenders near you"
                - "Ask your extension officer which lenders have recently financed local farmers"
                - "Collect each lender's farm loan brochure or terms sheet"
                - "Rank the lenders against your loan size and repayment timing"
            - name: Collateral and security register
              description: |-
                ## Purpose
                Lenders want to know what they can fall back on, and farmers are often surprised that a state lease, a family plot without title or a herd of goats may count for little. Listing everything you could offer as security, with its documents and any existing charges, shows early whether a loan needs a guarantor, a cash deposit or a smaller first step.

                ## Milestones
                1. Every possible security listed: land documents, vehicles, machinery, livestock, savings and life policies.
                2. Each item showing its documents, owner of record and any existing lien or charge.
                3. Items that a lender is unlikely to accept marked, with the reason.
                4. A realistic security value for the farm compared with the loan you have in mind.

                ## Notes
                Check that the name on every document matches yours exactly. A vehicle registered to a late parent or land in a sibling's name cannot be pledged until that is sorted.
              priority: medium
              deadlineOffsetDays: 45
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A register lists every potential security with documents, owner of record and existing charges, and a total realistic security value."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "List every asset that could be offered as security for a loan"
                - "Find the document that proves ownership of each asset"
                - "Note any existing lien, charge or hire purchase on each item"
                - "Update the register with new purchases and paid-off charges @recurring(yearly)"
            - name: Loan purpose and size decision
              description: |-
                ## Purpose
                Borrowing too little leaves a half-built pen that earns nothing, while borrowing too much turns a good season into a struggle to meet instalments. Writing down exactly what the loan will buy, what it will earn and when, and the smallest amount that achieves it, is the decision every later step depends on.

                ## Milestones
                1. Each item the loan will pay for listed with a written quote.
                2. The extra income or saving each item will produce estimated, with the month it starts.
                3. Your own cash contribution decided and set against the total cost.
                4. A final loan amount and the instalment it implies checked against the cash flow forecast.

                ## Notes
                Lenders usually expect the farmer to put in some of the money. Knowing your contribution before the meeting avoids a scramble for cash afterwards.
              priority: high
              deadlineOffsetDays: 45
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A one-page note states the loan amount, what it buys, your own contribution and the month extra income begins, backed by quotes."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Get written quotes for every item the loan would pay for"
                - "Estimate the extra income each item will bring and when it starts"
                - "Decide how much of your own cash goes into the project"
                - "Test the resulting instalment against your lowest cash month"
            - name: Farm finance document folder
              description: |-
                ## Purpose
                Applications stall for weeks over a missing tax compliance letter or a farmer registration card that expired last year. Keeping one folder, paper and scanned, with every document lenders commonly ask for means the next application goes in complete on the first visit.

                ## Milestones
                1. Identification, proof of address and farmer registration copies filed.
                2. Business registration, tax and national insurance compliance letters filed with their expiry dates.
                3. Land documents, the last two years of sales receipts and bank statements filed.
                4. A scanned copy of every item stored somewhere safe from flood and fire.

                ## Notes
                Store the paper folder above flood height and in a sealed bag during hurricane season.
              priority: medium
              deadlineOffsetDays: 21
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "One folder, with a scanned copy, holds every standard lending document and a list of their expiry dates."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Write a checklist of the documents your chosen lender asks for"
                - "Collect ID, registration, tax and land documents into one folder"
                - "Scan each document and save the files in a backed-up location"
                - "Note the expiry date of every certificate on the checklist"
            - name: Loan repayment calendar
              description: |-
                ## Purpose
                Missed instalments on farm loans usually happen because the date slipped past during harvest, not because the money was absent. A single calendar of every instalment, with a check a few days before and a confirmation after, protects your record and avoids late fees that quietly add up across a year.

                ## Milestones
                1. Every instalment for every debt entered on one calendar with amount and due date.
                2. Standing orders or reminders set for each regular payment.
                3. A monthly check of each loan statement confirming the last payment posted correctly.
                4. A year with no late fees recorded on any account.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "All instalments sit on one calendar and twelve consecutive monthly checks show every payment posted on time."
                cadence: rolling
              tasks:
                - "Enter every instalment from the debt table onto one calendar"
                - "Set up a standing order for each fixed monthly instalment"
                - "Check the amount and date of the next instalments due this month @recurring(monthly:3)"
                - "Confirm last month's payments appear on each loan statement @recurring(monthly:12)"
            - name: Monthly farm books and bank reconciliation
              description: |-
                ## Purpose
                Lenders judge a farm on its records, and a shoebox of receipts sorted once a year cannot answer their questions. Recording sales and costs and matching them to the bank statement each month keeps the figures fresh, catches buyer payments that never arrived, and makes the year-end statements a short job.

                ## Milestones
                1. A simple cash book or farm accounting app set up with income and cost categories by enterprise.
                2. Every receipt and sale entered within the month it happened.
                3. The farm bank account reconciled to the statement each month.
                4. Twelve months of reconciled books ready for the accountant.

                ## Notes
                Start from the **Month-end close** template. Keep cost categories the same from year to year so lenders can compare one season with the last.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "The farm cash book is reconciled to the bank statement every month for twelve consecutive months."
                cadence: rolling
              tasks:
                - "Choose a cash book format or farm accounting app and set up categories"
                - "Photograph receipts and file them by month"
                - "Reconcile the cash book to the farm bank statement @recurring(monthly:8)"
                - "Enter the week's sales and input receipts into the cash book @recurring(weekly:fri)"
            - name: Weekly cash position check in the busy season
              description: |-
                ## Purpose
                During planting and harvest, money goes out to labour and inputs faster than buyers pay, and a farm can run short with crops still in the field. A ten-minute weekly look at cash in the bank, bills due and payments expected catches the squeeze early enough to call the lender or the supplier before a cheque bounces.

                ## Milestones
                1. A one-line weekly record of cash on hand, bills due in seven days and payments expected.
                2. A trigger amount set below which you call the lender or supplier.
                3. Every shortfall in the season handled by a planned call rather than a missed payment.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A weekly cash line is recorded through each busy season and no payment is missed for lack of cash."
                cadence: rolling
              tasks:
                - "Set the cash level below which you will act"
                - "Record cash, bills due and expected receipts for the coming week @recurring(weekly:mon)"
                - "Call the supplier or lender the same day the cash falls below the trigger"
            - name: Repayment reserve from harvest income
              description: |-
                ## Purpose
                Equal monthly instalments and two harvests a year will clash in the lean months unless harvest money is set aside. Moving a fixed share of each harvest into a separate reserve account means the off-season instalments are already covered when the crop money runs out.

                ## Milestones
                1. The total instalments due in the lean months worked out from the cash flow forecast.
                2. A separate savings account opened for the reserve.
                3. A fixed share of every harvest payment moved into the reserve on receipt.
                4. Lean-season instalments paid from the reserve without new borrowing.

                ## Notes
                Start from the **Savings goal** template. Keep the reserve at a different institution from your everyday account if the temptation to dip into it is strong.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A reserve account holds enough to cover all lean-season instalments before the last harvest payment is spent."
                cadence: cyclic
              tasks:
                - "Total the instalments due in the months with little or no farm income"
                - "Open a separate savings account for the repayment reserve"
                - "Decide the share of each harvest payment that goes into the reserve"
                - "Move the agreed share of last month's sales into the reserve @recurring(monthly:20)"
            - name: Quarterly update to your loan officer
              description: |-
                ## Purpose
                Loan officers rarely hear from farmers until something has gone wrong, which makes every problem look like a surprise. A short quarterly note on crop progress, sales and anything that may affect repayments builds the kind of relationship that makes the next loan, or a request for flexibility after a bad season, much easier.

                ## Milestones
                1. The loan officer's name, direct number and preferred contact method recorded.
                2. A short update covering crops in the ground, sales to date and expected harvest sent each quarter.
                3. Any risk to repayment raised early with a proposed solution.
                4. A record of every update and the officer's response kept with the loan file.
              priority: medium
              frontmatter:
                mode: service
                output_kind: habit
                success_criteria: "Four quarterly updates a year reach the loan officer, each logged with the date and any reply."
                cadence: rolling
              tasks:
                - "Record your loan officer's name and direct contact details"
                - "Ask the agent to draft a five-line update from this quarter's sales and crop notes"
                - "Send the loan officer a short progress note and log it @recurring(quarterly)"
                - "Invite the officer to visit the farm once a year"
            - name: Debt service coverage tracker
              description: |-
                ## Purpose
                The question behind every loan decision is whether the farm earns enough to cover its repayments with room to spare. Working out your own debt service coverage each quarter, cash available for repayments divided by repayments due, gives you the same number the lender uses and shows when it is safe to borrow more.

                ## Milestones
                1. A tracker set up with net cash from farming and total repayments for each quarter.
                2. The coverage ratio calculated for the last four quarters.
                3. The minimum ratio your lender requires, if any, written at the top.
                4. A trend line showing whether coverage is rising or falling.

                ## Notes
                Start from the **Metrics log** template. A ratio near one means every dollar earned goes to the lender, leaving nothing for a bad month.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "The tracker shows a coverage ratio for each of the last four quarters and the lender's minimum, if one applies."
                cadence: rolling
              tasks:
                - "Set up a tracker with columns for net farm cash and repayments due"
                - "Ask your lender what coverage ratio they look for"
                - "Fill in the last four quarters from the books"
                - "Calculate this quarter's coverage ratio from the books @recurring(quarterly)"
            - name: Pre-planting finance review
              description: |-
                ## Purpose
                The weeks before the main planting season are when input credit is cheapest to arrange and when a looming shortfall can still be fixed. A yearly review of debts, reserves, last season's results and this season's needs, done before seed is bought, turns borrowing from a panic into a plan.

                ## Milestones
                1. Last season's actual income and costs compared with the forecast.
                2. Every debt balance and the year's repayments brought up to date.
                3. This season's input and labour needs costed and set against cash and reserves.
                4. Any new borrowing or input credit agreed before planting starts.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: decision
                success_criteria: "A dated review note before each main planting season records last season's results, current debts and any finance agreed for the new season."
                cadence: cyclic
              tasks:
                - "Set a date six weeks before main planting for the review"
                - "Compare last season's actual results with the forecast"
                - "Cost this season's seed, fertiliser and labour needs"
                - "Hold the full finance review before buying seed for the season @recurring(yearly)"
            - name: Agro-shop and input supplier credit accounts
              description: |-
                ## Purpose
                Buying fertiliser and feed on account at the farm supply store feels free, but these accounts often carry high charges for late settlement and quietly grow across a season. Treating supplier credit as a loan, with a limit, a statement check and a settlement date tied to harvest, keeps it useful without letting it become the most expensive debt you have.

                ## Milestones
                1. Every supplier account listed with its limit, terms and charges for late payment.
                2. A personal limit set for each account, below the supplier's limit.
                3. Supplier statements checked monthly against your own receipts.
                4. Every account settled by an agreed date after the harvest.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Each supplier account has a written limit and settlement date, and is cleared within the agreed period after harvest."
                cadence: cyclic
              tasks:
                - "Ask each supplier for their written credit terms and late charges"
                - "Set your own spending limit for each account"
                - "Check each supplier statement against your receipts @recurring(monthly:25)"
                - "Agree a settlement date for each account tied to harvest"
            - name: Buyer payments matched to loan instalments
              description: |-
                ## Purpose
                A hotel paying in sixty days or a market agent who pays when he feels like it can leave a farmer unable to meet an instalment that falls in between. Tracking what each buyer owes and chasing it in time for each repayment links the money you are owed directly to the money you owe.

                ## Milestones
                1. Every unpaid invoice listed with buyer, amount and date due.
                2. The invoices needed to cover each coming instalment marked.
                3. Overdue buyers chased weekly in the busy season.
                4. No instalment paid late because a buyer was late.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "An up-to-date list of unpaid buyer invoices is kept and matched against each coming instalment for a full season."
                cadence: rolling
              tasks:
                - "List every unpaid invoice with buyer, amount and due date"
                - "Mark which invoices must be paid to cover next month's instalments"
                - "Chase every overdue buyer by phone or message @recurring(weekly:thu)"
                - "Ask slow payers whether a shorter payment term is possible"
            - name: Loan conditions and covenant log
              description: |-
                ## Purpose
                Loan agreements carry conditions that are easy to forget once the money arrives: keeping insurance in force, sending yearly accounts, not selling pledged equipment, keeping a balance with the lender. Breaking one can let the lender call the loan even when every instalment is paid, so a short log of each condition and its deadline is worth keeping.

                ## Milestones
                1. Every condition in each loan agreement listed with what it requires and when.
                2. Proof of compliance, such as insurance certificates or submitted accounts, filed against each condition.
                3. A quarterly check that every condition is still met.
                4. Any condition you cannot meet raised with the lender before the deadline.

                ## Notes
                Read the whole agreement, not only the repayment page. Ask the loan officer to explain any condition you do not understand before you sign, and keep the answer in writing.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A condition log covers every loan, each condition has filed proof of compliance, and quarterly checks are recorded."
                cadence: rolling
              tasks:
                - "Read each loan agreement and list every condition and deadline"
                - "File proof of compliance against each condition"
                - "Check every loan condition is still met and note any risk @recurring(quarterly)"
            - name: Understanding interest, fees and the true cost of a loan
              description: |-
                ## Purpose
                Two loans at the same quoted rate can cost very different amounts once processing fees, compulsory insurance, flat-rate interest and penalty charges are counted. Learning how to work out the total cost of credit lets you compare a development bank loan, a credit union loan and supplier credit fairly, and spot a cheap-looking offer that is not.

                ## Milestones
                1. The difference between flat-rate and reducing-balance interest explained in your own words.
                2. A list of the fees and charges a farm loan can carry.
                3. The total cost of one real loan offer worked out, including all fees.
                4. The annual percentage rate of that offer compared with its quoted rate.

                ## Notes
                Ask every lender for the total amount you will repay over the life of the loan. It is the single most honest number on the page.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A worked example shows the total repaid and the effective annual rate of one real loan offer, with every fee listed."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Read a plain-language guide to flat-rate and reducing-balance interest"
                - "List every fee mentioned on a real loan offer or brochure"
                - "Calculate the total repaid on that offer including fees"
                - "Ask the lender to confirm the annual percentage rate in writing"
            - name: Reading an amortisation schedule and seasonal repayments
              description: |-
                ## Purpose
                Grace periods, harvest-timed lump payments and balloons at the end are common in farm loans, and the repayment schedule is where the real shape of the debt shows. Learning to read one, and to see how much of each payment is interest, helps you ask for a schedule that fits the crop rather than the bank's default.

                ## Milestones
                1. An amortisation schedule for a real or sample loan read line by line.
                2. The interest and principal share of the first, middle and last payments identified.
                3. Monthly, quarterly and harvest-timed schedules compared for the same loan amount.
                4. A preferred repayment pattern for your farm written down with the reason.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Three repayment patterns for the same loan have been compared and a preferred pattern for your farm is recorded with a reason."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Ask a lender for a sample repayment schedule for a farm loan"
                - "Mark the interest and principal in the first and last payments"
                - "Build the same loan as a harvest-timed schedule in a spreadsheet"
                - "Note which pattern fits your cash flow forecast best"
            - name: How a loan officer assesses a farm
              description: |-
                ## Purpose
                Lenders weigh character, capacity, capital, collateral and conditions, and for farms they add questions about weather, markets and land security that town businesses never face. Understanding what they look for, from the officer's side of the desk, lets you fill the gaps in your application before you submit it.

                ## Milestones
                1. The main tests lenders apply to a farm application listed and explained.
                2. Your own farm scored honestly against each one.
                3. The two weakest points identified, each with a step to strengthen it.
                4. A conversation held with a loan officer or retired banker about what makes farm applications fail.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A written self-assessment scores the farm against each lending test and names an action for the two weakest areas."
                cadence: phased
                effort_hours_estimate: "5"
              tasks:
                - "Read how lenders apply character, capacity, capital, collateral and conditions"
                - "Score your farm against each test on a simple scale"
                - "Pick the two weakest areas and write one action for each"
                - "Ask a loan officer what most often causes farm applications to be declined"
            - name: Hire purchase, lease and equipment loans explained
              description: |-
                ## Purpose
                Tractors, cold rooms and solar pumps can be bought outright, on hire purchase from the dealer, on lease, or with a bank equipment loan, and each changes who owns the machine, what happens if it breaks, and the total paid. Knowing the structures before the dealer's salesman explains them puts you in charge of the conversation.

                ## Milestones
                1. The differences between hire purchase, finance lease, operating lease and equipment loan written in a table.
                2. Ownership, deposit, insurance duty and early settlement rules noted for each.
                3. One dealer finance offer read and classified correctly.
                4. Questions to ask any equipment financier written down.

                ## Notes
                Dealer finance sometimes hides its cost inside the machine price. Ask for the cash price and the finance price separately.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A comparison table explains four equipment finance structures and a list of questions is ready for the next dealer conversation."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Read a guide comparing hire purchase, leasing and equipment loans"
                - "Build a table of ownership, deposit and insurance rules for each"
                - "Ask a dealer for the cash price and finance price of one machine"
                - "Write the five questions you will ask every equipment financier"
            - name: Credit union membership and farm lending
              description: |-
                ## Purpose
                Credit unions are often the most approachable lender for small farmers, but they lend against your savings history and share balance, and that history takes time to build. Learning how your local credit union's farm or small business lending works, and joining early, means the money is available when you need it rather than months later.

                ## Milestones
                1. Two local credit unions compared on farm lending, share requirements and rates.
                2. Membership opened at the better fit, with a regular savings deposit set up.
                3. The ratio of savings to loan they typically lend at noted.
                4. A date by which your savings history will support the loan you plan.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "You are a member of a credit union with regular deposits and know the savings needed to qualify for your planned loan."
                cadence: phased
                effort_hours_estimate: "3"
              tasks:
                - "Ask two credit unions about their farm and small business loans"
                - "Compare their share requirements, savings ratios and rates"
                - "Join the better fit and set up a regular savings deposit"
                - "Work out when your savings will support the loan you plan"
            - name: Donor grants and matching funds for agribusiness
              description: |-
                ## Purpose
                Development agencies and regional programmes regularly offer matching grants for farm investments such as irrigation, packhouses or processing equipment, usually requiring the farmer to fund part of the cost from savings or a loan. Understanding how these calls work, and how a grant and a loan can be combined in one financing plan, lets you plan for them instead of finding out after the deadline.

                ## Milestones
                1. The main donor, regional and development programmes that fund agribusiness in your country listed.
                2. The usual match share, eligible items and reporting duties for two of them noted.
                3. A note on how a grant would combine with a loan for your next investment.
                4. A place to watch for new calls, such as a newsletter or farmer group, set up.

                ## Notes
                Government rebates and incentives are handled in a separate area. This project is about competitive grants that sit alongside borrowing in a financing plan.
              priority: low
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A written list of grant programmes with match rules is held and a financing note shows how one would combine with a loan."
                cadence: phased
                effort_hours_estimate: "5"
              tasks:
                - "Ask your extension officer and farmer group about current donor-funded programmes"
                - "Note the match share and eligible items for two programmes"
                - "Sketch how a grant and a loan would together fund your next investment"
                - "Sign up for one newsletter or group that announces new calls"
            - name: Warehouse receipts, invoice finance and value chain credit
              description: |-
                ## Purpose
                Beyond the standard loan, some farmers can borrow against stored produce, against a confirmed purchase order or invoice, or through a buyer or processor who pre-finances inputs. Learning how these forms of value chain finance work shows whether a contract with a supermarket or processor could open credit you cannot get on your own balance sheet.

                ## Milestones
                1. Warehouse receipt finance, invoice discounting, purchase order finance and buyer pre-finance each explained in a paragraph.
                2. The forms available in your country and from whom identified.
                3. The cost and risk of each compared with a standard loan.
                4. A decision noted on whether any fits your current buyers.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A short note explains four value chain finance options, which are available locally, and whether any fits your farm now."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Read how warehouse receipts and invoice discounting work for farm produce"
                - "Ask your main buyer whether they pre-finance inputs for suppliers"
                - "Ask your bank whether it discounts invoices from large buyers"
                - "Write down whether any option fits your current sales"
            - name: Farm financial ratios a lender reads
              description: |-
                ## Purpose
                Four ratios tell a lender most of what they want to know: whether you can pay this month's bills, how much of the farm is already owed to others, and how hard your assets work. Learning to calculate the current ratio, debt to asset ratio and return on assets from your own statements lets you see the farm the way a credit committee will.

                ## Milestones
                1. Current ratio, debt to asset ratio, debt service coverage and return on assets each explained.
                2. All four calculated from your own balance sheet and income statement.
                3. Each ratio compared with the range your lender or a farm finance guide treats as healthy.
                4. One action noted to improve the weakest ratio.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Four ratios have been calculated from your own statements and compared with a stated healthy range."
                cadence: phased
                effort_hours_estimate: "3"
              tasks:
                - "Read a farm finance guide's explanation of the four main ratios"
                - "Calculate each ratio from your balance sheet and income statement"
                - "Compare your results with the ranges the guide or lender gives"
                - "Note one change that would lift the weakest ratio"
            - name: Lender-ready farm business plan
              description: |-
                ## Purpose
                Agricultural lenders and programmes ask for a farm plan that shows the enterprise, the market, the costs, the cash flow and how the loan will be repaid, and a vague one is the most common reason for delay. Writing it in stages, using the documents already built in this area, produces a plan that answers the officer's questions before they are asked.

                ## Milestones
                1. A one-page summary of the farm, the loan requested and how it will be repaid.
                2. Sections on enterprises, land, markets and buyers, management and risks drafted.
                3. The seasonal cash flow, statements and debt table attached as appendices.
                4. A hurricane, drought and price fall scenario showing how repayments would still be met.
                5. The plan reviewed by an extension officer, accountant or business adviser.

                ## Notes
                Keep the plan short: fifteen pages that a loan officer reads beat forty that sit on a desk. Ask the lender whether they have their own template first.
              priority: high
              deadlineOffsetDays: 90
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "A farm business plan with summary, market, cash flow, risk scenarios and repayment plan has been reviewed by an adviser and is ready to submit."
                cadence: phased
                effort_hours_estimate: "20"
              tasks:
                - "Ask your chosen lender whether they have a preferred farm plan format"
                - "Ask the agent to draft the summary page from your debt table, forecast and loan note"
                - "Write the market section naming your actual buyers and their volumes"
                - "Model a bad-season scenario and show how repayments would be met"
                - "Book a review of the draft with an extension officer or accountant"
            - name: Comparing three loan offers side by side
              description: |-
                ## Purpose
                Farmers often take the first offer that says yes, even when a second lender would have given a grace period or a cheaper rate. Getting at least three written offers and comparing them on total cost, repayment pattern, security and conditions makes the choice visible and gives you something to negotiate with.

                ## Milestones
                1. Three written loan offers or indicative terms in hand.
                2. A comparison table with total repaid, rate, fees, grace period, security and conditions for each.
                3. One lender asked to improve a term using the other offers.
                4. A chosen offer recorded with the reasons it won.

                ## Notes
                Start from the **Purchase decision** template. Compare the repayment pattern as carefully as the rate: a slightly dearer loan with harvest-timed payments can be the safer one.
              priority: medium
              deadlineOffsetDays: 60
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A table compares three written offers on total cost, schedule, security and conditions, and the chosen offer is recorded with reasons."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Request written indicative terms from three lenders on the lender map"
                - "Fill a comparison table with total repaid, fees, grace period and security"
                - "Ask your preferred lender to match the best term from the others"
                - "Record the chosen offer and the reasons it won"
            - name: Choosing finance for a tractor or irrigation system
              description: |-
                ## Purpose
                Once the machine or system itself is chosen, the way it is paid for can change its cost by a large margin. Comparing cash purchase, dealer hire purchase, a lease and a development bank equipment loan for the same quote shows which suits the farm's cash flow and which leaves you owning the asset at the end.

                ## Milestones
                1. One agreed quote for the equipment, with cash price and delivery date.
                2. At least three ways of paying for it costed over the same period.
                3. The effect of each on monthly cash flow and on your security register checked.
                4. A financing route chosen and the paperwork started.

                ## Notes
                Insurance is usually compulsory on financed equipment, so include the premium in each option's cost.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "Three financing routes for the same equipment quote are costed over the same period and the chosen route is recorded."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Get a final quote with the cash price for the chosen equipment"
                - "Ask the dealer for their hire purchase terms on that quote"
                - "Ask your lender for equipment loan terms on the same amount"
                - "Cost each route including insurance over the full term and pick one"
            - name: Refinancing expensive short-term farm debt
              description: |-
                ## Purpose
                Farmers who have patched cash gaps with overdrafts, credit cards, moneylenders and late supplier accounts can be paying several times the cost of a term loan. Working out whether one cheaper loan could clear the expensive debts, and what it would cost to do so, can free up money every month for the farm itself.

                ## Milestones
                1. The most expensive debts identified from the debt table by their effective rate.
                2. The total cost of continuing as now compared with one consolidation loan.
                3. Early settlement charges on each existing debt confirmed.
                4. A decision recorded, and if proceeding, the old accounts closed once cleared.

                ## Notes
                Consolidation only helps if the cleared accounts stay closed. Ask a financial counsellor or your credit union to check the plan before signing.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A written comparison shows the cost of current debts against a consolidation loan, and the decision and any closed accounts are recorded."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Rank the debts in the debt table by effective interest rate"
                - "Ask each creditor for the early settlement amount"
                - "Get a quote for a single loan to clear the most expensive debts"
                - "Compare the two paths over two years and record the decision"
            - name: Seasonal credit line versus term loan for inputs
              description: |-
                ## Purpose
                Seed, fertiliser and labour for one crop cycle are a short-term need, and paying for them with a five-year term loan means paying interest long after the crop is sold. Deciding whether a revolving seasonal line, supplier credit or a short crop loan fits your input costs better keeps long-term borrowing for long-term assets.

                ## Milestones
                1. Input costs for one crop cycle separated from capital spending in the forecast.
                2. Seasonal credit products from two lenders compared with a term loan for the same amount.
                3. The repayment date of each option matched against harvest income.
                4. A rule written for which kinds of spending each type of borrowing will cover.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A written rule states which costs go on seasonal credit and which on term loans, backed by a comparison of two lenders' products."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Split the forecast spending into crop inputs and long-life assets"
                - "Ask two lenders about seasonal or crop credit lines"
                - "Compare their cost and repayment timing with a term loan"
                - "Write a one-line rule for what each kind of borrowing pays for"
            - name: Guarantors and co-signers agreed openly
              description: |-
                ## Purpose
                When a farm lacks security, lenders often ask for a guarantor, and it is usually a spouse, parent or sibling who signs without fully understanding that they may have to pay. Agreeing the arrangement openly, with the guarantor told the amount, the risks and what happens if the farm cannot pay, protects both the loan and the family relationship.

                ## Milestones
                1. The lender's guarantee requirements and the guarantor's exact liability confirmed in writing.
                2. A conversation held with the proposed guarantor covering amount, term and what happens on default.
                3. The guarantor advised to take independent advice before signing.
                4. A written family note of how the farm will keep the guarantor informed.

                ## Notes
                A guarantor's own credit is affected if the loan goes wrong. Keep them updated each quarter, not only when there is a problem.
              priority: medium
              frontmatter:
                mode: service
                output_kind: decision
                success_criteria: "The guarantor has seen the liability in writing, been encouraged to take independent advice, and an agreed update arrangement is written down."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Ask the lender to put the guarantor's liability in writing"
                - "Meet the proposed guarantor to explain the amount and the risks"
                - "Suggest the guarantor gets independent advice before signing"
                - "Agree how often you will update the guarantor on the loan"
            - name: Cutting the cost of existing borrowing
              description: |-
                ## Purpose
                Once a loan is running, its cost is not fixed: some lenders will drop a compulsory insurance product you already hold elsewhere, reduce the rate after a good repayment record, or waive fees for paying early from a strong harvest. A focused review of each loan can save real money without any new borrowing.

                ## Milestones
                1. Each loan's rate, fees and add-on products listed.
                2. Add-ons such as credit life cover checked against cover you already hold.
                3. A request made to each lender for a rate review based on your repayment record.
                4. The savings achieved, if any, recorded per loan.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "Every running loan has been reviewed with its lender, and the outcome and any saving are recorded per loan."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "List the rate, fees and add-on products on each running loan"
                - "Check whether any add-on duplicates cover you already hold"
                - "Write to each lender asking for a review based on your repayment record"
                - "Ask what it would cost to make a lump payment after harvest"
            - name: Moving from informal lenders to formal credit
              description: |-
                ## Purpose
                Many farmers rely on moneylenders, buyer advances or a hand in a sou-sou, a rotating savings group where each member takes the pot in turn, because the bank feels out of reach. Informal credit is quick but often expensive and leaves no record a lender can see. A deliberate move to formal savings and borrowing, step by step, builds the history that opens cheaper credit later.

                ## Milestones
                1. Every informal borrowing source listed with its real cost and terms.
                2. One formal account opened and used regularly for farm money.
                3. A first small formal loan or credit line taken and repaid on time.
                4. At least one informal debt replaced by cheaper formal credit.

                ## Notes
                A sou-sou used for saving is not a problem and can sit happily alongside a bank account. The aim is to stop depending on expensive informal loans.
              priority: medium
              frontmatter:
                mode: building
                output_kind: habit
                success_criteria: "A first formal loan has been repaid on time and at least one informal debt has been replaced with formal credit."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Write down what each informal loan really costs per month"
                - "Open a formal account and pass farm income through it"
                - "Apply for a small first loan or credit line you can easily repay"
                - "Use the formal loan to clear the most expensive informal debt"
            - name: Loan application submission and interview
              description: |-
                ## Purpose
                The day the application goes in and the interview that follows decide most farm loans. Arriving with a complete file, a clear story of what the money is for and confident answers about repayment shortens the decision and signals to the lender that the farm is well run.

                ## Milestones
                1. The application form completed and checked against the lender's document list.
                2. The farm plan, statements, cash flow and security documents attached.
                3. Answers prepared to the ten questions loan officers most often ask farmers.
                4. The interview attended and any follow-up requests met within a week.

                ## Notes
                Ask at the end of the interview what happens next and when you should expect a decision. Write it down and follow up on that date.
              priority: high
              deadlineOffsetDays: 120
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A complete application has been submitted, the interview attended, and every follow-up request answered within seven days."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Check the application file against the lender's document list"
                - "Practise answers on loan purpose, repayment and bad-season plans"
                - "Submit the application and get a dated receipt"
                - "Send any extra documents the officer requests within seven days"
            - name: Preparing for the loan officer's farm visit
              description: |-
                ## Purpose
                Most agricultural lenders visit the farm before approving, and what the officer sees on the walk matters as much as the paperwork. Planning the visit, with the records at hand, the fields and animals the loan concerns ready to show and a short route that tells the farm's story, turns an inspection into an argument for the loan.

                ## Milestones
                1. A visit date agreed and directions or a map pin sent to the officer.
                2. Records, receipts and the farm plan ready on the day.
                3. A short walking route planned past the enterprises the loan will fund.
                4. Questions raised during the visit answered in writing within a week.
              priority: medium
              deadlineOffsetDays: 120
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "The officer's visit has taken place with records on hand, and every question raised has a written answer within a week."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Agree a date and send clear directions to the farm"
                - "Plan a walking route past the fields or pens the loan will fund"
                - "Put the records folder and farm plan where you can reach them on the walk"
                - "Write up and send answers to any questions raised on the day"
            - name: Loan disbursement and drawdown plan
              description: |-
                ## Purpose
                Farm loans are often paid out in stages against receipts or inspected work, and farmers lose weeks because they did not know what each release requires. Agreeing the drawdown stages, the proof needed for each, and a plan to spend each tranche exactly as approved keeps the money flowing on time and the lender confident.

                ## Milestones
                1. The disbursement stages and the proof needed for each confirmed with the lender.
                2. Suppliers lined up to deliver as each tranche is released.
                3. Receipts for each tranche filed and submitted to release the next.
                4. All funds spent on the approved items, with a final statement to the lender.

                ## Notes
                Using loan money for anything other than the approved purpose can breach the agreement. If plans change, ask the lender in writing first.
              priority: medium
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "Every tranche has been drawn with receipts filed, and a final spending statement matching the approved purpose has been sent to the lender."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Ask the lender for the list of drawdown stages and required proof"
                - "Confirm supplier delivery dates against each release"
                - "File the receipts for each tranche and submit them to the lender"
                - "Send a final statement of how the loan was spent"
            - name: Restructuring request after a hurricane or crop failure
              description: |-
                ## Purpose
                A hurricane, flood or disease outbreak can wipe out the income meant for repayments in a single week. Lenders and agricultural banks often have relief options such as payment holidays or extended terms, but they are given to borrowers who come early with evidence and a realistic recovery plan, not to those who go silent.

                ## Milestones
                1. Losses recorded with dated photographs, extension officer reports and insurance claims.
                2. The lender contacted before the next instalment falls due.
                3. A revised cash flow showing when income will return.
                4. A restructuring proposal submitted and the lender's written decision filed.

                ## Notes
                Ask for any new terms in writing before stopping a payment. An informal promise from a branch officer does not change the agreement.
              priority: high
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A written restructuring proposal with loss evidence and revised cash flow has been submitted and the lender's decision is on file."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Photograph and date every loss before clearing up"
                - "Call the loan officer before the next instalment is due"
                - "Rebuild the cash flow forecast from the damaged position"
                - "Submit a written request with evidence and a recovery timeline"
            - name: Paying off a loan and releasing the security
              description: |-
                ## Purpose
                Paying the last instalment is not the end of a loan: the lien on the vehicle, the charge on the land or the bill of sale on the equipment stays on record until it is formally released. Getting a paid-in-full letter and the security discharged frees the asset for the next loan and avoids an unpleasant surprise when you try to sell it.

                ## Milestones
                1. The final settlement figure confirmed in writing by the lender.
                2. The final payment made and a paid-in-full letter received.
                3. The lien, charge or bill of sale formally released and the original documents returned.
                4. The debt table, security register and credit record updated.
              priority: low
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A paid-in-full letter and proof of released security are filed, and the debt table and security register are updated."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Ask the lender for a written final settlement figure"
                - "Make the final payment and request a paid-in-full letter"
                - "Ask what is needed to discharge the lien or charge and complete it"
                - "Remove the loan from the debt table and security register"
            - name: First farm loan with no track record
              description: |-
                ## Purpose
                Young and first-time farmers face a hard loop: no lender wants to finance a farm without a record, and there is no record without finance. Starting small, with a youth or new farmer programme, a credit union loan backed by savings, or supplier credit repaid on time, builds the history that a larger loan needs within two or three seasons.

                ## Milestones
                1. Youth or new farmer finance schemes in your country identified and their rules noted.
                2. One small, low-risk first loan or credit line chosen for a single crop cycle.
                3. Sales and costs from that cycle recorded in full.
                4. The first loan repaid on time and a reference letter requested from the lender.

                ## Notes
                A mentor farmer who will vouch for you, or a farmer group membership, can count for a lot with a lender who has never met you.
              priority: medium
              deadlineOffsetDays: 180
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A first small farm loan has been repaid on time, with a full record of the crop cycle and a reference letter from the lender."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "Ask the extension office about youth or new farmer finance schemes"
                - "Choose one crop cycle small enough to fund with a first loan"
                - "Record every sale and cost from that cycle"
                - "Ask the lender for a reference letter once the loan is repaid"
            - name: Start-up capital for an agribusiness founder
              description: |-
                ## Purpose
                Founders starting a hydroponic farm, a processing line or an input business usually need money before there are any sales to show a bank. Mapping the realistic sources, from personal savings and family to angel investors, accelerator grants and early buyer commitments, and deciding what to give up for each, prevents a founder from borrowing against a house for an untested idea.

                ## Milestones
                1. The start-up budget split into what must be paid before first sales and what can wait.
                2. Possible sources listed: savings, family, accelerators, angels, buyer advances and loans.
                3. Each source's cost, control given up and risk to personal assets noted.
                4. A funding mix chosen and the first source approached.

                ## Notes
                Money from family and friends works best with a short written note of whether it is a loan, a gift or a share, and when it is expected back. Take legal advice before issuing any shares.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A written funding plan shows the start-up budget, each chosen source with its cost and control terms, and the first source approached."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "Split the start-up budget into before-first-sale and later spending"
                - "List every source of start-up money open to you"
                - "Note the cost, control and personal risk of each source"
                - "Approach the first source in your chosen funding mix"
            - name: Taking over a family farm with existing debts
              description: |-
                ## Purpose
                Inheriting or taking over the family farm often means inheriting its loans, supplier accounts and guarantees too, sometimes in a parent's name. Finding out exactly what is owed, to whom, and whose name is on each agreement before the handover lets the next generation negotiate with lenders rather than discover arrears months later.

                ## Milestones
                1. Every debt and guarantee tied to the farm identified with the name of the borrower.
                2. Lenders told of the planned handover and asked what they require.
                3. A family meeting held to agree who takes on which debt.
                4. Agreements transferred, refinanced or settled, with advice from an attorney where needed.

                ## Notes
                Where a parent has died, estate law and the lender's own rules decide what happens to the debt. Speak to an attorney before signing anything that makes you personally liable.
              priority: medium
              frontmatter:
                mode: service
                output_kind: decision
                success_criteria: "All farm debts are listed with their legal borrower, and a written family agreement records who is responsible for each one going forward."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "Collect every loan, supplier and guarantee document tied to the farm"
                - "Note the name of the legal borrower on each agreement"
                - "Hold a family meeting to agree who takes on which debt"
                - "Book an attorney to review the handover before anything is signed"
            - name: Group borrowing through a farmer cooperative
              description: |-
                ## Purpose
                Banks and programmes are often more willing to finance a group of farmers than one smallholder, especially for shared assets such as a packhouse, cold room or tractor. Group lending works only when the rules on who pays what, what happens if one member defaults and who holds the asset are written and agreed before the money arrives.

                ## Milestones
                1. The group's legal form and its ability to borrow confirmed.
                2. Written rules agreed on contributions, repayment shares and default by a member.
                3. A treasurer and a second signatory appointed, with monthly statements shared with members.
                4. The group loan approved and its first year of repayments made on time.

                ## Notes
                Joint and several liability means each member can be pursued for the whole debt. Make sure every member understands this before signing.
              priority: medium
              frontmatter:
                mode: service
                output_kind: deliverable
                success_criteria: "The group has written lending rules signed by every member and a year of on-time group repayments with statements shared monthly."
                cadence: phased
                effort_hours_estimate: "15"
              tasks:
                - "Check whether the cooperative or group can legally borrow in its own name"
                - "Draft rules on contributions, repayment shares and member default"
                - "Appoint a treasurer and a second signatory for the group account"
                - "Share the group loan statement at the monthly members' meeting @recurring(monthly:10)"
            - name: Diaspora family funding a farm back home
              description: |-
                ## Purpose
                Many Caribbean farms are part-funded by a relative in London, New York or Toronto who sends money for a tractor or a new block. Without a clear arrangement, that money becomes a source of family tension when the harvest disappoints. Agreeing in writing whether it is a gift, a loan or a share, how it will be reported, and how money moves, keeps the support coming and the family together.

                ## Milestones
                1. The nature of the money, gift, loan or share, agreed and written down.
                2. Repayment terms or profit sharing set out if it is not a gift.
                3. A cheap, traceable way of sending money agreed, with receipts kept.
                4. A quarterly report with photographs and figures sent to the overseas funder.

                ## Notes
                Overseas funders may have tax reporting duties in their own country. Suggest they check with an accountant there.
              priority: low
              frontmatter:
                mode: service
                output_kind: decision
                success_criteria: "A signed note records the nature and terms of the diaspora funding, and quarterly reports with figures have been sent for a year."
                cadence: phased
                effort_hours_estimate: "5"
              tasks:
                - "Discuss with the overseas relative whether the money is a gift, loan or share"
                - "Write the agreed terms in a short note both sides sign"
                - "Agree a traceable way of sending the money and keep every receipt"
                - "Send the funder a short report with photographs and figures each quarter"
            - name: Phased capital plan for a farm expansion
              description: |-
                ## Purpose
                Expanding into a second greenhouse block, a packhouse or a larger herd usually needs more money than one lender will give at once. Breaking the expansion into phases, each funded and proven before the next, keeps borrowing within what current income can carry and gives the lender evidence at each step.

                ## Milestones
                1. The expansion split into two to four phases, each with cost, income and timing.
                2. A funding source matched to each phase: own cash, loan, grant or equipment finance.
                3. A test set for each phase that must be met before the next is financed.
                4. The first phase funded and its results recorded against the plan.
              priority: medium
              deadlineOffsetDays: 365
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "A phased expansion plan lists cost, funding source and go-ahead test for each phase, and the first phase's results are recorded."
                cadence: phased
                effort_hours_estimate: "15"
              tasks:
                - "Break the expansion into phases with cost and expected income"
                - "Match a funding source to each phase"
                - "Write the result each phase must achieve before the next starts"
                - "Record the first phase's actual results against the plan"
            - name: Green and climate finance for resilient farm investments
              description: |-
                ## Purpose
                Solar pumps, water harvesting, protected cultivation and hurricane-rated structures increasingly qualify for green credit lines and climate adaptation funds at better terms than ordinary loans. Finding which programmes operate locally, and documenting the resilience or energy benefit they ask for, can lower the cost of investments the farm needs anyway.

                ## Milestones
                1. Green credit lines and climate adaptation programmes open to farmers in your country listed.
                2. Their eligible investments and evidence requirements noted.
                3. One planned investment described in terms of water, energy or resilience benefit.
                4. An enquiry or application made for that investment.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A list of local green finance options is recorded and one planned investment has been put forward to one of them."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Ask your development bank whether it runs a green or climate credit line"
                - "List the eligible investments and evidence each programme requires"
                - "Describe one planned investment by its water, energy or resilience benefit"
                - "Send an enquiry to the best-matched programme"
            - name: Pitching an agribusiness to impact investors
              description: |-
                ## Purpose
                Agribusinesses that process, aggregate or export can attract impact investors and development finance institutions that will not lend to a single farm. These funders look for numbers on smallholder incomes, jobs and climate outcomes alongside a credible business. Preparing an investor pack with those measures, and understanding what equity or blended finance would mean for control, keeps a founder negotiating from strength.

                ## Milestones
                1. Impact investors and development finance bodies active in Caribbean agribusiness listed.
                2. An investor pack drafted with business model, financials and impact measures.
                3. Terms such as equity, convertible notes and blended finance understood with an adviser.
                4. At least three investor conversations held and their feedback recorded.

                ## Notes
                Take independent legal and financial advice before signing any term sheet. Give up as little control as the business can afford at this stage.
              priority: low
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "An investor pack with financials and impact measures exists and feedback from at least three investor conversations is recorded."
                cadence: phased
                effort_hours_estimate: "25"
              tasks:
                - "List impact investors and development funders active in regional agribusiness"
                - "Draft the investor pack with financials and impact measures"
                - "Book a session with an adviser to explain equity and blended finance terms"
                - "Hold three investor conversations and record their feedback"
            - name: Variable rate and foreign currency loan risk check
              description: |-
                ## Purpose
                Some farm loans carry a rate that moves with the lender's prime rate, and some equipment or export finance is priced in US dollars while the farm earns in local currency. Either can raise instalments without warning. Testing what a rate rise or a currency move would do to your repayments shows whether the farm could absorb it, and whether a fixed rate or local currency loan is worth asking for.

                ## Milestones
                1. Every loan marked as fixed or variable rate and by the currency it is repaid in.
                2. Instalments recalculated for a two-point rate rise on each variable loan.
                3. The effect of a weaker local currency on any foreign currency loan worked out.
                4. A decision recorded on whether to request a fixed rate or local currency refinancing.

                ## Notes
                Ask the lender how and how often a variable rate is reset, and get the answer in writing. This is a test of exposure, not a forecast of rates.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "Each loan is classified by rate type and currency, stressed instalments are calculated, and a decision on refinancing is recorded."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Mark each loan in the debt table as fixed or variable and note its currency"
                - "Ask each lender how and when a variable rate is reset"
                - "Recalculate instalments for a two-point rate rise on each variable loan"
                - "Record whether a fixed rate or local currency loan is worth requesting"
            - name: Five-year farm debt strategy
              description: |-
                ## Purpose
                Experienced farmers borrow on purpose: they know how much debt the farm can carry, which assets will be financed in which year and when existing loans fall away to make room. A written five-year debt strategy, reviewed each year, keeps the farm growing without ever drifting past what one bad season could survive.

                ## Milestones
                1. A maximum debt level and minimum coverage ratio set for the farm.
                2. Existing loans plotted by year to show when each ends.
                3. Planned investments for the next five years placed in the year they would be financed.
                4. The main risks to the strategy listed with a response for each.
                5. A yearly review date set and the first review recorded.

                ## Notes
                Start from the **Risk register** template for the risks section. Ask your accountant to check the debt limits against your statements.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A five-year debt plan sets a debt limit and coverage floor, maps loans and investments by year, and has a recorded yearly review."
                cadence: cyclic
              tasks:
                - "Set a maximum debt level and minimum coverage ratio for the farm"
                - "Plot existing loans by year to show when each ends"
                - "Place planned investments in the year they would be financed"
                - "Review the five-year debt plan against the latest statements @recurring(yearly)"
---

# Farm Finance and Loans

This area is for farmers and agribusiness founders who borrow, or are about to: the vegetable grower who needs a drip system before the dry season, the livestock farmer eyeing a second pen, and the founder with a processing idea and no track record. It starts with foundations (every debt on one page, farm money separated from household money, a seasonal cash flow, statements a lender can read and a clear idea of who lends to farmers), then the monthly machinery of repayments, books and reserves, the knowledge that makes loan paperwork readable, decisions on loan offers, equipment finance, refinancing and guarantors, the dated moments of applying, drawing down, restructuring and paying off, situations for first-time farmers, founders, cooperatives, successors and diaspora family, and finally specialist work on expansion, green finance, impact investors and a five-year debt strategy.

What repeats is a weekly cash check and buyer payment chase in the busy season, a monthly instalment check, statement check, reconciliation, reserve transfer and supplier account review on different days, quarterly lender updates, coverage ratios and loan condition checks, and a yearly review before planting. The Month-end close, Savings goal, Metrics log, Purchase decision and Risk register templates pair with the books, the repayment reserve, the coverage tracker, loan comparisons and the long-range debt plan. Installing adds all 50 projects as active, so archive the ones that are not for you yet.
