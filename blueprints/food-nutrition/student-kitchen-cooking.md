---
id: food-nutrition.student-kitchen-cooking
name: Student Kitchen Cooking
description: "A shared kitchen that works for you: a move-in record, a labelled shelf, a one-crate kit, fast one-pan dinners, rotas and fridge etiquette, and plans for exams, house moves and life after halls."
category: personal
version: 1.0.0
tags: [food-nutrition, student-kitchen-cooking, student, renter, shared-kitchen, halls, fridge-etiquette]
author: Aurum Technology
starter_structure:
  templates:
    - purchase-decision
    - weekly-meal-plan
    - habit-tracker
    - meeting-notes
  pillars:
    - name: Food & Nutrition
      emoji: "🥗"
      description: "What gets eaten, and how it gets to the table: meal planning, shopping and batch cooking, dietary needs and goals, cooking skill as a lifelong craft, and the food rituals that hold a household together."
      pillarFrontmatter:
        review_cadence: monthly
      areas:
        - name: Student Kitchen Cooking
          description: "Feeding yourself well in a shared student kitchen with cheap, quick recipes, basic equipment and shared-fridge etiquette."
          projects:
            - name: Move-in day kitchen walk-round and photo record
              description: |-
                ## Purpose
                Halls and shared houses often charge leavers for damage that was there before they arrived, and the kitchen is where most of those charges land: scorched worktops, cracked hob glass, a fridge door that never sealed. Walking round on the first day, photographing every surface and appliance and sending the list to the accommodation office puts a dated record on file before anyone can blame you.

                ## Milestones
                1. Dated photographs of the hob, oven, fridge, freezer, microwave, sink and worktops saved in one folder.
                2. A written list of existing damage and missing items sent to the accommodation office or landlord.
                3. A reply or reference number for that report kept with the photos.
                4. A note of which appliances and utensils the accommodation provides and which you must bring.

                ## Notes
                Check the inventory you were given against what is actually there. Missing items not reported in the first week are often charged at the end of the year.

                Before you start: this plan is general information to help you organise your own health. It is not medical advice and does not replace a doctor, nurse, pharmacist or other qualified professional. Check any change to treatment, medicine or diet with them first, and get urgent care if you feel unwell.
              priority: high
              deadlineOffsetDays: 7
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A dated photo set and damage list for the shared kitchen has been sent to the accommodation office, with their acknowledgement saved."
                cadence: one-shot
                effort_hours_estimate: "1"
              tasks:
                - "Photograph the hob, oven, fridge, sink and worktops with the date visible"
                - "List every scorch mark, crack, stain and missing item you can see"
                - "Email the list and photos to the accommodation office or landlord"
                - "Save their reply alongside the photos in one folder"
            - name: Accommodation rules on cooking, appliances and fire alarms
              description: |-
                ## Purpose
                Every hall of residence and most shared tenancies have written rules about which appliances are allowed, where you may cook and what happens when burnt toast sets off the fire alarm. Evacuating a whole block at midnight can mean a charge for the person who caused it, and a banned appliance found at a room inspection can be confiscated. Reading the rules once in your first week saves money and a lot of awkward fire assemblies.

                ## Milestones
                1. The kitchen, appliance and fire sections of your accommodation agreement read and noted.
                2. A short list of appliances you may and may not use, in the kitchen and in your room.
                3. The charge for a false fire alarm, if any, written down.
                4. Kitchen opening hours or quiet hours noted, if the building sets them.
              priority: high
              deadlineOffsetDays: 7
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A one-page summary of your accommodation's kitchen, appliance and fire alarm rules exists, including any false alarm charge."
                cadence: one-shot
                effort_hours_estimate: "1"
              tasks:
                - "Find the kitchen and fire safety sections of your accommodation agreement"
                - "Ask the agent to summarise those sections into one page"
                - "List which appliances are banned in bedrooms and in the kitchen"
                - "Note the charge for setting off a fire alarm, if your building has one"
                - "Ask the residence team what usually triggers the kitchen smoke detector"
            - name: Claiming your fridge shelf and cupboard space
              description: |-
                ## Purpose
                Six to twelve people sharing two fridges is the commonest source of friction in student kitchens, and it starts in week one when nobody knows whose shelf is whose. Agreeing a shelf, a cupboard and a freezer drawer per person in the first days, and labelling them, prevents most of the arguments that follow.

                ## Milestones
                1. Fridge shelves, cupboards and freezer space split between everyone in the kitchen.
                2. Each space labelled with a name or room number.
                3. A shared shelf agreed for milk, butter and condiments if the group wants one.
                4. The split written in the kitchen group chat so newcomers can see it.

                ## Notes
                Raw meat belongs on the lowest shelf whoever owns it, so agree that before handing out shelves.
              priority: high
              deadlineOffsetDays: 10
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Every person in the kitchen has a labelled fridge shelf, cupboard and freezer space, with the split posted in the group chat."
                cadence: one-shot
                effort_hours_estimate: "1"
              tasks:
                - "Count the fridge shelves, cupboards and freezer drawers in your kitchen"
                - "Propose a fair split of the space in the kitchen group chat"
                - "Label your own shelf, cupboard and drawer with a name or room number"
                - "Check the labels are still in place at the start of each term @recurring(quarterly)"
            - name: Housemate allergies and dietary needs sheet
              description: |-
                ## Purpose
                Somebody in a kitchen of eight is likely to have a food allergy, coeliac disease, a religious rule or a strict vegetarian diet, and shared pans, toasters and chopping boards are where those needs collide. Gathering everyone's needs on one sheet, with the few rules that follow from them, means nobody has to rely on remembering a conversation from freshers' week.

                ## Milestones
                1. Everyone in the kitchen asked about allergies, intolerances and dietary rules, with sharing left optional.
                2. A one-page sheet listing needs by first name, agreed with each person.
                3. House rules that follow from it written down, such as a separate toaster or no nut butter on shared boards.
                4. The sheet pinned up, and anyone carrying an adrenaline pen has said where it is kept.

                ## Notes
                Ask, do not assume, and let each person decide what goes on the sheet. Someone with a severe allergy should brief the kitchen themselves on what an emergency looks like.
              priority: high
              deadlineOffsetDays: 14
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A sheet of housemates' allergies and dietary needs, agreed with each person, is posted in the kitchen with the house rules that follow from it."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Post a message inviting housemates to share any allergies or dietary rules"
                - "Write a one-page sheet with each person's agreed details"
                - "Agree two or three house rules that protect the people listed"
                - "Pin the sheet inside a cupboard door or beside the fridge"
                - "Update the sheet whenever someone moves in or out"
            - name: One-crate personal cooking kit
              description: |-
                ## Purpose
                Pans and knives left in a shared kitchen tend to be borrowed, burnt or abandoned in the sink, so most students end up keeping their own kit in a crate in their room. Choosing ten or so pieces that fit one crate, bought second-hand or from a basic range, covers nearly every student meal without overloading a small bedroom.

                ## Milestones
                1. A list of ten core items: frying pan with a lid, saucepan, chef's knife, board, baking tray, wooden spoon, spatula, colander, plate, bowl and mug.
                2. Items already owned or available from family ticked off.
                3. The rest bought within a total set beforehand, second-hand where possible.
                4. Everything fitting in one lidded crate that slides under the bed or desk.

                ## Notes
                Start from the **Purchase decision** template. One decent frying pan with a lid does more work than a cheap five-piece set.
              priority: high
              deadlineOffsetDays: 14
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A personal cooking kit of about ten items fits in one crate, bought within the total you set beforehand."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Write your list of ten core kitchen items and a total to spend"
                - "Ask family and friends which items they can spare"
                - "Check charity shops and resale apps for the missing pieces"
                - "Buy a lidded crate that fits under your bed or desk"
            - name: Sealed dry food box against pests and borrowing
              description: |-
                ## Purpose
                Shared cupboards in older halls attract mice and pantry moths, and open packets of pasta and cereal are their first target. A lidded box of sealed tubs, kept in your cupboard or your room, keeps dry food clean, discourages casual borrowing and makes it obvious when something is running low.

                ## Milestones
                1. A lidded plastic box and four to six clip-top tubs in use.
                2. Rice, pasta, oats, cereal and flour decanted or kept in clipped packets.
                3. No open packets of yours left loose in the shared cupboard.
                4. Any signs of pests reported to the accommodation office the same day.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "All your dry food is stored in sealed tubs inside one lidded box, with no open packets of yours in the shared cupboard."
                cadence: one-shot
                effort_hours_estimate: "1"
              tasks:
                - "Empty your cupboard and check every packet for holes or droppings"
                - "Buy a lidded box and a set of clip-top tubs"
                - "Decant rice, pasta, oats and cereal into the tubs"
                - "Report any mouse droppings or moths to the accommodation office"
            - name: Kitchen rush hour map for your building
              description: |-
                ## Purpose
                Between six and eight in the evening a kitchen shared by ten people can have a queue for every hob ring, and cooking in a crowd is how pans get knocked and food gets burnt. A week of noticing when the kitchen is empty lets you move your main cooking to the quiet slots and keep evenings free.

                ## Milestones
                1. One week of notes on how busy the kitchen is at breakfast, lunch, early evening and late evening.
                2. Your two or three quietest cooking slots identified.
                3. Those slots set against your timetable for the term.
                4. A default weekday cooking time chosen and shared with housemates.
              priority: medium
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "Your quietest kitchen slots are identified from a week of notes and a default weekday cooking time is chosen."
                cadence: one-shot
                effort_hours_estimate: "1"
              tasks:
                - "Note how many people are cooking each time you pass the kitchen this week"
                - "Mark the quiet slots against your timetable"
                - "Choose a default weekday cooking time"
                - "Tell housemates when you usually cook so the busy slots spread out"
            - name: First five shared-kitchen dinners under thirty minutes
              description: |-
                ## Purpose
                Five dinners you can cook without a recipe, in under half an hour, on one or two rings, are enough to stop the slide into toast and takeaways by week three. Choosing them for a shared kitchen means one pan, few ingredients and little washing up, not the elaborate dishes a home kitchen allows.

                ## Milestones
                1. Five dinners chosen that each use one or two pans and cost little per portion.
                2. Each dinner cooked at least twice, timed from start to washed up.
                3. A short ingredient list for each kept on your phone.
                4. All five cooked from memory without looking at the recipe.

                ## Notes
                Good starting points: a tomato and lentil pasta, egg fried rice, a chickpea curry, a jacket potato with beans and cheese, and a noodle stir fry.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Five dinners are each cooked from memory in under thirty minutes including washing up, with ingredient lists saved."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Pick five one-pan dinners you would happily eat every week"
                - "Save a short ingredient list for each on your phone"
                - "Cook each dinner twice this month and time it"
                - "Cook all five once more without looking at a recipe"
            - name: Kitchen fire safety and pan fire drill
              description: |-
                ## Purpose
                Cooking is one of the commonest causes of fires in student housing, usually a pan left on a ring while someone goes back to their room, or a grill pan full of fat. Knowing where the fire blanket is, what to do if oil catches and when to leave and call for help takes ten minutes to learn and is not something to work out in the moment.

                ## Milestones
                1. The fire blanket, extinguisher and nearest exit located in your kitchen.
                2. Your fire service's steps for a pan fire learned, including never using water on burning oil.
                3. A house rule agreed that nobody leaves a lit hob or grill unattended.
                4. The fire blanket checked as present and undamaged.

                ## Notes
                Follow your local fire service's advice. If in any doubt, get out, close the door behind you and call the emergency number.
              priority: high
              deadlineOffsetDays: 14
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "You can point to the fire blanket and exit, describe your fire service's pan fire steps, and a no-unattended-hob rule is agreed."
                cadence: one-shot
                effort_hours_estimate: "1"
              tasks:
                - "Find the fire blanket, extinguisher and nearest exit from your kitchen"
                - "Read your fire service's advice on oil and pan fires"
                - "Agree a no-unattended-hob rule in the kitchen group chat"
                - "Check the fire blanket is still on the wall and intact @recurring(quarterly)"
            - name: Weekly meal plan around your timetable
              description: |-
                ## Purpose
                Lectures, labs, shifts and sports nights change from day to day, so a student week has long days when cooking is impossible and short days when it is easy. Planning the meals each Friday against the next week's timetable puts the cooking on the easy days and the leftovers on the hard ones.

                ## Milestones
                1. Next week's timetable, shifts and evening plans checked every Friday.
                2. Cooking nights and leftover nights marked on the plan.
                3. A shopping list written from the plan.
                4. Fewer than two unplanned takeaways a week, counted over a month.

                ## Notes
                Start from the **Weekly meal plan** template.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A weekly meal plan matched to the timetable is written every Friday for four weeks running, with unplanned takeaways counted."
                cadence: rolling
              tasks:
                - "Copy next week's timetable and shifts into a meal plan"
                - "Mark which nights you cook and which are leftover nights"
                - "Plan next week's meals against your timetable @recurring(weekly:fri)"
                - "Count unplanned takeaways at the end of the month"
            - name: Shared online grocery order to reach the delivery minimum
              description: |-
                ## Purpose
                Online supermarkets often set a minimum basket and charge a high fee on small orders, and carrying a week's shopping back from a distant supermarket by bus is miserable. Pooling one weekly order with two or three housemates clears the minimum, splits the fee and gets heavy items like milk, tins and potatoes to the door.

                ## Milestones
                1. Two or three housemates signed up to a shared weekly order.
                2. One shared basket or list that each person adds to by a set cut-off.
                3. A delivery slot booked when someone is reliably in.
                4. Costs split by item through a bill-splitting app within a day of delivery.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A shared weekly grocery order with at least two housemates has run for four weeks, with costs split within a day of each delivery."
                cadence: rolling
              tasks:
                - "Ask in the group chat who wants to share a weekly grocery order"
                - "Set up a shared list and a cut-off time for adding items"
                - "Book a delivery slot when one of you is home"
                - "Place the shared order and split the bill in the app @recurring(weekly:thu)"
            - name: Sunday evening cook-up in the quiet kitchen
              description: |-
                ## Purpose
                Sunday evening is often the quietest time in a shared kitchen, with housemates still away or not yet thinking about the week. One big pot cooked then and portioned into four tubs covers the long weekday evenings when the queue for the hob is worst.

                ## Milestones
                1. One recipe chosen each week that makes four portions.
                2. Four lidded tubs, labelled with your name and the date.
                3. Two portions in the fridge and two in your freezer space.
                4. Every portion eaten within its safe fridge time, or frozen.

                ## Notes
                Cool the pot quickly, ideally within two hours, before it goes into the shared fridge.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A four-portion pot has been cooked on six Sunday evenings in a row, with every portion labelled and eaten or frozen in time."
                cadence: rolling
              tasks:
                - "Buy four lidded tubs that fit your fridge shelf"
                - "Choose this week's four-portion recipe"
                - "Cook, cool and portion the big pot @recurring(weekly:sun)"
                - "Label each tub with your name and the date"
            - name: Own-shelf fridge check before it smells
              description: |-
                ## Purpose
                Forgotten food on one shelf becomes everyone's problem when it leaks, moulds or smells, and it is the complaint that turns housemates against each other fastest. A five-minute check of your own shelf each week, binning anything past its use-by date, keeps you off the wrong end of the group chat.

                ## Milestones
                1. Your shelf, door space and freezer space checked every week.
                2. Anything past its use-by date, mouldy or leaking thrown away the same day.
                3. Spills wiped before they drip onto the shelf below.
                4. Food close to its date moved to the front and eaten first.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Your fridge shelf has been checked weekly for eight weeks with nothing past its use-by date left on it."
                cadence: rolling
              tasks:
                - "Clear and wipe your fridge shelf today"
                - "Check your shelf and freezer space and bin anything past use-by @recurring(weekly:wed)"
                - "Move food near its date to the front of the shelf"
                - "Keep a roll of kitchen paper in your crate for spills"
            - name: Wash-up within thirty minutes habit
              description: |-
                ## Purpose
                Dirty pans left soaking for days are the classic housemate complaint, and once one person does it the sink fills for everyone. Washing, drying and putting away your own things within half an hour of eating is the single habit that makes you easy to live with.

                ## Milestones
                1. A personal rule written down: everything washed, dried and away within thirty minutes.
                2. A tea towel and sponge of your own kept in your crate.
                3. The habit ticked off every day you cook for four weeks.
                4. No pan of yours left in the sink overnight in that time.

                ## Notes
                Start from the **Habit tracker** template.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "For four weeks every cooking day is ticked off with your things washed and away within thirty minutes, and no pan left overnight."
                cadence: rolling
              tasks:
                - "Put your own sponge and tea towel in your crate"
                - "Set up a habit tracker for washing up within thirty minutes"
                - "Wash, dry and put away everything you used after cooking @recurring(daily)"
                - "Review the month's ticks and any missed days"
            - name: Bin and recycling rota with housemates
              description: |-
                ## Purpose
                Overflowing bins, unrinsed tins and pizza boxes stacked by the door are the most visible sign of a kitchen going wrong, and they attract flies and mice. A simple rota, with the collection day and the recycling rules written up, shares the job and keeps the kitchen ready for inspection.

                ## Milestones
                1. The bin collection days and local recycling rules found and written up.
                2. A rota agreed with a name against each week.
                3. The rota posted in the kitchen and the group chat.
                4. Your own turns done on time for a full term.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A bin and recycling rota is posted in the kitchen and your own turns have been done on time for a full term."
                cadence: rolling
              tasks:
                - "Find your building's bin collection days and recycling rules"
                - "Draft a weekly bin rota and share it in the group chat"
                - "Check the rota and take the bins out on your weeks @recurring(weekly:mon)"
                - "Rinse your own tins and jars before they go in the recycling"
            - name: Shared staples kitty for oil, salt and washing-up liquid
              description: |-
                ## Purpose
                Washing-up liquid, bin bags, oil, salt and foil get used by everyone and bought by the same one or two people, which builds quiet resentment. A small kitty, paid into monthly through a bill-splitting app with one person doing the buying, ends the arguments over who last bought the sponges.

                ## Milestones
                1. A list of shared items the kitchen agrees to buy together.
                2. A monthly amount per person agreed, small enough for everyone.
                3. A bill-splitting group or shared pot set up.
                4. Shared items bought from the kitty without running out for a whole term.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A shared kitty covers an agreed list of kitchen consumables, with everyone paying monthly and nothing running out for a term."
                cadence: rolling
              tasks:
                - "List the items everyone uses, such as washing-up liquid and bin bags"
                - "Propose a small monthly amount per person in the group chat"
                - "Set up a shared pot in a bill-splitting app"
                - "Pay your share and check the shared items are stocked @recurring(monthly:3)"
            - name: Freezer drawer list with dates
              description: |-
                ## Purpose
                A single freezer drawer fills fast with unlabelled tubs and half-used bags of peas, and food lost at the back for months ends up in the bin. A list on your phone of what is in the drawer, with dates, means you eat the oldest first and only buy what fits.

                ## Milestones
                1. Your freezer drawer emptied, checked and repacked with the oldest food at the front.
                2. Every tub and bag labelled with contents and date.
                3. A list of the drawer contents kept on your phone.
                4. Anything older than three months eaten or binned.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Your freezer drawer has a dated contents list on your phone, checked monthly, with nothing older than three months in it."
                cadence: rolling
              tasks:
                - "Empty your freezer drawer and write down everything in it"
                - "Label any unmarked tubs with contents and date"
                - "Update the list and eat the oldest item first @recurring(monthly:14)"
                - "Keep a marker pen and freezer labels in your crate"
            - name: Start-of-term house kitchen meeting
              description: |-
                ## Purpose
                Small kitchen problems, such as a broken toaster, a rota nobody follows or a shelf someone has taken over, are easier to fix in a fifteen-minute meeting than in a passive-aggressive note on the fridge. Holding one at the start of each term, with a short agenda, keeps the kitchen working without anyone becoming the house parent.

                ## Milestones
                1. A date at the start of term agreed with housemates.
                2. An agenda of three or four items collected beforehand.
                3. Decisions and owners written up and shared in the group chat.
                4. The previous term's decisions checked at the next meeting.

                ## Notes
                Start from the **Meeting notes** template.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: decision
                success_criteria: "A kitchen meeting has been held at the start of each term with decisions and owners recorded in the group chat."
                cadence: cyclic
              tasks:
                - "Suggest a fifteen-minute kitchen meeting date in the group chat"
                - "Collect agenda items from housemates two days before"
                - "Write up the decisions and who owns each one"
                - "Hold the start-of-term kitchen meeting @recurring(quarterly)"
            - name: Packed food for long campus days
              description: |-
                ## Purpose
                Days with back-to-back lectures, a lab and an evening in the library often end with expensive campus café food or nothing at all until late. Packing a lunch and snacks the night before, using leftovers from the shared kitchen, covers the longest days for very little.

                ## Milestones
                1. The two or three longest campus days of the week identified.
                2. A lunchbox, flask and reusable bottle in your crate.
                3. Lunch and snacks packed the night before each long day.
                4. Campus food spending on those days counted for a month.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Packed food is taken on every long campus day for a month, with campus food spending on those days recorded."
                cadence: rolling
              tasks:
                - "Mark your longest campus days on your timetable"
                - "Buy or find a leak-proof lunchbox and a flask"
                - "Pack tomorrow's lunch and snacks the night before @recurring(weekly:tue,thu)"
                - "Note what you spent on campus food on long days this month"
            - name: Monthly recipe swap with a housemate
              description: |-
                ## Purpose
                Student kitchens bring together people from different towns and countries, each with a few dishes they have eaten at home for years. Asking one housemate a month to teach you their dish, and teaching one of yours back, builds a repertoire faster than any cookbook and turns a shared kitchen into something better than a queue.

                ## Milestones
                1. One housemate a month asked to teach you a dish they know well.
                2. Each dish cooked together once and then alone once.
                3. The recipe written down in your own words.
                4. One of your own dishes taught back in return.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Three dishes learned from housemates in three months, each cooked alone and written down, with one of yours taught back."
                cadence: rolling
              tasks:
                - "Ask a housemate which dish they would be happy to teach"
                - "Cook the dish together in a quiet kitchen slot"
                - "Write the recipe down in your own words afterwards"
                - "Arrange this month's recipe swap with a housemate @recurring(monthly:20)"
            - name: One-pan dinners that save hob time and washing up
              description: |-
                ## Purpose
                When ten people share four hob rings, a dinner that needs three pans is a dinner that takes an hour. Learning a handful of one-pan methods, such as pasta cooked in its own sauce, rice cooked with its flavourings and a frying pan hash, cuts both hob time and the washing up.

                ## Milestones
                1. The one-pot pasta method practised until the pasta is cooked and the sauce thick at the same moment.
                2. Absorption-method rice cooked with stock and vegetables in one pan.
                3. A frying pan dinner built from potatoes or leftover rice.
                4. Three one-pan dinners in regular rotation.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Three one-pan dinners, including one pasta and one rice dish, are cooked regularly in a single pan each."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Find one recipe each for one-pot pasta, pan rice and a hash"
                - "Cook the one-pot pasta and note how much liquid it needed"
                - "Cook a pan of rice by the absorption method with stock"
                - "Add your three best one-pan dinners to your regular list"
            - name: Oven-tray dinners for when the hob is taken
              description: |-
                ## Purpose
                The oven is often free when every hob ring is in use, and a tray of chopped vegetables, a protein and a spice mix cooks unattended while you study. A few reliable tray bakes give you a dinner that leaves one tray to wash and no standing over a pan in a crowded kitchen.

                ## Milestones
                1. The shared oven's real heat and hot spots learned from two or three bakes.
                2. Three tray bakes cooked, each with vegetables, a protein and seasoning.
                3. Baking paper or foil used so the tray takes a minute to clean.
                4. A timer habit in place so nothing is forgotten in a shared oven.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Three tray bake dinners have been cooked in the shared oven and one is in your regular weekly rotation."
                cadence: phased
                effort_hours_estimate: "5"
              tasks:
                - "Pick three tray bake recipes with vegetables and a protein"
                - "Cook the first one and note how long it took in this oven"
                - "Set a phone timer every time something of yours is in the shared oven"
                - "Add the best tray bake to your weekly plan"
            - name: Microwave meals for a long hob queue
              description: |-
                ## Purpose
                Some nights the hob queue is too long or the kitchen too crowded, and a microwave can still produce a proper dinner rather than a ready meal. Jacket potatoes, steamed vegetables, scrambled eggs in a mug and microwave rice with a quick sauce are all possible in under fifteen minutes.

                ## Milestones
                1. A microwave-safe bowl with a vented lid and a large mug in your crate.
                2. A jacket potato, mug eggs and steamed vegetables each cooked in the microwave.
                3. Reheating rules learned: stir halfway, steaming hot throughout, reheat only once.
                4. Two microwave dinners you would choose even when the hob is free.

                ## Notes
                Never put metal or foil in a microwave, and check the shared one is clean before you use it.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Two complete microwave dinners are cooked confidently, with the reheating rules followed every time."
                cadence: phased
                effort_hours_estimate: "3"
              tasks:
                - "Buy a microwave-safe bowl with a vented lid"
                - "Cook a jacket potato in the microwave and note the timing"
                - "Try scrambled eggs in a mug and steamed frozen vegetables"
                - "Write down your two favourite microwave dinners"
            - name: Prepping ingredients in your room before you cook
              description: |-
                ## Purpose
                Kitchen time is the scarce resource in a busy hall, more than food or money. Measuring dry ingredients, mixing spices and packing everything for a recipe into one bag in your room means you walk in, cook and walk out in half the time, with fewer things forgotten.

                ## Milestones
                1. A small board and a sealed tub for prepping at your desk, where your rules allow.
                2. Spice mixes and dry ingredients measured into labelled bags in advance.
                3. A cooking bag packed for the next meal with everything it needs.
                4. Kitchen time for a regular dinner cut by at least ten minutes.

                ## Notes
                Keep raw meat and fish prep in the kitchen, never in your bedroom.
              priority: low
              frontmatter:
                mode: learning
                output_kind: habit
                success_criteria: "Kitchen time for one regular dinner has dropped by at least ten minutes after prepping its ingredients in your room."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Time your usual dinner from entering the kitchen to leaving it"
                - "Pre-mix the spices for three dinners in small labelled bags"
                - "Pack a cooking bag with everything for tomorrow's dinner"
                - "Time the same dinner again and compare"
            - name: Scaling a recipe from one portion to six
              description: |-
                ## Purpose
                Recipes are usually written for four, while a student cooks for one on a weeknight and for six on a house dinner night. Learning how to scale ingredients, which ones not to scale straight (salt, spice and liquid) and how cooking times change prevents both failed meals and wasted food.

                ## Milestones
                1. One recipe scaled down to a single portion and cooked.
                2. The same recipe scaled up to six and cooked for housemates.
                3. Notes on what did not scale straight, such as spice, salt and liquid.
                4. A simple scaling note kept with your recipes.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "One recipe has been cooked at one portion and at six, with notes on what needed adjusting beyond simple multiplication."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Choose a recipe written for four that you like"
                - "Scale it to one portion and cook it"
                - "Scale it to six and cook it for a house dinner"
                - "Write down what needed adjusting at each size"
            - name: Late-night food after a night out, safely
              description: |-
                ## Purpose
                Drunk cooking is a well-known cause of kitchen fires and burns in student housing, usually chips, toast or a grill left on while someone falls asleep. Having late-night food ready that needs no hob, such as a wrap, a sandwich or a tub of leftovers for the microwave, removes the temptation to fry at two in the morning.

                ## Milestones
                1. A personal rule that the hob, grill and frying are off limits after drinking.
                2. Three no-cook late-night options listed and kept in stock.
                3. A portion of leftovers labelled for after a night out.
                4. Housemates agreed to switch off anything left on and check on each other.

                ## Notes
                Anyone too drunk to cook is too drunk to be left alone near a hot pan.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A no-hob late-night food plan with three stocked options is in place and a house rule on cooking after drinking is agreed."
                cadence: one-shot
                effort_hours_estimate: "1"
              tasks:
                - "Write a no-hob rule for yourself for nights out"
                - "List three late-night foods that need no cooking"
                - "Stock those foods before your next night out"
                - "Agree with housemates to switch off anything left on"
            - name: Catered, part-catered or self-catered halls
              description: |-
                ## Purpose
                Prospective students choosing halls usually decide on catering by price alone, but the real differences are timetables, dietary needs and how much cooking they want to learn. Comparing the options on cost per week, meal times against lecture times and what happens with missed meals leads to a choice you will not regret by November.

                ## Milestones
                1. The weekly cost of each option worked out, including the food you would buy on top.
                2. Dining hall meal times compared with your likely timetable and sport.
                3. Dietary needs checked with each catering team.
                4. A choice made and the reasons written down before the application deadline.
              priority: medium
              deadlineOffsetDays: 30
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "Catered, part-catered and self-catered options are compared on weekly cost, meal times and dietary fit, with a choice recorded before the deadline."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "List the halls you are considering with their weekly prices"
                - "Find each dining hall's meal times and what happens with missed meals"
                - "Email the catering team about any dietary need you have"
                - "Write down your choice and the two reasons that decided it"
            - name: Bedroom mini fridge, allowed and worth it or not
              description: |-
                ## Purpose
                A mini fridge in your bedroom solves a crowded shared fridge, but many halls ban them or charge for the electricity, and a cheap one may struggle to stay cold enough for milk and meat. Checking the rules and the running cost before buying avoids a confiscated appliance or a charge.

                ## Milestones
                1. Your accommodation's rules on bedroom fridges confirmed in writing.
                2. Any electricity charge or electrical safety test requirement noted.
                3. Two or three models compared on size, noise and whether they reach fridge temperature.
                4. A decision made, with a fridge thermometer bought if you go ahead.

                ## Notes
                Start from the **Purchase decision** template.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A recorded decision on a bedroom mini fridge, based on written accommodation rules, running cost and a model comparison."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Ask the accommodation office whether bedroom fridges are allowed"
                - "Check whether there is an electricity or safety test charge"
                - "Compare three small fridges on noise, size and temperature"
                - "Record the decision and buy a fridge thermometer if you go ahead"
            - name: What to pool and what to keep as your own kit
              description: |-
                ## Purpose
                Some flats share everything and others share nothing, and both end badly when it is never discussed: pooled pans get ruined, private ones get borrowed anyway. Deciding as a group which items are shared, such as the kettle, toaster and baking trays, and which stay personal, such as knives and non-stick pans, sets clear expectations.

                ## Milestones
                1. A list of items the kitchen already has in common.
                2. An agreed split between shared items and personal ones.
                3. Shared items marked so nobody takes them home at the end of the year.
                4. A rule for replacing a shared item that breaks.
              priority: medium
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "The kitchen has an agreed written list of shared and personal items, with a rule for replacing breakages."
                cadence: one-shot
                effort_hours_estimate: "1"
              tasks:
                - "List the kitchen items that are already used by everyone"
                - "Propose a shared and personal split in the group chat"
                - "Mark shared items with a strip of coloured tape"
                - "Agree how a broken shared item gets replaced"
            - name: Group-bought appliance agreement
              description: |-
                ## Purpose
                Toasters, air fryers, rice cookers and sandwich makers are tempting to buy together, then cause rows over cleaning, breakdowns and who keeps them in June. A short written agreement before buying, covering the cost split, cleaning and who takes it at the end, prevents most of that.

                ## Milestones
                1. The appliance checked against your accommodation's rules.
                2. The cost split and each person's share recorded.
                3. Cleaning rules agreed, such as emptying the crumb tray weekly.
                4. End-of-year ownership decided before purchase, such as a buy-out or a draw.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A written agreement covering cost split, cleaning and end-of-year ownership exists before any shared appliance is bought."
                cadence: one-shot
                effort_hours_estimate: "1"
              tasks:
                - "Check the appliance is allowed in your accommodation"
                - "Agree each person's share of the cost"
                - "Write two cleaning rules for the appliance"
                - "Decide now who keeps it when the tenancy ends"
            - name: Resolving missing food and fridge space disputes
              description: |-
                ## Purpose
                Food going missing from your shelf, or a housemate spreading across three shelves, is common and usually careless rather than malicious, but left alone it sours a whole year. Handling it in steps (a friendly message, a direct conversation, then the residence team) resolves most cases without a war of notes on the fridge.

                ## Milestones
                1. What went missing or what changed noted calmly, with dates.
                2. A friendly general message sent to the kitchen group first.
                3. A direct conversation held with the person if it continues.
                4. The residence assistant or landlord involved only if the first two steps fail.

                ## Notes
                Labelled tubs and a crate in your room remove most of the temptation in the first place.
              priority: medium
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A food or space dispute has been raised in steps, with dates noted, and either resolved or passed to the residence team."
                cadence: one-shot
                effort_hours_estimate: "1"
              tasks:
                - "Write down what went missing and when, without guessing who"
                - "Send a friendly general message to the kitchen group"
                - "Speak to the person directly if it carries on"
                - "Contact the residence assistant if the problem continues after that"
            - name: Kitchen fault log and repair requests
              description: |-
                ## Purpose
                Hob rings that never heat, a fridge that runs warm or a leaking sink trap are the landlord's or the hall's job to fix, but only once they are reported in writing. Keeping a log of faults, with dates and reference numbers, gets repairs done faster and protects your deposit if a fault gets worse.

                ## Milestones
                1. A fault log with date, fault, who reported it and reference number.
                2. Every current fault reported through the official repair channel.
                3. Faults older than the promised repair time chased in writing.
                4. Repairs marked as done in the log when completed.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: artifact
                success_criteria: "Every kitchen fault is logged with a date and reference number, and any open fault is chased once it passes the promised repair time."
                cadence: rolling
              tasks:
                - "Start a fault log with date, fault and reference number columns"
                - "Report every current kitchen fault through the official repair system"
                - "Chase any repair that passes its promised fix time in writing"
                - "Walk round the kitchen and log any new faults @recurring(monthly:9)"
            - name: Campus dining plan versus cooking, a four-week comparison
              description: |-
                ## Purpose
                Some universities sell prepaid dining plans or discounted canteen meals, and it is hard to tell from the brochure whether they beat cooking in a shared kitchen. Tracking four weeks of cost and time, cooking on some days and eating on campus on others, gives a real answer for your timetable.

                ## Milestones
                1. The price per meal of the campus plan worked out.
                2. Cost and time for home-cooked dinners recorded over four weeks.
                3. Cost and time for campus meals recorded over the same weeks.
                4. A decision on buying the plan, or on using campus food only on long days.
              priority: low
              deadlineOffsetDays: 35
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "Four weeks of cost and time for campus meals and home cooking are compared, with a decision on the dining plan recorded."
                cadence: phased
                effort_hours_estimate: "3"
              tasks:
                - "Find the price per meal of your campus dining plan or canteen"
                - "Log the cost and minutes for each home-cooked dinner"
                - "Log the cost and minutes for each campus meal"
                - "Compare after four weeks and record your decision"
            - name: Icebreaker house dinner in the first fortnight
              description: |-
                ## Purpose
                New flatmates who eat together once in the first two weeks find it far easier to agree rotas and raise problems later. A simple shared dinner, such as a big pot of chilli or a make-your-own wrap night with costs split, turns strangers into people who wash up for each other.

                ## Milestones
                1. A date chosen that most housemates can make.
                2. A menu chosen that fits every dietary need in the kitchen.
                3. Shopping and cooking jobs shared out and costs split.
                4. The dinner held, with the kitchen cleaned together afterwards.
              priority: medium
              deadlineOffsetDays: 21
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A shared dinner with most housemates is held within three weeks of moving in, fitting everyone's dietary needs, with costs split."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Suggest a house dinner date in the group chat"
                - "Check the allergy and dietary sheet before choosing the menu"
                - "Split the shopping list and cooking jobs between volunteers"
                - "Split the costs in a bill-splitting app the day after"
            - name: Exam season food plan
              description: |-
                ## Purpose
                During exams, cooking is the first thing to go, and three weeks of crisps, energy drinks and delivery leave you tired and short of money at the worst time. Stocking the freezer before revision starts and setting simple meal times around the exam timetable keeps you fed with almost no kitchen time.

                ## Milestones
                1. Exam dates and revision blocks mapped onto one three-week calendar.
                2. Eight to ten frozen portions cooked in the fortnight before exams.
                3. A stock of easy breakfasts and snacks for exam mornings.
                4. Meal times fixed around exams and kept for the whole period.
              priority: high
              deadlineOffsetDays: 60
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "Before the first exam there are at least eight frozen portions and a written meal schedule fitted around the exam timetable."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Put your exam dates and revision blocks on one calendar"
                - "Plan four big-batch recipes to freeze before exams start"
                - "Cook and freeze at least eight portions in the fortnight before"
                - "Stock easy exam-morning breakfasts and snacks"
            - name: Birthday cake for a housemate in a shared kitchen
              description: |-
                ## Purpose
                Making a housemate's birthday cake in a student kitchen means working with no scales, one tin at most and an oven of unknown temperament. Picking a forgiving recipe, such as a traybake or a loaf cake measured in spoons and cups, and doing a practice run makes the surprise work on the day.

                ## Milestones
                1. A forgiving cake recipe chosen that works in a baking tray or loaf tin.
                2. Any allergies or dietary needs of the birthday person checked quietly.
                3. A practice bake done to learn the oven's timing.
                4. The cake baked and decorated in time for the birthday.
              priority: low
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A birthday cake that fits the housemate's dietary needs is baked and served on the day, after one practice run."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Check quietly with a friend for any allergies or dietary needs"
                - "Choose a traybake or loaf cake recipe using cup or spoon measures"
                - "Do a practice bake to learn your oven's timing"
                - "Bake and decorate the cake the day before or that morning"
            - name: End-of-term potluck in the shared kitchen
              description: |-
                ## Purpose
                Before everyone heads home, a potluck where each person brings one dish uses up cupboard food, costs almost nothing and gives the kitchen a good end to the term. It is also the easiest way to taste the dishes your housemates actually cook.

                ## Milestones
                1. A date in the last week of term agreed.
                2. A dish list collected so there is a balance of mains, sides and puddings.
                3. Allergens marked on each dish.
                4. The kitchen cleaned together afterwards before people leave.
              priority: low
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "An end-of-term potluck is held with a dish list balanced across courses and each dish labelled for allergens."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Propose a potluck date in the last week of term"
                - "Start a shared list where each person adds their dish"
                - "Ask everyone to label their dish with its main allergens"
                - "Agree a clean-up team before the evening starts"
            - name: End-of-year cupboard run-down and kit packing
              description: |-
                ## Purpose
                Students leaving halls in summer throw away huge amounts of food and usable kitchen kit, and a full cupboard with three weeks to go is money already spent. Running the cupboard and freezer down from three weeks out, then packing or donating kit, means leaving with less to carry and nothing wasted.

                ## Milestones
                1. Cupboard, fridge and freezer contents listed three weeks before moving out.
                2. Meals planned to use up those contents, with only fresh items bought.
                3. Kit sorted into keep, pass on to a returning student and donate.
                4. Unopened food given to a donation point or food bank.
              priority: medium
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "You move out with an empty cupboard, freezer drawer and fridge shelf, and unwanted kit and unopened food donated rather than binned."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "List everything in your cupboard, fridge shelf and freezer drawer"
                - "Plan three weeks of meals that use up that list"
                - "Sort your kit into keep, pass on and donate"
                - "Take unopened food to a donation point before you leave"
            - name: Catered halls with only a pantry kitchenette
              description: |-
                ## Purpose
                Catered students often find themselves hungry at weekends or after late lectures, with only a pantry kitchenette holding a kettle, toaster and microwave. Building a small stock of foods and simple methods for those gaps, such as porridge, noodles, couscous and microwave meals, covers the meals the dining hall does not.

                ## Milestones
                1. The meals the dining hall does not cover each week identified.
                2. A small stock of kettle and microwave foods kept in your room.
                3. Three meals made with only a kettle, toaster or microwave.
                4. Weekend food spending kept within a set amount.
              priority: low
              frontmatter:
                mode: building
                output_kind: knowledge
                success_criteria: "Three kettle or microwave meals are in regular use to cover the weekly meals the dining hall misses, within a set weekend spend."
                cadence: phased
                effort_hours_estimate: "2"
              tasks:
                - "List which meals each week the dining hall does not provide"
                - "Stock porridge, couscous, noodles and tins in your room"
                - "Make couscous with just a kettle and a bowl"
                - "Set a weekend food amount and check it after a month"
            - name: Moving from halls to a shared private house
              description: |-
                ## Purpose
                Second-year houses rarely come with kitchen kit, the landlord is not on site, and nobody else will notice the freezer needs defrosting. Planning the move as a group, from the inventory check to who brings which pan, avoids arriving to a kitchen with four kettles and no tin opener.

                ## Milestones
                1. The house inventory checked and kitchen faults reported in the first week.
                2. A shared list of who brings which shared items, with no duplicates.
                3. The cooker, fridge and boiler instructions found and kept in a kitchen drawer.
                4. A house kitchen routine agreed in the first fortnight: rota, kitty and fridge split.
              priority: high
              deadlineOffsetDays: 45
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Within six weeks of moving in, the kitchen inventory is checked, shared items are covered without duplicates and a kitchen routine is agreed."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Ask the landlord or agent for the kitchen inventory before moving day"
                - "Start a shared list of who brings which kitchen items"
                - "Check the inventory on arrival and report faults in writing"
                - "Agree the rota, kitty and fridge split in the first fortnight"
            - name: International student finding ingredients from home
              description: |-
                ## Purpose
                International students often find that the flavours of home are the hardest thing to replace, and that supermarket versions of familiar ingredients taste wrong or cost three times as much. Finding the local world food shops, online grocers and student societies that stock your ingredients, and learning which substitutes work, makes the new kitchen feel like yours.

                ## Milestones
                1. Two or three shops or online grocers that stock your home ingredients found.
                2. A list of hard-to-find ingredients with workable local substitutes.
                3. A student or cultural society contacted for shopping tips or shared orders.
                4. Three dishes from home cooked in your shared kitchen.

                ## Notes
                Check customs rules before bringing food from home in your luggage, as meat, dairy and fresh produce are often restricted.
              priority: medium
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "Three dishes from home have been cooked in the shared kitchen using ingredients from local shops you found, with substitutes recorded."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Search for world food shops and online grocers near your campus"
                - "Ask your cultural society where members buy ingredients"
                - "Write a list of substitutes for ingredients you cannot find"
                - "Cook a dish from home and share it with a housemate"
            - name: Ramadan suhoor and iftar in a shared kitchen
              description: |-
                ## Purpose
                Fasting students cook before dawn and at sunset, often when housemates are asleep or the kitchen is at its busiest. Planning quiet suhoor meals prepared the night before, and talking to housemates about iftar timing, makes the month easier for everyone in the kitchen.

                ## Milestones
                1. Housemates told about the fasting month and the hours you will use the kitchen.
                2. Quiet suhoor options ready the night before, needing only a kettle or microwave.
                3. An iftar plan for busy evenings, with some portions frozen in advance.
                4. Halal sourcing for the month sorted where it applies to you.
              priority: low
              frontmatter:
                mode: building
                output_kind: habit
                success_criteria: "Before the month starts, housemates know your kitchen hours and a week of quiet suhoor and frozen iftar options is ready."
                cadence: cyclic
                effort_hours_estimate: "3"
              tasks:
                - "Note this year's fasting dates in your calendar"
                - "Write a list of quiet suhoor meals that need only a kettle or microwave"
                - "Freeze four iftar portions for evenings when the kitchen is busy"
                - "Tell housemates your early kitchen hours a week before the month begins @recurring(yearly)"
            - name: Placement or internship short-let kitchen
              description: |-
                ## Purpose
                Placement years and summer internships often mean a short-let room with a kitchen of unknown quality for a few months, with no point buying a full set of kit. Packing a travelling kit and stocking only what you will finish before you leave keeps the stay cheap and the move-out easy.

                ## Milestones
                1. The short-let's kitchen contents confirmed with the host before arrival.
                2. A travelling kit packed: knife, board, pan, tubs and spices.
                3. A first shop limited to what the stay will finish.
                4. Leftover staples planned down in the final fortnight.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A short-let kitchen is checked before arrival, a travelling kit is packed and the stay ends with no staples left behind."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Ask the host what kitchen equipment the room includes"
                - "Pack a travelling kit of knife, board, pan, tubs and spices"
                - "Write a first shop list sized for the length of the stay"
                - "Plan the last fortnight's meals to use up what is left"
            - name: Student parent cooking in family accommodation
              description: |-
                ## Purpose
                Student parents juggle lectures, childcare and a child's meals, often in family accommodation with a kitchen they did not choose. A short rota of child-friendly meals cooked in bulk on study-free days, plus a few a child can help with, fits family eating around a timetable.

                ## Milestones
                1. The week's timetable, nursery or school times and study blocks on one page.
                2. Six family meals chosen that a child will eat and that freeze well.
                3. One batch-cooking session a week on the lightest study day.
                4. Your university's support for student parents checked for food or childcare help.
              priority: medium
              frontmatter:
                mode: building
                output_kind: habit
                success_criteria: "A week of family meals is planned around timetable and childcare, with one batch session a week held for a month."
                cadence: phased
                effort_hours_estimate: "5"
              tasks:
                - "Put your timetable, childcare times and study blocks on one page"
                - "Choose six family meals your child will eat that freeze well"
                - "Ask student support what help exists for student parents"
                - "Book a weekly batch-cooking slot on your lightest study day"
            - name: Postgraduate cooking around long lab and teaching days
              description: |-
                ## Purpose
                Postgraduate researchers and teaching assistants keep irregular hours, with experiments that overrun and marking that eats evenings, and often share houses with undergraduates on a different rhythm. A weekly double batch on the lightest day, plus a desk drawer of emergency food, keeps meals regular when work does not.

                ## Milestones
                1. The two lightest days of a typical week identified.
                2. A double batch cooked on one of them each week.
                3. A desk drawer stocked with oats, nuts, tins and a spoon.
                4. Missed meals counted for a month and falling.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A weekly double batch has been cooked for a month and missed meals, counted over the same month, are falling."
                cadence: rolling
              tasks:
                - "Mark your two lightest days in a typical week"
                - "Stock a desk drawer with oats, nuts, tins and a spoon"
                - "Cook a double batch on your lightest day @recurring(weekly:sat)"
                - "Count missed meals for a month and note the trend"
            - name: House recipe book written by everyone in the flat
              description: |-
                ## Purpose
                By the end of a year a shared kitchen has produced dozens of dishes worth keeping, each living only in one person's head or phone. Collecting them into one shared document, with each person contributing their best three, leaves everyone with a cookbook that already works in a student kitchen.

                ## Milestones
                1. A shared document set up with a simple recipe layout.
                2. Three tested recipes added by each person who wants to take part.
                3. Each recipe noting cost, time and the equipment it needs.
                4. A final copy sent to everyone before the year ends.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A shared house recipe book holds at least three tested recipes from each contributor and has been sent to everyone before move-out."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Create a shared document with a simple recipe layout"
                - "Ask each housemate to add their three best recipes"
                - "Add cost, time and equipment to each recipe"
                - "Add one tested recipe to the house book @recurring(monthly:28)"
                - "Ask the agent to format the finished book for sharing"
            - name: Cooking for a society social of fifteen
              description: |-
                ## Purpose
                Societies and sports clubs often ask a member to cook for a social, and fifteen people is a different job from a house dinner: bigger pots, borrowed kit and a shared kitchen that cannot be taken over for hours. Planning one scalable dish, a shopping list and a cooking schedule around housemates makes it manageable.

                ## Milestones
                1. Head count and dietary needs collected from the society.
                2. One main and one side chosen that scale to fifteen in pots you can borrow.
                3. Kitchen time agreed with housemates in advance.
                4. The meal served and costs reclaimed from the society.
              priority: low
              frontmatter:
                mode: service
                output_kind: deliverable
                success_criteria: "A meal for fifteen is served to the society, fitting every declared dietary need, with costs reclaimed within a week."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Ask the society committee for numbers, dietary needs and budget"
                - "Choose one main and one side that scale to fifteen"
                - "Borrow large pots and agree kitchen time with housemates"
                - "Submit receipts to the society treasurer within a week"
            - name: Floor or block kitchen representative
              description: |-
                ## Purpose
                Many halls appoint or welcome a volunteer floor representative who passes problems to the residence team and the students' union. Taking the role gives your kitchen a direct line for broken appliances, pest problems and cleaning standards, and is a small leadership item for a CV.

                ## Milestones
                1. The role confirmed with the residence team or hall committee.
                2. A simple way for residents to report kitchen issues set up.
                3. Issues collected and passed on each month with a record of responses.
                4. One improvement secured for the kitchen during the year.
              priority: low
              frontmatter:
                mode: service
                output_kind: habit
                success_criteria: "Kitchen issues from your floor are collected and reported monthly for a term, with responses recorded and one improvement secured."
                cadence: rolling
              tasks:
                - "Ask the residence team whether a kitchen or floor rep role exists"
                - "Set up a simple form or chat thread for kitchen issues"
                - "Collect kitchen issues from your floor and send them on @recurring(monthly:25)"
                - "Record the response to each issue you raise"
            - name: Society bake sale or food stall fundraiser
              description: |-
                ## Purpose
                Charity bake sales and society food stalls are a student staple, but selling food brings allergen labelling and hygiene expectations, and most students' unions have rules about what can be sold on campus. Planning the stall against those rules, with baking spread across several kitchens, raises money without anyone becoming ill.

                ## Milestones
                1. The students' union rules for food sales on campus read and any form submitted.
                2. A bake list with each item's allergens written up.
                3. Baking shared across volunteers' kitchens with a short hygiene briefing.
                4. The stall run, money counted and passed to the treasurer.

                ## Notes
                Every item needs a clear allergen label. If an ingredient is in doubt, leave the item out.
              priority: low
              frontmatter:
                mode: service
                output_kind: event-completion
                success_criteria: "A food stall runs under the students' union rules, with every item allergen-labelled and takings handed to the treasurer the same day."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Read your students' union rules for selling food on campus"
                - "Ask bakers to list the allergens in each item they plan to make"
                - "Print allergen labels for every item on the stall"
                - "Count the takings and hand them to the treasurer the same day"
            - name: Graduation repertoire audit of twenty dinners
              description: |-
                ## Purpose
                Leaving university with twenty dinners you can cook from memory is a skill worth more than most students realise, and worth checking before moving into a first job and a kitchen of your own. Listing what you can actually cook, what you have dropped and what is missing gives a clear plan for life after the student kitchen.

                ## Milestones
                1. A list of every dinner you can cook without a recipe.
                2. Gaps noted, such as a roast, a fish dish, a vegetarian main or something for guests.
                3. Three missing dishes learned in your final term.
                4. The list saved as the starting repertoire for your next kitchen.
              priority: low
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A written repertoire of at least twenty dinners cooked from memory exists, with three gaps filled in the final term."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Write down every dinner you can cook without a recipe"
                - "Mark the gaps such as fish, a roast or a dish for guests"
                - "Pick three missing dishes to learn this term"
                - "Save the final list somewhere you will keep after graduating"
---

# Student Kitchen Cooking

This area is for students and young renters feeding themselves from a kitchen shared with five to fifteen other people, with hob rings to queue for and one fridge shelf to call their own. It starts with the foundations (a move-in record, the building's rules, a labelled shelf, a one-crate kit and five fast dinners), then the weekly routines of planning, cooking and washing up, the skills that save kitchen time, the decisions that keep housemates on side, the events of the student year, plans for catered halls, private houses, international students and student parents, and finally the specialist work of a house recipe book and representing your floor.

What repeats is a Friday meal plan and a Sunday cook-up, a Wednesday shelf check, a Monday bin turn, a daily wash-up, monthly checks of the kitty, freezer drawer and fault log, and a kitchen meeting each term. The Purchase decision, Weekly meal plan, Habit tracker and Meeting notes templates pair with the projects that name them. Installing adds all 50 projects as active, so archive the ones that are not for you yet.
