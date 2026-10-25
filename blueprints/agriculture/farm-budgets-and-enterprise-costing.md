---
id: agriculture.farm-budgets-and-enterprise-costing
name: Farm Budgets and Enterprise Costing
description: "Know which crops and animals pay: costs coded by enterprise, your own labour valued, gross margins and break-even prices worked out, price floors set and a yearly farm budget checked against actuals every month."
category: business
version: 1.0.0
tags: [agriculture, farm-budgets-and-enterprise-costing, small-business, enterprise-budgets, gross-margin, cost-of-production, break-even, caribbean]
author: Aurum Technology
starter_structure:
  templates:
    - month-end-close
    - metrics-log
    - purchase-decision
    - meeting-notes
    - risk-register
  pillars:
    - name: Agriculture & Agribusiness
      emoji: "🌾"
      description: "Farming as a business, with the Caribbean in mind: vegetables, root crops, cocoa, coffee, citrus and other tree crops, poultry, goats, cattle and pigs, aquaculture and greenhouses, soil, irrigation and pest management, farm finance, selling to markets, hotels and supermarkets, agro-processing and export, insurance, hurricane resilience and extension services."
      pillarFrontmatter:
        review_cadence: monthly
      areas:
        - name: Farm Budgets and Enterprise Costing
          description: "Knowing which crops and animals make money: cost of production per enterprise, gross margins, price floors and a yearly farm budget."
          projects:
            - name: List of every enterprise the farm runs
              description: |-
                ## Purpose
                Costing starts with deciding what counts as one enterprise: the half acre of tomatoes, the 300-bird broiler batch, the goat herd, the plantain block. Most farms run more enterprises than the owner would list off the top of their head, and anything unlisted quietly absorbs costs that belong elsewhere. A written list with clear boundaries is the frame every later number hangs on.

                ## Milestones
                1. Every crop, animal group and side activity on the farm written as a named enterprise.
                2. Each enterprise given a unit of size, such as acres, number of trees, birds per batch or breeding does.
                3. Activities that are not enterprises, such as the farm vehicle or the store shed, marked as shared costs instead.
                4. The list agreed with anyone else who works or owns the farm.

                ## Notes
                Split an enterprise when its costs or prices differ enough to change a decision. Dry season and wet season tomatoes often deserve separate lines.
              priority: high
              deadlineOffsetDays: 14
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A written list names every enterprise on the farm with its unit of size, and shared cost items are listed separately."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Walk the farm and write down every crop, flock, herd and side activity"
                - "Give each enterprise a unit of size such as acres, trees or birds"
                - "Mark the vehicle, sheds and tools as shared costs, not enterprises"
                - "Go through the list with your partner or family and agree it"
            - name: Cost codes for each enterprise and shared costs
              description: |-
                ## Purpose
                A receipt for fertiliser tells you nothing about profit until you know which crop it went on. Giving each enterprise a short code, plus codes for shared costs like fuel, repairs and electricity, lets every bill be tagged the day it arrives. Ten minutes setting the codes now saves a weekend of guessing at year end.

                ## Milestones
                1. A short code for each enterprise, such as TOM, PEP, BRO or GOAT.
                2. Cost categories set under each code: seed or stock, fertiliser, crop protection, feed, vet, packing, transport, hired labour.
                3. Shared cost codes for fuel, repairs, utilities, rent, insurance and admin.
                4. The code list printed or saved where receipts are sorted.

                ## Notes
                Keep categories few. Eight or nine per enterprise is plenty; a code list nobody can remember will not be used.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A code list covering every enterprise and shared cost, with no more than nine categories each, is pinned where receipts are handled."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Give each enterprise on your list a three or four letter code"
                - "Choose the cost categories you will use under every enterprise"
                - "Add codes for fuel, repairs, utilities, rent and admin"
                - "Print the code list and pin it beside the receipt box"
            - name: Separate farm bank account and cash box
              description: |-
                ## Purpose
                When feed money, school fees and the grocery bill come out of the same pocket, no budget can tell you whether the farm paid its way. A separate account or at least a separate cash box, with household drawings recorded as drawings, is the single change that makes every other costing project possible. It also helps when a buyer, lender or accountant asks for statements.

                ## Milestones
                1. A bank or credit union account used only for farm income and spending.
                2. A cash box or envelope for market takings, with a simple in and out sheet.
                3. Money taken for the household recorded as owner drawings, not as a farm cost.
                4. Two full months run with no household bills paid from the farm account.

                ## Notes
                If a new account is not possible yet, a dedicated mobile wallet or a ledger page per month for farm cash still works.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: habit
                success_criteria: "Two consecutive months of farm statements show only farm income, farm costs and recorded owner drawings."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Ask your bank or credit union what a small business or farm account needs"
                - "Set up a cash box and an in and out sheet for market takings"
                - "Start recording money taken home as owner drawings"
                - "Move any direct debits for farm bills to the farm account"
            - name: Putting a value on your own and family labour
              description: |-
                ## Purpose
                Farm budgets often look healthy only because the owner, a spouse and the children work for nothing. Choosing an hourly value for unpaid family labour, usually what you would pay a hired worker for the same job, shows whether an enterprise pays you a wage or simply eats your weekends. Without it, a crop that loses money can look like your best one.

                ## Milestones
                1. The local daily rate for hired farm labour found from neighbours or the extension office.
                2. An hourly value set for owner labour and for each family member who helps.
                3. A rough estimate of hours per week each person puts into each enterprise.
                4. The labour value written into your costing sheet as a cost line.

                ## Notes
                Use the hired rate even if you would never pay yourself that much. The point is comparison between enterprises, not a salary.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "An hourly value for owner and family labour is set, written down with its source, and used as a cost line in at least one enterprise budget."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Ask two neighbours what they pay a day for field labour"
                - "Convert the day rate into an hourly value for family labour"
                - "Estimate weekly hours each person gives each enterprise"
                - "Add family labour as a cost line in your costing sheet"
            - name: Rebuilding last year's costs from receipts
              description: |-
                ## Purpose
                Before you can budget forward you need one honest look back. Gathering last year's receipts, bank statements, feed invoices and market takings, and sorting them by enterprise, gives the first real cost of production you have ever had. Gaps are normal; mark estimates as estimates and move on.

                ## Milestones
                1. Receipts, statements and sales records for the last 12 months gathered in one place.
                2. Every cost coded to an enterprise or a shared cost.
                3. Sales for each enterprise totalled, with estimates flagged where records are missing.
                4. A one-page summary of income and direct costs per enterprise for last year.

                ## Notes
                Bank statements fill most holes. Feed and input suppliers will often print a year of account history if you ask.
              priority: high
              deadlineOffsetDays: 45
              frontmatter:
                mode: research
                output_kind: artifact
                success_criteria: "A one-page summary shows last year's income and direct costs for every enterprise, with estimated figures clearly marked."
                cadence: one-shot
                effort_hours_estimate: "10"
              tasks:
                - "Collect every receipt and bank statement from the last 12 months into one box"
                - "Ask your feed and input suppliers for a printed account history"
                - "Code each cost to an enterprise or shared cost"
                - "Total sales and direct costs for each enterprise on one page"
            - name: Opening valuation of stock, inputs and assets
              description: |-
                ## Purpose
                Using up the fertiliser store and selling down the herd can make a farm show a cash profit while it gets poorer. Counting and valuing what is on hand at the start of the year, from feed bags and seed to animals, standing crops and equipment, lets the year-end count show real change rather than cash movement alone.

                ## Milestones
                1. A count of feed, seed, fertiliser, chemicals and packing material in store, valued at cost.
                2. Livestock counted by class, such as breeding does, growers or laying hens, with a value per head.
                3. Machinery, tools and structures listed with purchase year and an estimated current value.
                4. The opening valuation dated and filed with the year's budget.

                ## Notes
                Use the same valuation method at the start and end of the year. Changing methods mid-way makes the comparison meaningless.
              priority: medium
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A dated opening valuation lists inputs in store, livestock by class and major assets, each with a value."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Count every bag and container in the input store"
                - "Count livestock by class and set a value per head"
                - "List machinery and structures with purchase year and current value"
                - "Date the valuation sheet and file it with this year's budget"
            - name: Cost per hour of tractor, brushcutter and vehicle
              description: |-
                ## Purpose
                Tractors that work only 150 hours a year can cost several times per hour what one working 600 hours does, once depreciation, interest, insurance and repairs are spread over the work. Working out an hourly cost for each major machine lets you charge its use to the right enterprise and compare it fairly with hiring a contractor.

                ## Milestones
                1. Hours or kilometres worked last year estimated for each major machine.
                2. Yearly ownership costs listed for each: depreciation, insurance, licence, shelter and the return the money could earn elsewhere.
                3. Running costs per hour listed: fuel, oil, repairs and operator time.
                4. An hourly or per-kilometre cost for each machine recorded on the costing sheet.

                ## Notes
                Start an hour log on any machine without a working meter. A rough log beats a guess.
              priority: medium
              frontmatter:
                mode: building
                output_kind: knowledge
                success_criteria: "Each major machine and the farm vehicle has a written cost per hour or kilometre that splits ownership and running costs."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Estimate last year's working hours for each major machine"
                - "List the yearly ownership costs for each machine"
                - "Work out fuel and repair cost per hour from receipts"
                - "Write the combined cost per hour on the costing sheet"
            - name: Overhead list and a fair way to split it
              description: |-
                ## Purpose
                Rent, the farm vehicle, electricity, the accountant and the phone serve every enterprise, so somebody has to decide how they are shared. Picking a simple, written allocation key, such as share of land, share of labour hours or share of sales, stops the split being argued afresh each year and keeps gross margins honest.

                ## Milestones
                1. Every overhead cost from last year listed with its yearly total.
                2. One allocation key chosen for each overhead, with a sentence on why.
                3. Overheads split across enterprises and added below gross margin to give net margin.
                4. The key written down so next year uses the same rule.

                ## Notes
                Decisions about adding or dropping an enterprise should be made on gross margin first. Overheads that stay the same whatever you do should not decide the question on their own.
              priority: medium
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A written allocation key covers every overhead, and each enterprise shows both gross and net margin for last year."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "List last year's overheads with their yearly totals"
                - "Choose land, labour hours or sales as the key for each overhead"
                - "Split the overheads and add a net margin line to each enterprise"
                - "Write the allocation key at the top of the costing sheet"
            - name: Weekly receipt coding session
              description: |-
                ## Purpose
                Receipts left in the truck for a month get lost, faded or forgotten. A fixed half hour each week to code every receipt, invoice and market slip to an enterprise keeps the books current enough to answer what a crop has cost so far, while you can still remember what each purchase was for.

                ## Milestones
                1. One place where every receipt goes the day it is received.
                2. A weekly slot when receipts are coded and entered.
                3. No more than one week of uncoded receipts at any time.
                4. Cash spends without receipts written on a petty cash slip the same day.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "For eight weeks running, every receipt is coded and entered within seven days of the purchase."
                cadence: rolling
              tasks:
                - "Put a receipt box or envelope in the vehicle and one in the store"
                - "Code and enter the week's receipts and market slips @recurring(weekly:sun)"
                - "Write a petty cash slip for any spend without a receipt"
                - "Photograph thermal receipts before they fade"
            - name: Monthly farm accounts close
              description: |-
                ## Purpose
                Budgets are only as good as the actual figures they are compared with. Closing the farm books once a month, reconciling the bank and cash box, checking every cost is coded and totalling sales by enterprise, turns a pile of entries into numbers you can trust and act on before the season is over.

                ## Milestones
                1. Bank and cash box reconciled to the books each month.
                2. All costs for the month coded, with uncoded items cleared.
                3. Sales and direct costs totalled per enterprise for the month and the year to date.
                4. A short note of anything unusual, such as a feed price jump or a lost crate.

                ## Notes
                Start from the **Month-end close** template. Pick a day early in the month and hold it.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Three months in a row are closed by the 7th, with bank and cash reconciled and year-to-date totals per enterprise."
                cadence: rolling
              tasks:
                - "Set up a month-end close checklist for the farm books"
                - "Reconcile the bank, cash box and books for last month @recurring(monthly:5)"
                - "Total sales and direct costs per enterprise for the month"
                - "Note anything unusual in the month's figures in one line"
            - name: Input price tracker for feed, fertiliser and packing
              description: |-
                ## Purpose
                Imported feed, fertiliser and packing material move with freight and exchange rates, and a 15 percent rise can wipe out a thin margin before anyone notices. Recording the price of your ten most used inputs each month shows rises early enough to change supplier, buy ahead or raise your price.

                ## Milestones
                1. The ten inputs that make up most of your spending identified.
                2. A price recorded for each from at least two suppliers.
                3. A monthly price entry kept for six months.
                4. A rule written for when a rise triggers action, such as a 10 percent jump over three months.

                ## Notes
                Start from the **Metrics log** template. Record the price per unit you actually use, such as per kilogram of feed, not per bag, since bag sizes change.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Six consecutive monthly price entries exist for the ten main inputs, with a written trigger for action."
                cadence: rolling
              tasks:
                - "Pick the ten inputs that take most of your spending"
                - "Get a current price for each from two suppliers"
                - "Record this month's price per kilogram or litre for each input @recurring(monthly:12)"
                - "Write down the price rise that will make you act"
            - name: Farm-gate and market price log
              description: |-
                ## Purpose
                Knowing your cost of production is half the picture; the other half is what buyers are actually paying, week by week and season by season. A simple log of the prices you received and the prices quoted at the wholesale market or by your buyers builds the price history that every budget, price floor and planting decision needs.

                ## Milestones
                1. A log with date, product, grade, buyer and price per unit.
                2. Every sale recorded with the price you received.
                3. A weekly note of quoted market prices for your main products.
                4. Six months of prices showing the high and low weeks for each product.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "The price log holds at least 24 weekly entries for each main product, with received and quoted prices kept apart."
                cadence: rolling
              tasks:
                - "Set up a price log with date, product, grade, buyer and price"
                - "Record the week's received and quoted prices for main products @recurring(weekly:fri)"
                - "Ask the extension office or market authority where weekly price reports are published"
                - "Mark the highest and lowest price weeks for each product"
            - name: Monthly budget versus actual review
              description: |-
                ## Purpose
                Writing a budget and never looking at it again is common, and it wastes the effort. A monthly sit-down comparing what you planned to spend and earn with what actually happened, enterprise by enterprise, catches overspends while there is still time to cut back, delay a purchase or sell earlier.

                ## Milestones
                1. This year's budget and the monthly actuals set side by side.
                2. Any line more than 10 percent off budget flagged with a reason.
                3. One action agreed for each flagged line, or a note that it is accepted.
                4. The year-end forecast updated from the actuals so far.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Each month for six months, a review note lists lines more than 10 percent off budget, the reason and the action taken."
                cadence: rolling
              tasks:
                - "Put this year's budget and actuals to date in one sheet"
                - "Compare actuals with budget and flag lines more than 10 percent out @recurring(monthly:20)"
                - "Write one action or acceptance against each flagged line"
                - "Update the year-end forecast from actuals so far"
            - name: Quarterly gross margin update for each enterprise
              description: |-
                ## Purpose
                Gross margin, sales minus the direct costs of that enterprise, is the quickest test of whether a crop or animal group is pulling its weight. Recalculating it every quarter, rather than once a year, shows early when a crop is heading into a loss and lets you compare enterprises while the season is still running.

                ## Milestones
                1. Gross margin per enterprise calculated from the books for the quarter and year to date.
                2. Gross margin expressed per acre, per head or per batch so enterprises can be compared.
                3. Enterprises ranked from best to worst margin per unit.
                4. A short note of what moved each margin since last quarter.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Four quarterly gross margin tables exist, each ranking enterprises per unit and noting what changed."
                cadence: rolling
              tasks:
                - "Recalculate gross margin per enterprise for the quarter @recurring(quarterly)"
                - "Convert each margin to per acre, per head or per batch"
                - "Rank the enterprises from best to worst"
                - "Note the main reason each margin moved"
            - name: Labour hours log by enterprise
              description: |-
                ## Purpose
                Labour is often the largest cost on a vegetable or livestock farm, and the one least recorded. A rough weekly tally of who worked on what, family included, shows which enterprise eats the hours, and turns gross margin per acre into the more telling figure of return per hour worked.

                ## Milestones
                1. A simple weekly sheet with names down the side and enterprises across the top.
                2. Hours entered for hired workers and family each week.
                3. Hours totalled per enterprise each month.
                4. Return per labour hour worked out for each enterprise after three months.

                ## Notes
                Half-hour accuracy is enough. The aim is the share of time, not a time sheet for payroll.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Twelve weeks of labour hours by enterprise are logged, and return per hour is calculated for each enterprise."
                cadence: rolling
              tasks:
                - "Draw up a weekly sheet with workers down the side and enterprises across"
                - "Fill in the week's labour hours for every worker and family member @recurring(weekly:sat)"
                - "Total hours per enterprise at the end of each month"
                - "Divide each gross margin by its hours to get return per hour"
            - name: Yearly whole-farm budget cycle
              description: |-
                ## Purpose
                Every enterprise budget, the overheads, owner drawings and planned purchases come together on one page in the whole-farm budget for the coming year. Building it at the same point every year, ideally a month before the main planting season, makes it a working plan rather than a form filled in for a lender.

                ## Milestones
                1. Enterprise budgets for next year drafted from this year's actuals and price logs.
                2. Overheads, planned equipment purchases and owner drawings added.
                3. A whole-farm income, cost and surplus figure for the year.
                4. The budget split by month to feed the cash flow budget.
                5. Last year's budget compared with its actuals before the new one is signed off.
              priority: high
              frontmatter:
                mode: operating
                output_kind: deliverable
                success_criteria: "Each year a whole-farm budget is finished before the main planting month, with last year's budget compared against actuals."
                cadence: cyclic
              tasks:
                - "Choose the month each year when the farm budget will be built"
                - "Start next year's whole-farm budget from this year's actuals @recurring(yearly)"
                - "Add overheads, planned purchases and owner drawings"
                - "Split the budget by month for the cash flow sheet"
            - name: Feed cost per dozen eggs, kilogram gained or litre
              description: |-
                ## Purpose
                On livestock enterprises, feed is commonly the biggest single cost, and the number that matters is feed cost per unit sold, not per bag. Tracking it monthly against the price you get shows how close you are to working for the feed mill, and whether a change of feed, breed or selling weight is worth discussing with your nutritionist.

                ## Milestones
                1. Feed used per enterprise each month taken from feed records.
                2. Output for the same month recorded: dozens of eggs, kilograms sold, litres of milk.
                3. Feed cost per unit of output calculated and set against the selling price.
                4. A warning level written for when feed cost passes a set share of the selling price.

                ## Notes
                Ration changes are a question for your nutritionist or extension officer. This project is about seeing the cost clearly enough to ask.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Six monthly entries of feed cost per unit of output exist for each livestock enterprise, with a written warning level."
                cadence: rolling
              tasks:
                - "Total last month's feed used for each livestock enterprise"
                - "Calculate feed cost per unit of output and compare with price @recurring(monthly:8)"
                - "Set the share of selling price that triggers a feed review"
                - "Take the figures to your nutritionist if the warning level is passed"
            - name: Month-by-month farm cash flow budget
              description: |-
                ## Purpose
                Profitable crops can still leave you unable to buy fertiliser in month two, because the money comes in after harvest. Spreading the whole-farm budget across twelve months shows the tight months before they arrive, so you can line up savings, stagger plantings or arrange credit early.

                ## Milestones
                1. Expected income and spending entered for each month of the coming year.
                2. A running bank balance showing the lowest month.
                3. The cash gap in tight months measured and a plan written to cover it.
                4. Actual closing balances entered each month beside the forecast.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A twelve-month cash flow budget exists with actual balances entered for at least six months beside the forecast."
                cadence: rolling
              tasks:
                - "Spread expected income and spending across the next twelve months"
                - "Find the lowest projected balance and the month it falls"
                - "Enter the actual month-end balance beside the forecast @recurring(monthly:25)"
                - "Write how the tightest month will be covered"
            - name: Gross margin basics for a crop enterprise
              description: |-
                ## Purpose
                Gross margin is the language extension officers, lenders and buyers use when they talk farm profit, and it is simpler than it sounds. Working one through by hand for a single crop you know well, from seed and fertiliser to packing and transport, makes every later spreadsheet make sense.

                ## Milestones
                1. The difference between gross output, variable costs and gross margin explained in your own words.
                2. One crop's gross margin worked out by hand from last season's figures.
                3. The same margin expressed per acre and per kilogram sold.
                4. The result checked with an extension officer or a published crop budget.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A hand-worked gross margin for one crop, per acre and per kilogram, has been checked against a published or extension figure."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Ask the extension office for a published crop budget for a crop you grow"
                - "Work out last season's gross margin for that crop by hand"
                - "Express the result per acre and per kilogram sold"
                - "Compare your figure with the published budget and note the gaps"
            - name: Fixed and variable costs on a working farm
              description: |-
                ## Purpose
                Some costs rise with every extra acre or bird, like seed and feed, while others stay the same whatever you grow, like land rent and the vehicle licence. Sorting your own costs into the two groups is the key to knowing which decisions change profit and which only move overheads around.

                ## Milestones
                1. Every cost line from last year marked as variable or fixed.
                2. Grey areas such as hired labour and fuel decided and the reason noted.
                3. Total variable cost per unit and total fixed cost per year worked out.
                4. One decision from the past year reviewed in the light of the split.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Every cost line is marked fixed or variable, and one past decision has been reassessed using the split."
                cadence: phased
                effort_hours_estimate: "3"
              tasks:
                - "Mark each of last year's cost lines as fixed or variable"
                - "Decide how to treat hired labour and fuel and note why"
                - "Total variable cost per unit and fixed cost per year"
                - "Revisit one past decision using the fixed and variable split"
            - name: Depreciation of farm machinery and structures
              description: |-
                ## Purpose
                Shade houses, pumps and pickups do not show up as a cost in the years you use them unless their price is spread over their working life. Learning simple straight-line depreciation means each year's budget carries a fair share of the equipment it relies on, and you are not caught out when the pump finally needs replacing.

                ## Milestones
                1. Straight-line depreciation understood and worked through on one asset.
                2. Each major asset given a working life and an end value.
                3. A yearly depreciation figure for every major asset in the costing sheet.
                4. Depreciation charged to the enterprises that use each asset.

                ## Notes
                Depreciation for tax follows rules set by the tax authority and may differ. Keep your management figure separate and ask your accountant about the tax one.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Every major asset has a working life, end value and yearly depreciation figure charged to the enterprises that use it."
                cadence: phased
                effort_hours_estimate: "3"
              tasks:
                - "Work out straight-line depreciation for the pump or vehicle"
                - "Give every major asset a working life and an end value"
                - "Enter yearly depreciation for each asset in the costing sheet"
                - "Charge each asset's depreciation to the enterprises that use it"
            - name: Break-even yield and break-even price
              description: |-
                ## Purpose
                Two numbers settle many arguments on a farm: the yield you need at today's price to cover costs, and the price you need at a normal yield. Learning to calculate both for each enterprise tells you at a glance how much room there is when a crop is hit by disease or the market drops.

                ## Milestones
                1. The break-even yield formula worked through for one crop.
                2. The break-even price worked out for the same crop at a normal yield.
                3. Both figures calculated for every main enterprise.
                4. The margin of safety between expected and break-even written beside each.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Break-even yield, break-even price and margin of safety are written down for every main enterprise."
                cadence: phased
                effort_hours_estimate: "3"
              tasks:
                - "Divide one crop's total cost by its price to get break-even yield"
                - "Divide the same total cost by normal yield to get break-even price"
                - "Repeat both calculations for every main enterprise"
                - "Write the margin of safety beside each enterprise"
            - name: Partial budgets for one change at a time
              description: |-
                ## Purpose
                Should you switch to drip, buy a second incubator or pack in branded bags? A partial budget looks only at what changes: new income, income lost, new costs and costs saved. Learning the four-box layout lets you weigh a single change in half an hour without rebuilding the whole farm budget.

                ## Milestones
                1. The four boxes of a partial budget understood: added income, reduced costs, added costs, lost income.
                2. One partial budget worked through for a change you are actually considering.
                3. The result checked against how sensitive it is to price and yield.
                4. A blank partial budget sheet saved for reuse.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A completed partial budget for one real proposed change exists, with a reusable blank sheet saved."
                cadence: phased
                effort_hours_estimate: "3"
              tasks:
                - "Draw the four boxes of a partial budget on one page"
                - "Fill them in for one change you are considering this year"
                - "Test the result with a lower price and a lower yield"
                - "Save a blank copy of the sheet for future decisions"
            - name: Reading a farm profit and loss statement
              description: |-
                ## Purpose
                If an accountant prepares your yearly accounts, the profit and loss statement can look like a document for the tax authority rather than for you. Learning to read it line by line, and to tie its totals back to your enterprise figures, makes the accounts a check on your costing rather than a separate world.

                ## Milestones
                1. Each section of last year's profit and loss statement explained in plain words.
                2. The statement's total sales and costs reconciled with your enterprise totals.
                3. Differences such as stock changes and depreciation understood.
                4. Three questions for the accountant written and asked.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Last year's profit and loss totals are reconciled with enterprise totals, and three questions have been answered by the accountant."
                cadence: phased
                effort_hours_estimate: "3"
              tasks:
                - "Get a copy of last year's profit and loss statement"
                - "Match its sales and cost totals to your enterprise figures"
                - "List every difference you cannot explain"
                - "Ask the accountant about the three largest differences"
            - name: Opportunity cost of land, money and time
              description: |-
                ## Purpose
                Land you own and savings you put into the farm are not free just because no bill arrives. Thinking through what the land could earn rented out, what the savings could earn in a deposit account and what your time could earn off the farm is how you judge whether farming beats the alternatives for you.

                ## Milestones
                1. A local rental value per acre for land like yours found.
                2. The return the farm's capital could earn in a low-risk deposit noted.
                3. An off-farm hourly earning figure set for the owner's time.
                4. Farm profit compared with the sum of the three, and the gap written down.

                ## Notes
                This is a way of thinking, not a reason to quit. Many farmers knowingly accept a lower return for independence or family land; it helps to know the size of the trade.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A written comparison sets last year's farm profit against the rental, deposit and off-farm earning value of the same land, money and time."
                cadence: phased
                effort_hours_estimate: "2"
              tasks:
                - "Ask a neighbour or agent what land like yours rents for per acre"
                - "Note what a fixed deposit at your bank or credit union pays"
                - "Set an off-farm hourly value for your own time"
                - "Compare farm profit with the three alternatives and write the gap"
            - name: Price floor for every product you sell
              description: |-
                ## Purpose
                Without a written minimum price, a slow market day ends with produce sold below cost because carrying it home feels worse. A price floor for each product and grade, based on your cost of production plus a margin, gives you a clear walk-away number for middlemen, hotels and supermarkets alike.

                ## Milestones
                1. Full cost per unit worked out for each product and grade.
                2. A minimum margin chosen and added to give the floor price.
                3. Floor prices written on a card carried to market and kept by the phone.
                4. A rule agreed for when selling below the floor is acceptable, such as produce that will not keep another day.

                ## Notes
                Perishable crops sometimes have to be sold below floor. The floor is still useful: it tells you how often that happens and what it costs.
              priority: high
              deadlineOffsetDays: 60
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "Every product and grade has a written floor price, and a quarterly review has compared floors with prices received."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Work out full cost per unit for each product and grade"
                - "Choose the minimum margin you will add to cost"
                - "Write the floor prices on a card for market days"
                - "Review floor prices against the price log and costs @recurring(quarterly)"
            - name: Dropping or shrinking the weakest enterprise
              description: |-
                ## Purpose
                Most farms carry one enterprise that loses money once labour is counted, kept on out of habit, family tradition or hope. Looking at a year of margins, the hours it takes and what else that land and time could do gives you a clear choice: fix it, shrink it or stop, with the reasoning written down.

                ## Milestones
                1. The lowest margin enterprise per unit and per labour hour identified.
                2. The reasons for its poor result listed: price, yield, cost or labour.
                3. Three options costed: improve it, cut it back, or replace it with an existing better enterprise.
                4. A decision recorded with the date for a follow-up review.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A written decision to improve, shrink or drop the weakest enterprise is recorded with costed options and a review date."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Find the enterprise with the lowest return per unit and per hour"
                - "List what is dragging its result down"
                - "Cost improving it, shrinking it and replacing it"
                - "Write the decision and set a date to check the result"
            - name: Costing a new enterprise before starting it
              description: |-
                ## Purpose
                Adding a layer flock, a tilapia tank or a block of hot peppers is usually decided on a neighbour's story of good prices. A full enterprise budget drawn up before buying stock or planting material, with set-up costs, running costs, a cautious first-year yield and the labour it will take from existing work, shows whether the new line earns more than the effort it takes from what you already do.

                ## Milestones
                1. Set-up costs listed: housing or structures, equipment, first stock or planting material.
                2. A running budget for the first full year at a cautious yield and current price.
                3. Labour hours the new enterprise needs, and where they will come from, written down.
                4. Gross margin per labour hour compared with your existing enterprises.
                5. A start, delay or drop decision recorded with the reasons.

                ## Notes
                Talk to at least two people already running the enterprise and ask for their worst year, not their best.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A first-year budget for the proposed enterprise, including set-up costs and labour, is compared with existing enterprises and a decision is recorded."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Ask two farmers already running the enterprise about their worst year"
                - "List set-up costs from supplier quotes"
                - "Budget the first full year at a cautious yield"
                - "Compare its margin per labour hour with your current enterprises"
            - name: Costing a dry season crop with irrigation
              description: |-
                ## Purpose
                Dry season prices for many vegetables are higher because fewer growers can water, but pumping, drip lines and extra labour cost money. A costed comparison of an irrigated dry season crop against leaving the land fallow or in a cover crop tells you whether the higher price actually covers the water.

                ## Milestones
                1. Dry season prices for the candidate crop taken from your price log or market reports.
                2. Irrigation costs per acre estimated: fuel or power, water charges, drip lines and labour.
                3. A partial budget comparing the irrigated crop with leaving the land fallow.
                4. A go or no-go decision for the coming dry season recorded.

                ## Notes
                Water rights and permits sit with the irrigation area. Here the question is only whether the numbers work.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A partial budget for one irrigated dry season crop exists, and a go or no-go decision is recorded before the dry season starts."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Pull dry season prices for the crop from your price log"
                - "Estimate irrigation cost per acre for the season"
                - "Fill in a partial budget against leaving the land fallow"
                - "Record the go or no-go decision for the dry season"
            - name: Costing fresh sale against processing
              description: |-
                ## Purpose
                Turning surplus pepper, mango or cassava into sauce, chow or flour can lift the price per kilogram, but jars, labels, gas, kitchen time and slower payment eat into it. Costing one product both ways on a per kilogram of raw produce basis shows whether processing pays or simply moves the work indoors.

                ## Milestones
                1. Fresh sale return per kilogram of raw produce worked out after packing and transport.
                2. Processing costs per batch listed: containers, labels, other ingredients, energy, kitchen hire and labour.
                3. Processed return per kilogram of raw produce calculated from realistic selling prices.
                4. A decision on how much of the crop to process, if any, with the volume where processing starts to pay.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "One product has a written comparison of return per kilogram fresh and processed, with the volume at which processing pays."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Work out fresh return per kilogram after packing and transport"
                - "List every cost of one processing batch"
                - "Calculate processed return per kilogram of raw produce"
                - "Decide what share of the crop to process and record why"
            - name: Channel costing for wholesale, direct and hotel sales
              description: |-
                ## Purpose
                The hotel pays more per kilogram, but wants grading, invoices, delivery twice a week and pays in 45 days. The wholesale vendor pays less but takes the lot at the farm gate in cash. Costing each channel after packing, transport, rejects, time and the cost of waiting for payment shows which one really earns the most.

                ## Milestones
                1. Every channel you sell through listed with its average price per unit.
                2. Channel costs per unit estimated: packing, transport, rejects, selling time and days to payment.
                3. Net return per unit worked out for each channel.
                4. A target share of output for each channel set for the coming season.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A table shows net return per unit for each sales channel, with a target share of output agreed for next season."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "List every channel you sell through with its average price"
                - "Estimate packing, transport, reject and time costs per channel"
                - "Add a cost for days waiting to be paid"
                - "Set a target share of next season's output for each channel"
            - name: Choosing a farm accounts tool
              description: |-
                ## Purpose
                An exercise book works for a few enterprises, but by the time you have five crops and two livestock groups, a spreadsheet or farm accounting app saves hours and errors. Comparing two or three options against what you actually need, cost codes, enterprise reports, phone entry and an accountant export, avoids paying for features you will never use.

                ## Milestones
                1. Must-have features written down: enterprise coding, monthly reports, phone entry, export for the accountant.
                2. Two or three options tried, including a plain spreadsheet.
                3. Yearly cost and learning time noted for each.
                4. One tool chosen and last month's figures entered in it.

                ## Notes
                Start from the **Purchase decision** template. A well laid out spreadsheet beats an expensive package nobody opens.
              priority: medium
              deadlineOffsetDays: 45
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "One accounts tool is chosen against a written list of must-have features and holds at least one full month of farm figures."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Write the four or five features the tool must have"
                - "Try two options alongside a plain spreadsheet"
                - "Note yearly cost and setup time for each"
                - "Enter last month's figures in the tool you choose"
            - name: Cutting the three largest variable costs
              description: |-
                ## Purpose
                On most farms three cost lines, often feed, fertiliser and hired labour or packing, make up over half the variable spend. Working through those three, one at a time, for bulk buying, a group order, less waste or a different supplier, usually saves more than trimming twenty small items.

                ## Milestones
                1. The three largest variable cost lines identified from last year's books.
                2. At least two ways to reduce each one listed and costed.
                3. One change made for each of the three.
                4. The saving measured after one full crop cycle or six months.

                ## Notes
                Any change to fertiliser or feed programmes should follow a soil test or nutritionist advice. Cheaper inputs that cut yield are not savings.
              priority: medium
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "One change has been made to each of the three largest variable costs, and the saving is measured after six months."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Find the three largest variable cost lines in last year's books"
                - "List two ways to reduce each and estimate the saving"
                - "Make one change on each line this season"
                - "Compare the three cost lines against last year @recurring(quarterly)"
            - name: Pricing a supply quote from cost of production
              description: |-
                ## Purpose
                When a hotel, supermarket or processor asks for a price for a year of weekly supply, quoting from the market price of the day is a gamble. Building the quote from your cost of production, the extra cost of consistent volumes and grading, and the floor price protects you through the cheap months.

                ## Milestones
                1. Cost of production per unit for the product confirmed from recent records.
                2. Extra costs of the contract added: grading, packing spec, delivery, rejects and payment terms.
                3. A quote price set at or above the floor, with any seasonal price steps.
                4. The costing kept on file beside the quote sent.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A written costing sheet supports the next supply quote, showing cost per unit, contract extras and the margin above floor."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Confirm cost of production per unit from the last two crops"
                - "Add grading, packing, delivery, rejects and payment delay costs"
                - "Set the quote price and any seasonal steps above your floor"
                - "File the costing sheet with a copy of the quote"
            - name: Pre-planting crop budget for the coming season
              description: |-
                ## Purpose
                Once the seedlings are in the ground, most of the money is committed. A budget for each crop drawn up a month before planting, with expected yield, price, inputs and labour, tells you how much cash the season needs and whether the planned acreage makes sense at today's input prices.

                ## Milestones
                1. Area to be planted set for each crop this season.
                2. Expected yield and price written from your own records, not hopes.
                3. Inputs, labour and packing costed at current prices.
                4. Gross margin and cash needed up to first harvest worked out for each crop.
                5. Acreage adjusted if any crop shows a loss or the cash need is too high.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: event
                output_kind: deliverable
                success_criteria: "Every crop planned for the season has a budget with gross margin and cash needed, finished before planting starts."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Decide the area for each crop this season"
                - "Take expected yield and price from your own records"
                - "Price inputs, labour and packing at today's rates"
                - "Work out the cash needed before first harvest for each crop"
            - name: Post-harvest costing review for each crop
              description: |-
                ## Purpose
                The weeks after the last pick are when you remember best what went wrong and what it cost. A short review comparing the crop's actual yield, price and costs with its pre-planting budget turns each season into a better budget for the next one, rather than a feeling that it went badly.

                ## Milestones
                1. Actual yield, sales and costs for the crop totalled.
                2. Each set beside the pre-planting budget with the difference.
                3. The two biggest causes of the gap written down.
                4. One change for next season's budget or practice agreed.
              priority: medium
              deadlineOffsetDays: 120
              frontmatter:
                mode: event
                output_kind: knowledge
                success_criteria: "A one-page review for the crop compares budget with actual yield, price and cost and names one change for next season."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Total the crop's actual yield, sales and costs after the last pick"
                - "Set the actuals beside the pre-planting budget"
                - "Write the two biggest causes of the difference"
                - "Agree one change for next season's budget"
            - name: Annual farm budget meeting with family or partners
              description: |-
                ## Purpose
                When a spouse, sibling or partner shares the work or the money, a budget agreed in one head causes friction later. A yearly sit-down to go through last year's results, next year's plan, drawings and big purchases means everyone knows what the farm can afford and why.

                ## Milestones
                1. A date set with everyone who has a stake in the farm.
                2. Last year's enterprise results and next year's draft budget shared a week ahead.
                3. Drawings, major purchases and any enterprise changes agreed.
                4. Notes of the decisions written and shared.

                ## Notes
                Start from the **Meeting notes** template. Keep the meeting to the numbers and decisions; day to day jobs can wait.
              priority: medium
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A budget meeting has been held with all stakeholders, and written notes record agreed drawings, purchases and enterprise changes."
                cadence: cyclic
              tasks:
                - "Agree a meeting date with everyone who shares the farm"
                - "Send last year's results and the draft budget a week before"
                - "Hold the yearly farm budget meeting and agree the main decisions @recurring(yearly)"
                - "Write up and share the notes of decisions"
            - name: Year-end stocktake and enterprise results
              description: |-
                ## Purpose
                Cash in the bank is not the same as profit when feed is stockpiled, animals are growing and a crop is still standing. A year-end count and valuation, using the same method as the opening one, turns the year's cash figures into true results for each enterprise.

                ## Milestones
                1. Inputs, livestock and standing crops counted and valued on the same basis as the opening valuation.
                2. Change in valuation worked out for each enterprise.
                3. Gross margin for each enterprise adjusted for the change in stock.
                4. A one-page year-end results sheet filed with the opening valuation.
              priority: medium
              frontmatter:
                mode: event
                output_kind: artifact
                success_criteria: "A year-end valuation using the opening method exists, and each enterprise's margin has been adjusted for stock change."
                cadence: cyclic
              tasks:
                - "Choose the year-end date and keep it the same each year"
                - "Count and value inputs, livestock and standing crops at year end @recurring(yearly)"
                - "Work out the change in stock value for each enterprise"
                - "Adjust each gross margin and file the results sheet"
            - name: Costed farm figures ready for the accountant
              description: |-
                ## Purpose
                Accountants charge by the hour, and a shoebox of receipts costs far more to process than coded, reconciled books. Handing over a tidy year-end pack, with totals by enterprise, bank reconciliations, the stock valuation and an asset list, cuts the fee and gets your accounts back sooner. Questions on what is deductible or how farm income is taxed are for the accountant or tax authority.

                ## Milestones
                1. Twelve monthly closes completed and bank statements reconciled.
                2. Opening and closing stock valuations and the asset list attached.
                3. A list of questions for the accountant, including any grants or incentives received.
                4. The pack delivered to the accountant before their stated cut-off.
              priority: medium
              deadlineOffsetDays: 90
              frontmatter:
                mode: event
                output_kind: deliverable
                success_criteria: "A year-end pack with reconciled books, stock valuations and asset list reaches the accountant before their cut-off date."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Ask your accountant what they need and by when"
                - "Check all twelve monthly closes are done and reconciled"
                - "Attach stock valuations, the asset list and grant letters"
                - "Write your questions for the accountant on one page"
            - name: Costing for a part-time farmer with an off-farm job
              description: |-
                ## Purpose
                Farming evenings and weekends around a full-time job changes the economics: your hours are scarce, hired help covers weekdays, and the farm may lose money while still being worth it. Costing with a realistic value on your scarce hours shows which enterprises suit a part-time schedule and which quietly cost you more than your salary pays.

                ## Milestones
                1. Hours you can reliably give the farm each week written down.
                2. Hired labour needed to cover weekdays costed per enterprise.
                3. Return per owner hour worked out for each enterprise.
                4. Enterprises that demand daily attention, such as layers, weighed against those that can be left, such as tree crops.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "Each enterprise shows return per owner hour and weekday hired cost, with a decision on which ones fit a part-time schedule."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Write the hours you can reliably give the farm each week"
                - "Cost the hired help needed on weekdays for each enterprise"
                - "Calculate return per owner hour for each enterprise"
                - "Check your farm hours against the plan at month end @recurring(monthly:28)"
            - name: First season budget on new land
              description: |-
                ## Purpose
                Taking on new or rented land for the first time means clearing, ploughing, fencing and water costs that a settled farm does not face, and yields in year one are often lower. A first-season budget that separates once-only start-up costs from normal running costs shows how long the land will take to pay back and how much cash to hold in reserve.

                ## Milestones
                1. Start-up costs listed separately: clearing, land preparation, fencing, water access and first lime or organic matter.
                2. Running costs for the first crop budgeted at a cautious yield.
                3. Payback period for start-up costs estimated over two to three seasons.
                4. A cash reserve figure set to cover the first season without income.
              priority: medium
              deadlineOffsetDays: 60
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "A first-season budget separates start-up and running costs, estimates payback and sets a cash reserve figure."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Get quotes for clearing, ploughing and fencing the new land"
                - "Budget the first crop at a cautious yield"
                - "Estimate how many seasons the start-up costs take to pay back"
                - "Set the cash reserve needed before income arrives"
            - name: Splitting costs on a family farm with shared land
              description: |-
                ## Purpose
                Family land worked by brothers, cousins or two generations often has shared tractors, shared labour and one family member paying the electricity. Agreeing in writing how shared costs are split and who owns which enterprise's margin heads off the arguments that end many family farms.

                ## Milestones
                1. Each family member's enterprises and plots listed.
                2. Shared costs listed with who pays them now.
                3. A split agreed for each shared cost, using land, hours or use.
                4. A monthly settling-up of shared costs in place.

                ## Notes
                Ownership and inheritance of family land are legal questions for a lawyer or the land tenure area. This project only covers sharing the running costs.
              priority: medium
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A written split of every shared cost is agreed by the family members involved, with three months of settling-up recorded."
                cadence: phased
                effort_hours_estimate: "5"
              tasks:
                - "List each family member's plots and enterprises"
                - "List shared costs and who currently pays each"
                - "Agree in writing how each shared cost is split"
                - "Settle up shared costs between family members @recurring(monthly:15)"
            - name: Internal prices for manure, forage and home feed
              description: |-
                ## Purpose
                On a mixed farm, goat manure fertilises the pepper beds and cassava peel feeds the pigs, so one enterprise is subsidising another without any money changing hands. Setting an internal price for each transfer, usually what it would cost to buy in or what it would sell for, shows the true margin of both sides.

                ## Milestones
                1. Every product passed between enterprises listed, with yearly quantities.
                2. An internal price set for each, based on purchase or sale value.
                3. Transfers recorded as income for one enterprise and a cost for the other.
                4. Gross margins recalculated with transfers included.
              priority: low
              frontmatter:
                mode: building
                output_kind: knowledge
                success_criteria: "Internal prices are set for every transfer between enterprises, and gross margins have been recalculated with them included."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "List manure, forage and by-products moved between enterprises"
                - "Estimate yearly quantities for each transfer"
                - "Set an internal price from purchase or sale value"
                - "Record the quarter's transfers and update margins @recurring(quarterly)"
            - name: Scaling a backyard plot to a commercial acre
              description: |-
                ## Purpose
                Selling surplus callaloo and peppers from the yard feels profitable because the water, the land and your time are already there. Moving to a rented or cleared commercial acre brings real costs for every one of them. Budgeting the acre before you commit, with water, transport and hired help priced in, shows the price and yield needed to make it worthwhile.

                ## Milestones
                1. Current backyard income and the costs you already pay written down.
                2. A one-acre budget with rent, water, transport, hired labour and inputs at commercial scale.
                3. Break-even price and yield for the acre worked out.
                4. A decision on whether to scale, and on which crops, recorded.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A one-acre budget with break-even price and yield exists, and a decision on whether to scale is recorded."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Write down what the backyard plot earns and costs now"
                - "Budget one commercial acre with rent, water, transport and labour"
                - "Work out break-even price and yield for the acre"
                - "Decide whether to scale and which crops to start with"
            - name: Cost sharing in a farmer group or co-operative
              description: |-
                ## Purpose
                Farmer groups buy inputs in bulk, share a packhouse or truck, and sometimes sell together, which saves money only if the shared costs are tracked and charged fairly. A simple costing system for the group, with each member's share of use recorded, keeps the savings visible and the trust intact.

                ## Milestones
                1. Shared assets and joint purchases listed with their costs.
                2. A charging rule agreed for each, such as per crate packed or per trip.
                3. A members' usage record kept and statements issued monthly.
                4. Bulk buying savings compared with individual prices after six months.
              priority: low
              frontmatter:
                mode: service
                output_kind: habit
                success_criteria: "The group has a written charging rule for each shared cost and six months of member statements showing usage and charges."
                cadence: rolling
              tasks:
                - "List the group's shared assets and joint purchases with costs"
                - "Agree a charging rule for each with the members"
                - "Issue members' monthly usage statements @recurring(monthly:3)"
                - "Compare bulk prices with individual prices after six months"
            - name: Benchmarking costs against published crop budgets
              description: |-
                ## Purpose
                Knowing your cost per kilogram of tomatoes is useful; knowing it is 30 percent above the extension service's figure is more useful. Comparing your enterprise costs and yields each year with published crop budgets, research institute figures or a trusted group of neighbours shows where you are weak and where you are already good.

                ## Milestones
                1. Published enterprise budgets found for your main crops and livestock, from the extension service, a research institute or a regional agency.
                2. Your yields, costs and margins set beside the benchmarks.
                3. The two lines where you are furthest behind identified.
                4. One improvement planned for each, with the extension officer's input.

                ## Notes
                Published budgets can be years old. Adjust for input price changes before drawing conclusions.
              priority: low
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A yearly benchmark table compares your main enterprises with published figures and names two improvement targets."
                cadence: cyclic
              tasks:
                - "Ask the extension service for current enterprise budgets for your main crops"
                - "Set your yields, costs and margins beside the benchmarks @recurring(yearly)"
                - "Pick the two lines where you are furthest behind"
                - "Plan one improvement for each with the extension officer"
            - name: Price and yield shock scenarios
              description: |-
                ## Purpose
                A storm halving the crop, a glut dropping the price by a third or feed costs jumping after a freight spike: each is likely at some point in a ten-year run. Building three scenario budgets alongside the main one shows how much the farm can absorb, which enterprise breaks first and how much cash reserve to keep.

                ## Milestones
                1. A base budget plus three scenarios: low price, low yield and high input cost.
                2. The combined worst case worked out for the whole farm.
                3. The enterprise that goes into loss first in each scenario identified.
                4. A cash reserve target and early warning signs written down.

                ## Notes
                Start from the **Risk register** template to record each shock, its trigger and your response.
              priority: medium
              frontmatter:
                mode: research
                output_kind: artifact
                success_criteria: "Three scenario budgets and a combined worst case exist, with a cash reserve target and a response for each shock recorded."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Copy the base budget and drop prices by a third"
                - "Make a second copy with yields halved"
                - "Make a third copy with feed and fertiliser up 25 percent"
                - "Write a cash reserve target and the early signs of each shock"
            - name: Tree crop establishment cost to first harvest
              description: |-
                ## Purpose
                A new cocoa, citrus or avocado block costs money for three to six years before it earns. Budgeting each year of establishment, from planting material and shade to weeding and replacing losses, and setting it against the expected yield climb shows the true investment and the year it pays back.

                ## Milestones
                1. Establishment costs budgeted for each year until full bearing.
                2. Expected yield for each year taken from extension or nursery guidance.
                3. Cumulative cash position plotted by year to find the payback year.
                4. Intercrops such as plantain or pigeon peas costed for the early years.

                ## Notes
                Money spent years before income arrives is worth more than money received later. A simple discount of a few percent a year keeps the comparison honest.
              priority: medium
              deadlineOffsetDays: 120
              frontmatter:
                mode: research
                output_kind: artifact
                success_criteria: "A year-by-year establishment budget to full bearing exists, with the payback year and intercrop income shown."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Ask the nursery or extension officer for the expected yield by year"
                - "Budget planting, shade, weeding and replacement costs each year"
                - "Add any intercrop income for the early years"
                - "Plot the cumulative cash position and mark the payback year"
            - name: Return on capital and return per labour hour for the whole farm
              description: |-
                ## Purpose
                Once enterprise costing is running, two whole-farm figures tell you whether the business is getting stronger: profit as a share of the capital tied up, and profit for every hour worked. Tracking both over several years shows whether growth is adding wealth or just adding work.

                ## Milestones
                1. Total capital in land, livestock, machinery and stock valued.
                2. Return on capital worked out from the year's net profit.
                3. Whole-farm return per labour hour calculated from the labour log.
                4. Both figures compared with the previous year and an off-farm alternative.
              priority: low
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "Return on capital and return per labour hour are calculated for the whole farm for at least two consecutive years."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Total the value of land, livestock, machinery and stock"
                - "Divide net profit by capital to get return on capital"
                - "Divide net profit by total labour hours worked"
                - "Compare both figures with last year and an off-farm return"
            - name: Five-year enterprise trend and rotation budget
              description: |-
                ## Purpose
                One year's margins can mislead: a hurricane year, a glut year or a good price spike. Laying out five years of margins per enterprise, and budgeting a rotation that balances high-margin crops with soil-building ones, gives a steadier basis for deciding what the farm grows over the next five years.

                ## Milestones
                1. Gross margin per unit for each enterprise for up to five past years in one table.
                2. Averages, best and worst years marked for each enterprise.
                3. A five-year rotation or enterprise plan budgeted using average figures.
                4. The plan's weakest year identified and a reserve set against it.
              priority: low
              frontmatter:
                mode: research
                output_kind: artifact
                success_criteria: "A five-year table of enterprise margins and a budgeted five-year rotation plan exist, with the weakest year and reserve marked."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Put up to five years of enterprise margins in one table"
                - "Mark the average, best and worst year for each"
                - "Budget a five-year rotation using average margins"
                - "Find the plan's weakest year and set a reserve against it"
---

# Farm Budgets and Enterprise Costing

This area is for the grower or livestock keeper who works hard all year and still cannot say which enterprise pays: the vegetable farmer with four crops on the go, the poultry and goat mixed farm, the cocoa estate with a pepper patch on the side. It starts with foundations (a list of enterprises, cost codes, separate farm money, a value on your own labour and last year rebuilt from receipts), moves to the weekly and monthly machinery of coding, closing and comparing, then the costing ideas that make the numbers useful, decisions on price floors, channels and enterprise mix, dated reviews around planting and harvest, variants for part-time, new, family and group farms, and specialist work on benchmarks, scenarios and tree crop establishment.

What repeats is a weekly session coding receipts, logging labour hours and noting farm-gate prices, a monthly close, input price check, feed cost check and budget review on different days, a quarterly gross margin and price floor update, and a yearly budget cycle and stocktake. The Month-end close, Metrics log, Purchase decision, Meeting notes and Risk register templates pair with the monthly books, the price tracker, the software choice, the family budget meeting and the scenario budget. Installing adds all 50 projects as active, so archive the ones that are not for you yet.
