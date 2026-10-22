---
id: fitness-sport.martial-arts-grading-path
name: Martial Arts Grading Path
description: "A style and club chosen well, the full syllabus in hand, training logged against attendance minimums, gradings prepared week by week, and a route from first belt to black belt, competition and coaching."
category: personal
version: 1.0.0
tags: [fitness-sport, martial-arts-grading-path, athlete, everyone, karate, judo, taekwondo, jiu-jitsu]
author: Aurum Technology
starter_structure:
  templates:
    - purchase-decision
    - metrics-log
    - habit-tracker
    - training-program
    - operational-checklist
    - trip
  pillars:
    - name: Fitness & Sport
      emoji: "🏋️"
      description: "Training, play and competition: building strength, endurance and skill in a sport or a gym, structuring blocks of work around events, recovering properly, and keeping the sessions honest with a log rather than a feeling."
      pillarFrontmatter:
        review_cadence: monthly
      areas:
        - name: Martial Arts Grading Path
          description: "Progressing through belts and gradings in karate, judo, taekwondo, jiu-jitsu or another martial art, with training logs and competition prep."
          projects:
            - name: Choosing a martial art and a club to train with
              description: |-
                ## Purpose
                Karate, judo, taekwondo, Brazilian jiu-jitsu, aikido and kung fu grade very differently: some test you every three months in front of a panel, others promote quietly when the coach decides you are ready. Choosing the style and the club together, after trying two or three classes, decides how often you will grade, what you will be tested on and whether you enjoy the room enough to keep turning up.

                ## Milestones
                1. A shortlist of three clubs within twenty minutes of home or work, with class times and monthly fees.
                2. A trial class attended at each, with notes on teaching quality, class size and how seniors treat beginners.
                3. How each club grades written down: who examines, how often and what it costs.
                4. One club chosen and a start date in the calendar.

                ## Notes
                Watch a senior class as well as a beginners one, because it shows where the path actually leads. A club that pressures you to sign a long contract on the first visit is worth walking away from.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "One club chosen after at least two trial classes, with its grading method, fees and start date written down."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "List three martial arts clubs near home or work with their beginners class times"
                - "Book a trial class at each club on the shortlist"
                - "Ask each club how often gradings run and who examines them"
                - "Choose a club and write your first class date in the calendar"
            - name: Checking a club's affiliation, insurance and safeguarding
              description: |-
                ## Purpose
                A belt earned at an unaffiliated club may not be recognised anywhere else, and a club without insurance leaves you exposed if a throw goes wrong. Before paying for a year, confirm the club belongs to a recognised governing body or association for its style, that instructors hold current coaching and first aid qualifications, and that safeguarding checks are in place for any junior classes you share a mat with.

                ## Milestones
                1. The club's association or governing body named, and confirmed as recognised in your country.
                2. Instructor coaching grade, first aid certificate and background check status confirmed.
                3. Club and personal accident insurance cover understood, including what it leaves out.
                4. Whether your grades will transfer to other clubs in the same association confirmed.

                ## Notes
                Ask politely; good clubs are proud of their paperwork and show it without fuss. Lineage stories are hard to check, so trust the association membership over the story.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "The club's association, instructor qualifications and insurance are confirmed in writing or on a public register."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Ask the club which association or governing body it is affiliated to"
                - "Check the association's public list of member clubs for this club's name"
                - "Ask to see the head instructor's coaching and first aid certificates"
                - "Read what the club insurance covers for injuries in training and gradings"
            - name: Getting the full belt syllabus and grading rules
              description: |-
                ## Purpose
                Most students learn what is on their next grading a few weeks before it, from whoever happens to be next to them in the line. Getting the written syllabus for every grade up to first dan, with the minimum time between gradings, attendance requirements and fees, turns the belt path into something you can plan rather than guess.

                ## Milestones
                1. The written syllabus for every kyu or gup grade to first dan saved where you can find it.
                2. Minimum time in grade and minimum class attendance for each belt noted.
                3. Grading fees, belt costs and who sets the dates written down.
                4. Any parts examined orally or in writing, such as terminology or theory, highlighted.

                ## Notes
                Brazilian jiu-jitsu and some judo clubs promote on the coach's judgement rather than a formal test. In that case, ask what the coach looks for at each belt and treat the answer as your syllabus.
              priority: high
              deadlineOffsetDays: 14
              frontmatter:
                mode: building
                output_kind: knowledge
                success_criteria: "A saved syllabus for every grade to first dan, with time in grade, attendance minimums and fees noted for each."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Ask your instructor for the written syllabus for every grade to first dan"
                - "Note the minimum months between gradings for each belt"
                - "Write down the grading fee and belt cost for the next three grades"
                - "Check the association website for syllabus changes @recurring(yearly)"
            - name: Association licence and membership set-up
              description: |-
                ## Purpose
                Many associations will not let you grade, compete or even step on the mat without a current licence, and an expired one can mean a grading result is never registered. Setting up the licence, the membership number and any grade record book now, with a renewal reminder, avoids the classic scramble on grading morning.

                ## Milestones
                1. Association licence bought and the membership number recorded.
                2. Licence card or digital licence saved on your phone.
                3. Grade record book or online grade record set up where your association uses one.
                4. Renewal date in the calendar a month before expiry.
              priority: high
              deadlineOffsetDays: 14
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A current association licence with its number and expiry date recorded and a renewal reminder set a month ahead."
                cadence: one-shot
                effort_hours_estimate: "1"
              tasks:
                - "Ask your club secretary which licence the association requires"
                - "Buy the licence and save the membership number with your training log"
                - "Order the grade record book if your association still uses one"
                - "Renew your association licence a month before it lapses @recurring(yearly)"
            - name: Telling your instructor about injuries and health conditions
              description: |-
                ## Purpose
                Instructors adapt drills every week for a bad knee, asthma, a past concussion or a heart condition, but only if they know. A short written note handed over before your next class, and updated when anything changes, keeps partners safe, lets examiners make adjustments at grading and stops you hiding a problem until it becomes an injury.

                ## Milestones
                1. Current injuries, conditions and medicines that matter on the mat listed on one page.
                2. Your clinician asked whether any condition limits contact, throws or high-intensity work.
                3. The note handed to your instructor and kept on the club's file.
                4. Any adjustment agreed for gradings written down.

                ## Notes
                Share what affects training, not your whole medical history. If a doctor has told you to avoid head contact or heavy throws, the instructor needs to hear that in plain words.
              priority: high
              deadlineOffsetDays: 14
              frontmatter:
                mode: building
                output_kind: knowledge
                success_criteria: "A one-page health and injury note is on file with your instructor, with any agreed grading adjustments recorded."
                cadence: one-shot
                effort_hours_estimate: "1"
              tasks:
                - "List injuries and conditions that could matter during training"
                - "Ask your clinician whether any of them should limit contact or throws"
                - "Give the note to your instructor before your next class"
                - "Update the note within a week of any new injury"
            - name: Buying a first uniform that fits after shrinking
              description: |-
                ## Purpose
                Cotton gis and doboks often shrink a size in the first hot wash, and a judo or jiu-jitsu jacket that is too short or too light will not survive grip fighting. Choosing the right weight, cut and size, and knowing your style's colour and patch rules before you buy, saves buying twice.

                ## Milestones
                1. Your club's rules on uniform colour, badges and patches confirmed.
                2. Height and weight checked against two makers' size charts, allowing for shrinkage.
                3. Two or three uniforms compared on weave, weight, price and reviews.
                4. A uniform bought, washed cold once and checked for fit at the wrists and ankles.

                ## Notes
                Start from the **Purchase decision** template. Competition rules can be stricter than club rules on colour and sleeve length, so check them if you plan to compete.
              priority: medium
              deadlineOffsetDays: 30
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A uniform that meets your club's colour and patch rules is bought and fits at the wrists and ankles after its first wash."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Ask your instructor which uniform colours, weights and patches the club allows"
                - "Compare two makers' size charts against your height and weight"
                - "Buy the uniform and wash it cold before the first class"
                - "Check sleeve and trouser length after the first wash and exchange it if short"
            - name: Dojo etiquette and belt tying basics
              description: |-
                ## Purpose
                Bowing on and off the mat, addressing instructors, lining up by grade and tying the belt so it does not fall open mid-drill are small things, but examiners notice them from the first minute. Learning them in your first fortnight means you stop worrying about protocol and start listening to the teaching.

                ## Milestones
                1. The club's bowing, lining-up and addressing customs written in your log.
                2. Your belt tied correctly without help three times in a row.
                3. Counting to ten in the style's language said aloud without notes.
                4. Mat rules on nails, jewellery, footwear and hygiene known.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "You can tie your belt unaided, count to ten in the style's language and describe the club's opening and closing etiquette."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Ask a senior student to show you the club's opening and closing etiquette"
                - "Practise tying your belt at home until it holds through a whole class"
                - "Learn to count to ten in your style's language"
                - "Write the mat rules on jewellery, nails and footwear in your log"
            - name: Weekly class timetable you can keep
              description: |-
                ## Purpose
                Grading requirements are usually built on steady attendance, often two or three classes a week, and people who train when they feel like it tend to stall at the same belt for years. Choosing the sessions you can attend in an ordinary week, not your best week, and fixing them in the calendar makes the next grading a matter of time rather than willpower.

                ## Milestones
                1. The club's full timetable compared with your work, family and travel commitments.
                2. Two or three regular classes chosen and blocked in the calendar.
                3. A back-up session or open mat identified for weeks when one is missed.
                4. Four consecutive weeks attended at the planned frequency.
              priority: high
              frontmatter:
                mode: building
                output_kind: habit
                success_criteria: "Two or three weekly classes blocked in the calendar and attended for four consecutive weeks."
                cadence: rolling
              tasks:
                - "Copy the club timetable next to your own week"
                - "Block two or three regular classes in your calendar as repeating appointments"
                - "Pick a back-up class for weeks when work gets in the way"
                - "Check next month's timetable for holiday closures and cancelled classes @recurring(monthly:26)"
            - name: Martial arts training log set-up
              description: |-
                ## Purpose
                Memory of what was taught three weeks ago fades fast, and gradings test material that may have been covered once, months earlier. A simple log with the date, class, techniques covered, corrections received and any niggles becomes the revision notes for every grading and the evidence when your instructor asks how often you train.

                ## Milestones
                1. A log with columns for date, class, techniques, corrections and niggles.
                2. The syllabus headings for your next grade listed at the front.
                3. Every class from the last month entered.
                4. The log opened before at least one conversation with your instructor.

                ## Notes
                Start from the **Metrics log** template. A paper notebook in the kit bag works as well as an app if you write in it before leaving the car park.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A training log holding at least a month of class entries, organised under the headings of your next grade's syllabus."
                cadence: one-shot
                effort_hours_estimate: "1"
              tasks:
                - "Create a training log from the metrics log template"
                - "Add the headings of your next grade's syllabus at the front"
                - "Enter every class you can remember from the last month"
                - "Keep a pen and the log in your kit bag"
            - name: Baseline fitness and flexibility test against the syllabus
              description: |-
                ## Purpose
                Some gradings include a fitness test with set numbers of press-ups, sit-ups or burpees, and higher grades expect head-height kicks and long sparring rounds. Testing yourself now against the standards the syllabus sets shows which gaps will take months to close, so the training plan can start on them early.

                ## Milestones
                1. The fitness and flexibility standards in your syllabus listed, if there are any.
                2. Press-ups, sit-ups, a timed skipping or running test and kick height measured on one day.
                3. Results recorded with the date and the target beside each one.
                4. The two biggest gaps chosen as training priorities.
              priority: medium
              deadlineOffsetDays: 21
              frontmatter:
                mode: building
                output_kind: knowledge
                success_criteria: "A dated baseline of the syllabus fitness and flexibility tests, with the two largest gaps to target named."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "List the fitness and flexibility standards your syllabus sets"
                - "Run the test set on one rested day and record each result"
                - "Measure the height of your front and side kicks against a wall mark"
                - "Choose the two gaps you will work on first"
            - name: Class attendance count toward grading minimums
              description: |-
                ## Purpose
                Clubs that set a minimum number of classes between gradings often find students a few short at grading time, with no way to catch up. A weekly tally against the minimum, kept from the day after your last grading, shows weeks ahead whether you are on pace.

                ## Milestones
                1. The minimum classes and months for your next grade written at the top of the tally.
                2. Every class counted weekly since your last grading.
                3. Your pace compared with the minimum each month.
                4. The minimum reached before the grading date.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A weekly attendance tally since the last grading shows the minimum class count reached before the next grading date."
                cadence: rolling
              tasks:
                - "Write the class minimum for your next grade at the top of the tally"
                - "Count back the classes you have done since your last grading"
                - "Add this week's classes to the attendance tally @recurring(weekly:sun)"
                - "Tell your instructor early if you will fall short of the minimum"
            - name: Twice-weekly home kata and pattern practice
              description: |-
                ## Purpose
                Patterns, kata, poomsae and forms make up a large share of most striking-art gradings, and two club sessions a week are rarely enough to make them automatic under nerves. Two short home sessions a week, in a space just big enough to step through the pattern, are what turn knowing the moves into performing them.

                ## Milestones
                1. A space at home or nearby measured and cleared for the pattern's footprint.
                2. A twenty-minute session format written: slow run, full-speed run, one fix.
                3. Two home sessions a week completed for six weeks.
                4. Each required pattern performed from memory without a pause.

                ## Notes
                If space is tight, practise the sections in place and walk the full pattern in a park or empty car park once a week.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Two home pattern sessions a week logged for six consecutive weeks, ending with every required pattern performed from memory."
                cadence: rolling
              tasks:
                - "Mark out a space at home big enough for your longest pattern"
                - "Run each required pattern slowly, then once at full speed and power @recurring(weekly:mon,thu)"
                - "Note the one move that broke down and drill it five times"
            - name: Friday read-back of the week's class notes
              description: |-
                ## Purpose
                Corrections from an instructor are usually given once, in a sentence, and then the class moves on. Writing three lines after each class and reading them back at the end of the week turns those passing corrections into a short list to fix next week, which is how some students seem to improve between gradings without training more.

                ## Milestones
                1. Three lines written after each class: what was taught, one correction, one question.
                2. A weekly read-back that picks one focus for the next week.
                3. Saved questions raised with your instructor within a fortnight.
                4. Twelve weeks of notes and weekly focuses in the log.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Twelve consecutive weeks of class notes, each week ending with one named focus for the following week."
                cadence: rolling
              tasks:
                - "Write three lines in the log straight after class"
                - "Read back the week's class notes and choose next week's focus @recurring(weekly:fri)"
                - "Ask your instructor one saved question at the start of the next class"
            - name: Monthly syllabus readiness check
              description: |-
                ## Purpose
                A traffic-light rating of every item on your next grade's syllabus, redone each month, shows exactly which techniques are solid, which are shaky and which you have never been taught. It also gives you a useful conversation to have with your instructor instead of the vague question of whether you are ready.

                ## Milestones
                1. Every item on the next grade's syllabus listed in one table.
                2. Each item rated red, amber or green on a set day each month.
                3. Red items raised with the instructor so they are taught or drilled.
                4. All items amber or green a month before the grading.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: artifact
                success_criteria: "A monthly red, amber and green rating of every syllabus item, with no red items remaining one month before grading."
                cadence: rolling
              tasks:
                - "Copy every item on your next grade's syllabus into one table"
                - "Rate every syllabus item red, amber or green @recurring(monthly:12)"
                - "Ask your instructor to cover any item still rated red"
            - name: Daily kicking flexibility routine
              description: |-
                ## Purpose
                Head-height roundhouse and side kicks appear in many karate and taekwondo syllabuses from the middle grades onwards, and hip flexibility changes slowly. Ten minutes a day of hip, hamstring and groin work, done at the same time each day, moves kick height far more than one long stretching session a week.

                ## Milestones
                1. A ten-minute routine written down, ideally checked by your instructor.
                2. The routine done daily and ticked off for four weeks.
                3. Kick height remeasured against the wall mark from your baseline.
                4. Kicks at the height your next grade asks for, or a clear trend toward it.

                ## Notes
                Start from the **Habit tracker** template. Stretch to mild tension, not pain, and ask your instructor or a physiotherapist if a hip or knee complains.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Twenty-eight consecutive days of the flexibility routine ticked off, with kick height remeasured against the baseline mark."
                cadence: rolling
              tasks:
                - "Ask your instructor for the stretches they rate for kicking height"
                - "Write the ten-minute routine on a card where you stretch"
                - "Do the ten-minute kicking flexibility routine @recurring(daily)"
                - "Remeasure kick height against the wall mark after four weeks"
            - name: Uniform, belt and skin hygiene routine
              description: |-
                ## Purpose
                Grappling arts spread ringworm, impetigo and other skin infections quickly through a club, and a sour gi is the fastest way to lose training partners. Washing the uniform after every session, checking skin before training and keeping nails short protects everyone, and a monthly kit inspection catches torn seams before an examiner does.

                ## Milestones
                1. Every uniform washed and dried after each session, with a spare for back-to-back days.
                2. Skin checked before training, with any rash shown to a clinician before returning.
                3. Nails trimmed short before every class.
                4. Seams, belt ends and patches inspected monthly and repaired or replaced.

                ## Notes
                Many clubs ask you to stay off the mat with any unexplained rash until it has been checked. Follow the rule even when it feels minor.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A monthly kit inspection completed for three months with no session missed because of dirty or damaged kit."
                cadence: rolling
              tasks:
                - "Buy a second uniform so one is always clean"
                - "Check your skin for rashes or cuts before each training session"
                - "Inspect belt, seams and patches for wear @recurring(monthly:3)"
            - name: Grading stamina conditioning sessions
              description: |-
                ## Purpose
                Gradings can run two to four hours, and higher grades often end with continuous sparring or several rounds of randori when you are already tired. Two short conditioning sessions a week, shaped like your grading rather than general gym work, mean your technique holds up in the last half hour when examiners are still watching.

                ## Milestones
                1. The length and hardest part of your next grading found out from seniors.
                2. Two sessions of twenty to thirty minutes a week that mimic it: rounds, kicks under fatigue, burpees between drills.
                3. Sessions logged for eight weeks.
                4. A full mock grading length completed in class or at home without stopping.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Sixteen conditioning sessions logged over eight weeks, ending with a full-length mock grading completed without stopping."
                cadence: rolling
              tasks:
                - "Ask a senior student how long the last grading ran and what came last"
                - "Write two conditioning sessions shaped like the end of the grading"
                - "Do a grading-shaped conditioning session @recurring(weekly:tue,sat)"
            - name: Quarterly progress talk with your instructor
              description: |-
                ## Purpose
                Instructors in busy clubs rarely have time to tell each student where they stand unless asked. A ten-minute conversation every three months, prepared with your readiness table and two questions, gets you specific feedback, a realistic date for the next grading and often an extra drill to work on.

                ## Milestones
                1. A ten-minute slot asked for before or after class.
                2. Your readiness table and two questions brought to it.
                3. The instructor's view of your next grading date written in the log.
                4. Four quarterly talks held in a year.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: knowledge
                success_criteria: "Four instructor conversations held in twelve months, each with feedback and an expected grading date recorded."
                cadence: cyclic
              tasks:
                - "Ask your instructor for a ten-minute progress talk @recurring(quarterly)"
                - "Bring your readiness table and two specific questions"
                - "Write the feedback and expected grading date in your log"
            - name: Yearly martial arts budget for fees, gradings and kit
              description: |-
                ## Purpose
                Monthly fees are only part of the cost: grading fees rise with each belt, a dan grading can cost several times a kyu grading, and licences, seminars, competition entries and new kit add up. Planning the year on one sheet shows the true cost and stops a grading being postponed because the fee arrived in a bad month.

                ## Milestones
                1. Monthly fees, licence, expected grading fees and kit listed for twelve months.
                2. Likely grading months marked so their fees can be saved for.
                3. The annual total compared with what you are willing to spend.
                4. Actual spending checked against the plan at the year end.
              priority: low
              frontmatter:
                mode: operating
                output_kind: artifact
                success_criteria: "A twelve-month martial arts budget with grading months marked, checked against actual spending at the year end."
                cadence: cyclic
              tasks:
                - "List every martial arts cost you paid in the last twelve months"
                - "Ask the agent to lay out a twelve-month budget with likely grading months"
                - "Set aside each expected grading fee a month ahead"
                - "Compare the year's spending with the budget @recurring(yearly)"
            - name: Grade record book and certificate archive
              description: |-
                ## Purpose
                Certificates fade, record books get lost in house moves, and clubs close, sometimes taking their records with them. Keeping a scanned archive of every certificate, grading date, examiner name and licence number means you can prove your grade years later when you move club, return after a break or apply for a dan grading.

                ## Milestones
                1. Every grading certificate scanned or photographed and stored in one folder.
                2. A list of grades with date, club, association and examiner.
                3. Record book stamps checked against the list.
                4. The archive updated within a week of each new grade.
              priority: low
              frontmatter:
                mode: operating
                output_kind: artifact
                success_criteria: "A single folder holds a scan of every certificate and a grade list with dates, clubs and examiners, current to the latest grading."
                cadence: rolling
              tasks:
                - "Gather every grading certificate and record book you have"
                - "Scan or photograph each certificate into one folder"
                - "Write a grade list with date, club and examiner for each belt"
                - "Check the grade list against your certificates and record book @recurring(yearly)"
            - name: Breakfalls and safe landings for throws and takedowns
              description: |-
                ## Purpose
                In judo, jiu-jitsu, aikido and many karate syllabuses you will be thrown long before you throw anyone, and poor breakfalls are a common cause of shoulder, wrist and head injuries in beginners. Building back, side and rolling breakfalls until they are automatic is the first real skill of a grappling grade and is often tested at the very first one.

                ## Milestones
                1. Back, side and forward rolling breakfalls taught by your instructor and noted.
                2. Each breakfall practised from low positions before standing.
                3. Breakfalls performed from a partner's throw without bracing an arm.
                4. Breakfalls signed off by your instructor as safe for full throws.

                ## Notes
                Never reach out a straight arm to stop a fall. If you have a neck or shoulder condition, tell your instructor before throwing practice starts, and practise on mats rather than a hard floor.
              priority: high
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Your instructor confirms your back, side and rolling breakfalls are safe for full-speed throws."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "Ask your instructor which breakfalls your first grading tests"
                - "Practise each breakfall from kneeling before trying it standing"
                - "Practise each breakfall ten times at the weekend open mat @recurring(weekly:sat)"
                - "Ask your instructor to sign off your breakfalls before full throws"
            - name: Learning a new kata or pattern in six weeks
              description: |-
                ## Purpose
                Each new grade usually brings a new pattern, and many students only learn it properly in the last fortnight, which shows. Breaking the new pattern into sections, learning one section a week from your instructor and a reference video, and stitching them together leaves time for the performance work examiners actually mark.

                ## Milestones
                1. The new pattern's official reference video and written move list found.
                2. The pattern split into four to six sections.
                3. One section learned and checked by the instructor each week.
                4. The full pattern performed from memory, finishing on the starting spot, by week six.
              priority: medium
              deadlineOffsetDays: 42
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "The full new pattern performed from memory and checked by your instructor within six weeks."
                cadence: phased
                effort_hours_estimate: "12"
              tasks:
                - "Find your association's reference video and move list for the new pattern"
                - "Split the pattern into four to six sections"
                - "Learn one section and show it to your instructor each week"
                - "Perform the full pattern for your instructor in week six"
            - name: Terminology and theory questions for the next grade
              description: |-
                ## Purpose
                Oral questions catch out more students than techniques do: the names of kicks and stances, the meaning of a kata name, the tenets of taekwondo or the group a judo throw belongs to. Turning the theory list into flashcards and reviewing them for a few minutes each week means the answers come out under grading pressure.

                ## Milestones
                1. Every theory and terminology question for the next grade listed.
                2. Flashcards made with the term on one side and meaning and pronunciation on the other.
                3. Weekly reviews logged for eight weeks.
                4. Every card answered correctly when tested by a training partner.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "All terminology and theory cards for the next grade answered correctly when tested by a partner."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "List every terminology and theory question for your next grade"
                - "Ask the agent to turn the list into flashcards with pronunciation notes"
                - "Review the flashcards for ten minutes @recurring(weekly:wed)"
                - "Ask a training partner to test you a week before grading"
            - name: Controlled sparring for grading assessments
              description: |-
                ## Purpose
                Gradings that include kumite or free sparring mark control, distance, combinations and composure, not how hard you hit, and many students fail by either freezing or swinging wildly. Working on light, controlled sparring with a set goal each round, under your instructor's supervision, builds the calm that examiners look for.

                ## Milestones
                1. What examiners mark in sparring at your next grade written down.
                2. One goal set for each sparring round, such as distance or combinations.
                3. Eight weeks of supervised sparring with goals logged.
                4. A sparring round filmed and reviewed with your instructor.

                ## Notes
                Wear the protective kit your club requires every time. Any knock to the head that leaves you dizzy, sick or confused means stopping that session and following your club's head injury guidance.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Eight weeks of goal-based sparring logged, and a filmed round reviewed with your instructor against grading criteria."
                cadence: phased
                effort_hours_estimate: "16"
              tasks:
                - "Ask your instructor what examiners mark in grading sparring"
                - "Set one goal before each sparring round and note how it went"
                - "Film one sparring round and review it with your instructor"
                - "Ask a senior grade to spar lightly with you on combinations"
            - name: Randori and rolling with a purpose for grappling grades
              description: |-
                ## Purpose
                Judo and jiu-jitsu coaches usually judge readiness for the next belt by how you move in randori or rolling, week after week, not by one test day. Going into each round with one position or technique to work on, rather than just surviving, produces the visible progress a coach promotes on.

                ## Milestones
                1. The skills your coach expects at the next belt listed.
                2. One positional goal chosen for each open mat or rolling session.
                3. Goals and outcomes logged for twelve weeks.
                4. Your coach asked what they now see and what is still missing.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Twelve weeks of rolling or randori logged with a goal per session, followed by a coach review of what is still missing for the next belt."
                cadence: phased
                effort_hours_estimate: "24"
              tasks:
                - "Ask your coach what they want to see at your next belt"
                - "Pick one position or technique to work on in each round"
                - "Log each session's goal and whether it came off"
                - "Ask your coach for a review after twelve weeks"
            - name: Self-defence techniques on the syllabus with a partner
              description: |-
                ## Purpose
                Jiu-jitsu, kenpo, krav maga and many karate syllabuses test releases from grabs, chokes and strikes, and these only hold up under grading pressure if they have been practised with a cooperative partner first and then against more resistance. A regular partner and a simple progression make these techniques reliable rather than half remembered.

                ## Milestones
                1. Every self-defence technique on the next grade's syllabus listed.
                2. A regular training partner agreed for drilling before or after class.
                3. Each technique practised at slow, medium and resisted speed.
                4. The full set demonstrated to your instructor before the grading.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Every self-defence technique on the next syllabus demonstrated to your instructor at resisted speed before grading."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "List the self-defence techniques on your next grade's syllabus"
                - "Agree a regular drilling partner and a time before or after class"
                - "Practise each technique slowly, then at medium speed, then against resistance"
                - "Show the full set to your instructor a fortnight before grading"
            - name: Monthly video review of your own technique
              description: |-
                ## Purpose
                Students rarely see their own stance depth, hip rotation or dropping guard, which are often exactly what examiners mark down. A short monthly video, compared with your association's reference footage or a senior grade, shows the gap faster than any spoken correction.

                ## Milestones
                1. Permission to film confirmed with the club.
                2. A two-minute clip of patterns, basics or sparring recorded each month.
                3. Each clip compared with a reference and one fix noted.
                4. Six months of clips kept in date order to show change.
              priority: low
              frontmatter:
                mode: operating
                output_kind: knowledge
                success_criteria: "Six monthly clips stored in date order, each with one written fix compared against a reference."
                cadence: rolling
              tasks:
                - "Ask your instructor whether filming is allowed in class"
                - "Film two minutes of basics or patterns and note one fix @recurring(monthly:20)"
                - "Compare the clip with your association's reference footage"
            - name: Stances and footwork drilled to examiner standard
              description: |-
                ## Purpose
                Ask any examiner what separates a pass from a deferral at the lower grades and the answer is usually stances: too short, too high, weight in the wrong place. Measuring each stance on the floor against your style's standard and drilling transitions between them fixes the foundation every other technique sits on.

                ## Milestones
                1. The required stances for your next grade listed with their standard length and width.
                2. Floor marks made with tape for each stance at your height.
                3. Transitions between stances drilled until they hold depth.
                4. Your instructor confirms stances meet the grading standard.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: habit
                success_criteria: "Your instructor confirms every stance on the next grade's syllabus meets the standard on length, width and height."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "List the stances on your next grade's syllabus"
                - "Mark each stance's length and width with tape on the floor"
                - "Drill transitions between stances for five minutes after each pattern session"
                - "Ask your instructor to check your stances in the next class"
            - name: Fixing your weakest syllabus item
              description: |-
                ## Purpose
                Every student has one item, a jumping kick, a throw to the weak side, a particular choke, that they quietly hope will not come up. Picking it deliberately, getting it taught again and drilling it for six weeks removes the most likely reason for a deferral and usually lifts confidence across the whole grading.

                ## Milestones
                1. The weakest item named from your readiness table.
                2. A re-teach from your instructor or a senior grade arranged.
                3. Six weeks of short, focused drilling logged.
                4. The item performed for your instructor and rated green.
              priority: medium
              frontmatter:
                mode: building
                output_kind: habit
                success_criteria: "The weakest syllabus item has six weeks of logged drilling and is rated green by your instructor."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Name the single syllabus item you least want to be asked"
                - "Ask your instructor or a senior grade to re-teach it"
                - "Drill the item for ten minutes in every session for six weeks"
                - "Perform it for your instructor and record their rating"
            - name: Deciding whether to put yourself forward for grading
              description: |-
                ## Purpose
                Some clubs invite students to grade, others let anyone who has met the minimum time apply, and grading too early costs a fee and a confidence knock. Weighing your readiness table, attendance and instructor feedback before you book makes the decision on evidence rather than impatience.

                ## Milestones
                1. Your club's invitation or application rule confirmed.
                2. Readiness table, attendance count and instructor feedback set side by side.
                3. Your instructor asked directly whether they would put you forward.
                4. A decision recorded: grade now, or the next date with what must change.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A recorded decision to grade or wait, based on readiness ratings, attendance and the instructor's answer."
                cadence: one-shot
                effort_hours_estimate: "1"
              tasks:
                - "Check whether your club invites students or accepts applications"
                - "Put your readiness table and attendance count side by side"
                - "Ask your instructor plainly whether they would put you forward"
                - "Write down the decision and what must change if you wait"
            - name: Bouncing back from a failed or deferred grading
              description: |-
                ## Purpose
                Failing or being deferred happens to most long-term martial artists at least once, and the students who come back stronger are those who get specific feedback and a plan within a fortnight. Turning the examiner's comments into a short programme with a re-grading date changes a bad day into a clear set of fixes.

                ## Milestones
                1. Feedback from the examiner or instructor recorded within a week.
                2. Each point of feedback turned into a drill with a frequency.
                3. A re-grading date agreed with your instructor.
                4. The drills logged every week until the re-grading.
              priority: high
              deadlineOffsetDays: 60
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Examiner feedback recorded, turned into drills and a re-grading date agreed within two weeks of the result."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Ask the examiner or your instructor for specific feedback within a week"
                - "Ask the agent to turn the feedback into a weekly drill list"
                - "Agree a re-grading date with your instructor"
                - "Tick off the feedback drills in your log each week until the re-grading"
            - name: Adding a second martial art without stalling your grades
              description: |-
                ## Purpose
                Plenty of karateka add judo or jiu-jitsu for grappling, and grapplers add striking, but two syllabuses and two sets of attendance minimums can leave you short in both. Deciding how many sessions each art gets, and checking both instructors are comfortable, keeps the main grading path moving.

                ## Milestones
                1. The reason for adding a second art written in one sentence.
                2. Weekly sessions for each art set against both clubs' attendance minimums.
                3. Both instructors told, and any clashing habits such as guard height or stance discussed.
                4. A decision recorded on which art takes priority for the next six months.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A written split of weekly sessions between two arts that still meets the main club's attendance minimum."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Write one sentence on why you want a second art"
                - "Trial two classes in the second art before committing"
                - "Check both clubs' attendance minimums against the sessions you can afford"
                - "Tell your main instructor about the plan before you start"
            - name: Moving clubs or associations without losing your grade
              description: |-
                ## Purpose
                House moves, closing clubs and falling-outs can mean starting again somewhere new, and associations differ on whether they recognise each other's grades. Sorting proof of grade, a letter from your old instructor and the new club's recognition rules before the move often saves you a belt or two.

                ## Milestones
                1. Certificates, record book and licence number gathered.
                2. A letter of good standing asked for from your current instructor.
                3. The new club's policy on recognising outside grades confirmed in writing.
                4. Any conversion grading or probation period agreed and dated.
              priority: medium
              deadlineOffsetDays: 45
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "The new club has confirmed in writing which grade you will wear, with any conversion grading dated."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Gather your certificates, record book and licence number"
                - "Ask your current instructor for a letter confirming your grade"
                - "Ask the new club how it treats grades from other associations"
                - "Agree the belt you will wear and any conversion grading date"
            - name: Private lessons before a key grading
              description: |-
                ## Purpose
                One or two private lessons can fix in an hour what group classes would take months to reach, especially before a dan grading or for a pattern you keep getting wrong. Deciding what the lesson is for, and preparing the questions, decides whether the fee is good value or an expensive extra class.

                ## Milestones
                1. The specific items for a private lesson listed from your readiness table.
                2. Prices and availability from your instructor or a recommended coach compared.
                3. One or two lessons booked six to eight weeks before the grading.
                4. Corrections from each lesson written up within a day.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A private lesson booked for named syllabus items, with written corrections in the log the next day."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "List the two or three items a private lesson should fix"
                - "Ask your instructor about private lesson prices and times"
                - "Book the lesson six to eight weeks before the grading"
                - "Write up every correction from the lesson the same day"
            - name: Sparring protective equipment for gradings and competition
              description: |-
                ## Purpose
                Many gradings with sparring require specific kit: approved mitts, shin and instep pads, a mouthguard, a groin guard and, in some taekwondo events, a body protector and head guard. Buying kit that meets your association's rules and fits properly avoids being turned away on the day or borrowing gear that does not protect you.

                ## Milestones
                1. Your association's required and approved kit list found.
                2. Hand and foot sizes measured against makers' charts.
                3. Each item compared on approval status, fit and price.
                4. Kit bought and worn in at least two sparring classes before grading.

                ## Notes
                Start from the **Purchase decision** template. A mouthguard fitted by a dentist, or a carefully moulded boil-and-bite one, protects far better than a loose one.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "Every item on your association's required sparring kit list is owned, fits and has been worn in at least two classes."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Find your association's required and approved sparring kit list"
                - "Measure hands and feet against two makers' size charts"
                - "Buy the required kit and label it with your name"
                - "Wear the full kit in two sparring classes before grading"
            - name: Six-week countdown to your next grading
              description: |-
                ## Purpose
                Six weeks out is when the grading becomes real: the date is set, the syllabus is fixed and the gaps are visible. A week-by-week plan that moves from fixing weak items, through full run-throughs, to a lighter final week means you arrive rested and rehearsed rather than cramming.

                ## Milestones
                1. The grading date, venue and fee confirmed.
                2. A six-week plan written: weeks one to three fixing, weeks four and five full run-throughs, week six lighter.
                3. Two full mock gradings completed in weeks four and five.
                4. The final week kept light, with sleep and food planned for the day before.

                ## Notes
                Start from the **Training program** template.
              priority: high
              deadlineOffsetDays: 42
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "The grading attended after a written six-week plan, with two mock gradings completed in weeks four and five."
                cadence: phased
                effort_hours_estimate: "20"
              tasks:
                - "Confirm the grading date, venue and fee with your club"
                - "Write a six-week plan from the training program template"
                - "Run a full mock grading in weeks four and five"
                - "Keep the last week to light technique and early nights"
            - name: Grading day kit bag and timings checklist
              description: |-
                ## Purpose
                Grading mornings go wrong in predictable ways: the licence left at home, the wrong belt, no water, arriving as the line-up starts. A checklist packed the night before, with arrival time, documents, kit, food and the fee, removes every avoidable worry.

                ## Milestones
                1. A written checklist of documents, kit, food, water and fee.
                2. The venue, parking and arrival time confirmed the week before.
                3. The bag packed and checked the night before.
                4. The checklist updated after the grading with anything missed.

                ## Notes
                Start from the **Operational checklist** template.
              priority: medium
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A grading day checklist used to pack the night before, with every item present on arrival."
                cadence: one-shot
                effort_hours_estimate: "1"
              tasks:
                - "Write a grading checklist of documents, kit, food, water and fee"
                - "Confirm the venue address, parking and arrival time"
                - "Pack and tick off the bag the night before"
                - "Add anything you missed to the checklist afterwards"
            - name: Grading day debrief and examiner feedback record
              description: |-
                ## Purpose
                Within a day the details of a grading blur into a good or bad feeling. Writing down what was asked, what went well, what the examiner said and what surprised you, while it is fresh, gives you the starting point for the next belt and a record that helps the students grading after you.

                ## Milestones
                1. Notes written within 24 hours of the grading.
                2. Every examiner comment recorded as close to word for word as possible.
                3. Three things to carry into training for the next grade listed.
                4. Result, certificate and new grade added to the record archive.
              priority: low
              frontmatter:
                mode: event
                output_kind: artifact
                success_criteria: "A written debrief completed within a day of the grading, with examiner comments and three next steps."
                cadence: one-shot
                effort_hours_estimate: "1"
              tasks:
                - "Write what was asked and how it went within a day"
                - "Record each examiner comment as close to word for word as you can"
                - "List three things to carry into training for the next belt"
                - "Add the result and certificate to your grade archive"
            - name: First club tournament or inter-club competition
              description: |-
                ## Purpose
                A friendly tournament is one of the best rehearsals for a grading: performing patterns or sparring in front of judges, with nerves and long waits. Choosing a beginner-friendly event, entering the right category and treating it as practice rather than a verdict builds composure that carries into every grading.

                ## Milestones
                1. A beginner-friendly club or inter-club event chosen with your instructor's approval.
                2. The right category entered by age, grade, weight or event type.
                3. Competition rules for your category read and practised.
                4. The event completed and a short debrief written.
              priority: medium
              deadlineOffsetDays: 90
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "One club or inter-club competition entered and completed in the right category, with a written debrief."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "Ask your instructor for a beginner-friendly tournament in the next three months"
                - "Enter the category that matches your grade, age and weight"
                - "Read the competition rules for your category"
                - "Write a short debrief within two days of the event"
            - name: Seminar or training camp with a visiting instructor
              description: |-
                ## Purpose
                Seminars with senior instructors from your association, and summer or winter camps, are where many students see their style taught at its highest level, and some associations count attendance toward dan grading requirements. Planning one a year, with travel and costs sorted early, brings a burst of new material and contacts across clubs.

                ## Milestones
                1. Upcoming seminars and camps in your association listed with dates and costs.
                2. One chosen, and whether it counts toward grading requirements confirmed.
                3. Booking, travel and accommodation arranged.
                4. Notes from each session written up within a week.

                ## Notes
                Start from the **Trip** template if the camp involves travel.
              priority: low
              deadlineOffsetDays: 120
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "One seminar or camp attended, with notes written up and any credit toward grading requirements recorded."
                cadence: phased
                effort_hours_estimate: "16"
              tasks:
                - "List the seminars and camps your association runs this year"
                - "Ask whether attendance counts toward your grading requirements"
                - "Book the place, travel and accommodation together"
                - "Write up the notes from each session within a week"
            - name: Starting as an adult beginner in a class full of children
              description: |-
                ## Purpose
                Lots of clubs grade adults and juniors together, and a 35-year-old white belt lined up beside nine-year-olds can feel awkward enough to quit. Knowing the adult syllabus differences, finding the adult classes and setting a pace that respects work and recovery keeps you going past the first two belts, where most adult beginners drop out.

                ## Milestones
                1. Adult classes, or mixed classes with other adults, found on the timetable.
                2. Differences between the adult and junior syllabuses confirmed.
                3. A realistic training frequency set around work and recovery.
                4. First two gradings passed as an adult.
              priority: medium
              frontmatter:
                mode: building
                output_kind: habit
                success_criteria: "Two adult gradings passed while training at a frequency written down at the start."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Ask which classes have the most adult students"
                - "Check whether adults follow a different syllabus or grading length"
                - "Agree a weekly frequency your body and diary can sustain"
                - "Introduce yourself to two other adult students"
            - name: Training and grading alongside your child
              description: |-
                ## Purpose
                Family classes let a parent and child train together, and a shared belt path can be the best motivation either of you has. Planning around the different syllabuses and grading days, practising together at home and keeping the rivalry friendly makes it work for both.

                ## Milestones
                1. The club's family class and family fee options confirmed.
                2. Both syllabuses and grading dates in one family calendar.
                3. A short weekly home practice together.
                4. Both of you graded at least once while training together.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Parent and child each graded at least once while training at the same club, with a weekly home practice kept."
                cadence: rolling
              tasks:
                - "Ask the club about family classes and family fees"
                - "Put both grading schedules in the family calendar"
                - "Practise patterns or terminology together at home @recurring(weekly:sun)"
                - "Agree that each of you grades when ready, not at the same time"
            - name: Keeping grading on track around shift work and travel
              description: |-
                ## Purpose
                Rotating shifts, nights and work travel make a fixed class timetable impossible, and attendance minimums suddenly look out of reach. Using other clubs in the same association, open mats and a home drill plan keeps you training, and agreeing in advance how those sessions count avoids disappointment at grading time.

                ## Milestones
                1. Other clubs in your association near work or regular travel destinations listed.
                2. Your instructor's view on which outside sessions count toward attendance recorded.
                3. A home drill plan ready for weeks with no class.
                4. Attendance minimums met for the next grading despite shifts.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Attendance minimums met for the next grading, with outside sessions approved by your instructor in advance."
                cadence: rolling
              tasks:
                - "List association clubs near your workplace and frequent destinations"
                - "Ask your instructor which outside sessions count toward your attendance"
                - "Write a thirty-minute home drill plan for weeks with no class"
                - "Get a signed note from any visiting club you train at"
            - name: Returning to training after years away from the mat
              description: |-
                ## Purpose
                Coming back after ten years with a brown belt in the loft is common, and clubs handle it differently: some let you wear your old grade, some ask for a re-grading, some start you over. Agreeing your grade honestly, rebuilding fitness and flexibility gradually and relearning changed syllabus material makes the return safe and enjoyable.

                ## Milestones
                1. Old certificates and grade evidence found.
                2. The club's policy on returning students and old grades agreed.
                3. A gradual return plan for the first eight weeks, with full sparring left until later.
                4. Syllabus changes since you left identified and relearned.
              priority: medium
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A returning grade agreed with the instructor and eight weeks of gradual training completed without injury."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Find your old certificates or record book"
                - "Ask the instructor how the club treats returning students' grades"
                - "Plan eight weeks of gradual return before full sparring"
                - "Ask which parts of the syllabus have changed since you trained"
            - name: Grading as an older student with adapted requirements
              description: |-
                ## Purpose
                Associations often adapt gradings for older students or those with joint problems, allowing lower kicks, modified breakfalls or fewer fitness repetitions, but it is rarely advertised. Asking early what can be adapted, and getting agreement in writing, lets you keep grading on technique and knowledge rather than on whether your knees still match a 20-year-old's.

                ## Milestones
                1. Your association's policy on adapted gradings found or asked for.
                2. Your clinician asked about any limits for kicks, throws or impact.
                3. Adapted requirements agreed with your instructor in writing.
                4. The next grading passed under the agreed adaptations.
              priority: medium
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "Written agreement from your instructor on adapted grading requirements, used at your next grading."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Ask your instructor whether the association allows adapted gradings"
                - "Ask your clinician about any limits on kicking, throwing or impact"
                - "Write the agreed adaptations down and share them with the instructor"
                - "Practise the adapted versions until they are as clean as the originals"
            - name: Competition weight category and weigh-in planning
              description: |-
                ## Purpose
                Judo, jiu-jitsu and taekwondo competitions run in weight categories, and choosing the wrong one or trying to drop weight in the last week can wreck performance and health. Deciding your category from your normal training weight, months ahead and with a sports dietitian involved if you want to change it, keeps the weigh-in a formality.

                ## Milestones
                1. The weight categories and weigh-in rules for your target competition found.
                2. Your normal training weight recorded weekly for a month.
                3. A category chosen that matches your normal weight, or a change agreed with a sports dietitian.
                4. Weigh-in timing and the first meal after it planned.

                ## Notes
                Rapid weight cutting carries real risks. Any plan to compete below your normal weight belongs with a qualified sports dietitian or clinician, not a forum.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A competition weight category chosen from a month of training-weight records, with any change agreed with a professional."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Find the weight categories and weigh-in rules for your target event"
                - "Weigh yourself at the same time each week for a month"
                - "Choose the category that matches your normal training weight"
                - "Book a sports dietitian if you want to compete in a lower category"
            - name: First dan black belt preparation year
              description: |-
                ## Purpose
                First dan gradings are usually longer, harder and more formal than anything before them, often with a panel of senior examiners, all previous syllabus material, a demanding fitness element and sometimes a written paper. Treating the year before as a structured programme, with monthly mock gradings and the paperwork done early, gives the best chance of passing first time.

                ## Milestones
                1. The full dan syllabus, eligibility rules and application deadline confirmed.
                2. A twelve-month plan in quarters: kyu material review, dan material, mock gradings, taper.
                3. Monthly mock gradings with your instructor from month six.
                4. Application, fee, references and any essay submitted on time.
                5. The dan grading attended.

                ## Notes
                Start from the **Training program** template. Many associations set a minimum age, a minimum time at first kyu and sometimes teaching hours, so check eligibility before planning.
              priority: high
              deadlineOffsetDays: 365
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "The first dan grading attended after a twelve-month plan, with eligibility, application and fee completed before the deadline."
                cadence: phased
                effort_hours_estimate: "150"
              tasks:
                - "Confirm dan eligibility rules and the application deadline with your instructor"
                - "Write a twelve-month plan from the training program template"
                - "Run a full mock dan grading with your instructor @recurring(monthly:8)"
                - "Submit the application, fee and references before the deadline"
            - name: Writing the dan grade theory essay
              description: |-
                ## Purpose
                Several associations ask black belt candidates for a written thesis on the history, philosophy or technical principles of their art, and it is often left until the month before. Starting early, with a clear question and sources from your instructor, produces something you are proud to hand to the panel.

                ## Milestones
                1. The essay question, length and submission date confirmed.
                2. Sources gathered: association texts, your instructor's reading list and your own training notes.
                3. An outline agreed with your instructor.
                4. The finished essay submitted before the deadline.
              priority: low
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "A dan grade essay of the required length submitted to the association before its deadline."
                cadence: phased
                effort_hours_estimate: "20"
              tasks:
                - "Ask your instructor for the essay question, length and deadline"
                - "Gather three sources on the history or principles of your style"
                - "Ask the agent to turn your notes into a draft outline"
                - "Show the outline to your instructor before writing the full essay"
            - name: Assistant instructor hours and a first coaching award
              description: |-
                ## Purpose
                Senior kyu and dan grades are often expected to help teach, and some dan gradings require logged teaching hours or an assistant instructor award. Helping with beginners classes under supervision, logging the hours and completing the association's coaching course turns your own knowledge into something you can pass on.

                ## Milestones
                1. Your association's teaching hour and coaching award requirements confirmed.
                2. A regular slot assisting with beginners or juniors agreed.
                3. Teaching hours logged and signed by the head instructor.
                4. Coaching course, first aid and background check completed.
              priority: medium
              frontmatter:
                mode: service
                output_kind: deliverable
                success_criteria: "Required teaching hours logged and signed, with the association's assistant coaching award, first aid and background check completed."
                cadence: phased
                effort_hours_estimate: "40"
              tasks:
                - "Ask the head instructor what teaching hours and awards dan grades need"
                - "Agree a regular slot assisting with the beginners class"
                - "Log each assisting session and get it signed @recurring(weekly:thu)"
                - "Book the association's assistant coaching course and a first aid course"
            - name: Refereeing or judging qualification for your style
              description: |-
                ## Purpose
                Tournaments rely on volunteer referees and judges, and understanding the scoring rules from the official's side makes you a sharper competitor and a better examiner later. Taking the association's entry-level refereeing or judging course and officiating at a few club events builds a role in the art that lasts beyond your own competing years.

                ## Milestones
                1. The association's refereeing or judging pathway and course dates found.
                2. The entry-level course completed and the rules exam passed.
                3. Officiating done at two club or regional events under a senior referee.
                4. Feedback from the senior referee recorded.
              priority: low
              frontmatter:
                mode: service
                output_kind: deliverable
                success_criteria: "An entry-level refereeing or judging award gained and two events officiated under a senior referee."
                cadence: phased
                effort_hours_estimate: "24"
              tasks:
                - "Find your association's refereeing or judging pathway"
                - "Book the next entry-level course and read the competition rules"
                - "Volunteer to officiate at a club or regional event @recurring(quarterly)"
                - "Ask the senior referee for feedback after each event"
---

# Martial Arts Grading Path

This area is for anyone working up the belts in karate, judo, taekwondo, Brazilian jiu-jitsu, aikido or a similar art, from a first trial class to a black belt panel. It opens with the foundations (a club you can trust, the full syllabus, a licence, a uniform and a weekly timetable), then the routines that carry you between gradings, the skills examiners mark, the decisions about when and where to grade, grading days and competitions, versions for adult beginners, parents, shift workers, returners and older students, and finally dan grading, teaching and refereeing.

What repeats is a weekly attendance tally, twice-weekly pattern practice, a Friday read-back of class notes, two grading-shaped conditioning sessions, a daily ten-minute flexibility routine, a monthly syllabus readiness check and video review, a quarterly talk with your instructor, and a yearly licence renewal and budget check. The Purchase decision, Metrics log, Habit tracker, Training program, Operational checklist and Trip templates pair with the projects that name them. Installing adds all 50 projects as active, so archive the ones that are not for you yet.
