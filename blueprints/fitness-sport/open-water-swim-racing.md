---
id: fitness-sport.open-water-swim-racing
name: Open Water Swim Racing
description: "A first race and a supervised venue chosen, a wetsuit that fits, sighting, drafting and mass starts practised, cold water logged safely, and a route from a first 1500 m swim to 10 km marathons and channel crossings."
category: personal
version: 1.0.0
tags: [fitness-sport, open-water-swim-racing, athlete, open-water, wetsuit, sighting, cold-water, marathon-swimming]
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
        - name: Open Water Swim Racing
          description: "Training for open water swims and races with acclimatisation, sighting, wetsuit practice and safety planning for lakes, rivers and the sea."
          projects:
            - name: Choosing your first open water race distance
              description: |-
                ## Purpose
                Open water events run from 750 m dips to 10 km marathon swims, and the right first race is one you can already swim continuously in a pool with a quarter to spare. Picking the distance and the event early fixes the date your build works back from, and whether you will face a sheltered lake, a river with flow or the sea.

                ## Milestones
                1. Three events within reach listed with distance, venue type, date and cut-off time.
                2. Your current longest continuous pool swim written beside each distance.
                3. One race chosen whose distance you can already swim continuously, or will within eight weeks.
                4. Entry booked, or the date entries open written in your calendar.

                ## Notes
                Lakes are the gentlest first venue. Rivers add flow and sea races add waves and tide, so save them for a second race unless you already swim at the coast. Check the cut-off time as well as the distance.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "One race chosen from a shortlist of three, with its distance, venue type and cut-off time recorded and entry booked or the opening date noted."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "List three open water events within a day's travel this season"
                - "Note each event's distance, water type and cut-off time"
                - "Time your longest continuous pool swim this week"
                - "Book the race or note the exact date entries open"
            - name: Health questions before cold water swimming
              description: |-
                ## Purpose
                Cold water raises heart rate and blood pressure sharply in the first minute, and people with heart conditions, asthma, epilepsy or high blood pressure are often asked to get clinical advice before swimming in it. A short conversation with your doctor before your first season means you get in knowing whether anything applies to you.

                ## Milestones
                1. Your conditions, medicines and any past fainting or chest pain written on one page.
                2. Your doctor asked whether cold open water swimming and racing raise any concerns for you.
                3. Any precautions your doctor gives written at the front of your swim log.
                4. The medical declaration on your race entry answered accurately.

                ## Notes
                This is about asking the right person, not judging it yourself. Some marathon swims and crossings require a signed medical form, so ask how long your practice takes to complete one.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A dated note of your doctor's view on cold open water swimming, with any agreed precautions written in your swim log."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Write down your conditions, medicines and any past fainting or chest pain"
                - "Book an appointment to ask about cold water swimming and racing"
                - "Record what your doctor advised at the front of your swim log"
                - "Reread your health notes before the season's first swim @recurring(yearly)"
            - name: Finding a supervised open water venue
              description: |-
                ## Purpose
                Training where there are lifeguards or safety kayaks, a marked loop and a posted water temperature removes most of the risk from early sessions. A venue with an induction and season membership also gives you a fixed weekly slot to build the rest of your training around.

                ## Milestones
                1. Supervised lakes, quarries and coached sea groups within 40 minutes listed.
                2. Opening hours, safety cover, loop length and cost compared for each.
                3. One venue chosen and its induction completed.
                4. The venue's rules on tow floats, hats and solo swimming noted.

                ## Notes
                Unsupervised spots can come later, with a buddy and a plan. Many venues ask for an induction or a short assessed swim before you can book sessions.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A supervised venue chosen and its induction completed, with its session times and safety rules recorded."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Search for supervised open water venues within 40 minutes of home"
                - "Compare session times, safety cover, loop length and cost"
                - "Book and attend the venue induction"
                - "Renew your venue membership before the season opens @recurring(yearly)"
            - name: Choosing an open water swimming wetsuit
              description: |-
                ## Purpose
                Swimming wetsuits are cut differently from surf suits, with thin flexible shoulders and extra buoyancy at the hips, and a poor fit lets cold water flush through or restricts every stroke. Trying several brands on, ideally in the water, matters more than the price tag.

                ## Milestones
                1. Your race rules on wetsuit thickness and type checked.
                2. Measurements taken and matched against three brands' size charts.
                3. At least two suits tried on, and one swum in through a rental or demo day.
                4. A suit bought or rented for the season, with its size and model written in your log.

                ## Notes
                Start from the **Purchase decision** template. A season's rental is a sensible first step if you are not sure you will race again. A good fit is snug everywhere and sealed at the neck without choking.
              priority: high
              deadlineOffsetDays: 45
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A swimming wetsuit bought or rented after at least two suits were tried, with its size and model recorded."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Check your race rules for wetsuit thickness and type limits"
                - "Measure height, weight, chest and waist against three size charts"
                - "Book a demo day or rental so you swim in a suit before buying"
                - "Buy or rent the suit that fits best through the shoulders"
            - name: Tow float, bright hat and visibility kit
              description: |-
                ## Purpose
                From a kayak or the shore, a swimmer in a dark hat is almost invisible in chop. A bright silicone hat and an inflatable tow float make you visible to boats, lifeguards and paddleboarders, and the float gives you something to rest a hand on if you need it.

                ## Milestones
                1. Two brightly coloured silicone hats in your kit bag.
                2. A tow float bought, with a dry pocket if you carry keys or a phone.
                3. The float leash adjusted so it trails without catching your legs.
                4. Spare goggles and earplugs packed in the kit bag for good.

                ## Notes
                A tow float is a visibility aid, not a life jacket. Many venues and most unsupervised swims expect one.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A kit bag holding a tow float, two bright hats and spare goggles, used on every open water swim from the first session."
                cadence: one-shot
                effort_hours_estimate: "1"
              tasks:
                - "Buy two bright orange or pink silicone hats"
                - "Choose a tow float with a dry pocket if you carry keys"
                - "Adjust the leash length during a short test swim"
                - "Pack spare goggles and earplugs in the kit bag permanently"
            - name: Open water safety plan and buddy rules
              description: |-
                ## Purpose
                Most open water incidents involve cold shock, cramp or exhaustion far from an exit, and they are made worse by swimming alone with nobody watching. A written plan covering who swims with you, who watches from the shore, where the exits are and what you do if you get into trouble turns good intentions into a routine.

                ## Milestones
                1. A rule that you never swim alone outside supervised sessions, agreed with your usual buddies.
                2. Entry and exit points noted for each place you swim.
                3. A float-first response to cold shock or panic written down.
                4. A shore contact who knows your route and return time for every unsupervised swim.
                5. The emergency number and a way to describe your location saved in your phone.

                ## Notes
                In many countries sea rescues are reached through the main emergency number by asking for the coastguard. Check how it works where you swim.
              priority: high
              deadlineOffsetDays: 14
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A one-page safety plan covering buddies, exits, a float-first response and a shore contact, shared with everyone you swim with."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Write your buddy and shore contact rules on one page"
                - "Mark entry and exit points for each swim spot you use"
                - "Agree a help signal with your buddy and shore contact"
                - "Share the plan with your regular swimming partners"
                - "Go through the plan with your swim buddies before the season @recurring(yearly)"
            - name: Baseline pool time trial and first lake loop
              description: |-
                ## Purpose
                A 400 m and a 200 m pool time trial give you a critical swim speed, the pace per 100 m you can hold for a long time, and that number anchors every later session. Swimming one timed loop in open water the same fortnight shows how much slower the lake makes you, which is usually more than people expect.

                ## Milestones
                1. A 400 m and a 200 m time trial swum on the same day with full rest between.
                2. Critical swim speed worked out as a pace per 100 m.
                3. One measured open water loop swum and timed.
                4. The gap between pool pace and open water pace written in your log.

                ## Notes
                To get the pace, subtract the 200 m time from the 400 m time and halve the result. Retest each quarter so your training paces stay honest.
              priority: high
              deadlineOffsetDays: 28
              frontmatter:
                mode: building
                output_kind: knowledge
                success_criteria: "A pool critical swim speed and a timed open water loop, both dated, with the difference between them recorded."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Swim a 400 m time trial after a full warm-up"
                - "Swim a 200 m time trial after at least five minutes' rest"
                - "Work out your pace per 100 m from the two times"
                - "Time one measured loop at your open water venue"
            - name: Open water swim log
              description: |-
                ## Purpose
                Water temperature, wind, wetsuit or skins, distance and how long it took to feel warm again are the numbers that explain your progress outdoors. A simple log kept after every swim shows when you are ready for a longer race or colder water, and it is the record many marathon swims and crossings ask to see.

                ## Milestones
                1. A log with columns for date, venue, water temperature, conditions, kit, distance, time and recovery notes.
                2. Every open water swim this season logged within a day.
                3. A monthly total of distance and minutes in the water.
                4. Your coldest and longest swims highlighted.

                ## Notes
                Start from the **Metrics log** template. Record minutes in the water as well as distance, because cold tolerance is built in minutes.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A swim log holding every open water swim of the season with temperature, distance and minutes, plus monthly totals."
                cadence: one-shot
                effort_hours_estimate: "1"
              tasks:
                - "Create a swim log from the metrics log template"
                - "Add columns for water temperature, conditions, kit and recovery"
                - "Copy in any swims already done this season"
                - "Log the week's open water swims with temperature and minutes @recurring(weekly:sun)"
            - name: Weekly open water training week
              description: |-
                ## Purpose
                Most race swimmers train three or four times a week: an endurance pool set, a threshold set, an open water session and some dryland work. Fixing which day each falls on, around work and venue opening hours, means the week holds together when life gets busy.

                ## Milestones
                1. The number of swims you can sustain each week agreed with yourself and anyone it affects.
                2. Each session type assigned to a day that fits pool and venue times.
                3. A short and a full version of the week written for busy and normal weeks.
                4. The plan followed for four weeks and adjusted once.

                ## Notes
                Start from the **Training program** template. If there is only one open water slot a week, protect it and let a pool session move.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A written training week with each session on a named day, in short and full versions, followed for four consecutive weeks."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "List lane swim times at your pool and session times at your venue"
                - "Assign endurance, threshold, open water and dryland sessions to days"
                - "Write a short version of the week for busy weeks"
                - "Adjust the plan after four weeks of following it"
            - name: Race rules on wetsuits, feeding and the course
              description: |-
                ## Purpose
                Events set the water temperatures at which wetsuits are compulsory, optional or banned, and the thresholds differ between governing bodies and organisers. Reading your race rules months ahead tells you whether to train in a suit or in skins, where you may feed and what happens if you miss a buoy or the cut-off.

                ## Milestones
                1. The race rules or athlete guide read in full.
                2. Wetsuit temperature thresholds for your category written down.
                3. Rules on buoys, feeding, touching boats and outside assistance noted.
                4. Cut-off times and the rules on being taken out of the water understood.

                ## Notes
                If the water is close to a threshold, the decision is often announced on race morning. Train so you could swim either way.
              priority: medium
              deadlineOffsetDays: 30
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A one-page summary of your race's wetsuit thresholds, course, feeding and cut-off rules, taken from the current athlete guide."
                cadence: one-shot
                effort_hours_estimate: "1"
              tasks:
                - "Download the athlete guide or rules for your race"
                - "Write down the wetsuit temperature thresholds for your category"
                - "Note the rules on buoys, feeding and outside assistance"
                - "Check the governing body's rules for changes this season @recurring(yearly)"
            - name: Weekly open water session through the season
              description: |-
                ## Purpose
                Skills learned in the pool fade within weeks if they are not used outdoors, and confidence in cold or choppy water only comes from time spent in it. One protected open water session a week, from opening day to the end of the season, is the backbone of race preparation.

                ## Milestones
                1. A fixed weekly open water slot in your calendar from opening day.
                2. Each session given one focus: sighting, pace, cold tolerance or a race skill.
                3. At least 80 percent of the season's weekly sessions completed.
                4. Distance per session built in steady steps rather than jumps.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Weekly open water sessions completed in at least 80 percent of the season's weeks, each logged with its focus."
                cadence: rolling
              tasks:
                - "Book the season's first open water session at your venue"
                - "Pick one focus for each session before you get in"
                - "Swim your weekly open water session @recurring(weekly:sat)"
                - "Note the session focus and how it went in your swim log"
            - name: Weekly pool endurance set
              description: |-
                ## Purpose
                Open water races are long efforts at a steady pace with no walls to push off, and the pool is still the easiest place to build that aerobic base. One longer set a week, built around continuous swims of 800 m or more with short rests, mirrors what race day asks of you.

                ## Milestones
                1. An endurance set of at least 2,000 m swum every week.
                2. The longest continuous swim in the set extended by no more than 10 percent at a time.
                3. A continuous swim of your race distance completed in the pool.
                4. Pace per 100 m held within five seconds from the first to the last repeat.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A weekly endurance set logged for twelve consecutive weeks, ending with a continuous pool swim of your race distance."
                cadence: rolling
              tasks:
                - "Write a 2,000 m endurance set built around one long continuous swim"
                - "Swim your endurance set @recurring(weekly:tue)"
                - "Add up to 10 percent to the long swim each fortnight"
                - "Practise open turns without pushing off the wall during the set"
            - name: Threshold intervals at critical swim speed
              description: |-
                ## Purpose
                Holding a strong pace while tired decides the second half of a race. Intervals of 100 m to 400 m at or near your critical swim speed, with short rests, raise the pace you can sustain without blowing up after the first buoy.

                ## Milestones
                1. A threshold set written with intervals at your critical swim speed.
                2. The set swum weekly for six weeks at the same target pace.
                3. Rests shortened once every interval is held comfortably on pace.
                4. Critical swim speed retested and the target pace updated.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Six weeks of weekly threshold sets logged, followed by a retest that updates your target pace per 100 m."
                cadence: rolling
              tasks:
                - "Write a threshold set of 100 m to 400 m intervals at your target pace"
                - "Swim your threshold set @recurring(weekly:thu)"
                - "Cut each rest by five seconds once every interval is on pace"
                - "Retest your 400 m and 200 m times and reset your pace @recurring(quarterly)"
            - name: Dryland shoulder and core work for swimmers
              description: |-
                ## Purpose
                Shoulders do most of the work in freestyle, and a season of open water volume without strength work around them is a common route to pain. Two short sessions a week of band rotations, rows and core holds keep the shoulders balanced and help you hold a long body line in waves.

                ## Milestones
                1. A 20 minute routine of band rotations, rows, pull-aparts and planks written down.
                2. The routine done twice a week for eight weeks.
                3. Band tension or load increased at least once.
                4. Any shoulder pain lasting more than a few days raised with a physiotherapist.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A 20 minute dryland routine completed twice weekly for eight weeks, with each progression recorded."
                cadence: rolling
              tasks:
                - "Write a 20 minute band, row and core routine"
                - "Buy a set of light, medium and heavy resistance bands"
                - "Do your dryland routine @recurring(weekly:mon,fri)"
                - "Move to a stronger band when every set feels easy"
            - name: Cold water acclimatisation in spring and autumn
              description: |-
                ## Purpose
                Cold tolerance comes from regular, short, gradually longer swims as the water cools or warms, and it fades within weeks of stopping. Planning the cooler months, with time in the water matched to the temperature and always with someone watching, prepares you for early season races and cold race mornings.

                ## Milestones
                1. A maximum number of minutes in the water for each temperature band agreed with your coach or club.
                2. At least two swims a week through the cooler months, all supervised or with a buddy.
                3. Minutes in the water and time to stop shivering logged for every cold swim.
                4. A warming up routine for after each swim written and followed.

                ## Notes
                Afterdrop, feeling colder after you get out, is common. Get dry and into layers quickly and follow your venue's guidance on warming up. Never swim in cold water alone.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Two supervised or buddied cold swims a week logged through spring or autumn, each with temperature, minutes in the water and recovery time."
                cadence: cyclic
              tasks:
                - "Agree minutes in the water per temperature band with your club or coach"
                - "Pack layers, a woolly hat and a warm drink for after every cold swim"
                - "Record water temperature and minutes for each cold swim @recurring(weekly:wed)"
                - "Note how long it takes you to stop shivering after each swim"
            - name: Conditions and water quality check before each swim
              description: |-
                ## Purpose
                Heavy rain can wash sewage and farm run-off into rivers and the sea, warm still weather brings blue-green algae to lakes, and wind or tide can turn an easy loop into a struggle. Checking water quality reports, the forecast and tide times before each swim takes five minutes and decides whether you go.

                ## Milestones
                1. The water quality reporting service for each venue bookmarked.
                2. Sources for wind, rain, tide and water temperature saved on your phone.
                3. A short go or no-go list written: what sends you elsewhere or keeps you out.
                4. Cuts covered before, and a shower taken after, river and lake swims.

                ## Notes
                If you develop flu-like symptoms within a few weeks of a river or lake swim, tell your doctor that you swim in open water.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A written go or no-go list used before every swim, with water quality and forecast checked for each logged session."
                cadence: rolling
              tasks:
                - "Bookmark the water quality reports for each venue you use"
                - "Write a go or no-go list for wind, rain, tide and algae warnings"
                - "Check water quality, wind and tide before the weekend swim @recurring(weekly:fri)"
                - "Pack waterproof plasters for covering cuts before river and lake swims"
            - name: Wetsuit care and repair routine
              description: |-
                ## Purpose
                Neoprene is damaged by sun, chlorine, fingernails and being left wet and folded, and a torn suit in race week is an expensive surprise. Rinsing, drying and storing it properly, and fixing nicks while they are small, makes a good suit last several seasons.

                ## Milestones
                1. A routine of fresh water rinse, drying inside out in shade and hanging on a wide hanger.
                2. Neoprene repair glue and wetsuit cleaner in the kit cupboard.
                3. Seams, neck and cuffs checked once a month and nicks repaired.
                4. The suit checked a month before every race, leaving time for a professional repair.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "The wetsuit rinsed after every swim, inspected monthly and free of unrepaired tears a month before each race."
                cadence: rolling
              tasks:
                - "Buy neoprene repair glue and a wide wetsuit hanger"
                - "Rinse the suit in fresh water after every swim and dry it in shade"
                - "Inspect seams, neck and cuffs and repair any nicks @recurring(monthly:14)"
                - "Wear thin cotton gloves when pulling the suit on"
            - name: Monthly long swim progression
              description: |-
                ## Purpose
                Being able to swim the race distance continuously, outdoors, is the best predictor of a calm race. One long swim a month, a little longer each time, builds the endurance and the confidence that the pool alone cannot give you.

                ## Milestones
                1. A long swim scheduled in each month of the season.
                2. Each long swim 10 to 20 percent longer than the previous one.
                3. A continuous open water swim of at least your race distance completed before race day.
                4. Feeding and kit tested on every long swim over an hour.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Monthly long swims logged with rising distance, including one continuous open water swim of your race distance before the race."
                cadence: rolling
              tasks:
                - "Pick a weekend date each month for your long open water swim"
                - "Arrange a buddy or kayak cover for swims beyond the venue loop"
                - "Swim your monthly long swim and log its distance @recurring(monthly:22)"
                - "Record what you ate and drank and how it sat after each long swim"
            - name: Monthly open water season review
              description: |-
                ## Purpose
                Once a month, the log shows whether your long swims are growing, your cold tolerance is building and your lake pace is closing on your pool pace. A 20 minute review turns those numbers into next month's focus, instead of repeating the same sessions all season.

                ## Milestones
                1. Monthly totals of sessions, distance and minutes in open water worked out.
                2. Progress against your race goal written in two sentences.
                3. One focus chosen for the coming month.
                4. Missed sessions and their causes noted so the plan can change.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A review note for every month of the season, with totals, progress against the race goal and one focus for the next month."
                cadence: rolling
              tasks:
                - "Set up a review page beside your swim log"
                - "Ask the agent to summarise the month's log into totals and trends"
                - "Review the month's swims and choose one focus @recurring(monthly:28)"
                - "Note missed sessions and what caused them"
            - name: Winter pool block between seasons
              description: |-
                ## Purpose
                For most swimmers the open water season ends when the water turns cold, and winter is when technique and speed are rebuilt. A planned block of pool work from autumn to spring, with one technique goal and one speed goal, means you start next season faster rather than starting again.

                ## Milestones
                1. A technique goal and a speed goal set for the winter.
                2. Three pool sessions a week planned for the off-season.
                3. A stroke assessment with a coach booked in the first month.
                4. Critical swim speed tested at the start and end of the block.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A winter block with a technique and a speed goal, ending with a critical swim speed faster than the one recorded at its start."
                cadence: cyclic
              tasks:
                - "Set one technique goal and one speed goal for the winter"
                - "Book a stroke assessment with a swim coach"
                - "Plan three pool sessions a week until the water warms"
                - "Write next winter's goals after the season's last race @recurring(yearly)"
            - name: Sighting every six to nine strokes
              description: |-
                ## Purpose
                Without a black line, most swimmers drift metres off course every minute, and a 1500 m race can quietly become 1800 m. Lifting just the eyes clear of the water, crocodile style, then rolling into a normal breath lets you check the buoy without dropping your hips.

                ## Milestones
                1. Crocodile eye sighting practised in the pool against a target on the end wall.
                2. Sighting fitted into the stroke without a pause, every six to nine strokes.
                3. Large fixed landmarks chosen for each leg of your usual loop.
                4. A 400 m open water swim recorded with a near-straight GPS track.

                ## Notes
                Sight on something big and high, such as a tree, building or mast, rather than a low buoy that disappears in chop.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A 400 m open water swim whose GPS track adds no more than 5 percent to the true distance, sighting every six to nine strokes."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Practise crocodile eye sighting toward the pool end wall for 200 m"
                - "Add one sight every six strokes into a 400 m pool swim"
                - "Pick landmarks for each leg of your usual open water loop"
                - "Compare your GPS track with the loop's true distance"
            - name: Bilateral breathing for chop, sun and swell
              description: |-
                ## Purpose
                Waves, low sun and other swimmers will always be on one side, and a swimmer who can breathe only one way swallows water or loses sight of the course. Breathing comfortably to both sides, and switching at will, lets you take air away from the chop.

                ## Milestones
                1. Breathing every three strokes held for 400 m in the pool.
                2. Breathing only to the weaker side held for 100 m without distress.
                3. Breathing side switched mid-length on demand.
                4. An open water loop swum breathing away from the waves on each leg.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A 400 m pool swim breathing every three strokes and an open water loop breathing away from the chop on each leg, both logged."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Swim 4 x 100 m breathing only to your weaker side"
                - "Build to 400 m breathing every third stroke"
                - "Practise switching breathing side every 25 m"
                - "Swim one open water loop breathing away from the waves"
            - name: Drafting on feet and hips
              description: |-
                ## Purpose
                Swimming close behind another swimmer's feet, or beside their hip, can save a noticeable share of effort at the same speed, and it is allowed in almost all open water swim races. Doing it well means staying close without constantly tapping toes, and still sighting for yourself.

                ## Milestones
                1. Feet drafting practised in a group session behind a slightly faster swimmer.
                2. Hip drafting practised on both sides.
                3. Sighting kept up while drafting so you are not led off course.
                4. Effort compared with and without a draft over the same loop.

                ## Notes
                The feet to follow should be slightly faster than yours, not much faster. Never assume the swimmer in front is sighting well.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Drafting practised on feet and both hips in at least three group sessions, with effort compared on the same loop with and without a draft."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Ask a club mate of similar pace to practise drafting with you"
                - "Swim one loop on their feet and one alone at the same effort"
                - "Practise sitting on their left hip, then their right"
                - "Keep sighting every nine strokes while drafting"
            - name: Mass starts and deep water starts
              description: |-
                ## Purpose
                The first 200 m of a race, with arms, feet and bubbles everywhere, is where most panics happen, especially for swimmers who have only trained alone. Practising crowded starts in a group, and choosing a sensible place in the pack, takes the shock out of race morning.

                ## Milestones
                1. A deep water start practised from treading water.
                2. Group start drills done with at least five other swimmers.
                3. A written plan for where you start: front, side or back of the pack.
                4. The first 200 m swum at controlled effort before settling into race pace.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "At least three group start drills completed and a written start position plan for your race."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Ask your club or venue when they run group start practice"
                - "Practise deep water starts from treading water"
                - "Swim three group starts with at least five others"
                - "Write where you will start in the pack and why"
            - name: Turning around buoys in a crowd
              description: |-
                ## Purpose
                Buoys bunch the field, and a slow wide turn loses seconds while a tight one invites a heel in the face. Practising corkscrew and tight freestyle turns, and choosing your line in advance, makes each turn a place to gain ground.

                ## Milestones
                1. Freestyle turns practised around a fixed buoy on both sides.
                2. A corkscrew turn, rolling onto the back for one stroke, practised.
                3. The line into and out of each turn planned on the race map.
                4. Turns practised with other swimmers close alongside.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Freestyle and corkscrew turns practised around a buoy on each side, with a turn plan written for your race course."
                cadence: phased
                effort_hours_estimate: "3"
              tasks:
                - "Practise tight freestyle turns around a venue buoy"
                - "Learn a corkscrew turn at the end of a pool lane rope"
                - "Draw your line around each buoy on the race map"
                - "Practise turns with two club mates swimming alongside"
            - name: Beach starts, dolphin dives and exits
              description: |-
                ## Purpose
                Sea races and some lake races start and finish on the shore, and running into shallow water, diving through small waves and standing up at the end each have a technique. Practising them saves energy, avoids twisted ankles and makes the finish look intentional.

                ## Milestones
                1. High-knee running into thigh-deep water practised.
                2. Dolphin dives through shallow water and small waves practised.
                3. Swimming on until your hand brushes the bottom before standing, practised on exit.
                4. A full beach start and finish rehearsed at your race venue or a similar beach.

                ## Notes
                Only practise dolphin dives on a beach you know is sandy and free of rocks, with lifeguards present.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A full beach start and finish rehearsed at least twice, including dolphin dives and a standing exit, on a lifeguarded beach."
                cadence: phased
                effort_hours_estimate: "3"
              tasks:
                - "Find a sandy lifeguarded beach for practice"
                - "Practise running in with high knees until thigh deep"
                - "Practise dolphin dives through small waves"
                - "Swim in until your hand brushes the sand before standing"
            - name: Reading tides, currents and rip channels
              description: |-
                ## Purpose
                At the coast and in rivers, moving water can double or halve your speed, and a rip current can carry a strong swimmer out faster than they can swim back. Learning to read tide tables, spot rip channels and plan a swim around the flow comes before any sea swim outside supervised sessions.

                ## Milestones
                1. Tide tables for your nearest beach read, with high and low water times noted.
                2. A rip channel identified from the shore with a lifeguard or experienced swimmer.
                3. Your local lifesaving organisation's rip advice copied into your safety plan.
                4. One sea swim planned around slack water with a buddy.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Tide times, rip spotting and your lifesaving organisation's rip advice recorded in the safety plan, and one sea swim planned around slack water."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Download tide tables or a tide app for your nearest beach"
                - "Ask a lifeguard to point out rip channels from the shore"
                - "Copy your lifesaving organisation's rip advice into your safety plan"
                - "Plan one sea swim around slack water with a buddy"
            - name: Calming panic and cold shock in the water
              description: |-
                ## Purpose
                Even experienced swimmers can hyperventilate in cold water or a crowded start, and the response that works is to stop, float and breathe out slowly, not to swim harder. Practising that sequence in calm water until it is automatic means it is there when you need it.

                ## Milestones
                1. Floating on your back with steady breathing practised for one minute.
                2. A personal reset sequence written: stop, float, breathe, sight, restart.
                3. The sequence rehearsed in each of the first five open water swims of the season.
                4. Signalling for help practised with venue lifeguards watching.

                ## Notes
                Panic is common and nothing to be ashamed of. Race safety crews expect swimmers to stop and hold a kayak, and most rules allow it as long as you do not make forward progress.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A written reset sequence rehearsed in the first five open water swims of the season, including one minute of back floating each time."
                cadence: phased
                effort_hours_estimate: "2"
              tasks:
                - "Write your reset sequence on a card for your kit bag"
                - "Practise floating on your back for one minute at your venue"
                - "Run the reset sequence once in each early season swim"
                - "Practise signalling for help with a lifeguard watching"
            - name: Goggles for sun, low light and murky water
              description: |-
                ## Purpose
                Pool goggles that work indoors can leave you blinded by low sun on a buoy, or unable to see the swimmer ahead in a peaty lake. A tinted or mirrored pair, a clear or light pair and a spare, all tested on long swims, lets you choose on race morning.

                ## Milestones
                1. A tinted or mirrored pair for bright sun chosen.
                2. A clear or light-tinted pair for dull days and murky water chosen.
                3. Both pairs tested on swims over 45 minutes for leaks and comfort.
                4. A spare of your favourite pair packed in the race bag.

                ## Notes
                Start from the **Purchase decision** template. Wider lens open water goggles give better side vision for sighting and drafting.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "Two tested pairs of goggles for bright and dull conditions, plus a spare, each worn on a swim of 45 minutes or longer."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Note where the sun will be at your race start time"
                - "Buy one tinted pair and one clear or light pair"
                - "Wear each pair on a swim of at least 45 minutes"
                - "Put a spare of the best pair in your race bag"
            - name: Joining an open water club or coached group
              description: |-
                ## Purpose
                Clubs give you swim buddies, kayak cover for longer swims, coaching on skills that pools cannot teach and people who know the local water. Comparing two or three groups on cost, coaching and when they swim helps you find one you will actually turn up to.

                ## Milestones
                1. Open water clubs, coached groups and triathlon clubs with open water sessions within reach listed.
                2. Session times, coaching, cost and safety cover compared.
                3. A trial session attended at your top choice.
                4. Membership taken out, or the reason for not joining written down.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A trial session attended and a membership decision recorded for at least one open water club or coached group."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "List open water clubs and coached groups within 30 minutes"
                - "Compare their session times, coaching and safety cover"
                - "Book a trial session at your top choice"
                - "Join the club or note why you decided against it"
            - name: GPS watch set up for open water swims
              description: |-
                ## Purpose
                A watch in open water mode records distance, pace and the shape of your line, which is the most honest feedback on your sighting. Knowing its limits, and setting it up for the data you will actually use, avoids chasing numbers that drift with every arm stroke.

                ## Milestones
                1. Your watch's open water mode found and set to show time, distance and pace.
                2. Watch position under or over the wetsuit cuff tested for a steady signal.
                3. A recorded track compared against a course of known length.
                4. Stroke rate added to the display if the watch measures it.

                ## Notes
                Without a watch, a phone in a dry bag inside a tow float can record a track. Do not buy a watch just for this project.
              priority: low
              frontmatter:
                mode: building
                output_kind: knowledge
                success_criteria: "Your watch's open water mode set up and tested on a course of known length, with the measured error recorded in your log."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Find and set up the open water mode on your watch"
                - "Choose three data fields: time, distance and pace"
                - "Record a swim over a course of known length"
                - "Note how far the recorded distance differs from the real one"
            - name: Raising stroke rate for open water
              description: |-
                ## Purpose
                A long gliding pool stroke stalls in chop and in a wetsuit, and many fast open water swimmers turn their arms over more quickly with a shorter, punchier catch. Measuring your strokes per minute and nudging it up gradually with a tempo trainer often makes you faster outdoors for the same effort.

                ## Milestones
                1. Current strokes per minute measured over 100 m at race pace.
                2. A tempo trainer or beeping metronome bought or borrowed.
                3. Stroke rate raised by three to five strokes per minute over four weeks.
                4. Loop time at the old and new rates compared on the same open water course.

                ## Notes
                Change the rate slowly. A sudden big jump usually shortens the stroke without making you any faster.
              priority: low
              frontmatter:
                mode: building
                output_kind: knowledge
                success_criteria: "Stroke rate raised by at least three strokes per minute over four weeks, with open water loop times compared at the old and new rates."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Count your strokes per minute over 100 m at race pace"
                - "Buy or borrow a tempo trainer that clips under your cap"
                - "Swim race pace sets two strokes per minute quicker than before"
                - "Compare your loop time at the old and new stroke rates"
            - name: Filming your open water stroke
              description: |-
                ## Purpose
                Many strokes fall apart outdoors: the head lifts too high to sight, the legs sink or the hands cross the centre line in waves. A few minutes of video from a kayak, paddleboard or jetty shows what changes once the walls and the black line are gone.

                ## Milestones
                1. A friend or coach filming you from a kayak, paddleboard or jetty.
                2. Footage taken of normal swimming, sighting and breathing to both sides.
                3. Two or three faults identified with a coach's help.
                4. One drill chosen for each fault and practised for a month.
              priority: low
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "Open water footage reviewed with a coach, with two or three faults and a drill for each recorded in your log."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Ask a friend with a kayak or paddleboard to film one loop"
                - "Film from the side and from ahead while you sight"
                - "Ask the agent to draft questions for your coach from your video notes"
                - "Practise one drill for each fault for four weeks"
            - name: Race pacing plan from your threshold pace
              description: |-
                ## Purpose
                Most first-time racers go out far too fast in the scramble, then fade badly after the first buoy. A pacing plan built from your critical swim speed, with a set effort for the start, the middle and the last 400 m, gives you something to follow when adrenaline is shouting.

                ## Milestones
                1. Target pace per 100 m worked out from your critical swim speed plus your open water slowdown.
                2. Effort levels written for the start, middle and finish.
                3. The plan tested in a long open water swim or a practice race.
                4. A predicted finish time written down before race day.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A written pacing plan with target pace, an effort for each part of the race and a predicted finish time, tested on at least one long swim."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Add your open water slowdown to your pool pace per 100 m"
                - "Write the effort for the first 200 m, the middle and the last 400 m"
                - "Test the plan on your next long open water swim"
                - "Write your predicted finish time before race day"
            - name: Racing in a wetsuit or in skins
              description: |-
                ## Purpose
                Many events offer separate wetsuit and non-wetsuit categories, and some swimmers love the freedom of skins while others rely on the buoyancy of a suit. Deciding which to race, and training enough in that form, avoids finding out on race morning that you have never swum the distance without one.

                ## Milestones
                1. Your race's wetsuit and non-wetsuit categories and temperature limits checked.
                2. The same long loop swum once in a suit and once in skins, with time and comfort compared.
                3. A category chosen and entered.
                4. Neck, armpit and other chafe points protected and tested before race day.

                ## Notes
                Skins usually means a standard textile costume, one cap and goggles, with rules on fabric and coverage. Check your event's own definition.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A race category chosen after a timed comparison swim with and without a wetsuit, with chafe protection tested on a long swim."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Check the categories and costume rules for your race"
                - "Swim the same loop once in a suit and once in skins"
                - "Choose a category and update your entry if needed"
                - "Test anti-chafe balm on your neck and armpits on a long swim"
            - name: Twelve-week build to your first open water race
              description: |-
                ## Purpose
                Twelve weeks of structured build suits a first race of 1500 m to 5 km for someone who already swims regularly in a pool. Planning the block backwards from race day, with endurance, threshold, open water skills and a taper, keeps progress steady and leaves room for a missed week.

                ## Milestones
                1. Race day fixed and the twelve weeks counted back in your calendar.
                2. Weekly distance planned to rise for three weeks then ease for one.
                3. Each open water skill scheduled into a specific week.
                4. A full race distance swum in open water by week ten.
                5. The last ten to fourteen days planned as a taper.

                ## Notes
                Start from the **Training program** template. If you cannot yet swim the distance continuously in the pool, add four to six weeks.
              priority: high
              deadlineOffsetDays: 90
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A twelve-week plan completed with at least 80 percent of sessions logged, including a full race distance open water swim before the taper."
                cadence: phased
                effort_hours_estimate: "40"
              tasks:
                - "Count twelve weeks back from race day in your calendar"
                - "Write weekly distance targets, easing every fourth week"
                - "Schedule sighting, start and turn practice into specific weeks"
                - "Book a supervised swim at full race distance for week ten"
            - name: Race week taper and kit checklist
              description: |-
                ## Purpose
                In the final week the fitness work is done, and the risks are forgotten goggles, a torn suit, a missed briefing and poor sleep. A checklist for the taper, the kit bag and the paperwork means race morning is only about swimming.

                ## Milestones
                1. Training volume cut in the final week, with two short swims including a few race pace efforts.
                2. Kit laid out and checked against a written list two days before.
                3. Race pack, timing chip instructions and briefing time read.
                4. Travel, parking and arrival planned to leave at least an hour before your wave.

                ## Notes
                Start from the **Operational checklist** template. Race caps are usually provided, but pack two caps, two pairs of goggles and anti-chafe balm anyway.
              priority: high
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A race week checklist completed, with kit packed two days early and arrival planned at least an hour before your wave."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Write a kit list from wetsuit to warm clothes for afterwards"
                - "Read the race pack and note briefing and wave times"
                - "Swim two short sessions with a few race pace efforts"
                - "Pack and check the kit bag two days before the race"
            - name: Race morning warm-up, briefing and course check
              description: |-
                ## Purpose
                Getting into cold water for the first time as the start horn sounds is a recipe for gasping and panic. Arriving early to view the course, attend the briefing and, where allowed, swim an easy warm-up lets your breathing settle before the race begins.

                ## Milestones
                1. The course, buoy colours and turn order viewed from the shore.
                2. The safety briefing attended and any course changes noted.
                3. A ten minute warm-up swum, or a dry land warm-up done if water entry is not allowed.
                4. Sighting landmarks for each leg chosen from the start area.
              priority: high
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "Arrived at least an hour early, attended the briefing, warmed up and chose landmarks for each leg before the start."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Write a race morning timeline backwards from your wave time"
                - "Walk the shore to see buoy colours and the turn order"
                - "Attend the safety briefing and note any changes"
                - "Swim ten easy minutes or do a band warm-up before the start"
            - name: Post-race debrief with your GPS track
              description: |-
                ## Purpose
                Your finish time is only part of the story: the GPS track shows how straight you swam, and memories of the start and the turns fade within days. A debrief in the week after turns one race into the focus for the next block.

                ## Milestones
                1. Finish time, overall position and age group place recorded.
                2. The GPS track compared with the course to find extra distance.
                3. What went well and badly at the start, the turns and the finish written down.
                4. Two changes chosen for the next race.
              priority: medium
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A debrief note written within a week of the race, with the GPS track analysed and two changes chosen for the next race."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Download your race track and the official result"
                - "Measure how far your track strayed from the course"
                - "Write what happened at the start, the turns and the finish"
                - "Choose two changes to work on before your next race"
            - name: Feeding from a pontoon or kayak on long swims
              description: |-
                ## Purpose
                Swims over about two hours need fuel and fluid, and in open water that means taking a bottle from a pontoon, kayak or boat without stopping for long. Practising the handover, the feed interval and what your stomach tolerates in cold or salt water belongs in training, not on race day.

                ## Milestones
                1. Feed intervals and contents agreed with a coach or sports dietitian.
                2. Feed bottles on a cord, or a pontoon feeding station, used in training.
                3. Each feed done in under 30 seconds while treading water.
                4. The full feed plan tested on a swim of at least two hours.

                ## Notes
                Many marathon swim rules forbid touching the boat or kayak during a feed. Practise taking the bottle without holding on.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A written feed plan tested on a swim of at least two hours, with every feed taking under 30 seconds."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Ask a coach or dietitian to help set feed intervals and contents"
                - "Tie feed bottles to a length of light cord"
                - "Practise feeds in under 30 seconds while treading water"
                - "Test the full plan on a two hour supervised swim"
            - name: Travelling to a swim race or swim holiday
              description: |-
                ## Purpose
                Races in lakes, fjords and warm seas abroad, and coached swim holidays, are a popular way to stretch the season. Planning travel, kit, local water conditions and registration means you arrive rested with everything you need.

                ## Milestones
                1. Race or holiday booked, with travel and accommodation near the start.
                2. Local water temperature, conditions and wetsuit rules researched.
                3. Wetsuit and goggles packed in hand luggage or insured.
                4. Arrival planned at least one day early to swim the venue.

                ## Notes
                Start from the **Trip** template. Check whether your travel insurance covers open water swimming and races.
              priority: low
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "Travel booked with arrival at least a day before the swim, local conditions researched and insurance cover for open water swimming confirmed."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Shortlist two swim races or swim holidays abroad"
                - "Check local water temperature and wetsuit rules for the date"
                - "Confirm your travel insurance covers open water swimming"
                - "Book travel to arrive at least one day before the race"
            - name: Pool swimmer moving to open water for the first time
              description: |-
                ## Purpose
                Confident pool swimmers often find their first lake swim alarming: cold, dark water, no walls and no line to follow. A gradual eight-week introduction, from short supervised loops near the shore to a continuous 1 km, builds confidence before you commit to a race.

                ## Milestones
                1. A first open water session done at a supervised venue, close to the shore.
                2. A continuous 400 m open water swim completed without stopping.
                3. A continuous 1 km open water swim completed.
                4. A first race or timed event entered.
              priority: medium
              deadlineOffsetDays: 60
              frontmatter:
                mode: building
                output_kind: knowledge
                success_criteria: "A continuous 1 km open water swim completed at a supervised venue within eight weeks of the first session."
                cadence: phased
                effort_hours_estimate: "12"
              tasks:
                - "Book a beginners' session at a supervised venue"
                - "Swim three short loops close to the shore"
                - "Extend your continuous swim by one loop each week"
                - "Swim 1 km without stopping before entering a race"
            - name: Open water training on three hours a week
              description: |-
                ## Purpose
                Parents, shift workers and anyone with a demanding job rarely have five sessions a week to give. A plan that fits into three hours, built around one open water swim, one threshold set and one endurance set, can still get you to the start of a 3 km race well prepared.

                ## Milestones
                1. Three fixed training hours a week agreed with family or work.
                2. Each hour given one job: open water, threshold or endurance.
                3. Ten minutes of band work at home on two other days.
                4. A race distance chosen that fits the time available.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Twelve weeks of three-hour training weeks logged, ending in a race no longer than 3 km."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Agree three training hours a week with your household"
                - "Give each hour one job: open water, threshold or endurance"
                - "Choose a race no longer than 3 km for this season"
                - "Do ten minutes of band work at home on two other days"
            - name: Returning to open water after a season off
              description: |-
                ## Purpose
                After injury, illness, a new baby or simply a year away, cold tolerance and open water skills fade faster than pool fitness. Rebuilding over six weeks, starting in warmer water with shorter swims, avoids the shock of jumping straight back into the old routine.

                ## Milestones
                1. Any injury or health issue cleared with your doctor or physiotherapist before returning.
                2. First swims back taken in the warmest weeks of the season.
                3. Sighting, starts and cold tolerance each practised again.
                4. A return race chosen at least eight weeks after the first swim back.
              priority: low
              frontmatter:
                mode: building
                output_kind: knowledge
                success_criteria: "Six weeks of logged open water sessions after a break, with sighting and starts practised again before a race is entered."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Check with your doctor or physiotherapist that you are ready to swim"
                - "Book your first swims back for the warmest weeks of the season"
                - "Retest your critical swim speed before setting race pace again"
                - "Enter a race at least eight weeks after your first swim back"
            - name: Lake swimmer preparing for a sea race
              description: |-
                ## Purpose
                Lake swimmers meeting the sea for the first time face salt, swell, currents, jellyfish and much harder sighting. Doing at least four sea swims before the race, ideally at the same tide state as the start, removes most of the surprises.

                ## Milestones
                1. Four supervised sea swims completed before the race.
                2. Swimming in swell practised, with sighting timed to the top of each wave.
                3. The effect of salt water on goggles, chafe and thirst noted.
                4. The race course's tide times and likely conditions checked.
              priority: medium
              frontmatter:
                mode: building
                output_kind: knowledge
                success_criteria: "Four sea swims logged before the race, including one at the same tide state as the start, with conditions noted for each."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "Find a coached sea swimming group near the race coast"
                - "Book four sea swims before race day"
                - "Practise sighting from the top of each swell"
                - "Swim once at the same tide state as the race start"
            - name: Escorting a swimmer by kayak or paddleboard
              description: |-
                ## Purpose
                Long swims outside supervised venues need a paddler alongside, and swimmers who escort others learn what good support looks like. A capable escort, with the right kit, agreed signals and a feeding routine, is how clubs make long training swims possible.

                ## Milestones
                1. A kayak or paddleboard course taken, including self-rescue.
                2. Escort kit packed: whistle, phone in a dry bag, spare goggles, feeds and a first aid kit.
                3. Signals agreed with the swimmer for feeds, problems and ending the swim.
                4. At least two long club swims escorted.
              priority: low
              frontmatter:
                mode: service
                output_kind: deliverable
                success_criteria: "Two long swims escorted after completing a paddling and self-rescue course, with signals agreed with the swimmer in advance."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "Book a kayak or paddleboard safety and self-rescue course"
                - "Pack an escort kit with whistle, phone in a dry bag and first aid kit"
                - "Agree hand signals with the swimmer before setting off"
                - "Volunteer to escort a long swim at your club"
            - name: Marathon swims of 10 km and beyond
              description: |-
                ## Purpose
                Ten kilometres takes most club swimmers between two and a half and four hours, and it demands weekly volume, feeding practice and cold tolerance well beyond a 3 km race. A six-month build with a supported long swim each month makes the distance realistic.

                ## Milestones
                1. A 10 km event chosen, with its cut-off time and support rules noted.
                2. Weekly volume built towards 20 km over the block.
                3. Supported long swims of 5, 7 and 9 km completed with feeds.
                4. Shoulder health checked with a physiotherapist before peak volume.
                5. The event finished inside its cut-off.
              priority: medium
              deadlineOffsetDays: 180
              frontmatter:
                mode: building
                output_kind: event-completion
                success_criteria: "A 10 km open water swim finished inside the cut-off after a build including supported long swims of 5, 7 and 9 km."
                cadence: phased
                effort_hours_estimate: "120"
              tasks:
                - "Choose a 10 km event and note its cut-off time"
                - "Plan weekly volume rising towards 20 km"
                - "Book kayak support for long swims of 5, 7 and 9 km"
                - "Book a shoulder check with a physiotherapist before peak weeks"
            - name: Channel or strait crossing application
              description: |-
                ## Purpose
                Solo crossings such as the English Channel are ratified by a recognised association, need a licensed pilot boat often booked one to three years ahead, and usually require a medical form and an observed qualifying swim. Getting the paperwork, pilot and qualifying dates in order early turns an ambition into a dated plan.

                ## Milestones
                1. The crossing and its ratifying association chosen, with the rules read in full.
                2. A pilot boat booked for a tide window, with the deposit paid.
                3. Medical form and qualifying swim requirements noted with their deadlines.
                4. A support crew of two or three people confirmed.
                5. A training and qualifying calendar written up to the tide window.

                ## Notes
                Rules on costume, caps, feeding and touching the boat are strict and enforced by an observer on board. Read them before you train, not after.
              priority: low
              deadlineOffsetDays: 365
              frontmatter:
                mode: research
                output_kind: artifact
                success_criteria: "Association membership, a pilot booking and a qualifying swim date recorded, with crew confirmed and a written calendar up to the tide window."
                cadence: phased
                effort_hours_estimate: "20"
              tasks:
                - "Read the rules of the association that ratifies your crossing"
                - "Contact licensed pilots about tide windows and booking"
                - "Note the medical form and qualifying swim deadlines"
                - "Check in with your pilot and crew on dates and plans @recurring(quarterly)"
            - name: Six-hour cold water qualifying swim
              description: |-
                ## Purpose
                Many channel and long marathon swims require an observed swim of around six hours in water at or below a set temperature, often 16 °C, as proof of cold tolerance. Planning it like a race, with a venue, an observer, feeds and safety cover, means one attempt rather than three.

                ## Milestones
                1. The exact qualifying rules, temperature and observer requirements confirmed.
                2. A venue and date chosen when the water should be at the required temperature.
                3. An approved observer and kayak cover booked.
                4. A feed plan and a warming up plan written.
                5. The swim completed and the signed record sent to the association.
              priority: low
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "An observed qualifying swim of the required duration and temperature completed, with the signed record accepted by the association."
                cadence: one-shot
                effort_hours_estimate: "15"
              tasks:
                - "Confirm the qualifying swim rules with your association"
                - "Choose a venue and date when the water meets the temperature rule"
                - "Book an approved observer and kayak cover"
                - "Send the signed record to the association within a week"
            - name: Winter and ice swimming events
              description: |-
                ## Purpose
                Winter swimming galas and ice miles, swum in water of 5 °C or below, are a separate discipline with short distances, strict medical checks and serious risks. Approaching them through a club, with any required medical, a gradual season of supervised cold swims and experienced helpers, is the only sensible route in.

                ## Milestones
                1. A winter swimming club joined and its safety rules read.
                2. Medical requirements for the events you are interested in checked and met.
                3. A season of gradually colder supervised swims logged.
                4. A first winter event entered at a short distance.
                5. A recovery plan with helpers, layers and warm drinks written for each event.

                ## Notes
                Never attempt an ice swim alone or without medical and rescue cover. Follow the organising body's distance limits for your experience.
              priority: low
              frontmatter:
                mode: research
                output_kind: event-completion
                success_criteria: "A first winter swimming event completed at a short distance after a logged, supervised season of cold swims and any required medical."
                cadence: cyclic
              tasks:
                - "Find a winter swimming club with supervised sessions"
                - "Check the medical rules for the events you are interested in"
                - "Write a recovery plan with helpers, layers and warm drinks"
                - "Enter a short distance race at a winter swimming gala"
---

# Open Water Swim Racing

This area is for swimmers training for open water races in lakes, rivers and the sea, from a first 1500 m wetsuit swim to 10 km marathons and channel crossings. It starts with the foundations (a race distance, a health conversation, a supervised venue, a wetsuit, a safety plan and a baseline), moves through the weekly training machinery and the outdoor skills of sighting, drafting, starts, turns and reading the water, then the kit and pacing decisions, race weeks and debriefs, situations such as leaving the pool or meeting the sea for the first time, and finally marathon swims, crossings and winter events.

What repeats is a Saturday open water session, Tuesday endurance and Thursday threshold sets in the pool, twice-weekly dryland work, a Friday conditions check, cold water logging through the cooler months, a monthly long swim, a monthly wetsuit inspection and a month-end review, with race rules, venue membership and the safety plan refreshed each year. The Purchase decision, Metrics log, Training program, Operational checklist and Trip templates pair with the projects that name them. Installing adds all 50 projects as active, so archive the ones that are not for you yet.
