---
id: physical-health.quitting-smoking-vaping
name: Quitting Smoking & Vaping
description: "A quit date with a plan behind it: stop smoking support and medicine chosen with a professional, cravings and triggers mapped, the first weeks covered, and the routines that keep you smoke-free and vape-free for good."
category: personal
version: 1.0.0
tags: [physical-health, quitting-smoking-vaping, everyone, parent, smoking-cessation, vaping, nicotine-replacement, relapse-prevention]
author: Aurum Technology
starter_structure:
  templates:
    - metrics-log
    - savings-goal
    - habit-tracker
    - purchase-decision
  pillars:
    - name: Physical Health
      emoji: "🩺"
      description: "The body you live in, looked after on purpose: screenings and check-ups kept on schedule, long-term conditions managed rather than endured, medicines and results kept in order, and the small daily habits that decide how the next thirty years feel."
      pillarFrontmatter:
        review_cadence: quarterly
      areas:
        - name: Quitting Smoking & Vaping
          description: "Stopping smoking or vaping with a quit date, nicotine replacement or medication, trigger planning and support services, for anyone ready to quit."
          projects:
            - name: Your written reasons for quitting
              description: |-
                ## Purpose
                Reasons held only in your head go quiet at the exact moment a craving arrives, usually late in the evening or after a drink. Writing your own reasons in your own words, as specific as a child's name or a breathless flight of stairs, gives you something concrete to reread when the 'just one' thought turns up. It takes twenty minutes and is the first thing most stop smoking advisers ask for.

                ## Milestones
                1. A list of at least five personal reasons to stop, each one specific rather than general.
                2. The three strongest reasons copied onto a card or phone lock screen.
                3. A note of what you are most worried about losing when you stop, so it can be planned for.
                4. The list shared with your stop smoking adviser or supporter.

                ## Notes
                Health reasons work, but people often find money, family and freedom from planning the day around nicotine stick better. Keep the list in your words, not a leaflet's.
              priority: high
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A written list of at least five specific reasons to quit exists, with the top three kept somewhere you see daily."
                cadence: one-shot
                effort_hours_estimate: "1"
              tasks:
                - "Write down every reason you want to stop, without editing"
                - "Circle the three that matter most to you right now"
                - "Put those three on a card in your wallet or on your lock screen"
                - "Write one line on what you fear missing about smoking or vaping"
            - name: Two-week smoking and vaping pattern log
              description: |-
                ## Purpose
                Most people underestimate how many cigarettes or vape sessions they have and overestimate how random they are. Logging every one for two weeks, with the time, place, mood and what you were doing, shows the handful of cues that drive most of your use and gives your adviser a real baseline to plan medicine and triggers around.

                ## Milestones
                1. Fourteen days of entries, each with time, place, activity and mood.
                2. A daily total for cigarettes, or vape sessions and refills, worked out.
                3. The five most common situations ranked by how often they appear.
                4. The log brought to your first stop smoking appointment.

                ## Notes
                Start from the **Metrics log** template. Log before you light up, not afterwards; the pause itself is useful practice. For vaping, count sessions or pods and refills rather than puffs.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A fourteen-day log with daily totals and a ranked list of your top five smoking or vaping situations."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Set up a log with columns for time, place, activity, mood and craving strength"
                - "Record each cigarette or vape session for fourteen days"
                - "Add up daily totals and note the busiest hours"
                - "Rank the five situations that come up most often"
            - name: Nicotine dependence self-check
              description: |-
                ## Purpose
                How soon you reach for nicotine after waking is one of the best simple guides to how dependent you are, and it helps an adviser decide how much nicotine replacement or which medicine to suggest. Answering a short published dependence questionnaire now saves time at the first appointment and stops you choosing too little support.

                ## Milestones
                1. The time from waking to your first cigarette or vape recorded for a week.
                2. A published nicotine dependence questionnaire completed and scored.
                3. The score and morning timing written at the top of your pattern log.
                4. Your adviser or pharmacist told the result before medicine is chosen.

                ## Notes
                A high score is not a judgement. It usually means stronger or combined nicotine replacement is worth discussing, not that quitting will fail.
              priority: medium
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A completed dependence questionnaire score and a week of first-of-the-day timings, shared with your adviser."
                cadence: one-shot
                effort_hours_estimate: "1"
              tasks:
                - "Note how many minutes after waking you first smoke or vape, for seven days"
                - "Find a published nicotine dependence questionnaire from a health service"
                - "Answer and score the questionnaire honestly"
                - "Write the score in your log for your first appointment"
            - name: Referral to a local stop smoking service
              description: |-
                ## Purpose
                People who quit with a specialist stop smoking service and medicine are several times more likely to succeed than those going it alone, and in many countries the service is free. Finding yours, booking the first appointment and knowing what it offers turns a vague intention into a programme with weekly check-ins and someone accountable alongside you.

                ## Milestones
                1. The stop smoking services available to you listed, including phone, app and in-person options.
                2. A first appointment booked, or a self-referral form sent.
                3. What the service provides written down: sessions, medicine, carbon monoxide testing and length.
                4. The appointment time saved in your calendar with the pattern log ready to bring.

                ## Notes
                If there is no local service, ask a pharmacist or your doctor's practice; many run their own clinics, and national quitlines offer phone support.
              priority: high
              deadlineOffsetDays: 14
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A first appointment with a stop smoking service, pharmacy clinic or quitline is booked and in your calendar."
                cadence: one-shot
                effort_hours_estimate: "1"
              tasks:
                - "Search your health service's site for local stop smoking support"
                - "Compare in-person, phone and app options and pick one"
                - "Book the first appointment or send the self-referral form"
                - "Write down what the service offers and how many weeks it runs"
            - name: Choosing stop smoking medicine with a professional
              description: |-
                ## Purpose
                Combined nicotine replacement, varenicline, cytisine and bupropion all improve quit rates, but which one suits you depends on your dependence, health conditions, pregnancy and what is available where you live. Going into the conversation with your options, questions and medical history ready means you leave with a prescription or product and a clear plan for how to use it.

                ## Milestones
                1. The medicines available in your country listed with how each is obtained.
                2. Your health conditions and current medicines written down for the appointment.
                3. A medicine or nicotine replacement combination agreed with a doctor, pharmacist or adviser.
                4. Start date, how long the course lasts and who to call about side effects recorded.

                ## Notes
                Doses and course length come from the professional and the product leaflet, not from this page. Some tablets are started a week or two before quit day, so ask early.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A stop smoking medicine or nicotine replacement plan is agreed with a professional, with start date and course length written down."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "List the stop smoking medicines available where you live"
                - "Write down your health conditions and current medicines"
                - "Ask your adviser or pharmacist which option suits your dependence score"
                - "Record the agreed medicine, start date and course length"
            - name: Medicines that change when you stop smoking
              description: |-
                ## Purpose
                Chemicals in tobacco smoke speed up how the liver clears some medicines, including certain antipsychotics, a blood thinner and some asthma treatments, as well as caffeine. When you stop, blood levels can rise within days, so anyone on these needs their prescriber to know the quit date in advance. Checking takes one conversation with a pharmacist and prevents an avoidable problem in the first fortnight.

                ## Milestones
                1. A full list of your prescribed and over-the-counter medicines written down.
                2. A pharmacist or prescriber asked which, if any, are affected by stopping smoking.
                3. Any monitoring or dose review arranged around your quit date.
                4. A plan to cut back on coffee and tea if jitteriness or poor sleep appears.

                ## Notes
                It is the smoke, not the nicotine, that has this effect, so using nicotine replacement or a vape does not prevent the change.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A pharmacist or prescriber has reviewed your medicine list against your quit date and any needed monitoring is booked."
                cadence: one-shot
                effort_hours_estimate: "1"
              tasks:
                - "Write a list of every medicine you take, prescribed or bought"
                - "Ask a pharmacist which of them stopping smoking affects"
                - "Tell any affected prescriber your quit date"
                - "Note how much coffee and tea you drink now as a comparison"
            - name: Picking and protecting your quit date
              description: |-
                ## Purpose
                A quit date one to four weeks away is close enough to stay motivated and far enough to get medicine, support and a clear-out in place. Choosing a day without a big deadline, party or known stress, and protecting it in your calendar, makes it far less likely you will quietly let it slide.

                ## Milestones
                1. A quit date chosen within the next four weeks, clear of known high-stress events.
                2. The date written in your calendar and on your reasons card.
                3. Anyone whose plans affect the day told in advance.
                4. Medicine start dates worked back from the quit date.

                ## Notes
                A Monday is not compulsory. Many people do better starting on a quiet weekend day with a full plan, rather than a busy workday.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A quit date within four weeks is in your calendar, with medicine start dates set back from it."
                cadence: one-shot
                effort_hours_estimate: "1"
              tasks:
                - "Look at the next four weeks and cross out high-stress days"
                - "Pick a quit date and put it in your calendar with a reminder"
                - "Work out when any tablets need to start before that date"
                - "Tell your adviser and supporters the date"
            - name: Quit kit and smoke-free home clear-out
              description: |-
                ## Purpose
                A lighter in a coat pocket or a spare disposable vape in the glovebox is all a strong craving needs. Clearing every cigarette, lighter, ashtray, device and pod from home, car and bags the night before quit day, and replacing them with a small kit of substitutes, removes the easiest route back.

                ## Milestones
                1. Every pocket, bag, drawer and car checked and all tobacco, vapes and lighters removed.
                2. Clothes, car interior and soft furnishings that smell of smoke cleaned.
                3. A quit kit packed: fast-acting nicotine replacement, gum or mints, a stress object and water.
                4. Your usual smoking spot changed, moved or made unappealing.

                ## Notes
                If your plan is to switch to a vape, remove the cigarettes and keep only the device you chose, so there is one route, not two.
              priority: medium
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "No tobacco, lighters or unplanned vapes remain at home, in the car or in bags, and a quit kit is packed by quit day."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Search coats, bags, drawers and the car for cigarettes, vapes and lighters"
                - "Throw away or return everything you found"
                - "Wash smoke-smelling clothes and clean the car interior"
                - "Pack a quit kit to carry on quit day"
            - name: Telling people and naming your supporters
              description: |-
                ## Purpose
                Quitting in secret means nobody notices a hard day and colleagues still offer you a cigarette at break. Choosing who to tell, and asking two or three people for something specific such as a text at 9pm or not smoking in front of you, turns goodwill into practical help.

                ## Milestones
                1. A list of people who need to know and people you want as supporters.
                2. Two or three supporters each asked for one specific kind of help.
                3. Smokers and vapers you spend time with told, with a request about offering.
                4. Your supporters' names and the help they agreed written down.

                ## Notes
                Some people prefer to tell only a few until they have a week behind them. That is fine, as long as at least one person knows the date.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "At least two named supporters have each agreed to a specific form of help before quit day."
                cadence: one-shot
                effort_hours_estimate: "1"
              tasks:
                - "List who you live, work and socialise with who smokes or vapes"
                - "Choose two or three supporters and the help you want from each"
                - "Ask each supporter in person or by message"
                - "Ask smokers you see often not to offer you one"
                - "Send your supporters a short update on how quitting is going @recurring(monthly:20)"
            - name: What smoking and vaping cost you each year
              description: |-
                ## Purpose
                Counting the real annual spend, including lighters, pods, devices and the occasional extra pack, usually produces a number that surprises people. Turning that number into a named savings pot with a target, such as a trip or a debt paid off, gives each smoke-free week a visible reward.

                ## Milestones
                1. Your weekly spend on tobacco, vapes and accessories worked out from receipts or bank records.
                2. The annual figure written next to your reasons list.
                3. A separate savings pot opened and named after something you want.
                4. A standing transfer set up for the amount you no longer spend.

                ## Notes
                Start from the **Savings goal** template.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Your annual spend is calculated and a named savings pot receives the money you used to spend each week."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Add up a month of tobacco and vape spending from your bank records"
                - "Multiply it out to a yearly figure and write it down"
                - "Open a savings pot named after what the money will pay for"
                - "Set a weekly transfer for the amount you stop spending"
                - "Check the savings pot total against your goal @recurring(monthly:28)"
            - name: Daily nicotine replacement routine
              description: |-
                ## Purpose
                Nicotine replacement works far better when it is used properly every day for the full course, rather than dipped into when cravings are bad. A fixed morning routine for the long-acting product and a habit of carrying the fast-acting one keeps withdrawal low enough that cravings stay manageable.

                ## Milestones
                1. A set time each morning for the long-acting product, linked to an existing habit.
                2. The fast-acting product carried every day and used before cravings peak.
                3. A daily tick kept for the first eight weeks.
                4. Any skin irritation, sleep disturbance or other side effect noted for your adviser.

                ## Notes
                Start from the **Habit tracker** template. Follow the product leaflet and your adviser for strength and timing; under-using nicotine replacement is the most common reason people say it did not work.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Nicotine replacement is ticked off on at least 50 of the first 56 days after quit day."
                cadence: rolling
              tasks:
                - "Choose the existing morning habit you will attach the routine to"
                - "Put a spare fast-acting product in your bag, car and desk"
                - "Use the day's nicotine replacement as agreed with your adviser and tick it off @recurring(daily)"
                - "Note any side effects to raise at the next session"
            - name: Weekly stop smoking support sessions
              description: |-
                ## Purpose
                Weekly sessions in the first four to six weeks are where problems get caught early: a patch that is too weak, a trigger that keeps winning, a medicine side effect. Turning up every week, with your carbon monoxide reading and notes from the week, is one of the strongest predictors of still being smoke-free at four weeks.

                ## Milestones
                1. Every weekly session for the course booked in your calendar.
                2. Each session attended, with the carbon monoxide reading written down.
                3. One problem from the week raised at each session and the agreed change noted.
                4. A plan agreed for support after the course ends.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "At least four weekly sessions attended with carbon monoxide readings recorded, and a follow-on support plan agreed."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Book the full run of weekly sessions in one go"
                - "Write down the week's hardest moment before each session"
                - "Attend the weekly session and write down your carbon monoxide reading @recurring(weekly:tue)"
                - "Ask what support continues after the course ends"
            - name: Evening craving note for the first three months
              description: |-
                ## Purpose
                Cravings feel endless in the moment, but written down they show a pattern: fewer each week, shorter, and tied to the same few situations. A two-minute evening note of the day's strongest craving, what set it off and what got you through builds a record of your own successful tactics to reuse.

                ## Milestones
                1. A nightly note kept with the strongest craving, its trigger and what worked.
                2. A weekly count of cravings showing the trend.
                3. Your three most reliable tactics identified from the notes.
                4. The notes reviewed with your adviser at the four-week mark.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Craving notes cover at least ten of every fourteen evenings in the first three months, with your three best tactics named."
                cadence: rolling
              tasks:
                - "Pick a notebook or note on your phone just for craving notes"
                - "Write the day's strongest craving, its trigger and what got you through @recurring(daily)"
                - "Count the week's cravings and compare with the week before"
                - "Highlight the tactics that worked more than once"
            - name: Smoke-free days counter and rewards
              description: |-
                ## Purpose
                Every day without a cigarette or vape adds up, but the gain is invisible unless you count it. A visible tally of days, money saved and cigarettes not smoked, with small rewards set in advance at one day, one week, one month and three months, gives the hard early weeks a series of finish lines.

                ## Milestones
                1. A counter started on quit day, on paper, an app or the fridge.
                2. Rewards chosen in advance for one day, one week, one month and three months.
                3. Each reward claimed on the day it is earned.
                4. Money saved moved to your savings pot every week.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A running count of smoke-free days and money saved is kept, with each pre-set reward claimed on schedule."
                cadence: rolling
              tasks:
                - "Choose where your smoke-free counter will live"
                - "Write a reward for one day, one week, one month and three months"
                - "Move the week's unspent tobacco or vape money into the savings pot @recurring(weekly:sun)"
                - "Claim each reward on the day you reach it"
            - name: Stop smoking medicine supply check
              description: |-
                ## Purpose
                Running out of patches or tablets on a Sunday night is a common way a quit attempt wobbles. A weekly count of what is left, with reorders placed while there are still several days in hand, keeps the course unbroken for its full length.

                ## Milestones
                1. The pharmacy or supplier and reorder method for each product written down.
                2. A weekly count of days left recorded.
                3. Reorders placed with at least five days of supply remaining.
                4. No gaps in the course from start to finish.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "The full medicine or nicotine replacement course runs without a single day missed for lack of supply."
                cadence: rolling
              tasks:
                - "Write down where each product comes from and how to reorder it"
                - "Count how many days of each product are left @recurring(weekly:fri)"
                - "Reorder anything with fewer than seven days left"
                - "Keep a two-day emergency supply in your bag"
            - name: Monthly smoke-free review
              description: |-
                ## Purpose
                After the first few weeks the daily effort fades, which is when people stop paying attention and old cues creep back. A short monthly review of cravings, close calls and what has changed keeps the plan current through the first year, when most relapses happen.

                ## Milestones
                1. A monthly review held on the same day each month.
                2. Close calls and new triggers from the month written down.
                3. One change to the plan made each month if needed.
                4. Twelve reviews completed in the first smoke-free year.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A written monthly review exists for each of the first twelve months after quit day."
                cadence: rolling
              tasks:
                - "Choose a fixed day of the month for the review"
                - "Review the month's close calls, triggers and wins in writing @recurring(monthly:12)"
                - "Decide one change for the coming month"
                - "Reread your reasons list at the end of the review"
            - name: Weekly mood and sleep score during withdrawal
              description: |-
                ## Purpose
                Irritability, low mood, restlessness and broken sleep are common in the first two to four weeks and usually ease, but they are also the symptoms most likely to tip someone back. Scoring mood and sleep once a week shows whether things are settling as expected or whether you need to talk to your adviser or doctor.

                ## Milestones
                1. A simple ten-point score for mood, sleep and irritability set up.
                2. A score recorded every week for the first three months.
                3. Any score that worsens for two weeks running raised with your adviser.
                4. Persistent low mood discussed with your doctor.

                ## Notes
                If mood drops sharply or you have thoughts of harming yourself, contact your doctor or an urgent helpline straight away, and tell them you have recently stopped smoking or started a new medicine.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Weekly mood, sleep and irritability scores are recorded for twelve weeks and any worsening trend is raised with a professional."
                cadence: rolling
              tasks:
                - "Set up a three-line score sheet for mood, sleep and irritability"
                - "Score the week's mood, sleep and irritability out of ten @recurring(weekly:wed)"
                - "Flag any score that has dropped two weeks running"
                - "Raise flagged scores at your next session or with your doctor"
            - name: Appetite and weight routine after quitting
              description: |-
                ## Purpose
                Appetite often rises after stopping, food tastes better and hands look for something to do, so some weight gain is common. Planning snacks and a weekly weigh-in from the start keeps gain modest without turning the quit into a diet, which is a separate battle best left for later.

                ## Milestones
                1. A weekly weigh-in on the same morning started from quit week.
                2. A list of go-to snacks and drinks for craving moments stocked.
                3. Meal times kept regular so hunger is not mistaken for craving.
                4. Any steady gain discussed with your adviser after three months.

                ## Notes
                Staying smoke-free matters far more for health than a few kilos. Do not start a strict diet in the first weeks.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A weekly weight record covers the first three months and a snack plan is in use from quit week."
                cadence: rolling
              tasks:
                - "Write a list of snacks and drinks to reach for during cravings"
                - "Stock the list before quit day"
                - "Weigh yourself on the same morning and write it down @recurring(weekly:mon)"
                - "Review the trend with your adviser at three months"
            - name: Smoking status kept accurate in your health record
              description: |-
                ## Purpose
                Health records that still show you as a current smoker can affect which checks you are invited for, the advice you get and, in some countries, insurance quotes. Telling your practice the date you stopped and checking it once a year keeps your record and any screening eligibility correct.

                ## Milestones
                1. Your practice told your quit date once you pass three months.
                2. Your record checked on the patient portal or at an appointment to confirm ex-smoker status.
                3. Your total years and amount smoked recorded, as some checks use it.
                4. The status confirmed again at each annual check-up.
              priority: low
              frontmatter:
                mode: operating
                output_kind: artifact
                success_criteria: "Your health record shows you as an ex-smoker with your quit date, checked at least once a year."
                cadence: cyclic
              tasks:
                - "Work out roughly how many years you smoked and how much per day"
                - "Tell your practice your quit date at the three-month mark"
                - "Check the patient portal shows ex-smoker status"
                - "Confirm your smoking status is correct at the annual check-up @recurring(yearly)"
            - name: Nicotine withdrawal and its timeline
              description: |-
                ## Purpose
                Knowing what is normal makes withdrawal far less frightening: irritability, poor concentration, hunger, a cough that briefly worsens and broken sleep usually peak in the first week and ease over two to four. Learning the timeline from a reliable health source before quit day lets you recognise symptoms as temporary rather than as proof you cannot cope.

                ## Milestones
                1. The common withdrawal symptoms and typical timeline read from a health service source.
                2. Your own likely hardest days marked on the calendar.
                3. A plan written for the three symptoms you expect to find hardest.
                4. Symptoms that would need a doctor rather than patience written down.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A one-page note of expected withdrawal symptoms, their timeline and your plan for the hardest three is written before quit day."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Read a health service guide to nicotine withdrawal"
                - "Mark days two to five after quit day as the likely hardest"
                - "Write a plan for the three symptoms you dread most"
                - "Note which symptoms mean calling your doctor"
            - name: How stop smoking medicines work
              description: |-
                ## Purpose
                Understanding why a tablet starts before quit day or why two kinds of nicotine replacement are combined makes it much easier to stick with the course. A short study session with the leaflets and a reliable source answers the questions people usually only think of once they are struggling.

                ## Milestones
                1. The way your chosen medicine reduces cravings explained in your own words.
                2. Common side effects and what to do about them noted from the leaflet.
                3. The reason for the full course length understood.
                4. Remaining questions written down for your adviser.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A short written explanation of how your medicine works, its common side effects and why the course length matters."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Read the patient leaflet for your chosen medicine end to end"
                - "Write three sentences on how it reduces cravings"
                - "List the common side effects and what the leaflet says to do"
                - "Bring your unanswered questions to the next session"
            - name: Using fast-acting nicotine replacement properly
              description: |-
                ## Purpose
                Gum, lozenges, mouth spray and inhalators are often used wrongly: gum chewed like normal gum, sprays inhaled, products swallowed too fast, all of which waste the nicotine and cause hiccups or a sore throat. Learning the right technique for your product, and using it before a craving peaks rather than during, makes it far more effective.

                ## Milestones
                1. The correct technique for your product learned from the leaflet or your adviser.
                2. The technique practised before quit day.
                3. Your predictable craving moments listed so the product is used ahead of them.
                4. Any problems with taste or irritation raised and a different form tried if needed.

                ## Notes
                Nicotine gum is usually chewed slowly until it tingles, then parked against the cheek. Check your own product's instructions, as each form differs.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "You can describe and demonstrate the correct technique for your fast-acting product, practised at least three times before quit day."
                cadence: one-shot
                effort_hours_estimate: "1"
              tasks:
                - "Read the technique section of your fast-acting product leaflet"
                - "Practise the technique three times before quit day"
                - "List the times of day you will use it ahead of cravings"
                - "Ask your adviser about switching form if it irritates"
            - name: Riding out a craving in five minutes
              description: |-
                ## Purpose
                A craving usually peaks and fades within about five minutes, but it feels permanent while it lasts. Practising a short set of tactics, such as delaying, slow breathing, drinking water, moving or noticing the urge without acting on it, builds a reflex you can run on autopilot at the bus stop or after a meal.

                ## Milestones
                1. Four or five craving tactics chosen and written on a card.
                2. Each tactic practised during a real craving in the pattern log fortnight.
                3. The two that work best for you identified.
                4. The card carried every day for the first three months.

                ## Notes
                Urge surfing, watching the craving rise and fall like a wave without fighting it, is worth practising even if it feels odd at first.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A personal card of craving tactics is written, each tested at least once, with your two most reliable ones marked."
                cadence: phased
                effort_hours_estimate: "3"
              tasks:
                - "Write five craving tactics on a pocket card"
                - "Time your next three cravings to see how long they last"
                - "Try a different tactic on each craving and note the result"
                - "Mark the two tactics that worked best"
            - name: Catching permission-giving thoughts
              description: |-
                ## Purpose
                Relapse usually starts with a thought that sounds reasonable: I deserve one, just one won't matter, I'll quit properly after this week. Learning to spot your own versions and having a prepared answer to each, written in advance, is one of the core skills taught in behavioural support.

                ## Milestones
                1. Your five most likely permission-giving thoughts written down.
                2. A short, honest answer written for each.
                3. The thoughts and answers read aloud before a known high-risk situation.
                4. New versions added as they turn up in the first months.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A written list of at least five permission-giving thoughts, each paired with a prepared answer, is kept with your reasons card."
                cadence: one-shot
                effort_hours_estimate: "1"
              tasks:
                - "Write down the excuses you have used in past quit attempts"
                - "Write a one-line answer to each excuse"
                - "Read the list before your next high-risk situation"
                - "Add any new excuse the day you notice it"
            - name: Weighing the evidence on vaping to quit
              description: |-
                ## Purpose
                Health bodies disagree on vaping: some recommend it as a way to stop smoking, others are more cautious, and advice differs between countries and for young people. Reading what your own national health service says, and what the trials on switching found, lets you decide with your adviser on the facts rather than headlines.

                ## Milestones
                1. Your national health service's current position on vaping for quitting read and summarised.
                2. The main findings of recent reviews on vaping for smoking cessation noted.
                3. The known and uncertain risks listed in plain words.
                4. A view on whether vaping fits your plan, discussed with your adviser.
              priority: low
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A one-page summary of your health service's vaping guidance and the main evidence, discussed with your adviser."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Find your national health service's guidance on vaping to quit smoking"
                - "Read a recent independent review summary on vaping for cessation"
                - "List the known benefits, risks and open questions"
                - "Ask the agent to draft a one-page summary from your notes"
            - name: What recovers in the body after quitting
              description: |-
                ## Purpose
                Carbon monoxide levels drop within a day or two, taste and smell improve within weeks, and breathing, circulation and long-term risks keep improving for years. Knowing the published recovery timeline gives you a reason to notice and celebrate changes as they happen, which helps on flat days.

                ## Milestones
                1. A recovery timeline from a reliable health source read.
                2. The changes you most look forward to marked on your calendar.
                3. Changes you notice, such as stairs or taste, written down as they arrive.
                4. The timeline shared with a supporter.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A recovery timeline is pinned up and at least five noticed improvements are written down in the first three months."
                cadence: one-shot
                effort_hours_estimate: "1"
              tasks:
                - "Find a recovery timeline published by a health service"
                - "Mark the milestones that matter most to you on your calendar"
                - "Write down each change you notice in your body"
                - "Share the timeline with your main supporter"
            - name: Cold turkey, cutting down or switching
              description: |-
                ## Purpose
                Stopping abruptly on a set day, cutting down to quit over a few weeks with nicotine replacement, and switching completely to a vape are all legitimate routes, and the right one depends on your history and dependence. Comparing them against your past attempts, with your adviser, and choosing one on purpose avoids drifting into endless cutting down.

                ## Milestones
                1. Every past quit attempt listed with the method, how long it lasted and why it ended.
                2. The three main routes compared against your history and dependence score.
                3. One route chosen with your adviser and the reason written down.
                4. A fallback route agreed in case the first does not hold.

                ## Notes
                Cutting down works best with a fixed end date. Without one it tends to become smoking a little less, indefinitely.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "One quit route is chosen and recorded with your reasons, plus a named fallback, after reviewing past attempts."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "List every past quit attempt and what ended it"
                - "Write the pros and cons of each route for you"
                - "Agree a route with your adviser and note why"
                - "Write down the fallback if the first route slips"
            - name: Switching fully from cigarettes to a regulated vape
              description: |-
                ## Purpose
                Where health services support it, switching completely to a vape can help heavy smokers stop, but only if the switch is complete; using both keeps most of the harm. Choosing a regulated refillable or pod device, a suitable nicotine strength agreed with your adviser and a date for the last cigarette makes the switch a plan rather than an add-on.

                ## Milestones
                1. Two or three regulated devices from a reputable seller shortlisted and compared.
                2. A starting nicotine strength agreed with your stop smoking adviser.
                3. A date set for the last cigarette, with all tobacco removed that day.
                4. Four weeks completed with no cigarettes alongside the vape.

                ## Notes
                Start from the **Purchase decision** template. Buy from legitimate retailers; illicit disposables can contain far more nicotine than labelled.
              priority: medium
              deadlineOffsetDays: 45
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A regulated vape is chosen with adviser input and four consecutive weeks pass with no cigarettes used alongside it."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Ask your adviser whether switching suits your situation"
                - "Shortlist regulated devices from a reputable shop and compare costs"
                - "Agree a starting nicotine strength with your adviser"
                - "Set and keep the date of your last cigarette"
            - name: Stepping down off vaping
              description: |-
                ## Purpose
                Many people who used a vape to stop smoking, and many who only ever vaped, reach a point where they want to be free of nicotine altogether. A planned step-down, lowering strength in stages and cutting the number of sessions before a vape-free date, avoids the rebound that comes from stopping too fast or drifting back to cigarettes.

                ## Milestones
                1. Current daily nicotine use from vaping worked out from pods or liquid used.
                2. A step-down plan with dates agreed with your adviser.
                3. Each stage held for at least the agreed time without returning to cigarettes.
                4. A vape-free date reached and the device given away or recycled.

                ## Notes
                If cigarettes start creeping back during the step-down, pause at the current strength. Staying off tobacco comes first.
              priority: medium
              deadlineOffsetDays: 120
              frontmatter:
                mode: building
                output_kind: habit
                success_criteria: "A dated step-down plan is followed to a vape-free date with no return to cigarettes."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Work out how many pods or millilitres you use a week"
                - "Draft step-down stages with dates and agree them with your adviser"
                - "Record the week's pods or liquid used against the current stage @recurring(weekly:sat)"
                - "Buy the next lower strength before the current stage ends"
                - "Recycle the device on your vape-free date"
            - name: Finishing the nicotine replacement course
              description: |-
                ## Purpose
                Stopping nicotine replacement too early, often after two or three weeks when things feel easier, is a common route back to smoking. Planning the end of the course with your adviser, including any step-down and a fast-acting product kept for emergencies, means you finish when the course is done rather than when the box runs out.

                ## Milestones
                1. The planned end date of your course confirmed with your adviser.
                2. A step-down schedule agreed if your product uses one.
                3. A fast-acting product kept for high-risk days after the course.
                4. The course finished with no return to smoking in the following month.
              priority: low
              frontmatter:
                mode: building
                output_kind: habit
                success_criteria: "The nicotine replacement course runs to its agreed end date and you remain smoke-free a month later."
                cadence: phased
                effort_hours_estimate: "2"
              tasks:
                - "Confirm the full course length with your adviser"
                - "Write the step-down dates in your calendar"
                - "Keep one fast-acting product aside for emergencies"
                - "Check in with your adviser a month after finishing"
            - name: Rebuilding work breaks without smoking
              description: |-
                ## Purpose
                For many people the smoking break is the only real pause in a working day and the main time spent with certain colleagues. Replacing it with a break that still gets you outside, still gives you a breather and keeps some of the social contact stops the workday from becoming a daily test.

                ## Milestones
                1. Your current break times and who you spend them with listed.
                2. A replacement for each break chosen, such as a walk, a coffee or a call.
                3. Colleagues who smoke told what you are doing and asked not to offer.
                4. Four weeks of breaks taken without smoking or vaping.
              priority: medium
              frontmatter:
                mode: building
                output_kind: habit
                success_criteria: "Every smoking break has a named replacement, used for four consecutive working weeks without smoking."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "List your usual smoking breaks and who joins you"
                - "Pick a replacement activity for each break"
                - "Tell the colleagues you usually smoke with"
                - "Book a walking route or coffee spot for the first week"
            - name: Rewiring your three strongest smoking cues
              description: |-
                ## Purpose
                Your pattern log will show a few cues, often the first coffee, the drive home, the phone call or the end of a meal, that set off most of your cigarettes or vape sessions. Changing the routine around each one, rather than relying on willpower, removes most of the automatic reaching.

                ## Milestones
                1. The three strongest cues picked from your pattern log.
                2. A specific change written for each, such as a different seat, drink or route.
                3. Each change tried for at least a week.
                4. The cues reassessed after a month and any that still bite reworked.
              priority: medium
              frontmatter:
                mode: building
                output_kind: habit
                success_criteria: "Your three strongest cues each have a written routine change that has been in use for at least a month."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Pick the three most frequent cues from your pattern log"
                - "Write one concrete routine change for each cue"
                - "Start the changes on or before quit day"
                - "Review after a month which cues still trigger cravings"
            - name: Smoke-free plan for drinking occasions
              description: |-
                ## Purpose
                Drinking situations are where more quit attempts end than anywhere else, because alcohol loosens resolve and the smokers gather outside. A plan for the first few nights out, covering what you will drink, where you will stand, what you will say and when you will leave, makes those evenings survivable.

                ## Milestones
                1. The regular drinking occasions in your month listed.
                2. A plan written for the first three, including what to say when offered.
                3. Fast-acting nicotine replacement or your chosen aid carried on each night out.
                4. Each occasion reviewed the next day and the plan adjusted.

                ## Notes
                Many people avoid drinking situations altogether for the first two to four weeks. That is a sensible default, not a failure.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A written plan exists for the first three drinking occasions after quit day, and each is reviewed afterwards."
                cadence: one-shot
                effort_hours_estimate: "1"
              tasks:
                - "List the nights out and gatherings in the next two months"
                - "Write what you will say when someone offers a cigarette"
                - "Decide where you will stand and when you will leave"
                - "Write a two-line review the morning after each occasion"
            - name: Learning from a lapse or relapse
              description: |-
                ## Purpose
                Most people who stop for good made several attempts first, and each lapse holds specific information about what to change. Reviewing a slip calmly within a day or two, deciding whether it was a single lapse or a return to smoking, and changing medicine or tactics accordingly, turns a setback into the start of a better attempt.

                ## Milestones
                1. What happened written down: when, where, who with and what you were feeling.
                2. A decision made on whether it was a one-off lapse or a relapse.
                3. One change to medicine, support or tactics agreed with your adviser.
                4. A new quit date set within four weeks if it was a relapse.

                ## Notes
                A single cigarette does not reset your progress. Note the day count from before and keep going.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A written lapse review names the cause and one agreed change, with a new quit date set within four weeks if needed."
                cadence: one-shot
                effort_hours_estimate: "1"
              tasks:
                - "Write down what happened in the hour before the slip"
                - "Decide honestly whether it was a lapse or a relapse"
                - "Agree one change with your adviser"
                - "Set a new quit date if you have gone back to smoking"
            - name: Quit day plan
              description: |-
                ## Purpose
                Quit day goes better when every hour is planned: the first nicotine replacement on waking, a new morning routine without the usual cigarette, busy afternoons and an early night. Writing the day out in advance, with supporters on standby, means you spend the energy on getting through it rather than deciding what to do.

                ## Milestones
                1. An hour-by-hour plan for quit day written, with your known danger times marked.
                2. Medicine or nicotine replacement ready and started as agreed.
                3. Supporters told the date and when you might message them.
                4. Quit day completed without smoking or vaping outside your plan.

                ## Notes
                Keep quit day light. Avoid the pub, big decisions and long periods alone with nothing to do.
              priority: high
              deadlineOffsetDays: 35
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "An hour-by-hour quit day plan is written in advance and quit day passes with no cigarettes or unplanned vaping."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Write an hour-by-hour plan for quit day"
                - "Mark the three times of day you expect cravings to hit hardest"
                - "Line up an activity for each danger time"
                - "Message your supporters the evening before"
            - name: The first seven smoke-free days
              description: |-
                ## Purpose
                Withdrawal is usually strongest in the first week, and people who get through it without a single puff are much more likely to still be stopped months later. Planning each day ahead, keeping evenings busy and checking in with your adviser at the end of the week gives this critical stretch the attention it needs.

                ## Milestones
                1. A rough plan written for each of the seven days, especially evenings.
                2. Nicotine replacement or medicine used every day as agreed.
                3. A daily message to a supporter sent.
                4. Seven days completed with no cigarettes, confirmed at your next session.
              priority: high
              deadlineOffsetDays: 42
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "Seven consecutive days after quit day pass with no cigarettes, confirmed by a carbon monoxide reading or your adviser."
                cadence: phased
                effort_hours_estimate: "5"
              tasks:
                - "Plan something for each evening of the first week"
                - "Clear the week of avoidable stress where you can"
                - "Send a short daily update to one supporter"
                - "Book a check-in with your adviser at the end of day seven"
            - name: Four-week carbon monoxide confirmed quit
              description: |-
                ## Purpose
                Four weeks smoke-free is the point many stop smoking services use to count a quit, and people who reach it are much more likely to stay stopped. Reaching it with a carbon monoxide reading below the service's cut-off gives you a confirmed milestone and a natural moment to plan the next phase.

                ## Milestones
                1. The four-week date marked from your quit day.
                2. A carbon monoxide test taken at or near the four-week session.
                3. A reading below the service's cut-off recorded.
                4. A plan for months two and three agreed with your adviser.

                ## Notes
                Cannabis smoking also raises carbon monoxide readings, and some workplaces and traffic can nudge them up. Tell your adviser if anything might affect yours.
              priority: medium
              deadlineOffsetDays: 63
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A carbon monoxide reading below the service cut-off is recorded at four weeks after quit day."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Mark the four-week date in your calendar"
                - "Book the session that falls closest to four weeks"
                - "Record the carbon monoxide reading in your log"
                - "Agree a plan for the next two months with your adviser"
            - name: First party, wedding or holiday smoke-free
              description: |-
                ## Purpose
                Big occasions combine alcohol, smokers, late nights and a sense that normal rules are suspended, which is why a wedding or a holiday so often ends a quit attempt. Planning the first one in detail, from what you will carry to who will keep you company, protects weeks of effort.

                ## Milestones
                1. The first big occasion after quit day identified and dated.
                2. A plan written for the riskiest hours of the event.
                3. A supporter attending or available by phone.
                4. The occasion completed smoke-free and reviewed afterwards.

                ## Notes
                Holidays abroad can mean cheap tobacco and different vaping rules. Pack enough of your own quit aids for the whole trip.
              priority: low
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "The first big social occasion after quit day is attended with a written plan and finished without smoking."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Find the first big event or trip in your calendar"
                - "Write a plan for the riskiest part of it"
                - "Pack enough quit aids for the whole event or trip"
                - "Review how it went the day after"
            - name: Joining a national quit month
              description: |-
                ## Purpose
                Several countries run a national quit month or day, such as a collective October quit, World No Tobacco Day or a new year campaign, with free kits, apps and online groups. Using one as your quit date, or as a yearly check on vaping and nicotine use, adds a crowd of people stopping at the same time.

                ## Milestones
                1. The national quit campaigns in your country and their dates listed.
                2. One campaign chosen as a quit date or an annual reset.
                3. The campaign's free app, kit or group joined.
                4. The campaign completed and what helped written down.
              priority: low
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A national quit campaign is chosen, its support materials are in use and the month is completed with notes."
                cadence: cyclic
              tasks:
                - "Look up the national quit campaigns in your country"
                - "Sign up for the campaign's app or kit"
                - "Join the campaign's online group for the month"
                - "Check next year's campaign dates and decide whether to take part @recurring(yearly)"
            - name: One year smoke-free review
              description: |-
                ## Purpose
                Twelve months without smoking is a genuine milestone: the riskiest period for relapse is behind you, the money saved is real and many health gains are measurable. Marking it with a review, a celebration and a conversation with your doctor about lung health sets up the following years.

                ## Milestones
                1. Twelve months of smoke-free days, money saved and monthly reviews totalled.
                2. A reward booked or bought with the savings.
                3. A routine appointment used to ask about lung function and checks for ex-smokers.
                4. The relapse plan updated for year two.
              priority: low
              deadlineOffsetDays: 400
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A written one-year review with totals, a booked reward and a lung health question asked of your doctor."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Total up a year of smoke-free days and money saved"
                - "Book or buy the reward the savings were for"
                - "Ask your doctor whether a lung function test suits you"
                - "Update your relapse plan for the second year"
            - name: Stopping smoking in pregnancy or before conceiving
              description: |-
                ## Purpose
                Pregnancy is when many people want to stop most, and midwives and maternity services often run dedicated stop smoking support with carbon monoxide checks at appointments. Getting referred early, and agreeing with your midwife or doctor which aids are suitable, gives you and the baby the most benefit and support.

                ## Milestones
                1. Your midwife or doctor told you smoke or vape and asked for a referral.
                2. A pregnancy stop smoking service appointment booked.
                3. Suitable quit aids agreed with your midwife or doctor.
                4. Your partner and household asked to keep the home and car smoke-free.

                ## Notes
                Some medicines used outside pregnancy are not recommended during it. Check every aid with your midwife or doctor before using it.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A referral to a pregnancy stop smoking service is made and suitable quit aids are agreed with your midwife or doctor."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Tell your midwife or doctor that you smoke or vape"
                - "Ask for a referral to pregnancy stop smoking support"
                - "Check every quit aid with your midwife before using it"
                - "Ask your partner and household to keep home and car smoke-free"
            - name: Smoke-free home and car for children
              description: |-
                ## Purpose
                Second-hand smoke raises children's risk of chest infections, asthma attacks, ear infections and sudden infant death, and opening a window does not clear it. Making the home and car completely smoke-free, even before you have stopped yourself, protects the children now and removes your most familiar smoking spots.

                ## Milestones
                1. A household agreement that nobody smokes inside the home or car.
                2. An outside spot, away from doors and windows, agreed for anyone still smoking.
                3. Visitors and babysitters told the rule.
                4. Three months of a fully smoke-free home and car kept.
              priority: medium
              frontmatter:
                mode: building
                output_kind: habit
                success_criteria: "The home and car have been completely smoke-free for three months, with visitors and carers told the rule."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Agree a smoke-free home and car rule with everyone in the household"
                - "Choose an outside spot away from doors and windows"
                - "Tell visitors, grandparents and babysitters the rule"
                - "Remove ashtrays and lighters from inside the house and car"
            - name: Helping a teenager stop vaping
              description: |-
                ## Purpose
                Teenagers can become dependent on high-strength disposable vapes quickly, often with cravings during lessons and irritability at home. Approaching it calmly, understanding their pattern and getting them to a youth stop smoking service or doctor works far better than confiscation alone, which tends to drive vaping out of sight.

                ## Milestones
                1. A calm first conversation held, focused on how they feel rather than punishment.
                2. Their own reasons for wanting to stop, if any, written down with them.
                3. A youth stop smoking service, school nurse or doctor appointment booked.
                4. A plan agreed for cravings at school and at home, reviewed after a month.

                ## Notes
                Ask the professional about suitable support for their age. Do not give a young person adult quit products without advice.
              priority: medium
              frontmatter:
                mode: service
                output_kind: deliverable
                success_criteria: "Your teenager has had a calm conversation, seen a youth service or clinician and has an agreed plan reviewed after one month."
                cadence: phased
                effort_hours_estimate: "5"
              tasks:
                - "Read a health service guide for parents on teenage vaping"
                - "Choose a calm time to talk and listen more than you speak"
                - "Book an appointment with a youth service or doctor together"
                - "Have a relaxed check-in about how the plan is going @recurring(weekly:sat)"
            - name: Supporting someone close who is quitting
              description: |-
                ## Purpose
                Partners, parents and friends often want to help but end up nagging, checking or saying nothing at all. Asking the person what helps, learning what withdrawal looks like and keeping your own smoking or vaping away from them makes you a real asset rather than another source of pressure.

                ## Milestones
                1. The person asked what help they want and what they do not.
                2. The basics of withdrawal and its timeline understood.
                3. Your own smoking or vaping kept out of their sight and the home.
                4. Their one-week, one-month and three-month milestones marked and acknowledged.
              priority: low
              frontmatter:
                mode: service
                output_kind: habit
                success_criteria: "The help the person asked for is written down and given through their first three months, with each milestone marked."
                cadence: phased
                effort_hours_estimate: "3"
              tasks:
                - "Ask the person what support they want and what irritates them"
                - "Read a short guide to nicotine withdrawal"
                - "Keep your own smoking or vaping away from them"
                - "Ask how their week went, without quizzing them @recurring(weekly:fri)"
                - "Mark their one-month milestone with something they will enjoy"
            - name: Quitting alongside a mental health condition
              description: |-
                ## Purpose
                People with mental health conditions often smoke more heavily and get less help to stop, yet stopping is linked with improved anxiety and mood over time. Involving your mental health team before quit day, so medicine levels and mood can be watched, lets you quit with the right safety net.

                ## Milestones
                1. Your mental health team or doctor told your planned quit date.
                2. Any medicines affected by stopping smoking reviewed by your prescriber.
                3. A mood check-in schedule agreed for the first eight weeks.
                4. Warning signs and who to contact written down and shared with a supporter.

                ## Notes
                Ask about stop smoking support designed for people with mental health conditions; many services offer longer or more intensive programmes.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Your mental health team knows your quit date, medicine levels are reviewed and a written mood check-in plan exists."
                cadence: phased
                effort_hours_estimate: "3"
              tasks:
                - "Tell your mental health team or doctor your planned quit date"
                - "Ask your prescriber whether any medicine needs monitoring"
                - "Agree how often mood will be checked in the first eight weeks"
                - "Write a warning signs card with who to contact"
            - name: Quitting before an operation or after a hospital stay
              description: |-
                ## Purpose
                Smoking raises the risk of wound infection, chest problems and slow healing after surgery, and stopping weeks beforehand helps most, though even a short break before an anaesthetic is better than none. A hospital stay, when you cannot smoke anyway, is also a strong moment to make the break permanent with the hospital's stop smoking team.

                ## Milestones
                1. The pre-operation team or ward told that you smoke or vape.
                2. A referral made to the hospital or community stop smoking service.
                3. Nicotine replacement arranged for the hospital stay if suitable.
                4. A plan in place for staying smoke-free after discharge.

                ## Notes
                Ask the pre-operation team how long before surgery to stop. Their advice depends on the operation.
              priority: medium
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "The surgical or ward team knows your status and a stop smoking referral and discharge plan are in place."
                cadence: phased
                effort_hours_estimate: "3"
              tasks:
                - "Tell the pre-operation team or ward nurse that you smoke or vape"
                - "Ask for a referral to the hospital stop smoking team"
                - "Ask whether nicotine replacement can be provided on the ward"
                - "Write a plan for the first week home after discharge"
            - name: Stopping after decades of smoking
              description: |-
                ## Purpose
                Stopping in your sixties or later still adds years of life and makes breathing, circulation and recovery from illness better, and long-term smokers often succeed when they finally get proper support. Combining a stop smoking service with a check on lung health makes sense for anyone who has smoked for thirty years or more.

                ## Milestones
                1. Your total smoking history worked out in years and amount per day.
                2. A stop smoking service and medicine in place with any other conditions considered.
                3. Your doctor asked about a lung function test and any checks offered to long-term smokers.
                4. Breathlessness, cough or other changes noted and reported rather than put down to age.
              priority: low
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A supported quit attempt is under way and your doctor has been asked about lung checks suited to your smoking history."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Work out how many years you have smoked and roughly how much"
                - "Ask your doctor about lung function tests and checks for long-term smokers"
                - "Make sure your quit medicine is checked against your other medicines"
                - "Write down any cough or breathlessness changes to report"
            - name: Roll-ups, shisha, heated tobacco and nicotine pouches
              description: |-
                ## Purpose
                Quitting cigarettes but keeping roll-ups at weekends, a shisha session with friends, heated tobacco sticks or nicotine pouches can keep dependence alive or replace one habit with another. Taking stock of every nicotine source you use and deciding on purpose what stays and what goes stops a quiet return.

                ## Milestones
                1. Every tobacco and nicotine product you use listed, with how often.
                2. What each one involves understood, from a health service source.
                3. A decision made on each: stopping now, stepping down, or kept for now with a review date.
                4. That decision included in your quit plan and shared with your adviser.

                ## Notes
                A single shisha session can involve far more smoke than one cigarette, and heated tobacco is still tobacco.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "Every nicotine source you use has a written decision, stop, step down or review date, agreed with your adviser."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "List every tobacco or nicotine product you use and how often"
                - "Read a health service page on each product type"
                - "Decide stop, step down or review for each"
                - "Tell your adviser about every product, not just cigarettes"
            - name: Stress-proof relapse prevention for the long term
              description: |-
                ## Purpose
                Ex-smokers who relapse after a year usually do so during a crisis: a bereavement, a breakup, job loss or a hospital vigil. Writing a plan now, while calm, for what you will do when life falls apart, including who to call and which aids to keep at hand, protects years of progress when you least have the energy to think.

                ## Milestones
                1. The life events most likely to tempt you back listed.
                2. A crisis plan written with people to call and aids to use.
                3. An unopened fast-acting nicotine product kept in date at home.
                4. The plan reread and updated every quarter.
              priority: low
              frontmatter:
                mode: operating
                output_kind: artifact
                success_criteria: "A written crisis relapse plan exists, is reviewed every quarter and an in-date emergency quit aid is kept at home."
                cadence: rolling
              tasks:
                - "List the kinds of crisis that could tempt you back"
                - "Write what you will do and who you will call in each"
                - "Keep an unopened fast-acting product at home"
                - "Reread and update the crisis plan @recurring(quarterly)"
                - "Check the emergency product is still in date @recurring(yearly)"
            - name: Becoming a quit buddy for someone else
              description: |-
                ## Purpose
                Once you are well past your first year, your experience is exactly what someone in their first week needs: proof it can be done and practical tips from a real person. Supporting a friend, colleague or volunteer group member also reinforces your own commitment, as long as you set limits that protect your own quit.

                ## Milestones
                1. At least a year smoke-free before offering to support someone.
                2. One person or a peer support group chosen to help.
                3. A clear arrangement made on how and when you will be available.
                4. Your own boundaries written down, including stepping back if it tempts you.
              priority: low
              frontmatter:
                mode: service
                output_kind: habit
                success_criteria: "You are supporting at least one person through their first three months, with an agreed contact arrangement and written boundaries."
                cadence: rolling
              tasks:
                - "Decide whether you are far enough along to support someone"
                - "Offer support to one friend or volunteer with a peer group"
                - "Agree how often and how they can contact you"
                - "Check in with the person you are supporting @recurring(weekly:thu)"
---

# Quitting Smoking & Vaping

This area is for anyone who smokes, vapes or does both and is ready to stop, and for the people around them. It starts with the foundations (your reasons, a two-week pattern log, a stop smoking service, medicine chosen with a professional and a quit date), then the routines that carry you through withdrawal, the skills for riding out cravings and using nicotine replacement properly, the decisions about vaping, cutting down and coming off support, the dated milestones from quit day to one year, the situations that change the plan, such as pregnancy, a teenager who vapes or an operation, and finally the long game of staying stopped.

What repeats is a daily nicotine replacement routine and evening craving note in the early months, weekly support sessions and supply checks, a weekly mood and sleep score, a monthly smoke-free review and a yearly check that your health record shows you as an ex-smoker. The Metrics log, Savings goal, Habit tracker and Purchase decision templates pair with the projects that name them. Installing adds all 50 projects as active, so archive the ones that are not for you yet.
