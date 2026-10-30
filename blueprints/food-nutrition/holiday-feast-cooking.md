---
id: food-nutrition.holiday-feast-cooking
name: Holiday Feast Cooking
description: "Festival dates, a core menu, quantities, a six-week countdown and a feast-day schedule, then the yearly routines, centrepiece skills and plans for each big feast so the day runs to time."
category: personal
version: 1.0.0
tags: [food-nutrition, holiday-feast-cooking, everyone, parent, festivals, feast-menus, countdown]
author: Aurum Technology
starter_structure:
  templates:
    - operational-checklist
    - household-chores
    - savings-goal
    - purchase-decision
  pillars:
    - name: Food & Nutrition
      emoji: "🥗"
      description: "What gets eaten, and how it gets to the table: meal planning, shopping and batch cooking, dietary needs and goals, cooking skill as a lifelong craft, and the food rituals that hold a household together."
      pillarFrontmatter:
        review_cadence: monthly
      areas:
        - name: Holiday Feast Cooking
          description: "Cooking the big seasonal and religious feasts, such as Christmas, Eid, Thanksgiving or Diwali, with menu plans and countdown timelines."
          projects:
            - name: Household festival calendar with feast dates
              description: |-
                ## Purpose
                Eid, Diwali, Easter, Passover and Lunar New Year move every year with the moon or the religious calendar, and Thanksgiving lands on a different date each year, so the feast can arrive sooner than expected. One calendar listing every feast your household cooks for, with dates for this year and next and a six-week warning before each, turns surprise into lead time.

                ## Milestones
                1. Every festival the household cooks a feast for listed, including ones hosted by relatives.
                2. The date of each festival for this year and next entered in the shared calendar.
                3. A reminder set six weeks before each feast you cook yourself.
                4. Moon-sighting festivals marked with a one or two day window rather than a single date.

                ## Notes
                For Eid and other moon-sighting dates, follow the announcement your community or mosque uses, and plan food that can wait a day.

                Before you start: this plan is general information to help you organise your own health. It is not medical advice and does not replace a doctor, nurse, pharmacist or other qualified professional. Check any change to treatment, medicine or diet with them first, and get urgent care if you feel unwell.
              priority: high
              deadlineOffsetDays: 14
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A shared calendar shows every feast the household cooks for over the next two years, each with a six-week reminder."
                cadence: one-shot
                effort_hours_estimate: "1"
              tasks:
                - "List every festival meal your household cooks or attends"
                - "Look up the dates of each festival for this year and next"
                - "Add six-week reminders before each feast you cook"
                - "Add next year's festival dates once they are published @recurring(yearly)"
            - name: Who hosts which feast agreement
              description: |-
                ## Purpose
                Many family arguments at festival time are really about who cooks, where and for how many, left unsaid until a fortnight before. Agreeing early who hosts each feast, who brings what and roughly how many will come gives the host time to plan and everyone else a clear part.

                ## Milestones
                1. Each feast this year assigned a host household.
                2. An expected guest count for each feast, including children and anyone staying over.
                3. Arrival and eating times agreed with the people travelling furthest.
                4. The agreement shared in the family group so nobody hears it second hand.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "Each feast this year has a named host, a guest count and an eating time, shared in writing with the family."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Message close family to ask who wants to host each feast"
                - "Write down a guest count for each feast, children included"
                - "Agree the time each meal will be served"
                - "Confirm hosts and numbers for the coming year's feasts @recurring(yearly)"
            - name: Feast budget and spending cap
              description: |-
                ## Purpose
                Festival food spending creeps: the premium bird, a third dessert, drinks for people who never come, extra sweets nobody asked for. Setting a figure per feast before the shopping starts, and splitting it into centrepiece, sides, sweets and drinks, lets you spend where it matters and see where last year's money really went.

                ## Milestones
                1. Last year's feast spending estimated from receipts or bank statements.
                2. A total budget for each feast this year agreed with whoever shares the cost.
                3. The budget split into centrepiece, sides, sweets, drinks and extras.
                4. Actual spending recorded against each line after the feast.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A written budget per feast, split into at least four lines, with actual spending recorded beside it after the event."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Look through last year's receipts and statements for feast spending"
                - "Agree a total figure for each feast with whoever shares the cost"
                - "Split the total into centrepiece, sides, sweets and drinks"
                - "Record what was actually spent within a week of the feast"
            - name: Guest dietary needs and allergy list for the feast
              description: |-
                ## Purpose
                Discovering on the day that a cousin is now vegan, a guest has a nut allergy or an older relative cannot manage spice leaves the host improvising under pressure. Asking every household a month ahead, and writing the answers on one list beside the menu, means each need is met by a planned dish rather than a scraped-together plate.

                ## Milestones
                1. A short message sent to every guest household asking about allergies, intolerances and diets.
                2. Answers recorded on one list with the guest's name beside each need.
                3. Each serious allergy matched to dishes that are safe for that guest.
                4. Labels or a spoken plan ready so guests know which dishes suit them.

                ## Notes
                For a severe allergy, ask the guest or their parent what they need from you rather than guessing, and keep the packaging of every bought item until the meal is over.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A dietary list covering every guest household is attached to the menu, with each serious allergy matched to safe dishes."
                cadence: one-shot
                effort_hours_estimate: "1"
              tasks:
                - "Ask the agent to draft a friendly message asking guests about dietary needs"
                - "Send the message to every guest household a month ahead"
                - "Write each answer on one list beside the draft menu"
                - "Ask returning guests whether their needs have changed @recurring(yearly)"
            - name: Oven, fridge and table space plan for feast day
              description: |-
                ## Purpose
                A six-kilo turkey fills most domestic ovens on its own, a whole leg of lamb needs the biggest tin you own, and the fridge is already full before the feast shopping arrives. Measuring the oven, the fridge and the table against this year's menu shows what has to be cooked early, what can wait in a cool box and where twelve people will actually sit.

                ## Milestones
                1. Oven interior and largest roasting tin measured, with what fits together on each shelf noted.
                2. Fridge space for feast week planned, with a cool box and ice packs ready for overflow.
                3. Seating for the expected guest count worked out, including borrowed chairs or a second table.
                4. A list of dishes that must be cooked before the centrepiece goes in.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A written space plan shows which dishes share the oven, where overflow is chilled and where every expected guest sits."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Measure the inside of the oven and the largest roasting tin"
                - "Check that the centrepiece you plan to buy fits the tin and the oven"
                - "Plan fridge shelves for feast week and a cool box for overflow"
                - "Count seats and decide where extra chairs or a second table will come from"
            - name: Core menu for your main festival
              description: |-
                ## Purpose
                Every family has dishes that make the day feel right, and others cooked out of habit and left half eaten. Writing the core menu, the dishes that must appear, plus a short list of optional extras, gives you a fixed starting point each year and stops the menu growing by two dishes every time someone visits.

                ## Milestones
                1. Household members asked which three dishes the feast would feel wrong without.
                2. A core menu of centrepiece, sides, sweet and drinks written on one page.
                3. Optional extras listed separately with a note on who wants them.
                4. The menu checked against the dietary list and the oven space plan.
              priority: high
              deadlineOffsetDays: 45
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A one-page core menu for the main festival, checked against the dietary list and oven plan, is agreed by the household."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Ask each household member for the three dishes they would miss most"
                - "Write the core menu on one page with centrepiece, sides, sweet and drinks"
                - "List the optional extras separately"
                - "Check the menu against the dietary list and oven space plan"
            - name: Centrepiece and side quantities by guest count
              description: |-
                ## Purpose
                Hosts almost always over-cater at festivals, and the usual result is a fridge of leftovers nobody wants by the third day. A simple sheet of amounts per person for the bird or joint, rice or potatoes, vegetables and sweets, with a note on how many leftover meals you actually want, lets you buy the right amounts for six or for twenty.

                ## Milestones
                1. Typical per-person amounts for your centrepiece, starch, vegetables and sweets written down from reliable recipes.
                2. Bone-in and boneless weights distinguished for the meat or bird.
                3. A planned number of leftover meals added on purpose.
                4. The sheet tested against one real feast and corrected afterwards.

                ## Notes
                Many cooks allow roughly half a kilo of whole bird per adult, but check against your own recipes and your family's appetite.
              priority: medium
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A quantities sheet covering centrepiece, starch, vegetables and sweets per person has been used for one feast and corrected afterwards."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Write the per-person amount for your centrepiece from two trusted recipes"
                - "Add per-person amounts for rice or potatoes, vegetables and sweets"
                - "Decide how many leftover meals you want and add them on purpose"
                - "Correct the sheet with what was actually eaten after the feast"
            - name: Six-week feast countdown checklist
              description: |-
                ## Purpose
                Most feast stress comes from jobs that needed doing weeks earlier: ordering the bird, booking a delivery slot, making the cake or the sweets, starting the thaw. A countdown that runs from six weeks out to the night before puts each job in its week, so the final two days are about cooking rather than chasing.

                ## Milestones
                1. Jobs listed for six weeks, four weeks, two weeks, one week and the final three days.
                2. Orders, delivery slots and make-ahead cooking placed in the right week.
                3. Shopping split into long-life, chilled and last-day fresh lists.
                4. The checklist used for one feast and adjusted for anything that came too late.

                ## Notes
                Start from the **Operational checklist** template.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A countdown checklist running from six weeks to the night before has been followed for one feast and updated afterwards."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Create the countdown from the operational checklist template"
                - "Place every order and booking in the week it must happen"
                - "Split the shopping into long-life, chilled and fresh lists"
                - "Mark which jobs ran late and move them earlier for next time"
            - name: Feast-day hour-by-hour cooking schedule
              description: |-
                ## Purpose
                On the day, the clock is set by one fixed time: when the food reaches the table. Working backwards from that time, with resting time for the meat, oven temperature changes and the dishes that share a shelf, produces a schedule anyone in the kitchen can follow and shows any clash before it happens.

                ## Milestones
                1. Serving time fixed and every dish's cooking and resting time listed.
                2. A timeline worked backwards from serving, with oven temperature changes marked.
                3. Clashes for the oven, the hob or the cook's hands spotted and solved on paper.
                4. The schedule printed and stuck on a cupboard door for feast day.
              priority: high
              deadlineOffsetDays: 60
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A printed timeline worked back from a fixed serving time, with no unresolved oven or hob clashes, is used on feast day."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Fix the serving time and list each dish's cooking and resting time"
                - "Ask the agent to draft a backwards timeline from the dish list"
                - "Mark every oven temperature change and shared shelf"
                - "Print the schedule and stick it where the cook can see it"
            - name: Feast jobs rota for family and guests
              description: |-
                ## Purpose
                The host who peels, cooks, serves and washes up alone usually misses the meal they made. A short rota naming who sets the table, peels the vegetables, keeps drinks topped up, serves the sweet and clears, agreed before guests arrive, shares the work and gives helpful relatives a job instead of advice.

                ## Milestones
                1. Every non-cooking job on feast day listed, from laying the table to taking out the bins.
                2. A name beside each job, including children old enough to help.
                3. The rota shared with helpers a few days before.
                4. Washing up given to people who did not cook.

                ## Notes
                Start from the **Household chores** template.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A feast-day rota with a named person for every job, shared in advance, leaves the cook free to sit down for the meal."
                cadence: one-shot
                effort_hours_estimate: "1"
              tasks:
                - "List every feast-day job that is not cooking"
                - "Put a name beside each job, children included"
                - "Share the rota with helpers three days before"
                - "Assign the washing up to people who did not cook"
            - name: Quarterly festival look-ahead
              description: |-
                ## Purpose
                Festivals cluster: Diwali and Thanksgiving can fall weeks apart, Eid can land in the same month as a birthday, and Christmas and Lunar New Year sit close together for families who keep both. A quarterly look at the next three months shows which feasts are coming, who is hosting and when each countdown needs to start.

                ## Milestones
                1. A quarterly review slot in the calendar.
                2. Each review listing the feasts in the next three months with host and guest count.
                3. Countdown start dates confirmed for each feast you cook.
                4. Four reviews completed in a year.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Four quarterly look-aheads completed in a year, each naming the coming feasts, hosts and countdown start dates."
                cadence: rolling
              tasks:
                - "Put a recurring look-ahead slot in your calendar"
                - "List the feasts in the next three months with host and guest count @recurring(quarterly)"
                - "Confirm the start date of each countdown"
            - name: Monthly feast fund
              description: |-
                ## Purpose
                Paying for a big feast in one go can equal two or three weeks of normal food shopping, landing in a month that already carries presents, travel or new clothes. Putting a small fixed amount aside each month, sized from the feast budget, means the food is paid for before the season starts.

                ## Milestones
                1. The yearly total for all feasts taken from the feast budget.
                2. A monthly amount worked out and a separate pot or account chosen.
                3. A standing transfer set up for a day just after payday.
                4. The fund covering the main feast without using credit.

                ## Notes
                Start from the **Savings goal** template.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A separate feast fund grows by a fixed monthly amount and covers the main feast's food without borrowing."
                cadence: rolling
              tasks:
                - "Add up the budgets for every feast you cook in a year"
                - "Divide the total by twelve and choose where to keep it"
                - "Move the monthly amount into the feast fund @recurring(monthly:24)"
            - name: Festive pre-order calendar for butcher, bakery and sweet shop
              description: |-
                ## Purpose
                Fresh turkeys, Eid lamb, good mithai and festive delivery slots sell out weeks ahead, often before the feast feels close. Keeping one list of what to pre-order, from whom and by which date, and placing those orders on time each year, removes the most common last-minute scramble.

                ## Milestones
                1. Every item that needs pre-ordering listed with supplier and order deadline.
                2. Supermarket delivery or click-and-collect slot release dates noted.
                3. Orders placed and confirmations saved in one place.
                4. Collection times entered in the calendar and the countdown.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every pre-order for the main feast is placed before its supplier's deadline, with confirmations saved and collection times in the calendar."
                cadence: cyclic
              tasks:
                - "List each item that needs ordering ahead, with supplier and deadline"
                - "Note when your supermarket releases festive delivery slots"
                - "Place the centrepiece and bakery orders for the main feast @recurring(yearly)"
                - "Save every order confirmation in one folder"
            - name: Make-ahead freezer plan for festive components
              description: |-
                ## Purpose
                Gravy, stuffing, pastry, samosas, dumplings, sauces and many sweets freeze well, and cooking them a month ahead takes hours off the final two days. Choosing which components to make early, labelling them and planning when each comes out to defrost spreads the work across quiet weekends.

                ## Milestones
                1. Components that freeze well picked from the core menu.
                2. Two make-ahead cooking sessions booked in the month before the feast.
                3. Every container labelled with dish, date and defrosting instructions.
                4. Defrost times added to the countdown checklist.

                ## Notes
                Defrost in the fridge, not on the worktop, and clear the freezer space a week before the first session.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "At least four menu components are frozen ahead, labelled and defrosted on schedule for the main feast."
                cadence: cyclic
              tasks:
                - "Mark which dishes on the core menu freeze well"
                - "Book two make-ahead cooking sessions in the month before"
                - "Cook and freeze the make-ahead components a month before the feast @recurring(yearly)"
                - "Add each item's defrost time to the countdown"
            - name: Festive pantry stock-up list
              description: |-
                ## Purpose
                Feasts lean on ingredients you buy once a year: whole spices, saffron, dried fruit, glace cherries, ghee, rosewater, stuffing herbs, special flours. Keeping a standing list, checking stock against it well before the season and buying early avoids shops that have run out of the one thing the recipe needs.

                ## Milestones
                1. A pantry list built from every recipe on the core menu.
                2. Stock checked and stale spices or flour thrown away.
                3. Long-life ingredients bought at least three weeks before the feast.
                4. The list corrected after the feast with anything forgotten.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A standing festive pantry list exists and stock is checked and topped up at least three weeks before each main feast."
                cadence: cyclic
              tasks:
                - "List every long-life ingredient the core menu needs"
                - "Throw out spices and flours past their best"
                - "Check festive pantry stock against the list @recurring(yearly)"
                - "Add any forgotten ingredient to the list after the feast"
            - name: Feast equipment check before the season
              description: |-
                ## Purpose
                Roasting tins with a hole, a probe thermometer with a dead battery, the biryani pot lent to a neighbour last year: equipment problems tend to surface on the morning itself. A check a month before the season, of tins, large pans, thermometer, carving knife, serving dishes, foil and containers, leaves time to fix or borrow.

                ## Milestones
                1. Feast equipment listed, from roasting tin and probe thermometer to large pans and serving platters.
                2. Each item checked for damage, fit and working batteries.
                3. Missing or broken items replaced, borrowed or hired.
                4. Foil, baking paper and leftover containers stocked.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "All feast equipment is checked a month before the season and every gap is fixed, bought or borrowed before the countdown starts."
                cadence: cyclic
              tasks:
                - "List the equipment the core menu depends on"
                - "Test the probe thermometer and replace its battery"
                - "Check feast equipment and borrow or replace what is missing @recurring(yearly)"
                - "Stock foil, baking paper and leftover containers"
            - name: Leftovers plan for the days after the feast
              description: |-
                ## Purpose
                Trays of meat, rice and sides left after a big feast need cooling, boxing and eating within days, and leftovers sitting out through a long afternoon are a common cause of festive food poisoning. Planning how leftovers are chilled, packed, labelled and turned into two or three named meals keeps them safe and stops good food going in the bin.

                ## Milestones
                1. A rule agreed for getting leftovers into the fridge within two hours of serving.
                2. Enough containers and labels ready before the feast.
                3. Two or three leftover meals planned for the following days.
                4. Anything not eaten within your food safety agency's time limit frozen or thrown away.

                ## Notes
                Cooked rice is a particular risk if it cools slowly at room temperature: spread it out, chill it quickly and reheat it only once.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Leftovers from the main feast are chilled within two hours, labelled, and used in planned meals or frozen within the safe time limit."
                cadence: cyclic
              tasks:
                - "Look up your food safety agency's guidance on storing leftovers"
                - "Buy enough containers and labels before the feast"
                - "Plan two leftover meals for the days after"
                - "Give one helper the job of chilling leftovers straight after the meal"
            - name: Scaled feast recipe cards
              description: |-
                ## Purpose
                Recipes are written for four or six, and multiplying by three on the day leads to mistakes with salt, spice, liquids and cooking times, which do not scale in a straight line. Writing a card for each core dish at the sizes you cook for, such as six, twelve and twenty, with the pan and cooking time that go with each, makes the feast repeatable.

                ## Milestones
                1. A card for each core dish with quantities for three guest counts.
                2. Pan sizes and cooking times noted for each size.
                3. Salt, spice and liquid amounts marked as adjust to taste when scaled up.
                4. Cards kept together where they can be found next year.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Every dish on the core menu has a card with quantities, pan size and timing for three guest counts, kept in one place."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Choose the three guest counts you cook for most often"
                - "Ask the agent to scale each core recipe to those three sizes"
                - "Write the pan size and cooking time for each size"
                - "Mark salt, spice and liquids to be adjusted by taste"
            - name: Post-feast debrief and notes file
              description: |-
                ## Purpose
                By next year nobody remembers that the potatoes needed another twenty minutes, that half the dessert was left or that the bird was too big. Ten minutes of notes within a few days of each feast, kept in one file, turn this year's mistakes into next year's countdown.

                ## Milestones
                1. A notes file with a page per feast.
                2. Each debrief covering timings, quantities, spending and what guests loved or left.
                3. Three changes for next year written at the end of each debrief.
                4. Last year's notes reread before the countdown starts.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A debrief with three changes for next year is written within a week of each feast and reread before the next countdown."
                cadence: cyclic
              tasks:
                - "Create a notes file with a page for each feast"
                - "Write the debrief within a week of each feast"
                - "End each debrief with three changes for next year"
                - "Reread last year's notes before the countdown starts @recurring(yearly)"
            - name: Roasting and resting a whole turkey or large bird
              description: |-
                ## Purpose
                A large bird is the dish most likely to come out dry, undercooked or late, and it is often the one cooked least often. Learning to thaw it in time, cook it to a probe temperature rather than a clock, and rest it under foil long enough to free the oven for everything else makes the centrepiece reliable.

                ## Milestones
                1. Thawing time for your bird's weight worked out from your food safety agency's guidance.
                2. A probe thermometer checked and the recommended internal temperature written down.
                3. One practice roast of a chicken or crown cooked by the probe method.
                4. A resting time of at least thirty minutes built into the feast schedule.

                ## Notes
                Many cooks split the bird into crown and legs, or spatchcock it, so it cooks faster and more evenly. Check the thickest part of the thigh as well as the breast.
              priority: high
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A practice roast is cooked to a probe temperature and rested, and a thawing plan for the feast bird is written into the countdown."
                cadence: phased
                effort_hours_estimate: "5"
              tasks:
                - "Look up the thawing time per kilo from your food safety agency"
                - "Write the recommended internal temperature on the schedule"
                - "Roast a chicken using only the probe thermometer to judge doneness"
                - "Add the thaw start date and resting time to the countdown"
            - name: Make-ahead gravy, sauces and festive condiments
              description: |-
                ## Purpose
                Gravy made in the roasting tin at the last minute is the classic bottleneck while everything else goes cold. Learning a make-ahead gravy from roasted wings or bones, plus the sauces and chutneys your feast needs, such as cranberry sauce, bread sauce, mint sauce or tamarind chutney, moves that work weeks earlier.

                ## Milestones
                1. A make-ahead gravy base cooked and frozen.
                2. Each sauce or chutney on the core menu made once in a practice batch.
                3. Fridge or freezer keeping times noted for each.
                4. Only reheating and finishing left for feast day.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A frozen gravy base and every sauce on the core menu are made ahead and need only reheating on feast day."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Roast wings or bones and make a gravy base to freeze"
                - "Make a practice batch of each sauce on the core menu"
                - "Note how long each keeps in the fridge or freezer"
                - "Add finishing the gravy with the roasting juices to the schedule"
            - name: Roast potatoes and vegetables for a crowd in one oven
              description: |-
                ## Purpose
                Crisp roast potatoes, parsnips and trays of vegetables for twelve need the oven at full heat exactly when the bird or joint is resting. Learning to parboil and rough up potatoes the day before, use hot fat and the hob for some vegetables, and load the oven in the right order produces sides that arrive hot together.

                ## Milestones
                1. Parboiled potatoes chilled the day before in a practice run.
                2. Oven order planned so the potatoes go in as the centrepiece comes out to rest.
                3. At least two vegetables moved to the hob or a steamer to free shelf space.
                4. A practice tray for eight cooked and timed.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A timed practice run produces roast potatoes and two vegetable sides for eight, hot at the same moment, with the method written down."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Parboil and chill a tray of potatoes the day before a practice run"
                - "Decide which vegetables move to the hob or steamer"
                - "Cook roast potatoes for eight and time each stage"
                - "Write the timings into the feast schedule"
            - name: Slow-roast lamb shoulder or leg for Eid
              description: |-
                ## Purpose
                Lamb is at the heart of many Eid tables, often as a whole leg or shoulder slow-roasted with spices or cooked as a raan, and it is forgiving if you give it time. Learning a marinate-the-day-before, low-oven method that needs little attention leaves the hob free for rice, curries and sweets.

                ## Milestones
                1. A tested marinade with quantities for one leg or shoulder.
                2. Marinating time and slow-roast time worked out for your joint's weight.
                3. One practice roast cooked before the festival.
                4. Carving or pulling method and serving platter chosen.

                ## Notes
                Order the lamb early from a butcher you trust, because supply tightens in the days before Eid al-Adha.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A practice lamb leg or shoulder has been slow-roasted with a written marinade, timing and serving method ready for Eid."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Choose a slow-roast lamb recipe and write the marinade quantities"
                - "Buy a leg or shoulder for a practice roast"
                - "Marinate overnight and cook it low and slow, noting the timing"
                - "Decide whether to carve or pull it and pick the platter"
            - name: Large-pot biryani for twenty
              description: |-
                ## Purpose
                Biryani for twenty is a different dish from biryani for four: the rice to meat ratio, the size of the pot, the seal on the lid and the time on dum all change. Practising the layered, sealed method at scale, and writing down your own ratios, gives you a centrepiece for Eid or a Diwali gathering that is fluffy rather than mushy.

                ## Milestones
                1. A large heavy pot with a tight lid sourced or borrowed.
                2. Rice, meat or vegetable, and water ratios written for twenty portions.
                3. One practice biryani cooked at half scale or more.
                4. Timing for soaking, par-boiling, layering and dum added to the schedule.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A biryani for at least ten has been cooked with written ratios and timings, ready to scale to twenty for the feast."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Borrow or buy a heavy pot that holds twenty portions"
                - "Write your rice, meat and water ratios for twenty"
                - "Cook a practice biryani for ten and note the dum time"
                - "Add soaking, par-boiling and layering times to the schedule"
            - name: Diwali sweets and savoury snacks at home
              description: |-
                ## Purpose
                Diwali brings boxes of sweets and savoury snacks shared with family, friends and neighbours, and making even two or three of them at home is a skill worth learning before the week itself. Practising one milk-based sweet, one gram flour sweet and one fried or baked savoury, with keeping times noted, lets you plan what to make and what to buy.

                ## Milestones
                1. Three recipes chosen: a milk-based sweet, a gram flour sweet and a savoury snack.
                2. Each made once in a practice batch with the yield counted.
                3. Keeping time noted so they can be made several days ahead.
                4. A decision on which to make and which to buy this year.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Three Diwali recipes have been practised, with yields and keeping times written down and a make or buy decision recorded."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Choose one milk sweet, one gram flour sweet and one savoury snack"
                - "Make a practice batch of each and count the pieces"
                - "Note how many days each keeps in an airtight tin"
                - "Decide which to make for Diwali and which to buy"
            - name: Lunar New Year dumplings as a family production line
              description: |-
                ## Purpose
                Making dumplings together on New Year's Eve is part of the celebration in many families, and a well-organised table can fold a hundred in an hour. Learning a filling that holds together, the right wrapper and two simple folds, then setting up a production line, turns it into something children and grandparents can do side by side.

                ## Milestones
                1. A filling recipe tested and the wrapper chosen, home-made or bought.
                2. Two folds learned well enough to teach.
                3. A table set up with stations for filling, folding and trays.
                4. Extra dumplings frozen on trays for the days after.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A practice session produces at least fifty dumplings in two folds, and the production line layout is written down for New Year's Eve."
                cadence: phased
                effort_hours_estimate: "5"
              tasks:
                - "Test a filling recipe and decide on bought or home-made wrappers"
                - "Learn two folds from a video and practise ten of each"
                - "Set up a folding table with stations for filling, folding and trays"
                - "Freeze extra dumplings on trays before bagging them"
            - name: Carving and serving the centrepiece
              description: |-
                ## Purpose
                Carving in front of guests looks impressive and goes wrong easily: a blunt knife, the wrong board, slices too thick, food going cold. Learning to carve your bird or joint in the kitchen first, then presenting it on a warm platter, gets everyone served hot within ten minutes.

                ## Milestones
                1. Carving knife sharpened and a board with a juice groove ready.
                2. Carving method for your centrepiece learned and practised once.
                3. Warm plates and a serving platter planned.
                4. Everyone served within ten minutes of the centrepiece finishing its rest.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "The centrepiece is carved and every guest served within ten minutes, using a method practised beforehand."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Sharpen the carving knife or have it sharpened"
                - "Watch a carving guide for your bird or joint"
                - "Practise carving on an ordinary weekend roast"
                - "Warm the plates and platter while the meat rests"
            - name: Choosing between a whole bird, crown or joint
              description: |-
                ## Purpose
                Whole birds look the part but need the biggest oven and the most skill, while a crown, a boned and rolled joint or a leg of lamb cooks faster and carves more easily. Comparing options on cost, oven space, cooking time and what the family expects lets you pick deliberately rather than buying what you bought last year.

                ## Milestones
                1. Three centrepiece options listed with weight, price and cooking time.
                2. Each option checked against the oven space plan.
                3. The household's expectations heard, especially from whoever carves.
                4. A choice made and the order placed with its supplier.

                ## Notes
                Start from the **Purchase decision** template.
              priority: medium
              deadlineOffsetDays: 45
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A centrepiece is chosen from three compared options, checked against oven space, and ordered before the supplier's deadline."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "List three centrepiece options with weight, price and cooking time"
                - "Check each option against your oven space plan"
                - "Ask the household what they expect to see on the table"
                - "Record your choice and place the order"
            - name: Cooking from scratch versus buying in components
              description: |-
                ## Purpose
                Cooks who make everything from scratch often spend the feast exhausted, while the guests would never have noticed bought pastry, a ready-made pudding or mithai from a good shop. Deciding dish by dish what is worth your time, with a simple score for taste difference, cost and effort, frees hours for the dishes people remember.

                ## Milestones
                1. Every dish on the core menu scored for taste difference, cost and hours.
                2. Three dishes chosen to buy ready-made or part-made.
                3. The bought items added to the pre-order list.
                4. Guests' verdict on the bought items noted in the debrief.
              priority: medium
              deadlineOffsetDays: 60
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "At least three dishes are switched to bought or part-made after a written scoring, freeing hours shown in the schedule."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Score every core dish for taste difference, cost and hours"
                - "Pick three dishes to buy in this year"
                - "Add the bought items to the pre-order list"
                - "Note what guests thought of them in the debrief"
            - name: Trimming the feast menu to dishes people eat
              description: |-
                ## Purpose
                Menus grow by accretion: each year someone adds a dish and nothing is ever dropped, until there are four kinds of potato and twelve sides. Looking at what came back to the kitchen untouched, and cutting two dishes, saves money, oven space and a morning of work without anyone feeling the loss.

                ## Milestones
                1. Last year's untouched or barely eaten dishes listed from the debrief.
                2. Two dishes chosen to drop or merge.
                3. The change explained to whoever loves those dishes.
                4. A shorter menu cooked and the verdict recorded.
              priority: low
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "Two dishes are removed from the core menu based on last year's leftovers, and the shorter menu is cooked and reviewed."
                cadence: one-shot
                effort_hours_estimate: "1"
              tasks:
                - "List the dishes that came back mostly uneaten last year"
                - "Choose two to drop or merge into another dish"
                - "Tell the people who will miss them before the feast"
                - "Record in the debrief whether anyone noticed"
            - name: Vegetarian centrepiece beside the main
              description: |-
                ## Purpose
                When a growing number of guests do not eat meat, a plate of side dishes is not a feast. Choosing and practising a vegetarian or vegan main that is festive in its own right, such as a stuffed squash, a nut roast, a paneer dish or a mushroom Wellington, and planning its oven space gives everyone a centrepiece.

                ## Milestones
                1. Guests who need a meat-free main counted from the dietary list.
                2. Two candidate dishes cooked and tasted.
                3. One chosen, with its oven time fitted into the schedule.
                4. Shared sides such as gravy and stuffing confirmed meat-free too.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A tested vegetarian or vegan main is on the menu with its own oven slot, and the shared sides are confirmed meat-free."
                cadence: phased
                effort_hours_estimate: "5"
              tasks:
                - "Count the guests who need a meat-free main"
                - "Cook two candidate dishes and taste them side by side"
                - "Fit the chosen dish into the oven schedule"
                - "Make a vegetarian gravy so the sides suit everyone"
            - name: Assigned-dish potluck for the extended family feast
              description: |-
                ## Purpose
                Big family feasts work better when the host provides the centrepiece and others bring named dishes, rather than vague offers to bring something. Assigning specific dishes by household, with quantities, arrival times and reheating needs, shares the cost and the effort without ending up with five desserts.

                ## Milestones
                1. The menu split into host dishes and dishes to assign.
                2. Each guest household given a named dish with a quantity.
                3. Arrival times and reheating needs collected so oven space is planned.
                4. Serving dishes and labels ready for each brought dish.
              priority: medium
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "Every brought dish is assigned to a named household with a quantity and arrival time, and no course is duplicated."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Split the menu into dishes you cook and dishes to assign"
                - "Message each household with their dish and quantity"
                - "Ask who needs oven or hob time on arrival"
                - "Label a serving dish for each dish a guest is bringing"
            - name: Extra oven and hob capacity decision
              description: |-
                ## Purpose
                One domestic oven rarely handles a bird, roast potatoes, a vegetarian main and a pudding at once, and the fix is usually cheaper than people think. Comparing options such as a countertop oven, an electric roaster, an air fryer, a slow cooker, a neighbour's oven or part of the cooking on a barbecue gives a clear answer before the season.

                ## Milestones
                1. Oven clashes from the feast-day schedule listed.
                2. Three options compared on cost, space and what each could cook.
                3. A choice made and tested before the feast.
                4. The extra appliance or borrowed oven written into the schedule.

                ## Notes
                Check that the kitchen sockets and circuit can take an extra appliance running alongside the oven before relying on it.
              priority: medium
              deadlineOffsetDays: 90
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "An extra cooking option is chosen, tested once and written into the feast schedule to remove every oven clash."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "List each oven clash in the current schedule"
                - "Compare three extra cooking options on cost and space"
                - "Test the chosen option with one feast dish"
                - "Write the extra appliance into the feast schedule"
            - name: Christmas dinner from Advent to the table
              description: |-
                ## Purpose
                Christmas dinner piles the year's biggest meal onto a day with presents, children awake since dawn and guests arriving at different times. Running it as a season, with the order placed in November, the pudding or cake made early, a Christmas Eve prep session and a fixed lunch time, makes the day itself mostly assembly.

                ## Milestones
                1. Centrepiece and delivery slot booked by mid November.
                2. Pudding, cake or mince pies made or bought in good time.
                3. A Christmas Eve prep session covering vegetables, stuffing and the table.
                4. Lunch served within half an hour of the planned time.
              priority: medium
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "Christmas dinner is served within thirty minutes of the planned time, with the debrief written by the new year."
                cadence: cyclic
              tasks:
                - "Start the Christmas countdown in early November @recurring(yearly)"
                - "Decide whether to make or buy the pudding or cake"
                - "Plan a Christmas Eve prep session with helpers"
                - "Fix the lunch time and tell every guest"
            - name: Thanksgiving dinner week plan
              description: |-
                ## Purpose
                Thanksgiving falls on a weekday, which often means a working day just before it and a frozen turkey that needs to start thawing the weekend ahead. Planning the week, with pies two days ahead, sides prepped the evening before and the bird timed for an afternoon meal, keeps the day itself calm enough to enjoy.

                ## Milestones
                1. Turkey bought and its thaw start date in the calendar.
                2. Pies and cranberry sauce made two days ahead.
                3. Sides prepped the evening before.
                4. Dinner served at the planned time with every side hot.
              priority: medium
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "Thanksgiving dinner is served at the planned time, with pies made two days ahead and the turkey thawed on schedule."
                cadence: cyclic
              tasks:
                - "Plan the Thanksgiving cooking week from the weekend before @recurring(yearly)"
                - "Mark the turkey's thaw start date in the calendar"
                - "Make the pies and cranberry sauce two days ahead"
                - "Prep the sides on the evening before"
            - name: Eid feast for the extended family
              description: |-
                ## Purpose
                Eid day often begins with prayers and visits and ends with a large lunch or dinner for relatives who arrive in waves, with the exact date sometimes confirmed only the night before. Planning dishes that hold well, such as slow-cooked lamb, biryani, kebabs and sheer khurma, and cooking most of them the day before keeps the host free to celebrate.

                ## Milestones
                1. Menu chosen from dishes that hold or reheat well.
                2. Meat ordered from your butcher with collection timed for the likely date.
                3. Most dishes cooked the day before and chilled.
                4. Food served to relatives as they arrive, without the host missing prayers or visits.
              priority: medium
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "The Eid feast is served with most dishes cooked the day before, and the host attends prayers and visits on the day."
                cadence: cyclic
              tasks:
                - "Plan the Eid menu around dishes that reheat well @recurring(yearly)"
                - "Order meat with collection timed for the likely date"
                - "Cook most dishes the day before and chill them"
                - "Set up a serving table relatives can help themselves from"
            - name: Diwali feast and sweet boxes for neighbours
              description: |-
                ## Purpose
                Diwali spreads over several days, with a main family meal, guests calling in and boxes of sweets to give away, so the cooking competes with cleaning, rangoli and lights. Planning the main meal, the snacks for visitors and the number of sweet boxes early lets you divide making and buying sensibly.

                ## Milestones
                1. Main Diwali meal menu written.
                2. Snacks for visitors made or bought and stored in tins.
                3. Number of sweet boxes counted and boxes bought.
                4. Boxes packed and delivered before the main day.
              priority: medium
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "The Diwali meal is served and every planned sweet box is packed and delivered before the main day."
                cadence: cyclic
              tasks:
                - "Write the Diwali menu and snack list a month ahead @recurring(yearly)"
                - "Count the families and neighbours who will get a sweet box"
                - "Buy boxes and pack them two days before"
                - "Store the visitor snacks in airtight tins"
            - name: Lunar New Year reunion dinner
              description: |-
                ## Purpose
                The reunion dinner on New Year's Eve gathers the generations around dishes chosen for their meaning: whole fish for abundance, dumplings or spring rolls for wealth, long noodles for long life. Planning which symbolic dishes to cook, when to shop before markets close for the holiday and who cooks what keeps the meal true to the family's tradition.

                ## Milestones
                1. Symbolic dishes for the dinner chosen with the older generation.
                2. Shopping done before markets and shops close for the holiday.
                3. Cooking divided between households or family members.
                4. Dinner served with some fish deliberately left over, as many families do.
              priority: medium
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "The reunion dinner includes the symbolic dishes the family chose, with shopping finished before shops close for the holiday."
                cadence: cyclic
              tasks:
                - "Agree the symbolic dishes with the older generation @recurring(yearly)"
                - "Check when local shops and markets close for the holiday"
                - "Divide the dishes between family members"
                - "Buy the whole fish the day before the dinner"
            - name: Easter Sunday lunch for the family
              description: |-
                ## Purpose
                Easter lunch often means roast lamb or ham, spring vegetables and a cake or bake, on a long weekend when shops keep holiday hours. Planning around the closures, preparing on Saturday and putting church, visits or the egg hunt into the timeline means the roast is not the thing that runs late.

                ## Milestones
                1. Shop opening hours over the long weekend checked.
                2. Lamb or ham bought and any cake or bake made by Saturday.
                3. Vegetables prepped on Saturday evening.
                4. Lunch time fixed around church, visits or the egg hunt.
              priority: low
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "Easter lunch is served at the agreed time, with shopping done before the holiday closures and prep finished on Saturday."
                cadence: cyclic
              tasks:
                - "Check shop opening hours over the Easter weekend @recurring(yearly)"
                - "Buy the lamb or ham and make the bake by Saturday"
                - "Prep the vegetables on Saturday evening"
                - "Fix lunch time around church, visits or the egg hunt"
            - name: Passover Seder meal cooking plan
              description: |-
                ## Purpose
                Seder meals come after a long reading at the table, so the food must hold well and the cook cannot be in the kitchen for the first part of the evening. Planning a menu of dishes that wait happily, such as soup with matzo balls, braised brisket or chicken, and making most of it a day or two ahead keeps the host at the table.

                ## Milestones
                1. Seder plate items and the meal menu listed separately.
                2. Dishes chosen that hold or reheat without spoiling.
                3. Soup, main and desserts made one or two days ahead.
                4. Host seated for the whole reading with the meal ready to serve.

                ## Notes
                Follow your own household's rules for Passover ingredients and kitchen preparation. This plan covers menu and timing only.
              priority: low
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "The Seder meal is served from dishes made ahead, with the host seated for the whole reading."
                cadence: cyclic
              tasks:
                - "List the Seder plate items and the meal menu separately @recurring(yearly)"
                - "Choose dishes that hold or reheat well"
                - "Make the soup and the braise a day or two ahead"
                - "Plan how hot dishes reach the table after the reading"
            - name: First year hosting the family feast
              description: |-
                ## Purpose
                Taking over the family feast from a parent or grandparent is a rite of passage, and the pressure is less about cooking than about meeting expectations. Asking the previous host for their timings, shopping list and unwritten steps, then doing a smaller practice run, means the first year feels familiar to everyone at the table.

                ## Milestones
                1. The previous host interviewed about timings, quantities and must-have details.
                2. Their method written down for the three most important dishes.
                3. A practice run of the centrepiece cooked a few weeks before.
                4. The previous host given a role on the day that honours their experience.
              priority: medium
              deadlineOffsetDays: 120
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "The first hosted feast is served using the previous host's written method, after one practice run of the centrepiece."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "Ask the previous host to walk you through last year's feast"
                - "Write down their method for the three most important dishes"
                - "Cook a practice centrepiece a few weeks ahead"
                - "Give the previous host a role on the day"
            - name: Children's cooking jobs for the feast
              description: |-
                ## Purpose
                Children who help cook a feast are more likely to eat it and remember it, and the right jobs keep them busy while adults handle hot oil and sharp knives. Matching jobs to ages, from washing vegetables and rolling dough at four to peeling and decorating at eight and a whole simple dish at twelve, makes their part planned rather than an interruption.

                ## Milestones
                1. Two or three jobs chosen for each child by age.
                2. A child-height workspace and safe tools set up.
                3. A slot in the countdown for children to make their part ahead.
                4. Each child's contribution named at the table.
              priority: low
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "Each child has at least two age-matched feast jobs, done in a planned slot, with their contribution named at the table."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Choose two age-matched jobs for each child"
                - "Set up a stool or low table and child-safe tools"
                - "Book a slot before the feast for children to make their part"
                - "Write a place card naming each child's dish"
            - name: Feast day with a baby or toddler in the house
              description: |-
                ## Purpose
                Feast menus built around a long afternoon meal collide with naps, early tea times and a toddler who will not wait two hours for the roast. Planning the child's food, a quiet space and the meal time so the little one's routine and the feast fit together saves the parents from eating cold food in shifts.

                ## Milestones
                1. Meal time chosen around the youngest child's nap and eating times.
                2. A child plate from the feast dishes planned, following the food advice your child health service gives for their age.
                3. A quiet room or travel cot ready for naps.
                4. Adults taking turns so both parents eat a hot meal.
              priority: low
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "The feast time fits the youngest child's routine, a child plate is planned and both parents eat a hot meal."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Set the meal time around the youngest child's nap"
                - "Plan a child plate from the feast dishes suited to their age"
                - "Set up a quiet room or travel cot for naps"
                - "Agree turns so each adult eats while the food is hot"
            - name: Small feast for two or three
              description: |-
                ## Purpose
                Not every celebration is a crowd: couples, a single parent with one child, people far from family and older relatives living alone still deserve the feast. Scaling the centrepiece down to a crown, a duck, a lamb rack or a small biryani, and keeping the two or three sides that matter most, gives the occasion without a week of leftovers.

                ## Milestones
                1. A small-format centrepiece chosen.
                2. Menu cut to the two or three sides that matter most.
                3. Quantities scaled to two or three with one planned leftover meal.
                4. One festive touch kept, such as the table, a pudding or a call with family at mealtime.
              priority: low
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A small feast for two or three is cooked with a scaled centrepiece and no more than one leftover meal."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Choose a small centrepiece such as a crown, duck or lamb rack"
                - "Pick the two or three sides that matter most"
                - "Scale the quantities to two or three people"
                - "Choose one festive touch to keep from the full version"
            - name: Cooking iftar and the Eid feast while fasting
              description: |-
                ## Purpose
                Cooking through Ramadan means preparing food for hours without eating or drinking, then hosting iftar at sunset and an Eid feast at the end of the month. Spreading the cooking into the evening after iftar, freezing Eid components in the first two weeks and handing seasoning checks to someone not fasting keeps energy for the last ten nights and Eid itself.

                ## Milestones
                1. Iftar menus planned a week at a time around dishes that can be prepared the night before.
                2. Eid components cooked and frozen in the first two weeks of the month.
                3. Seasoning checks handed to someone not fasting, or done by weighing to a trusted recipe.
                4. Iftar hosting nights limited to a number the cook agrees.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Eid components are frozen by the middle of Ramadan, and iftar hosting nights stay within the number the cook agreed."
                cadence: phased
                effort_hours_estimate: "15"
              tasks:
                - "Plan this week's iftar menus around dishes prepared the night before"
                - "Cook and freeze Eid components in the first two weeks"
                - "Ask someone who is not fasting to check the seasoning"
                - "Agree how many iftar hosting nights the cook can manage"
            - name: Merging two families' feast traditions
              description: |-
                ## Purpose
                New couples and blended families often inherit two versions of the same feast, or two different festivals in one season, each with its must-have dishes. Writing both lists down, choosing a combined menu or an alternating-year plan, and agreeing it with both sides early, stops the dinner becoming a contest.

                ## Milestones
                1. Each family's must-have dishes and timings listed.
                2. A combined menu or an alternating-year plan drafted.
                3. The plan agreed between the couple before it is shared.
                4. Both families told the plan well before the season.
              priority: medium
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A combined menu or alternating-year plan is agreed by the couple and shared with both families before the season."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "List each family's must-have dishes and timings"
                - "Draft a combined menu or an alternating-year plan"
                - "Agree the plan as a couple first"
                - "Tell both families the plan before the season starts"
            - name: Simpler feast in a difficult year
              description: |-
                ## Purpose
                Illness, a bereavement, a new baby or a tight budget can make the usual feast feel impossible, and pressing on with the full menu often makes the day harder. Choosing a deliberately simpler version, with a few comforting dishes, more bought help, fewer guests or a meal at someone else's home, keeps the occasion without the strain.

                ## Milestones
                1. The household's energy, money and time for this year written down honestly.
                2. A short menu of three or four dishes chosen.
                3. Help accepted, whether a relative's dish, a bought component or another host.
                4. The simpler plan shared with family so expectations match.

                ## Notes
                In a year of loss, a place or a dish in memory of the person can matter more than the size of the meal.
              priority: low
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A written simpler plan of no more than four dishes, with help accepted, is shared with family before the feast."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Write down honestly what energy, money and time you have this year"
                - "Choose the three or four dishes that matter most"
                - "Say yes to one offer of help or one bought component"
                - "Tell the family about the simpler plan early"
            - name: Feast for thirty or more
              description: |-
                ## Purpose
                Community iftars, extended family Eid lunches, gatherings at a church or temple and big-family Christmases can reach thirty or forty people, beyond what any home kitchen does comfortably. Planning at this scale means hired equipment, chafing dishes, cooking spread across several kitchens, a hot holding plan and helpers with clear roles.

                ## Milestones
                1. Guest numbers confirmed by a cut-off date.
                2. Cooking divided across kitchens or helpers with written recipes and quantities.
                3. Chafing dishes, large pots, tables and cool boxes hired or borrowed.
                4. A food safety plan for cooling, transport and hot holding written and briefed.
                5. Service run so the last guest eats within an hour of the first.
              priority: medium
              frontmatter:
                mode: service
                output_kind: deliverable
                success_criteria: "A feast for thirty or more is served with every guest eating within an hour, using a written plan for cooking, transport and hot holding."
                cadence: phased
                effort_hours_estimate: "30"
              tasks:
                - "Set a cut-off date for confirmed guest numbers"
                - "Split the cooking across helpers with written quantities"
                - "Hire or borrow chafing dishes, large pots and cool boxes"
                - "Write a cooling, transport and hot holding plan and brief the helpers"
            - name: Multi-day festival cooking plan
              description: |-
                ## Purpose
                Some festivals are not one meal: the five days of Diwali, Christmas Eve to the day after Christmas, the days of Eid, or a fortnight of Lunar New Year visits. Planning food across the whole stretch, with one or two big cooks, leftovers turned into new meals and lighter days in between, avoids cooking all day every day of a holiday.

                ## Milestones
                1. Every meal across the festival period listed with who is eating.
                2. One or two big cooks scheduled, with other meals built from them.
                3. At least one lighter, no-cook or takeaway day planned.
                4. The plan used once and adjusted in the debrief.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A meal plan covers every day of the festival period, with no more than two big cooks and at least one lighter day."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "List every meal across the festival period and who is eating"
                - "Schedule one or two big cooks to feed several meals"
                - "Plan one lighter day with no cooking"
                - "Mark in the debrief which days worked and which dragged"
            - name: Personal feast playbook
              description: |-
                ## Purpose
                After a few years of countdowns, debriefs and recipe cards, the knowledge sits in scattered notes. Combining them into one playbook, with your menus, quantities, schedule, suppliers and lessons, means you could hand the feast to a son, daughter or friend, and it turns your own planning into an evening instead of a week.

                ## Milestones
                1. Core menu, recipe cards and quantity sheet gathered in one place.
                2. Countdown and feast-day schedule included.
                3. Supplier list with order deadlines added.
                4. A page of lessons distilled from past debriefs.
                5. The playbook updated after each main feast.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "One playbook holds the menu, quantities, schedule, suppliers and lessons, and has been updated after the latest main feast."
                cadence: cyclic
              tasks:
                - "Gather the menu, recipe cards and quantity sheet into one folder"
                - "Add the countdown and feast-day schedule"
                - "Ask the agent to summarise past debriefs into one page of lessons"
                - "Update the playbook after the main feast @recurring(yearly)"
---

# Holiday Feast Cooking

This area is for whoever cooks the big seasonal or religious feast of the year, whether that is Christmas, Eid, Thanksgiving, Diwali, Lunar New Year, Easter or a Seder, and for parents bringing children into the tradition. It starts with the foundations (festival dates, who hosts, a budget, dietary needs, oven space, a core menu, quantities, a countdown and a feast-day schedule), then the yearly machinery of pre-orders, make-ahead freezing, pantry and equipment checks and debriefs, the centrepiece and side-dish skills, decisions about what to cook and what to buy, the feasts themselves, versions for first-time hosts, families with young children, small households, fasting cooks and difficult years, and finally the specialist work of feeding thirty or planning a whole festival week.

What repeats is a quarterly festival look-ahead, a monthly feast fund, and a yearly round of guest questions, pre-orders, freezer cooking, pantry and equipment checks and a countdown start for each feast you keep. The Operational checklist, Household chores, Savings goal and Purchase decision templates pair with the projects that name them. Installing adds all 50 projects as active, so archive the ones that are not for you yet.
