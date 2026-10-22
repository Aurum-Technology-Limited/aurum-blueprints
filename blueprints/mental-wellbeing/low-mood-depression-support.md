---
id: mental-wellbeing.low-mood-depression-support
name: Low Mood & Depression Support
description: "Weekly activity scheduling that gets you moving again, treatment choices prepared with your doctor, a support network that knows how to help, and plans for the days when everything feels heavy."
category: personal
version: 1.0.0
tags: [mental-wellbeing, low-mood-depression-support, everyone, depression, low-mood, behavioural-activation, support-network, relapse-prevention]
author: Aurum Technology
starter_structure:
  templates:
    - metrics-log
    - habit-tracker
    - household-chores
    - weekly-meal-plan
    - reading-queue
    - purchase-decision
  pillars:
    - name: Mental & Emotional Wellbeing
      emoji: "🧘"
      description: "The inner weather: managing stress and anxiety, recovering from burnout, therapy and support, rest and attention, mood and emotional skills, and the routines that keep a mind steady when life is not."
      pillarFrontmatter:
        review_cadence: monthly
      areas:
        - name: Low Mood & Depression Support
          description: "Managing low mood or depression with activity scheduling, treatment, support networks and plans for difficult days."
          projects:
            - name: Two-week low mood check
              description: |-
                ## Purpose
                Everyone has flat days, but low mood or loss of interest that has been present most days for two weeks or more is the point at which most health services suggest speaking to a doctor. Writing down how long it has gone on, and how it is affecting sleep, appetite, energy, concentration and the things you used to enjoy, turns a vague sense of being stuck into something you can describe clearly in ten minutes.

                ## Milestones
                1. A note of roughly when the low mood started and whether it has been there most days since.
                2. Changes in sleep, appetite, energy, concentration and interest each written in a line.
                3. Any effect on work, study, caring or home life described with one recent example.
                4. A decision recorded on whether to book a doctor's appointment this week.

                ## Notes
                A checklist is not a diagnosis. Its job is to help you describe what is happening to someone qualified to assess it.
              priority: high
              deadlineOffsetDays: 14
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A dated one-page note covering how long the low mood has lasted and changes in sleep, appetite, energy, focus and interest, with a decision about seeing a doctor recorded."
                cadence: one-shot
                effort_hours_estimate: "1"
              tasks:
                - "Write down roughly when the low mood began"
                - "Note one line each on sleep, appetite, energy, focus and interest"
                - "Describe one recent day when the low mood got in the way"
                - "Decide whether to book a doctor's appointment and write the decision down"
            - name: Knowing when low mood needs urgent help
              description: |-
                ## Purpose
                Depression can bring thoughts that life is not worth living, and for some people those thoughts become plans. Knowing in advance which signs mean same-day help, and having the numbers for your doctor's urgent line, a crisis line and emergency services already saved, means nobody has to look them up at the worst possible moment.

                ## Milestones
                1. Your health service's guidance on when to seek urgent mental health help read and noted.
                2. Emergency, crisis line and out-of-hours numbers saved in your phone under one clear name.
                3. The same numbers written on a card kept where you and your household can find it.
                4. One person told where the card is and what it is for.

                ## Notes
                If you are thinking about ending your life or are not sure you can keep yourself safe, contact emergency services or a crisis line now rather than finishing this project.
              priority: high
              deadlineOffsetDays: 7
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Emergency, crisis line and urgent doctor numbers are saved in your phone and on a card, and one named person knows where the card is kept."
                cadence: one-shot
                effort_hours_estimate: "1"
              tasks:
                - "Look up your health service's guidance on urgent mental health help"
                - "Save the crisis line, emergency and out-of-hours numbers in your phone"
                - "Write the same numbers on a card and keep it by your bed"
                - "Tell one person where the card is kept"
                - "Check every number on the card still works @recurring(yearly)"
            - name: First doctor's appointment about low mood
              description: |-
                ## Purpose
                Ten-minute appointments go quickly, and many people leave without saying the thing that matters most. Bringing a short written summary of how long you have felt this way, what has changed and what help you would like means the doctor can assess you properly and you can agree a next step before you walk out.

                ## Milestones
                1. An appointment booked, with a longer slot requested if your practice offers one.
                2. A half-page summary of symptoms, duration and impact ready to hand over or read out.
                3. Any questionnaire the doctor uses completed and the score noted.
                4. The agreed next step, such as a referral, a treatment or a review date, written down the same day.

                ## Notes
                It is fine to read from your notes or hand them over. Say plainly if you have had thoughts of self-harm or suicide; doctors ask because it changes what help is offered.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A doctor's appointment about low mood attended with a written summary in hand, and the agreed next step and review date recorded."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Book a doctor's appointment and ask whether a double slot is available"
                - "Ask the agent to turn your two-week check notes into a half-page summary"
                - "Write your three most important questions at the bottom of the summary"
                - "Record the next step and the review date on the day of the appointment"
            - name: Telling one trusted person how you really are
              description: |-
                ## Purpose
                Many people keep depression hidden because it tells them they are a burden, and they say nothing until things are very bad. Choosing one person, deciding how much to share and where, and having that conversation once makes every later bad day less lonely and gives you someone who can notice changes you might miss.

                ## Milestones
                1. One person chosen who is reliable, calm and not a source of the stress.
                2. Two or three opening sentences written so the conversation is easier to start.
                3. The conversation had, in person, by phone or in writing.
                4. One specific thing agreed that the person can do, such as a weekly message.
              priority: high
              deadlineOffsetDays: 14
              frontmatter:
                mode: building
                output_kind: event-completion
                success_criteria: "One named person has been told about your low mood and has agreed one specific way to support you."
                cadence: one-shot
                effort_hours_estimate: "1"
              tasks:
                - "Write a short list of people who might be safe to tell"
                - "Choose one and decide whether to talk, phone or write"
                - "Draft two or three opening sentences you can say or send"
                - "Have the conversation and agree one thing they can do"
            - name: Checking physical causes of low mood
              description: |-
                ## Purpose
                An underactive thyroid, anaemia, low vitamin D, some prescribed medicines and long-term pain can all cause or deepen low mood and tiredness. Asking your doctor whether blood tests or a medication check are needed means a physical cause is not missed while you work on the mood itself.

                ## Milestones
                1. A list of every medicine, supplement and recreational substance you take, with start dates.
                2. Your doctor asked whether blood tests are appropriate, and any agreed tests done.
                3. Results discussed and the outcome written down.
                4. Any medicine that might affect mood reviewed with your doctor or pharmacist.

                ## Notes
                Do not stop a prescribed medicine because you suspect it affects your mood. Raise it with the prescriber first.
              priority: medium
              deadlineOffsetDays: 45
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A full medication list exists, any blood tests your doctor advised are done, and the outcome on physical causes is written down."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "List every medicine and supplement you take with start dates"
                - "Ask your doctor whether blood tests are needed to rule out physical causes"
                - "Book any blood tests the doctor requests"
                - "Write down what the results showed and what happens next"
            - name: Minimum day plan for the heaviest days
              description: |-
                ## Purpose
                On the worst days ordinary goals feel impossible, and failing them makes the mood worse. A short floor of five or six basics, such as getting dressed, drinking water, eating one proper meal, stepping outside and sending one message, gives you something achievable and stops the day collapsing entirely.

                ## Milestones
                1. A list of no more than six basic actions that count as a minimum day.
                2. The list on paper where you see it first thing, such as the bedside table or fridge.
                3. A line written on what to do if even the minimum feels impossible, such as calling your support person.
                4. The plan used on at least three hard days and adjusted once.
              priority: high
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A written minimum day list of six or fewer actions is on display at home and has been used and revised at least once."
                cadence: one-shot
                effort_hours_estimate: "1"
              tasks:
                - "Write six basic actions that would make a hard day count"
                - "Put the list on the fridge or bedside table"
                - "Add one line on who to contact if the minimum feels impossible"
                - "Tick off what you managed on the next hard day, without judging the gaps"
                - "Cut or swap any step that never happens"
            - name: One-week activity and mood diary
              description: |-
                ## Purpose
                Behavioural activation, one of the best-studied treatments for depression, starts by recording what you actually do each hour and how it felt. A week of honest entries shows where the day drains away, which activities give a sense of achievement or pleasure, and where small changes would help most.

                ## Milestones
                1. An hour-by-hour diary sheet set up for seven days.
                2. Each entry rated from 0 to 10 for achievement and for enjoyment.
                3. Five or more days completed, even if some entries are rough.
                4. Three activities identified that lifted mood and three that flattened it.

                ## Notes
                Fill it in a few times a day rather than once at night, when memory is coloured by tiredness.
              priority: high
              deadlineOffsetDays: 14
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "At least five days of an hourly activity diary with achievement and enjoyment ratings, plus a written list of three lifts and three drains."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Set up a seven-day sheet split into hourly slots"
                - "Write what you did and rate achievement and enjoyment out of ten"
                - "Fill in the diary at lunch, teatime and bedtime each day"
                - "Circle the three highest and three lowest rated activities at the week's end"
            - name: Mapping your support network
              description: |-
                ## Purpose
                Different people help in different ways: one listens well, another drops off shopping, another makes you laugh, and a professional knows what to do when things get worse. A one-page map of who can help with what stops you leaning on a single person until they wear out, and makes it easier to ask for something specific.

                ## Milestones
                1. Friends, family, colleagues and services listed with one strength each.
                2. At least one person or service named for listening, practical help, distraction and professional advice.
                3. Gaps marked where nobody fills a role yet.
                4. The map kept on your phone and updated when someone moves away or drifts.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A support map naming at least one person or service for listening, practical help, distraction and professional advice."
                cadence: one-shot
                effort_hours_estimate: "1"
              tasks:
                - "List everyone who has helped or could help, even a little"
                - "Write next to each name the kind of help they are good at"
                - "Mark roles with nobody in them and one way to fill each"
                - "Review the map and update names that have changed @recurring(quarterly)"
            - name: Self-referral and the waiting list plan
              description: |-
                ## Purpose
                In many places you can refer yourself to a psychological therapy service for depression, but waits of weeks or months are common. Completing the referral now, and planning how to use the waiting time with guided self-help and regular contact with the service, keeps progress going instead of putting life on hold until the first appointment.

                ## Milestones
                1. Your local self-referral route found, or your doctor asked to refer you.
                2. The referral submitted and the reference number saved.
                3. The expected wait, and who to contact if things get worse while waiting, written down.
                4. A plan for the waiting weeks chosen, such as a self-help workbook or online programme.

                ## Notes
                Choosing and working with a particular therapist is a separate piece of work. This project is about getting into the system and not losing the weeks before it starts.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "A referral is submitted with its reference number saved, the expected wait recorded and a self-help plan running while you wait."
                cadence: phased
                effort_hours_estimate: "3"
              tasks:
                - "Search for the self-referral route for psychological therapy where you live"
                - "Complete the referral form and save the reference number"
                - "Ask the service how long the wait is and who to call if you get worse"
                - "Contact the service to confirm you are still on the list @recurring(monthly:3)"
            - name: Weekly activity schedule
              description: |-
                ## Purpose
                Waiting for motivation before acting is how depression keeps people still; behavioural activation reverses the order, because acting usually comes first and motivation follows. Planning the coming week each Sunday, with small achievement and enjoyment activities placed at set times, gives you a plan to follow when your mood would rather you stayed in.

                ## Milestones
                1. A weekly planning slot fixed in the calendar.
                2. Each week's plan holding three achievement and three enjoyment activities at set times.
                3. Every activity small enough to finish on a bad day.
                4. Eight weeks of plans kept, each with a note of what got done.

                ## Notes
                Plan by the clock, not by mood. 'Walk to the shop at 11' works far better than 'go out when I feel like it'.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Eight consecutive weekly schedules exist, each with at least six planned activities and a note of which were completed."
                cadence: rolling
              tasks:
                - "Pick a fixed 20-minute slot on Sunday for planning"
                - "Schedule three achievement and three enjoyment activities with times @recurring(weekly:sun)"
                - "Mark each planned activity done or not done the same evening"
                - "Shrink any activity that was skipped twice in a row"
            - name: Morning anchor routine
              description: |-
                ## Purpose
                Lying in bed for hours is one of the hardest patterns of low mood to break, and irregular mornings unsettle sleep and energy for the rest of the day. A fixed getting-up time and a three-step anchor, such as opening the curtains, drinking a glass of water and getting dressed, gives each day a defined start whatever the mood.

                ## Milestones
                1. A get-up time chosen that you can manage seven days a week.
                2. Three anchor actions chosen and written by the bed.
                3. The routine tracked for 30 days.
                4. The get-up time kept on at least 20 of those days.

                ## Notes
                Start from the **Habit tracker** template. Weekends count too; a lie-in of more than an hour tends to make Monday harder.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A habit tracker shows the morning anchor completed at the chosen get-up time on at least 20 of 30 days."
                cadence: rolling
              tasks:
                - "Choose a get-up time you can keep every day of the week"
                - "Write your three anchor actions on a note by the bed"
                - "Put the alarm across the room from the bed"
                - "Get up at the set time and complete the three anchor actions @recurring(daily)"
            - name: Weekly check-in with your support person
              description: |-
                ## Purpose
                A friend who knows you are struggling often waits to be told they can help, and you may not reach out when it matters most. A standing weekly check-in, by message, call or a walk, means someone hears how the week really went and can spot a downward slide early.

                ## Milestones
                1. A support person agreed and a regular day and format settled.
                2. A short honest answer ready for how the week went, with a score out of ten.
                3. Twelve check-ins completed.
                4. An agreed signal for when you need more than the usual check-in.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Twelve weekly check-ins completed with the same support person, with an agreed signal for needing extra help."
                cadence: rolling
              tasks:
                - "Ask your support person whether a weekly check-in would suit them"
                - "Agree a day, a time and whether it is a call, a message or a walk"
                - "Send a mood score and one line about the week @recurring(weekly:wed)"
                - "Agree a word or phrase that means you need more help than usual"
            - name: Monthly depression score check
              description: |-
                ## Purpose
                Mood improves slowly and unevenly, which makes it hard to tell from the inside whether treatment is working. Completing the same standard questionnaire your clinician uses, once a month on a fixed day, gives a number to compare across months and a clear basis for asking for a change of treatment.

                ## Milestones
                1. The questionnaire your clinician uses identified and a copy saved.
                2. A first score recorded as your starting point.
                3. Scores recorded monthly on the same day for six months.
                4. Recent scores shared at each treatment review.

                ## Notes
                Start from the **Metrics log** template. A score starts a conversation rather than settling one; if any answer about self-harm worries you, contact your doctor that day.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Six monthly questionnaire scores logged on a fixed day and shared at treatment reviews."
                cadence: rolling
              tasks:
                - "Ask your clinician which depression questionnaire they use"
                - "Set up a metrics log with date, score and a comment column"
                - "Complete the questionnaire and log the score @recurring(monthly:14)"
                - "Bring the last three scores to your next review"
            - name: Low-energy household routine
              description: |-
                ## Purpose
                When energy is low the house slides, and the mess becomes more evidence for the inner critic. A cut-down routine that covers only what matters, dishes, bins, one load of washing and clean bedding, keeps home liveable on about 15 minutes a day without the pressure of a full clean.

                ## Milestones
                1. A list of essential jobs only, with everything else marked optional for now.
                2. Each essential job broken into a 10 to 15 minute chunk.
                3. Shortcuts agreed, such as disposable plates on the worst days or a laundry service.
                4. Four weeks of the routine done, with the essentials kept up most days.

                ## Notes
                Start from the **Household chores** template. Lower the bar on purpose; you can raise it again when you are well.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "An essentials-only chore list in use for four weeks, with the weekend reset done on at least three of the four weekends."
                cadence: rolling
              tasks:
                - "Split household jobs into essential and optional for now"
                - "Break each essential job into a 15-minute chunk"
                - "Pick two shortcuts you will allow yourself without guilt"
                - "Do a 30-minute reset of dishes, bins and laundry @recurring(weekly:sat)"
            - name: Easy food for low appetite days
              description: |-
                ## Purpose
                Appetite often flattens or swings towards whatever needs no effort during depression, and skipped meals make energy and mood worse. Keeping a stock of easy, filling options, such as frozen meals, tins, fruit and ready snacks, means eating something decent takes five minutes rather than a decision you cannot face.

                ## Milestones
                1. A list of ten easy meals and snacks you will actually eat.
                2. A freezer and cupboard stock of at least five ready options.
                3. A short repeat shopping list or delivery order set up.
                4. Three regular eating times written into the weekly schedule.

                ## Notes
                Start from the **Weekly meal plan** template. Large changes in appetite or weight are worth mentioning to your doctor.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Ten easy meals listed, at least five kept in stock, and a repeat weekly shop or delivery order set up."
                cadence: rolling
              tasks:
                - "List ten meals or snacks that take five minutes or less"
                - "Stock the freezer and cupboard with at least five of them"
                - "Save a repeat order with your supermarket or delivery app"
                - "Check the easy food stock and top it up @recurring(weekly:thu)"
            - name: Post, bills and admin on low weeks
              description: |-
                ## Purpose
                Unopened letters and missed bills are a common side effect of depression, and the penalties and dread that follow deepen the low mood. A short weekly admin slot, with a rule that you open everything but handle only what is urgent, keeps the pile from growing into a crisis.

                ## Milestones
                1. A single tray or folder where all post goes.
                2. A 20-minute weekly admin slot in the calendar.
                3. Essential bills switched to automatic payment where possible.
                4. Overdue items listed and either dealt with or handed to someone you trust.

                ## Notes
                If debt is part of what is weighing on you, free debt advice services can often speak to creditors on your behalf.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "All post goes to one tray, essential bills are on automatic payment, and the weekly admin slot has run for six weeks."
                cadence: rolling
              tasks:
                - "Put one tray by the door for all incoming post"
                - "Switch essential bills to automatic payment where you can"
                - "Open everything in the tray and deal with urgent items only @recurring(weekly:fri)"
                - "List any overdue item and decide who could help with it"
            - name: Monthly look at what is helping
              description: |-
                ## Purpose
                Without a regular look back it is easy to drop the things that were working and keep the ones that were not. A 30-minute review once a month, covering your score, your activity plans and your notes, shows what to keep, what to change and what to raise at your next appointment.

                ## Milestones
                1. A monthly review slot fixed in the calendar.
                2. Each review noting the month's score, the activities completed and one thing that clearly helped.
                3. One change chosen for the following month.
                4. Six reviews completed and kept together.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Six monthly reviews written, each naming one thing that helped and one change for the next month."
                cadence: rolling
              tasks:
                - "Set a recurring 30-minute review slot in your calendar"
                - "Write the month's score, activities done and one thing that helped @recurring(monthly:22)"
                - "Choose one change to try next month and add it to the weekly plan"
                - "Note anything to raise at your next appointment"
            - name: Movement for mood three times a week
              description: |-
                ## Purpose
                Regular physical activity has good evidence for easing mild to moderate depression, and it does not need to become a gym habit. Three sessions a week of something manageable, a 20-minute walk, a swim, dancing in the kitchen, is a target many clinicians use, and doing it in daylight helps twice over.

                ## Milestones
                1. Three fixed slots in the week for movement.
                2. A default activity for each slot that needs no planning on the day.
                3. A low-energy fallback, such as ten minutes round the block, agreed in advance.
                4. Eight weeks with at least two sessions done in each.

                ## Notes
                Check with your doctor first if you have a heart condition or another reason exercise needs care.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Eight consecutive weeks with at least two of three planned movement sessions completed and ticked off."
                cadence: rolling
              tasks:
                - "Choose three times in the week for 20 minutes of movement"
                - "Pick a default activity for each slot and a ten-minute fallback"
                - "Do the planned movement session, outdoors if you can @recurring(weekly:tue,thu,sat)"
                - "Tick the sessions off on your weekly schedule"
            - name: Planned contact against withdrawal
              description: |-
                ## Purpose
                Pulling away from people is both a symptom of depression and one of the things that keeps it going, because fewer contacts mean fewer moments of warmth or distraction. Planning one small contact each week, a coffee, a call, sitting with someone at a match, keeps relationships alive while the urge to hide is strong.

                ## Milestones
                1. A list of eight people or groups you could contact with little effort.
                2. One contact planned each week in the activity schedule.
                3. Contacts kept short where needed, with a set finish time.
                4. Eight weeks with at least one planned contact completed.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Eight consecutive weeks each with at least one planned contact completed and noted."
                cadence: rolling
              tasks:
                - "List eight people or groups who are easy company"
                - "Message one of them to arrange a short meet-up or call @recurring(weekly:mon)"
                - "Set a finish time in advance if long visits feel too much"
                - "Note after each contact how you felt before and after"
            - name: How depression works and why it sticks
              description: |-
                ## Purpose
                Understanding the cycle of low mood, less activity, fewer rewards and more self-criticism makes the symptoms less frightening and the treatments easier to follow. An hour or two with reputable sources, such as your health service's pages or a clinician-written guide, gives you a working model you can explain to the people around you.

                ## Milestones
                1. Two reputable sources on depression read, from a health service or clinical organisation.
                2. The main symptoms and the low mood cycle sketched in your own words.
                3. Three parts of the cycle you recognise in yourself noted.
                4. Two questions written down for your doctor or therapist.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A one-page sketch of the depression cycle in your own words, with three personal examples and two questions for your clinician."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Read your health service's main page on depression"
                - "Draw the cycle of low mood, withdrawal and self-criticism on one page"
                - "Mark three parts of the cycle you recognise in your own week"
                - "Write two questions about it for your next appointment"
            - name: Working through a behavioural activation workbook
              description: |-
                ## Purpose
                Guided self-help based on behavioural activation or CBT is a first-line option for mild to moderate depression in many health services, and it fits well alongside a waiting list. Working through one well-regarded workbook over six to eight weeks, a chapter a week, teaches the method properly rather than in fragments.

                ## Milestones
                1. One workbook or programme chosen, ideally one recommended by a health service.
                2. A weekly time slot set for reading and exercises.
                3. Each chapter's exercises completed, not just read.
                4. The workbook finished and the three most useful techniques noted.

                ## Notes
                Guided self-help usually works better with a practitioner checking in every week or two; ask your doctor or therapy service whether that is available.
              priority: medium
              deadlineOffsetDays: 60
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "One behavioural activation workbook completed chapter by chapter with its exercises done, and the three most useful techniques written down."
                cadence: phased
                effort_hours_estimate: "12"
              tasks:
                - "Ask your doctor or therapy service which self-help workbook they recommend"
                - "Get the workbook from the library, a bookshop or the service"
                - "Book a weekly hour to work through one chapter and its exercises"
                - "List the three techniques that helped most once you finish"
            - name: Breaking tasks into two-minute first steps
              description: |-
                ## Purpose
                Ordinary tasks look like mountains during depression, so they wait for a good day that does not come. Practising the habit of splitting any task into steps so small that the first takes two minutes, such as finding the form rather than filling it in, gets things moving again and gives quick wins to count.

                ## Milestones
                1. Three stuck tasks chosen and each broken into steps of five minutes or less.
                2. The first step of each task done.
                3. The technique used on at least ten tasks over a month.
                4. A done list kept of tasks moved forward this way.
              priority: low
              frontmatter:
                mode: learning
                output_kind: habit
                success_criteria: "At least ten tasks broken into small steps and moved forward within a month, recorded on a done list."
                cadence: phased
                effort_hours_estimate: "3"
              tasks:
                - "Pick three tasks you have been avoiding for more than a week"
                - "Break each into steps that take five minutes or less"
                - "Do the first step of one task today"
                - "Keep a done list of every task you move forward this way"
            - name: Noticing rumination and switching to action
              description: |-
                ## Purpose
                Going over and over why you feel bad, what is wrong with you and what you should have done feels like problem-solving but usually deepens low mood. Learning to spot your usual brooding times and cues, and having a planned switch to something absorbing or practical, shortens the spirals.

                ## Milestones
                1. Three common times or places where brooding starts identified.
                2. A two-question check written down: am I closer to a solution, and is there one small step I can take now.
                3. A list of four absorbing activities to switch to.
                4. The switch practised and logged on at least ten occasions.
              priority: low
              frontmatter:
                mode: learning
                output_kind: habit
                success_criteria: "Brooding cues identified, a switch list written and the switch logged on at least ten occasions."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Note the times and places when brooding usually starts"
                - "Write the two-question check on a card or phone note"
                - "List four absorbing activities that need your hands or attention"
                - "Log each time you notice brooding and switch to one of them"
            - name: Choosing activities that match your values
              description: |-
                ## Purpose
                Once the basics are back, a schedule full of chores starts to feel empty. Identifying what matters to you in areas such as relationships, work, health, creativity and community, and choosing activities that serve those values, gives recovery a direction rather than just a to-do list.

                ## Milestones
                1. Values written in a sentence each for four or five life areas.
                2. Two small activities listed under each value.
                3. At least one values activity in every week's schedule.
                4. Values reviewed after six weeks and adjusted.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Values written for at least four life areas with two activities each, and one values activity scheduled weekly for six weeks."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Write one sentence on what matters to you in each of five life areas"
                - "List two small activities that would serve each value"
                - "Add one values activity to next week's schedule"
                - "Check after six weeks which values still feel true"
            - name: Testing what lifts your mood
              description: |-
                ## Purpose
                Advice on what helps depression is general; what helps you is specific. Treating six candidate activities as experiments, rating mood before and after each one several times, separates the things that genuinely lift you from the ones you assume should.

                ## Milestones
                1. Six candidate activities chosen from your activity diary and other suggestions.
                2. Each tried at least three times with a mood rating before and after.
                3. The average change for each activity worked out.
                4. The top three kept in the weekly schedule and the rest dropped without guilt.
              priority: low
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "Six activities each tested three times with before and after ratings, and a ranked list of the top three recorded."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Pick six activities to test, including at least two outdoors"
                - "Rate your mood out of ten before and after each attempt"
                - "Work out the average change for each activity after three tries"
                - "Move the top three into your regular weekly plan"
            - name: Taming oversleeping and long naps
              description: |-
                ## Purpose
                Some people with depression sleep ten or twelve hours and still wake exhausted, while long afternoon naps push bedtime later and the cycle repeats. Gradually fixing a consistent wake time and keeping any nap short and early is one of the simpler levers on energy.

                ## Milestones
                1. A week of sleep and wake times recorded as a starting point.
                2. A target wake time set and moved earlier by no more than 30 minutes a week.
                3. Naps limited to 20 minutes and finished before mid-afternoon.
                4. A month with the target wake time kept on most days.

                ## Notes
                Very early waking, very little sleep or a sudden drop in the need for sleep are worth reporting to your doctor promptly.
              priority: low
              frontmatter:
                mode: building
                output_kind: habit
                success_criteria: "A consistent wake time held on at least 22 days in a month, with naps capped at 20 minutes, shown in a simple sleep record."
                cadence: phased
                effort_hours_estimate: "3"
              tasks:
                - "Write down your sleep and wake times for seven days"
                - "Set a target wake time and move it earlier by 30 minutes a week"
                - "Set a 20-minute alarm whenever you nap"
                - "Tell your doctor if sleep keeps getting worse despite the changes"
            - name: Recovery stories reading list
              description: |-
                ## Purpose
                Reading how others have lived through depression and come out the other side can counter the conviction that it will never lift. A short list of memoirs and clinician-written books, taken slowly with a note of what rings true, adds hope and practical ideas to the more structured work.

                ## Milestones
                1. Six books, essays or podcasts listed, mixing memoir and clinical guides.
                2. At least three read or listened to.
                3. One idea or line from each noted.
                4. One recommendation passed on to someone who might need it.

                ## Notes
                Start from the **Reading queue** template. Stop any book that leaves you feeling worse; there is no prize for finishing.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Three or more recovery books or podcasts finished from a list of six, with one useful idea noted from each."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "Ask your library, clinician or friends for recovery memoir suggestions"
                - "Build a list of six books, essays or podcasts"
                - "Read or listen for 20 minutes on three evenings a week"
                - "Write one useful idea from each finished item"
            - name: Weighing treatment options with your doctor
              description: |-
                ## Purpose
                Depending on severity and history, the usual options include guided self-help, talking therapy, antidepressants or a combination, and the right choice depends on your preferences as much as on guidelines. Preparing your own view of each option before the conversation turns a rushed recommendation into a shared decision you are more likely to stick with.

                ## Milestones
                1. A one-line summary of each main option written from reputable sources.
                2. Your preferences, past experience and practical limits such as cost and time noted.
                3. The options discussed with your doctor and their recommendation recorded.
                4. A decision made, with a date to review whether it is working.

                ## Notes
                Your doctor knows your history and severity. This preparation helps you take part in the decision; it does not replace their judgement.
              priority: high
              deadlineOffsetDays: 60
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A treatment decision agreed with your doctor, with the options considered and the review date written down."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Read your health service's summary of depression treatment options"
                - "Write your preferences and past experience next to each option"
                - "Book an appointment to discuss the options with your doctor"
                - "Record the decision and the date to review it"
            - name: Questions to settle before starting an antidepressant
              description: |-
                ## Purpose
                Antidepressants usually take several weeks to help, can cause early side effects and should not be stopped suddenly, yet many people start one without hearing any of that. Going in with a written set of questions means you leave knowing what to expect, when to follow up and who to call if something worries you.

                ## Milestones
                1. Questions written on timescale, common side effects, interactions, alcohol and stopping.
                2. Answers from your doctor or pharmacist noted.
                3. A follow-up appointment booked for the first few weeks.
                4. A decision recorded on whether to start, with your reasons.

                ## Notes
                Never change or stop an antidepressant without talking to your prescriber, even when you feel better.
              priority: medium
              deadlineOffsetDays: 60
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A written list of questions answered by your doctor or pharmacist, a follow-up booked and your decision on starting recorded."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Write your questions about timescale, side effects and stopping"
                - "Ask the pharmacist about interactions with your other medicines"
                - "Book a follow-up for the first few weeks if you decide to start"
                - "Write down your decision and the reasons for it"
            - name: Choosing a self-help app or online programme
              description: |-
                ## Purpose
                Hundreds of mood apps exist, few have been tested, and some share sensitive data widely. Comparing two or three that are recommended by a health service or have published trials, on method, cost and privacy, finds one worth using for a few months rather than downloading and abandoning several.

                ## Milestones
                1. Three candidates found from a health service app library or a clinician's recommendation.
                2. Each checked for the method used, evidence, cost and privacy policy.
                3. One chosen and used for four weeks.
                4. A decision recorded on whether to keep it.

                ## Notes
                Start from the **Purchase decision** template.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "One app or online programme chosen after comparing three on evidence, cost and privacy, used for four weeks and then kept or dropped."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Look for mood apps listed in a health service app library"
                - "Compare three on method, evidence, cost and privacy policy"
                - "Use the chosen one for four weeks"
                - "Decide whether to keep paying for or using it"
            - name: Trimming commitments while you recover
              description: |-
                ## Purpose
                Trying to keep every role and obligation going at full strength while depressed usually means everything suffers, recovery included. Listing your commitments and deciding which to pause, hand over or shrink for three months frees energy for treatment and for the activities that help.

                ## Milestones
                1. Every regular commitment listed with the hours it takes each week.
                2. Each marked keep, shrink, hand over or pause for three months.
                3. The people affected told, using a short prepared message.
                4. A date set to review the paused commitments.
              priority: medium
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A commitments list with each item marked keep, shrink, hand over or pause, the people affected told, and a review date set."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "List every regular commitment and the hours it takes"
                - "Mark each one keep, shrink, hand over or pause"
                - "Draft a short message for the people affected by the changes"
                - "Set a date three months out to review what was paused"
            - name: Small changes to your living space
              description: |-
                ## Purpose
                A dark, cluttered room that you barely leave reinforces low mood. A few cheap changes, brighter bulbs, curtains open by day, one clear surface, a chair by the window, make the space you spend most time in a little easier to be in, without a big tidy-up you cannot face.

                ## Milestones
                1. The room where you spend most time chosen.
                2. Three small changes listed that cost little and take under an hour each.
                3. All three changes made.
                4. One surface kept clear for two weeks.
              priority: low
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "Three small changes completed in your main room, with one surface kept clear for two weeks."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Choose the room you spend most time in"
                - "List three changes that cost little and take under an hour"
                - "Make the first change today"
                - "Clear one surface and keep it clear for two weeks"
            - name: Sick pay and income while unwell
              description: |-
                ## Purpose
                Money worry is one of the strongest drivers of low mood, and people too unwell to work full time often miss sick pay, insurance or income support they are entitled to. Checking your employment terms and the support available where you live, ideally with a free advice service, removes one source of dread.

                ## Milestones
                1. Your contract or staff handbook checked for sick pay terms.
                2. Any income protection or insurance cover identified.
                3. A free advice service consulted about income support you may be entitled to.
                4. Any claims made and their reference numbers saved.

                ## Notes
                Rules differ by country and employer. An independent advice service can check your situation without charging.
              priority: medium
              deadlineOffsetDays: 30
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "Sick pay terms, any insurance cover and possible income support checked with an adviser, and any claims submitted with references saved."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Find the sick pay section in your contract or staff handbook"
                - "Check whether you have income protection or similar insurance"
                - "Book a call with a free advice service about income support"
                - "Save the reference number for every claim you make"
            - name: Four-week alcohol-free mood experiment
              description: |-
                ## Purpose
                Alcohol is a depressant, disturbs sleep and is often used to blunt low mood, which tends to make the next day worse. Four weeks without it, with mood and sleep scored each evening, shows how much drinking is affecting you and makes the decision about what comes next yours rather than a vague worry.

                ## Milestones
                1. A start date chosen and alcohol cleared from the house.
                2. Mood and sleep scored daily for four weeks.
                3. The usual drinking times noted, with an alternative planned for each.
                4. A decision recorded on drinking after the four weeks.

                ## Notes
                If you drink heavily every day, talk to your doctor before stopping, because sudden withdrawal can be dangerous.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "Four weeks alcohol-free with mood and sleep scores logged, and a written decision about drinking afterwards."
                cadence: phased
                effort_hours_estimate: "2"
              tasks:
                - "Choose a start date and clear alcohol from the house"
                - "Plan an alternative for the time of day you usually drink"
                - "Score mood and sleep each evening for four weeks"
                - "Write down what changed and what you will do next"
            - name: Rebuilding one hobby you have dropped
              description: |-
                ## Purpose
                Losing interest in things you used to love is one of the core signs of depression, and waiting for the interest to return rarely works. Restarting one hobby at a much smaller scale, ten minutes of guitar, one row of knitting, one short bike ride, often brings enjoyment back slowly after the activity itself.

                ## Milestones
                1. One dropped hobby chosen and its smallest possible version defined.
                2. Any kit found, repaired or replaced.
                3. The hobby done weekly for eight weeks.
                4. Enjoyment rated each time to show the trend.
              priority: medium
              frontmatter:
                mode: building
                output_kind: habit
                success_criteria: "One dropped hobby restarted and done at least weekly for eight weeks, with enjoyment rated each time."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Choose one hobby you used to enjoy"
                - "Define a version of it that takes ten minutes"
                - "Get the kit out and leave it where you will see it"
                - "Spend a short session on the hobby and rate enjoyment @recurring(weekly:wed)"
            - name: Writing a how-to-help-me note
              description: |-
                ## Purpose
                People who care about you often do the wrong thing out of kindness, such as cheerful pep talks or leaving you alone, because they do not know what helps. A one-page note in your own words, covering what depression is like for you, what helps, what does not and which signs mean you are getting worse, saves repeating painful explanations.

                ## Milestones
                1. What a bad day is like for you described in three or four sentences.
                2. Five things that help and five that do not listed.
                3. Your signs of getting worse, and what you would like people to do, written down.
                4. The note shared with at least two people in your support network.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A one-page note covering what helps, what does not and your warning signs, shared with at least two named people."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Describe what a bad day is like for you in a few sentences"
                - "List five things that help and five that do not"
                - "Ask the agent to tidy your notes into a one-page letter"
                - "Share the note with two people in your support network"
            - name: Six-week treatment review appointment
              description: |-
                ## Purpose
                Most treatments for depression are reviewed after a few weeks to check whether they are helping, whether side effects are a problem and whether a change is needed. Arriving with your scores, activity notes and a clear view of what has and has not changed makes it far more likely the review ends in a decision rather than a vague plan to wait and see.

                ## Milestones
                1. The review booked before the six-week point.
                2. Scores and activity notes since starting treatment gathered on one page.
                3. Your view of what has improved, what has not and any side effects written down.
                4. The outcome, whether keep, adjust or change, recorded with the next review date.
              priority: high
              deadlineOffsetDays: 56
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A treatment review attended with a one-page progress summary, and the outcome and next review date recorded."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Book the treatment review for around six weeks after starting"
                - "Gather your scores and activity notes onto one page"
                - "Write what has improved, what has not and any side effects"
                - "Record the outcome and the date of the next review"
            - name: Getting through the festive season while low
              description: |-
                ## Purpose
                Holiday periods bring pressure to feel happy, broken routines, more alcohol, family tension and closed services, which together make them a common low point. Planning in advance which events to attend, where to take breaks, how to keep the morning routine and who to call when services close makes the season survivable.

                ## Milestones
                1. The season's events and gatherings listed and each marked go, short visit or skip.
                2. An exit time and a quiet space planned for the bigger gatherings.
                3. Your basic routine kept on most days, including get-up time and movement.
                4. Holiday opening hours for your practice and crisis lines saved in your phone.
              priority: low
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A season plan with every event marked, exit plans for large gatherings and holiday service hours saved before the season begins."
                cadence: cyclic
                effort_hours_estimate: "2"
              tasks:
                - "List the season's events and mark each go, short visit or skip"
                - "Plan an exit time and a quiet place for each big gathering"
                - "Save holiday opening hours for your practice and crisis lines"
                - "Start the season plan six weeks before the holidays @recurring(yearly)"
            - name: A planned day out as a recovery marker
              description: |-
                ## Purpose
                A day out that would have felt impossible a few months ago is a real sign of progress, and planning it gives the weeks before something to look forward to. Keeping it modest, a train trip to a nearby town, a museum and a café, with a companion and a plan B, makes it likely to happen.

                ## Milestones
                1. A destination chosen within easy reach of home.
                2. A companion invited and a date fixed.
                3. Travel, timings and a shorter plan B written down.
                4. The day done and a few lines written about it afterwards.
              priority: low
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A planned day out completed with a companion, with a short written note about how it went."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Pick a destination within an hour or so of home"
                - "Invite one companion and fix a date"
                - "Write the travel plan and a shorter plan B"
                - "Write a few lines about the day on the evening after"
            - name: Three-month progress letter to yourself
              description: |-
                ## Purpose
                Memory gets edited by low mood, so on a bad day it can seem that nothing has changed. Writing a letter at the three-month mark, listing what has improved, what you learned and what you would tell yourself on day one, gives you evidence to reread when the mood dips again.

                ## Milestones
                1. Scores, diaries and review notes from the first three months gathered.
                2. A letter written covering what changed, what helped and what still needs work.
                3. The letter kept somewhere you can find quickly on a bad day.
                4. One trusted person shown the letter, if you choose.
              priority: low
              deadlineOffsetDays: 90
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A dated three-month letter summarising change, what helped and what remains, saved where you can reach it on a bad day."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Gather your scores, diaries and review notes from three months"
                - "Write what has changed, even in small ways"
                - "Add what you would tell yourself on the first day"
                - "Save the letter where you can find it within a minute"
            - name: Building back to a full ordinary week
              description: |-
                ## Purpose
                Recovery usually returns unevenly, with good days followed by flat ones, and jumping straight back into a packed week risks a setback. Increasing commitments step by step over eight to twelve weeks, adding one area at a time and checking your score after each step, gets you back to a full ordinary week more reliably.

                ## Milestones
                1. A picture of a full ordinary week written down.
                2. The steps from now to there listed in order, one area of life at a time.
                3. Each step held for at least two weeks before adding the next.
                4. A full ordinary week completed with mood holding steady.
              priority: medium
              deadlineOffsetDays: 120
              frontmatter:
                mode: building
                output_kind: habit
                success_criteria: "A step-by-step plan from current activity to a full ordinary week, each step held for two weeks and a full week completed."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Describe what a full ordinary week looks like for you"
                - "List the steps between this week and that one"
                - "Add the next step only after two steady weeks"
                - "Note your mood score at each step"
            - name: Parenting through a depressive episode
              description: |-
                ## Purpose
                Parents with depression often feel guilty about being less patient, less playful and more tired, and push on without help until something gives. Arranging backup for the hardest parts of the day, simplifying routines and explaining in age-appropriate words that you are unwell and it is not their fault protects both you and the children.

                ## Milestones
                1. The hardest parts of the parenting day identified, such as mornings or bedtime.
                2. Backup arranged for at least one of them from a partner, relative or friend.
                3. An age-appropriate explanation for the children planned and given.
                4. Two easy default activities ready for low days, such as a film afternoon or the park.

                ## Notes
                Your health visitor, school nurse or doctor can point you to family support services. Asking for help is a parenting skill, not a failure.
              priority: medium
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "Backup arranged for the hardest part of the parenting day and a simple explanation given to the children."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Write down the two hardest points in the parenting day"
                - "Ask one person to cover one of them each week"
                - "Plan a short, age-appropriate explanation for the children"
                - "List two easy default activities for low-energy days"
            - name: Supporting a partner or relative with depression
              description: |-
                ## Purpose
                Living with someone who is depressed is draining, and carers' own mood often drops too. Learning what helps, agreeing your role with the person, encouraging rather than pushing treatment, and protecting time for yourself keeps the support going for months rather than burning out in weeks.

                ## Milestones
                1. A reputable guide for family and friends of people with depression read.
                2. A conversation had with the person about what they want from you.
                3. Your own limits and support written down, including someone you can talk to.
                4. A regular block of time for yourself in the calendar.

                ## Notes
                If you are worried the person may harm themselves, contact their doctor, a crisis line or emergency services. You do not need their permission to seek urgent help.
              priority: medium
              frontmatter:
                mode: service
                output_kind: habit
                success_criteria: "A support conversation held, your own limits and support written down, and a monthly self-check kept for three months."
                cadence: rolling
              tasks:
                - "Read a family and friends guide from a mental health charity"
                - "Ask the person what helps and what does not"
                - "Name one person you can talk to about how you are coping"
                - "Check how your own mood and energy are holding up @recurring(monthly:18)"
            - name: Low mood in later life
              description: |-
                ## Purpose
                In older age, depression is often mistaken for normal ageing or put down to physical illness, and it can follow retirement, bereavement, giving up driving or a move. Raising it directly with the doctor, checking medicines and hearing, and finding daytime structure through groups, volunteering or classes all make treatment more likely to work.

                ## Milestones
                1. Low mood raised with the doctor as its own concern, not a side note.
                2. A medicines review done with the doctor or pharmacist.
                3. Hearing and eyesight checks booked if they are overdue.
                4. One regular daytime activity outside the home found and attended three times.
              priority: medium
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "Low mood raised with the doctor, a medicines review done and one regular daytime activity attended at least three times."
                cadence: phased
                effort_hours_estimate: "5"
              tasks:
                - "Book an appointment and say clearly that it is about low mood"
                - "Ask the pharmacist for a full medicines review"
                - "Book any overdue hearing or eyesight check"
                - "Find one daytime group, class or volunteering slot nearby"
            - name: Studying with depression
              description: |-
                ## Purpose
                Concentration and memory take the first hit, which students feel as missed deadlines and falling marks. Registering with student support, asking about extensions or extenuating circumstances early, and shrinking the study plan to what is achievable protects your course while you get treatment.

                ## Milestones
                1. Your institution's student wellbeing or disability service contacted.
                2. The rules for extensions and extenuating circumstances read and their deadlines noted.
                3. Supporting evidence requested from your doctor if needed.
                4. A reduced study plan agreed with a tutor.
              priority: medium
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "Student support contacted, any extension or extenuating circumstances claim submitted on time and a reduced study plan agreed with a tutor."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Email your student wellbeing service to ask for an appointment"
                - "Read your institution's rules on extensions and extenuating circumstances"
                - "Ask your doctor for a letter if the claim needs evidence"
                - "Agree a reduced study plan with your personal tutor"
            - name: Spotting low mood in a teenager at home
              description: |-
                ## Purpose
                Teenage depression can look like irritability, withdrawal, sleeping all day or dropping friends rather than obvious sadness, so parents often miss it or treat it as moodiness. Noting changes over a few weeks, talking without lecturing and involving the doctor or school early gives a young person the best chance of quick help.

                ## Milestones
                1. Changes in sleep, eating, friendships, schoolwork and irritability noted over two to three weeks.
                2. A calm, low-pressure conversation had, ideally side by side in the car or on a walk.
                3. The school pastoral team or family doctor contacted.
                4. A next step agreed with the young person.

                ## Notes
                If a young person talks about self-harm or suicide, contact your doctor or a crisis line the same day.
              priority: medium
              frontmatter:
                mode: service
                output_kind: deliverable
                success_criteria: "Changes noted over at least two weeks, a conversation held, and the school or doctor contacted with a next step agreed."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Write down the changes you have noticed and when they started"
                - "Choose a relaxed moment, such as a drive, to ask how they are"
                - "Contact the school pastoral team or the family doctor"
                - "Agree the next step together and write it down"
            - name: Staying-well plan after recovery
              description: |-
                ## Purpose
                Relapse is common once depression lifts, and it is easiest to head off in its first weeks. Writing down your personal early warning signs, the triggers that came before past episodes and the steps you will take at each level of concern means you and your supporters can act within days rather than months.

                ## Milestones
                1. Early warning signs listed from your own past episodes, such as cancelling plans or waking at 4am.
                2. Known triggers listed, such as winter, work peaks or anniversaries.
                3. Actions written for three levels: early signs, worsening, and needing urgent help.
                4. The plan shared with your doctor and support person.

                ## Notes
                Keep treatment going for as long as your clinician advises after you feel better; stopping early is one of the commonest causes of relapse.
              priority: high
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A written staying-well plan with warning signs, triggers and three levels of action, shared with your clinician and support person."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "List the first changes you noticed before past low spells"
                - "Write down the triggers that came before earlier episodes"
                - "Write actions for early signs, worsening and needing urgent help"
                - "Share the plan with your doctor and support person"
                - "Reread the plan and check the warning signs are current @recurring(quarterly)"
            - name: Treatment history summary for new clinicians
              description: |-
                ## Purpose
                Changing doctors, moving area or seeing a specialist often means starting from scratch, and people forget which treatments they tried and why they stopped. A one-page history of episodes, treatments, durations and responses saves appointment time and avoids repeating things that did not work.

                ## Milestones
                1. Each episode listed with approximate dates and severity.
                2. Every treatment listed with how long it was tried, what it did and why it ended.
                3. Current treatment, contacts and preferences added.
                4. The summary saved where you can share it quickly.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A one-page treatment history listing episodes and every treatment tried with duration and response, saved and ready to share."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "List past episodes of depression with rough dates"
                - "Write each treatment tried, for how long and what happened"
                - "Ask the agent to lay the notes out as a one-page table"
                - "Add any treatment changes from the past year to the summary @recurring(yearly)"
            - name: Preparing for a specialist mental health referral
              description: |-
                ## Purpose
                When two or more treatments given a fair trial have not helped, or depression is severe or keeps returning, doctors may refer to a specialist mental health team or psychiatrist. Preparing your history, scores and questions, and knowing what the assessment involves, gets the most from an appointment that may have taken months to reach.

                ## Milestones
                1. The reason for referral and the expected wait confirmed with your doctor.
                2. Your treatment history summary and recent scores ready.
                3. Questions written about further options and what happens next.
                4. The assessment attended and the plan recorded.
              priority: medium
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A specialist assessment attended with treatment history and scores in hand, and the resulting plan recorded."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Ask your doctor whether a specialist referral is appropriate and why"
                - "Confirm the expected wait and who to contact in the meantime"
                - "Write your questions about further treatment options"
                - "Record the plan agreed at the assessment"
            - name: Annual well-period review for recurrent depression
              description: |-
                ## Purpose
                For people who have had several episodes, the long stretches of feeling well are when the most useful prevention work happens. A yearly review of the staying-well plan, any maintenance treatment, the year's mood pattern and the protective habits that have slipped keeps relapse prevention current rather than forgotten.

                ## Milestones
                1. A yearly review date set, ideally in a calm month.
                2. The year's scores and any low spells summarised on one page.
                3. Maintenance treatment discussed with your clinician.
                4. The staying-well plan and support map updated.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A yearly review completed with the year's mood summary, a maintenance treatment conversation and an updated staying-well plan."
                cadence: cyclic
              tasks:
                - "Pick a calm month for your yearly well-period review"
                - "Summarise the year's scores and any low spells on one page"
                - "Book a maintenance review with your clinician @recurring(yearly)"
                - "Update the staying-well plan and support map with what you learned"
---

# Low Mood & Depression Support

This area is for anyone living with low mood or depression, whether it is a flat patch that has dragged on for weeks or a diagnosed episode already under treatment. It starts with foundations (a symptom check, urgent help numbers, a first doctor's appointment, telling one person and a minimum plan for the worst days), then the weekly routines of activity scheduling, contact and movement, the skills of behavioural activation, treatment and practical decisions, recovery milestones, versions for parents, carers, students and older adults, and finally relapse prevention for depression that comes back.

The rhythm is mostly weekly: a Sunday activity plan, a Monday contact, a Wednesday check-in with your support person, three movement sessions, a Thursday food top-up and a Friday and Saturday reset of admin and the house, with a monthly questionnaire score and progress review, a quarterly look at your staying-well plan and a yearly well-period review. The Metrics log, Habit tracker, Household chores, Weekly meal plan, Reading queue and Purchase decision templates pair with the projects that name them. Installing adds all 50 projects as active, so archive the ones that are not for you yet.
