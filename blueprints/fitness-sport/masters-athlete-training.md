---
id: fitness-sport.masters-athlete-training
name: Masters Athlete Training (40+)
description: "Training adapted for athletes over 40: health checks first, year-round strength and power, longer recovery, age-graded goals, and age-group racing from a first masters event to world championships."
category: personal
version: 1.0.0
tags: [fitness-sport, masters-athlete-training, athlete, retiree, masters, age-group, strength, recovery]
author: Aurum Technology
starter_structure:
  templates:
    - metrics-log
    - habit-tracker
    - weekly-meal-plan
    - sleep-review
    - purchase-decision
    - training-program
  pillars:
    - name: Fitness & Sport
      emoji: "🏋️"
      description: "Training, play and competition: building strength, endurance and skill in a sport or a gym, structuring blocks of work around events, recovering properly, and keeping the sessions honest with a log rather than a feeling."
      pillarFrontmatter:
        review_cadence: monthly
      areas:
        - name: Masters Athlete Training (40+)
          description: "Adapting training for athletes over 40, with more recovery, strength work, mobility and age-group competition goals."
          projects:
            - name: Health check before hard training after 40
              description: |-
                ## Purpose
                Sudden cardiac events in sport are rare, but the risk rises after 40, and many masters athletes who later had a problem had brushed off earlier symptoms as being out of shape. A conversation with your doctor before a hard training year, covering chest symptoms, family history of early heart disease, blood pressure and medicines, turns a vague worry into a recorded decision about whether any further tests are needed.

                ## Milestones
                1. A pre-exercise screening questionnaire, such as the widely used PAR-Q+, completed honestly.
                2. An appointment held with your doctor, with your planned training and target events described.
                3. Any tests your doctor suggests, such as a heart tracing, booked or completed.
                4. The outcome and any limits written at the front of your training notes.

                ## Notes
                This project is about preparing the questions and recording the answers. Whether you need a heart tracing or an exercise test is your doctor's call, not a training plan's.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A dated note of your doctor's view on hard training, including any tests or limits, sits in your training notes within 30 days."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Fill in a pre-exercise screening questionnaire tonight"
                - "List any relatives who had heart problems or died suddenly before 60"
                - "Book an appointment to talk through your training plans with your doctor"
                - "Write down your doctor's advice and any follow-up tests the same day"
            - name: Exercise warning symptoms card
              description: |-
                ## Purpose
                Chest tightness, palpitations, fainting, or breathlessness out of all proportion to the effort are the symptoms masters athletes most often train through and later regret. Writing the ones your health service lists as urgent onto a card in your kit bag, with what to do and who to call, means the decision is made before the session rather than halfway through a rep.

                ## Milestones
                1. Your health service's list of urgent heart symptoms during exercise found.
                2. A card with those symptoms and the emergency number in your kit bag.
                3. The same card saved on your phone where it opens without unlocking.
                4. Two regular training partners told where the card is and who to call.

                ## Notes
                Use your health service's wording. Stopping a session costs one workout; carrying on through chest symptoms can cost much more.
              priority: high
              deadlineOffsetDays: 14
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A symptoms card based on your health service's guidance is in your kit bag and on your phone, and two training partners know where it is."
                cadence: one-shot
                effort_hours_estimate: "1"
              tasks:
                - "Look up your health service's list of urgent heart symptoms during exercise"
                - "Write the symptoms and the emergency number on a card for your kit bag"
                - "Save the card as an emergency note on your phone"
                - "Tell two regular training partners where the card is and who to call"
                - "Reread the card and update your emergency contact @recurring(yearly)"
            - name: Medicines checked against your training
              description: |-
                ## Purpose
                Several medicines commonly started in midlife change how training feels or what it risks: some blood pressure tablets cap your heart rate, some cholesterol medicines are linked with muscle aches, and blood thinners change the picture for contact and fall-prone sports. One review with your pharmacist or doctor, with your sport named, tells you what to watch for and stops you mistaking a side effect for poor fitness.

                ## Milestones
                1. A complete list of prescriptions, over-the-counter medicines and supplements.
                2. The list reviewed with a pharmacist or doctor who knows your sport and training load.
                3. Any effect on heart rate, heat tolerance, bleeding or muscles written in your training notes.
                4. A habit of bringing the list to every new prescription.

                ## Notes
                Never stop or change a medicine to suit training without your prescriber. If heart rate zones suddenly stop making sense after a new prescription, that is the conversation to have.
              priority: high
              deadlineOffsetDays: 45
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A reviewed medicines list with any training effects noted is in your training notes, signed off in conversation with a pharmacist or doctor."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "List every prescription, over-the-counter medicine and supplement you take"
                - "Ask your pharmacist how each one could affect hard exercise in your sport"
                - "Note any effect on heart rate, heat, bleeding or muscle soreness in your log"
                - "Keep the list in your wallet for the next time a medicine is prescribed"
            - name: Training history and honest current baseline
              description: |-
                ## Purpose
                Most masters athletes carry two pictures of themselves: the athlete they were at 28 and the one who turned up last week. Writing both down, with what you can comfortably do in ordinary sessions now, stops the first picture from setting the training load for the second.

                ## Milestones
                1. One page on your peak years: sport, typical weekly volume, best results and your age at the time.
                2. Actual sessions and hours from the last eight weeks counted from your diary or watch.
                3. Every old injury that still flares listed with the side and the trigger.
                4. Three plain sentences on what you can do comfortably today.

                ## Notes
                Count what you actually did in the last eight weeks, not what the plan said.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A two-part page comparing your peak years with the last eight weeks of real training exists in your training notes."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Write down your best years in the sport and the training you did then"
                - "Count your actual sessions and hours from the last eight weeks"
                - "List every old injury that still talks to you, with the side"
                - "Write three sentences about what you can do comfortably today"
            - name: Strength, balance and power baseline
              description: |-
                ## Purpose
                Endurance often holds up well into the 50s, while muscle power, single-leg balance and grip fall away quietly unless they are trained, and those are what decide falls, strains and the final sprint. Measuring a handful of simple markers now gives you numbers to beat every year and shows which one needs the most work.

                ## Milestones
                1. Time for five fast chair stands recorded.
                2. Single-leg balance with eyes closed timed on each side.
                3. Best of three standing long jumps measured.
                4. One strength marker, such as push-ups to failure or a five-rep goblet squat, recorded.
                5. All results dated in one metrics log.

                ## Notes
                Start from the **Metrics log** template. Pick tests you can repeat in exactly the same way every year; consistency matters more than which test you choose.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A dated metrics log holds results for chair stands, balance on each side, a standing long jump and one strength marker."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Time five chair stands done as fast as you safely can"
                - "Time single-leg balance with eyes closed on each side"
                - "Measure a standing long jump, best of three"
                - "Log every result with the date in a metrics log"
            - name: Age-graded score of your current bests
              description: |-
                ## Purpose
                Age-grading tables, published for running, race walking and several other sports, convert a time into a percentage of the standard for your exact age and sex. Working out yours shows whether you are simply slower than ten years ago or actually performing better for your age, and it gives a fair target that does not punish you for birthdays.

                ## Milestones
                1. Your best results from the last 18 months gathered in one place.
                2. An age-graded percentage worked out for each, using a calculator based on recognised tables.
                3. Your strongest and weakest events for your age identified.
                4. The percentages written at the top of your goals page.

                ## Notes
                If your sport has no age-grading tables, compare your results with the top ten in your age group at a recent championship instead.
              priority: medium
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "An age-graded percentage for each of your recent best results is written on your goals page, with your strongest event marked."
                cadence: one-shot
                effort_hours_estimate: "1"
              tasks:
                - "Gather your best results from the last 18 months"
                - "Run each result through an age-grading calculator for your sport"
                - "Mark which event scores highest for your age"
                - "Write the percentages at the top of your goals page"
            - name: Two-season age-group goal
              description: |-
                ## Purpose
                Goals copied from younger training partners, or from your own past, tend to end in injury or frustration after 40. Setting one outcome goal in your age group and two process goals for the next two seasons, checked against your health check and baseline, gives the training plan something specific and realistic to serve.

                ## Milestones
                1. One outcome goal written in age-group terms: a place, a time or an age-graded percentage.
                2. Two process goals, such as strength sessions per week or hard days kept apart.
                3. Both checked against your health check notes and baseline page.
                4. The goals shared with a coach or training partner who will ask about them.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "One age-group outcome goal and two process goals for the next two seasons are written down and shared with one other person."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Look up last season's results for your age group at your target event"
                - "Write one outcome goal and two process goals for the next two seasons"
                - "Check the goals against your health check and baseline notes"
                - "Share the goals with your coach or a training partner"
            - name: Seven or nine-day training cycle
              description: |-
                ## Purpose
                Recovery from a hard interval or heavy lifting session usually takes longer at 55 than at 35, and squeezing two or three hard days into a seven-day week is where many masters plans break down. Deciding between a standard week with fewer hard sessions and a longer nine or ten-day cycle, based on how you actually recover, sets the rhythm for everything else in this area.

                ## Milestones
                1. Days to feel fresh after each of your last three hard sessions noted.
                2. Both a seven-day and a nine-day cycle sketched against your real work and family timetable.
                3. A choice made, with the reason recorded in one sentence.
                4. A six-week trial started, with a review date in the calendar.

                ## Notes
                Longer cycles clash with weekly club sessions and fixtures. If your sport runs on a fixed weekly calendar, a seven-day week with one fewer hard session is often the more practical answer.
              priority: medium
              deadlineOffsetDays: 21
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A chosen training cycle length, with its reason and a six-week review date, is recorded in your training notes."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Note how many days it took to feel fresh after your last three hard sessions"
                - "Sketch a seven-day and a nine-day cycle on one page"
                - "Check which cycle fits work, family and club sessions"
                - "Choose one and trial it for six weeks before judging it"
            - name: Finding a masters squad or veterans' section
              description: |-
                ## Purpose
                Training alone after 40 tends to drift into either the same comfortable pace every day or ego sessions chasing younger club mates. Many running, rowing, swimming and cycling clubs run masters or veterans' sessions with coaching pitched at older bodies, and racing in their colours opens the door to age-group team competitions.

                ## Milestones
                1. Three clubs with a masters or veterans' section shortlisted.
                2. Taster sessions attended at two of them.
                3. A club chosen and membership or governing body registration completed.
                4. One regular masters session fixed in your week.
              priority: medium
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "You are a registered member of a club with a masters section and attend one of its sessions each week."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Search for clubs near you with masters or veterans' sections"
                - "Email two of them to ask about taster sessions for over-40s"
                - "Attend two sessions and note the coaching and the ages in the group"
                - "Join the club and register with your sport's governing body if required"
            - name: Twice-weekly heavy strength sessions
              description: |-
                ## Purpose
                Muscle mass, and especially fast-twitch fibre, declines from midlife, and endurance training on its own does little to stop it. Two short sessions a week of heavy, well-coached lifting for legs, hips, back and upper body is one of the best-supported habits for older athletes, protecting speed, tendons and bone as well as strength.

                ## Milestones
                1. Two fixed weekly slots that do not sit the day before a hard session.
                2. A six-exercise programme covering squat, hinge, push, pull, single leg and carry.
                3. At least 20 sessions completed in the first 12 weeks.
                4. Load increases recorded for every main lift.

                ## Notes
                Start from the **Habit tracker** template. Heavy means the last reps are hard while technique holds; build up to it over several weeks rather than starting there.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "At least 20 strength sessions are logged in the first 12 weeks, with load increases recorded for each main lift."
                cadence: rolling
              tasks:
                - "Choose two fixed weekly slots for strength away from your hard sessions"
                - "Write a six-exercise programme covering squat, hinge, push, pull, single leg and carry"
                - "Complete a strength session @recurring(weekly:tue,fri)"
                - "Add a small amount of load when every set feels controlled"
            - name: Power and speed kept in every week
              description: |-
                ## Purpose
                Power, the ability to produce force quickly, drops faster with age than strength or endurance, and it is what goes first in a sprint finish, a tackle or a stumble. Short, fully recovered efforts such as strides, hill sprints, jumps or medicine ball throws, done in small doses every week, keep the fast end alive without adding much fatigue.

                ## Milestones
                1. Two or three power drills chosen that suit your sport.
                2. Safe landing and take-off mechanics practised before any jumping.
                3. A ten to fifteen minute power slot done early in one fresh session each week.
                4. Standing long jump retested after eight weeks.

                ## Notes
                Each effort should be short and fast with full rest between. Once efforts slow down, the slot is finished for the day.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A weekly power slot is logged for eight weeks in a row and the standing long jump is retested against your baseline."
                cadence: rolling
              tasks:
                - "Pick two or three short power drills that suit your sport"
                - "Practise landing softly from a low step before adding any jumps"
                - "Do a short power slot early in a fresh session @recurring(weekly:wed)"
                - "Retest your standing long jump after eight weeks"
            - name: Morning readiness check
              description: |-
                ## Purpose
                Older athletes often feel fine on waking but are still carrying fatigue from two days earlier, and that hidden debt shows up later as a cold or a strain. A one-minute check each morning of resting heart rate, sleep and soreness, with a written rule for when to swap a hard session for an easy one, catches the debt before it becomes lost weeks.

                ## Milestones
                1. A normal resting heart rate set from two weeks of morning readings.
                2. A simple one to five scale for sleep and soreness.
                3. A swap rule written for days when the readings are off.
                4. Four weeks of checks logged, with every swapped session noted.

                ## Notes
                Keep the rule simple, such as swapping intervals for easy work when resting heart rate is well above normal and sleep was poor. A watch readiness score is a hint, not a verdict.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Four consecutive weeks of morning readiness checks are logged, with a written swap rule and every swapped session recorded."
                cadence: rolling
              tasks:
                - "Measure resting heart rate before getting up for two weeks to set your normal"
                - "Write a swap rule for when heart rate and sleep are both off"
                - "Record resting heart rate, sleep and soreness on waking @recurring(daily)"
                - "Count how many sessions you swapped at the end of each month"
            - name: Hard days kept 48 hours apart
              description: |-
                ## Purpose
                Back-to-back hard days are survivable at 30 and a common route to calf strains and Achilles trouble at 50. Planning each week so that intervals, heavy lifting, long sessions and matches never land within 48 hours of each other, with easy or rest days between, keeps the quality of every hard session high.

                ## Milestones
                1. A written list of which session types count as hard, including matches and races.
                2. A blank week drawn with hard sessions placed two days apart.
                3. The coming week planned against the rule every weekend.
                4. Four straight weeks with no hard sessions on consecutive days.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Four consecutive weekly plans show no hard sessions within 48 hours of each other, and the training log confirms it."
                cadence: rolling
              tasks:
                - "List which of your sessions count as hard, including matches and races"
                - "Draw a blank week and place the hard sessions two days apart"
                - "Plan the coming week against the 48-hour rule @recurring(weekly:sun)"
                - "Move a session rather than stack it when life shifts the week"
            - name: Longer warm-up for a 40-plus body
              description: |-
                ## Purpose
                Tendons and muscles stiffen with age and take longer to be ready for fast work, which is why masters athletes pick up so many strains in the first ten minutes of sprints, intervals or matches. Building a 15 to 20 minute warm-up that raises temperature, takes joints through range and finishes with a few fast efforts makes the start of every hard session safer.

                ## Milestones
                1. A written three-part warm-up: easy movement, joint range and short fast efforts.
                2. One drill added for each old injury site in your history.
                3. A ten-minute short version for days you arrive late.
                4. The full warm-up used before every hard session for a month.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A written full and short warm-up exists and the training log shows it used before every hard session for one month."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Time how long your current warm-up actually takes"
                - "Write a three-part warm-up of easy movement, joint range and short fast efforts"
                - "Add one drill for each old injury site from your history"
                - "Write a ten-minute version for days you arrive late"
            - name: Protein spread across the day
              description: |-
                ## Purpose
                Ageing muscle responds less to each serving of protein, an effect researchers call anabolic resistance, so the pattern of eating matters more than it did at 25. Spreading good protein sources across three or four meals, including breakfast and after training, supports the strength work without needing a special diet.

                ## Milestones
                1. A three-day note of the protein eaten at each meal.
                2. The meals that are light on protein identified.
                3. Two protein-rich breakfasts and two snacks added to the usual shop.
                4. A weekly meal plan with a protein source at every meal.

                ## Notes
                Start from the **Weekly meal plan** template. If you have kidney disease or another condition affecting diet, ask your doctor or a dietitian before changing how much protein you eat.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A weekly meal plan shows a protein source at every meal, and a repeat three-day check finds no meal without one."
                cadence: rolling
              tasks:
                - "Write down what protein you ate at each meal for three days"
                - "Mark the meals with little or no protein"
                - "Add two protein-rich breakfasts to your shopping list"
                - "Repeat the three-day protein check @recurring(quarterly)"
            - name: Sleep protected as a recovery session
              description: |-
                ## Purpose
                Sleep becomes lighter and more broken for many people after 40, just as recovery from training leans on it more. Treating sleep as part of the programme, with a fixed window, a cool dark room and caffeine cut off early, is the cheapest recovery tool a masters athlete has.

                ## Milestones
                1. Two weeks of bed and wake times recorded.
                2. A fixed sleep window chosen that fits early sessions.
                3. A daily cut-off time set for caffeine and late screens.
                4. A monthly look at sleep alongside the month's training.

                ## Notes
                Start from the **Sleep review** template. Loud snoring with daytime sleepiness, or waking breathless, is worth raising with your doctor rather than training around.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A fixed sleep window and caffeine cut-off are written down, and three monthly sleep reviews are completed."
                cadence: rolling
              tasks:
                - "Note bed and wake times for the next two weeks"
                - "Choose a fixed sleep window that fits your early sessions"
                - "Set a daily cut-off time for caffeine"
                - "Review sleep against the month's training @recurring(monthly:12)"
            - name: Bone-loading for swimmers and cyclists
              description: |-
                ## Purpose
                Swimming and cycling build excellent fitness but put little load through bone, and studies of long-term masters cyclists and swimmers have found lower bone density than in runners or lifters. Adding a little impact and heavy lifting each week, cleared with your doctor if your bone density is already known to be low, helps protect against fractures from a crash or fall.

                ## Milestones
                1. Your doctor asked whether your history warrants a bone density scan.
                2. Two loading moves chosen, such as hops, step-downs or heavy deadlifts.
                3. A short loading set done once a week for 12 weeks.
                4. Hop height or lifting load increased gradually and logged.

                ## Notes
                Runners and team sport players get much of this from their sport already. The project matters most for athletes whose main sport is in the water or on a saddle.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A weekly bone-loading set is logged for 12 weeks, with your doctor's view on bone density screening recorded."
                cadence: rolling
              tasks:
                - "Ask your doctor whether your history warrants a bone density scan"
                - "Choose two loading moves such as hops, step-downs or heavy deadlifts"
                - "Do the bone-loading set after an easy session @recurring(weekly:mon)"
                - "Start with low hops and build height slowly over the first month"
            - name: Monthly masters training review
              description: |-
                ## Purpose
                Masters athletes tend to get slowly overcooked rather than suddenly injured: three weeks of creeping soreness, broken sleep and flat sessions. Half an hour each month with your log, looking at hard sessions, strength sessions, readiness swaps and niggles, catches that drift and sets the load for the month ahead.

                ## Milestones
                1. Five standing review questions written on load, strength, sleep, niggles and enjoyment.
                2. The first review completed with the log open.
                3. One change for the coming month recorded each time, with the reason.
                4. Three months of reviews summarised into trends.

                ## Notes
                Start from the **Metrics log** template. If two reviews in a row show rising niggles, cut volume before anything gets worse.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Three consecutive monthly reviews are written, each ending with one recorded change for the following month."
                cadence: rolling
              tasks:
                - "Write five review questions about load, strength, sleep, niggles and enjoyment"
                - "Hold the monthly review with your training log open @recurring(monthly:19)"
                - "Record one change for next month and the reason"
                - "Ask the agent to summarise three months of reviews into trends"
            - name: Yearly masters health and fitness retest
              description: |-
                ## Purpose
                Ageing moves a year at a time, too slowly to notice session by session. A yearly check that pairs a routine health review with a rerun of your strength, balance and power tests and your age-graded scores shows what is holding, what is slipping, and what next year's training should focus on.

                ## Milestones
                1. A routine health check booked in the month of your birthday.
                2. Baseline tests repeated in exactly the same way as before.
                3. Age-graded scores updated with this year's results.
                4. One priority for the coming year chosen from the marker that slipped most.
              priority: high
              frontmatter:
                mode: operating
                output_kind: knowledge
                success_criteria: "Each year a health check and a full retest are recorded side by side with the previous year, with one named priority."
                cadence: cyclic
              tasks:
                - "Book a routine health check in the month of your birthday @recurring(yearly)"
                - "Rerun chair stands, balance, long jump and your strength marker"
                - "Update your age-graded scores with this year's results"
                - "Pick the marker that slipped most as next year's focus"
            - name: How ageing changes the training response
              description: |-
                ## Purpose
                Knowing what actually changes after 40, and what does not, lets you train for the real problem instead of the myth. Maximum heart rate and aerobic capacity drift down, fast fibres and tendon elasticity decline and recovery slows, yet trainability stays high, and much of the decline seen in inactive people is not seen in those who keep training.

                ## Milestones
                1. Two or three reputable sources read, such as a review article and a book by a sports scientist.
                2. A one-page summary listing five changes and the training answer to each.
                3. Three beliefs about ageing and sport you held corrected or confirmed.
                4. The summary shared with your coach or training group.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A one-page summary of five age-related changes and the training response to each is written and shared with one other person."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Find a recent review article or book on training and ageing by a sports scientist"
                - "Read one chapter or section each week"
                - "Write one page listing five changes and the training response to each"
                - "Share the summary with your coach or training group"
            - name: Lifting technique coached after 40
              description: |-
                ## Purpose
                Many endurance athletes come to the weights room late and learn the squat and deadlift from short videos, which is how backs and knees get hurt. Four to six sessions with a qualified strength coach, ideally one who works with older lifters, gives you safe technique and sensible starting loads to carry into the twice-weekly sessions.

                ## Milestones
                1. A strength coach found who has experience with older clients.
                2. A block of four to six technique sessions completed.
                3. Each main lift filmed from the side in the final session.
                4. Two technique cues and a starting load written down for every lift.
              priority: medium
              deadlineOffsetDays: 60
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Within 60 days, four or more coached sessions are done and each main lift has written cues, a starting load and a video."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Ask your gym or club for a strength coach who works with older lifters"
                - "Book a block of four to six technique sessions"
                - "Film each main lift from the side in the final session"
                - "Write two technique cues and a starting load for each lift"
            - name: Why tendons need slower progressions after 40
              description: |-
                ## Purpose
                Tendons adapt to load far more slowly than muscle or the heart, and the gap widens with age, which is why Achilles, hamstring and knee tendon problems top masters injury lists. Learning how tendons respond to load, and the early signs that they are falling behind, changes how you plan any jump in volume, speed or surface.

                ## Milestones
                1. A physiotherapy guide on tendon loading for older athletes read.
                2. The early warning signs, such as morning stiffness that eases with movement, written down.
                3. A rule written to change only one of volume, speed or surface at a time.
                4. The rule applied when planning the next training block.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A written progression rule for tendon load is in your training notes and the next block's plan visibly follows it."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Read a physiotherapy guide on tendon loading for older athletes"
                - "Note the early signs that a tendon is falling behind"
                - "Write a rule to change only one of volume, speed or surface at a time"
                - "Apply the rule when planning your next training block"
            - name: Age-group rules, categories and records
              description: |-
                ## Purpose
                Age-group categories are defined differently across sports: some use your age on the day, others your age at the end of the year, and the width of the bands varies too. Knowing exactly which category you compete in this season and next, the qualifying standards, and where the club and national age records sit avoids entering the wrong race or missing a qualifying window.

                ## Milestones
                1. Your governing body's masters or veterans' rules read.
                2. Your category this season and the date it changes written down.
                3. Qualifying standards noted for any championships you might enter.
                4. Club and national records for your age band listed for your main events.
              priority: low
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "Your current and next age category, the change date, relevant qualifying standards and age-band records are written on one page."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Find your governing body's masters or veterans' rules page"
                - "Write down your category this season and the date it changes"
                - "Note the qualifying standards for championships you might enter"
                - "Check for rule and category changes each January @recurring(yearly)"
            - name: Sports dietitian review for masters recovery
              description: |-
                ## Purpose
                Fuelling needs shift with age: appetite can fall, protein and calcium matter more, and menopause or new medicines change the picture again. One or two appointments with a registered sports dietitian, armed with a food diary and your training week, gives you advice built for your body rather than a plan written for 25-year-olds.

                ## Milestones
                1. A registered sports dietitian found who sees older athletes.
                2. A five-day food and training diary completed before the appointment.
                3. The appointment held, with your medicines list and health notes to hand.
                4. Three agreed changes written down, with the easiest started first.

                ## Notes
                Check the dietitian is on a national register. Titles such as nutritionist are not protected in many countries.
              priority: medium
              deadlineOffsetDays: 60
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "Three agreed nutrition changes from a registered sports dietitian are written in your training notes within 60 days."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Search the national register for a sports dietitian who sees older athletes"
                - "Keep a five-day food and training diary before the appointment"
                - "Bring your medicines list and health check notes"
                - "Write the three changes you agreed and start the easiest one first"
            - name: Filmed technique session with your sport coach
              description: |-
                ## Purpose
                Lost range in hips, shoulders and ankles changes technique without you noticing, so a stride, stroke or swing that worked at 35 starts to leak energy or stress joints at 55. A filmed session with a coach in your sport, comparing what you do now with what your body can still do, finds two or three changes worth months of fitness.

                ## Milestones
                1. A filmed session booked with a coach in your sport.
                2. Video captured from at least two angles at steady and race pace.
                3. Two or three technique changes written down, each with a drill.
                4. A second video after eight weeks compared with the first.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Two filmed sessions eight weeks apart exist, with written technique changes and visible differences noted between them."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Ask your club coach for a filmed technique session"
                - "Film from the side and front at steady and race pace"
                - "Write the two or three changes and a drill for each"
                - "Film again after eight weeks of drills and compare"
            - name: Heat, cold and hydration as thirst fades
              description: |-
                ## Purpose
                Thirst signals weaken and sweating starts later with age, so older athletes can be well behind on fluids before they feel it, and some medicines make heat harder to handle. Learning your own sweat losses and cold tolerance, and setting simple routines for hot and cold days, matters most for long sessions and races abroad.

                ## Milestones
                1. Sweat loss estimated by weighing before and after an hour's session.
                2. A drinking routine written for sessions longer than an hour.
                3. Adjustments for very hot and very cold days listed.
                4. Medicines checked for any effect on heat tolerance.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A written drinking routine based on a measured sweat loss, plus hot and cold day adjustments, is in your training notes."
                cadence: phased
                effort_hours_estimate: "3"
              tasks:
                - "Weigh yourself before and after an hour's session to estimate sweat loss"
                - "Write a drinking routine for sessions longer than an hour"
                - "List the changes you make on very hot or very cold days"
                - "Ask your pharmacist whether any of your medicines affect heat tolerance"
            - name: Fewer, better sessions instead of junk volume
              description: |-
                ## Purpose
                Many masters athletes keep the weekly hours of their 30s but fill them with medium-hard sessions that are too tiring to recover from and too easy to improve anything. Trimming volume and making easy days genuinely easy and hard days genuinely hard usually brings faster results with less soreness.

                ## Milestones
                1. Every session from the last four weeks labelled easy, moderate or hard.
                2. Moderate sessions with no clear purpose counted.
                3. A new week written where each session has one stated purpose.
                4. Results and soreness compared after a six-week trial.
              priority: medium
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A rewritten training week with one stated purpose per session is trialled for six weeks and the before and after compared in writing."
                cadence: phased
                effort_hours_estimate: "3"
              tasks:
                - "Label every session in the last four weeks easy, moderate or hard"
                - "Count the moderate sessions that had no clear purpose"
                - "Rewrite your week so each session has one stated purpose"
                - "Compare results and soreness after a six-week trial"
            - name: Choosing a coach who works with masters athletes
              description: |-
                ## Purpose
                Coaching that suits young athletes often fails older ones, either by copying elite volume or by treating age as a reason to aim low. Interviewing two or three coaches about how they handle recovery, strength work and age-group goals finds someone who will plan for your body and your life.

                ## Milestones
                1. Three coaches with current masters clients shortlisted.
                2. The same five questions put to each.
                3. One current masters athlete of each coach spoken to.
                4. A choice recorded with the cost and notice period.

                ## Notes
                Ask how they adjust the plan after a bad week. The answer tells you more than a list of qualifications.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A coach is chosen after the same five questions were put to three candidates, with cost and terms written down."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Ask your club which coaches already coach athletes over 50"
                - "Write five questions on recovery, strength work and goals"
                - "Speak to one current masters athlete each coach works with"
                - "Record your choice, the monthly cost and the notice period"
            - name: Lower-impact cross-training mix
              description: |-
                ## Purpose
                Joints with decades of wear, such as knees after years of football or running, often tolerate total training volume better when part of it moves to low-impact work. Choosing one or two options such as cycling, rowing, swimming or the cross-trainer, and deciding exactly which sessions they replace, keeps aerobic fitness while taking load off the parts that complain.

                ## Milestones
                1. Sessions that leave joints sore the next day identified.
                2. Two low-impact options tried for one easy session each.
                3. A decision on which sessions the cross-training replaces.
                4. Joint comfort and fitness reviewed after eight weeks.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A written decision on which sessions move to low-impact work is trialled for eight weeks and reviewed against joint comfort."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Mark which sessions leave your joints sore the next day"
                - "Try two low-impact options for one easy session each"
                - "Decide which sessions the cross-training replaces"
                - "Review joint comfort and fitness after eight weeks"
            - name: Deciding which events and distances to keep
              description: |-
                ## Purpose
                Some events suit an ageing body better than others: longer endurance distances often hold up better than sprints, and contact formats charge a bigger injury bill each year. Reviewing the events you race against your age-graded scores, injury history and enjoyment, and deciding which to keep, drop or try, points the next five years at events you can still race well.

                ## Milestones
                1. Every event from the last three years listed.
                2. Each scored for age-graded result, injury cost and enjoyment.
                3. Each marked keep, drop or try.
                4. One new event or distance picked for next season.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A scored list of past events marked keep, drop or try, with one new event chosen, is written in your goals page."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "List every event you raced in the last three years"
                - "Score each for age-graded result, injury cost and enjoyment"
                - "Mark each event keep, drop or try"
                - "Pick one new event or distance to try next season"
            - name: Kit refitted to a changed body
              description: |-
                ## Purpose
                Bodies change shape and range in midlife, and the shoes, saddle height, bike position or racket grip chosen ten years ago may now be feeding the niggles. A fit review by a qualified bike fitter, gait specialist or coach, done once and properly, often fixes more than another stretching routine.

                ## Milestones
                1. Main kit listed with the year each item was bought or set up.
                2. A fit review booked for the item that matters most in your sport.
                3. Old settings measured and photographed before anything changed.
                4. Comfort checked after four weeks and any adjustments noted.

                ## Notes
                Start from the **Purchase decision** template if the review points to new kit. Record old settings first so you can go back if the change does not suit you.
              priority: low
              deadlineOffsetDays: 45
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A fit review is completed, old and new settings are recorded, and a four-week comfort check is written up."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "List your main kit with the year you bought or set it up"
                - "Book a fit review for the item that matters most in your sport"
                - "Photograph and measure the old settings before any change"
                - "Check comfort after four weeks and note any adjustments"
            - name: Sports vision check after 40
              description: |-
                ## Purpose
                Close-up focus starts to fade for almost everyone in their 40s, turning watch screens, bike computers and pace boards into a blur, while ball and racket sports depend on sharp distance vision. An eye test with your sport described leads to practical fixes such as larger display fields, sports contact lenses or prescription sports glasses.

                ## Milestones
                1. An eye test booked, with your sport and its demands explained.
                2. Watch and bike computer screens set to fewer, larger fields.
                3. Options such as sports lenses or prescription sports glasses discussed.
                4. Protective eyewear considered for squash, racket or stick sports.
              priority: low
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "An eye test with your sport discussed is recorded, and your sport displays and eyewear are changed to match the result."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Change your watch or bike computer to fewer, larger data fields"
                - "Book an eye test and mention which sport you play"
                - "Ask the optician about sports contact lenses or prescription sports glasses"
                - "Book a repeat eye test as your optician advises @recurring(yearly)"
            - name: Racing weight rethink that protects muscle
              description: |-
                ## Purpose
                Chasing a lighter racing weight through hard dieting costs older athletes more than younger ones, because muscle lost in a deficit is slow to come back and bone health can suffer. Setting a body composition goal with a professional that puts strength first, and tracking it with more than the bathroom scale, keeps the gains you are training for.

                ## Milestones
                1. Weight, waist and two strength markers recorded on the same morning.
                2. A realistic goal agreed with a dietitian or doctor.
                3. A slow rate of change chosen that keeps strength numbers steady.
                4. Monthly measures logged with a stop rule if strength falls.

                ## Notes
                If you have any history of disordered eating, work on this only with a clinician.
              priority: low
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A professionally agreed body composition goal and monthly measures are logged, with strength markers holding steady or rising."
                cadence: phased
                effort_hours_estimate: "3"
              tasks:
                - "Record weight, waist and two strength markers on the same morning"
                - "Discuss a realistic body composition goal with a dietitian or doctor"
                - "Log weight, waist and strength markers @recurring(monthly:26)"
                - "Stop and reassess if strength markers fall two months running"
            - name: First masters race or competition
              description: |-
                ## Purpose
                Racing in your age group for the first time feels different from open racing: you are measured against your peers, and results lists often show age-graded scores. Choosing a low-key masters event, preparing for it as a real race and recording the result gives you a first benchmark against people your own age.

                ## Milestones
                1. An event with masters or veterans' categories chosen three to four months out.
                2. Entry confirmed with the correct age category shown.
                3. A simple race plan for warm-up and pacing written.
                4. Time, age-group position and age-graded score recorded.
              priority: medium
              deadlineOffsetDays: 120
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "One masters-category event is completed within 120 days, with time, age-group position and age-graded score in your log."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Find a local event that awards masters or veterans' age-group places"
                - "Enter and check the age category shown on your confirmation"
                - "Write a simple race plan for warm-up and pacing"
                - "Record your time, age-group position and age-graded score"
            - name: National masters championships entry
              description: |-
                ## Purpose
                National masters championships in athletics, swimming, rowing, cycling and many other sports are open to most club athletes, sometimes with qualifying standards, and they are the main stage for age-group racing. Planning one into the season, with entry deadlines, standards and travel sorted early, turns a vague idea into a dated target.

                ## Milestones
                1. Dates, venue and entry rules for the championships found.
                2. A qualifying standard achieved, or confirmed as not needed.
                3. Entry submitted before the closing date.
                4. Travel and accommodation booked.
                5. A race day plan written, including arrival time and warm-up.
              priority: medium
              deadlineOffsetDays: 180
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A confirmed entry to your national masters championships is held, with travel booked and a race day plan written."
                cadence: one-shot
                effort_hours_estimate: "10"
              tasks:
                - "Find the dates and entry rules for your national masters championships"
                - "Check whether your event needs a qualifying time or mark"
                - "Put the entry opening and closing dates in your calendar"
                - "Book travel and accommodation once your entry is confirmed"
            - name: Ageing-up year race plan
              description: |-
                ## Purpose
                Turning 40, 45, 50 or any new band age means moving from the oldest in your group to the youngest, which is the best chance most masters athletes get at age-group podiums and records. Planning the year you age up, with target events after the switch date and training peaked for them, makes the most of a window that opens only once every five years.

                ## Milestones
                1. The exact date you move into the next band under each target event's rules.
                2. Target events after the switch listed.
                3. Last year's winning results in your new age group looked up.
                4. A training plan with its peak on the main target event.
              priority: medium
              deadlineOffsetDays: 365
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "At least one target event is raced in your new age band within a year, with the result compared against the previous winners."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Check the date you move into the next age band under your sport's rules"
                - "List target events that fall after the switch"
                - "Look up last year's winning results in your new age group"
                - "Plan your training so the peak lands on the main target event"
            - name: Milestone birthday sporting challenge
              description: |-
                ## Purpose
                A 50th or 60th birthday is a natural deadline for something memorable: 50 miles at 50, a first triathlon at 60, or a lifting total that matches your age in some unit. Choosing a challenge that is hard but safe, with a training build and a celebration around it, gives the year a shape and a story.

                ## Milestones
                1. One challenge chosen and checked against your health notes and baseline.
                2. A training start date set by working back from the birthday.
                3. Support people, route or venue and logistics arranged.
                4. The challenge completed and recorded with photos.
              priority: low
              deadlineOffsetDays: 365
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A birthday challenge chosen in advance is completed within a year, with the training build and the day recorded."
                cadence: one-shot
                effort_hours_estimate: "20"
              tasks:
                - "Brainstorm five challenges linked to your birthday number"
                - "Pick one and check it against your health check notes"
                - "Work back from the birthday to set the training start date"
                - "Invite friends or family to join the day or the celebration"
            - name: Masters relay or team event
              description: |-
                ## Purpose
                Masters relays, veteran crews, age-group team trophies and club team scoring give older athletes a reason to race for others, and clubs are often short of willing members for them. Getting a team together, matching ages to the category rules and practising changeovers or team tactics adds a different kind of motivation to the season.

                ## Milestones
                1. A team event found and its age rules understood, such as minimum or combined age.
                2. A team named that meets the rules.
                3. Two practice sessions held for changeovers or tactics.
                4. The team entered and the event raced.
              priority: low
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A masters team that meets the category age rules is entered and races together at least once this season."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Ask your club captain which masters team events the club enters"
                - "Check the age rules for the team, such as minimum or combined age"
                - "Agree a team and two practice dates for changeovers or tactics"
                - "Submit the team entry before the closing date"
            - name: Comeback after a long break from sport
              description: |-
                ## Purpose
                Former athletes returning in their 40s or 50s after ten or twenty years away are the most likely to do too much too soon, because their memory of the sport runs ahead of their tendons. A phased comeback over three to six months, starting well below what feels possible, rebuilds the base before old competitive habits take over.

                ## Milestones
                1. Four to six weeks of short, easy sessions completed without pain the next day.
                2. One strength session a week added from the second week.
                3. Faster work introduced only after six weeks of consistent training.
                4. A first timed effort or low-key race after at least three months.

                ## Notes
                Expect your heart and lungs to come back faster than your tendons. Hold volume steady when it feels easy for the first few weeks.
              priority: medium
              frontmatter:
                mode: building
                output_kind: habit
                success_criteria: "Three months of consistent training are logged with no sessions lost to injury before the first timed effort."
                cadence: phased
                effort_hours_estimate: "40"
              tasks:
                - "Write down when you last trained regularly and at what level"
                - "Start with sessions half the length you think you can manage"
                - "Add one strength session a week from the second week"
                - "Wait six weeks before any timed effort or race"
            - name: Starting a new sport after retirement
              description: |-
                ## Purpose
                Retirement brings time, and many people use it to take up a sport they never had room for, from rowing to cycling, bowls or walking football. Choosing one that suits your joints, health and budget, then learning it on a beginners' course with other older starters, builds skill and friendships at the same time.

                ## Milestones
                1. Three sports shortlisted that suit your health and budget.
                2. A taster session attended in each.
                3. A beginners' course completed in the favourite.
                4. A club or group joined to keep going after the course.
              priority: medium
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A beginners' course in a new sport is completed and you are a member of a club or group that plays it."
                cadence: phased
                effort_hours_estimate: "15"
              tasks:
                - "List three sports you have always been curious about"
                - "Book a taster session in each, ideally one aimed at older beginners"
                - "Sign up for a beginners' course in the one you enjoyed most"
                - "Join a club or group to keep going after the course"
            - name: Training around a career and teenagers in your 40s
              description: |-
                ## Purpose
                Peak career years and children's own fixtures leave many athletes in their 40s with five broken-up hours a week, often late at night. A plan built on three fixed key sessions, short strength work at home and a family-friendly long session keeps progress going without the guilt.

                ## Milestones
                1. Realistic weekly hours worked out from the last month's calendar.
                2. Three key sessions fixed in the shared family calendar.
                3. A 20-minute home strength routine written.
                4. A weekend long-session slot agreed with the family.
              priority: medium
              frontmatter:
                mode: building
                output_kind: habit
                success_criteria: "Three key sessions appear in the shared family calendar and at least 80 per cent of them are completed over eight weeks."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Count the hours you actually trained in each of the last four weeks"
                - "Put three key sessions in the shared family calendar"
                - "Write a 20-minute strength routine you can do at home"
                - "Agree a weekend long-session slot that works with the family"
            - name: Training through perimenopause and menopause
              description: |-
                ## Purpose
                Perimenopause can bring broken sleep, hot flushes, joint aches, changes in body composition and a loss of power, often while the training plan stays exactly the same. Tracking symptoms against training, raising them with a clinician who knows menopause, and shifting towards heavier strength and power work helps many women keep performing through these years.

                ## Milestones
                1. Three months of short notes on sleep, symptoms and session quality.
                2. An appointment held with a clinician who has menopause training.
                3. Training adjusted, with heavier strength, power work and recovery reviewed.
                4. A three-month review comparing symptoms and performance before and after.

                ## Notes
                Treatment choices, including hormone therapy, are a conversation with your clinician. This project is about bringing them good information and adjusting the training around their advice.
              priority: high
              frontmatter:
                mode: building
                output_kind: habit
                success_criteria: "Three months of symptom and training notes are discussed with a clinician and an adjusted training plan is followed for three months."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Start a short note of sleep, symptoms and session quality"
                - "Book an appointment with a clinician who has menopause training"
                - "Bring three months of notes and your training plan to the appointment"
                - "Review symptoms against training at the start of each month @recurring(monthly:3)"
            - name: Training with a long-term condition
              description: |-
                ## Purpose
                Type 2 diabetes, a heart stent, asthma, a joint replacement or high blood pressure are common among masters athletes and rarely a reason to stop, but each changes what safe training looks like. Agreeing written guidance with the clinician who manages your condition, covering intensity limits, warning signs and what to carry, lets you train with confidence.

                ## Milestones
                1. A list of questions about training with your condition prepared.
                2. Written guidance on intensity and warning signs from your clinician.
                3. Anything the condition needs, such as an inhaler, glucose or medical ID, packed in your kit bag.
                4. Your coach or regular partners told what to do if something goes wrong.

                ## Notes
                If you have had a cardiac event or procedure, ask whether a supervised cardiac rehabilitation programme should come before returning to hard sport.
              priority: high
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "Written training guidance from your clinician is in your notes and your kit bag holds everything your condition requires."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Write the questions you want answered about training with your condition"
                - "Ask your clinician for written guidance on intensity and warning signs"
                - "Pack anything your condition needs into your kit bag, including medical ID"
                - "Share your training log at each condition review @recurring(quarterly)"
            - name: Training time in retirement kept in proportion
              description: |-
                ## Purpose
                With work gone, some retired athletes double their training and find out the hard way that their body has not retired from needing rest. Setting a ceiling on weekly hours and hard sessions, and filling the extra time with strength work, coaching or officiating, keeps the new freedom from turning into overuse injuries.

                ## Milestones
                1. A ceiling for weekly training hours and hard sessions written down.
                2. Two non-training ways to stay involved in your sport chosen.
                3. Rest days fixed in the calendar before other bookings.
                4. Injuries and energy reviewed after three months against the ceiling.
              priority: low
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A written weekly ceiling for hours and hard sessions is kept for three months, with injuries and energy reviewed at the end."
                cadence: phased
                effort_hours_estimate: "2"
              tasks:
                - "Write a ceiling for weekly training hours and hard sessions"
                - "Choose two non-training ways to stay involved, such as officiating or coaching"
                - "Put rest days in the calendar before booking anything else"
                - "Review injuries and energy after three months against the ceiling"
            - name: Training in your 70s and beyond
              description: |-
                ## Purpose
                Athletes in their 70s, 80s and 90s race in masters events every year, and the ones who last tend to share habits: strength and balance work several times a week, modest volume and plenty of training with others. Adapting your programme for this decade puts fall prevention and independence alongside performance, so sport protects everyday life rather than threatening it.

                ## Milestones
                1. Your doctor's view on which activities to prioritise recorded.
                2. Balance practice built into a daily routine.
                3. A third short strength and balance session added to the week.
                4. A training group found with members in your age band.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Daily balance practice and three weekly strength and balance sessions are logged for eight weeks alongside your sport."
                cadence: rolling
              tasks:
                - "Ask your doctor which activities to prioritise at this age"
                - "Practise single-leg balance near a support while brushing your teeth @recurring(daily)"
                - "Add a third short strength and balance session each week"
                - "Find a training group with members in your age band"
            - name: Periodised season built for masters recovery
              description: |-
                ## Purpose
                Periodisation for an older athlete is less about squeezing in more peaks and more about protecting recovery: longer base phases, lighter weeks more often, strength kept all year and fewer target races. Writing the whole season out this way, with dates, gives every session a place and makes the hard choices before the season starts.

                ## Milestones
                1. No more than three target races chosen.
                2. Base, build, peak and transition phases marked on a calendar.
                3. A lighter week scheduled every third or fourth week.
                4. Strength work kept in every phase, including race weeks.
                5. The plan reviewed by a coach or experienced training partner.

                ## Notes
                Start from the **Training program** template.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A dated season plan shows phases, lighter weeks and strength work around no more than three target races."
                cadence: cyclic
                effort_hours_estimate: "8"
              tasks:
                - "Choose no more than three target races for the season"
                - "Ask the agent to draft a phase calendar from your race dates"
                - "Schedule a lighter week every third or fourth week"
                - "Keep at least one strength session in every phase, including race weeks"
            - name: World or European masters championships campaign
              description: |-
                ## Purpose
                World and continental masters championships draw thousands of competitors, and in most sports any registered masters athlete can enter, with qualifying standards only in some events. A campaign year needs entries, licences, proof of age, anti-doping awareness and a taper planned around long-haul travel, so it pays to start a year out.

                ## Milestones
                1. The championships chosen and the entry rules, licence and standards confirmed.
                2. Every medicine you take checked against the anti-doping prohibited list.
                3. Entry, travel and accommodation booked, arriving early enough to adjust.
                4. A taper and race week plan written around the travel.

                ## Notes
                Masters athletes can be drug tested. If you take a prescribed medicine on the prohibited list, ask your national anti-doping organisation about a therapeutic use exemption well before the event.
              priority: medium
              deadlineOffsetDays: 365
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "An entry to a world or continental masters championships is confirmed, with medicines checked and travel booked, and the event raced."
                cadence: one-shot
                effort_hours_estimate: "25"
              tasks:
                - "Find the next world or continental masters championships for your sport"
                - "Check the entry rules, licence requirements and any standards"
                - "Check every medicine you take against the anti-doping prohibited list"
                - "Book travel to arrive early enough to adjust to the time zone"
            - name: Age-graded percentage target campaign
              description: |-
                ## Purpose
                Age-graded percentages let you chase a meaningful goal even as raw times slow, such as moving from 70 to 75 per cent in your main event, where around 80 per cent is often described as national class for your age. A season built around one age-graded target gives a clear, fair measure of progress that does not depend on who turned up.

                ## Milestones
                1. A target age-graded percentage set for one event.
                2. Three events booked across the season to test it.
                3. Scores tracked against the target through the season.
                4. An end-of-season note on what moved the percentage.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "One event has a written age-graded target, three scored attempts across the season and an end-of-season review."
                cadence: cyclic
                effort_hours_estimate: "4"
              tasks:
                - "Set a target age-graded percentage for one event this season"
                - "Book three events spread across the season to test it"
                - "Check your age-graded scores against the target @recurring(quarterly)"
                - "Write a short end-of-season note on what moved the percentage"
            - name: Age-group record or ranking attempt
              description: |-
                ## Purpose
                Club, regional and national age-group records and rankings are within reach of more masters athletes than most of them expect, especially in less crowded events or in the first year of a new age band. An attempt means knowing the exact record, the rules for ratification such as officials, timing and course measurement, and choosing an event that meets them.

                ## Milestones
                1. The current records list for your age band downloaded.
                2. A record within reach chosen, with the exact mark noted.
                3. Ratification rules read and an eligible event chosen.
                4. The attempt made and paperwork submitted.
              priority: low
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "An attempt on a named age-group record is made at an eligible event, with ratification paperwork submitted if the mark is beaten."
                cadence: one-shot
                effort_hours_estimate: "10"
              tasks:
                - "Download the age-group records list for your club, region or country"
                - "Pick a record within reach and note the exact mark"
                - "Read the rules for ratification, such as timing and officials"
                - "Submit the ratification paperwork straight after the attempt"
            - name: Ten-year performance and longevity plan
              description: |-
                ## Purpose
                Thinking in decades rather than seasons is the habit that separates athletes still racing at 75 from those who stopped at 55. A one-page plan for the next ten years, setting out the events you want to do, the capacities you intend to keep, such as strength, balance and aerobic fitness, and the age bands you will target, gives each season a place in a longer story.

                ## Milestones
                1. A sentence on what you want to be able to do in sport ten years from now.
                2. The capacities you will protect listed, each with one marker.
                3. The years you move age band marked, with events to target.
                4. The plan reviewed and updated once a year.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A one-page ten-year plan with capacities, markers and age-band years exists and carries a dated yearly review."
                cadence: cyclic
                effort_hours_estimate: "4"
              tasks:
                - "Write what you want to be able to do in sport at the end of the next decade"
                - "List the capacities you will protect and one marker for each"
                - "Mark the years you move age band and the events to target"
                - "Review the ten-year plan on your birthday @recurring(yearly)"
---

# Masters Athlete Training (40+)

This area is for athletes over 40, and for retirees still competing or starting late, who want to keep training hard without paying for it in injuries and lost seasons. It runs from foundations (a health check, warning signs, medicines, honest baselines and an age-group goal) through the weekly machinery of strength, power, readiness checks and spaced hard days, then the knowledge of how ageing changes training, the decisions about volume, events and kit, dated races from a first masters event to an ageing-up year, the situations of comebacks, menopause, long-term conditions and retirement, and finally the specialist work of periodised seasons, championships, records and a ten-year plan.

What repeats is twice-weekly strength, a weekly power slot and bone-loading set, a Sunday plan that keeps hard days apart, a daily readiness check, a monthly training review and sleep check, quarterly protein and age-grade checks, and a yearly health and fitness retest near your birthday. The Metrics log, Habit tracker, Weekly meal plan, Sleep review, Purchase decision and Training program templates pair with the projects that name them. Installing adds all 50 projects as active, so archive the ones that are not for you yet.
