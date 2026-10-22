---
id: fitness-sport.ski-snowboard-season-prep
name: Ski & Snowboard Season Prep
description: "Ski legs built before the trip, boots and bindings fitted properly, lessons and passes booked in good time, and a clear route from first turns to carving, powder and the backcountry."
category: personal
version: 1.0.0
tags: [fitness-sport, ski-snowboard-season-prep, everyone, athlete, skiing, snowboarding, pre-season-conditioning, ski-trip]
author: Aurum Technology
starter_structure:
  templates:
    - training-program
    - purchase-decision
    - metrics-log
    - savings-goal
    - operational-checklist
    - trip
  pillars:
    - name: Fitness & Sport
      emoji: "🏋️"
      description: "Training, play and competition: building strength, endurance and skill in a sport or a gym, structuring blocks of work around events, recovering properly, and keeping the sessions honest with a log rather than a feeling."
      pillarFrontmatter:
        review_cadence: monthly
      areas:
        - name: Ski & Snowboard Season Prep
          description: "Getting legs, fitness and technique ready for the slopes, from pre-season conditioning to lessons and progression across a ski trip."
          projects:
            - name: Season goal and ski trip shortlist on one page
              description: |-
                ## Purpose
                Most ski holidays are booked around a date and a price, then the skier spends the week on runs that are too easy or too frightening. Writing down when you can go, who is coming, what level everyone is and one thing you want to be able to do by the last day turns the trip into something you can prepare for. It also tells you how many weeks of conditioning you have before departure.

                ## Milestones
                1. The window of possible travel dates and the number of days on snow written down.
                2. Everyone in the party listed with their current level and what they want from the week.
                3. One specific goal for the trip stated, such as linking parallel turns on red runs or riding a whole blue without falling.
                4. Two or three resorts shortlisted that suit the group's levels, snow reliability and budget.
                5. The number of weeks until departure counted, to set the length of pre-season training.

                ## Notes
                High-altitude resorts and glacier areas are the safer bet for snow early and late in the season; lower villages are often cheaper and prettier but more of a gamble.
              priority: high
              deadlineOffsetDays: 14
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A one-page trip brief names the dates, the party and their levels, one goal per person and a shortlist of up to three resorts."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Write down the dates you could travel and how many days you want on snow"
                - "Ask each person coming what level they are and what they want from the week"
                - "Shortlist three resorts that suit the weakest and strongest in the group"
                - "Count the weeks to departure and note them at the top of the brief"
            - name: Honest ability self-assessment for skiing or riding
              description: |-
                ## Purpose
                Ski schools group people by level, and booking the wrong group wastes a week either holding back or hanging on. Rating yourself against a school's published level descriptions, using what you could do on your last day rather than your best run, gets you into the right class and gives you a starting point to measure progress from.

                ## Milestones
                1. A ski school's level descriptions for your discipline found and read.
                2. Your current level chosen against those descriptions, based on your last trip rather than your best moment.
                3. The runs and snow you are comfortable on, and the ones you avoid, listed.
                4. The skills that would move you up one level written as two or three plain sentences.

                ## Notes
                If you have not been on snow for more than two seasons, assess yourself one level lower than you finished and let an instructor move you up.
              priority: medium
              frontmatter:
                mode: building
                output_kind: knowledge
                success_criteria: "Your ability level is recorded against a named ski school scale, with the runs you avoid and the skills that would move you up one level."
                cadence: one-shot
                effort_hours_estimate: "1"
              tasks:
                - "Find the level descriptions a ski school publishes for your discipline"
                - "Pick the level that matches what you could do on your last day"
                - "List the runs and conditions you avoid and why"
                - "Write the two skills that would move you up a level"
            - name: Pre-season ski fitness baseline tests
              description: |-
                ## Purpose
                Skiing and riding ask for hours of bent-knee holding, quick changes of direction and sudden balance corrections, mostly from legs that have spent the summer at a desk. A short set of tests, such as a timed wall sit, a single-leg balance with eyes closed, a controlled step-down and a two-minute step test, shows where you are weakest and gives a number to beat before the trip.

                ## Milestones
                1. A wall sit, single-leg balance on each side, step-down quality and a step test completed on the same day.
                2. Each result written down with the date.
                3. The weakest result, or the biggest difference between left and right, picked out as the main thing to train.
                4. A retest date set for the week before departure.

                ## Notes
                Stop any test that causes sharp pain and get it checked by a physiotherapist before you start conditioning. These tests are a training reference, not a medical screen.
              priority: high
              deadlineOffsetDays: 14
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A dated sheet holds results for four leg and balance tests, the weakest one identified, and a retest booked before departure."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Time how long you can hold a wall sit with thighs level"
                - "Test single-leg balance on each side with eyes closed and note the seconds"
                - "Film five slow step-downs from a stair on each leg"
                - "Repeat the four tests and compare the numbers @recurring(quarterly)"
            - name: Eight-week pre-season ski conditioning block
              description: |-
                ## Purpose
                Leg burn by eleven in the morning and stiff knees by day three are mostly a training problem, and eight weeks is long enough to change them. A block that moves from general leg strength into slow lowering work, lateral jumps and longer intervals mirrors what a day on the mountain asks, so the first lift up feels like week nine rather than day one.

                ## Milestones
                1. An eight-week plan written with three sessions a week and a lighter final week.
                2. Weeks one to three built on squats, split squats, hinges and trunk work.
                3. Weeks four to six adding slow lowering work, lateral bounds and box step-downs.
                4. Weeks seven and eight including interval sets that match a three to five minute run.
                5. At least 20 of the 24 planned sessions completed and ticked off.

                ## Notes
                Start from the **Training program** template. Taper the last five days before travel with shorter sessions and no new exercises, so you arrive fresh rather than sore.
              priority: high
              deadlineOffsetDays: 70
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "At least 20 of 24 planned conditioning sessions over eight weeks are ticked off, ending with a lighter taper week before travel."
                cadence: phased
                effort_hours_estimate: "24"
              tasks:
                - "Count back eight weeks from departure and mark the start date"
                - "Write the three weekly sessions for the first three weeks"
                - "Add lateral bounds and slow step-downs from week four"
                - "Tick off the week's sessions and adjust the next week @recurring(weekly:sun)"
            - name: Ski or snowboard boot fitting with a specialist
              description: |-
                ## Purpose
                Boots decide more about a ski week than skis or boards do: too big and you lose control and bruise your shins, too tight and your toes go numb by lunch. A proper fitting with a specialist bootfitter, who measures your feet, checks your flex and stance and lets you wear the shortlist for twenty minutes, is the best money most skiers can spend.

                ## Milestones
                1. Your foot length, width and any problem areas measured by a fitter.
                2. Two or three boots tried on, each worn for at least 15 minutes in the shop.
                3. A boot chosen with a flex suited to your weight and level.
                4. Any heat moulding, punching or padding done before the trip, not in resort.
                5. The model, size and any adjustments written on your kit list.

                ## Notes
                Take the socks you will ski in. Boots should feel snug in the shop; a boot that feels comfortable on day one is usually too big by day three. If you rent, ask the hire shop for a proper fit and refuse a pair that pinches or lets your heel lift.
              priority: high
              deadlineOffsetDays: 45
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "Boots fitted by a specialist are owned or reserved, with the model, size and any adjustments recorded on the kit list."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Book a bootfitting appointment at least six weeks before travel"
                - "Pack the ski socks and footbeds you plan to use"
                - "Wear each shortlisted boot for 15 minutes before deciding"
                - "Write down the model, size and adjustments made"
            - name: Rent, demo or buy decision for skis or board
              description: |-
                ## Purpose
                Buying skis for one week a year rarely pays, but renting the wrong length or a worn-out board slows progress. Comparing the cost over three seasons of rental, premium rental, demo days and buying, against how many days you actually ski, gives a clear answer, and it tells you what length and profile to ask for either way.

                ## Milestones
                1. Your days on snow in each of the last three seasons counted.
                2. Three seasons of standard rental, premium rental and buying costed side by side, including servicing and transport.
                3. The length and profile to ask for noted from a shop or instructor, based on height, weight and level.
                4. A decision recorded, with the hire booked or the purchase made.

                ## Notes
                Start from the **Purchase decision** template. Booking hire online before the trip is usually cheaper than walking in, and many shops let you swap models mid-week.
              priority: medium
              deadlineOffsetDays: 60
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A recorded decision to rent, demo or buy, backed by a three-season cost comparison and the length and profile to ask for."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Count how many days you skied or rode in each of the last three seasons"
                - "Price three seasons of rental against buying, including servicing and bag fees"
                - "Ask a shop what length and profile suit your height, weight and level"
                - "Book the hire online or make the purchase"
            - name: Winter sports insurance and rescue cover check
              description: |-
                ## Purpose
                Standard travel policies often exclude winter sports, cap mountain rescue or helicopter evacuation, or void cover if you ski off-piste or without a helmet. Reading the policy wording before you book lessons, rather than after a fall, means you know exactly what is covered and what you would pay for yourself.

                ## Milestones
                1. Your current travel policy checked for winter sports, mountain rescue, medical repatriation and equipment cover.
                2. Conditions on off-piste skiing, helmets and alcohol written down in plain words.
                3. A winter sports add-on or specialist policy bought if the existing cover falls short.
                4. The policy number, emergency assistance line and any required health card saved on your phone and on paper.

                ## Notes
                Check whether the policy covers piste closure, lack of snow and a lost lift pass. If you plan to ski off-piste with a guide, confirm whether that needs to be declared.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A policy covering winter sports, rescue and repatriation is in place, with exclusions noted and the emergency number saved in two places."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Read your travel policy's winter sports and exclusions sections"
                - "Write down the off-piste, helmet and alcohol conditions in plain words"
                - "Buy a winter sports add-on if rescue or repatriation is missing"
                - "Save the policy number and assistance line on your phone and on paper"
                - "Check winter sports cover before renewing the travel policy @recurring(yearly)"
            - name: Helmet, goggles and back protector fit check
              description: |-
                ## Purpose
                A helmet that wobbles or goggles that leave a gap at the forehead are both common and both avoidable. Checking fit, age and condition at home, and replacing anything that has taken a hard knock or is past the maker's recommended life, takes an hour and is done long before resort shops charge their premium prices.

                ## Milestones
                1. Helmet fit checked: snug, level, not moving when you shake your head, with the buckle under the chin.
                2. Helmet age and any past impacts noted, and the helmet replaced if the maker advises.
                3. Goggles checked with the helmet on for gaps, fogging and a lens for flat light.
                4. A decision made on wrist guards or a back protector, especially for snowboarders and park riders.

                ## Notes
                Helmets are designed to absorb one significant impact. Look for a recognised snow sports safety standard on the label.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "Helmet, goggles and any chosen protection fit together, carry a snow sports standard and are within the maker's recommended age."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Put the helmet on and shake your head to check it stays put"
                - "Find the manufacture date inside the helmet and note it"
                - "Try the goggles with the helmet on and look for gaps at the forehead"
                - "Decide on wrist guards or a back protector for riding"
                - "Inspect the helmet shell and straps for damage before the season @recurring(yearly)"
            - name: Layering system for cold, wet and bright days
              description: |-
                ## Purpose
                Mountain weather can swing from minus fifteen in a wind at the top lift to a sunny terrace at lunch, and the wrong layers mean either shivering or soaking in sweat. Laying out what you own as base, mid and shell, and filling the one or two real gaps, is cheaper and warmer than buying a new jacket.

                ## Milestones
                1. Everything you own sorted into base layers, mid layers, shell and accessories.
                2. Cotton removed from the ski pile and replaced with wool or synthetic base layers.
                3. Real gaps identified, often a thin insulated mid layer, liner gloves or a neck tube.
                4. A cold-day and a warm-day outfit written as two short lists.

                ## Notes
                Pack a spare pair of gloves. Wet gloves are one of the most common reasons people head in early.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Two written outfits, cold-day and warm-day, are built from base, mid and shell layers with no cotton next to the skin."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Lay out all your ski clothing in base, mid and shell piles"
                - "Take any cotton out of the base layer pile"
                - "Buy or borrow the one or two missing layers"
                - "Write a cold-day and a warm-day outfit list"
            - name: Lessons and lift pass booking timeline
              description: |-
                ## Purpose
                Ski school classes in peak weeks fill months ahead, and lift passes and hire are often noticeably cheaper when booked online in advance. Putting the booking windows for lessons, passes, hire and any childcare on one timeline avoids the walk-in queue on day one and the disappointment of a full class.

                ## Milestones
                1. Booking opening dates for lessons, passes, hire and childcare found for your resort.
                2. Early booking deadlines noted against the trip date.
                3. Lessons and passes booked and the confirmations saved in one place.
                4. Collection times and meeting points for day one written down.
              priority: medium
              deadlineOffsetDays: 45
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Lessons, lift passes and hire are booked with confirmations saved, and day-one collection times and meeting points are written down."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Find when your resort opens booking for lessons, passes and hire"
                - "Put each booking window on the calendar against the trip date"
                - "Save every booking confirmation in one folder"
                - "Book next season's lessons as soon as the school opens booking @recurring(yearly)"
            - name: Twice-weekly ski legs strength routine
              description: |-
                ## Purpose
                Once the pre-season block ends, strength fades within a few weeks, and a season with several trips needs legs that stay ready. Two short sessions a week, around 30 minutes of squats, split squats, hinges and slow lowering work, hold onto most of the gains and keep knees and hips used to load between trips.

                ## Milestones
                1. A 30-minute routine written with four or five leg and trunk exercises.
                2. Two fixed days chosen and kept for at least six weeks.
                3. Loads or repetitions logged so you can see them hold or rise.
                4. The routine cut to one session in the week before travel and resumed after.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Two ski leg sessions are logged in at least five of every six weeks across the season."
                cadence: rolling
              tasks:
                - "Write a 30-minute routine of squats, split squats, hinges and planks"
                - "Do the ski legs session on your two fixed days @recurring(weekly:mon,thu)"
                - "Add a little load or a few repetitions when the last set feels easy"
                - "Compare this month's loads with last month's @recurring(monthly:14)"
            - name: Balance and knee control practice for the slopes
              description: |-
                ## Purpose
                Many ski knee injuries happen when the knee drops inward or the skier falls back with weight on the tails. Ten minutes a week of single-leg balance, hops with soft landings and lateral control work builds the reflexes that keep knees over toes when a ski catches an edge.

                ## Milestones
                1. A 10-minute balance and landing routine written and learned.
                2. Single-leg balance held for 30 seconds on each side on an unstable surface.
                3. Hops and lateral bounds landed quietly with the knee tracking over the toes.
                4. The routine kept up once a week through the season.

                ## Notes
                Ask a physiotherapist to check your landing pattern if one knee collapses inward. Some ski safety programmes also teach how to fall without twisting, which is worth learning before the trip.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Single-leg balance of 30 seconds each side and quiet, knee-over-toe landings are achieved, with the routine logged weekly."
                cadence: rolling
              tasks:
                - "Learn three single-leg balance drills on a cushion or folded mat"
                - "Film a set of lateral hops to check where your knees go"
                - "Do the 10-minute balance and landing routine @recurring(weekly:wed)"
                - "Ask a physiotherapist to watch your landing if a knee caves in"
            - name: Aerobic base for long days at altitude
              description: |-
                ## Purpose
                Six hours on the mountain, much of it above 2,000 metres where the air is thinner, tires the heart and lungs as well as the legs. A weekly long session of walking, cycling or easy running, plus one shorter harder one, means you still have legs and breath for the last run, when tired skiers make most of their mistakes.

                ## Milestones
                1. One long easy session of 60 minutes or more done most weeks.
                2. One shorter session of three to five minute intervals added from six weeks out.
                3. Hill walking or stair work included to load the legs uphill.
                4. Sessions recorded so you can see the long session lengthen.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A long aerobic session of at least 60 minutes is logged in three of every four weeks in the two months before travel."
                cadence: rolling
              tasks:
                - "Pick a long easy activity you will keep up, such as hill walking or cycling"
                - "Do a 60-minute easy aerobic session @recurring(weekly:sat)"
                - "Add one set of three to five minute intervals from six weeks out"
                - "Plan a hilly route or stair session to load the legs uphill"
            - name: Ski and board waxing and edge care
              description: |-
                ## Purpose
                A dry base and blunt edges make turning harder and icy pistes frightening, and plenty of owners go a whole season without a service. A simple routine of a workshop service before the season, a hot wax every few days on snow and a quick edge check after rocks keeps skis or a board predictable.

                ## Milestones
                1. A full workshop service, with base grind and edge sharpen, done before the first trip.
                2. A basic waxing kit bought or a local shop chosen for quick waxes.
                3. Wax applied every four to six days on snow, or when the base looks white and dry.
                4. Edges checked by fingernail after any rocky day, with burrs removed.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A pre-season workshop service is done each year and the base is waxed at least once for every six days on snow."
                cadence: cyclic
              tasks:
                - "Book a full workshop service before the first trip @recurring(yearly)"
                - "Buy a basic iron, wax and scraper kit or choose a shop"
                - "Learn to hot wax at home from the shop or a guide"
                - "Run a fingernail along the edges after any rocky day"
            - name: Ski days log with conditions and technique notes
              description: |-
                ## Purpose
                Memories of a ski trip blur into a handful of good runs and one bad fall, which tells you little about what to work on. A short log of each day, covering snow, runs, what the instructor said and what clicked, shows patterns: the conditions that unsettle you, the drill that worked, the afternoon your legs went.

                ## Milestones
                1. A log with columns for date, resort, snow, runs, lesson notes and how your legs felt.
                2. Every day on snow this season entered within a day.
                3. Instructor feedback captured in their own words.
                4. A season summary of three things that improved and two to work on.

                ## Notes
                Start from the **Metrics log** template. A phone note on the chairlift is enough; write it up that evening.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: artifact
                success_criteria: "Every day on snow this season has a log entry, and the season ends with a written summary of improvements and focus areas."
                cadence: rolling
              tasks:
                - "Create a ski days log from the metrics log template"
                - "Add a column for the instructor's exact feedback"
                - "Enter each day's snow, runs and notes that evening"
                - "Write the season summary within a week of the last day"
            - name: Indoor snow and dry slope sessions between trips
              description: |-
                ## Purpose
                A week a year means relearning the basics every winter. A monthly hour on an indoor snow slope or dry slope, with a short lesson now and then, keeps balance and turn shape alive, so the trip starts at last year's finishing level instead of two days behind.

                ## Milestones
                1. The nearest indoor snow centre or dry slope found, with prices and session times.
                2. A monthly session booked and attended for at least three months running.
                3. One technique focus taken into each session from your log.
                4. At least one coached session completed before the trip.

                ## Notes
                Dry slopes are grippier and harsher on falls; wear gloves and long sleeves even in summer.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A slope session is logged in at least eight months of the year, with one coached session in the month before the main trip."
                cadence: rolling
              tasks:
                - "Find the nearest indoor snow centre or dry slope and its prices"
                - "Book a one-hour slope session for the month @recurring(monthly:9)"
                - "Take one technique focus from your log to each session"
                - "Book a short coached session in the month before travel"
            - name: Ski season budget and savings pot
              description: |-
                ## Purpose
                Travel, accommodation, passes, hire, lessons, insurance and lunches at altitude prices add up fast. Pricing the whole trip early and paying into a separate pot each month spreads the cost and turns the January bill shock into a planned expense.

                ## Milestones
                1. A full trip cost estimate across travel, stay, passes, hire, lessons, insurance and spending money.
                2. A monthly amount set that reaches the total before the balance is due.
                3. A separate savings pot opened and a standing transfer set up.
                4. Actual costs recorded after the trip to set next year's figure.

                ## Notes
                Start from the **Savings goal** template.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A separate ski pot holds the full trip estimate by the date the balance is due, with actual costs recorded afterwards."
                cadence: rolling
              tasks:
                - "Price the trip line by line, from travel to mountain lunches"
                - "Divide the total by the months left and set a monthly amount"
                - "Move the monthly amount into the ski pot @recurring(monthly:25)"
                - "Record what the trip actually cost to set next season's figure"
            - name: End-of-season kit storage and inventory
              description: |-
                ## Purpose
                Skis put away wet rust at the edges and boots stored unbuckled lose their shape, so the first job next winter becomes a repair. A one-hour end-of-season routine, with storage wax, buckles done up, everything dried and a list of what needs replacing, means next season starts with a shopping list rather than surprises.

                ## Milestones
                1. Skis or board cleaned, dried and given a thick storage wax.
                2. Boots dried with liners out, then buckled loosely and stored somewhere cool.
                3. Clothing washed with a technical wash and stored dry.
                4. A list made of anything worn out, outgrown or lost, with sizes.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Kit is stored dry with storage wax and buckled boots, and a written replacement list exists before summer."
                cadence: cyclic
              tasks:
                - "Dry all kit fully after the last day of the season"
                - "Apply a thick storage wax and leave it unscraped until next winter"
                - "Buckle the boots loosely and store them somewhere cool"
                - "List anything worn out or outgrown with sizes @recurring(yearly)"
            - name: Daily mountain routine for a ski week
              description: |-
                ## Purpose
                Ski injuries cluster late in the day and late in the week, when tired legs meet busy, chopped-up pistes. A simple daily routine on the trip, with a gentle warm-up, water and sunscreen at every break, a proper lunch and a planned last run before you are spent, keeps the week safe and the legs working to the end.

                ## Milestones
                1. A five-minute warm-up done at the top of the first lift each morning.
                2. Sunscreen and lip balm reapplied and water drunk at every break.
                3. A last-run time agreed before the day starts and kept.
                4. A lighter morning or rest half-day planned around the middle of the week.

                ## Notes
                The words 'one last run' come before a surprising share of falls. Stop while it still feels good.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "On every day of the trip the warm-up is done and the agreed last-run time is kept, with a lighter session midweek."
                cadence: cyclic
              tasks:
                - "Write a five-minute on-snow warm-up you can do in boots"
                - "Pack sunscreen, lip balm and a small water bottle in your jacket"
                - "Agree a last-run time with your group before the first lift"
                - "Plan a lighter morning in the middle of the week"
            - name: Mountain conduct code and piste signs
              description: |-
                ## Purpose
                Collisions on piste are often caused by people who do not know who has right of way, or who stop below a blind roll. The international conduct rules for skiers and snowboarders, plus your resort's piste colours and signs, take half an hour to learn and make you predictable to everyone around you.

                ## Milestones
                1. The ten conduct rules for skiers and snowboarders read and explained aloud.
                2. Your resort's piste colour grades understood, since grades vary between countries.
                3. Signs for closed pistes, avalanche danger, slow zones and off-piste boundaries recognised.
                4. The rules talked through with anyone new in your group before day one.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "You can explain the ten conduct rules and your resort's grade colours and closure signs to someone new before the first lift."
                cadence: one-shot
                effort_hours_estimate: "1"
              tasks:
                - "Read the international conduct rules for skiers and snowboarders"
                - "Look up what each piste colour means at your resort"
                - "Learn the signs for closed runs and avalanche danger"
                - "Talk through the rules with first-timers in your group"
            - name: Chairlifts, drag lifts and gondolas without drama
              description: |-
                ## Purpose
                Lifts cause more beginner panic than slopes do, and a fall at the top of a drag lift can hold up a queue and knock confidence for days. Knowing how to load and unload each type, with skis or with one foot strapped onto a board, turns lifts into a rest rather than a test.

                ## Milestones
                1. The steps for loading and unloading a chairlift learned, including lowering and raising the bar.
                2. Riding a button or T-bar drag lift understood, including what to do if you fall off.
                3. Skating with one foot free practised on the flat, for snowboarders.
                4. A first-day plan that starts on a beginner lift or travelator.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "You have ridden a chairlift and a drag lift and unloaded cleanly at the top at least three times each."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Watch a ski school's guide to chairlift and drag lift loading"
                - "Practise skating on one foot with a board strapped on the other"
                - "Ask the lift attendant to slow the chair on your first ride"
                - "Note what to do if you come off a drag lift halfway"
            - name: Falling and getting up safely on skis and a board
              description: |-
                ## Purpose
                Everyone falls, and the way you fall decides whether it is a laugh or an injury. Learning to go down sideways with arms up rather than back onto outstretched hands, and how to get up across the slope, protects wrists, knees and shoulders, especially for snowboarders in their first week.

                ## Milestones
                1. How to fall to the side and uphill learned for your discipline.
                2. Hands kept up and in rather than reaching back, practised on soft snow.
                3. Getting up across the fall line, with skis or board below you, done without help.
                4. Stepping back into a released ski on a slope practised.

                ## Notes
                Wrist guards are worth considering for new snowboarders, as wrist injuries are among the most common in the first few days.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "You can fall to the side, get up without help and refit a ski or binding on a slope, shown on your first morning."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Read how to fall safely in your discipline"
                - "Practise falling sideways on soft snow at an indoor centre"
                - "Get up across the slope three times without help"
                - "Practise clicking back into a ski on a slope"
            - name: From snowplough to parallel turns
              description: |-
                ## Purpose
                Many skiers stay in a wide snowplough for years because it feels safe, and it becomes exhausting on anything steeper than a blue. Working through the steps from snowplough turns to stem turns to matched parallel turns, with an instructor and set drills, is the move that opens up most of the mountain.

                ## Milestones
                1. Controlled snowplough turns linked on a green or easy blue run.
                2. The inside ski matched at the end of each turn on gentle terrain.
                3. Parallel turns linked on an easy blue with skis staying about hip width apart.
                4. The same turns held on a red run in good conditions.

                ## Notes
                A little speed helps here. Parallel turns are easier with some momentum, and trying them too slowly keeps you in the plough.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Linked parallel turns on a blue run are filmed or confirmed by an instructor by the end of the trip."
                cadence: phased
                effort_hours_estimate: "20"
              tasks:
                - "Ask your instructor for two drills that match the inside ski"
                - "Practise matching at the end of each turn on the easiest blue"
                - "Film a run of linked turns for comparison later"
                - "Try the same turns on a red when the snow is good"
            - name: Snowboard linked turns on heel and toe edges
              description: |-
                ## Purpose
                The first two days on a snowboard are mostly slipping and falling, and many people give up before the turn clicks. Following the standard progression of heel edge side slip, toe edge side slip, falling leaf and then linked turns, with a clear target for each day, makes day three the breakthrough rather than the point of quitting.

                ## Milestones
                1. Side slipping controlled on heel and toe edges down a gentle slope.
                2. Falling leaf completed in both directions.
                3. First turns from heel to toe and toe to heel made without stopping.
                4. A green or easy blue run ridden with linked turns top to bottom.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A full easy run is ridden with linked heel and toe turns, confirmed by an instructor or on video."
                cadence: phased
                effort_hours_estimate: "18"
              tasks:
                - "Find out which foot leads before the first lesson"
                - "Practise heel and toe side slips until both feel controlled"
                - "Do the falling leaf in both directions on a gentle slope"
                - "Film your first linked turns to see where your weight sits"
            - name: Carving clean turns on groomed pistes
              description: |-
                ## Purpose
                Intermediate skiers and riders who skid every turn tire quickly and lose grip on firm snow. Learning to roll onto the edge early and let the sidecut make the turn leaves two thin lines in the corduroy and holds on hard pistes, which is the step from comfortable to confident.

                ## Milestones
                1. Edging drills such as railroad tracks completed on a gentle, quiet piste.
                2. Turns started by tipping rather than twisting, with two clean lines left in the snow.
                3. Carved turns held on a blue at moderate speed.
                4. Carving linked on a red run in the morning while the piste is freshly groomed.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A run of carved turns leaving clean tracks on a blue piste is filmed or confirmed by an instructor."
                cadence: phased
                effort_hours_estimate: "15"
              tasks:
                - "Book a carving lesson or ask your instructor for edging drills"
                - "Do railroad track drills on the quietest gentle piste"
                - "Look back at your tracks to check for clean lines"
                - "Practise carving on freshly groomed runs before ten"
            - name: Moguls, steeps and icy piste tactics
              description: |-
                ## Purpose
                Ice on a red in the afternoon, bumps on a black, a steep pitch on the run home: these are where confident skiers freeze. Learning a tactic for each, such as skiing the troughs, short pivoted turns and steady edge pressure on ice, means harder terrain becomes something you choose rather than something you survive.

                ## Milestones
                1. Short, rhythmic turns practised on a steep groomed section.
                2. A short mogul line skied slowly using the troughs or the tops.
                3. Edge pressure and a quiet upper body practised on a firm or icy patch.
                4. One black or steep run completed in control, with stops where you chose them.

                ## Notes
                Ask for a private or small-group session for this; the feedback matters more here than at any other level.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "One black or steep run with moguls is completed in control, with turns and stops at chosen points."
                cadence: phased
                effort_hours_estimate: "15"
              tasks:
                - "Ask an instructor which mogul line suits your level"
                - "Practise short turns on the steepest groomed pitch you trust"
                - "Ski one short mogul line slowly through the troughs"
                - "Try a black run in the late morning once the snow softens"
            - name: Powder and variable snow technique
              description: |-
                ## Purpose
                Fresh snow is what most skiers dream about, yet many struggle in it, sinking, crossing tips or falling back. A centred stance, even weight on both skis or a slightly weighted back foot on a board, and a bouncing rhythm, practised first at the edges of pistes after a snowfall, make powder days a delight.

                ## Milestones
                1. Even weighting practised in soft snow at the side of a groomed piste.
                2. A rhythm of linked turns held through fresh snow without stopping.
                3. Wider skis or a board with more surface hired or demoed for a powder day.
                4. A run in cut-up afternoon snow completed with the same rhythm.

                ## Notes
                Untracked snow beyond the piste markers is off-piste and carries avalanche risk. Stay inside the boundaries unless you are with a qualified guide.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A powder or soft-snow run is skied or ridden with linked rhythmic turns and no stop for balance."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "Practise even weighting in soft snow at the side of a groomed run"
                - "Count a steady rhythm aloud through linked powder turns"
                - "Hire wider skis or a powder board for a fresh snow day"
                - "Ski the cut-up snow after lunch to practise in heavy conditions"
            - name: Altitude, cold and sun safety briefing
              description: |-
                ## Purpose
                Headaches at high resorts, frostnip on cheeks in a wind, sunburn and snow blindness on a bright spring day are all common and mostly preventable with preparation. A one-page briefing, built from your health service's guidance, tells everyone in the group what to watch for and when to get help.

                ## Milestones
                1. Your health service's guidance on altitude sickness at your resort's height read.
                2. Signs of frostnip, frostbite and hypothermia listed, with what to do.
                3. Sun protection for skin and eyes chosen for snow glare, including category 3 or 4 lenses.
                4. Anyone with a heart, lung or other long-term condition advised to check with their clinician before travel.

                ## Notes
                This briefing organises official guidance. Ask your doctor or pharmacist about anything specific to you.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A one-page briefing covering altitude, cold and sun is written from official guidance and shared with the group before departure."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Look up official guidance on altitude sickness for your resort's height"
                - "List the signs of frostnip and hypothermia on one page"
                - "Buy high-factor sunscreen and category 3 or 4 sunglasses"
                - "Ask the agent to draft a one-page briefing for the group from your notes"
            - name: Choosing a ski school and lesson format
              description: |-
                ## Purpose
                Group lessons, private lessons, semi-private sessions and short clinics suit different people, and the cheapest option is not always the best value. Comparing schools on group size, instructor language, meeting points and reviews, then matching the format to your goal, gets more improvement per hour.

                ## Milestones
                1. Two or three ski schools compared on group size, language, price and meeting point.
                2. A format chosen: group for company and budget, private for a specific goal or fear.
                3. Lesson times matched to the start of the day, when legs and snow are best.
                4. Lessons booked, with your level and goal sent ahead to the school.
              priority: medium
              deadlineOffsetDays: 40
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A ski school and lesson format are chosen and booked, with your level and trip goal sent ahead."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Compare three ski schools on maximum group size and language"
                - "Decide between group, private and semi-private for your goal"
                - "Book morning lessons where the school offers them"
                - "Email the school your level and the one thing you want to learn"
            - name: Binding release check at a certified workshop
              description: |-
                ## Purpose
                Bindings release on settings worked out from weight, height, age, boot sole length and ability, and wrong settings are linked to knee injuries in falls. Having a certified technician set and test them every season, and whenever you change boots, takes minutes and is not a job to do yourself.

                ## Milestones
                1. Your weight, height, age, boot sole length and ability level written down for the technician.
                2. Bindings set and release tested by a certified workshop.
                3. The setting and date recorded with your kit list.
                4. A recheck booked after any change of boots or a big change in weight.

                ## Notes
                Be honest about your ability; overstating it raises the setting and makes release less likely. Snowboard bindings do not release, so riders should check screws and straps instead.
              priority: high
              deadlineOffsetDays: 60
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Bindings have been set and release tested by a certified technician this season, with the setting and date recorded."
                cadence: one-shot
                effort_hours_estimate: "1"
              tasks:
                - "Write your weight, height, age and boot sole length on one card"
                - "Book a binding check at a certified ski workshop"
                - "Record the setting and date the technician gives you"
                - "Have the bindings checked again before each season @recurring(yearly)"
            - name: Custom footbeds and boot adjustments decision
              description: |-
                ## Purpose
                Cold feet, numb toes, arch cramps and a heel that lifts are the usual boot complaints, and footbeds or small boot modifications often fix them. Noting exactly where and when it hurts, then taking that list to a bootfitter, turns a vague complaint into a specific fix.

                ## Milestones
                1. The problem described: where it hurts, after how long, and in which conditions.
                2. A bootfitter's assessment of footbeds, padding, punching or a new boot.
                3. One change made and tested for at least two days on snow.
                4. A decision recorded on whether further work is needed.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A bootfitter has assessed your recorded boot problems and one fix has been tested for at least two days on snow."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Note where your feet hurt and how long into the day it starts"
                - "Mark the sore spots on a drawing of your foot"
                - "Take the notes and boots to a bootfitter for assessment"
                - "Test the change for two days before deciding on more work"
            - name: Snowboard stance and binding angle setup
              description: |-
                ## Purpose
                Rental boards often come set for a generic rider, and a stance too wide or angles that fight your natural position make turning harder and knees sore. Measuring your stance width, choosing a starting angle setup with a shop or instructor, and checking it after day one gives a board that works with your body.

                ## Milestones
                1. Regular or goofy confirmed and stance width measured, starting near shoulder width.
                2. A starting angle setup agreed with a shop or instructor and noted.
                3. Highbacks and straps adjusted to fit your boots.
                4. The setup checked after the first day and adjusted once if needed.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Your stance width and binding angles are recorded and checked with an instructor after the first day on snow."
                cadence: one-shot
                effort_hours_estimate: "1"
              tasks:
                - "Find out whether you ride regular or goofy"
                - "Measure your shoulder width as a starting stance width"
                - "Ask the shop to set angles you can note down"
                - "Recheck the setup with your instructor after day one"
            - name: Season pass versus day passes comparison
              description: |-
                ## Purpose
                Season and multi-resort passes go on sale early with big discounts, and can pay off after surprisingly few days, or tie you to resorts you never visit. Comparing expected days, resorts and blackout dates against day and week prices settles the question before the early price ends.

                ## Milestones
                1. Expected days on snow and likely resorts for the season listed.
                2. Season, multi-resort, week and day pass prices compared, including blackout dates.
                3. The break-even number of days worked out.
                4. A decision made before the early booking price ends.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A pass decision is recorded with the break-even number of days, made before the early booking price closes."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "List the days and resorts you expect to ski this season"
                - "Compare season, multi-resort and day pass prices"
                - "Work out how many days make the season pass pay"
                - "Check season pass prices when early sales open @recurring(yearly)"
            - name: Video review of your skiing or riding
              description: |-
                ## Purpose
                Most skiers believe they stand forward and centred, and video usually says otherwise. Filming a few runs from below, then comparing them with an instructor's demonstration, makes one fault visible and gives you a specific thing to change.

                ## Milestones
                1. Two short clips filmed on a run you are comfortable on, from below and behind.
                2. The clips compared with a ski school demonstration of the same turn.
                3. One main fault named, such as sitting back or rotating the shoulders.
                4. A follow-up clip filmed after a day of working on it.
              priority: low
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "Before and after clips show one named fault and the change made after a day of practice."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Ask a friend to film two runs from below and behind"
                - "Find a ski school demonstration of the same turn"
                - "Name the one fault that stands out most"
                - "Film a follow-up run after a day of work on it"
            - name: Departure fortnight countdown
              description: |-
                ## Purpose
                The last two weeks before a ski trip are when lost goggles, an expired helmet, a forgotten hire booking or a missing insurance document turn up. Working down a checklist on a fixed timetable, with the kit bag checked, documents together and training tapered, means you arrive with everything and with fresh legs.

                ## Milestones
                1. A checklist of kit, documents, bookings and travel items written.
                2. Kit laid out and checked a week before, leaving time to buy what is missing.
                3. Bags weighed against the airline's ski allowance or the car's space.
                4. Training tapered over the final five days.
                5. Booking confirmations, insurance and travel documents in one folder.

                ## Notes
                Start from the **Operational checklist** template. If you fly, pack boots, helmet and goggles in hand luggage: lost skis can be hired, broken-in boots cannot.
              priority: high
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "Every item on the departure checklist is ticked off two days before travel, with documents in one folder and bags within allowance."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Write the departure checklist from the operational checklist template"
                - "Lay out all kit a week before travel and list what is missing"
                - "Weigh the bags against the airline's ski allowance"
                - "Put confirmations, insurance and travel documents in one folder"
            - name: First morning back on snow plan
              description: |-
                ## Purpose
                Day one is when legs are fresh, ambition is high and the body has forgotten the movement. Planning it, with easy runs to warm up, a lesson or a set of drills in the late morning and an early finish, sets up the whole week and avoids the day-two stiffness that spoils day three.

                ## Milestones
                1. Kit collected and boots fitted the evening before.
                2. The first hour spent on easy runs relearning balance and stopping.
                3. A lesson or set of drills done in the late morning.
                4. Skiing finished by mid afternoon with legs still fresh.
              priority: medium
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "Day one finishes by mid afternoon after easy warm-up runs and a lesson or drills, with no runs beyond your comfort level."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Collect hire kit and fit boots the evening you arrive"
                - "Choose three easy runs for the first hour"
                - "Book a late morning lesson or plan two drills"
                - "Set a finishing time for day one and tell the group"
            - name: End-of-week ski school level test
              description: |-
                ## Purpose
                Plenty of ski schools end a lesson week with a short test or badge, and preparing for it gives the week a clear target. Knowing on day one what the level above yours asks for, and practising those exact elements, turns the test into proof of progress you can take into next year's booking.

                ## Milestones
                1. The criteria for the level or badge above yours obtained from the school.
                2. Each element practised during the week with instructor feedback.
                3. The test taken on the last lesson day.
                4. The result and the instructor's comments recorded for next season.
              priority: low
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "The end-of-week test is taken and the result and instructor comments are recorded in the ski log."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Ask the school what the test for the level above yours includes"
                - "Practise each test element during the week"
                - "Ask your instructor which element needs most work"
                - "Write the result and comments in your ski log"
            - name: Indoor snow taster before a first trip
              description: |-
                ## Purpose
                Paying for a ski week only to find you dislike it, or spending three days learning to stand up, is an expensive way to start. A taster lesson at an indoor snow centre before the trip covers boots, stopping and first turns, so the holiday starts on day two of learning.

                ## Milestones
                1. A beginner lesson at an indoor snow centre or dry slope booked.
                2. Basic stopping and gentle turns achieved on the beginner area.
                3. The choice between skiing and snowboarding confirmed for the trip.
                4. A second session booked if the first left you unsure.
              priority: medium
              deadlineOffsetDays: 50
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "At least one beginner lesson on indoor or dry slope snow is completed before the trip, and the choice of ski or board is confirmed."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Find a beginner taster lesson at the nearest indoor snow centre"
                - "Book the lesson at least a month before the trip"
                - "Decide after the taster whether to ski or snowboard"
                - "Book a second session if stopping still felt shaky"
            - name: Post-trip debrief and next season plan
              description: |-
                ## Purpose
                In the week after a trip you remember exactly what held you back; by autumn it has gone. A short debrief within a week of coming home, covering what improved, what hurt, what kit failed and what to book differently, sets up next season's training and bookings.

                ## Milestones
                1. Three things that improved and two that held you back written down.
                2. Any aches or injuries noted, and those still present after two weeks taken to a professional.
                3. Kit that failed, pinched or was missing listed.
                4. One goal and one booking change for next season decided.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A debrief written within a week of returning lists improvements, problems, kit issues and next season's goal."
                cadence: one-shot
                effort_hours_estimate: "1"
              tasks:
                - "Write three things that went well and two that held you back"
                - "List any aches still present and book a check if needed"
                - "Note kit that failed or was missing"
                - "Choose one goal for next season and add it to your trip brief"
            - name: First week on snow as an adult beginner
              description: |-
                ## Purpose
                Adult beginners learn quickly but fear falling more than children do, and a badly planned first week ends in frustration. A plan built on morning lessons every day, short afternoons on the nursery slope, a realistic goal such as a green run top to bottom, and a break midweek gives a first week you will want to repeat.

                ## Milestones
                1. Lessons booked every morning of the week with a beginner group or instructor.
                2. A realistic goal written, such as a green run top to bottom with controlled stops.
                3. Afternoons kept short and on the beginner area for the first three days.
                4. The goal reached, or the reason it was not noted for next time.
              priority: medium
              frontmatter:
                mode: building
                output_kind: knowledge
                success_criteria: "A full green run is completed with controlled stops by the last day, after daily morning lessons."
                cadence: phased
                effort_hours_estimate: "30"
              tasks:
                - "Book daily morning beginner lessons for the whole week"
                - "Write a realistic goal for the last day"
                - "Plan short afternoons on the nursery slope for the first three days"
                - "Record at the end of the week whether the goal was reached"
            - name: Returning to the slopes after years away
              description: |-
                ## Purpose
                Coming back after five or ten years means older muscles, different equipment and pistes that feel steeper than you remember. A gentle return, with a refresher lesson on day one, modern hire skis and two or three days to rebuild, avoids the classic accident of skiing as you used to on legs you no longer have.

                ## Milestones
                1. Fitness rebuilt for at least six weeks before travel.
                2. A refresher lesson booked for the first morning.
                3. Modern shaped skis or a current board hired instead of old kit.
                4. Harder runs left until day three, after confidence returns.

                ## Notes
                Equipment has changed a lot. Skis are shorter and shaped for easier turning, so old technique habits may need updating.
              priority: medium
              frontmatter:
                mode: building
                output_kind: knowledge
                success_criteria: "Six weeks of conditioning and a first-day refresher lesson are completed, with harder runs saved until day three."
                cadence: phased
                effort_hours_estimate: "12"
              tasks:
                - "Start leg conditioning at least six weeks before the trip"
                - "Book a refresher lesson for the first morning"
                - "Hire current skis instead of using the old pair in the loft"
                - "Plan to stay on blues until day three"
            - name: Family ski trip with young children
              description: |-
                ## Purpose
                Skiing with children under ten means ski school, kit hire, childcare, nap times and carrying everything to the lift, and the adults can easily end up not skiing at all. Planning ski school slots, kit fitting, warm clothing and adult ski time in advance keeps the week fun for everyone.

                ## Milestones
                1. A resort chosen with a good children's ski school and a short walk from lodging to lifts.
                2. Children's lessons and any childcare booked, with ages and levels sent ahead.
                3. Children's helmets, goggles, gloves and boots checked for fit.
                4. A daily plan written with ski school times, adult ski slots and a hot drink break.
                5. A backup plan for bad weather or a tired child written down.

                ## Notes
                Children get cold faster than adults. Mittens, a neck tube and spare socks matter more than another layer.
              priority: medium
              frontmatter:
                mode: service
                output_kind: deliverable
                success_criteria: "Children's lessons, kit and a daily plan with adult ski time are booked and written before departure."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "Shortlist resorts with ski school close to the accommodation"
                - "Book children's lessons and send ages and levels ahead"
                - "Check the children's helmets, goggles and boots still fit"
                - "Write a daily plan with ski school times and adult ski slots"
            - name: Skiing in later life or with a past knee injury
              description: |-
                ## Purpose
                Plenty of people ski well into their seventies, but thinner bones, a replaced joint or a knee that has had ligament surgery change the risk. Discussing your plans with your clinician or physiotherapist, preparing for longer, and adapting the week to shorter days and softer snow keeps you on the mountain for more seasons.

                ## Milestones
                1. Plans discussed with your clinician or physiotherapist, and their advice recorded.
                2. A longer conditioning period, often ten to twelve weeks, completed with their input.
                3. Days shortened and planned around softer snow in the late morning.
                4. Bindings and boots checked by a fitter who has been told about any joint history.

                ## Notes
                Give the binding technician your age and history and let them set the release; do not adjust it yourself.
              priority: medium
              frontmatter:
                mode: building
                output_kind: knowledge
                success_criteria: "Clinician or physiotherapist advice is recorded, ten weeks of conditioning are complete and the week is planned around shorter days."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Book a review with your clinician or physiotherapist before the trip"
                - "Write down any limits or advice they give"
                - "Start conditioning ten to twelve weeks before departure"
                - "Tell the bootfitter and binding technician about your joint history"
            - name: Organising a group ski trip for mixed abilities
              description: |-
                ## Purpose
                The person who books the chalet ends up as travel agent, ski guide and treasurer for a group ranging from first-timers to experts. Settling budget, levels, a resort that suits both ends and how the money is collected before anyone pays a deposit stops the trip unravelling.

                ## Milestones
                1. A group brief agreed: dates, budget range, levels and who wants lessons.
                2. A resort picked with nursery slopes near the village and challenging runs above.
                3. Deposits collected and a payment schedule shared.
                4. Lessons for beginners arranged, with a daily lunch meeting point agreed.
                5. A shared document with bookings, costs and emergency numbers sent to everyone.

                ## Notes
                Start from the **Trip** template. Decide early whether experienced skiers will ski with beginners at all; most groups do better with mornings apart and a shared lunch.
              priority: medium
              deadlineOffsetDays: 90
              frontmatter:
                mode: service
                output_kind: deliverable
                success_criteria: "Every member of the group has paid a deposit and received a shared document with bookings, costs, lesson plans and emergency numbers."
                cadence: phased
                effort_hours_estimate: "12"
              tasks:
                - "Send the group a short survey on dates, budget and levels"
                - "Shortlist resorts with nursery slopes near the village"
                - "Set a deposit deadline and a payment schedule"
                - "Ask the agent to draft the shared trip document from the bookings"
            - name: Self-drive ski trip with winter tyres and chains
              description: |-
                ## Purpose
                Driving to the mountains gives freedom and saves luggage fees, but many countries have legal winter equipment rules on mountain roads and snow can close passes at short notice. Checking the rules, fitting or carrying the right kit and practising fitting chains on a dry driveway before the trip avoids a cold roadside lesson.

                ## Milestones
                1. Winter equipment rules for each country on the route checked.
                2. Winter tyres fitted, or snow chains or socks bought for the car's tyre size.
                3. Chains fitted once at home in daylight, and timed.
                4. A winter car kit packed: scraper, blanket, shovel, torch and food.
                5. Roof box or ski rack fitted and the car's new height noted for car parks.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Winter tyres or chains for the car's tyre size are ready, chains have been test fitted once, and a winter car kit is packed."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Check the winter equipment rules for every country on the route"
                - "Buy chains or snow socks in the car's tyre size"
                - "Practise fitting the chains in the driveway and time it"
                - "Pack a scraper, blanket, shovel and torch in the boot"
            - name: Off-piste readiness with an avalanche course and guide
              description: |-
                ## Purpose
                Untracked snow beyond the markers is where most avalanche deaths among skiers and riders happen, often within sight of the lifts. An avalanche awareness course, a transceiver, shovel and probe you know how to use, and a qualified mountain guide are the minimum before leaving the piste.

                ## Milestones
                1. An avalanche awareness course completed, covering the danger scale and terrain choices.
                2. Transceiver, shovel and probe owned or hired, with a companion search practised.
                3. The local avalanche bulletin read each morning before deciding where to go.
                4. A qualified mountain guide booked for off-piste days.
                5. Insurance confirmed to cover off-piste skiing with a guide.

                ## Notes
                Ski patrol does not patrol off-piste. Never go alone, and treat the guide's decision to turn back as final.
              priority: high
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "An avalanche course is completed, a companion transceiver search is done in under five minutes, and a guide is booked before any off-piste day."
                cadence: phased
                effort_hours_estimate: "20"
              tasks:
                - "Book an avalanche awareness course before the season"
                - "Hire or buy a transceiver, shovel and probe"
                - "Practise a buried transceiver search with your partners until it takes under five minutes"
                - "Book a qualified mountain guide for any off-piste day"
            - name: Ski touring first season
              description: |-
                ## Purpose
                Touring, climbing uphill on skins and skiing back down, asks for very different fitness and kit from resort skiing. A first season built on guided tours, rented touring kit, uphill fitness and the avalanche skills from your course gives a safe introduction before you go anywhere on your own.

                ## Milestones
                1. Touring kit hired: skis with touring bindings, skins, boots with a walk mode and a pack.
                2. Uphill fitness built with long hilly hikes carrying a loaded pack.
                3. Kick turns and skin transitions practised on a gentle slope.
                4. Two or more guided tours completed.
                5. A personal list of what to carry on a tour written.
              priority: medium
              frontmatter:
                mode: building
                output_kind: knowledge
                success_criteria: "Two guided ski tours are completed on hired touring kit, with kick turns and skin changes done without help."
                cadence: phased
                effort_hours_estimate: "30"
              tasks:
                - "Find a guiding company running introductory ski tours"
                - "Hire touring skis, skins and walk mode boots for a test day"
                - "Do a long hilly hike with a loaded pack @recurring(weekly:sun)"
                - "Practise kick turns on a gentle slope until they feel steady"
            - name: Terrain park and freestyle progression
              description: |-
                ## Purpose
                Adults can learn small jumps and boxes safely with a clear progression and the right protection, even if the park looks like a place for teenagers. Starting with ollies on the flat, then small rollers, boxes and the smallest jump line, and reading the park's size markings, builds skill without the injuries that come from trying the big line first.

                ## Milestones
                1. Park etiquette and the size markings of features learned.
                2. Ollies and small butters done on flat piste.
                3. Small rollers and a ground-level box ridden cleanly.
                4. The smallest jump line ridden with controlled take-offs and landings.

                ## Notes
                Wear a helmet and wrist or back protection in the park. Look over every feature on a first pass before hitting it.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "The smallest jump line and one box are ridden with clean take-offs and landings, after a look-over pass and with protection on."
                cadence: phased
                effort_hours_estimate: "15"
              tasks:
                - "Read the park's rules and what the size markings mean"
                - "Practise ollies on a flat section of piste"
                - "Ride a ground-level box at walking pace"
                - "Ride past the smallest jump line once before trying it"
            - name: Amateur slalom race or timed course
              description: |-
                ## Purpose
                Plenty of resorts run timed courses, weekly guest races or club slaloms, and racing the clock shows quickly where your line and edging hold up. Entering one gives an objective time to beat and a reason to tighten your turns.

                ## Milestones
                1. A timed course, guest race or club slalom found at the resort or a local club.
                2. Course inspection done by side slipping alongside the gates.
                3. Two timed runs completed and both times recorded.
                4. A second attempt later in the week or season beating the first time.
              priority: low
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "Two timed runs on a gated course are recorded and a later attempt beats the first time."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Ask the ski school or tourist office about timed courses or guest races"
                - "Side slip the course to inspect the line before your run"
                - "Record your times from both runs"
                - "Book a gates session with a coach to cut your time"
            - name: Working a ski season or a first instructor qualification
              description: |-
                ## Purpose
                Some skiers want more than a week a year: a season working in a resort, or the first level of an instructor qualification. Both need planning many months ahead, from job applications and work permits to course dates, prerequisites and costs that can run into thousands.

                ## Milestones
                1. Seasonal job types, recruitment windows and work permit rules for your target country researched.
                2. Instructor qualification levels, prerequisites and course costs compared.
                3. A decision made on a season job, a course, or both.
                4. Applications submitted or a course booked with funding arranged.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A decision on a season job or instructor course is recorded, with applications submitted or a course booked."
                cadence: phased
                effort_hours_estimate: "15"
              tasks:
                - "List the seasonal job types and when recruitment opens"
                - "Check work permit rules for the country you want to work in"
                - "Compare the first instructor qualification levels and their costs"
                - "Ask the agent to summarise the options into a one-page comparison"
---

# Ski & Snowboard Season Prep

This area is for anyone heading to the mountains this winter, from adults booking a first week on snow to strong skiers and riders who want to arrive fit and leave better. It starts with foundations (a trip brief, an honest level, fitness tests, an eight-week conditioning block, boots, hire, insurance, protection, layers and bookings), then the routines that keep legs and kit ready, the skills from lifts and first turns to carving, moguls and powder, a handful of kit and lesson decisions, the dated moments around a trip, versions for beginners, returners, families, older skiers, group organisers and drivers, and finally off-piste, touring, park, racing and working a season.

What repeats is a twice-weekly leg session, a weekly balance routine and long aerobic day, a Sunday check of the conditioning block, a monthly indoor slope session and ski pot transfer, a quarterly retest of the fitness baseline, and yearly checks of insurance, helmet, bindings, servicing, passes and storage. The Training program, Purchase decision, Metrics log, Savings goal, Operational checklist and Trip templates pair with the projects that name them. Installing adds all 50 projects as active, so archive the ones that are not for you yet.
