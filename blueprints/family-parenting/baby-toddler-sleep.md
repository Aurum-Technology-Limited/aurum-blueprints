---
id: family-parenting.baby-toddler-sleep
name: Baby & Toddler Sleep
description: "A safe sleep space, a diary baseline, an approach both parents agree on, and the routines, nap changes and regression plans that get babies and toddlers sleeping."
category: personal
version: 1.0.0
tags: [family-parenting, baby-toddler-sleep, parent, naps, bedtime-routine, night-wakings, sleep-regressions]
author: Aurum Technology
starter_structure:
  templates:
    - metrics-log
    - purchase-decision
    - habit-tracker
    - sleep-review
    - trip
  pillars:
    - name: Family & Parenting
      emoji: "👨‍👩‍👧"
      description: "Raising children and holding a family together: each stage from pregnancy to young adulthood, schooling and activities, family logistics and traditions, extended family, and the decisions parents make together."
      pillarFrontmatter:
        review_cadence: monthly
      areas:
        - name: Baby & Toddler Sleep
          description: "Building sleep routines for babies and toddlers, handling regressions and night wakings, and choosing an approach both parents can follow."
          projects:
            - name: Safe sleep space audit
              description: |-
                ## Purpose
                Babies under a year sleep safest on their back, on a firm flat mattress, in a cot clear of pillows, bumpers and soft toys, and most health services publish a short checklist saying exactly this. Walking through every place your baby sleeps against that checklist takes twenty minutes and removes the risks that are easiest to miss, such as a second-hand mattress that no longer fits snugly or a blind cord within reach.

                ## Milestones
                1. Your health service's safe sleep checklist found and printed.
                2. Every sleep space the baby uses, including the pram and the grandparents' travel cot, checked against it.
                3. Anything that fails the checklist removed, replaced or fixed.
                4. Everyone who puts the baby down shown the checklist.

                ## Notes
                If you can fit more than two fingers between the mattress edge and the cot side, the mattress is the wrong size. Use your own health service's wording, not a retailer's.

                Before you start: this plan is general information to help you organise your own health. It is not medical advice and does not replace a doctor, nurse, pharmacist or other qualified professional. Check any change to treatment, medicine or diet with them first, and get urgent care if you feel unwell.
              priority: high
              deadlineOffsetDays: 14
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Every place the baby sleeps has been checked against your health service's safe sleep checklist, with each failure fixed and recorded."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Download your health service's safe sleep checklist"
                - "Check the cot, basket, pram and any travel cot against it"
                - "Replace any mattress that leaves a gap at the sides"
                - "Walk every regular carer through the checklist"
            - name: Bed-sharing decision and safety review
              description: |-
                ## Purpose
                Many families end up sharing a bed for some or all of the night, planned or not, and the risk depends heavily on circumstances: the baby's age, the adult bed, smoking, alcohol, drowsy medicines and sofas. Making a deliberate decision with your health service's guidance in hand, and making the adult bed as safe as possible if you will share, is far safer than drifting into it exhausted at 4am.

                ## Milestones
                1. Your health service's guidance on bed-sharing and its main risk factors read by both parents.
                2. A decision recorded: no bed-sharing, occasional, or planned.
                3. If sharing, the adult bed set up as the guidance describes, with pillows and duvet kept away from the baby.
                4. A rule that nobody ever falls asleep with the baby on a sofa or armchair, agreed by every adult in the house.

                ## Notes
                Sofas, armchairs and an adult who has drunk alcohol, smoked or taken a drowsy medicine are the highest-risk situations in most guidance. Check your own health service's wording.
              priority: high
              deadlineOffsetDays: 14
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A written bed-sharing decision based on your health service's guidance is agreed by both parents, and the sofa rule has been shared with every carer."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Read your health service's bed-sharing guidance together"
                - "List any of the named risk factors that apply in your home"
                - "Record your bed-sharing decision and the reasons for it"
                - "Tell every adult who sleeps near the baby about the sofa rule"
            - name: Two-week sleep diary baseline
              description: |-
                ## Purpose
                Exhausted parents remember the worst night, not the average one, which makes it hard to tell whether things are improving or what is driving the wakings. Recording every sleep, waking, feed and bedtime for fourteen days shows the real pattern: total sleep in 24 hours, how long the child is awake before each nap, and which wakings are regular enough to be habit.

                ## Milestones
                1. A diary with columns for sleep start, wake time, how they fell asleep, night wakings and feeds.
                2. Fourteen consecutive days recorded, weekends included.
                3. Average total sleep in 24 hours and average number of night wakings worked out.
                4. The two or three patterns that stand out written down in a sentence each.

                ## Notes
                Start from the **Metrics log** template. Record what happened, not what should have happened; the messy days are the useful part.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A fourteen-day sleep diary is complete, with average daily sleep, average night wakings and three written observations."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Set up a sleep diary from the metrics log template"
                - "Agree who records night wakings so nothing is lost at 3am"
                - "Log every sleep, waking and feed for fourteen days"
                - "Work out the averages and write down three patterns you notice"
            - name: Sleep needs by age reference sheet
              description: |-
                ## Purpose
                How much a seven-month-old or a two-year-old typically sleeps, and how many naps they usually take, is published by most health services as a range rather than a rule. Putting the range for your child's age on one page, beside the diary averages, stops you chasing a number from a forum and shows whether there is a real shortfall to fix.

                ## Milestones
                1. Typical total sleep and nap ranges for your child's current age copied from a trusted health source.
                2. Your diary average written beside the range.
                3. A one-line note of whether your child sits inside, above or below it.
                4. The sheet kept where both parents see it.

                ## Notes
                The ranges are wide for a reason. A cheerful child who is growing well on sleep at the low end of the range may not need fixing at all.
              priority: medium
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A one-page sheet shows the published sleep range for your child's age next to their measured average, with a one-line conclusion."
                cadence: one-shot
                effort_hours_estimate: "1"
              tasks:
                - "Find the published sleep ranges by age from your health service"
                - "Copy the range for your child's age onto one page"
                - "Add your diary average and note where it sits"
                - "Pin the sheet inside a kitchen cupboard door"
            - name: Agreeing a sleep approach as parents
              description: |-
                ## Purpose
                Two parents using different methods at 2am, one picking up and one waiting, gives a child mixed signals and usually makes wakings last longer. Comparing the main approaches, from responsive settling to gradual withdrawal to more structured methods, and writing down the one you will both follow, settles the argument once instead of every night.

                ## Milestones
                1. Each parent's limits and worries about sleep methods written down separately.
                2. Three approaches compared against your child's age, temperament and your home.
                3. One approach chosen, with what each parent says and does at a waking.
                4. A trial length agreed before either of you judges whether it is working.

                ## Notes
                Most methods need one to three weeks of consistency before they can be judged. Talk to your health visitor or doctor first if your child is under six months or has a health condition.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A written sleep approach, agreed by both parents, states what each will do at bedtime and at a night waking and how long the trial runs."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Each write down your limits and worries about sleep methods"
                - "Compare three approaches against your child's age and your home"
                - "Agree in writing what each of you does at a night waking"
                - "Revisit the agreed approach together and adjust it if needed @recurring(quarterly)"
            - name: Bedroom set-up for darkness, temperature and quiet
              description: |-
                ## Purpose
                Light at 5am, a radiator that runs hot and a landing that carries every footstep all wake children who would otherwise sleep on. Fixing the room once, with blackout blinds, a thermometer, steady background sound if it helps and a night light dim enough not to wake them, takes a weekend and pays back every night.

                ## Milestones
                1. Room darkness checked at bedtime and at dawn, with blackout fitted wherever light leaks in.
                2. A room thermometer in place and the room kept within the range your health service recommends.
                3. A decision made on white noise, with volume checked at cot height.
                4. Noise outside the door, such as a creaking stair or a television, dealt with.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "The child's room is dark at dawn, has a thermometer reading within the recommended range, and has a recorded decision on background noise."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Stand in the room at dawn and note where light gets in"
                - "Fit blackout blinds or a temporary blackout film"
                - "Put a room thermometer away from the radiator and window"
                - "Test any white noise machine at cot height and turn it down if loud"
            - name: Designing the bedtime routine
              description: |-
                ## Purpose
                A predictable sequence of the same four or five steps, in the same order, at roughly the same time, is one of the most consistently recommended sleep habits for babies and toddlers. Designing it deliberately, short enough that either parent or a grandparent can run it in twenty to thirty minutes, means bedtime stops depending on who happens to be home.

                ## Milestones
                1. Four to six steps chosen, such as bath, pyjamas, milk, teeth, story and song.
                2. A target start time set from the diary and your child's age.
                3. The routine written as a short list both parents follow.
                4. The routine run the same way for fourteen nights.

                ## Notes
                Put milk before teeth and story rather than at the very end if you want to loosen the link between feeding and falling asleep.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A written bedtime routine of four to six steps with a start time has been followed for fourteen consecutive nights."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "List the bedtime steps you already do most nights"
                - "Cut or add steps until the routine fits in thirty minutes"
                - "Set the start time from the diary's natural sleep time"
                - "Write the routine on a card by the changing table"
            - name: Sleep warning signs and when to see a doctor
              description: |-
                ## Purpose
                Loud snoring most nights, pauses in breathing, gasping, very restless sleep or a child who seems exhausted despite long nights can point to a medical cause such as enlarged tonsils, and that is for a doctor, not a sleep method. Writing down what your health service says to watch for, and what to do about each sign, means you notice early instead of spending months training around a problem that needs treating.

                ## Milestones
                1. Your health service's guidance on snoring, breathing and sleep concerns in children found.
                2. A short list of signs that mean booking an appointment, and signs that mean urgent help.
                3. A column in the sleep diary for noting any of the signs.
                4. Any sign seen more than a few times raised with your doctor, with a short phone video if possible.

                ## Notes
                This card organises your health service's advice; it does not replace it. A phone video of the breathing that worries you is very useful in a short appointment.
              priority: high
              deadlineOffsetDays: 7
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A card listing your health service's sleep warning signs and the action for each is kept with the sleep diary."
                cadence: one-shot
                effort_hours_estimate: "1"
              tasks:
                - "Look up your health service's guidance on snoring and breathing pauses in children"
                - "Write the signs and the action for each on one card"
                - "Add a column to the sleep diary for anything on the card"
                - "Check the card against current guidance @recurring(yearly)"
            - name: Splitting night duty between parents
              description: |-
                ## Purpose
                Once the newborn weeks are over and wakings settle into a pattern, the parent who does every one of them burns out within weeks and resentment builds quietly. Agreeing a split, by alternate nights, by half-night shifts or by which wakings each covers, with work start times and feeding in mind, protects one block of five or six hours for each adult.

                ## Milestones
                1. Each parent's fixed constraints listed, such as early starts, feeding or medicines that make waking hard.
                2. A split chosen: alternate nights, shifts, or first and second half of the night.
                3. The off-duty parent's sleep protected with earplugs or a separate room.
                4. The split reviewed after two weeks and adjusted.

                ## Notes
                If one parent is breastfeeding, the other can still take the settling, the changes and the early morning so the feeding parent sleeps on afterwards.
              priority: high
              deadlineOffsetDays: 14
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A written night duty split gives each parent at least one protected five-hour block on most nights, reviewed after two weeks."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "List each parent's work start times and other fixed constraints"
                - "Pick a split pattern and write it on the fridge"
                - "Set up earplugs or a spare bed for the off-duty parent"
                - "Book a fifteen-minute check-in two weeks from now to adjust the split"
            - name: Choosing sleeping bags, a monitor and other sleep kit
              description: |-
                ## Purpose
                Sleep products are heavily marketed, and some, such as sleep positioners, weighted sleepwear and cot bumpers, go against most safe sleep guidance. Deciding what you actually need, usually a well-fitting sleeping bag in the right tog, a monitor only if your home layout calls for one and perhaps blackout blinds, saves money and keeps unsafe items out of the cot.

                ## Milestones
                1. A list of the products your safe sleep guidance warns against.
                2. Needs listed by room and season, alongside what you already own.
                3. Sleeping bags bought in the right size and tog for the season.
                4. A decision recorded on whether a monitor is needed, and which type.

                ## Notes
                Start from the **Purchase decision** template. Hand-me-down sleeping bags are fine if the neck and armholes still fit snugly.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A recorded decision lists the sleep kit bought, the items ruled out against safe sleep guidance, and the total spend."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Note the sleep products your safe sleep guidance advises against"
                - "List the sleep kit you already own and what is missing"
                - "Compare two or three sleeping bags by size and tog"
                - "Decide whether your home layout needs a monitor at all"
            - name: Fixed morning wake time
              description: |-
                ## Purpose
                Wake-up times that drift from 6am to 8.30am move naps and bedtime with them, and the day never settles. Fixing a morning wake time within a half-hour window, every day including weekends, is often the simplest change that steadies the whole schedule for a child over six months.

                ## Milestones
                1. A wake time chosen that suits the family's whole week.
                2. Curtains opened, lights on and breakfast started at that time every day.
                3. The wake time held for three weeks, weekends included.
                4. Nap and bedtime times compared before and after to see whether they settled.

                ## Notes
                A lie-in on Saturday feels kind but usually costs a late, difficult bedtime that night.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Wake-up has been within thirty minutes of the chosen time on at least eighteen of twenty-one days."
                cadence: rolling
              tasks:
                - "Choose a wake time that works on weekdays and weekends"
                - "Open the curtains and start the day at the agreed wake time @recurring(daily)"
                - "Compare nap and bedtime times after three weeks with the diary baseline"
            - name: Nightly bedtime routine checklist
              description: |-
                ## Purpose
                Routines that were designed but not kept up fade within a fortnight, especially when the other parent or a babysitter does bedtime. Running the routine every night from a short checklist, and ticking it off, keeps the steps and the start time consistent enough for a young child's body clock to rely on.

                ## Milestones
                1. The routine checklist on the wall or in a shared app.
                2. Bedtime started within fifteen minutes of the target on most nights.
                3. A month of ticked-off routines.
                4. Every night the routine slipped noted with the reason.

                ## Notes
                Start from the **Habit tracker** template.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "The bedtime routine has been ticked off on at least twenty-five nights in a month, each started within fifteen minutes of the target time."
                cadence: rolling
              tasks:
                - "Put the routine steps into a habit tracker"
                - "Start the bedtime routine at the target time and tick it off @recurring(daily)"
                - "Note the reason on any night the routine slipped"
            - name: Weekly sleep review on Sunday evening
              description: |-
                ## Purpose
                Daily logging is only useful if someone reads it, and one bad Tuesday is easy to overreact to. Ten minutes on a Sunday evening comparing the week with the one before shows whether the plan is working, and gives both parents the same picture before anything is changed.

                ## Milestones
                1. A weekly slot in both parents' calendars.
                2. Total sleep, night wakings and bedtime battles counted for the week.
                3. At most one change agreed for the coming week.
                4. Eight weekly reviews completed.

                ## Notes
                Start from the **Sleep review** template. Changing one thing at a time is the only way to tell what helped.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Eight consecutive weekly reviews are recorded, each comparing the week's wakings with the last and naming at most one change."
                cadence: rolling
              tasks:
                - "Create a sleep review page for this week"
                - "Compare this week's wakings and bedtimes with last week's @recurring(weekly:sun)"
                - "Agree one change for next week, or agree to change nothing"
            - name: Nap schedule that grows with your child
              description: |-
                ## Purpose
                Naps change more than any other part of a young child's sleep: from four or more short ones to three, two, one and eventually none. Reviewing awake times and nap lengths every month keeps the schedule fitted to the age your child is now, not the age they were when you last wrote it down.

                ## Milestones
                1. Current nap times and the awake time before each written down.
                2. Signs that the schedule no longer fits listed, such as short naps or fighting the last nap.
                3. The schedule adjusted after each monthly review.
                4. A dated record of every nap change kept.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A dated nap schedule has been reviewed every month for six months, with each change and its reason recorded."
                cadence: rolling
              tasks:
                - "Write today's nap times and the awake time before each"
                - "List the signs that a nap schedule has stopped fitting"
                - "Review nap lengths and awake times against your child's age @recurring(monthly:9)"
            - name: Wind-down hour before toddler bedtime
              description: |-
                ## Purpose
                Toddlers who go straight from rough play or a tablet into the bath often spend the routine wound up, and bedtime stretches to an hour. Building a quieter last hour, with dimmer lights, calmer play and screens away, gives the body clock a clear signal that night is coming.

                ## Milestones
                1. The last hour before bed written down as it currently runs.
                2. Screens off and lights dimmed at a set time.
                3. Three or four quiet activities ready, such as puzzles, play dough or bath toys.
                4. Time from lights out to asleep compared before and after, over two weeks.

                ## Notes
                Agree the screen-off time with every adult and older child in the house, or the first evening someone's programme is on will undo it.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Screens have been off and lights dimmed an hour before bed on most evenings for a month, with time to fall asleep recorded before and after."
                cadence: rolling
              tasks:
                - "Write down what the last hour before bed looks like now"
                - "Pick a screen-off and lights-dim time an hour before bed"
                - "Put a basket of quiet toys in the living room"
                - "Compare time to fall asleep after two weeks with your diary baseline"
            - name: Parent sleep recovery plan
              description: |-
                ## Purpose
                Months of broken nights wear down mood, patience and safe driving, and parents often notice it in each other before themselves. Planning recovery on purpose, with an alternating weekend lie-in, one early night each a week and the odd nap time used for sleep, keeps both adults functioning while the child's sleep improves.

                ## Milestones
                1. Each parent's hours of sleep noted for a week.
                2. A weekend lie-in alternating between parents.
                3. One early night a week each, protected in the calendar.
                4. Low mood or exhaustion that lasts two weeks raised with your doctor.

                ## Notes
                Persistent low mood, anxiety or exhaustion after having a baby is common and treatable, for either parent. Mention it to your doctor or health visitor.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Each parent has had one weekend lie-in and one early night in each of four consecutive weeks."
                cadence: rolling
              tasks:
                - "Write down how many hours each of you slept last night"
                - "Agree whose weekend lie-in it is and put it in the calendar @recurring(weekly:fri)"
                - "Each pick one fixed early night a week"
                - "Book a doctor's appointment if exhaustion or low mood lasts two weeks"
            - name: Seasonal sleepwear and tog check
              description: |-
                ## Purpose
                Overheating is a recognised risk for babies, and children also wake when they are cold, so what they wear to bed has to change with the season and the heating. A quarterly check of room temperature, sleeping bag tog and pyjamas against a simple chart avoids guessing on the first hot night or cold snap.

                ## Milestones
                1. A tog and clothing chart from your health service or the sleeping bag maker pinned in the room.
                2. Sleeping bags in the right tog for summer and winter ready.
                3. Bag and pyjama sizes checked against current height.
                4. Room temperature noted at bedtime during each check.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A tog chart is pinned in the room and sleepwear has been checked against it at each change of season for a year."
                cadence: cyclic
              tasks:
                - "Pin a tog and clothing chart next to the room thermometer"
                - "Check sleepwear, bag size and tog against the season @recurring(quarterly)"
                - "Order the next size of sleeping bag before the current one is outgrown"
            - name: Cot safety recheck as your child grows
              description: |-
                ## Purpose
                A cot that was safe for a newborn becomes a climbing frame once a baby can pull to stand, and blind cords, shelves and toys within reach become hazards. Rechecking the space every month, and lowering the mattress base as soon as they sit, keeps the room safe for what your child can do this month.

                ## Milestones
                1. The mattress base lowered once the baby can sit unaided.
                2. Cords, sockets, shelves and furniture within reach of the cot moved or secured.
                3. Large toys or anything usable as a step removed from the cot.
                4. A monthly check logged, with a move to a bed considered once climbing starts.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A monthly safety check of the cot and room has been logged for six months, with the mattress lowered and blind cords secured."
                cadence: rolling
              tasks:
                - "Lower the cot base to its lowest setting if your baby can sit"
                - "Move the cot away from blind cords, shelves and radiators"
                - "Check the cot, room and reachable furniture for new hazards @recurring(monthly:22)"
            - name: Bedtime handover sheet for other carers
              description: |-
                ## Purpose
                Grandparents, babysitters and a partner home alone for the first time often unpick weeks of progress by doing bedtime their own way, usually because nobody told them the plan. A one-page handover with the routine, the settling words, what to do at a waking and who to call keeps the approach intact whoever is in charge.

                ## Milestones
                1. One page with the routine steps, times, comforter and sleeping bag.
                2. What to say and do at a waking written in plain words.
                3. Safe sleep basics and emergency contacts included.
                4. The sheet given to every regular carer and kept current as the child changes.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A dated one-page bedtime handover sheet is held by every regular carer and has been updated within the last three months."
                cadence: rolling
              tasks:
                - "Write the bedtime steps and times as a numbered list"
                - "Add the exact words and actions for a night waking"
                - "Give a copy to the grandparents and every babysitter"
                - "Update the handover sheet to match current naps and bedtime @recurring(quarterly)"
            - name: Matching nursery and home nap times
              description: |-
                ## Purpose
                Nurseries and childminders run naps around the group, so a child may nap at 11am there and 1pm at home, or skip a nap at nursery and collapse at 4pm. Agreeing nap times, comforter and settling style with your childcare provider, and reading their sleep notes, stops the week pulling in two directions.

                ## Milestones
                1. Your provider's nap times and settling methods written down.
                2. Home nap times moved closer to theirs on non-childcare days, where possible.
                3. The same comforter and sleeping bag used in both places.
                4. The provider's sleep notes copied into your diary each month.

                ## Notes
                Most settings cannot hold a separate nap time for one child. Shifting the home schedule is usually easier than asking them to change theirs.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Nap times at home and at childcare are within an hour of each other, and the provider's sleep notes have been added to the diary for three months running."
                cadence: rolling
              tasks:
                - "Ask your childcare provider for their nap times and settling methods"
                - "Pack the same comforter and sleeping bag that are used at home"
                - "Ask for the month's nursery nap notes and add them to your diary @recurring(monthly:17)"
            - name: Understanding sleep cycles and night wakings
              description: |-
                ## Purpose
                Every child wakes briefly several times a night as they move between sleep cycles, and most go back to sleep without anyone knowing. Understanding how cycles, deep sleep and light sleep work explains why a baby wakes 45 minutes after bedtime or at 5am, and which of those wakings actually need you.

                ## Milestones
                1. Sleep cycles, light sleep and deep sleep explained in your own words in a short note.
                2. The typical cycle length for your child's age noted.
                3. Diary wakings matched to likely cycle transitions.
                4. One change to how you respond to brief wakings agreed.

                ## Notes
                Use health services, university sleep clinics and paediatric associations as sources rather than product sellers.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A one-page note explains sleep cycles and maps at least five recorded wakings to likely cycle transitions."
                cadence: phased
                effort_hours_estimate: "3"
              tasks:
                - "Read one health service or university explainer on infant sleep cycles"
                - "Write a half-page summary in your own words"
                - "Mark the diary wakings that fall at likely cycle transitions"
                - "Agree how long you will listen before going in for a brief waking"
            - name: Reading tired signs and awake windows
              description: |-
                ## Purpose
                Overtired children often look wired rather than sleepy, fighting the cot and waking more at night, while undertired ones lie awake chatting for an hour. Learning your own child's early tired signs, such as staring, rubbing eyes or going quiet, and how long they can comfortably stay awake at this age, makes nap and bedtime timing far more accurate.

                ## Milestones
                1. Your child's early, middle and late tired signs listed from three days of watching.
                2. The typical awake window for their age noted.
                3. Naps started at the early signs for a week, with the result recorded.
                4. Both parents and regular carers able to name the signs.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A list of your child's own tired signs has been shared with carers, and a week of naps started at the early signs has been recorded."
                cadence: phased
                effort_hours_estimate: "3"
              tasks:
                - "Note every tired sign you see over three days"
                - "Sort the signs into early, middle and late"
                - "Start each nap at the first early sign for a week"
                - "Share the list of signs with your childcare provider"
            - name: Gradual retreat settling plan
              description: |-
                ## Purpose
                Gradual retreat, often called the chair method, moves a parent from beside the cot to outside the door over one to three weeks, so a child learns to fall asleep without being held while a parent stays present. It is gentler than leaving a child to cry but needs a written plan, because the commonest failure is moving too fast or slipping back to rocking on a hard night.

                ## Milestones
                1. A step plan written: chair positions, nights at each, and what you say.
                2. The plan started in a quiet fortnight with no travel or illness.
                3. Each night's time to sleep logged.
                4. The parent outside the room by the end of the plan, or the plan paused and reviewed.

                ## Notes
                Talk to your health visitor or doctor before starting any structured settling method with a baby under six months.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: habit
                success_criteria: "A gradual retreat plan has been followed to its final step, with settling time logged every night."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "Write a step plan with three or four chair positions"
                - "Pick a fortnight with no travel, visitors or vaccinations"
                - "Log how long settling takes each night"
                - "Move to the next position only after three calm nights"
            - name: Weighing up the evidence on sleep training
              description: |-
                ## Purpose
                Advice on sleep training ranges from strongly for to strongly against, often from people selling courses or books. Reading a few independent summaries of the evidence on controlled comforting, gradual methods and responsive approaches, including what is known about longer-term effects, lets you decide from facts rather than guilt or fear.

                ## Milestones
                1. Three independent sources found: a health service page, a paediatric body's statement and one research summary.
                2. What each says about effectiveness and longer-term effects summarised.
                3. Points of agreement and genuine uncertainty listed.
                4. Your own position written in a paragraph and shared with your partner.
              priority: low
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A one-page summary compares three independent sources on sleep training and ends with your own written position."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Find one health service page and one paediatric body statement on sleep training"
                - "Ask the agent to summarise the sources you chose side by side"
                - "List where the sources agree and where the evidence is thin"
                - "Write your position in one paragraph and share it with your partner"
            - name: Staying calm at 3am
              description: |-
                ## Purpose
                The hardest part of most sleep plans is not the method but the parent's state at 3am: exhausted, frustrated and tempted to do anything for quiet. Preparing a few short phrases, a breathing pattern and a swap-out rule for when you are close to your limit keeps night responses consistent and safe.

                ## Milestones
                1. Three short phrases written for night wakings, the same every time.
                2. A simple breathing pattern practised during the day.
                3. A swap-out rule agreed so one parent takes over when the other is at their limit.
                4. A plan for putting the child down safely and stepping out for a few minutes if you are alone and overwhelmed.

                ## Notes
                If you ever feel close to shaking or hurting your child, put them down somewhere safe, leave the room and call someone. Every parent reaches their limit; planning for it is the responsible thing to do.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: habit
                success_criteria: "Night phrases, a breathing pattern and a swap-out rule are written down and have been used for two weeks of night wakings."
                cadence: phased
                effort_hours_estimate: "2"
              tasks:
                - "Write three short phrases to use at every night waking"
                - "Practise a slow breathing pattern twice during the day"
                - "Agree a code word that means the other parent takes over"
                - "Save one friend's number to call if you are alone and at your limit"
            - name: Toddler clock and bedtime pass
              description: |-
                ## Purpose
                Toddlers over about two can follow simple bedtime rules but cannot read a clock face. A colour-changing sleep clock for early waking and a single bedtime pass for one extra request give them something concrete to follow, and replace nightly negotiation with a rule they can see.

                ## Milestones
                1. A toddler clock set to change colour at the agreed wake time.
                2. The rule explained with a short picture story during the day.
                3. One bedtime pass made together and its single use agreed.
                4. Two weeks of mornings and bedtimes logged under the new rules.
              priority: low
              frontmatter:
                mode: building
                output_kind: habit
                success_criteria: "A toddler clock and bedtime pass have been in use for two weeks, with wake times and bedtime requests logged."
                cadence: phased
                effort_hours_estimate: "3"
              tasks:
                - "Set the clock's wake colour to just before your toddler's usual wake time"
                - "Make a picture story about staying in bed until the light changes"
                - "Make one bedtime pass card together with your toddler"
                - "Praise every morning they waited for the light, at breakfast"
            - name: Dropping night feeds gradually
              description: |-
                ## Purpose
                Once a baby is gaining well and eating enough during the day, many wake at night from habit rather than hunger, and gradually reducing night feeds can lengthen sleep for everyone. Agreeing readiness with your health visitor or doctor first, then cutting the amount or length of one feed at a time, avoids an abrupt change that leaves a baby genuinely hungry.

                ## Milestones
                1. Readiness to reduce night feeds confirmed with your health visitor or doctor.
                2. Each current night feed's time and amount recorded.
                3. A step-down plan written that reduces one feed at a time.
                4. Night feeds reduced to the number agreed, with daytime intake watched.

                ## Notes
                Readiness depends on age, weight gain and feeding method, so do not set the target from a chart alone.
              priority: medium
              deadlineOffsetDays: 60
              frontmatter:
                mode: building
                output_kind: habit
                success_criteria: "Night feeds have been reduced to the number agreed with your health visitor or doctor, following a written step-down plan."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Ask your health visitor or doctor whether your baby is ready to drop night feeds"
                - "Record the time and length of each night feed for three nights"
                - "Write a plan reducing one feed at a time over two to three weeks"
                - "Offer extra daytime feeds while night feeds are being reduced"
            - name: Moving your baby into their own room
              description: |-
                ## Purpose
                Most safe sleep guidance recommends a baby sleeps in the parents' room for the first six months, and after that the timing is a family choice shaped by space, light sleepers and how much noise everyone makes. Planning the move, with the room ready, naps there first and the monitor tested, makes it one calm week instead of a sudden night.

                ## Milestones
                1. Current safe sleep guidance on room sharing checked.
                2. The new room set up and run through your safe sleep checklist.
                3. Naps taken in the new room for a week before nights.
                4. The first fortnight of nights in the new room logged.
              priority: low
              deadlineOffsetDays: 90
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "The baby is sleeping in their own room after a week of naps there, with the first two weeks of nights logged."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Check your health service's current guidance on room sharing"
                - "Set up the new room and run the safe sleep checklist in it"
                - "Move naps to the new room for a week"
                - "Test the monitor range from your own bedroom"
            - name: Moving from cot to bed
              description: |-
                ## Purpose
                Climbing out of the cot, a new sibling needing it or simply outgrowing it all prompt the move to a bed, usually somewhere between eighteen months and three years. Doing it with a guard rail, a room made safe for night wandering and the same routine reduces the burst of getting up that often follows a toddler's first taste of freedom.

                ## Milestones
                1. A clear reason and timing chosen, avoiding weeks with other big changes.
                2. The bedroom made safe for a child who can get up at night, with a stair gate if needed.
                3. A bed with a guard rail set up with familiar bedding.
                4. Night wanderings handled the same way by both parents for two weeks.
              priority: medium
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "Your child is sleeping in a bed in a room made safe for night wandering, and two weeks of nights have been logged."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Decide on timing, away from other big changes in the family"
                - "Anchor furniture to the wall and fit a stair gate at the door"
                - "Let your toddler choose the bedding for the new bed"
                - "Agree how both parents return a wandering toddler to bed"
            - name: Night-time dummy decision
              description: |-
                ## Purpose
                A dummy that soothes a baby can become the reason for half a dozen wakings once they lose it in the night and cannot find it again. Deciding whether to keep it and teach your child to find it, or to phase it out at a calm time, ends the nightly hunt under the cot.

                ## Milestones
                1. Wakings caused by a lost dummy counted for a week.
                2. A decision made with your partner: keep and teach, or phase out.
                3. If keeping, several dummies in the cot and a child who can find one.
                4. If phasing out, a gradual plan followed through to the end.

                ## Notes
                Some safe sleep guidance encourages dummies for young babies, so check yours before removing one from a baby in the first months.
              priority: low
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A recorded decision on the night-time dummy has been carried through, and dummy-related wakings have fallen below the baseline week."
                cadence: phased
                effort_hours_estimate: "3"
              tasks:
                - "Count how many wakings a lost dummy causes in one week"
                - "Decide with your partner whether to keep or phase out the dummy"
                - "Put three dummies in one corner of the cot if you are keeping it"
                - "Pick a calm two weeks for phasing it out if you are stopping"
            - name: Changing how your child falls asleep
              description: |-
                ## Purpose
                Children fed, rocked or held to sleep at bedtime usually expect the same at every night waking, because they wake somewhere different from where they dropped off. Moving the feed or rocking earlier in the routine and putting them down drowsy but awake changes the association step by step, without taking the comfort away altogether.

                ## Milestones
                1. How your child falls asleep at bedtime and at wakings written down.
                2. The feed or rocking moved to earlier in the routine.
                3. Your child put down drowsy but awake at bedtime for two weeks.
                4. The same approach used at night wakings once bedtime is steady.
              priority: medium
              deadlineOffsetDays: 45
              frontmatter:
                mode: building
                output_kind: habit
                success_criteria: "For fourteen consecutive nights your child has been put down awake at bedtime, with settling time logged each night."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Write down exactly how your child falls asleep now"
                - "Move the feed or rocking to before teeth and story"
                - "Put your child down drowsy but awake at bedtime"
                - "Log how long settling takes each night for two weeks"
            - name: Fixing early rising before 6am
              description: |-
                ## Purpose
                Waking at 5am is one of the most stubborn sleep problems, and it rarely has a single cause: light, a bedtime that is too early or too late, a first nap that starts too soon, or hunger. Working through the usual causes one at a time, a week each, finds the lever that moves wake-up back to a liveable hour.

                ## Milestones
                1. Two weeks of wake times recorded as a baseline.
                2. Room light and early morning noise ruled out.
                3. Bedtime and first nap timing adjusted one at a time, a week each.
                4. Average wake time moved later, or the cause identified.

                ## Notes
                Treat any waking before 6am as night: lights off, few words, and the day does not start until the agreed time.
              priority: medium
              deadlineOffsetDays: 45
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "Average wake time across a week has moved later than the baseline, and the change that worked is recorded."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Record wake times for two weeks before changing anything"
                - "Check the room for light and noise at 5am"
                - "Move the first nap fifteen minutes later for a week"
                - "Try a bedtime fifteen minutes earlier or later the following week"
            - name: Ending drawn-out toddler bedtimes
              description: |-
                ## Purpose
                Toddlers are experts at stretching bedtime: one more story, a drink, the toilet, a lost toy, then out of bed again. A routine with every request built in before lights out, one calm response used identically each time and a fixed lights-out time usually shortens bedtime from an hour to twenty minutes within a couple of weeks.

                ## Milestones
                1. Every bedtime request and the time to lights out logged for five nights.
                2. Drink, toilet, comforter and story choice built into the routine before lights out.
                3. One calm, repeated response agreed for getting out of bed.
                4. Time from lights out to asleep halved compared with the baseline.
              priority: medium
              frontmatter:
                mode: building
                output_kind: habit
                success_criteria: "Time from lights out to asleep has averaged less than half the baseline for two weeks."
                cadence: phased
                effort_hours_estimate: "5"
              tasks:
                - "Log every request and the time to lights out for five nights"
                - "Add a drink, toilet stop and story choice before lights out"
                - "Agree one sentence to say each time your toddler gets up"
                - "Walk them back to bed with the same sentence every time"
            - name: Two-to-one nap transition
              description: |-
                ## Purpose
                Somewhere between about twelve and eighteen months most toddlers drop to one nap, and the weeks in between are messy: refusing the morning nap, then melting down by 4pm. Planning the switch, nudging the morning nap later and bringing bedtime earlier while they adjust, gets through it in two or three weeks instead of two months.

                ## Milestones
                1. Signs of readiness seen for at least two weeks, such as refusing one nap or very short naps.
                2. The morning nap moved later in small steps.
                3. Bedtime brought earlier for a while as the single nap settles.
                4. One midday nap steady for two weeks.
              priority: low
              frontmatter:
                mode: building
                output_kind: habit
                success_criteria: "A single midday nap has been steady for fourteen days, with the transition steps recorded."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Record two weeks of nap refusals and nap lengths"
                - "Push the morning nap fifteen minutes later every few days"
                - "Bring bedtime earlier by up to thirty minutes during the switch"
                - "Tell your childcare provider the new nap time"
            - name: Dropping the last nap
              description: |-
                ## Purpose
                Between about two and a half and four, the afternoon nap starts pushing bedtime later and later, until a three-year-old is still awake at 9pm. Capping the nap first, then swapping it for quiet time, keeps the late afternoon bearable and brings bedtime back to a sensible hour.

                ## Milestones
                1. Bedtime and nap length logged for two weeks to confirm the pattern.
                2. The nap capped and then shortened over a few weeks.
                3. A daily quiet time in the bedroom in place of the nap.
                4. Bedtime back to its target time.
              priority: low
              frontmatter:
                mode: building
                output_kind: habit
                success_criteria: "The nap has been replaced by quiet time for three weeks and bedtime is back within fifteen minutes of the target."
                cadence: phased
                effort_hours_estimate: "3"
              tasks:
                - "Log nap length and bedtime for two weeks"
                - "Wake your child from the nap after a fixed length"
                - "Set up a quiet time box of books and puzzles"
                - "Move bedtime earlier on days with no nap"
            - name: Clock change sleep shifts
              description: |-
                ## Purpose
                Clocks moving an hour in spring and autumn, where your country changes them, throw young children's sleep off for a week or more, usually with very early mornings in autumn. Shifting bedtime and naps by fifteen minutes a day in the days before, and checking the blackout, makes the change hardly noticeable.

                ## Milestones
                1. Both clock change dates in the family calendar.
                2. A four-day shift plan written for each change.
                3. Blackout checked before the lighter mornings arrive.
                4. Wake time back to normal within a week of each change.
              priority: low
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "Both clock changes in a year have been handled with a written shift plan, with wake time back to normal within seven days."
                cadence: cyclic
              tasks:
                - "Add both clock change dates to the family calendar"
                - "Start shifting bedtime fifteen minutes a day before the spring change @recurring(yearly)"
                - "Start shifting bedtime fifteen minutes a day before the autumn change @recurring(yearly)"
                - "Check the blackout blinds before the first light mornings"
            - name: Four-month sleep regression plan
              description: |-
                ## Purpose
                Around three to five months, many babies' sleep shifts for good towards a more adult pattern of cycles, and a baby who slept long stretches starts waking every two hours. Knowing this is a developmental change rather than something you broke, and having a plan for the next few weeks, stops panicked changes that create new habits.

                ## Milestones
                1. What changes around four months understood and explained to your partner.
                2. Night duty and naps planned for a hard few weeks.
                3. One consistent settling approach used throughout.
                4. Wakings tracked until they settle or a longer-term plan is chosen.
              priority: medium
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A written plan covered the four-month change, with one settling approach used throughout and wakings logged until they settled."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Read a health service explainer on sleep changes around four months"
                - "Agree the settling approach you will both use throughout"
                - "Plan extra night help or daytime rest for three weeks"
                - "Track wakings in the diary until they settle"
            - name: Night separation anxiety around eight to ten months
              description: |-
                ## Purpose
                From about eight months, crawling, standing and a new awareness that parents can leave often bring a spell of crying at bedtime and wakings that only stop when a parent appears. Expecting it, practising short separations by day and keeping night responses calm and brief helps the phase pass without new habits taking hold.

                ## Milestones
                1. The start of the phase noted in the diary.
                2. Short leave-and-return games played most days.
                3. A brief, reassuring night response kept the same each time.
                4. Sitting down from standing in the cot practised by day.
              priority: low
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "The separation phase has been logged from start to finish, with one night response used and practice games played on most days for three weeks."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Play peekaboo and short leave-and-return games each day"
                - "Practise sitting down from standing in the cot by day"
                - "Agree a short, calm phrase for night wakings"
                - "Note in the diary when the phase starts and when it eases"
            - name: Travel and holiday sleep plan
              description: |-
                ## Purpose
                Strange rooms, a travel cot, a long day of travel and possibly a time difference can undo weeks of good sleep in a day. Taking the familiar pieces with you, blackout, sleeping bag, comforter and routine, and planning how to handle a time zone, keeps the holiday restful and makes the return home quicker.

                ## Milestones
                1. A travel sleep kit list written and packed.
                2. The sleeping space at the destination checked against your safe sleep checklist.
                3. A time zone plan made if crossing more than two hours.
                4. The home routine restarted on the first night back.

                ## Notes
                Start from the **Trip** template and add the sleep kit to its packing list.
              priority: medium
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A travel sleep kit and time zone plan were used on the trip, and home sleep was back to baseline within five nights of returning."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Write a travel sleep kit list with blackout, bag and comforter"
                - "Ask the accommodation for a cot and check it against your checklist"
                - "Plan a gradual time shift if crossing more than two hours"
                - "Restart the full home routine on the first night back"
            - name: Sleep plan for illness, teething and vaccinations
              description: |-
                ## Purpose
                Sick or teething children need more comfort at night, and that is right, but the extra feeds and cuddles can become the new normal after they recover. A plan for when to give more help, how to keep an eye on symptoms overnight and how to return to the usual approach afterwards protects both the child and the progress.

                ## Milestones
                1. A short list, from your health service, of when a sick child needs medical advice.
                2. Night care during illness agreed, including any temporary room sharing.
                3. Any medicine given only as advised by a doctor or pharmacist, with times written down.
                4. A return-to-normal plan started within a few days of recovery.

                ## Notes
                Ask a pharmacist or doctor about pain relief for teething or fever, and never take doses from a forum.
              priority: high
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A written illness and teething night plan, with your health service's warning signs and a return-to-routine step, is kept with the sleep diary."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Copy your health service's signs for when a sick child needs advice"
                - "Agree how you will share nights when your child is ill"
                - "Make a medicine log for doses and times given at night"
                - "Plan the night you will return to the usual routine after recovery"
            - name: Protecting an older child's sleep when a sibling arrives
              description: |-
                ## Purpose
                The arrival of a new baby often coincides with a toddler's sleep falling apart: early waking, bedtime refusal and wakings that need the same parent the newborn needs. Making any big sleep changes for the older child, such as a new bed or room, a couple of months before the birth, and planning who does their bedtime afterwards, keeps their routine the one thing that does not change.

                ## Milestones
                1. Big sleep changes for the older child made at least eight weeks before the due date, or postponed.
                2. The older child's bedtime practised with the parent who will run it after the birth.
                3. A plan for the older child's night wakings during the newborn weeks.
                4. Ten minutes of one-to-one time at bedtime kept for the older child.
              priority: medium
              deadlineOffsetDays: 60
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "The older child's sleep arrangements were settled before the birth, and a written plan covers their bedtime and wakings in the newborn weeks."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Decide whether the older child needs a new bed or room, and when"
                - "Hand bedtime to the other parent for two weeks before the due date"
                - "Write down who answers the older child's wakings after the birth"
                - "Protect ten minutes of one-to-one time at their bedtime"
            - name: Siblings sharing a bedroom
              description: |-
                ## Purpose
                Putting two children in one room saves space but adds new problems: one wakes the other, bedtimes clash and the younger one still naps. Planning the move with staggered bedtimes, background noise and a clear rule for early wakers makes room sharing work for both of them.

                ## Milestones
                1. Each child's sleep pattern compared to spot the clashes.
                2. Bedtimes staggered so the younger child is asleep first.
                3. White noise and a room divider tried if light or noise is a problem.
                4. Two weeks of shared nights logged for both children.
              priority: low
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "Two children have shared a room for two weeks with staggered bedtimes, with both children's wakings logged."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Compare each child's bedtime, wake time and waking pattern"
                - "Set staggered bedtimes, youngest first"
                - "Agree a rule for what an early waker does until it is time to get up"
                - "Log both children's wakings for the first fortnight"
            - name: Consistent bedtime across two homes
              description: |-
                ## Purpose
                Children who split their week between two homes sleep better when the main bedtime cues match, even if the houses run differently in everything else. Agreeing a short list of shared sleep basics with your co-parent, such as wake time, bedtime window, comforter and settling words, and passing on how the last nights went at handover, reduces the unsettled first night at each house.

                ## Milestones
                1. A short list of shared sleep basics agreed with your co-parent.
                2. A comforter travelling with the child, or an identical one kept in each home.
                3. A two-line sleep note passed at every handover.
                4. First-night wakings at each home tracked for a month.

                ## Notes
                Keep the conversation about the child's sleep, not the separation. A written note avoids arguments on the doorstep.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A written list of shared sleep basics is followed in both homes, and a sleep note has passed at every handover for a month."
                cadence: rolling
              tasks:
                - "Draft five sleep basics to propose to your co-parent"
                - "Buy a second identical comforter for the other home"
                - "Send a two-line sleep note at each handover"
                - "Review the shared sleep basics with your co-parent @recurring(monthly:25)"
            - name: Single parent night plan
              description: |-
                ## Purpose
                Doing every waking alone, with nobody to swap with at 3am, makes broken sleep harder and longer to recover from. A plan built for one adult, with an earlier bedtime for you, one regular night of help from family or a friend, and a settling method you can keep up alone, is more realistic than advice written for two parents.

                ## Milestones
                1. Your own sleep hours tracked for a week.
                2. One person asked to cover one night or one early morning a month.
                3. A settling approach chosen that you can keep up without a partner.
                4. Your own bedtime moved earlier on at least three nights a week.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A named helper has covered at least one night or early morning a month for three months, and your own bedtime is earlier on three nights a week."
                cadence: rolling
              tasks:
                - "Track how many hours you sleep for one week"
                - "Ask one person to cover one night or early morning a month"
                - "Book the next covered night with your helper @recurring(monthly:12)"
                - "Choose a settling method you can keep up on your own"
            - name: Twins and multiples sleep routine
              description: |-
                ## Purpose
                Two babies on different schedules can mean no break at all, day or night. Most twin parents find that syncing feeds, naps and bedtime, waking the second baby when the first wakes, and deciding carefully about shared or separate cots buys back the only free hours in the day.

                ## Milestones
                1. Both babies' sleep logged in one diary for a week.
                2. Feeds and naps synced by waking the second baby when the first wakes.
                3. A bedtime routine both parents can run for two at once.
                4. A decision on shared or separate cots, made with safe sleep guidance for twins.

                ## Notes
                Safe sleep guidance on twins sharing a cot varies between countries and with age. Check your health service's advice before putting them in one cot.
              priority: medium
              frontmatter:
                mode: building
                output_kind: habit
                success_criteria: "Both babies' naps and bedtimes have started within thirty minutes of each other for two weeks."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Log both babies' sleep in one diary for a week"
                - "Wake the second baby within thirty minutes of the first"
                - "Write a bedtime routine that runs for two babies at once"
                - "Check your health service's guidance on twins sharing a cot"
            - name: Sleep schedule for the return to work
              description: |-
                ## Purpose
                Going back to work changes everything around sleep: an earlier wake-up for nursery, a commute that tempts a later bedtime so the working parent sees the child, and a carer handling naps. Adjusting the schedule over the two weeks before the first day, rather than on it, avoids a first month of tearful mornings and overtired evenings.

                ## Milestones
                1. New wake time and bedtime set from the work and childcare timetable.
                2. Wake time moved in small steps over the two weeks before the start date.
                3. A decision made between an early bedtime and a later one the working parent can do.
                4. The schedule reviewed and adjusted once after the first month back.
              priority: medium
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "Wake time and bedtime for the return to work were set and phased in over two weeks before the first working day."
                cadence: phased
                effort_hours_estimate: "3"
              tasks:
                - "Work out the new wake time from work and childcare start times"
                - "Move wake time ten minutes earlier every two days"
                - "Decide whether a later bedtime is worth it for the working parent"
                - "Review the schedule after the first month back"
            - name: Preparing for a sleep clinic or consultant appointment
              description: |-
                ## Purpose
                When months of consistent effort have not helped, or a medical cause is suspected, a doctor may refer to a children's sleep service, or you may choose a private sleep consultant. Arriving with the diary, a list of the methods already tried, any videos and three clear questions gets far more from a short appointment.

                ## Milestones
                1. Training and approach checked for any private sleep consultant you consider.
                2. The diary, a summary of methods tried and any videos gathered.
                3. Three questions written in order of importance.
                4. The advice given recorded and a follow-up date set.

                ## Notes
                Sleep consultants are not regulated in most countries. Ask about their training, and whether they refer to a doctor when a medical issue comes up.
              priority: medium
              deadlineOffsetDays: 90
              frontmatter:
                mode: research
                output_kind: deliverable
                success_criteria: "A one-page summary with the diary, methods tried and three questions was taken to the appointment, and the advice is recorded with a follow-up date."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Ask your doctor whether a referral to a children's sleep service is appropriate"
                - "Ask the agent to draft a one-page summary from your sleep diary"
                - "Write the three questions you most need answered"
                - "Record the advice and book the follow-up before you leave"
            - name: Sleep plan for a child with additional needs
              description: |-
                ## Purpose
                Sleep difficulties are much more common in children with autism, ADHD, sensory differences or some medical conditions, and standard methods often need adapting. Working with your child's clinician or support team on a sleep plan that takes in sensory needs, a visual routine and any medical factors gives a plan that fits the child rather than the textbook.

                ## Milestones
                1. Sleep raised as a specific issue with your child's clinician or support team.
                2. Light, fabrics and sound in the bedroom reviewed against your child's sensory preferences.
                3. A visual bedtime routine made with pictures your child understands.
                4. A written plan agreed with the professional, with a review date.

                ## Notes
                Any sleep medicine, including supplements sold over the counter in some countries, is a decision for your child's doctor.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A written sleep plan agreed with your child's clinician or support team includes sensory adjustments, a visual routine and a review date."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Add sleep as an agenda item for your child's next clinical appointment"
                - "Note which lights, fabrics and sounds your child finds calming or upsetting"
                - "Make a picture card for each step of the bedtime routine"
                - "Book the review date written into the plan"
            - name: Nightmares, night terrors and sleepwalking
              description: |-
                ## Purpose
                Nightmares, where a child wakes scared and wants comfort, and night terrors, where they scream but are not truly awake and remember nothing, need almost opposite responses. Learning to tell them apart, logging when they happen and making the house safe for a sleepwalker means you respond the right way and know when to mention it to a doctor.

                ## Milestones
                1. The difference between nightmares and night terrors written in a short note for every adult in the house.
                2. Episodes logged with time after falling asleep and anything unusual about that day.
                3. Stairs, windows and outside doors made safe if sleepwalking happens.
                4. Frequent or worsening episodes raised with your doctor, with the log.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Episodes have been logged for a month, both parents can describe the right response to each type, and the house is safe for sleepwalking."
                cadence: phased
                effort_hours_estimate: "3"
              tasks:
                - "Read a health service page on night terrors and nightmares"
                - "Log each episode's time and anything unusual about that day"
                - "Fit a stair gate and window restrictors if your child sleepwalks"
                - "Take the log to your doctor if episodes are frequent"
            - name: Annual family sleep review on the birthday
              description: |-
                ## Purpose
                Sleep needs, naps and room set-up change every few months in the first years, and what worked at one is often wrong at two. A yearly review around the birthday, rereading the diary, checking sleep against the range for the new age and resetting the routine, keeps the whole system current.

                ## Milestones
                1. The last year's weekly review notes reread.
                2. Total sleep checked against the published range for the new age.
                3. Bedtime routine, nap plan and handover sheet updated.
                4. Two sleep goals for the coming year agreed.
              priority: low
              frontmatter:
                mode: operating
                output_kind: deliverable
                success_criteria: "A written yearly sleep review is completed in the week of each birthday, with the routine, nap plan and handover sheet updated."
                cadence: cyclic
              tasks:
                - "Hold a family sleep review in the week of the birthday @recurring(yearly)"
                - "Check total sleep against the published range for the new age"
                - "Update the bedtime routine, nap plan and handover sheet"
                - "Agree two sleep goals for the coming year"
---

# Baby & Toddler Sleep

Baby and toddler sleep covers the nights and naps from the end of the newborn weeks to the pre-school years, for parents who want one plan they can both follow rather than a new method every week. It starts with safe sleep, a diary baseline and an agreed approach, moves through the nightly routines and nap schedules, then the settling skills, fixes and regressions, and ends with situations such as twins, two homes and children with additional needs.

The rhythms are a nightly bedtime routine and a fixed morning wake time, a Sunday sleep review, monthly nap and cot safety checks, quarterly tog and handover updates, and the clock changes and a birthday review each year. The Sleep review, Metrics log, Habit tracker, Purchase decision and Trip templates pair with it. Installing adds all 50 projects as active, so archive the ones that are not for you yet.
