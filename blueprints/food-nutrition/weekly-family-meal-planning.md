---
id: food-nutrition.weekly-family-meal-planning
name: Weekly Family Meal Planning
description: "A weekly planning slot that fits the household's real schedule, a dinner list everyone eats, leftovers and fallbacks built in, and plans that bend for shift work, school holidays, guests and two homes."
category: personal
version: 1.0.0
tags: [food-nutrition, weekly-family-meal-planning, parent, everyone, meal-plan, dinner-rotation, leftovers, family-schedule]
author: Aurum Technology
starter_structure:
  templates:
    - weekly-meal-plan
    - purchase-decision
    - trip
    - metrics-log
  pillars:
    - name: Food & Nutrition
      emoji: "🥗"
      description: "What gets eaten, and how it gets to the table: meal planning, shopping and batch cooking, dietary needs and goals, cooking skill as a lifelong craft, and the food rituals that hold a household together."
      pillarFrontmatter:
        review_cadence: monthly
      areas:
        - name: Weekly Family Meal Planning
          description: "Planning the week's breakfasts, lunches and dinners around schedules, tastes and leftovers so the household always knows what is for dinner."
          projects:
            - name: Household week schedule map for mealtimes
              description: |-
                ## Purpose
                Before any recipe is chosen, the plan has to fit the week as it is actually lived: late meetings, swimming lessons, the night one parent works until eight. Mapping who is home for each meal and how long there is to cook each evening turns meal planning from guesswork into filling known gaps.

                ## Milestones
                1. A seven-day grid showing who eats at home for breakfast, lunch and dinner each day.
                2. Every fixed commitment that moves dinner time marked, such as clubs, shifts and late meetings.
                3. Each evening labelled as a 15, 30 or 60 minute cooking night.
                4. The grid kept where every adult in the household can see it.

                ## Notes
                Map a typical week, not an ideal one. If two weeks alternate, for example because of shift patterns or custody arrangements, draw both grids.
              priority: high
              deadlineOffsetDays: 7
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A seven-day household grid exists showing who eats at home at each meal and how much cooking time each evening allows."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Write down every regular evening commitment for each household member"
                - "Mark which dinners each person is home for across a typical week"
                - "Label each evening as a 15, 30 or 60 minute cooking night"
                - "Pin the finished grid on the fridge or in the shared family calendar"
            - name: Family food likes, dislikes and needs register
              description: |-
                ## Purpose
                Plans fail most often because a dinner lands that one person will not eat. A one-page register of every household member's favourites, hard refusals, allergies, religious or ethical rules and rough portion size makes each week's choices faster and stops the same argument repeating every Tuesday.

                ## Milestones
                1. One entry per household member listing favourites, refusals and portion size.
                2. Every allergy, intolerance and religious or ethical food rule recorded and confirmed with the person, or their parent.
                3. At least five dinners marked as eaten happily by everyone.
                4. The register dated, with a quarterly review in the calendar.

                ## Notes
                Keep hard refusals and medical needs separate from mild dislikes, or the list of acceptable dinners shrinks to five. Diagnosed allergies and conditions go at the top of each entry, never at the bottom.
              priority: high
              deadlineOffsetDays: 10
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A dated register lists every household member's favourites, refusals and dietary needs, with at least five dinners marked as eaten by everyone."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Ask each household member for three favourite dinners and three they refuse"
                - "Record every allergy, intolerance and religious or ethical food rule"
                - "Mark the dinners that everyone in the house eats without complaint"
                - "Update the register with new likes, refusals and needs @recurring(quarterly)"
            - name: Choosing where the family meal plan lives
              description: |-
                ## Purpose
                A plan nobody can see is a plan nobody follows. Deciding between a kitchen whiteboard, a printed sheet, a shared note or a dedicated app, based on who needs to read it and from where, settles the question once so the weekly session always has a home.

                ## Milestones
                1. Three formats compared on who reads the plan, from where, and whether it links to a shopping list.
                2. One format chosen and set up with seven days and three meal slots.
                3. Every adult in the household able to open and edit it.
                4. The first week of meals entered in the chosen format.

                ## Notes
                Start from the **Weekly meal plan** template. Households with teenagers or a second home usually do better with something on a phone; families with young children often keep a paper copy on the fridge as well.
              priority: high
              deadlineOffsetDays: 14
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "One agreed place holds the weekly meal plan, and every adult in the household has opened or edited it at least once."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "List who needs to read the plan and where they are when they check it"
                - "Compare a whiteboard, a shared note and one meal planning app against that list"
                - "Set up the chosen format with seven days and three meal slots"
                - "Show every adult how to open and edit the plan"
            - name: Who plans, who shops, who cooks agreement
              description: |-
                ## Purpose
                In many households one person carries the whole mental load of deciding dinner, every day, and resents it quietly. Agreeing out loud who chooses the meals, who writes the list, who buys and who cooks on which nights spreads the work and gives the plan more than one owner.

                ## Milestones
                1. Every job between deciding dinner and clearing the table listed.
                2. Each job assigned to a named person and specific nights.
                3. A cover rule agreed for when the usual cook is away or ill.
                4. The split reviewed once after four weeks and adjusted.

                ## Notes
                Count the invisible jobs too: checking the calendar, noticing the milk is low and remembering a child's club night are all part of planning.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A written split of planning, shopping and cooking duties by person and night exists and has been reviewed once after four weeks."
                cadence: one-shot
                effort_hours_estimate: "1"
              tasks:
                - "List every job between deciding dinner and clearing the table"
                - "Agree who owns each job and on which nights"
                - "Decide who steps in when the usual cook is away or ill"
                - "Put a check-in on the calendar four weeks from now to adjust the split"
            - name: Starter list of twenty family dinners
              description: |-
                ## Purpose
                Most households cycle through fewer than a dozen dinners without realising it, then stall when asked what to cook. Writing down twenty dinners the family already eats, tagged with cooking time and main ingredient, gives every planning session a menu to pick from instead of a blank page.

                ## Milestones
                1. Twenty dinners the household already eats written in one list.
                2. Each dinner tagged with its cooking time and main ingredient.
                3. At least five dinners marked as on the table within 20 minutes.
                4. The list stored next to the weekly plan.
              priority: high
              deadlineOffsetDays: 14
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A list of twenty dinners the household already eats, each tagged with cooking time and main ingredient, sits next to the meal plan."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Look back through recent shopping orders and photos to list dinners you actually cooked"
                - "Ask each family member to add two dinners they would happily eat again"
                - "Tag every dinner with its cooking time and main ingredient"
                - "Mark at least five dinners that reach the table within 20 minutes"
            - name: First fully planned week of dinners
              description: |-
                ## Purpose
                Planning feels heavy until it has been done once from start to finish. A single complete week, seven dinners matched to the schedule map and the starter list with the ingredients bought in one go, shows how much daily decision-making disappears and where the system needs adjusting.

                ## Milestones
                1. Seven dinners chosen, each matched to that night's cooking time.
                2. The week's ingredients written in one list and bought.
                3. Each dinner ticked as cooked, swapped or skipped.
                4. A short note written on what to change for week two.

                ## Notes
                Start from the **Weekly meal plan** template. Leave one night as leftovers or a fallback in the first week; a plan with no slack breaks on the first late train.
              priority: high
              deadlineOffsetDays: 10
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "Seven dinners planned in advance and at least five cooked as planned, with a written note on what to change next week."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Choose seven dinners that match each night's cooking time on the schedule map"
                - "Write the ingredient list for the whole week in one sitting"
                - "Tick off each dinner as cooked, swapped or skipped"
                - "Write three lines on what to change for week two"
            - name: Fallback dinners for nights the plan collapses
              description: |-
                ## Purpose
                Every plan meets a night when the meeting overruns, a child is sick or the chicken turns out to be past its date. Four agreed fallback dinners made only from cupboard and freezer staples, such as a tin-based pasta, eggs on toast or a jacket potato night, stop that evening becoming a takeaway by default.

                ## Milestones
                1. Four fallback dinners agreed by the household.
                2. The exact ingredients for each written as a set that is always kept in.
                3. Each fallback cooked once and confirmed at under 20 minutes.
                4. The fallback list posted beside the weekly plan.

                ## Notes
                Keep the fallback ingredients out of the normal weekly rotation, or they get used on an ordinary Tuesday and are missing on the night you need them.
              priority: high
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Four fallback dinners are written down with their ingredients, and each has been cooked once in under 20 minutes."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Pick four dinners that need only cupboard, freezer or long-life ingredients"
                - "List the exact ingredients each fallback dinner needs"
                - "Cook each fallback once and time it from start to plate"
                - "Check every fallback ingredient is still in the cupboard @recurring(monthly:12)"
            - name: House rules for the weekly menu
              description: |-
                ## Purpose
                Arguments about meals are often arguments about unspoken rules: is Friday a takeaway night, does everyone try a new dish, are puddings a weekday thing. Writing five or six short ground rules together means the plan carries decisions the family already agreed, rather than one parent defending them every evening.

                ## Milestones
                1. Each household member's view on treats, new dishes and takeaways heard.
                2. Five or six ground rules written in plain words.
                3. The rules placed next to the weekly plan.
                4. The rules revisited once after a month and edited where they were ignored.

                ## Notes
                Rules that describe what the family already does stick far better than aspirations. Start with what is true, then add one change.
              priority: medium
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A list of five or six agreed menu rules is displayed with the plan and has been reviewed once after a month."
                cadence: one-shot
                effort_hours_estimate: "1"
              tasks:
                - "Ask everyone at one dinner what they think the food rules already are"
                - "Write five or six rules covering treats, new dishes, takeaways and seconds"
                - "Put the rules beside the weekly plan"
                - "Strike out any rule nobody followed after the first month"
            - name: Recipe links collected for the starter dinners
              description: |-
                ## Purpose
                A dinner on the plan is only useful if the cook can find how to make it at half past five. Collecting the recipe link, cookbook page or a one-line method for each starter dinner in one searchable place means anyone in the household can cook from the plan, not just the person who wrote it.

                ## Milestones
                1. A recipe link, book page or short method stored for each of the twenty starter dinners.
                2. Any family tweak, such as less chilli or double the sauce, written beside the recipe.
                3. Each dinner on the plan linked or cross-referenced to its recipe.
                4. A second adult has cooked one dinner using only the stored recipe.
              priority: medium
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "All twenty starter dinners have a stored recipe or method, and a second adult has cooked from it without help."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Create one folder or note for the household's dinner recipes"
                - "Add the link, book page or method for each starter dinner"
                - "Write the family's own tweaks next to each recipe"
                - "Ask another adult to cook one dinner using only the stored recipe"
            - name: Sunday twenty-minute planning session
              description: |-
                ## Purpose
                Weekly planning sticks when it has a fixed slot short enough never to feel like a chore. Twenty minutes at the same time each week, with the calendar, the food register and the dinner list open, produces next week's plan before the main shop is done.

                ## Milestones
                1. A fixed twenty-minute slot chosen for the day before the main shop.
                2. The same three inputs used every time: calendar, register and dinner list.
                3. Most sessions finished within twenty minutes.
                4. Eight consecutive weeks planned in the agreed place.

                ## Notes
                Start from the **Weekly meal plan** template. Sunday suits most families, but the right day is the one before your main shop, whatever that is.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Eight consecutive weeks each have a meal plan written in the agreed place before the main shop."
                cadence: rolling
              tasks:
                - "Choose a fixed twenty-minute slot the day before your main shop"
                - "Set a phone reminder ten minutes before the slot"
                - "Write next week's meal plan from the calendar and dinner list @recurring(weekly:sun)"
                - "Note any week that was skipped and the reason"
            - name: Ingredient lists attached to each planned dinner
              description: |-
                ## Purpose
                Writing a shopping list from scratch every week is the step that makes people give up on meal planning. Attaching a ready ingredient list to each dinner on the family list means next week's shop is assembled by copying a few blocks, not by re-reading seven recipes.

                ## Milestones
                1. Each dinner on the list has its own ingredient block, scaled to the household.
                2. Ingredients grouped by shop section so lists merge cleanly.
                3. Cupboard staples marked so they are checked rather than bought every week.
                4. A full weekly list assembled from the blocks in under ten minutes.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Every dinner on the household list has a scaled ingredient block, and a weekly list has been assembled from them in under ten minutes."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Write the ingredient block for your five most frequent dinners first"
                - "Group each block by shop section such as fresh, chilled, tins and frozen"
                - "Mark staples that only need checking, not buying, each week"
                - "Time how long it takes to build next week's list from the blocks"
            - name: Midweek plan check and swap
              description: |-
                ## Purpose
                By Wednesday most plans have drifted: a dinner skipped, a delivery short, a child invited out. A five-minute check midweek, swapping nights rather than abandoning the plan, gets fresh ingredients used in time and keeps the rest of the week intact.

                ## Milestones
                1. A fixed five-minute midweek check in the calendar.
                2. Remaining dinners checked against what is actually in the fridge.
                3. Swaps written onto the plan rather than kept in someone's head.
                4. Six weeks of midweek checks completed.

                ## Notes
                Swap, do not drop. A dinner pushed to next week keeps its ingredients in use; a dinner dropped usually ends in the bin.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Six consecutive weeks have a midweek check recorded, with any swaps written onto the plan."
                cadence: rolling
              tasks:
                - "Pick a five-minute slot on Wednesday evening for the check"
                - "Compare the rest of the week's plan with the fridge and swap nights @recurring(weekly:wed)"
                - "Write any swap straight onto the plan"
            - name: Leftovers planned into next-day lunches
              description: |-
                ## Purpose
                Cooking one or two extra portions at dinner, on purpose, solves tomorrow's lunch without a second session in the kitchen. Marking which dinners are cook-extra nights on the plan, and who the extra portions are for, turns leftovers from an accident into a reliable supply.

                ## Milestones
                1. Two dinners a week marked on the plan as cook-extra nights.
                2. Each extra portion assigned to a named person and day.
                3. Enough lidded containers for the planned portions.
                4. A month of weeks with at least two lunches covered by planned leftovers.

                ## Notes
                Cool leftovers quickly, refrigerate them within a couple of hours and eat them within your food safety guide's limit, usually one to two days for cooked meals.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "For four consecutive weeks, at least two lunches each week come from dinners planned to make extra."
                cadence: rolling
              tasks:
                - "Pick the two dinners on next week's plan that reheat best"
                - "Add the extra portions to those dinners' ingredient amounts"
                - "Write who each extra portion is for beside the dinner"
                - "Check you have enough lidded containers for the week"
            - name: Four-week rotating dinner cycle
              description: |-
                ## Purpose
                Once twenty or so dinners are reliable, a four-week rotation can do most of the planning for you. Each week's dinners are set in advance, with one open slot for something new, so the weekly session shrinks to checking the calendar and swapping where needed.

                ## Milestones
                1. Twenty-four dinners arranged into four fixed weeks.
                2. Each week balanced across quick nights, longer nights and main ingredients.
                3. One open slot per week kept for a new or seasonal dinner.
                4. The full cycle run twice, with tired dinners replaced.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A four-week dinner cycle has been run twice in full, with at least two dinners replaced after review."
                cadence: cyclic
              tasks:
                - "Sort the dinner list into four weeks of six dinners each"
                - "Check each week has at least two dinners under 20 minutes"
                - "Leave one open slot each week for a new dinner"
                - "Replace one dinner the family is tired of @recurring(monthly:24)"
            - name: Theme nights for faster weekly choices
              description: |-
                ## Purpose
                Fixing a theme to each night, such as pasta Monday, soup Wednesday or fish Friday, narrows each choice from forty dinners to five. Children tend to like knowing what kind of night it is, and themes make the weekly session quicker without making meals repetitive.

                ## Milestones
                1. A theme agreed for at least four nights of the week.
                2. Three to five dinners listed under each theme.
                3. Themes matched to each night's cooking time on the schedule map.
                4. A month of plans built using the themes.

                ## Notes
                Leave at least two nights unthemed. A fully themed week becomes as rigid as a fixed menu.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "At least four nights have an agreed theme with three or more dinners each, and four weekly plans have been built from them."
                cadence: rolling
              tasks:
                - "Ask the family which four nights would suit a fixed theme"
                - "List three to five dinners under each theme"
                - "Check each theme fits that night's cooking time"
                - "Fill next week's plan using the themes first"
            - name: School and work morning breakfast rotation
              description: |-
                ## Purpose
                Breakfast is the meal most often left off the plan and the one most often skipped or grabbed on the way out. A short rotation of five weekday breakfasts, with anything that needs soaking, defrosting or setting out flagged the night before, gets everyone out of the door fed.

                ## Milestones
                1. Five weekday breakfasts agreed that suit the household's morning times.
                2. Any breakfast needing a night-before step marked on the plan.
                3. Breakfast ingredients included in the weekly list.
                4. Four weeks of weekday mornings with a planned breakfast.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A five-breakfast weekday rotation is on the plan and has been followed for four consecutive weeks."
                cadence: rolling
              tasks:
                - "Time how long each person really has for breakfast on a school or work day"
                - "Agree five breakfasts that fit those times"
                - "Mark any breakfast that needs soaking or defrosting the night before"
                - "Add breakfast ingredients to the weekly list"
            - name: Weekend lunches and brunch planned
              description: |-
                ## Purpose
                Weekend lunches catch families out: everyone is home, hungry at different times, and the fridge has been emptied by Friday. Planning two weekend lunches and one relaxed brunch during the weekly session ends the Saturday afternoon of grazing and unplanned cafe trips.

                ## Milestones
                1. Weekend lunch and brunch slots added to the plan format.
                2. Six simple weekend lunches listed that use what is usually left by Saturday.
                3. One brunch the family enjoys added to the regular rotation.
                4. A month of weekends with lunches planned.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Four consecutive weekends have planned lunches and a brunch on the plan, with no more than one unplanned cafe lunch."
                cadence: rolling
              tasks:
                - "Add weekend lunch and brunch slots to the meal plan"
                - "List six weekend lunches built from what is usually left by Saturday"
                - "Choose one brunch the family will look forward to"
                - "Note any weekend that ended in an unplanned cafe lunch and why"
            - name: Monthly meal plan look-back
              description: |-
                ## Purpose
                Four weeks of plans hold useful information: which dinners got skipped, which were swapped for a takeaway and which were asked for again. A short monthly look-back keeps the dinner list honest and catches the meals that stay on the plan only out of habit.

                ## Milestones
                1. A monthly slot fixed for the look-back.
                2. Skipped, swapped and requested-again dinners counted for the month.
                3. One change to the dinner list or the planning routine agreed each month.
                4. Six monthly look-backs completed.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Six consecutive monthly look-backs recorded, each naming at least one change made to the dinner list or routine."
                cadence: rolling
              tasks:
                - "Ask the agent to summarise four weeks of plans into skipped, swapped and repeated dinners"
                - "Review the month's plans and agree one change @recurring(monthly:28)"
                - "Write the change into the dinner list or planning notes"
            - name: Children's pick night each week
              description: |-
                ## Purpose
                Children eat more willingly when they have chosen the meal. Giving each child one dinner a week, picked from a short list the adults are happy with, builds buy-in and shows them how a varied week fits together.

                ## Milestones
                1. A short pick list of eight to ten dinners agreed by the adults.
                2. A rota showing whose pick it is each week.
                3. The chosen dinner written onto the plan with the child's name.
                4. Two full rounds of the rota completed.

                ## Notes
                Let older children add one dinner to the pick list each term, so the list grows with them.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Each child has chosen a dinner from the agreed list in two full rounds of the rota, with picks recorded on the plan."
                cadence: rolling
              tasks:
                - "Agree a pick list of eight to ten dinners the adults are happy to cook"
                - "Draw up a rota of whose pick it is each week"
                - "Ask this week's chooser for their dinner pick @recurring(weekly:fri)"
                - "Write the child's name beside their dinner on the plan"
            - name: Quarterly dinner list refresh
              description: |-
                ## Purpose
                Dinner lists go stale: seasons change, a child outgrows a favourite, a recipe that looked easy turns out not to be. Every quarter, retiring three dinners and adding three new ones that passed a trial keeps the list fresh without overwhelming the weekly plan.

                ## Milestones
                1. Three new dinners trialled during the quarter and rated by the family.
                2. Three dinners retired from the list with a short reason.
                3. The list's cooking-time tags checked against how long each dinner really took.
                4. Four quarterly refreshes completed in a year.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Four quarterly refreshes completed in twelve months, each adding three trialled dinners and retiring three."
                cadence: cyclic
              tasks:
                - "Choose three new dinners to trial in the next quarter"
                - "Rate each trial dinner out of five at the table"
                - "Retire three dinners and add three trialled ones to the list @recurring(quarterly)"
            - name: Night-before prep cues in the weekly plan
              description: |-
                ## Purpose
                Many failed dinners fail the night before: the mince never defrosted, the beans never soaked, the marinade never made. Marking which dinners need a step 12 to 24 hours ahead, and writing that cue into the previous day's slot, prevents the 6pm discovery.

                ## Milestones
                1. Every dinner on the list checked for defrosting, soaking or marinating steps.
                2. Prep cues written into the previous day's slot whenever those dinners are planned.
                3. A nightly check of tomorrow's dinner built into the evening routine.
                4. A month with no dinner abandoned for a missed prep step.

                ## Notes
                Defrost meat and fish in the fridge, not on the worktop. A large joint can need more than a day.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Four consecutive weeks pass with no planned dinner abandoned because a defrost, soak or marinade step was missed."
                cadence: rolling
              tasks:
                - "Mark each dinner on the list that needs a step the day before"
                - "Add prep cues to the previous day's slot on next week's plan"
                - "Check tomorrow's dinner for any defrost, soak or marinade step @recurring(daily)"
            - name: Reading recipes for real weeknight timings
              description: |-
                ## Purpose
                Recipe times are often written for a cook with everything chopped and no interruptions, which is why a 30-minute dinner takes an hour on a school night. Learning to read a recipe for hidden steps, such as preheating, marinating, resting and washing up between stages, makes the plan's night labels accurate.

                ## Milestones
                1. Five regular dinners timed from first step to food on the table.
                2. Each timed against the recipe's stated time and the gap noted.
                3. A personal rule of thumb written for adjusting stated times.
                4. The cooking-time tags on the dinner list corrected.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Five dinners have been timed against their recipes and every cooking-time tag on the dinner list has been corrected."
                cadence: phased
                effort_hours_estimate: "3"
              tasks:
                - "Time tonight's dinner from first step to food on the table"
                - "Compare the time with what the recipe claimed"
                - "Underline hidden steps such as preheating or resting in your next three recipes"
                - "Correct the cooking-time tags on the dinner list"
            - name: Cook once, eat twice dinner pairs
              description: |-
                ## Purpose
                Some dinners are built to become another: a roast chicken that turns into Tuesday's risotto, a big pot of chilli that becomes Thursday's loaded potatoes. Learning a handful of these pairs and placing them next to each other on the plan saves a full cooking session each week.

                ## Milestones
                1. Five dinner pairs identified where the first dinner feeds the second.
                2. Quantities for the first dinner of each pair scaled up and written down.
                3. Each pair tried once on the plan with a day or two between.
                4. At least one pair used in most weeks of a month.

                ## Notes
                Plan the second dinner within two days of the first, and keep the cooked base in the fridge, covered, until then.
              priority: medium
              deadlineOffsetDays: 45
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Five tested dinner pairs are written on the dinner list with scaled quantities, and one has appeared on the plan in three of four weeks."
                cadence: phased
                effort_hours_estimate: "5"
              tasks:
                - "List three dinners you already make that leave a usable base"
                - "Find a second dinner for each that uses that base"
                - "Scale up the first dinner's quantities and write them down"
                - "Put one pair on next week's plan, two days apart"
            - name: Balancing a week of dinners across food groups
              description: |-
                ## Purpose
                Individual meals rarely need to be perfect; the week as a whole is what counts. Learning to scan a weekly plan for vegetables, pulses, fish, wholegrains and the number of red meat or fried nights, using your country's public healthy eating guide, lets you rebalance with a swap or two rather than overhauling everything.

                ## Milestones
                1. Your national healthy eating guide found and its main weekly suggestions noted.
                2. Four past weekly plans scanned against those suggestions.
                3. Two swaps identified that bring a typical week closer to the guide.
                4. A quick balance check added to the weekly planning session.

                ## Notes
                Public guides are written for the general population. If a child has a growth, weight or medical concern, or anyone has a diagnosed condition, ask a dietitian or your doctor rather than adjusting the plan on your own.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Four past plans have been checked against the national eating guide and two agreed swaps are part of the regular weekly plan."
                cadence: phased
                effort_hours_estimate: "3"
              tasks:
                - "Find your country's public healthy eating guide and note its weekly suggestions"
                - "Scan the last four weekly plans against those suggestions"
                - "Choose two swaps that would bring a typical week closer to the guide"
                - "Add a two-minute balance check to the planning session"
            - name: Scaling recipes to the family's real appetites
              description: |-
                ## Purpose
                Recipes serving four rarely match a family of two adults, a toddler and a sixteen-year-old who eats like two adults. Learning how much of each main ingredient your household actually gets through, and writing the scaled amounts beside each dinner, cuts both waste and second dinners at 9pm.

                ## Milestones
                1. Actual amounts of rice, pasta, meat and vegetables eaten recorded over two weeks.
                2. A household portion guide written for the main ingredients.
                3. Scaled amounts noted beside each dinner on the list.
                4. A month with no regular dinner either running short or leaving a full extra portion uneaten.

                ## Notes
                Revisit portions when a child hits a growth spurt or takes up a sport; teenage appetites can change within a term.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A written household portion guide exists and scaled amounts are noted for every dinner on the list."
                cadence: phased
                effort_hours_estimate: "3"
              tasks:
                - "Weigh the dry pasta or rice you cook tonight and note what was left over"
                - "Record amounts cooked and left over for two weeks of dinners"
                - "Write a household portion guide for your main ingredients"
                - "Note the scaled amounts beside each dinner on the list"
            - name: Ordering the week by ingredient shelf life
              description: |-
                ## Purpose
                Fresh fish, salad leaves and soft herbs last a day or two; root vegetables, tins and frozen peas last all week. Putting the most perishable dinners early in the week and the longest-lasting ones at the end means Friday's plan is still cookable when the fridge is nearly empty.

                ## Milestones
                1. Each dinner on the list tagged as early-week, mid-week or late-week by its ingredients.
                2. Two weekly plans ordered using the tags.
                3. Late-week dinners built mainly from frozen, tinned or long-life ingredients.
                4. No late-week dinner abandoned for a spoiled ingredient over a month.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Every dinner on the list carries a shelf-life tag, and four consecutive weekly plans have been ordered by it."
                cadence: phased
                effort_hours_estimate: "2"
              tasks:
                - "Tag each dinner as early, mid or late week by its most perishable ingredient"
                - "Move fish and salad dinners to the first two days on next week's plan"
                - "Check the last two dinners of the week rely on frozen or tinned ingredients"
                - "Note any ingredient that spoiled before its planned night"
            - name: Slow cooker and traybake nights for busy days
              description: |-
                ## Purpose
                Long days out of the house are when plans fail most, yet they are the nights a slow cooker or a single oven tray suits best. Learning four or five dinners that can be started in the morning or left in the oven unattended, and pinning them to the busiest nights on the schedule map, keeps those evenings on plan.

                ## Milestones
                1. The two or three busiest evenings each week identified from the schedule map.
                2. Five slow cooker or traybake dinners tried and rated.
                3. Morning or after-school prep for each written as three steps or fewer.
                4. Busy nights covered by one of these dinners for a month.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Five unattended dinners are tested and on the list, and the household's busiest nights used them for four consecutive weeks."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Circle the two or three busiest evenings on the schedule map"
                - "Pick five slow cooker or traybake dinners to try"
                - "Write the morning prep for each in three steps or fewer"
                - "Rate each dinner after the first try and keep the best"
            - name: Meal kit subscription versus own planning
              description: |-
                ## Purpose
                Recipe box services promise an end to planning but cost more per portion and suit some families far better than others. Running a fair comparison over a month, on cost, waste, cooking time and how much the children actually ate, settles whether a kit should cover some nights, all nights or none.

                ## Milestones
                1. The household's current cost per dinner portion worked out from receipts.
                2. One or two kit services trialled for two weeks each using introductory offers.
                3. Cost, waste, time and family ratings compared side by side.
                4. A decision recorded on how many nights a week, if any, a kit covers.

                ## Notes
                Start from the **Purchase decision** template. Cancel or pause trials before the full-price renewal; most services renew automatically.
              priority: medium
              deadlineOffsetDays: 45
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A written comparison of meal kits against your own plan on cost, waste, time and ratings, ending in a recorded decision."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Work out your current cost per dinner portion from two weeks of receipts"
                - "Choose one or two kit services to trial and note their renewal dates"
                - "Score each trial week on cost, waste, time and family ratings"
                - "Record the decision and cancel any trial you are not keeping"
            - name: Cutting unplanned takeaway nights
              description: |-
                ## Purpose
                Takeaways that are planned, such as a Friday treat, are part of family life; the ones ordered at 7pm because nobody decided are where money and good intentions leak away. Counting unplanned takeaways for a month, then putting a fallback dinner and a planned treat night into the plan, usually cuts them sharply.

                ## Milestones
                1. One month of takeaway orders counted, split into planned and unplanned.
                2. The usual trigger for unplanned orders identified, such as late nights or empty fridges.
                3. A planned treat night and a fallback dinner put on the plan for those triggers.
                4. Unplanned takeaways halved over the following month.
              priority: medium
              deadlineOffsetDays: 60
              frontmatter:
                mode: building
                output_kind: habit
                success_criteria: "Unplanned takeaway orders in the second month are no more than half the number counted in the first."
                cadence: phased
                effort_hours_estimate: "2"
              tasks:
                - "Count last month's takeaway orders from your bank or app history"
                - "Mark each as planned or unplanned and note the night"
                - "Put a planned treat night on the weekly plan"
                - "Place a fallback dinner on the night unplanned orders usually happen"
            - name: Build-your-own dinner formats for mixed tastes
              description: |-
                ## Purpose
                Tacos, rice bowls, wraps, jacket potatoes and homemade pizza let each person assemble their own plate from shared components, which solves more mixed-taste problems than cooking two dinners. Adding three or four of these formats to the dinner list gives the plan reliable nights that suit the cautious eater and the adventurous one.

                ## Milestones
                1. Three or four assemble-it-yourself formats chosen.
                2. A base, two proteins and four toppings listed for each format.
                3. Each format tried once and rated by the family.
                4. At least one format on the plan most weeks.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Three assemble-it-yourself formats with listed components are on the dinner list, and one appears on the plan in three of four weeks."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Choose three formats such as tacos, rice bowls and wraps"
                - "List a base, two proteins and four toppings for each"
                - "Put one format on next week's plan"
                - "Ask everyone to rate it and note the toppings that went untouched"
            - name: Weekend component prep for the week's dinners
              description: |-
                ## Purpose
                An hour at the weekend chopping onions, cooking a pot of grains, making one sauce and washing salad can take ten minutes off every weeknight dinner on the plan. Deciding which components the planned week shares, and prepping only those, is quicker than full batch cooking and keeps food fresh.

                ## Milestones
                1. Shared components spotted across next week's planned dinners.
                2. A one-hour prep list written for those components.
                3. Prepped components labelled and stored in the fridge with the day they are for.
                4. Weeknight cooking times shorter on prepped weeks than unprepped ones.

                ## Notes
                Prep only what keeps safely until its planned night, usually two or three days for chopped vegetables and cooked grains in the fridge.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Four weekend prep hours completed, with weeknight cooking times on those weeks recorded as shorter than unprepped weeks."
                cadence: rolling
              tasks:
                - "Circle the ingredients that appear in two or more of next week's dinners"
                - "Write a one-hour prep list for those shared components"
                - "Prep the week's shared components and label them by day @recurring(weekly:sun)"
                - "Note weeknight cooking times on prepped and unprepped weeks"
            - name: Deciding between one sitting and two at dinner
              description: |-
                ## Purpose
                Young children ready for bed at seven and parents home at half six often end up with two dinners cooked every night. Comparing options, such as an early shared dinner, an adult-only later meal two nights a week, or the same dinner reheated, settles a plan that respects bedtimes without doubling the cooking.

                ## Milestones
                1. Each household member's realistic dinner window written down.
                2. Three options compared on cooking load, bedtimes and time together.
                3. One pattern chosen and tried for two weeks.
                4. The chosen pattern written into the weekly plan format.
              priority: medium
              deadlineOffsetDays: 30
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "One dinner-sitting pattern is chosen after a two-week trial and shown on the weekly plan format."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Write down the earliest and latest each person can eat on weekdays"
                - "List three sitting patterns and the cooking each one needs"
                - "Trial the most promising pattern for two weeks"
                - "Add the chosen pattern to the plan format"
            - name: Activity-night dinners that travel or wait
              description: |-
                ## Purpose
                Football training at half five and swimming at six leave a dinner gap no ordinary recipe solves. Planning dinners that can wait in a low oven, reheat in two minutes or travel in a flask for the car makes activity nights part of the plan instead of the reason it fails.

                ## Milestones
                1. Every regular activity night marked on the plan with its gap between school and home.
                2. Four dinners chosen that hold, reheat or travel well.
                3. A flask or insulated container ready for anyone eating on the move.
                4. Activity nights covered by planned dinners for a month.

                ## Notes
                Hot food kept in a flask should go in piping hot and be eaten within a few hours.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Four dinners suited to activity nights are on the list, and every activity night in a month had one of them planned."
                cadence: phased
                effort_hours_estimate: "3"
              tasks:
                - "Mark every regular club or training night on the schedule map"
                - "Choose four dinners that hold, reheat or travel well"
                - "Check you have a flask or insulated container for each child who eats out"
                - "Put one of the four dinners on each activity night in next week's plan"
            - name: Flexible night built into every week
              description: |-
                ## Purpose
                A plan with seven fixed dinners is brittle; a plan with six and one open night bends. Keeping one evening for leftovers, a fallback or an unexpected invitation absorbs the week's surprises and uses up the odds and ends before the next shop.

                ## Milestones
                1. One night each week left open on the plan.
                2. A short list of ways to use the open night, such as leftovers, an omelette or a fallback dinner.
                3. The open night used to clear the fridge before the next shop.
                4. Eight weeks run with a flexible night.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Eight consecutive weekly plans include an open night, with the fridge cleared before the next shop in most weeks."
                cadence: rolling
              tasks:
                - "Choose the night that most often goes off plan as the flexible night"
                - "Write four quick ways to use the open night"
                - "Cook from what is left in the fridge on the flexible night @recurring(weekly:thu)"
            - name: Back-to-school week meal plan reset
              description: |-
                ## Purpose
                The first week of a new school year rearranges everything: new club days, earlier mornings, different finishing times. Rebuilding the schedule map and the first fortnight of plans before term starts avoids two weeks of chaotic dinners while everyone adjusts.

                ## Milestones
                1. New term timetables, club days and pick-up times collected.
                2. The schedule map redrawn for the new term.
                3. The first two weeks of dinners planned against the new map.
                4. A short review after week two with any changes made.
              priority: medium
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "The schedule map is redrawn and two weeks of dinners are planned before the first day of term, with a review after week two."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Collect each child's new timetable, club days and finishing times"
                - "Redraw the schedule map for the new term"
                - "Plan the first two weeks of dinners against the new map"
                - "Review after week two and move any dinner that kept failing"
            - name: School holiday weeks meal plan
              description: |-
                ## Purpose
                School holidays add up to ten extra lunches a week and shift breakfast and dinner times for everyone. A holiday version of the plan, with simple lunches the children can help make, a couple of picnic days and adjusted quantities, keeps the extra meals from eating into the budget and the adults' patience.

                ## Milestones
                1. Holiday weeks marked with who is home, at childcare or away each day.
                2. Ten simple holiday lunches listed, including picnic-friendly ones.
                3. Holiday quantities added to the weekly list.
                4. A holiday plan used for at least one full break.

                ## Notes
                Plan lunches around childcare days: a child at holiday club still needs a packed lunch, while a home day needs a proper midday meal.
              priority: low
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A holiday meal plan covering every day of one school break was written in advance and followed for most days."
                cadence: cyclic
                effort_hours_estimate: "3"
              tasks:
                - "Mark the next school break on the plan with who is home each day"
                - "List ten simple lunches including three that pack for a day out"
                - "Increase lunch and snack quantities on the holiday weeks' lists"
                - "Note what worked to reuse at the next school break"
            - name: Meal plan for a week of houseguests
              description: |-
                ## Purpose
                Relatives staying for a week double the dinners and bring their own tastes, diets and timetables. Planning their stay like a short project, with a register entry for each guest, a dish or two they love and the busiest day mapped, keeps the host cooking calmly rather than shopping every day.

                ## Milestones
                1. Each guest's diet, dislikes and favourite dishes added to the register.
                2. A plan for every meal of the stay written before they arrive.
                3. One night out or takeaway planned to give the cook a break.
                4. The main shop for the stay done before arrival day.
              priority: low
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "Every meal of the guests' stay was planned before arrival, with the main shop done and at least one night off for the cook."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Ask each guest about allergies, diets and a dish they love"
                - "Map the stay day by day with outings and late arrivals"
                - "Plan every meal of the stay including one night off for the cook"
                - "Book the main shop or delivery for the day before they arrive"
            - name: Self-catering holiday week meal plan
              description: |-
                ## Purpose
                Holiday cottages and apartments come with unfamiliar kitchens, limited equipment and shops that may be far away or closed on Sundays. Planning six or seven simple dinners in advance, packing the spices and staples that are expensive to buy there, and agreeing which nights to eat out lets the cook have a holiday too.

                ## Milestones
                1. The rental's kitchen equipment and nearest shops checked.
                2. Simple dinners planned for each night not eating out.
                3. A packing list of staples, spices and any special-diet foods ready.
                4. Cooking nights shared out among the adults.

                ## Notes
                Start from the **Trip** template. Plan the first night's dinner from what you bring, since arrival day rarely leaves time for a shop.
              priority: low
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A holiday meal plan, a staples packing list and a cooking rota were written before departure and used on the trip."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Ask the rental host what kitchen equipment is provided"
                - "Find the nearest shop and its opening hours"
                - "Plan simple dinners for each night you will eat in"
                - "Pack the staples, spices and special-diet foods you will need"
            - name: Meal plan for a kitchen renovation or house move
              description: |-
                ## Purpose
                Without a working kitchen for two to six weeks, during a refit or a move, most families default to takeaways and lose their routines with them. Planning a no-kitchen menu in advance, with dinners that need one appliance and very little washing up, protects both the budget and the children's evenings.

                ## Milestones
                1. A temporary cooking corner chosen with the appliances that will be available.
                2. Ten dinners listed that need only those appliances.
                3. Two weeks of plans written for the disruption period.
                4. The temporary plan used until the kitchen is back in action.

                ## Notes
                Washing up is usually the hardest part. Plan around a bowl in the bathroom or utility sink, and keep disposable plates for the worst week.
              priority: low
              frontmatter:
                mode: event
                output_kind: deliverable
                success_criteria: "A no-kitchen plan with ten single-appliance dinners was written before the work began and used throughout the disruption."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "List which appliances you will still have during the work"
                - "Choose ten dinners that need only those appliances"
                - "Plan the first two weeks of the disruption"
                - "Set up a temporary cooking corner before the kitchen is taken out"
            - name: Meal planning around shift work rotas
              description: |-
                ## Purpose
                When a parent works early, late or night shifts, dinner happens at different times for different people and the rota can change every week. Planning from the published rota, with portable meals for the worker and dinners that reheat well for whoever eats later, keeps the household fed without a cook on standby at every hour.

                ## Milestones
                1. Each shift type mapped to who cooks and who eats when.
                2. Portable meals listed for each shift type.
                3. Reheatable dinners placed on nights when people eat at different times.
                4. The plan built from the rota for a month.

                ## Notes
                Night workers often do best with their main meal before the shift and something light during it; check what suits you rather than following the household's dinner time.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Four consecutive weekly plans were built from the shift rota, with portable meals planned for every shift."
                cadence: rolling
              tasks:
                - "Write who cooks and who eats when for each shift type"
                - "List three portable meals for early, late and night shifts"
                - "Copy next week's shift rota onto the meal plan before choosing dinners @recurring(weekly:sat)"
                - "Mark which dinners will be reheated and by whom"
            - name: Shared meal notes between two homes
              description: |-
                ## Purpose
                Children who split the week between two homes can end up eating spaghetti three nights running, or missing a dinner they love in both places. A simple shared note of what was eaten, any new likes or reactions, and dietary needs agreed by both parents keeps meals varied without coordinating every dinner.

                ## Milestones
                1. A shared note set up that both parents can read and edit.
                2. Allergies, dietary needs and firm refusals agreed and recorded by both households.
                3. Each home adding its week's dinners and any food reactions.
                4. Two months of notes kept by both homes.

                ## Notes
                Keep the note to food facts. It works best when it never becomes a channel for other disagreements.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Both homes have added their weekly dinners and food notes to a shared note for eight consecutive weeks."
                cadence: rolling
              tasks:
                - "Suggest a shared note to the other parent and agree what goes in it"
                - "Record allergies, dietary needs and firm refusals both homes follow"
                - "Add this week's dinners and any new food notes to the shared note @recurring(weekly:mon)"
            - name: Meal planning in the first months with a newborn
              description: |-
                ## Purpose
                With a new baby, the question is less what to cook than who has the hands and energy to cook at all. A minimal plan of very quick dinners, a rota of who cooks on which nights and a list of meals to suggest when friends offer help keeps the adults eating properly through the hardest weeks.

                ## Milestones
                1. A short list of ten dinners that take 15 minutes or less.
                2. A simple cooking rota agreed between the adults.
                3. A list of dinners to suggest when friends or family offer to bring food.
                4. One-handed breakfasts and snacks added to the plan for the feeding parent.

                ## Notes
                If anyone offers to cook, say yes and name a dinner from the list. Specific requests get more useful meals than vague thanks.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A ten-dinner quick list, a cooking rota and a list for helpers exist before the baby's due date or within its first week."
                cadence: phased
                effort_hours_estimate: "3"
              tasks:
                - "List ten dinners that take 15 minutes or less"
                - "Agree a simple cooking rota between the adults"
                - "Write a list of dinners to suggest when people offer to bring food"
                - "Add one-handed breakfasts and snacks for the feeding parent to the plan"
            - name: Teenagers planning and cooking one dinner a week
              description: |-
                ## Purpose
                Teenagers who plan, shop for and cook one family dinner a week leave home able to feed themselves, and give a parent a night off. Starting with a dinner they already like and building to a full planned night, with a budget and a list, makes it a real responsibility rather than a novelty.

                ## Milestones
                1. The teenager's dinner night fixed on the weekly plan.
                2. Four dinners cooked with an adult nearby.
                3. Four dinners planned, listed and cooked independently within a set budget.
                4. A personal list of eight dinners the teenager can cook alone.

                ## Notes
                Agree the clearing-up rule at the start. A dinner that leaves the kitchen wrecked is half a night off for the parent.
              priority: medium
              deadlineOffsetDays: 90
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "The teenager has independently planned, bought and cooked four family dinners within budget and keeps a list of eight dinners they can make."
                cadence: phased
                effort_hours_estimate: "12"
              tasks:
                - "Agree with your teenager which night of the week is theirs"
                - "Choose the first dinner together from meals they already like"
                - "Set a budget and let them write that dinner's list"
                - "Hand over the kitchen for your teenager's planned family dinner @recurring(weekly:tue)"
            - name: Fasting month meal plan for the whole household
              description: |-
                ## Purpose
                During a religious fasting month such as Ramadan, the household's eating window moves to before dawn and after sunset, while younger children and anyone not fasting still need ordinary meals. A month-long plan for the pre-dawn meal, the evening meal and daytime food for non-fasting members, sketched before the month starts, keeps energy steady and evenings calm.

                ## Milestones
                1. Who is fasting and who is not confirmed, with daily meal times for each.
                2. A rotation of pre-dawn meals that are quick to prepare in the dark.
                3. Evening meal plans for each week of the month, including shared and guest nights.
                4. Daytime meals planned for children and non-fasting members.

                ## Notes
                Anyone pregnant, breastfeeding, managing a medical condition or on regular medicine should talk to their clinician before fasting. Ask the agent to draft the first week only; later weeks are easier once you see what the household actually eats.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A full-month plan covering pre-dawn, evening and daytime meals is written before the fasting month begins and followed for most days."
                cadence: cyclic
                effort_hours_estimate: "4"
              tasks:
                - "Confirm who in the household is fasting and who is not"
                - "List eight pre-dawn meals that take under ten minutes"
                - "Ask the agent to draft the first week's evening meal plan from your dinner list"
                - "Sketch the fasting month plan three weeks before it begins @recurring(yearly)"
            - name: Single parent weeknight plan on minimal time
              description: |-
                ## Purpose
                Single parents plan, shop, cook and clear alone, often after a full working day and the school run. A stripped-back plan built on ten dinners that take under 25 minutes, one cook-extra night and a standing fallback removes decisions from the hardest hour of the day.

                ## Milestones
                1. Ten dinners under 25 minutes chosen that the children reliably eat.
                2. One cook-extra night a week giving a second dinner or lunches.
                3. A two-week rotation drawn from the ten dinners.
                4. Planning time cut to ten minutes a week.

                ## Notes
                Give children a fixed job each night, even at five years old, such as laying the table. It is less about help and more about making dinner a shared ten minutes.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A two-week rotation of ten quick dinners has been used for a month, with weekly planning taking ten minutes or less."
                cadence: rolling
              tasks:
                - "Pick ten dinners under 25 minutes your children reliably eat"
                - "Arrange them into a two-week rotation"
                - "Choose one weeknight to cook double for a second dinner"
                - "Time next week's planning and aim for under ten minutes"
            - name: Multigenerational household meal plan
              description: |-
                ## Purpose
                Grandparents living in, or a relative being cared for at home, bring different appetites, softer textures, earlier mealtimes and sometimes medical diets into the family plan. Building those needs into the weekly plan, rather than cooking a separate tray each night, keeps everyone at the same table where possible.

                ## Milestones
                1. Each older member's mealtime, texture, appetite and dietary needs added to the register.
                2. Dinners on the list marked as suitable as cooked, suitable with a small change, or unsuitable.
                3. A weekly plan where at least five dinners suit everyone with small changes.
                4. Any medical diet requirements confirmed with the relevant clinician.

                ## Notes
                Medical diets for swallowing difficulties, kidney disease or diabetes need clinical guidance; plan around what the clinician or dietitian has advised rather than general rules.
              priority: low
              frontmatter:
                mode: service
                output_kind: artifact
                success_criteria: "A weekly plan exists where at least five dinners suit every generation with small changes, with medical needs confirmed by a clinician."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Ask each older household member about preferred meal times and textures"
                - "Mark each dinner on the list as suitable, adaptable or unsuitable"
                - "Plan a week where five dinners suit everyone with small changes"
                - "Confirm any medical diet rules with the relevant clinician"
            - name: Twelve-week menu with reusable shopping lists
              description: |-
                ## Purpose
                Experienced planners eventually build a full quarter of menus, each week with its own linked shopping list, then rerun it with seasonal swaps. It takes a few evenings to set up and turns weekly planning into a two-minute check for months at a time.

                ## Milestones
                1. Twelve weekly menus written, balanced for time, cost and variety.
                2. A merged shopping list attached to each week.
                3. Seasonal swap options noted for dinners that depend on fresh produce.
                4. The full twelve weeks run once with notes for the next round.
              priority: low
              deadlineOffsetDays: 60
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Twelve weekly menus, each with an attached shopping list, have been run in full once with revision notes recorded."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Copy your best four weekly plans as the first weeks of the twelve"
                - "Write the remaining eight weeks from the dinner list"
                - "Attach a merged shopping list to each week"
                - "Note seasonal swaps beside any dinner that depends on fresh produce"
            - name: Meal plan hit-rate and cost tracking
              description: |-
                ## Purpose
                Tracking for one quarter how many planned dinners were cooked, swapped or abandoned, and roughly what each week's food cost, shows which nights fail and which dinners never earn their place. Numbers settle debates about whether planning is worth the effort.

                ## Milestones
                1. A simple log set up with columns for planned, cooked, swapped, abandoned and weekly spend.
                2. Twelve weeks of entries recorded.
                3. The nights and dinners with the lowest hit rate identified.
                4. Two changes made to the plan based on the numbers.

                ## Notes
                Start from the **Metrics log** template. Count a swap as a success; the aim is fewer abandoned dinners, not perfect obedience to the plan.
              priority: low
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "Twelve weeks of hit-rate and spend data are logged and two plan changes based on them are recorded."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Set up a log with planned, cooked, swapped, abandoned and spend columns"
                - "Record last week's planned and cooked dinners in the log @recurring(weekly:mon)"
                - "Add the month's food spend to the log @recurring(monthly:3)"
                - "Identify the two nights with the most abandoned dinners after twelve weeks"
            - name: Household meal planning playbook for handover
              description: |-
                ## Purpose
                If the main planner is away, ill or simply wants a break, the system should run without them. A short playbook covering where the plan lives, the dinner list, the register, the shopping routine and the fallbacks lets a partner, grandparent or older child keep the week on track.

                ## Milestones
                1. A two-page playbook covering the plan, list, register, shopping and fallbacks.
                2. Login details for any shared apps stored where the stand-in can reach them securely.
                3. Another adult or older child has run one full week from the playbook.
                4. The playbook reviewed yearly.
              priority: medium
              deadlineOffsetDays: 45
              frontmatter:
                mode: service
                output_kind: deliverable
                success_criteria: "A written playbook exists and another household member has planned, shopped and cooked one full week using only it."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Ask the agent to draft a two-page playbook from your plan, dinner list and register"
                - "Add the shopping routine and where fallback ingredients are kept"
                - "Hand the playbook to another household member to run one full week"
                - "Review the playbook and update anything that changed @recurring(yearly)"
            - name: Reviewing the family plan with a dietitian
              description: |-
                ## Purpose
                When a family member has a growth concern, a new diagnosis or a complex mix of needs, a registered dietitian can review typical weeks of the plan and suggest changes that work for everyone. Bringing real plans and written questions makes a short appointment far more useful than describing meals from memory.

                ## Milestones
                1. A referral or private appointment with a registered dietitian booked.
                2. Three typical weekly plans and the food register prepared to share.
                3. Questions written down in advance, one per concern.
                4. Agreed changes written into the dinner list and next week's plan.

                ## Notes
                Check the practitioner is a registered dietitian or holds an equivalent protected title in your country; nutrition titles are not regulated everywhere.
              priority: high
              deadlineOffsetDays: 60
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A dietitian appointment has taken place with three weekly plans reviewed and the agreed changes added to the dinner list."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Ask your doctor about a dietitian referral or find a registered practitioner"
                - "Gather three typical weekly plans and the food register"
                - "Write one question for each concern you want reviewed"
                - "Add the agreed changes to the dinner list after the appointment"
---

# Weekly Family Meal Planning

This area is for anyone who feeds a household and is tired of the 5pm question of what is for dinner, whether that is a parent of small children, a couple with teenagers or a house shared across generations. It starts with the foundations (a map of the week as it is really lived, a register of who eats what, a home for the plan, a split of the work and a starter list of twenty dinners), then the weekly routines that keep the plan running, the skills of reading recipes, pairing dinners and ordering the week, the decisions about meal kits, takeaways and dinner sittings, the events that upend a normal week, the situations that change the shape of planning, such as shift work, a newborn or two homes, and finally the systems an experienced planner builds.

What repeats is the Sunday planning session, a midweek check on Wednesday, a flexible night on Thursday, a child's pick each Friday, a night-before prep check, a monthly look-back on the 28th and a quarterly refresh of the dinner list. The Weekly meal plan, Purchase decision, Trip and Metrics log templates pair with the projects that name them. Installing adds all 50 projects as active, so archive the ones that are not for you yet.
