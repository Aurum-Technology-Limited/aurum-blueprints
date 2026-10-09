---
id: fitness-sport.race-day-fuelling-hydration
name: Race Day Fuelling & Hydration
description: "A sweat rate, a gut that has been trained, products and carry kit chosen on evidence, and a one-page race plan rehearsed in long sessions until carbohydrate, fluid and electrolytes work on race day."
category: personal
version: 1.0.0
tags: [fitness-sport, race-day-fuelling-hydration, athlete, carbohydrate, hydration, electrolytes, gut-training, endurance]
author: Aurum Technology
starter_structure:
  templates:
    - metrics-log
    - training-program
    - weekly-meal-plan
    - purchase-decision
    - operational-checklist
    - trip
  pillars:
    - name: Fitness & Sport
      emoji: "🏋️"
      description: "Training, play and competition: building strength, endurance and skill in a sport or a gym, structuring blocks of work around events, recovering properly, and keeping the sessions honest with a log rather than a feeling."
      pillarFrontmatter:
        review_cadence: monthly
      areas:
        - name: Race Day Fuelling & Hydration
          description: "Planning carbohydrate, fluid and electrolyte strategies for long training sessions and races, and practising them until they work in competition."
          projects:
            - name: Fuelling needs by race length and intensity
              description: |-
                ## Purpose
                A 10K, a half marathon and a five-hour sportive need completely different fuelling, and copying a marathon plan into a shorter race only adds stomach risk. Writing down, for each event you do, how long you will be out there and what published sports nutrition guidance suggests for that duration gives every later decision a starting point. Most guidance moves from almost nothing under an hour, to modest carbohydrate up to two and a half hours, to higher intakes beyond that.

                ## Milestones
                1. Every event you plan to race this year listed with its expected finishing time.
                2. Each event placed in a duration band: under 75 minutes, 75 minutes to two and a half hours, or longer.
                3. The carbohydrate and fluid ranges from one reputable sports nutrition source noted against each band.
                4. The source and date of the guidance written at the top of the page.

                ## Notes
                Expected time matters more than distance: a four and a half hour marathoner needs a different plan from a sub three hour runner on the same course.
              priority: high
              deadlineOffsetDays: 14
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A one-page table lists every planned event with its expected duration band and the guidance ranges that apply, with the source named."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "List every event you plan to race in the next twelve months"
                - "Estimate a realistic finishing time for each event"
                - "Find one reputable sports nutrition position statement on endurance fuelling"
                - "Note the carbohydrate and fluid ranges for each duration band beside your events"
            - name: Sweat rate test on a typical long session
              description: |-
                ## Purpose
                Sweat losses vary from under half a litre to over two litres an hour between athletes, so a drinking target borrowed from a friend or a bottle label can be badly wrong in either direction. Weighing yourself naked before and after a steady hour, and counting what you drank, gives your own figure for about ten minutes of extra effort.

                ## Milestones
                1. Naked body weight recorded immediately before and after a steady 60 minute session.
                2. Fluid drunk during the session measured, and any toilet stop noted.
                3. Sweat rate in litres per hour calculated, with the temperature and humidity recorded.
                4. The result entered at the top of the fuelling log.

                ## Notes
                Sweat rate is weight lost plus fluid drunk, divided by hours. One kilogram lost is roughly one litre of sweat. Use the same scales every time.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A sweat rate in litres per hour, with the conditions it was measured in, is written in the fuelling log."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Check your bathroom scales read consistently across three weighings"
                - "Weigh yourself naked before a steady one-hour run or ride"
                - "Measure every drink taken during the session"
                - "Towel dry, weigh again and calculate litres lost per hour"
            - name: Salty sweater clues from training
              description: |-
                ## Purpose
                White crusts on a cap or kit, salt stinging the eyes and cramps late in hot sessions are common signs that you lose more sodium than average. Gathering those clues over a few weeks tells you whether sodium deserves a place in the race plan and what to ask a dietitian, before you start adding electrolyte tablets on a guess.

                ## Milestones
                1. Four long sessions checked for salt marks on kit, skin and cap.
                2. Cramping, headaches and cravings for salty food after sessions recorded.
                3. A short summary written: likely salty sweater, unclear or unlikely.
                4. Questions about sodium needs listed for a dietitian or clinician.

                ## Notes
                Cramp has many causes, and salt is only one of them. Treat the clues as a reason to ask, not a diagnosis.
              priority: medium
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "Notes from four long sessions and a one-line summary of your likely sodium loss are in the fuelling log."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Wear a dark cap or top on your next long session"
                - "Photograph any white salt marks after the session"
                - "Note cramp, headache or salt cravings after four long sessions"
                - "Write the questions about sodium you want a professional to answer"
            - name: On-course nutrition audit for your target race
              description: |-
                ## Purpose
                Race organisers publish which drink, which gels and which water are served at which aid stations, and that list decides whether you train with their products or carry your own. Finding it now, rather than in the race pack two days before, gives you months to test the exact flavours in training.

                ## Milestones
                1. Aid station locations noted by kilometre or mile.
                2. Brand and flavour of the on-course drink and gels written down.
                3. Cup, bottle or refill format at each station recorded.
                4. Rules on outside support and litter zones noted.
                5. The on-course products bought or ordered for training.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A list of every aid station with its distance, products and format is saved, and the on-course products are in the house for training."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Find the aid station and nutrition page on the race website"
                - "Email the organiser if the brand of drink or gel is not listed"
                - "Write each station's distance and products in a simple table"
                - "Order a box of the on-course gel and drink mix to test"
            - name: Gut history and trigger food inventory
              description: |-
                ## Purpose
                Stomach cramps, nausea and urgent toilet stops are among the commonest reasons endurance athletes slow down or stop, and they usually have a history. Writing down every time your gut has failed in training or racing, with what you ate in the previous 24 hours, often shows a pattern such as high-fibre dinners, one particular gel or racing on too little sleep.

                ## Milestones
                1. Every remembered gut problem in training or racing listed with date and session type.
                2. Food and drink in the 24 hours before each episode recalled as far as possible.
                3. Foods suspected of causing trouble marked.
                4. Two or three patterns written as hypotheses to test.

                ## Notes
                Persistent pain, blood, weight loss or symptoms outside exercise need a doctor, not a training experiment.
              priority: medium
              frontmatter:
                mode: building
                output_kind: knowledge
                success_criteria: "A list of past gut episodes with suspected triggers and at least two testable hypotheses is saved in the fuelling log."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "List every gut problem you remember from training or races"
                - "Recall what you ate and drank the day before each one"
                - "Mark the foods and products that appear more than once"
                - "Write two hypotheses you will test in long sessions"
            - name: Medical check before changing race fuelling
              description: |-
                ## Purpose
                Diabetes, kidney or heart conditions, blood pressure medicines, diuretics, a history of eating disorders and some gut conditions all change what is safe to drink and eat during long efforts. A short appointment with your doctor before you raise carbohydrate, add electrolytes or use caffeine means the plan is built on what your body can safely handle.

                ## Milestones
                1. Your current medicines and conditions listed on one page.
                2. The planned changes to carbohydrate, fluid, sodium and caffeine summarised.
                3. Your doctor's view recorded, including anything to avoid.
                4. Any referral to a dietitian or specialist booked.

                ## Notes
                If none of this applies to you, a dated note saying so is still a useful record.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "Your doctor has reviewed the planned fuelling changes against your conditions and medicines, and their conclusion is written in the log."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "List every medicine and supplement you take with its purpose"
                - "Write a short summary of the fuelling changes you plan to try"
                - "Book an appointment to go through the summary with your doctor"
                - "Record any limits your doctor sets in the fuelling log"
                - "Recheck the fuelling plan with your doctor at each annual review @recurring(yearly)"
            - name: Fuelling and hydration session log
              description: |-
                ## Purpose
                Memory of how a gel sat at kilometre 28 fades within days, and without a record every long session teaches you nothing. A log with one row per session over 90 minutes, holding what you took, when, the conditions and how your gut and energy felt, turns trial and error into evidence.

                ## Milestones
                1. A log with columns for date, session, duration, temperature, carbohydrate, fluid, sodium, caffeine, gut score and energy score.
                2. Sweat rate and any medical limits written at the top.
                3. At least four weeks of long sessions entered.
                4. Carbohydrate per hour calculated for each row.

                ## Notes
                Start from the **Metrics log** template. Score gut comfort and energy from 1 to 5 so rows can be compared.
              priority: high
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "The log holds at least four weeks of long sessions with carbohydrate per hour and gut scores filled in."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Create a fuelling log from the metrics log template"
                - "Add columns for carbohydrate, fluid, sodium, caffeine and gut score"
                - "Enter your last three long sessions from memory and watch data"
                - "Enter the week's sessions over 90 minutes in the log @recurring(weekly:sun)"
            - name: Pre-race breakfast trial and timing
              description: |-
                ## Purpose
                Whatever you eat two to four hours before the start is the fuel you begin with, and race morning is the worst time to discover a breakfast that sits badly. Testing two or three low-fibre breakfasts before early long sessions settles what you eat, how much and how long before the gun.

                ## Milestones
                1. Two or three breakfast options chosen, each easy to find or carry when travelling.
                2. Each option tested before at least one long session, with timing recorded.
                3. One breakfast and one backup chosen with quantities written down.
                4. The chosen timing matched to your target race start time.
              priority: medium
              deadlineOffsetDays: 42
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "One tested breakfast and one backup, with quantities and timing before the start, are written into the race plan."
                cadence: phased
                effort_hours_estimate: "3"
              tasks:
                - "Pick three low-fibre breakfasts you could eat in a hotel or at home"
                - "Eat the first option three hours before your next long session"
                - "Score how each breakfast felt by the end of the session"
                - "Write the winning breakfast, quantity and timing into the race plan"
            - name: Refill points map for long training routes
              description: |-
                ## Purpose
                Long runs and rides go wrong when you carry too little because you do not know where to refill, or too much because you are guessing. Marking water fountains, cafes, petrol stations and shops on your regular long routes lets you train at race-like intake without a heavy vest.

                ## Milestones
                1. Your three most used long routes saved in a mapping app.
                2. Refill points on each route marked with opening hours.
                3. Distances between refills compared with your sweat rate.
                4. A plan for which bottles or flasks to carry on each route.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Three long routes each have marked refill points and a carry plan based on your sweat rate."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Save your three most used long routes in your mapping app"
                - "Mark fountains, cafes and shops on each route"
                - "Note how far apart the refill points are"
                - "Check refill points are still open at the start of each season @recurring(quarterly)"
            - name: One-page race fuelling plan, version one
              description: |-
                ## Purpose
                Everything you learn is useless on race day unless it fits on a single page you can read when tired. Drafting version one now, even with gaps, shows which numbers you still need to test and gives every long session a plan to rehearse.

                ## Milestones
                1. A page with pre-race meal, start-line fuel, intake per hour, fluid per hour, sodium approach and caffeine approach.
                2. Every number linked to a log entry or marked as untested.
                3. Fallback options written for nausea, dropped gels and missed aid stations.
                4. A printed or phone copy kept with your race kit.

                ## Notes
                Keep it to one page. Plans that need scrolling are not read at kilometre 30.
              priority: high
              deadlineOffsetDays: 45
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A one-page race fuelling plan exists with every figure marked tested or untested and a fallback for nausea and missed aid stations."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Write the six headings of the plan on one page"
                - "Fill in each heading from your log, marking untested numbers"
                - "Add what you will do if you feel sick or drop your fuel"
                - "Revise the race plan after each training block @recurring(quarterly)"
            - name: Weekly long-session fuelling rehearsal
              description: |-
                ## Purpose
                The gut adapts to what it is given regularly, and race-day fuelling only works if it has been practised dozens of times rather than twice. Treating the weekly long session as a fuelling rehearsal, with the same products, timing and carry system as the race, builds both tolerance and the habit of eating before you feel hungry.

                ## Milestones
                1. Race products and timings used in every long session for a full training block.
                2. A gut and energy score recorded after each rehearsal.
                3. Any product that failed twice replaced in the plan.
                4. Timed or distance fuel alerts set on your watch.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "At least eight consecutive long sessions follow the current race plan, each with a gut and energy score logged."
                cadence: rolling
              tasks:
                - "Set a repeating fuel alert on your watch to match the plan"
                - "Lay out the long session fuel the night before"
                - "Fuel the long session exactly as the current race plan says @recurring(weekly:sat)"
                - "Score gut comfort and energy from 1 to 5 after the long session @recurring(weekly:sat)"
            - name: Seasonal sweat rate table
              description: |-
                ## Purpose
                A sweat rate measured in a cool spring week can be half the figure in July, and the race may fall in either. Repeating the test each season builds a small table of litres per hour against temperature, so the plan for any race day can be adjusted to the forecast.

                ## Milestones
                1. Sweat rate tests completed in at least three different temperature ranges.
                2. Results recorded in a table of temperature, humidity, intensity and litres per hour.
                3. A rough rule written for adjusting fluid when the race forecast changes.

                ## Notes
                Start from the **Metrics log** template, or add a tab to your fuelling log.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: artifact
                success_criteria: "A table holds sweat rates from at least three temperature ranges with a written adjustment rule for race forecasts."
                cadence: cyclic
              tasks:
                - "Add a sweat rate tab with temperature and humidity columns"
                - "Repeat the sweat rate test on a steady session each season @recurring(quarterly)"
                - "Write a rule for how your fluid target changes as temperature rises"
                - "Compare this year's figures with last year's at the same time of year"
            - name: Fuel cupboard stock and expiry rotation
              description: |-
                ## Purpose
                Running out of your one tested gel the week before a race, or finding a box out of date, forces an untested swap at the worst moment. A small dedicated shelf with a minimum stock level and a monthly check means race fuel is always there and always in date.

                ## Milestones
                1. All gels, chews, drink mixes and electrolytes kept in one place.
                2. A minimum stock level set for each product.
                3. Expiry dates written on the front of each box.
                4. Older stock used first in training.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "The fuel shelf holds at least the minimum stock of every product in the race plan, with nothing past its date."
                cadence: rolling
              tasks:
                - "Gather every gel, chew, drink mix and electrolyte onto one shelf"
                - "Set a minimum stock level for each product"
                - "Check stock and expiry dates and reorder anything low @recurring(monthly:12)"
                - "Move older stock to the front for training use"
            - name: Bottle, bladder and soft flask hygiene
              description: |-
                ## Purpose
                Sugary drink left in a bottle or hydration bladder grows mould within days, and stomach upsets from dirty kit are easily blamed on the gel instead. A quick wash and dry routine after every session, and replacing worn parts once a year, removes a cause of gut trouble that has nothing to do with fuelling.

                ## Milestones
                1. A drying rack or hook where bottles and bladders air-dry open.
                2. Cleaning tablets or a brush set for bladder tubes in the cupboard.
                3. Every bottle and flask washed after use.
                4. Cracked bottles and chewed bite valves replaced.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every bottle, bladder and flask is washed and dried after use, and none in use shows mould or cracks."
                cadence: rolling
              tasks:
                - "Buy a long brush that fits bladder tubes and bottle necks"
                - "Set up a hook or rack to dry bladders open"
                - "Deep clean all bottles, bladders and flasks @recurring(weekly:mon)"
                - "Replace cracked bottles and worn bite valves @recurring(yearly)"
            - name: Refuelling after long and double sessions
              description: |-
                ## Purpose
                When a long session is followed by training the next day, or two sessions fall on one day, the first food afterwards decides how the next session feels. Having a snack and drink packed before you leave, rather than hunting for food when tired, makes refuelling automatic.

                ## Milestones
                1. Three recovery snacks chosen that combine carbohydrate and protein and travel well.
                2. A recovery snack and drink packed before every long session.
                3. A full meal eaten within a couple of hours of long sessions.
                4. Next-day energy noted in the log after back-to-back days.

                ## Notes
                Daily diet and body composition belong elsewhere; this project is only the food that bridges two hard sessions.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Recovery food is eaten within the first hour after at least four of every five long sessions for a month, recorded in the log."
                cadence: rolling
              tasks:
                - "List three recovery snacks you like that survive a hot car"
                - "Pack a recovery snack and drink before each long session @recurring(weekly:fri)"
                - "Note next-day energy after back-to-back training days"
                - "Ask a dietitian what portion sizes suit your training load"
            - name: Hydration check on key session mornings
              description: |-
                ## Purpose
                Starting a long session already dry means chasing fluid all session, while drinking litres beforehand only sends you to the toilet. A two-minute check of urine colour and morning weight on key session days shows whether you are starting in your normal state, using your own baseline rather than a rule.

                ## Milestones
                1. A normal morning weight range found from two weeks of readings.
                2. A urine colour chart printed and kept in the bathroom.
                3. Key session mornings checked and the result logged.
                4. A note of what you do when a check is off.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Morning weight and urine colour are recorded on at least eight key session mornings, with your baseline range written in the log."
                cadence: rolling
              tasks:
                - "Weigh yourself after the toilet for 14 mornings to find your range"
                - "Print a urine colour chart for the bathroom"
                - "Check urine colour and weight on key session mornings @recurring(weekly:tue,sat)"
                - "Write what you will do if a morning check is off"
            - name: Monthly fuelling log review
              description: |-
                ## Purpose
                Patterns hide in single entries: the gel that only fails above 20 degrees, or the energy dip every time breakfast was rushed. Half an hour at the end of each month reading the rows together turns a diary into decisions about what to keep, change or test next.

                ## Milestones
                1. Average carbohydrate and fluid per hour calculated for the month.
                2. The best and worst sessions compared side by side.
                3. One change to the race plan, or to the next test, decided.
                4. The decision written at the top of the next month's log.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: decision
                success_criteria: "Each month ends with averages calculated and one written decision about the plan or the next test."
                cadence: rolling
              tasks:
                - "Block 30 minutes in the last week of the month for the review"
                - "Ask the agent to calculate monthly averages and outliers from the log"
                - "Review the month's fuelling log and decide one change @recurring(monthly:28)"
                - "Carry the decision into the next month's first long session"
            - name: Hot weather long-session routine
              description: |-
                ## Purpose
                Above about 25 degrees sweat losses climb, the gut tolerates less and heat illness becomes a real risk. A written hot weather routine covering start times, extra fluid and sodium within limits agreed with a professional, and when to cut a session short, removes the guesswork on the first hot weekend.

                ## Milestones
                1. Your sweat rate in warm conditions known from the seasonal table.
                2. Start times, shaded routes and refill points chosen for hot days.
                3. Extra fluid and sodium amounts agreed with a professional and written down.
                4. A stop rule written for dizziness, confusion, chills or stopping sweating.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A one-page hot weather routine with start times, fluid amounts and a written stop rule is in the log before the first hot month."
                cadence: cyclic
              tasks:
                - "Write the temperature at which your hot weather routine starts"
                - "Choose shaded routes with refill points for hot days"
                - "Write a stop rule for heat illness symptoms"
                - "Review the hot weather routine before each summer @recurring(yearly)"
            - name: Cold weather fuel and drinking plan
              description: |-
                ## Purpose
                In cold weather thirst fades, gels stiffen and bottle valves freeze, so many athletes drink and eat far less than planned without noticing. A short plan for keeping fuel soft and fluids liquid, and for prompting yourself to drink, keeps winter long sessions useful as rehearsals.

                ## Milestones
                1. Gels and chews tested after an hour in a cold outer pocket.
                2. An insulated bottle or inside-layer carry chosen.
                3. Winter drink prompts set by time or distance.
                4. Winter intake compared with summer intake in the log.
              priority: low
              frontmatter:
                mode: building
                output_kind: knowledge
                success_criteria: "A winter carry and prompt plan is written and at least four cold sessions are logged with intake close to plan."
                cadence: cyclic
              tasks:
                - "Test how your gels handle an hour in a cold outer pocket"
                - "Choose an insulated bottle or an inside pocket for fluids"
                - "Add winter drink prompts to your long-session watch screen"
                - "Review the cold weather plan before each winter @recurring(yearly)"
            - name: Gut training block for higher carbohydrate intake
              description: |-
                ## Purpose
                If your race needs more carbohydrate per hour than you currently tolerate, the gut can be trained to absorb more, but only gradually over several weeks. A structured block, raising intake in small steps across long sessions while scoring symptoms, gets you to the race target without a crisis on race day.

                ## Milestones
                1. Current comfortable intake per hour confirmed from the log.
                2. A target intake for the race agreed, ideally with a dietitian.
                3. A six to eight week progression written in small steps.
                4. The target intake reached in at least two long sessions with gut scores of 4 or 5.
                5. Any step that caused symptoms repeated before moving on.

                ## Notes
                Start from the **Training program** template and write each week's intake as the session target. Stop and seek advice if symptoms persist between sessions.
              priority: medium
              deadlineOffsetDays: 84
              frontmatter:
                mode: learning
                output_kind: habit
                success_criteria: "The race target intake per hour has been reached in two long sessions with gut scores of 4 or higher, recorded in the log."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "Find your highest comfortable intake per hour in the log"
                - "Agree a target race intake with a dietitian or from your guidance source"
                - "Write a six to eight week progression in small steps"
                - "Raise intake by one step only after two comfortable sessions"
            - name: Reading the labels on gels and drink mixes
              description: |-
                ## Purpose
                Two gels that look alike can differ threefold in carbohydrate, and some hide caffeine, sweeteners or very little sodium. Learning to read a label for carbohydrate per serving, sugar types, sodium, caffeine and serving size lets you compare products properly and work out what an hour of fuelling really contains.

                ## Milestones
                1. Every product on your shelf listed with carbohydrate, sodium and caffeine per serving.
                2. The sugar types in each product noted, such as glucose, maltodextrin and fructose.
                3. Products with caffeine or sugar alcohols clearly marked.
                4. A per-hour total worked out for your current plan.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A product table with carbohydrate, sodium, caffeine and sugar types per serving covers every product in the plan."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Photograph the nutrition panel of every product you own"
                - "Copy carbohydrate, sodium and caffeine per serving into a table"
                - "Mark any product that contains caffeine or sugar alcohols"
                - "Total the carbohydrate per hour in your current plan"
            - name: Drinking from cups, bottles and soft flasks on the move
              description: |-
                ## Purpose
                Losing half a cup down your chest at every aid station quietly cuts race intake, and stopping to drink costs time. A few practice sessions of pinching cups, sipping from soft flasks and grabbing bottles at speed make race-day drinking efficient.

                ## Milestones
                1. Cup pinch and sip technique practised on at least three runs.
                2. Soft flask and bottle drinking practised at race pace.
                3. The amount actually swallowed per cup estimated by weighing.
                4. A choice made between walking through aid stations or drinking on the move.
              priority: low
              frontmatter:
                mode: learning
                output_kind: habit
                success_criteria: "The amount you swallow per cup at race pace has been measured and your aid station technique is written into the race plan."
                cadence: phased
                effort_hours_estimate: "3"
              tasks:
                - "Set out a table with paper cups on a short loop"
                - "Practise pinching and sipping cups at race pace"
                - "Weigh a cup before and after to see how much you swallow"
                - "Practise one cup grab at the end of a long run @recurring(monthly:15)"
            - name: Carbohydrate loading for race week
              description: |-
                ## Purpose
                For races beyond roughly 90 minutes, eating more carbohydrate in the final day or two tops up muscle glycogen, yet many athletes simply eat bigger dinners full of fibre and fat. Learning what loading involves and practising it before a long training session shows how your gut and weight respond before you rely on it.

                ## Milestones
                1. Published guidance on carbohydrate loading for your race length read and summarised.
                2. A loading menu planned for the final two days, lower in fibre and fat.
                3. The menu trialled before one long training session.
                4. Changes from the trial written into the race week plan.

                ## Notes
                Start from the **Weekly meal plan** template for the two loading days. A gain of a kilogram or so on the scales is normal, as glycogen is stored with water.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A two-day loading menu has been trialled before a long session and the result is recorded in the log."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Read one reputable guide to carbohydrate loading for your race length"
                - "Plan two loading days of low-fibre, high-carbohydrate meals"
                - "Trial the menu before your next long session"
                - "Record how you felt and the change in morning weight"
            - name: Caffeine timing trial in training
              description: |-
                ## Purpose
                Caffeine helps many endurance athletes but upsets others' stomachs, sleep or heart rate, and caffeinated gels make it easy to take far more than intended. Testing timing and amount in training, with an upper limit agreed with your doctor if you have any heart or blood pressure condition, decides whether it belongs in the plan at all.

                ## Milestones
                1. Your normal daily caffeine intake recorded.
                2. Any medical reason to limit caffeine checked.
                3. One caffeine timing trialled in three long sessions.
                4. A decision written: caffeine in the plan, when and from which product, or none.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A written decision on race caffeine, based on three logged trials, is in the race plan."
                cadence: phased
                effort_hours_estimate: "3"
              tasks:
                - "Record your usual daily caffeine from coffee, tea and drinks"
                - "Check with your doctor if you have a heart or blood pressure condition"
                - "Trial one caffeine timing in three long sessions"
                - "Write the caffeine decision and product into the race plan"
            - name: Warning signs of hyponatraemia and heat illness
              description: |-
                ## Purpose
                Drinking far more than you sweat can dilute blood sodium dangerously, and the early signs such as bloating, headache, nausea and confusion look like dehydration. Knowing the warning signs of both over-drinking and heat illness, and what race medics need to hear, is the safety core of any hydration plan.

                ## Milestones
                1. The signs of hyponatraemia, dehydration and heat illness written from a reputable medical source.
                2. The practical differences between them noted in plain words.
                3. A small card with the signs and what to tell medics kept in race kit.
                4. Training partners or family shown the card.

                ## Notes
                Weight gain during a long event is a red flag for over-drinking. If you feel confused or bloated, seek medical help rather than drinking more.
              priority: high
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A warning signs card from a reputable medical source is in your race kit and your usual training partners have seen it."
                cadence: one-shot
                effort_hours_estimate: "1"
              tasks:
                - "Look up the warning signs of hyponatraemia from a medical source"
                - "Look up heat exhaustion and heatstroke signs from the same source"
                - "Write a pocket card with the signs and what to tell a medic"
                - "Reread the warning signs card with your training partners @recurring(yearly)"
            - name: Real food versus gels comparison
              description: |-
                ## Purpose
                Bananas, rice cakes, potatoes and sweets suit some athletes better than gels, especially in longer or slower events, while others need the speed and portability of gels. Comparing both over matched long sessions answers the question with your own data instead of forum opinion.

                ## Milestones
                1. Two real-food options chosen with carbohydrate per portion worked out.
                2. Each option tested in two long sessions at similar intake per hour.
                3. Gut score, energy and convenience compared with gel sessions.
                4. A decision on the mix of real food and gels recorded.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "Four logged sessions compare real food with gels at matched intake and a written mix is in the race plan."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Choose two real foods and weigh one portion of each"
                - "Work out the carbohydrate in each portion from the label or a food database"
                - "Test each food in two long sessions at your planned intake"
                - "Compare scores with your gel sessions and record a decision"
            - name: Fuelling races under 75 minutes
              description: |-
                ## Purpose
                For a 10K, a parkrun-style time trial or a short criterium, eating during the race rarely helps and can bring on a stitch, but the meal beforehand and a carbohydrate mouth rinse may. Learning the short-race approach stops you carrying a marathon habit into races where it only adds weight and risk.

                ## Milestones
                1. Guidance on fuelling for events under 75 minutes read and noted.
                2. A pre-race meal and timing chosen for short races.
                3. A mouth rinse or small sips approach trialled in one hard session.
                4. A short-race fuelling line added to the race plan.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A tested short-race approach, covering meal timing and in-race drinks, is written as its own line in the race plan."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Read the guidance for fuelling events under 75 minutes"
                - "Choose a pre-race meal and timing for short races"
                - "Trial a sports drink mouth rinse in a hard interval session"
                - "Add a short-race line to your race plan"
            - name: Under-fuelling and low energy availability awareness
              description: |-
                ## Purpose
                Endurance athletes who regularly eat too little for their training can develop low energy availability, which affects hormones, bones, immunity and performance and is often missed for years. Learning the warning signs and checking yourself honestly each quarter means problems reach a doctor early rather than through a stress fracture.

                ## Milestones
                1. The signs of low energy availability read from a reputable sports medicine source.
                2. A short self-check list written into your log.
                3. A first self-check completed honestly.
                4. A doctor or sports dietitian consulted if any sign is present.

                ## Notes
                This is a referral prompt, not a diagnosis. Missed periods, repeated bone stress injuries and constant fatigue are reasons to see a doctor.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A self-check list is in the log and completed each quarter, with any positive sign followed by a booked appointment."
                cadence: rolling
              tasks:
                - "Read a sports medicine summary of low energy availability"
                - "Write a five-question self-check in your log"
                - "Answer the low energy self-check questions honestly @recurring(quarterly)"
                - "Book a doctor's appointment if any answer is a concern"
            - name: Choosing your main gel or chew
              description: |-
                ## Purpose
                Your main gel or chew will be eaten dozens of times in training and every 20 to 30 minutes on race day, so taste, texture, carbohydrate per serving and availability all matter. Testing three candidates against the same criteria ends the habit of buying whatever the shop has.

                ## Milestones
                1. Three products shortlisted on carbohydrate per serving, sugar types and price.
                2. Each tested in at least two long sessions.
                3. Each scored on gut comfort, taste when tired, packaging and availability.
                4. One main product and one backup chosen and stocked.

                ## Notes
                Start from the **Purchase decision** template. Check the product is sold near your race in case you run short.
              priority: medium
              deadlineOffsetDays: 60
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "One main gel or chew and one backup are chosen from three tested products, with scores recorded."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Shortlist three gels or chews using your label table"
                - "Buy a small pack of each to test"
                - "Test each product in two long sessions and score it"
                - "Order a race supply of the winner and a backup"
            - name: Choosing an electrolyte product and strength
              description: |-
                ## Purpose
                Electrolyte tablets, powders and capsules range from almost no sodium to very high amounts, and the right choice depends on your sweat losses, the race length and any medical limits. Comparing a few products against your sweat clues and professional advice avoids both too little and too much salt.

                ## Milestones
                1. Sodium content per serving listed for three products.
                2. Your salty sweater notes and any medical limits reviewed.
                3. A target approach agreed with a dietitian or clinician.
                4. One product chosen and tested in warm long sessions.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "One electrolyte product is chosen within limits agreed with a professional and tested in at least two warm sessions."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "List sodium per serving for three electrolyte products"
                - "Bring your salty sweater notes to a dietitian or clinician"
                - "Test the chosen product in two warm long sessions"
                - "Write the product and timing into the race plan"
            - name: Choosing how to carry race fuel
              description: |-
                ## Purpose
                A plan that needs six gels and a litre of fluid fails if your shorts have one pocket. Deciding between a belt, vest, bike bottles, frame bag or relying on aid stations, and testing the choice on long sessions, makes sure the plan can physically go with you.

                ## Milestones
                1. The fuel and fluid load for the longest gap between aid stations worked out.
                2. Two or three carry options compared on capacity, comfort and access at speed.
                3. The chosen system tested on two long sessions at race pace.
                4. Pocket assignments written: which fuel lives where.

                ## Notes
                Start from the **Purchase decision** template.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A carry system that holds the full load for the longest unsupported gap has been tested on two long sessions."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Work out the fuel and fluid needed for the longest gap between aid stations"
                - "Compare two or three carry options for capacity and access"
                - "Test the chosen system on two race-pace long sessions"
                - "Write which fuel goes in which pocket"
            - name: On-course drink versus carrying your own
              description: |-
                ## Purpose
                Using the race's drink means carrying less but accepting its flavour, strength and cup format, while carrying your own means more weight and refills. Deciding early, from your aid station audit and gut trials, sets what you rehearse for the next few months.

                ## Milestones
                1. The on-course drink tested in at least three long sessions.
                2. Its carbohydrate and sodium compared with your plan.
                3. The weight and refill logistics of carrying your own worked out.
                4. A decision recorded, with the reason.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A written decision to use the on-course drink, carry your own or combine them is in the race plan with the reason."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Mix the on-course drink at the race's stated strength"
                - "Use it in three long sessions and score your gut"
                - "Work out how many refills carrying your own would need"
                - "Record your decision and reason in the race plan"
            - name: Fixing recurring stomach trouble in long sessions
              description: |-
                ## Purpose
                When nausea, cramps or urgency keep returning despite tweaks, a structured fix works better than changing three things at once. Isolating one variable at a time, from pre-session fibre to drink concentration and intensity, usually finds the cause within a few weeks, and anything persistent goes to a doctor.

                ## Milestones
                1. The problem described precisely: what, when and how often.
                2. Likely causes ranked from the gut history and log.
                3. One variable changed per two sessions and the result recorded.
                4. A fix confirmed in three consecutive symptom-free sessions, or a doctor's appointment booked.

                ## Notes
                Seek medical advice promptly for blood, severe pain or symptoms that continue away from exercise.
              priority: medium
              deadlineOffsetDays: 56
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "Three consecutive long sessions without the symptom are logged after a single identified change, or a doctor's appointment is booked."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Write a precise description of the symptom and when it starts"
                - "Rank the likely causes using your gut history"
                - "Change one variable and repeat it for two sessions"
                - "Book a doctor's appointment if symptoms continue after four changes"
            - name: Cost per race hour of your fuel
              description: |-
                ## Purpose
                Branded gels can cost more per hour than the race entry spread over the season, and a year of long sessions adds up. Working out the cost per hour of your plan, and pricing a cheaper training version that uses the same carbohydrate types, keeps practice affordable without changing what your gut is used to.

                ## Milestones
                1. Cost per hour of the race plan calculated.
                2. A cheaper training mix with similar carbohydrate and sugar types priced.
                3. Annual fuel spend estimated from the long sessions in your calendar.
                4. A buying approach chosen: bulk, subscription or branded products for racing only.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "The cost per hour of race fuel and a cheaper training alternative are written down with an annual spend estimate."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Price one hour of your race plan from current receipts"
                - "Price a home-mixed drink with similar carbohydrate types"
                - "Estimate a season's spend from your planned long sessions"
                - "Choose a buying approach and note it in the log"
            - name: A session with a registered sports dietitian
              description: |-
                ## Purpose
                One consultation with a registered sports dietitian can turn months of trial and error into a tailored plan, especially with a medical condition, a history of gut trouble or a goal intake well above what you manage now. Arriving with your log, sweat rate and draft race plan makes the hour far more useful.

                ## Milestones
                1. A registered or accredited sports dietitian found and booked.
                2. Log, sweat rate, product table and race plan sent beforehand.
                3. Questions written in priority order.
                4. Their recommendations added to the race plan with the date.
              priority: medium
              deadlineOffsetDays: 60
              frontmatter:
                mode: research
                output_kind: deliverable
                success_criteria: "A consultation has taken place and its recommendations are written into the race plan with the date."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Search your national register for accredited sports dietitians"
                - "Send your log, sweat rate and draft plan before the session"
                - "List your questions in order of importance"
                - "Book a dietitian follow-up before each major race block @recurring(yearly)"
            - name: Kilometre-by-kilometre fuelling plan for a target race
              description: |-
                ## Purpose
                Generic per-hour plans become race plans only when they are pinned to the course: aid stations, climbs, your pace and the expected weather. Laying out exactly what you take at each point, and where you refill, means race-day decisions are already made.

                ## Milestones
                1. The course split into segments by aid station, with expected arrival times.
                2. Fuel and fluid for each segment written in.
                3. Hills and technical sections marked as places not to eat.
                4. A wrist card or top tube sticker made with the fuel points.
              priority: high
              deadlineOffsetDays: 70
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A segment-by-segment fuel and fluid plan for the target race exists on a card or sticker you will carry."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Download the course map and aid station list"
                - "Estimate arrival times at each station from your goal pace"
                - "Write fuel and fluid for each segment"
                - "Make a wrist card or top tube sticker with the fuel points"
            - name: Dress rehearsal long session at race fuelling
              description: |-
                ## Purpose
                Two to six weeks before the race, one long session at race intensity with the exact breakfast, products, carry system and timing reveals what still breaks. Treating it as a dress rehearsal, down to the start time, leaves enough time to fix it.

                ## Milestones
                1. Session planned at race start time and pace, as close to race conditions as possible.
                2. Race breakfast, products and carry system used exactly.
                3. Intake, sweat loss and gut scores recorded.
                4. Any change made to the plan within a week.
              priority: medium
              deadlineOffsetDays: 75
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A full dress rehearsal is logged with intake, sweat loss and gut scores, and the plan is updated within a week."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Pick a date two to six weeks before the race for the rehearsal"
                - "Set your alarm to match race morning timing"
                - "Weigh before and after and record all intake"
                - "Update the race plan with what the rehearsal showed"
            - name: Race week fuelling countdown
              description: |-
                ## Purpose
                Race week is where carefully practised plans get abandoned for unfamiliar restaurant meals, extra fibre and nervous over-drinking. A day-by-day countdown with meals, shopping, fluid and packing tasks keeps the final week as boring as it should be.

                ## Milestones
                1. Meals for the last five days planned, with loading days marked.
                2. Race fuel counted, packed and checked against the plan.
                3. A plan to drink to thirst, not extra litres, in the last two days written down.
                4. Restaurant or hotel options checked if travelling.
              priority: high
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A completed race week countdown shows every meal eaten as planned and all race fuel packed the day before."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Write a five-day countdown of meals, shopping and packing"
                - "Check restaurants or hotel breakfast times near the venue"
                - "Count race fuel against the plan and add a spare"
                - "Pack the race fuel bag the day before"
            - name: Race morning fuel and fluid checklist
              description: |-
                ## Purpose
                Nerves and early alarms make race morning the easiest time to forget the bottle on the kitchen table or eat breakfast too late. A checklist covering wake-up time, breakfast, last drink, start-line gel and what goes in each pocket removes the thinking.

                ## Milestones
                1. Times written for waking, breakfast, final drink and start-line fuel.
                2. Every item in the race fuel bag listed.
                3. Pocket and bottle assignments written down.
                4. The checklist printed and used on a rehearsal morning first.

                ## Notes
                Start from the **Operational checklist** template.
              priority: medium
              frontmatter:
                mode: event
                output_kind: artifact
                success_criteria: "A printed race morning checklist has been used on at least one rehearsal morning and on race day."
                cadence: one-shot
                effort_hours_estimate: "1"
              tasks:
                - "Start a race morning checklist from the operational checklist template"
                - "Write the times for waking, breakfast and final drink"
                - "List every item in the fuel bag and each pocket"
                - "Use the checklist on your dress rehearsal morning"
            - name: Post-race fuelling debrief
              description: |-
                ## Purpose
                Within a few days of a race, the details of what you took and when are still fresh, and they are the best data you will get all season. A short debrief comparing the plan with what actually happened feeds directly into the next plan.

                ## Milestones
                1. Actual intake reconstructed from wrappers, bottles and memory.
                2. Body weight change, gut scores and energy recorded.
                3. What went to plan and what did not written in three lines each.
                4. Two changes chosen for the next race.
              priority: medium
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A debrief with actual intake against plan and two changes for next time is saved within a week of the race."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Count the empty wrappers and bottles from your race kit"
                - "Write actual intake by segment beside the planned intake"
                - "Note two things that worked and two that did not"
                - "Copy two changes into the race plan for next time"
            - name: Travelling to an overseas race with your fuel
              description: |-
                ## Purpose
                Flying to a race brings liquid limits, customs rules on powders, different tap water and unfamiliar breakfasts. Planning how your fuel travels, what you can buy there and how you will make breakfast keeps your tested plan intact abroad.

                ## Milestones
                1. Airline rules on gels and powders checked for hand and hold luggage.
                2. Race fuel packed with spares split across two bags.
                3. Tap water safety and bottled water options at the destination checked.
                4. A breakfast plan that works in a hotel room.

                ## Notes
                Start from the **Trip** template.
              priority: low
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "All race fuel arrives with you and a tested breakfast is available on race morning abroad."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Check your airline's rules on gels and powders"
                - "Split race fuel and spares between hand and hold luggage"
                - "Check whether tap water is safe to drink at the destination"
                - "Pack a kettle-free breakfast you have already tested"
            - name: Fuelling around the menstrual cycle
              description: |-
                ## Purpose
                Some athletes notice changes in thirst, gut comfort, appetite and perceived effort across the menstrual cycle, and the research is still mixed. Recording cycle day beside each long session for a few months shows whether your own fuelling needs shift, rather than relying on general claims.

                ## Milestones
                1. Cycle day added as a column in the fuelling log.
                2. Three cycles of long sessions recorded.
                3. Any pattern in gut comfort, thirst or energy noted.
                4. Patterns discussed with a doctor or dietitian if they affect racing.

                ## Notes
                Missed or very irregular periods during training are a reason to see a doctor.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Three cycles of long sessions are logged with cycle day, and any pattern found is written down."
                cadence: phased
                effort_hours_estimate: "2"
              tasks:
                - "Add a cycle day column to the fuelling log"
                - "Log cycle day for every long session for three cycles"
                - "Look for patterns in gut comfort, thirst and energy"
                - "Raise any pattern that affects racing with your doctor or dietitian"
            - name: Plant-based race fuelling check
              description: |-
                ## Purpose
                Many gels and chews contain gelatine, honey or other animal ingredients, and some recovery products use whey. Checking every product in your plan against a vegan or vegetarian diet, and finding tested swaps, avoids discovering on race morning that the on-course gel is not one you eat.

                ## Milestones
                1. Every product in the plan checked for animal ingredients.
                2. On-course products checked with the organiser.
                3. Plant-based swaps found and tested in long sessions.
                4. Recovery snacks confirmed as suitable.
              priority: low
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "Every product in the race plan and on the course is confirmed suitable or has a tested plant-based swap."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Check every product label in your plan for animal ingredients"
                - "Ask the organiser about ingredients in on-course products"
                - "Test plant-based swaps in two long sessions"
                - "Update the product table with the swaps"
            - name: Race fuelling with type 1 diabetes and your care team
              description: |-
                ## Purpose
                Athletes with type 1 diabetes race long distances well, but carbohydrate intake, insulin and glucose monitoring all interact during exercise. Building the race fuelling plan with your diabetes team, and rehearsing it alongside your monitor data, makes the plan safe as well as effective.

                ## Milestones
                1. An appointment with your diabetes team focused on endurance events booked.
                2. Glucose data from several long sessions collected alongside fuel logs.
                3. A race plan covering fuel, monitoring and hypo treatment agreed with the team.
                4. Race crew or a training partner briefed on what to do.

                ## Notes
                All insulin and carbohydrate adjustments come from your diabetes team. This project organises the information they need.
              priority: medium
              frontmatter:
                mode: research
                output_kind: deliverable
                success_criteria: "A race plan for fuel, glucose monitoring and hypo treatment has been agreed with your diabetes team and shared with your crew."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Book a diabetes team appointment about endurance racing"
                - "Export glucose data for your last three long sessions"
                - "Bring the fuelling log and glucose data to the appointment"
                - "Brief your crew or race partner on hypo signs and treatment"
            - name: Fuelling for very early and late race starts
              description: |-
                ## Purpose
                An early start at 6 a.m. leaves little time for breakfast to clear, while an evening race means a whole day of meals to get right. Working out the timing for unusual starts and rehearsing it once avoids either racing empty or racing full.

                ## Milestones
                1. Start times of your upcoming races checked.
                2. A meal timeline written for each unusual start.
                3. One rehearsal done at the matching time of day.
                4. The timeline added to the race plan.
              priority: low
              frontmatter:
                mode: building
                output_kind: knowledge
                success_criteria: "Each race with an unusual start time has a tested meal timeline in the race plan."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Check the start time of each race in your calendar"
                - "Write a meal timeline for each early or late start"
                - "Rehearse one timeline with a long session at that time"
                - "Add the tested timeline to the race plan"
            - name: Crew feeding plan for ultra distance events
              description: |-
                ## Purpose
                Beyond six or eight hours, appetite drops, sweet products become hard to face and crew stops become the main fuelling opportunity. A crew sheet listing what to offer at each stop, savoury options and what to watch for helps tired crew feed a tired athlete.

                ## Milestones
                1. Crew stop locations and expected times listed.
                2. Food and drink for each stop packed in labelled bags.
                3. Savoury and sweet options listed for when appetite fades.
                4. Crew briefed on intake targets and warning signs.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A crew sheet with stops, labelled bags and intake targets has been walked through with your crew before the event."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "List crew stops with expected arrival times"
                - "Pack labelled food bags for each stop"
                - "Write a list of savoury fallbacks for when appetite fades"
                - "Walk your crew through the sheet a week before the event"
            - name: Multi-day and stage race fuelling
              description: |-
                ## Purpose
                Stage races and multi-day rides stack fuelling problems: each day starts partly empty, appetite tires of the same gels and sleep is short. Planning daily intake, evening refuelling and menu variety in advance stops day three becoming the day the race falls apart.

                ## Milestones
                1. A daily plan for racing and evening refuelling written for each stage.
                2. At least three different products or flavours planned for variety.
                3. Back-to-back long training days used to test the plan.
                4. Stock for the whole event packed and labelled by day.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A day-by-day fuelling plan has been tested over two back-to-back long training days and stock is packed by day."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Write a daily plan for racing and evening refuelling"
                - "Plan at least three flavours or products for variety"
                - "Test the plan over two back-to-back long training days"
                - "Pack the full event stock labelled by day"
            - name: Deciding whether a lab sweat sodium test is worth it
              description: |-
                ## Purpose
                Commercial sweat tests measure sodium concentration and cost a fair amount, and the result is only useful if it would change your plan. Weighing your salty sweater clues, race lengths and climate against the price decides whether a test is worth booking.

                ## Milestones
                1. Two or three testing options priced.
                2. What each test measures, and its limits, noted.
                3. Your salty sweater notes and race demands reviewed.
                4. A decision recorded: book a test, or rely on training clues and professional advice.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A written decision on whether to book a sweat sodium test is in the log, with the reason and costs."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Find two or three sweat testing services near you"
                - "Note what each test measures and costs"
                - "Review your salty sweater notes and race lengths"
                - "Record your decision and reason in the log"
            - name: Supervised trial of very high carbohydrate intake
              description: |-
                ## Purpose
                Elite and experienced endurance athletes now train to absorb intakes well above the traditional ceiling, using carefully blended carbohydrate sources. Attempting this only makes sense once the basics are solid, and only with a sports dietitian supervising the progression and the products.

                ## Milestones
                1. Current comfortable intake confirmed as stable over a full block.
                2. A sports dietitian agreed to supervise the trial.
                3. A progression and product plan written with them.
                4. The trial completed with gut and energy scores logged, and a decision made on race intake.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A dietitian-supervised trial of higher carbohydrate intake is complete, with a logged decision on race intake."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Confirm your comfortable intake has been stable for a full training block"
                - "Ask your sports dietitian whether a higher-intake trial suits you"
                - "Write the progression and products with the dietitian"
                - "Log every trial session and record the final decision"
            - name: Race fuelling briefing for your club squad
              description: |-
                ## Purpose
                Once your own plan works, the athletes you train with will ask how. Running a short briefing for your club's race squad, sharing the method rather than your personal numbers, spreads the habits that prevent gut failures and over-drinking.

                ## Milestones
                1. A 20 minute briefing outline covering duration bands, sweat rate testing, gut training and warning signs.
                2. A one-page handout pointing to reputable sources.
                3. The briefing delivered before the club's main race.
                4. Questions that need a professional referred to one.
              priority: low
              frontmatter:
                mode: service
                output_kind: deliverable
                success_criteria: "A briefing and handout have been delivered to your club squad before its main race, with sources cited."
                cadence: cyclic
              tasks:
                - "Ask your club captain or coach whether a fuelling briefing would help"
                - "Draft a 20 minute outline and one-page handout"
                - "Point every number in the handout to a reputable source"
                - "Run the fuelling briefing before the club's main race @recurring(yearly)"
---

# Race Day Fuelling & Hydration

This area is for endurance athletes who want race-day carbohydrate, fluid and electrolytes worked out in training rather than guessed on the start line. It opens with the foundations (fuelling needs by race length, a sweat rate, the course's aid stations, gut history, a medical check, a log and a first one-page plan), then the weekly machinery of long-session rehearsals, hydration checks, stock, bottle hygiene and seasonal routines, the skills of gut training, label reading, drinking on the move, carbohydrate loading and recognising warning signs, the product and carry decisions, race-specific plans, rehearsals, race week and debriefs, versions for different bodies, diets and start times, and finally ultra crews, stage races, supervised high-carbohydrate trials and briefing your club.

What repeats is a Saturday fuelling rehearsal with a gut score, a Sunday log entry, Tuesday and Saturday morning hydration checks, a weekly bottle wash, a monthly stock check on the 12th and log review on the 28th, quarterly sweat rate tests and plan revisions, and yearly heat, cold and safety reviews. The Metrics log, Training program, Weekly meal plan, Purchase decision, Operational checklist and Trip templates pair with the projects that name them. Installing adds all 50 projects as active, so archive the ones that are not for you yet.
