---
id: personal-finance.frugal-living-challenge
name: Frugal Living Challenge
description: "A household frugal challenge with clear rules, a baseline and an honest savings tally, the weekly routines and practical skills that cut costs, and a playbook for the changes worth keeping."
category: personal
version: 1.0.0
tags: [personal-finance, frugal-living-challenge, everyone, household-costs, groceries, food-waste, energy-habits, diy]
author: Aurum Technology
starter_structure:
  templates:
    - metrics-log
    - weekly-meal-plan
    - habit-tracker
    - purchase-decision
    - trip
  pillars:
    - name: Personal Finance
      emoji: "💷"
      description: "The day-to-day money system: income, budget, bills, debt, savings buffers, insurance, tax and big purchases, run so that nothing surprises you and every pound has a job."
      pillarFrontmatter:
        review_cadence: monthly
      areas:
        - name: Frugal Living Challenge
          description: "Cutting costs across the household with a frugal living challenge, tracking savings and keeping the changes that stick."
          projects:
            - name: Frugal challenge rules and length
              description: |-
                ## Purpose
                A frugal challenge without written rules drifts within a fortnight, because every exception gets argued afresh at the till. Deciding the length, the spending lines in scope and the few things that are exempt before day one gives the whole household one page to point at. Ninety days is long enough for new habits to settle; thirty days works as a trial run.

                ## Milestones
                1. A start date and an end date chosen, with the length written down.
                2. A list of the spending lines the challenge covers, such as food, household goods, transport and leisure.
                3. Exemptions agreed in writing, such as rent, medicines and existing debt repayments.
                4. A one-page rules sheet pinned where everyone in the house will see it.

                ## Notes
                Keep the rules to one page. A long rulebook is a sign the challenge is trying to fix everything at once.

                Before you start: this plan is general information to help you organise your own money decisions. It is not financial, investment, tax or legal advice. Check decisions that matter with a qualified, licensed adviser in your country, and remember that investing and trading can lose money.
              priority: high
              deadlineOffsetDays: 7
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A one-page rules sheet with start date, end date, covered spending lines and exemptions is written and visible in the home."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Pick a start date within the next fortnight and an end date 30 or 90 days later"
                - "List the spending lines the challenge will cover"
                - "Write down the exemptions everyone agrees are not up for cutting"
                - "Pin the one-page rules sheet on the fridge or in a shared note"
            - name: Three-month baseline of household running costs
              description: |-
                ## Purpose
                Savings can only be counted against something, and memory is a poor baseline because the expensive months are the ones people forget. Totalling three months of bank and card statements for the lines the challenge covers gives a monthly starting figure for groceries, takeaways, household goods, transport and leisure. That figure is what the end-of-challenge review will be judged against.

                ## Milestones
                1. Three recent months of bank and card statements downloaded.
                2. Spending in each covered line totalled for each month.
                3. A monthly average for each line, and an overall average, written on the tally sheet.
                4. Cash spending estimated and added, so the baseline is not flattered.

                ## Notes
                Use the months before you decided to start. Spending usually dips the moment a challenge is announced, which makes the baseline look lower than real life.
              priority: high
              deadlineOffsetDays: 14
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A monthly average for each covered spending line, taken from three months of statements, is recorded before day one of the challenge."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Download the last three months of statements for every current account and card"
                - "Total each covered spending line month by month"
                - "Estimate cash spending from cash machine withdrawals"
                - "Write the monthly averages at the top of the savings tally sheet"
            - name: Savings tally sheet and counting method
              description: |-
                ## Purpose
                Frugal savings are easy to overcount, since a reduced sticker on something you would never have bought is not a saving. Agreeing one counting rule, such as usual price minus price paid for things you would have bought anyway, plus spending skipped entirely, keeps the total honest. A sheet with date, item, usual cost, actual cost and saving makes the weekly tally a five-minute job.

                ## Milestones
                1. A counting rule written in one sentence at the top of the sheet.
                2. A sheet with columns for date, item, usual cost, actual cost and saving.
                3. Three worked examples entered so everyone sees how it works.
                4. The sheet kept somewhere every adult in the house can add to it.

                ## Notes
                Start from the **Metrics log** template. Count only spending that would really have happened; hopeful savings inflate the total and kill trust in it.
              priority: high
              deadlineOffsetDays: 10
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A tally sheet with a written counting rule and at least three worked example entries is shared with every adult in the household."
                cadence: one-shot
                effort_hours_estimate: "1"
              tasks:
                - "Write the savings counting rule in one sentence"
                - "Create the tally sheet from the metrics log template"
                - "Enter three example savings from the past week"
                - "Share the sheet with every adult in the household"
            - name: Household agreement on the frugal challenge
              description: |-
                ## Purpose
                One person running a frugal challenge while everyone else carries on as normal usually ends in resentment and quiet sabotage. A short sit-down where each member of the household names one cut they are happy with and one thing they want protected makes the challenge shared rather than imposed. Agreeing a modest reward for hitting the target gives everyone a reason to keep going.

                ## Milestones
                1. Every member of the household, children included, asked for one cut and one protected item.
                2. The rules sheet updated with what was agreed.
                3. A shared reward chosen for reaching the target, costing a small fraction of the expected saving.
                4. A date set for the first weekly tally.

                ## Notes
                Let teenagers pick their own cut. Cuts imposed on the youngest people in the house are the first to be broken.
              priority: high
              deadlineOffsetDays: 14
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "Each household member has named one cut and one protected item, recorded on the rules sheet alongside an agreed reward."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Book a 30-minute household meeting this week"
                - "Ask each person to bring one cut they would accept and one thing to protect"
                - "Add the agreed cuts and protections to the rules sheet"
                - "Choose a reward for hitting the target that costs little"
            - name: Ranked list of the ten biggest cost cuts
              description: |-
                ## Purpose
                Cutting a dozen small things feels busy but often saves less than one change to the weekly shop or the takeaway habit. Ranking the ten likeliest cuts by money saved per month and by effort shows where the challenge should start. Most households find two or three lines carry most of the possible saving.

                ## Milestones
                1. Ten candidate cuts listed from the baseline figures.
                2. Each cut given an estimated monthly saving and an effort score from one to five.
                3. The list sorted by saving for the effort involved.
                4. The top three chosen as the focus for the first month.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A list of ten cuts with an estimated monthly saving and effort score exists, with the top three named as the first month's focus."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "List ten places the baseline shows money leaking"
                - "Estimate a realistic monthly saving for each"
                - "Score each cut from one to five for effort"
                - "Circle the three cuts with the best saving for the effort"
            - name: Separate pot for the money the challenge saves
              description: |-
                ## Purpose
                Money saved by cooking at home or skipping a purchase tends to vanish into the current account and get spent somewhere else. Opening a separate savings pot with a clear name, and moving each week's tally into it, turns an abstract saving into a balance you can watch grow. Deciding up front what the pot is for, such as clearing a debt, building a buffer or a family goal, keeps the motivation concrete.

                ## Milestones
                1. A named savings pot or account opened separately from everyday spending.
                2. A purpose for the money agreed and written on the rules sheet.
                3. The first transfer made, even if it is small.
                4. A reminder set to move each week's tally across.
              priority: high
              deadlineOffsetDays: 14
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A separately named savings pot exists with an agreed purpose and at least one transfer from the challenge tally in it."
                cadence: one-shot
                effort_hours_estimate: "1"
              tasks:
                - "Open a savings pot or sub-account separate from everyday spending"
                - "Name the pot after what the money is for"
                - "Make a first transfer to show the pot works"
                - "Write the pot's purpose on the rules sheet"
            - name: Kitchen cupboard, fridge and freezer stocktake
              description: |-
                ## Purpose
                Most kitchens hold weeks of food forgotten behind newer packets, and much of the early grocery saving in a frugal challenge comes from eating it. A one-off stocktake of cupboards, fridge and freezer, with dates noted, shows which meals are already paid for. It also stops duplicate buying in the first fortnight.

                ## Milestones
                1. Every cupboard, the fridge and the freezer emptied and checked.
                2. Out-of-date items cleared, and anything near its date moved to the front.
                3. A written list of what is in stock, grouped by meal ingredient.
                4. At least five meals planned from stock already in the house.
              priority: medium
              deadlineOffsetDays: 21
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A written stock list of cupboards, fridge and freezer exists, with at least five meals planned from food already in the house."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Empty one cupboard tonight and list what is in it"
                - "Work through the remaining cupboards, the fridge and the freezer"
                - "Move anything near its date to the front"
                - "Plan five meals using only what is already in stock"
            - name: Spending lines the challenge will not cut
              description: |-
                ## Purpose
                Frugal challenges go wrong when they cut things that protect health, safety or relationships: warmth for a vulnerable person, prescriptions, a child's one club, insurance. Naming the protected lines in advance means nobody has to argue it out when money is tight in week six. It also makes it easier to be firm everywhere else.

                ## Milestones
                1. A list of protected spending written, with the reason for each.
                2. Anything protected for health or safety checked with the person it affects.
                3. The protected list added to the rules sheet.
                4. A rule agreed for what happens if a protected line needs to grow.

                ## Notes
                Cutting heating too far is a false economy for babies, older people and anyone with a heart or lung condition. If in doubt, ask your doctor or health visitor what temperature to keep.
              priority: medium
              deadlineOffsetDays: 14
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A written list of protected spending lines, each with a reason, is part of the rules sheet before the challenge starts."
                cadence: one-shot
                effort_hours_estimate: "1"
              tasks:
                - "List spending that protects health, safety or a key relationship"
                - "Note why each item is protected"
                - "Check health-related items with the person they affect"
                - "Add the protected list to the rules sheet"
            - name: Map of free and low-cost local resources
              description: |-
                ## Purpose
                Libraries, tool libraries, repair cafés, community fridges, swap shops and free museum days can replace a surprising amount of spending, but most people know only one or two near them. A short map of what is within walking or bus distance, with opening times, makes the free option the easy option. Many libraries lend ebooks, audiobooks, magazines and board games as well as books.

                ## Milestones
                1. Local library services checked, including digital lending.
                2. Repair cafés, tool libraries and swap shops within reach listed with opening times.
                3. Free events listings from the council or community groups bookmarked.
                4. The map saved where the whole household can find it.
              priority: medium
              deadlineOffsetDays: 45
              frontmatter:
                mode: research
                output_kind: artifact
                success_criteria: "A list of at least eight free or low-cost local resources, with addresses and opening times, is saved and shared with the household."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Join the local library and install its digital lending apps"
                - "Search for repair cafés, tool libraries and swap shops within reach"
                - "Bookmark the council and community free events listings"
                - "Save the list somewhere the whole household can open it"
                - "Check the resources list is still accurate @recurring(yearly)"
            - name: Weekly cook-from-stock meal plan
              description: |-
                ## Purpose
                Food is the line most frugal challenges move first, because a planned week of meals cuts both waste and the midweek takeaway. Planning each week from what is already in the fridge and cupboards, then shopping only for the gaps, is the most dependable grocery saving there is. Fifteen minutes on the same evening each week is enough.

                ## Milestones
                1. A meal plan written for the coming week, starting from food in stock.
                2. A shopping list made only from the gaps in the plan.
                3. Two planned leftover nights each week.
                4. Eight weeks of plans kept, so favourite cheap weeks can be reused.

                ## Notes
                Start from the **Weekly meal plan** template. Keep one freezer meal in reserve for the night plans fall apart; it is what stops the takeaway order.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A written meal plan exists for at least eight consecutive weeks, each built from stock before the shopping list was written."
                cadence: rolling
              tasks:
                - "Check the fridge and cupboards before writing this week's plan"
                - "Plan the week's meals and list only the shopping gaps @recurring(weekly:sun)"
                - "Mark two nights a week as leftover nights"
                - "Keep one freezer meal in reserve for evenings when plans fall apart"
            - name: Weekly savings tally and transfer
              description: |-
                ## Purpose
                A saving that is not counted and moved quickly feels imaginary, and the motivation behind the challenge fades with it. A short Friday tally of the week's savings, followed by a transfer of that exact amount to the challenge pot, keeps the number real. Over 90 days the running total becomes the strongest argument for keeping the changes.

                ## Milestones
                1. A weekly tally done on the same day each week.
                2. The weekly total transferred to the challenge pot within a day.
                3. A running total visible at the top of the sheet.
                4. No more than one missed week in any month.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "The tally sheet shows a weekly total and a matching transfer to the savings pot for at least eleven of the challenge's thirteen weeks."
                cadence: rolling
              tasks:
                - "Add up the week's savings on the tally sheet @recurring(weekly:fri)"
                - "Transfer the week's total to the challenge savings pot @recurring(weekly:sat)"
                - "Update the running total at the top of the sheet"
                - "Tell the household the week's number over dinner"
            - name: Shopping list and receipt check routine
              description: |-
                ## Purpose
                Impulse items and price creep add up quietly, and the till receipt is the only place they show. Shopping from a written list with an estimated total, then checking the receipt against it the same day, catches the extras and the items that rang up wrong. A month of checks shows which shops and which aisles cost you most.

                ## Milestones
                1. Every main shop done from a written list with an estimated total.
                2. Each receipt checked against the list within a day.
                3. Unplanned items marked and totalled.
                4. One shopping habit changed because of what the receipts showed.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Four consecutive weeks of receipts have been checked against their lists, with unplanned spending totalled each week."
                cadence: rolling
              tasks:
                - "Write an estimated total next to this week's shopping list"
                - "Mark unplanned items on the week's receipts and total them @recurring(weekly:mon)"
                - "Query any item that rang up at the wrong price"
                - "Note the aisle or shop where most unplanned items came from"
            - name: 48-hour wait rule for non-essential buys
              description: |-
                ## Purpose
                Most impulse spending happens in the first few minutes after seeing something, and the urge fades fast. A rule that every non-essential purchase above a set amount waits 48 hours on a written list removes a large share of them without needing willpower in the moment. The list itself becomes a record of how much the rule saved.

                ## Milestones
                1. A threshold amount agreed, above which the rule applies.
                2. A wait list kept on the phone or the fridge.
                3. Each item on the list either bought deliberately or crossed off after 48 hours.
                4. Crossed-off items added to the savings tally.

                ## Notes
                Start from the **Habit tracker** template if you want to see the streak. Moving shopping apps off the phone's home screen makes the wait much easier.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A wait list has been used for 30 days, with each item marked bought or dropped and dropped items counted on the tally sheet."
                cadence: rolling
              tasks:
                - "Agree the amount above which purchases must wait 48 hours"
                - "Start a wait list in your phone notes"
                - "Move shopping apps off the phone's home screen"
                - "Clear the wait list and tally the items you dropped @recurring(weekly:wed)"
            - name: Monthly batch cooking and freezer rotation
              description: |-
                ## Purpose
                Cooking a double or triple batch of two or three meals once a month costs little more time than cooking once, and fills the freezer with ready meals cheaper than any shop-bought version. A labelled freezer list with dates stops food being lost at the back of the drawer. Batch days work best when built around whatever is cheap that week.

                ## Milestones
                1. A batch cooking session held once a month.
                2. Every freezer item labelled with contents and date.
                3. A freezer list kept on or near the freezer door.
                4. Nothing in the freezer older than three months.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "The freezer list shows at least three monthly batch sessions in a row, with no item older than three months."
                cadence: rolling
              tasks:
                - "Choose two recipes that freeze well and scale up easily"
                - "Hold a batch cooking session and freeze labelled portions @recurring(monthly:6)"
                - "Stick a dated freezer list on the freezer door"
                - "Move the oldest freezer items to the top and plan them into meals @recurring(monthly:20)"
            - name: Packed lunch and home coffee routine
              description: |-
                ## Purpose
                A bought lunch and a takeaway coffee on every working day can cost more each month than a weekly family shop, and they are among the easiest lines to cut. Packing lunch the evening before, and filling a flask in the morning, takes about ten minutes a day. Counting the difference for a month usually makes the habit stick.

                ## Milestones
                1. A lunchbox and flask you will actually use bought or found.
                2. Five easy packed-lunch options written down.
                3. Lunch packed the evening before on at least four working days a week.
                4. A month of lunch savings added to the tally.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Lunch has been packed on at least 16 working days in a month, and the saving against bought lunches is recorded on the tally sheet."
                cadence: rolling
              tasks:
                - "Find a lunchbox and flask in the house before buying new ones"
                - "Write down five packed lunches you would happily eat"
                - "Pack tomorrow's lunch the evening before @recurring(daily)"
                - "Work out the month's saving against your usual bought lunch"
            - name: Monthly frugal challenge check-in
              description: |-
                ## Purpose
                Some cuts settle into routine and others quietly collapse, and without a regular look it is hard to tell which. A 30-minute monthly check-in that compares spending with the baseline and asks what is working lets the household drop a cut that costs too much goodwill and double down on one that is easy. It also catches the slow drift back to old habits that tends to start around month two.

                ## Milestones
                1. A check-in held each month on a set date.
                2. Spending in each covered line compared with the baseline.
                3. One cut kept, one adjusted and one dropped or added each month.
                4. Notes from each check-in kept with the rules sheet.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Notes from three monthly check-ins exist, each comparing spending with the baseline and recording one change to the rules."
                cadence: rolling
              tasks:
                - "Hold the monthly frugal check-in with the household @recurring(monthly:28)"
                - "Compare each covered spending line with its baseline"
                - "Decide one cut to keep, one to adjust and one to drop or add"
                - "File the check-in notes with the rules sheet"
            - name: Household energy habits and meter readings
              description: |-
                ## Purpose
                Switching supplier is one lever; how the household uses energy is the other, and it is the one a frugal challenge controls directly. Turning the thermostat down a degree, washing at lower temperatures, drying washing outside, switching appliances off at the wall and boiling only the water you need each make a small dent that adds up. Monthly meter readings show whether the habits are working.

                ## Milestones
                1. A list of five energy habits the household agrees to try.
                2. Meter readings taken on the same day each month.
                3. Monthly usage compared with the same month last year where old bills allow.
                4. The habits that saved most kept, the rest dropped.

                ## Notes
                Do not let the house get cold for babies, older people or anyone unwell. Comfort and health come before the meter.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Six months of meter readings are recorded alongside the five energy habits the household agreed to try."
                cadence: rolling
              tasks:
                - "Agree five energy habits to try, such as washing at 30 degrees"
                - "Read the gas and electricity meters and log the numbers @recurring(monthly:2)"
                - "Find last year's usage for the same months on old bills"
                - "Drop any habit that shows no difference after three months"
            - name: Monthly use-it-up week
              description: |-
                ## Purpose
                Cupboards fill back up soon after the first stocktake, and a week each month of eating down what is there keeps the money in food already bought. Shopping only for fresh basics such as milk, bread and fruit that week can halve that week's grocery spend. It is also a good test of cooking invention.

                ## Milestones
                1. One week each month marked for eating down stock.
                2. Shopping that week limited to an agreed list of fresh basics.
                3. That week's grocery spend recorded beside a normal week.
                4. Three new meals invented from leftovers and stock, written down for reuse.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Three use-it-up weeks have run, each with its grocery spend recorded beside a normal week."
                cadence: rolling
              tasks:
                - "Agree the fresh basics allowed during a use-it-up week"
                - "Start this month's use-it-up week before the next big shop @recurring(monthly:15)"
                - "Record that week's grocery spend beside a normal week"
                - "Write down any meal invented from stock that worked"
            - name: Ten cheap staple meals cooked from scratch
              description: |-
                ## Purpose
                Households that can cook ten cheap, filling meals without a recipe rarely need a takeaway. Lentil dal, a tray bake, a bean chilli, a soup from whatever is left, a frittata and a pasta sauce from tins each cost a fraction of a ready meal, and most scale up for the freezer. Learning one a week takes ten weeks.

                ## Milestones
                1. A list of ten staple meals chosen to suit the household's tastes.
                2. Each meal cooked at least twice.
                3. Cost per portion worked out for each.
                4. All ten written on one card with ingredients, so anyone in the house can cook them.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Ten staple meals have each been cooked twice, with a cost per portion recorded and the recipes on one card."
                cadence: phased
                effort_hours_estimate: "15"
              tasks:
                - "Choose ten cheap meals the household already likes or would try"
                - "Cook one new staple meal this week"
                - "Work out the cost per portion for each meal you cook"
                - "Write all ten recipes on one card for the kitchen"
            - name: Basic mending and clothes care
              description: |-
                ## Purpose
                Clothes are usually thrown out for small faults: a lost button, a dropped hem, a split seam, a hole at a jumper elbow. Learning five basic repairs, and washing and drying clothes so they last longer, cuts the clothing budget quietly and permanently. A small sewing kit costs less than one replacement shirt.

                ## Milestones
                1. A basic sewing kit put together.
                2. Five repairs learned: button, hem, seam, patch and darn.
                3. The mending pile cleared at least once.
                4. Washing habits changed to cooler washes and air drying for most clothes.

                ## Notes
                Video tutorials cover every one of these, and a repair café volunteer will often show you while fixing it.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Five basic clothing repairs have each been done at least once and the household mending pile has been cleared."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Gather needles, thread, safety pins and spare buttons into one box"
                - "Sew a button back on from the mending pile"
                - "Learn to fix a dropped hem and a split seam"
                - "Clear the mending pile @recurring(monthly:12)"
            - name: Simple home repairs instead of call-outs
              description: |-
                ## Purpose
                Call-out fees for a dripping tap, a blocked sink or a sticking door can cost more than the tools to fix them. Learning a short list of safe, simple repairs, and keeping a basic tool kit, saves money every time one comes up. Knowing your limits matters just as much: gas, mains electrics and anything structural belong with a qualified tradesperson.

                ## Milestones
                1. A basic tool kit assembled from what you have plus a few essentials.
                2. The stopcock and fuse box located and labelled.
                3. Three simple repairs done, such as a tap washer, a blocked trap and a loose hinge.
                4. A written list of jobs you will always hand to a professional.

                ## Notes
                Never attempt gas work, and leave mains electrical work to a qualified electrician. Turn the water off at the stopcock before touching any tap. Renters should check the tenancy before repairing anything the landlord is responsible for.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "The stopcock is labelled, three simple repairs have been done without a call-out, and a list of professional-only jobs is written."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "Find and label the stopcock and the fuse box"
                - "Collect a screwdriver set, adjustable spanner, plunger and pliers"
                - "Fix one small fault that has been waiting for a tradesperson"
                - "Walk round the house checking for drips, loose fittings and slow drains @recurring(quarterly)"
            - name: Reading shelf labels for unit prices and offers
              description: |-
                ## Purpose
                Bigger packs are not always cheaper, multibuys are often priced to look like savings they are not, and the same product can cost very different amounts in different aisles. Learning to read the unit price on every shelf label, and knowing when reduced stickers usually appear at your shop, saves money on every trip without changing what you eat.

                ## Milestones
                1. Unit prices compared for ten regular items across pack sizes.
                2. Two multibuy offers checked and found genuine or not.
                3. The usual time for reduced stickers at your nearest shop found out.
                4. A short note of the best value size for each regular item.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A note listing the best value pack size for ten regular items, based on unit prices, is kept with the shopping list."
                cadence: phased
                effort_hours_estimate: "3"
              tasks:
                - "Compare unit prices for ten things you buy every week"
                - "Check whether two current multibuy offers beat the single price"
                - "Ask staff when reduced stickers usually go out"
                - "Write the best value pack size next to each regular item"
            - name: Simple homemade cleaning supplies
              description: |-
                ## Purpose
                Shelves of separate sprays for every surface can be replaced for most jobs by a few cheap basics: washing-up liquid, white vinegar, bicarbonate of soda and microfibre cloths. Learning what each is good for, and what it must never be mixed with, cuts the household goods bill and frees cupboard space. Keep one proper disinfectant for the jobs that need it.

                ## Milestones
                1. Current cleaning products listed with what each cost.
                2. Three basic cleaners made or bought and clearly labelled.
                3. Two months of cleaning done mainly with the basics.
                4. Spending on cleaning products compared with the baseline.

                ## Notes
                Never mix bleach with vinegar, ammonia or other cleaners: the fumes are dangerous. Label every homemade bottle and keep them out of children's reach. Vinegar can etch natural stone.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Two months of household cleaning have been done mainly with labelled basic cleaners, with the cost compared against the baseline."
                cadence: phased
                effort_hours_estimate: "3"
              tasks:
                - "List the cleaning products under the sink and what each cost"
                - "Make a labelled vinegar spray and a bicarbonate paste"
                - "Use microfibre cloths in place of kitchen roll for a month"
                - "Compare two months of cleaning spend with the baseline"
            - name: Windowsill herbs and salad growing
              description: |-
                ## Purpose
                Seeds cost less than a single bag of supermarket salad and can crop for months. Growing a few fast, forgiving crops on a windowsill, balcony or small plot cuts a recurring cost and wastes less, since you pick only what you need. Cut-and-come-again leaves, chives, parsley and mint are good starters.

                ## Milestones
                1. Three easy crops chosen for the space and light you have.
                2. Containers found or reused rather than bought.
                3. Seeds sown and the first harvest picked.
                4. A sowing note kept so the next batch goes in on time.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "At least three crops have been harvested from home-grown pots, with a sowing note for the next batch."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Pick three easy crops for your windowsill or balcony"
                - "Reuse old tubs or tins as pots, with drainage holes"
                - "Sow the first seeds this week"
                - "Note sowing dates so the next batch follows on"
            - name: Home haircuts and grooming basics
              description: |-
                ## Purpose
                Regular haircuts for a household of four can cost hundreds a year, and simple cuts such as clipper cuts, fringe trims and children's trims are learnable at home. Starting with the easiest cut, on a willing volunteer, keeps the risk low. Nails, brows and basic grooming follow the same pattern.

                ## Milestones
                1. A decent pair of clippers or hair scissors bought or borrowed.
                2. One simple cut learned from tutorials.
                3. Three home haircuts done.
                4. The yearly saving against salon or barber visits worked out.

                ## Notes
                Keep the occasional professional cut for styles that matter to someone. The aim is fewer visits, not none.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Three home haircuts have been done and the yearly saving against professional cuts is recorded on the tally sheet."
                cadence: phased
                effort_hours_estimate: "5"
              tasks:
                - "Ask who in the house is happy to be the first volunteer"
                - "Borrow or buy clippers with guide combs"
                - "Watch two tutorials for the simplest cut you need"
                - "Work out the yearly saving against barber or salon visits"
            - name: Bike upkeep for cheap everyday transport
              description: |-
                ## Purpose
                For short trips a bicycle is the cheapest transport there is, but a puncture or a slipping chain sends many people back to the car or the bus. Learning to fix a puncture, adjust brakes and keep the chain clean makes the bike reliable and avoids most repair shop bills.

                ## Milestones
                1. A pump, tyre levers, a puncture kit and chain oil to hand.
                2. A puncture repaired at home.
                3. Brakes and gears checked and adjusted.
                4. A five-minute monthly check built into routine.

                ## Notes
                If the brakes still feel wrong after adjustment, take the bike to a shop or a community bike workshop. Brakes are not the place to economise.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A puncture has been fixed at home and the bike has passed four monthly checks of tyres, brakes and chain."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Put together a pump, tyre levers, a puncture kit and chain oil"
                - "Practise removing and refitting a wheel"
                - "Fix a puncture with the help of a tutorial"
                - "Check tyre pressure, brakes and chain @recurring(monthly:9)"
            - name: Own-brand downshift taste test
              description: |-
                ## Purpose
                Moving from branded goods to own-brand or value lines is one of the biggest grocery savings available, but a blanket switch fails when someone hates the cheaper version. A blind taste test of ten regular items lets the household decide item by item. Items that pass switch for good; the rest stay branded with no argument.

                ## Milestones
                1. Ten branded items chosen from the regular shop.
                2. Own-brand or value versions bought and tested blind.
                3. Each item marked switch or keep.
                4. The monthly saving from switched items worked out and added to the tally.
              priority: medium
              deadlineOffsetDays: 45
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "Ten items have been blind tested, each marked switch or keep, with the monthly saving from switched items recorded."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Pick ten branded items from the regular shop"
                - "Buy the own-brand or value version of each"
                - "Run a blind taste test with the household"
                - "Add the monthly saving from switched items to the tally"
            - name: Low-cost draught proofing
              description: |-
                ## Purpose
                Draughts around doors, windows, letterboxes and floorboards let heat escape all winter, and most can be stopped with brush strips, foam tape and a draught excluder for a modest outlay. Doing it before the cold months makes every hour of heating go further. It is one of the few home improvements a renter can usually make too.

                ## Milestones
                1. Draughty spots found with the back of a damp hand or a strip of tissue on a windy day.
                2. Materials bought for the worst five draughts.
                3. Those draughts sealed, with a heavy curtain or excluder on the coldest door.
                4. Heating use the following winter compared with the previous one.

                ## Notes
                Do not block air bricks, trickle vents or vents for gas appliances; they are there for safety. Renters should ask before fixing anything permanent.
              priority: medium
              deadlineOffsetDays: 60
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "The five worst draughts in the home are sealed and no safety vents have been blocked."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Feel for draughts around doors, windows and floorboards on a windy day"
                - "List the five worst draughts"
                - "Buy brush strips, foam tape and an excluder for those five"
                - "Seal each draught and check every vent is left clear"
            - name: Car-light month trial
              description: |-
                ## Purpose
                Many households use the car for short journeys that could be walked, cycled or made by bus, and every one costs fuel and wear. A month of leaving the car at home for trips under a set distance shows what the car is really needed for. The result may simply be lower fuel spend, or the evidence for a bigger decision later.

                ## Milestones
                1. A distance threshold agreed, below which trips go on foot, by bike or by bus.
                2. Fuel spend for the trial month compared with the previous three.
                3. A list of the trips that genuinely needed the car.
                4. A decision recorded on which car-free habits to keep.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A month of car-light travel is complete, with fuel spend compared against the previous three months and the habits to keep recorded."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Agree the distance below which trips go on foot, by bike or by bus"
                - "Check local bus fares and passes for regular trips"
                - "Note every car trip during the month and why it was needed"
                - "Compare the month's fuel spend with the previous three months"
            - name: Borrow, rent or buy rule for occasional items
              description: |-
                ## Purpose
                Ladders, carpet cleaners, party dishes, camping gear and power tools are often bought for one job and then stored for years. A simple household rule, such as borrow first, rent second and buy only if it will be used at least four times a year, keeps cupboards clear and money in the pot. Writing it down saves the debate every time.

                ## Milestones
                1. A written borrow, rent or buy rule with a usage threshold.
                2. Neighbours, friends or a tool library identified as places to borrow from.
                3. The next occasional purchase decided using the rule.
                4. Items the household rarely uses offered for others to borrow.

                ## Notes
                Start from the **Purchase decision** template for anything above your threshold.
              priority: low
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A written borrow, rent or buy rule exists and has been applied to at least one occasional purchase."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Write the borrow, rent or buy rule with a usage threshold"
                - "List who nearby you could borrow tools and equipment from"
                - "Apply the rule to the next occasional item someone wants"
                - "Offer your own rarely used items for neighbours to borrow"
            - name: Reusables swap with a payback check
              description: |-
                ## Purpose
                Swapping disposables for reusables, such as kitchen roll for cloths, cling film for tubs, razor cartridges for a safety razor or disposable period products for reusable ones, can save money for years, but only if the reusable actually gets used. Working out the payback time for each swap before buying stops a drawer filling with good intentions.

                ## Milestones
                1. Five disposable items listed with their yearly cost.
                2. A reusable alternative priced for each, with its payback time.
                3. Only the swaps that pay back within a year bought.
                4. Each swap still in use after three months, or dropped.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "Payback times for five disposable-to-reusable swaps are written down, and only those paying back within a year have been made."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "List five disposables the household buys and their yearly cost"
                - "Price a reusable alternative for each"
                - "Work out how many months each swap takes to pay back"
                - "Buy only the swaps that pay back within a year"
            - name: Bulk buying and storage decision
              description: |-
                ## Purpose
                Buying staples such as rice, oats, pasta, tins and toilet roll in bulk can cut unit costs sharply, but it ties up cash and space, and food bought in bulk can still be wasted. Deciding which few items are worth bulk buying, given your storage and how fast you use them, captures most of the saving without the risk.

                ## Milestones
                1. Ten candidate staples priced by unit at normal and bulk sizes.
                2. Storage space measured and checked for damp and pests.
                3. A short list of items worth bulk buying, with how long each lasts.
                4. The first bulk order placed within an agreed budget.

                ## Notes
                Splitting bulk packs with a friend or neighbour gets the unit price without the storage problem.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A short list of bulk-buy items exists, each with its unit price saving and storage life, and the first order has been placed within budget."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Price ten staples by unit at normal and bulk sizes"
                - "Measure the dry storage space you actually have"
                - "Choose the items you use fast enough to buy in bulk"
                - "Ask a friend whether they would split a bulk order"
            - name: Free entertainment calendar
              description: |-
                ## Purpose
                Leisure spending on cinema trips, days out, meals and drinks is often the line that quietly undoes a frugal challenge. Planning one free or very cheap activity each week, from free museum days, park runs and library events to board game nights and long walks, gives the household something to look forward to that costs almost nothing.

                ## Milestones
                1. A list of twenty free or cheap activities near you.
                2. One free activity planned into each week.
                3. Leisure spending compared with the baseline after a month.
                4. Favourite free activities kept as a standing list.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A list of twenty free or cheap activities exists and at least one has happened each week for a month."
                cadence: rolling
              tasks:
                - "Write down twenty free or cheap things to do within reach"
                - "Plan one free activity into each week"
                - "Check the library and council listings for free events @recurring(monthly:10)"
                - "Compare a month of leisure spending with the baseline"
            - name: Cheaper socialising agreement with friends
              description: |-
                ## Purpose
                Saying no to every invitation makes a frugal challenge lonely, and lonely challenges do not last. Suggesting cheaper formats such as a potluck in place of a restaurant, a walk in place of drinks or a film night at home keeps friendships going on a smaller budget. Most friends are relieved to be asked.

                ## Milestones
                1. Three cheaper formats for meeting friends written down.
                2. The challenge mentioned to close friends, with a cheaper suggestion.
                3. At least two social plans in a month done the cheaper way.
                4. A monthly social spending figure set and kept to.
              priority: low
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "At least two social plans in one month have used a cheaper format, and a monthly social spending figure is set."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Write three cheaper ways to see friends"
                - "Message one friend suggesting a potluck or a walk instead of a meal out"
                - "Set a monthly figure for social spending"
                - "Host one low-cost evening at home this month"
            - name: Frugal challenge launch week
              description: |-
                ## Purpose
                The first week sets the tone for the rest. A launch week that clears the fridge, plans meals, sets up the tally and puts the wait list in place gets the easy wins early, so the first Friday tally already shows a number worth celebrating. Launching on a payday or the first of the month makes comparisons simpler.

                ## Milestones
                1. Start date confirmed and the rules sheet pinned up.
                2. The first week's meal plan built from stock.
                3. Tally sheet, savings pot and wait list all working.
                4. The first weekly tally done and transferred.
              priority: high
              deadlineOffsetDays: 14
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "By the end of the first week the meal plan, tally, savings pot and wait list are all in use and the first transfer has been made."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Confirm the start date and tell everyone in the house"
                - "Plan the first week's meals from the stocktake"
                - "Check the tally sheet, savings pot and wait list are ready to use"
                - "Make the first transfer at the end of day seven"
            - name: Halfway review of the challenge
              description: |-
                ## Purpose
                Around the midpoint enthusiasm dips and old habits return, especially after a payday or a hard week. A deliberate halfway review compares the running total with the target, asks each person how it feels, and resets anything that is not working. Small adjustments here are what get a challenge to the end.

                ## Milestones
                1. The running total compared with the target for the whole challenge.
                2. Each household member asked what has been hardest.
                3. One rule loosened and one tightened if needed.
                4. A revised target set for the second half.
              priority: medium
              deadlineOffsetDays: 50
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A halfway review has compared the running total with the target and recorded any rule changes and a second-half target."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Put the halfway review in the calendar now"
                - "Compare the running total with the target"
                - "Ask each person what has been hardest so far"
                - "Write the second-half target and any rule changes on the rules sheet"
            - name: End-of-challenge results and keep list
              description: |-
                ## Purpose
                The point of the challenge is not the 90 days but what carries on after them. A results review compares spending with the baseline line by line, totals the savings pot, and sorts every change into keep, keep in a lighter form, or drop. Enjoying the agreed reward closes the challenge on a good note.

                ## Milestones
                1. Spending in each covered line compared with the baseline.
                2. The savings pot total confirmed.
                3. Every change sorted into keep, lighten or drop.
                4. The agreed reward enjoyed.
              priority: high
              deadlineOffsetDays: 100
              frontmatter:
                mode: event
                output_kind: decision
                success_criteria: "A results sheet compares each covered line with the baseline, totals the savings pot and sorts every change into keep, lighten or drop."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Book the results review for the day after the challenge ends"
                - "Compare each covered spending line with the baseline"
                - "Sort every change into keep, lighten or drop"
                - "Enjoy the agreed reward with the household"
            - name: Community swap event
              description: |-
                ## Purpose
                Clothes, toys, books and kitchen kit that one household has outgrown are exactly what another needs, and a swap passes them on without money changing hands. Hosting a small swap with neighbours, a school group or a community centre clears clutter and fills gaps for free. Twenty people is enough to make it worthwhile.

                ## Milestones
                1. A venue, date and simple rules agreed.
                2. At least twenty people invited.
                3. The swap held, with leftover items donated.
                4. Items the household gained noted with their shop value.
              priority: low
              deadlineOffsetDays: 90
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A swap event has been held with at least twenty people invited, and leftover items have gone to a charity or community group."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Ask a community centre, school or friend about a free space"
                - "Set simple rules, such as up to ten clean items each"
                - "Invite at least twenty people"
                - "Arrange for a charity to collect whatever is left"
            - name: Birthday party on a small budget
              description: |-
                ## Purpose
                Children's parties and adult birthdays can cost more than a month's grocery saving in one afternoon. Setting a budget first, holding it at home or in a park, making the cake, and swapping party bags for one simple activity keeps the celebration and loses most of the cost. Guests remember the fun, not the venue.

                ## Milestones
                1. A budget set before any planning.
                2. A free or cheap venue chosen.
                3. Food, cake and an activity planned within the budget.
                4. The actual cost recorded against the budget.
              priority: low
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A birthday celebration has been held within a budget set in advance, with the actual cost recorded."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Set the party budget before choosing anything else"
                - "Choose a home, park or other free venue"
                - "Plan homemade food and one simple group activity"
                - "Record what the party actually cost"
            - name: Low-cost holiday at home or nearby
              description: |-
                ## Purpose
                Time off does not need flights and hotels to feel like a break. Planning a week of day trips, picnics, free attractions, camping or a house swap, with a firm budget, gives the household real rest during a frugal challenge without wiping out the savings. The planning is half the fun.

                ## Milestones
                1. A total budget set for the week.
                2. A plan of day trips and free activities, with travel costs.
                3. Food planned around picnics and home cooking.
                4. Spending recorded against the budget.

                ## Notes
                Start from the **Trip** template.
              priority: low
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A week's break at home or nearby has been taken within a budget set in advance, with spending recorded against it."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Set a total budget for the week off"
                - "List free attractions and day trips within an hour of home"
                - "Plan picnics and home-cooked meals for each day"
                - "Record spending against the budget each evening"
            - name: Frugal challenge with children
              description: |-
                ## Purpose
                Children notice when money changes, and a challenge they are part of goes better than one done to them. Giving each child a small, visible role, such as minding the savings jar, choosing a free weekend activity or spotting unit prices, teaches money habits while cutting costs. Agreeing what is not cut for them, such as one club or treat, keeps it fair.

                ## Milestones
                1. Each child given a role suited to their age.
                2. A visible savings jar or chart showing progress.
                3. One protected treat or activity agreed for each child.
                4. A family reward chosen for the end of the challenge.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Each child has a named role in the challenge, a visible savings chart is in use, and one protected treat is agreed for each child."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Explain the challenge to the children in plain terms"
                - "Give each child a role suited to their age"
                - "Set up a savings jar or chart where everyone can see it"
                - "Update the family savings chart together @recurring(weekly:thu)"
            - name: Frugal living for one
              description: |-
                ## Purpose
                Living alone makes some savings harder: packs are sized for families, bills do not halve, and cooking for one can feel pointless. Cooking in batches for the freezer, buying loose produce, splitting bulk buys with a friend and heating one room cover most of the gap. A solo challenge also needs a social plan, since cheap evenings at home can get lonely.

                ## Milestones
                1. Loose or smaller pack options found for regular items.
                2. Two meals cooked in four-portion batches for the freezer.
                3. A friend or neighbour found to split bulk buys with.
                4. One free social activity a week planned in for a month.
              priority: low
              frontmatter:
                mode: building
                output_kind: habit
                success_criteria: "Batch portions are in the freezer, a bulk-buy partner is found and one free social activity a week has been kept for a month."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "List regular items you can buy loose or in smaller sizes"
                - "Cook two meals in four-portion batches for the freezer"
                - "Ask a friend or neighbour to share bulk buys with you"
                - "Plan one free social activity for each week this month"
            - name: Concessions and discounts on a fixed retirement income
              description: |-
                ## Purpose
                On a pension, income rarely keeps pace with prices, so small recurring costs matter more each year. Concessions on travel, leisure and entertainment, off-peak shopping times, community lunches and discounts for older people often go unclaimed simply because nobody asked. A short check of what you can get sits naturally alongside a frugal challenge.

                ## Milestones
                1. Age-related concessions on travel, leisure and entertainment listed.
                2. Each concession you qualify for applied for or confirmed.
                3. Off-peak or reduced times found at shops and venues you use.
                4. Expiry dates of concession cards noted.

                ## Notes
                Government benefits and pension top-ups have their own claim process. This project covers everyday discounts and concessions only.
              priority: medium
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A list of age-related concessions is complete, each one applied for or confirmed, with card expiry dates noted."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "List concessions for older people on local transport, leisure and cinemas"
                - "Apply for the concessions you qualify for"
                - "Find off-peak times at the shops and venues you use"
                - "Check concession cards for expiry dates @recurring(yearly)"
            - name: Shared-house cooking rota and staples pot
              description: |-
                ## Purpose
                Students and young renters in shared houses often each buy the same staples and cook separately, which costs more per person than cooking together. A cooking rota with a shared pot for staples such as oil, rice, pasta, onions and tins cuts each person's food spend and the waste from half-used packets. It only works with clear rules and a quick way to settle up.

                ## Milestones
                1. Housemates who want to join the rota identified.
                2. A list of shared staples agreed with a weekly contribution.
                3. A rota for cooking nights posted in the kitchen.
                4. A four-week trial completed and reviewed together.

                ## Notes
                Keep rent and bill splitting separate; this is only about food.
              priority: low
              frontmatter:
                mode: building
                output_kind: habit
                success_criteria: "A shared cooking rota and staples pot has run for four weeks with every member's contribution recorded."
                cadence: phased
                effort_hours_estimate: "3"
              tasks:
                - "Ask housemates who wants to join a cooking rota"
                - "Agree a list of shared staples and a weekly contribution"
                - "Post the cooking rota on the kitchen wall"
                - "Review the rota together after four weeks"
            - name: Working from home without creeping costs
              description: |-
                ## Purpose
                Working from home saves on commuting but quietly raises heating, electricity and snacking costs. Heating only the room you work in, dressing for the temperature, planning lunch the night before and keeping a note of the extra costs shows the true picture. In some countries part of these costs can be claimed against tax, so the note is worth keeping.

                ## Milestones
                1. Extra home working costs estimated per month.
                2. One room set up to heat efficiently for work.
                3. Workday lunches and snacks planned rather than grazed.
                4. A simple record of home working days kept.
              priority: low
              frontmatter:
                mode: building
                output_kind: habit
                success_criteria: "A monthly estimate of extra home working costs exists, with a single heated work room and a record of home working days."
                cadence: phased
                effort_hours_estimate: "3"
              tasks:
                - "Estimate what home working adds to heating, power and food each month"
                - "Choose one room to heat and work in"
                - "Plan workday lunches alongside the weekly meal plan"
                - "Keep a simple log of home working days"
            - name: Couples' frugal challenge without arguments
              description: |-
                ## Purpose
                Partners often have very different ideas of what counts as waste, and a challenge one person leads can feel like criticism to the other. Each partner choosing their own cuts, keeping a small no-questions personal allowance, and agreeing how to raise a disagreement keeps money talk calm. The aim is a shared target, not a scorecard of each other's spending.

                ## Milestones
                1. Each partner's own three cuts written down.
                2. A personal allowance agreed for each, with no questions asked.
                3. A rule agreed for raising a spending worry without blame.
                4. A shared target and reward set.
              priority: low
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "Each partner has chosen three cuts and a personal allowance, and a shared target and disagreement rule are written down."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Write down three cuts each of you is willing to make"
                - "Agree a personal allowance that needs no explaining"
                - "Agree how either of you can raise a spending worry calmly"
                - "Set a shared target and a reward for reaching it"
            - name: Cost per use for often-replaced household items
              description: |-
                ## Purpose
                Frugal is not always cheapest at the till: a pair of boots that lasts eight years can cost less per wear than three cheap pairs. Working out cost per use for the things the household replaces most often shows where buying better and buying once saves money, and where cheap is genuinely fine.

                ## Milestones
                1. Five often-replaced items listed with how long each lasts.
                2. Cost per use or per year worked out for cheap and better versions.
                3. A rule written for which categories to buy durable.
                4. The next replacement bought using the rule.

                ## Notes
                Start from the **Purchase decision** template when comparing two options side by side.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "Cost per use has been worked out for five often-replaced items, and a written rule says which categories to buy durable."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "List five things the household replaces most often"
                - "Note how long the cheap and better versions of each usually last"
                - "Work out cost per use for both versions"
                - "Write a rule for which categories to buy durable"
            - name: Food waste audit to near zero
              description: |-
                ## Purpose
                Households routinely bin a noticeable share of the food they buy, and every bag of wilted salad is money thrown away. Recording what gets thrown out for two weeks, and why, points to the fix: smaller buys, better storage, a leftovers night or freezing sooner. Repeating the audit a month later shows whether the fixes held.

                ## Milestones
                1. Two weeks of thrown-away food recorded with a reason for each item.
                2. The three most wasted foods identified.
                3. One fix applied to each of the three.
                4. A second two-week audit showing less waste.
              priority: medium
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "Two food waste audits a month apart record what was thrown away and why, with less waste in the second."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Put a sheet by the bin to note every food item thrown away"
                - "Write down why each item was wasted"
                - "Choose one fix for each of the three most wasted foods"
                - "Repeat the two-week audit a month later"
            - name: Annual frugal audit of household costs
              description: |-
                ## Purpose
                Prices drift, habits creep back and new costs appear, so a frugal household benefits from a yearly look at every covered line. Repeating the baseline once a year with the same method shows which changes survived and which costs have grown, and settles whether a fresh challenge is needed.

                ## Milestones
                1. A year of spending pulled for each covered line.
                2. Each line compared with the original baseline and with last year.
                3. Lines that have crept up named, with a likely reason.
                4. A decision recorded on whether to run another challenge, and when.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A yearly comparison of each covered line against the original baseline exists, with a written decision on a new challenge."
                cadence: cyclic
              tasks:
                - "Pull twelve months of spending for each covered line"
                - "Compare each line with the original baseline"
                - "Name the lines that have crept up and why"
                - "Run the annual frugal audit of covered spending lines @recurring(yearly)"
            - name: Household frugal playbook
              description: |-
                ## Purpose
                Habits fade when they live only in one person's head. A short written playbook of the changes that stuck, with the staple meals, the shopping rules, the energy habits, the swaps and the free resources, means anyone in the house can keep them going and a new partner or housemate can pick them up quickly.

                ## Milestones
                1. Every kept change from the results review written in one place.
                2. Staple meals, shopping rules and energy habits included.
                3. Free resources and borrowing contacts added.
                4. The playbook reread and pruned each quarter.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A written playbook lists every change kept after the challenge and has been reviewed at least once since it was written."
                cadence: phased
                effort_hours_estimate: "3"
              tasks:
                - "Ask the agent to draft a playbook from the results review and rules sheet"
                - "Add the staple meals, shopping rules and energy habits"
                - "Add free resources and the people you borrow from"
                - "Reread the playbook and remove what no longer fits @recurring(quarterly)"
---

# Frugal Living Challenge

This area runs a household frugal challenge from the first rules sheet to the habits you keep once it ends, for anyone who wants lower monthly outgoings without a miserable year. It starts with the foundations (rules, a three-month baseline, an honest tally and a pot for the savings), moves through the weekly routines and practical skills that do the cutting, then the decisions, the dated milestones of the challenge itself, versions for families, people living alone, retirees, shared houses and couples, and finally the audits and playbook that make the savings permanent.

The rhythm is mostly weekly: a Sunday meal plan, a Friday savings tally and a Saturday transfer, with a monthly batch cook, meter reading, use-it-up week and check-in on the 28th, and a yearly frugal audit. The Metrics log, Weekly meal plan, Habit tracker, Purchase decision and Trip templates pair with the projects that name them. Installing adds all 50 projects as active, so archive the ones that are not for you yet.
