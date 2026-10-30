---
id: mental-wellbeing.autistic-wellbeing-sensory-needs
name: Autistic Wellbeing & Sensory Needs
description: "A map of your sensory profile, an energy budget you can plan a week around, a meltdown and shutdown plan, and the home, work and social adjustments that keep overwhelm rarer and recovery faster."
category: personal
version: 1.0.0
tags: [mental-wellbeing, autistic-wellbeing-sensory-needs, everyone, autism, sensory-processing, energy-accounting, masking, neurodiversity]
author: Aurum Technology
starter_structure:
  templates:
    - metrics-log
    - purchase-decision
    - habit-tracker
    - sleep-review
    - trip
  pillars:
    - name: Mental & Emotional Wellbeing
      emoji: "🧘"
      description: "The inner weather: managing stress and anxiety, recovering from burnout, therapy and support, rest and attention, mood and emotional skills, and the routines that keep a mind steady when life is not."
      pillarFrontmatter:
        review_cadence: monthly
      areas:
        - name: Autistic Wellbeing & Sensory Needs
          description: "Supporting autistic wellbeing through sensory adjustments, energy accounting, masking awareness and environments that reduce overwhelm."
          projects:
            - name: Mapping your sensory profile across eight senses
              description: |-
                ## Purpose
                Most people know the obvious five senses, but autistic sensory differences often show up in balance, body position and internal signals too, and each one can run over or under sensitive. Writing down, sense by sense, what overwhelms you, what you seek out and what you barely notice gives every later adjustment a reason, and gives you words to explain your needs to other people.

                ## Milestones
                1. A one-page profile covering sight, sound, touch, taste, smell, balance, body position and internal signals.
                2. Each sense marked as over sensitive, under sensitive, mixed or unremarkable, with two real examples.
                3. Your three most disabling sensory triggers ranked.
                4. Your three most reliable sensory comforts listed alongside them.

                ## Notes
                A sensory profile is a description, not a diagnosis. An occupational therapist can do a formal assessment if you want one, but your own careful notes are a valid starting point.

                Before you start: this plan is general information to help you look after your own wellbeing. It is not medical or psychological advice and does not replace a doctor, therapist or counsellor. If you are in crisis, in danger or thinking about harming yourself, contact your local emergency number or a crisis line now.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A written sensory profile covering all eight senses, with examples, a ranked top three of triggers and a list of comforts."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "List the eight senses on one page with a column for overwhelms, seeks and barely notices"
                - "Add two real examples from the past month under each sense"
                - "Rank the three triggers that cost you the most"
                - "List the sensations that reliably calm you"
            - name: Two-week overwhelm and shutdown log
              description: |-
                ## Purpose
                Overwhelm rarely comes from one thing; it is usually the third noisy room after a bad night and a cancelled plan. Logging every episode for two weeks, with what came before it, turns a vague sense of being fragile into a pattern you can actually change.

                ## Milestones
                1. A log with columns for time, place, what happened, sensory load, sleep the night before and how long recovery took.
                2. Every overwhelm, shutdown or near miss recorded for fourteen days.
                3. The three most common preceding conditions identified.
                4. One change chosen to test in the following fortnight.

                ## Notes
                Start from the **Metrics log** template. Near misses count: the day you left the shop early is as useful as the day you could not speak.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Fourteen days of logged overwhelm episodes and near misses, with three common preceding conditions written beneath."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Set up an overwhelm log from the metrics log template"
                - "Record every overwhelm or near miss for fourteen days, including the night's sleep"
                - "Highlight what the worst five episodes had in common"
                - "Pick one change to test over the next two weeks"
            - name: Energy accounting baseline
              description: |-
                ## Purpose
                Energy accounting, developed by autistic clinicians and writers, treats each day as a balance sheet: some activities withdraw energy, some deposit it, and a deficit carried for weeks is how burnout begins. Scoring a normal week once shows you where the energy actually goes, which is often not where you assumed.

                ## Milestones
                1. Every regular activity in a typical week listed.
                2. Each activity scored from minus five to plus five for its energy cost or gain.
                3. A typical weekday and weekend day totalled.
                4. The biggest hidden drains, such as commuting, phone calls or open-plan noise, named.

                ## Notes
                Scores are personal. A party can be plus three for one autistic person and minus five for another, and both are right.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A scored list of a typical week's activities with weekday and weekend totals and the top three hidden drains named."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "List every activity in an ordinary week, including travel and admin"
                - "Score each one from minus five to plus five"
                - "Total a typical weekday and a typical weekend day"
                - "Circle the three drains you had not noticed before"
            - name: Masking inventory across your week
              description: |-
                ## Purpose
                Masking means suppressing stims, scripting conversation, forcing eye contact or copying other people's manners to pass as non-autistic, and many people do it so automatically they cannot see the cost. An honest inventory of where you mask, how much and why makes the drain visible and shows where dropping it would be safe.

                ## Milestones
                1. The settings you spend time in listed: home, work, family, friends, shops, appointments.
                2. Each setting rated for how heavily you mask there.
                3. The specific masking behaviours in your three heaviest settings written down.
                4. One setting identified where masking less feels realistic.

                ## Notes
                Masking is often a reasonable response to real risk. The aim is choice, not forcing yourself to unmask where it is unsafe.
              priority: medium
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A written inventory rating masking in at least six settings, with behaviours named for the top three and one safer setting chosen."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "List the six places or groups you spend the most time with"
                - "Rate how heavily you mask in each from one to five"
                - "Write down exactly what you do to mask in the top three"
                - "Name one setting where you could safely mask a little less"
            - name: Home sensory audit room by room
              description: |-
                ## Purpose
                Home should be where the sensory load drops, yet a buzzing fridge, a cold-white ceiling light or a neighbour's television can keep it high all evening. Walking each room with your sensory profile in hand finds the fixes that are cheap and quick, and shows which ones need the household to agree.

                ## Milestones
                1. Each room checked for light, sound, smell, texture, temperature and clutter.
                2. Every problem listed with a rough cost to fix: free, cheap or bigger.
                3. The five free or cheap fixes done.
                4. The bigger fixes ranked and discussed with anyone you live with.
              priority: high
              deadlineOffsetDays: 45
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A room-by-room audit list with five fixes completed and the remaining ones ranked and agreed with the household."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Sit in each room for five minutes and note every light, sound and smell"
                - "Mark each problem as free, cheap or bigger to fix"
                - "Do the five free or cheap fixes this fortnight"
                - "Share the ranked list of bigger fixes with your household"
            - name: Everyday carry sensory kit
              description: |-
                ## Purpose
                Keeping a sensory kit in your bag means a loud train or a supermarket's lighting becomes manageable instead of a reason to go home. Building it from your own profile, not a generic list, keeps it small enough to carry every day.

                ## Milestones
                1. A kit chosen to answer your top three triggers, such as earplugs, tinted glasses, a fidget or a familiar scent.
                2. Everything fitting in one pouch that goes in every bag.
                3. The kit used on at least five outings and adjusted.
                4. A spare kit kept at work, college or in the car.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A pouch-sized kit matched to your top three triggers, carried daily and used on five outings, with a spare kept elsewhere."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Match one item to each of your top three sensory triggers"
                - "Put the items in one pouch and move it into your everyday bag"
                - "Note after each outing which item you used and which you did not"
                - "Make a spare kit for work, college or the car"
            - name: Choosing noise-reducing ear protection
              description: |-
                ## Purpose
                Sound is the most common sensory trigger autistic adults report, and the choice between foam earplugs, high-fidelity musician's plugs, ear defenders and noise-cancelling headphones changes what you can still hear and how others react. Comparing them against where you actually need them avoids a costly pair that sits in a drawer.

                ## Milestones
                1. The situations you need ear protection in listed, such as commuting, open-plan work, supermarkets or sleep.
                2. Three options compared on noise reduction, comfort over an hour, whether speech is still audible, and price.
                3. One option bought or borrowed and trialled for two weeks.
                4. A decision recorded on whether a second type is needed for a different situation.

                ## Notes
                Start from the **Purchase decision** template. Many people end up with two types: discreet plugs for conversation and over-ear protection for the loudest places.
              priority: medium
              deadlineOffsetDays: 30
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A recorded purchase decision comparing three ear protection options, with one trialled for two weeks."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "List the four situations where noise costs you most"
                - "Compare three ear protection types using the purchase decision template"
                - "Trial your chosen option for two weeks in those situations"
                - "Record whether a second type is needed for sleep or conversation"
            - name: Low-stimulus recovery space at home
              description: |-
                ## Purpose
                After overload, recovery is faster somewhere dim, quiet and predictable, where nobody will start a conversation. Even a corner, a cupboard-sized den or a car parked on the drive can work if everyone in the house knows what it means when you are in it.

                ## Milestones
                1. A space chosen that can be made dim and quiet within a minute.
                2. It stocked with what helps you: a weighted blanket, low light, headphones, a comfort object.
                3. A household rule agreed that nobody interrupts you there unless it is urgent.
                4. The space used after three hard days and its effect on recovery time noted.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A named recovery space set up with an agreed no-interruption rule and used after at least three hard days."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Pick the spot at home that can be darkened and quietened fastest"
                - "Stock it with the three things that calm you most"
                - "Agree a no-interruption rule with the people you live with"
                - "Compare recovery time with and without the space after three hard days"
            - name: Meltdown and shutdown plan
              description: |-
                ## Purpose
                Meltdowns and shutdowns are involuntary responses to overload, not tantrums or sulking, and the people around you usually make them worse by asking questions or touching you. A short written plan, made on a calm day, tells you and them what helps, what hurts and when to get extra help.

                ## Milestones
                1. Your own signs of an approaching meltdown and an approaching shutdown written down.
                2. What helps, what makes it worse and what to say or not say listed for each.
                3. Aftercare written: how long you need, what to eat and drink, what to avoid the next day.
                4. The plan shared with at least two trusted people and kept on your phone.

                ## Notes
                If meltdowns involve hurting yourself or put you in danger, bring the plan to your doctor or a clinician. This plan organises what you know; it does not replace crisis care.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A one-page meltdown and shutdown plan with signs, helps, harms and aftercare, shared with two trusted people."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Write the early signs of a meltdown and of a shutdown on a calm day"
                - "List what helps, what makes it worse and what people should say"
                - "Add your aftercare needs for the rest of that day and the next"
                - "Send the plan to two trusted people and save it on your phone"
                - "Reread the plan and update it with anything learned @recurring(quarterly)"
            - name: Deciding whether to pursue an autism assessment
              description: |-
                ## Purpose
                Adults who suspect they are autistic face long waiting lists, varying costs and the question of whether a formal diagnosis would change anything. Weighing what it would give you, such as access to adjustments, an explanation for your history or support services, against the wait, cost and emotional effort leads to a decision you made on purpose.

                ## Milestones
                1. What a formal diagnosis would change for you, practically and personally, written down.
                2. The routes available where you live, public and private, with typical waiting times and costs noted.
                3. Questions answered by your doctor about referral criteria.
                4. A decision recorded: seek assessment now, later, or continue with self-identification.

                ## Notes
                Many autistic adults find self-identification valid and enough. Choose a provider whose assessors work with adults, and be wary of very cheap online assessments.
              priority: medium
              deadlineOffsetDays: 60
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A written decision on seeking an assessment, based on listed routes, costs and waits and a conversation with your doctor."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Write down what a diagnosis would change for you at work, in health care and personally"
                - "Find the public and private assessment routes where you live"
                - "Ask your doctor about referral criteria and current waiting times"
                - "Record your decision and the reasons for it"
            - name: Weekly energy budget
              description: |-
                ## Purpose
                Once you know roughly what activities cost, the week can be planned so withdrawals are matched by deposits instead of discovered on Thursday night. A fifteen-minute Sunday budget, using your baseline scores, is the habit that does most to prevent the slow slide into burnout.

                ## Milestones
                1. A weekly planning slot fixed on the same day each week.
                2. Each day's expected activities scored using your baseline.
                3. At least one recovery deposit placed after every high-cost day.
                4. Eight weekly budgets completed and compared with how the weeks actually went.

                ## Notes
                If a week cannot be balanced, that is information too: something needs to move, be shared or be cancelled.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Eight consecutive weekly energy budgets, each with a recovery deposit after every high-cost day."
                cadence: rolling
              tasks:
                - "Put a fifteen-minute energy budget slot in your calendar"
                - "Score the coming week and place recovery after each heavy day @recurring(weekly:sun)"
                - "Mark which planned deposits actually happened at the end of the week"
                - "Move or cancel one activity whenever a week will not balance"
            - name: Daily decompression window
              description: |-
                ## Purpose
                Arriving home after work, college or a social event and going straight into cooking or conversation stacks one demand on top of the last. Thirty minutes of planned decompression, with low light, no talking and a familiar activity, gives your nervous system a clear break between demands.

                ## Milestones
                1. A daily decompression slot chosen and protected in the household routine.
                2. A default activity picked that needs no decisions, such as a familiar playlist, a walk on a known route or lying under a weighted blanket.
                3. The window kept on at least five days a week for a month.
                4. The effect on evening irritability and sleep noted.

                ## Notes
                Start from the **Habit tracker** template.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A month with a decompression window kept on at least five days each week, logged in a habit tracker."
                cadence: rolling
              tasks:
                - "Agree a daily decompression time with the people you live with"
                - "Choose a default activity that needs no decisions"
                - "Take thirty minutes of decompression before the evening's demands @recurring(daily)"
                - "Note any change in evening irritability after four weeks"
            - name: Monthly overwhelm pattern review
              description: |-
                ## Purpose
                A log is only useful if someone reads it. A short monthly review of the month's overwhelm episodes, energy budgets and near misses shows whether things are steadier or sliding, and catches seasonal or work-cycle patterns that no single week reveals.

                ## Milestones
                1. A monthly review slot in the calendar.
                2. The month's episodes counted and compared with the previous month.
                3. The commonest trigger and the most useful support noted.
                4. Six monthly reviews completed, each ending with one adjustment.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Six monthly reviews, each recording episode count, top trigger and one adjustment made."
                cadence: rolling
              tasks:
                - "Choose the questions your monthly review will answer"
                - "Count the month's episodes and compare with last month @recurring(monthly:9)"
                - "Write down one adjustment to try in the coming month"
                - "Ask the agent to summarise six months of reviews into trends"
            - name: Planned sensory input through the day
              description: |-
                ## Purpose
                Occupational therapists call it a sensory diet: regular doses of the input your body seeks, such as heavy pressure, movement, chewing or rocking, spaced through the day to keep you regulated before you need rescuing. A simple schedule built around your profile can make afternoons noticeably steadier.

                ## Milestones
                1. The kinds of input you seek listed from your sensory profile.
                2. Three short input breaks scheduled: morning, midday and mid-afternoon.
                3. Each break kept on most days for three weeks.
                4. The breaks that helped kept and the rest dropped.

                ## Notes
                Examples include wall push-ups, a weighted lap pad, a brisk walk, crunchy food or a swing. Choose what your body actually seeks.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Three daily sensory input breaks kept on most days for three weeks, with the useful ones written into your routine."
                cadence: rolling
              tasks:
                - "List the kinds of movement and pressure your body seeks"
                - "Schedule three short input breaks across the day"
                - "Take your midday sensory input break @recurring(daily)"
                - "Drop the breaks that made no difference after three weeks"
            - name: Prompts for food, water and toilet breaks
              description: |-
                ## Purpose
                Many autistic people feel hunger, thirst, tiredness or a full bladder late or not at all, especially when absorbed, and then hit a wall that looks like overwhelm. External prompts take over the job internal signals are not doing and remove one quiet cause of bad afternoons.

                ## Milestones
                1. The signals you tend to miss identified: hunger, thirst, temperature, toilet or tiredness.
                2. Phone or watch prompts set at fixed times for the ones you miss.
                3. A water bottle and simple snack kept where you work.
                4. Two weeks of prompts kept and their effect on late-afternoon crashes noted.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Fixed daily prompts for missed body signals running for two weeks, with any change in afternoon crashes recorded."
                cadence: rolling
              tasks:
                - "Write down which body signals you tend to notice too late"
                - "Set phone or watch prompts for food and water at fixed times"
                - "Eat, drink and take a toilet break when the midday prompt sounds @recurring(daily)"
                - "Keep a water bottle and an easy snack within reach of where you work"
            - name: Social battery limits in the calendar
              description: |-
                ## Purpose
                Socialising can be both enjoyable and expensive, and the cost often lands a day or two later. Setting a weekly limit on social commitments, with recovery time after each, lets you say yes to the people who matter without paying for it all weekend.

                ## Milestones
                1. A weekly limit set for social events, calls and visitors.
                2. A recovery block attached to every social commitment in the calendar.
                3. A short, honest phrase ready for declining or rescheduling.
                4. Two months of weeks kept within the limit, or the limit adjusted.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A written weekly social limit with recovery blocks attached, kept or deliberately adjusted for two months."
                cadence: rolling
              tasks:
                - "Decide how many social commitments a normal week can hold"
                - "Add a recovery block after every social event already booked"
                - "Write a short phrase you can use to decline or reschedule"
                - "Check next week's social load against your limit @recurring(weekly:thu)"
            - name: Protected time for special interests
              description: |-
                ## Purpose
                Deep, focused interests are one of the most reliable ways autistic people restore energy, and they are usually the first thing squeezed out by a busy month. Treating interest time as a fixed appointment, rather than a reward for finishing everything else, keeps the main energy deposit in the week.

                ## Milestones
                1. At least one block of two hours a week reserved for your interests.
                2. The block marked as unavailable in shared calendars.
                3. Interest time kept for eight weeks.
                4. Its effect on your weekly energy budget noted.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Eight consecutive weeks with at least two hours of protected interest time recorded in your calendar."
                cadence: rolling
              tasks:
                - "Block two hours a week for your interests in your calendar"
                - "Mark the block as busy in any shared family or work calendar"
                - "Spend your protected interest time without other demands @recurring(weekly:sat)"
            - name: Sensory kit upkeep
              description: |-
                ## Purpose
                Earplugs lose their seal, headphone batteries die at the worst moment and a fidget gets left in a coat pocket. A brief monthly check keeps the kit ready, so the day you need it is not the day you find it empty.

                ## Milestones
                1. A checklist of every item in your carry kit and recovery space.
                2. Batteries charged and consumables such as earplugs and mints restocked.
                3. Worn or unused items replaced or removed.
                4. Six monthly checks completed.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Six monthly kit checks completed, with consumables restocked and headphones charged each time."
                cadence: rolling
              tasks:
                - "Write a checklist of every item in your kit and recovery space"
                - "Charge headphones and restock earplugs and other consumables @recurring(monthly:23)"
                - "Remove anything you have not used in three months"
            - name: Yearly review of sensory needs and supports
              description: |-
                ## Purpose
                Sensory needs shift with age, hormones, stress, new jobs and new homes, and supports that fitted last year can quietly stop working. A yearly review of your profile, kit, adjustments and energy patterns keeps everything matched to the person you are now.

                ## Milestones
                1. Your sensory profile reread and updated.
                2. The year's overwhelm reviews summarised in a paragraph.
                3. Each adjustment at home, work and in the kit marked keep, change or drop.
                4. Three priorities chosen for the coming year.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A yearly review completed with an updated profile, every adjustment marked keep, change or drop, and three priorities set."
                cadence: cyclic
              tasks:
                - "Book a two-hour review slot for the same month each year @recurring(yearly)"
                - "Update your sensory profile with anything that has changed"
                - "Mark each adjustment keep, change or drop"
                - "Write three priorities for the coming year"
            - name: Spotting the early signs of overwhelm
              description: |-
                ## Purpose
                By the time overwhelm is obvious, the options have narrowed to escaping or shutting down. Learning your own early signals, such as clenched jaw, rising irritability with noise, losing words or rereading the same line, gives you a window of ten or twenty minutes to leave, put plugs in or ask for quiet.

                ## Milestones
                1. Your overwhelm log reread for what you noticed before each episode.
                2. A personal warning ladder written with three or four rungs, from first sign to point of no return.
                3. One action matched to each rung.
                4. The ladder tested in real situations for a month and corrected.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A written warning ladder with an action for each rung, tested for a month and revised from real situations."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Reread your log for what you noticed in the hour before each episode"
                - "Write a three or four rung warning ladder in your own words"
                - "Match one action to each rung of the ladder"
                - "Correct the ladder after a month of real use"
            - name: Understanding monotropism and attention tunnels
              description: |-
                ## Purpose
                Monotropism, a theory developed by autistic researchers, describes attention that pulls strongly into a few things at once, which explains why interruptions hurt, why switching tasks costs so much and why interests restore energy. Understanding it helps you design days with fewer forced switches and explain your needs in terms other people can follow.

                ## Milestones
                1. One accessible introduction to monotropism read or watched.
                2. Three situations from your own life explained using it.
                3. Your most costly daily task switches listed.
                4. Two changes made to reduce forced switching, such as batching messages or a warning before interruptions.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A short written note applying monotropism to three of your own situations, plus two changes to reduce task switching."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Read or watch one introduction to monotropism by an autistic author"
                - "Write how it explains three things in your own life"
                - "List the task switches that cost you most each day"
                - "Change two of them, such as batching messages into set times"
            - name: Naming emotions through body cues
              description: |-
                ## Purpose
                Alexithymia, difficulty identifying and describing your own emotions, is common in autistic people and can mean feelings only become clear as a headache, a meltdown or an urge to leave. Linking body sensations to likely emotions, slowly and with notes, builds a personal dictionary that makes conversations with partners and clinicians easier.

                ## Milestones
                1. A body map listing where you feel tension, heat, heaviness or restlessness.
                2. Three weeks of short notes pairing body sensations with what was happening.
                3. A personal dictionary of at least five sensation and emotion pairs.
                4. The dictionary used once to explain a feeling to someone close to you.

                ## Notes
                Emotion wheels and colour or number scales work well for many people who find feeling words vague.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A personal dictionary of at least five body sensation and emotion pairs, built from three weeks of notes."
                cadence: phased
                effort_hours_estimate: "5"
              tasks:
                - "Draw a simple body map of where you notice tension or heat"
                - "Note body sensations and what was happening twice a day for three weeks"
                - "Write your first five sensation and emotion pairs"
                - "Use the dictionary to describe one feeling to someone you trust"
            - name: Stimming freely and safely
              description: |-
                ## Purpose
                Stimming, repetitive movement or sound such as rocking, hand flapping or humming, helps regulate the senses and emotions, yet many adults were taught to suppress it. Noticing your own stims, deciding where you can let them out and replacing any that cause injury lets this natural tool do its job.

                ## Milestones
                1. Your current stims listed, including the ones you hide.
                2. Places and people where stimming openly feels safe identified.
                3. Discreet alternatives chosen for settings where you still prefer to hide them.
                4. Any stim that causes injury discussed with a clinician or occupational therapist.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A written list of your stims, safe settings and discreet alternatives, with any harmful stims raised with a clinician."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "List your stims, including the ones you suppress in company"
                - "Name the places and people where you can stim openly"
                - "Choose discreet alternatives for the settings where you still prefer to hide them"
                - "Raise any stim that causes injury with a clinician"
            - name: Scripts for asking for sensory changes in public
              description: |-
                ## Purpose
                Asking a café to turn the music down, a colleague to stop using perfume or a shop for a quieter time can feel impossible in the moment, especially when speech is already harder. A few short, rehearsed scripts, also saved as text you can show on a phone, make the request take ten seconds instead of an evening of dread.

                ## Milestones
                1. Five common situations where you need to ask for a change listed.
                2. A one or two sentence script written for each.
                3. The scripts saved in your phone notes to show if speaking is hard.
                4. Each script used at least once and reworded if it did not land.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Five short sensory request scripts saved on your phone, each used at least once in a real situation."
                cadence: phased
                effort_hours_estimate: "3"
              tasks:
                - "List five places where you regularly need something changed"
                - "Write a one or two sentence script for each"
                - "Save the scripts in your phone notes to show when speaking is hard"
                - "Try one script this week and reword it if needed"
            - name: Telling autistic burnout apart from depression
              description: |-
                ## Purpose
                Autistic burnout, the long exhaustion, skill loss and increased sensory sensitivity that follow too long without enough recovery, can look like depression from the outside and the two can occur together. Understanding the differences helps you describe what is happening accurately to your doctor, so the support offered fits.

                ## Milestones
                1. One research summary on autistic burnout written by or with autistic people read.
                2. The main features of burnout and of depression listed side by side.
                3. Your own current experience noted against both lists.
                4. A short summary prepared to bring to your doctor if you are struggling.

                ## Notes
                Only a clinician can assess depression. If you have thoughts of harming yourself, contact your doctor or an emergency service today.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A side-by-side note of burnout and depression features with your own experience recorded and a summary ready for your doctor."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Read one research summary on autistic burnout"
                - "List the features of burnout and depression side by side"
                - "Note which features match your recent months"
                - "Write a one-page summary to bring to your doctor if needed"
            - name: Handling unexpected changes to plans
              description: |-
                ## Purpose
                A cancelled train, a meeting moved forward or a friend arriving early can cost more than the change itself, because the whole mental plan for the day has to be rebuilt. A practised routine for unplanned change, such as pausing, writing the new plan down and dropping one demand, shortens the recovery from hours to minutes.

                ## Milestones
                1. Your most common unwelcome changes listed.
                2. A three-step change routine written in your own words.
                3. The routine used on at least five real changes.
                4. A request made to one regular contact to give notice of changes where possible.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A written change routine used on five real changes, with one regular contact asked to warn you of changes in advance."
                cadence: phased
                effort_hours_estimate: "3"
              tasks:
                - "List the unplanned changes that throw you most often"
                - "Write a three-step routine for the first ten minutes after a change"
                - "Use the routine on the next five changes and note what helped"
                - "Ask one regular contact to give you notice when plans change"
            - name: Safe unmasking experiments
              description: |-
                ## Purpose
                Years of masking can leave people unsure which parts of their behaviour are really theirs. Small, chosen experiments in safe settings, such as wearing ear defenders openly, skipping eye contact with a friend or stimming at home in front of family, show what dropping the mask costs and gives back.

                ## Milestones
                1. Three small unmasking experiments chosen from your masking inventory.
                2. Each experiment tried in a setting you judged safe.
                3. Energy before and after, and other people's reactions, noted for each.
                4. A decision made on which changes to keep.

                ## Notes
                Go at your own pace. Some settings, such as certain workplaces or encounters with police, may still call for caution.
              priority: low
              frontmatter:
                mode: building
                output_kind: habit
                success_criteria: "Three unmasking experiments completed and recorded, with a decision on which changes to keep."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Choose three small unmasking experiments from your inventory"
                - "Try the first experiment with the person you feel safest with"
                - "Note your energy and their reaction after each experiment"
                - "Decide which changes to keep and where"
            - name: Autistic burnout prevention and recovery plan
              description: |-
                ## Purpose
                Autistic burnout can last months and take skills such as speech, cooking or tolerance of noise with it, and people who have had it once usually recognise the run-up the second time. A written plan with personal warning signs, the demands you will drop first and the people who need to know turns that recognition into action before the slide gets steep.

                ## Milestones
                1. Your personal early signs of burnout written down, from past episodes if you have had them.
                2. A list of demands you will reduce first, in order, when signs appear.
                3. The people to tell, such as a partner, manager or doctor, and what to ask each for.
                4. A recovery outline for a longer episode: rest, reduced demands, sensory retreat and a gradual return.

                ## Notes
                Recovery from burnout usually needs a real reduction in demands, not just more rest on top of the same load.
              priority: high
              deadlineOffsetDays: 60
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A written burnout plan with warning signs, an ordered list of demands to drop and named people to tell, shared with one of them."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Write the signs that came before any past burnout"
                - "List, in order, the demands you will drop first when the signs appear"
                - "Name the people to tell and what to ask each of them for"
                - "Share the plan with your partner or a trusted friend"
                - "Check yourself against your burnout warning signs @recurring(monthly:16)"
            - name: Lighting changes for a calmer home
              description: |-
                ## Purpose
                Flicker, glare and cold-white light are common triggers for autistic people, and lighting is one of the cheapest things to change. Swapping the worst bulbs, adding lamps in place of ceiling lights and controlling daylight can lower the sensory load in every room you use.

                ## Milestones
                1. The rooms where light bothers you most identified from your home audit.
                2. Flickering or harsh bulbs replaced with warm, flicker-free, dimmable ones.
                3. At least one room lit by lamps rather than the main ceiling light.
                4. Glare from windows or screens reduced with blinds, film or settings.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "The harshest bulbs in your home replaced and one room switched to lamp lighting, with glare reduced where it bothered you."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "List the rooms where the lighting bothers you most"
                - "Replace the worst bulbs with warm, flicker-free, dimmable ones"
                - "Set up one room so it can be lit by lamps alone"
                - "Reduce screen glare with night settings and a matt filter"
            - name: Clothing and texture wardrobe reset
              description: |-
                ## Purpose
                Scratchy labels, tight waistbands, seams and certain fabrics can be a low-level irritant all day that drains energy without being obviously noticed. Clearing out the worst offenders and finding a few items you can wear without thinking, even repeating the same outfit, frees attention for everything else.

                ## Milestones
                1. Every clothing item sorted into comfortable, tolerable and intolerable.
                2. The intolerable pile removed or altered, with labels cut out.
                3. Two or three comfortable items identified as a template for buying more.
                4. A short list of fabrics, cuts and brands that work kept for future shopping.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Wardrobe sorted, intolerable items removed and a written list of fabrics and cuts that work kept for future shopping."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Sort your clothes into comfortable, tolerable and intolerable"
                - "Cut out labels and remove or alter the intolerable items"
                - "Write down the fabrics and cuts of your most comfortable clothes"
                - "Buy a second of your most comfortable item"
            - name: Safe foods and sensory-friendly mealtimes
              description: |-
                ## Purpose
                Texture, smell, temperature and mixed foods can make eating hard, and a short list of reliable safe foods is often what keeps a person fed on difficult days. Writing your safe foods down, keeping them stocked and setting up calmer mealtimes protects nutrition without forcing foods that feel unbearable.

                ## Milestones
                1. A list of safe foods written, with brands where they matter.
                2. Safe foods always stocked, with a backup for low-energy days.
                3. Mealtime conditions adjusted, such as lower noise, separate plates or eating alone when needed.
                4. Any concern about weight, energy or a narrowing range raised with your doctor.

                ## Notes
                A very restricted diet can affect health. If your range of foods is shrinking or you are losing weight, ask your doctor about a dietitian who works with sensory eating differences.
              priority: medium
              frontmatter:
                mode: building
                output_kind: habit
                success_criteria: "A written safe foods list kept stocked for two months, with any concerns about range or weight raised with a doctor."
                cadence: phased
                effort_hours_estimate: "3"
              tasks:
                - "Write a list of your safe foods, including exact brands"
                - "Add your safe foods and one low-energy backup to the regular shop @recurring(monthly:4)"
                - "Change one thing about mealtimes that makes eating harder"
                - "Book a doctor's appointment if your food range is shrinking"
            - name: Communication preferences card
              description: |-
                ## Purpose
                Phone calls without warning, vague plans and questions that need instant answers are hard for many autistic people, and the people who care about you usually do not know. A short card setting out how you prefer to be contacted and what helps in conversation saves repeated explanations and small misunderstandings.

                ## Milestones
                1. Your preferred channels written: text, email, voice note or call by arrangement.
                2. Conversation needs listed, such as processing time, direct wording and no eye contact expected.
                3. The card shared with family, close friends and anyone you live with.
                4. One conversation held about it with the person you most often miscommunicate with.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A one-page communication card shared with family and close friends, discussed with at least one of them."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Write how you prefer to be contacted and when calls are welcome"
                - "List what helps you in conversation, such as time to answer"
                - "Send the card to family, close friends and housemates"
                - "Talk it through with the person you most often misunderstand"
                - "Update the card and resend it if anything has changed @recurring(yearly)"
            - name: Choosing a neurodiversity-affirming therapist
              description: |-
                ## Purpose
                Therapy designed for non-autistic people can push towards eye contact, social conformity or changing traits that are not problems, and many autistic adults find standard approaches tiring rather than helpful. Asking specific questions before you start finds a therapist who adapts their methods and understands masking, burnout and sensory needs.

                ## Milestones
                1. Three therapists or services shortlisted who state experience with autistic adults.
                2. A list of questions prepared on adapting therapy, such as written materials, breaks and lighting.
                3. Short introductory calls or emails held with each.
                4. One therapist chosen and the reasons written down.

                ## Notes
                Useful questions: how do you adapt your approach for autistic clients, do you see autism as something to fix, and can sessions be by text or with the camera off?
              priority: medium
              deadlineOffsetDays: 60
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "Three therapists contacted with the same set of questions and one chosen, with the reasons recorded."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Search directories for therapists experienced with autistic adults"
                - "Write five questions about how they adapt therapy"
                - "Email the same questions to three therapists"
                - "Choose one and write down why"
            - name: Sensory-friendly bedroom for better sleep
              description: |-
                ## Purpose
                Sleep problems are common in autistic people, and the bedroom itself is often part of it: a streetlight edge round the curtain, a ticking clock, sheets with the wrong texture or a room that is too warm. Fixing the sensory side of the bedroom is a concrete step that does not depend on willpower.

                ## Milestones
                1. The bedroom checked for light leaks, noises, textures, smells and temperature.
                2. Blackout and noise solutions in place, such as blinds, a fan or earplugs suited to sleep.
                3. Bedding chosen for texture and weight, possibly including a weighted blanket.
                4. Two weeks of sleep notes compared before and after.

                ## Notes
                Start from the **Sleep review** template. If sleep stays poor, ask your doctor; some sleep conditions are more common in autistic people and need assessment.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Light, noise and bedding changes made in the bedroom, with two weeks of sleep notes compared before and after."
                cadence: phased
                effort_hours_estimate: "5"
              tasks:
                - "Lie in the dark bedroom for ten minutes and list every light and sound"
                - "Fix the light leaks and the loudest noise"
                - "Try bedding with a different texture or weight for two weeks"
                - "Compare sleep notes from before and after using the sleep review template"
            - name: Deciding who to tell you are autistic
              description: |-
                ## Purpose
                Telling people you are autistic can bring understanding and adjustments, or misunderstanding and stereotypes, and the balance differs for family, friends, employers and health professionals. Working through who, when and how, one relationship at a time, means each disclosure is a choice rather than a slip under pressure.

                ## Milestones
                1. The people and organisations you might tell listed.
                2. Likely benefits and risks of telling each one noted.
                3. A short explanation written in your own words, with what you are asking for.
                4. Decisions recorded for each, including people you have decided not to tell.

                ## Notes
                Disclosure to an employer or college can have legal implications for adjustments where you live; check with an advice service or union if it matters.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A written list of people with a disclose or not decision for each and a short explanation ready to use."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "List the people and organisations you might tell"
                - "Note the likely benefit and risk of telling each one"
                - "Write a short explanation of what being autistic means for you"
                - "Record a decision for each person, including not telling"
            - name: Sensory adjustments at work or study
              description: |-
                ## Purpose
                Open-plan offices, fluorescent lights, hot-desking and surprise meetings drain energy all day, and many sensory adjustments cost an employer or college almost nothing. Asking for specific, practical changes, with the reason each helps, makes a yes far more likely than a general request for support.

                ## Milestones
                1. The sensory problems in your workplace or place of study listed from your profile.
                2. A short request written with three to five specific changes, such as a fixed desk away from noise, headphones allowed or meeting agendas in advance.
                3. The request discussed with your manager, tutor or disability service.
                4. Agreed changes written down and reviewed after three months.

                ## Notes
                You do not have to disclose a diagnosis to ask for sensory changes, but formal adjustments may need it. Your union, student support or an employment advice service can explain the rules where you live.
              priority: high
              deadlineOffsetDays: 60
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "A written request with specific sensory adjustments discussed with your manager or college, and the agreed changes recorded."
                cadence: phased
                effort_hours_estimate: "5"
              tasks:
                - "List the sensory problems you meet during a typical work or study day"
                - "Ask the agent to draft a short adjustment request from your list"
                - "Book a meeting with your manager, tutor or disability service"
                - "Write down every adjustment agreed and who will arrange it"
                - "Review whether agreed adjustments are actually in place @recurring(quarterly)"
            - name: Preparing for an adult autism assessment
              description: |-
                ## Purpose
                Adult assessments usually involve questionnaires, a long interview about your childhood and present life, and often a conversation with someone who knew you young. Gathering examples, old school reports and practical needs for the day beforehand helps the assessor see the full picture and makes a long appointment less exhausting.

                ## Milestones
                1. The assessor's pre-appointment forms completed.
                2. Written examples gathered across childhood, school, work, relationships and sensory life.
                3. An informant, such as a parent or sibling, asked and briefed if the service needs one.
                4. Sensory needs for the day requested, such as breaks, lighting or a quiet waiting area.
                5. Outcome and recommendations written down after the assessment.

                ## Notes
                Bring your notes in writing. Many people go blank in the room, and assessors are usually glad to read them.
              priority: medium
              deadlineOffsetDays: 120
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "Assessment attended with completed forms and written examples, and the outcome and recommendations recorded."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Complete the forms the assessment service sent"
                - "Write examples from childhood, school, work and relationships"
                - "Ask a parent or sibling to act as informant if the service needs one"
                - "Email the service your sensory needs for the day"
                - "Write down the outcome and recommendations the same week"
            - name: Medical and dental appointments with sensory adjustments
              description: |-
                ## Purpose
                Bright clinic lights, waiting rooms, being touched and having to explain symptoms out loud make health appointments harder, and many autistic adults put them off as a result. Asking ahead for the first appointment of the day, a quiet place to wait or a written summary of what will happen makes routine care easier to keep.

                ## Milestones
                1. A standard request written for practices: quiet waiting, first or last slot, explanation before touch, written follow-up.
                2. The request added to your record at your doctor's surgery and dentist.
                3. Symptoms written down before each appointment to read or hand over.
                4. One overdue check-up booked with the adjustments in place.
              priority: medium
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A written sensory adjustment request added to your doctor and dental records and used at one appointment."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Write a short standard request for appointment adjustments"
                - "Ask your doctor's surgery and dentist to add it to your record"
                - "Book one overdue check-up with the adjustments in place"
                - "Write your symptoms down before the appointment to hand over"
            - name: Sensory plan for a wedding, festival or big gathering
              description: |-
                ## Purpose
                Big occasions combine noise, crowds, unfamiliar places, long hours and social expectation, and they are often ones you want to be at. Planning the sensory side ahead, from where you will sit to when you will leave, makes the difference between enjoying part of it and paying for all of it for a week.

                ## Milestones
                1. The venue, timings and likely sensory load found out in advance.
                2. A quiet spot at or near the venue identified.
                3. Arrival, break and leaving times decided, with a host or companion told.
                4. Two clear recovery days kept free afterwards.
              priority: low
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A written plan for the occasion with a quiet spot, set leaving time and two recovery days, followed on the day."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Look up the venue layout, schedule and likely noise level"
                - "Find a quiet spot nearby where you can take breaks"
                - "Tell your host or companion when you plan to arrive and leave"
                - "Keep the two days after the event clear for recovery"
            - name: Travel day sensory plan
              description: |-
                ## Purpose
                Airports, stations and long journeys stack crowds, announcements, queues, changes and waiting into one long day. A plan that covers routes, timings, quiet spaces and assistance schemes, many of which exist for hidden disabilities, turns an exhausting day into a manageable one.

                ## Milestones
                1. The full route written step by step, with photos or maps of unfamiliar stations or terminals.
                2. Hidden disability assistance or priority schemes checked and booked where offered.
                3. Your carry kit packed with extras for a long day.
                4. A backup plan written for delays and cancellations.
                5. Arrival-day recovery time kept free.

                ## Notes
                Start from the **Trip** template. Many airports and rail operators offer quiet rooms, assisted boarding or a recognised lanyard for hidden disabilities.
              priority: low
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A written travel plan with step-by-step route, assistance booked where offered and a backup for delays, used on the trip."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Create a trip page and write the route step by step"
                - "Check and book any hidden disability assistance offered"
                - "Pack your carry kit with spare charge and snacks"
                - "Write what you will do if the main connection is delayed"
            - name: Festive season energy and sensory plan
              description: |-
                ## Purpose
                Festive seasons pile up visits, gifts, unfamiliar food, broken routines and noisy gatherings, often over consecutive days. Planning which events to attend, how long to stay and where routine stays fixed keeps the season from ending in a shutdown.

                ## Milestones
                1. All festive invitations and obligations listed in one place.
                2. Each one decided: go in full, go briefly or decline.
                3. At least two days in the period kept free of any plans.
                4. Your needs, such as a quiet room or food you can eat, shared with hosts ahead of time.
                5. A short note afterwards on what to repeat or change next year.
              priority: low
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A festive plan with every event decided, two empty days kept and a written note of what to change next year."
                cadence: cyclic
                effort_hours_estimate: "3"
              tasks:
                - "Start your festive plan six weeks before the season @recurring(yearly)"
                - "Decide for each event whether to go in full, briefly or not at all"
                - "Tell hosts what you need, such as a quiet room or your own food"
                - "Write what to repeat or change next year"
            - name: The first six months after a late diagnosis
              description: |-
                ## Purpose
                Diagnosis in adulthood often brings relief, then grief for the years spent struggling without an explanation, and sometimes anger or doubt. Giving the first six months some structure, with reading, autistic community and space to reinterpret your past, helps the diagnosis become useful rather than overwhelming.

                ## Milestones
                1. The assessment report read and the parts you want to discuss noted.
                2. Two books, podcasts or talks by autistic adults chosen and finished.
                3. One autistic-led space, online or local, visited.
                4. A written reflection on how the diagnosis changes your understanding of past events.
                5. Any follow-up support offered by the assessment service taken up or declined on purpose.

                ## Notes
                Mixed feelings are common and normal. If low mood persists, raise it with your doctor.
              priority: medium
              deadlineOffsetDays: 180
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Within six months: report reviewed, two works by autistic authors finished, one autistic-led space visited and a written reflection made."
                cadence: phased
                effort_hours_estimate: "15"
              tasks:
                - "Read your assessment report and mark the parts to discuss"
                - "Choose two books or podcasts by autistic adults"
                - "Visit one autistic-led group or online forum"
                - "Write a reflection on one past event you now understand differently"
            - name: Autistic parenting and family sensory load
              description: |-
                ## Purpose
                Children bring constant noise, touch, mess and unpredictability, and autistic parents can reach overload by mid-afternoon while loving their family completely. Building recovery into family routines, sharing the noisiest tasks and being open with children in age-appropriate words protects your capacity to parent.

                ## Milestones
                1. The family moments that overload you most listed, such as bath time, school pick-up or mealtimes.
                2. Noisiest tasks shared or swapped with a co-parent or helper where possible.
                3. A short daily solo recharge slot built into the family routine.
                4. Children told, in age-appropriate words, what it means when you need quiet.

                ## Notes
                Ear plugs that reduce volume without blocking it, such as musician's plugs, let many parents stay alert to children while cutting the load.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A written list of overload points, at least one task shared and a weekly solo recharge slot kept for two months."
                cadence: rolling
              tasks:
                - "List the three family moments that overload you most"
                - "Agree with your co-parent which noisy tasks to swap or share"
                - "Plan the week's solo recharge slots with your co-parent @recurring(weekly:wed)"
                - "Explain to your children, simply, what it means when you need quiet"
            - name: Autistic student sensory and energy plan
              description: |-
                ## Purpose
                College or university brings lecture halls, shared housing, group work and an unstructured timetable all at once, and autistic students often burn out in the first term. A plan set up before term, with disability support registered and a weekly energy rhythm, protects both study and wellbeing.

                ## Milestones
                1. Registration with the disability or student support service completed.
                2. Study adjustments agreed, such as recorded lectures, a quiet exam room or deadline flexibility.
                3. A quiet study place on or near campus found.
                4. A weekly plan balancing lectures, study, social time and recovery in use.

                ## Notes
                Register early. Exam adjustments in particular often have deadlines weeks before the exams themselves.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Registered with student support, study adjustments agreed in writing and a weekly energy plan kept through one term."
                cadence: phased
              tasks:
                - "Register with your college or university disability service"
                - "Ask for the study and exam adjustments you need in writing"
                - "Find one quiet place to study on or near campus"
                - "Plan the week's lectures, study and recovery time @recurring(weekly:mon)"
            - name: Supporting an autistic child's sensory needs at home
              description: |-
                ## Purpose
                Behaviour that looks like defiance in autistic children is often sensory overload, and home is where adjustments are easiest to make. Watching what your child avoids and seeks, then shaping routines, clothing and spaces around it, reduces meltdowns for the whole family and shows your child their needs are respected.

                ## Milestones
                1. A two-week note of your child's sensory reactions, from their behaviour and their own words.
                2. A simple profile of what they avoid and seek, made with them if they are old enough.
                3. Three home changes made, such as a den, softer clothes or warnings before transitions.
                4. The profile shared with school or nursery and an occupational therapist if involved.

                ## Notes
                Your child's own account is the best evidence. Ask them, with words, pictures or choices, what is hard and what helps.
              priority: medium
              frontmatter:
                mode: service
                output_kind: deliverable
                success_criteria: "A sensory profile for your child, made with their input, three home changes in place and the profile shared with school."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Note your child's sensory reactions for two weeks"
                - "Ask your child, in words or pictures, what is hard and what helps"
                - "Make three home changes based on what you learned"
                - "Share the profile with school or nursery"
                - "Check with school that agreed sensory supports are happening @recurring(monthly:12)"
            - name: Supporting an autistic partner or adult relative
              description: |-
                ## Purpose
                Partners, adult children and housemates of autistic adults often want to help but end up guessing, which can mean talking during shutdowns or planning surprises that land badly. Learning the person's own sensory and communication needs from them, and changing a few shared habits, reduces friction on both sides.

                ## Milestones
                1. A conversation held asking what helps and what hurts, ideally on a calm day.
                2. Their meltdown and shutdown plan or communication card read, if they have one.
                3. Two household habits changed, such as noise at certain times or how plans are made.
                4. Your own needs noted too, so the arrangement works for both of you.

                ## Notes
                Ask rather than assume. Autistic adults differ widely, and what helped someone else may not help them.
              priority: low
              frontmatter:
                mode: service
                output_kind: habit
                success_criteria: "A conversation held about needs, their plan or card read and two shared household habits changed."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Ask on a calm day what helps and what makes things harder"
                - "Read their meltdown plan or communication card if they have one"
                - "Change two shared household habits together"
                - "Write down your own needs so both sides are heard"
            - name: Sensory changes in midlife, menopause and older age
              description: |-
                ## Purpose
                Many autistic women and people who menstruate report that sensory sensitivity, overwhelm and burnout get worse around perimenopause and menopause, and hearing, sight and routines all shift with age. Tracking changes and raising them with a clinician who knows you are autistic keeps supports matched to a changing body.

                ## Milestones
                1. Changes in sensory sensitivity, sleep and overwhelm over the past year noted.
                2. Any link with hormonal changes or new health conditions recorded.
                3. A doctor's appointment held with the notes, mentioning that you are autistic.
                4. Your sensory kit and home adjustments updated for the changes.

                ## Notes
                Hearing and sight changes can alter how sound and light affect you; regular hearing and eye tests help separate these from sensory processing changes.
              priority: low
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A written note of sensory changes over the last year, discussed with a doctor, and kit and home adjustments updated."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Write down how your sensitivity, sleep and overwhelm have changed this year"
                - "Note any link with your cycle, menopause or new health conditions"
                - "Book a doctor's appointment and bring the notes"
                - "Book overdue hearing and eye tests"
            - name: Health communication passport
              description: |-
                ## Purpose
                A hospital admission or emergency department visit is the worst moment to explain that you need things written down, cannot bear certain touch or may lose speech under stress. A one or two page passport, kept on your phone and in your bag, speaks for you when you cannot.

                ## Milestones
                1. A passport written covering communication, sensory needs, what distress looks like in you and what helps.
                2. Medical essentials added: conditions, medicines, allergies and next of kin.
                3. Copies on your phone, in your bag and with a trusted person.
                4. Your doctor asked to add it or a summary to your record.

                ## Notes
                Some health services publish their own hospital passport format for autistic people; use it if yours has one.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A health passport with communication, sensory and medical sections, stored in three places and noted on your health record."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Check whether your health service has its own hospital passport form"
                - "Write your communication needs, sensory needs and signs of distress"
                - "Add conditions, medicines, allergies and next of kin"
                - "Save a copy on your phone, in your bag and with a trusted person"
                - "Review the passport for changes in medicines or contacts @recurring(yearly)"
            - name: Peer mentoring in autistic-led community
              description: |-
                ## Purpose
                Experienced autistic adults are often the best source of practical knowledge about masking, burnout and sensory life, and passing it on gives newly diagnosed people what many of them never had. Joining an autistic-led group as a regular, then as a mentor or organiser, builds connection on your own terms.

                ## Milestones
                1. An autistic-led group, online or local, joined and attended regularly.
                2. A format chosen that suits your energy, such as text chat, a small group or one-to-one mentoring.
                3. A role taken on, such as welcoming newcomers or answering questions.
                4. Clear limits set on time and energy so the role stays sustainable.
              priority: low
              frontmatter:
                mode: service
                output_kind: habit
                success_criteria: "Regular attendance at an autistic-led group for six months and a defined helping role with written limits on time."
                cadence: rolling
              tasks:
                - "Find two autistic-led groups, online or local, and pick one"
                - "Attend or join a session of your autistic-led group @recurring(monthly:20)"
                - "Offer to welcome newcomers or answer questions once a month"
                - "Write the time limit you will keep for the role"
            - name: Campaigning for a quiet hour at a local venue
              description: |-
                ## Purpose
                Quiet hours with dimmed lights, no music and fewer announcements are now offered by some supermarkets, cinemas, museums, gyms and places of worship, and they usually start because one person asked. Proposing a quiet session where you already go makes a regular place accessible for you and other autistic people nearby.

                ## Milestones
                1. One venue you use chosen and its manager identified.
                2. A short proposal written with the changes, a suggested time and examples of venues already doing it.
                3. The proposal discussed with the venue.
                4. A trial session held or a clear answer received, with the outcome shared in an autistic group.
              priority: low
              frontmatter:
                mode: service
                output_kind: deliverable
                success_criteria: "A written quiet hour proposal delivered to a venue, with a trial held or a recorded answer received."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Choose one venue you use regularly and find who manages it"
                - "Find three examples of similar venues running quiet hours"
                - "Write a one-page proposal with times and specific changes"
                - "Arrange a conversation with the manager to discuss it"
---

# Autistic Wellbeing & Sensory Needs

This area is for autistic adults, people who suspect they are autistic, and the partners and parents who share a home with them. It starts with the foundations (a sensory profile, an overwhelm log, an energy baseline, a kit and a quiet place to recover), then the weekly and daily routines that keep energy in credit, the skills of spotting overwhelm early and asking for what you need, the bigger changes to home, food, clothing, sleep and disclosure, the events that need a sensory plan, the situations that change the picture, and finally the work of someone who already knows their own needs well.

What repeats is a Sunday energy budget, a short daily decompression window, a monthly look at the overwhelm log, protected time for your interests and a yearly review of your whole sensory set-up. The Metrics log, Purchase decision, Habit tracker, Sleep review and Trip templates pair with the projects that name them. Installing adds all 50 projects as active, so archive the ones that are not for you yet.
