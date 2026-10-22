---
id: physical-health.alcohol-reduction-for-health
name: Alcohol Reduction for Health
description: "An honest drinking baseline, a safe goal agreed with your doctor, unit tracking and alcohol-free days, liver checks, and plans for the evenings, weekends and celebrations where drinking happens."
category: personal
version: 1.0.0
tags: [physical-health, alcohol-reduction-for-health, everyone, alcohol, units, alcohol-free-days, liver, moderation]
author: Aurum Technology
starter_structure:
  templates:
    - metrics-log
    - habit-tracker
    - savings-goal
    - sleep-review
  pillars:
    - name: Physical Health
      emoji: "🩺"
      description: "The body you live in, looked after on purpose: screenings and check-ups kept on schedule, long-term conditions managed rather than endured, medicines and results kept in order, and the small daily habits that decide how the next thirty years feel."
      pillarFrontmatter:
        review_cadence: quarterly
      areas:
        - name: Alcohol Reduction for Health
          description: "Cutting down or stopping drinking for physical health reasons, with unit tracking, alcohol-free days, liver checks and plans for social situations."
          projects:
            - name: Two-week honest drinking diary
              description: |-
                ## Purpose
                Most people underestimate their drinking by a third or more, because home pours are bigger than pub measures and the odd midweek glass is forgotten by Friday. Writing down every drink for fourteen days, with time, place, size and who you were with, gives you and your doctor a real starting number instead of a guess.

                ## Milestones
                1. Every drink for fourteen consecutive days recorded on the day it was drunk.
                2. Each entry showing the drink, its size, its strength, the time and the setting.
                3. A total for each week worked out in units or standard drinks.
                4. The heaviest day and the most common setting picked out in one sentence each.

                ## Notes
                Do not cut down during these two weeks. The point is an honest picture of normal, and changing things now hides the habit you want to see.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A fourteen-day diary with every drink recorded and a weekly total for each of the two weeks."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Set up a note on your phone for logging each drink as you pour it"
                - "Measure what your usual wine glass and spirit pour actually hold"
                - "Log every drink for fourteen days without trying to cut down"
                - "Total each week and mark the heaviest day and the usual setting"
            - name: Counting units and standard drinks
              description: |-
                ## Purpose
                Guidelines are written in units or standard drinks, but bottles are labelled in percentages and millilitres, so the numbers rarely meet. Learning the simple sum your country uses, and the values of the five drinks you have most often, lets you count accurately without an app in the room.

                ## Milestones
                1. Your country's unit or standard drink definition and its low-risk weekly guideline written down.
                2. The sum for converting strength and volume into units understood and practised on three drinks.
                3. A short card listing your five most common drinks with their unit values.
                4. The two-week diary totals checked again using the corrected values.

                ## Notes
                In the UK, strength as a percentage multiplied by millilitres and divided by 1,000 gives units. Other countries define a standard drink differently, so use your own health service's figure.
              priority: high
              deadlineOffsetDays: 14
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A written card listing your five usual drinks with correct unit or standard drink values, used to recheck the diary totals."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Look up how your health service defines a unit or standard drink"
                - "Work out the units in a bottle of the wine you buy most often"
                - "Write a card with the values of your five most common drinks"
                - "Recalculate the diary totals using the card"
            - name: AUDIT drinking questionnaire self-check
              description: |-
                ## Purpose
                Doctors use the AUDIT, a ten-question screening tool from the World Health Organization, to judge how risky a pattern of drinking is. Completing it honestly at the start, and keeping the score, gives you a recognised measure to share with your doctor and to repeat later, rather than relying on how you feel about your drinking.

                ## Milestones
                1. The full ten-question AUDIT completed using your diary rather than memory.
                2. The score and the date written in your drinking notes.
                3. The questionnaire's own guidance on what the score band means read in full.
                4. The score shared with your doctor or a practice nurse.

                ## Notes
                A higher score is a reason to talk to a professional before changing anything quickly, not a diagnosis. Repeat the questionnaire after three months to compare.
              priority: high
              deadlineOffsetDays: 14
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A dated AUDIT score recorded in your notes and shared with your doctor or nurse."
                cadence: one-shot
                effort_hours_estimate: "1"
              tasks:
                - "Find the official AUDIT questionnaire from your health service"
                - "Answer all ten questions with the drinking diary open beside you"
                - "Write down the score, the date and the band it falls in"
                - "Send the score to your practice or bring it to an appointment"
            - name: Withdrawal safety check before cutting down
              description: |-
                ## Purpose
                Stopping suddenly after a long spell of heavy daily drinking can cause shaking, sweating, confusion and in some people seizures, which makes a quick stop genuinely dangerous. Checking the warning signs against your own history before you change anything tells you whether you can cut down on your own or need your doctor to plan it with you.

                ## Milestones
                1. Your health service's guidance on alcohol withdrawal symptoms read in full.
                2. A yes or no answer recorded for morning drinking, shakes, sweats and past seizures.
                3. An appointment booked with your doctor if any warning sign applies.
                4. A written decision on whether to reduce gradually, stop with medical support, or go ahead alone.

                ## Notes
                If you drink every day and have ever felt shaky, sweaty or anxious until you have a drink, do not stop suddenly. Speak to your doctor first. If you have a seizure or become confused while cutting down, call emergency services.
              priority: high
              deadlineOffsetDays: 7
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A written yes or no on each withdrawal warning sign, with a doctor's appointment booked if any answer was yes."
                cadence: one-shot
                effort_hours_estimate: "1"
              tasks:
                - "Read your health service's page on alcohol withdrawal symptoms"
                - "Note whether you have ever needed a drink to stop shaking or sweating"
                - "Book a doctor's appointment before cutting down if any sign applies"
                - "Write down whether you will reduce gradually or with medical support"
            - name: Choosing between cutting down, a break or stopping
              description: |-
                ## Purpose
                Cutting down, a fixed break and stopping altogether suit different people, and choosing by default usually means drifting back. Weighing the three against your diary, your health reasons and what your doctor says gives you one goal you have picked on purpose, with a date to look at it again.

                ## Milestones
                1. The three options listed with what each would mean for a normal week.
                2. Your doctor's view sought if you have a liver result, a heart condition or take regular medicines.
                3. One goal chosen and written in a sentence, such as fourteen units across at least four alcohol-free days.
                4. A review date set about three months away.

                ## Notes
                If a doctor has advised you to stop because of liver damage, pregnancy or a medicine, that advice is the goal. This project is for the choice that is still yours.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A one-sentence drinking goal written down with a review date, and any doctor's advice reflected in it."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Write what a normal week would look like under each of the three options"
                - "Ask your doctor whether any health reason rules an option out"
                - "Choose one goal and write it as a single sentence"
                - "Put the three-month review date in your calendar"
            - name: Personal reasons for drinking less card
              description: |-
                ## Purpose
                Reasons that feel obvious on a Monday morning are hard to recall at seven on a Friday evening. A short card with your own three to five reasons, in your own words and specific to your body, gives you something concrete to read at the moment the decision is actually made.

                ## Milestones
                1. Three to five reasons written in your own words, each tied to something real such as a test result or a morning.
                2. The reasons ranked by how much they matter to you.
                3. The card saved somewhere you see in the evening, such as a phone lock screen or the fridge door.
                4. The card reread and rewritten after the first month.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A card of three to five ranked personal reasons kept where you see it in the evenings, reviewed once after a month."
                cadence: one-shot
                effort_hours_estimate: "1"
              tasks:
                - "List every health reason you have for drinking less, however small"
                - "Pick the three to five that would matter most on a Friday evening"
                - "Put the card on your lock screen or the fridge door"
                - "Rewrite the card after the first month with anything that has changed"
            - name: Baseline liver and blood tests with your doctor
              description: |-
                ## Purpose
                Liver enzymes, a full blood count and blood pressure often shift with regular drinking and often improve within weeks of cutting down. Asking your doctor for a baseline set now means you have a starting point to compare against, and an early warning if something needs more than lifestyle change.

                ## Milestones
                1. An appointment booked with your doctor to discuss your drinking and any blood tests they recommend.
                2. Your drinking diary totals and AUDIT score taken to the appointment.
                3. Results received and the key numbers copied into your notes with the date.
                4. Your doctor's view on what the results mean, and when to repeat them, written down.

                ## Notes
                Normal liver tests do not mean drinking is harmless, and raised ones are not always caused by alcohol. Let your doctor interpret them. Ongoing management of an abnormal liver result belongs with your doctor's follow-up plan.
              priority: high
              deadlineOffsetDays: 45
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "Baseline blood results and blood pressure recorded with dates, with your doctor's interpretation and repeat date written beside them."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Book an appointment to discuss drinking and baseline blood tests"
                - "Take the diary totals and AUDIT score to the appointment"
                - "Copy the results and the date into your health notes"
                - "Write down when your doctor wants the tests repeated"
            - name: Weekly limit and alcohol-free days plan
              description: |-
                ## Purpose
                Setting only a weekly total still allows a whole week's drinking on Saturday, which is harder on the body than the same amount spread out. Setting both a weekly ceiling and fixed alcohol-free days, chosen around your real diary, turns the goal into a plan for each day of the week.

                ## Milestones
                1. A weekly ceiling agreed that sits within your country's low-risk guideline or your doctor's advice.
                2. A maximum for any single day written beside it.
                3. At least three named alcohol-free days chosen for an ordinary week.
                4. The plan written on one page and shared with anyone you drink with regularly.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A one-page plan naming a weekly ceiling, a single-day maximum and at least three alcohol-free days, shared with your usual drinking companions."
                cadence: one-shot
                effort_hours_estimate: "1"
              tasks:
                - "Pick a weekly ceiling that fits your goal and any medical advice"
                - "Set a maximum for any one day"
                - "Name the alcohol-free days for a normal week, starting with the easiest"
                - "Share the plan with the person you drink with most"
            - name: Resetting the drinks kept at home
              description: |-
                ## Purpose
                Drinks within reach are drunk far more readily than drinks that need a trip to the shop. Clearing the open bottles, deciding what stays, and stocking alcohol-free alternatives in the same spot changes the default for every evening at home without needing willpower each time.

                ## Milestones
                1. Every bottle in the house counted and the open ones finished, given away or poured out.
                2. A decision written on what alcohol, if any, is kept at home and where.
                3. Two or three alcohol-free options stocked where the usual drinks used to sit.
                4. A rule agreed on buying drink only for a specific occasion, not in bulk.
              priority: medium
              deadlineOffsetDays: 14
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A home drinks stock that matches a written rule, with alcohol-free options in the usual place."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Count every bottle in the house, including the back of the cupboard"
                - "Give away or pour out the bottles that do not fit the plan"
                - "Stock two alcohol-free options where the usual drinks lived"
                - "Check the drinks cupboard still matches your rule @recurring(monthly:15)"
            - name: Telling your household about the plan
              description: |-
                ## Purpose
                Partners and housemates who drink with you are usually the biggest influence on whether a plan survives its first fortnight. A short, planned conversation about what you are changing and what would help avoids the evening where a glass is poured for you out of habit.

                ## Milestones
                1. What you want to say written in three sentences, including what would help and what would not.
                2. The conversation held at a calm time, not over a drink.
                3. One practical agreement reached, such as not opening a bottle on alcohol-free days.
                4. A check-in after two weeks to see whether the agreement is working.

                ## Notes
                You are asking for help with your plan, not asking anyone else to change their drinking. Keeping it about you makes the conversation easier for both sides.
              priority: medium
              deadlineOffsetDays: 21
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "One practical household agreement written down and reviewed after two weeks."
                cadence: one-shot
                effort_hours_estimate: "1"
              tasks:
                - "Write the three sentences you want to say about your plan"
                - "Choose a calm time without drinks to have the conversation"
                - "Agree one practical change that would help on alcohol-free days"
                - "Ask after two weeks whether the agreement is working for both of you"
            - name: Sunday units tally in a metrics log
              description: |-
                ## Purpose
                Once the diary fortnight ends, a weekly total is the simplest number that shows whether the plan is holding. Ten minutes on Sunday evening to add up the week, against your ceiling and alcohol-free day count, catches drift within a week rather than after a month.

                ## Milestones
                1. A log with columns for week, total units, alcohol-free days, heaviest day and a note.
                2. The first four weeks filled in after the diary ends.
                3. Your weekly ceiling and target alcohol-free days written at the top.
                4. Any week over the ceiling given a one-line reason.

                ## Notes
                Start from the **Metrics log** template.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A metrics log with at least twelve consecutive weekly totals and alcohol-free day counts."
                cadence: rolling
              tasks:
                - "Create a weekly units log from the metrics log template"
                - "Write your ceiling and alcohol-free day target at the top of the log"
                - "Add up the week's units and alcohol-free days @recurring(weekly:sun)"
                - "Write one line on why any week went over the ceiling"
            - name: Alcohol-free days tracker
              description: |-
                ## Purpose
                A visible run of alcohol-free days is one of the strongest motivators people report when cutting down, and a gap in the chain is easy to spot. Marking each day in a simple tracker takes seconds and keeps the commitment in front of you every evening.

                ## Milestones
                1. A tracker set up with one box per day and the planned alcohol-free days marked in advance.
                2. Every day marked for the first thirty days.
                3. The longest run of alcohol-free days noted.
                4. The planned days moved if a fixed day keeps failing, rather than the tracker abandoned.

                ## Notes
                Start from the **Habit tracker** template. A missed day is information, not a reason to stop tracking.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Thirty consecutive days marked in the tracker, with planned alcohol-free days met on at least four days in five."
                cadence: rolling
              tasks:
                - "Set up an alcohol-free days tracker from the habit tracker template"
                - "Mark the planned alcohol-free days for the next four weeks"
                - "Mark today as alcohol-free or drinking before bed @recurring(daily)"
                - "Note the longest run of alcohol-free days so far"
            - name: Monthly drinking review
              description: |-
                ## Purpose
                Weekly totals show the trees, and a monthly look shows the wood: whether the trend is down, which weeks went wrong, and what the money and the mornings feel like now. Half an hour at the start of each month to read back the log and adjust one thing keeps the plan honest over a whole year.

                ## Milestones
                1. The month's weekly totals, alcohol-free days and any slips gathered in one place.
                2. One thing that helped and one thing that got in the way written down.
                3. One change chosen for the coming month.
                4. The review dated and kept with the previous months.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Twelve dated monthly reviews in a year, each naming one change for the following month."
                cadence: rolling
              tasks:
                - "Review the month's units, alcohol-free days and slips @recurring(monthly:3)"
                - "Write one thing that helped and one thing that got in the way"
                - "Pick one change to try in the coming month"
                - "File the review with the earlier ones so the trend is visible"
            - name: Evening routine at the usual drinking hour
              description: |-
                ## Purpose
                For most people the hardest moment is a predictable time, often the hour after getting home or after the children are in bed. Having a set thing to do at that hour, a drink in hand that is not alcohol, a shower, a walk or a meal started, gives the habit somewhere else to go.

                ## Milestones
                1. The hour when you most often pour the first drink identified from the diary.
                2. A routine of two or three steps written for that hour.
                3. The routine followed on at least five evenings a week for a month.
                4. One step swapped out if it is not working after two weeks.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A written two or three step routine for your usual drinking hour, followed on five evenings a week for four weeks."
                cadence: rolling
              tasks:
                - "Find the hour of your first drink most evenings from the diary"
                - "Write a two or three step routine to fill that hour"
                - "Start the routine at your usual drinking time @recurring(daily)"
                - "Swap any step that is still not working after two weeks"
            - name: Craving and urge log
              description: |-
                ## Purpose
                Urges to drink usually peak and pass within twenty to thirty minutes, but they feel permanent while they last. Writing a quick note each time, with the time, the strength out of ten, what set it off and what happened next, shows which situations need a plan and proves that urges fade.

                ## Milestones
                1. A note format with time, strength out of ten, trigger and outcome.
                2. At least twenty urges logged over a month.
                3. The three most common triggers identified.
                4. A plan written for the most frequent trigger.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Twenty urges logged with strength and trigger, and a written plan for the most common trigger."
                cadence: rolling
              tasks:
                - "Set up a quick note format for time, strength, trigger and outcome"
                - "Log each urge as it happens, even when you do not drink"
                - "Read back the week's urge notes for patterns @recurring(weekly:wed)"
                - "Write a plan for the trigger that comes up most often"
            - name: Money not spent on drink savings pot
              description: |-
                ## Purpose
                Drink is often one of the largest discretionary costs in a household budget, and the saving is invisible unless you move it somewhere. Putting the money you would have spent into a separate pot each month, towards something you choose, turns an abstract benefit into a number that grows.

                ## Milestones
                1. Your usual monthly spend on drink, at home and out, worked out from the diary and bank statements.
                2. A separate savings pot opened with a named goal.
                3. The monthly difference moved into the pot for three months running.
                4. The goal reached or the running total shared with someone who supports the plan.

                ## Notes
                Start from the **Savings goal** template.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A named savings pot holding at least three monthly transfers of money not spent on drink."
                cadence: rolling
              tasks:
                - "Work out last month's spend on drink from bank statements and receipts"
                - "Open a separate savings pot and give it a named goal"
                - "Move the money not spent on drink into the pot @recurring(monthly:28)"
                - "Tell one supportive person the running total after three months"
            - name: Quarterly body markers check
              description: |-
                ## Purpose
                Weight, waist size, blood pressure and resting pulse often improve within months of drinking less, and seeing that change is a powerful reason to keep going. Measuring the same four things the same way every three months gives you a trend to show your doctor without needing extra appointments.

                ## Milestones
                1. A baseline for weight, waist, blood pressure and resting pulse recorded on one morning.
                2. The measuring method written down: same time of day, same scale, same tape position.
                3. Four quarterly measurements recorded in a year.
                4. The year's trend shared with your doctor at the annual review.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Four quarterly sets of weight, waist, blood pressure and resting pulse recorded the same way within a year."
                cadence: cyclic
              tasks:
                - "Write down how you will measure each marker so it is repeatable"
                - "Record weight, waist, blood pressure and resting pulse @recurring(quarterly)"
                - "Add each set to the same sheet as the weekly totals"
                - "Bring the year's trend to your annual review"
            - name: Thursday weekend drinking plan
              description: |-
                ## Purpose
                Weekends are where most weekly totals go over, usually through decisions made in the moment. Deciding on Thursday what is happening, where, and how much you will drink at each event, before the invitations turn into evenings, moves the choice to a time when you are clear-headed.

                ## Milestones
                1. Every weekend plan listed with whether it involves drink.
                2. A number of drinks or an alcohol-free choice decided for each.
                3. At least one weekend day kept alcohol-free.
                4. Monday's tally compared with Thursday's plan for four weekends.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A written weekend plan made on Thursday for four weekends in a row, with Monday's totals compared against it."
                cadence: rolling
              tasks:
                - "List what is happening this weekend and which plans involve drink"
                - "Decide what, where and how much for the weekend @recurring(weekly:thu)"
                - "Keep one weekend day alcohol-free in the plan"
                - "Compare Monday's total with Thursday's plan"
            - name: Annual alcohol-free month
              description: |-
                ## Purpose
                Taking a whole month off alcohol is a useful reset for regular drinkers and a test of how much of the habit is routine. Picking a month that suits your calendar, rather than defaulting to January, and preparing for it properly, makes it a yearly checkpoint rather than a resolution that fails in week two.

                ## Milestones
                1. A month chosen that avoids your heaviest social commitments.
                2. Alcohol-free drinks, a tracker and two supporters in place before day one.
                3. The month completed or any drinking days recorded honestly.
                4. Sleep, mood, money and weight before and after written in a short note.

                ## Notes
                If the withdrawal safety check flagged any warning signs, agree any alcohol-free month with your doctor first.
              priority: low
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "One alcohol-free month a year completed, with a dated before and after note on sleep, mood, money and weight."
                cadence: cyclic
                effort_hours_estimate: "3"
              tasks:
                - "Choose the alcohol-free month and put it in the calendar @recurring(yearly)"
                - "Tell two people the month so they can support you"
                - "Stock alcohol-free drinks before the first day"
                - "Write a before and after note on sleep, mood, money and weight"
            - name: Annual alcohol and health review with your doctor
              description: |-
                ## Purpose
                Once a year, a conversation with your doctor or practice nurse about drinking, with your log in hand, keeps the medical side of the plan current: whether blood tests need repeating, whether the goal still fits, and whether any new medicine changes things. It also means drinking is on your record as something you are actively managing.

                ## Milestones
                1. The appointment booked at the same time each year.
                2. The year's weekly totals, markers and a fresh AUDIT score prepared beforehand.
                3. Any blood tests the doctor recommends completed and the results recorded.
                4. The goal for the next year confirmed or changed and written down.
              priority: high
              frontmatter:
                mode: operating
                output_kind: event-completion
                success_criteria: "One review a year held with your doctor or nurse, with the goal for the coming year recorded afterwards."
                cadence: cyclic
              tasks:
                - "Book the annual drinking review with your doctor or nurse @recurring(yearly)"
                - "Repeat the AUDIT questionnaire the week before"
                - "Bring a one-page summary of the year's totals and markers"
                - "Write down the goal you agree for the next year"
            - name: Reading drink labels for strength and measure
              description: |-
                ## Purpose
                The same glass of wine can be 11 or 15 percent, and a craft beer can be twice the strength of a standard lager, so two drinks are not always two drinks. Learning to read strength and volume on a label in the shop and at the bar makes your unit count accurate and often points to an easy swap to a weaker version.

                ## Milestones
                1. The strength and volume of your ten most common drinks read from their labels.
                2. The strongest and weakest options in your usual drink type identified.
                3. Bar and restaurant measures checked for wine and spirits where you drink most.
                4. One lower-strength swap chosen for a drink you have regularly.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Label strengths for your ten usual drinks recorded, and one lower-strength swap in regular use."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Photograph the labels of the drinks you buy most often"
                - "Note the strength and volume of each one in your unit card"
                - "Ask your usual pub or restaurant what size their standard wine pour is"
                - "Choose one lower-strength version of a drink you have often"
            - name: What alcohol does to the liver, heart and blood pressure
              description: |-
                ## Purpose
                Knowing how regular drinking raises blood pressure, strains the heart rhythm, stores fat in the liver and increases the risk of several cancers turns general warnings into specific reasons that apply to your body. An hour with reliable sources, and a few notes in plain words, makes the conversation with your doctor more useful.

                ## Milestones
                1. Two or three reliable sources chosen, such as your national health service and a liver or heart charity.
                2. One paragraph of notes in plain words for the liver, the heart and blood pressure, and cancer risk.
                3. The changes most likely to reverse with cutting down noted separately.
                4. Two questions written for your doctor about your own risk.

                ## Notes
                Stick to health service and major charity sources. Many websites about alcohol and health are selling something.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "One page of plain notes on alcohol and the liver, heart, blood pressure and cancer, with two questions for your doctor."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Choose two reliable sources on alcohol and physical health"
                - "Write a plain paragraph each on liver, heart and cancer risk"
                - "Note which effects tend to improve after cutting down"
                - "Write two questions about your own risk for your next appointment"
            - name: Mapping your personal drinking triggers
              description: |-
                ## Purpose
                Drinking is usually set off by a small number of repeated situations: a time of day, a person, a feeling, a place or a smell. Pulling your diary and urge notes together into a short trigger map shows where to put effort, and stops you spending energy on situations that rarely lead to a drink.

                ## Milestones
                1. Every drinking occasion from the diary sorted by time, place, people and mood.
                2. The five most common triggers ranked by how often they lead to drinking.
                3. Each trigger marked as avoidable, changeable or one to plan for.
                4. A one-line response written for each of the top three.
              priority: medium
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A ranked list of five triggers, each marked avoidable, changeable or plan-for, with responses for the top three."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Sort the diary entries by time, place, people and mood"
                - "Rank the five triggers that most often led to a drink"
                - "Mark each as avoidable, changeable or one to plan for"
                - "Write a one-line response for each of the top three"
            - name: Turning down a drink with ready phrases
              description: |-
                ## Purpose
                Being offered a drink, or a top-up you did not ask for, is where many plans quietly give way, often because no reply was ready. Writing and practising three or four short phrases that fit your voice, and using them a few times, makes saying no feel ordinary rather than like an announcement.

                ## Milestones
                1. Four short phrases written for being offered a drink, a top-up, a round and a toast.
                2. The phrases said out loud until they sound natural.
                3. Each phrase used at least once in a real situation.
                4. The phrases that worked kept and the awkward ones rewritten.

                ## Notes
                You do not owe anyone a medical explanation. "I'm driving", "Not tonight" and simply holding a full glass of something else all work.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Four written phrases for refusing drinks, each used at least once in a real situation."
                cadence: phased
                effort_hours_estimate: "2"
              tasks:
                - "Write a short reply for a drink, a top-up, a round and a toast"
                - "Say each phrase out loud until it sounds like you"
                - "Use one phrase at the next event where drink is offered"
                - "Rewrite any phrase that felt awkward when you used it"
            - name: Delay and distract techniques for cravings
              description: |-
                ## Purpose
                A strong urge does not have to be obeyed or fought head on. Simple techniques such as waiting twenty minutes, changing room, drinking a large glass of water first, or noticing the urge rise and fall without acting, give you a way through the moment that gets easier with practice.

                ## Milestones
                1. Three techniques chosen to try, such as a timed delay, a change of place and noticing the urge.
                2. Each technique tried at least three times and rated for how well it helped.
                3. One technique settled on as your first response.
                4. That response written on the personal reasons card.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: habit
                success_criteria: "Three techniques each tried at least three times, with one chosen as your first response and written on your reasons card."
                cadence: phased
                effort_hours_estimate: "3"
              tasks:
                - "Choose three craving techniques to try over the next fortnight"
                - "Set a twenty-minute timer the next time an urge arrives"
                - "Rate each technique out of ten after every use"
                - "Add your best technique to the personal reasons card"
            - name: Alcohol and your medicines check with a pharmacist
              description: |-
                ## Purpose
                Alcohol interacts with many common medicines, including some painkillers, sleeping tablets, antidepressants, blood thinners and diabetes treatments, sometimes dangerously. A short conversation with a pharmacist, with your full list in hand, tells you which of your medicines matter and what to watch for.

                ## Milestones
                1. A full list of prescription, over-the-counter and herbal products you take.
                2. Each item checked with a pharmacist for interactions with alcohol.
                3. Any medicine where alcohol should be avoided or limited marked on the list.
                4. A note added to ask about alcohol whenever a new medicine is started.

                ## Notes
                Do not stop or change a prescribed medicine because of an interaction you have read about. Ask the pharmacist or prescriber first.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "Every medicine you take checked with a pharmacist for alcohol interactions, with the important ones marked on your list."
                cadence: one-shot
                effort_hours_estimate: "1"
              tasks:
                - "Write a list of every medicine and supplement you take"
                - "Ask a pharmacist to check each one for alcohol interactions"
                - "Mark the medicines where alcohol should be avoided or limited"
                - "Add a reminder to ask about alcohol with any new prescription"
            - name: Sleep before and after cutting down
              description: |-
                ## Purpose
                Alcohol helps people fall asleep but breaks up the second half of the night, so many drinkers sleep worse than they realise. Comparing two weeks of sleep notes on drinking nights with two weeks after cutting down gives you personal evidence, which tends to be far more persuasive than general advice.

                ## Milestones
                1. Two weeks of sleep notes kept with drinks recorded alongside.
                2. Two further weeks recorded after the new plan starts.
                3. Waking in the night, morning energy and total sleep compared between the two periods.
                4. A one-paragraph conclusion added to your reasons card if the difference is clear.

                ## Notes
                Start from the **Sleep review** template. Sleep can get worse for a week or two after cutting down before it improves; keep recording through it.
              priority: low
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "Two two-week sleep records, before and after cutting down, compared in a written paragraph."
                cadence: phased
                effort_hours_estimate: "3"
              tasks:
                - "Set up a sleep record from the sleep review template"
                - "Note bedtime, night waking and morning energy alongside drinks"
                - "Keep recording for two weeks after the new plan starts"
                - "Write a paragraph comparing the two periods"
            - name: Calories in your usual drinks
              description: |-
                ## Purpose
                One large glass of wine carries roughly the calories of a slice of cake and a pint of lager about the same as a bag of crisps, and they come with little sense of fullness. Working out the calories in your actual weekly drinking often reveals a meal's worth or more each week, which matters if weight or blood sugar is part of your health picture.

                ## Milestones
                1. Calorie values found for your five most common drinks at your usual sizes.
                2. The weekly calories from drink worked out from the diary.
                3. That figure compared with the calories in a typical meal.
                4. Mixers and bar snacks that come with drinking added to the count.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A written weekly calorie figure for your drinking, including mixers and snacks, based on the diary."
                cadence: one-shot
                effort_hours_estimate: "1"
              tasks:
                - "Look up the calories in your five usual drinks at your usual sizes"
                - "Multiply out the weekly calories from the diary totals"
                - "Add the mixers and snacks that usually come with drinking"
                - "Write the weekly figure beside your unit total"
            - name: Finding alcohol-free drinks you actually enjoy
              description: |-
                ## Purpose
                An alcohol-free day is much easier with a drink that feels like a treat rather than a punishment. Trying a range of alcohol-free beers, wines, spirits alternatives, shrubs and good soft drinks over a month, and scoring them, gives you two or three favourites to keep in stock and to order when out.

                ## Milestones
                1. At least eight alcohol-free or very low-strength drinks tried across different types.
                2. Each scored out of ten with a note on taste and when it would suit.
                3. Two or three favourites chosen for home and one you can order in most pubs.
                4. Sugar content checked for any favourite you plan to drink often.

                ## Notes
                Some alcohol-free products contain a trace of alcohol. If you have been advised to avoid alcohol completely, check labels for 0.0 percent.
              priority: medium
              deadlineOffsetDays: 45
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "Eight alcohol-free drinks scored, with two or three home favourites and one pub order chosen."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Buy four alcohol-free drinks of different types to try this week"
                - "Score each out of ten with a note on when it would suit"
                - "Try one new alcohol-free drink and rate it @recurring(monthly:20)"
                - "Pick the one you will order when out at a pub or restaurant"
            - name: Smaller glasses and home measures
              description: |-
                ## Purpose
                Large modern wine glasses can hold a third of a bottle in a single pour, and free-poured spirits are often double a bar measure. Switching to smaller glasses and using a measure at home is a low-effort change that cuts units without changing how many drinks you think you are having.

                ## Milestones
                1. Your current glasses measured with water to see how much a normal pour holds.
                2. Smaller wine glasses and a spirit measure in the kitchen.
                3. The larger glasses moved out of easy reach.
                4. Two weeks of drinks poured with the new glasses and measure.
              priority: low
              frontmatter:
                mode: building
                output_kind: habit
                success_criteria: "Smaller glasses and a spirit measure in daily use for two weeks, with the larger glasses put away."
                cadence: one-shot
                effort_hours_estimate: "1"
              tasks:
                - "Pour your usual amount into a measuring jug to see the real size"
                - "Buy or dig out smaller wine glasses and a spirit measure"
                - "Move the large glasses to a high or awkward cupboard"
                - "Use only the new glasses and measure for two weeks"
            - name: Changing the wine-with-dinner habit
              description: |-
                ## Purpose
                A glass or two with the evening meal is one of the most common daily patterns, and because it feels moderate it is rarely questioned, yet it adds up to fourteen glasses a week. Changing the default, by moving drinking to certain meals only and setting a good alternative on the table, breaks the daily link without losing the pleasure of a meal.

                ## Milestones
                1. The number of dinners a week that currently come with wine counted from the diary.
                2. Which dinners keep a drink and which become alcohol-free decided in advance.
                3. An alternative drink chosen and served in a nice glass on the other evenings.
                4. Four weeks of the new pattern recorded in the tracker.
              priority: medium
              frontmatter:
                mode: building
                output_kind: habit
                success_criteria: "A written rule for which dinners include wine, kept for four weeks as shown by the tracker."
                cadence: phased
                effort_hours_estimate: "2"
              tasks:
                - "Count how many dinners last fortnight came with a drink"
                - "Decide which dinners each week keep a drink"
                - "Set out a chosen alternative drink at the other dinners"
                - "Leave the bottle off the table and pour in the kitchen"
            - name: Replacing the after-work drink ritual
              description: |-
                ## Purpose
                That first drink after work usually stands for something else: the end of the day, a reward, a way to switch off. Naming what it really gives you and building a different ritual that delivers the same thing, a change of clothes, a walk, a hot bath, a call, makes the drink easier to drop without feeling deprived.

                ## Milestones
                1. What the after-work drink gives you written in one sentence.
                2. Three alternative rituals listed that deliver the same thing.
                3. Each alternative tried for a week.
                4. One ritual settled on and used on at least four workdays a week.
              priority: medium
              frontmatter:
                mode: building
                output_kind: habit
                success_criteria: "A replacement after-work ritual used on at least four workdays a week for a month."
                cadence: phased
                effort_hours_estimate: "3"
              tasks:
                - "Write one sentence on what the after-work drink gives you"
                - "List three rituals that would give you the same thing"
                - "Try one alternative ritual each week for three weeks"
                - "Keep the ritual that worked best and drop the other two"
            - name: Asking about medicines that reduce the urge to drink
              description: |-
                ## Purpose
                Several prescribed medicines can reduce cravings or make drinking less rewarding, and they are underused partly because people do not know to ask. If cutting down on your own is proving hard, a prepared conversation with your doctor about whether any of these suit you is a reasonable next step, not a failure.

                ## Milestones
                1. Your diary, tracker and urge log summarised on one page.
                2. An appointment booked to ask whether medicine could help.
                3. Your doctor's recommendation and any reasons against recorded.
                4. A follow-up date set if a medicine is started.

                ## Notes
                Your doctor will decide whether any medicine is suitable, based on your health, liver results and other medicines. Bring the full medicines list.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A recorded decision with your doctor on whether medicine to reduce the urge to drink is right for you, with a follow-up date if started."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Summarise your diary, tracker and urge log on one page"
                - "Book an appointment to ask whether medicine could help you cut down"
                - "Write down what your doctor recommends and why"
                - "Put the follow-up appointment in your calendar if a medicine is started"
            - name: Choosing support for cutting down
              description: |-
                ## Purpose
                People who have some form of support, whether an app, a mutual-aid group, a counsellor or a local alcohol service, tend to keep their changes longer. Comparing what is available near you, what it costs and how it fits your week lets you pick one option and actually start it, rather than meaning to.

                ## Milestones
                1. Four options listed: an app, a group, a counsellor and your local free alcohol service.
                2. Cost, time and format noted for each.
                3. One option chosen and a first session booked or attended.
                4. A judgement after four weeks on whether to continue or try another.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "One support option chosen and attended for four weeks, with a written decision on whether to continue."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Find your local free alcohol service through your doctor or health service"
                - "Compare an app, a group and a counsellor on cost and time"
                - "Book or attend the first session of the option you chose"
                - "Attend the chosen support meeting or session @recurring(weekly:tue)"
            - name: Slip plan for after a heavy night
              description: |-
                ## Purpose
                Almost everyone cutting down has a night that goes well over the plan, and what happens the next day decides whether it stays a single night. A short written plan for the morning after, covering water, food, the tracker and one honest line on what happened, keeps a slip from turning into a week of giving up.

                ## Milestones
                1. A half-page plan for the day after a heavy night.
                2. The plan saved with your reasons card.
                3. A named person you will tell, if that helps.
                4. The plan used at least once and adjusted afterwards.

                ## Notes
                Drinking more the next day to feel better is a warning sign worth mentioning to your doctor.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A written next-day plan saved with your reasons card and updated after its first use."
                cadence: one-shot
                effort_hours_estimate: "1"
              tasks:
                - "Write a half-page plan for the morning after a heavy night"
                - "Save the plan beside your personal reasons card"
                - "Write one honest line on what led to the slip each time"
                - "Reread and update the slip plan @recurring(quarterly)"
            - name: Three-month rethink of moderation or stopping
              description: |-
                ## Purpose
                Three months of weekly totals, tracker marks and urge notes give a clear view of whether your chosen goal is working. If moderation keeps sliding over the ceiling, or stopping has turned out easier than expected, this is the point to look at the evidence and decide whether to keep, tighten or change the goal.

                ## Milestones
                1. Twelve weeks of totals and alcohol-free days summarised.
                2. The number of weeks within the plan counted.
                3. The AUDIT repeated and compared with the first score.
                4. A decision written to keep, tighten or change the goal, with your doctor's view if needed.
              priority: medium
              deadlineOffsetDays: 120
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A written decision on the goal for the next three months, based on twelve weeks of totals and a repeat AUDIT score."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Count how many of the last twelve weeks stayed within the plan"
                - "Repeat the AUDIT and compare it with your first score"
                - "Decide whether to keep, tighten or change the goal"
                - "Write the new goal on the plan and the reasons card"
            - name: Ninety-day progress check and repeat blood test
              description: |-
                ## Purpose
                Around three months after cutting down, many people see changes in liver enzymes, blood pressure and weight that are worth confirming. Booking the repeat tests your doctor suggested at baseline, and comparing them side by side, turns effort into measurable results and may change what your doctor recommends next.

                ## Milestones
                1. Repeat tests booked at the interval your doctor suggested.
                2. Results set beside the baseline in one table.
                3. Weight, waist and blood pressure added for the same dates.
                4. The comparison discussed with your doctor and their view recorded.
              priority: medium
              deadlineOffsetDays: 100
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "Repeat results recorded beside the baseline in one table, with your doctor's interpretation noted."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Book the repeat blood tests your doctor suggested at baseline"
                - "Put the new results beside the baseline in a single table"
                - "Add weight, waist and blood pressure for the same dates"
                - "Ask your doctor what the comparison means for your plan"
            - name: Wedding or big celebration drinking plan
              description: |-
                ## Purpose
                Long celebrations with free drink, toasts and late finishes are where a careful plan is most likely to disappear. Deciding beforehand how much you will drink and when, what you will hold in between, and how you will get home, lets you enjoy the day and wake up without regret.

                ## Milestones
                1. The event's timings listed: drinks reception, meal, toasts and evening.
                2. A number of drinks and the points you will have them decided in advance.
                3. An alcohol-free drink you like confirmed with the venue or brought along.
                4. Transport home arranged and the next morning kept free.
              priority: low
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A written plan for the event's drinks, kept on the day, with the total recorded in the log afterwards."
                cadence: one-shot
                effort_hours_estimate: "1"
              tasks:
                - "List the parts of the day where drink will be offered"
                - "Decide how many drinks you will have and at which points"
                - "Ask the venue which alcohol-free drinks they will have"
                - "Arrange transport home before the day"
            - name: Holiday plan for drinking less
              description: |-
                ## Purpose
                Holidays remove the routines that support cutting down and add all-inclusive bars, cheap wine and long lunches in the sun. Planning before you go, with a daily limit for the trip, some alcohol-free days, drinks you like locally and a plan for the heat, means you come home without undoing months of progress.

                ## Milestones
                1. A daily limit and number of alcohol-free days agreed for the trip.
                2. Local alcohol-free options looked up for your destination.
                3. Travel companions told about the plan.
                4. The holiday totals logged on your return.

                ## Notes
                Alcohol and heat both dehydrate, and drinking increases the risk of sunburn, falls and swimming accidents.
              priority: low
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A written daily limit for the trip and the holiday totals logged on your return."
                cadence: one-shot
                effort_hours_estimate: "1"
              tasks:
                - "Set a daily limit and alcohol-free days for the trip"
                - "Look up alcohol-free drinks commonly available at your destination"
                - "Tell your travel companions about the plan before you leave"
                - "Log the holiday totals in the weekly log when you get home"
            - name: Festive season plan
              description: |-
                ## Purpose
                The weeks around year-end celebrations bring work parties, family gatherings and open bottles at home, and many people's annual total peaks in December. Writing the season's events in one list in November, with a plan for each and protected alcohol-free days between them, keeps the month from becoming a five-week exception.

                ## Milestones
                1. Every party, dinner and gathering for the season listed in early November.
                2. A drinks plan and transport sorted for each event.
                3. At least two alcohol-free days kept in every week of the season.
                4. The season's totals reviewed in January.
              priority: medium
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A written plan for every festive event and at least two alcohol-free days kept in each week of the season."
                cadence: cyclic
                effort_hours_estimate: "2"
              tasks:
                - "Write the festive season plan in early November @recurring(yearly)"
                - "Mark two alcohol-free days in each week of the season"
                - "Decide how much to keep in the house for guests"
                - "Review the season's totals in the January monthly review"
            - name: Work drinks, conferences and client dinners
              description: |-
                ## Purpose
                In some jobs drinking is part of the work: client entertaining, leaving dos, conference evenings and team socials. A plan that lets you stay sociable and professional while drinking little or nothing, with a go-to order, an exit time and a line for colleagues, protects both your health and your judgement the next morning.

                ## Milestones
                1. Your usual work drinking occasions listed for a typical quarter.
                2. A go-to alcohol-free or lower-strength order chosen.
                3. An exit time set for evening events.
                4. One work event handled within the plan.
              priority: low
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A written plan for work drinking occasions, used at one event with the total logged."
                cadence: one-shot
                effort_hours_estimate: "1"
              tasks:
                - "List the work events in the next three months that involve drink"
                - "Choose a go-to order you can ask for anywhere"
                - "Set a leaving time for each evening event"
                - "Log the total after the next work event"
            - name: Alcohol when pregnant or trying to conceive
              description: |-
                ## Purpose
                Many health services advise not drinking at all when pregnant or trying to conceive, because no safe level has been established. Planning the change in advance, with alcohol-free alternatives, a partner who joins in, and answers ready for social questions, makes stopping easier and keeps your midwife or doctor informed.

                ## Milestones
                1. Your health service's current advice on alcohol in pregnancy and before conception read.
                2. Any drinking since conception or in recent weeks mentioned to your midwife or doctor.
                3. Alcohol-free drinks and replies for social situations ready.
                4. A partner or household agreement on drinking at home.

                ## Notes
                If you drank before knowing you were pregnant, tell your midwife or doctor rather than worrying alone. Ask your health service for support if stopping is hard.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Your health service's advice recorded, your midwife or doctor informed of recent drinking, and a household agreement in place."
                cadence: phased
                effort_hours_estimate: "2"
              tasks:
                - "Read your health service's advice on alcohol in pregnancy"
                - "Mention any recent drinking to your midwife or doctor"
                - "Agree with your partner what happens with drink at home"
                - "Prepare a reply for when friends ask why you are not drinking"
            - name: Cutting down in later life
              description: |-
                ## Purpose
                From around sixty-five the body handles alcohol less well, more medicines interact with it, and a drink or two raises the risk of falls. Retirement can also remove the structure that kept drinking to evenings. Reviewing your drinking against these changes, with your doctor or pharmacist, sets a plan that fits life now rather than twenty years ago.

                ## Milestones
                1. Your drinking diary compared with what you drank in your fifties.
                2. Medicines checked for alcohol interactions at your medication review.
                3. A start time for drinking agreed with yourself, such as not before the evening meal.
                4. Any falls, dizziness or memory lapses after drinking mentioned to your doctor.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A written drinking plan for later life, including a start-time rule, discussed once with your doctor or pharmacist."
                cadence: phased
                effort_hours_estimate: "2"
              tasks:
                - "Compare your current drinking with what it was ten years ago"
                - "Set a rule for the earliest time of day you will drink"
                - "Raise alcohol at each yearly medication review @recurring(yearly)"
                - "Tell your doctor about any falls or dizziness after drinking"
            - name: Drinking less at university or in your twenties
              description: |-
                ## Purpose
                Student and early-career social life often runs on pre-drinks, rounds and big nights, and heavy single sessions carry risks of injury and poisoning even if the weekly average looks modest. A plan built around a few key nights, with money and safety in mind and phrases for friends, lets you keep the social life without the lost days.

                ## Milestones
                1. The big nights in a typical month identified from the diary.
                2. A per-night limit and a plan for pre-drinks set.
                3. A friend agreed as a look-out for each other on nights out.
                4. One month logged with the per-night limit kept.

                ## Notes
                Know the signs of alcohol poisoning, such as vomiting while drowsy, slow breathing or being impossible to wake, and call emergency services if you see them.
              priority: low
              frontmatter:
                mode: building
                output_kind: habit
                success_criteria: "A per-night limit and pre-drinks plan kept for one month, recorded in the log."
                cadence: phased
                effort_hours_estimate: "2"
              tasks:
                - "Pick out the big nights from a typical month in the diary"
                - "Set a per-night limit and decide what happens at pre-drinks"
                - "Agree with one friend to look out for each other on nights out"
                - "Look up the signs of alcohol poisoning and what to do"
            - name: Evenings after the children's bedtime
              description: |-
                ## Purpose
                For many parents the glass of wine once the children are asleep becomes the marker of the end of the day, and it can grow quietly into most of a bottle. Planning those evenings in advance, with a few things worth looking forward to and a clear head for night wakings or school runs, keeps the reward without the units.

                ## Milestones
                1. The post-bedtime evenings that usually involve a drink counted.
                2. A short list of other things that feel like a reward at that time.
                3. Alcohol-free evenings planned around the next morning's school run or early start.
                4. A month of evenings logged in the tracker.
              priority: low
              frontmatter:
                mode: building
                output_kind: habit
                success_criteria: "A month of post-bedtime evenings planned and logged, meeting the alcohol-free day target."
                cadence: rolling
              tasks:
                - "Count how many evenings after bedtime last week involved a drink"
                - "List three things that feel like a reward once the children are asleep"
                - "Plan the week's evenings after bedtime @recurring(weekly:mon)"
                - "Keep the nights before early starts alcohol-free"
            - name: Drinking less on shift work
              description: |-
                ## Purpose
                Shift workers often drink to come down after a late or night shift and to sleep during the day, which drifts drinking to odd hours and makes it harder to track. A plan built around your rota, with a wind-down routine after each shift type and drinking kept off pre-shift days, fits the guidelines to your working life.

                ## Milestones
                1. Drinking after each shift type identified from the diary.
                2. A wind-down routine written for after late and night shifts.
                3. No drinking within a set number of hours before a shift.
                4. Two full rota cycles logged.

                ## Notes
                Using alcohol to sleep during the day tends to make daytime sleep shorter and lighter. Mention sleep problems to your doctor.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A shift-based drinking plan kept for two full rota cycles, with pre-shift days alcohol-free."
                cadence: rolling
              tasks:
                - "Mark on your rota when drinking usually happens"
                - "Write a wind-down routine for after late and night shifts"
                - "Plan the drinks and wind-down for the coming rota @recurring(weekly:sat)"
                - "Set the number of hours before a shift when you will not drink"
            - name: Supporting a partner who is cutting down
              description: |-
                ## Purpose
                When one partner cuts down, the other's habits at home, from the bottle on the table to the Friday routine, make a big difference. Agreeing practical support without becoming the drinks police helps the plan work and keeps the relationship easy, whether or not you change your own drinking.

                ## Milestones
                1. Your partner asked what would help and what would not.
                2. Agreements made on drink at home and on shared evenings.
                3. A short weekly check-in that is not about counting.
                4. Your own drinking looked at honestly, if you choose.

                ## Notes
                If your partner drinks every day heavily, encourage them to see a doctor before stopping suddenly.
              priority: low
              frontmatter:
                mode: service
                output_kind: habit
                success_criteria: "Written agreements on drink at home and a weekly check-in kept for a month."
                cadence: rolling
              tasks:
                - "Ask your partner what would help and what would not"
                - "Agree what happens with drink at home on alcohol-free days"
                - "Have a short weekly check-in with your partner @recurring(weekly:fri)"
                - "Plan one shared evening a week that does not involve drink"
            - name: Social life that does not centre on drinking
              description: |-
                ## Purpose
                If most of your social time happens in pubs and bars, cutting down can feel like losing friends. Building a few regular plans around something else, a walk, a class, a film, breakfast instead of dinner, keeps the friendships and makes alcohol-free days the easy ones.

                ## Milestones
                1. Your social plans for the last month listed with where they happened.
                2. Three alternative plans suggested to friends.
                3. One regular alcohol-free social plan in the diary each month.
                4. Friends who are also cutting down identified.
              priority: low
              frontmatter:
                mode: building
                output_kind: habit
                success_criteria: "At least one alcohol-free social plan a month for three months, recorded in your calendar."
                cadence: rolling
              tasks:
                - "List last month's social plans and where they happened"
                - "Suggest three alternatives to a drinks evening to friends"
                - "Put one alcohol-free social plan in the diary @recurring(monthly:10)"
                - "Ask which friends are also trying to drink less"
            - name: Medically supported withdrawal planning
              description: |-
                ## Purpose
                For people who drink heavily every day or have had withdrawal symptoms before, stopping is safest with medical support, either at home with a prescribed plan or in a specialist unit. Preparing the conversation with your doctor or local alcohol service, and the practical arrangements around it, means the stop happens safely and on a known date.

                ## Milestones
                1. An assessment booked with your doctor or local alcohol service.
                2. Your diary, AUDIT score, medicines list and any past withdrawal symptoms taken to the assessment.
                3. A written plan from the service with dates, contacts and what to do if symptoms worsen.
                4. Time off, someone to stay with you and follow-up support arranged.

                ## Notes
                Do not attempt to withdraw from heavy daily drinking alone. If you have a seizure, hallucinations or confusion, call emergency services.
              priority: high
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "A written withdrawal plan from a doctor or alcohol service, with dates, contacts and practical support arranged."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Contact your doctor or local alcohol service to ask for an assessment"
                - "Gather the diary, AUDIT score, medicines list and symptom history"
                - "Arrange time off and someone to stay with you for the first days"
                - "Keep the service's emergency contacts by the phone and with the household"
            - name: One-year alcohol-free health markers comparison
              description: |-
                ## Purpose
                After a year of drinking less or not at all, the evidence is usually clear in blood tests, weight, blood pressure, sleep and money. Pulling it together into a one-page before and after, and sharing it with your doctor, confirms what has changed, sets the plan for the next year and gives you something to reread if old habits return.

                ## Milestones
                1. Baseline and one-year values for blood tests, weight, waist and blood pressure in one table.
                2. The year's weekly totals and alcohol-free days summarised.
                3. Money saved and sleep changes noted.
                4. The page shared with your doctor and a plan for the second year agreed.
              priority: low
              frontmatter:
                mode: research
                output_kind: artifact
                success_criteria: "A one-page before and after comparison covering blood tests, body markers, money and sleep, discussed with your doctor."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Ask the agent to draft a one-page before and after from your logs"
                - "Add the year's money saved and sleep notes"
                - "Check the figures against the original results and log"
                - "Add the latest results and markers to the trend page @recurring(yearly)"
---

# Alcohol Reduction for Health

This area is for anyone drinking more than they want to for the sake of their body: a liver result that came back raised, blood pressure that will not come down, poor sleep, or simply a weekly total that has crept up. It starts with the foundations (an honest diary, counting units, a safety check and a goal you have chosen on purpose), then the routines that keep the plan running, the skills for cravings, labels and saying no, the changes and decisions that make drinking less easier, the dated events that test the plan, the situations that change it, and finally the specialist work of supported withdrawal and long-term follow-up.

What repeats is a daily alcohol-free day mark, a Sunday units tally, a Thursday plan for the weekend, a monthly review with the money saved, a quarterly check of weight and blood pressure, and a yearly check with your doctor. The Metrics log, Habit tracker, Savings goal and Sleep review templates pair with the projects that name them. Installing adds all 50 projects as active, so archive the ones that are not for you yet.
