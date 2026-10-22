---
id: family-parenting.secondary-school-exam-years
name: Secondary School Exam Years
description: "One exam calendar, an honest picture of every subject, revision your child owns, weekly wellbeing check-ins, well-made subject and post-16 choices, and calm handling of mocks, exam days, results and reviews."
category: personal
version: 1.0.0
tags: [family-parenting, secondary-school-exam-years, parent, revision, exam-season, subject-choices, results-day, teen-wellbeing]
author: Aurum Technology
starter_structure:
  templates:
    - metrics-log
    - sleep-review
    - weekly-meal-plan
    - purchase-decision
    - meeting-notes
  pillars:
    - name: Family & Parenting
      emoji: "👨‍👩‍👧"
      description: "Raising children and holding a family together: each stage from pregnancy to young adulthood, schooling and activities, family logistics and traditions, extended family, and the decisions parents make together."
      pillarFrontmatter:
        review_cadence: monthly
      areas:
        - name: Secondary School Exam Years
          description: "Supporting a child through major secondary school exams with revision plans, wellbeing checks and subject or course choices."
          projects:
            - name: Exam timetable and key dates calendar
              description: |-
                ## Purpose
                Written exams, practicals, orals, coursework hand-ins and mock weeks are scattered across months and published in different places, and a missed oral or late coursework deadline can cost marks that revision cannot win back. Pulling every date into the family calendar now means your child sees the whole season at once and nobody books a holiday on a speaking exam.

                ## Milestones
                1. Every written paper, practical, oral and listening exam listed with date, time and length.
                2. Coursework and non-exam assessment hand-in dates added from each subject teacher.
                3. Mock exam weeks and results day in the family calendar.
                4. A printed copy of the timetable on the wall where your child revises.

                ## Notes
                Schools usually issue a personal candidate timetable with candidate number a few weeks before the exams. Check it against the provisional one and flag any clash with the exams officer straight away.
              priority: high
              deadlineOffsetDays: 14
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A single calendar holds every exam, oral, practical, coursework deadline, mock week and results day, with a printed copy on the revision wall."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Ask your child for the provisional exam timetable the school has shared"
                - "Add every paper, oral and practical to the family calendar with start times"
                - "Ask each subject teacher for coursework and non-exam assessment deadlines"
                - "Print the timetable and put it up next to the revision desk"
                - "Recheck the timetable against the final candidate timetable when the school issues it @recurring(yearly)"
            - name: Exam board and specification list for every subject
              description: |-
                ## Purpose
                Two schools teaching the same subject can follow different exam boards, with different papers, topics and question styles, and revision guides bought for the wrong board waste money and time. A one-page list of board, specification code and tier for each subject is what every later purchase, past paper search and tutor conversation starts from.

                ## Milestones
                1. Board, specification name and code recorded for every subject your child sits.
                2. Tier or level noted where a subject is tiered.
                3. A link to each specification's official page saved in one document.
                4. The list shared with your child and any tutor.
              priority: medium
              frontmatter:
                mode: research
                output_kind: artifact
                success_criteria: "A one-page list shows the exam board, specification code and tier for each subject, with links to the official pages."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Check exercise books and school letters for exam board names"
                - "Email the school if any subject's board or specification is unclear"
                - "Save each specification's official page link in one shared note"
                - "Share the finished list with your child"
            - name: Current grades and targets snapshot by subject
              description: |-
                ## Purpose
                Parents often have one vague number per subject from the last report, while the school holds working grades, targets and mock results that tell a much clearer story. Laying them side by side shows where your child is comfortable, where they are close to a boundary and where effort will move the most marks.

                ## Milestones
                1. Latest working or predicted grade and target grade collected for each subject.
                2. Each subject marked as secure, borderline or behind against its target.
                3. Two or three priority subjects agreed with your child.
                4. The snapshot saved so the next report can be compared with it.

                ## Notes
                Start from the **Metrics log** template. Targets generated from earlier test scores are estimates, so read a gap as a prompt for a conversation, not a verdict.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: research
                output_kind: artifact
                success_criteria: "A table of current and target grades for every subject exists, with two or three priority subjects agreed with your child."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Find the most recent school report or parent portal grades"
                - "Copy current and target grades for each subject into one table"
                - "Sit down with your child and mark each subject secure, borderline or behind"
                - "Agree the two or three subjects that get extra time first"
            - name: Agreeing how much help your teenager wants
              description: |-
                ## Purpose
                Some teenagers want a parent testing them every evening, others want snacks and silence, and guessing wrong leads to nagging on one side and resentment on the other. A short conversation about what help is welcome, and what is not, sets the tone for the whole exam period and gives you a reference point when things get tense.

                ## Milestones
                1. Your child has named three kinds of help they would welcome.
                2. Two things they would like you to stop doing are written down too.
                3. A signal agreed for when they want to be left alone or need you.
                4. A date set to revisit the agreement after the mocks.

                ## Notes
                Ask, then mostly listen. Teenagers who feel ownership of their revision tend to keep going when a parent is not watching.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A short written agreement lists the help your child wants, what they want you to stop and a review date after the mocks."
                cadence: one-shot
                effort_hours_estimate: "1"
              tasks:
                - "Pick a relaxed moment, such as a drive or a meal out, to raise the question"
                - "Ask your child what help has worked for them in past tests"
                - "Write down the help they want and the things they want you to drop"
                - "Put the review date after the mocks in the calendar"
            - name: School contacts for the exam years
              description: |-
                ## Purpose
                When a coursework deadline is unclear or your child is unwell on exam morning, you need the right name quickly, not the general office. Collecting the form tutor, head of year, subject teachers, exams officer and pastoral lead into one list means problems reach the person who can fix them on the first attempt.

                ## Milestones
                1. Names and email addresses for every subject teacher recorded.
                2. Form tutor, head of year and pastoral lead added.
                3. The exams officer's direct contact and the exam-morning absence procedure noted.
                4. The list saved on both parents' phones.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "One contact list with subject teachers, tutor, head of year, pastoral lead and exams officer is saved on each parent's phone."
                cadence: one-shot
                effort_hours_estimate: "1"
              tasks:
                - "Ask your child to list their teachers for each subject"
                - "Find staff email addresses on the school website or parent portal"
                - "Ask the office who the exams officer is and how to report exam-day illness"
                - "Update the contact list at the start of each school year @recurring(yearly)"
            - name: Exam access arrangements check with the school
              description: |-
                ## Purpose
                Extra time, a reader, a separate room or rest breaks have to be applied for by the school, with evidence, well before the exams, and they usually need to reflect how your child already works in class. If your child has a diagnosed need, an injury, or struggles with processing speed or anxiety, asking early is the difference between support in the exam hall and none.

                ## Milestones
                1. The school's special needs coordinator or exams officer asked whether your child qualifies for any arrangement.
                2. Any assessment or evidence the school needs booked or supplied.
                3. The agreed arrangements confirmed in writing.
                4. Your child has used the arrangements in the mocks so they are their normal way of working.

                ## Notes
                Deadlines for applications fall months before the summer series. For wider support plans beyond exams, see the Special Educational Needs Support area.
              priority: high
              deadlineOffsetDays: 60
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "The school has confirmed in writing which exam access arrangements your child has, or that none apply, before the mock exams."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Email the special needs coordinator asking whether access arrangements are being considered"
                - "Gather any medical letters or assessment reports the school may need"
                - "Ask for the outcome in writing, including what happens in the mocks"
                - "Talk to your child about how extra time or rest breaks will work in practice"
            - name: Home revision space and kit
              description: |-
                ## Purpose
                Revising on the bed with a phone in reach is the default for many teenagers, and it rarely works for long sessions. A fixed spot with a clear surface, good light, a wall for the timetable and the right kit makes starting easier, which matters more than any planner.

                ## Milestones
                1. A revision spot chosen with your child, in their room or a shared space.
                2. Desk, chair and lighting checked for a two-hour sitting.
                3. Stationery, flashcards, highlighters and an exam-approved calculator in a box at the desk.
                4. A place agreed for the phone to sit during revision blocks.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Your child has a set revision spot with working light, stocked kit and an agreed phone parking place."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Ask your child where they concentrate best and where they get distracted"
                - "Check the lighting and chair at the chosen spot during an evening session"
                - "Buy flashcards, coloured pens and a calculator on the approved list"
                - "Restock revision stationery and printer paper @recurring(quarterly)"
            - name: Wellbeing baseline before exam season
              description: |-
                ## Purpose
                Changes in sleep, appetite, mood or friendships are much easier to spot when you know what normal looked like in a calmer month. Noting your child's usual patterns now, before pressure builds, gives you something concrete to compare against in April rather than a feeling that something is off.

                ## Milestones
                1. Usual bedtime, wake time and hours of sleep noted.
                2. Typical appetite, exercise and time with friends written down.
                3. Your child's own rating of their stress level recorded.
                4. Two or three personal early warning signs agreed with them.

                ## Notes
                Keep this private and short. The point is a reference, not surveillance.
              priority: high
              frontmatter:
                mode: building
                output_kind: knowledge
                success_criteria: "A short note records your child's normal sleep, eating, activity and stress level, plus the warning signs they agree to."
                cadence: one-shot
                effort_hours_estimate: "1"
              tasks:
                - "Write down your child's usual bedtime, wake time and weekend pattern"
                - "Note how often they exercise and see friends in a normal week"
                - "Ask them to rate their current stress from one to ten"
                - "Agree together on the signs that would tell you they are struggling"
            - name: Protecting exam season in the family calendar
              description: |-
                ## Purpose
                Weddings, house moves, family holidays and a sibling's big events have a way of landing in the middle of exam weeks. Blocking the main exam period and the fortnight before it now lets you plan around it, decline early and keep the house quiet when it counts.

                ## Milestones
                1. The main exam period and the two weeks before it blocked in the family calendar.
                2. Existing commitments in that window listed and each one kept, moved or declined.
                3. Extended family told which weeks are off limits.
                4. A small treat or outing planned for the day after the last exam.
              priority: medium
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "The exam window is blocked in the family calendar, every clash in it has a decision, and relatives know the dates."
                cadence: one-shot
                effort_hours_estimate: "1"
              tasks:
                - "Block the exam period and the fortnight before it in the shared calendar"
                - "List every event already booked in that window"
                - "Decide with your partner which events to keep, move or decline"
                - "Tell grandparents and close family the dates to avoid"
            - name: Revision timetable built back from the first exam
              description: |-
                ## Purpose
                Most students underestimate how many topics they have to cover and start in earnest far too late. Counting the topics in each specification and working backwards from the first paper, with time for two passes through everything, shows your child how many sessions a week they actually need and when to start.

                ## Milestones
                1. Topics for each subject listed from the specification or the teacher's checklist.
                2. Weeks available before the first exam counted, minus holidays and mock weeks.
                3. Sessions per subject per week worked out, weighted towards the priority subjects.
                4. A first full timetable drafted by your child and pinned up.

                ## Notes
                Plan for two passes through the content and leave the final fortnight for past papers. Thirty to forty minute sessions with short breaks suit most teenagers better than long blocks.
              priority: medium
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Your child has a written revision timetable covering every topic twice before the first exam, built from a count of topics and available weeks."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Ask each teacher for a topic checklist for their subject"
                - "Count the weeks between now and the first exam, leaving out holidays"
                - "Help your child divide topics into weekly sessions per subject"
                - "Pin the finished timetable next to the exam calendar"
            - name: Sunday revision plan review together
              description: |-
                ## Purpose
                A revision timetable written once in January is out of date by February, because topics take longer, homework piles up and mocks reveal new gaps. Fifteen minutes on Sunday to look at what got done and what the week holds keeps the plan honest and gives you a natural, non-nagging moment to ask how things are going.

                ## Milestones
                1. A weekly revision plan exists in whatever format your child prefers.
                2. A Sunday slot of about fifteen minutes agreed and kept.
                3. Each week's plan includes at least one rest evening.
                4. Topics that keep slipping are noted and raised with the teacher.

                ## Notes
                Your child writes the plan. Your job is to ask questions and help them spot clashes, not to fill it in.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A revision plan is reviewed with your child for fifteen minutes on most Sundays from the start of the exam year until the last paper."
                cadence: rolling
              tasks:
                - "Ask your child to choose a paper, wall or app format for their weekly plan"
                - "Agree a fifteen-minute Sunday slot that does not clash with sport or work"
                - "Review last week's plan and the coming week together @recurring(weekly:sun)"
                - "Note any topic that has slipped three weeks running"
            - name: Past paper practice log
              description: |-
                ## Purpose
                Past papers under timed conditions are the closest rehearsal for the real thing, and marking them against the official scheme shows exactly which question types lose marks. A simple log of paper, score and weak questions turns scattered practice into a record your child and their teachers can act on.

                ## Milestones
                1. Past papers and mark schemes for each subject found on the exam board site.
                2. A log set up with columns for subject, paper, date, score and weak questions.
                3. At least one timed paper a week logged in the final term.
                4. Recurring weak question types shared with the subject teacher.

                ## Notes
                Start from the **Metrics log** template. Older papers may follow a previous specification, so check the year before relying on one.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A log shows at least one timed, self-marked past paper per week across the final term, with weak question types noted."
                cadence: rolling
              tasks:
                - "Download one recent past paper and mark scheme for a priority subject"
                - "Set up the practice log with your child"
                - "Ask how this week's timed paper went and add it to the log @recurring(weekly:wed)"
                - "Print the next paper and leave it on the desk with a timer"
            - name: Monthly progress check against targets
              description: |-
                ## Purpose
                Reports arrive a few times a year, which is too slow to catch a subject sliding. A monthly look at portal grades, homework feedback and the practice log, compared with the snapshot you took at the start, catches problems while there is still time to talk to a teacher or adjust the plan.

                ## Milestones
                1. Parent portal grades and homework feedback checked once a month.
                2. Each priority subject marked as improving, flat or slipping.
                3. Any subject slipping two months running raised with its teacher.
                4. The grades snapshot updated after each report or mock.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "The grades snapshot is updated every month in the exam year, and any subject slipping two months running has been raised with its teacher."
                cadence: rolling
              tasks:
                - "Check the parent portal and latest homework feedback @recurring(monthly:5)"
                - "Mark each priority subject as improving, flat or slipping"
                - "Email the teacher of any subject slipping for two months"
                - "Share one specific improvement you noticed with your child"
            - name: Exam-year sleep routine
              description: |-
                ## Purpose
                Memory consolidation happens during sleep, and teenagers who revise past midnight often do worse than those who stop earlier. Agreeing a wind-down time, a phone-free last half hour and a regular wake time, including weekends where possible, protects the sleep that makes revision stick.

                ## Milestones
                1. A target bedtime and wake time agreed with your child for school nights.
                2. A phone charging spot outside the bedroom agreed or a clear alternative.
                3. Late-night revision sessions reduced to rare exceptions.
                4. A week of sleep noted before the mocks and again before the summer exams.

                ## Notes
                Start from the **Sleep review** template. Phone and game rules in general belong in the Children's Screen Time Rules area; this is only about exam-year nights.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Your child keeps the agreed bedtime on at least five school nights a week through the exam term, checked by a sleep note before mocks and finals."
                cadence: rolling
              tasks:
                - "Ask your child what time they would need to sleep to wake without an alarm"
                - "Agree a wind-down time and where the phone charges overnight"
                - "Give a ten-minute warning before the agreed wind-down @recurring(daily)"
                - "Note a week of sleep before each set of exams"
            - name: Exam-season meals and snacks
              description: |-
                ## Purpose
                Skipped breakfasts and energy drinks are common in exam weeks, and a hungry or over-caffeinated teenager does not concentrate well. Planning simple meals around the exam timetable, with breakfast on exam mornings and snacks at the desk, is one of the most useful things a parent can quietly do.

                ## Milestones
                1. A weekly meal plan covering the main revision and exam weeks.
                2. A breakfast your child will actually eat agreed for exam mornings.
                3. Desk snacks and a water bottle stocked.
                4. Energy drinks and late caffeine discussed and limited.

                ## Notes
                Start from the **Weekly meal plan** template.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A weekly meal plan is in use through the exam weeks, with an agreed exam-morning breakfast and a stocked snack shelf."
                cadence: cyclic
              tasks:
                - "Ask your child which breakfasts they would eat on a nervous morning"
                - "Plan the week's meals around exam and revision days @recurring(weekly:sat)"
                - "Stock a snack shelf and a refillable water bottle near the desk"
                - "Talk about energy drinks and caffeine after mid-afternoon"
            - name: Weekly wellbeing check-in walk
              description: |-
                ## Purpose
                Teenagers rarely open up when asked directly across a kitchen table, but often talk side by side on a walk, a drive or while cooking. A regular low-key check-in each week, with a few open questions about sleep, workload and friends, lets you spot drift against the baseline early.

                ## Milestones
                1. A weekly time and activity chosen that your child does not mind.
                2. Three open questions ready that are not about grades.
                3. Anything worrying compared against the wellbeing baseline.
                4. Persistent warning signs followed up with the school or a doctor.

                ## Notes
                If you see signs of self-harm, hopelessness or not eating, act the same day. The Supporting a Teen's Mental Health area covers getting help.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A side-by-side check-in happens most weeks through the exam year, with any warning sign compared to the baseline and followed up."
                cadence: rolling
              tasks:
                - "Choose a walk, drive or cooking slot your child would enjoy"
                - "Write three open questions that are not about marks"
                - "Go for the weekly check-in walk or drive @recurring(weekly:thu)"
                - "Compare anything worrying with the baseline note"
            - name: Coursework and non-exam assessment deadline tracker
              description: |-
                ## Purpose
                Coursework, practical endorsements, art portfolios and investigations often count for a large share of the grade and have school deadlines weeks before the exam board's. A single list of each piece, its internal deadline and its status prevents the panic of three projects due in the same week.

                ## Milestones
                1. Every coursework or non-exam piece listed with weighting and internal deadline.
                2. Each piece marked not started, drafting or submitted.
                3. Clashing deadlines spotted and spaced out with your child.
                4. Final submissions confirmed with each teacher.

                ## Notes
                Teachers can give only general feedback on drafts under most exam board rules, so do not expect detailed corrections, and do not write any of it yourself.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A tracker lists every coursework piece with deadline and status, checked monthly, and every piece is confirmed submitted on time."
                cadence: rolling
              tasks:
                - "List every coursework or non-exam assessment piece with your child"
                - "Add each internal deadline to the family calendar"
                - "Update the status of every piece with your child @recurring(monthly:12)"
                - "Ask each teacher to confirm final submissions"
            - name: Friday evening off and weekly exercise
              description: |-
                ## Purpose
                Teenagers who revise every evening without a break tend to burn out by the exams, while regular exercise and one evening off a week help concentration and mood. Protecting a Friday evening and a few sessions of sport, a run or a walk keeps the revision week sustainable.

                ## Milestones
                1. One evening a week agreed as revision-free.
                2. At least two sessions of exercise built into the weekly plan.
                3. Time with friends kept in some form through exam season.
                4. The rest evening still protected in the final fortnight.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "The weekly revision plan shows one revision-free evening and at least two exercise sessions on most weeks of the exam year."
                cadence: rolling
              tasks:
                - "Agree which evening each week is revision-free"
                - "Ask your child which two kinds of exercise they would keep up"
                - "Suggest a film, meal out or friends round for the evening off @recurring(weekly:fri)"
                - "Check the exercise sessions are in the Sunday plan"
            - name: Lighter household duties during exam season
              description: |-
                ## Purpose
                Carrying a full load of chores, sibling care and the family dog walk leaves a teenager less time and energy for revision. Temporarily shifting some jobs to other family members for the exam term, and saying clearly when they return, is a fair trade most siblings can accept.

                ## Milestones
                1. Your child's regular household jobs listed.
                2. Jobs that will pause or move during exam term agreed.
                3. Siblings and other adults told who is covering what.
                4. A date set for the normal rota to resume after the last exam.
              priority: low
              frontmatter:
                mode: operating
                output_kind: decision
                success_criteria: "A written exam-term version of the household rota exists, with covered jobs assigned and a return date to the normal rota."
                cadence: cyclic
              tasks:
                - "List the jobs your child does in a normal week"
                - "Decide which jobs pause or move during the exam term"
                - "Explain the temporary change to siblings and what they get in return"
                - "Rebalance the exam-term rota if anyone is overloaded @recurring(monthly:20)"
            - name: How effective revision works
              description: |-
                ## Purpose
                Re-reading notes and highlighting feel productive but are some of the weakest ways to learn, while self-testing, spacing topics out and mixing question types are far stronger. A parent who knows the difference can nudge gently towards methods that work instead of praising hours spent at the desk.

                ## Milestones
                1. Retrieval practice, spacing and interleaving understood well enough to explain in a sentence each.
                2. Your child's current methods discussed without judgement.
                3. One stronger method tried for two weeks in a priority subject.
                4. The method that worked noted in the revision plan.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "You can explain three evidence-based revision methods, and your child has trialled one for two weeks with the result noted."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Read a short guide on retrieval practice from a learning science source"
                - "Ask your child how they currently revise for a test"
                - "Suggest one self-testing method for a single priority subject"
                - "Review after two weeks whether the method felt easier to recall from"
            - name: Grades, grade boundaries and what they mean
              description: |-
                ## Purpose
                Number grades, letter grades, points scores, pass thresholds and tiered papers vary by country and qualification, and parents who learnt a different system often misread what a result means. Knowing how grades are awarded, what a standard or strong pass is, and how boundaries move each year makes reports and results day far less confusing.

                ## Milestones
                1. The grading scale for each qualification your child sits written down.
                2. The grades usually required for post-16 courses and core subjects noted.
                3. Last year's grade boundaries for one or two subjects looked at.
                4. Any tier caps on achievable grades understood.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A one-page note explains the grading scale, the pass thresholds that matter for next steps and how boundaries are set."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Find the official grading guide from the exam regulator or board"
                - "Write the grade scale and the key pass thresholds on one page"
                - "Look up last year's boundaries for a subject your child finds hard"
                - "Check the published grade boundaries after each exam series @recurring(yearly)"
            - name: Mark schemes and examiner reports together
              description: |-
                ## Purpose
                Examiner reports say, subject by subject, where candidates lost marks last year, and mark schemes show what earns each point. Reading one of each with your child, especially for essay subjects, reveals the difference between knowing the content and writing what the examiner can credit.

                ## Milestones
                1. One examiner report read for each priority subject.
                2. Three common mistakes from the reports noted with your child.
                3. One past answer self-marked against the official mark scheme.
                4. The findings shared with the subject teacher if they surprise you.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Your child has read an examiner report for each priority subject and marked one answer against the mark scheme."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Download last year's examiner report for one priority subject"
                - "Pick out the three most common mistakes it mentions"
                - "Ask your child to mark an old answer against the mark scheme"
                - "Ask the agent to summarise the examiner reports for the remaining priority subjects"
            - name: Quizzing your child from their own flashcards
              description: |-
                ## Purpose
                You do not need to know chemistry to help with chemistry: holding your child's flashcards and asking the questions is real retrieval practice, and it takes ten minutes. A regular quiz slot gives you a useful role, shows which cards keep coming back wrong and keeps the conversation away from grades.

                ## Milestones
                1. Your child has flashcards or a question list for at least two subjects.
                2. A ten-minute quiz slot agreed on a weekday.
                3. Cards answered wrongly sorted into a pile for the next session.
                4. The quiz slot kept through the final term.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A ten-minute flashcard quiz happens most weeks through the final term, with a growing pile of cards your child now gets right."
                cadence: rolling
              tasks:
                - "Ask your child whether they would like to be quizzed and on what"
                - "Agree which subject's cards to start with"
                - "Quiz your child from their flashcards for ten minutes @recurring(weekly:tue)"
                - "Keep the cards they got wrong at the front for next time"
            - name: Exam timing and command word practice
              description: |-
                ## Purpose
                Many marks are lost not through ignorance but through running out of time or answering a different question from the one asked: describing when the paper said evaluate. Practising a mark-per-minute rule and the meaning of command words turns knowledge into marks.

                ## Milestones
                1. The time per mark worked out for each paper.
                2. The exam board's list of command words read and the tricky ones noted.
                3. Two full papers sat under strict timing at home.
                4. Unfinished questions in practice papers falling to none.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Your child has worked out time per mark for each paper and finished two full timed papers at home without leaving questions blank."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Find the exam board's glossary of command words"
                - "Work out minutes per mark for one paper with your child"
                - "Set up a quiet room and a timer for a full timed paper"
                - "Run one strict timed paper under exam conditions @recurring(monthly:18)"
            - name: Talking about grades without adding pressure
              description: |-
                ## Purpose
                Teenagers often hear comparisons, disappointment or worry in comments parents mean as encouragement, and pressure from home is one of the stresses they report most. Learning to praise effort and strategy, ask about the process and respond calmly to a bad mock protects the relationship and their motivation.

                ## Milestones
                1. Three phrases you tend to use about grades noticed and reconsidered.
                2. A calm first response to a disappointing result planned in advance.
                3. Comparisons with siblings, cousins or friends dropped.
                4. Your partner and grandparents asked to follow the same approach.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "You have a planned calm response to a poor result and both parents and grandparents have agreed to avoid grade comparisons."
                cadence: phased
                effort_hours_estimate: "3"
              tasks:
                - "Notice and write down what you said after the last test result"
                - "Plan your first sentence for when a result disappoints"
                - "Agree with your partner to drop comparisons with other children"
                - "Ask grandparents to ask about subjects your child enjoys rather than marks"
            - name: Telling exam nerves from something that needs help
              description: |-
                ## Purpose
                Some worry before exams is normal and even useful, but panic attacks, not eating, withdrawal or talk of hopelessness are signs that need professional support. Knowing the difference, and who to call at school and in health services, means you act early instead of waiting for the exams to end.

                ## Milestones
                1. Common signs of ordinary exam stress and of more serious distress written down.
                2. The school pastoral contact and your family doctor's number to hand.
                3. A crisis line saved on your phone and your child's.
                4. Two calming techniques your child finds useful noted for exam mornings.

                ## Notes
                This is about recognising and routing, not diagnosing. If you are worried about your child's safety, contact emergency services or a crisis line straight away.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A short note lists warning signs, the pastoral contact, the doctor and a crisis line, saved on both your phone and your child's."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Read a reputable young people's mental health charity guide on exam stress"
                - "Save the pastoral lead's contact and a crisis line on your phone"
                - "Ask your child which calming methods have helped before tests"
                - "Agree when you would contact the doctor rather than wait"
            - name: Understanding post-16 routes and qualifications
              description: |-
                ## Purpose
                After the first big exams your child may be choosing between academic subjects, a broad diploma, vocational or technical qualifications, an apprenticeship or a mix. Parents who understand what each route leads to, and what grades it asks for, help their child choose on fit rather than on what friends are doing.

                ## Milestones
                1. The main post-16 routes available locally listed.
                2. Typical entry requirements noted for each route.
                3. Where each route can lead after eighteen understood in outline.
                4. Questions for the school careers adviser written down.
              priority: medium
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A one-page summary lists the local post-16 routes, their entry requirements and where each leads, with questions for the careers adviser."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Ask the school for its post-16 options guide and careers adviser contact"
                - "List the academic, technical and apprenticeship routes in your area"
                - "Note the entry grades each route asks for"
                - "Ask the agent to draft a plain comparison table of the routes for your child"
            - name: Choosing exam subjects at options time
              description: |-
                ## Purpose
                Around the age of thirteen or fourteen many schools ask students to pick the subjects they will take to the first big exams, and those choices can open or close later routes. A choice that balances what your child enjoys, what they are good at and what keeps doors open is worth a few evenings of real thought before the form is due.

                ## Milestones
                1. The compulsory subjects and the option blocks understood.
                2. Each possible option rated by your child for interest and current ability.
                3. Subjects needed for any career or post-16 course your child is considering checked.
                4. The options form submitted with a reserve choice.

                ## Notes
                Avoid choosing a subject because a favourite teacher or best friend is taking it. Teachers and groups change.
              priority: high
              deadlineOffsetDays: 120
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "The options form is submitted on time with a reserve choice, each choice rated by your child for interest, ability and future use."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Find the options booklet and form deadline"
                - "Ask your child to rate each optional subject for interest and ability"
                - "Check whether any subject is required for routes your child has in mind"
                - "Attend the options evening with a list of questions"
                - "Submit the form with a reserve choice"
            - name: Choosing post-16 subjects and courses
              description: |-
                ## Purpose
                Post-16 choices are narrower and harder to undo: three or four subjects, or one vocational course, shape what your child can apply for next. Checking requirements for courses they are drawn to, the jump in difficulty from earlier exams and how subjects combine prevents a painful switch a term in.

                ## Milestones
                1. A shortlist of five or six subjects or courses your child is considering.
                2. Entry requirements for each checked against predicted grades.
                3. Subject requirements for two or three possible next steps checked.
                4. A final choice made with at least one teacher's view.
              priority: high
              deadlineOffsetDays: 150
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A final post-16 subject or course choice is recorded, checked against entry and progression requirements and discussed with a teacher."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Ask your child to list the subjects they would keep if they could only keep four"
                - "Check the entry grade for each subject at the post-16 provider"
                - "Look up subject requirements for a few courses or careers your child likes"
                - "Book a conversation with a subject teacher about the step up in difficulty"
            - name: Sixth form, college or apprenticeship decision
              description: |-
                ## Purpose
                Staying at the same school, moving to a separate college or starting an apprenticeship are very different experiences in independence, timetable, travel and peer group. Visiting the real options and comparing them on your child's own priorities avoids defaulting to whatever is nearest.

                ## Milestones
                1. Two or three post-16 providers or apprenticeships shortlisted.
                2. Open events visited with questions prepared.
                3. Each option scored on the same criteria your child chose.
                4. Applications sent before each provider's deadline.

                ## Notes
                Applications for popular colleges and apprenticeships can close in winter, well before exam results.
              priority: medium
              deadlineOffsetDays: 180
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "Your child has applied to their chosen post-16 provider or apprenticeship before its deadline, with options compared on the same criteria."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "Ask your child to choose five criteria that matter most to them"
                - "List open event dates for each shortlisted provider"
                - "Score each option after visiting it"
                - "Put each application deadline in the family calendar"
            - name: Deciding whether a tutor is worth it
              description: |-
                ## Purpose
                Tutoring can help with a specific gap, a confidence problem or a subject the school is struggling to staff, but it costs money every week and adds another evening of work. Deciding against a clear reason, budget and end date, and checking the tutor knows the right specification, avoids paying for a habit rather than a result.

                ## Milestones
                1. The specific problem a tutor would solve written in one sentence.
                2. Free alternatives such as school clinics or online courses checked first.
                3. A weekly budget and an end date set.
                4. A tutor chosen with relevant specification experience and safeguarding checks, or the decision not to recorded.

                ## Notes
                Start from the **Purchase decision** template. Ask any tutor for references and evidence of a background check before the first session.
              priority: medium
              deadlineOffsetDays: 45
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A recorded decision on tutoring states the problem, budget and end date, and any tutor chosen has specification experience and a background check."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Write down the one problem you hope a tutor would fix"
                - "Ask the subject teacher whether the school runs catch-up sessions"
                - "Set a weekly budget and the date tutoring would end"
                - "Check any tutor's references and background check before booking"
            - name: Foundation or higher tier entry decision
              description: |-
                ## Purpose
                In tiered subjects the easier paper caps the top grade, while the harder paper risks a fail if your child falls below its lowest boundary. Schools decide tiers from mock evidence, and asking how and when the decision is made lets you add context and understand the trade-off before entries close.

                ## Milestones
                1. The tiered subjects your child sits identified.
                2. The school's planned tier for each confirmed.
                3. The grade range each tier allows understood.
                4. Any concern discussed with the teacher before the entry deadline.
              priority: medium
              deadlineOffsetDays: 90
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "The tier for each tiered subject is confirmed with the school before entries close, with the grade range of each tier understood."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Ask your child which subjects have tiered papers"
                - "Email each teacher asking which tier is planned and why"
                - "Look up the grades available on each tier"
                - "Raise any disagreement before the school's exam entry deadline"
            - name: Part-time job and clubs during the exam year
              description: |-
                ## Purpose
                Saturday jobs, sports teams and bands can protect wellbeing and teach responsibility, but too many hours squeeze revision into late nights. Looking at the real weekly hours and agreeing what continues, what scales down and when, is better than a sudden ban in May.

                ## Milestones
                1. Weekly hours of job, clubs and commitments added up.
                2. Each commitment marked keep, reduce or pause for the exam term.
                3. Employer or coach told about any reduced hours in good time.
                4. A restart date agreed for anything paused.
              priority: low
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "Every job and club commitment has a recorded keep, reduce or pause decision for the exam term, with employers and coaches told."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Add up the hours your child spends on jobs and clubs each week"
                - "Ask your child which commitments matter most to them"
                - "Agree which ones continue, reduce or pause through the exam term"
                - "Help your child tell their employer or coach in good time"
            - name: Mock exams preparation and debrief
              description: |-
                ## Purpose
                Mocks are the dress rehearsal: they test revision methods, exam technique and nerves, and the results often shape predicted grades and tier entries. Treating them seriously, then debriefing calmly paper by paper, gives the clearest picture you will get of what to change before the real exams.

                ## Milestones
                1. A mock revision plan built three weeks ahead.
                2. Mock results and feedback collected for every subject.
                3. Each paper debriefed: what went well, where marks went and why.
                4. The revision plan rewritten from the debrief.

                ## Notes
                A bad mock is useful information. Celebrate the effort, then focus on the two or three changes the debrief points to.
              priority: medium
              deadlineOffsetDays: 90
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "Every mock paper has been debriefed with your child and the revision plan rewritten within two weeks of the results."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Put the mock exam dates in the calendar with a three-week revision lead-in"
                - "Collect the marked papers or feedback for each subject"
                - "Go through each subject's result with your child at the kitchen table"
                - "Rewrite the revision plan around the three biggest gaps"
            - name: Parents' evening in an exam year
              description: |-
                ## Purpose
                Five-minute slots with each teacher pass quickly, and parents often leave with general reassurance rather than anything to act on. Going in with the grades snapshot, one specific question per subject and your child beside you turns the evening into a set of clear next steps.

                ## Milestones
                1. Appointments booked with every priority subject teacher.
                2. One specific question prepared per subject.
                3. Each teacher's main advice written down during the evening.
                4. Actions agreed with your child the next day.

                ## Notes
                Start from the **Meeting notes** template. Ask what your child should do differently, not just how they are doing.
              priority: medium
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "Notes from every priority subject teacher exist after parents' evening, with actions agreed with your child within two days."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Book slots with priority subject teachers as soon as booking opens"
                - "Write one specific question per subject using the grades snapshot"
                - "Take notes during each conversation"
                - "Agree the follow-up actions with your child the next day"
            - name: Spring break revision fortnight
              description: |-
                ## Purpose
                The last long holiday before the summer exams is often where the most revision happens, or where it does not happen at all. Planning it with your child, with mornings of revision, school revision sessions, rest days and something to look forward to, makes it productive without feeling like a prison.

                ## Milestones
                1. School holiday revision sessions and deadlines listed.
                2. A daily plan with revision blocks and free afternoons or evenings.
                3. At least three full rest days built in.
                4. A review at the end of the break of what got done.
              priority: medium
              deadlineOffsetDays: 120
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A written holiday revision plan with at least three rest days is followed, and its results are reviewed at the end of the break."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Ask the school about holiday revision sessions"
                - "Help your child plan the break with revision blocks and rest days"
                - "Book one outing or treat for the middle of the holiday"
                - "Review the fortnight together on the last weekend"
            - name: Exam day kit and morning routine
              description: |-
                ## Purpose
                Forgotten calculators, see-through pencil cases, smart watches in pockets and late buses cause avoidable stress or even disqualification. A checklist by the door, a rehearsed morning and a plan for transport problems take one more worry off the day.

                ## Milestones
                1. A kit list for each paper: pens, calculator, ruler, clear pencil case, water.
                2. Banned items such as smart watches and phones understood.
                3. A morning routine rehearsed on a mock day.
                4. A backup lift or route planned for exam mornings.
              priority: medium
              frontmatter:
                mode: event
                output_kind: artifact
                success_criteria: "A kit checklist sits by the door, the morning routine has been rehearsed once, and a backup route to school is agreed."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Read the school's rules on what candidates can take into the exam room"
                - "Write the kit checklist and pin it by the front door"
                - "Rehearse the exam morning routine on a mock day"
                - "Agree a backup lift or route if the usual transport fails"
            - name: Results day plan with a fallback
              description: |-
                ## Purpose
                Results day can bring relief, disappointment or a scramble for a different post-16 place, and decisions sometimes need making the same morning. Knowing in advance when and how results arrive, who your child wants with them and what you will do if grades miss a requirement keeps the day calm.

                ## Milestones
                1. Time and method for collecting results confirmed with the school.
                2. Your child's plan for who they want with them agreed.
                3. A fallback route written down if a grade falls short.
                4. Contacts for the post-16 provider and the exams officer ready.

                ## Notes
                Agree beforehand not to post or share results until your child is ready.
              priority: high
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A written results day plan names the collection time, who goes, the fallback if a requirement is missed and the contacts needed."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Check how and when the school releases results"
                - "Ask your child how they would like to open their results"
                - "Write a fallback for any grade that misses a requirement"
                - "Book the day off work if you can"
            - name: Marking the end of exams
              description: |-
                ## Purpose
                After months of pressure the last exam can end with an odd flatness, and a planned celebration helps your child close the chapter whatever the results turn out to be. Something they choose, with friends or family, marks the effort rather than the outcome.

                ## Milestones
                1. Your child has chosen how they want to celebrate.
                2. A date fixed for the day or weekend after the last paper.
                3. Budget agreed and any bookings made.
                4. Plans for the summer before results talked through.
              priority: low
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A celebration your child chose takes place within a week of their last exam, with summer plans discussed."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Ask your child how they would like to mark the last exam"
                - "Fix a date close to the final paper"
                - "Agree a budget and make any bookings"
                - "Talk about what they want to do with the summer"
            - name: Exam years across two homes
              description: |-
                ## Purpose
                When a teenager splits time between two homes, revision notes get left behind, rules on screens and bedtimes differ, and each parent hears a different version of how things are going. Agreeing a shared exam calendar, duplicate kit and one source of school updates keeps the exam year steady wherever your child sleeps.

                ## Milestones
                1. Both parents have the exam timetable and coursework deadlines.
                2. Revision kit duplicated or a travel bag agreed.
                3. Both homes signed up for school updates and reports.
                4. Handover arrangements adjusted around exam days.

                ## Notes
                Keep messages about exams factual and short. The Co-Parenting After Separation area covers the wider arrangements.
              priority: medium
              frontmatter:
                mode: building
                output_kind: habit
                success_criteria: "Both parents hold the same exam calendar and school updates, and handovers avoid exam mornings throughout the exam season."
                cadence: phased
                effort_hours_estimate: "3"
              tasks:
                - "Share the exam timetable and coursework deadlines with the other parent"
                - "Ask the school to send reports and letters to both homes"
                - "Buy a second set of key revision kit or agree a travel bag"
                - "Send the other home a short update on the week's revision plan @recurring(weekly:mon)"
            - name: Exam season around a full-time job
              description: |-
                ## Purpose
                Parents in demanding jobs often feel guilty about not being home after school in exam season, but a few well-placed hours matter more than constant presence. Booking leave for key exam days, protecting one weekday evening and shifting meetings away from results day keeps you there when it counts.

                ## Milestones
                1. Key exam days and results day identified for leave or flexible working.
                2. Leave or flexible hours requested from your employer.
                3. One weekday evening a week kept free of work.
                4. A plan for who is home on the hardest exam days.
              priority: low
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "Leave or flexible hours are approved for results day and the hardest exam days, and one protected weekday evening holds through exam season."
                cadence: phased
                effort_hours_estimate: "2"
              tasks:
                - "Mark the three hardest exam days and results day as priority dates"
                - "Request leave or flexible hours for those days"
                - "Keep a family evening free of work calls each week @recurring(weekly:wed)"
                - "Agree with your partner or family who is home on each hard day"
            - name: Maths or English resit year
              description: |-
                ## Purpose
                In some systems a student who misses a pass in maths or the main language must keep studying it and resit, often alongside a new course and with knocked confidence. A clear resit plan with the college, regular practice and small wins rebuilds belief and gives the best chance of passing next time.

                ## Milestones
                1. The resit date, entry process and grade needed confirmed with the provider.
                2. The topics that lost most marks identified from the results breakdown.
                3. A weekly practice slot running alongside the new course.
                4. A practice paper score at or above the pass boundary before the resit.

                ## Notes
                Resits can run in autumn and summer. Ask which series your child is entered for and whether they are entered automatically.
              priority: medium
              frontmatter:
                mode: building
                output_kind: habit
                success_criteria: "Your child is entered for the resit, practises weekly and scores at or above the pass boundary on a practice paper before the exam."
                cadence: phased
                effort_hours_estimate: "20"
              tasks:
                - "Confirm the resit date and entry arrangements with the school or college"
                - "Ask for the breakdown of marks from the original exam"
                - "Agree a weekly practice time with your child"
                - "Check progress with a timed practice paper @recurring(monthly:8)"
            - name: Illness or bereavement during exams
              description: |-
                ## Purpose
                Serious illness, injury, a family death or another major event close to an exam can affect performance, and most exam systems allow the school to apply for special consideration if told promptly with evidence. Knowing the process before you need it means a hard week is not made worse by a missed deadline.

                ## Milestones
                1. The school's special consideration process and deadline understood.
                2. The exams officer told as soon as an event happens.
                3. Supporting evidence such as a doctor's note supplied.
                4. Your child's options for sitting, delaying or missing a paper discussed with the school.

                ## Notes
                Special consideration usually brings a small adjustment, not a full grade. Sitting the paper when possible is often still the better choice, so take the school's advice.
              priority: high
              frontmatter:
                mode: service
                output_kind: deliverable
                success_criteria: "The exams officer has been told within the school's deadline, with supporting evidence, and the decision about affected papers is recorded."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Ask the exams officer how special consideration works and its deadline"
                - "Save the exams officer's direct email for urgent use"
                - "Contact the school as soon as an illness or event happens"
                - "Send a doctor's letter or other evidence the same week"
            - name: Exam years after moving from another school system
              description: |-
                ## Purpose
                Families arriving from another country, or another region, often face a different grading scale, unfamiliar subjects, and gaps or repetition in content. Mapping what your child already covered against the new specifications and asking about language support helps them start at the right level.

                ## Milestones
                1. Previous reports and qualifications translated or summarised.
                2. Content already covered mapped against the new specifications.
                3. Gaps agreed with each teacher and a catch-up plan set.
                4. Language or home-language qualification options checked.

                ## Notes
                Some boards offer exams in many home languages, which can be a strong extra qualification for a bilingual child.
              priority: medium
              frontmatter:
                mode: research
                output_kind: artifact
                success_criteria: "A written map shows what your child covered before against the new specifications, with gaps and a catch-up plan agreed with teachers."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Gather your child's last two years of reports from the previous school"
                - "Ask the school for each subject's specification and scheme of work"
                - "Mark topics already covered, partly covered and new"
                - "Ask about home-language qualifications and language support"
            - name: Re-engaging a teenager who has stopped revising
              description: |-
                ## Purpose
                Avoidance often looks like laziness but usually comes from feeling overwhelmed, behind or convinced that effort will not help. Finding the reason, shrinking the task to something small and achievable, and celebrating that first step works far better than confiscating devices or lectures.

                ## Milestones
                1. A calm conversation held about why revision has stopped.
                2. One small daily task agreed, such as twenty minutes on one topic.
                3. The school's pastoral or subject staff told and asked for support.
                4. Three weeks of small tasks completed and the plan widened.

                ## Notes
                If avoidance comes with low mood, withdrawal or changes in eating or sleep, treat it as a wellbeing issue first.
              priority: medium
              frontmatter:
                mode: service
                output_kind: habit
                success_criteria: "After three weeks your child has completed a small daily revision task on most days and agreed a wider plan."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Ask, without blame, what makes it hard to start revising"
                - "Agree a twenty-minute task on the topic that worries them least"
                - "Let the form tutor know and ask what support the school can offer"
                - "Notice and mention each finished task in a quiet weekly chat @recurring(weekly:mon)"
            - name: Review of marking after results
              description: |-
                ## Purpose
                If a grade is a few marks below a boundary, or far from what teachers expected, schools can request a review of marking, sometimes with a copy of the script first. Deadlines are short and grades can go down as well as up, so the decision needs facts, the school's view and your child's consent.

                ## Milestones
                1. Raw marks and the grade boundary for the disputed paper obtained.
                2. The teacher's view on whether a review is worthwhile recorded.
                3. Your child's written consent given, knowing a grade can go down.
                4. The review requested through the school before the deadline, or a decision not to.

                ## Notes
                If a post-16 place depends on the grade, ask whether a priority review is available.
              priority: high
              frontmatter:
                mode: service
                output_kind: decision
                success_criteria: "A review request is submitted through the school before its deadline with your child's consent, or a recorded decision explains why not."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Ask the exams officer for the raw marks and boundaries for each paper"
                - "Ask the subject teacher whether the script is worth reviewing"
                - "Explain to your child that grades can go down as well as up"
                - "Submit the request and fee through the school before the deadline"
            - name: Entering as a private candidate for a missed subject
              description: |-
                ## Purpose
                A young person who missed an exam through illness, needs a better grade after leaving school or wants an extra subject may have to enter as a private candidate. Finding an exam centre that accepts private candidates, and the right specification, takes months, so starting early is essential.

                ## Milestones
                1. The subject, specification and exam series chosen.
                2. Exam centres that accept private candidates contacted and one confirmed.
                3. Any practical, oral or coursework requirement arranged.
                4. Entry fee paid and the entry confirmed before the deadline.

                ## Notes
                Some subjects with coursework or practical endorsements are hard to sit privately. Check this before committing.
              priority: low
              deadlineOffsetDays: 180
              frontmatter:
                mode: research
                output_kind: deliverable
                success_criteria: "Your child is confirmed as a private candidate at a named exam centre for the chosen subject and series, with fees paid."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Check which exam series and specification fit the subject"
                - "List exam centres that take private candidates within travelling distance"
                - "Ask each centre about fees, deadlines and any coursework rules"
                - "Confirm the entry in writing and save the candidate number"
            - name: Extended project or additional qualification decision
              description: |-
                ## Purpose
                Some students are offered an extended research project, an extra maths qualification or a further language alongside their main exams. These can strengthen later applications and build independent study skills, but they cost time that core subjects may need, so the decision should rest on capacity rather than prestige.

                ## Milestones
                1. The additional qualifications on offer and their time demands listed.
                2. Your child's current workload and grades in core subjects checked.
                3. Teachers asked whether the extra qualification fits your child.
                4. A decision recorded with a review point after the next mocks.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A recorded decision on any additional qualification weighs its hours against core subject grades and sets a review point after mocks."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Ask the school which additional qualifications it offers"
                - "Estimate the weekly hours each would take"
                - "Ask your child's tutor whether the core subjects can absorb that time"
                - "Record the decision and the date to review it"
            - name: Exam certificates and results archive
              description: |-
                ## Purpose
                Exam certificates are often issued months after results day, handed out at a school event few people attend, and expensive or slow to replace later. Employers, colleges and universities may ask for them for years, so a safe original and a scanned copy save a lot of trouble.

                ## Milestones
                1. The date and method for certificate collection confirmed with the school.
                2. Original certificates collected and stored in a safe folder.
                3. Scans saved in the family digital archive.
                4. Results slips and any review outcomes filed with them.
              priority: low
              frontmatter:
                mode: operating
                output_kind: artifact
                success_criteria: "Original certificates are in a safe folder and scanned copies with results slips are stored in the family digital archive."
                cadence: cyclic
                effort_hours_estimate: "1"
              tasks:
                - "Ask the school when and how certificates will be issued"
                - "Collect the originals or arrange for someone to collect them"
                - "Scan each certificate and results slip into the family archive"
                - "Check that certificates from the latest exam series are collected and filed @recurring(yearly)"
            - name: Exam years debrief for younger siblings
              description: |-
                ## Purpose
                Families with more than one child go through exam years several times, and the lessons from the first are easy to forget by the second. A short written debrief of what helped, what you would skip and which dates caught you out makes the next round calmer and fairer for the younger child.

                ## Milestones
                1. Your older child asked what helped and what did not.
                2. Both parents' reflections added.
                3. Useful resources, contacts and dates recorded.
                4. The debrief stored where you will find it when the next child starts their exam years.

                ## Notes
                Each child is different. Use the debrief as a checklist of things to consider, not a template to impose.
              priority: low
              frontmatter:
                mode: building
                output_kind: knowledge
                success_criteria: "A one-page debrief with your older child's and both parents' reflections is filed with the next child's school records."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Ask your older child what helped most and what they would change"
                - "Write down your own lessons and those of your partner"
                - "Add the resources, contacts and dates that mattered"
                - "Ask the agent to turn the notes into a one-page checklist for next time"
---

# Secondary School Exam Years

This area is for parents of a teenager facing the big secondary school exams, whether that means GCSEs and A levels, a leaving certificate, a national baccalaureate or an international diploma, and who want to help without taking over. It starts with the foundations (one exam calendar, the specifications, an honest picture of every subject, the help your child actually wants, access arrangements and a wellbeing baseline), then the weekly machinery of revision reviews, past papers, sleep, food and check-ins, the skills of revising well and talking about grades, the decisions about subjects, tiers, tutors and post-16 routes, the dated moments from mocks to results day, the situations that change the picture such as two homes, resits or illness, and finally the specialist work of marking reviews, private entries and passing on what you learned.

What repeats is a Sunday look at the revision plan, a midweek past paper log, a Thursday check-in walk, a Friday evening off, a monthly progress and coursework check, and a yearly recheck of timetables, contacts and certificates. The Metrics log, Sleep review, Weekly meal plan, Purchase decision and Meeting notes templates pair with the projects that name them. Installing adds all 50 projects as active, so archive the ones that are not for you yet.
