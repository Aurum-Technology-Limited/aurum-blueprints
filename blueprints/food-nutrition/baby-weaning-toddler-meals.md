---
id: food-nutrition.baby-weaning-toddler-meals
name: Baby Weaning & Toddler Meals
description: "A readiness check and a chosen weaning approach, safe shapes and early allergens, freezer and menu routines, texture stages, and toddler meals the whole family can share."
category: personal
version: 1.0.0
tags: [food-nutrition, baby-weaning-toddler-meals, parent, weaning, baby-led-weaning, allergen-introduction, toddler-meals]
author: Aurum Technology
starter_structure:
  templates:
    - purchase-decision
    - metrics-log
    - weekly-meal-plan
    - habit-tracker
    - trip
  pillars:
    - name: Food & Nutrition
      emoji: "🥗"
      description: "What gets eaten, and how it gets to the table: meal planning, shopping and batch cooking, dietary needs and goals, cooking skill as a lifelong craft, and the food rituals that hold a household together."
      pillarFrontmatter:
        review_cadence: monthly
      areas:
        - name: Baby Weaning & Toddler Meals
          description: "Introducing solid food, choosing between purees and baby-led weaning, managing allergens and planning toddler meals the whole family can share."
          projects:
            - name: Readiness signs check before first solids
              description: |-
                ## Purpose
                Most health services advise starting solids at around six months, when three signs appear together: sitting steadily with support and holding the head up, picking food up and bringing it to the mouth, and swallowing food rather than pushing it back out. Chewing fists, waking at night and wanting longer milk feeds are often mistaken for readiness and are not reliable signs. Checking for the real signs, and agreeing the start with your health visitor or doctor, means the first week of food goes with your baby rather than against them.

                ## Milestones
                1. Your baby's date of birth and, if born early, corrected age written at the top of the feeding log.
                2. The three readiness signs observed, with the date each first appeared noted.
                3. A start week for solids agreed with your health visitor or doctor.
                4. Any sign still missing at seven months raised with a professional.

                ## Notes
                Very early starts are not advised anywhere. If your baby was born early, ask the neonatal team or health visitor which age to count from.
              priority: high
              deadlineOffsetDays: 14
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "All three readiness signs are recorded with dates and a start week for solids has been agreed with a health professional."
                cadence: one-shot
                effort_hours_estimate: "1"
              tasks:
                - "Read your health service's list of signs a baby is ready for solids"
                - "Watch three feeds for steady sitting, hand to mouth and swallowing"
                - "Note the date each readiness sign first appears"
                - "Ask your health visitor to confirm a start week for solids"
            - name: Purees, baby-led weaning or a mix
              description: |-
                ## Purpose
                Spoon-fed purees and baby-led weaning, where the baby feeds themselves soft finger food from the start, both work, and many families end up mixing the two. The choice affects what you buy, how you cook, how messy the first months are and how you feel about gagging. Deciding on purpose, with the trade-offs written down, stops the first fortnight becoming a tug of war between two sets of advice.

                ## Milestones
                1. The main differences between spoon feeding, baby-led weaning and a combined approach summarised on one page.
                2. Household constraints listed: childcare, time to cook, tolerance for mess and worry about gagging.
                3. An approach chosen for the first month, with the reason recorded.
                4. A review point set four weeks in, when the approach can change.

                ## Notes
                Whichever route you take, aim to reach mashed and lumpy textures and finger foods well before the first birthday.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A written choice of weaning approach for the first month exists, with its reasons and a review date four weeks later."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Read one balanced comparison of purees and baby-led weaning from a health service"
                - "List the household constraints that affect how the baby will be fed"
                - "Talk the options through with every adult who will feed the baby"
                - "Write down the chosen approach and the date to review it"
            - name: High chair with footrest and five-point harness
              description: |-
                ## Purpose
                A baby who sits upright with feet supported chews and swallows better and is less likely to slump, which matters most with finger foods. Many popular high chairs have no footrest, trays that are hard to clean or buckles that trap food. Comparing a few chairs against the same short list of criteria avoids buying twice.

                ## Milestones
                1. Five criteria agreed: upright seat, adjustable footrest, five-point harness, wipeable surfaces and fit in your kitchen.
                2. Three chairs shortlisted with price, dimensions and cleaning notes.
                3. A chair bought or borrowed that pulls up to the family table.
                4. The footrest set so your baby's knees and hips sit at roughly right angles.

                ## Notes
                Start from the **Purchase decision** template. Second-hand chairs are fine if the harness is complete and the frame is sound; check the model for recalls.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A high chair with an adjustable footrest and five-point harness is in the kitchen, set to the baby's size."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Measure the space and table height where the baby will eat"
                - "Shortlist three high chairs with adjustable footrests"
                - "Check each shortlisted model for safety recalls"
                - "Buy or borrow the chosen chair and set the footrest height"
            - name: Starter weaning kit on a modest budget
              description: |-
                ## Purpose
                Shops sell dozens of weaning gadgets, but the first months need only a handful: soft spoons, an open or free-flow cup, a few sleeved bibs, lidded freezer trays and a wipeable floor mat. Writing the short list first, and checking what friends can pass on, keeps the spend small and the cupboards clear.

                ## Milestones
                1. A kit list of no more than ten items written, with quantities.
                2. Items already owned or offered second-hand crossed off.
                3. Remaining items bought, with the total spend recorded.
                4. The kit stored in one cupboard or basket near the high chair.

                ## Notes
                A steamer basket, a stick blender and a fork cover nearly all preparation. A dedicated baby food maker is optional.
              priority: medium
              deadlineOffsetDays: 21
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Every item on a ten-item weaning kit list is in one place near the high chair, with the total spend written down."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Write a kit list of ten items or fewer for the first month of solids"
                - "Ask friends and family which items they can pass on"
                - "Buy the remaining items and note what you spent"
                - "Clear one cupboard or basket for the feeding kit"
            - name: Infant choking first aid course
              description: |-
                ## Purpose
                Knowing exactly what to do if a baby chokes takes most of the fear out of finger foods and helps you tell normal gagging from a real emergency. A two hour baby first aid course, in person if possible, has you practise back blows and chest thrusts on an infant manikin, which videos alone cannot give. Booking it before the first meals means every adult who feeds the baby has done it.

                ## Milestones
                1. A baby first aid course booked with a recognised first aid charity or provider.
                2. The course attended by you and, ideally, every other adult who feeds the baby.
                3. The infant choking steps written on a card by the high chair.
                4. A refresher date noted for twelve months on.

                ## Notes
                Gagging is noisy, with coughing and red face, and usually sorts itself out. Choking is often silent. The course makes the difference clear.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Every adult who regularly feeds the baby has completed a baby first aid course and the choking steps are posted by the high chair."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Find a baby first aid course run by a recognised first aid charity"
                - "Book places for every adult who regularly feeds the baby"
                - "Practise back blows and chest thrusts on the course manikin"
                - "Pin a card with the infant choking steps beside the high chair"
            - name: Safe shapes and sizes card for finger foods
              description: |-
                ## Purpose
                Choking risk depends more on shape and texture than on the food itself: round, hard and slippery foods are the problem. A card on the fridge showing how to cut grapes, cherry tomatoes, sausages and blueberries, plus the squash test for softness, means anyone preparing food, including grandparents and babysitters, does it the same safe way.

                ## Milestones
                1. A list of high-risk shapes compiled from your health service's choking guidance.
                2. The safe preparation for each written beside it, such as grapes quartered lengthways.
                3. The squash test written down: soft enough to crush between thumb and finger.
                4. The card on the fridge and a photo of it sent to other carers.

                ## Notes
                Whole nuts, popcorn and hard raw vegetables are not suitable for babies and young toddlers in any shape. Offer nuts as smooth nut butter or finely ground.
              priority: high
              deadlineOffsetDays: 14
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A safe shapes card listing at least eight common risky foods and how to cut them is on the fridge and shared with every carer."
                cadence: one-shot
                effort_hours_estimate: "1"
              tasks:
                - "Read your health service's guidance on choking risks for young children"
                - "List the round and hard foods your household eats often"
                - "Write the safe preparation for each on a single card"
                - "Send a photo of the card to grandparents and babysitters"
            - name: Foods to hold back before the first birthday
              description: |-
                ## Purpose
                A short list of foods is unsuitable before twelve months: honey, added salt and sugar, whole nuts, rice drinks, fish high in mercury, raw shellfish, some unpasteurised cheeses and eggs not produced under a recognised safety scheme. Gathering your own health service's list in one place, and checking the cupboard against it, prevents the slips that happen when the baby eats from the family pot.

                ## Milestones
                1. Your health service's list of foods to avoid under twelve months copied into the feeding log.
                2. Stock cubes, sauces and snacks high in salt identified in the cupboard.
                3. Honey and honey-containing foods marked for other helpers.
                4. The list given to every adult who feeds the baby.

                ## Notes
                Cow's milk is fine in cooking from around six months but should not replace breast milk or formula as the main drink until twelve months.
              priority: high
              deadlineOffsetDays: 14
              frontmatter:
                mode: research
                output_kind: artifact
                success_criteria: "A written list of foods to avoid before twelve months, taken from your health service, is in the feeding log and in every carer's hands."
                cadence: one-shot
                effort_hours_estimate: "1"
              tasks:
                - "Copy your health service's list of foods to avoid before twelve months"
                - "Check the cupboard for stock cubes, sauces and snacks high in salt"
                - "Label anything containing honey so other helpers know to skip it"
                - "Add the list to the notes you give anyone who feeds the baby"
            - name: Milk feeds alongside solids timetable
              description: |-
                ## Purpose
                For the first months of solids, breast milk or first infant formula still provides most of a baby's nutrition, and food is about learning to eat. Planning where meals sit around milk feeds and naps, so the baby is interested but neither ravenous nor tired, makes the first spoonfuls far easier. As meals grow to three a day, the timetable shows where milk feeds naturally shrink.

                ## Milestones
                1. Current milk feeds and naps written down as a typical day.
                2. A slot for the first daily meal chosen, roughly an hour after a milk feed.
                3. Outline days drawn for two meals at around seven months and three meals by around ten months.
                4. The timetable checked with your health visitor if feeds or weight are a worry.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A written daily timetable places the first meal between milk feeds and naps, with outlines for two and three meals a day."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Write down a typical day of milk feeds and naps"
                - "Pick a time for the first daily meal when the baby is usually alert"
                - "Sketch how the day will look with two and then three meals"
                - "Ask your health visitor if milk intake drops faster than expected"
            - name: First fortnight of single vegetables
              description: |-
                ## Purpose
                Starting with vegetables, especially bitter ones such as broccoli, cauliflower, spinach and parsnip, before sweet fruit helps babies get used to flavours that are harder to accept later. A two week plan of one or two vegetables a day, in small amounts and without pressure, gives a clear start and stops the slide to banana and apple by day three.

                ## Milestones
                1. Fourteen days of vegetables written out, with green and bitter ones first.
                2. Each vegetable offered on at least two separate days.
                3. Amounts taken and any reactions noted in the feeding log.
                4. A list of vegetables accepted and those to offer again next month.

                ## Notes
                A face pulled at a new taste is surprise, not refusal. Many babies need eight or more tries before they accept a bitter vegetable.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Fourteen days of single vegetables have been offered and logged, ending with a written list of those accepted and those to retry."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Write a fourteen day list of single vegetables, bitter ones first"
                - "Buy enough of the first week's vegetables to steam and freeze"
                - "Offer each vegetable on at least two different days"
                - "List the vegetables accepted and those to offer again"
            - name: Weaning food and reaction log
              description: |-
                ## Purpose
                In the first months of solids every new food is a small experiment, and memory blurs after the third week. A simple log of what was offered, roughly how much, and any rash, tummy upset or change in nappies makes allergy questions answerable and gives your health visitor facts instead of impressions.

                ## Milestones
                1. A log set up with columns for date, food, texture, amount and any reaction.
                2. Every new food logged on the day it is first offered.
                3. Allergens marked so the date of each first introduction is easy to find.
                4. The log brought to every health appointment until the first birthday.

                ## Notes
                Start from the **Metrics log** template. A shared notes app works too, as long as everyone who feeds the baby can add to it.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: artifact
                success_criteria: "A feeding log shows every new food with its date and any reaction, with allergen introductions marked, until the first birthday."
                cadence: rolling
              tasks:
                - "Set up a log with date, food, texture, amount and reaction columns"
                - "Show other carers how to add a line when they feed the baby"
                - "Log each new food and any reaction the same evening @recurring(daily)"
                - "Highlight the date each allergen was first offered"
            - name: Eczema and allergy risk check before allergens
              description: |-
                ## Purpose
                Babies with severe eczema, an existing food allergy or a close relative with food allergy are at higher risk, and some health services advise these families to speak to a doctor before introducing peanut and egg. A short appointment before you start sets out whether allergens can go ahead at home, need testing first or should be introduced under supervision.

                ## Milestones
                1. Your baby's eczema history and the family's allergy history written on one page.
                2. A doctor's appointment booked if eczema is severe or an allergy is already known.
                3. A clear plan recorded: introduce at home, test first, or introduce under supervision.
                4. The plan written into the allergen introduction schedule.

                ## Notes
                Do not delay allergens out of caution without advice. For most babies, current evidence favours introducing them early in weaning rather than later.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A written decision on how allergens will be introduced, agreed with a doctor where eczema or allergy is present, is in the feeding log."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Write a one page summary of your baby's eczema and family allergy history"
                - "Book a doctor's appointment if eczema is severe or an allergy is known"
                - "Ask whether peanut and egg can be started at home"
                - "Record the plan and who agreed it"
            - name: Early allergen introduction schedule
              description: |-
                ## Purpose
                The common food allergens, such as egg, peanut, milk, wheat, sesame, fish, soya and tree nuts, can usually be introduced from around six months, one new one at a time, once a few first foods are going well. A written schedule, with a baby-safe form of each allergen and space between new ones, means allergens actually get introduced instead of being put off for months.

                ## Milestones
                1. A list of the allergens your health service suggests introducing, with a baby-safe form of each.
                2. An order and start dates set, leaving a few days between each new allergen.
                3. Each allergen first offered in a small amount, in the morning, on a day the baby is well.
                4. Every introduction and any reaction recorded in the feeding log.
                5. All listed allergens introduced, or a reason for any pause noted.

                ## Notes
                Peanut and tree nuts go in as smooth butter or finely ground, never whole. Call emergency services straight away for swelling of the lips or tongue, breathing difficulty or sudden floppiness.
              priority: high
              deadlineOffsetDays: 90
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Each common allergen on your health service's list has a recorded first introduction date, or a written reason for a pause."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "List each allergen with a baby-safe form, such as well-cooked egg or smooth peanut butter"
                - "Set an order and a start date for each allergen"
                - "Introduce the first allergen on a weekday morning when the baby is well"
                - "Mark each introduction and its outcome in the feeding log"
            - name: Sunday weaning menu plan
              description: |-
                ## Purpose
                Ten minutes on a Sunday deciding the week's baby meals, and which ones come from the family pot, prevents the daily scramble and the drift back to the same three foods. The plan also shows which new foods and allergens are due, and what needs moving from freezer to fridge the night before.

                ## Milestones
                1. A weekly grid of baby meals, split into family meals and baby-only portions.
                2. At least two new foods and the regular allergens placed in each week.
                3. Defrost reminders written beside the meals that need them.
                4. The plan used four weeks in a row.

                ## Notes
                Start from the **Weekly meal plan** template and add a row for the baby.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A baby menu with at least two new foods has been written every Sunday for four consecutive weeks."
                cadence: rolling
              tasks:
                - "Plan next week's baby meals and the new foods to try @recurring(weekly:sun)"
                - "Mark which baby meals come from the family dinner"
                - "Note which frozen portions need moving to the fridge each evening"
                - "Add the plan's ingredients to the household shopping list"
            - name: Batch cooking baby portions in ice-cube trays
              description: |-
                ## Purpose
                Steaming, blending and freezing a batch of vegetables, fruit and simple stews once a week turns a forty minute job into two minutes on a weekday evening. Ice-cube trays and small lidded pots let you mix flavours and grow the portion as appetite grows, without opening a jar.

                ## Milestones
                1. A weekly batch session set for a nap time or when a second adult is home.
                2. Four to six different purees or mashes frozen in lidded trays each week.
                3. Frozen cubes moved into bags labelled with food and date.
                4. A combinations list, such as lentil with carrot, written to speed up meal assembly.

                ## Notes
                Cool cooked food quickly and freeze it within a couple of hours. Defrost in the fridge overnight, reheat only once until steaming hot, then cool and stir well before serving.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "At least four kinds of labelled baby portions are frozen each week for four weeks running."
                cadence: rolling
              tasks:
                - "Choose a regular weekly slot for baby batch cooking"
                - "Steam, blend and freeze this week's batch in lidded trays @recurring(weekly:sat)"
                - "Transfer frozen cubes into bags labelled with food and date"
                - "Write a list of cube combinations that make a quick meal"
            - name: Baby freezer portion rotation
              description: |-
                ## Purpose
                A freezer drawer full of unlabelled orange cubes is a common sight by month three, and older portions get lost at the back. A monthly check, oldest to the front, keeps the stock safe to use and shows which foods are piling up because the baby has gone off them.

                ## Milestones
                1. One freezer drawer or shelf kept only for baby portions.
                2. Every bag labelled with contents and date.
                3. Portions past the time your freezer guide allows thrown out each month.
                4. A running list of the drawer's contents kept on the freezer door.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "The baby freezer drawer holds only labelled, in-date portions, checked on the same day each month for three months."
                cadence: rolling
              tasks:
                - "Clear one freezer drawer for baby portions only"
                - "Check dates and move the oldest portions to the front @recurring(monthly:5)"
                - "Keep a list of the drawer's contents on the freezer door"
                - "Stop batch cooking any food that keeps being left"
            - name: Iron-rich food at two meals a day
              description: |-
                ## Purpose
                Iron stores from birth start to run low around six months, which makes iron one of the nutrients that matters most at this stage. Building one iron source into at least two meals a day, such as meat, fish, eggs, lentils, beans or fortified cereal, paired with fruit or vegetables for vitamin C, covers it without counting anything.

                ## Milestones
                1. A list of ten iron-rich foods the household already eats.
                2. An iron source in two meals on most days.
                3. A vitamin C food served alongside plant sources of iron.
                4. Iron foods marked on the weekly menu plan.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "On at least five days a week for a month, two of the baby's meals contain an iron-rich food."
                cadence: rolling
              tasks:
                - "List ten iron-rich foods the household already buys"
                - "Include an iron source in two of the baby's meals @recurring(daily)"
                - "Pair lentils, beans and greens with a fruit or vegetable high in vitamin C"
                - "Highlight the iron foods on each week's menu plan"
            - name: Keeping allergens in the diet rota
              description: |-
                ## Purpose
                Once an allergen has been introduced without a problem, health services advise keeping it in the diet regularly, often about once or twice a week, rather than offering it once and forgetting. A simple rota puts each introduced allergen into the week without anyone having to remember which was served last.

                ## Milestones
                1. Every introduced allergen listed with three easy ways to serve it.
                2. Each allergen appearing on the weekly menu at least once.
                3. Gaps checked monthly and missed allergens brought back.
                4. The rota shared with nursery or other carers.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "For two months, every introduced allergen appears in the baby's meals at least once each week, with gaps noted and closed."
                cadence: rolling
              tasks:
                - "List every introduced allergen with three easy ways to serve it"
                - "Check the week's meals so far include each allergen @recurring(weekly:tue)"
                - "Review the past month for allergens that slipped @recurring(monthly:12)"
                - "Give nursery or grandparents a copy of the rota"
            - name: Vitamin drops daily routine
              description: |-
                ## Purpose
                Many health services advise vitamin drops for babies and young children, with the details depending on how much formula they drink and where you live. Getting a clear answer from your health visitor or pharmacist, then tying the drops to a moment that already happens every day, is what makes them stick.

                ## Milestones
                1. Your health visitor or pharmacist asked whether your baby needs drops and which kind.
                2. Drops bought, and any free vitamin scheme you qualify for checked.
                3. A fixed daily moment chosen for the drops.
                4. The need for drops rechecked at each routine development review.

                ## Notes
                Start from the **Habit tracker** template if a tick sheet helps. Follow the dose on the product or from your health visitor, and ask before combining products.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Professional advice on vitamin drops is recorded and, where advised, drops are given at a fixed time on at least 25 days a month."
                cadence: rolling
              tasks:
                - "Ask your health visitor or pharmacist whether your baby needs vitamin drops"
                - "Check whether you qualify for a free vitamin scheme"
                - "Give the vitamin drops at breakfast as advised @recurring(daily)"
                - "Recheck the advice at each routine development review"
            - name: Monthly new foods and variety tally
              description: |-
                ## Purpose
                Babies who meet a wide range of flavours and textures in their first year often accept more foods as toddlers, and the window when they try things readily does not last. Counting the different foods eaten each month, and setting a modest target for the next, keeps variety rising without pressure on any single meal.

                ## Milestones
                1. A running list of every food tasted, grouped into vegetables, fruit, proteins, starchy foods and dairy.
                2. A monthly count of new foods recorded.
                3. A target of five or more new foods set for the coming month.
                4. The weakest food group identified and given priority.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A food list grouped into five groups shows at least five new foods added in each of three consecutive months."
                cadence: rolling
              tasks:
                - "Start a list of every food tasted, sorted into five groups"
                - "Count the month's new foods and set next month's target @recurring(monthly:20)"
                - "Choose two foods from the weakest group for next week"
                - "Ask the agent to suggest vegetables in season this month to try next"
            - name: High chair and feeding kit cleaning routine
              description: |-
                ## Purpose
                Food dried into harness straps, tray hinges and cup valves grows mould quickly, and a sticky chair puts adults off finger foods altogether. A quick wipe after each meal plus a weekly strip-down of tray, straps and cups keeps the kit clean with little effort.

                ## Milestones
                1. A two minute after-meal wipe agreed by every adult who feeds the baby.
                2. Tray, straps and cup parts taken apart and washed weekly.
                3. Harness straps washed as the maker advises each month.
                4. Worn or mouldy cup valves and spoons replaced.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "The high chair tray, straps and cup parts are washed weekly for a month with no visible mould on any kit."
                cadence: rolling
              tasks:
                - "Agree a two minute after-meal wipe of tray, seat and floor mat"
                - "Take apart and wash the tray, straps and cup valves @recurring(weekly:wed)"
                - "Wash the harness straps the way the maker advises @recurring(monthly:15)"
                - "Replace any cup valve or spoon showing mould or cracks"
            - name: Monthly weaning stage review
              description: |-
                ## Purpose
                Weaning moves fast, from first tastes at six months to three meals of chopped family food by about a year. A fixed monthly look at texture, number of meals, finger foods and cup use spots where things have stalled before the stall becomes a habit.

                ## Milestones
                1. A one page checklist of stages: textures, meals a day, finger foods, cup and self-feeding.
                2. The checklist completed once a month.
                3. One next step chosen each month, such as lumpier mash or a third meal.
                4. Any stage stuck for two months raised with your health visitor.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A stage checklist has been completed monthly with one recorded next step each time, from the first month of solids to the first birthday."
                cadence: rolling
              tasks:
                - "Write a one page stage checklist for textures, meals, cup and self-feeding"
                - "Score this month's progress and choose one next step @recurring(monthly:26)"
                - "Raise any stage stuck for two months with your health visitor"
            - name: Texture progression from smooth to chopped
              description: |-
                ## Purpose
                Babies who stay on smooth purees past about eight or nine months can find lumps harder to accept later and may gag more. Moving through clear stages, from smooth to mashed with soft lumps, then minced and finely chopped, then family food cut small, builds chewing skill in step with development.

                ## Milestones
                1. Four texture stages described, with an example meal for each.
                2. Mashed food with soft lumps offered by around seven months.
                3. Minced and finely chopped food offered by around nine months.
                4. Chopped family food the main texture by the first birthday.

                ## Notes
                Gagging on a new texture is normal and usually settles within a couple of weeks. Persistent retching or refusal of every lump is worth mentioning to your health visitor.
              priority: medium
              deadlineOffsetDays: 120
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "The baby is eating mashed and minced textures daily, with each stage's start date recorded in the feeding log."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Write one example meal for each of the four texture stages"
                - "Mash this week's batch with a fork instead of blending it"
                - "Offer one lumpier meal a day and note how it goes"
                - "Move to minced and chopped food once soft lumps are managed"
            - name: Soft finger foods preparation techniques
              description: |-
                ## Purpose
                Finger foods let a baby practise grasping, chewing and feeding themselves, but only if they are the right size and softness. A handful of techniques, such as steaming vegetable sticks until squashable, roasting wedges, baking omelette strips and cutting toast fingers, gives a reliable finger food at every meal.

                ## Milestones
                1. Five preparation methods tried: steaming, roasting, baking, poaching and simple cutting.
                2. Early finger foods cut to about the length of an adult finger so a small fist can grip them.
                3. Each food passing the squash test before serving.
                4. A list of ten reliable finger foods kept by the cooker.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A written list of ten finger foods the baby manages, each prepared and squash-tested at least twice, is kept in the kitchen."
                cadence: phased
                effort_hours_estimate: "5"
              tasks:
                - "Steam carrot and sweet potato sticks until they squash between finger and thumb"
                - "Bake a tray of omelette strips with grated vegetables"
                - "Cut toast and pancakes into finger-length strips"
                - "Write a list of ten finger foods your baby manages"
            - name: Flavour without salt or sugar for baby food
              description: |-
                ## Purpose
                Salt is hard on a baby's kidneys and early sugar habits are hard to undo, but baby food does not have to be bland. Herbs, mild spices, garlic, onion, citrus zest and roasting all add flavour, and babies who meet varied seasoning often take to family food sooner.

                ## Milestones
                1. Five unsalted seasonings tried in baby food, such as cumin, cinnamon, garlic, dill and lemon zest.
                2. Two family recipes changed so salt is added only after the baby's portion is taken out.
                3. Standard stock cubes replaced with a low-salt or homemade stock for baby meals.
                4. Flavours the baby enjoyed noted in the feeding log.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Five seasonings have been tried in baby meals and two family recipes rewritten so the baby's portion is unsalted."
                cadence: phased
                effort_hours_estimate: "3"
              tasks:
                - "Add a pinch of one mild spice to this week's batch"
                - "Rewrite two family recipes so salt goes in after the baby's portion comes out"
                - "Make or buy a low-salt stock for baby meals"
                - "Note which herbs and spices the baby enjoys"
            - name: Building a balanced baby plate
              description: |-
                ## Purpose
                By around nine to twelve months, meals should cover several food groups rather than one puree. The simple pattern of a starchy food, a protein, a vegetable or fruit and full-fat dairy across the day makes planning automatic, without weighing or counting.

                ## Milestones
                1. The four food groups and baby-friendly examples written on one card.
                2. Each main meal containing at least three of the groups.
                3. Full-fat versions chosen for yogurt, cheese and milk used in cooking.
                4. A week of meals checked against the card and gaps filled.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A week of the baby's main meals has been checked against a food group card, with at least three groups in each meal."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Write the four food groups with five baby-friendly examples each"
                - "Check three days of meals against the four groups"
                - "Swap low-fat dairy for full-fat versions on the shopping list"
                - "Fill the food group gaps in next week's baby menu"
            - name: Responsive feeding and fullness cues
              description: |-
                ## Purpose
                Most babies know when they have had enough, and pressing one more spoonful teaches them to ignore that signal. Learning to read hunger cues, such as leaning in and opening the mouth, and fullness cues, such as turning away, closing the lips and pushing the spoon, lets the baby lead, which keeps meals calm and appetite honest.

                ## Milestones
                1. Five hunger cues and five fullness cues written on a card by the high chair.
                2. Every adult who feeds the baby agreeing to stop at the first clear fullness sign.
                3. Games such as aeroplane spoons and screens dropped from mealtimes.
                4. Two meals observed and the cues noted.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A hunger and fullness cue card is by the high chair and every regular carer has agreed to stop feeding at the first clear fullness cue."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Write five hunger and five fullness cues on a card"
                - "Watch two meals and note the cues your baby gives"
                - "Agree with other carers to stop at the first clear fullness cue"
                - "Take screens and distraction games out of mealtimes"
            - name: Spoon and fork self-feeding practice
              description: |-
                ## Purpose
                Using a spoon develops slowly between about nine months and two years, and lots of messy practice is the only way there. Preloading spoons, offering thick foods that cling and letting the toddler hold their own spoon while you use another turns meals into practice without hunger getting in the way.

                ## Milestones
                1. A toddler-sized spoon and short-handled fork bought.
                2. A preloaded spoon handed over at one meal a day.
                3. Thick, clingy foods such as porridge, yogurt and mash used for spoon practice.
                4. Your child bringing a loaded spoon to the mouth unaided.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "The child loads a spoon and brings it to the mouth unaided at most meals, with the date first seen recorded."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Buy a toddler spoon and short-handled fork"
                - "Preload a spoon with porridge or yogurt and hand it over"
                - "Let your toddler hold one spoon while you feed with another"
                - "Note the date your child first loads the spoon unaided"
            - name: Shop-bought pouches, jars and baby snacks
              description: |-
                ## Purpose
                Ready-made baby foods are useful for travel and tired days, but pouches are often sweet fruit blends sucked through a spout, which skips spoon and chewing practice, and some baby snacks carry more sugar than the front of the pack suggests. Comparing labels and agreeing house rules for when to use them keeps the convenience without letting it take over.

                ## Milestones
                1. Labels of five products you might buy compared for sugar, salt and vegetable content.
                2. Claims such as no added sugar checked against the ingredients list.
                3. House rules agreed, such as pouches squeezed onto a spoon and kept for travel.
                4. Two or three ready-made products chosen as backups.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "Written house rules for ready-made baby food exist, with two or three chosen backup products compared on their labels."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Compare the labels of five baby foods you might buy"
                - "Check the ingredients order against claims on the front of the pack"
                - "Agree when ready-made baby food is used in your house"
                - "Keep two backup products in the changing bag"
            - name: Family dinners adapted into baby portions
              description: |-
                ## Purpose
                Cooking separate baby meals forever is exhausting, and babies learn by eating what they see others eat. Adapting family recipes, taking the baby's portion out before salt, chilli or stock cubes go in and then mashing or cutting it to their stage, means one dinner feeds everyone from around nine months.

                ## Milestones
                1. Five regular family dinners identified that can be adapted.
                2. The point where the baby's portion comes out marked on each recipe.
                3. Each adapted dinner served to the baby at least once.
                4. At least three family dinners a week shared with the baby.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Five family recipes are marked with the point where the baby's portion is taken out, and three shared dinners a week are the norm."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Choose five family dinners that could suit the baby"
                - "Mark on each recipe where the baby's portion comes out"
                - "Serve one adapted family dinner to the baby this week"
                - "Sit down to a shared dinner alongside the baby @recurring(weekly:thu)"
            - name: Milk and drinks plan from twelve months
              description: |-
                ## Purpose
                Around the first birthday, most health services suggest whole cow's milk or another suitable milk as the main milk drink, water between meals, and say follow-on and toddler milks are not needed. Deciding the switch with your health visitor, along with how much milk fits beside three meals, stops milk filling a toddler up and crowding out iron-rich food.

                ## Milestones
                1. Advice on switching to cow's milk or an alternative obtained from your health visitor.
                2. A plan agreed for breastfeeding, formula or cow's milk after twelve months.
                3. Water in an open cup as the drink between meals, with juice and squash kept out of the daily routine.
                4. Daily milk intake checked against what your health visitor suggested.

                ## Notes
                If dairy is not an option, ask which unsweetened, calcium-fortified plant milks suit a toddler. Rice drinks are not suitable for young children.
              priority: medium
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A written milk and drinks plan for after twelve months, agreed with your health visitor, is in place and followed for a month."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Ask your health visitor about the switch to whole cow's milk at twelve months"
                - "Decide the plan for breastfeeding or formula after the first birthday"
                - "Offer water in an open cup with every meal and snack"
                - "Note daily milk intake for a week after the switch"
            - name: Bottle to open cup changeover
              description: |-
                ## Purpose
                Health services generally advise moving from bottles to an open or free-flow cup by around the first birthday, since long bottle use is linked to tooth decay and to milk crowding out meals. Phasing bottles out one feed at a time, starting with the easiest, makes the change gradual rather than a battle.

                ## Milestones
                1. An open or free-flow cup offered at meals from around six months.
                2. Daytime bottles replaced by a cup one feed at a time.
                3. The bedtime bottle dropped last, with teeth brushed after the final milk.
                4. No bottles in use by around twelve to fifteen months.
              priority: low
              frontmatter:
                mode: building
                output_kind: habit
                success_criteria: "All bottles have been replaced by an open or free-flow cup, with the date the last bottle was dropped recorded."
                cadence: phased
                effort_hours_estimate: "3"
              tasks:
                - "Buy an open or free-flow cup without a valve"
                - "Replace the easiest daytime bottle with a cup this week"
                - "Swap one more bottle each week until only bedtime remains"
                - "Give away or pack up the bottles once the last one is dropped"
            - name: Vegetarian or vegan weaning with professional input
              description: |-
                ## Purpose
                Vegetarian and well-planned vegan weaning both work, but small stomachs must still get enough energy, protein, iron, zinc, vitamin B12, iodine and omega-3 fats. Agreeing the plan with your health visitor or a paediatric dietitian, and choosing fortified foods and suitable supplements, avoids gaps that only show up months later.

                ## Milestones
                1. A list of the nutrients that need planning on your chosen diet.
                2. A review with your health visitor or a dietitian booked and held.
                3. Fortified foods and any supplements agreed and bought.
                4. A week of meals checked for iron, protein and energy-dense foods.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A plant-based weaning plan reviewed by a health visitor or dietitian is written down, with agreed fortified foods and supplements in use."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "List the nutrients that need care on a plant-based weaning diet"
                - "Book a review with your health visitor or a paediatric dietitian"
                - "Buy the fortified foods and supplements agreed at the review"
                - "Check one week of meals for iron, protein and energy"
            - name: Introducing your family's home cuisine early
              description: |-
                ## Purpose
                Weaning guides often assume a narrow range of Western foods, yet babies everywhere start on dal, congee, mashed plantain, soft ugali and gentle stews. Adapting the dishes your family actually eats, with spices kept mild and salt left out, means the baby grows up on your food and grandparents can cook for them with confidence.

                ## Milestones
                1. Five home dishes chosen that can be adapted for a baby.
                2. Each dish made without salt or hot chilli, at a texture matched to the baby's stage.
                3. Older relatives asked about traditional first foods in your family.
                4. Three home dishes in the baby's regular rotation.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Three adapted home dishes are written down with their baby changes and served to the baby at least weekly."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Ask an older relative which foods babies first ate in your family"
                - "Choose five home dishes to adapt for the baby"
                - "Cook one adapted home dish this week without salt or hot chilli"
                - "Add the dishes that worked to the batch cooking list"
            - name: Toddler meals and snacks timetable
              description: |-
                ## Purpose
                Toddlers do best with three meals and two or three planned snacks at roughly the same times each day, rather than grazing. A timetable built around naps and nursery hours means a toddler arrives at meals hungry, and snacks become small planned meals rather than packets on demand.

                ## Milestones
                1. Three meals and two snacks placed around naps and nursery hours.
                2. Gaps of roughly two to three hours between eating times.
                3. A list of ten planned snacks, such as fruit, cheese, toast or yogurt.
                4. The timetable shared with nursery and other carers.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A written daily eating timetable with three meals, two snacks and a ten-item snack list is shared with every carer."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Map naps and nursery hours on a typical weekday and weekend day"
                - "Place three meals and two snacks two to three hours apart"
                - "Write a list of ten planned toddler snacks"
                - "Give the timetable to nursery and anyone who looks after your toddler"
            - name: Twelve family dinners a toddler can share
              description: |-
                ## Purpose
                In the second year a toddler can eat almost everything the family eats, cut small and with salt kept low. Building a list of twelve dinners that work for adults and toddler alike, tested and liked, retires the separate toddler tea and makes eating together the default.

                ## Milestones
                1. Twelve dinners chosen that suit adults and a toddler with small changes.
                2. Each tested with the toddler at least once.
                3. The toddler change for each written on the recipe, such as chilli served on the side.
                4. At least four shared family dinners a week on most weeks.
              priority: medium
              deadlineOffsetDays: 60
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A list of twelve family dinners, each tested with the toddler and annotated with its toddler change, is in use."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Write a list of twelve dinners the family already likes"
                - "Note the toddler change each dinner needs"
                - "Test one new shared dinner with the toddler @recurring(weekly:fri)"
                - "Swap out dinners that still fail after several tries"
            - name: Toddler portion sizes guide
              description: |-
                ## Purpose
                Toddler portions are much smaller than most adults expect, often a quarter to a half of an adult serving, and appetite swings widely from day to day. A visual guide using your own bowls ends the worry about a toddler who seems to eat nothing and stops plates being overfilled.

                ## Milestones
                1. Typical portions for each food group checked against a published toddler portion guide.
                2. Portions served in your toddler's own bowl and plate and photographed for reference.
                3. A week of eating noted to see the pattern across days, not single meals.
                4. Portion worries discussed with your health visitor if growth is a concern.
              priority: low
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "Photos of typical toddler portions in your own dishes are saved, alongside a week of intake compared with a published guide."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Find a published portion guide for children aged one to four"
                - "Serve and photograph typical portions in your toddler's bowl"
                - "Note what your toddler eats across a whole week"
                - "Compare the week's pattern with the guide"
            - name: Toddler appetite dips and the growth record
              description: |-
                ## Purpose
                Growth slows sharply after the first year and many toddlers eat noticeably less from around eighteen months, which alarms parents who remember a hungry baby. Going through the growth chart in your child's health record with your health visitor is the reliable way to tell a normal dip from something worth looking into.

                ## Milestones
                1. Recent weight and length measurements found in your child's health record.
                2. The growth chart reviewed with your health visitor or doctor.
                3. A note of what normal looks like for your child kept with the record.
                4. Warning signs agreed, such as weight falling across centile lines, with who to contact.
              priority: medium
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "The growth chart has been reviewed with a health professional and the agreed warning signs and contact are written in the record."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Find your child's last three weight and length measurements"
                - "Ask your health visitor to go through the growth chart with you"
                - "Write down the signs that would need a doctor's review"
                - "Note when the next routine weighing is due"
            - name: Nursery or childminder food handover
              description: |-
                ## Purpose
                Starting nursery or a childminder often lands in the middle of weaning, and a new setting can undo progress if staff do not know the baby's stage, the allergens introduced and how they like to eat. A one-page food handover, plus a look at the setting's menu and allergy procedure, gets everyone feeding the same way from the first day.

                ## Milestones
                1. The setting's menu, allergy procedure and food policy read.
                2. A one-page handover written: stage, textures, allergens introduced, foods to avoid and cues.
                3. The handover discussed with the key worker before the first full day.
                4. A check-in on how meals are going booked for four weeks in.
              priority: medium
              frontmatter:
                mode: event
                output_kind: deliverable
                success_criteria: "A one-page food handover has been discussed with the key worker before the first full day, with a four-week check-in arranged."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Ask the nursery or childminder for their menu and allergy procedure"
                - "Ask the agent to draft a one-page food handover from your feeding log"
                - "Go through the handover with the key worker before the first full day"
                - "Check after four weeks how mealtimes are going there"
            - name: Eating out and travelling with a weaning baby
              description: |-
                ## Purpose
                Day trips, restaurant meals and holidays test every weaning routine: no freezer, no blender and unfamiliar food. Planning the food side, from cool bags and safe snacks to what to order from a menu, makes the trip relaxed rather than a week of pouches.

                ## Milestones
                1. A food kit packed: bib, spoons, cup, wipes, a cool bag and safe snacks.
                2. Menu dishes that adapt easily for the baby identified, such as plain pasta, vegetables and fish.
                3. A plan for keeping food cool and reheating it safely on the way.
                4. Foods to avoid and allergen notes written in the local language if travelling abroad.

                ## Notes
                Start from the **Trip** template and add the food kit to its packing list.
              priority: low
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A trip with the baby has been completed using a packed food kit and a written plan for meals and safe storage."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Pack a travel food kit with a cool bag, cutlery, cup and bib"
                - "List the menu dishes that adapt easily for the baby"
                - "Plan how food will be kept cool and reheated while travelling"
                - "Translate the baby's food notes if travelling abroad"
            - name: First birthday food plan
              description: |-
                ## Purpose
                First birthday parties are mostly for the adults, but the food still has to work for a one-year-old and the other babies and toddlers coming. Planning a menu with safe finger foods, a cake the birthday child can actually eat and labels for common allergens keeps the day easy and the small guests safe.

                ## Milestones
                1. A guest list with the ages and known allergies of children attending.
                2. A menu with safe finger foods for the little ones and a spread for adults.
                3. A cake chosen or baked, with a lower-sugar option for the youngest guests.
                4. Dishes labelled for common allergens and choking risks kept off the children's table.
              priority: low
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "The first birthday party is held with a written menu, allergen labels on dishes and no high choking risk foods on the children's table."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Ask parents of invited children about allergies"
                - "Plan a finger food menu that suits babies and toddlers"
                - "Choose or bake a cake with a lower-sugar option for little ones"
                - "Label dishes for common allergens on the day"
            - name: One-year development review food questions
              description: |-
                ## Purpose
                The routine development review around the first birthday is short, and food questions often get squeezed out by sleep and walking. Arriving with the feeding log up to date, a summary of textures and allergens, and three written questions makes the appointment count.

                ## Milestones
                1. The appointment date noted and the feeding log brought up to date.
                2. A short summary written: textures eaten, meals a day, allergens introduced and any reactions.
                3. Three questions written in priority order.
                4. The answers and any follow-up recorded.
              priority: medium
              frontmatter:
                mode: event
                output_kind: deliverable
                success_criteria: "A food summary and three questions were taken to the one-year review, and the answers are recorded in the feeding log."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Note the date of the one-year development review"
                - "Write a summary of textures, meals and allergens so far"
                - "Write your three most important food questions"
                - "Record the answers and any referral after the appointment"
            - name: Weaning a premature baby by corrected age
              description: |-
                ## Purpose
                Premature babies are often started on solids according to their corrected age rather than their birth date, but the right moment varies with how early they arrived and how they are developing. Agreeing the plan with the neonatal team or health visitor, and watching for readiness rather than a calendar date, gives a baby born early the best start with food.

                ## Milestones
                1. Corrected age worked out and written in the feeding log.
                2. Advice on when to start obtained from the neonatal team or health visitor.
                3. Any extra nutrients or follow-up appointments recorded.
                4. Readiness signs checked against the advice before the first meal.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A start plan for solids agreed with the neonatal team or health visitor, based on corrected age and readiness, is written down."
                cadence: phased
                effort_hours_estimate: "3"
              tasks:
                - "Work out your baby's corrected age from due date and birth date"
                - "Ask the neonatal team or health visitor when to start solids"
                - "Write down any supplements or follow-up appointments advised"
                - "Check the readiness signs before the agreed start date"
            - name: Weaning twins or babies close in age
              description: |-
                ## Purpose
                Twins double the bowls, the mess and the time at the table, and they rarely reach each stage on the same day. A set-up with two chairs within one adult's reach, larger batch quantities and a separate log for each baby keeps both moving at their own pace without doubling the work.

                ## Milestones
                1. Two high chairs positioned so one adult can reach both.
                2. Batch quantities scaled up, with portions labelled per baby where needs differ.
                3. A separate column for each baby in the feeding log.
                4. Allergens introduced to each baby on their own schedule.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Both babies have their own log columns and allergen schedules, and one adult can feed both from a single seat."
                cadence: phased
                effort_hours_estimate: "3"
              tasks:
                - "Arrange two high chairs so one adult can reach both"
                - "Double the batch cooking quantities and buy extra trays"
                - "Split the feeding log into a column for each baby"
                - "Plan allergen introductions separately for each baby"
            - name: Weaning across two homes and grandparent care
              description: |-
                ## Purpose
                When a baby eats at a grandparent's, a co-parent's home or with a nanny, mixed messages about salt, honey, textures and allergens are common, usually with the best intentions. A short shared guide and a monthly update keep every kitchen consistent and avoid arguments about whose rules apply.

                ## Milestones
                1. A two-page guide covering foods to avoid, safe shapes, current textures and allergens introduced.
                2. The guide talked through with every regular carer, not just sent.
                3. A monthly update sent as the baby moves stages.
                4. Carers' questions answered and added to the guide.
              priority: medium
              frontmatter:
                mode: service
                output_kind: deliverable
                success_criteria: "Every regular carer has the current two-page food guide and has received a monthly update for the last three months."
                cadence: rolling
              tasks:
                - "Write a two-page food guide for other carers"
                - "Talk the guide through with each grandparent or carer in person"
                - "Send carers an update on stage, textures and new allergens @recurring(monthly:9)"
                - "Add any question a carer asks to the guide"
            - name: Weaning a second baby with a toddler at the table
              description: |-
                ## Purpose
                Second babies are often weaned at a busy family table, with a toddler sharing snacks, whole grapes rolling off plates and less time for purees. Planning around the older child, with a simple rule about sharing food and a family-food approach for the baby, makes it work.

                ## Milestones
                1. Toddler foods that are a choking risk for the baby kept off shared surfaces.
                2. A simple rule for the older child about not feeding the baby.
                3. Most baby meals taken from family dinners rather than cooked separately.
                4. The older child given a mealtime job, such as handing out spoons.
              priority: low
              frontmatter:
                mode: building
                output_kind: habit
                success_criteria: "The toddler's snacks have been checked for baby choking risks and most of the baby's meals come from the family dinner."
                cadence: phased
                effort_hours_estimate: "2"
              tasks:
                - "Check the toddler's snacks for foods unsafe for the baby"
                - "Agree a simple rule with the toddler about not feeding the baby"
                - "Plan baby meals from the family dinner for the next week"
                - "Give the older child a small mealtime job"
            - name: Returning to work mid-weaning
              description: |-
                ## Purpose
                Going back to work while a baby is between six and twelve months reshapes milk feeds, mealtimes and who cooks. Planning milk and meals around the new hours, whether that means expressing, formula at nursery or a carer feeding solids, keeps progress going through the change.

                ## Milestones
                1. A new daily timetable for milk and meals based on working hours.
                2. Arrangements for milk feeds during work hours agreed with your employer and carer.
                3. Two weeks of batch-cooked meals in the freezer before the first day back.
                4. The nursery menu checked each week against what the baby eats at home.
              priority: medium
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A working-day milk and meals timetable is agreed with your employer and carer, and two weeks of meals are frozen before you return."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Draft the daily milk and meal timetable for working days"
                - "Agree milk feed arrangements with your employer and childcare"
                - "Freeze two weeks of baby meals before your first day back"
                - "Look at the nursery's menu for the coming week @recurring(weekly:mon)"
            - name: Reaction action plan and allergy clinic preparation
              description: |-
                ## Purpose
                Rashes after egg or vomiting after milk are frightening, and what happens next depends on getting the details down quickly. Knowing which signs need an ambulance and which need a same-day doctor, recording the reaction properly and preparing for any allergy clinic referral turns a scary moment into a clear process.

                ## Milestones
                1. Emergency signs written by the high chair: swollen lips or tongue, breathing difficulty, pale and floppy.
                2. A reaction record ready: food, amount, time, symptoms, photos and how long they lasted.
                3. The suspected food paused until a doctor has advised.
                4. Any allergy clinic appointment prepared for with the log and photos.
                5. The clinic's advice written into the allergen plan.

                ## Notes
                If an allergy is diagnosed, label checking and cross-contamination rules for the whole kitchen become their own piece of work, worth setting up properly.
              priority: high
              frontmatter:
                mode: research
                output_kind: artifact
                success_criteria: "An emergency signs card is posted by the high chair and a reaction record template is ready, with any clinic advice added to the allergen plan."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Write the emergency allergy signs on a card by the high chair"
                - "Set up a reaction record with time, food, amount, symptoms and photos"
                - "Pause any suspected food until your doctor advises"
                - "Bring the log and photos to any allergy clinic appointment"
                - "Review the emergency card as your child grows @recurring(yearly)"
            - name: Growth concerns and paediatric dietitian review
              description: |-
                ## Purpose
                If weight drops across centile lines, a baby eats very little solid food by nine or ten months, or feeding is a constant struggle, your health visitor may suggest a paediatric dietitian. Arriving with three days of food records, the growth chart and specific questions makes the most of appointments that are often short and hard to get.

                ## Milestones
                1. Three days of food and milk recorded in detail before the appointment.
                2. Growth measurements and the chart gathered.
                3. Questions written in order of importance.
                4. The dietitian's plan written down with a review date.
              priority: medium
              frontmatter:
                mode: research
                output_kind: deliverable
                success_criteria: "A three-day food record and question list were taken to the dietitian, and the resulting plan and review date are in the feeding log."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Record three full days of food and milk, including amounts left"
                - "Gather the growth chart and recent measurements"
                - "Write your questions for the dietitian in order of importance"
                - "Copy the dietitian's plan and review date into the feeding log"
            - name: Persistent gagging or texture refusal referral
              description: |-
                ## Purpose
                Gagging usually fades within weeks, but a baby who still gags or vomits on every lump at ten or eleven months, struggles to chew or coughs during drinks may need assessment by a feeding specialist such as a speech and language therapist. Recording what happens and asking for a referral early means help arrives before meals become a battle.

                ## Milestones
                1. Two weeks of observations recorded: textures, gagging, vomiting and coughing during meals.
                2. Short videos of typical meals taken to show a professional.
                3. Concerns raised with your health visitor or doctor and a referral discussed.
                4. Advice from any specialist assessment added to the texture plan.
              priority: low
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "Two weeks of mealtime observations and videos have been reviewed with a health professional and a referral decision recorded."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Note for two weeks which textures cause gagging, coughing or vomiting"
                - "Film two short clips of typical meals"
                - "Ask your health visitor or doctor about a feeding assessment"
                - "Add the specialist's advice to your texture plan"
            - name: Tested weaning and toddler recipe book
              description: |-
                ## Purpose
                After a year of weaning, most families have a couple of dozen recipes that reliably work, scattered across screenshots, notes and memory. Collecting them with ages, textures and freezing notes creates a book you will use for a second child, hand to carers and pass to friends who are just starting.

                ## Milestones
                1. Every recipe that worked gathered into one document or notebook.
                2. Each recipe tagged with the age it suits, texture, allergens and whether it freezes.
                3. At least twenty recipes tested more than once.
                4. The book shared with carers and kept for a future baby.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A recipe book of at least twenty tested recipes, each tagged with age, texture, allergens and freezing notes, is shared with carers."
                cadence: rolling
              tasks:
                - "Gather the recipes that worked into one document"
                - "Tag each with age, texture, allergens and freezing notes"
                - "Add the month's most successful new recipe @recurring(monthly:28)"
                - "Share a copy with the grandparents and other carers"
---

# Baby Weaning & Toddler Meals

This area is for parents and carers taking a baby from first tastes at around six months to a toddler who eats from the family pot. It starts with the foundations (readiness signs, purees or baby-led weaning, a high chair, choking first aid, safe shapes, foods to hold back, milk feeds and the first allergens), then the weekly and monthly routines that keep weaning moving, the skills of textures, finger foods and responsive feeding, the decisions about pouches, milk, cups and family dinners, the events of nursery, travel and the first birthday, situations such as prematurity, twins or a return to work, and finally the specialist work of reactions, growth reviews and feeding referrals.

What repeats is a Sunday menu plan, a Saturday batch cook, an evening line in the feeding log, daily iron and vitamin drops, a Tuesday allergen check, a freezer check on the 5th, carer updates on the 9th, a variety count on the 20th and a stage review on the 26th. The Purchase decision, Metrics log, Weekly meal plan, Habit tracker and Trip templates pair with the projects that name them. Installing adds all 50 projects as active, so archive the ones that are not for you yet.
