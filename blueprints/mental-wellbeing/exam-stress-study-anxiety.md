---
id: mental-wellbeing.exam-stress-study-anxiety
name: Exam Stress & Study Anxiety
description: "An exam calendar and honest targets, a revision plan with real rest, calming and exam-hall skills that hold under pressure, plans for results day and resits, and versions for school, university, mature and professional students."
category: personal
version: 1.0.0
tags: [mental-wellbeing, exam-stress-study-anxiety, student, test-anxiety, revision, exam-season, results-day]
author: Aurum Technology
starter_structure:
  templates:
    - meeting-notes
    - habit-tracker
    - sleep-review
    - metrics-log
    - weekly-meal-plan
    - operational-checklist
  pillars:
    - name: Mental & Emotional Wellbeing
      emoji: "🧘"
      description: "The inner weather: managing stress and anxiety, recovering from burnout, therapy and support, rest and attention, mood and emotional skills, and the routines that keep a mind steady when life is not."
      pillarFrontmatter:
        review_cadence: monthly
      areas:
        - name: Exam Stress & Study Anxiety
          description: "Managing anxiety around exams and deadlines with revision balance, sleep, calming techniques and realistic expectations."
          projects:
            - name: Exam calendar with dates, rooms and weightings
              description: |-
                ## Purpose
                Much of the dread before an exam season comes from not knowing exactly what is coming and when. Putting every paper, coursework deadline and practical onto one calendar, with its time, room, length and share of the final grade, turns a vague cloud into a fixed list you can plan against, and it shows early where two exams land on the same day.

                ## Milestones
                1. Every exam, coursework deadline and practical for the season listed in one place.
                2. Each entry showing date, start time, room or venue, length and percentage of the final grade.
                3. Clashes, back-to-back days and gaps of more than a week highlighted.
                4. The calendar saved on your phone and printed above your desk.

                ## Notes
                Timetables change. Check the official source rather than a classmate's screenshot, and look again the week before each paper.
              priority: high
              deadlineOffsetDays: 7
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A single calendar lists every assessment in the season with date, time, venue, length and grade weighting, and is visible on your phone and desk."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Download the official exam timetable from your school or university portal"
                - "Add coursework deadlines and practical assessments from each module handbook"
                - "Ask the agent to turn the timetable into a list sorted by date with weightings"
                - "Highlight clashes and any day with two papers"
                - "Check the official timetable for room or time changes the week before each exam"
            - name: Test anxiety self-rating baseline
              description: |-
                ## Purpose
                Before trying to change anything, measure where you are starting from. Published test anxiety questionnaires such as the Westside Test Anxiety Scale take about ten minutes and separate worry, physical tension and the thoughts that block recall; a dated score gives you something to compare against after a term of practice and a clear summary to show a tutor or counsellor.

                ## Milestones
                1. One published test anxiety questionnaire completed in a single sitting.
                2. The total score and the three highest-rated items written down with the date.
                3. A note on whether worry, body tension or blanking out is the strongest part for you.
                4. A reminder set to retake the same questionnaire next term.

                ## Notes
                A questionnaire score is a description, not a diagnosis. If your score is very high or anxiety is affecting sleep and eating, take it to your doctor or student support service.
              priority: high
              deadlineOffsetDays: 14
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A dated score from a named test anxiety questionnaire is recorded with the top three items, and a retake date is set."
                cadence: one-shot
                effort_hours_estimate: "1"
              tasks:
                - "Find a freely available published test anxiety questionnaire"
                - "Answer every item in one sitting, thinking of your last exam season"
                - "Record the total score, the date and your three highest items"
                - "Retake the same questionnaire and compare the score @recurring(quarterly)"
            - name: Map of how exam stress shows up for you
              description: |-
                ## Purpose
                Exam stress rarely looks the same in two people: one student stops sleeping, another revises fourteen hours a day, another cannot open the books at all. Writing down your own signs in body, thoughts, mood and behaviour, and what tends to set them off, means you notice the pattern in week two rather than the night before the first paper.

                ## Milestones
                1. A one-page map with four columns: body, thoughts, feelings and behaviour.
                2. At least three personal triggers named, such as a mock result, a friend's revision hours or a parent's question.
                3. Your earliest warning sign circled.
                4. One first response written next to the earliest sign.
              priority: medium
              deadlineOffsetDays: 21
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A one-page map lists your stress signs in four columns, names three triggers and marks the earliest warning sign with a planned response."
                cadence: one-shot
                effort_hours_estimate: "1"
              tasks:
                - "List what changed in your body during your last exam season"
                - "Write the thoughts that looped most often in the week before an exam"
                - "Name three moments that reliably made the stress worse"
                - "Circle the sign you usually notice first and write one thing to do when it appears"
            - name: Realistic grade targets agreed with a tutor
              description: |-
                ## Purpose
                Anxiety grows when the stakes in your head are higher than the stakes in reality, for example believing you need top marks everywhere when your offer or progression rule asks for something lower. Finding out exactly what grades your next step requires, and agreeing a realistic target for each subject with a tutor, separates what you need from what you would like.

                ## Milestones
                1. The exact grade, credit or pass requirement for your next step written down from the official source.
                2. A tutor meeting held to agree a realistic target for each subject based on current work.
                3. Each subject marked as need, want or bonus.
                4. The agreed targets written at the top of your revision plan.

                ## Notes
                Start from the **Meeting notes** template. If your predicted and required grades are far apart, ask the tutor about realistic alternatives now rather than after results.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A written list gives an agreed realistic target per subject, labelled need, want or bonus, backed by notes from a tutor meeting."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Look up the exact grades or credits your next step requires"
                - "Email a tutor to book a 20-minute meeting about realistic targets"
                - "Bring your latest marks and ask what target is realistic for each subject"
                - "Label every subject need, want or bonus in your plan"
            - name: Topic list with confidence ratings by subject
              description: |-
                ## Purpose
                Revision feels endless when it is a blob called everything. Breaking each subject into its syllabus topics and rating your confidence in each as red, amber or green shows the real size of the job, which is almost always smaller than the dread suggests, and tells you where hours will make the biggest difference.

                ## Milestones
                1. Every subject broken into topics using the official syllabus or module outline.
                2. Each topic rated red, amber or green for current confidence.
                3. A rough hours estimate written beside each red and amber topic.
                4. The total hours compared with the days left before the first exam.
              priority: high
              deadlineOffsetDays: 14
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A topic list covers every subject from the official syllabus, with a red, amber or green rating and an hours estimate for each weak topic."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Download the syllabus or module outline for each subject"
                - "List every topic under its subject in one document"
                - "Rate each topic red, amber or green in one quick pass"
                - "Add an hours estimate to every red and amber topic"
            - name: Balanced revision timetable with protected rest
              description: |-
                ## Purpose
                Timetables that fill every waking hour fall apart within a week and leave you feeling you have already failed. A plan built from your topic list, with fixed finish times, one day or two half-days off each week and buffer slots for what overruns, is the one you will actually keep, and rest you planned in advance does not come with guilt.

                ## Milestones
                1. Revision blocks of 25 to 50 minutes scheduled across the weeks to the first exam.
                2. A daily finish time and at least one day or two half-days off each week written in.
                3. Red topics placed early and revisited at least twice.
                4. Two buffer slots per week left empty for catch-up.
                5. The timetable followed for two weeks and adjusted once.

                ## Notes
                Most students overestimate how much they can do in a day. Plan for five or six focused hours on a full revision day and treat anything beyond that as a bonus.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A written timetable to the first exam includes daily finish times, weekly rest, buffer slots and early red topics, and has been used for two weeks."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Block out fixed commitments such as lessons, shifts and family time first"
                - "Place red topics in the earliest weeks and schedule a second pass"
                - "Write a finish time for every day and mark your rest day"
                - "Leave two empty buffer slots in each week"
                - "Adjust the timetable after the first fortnight based on what actually happened"
            - name: Exam season support contacts list
              description: |-
                ## Purpose
                When stress spikes at eleven at night, nobody wants to search for a phone number. A short list of who to contact for what, from a revision buddy and a tutor to your student support service, your doctor and a crisis line, saved on your phone and somewhere visible, makes reaching out a single step.

                ## Milestones
                1. Three personal contacts named who you could message on a bad day.
                2. Your tutor and your student support or wellbeing service listed with opening hours.
                3. Your doctor's number and an out-of-hours health line written down.
                4. A crisis line for your country added, marked for moments when you feel unsafe.
                5. The list saved on your phone and pinned by your desk.

                ## Notes
                If you ever feel unable to keep yourself safe, contact emergency services or a crisis line straight away. No exam is worth more than your safety, and every institution has routes for students who need to step back.
              priority: high
              deadlineOffsetDays: 14
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A contacts list with three personal supporters, institutional support, your doctor and a crisis line is saved on your phone and displayed by your desk."
                cadence: one-shot
                effort_hours_estimate: "1"
              tasks:
                - "Write down three people you could message when exam stress gets bad"
                - "Find your student support or wellbeing service's contact details and hours"
                - "Add your doctor, an out-of-hours health line and a crisis line for your country"
                - "Save the list on your phone and pin a copy by your desk"
                - "Check every number on the list still works before exam season @recurring(yearly)"
            - name: Access arrangements and special consideration deadlines
              description: |-
                ## Purpose
                Extra time, rest breaks, a separate room or a reader are available to many students with a disability, health condition or anxiety disorder, but applications usually close weeks or months before the exams and need evidence. Knowing your institution's process and deadlines now, even if you think you will not need it, avoids discovering in May that the cut-off was in February.

                ## Milestones
                1. Your institution's access arrangements policy and application deadline found.
                2. The special consideration or mitigating circumstances process and its time limits noted.
                3. A decision recorded on whether to apply, after talking to the relevant adviser.
                4. Any supporting evidence requested from your doctor or specialist in time.

                ## Notes
                Names differ between systems: access arrangements, reasonable adjustments, exam accommodations, mitigating circumstances. Ask your exams officer or disability adviser which apply to you.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "The deadlines for access arrangements and special consideration are written in your exam calendar, with a recorded decision on whether to apply."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Search your institution's site for its access arrangements and special consideration policies"
                - "Write both application deadlines into your exam calendar"
                - "Book a conversation with the exams officer or disability adviser"
                - "Request supporting letters from your doctor at least a month before the deadline"
                - "Check next year's application deadlines when the new timetable is published @recurring(yearly)"
            - name: Revision space set up for calm focus
              description: |-
                ## Purpose
                Revising on your bed with the phone face up and the household walking through is a recipe for slow, anxious hours. Setting up one place, even a corner of a shared room or a regular library desk, that you use for focused work and leave when you stop helps your brain switch on there and switch off elsewhere.

                ## Milestones
                1. One main revision spot chosen at home or on campus, plus a backup.
                2. The phone kept out of reach during blocks, with its charger in another room.
                3. Everything needed for a session kept in one box or bag.
                4. A clear end-of-day ritual of closing the books and leaving the space.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "One main and one backup revision spot are in regular use, with the phone out of reach during blocks and a fixed end-of-day routine."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Choose a main revision spot and a backup for busy days"
                - "Pack one box or bag with everything a session needs"
                - "Move your phone charger out of the revision space"
                - "Agree quiet hours with the people you live with"
            - name: Sunday revision plan and weekly review
              description: |-
                ## Purpose
                Plans only work if they are updated with what really happened. Fifteen minutes on Sunday looking back at the week, moving what slipped and planning the next seven days, keeps the plan honest and stops one bad day snowballing into a sense that it is all falling apart.

                ## Milestones
                1. A fixed 15-minute Sunday slot in your calendar.
                2. Each review recording what got done, what slipped and how anxiety felt.
                3. Slipped topics moved to buffer slots rather than stacked onto tomorrow.
                4. Eight weekly reviews completed across the season.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Eight consecutive weekly reviews are recorded, each noting what was done, what slipped and where it was moved."
                cadence: rolling
              tasks:
                - "Put a 15-minute Sunday review slot in your calendar"
                - "Plan next week's revision blocks and one rest day @recurring(weekly:sun)"
                - "Move anything that slipped into a buffer slot, not onto tomorrow"
                - "Write one line on what made the best day of the week work"
            - name: Fixed finish time on revision days
              description: |-
                ## Purpose
                Working until you drop feels productive but tends to cost sleep, mood and the next day's concentration. A fixed finish time, followed by a short transition such as a walk, a shower or a meal with other people, tells your mind that the work is done for today and that tomorrow already has a plan.

                ## Milestones
                1. A finish time chosen at least an hour before you plan to sleep.
                2. A 20-minute transition activity picked that involves no screens or notes.
                3. The finish time kept on at least five days a week for a month.
                4. Notes put away and tomorrow's first task written on a sticky note at finish time.

                ## Notes
                Start from the **Habit tracker** template. If worry keeps you at the desk, write the worry on the sticky note too, with the time tomorrow you will deal with it.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "The finish time is kept on at least five days a week for four consecutive weeks, ticked off in a habit tracker."
                cadence: rolling
              tasks:
                - "Choose a finish time at least an hour before bed"
                - "Pick a screen-free activity to mark the end of revising"
                - "Stop revising at your finish time and write tomorrow's first task down @recurring(daily)"
                - "Count how many days you kept the finish time at the end of each month"
            - name: Exam season sleep schedule
              description: |-
                ## Purpose
                Sleep is when the brain consolidates what you revised that day, so trading it for extra hours often loses more than it gains. Keeping a steady wake time through exam season, protecting the night before each paper and logging how it goes means you walk into the exam hall with a working memory rather than a tired one.

                ## Milestones
                1. A fixed wake time chosen that matches your exam start times.
                2. A rule written down: no all-nighters before or during the exam period.
                3. Bed and wake times logged for four weeks.
                4. A weekly look at the log, with one adjustment made if sleep slipped.

                ## Notes
                Start from the **Sleep review** template. If you lie awake for long stretches most nights, mention it to your doctor rather than pushing through.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Four weeks of bed and wake times are logged, with the wake time kept within an hour on most days and no all-nighters."
                cadence: rolling
              tasks:
                - "Set a wake time that fits your earliest exam start"
                - "Write your no all-nighters rule at the top of the timetable"
                - "Log bed and wake times each morning on a sleep review page"
                - "Review the week's sleep log and change one thing @recurring(weekly:fri)"
            - name: Anxiety and revision hours log
              description: |-
                ## Purpose
                Students often believe the more anxious they feel, the less they have done, and the reverse is usually closer to the truth. A two-number log each evening, anxiety from 0 to 10 and focused hours, shows over a few weeks which days, subjects and habits push anxiety up or down, and gives you real evidence when your mind insists you have done nothing.

                ## Milestones
                1. A log with columns for date, anxiety rating, focused hours, subjects covered and one note.
                2. Entries made on at least 25 days of the season.
                3. The three highest-anxiety days compared with what happened on them.
                4. One pattern written down and one change tried in response.

                ## Notes
                Start from the **Metrics log** template. Count only focused hours, not time sitting with books open.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A log holds at least 25 days of anxiety ratings and focused hours, with one written pattern and one change tried."
                cadence: rolling
              tasks:
                - "Create the log from the metrics log template with five columns"
                - "Rate today's anxiety and record focused hours before bed @recurring(daily)"
                - "Compare your three worst days after three weeks"
                - "Write down one pattern and one change you will try"
            - name: Movement breaks on revision days
              description: |-
                ## Purpose
                Physical activity is one of the most reliable ways to burn off stress and it sharpens concentration for a while afterwards, yet it is the first thing dropped in exam season. Scheduling three short sessions a week, plus a five-minute move between revision blocks, keeps the body from carrying all the tension into the exam.

                ## Milestones
                1. Three 30-minute activity slots fixed in the weekly timetable.
                2. A short movement break planned between every two revision blocks.
                3. Activity sessions kept for six weeks.
                4. A note on how concentration felt after active days compared with inactive ones.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Three activity sessions a week are completed for six consecutive weeks, with a note comparing concentration on active and inactive days."
                cadence: rolling
              tasks:
                - "Choose an activity you can do from your front door in 30 minutes"
                - "Take a 30-minute walk, run, swim or class @recurring(weekly:mon,wed,fri)"
                - "Set a timer to stand and move between every two revision blocks"
                - "Write a line on your concentration after an active day"
            - name: Exam season meals and caffeine plan
              description: |-
                ## Purpose
                Skipped meals, midnight takeaways and four energy drinks a day make anxiety symptoms like a racing heart and shaky hands worse. Planning simple meals for the week and setting a caffeine cut-off time keeps energy steady and removes one more decision from days that already have too many.

                ## Milestones
                1. A weekly plan with breakfast and two simple meals a day.
                2. A caffeine cut-off time chosen and written on the plan.
                3. Exam-day breakfast and snacks decided in advance.
                4. The plan kept for four weeks.

                ## Notes
                Start from the **Weekly meal plan** template. If you have a health condition or a difficult relationship with food, follow your own clinician's advice over any general plan.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Four consecutive weekly meal plans with a written caffeine cut-off are completed, including a fixed exam-day breakfast."
                cadence: rolling
              tasks:
                - "Write down how much caffeine you have on a typical revision day"
                - "Choose a caffeine cut-off time and add it to your plan"
                - "Write the week's meal plan and shopping list @recurring(weekly:sat)"
                - "Decide your exam-day breakfast and a snack for the bag"
            - name: Weekly check-in with a study friend
              description: |-
                ## Purpose
                Isolation during revision lets worries grow unchecked, and talking only about how much everyone has done makes it worse. A short weekly call or walk with one trusted friend, family member or classmate, with a rule to talk about how you are rather than hours logged, keeps you connected and lets someone notice if you are struggling.

                ## Milestones
                1. One person asked and agreed to a weekly check-in.
                2. A regular day and time set.
                3. A simple format agreed: one thing that went well, one worry, one plan.
                4. Six weekly check-ins held across the season.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Six weekly check-ins are held with the same person over the season, each covering one win, one worry and one plan."
                cadence: rolling
              tasks:
                - "Ask one person you trust to check in with you weekly during exams"
                - "Agree the day, time and the three-question format"
                - "Hold a ten-minute check-in with your study friend @recurring(weekly:wed)"
                - "Tell them which warning sign from your stress map to watch for"
            - name: Muting comparison in group chats and feeds
              description: |-
                ## Purpose
                Year-group chats fill up with people listing hours revised, topics finished and predicted grades, and each message can spike anxiety for an hour. Deciding which chats to mute during revision blocks, and when you will check them, keeps the useful information without the constant comparison.

                ## Milestones
                1. The chats and apps that most raise anxiety identified from a week of noticing.
                2. Notifications muted for those during revision blocks.
                3. Two fixed times a day set for checking messages.
                4. A friend asked to pass on anything genuinely urgent, such as a room change.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Anxiety-raising chats are muted during revision blocks and checked at two fixed times a day, with a named friend covering urgent news."
                cadence: rolling
              tasks:
                - "Note for one week which chats or apps leave you more anxious"
                - "Mute those notifications during revision blocks"
                - "Ask a friend to message you directly about room or time changes"
                - "Review which chats and apps to mute for the coming month @recurring(monthly:3)"
            - name: Monthly confidence re-rating of every topic
              description: |-
                ## Purpose
                Progress during revision is slow enough to be invisible day to day, which feeds the fear that nothing is sticking. Re-rating your topic list once a month and counting how many topics have moved from red to amber or amber to green turns that fear into a number you can check.

                ## Milestones
                1. A fixed monthly date for re-rating in your calendar.
                2. Every topic re-rated and the counts of red, amber and green recorded.
                3. Topics that have stayed red for two months flagged for help.
                4. The timetable adjusted after each re-rating.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Three monthly re-ratings are recorded with red, amber and green counts, and topics stuck at red are flagged for help."
                cadence: rolling
              tasks:
                - "Re-rate every topic red, amber or green and count each colour @recurring(monthly:14)"
                - "Flag any topic that has stayed red for two months"
                - "Move timetable hours towards the flagged topics"
            - name: Weekly timed past paper under exam conditions
              description: |-
                ## Purpose
                Much exam anxiety is fear of the unknown: the clock, the silence, the blank page. Sitting a past paper each week under real conditions, timed and without notes or phone, makes the experience familiar, shows where time runs out and gives you marked evidence of what you can already do.

                ## Milestones
                1. Past papers and mark schemes gathered for each subject.
                2. A paper sat each week under full timed conditions.
                3. Each paper marked against the mark scheme and the score logged.
                4. Timing problems and repeated mistakes noted after every paper.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "At least six past papers are sat under timed conditions and marked, with scores and timing notes logged."
                cadence: rolling
              tasks:
                - "Download past papers and mark schemes for every subject"
                - "Sit one past paper under timed conditions with your phone in another room @recurring(weekly:tue)"
                - "Mark it against the mark scheme the same day"
                - "Log the score and the point where time ran out"
            - name: How exam anxiety affects memory and performance
              description: |-
                ## Purpose
                Some nervousness sharpens performance, while high anxiety eats up the working memory you need to recall and reason, which is why answers come back the moment you leave the room. Learning the basics of the stress response and the performance curve explains blanking out, makes the symptoms less frightening and shows why the techniques in this area work.

                ## Milestones
                1. One reputable guide or lecture on test anxiety and working memory read or watched.
                2. The difference between helpful arousal and overwhelming anxiety written in your own words.
                3. Your own symptoms matched to what the stress response is doing.
                4. A one-paragraph explanation you could give a younger student.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A one-paragraph explanation in your own words of how anxiety affects working memory in exams is written and linked to your symptoms."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Find a guide on test anxiety from a university counselling service or psychology society"
                - "Write how the stress response affects memory in five sentences"
                - "Match each of your symptoms to what the body is doing"
                - "Explain it aloud to a friend or family member"
            - name: Active recall and spaced practice instead of rereading
              description: |-
                ## Purpose
                Rereading notes and highlighting feel safe but give a false sense of knowing, and the gap shows up in the exam as panic. Switching to testing yourself with flashcards, blank-page recall and practice questions, spaced over days, builds memories that hold under pressure, and watching yourself recall material is one of the best antidotes to exam fear.

                ## Milestones
                1. Active recall and spacing explained in your own notes from a reputable source.
                2. Flashcards or question sets made for two red topics.
                3. A spacing schedule set to revisit each set after one day, three days and a week.
                4. Recall scores for one topic compared before and after two weeks.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Two red topics are revised by active recall on a written spacing schedule, with recall scores improved over two weeks."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Read a short guide on retrieval practice and spaced repetition"
                - "Turn one red topic into twenty questions or flashcards"
                - "Schedule reviews of the set after one day, three days and a week"
                - "Test yourself on a blank page and score what you recalled"
            - name: Two-minute calming routine for the exam hall
              description: |-
                ## Purpose
                A calming technique only helps in the exam if it has been practised so often that it runs on autopilot. Choosing one short routine, such as slow breathing with a longer out-breath, feet pressed to the floor and a steadying phrase, and rehearsing it during timed papers, gives you something to do when your heart starts racing at the desk.

                ## Milestones
                1. One routine of under two minutes written on a card in three steps.
                2. The routine practised twice a week outside exams.
                3. The routine used during at least three timed past papers.
                4. A note on how well it settles you, rated from 0 to 10.

                ## Notes
                Keep it discreet: nothing that needs closed eyes, sounds or standing up, so it works in a silent hall.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: habit
                success_criteria: "A written three-step calming routine has been practised twice a week for a month and used in at least three timed papers."
                cadence: phased
                effort_hours_estimate: "3"
              tasks:
                - "Choose a three-step routine using slow breathing, grounding and a short phrase"
                - "Write the steps on a card the size of your palm"
                - "Practise the calming routine for two minutes at your desk @recurring(weekly:mon,thu)"
                - "Use it at the start of your next timed past paper"
            - name: Plan for a mind blank mid-exam
              description: |-
                ## Purpose
                Going blank on a question is one of the commonest exam fears, and it feeds itself: panic about the blank makes recall harder still. A rehearsed plan for the first thirty seconds, such as marking the question, moving on, jotting a quick brain dump and coming back, turns a moment of panic into a known procedure.

                ## Milestones
                1. A four-step blank plan written down.
                2. The plan practised in a timed paper by skipping and returning to one question on purpose.
                3. A brain dump habit tried at the start of practice papers, where the rules allow it.
                4. A record of how many marks were recovered by coming back.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A written four-step plan for going blank has been used in at least two practice papers, with recovered marks noted."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Write your four steps for a blank on a revision card"
                - "Deliberately skip and return to one question in your next practice paper"
                - "Check your exam rules on writing notes on the question paper"
                - "Note how many marks you picked up on return"
            - name: Testing catastrophic predictions about results
              description: |-
                ## Purpose
                Thoughts like 'if I fail this, my whole future is over' feel like facts at midnight but rarely survive a calm look. Writing the prediction down, rating how much you believe it and tracing what would realistically happen next, including resits, other courses and people who took a different route, brings the belief down and frees attention for revising.

                ## Milestones
                1. Three recurring exam predictions written down with a belief rating out of 100.
                2. For each, a realistic chain of what would happen if the worst result came.
                3. Evidence gathered from tutors, admissions pages or older students about alternative routes.
                4. Belief in each prediction re-rated after the exercise.

                ## Notes
                If these thoughts are constant, or include not wanting to be alive, speak to your doctor or student support straight away and use your support contacts list.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Three exam predictions are written with before and after belief ratings and a realistic outcome chain for each."
                cadence: phased
                effort_hours_estimate: "3"
              tasks:
                - "Write the three thoughts about exams that scare you most"
                - "Rate how much you believe each one from 0 to 100"
                - "Find out the real options if you missed a grade, from resits to other courses"
                - "Re-rate each belief after writing the realistic chain"
            - name: Exam technique for timing and question choice
              description: |-
                ## Purpose
                Running out of time is a major source of exam panic and lost marks. Working out minutes per mark for each paper, a plan for reading time and a rule for when to move on means the clock becomes a guide rather than a threat.

                ## Milestones
                1. Minutes per mark calculated for each paper.
                2. A timing plan per paper written on a card, covering reading, sections and checking.
                3. A rule set for when to leave a question, such as twice its allotted time.
                4. The plan tested in two practice papers and adjusted.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Each paper has a written timing plan with minutes per mark and a move-on rule, tested in at least two practice papers."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Divide each paper's length by its total marks to get minutes per mark"
                - "Write a timing plan for each paper on an index card"
                - "Set a move-on rule for questions that overrun"
                - "Test the plan in a practice paper and adjust it"
            - name: Expressive writing before an exam
              description: |-
                ## Purpose
                Studies of students before high-stakes tests have found that writing freely about their worries for about ten minutes beforehand can lift scores for highly anxious students, probably by clearing worry out of working memory. Trying it before mocks and practice papers shows whether it helps you, at no cost.

                ## Milestones
                1. The method understood: ten minutes of uncensored writing about your worries about the exam.
                2. The writing tried before three practice papers or mocks.
                3. Anxiety ratings and scores compared with papers sat without it.
                4. A decision recorded on whether to use it before real exams.
              priority: low
              frontmatter:
                mode: learning
                output_kind: decision
                success_criteria: "Expressive writing is tried before three practice papers, results are compared with papers sat without it, and a decision is recorded."
                cadence: phased
                effort_hours_estimate: "2"
              tasks:
                - "Read a short summary of the expressive writing research on test anxiety"
                - "Write freely about your worries for ten minutes before your next practice paper"
                - "Rate your anxiety before and after the writing"
                - "Decide whether to use it before your real exams"
            - name: Reframing nerves as readiness
              description: |-
                ## Purpose
                Telling yourself to calm down when your heart is pounding rarely works, while telling yourself that the racing heart is your body getting ready has improved performance in experiments. Practising this reappraisal on small stressful moments, so it is available in the exam, changes how the same physical feelings are read.

                ## Milestones
                1. A one-line reappraisal phrase written in your own words.
                2. The phrase used in five small stressful moments, such as answering in class or a quiz.
                3. The phrase used at the start of two practice papers.
                4. Notes on whether the feelings felt different when reframed.
              priority: low
              frontmatter:
                mode: learning
                output_kind: habit
                success_criteria: "A personal reappraisal phrase has been used in at least five stressful moments and two practice papers, with notes on the effect."
                cadence: phased
                effort_hours_estimate: "2"
              tasks:
                - "Write a one-line phrase that reframes a racing heart as readiness"
                - "Use the phrase before a class question or quiz this week"
                - "Say it to yourself at the start of your next practice paper"
                - "Note how the same feelings felt when reframed"
            - name: Taper days instead of last-minute cramming
              description: |-
                ## Purpose
                Cramming new material the night before raises anxiety and pushes out sleep for very little gain. Planning a taper for the final days before each exam, with light review of summary sheets, one last timed section and an early night, lets you arrive rested with what you know well fresh in mind.

                ## Milestones
                1. A rule written: no new topics in the final 48 hours before a paper.
                2. A one-page summary sheet made for each subject.
                3. A taper plan for the three days before each exam in the timetable.
                4. The taper used before at least one mock.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Summary sheets exist for each subject and a three-day taper with no new topics is written into the timetable before every exam."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Write your no new topics rule for the final 48 hours"
                - "Make a one-page summary sheet for each subject"
                - "Plan the three days before each exam in the timetable"
                - "Try the taper before your next mock"
            - name: Triage when there is not enough time left
              description: |-
                ## Purpose
                Partway through revision, many students realise they cannot cover everything, and panic makes them try anyway, badly. A deliberate triage, ranking topics by how often they appear and how many marks they carry against how weak you are, decides what gets full attention, what gets a summary and what gets left, and makes that a choice rather than a failure.

                ## Milestones
                1. Topics ranked by frequency in past papers and marks available.
                2. Each topic placed as full revision, summary only or leave.
                3. The decision checked with a teacher or tutor where possible.
                4. The timetable rebuilt around the triage.

                ## Notes
                Leaving a topic is a legitimate strategy. Write down why, so you do not reopen the decision every night.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "Every remaining topic is labelled full revision, summary only or leave, based on past paper frequency, and the timetable reflects it."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Ask the agent to count how often each topic appears in the last five years of past papers"
                - "Rank topics by marks available and your confidence rating"
                - "Label each one full revision, summary only or leave"
                - "Ask a teacher or tutor to check your leave list"
            - name: Asking for help with the topic you keep avoiding
              description: |-
                ## Purpose
                Almost everyone has one topic they skip every time it comes up in the timetable, and the avoidance makes the dread grow. Booking help on that topic, at office hours, a drop-in, a study group or with a tutor, breaks the loop, and the topic is usually less bad in daylight than it is in your head.

                ## Milestones
                1. The single most avoided topic named honestly.
                2. A specific question about it written down.
                3. One help session attended, at office hours, a drop-in or with a peer.
                4. The topic re-rated after a week of work.
              priority: medium
              frontmatter:
                mode: building
                output_kind: knowledge
                success_criteria: "Help has been sought for your most avoided topic in at least one session, and its confidence rating has moved up."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Name the topic you skip most often"
                - "Write one specific question you cannot yet answer about it"
                - "Book office hours, a drop-in or a session with a classmate who understands it"
                - "Re-rate the topic after a week"
            - name: Deciding when to get professional help for exam anxiety
              description: |-
                ## Purpose
                Exam nerves are normal, but anxiety that stops you eating or sleeping for days, brings panic attacks or makes you unable to sit papers is a health problem with effective treatment. Setting your own clear signs for when to see your doctor or student counselling, before the season starts, means the decision is made calmly rather than in a crisis.

                ## Milestones
                1. Your institution's counselling or wellbeing service and its waiting times found.
                2. Three personal signs written that mean it is time to book an appointment.
                3. A note of what you would want to say in a first appointment.
                4. A monthly self-check against the three signs during exam season.

                ## Notes
                Booking early is sensible because student services get busy in exam season. Asking for help is part of the plan, not a sign that you are failing.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "Three written signs for seeking help are recorded, along with the route to your doctor or student counselling and its current waiting time."
                cadence: one-shot
                effort_hours_estimate: "1"
              tasks:
                - "Find how to book student counselling or wellbeing support and its waiting time"
                - "Write three signs that mean you will book an appointment"
                - "Draft three sentences describing your exam anxiety for a first appointment"
                - "Check yourself honestly against the three signs @recurring(monthly:28)"
            - name: Part-time work hours during exam season
              description: |-
                ## Purpose
                Many students work shifts to pay rent, and an unchanged rota during exams is a common source of exhaustion and panic. Working out how many hours you can afford to drop, asking your manager early for fewer or swapped shifts around exam dates and getting the agreement in writing protects revision time without risking the job.

                ## Milestones
                1. Shifts mapped against the exam calendar to find clashes and draining weeks.
                2. The minimum income you need over the season worked out.
                3. A request for reduced or swapped shifts made at least a month ahead.
                4. The agreed rota written down or confirmed by message.
              priority: medium
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A revised rota for the exam season is agreed with your manager in writing, with no shifts on exam days."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Lay your rota over the exam calendar and mark the clashes"
                - "Work out the minimum hours you need for rent and food"
                - "Ask your manager for reduced or swapped shifts around exam dates"
                - "Confirm the agreed rota by message so it is in writing"
            - name: Peer revision group that calms rather than compares
              description: |-
                ## Purpose
                Revising with others can lower anxiety by sharing explanations and normalising nerves, or raise it through constant comparison. Setting up a small group with ground rules, a fixed agenda of testing each other and a ban on talk of hours revised keeps the benefits without the arms race.

                ## Milestones
                1. Three or four classmates agreed to meet weekly.
                2. Ground rules written, including no comparing hours or predicted grades.
                3. Each session structured around testing each other on one topic.
                4. Four sessions held and the group's value reviewed.
              priority: low
              frontmatter:
                mode: building
                output_kind: habit
                success_criteria: "A peer group of three or four meets at least four times with written ground rules and a testing-based agenda."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Invite three classmates you find steadying rather than stressful"
                - "Agree ground rules, including no talk of hours revised"
                - "Plan the first session around testing each other on one topic"
                - "Review after four sessions whether the group helps"
            - name: Fit-to-sit decision when you are unwell
              description: |-
                ## Purpose
                Many institutions treat sitting an exam as a declaration that you were fit to sit it, which can rule out later claims for illness or crisis. Knowing the rules before the season, and having a simple decision process for a morning when you are ill, bereaved or in acute distress, prevents a panicked choice that cannot be undone.

                ## Milestones
                1. Your institution's fit-to-sit policy and absence reporting process read and summarised.
                2. The deadline and evidence needed for a claim after missing a paper noted.
                3. A written plan for what to do on a morning you feel unable to sit.
                4. The contact to call on exam mornings saved in your phone.

                ## Notes
                This is an organisational step, not medical or legal advice. Ask the exams office or a student adviser how the rules apply to you.
              priority: high
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A one-page summary of the fit-to-sit and absence rules, with a decision plan and the exam-morning contact, is saved before the first exam."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Find your institution's fit-to-sit and absence policies"
                - "Summarise the reporting deadline and evidence needed on one page"
                - "Write the steps you will follow if you wake up unable to sit"
                - "Save the exams office phone number in your contacts"
            - name: Mock exams as a full dress rehearsal
              description: |-
                ## Purpose
                Mocks are the cheapest place to find out how you react under real conditions. Treating them as a rehearsal of everything, from the night before and breakfast to the calming routine, timing plan and post-exam routine, gives you a tested exam-day plan and turns the result into information rather than a verdict.

                ## Milestones
                1. Your full exam-day plan written before the mocks.
                2. Every part of the plan used during the mock week.
                3. A debrief written after the mocks: what worked, what did not, what to change.
                4. The plan updated for the real exams.
              priority: medium
              deadlineOffsetDays: 60
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A written debrief of the mock week records what worked and what to change, and the exam-day plan has been updated from it."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Write the dates of your mocks into the exam calendar and treat them as real"
                - "Use your calming routine and timing plan in every mock"
                - "Write a debrief within two days of the last mock"
                - "Update your exam-day plan from the debrief"
            - name: Night-before and morning-of exam checklist
              description: |-
                ## Purpose
                The last twelve hours before a paper are when anxiety peaks and small hitches, like a lost calculator or a late bus, feel enormous. A checklist for the evening before and the morning itself, covering bag, route, food, sleep and arrival time, removes the uncertainty and leaves you one job on the day: sitting the exam.

                ## Milestones
                1. A night-before list: bag packed with ID, equipment, clear pens and water, route checked.
                2. A morning list: wake time, breakfast, leave time and arrival 30 minutes early.
                3. A plan for the wait outside the hall, such as music or avoiding last-minute quizzing.
                4. The checklist used before every exam in the season.

                ## Notes
                Start from the **Operational checklist** template. Check permitted equipment for each paper, because rules on calculators, dictionaries and pencil cases vary.
              priority: high
              deadlineOffsetDays: 45
              frontmatter:
                mode: event
                output_kind: artifact
                success_criteria: "A written night-before and morning-of checklist exists and has been used before at least one mock or real exam."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "List everything you need in the bag for each paper"
                - "Check the route and travel time to the exam venue"
                - "Write the morning timings, working back from 30 minutes before the start"
                - "Decide how you will spend the wait outside the hall"
            - name: Post-exam decompression after each paper
              description: |-
                ## Purpose
                Standing outside the hall comparing answers is one of the fastest ways to wreck the evening and the next paper. A set routine for the hour after each exam, leaving the group post-mortem, eating, moving and writing one line about the paper before turning to the next, closes it off and protects your energy for what is still to come.

                ## Milestones
                1. A rule chosen for not discussing answers after papers.
                2. A short decompression routine written: food, movement, one line, then rest.
                3. The routine used after every exam in the season.
                4. Revision for the next paper started only after the routine.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "The post-exam routine is followed after every paper of one exam season, with no answer comparing afterwards."
                cadence: cyclic
              tasks:
                - "Decide on a polite exit line for post-exam answer comparisons"
                - "Write a one-hour routine for after each paper"
                - "Write one line on the paper, then close the notebook"
                - "Plan what you will do the evening after your hardest exam"
            - name: Results day options sheet for every outcome
              description: |-
                ## Purpose
                Results day is stressful largely because the outcomes branch quickly and some decisions are time-limited, such as confirming a place, requesting a remark or entering a clearing process. Writing a one-page sheet beforehand with what you will do if you meet, beat or miss your targets, who to call and the relevant deadlines, means you can act calmly in the first hour.

                ## Milestones
                1. The date, time and release method for results confirmed.
                2. Three scenarios written, met, exceeded and missed targets, with first actions for each.
                3. Remark, appeal and resit deadlines and fees noted.
                4. Contacts for admissions, a tutor and a supportive person listed.
                5. Plans made for the rest of the day whatever happens.

                ## Notes
                Clearing, remarks and appeals have different names and rules in different systems. Check the official guidance for your own exams.
              priority: high
              deadlineOffsetDays: 90
              frontmatter:
                mode: event
                output_kind: artifact
                success_criteria: "A one-page results day sheet lists actions, contacts and deadlines for met, exceeded and missed outcomes and is ready before results day."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Confirm when and how your results will be released"
                - "Write first actions for meeting, beating and missing your targets"
                - "Note deadlines and fees for remarks, appeals and resits"
                - "Ask the agent to draft a calm one-page checklist from your three scenarios"
                - "Plan something you will do that evening whatever the result"
            - name: Resit preparation plan after a missed grade
              description: |-
                ## Purpose
                A resit can feel like a public failure, yet it is often the quickest route back to the next step, and second attempts benefit from knowing exactly what went wrong. Reviewing the script or feedback, building a narrower plan around the weak areas and deciding how to talk about it to others turns a setback into a contained project with a date.

                ## Milestones
                1. The script, feedback or breakdown of marks requested and read.
                2. The three biggest sources of lost marks identified.
                3. A resit timetable focused on those areas, with rest built in.
                4. A short, honest sentence ready for when people ask.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A resit timetable targets the three biggest sources of lost marks identified from the script or mark breakdown."
                cadence: phased
                effort_hours_estimate: "20"
              tasks:
                - "Request your script or a breakdown of marks from the exams office"
                - "List the three areas where most marks were lost"
                - "Build a resit timetable focused on those areas"
                - "Write one sentence you are comfortable saying when people ask"
            - name: Rest and reset after the last exam
              description: |-
                ## Purpose
                The end of exams often brings a crash rather than relief: exhaustion, a flat mood or anxiety switching straight to results. Planning the first week after the last paper, with sleep, people, something enjoyable and a short reflection on what to keep for next time, helps you recover properly and makes the next season easier.

                ## Milestones
                1. Three restful or enjoyable things booked for the week after the last exam.
                2. Revision materials tidied away or archived.
                3. A one-page reflection on what helped and what to change next time.
                4. The reflection saved where you will find it before next season.
              priority: low
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A post-exam rest week is taken and a one-page reflection on what to repeat and change is saved for next season."
                cadence: cyclic
              tasks:
                - "Book three things to look forward to after the last exam"
                - "Box up or archive revision materials once the last paper is done"
                - "Write one page on what helped and what to change next time"
                - "Plan a rest week after the final exam of the season @recurring(yearly)"
            - name: School exams while living with family
              description: |-
                ## Purpose
                Students sitting school-leaving exams at home often juggle shared rooms, younger siblings, part-time jobs and parents who worry out loud. Agreeing with your household when you need quiet, how they can help and how often you want to be asked about revision turns well-meant pressure into practical support.

                ## Milestones
                1. Quiet hours and your revision space agreed with the household.
                2. Two specific ways family can help listed, such as testing you or making lunch.
                3. An agreement on how often revision and grades get discussed.
                4. A family check-in after two weeks to adjust.
              priority: medium
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A household agreement on quiet hours, two forms of help and how often exams are discussed is written down and reviewed after two weeks."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Write down the three things at home that make revising hardest"
                - "Ask for a short family conversation about the exam period"
                - "Agree quiet hours and two ways family can help"
                - "Check in after two weeks on whether it is working"
            - name: University finals with dissertation and exams overlapping
              description: |-
                ## Purpose
                Final-year students often hand in a dissertation weeks before a block of finals, and the two compete for the same anxious attention. Mapping both onto one plan, with a personal dissertation finish date that leaves clear revision weeks and supervisor milestones fixed in advance, stops the dissertation swallowing exam preparation.

                ## Milestones
                1. The dissertation deadline and finals dates on one timeline.
                2. A personal dissertation finish date set a week before the official one.
                3. Supervisor meetings and chapter deadlines agreed.
                4. At least three clear revision weeks protected after the dissertation.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "One timeline shows dissertation milestones and finals, with a personal finish date a week early and three protected revision weeks."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Put the dissertation deadline and every finals date on one timeline"
                - "Set your own dissertation finish date a week before the official one"
                - "Agree chapter deadlines with your supervisor"
                - "Check dissertation milestones against the revision plan @recurring(monthly:7)"
            - name: Mature student exams alongside work and family
              description: |-
                ## Purpose
                Adult learners returning to study often face exams after years away, with children, a job and the feeling that everyone else finds it easier. Agreeing study slots and childcare with your household, asking about study leave at work and sitting practice papers early to rebuild exam habits makes the season manageable rather than a constant scramble.

                ## Milestones
                1. Study leave or flexible working options at work checked.
                2. Weekly study slots and cover for caring agreed with the household.
                3. Two practice papers sat early to rebuild exam technique.
                4. A plan for the exam days themselves, including childcare and travel.
              priority: medium
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "Study leave is checked, weekly study slots and caring cover are agreed, and two practice papers are sat before the final month."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Ask HR or your manager about study leave and flexible hours"
                - "Agree weekly study slots and who covers caring during them"
                - "Sit two practice papers in the first month to rebuild exam habits"
                - "Agree next month's study slots and childcare with your household @recurring(monthly:25)"
            - name: Professional certification exams beside a full-time job
              description: |-
                ## Purpose
                Accountancy, law, actuarial, medical and IT certifications often come as a series of papers taken while working full time, so the pressure is constant rather than seasonal. Treating each paper as its own project, with a syllabus plan, a monthly progress check and an agreement with your employer about study leave, keeps one paper's anxiety from leaking into the next.

                ## Milestones
                1. The full exam series and the next paper's date and syllabus written down.
                2. Weekly study hours chosen that fit around work.
                3. Study leave and exam days agreed with your employer.
                4. A monthly check of progress against the syllabus plan.
                5. The next paper booked once this one is passed or a resit is scheduled.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A syllabus plan for the next paper is in use with monthly progress checks, and study leave for the exam is agreed with your employer."
                cadence: phased
              tasks:
                - "Write the full exam series and the next paper's date"
                - "Set weekly study hours you can sustain alongside work"
                - "Agree study leave and exam days with your manager"
                - "Review progress against the syllabus plan @recurring(monthly:20)"
            - name: Sitting exams in a second language
              description: |-
                ## Purpose
                International students revise and sit exams in a language that may still take extra effort under pressure, often far from family support. Checking what language allowances exist, building a glossary of key subject terms and practising timed answers in that language reduces the extra load, and knowing where international student support sits means you are not alone with it.

                ## Milestones
                1. Rules on dictionaries or extra time for non-native speakers checked.
                2. A glossary of key terms for each subject built.
                3. Two timed practice answers written in the exam language and reviewed.
                4. Your institution's international student support contact saved.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A subject glossary exists, language allowances are confirmed with the exams office and two timed answers have been reviewed."
                cadence: phased
                effort_hours_estimate: "5"
              tasks:
                - "Ask the exams office about dictionary rules and language allowances"
                - "Build a glossary of key terms for each subject"
                - "Write two timed answers in the exam language and ask for feedback"
                - "Save the international student support contact in your phone"
            - name: Exam season planning with ADHD, dyslexia or a disability
              description: |-
                ## Purpose
                Reading speed, concentration and fatigue can all add load in exam season for students with ADHD, dyslexia, autism, chronic illness or another disability, and arrangements are often agreed late or not at all. Building the season around your own profile, with the right evidence, arrangements, revision formats and, where relevant, medication timing agreed with your prescriber, gives you a fair run at the exams.

                ## Milestones
                1. Current evidence of your needs gathered, or an assessment requested.
                2. Arrangements confirmed in writing by the exams office or disability service.
                3. Revision formats chosen that suit you, such as audio, short blocks or studying alongside someone.
                4. Any medication timing around exams discussed with your prescriber.
                5. Arrangements used in a mock before the real exams.
              priority: medium
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "Exam arrangements are confirmed in writing and trialled in a mock, with revision formats chosen to suit your profile."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Book a meeting with the disability or learning support service"
                - "Gather your diagnostic report or needs assessment"
                - "Ask your prescriber how to time medication around exam days, if you take any"
                - "Request to use your arrangements in a mock"
            - name: Exams while caring for someone or parenting
              description: |-
                ## Purpose
                Young carers and student parents revise in fragments, around appointments, school runs and someone else's bad days, and often do not tell their institution. Telling the right person about your caring role, setting up backup cover for exam days and planning revision in short blocks that fit real life means a crisis at home does not automatically become a missed paper.

                ## Milestones
                1. Your caring role disclosed to a tutor or student support adviser.
                2. Backup cover arranged for every exam day.
                3. A revision plan in 20 to 30 minute blocks that fit the caring routine.
                4. Support for carers at your institution or locally found.
              priority: medium
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "Your institution knows about your caring role and named backup cover is arranged for every exam day."
                cadence: phased
                effort_hours_estimate: "3"
              tasks:
                - "Tell a tutor or student adviser about your caring responsibilities"
                - "Arrange named backup cover for each exam day"
                - "Plan revision in short blocks around the caring routine"
                - "Look up carer or student parent support at your institution"
            - name: Viva and oral examination preparation
              description: |-
                ## Purpose
                Oral exams, from language orals to the doctoral viva, add the fear of being questioned face to face with little time to think. Rehearsing with mock questions, practising a pause before answering and preparing phrases for when you do not know turns an unpredictable conversation into one you have already had several times.

                ## Milestones
                1. The format, examiners and length of the oral confirmed.
                2. A bank of likely questions written from your work and the syllabus.
                3. At least two mock orals held with a supervisor, tutor or peer.
                4. Holding phrases prepared for pausing, asking for clarification and saying you do not know.
              priority: medium
              deadlineOffsetDays: 120
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "Two mock orals are completed with a supervisor or peer, using a written question bank and prepared holding phrases."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "Confirm the format, length and examiners for the oral"
                - "Write a bank of twenty likely questions"
                - "Book two mock orals with a supervisor, tutor or peer"
                - "Prepare phrases for pausing, clarifying and not knowing"
            - name: Practical and performance assessments under observation
              description: |-
                ## Purpose
                Clinical skills stations, lab practicals and music recitals add an examiner watching every move, which brings its own kind of nerves. Running timed rehearsals in front of a friend, recording yourself and planning a reset for when something goes wrong mid-performance prepares you for being watched as well as for the task.

                ## Milestones
                1. The marking criteria or station checklist for the assessment found.
                2. Three rehearsals done in front of someone, at least one timed and recorded.
                3. A reset routine written for recovering from a mistake mid-performance.
                4. Feedback from rehearsals used to adjust the final preparation.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Three observed rehearsals are completed against the real marking criteria, with a written reset routine for mistakes."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Find the marking criteria or station checklist for the assessment"
                - "Rehearse in front of a friend with a timer running"
                - "Record one rehearsal and watch it back once"
                - "Write a reset routine for recovering from a mistake"
            - name: Structured treatment for severe test anxiety
              description: |-
                ## Purpose
                For some students, test anxiety is severe enough to cause panic, avoidance of exams or repeated poor results despite good preparation, and self-help alone is not enough. Cognitive behavioural therapy and guided self-help programmes for test anxiety have good evidence, and getting a referral, preparing for the first session and doing the work between sessions gives treatment the best chance of helping before the next season.

                ## Milestones
                1. A referral or self-referral to a counselling service or therapist made.
                2. Your baseline score, stress map and anxiety log taken to the first session.
                3. Goals for treatment agreed and linked to specific exams.
                4. Between-session tasks completed and noted each week.
                5. Progress reviewed against the baseline score at the end of the course.
              priority: medium
              frontmatter:
                mode: building
                output_kind: habit
                success_criteria: "A course of therapy or guided self-help for test anxiety is completed, with the baseline questionnaire re-scored at the end."
                cadence: phased
                effort_hours_estimate: "15"
              tasks:
                - "Find out how to refer yourself to student counselling or talking therapy services"
                - "Gather your baseline score, stress map and log for the first appointment"
                - "Agree two goals linked to specific exams with the therapist"
                - "Write down each week's between-session task and when you will do it"
---

# Exam Stress & Study Anxiety

This area is for students facing exams of any kind, from school-leaving papers to university finals, professional certifications and doctoral vivas, who want the nerves to stay useful rather than take over. It starts with foundations (an exam calendar, a test anxiety baseline, realistic targets agreed with a tutor, a topic list and a timetable with rest built in), then the weekly machinery of revision, sleep, food and support, the exam-hall skills that hold under pressure, the decisions about triage, help and fitness to sit, the dated moments of mocks, exam mornings and results day, versions for different student lives, and finally oral and practical assessments and structured treatment.

What repeats is a Sunday plan, a daily finish time and an evening anxiety rating, a weekly timed past paper, a monthly re-rating of every topic, and a yearly check of support contacts and arrangement deadlines before each season. The Meeting notes, Habit tracker, Sleep review, Metrics log, Weekly meal plan and Operational checklist templates pair with the projects that name them. Installing adds all 50 projects as active, so archive the ones that are not for you yet.
