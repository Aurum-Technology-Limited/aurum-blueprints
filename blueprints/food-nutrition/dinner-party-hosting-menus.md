---
id: food-nutrition.dinner-party-hosting-menus
name: Dinner Party Hosting Menus
description: "A capacity check, quantities per head, a make-ahead menu rule and a party countdown, then the routines, techniques and dated dinners that let the host cook calmly and still sit down."
category: personal
version: 1.0.0
tags: [food-nutrition, dinner-party-hosting-menus, everyone, hosting, entertaining, menu-planning, make-ahead]
author: Aurum Technology
starter_structure:
  templates:
    - operational-checklist
    - metrics-log
    - purchase-decision
  pillars:
    - name: Food & Nutrition
      emoji: "🥗"
      description: "What gets eaten, and how it gets to the table: meal planning, shopping and batch cooking, dietary needs and goals, cooking skill as a lifelong craft, and the food rituals that hold a household together."
      pillarFrontmatter:
        review_cadence: monthly
      areas:
        - name: Dinner Party Hosting Menus
          description: "Planning menus, timings and prep schedules for dinner parties so the host cooks confidently and still enjoys the evening."
          projects:
            - name: Hosting capacity audit of table, seats and oven
              description: |-
                ## Purpose
                Before choosing a menu or a guest count, it helps to know what the house can actually serve. Counting chairs that fit the table, oven shelves, hob rings and free fridge space gives you a real maximum, usually smaller than people assume, and stops the classic mistake of inviting ten when the oven holds food for six.

                ## Milestones
                1. Table length with and without its leaf measured, giving a comfortable seated maximum.
                2. Oven shelves and hob rings counted, with the largest roasting tin that fits noted.
                3. Free fridge space on a normal day estimated in shelves, not guesses.
                4. A one-line capacity note written down, for example eight seated and two oven dishes at once.

                ## Notes
                Allow about 60 cm of table edge per guest. If the honest answer is six, plan for six and treat larger numbers as a separate project.
              priority: high
              deadlineOffsetDays: 14
              frontmatter:
                mode: building
                output_kind: knowledge
                success_criteria: "A written capacity note gives the seated maximum, oven and hob limits and fridge space, all checked with a tape measure."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Measure the table length with and without its leaf"
                - "Count the chairs that sit at the table at the same height"
                - "Count oven shelves and hob rings and test the biggest tin for fit"
                - "Write the capacity note on a card inside a kitchen cupboard"
            - name: Serving dishes and tableware inventory
              description: |-
                ## Purpose
                Nothing slows the final ten minutes like finding seven matching dinner plates or no dish large enough for the potatoes. A single list of plates, bowls, glasses, cutlery, platters, jugs and linen, counted in full sets, shows which menus you can serve as things stand and which few pieces are worth adding.

                ## Milestones
                1. Every plate, bowl, glass and cutlery piece counted in complete matching sets.
                2. Serving platters, bowls, boards, jugs and serving spoons listed with rough sizes.
                3. Napkins, tablecloths and candle holders counted.
                4. A gap list of no more than five items, ranked by how often each gap has caused trouble.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A written inventory lists full sets of tableware and serving pieces, with a ranked gap list of no more than five items."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Count the dinner plates, side plates and bowls that match"
                - "Count wine glasses, water glasses and full cutlery sets"
                - "List every serving platter, bowl and board with its size"
                - "Write a gap list of the five pieces you most often miss"
                - "Recount glasses and plates for chips and breakages @recurring(yearly)"
            - name: Quantities per head cheat sheet
              description: |-
                ## Purpose
                Most hosts over-cater from nerves, or under-cater on the one dish everyone loves. A one-page sheet of raw quantities per guest for meat, fish, grains, potatoes, vegetables, bread, cheese and dessert, corrected from your own leftovers, takes the guesswork out of every shopping list.

                ## Milestones
                1. Starting quantities per head written for each main food group, as raw weight.
                2. Adjustments noted for big appetites, the number of courses and whether canapes are served.
                3. The sheet tested against one real dinner and corrected.
                4. The sheet kept wherever you write shopping lists.

                ## Notes
                A common starting point is about 180 to 200 g of boneless meat or fish per person for a main with sides, a little less when there are three courses. Your own leftovers are the best correction.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A one-page quantities sheet exists, has been used for one dinner and carries at least one correction from it."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Write raw quantities per head for proteins, carbohydrates and vegetables"
                - "Add per-head amounts for bread, cheese and dessert"
                - "Note how much less to allow when serving three courses"
                - "Correct the sheet using the leftovers from the next dinner"
            - name: Guest dietary needs question at invitation
              description: |-
                ## Purpose
                Finding out about a guest's allergy or diet as they sit down leaves no good options. Asking every guest the same short question when you invite them, covering allergies, intolerances, religious or ethical diets and strong dislikes, gives you weeks to plan a menu that works for the whole table without anyone feeling singled out.

                ## Milestones
                1. A short, friendly question written to paste into every invitation.
                2. Answers for each dinner recorded against guest names in one place.
                3. A rule agreed for serious allergies: ask the guest directly what they need and keep ingredient packaging until the night is over.
                4. The question used for three dinners in a row.

                ## Notes
                For a serious allergy the guest is the expert. Ask them what is safe rather than guessing from a label, and if you cannot be sure, tell them before the night.
              priority: high
              deadlineOffsetDays: 14
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Every invitation for three consecutive dinners included the dietary question, with answers recorded before the menu was fixed."
                cadence: one-shot
                effort_hours_estimate: "1"
              tasks:
                - "Write a two-line dietary question to add to every invitation"
                - "Set up a page to record each guest's answers by name"
                - "Ask the agent to draft three invitation messages with the question built in"
                - "Keep the ingredient packaging from each dinner until the guests have left"
            - name: One last-minute dish rule for every menu
              description: |-
                ## Purpose
                Hosts who never leave the kitchen have usually chosen three dishes that each need the final fifteen minutes. Sorting your recipes into made ahead, reheated, assembled and cooked to order, then allowing only one cooked-to-order dish per menu, is the single change that most often gets the host back to the table.

                ## Milestones
                1. Every dish you might serve tagged as made ahead, reheat, assemble or cook to order.
                2. Your last three dinner menus checked against the rule, with the breaches noted.
                3. A made-ahead replacement found for each breach.
                4. The rule written at the top of your menu planning page.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: knowledge
                success_criteria: "Every dish in your repertoire carries a make-ahead tag and the next menu planned has no more than one cook-to-order dish."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "List the dishes you are likely to serve at a dinner party"
                - "Tag each one as make ahead, reheat, assemble or cook to order"
                - "Find a make-ahead swap for any menu with two cook-to-order dishes"
                - "Write the one last-minute dish rule at the top of your menu page"
            - name: Master dinner party countdown checklist
              description: |-
                ## Purpose
                A dinner party is a small project with a fixed deadline, and most of the stress comes from jobs remembered too late, such as defrosting, chilling wine, ironing napkins or emptying the dishwasher. A reusable countdown from one week out to the doorbell, copied for each dinner, turns those jobs into ticks.

                ## Milestones
                1. A countdown written with sections for one week, three days, the day before, the morning and the final two hours.
                2. Non-food jobs included: chairs, linen, ice, bins emptied, dishwasher empty and space for coats.
                3. The countdown used for one dinner and corrected afterwards.
                4. A blank copy ready to duplicate for the next dinner.

                ## Notes
                Start from the **Operational checklist** template.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A countdown checklist covering one week to arrival has been used for one dinner and updated with whatever it missed."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Create a countdown from the operational checklist template"
                - "Add sections for one week, three days, the day before and the morning"
                - "List the non-food jobs such as linen, ice, bins and coat space"
                - "Correct the checklist the day after the next dinner"
            - name: Plated, family-style or buffet decision
              description: |-
                ## Purpose
                How food reaches the plate decides how many dishes you need, how long service takes and whether you get to sit down. Plated courses look smart but tie the host to the counter, family-style platters suit six to ten, and a buffet frees the table for larger groups. Choosing a default style for your space and usual numbers simplifies every menu after it.

                ## Milestones
                1. Each style compared for your table, kitchen and usual guest count.
                2. The serving kit each style needs checked against your inventory.
                3. A default style chosen, with the guest number at which you switch.
                4. The choice recorded on your menu planning page.
              priority: medium
              deadlineOffsetDays: 21
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A default serving style is recorded with the guest count at which you change to another style."
                cadence: one-shot
                effort_hours_estimate: "1"
              tasks:
                - "Write down how your last two dinners were served and what went wrong"
                - "Compare plated, family-style and buffet for your table and kitchen"
                - "Check which style your serving dishes already support"
                - "Record your default style and the guest count where you switch"
            - name: Hosting budget per head
              description: |-
                ## Purpose
                A dinner for eight can cost as much as a week's family shop without anyone noticing until the statement arrives. Setting a cost per head for food and for drink, and logging the real figure for a few dinners, lets you host often without dread and shows exactly where the money goes.

                ## Milestones
                1. A per-head target set for food and for drink separately.
                2. Receipts for the next three dinners totalled and divided by the number of guests.
                3. The single biggest cost item for each dinner identified.
                4. The target adjusted to a figure you could afford every month.

                ## Notes
                Start from the **Metrics log** template. Count the easily forgotten extras: flowers, candles, ice and the extra bottle bought on the day.
              priority: medium
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A per-head target is recorded and the real cost of three dinners has been logged against it."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Set a per-head budget for food and a separate one for drink"
                - "Create a hosting cost log from the metrics log template"
                - "Log each dinner's receipts divided by the number of guests"
                - "Add up the month's hosting spend against the per-head figure @recurring(monthly:30)"
            - name: Guest preferences and past menus file
              description: |-
                ## Purpose
                Serving the same lamb to the same couple twice, or forgetting that a friend cannot stand coriander, are small slips people remember. A file with an entry per regular guest, recording what they love, avoid and were last served, lets you plan for real people rather than an imagined average guest.

                ## Milestones
                1. An entry per household of regular guests, with likes, dislikes and dietary needs.
                2. The menu served at each past dinner added under the guests who ate it.
                3. Drinks preferences and children's names included where useful.
                4. The file checked before every menu is chosen.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Every regular guest has an entry listing their preferences and the last menu they were served."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "List the people you host most often"
                - "Write what each guest loves, avoids and cannot eat"
                - "Add the menus from your last three dinners under the guests who came"
                - "Check every guest entry is still accurate @recurring(yearly)"
            - name: Signature three-course menu you can cook blind
              description: |-
                ## Purpose
                Confident hosts usually have one menu they can cook without a recipe, scale up or down and serve at short notice. Building yours from three dishes you already cook well, with quantities, timings and a shopping list written down, gives you a dependable fallback for any occasion.

                ## Milestones
                1. A starter, main and dessert chosen that share no main ingredient and suit your oven.
                2. Each dish cooked twice, with quantities for six written in grams.
                3. One combined shopping list and timeline for the whole menu.
                4. The menu served to guests once and refined afterwards.
              priority: high
              deadlineOffsetDays: 60
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A three-course menu is written with quantities, a shopping list and a timeline, and has been served to guests at least once."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Pick three dishes you already cook well that share no main ingredient"
                - "Write quantities for six people for each dish in grams"
                - "Draft one combined shopping list and timeline for the menu"
                - "Cook the full signature menu for the household to keep it sharp @recurring(quarterly)"
            - name: Regular hosting rhythm
              description: |-
                ## Purpose
                Hosting gets easier with practice, and most people host too rarely for the practice to stick. Choosing a rhythm you can sustain, such as one dinner every four to six weeks with the date set a month ahead, turns hosting from an occasional ordeal into a routine your friends come to expect.

                ## Milestones
                1. A sustainable frequency chosen and agreed with anyone you live with.
                2. The next three dinner dates in the calendar.
                3. A rotating guest list that brings in someone new every few dinners.
                4. Six dinners hosted on the chosen rhythm.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Six dinners hosted within the chosen rhythm, with each date set at least three weeks ahead."
                cadence: rolling
              tasks:
                - "Agree a hosting frequency with the people you live with"
                - "Pick the date and guest list for the next dinner @recurring(monthly:12)"
                - "Add one new face to the guest list for an upcoming dinner @recurring(quarterly)"
                - "Send invitations at least three weeks before each date"
            - name: Dinner party menu bank by course
              description: |-
                ## Purpose
                Menu planning stalls when every idea lives in a different cookbook, browser tab or memory. A bank of tested dishes sorted by course, each tagged with serves, make-ahead window and oven temperature, means a menu can be put together in fifteen minutes by picking one entry from each section.

                ## Milestones
                1. Sections for canapes, starters, mains, sides and desserts.
                2. At least five tested dishes in each section.
                3. Each dish tagged with serves, make-ahead window, oven temperature and dietary flags.
                4. Two complete menus assembled from the bank alone.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: artifact
                success_criteria: "The menu bank holds at least 25 tested dishes, each tagged with its make-ahead window and oven temperature."
                cadence: rolling
              tasks:
                - "Set up sections for canapes, starters, mains, sides and desserts"
                - "Add the dishes you have already served successfully"
                - "Tag each dish with serves, make-ahead window and oven temperature"
                - "Add newly tested dishes and retire tired ones from the bank @recurring(monthly:20)"
            - name: Post-dinner debrief notes
              description: |-
                ## Purpose
                The details that make the next dinner better, such as the gravy that ran short or the dessert nobody finished, are forgotten within a week. Five minutes of notes the next morning on timing, quantities, leftovers and what guests enjoyed builds a record no cookbook can give you.

                ## Milestones
                1. A short debrief format: menu, guests, what ran late, leftovers, what was praised and one change.
                2. A debrief written within a day of each dinner.
                3. Recurring problems spotted across three or more debriefs.
                4. Lessons copied into the quantities sheet, countdown and menu bank.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A written debrief exists for each of the last five dinners, and at least two lessons have moved into the quantities sheet or countdown."
                cadence: rolling
              tasks:
                - "Write a five-line debrief format and save it as a blank page"
                - "Fill in the debrief the morning after each dinner"
                - "Estimate the leftovers and note them against each dish"
                - "Review the month's debriefs and move lessons into your sheets @recurring(monthly:28)"
            - name: Pantry reserve for unexpected guests
              description: |-
                ## Purpose
                Friends who drop round, or a dinner that grows by two at the last minute, are far less stressful with a small reserve set aside. A shelf of long-life basics, such as good olive oil, crackers, tinned fish, nuts, dried pasta, jarred antipasti and dark chocolate, makes a decent spread possible in ninety minutes without a trip to the shop.

                ## Milestones
                1. A reserve list of 10 to 15 items covering nibbles, one simple main and a dessert.
                2. The items bought and kept on a shelf the household knows not to raid.
                3. A ninety-minute pantry dinner written out using only the reserve.
                4. The reserve restocked after each use.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A labelled reserve shelf holds every item on the list and a written ninety-minute dinner uses only those items."
                cadence: rolling
              tasks:
                - "Write a reserve list for nibbles, one main and one dessert"
                - "Buy the reserve items and clear one shelf for them"
                - "Write out the ninety-minute dinner that uses only the reserve"
                - "Check the reserve shelf and replace anything used or near its date @recurring(monthly:17)"
            - name: Freezer stash of party components
              description: |-
                ## Purpose
                Components rather than whole meals give the most freedom in a busy week: blind-baked tart cases, stock, a braise base, flavoured butters, biscuit dough, ice cream and puff pastry. Keeping a small labelled stash lets you assemble a dinner in one evening that tastes as if it took two days.

                ## Milestones
                1. A list of six to eight components you would really use.
                2. Each component made, portioned for six and labelled with date and contents.
                3. A freezer list kept on the door or in your notes.
                4. Components rotated so nothing is older than about three months.

                ## Notes
                Freeze in flat bags or shallow tubs so components thaw overnight in the fridge, and write the reheating method on the label.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "At least six labelled party components are in the freezer, all listed and none older than three months."
                cadence: rolling
              tasks:
                - "Choose six components you would use at your next dinners"
                - "Make and freeze two components in a single cooking session"
                - "Keep a dated freezer list for the components"
                - "Use or replace any component older than three months @recurring(monthly:8)"
            - name: Linen, glassware and candle upkeep
              description: |-
                ## Purpose
                Wine-stained napkins and a box of stubby candles are usually discovered at five o'clock on the day. Treating and storing linen properly after each dinner, and checking glasses, candles and serving pieces every quarter, keeps the table ready to lay at an hour's notice.

                ## Milestones
                1. Napkins and cloths washed, stain-treated and stored flat after each dinner.
                2. Glasses checked for chips and cloudiness, with the damaged ones replaced.
                3. A spare stock of unscented dinner candles and tealights in the cupboard.
                4. Four quarterly checks carried out in a year.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Four quarterly checks recorded in a year, with linen clean and at least one dinner's worth of candles in stock."
                cadence: rolling
              tasks:
                - "Treat wine and gravy stains on napkins the morning after a dinner"
                - "Buy a box of unscented dinner candles to keep in reserve"
                - "Check linen, glasses and candle stock and replace what is worn @recurring(quarterly)"
            - name: Seasonal dinner party menu refresh
              description: |-
                ## Purpose
                A menu that suits January, all braises and roots, feels heavy in July. Reviewing your default menus at the turn of each season, and swapping in two or three dishes built around what is cheap and at its best, keeps the cooking interesting for you and for the guests who come often.

                ## Milestones
                1. A default dinner party menu written for each of the four seasons.
                2. Two or three seasonal swaps tested in the weeks before each change.
                3. Seasonal desserts and side dishes added to the menu bank.
                4. Four seasonal refreshes completed in a year.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Four seasonal default menus exist and each has been served at least once in its season."
                cadence: cyclic
              tasks:
                - "Write down what is in season over the next three months where you live"
                - "Draft a default dinner menu for the coming season"
                - "Switch to the new season's menu and test one new dish for it @recurring(quarterly)"
            - name: Return invitations ledger
              description: |-
                ## Purpose
                Social life runs on reciprocity, and it is easy to lose track of who has fed you twice without being asked back. A simple ledger of dinners given and received helps you spread invitations fairly and notice the friends you have not seen for months.

                ## Milestones
                1. A list of friends and couples with the date you last hosted them and were hosted by them.
                2. Anyone owed an invitation flagged.
                3. Owed invitations worked into upcoming dinners.
                4. Nobody on the list left unseen for more than six months without a reason.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A ledger lists the last dinner given and received for every regular guest, with owed invitations scheduled."
                cadence: rolling
              tasks:
                - "List the friends who have hosted you in the last year"
                - "Add the dates you last hosted each of them"
                - "Look over the ledger and invite anyone you owe a dinner @recurring(monthly:24)"
            - name: Trial cooks before serving guests
              description: |-
                ## Purpose
                Cooking a dish for the first time on the night is the commonest cause of a late, anxious dinner. A monthly trial of one candidate dish on an ordinary evening, timed and tasted by the household, tells you how long it really takes, whether it holds and whether it deserves a place on the menu.

                ## Milestones
                1. A shortlist of dishes you want to try for guests.
                2. Each trial timed from start to plate, with active and waiting time separated.
                3. A verdict recorded for each: serve as is, change, or drop.
                4. Twelve trials completed in a year.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Twelve trial cooks recorded in a year, each with real timings and a serve, change or drop verdict."
                cadence: rolling
              tasks:
                - "Shortlist five dishes you would like to serve to guests"
                - "Cook one untested dish for the household as a trial @recurring(monthly:15)"
                - "Time active and waiting work separately during each trial"
                - "Record a serve, change or drop verdict in the menu bank"
            - name: Roasting large joints for a crowd
              description: |-
                ## Purpose
                Large joints are the easiest main for a group once the timing is understood: they cook unattended and need a long rest, which frees the oven for everything else. Learning to cook to internal temperature with a probe thermometer, and to plan around the resting time, removes the biggest uncertainty in a roast for eight or more.

                ## Milestones
                1. A probe thermometer bought and checked in boiling water.
                2. Target internal temperatures for your usual joints written down from a reliable source.
                3. Two joints roasted to temperature, with cooking and resting times recorded.
                4. Resting time used to finish potatoes and vegetables in the free oven.

                ## Notes
                Use the safe minimum temperatures your food safety authority publishes for poultry and pork. Carryover cooking during the rest usually adds a few degrees.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Two large joints roasted to a target internal temperature, with times and resting periods written in the menu bank."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Buy a probe thermometer and check it in boiling water"
                - "Write target internal temperatures for beef, lamb, pork and poultry"
                - "Roast a joint to temperature and record its cooking and resting time"
                - "Use the resting time to finish the sides in the free oven"
            - name: Sauces that hold or reheat for service
              description: |-
                ## Purpose
                Many classic sauces split, skin or thicken if they wait, which is why hosts end up whisking at the stove while the main goes cold. Learning which sauces reheat well, such as a reduced jus or a gravy finished ahead, which hold, such as a salsa verde, and how to keep a warm butter sauce in a flask gives every main a sauce that is ready when you are.

                ## Milestones
                1. A reduced stock-based sauce made a day ahead and reheated successfully.
                2. A herb sauce made in the morning that kept its colour until the evening.
                3. A butter sauce held warm in a vacuum flask for an hour.
                4. Every sauce in your repertoire marked as reheat, hold or make to order.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Three sauces made ahead and served without last-minute work, with the hold or reheat method noted for each."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Make a reduced jus a day ahead and reheat it gently"
                - "Make a green herb sauce in the morning and check its colour at dinner time"
                - "Hold a butter sauce in a warmed flask for an hour"
                - "Mark each sauce in the menu bank as reheat, hold or make to order"
            - name: Plating and garnish for home dinners
              description: |-
                ## Purpose
                Restaurant plating is not the goal, but a little height, a clean rim and one contrasting colour make home food look cared for. A few practice sessions with warm plates, a squeeze bottle and a small set of garnishes are enough to plate six starters in under five minutes.

                ## Milestones
                1. Plates warmed or chilled to suit each course, with a method that works in your kitchen.
                2. Three plating layouts practised: a starter, a main and a dessert.
                3. A garnish kit chosen: soft herbs, something crunchy, a good oil and flaky salt.
                4. Six plates finished in under five minutes at a practice run.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Six identical starters plated in under five minutes with clean rims, timed at a practice run."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Find the simplest way to warm plates in your kitchen"
                - "Save photos of three plating layouts you would like to copy"
                - "Practise plating a starter six times with a timer running"
                - "Write your garnish kit list on the menu planning page"
            - name: Make-ahead canapes and nibbles
              description: |-
                ## Purpose
                The first half hour, while guests arrive and drinks are poured, is when hosts are most stretched. Two or three canapes that can be made the day before and finished in minutes, plus one thing to put out with no work at all, buy you that half hour back.

                ## Milestones
                1. Three canapes chosen that can be prepared at least a day ahead.
                2. Each one made, held and finished at a trial, with timings noted.
                3. One no-cook option such as good olives, radishes with butter or spiced nuts in rotation.
                4. Quantities per guest for a drinks half hour recorded.

                ## Notes
                Allow around three or four pieces per person before a sit-down dinner. Much more than that and appetites for the starter vanish.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Three make-ahead canapes are tested and written into the menu bank with quantities per guest."
                cadence: phased
                effort_hours_estimate: "5"
              tasks:
                - "Choose three canapes that can be made the day before"
                - "Make one canape a day ahead and finish it at the last minute as a test"
                - "Pick one no-cook nibble to keep in rotation"
                - "Note how many pieces per guest disappeared at the last dinner"
            - name: Scaling recipes from four to twelve
              description: |-
                ## Purpose
                Doubling a recipe does not double everything: seasoning, liquid loss, pan size and cooking time all behave differently at scale. Learning the rules and testing one dish at triple quantity prevents the oversalted stew and the grey, steamed meat that come from a crowded pan.

                ## Milestones
                1. A note of what scales directly and what does not: salt, spice, liquid and baking times.
                2. Pan and tin sizes checked for larger batches, with browning planned in batches.
                3. One dish cooked at three times its usual quantity and adjusted.
                4. Scaled quantities for that dish written into the menu bank.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "One dish cooked at three times its recipe quantity, with the seasoning and timing adjustments written down."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Write down which ingredients and timings do not scale in a straight line"
                - "Check your largest pans and tins against a tripled recipe"
                - "Cook one favourite dish at triple quantity and season it in stages"
                - "Record the scaled quantities and timings in the menu bank"
            - name: Mise en place and kitchen stations for service
              description: |-
                ## Purpose
                Professional kitchens get through service by having every component prepared, labelled and in place before the first order. Applying the same idea at home, with a prepped tray per course, a running order taped up and a clear landing space for dirty plates, turns the evening into assembly rather than cooking.

                ## Milestones
                1. A tray or board for each course holding its prepared components.
                2. A running order for service written large and taped inside a cupboard door.
                3. Separate zones for plating, dirty plates and drinks, away from the cooking area.
                4. A whole dinner served from prepped trays.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A full dinner served with every course's components prepped on trays and a written running order on display."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Gather trays or boards to hold each course's components"
                - "Write a running order for service in large letters"
                - "Mark out a plating zone, a dirty plate zone and a drinks zone"
                - "Serve the next dinner from prepped trays and note what was missing"
            - name: Holding hot food safely through a long evening
              description: |-
                ## Purpose
                Dinner parties rarely run to the minute, and food left lukewarm for hours is both disappointing and a food safety risk. Knowing how to hold dishes hot in a low oven, which dishes dry out, and how long cold dishes and leftovers can sit out keeps quality and safety intact when the evening runs late.

                ## Milestones
                1. Your food safety authority's guidance on hot holding and time out of the fridge noted.
                2. A low-oven holding method tested for a main and a side, with the best temperature and cover.
                3. A list of your dishes that hold well and those that must be served at once.
                4. A clearing rule set for chilling leftovers within the recommended time.

                ## Notes
                Follow your own food safety authority's figures. Many advise keeping hot food hot and cold food cold, and not leaving food at room temperature for more than about two hours.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Holding methods for at least two dishes are tested and a leftovers chilling rule based on official guidance is written on the countdown."
                cadence: phased
                effort_hours_estimate: "3"
              tasks:
                - "Look up your food safety authority's advice on hot holding and leftovers"
                - "Test holding a covered main in a low oven for forty minutes"
                - "List which of your dishes hold well and which must go straight out"
                - "Add a leftovers chilling step to the end of the countdown checklist"
            - name: Menu balance across courses
              description: |-
                ## Purpose
                Three excellent dishes can still make a heavy meal if each one leans on cream, or a dull one if every course is brown. Learning to check a menu for richness, colour, texture, temperature and repeated ingredients is what turns a list of favourites into a meal that flows.

                ## Milestones
                1. A balance checklist covering richness, colour, texture, temperature contrast, repeated ingredients and oven clashes.
                2. Your last three menus scored against it.
                3. One menu rewritten to fix its weakest point.
                4. The checklist used before every menu is fixed.

                ## Notes
                A simple rule: if the main is rich, make the starter sharp and the dessert fresh, and never repeat a main ingredient across courses.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Three past menus scored against a written balance checklist and one rewritten, with the checklist saved on the menu page."
                cadence: phased
                effort_hours_estimate: "3"
              tasks:
                - "Write a six-point balance checklist for menus"
                - "Score your last three dinner menus against the checklist"
                - "Rewrite the weakest menu to fix its biggest imbalance"
                - "Ask the agent to check your next menu against the balance checklist"
            - name: Buy, borrow or hire extra seats and tableware
              description: |-
                ## Purpose
                Once guest numbers go beyond the household's chairs and plates, there are three options with very different costs and storage needs. Comparing folding chairs and a table extension, borrowing from family, and a hire service for plates, glasses and linen, against how often you host larger groups, ends the scramble before every big dinner.

                ## Milestones
                1. The number of extra seats and place settings needed for your largest likely dinner.
                2. Prices gathered for buying and hiring, plus a realistic view of what you could borrow.
                3. Storage space for anything bought measured.
                4. A decision recorded, with the guest count above which you hire.

                ## Notes
                Start from the **Purchase decision** template. Many hire companies accept glasses back unwashed, which saves an hour at the sink.
              priority: medium
              deadlineOffsetDays: 45
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A buy, borrow or hire decision for seats and tableware is recorded with prices and the guest count that triggers it."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Work out how many extra seats and settings your largest dinner needs"
                - "Get prices from two party hire companies for plates, glasses and linen"
                - "Price folding chairs and a table extension and measure the storage space"
                - "Record the choice on a purchase decision page"
            - name: Fixing the late main course
              description: |-
                ## Purpose
                If mains regularly arrive forty minutes after the starter plates are cleared, the cause is nearly always structural: an oven needed at two temperatures, too many pans on the hob, or a job that cannot start until the starter is served. Looking back at the last few dinners and redesigning the bottleneck usually fixes it for good.

                ## Milestones
                1. The starter-to-main gap estimated for the last three dinners from memory or debriefs.
                2. The bottleneck named: oven temperature clash, hob space, carving or plating.
                3. A changed method tested, such as a make-ahead side or a main that finishes on the hob.
                4. The next dinner's gap kept under twenty minutes.
              priority: medium
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "The gap between clearing starters and serving mains is under twenty minutes at two consecutive dinners."
                cadence: phased
                effort_hours_estimate: "3"
              tasks:
                - "Note how long the gap between starter and main was at recent dinners"
                - "Name the step that held up the main each time"
                - "Swap one hot side for a make-ahead or room-temperature version"
                - "Time the starter-to-main gap at the next dinner"
            - name: Cutting hosting costs without it showing
              description: |-
                ## Purpose
                Expensive dinners are usually expensive because of a prime cut, out-of-season produce and too much choice. Building menus around slow-cooked cheaper cuts, seasonal vegetables, one generous splurge and fewer components keeps the table abundant at a much lower cost per head.

                ## Milestones
                1. The three most expensive items from recent dinners identified from receipts.
                2. Two menus planned around a cheaper cut or a vegetable main.
                3. One splurge item per menu chosen on purpose.
                4. Cost per head at the next dinner at least a fifth lower, with no drop in praise.
              priority: low
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "One dinner's recorded cost per head is at least 20 percent below the previous average, with the menu written down."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Find the three most expensive items on recent hosting receipts"
                - "Plan a menu around a slow-cooked cheaper cut such as shoulder or shin"
                - "Choose one splurge item for the menu and keep everything else simple"
                - "Compare the cost per head with your previous average"
            - name: Washing-up plan for the night
              description: |-
                ## Purpose
                Sinks full of pans before the main course, and a kitchen that takes two hours to clear afterwards, are both avoidable. Planning where dirty plates go between courses, washing cooking pans before guests arrive and agreeing who clears makes the evening lighter and the next morning far better.

                ## Milestones
                1. The dishwasher emptied and the sink clear before the first guest arrives.
                2. A landing spot for dirty plates between courses, out of sight of the table.
                3. A soak tub ready for cutlery and roasting tins.
                4. Clearing roles agreed with a partner or a willing guest.

                ## Notes
                Start from the **Operational checklist** template. If you already use the dinner party countdown, add these steps to it instead.
              priority: low
              frontmatter:
                mode: building
                output_kind: habit
                success_criteria: "At two dinners the dishwasher was empty on arrival and the kitchen was clear within 45 minutes of the last guest leaving."
                cadence: one-shot
                effort_hours_estimate: "1"
              tasks:
                - "Add an empty dishwasher and a clear sink to the countdown"
                - "Choose a landing spot for dirty plates away from the table"
                - "Set out a soak tub for cutlery and roasting tins"
                - "Agree who clears between courses before guests arrive"
            - name: Drinks quantities and alcohol-free options
              description: |-
                ## Purpose
                Running out of ice, or having nothing interesting for the guest who does not drink, are the two drinks failures hosts remember. Working out quantities per guest for the length of the evening, with plenty of water, at least one good alcohol-free option and enough ice, takes ten minutes and saves a late dash to the shop.

                ## Milestones
                1. Drinks per guest estimated for a four-hour evening, with a buffer.
                2. One or two alcohol-free options chosen that feel as considered as the wine.
                3. Ice quantity and storage planned, including a cool box if the freezer is full.
                4. Water jugs on the table from the start.

                ## Notes
                This project covers quantities and logistics. Choosing bottles to match the food belongs with wine and food pairing.
              priority: low
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A drinks plan with quantities per guest, alcohol-free options and ice is written and used for one dinner without running short."
                cadence: one-shot
                effort_hours_estimate: "1"
              tasks:
                - "Estimate drinks per guest for the length of the evening plus a buffer"
                - "Choose one alcohol-free drink that suits the menu"
                - "Work out how much ice you need and where it will be kept"
                - "Put water jugs and glasses on the table before guests sit down"
            - name: Table layout, lighting and centrepiece
              description: |-
                ## Purpose
                Guests feel the room before they taste anything. Low centrepieces so people can see each other, unscented candles, warm lamps instead of the main light and enough space between settings make an ordinary dining table feel like an occasion at almost no cost.

                ## Milestones
                1. A standard place setting sketched for your table, with spacing that fits your seated maximum.
                2. The centrepiece kept below eye level when seated.
                3. A lighting plan: overhead light off or dimmed, candles and lamps placed.
                4. The table laid the night before at the next dinner.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A sketch of the standard place setting and lighting plan exists, and the table was fully laid the night before one dinner."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Sketch one place setting with cutlery in course order"
                - "Test the centrepiece height while sitting at the table"
                - "Turn off the main light and place lamps and candles for the evening"
                - "Lay the table the night before the next dinner"
            - name: Seating plan and guest mix
              description: |-
                ## Purpose
                Where people sit decides who talks to whom for three hours. A few simple rules, such as splitting couples, putting the most sociable guests in the middle, seating a new guest beside someone warm and keeping the host nearest the kitchen, make conversation flow without anyone feeling managed.

                ## Milestones
                1. Seating rules written for your table shape.
                2. A plan drawn for the next dinner using the guest preferences file.
                3. Place cards or a spoken plan ready before guests arrive.
                4. One line in the debrief on how the seating worked.
              priority: low
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "Seating plans were used at two dinners and each debrief records how the seating worked."
                cadence: one-shot
                effort_hours_estimate: "1"
              tasks:
                - "Write four seating rules that suit your table shape"
                - "Draw a seating plan for the next dinner"
                - "Put your own seat nearest the kitchen door"
                - "Note in the debrief which pairings worked"
            - name: Final three hours appliance schedule
              description: |-
                ## Purpose
                The last three hours are where dinners slip, because the oven, hob and fridge are all wanted at once. A schedule laid out by appliance rather than by recipe, working back from the time each course is served, exposes temperature clashes and gaps while there is still time to change the menu.

                ## Milestones
                1. Serving times fixed for canapes, starter, main and dessert.
                2. Each dish placed on an oven, hob or fridge line with start time, temperature and duration.
                3. Clashes resolved by changing a dish, a temperature or the order.
                4. The schedule taped up in the kitchen on the night and followed.

                ## Notes
                Start from the **Operational checklist** template. Work backwards from the main course, which is the least forgiving.
              priority: high
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A schedule by appliance for the final three hours exists for one dinner, with no oven temperature clashes, and was followed on the night."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Fix serving times for each course at the next dinner"
                - "Write each dish on an oven, hob or fridge line with its start time"
                - "Ask the agent to turn the menu into a reverse-timed schedule by appliance"
                - "Tape the schedule up in the kitchen on the day"
            - name: First dinner party for six
              description: |-
                ## Purpose
                Small and familiar is the right shape for a first proper dinner party: six people, dishes you have cooked before and as much as possible made the day before. Running it as a planned project with a countdown, a schedule and a debrief builds the habits that make every later dinner easier.

                ## Milestones
                1. A date fixed and five guests invited with the dietary question.
                2. A three-course menu chosen from dishes you have cooked before, with only one cooked to order.
                3. The countdown and final three hours schedule written.
                4. The dinner held and a debrief written the next morning.
              priority: high
              deadlineOffsetDays: 42
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A dinner for six held on the planned date using a written countdown, with a debrief recorded within a day."
                cadence: one-shot
                effort_hours_estimate: "10"
              tasks:
                - "Pick a date four to six weeks away and invite five guests"
                - "Choose a menu from dishes you have cooked at least twice"
                - "Copy the countdown checklist for this dinner"
                - "Note the three things you would change once the guests have gone"
            - name: Birthday dinner for someone close
              description: |-
                ## Purpose
                Birthday dinners are about one person, so the menu should be built around what they love rather than what shows off the cook. Planning it a month out, with their favourite dish as the main, a dessert they would choose and the guests they would want, makes it feel personal rather than generic.

                ## Milestones
                1. The guest of honour's favourite dishes and dislikes confirmed, quietly if it is a surprise.
                2. The guest list agreed with someone who knows them well.
                3. The menu built around their favourite main, with the dessert ordered or practised.
                4. The dinner held, with one small personal touch at the table.
              priority: medium
              deadlineOffsetDays: 60
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A birthday dinner held on or near the date, with the main course chosen from the guest of honour's stated favourites."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Find out the guest of honour's favourite dishes and dislikes"
                - "Agree the guest list with someone who knows them well"
                - "Decide whether to bake, buy or order the birthday dessert"
                - "Plan one personal touch for the table such as a printed menu card"
            - name: Summer long-table dinner outdoors
              description: |-
                ## Purpose
                An outdoor dinner on a warm evening is one of the best ways to seat more people than the dining table holds. It needs a weather back-up, food that sits happily at room temperature, light for after dark and a plan for insects and the evening chill, so it is worth planning a couple of months ahead.

                ## Milestones
                1. A date chosen with a rain plan: a cover, a gazebo or an indoor fallback layout.
                2. A menu of mostly room-temperature dishes that do not wilt in heat.
                3. Lighting, blankets and insect protection in place.
                4. Food kept covered and shaded, with cold dishes held on ice.
              priority: low
              deadlineOffsetDays: 120
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "An outdoor dinner held with a written rain plan and a menu where most dishes are served at room temperature."
                cadence: one-shot
                effort_hours_estimate: "10"
              tasks:
                - "Pick two possible dates and sketch an indoor fallback layout"
                - "Plan a menu of dishes that are good at room temperature"
                - "Sort out lighting, blankets and covers to keep insects off the food"
                - "Arrange ice and covered trays for the cold dishes"
            - name: Welcome supper for new neighbours
              description: |-
                ## Purpose
                Inviting new neighbours to eat within their first few months builds connections that are much harder to start a year later. A relaxed weeknight or Sunday supper, with one-pot food, an early finish and children welcome, keeps it easy for both sides.

                ## Milestones
                1. The neighbours invited in person, with a choice of two dates.
                2. A one-pot or traybake main chosen that can wait if people arrive late.
                3. Dietary needs and the ages of any children checked.
                4. The supper held and contact details swapped.
              priority: low
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A supper for new neighbours held within three months of them moving in, with contact details exchanged."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Invite the neighbours in person with a choice of two dates"
                - "Choose a one-pot main that can wait for late arrivals"
                - "Ask about dietary needs and the ages of any children"
                - "Swap phone numbers before they leave"
            - name: Hosting colleagues or a manager at home
              description: |-
                ## Purpose
                Having colleagues round mixes work and home, and most of the risk is social rather than culinary. Choosing familiar food, pacing the drinks gently, mixing people across teams and setting a clear finish time lets you enjoy the evening instead of performing all night.

                ## Milestones
                1. The guest list and any partners confirmed, with dietary needs collected.
                2. A menu chosen from your signature dishes, with nothing experimental.
                3. Plenty of alcohol-free options, and food served with the first drink.
                4. A seating plan that mixes teams and seniority.
              priority: medium
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A colleagues' dinner held with a menu made entirely of tested dishes and a seating plan that mixed teams."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Confirm who is coming and whether partners are invited"
                - "Build the menu only from dishes you have served before"
                - "Plan alcohol-free drinks and food to go with the first round"
                - "Draw a seating plan that mixes people from different teams"
            - name: Hosting from a small kitchen with no dining table
              description: |-
                ## Purpose
                Many renters host from a galley kitchen with one oven and a sofa instead of a dining room. Designing menus around the hob and one oven shelf, with cold starters, a single big pot and a folding table or floor seating, makes dinner for six possible in a one-bedroom flat.

                ## Milestones
                1. A menu pattern that needs one oven shelf and two hob rings at most.
                2. A seating arrangement for six worked out, such as a folding table, coffee table or floor cushions.
                3. Fridge space cleared by moving drinks to a cool box.
                4. One dinner for six hosted in the flat.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A small-kitchen menu using no more than one oven shelf and two hob rings has been served to six guests at home."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Write a menu that uses one oven shelf and two hob rings at most"
                - "Work out where six people will sit and what they will eat from"
                - "Plan a cool box for drinks to free up the fridge"
                - "Host six people and note what the space could not handle"
            - name: Dinner parties with young children at home
              description: |-
                ## Purpose
                Parents of young children often stop hosting because evenings feel impossible. Shifting the format, with a children's tea at five, a later adult start after bedtime, a menu cooked mostly during nap time and guests who understand a baby monitor on the table, makes regular dinners realistic again.

                ## Milestones
                1. A format chosen: an early family meal, an after-bedtime dinner, or children fed first and joining for dessert.
                2. A menu that can be cooked in short bursts during the day.
                3. Bedtime protected, with a clear plan for who settles the children.
                4. One dinner hosted in the new format.
              priority: medium
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "One dinner hosted with young children at home, using a written format and a menu cooked mostly before bedtime."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Choose the format that suits your children's bedtimes"
                - "Pick a menu that can be cooked in short bursts during the day"
                - "Agree who handles bedtime on the night"
                - "Ask guests who are parents whether their children are coming"
            - name: Shared-cost and bring-a-dish dinners
              description: |-
                ## Purpose
                Students, new graduates and anyone short of money can still host well by sharing the cost or the cooking. A bring-a-dish format with the host coordinating the courses, or a split bill agreed in the invitation, keeps the evening generous without one person paying for everyone.

                ## Milestones
                1. A format chosen: host cooks and splits the cost, or guests bring assigned dishes.
                2. Courses and dishes assigned so there are not five desserts.
                3. A simple way to split costs agreed in advance.
                4. One shared dinner held and any costs settled within a week.
              priority: low
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "One shared dinner held with dishes assigned in advance and any costs settled within a week."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Choose between a split-cost dinner and a bring-a-dish dinner"
                - "Assign each guest a course or a dish so nothing is doubled"
                - "Put the cost split in the invitation message"
                - "Settle the shared costs within a week of the dinner"
            - name: One menu for a mixed-diet table
              description: |-
                ## Purpose
                Vegan, gluten-free and meat-loving guests at one table can easily turn into three separate meals. Building the menu so that most dishes are naturally free from the restricted ingredients, with one optional component served on the side, feeds everyone the same meal and keeps the host sane.

                ## Milestones
                1. Each guest's needs written down from the invitation answers.
                2. A menu where the starter, main and dessert suit every guest.
                3. One add-on, such as a meat side or a cheese course, served separately.
                4. Every packaged ingredient checked against the guests' needs and the packaging kept.

                ## Notes
                Cook the free-from dishes first, with clean utensils, and keep them covered. For coeliac or allergic guests, ask what they need rather than relying on general rules.
              priority: high
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A dinner served where every guest could eat the starter, main and dessert, with the add-on served separately."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "List each guest's dietary needs from the invitation answers"
                - "Choose a main that suits every guest and one optional add-on"
                - "Read every packaged ingredient label against the guests' needs"
                - "Add one tested free-from dish to the menu bank @recurring(quarterly)"
            - name: Hosting older relatives comfortably
              description: |-
                ## Purpose
                Older guests may find late dinners, low chairs, background music and dim candlelight harder than they let on. An earlier start, a firm chair with arms, good light on faces for anyone who lip-reads, softer textures where chewing is hard and an easy route to the bathroom make the evening one they enjoy rather than endure.

                ## Milestones
                1. Mobility, hearing, eyesight and eating needs of older guests asked about privately.
                2. Start time, seating and lighting adjusted to suit them.
                3. At least one course easy to eat for anyone with chewing or swallowing difficulties.
                4. Transport home arranged before the evening starts.
              priority: medium
              frontmatter:
                mode: service
                output_kind: event-completion
                success_criteria: "A dinner held with older relatives where start time, seating and food were adjusted to the needs they described."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Ask older guests privately what would make the evening easier"
                - "Set an earlier start and put a firm chair with arms at the table"
                - "Turn the music off and light the table so faces are easy to see"
                - "Arrange lifts or taxis home before the evening starts"
            - name: Co-hosting roles with a partner or friend
              description: |-
                ## Purpose
                Two hosts both cooking can mean nobody greets the guests, while one busy cook and one idle host can breed resentment. Splitting roles clearly into kitchen and front of house, with a shared countdown and agreed handover points, means guests are looked after and both hosts get to sit down.

                ## Milestones
                1. Roles agreed: who cooks, who greets, pours, clears and runs the music.
                2. A shared countdown with a name against every task.
                3. Handover points set for serving each course.
                4. A short joint debrief after the next dinner.
              priority: medium
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "Roles and a named countdown were agreed before one dinner, and both hosts recorded what to change in a shared debrief."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Talk through who will cook, greet, pour and clear"
                - "Put a name against every task on the countdown"
                - "Agree who calls each course to the table"
                - "Swap notes on what to change over breakfast the next day"
            - name: Six-course tasting menu at home
              description: |-
                ## Purpose
                Tasting menus of small courses are an ambitious format that suits six or fewer guests and a host who enjoys precision. They demand exact portions, a strict running order and dishes that can be plated in batches, and they show off technique better than any single main course.

                ## Milestones
                1. Six small courses designed with a clear progression from light to rich and back to fresh.
                2. Each course portioned and costed, with prep done at least a day ahead.
                3. A full practice run of the plating order, timed course by course.
                4. The tasting dinner served with even pacing between courses.

                ## Notes
                Keep each course to a few bites. Six full portions will defeat everyone before dessert.
              priority: low
              deadlineOffsetDays: 180
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A six-course tasting dinner served to guests, with portions, timings and a running order written down in advance."
                cadence: phased
                effort_hours_estimate: "16"
              tasks:
                - "Sketch six courses that move from light to rich and back to fresh"
                - "Portion and cost each course in writing"
                - "Run a timed plating practice for all six courses"
                - "Print a small menu card for each guest"
            - name: Sixteen guests with a hired helper
              description: |-
                ## Purpose
                Beyond twelve guests, one host cannot cook, serve and clear without the evening suffering. Hiring a helper for service and washing up, or a trusted friend paid in kind, plus a menu designed for volume, makes a large seated dinner possible at home.

                ## Milestones
                1. Seating, tableware and oven capacity confirmed for sixteen, with hire booked where needed.
                2. A volume menu chosen: one-tray mains, cold starters and a dessert plated ahead.
                3. A helper booked with a written brief of duties, timings and pay.
                4. The dinner run with the helper briefed an hour before guests arrive.
              priority: low
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A seated dinner for sixteen held with a booked helper who worked from a written brief."
                cadence: one-shot
                effort_hours_estimate: "16"
              tasks:
                - "Check the capacity note against sixteen guests and list the gaps"
                - "Plan a menu where every main fits on trays in one oven"
                - "Book a helper and write a one-page brief of their duties"
                - "Brief the helper an hour before the first guest arrives"
            - name: Running a supper club for paying guests
              description: |-
                ## Purpose
                Charging for dinner turns hosting into a small food business, with rules that differ from cooking for friends. Most places expect some form of food business registration, hygiene training and insurance before you take money, so the work starts with checking those, then costing, pricing and a pilot night.

                ## Milestones
                1. Your local food authority's requirements for home food businesses checked and met, for example registration and hygiene training.
                2. Public liability insurance in place.
                3. A menu costed, with a price per head that covers ingredients, hire and your time.
                4. A pilot night held for friends paying a reduced price, with feedback gathered.

                ## Notes
                Rules on selling food and alcohol from home vary widely. Check with your local authority before advertising, and do not sell alcohol unless you hold the right licence.
              priority: low
              deadlineOffsetDays: 365
              frontmatter:
                mode: service
                output_kind: deliverable
                success_criteria: "A pilot supper club night held after registration and insurance were confirmed, with a costed price per head on record."
                cadence: phased
                effort_hours_estimate: "30"
              tasks:
                - "Look up your local authority's rules for running a food business from home"
                - "Book a recognised food hygiene course"
                - "Get quotes for public liability insurance"
                - "Cost a pilot menu and set a price per head"
                - "Renew the food business registration and insurance @recurring(yearly)"
            - name: Personal hosting playbook
              description: |-
                ## Purpose
                After a year of dinners you will have quantities, timelines, menus, debriefs and guest notes scattered across pages. Pulling them into one playbook, with your signature menus, capacity note, countdown and your own rules, gives you a reference you trust more than any cookbook and can hand to a co-host or a grown-up child.

                ## Milestones
                1. One document holding or linking the capacity note, quantities sheet, countdown and menu bank.
                2. Three complete menus with shopping lists and schedules.
                3. Ten hosting rules written from your own debriefs.
                4. The playbook used to plan a whole dinner in under an hour.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A single playbook holds three complete menus, the countdown, the quantities sheet and ten personal rules, and was used to plan one dinner."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Gather the capacity note, quantities sheet and countdown into one document"
                - "Write out three complete menus with shopping lists and schedules"
                - "Draft your ten hosting rules from past debriefs"
                - "Rewrite the playbook's front page with this year's lessons @recurring(yearly)"
---

# Dinner Party Hosting Menus

This area is for anyone who wants to have people round for dinner and still enjoy the evening, from a first dinner for six to a tasting menu or a supper club. It starts with the foundations (knowing your capacity, quantities per head, asking about diets, a one last-minute dish rule, a countdown and a signature menu), then the routines that keep hosting regular, the techniques of roasting, sauces, canapes, plating and service, the fixes and decisions that end late mains and washing-up mountains, dated dinners from a birthday to an outdoor long table, versions for small flats, young families, older guests and co-hosts, and finally the specialist formats.

What repeats is choosing the next dinner date each month, a monthly trial cook and debrief review, pantry and freezer checks, a menu bank update, a quarterly seasonal menu and linen check, and a yearly rewrite of your hosting playbook. The Operational checklist, Metrics log and Purchase decision templates pair with the projects that name them. Installing adds all 50 projects as active, so archive the ones that are not for you yet.
