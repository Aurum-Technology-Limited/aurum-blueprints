---
id: fitness-sport.mountain-bike-riding
name: Mountain Bike Riding & Racing
description: "The right bike set up properly, a repair kit and ride plan you trust, weekly rides and maintenance, coached skills from cornering to drops, and a route from your first bike park day to cross-country and enduro racing."
category: personal
version: 1.0.0
tags: [fitness-sport, mountain-bike-riding, athlete, mtb, trail-riding, enduro, cross-country, bike-maintenance]
author: Aurum Technology
starter_structure:
  templates:
    - purchase-decision
    - metrics-log
    - operational-checklist
    - trip
    - training-program
  pillars:
    - name: Fitness & Sport
      emoji: "🏋️"
      description: "Training, play and competition: building strength, endurance and skill in a sport or a gym, structuring blocks of work around events, recovering properly, and keeping the sessions honest with a log rather than a feeling."
      pillarFrontmatter:
        review_cadence: monthly
      areas:
        - name: Mountain Bike Riding & Racing
          description: "Building mountain biking skills, fitness and confidence on trails, from skills courses to enduro and cross-country racing."
          projects:
            - name: Choosing a mountain bike for your local trails
              description: |-
                ## Purpose
                Mountain bikes range from 100 mm cross-country hardtails to 170 mm enduro sleds, and the right one depends on what your nearest trails actually ask of you, not on what the magazines are testing. Matching travel, geometry and frame size to your terrain and budget avoids the commonest mistake: an expensive bike that is either overwhelmed or dull on the riding you do most.

                ## Milestones
                1. The three trail centres or networks you ride most written down, with their usual grades and how steep they are.
                2. A category chosen (hardtail, short-travel trail, trail or enduro) with a sentence on why it fits those trails.
                3. Three bikes shortlisted with travel, head angle, reach, wheel size, price and frame size for your height.
                4. At least one shortlisted bike ridden on dirt through a demo day or a hire centre.
                5. A bike bought or ordered, with its frame size and serial number recorded.

                ## Notes
                Start from the **Purchase decision** template. Size by reach and how the bike feels when standing, not by the letter on the frame, since brands size differently. A good used bike with a recent suspension service often beats a new budget bike.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A bike in the category you chose for your local trails, test ridden first, with its frame size and serial number recorded in your ride log."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "List the three trail networks you ride most and their typical grades"
                - "Decide between hardtail, trail and enduro based on that list"
                - "Shortlist three bikes with travel, reach and frame size for your height"
                - "Book a demo day or hire bike to ride one of them on real trails"
                - "Record the frame size and serial number of the bike you buy"
            - name: Helmet, gloves and eyewear that fit
              description: |-
                ## Purpose
                Head injuries are the crash outcome that matters most, and a helmet only does its job if it fits snugly, sits low on the forehead and has not already taken a hit. Getting a properly fitted trail helmet, full-finger gloves and clear or tinted glasses sorted before riding more often costs an hour in a shop and removes the most avoidable risks on the trail.

                ## Milestones
                1. Head circumference measured and matched to a helmet size range.
                2. A trail helmet tried on in a shop and fitted with the retention dial and straps adjusted.
                3. Full-finger gloves and eyewear bought that suit the weather you ride in.
                4. The helmet's purchase date written inside the shell or in your ride log.

                ## Notes
                Replace a helmet after any crash where it hit the ground, even if it looks fine, and follow the maker's guidance on age. Buying second-hand helmets is a gamble because you cannot see past impacts.
              priority: high
              deadlineOffsetDays: 14
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A fitted trail helmet with its purchase date recorded, plus gloves and eyewear, worn on every ride from now on."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Measure around your head just above the eyebrows with a soft tape"
                - "Try on two or three trail helmets in a shop and adjust the fit"
                - "Buy full-finger gloves and riding glasses for wet and dry days"
                - "Write the helmet purchase date in your ride log"
                - "Inspect the helmet shell, straps and buckle for damage @recurring(yearly)"
            - name: Suspension sag and tyre pressure starting setup
              description: |-
                ## Purpose
                New bikes usually leave the shop with the suspension set for nobody in particular and tyres pumped hard enough for the road, which makes them skittish, harsh and slow on roots. Setting sag for your kitted-up weight and finding a starting tyre pressure takes an afternoon with a shock pump and a gauge, and it changes how the bike rides more than any upgrade.

                ## Milestones
                1. Your riding weight with pack, water and kit measured.
                2. Fork and shock sag set to the manufacturer's recommended range, with air pressures recorded.
                3. Rebound set to the maker's starting point for your pressure.
                4. Front and rear tyre pressures chosen and tested on a familiar loop.
                5. All settings written on a setup card in your ride log.

                ## Notes
                Use a digital gauge you trust, because track pump gauges can be several psi out at low pressures. Note settings before changing anything, so you can always get back to a known baseline.
              priority: high
              deadlineOffsetDays: 14
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A setup card listing fork and shock pressures, sag percentages, rebound clicks and tyre pressures, tested on one familiar loop."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Weigh yourself wearing your riding kit, pack and full bottle"
                - "Look up the sag range and pressure chart for your fork and shock"
                - "Set sag with a shock pump and record the air pressures"
                - "Ride a familiar loop at two tyre pressures and note which grips better"
                - "Write every setting on a setup card in your ride log"
            - name: Cockpit and saddle setup for trail riding
              description: |-
                ## Purpose
                Brake levers angled too high, a saddle at the wrong height or bars that are too wide for your shoulders cause sore hands, weak climbing and a body position that fights the bike on descents. Setting saddle height, lever reach and angle, bar roll and dropper travel once, then marking them, makes the bike feel like it fits.

                ## Milestones
                1. Saddle height set so the knee is slightly bent at the bottom of the stroke, with the post marked.
                2. Brake levers angled so wrists stay straight when standing in the attack position.
                3. Lever reach adjusted so one finger covers each brake comfortably.
                4. Bar width and stem length checked against your shoulder width and how the front end feels.
                5. Dropper post length checked so the saddle drops fully out of the way on descents.

                ## Notes
                Change one thing at a time and ride the same section after each change. A paint pen mark on the seatpost and bars saves resetting after transport.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Saddle height, lever angle, lever reach and bar roll set and marked, with measurements added to the setup card."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Set saddle height with your heel on the pedal at the bottom of the stroke"
                - "Angle the brake levers while standing on the pedals in a riding stance"
                - "Adjust lever reach so one finger brakes without stretching"
                - "Mark seatpost and bar positions with a paint pen"
                - "Add the measurements to your setup card"
            - name: Flat or clipless pedals decision
              description: |-
                ## Purpose
                Flat pedals with grippy shoes teach good technique and let you bail out easily, while clipless pedals give more efficiency on long climbs and keep feet planted through chatter. Deciding deliberately, based on your riding and goals, saves buying two sets of shoes and stops you learning drops while worrying about unclipping.

                ## Milestones
                1. Your main type of riding and next goal written down.
                2. The pros and cons of each pedal type listed against that goal.
                3. One pedal system chosen, with a matching shoe.
                4. If clipless, ten unclipping practice runs done on grass before trail riding.

                ## Notes
                Many coaches suggest learning jumps and drops on flats first. Swapping later is cheap if your shoes are the only real cost.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "One pedal system chosen and written in your ride log with the reason, and matching shoes in use."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Write down your main riding type and the skill you want next"
                - "Compare flat and clipless pedals against that goal"
                - "Buy the pedals and shoes you chose and fit them"
                - "Practise clipping in and out on grass before riding trails"
            - name: Local trail map with grades and favourite loops
              description: |-
                ## Purpose
                Riders often ride the same two loops for years because finding new ones means getting lost in the woods. Building your own map of local trails, with grades, direction of travel, parking and the loops that fit a one-hour or three-hour window, makes every ride easier to plan and quietly widens the terrain you are comfortable on.

                ## Milestones
                1. Every trail centre and network within an hour's drive listed with grading and parking.
                2. At least five loops saved in a mapping app, tagged by duration and difficulty.
                3. Trails you have not ridden yet marked as targets.
                4. Rights of way rules for off-road riding in your area checked and noted.

                ## Notes
                Respect trail direction and access rules. Riding where bikes are not allowed is how networks get closed for everyone.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A saved map or list with at least five loops tagged by duration and grade, plus three new trails marked as targets."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "List trail centres and networks within an hour's drive"
                - "Save five loops in your mapping app, tagged by time and grade"
                - "Mark three trails you have not ridden as future targets"
                - "Look up the local access rules for riding bikes off-road"
            - name: Trailside repair kit and riding pack
              description: |-
                ## Purpose
                A slashed tyre or snapped chain an hour from the car turns a good ride into a long walk unless the fix is in your pack and you know how to do it. A compact kit with a multi-tool, tubeless plugs, a spare tube, quick links and a mech hanger for your frame covers the failures that actually happen on trails.

                ## Milestones
                1. A pack or frame bag chosen that carries water, kit and a layer.
                2. Multi-tool with chain breaker, tyre plugs, tube, levers, pump and quick links packed.
                3. A spare derailleur hanger for your exact frame bought and packed.
                4. A tubeless plug and a chain fix both practised at home.
                5. A small first aid kit and foil blanket added.

                ## Notes
                Check your chain speed when buying quick links, since 11 and 12 speed links are not interchangeable. Practise fixes at home where you can see YouTube and swear in comfort.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A packed repair kit including the correct hanger and quick links, with one plug and one chain fix practised at home."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Find the hanger model for your frame and order a spare"
                - "Pack multi-tool, plugs, tube, levers, pump and quick links"
                - "Practise plugging a tubeless tyre and joining a chain at home"
                - "Add a small first aid kit and foil blanket to the pack"
                - "Check the repair kit and replace anything used @recurring(quarterly)"
            - name: Solo ride plan and emergency contacts
              description: |-
                ## Purpose
                Riding alone in the woods is normal, but a crash that leaves you unable to ride out with no signal is a real risk on quieter trails. A simple routine of telling someone your route and return time, carrying a charged phone with crash detection or live tracking set up, and knowing the emergency number and location tools makes help far easier to send.

                ## Milestones
                1. One or two people agreed as your ride contacts.
                2. Live location sharing or crash detection set up on your phone or watch.
                3. Emergency details and medical notes visible on your phone lock screen.
                4. A what-to-do-if-I-am-late note agreed with your contacts, with a time to call for help.

                ## Notes
                Learn how to give a precise location from your phone, such as a grid reference or a what3words-style app where your services use one. Trail centres often post marker posts with numbers for this reason.
              priority: high
              deadlineOffsetDays: 14
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Ride contacts agreed, tracking or crash detection active, and a late-return plan with a call-for-help time written and shared."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Ask one or two people to be your ride contacts"
                - "Turn on crash detection or live tracking on your phone or watch"
                - "Add emergency contacts and medical notes to your lock screen"
                - "Agree how late you can be before a contact calls for help"
            - name: Ride log for rides, skills and setup changes
              description: |-
                ## Purpose
                Most riders remember the best day and forget the rest, so they cannot tell whether a pressure change helped or whether climbing has improved since spring. A plain log of each ride's trail, time, how it felt, setup changes and skills practised gives you evidence when you come to change the bike or plan a race.

                ## Milestones
                1. A log with columns for date, trail, duration, climb, setup change, skill and notes.
                2. Your setup card and bike details stored at the top.
                3. At least four weeks of rides recorded.
                4. One setup change judged from logged notes rather than memory.

                ## Notes
                Start from the **Metrics log** template. Your GPS app records distance and time; the log is for what it cannot capture, like grip, confidence and what you changed.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A ride log holding at least four weeks of entries, with setup card at the top and one setup change evaluated from the notes."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Create a ride log from the metrics log template"
                - "Add columns for trail, duration, climb, setup change and skill"
                - "Paste your setup card and bike details at the top"
                - "Review four weeks of entries and judge one setup change"
            - name: Home loop benchmark for fitness and skills
              description: |-
                ## Purpose
                Without a fixed test, it is hard to know whether you are getting fitter or faster, or just riding on a good day. A benchmark loop of 30 to 60 minutes with one timed climb and one timed descent, ridden in similar conditions every few months, shows real progress in both fitness and technique.

                ## Milestones
                1. A loop chosen with a distinct climb and descent segment.
                2. First timed run done with climb time, descent time and average heart rate recorded.
                3. Conditions noted: trail wetness, tyre pressure and bike setup.
                4. A repeat date set for the next benchmark.

                ## Notes
                Only compare runs ridden in similar conditions. A wet descent can be 20 percent slower without anything being wrong with you.
              priority: medium
              deadlineOffsetDays: 21
              frontmatter:
                mode: building
                output_kind: knowledge
                success_criteria: "A first benchmark result logged with climb and descent times, heart rate and conditions, and a repeat date set."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Pick a local loop with one clear climb and one clear descent"
                - "Ride the loop and time the climb and descent separately"
                - "Record the times, heart rate and trail conditions in your log"
                - "Repeat the benchmark loop in similar conditions @recurring(quarterly)"
            - name: Weekly trail ride routine
              description: |-
                ## Purpose
                Skills and trail fitness both fade within weeks if rides become occasional, and the hardest part is often agreeing the slot with the rest of your life. A protected weekly ride of two to three hours, planned the night before with a loop from your map, keeps you riding through busy months.

                ## Milestones
                1. A weekly ride slot agreed with household and work.
                2. A loop picked from your trail map before each ride.
                3. Each ride logged with one sentence on what went well.
                4. Eight weeks in a row of weekly rides completed.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Eight consecutive weeks with at least one logged trail ride of two hours or more."
                cadence: rolling
              tasks:
                - "Agree a weekly ride slot with your household"
                - "Pick a loop from your trail map the evening before"
                - "Ride your weekly trail loop and log it afterwards @recurring(weekly:sat)"
                - "Note one thing that went well and one to work on after each ride"
            - name: Post-ride wash and drivetrain care
              description: |-
                ## Purpose
                Mud and grit left on the chain and fork stanchions wear out cassettes, chainrings and seals far faster than riding does. A ten-minute wash, dry and chain lube after each muddy ride makes parts last longer and lets you spot cracked frames, loose bolts or torn tyres while they are cheap problems.

                ## Milestones
                1. A wash kit with soft brushes, bike cleaner, degreaser and chain lube assembled.
                2. A low-pressure wash routine written and stuck by the tap.
                3. Chain wear measured with a checker and recorded.
                4. Wash and lube done after every muddy ride for a month.

                ## Notes
                Avoid pressure washers near bearings and seals. Choose wet or dry lube to suit the season and wipe off the excess.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A wash kit and written routine in use, with chain wear measured and recorded monthly."
                cadence: rolling
              tasks:
                - "Put together a wash kit with brushes, cleaner, degreaser and lube"
                - "Write a five-step wash routine and stick it near the tap"
                - "Wash, dry and lube the bike after the weekend ride @recurring(weekly:sun)"
                - "Measure chain wear with a checker and note the reading"
            - name: Monthly bolt, brake and tyre safety check
              description: |-
                ## Purpose
                Loose stem bolts, worn brake pads and tyres with torn sidewalls are behind many avoidable crashes, and they wear quietly between rides. A fifteen-minute monthly check with a torque wrench, a look at pad thickness and a tyre inspection catches them before they fail on a descent.

                ## Milestones
                1. A written checklist covering bolts, brakes, tyres, wheels, headset and suspension.
                2. A torque wrench and the maker's torque values for your bike to hand.
                3. Brake pad thickness and rotor condition checked and recorded.
                4. Any worn part replaced or booked into a shop within the week.

                ## Notes
                Start from the **Operational checklist** template. Carbon parts need the specified torque, not a firm hand.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A monthly safety checklist completed and logged for three months running, with worn parts replaced within a week of being found."
                cadence: rolling
              tasks:
                - "Write a safety checklist from the operational checklist template"
                - "Find the torque values for your stem, bars, seatpost and axles"
                - "Run the safety check and record pad thickness and tyre wear @recurring(monthly:12)"
                - "Replace or book in any part flagged as worn"
            - name: Suspension servicing by riding hours
              description: |-
                ## Purpose
                Fork and shock makers set service intervals in riding hours, often a lower leg service every 50 hours and a full service every 100 to 200, and most riders have no idea how many hours they have done. Tracking hours and booking services before performance fades keeps the suspension smooth and avoids expensive damage to stanchions.

                ## Milestones
                1. Service intervals for your fork and shock found in the maker's documentation.
                2. Riding hours since the last service totalled from your GPS app.
                3. A local suspension service centre or home service method chosen.
                4. Next services due logged against hours and roughly by month.

                ## Notes
                Lower leg services on many forks are a home job with the right oil and an hour. Air can and damper rebuilds are usually worth sending away.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Fork and shock hours tracked in the log, with each service done within ten hours of its stated interval for a year."
                cadence: cyclic
              tasks:
                - "Look up the service intervals for your fork and shock"
                - "Total your riding hours since the last service"
                - "Check suspension hours against the service intervals @recurring(quarterly)"
                - "Book a full fork and shock service before the main season @recurring(yearly)"
            - name: Tubeless sealant and tyre wear routine
              description: |-
                ## Purpose
                Tubeless sealant dries out over a few months, and a tyre that looks fine can have no liquid left to seal the next thorn. Checking sealant levels, topping up and noting tread wear on a regular rhythm prevents trailside punctures and tells you when to swap tyres before grip goes.

                ## Milestones
                1. Sealant brand, volume per tyre and last top-up date recorded.
                2. A dipstick or valve-core method for checking sealant learned.
                3. Front and rear tread wear noted with a replacement threshold.
                4. Spare valve cores and sealant kept in the workshop.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Sealant top-up dates and tread condition logged at least every three months for a year."
                cadence: rolling
              tasks:
                - "Record your sealant brand and how much each tyre holds"
                - "Learn to check sealant through the valve with the core removed"
                - "Top up sealant and note front and rear tread wear @recurring(quarterly)"
                - "Buy spare valve cores and a bottle of sealant"
            - name: Midweek skills drill session
              description: |-
                ## Purpose
                Skills improve fastest through short, focused practice rather than hoping they happen on long rides. A 30 to 45 minute session on grass, a car park or a short local section, working one drill at a time, builds the braking, cornering and balance that make weekend trails feel easier.

                ## Milestones
                1. A safe practice spot near home found.
                2. A list of six drills written: track stands, slow-speed turns, braking points, cone cornering, wheel lifts and pumping.
                3. One drill chosen per session and practised for at least 20 minutes.
                4. Progress on each drill noted in the ride log monthly.

                ## Notes
                Wear your helmet and gloves for drills. Small falls at walking pace still hurt.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "At least eight midweek drill sessions logged in two months, with one drill noted as clearly improved."
                cadence: rolling
              tasks:
                - "Find a grassy area or quiet car park near home for drills"
                - "Write a list of six drills to rotate through"
                - "Practise one drill for 30 minutes after work @recurring(weekly:wed)"
                - "Film one drill on your phone and compare with a coaching video"
            - name: Off-bike strength and mobility for riders
              description: |-
                ## Purpose
                Mountain biking loads the legs, grip and core in short bursts and punishes a stiff back and weak hips on long descents. Two short strength and mobility sessions a week, with hinges, split squats, push-ups, rows and hip mobility, make you steadier on the bike and less sore the next day.

                ## Milestones
                1. A two-session plan written with five or six exercises each.
                2. Starting weights or variations recorded for each exercise.
                3. Two sessions a week completed for six weeks.
                4. Loads or variations progressed at least once in that time.

                ## Notes
                If you have back or joint pain, get the plan checked by a physiotherapist first. Short and consistent beats long and occasional.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Twelve strength sessions logged over six weeks, with starting and current loads recorded for each exercise."
                cadence: rolling
              tasks:
                - "Write two 30-minute sessions of hinge, squat, push, pull and core work"
                - "Record your starting weight or variation for each exercise"
                - "Do a 30-minute strength and mobility session @recurring(weekly:tue,fri)"
                - "Increase load or difficulty when every set feels controlled"
            - name: Winter and wet-season riding routine
              description: |-
                ## Purpose
                Short days, mud and cold mean many riders stop for months and then spend spring rebuilding fitness and confidence. A winter routine of mud tyres, lights, warm kit, all-weather trails and a fallback indoor session keeps you riding through the wet season and arriving at spring in shape.

                ## Milestones
                1. Mud tyres or a winter tyre combination chosen and fitted before the wet season.
                2. Winter kit gathered: waterproof jacket, shorts liners, overshoes or winter boots, warm gloves.
                3. All-weather trails that drain well identified on your map.
                4. An indoor or road fallback session planned for the worst days.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "At least two rides a month logged through the wet season, on winter tyres and all-weather trails."
                cadence: cyclic
              tasks:
                - "List all-weather trails that drain well on your trail map"
                - "Fit mud tyres and check winter kit before the wet season @recurring(yearly)"
                - "Plan a 45-minute indoor session for days the trails are closed"
                - "Charge bike lights the night before any evening ride"
            - name: Monthly riding and skills review
              description: |-
                ## Purpose
                Without a look back, months of riding blur together and the same weak spots stay weak. Twenty minutes at the end of each month, reading the ride log and benchmark, picking next month's skill focus and a target trail, keeps progress deliberate.

                ## Milestones
                1. A review template with hours, rides, skills practised and setup changes.
                2. One skill focus chosen for the coming month.
                3. One target trail or feature chosen to ride by the end of the month.
                4. Three months of reviews completed in a row.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Three consecutive monthly reviews written, each naming a skill focus and a target trail, with the outcome of the previous month recorded."
                cadence: rolling
              tasks:
                - "Write a short review template with hours, rides, skills and setup"
                - "Ask the agent to summarise the month's ride log into five lines"
                - "Review the month and set next month's skill and target trail @recurring(monthly:28)"
                - "Mark whether last month's target trail was ridden"
            - name: Trail conditions and closures check before rides
              description: |-
                ## Purpose
                Riding soaked trails tears them up, gets centres closed and ruins bearings, and a forestry or event closure can mean a wasted drive. A quick check of trail centre status pages, local riding groups and the weather the day before saves journeys and trail damage.

                ## Milestones
                1. Status pages and social channels for your main trail centres bookmarked.
                2. A local riding group joined for condition updates.
                3. A wet-weather alternative chosen for each main venue.
                4. A Friday check habit kept for a month.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Bookmarks for every main venue and a wet-weather alternative for each, with a conditions check done before four consecutive weekend rides."
                cadence: rolling
              tasks:
                - "Bookmark the status pages for your main trail centres"
                - "Join one local riding group that posts trail conditions"
                - "Pick a wet-weather alternative for each venue you ride"
                - "Check trail status and weather for the weekend ride @recurring(weekly:fri)"
            - name: Coached skills course on core techniques
              description: |-
                ## Purpose
                Self-taught riders often carry habits that hold them back for years: weight too far back, braking in corners, staring at the obstacle. A one-day or two-session course with a qualified mountain bike coach fixes body position, braking and cornering basics faster than any amount of solo riding, and leaves you with drills to keep practising.

                ## Milestones
                1. Three coaches or courses compared on qualifications, reviews, group size and price.
                2. A course booked at the right level for your riding.
                3. The course completed with the coach's main feedback written down.
                4. Three drills from the course added to the midweek drill list.

                ## Notes
                Ask the coach which national coaching qualification they hold and whether they carry first aid cover and insurance.
              priority: high
              deadlineOffsetDays: 60
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A coached course completed, with written feedback and three drills from it added to your drill list."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "Compare three local coaches on qualifications, group size and price"
                - "Book a core skills course at your level"
                - "Write down the coach's three main corrections after the course"
                - "Add three course drills to your midweek drill list"
            - name: Cornering and berm technique
              description: |-
                ## Purpose
                Corners are where most riders lose time and confidence, usually from braking late, looking at the ground or keeping the bike upright. Learning to brake before the turn, lean the bike while staying centred and look through the exit turns berms and flat corners from a source of fear into the fun part.

                ## Milestones
                1. A cone corner drill practised on grass until the bike leans while you stay upright.
                2. Braking completed before turn entry on a chosen corner, five times in a row.
                3. A sequence of berms ridden smoothly without braking in the turns.
                4. A flat, loose corner ridden with weight on the outside pedal.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "One local berm section ridden without mid-corner braking on five consecutive runs, with a phone video recorded."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Set out four cones on grass and practise leaning the bike"
                - "Pick one corner and mark where to finish braking"
                - "Ride a berm sequence five times looking through to the exit"
                - "Film a run and check your head and hips on the video"
            - name: Braking control on steep descents
              description: |-
                ## Purpose
                On steep ground, grabbing the front brake or locking the rear is how riders go over the bars or slide off the line. Learning to brake progressively with one finger, mostly before features, and to drop your heels and stay centred makes steep trails manageable and safer.

                ## Milestones
                1. Emergency stops practised on a gentle grass slope.
                2. A steep roll-in ridden with controlled braking and heels dropped.
                3. Braking points chosen and kept on one steep local trail.
                4. That trail ridden without skidding the rear wheel.

                ## Notes
                Practise on short slopes you could walk back up, and build steepness slowly.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "One chosen steep trail descended three times without rear wheel skids, with braking points written in the log."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Practise ten controlled stops on a gentle grass slope"
                - "Walk one steep trail and choose where you will brake"
                - "Ride the trail braking only at your chosen points"
                - "Note any skid points in your ride log and plan a fix"
            - name: Drops and jumps progression
              description: |-
                ## Purpose
                Drops and jumps go wrong when riders try a big one before they can manual or pump a small roller. Working up from rollers to small drops and tabletops, with a coach or experienced friend watching, builds the timing that makes airtime controlled rather than lucky.

                ## Milestones
                1. Rollers pumped without pedalling for a full pump track lap.
                2. A kerb-height drop ridden with both wheels landing together.
                3. A small tabletop jump cleared five times with level landings.
                4. A knee-height drop on a trail ridden after watching a confident rider take it.

                ## Notes
                Inspect every take-off and landing before riding it. Progress in small steps and stop when tired, since most jump crashes happen on the last run of the day.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A full pump track lap without pedalling, five clean tabletop jumps and one knee-height drop ridden, each logged with a date."
                cadence: phased
                effort_hours_estimate: "12"
              tasks:
                - "Find a local pump track or skills area with small tabletops"
                - "Pump a full lap of rollers without pedalling"
                - "Ride a kerb-height drop until both wheels land together"
                - "Clear a small tabletop five times with level landings"
            - name: Technical climbing technique
              description: |-
                ## Purpose
                Steep, rooty climbs are usually lost to technique, not fitness: the front wheel lifts, the rear spins or you stall in the wrong gear. Learning to shift weight forward, keep steady torque, choose the line and gear before the climb lets you ride climbs you used to walk.

                ## Milestones
                1. Three local technical climbs chosen as targets.
                2. Seated and standing climbing position practised on a steep section.
                3. Gear chosen before each target climb rather than on it.
                4. Each target climb cleaned at least once without dabbing.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Three named technical climbs each ridden clean at least once, with the gear and line used written in the log."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Pick three local technical climbs you currently walk"
                - "Practise sliding forward on the saddle on a steep section"
                - "Choose your gear and line for each climb before you reach it"
                - "Log each climb when you ride it clean"
            - name: Manuals and bunny hops
              description: |-
                ## Purpose
                Lifting the front wheel and hopping both wheels let you clear roots, ruts and small drops instead of crashing through them. These skills take weeks of short practice rather than one big session, which is why a structured progression on grass or tarmac works better than trying them mid-trail.

                ## Milestones
                1. Front wheel lifts held for two pedal strokes with hips driving back, not arms pulling.
                2. Rear wheel lifts done by pushing the bars forward and lifting feet.
                3. A bunny hop cleared over a low stick on grass.
                4. A manual held for three bike lengths.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A bunny hop over a 15 cm stick and a three bike-length manual both filmed and logged."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "Watch one coaching video on manual technique"
                - "Practise front wheel lifts for ten minutes on grass"
                - "Practise rear wheel lifts with pushes and foot lifts"
                - "Hop a low stick and film the attempt"
            - name: Line choice through roots and rock gardens
              description: |-
                ## Purpose
                Riders often stare at the worst rock and ride straight into it. Learning to look further ahead, pick a line before entering a rough section and stay loose so the bike moves under you makes rock gardens and root webs feel smoother and less tiring.

                ## Milestones
                1. One rough section walked and two lines identified.
                2. Each line ridden and the faster one noted.
                3. Eyes kept two to three metres ahead on a full run.
                4. The section ridden without dabbing a foot three times in a row.

                ## Notes
                Wet roots are a different skill: cross them as square as possible and avoid braking or turning on them.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "One named rock or root section ridden clean three times in a row, with your chosen line noted."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Walk a local rock garden and pick two possible lines"
                - "Ride each line and note which feels smoother"
                - "Ride the section looking two metres ahead the whole way"
                - "Ride it three times without dabbing and log the line"
            - name: Home workshop maintenance skills
              description: |-
                ## Purpose
                Shop waits stretch to weeks in spring, and small jobs like indexing gears, replacing brake pads or bleeding brakes keep a bike rideable. Learning a handful of jobs at home, with the right tools and a stand, saves money and keeps you riding when the shop is full.

                ## Milestones
                1. A workstand and basic tool set bought or borrowed.
                2. Gear indexing and brake pad replacement done at home.
                3. A brake bleed done with the right kit and fluid for your brakes.
                4. Tyre changes and tubeless setup done without help.

                ## Notes
                Use the correct brake fluid for your system. Mineral oil and DOT fluid are not interchangeable and mixing them ruins seals.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Gear indexing, pad replacement, a brake bleed and a tubeless tyre change each done at home and dated in the log."
                cadence: phased
                effort_hours_estimate: "12"
              tasks:
                - "Buy or borrow a workstand and basic tool set"
                - "Index your gears using the maker's instructions"
                - "Replace brake pads and bed them in on a quiet road"
                - "Do one new workshop job yourself @recurring(monthly:16)"
            - name: Outdoor first aid course for riders
              description: |-
                ## Purpose
                Serious crashes happen away from roads, and the first 30 minutes often depend on who you are riding with. A one or two-day outdoor first aid course teaches you to assess a casualty, keep them warm and still, and call for the right help, which matters most if you ride with friends or family.

                ## Milestones
                1. Outdoor first aid courses compared on length, content and certificate.
                2. A course booked and completed.
                3. Your first aid kit updated based on the course.
                4. The certificate date and renewal date recorded.

                ## Notes
                Choose an outdoor or remote first aid course rather than a workplace one, since rescue times are longer.
              priority: high
              deadlineOffsetDays: 90
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "An outdoor first aid course completed, with the certificate date and renewal date recorded and the riding first aid kit updated."
                cadence: phased
                effort_hours_estimate: "16"
              tasks:
                - "Compare two or three outdoor first aid courses near you"
                - "Book a course and add it to your calendar"
                - "Update your riding first aid kit after the course"
                - "Record the certificate and renewal dates in your log"
            - name: Tyre choice for your terrain and season
              description: |-
                ## Purpose
                Tyres decide grip, rolling speed and puncture resistance more than any other part, and many bikes come with tyres suited to dry hardpack. Choosing a front and rear combination for your terrain and season, with casing strength matched to your weight and riding, makes every corner more predictable.

                ## Milestones
                1. Your main terrain and season described: hardpack, loam, rocks, mud.
                2. Tread patterns and casings shortlisted for front and rear.
                3. A combination chosen and fitted tubeless.
                4. Grip and rolling feel compared on your benchmark loop.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A front and rear tyre combination chosen for your terrain, fitted and compared on the benchmark loop with notes logged."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Describe your main terrain and wettest months in a sentence"
                - "Shortlist front and rear tyres with suitable casing"
                - "Fit your chosen tyres tubeless with fresh sealant"
                - "Compare grip on your benchmark loop and log it"
            - name: Suspension tuning beyond sag
              description: |-
                ## Purpose
                With sag set, many riders never touch rebound, compression or volume spacers, and live with a bike that wallows, packs down or bottoms out harshly. Tuning one adjuster at a time on a repeatable test section turns the suspension into something that supports you.

                ## Milestones
                1. A test section of 30 to 60 seconds with roots, compressions and a small drop chosen.
                2. Rebound adjusted until the bike settles without bucking.
                3. Low-speed compression adjusted for support in turns and compressions.
                4. Bottom-out checked with an O-ring and volume spacers changed if needed.
                5. Final settings written on the setup card.

                ## Notes
                Change one adjuster by two clicks at a time and ride the same section. Record every change, even ones you reverse.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Rebound, compression and volume settings tuned on a test section, with every change and final setting recorded on the setup card."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Choose a 30 to 60 second test section with mixed features"
                - "Adjust rebound two clicks at a time and note the feel"
                - "Adjust low-speed compression for support in turns"
                - "Check travel use with the O-ring after a full run"
            - name: Upgrade priority list and budget
              description: |-
                ## Purpose
                Money tends to go first on lighter parts that change little, when tyres, a dropper, grips or a suspension service make a far bigger difference on the trail. Ranking upgrades by how much they improve your riding per unit of cost keeps spending where it counts and stops the bike becoming a parts catalogue.

                ## Milestones
                1. A list of possible upgrades with costs.
                2. Each upgrade scored for how much it would change your riding.
                3. A ranked list with an annual budget.
                4. The top upgrade bought and its effect noted after four rides.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A ranked upgrade list with costs and a yearly budget, with the first upgrade fitted and its effect logged."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "List every upgrade you are considering with its cost"
                - "Score each one for how much it changes your riding"
                - "Set a yearly bike budget and rank the list against it"
                - "Fit the top upgrade and log its effect after four rides"
            - name: Electric mountain bike or analogue bike decision
              description: |-
                ## Purpose
                Electric mountain bikes double the climbing you can do in a session and keep riders out with friends who are fitter, but they cost more, weigh more and are not allowed on every trail. Comparing your goals, trail access and budget makes the choice deliberate rather than a showroom impulse.

                ## Milestones
                1. Your goals listed: more descents, keeping up, health, racing.
                2. Local trail access rules for electric bikes checked.
                3. Running costs compared: battery life, servicing and insurance.
                4. A demo ride done on an electric mountain bike.
                5. A decision recorded with the main reason.

                ## Notes
                Rules on motor power and speed limits vary by country. Check yours before you buy.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A written decision on whether to buy an electric mountain bike, based on goals, access rules, costs and one demo ride."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Write down why you are considering an electric mountain bike"
                - "Check local access rules for electric bikes on your trails"
                - "Compare purchase, battery and servicing costs"
                - "Book a demo ride on an electric mountain bike"
            - name: Bike transport on a car rack or in a van
              description: |-
                ## Purpose
                Getting to trails often means a car rack, and cheap racks scratch frames, wobble at speed or block the number plate. Choosing a rack that fits your car, carries your bike's weight and tyre width, and locks securely protects the bike and avoids fines.

                ## Milestones
                1. Your car's towbar, roof or boot options identified.
                2. Racks compared on weight limit, tyre width, lock and price.
                3. A rack bought and fitted, with number plate and lights checked.
                4. A short loading routine practised.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A rack rated for your bike's weight and tyre width fitted to the car, with lock and plate tested."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Check whether your car has a towbar or roof bars"
                - "Compare three racks on weight limit, tyre width and locking"
                - "Fit the rack and check the plate and lights are visible"
                - "Practise loading and locking the bike before a trip"
            - name: Bike security, frame register and insurance
              description: |-
                ## Purpose
                Mountain bikes are stolen from sheds, car racks and cafe stops, and many are never recovered because owners cannot prove the serial number. Recording the frame number, registering the bike, choosing a lock and checking insurance covers the most common losses for little effort.

                ## Milestones
                1. Serial number, photos and receipts stored together.
                2. The bike registered on a national bike register.
                3. A secure lock and ground anchor fitted where the bike is stored.
                4. Home or specialist cycling insurance checked for theft away from home and crash damage.
                5. Insurance renewal date recorded.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "The bike registered with serial number and photos stored, secured at home with a ground anchor, and insurance cover confirmed in writing."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Photograph the bike and its serial number"
                - "Register the bike on a national bike register"
                - "Fit a ground anchor and lock where the bike is stored"
                - "Check your insurance covers theft away from home"
                - "Review bike insurance and value before renewal @recurring(yearly)"
            - name: Riding club or group ride to join
              description: |-
                ## Purpose
                Riding with others shows you lines you never saw, pushes your pace and gives you people to call when the bike breaks. Finding a club or regular group ride at your level, especially one with ride leaders and a no-drop policy, makes it easier to ride more and learn faster.

                ## Milestones
                1. Local clubs and group rides listed with level and ride days.
                2. Two rides tried as a guest.
                3. A club joined or a group ride chosen as your regular.
                4. One group ride a week on your calendar.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A club or group ride chosen after two trial rides, with membership or a regular weekly slot booked."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "List local clubs and group rides with their levels"
                - "Try two group rides as a guest"
                - "Join a club or pick one regular group ride"
                - "Ride with the club on its weekly evening ride @recurring(weekly:thu)"
            - name: Coach or self-coached race preparation
              description: |-
                ## Purpose
                Once you decide to race, the question is whether to follow a plan from a book or app or pay a coach who can adjust to your life. Comparing cost, accountability and the skills feedback each gives helps you choose the support that fits your budget and race goals.

                ## Milestones
                1. Your race goals and weekly hours written down.
                2. Two or three coaches and two self-coached plans compared.
                3. A choice made with costs and what you get each month.
                4. First month of the chosen plan underway.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A written choice between a coach and a self-coached plan, with costs, and the first month of training started."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Write your race goals and the hours you can train each week"
                - "Compare two mountain bike coaches on price and contact"
                - "Compare two self-coached plans or apps"
                - "Choose one option and start the first week"
            - name: First bike park uplift day
              description: |-
                ## Purpose
                One bike park day packs more descending into a few hours than a month of local rides, but the jumps, berms and pace can be a shock to a trail-centre rider. Choosing the right park, booking uplift, hiring protection and starting on blue lines turns the day into progress rather than a crash on the first run.

                ## Milestones
                1. A bike park chosen with lines at your level.
                2. Uplift, bike hire if needed and protection booked.
                3. Bike checked: brakes, tyres and suspension set for faster riding.
                4. The day ridden starting on blue lines, with highlights logged.

                ## Notes
                Ride each new line slowly first. Bike park crashes usually come from riding a jump blind at speed.
              priority: medium
              deadlineOffsetDays: 60
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A bike park day completed with uplift and protection booked, starting on blue lines and logged afterwards."
                cadence: one-shot
                effort_hours_estimate: "10"
              tasks:
                - "Choose a bike park with lines suited to your level"
                - "Book uplift and any hire bike or protection"
                - "Check brakes, tyres and suspension the week before"
                - "Ride blue lines first, then log the day"
            - name: Night riding with lights
              description: |-
                ## Purpose
                Winter evenings can still be riding time, and familiar trails feel completely new at night. A bar and helmet light setup with enough battery, a familiar route and a riding partner makes the first night ride enjoyable rather than nerve-racking.

                ## Milestones
                1. A bar light and helmet light chosen with enough lumens and battery for two hours.
                2. A familiar loop chosen for the first night ride.
                3. A riding partner or group arranged.
                4. First night ride done and logged.

                ## Notes
                Carry a backup light in case of battery failure. Check whether trail centres allow riding after dark.
              priority: low
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A two-light setup with two hours of battery in place and a first night ride on a familiar loop logged."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Choose a bar and helmet light with two hours of battery"
                - "Pick a familiar loop for the first night ride"
                - "Arrange a partner or join a night group ride"
                - "Ride the loop at night and log what you learned"
            - name: First cross-country race
              description: |-
                ## Purpose
                Local cross-country races of one to two hours on a looped course are the friendliest way into racing, with sport and novice categories and a crowd at the start line who were nervous once too. Training for one, practising the course and planning race morning gives you a result to build on and an honest view of your fitness.

                ## Milestones
                1. A local cross-country race chosen and entered with a category.
                2. Eight to twelve weeks of training planned with intervals and longer rides.
                3. The course or a similar one ridden in practice.
                4. Race morning plan written: food, warm-up, kit, start position.
                5. Race completed and lessons logged.
              priority: high
              deadlineOffsetDays: 120
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A cross-country race entered and completed after a planned training block, with lap times and lessons logged."
                cadence: phased
                effort_hours_estimate: "60"
              tasks:
                - "Find a local cross-country race and enter a category"
                - "Plan eight to twelve weeks of intervals and long rides"
                - "Ride the course or a similar loop in practice"
                - "Write a race morning plan with food, warm-up and kit"
            - name: First enduro race
              description: |-
                ## Purpose
                Enduro races time the descents and leave the climbs untimed, which makes them a test of skill, consistency and stamina across a whole day. Preparing your kit, practising stages, managing fitness for the transitions and walking lines turns a first enduro into a fun day rather than a struggle.

                ## Milestones
                1. A beginner-friendly enduro entered.
                2. Protection, bike and spares checked against race rules.
                3. Stage practice day planned and done, with notes on lines.
                4. Food and water planned for the transitions.
                5. Race completed and stage times logged.

                ## Notes
                Many enduros require a full-face helmet and knee pads. Read the rules before race week.
              priority: medium
              deadlineOffsetDays: 150
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A first enduro race completed with protection meeting the rules, stage practice done and stage times logged."
                cadence: phased
                effort_hours_estimate: "40"
              tasks:
                - "Enter a beginner-friendly enduro race"
                - "Check protection and bike against the race rules"
                - "Practise the stages and note line choices"
                - "Plan food and water for the transition climbs"
            - name: Mountain bike riding holiday
              description: |-
                ## Purpose
                Seven days in the Alps, the Pyrenees or a dedicated trail destination can lift your riding more than a season at home, but bike transport, guides, hire and accommodation all need planning. Choosing a destination at your level, booking a guide for the first day and preparing the bike properly makes the trip about riding, not logistics.

                ## Milestones
                1. A destination chosen with trails suited to your level and the time of year.
                2. Travel, accommodation and bike hire or transport booked.
                3. A local guide booked for at least one day.
                4. Bike serviced and spares packed before the trip.
                5. Trip completed and best trails logged.

                ## Notes
                Start from the **Trip** template. Check travel insurance covers mountain biking and mountain rescue.
              priority: medium
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A riding trip completed with travel, accommodation, guide and insurance booked and bike serviced beforehand."
                cadence: one-shot
                effort_hours_estimate: "12"
              tasks:
                - "Create a trip page from the trip template"
                - "Choose a destination and book travel and accommodation"
                - "Book a local guide for at least one day"
                - "Check travel insurance covers mountain biking and rescue"
                - "Service the bike and pack spares before the trip"
            - name: Endurance relay team race of six to 24 hours
              description: |-
                ## Purpose
                Six, twelve and 24-hour relay races turn racing into a team weekend, with riders rotating laps through the day and night from a shared pit. Organising the team, the pit area, lights and a lap rotation is as much of the challenge as the riding, and getting it right means everyone eats, sleeps a little and rides their best laps after dark.

                ## Milestones
                1. A team of two to four riders agreed and entered in a category that suits your mix.
                2. A lap rotation agreed, with a plan for who rides the night laps and how long each rider rests.
                3. A pit kit list written covering gazebo, workstand, spares, food, lights and chargers, with an owner for each item.
                4. Every rider's night lights tested for a full lap's battery on a local night ride.
                5. Race finished and lap times shared with the team, with three changes for next time.

                ## Notes
                Agree the handover point and how riders know they are next before the start. Most lost time in relays comes from missed changeovers, not slow laps.
              priority: low
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A relay team entered and finished, with a lap plan, pit kit list and lap times shared with the team."
                cadence: one-shot
                effort_hours_estimate: "20"
              tasks:
                - "Ask two or three riding friends whether they want to enter a relay"
                - "Enter a six, twelve or 24-hour race in a category that suits the team"
                - "Agree the lap rotation and who rides the night laps"
                - "Write the pit kit list and give every item an owner"
                - "Test everyone's lights on a local night ride before race weekend"
            - name: Riding trails with your children
              description: |-
                ## Purpose
                Children can ride trails from a young age, but rides that are too long, too steep or too cold put them off for good. Short, fun loops with features they can choose to ride, a bike that actually fits and brakes they can reach, and plenty of snack stops make family rides something they ask for rather than something they endure.

                ## Milestones
                1. Each child's bike checked for frame size, brake lever reach and tyres with real grip.
                2. Helmets and gloves fitted for each child, with helmets sized by head measurement.
                3. Three family loops of under an hour identified, with a cafe, playground or pump track on route.
                4. One family ride a month done for three months, with each child choosing one feature to try.
                5. A tow rope or towing system tried on climbs if younger children tire quickly.

                ## Notes
                Let the children set the pace and finish before they are tired, so the last memory is a good one. Lever reach adjusters on kids' brakes are often wound out too far from the factory.
              priority: medium
              frontmatter:
                mode: building
                output_kind: habit
                success_criteria: "Three family loops identified and at least three monthly family rides completed with every child in fitted kit."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "Check each child's bike size and whether they can reach the brakes"
                - "Measure each child's head and fit helmets and gloves"
                - "Pick three family loops under an hour with a treat stop on route"
                - "Plan a family trail ride with snack stops @recurring(monthly:9)"
            - name: Rebuilding confidence after a crash
              description: |-
                ## Purpose
                After a big crash, many riders find the body has healed before the head has, and they freeze on features they used to ride without thinking. A gradual plan of familiar trails, skills drills and features rebuilt one step at a time, starting only once your clinician has cleared you, brings confidence back without forcing it.

                ## Milestones
                1. Clearance to ride again confirmed with your clinician, with any limits written down.
                2. A list of trails and features ranked from easiest to the one where you crashed.
                3. Two weeks of easy, familiar trails ridden with no pressure to push.
                4. Harder features ridden one step at a time, each logged with how it felt.
                5. The crash feature ridden again, or a written decision to leave it until later.

                ## Notes
                Any suspected head injury needs medical clearance before riding again, even if you feel fine. If fear stays strong for months, a coach or sports psychologist can help, and asking is normal.
              priority: medium
              frontmatter:
                mode: building
                output_kind: knowledge
                success_criteria: "Medical clearance recorded and a ranked list of features ridden step by step, ending at the crash site or a written decision to wait."
                cadence: phased
                effort_hours_estimate: "12"
              tasks:
                - "Ask your clinician whether you are cleared to ride and with what limits"
                - "List trails and features from easiest up to the crash site"
                - "Ride easy, familiar trails for two weeks before stepping up"
                - "Log each new feature ridden and how confident it felt"
                - "Ride the step-up features with a friend who can spot you"
            - name: Time-crunched riding on five hours a week
              description: |-
                ## Purpose
                Work, family and commuting can leave five hours a week or less, which is still enough to improve on a mountain bike if the hours are spent well. Three planned sessions, one weekend trail ride, one short interval session indoors or on a hill and one 30-minute skills drill, keep fitness and technique growing without asking for more time than you have.

                ## Milestones
                1. Available hours written down and agreed with your household.
                2. Three weekly sessions planned: weekend ride, intervals and skills.
                3. A twelve-week block completed with at least 80 percent of sessions done.
                4. Benchmark loop repeated at the end of the block and compared with the start.

                ## Notes
                When a week goes wrong, keep the weekend ride and drop the rest. Missing one week rarely matters; missing the habit does.
              priority: medium
              frontmatter:
                mode: building
                output_kind: habit
                success_criteria: "A twelve-week block of three weekly sessions completed at 80 percent or more, with benchmark loop repeated at the end."
                cadence: phased
                effort_hours_estimate: "60"
              tasks:
                - "Write down the hours you can realistically ride each week"
                - "Plan a weekend ride, a 45-minute interval session and a skills session"
                - "Track sessions completed each week for twelve weeks"
                - "Repeat the benchmark loop at the end of the block"
            - name: Trail building and volunteer dig days
              description: |-
                ## Purpose
                Volunteers build and maintain much of the trail network riders use, and many networks would close or fall apart without them. Joining dig days teaches you how trails drain, why corners are shaped the way they are and how features wear, which makes you a better rider and keeps your local trails open for everyone.

                ## Milestones
                1. The volunteer trail group or landowner contact for your local network found.
                2. First dig day attended with gloves, boots and a packed lunch.
                3. Basic drainage, armouring and berm repair learned on the day.
                4. Three dig days attended across a year and logged.

                ## Notes
                Never build or modify trails without the landowner's permission. Unauthorised features are a common reason trails get closed.
              priority: low
              frontmatter:
                mode: service
                output_kind: habit
                success_criteria: "Three volunteer dig days attended and logged in a year."
                cadence: rolling
              tasks:
                - "Find the volunteer trail group for your local network"
                - "Sign up for the next dig day and pack gloves and boots"
                - "Ask the trail leader to show you how drainage and armouring work"
                - "Attend a trail building dig day @recurring(monthly:3)"
            - name: Cross-country race season with structured intervals
              description: |-
                ## Purpose
                Racing a full cross-country series rewards structured training: threshold intervals, short punchy efforts for start loops and steep kickers, and recovery weeks placed around the races that matter. Planning the season and the training blocks together turns occasional good results into consistent ones and stops the summer becoming a string of tired races.

                ## Milestones
                1. Race calendar chosen with each race ranked A, B or C.
                2. Training blocks planned with intervals, long rides and recovery weeks leading into A races.
                3. Power or heart rate zones set from a recent test.
                4. Start loop and technical sections practised on race courses where possible.
                5. Season results logged and compared with the previous year.

                ## Notes
                Start from the **Training program** template. Plan a recovery week every third or fourth week; racing every weekend without one is the usual way a season fades by July.
              priority: medium
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "A season plan with prioritised races, training blocks and zones, with results logged after each race."
                cadence: cyclic
                effort_hours_estimate: "150"
              tasks:
                - "Create a season plan from the training program template"
                - "Choose the season's races and rank them A, B and C"
                - "Set training zones from a recent 20-minute or ramp test"
                - "Log results and lap times after each race"
            - name: Enduro race season with stage practice and protection
              description: |-
                ## Purpose
                Racing a full enduro series means several race weekends of practice days, long transfers and timed stages, plus travel and a bike that takes a beating. A season plan that balances stage practice, transfer fitness, between-race maintenance and upgraded protection keeps you racing all season rather than missing rounds to injury or broken parts.

                ## Milestones
                1. Enduro series chosen and entered, with travel and accommodation booked for each round.
                2. Protection upgraded to race standard: full-face helmet, knee pads and back protection.
                3. Between-round maintenance list written: brake pads, tyres, sealant, bearings and suspension check.
                4. Stage practice notes kept for each round, with key lines recorded.
                5. Season stage times logged and compared round by round.

                ## Notes
                A convertible helmet saves carrying two on transfer climbs, but check it meets the series rules. Plan pads and tyres per round, as steep rocky stages can finish both in a weekend.
              priority: low
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "A full enduro series entered, protection upgraded and stage results logged after each race."
                cadence: cyclic
                effort_hours_estimate: "120"
              tasks:
                - "Choose an enduro series and enter the rounds you can reach"
                - "Upgrade to a race-standard full-face, knee pads and back protector"
                - "Write a between-round maintenance list for brakes, tyres and bearings"
                - "Keep stage practice notes and log stage times after each round"
            - name: Multi-day mountain bike stage race
              description: |-
                ## Purpose
                Multi-day stage races cover huge distances and thousands of metres of climbing over three to eight days, often in remote or hot terrain with mechanical support limited to what you carry. Training volume, eating on the bike, bike reliability and recovery between stages all need planning six to nine months ahead, and many stage races are ridden in pairs, so a partner matters too.

                ## Milestones
                1. Stage race chosen and entered, with a partner agreed if the race uses teams of two.
                2. A six to nine month training plan written with rising weekly hours.
                3. Three back-to-back long ride weekends completed to rehearse consecutive race days.
                4. Bike fully serviced with new drivetrain, tyres and spares packed for reliability over several days.
                5. Race completed and stage results logged with lessons for the next one.

                ## Notes
                Practise eating on the bike every long ride; stomach trouble on day two ends more stage races than fitness does. Check the race's mandatory kit and medical forms early.
              priority: medium
              deadlineOffsetDays: 365
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A stage race completed after a six to nine month plan with back-to-back long rides, with stage results logged."
                cadence: phased
                effort_hours_estimate: "300"
              tasks:
                - "Shortlist two stage races and check entry dates and team rules"
                - "Write a six to nine month training plan with rising weekly hours"
                - "Ride back-to-back long days on three weekends before the race"
                - "Book a full service and fit new drivetrain parts a month before the race"
---

# Mountain Bike Riding & Racing

This area is for anyone who rides off-road, from a new rider on blue trails to someone lining up for an enduro or cross-country race. It starts with the foundations (a bike that suits your trails, a helmet that fits, suspension and tyres set up, a repair kit, a ride plan and a log), then the weekly machinery of riding, washing, safety checks, servicing and skills drills, the techniques of cornering, braking, climbing, drops and line choice, the kit and bike decisions, the events from a first uplift day to a first race, versions for parents, the time-pressed and riders coming back from a crash, and finally the specialist work of a race season and a multi-day stage race.

What repeats is the Saturday trail ride, the Sunday wash, a Wednesday skills drill, two short strength sessions, a Friday trail conditions check, a monthly safety check on the 12th and a month-end review on the 28th, plus quarterly suspension and sealant checks and a yearly look at the helmet, insurance and winter kit. The Purchase decision, Metrics log, Operational checklist, Trip and Training program templates pair with the projects that name them. Installing adds all 50 projects as active, so archive the ones that are not for you yet.
