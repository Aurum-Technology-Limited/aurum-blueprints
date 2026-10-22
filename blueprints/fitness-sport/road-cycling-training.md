---
id: fitness-sport.road-cycling-training
name: Road Cycling Training
description: "Road cycling built on numbers: a proper bike fit, FTP and power zones, a weekly training structure, bike upkeep, group and descending skills, and preparation for sportives, time trials and first races."
category: personal
version: 1.0.0
tags: [fitness-sport, road-cycling-training, athlete, cycling, ftp, power-zones, sportive, bike-fit]
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
        - name: Road Cycling Training
          description: "Improving road cycling fitness with structured rides, power or heart rate zones, sportive and race preparation, and bike setup."
          projects:
            - name: Professional bike fit before adding volume
              description: |-
                ## Purpose
                A bike that fits badly turns extra hours into sore knees, numb hands and a stiff lower back, and the problem grows with every week of added volume. A fit from a qualified fitter, done before the training block starts, sets saddle height, setback, reach and cleat position once and records them so they can be copied to any future bike.

                ## Milestones
                1. Current aches, injuries and riding goals written down for the fitter.
                2. A fit completed with a qualified fitter, with before and after measurements.
                3. Saddle height, setback, bar reach, bar drop and cleat positions recorded in one note.
                4. Three weeks of riding on the new position, with any lingering discomfort reported back to the fitter.

                ## Notes
                Change position in small steps. Moving the saddle more than a few millimetres at once can trade one ache for another, so most fitters book a short follow-up.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A fit completed by a qualified fitter, with saddle height, setback, reach, drop and cleat positions recorded in a single note."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Write down every ache you notice on rides over two hours"
                - "Book a fit with a qualified bike fitter and bring your cycling shoes"
                - "Photograph and measure the bike before the fit appointment"
                - "Record the final fit numbers in a note you can copy to a new bike"
            - name: Choosing a power meter or smart trainer
              description: |-
                ## Purpose
                Training by numbers needs a reliable source of power, and the choice is usually between a pedal or crank power meter for outdoor riding and a direct-drive smart trainer for indoor sessions. Deciding which comes first, within a set budget and compatible with your bike and head unit, stops an expensive purchase that does not suit how you actually ride.

                ## Milestones
                1. A budget set and a split of indoor versus outdoor riding hours estimated.
                2. Compatibility checked: crank or pedal standard, axle type, cassette and head unit protocols.
                3. Three options scored against accuracy, compatibility, price and what you would ride with it.
                4. One device bought, installed and paired with your head unit or training app.

                ## Notes
                Start from the **Purchase decision** template. Dual-sided meters give left and right balance, which most riders never use. Single-sided is a sensible default on a budget.
              priority: high
              deadlineOffsetDays: 45
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A power meter or smart trainer chosen from three scored options, installed and pairing with your head unit or app."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Estimate how many of your weekly hours are ridden indoors versus outdoors"
                - "Check your crank standard, pedal system and rear axle type"
                - "Score three power options against accuracy, price and compatibility"
                - "Install the chosen device and pair it with your head unit"
            - name: First FTP test and seven power zones
              description: |-
                ## Purpose
                Functional threshold power is the anchor that turns a plan like five times five minutes at 105 percent into a real target on your screen. One honest test on fresh legs, followed by setting the zones in your head unit and training app, makes every structured session from now on hit the right intensity instead of a guess.

                ## Milestones
                1. A test protocol chosen, such as a 20-minute test or a ramp test, and the same one kept for future retests.
                2. The test ridden after an easy day, on the same bike and power source you will train with.
                3. FTP calculated and seven power zones set in the head unit and training platform.
                4. The test date, protocol, FTP and conditions recorded so the next test is comparable.

                ## Notes
                Ramp tests tend to flatter riders with a strong sprint and short-changed diesels. Pick one protocol and stick to it, because the trend matters more than the number.
              priority: high
              deadlineOffsetDays: 14
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "An FTP test completed and recorded with protocol and conditions, and seven power zones set in both the head unit and training platform."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Choose a 20-minute or ramp test protocol and read its warm-up"
                - "Schedule the test after a rest or easy day this week"
                - "Ride the test on the trainer or a safe uninterrupted road"
                - "Enter the new FTP and zones in your head unit and training app"
            - name: Heart rate zones for riding without power
              description: |-
                ## Purpose
                Not every rider has a power meter on every bike, and heart rate still says a lot about effort on long endurance rides. A short field test for lactate threshold heart rate gives cycling-specific zones, which differ from running zones for most people, so the winter bike and the commute can still be ridden at the right intensity.

                ## Milestones
                1. A chest strap heart rate monitor paired with the head unit.
                2. A 30-minute field test ridden, with the average of the last 20 minutes taken as threshold heart rate.
                3. Cycling heart rate zones calculated and set separately from any running zones.
                4. Zones checked against perceived effort on three endurance rides.

                ## Notes
                Heart rate lags behind effort on short intervals and drifts upward in heat, so use it for steady rides and power or feel for efforts under five minutes.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Cycling-specific heart rate zones based on a recorded 30-minute field test are set in the head unit and checked on three rides."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Pair a chest strap heart rate monitor with your head unit"
                - "Ride a 30-minute steady all-out effort on a flat road or trainer"
                - "Set cycling heart rate zones from the last 20 minutes of the test"
                - "Compare the zones with how three endurance rides felt"
            - name: Head unit and training platform set-up
              description: |-
                ## Purpose
                Ride data only helps if it lands in one place, with screens that show what each session needs. Setting up the head unit data pages, auto-sync to one analysis platform and the planned workouts pushing to the bike takes an evening and saves fiddling at the roadside every ride after.

                ## Milestones
                1. One analysis platform chosen as the home for all ride files.
                2. Head unit, trainer app and phone syncing automatically to it.
                3. Three data pages built: endurance, intervals and climbing.
                4. Planned workouts appearing on the head unit without manual transfer.
              priority: medium
              deadlineOffsetDays: 10
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Every ride from head unit and trainer syncs automatically to one platform, and three named data pages are set up on the head unit."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Pick one platform to hold all your ride files"
                - "Connect your head unit and trainer app to it for automatic sync"
                - "Build separate data pages for endurance, intervals and climbing"
                - "Push a planned workout to the head unit and ride it as a test"
            - name: Season goal for the road cycling year
              description: |-
                ## Purpose
                Deciding what the season is for, whether a first 100 km sportive, a faster 10-mile time trial or a debut road race, shapes every training block that follows. One A goal with a date, plus two or three supporting rides, gives the year a peak to build towards rather than a series of random hard weekends.

                ## Milestones
                1. One A goal written with its date and a measurable target, such as a finishing time or a power figure.
                2. Two or three B events placed at least four weeks before the A goal.
                3. Weeks available for training counted back from the A goal date.
                4. The goal shared with the people who share your weekends.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "One dated A goal with a measurable target and two or three supporting events are written down and agreed with your household."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "List the cycling events that excite you in the next twelve months"
                - "Pick one A goal and write a measurable target beside it"
                - "Choose two supporting rides that fall before the A goal"
                - "Talk the weekend commitments through with your household"
            - name: Two-week riding baseline and hours budget
              description: |-
                ## Purpose
                Most riders guess their weekly volume high and then build a plan they cannot keep. Logging every ride for two weeks, with hours, distance, average power and how you felt, shows the real starting point and a realistic weekly hours budget for the next block.

                ## Milestones
                1. Every ride for 14 days recorded with duration, distance, average power or heart rate and a feel score.
                2. Average weekly hours and the longest ride identified.
                3. A sustainable weekly hours budget set, no more than about 10 percent above the baseline.
                4. Days that are reliably free for longer rides marked.
              priority: medium
              deadlineOffsetDays: 21
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "Two weeks of rides recorded and a weekly hours budget written down within 10 percent of the measured baseline."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Record today's ride with duration, distance and a one-to-ten feel score"
                - "Add up total hours and the longest ride for each of the two weeks"
                - "Set next block's weekly hours budget from the real average"
                - "Mark the days that are reliably free for a long ride"
            - name: Saddle bag and roadside repair kit
              description: |-
                ## Purpose
                Punctures, a snapped chain or a loose bolt can leave you stranded 40 km from home, often in the cold. A small kit packed once and checked before every long ride, with ID and an emergency contact, turns most mechanicals into a ten-minute stop instead of a phone call for a lift.

                ## Milestones
                1. Saddle bag or tool bottle packed with spare tube, levers, mini pump or CO2, multitool with chain breaker and a quick link.
                2. Tubeless plug kit added if you run tubeless tyres.
                3. ID, an emergency contact card and a small amount of cash or a payment card included.
                4. Every item checked to fit your bike: valve length, quick link speed and tool sizes.

                ## Notes
                A spare tube with a valve too short for deep rims is the classic roadside surprise. Test-fit everything at home.
              priority: high
              deadlineOffsetDays: 7
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A packed repair kit with every item test-fitted to your bike, plus ID and an emergency contact, rides on the bike from now on."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Lay out what is in your saddle bag now and note the gaps"
                - "Buy the missing tube, quick link or plug kit that matches your bike"
                - "Check the spare tube valve length against your rim depth"
                - "Put an emergency contact card and ID in the saddle bag"
            - name: Weekly riding timetable around work and home
              description: |-
                ## Purpose
                Structured training fails most often on logistics, not fitness: the interval session clashes with school pick-up or the long ride collides with family Sundays. A fixed weekly timetable, agreed at home, gives each key session a slot it can actually keep and a backup slot when life intervenes.

                ## Milestones
                1. A weekly grid with work, family commitments and daylight hours blocked in.
                2. Slots chosen for two key sessions, one long ride and easy rides.
                3. A backup slot named for each key session.
                4. The timetable agreed with your partner or household and added to the shared calendar.
              priority: medium
              deadlineOffsetDays: 14
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A weekly riding timetable with primary and backup slots for each key session is in the shared household calendar."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Block work, childcare and family fixtures into a weekly grid"
                - "Choose fixed slots for two key sessions and one long ride"
                - "Name a backup slot for each key session"
                - "Add the agreed timetable to the shared household calendar"
            - name: Weekly structured training week
              description: |-
                ## Purpose
                Four or five rides a week only build fitness when each has a job: two quality sessions, one long endurance ride and the rest genuinely easy. Running the same weekly template, with sessions set from your current zones, removes daily decisions and makes it obvious when a week went off plan.

                ## Milestones
                1. A weekly template written with two key sessions, one long ride and easy recovery rides.
                2. Each session described with its duration, target zone and purpose.
                3. Every third or fourth week marked as a lighter week.
                4. Eight weeks of the template completed with missed sessions noted and not doubled up.

                ## Notes
                Start from the **Training program** template. Easy rides that drift into tempo are the most common reason structured training stalls.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Eight consecutive weeks follow the written template, with at least 80 percent of key sessions completed at their target zones."
                cadence: rolling
              tasks:
                - "Write your weekly template with two key sessions and one long ride"
                - "Ride the midweek interval session at its target power @recurring(weekly:tue)"
                - "Ride the weekend long endurance ride in zone two @recurring(weekly:sat)"
                - "Mark every fourth week as a lighter week in the calendar"
            - name: Sunday training load and fatigue review
              description: |-
                ## Purpose
                Fitness and fatigue both climb during a block, and the chart of chronic and acute load shows which is winning long before your legs tell you. A ten-minute Sunday look at load, sleep, resting heart rate and how sessions felt catches overreaching early and keeps the next week honest.

                ## Milestones
                1. One place chosen to record weekly hours, training stress, sleep and a feel score.
                2. A personal ramp-rate limit agreed, such as a maximum weekly rise in chronic load.
                3. Twelve weekly reviews completed with one decision noted each time.
                4. Two or more warning signs you personally show before illness or burnout written down.

                ## Notes
                Start from the **Metrics log** template.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Twelve consecutive weekly reviews recorded with load, sleep and feel, each ending in one written decision for the coming week."
                cadence: rolling
              tasks:
                - "Set up a log with columns for hours, training stress, sleep and feel"
                - "Review the week's load and decide one change for next week @recurring(weekly:sun)"
                - "Write down the early signs that you are overreaching"
            - name: Weekly chain and drivetrain clean
              description: |-
                ## Purpose
                A dirty chain wastes watts, wears the cassette and chainrings early and makes shifting sloppy, and grit does most of its damage in wet months. A fixed weekly clean and lube after the long ride takes fifteen minutes and can double the life of the drivetrain.

                ## Milestones
                1. A simple kit in place: degreaser, brushes, rags and a lube suited to your conditions.
                2. A weekly routine written, in order, and kept by the bike stand.
                3. Chain wear measured and recorded with a checker tool.
                4. Twelve weeks of cleans completed without a missed week.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Twelve weekly drivetrain cleans completed, with chain wear measured and recorded at the start and end."
                cadence: rolling
              tasks:
                - "Buy a degreaser, a chain brush and a lube for your riding conditions"
                - "Write your clean and lube steps on a card by the bike stand"
                - "Clean and lube the chain after the weekend ride @recurring(weekly:mon)"
                - "Measure chain wear with a checker tool and log the reading"
            - name: Monthly bike safety and wear inspection
              description: |-
                ## Purpose
                Worn brake pads, a cut tyre or a loose stem bolt rarely announce themselves until a fast descent. A monthly inspection against the same checklist, covering brakes, tyres, bolts, cables and wheels, catches the faults that cause crashes and the wear that is cheaper to fix early.

                ## Milestones
                1. A written checklist covering brakes, tyres, wheels, bolts and torque, cables and bar tape.
                2. A torque wrench or torque key in place for carbon parts.
                3. Six monthly inspections completed with findings and replacements recorded.
                4. A list of parts with their fitted dates, so replacement is planned, not urgent.

                ## Notes
                Start from the **Operational checklist** template. Anything on the steering, brakes or carbon frame you are unsure about goes to a bike shop, not a guess.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Six monthly inspections recorded against the same checklist, with every part's fitted date listed."
                cadence: rolling
              tasks:
                - "Write a safety checklist for brakes, tyres, wheels and bolts"
                - "Get a torque key that covers the values printed on your bike"
                - "Inspect the bike against the checklist and log what you find @recurring(monthly:14)"
                - "List each wear part with the date it was fitted"
            - name: Strength and core sessions for cyclists
              description: |-
                ## Purpose
                Cycling alone does little for bone density, hip stability or the upper back that holds you on the drops, and many riders lose power to a weak core and wobbly knees. Two short gym or home sessions a week, built around squats, hinges, single-leg work and trunk stability, support both on-bike power and long-term durability.

                ## Milestones
                1. A 30 to 45 minute routine written with a squat or leg press, a hinge, single-leg work and core exercises.
                2. Starting loads recorded for each exercise.
                3. Two sessions a week fitted around the hard bike days, not the day before them.
                4. Loads progressed and logged over twelve weeks.

                ## Notes
                Ask a qualified coach or physio to check your form on the main lifts if you are new to them. In the race season, keep one session a week rather than stopping.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Twelve weeks of twice-weekly strength sessions logged, with loads progressed on at least three exercises."
                cadence: rolling
              tasks:
                - "Write a 40-minute routine with a squat, a hinge, a lunge and core work"
                - "Record your starting load for each exercise"
                - "Complete the strength session and log the loads @recurring(weekly:mon,thu)"
                - "Move strength away from the day before your interval session"
            - name: Quarterly FTP retest and zone update
              description: |-
                ## Purpose
                Zones drift as you get fitter or lose form, and training at last spring's numbers either undercooks every session or buries you. A retest at the end of each block, using the same protocol and conditions, keeps the targets honest and gives a clear record of whether the last block worked.

                ## Milestones
                1. The retest scheduled at the end of a lighter week.
                2. The same protocol, bike, power source and warm-up used as last time.
                3. New FTP entered and zones updated in every device and app.
                4. A running table of FTP, watts per kilogram and test conditions kept across the year.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: artifact
                success_criteria: "Four retests across a year recorded in one table with protocol and conditions, and zones updated after each."
                cadence: cyclic
              tasks:
                - "Book the retest into the last day of a lighter week"
                - "Ride the FTP retest with last time's protocol and warm-up @recurring(quarterly)"
                - "Update power zones on the head unit, trainer app and analysis platform"
                - "Add the result and conditions to your FTP history table"
            - name: Indoor trainer season routine
              description: |-
                ## Purpose
                Winter evenings and wet weekends make the trainer the most reliable place to do quality work, but heat, boredom and a slipping trainer calibration wreck sessions. Setting up a proper indoor space with airflow, a calibrated trainer and a library of planned sessions makes the winter block productive rather than miserable.

                ## Milestones
                1. A trainer space set up with a fan, a towel, a mat and a way to drink without stopping.
                2. Trainer firmware updated and calibration routine learned.
                3. A library of ten favourite indoor workouts saved for each training phase.
                4. A full winter of indoor sessions completed with no more than two weeks missed.

                ## Notes
                A strong fan matters more than any software. Overheating can drop power by a noticeable margin on long indoor intervals.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "An indoor set-up with fan and calibrated trainer is in place, and one full winter of planned indoor sessions is logged."
                cadence: cyclic
              tasks:
                - "Set up a trainer corner with a fan, mat and towel"
                - "Update the trainer firmware and learn its calibration routine"
                - "Run the trainer spin-down calibration @recurring(monthly:3)"
                - "Save ten indoor workouts you would happily repeat"
            - name: Long ride fuelling and bottle routine
              description: |-
                ## Purpose
                Running out of fuel two hours into a ride, the bonk, costs the rest of the ride and the next day too. Building a simple routine for rides over 90 minutes, with a carbohydrate target per hour you have practised, bottles mixed the night before and a timer prompt to eat, makes long rides productive and rehearses what works on event day.

                ## Milestones
                1. A carbohydrate and fluid target per hour chosen from reputable sports nutrition guidance, starting at the lower end.
                2. A packing list for long rides: bottles, bars, gels and electrolyte.
                3. An eating prompt set on the head unit every 20 to 30 minutes.
                4. Six long rides completed with intake recorded and any stomach problems noted.

                ## Notes
                Race-day fuelling strategy across sports is its own area. This project is the everyday habit on the bike. Anyone with diabetes or a digestive condition should agree targets with their clinician.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Six long rides recorded with carbohydrate and fluid intake per hour, and a written default fuelling plan for rides over 90 minutes."
                cadence: rolling
              tasks:
                - "Choose a starting carbohydrate target per hour from a reputable source"
                - "Set an eat reminder on your head unit every 25 minutes"
                - "Mix bottles and pack food the night before each long ride"
                - "Restock gels, bars and drink mix @recurring(monthly:25)"
            - name: Weekly club ride or group session
              description: |-
                ## Purpose
                Riding with a club brings pace you would not hold alone, local route knowledge and people who notice when you have not turned up. One regular group ride, chosen at a speed that fits the plan, adds motivation and practice at group skills without turning every Sunday into a race.

                ## Milestones
                1. Two or three local clubs or group rides compared on pace, distance and ride etiquette.
                2. A group chosen whose pace fits your plan for that day.
                3. Club membership taken out, with the third-party insurance it includes checked.
                4. Ten group rides completed and logged.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A club joined, insurance cover confirmed, and ten group rides completed at a pace group that fits the plan."
                cadence: rolling
              tasks:
                - "Find two local clubs and read their ride groups and pace bands"
                - "Join a club ride in the slowest group that suits you"
                - "Check what insurance your club or cycling federation membership includes"
                - "Turn up for the weekly club ride @recurring(weekly:sun)"
            - name: Seasonal kit and lights changeover
              description: |-
                ## Purpose
                Changing seasons catch riders out: the first cold morning in thin gloves, or the first evening ride home after the clocks change with a flat rear light. A quarterly swap of clothing, lights, tyres and mudguards, done before the weather turns, keeps you riding instead of postponing.

                ## Milestones
                1. Kit sorted into warm, cool, wet and hot weather layers with any gaps listed.
                2. Front and rear lights tested for run time on a full charge.
                3. Winter or summer tyres and mudguards fitted ahead of the season.
                4. One spare set of gloves and a packable jacket ready for changeable days.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Four seasonal changeovers completed in a year, each with lights tested and kit gaps replaced before the weather turns."
                cadence: cyclic
              tasks:
                - "Sort cycling clothing into weather layers and list what is missing"
                - "Test the run time of your lights from a full charge"
                - "Swap tyres, mudguards and kit for the coming season @recurring(quarterly)"
            - name: Cornering and descending with confidence
              description: |-
                ## Purpose
                Descending is where nervous riders lose minutes and where most solo crashes happen. Learning the basics, looking through the corner, braking before the bend rather than in it, outside pedal down with weight through it, and practising them on a known descent builds speed and safety together.

                ## Milestones
                1. The core cornering technique learned from a coach, skills session or reputable video.
                2. A familiar descent chosen as a practice run, ridden first at an easy pace.
                3. Braking points noted for each bend on that descent.
                4. Five practice descents completed with braking moved before each corner.

                ## Notes
                A club skills session or a coached descending course is worth more than any video. Practise in the dry before trying it in the wet.
              priority: high
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Five practice descents of the same road completed with braking finished before each bend, observed by a coach or experienced rider at least once."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Watch a reputable guide to road cornering technique"
                - "Pick a familiar quiet descent to practise on"
                - "Ride a practice descent focusing on braking before each bend @recurring(monthly:9)"
                - "Ask an experienced rider to follow you down and give feedback"
            - name: Paceline and through-and-off group skills
              description: |-
                ## Purpose
                Through-and-off, single and double pacelines and calling hazards are what make group rides fast and safe, and the gaps in them cause most club ride crashes. Practising wheel-following, smooth rotation and clear signals with a patient group makes you a rider others are happy to have on their wheel.

                ## Milestones
                1. Standard group signals and calls learned: hazards, slowing, stopping, car up and car back.
                2. Comfortable following a wheel at half a wheel length to one wheel length.
                3. Through-and-off rotation ridden smoothly for 20 minutes without surges.
                4. Feedback from a ride leader that your group riding is safe.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Twenty minutes of smooth through-and-off riding completed in a club group, with a ride leader confirming your skills are safe."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Learn your club's hand signals and verbal calls"
                - "Practise holding a wheel at a steady distance on an easy ride"
                - "Ask the ride leader for a through-and-off practice section"
                - "Ask for honest feedback on your wheel-holding afterwards"
            - name: Pacing a long climb by power
              description: |-
                ## Purpose
                Going out too hard on the lower slopes of a 20-minute climb is the classic way to lose minutes at the top. Learning to hold an even power, with a target set from your FTP and adjusted for the gradient changes, turns climbs from survival into the part of the ride you plan.

                ## Milestones
                1. A local climb of 10 to 30 minutes chosen as a test climb.
                2. A target power set at a fixed percentage of FTP for its duration.
                3. The climb ridden three times with power variability compared each time.
                4. Your best time achieved with the most even power trace.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "The same climb ridden three times at a planned power, with the evenest effort also producing the fastest time."
                cadence: phased
                effort_hours_estimate: "5"
              tasks:
                - "Choose a local climb that takes between 10 and 30 minutes"
                - "Set a target power for the climb from your FTP"
                - "Ride the climb holding the target and save the power trace"
                - "Compare the traces of three attempts and note the evenest"
            - name: Puncture fix in under ten minutes, tubes and tubeless
              description: |-
                ## Purpose
                Every rider punctures, and the difference between a five-minute stop and a cold half-hour on the verge is practice. Rehearsing a tube change, a tyre boot and a tubeless plug at home, against a timer, makes the roadside version calm and quick.

                ## Milestones
                1. A rear tube change practised at home three times.
                2. A sub-ten-minute tube change achieved, start to riding.
                3. A tubeless plug and a tyre boot fitted on an old tyre.
                4. A broken chain joined with a quick link at home.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A rear wheel tube change completed in under ten minutes, plus a tubeless plug and a quick link fitted in practice."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Time yourself changing a rear tube in the kitchen"
                - "Practise fitting a tubeless plug and a tyre boot on an old tyre"
                - "Break and rejoin an old chain with a quick link"
                - "Repeat the tube change until it takes under ten minutes"
            - name: Cadence and pedalling drills
              description: |-
                ## Purpose
                Smooth pedalling across a wide cadence range lets you stay efficient on steep climbs and quick in the bunch. Short, regular drills such as high-cadence spin-ups, single-leg pedalling on the trainer and low-cadence strength efforts widen your comfortable range within a couple of months.

                ## Milestones
                1. Your natural cadence on flat and climbing recorded from recent rides.
                2. A drill set written with spin-ups, single-leg work and low-cadence efforts.
                3. Comfortable cadence range widened by at least 10 rpm at each end.
                4. Bouncing on the saddle at high cadence reduced or gone.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Your comfortable cadence range is measurably wider by 10 rpm at each end after eight weeks of logged drills."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Note your average cadence on recent flat and climbing rides"
                - "Write a 15-minute cadence drill set to slot into an easy ride"
                - "Ride the cadence drill set inside an easy ride @recurring(weekly:thu)"
            - name: Reading ride files for normalised power, TSS and the power curve
              description: |-
                ## Purpose
                Normalised power, intensity factor, training stress and a power duration curve tell you far more than average speed, but only if you know what they mean. Learning the handful of numbers that matter for road cycling makes the weekly review faster and lets you spot real progress instead of a tailwind.

                ## Milestones
                1. Plain-language definitions written for normalised power, intensity factor, training stress and variability.
                2. Your own power duration curve read for 5 seconds, 1 minute, 5 minutes and 20 minutes.
                3. A strength and a limiter named from the curve.
                4. One past event file analysed for where the race or sportive was won or lost.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A one-page note defines the key ride metrics in your own words and names one strength and one limiter from your power curve."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Ask the agent to explain normalised power and training stress in plain language"
                - "Open your power duration curve and note four key durations"
                - "Name your strongest and weakest duration from the curve"
                - "Analyse one past event file for where time was lost"
            - name: Bike handling drills in a car park
              description: |-
                ## Purpose
                Taking a bottle without wobbling, looking over your shoulder while holding a line and riding one-handed to signal are basic road skills many adult riders never practised. Half an hour in an empty car park with some cones builds the handling that keeps you upright in traffic and in a bunch.

                ## Milestones
                1. A quiet, safe space found, such as an empty car park on a Sunday morning.
                2. Bottle grab and return practised at speed without looking down.
                3. Looking back over each shoulder while holding a straight line along a painted line.
                4. Tight slow-speed turns and an emergency stop practised.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Bottle grabs, shoulder checks along a painted line and an emergency stop practised in two separate car park sessions."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Find an empty car park or closed track you can use safely"
                - "Practise bottle grabs and returns without looking down"
                - "Ride a painted line while checking over each shoulder"
                - "Practise an emergency stop from moderate speed"
            - name: Home mechanics for gear indexing and brake pads
              description: |-
                ## Purpose
                Gears that skip and brakes that squeal send many riders to the shop for jobs that take ten minutes at home. Learning to adjust rear derailleur indexing, replace brake pads and swap a cassette saves money, shop waiting time and the frustration of a ruined ride.

                ## Milestones
                1. A basic tool set in place: hex keys, cassette tool, chain whip and a work stand.
                2. Rear derailleur indexing adjusted until shifts are clean across the cassette.
                3. Brake pads replaced and aligned on your own bike.
                4. A cassette removed and refitted at the correct torque.

                ## Notes
                Hydraulic brake bleeds and electronic groupset faults are reasonable jobs to leave to a shop until you have watched one done.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Gear indexing adjusted, brake pads replaced and a cassette refitted on your own bike without shop help."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Buy a cassette tool, chain whip and set of hex keys"
                - "Follow a manufacturer guide to adjust your rear indexing"
                - "Replace and align one set of brake pads"
                - "Remove and refit the cassette to the printed torque"
            - name: Choosing your next road bike
              description: |-
                ## Purpose
                Buying a road bike involves trade-offs between race geometry and endurance geometry, rim and disc brakes, mechanical and electronic shifting, and frame material, all inside a budget. Comparing a short list against your fit numbers and the riding you actually do avoids buying a bike for the rider you imagine rather than the one you are.

                ## Milestones
                1. A budget set, including pedals, fit adjustments and any trade-in value.
                2. Your fit numbers used to check stack and reach on each candidate frame.
                3. Three bikes test ridden or compared on geometry, gearing, tyre clearance and brakes.
                4. One bike chosen with the reasons written down.

                ## Notes
                Start from the **Purchase decision** template. Tyre clearance of at least 30 mm keeps more options open for rough roads and winter riding.
              priority: medium
              deadlineOffsetDays: 90
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "One road bike chosen from three compared on geometry against your fit numbers, with the decision and reasons recorded."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Set a total budget including pedals and fit adjustments"
                - "Compare stack and reach of three frames with your fit numbers"
                - "Book test rides on the two strongest candidates"
                - "Write down the chosen bike and the reasons"
            - name: Tyre width, pressure and tubeless decision
              description: |-
                ## Purpose
                Tyres are the cheapest speed and comfort upgrade on a road bike, and current thinking favours wider tyres at lower pressures than many riders still use. Deciding width, pressure and whether to go tubeless, based on your weight, rims and roads, improves grip, comfort and puncture resistance together.

                ## Milestones
                1. Your rim inner width and frame clearance measured.
                2. A starting pressure worked out from a reputable calculator for your weight and tyre width.
                3. Tubes or tubeless chosen, with the reasons written down.
                4. New tyres fitted and pressure fine-tuned over three rides.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A tyre width, pressure and tubeless choice recorded with reasons, and the tyres fitted and ridden at the chosen pressure."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Measure your rim inner width and the frame clearance"
                - "Run your weight and tyre width through a pressure calculator"
                - "Decide between tubes and tubeless and note why"
                - "Top up tubeless sealant if you run tubeless @recurring(quarterly)"
            - name: Gearing for a hilly event
              description: |-
                ## Purpose
                Gearing chosen for flat club rides can leave you grinding at 50 rpm on a 15 percent gradient two hours into a sportive. Checking the steepest climbs on your target route against your current lowest gear, and changing cassette or chainrings if needed, saves knees and minutes.

                ## Milestones
                1. Steepest sections of the target route identified from the route profile.
                2. Your lowest gear and the cadence it gives at climbing speed worked out.
                3. A decision made on whether to change cassette, chainrings or derailleur capacity.
                4. Any change fitted and ridden on a local steep climb before the event.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "The lowest gear for the target event is chosen against the route's steepest gradient and tested on a local climb at least three weeks before."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Find the steepest gradients on your target event route"
                - "Work out your cadence on that gradient in your lowest gear"
                - "Check whether your derailleur can take a larger cassette"
                - "Test any new gearing on your steepest local climb"
            - name: Coach or self-coached plan decision
              description: |-
                ## Purpose
                A coach adds accountability, individual sessions and someone to read your data, while an app-based or self-written plan costs less and suits riders who enjoy the planning. Deciding deliberately, with costs, your goal and how much feedback you want laid out, beats drifting between free plans.

                ## Milestones
                1. Three options compared: a personal coach, an adaptive training app and a self-written plan.
                2. Monthly cost, feedback frequency and flexibility listed for each.
                3. Two coaches or services asked about their approach and experience with riders like you.
                4. A decision made and a review date set three months later.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A recorded decision between coach, app and self-coaching, compared on cost and feedback, with a review date three months out."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "List what you want from coaching beyond a training plan"
                - "Compare a coach, an adaptive app and a self-written plan on cost"
                - "Have a call with two coaches about how they work"
                - "Record the decision and set a three-month review date"
            - name: Eight-week sweet spot block to raise FTP
              description: |-
                ## Purpose
                Sweet spot work, steady intervals just below threshold, raises FTP efficiently for riders with eight or ten hours a week. An eight-week block that progresses interval time from around 40 to 90 minutes a week, with a lighter week built in and a retest at the end, gives a measurable answer to whether it worked.

                ## Milestones
                1. A starting FTP recorded from a recent test.
                2. Eight weeks written with progressive sweet spot sessions and one lighter week.
                3. At least 14 of 16 key sessions completed at target power.
                4. FTP retested at the end and the change recorded.

                ## Notes
                Start from the **Training program** template. If intervals feel harder week after week rather than easier, take the lighter week early.
              priority: medium
              deadlineOffsetDays: 60
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "An eight-week sweet spot block completed with at least 14 of 16 key sessions done and an end-of-block FTP retest recorded."
                cadence: phased
                effort_hours_estimate: "64"
              tasks:
                - "Write eight weeks of progressive sweet spot sessions"
                - "Load the first week of sessions onto your head unit"
                - "Mark week five as the lighter week"
                - "Book the end-of-block FTP retest"
            - name: Climbing improvement block with VO2 max intervals
              description: |-
                ## Purpose
                Climbs reward power for five to twenty minutes, and VO2 max intervals of three to five minutes are the most direct way to raise the top end once threshold is solid. A six-week block of one or two VO2 sessions a week, plus regular hill repeats, improves how you handle the steeper climbs that decide hilly events.

                ## Milestones
                1. A baseline time and power recorded on a local five-minute climb.
                2. Six weeks of VO2 max sessions planned with sensible progression.
                3. Hill repeats included at least once a week on a real gradient.
                4. The five-minute climb retested and the change recorded.

                ## Notes
                VO2 max work is very demanding. Keep the rest of the week genuinely easy and stop the block if sleep or mood drops sharply.
              priority: low
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "A six-week VO2 max block completed and a local five-minute climb retested, with time and power compared with the baseline."
                cadence: phased
                effort_hours_estimate: "40"
              tasks:
                - "Ride a local five-minute climb all out and record time and power"
                - "Plan six weeks of VO2 max intervals with gradual progression"
                - "Add one set of hill repeats on a real gradient each week"
                - "Retest the five-minute climb at the end of the block"
            - name: Aero position and kit gains on a budget
              description: |-
                ## Purpose
                Above about 30 km/h most of your effort goes into pushing air, so small changes in position and clothing can be worth more than months of training. Testing a lower hand position, a close-fitting jersey and an aero helmet on a repeatable loop shows which changes actually save time for you.

                ## Milestones
                1. A flat, quiet, repeatable test loop chosen.
                2. Baseline time recorded at a fixed power in your normal position and kit.
                3. Each change tested one at a time at the same power and similar wind.
                4. The changes that saved time kept and the rest dropped.

                ## Notes
                Never lower your position so far that you cannot see the road ahead comfortably. Speed gains are worthless if you cannot hold the position or see hazards.
              priority: low
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "At least three position or kit changes tested on the same loop at fixed power, with time differences recorded for each."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Choose a flat, quiet loop of a few kilometres you can repeat"
                - "Ride the loop at a fixed power in your normal kit and position"
                - "Test one change at a time at the same power"
                - "Keep the changes that saved time and note the rest"
            - name: First 100 km sportive
              description: |-
                ## Purpose
                One hundred kilometres is the first big milestone for many road riders and a realistic target from a base of three or four rides a week. Preparing over twelve weeks, with long rides building towards 80 to 90 km, fuelling rehearsed and the route studied, turns the day into a satisfying ride rather than an endurance test.

                ## Milestones
                1. A sportive entered with its route, feed stations and cut-off times noted.
                2. Long rides built to 80 to 90 km at least three weeks before the event.
                3. Fuelling and kit rehearsed on two long rides.
                4. Event logistics planned: travel, start time, parking and bike check.
                5. The 100 km finished and a short debrief written.
              priority: high
              deadlineOffsetDays: 120
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A 100 km sportive finished within its cut-off time, with long rides of 80 km or more completed beforehand and a debrief written."
                cadence: phased
                effort_hours_estimate: "70"
              tasks:
                - "Choose a 100 km sportive about twelve weeks away and enter it"
                - "Plan long rides building to 90 km three weeks before"
                - "Study the route profile and where the feed stations are"
                - "Write a short debrief within two days of finishing"
            - name: Hilly gran fondo with 2,000 metres of climbing
              description: |-
                ## Purpose
                Two thousand metres of climbing in one day changes the preparation: more time on long climbs, pacing discipline on the first one and descending skills for the way down. Preparing for a mountain or hilly gran fondo over sixteen weeks builds the specific endurance flat riding never provides.

                ## Milestones
                1. An event entered with the climbs, gradients and time cut-offs listed.
                2. Training rides that include at least 1,500 metres of climbing completed twice.
                3. A pacing plan written for each major climb as a power or heart rate cap.
                4. Gearing checked for the steepest climb.
                5. The event completed and the pacing plan compared with what happened.
              priority: medium
              deadlineOffsetDays: 150
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A gran fondo with at least 2,000 metres of climbing completed, with a written climb pacing plan compared against the ride file afterwards."
                cadence: phased
                effort_hours_estimate: "90"
              tasks:
                - "List each major climb on the route with length and gradient"
                - "Plan two training rides with 1,500 metres of climbing"
                - "Write a power cap for each major climb"
                - "Compare your climb pacing with the plan after the event"
            - name: First club 10-mile time trial
              description: |-
                ## Purpose
                The club 10-mile time trial is the purest test in road cycling: one rider, one clock and a known course you can ride again and again. Riding one gives a benchmark for the season, practice at pacing a threshold effort and a gentle introduction to racing with very little risk.

                ## Milestones
                1. A local club time trial found, with entry rules, start sheet and safety briefing read.
                2. A pacing plan written at a target power just above FTP for the expected duration.
                3. A warm-up routine practised on the trainer.
                4. The time trial ridden and the time, average power and conditions recorded.

                ## Notes
                Most club time trials require a working rear light and a front light during the event. Check the organiser's rules a week before.
              priority: medium
              deadlineOffsetDays: 90
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A club 10-mile time trial completed with the time, average power and conditions recorded as a season benchmark."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Find your nearest club time trial series and its entry rules"
                - "Write a pacing plan for the first and second half of the course"
                - "Practise a 20-minute warm-up with two short efforts"
                - "Record your time, power and the wind after the event"
            - name: Spring training camp abroad
              description: |-
                ## Purpose
                Spring training camps in warmer places give a week of big volume and long climbs that winter at home cannot provide. Planning travel, bike transport, routes and a sensible load for the week avoids the classic mistake of riding the first three days too hard and spending the rest exhausted.

                ## Milestones
                1. Destination, dates and group or solo camp chosen within budget.
                2. Bike box or hire bike booked, with your fit numbers sent ahead if hiring.
                3. Daily routes planned with one easy day in the middle.
                4. Travel insurance checked to cover cycling and your bike.
                5. A recovery week planned for the week after you return.

                ## Notes
                Start from the **Trip** template.
              priority: low
              deadlineOffsetDays: 120
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A training camp completed with planned daily routes, bike transport arranged and the following week scheduled as recovery."
                cadence: one-shot
                effort_hours_estimate: "10"
              tasks:
                - "Pick a destination and dates that fit the season plan"
                - "Book a bike box or a hire bike in your frame size"
                - "Plan daily routes with an easy day in the middle"
                - "Check your travel insurance covers cycling and bike damage"
            - name: Multi-day charity ride or tour
              description: |-
                ## Purpose
                Several consecutive days in the saddle test recovery, saddle comfort and logistics far more than a single long ride. Training with back-to-back weekend rides, sorting fundraising early and planning kit for each day prepares you to finish strong on day three rather than limping through it.

                ## Milestones
                1. Event entered and fundraising target or tour costs set.
                2. Back-to-back long rides completed on at least three weekends.
                3. A saddle comfort plan in place: tested shorts, chamois cream and saddle.
                4. Daily kit, charging and laundry plan written.
                5. The ride finished and fundraising totals or tour costs recorded.
              priority: low
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A multi-day ride completed after at least three weekends of back-to-back training, with fundraising or costs recorded."
                cadence: phased
                effort_hours_estimate: "60"
              tasks:
                - "Set up a fundraising page or a costs budget for the ride"
                - "Plan three weekends of back-to-back long rides"
                - "Test shorts and chamois cream on a back-to-back weekend"
                - "Write a packing list for each day of the ride"
            - name: Taper and final week before an A event
              description: |-
                ## Purpose
                Tapering for a key road event means cutting volume by roughly a third to a half over the last week or two while keeping some short sharp efforts, so you arrive fresh but not flat. Planning the final week, including bike check, sleep and travel, removes last-minute panic and the urge to cram in one more long ride.

                ## Milestones
                1. A taper plan written covering the last ten to fourteen days.
                2. Short openers kept in the final week to stay sharp.
                3. Bike serviced and ridden at least five days before the event.
                4. Race-week sleep, travel and meal timing planned.
              priority: high
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A written taper plan followed for the final ten to fourteen days, with the bike serviced and ridden five days before the event."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Write a taper plan for the last fourteen days before the event"
                - "Book a bike service at least a week before the event"
                - "Plan two short opener sessions in the final week"
                - "Pack the kit bag two days before travel"
            - name: Bike commuting as training volume
              description: |-
                ## Purpose
                Commuting by bike can add five or more hours a week for riders who have no other time to train, but only if it is planned as easy volume rather than a daily race against the traffic lights. Setting up a commuting bike, kit storage and a route that allows one structured session makes the commute part of the plan.

                ## Milestones
                1. A commuting route chosen with safety and a steady segment for occasional efforts.
                2. Clothing, lights and lock solved, with a place to change and store kit at work.
                3. Commute rides counted in weekly hours and kept mostly easy.
                4. One commute a week used for a short structured session.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Eight weeks of bike commuting logged as training volume, with commute hours recorded and mostly ridden in easy zones."
                cadence: rolling
              tasks:
                - "Ride your commute route on a weekend to check it is safe"
                - "Arrange a place to change and keep kit at work"
                - "Add your commute hours to the training log @recurring(weekly:fri)"
            - name: Six hours a week plan for busy riders
              description: |-
                ## Purpose
                Six hours a week is enough to finish a sportive well, but only with no wasted rides. For working parents, shift workers and anyone with caring duties, a plan built around two indoor sessions on weeknights and one longer weekend ride, with a rule for missed days, gets the most fitness from limited time.

                ## Milestones
                1. The honest weekly time available written down, including school runs and shifts.
                2. A six-hour week template with two weeknight trainer sessions and one longer ride.
                3. A rule agreed for missed sessions: move one, drop the rest.
                4. Twelve weeks completed with total hours and an FTP retest recorded.

                ## Notes
                For a parent, an early-morning trainer session before the house wakes up is often the most reliable slot of the week.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A six-hour weekly plan written and followed for twelve weeks, with total hours logged and an FTP retest at the end."
                cadence: phased
                effort_hours_estimate: "75"
              tasks:
                - "Write down the real hours you can ride each week"
                - "Pick two weeknight slots for indoor sessions"
                - "Agree a simple rule for what happens to a missed session"
                - "Retest FTP after twelve weeks on the plan"
            - name: Winter road riding in the dark and wet
              description: |-
                ## Purpose
                Dark mornings and wet, gritty roads mean being seen, staying warm and keeping traction become the main concerns. A winter set-up with daytime-visible lights, reflective kit, mudguards, grippy tyres and a rule about ice keeps outdoor riding going safely through the coldest months.

                ## Milestones
                1. Front and rear lights bright enough for daytime use fitted, with a spare rear light.
                2. Mudguards and winter tyres on the bike.
                3. Reflective details on ankles, gloves or overshoes for visibility.
                4. A personal rule written for ice and freezing temperatures, with an indoor alternative.

                ## Notes
                Moving parts, such as ankles, are what drivers notice first in the dark. Reflective overshoes are among the cheapest visibility gains.
              priority: high
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A winter bike set-up with lights, mudguards and winter tyres is in place, plus a written ice rule with an indoor alternative."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Fit daytime-visible front and rear lights and buy a spare rear"
                - "Fit mudguards and winter tyres"
                - "Write a temperature rule for switching to the indoor trainer"
                - "Charge lights before the week's dark rides @recurring(weekly:wed)"
            - name: Coming back after a season off the bike
              description: |-
                ## Purpose
                After a season away for work, family or other sports, the temptation is to pick up the old numbers and the old club group straight away. A gradual eight-week return, starting with easy rides, a fresh FTP test after four weeks and the fit rechecked, rebuilds fitness without saddle sores, knee trouble or discouragement.

                ## Milestones
                1. Bike serviced and fit rechecked before the first ride back.
                2. Four weeks of easy riding completed with hours building gradually.
                3. A new FTP test ridden after week four and zones reset.
                4. A realistic goal set for the next three months from the new baseline.

                ## Notes
                If the break was caused by an injury, work through the return with your physio first. This project is about a lifestyle gap, not rehabilitation.
              priority: low
              frontmatter:
                mode: building
                output_kind: habit
                success_criteria: "Eight weeks of gradual return logged, with a new FTP test at week four and a three-month goal recorded."
                cadence: phased
                effort_hours_estimate: "40"
              tasks:
                - "Book a bike service before your first ride back"
                - "Plan four weeks of short easy rides building by half an hour a week"
                - "Ride a new FTP test after week four"
                - "Set a three-month goal from the new numbers"
            - name: Hot weather riding and heat preparation
              description: |-
                ## Purpose
                Heat raises heart rate and lowers sustainable power, and riders underestimate how much fluid and salt they lose on a long summer climb. Preparing for a hot event or summer heatwave, with gradual exposure, fluid planning and a route with water stops, keeps long rides productive and safe.

                ## Milestones
                1. Your sweat rate estimated by weighing yourself before and after a one-hour ride.
                2. A fluid and electrolyte plan for hot rides written from that estimate.
                3. Long summer routes planned with known water stops.
                4. Two weeks of gradual heat exposure completed before a hot event.

                ## Notes
                Stop and cool down if you feel dizzy, confused or stop sweating. Anyone with a heart condition or on medicines that affect fluid balance should agree heat plans with their clinician.
              priority: low
              frontmatter:
                mode: building
                output_kind: knowledge
                success_criteria: "A measured sweat rate and a written hot-ride fluid plan are in place, and long summer routes have mapped water stops."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Weigh yourself before and after a one-hour ride to estimate sweat rate"
                - "Write a fluid and electrolyte plan for rides in the heat"
                - "Mark water stops on your main summer routes"
                - "Ride earlier in the day during heatwaves"
            - name: Bringing a newer rider into your riding
              description: |-
                ## Purpose
                Bringing a friend, partner or teenager into road cycling can give you a regular riding partner, but riding at your pace on your routes usually puts them off for good. A gentle plan of short no-drop rides, basic skills and kit advice helps them enjoy it and keep coming back.

                ## Milestones
                1. Their goals, bike and kit needs talked through, with a basic fit check.
                2. Four short no-drop rides completed at their pace, with café stops.
                3. Basic skills shown: signals, gears, braking and road positioning.
                4. A beginner-friendly club ride or group found for them.
              priority: low
              frontmatter:
                mode: service
                output_kind: habit
                success_criteria: "Four no-drop rides completed with a newer rider, basic skills covered and a beginner group ride identified for them."
                cadence: rolling
              tasks:
                - "Ask the new rider what they want from cycling"
                - "Check their saddle height and bike before the first ride"
                - "Plan a flat route under 30 km with a café stop"
                - "Ride together at their pace on an easy route @recurring(monthly:17)"
            - name: Road race licence and first criterium
              description: |-
                ## Purpose
                Road racing and criteriums reward bunch skills, positioning and repeated hard efforts rather than steady power. Getting a racing licence, practising sprints and cornering in a group and choosing a beginner category criterium on a closed circuit makes a first race a learning experience rather than a frightening one.

                ## Milestones
                1. A racing licence obtained from your national cycling federation.
                2. Group riding and cornering skills confirmed on club chain gang rides.
                3. Repeated short efforts of 15 to 60 seconds added to training.
                4. A beginner category criterium entered on a closed circuit.
                5. The race finished, or a lesson written down if you were dropped.

                ## Notes
                Many clubs run race training sessions or coached beginner races. They are the safest way to learn bunch racing.
              priority: medium
              deadlineOffsetDays: 180
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A racing licence obtained and a beginner criterium entered and ridden, with a short written review of positioning and effort."
                cadence: phased
                effort_hours_estimate: "20"
              tasks:
                - "Apply for a racing licence from your national federation"
                - "Join a club chain gang or race training session"
                - "Add repeated short efforts to one weekly session"
                - "Enter a beginner criterium on a closed circuit"
            - name: Time trial position and aero testing
              description: |-
                ## Purpose
                Time trialling rewards a sustainable aero position more than raw power, and a few watts saved in drag can beat months of training. Setting up a TT bike or clip-on bars, then testing position changes on a repeatable course with consistent power, shows what is faster and what you can actually hold for 20 to 60 minutes.

                ## Milestones
                1. TT bike or clip-on bars set up, with a fit check for the aero position.
                2. Position held for 20 minutes on the trainer without discomfort.
                3. Three position or equipment changes tested on a repeatable course.
                4. The fastest sustainable set-up recorded and used for the next time trial.

                ## Notes
                Hold a position on the trainer before racing in it. A position you cannot sustain will cost more time than it saves.
              priority: low
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "Three aero set-ups tested on the same course at similar power, with the fastest sustainable position recorded and used in a time trial."
                cadence: phased
                effort_hours_estimate: "12"
              tasks:
                - "Fit clip-on bars or set up a TT bike and have the position checked"
                - "Hold the aero position for 20 minutes on the trainer"
                - "Test three changes on the same course at similar power"
                - "Use the fastest sustainable set-up in your next time trial"
            - name: Holding power deep into long rides
              description: |-
                ## Purpose
                Power late in a ride decides sportive finishes and road races, and riders with similar fresh FTP differ a lot after three hours and 2,000 kilojoules of work. Training durability, with efforts placed at the end of long rides and fuelling dialled in, closes the gap between your fresh numbers and your tired ones.

                ## Milestones
                1. Fresh 20-minute and 5-minute power recorded as reference.
                2. A test of the same efforts after three hours of riding, with the drop recorded.
                3. Six long rides finished with efforts in the final hour.
                4. The fatigued test repeated and the change in power drop recorded.
              priority: low
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "The percentage drop in 20-minute power after three hours is measured twice, eight weeks apart, with the change recorded."
                cadence: phased
                effort_hours_estimate: "30"
              tasks:
                - "Note your fresh 20-minute and 5-minute power from recent data"
                - "Ride a three-hour ride ending with a 20-minute effort"
                - "Add efforts in the final hour of six long rides"
                - "Repeat the fatigued test after eight weeks and compare"
            - name: Annual periodised plan across base, build and peak
              description: |-
                ## Purpose
                An annual plan arranges the year into base, build, peak and transition phases around your A event, so each block has a clear purpose and the hardest training lands when it counts. Writing the year out on one page, with blocks, retests and lighter weeks, lets experienced riders adjust deliberately instead of reacting to each week.

                ## Milestones
                1. A one-page year plan with phases dated back from the A event.
                2. Each block's focus and key sessions named.
                3. Retests and lighter weeks marked in the calendar.
                4. Monthly reviews of the plan completed with changes noted.

                ## Notes
                The plan will change. Its value is in showing what each change costs, not in being followed to the letter.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: artifact
                success_criteria: "A one-page dated annual plan with phases, retests and lighter weeks exists, with twelve monthly reviews and changes recorded."
                cadence: cyclic
              tasks:
                - "Ask the agent to draft a one-page year plan from your A event date"
                - "Name the focus and key sessions for each block"
                - "Mark retests and lighter weeks in the calendar"
                - "Review the plan against your progress @recurring(monthly:28)"
---

# Road Cycling Training

This area is for road riders who want their hours on the bike to add up to something, from a first sportive to a club time trial or a first criterium. It starts with the foundations (a bike fit, a power meter or trainer, an FTP test and zones, a season goal and a timetable that fits real life), then the weekly machinery of structured rides, load reviews, strength work and bike maintenance, the skills of descending, group riding, pacing and roadside repairs, the decisions about bikes, tyres, gearing and coaching, the events from 100 km sportive to training camp, the situations that bend a plan, and finally the work of experienced racers and time triallists.

What repeats is a Tuesday interval session and a Saturday long ride, a Sunday load review, a Monday chain clean, strength twice a week, a monthly safety inspection on the 14th and a quarterly FTP retest with a kit changeover. The Purchase decision, Training program, Metrics log, Operational checklist and Trip templates pair with the projects that name them. Installing adds all 50 projects as active, so archive the ones that are not for you yet.
