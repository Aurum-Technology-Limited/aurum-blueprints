---
id: tech-certifications.fe-exam
name: FE Exam (Fundamentals of Engineering)
description: "A full route to passing the NCEES FE exam: the right discipline, the supplied handbook and an approved calculator, topic reviews, timed practice, booking the test and what to do with the result."
category: personal
version: 1.0.0
tags: [tech-certifications, fe-exam, student, engineer, ncees, fundamentals-of-engineering, eit, exam-prep]
author: Aurum Technology
starter_structure:
  templates:
    - purchase-decision
    - habit-tracker
    - metrics-log
    - trip
  pillars:
    - name: Tech & Engineering Certifications
      emoji: "🏅"
      description: "Technical credentials and the exams behind them: FE and PE licensing, Chartered Engineer and Trinidad and Tobago engineering registration, PMP, PRINCE2 and Scrum, AWS, Azure and Google Cloud by level, Kubernetes and Terraform, networking and security certifications, Six Sigma belts, and coding, system design and machine-learning interviews."
      pillarFrontmatter:
        review_cadence: monthly
      areas:
        - name: FE Exam (Fundamentals of Engineering)
          description: "Preparing for the NCEES FE exam in your discipline: the supplied reference handbook, topic-by-topic review, an approved calculator, practice exams and booking the computer-based test."
          projects:
            - name: Choosing the right FE discipline exam
              description: |-
                ## Purpose
                Seven discipline exams exist, and the one you sit should match your degree and the PE exam you expect to take later, not the one a friend found easiest. Most licensing boards accept any discipline for the engineer intern step, but choosing well now means your review time also builds the knowledge your first job and later PE study will draw on.

                ## Milestones
                1. The exam specification for your own discipline and for Other Disciplines read side by side.
                2. Your degree transcript compared against both lists, with strong and weak areas marked.
                3. Your licensing board's position on discipline choice confirmed, if it has one.
                4. One discipline chosen and the reason written in a sentence at the top of your study notes.

                ## Notes
                Other Disciplines suits graduates of programmes without their own FE exam, such as aerospace or biomedical, but it covers a wide spread of subjects, so it is rarely the easy option.
              priority: high
              deadlineOffsetDays: 14
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "One FE discipline exam chosen and written down with a reason, after comparing at least two specifications against your transcript."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Download the FE exam specification for your degree discipline from the NCEES website"
                - "Download the Other Disciplines specification for comparison"
                - "Mark each knowledge area as strong, rusty or never studied against your transcript"
                - "Write down the discipline you will sit and why"
            - name: Current FE rules, fees and format check
              description: |-
                ## Purpose
                NCEES updates specifications, handbook versions, fees and retake rules, and study guides printed two years ago may describe an exam that no longer exists. Spending an hour on the official pages before buying anything stops you preparing for the wrong version.

                ## Milestones
                1. The current exam format, appointment length and break arrangements noted from the NCEES website.
                2. The current fee and the retake limits written in your study notes.
                3. The effective date of your discipline's specification and handbook version recorded.
                4. Any study book you own checked against that version and flagged if it is older.

                ## Notes
                Treat third-party summaries of the format as second-hand. Where they disagree with NCEES, NCEES wins.
              priority: high
              deadlineOffsetDays: 7
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A one-page note of the current FE format, fee, retake rules and handbook version, each taken from the NCEES website with the date checked."
                cadence: one-shot
                effort_hours_estimate: "1"
              tasks:
                - "Read the FE exam page on the NCEES website and note the current format"
                - "Write down the current exam fee and retake rules with today's date"
                - "Note the handbook version and specification date for your discipline"
                - "Check the edition date of any review book you already own"
            - name: MyNCEES account and licensing board requirements
              description: |-
                ## Purpose
                Your MyNCEES account is where you register, book, request accommodations and receive results, and your state or territorial licensing board decides whether you may sit before graduating and how the engineer intern certificate is issued. Settling both early avoids discovering a board approval step a week before your chosen date.

                ## Milestones
                1. A MyNCEES account created with your name exactly as it appears on your government ID.
                2. The licensing board you expect to apply to identified and its FE and engineer intern rules read.
                3. Any board approval needed before booking, and its processing time, noted.
                4. A short list of the documents the board will want, such as transcripts, gathered or requested.

                ## Notes
                A mismatch between your account name and your ID is one of the few things that can stop you being admitted on the day.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A MyNCEES account matching your ID exists, and your board's FE and engineer intern requirements are written down with any approval lead time."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Create a MyNCEES account using the name on your passport or driving licence"
                - "Find your licensing board's page on FE and engineer intern rules"
                - "Note whether the board must approve you before you book"
                - "Request an official transcript if the board will need one"
            - name: Navigating the FE Reference Handbook PDF
              description: |-
                ## Purpose
                During the exam the handbook is the only reference you get, supplied as a searchable PDF on screen, so the skill that matters is finding the right equation in seconds, not memorising it. Learning its layout and search behaviour in the first fortnight makes every later practice problem train the same habit you will use on the day.

                ## Milestones
                1. The current handbook version downloaded free from MyNCEES and saved where you study.
                2. Every chapter heading read once, with the sections for your discipline marked in your notes.
                3. A personal list of search terms that land on the right page first time, for 30 common equations.
                4. Practice problems worked with the PDF on screen rather than a printed copy.

                ## Notes
                Printed or annotated copies are not allowed in the exam, so practise with the clean PDF and a search box, as you will have on test day.
              priority: high
              frontmatter:
                mode: building
                output_kind: knowledge
                success_criteria: "A search-term list for at least 30 handbook equations, each tested to reach the right page in under 30 seconds."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Download the current FE Reference Handbook from your MyNCEES account"
                - "Skim every chapter heading and mark the ones your specification covers"
                - "Start a list of search terms that find the equations you use most"
                - "Time yourself finding ten equations by search alone"
            - name: Choosing and mastering an approved calculator
              description: |-
                ## Purpose
                Only calculator models on the NCEES approved list are allowed into the test room, and switching models a month before the exam costs speed you cannot spare. Choosing one now and using it for every practice problem means the matrix, equation solver and unit functions become automatic.

                ## Milestones
                1. The current NCEES calculator policy read and the approved models noted.
                2. One model chosen against your needs, such as solving equations, complex numbers or matrices.
                3. A spare of the same model, or fresh batteries, set aside for exam day.
                4. Five functions you will use often practised until you can do them without the manual.

                ## Notes
                Start from the **Purchase decision** template. Many candidates buy a second identical calculator as a backup so a flat battery cannot end the attempt.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "An approved calculator model is in hand, used for all practice since, with a backup or spare batteries ready."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Read the current NCEES calculator policy and list the approved models"
                - "Decide which functions your discipline needs most often"
                - "Buy or borrow one approved model and a spare set of batteries"
                - "Practise the equation solver and unit conversions on ten old problems"
            - name: Diagnostic practice exam and baseline score
              description: |-
                ## Purpose
                A diagnostic under rough exam conditions shows where your marks are leaking before you spend weeks on topics you already know. A score by knowledge area, even a low one, turns a vague plan into a ranked list.

                ## Milestones
                1. A practice set covering every knowledge area in your specification completed in one sitting, timed.
                2. Results scored and broken down by knowledge area.
                3. The three weakest and three strongest areas named in your study notes.
                4. The baseline score dated, so later practice can be compared against it.

                ## Notes
                Keep the official NCEES practice exam for your discipline unopened for now. It is most useful as a full-length mock in the last month.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A dated diagnostic score broken down by knowledge area, with the three weakest areas named."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Choose a diagnostic set that covers every area in your specification"
                - "Sit it in one timed session using only the handbook PDF and your calculator"
                - "Score it by knowledge area in a simple table"
                - "Name your three weakest areas at the top of your study notes"
            - name: FE study plan to a target test date
              description: |-
                ## Purpose
                Without a target date, FE study stretches indefinitely and the early topics fade before the late ones are done. A dated plan that allots weeks to knowledge areas by weight and weakness gives you a booking date to aim at and a clear signal when you are falling behind.

                ## Milestones
                1. A target test month chosen, allowing realistic weekly hours.
                2. Every knowledge area in your specification given a slot in the plan, weakest and heaviest first.
                3. Two full-length mocks and a final fortnight taper placed in the calendar.
                4. Weekly study hours agreed with anyone your plan affects at home or work.

                ## Notes
                Many working candidates need around three months of steady part-time study; students fresh from coursework often need less. Set the date from your own diagnostic, not someone else's timeline.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A written week-by-week plan to a named test month, covering every knowledge area, with two mocks and a taper scheduled."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Count the weekly study hours you can honestly give for the next three months"
                - "Pick a target test month that fits those hours"
                - "Lay out the knowledge areas week by week, weakest and heaviest first"
                - "Put two full-length mock dates and a taper fortnight in your calendar"
            - name: Self-study or paid review course decision
              description: |-
                ## Purpose
                Review courses range from free video series to instructor-led classes costing more than the exam itself, and the right choice depends on how long you have been out of school and how you study. Deciding with a budget and your diagnostic in front of you avoids buying three overlapping books and a course you never finish.

                ## Milestones
                1. A study budget set, including the exam fee and any official practice exam.
                2. Three options compared, for example self-study with one review book, an on-demand course and a live class.
                3. Each option scored on cost, fit to your discipline's current specification, practice problem volume and schedule.
                4. One choice made and anything not needed returned or cancelled.

                ## Notes
                Start from the **Purchase decision** template. Check that any course has been updated for the current specification and handbook version before paying.
              priority: medium
              deadlineOffsetDays: 21
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "One study approach chosen within a written budget, after scoring at least three options on the same four criteria."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Write a total budget that includes the exam fee"
                - "Shortlist three study options with prices and update dates"
                - "Score each against cost, specification fit, problem volume and schedule"
                - "Ask whether your employer or university reimburses review materials"
            - name: Knowledge area gap map from the specification
              description: |-
                ## Purpose
                The published specification lists every knowledge area and the range of questions each carries, and it is the most reliable guide to where marks come from. Turning it into a one-page map coloured by your diagnostic results shows at a glance which areas pay back study time.

                ## Milestones
                1. Every knowledge area and subtopic from your specification listed on one page.
                2. Each line marked strong, rusty or unknown from your diagnostic and transcript.
                3. The question range for each area noted beside it from the current specification.
                4. Five priority subtopics chosen for the first month.
              priority: medium
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A one-page gap map of every specification subtopic, rated and annotated with its question range, with five first-month priorities chosen."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Copy every knowledge area and subtopic from your specification onto one page"
                - "Rate each subtopic from your diagnostic and transcript"
                - "Note the question range the specification gives each area"
                - "Pick five subtopics to start with this month"
            - name: Weekly protected FE study blocks
              description: |-
                ## Purpose
                Consistent hours beat heroic weekends, because FE topics are broad and forgetting starts within days. Fixed study blocks in the calendar, treated like appointments, are the single habit most passing candidates describe.

                ## Milestones
                1. Three to five study blocks a week placed in your calendar at times you can keep.
                2. A place to study with the handbook PDF and calculator ready, free of interruptions.
                3. Hours studied recorded each week against the plan.
                4. Missed blocks rescheduled within the same week rather than dropped.

                ## Notes
                Start from the **Habit tracker** template. Short blocks of 60 to 90 minutes are easier to protect than one long day.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Study hours logged weekly for the whole plan, with at least four weeks in five meeting the planned hours."
                cadence: rolling
              tasks:
                - "Choose the study block times you can keep for the next twelve weeks"
                - "Set the week's study blocks in your calendar @recurring(weekly:sun)"
                - "Log hours studied against the plan @recurring(weekly:fri)"
                - "Move any missed block to another slot in the same week"
            - name: Daily ten-problem warm-up set
              description: |-
                ## Purpose
                Ten problems a day across mixed topics keeps every knowledge area warm while your main blocks focus on one. It also trains the switching between subjects that the real exam forces on you every few minutes.

                ## Milestones
                1. A source of mixed practice problems chosen, separate from the mocks you are saving.
                2. Ten problems done most days, timed at the exam's average pace per question.
                3. Each missed problem passed to the error log the same day.
                4. Accuracy on the daily set rising over four weeks.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Mixed ten-problem sets completed on at least five days a week for six weeks, with misses logged."
                cadence: rolling
              tasks:
                - "Pick a problem source with mixed topics for daily sets"
                - "Work through ten mixed problems at exam pace @recurring(daily)"
                - "Copy each miss into your error log with the topic"
                - "Work out your average time per problem at the end of each week"
            - name: Missed-problem error log and weekly review
              description: |-
                ## Purpose
                Missed problems are the most valuable material you have, because they show exactly where a concept, a handbook search or a unit slipped. A log that records why each one went wrong, and a weekly pass back through it, stops the same mistake costing marks on exam day.

                ## Milestones
                1. An error log set up with columns for topic, source, cause and the fix.
                2. Every missed or guessed problem logged with one of four causes: concept, handbook lookup, calculation or misreading.
                3. Each logged problem reworked from scratch within a week.
                4. The most frequent cause each month named and addressed in the plan.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "An error log with every missed practice problem, each tagged with a cause and reworked, reviewed weekly for the whole plan."
                cadence: rolling
              tasks:
                - "Set up an error log with topic, cause and fix columns"
                - "Rework every problem logged this week from a blank page @recurring(weekly:sat)"
                - "Count the causes at the month's end and note the most common"
                - "Ask the agent to group a month of logged errors by topic and cause"
            - name: Handbook lookup speed drills
              description: |-
                ## Purpose
                Searching the handbook PDF is a skill of its own, and a minute lost per lookup adds up across a long exam. A short weekly drill of finding equations cold, with a timer, keeps your search terms sharp and shows which sections still slow you down.

                ## Milestones
                1. A drill list of 20 equations and tables drawn from your weakest areas.
                2. A weekly timed run through the drill using search only.
                3. Every lookup taking over 30 seconds noted with a better search term.
                4. Average lookup time halved from the first drill.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Weekly timed lookup drills run for eight weeks, with the average time per lookup recorded and falling."
                cadence: rolling
              tasks:
                - "Write a drill list of 20 equations and tables you need"
                - "Run the lookup drill against a timer @recurring(weekly:wed)"
                - "Replace the search term for any lookup over 30 seconds"
                - "Refresh the drill list with new weak areas every month"
            - name: Monthly timed half-length session
              description: |-
                ## Purpose
                Stamina is part of the FE: concentration in the fifth hour is not the same as in the first. A monthly half-length session under exam timing builds endurance gradually and tests whether daily practice is turning into exam marks.

                ## Milestones
                1. A half-length set of fresh mixed questions prepared for each month of the plan.
                2. Each session taken in one sitting with only the handbook PDF and approved calculator.
                3. Scores recorded by knowledge area and compared with the diagnostic.
                4. Pacing notes kept on where time ran short.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A timed half-length session sat in each month of the plan, scored by knowledge area and logged against the baseline."
                cadence: rolling
              tasks:
                - "Set aside a fresh mixed question set for each month of the plan"
                - "Sit a half-length timed session in one go @recurring(monthly:14)"
                - "Score it by knowledge area and compare with the last session"
                - "Note the point in the session where your pace dropped"
            - name: Spaced review cards for concepts outside the handbook
              description: |-
                ## Purpose
                Some concepts are never written in the handbook in a form you can find under pressure: which equation applies, sign conventions, what a term means in a question stem. Short cards reviewed on a spaced schedule hold those judgements in memory without eating study blocks.

                ## Milestones
                1. A card deck started, one card per concept you had to look up outside the handbook.
                2. Cards reviewed twice a week in sessions under 20 minutes.
                3. Cards you answer correctly three times in a row moved to a longer interval.
                4. A deck of 100 or more cards by the final month.

                ## Notes
                Any spaced-repetition app or paper card box works. Keep cards to one fact or one judgement each.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A spaced review deck of at least 100 FE concept cards, reviewed twice a week through the final month."
                cadence: rolling
              tasks:
                - "Choose a spaced-repetition app or a paper card box"
                - "Write a card for each concept you could not find in the handbook"
                - "Review the due cards in one short session @recurring(weekly:tue,fri)"
                - "Delete or rewrite any card you keep missing for the same reason"
            - name: Knowledge area accuracy log
              description: |-
                ## Purpose
                Overall practice scores hide the detail: a rising average can mask an area that has not moved in a month. Logging accuracy by knowledge area once a month shows which reviews worked and where to send the next weeks.

                ## Milestones
                1. A log with one row per knowledge area and a column per month.
                2. Accuracy entered monthly from daily sets, drills and timed sessions.
                3. Areas below your target accuracy highlighted.
                4. The plan changed each month in response to the log.

                ## Notes
                Start from the **Metrics log** template. Count only first attempts; reworked problems inflate the figures.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: artifact
                success_criteria: "A monthly accuracy figure for every knowledge area in your specification, recorded for each month of the plan."
                cadence: rolling
              tasks:
                - "Set up an accuracy log with one row per knowledge area"
                - "Enter this month's first-attempt accuracy by area @recurring(monthly:27)"
                - "Highlight areas below your target accuracy"
                - "Note one change to the plan for each highlighted area"
            - name: FE study partner weekly check-in
              description: |-
                ## Purpose
                Studying alone for months is where most FE plans quietly stop. A weekly fifteen-minute call with a classmate, colleague or online partner sitting a similar date adds just enough accountability, and explaining a solution aloud exposes gaps faster than rereading.

                ## Milestones
                1. A study partner found who is sitting the FE within a few months of you.
                2. A fixed weekly check-in time agreed.
                3. Each check-in covering hours studied, one problem explained each and next week's focus.
                4. Check-ins kept up until both of you have sat the exam.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Weekly check-ins held with a study partner for at least eight weeks, each covering hours, one explained problem and next focus."
                cadence: rolling
              tasks:
                - "Ask a classmate, colleague or forum member sitting the FE soon to pair up"
                - "Agree a fixed fifteen-minute weekly check-in slot"
                - "Explain one problem aloud and report hours at the check-in @recurring(weekly:thu)"
                - "Swap one difficult problem with your partner each week"
            - name: Monthly FE plan reset
              description: |-
                ## Purpose
                Plans drift: a topic takes twice as long, work gets busy, a mock goes badly. A short monthly review of hours, accuracy and the calendar keeps the plan honest and decides early whether the target date still holds.

                ## Milestones
                1. Hours studied and accuracy by area reviewed against the plan each month.
                2. The next month's topics reordered from the latest evidence.
                3. The target test date confirmed or moved, with a reason written down.
                4. Any booking change made within the NCEES rescheduling window.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A dated monthly review note for each month of the plan, each ending with the target date confirmed or moved."
                cadence: rolling
              tasks:
                - "Review last month's hours and accuracy against the plan @recurring(monthly:2)"
                - "Reorder next month's topics from the accuracy log"
                - "Decide whether the target date still holds and write why"
                - "Check the rescheduling deadline before changing a booked date"
            - name: Mathematics, probability and statistics refresh
              description: |-
                ## Purpose
                Mathematics and statistics questions appear in every FE discipline and are among the quickest marks available once the methods come back. A focused refresh of algebra, calculus, linear algebra, differential equations and basic statistics, worked against the handbook, makes them reliable points.

                ## Milestones
                1. The mathematics and statistics subtopics in your specification listed.
                2. Each subtopic reviewed with ten worked problems using the handbook PDF.
                3. Calculator methods for integrals, matrices and statistics functions practised.
                4. A topic quiz scored at or above your target accuracy.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Every mathematics and statistics subtopic in your specification practised with ten problems, and a topic quiz passed at your target accuracy."
                cadence: phased
                effort_hours_estimate: "12"
              tasks:
                - "List the mathematics and statistics subtopics in your specification"
                - "Find each one's section in the handbook PDF"
                - "Work ten problems per subtopic with the handbook open"
                - "Practise matrix and statistics functions on your calculator"
            - name: Engineering economics problem practice
              description: |-
                ## Purpose
                Engineering economics is short to learn and appears across disciplines, which makes it one of the best returns on study time. Fluency with the interest factor tables, present worth, annual worth, rate of return and breakeven turns these into questions you finish fast and bank time from.

                ## Milestones
                1. Cash flow diagrams drawn for every practice problem until it is automatic.
                2. Present, future and annual worth problems solved with the handbook's factor tables.
                3. Depreciation, rate of return and breakeven problems practised.
                4. Twenty mixed economics problems done under time at your target accuracy.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A timed set of 20 mixed engineering economics problems completed at or above your target accuracy."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Find the interest factor tables and formulas in the handbook"
                - "Draw a cash flow diagram for every economics problem you attempt"
                - "Do five engineering economics problems in one sitting @recurring(weekly:mon)"
                - "Sit a timed set of 20 mixed economics problems"
            - name: Ethics and professional practice questions
              description: |-
                ## Purpose
                Ethics questions test the model rules boards use, such as duty to public safety, conflicts of interest and sealing work, and common sense alone often picks the wrong answer. A short structured study of the handbook's ethics section and the NCEES model law prepares you for judgements that a calculator cannot help with.

                ## Milestones
                1. The ethics and professional practice section of the handbook read in full.
                2. The order of duties, public first, then employer and client, then profession, written in your own words.
                3. Thirty practice ethics questions answered, with reasoning noted for each miss.
                4. Licensure basics such as seals, competence and reporting duties summarised on one page.
              priority: medium
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "Thirty ethics practice questions answered with reasons recorded for every miss, and a one-page summary of professional duties written."
                cadence: phased
                effort_hours_estimate: "5"
              tasks:
                - "Read the ethics and professional practice section of the handbook"
                - "Write a one-page summary of duties to the public, employer and profession"
                - "Answer a short set of ethics questions and note reasons for misses @recurring(monthly:9)"
                - "Read your own board's rules of professional conduct once"
            - name: Statics and mechanics of materials review
              description: |-
                ## Purpose
                Statics and mechanics of materials carry many questions in the civil, mechanical and Other Disciplines exams, and they reward method more than memory. Rebuilding free-body diagrams, trusses, centroids, stress, strain and beam deflection with handbook tables gives you a block of dependable marks.

                ## Milestones
                1. Free-body diagrams drawn for every problem until equilibrium setup takes under a minute.
                2. Trusses, frames, friction and centroids practised with handbook tables.
                3. Stress, strain, torsion, bending and beam deflection problems practised.
                4. A mixed topic quiz completed at your target accuracy.

                ## Notes
                If your discipline is electrical, chemical or industrial, check your specification first. Statics may carry few or no questions for you.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A mixed statics and mechanics of materials quiz completed at or above your target accuracy, with every miss logged."
                cadence: phased
                effort_hours_estimate: "16"
              tasks:
                - "Check how many statics and materials questions your specification lists"
                - "Redo free-body diagrams on ten old statics problems"
                - "Find the beam deflection and section property tables in the handbook"
                - "Sit a mixed quiz of statics and mechanics of materials problems"
            - name: Fluid mechanics and thermodynamics review
              description: |-
                ## Purpose
                Fluids and thermodynamics appear in most discipline exams and depend heavily on reading the right property table and keeping units straight. Structured practice with the handbook's steam tables, Moody diagram, energy equation and cycles turns slow lookups into routine steps.

                ## Milestones
                1. The fluids and thermodynamics subtopics in your specification listed and located in the handbook.
                2. Bernoulli, energy equation and pipe flow problems practised with the Moody diagram.
                3. First and second law problems and common cycles practised with property tables.
                4. A mixed quiz completed at your target accuracy.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A mixed fluids and thermodynamics quiz passed at your target accuracy, with steam table and Moody diagram lookups under a minute each."
                cadence: phased
                effort_hours_estimate: "14"
              tasks:
                - "List the fluids and thermodynamics subtopics your exam covers"
                - "Practise five steam table interpolations against a timer"
                - "Work pipe flow problems using the Moody diagram in the handbook"
                - "Sit a mixed fluids and thermodynamics quiz"
            - name: Circuits, signals and power for electrical and computer
              description: |-
                ## Purpose
                Electrical and computer candidates face a wide specification, from circuit analysis and electronics to signals, power, communications and digital systems. Working through it in the specification's order, with the calculator's complex number mode, keeps the breadth manageable.

                ## Milestones
                1. The electrical and computer specification mapped to handbook sections.
                2. DC and AC circuit analysis, including phasors and three-phase power, practised.
                3. Signals, control systems and communications problems practised with handbook transforms.
                4. Digital logic, computer systems and software basics reviewed with practice problems.
                5. A mixed quiz completed at your target accuracy.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Every electrical and computer knowledge area practised with problems and a mixed quiz passed at your target accuracy."
                cadence: phased
                effort_hours_estimate: "30"
              tasks:
                - "Map each electrical and computer knowledge area to its handbook section"
                - "Practise phasor arithmetic in your calculator's complex mode"
                - "Work three-phase power and transformer problems"
                - "Review digital logic and number systems with practice problems"
            - name: Chemical discipline core review
              description: |-
                ## Purpose
                Chemical candidates are tested heavily on material and energy balances, thermodynamics, kinetics and reactor design, heat and mass transfer and process design. Reviewing them in the order the specification lists, with handbook correlations and charts, rebuilds the engineering judgement the questions are built around.

                ## Milestones
                1. The chemical specification mapped to handbook sections.
                2. Material and energy balance problems, with and without reaction, practised.
                3. Reaction kinetics and reactor sizing problems practised.
                4. Heat transfer, mass transfer and separations problems practised.
                5. A mixed chemical quiz completed at your target accuracy.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Every chemical knowledge area practised and a mixed chemical quiz passed at your target accuracy."
                cadence: phased
                effort_hours_estimate: "30"
              tasks:
                - "Map each chemical knowledge area to its handbook section"
                - "Work ten material and energy balance problems"
                - "Practise reactor sizing for batch, CSTR and plug flow cases"
                - "Sit a mixed chemical discipline quiz"
            - name: Civil discipline core review
              description: |-
                ## Purpose
                Civil candidates cover structures, geotechnics, transportation, water resources, environmental, construction and surveying, so breadth is the challenge. Working through each area with handbook tables, rather than textbooks, keeps study at the depth the exam asks for.

                ## Milestones
                1. The civil specification mapped to handbook sections.
                2. Structural analysis, design basics and geotechnical problems practised.
                3. Hydraulics, hydrology and transportation problems practised.
                4. Construction, surveying and materials problems practised.
                5. A mixed civil quiz completed at your target accuracy.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Every civil knowledge area practised and a mixed civil quiz passed at your target accuracy."
                cadence: phased
                effort_hours_estimate: "30"
              tasks:
                - "Map each civil knowledge area to its handbook section"
                - "Practise soil classification and bearing capacity problems"
                - "Work open channel and pipe network problems"
                - "Do horizontal and vertical curve problems for transportation"
            - name: Environmental discipline core review
              description: |-
                ## Purpose
                Environmental candidates are tested on water and wastewater treatment, air quality, solid and hazardous waste, fate and transport, and the chemistry and biology behind them. Reviewing each area against the handbook's treatment equations and dispersion models prepares you for problems that mix several of them.

                ## Milestones
                1. The environmental specification mapped to handbook sections.
                2. Water and wastewater treatment design problems practised.
                3. Air quality, dispersion and control problems practised.
                4. Solid waste, groundwater and fate and transport problems practised.
                5. A mixed environmental quiz completed at your target accuracy.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Every environmental knowledge area practised and a mixed environmental quiz passed at your target accuracy."
                cadence: phased
                effort_hours_estimate: "28"
              tasks:
                - "Map each environmental knowledge area to its handbook section"
                - "Work sedimentation and activated sludge design problems"
                - "Practise Gaussian dispersion problems from the handbook"
                - "Sit a mixed environmental discipline quiz"
            - name: Industrial and systems discipline core review
              description: |-
                ## Purpose
                Industrial and systems candidates need operations research, quality and statistics, production systems, ergonomics, facilities and supply chain, and engineering management. Most of it is applied statistics and modelling, so practice with handbook formulas and the calculator's statistics mode pays off quickly.

                ## Milestones
                1. The industrial and systems specification mapped to handbook sections.
                2. Linear programming, queuing and simulation problems practised.
                3. Quality control charts, sampling and design of experiments problems practised.
                4. Ergonomics, facilities layout and inventory problems practised.
                5. A mixed industrial quiz completed at your target accuracy.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Every industrial and systems knowledge area practised and a mixed quiz passed at your target accuracy."
                cadence: phased
                effort_hours_estimate: "26"
              tasks:
                - "Map each industrial and systems knowledge area to its handbook section"
                - "Work queuing and inventory model problems"
                - "Practise control chart limit calculations"
                - "Sit a mixed industrial and systems quiz"
            - name: Mechanical discipline specifics review
              description: |-
                ## Purpose
                Mechanical candidates go beyond shared statics and thermodynamics into dynamics, vibrations, heat transfer, machine design, materials and measurement. Those areas carry a large share of the mechanical exam, so they deserve their own review after the common topics.

                ## Milestones
                1. The mechanical specification mapped to handbook sections.
                2. Dynamics, kinematics and vibrations problems practised.
                3. Conduction, convection and radiation heat transfer problems practised.
                4. Machine design, materials and measurement problems practised.
                5. A mixed mechanical quiz completed at your target accuracy.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Every mechanical-specific knowledge area practised and a mixed mechanical quiz passed at your target accuracy."
                cadence: phased
                effort_hours_estimate: "26"
              tasks:
                - "Map the mechanical-specific knowledge areas to handbook sections"
                - "Work natural frequency and damping problems"
                - "Practise heat exchanger LMTD and effectiveness problems"
                - "Do fatigue and shaft design problems with handbook charts"
            - name: Units, conversions and answer checking
              description: |-
                ## Purpose
                Unit slips cost more FE marks than missing knowledge, especially when the handbook mixes SI and US customary units across sections. A short system of carrying units through every line and checking magnitude before committing catches the error while there is still time to fix it.

                ## Milestones
                1. The handbook's units and conversion pages located and bookmarked in your search list.
                2. Units written through every line of practice working for two weeks.
                3. A one-line sense check of the answer's size made before choosing an option.
                4. Unit errors in the error log falling to near zero.
              priority: medium
              frontmatter:
                mode: building
                output_kind: habit
                success_criteria: "Two consecutive weeks of practice with no logged unit or conversion errors."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Find the units and conversion factors pages in the handbook"
                - "Carry units through every line of today's practice problems"
                - "Add a quick magnitude check before choosing each answer"
                - "Count unit errors in your error log after two weeks"
            - name: Alternative item type practice
              description: |-
                ## Purpose
                Not every FE question is a single-answer multiple choice: NCEES also uses item types such as multiple correct answers, fill in the blank, drag and drop and point and click. Practising each type removes surprise on the day and avoids losing marks to a format rather than the engineering.

                ## Milestones
                1. The current list of item types read on the NCEES website.
                2. Examples of each type found in the official practice exam or a review source.
                3. Multiple-correct questions answered with every option judged on its own.
                4. Fill-in-the-blank answers entered with the precision the question asks for.
              priority: low
              frontmatter:
                mode: building
                output_kind: knowledge
                success_criteria: "At least ten practice questions of each alternative item type answered, with misses logged by type."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Read the NCEES description of the item types used on the FE"
                - "Find practice examples of each item type"
                - "Answer a short set of non-standard item types @recurring(weekly:sat)"
                - "Log misses by item type as well as by topic"
            - name: Topic triage by weight and return
              description: |-
                ## Purpose
                With limited weeks, studying every subtopic to the same depth is a poor trade. Ranking areas by question range and your current accuracy shows where an hour buys the most marks, and gives you permission to accept a few weak spots on purpose.

                ## Milestones
                1. Each knowledge area scored on question range and current accuracy.
                2. Areas sorted into deepen, maintain and accept.
                3. Remaining study hours reallocated to the deepen group.
                4. The triage revisited after the first full-length mock.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A written triage sorting every knowledge area into deepen, maintain or accept, with hours reallocated and revisited after the first mock."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Score each knowledge area on question range and your accuracy"
                - "Sort areas into deepen, maintain and accept"
                - "Move remaining weekly hours toward the deepen group"
                - "Diary a triage review for the day after your first mock"
            - name: Pacing plan for each exam section
              description: |-
                ## Purpose
                Running out of time with questions unseen is one of the commonest ways to fail an FE you were ready for. A pacing plan with checkpoints for each section, set from your timed sessions, tells you during the exam whether to speed up or slow down.

                ## Milestones
                1. Your average time per question taken from timed sessions.
                2. Checkpoint targets set for each section, for example a question number at each hour.
                3. The scheduled break planned, including what you will eat and drink.
                4. The pacing plan tested in a full-length mock and adjusted.
              priority: medium
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A written pacing plan with checkpoints for each section, tested in at least one full-length mock."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Work out your average time per question from timed sessions"
                - "Set question-number checkpoints for each section"
                - "Plan what you will do in the scheduled break"
                - "Test the checkpoints in your next timed session"
            - name: Flag, guess and move-on rules
              description: |-
                ## Purpose
                Every candidate meets questions they cannot crack, and the mark is lost twice if they also take the time for three others. Written rules for when to flag, when to make a best guess and when to move on keep one hard problem from sinking a section.

                ## Milestones
                1. A time limit per question chosen, after which you flag and move on.
                2. A rule that no question is left blank, because unanswered questions earn nothing.
                3. A plan for returning to flagged questions before each section closes.
                4. The rules practised in two timed sessions.

                ## Notes
                Check the current NCEES tutorial for how review and flagging work within a section, and whether you can return to a section after the break.
              priority: low
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "Written flag, guess and move-on rules, used in two timed sessions with no question left unanswered."
                cadence: one-shot
                effort_hours_estimate: "1"
              tasks:
                - "Choose the time after which you flag and move on"
                - "Write a rule to answer every question before a section closes"
                - "Check how flagging and review work in the NCEES tutorial"
                - "Use the rules in your next two timed sessions"
            - name: Rebuilding a plateaued practice score
              description: |-
                ## Purpose
                Practice scores often climb for a month and then stall, and doing more of the same rarely breaks the stall. Diagnosing why, whether it is concepts, lookups, pacing or careless errors, and changing the method for three weeks usually restarts progress.

                ## Milestones
                1. Three weeks of flat or falling scores confirmed in the accuracy log.
                2. The error log analysed for the dominant cause of misses.
                3. One method change chosen, such as worked examples before problems or shorter timed sets.
                4. A timed session after three weeks showing whether the change worked.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A written diagnosis of a score plateau, one method change applied for three weeks, and a follow-up timed score recorded."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Check the accuracy log for three weeks without improvement"
                - "Ask the agent to summarise the error log by cause and topic"
                - "Choose one method change and apply it for three weeks"
                - "Sit a timed session and compare with the plateau score"
            - name: Study leave or employer sponsorship request
              description: |-
                ## Purpose
                Many engineering employers pay the exam fee, buy review materials or give study leave, but only if asked, and often only through a written request. A short, specific request tied to your role and the licensing route makes a yes easier for a manager to give.

                ## Milestones
                1. Your employer's training or professional development policy found.
                2. A written request prepared covering fee, materials, any leave and the target date.
                3. The request discussed with your manager.
                4. The outcome and any conditions, such as repayment if you leave, recorded.

                ## Notes
                Read any repayment clause before accepting sponsorship.
              priority: low
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "A written sponsorship or leave request sent to your manager, with the decision and any conditions recorded."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Find your employer's training or development policy"
                - "Write a short request listing the fee, materials, leave and target date"
                - "Book fifteen minutes with your manager to discuss it"
                - "Record the decision and any repayment conditions"
            - name: Booking the FE test appointment
              description: |-
                ## Purpose
                Booking early secures the date, test centre and time of day you want, and a booked date sharpens study more than any plan. Registering through MyNCEES and scheduling with the test provider also confirms that your name, ID and any board approval are all in order.

                ## Milestones
                1. Registration for your discipline completed and the fee paid through MyNCEES.
                2. A test centre and morning or afternoon slot chosen to suit how you think best.
                3. The confirmation saved, with the date, address and arrival time in your calendar.
                4. The reschedule and cancellation deadlines noted.

                ## Notes
                Visit or map the test centre before the day if it is unfamiliar, including parking or transport.
              priority: high
              deadlineOffsetDays: 45
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "An FE appointment booked at a chosen test centre, with the confirmation saved and reschedule deadlines noted."
                cadence: one-shot
                effort_hours_estimate: "1"
              tasks:
                - "Register for your discipline exam in MyNCEES"
                - "Compare nearby test centres and available time slots"
                - "Book the slot and save the confirmation email"
                - "Put the date, arrival time and reschedule deadline in your calendar"
            - name: Full-length mock under exam conditions
              description: |-
                ## Purpose
                A full-length mock is the only rehearsal of the real thing: the appointment length, the break, the on-screen handbook and the fatigue of the last section. Sitting the official NCEES practice exam for your discipline three to four weeks out leaves time to act on what it shows.

                ## Milestones
                1. The official practice exam for your discipline sat in one session at your exam's time of day.
                2. Only the handbook PDF, your approved calculator and scratch paper used.
                3. The break taken for the same length as on the day.
                4. Results scored by knowledge area and the final weeks of the plan adjusted.
              priority: high
              deadlineOffsetDays: 75
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A full-length mock sat in one sitting under exam conditions three to four weeks before the test, scored by area and acted on."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Buy the official NCEES practice exam for your discipline"
                - "Block a full day three to four weeks before your test date"
                - "Sit the mock with only the handbook PDF and your calculator"
                - "Score it by knowledge area and revise the final weeks of the plan"
            - name: Final fortnight taper plan
              description: |-
                ## Purpose
                The last two weeks are for consolidation, not new topics: cramming a new area now usually costs accuracy on the ones you know. A taper of lighter mixed practice, error log review and sleep keeps you sharp without arriving tired.

                ## Milestones
                1. No new topics started in the final fourteen days.
                2. Daily light practice of mixed problems and handbook lookups.
                3. The whole error log reviewed once more.
                4. Sleep and meal times aligned to the exam's time of day for the final week.
              priority: medium
              deadlineOffsetDays: 90
              frontmatter:
                mode: event
                output_kind: habit
                success_criteria: "A written taper plan followed for the final fourteen days, with no new topics and a full error log review completed."
                cadence: one-shot
                effort_hours_estimate: "15"
              tasks:
                - "Write a fourteen-day taper with no new topics"
                - "Do a short mixed set and five lookups each taper day @recurring(daily)"
                - "Review the full error log once in the final week"
                - "Shift your wake-up time to match the exam slot"
            - name: Exam day logistics and ID check
              description: |-
                ## Purpose
                Test centres turn candidates away for expired ID, a name mismatch or arriving late, and none of it has anything to do with engineering. A checklist run the week before and the evening before removes every avoidable reason not to sit.

                ## Milestones
                1. Your ID checked against the current NCEES and test provider rules and your account name.
                2. Approved calculator and spare batteries packed.
                3. Route, travel time and arrival time confirmed.
                4. Rules on what can go in the room, lockers and breaks reread.

                ## Notes
                Personal items, including notes and phones, stay in a locker. Scratch materials are supplied at the centre.
              priority: high
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "On exam day you arrive by the stated time with valid matching ID and an approved calculator, and sit the exam."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Check that your ID is valid and matches your MyNCEES name exactly"
                - "Reread the test centre rules on personal items and breaks"
                - "Pack the calculator and spare batteries the night before"
                - "Plan to arrive at least 30 minutes before your appointment"
            - name: Reading your FE result and next step
              description: |-
                ## Purpose
                Results arrive through MyNCEES, usually as a pass or fail, and what you do in the week after matters either way. A pass starts the engineer intern application; a fail comes with a diagnostic report by knowledge area that is the best study guide you will get for a retake.

                ## Milestones
                1. The result read and saved from MyNCEES.
                2. On a pass, the engineer intern application started with your board.
                3. On a fail, the diagnostic report saved and compared with your accuracy log.
                4. A dated next step written down within a week of the result.
              priority: medium
              frontmatter:
                mode: event
                output_kind: decision
                success_criteria: "Within a week of the result, a dated next step is written: an engineer intern application begun or a retake plan started."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Save a copy of your result notice from MyNCEES"
                - "Save the diagnostic report if one was issued"
                - "Write the next step and its date in your notes"
                - "Tell your manager, adviser or study partner the outcome"
            - name: Engineer intern or EIT certificate application
              description: |-
                ## Purpose
                Passing the FE exam is usually one requirement for an engineer intern or engineer in training certificate, and boards differ on whether they issue it automatically or need an application, a fee and transcripts. Applying promptly puts the title on your CV and starts the record your board will expect later.

                ## Milestones
                1. Your board's engineer intern requirements confirmed after the pass.
                2. The application, fee and any transcripts submitted.
                3. The certificate number and issue date recorded.
                4. The title added to your CV and professional profiles once issued.

                ## Notes
                Some boards allow the FE result to be transferred to another board later; check the rules if you expect to move.
              priority: medium
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "An engineer intern or EIT certificate issued by your board, with its number and date recorded."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Check your board's engineer intern application steps after passing"
                - "Submit the application, fee and transcripts the board asks for"
                - "Record the certificate number and issue date when it arrives"
                - "Add the title to your CV once it is issued"
            - name: Sitting the FE in your final year of university
              description: |-
                ## Purpose
                Final-year students who sit close to graduation carry fresh coursework and exam habits that fade fast once work starts. Fitting FE study around final projects and coursework needs a lighter plan, a booking timed between assessment peaks and a check that your board permits sitting before graduating.

                ## Milestones
                1. Your board's rule on sitting before graduation confirmed.
                2. A test date chosen outside your heaviest assessment weeks.
                3. FE study linked to current modules where topics overlap.
                4. Support asked for from your department or student engineering society, such as review sessions.

                ## Notes
                Ask your department whether it reimburses the fee or runs review sessions. Many do for final-year students.
              priority: medium
              deadlineOffsetDays: 180
              frontmatter:
                mode: building
                output_kind: event-completion
                success_criteria: "The FE sat before or within three months of graduation, on a date chosen around your assessment calendar."
                cadence: phased
                effort_hours_estimate: "80"
              tasks:
                - "Confirm your board allows final-year students to sit"
                - "Mark your heaviest assessment weeks on the plan"
                - "Ask your department about review sessions and fee support"
                - "Check FE progress against your module calendar @recurring(monthly:5)"
            - name: Returning to the FE years after graduating
              description: |-
                ## Purpose
                Engineers who graduated five or more years ago often find the work skills strong and the exam skills gone: integrals, circuits or thermodynamics outside their specialism, and timed multiple choice. A longer plan with an early broad refresh and more timed practice accounts for that.

                ## Milestones
                1. A diagnostic taken in the first fortnight, before any course is bought.
                2. Topics used daily at work separated from those not touched since university.
                3. A plan of at least twelve weeks with a broad mathematics refresh first.
                4. Weekly study that fits around work commitments, such as lunch breaks and an evening.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A twelve-week or longer plan built from a diagnostic, separating work-familiar and forgotten topics, and followed for its first month."
                cadence: phased
                effort_hours_estimate: "90"
              tasks:
                - "Take a diagnostic before buying any course"
                - "Sort topics into used at work and untouched since university"
                - "Start the plan with a broad mathematics refresh"
                - "Use one lunch break a week for handbook lookup practice @recurring(weekly:tue)"
            - name: Studying for the FE around children or caring
              description: |-
                ## Purpose
                Parents and carers rarely get long, quiet study blocks, so the plan has to be built from short, reliable pieces and the support of the people around them. Agreeing protected time at home and choosing a later date to avoid cramming makes the FE possible without burning out.

                ## Milestones
                1. Short study slots of 30 to 45 minutes identified around routines.
                2. Protected time agreed with a partner, family member or childcare.
                3. Study materials made portable, such as problems on a phone and the handbook PDF on a tablet.
                4. A test date and childcare for the exam day arranged.

                ## Notes
                A target date two months later than a single candidate would choose is usually wiser than a plan you cannot keep.
              priority: low
              frontmatter:
                mode: building
                output_kind: habit
                success_criteria: "Protected study slots agreed with your household and kept for six weeks, with childcare or care cover booked for exam day."
                cadence: phased
                effort_hours_estimate: "90"
              tasks:
                - "List the short study slots your routine already has"
                - "Agree next week's protected study time with your household @recurring(weekly:sat)"
                - "Load practice problems and the handbook onto a phone or tablet"
                - "Arrange childcare or care cover for the exam day"
            - name: Sitting the FE from outside the United States
              description: |-
                ## Purpose
                Candidates outside the US, including engineering graduates in Trinidad and Tobago, Jamaica, Barbados and elsewhere in the Caribbean, often take the FE to keep a US licensing route open. Test centre availability, a board that accepts non-US degrees, credential evaluation and possible travel all need sorting before the study plan is final.

                ## Milestones
                1. Test centres in or near your country checked on the NCEES and test provider sites.
                2. A US board identified that accepts your degree, and its credential evaluation rules noted.
                3. Credential evaluation started if the board needs it.
                4. Travel, accommodation and ID arranged if the nearest centre is abroad.

                ## Notes
                Start from the **Trip** template if you must travel to sit. Check visa or entry rules for the country with the test centre well ahead.
              priority: medium
              deadlineOffsetDays: 60
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A test centre location and a US board that accepts your degree confirmed in writing, with credential evaluation and travel arranged if needed."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Search the test provider's site for FE test centres near you"
                - "Find a US board that accepts graduates of your university"
                - "Check whether that board requires a credential evaluation"
                - "Price travel and two nights' accommodation if the centre is abroad"
            - name: Retake plan after an unsuccessful attempt
              description: |-
                ## Purpose
                An unsuccessful attempt hurts, but the diagnostic report shows exactly which knowledge areas fell short, which most first plans never had. Rebuilding the plan around that report, and around what went wrong on the day, usually makes the second attempt the better-prepared one.

                ## Milestones
                1. The diagnostic report compared with your accuracy log and pacing notes.
                2. Causes named: knowledge areas, pacing, lookups or exam-day conditions.
                3. The current retake waiting period and limits checked on the NCEES website.
                4. A new plan of eight or more weeks built around the weakest areas.
                5. A retake date booked once the waiting period allows.
              priority: medium
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A written retake plan built from the diagnostic report, naming the causes of the first result, with a retake date booked."
                cadence: phased
                effort_hours_estimate: "60"
              tasks:
                - "Lay the diagnostic report beside your accuracy log"
                - "Write what went wrong on the day as well as in the topics"
                - "Check the current retake rules on the NCEES website"
                - "Build an eight-week plan led by the three weakest areas"
            - name: Testing accommodations request
              description: |-
                ## Purpose
                If you have a disability or condition that affects testing, NCEES considers requests for accommodations such as extra time or a separate room, but approval takes documentation and weeks. Requesting before you book avoids sitting without the support you are entitled to.

                ## Milestones
                1. The current NCEES accommodations process and documentation rules read.
                2. Supporting documentation requested from your clinician or university disability service.
                3. The request submitted through MyNCEES before booking.
                4. The decision received and the test booked to match it.

                ## Notes
                Book only after the decision, as approved accommodations may change which slots and centres are available.
              priority: medium
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "An accommodations request submitted with supporting documentation and a decision received before the test is booked."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Read the NCEES accommodations page and documentation rules"
                - "Ask your clinician or disability service for supporting documentation"
                - "Submit the request through MyNCEES"
                - "Book the test once the decision arrives"
            - name: Personal FE problem bank keyed to the specification
              description: |-
                ## Purpose
                Over the weeks you collect problems from books, courses, lecture notes and forums, and they are far more useful filed by specification subtopic than scattered. A personal bank lets you pull a targeted set for any weak area in minutes, and serves a retake or a friend later.

                ## Milestones
                1. A simple index of specification subtopics set up in a spreadsheet or folder.
                2. Each practice problem filed by subtopic, source and difficulty.
                3. At least ten problems filed for every subtopic in your discipline.
                4. Targeted sets pulled from the bank for each weak area.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A problem bank indexed by specification subtopic with at least ten problems filed under every subtopic in your discipline."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "Set up an index of subtopics from your specification"
                - "File today's practice problems under their subtopics"
                - "Fill gaps in thin subtopics from a second source @recurring(monthly:20)"
                - "Pull a targeted set from the bank for your weakest area"
            - name: Running an FE review session for a student group or cohort
              description: |-
                ## Purpose
                Graduates who have passed are well placed to help the next group, and teaching a topic is a strong way to keep it. A single review session for a university engineering society or a graduate cohort at work, built on practice problems and handbook lookups, gives others a head start.

                ## Milestones
                1. A host agreed, such as a student engineering society or your employer's graduate programme.
                2. One topic chosen with worked problems that use the handbook PDF.
                3. A session of 60 to 90 minutes delivered with time for questions.
                4. A short list of resources and the current NCEES links shared afterwards.

                ## Notes
                Do not share or describe actual exam questions. The NCEES nondisclosure agreement you accepted forbids it.
              priority: low
              frontmatter:
                mode: service
                output_kind: deliverable
                success_criteria: "One FE review session delivered to a student group or graduate cohort, with problems and resources shared afterwards."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Offer an FE review session to a student society or graduate cohort"
                - "Choose one topic and five worked problems that use the handbook"
                - "Deliver the session with time left for questions"
                - "Send attendees the resource list and current NCEES links"
---

# FE Exam (Fundamentals of Engineering)

This area takes you from deciding to sit the NCEES Fundamentals of Engineering exam to holding a pass and an engineer intern certificate, whether you are a final-year student or an engineer who graduated years ago. It starts with foundations (choosing the discipline exam, checking current rules, the reference handbook, the calculator, a diagnostic and a dated plan), moves through the weekly study machinery and topic-by-topic reviews for each discipline, then pacing and triage decisions, the test booking, exam day and the result, with variants for students, returning engineers, parents, international candidates and retakes.

The rhythm is weekly study blocks, a short daily problem set, a weekly error log and handbook drill, and a monthly timed session and plan reset. The Purchase decision, Habit tracker, Metrics log and Trip templates pair with the calculator, study blocks, accuracy tracking and travel to a test centre abroad. Installing adds all 50 projects as active, so archive the ones that are not for you yet.
