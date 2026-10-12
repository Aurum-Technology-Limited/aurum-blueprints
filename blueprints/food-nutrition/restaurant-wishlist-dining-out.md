---
id: food-nutrition.restaurant-wishlist-dining-out
name: Restaurant Wishlist & Dining Out
description: "One restaurant wishlist, dish notes worth returning for, a dining budget and the booking habits that land good tables for ordinary nights and special occasions."
category: personal
version: 1.0.0
tags: [food-nutrition, restaurant-wishlist-dining-out, everyone, restaurants, dining-out, reservations, food-travel]
author: Aurum Technology
starter_structure:
  templates:
    - monthly-budget-bills
    - metrics-log
    - purchase-decision
    - savings-goal
    - vendor
    - trip
  pillars:
    - name: Food & Nutrition
      emoji: "🥗"
      description: "What gets eaten, and how it gets to the table: meal planning, shopping and batch cooking, dietary needs and goals, cooking skill as a lifelong craft, and the food rituals that hold a household together."
      pillarFrontmatter:
        review_cadence: monthly
      areas:
        - name: Restaurant Wishlist & Dining Out
          description: "Keeping a list of restaurants to try, booking special meals and noting dishes worth returning for, for curious eaters."
          projects:
            - name: One restaurant wishlist with useful fields
              description: |-
                ## Purpose
                Recommendations end up scattered across screenshots, saved map pins, notes apps and half-remembered conversations, so on the night you want somewhere new you cannot find any of them. One list with the same few fields for every entry (area, cuisine, price band, occasion, who recommended it, booking difficulty) turns a pile of tips into something you can choose from in two minutes.

                ## Milestones
                1. A single wishlist chosen in one tool you already open every day.
                2. Fields set for area, cuisine, price band, occasion, source and booking difficulty.
                3. Every saved pin, screenshot and note from the last year moved into it.
                4. Old map lists and stray notes archived so there is one source of truth.

                ## Notes
                A spreadsheet or notes table works better than a map app alone, because map lists rarely hold why you saved a place. Keep the map pins if you like, but treat the list as the master.
              priority: high
              deadlineOffsetDays: 14
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A single wishlist holds every saved restaurant with area, cuisine, price band, occasion and source filled in, and no second list remains in use."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Pick the one app or spreadsheet that will hold the wishlist"
                - "Add columns for area, cuisine, price band, occasion, source and booking difficulty"
                - "Move every saved map pin and screenshot into the list"
                - "Archive the old lists so only one remains"
            - name: Two-minute capture routine for restaurant tips
              description: |-
                ## Purpose
                Most good tips are heard at the wrong moment: across a dinner table, on a podcast during the commute, in a friend's holiday photos. A fixed capture spot on your phone and a weekly sweep into the wishlist means a recommendation is saved in seconds and sorted later, instead of lost by Friday.

                ## Milestones
                1. A quick-capture note set as the single inbox for restaurant tips.
                2. Each captured tip carrying who recommended it and one dish to order.
                3. A weekly sweep moving captured tips into the wishlist with fields filled.
                4. The capture inbox empty after each sweep for four weeks running.
              priority: high
              deadlineOffsetDays: 14
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Four consecutive weekly sweeps leave the capture inbox empty, with every tip moved into the wishlist including its source and a dish to order."
                cadence: phased
                effort_hours_estimate: "2"
              tasks:
                - "Create a pinned quick-capture note called restaurant tips on your phone"
                - "Add a home screen shortcut so a tip takes under ten seconds to save"
                - "Ask for the one dish to order whenever someone recommends a place"
                - "Sweep the capture note into the wishlist and clear it @recurring(weekly:sun)"
            - name: Annual dining-out budget
              description: |-
                ## Purpose
                Eating out drifts up quietly: a few casual lunches, a delivery or two, one big birthday dinner, and a month costs more than the weekly shop. Setting a yearly figure, split into everyday meals and a separate pot for special occasions, lets you say yes to the meals that matter without guilt about the ones that did not.

                ## Milestones
                1. Last year's restaurant, café and takeaway spending added up from bank statements.
                2. A yearly figure agreed, split between everyday meals out and special occasions.
                3. A monthly amount for everyday meals set from the yearly figure.
                4. The month's spend logged against the budget for three months running.

                ## Notes
                Start from the **Monthly budget and bills** template. Decide up front whether coffee, delivery and work lunches count, and stick to it, otherwise the numbers are never comparable from one month to the next.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A written yearly dining budget split into everyday and special-occasion amounts, with three months of spend logged against it."
                cadence: phased
                effort_hours_estimate: "3"
              tasks:
                - "Export last year's bank transactions for restaurants, cafés and takeaways"
                - "Add up the total and pick out the three most expensive meals"
                - "Agree a yearly figure and the share kept for special occasions"
                - "Log this month's meals out against the budget @recurring(monthly:26)"
            - name: Household dining preferences profile
              description: |-
                ## Purpose
                Choosing where to eat stalls when nobody can say what they want, and the same objections come up every time: too loud, too spicy, no vegetarian main, too far. Writing down each regular companion's likes, hard limits and dietary requirements once makes every later choice faster and avoids booking somewhere one person cannot enjoy.

                ## Milestones
                1. Each person you regularly eat with listed with likes, dislikes and hard limits.
                2. Dietary requirements and allergies recorded in each person's own words.
                3. Shared ground rules noted on noise level, price ceiling, travel distance and seating.
                4. Wishlist entries marked with which companions they suit.

                ## Notes
                For allergies, record what the person tells you and let them speak to the restaurant themselves. This profile organises information; it does not judge what is safe for anyone.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: building
                output_kind: knowledge
                success_criteria: "A written profile for every regular dining companion, including dietary needs and a price ceiling, with wishlist entries marked for who they suit."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "List the people you eat out with most often"
                - "Ask each one for two loves, two dislikes and any hard limits"
                - "Write the shared ground rules on noise, price and distance"
                - "Mark each wishlist entry with who it suits"
            - name: Trusted restaurant sources shortlist
              description: |-
                ## Purpose
                Star ratings on map apps reward places that see a lot of tourists, and some guides lean heavily towards fine dining or towards hype. Picking four or five sources whose taste you have tested against your own meals, such as a critic, a local newsletter, a guide and a couple of friends, gives you tips you can actually trust.

                ## Milestones
                1. Every source you currently get restaurant tips from listed.
                2. Each source checked against three places you already know well.
                3. A shortlist of four or five sources kept, with a note on each one's bias.
                4. Feeds and subscriptions you no longer trust cancelled or muted.
              priority: medium
              deadlineOffsetDays: 30
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A written shortlist of at most five restaurant sources, each tested against three known meals with its bias noted."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "List every place you currently get restaurant tips from"
                - "Check what each source says about three restaurants you know well"
                - "Keep the four or five that matched your own experience"
                - "Unsubscribe from or mute the sources you dropped"
            - name: Booking apps and reservation settings
              description: |-
                ## Purpose
                Sought-after restaurants usually book through one or two platforms, and the people who get tables have notifications on, contact details complete and dietary notes stored before the release time arrives. Setting this up calmly, and reading how deposits and late cancellation fees work, means you are ready the moment a table appears.

                ## Milestones
                1. The two or three booking platforms your local restaurants use identified.
                2. Profiles on each completed with phone number, dietary notes and notification preferences.
                3. Waitlist and cancellation alerts switched on for your top wishlist places.
                4. Each platform's deposit and cancellation fee rules summarised in two lines.
              priority: medium
              deadlineOffsetDays: 21
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Profiles on the main local booking platforms are complete, alerts are on for the top five wishlist places, and the fee rules are written down."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Check which booking platforms your top ten wishlist restaurants use"
                - "Complete your profile on each with phone number and dietary notes"
                - "Switch on waitlist alerts for the top five wishlist places"
                - "Write two lines on each platform's deposit and late cancellation rules"
            - name: Dish notes log for meals worth repeating
              description: |-
                ## Purpose
                Six months after a great meal most people remember the restaurant but not what they ordered, and end up choosing something forgettable on the return visit. A short log with the dish, what made it good, the price and whether you would go back is what turns one good night into a reliable favourite.

                ## Milestones
                1. A log with columns for date, restaurant, dish, price, rating and return verdict.
                2. The last five memorable meals added from photos and receipts.
                3. A clear verdict on each visited restaurant: go back, go back for one dish, or not again.
                4. The log linked from each wishlist entry you have visited.
              priority: high
              deadlineOffsetDays: 14
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A dish log with at least ten entries, each carrying a rating and a go back verdict, linked from the wishlist."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Create a dish log with date, restaurant, dish, price, rating and verdict columns"
                - "Scroll your camera roll for the last five memorable meals out"
                - "Add each dish with a line on what made it worth ordering"
                - "Give every visited restaurant a go back verdict"
            - name: Neighbourhood regulars list
              description: |-
                ## Purpose
                On tired weeknights nobody wants to research; you want somewhere reliable within twenty minutes. A short list of five tested local places, one quick, one cheap, one good for vegetables, one that welcomes children and one for a treat, ends the nightly debate about where to go and keeps money with the restaurants near you.

                ## Milestones
                1. Every place within twenty minutes that you have eaten at and liked listed.
                2. Five regulars chosen to cover quick, cheap, vegetable-friendly, family and treat.
                3. Opening days, booking needs and the best dish noted for each.
                4. The list shared with everyone in the household.
              priority: high
              deadlineOffsetDays: 60
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A shared list of five tested local regulars, each with opening days, booking needs and the dish to order."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "List every local place you have eaten at and would happily return to"
                - "Fill gaps by trying one untested local place each weekend for a month"
                - "Note opening days, booking needs and the best dish for each regular"
                - "Share the final five with your household"
            - name: Occasions calendar with booking lead times
              description: |-
                ## Purpose
                Anniversary and birthday tables at popular places often go weeks or months ahead, so a celebration remembered ten days before ends up wherever has space. Putting every dining occasion of the year in one calendar, with the date to book attached, gives you the pick of the tables instead of the leftovers.

                ## Milestones
                1. Every birthday, anniversary and annual celebration you usually eat out for listed.
                2. A target restaurant or shortlist noted against each occasion.
                3. A booking reminder set before each occasion, using that restaurant's release window.
                4. A monthly glance at the calendar so nothing arrives unbooked.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Every dining occasion for the next twelve months sits in a calendar with a booking reminder set ahead of its release window."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "List the birthdays, anniversaries and celebrations you eat out for"
                - "Look up how far ahead your usual special-occasion places release tables"
                - "Add a booking reminder before each occasion"
                - "Check for occasion bookings due in the next eight weeks @recurring(monthly:3)"
            - name: Monthly new-restaurant night
              description: |-
                ## Purpose
                Wishlists grow faster than they get eaten through, and without a fixed date the same three safe places win every time. One wishlist meal a month, booked a few weeks ahead and chosen from the top of the list, works through twelve new places a year at a pace most budgets can carry.

                ## Milestones
                1. A regular evening each month agreed with your usual dining partner.
                2. Next month's place chosen and booked by the middle of this month.
                3. Each visit written up in the dish log within two days.
                4. Twelve new restaurants tried in a year.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Twelve wishlist restaurants visited in twelve months, each with a dish log entry and a return verdict."
                cadence: rolling
              tasks:
                - "Agree a regular evening each month with your dining partner"
                - "Book next month's new-restaurant night from the top of the wishlist @recurring(monthly:12)"
                - "Write the visit into the dish log within two days"
                - "Move the visited place off the wishlist and into your verdicts"
            - name: Monthly wishlist tidy
              description: |-
                ## Purpose
                Left alone, a wishlist fills with places that closed, changed chef or no longer appeal, and stale entries make the whole list less trusted. A fifteen minute monthly tidy keeps it short enough to scan and honest about what is still worth booking.

                ## Milestones
                1. Closed restaurants and those with a new chef or owner flagged.
                2. Entries older than two years reconsidered and kept only with a reason.
                3. The top ten re-ranked so the next pick is obvious.
                4. The list kept under an agreed maximum length.

                ## Notes
                A cap of around fifty open entries keeps the list usable. If it keeps growing past that, the capture habit is working and the pruning is not.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "The wishlist stays under its agreed cap with closed places removed and a ranked top ten, tidied in at least ten months of the year."
                cadence: rolling
              tasks:
                - "Agree a maximum length for the open wishlist"
                - "Check the top twenty entries are still open and unchanged @recurring(monthly:22)"
                - "Re-rank the top ten so the next booking is obvious"
                - "Remove entries you would no longer cross town for"
            - name: Weekly meal write-up habit
              description: |-
                ## Purpose
                Details of a meal fade within days: which starter, what it cost, whether the slow service was a one-off. A Monday prompt to write up anything eaten out in the past week keeps the dish log current while the details are fresh, and takes five minutes weekly rather than a whole evening twice a year.

                ## Milestones
                1. A Monday reminder to write up the past week's meals out.
                2. Each meal logged with dish, price, rating and a one-line verdict.
                3. Photos of menus and dishes filed by restaurant.
                4. Eight consecutive weeks with no meal left unrecorded.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Eight consecutive weeks in which every meal out was written into the dish log by the following Monday."
                cadence: rolling
              tasks:
                - "Write up every meal eaten out in the past week @recurring(weekly:mon)"
                - "Photograph the menu as well as the dish when you eat somewhere new"
                - "File meal photos into one album per restaurant"
            - name: Table release date tracker
              description: |-
                ## Purpose
                Popular restaurants often open bookings on a fixed rhythm, such as thirty days ahead at midnight or the first of each month at ten in the morning, and the good slots go within minutes. Knowing the release pattern of each place on your target list means you set an alarm instead of refreshing a booking page for weeks.

                ## Milestones
                1. The booking release rule found for every hard-to-book place on the wishlist.
                2. Release times written next to each entry, with the time zone for places abroad.
                3. Alarms set for the next two releases you care about.
                4. A monthly check of upcoming release dates in place.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every hard-to-book wishlist restaurant has its release rule recorded, and alarms are set for the next releases you plan to try."
                cadence: rolling
              tasks:
                - "Find the booking release rule for each hard-to-book place on your list"
                - "Write each release time beside its wishlist entry"
                - "Set alarms for the next two table releases you want"
                - "Check which tables release in the coming month @recurring(monthly:15)"
            - name: Quarterly dining spend review
              description: |-
                ## Purpose
                Monthly logging shows the total; a quarterly look shows the pattern, such as a creep in casual lunches, delivery replacing cooking or one expensive dinner that did not deliver. Reviewing spend against the dish log every three months lets you move money from meals you shrugged at towards the ones you still talk about.

                ## Milestones
                1. Three months of dining spend totalled by type: casual, special, delivery and coffee.
                2. Each quarter's total compared with the budget.
                3. The best and worst value meals of the quarter named from the dish log.
                4. One change agreed for the next quarter.

                ## Notes
                Start from the **Metrics log** template, with one row per quarter and a column for each type of spending.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Four quarterly reviews in a year, each comparing spend by type with the budget and recording one agreed change."
                cadence: cyclic
              tasks:
                - "Set up a quarterly dining spend log from the template"
                - "Total the quarter's spend by casual, special, delivery and coffee @recurring(quarterly)"
                - "Name the best and worst value meals from the dish log"
                - "Write down one change for the next quarter"
            - name: Seasonal menu watch at favourite places
              description: |-
                ## Purpose
                Good kitchens change their menus with the seasons, and the dish you loved in October may be gone by March while something better arrives in May. Checking your favourite places' menus each quarter tells you when a return visit is worth it and when to wait.

                ## Milestones
                1. Your five or six favourite restaurants listed with where each publishes its menu.
                2. Seasonal dishes worth returning for noted in the dish log.
                3. A return visit planned when a favourite dish or season comes back.
                4. Four quarterly checks done in a year.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Four quarterly menu checks completed for your favourite restaurants, each leading to a noted dish or a planned return visit."
                cadence: cyclic
              tasks:
                - "List your favourite restaurants and where each posts its menu"
                - "Read the current menus of your favourite restaurants @recurring(quarterly)"
                - "Note any returning seasonal dish in the dish log"
                - "Pencil in a return visit when a favourite dish comes back"
            - name: Local openings and closings watch
              description: |-
                ## Purpose
                New openings are often at their best value in the first months, with soft-launch offers and the head chef cooking every service, while closures quietly empty your list. A monthly read of one good local food newsletter or news section keeps the wishlist current in both directions.

                ## Milestones
                1. One or two reliable local sources for openings and closures chosen.
                2. A monthly read done, with promising openings added to the wishlist.
                3. Closed restaurants removed the same month.
                4. Soft-launch or opening offers booked when one fits the wishlist.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Twelve monthly reads completed in a year, with openings added and closures removed from the wishlist each time."
                cadence: rolling
              tasks:
                - "Choose one local source that reliably reports openings and closures"
                - "Read the month's restaurant openings and closures news @recurring(monthly:18)"
                - "Add promising openings to the wishlist with an opening-month tag"
                - "Strike any closed restaurant from the wishlist the same day"
            - name: Best meals of the year list
              description: |-
                ## Purpose
                At the end of a year most people can name two great meals and have forgotten the rest. Compiling a top ten from the dish log every December makes the year's eating something you remember, shows which sources led you to good places, and gives friends a list they will genuinely use.

                ## Milestones
                1. The year's dish log entries filtered to the highest rated.
                2. A ranked top ten with one line on why each made the list.
                3. The source behind each of the ten noted to judge which tips paid off.
                4. The list shared with the people you ate with.
              priority: low
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "A ranked top ten meals of the year, each with a one-line reason and its source, written by the end of the year."
                cadence: cyclic
              tasks:
                - "Filter the year's dish log to meals rated four or five"
                - "Rank the year's top ten meals and write one line on each @recurring(yearly)"
                - "Note which source led you to each of the ten"
                - "Send the list to the people who shared those meals"
            - name: Vouchers, gift cards and loyalty points tracker
              description: |-
                ## Purpose
                Restaurant gift cards, experience vouchers and loyalty stamps are given generously and lost easily, and many expire within a year or two. A single list with balances and expiry dates, checked monthly, turns forgotten presents into booked meals.

                ## Milestones
                1. Every restaurant voucher, gift card and loyalty card in the house gathered.
                2. Each one listed with balance, terms and expiry date.
                3. Vouchers expiring within three months booked or used.
                4. A monthly expiry check in place.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every restaurant voucher and gift card is listed with its expiry date, and none has lapsed unused in the last twelve months."
                cadence: rolling
              tasks:
                - "Gather every restaurant voucher, gift card and loyalty card in the house"
                - "List each with balance, terms and expiry date"
                - "Book a meal for any voucher expiring within three months"
                - "Check the voucher list for anything expiring soon @recurring(monthly:28)"
            - name: Cancel-early rule for bookings
              description: |-
                ## Purpose
                No-shows cost small restaurants real money, and many now charge a fee or flag repeat offenders in their booking system. A weekly look at the coming week's reservations, with anything you will not use cancelled at least 48 hours ahead, protects your deposits and your standing with the places you most want to get into.

                ## Milestones
                1. All current bookings gathered in one calendar with their cancellation deadlines.
                2. A household rule agreed: cancel at least 48 hours ahead, or earlier if the restaurant asks.
                3. A weekly check of the next seven days of bookings.
                4. No missed cancellation fees for six months.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Six months with no no-shows and no late cancellation fees, with every booking's cancellation deadline in the calendar."
                cadence: rolling
              tasks:
                - "Add every current booking and its cancellation deadline to your calendar"
                - "Agree the 48 hour cancellation rule with your household"
                - "Check next week's bookings and cancel any you will not use @recurring(weekly:thu)"
                - "Phone the restaurant whenever you will be more than fifteen minutes late"
            - name: Reading restaurant reviews critically
              description: |-
                ## Purpose
                Online scores blend tourists, opening-week hype, grudges over service and paid placements, and a 4.6 can hide a kitchen that peaked years ago. Learning to read reviews for date, specifics, reviewer history and what is actually said about the food lets you tell a good place from a well-marketed one.

                ## Milestones
                1. Five signals of a trustworthy review written down, such as named dishes and recent dates.
                2. Three warning signs noted, such as clusters of vague five-star reviews.
                3. The method tested on five wishlist places before visiting.
                4. Your predictions compared with the actual meals in the dish log.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A written checklist of review signals, tested on five restaurants with predictions compared to the actual meals in the dish log."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Write down five signs of a review you can trust"
                - "Sort reviews for a wishlist place by newest and read the latest twenty"
                - "Predict your rating for five places before visiting"
                - "Compare each prediction with the meal you actually had"
            - name: Ordering well from an unfamiliar menu
              description: |-
                ## Purpose
                Small-plates, regional and chef-led menus reward a different way of ordering: asking what the kitchen is proud of, ordering across sections, sharing, and knowing when to let the staff choose. A few practised habits turn a confusing menu into the best meal on the list.

                ## Milestones
                1. Three questions to ask staff written down and used.
                2. A sharing plan tried: roughly one dish per section for every two people.
                3. One meal ordered entirely on staff recommendation.
                4. Lessons from five meals noted in the dish log.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Five meals ordered with the new approach, each with a dish log note on what worked and what did not."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Write three questions to ask staff about what the kitchen does best"
                - "Order one dish from each section to share at your next meal out"
                - "Let the staff choose for the table on one visit"
                - "Note in the dish log which ordering choice paid off"
            - name: Tasting menu know-how
              description: |-
                ## Purpose
                A tasting menu is a three-hour commitment with a fixed price, a set pace and its own conventions around dietary requests, drink options and photography. Knowing what to ask when booking and what to expect on the night makes a meal you have saved for feel relaxed rather than nervy.

                ## Milestones
                1. Questions for booking listed: length, dietary changes, drink options and dress.
                2. The typical length and pacing of a tasting menu understood.
                3. A plan for pacing, water and bread so the last courses still land.
                4. One tasting menu eaten and reflected on in the dish log.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A written booking checklist for tasting menus, used for one meal that is then recorded course by course in the dish log."
                cadence: phased
                effort_hours_estimate: "5"
              tasks:
                - "Write the questions to ask when booking a tasting menu"
                - "Tell the restaurant about dietary needs when booking, not on the night"
                - "Plan how long the evening runs, including getting home afterwards"
                - "Log every course of your next tasting menu with a one-word verdict"
            - name: Service charges and tipping customs
              description: |-
                ## Purpose
                Tipping norms differ widely: some countries add a service charge to the bill, some expect 15 to 20 percent, some find a tip odd, and staff may or may not receive what is added. Understanding the custom where you eat, and reading the bill before paying, avoids paying twice or leaving staff short.

                ## Milestones
                1. The tipping and service charge custom where you live written in two lines.
                2. The customs of the next two countries you will visit noted.
                3. The habit of checking bills for an added service charge before tipping.
                4. A household default agreed for good, average and poor service.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Two-line notes on tipping custom for your home country and your next two destinations, plus an agreed household default."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Look up the tipping and service charge norm where you live"
                - "Note the customs of the next two countries you plan to visit"
                - "Read each bill for an added service charge before adding a tip"
                - "Agree a household default for tipping on good and poor service"
            - name: Menu vocabulary for one cuisine at a time
              description: |-
                ## Purpose
                Regional Chinese, Japanese izakaya, Ethiopian, Lebanese and Peruvian menus are full of dishes that do not translate neatly, so people fall back on the two they recognise. Learning twenty key menu terms for one cuisine before a run of meals out lets you order the dishes regulars order.

                ## Milestones
                1. One cuisine chosen from those that appear often on your wishlist.
                2. A list of about twenty dish names, cooking styles and ingredients with short meanings.
                3. Three restaurants of that cuisine visited using the list.
                4. The glossary saved alongside the wishlist for next time.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A twenty-term menu glossary for one cuisine, used at three restaurants with each visit recorded in the dish log."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Choose one cuisine that appears at least three times on your wishlist"
                - "Build a list of twenty dish names and terms with short meanings"
                - "Read the online menus of three restaurants and mark what you would order"
                - "Reserve a table at the first of the three restaurants"
            - name: Writing restaurant reviews that help others
              description: |-
                ## Purpose
                Most online reviews say great food or terrible service and nothing anyone can use. Writing a few reviews that name dishes, price per head, noise, accessibility and who the place suits helps other diners and small restaurants, and sharpens your own tasting notes.

                ## Milestones
                1. A simple review template: dishes, price per head, setting, who it suits, one criticism.
                2. Three reviews written for places you know well.
                3. Any review you choose to post kept factual and fair.
                4. One private note sent to a restaurant instead of a public complaint, where that was fairer.
              priority: low
              frontmatter:
                mode: learning
                output_kind: deliverable
                success_criteria: "Three written reviews following the template, each naming dishes, price per head and who the place suits."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Draft a five-line review template for your own use"
                - "Write a review of a regular you know well using the template"
                - "Ask the agent to tighten one review to under 120 words"
                - "Decide which reviews, if any, you want to post publicly"
            - name: Walk-in strategy for no-reservation restaurants
              description: |-
                ## Purpose
                Plenty of the most talked-about casual places take no bookings, and the queue at eight on a Saturday can run past an hour. Learning each place's quiet times, whether it takes names and phone numbers, and whether bar or counter seats are held for walk-ins gets you in without the wait.

                ## Milestones
                1. The no-booking places on your wishlist flagged.
                2. Quiet times noted for each: early evening, late lunch or a weekday.
                3. Waitlist methods recorded: name at the door, an app or a text message.
                4. Three no-booking places eaten at with a wait under twenty minutes.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Three no-booking wishlist restaurants visited with a wait under twenty minutes, with quiet times noted for each."
                cadence: phased
                effort_hours_estimate: "3"
              tasks:
                - "Flag every no-booking restaurant on the wishlist"
                - "Note the quietest times for each from reviews or by asking staff"
                - "Arrive at opening time for one no-booking place this month"
                - "Record the actual wait time in the dish log"
            - name: Food halls, markets and street food
              description: |-
                ## Purpose
                Some of the best eating in any city happens at market stalls, food halls and hawker centres, where there is no booking, often no online menu, and the best stall is not always the one with the queue. Knowing how these places work, from ordering and seating customs to which stalls locals use, makes them a regular part of eating out rather than a gamble.

                ## Milestones
                1. Three markets or food halls within reach listed with opening days.
                2. Customs noted for each: paying, seating, sharing tables and returning trays.
                3. A favourite stall chosen at each, with its best dish.
                4. One unfamiliar stall tried on every visit.
              priority: low
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "Three markets or food halls visited, each with customs, a favourite stall and its best dish written in the dish log."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "List three markets or food halls within reach and their opening days"
                - "Walk the whole market before choosing on your first visit"
                - "Note seating, payment and tray customs for each"
                - "Try one stall you have never ordered from on each return visit"
            - name: Choosing restaurants for a mixed-needs group
              description: |-
                ## Purpose
                A group of eight with a vegan, a halal eater, someone avoiding alcohol and a nut allergy can still eat well together, but not at a place chosen on reputation alone. Checking menus and calling ahead before you commit makes the group booking work for everyone, not just the person who chose.

                ## Milestones
                1. Every diner's requirements gathered before choosing.
                2. Three candidate restaurants checked against the full list using their online menus.
                3. The best fit phoned to confirm it can cater for each need.
                4. The booking made with requirements noted on the reservation.

                ## Notes
                People with serious allergies should speak to the restaurant themselves. Your job as organiser is to choose somewhere willing and to pass the details on accurately.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A group booking at a restaurant that has confirmed by phone it can cater for every diner's stated requirement."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Message the group asking for dietary requirements and hard limits"
                - "Check three candidate menus against every requirement"
                - "Phone the best fit and confirm what they can cater for"
                - "Add the requirements to the reservation notes"
            - name: Delivery apps versus planned meals out
              description: |-
                ## Purpose
                Delivery fees, service charges and menu mark-ups mean a takeaway for two often costs close to a casual meal in the same restaurant, without the experience. Comparing three months of delivery spending with what it would buy as planned meals out lets you decide deliberately which you want more of.

                ## Milestones
                1. Three months of delivery app orders totalled, including fees and tips.
                2. The same orders priced at each restaurant's own menu prices.
                3. A decision recorded: a monthly delivery cap, or some deliveries swapped for meals out.
                4. The decision reviewed after two months.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A recorded decision on a monthly delivery cap or swap, based on three months of delivery spend priced against dining in."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Total three months of delivery orders including fees and tips"
                - "Price the same orders from each restaurant's dine-in menu"
                - "Decide on a monthly delivery cap or a swap for meals out"
                - "Check after two months whether the decision held"
            - name: Choosing the venue for a milestone celebration
              description: |-
                ## Purpose
                Milestone dinners such as a fortieth, a graduation or a retirement are booked once, and the right room, set menu and price per head matter more than the restaurant's fame. Scoring three candidate venues on the same criteria before paying any deposit gives a choice you will not second-guess on the night.

                ## Milestones
                1. Criteria agreed: guest count, budget per head, private space, accessibility and location.
                2. Three venues shortlisted, each asked for set menu options and minimum spend.
                3. Each venue scored against the criteria.
                4. A venue chosen and the deposit paid with the terms saved.

                ## Notes
                Start from the **Purchase decision** template; it works well for comparing venues even though what you are buying is an evening.
              priority: medium
              deadlineOffsetDays: 60
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A celebration venue chosen from three scored options, with the deposit paid and cancellation terms saved."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Write down guest count, budget per head and must-have features"
                - "Ask three venues for set menus, minimum spend and room options"
                - "Score each venue against your criteria"
                - "Pay the deposit and save the cancellation terms"
            - name: Dining memberships and perks audit
              description: |-
                ## Purpose
                Dining discount cards, restaurant subscriptions, card-linked perks and loyalty schemes promise savings, but many are paid for and barely used. A yearly audit of what each one actually saved you against what it cost decides which to keep.

                ## Milestones
                1. Every dining membership, discount scheme and card perk listed with its annual cost.
                2. Actual savings or value from each over the last year estimated.
                3. A keep or cancel decision recorded for each.
                4. Renewal dates in the calendar for the ones kept.

                ## Notes
                Start from the **Purchase decision** template for any new scheme you are thinking of joining.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "Each dining membership has a recorded annual cost, an estimated saving and a keep or cancel decision, reviewed every year."
                cadence: cyclic
              tasks:
                - "List every dining membership, discount card and card perk you hold"
                - "Estimate what each saved you over the last year"
                - "Cancel those that cost more than they saved"
                - "Review dining memberships before the first renewal date @recurring(yearly)"
            - name: Six unfamiliar cuisines in twelve months
              description: |-
                ## Purpose
                Eating out is the easiest way to try a cuisine properly, cooked by people who grew up with it, yet most wishlists cluster around four or five familiar ones. Picking six cuisines you have never eaten at a restaurant and booking one every two months widens both the list and your palate.

                ## Milestones
                1. Six cuisines you have never eaten at a restaurant chosen.
                2. One well-regarded restaurant found for each.
                3. A meal booked roughly every two months.
                4. All six visited and a favourite dish from each logged.
              priority: low
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "Six restaurants of six previously untried cuisines visited within twelve months, each with a favourite dish logged."
                cadence: phased
                effort_hours_estimate: "12"
              tasks:
                - "List cuisines you have never eaten at a restaurant"
                - "Choose six and find one well-regarded restaurant for each"
                - "Book a table for the first cuisine on your list"
                - "Ask staff at each for the dish they would order themselves"
            - name: Raising a problem with a meal
              description: |-
                ## Purpose
                Cold food, a wrong order or a long wait is usually fixable on the spot, yet most people say nothing and then post an angry review. Knowing how to raise a problem calmly while it can still be put right, and when to follow up afterwards, gets better outcomes and keeps you welcome.

                ## Milestones
                1. A short, calm way to raise a problem at the table written down.
                2. The difference between a fixable issue and one to take up afterwards understood.
                3. A follow-up message template ready for problems not resolved on the night.
                4. One issue raised in the moment and its outcome noted.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A written script for raising problems at the table and a follow-up message template, used at least once with the outcome noted."
                cadence: one-shot
                effort_hours_estimate: "1"
              tasks:
                - "Write a one-sentence way to raise a problem politely at the table"
                - "Draft a short follow-up message for issues not fixed on the night"
                - "Raise the next problem while staff can still fix it"
                - "Note in the dish log how the restaurant handled it"
            - name: Lunch sittings at expensive restaurants
              description: |-
                ## Purpose
                Restaurants that cost a fortune at dinner frequently offer a set lunch for a fraction of the price, cooked by the same kitchen. Trying three wishlist places at lunch first tells you whether the full dinner is worth saving for, and sometimes the lunch turns out to be the better meal.

                ## Milestones
                1. Wishlist restaurants with a set lunch identified, with prices.
                2. Three set lunches booked on days off or holidays.
                3. Each lunch logged with a verdict on whether dinner is worth it.
                4. Dinner bookings made only for places that passed the lunch test.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "Three set lunches eaten at expensive wishlist restaurants, each with a recorded verdict on whether to return for dinner."
                cadence: phased
                effort_hours_estimate: "9"
              tasks:
                - "Find which expensive wishlist restaurants offer a set lunch"
                - "Book the first set lunch on a day off"
                - "Record whether the dinner menu is worth saving for"
                - "Move places that passed the lunch test up the wishlist"
            - name: Anniversary dinner each year
              description: |-
                ## Purpose
                Anniversaries arrive on the same date every year and still catch people out with a last-minute table somewhere ordinary. Choosing the place two months ahead, booking it on release and adding a small personal touch, such as telling the restaurant it is a celebration, makes the evening feel planned rather than rescued.

                ## Milestones
                1. The anniversary date and preferred style of meal agreed.
                2. A restaurant chosen and booked at least six weeks ahead.
                3. Any special request passed to the restaurant when booking.
                4. The meal logged with a photo for next year's comparison.
              priority: high
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "An anniversary dinner booked at least six weeks ahead for two consecutive years, each recorded in the dish log."
                cadence: cyclic
              tasks:
                - "Agree the kind of anniversary meal you both want this year"
                - "Book the anniversary dinner eight weeks ahead @recurring(yearly)"
                - "Mention the occasion and any special request when booking"
                - "Add the evening to the dish log with a photo"
            - name: Group birthday dinner for ten or more
              description: |-
                ## Purpose
                Large tables strain a kitchen and a bill, which is why many restaurants insist on set menus, deposits and a service charge for groups. Organising one well means agreeing the budget with guests before booking, securing a set menu that suits everyone and settling the bill without an awkward half hour at the end.

                ## Milestones
                1. Guest list and per-head budget confirmed with guests before booking.
                2. A restaurant booked that takes groups, with set menu and deposit terms agreed.
                3. Final numbers and dietary needs sent to the restaurant 48 hours ahead.
                4. The bill settled on the night with one agreed method.
              priority: medium
              deadlineOffsetDays: 45
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A birthday dinner for ten or more held at the agreed per-head budget, with final numbers sent 48 hours ahead and the bill settled on the night."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Message guests with the date and the expected cost per head"
                - "Book a restaurant that offers group set menus"
                - "Send final numbers and dietary needs 48 hours before"
                - "Agree how the bill will be split before the night"
            - name: Saving for a destination tasting menu
              description: |-
                ## Purpose
                A celebrated tasting menu with drinks can cost as much as a short holiday, and booking one on impulse means an anxious bill. Treating it as a savings goal, with the restaurant chosen, the full cost estimated and a monthly amount set aside, means the meal is paid for before you sit down.

                ## Milestones
                1. The restaurant chosen and its full cost estimated, including drinks, service and travel.
                2. A savings target and monthly amount set.
                3. The booking release date for the target month noted.
                4. The target reached and the meal booked.

                ## Notes
                Start from the **Savings goal** template.
              priority: medium
              deadlineOffsetDays: 365
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "The full cost of a chosen tasting menu saved in a separate pot and the table booked within twelve months."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Choose the restaurant and estimate the full cost including travel"
                - "Set a savings target and a monthly amount"
                - "Note when tables for your target month will be released"
                - "Move the monthly amount into the meal fund @recurring(monthly:2)"
            - name: Private dining room for a family celebration
              description: |-
                ## Purpose
                Private rooms bring minimum spends, fixed menus, room hire terms and deposit deadlines that read more like a contract than a reservation. Reading the terms, confirming numbers on time and naming one person as the restaurant's contact keeps a family celebration from ending in a surprise charge.

                ## Milestones
                1. Two or three rooms compared on minimum spend, capacity and access.
                2. The written terms read, covering deposit, cancellation and the final numbers deadline.
                3. Menu, drinks arrangement and timings confirmed in writing.
                4. One named family contact agreed with the restaurant for the day.

                ## Notes
                Start from the **Vendor** template to keep the contract, contact and payments in one place.
              priority: medium
              deadlineOffsetDays: 90
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A private dining room booked with written terms saved, final numbers confirmed by the deadline and no unexpected charges on the bill."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Ask two or three restaurants for private room terms and minimum spends"
                - "Read the cancellation and final numbers clauses before paying"
                - "Confirm menu, drinks and timings in writing"
                - "Name one family member as the restaurant's contact on the day"
            - name: Restaurant week and food festival calendar
              description: |-
                ## Purpose
                Many cities run restaurant weeks, set-menu promotions and food festivals once or twice a year, when places that are normally out of reach offer fixed-price menus. Knowing the dates in advance and booking the moment reservations open is the cheapest way to tick off expensive wishlist entries.

                ## Milestones
                1. Local restaurant weeks and food festivals listed with their usual months.
                2. Booking open dates added to the calendar.
                3. Two wishlist restaurants booked during the next promotion.
                4. Each meal judged on whether the set menu showed the kitchen at its best.
              priority: low
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "Two wishlist restaurants eaten at during a restaurant week or festival in the year, with the booking open date in the calendar beforehand."
                cadence: cyclic
              tasks:
                - "Find the restaurant weeks and food festivals in your city"
                - "Add each event's booking open date to the calendar @recurring(yearly)"
                - "Book two wishlist places as soon as reservations open"
                - "Note in the dish log whether the set menu was representative"
            - name: Food-led city break restaurant plan
              description: |-
                ## Purpose
                On a three-day city break there are perhaps eight meals, and the best ones usually need booking weeks ahead while the rest are better left to chance. Planning one anchor booking per day and a list of walk-in options near where you will be makes food the highlight of the trip without filling every hour.

                ## Milestones
                1. Three sources on the city's food scene read and a shortlist made.
                2. One anchor booking per day made, with release dates noted for any not yet open.
                3. Walk-in options and markets mapped near each day's plans.
                4. Every meal logged on return with a verdict.

                ## Notes
                Start from the **Trip** template and add the meals as their own section.
              priority: medium
              deadlineOffsetDays: 120
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A city break with one anchor restaurant booked for each day and mapped walk-in options, with every meal logged on return."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Read three sources on the food scene of the city you are visiting"
                - "Book one anchor restaurant for each day of the trip"
                - "Map walk-in places and markets near each day's plans"
                - "Log every meal from the trip within a week of getting home"
            - name: Eating out with babies and young children
              description: |-
                ## Purpose
                Restaurants vary hugely in how well they handle a high chair, a buggy and a toddler who is done after forty minutes. A short list of places that welcome children, with early sittings, quick dishes and space, plus a bag kept ready for meals out, keeps family meals out possible through the early years.

                ## Milestones
                1. Family-friendly places listed with high chairs, changing facilities and buggy space noted.
                2. Early sittings booked so the meal fits around naps and bedtime.
                3. A meal-out bag with snacks, quiet toys and wipes kept packed.
                4. Five family meals out recorded with what worked.
              priority: medium
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A list of at least five child-friendly restaurants with facilities noted, and five family meals out logged with what worked."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "List local places with high chairs, changing facilities and buggy space"
                - "Book family meals for the earliest sitting"
                - "Pack a meal-out bag with snacks, quiet toys and wipes"
                - "Note what worked and what did not after each family meal out"
            - name: Solo dining with confidence
              description: |-
                ## Purpose
                Eating alone at a restaurant can be a great pleasure, with full attention on the food and a counter seat facing the kitchen, yet many people only ever eat alone at their desk. Starting with a counter seat at lunch and a book, then building up to a solo dinner, turns it into a regular treat.

                ## Milestones
                1. Wishlist places with counter, bar or kitchen seating flagged.
                2. A first solo lunch eaten at a counter seat.
                3. A solo dinner booked and enjoyed.
                4. Solo meals written into the dish log alongside shared ones.
              priority: low
              frontmatter:
                mode: building
                output_kind: habit
                success_criteria: "At least three solo meals out, including one dinner, eaten and logged within three months."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Flag wishlist places with counter or bar seating"
                - "Book a solo lunch at a counter seat"
                - "Book a solo dinner within the following month"
                - "Log each solo meal in the dish log"
            - name: Dining out with an older relative or limited mobility
              description: |-
                ## Purpose
                Steps at the door, a toilet downstairs, loud music and dim lighting can make a restaurant hard work for an older relative or anyone with limited mobility, hearing or sight. Phoning ahead with specific questions and keeping a list of places that passed means outings stay easy and frequent.

                ## Milestones
                1. Questions written on step-free access, toilet location, noise, lighting and chairs with arms.
                2. Three restaurants checked by phone or visit against the questions.
                3. A table requested away from speakers and near the entrance where needed.
                4. A short list of places that worked kept for future outings.
              priority: medium
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "Three restaurants checked against a written access question list, with a short list of places that worked kept for future outings."
                cadence: phased
                effort_hours_estimate: "3"
              tasks:
                - "Write five access questions to ask any restaurant before booking"
                - "Phone three candidate restaurants with the questions"
                - "Ask for a quiet table near the entrance when booking"
                - "Add places that worked to an accessible dining list"
            - name: Eating out well on a student budget
              description: |-
                ## Purpose
                Students and anyone on a tight income can still eat out often by knowing where the value is: lunch specials, early bird menus, student discounts, bring-your-own-bottle places and cheap regional food. A short list of reliable cheap eats keeps social meals affordable instead of a reason to stay in.

                ## Milestones
                1. A price ceiling per head set for regular meals out.
                2. Ten good meals under that ceiling listed.
                3. Student, early bird and lunch deals near you noted with their days.
                4. Friends invited to a cheap-eats night at least once a month.
              priority: low
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A cheap-eats list of ten places under a set price per head, with deals and days noted, used for at least three meals out."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Set the most you want to spend per head on a regular meal out"
                - "List ten places that serve a good meal under that amount"
                - "Note student, early bird and lunch deals and the days they run"
                - "Invite friends to a cheap-eats night at one of the ten"
            - name: Hosting a client or work meal
              description: |-
                ## Purpose
                When you take a client, a new colleague or a manager to eat, the meal is really about conversation, so the restaurant needs to be quiet enough to talk, reliable and easy for the guest to reach. Having three tested places for work meals, with the bill arranged discreetly and expense rules known in advance, takes the stress out of hosting.

                ## Milestones
                1. Your organisation's expense rules for client meals checked.
                2. Three restaurants chosen for work meals: quiet, reliable and central.
                3. The guest's dietary needs and travel time considered when booking.
                4. Payment arranged in advance so the bill never arrives at the table.
              priority: medium
              frontmatter:
                mode: service
                output_kind: event-completion
                success_criteria: "Three tested work-meal restaurants listed, with expense limits known and one client meal hosted with the bill arranged in advance."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Check your organisation's expense policy for client meals"
                - "Choose three quiet, central restaurants suitable for work meals"
                - "Ask the guest about dietary needs when inviting them"
                - "Hand your card to the host on arrival so the bill is settled discreetly"
            - name: Finding your restaurants after a move
              description: |-
                ## Purpose
                Moving to a new town or city means losing every regular at once, and the first few months are spent eating at whatever is nearest. Asking neighbours and local shopkeepers, walking the main streets and trying one new place a week rebuilds a list of regulars within three months.

                ## Milestones
                1. Five recommendations collected from neighbours, colleagues and shop staff.
                2. The main eating streets near home walked and promising places added to the wishlist.
                3. One new local place tried each week for twelve weeks.
                4. A new list of five regulars in place.
              priority: medium
              deadlineOffsetDays: 90
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "Within three months of moving, twelve local places tried and a new list of five regulars written down."
                cadence: phased
                effort_hours_estimate: "12"
              tasks:
                - "Ask five neighbours or shop staff for their favourite local restaurant"
                - "Walk the nearest high street and add promising places to the wishlist"
                - "Try one new local place each week for twelve weeks"
                - "Write your new list of five regulars"
            - name: Getting tables at hard-to-book restaurants
              description: |-
                ## Purpose
                Beyond the release-time alarm, people who regularly eat at the hardest restaurants use quieter routes: cancellation waitlists, bar seats held for walk-ins, unpopular slots such as a Tuesday at half past five, booking as a party of two and simply phoning the day before. Combining these routes turns a hopeless list into a few realistic bookings.

                ## Milestones
                1. Every alternative route checked for your three hardest targets.
                2. Waitlists joined and bar seat policies noted.
                3. Flexible slots you would accept listed, including early, late and weekday lunches.
                4. At least one hard-to-book table secured within six months.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "At least one table secured at a hard-to-book wishlist restaurant within six months, with the routes tried recorded for each target."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Choose your three hardest-to-book wishlist targets"
                - "Join the cancellation waitlist for each"
                - "Ask each whether bar or counter seats are kept for walk-ins"
                - "Phone one target the day before a free evening to ask about cancellations"
            - name: Following chefs, pop-ups and supper clubs
              description: |-
                ## Purpose
                Experienced diners follow cooks rather than buildings: a sous chef leaving a celebrated kitchen to open their own place, a residency in a pub kitchen, a monthly supper club in someone's flat. Tracking a handful of chefs means you hear about these early, when tables are easy to get and prices are often at their lowest.

                ## Milestones
                1. Five to ten chefs or cooks whose food you love identified.
                2. Their newsletters, social accounts or mailing lists followed.
                3. Pop-ups, residencies and supper clubs added to the wishlist with dates.
                4. Two pop-up or supper club meals eaten in a year.
              priority: low
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "Five to ten chefs followed, with two pop-up or supper club meals eaten and logged within twelve months."
                cadence: rolling
              tasks:
                - "List the chefs behind your five favourite meals"
                - "Subscribe to their newsletters or mailing lists"
                - "Check followed chefs for new pop-ups and residencies @recurring(quarterly)"
                - "Book the next pop-up or supper club that fits your diary"
            - name: Monthly dining club with friends
              description: |-
                ## Purpose
                Friends who eat out together once a month, each choosing in turn, get through far more of everyone's wishlists and keep the friendships on the calendar. A rota, a price guideline and one person handling the booking each time make the club run itself.

                ## Milestones
                1. Four to eight members recruited and a monthly evening agreed.
                2. A rota set so each member chooses in turn.
                3. A price per head guideline and bill-splitting method agreed.
                4. Twelve dining club meals held in a year.
              priority: low
              frontmatter:
                mode: service
                output_kind: habit
                success_criteria: "Twelve monthly dining club meals held in a year, each chosen by the member whose turn it was on the rota."
                cadence: rolling
              tasks:
                - "Invite four to eight friends to a monthly dining club"
                - "Agree a rota, a price guideline and how bills are split"
                - "Remind this month's chooser to book the table @recurring(monthly:6)"
                - "Keep a shared list of every club meal and its rating"
            - name: Personal restaurant guide for visitors
              description: |-
                ## Purpose
                Visiting friends, new colleagues and relatives all ask where to eat, and a rushed reply names whatever comes to mind. A short guide drawn from the dish log, sorted by area, price and occasion with the dish to order at each, is a generous thing to hand over and keeps your own favourites front of mind.

                ## Milestones
                1. Twenty places chosen from the dish log with go back verdicts.
                2. Each entry written with area, price band, occasion and the dish to order.
                3. The guide grouped into sections: cheap, special, families and late night.
                4. The guide shared and refreshed once a year.
              priority: low
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "A written guide of twenty restaurants with area, price band and dish to order, shared with at least three people and refreshed yearly."
                cadence: cyclic
              tasks:
                - "Pick twenty go back restaurants from the dish log"
                - "Write one line on each with area, price band and the dish to order"
                - "Ask the agent to group the entries into cheap, special, family and late night"
                - "Refresh the visitor guide and remove closed places @recurring(yearly)"
---

# Restaurant Wishlist & Dining Out

This area is for curious eaters who keep hearing about places they mean to try and then forget them. It starts with the foundations (one wishlist, a capture habit, a dining budget, a dish log and a set of local regulars), then the routines that keep the list fresh and the bookings honest, the skills of reading reviews and ordering well, decisions about delivery, memberships and venues, the dated occasions worth booking ahead, situations such as eating with children, alone or with an older relative, and finally the work of an experienced diner chasing hard tables and following chefs.

What repeats is a weekly capture sweep and meal write-up, a Thursday check of the coming week's bookings, a monthly new-restaurant night with a wishlist tidy, release-date and voucher checks, a quarterly look at spending and seasonal menus, and the yearly anniversary booking and best-meals list. The Monthly budget and bills, Metrics log, Purchase decision, Savings goal, Vendor and Trip templates pair with the projects that name them. Installing adds all 50 projects as active, so archive the ones that are not for you yet.
