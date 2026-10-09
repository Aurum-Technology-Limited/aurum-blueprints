---
id: fitness-sport.triathlon-training
name: Triathlon Training
description: "A swim, bike and run build from choosing a first race and baseline tests to bricks, transitions, aero riding, race morning and middle or full distance blocks."
category: personal
version: 1.0.0
tags: [fitness-sport, triathlon-training, athlete, swim-bike-run, brick-sessions, transitions, multisport, endurance]
author: Aurum Technology
starter_structure:
  templates:
    - purchase-decision
    - training-program
    - metrics-log
    - operational-checklist
    - trip
  pillars:
    - name: Fitness & Sport
      emoji: "🏋️"
      description: "Training, play and competition: building strength, endurance and skill in a sport or a gym, structuring blocks of work around events, recovering properly, and keeping the sessions honest with a log rather than a feeling."
      pillarFrontmatter:
        review_cadence: monthly
      areas:
        - name: Triathlon Training
          description: "Balancing swim, bike and run training for sprint, Olympic, middle or full distance triathlons, including transitions and race-day logistics."
          projects:
            - name: Choosing your first triathlon distance and race
              description: |-
                ## Purpose
                Sprint (750 m swim, 20 km bike, 5 km run), Olympic, middle and full distance races ask for very different weeks, from five hours of training to fifteen. Picking the distance and a specific race first fixes the length of the build, the swim venue (pool, lake or sea) and whether you need a wetsuit, so every later decision has a date to work back from.

                ## Milestones
                1. Three candidate races compared on distance, date, swim venue, typical water temperature and cut-off times.
                2. One race entered, at a distance that leaves at least 12 weeks for a sprint or 20 for a middle distance.
                3. The race date and the build start date written in your calendar.
                4. A note of whether the swim is pool-based, wetsuit-optional or wetsuit-compulsory.

                ## Notes
                For a first race, a pool-based sprint removes the open water variable and lets you learn transitions in a calm setting.
              priority: high
              deadlineOffsetDays: 14
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "One triathlon entered, with its distance, swim venue and the build start date recorded in your calendar."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "List four triathlons falling four to nine months from today"
                - "Compare their swim venue, distance and bike course profile"
                - "Enter the chosen race and save the confirmation email"
                - "Count back from race day and mark the build start date"
            - name: Swim, bike and run baseline tests
              description: |-
                ## Purpose
                Three short tests, a 400 m swim time trial, a 20 minute bike effort and a 5 km run, give you a starting number in each sport and show which one is furthest behind. They also set the paces and heart rate or power numbers every later session uses, so a plan built without them is guesswork.

                ## Milestones
                1. A 400 m pool time trial completed, with time per 100 m worked out.
                2. A 20 minute hard steady bike effort completed indoors or on a safe flat loop, with average power or heart rate.
                3. A 5 km run time trial completed on a flat measured route.
                4. All three results logged with the date, conditions and how you felt.

                ## Notes
                Space the tests across a week rather than one day, so fatigue from one does not spoil the next. Hold off any maximal test until your health check is done if you have a heart condition or symptoms during exercise.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: building
                output_kind: knowledge
                success_criteria: "Recorded results for a 400 m swim, a 20 minute bike test and a 5 km run, each dated in the training log."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Book a pool lane slot for a 400 m swim time trial"
                - "Ride a 20 minute bike test after a 15 minute warm-up"
                - "Run a 5 km time trial on a flat measured route"
                - "Write the three results and test conditions in your log"
                - "Repeat the three tests to measure progress @recurring(quarterly)"
            - name: Weekly training hours you can sustain
              description: |-
                ## Purpose
                Most age-groupers struggle with triathlon on the calendar, not the course, because three sports need more hours than one and plans assume weeks that do not exist. Mapping a normal fortnight of work, family and sleep shows the real number of training hours available, which then decides the race distance and the plan you can follow.

                ## Milestones
                1. A typical fortnight mapped hour by hour, including commutes and family commitments.
                2. The training slots that are reliably free each week listed, with pool lane times beside them.
                3. A realistic weekly total agreed, plus a minimum week for busy periods.
                4. The total checked against the hours your chosen race distance usually needs.
              priority: high
              deadlineOffsetDays: 10
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A written weekly training total and a minimum week, both fitting inside a mapped fortnight of real commitments."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Write down every fixed commitment for the next two weeks"
                - "Mark the slots that are free every week, not just this one"
                - "Check public lane swim times against those free slots"
                - "Agree a weekly hours total and a minimum week with your household"
            - name: Pre-season health check before a first triathlon
              description: |-
                ## Purpose
                Triathlon combines cold-water swimming, long efforts and high heart rates, and some race organisers ask for a medical declaration or certificate. If you are new to endurance sport, have a heart or breathing condition, take regular medicines or have had chest pain or fainting during exercise, a conversation with your doctor before the build starts is the sensible first step.

                ## Milestones
                1. A list of your conditions, medicines and any symptoms during exercise written down.
                2. An appointment held with your doctor, or a decision recorded that none is needed for you.
                3. Any advice about cold water, hard efforts or medicines written in your training notes.
                4. The race's medical declaration requirements checked and completed.

                ## Notes
                This organises the conversation; your doctor decides what tests, if any, you need.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A record of health questions raised with your doctor, or a written reason none were needed, plus the race medical declaration completed."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "List any conditions, medicines and symptoms you have had during exercise"
                - "Check whether your race needs a medical certificate or declaration"
                - "Book a doctor's appointment if anything on the list applies"
                - "Note any advice about cold water swimming or hard efforts"
                - "Review the health list before each new season @recurring(yearly)"
            - name: Triathlon club, coach or self-coached plan
              description: |-
                ## Purpose
                Three sports mean three sets of sessions to plan, and the choice between a club, a personal coach and a written plan changes your costs, your pool access and how much feedback you get. A club often brings coached swims and group rides, a coach adapts the week to your life, and a book or app plan is cheapest but needs you to adjust it honestly.

                ## Milestones
                1. Local triathlon clubs listed with their swim session times, membership fees and beginner support.
                2. One trial session attended at a club, or one call held with a coach.
                3. Costs of the three options compared for a full season.
                4. A choice recorded with the reasons, and the first session booked.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A written choice between club, coach or self-coached plan, with season costs compared and the first session booked."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Find the triathlon clubs within 30 minutes of home"
                - "Compare club swim times and fees with your free slots"
                - "Attend one club trial swim or call one coach"
                - "Record your choice and book the first session"
            - name: Triathlon federation membership and race licence
              description: |-
                ## Purpose
                Many national triathlon federations sell an annual membership that includes a race licence, third-party insurance and entry discounts, while non-members pay a day licence at every race. Working out which is cheaper for your season, and what the insurance does and does not cover on training rides, avoids paying twice or riding uninsured.

                ## Milestones
                1. The federation's annual membership and day licence costs found.
                2. The number of races planned this season multiplied out against the day licence fee.
                3. The insurance cover for training and racing read and summarised in two lines.
                4. Membership bought or the day licence plan recorded, with the renewal date in your calendar.

                ## Notes
                Check whether the insurance covers training rides abroad and whether it includes personal accident cover; many policies are third-party only.
              priority: low
              deadlineOffsetDays: 21
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "Membership or day licence choice recorded, with the insurance cover summarised and the renewal date set."
                cadence: one-shot
                effort_hours_estimate: "1"
              tasks:
                - "Look up your national federation's membership and day licence prices"
                - "Count the races you plan to enter this season"
                - "Read and summarise the insurance cover in two lines"
                - "Renew or reconsider membership before the season opens @recurring(yearly)"
            - name: Race-legal bike and helmet check
              description: |-
                ## Purpose
                Triathlon rules turn small details into disqualifications: a helmet without a recognised safety standard, missing bar end plugs, or a bike that fails the mechanical check at racking. Checking the bike and helmet against your federation's rules months before the race leaves time to fix anything, and doubles as a safety check for every training ride.

                ## Milestones
                1. Your helmet's safety standard label and age checked, and the helmet replaced if it has had a crash.
                2. Bar end plugs fitted, brakes working and wheel quick releases or thru-axles secure.
                3. Tyres checked for cuts and worn tread, with your usual tyre pressure written down.
                4. Any aero bars checked against the rules for your race's distance and format.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: building
                output_kind: knowledge
                success_criteria: "A helmet with a valid safety label and a bike that passes a written check against your federation's rules."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Find your helmet's safety standard label and manufacture date"
                - "Fit bar end plugs and test both brakes"
                - "Check tyres for cuts and replace any worn ones"
                - "Read the bike and helmet section of your federation's rules"
                - "Inspect the helmet for cracks and age before race season @recurring(yearly)"
            - name: Essential triathlon kit list on a budget
              description: |-
                ## Purpose
                New triathletes are sold a lot they do not need for a first sprint, while missing the cheap items that save minutes: elastic laces, a race number belt, a trisuit that can be worn for all three legs. A kit list split into must-have, nice-to-have and later keeps the first season affordable and avoids buying twice.

                ## Milestones
                1. A kit list split into must-have, nice-to-have and later, with a price beside each item.
                2. Items already owned ticked off, including the bike, helmet and running shoes.
                3. The must-have items bought within budget.
                4. A note of what to borrow or hire rather than buy, such as a wetsuit or bike box.

                ## Notes
                Start from the **Purchase decision** template for any item that costs more than a race entry.
              priority: medium
              deadlineOffsetDays: 45
              frontmatter:
                mode: research
                output_kind: artifact
                success_criteria: "A priced three-tier kit list, with every must-have item owned or borrowed and the total spend recorded."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "List the kit your first race requires under its rules"
                - "Mark what you already own and what you can borrow"
                - "Buy elastic laces, a race belt and a trisuit if missing"
                - "Record the total spent against your kit budget"
            - name: Weekly schedule balancing swim, bike and run
              description: |-
                ## Purpose
                Good triathlon weeks place the sessions so that the hard ones are not back to back in the same muscles: the long ride and long run sit apart, swims fill the gaps and one day stays free. Fixing a default week, with each session in a real time slot, removes the daily decision of what to train and makes missed sessions obvious.

                ## Milestones
                1. A default week with every swim, bike, run and strength session in a named time slot.
                2. No two hard sessions on consecutive days, and at least one full rest day.
                3. A shorter fallback week for busy periods written beside the default.
                4. The week shared with anyone whose plans it affects.
              priority: high
              deadlineOffsetDays: 14
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A written default week and fallback week, with each session in a time slot and at least one rest day."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Place the long ride and long run on separate days"
                - "Fit two or three swims around pool opening times"
                - "Mark one full rest day and protect it"
                - "Write a fallback week for when work or family takes over"
            - name: Triathlon season plan from base to race
              description: |-
                ## Purpose
                Training the same way every week from January to race day leaves you either flat in spring or underdone by summer. Splitting the months into base, build, peak and taper phases, with the target race at the end and a recovery week every third or fourth week, gives each block a clear job in all three sports.

                ## Milestones
                1. The weeks from today to race day counted and split into base, build, peak and taper.
                2. A recovery week placed every third or fourth week.
                3. The focus of each phase written in one line per sport.
                4. Any tune-up races placed at the end of a build phase.

                ## Notes
                Start from the **Training program** template. Give your weakest sport more volume in base and more race-specific work in build.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A dated season plan showing base, build, peak and taper phases, recovery weeks and the target race."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Count the weeks between today and race day"
                - "Split them into base, build, peak and taper phases"
                - "Mark a recovery week every third or fourth week"
                - "Write each phase's focus for swim, bike and run"
            - name: Weekly triathlon training review
              description: |-
                ## Purpose
                Fifteen minutes on a Sunday evening comparing what you planned with what you did, across all three sports, catches the slide early: swims skipped for three weeks, an easy ride turned into a race, legs that have not felt fresh for ten days. The review then sets next week's sessions with that evidence in front of you.

                ## Milestones
                1. A review done each week with planned against completed hours per sport.
                2. Any session moved or dropped noted with the reason.
                3. Next week's sessions confirmed in the calendar before Monday.
                4. A monthly look at which sport slips most often.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Twelve consecutive weekly reviews recorded, each with planned and completed hours for swim, bike and run."
                cadence: rolling
              tasks:
                - "Write down this week's planned hours for each sport"
                - "Compare planned and completed hours per sport @recurring(weekly:sun)"
                - "Confirm next week's sessions in your calendar"
                - "Check which sport was missed most this month @recurring(monthly:28)"
            - name: Three-sport training log
              description: |-
                ## Purpose
                Paces, power and heart rate sit in three different apps, and none of them tells you whether a missed swim was down to fatigue or a closed pool. A single log with one line per session, covering duration, distance, effort and a note, shows the whole week at once and reveals patterns your devices hide.

                ## Milestones
                1. A log with columns for date, sport, duration, distance, effort score and notes.
                2. Sessions from the past four weeks entered from your devices.
                3. A monthly total of hours per sport calculated.
                4. One pattern from the log acted on in next month's plan.

                ## Notes
                Start from the **Metrics log** template. A session effort score from 1 to 10 is enough; there is no need to log every metric your watch offers.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: artifact
                success_criteria: "A training log holding at least eight weeks of sessions across all three sports, with monthly hours per sport totalled."
                cadence: rolling
              tasks:
                - "Create a log with one line per session across all sports"
                - "Enter the past four weeks of sessions from your devices"
                - "Total each sport's monthly hours against the plan @recurring(monthly:12)"
                - "Note one pattern to change in next month's sessions"
            - name: Twice-weekly swim sessions with a set purpose
              description: |-
                ## Purpose
                Swimming is the sport triathletes skip first, because pool times are fixed and it rarely feels urgent. Two booked swims a week, each written out in advance with a warm-up, a main set and a purpose such as threshold 100s or continuous race-distance swims, keep swim fitness from quietly falling behind.

                ## Milestones
                1. Two pool slots per week identified that do not clash with work.
                2. A bank of eight written swim sets covering technique, threshold and endurance.
                3. Every swim started with a set written on a card or loaded on your watch.
                4. Threshold pace per 100 m rechecked every six weeks.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Two written swim sessions completed in at least ten of the next twelve weeks."
                cadence: rolling
              tasks:
                - "Find two weekly lane swim slots that fit your schedule"
                - "Write eight swim sets and keep them on a waterproof card"
                - "Swim a written set with a clear purpose @recurring(weekly:mon,thu)"
                - "Retest your 100 m threshold pace after six weeks"
            - name: Weekly long ride for triathlon endurance
              description: |-
                ## Purpose
                The long ride builds the endurance every triathlon distance depends on, and for middle and full distance it is the biggest session of the week. Riding it on the same day each week, at an easy steady effort with planned routes and food, lets it grow by 15 to 20 minutes a fortnight without leaving you too tired to run.

                ## Milestones
                1. A long ride day fixed in the default week.
                2. Three safe routes of different lengths saved on your device.
                3. The long ride extended in planned steps toward the race bike distance or beyond.
                4. A short run off the bike added every second or third long ride in the build phase.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A long ride completed in at least ten of twelve weeks, with duration growing in planned steps toward the race bike distance."
                cadence: rolling
              tasks:
                - "Save three long ride routes of different lengths"
                - "Ride the long ride at a steady conversational effort @recurring(weekly:sat)"
                - "Add 15 minutes to the long ride every second week"
                - "Pack food and two bottles the night before each long ride"
            - name: Weekly long run within a triathlon week
              description: |-
                ## Purpose
                In a triathlon week the long run competes with the long ride for your legs, so it needs to be placed and paced with care. A weekly long run at easy pace, set at least a day away from hard bike work, builds the durability for the final leg without becoming the session that causes injury.

                ## Milestones
                1. A long run day fixed at least a day away from hard bike sessions.
                2. Long run duration set from the race distance, with a cap agreed in your plan.
                3. Easy pace confirmed by being able to speak in full sentences.
                4. Run shoe mileage noted so worn shoes are replaced in time.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A long run completed at easy pace in at least ten of twelve weeks, with no weekly increase above ten percent."
                cadence: rolling
              tasks:
                - "Choose a long run day that sits away from hard rides"
                - "Run the long run at an easy talking pace @recurring(weekly:sun)"
                - "Set a maximum long run duration for your race distance"
                - "Write down the mileage on your current run shoes"
            - name: Midweek brick session
              description: |-
                ## Purpose
                Running straight after cycling feels wrong the first time: heavy legs, a short stride and a pace that seems slow but is not. A short midweek brick, such as 45 minutes on the bike followed by 15 minutes of running, teaches the body the change of sport in a session small enough to fit before or after work.

                ## Milestones
                1. A midweek brick slot fixed, indoors on a turbo trainer or outdoors from home.
                2. The bike to run change done in under two minutes at home.
                3. Run pace in the first ten minutes off the bike recorded each time.
                4. The brick run extended in the build phase toward race-specific durations.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Eight brick sessions logged in twelve weeks, with the run pace off the bike recorded each time."
                cadence: rolling
              tasks:
                - "Set up a home transition spot with run shoes beside the turbo"
                - "Ride then run straight off the bike @recurring(weekly:wed)"
                - "Record run pace for the first ten minutes off the bike"
                - "Lengthen the brick run by five minutes in each build phase"
            - name: Strength and mobility for triathletes
              description: |-
                ## Purpose
                Swimming, cycling and running all repeat one small movement thousands of times, which leaves the hips, glutes, upper back and calves doing the injury-prone work. Two short strength sessions a week, built around single-leg strength, hip stability and the back of the shoulder, support all three sports and help you hold form late in a race.

                ## Milestones
                1. A 30 minute strength routine written with six to eight exercises.
                2. Starting loads or progressions recorded for each exercise.
                3. Two sessions a week completed through base and build phases.
                4. Strength reduced to one maintenance session a week in the last month before racing.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Two strength sessions a week completed for eight weeks, with loads logged for each exercise."
                cadence: rolling
              tasks:
                - "Write a 30 minute routine of single-leg, hip and shoulder exercises"
                - "Record starting loads or progressions for each exercise"
                - "Complete a short strength session @recurring(weekly:tue,fri)"
                - "Drop to one session a week four weeks before your race"
            - name: Bike care between turbo and road rides
              description: |-
                ## Purpose
                Indoor sessions drip sweat onto the headset and bolts, wet road rides grind the chain, and a mechanical problem on race day ends the race outright. A short monthly check and a quarterly deeper clean keep the bike reliable and let you spot a worn chain or cut tyre before it costs a race.

                ## Milestones
                1. A sweat cover or towel in place for every turbo session.
                2. A monthly check of chain wear, tyres, brakes and bolt tightness.
                3. A quarterly clean and lubrication done, or a service booked with a shop.
                4. A spare tube, tyre levers and a pump or CO2 kit checked and carried on every ride.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Monthly bike checks logged for six months and no ride lost to a preventable mechanical fault."
                cadence: rolling
              tasks:
                - "Put a sweat cover on the bike for indoor sessions"
                - "Check chain wear, tyres, brakes and bolts @recurring(monthly:9)"
                - "Clean and lube the drivetrain or book a service @recurring(quarterly)"
                - "Pack a spare tube, levers and inflation in the saddle bag"
            - name: Wetsuit and swim kit care routine
              description: |-
                ## Purpose
                A triathlon wetsuit is thin neoprene that tears from a fingernail and perishes in sun and chlorine, and it is often the most expensive kit after the bike. Rinsing it in fresh water, drying it inside out in the shade and checking the seams through the season makes it last years, while goggles and caps get replaced before they fail mid-race.

                ## Milestones
                1. The wetsuit rinsed in cold fresh water after every open water swim.
                2. The wetsuit stored on a wide hanger or flat, away from sunlight.
                3. Seams and nicks checked monthly in season and repaired with neoprene glue.
                4. Two pairs of goggles, one clear and one tinted, kept ready for race day.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A wetsuit in good repair at the start of race season, with monthly seam checks logged and two pairs of race goggles ready."
                cadence: rolling
              tasks:
                - "Buy a wide wetsuit hanger and a small tube of neoprene glue"
                - "Rinse and dry the wetsuit inside out after open water swims"
                - "Check wetsuit seams and goggle straps for damage @recurring(monthly:18)"
                - "Keep a clear and a tinted pair of goggles in your race bag"
            - name: Triathlon race rules and common penalties
              description: |-
                ## Purpose
                Age-group triathletes collect time penalties for things they did not know were rules: riding before the mount line, unbuckling the helmet before racking, drafting in a non-drafting race, or dropping a bottle outside a litter zone. Reading the rules for your race format once, and turning the common ones into a short card, saves minutes and disqualifications.

                ## Milestones
                1. Your federation's competition rules, or the race's own rules, read for your format.
                2. A one-page card of the ten rules most often broken, written in your own words.
                3. The drafting zone length and overtaking time for your race noted.
                4. Any open questions taken to the race briefing or a technical official.
              priority: high
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A one-page rules card covering helmet, mount line, drafting zone, litter and transition rules for your race format."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Download the competition rules for your race format"
                - "Write a card of the ten rules most often broken"
                - "Note the drafting zone length and time allowed to pass"
                - "Bring any open questions to the race briefing"
            - name: Wetsuit removal for a fast T1
              description: |-
                ## Purpose
                Getting stuck in a wetsuit is the slowest and most stressful part of many first triathlons, and the minutes lost there are free to win back. Practising the strip in sequence, zip and top half while running out of the water, then legs off beside the bike, until it takes under a minute turns T1 into routine.

                ## Milestones
                1. The removal sequence written in four steps.
                2. Ten practice strips done after a swim, with the time noted.
                3. A removal time under a minute achieved without help.
                4. A decision made on anti-chafe lubricant for wrists and ankles, tested in training first.
              priority: medium
              deadlineOffsetDays: 45
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Ten timed wetsuit removals logged, with at least three under 60 seconds."
                cadence: phased
                effort_hours_estimate: "3"
              tasks:
                - "Write the four-step wetsuit removal sequence"
                - "Practise the strip after five open water swims"
                - "Time each removal and note what slowed you down"
                - "Test an anti-chafe lubricant on wrists and ankles in training"
            - name: Transition layout and racking rehearsal
              description: |-
                ## Purpose
                Every second spent standing in transition looking for a helmet is lost, and races give you only a narrow space beside your bike. Rehearsing a fixed layout at home, the same towel, the same order, shoes and helmet always in the same place, means T1 and T2 happen the same way every time, even with your heart rate high.

                ## Milestones
                1. A transition layout chosen and photographed.
                2. T1 and T2 rehearsed at home five times with times recorded.
                3. Helmet on and fastened before touching the bike in every rehearsal.
                4. A full rehearsal done in race kit before each race.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A photographed transition layout and five timed home rehearsals of T1 and T2."
                cadence: phased
                effort_hours_estimate: "3"
              tasks:
                - "Lay out your race kit on a small towel and photograph it"
                - "Rehearse T1 and T2 at home with a stopwatch"
                - "Practise fastening the helmet before lifting the bike off the rack"
                - "Run a full transition rehearsal in race season @recurring(monthly:22)"
            - name: Flying mount and dismount practice
              description: |-
                ## Purpose
                Mounting the bike with the shoes already clipped to the pedals, and dismounting barefoot while rolling, saves time in every race but causes crashes when rushed. Learning it in stages in an empty car park, with elastic bands holding the shoes level, makes it safe; if it is not reliable by race week, a standing mount in your bike shoes is the right call.

                ## Milestones
                1. Shoes clipped to the pedals and held level with elastic bands.
                2. Riding with feet on top of the shoes practised for 200 metres.
                3. A running mount and a rolling dismount completed ten times without a wobble.
                4. A decision made before race week: flying or standard mount.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Ten clean flying mounts and dismounts completed in practice, or a recorded decision to use a standard mount."
                cadence: phased
                effort_hours_estimate: "3"
              tasks:
                - "Find an empty car park or quiet flat path to practise on"
                - "Fix your bike shoes level with thin elastic bands"
                - "Practise sliding your feet into the shoes once rolling"
                - "Decide before race week which mount you will use"
            - name: The first two kilometres off the bike
              description: |-
                ## Purpose
                Almost everyone runs the first kilometre of a triathlon run far too fast, because legs fresh from pedalling cannot judge pace, and then pays for it in the last third. Practising the opening two kilometres at goal pace with a watch alert teaches what race pace feels like on cycling legs, a different sensation from fresh running.

                ## Milestones
                1. Goal run pace for your race worked out from your recent run test.
                2. A pace alert set on your watch for the first two kilometres.
                3. Six brick runs where the first two kilometres were within ten seconds per kilometre of goal pace.
                4. A note of what the right pace feels like, in your own words.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Six brick runs logged with the first two kilometres within ten seconds per kilometre of goal pace."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Work out goal run pace from your 5 km test"
                - "Set a watch pace alert for the first two kilometres"
                - "Run the first two kilometres of a brick at goal pace"
                - "Write down how the right pace felt in one sentence"
            - name: Holding the aero position for race distance
              description: |-
                ## Purpose
                An aero position only saves time if you can hold it, and many triathletes sit up after 20 minutes because the neck, lower back or hip angle cannot cope. Building time on the aero bars in planned blocks, from ten minutes toward the full race bike leg, makes the speed real and shows whether the position itself needs changing.

                ## Milestones
                1. Current comfortable time on the aero bars measured.
                2. Aero blocks added to every long ride, growing ten minutes a fortnight.
                3. Neck and lower back mobility work added to strength sessions.
                4. Continuous aero time reaching 80 percent of the race bike duration without pain.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Continuous aero time in training reaching 80 percent of the race bike duration, logged across the build."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Measure how long you stay on the aero bars comfortably"
                - "Add a timed aero block to the next long ride"
                - "Add neck and lower back mobility to strength sessions"
                - "Note any numbness or pain and raise it at your bike fit"
            - name: Drinking and eating on the bike in aero
              description: |-
                ## Purpose
                On a middle or full distance race most of your fuel goes in on the bike, so being unable to reach a bottle without sitting up or wobbling costs time and energy. Practising bottle grabs, reaching a top tube bag and eating in the aero position on quiet roads makes your fuelling plan possible to carry out at race speed.

                ## Milestones
                1. Bottle and food positions chosen, such as between the aero bars, on the frame and in a top tube bag.
                2. Drinking from each bottle position practised without sitting up.
                3. Taking a bottle from a feed station practised at low speed.
                4. A long ride completed with every planned feed taken in aero.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A long ride completed with every planned drink and feed taken from race positions without leaving the aero bars."
                cadence: phased
                effort_hours_estimate: "3"
              tasks:
                - "Choose where each bottle and snack will sit on the bike"
                - "Practise drinking from every bottle position on a quiet road"
                - "Ask a friend to hand you bottles while you ride slowly past"
                - "Ride a long ride taking every feed in the aero position"
            - name: Pacing plan across swim, bike and run
              description: |-
                ## Purpose
                Triathlon pacing is a budget: every bit of extra effort on the swim or the bike is paid back on the run, often with interest. Writing a pacing plan for each leg, with target pace, power or heart rate and the effort you expect to feel, keeps you honest when others go past in the first hour.

                ## Milestones
                1. Target swim pace per 100 m, bike power or heart rate and run pace written for the race.
                2. The plan tested in at least two long bricks at race intensity.
                3. A rule written for hills, wind and heat on the bike.
                4. A short pacing note fixed to the bike or written on your wrist.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: artifact
                success_criteria: "A written pacing plan with targets for each leg, tested in two race-intensity bricks."
                cadence: phased
                effort_hours_estimate: "3"
              tasks:
                - "Write target pace, power or heart rate for each leg"
                - "Test the bike target in a long brick at race intensity"
                - "Write a rule for pacing climbs and headwinds"
                - "Make a small pacing card to fix to your top tube"
            - name: Clip-on aero bars or a dedicated triathlon bike
              description: |-
                ## Purpose
                A dedicated triathlon bike can cost several times a set of clip-on bars for a road bike, and the time saved depends on your course, your race distance and whether you can hold the position. Comparing the two on cost, fit, handling and the courses you will race lets you spend where the minutes really are, or decide the money is better spent on a bike fit.

                ## Milestones
                1. Your season's courses listed with their climbs, technical corners and bike distance.
                2. Clip-on bars and two triathlon bikes compared on price, adjustability and handling.
                3. Any race rules on aero bars checked for your formats.
                4. A decision recorded with the reasons and the budget.

                ## Notes
                Start from the **Purchase decision** template. For a hilly or technical course, or a first season, clip-ons on a well-fitted road bike are usually enough.
              priority: medium
              deadlineOffsetDays: 60
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A recorded choice between clip-on bars and a triathlon bike, compared on cost, fit and your season's courses."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "List your season's bike courses with climbs and corners"
                - "Price two clip-on bar options and two triathlon bikes"
                - "Check the race rules on aero bars for your formats"
                - "Record your decision and the budget you set"
            - name: Professional bike fit for the triathlon position
              description: |-
                ## Purpose
                Fitting aero bars without changing the rest of the bike usually leaves the rider cramped, with a closed hip angle that hurts the run. A fit with a specialist who works with triathletes sets saddle, reach and pad position for a posture you can hold for the whole bike leg and still run well afterwards.

                ## Milestones
                1. Two fitters who work with triathletes shortlisted, with prices and what each includes.
                2. A fit completed, with saddle height, setback, reach and pad positions written down.
                3. Three rides of over an hour done in the new position and any discomfort noted.
                4. A follow-up adjustment completed if one was needed.
              priority: medium
              deadlineOffsetDays: 60
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "A completed bike fit with all key measurements written down, and three long rides done in the new position."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Find two fitters who regularly fit triathletes"
                - "Book the fit and bring your race shoes and trisuit"
                - "Write down every measurement the fitter sets"
                - "Ride three long rides and note any discomfort"
            - name: Wetsuit choice, buy, rent or swimskin
              description: |-
                ## Purpose
                Wetsuit rules depend on water temperature, and most races publish cut-offs where wetsuits become compulsory, optional or banned. Renting for a first season, buying a mid-range triathlon wetsuit or adding a swimskin for warm races are all sensible, and the right answer depends on how many open water races you have and how confident you are in the water.

                ## Milestones
                1. Water temperatures and wetsuit rules checked for your season's races.
                2. Rental, entry-level and mid-range suits compared on price and shoulder flexibility.
                3. A suit tried on, wet or in a pool where the shop allows it.
                4. A choice recorded, with the suit in hand six weeks before the first open water race.

                ## Notes
                Start from the **Purchase decision** template. Fit beats price: a suit that restricts the shoulders slows you more than a cheaper suit that fits.
              priority: medium
              deadlineOffsetDays: 60
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A wetsuit bought, rented or ruled out by race rules, chosen against your season's water temperatures and in hand six weeks before racing."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Check the wetsuit rules and water temperatures for your races"
                - "Compare renting with buying an entry-level or mid-range suit"
                - "Try two suits for fit across the shoulders and neck"
                - "Book the rental or buy the suit you chose"
            - name: Rebalancing hours toward your weakest discipline
              description: |-
                ## Purpose
                Most age-groupers spend most of their time in their favourite sport and lose the most time in the one they avoid. Comparing your splits or test results with typical age-group times shows where the biggest gain sits, and moving one or two hours a week toward that sport for a block usually saves more time than polishing your strongest.

                ## Milestones
                1. Your last race splits or baseline tests compared with age-group medians.
                2. The discipline with the largest gap identified.
                3. One to two hours a week moved toward that discipline for eight weeks.
                4. A retest at the end of the block, with the change recorded.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "An eight-week block with extra hours in your weakest discipline, ending in a retest that records the change."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Compare your splits with age-group medians for the same race"
                - "Name the discipline with the biggest gap"
                - "Move one or two weekly hours into that sport for eight weeks"
                - "Retest that discipline at the end of the block"
            - name: Cutting transition times from race splits
              description: |-
                ## Purpose
                Transition times are printed in your results, and comparing them with the fastest in your age group often shows two or three minutes lost standing still. Breaking each transition into steps, swim exit to mount line and dismount line to run exit, shows which step is slow and gives you one change to practise for the next race.

                ## Milestones
                1. T1 and T2 times from your last race compared with the top ten in your age group.
                2. Each transition split into steps and the slow step identified.
                3. One change chosen, such as elastic laces, shoes left on the bike or helmet placed on the bars.
                4. The change practised five times before the next race.
              priority: low
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A written comparison of your T1 and T2 with your age group, and one change practised five times before the next race."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Find your T1 and T2 times in your last race results"
                - "Compare them with the top ten in your age group"
                - "Pick one slow step to change before the next race"
                - "Practise the change five times in home rehearsals"
            - name: Race wheels and tyre choice for your course
              description: |-
                ## Purpose
                Deep rim wheels and fast tyres are among the most marketed upgrades in triathlon, but on a windy coastal course a deep front wheel can be hard to handle, and the gain is small on a hilly route. Matching wheels and tyres to your target course, your weight and your handling, and testing them before race day, avoids buying speed you cannot use.

                ## Milestones
                1. The course profile and typical wind for your target race checked.
                2. Options compared: training wheels with faster tyres, hired mid-depth wheels or a purchase.
                3. Tyre pressure for your weight and tyre width worked out.
                4. Race wheels ridden on at least two long rides before the race.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A wheel and tyre setup chosen for your target course and ridden on two long rides before race week."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Check the course profile and usual wind for your race"
                - "Compare faster tyres, hire wheels and a wheel purchase"
                - "Work out a race tyre pressure for your weight and tyres"
                - "Ride two long rides on the race wheels before race week"
            - name: Pre-race course reconnaissance
              description: |-
                ## Purpose
                Knowing the course removes surprises that cost minutes: a long run from swim exit to transition, a steep descent into a sharp bend, a run course with three laps you need to count. Riding or driving the bike route, walking transition and studying the swim layout a few weeks before the race turns the course map into something you have already seen.

                ## Milestones
                1. Course maps for swim, bike and run downloaded and studied.
                2. The bike course ridden or driven, with hazards marked on the map.
                3. The distance from swim exit to transition and the flow through transition noted.
                4. A list of three course features to rehearse in training.
              priority: medium
              frontmatter:
                mode: event
                output_kind: knowledge
                success_criteria: "Course notes for all three legs, with bike hazards marked and three rehearsal points listed, completed before race week."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Download the swim, bike and run course maps"
                - "Ride or drive the bike course and mark any hazards"
                - "Note the swim exit to transition distance and layout"
                - "Pick three course features to rehearse in training"
            - name: Duathlon or aquathlon as a tune-up race
              description: |-
                ## Purpose
                A short duathlon (run, bike, run) or aquathlon (swim, run) four to six weeks before your main race tests transitions, pacing and the race morning routine with lower stakes and less kit. It also shows whether your planned run pace off the bike holds under race pressure, with time left to adjust.

                ## Milestones
                1. A duathlon, aquathlon or short triathlon found four to six weeks before the main race.
                2. The tune-up raced with one or two specific goals, such as T2 under a minute.
                3. Splits and transition times recorded.
                4. Two lessons written down and applied to the main race plan.
              priority: low
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A tune-up race completed four to six weeks before the main race, with splits recorded and two lessons written into the race plan."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Search for duathlons and aquathlons four to six weeks before race day"
                - "Enter the tune-up and set one or two specific goals"
                - "Record your splits and transition times after the race"
                - "Write two lessons into your main race plan"
            - name: Race week plan for a sprint or Olympic triathlon
              description: |-
                ## Purpose
                Race week is when first-timers do too much: a last hard session, a new pair of shoes, a late night packing. A plan for the final seven days, with short sharp sessions, racking and briefing times, familiar meals and kit packed two days early, gets you to the start fresh and calm.

                ## Milestones
                1. The last seven days written with a short session per sport and two rest days.
                2. Registration, racking and briefing times noted.
                3. Kit packed and checked two days before the race.
                4. Dinner the night before and race breakfast chosen from foods you have trained on.
              priority: medium
              frontmatter:
                mode: event
                output_kind: artifact
                success_criteria: "A seven-day race week plan written, with kit packed and checked two days before the race."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Write the last seven days with one short session per sport"
                - "Note registration, racking and briefing times"
                - "Pack and check all race kit two days before the race"
                - "Choose a pre-race dinner and breakfast you have trained on"
            - name: Race morning transition checklist
              description: |-
                ## Purpose
                On race morning nerves wipe short-term memory, which is how people leave goggles in the car or rack the bike in its hardest gear. A written checklist from wake-up to swim start, covering tyre pressure, gear selection, nutrition taped on, transition layout and wetsuit on, gets everything done in order without having to think.

                ## Milestones
                1. A timed race morning schedule from alarm to swim start.
                2. A transition checklist covering bike, helmet, shoes, nutrition and race number.
                3. The checklist tested at a tune-up race or full rehearsal and corrected.
                4. A printed copy packed in the race bag.

                ## Notes
                Start from the **Operational checklist** template.
              priority: high
              frontmatter:
                mode: event
                output_kind: artifact
                success_criteria: "A printed race morning checklist, tested at one race or full rehearsal and kept in the race bag."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Write the race morning schedule backwards from the swim start"
                - "List every item to check in transition before leaving it"
                - "Test the checklist at your tune-up race or a rehearsal"
                - "Print the corrected checklist and pack it in your race bag"
            - name: Travelling to an away triathlon with a bike
              description: |-
                ## Purpose
                Racing away from home adds a layer of logistics: packing a bike safely, flights or a long drive, rebuilding the bike and checking it before racking, and finding food and sleep near an early start. Planning the trip as part of the race, with a buffer day and a bike shop nearby, keeps travel problems from becoming race problems.

                ## Milestones
                1. Transport for you and the bike booked, with a bike box, bag or rack arranged.
                2. Accommodation booked close to the start, with breakfast possible before dawn.
                3. The bike packed, rebuilt and test ridden on a practice run at home.
                4. A buffer day before the race and a local bike shop noted.

                ## Notes
                Start from the **Trip** template.
              priority: medium
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "Travel, accommodation and bike transport booked, with the bike rebuilt and test ridden on arrival before racking."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Decide between a bike box, bike bag or car rack"
                - "Book accommodation within easy reach of the start"
                - "Practise packing and rebuilding the bike at home"
                - "Find a bike shop near the race venue"
            - name: Post-race splits debrief
              description: |-
                ## Purpose
                Within a few days of a race, while the details are fresh, comparing your splits with your plan tells you more than the finish time alone. A short debrief covering swim, T1, bike, T2, run, fuelling and pacing, ending in one thing to keep, one to change and one open question, is what makes the next race faster.

                ## Milestones
                1. Official splits for every leg and transition copied into your log.
                2. Splits compared with the pacing plan and your training data.
                3. One thing to keep, one to change and one open question written down.
                4. The change added to your next block or race plan.
              priority: medium
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A debrief note for each race written within seven days, with splits against plan and one keep, one change and one question."
                cadence: cyclic
              tasks:
                - "Copy your official splits into the training log"
                - "Compare each leg with your pacing plan"
                - "Write one keep, one change and one open question"
                - "Ask the agent to turn the debrief into goals for the next block"
            - name: Taper for a middle or full distance triathlon
              description: |-
                ## Purpose
                Long-distance athletes often taper too little, afraid of losing fitness, or too much, and arrive feeling sluggish. A two to three week taper that cuts volume substantially while keeping short race-pace efforts in all three sports lets fatigue clear while fitness holds, provided you agree its shape with your coach or plan in advance.

                ## Milestones
                1. Taper length and planned volume written for each week.
                2. Short race-pace efforts kept in each sport through the taper.
                3. Sleep and food held steady, with no new kit or sessions.
                4. A short daily note of how legs and mood feel.
              priority: high
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A two to three week taper completed as written, with daily feel notes and race-pace efforts in all three sports."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "Write the taper weeks with planned volume for each sport"
                - "Keep two short race-pace efforts per sport each week"
                - "Set a rule of no new kit or food in the last fortnight"
                - "Note how your legs and mood feel each day"
            - name: Runner crossing over to triathlon
              description: |-
                ## Purpose
                Runners bring an engine and a strong final leg to triathlon but usually lose most time in the water and on the bike, and tend to keep over-running in training. Swapping two runs a week for swim and bike sessions, while keeping one quality run, protects your run speed and builds the two sports that will decide your result.

                ## Milestones
                1. Run volume reduced by about a third and the time moved to swimming and cycling.
                2. A swim technique lesson completed in the first month.
                3. Weekly bike hours built to match your previous run hours.
                4. One quality run a week kept to protect run speed.
              priority: medium
              frontmatter:
                mode: building
                output_kind: habit
                success_criteria: "Twelve weeks completed with at least two swims and two rides a week and one quality run kept."
                cadence: phased
              tasks:
                - "Choose which two weekly runs to replace with swim and bike"
                - "Book an adult swim technique lesson"
                - "Add one hour of riding per week each fortnight"
                - "Keep one quality run each week on the same day"
            - name: Cyclist crossing over to triathlon
              description: |-
                ## Purpose
                Cyclists arrive with a strong bike leg and the aerobic base for long efforts, but their bones, tendons and calves are not used to running, and injuries often follow fast increases. A run build that starts with run-walk intervals and adds time slowly, plus regular brick runs, makes the run a strength rather than the leg you survive.

                ## Milestones
                1. A run-walk plan of three short runs a week written down.
                2. Run time increased by no more than ten percent a week for twelve weeks.
                3. Swim technique sessions completed in the first month.
                4. Brick runs added once 30 minutes of continuous running feels easy.
              priority: medium
              frontmatter:
                mode: building
                output_kind: habit
                success_criteria: "Twelve weeks of gradual run build completed without injury, reaching 30 minutes of continuous running off the bike."
                cadence: phased
              tasks:
                - "Write a run-walk plan of three short runs a week"
                - "Cap weekly run increases at ten percent"
                - "Book two swim technique sessions for the first month"
                - "Add a short brick run once 30 minutes of running is easy"
            - name: Weak swimmer's path to the race swim distance
              description: |-
                ## Purpose
                Plenty of triathletes start unable to swim more than a length or two of front crawl, and the swim is the leg that worries them most. A staged plan, from improver lessons and breathing drills to 400 m continuous and then the race distance plus ten percent, builds confidence in the water well before the first race.

                ## Milestones
                1. An adult improver lesson block or beginner squad booked.
                2. 400 m of continuous front crawl swum without stopping.
                3. The race swim distance swum continuously in the pool.
                4. The race distance plus ten percent swum, with a calm switch to breaststroke and back practised.

                ## Notes
                Being able to switch to breaststroke for a few strokes, settle your breathing and carry on is a race skill, not a failure. Practise it on purpose.
              priority: medium
              deadlineOffsetDays: 120
              frontmatter:
                mode: building
                output_kind: habit
                success_criteria: "The race swim distance plus ten percent swum continuously in the pool at least four weeks before race day."
                cadence: phased
                effort_hours_estimate: "30"
              tasks:
                - "Book an adult improver lesson block or beginner squad"
                - "Practise breathing every three strokes for ten minutes each swim"
                - "Swim 400 m continuous front crawl and record the time"
                - "Practise switching to breaststroke and back to settle nerves"
            - name: Triathlon training on eight hours a week around family
              description: |-
                ## Purpose
                Parents and carers rarely get long blocks of free time, and a 15 hour plan becomes a source of guilt rather than fitness. Building a week around eight hours, with early mornings, the turbo trainer after bedtime and runs that double as commutes, makes sprint and Olympic racing realistic without missing family life.

                ## Milestones
                1. A week of eight hours agreed with your partner or household, with protected times.
                2. At least two sessions moved to times that take nothing from family, such as early mornings or commutes.
                3. A turbo set-up at home for short evening sessions.
                4. A family-friendly race chosen, with a plan for the day for everyone.
              priority: medium
              frontmatter:
                mode: building
                output_kind: habit
                success_criteria: "Eight weeks completed averaging eight hours of training, with no session taken from family time agreed as protected."
                cadence: phased
              tasks:
                - "Agree protected training times with your partner or household"
                - "Turn one commute a week into a run or ride"
                - "Set up the turbo trainer for 45 minute evening sessions"
                - "Pick a race with a family-friendly venue and timetable"
            - name: Triathlon relay team with friends
              description: |-
                ## Purpose
                Relays, where three people each take one leg, are a good way to try race day, bring in a friend who only swims or runs, or race through an injury in one sport. Organising one means agreeing who does which leg, entering as a team, and practising the timing chip handover in transition.

                ## Milestones
                1. Two teammates confirmed, each with a leg they are fit for.
                2. The relay entered with team name and every member's details.
                3. The chip handover rule for the race read and practised once.
                4. A meeting point and kit plan agreed for race morning.
              priority: low
              frontmatter:
                mode: service
                output_kind: event-completion
                success_criteria: "A relay team of three entered, with the chip handover practised once and a race morning meeting point agreed."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Ask two friends which leg they would race"
                - "Enter the relay and add every member's details"
                - "Read the race's relay handover rules"
                - "Practise the timing chip handover once before race day"
            - name: Triathlon off-season and winter base
              description: |-
                ## Purpose
                After the last race of the season, two to four weeks of unstructured activity lets body and motivation recover, and then winter is the best time to fix technique, build strength and lay an aerobic base. Planning the off-season avoids the two common errors: holding race fitness all winter until burnout, or a three-month stop that means starting from scratch.

                ## Milestones
                1. Two to four weeks of unstructured, enjoyable activity after the final race.
                2. One technical focus chosen for winter, such as swim stroke or run form.
                3. A winter week with more strength and indoor riding written down.
                4. The season review done before entering next year's races.
              priority: low
              frontmatter:
                mode: building
                output_kind: habit
                success_criteria: "An off-season of two to four easy weeks followed by a written winter week with one technical focus."
                cadence: cyclic
              tasks:
                - "Plan two to four weeks of easy, unstructured activity"
                - "Choose one technical focus to fix over the winter"
                - "Write a winter week with two strength sessions and indoor rides"
                - "Review the season before entering next year's races @recurring(yearly)"
            - name: Middle distance triathlon build
              description: |-
                ## Purpose
                Moving up to middle distance, a 1.9 km swim, 90 km bike and 21.1 km run, usually needs 16 to 20 weeks of building on a sprint or Olympic background and eight to twelve hours a week at peak. The build hinges on long rides reaching three to four hours, long bricks, a fuelling plan practised in training and run durability.

                ## Milestones
                1. A 16 to 20 week build written with the long ride, long run and brick progression.
                2. Long rides reaching at least three hours with race fuelling practised.
                3. Two long bricks, such as a three hour ride and a 45 minute run, completed at race effort.
                4. A race pacing and fuelling plan written and tested.
              priority: medium
              frontmatter:
                mode: building
                output_kind: event-completion
                success_criteria: "A middle distance race completed after a written 16 to 20 week build including two long race-effort bricks."
                cadence: phased
              tasks:
                - "Write the 16 to 20 week build with key sessions per week"
                - "Plan the long ride progression toward three to four hours"
                - "Schedule two long race-effort bricks in the build"
                - "Ask the agent to draft a race pacing plan from your test results"
            - name: Full distance triathlon build
              description: |-
                ## Purpose
                Full distance, a 3.8 km swim, 180 km bike and 42.2 km run, takes most age-groupers 12 to 17 hours on the day and six to nine months of preparation that reshapes a household's weekends. Planning the build with a coach or proven plan, agreeing the time cost with the people you live with, and treating sleep and recovery as training decides whether you reach the start healthy.

                ## Milestones
                1. Household agreement on the weekly hours and long weekend sessions.
                2. A 24 to 36 week build with base, build and specific phases written.
                3. Long rides of five to six hours and long bricks completed in the specific phase.
                4. Swim and bike cut-off times checked against your projected splits.
              priority: medium
              frontmatter:
                mode: building
                output_kind: event-completion
                success_criteria: "A full distance race finished within cut-offs after a written build of at least 24 weeks and an agreed household plan."
                cadence: phased
              tasks:
                - "Talk through the weekly hours with your household first"
                - "Check the swim and bike cut-off times for your race"
                - "Write the build in base, build and specific phases"
                - "Book one recovery weekend in each month of the build"
            - name: Chasing an age-group championship slot
              description: |-
                ## Purpose
                Qualifying for an age-group championship, such as a national team place or a world championship slot at a qualifying race, means racing against a known standard rather than the clock alone. Studying past qualifying results and slot allocation for your age group, choosing races where your splits are competitive and planning a season around them makes the target concrete.

                ## Milestones
                1. The qualification route and rules for your federation or race series read.
                2. Qualifying times or places for your age group over the last two years gathered.
                3. Your splits compared with them and the gap per discipline worked out.
                4. One or two qualifying races chosen and the season planned around them.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "Past qualifying standards for your age group gathered and compared with your splits, with qualifying races chosen."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Read the qualification rules for your federation or series"
                - "Gather two years of qualifying results for your age group"
                - "Work out your gap to qualifying in each discipline"
                - "Choose one or two qualifying races for next season"
            - name: Heat preparation for a hot-weather triathlon
              description: |-
                ## Purpose
                Races in hot climates or late summer can push run splits back by many minutes, and heat illness is a real risk on long courses. Preparing with heat sessions in the last two to three weeks, estimating your sweat losses and planning cooling at aid stations, with your clinician's input if you have a medical condition, means you race to the conditions rather than your cool-weather plan.

                ## Milestones
                1. Typical race-day temperature and humidity for the venue checked.
                2. Heat sessions, such as indoor rides in a warm room, planned for the final three weeks.
                3. Sweat loss estimated by weighing before and after two sessions.
                4. A cooling and pacing adjustment written for the run.

                ## Notes
                Stop and cool down if you feel dizzy, confused or stop sweating in training, and know the race's medical tent locations on the day.
              priority: low
              frontmatter:
                mode: building
                output_kind: knowledge
                success_criteria: "A heat plan with sweat loss measured twice and a written run pacing adjustment for the race-day conditions."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Check the venue's usual race-day temperature and humidity"
                - "Plan heat sessions for the final three weeks"
                - "Weigh yourself before and after two long sessions"
                - "Write how you will adjust run pace and cool at aid stations"
---

# Triathlon Training

This area is for anyone balancing three sports toward a start line, from a first pool-based sprint to a full distance race. It opens with the foundations (choosing the race, baseline tests, honest weekly hours, a health check, rules-legal kit and a season plan), then the weekly machinery of swims, long rides, long runs, bricks and strength, the race skills of transitions, aero riding and pacing, the decisions about bikes, fits and wetsuits, race events from course recce to debrief, the situations that change the plan, and finally middle and full distance work.

What repeats is a Sunday review and long run, a Saturday long ride, a Wednesday brick, swims on Monday and Thursday, strength on Tuesday and Friday, monthly bike and wetsuit checks and quarterly retests in all three sports. The Purchase decision, Training program, Metrics log, Operational checklist and Trip templates pair with the projects that name them. Installing adds all 50 projects as active, so archive the ones that are not for you yet.
