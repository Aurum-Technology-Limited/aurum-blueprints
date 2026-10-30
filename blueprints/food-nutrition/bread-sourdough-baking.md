---
id: food-nutrition.bread-sourdough-baking
name: Bread & Sourdough Baking
description: "A scale, a lidded pot and a live starter, a weekly bake rhythm with a bake log, the fermentation, shaping and scoring skills behind a good loaf, and the specialist work of signature formulas, milling and selling."
category: personal
version: 1.0.0
tags: [food-nutrition, bread-sourdough-baking, everyone, creative, sourdough, yeasted-bread, starter, bake-log]
author: Aurum Technology
starter_structure:
  templates:
    - purchase-decision
    - metrics-log
    - habit-tracker
    - portfolio-piece
  pillars:
    - name: Food & Nutrition
      emoji: "🥗"
      description: "What gets eaten, and how it gets to the table: meal planning, shopping and batch cooking, dietary needs and goals, cooking skill as a lifelong craft, and the food rituals that hold a household together."
      pillarFrontmatter:
        review_cadence: monthly
      areas:
        - name: Bread & Sourdough Baking
          description: "Learning bread baking from simple loaves to sourdough starters, enriched doughs and shaping, with bake logs to improve each batch."
          projects:
            - name: Digital scale and lidded pot for home bread
              description: |-
                ## Purpose
                Bread recipes are written in grams for a reason: a cup of flour can vary by 30 grams depending on how it is scooped, enough to turn a workable dough into soup. A scale reading in single grams and a heavy lidded pot that traps steam are the two purchases that make home loaves look and taste like bakery ones.

                ## Milestones
                1. A scale chosen that weighs up to at least 5 kg in 1 gram steps.
                2. A decision made on whether a 0.1 gram pocket scale is needed for small amounts of yeast and salt.
                3. A cast iron or enamelled pot that holds a 1 kg loaf and fits your oven, with a lid knob rated for 250°C, bought or borrowed.
                4. Bannetons, lames and other extras deliberately left until after the first five bakes.

                ## Notes
                Start from the **Purchase decision** template. Many plastic lid knobs are rated only to around 200°C, so check before buying or swap the knob for a metal one.

                Before you start: this plan is general information to help you organise your own health. It is not medical advice and does not replace a doctor, nurse, pharmacist or other qualified professional. Check any change to treatment, medicine or diet with them first, and get urgent care if you feel unwell.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A gram-accurate scale and a lidded pot rated for at least 250°C are in the kitchen, with the choice recorded."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Check whether your current kitchen scale weighs in single grams"
                - "Measure the inside of your oven to see what pot diameter fits"
                - "Compare two or three lidded pots and check each knob's heat rating"
                - "Buy or borrow the scale and pot you chose"
            - name: Choosing your three core bread flours
              description: |-
                ## Purpose
                Flour labels range from plain and self-raising to strong, very strong, wholemeal, spelt and rye, and using a soft cake flour is the commonest reason a first loaf spreads flat. Settling on a strong white, a wholemeal and one character flour, and reading the protein figure on each bag, gives you a stable base so changes in your bread come from technique rather than a different bag every week.

                ## Milestones
                1. The protein figure of every flour already in the cupboard written down.
                2. A strong white bread flour of roughly 12 to 13 percent protein chosen as the everyday base.
                3. A wholemeal and one character flour such as rye or spelt chosen to blend in.
                4. A supplier found that sells your base flour in a bag size you will use within three months.

                ## Notes
                Protein figures and flour names vary by country and mill, so compare bags by the number on the nutrition panel rather than by the word on the front.
              priority: medium
              deadlineOffsetDays: 30
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "Three named flours, a base white plus a wholemeal and a character flour, are chosen with their protein figures and supplier written down."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Read and note the protein figure on every flour in the cupboard"
                - "Buy a bag of strong white bread flour from a mill or supermarket"
                - "Pick one wholemeal and one rye or spelt flour to try"
                - "Find where your base flour is sold in 5 kg or larger bags"
            - name: First plain yeasted white loaf
              description: |-
                ## Purpose
                Before sourdough, one plain loaf made with commercial yeast teaches what a properly kneaded dough feels like, how far it should rise and what a done loaf sounds like when you tap the base. It takes about four hours from mixing to cooling, and the result becomes the reference every later bake is compared with.

                ## Milestones
                1. A simple tin or free-form loaf of about 500 grams of flour mixed, kneaded and risen.
                2. The loaf baked until the base sounds hollow or a probe reads at least 93°C inside.
                3. The loaf cooled for at least an hour before slicing.
                4. Notes written on the dough's feel, the rise time and one thing to change.
              priority: high
              deadlineOffsetDays: 14
              frontmatter:
                mode: building
                output_kind: knowledge
                success_criteria: "One yeasted loaf has been baked, cooled and sliced, with rise time and three observations written down."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Choose one beginner white loaf recipe written in grams"
                - "Weigh out flour, water, salt and instant yeast the evening before"
                - "Mix, knead and bake the loaf, timing each stage"
                - "Cool the loaf fully, then slice it and write down three observations"
            - name: Bake log for every loaf
              description: |-
                ## Purpose
                Two loaves made from the same recipe can come out completely differently because the kitchen was four degrees colder or the starter was past its peak, and without notes the cause is guesswork. A one-line entry per bake, with flour mix, hydration, dough temperature, stage timings and a crumb photo, is the habit that separates improving bakers from repeating ones.

                ## Milestones
                1. A log with columns for date, formula, hydration, room and dough temperature, stage timings, bake and result.
                2. A folder for crust and crumb photos linked from each entry.
                3. The first three bakes entered, including the yeasted loaf.
                4. A simple score for crust, crumb, flavour and shape agreed with yourself.

                ## Notes
                Start from the **Metrics log** template. Keep it where floury hands can reach it, such as a notebook on the counter or a phone note, and tidy it up later.
              priority: high
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A bake log with temperature, timing and photo columns holds entries for at least three bakes."
                cadence: one-shot
                effort_hours_estimate: "1"
              tasks:
                - "Create a bake log from the metrics log template"
                - "Add columns for temperatures, timings and a crumb photo link"
                - "Enter your first loaf from memory and any notes"
                - "Decide on a one to five score for crust, crumb, flavour and shape"
            - name: Oven temperature check with a thermometer
              description: |-
                ## Purpose
                Domestic ovens often run 10 to 25 degrees away from the dial, and fan ovens dry a crust faster than most recipes assume. An inexpensive oven thermometer, read at three settings, tells you what to set the dial to, and a tray of bread slices shows where your loaves will bake evenly.

                ## Milestones
                1. An oven thermometer placed in the centre of the middle shelf.
                2. Actual temperatures recorded at dial settings of 200, 230 and 250°C after a full preheat.
                3. Hot spots found by toasting slices of bread laid across a tray.
                4. Corrected dial settings and the best shelf written inside a cupboard door.
              priority: medium
              deadlineOffsetDays: 14
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "The oven's real temperature at three dial settings and its most even shelf position are written down next to the oven."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Buy an oven thermometer that reads up to 300°C"
                - "Record the real temperature at three dial settings after 30 minutes of preheating"
                - "Lay slices of bread across a tray to find the hot spots"
                - "Write the corrected settings where you can see them while baking"
                - "Recheck the oven against the thermometer @recurring(yearly)"
            - name: Kitchen temperature and dough timing baseline
              description: |-
                ## Purpose
                Yeast and sourdough cultures speed up sharply as a kitchen warms, so a recipe written for a 24°C kitchen will overproof in summer and stall in a 17°C winter. Measuring your kitchen across a day, and learning to hit a target dough temperature by adjusting the water, lets you predict timings rather than chase them.

                ## Milestones
                1. Room temperature read in the morning, afternoon and night where dough usually rises.
                2. A probe thermometer used to read the temperature of a freshly mixed dough.
                3. The desired dough temperature method learned and used to set water temperature.
                4. A warm spot and a cool spot in the house identified for proofing.

                ## Notes
                Many sourdough recipes aim for a dough at 24 to 26°C after mixing. Use your recipe's figure where it gives one.
              priority: medium
              deadlineOffsetDays: 21
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "Kitchen temperatures at three times of day and a water temperature rule for hitting your target dough temperature are recorded in the bake log."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Put a thermometer where your dough usually rises and read it three times today"
                - "Buy or find a probe thermometer for dough and finished loaves"
                - "Work out the water temperature needed for your next dough"
                - "Note one warm and one cool proofing spot in the house"
            - name: Making a sourdough starter from scratch
              description: |-
                ## Purpose
                Starting a culture takes only flour and water fed daily until wild yeast and lactic bacteria take over, but the first fortnight includes a quiet spell that convinces many people theirs has died. Following one method with weights, a rubber band on the jar and a daily note gets you to a culture that reliably doubles within eight hours of a feed.

                ## Milestones
                1. A clean jar, a wholemeal or rye flour and a feeding ratio chosen.
                2. Daily feeds recorded with the height of the rise for at least 14 days.
                3. The quiet spell after the early bubbling recognised and fed through.
                4. The starter doubling within eight hours of a feed on three days in a row.

                ## Notes
                Pink or orange streaks mean throw it away and start again. A grey liquid layer on top is only a sign of hunger; pour it off and feed.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A starter in a labelled jar has doubled within eight hours of feeding on three consecutive days, with the daily feeds recorded."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Mix equal weights of wholemeal flour and water in a clean jar today"
                - "Mark the level with a rubber band after each feed"
                - "Feed and note the rise every day for two weeks"
                - "Test whether it doubles within eight hours on three days running"
            - name: Starter feeding schedule that fits your week
              description: |-
                ## Purpose
                Keeping a starter on the counter means feeding once or twice a day, which suits someone baking three times a week and wears out someone baking once. Deciding between a counter starter and a fridge starter, and the feed ratio for each, makes the starter work around your diary rather than the other way round.

                ## Milestones
                1. How often you will realistically bake written down, per week or per fortnight.
                2. Counter or fridge storage chosen to match that number.
                3. A feed ratio such as 1 part starter to 5 of flour and 5 of water timed to its peak.
                4. The steps for reviving it before a bake, and how many feeds it needs, written on the jar lid.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A written decision on counter or fridge storage, with a feed ratio and the hours to peak recorded."
                cadence: one-shot
                effort_hours_estimate: "1"
              tasks:
                - "Count how many bakes you have actually managed in the last month"
                - "Choose between keeping the starter on the counter or in the fridge"
                - "Try a 1 to 5 to 5 feed and time how long it takes to peak"
                - "Write the pre-bake revival steps on the jar lid"
            - name: First sourdough loaf on a simple schedule
              description: |-
                ## Purpose
                The first sourdough is where timings stretch over two days and every stage is unfamiliar, so it pays to choose a forgiving formula at around 70 percent hydration and a schedule with no step in the middle of the night. One finished loaf, even an imperfect one, proves your starter and your kitchen are up to it.

                ## Milestones
                1. One beginner sourdough formula chosen and its stages written against your next two days.
                2. A levain built from an active starter and used at its peak.
                3. Bulk fermentation ended on the dough's rise and feel rather than the clock.
                4. The loaf shaped, proofed overnight in the fridge and baked in the lidded pot.
                5. A bake log entry with a crumb photo completed.
              priority: high
              deadlineOffsetDays: 45
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "One sourdough loaf has been baked from your own starter and logged with timings and a crumb photo."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Pick a beginner sourdough formula at around 70 percent hydration"
                - "Write the schedule into your diary so no step falls overnight"
                - "Build the levain the evening before mixing"
                - "Bake, cool for two hours and log the result with a crumb photo"
            - name: Weekly sourdough bake rhythm
              description: |-
                ## Purpose
                Bread that happens only on a free weekend never improves, because the gaps are too long to remember what changed. A fixed weekly rhythm, levain on Friday night, mix and shape on Saturday, bake from the fridge on Sunday morning, keeps the household in bread and gives you around 50 practice bakes a year.

                ## Milestones
                1. A bake day and the stage times around it chosen to fit the household week.
                2. The rhythm kept for four weeks in a row.
                3. The number of loaves per bake set from what the household actually eats.
                4. The rhythm adjusted once after the first monthly log review.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "At least four consecutive weekly bakes are recorded in the bake log on the chosen day."
                cadence: rolling
              tasks:
                - "Choose the weekend day you will bake and write down the stage times"
                - "Build the levain for the weekend bake @recurring(weekly:fri)"
                - "Mix, fold and shape the weekly dough @recurring(weekly:sat)"
                - "Count how many loaves the household gets through in a week"
            - name: Fridge starter upkeep routine
              description: |-
                ## Purpose
                Kept in the fridge, a starter can go a week or more between feeds, but one that is never refreshed turns sour, sluggish and boozy, and a crusted jar rim grows mould. A fixed weekly feed and a monthly clean jar keep it strong enough that a bake never has to be postponed for a slow culture.

                ## Milestones
                1. A weekly feed day chosen that sits a few days before the bake day.
                2. A clean jar swapped in monthly, with the rim kept free of dried crust.
                3. A small reserve of 20 to 50 grams kept rather than an ever-growing tub.
                4. Four weekly feeds logged with the time to peak.

                ## Notes
                Start from the **Habit tracker** template. Keeping only a small amount of starter means less discard and cheaper feeds.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "The habit tracker shows a weekly starter feed for four weeks running and a jar change in the last month."
                cadence: rolling
              tasks:
                - "Choose a feed day three or four days before your bake day"
                - "Feed the fridge starter and note how far it rises @recurring(weekly:wed)"
                - "Move the starter into a clean jar @recurring(monthly:3)"
                - "Cut the amount you keep down to around 50 grams"
            - name: Monthly bake log review
              description: |-
                ## Purpose
                A log only pays off when someone reads it. Twenty minutes once a month looking across four to eight bakes shows patterns no single loaf reveals: the weeks you cut bulk short, the cold weekend, the flour that always spreads.

                ## Milestones
                1. The month's bakes laid side by side with their scores and crumb photos.
                2. The single most frequent fault named.
                3. One change chosen for next month and written at the top of the log.
                4. Last month's change marked as kept, dropped or still being tested.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Each month the bake log carries a dated note naming the main fault and one change to try next."
                cadence: rolling
              tasks:
                - "Read the month's log entries and photos in one sitting @recurring(monthly:12)"
                - "Name the fault that showed up most often"
                - "Write one change to try next month at the top of the log"
                - "Mark whether last month's change helped"
            - name: Flour stock rotation and freshness
              description: |-
                ## Purpose
                Wholemeal and rye flours contain the germ and its oils, so they turn stale and bitter within months at room temperature, and an open sack invites flour moths. A small rotation system, oldest first, wholegrains kept cold and white flour in sealed tubs, keeps flavour consistent and stops the expensive bags going to waste.

                ## Milestones
                1. Every flour decanted into a sealed, labelled tub with its best-before date.
                2. Wholegrain and rye flours moved to the fridge or freezer if they will not be used within two months.
                3. A minimum stock of base flour agreed so a bake is never missed.
                4. One monthly check of dates and stock carried out.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "All flours sit in labelled sealed tubs and the base flour has not dropped below its minimum for three months."
                cadence: rolling
              tasks:
                - "Decant open flour bags into sealed tubs and label the dates"
                - "Move wholegrain flours to the fridge or freezer"
                - "Set the minimum kilograms of base flour to keep in the house"
                - "Check flour dates and top up the base flour @recurring(monthly:20)"
            - name: Slicing and freezing the week's bread
              description: |-
                ## Purpose
                Naturally leavened bread keeps well for three or four days, but a 1 kg loaf in a two-person household often goes stale before it is finished. Slicing and freezing half of each bake the day after, and toasting from frozen, makes home bread last the whole week without a supermarket backup loaf.

                ## Milestones
                1. Freezer bags or a reusable box chosen for sliced bread.
                2. Half of each bake sliced and frozen on the day after baking.
                3. A method for reviving a whole frozen half loaf in the oven tested once.
                4. Bought bread no longer needed in a typical week.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "For four weeks in a row, half of each bake is frozen and no bread is bought or thrown away."
                cadence: rolling
              tasks:
                - "Choose a bag or box that holds half a loaf of slices"
                - "Slice and freeze half of the weekend loaf @recurring(weekly:mon)"
                - "Revive a frozen half loaf in a hot oven and note the timing"
                - "Count how many weeks this month you still needed shop bread"
            - name: Dried starter backup
              description: |-
                ## Purpose
                Starters die more often than people expect: a jar knocked off a shelf, a fridge failure, a fortnight of neglect, a house sitter who rinsed it down the sink. Spreading a thin layer to dry and storing the flakes in a sealed jar gives you a backup that revives in a few days.

                ## Milestones
                1. A thin layer of active starter dried completely on baking paper.
                2. The flakes stored in a labelled, airtight jar away from heat.
                3. One test revival done to prove the backup works.
                4. A fresh batch dried every quarter and the oldest flakes thrown out.
              priority: low
              frontmatter:
                mode: operating
                output_kind: artifact
                success_criteria: "A labelled jar of dried starter less than three months old is stored, and one revival from it has succeeded."
                cadence: cyclic
              tasks:
                - "Spread a spoonful of active starter thinly on baking paper to dry"
                - "Store the dried flakes in a labelled airtight jar"
                - "Revive a pinch of flakes to check they still work"
                - "Dry a fresh batch of backup starter @recurring(quarterly)"
            - name: Seasonal adjustment of bake timings
              description: |-
                ## Purpose
                A schedule that worked in spring can overproof every loaf by midsummer, and winter bulk ferments can stretch to ten hours. Re-measuring the kitchen at each change of season and adjusting water temperature, levain amount or retard time keeps the weekly bake on schedule all year.

                ## Milestones
                1. Room temperature re-measured at the start of each season.
                2. A summer and a winter version of your house schedule written.
                3. One lever chosen for each season, such as cooler water or a smaller levain.
                4. The first bake after each change logged against the new schedule.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: knowledge
                success_criteria: "The bake log holds a summer and a winter schedule, each tested with at least one logged bake."
                cadence: cyclic
              tasks:
                - "Write a summer and a winter version of your house schedule"
                - "Re-measure kitchen temperature and adjust the bake schedule @recurring(quarterly)"
                - "Pick one lever to change, such as water temperature or levain amount"
                - "Log the first bake after the change against the new timings"
            - name: Starter discard use-up routine
              description: |-
                ## Purpose
                Every feed of a counter starter produces discard, and throwing away 100 grams of flour a day adds up to several kilograms a year. A short list of reliable discard recipes, such as crackers, flatbreads and pancakes, turns it into food, and a single dated jar in the fridge means it is used before it turns grey.

                ## Milestones
                1. One discard jar in the fridge with a one-week limit.
                2. Three discard recipes tested and kept.
                3. Discard used at least once a week.
                4. The feed size reduced if discard still goes in the bin.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "No starter discard has been thrown away for a month, and three tested discard recipes are written down."
                cadence: rolling
              tasks:
                - "Start one discard jar in the fridge and date it"
                - "Test a discard cracker, a flatbread and a pancake recipe"
                - "Use up the week's discard in one bake @recurring(weekly:tue)"
                - "Cut the feed size if discard is still being thrown away"
            - name: Banneton, pot and peel care
              description: |-
                ## Purpose
                Bannetons that go back in the cupboard damp grow mould in their coils, and enamel chipped by a dropped lid can flake into food. A monthly brush-out and dry, and a yearly look over the pot, lame and peel, keep the kit hygienic and lasting for years.

                ## Milestones
                1. Bannetons brushed and dried fully after every use.
                2. A dusting flour such as rice flour adopted to stop sticking.
                3. Lame blades replaced before they start to drag.
                4. The pot, lid and peel checked yearly for chips, cracks and warping.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Bannetons are mould-free, a spare lame blade is in the drawer, and the yearly kit check is recorded."
                cadence: cyclic
              tasks:
                - "Switch to rice flour for dusting bannetons"
                - "Brush out the bannetons and dry them in a cooling oven @recurring(monthly:28)"
                - "Replace the lame blade and keep spares in the drawer"
                - "Inspect the pot enamel, lid and peel for damage @recurring(yearly)"
            - name: Quarterly new bread challenge
              description: |-
                ## Purpose
                Bakers who make the same loaf for two years get very good at one thing and then stall. Choosing one new bread each quarter, perhaps a seeded rye, bagels, a fougasse or a pan de mie, keeps the craft moving and builds a repertoire without crowding the weekly household bake.

                ## Milestones
                1. A list of twelve breads you would like to make one day.
                2. One chosen for the quarter, with a formula and a target bake weekend.
                3. The new bread baked at least twice, the second time with changes.
                4. A keep or drop verdict recorded and the formula filed.
              priority: low
              frontmatter:
                mode: operating
                output_kind: knowledge
                success_criteria: "Each quarter one new bread has been baked twice and filed as keep or drop with its formula."
                cadence: cyclic
              tasks:
                - "Write a list of twelve breads you want to try"
                - "Pick next quarter's new bread and its formula @recurring(quarterly)"
                - "Bake the new bread twice and log both attempts"
                - "File the formula under keep or drop"
            - name: Baker's percentages and scaling recipes
              description: |-
                ## Purpose
                Professional formulas express every ingredient as a percentage of the total flour, so 1,000 grams of flour at 75 percent hydration means 750 grams of water, and any recipe can be scaled to one loaf or six in a minute. Learning the arithmetic, including how the flour and water inside the levain count, lets you read any bread book, compare recipes at a glance and design your own.

                ## Milestones
                1. Hydration, salt and levain percentages calculated for two recipes you own.
                2. One recipe rewritten from cups or loaf weights into percentages.
                3. A formula scaled from one loaf to three without error.
                4. A small spreadsheet or card that does the sums.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Two of your recipes are written in baker's percentages, and one has been scaled to three loaves with correct totals."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Convert your current loaf into baker's percentages"
                - "Work out how the flour and water in the levain change true hydration"
                - "Scale the formula to three loaves and check the totals"
                - "Ask the agent to build a simple formula calculator sheet"
            - name: Kneading, folding and gluten development
              description: |-
                ## Purpose
                Gluten can be built by kneading, slap and fold, coil folds or simply time, and each suits a different dough: a stiff bagel dough, a wet ciabatta, a slow overnight loaf. Practising the windowpane test and the main techniques on three doughs teaches you to judge strength by feel rather than by minutes.

                ## Milestones
                1. Hand kneading and the windowpane test practised on a 65 percent dough.
                2. Slap and fold practised on a dough of 75 percent hydration or more.
                3. A whole bulk ferment run using coil folds only.
                4. A note on which technique you now default to and why.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Three doughs have been developed by three different methods, and your default method is recorded in the bake log."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Watch a demonstration of slap and fold and of coil folds"
                - "Knead a 65 percent dough until it passes the windowpane test"
                - "Use slap and fold on a wetter dough and note the difference"
                - "Run a whole bulk ferment with coil folds only"
            - name: Reading bulk fermentation
              description: |-
                ## Purpose
                Ending bulk fermentation at the right point matters more than any other step in sourdough, and the clock is the least reliable guide. Learning the signs, a rise of half to three quarters, a domed edge, bubbles on the sides and a wobble when the tub is shaken, is what cures most dense and most flat loaves.

                ## Milestones
                1. A straight-sided, marked container used for every bulk.
                2. A small aliquot jar used alongside to read the rise precisely.
                3. Three bulks ended at different rise levels and the loaves compared.
                4. Your target rise percentage for your flour and starter written in the log.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Three loaves ended at different measured rises are compared in the log, and a target rise percentage is recorded."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Mark a straight-sided tub at your dough's starting level"
                - "Put a small sample of each dough in an aliquot jar"
                - "End three bulks at 50, 75 and 100 percent rise and compare"
                - "Write your best rise percentage in the bake log"
            - name: Preshaping and shaping boules and batards
              description: |-
                ## Purpose
                Shaping is what turns a slack dough into a loaf that holds its height, and it is the skill beginners practise least because each attempt costs a whole bake. Practising preshape, bench rest and final shape on cheap yeasted dough, then on sourdough, builds the surface tension behind a tall loaf and an even crumb.

                ## Milestones
                1. A preshape and a 20 to 30 minute bench rest built into every bake.
                2. Five boules shaped from one cheap practice dough in a single session.
                3. Batards shaped using a stitching or rolling method.
                4. Three consecutive loaves that keep their height in the oven.
              priority: high
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Side-view photos of three consecutive loaves show them holding their height, with the shaping method noted for each."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Mix a large cheap yeasted dough purely for shaping practice"
                - "Shape and reshape five boules from it in one session"
                - "Learn one batard method and use it on the next two bakes"
                - "Photograph each loaf from the side to compare height"
            - name: Scoring for oven spring and an ear
              description: |-
                ## Purpose
                Scoring creates a controlled weak point that tells the loaf where to open; without it the crust bursts wherever it is thinnest. Learning blade angle and depth, the single shallow slash that lifts an ear, and scoring straight from the fridge while the dough is firm gives you a better rise and a loaf that looks deliberate.

                ## Milestones
                1. A lame with a fresh blade and a steady grip learned.
                2. A single slash at a shallow angle practised for an ear.
                3. Two or three cross and square patterns tried on boules.
                4. Scoring done on cold dough straight from the fridge as standard.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "At least three logged loaves show a single-slash ear, and two decorative patterns have been tried and photographed."
                cadence: phased
                effort_hours_estimate: "3"
              tasks:
                - "Fit a fresh blade to a lame or blade holder"
                - "Practise the angle and depth on a cold shaped loaf"
                - "Try one single slash and one cross pattern on the next two bakes"
                - "Compare oven spring between the scoring patterns in the log"
            - name: Steam and crust in a home oven
              description: |-
                ## Purpose
                Steam keeps the outer skin soft for the first 15 to 20 minutes so the loaf can expand, then dry heat finishes a thin, crackling crust. Learning the lidded pot method, and alternatives such as a lava rock tray for loaves the pot cannot hold, gives you control over crust colour, thickness and blistering.

                ## Milestones
                1. A lidded pot bake done with the lid on for 20 minutes and off for the rest.
                2. One open bake on a stone or tray with a steam method tried safely.
                3. Crusts from each method compared in photos.
                4. Your default lid-off time and target crust colour written in the log.

                ## Notes
                Pouring water onto a hot tray throws out scalding steam. Wear long oven gloves, stand back from the door and keep children away.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Photos of a pot-baked and an open-baked crust are compared in the log, with a default lid-off time recorded."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Bake one loaf with the lid on for 20 minutes then off"
                - "Try a steam tray with lava rocks or wet towels for an open bake"
                - "Photograph both crusts side by side"
                - "Set your default lid-off time in the log"
            - name: Diagnosing crumb and crust faults
              description: |-
                ## Purpose
                Most disappointing loaves fall into a handful of patterns: a tight gummy crumb, big tunnels over a dense base, a flat spread, a pale crust or a sharp alcoholic smell. Learning to read a crumb shot and match it to underproofing, overproofing, weak shaping or a cool oven turns each bad bake into a specific fix.

                ## Milestones
                1. A one-page fault chart with example photos made from reliable baking sources.
                2. Your last five loaves classified using it.
                3. The single most frequent fault identified.
                4. One fix tested on the next bake and the result logged.
              priority: high
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A fault chart exists, five past loaves are labelled with a likely cause, and one fix has been tested and logged."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Collect crumb photos of your last five loaves"
                - "Build a fault chart of the six commonest crumb problems"
                - "Label each of your loaves with its likely cause"
                - "Test one fix on the next bake"
            - name: Rye and wholegrain breads
              description: |-
                ## Purpose
                Rye forms almost no stretchy gluten, so a high-rye dough is a sticky paste that is mixed rather than kneaded, baked in a tin and rested a full day before cutting. Wholegrain wheat breads sit in between, thirsty for more water and better with a soaker. Learning both widens what you can bake and adds the deep, keeping breads many households prefer.

                ## Milestones
                1. A 30 percent wholemeal sourdough baked with extra water.
                2. A soaker of seeds or cracked grains used in one loaf.
                3. A 100 percent rye tin loaf baked and rested 24 hours before slicing.
                4. One rye or wholegrain bread added to the regular rotation.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A wholemeal loaf, a soaker loaf and a 100 percent rye have each been baked and logged, and one has joined the rotation."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Raise hydration by 5 percent for your first 30 percent wholemeal loaf"
                - "Prepare a seed soaker the night before a bake"
                - "Bake a 100 percent rye in a tin and wait a day to slice it"
                - "Choose one wholegrain loaf for the regular rotation"
            - name: Enriched doughs from milk loaf to brioche
              description: |-
                ## Purpose
                Butter, eggs, milk and sugar slow yeast and weaken gluten, which is why enriched doughs need longer kneading, cooler handling and often a night in the fridge. Working from a soft milk loaf to braided challah, cinnamon buns and finally a high-butter brioche teaches the handling these doughs need and gives you the breads people ask for at weekends and celebrations.

                ## Milestones
                1. A soft milk sandwich loaf baked using a cooked flour paste.
                2. A three or six strand braid made and baked.
                3. A tray of filled buns rolled, cut and proofed evenly.
                4. A brioche with at least 50 percent butter mixed without the butter separating.

                ## Notes
                Enriched breads usually contain egg and milk, so tell guests and label them for anyone avoiding those allergens.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A milk loaf, a braided loaf, a tray of buns and a brioche have each been baked and logged."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "Bake a soft milk sandwich loaf using a cooked flour paste"
                - "Practise a three strand braid with spare dough"
                - "Roll, fill and cut a tray of cinnamon buns"
                - "Make a chilled overnight brioche, adding the butter gradually"
            - name: Poolish versus straight dough side-by-side
              description: |-
                ## Purpose
                A preferment such as poolish or biga, mixed 12 to 16 hours ahead with a pinch of yeast, gives yeasted bread more flavour, better keeping and a crisper crust without needing a starter. Baking the same loaf both ways on the same day shows whether the extra planning is worth it for your household.

                ## Milestones
                1. A straight dough and a poolish version of the same formula written with equal totals.
                2. Both mixed and baked on the same day in the same oven.
                3. A blind tasting by two or more people that evening and the next day.
                4. A decision recorded on which method becomes the default yeasted bread.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "Two versions of one formula have been baked together and blind tasted, with the chosen default recorded."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Rewrite one yeasted formula with 30 percent of its flour in a poolish"
                - "Mix the poolish the evening before bake day"
                - "Bake both versions together and label them underneath"
                - "Hold a blind tasting and record the verdict"
            - name: Hydration ladder from 65 to 80 percent
              description: |-
                ## Purpose
                Higher hydration is often sold as the route to an open crumb, but beyond what your flour and your shaping can handle it only gives a flat, gummy loaf. Baking the same formula at four hydrations finds the ceiling for your current flour and hands, which is a better guide than any recipe's number.

                ## Milestones
                1. One formula baked at 65, 70, 75 and 80 percent hydration.
                2. Each loaf's height, crumb and ease of handling scored.
                3. Your current comfortable ceiling identified.
                4. The house loaf set to that hydration.
              priority: low
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "Four loaves at four hydrations are scored in the log, and the house loaf hydration is set from the result."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Write the house formula out at four hydrations"
                - "Bake two of the hydrations each weekend for two weekends"
                - "Score height, crumb and how easy each dough was to shape"
                - "Set the house loaf hydration from the results"
            - name: Overnight cold retard to fit a working week
              description: |-
                ## Purpose
                Retarding shaped dough in the fridge for 12 to 48 hours slows fermentation enough to move the bake to a convenient hour, deepens flavour and makes scoring easier. Learning how long your dough tolerates the fridge, and at what fridge temperature, opens up schedules such as shape after dinner and bake before work.

                ## Milestones
                1. The temperature of the fridge shelf where bannetons sit measured.
                2. Loaves from one batch baked after 12, 24 and 36 hours of retard.
                3. The retard window that gives the best result written down.
                4. A weekday schedule using that window baked successfully.
              priority: medium
              deadlineOffsetDays: 42
              frontmatter:
                mode: building
                output_kind: knowledge
                success_criteria: "Three loaves retarded for different lengths are compared in the log, and one weekday bake has used the best window."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Put a thermometer on the fridge shelf where the bannetons go"
                - "Split one batch and bake after 12, 24 and 36 hours"
                - "Note which retard length gave the best rise and flavour"
                - "Bake one loaf on a weekday schedule using that window"
            - name: Heritage and locally milled grain trial
              description: |-
                ## Purpose
                Stoneground flours from a small mill, and older wheats such as einkorn, emmer or local landrace varieties, taste noticeably different but behave differently too, often with weaker gluten and thirstier bran. Trialling two or three at a 20 percent blend tells you which earn a place on the shelf and how to handle them.

                ## Milestones
                1. Two or three small-mill or heritage flours sourced.
                2. Each blended at 20 percent into the house loaf and baked.
                3. Flavour, handling and crumb compared in the log.
                4. One flour adopted, or none, with reasons recorded.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "At least two heritage or small-mill flours have been baked in a 20 percent blend and a keep or drop decision recorded for each."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Find a small mill or shop selling stoneground or heritage flour"
                - "Buy small bags of two or three of those flours"
                - "Bake each at 20 percent in the house loaf"
                - "Record which flour, if any, joins the regular shelf"
            - name: Mixer, steel or proofer upgrade decision
              description: |-
                ## Purpose
                Once the basics are in place, the next purchases promise a lot: a stand mixer for enriched doughs, a baking steel for open bakes, a proofing box for a cold kitchen, more bannetons. Deciding against the problems in your own bake log, rather than catalogue enthusiasm, means money goes to the bottleneck you actually have.

                ## Milestones
                1. The two biggest limits on your baking named from the log.
                2. Up to three candidate purchases matched to those limits.
                3. Counter space, budget and noise considered for each.
                4. One purchase made or deliberately deferred.

                ## Notes
                Start from the **Purchase decision** template.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A recorded decision names the limit being solved and the item bought, or the reason for waiting."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Name the two things in your log that most limit your bread"
                - "List the equipment that would fix each one"
                - "Check counter space and budget for each option"
                - "Buy one item or write down why you are waiting"
            - name: Tuning sourness for the household
              description: |-
                ## Purpose
                Some households love a sharp, tangy sourdough and others want it barely sour, and both are within your control. Levain proportion, feed ratio, wholegrain content, bulk temperature and retard length all shift acidity, so changing one lever at a time over four bakes lands the flavour where the people eating it want it.

                ## Milestones
                1. The household's preference agreed: milder, the same or sharper.
                2. One lever chosen first, such as a longer cold retard or a younger, stiffer levain.
                3. Four bakes logged, each with one change and a tasting note.
                4. The house formula updated with the settings that won.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "Four single-change bakes are logged with tasting notes, and the house formula records the chosen flavour settings."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Ask the household whether they want the bread milder or sharper"
                - "Choose the first lever to change and keep everything else the same"
                - "Bake and taste one change per week for four weeks"
                - "Update the house formula with the settings that won"
            - name: Cost per loaf and flour buying
              description: |-
                ## Purpose
                Home bread is usually cheaper than a bakery loaf, but small bags of premium flour, an oven heated for an hour and discard poured away can close the gap. Working out a real cost per loaf, energy included, shows where buying in 16 or 25 kg sacks or baking two loaves per oven run saves money.

                ## Milestones
                1. The cost of flour, salt and energy for one loaf worked out.
                2. The figure compared with a bought loaf of similar quality.
                3. A larger sack or cheaper supplier priced.
                4. A decision recorded on loaves per bake, sack size and supplier.
              priority: low
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A written cost per loaf including energy, compared with a bought loaf, with a supplier and sack size decision."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Work out the flour and salt cost of one house loaf"
                - "Estimate the oven energy for one bake from its rating and time"
                - "Price a 16 kg or 25 kg sack from a mill or wholesaler"
                - "Recalculate the cost per loaf when flour or energy prices change @recurring(yearly)"
            - name: Inclusions of seeds, olives, fruit and cheese
              description: |-
                ## Purpose
                Inclusions change everything about a dough: dried fruit steals water, olives add salt, cheese burns on the crust and too many seeds tear the gluten. Learning when to add them, at lamination or the last fold, and at what percentage, gives you a set of variations on the house loaf without new formulas.

                ## Milestones
                1. Three inclusions tried at around 15 to 25 percent of flour weight.
                2. Each added at lamination or the last fold rather than at mixing.
                3. Salty or wet inclusions allowed for in the formula.
                4. Two favourite variations written as additions to the house formula.
              priority: low
              frontmatter:
                mode: building
                output_kind: knowledge
                success_criteria: "Three inclusion bakes are logged, and two variations are written into the house formula with their percentages."
                cadence: phased
                effort_hours_estimate: "5"
              tasks:
                - "Choose three inclusions the household would happily eat"
                - "Stretch the dough thin on the bench to spread the first inclusion evenly"
                - "Reduce the salt for olives or cheese in the second bake"
                - "Write the two favourite variations into the house formula"
            - name: Celebration bread centrepiece
              description: |-
                ## Purpose
                Braided loaves, wreaths or a sharing ring of rolls on a celebration table are gifts people remember, but a first attempt on the morning itself is a gamble. Planning a practice bake two weeks ahead and a countdown back from serving time makes sure the bread arrives on time and at its best.

                ## Milestones
                1. The occasion, headcount and bread chosen, with guests' dietary needs checked.
                2. A full practice bake done at least two weeks ahead.
                3. A timeline written back from the serving hour, with any glaze or decoration planned.
                4. The bread baked, cooled and carried to the table without being crushed.
              priority: medium
              deadlineOffsetDays: 60
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "The centrepiece bread is served at the occasion after a practice bake at least two weeks earlier."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Choose the bread and check it suits every guest's diet"
                - "Do a full practice bake two weeks before the occasion"
                - "Write a countdown from serving time back to the levain or preferment"
                - "Bake, cool and box the bread to carry it safely"
            - name: Festival breads through the year
              description: |-
                ## Purpose
                Many traditions have their own breads: hot cross buns, stollen, panettone, challah, pan de muerto, tsoureki, kulich. Choosing the two or three that matter in your household and planning each one six weeks ahead turns a rushed attempt into a bake the household looks forward to every year.

                ## Milestones
                1. A calendar of the festival breads you want to make each year.
                2. A tested formula for each, with timings.
                3. Long-lead items such as candied peel or a strong sweet levain planned well in advance.
                4. Each bread baked for its date, with notes kept for next year.
              priority: low
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A yearly calendar of festival breads exists, and each one on it has a tested formula and notes from its last bake."
                cadence: cyclic
              tasks:
                - "List the festival breads your household cares about and their dates"
                - "Find and test a formula for the next one on the calendar"
                - "Order specialist ingredients six weeks before each date"
                - "Plan the year's festival bakes on the calendar @recurring(yearly)"
            - name: Entering a bread class at a local show
              description: |-
                ## Purpose
                Local and agricultural shows often run bread classes judged on shape, crust, crumb and flavour, with a written schedule setting the exact weight or style. Entering one gives your practice a deadline and puts expert eyes on your loaf, often with comments written on the entry card.

                ## Milestones
                1. A show with a bread class found and its schedule read.
                2. The class rules on size, style and presentation noted.
                3. Two practice bakes made to the schedule's specification.
                4. The entry delivered on time and the judge's comments recorded.
              priority: low
              deadlineOffsetDays: 120
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A loaf has been entered in a show bread class and the judge's comments are copied into the bake log."
                cadence: one-shot
                effort_hours_estimate: "10"
              tasks:
                - "Search for local shows with a bread or baking class"
                - "Read the schedule and note the exact rules for your class"
                - "Bake two practice loaves to the schedule's specification"
                - "Copy the judge's comments into the bake log"
                - "Check new show schedules when they are published @recurring(yearly)"
            - name: Bake sale or community stall batch
              description: |-
                ## Purpose
                Baking a dozen loaves for a school fair, a fundraiser or a community stall in a single domestic oven needs a production plan: staggered doughs, oven slots and cooling space. Planning it as a schedule, with allergen labels for every item, avoids a 3 a.m. bake and an unlabelled tray of seeded loaves.

                ## Milestones
                1. Quantities, types and the sale time agreed with the organiser.
                2. A staggered schedule that fits the oven's capacity per bake.
                3. Ingredient and allergen labels printed for each type.
                4. Everything baked, cooled, bagged and delivered on time.

                ## Notes
                Sesame, milk, egg, nuts and the cereal itself are common allergens. Follow the organiser's labelling rules, which may reflect local food law.
              priority: medium
              deadlineOffsetDays: 60
              frontmatter:
                mode: service
                output_kind: deliverable
                success_criteria: "The agreed number of labelled loaves is delivered to the organiser by the agreed time."
                cadence: one-shot
                effort_hours_estimate: "10"
              tasks:
                - "Agree quantities, types and drop-off time with the organiser"
                - "Write a staggered mixing and oven schedule for the batch"
                - "Print ingredient and allergen labels for every bread"
                - "Bake, cool and bag the loaves the day before or that morning"
            - name: Sourdough around a full-time job
              description: |-
                ## Purpose
                Most sourdough schedules assume you are home at ten in the morning to fold the dough, which rules out anyone working away from the house. A weekday plan built on an overnight levain, a short mix before work or after dinner, a long cool bulk and a cold retard fits bread into office hours.

                ## Milestones
                1. Your fixed hours at home on weekdays mapped.
                2. A schedule with every hands-on step under 15 minutes placed in those hours.
                3. Daytime folds reduced or replaced with a longer, cooler bulk.
                4. Two loaves baked on the schedule without taking time off.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A written weekday schedule with no hands-on step longer than 15 minutes has produced two logged loaves."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Map the hours you are home on a normal weekday"
                - "Draft a schedule with each hands-on step under 15 minutes"
                - "Replace daytime folds with a cooler, longer bulk"
                - "Bake two loaves on the new schedule and log the results"
            - name: Baking bread with children
              description: |-
                ## Purpose
                Children can weigh, mix, knead and shape from about three years old, and bread is forgiving enough that lopsided rolls still bake well. Choosing quick yeasted recipes, short jobs matched to attention spans and clear oven rules makes baking a regular shared activity rather than a mess to dread.

                ## Milestones
                1. Two quick yeasted recipes chosen that rise in under two hours.
                2. Jobs listed by age, such as weighing, kneading and shaping.
                3. Kitchen rules agreed for the oven, knives and raw dough.
                4. A family bake morning held at least three times.

                ## Notes
                Raw flour and dough can carry harmful bacteria, so no tasting before baking and wash hands after handling.
              priority: low
              frontmatter:
                mode: building
                output_kind: habit
                success_criteria: "Three family bake sessions have been held using the agreed recipes and kitchen rules."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Pick a quick roll recipe children can shape themselves"
                - "List the jobs each child can do safely at their age"
                - "Agree oven and raw dough rules before the first session"
                - "Hold a family bake morning and let each child shape their own rolls"
            - name: Bread in a small rented kitchen
              description: |-
                ## Purpose
                Shared and rented kitchens often mean a narrow oven, no stand mixer, little counter space and a landlord's worktop you cannot scratch. Compact kit that lives in one crate, a board or mat for shaping and no-knead or coil-fold methods make good bread possible in a galley kitchen or a studio flat.

                ## Milestones
                1. A pot or tin chosen that fits the oven you actually have.
                2. All bread kit stored in one crate or box.
                3. A no-knead or coil-fold method adopted so no mixer is needed.
                4. A board or mat used to protect the worktop and contain the mess.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "All bread kit fits in one crate and two loaves have been baked with a mixer-free method on a protected worktop."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Agree oven times with housemates if the kitchen is shared"
                - "Gather all bread kit into a single crate"
                - "Switch to a no-knead or coil-fold method"
                - "Buy a large board or silicone mat for shaping"
            - name: Keeping a starter alive while away
              description: |-
                ## Purpose
                Holidays and hospital stays need not mean losing a starter. A stiff, freshly fed starter in the fridge will usually survive two to three weeks, the dried backup covers longer, and a friend with written instructions can manage the rest. Planning before you leave takes ten minutes; rescuing a neglected starter takes a week.

                ## Milestones
                1. The length of the absence noted and the right method chosen.
                2. A stiff, freshly fed starter in the fridge, or a friend lined up to feed it.
                3. One page of feeding instructions written for a sitter.
                4. The starter revived with two or three feeds on return.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "After an absence the starter doubles within eight hours of a feed, using the plan written before leaving."
                cadence: phased
                effort_hours_estimate: "1"
              tasks:
                - "Note how long you will be away and pick a method"
                - "Feed the starter stiffer than usual the day before leaving"
                - "Write one page of feeding instructions for a friend"
                - "Revive the starter with two or three feeds after you return"
            - name: Bread as a creative practice
              description: |-
                ## Purpose
                For bakers who think of a loaf as something designed, bread offers real creative room: decorative scoring, stencilled flour patterns, doughs coloured with beetroot or turmeric, sculpted wheat ears and a photographed body of work. Treating it as a series, one theme at a time with notes and photos, builds a recognisable style and a portfolio others can see.

                ## Milestones
                1. A theme chosen for a six-month series, such as wheat ear scoring or natural colours.
                2. One themed loaf baked and photographed in consistent light each month.
                3. Notes kept on technique and what you would change.
                4. A portfolio page of the six strongest pieces assembled.

                ## Notes
                Start from the **Portfolio piece** template for each finished loaf. Use only food-safe colourings and decorations; craft shop glitters and paints are not.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Six themed loaves are photographed in consistent light and collected on one portfolio page with notes."
                cadence: rolling
              tasks:
                - "Choose a theme for a six-month series"
                - "Set up a corner with consistent light for loaf photos"
                - "Photograph the month's themed loaf from above and in cross section @recurring(monthly:16)"
                - "Pick the six strongest pieces for a portfolio page"
            - name: Baking at altitude or in heat and humidity
              description: |-
                ## Purpose
                Above about 900 metres, lower air pressure makes dough rise faster and dry out sooner, and in tropical heat and humidity a starter can peak in two hours. Adjusting yeast, water and timing for your real conditions stops recipes written for a temperate, sea-level kitchen from failing every time.

                ## Milestones
                1. Your altitude, or your kitchen's usual temperature and humidity, recorded.
                2. Two adjustments chosen from reputable altitude or warm-climate baking guidance.
                3. Test bakes logged with the adjustments.
                4. A personal conversion note written for adapting any new recipe.
              priority: low
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "Two test bakes with recorded adjustments are logged, and a written conversion note sits at the front of the bake log."
                cadence: phased
                effort_hours_estimate: "5"
              tasks:
                - "Look up your altitude and note your kitchen's usual humidity"
                - "Find adjustment guidance for altitude or warm climates from a reputable baking source"
                - "Bake two test loaves with reduced yeast or chilled water"
                - "Write a short conversion note for adapting new recipes"
            - name: Developing a signature loaf formula
              description: |-
                ## Purpose
                Experienced bakers eventually want a loaf that is theirs: a particular flour blend, hydration, inclusion and bake profile they can reproduce on demand. Developing one deliberately, through a written brief and ten logged iterations, teaches more about bread than any recipe and leaves a formula worth passing on.

                ## Milestones
                1. A one-paragraph brief for the loaf covering flavour, crust, crumb and use.
                2. A starting formula written in baker's percentages.
                3. Ten iterations logged, each changing one variable.
                4. A final formula and method written up with photos.
                5. The loaf served to five people outside the household for feedback.
              priority: medium
              deadlineOffsetDays: 180
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A final written formula backed by ten logged iterations, with feedback from five people outside the household."
                cadence: phased
                effort_hours_estimate: "25"
              tasks:
                - "Write a one-paragraph brief for the loaf you want"
                - "Draft a starting formula in baker's percentages"
                - "Change one variable per bake across ten bakes"
                - "Ask the agent to turn the final log entries into a clean recipe card"
            - name: Milling your own flour at home
              description: |-
                ## Purpose
                Countertop stone and impact mills let you bake with flour minutes old, from wheat berries, rye and heritage grains that keep for years unmilled. They are a real step up in cost, noise and learning, since fresh flour absorbs water differently and needs sifting for lighter loaves, so a trial comes before any purchase.

                ## Milestones
                1. Freshly milled flour from a mill or shop tried in the house loaf first.
                2. Stone and impact mills compared on price, noise, fineness and cleaning.
                3. A sieve chosen for removing some bran when a lighter loaf is wanted.
                4. A decision recorded on whether to buy a mill.
                5. If one is bought, the house loaf adapted to fresh-milled flour.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A recorded decision on buying a home mill, made after at least one bake with freshly milled flour."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Buy a small bag of freshly milled wholemeal from a local mill"
                - "Compare stone and impact mills on price, noise and fineness"
                - "Bake the house loaf with fresh-milled flour and extra water"
                - "If you own a mill, clean the burrs and check them for wear @recurring(quarterly)"
            - name: Selling bread from home under local food rules
              description: |-
                ## Purpose
                Selling loaves to neighbours or at a market usually means registering as a food business or working under a home-baking exemption, with rules on labelling, allergens, hygiene training, insurance and where you may sell. Finding out exactly what applies where you live, before taking the first order, protects you and your customers.

                ## Milestones
                1. Your local authority's rules for selling home-baked food found and noted.
                2. Registration, hygiene training and insurance arranged where required.
                3. Labels showing ingredients and allergens in the required format.
                4. A price per loaf that covers ingredients, energy, packaging and your time.
                5. A record kept of batches, ingredients and sales.

                ## Notes
                This sets out the questions to ask. The answers come from your local food authority and, where needed, an adviser or insurer.
              priority: high
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "Before the first sale, the local rules are noted, any required registration is in place and every bread has a compliant label."
                cadence: phased
                effort_hours_estimate: "12"
              tasks:
                - "Look up your local authority's rules for selling home-baked food"
                - "Book a food hygiene course if your authority requires one"
                - "Draft an ingredient and allergen label for each bread"
                - "Price a loaf including ingredients, energy, packaging and time"
                - "Renew registration and insurance before they lapse @recurring(yearly)"
            - name: Teaching a beginners' bread class
              description: |-
                ## Purpose
                Teaching is where you find out what you actually know. Running a small hands-on class for friends, a community centre or a school club, with doughs prepared at different stages so learners see the whole process in three hours, passes on the craft and sharpens your own understanding.

                ## Milestones
                1. A venue, date and group of four to eight learners confirmed.
                2. A lesson plan covering mixing, shaping, scoring and baking in three hours.
                3. Doughs made in advance at each stage so every step can be shown.
                4. Recipe sheets and allergen information handed out.
                5. Feedback gathered and one improvement noted for next time.
              priority: medium
              deadlineOffsetDays: 90
              frontmatter:
                mode: service
                output_kind: event-completion
                success_criteria: "A class of at least four learners has been taught and each went home with a loaf and a recipe sheet, with feedback recorded."
                cadence: one-shot
                effort_hours_estimate: "15"
              tasks:
                - "Ask a friend group or community centre about hosting a class"
                - "Write a three-hour lesson plan with one dough at each stage"
                - "Prepare recipe sheets and an allergen list for learners"
                - "Collect feedback at the end and note one change for next time"
---

# Bread & Sourdough Baking

This area is for anyone who wants good bread from their own oven, from a first tin loaf to an open-crumbed sourdough, and for bakers who treat a loaf as something designed. It starts with the foundations (a scale and lidded pot, the right flours, a first yeasted loaf, a bake log, a starter and a first sourdough), then the weekly routines that keep the starter and the household loaf going, the core skills of fermentation, shaping, scoring and steam, the experiments with hydration, preferments and flavour, the dated bakes for celebrations, shows and stalls, versions for working weeks, children, small kitchens and hot climates, and finally the signature formulas, home milling, selling and teaching of an experienced baker.

What repeats is a weekend bake with its Friday levain, a midweek starter feed and a monthly clean jar, a monthly log review and flour check, a weekly discard bake, a quarterly dried backup and new bread, and a yearly oven check and festival plan. The Purchase decision, Metrics log, Habit tracker and Portfolio piece templates pair with the projects that name them. Installing adds all 50 projects as active, so archive the ones that are not for you yet.
