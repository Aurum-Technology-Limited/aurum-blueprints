---
id: fitness-sport.trail-ultra-running
name: Trail & Ultra Running
description: "A goal race chosen well, kit that passes the check, long runs and climbing built week by week, the navigation and safety skills hills demand, and a route from first trail race to 100 miles."
category: personal
version: 1.0.0
tags: [fitness-sport, trail-ultra-running, athlete, ultramarathon, mountain-running, vertical-gain, navigation, trail-kit]
author: Aurum Technology
starter_structure:
  templates:
    - purchase-decision
    - metrics-log
    - training-program
    - operational-checklist
    - trip
  pillars:
    - name: Fitness & Sport
      emoji: "🏋️"
      description: "Training, play and competition: building strength, endurance and skill in a sport or a gym, structuring blocks of work around events, recovering properly, and keeping the sessions honest with a log rather than a feeling."
      pillarFrontmatter:
        review_cadence: monthly
      areas:
        - name: Trail & Ultra Running
          description: "Training for trail races and ultramarathons: vertical gain, back-to-back long runs, kit, fuelling and navigation for runners going off-road and beyond 26 miles."
          projects:
            - name: Choosing your first trail or ultra goal race
              description: |-
                ## Purpose
                Picking the race first sets almost everything else: how much climbing to train for, whether you need night kit, and how many months the build must run. A first ultra six to nine months away, with cut-offs you could meet while walking the climbs, leaves room for a cold or a busy month at work.

                ## Milestones
                1. Three candidate races listed with distance, total ascent, cut-offs and entry dates.
                2. Each race's mandatory kit list, terrain description and rules read in full.
                3. One goal race chosen and its date written into your calendar.
                4. Entry confirmed, or the exact date and time the entry window opens recorded.

                ## Notes
                Popular mountain ultras open entries months ahead and some fill within minutes, so record the opening time as well as the date.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "One goal race chosen from a shortlist of three, with its date, distance, ascent and cut-offs written at the top of your training log."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "List three races within reach, with distance, ascent and cut-offs"
                - "Read the mandatory kit list and course notes for each race"
                - "Check each race date against work, family and holiday plans"
                - "Enter your chosen race or note when its entry window opens"
            - name: Current running volume and vertical baseline
              description: |-
                ## Purpose
                Before adding long runs and climbing, it helps to know what your legs already handle: weekly hours, longest run and how much ascent a normal week contains. Eight weeks of honest numbers plus one timed climb become the starting point every later increase is measured against.

                ## Milestones
                1. Weekly hours, distance and ascent totalled for each of the last eight weeks.
                2. The longest single run in that period recorded with its ascent.
                3. One timed effort on a known local climb completed and logged.
                4. A starting weekly volume chosen at or slightly below your recent average.

                ## Notes
                Measure in hours and metres climbed rather than kilometres alone. A 15 km fell run and a 15 km canal towpath run are different sessions.
              priority: high
              deadlineOffsetDays: 14
              frontmatter:
                mode: building
                output_kind: knowledge
                success_criteria: "A baseline note showing eight weeks of weekly hours and ascent, your longest recent run and one timed climb result."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Export the last eight weeks of runs from your watch or running app"
                - "Total weekly hours, distance and ascent for each of those weeks"
                - "Run a timed effort on one local climb of five to fifteen minutes"
                - "Repeat the timed climb and compare with the baseline @recurring(quarterly)"
            - name: Trail shoes matched to your terrain
              description: |-
                ## Purpose
                Road shoes slide on wet grass and mud, while a deep-lugged fell shoe feels harsh on hard forest tracks. Matching grip, cushioning and fit to the ground you will actually race on prevents falls, black toenails and a lot of late-race misery.

                ## Milestones
                1. The main surfaces of your goal race and local trails written down.
                2. Lug depth, drop, cushioning and toe box width compared across three models.
                3. Shoes tried on in the afternoon with your running socks, and on a slope if the shop has one.
                4. One pair bought and worn on at least three runs before any race.

                ## Notes
                Start from the **Purchase decision** template. Feet swell over long hours, so many ultra runners choose half a size up from their road shoes.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A pair of trail shoes chosen against your race's surfaces, bought, and worn on three training runs with no blisters or slipping."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Describe the surfaces of your goal race in two lines"
                - "Shortlist three trail shoes suited to those surfaces"
                - "Try the shortlisted shoes on in the afternoon with your running socks"
                - "Run three training sessions in the new pair before racing in it"
            - name: Hydration vest and core kit
              description: |-
                ## Purpose
                Once runs pass two hours off-road you need to carry water, food, a jacket and a phone, and a vest that bounces or rubs decides how long you are willing to stay out. Settling the vest and its core contents now means every long run doubles as a kit rehearsal.

                ## Milestones
                1. A vest chosen with enough capacity for your goal race's mandatory kit.
                2. Soft flasks or a bladder chosen and tested for leaks.
                3. Core contents packed: phone, waterproof, foil blanket, whistle, food and a small first aid kit.
                4. Two long runs completed wearing the fully loaded vest without chafing.

                ## Notes
                Fit the vest when it is full, not empty. A vest that feels perfect at two kilograms can rub badly at four.
              priority: high
              deadlineOffsetDays: 45
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A vest that holds your race's mandatory kit has been worn fully loaded on two long runs without chafing or bouncing."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Check the pack volume your goal race's mandatory kit needs"
                - "Try vests on in a shop with that kit packed inside"
                - "Pack the core kit and weigh the loaded vest"
                - "Wear the loaded vest on your next two long runs"
            - name: Solo trail run safety plan
              description: |-
                ## Purpose
                Trail runners twist ankles and get caught by weather miles from a road, often alone and out of signal. A short routine of sharing your route and return time, carrying minimum safety kit and knowing who to call turns a fall into an inconvenience instead of an emergency.

                ## Milestones
                1. A named person who receives your route and expected return time before every solo run.
                2. An agreed rule for what they do if you are a set time overdue.
                3. Whistle, foil blanket, charged phone and a warm layer carried on every remote run.
                4. The rescue number saved, plus any emergency text service your country offers registered.

                ## Notes
                Some countries, the UK among them, let you register to contact emergency services by text where voice signal is weak. Check what applies where you run.
              priority: high
              deadlineOffsetDays: 14
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A written safety plan names your route contact, your overdue rule and your minimum kit, and has been followed on every solo remote run for a month."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Ask one person to be your route contact for solo runs"
                - "Agree how overdue you can be before they call for help"
                - "Save the rescue number and register for emergency texting where available"
                - "Review the plan, the contact and the saved numbers @recurring(yearly)"
            - name: Local trail route library
              description: |-
                ## Purpose
                Knowing six or eight routes by their time, climb and bail-out points makes it easy to pick the right session on a weekday evening without studying a map. A small library also shows the gaps in your local terrain, such as no climb longer than ten minutes or no rocky ground.

                ## Milestones
                1. At least six routes recorded with distance, ascent, typical time and surface.
                2. Water points, toilets and early exit points noted for each route.
                3. Routes tagged by purpose: long run, hill repeats, technical, recovery.
                4. One gap in your local terrain named, with a plan to reach that terrain occasionally.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A route list of at least six local trails, each with distance, ascent, usual time, water points and a purpose tag."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "List the off-road routes you already run from home"
                - "Record distance, ascent and usual time for each route"
                - "Mark water, toilets and bail-out points on each route"
                - "Explore and add one new route to the list @recurring(monthly:5)"
            - name: Time on feet and ascent training log
              description: |-
                ## Purpose
                Ultra fitness builds over months and is easy to misjudge from one week to the next, especially when pace on hilly ground means little. Logging hours, ascent, longest run and one line on how you felt catches overreaching early and shows progress you would otherwise miss.

                ## Milestones
                1. A log with columns for date, duration, distance, ascent, effort and notes.
                2. Weekly totals of hours and ascent worked out every Sunday.
                3. Eight consecutive weeks logged without gaps.
                4. Each week's total compared with the previous four before the next week is planned.

                ## Notes
                Start from the **Metrics log** template. Two lines a week is enough; the habit matters more than the detail.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Eight consecutive weeks of hours and ascent totals recorded in the log, each with a short note on how the week felt."
                cadence: rolling
              tasks:
                - "Create a training log from the metrics log template"
                - "Add columns for hours, ascent, effort and a short note"
                - "Total the week's hours and ascent and compare with last month @recurring(weekly:sun)"
                - "Mark weeks lost to illness or work so later gaps make sense"
            - name: Medical certificate and rescue insurance for mountain races
              description: |-
                ## Purpose
                Some trail races, particularly in parts of Europe, require a signed medical certificate or proof of insurance covering mountain rescue, and runners without them are turned away at registration. Sorting both months ahead also prompts a sensible check-in with your doctor before training volume climbs.

                ## Milestones
                1. Your goal race's medical and insurance requirements read and noted.
                2. A doctor's appointment booked if a certificate or health check is needed.
                3. Insurance in place that explicitly covers trail running and mountain rescue in the race country.
                4. Copies of the certificate and policy saved on your phone and in your race folder.

                ## Notes
                Check the wording carefully. Some certificates must name competitive running specifically and be dated within the last twelve months.
              priority: high
              deadlineOffsetDays: 60
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Any required medical certificate is signed and in date, and an insurance policy covering mountain rescue in the race country is saved with your race documents."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Read your goal race's rules on medical certificates and insurance"
                - "Book a doctor's appointment if a certificate is required"
                - "Check whether your travel or sports policy covers mountain rescue"
                - "Renew rescue cover before the race season starts @recurring(yearly)"
            - name: Fixed weekly slots for long runs and hills
              description: |-
                ## Purpose
                Ultra training fails less from bad plans than from long runs that never fit into the week. Agreeing fixed slots with your household for the long run, the hill session and the back-to-back day removes the weekly negotiation and makes the plan realistic before it starts.

                ## Milestones
                1. Available training windows mapped across a normal week, including early mornings.
                2. Long run, back-to-back and hill session days agreed with the people you live with.
                3. A fallback slot named for weeks when the main one is lost.
                4. The slots blocked in a shared calendar for the next eight weeks.
              priority: medium
              deadlineOffsetDays: 14
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "Long run, back-to-back and hill session slots agreed at home and blocked in a shared calendar for eight weeks, with a named fallback slot."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Map the free windows in a normal week, early mornings included"
                - "Agree long run and hill session days with your household"
                - "Block the agreed slots in the shared calendar for eight weeks"
                - "Confirm next month's long run days at home @recurring(monthly:25)"
            - name: Weekly long run and back-to-back routine
              description: |-
                ## Purpose
                Long runs are the session ultras are built on, and back-to-back days teach tired legs to keep moving, which is exactly what the second half of a race feels like. Treating the weekend pair as a fixed routine, with time targets that rise gently and a lighter weekend every few weeks, builds durability without one heroic run costing a fortnight.

                ## Milestones
                1. A long run completed on most weekends for twelve weeks.
                2. Long run duration rising gradually, with a lighter weekend roughly every fourth week.
                3. Back-to-back weekends included at least twice a month during the main build.
                4. Each long run logged with time, ascent and how the final hour felt.

                ## Notes
                Set long runs by time rather than distance on hilly ground, and follow the progression your coach or plan sets rather than jumping volume sharply.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Twelve weeks of logged weekend long runs, with back-to-back days on at least two weekends a month during the build."
                cadence: rolling
              tasks:
                - "Write this weekend's long run duration and route in the log"
                - "Run the planned long run on trails @recurring(weekly:sat)"
                - "Run the shorter second day of the back-to-back on tired legs"
                - "Note in the log how the final hour of each long run felt"
            - name: Weekly hill and vertical gain session
              description: |-
                ## Purpose
                Climbing fitness comes from climbing, and a race with 2,000 metres of ascent quickly exposes training that had little. One dedicated hill session a week, as repeats on a single climb or a hilly loop, plus a weekly ascent total, builds the legs and lungs for long ascents.

                ## Milestones
                1. A hill session completed in most weeks for eight weeks.
                2. A weekly ascent target set in proportion to your goal race's total ascent.
                3. Weekly ascent recorded and trending towards that target.
                4. The same set of hill repeats timed at the start and end of the eight weeks.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Eight weeks of logged hill sessions, with weekly ascent recorded and a timed repeat set compared at the start and end."
                cadence: rolling
              tasks:
                - "Choose one climb or hilly loop to use for repeats"
                - "Set a weekly ascent target from your goal race profile"
                - "Run the weekly hill session and log its ascent @recurring(weekly:wed)"
                - "Time the same set of repeats again after eight weeks"
            - name: Strength work for downhill legs
              description: |-
                ## Purpose
                Long descents punish the quads through eccentric loading, which is why so many ultra runners end up walking the final downhills. Two short strength sessions a week built around step-downs, split squats, calves and hips make legs far more resistant to descent damage and help ankles cope with uneven ground.

                ## Milestones
                1. A 30 minute routine written with five or six exercises for quads, calves, hips and ankles.
                2. Two sessions a week completed for eight weeks.
                3. Loads or repetitions raised and recorded every second week.
                4. Strength sessions kept away from the day before the long run.

                ## Notes
                If you are new to lifting, ask a coach or physiotherapist to check your form in the first sessions.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Sixteen strength sessions logged over eight weeks, with loads or repetitions raised at least three times."
                cadence: rolling
              tasks:
                - "Write a 30 minute routine of step-downs, split squats, calf raises and hip work"
                - "Do a 30 minute strength session @recurring(weekly:tue,fri)"
                - "Raise the load or repetitions every second week and note it"
                - "Move any strength session that lands the day before a long run"
            - name: Gut training on every long run
              description: |-
                ## Purpose
                Stomach trouble ends more ultras than tired legs, and the gut adapts to eating on the move only with practice. Using every long run to rehearse the foods, drinks and hourly amounts you plan to race with makes race-day fuelling something your body already knows.

                ## Milestones
                1. An hourly carbohydrate and fluid target set with a sports dietitian or taken from your training plan.
                2. The foods and drinks your race's aid stations will offer identified.
                3. Each long run fuelled at the planned rate and the outcome logged.
                4. A short list of foods that worked, and those that did not, after six long runs.

                ## Notes
                Do not switch products in race week. If symptoms are severe or keep coming back, speak to a doctor or sports dietitian.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Six consecutive long runs fuelled at your planned hourly rate, each logged with what you ate and how your stomach coped."
                cadence: rolling
              tasks:
                - "Find out which foods and drinks your race aid stations will offer"
                - "Set your hourly fuel and fluid target with a dietitian or your plan"
                - "Log each hour's food and any stomach trouble after the long run @recurring(weekly:sun)"
                - "Try the race aid station foods on at least two long runs"
            - name: Shoe rotation and kit care
              description: |-
                ## Purpose
                Trail shoes lose grip and cushioning faster than road shoes, and a vest left with sticky flasks grows mould within a week. A monthly ten minute check, with distance tracked on each pair and a routine for washing flasks and reproofing jackets, keeps kit reliable and spreads the cost of replacements.

                ## Milestones
                1. Every pair of shoes in use logged with its start date and distance.
                2. A retirement point decided for each pair, based on lug wear and how they feel.
                3. Flasks, bladder and vest rinsed and dried after every long run.
                4. The waterproof jacket washed and reproofed at least once a season.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every pair of shoes in use shows its distance in your watch or log, and three monthly kit checks have been completed."
                cadence: rolling
              tasks:
                - "Add each pair of shoes to your watch app or log to track distance"
                - "Rinse flasks and hang the vest to dry after each long run"
                - "Check shoe distance, lugs and uppers for wear @recurring(monthly:12)"
                - "Wash and reproof the waterproof jacket at the start of autumn"
            - name: Foot care and blister prevention routine
              description: |-
                ## Purpose
                Blisters, lost toenails and waterlogged skin are among the commonest reasons runners slow to a shuffle in the second half of an ultra. A weekly foot routine and a tested combination of socks, lubricant or tape means the problem is solved in training rather than at an aid station at 2am.

                ## Milestones
                1. Toenails kept short and filed, checked every week.
                2. Two sock and lubricant combinations tested on runs over three hours.
                3. Recurring hot spots identified and a taping method practised for each.
                4. A small race foot kit packed: tape, lubricant, spare socks and blister dressings.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Two sock and lubricant combinations compared on runs over three hours, and a race foot kit packed with tape cut to fit your hot spots."
                cadence: rolling
              tasks:
                - "Note where you have had blisters or black toenails before"
                - "Trim toenails and check feet for hot spots @recurring(weekly:thu)"
                - "Test two sock and lubricant combinations on long runs"
                - "Practise taping your usual hot spots before a long run"
            - name: Monthly night run with a headtorch
              description: |-
                ## Purpose
                Any ultra much over 80 km, and most winter races, will put you on trails in the dark, where depth perception changes and familiar paths feel slow. One planned night run a month on a known route builds confidence with the headtorch, the cold and the quiet of the hills after sunset.

                ## Milestones
                1. A safe, familiar route chosen for night running.
                2. Night runs completed monthly with your race headtorch.
                3. Battery life at your usual brightness measured and noted.
                4. Pace on technical ground after dark compared with the same route by day.

                ## Notes
                Tell your route contact before every night run, and start on ground you know well.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Three monthly night runs logged with the race headtorch, including a measured battery life at your usual brightness."
                cadence: rolling
              tasks:
                - "Pick a familiar trail route for your first night run"
                - "Do a night run with your race headtorch @recurring(monthly:20)"
                - "Time how long the battery lasts on your usual setting"
                - "Note where you slowed in the dark compared with daylight"
            - name: Monthly ultra training block review
              description: |-
                ## Purpose
                Weekly numbers hide trends that a whole month makes obvious: ascent drifting down, long runs getting shorter, or the same niggle returning. Thirty minutes at the end of each month, checked against your race date, decides whether to push on, hold steady or ease off.

                ## Milestones
                1. Monthly totals of hours, ascent and long run duration compared with the previous month.
                2. Niggles, missed sessions and poor sleep listed honestly.
                3. One change for the coming month decided and written down.
                4. Weeks to race day counted and the plan checked against them.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Three consecutive month-end reviews written, each with totals compared and one change for the following month recorded."
                cadence: rolling
              tasks:
                - "Book a 30 minute review slot at the end of this month"
                - "Compare this month's hours, ascent and long runs with last month @recurring(monthly:28)"
                - "Ask the agent to summarise the month's log notes into three trends"
                - "Write one change for next month at the top of the log"
            - name: Conditions check before mountain days
              description: |-
                ## Purpose
                Mountain weather can turn a pleasant ridge run into a dangerous one within an hour, and the valley forecast rarely shows it. Checking a mountain-specific forecast, daylight, river levels and closures before each big day, with a lower plan B ready, is a habit experienced hill runners never skip.

                ## Milestones
                1. A mountain-specific forecast source chosen for the hills you run.
                2. A low-level plan B route ready for each regular high route.
                3. Summit wind, temperature, visibility and daylight checked before each big day.
                4. A turnaround time set before every long mountain run.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every high route in your library has a written plan B, and the forecast check is logged before each mountain day for two months."
                cadence: rolling
              tasks:
                - "Bookmark a mountain-specific forecast for the hills you run"
                - "Write a low-level plan B for each high route you use"
                - "Check summit wind, temperature and daylight for the weekend @recurring(weekly:fri)"
                - "Set a turnaround time before each long mountain run"
            - name: Technical descending on loose and rocky ground
              description: |-
                ## Purpose
                Descending is where trail races are won and lost, and also where most falls happen. Learning to keep a quick cadence, look three steps ahead and use your arms for balance can save minutes on every descent and cut the braking that wrecks quads.

                ## Milestones
                1. A short technical descent near home chosen as a practice slope.
                2. Six short skills sessions completed on cadence, line choice, foot placement and arms.
                3. The practice descent timed before the first and after the sixth session.
                4. One guided skills session or club descent workshop attended.

                ## Notes
                Practise on fresh legs at the start of a run, not at the end of a long one when falls are likelier.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Six descending sessions logged and the practice descent run faster after them than before, with no falls in the final two sessions."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Choose a short rocky or rooty descent to practise on"
                - "Run six short descent sessions focused on quick, light steps"
                - "Time the practice descent before and after the six sessions"
                - "Book a guided trail skills session or club descent workshop"
            - name: Power hiking and pole technique
              description: |-
                ## Purpose
                On steep climbs most ultra runners hike, including the leaders, and the gap between an efficient and a weak power hiker can be ten minutes per climb. Practising hands-on-knees and pole hiking on steep ground makes climbs faster and saves running legs for the flatter sections.

                ## Milestones
                1. A steep climb chosen for hiking practice.
                2. Hands-on-knees hiking timed against running the same climb.
                3. Pole planting, stowing and retrieving practised on at least four sessions, if your race allows poles.
                4. A rule written for when to hike and when to run on your race's gradients.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A written hike-or-run rule for your goal race, based on timed comparisons of hiking and running on the same steep climb."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Find a climb steep enough that running it feels wasteful"
                - "Time yourself running and then hiking the same climb"
                - "Practise planting and stowing poles on four hill sessions"
                - "Write a hike-or-run rule based on gradient and effort"
            - name: Map and compass navigation for trail races
              description: |-
                ## Purpose
                Many mountain races require a map and compass in the mandatory kit, and course markers do get moved, missed or lost in cloud. Basic skills such as setting the map, taking a bearing and judging distance mean a wrong turn costs minutes instead of hours.

                ## Milestones
                1. Map symbols and contour lines for your local hills read with confidence.
                2. A bearing taken and followed across open ground in good visibility.
                3. A navigation course or club skills session completed.
                4. A familiar hill route followed using only map and compass.

                ## Notes
                A GPS watch is a backup, not a replacement: batteries die and screens fail in heavy rain.
              priority: high
              deadlineOffsetDays: 90
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A navigation course completed and a hill route followed using only map and compass, both recorded in your log."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "Buy or download the local map at a walking scale"
                - "Book a navigation course or a club skills evening"
                - "Practise taking and following a bearing on open ground"
                - "Practise one navigation leg during a training run @recurring(monthly:15)"
            - name: Following a GPX course on your watch
              description: |-
                ## Purpose
                Most ultras publish a course file and some require it loaded on a device. Knowing how to load it, read the off-course alert, see the next climb and stretch battery life is a skill to practise on training runs, not to learn on the start line.

                ## Milestones
                1. A course file loaded onto your watch and a phone mapping app.
                2. Off-course alerts and the upcoming-climb view tested on a training run.
                3. Battery-saving modes tried and their effect on track accuracy noted.
                4. The full race course loaded and checked against the latest route a week before the race.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A local route followed from a course file with the off-course alert tested, and battery use compared across two GPS modes."
                cadence: phased
                effort_hours_estimate: "3"
              tasks:
                - "Download a course file of a local route you know"
                - "Load it onto your watch and a phone mapping app"
                - "Follow the route and step off course to test the alert"
                - "Compare battery use between normal and power-saving modes"
            - name: Pacing climbs by effort, not pace
              description: |-
                ## Purpose
                Pace means little on a 20 percent slope, and runners who chase their flat pace on the early climbs pay for it in the last third. Learning to hold a steady effort, judged by breathing, perceived effort or heart rate, keeps you even from the first climb to the last.

                ## Milestones
                1. A personal effort scale written for easy, steady and hard on climbs.
                2. Three long runs paced by effort on every climb.
                3. Effort on early and late climbs compared after each of those runs.
                4. A climb pacing rule for your goal race written into the race plan.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Three long runs logged with effort on each climb, and a written climb pacing rule added to your race plan."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Describe what easy, steady and hard feel like on a climb"
                - "Pace every climb on your next three long runs by effort alone"
                - "Compare your effort on the first and last climbs of each run"
                - "Write a climb pacing rule into your race plan"
            - name: Reading race profiles and cut-off times
              description: |-
                ## Purpose
                An ultra's elevation profile and cut-off table show where the race will hurt and how much spare time you have at each checkpoint. Turning them into a simple section-by-section sheet shows whether your target is realistic and where to bank or spend time.

                ## Milestones
                1. The race profile divided into sections between aid stations.
                2. Distance, ascent and descent for each section noted.
                3. A time estimate for each section based on similar terrain in training.
                4. Margin against each cut-off calculated, with the tightest one highlighted.

                ## Notes
                Expect sections late in the race to take far longer than the same terrain fresh. Add a generous slowdown to the second half.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: artifact
                success_criteria: "A section-by-section sheet for your goal race showing estimated arrival times and the margin against every cut-off."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Download the race profile and cut-off table"
                - "Split the profile into sections between aid stations"
                - "Estimate each section's time from similar terrain in your log"
                - "Ask the agent to turn the estimates into a pacing sheet with cut-off margins"
            - name: Cold, wet and hypothermia awareness on the hills
              description: |-
                ## Purpose
                Wind and rain at height can chill a slow-moving runner dangerously fast, especially late in a race when energy is low. Knowing the early signs in yourself and others, and which kit buys time, matters more on mountain ultras than any single training session.

                ## Milestones
                1. Early signs of hypothermia learned from a recognised first aid or mountain safety source.
                2. A cold-weather vest list written: hat, gloves, waterproof jacket and trousers, spare layer.
                3. One run completed in poor weather carrying the full kit, practising putting layers on fast.
                4. A plan written for helping a runner who cannot continue: shelter, insulate, call.

                ## Notes
                A mountain or outdoor first aid course is the best way to learn this properly.
              priority: high
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A cold-weather kit list and a written plan for an incapacitated runner exist, and one poor-weather run with full kit is logged."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Read a mountain safety body's guidance on hypothermia signs"
                - "Write your cold-weather vest list"
                - "Practise layering up quickly with gloves on during a wet run"
                - "Check the cold-weather kit in your vest each autumn @recurring(yearly)"
            - name: Heat acclimatisation for hot races
              description: |-
                ## Purpose
                Desert ultras and summer mountain races can be far hotter than your home climate, and heat slows everyone down. A planned acclimatisation period in the final weeks, plus cooling tactics rehearsed in training, helps you cope, and is safer when agreed with someone who knows your health.

                ## Milestones
                1. Race-day temperatures from previous editions researched.
                2. An acclimatisation plan agreed with a coach, and with your doctor if you have any health conditions.
                3. Cooling methods tested in training: ice in a buff, wet cap, shade stops.
                4. Signs of heat illness written on your race card.

                ## Notes
                Heat illness can be serious. Treat confusion, stopping sweating or collapse as an emergency.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "An acclimatisation plan agreed with a coach or doctor, at least two cooling methods tested in training, and heat illness signs on your race card."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Look up race-day temperatures from the last three editions"
                - "Agree an acclimatisation plan with your coach or doctor"
                - "Test ice in a buff and a wet cap on a warm training run"
                - "Add the signs of heat illness to your race card"
            - name: Deciding whether to race with poles
              description: |-
                ## Purpose
                Poles help some runners on long steep climbs and get in the way for others, and some races ban them outright. Testing a borrowed pair on real terrain for a few weeks before deciding avoids buying poles you abandon, or racing without them when they would have saved your legs.

                ## Milestones
                1. Your goal race's rules on poles checked.
                2. A pair borrowed or hired and used on at least four hilly runs.
                3. Climb times and leg fatigue with and without poles compared.
                4. A decision recorded, with a pole length and stowing method if the answer is yes.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A recorded decision on poles, based on at least four hilly runs with them and your race's rules."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Check whether your goal race allows poles"
                - "Borrow or hire a pair of folding running poles"
                - "Use the poles on four hilly runs and note climb times"
                - "Record your decision and, if yes, the length to buy"
            - name: GPS watch with ultra battery life
              description: |-
                ## Purpose
                Watches that die at hour fourteen leave you without navigation, time and the course in the night sections. Comparing real battery life in GPS mode, navigation features and charging on the move against your longest planned race decides whether your current watch is enough or needs replacing.

                ## Milestones
                1. Your longest planned race time estimated, with a safety margin added.
                2. Your current watch's battery tested on a long run in full GPS mode.
                3. Charging on the move with a small power bank tested.
                4. A decision recorded: keep, charge mid-race, or replace.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A recorded keep, charge or replace decision for your watch, based on measured battery life against your longest race estimate."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Estimate your longest planned race time and add a margin"
                - "Record battery drain on your next long run in full GPS mode"
                - "Test charging the watch from a power bank while running"
                - "Record whether to keep, charge mid-race or replace the watch"
            - name: Race-spec waterproof jacket and trousers
              description: |-
                ## Purpose
                Mountain races often specify a hooded waterproof jacket with taped seams, sometimes with a minimum waterproof rating, and kit checks enforce it. Choosing a set that meets the rules and still packs small avoids failing a check, or carrying a heavy jacket for 100 km.

                ## Milestones
                1. Your race's exact waterproof requirements copied into your kit list.
                2. Your current jacket and trousers checked against them.
                3. Two or three compliant options compared on weight, packed size and hood fit.
                4. A compliant set owned and tested in heavy rain on a long run.

                ## Notes
                Keep the product page or label showing the waterproof rating; some kit checks ask for proof.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A waterproof jacket and trousers that meet your race's written specification are owned, with proof of the rating saved."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Copy your race's waterproof jacket and trouser rules into your kit list"
                - "Check your current waterproofs against those rules"
                - "Compare compliant options on weight and packed size"
                - "Save proof of the waterproof rating with your race documents"
            - name: Headtorch and battery system for night sections
              description: |-
                ## Purpose
                Races with night sections usually require a main headtorch, a spare light and spare batteries, and a dim beam on rocky ground costs time and confidence. Working out how many hours of darkness you face and building a lighting system that covers them, with margin, removes one of the biggest night-time worries.

                ## Milestones
                1. Hours of darkness in your race estimated from your pacing sheet and sunset times.
                2. Main headtorch burn time at a usable brightness measured.
                3. Spare light and batteries or power bank chosen to cover the gap with margin.
                4. Battery swap practised in the dark with cold hands.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A lighting system whose measured burn time covers your race's estimated hours of darkness plus a margin, with a battery swap practised."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Estimate your hours of darkness from sunset times and your pacing sheet"
                - "Measure your headtorch's burn time at a usable brightness"
                - "Choose a spare light and batteries that cover the gap"
                - "Practise a battery swap in the dark wearing gloves"
            - name: Coach or self-coached ultra plan
              description: |-
                ## Purpose
                Self-coaching from a book or app suits many runners, while others benefit from someone adjusting the plan every week and spotting overtraining early. Comparing the cost, contact and qualifications of two or three coaches against a well-chosen published plan settles the question before the build starts.

                ## Milestones
                1. What you need from coaching written down: accountability, structure, injury history or race experience.
                2. Two or three coaches compared on price, contact, qualifications and ultra results.
                3. One published plan for your race distance reviewed as the self-coached option.
                4. A decision made and the plan or coach in place.

                ## Notes
                Ask a coach how they adjust a plan when you miss a week; the answer says more than their race results.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A recorded choice between a named coach and a named published plan, with the reasons and monthly cost written down."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Write down what you want from a coach in three lines"
                - "Compare two or three ultra coaches on price and contact"
                - "Review one published plan for your race distance"
                - "Record your decision and start the plan or book the coach"
            - name: Race kit weight and packing audit
              description: |-
                ## Purpose
                Every gram in the vest is carried up every climb, but cutting the wrong item can fail a kit check or leave you cold. Laying out the full race kit, weighing it and packing it the same way every time makes kit checks fast and finds the easy savings.

                ## Milestones
                1. Every item on the mandatory list matched to a specific piece of kit you own.
                2. The full race kit weighed and the heaviest five items noted.
                3. Lighter compliant swaps considered for the heaviest items.
                4. A packing layout written so the same item is always in the same pocket.

                ## Notes
                Start from the **Operational checklist** template. Pack food and the jacket where you can reach them without taking the vest off.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A packing checklist covering every mandatory item, with the total kit weight and each item's pocket recorded."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Lay out every item on your race's mandatory kit list"
                - "Weigh the full kit and note the five heaviest items"
                - "Write which pocket each item goes in"
                - "Pack the vest from the checklist and time how long it takes"
            - name: Race debrief and changes for the next one
              description: |-
                ## Purpose
                Ultras throw up lessons that fade within a week: the gel you could not face, the climb you went out too hard on, the drop bag item you never touched. Writing a debrief within seven days of each race, finished or not, turns those lessons into specific changes for next time.

                ## Milestones
                1. Section split times compared with your plan.
                2. What went well, what went wrong and what surprised you written down.
                3. Fuelling, kit and pacing problems each linked to a specific change.
                4. Three changes for the next race added to your training plan.
              priority: medium
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A written debrief within seven days of each race, ending with three specific changes added to the next training plan."
                cadence: cyclic
              tasks:
                - "Download your race file and the official split times"
                - "Write what went well, badly and unexpectedly in each section"
                - "Link each problem to one change in training, kit or fuelling"
                - "Add the three most important changes to your next plan"
            - name: First trail race of 20 to 30K
              description: |-
                ## Purpose
                A shorter trail race is the cheapest way to learn about mass starts on narrow paths, aid stations, kit checks and pacing on hills before a first ultra. Choosing one eight to sixteen weeks out also gives the training a nearer target.

                ## Milestones
                1. A trail race of 20 to 30 km with real climbing entered.
                2. The race used to test shoes, vest, fuelling and pacing on climbs.
                3. Race completed and section splits recorded.
                4. Two lessons from the race written into your goal race plan.
              priority: medium
              deadlineOffsetDays: 120
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A trail race of 20 to 30 km completed, with splits logged and two lessons added to your goal race plan."
                cadence: one-shot
                effort_hours_estimate: "10"
              tasks:
                - "Find trail races of 20 to 30 km within the next four months"
                - "Enter one with at least some sustained climbing"
                - "Race in the shoes, vest and fuel you plan to use later"
                - "Write two lessons from the race into your goal race plan"
            - name: First 50K ultra
              description: |-
                ## Purpose
                Fifty kilometres is the usual first ultra, only a little past the marathon in distance but very different off-road, with hiking, eating and terrain mattering more than pace. A structured build of four to six months, ending in a taper and a race plan, gets you to the start line healthy and to the finish with something left.

                ## Milestones
                1. A 50K entered and a training programme to its date in place.
                2. The longest training runs, back-to-backs and hill sessions completed as planned.
                3. A race plan written: pacing by section, fuelling per hour, kit and drop bag if allowed.
                4. Race completed, with a debrief written within a week.

                ## Notes
                Start from the **Training program** template. Choose a race whose cut-offs allow walking much of the climbing.
              priority: high
              deadlineOffsetDays: 240
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A 50 km ultra finished inside the cut-offs, with a written race plan beforehand and a debrief within a week."
                cadence: phased
                effort_hours_estimate: "150"
              tasks:
                - "Set up a training programme from the template counted back from race day"
                - "Mark the three longest training weekends in your calendar"
                - "Write a race plan covering pacing, fuel, kit and drop bags"
                - "Taper over the final two weeks as your plan sets out"
            - name: Course recce of your goal race
              description: |-
                ## Purpose
                Running key sections of the course in training shows what the profile cannot: how runnable the descents are, where the path is hard to follow, and what the final climb feels like on tired legs. Even one recce weekend makes race day feel familiar instead of foreign.

                ## Milestones
                1. The sections most worth seeing chosen: the hardest climb, a technical descent, the final third.
                2. A recce weekend planned with travel, accommodation and safe access to those sections.
                3. The sections run with notes on runnability, navigation and water.
                4. Recce notes added to your pacing sheet and race plan.
              priority: medium
              deadlineOffsetDays: 150
              frontmatter:
                mode: event
                output_kind: knowledge
                success_criteria: "At least two key sections of the goal race run in training, with notes on terrain and navigation added to the race plan."
                cadence: one-shot
                effort_hours_estimate: "16"
              tasks:
                - "Pick the two or three course sections most worth seeing"
                - "Plan travel and access for a recce weekend"
                - "Run the sections and note terrain, water and tricky junctions"
                - "Add the recce notes to your pacing sheet"
            - name: Mountain training camp weekend
              description: |-
                ## Purpose
                Runners who live far from big hills can pack weeks of climbing into a long weekend in the mountains, and it is the best rehearsal of kit, fuel and back-to-back legs before a mountain race. Planned well, with routes, weather options and recovery, it is a highlight of the build rather than an injury risk.

                ## Milestones
                1. Dates and a base chosen with access to long climbs.
                2. Two or three days of routes planned, each with a low-level alternative.
                3. Training volume eased the week before so you arrive fresh.
                4. Camp completed and total hours and ascent logged.

                ## Notes
                Start from the **Trip** template. Join a guided camp if you are new to mountain terrain.
              priority: low
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A two or three day mountain camp completed with routes, weather alternatives and total ascent recorded in your log."
                cadence: one-shot
                effort_hours_estimate: "24"
              tasks:
                - "Choose dates and a base with access to long climbs"
                - "Plan two or three days of routes with low-level alternatives"
                - "Book travel and accommodation for the camp"
                - "Log hours and ascent for each camp day"
            - name: Drop bags and crew plan for a 100K
              description: |-
                ## Purpose
                At 100 km and beyond, what waits at the drop bag points and what your crew does in the four minutes they see you can decide whether you finish. A written plan of what goes in each bag, when you expect to arrive and what you need at each stop removes decisions you are too tired to make.

                ## Milestones
                1. Drop bag points and crew-access points listed from the race guide.
                2. Expected arrival times at each point taken from your pacing sheet.
                3. Contents of each drop bag listed: food, socks, layers, batteries, any medication.
                4. A one-page crew sheet written with times, needs and what to say if you want to stop.

                ## Notes
                Agree with your crew in advance what they will say if you want to quit at a checkpoint. Most regretted DNFs happen at warm aid stations.
              priority: medium
              frontmatter:
                mode: event
                output_kind: deliverable
                success_criteria: "A labelled packing list for every drop bag and a one-page crew sheet with arrival times, shared with your crew a week before the race."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "List drop bag and crew access points from the race guide"
                - "Add expected arrival times from your pacing sheet"
                - "Write the contents of each drop bag"
                - "Ask the agent to draft a one-page crew sheet from your notes"
                - "Walk your crew through the sheet a week before the race"
            - name: Race week logistics for a mountain ultra
              description: |-
                ## Purpose
                Race week brings travel, registration, kit checks, briefings and often a 4am start in an unfamiliar town. Planning every step, from what to eat the night before to how you get back from the finish, protects the months of training from a missed bus or a forgotten item.

                ## Milestones
                1. Travel, accommodation and transfers to the start and from the finish booked.
                2. Registration times, kit check rules and race briefing details noted.
                3. Race-day timeline written from alarm to start line.
                4. Kit packed and checked against the mandatory list two days before.

                ## Notes
                Start from the **Trip** template. Arrive early enough to collect your number without rushing, and check whether a briefing is compulsory.
              priority: medium
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A race week plan covering travel, registration, a race-morning timeline and return from the finish, with kit checked two days before."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Book travel and accommodation near the start"
                - "Note registration, kit check and briefing times"
                - "Write a race-morning timeline from alarm to start line"
                - "Check every mandatory item two days before the race"
            - name: Road runner moving to trails
              description: |-
                ## Purpose
                Road runners usually have the engine for trails but not the ankles, the climbing legs or the patience to slow down on rough ground. Eight weeks of gradually swapping road runs for trail runs, with hills and some ankle work, lets the body catch up before the distances grow.

                ## Milestones
                1. One road run a week replaced with a trail run in the first fortnight.
                2. Half of weekly running on trails by week six.
                3. Ankle and balance exercises added twice a week.
                4. Runs on trails judged by effort and time, with road pace no longer the target.

                ## Notes
                Expect trail pace to be much slower than road pace for the same effort. That is normal, not lost fitness.
              priority: medium
              deadlineOffsetDays: 56
              frontmatter:
                mode: building
                output_kind: habit
                success_criteria: "By week eight, at least half of your weekly running is on trails, logged by time and effort, with ankle work done twice a week."
                cadence: phased
                effort_hours_estimate: "40"
              tasks:
                - "Swap one road run this week for a trail run"
                - "Add single-leg balance and ankle exercises after two runs a week"
                - "Move to half your weekly running on trails by week six"
                - "Set trail runs by time and effort instead of road pace"
            - name: Ultra training from a flat city
              description: |-
                ## Purpose
                City runners can still prepare for mountain races, but the climbing has to be found or made. Stairwells, multi-storey car parks, treadmill incline sessions, bridges and a stair climber can replace much of the vertical a hill runner gets for free.

                ## Milestones
                1. Every local source of climbing listed: stairs, bridges, car parks, a treadmill with incline.
                2. One indoor or urban vertical session each week built into the plan.
                3. Weekly ascent from urban sources tracked towards your race's needs.
                4. At least one trip to real hills booked before the race.

                ## Notes
                Urban climbing rarely trains descending, so add step-downs and any downhill you can find.
              priority: low
              frontmatter:
                mode: building
                output_kind: habit
                success_criteria: "Eight weeks of one urban or treadmill vertical session a week logged, with weekly ascent tracked and a hills trip booked."
                cadence: phased
                effort_hours_estimate: "30"
              tasks:
                - "List every staircase, bridge and incline treadmill you can use"
                - "Plan one urban vertical session a week"
                - "Track weekly ascent from those sessions in your log"
                - "Book one weekend in real hills before your race"
            - name: Ultra training around young children
              description: |-
                ## Purpose
                Long runs that take four hours on a Saturday are a big ask in a house with small children, and resentment ends more training plans than injury. Building the plan around early starts, swaps with your partner and family-friendly race weekends keeps it fair to everyone.

                ## Milestones
                1. A weekly time budget for training agreed with your partner.
                2. Long runs scheduled for early starts that end before the family day begins.
                3. A swap arrangement in place so your partner gets equal time for their own pursuits.
                4. A goal race chosen where the family can come along or that fits school holidays.

                ## Notes
                Running to or from work, or around a sports club during a child's session, adds time on feet without taking more from the family.
              priority: medium
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A weekly training time budget agreed at home, with long runs finishing before an agreed time on at least six weekends."
                cadence: phased
                effort_hours_estimate: "3"
              tasks:
                - "Agree a weekly training time budget with your partner"
                - "Set a time by which Saturday long runs must be finished"
                - "Agree how your partner gets equal time for their own plans"
                - "Look for goal races that suit a family weekend away"
            - name: Time-crunched ultra build on seven hours a week
              description: |-
                ## Purpose
                Plenty of ultra finishers train around demanding jobs with six to eight hours a week. The plan has to be stripped to what matters most for the race: one long run, one hill session, short strength work and running commutes where possible.

                ## Milestones
                1. A weekly time budget of around seven hours agreed with yourself and your household.
                2. Sessions ranked by value: long run, hills, strength, then easy running.
                3. Run commutes or lunchtime runs tested for fit with work.
                4. A goal race chosen whose cut-offs suit a lower training volume.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A written week of training that fits around seven hours, followed for eight weeks with the long run and hill session done in at least six."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Count the hours you can honestly train in a normal week"
                - "Rank sessions so the long run and hills come first"
                - "Test a run commute or lunchtime run once this week"
                - "Write a seven hour training week and follow it for eight weeks"
            - name: Coming back after a DNF or a long break
              description: |-
                ## Purpose
                A did-not-finish or a year away from long runs can knock confidence more than fitness. Rebuilding with an honest look at what went wrong, a shorter comeback race and a gradual return to long runs gets you back to the start line with a better plan.

                ## Milestones
                1. The reasons for the DNF or the break written down honestly.
                2. Current weekly hours and longest run recorded as the new baseline.
                3. A shorter comeback race chosen eight to sixteen weeks out.
                4. Long runs rebuilt gradually to the length you managed before.

                ## Notes
                If injury caused the break, follow your physiotherapist's return plan before adding distance.
              priority: medium
              frontmatter:
                mode: building
                output_kind: habit
                success_criteria: "A written reason for the DNF or break, a new baseline recorded and a comeback race completed within sixteen weeks."
                cadence: phased
                effort_hours_estimate: "20"
              tasks:
                - "Write down why the last race or season ended early"
                - "Record current weekly hours and longest run as a new baseline"
                - "Choose a shorter comeback race eight to sixteen weeks out"
                - "Increase the long run gradually towards your previous longest"
            - name: Crewing or pacing a friend's ultra
              description: |-
                ## Purpose
                Being on someone else's crew or pacing them through the night is one of the best ways to learn how ultras actually unfold. Preparing properly, knowing the rules on pacers, the crew access points and what they want said when it gets hard, makes you a help rather than a passenger.

                ## Milestones
                1. The race rules on pacers and crew access read.
                2. The runner's plan, arrival times and needs at each point understood.
                3. Your own kit, food, transport and sleep for a long day and night sorted.
                4. A short debrief written with what you learned for your own racing.
              priority: low
              frontmatter:
                mode: service
                output_kind: event-completion
                success_criteria: "A friend's ultra crewed or paced to the end of your role, with their crew sheet followed and your own lessons written down."
                cadence: one-shot
                effort_hours_estimate: "20"
              tasks:
                - "Read the race's rules on pacers and crew access"
                - "Go through the runner's crew sheet and needs with them"
                - "Pack your own kit, food and warm layers for a long night"
                - "Write down what you learned for your own races"
            - name: Qualifying points and lottery entries for major ultras
              description: |-
                ## Purpose
                Some of the best-known mountain ultras require qualifying races or points and then run a lottery, so getting in can take years of planning. Tracking which races give qualifying status, when lotteries open and how many entries you hold keeps a dream race on a realistic timeline.

                ## Milestones
                1. The qualifying rules for one or two target races recorded.
                2. Qualifying races you have completed and their validity dates listed.
                3. Upcoming lottery windows and any extra-chance rules noted.
                4. A two to three year plan of qualifiers leading to the target race.
              priority: low
              frontmatter:
                mode: research
                output_kind: artifact
                success_criteria: "A qualifier tracker listing each target race's rules, your valid qualifying results with expiry dates and the next lottery window."
                cadence: cyclic
              tasks:
                - "Record the qualifying rules for your target race"
                - "List your completed qualifying races and their expiry dates"
                - "Note the next lottery window in your calendar"
                - "Check lottery dates and qualifier expiry @recurring(quarterly)"
            - name: First 100-mile race build
              description: |-
                ## Purpose
                A hundred miles usually means one or two nights without sleep, more than a day on your feet and problems that never show up in a 50K. A year-long build with progressively longer races, night practice, sleep strategy and a crew plan is how most finishers get there.

                ## Milestones
                1. A 100-mile race chosen with a stepping-stone 50 or 100 km race before it.
                2. Training through night sections and at least one very long back-to-back weekend.
                3. A sleep and caffeine strategy agreed with your coach or plan.
                4. Crew, pacers and drop bags arranged for the race.
                5. Race completed, with a debrief written within a week.

                ## Notes
                Problems compound over 100 miles. Fix small issues, a hot spot or a chafe, the moment you notice them.
              priority: high
              deadlineOffsetDays: 365
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A 100-mile race started with crew and drop bags in place, a stepping-stone race done beforehand and a debrief written afterwards."
                cadence: phased
                effort_hours_estimate: "350"
              tasks:
                - "Choose a 100-mile race and a stepping-stone race before it"
                - "Plan the longest back-to-back weekend of the build"
                - "Agree a sleep and caffeine strategy with your coach"
                - "Confirm crew and pacers for the race weekend"
            - name: Multi-day stage race preparation
              description: |-
                ## Purpose
                Self-supported stage races in deserts or mountains mean carrying a week of food and kit, sleeping in camps and running again on tired legs each morning. Preparation centres on pack weight, foot care and training with the full pack over consecutive days.

                ## Milestones
                1. The race's compulsory kit and minimum calorie rules recorded.
                2. Food for every stage planned and weighed.
                3. Three or more consecutive training days run with the full race pack.
                4. Camp routine practised: sleeping kit, cooking, foot care each evening.

                ## Notes
                These races usually need vaccinations, a medical form and travel insurance; start on them early.
              priority: medium
              deadlineOffsetDays: 300
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A full race pack weighed and packed to the rules, three consecutive training days run with it and the race started."
                cadence: phased
                effort_hours_estimate: "200"
              tasks:
                - "Record the compulsory kit and minimum food rules"
                - "Plan and weigh food for every stage"
                - "Run three consecutive days with the full race pack"
                - "Practise the evening camp routine at home"
            - name: Skyrunning and altitude race preparation
              description: |-
                ## Purpose
                Skyraces and high mountain ultras combine steep, exposed ground with altitude above 2,500 metres, where breathing and pace change. Preparing means scrambling confidence, a plan for altitude acclimatisation and kit for fast weather changes.

                ## Milestones
                1. The race's highest points, exposure and technical sections identified.
                2. Scrambling and steep ground practised with an experienced partner or guide.
                3. An altitude plan agreed: arriving early, a few nights high, or a guided camp.
                4. Signs of altitude sickness and the rule to descend written on your race card.

                ## Notes
                Talk to your doctor about altitude if you have heart or lung conditions.
              priority: low
              frontmatter:
                mode: building
                output_kind: knowledge
                success_criteria: "An altitude plan agreed with your coach or doctor and at least two guided or partnered scrambling days logged before the race."
                cadence: phased
                effort_hours_estimate: "40"
              tasks:
                - "Study the race's highest and most exposed sections"
                - "Book a scrambling day with a guide or experienced partner"
                - "Plan when to arrive to allow some altitude adjustment"
                - "Add altitude sickness signs to your race card"
            - name: Fastest known time attempt on a local route
              description: |-
                ## Purpose
                Fastest known times on classic routes give experienced trail runners a goal outside the race calendar. A credible attempt needs a recognised route, a clear rule on supported or unsupported, GPS evidence and a weather window.

                ## Milestones
                1. A recognised route chosen and its current record and rules checked.
                2. Supported or unsupported style decided and stated publicly beforehand if the rules ask.
                3. The route recced in sections with splits from the record noted.
                4. Attempt made in a good weather window with a GPS track recorded and submitted.

                ## Notes
                Tell your route contact the plan and expected finish; these attempts are often solo and remote.
              priority: low
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A fastest known time attempt run on a recognised route in a chosen weather window, with a GPS track submitted or recorded."
                cadence: one-shot
                effort_hours_estimate: "30"
              tasks:
                - "Choose a recognised route and read its current record rules"
                - "Decide on supported or unsupported style"
                - "Recce the route in sections with record splits"
                - "Pick a weather window and record the attempt by GPS"
---

# Trail & Ultra Running

This area is for runners leaving the road for trails and hills, and for those stepping past the marathon into ultra distances. It opens with the foundations (a goal race, a baseline of hours and ascent, shoes, vest, a safety plan and a log), then the weekly machinery of long runs, climbing, strength, fuelling practice and kit care, the skills of descending, hiking, navigation and pacing by effort, the kit and coaching decisions, the races and recces themselves, versions for road converts, flat-city runners, parents and the time-pressed, and finally the specialist work of 100-milers, stage races, skyrunning and record attempts.

What repeats is the Saturday long run with its back-to-back day, a midweek hill session, two short strength sessions, a Friday conditions check, a monthly night run and a month-end block review, plus a quarterly climb test and a yearly check of insurance and cold-weather kit. The Purchase decision, Metrics log, Training program, Operational checklist and Trip templates pair with the projects that name them. Installing adds all 50 projects as active, so archive the ones that are not for you yet.
