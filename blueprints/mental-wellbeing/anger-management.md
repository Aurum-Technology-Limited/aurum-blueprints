---
id: mental-wellbeing.anger-management
name: Anger Management
description: "Learn your triggers and early warning signs, cool down before the words come out, repair properly afterwards, and stop temper from costing you relationships, work or safety."
category: personal
version: 1.0.0
tags: [mental-wellbeing, anger-management, everyone, anger, triggers, time-out, repair, relationships]
author: Aurum Technology
starter_structure:
  templates:
    - metrics-log
    - habit-tracker
    - meeting-notes
    - course
  pillars:
    - name: Mental & Emotional Wellbeing
      emoji: "🧘"
      description: "The inner weather: managing stress and anxiety, recovering from burnout, therapy and support, rest and attention, mood and emotional skills, and the routines that keep a mind steady when life is not."
      pillarFrontmatter:
        review_cadence: monthly
      areas:
        - name: Anger Management
          description: "Understanding anger triggers, cooling-off strategies and repair after outbursts, for people whose temper is hurting relationships or work."
          projects:
            - name: Two-week anger incident log
              description: |-
                ## Purpose
                Most people can describe their worst blow-up but not the forty smaller flare-ups that led to it. Logging every episode for fourteen days, with the trigger, what your body did, what you told yourself, what you did and what it cost, turns a vague sense of having a short fuse into data you can work with.

                ## Milestones
                1. A log set up with columns for date, time, situation, intensity out of ten, thoughts, action and consequence.
                2. At least fourteen consecutive days logged, including days with no episodes.
                3. The three most common situations and the three most common thoughts identified.
                4. The log shared with a counsellor or a trusted person, or summarised in writing for yourself.

                ## Notes
                Start from the **Metrics log** template. Write entries once you have cooled down, not in the heat of the moment, and log near misses as well as outbursts.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Fourteen consecutive days of anger log entries exist, with the three most common situations and thoughts written beneath them."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Set up an incident log with columns for situation, intensity, thoughts, action and cost"
                - "Log every flare-up and near miss for fourteen days once you have cooled down"
                - "Ask the agent to summarise the fortnight into the top three situations and thoughts"
                - "Write the three patterns at the top of the log"
            - name: Anger self-rating with a short validated scale
              description: |-
                ## Purpose
                Feeling calmer is easy to claim and hard to prove, so a starting score matters. A brief validated questionnaire, such as the five-item Dimensions of Anger Reactions scale or the anger items your clinician prefers, takes five minutes and gives a number you can retake every quarter.

                ## Milestones
                1. One published anger questionnaire chosen and completed honestly in a calm moment.
                2. The score recorded with the date and the name of the scale.
                3. The items you scored highest on noted as your first focus.
                4. A date set to retake the same scale in three months.

                ## Notes
                A questionnaire is a starting point, not a diagnosis. If your score worries you, take it to your doctor or a therapist.
              priority: high
              deadlineOffsetDays: 14
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A dated baseline score from one named anger questionnaire is recorded, with a retake date set three months later."
                cadence: one-shot
                effort_hours_estimate: "1"
              tasks:
                - "Find a freely available short anger questionnaire such as the DAR-5"
                - "Complete it on a calm day and record the score and date"
                - "Circle the two items you scored highest on"
                - "Put the three-month retake date in your calendar"
            - name: Personal anger trigger map
              description: |-
                ## Purpose
                Triggers cluster: certain people, certain rooms, certain times of day, and certain states such as hunger, tiredness, pain or a few drinks. Mapping them in one place shows which triggers you can avoid, which you can prepare for and which you simply have to learn to ride out.

                ## Milestones
                1. Triggers sorted into four groups: people, places and situations, times, and body states.
                2. Each trigger marked as avoidable, predictable or unavoidable.
                3. The five highest-cost triggers ranked from your incident log.
                4. One prepared response written beside each of the top five.
              priority: high
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A one-page trigger map lists at least fifteen triggers in four groups, with the top five ranked and a prepared response beside each."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "List every trigger you can recall under people, places, times and body states"
                - "Mark each one as avoidable, predictable or unavoidable"
                - "Rank the five that have cost you most using your incident log"
                - "Add any new trigger found in the weekly review to the map @recurring(monthly:22)"
            - name: Anger thermometer and early warning signs
              description: |-
                ## Purpose
                By the time anger reaches eight out of ten, the thinking part of the brain is largely offline and good intentions stop working. Knowing your own signs at three, five and seven (jaw tight, voice louder, heat in the face, pacing, sarcasm) gives you the window where leaving the room is still possible.

                ## Milestones
                1. A zero to ten scale drawn with your own body, thought and behaviour signs at each level.
                2. A point of no return named, the level above which you always step away.
                3. Someone close asked what they notice in you before you explode, and their answer added.
                4. The thermometer kept where you will see it, such as your phone lock screen or wallet.
              priority: high
              deadlineOffsetDays: 14
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A personal anger thermometer with signs at no fewer than four levels and a named step-away point is written and kept on your phone or in your wallet."
                cadence: one-shot
                effort_hours_estimate: "1"
              tasks:
                - "Draw a scale from zero to ten on one page"
                - "Write the body signs, thoughts and actions you notice at three, five and seven"
                - "Ask someone close what they see in you before you lose your temper"
                - "Mark the level at which you will always step away"
            - name: Pocket cool-down card for the first sixty seconds
              description: |-
                ## Purpose
                In the first minute of rising anger nobody remembers a technique they read about once. A card with three short steps you have chosen in advance, for example unclench your hands, breathe out slowly four times, say the agreed exit line and go, gives you something to do with the surge other than speak.

                ## Milestones
                1. Three steps chosen that you can do anywhere without anyone noticing.
                2. One exit line written that you will say before leaving, such as I need ten minutes and I will come back.
                3. The card printed or saved and carried every day.
                4. The steps tried in at least three real moments and adjusted.

                ## Notes
                Keep the steps physical and short. Rehearsing grievances in your head while you walk tends to keep anger burning, so give the walk something else to focus on.
              priority: high
              deadlineOffsetDays: 7
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A three-step cool-down card with an exit line is carried daily and has been used in at least three real episodes."
                cadence: one-shot
                effort_hours_estimate: "1"
              tasks:
                - "Choose three discreet steps that slow you down in under a minute"
                - "Write your exit line in words you would actually say"
                - "Save the card as a phone note and a printed copy in your wallet"
                - "Record after each use which step helped and which did not"
            - name: Time-out agreement with the people at home
              description: |-
                ## Purpose
                A time-out only works when everyone understands it in advance, otherwise walking away looks like storming off and the other person follows you. Agreeing the signal, how long you will be gone, what you will do while away and how you will come back turns leaving into a promise rather than an escape.

                ## Milestones
                1. A written agreement covering the signal, the minimum and maximum time away and the return.
                2. The agreement discussed with each adult you live with on a calm day.
                3. A rule agreed that nobody follows the person taking a time-out.
                4. A first real time-out taken and reviewed together afterwards.

                ## Notes
                Most programmes suggest twenty minutes to an hour, never a day of silence. Coming back to finish the conversation is the part people skip, and it is the part that rebuilds trust.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A written time-out agreement has been discussed with every adult in the household and used at least once, with a review afterwards."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Draft the time-out signal, time away and return rule on one page"
                - "Choose a calm moment to talk the agreement through with your household"
                - "Agree what you will do while away and what you will avoid"
                - "Ask your household whether time-outs are still working for them @recurring(monthly:3)"
            - name: Safety commitments when anger turns physical
              description: |-
                ## Purpose
                If your anger has ever involved breaking things, blocking a doorway, driving dangerously or frightening someone, safety comes before every other project here. Writing down the lines you will not cross and the help you will contact makes the commitment concrete and tells the people around you what to expect.

                ## Milestones
                1. A written list of behaviours you commit to stopping, in plain words.
                2. Concrete steps in place, such as handing car keys to someone else when you have been drinking.
                3. The number for your local emergency service and a specialist support line saved in your phone.
                4. A doctor, counsellor or specialist programme contacted if anyone at home is afraid of you.

                ## Notes
                If someone at home is frightened of you, a specialist behaviour change programme is usually the right route, and joint couples counselling is generally not advised until safety is established. If you think you may seriously hurt someone, call your emergency number now.
              priority: high
              deadlineOffsetDays: 7
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A signed list of safety commitments exists, emergency and specialist numbers are saved, and professional help has been contacted where anyone at home feels unsafe."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Write the specific behaviours you commit to stopping, starting today"
                - "Save your emergency number and a specialist support line in your phone"
                - "Contact a doctor or specialist programme if anyone at home is afraid of you"
                - "Reread and re-sign your safety commitments with a fresh date @recurring(yearly)"
            - name: Counting what anger has cost you
              description: |-
                ## Purpose
                Anger often feels justified in the moment because the costs arrive later and spread out: a colleague who stops copying you in, a child who goes quiet when you walk in, a speeding fine, a friendship that faded. An honest ledger of those costs is uncomfortable, and it is the motivation that carries you through the weeks when change feels slow.

                ## Milestones
                1. Costs listed under relationships, work, money, health and legal or official consequences.
                2. The single cost you most want to stop paying named.
                3. Any benefits anger seems to bring, such as being taken seriously, written down honestly.
                4. A short reason statement written for the front of your log.
              priority: medium
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A written cost and benefit ledger covers five life areas and ends with a one-sentence reason for change kept at the front of your log."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "List what anger has cost you in relationships, work, money, health and law"
                - "Write down what anger seems to get you, honestly"
                - "Name the one cost you most want to stop paying"
                - "Write a one-sentence reason for change at the front of your log"
            - name: Doctor appointment about irritability and anger
              description: |-
                ## Purpose
                Persistent irritability can travel with low mood, anxiety, chronic pain, poor sleep, hormonal changes, alcohol use or medication side effects, and it is often the way depression shows up in men. A doctor's appointment with your incident log in hand checks for anything treatable and opens the door to referral or funded courses.

                ## Milestones
                1. An appointment booked and your log summary, scale score and three questions prepared.
                2. Sleep, alcohol, pain, mood and current medicines discussed.
                3. Any tests, referrals or local programmes the doctor suggests written down.
                4. A follow-up date agreed or a reason recorded for not needing one.

                ## Notes
                Bring the numbers rather than a general description. Saying I lose my temper about four times a week and twice it has been at the children gets a more useful response than I get stressed.
              priority: high
              deadlineOffsetDays: 45
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A doctor's appointment about anger has taken place, with the outcome, any referral and the follow-up date written down."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Book an appointment with your doctor and say it is about anger and irritability"
                - "Prepare a half-page summary of your log, score, sleep and alcohol use"
                - "Ask whether any condition or medicine could be adding to the irritability"
                - "Write down the referrals or programmes suggested and the follow-up date"
            - name: Choosing an anger management course or therapist
              description: |-
                ## Purpose
                Support ranges from free health service courses and community group programmes to one-to-one cognitive behavioural therapy and specialist behaviour change programmes. Comparing two or three real options on cost, format, waiting time and approach means you start with something that fits your situation rather than whatever came up first in a search.

                ## Milestones
                1. At least three options found, including one low-cost or funded route.
                2. Each option checked for the practitioner's professional registration and for an evidence-based approach.
                3. Cost, format, length, waiting time and location compared side by side.
                4. One option chosen and the first session or intake call booked.

                ## Notes
                Group courses are not second best: hearing others describe your exact patterns is one of the things people find most useful. Check that the practitioner belongs to a recognised professional register.
              priority: medium
              deadlineOffsetDays: 60
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "Three support options are compared on five criteria and the first session of the chosen one is booked."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Search for anger management courses, groups and therapists near you or online"
                - "Check each practitioner's professional registration"
                - "Compare cost, format, length, waiting time and approach in one table"
                - "Book the intake call or first session for the option you choose"
            - name: Evening anger rating
              description: |-
                ## Purpose
                Two lines each evening, the highest anger level of the day and what set it off, take under a minute and keeps attention on the pattern long after the two-week log ends. Over a month the ratings show whether the peaks are getting lower, shorter or rarer.

                ## Milestones
                1. A daily slot chosen, such as brushing your teeth or plugging in your phone.
                2. Thirty days of ratings recorded, including the calm days.
                3. A monthly average and the number of days above seven worked out.
                4. The ratings used in each Sunday review.

                ## Notes
                Missed days are data too. If you skip the rating on the worst days, note that as well.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Daily peak anger ratings are recorded on at least 25 days in each month, with a monthly average and count of high days."
                cadence: rolling
              tasks:
                - "Pick the evening moment you will rate your day"
                - "Record the day's peak anger level and its trigger in one line @recurring(daily)"
                - "Count the days above seven at the end of each month"
            - name: Sunday anger log review
              description: |-
                ## Purpose
                Ratings collected and never read change nothing. Twenty minutes each Sunday spent looking at the week's peaks, near misses and good recoveries shows which strategy worked, which trigger is still catching you and what to prepare for in the week ahead.

                ## Milestones
                1. A fixed Sunday slot of twenty minutes protected in your calendar.
                2. Each review answering three questions: what set me off, what worked, what is coming up.
                3. One specific preparation chosen for the coming week.
                4. Four reviews completed in a row.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Weekly reviews are written on at least three Sundays in every four, each naming one preparation for the week ahead."
                cadence: rolling
              tasks:
                - "Block twenty minutes on Sunday for the review"
                - "Review the week's ratings, near misses and recoveries @recurring(weekly:sun)"
                - "Write one preparation for the hardest moment of the coming week"
                - "Note one moment you handled better than you would have before"
            - name: Rehearsing the time-out routine while calm
              description: |-
                ## Purpose
                Skills used only during anger are skills used at their worst. Walking through the exit line, the route out of the house or office and the return conversation once a week while calm makes the routine automatic enough to survive a real surge.

                ## Milestones
                1. The full routine written as five short steps from noticing to returning.
                2. A weekly rehearsal slot chosen.
                3. The routine rehearsed out loud at least eight times.
                4. Each real time-out compared with the rehearsed version and the routine adjusted.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "The time-out routine has been rehearsed aloud at least eight times and has been adjusted after at least one real use."
                cadence: rolling
              tasks:
                - "Write the five steps from first warning sign to returning to the conversation"
                - "Rehearse the full routine aloud, including the exit line @recurring(weekly:wed)"
                - "Walk the actual route you would take out of the house once"
                - "Adjust one step after each real time-out"
            - name: Calm walk-in after work
              description: |-
                ## Purpose
                Many outbursts at home happen in the first fifteen minutes after walking through the door, when the day's frustration meets a noisy kitchen. A short buffer before you go in, such as ten minutes in the car, a walk round the block or a set playlist on the commute, lets work anger drain before it lands on the family.

                ## Milestones
                1. The arrival window identified in your log as a risk time, or ruled out.
                2. A buffer routine of five to fifteen minutes chosen.
                3. The household told that you will come in after the buffer.
                4. Arrival-time flare-ups compared before and after one month.

                ## Notes
                Start from the **Habit tracker** template if you want to see the streak.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A post-work buffer is used on at least four working days a week for a month, and arrival-time flare-ups are compared with the month before."
                cadence: rolling
              tasks:
                - "Check your log for flare-ups in the hour after getting home"
                - "Choose a five to fifteen minute buffer you can do before going in"
                - "Take the buffer before walking through the door on working days @recurring(daily)"
                - "Tell the household why you might sit in the car for a few minutes"
            - name: Exercise as a pressure valve
              description: |-
                ## Purpose
                Regular aerobic exercise lowers baseline tension and makes the body slower to reach boiling point, while hitting a punch bag while furious tends to rehearse aggression rather than release it. Two fixed sessions a week of brisk walking, running, cycling or swimming give the stress a steadier outlet.

                ## Milestones
                1. Two sessions a week of at least thirty minutes chosen and scheduled.
                2. Sessions kept separate from angry moments, as routine rather than reaction.
                3. Eight weeks of sessions completed.
                4. Weekly average anger ratings compared before and after the eight weeks.

                ## Notes
                Start from the **Habit tracker** template. Check with your doctor first if you have a heart condition or have been inactive for a long time.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Two exercise sessions a week are completed for eight weeks, with average anger ratings compared before and after."
                cadence: rolling
              tasks:
                - "Choose an aerobic activity you will actually keep up"
                - "Do thirty minutes of the chosen activity @recurring(weekly:mon,thu)"
                - "Compare your weekly anger ratings at the end of eight weeks"
            - name: Monthly repair ledger
              description: |-
                ## Purpose
                Apologies made in the moment are often rushed and then forgotten, while the other person keeps counting. A monthly look at who you snapped at, whether you repaired it properly and what is still outstanding keeps small damage from setting into resentment.

                ## Milestones
                1. A ledger listing each person affected, the date and whether repair happened.
                2. Every open item given a planned repair or a decision to leave it.
                3. Three months of ledger entries kept.
                4. Repeated names spotted and linked back to the trigger map.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A repair ledger is updated every month for three months, with each open item either repaired or deliberately closed."
                cadence: rolling
              tasks:
                - "Start a ledger with columns for person, date, what happened and repair made"
                - "List the month's flare-ups that affected someone and check each repair @recurring(monthly:14)"
                - "Plan one outstanding repair for the coming week"
            - name: Monthly chronic irritants review
              description: |-
                ## Purpose
                Some anger is fed by grinding background problems: a broken appliance, a neighbour's noise, a commute that is always late, an admin task hanging over you. Clearing or reducing one irritant a month lowers the baseline that every other trigger sits on top of.

                ## Milestones
                1. A list of at least ten background irritants at home, work and on the move.
                2. Each irritant marked as fixable, reducible or one to accept.
                3. One irritant dealt with each month.
                4. Six irritants fixed or reduced within six months.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "One background irritant is fixed or reduced each month, with at least six dealt with in six months."
                cadence: rolling
              tasks:
                - "List ten small things that annoy you every week"
                - "Mark each one as fixable, reducible or to accept"
                - "Pick and deal with one irritant from the list @recurring(monthly:9)"
            - name: Quarterly anger progress review
              description: |-
                ## Purpose
                Change in anger is slow and uneven, so week-to-week impressions mislead in both directions. Every three months, retaking your baseline scale and comparing three months of ratings, logs and repair entries shows real progress and the one area to focus on next.

                ## Milestones
                1. The baseline questionnaire retaken and compared with previous scores.
                2. Number of high-anger days and outbursts compared quarter on quarter.
                3. One person close to you asked whether they have noticed a difference.
                4. One focus chosen for the next quarter.

                ## Notes
                Start from the **Metrics log** template to keep the quarterly scores in one place.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Each quarter has a retaken scale score, a comparison of high-anger days and a written focus for the next three months."
                cadence: cyclic
              tasks:
                - "Retake the baseline anger scale and compare scores @recurring(quarterly)"
                - "Count this quarter's high-anger days and outbursts"
                - "Ask one person close to you what they have noticed"
                - "Write one focus for the next three months"
            - name: Understanding the five stages of an anger episode
              description: |-
                ## Purpose
                Anger follows a recognisable arc: trigger, escalation, explosion, recovery and a low or guilty aftermath, and each stage needs a different response. Learning the arc, and mapping two of your own episodes onto it, shows exactly where intervening is still possible and why you feel flat or ashamed the next day.

                ## Milestones
                1. The stages of the anger cycle read about in a reputable source.
                2. Two of your own recent episodes mapped stage by stage.
                3. The stage where you most often could have stepped out identified.
                4. One strategy matched to each stage.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Two personal episodes are mapped onto the stages of the anger cycle, with a strategy written for each stage."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Read a reputable explanation of the stages of an anger episode"
                - "Map your two most recent episodes onto the stages"
                - "Mark the point where you could still have stepped out"
                - "Write one strategy for each stage"
            - name: Spotting hostile assumptions and should statements
              description: |-
                ## Purpose
                Angry people are often not reacting to what happened but to what they assume it meant: he did it on purpose, she is disrespecting me, people should know better. Learning to catch hostile assumptions, mind-reading and rigid shoulds, and to generate one other explanation, takes much of the heat out before it builds.

                ## Milestones
                1. The common anger thinking traps listed in your own words with an example of each.
                2. Ten logged episodes checked for which trap was at work.
                3. An alternative explanation written for at least ten irritating events.
                4. Your most frequent trap named and a counter-question written for it.

                ## Notes
                The aim is not to decide the other person was innocent. It is to stop treating your first guess about their motive as fact.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Ten irritating events each have a written alternative explanation, and your most frequent anger thinking trap is named."
                cadence: phased
                effort_hours_estimate: "5"
              tasks:
                - "Write the main anger thinking traps with an example from your own life"
                - "Check ten logged episodes for which trap was at work"
                - "Write one other explanation for an irritating event from this week @recurring(weekly:fri)"
                - "Write a counter-question for your most common trap"
            - name: The hurt, fear or shame underneath the anger
              description: |-
                ## Purpose
                Anger is often the second feeling, arriving fast to cover something that feels more exposed: being humiliated, ignored, afraid of losing someone, or ashamed. Learning to ask what came just before the anger gives you something truer to say, and people respond very differently to I felt dismissed than to shouting.

                ## Milestones
                1. Ten logged episodes revisited with the question of what was felt just before the anger.
                2. The two most common underlying feelings named.
                3. A phrase written for expressing each of them directly.
                4. The phrase used at least twice in a real disagreement.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "The two most common feelings beneath your anger are named from ten logged episodes and a direct phrase for each has been used twice."
                cadence: phased
                effort_hours_estimate: "3"
              tasks:
                - "Pick ten episodes from your log to revisit"
                - "Write beside each what you felt in the second before the anger"
                - "Draft a sentence that says the underlying feeling out loud"
                - "Use the sentence in a real disagreement and note the response"
            - name: Assertive requests instead of aggressive demands
              description: |-
                ## Purpose
                Many people with a temper swing between swallowing complaints and then exploding, because nobody ever showed them the middle. A simple structure, describe what happened, say how it affected you, ask for something specific, say what happens next, lets you raise a problem early while it is still small.

                ## Milestones
                1. The difference between passive, aggressive, passive-aggressive and assertive written with your own examples.
                2. A script structure learned and three scripts drafted for real situations.
                3. Two scripts used in conversations and the outcomes noted.
                4. One complaint raised within a day rather than saved up.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Three assertive scripts are drafted for real situations and at least two have been used, with outcomes recorded."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Write an example of passive, aggressive and assertive replies to one recent situation"
                - "Draft three assertive scripts for complaints you are currently holding"
                - "Use one script this week and note what happened"
                - "Raise the next small complaint within a day"
            - name: Taking criticism without counterattacking
              description: |-
                ## Purpose
                For many people the fastest route to anger is feeling criticised, and the reflex is to hit back or list the other person's faults. Practising a short sequence of pause, ask a clarifying question, find the part that is true and say when you will respond lets you hear feedback without the conversation becoming a fight.

                ## Milestones
                1. Your usual reactions to criticism listed honestly.
                2. A four-step response sequence written on your cool-down card.
                3. The sequence practised in a role play with someone you trust.
                4. Three real pieces of criticism received using the sequence and reviewed.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A written response sequence for criticism has been used on three real occasions and each one reviewed in your log."
                cadence: phased
                effort_hours_estimate: "3"
              tasks:
                - "List the ways you usually react when criticised"
                - "Write a four-step response sequence on your cool-down card"
                - "Role-play receiving criticism with someone you trust"
                - "Review three real occasions when you used the sequence"
            - name: Fair fighting rules for disagreements
              description: |-
                ## Purpose
                Disagreement is normal; what does the damage is how it is done: name-calling, bringing up the past, threats to leave, talking over each other, arguing late at night after drinks. Learning and writing down a short set of fair fighting rules gives you a standard to hold yourself to when the temperature rises.

                ## Milestones
                1. A list of the unfair tactics you tend to use, written honestly.
                2. Six to eight fair fighting rules written in your own words.
                3. The rules kept somewhere you will see them before difficult talks.
                4. Two arguments reviewed against the rules afterwards.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Six to eight written fair fighting rules exist and two real disagreements have been reviewed against them."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Write the unfair tactics you fall into during arguments"
                - "Draft six to eight rules such as no name-calling and one topic at a time"
                - "Keep the rules on your phone for before difficult talks"
                - "Score your next two arguments against the rules"
            - name: Spotting sulking, silent treatment and other quiet anger
              description: |-
                ## Purpose
                Days of silence, slammed cupboards, sarcasm, deliberate lateness and jokes with an edge do as much damage as an outburst, and they are harder to challenge because they can always be denied. Learning to recognise your own quiet forms of anger means you can say the thing directly instead.

                ## Milestones
                1. Your own passive-aggressive habits listed honestly, with a recent example of each.
                2. Someone close asked which quiet signs of your anger they notice most.
                3. A direct sentence prepared to replace your most common quiet habit.
                4. Two weeks of logging quiet anger alongside outbursts completed.

                ## Notes
                Silence is only a problem when it is used as punishment. A time-out with an agreed return time is not the same as days of cold shoulder.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Your quiet anger habits are listed with examples, two weeks of them are logged and a direct replacement sentence has been used at least once."
                cadence: phased
                effort_hours_estimate: "3"
              tasks:
                - "List the quiet ways your anger comes out, such as silence or sarcasm"
                - "Ask someone close which of these they notice most"
                - "Add a quiet anger column to your incident log for two weeks"
                - "Replace one silent treatment with a direct sentence about what is wrong"
            - name: Letting go of an old grudge
              description: |-
                ## Purpose
                Some anger is not about today at all but about an old injury replayed hundreds of times: a parent, an ex, a former boss. Working through one grudge with a structured forgiveness exercise, which does not mean excusing it or reconciling, can reduce how often that story hijacks the present.

                ## Milestones
                1. One long-held grudge chosen and the original event written down factually.
                2. The cost of carrying it listed.
                3. A structured forgiveness or letting-go exercise from a reputable source completed.
                4. A decision recorded on whether any contact, boundary or nothing at all follows.

                ## Notes
                Forgiveness here is for your benefit and does not require telling the other person. If the grudge relates to abuse or trauma, work on it with a therapist.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "One grudge has been worked through with a structured exercise and a decision about any next step is written down."
                cadence: phased
                effort_hours_estimate: "5"
              tasks:
                - "Choose one grudge you replay more than once a week"
                - "Write what happened as plainly as a news report"
                - "Work through a structured forgiveness exercise from a reputable source"
                - "Write your decision about contact, boundaries or leaving it alone"
            - name: Problem solving the frustrations that keep coming back
              description: |-
                ## Purpose
                When the same frustration returns every week, such as the dishes, the late payment, the colleague who interrupts, anger is often a signal that a practical problem has never been solved. Structured problem solving, which means defining the problem, listing options, choosing one and testing it, replaces the repeated explosion with an experiment.

                ## Milestones
                1. The three most repeated frustrations taken from your log.
                2. Each one written as a specific problem rather than a complaint about a person.
                3. At least five options listed for each and one chosen to try.
                4. Results of each experiment reviewed after two weeks.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Three recurring frustrations each have a defined problem, five listed options and a two-week experiment reviewed in writing."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Pull the three most repeated frustrations from your log"
                - "Rewrite each as a specific problem rather than a complaint"
                - "Ask the agent to brainstorm options for each problem you have defined"
                - "Choose one option per problem and review it after two weeks"
            - name: Alcohol and anger link review
              description: |-
                ## Purpose
                Alcohol lowers the brakes on aggression and features in a large share of serious outbursts, yet people rarely connect the two in their own lives. Comparing four weeks of drinking with your anger ratings shows whether there is a link for you and leads to a clear decision about limits.

                ## Milestones
                1. Units or drinks recorded alongside anger ratings for four weeks.
                2. The share of high-anger days that followed drinking worked out.
                3. A decision written about limits, alcohol-free situations or stopping.
                4. Your doctor or a support service asked for help if cutting down proves hard.
              priority: medium
              deadlineOffsetDays: 45
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "Four weeks of drinking and anger data are compared and a written decision about alcohol limits is in place."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Add a drinks column to your evening anger rating"
                - "Record drinks and anger side by side for four weeks"
                - "Work out how many high-anger days came after drinking"
                - "Write your decision on limits or alcohol-free situations"
            - name: Physical contributors audit of sleep, pain, caffeine and hunger
              description: |-
                ## Purpose
                Short nights, long gaps since eating, a fourth coffee or a flare of back pain can halve the distance to losing your temper. Checking these four physical contributors against your log shows which ones you can adjust cheaply and which need a conversation with your doctor.

                ## Milestones
                1. Sleep hours, meals, caffeine and pain scored beside two weeks of anger ratings.
                2. The physical state most often present on high-anger days identified.
                3. One practical change made, such as a mid-afternoon snack or a caffeine cut-off time.
                4. Any persistent sleep or pain problem raised with your doctor.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "Two weeks of physical data are compared with anger ratings, the main contributor is named and one change is in place."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Add sleep hours, meals, caffeine and pain to your daily rating for two weeks"
                - "Find which physical state appears most on high-anger days"
                - "Make one change, such as a caffeine cut-off or regular lunch"
                - "Raise persistent sleep or pain problems with your doctor"
            - name: Road rage plan for calmer driving
              description: |-
                ## Purpose
                Driving combines time pressure, anonymity and other people's mistakes, and a moment of road rage can cost a licence, a fine or far worse. A plan that starts before you get in the car, with earlier departures, a calmer playlist and a rule of never following, gesturing or getting out, makes the commute much safer.

                ## Milestones
                1. Driving-related episodes counted from your log.
                2. Your typical driving triggers written down, such as being cut up or tailgated.
                3. A personal rule set agreed with yourself and written on a card in the car.
                4. A month of journeys with no gestures, horn use in anger or pursuit.

                ## Notes
                If another driver is aggressive towards you, lock the doors, do not engage and drive to a busy public place or call the police if you feel threatened.
              priority: medium
              frontmatter:
                mode: building
                output_kind: habit
                success_criteria: "A written set of driving rules is in the car and a full month passes without gestures, angry horn use or pursuit."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Count how many logged episodes happened while driving"
                - "Write your three most common driving triggers"
                - "Write your driving rules on a card and keep it in the car"
                - "Leave ten minutes earlier for the journeys that make you angriest"
            - name: Twenty-four hour rule for angry emails and posts
              description: |-
                ## Purpose
                Written anger is permanent, forwardable and screenshot-ready, and a message sent at eleven at night can end a job or a friendship. A simple rule that angry messages are drafted but not sent until the next day, and are reread by someone calm if they matter, removes a whole category of regret.

                ## Milestones
                1. A rule written for emails, texts, comments and posts written while angry.
                2. A drafts folder or notes app set up as the place angry messages wait.
                3. Notifications for the apps that most often trigger you reduced or silenced in the evening.
                4. A month without sending a message you later regretted.
              priority: medium
              frontmatter:
                mode: building
                output_kind: habit
                success_criteria: "A written twenty-four hour rule is in place and a full month passes with no angry message sent before a night's wait."
                cadence: one-shot
                effort_hours_estimate: "1"
              tasks:
                - "Write your rule for messages composed while angry"
                - "Create a holding folder for angry drafts"
                - "Turn off evening notifications for the apps that most often wind you up"
                - "Reread any held draft the next morning before deciding whether to send"
            - name: Defusing the morning rush at home
              description: |-
                ## Purpose
                For many households the worst half hour of the day is the scramble to get out of the door: lost shoes, late children, a queue for the bathroom. Redesigning that window with preparation the night before and a little slack time removes a daily flashpoint rather than relying on patience at seven forty.

                ## Milestones
                1. The morning flashpoints listed with the household.
                2. Three evening preparation steps agreed, such as bags packed and clothes out.
                3. The wake-up time or routine adjusted to add ten minutes of slack.
                4. Two weeks of mornings compared with the fortnight before.
              priority: low
              frontmatter:
                mode: building
                output_kind: habit
                success_criteria: "A redesigned morning routine is in use for two weeks and morning flare-ups are counted and compared with the fortnight before."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "List the moments in the morning that most often make you snap"
                - "Agree three things to prepare the night before"
                - "Move the wake-up time to create ten minutes of slack"
                - "Compare morning flare-ups after two weeks"
            - name: Rewriting the three most repeated arguments
              description: |-
                ## Purpose
                Most households and teams have the same three or four arguments on rotation, each with a script everyone knows by heart. Writing out how each one usually goes and then rewriting your own lines, at the point where it usually turns, gives you a different move ready for next time.

                ## Milestones
                1. The three most repeated arguments identified from your log.
                2. Each argument written out as it usually unfolds.
                3. The turning point in each marked and a new response written for it.
                4. One rewritten response used in a real repeat of the argument.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Three recurring arguments are written out with a marked turning point and new response, and one new response has been used for real."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Name the three arguments you have most often"
                - "Write each one out line by line as it usually goes"
                - "Mark where it turns and write a different response for that moment"
                - "Use one new response next time the argument starts"
            - name: Deciding what to do about a persistent provocation
              description: |-
                ## Purpose
                Sometimes the trigger is a person or situation that genuinely keeps behaving badly: a neighbour, a relative, a manager, a housemate. Rather than absorbing it until you explode, weighing the realistic options of raising it, setting a boundary, reducing contact, escalating formally or leaving leads to a decision you chose calmly.

                ## Milestones
                1. The provocation described factually, with dates and examples.
                2. At least four options listed with their likely costs and benefits.
                3. Advice taken from a neutral person, such as a friend, mediator or HR adviser.
                4. A decision made and the first step taken.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A written decision about one persistent provocation exists, with four options weighed and the first step taken."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Write a factual record of the provocation with dates and examples"
                - "List options from raising it to leaving, with costs and benefits"
                - "Talk the options through with a neutral person"
                - "Record your decision and take the first step"
            - name: Repair conversation after a serious outburst
              description: |-
                ## Purpose
                After a bad blow-up the instinct is either to act as if nothing happened or to apologise in a way that slides into blame: I am sorry, but you. A planned repair, naming exactly what you did, its effect, no excuses, and what you are doing about it, is the conversation that starts to restore trust.

                ## Milestones
                1. What you said and did written down specifically, without justification.
                2. A repair statement drafted covering the behaviour, its impact and the change you are making.
                3. A calm time chosen and the conversation held.
                4. The other person's response listened to without defending, and any request they made noted.

                ## Notes
                An apology is not a request for instant forgiveness. If the other person needs time or distance, giving it is part of the repair.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A repair conversation has taken place using a prepared statement with no but clauses, and the other person's response is recorded."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Write exactly what you said and did, without explaining why"
                - "Draft a repair statement covering behaviour, impact and change"
                - "Ask the person when would be a good time to talk"
                - "Listen to their response without defending and note what they ask of you"
            - name: Preparing for a hard conversation you know is coming
              description: |-
                ## Purpose
                Some conversations are guaranteed to provoke you: a pay dispute, a talk with an ex about money, a sibling about a parent's care. Preparing the three points you need to make, the lines that usually set you off and your exit plan means you walk in at three out of ten instead of seven.

                ## Milestones
                1. The goal of the conversation written in one sentence.
                2. Three points prepared and the likely provocations listed with planned responses.
                3. A time and place chosen that avoids your known risk times.
                4. The conversation held and reviewed in your log afterwards.
              priority: medium
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A difficult conversation is held with a written goal, three prepared points and planned responses, and reviewed afterwards."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Write the one outcome you want from the conversation"
                - "List the three points you need to make"
                - "Write the lines likely to provoke you and a calm reply to each"
                - "Review the conversation in your log within a day"
            - name: Getting through a family gathering without an explosion
              description: |-
                ## Purpose
                Holidays and family occasions bring together old roles, long days, alcohol and relatives who know exactly which buttons to press. A plan made a week ahead, with limits on time and drinks, a planned break and an ally who knows your signal, makes it possible to leave the event with no repairs needed.

                ## Milestones
                1. The likely flashpoints and people at the gathering listed.
                2. Limits set for length of stay and drinks.
                3. A break plan and a signal agreed with one ally.
                4. The gathering attended and reviewed afterwards.
              priority: medium
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A family gathering is attended with a written plan of limits, a break and an ally signal, and reviewed afterwards."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "List who will be there and the topics that usually start trouble"
                - "Decide how long you will stay and how much you will drink"
                - "Agree a signal and break plan with one person you trust"
                - "Write a short review of how it went the following day"
            - name: Workplace meeting about your temper
              description: |-
                ## Purpose
                A complaint, a warning or an informal word from a manager about your temper is serious, and walking in defensive tends to make it worse. Preparing an honest account, evidence of what you are already doing and a realistic plan shows you are taking it seriously and protects your job.

                ## Milestones
                1. The workplace policy and the specific concern raised obtained in writing.
                2. Your account of the incidents written factually.
                3. Evidence of steps already taken gathered, such as a course booking or doctor's appointment.
                4. The meeting attended with notes taken and any agreed actions confirmed in writing.

                ## Notes
                Start from the **Meeting notes** template. You may be entitled to bring a colleague or representative; check your workplace policy and, where relevant, ask your union or an employment adviser.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A workplace meeting about your temper has been attended with a written account and evidence of action, and agreed outcomes are confirmed in writing."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Ask for the concern and the relevant workplace policy in writing"
                - "Write your account of each incident factually"
                - "Gather evidence of what you are already doing about your anger"
                - "Send a short email afterwards confirming the actions agreed"
            - name: Completing a required anger management programme
              description: |-
                ## Purpose
                When a court, employer, school or professional body requires an anger management programme, the deadline, the provider and the proof of completion all matter. Organising enrolment, attendance and paperwork early means the requirement is met on time and you can focus on getting something real from the sessions.

                ## Milestones
                1. The exact requirement obtained in writing, including approved providers, hours and deadline.
                2. An approved provider chosen and enrolment confirmed.
                3. Every session attended and attendance recorded.
                4. A completion certificate obtained and submitted to whoever required it.

                ## Notes
                Start from the **Course** template. Keep copies of every attendance record and the final certificate. If you have a solicitor or case worker, check the provider with them before enrolling.
              priority: high
              deadlineOffsetDays: 180
              frontmatter:
                mode: event
                output_kind: deliverable
                success_criteria: "The required programme is completed with an approved provider and the completion certificate is submitted before the deadline."
                cadence: phased
                effort_hours_estimate: "30"
              tasks:
                - "Get the requirement in writing with approved providers, hours and deadline"
                - "Enrol with an approved provider and confirm the start date"
                - "Record each session attended with the date"
                - "Submit the completion certificate and keep a copy"
            - name: Ninety-day check-in with someone close to you
              description: |-
                ## Purpose
                Your own ratings only tell half the story; the people who live or work with you notice whether you are safer to be around. A planned conversation at ninety days, where you ask a partner, friend or colleague what has changed and what has not, gives honest outside evidence and shows you are serious.

                ## Milestones
                1. One person chosen and asked in advance if they will give honest feedback.
                2. Three questions prepared about what has improved, what has not and what they would like.
                3. The conversation held without defending or explaining.
                4. Their feedback written down and one change chosen from it.
              priority: medium
              deadlineOffsetDays: 100
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A feedback conversation at around ninety days has been held with one close person, and their answers and one resulting change are recorded."
                cadence: one-shot
                effort_hours_estimate: "1"
              tasks:
                - "Ask one close person if they will give you honest feedback in three months"
                - "Prepare three questions about what has and has not changed"
                - "Hold the conversation and only ask follow-up questions"
                - "Write down their feedback and one change you will make"
            - name: Shouting less as a parent
              description: |-
                ## Purpose
                Almost every parent shouts sometimes, but when it becomes the main way of getting things done, children learn either to tune it out or to be afraid. Tracking the moments you shout, preparing calmer scripts for those moments and repairing with the child afterwards cuts the shouting and shows them what managing anger looks like.

                ## Milestones
                1. Two weeks of shouting moments logged with the time and the trigger.
                2. Calm scripts prepared for the three most common moments, such as bedtime and getting out of the door.
                3. A child-sized repair routine used after each shout, such as I shouted, that was not okay, I am working on it.
                4. Shouting episodes reduced by half compared with the first fortnight.

                ## Notes
                Repair matters more than perfection. A parent who loses it and comes back to make it right teaches more than one who never seems to struggle.
              priority: medium
              frontmatter:
                mode: building
                output_kind: habit
                success_criteria: "Shouting episodes are counted for two fortnights and the second count is half the first or lower, with repairs made after each."
                cadence: phased
                effort_hours_estimate: "5"
              tasks:
                - "Log every time you shout at the children for two weeks"
                - "Write a calm script for the three most common shouting moments"
                - "Repair with the child within the hour after any shout"
                - "Hold a five-minute family check-in on how the week felt at home @recurring(weekly:sat)"
            - name: Shared anger plan with your partner
              description: |-
                ## Purpose
                When anger is damaging a relationship, both people need to know the plan: the time-out, the rules for disagreement and how repair happens. Building it together, at a calm time and with a short weekly check-in, turns your anger work into something your partner can see and rely on.

                ## Milestones
                1. The time-out agreement and fair fighting rules reviewed together.
                2. A weekly twenty-minute check-in agreed with a simple format.
                3. Six weekly check-ins held.
                4. A decision made together on whether couples counselling would help, once safety is not in question.

                ## Notes
                Joint counselling is generally not recommended where one partner is afraid of the other. In that situation, individual specialist help comes first.
              priority: medium
              frontmatter:
                mode: building
                output_kind: habit
                success_criteria: "Six weekly couple check-ins have been held using an agreed format, and a joint decision about couples counselling is recorded."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Ask your partner for a calm time to talk about your anger plan"
                - "Review the time-out agreement and fair fighting rules together"
                - "Hold a twenty-minute check-in on how the week went between you @recurring(weekly:sat)"
                - "Decide together whether couples counselling would help"
            - name: Co-parenting with an ex without flare-ups
              description: |-
                ## Purpose
                Handovers, schedule changes and money messages with a former partner are some of the most reliable anger triggers there are, and children notice every one. Moving communication to a structured channel, keeping handovers brief and businesslike, and having a script for provocation protects the children and your own case if things go to court.

                ## Milestones
                1. Co-parenting communication moved to one written channel such as a co-parenting app or email.
                2. A message rule set: brief, informative, friendly and firm.
                3. A handover routine agreed that keeps adult discussion out of the children's earshot.
                4. Two months without a raised voice at a handover.
              priority: medium
              frontmatter:
                mode: building
                output_kind: habit
                success_criteria: "Co-parenting messages run through one written channel and two months of handovers pass without a raised voice."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Suggest one written channel for all co-parenting arrangements"
                - "Write a template for brief, factual co-parenting messages"
                - "Plan a handover routine that keeps adult discussion away from the children"
                - "Prepare a calm reply for the message that usually sets you off"
            - name: Leading a team without losing your temper
              description: |-
                ## Purpose
                A manager's anger lands harder than anyone else's: people stop raising problems, good staff leave and complaints follow. Recognising your pressure points at work, agreeing a way to pause in meetings and repairing quickly with anyone you snapped at keeps the team safe to speak up.

                ## Milestones
                1. Work-related episodes from your log listed with the meeting or situation involved.
                2. A personal pause routine for meetings, such as taking notes before replying.
                3. A trusted colleague or coach asked to give you honest feedback.
                4. Any snap at a team member repaired within one working day.

                ## Notes
                Ask your own manager or HR about leadership coaching if work is a major trigger. Many organisations fund it.
              priority: medium
              frontmatter:
                mode: building
                output_kind: habit
                success_criteria: "A pause routine for meetings is in use, a feedback partner is named and every snap at a team member is repaired within a working day."
                cadence: phased
                effort_hours_estimate: "5"
              tasks:
                - "List the work situations in your log that set you off"
                - "Choose a pause routine you can use in meetings without anyone noticing"
                - "Ask a trusted colleague to tell you honestly when you come across as angry"
                - "Look back at the week's meetings for any moment you raised your voice @recurring(weekly:fri)"
            - name: Carer frustration and resentment
              description: |-
                ## Purpose
                Caring for a parent, partner or disabled child brings exhaustion, broken sleep and repeated tasks, and anger at the person you love is common and rarely talked about. Naming the frustration, finding the moments it peaks and getting regular respite protects both you and the person you care for.

                ## Milestones
                1. The caring tasks and times that most often trigger anger identified.
                2. A carers' support group, helpline or assessment of your own needs contacted.
                3. Regular respite arranged, even a few hours a month.
                4. A plan written for what to do if you feel close to losing control with the person you care for.

                ## Notes
                If you are worried you might hurt the person you care for, step away safely and contact your doctor or a carers' helpline the same day. Asking for help is a responsible step.
              priority: medium
              frontmatter:
                mode: building
                output_kind: habit
                success_criteria: "Carer support has been contacted, respite is booked at least monthly and a written step-away plan exists."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Note which caring tasks and times of day bring the most anger"
                - "Contact a carers' organisation or ask for a carer's needs assessment"
                - "Write a plan for stepping away safely when you feel close to losing control"
                - "Book at least one block of respite or time off caring @recurring(monthly:18)"
            - name: Staying calm in customer-facing work
              description: |-
                ## Purpose
                Retail, hospitality, call centre, health and transport workers absorb other people's anger all day and are expected to show none of their own. A personal routine for difficult customers, knowing exactly when to escalate to a supervisor and a way to discharge the shift before going home keeps you employed and stops work anger following you home.

                ## Milestones
                1. Your workplace's procedure for abusive or aggressive customers read.
                2. A short internal script for staying neutral with a difficult customer.
                3. The point at which you hand over to a supervisor agreed.
                4. An end-of-shift routine used for a month.
              priority: low
              frontmatter:
                mode: building
                output_kind: habit
                success_criteria: "A written script and escalation point are in use at work and an end-of-shift routine has been kept for a month."
                cadence: phased
                effort_hours_estimate: "3"
              tasks:
                - "Read your workplace's procedure for aggressive customers"
                - "Write a short script you can repeat to stay neutral"
                - "Agree with your supervisor when you can hand a customer over"
                - "Choose an end-of-shift routine that marks the day as finished"
            - name: Anger relapse prevention plan
              description: |-
                ## Purpose
                After months of progress, old patterns tend to return under pressure: a redundancy, a new baby, a bereavement, a bad run of sleep. A written plan with your personal warning signs, the strategies that worked best and who to call means a slip is caught in days rather than months.

                ## Milestones
                1. The three strategies that have helped most listed from your logs.
                2. Personal warning signs of slipping back written down.
                3. Life events likely to raise the risk identified.
                4. The plan shared with one person who has your permission to point out warning signs.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A written relapse prevention plan names warning signs, top strategies and risk events, and has been shared with one trusted person."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "List the three strategies that have helped you most"
                - "Write the early signs that you are slipping back"
                - "Share the plan with someone allowed to point out the signs"
                - "Reread the relapse plan and update it after any big life change @recurring(quarterly)"
            - name: Accountability partner for anger work
              description: |-
                ## Purpose
                Change sticks better when someone else knows the plan and asks how it is going, and people further along often find that helping others keeps them steady. Pairing with a fellow course member, friend or peer group member for a short weekly check-in gives both of you a regular reason to look honestly at the week.

                ## Milestones
                1. One accountability partner agreed, ideally someone also working on anger.
                2. A ten-minute weekly check-in format agreed, with three set questions.
                3. Ten check-ins completed.
                4. The arrangement reviewed and renewed or ended by agreement.
              priority: low
              frontmatter:
                mode: service
                output_kind: habit
                success_criteria: "Ten weekly accountability check-ins have taken place with an agreed partner and the arrangement has been reviewed."
                cadence: rolling
              tasks:
                - "Ask a course member or friend to be your accountability partner"
                - "Agree three questions you will each answer every week"
                - "Hold a ten-minute check-in with your accountability partner @recurring(weekly:tue)"
                - "Review the arrangement after ten check-ins"
            - name: Turning anger at injustice into sustained action
              description: |-
                ## Purpose
                Not all anger is a problem: anger at unfairness has driven most social change, but if it only comes out as rants and arguments it burns you out and changes nothing. Choosing one cause, a specific role and a set monthly commitment channels the energy into something that lasts.

                ## Milestones
                1. The issue that angers you most chosen and one organisation working on it found.
                2. A specific role chosen, such as volunteering, writing to representatives or fundraising.
                3. A monthly time commitment set and kept for three months.
                4. Time spent arguing about the issue online compared before and after.
              priority: low
              frontmatter:
                mode: service
                output_kind: habit
                success_criteria: "One cause and role are chosen and a monthly commitment is kept for three consecutive months."
                cadence: rolling
              tasks:
                - "Name the issue that makes you angriest"
                - "Find one organisation doing practical work on it"
                - "Choose a role you can sustain"
                - "Spend two hours on the cause through your chosen role @recurring(monthly:26)"
            - name: Booster sessions to keep progress going
              description: |-
                ## Purpose
                Gains from anger courses and therapy fade without maintenance, and a short refresher before a known hard period works better than starting again after a crisis. Planning booster sessions or a repeat of key course material once or twice a year keeps the skills sharp long after the main work is done.

                ## Milestones
                1. Your former practitioner or course asked whether booster sessions are offered.
                2. A booster session or self-guided refresher scheduled at least once a year.
                3. Key handouts and your own notes gathered into one folder for refreshers.
                4. A booster booked ahead of any predictable high-risk period.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "At least one booster session or structured refresher is completed each year and your course materials are kept in one folder."
                cadence: cyclic
              tasks:
                - "Ask your practitioner or course provider about booster sessions"
                - "Gather your handouts, logs and notes into one folder"
                - "Book a booster session or plan a refresher day @recurring(yearly)"
                - "Schedule an extra session before any predictable stressful period"
---

# Anger Management

This area is for anyone whose temper has started to cost them: the parent who shouts and then lies awake, the partner whose arguments go too far, the manager people tiptoe around, the driver who arrives shaking. It begins with foundations (an incident log, a trigger map, an anger thermometer, a time-out agreement, safety commitments and the right support), moves through the weekly machinery of ratings, reviews and practice, then the core skills of catching hostile assumptions, finding the feeling underneath and asking assertively, followed by practical changes, the hard moments worth preparing for, plans for parents, couples, co-parents, managers, carers and front-line workers, and finally the long-term work of keeping old patterns from returning.

What repeats is a short evening rating and a calm walk-in after work, a Sunday log review, midweek time-out rehearsal, twice-weekly exercise, a monthly repair ledger and irritants review, and a quarterly progress check against your starting scores. The Metrics log, Habit tracker, Meeting notes and Course templates pair with the projects that name them. Installing adds all 50 projects as active, so archive the ones that are not for you yet.
