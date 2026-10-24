---
id: tech-certifications.pe-exam
name: PE Exam (Principles and Practice)
description: "A route to the NCEES PE exam in your discipline: eligibility and booking, a study calendar, timed practice with the supplied references, mock exams and an exam-day plan."
category: personal
version: 1.0.0
tags: [tech-certifications, pe-exam, engineer, ncees, professional-engineer, licensing-exam, exam-prep]
author: Aurum Technology
starter_structure:
  templates:
    - course
    - purchase-decision
    - skills-matrix
    - metrics-log
    - one-on-one
  pillars:
    - name: Tech & Engineering Certifications
      emoji: "🏅"
      description: "Technical credentials and the exams behind them: FE and PE licensing, Chartered Engineer and Trinidad and Tobago engineering registration, PMP, PRINCE2 and Scrum, AWS, Azure and Google Cloud by level, Kubernetes and Terraform, networking and security certifications, Six Sigma belts, and coding, system design and machine-learning interviews."
      pillarFrontmatter:
        review_cadence: monthly
      areas:
        - name: PE Exam (Principles and Practice)
          description: "Preparing for the NCEES PE exam in your discipline: the supplied references, practice problems, timed sessions and the engineering experience that has to come first."
          projects:
            - name: Choosing your PE discipline and depth module
              description: |-
                ## Purpose
                NCEES offers PE exams in many disciplines, and several, such as Civil, Mechanical and Electrical and Computer, split into depth modules you choose when you register. Picking the one that matches the work you do every day, rather than the one colleagues sat, means your experience counts as study time. Settle it first, because every book, course and practice exam you buy depends on it.

                ## Milestones
                1. The current list of PE exams and modules read on the NCEES website.
                2. Two candidate modules compared against your last three years of project work.
                3. Your board's rules checked for any link between the exam you sit and the work you may sign.
                4. One discipline and module chosen and written at the top of your study plan.

                ## Notes
                If two modules look equally close, download both exam specifications and count the knowledge areas you could already solve problems in today. The higher count usually wins.
              priority: high
              deadlineOffsetDays: 14
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "One PE discipline and depth module is chosen, with the reason and the exam specification it rests on recorded in your study plan."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "List the PE exams and modules on the NCEES website that touch your work"
                - "Download the exam specification for your two closest candidates"
                - "Mark each knowledge area you have used on a real project"
                - "Ask a licensed colleague in your field which module they sat and why"
                - "Record the chosen discipline and module with a one-line reason"
            - name: Eligibility and board sequencing check
              description: |-
                ## Purpose
                Licensing boards differ on when you may sit the PE: some approve you before you register with NCEES, others let you sit before your experience is complete, and a few still expect the full experience first. Knowing your board's order of steps now stops you booking an exam the board will not count, or waiting years you did not need to.

                ## Milestones
                1. Your board's current rule on sitting the PE before or after the experience requirement found on its website.
                2. Whether board approval is needed before NCEES registration confirmed.
                3. Your FE result and degree details checked against what the board expects at exam stage.
                4. A one-page note of the steps, in order and dated, saved with your study plan.

                ## Notes
                Keep this to the exam step. The full licence application, references and comity are separate work for later. Rules change, so note the date you checked and the page you read.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A dated note states, from your board's website or a written reply from the board, whether and when you may sit the PE and whether approval comes first."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Find the licensing board for the state or jurisdiction where you will apply"
                - "Read the board's current rule on when candidates may sit the PE"
                - "Email the board one specific question if the rule is unclear"
                - "Write the steps in order with the date you checked them"
            - name: MyNCEES account and exam specification folder
              description: |-
                ## Purpose
                Registration, scheduling, results and the reference handbook all run through your MyNCEES account, so a mistyped name or an old email address causes trouble on exam day. Setting the account up properly, and filing the exam specification and handbook in one folder, gives the rest of the plan a single source of truth.

                ## Milestones
                1. A MyNCEES account with your name exactly as it appears on your government ID.
                2. The current exam specification for your module saved and dated.
                3. The reference handbook version used for your exam downloaded.
                4. One study folder holding the specification, handbook and your board note.

                ## Notes
                Check which edition of the handbook and which design standards apply to your exam date. Studying from an outdated edition is one of the most common avoidable errors.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A MyNCEES account matching your ID exists, and one folder holds the dated exam specification and the current reference handbook."
                cadence: one-shot
                effort_hours_estimate: "1"
              tasks:
                - "Create or update your MyNCEES account with your ID name"
                - "Download the current exam specification for your module"
                - "Download the reference handbook version used for your exam"
                - "Check the NCEES site for a newer handbook or specification @recurring(quarterly)"
            - name: Diagnostic practice exam baseline
              description: |-
                ## Purpose
                Before planning study hours, find out where you stand. Sitting a timed half-length set of practice problems, then scoring it by knowledge area, shows which topics are already exam-ready and which need weeks, so the calendar is built on evidence rather than a memory of university.

                ## Milestones
                1. A half-length practice set spread across the whole exam specification sat under time.
                2. Every problem marked right, wrong or guessed.
                3. Scores grouped by knowledge area in a single table.
                4. The three weakest areas named as the first study blocks.

                ## Notes
                Count lucky guesses as wrong. A baseline that flatters you produces a plan that is too short.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A timed diagnostic has been sat and scored by knowledge area, with the three weakest areas written into the study plan."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Pick a practice set that covers every knowledge area in your specification"
                - "Sit the set in one timed block with only the handbook and calculator"
                - "Mark guesses separately from confident answers"
                - "Group the results by knowledge area and rank them"
            - name: PE study calendar counted back from test day
              description: |-
                ## Purpose
                Most working engineers need several months of steady evening and weekend study, and the plan only holds if it is written against a real calendar with holidays, project deadlines and family events in it. Counting back from a target test window, with buffer weeks and the last mock fixed, turns good intentions into hours on specific days.

                ## Milestones
                1. A target test window chosen and written down.
                2. Weekly study hours agreed that fit your work and home life.
                3. Each knowledge area assigned to dated weeks, weakest and largest first.
                4. Two buffer weeks and the final full mock placed in the calendar.
                5. The calendar shared with anyone at home it affects.

                ## Notes
                Start from the **Course** template. Plan for fewer hours than you hope: a plan you keep at eight hours a week beats one you abandon at fifteen.
              priority: high
              deadlineOffsetDays: 14
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A dated study calendar runs from today to a target test window, with every knowledge area, two buffer weeks and the final mock placed."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Choose a target test window and write it at the top of the plan"
                - "Block your weekly study hours in your calendar for the whole plan"
                - "Assign each knowledge area to dated weeks, weakest first"
                - "Add two buffer weeks and the final full mock date"
            - name: Approved calculator choice and key drills
              description: |-
                ## Purpose
                NCEES allows only the calculator models on its published list, and test centres turn away anything else. Choosing one model now and doing every practice problem on it builds the speed that matters on exam day: stored constants, unit conversions, equation solving and complex numbers without hunting for keys.

                ## Milestones
                1. The current NCEES approved calculator list checked.
                2. One approved model bought, plus an identical spare.
                3. Every practice problem from now on worked on that model.
                4. A one-page card of your most used key sequences, practised until automatic.

                ## Notes
                Start from the **Purchase decision** template. Electrical and computer candidates often rely on complex number modes, so check the model handles them well before buying.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "An approved calculator and a spare of the same model are owned, and a key-sequence card covers the functions your module uses most."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Check the current NCEES approved calculator list"
                - "Buy one approved model and an identical spare"
                - "Write down the key sequences for your five most used functions"
                - "Put fresh batteries in both calculators before the exam month"
            - name: Reference handbook search fluency
              description: |-
                ## Purpose
                On a computer-based PE you work from the reference NCEES supplies on screen, and your own notes stay outside the room. Candidates who know where each equation lives, and which search terms find it, gain minutes on every problem. A few weeks of deliberate handbook practice pays back across the whole exam.

                ## Milestones
                1. Every chapter of the handbook skimmed once, with a note of what it holds.
                2. A personal list of search terms that find your module's key equations.
                3. Twenty problems solved using only the electronic handbook.
                4. Time to locate a named equation measured and under a minute.

                ## Notes
                Practise with the PDF on a screen, not a printed copy with tabs. On-screen search behaves very differently from flicking pages, and that is what you will have on the day.
              priority: high
              deadlineOffsetDays: 45
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "You can find any equation your module uses in the electronic handbook in under a minute, tested on twenty random lookups."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "Open the handbook PDF and skim every chapter heading"
                - "Write a list of search terms for your module's core equations"
                - "Solve every practice problem using only the PDF handbook"
                - "Time yourself on ten random equation lookups @recurring(weekly:wed)"
            - name: Study budget and employer support request
              description: |-
                ## Purpose
                Exam fees, a review course, practice exams and calculators add up, and many engineering employers will pay part of it or give study leave if asked with a clear plan. Pricing everything and putting a short request to your manager before you spend means you do not pay for what the company would have covered.

                ## Milestones
                1. A costed list of exam fee, materials, course and any travel.
                2. Your employer's training or licensure support policy found and read.
                3. A short written request sent to your manager with costs and dates.
                4. The answer recorded, with any repayment or tie-in terms noted.

                ## Notes
                Read any clawback clause before accepting: some employers ask for repayment if you leave within a set period after they fund the exam.
              priority: medium
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A costed study budget exists, and your employer's answer on fees, materials and study leave is recorded in writing."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "List the costs of the exam fee, materials, course and travel"
                - "Find your employer's policy on licensure and training support"
                - "Ask the agent to draft a one-page support request from your plan"
                - "Send the request to your manager and note the reply"
                - "Submit study receipts for reimbursement @recurring(monthly:26)"
            - name: Protected study hours agreed at home
              description: |-
                ## Purpose
                Study time disappears first to overtime and family plans unless the people you live with know when it is and why it matters. Agreeing fixed evenings and one weekend block with your partner or household, and what happens when life clashes, gives the plan a chance of surviving month three.

                ## Milestones
                1. Fixed weekly study slots chosen with your household.
                2. A quiet place set up with a screen for the handbook, the calculator and scratch paper.
                3. A swap rule agreed for when a slot clashes with family plans.
                4. The slots visible on a shared calendar.
              priority: medium
              frontmatter:
                mode: building
                output_kind: habit
                success_criteria: "Weekly study slots are on a shared household calendar, with a swap rule everyone at home has agreed."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Choose three evening slots and one weekend block for study"
                - "Talk the slots through with your partner or household"
                - "Set up a desk with a second screen for the handbook"
                - "Check the slots still work with your household @recurring(monthly:3)"
            - name: Knowledge area gap matrix
              description: |-
                ## Purpose
                The exam specification lists every knowledge area and roughly how much of the exam each covers, which makes it the best map you have. Rating yourself against each line, and updating the rating as practice scores come in, shows where the next hour of study does the most good.

                ## Milestones
                1. Every knowledge area from the specification listed in a matrix.
                2. Each area rated from one to four for confidence, using diagnostic results.
                3. The approximate share of the exam each area covers written beside it.
                4. The matrix re-rated after each monthly mock.

                ## Notes
                Start from the **Skills matrix** template. Weight by exam share, not interest: a weak area worth a large share of the exam beats a favourite topic every time.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A matrix lists every knowledge area in your specification with its exam share and a confidence rating updated at least monthly."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Copy every knowledge area from your specification into the matrix"
                - "Rate each area from one to four using your diagnostic"
                - "Add the approximate exam share for each area"
                - "Re-rate the matrix after each monthly mock @recurring(monthly:14)"
            - name: Weekly mixed problem set
              description: |-
                ## Purpose
                Reading theory feels like progress, but the exam pays only for problems solved correctly under time. A fixed weekly set of mixed problems, drawn from every knowledge area studied so far, keeps old topics alive while new ones are added.

                ## Milestones
                1. A problem source in place for every knowledge area in your specification.
                2. A set of 15 to 20 mixed problems worked each week.
                3. Each set timed at the pace you will need on exam day.
                4. Results from every set logged by knowledge area.

                ## Notes
                Work out your pace by dividing the session time by the number of questions published on the NCEES site, then practise slightly faster than that.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "At least 15 mixed, timed problems are worked and logged each week for the length of the study plan."
                cadence: rolling
              tasks:
                - "Gather problem sources for every knowledge area you will study"
                - "Work a timed set of 15 mixed problems @recurring(weekly:sat)"
                - "Log each result against its knowledge area"
                - "Swap in harder sources once you score above 80 percent twice running"
            - name: Missed problem error log
              description: |-
                ## Purpose
                The same mistake made three times is a pattern, not bad luck: a wrong unit, a misread chart, a forgotten factor of safety. Logging every missed problem with its cause, then reviewing the log weekly, turns errors into the fastest-improving part of your score.

                ## Milestones
                1. An error log with columns for problem, topic, cause and fix.
                2. Every missed or guessed problem entered within a day.
                3. Causes grouped into types such as units, concept, reading and arithmetic.
                4. The top cause each month addressed with a targeted drill.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every missed practice problem is logged with a cause, the log is reviewed weekly, and the top cause is drilled each month."
                cadence: rolling
              tasks:
                - "Set up an error log with problem, topic, cause and fix columns"
                - "Enter each missed or guessed problem the same day"
                - "Review the log and tag the top cause of the week @recurring(weekly:mon)"
                - "Drill the most common cause for a week once a month"
            - name: Monthly timed mock session
              description: |-
                ## Purpose
                Stamina and pacing only build under real time pressure. A monthly half-length or full session, sat in one go with only the handbook and calculator, shows whether your pace and accuracy are moving toward a pass and feeds the gap matrix fresh numbers.

                ## Milestones
                1. A mock date fixed in each month of the plan.
                2. Each mock sat in one sitting under exam rules.
                3. Scores recorded by knowledge area and overall.
                4. A short note after each mock on pacing, stamina and surprises.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A timed mock is sat in each month of the plan, with its overall and by-area scores recorded the same day."
                cadence: rolling
              tasks:
                - "Choose mock sources so you never repeat the same exam too soon"
                - "Sit a timed half-length mock under exam rules @recurring(monthly:12)"
                - "Record the overall and by-area score in your tracker"
                - "Write three lines on pacing and stamina after each mock"
            - name: Spaced review of key equations and methods
              description: |-
                ## Purpose
                Topics studied in month one fade by month four unless they come back on purpose. Short spaced reviews of the equations and methods already covered, ten minutes most days, keep early topics available without rereading whole chapters.

                ## Milestones
                1. A deck of cards or a list of key methods built as each topic is finished.
                2. A short review slot on most days.
                3. Old topics returning on a widening interval.
                4. Cards you always answer correctly moved to a monthly pass.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A review deck covers every finished topic and is reviewed on at least five days a week for the length of the plan."
                cadence: rolling
              tasks:
                - "Make a card for each method or equation as you finish a topic"
                - "Review the cards that are due for ten minutes @recurring(daily)"
                - "Retire cards you answer correctly five times running"
                - "Run one pass over the retired cards @recurring(monthly:25)"
            - name: Practice score tracker with a go target
              description: |-
                ## Purpose
                Scores scattered across notebooks and websites hide whether you are improving. One tracker with every set and mock, by date and knowledge area, shows a trend and lets you decide calmly whether to keep your test date.

                ## Milestones
                1. One tracker holding every practice set and mock score.
                2. Separate columns for the overall score and each knowledge area.
                3. A simple chart of the overall score over time.
                4. A target score written down that means you are ready to sit.

                ## Notes
                Start from the **Metrics log** template. Third-party practice exams vary in difficulty, so compare a source against itself rather than against another provider.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: artifact
                success_criteria: "Every practice set and mock since the diagnostic sits in one tracker with a trend chart and a written go target score."
                cadence: rolling
              tasks:
                - "Create the tracker with date, source, overall and by-area columns"
                - "Copy in every score you already have"
                - "Write the score that means you are ready to sit"
                - "Compare the month's trend with your go target @recurring(monthly:28)"
            - name: Weekly PE study group
              description: |-
                ## Purpose
                Candidates who explain solutions out loud find their own gaps faster, and a group keeps you turning up in the weeks motivation drops. Two to five engineers sitting the same or a close module, meeting weekly for an hour, can split hard problems and share good sources.

                ## Milestones
                1. Two to five study partners found through work, a professional society or an online forum.
                2. A fixed weekly meeting time and a simple agenda.
                3. Each member presenting one solved problem a week.
                4. A shared folder of solutions and sources.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A group of at least three candidates meets weekly, with each member presenting one solved problem per session."
                cadence: rolling
              tasks:
                - "Ask colleagues and your local engineering society about other candidates"
                - "Agree a weekly hour and a three-item agenda"
                - "Present one hard problem you solved at the session @recurring(weekly:thu)"
                - "Keep a shared folder of solutions and problem sources"
            - name: Sunday plan check and catch-up
              description: |-
                ## Purpose
                Plans slip by a session here and there until a whole knowledge area is missing a month before the exam. A fifteen-minute weekly check of hours done against hours planned, with lost sessions moved into the buffer, keeps the calendar honest.

                ## Milestones
                1. Planned and actual study hours compared every week.
                2. Missed sessions moved into a named catch-up slot.
                3. Any topic more than two weeks behind flagged.
                4. The test date questioned openly if the gap passes four weeks.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Planned and actual hours are compared weekly, and any slippage beyond two weeks is either recovered or taken to a test date decision."
                cadence: rolling
              tasks:
                - "Total the hours studied this week against the plan @recurring(weekly:sun)"
                - "Move any missed session into a named catch-up slot"
                - "Flag any knowledge area more than two weeks behind"
                - "Raise the test date question if you fall four weeks behind"
            - name: One problem a day habit
              description: |-
                ## Purpose
                On busy workdays a full session is not realistic, but one problem over lunch or on the commute keeps the streak alive. One problem a day adds well over a hundred extra by test day and keeps your hands on the calculator.

                ## Milestones
                1. A small stock of single problems on your phone or in your bag.
                2. One problem worked on most days.
                3. Each daily problem's result logged in one line.
                4. A streak of thirty days reached.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "One practice problem is worked and logged on at least 25 days in each month of the plan."
                cadence: rolling
              tasks:
                - "Load a set of single practice problems onto your phone or tablet"
                - "Work one problem and log the result @recurring(daily)"
                - "Carry the approved calculator in your work bag"
                - "Copy any missed daily problem into the error log"
            - name: Monthly check-in with a licensed mentor
              description: |-
                ## Purpose
                A licensed engineer in your discipline has sat this exam and knows which topics the job does not prepare you for. A half-hour monthly check-in, with your tracker and error log open, catches poor study habits early and keeps you accountable to someone outside your family.

                ## Milestones
                1. A licensed PE in your discipline agreed to mentor you through the exam.
                2. A monthly half-hour slot in both calendars.
                3. Your scores and top errors shared before each meeting.
                4. One change to the plan agreed and written down at each check-in.

                ## Notes
                Start from the **1:1** template to keep notes from each check-in in one place.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A licensed mentor meets you monthly with your scores in hand, and each meeting ends with one recorded change to the plan."
                cadence: rolling
              tasks:
                - "Ask a licensed engineer in your discipline to mentor you"
                - "Send your tracker and top three errors before each meeting"
                - "Hold the half-hour mentor check-in @recurring(monthly:20)"
                - "Write down the one change agreed at each meeting"
            - name: Long-session stamina build
              description: |-
                ## Purpose
                Most PE exams take most of a day at the test centre, and accuracy drops in the last hours for candidates who have only practised in ninety-minute blocks. Building up from two hours to four to a full exam length on weekends trains focus, eating and break habits before they count.

                ## Milestones
                1. A two-hour unbroken session completed with steady accuracy.
                2. A four-hour session completed with one planned break.
                3. A session the length of your real exam completed at least once.
                4. Notes kept on what you ate, drank and did at the break.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "At least one practice session the length of your real exam is completed, with last-hour accuracy within ten points of the first hour."
                cadence: phased
                effort_hours_estimate: "24"
              tasks:
                - "Check the appointment length for your exam on the NCEES site"
                - "Sit a two-hour unbroken problem session this weekend"
                - "Extend to a four-hour session with one planned break"
                - "Run one long weekend session @recurring(monthly:6)"
            - name: Technique for multiple choice and alternative items
              description: |-
                ## Purpose
                Computer-based PE exams mix standard multiple choice with alternative item types such as select-all, point-and-click and numeric entry, and each needs a different approach. Practising elimination, estimation to rule out options and careful entry of numbers saves marks you would otherwise lose to format rather than engineering.

                ## Milestones
                1. The item types used on your exam read about on the NCEES site.
                2. Elimination and order-of-magnitude checks practised on fifty problems.
                3. Numeric-entry problems practised with attention to units and rounding.
                4. A personal rule written for when to guess, flag and move on.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Fifty problems are worked using elimination or estimation first, and a written flag-and-move-on rule sits in your exam-day plan."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Read the NCEES description of the item types on your exam"
                - "Estimate the answer before calculating on twenty problems"
                - "Work ten numeric-entry problems and check rounding against the key"
                - "Practise choosing between two options left after elimination"
            - name: Design standards navigation drills
              description: |-
                ## Purpose
                Several PE exams, Civil and the structural exams among them, list specific design standards and editions in the exam specification. Engineers who use one code daily often have never opened the others on the list. Learning the layout of each listed standard turns a twenty-minute search into a two-minute lookup.

                ## Milestones
                1. The exact standards and editions in your specification listed.
                2. How each is provided on exam day confirmed on the NCEES site.
                3. The chapter structure of each sketched on one page.
                4. Ten lookup problems practised for every listed standard.

                ## Notes
                Practise on the edition named in the specification, even if your office has moved on to a newer one. Provisions and clause numbers change between editions.
              priority: medium
              deadlineOffsetDays: 75
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Every design standard listed in your exam specification has a one-page layout note and at least ten practised lookup problems."
                cadence: phased
                effort_hours_estimate: "15"
              tasks:
                - "List every design standard and edition in your exam specification"
                - "Check on the NCEES site how standards are provided during your exam"
                - "Sketch a one-page map of each standard's chapters"
                - "Work ten lookup problems in the standard you use least"
            - name: University topics you no longer use
              description: |-
                ## Purpose
                Ten years into structural design, few engineers remember hydrology, and a power engineer may not have touched a control loop since graduating. Picking out the knowledge areas you have not used in practice and rebuilding each from a short refresher and twenty problems stops them becoming the reason you fall short.

                ## Milestones
                1. The knowledge areas you have not used at work listed from the gap matrix.
                2. A short refresher source chosen for each.
                3. Twenty problems worked in each forgotten area.
                4. Each area re-rated in the gap matrix after its block.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Every knowledge area you have not used at work has a refresher source and twenty worked problems, with its gap rating updated."
                cadence: phased
                effort_hours_estimate: "30"
              tasks:
                - "Mark the knowledge areas you have not used since university"
                - "Choose one short refresher chapter or video series for each"
                - "Work twenty problems in the first forgotten area"
                - "Re-rate each area in the gap matrix once its block is done"
            - name: Hand calculations without design software
              description: |-
                ## Purpose
                At work the software runs the iterations; in the exam you do them with a calculator and the handbook. Practising the classic hand methods your module expects, with a clear set-up on scratch paper, rebuilds a skill that daily practice quietly wears away.

                ## Milestones
                1. The hand methods in your module that software normally does for you listed.
                2. Each method worked by hand on at least five problems.
                3. A tidy scratch-paper layout you use every time.
                4. Two hand results checked against software on non-confidential examples.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Each hand method your module expects has been worked by hand on at least five problems, with two results checked against software."
                cadence: phased
                effort_hours_estimate: "12"
              tasks:
                - "List the calculations your design software normally does for you"
                - "Work five problems by hand for the first method on the list"
                - "Settle on a scratch layout with givens, sketch, method and answer"
                - "Check two hand results against your design software"
            - name: US customary units fluency for SI-trained engineers
              description: |-
                ## Purpose
                Many PE problems are set in US customary units such as kips, psi, BTU, gallons per minute and pound-mass, which engineers trained in the Caribbean, the UK or Canada rarely use day to day. Building a conversion card and working problems only in those units until they feel natural removes a hidden source of slow and wrong answers.

                ## Milestones
                1. The US customary units common in your module listed with their SI equivalents.
                2. A conversion card built and checked against the handbook.
                3. Thirty problems worked entirely in US customary units.
                4. No unit errors logged in two consecutive weekly sets.

                ## Notes
                The pound-mass and pound-force distinction, and the gravitational constant that links them, catches out more SI-trained candidates than any other single unit issue.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Thirty problems are worked entirely in US customary units, and two consecutive weekly sets show no unit errors in the error log."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "List the US customary units that appear in your module's practice problems"
                - "Build a conversion card from the handbook's conversion tables"
                - "Work thirty problems without converting to SI"
                - "Check your error log for unit mistakes after each weekly set"
            - name: Reading long scenario problems quickly
              description: |-
                ## Purpose
                PE problems often wrap a short calculation in a paragraph of site detail, and some include data you do not need. A routine of reading the question line first, listing the givens and sketching the system catches the quantity actually asked for before you spend five minutes calculating the wrong one.

                ## Milestones
                1. A four-step reading routine written on one card.
                2. The routine applied to every problem in two weekly sets.
                3. Wrong-quantity errors counted before and after in the error log.
                4. Reading time per problem measured and steady.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Wrong-quantity errors in the error log fall to zero over two consecutive weekly sets after the written reading routine is adopted."
                cadence: phased
                effort_hours_estimate: "5"
              tasks:
                - "Write your four-step reading routine on an index card"
                - "Read the final question line first on every problem this week"
                - "Sketch the system before writing any equation"
                - "Count wrong-quantity errors in the log before and after"
            - name: Charts, tables and diagrams practice
              description: |-
                ## Purpose
                Moody diagrams, psychrometric charts, steam tables, soil classification charts and load tables all appear in the references, and misreading a log scale or interpolating wrongly costs a whole problem. Working each chart your module uses until readings are accurate and fast is one of the quickest gains available.

                ## Milestones
                1. Every chart and table in the handbook relevant to your module listed.
                2. Each one read on five problems with answers checked.
                3. Interpolation practised on tables until errors stop.
                4. Charts read on screen at the zoom you will use in the exam.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Every chart and table your module uses has been read correctly on at least five problems, with no interpolation errors in the last two weekly sets."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "List each chart and table in the handbook your module relies on"
                - "Work five problems with the chart you trust least"
                - "Practise linear interpolation on ten table lookups"
                - "Read the charts on screen at the zoom you will use in the exam"
            - name: Re-solving missed problems cold
              description: |-
                ## Purpose
                Reading a worked solution and nodding along feels like learning, but it rarely survives a week. Re-solving each missed problem from a blank page a few days later, without looking, is what proves you can do it under exam conditions.

                ## Milestones
                1. Every missed problem queued for a cold re-solve three days later.
                2. Re-solves done without the solution or notes open.
                3. Problems failed twice taken to the mentor or study group.
                4. Cold re-solve success above 80 percent for a whole month.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Missed problems are re-solved cold within a week, and the re-solve success rate is recorded and above 80 percent for one month."
                cadence: rolling
              tasks:
                - "Add a re-solve date three days out to every missed problem"
                - "Re-solve the queued problems from a blank page @recurring(weekly:fri)"
                - "Bring problems failed twice to your study group"
                - "Work out your re-solve success rate at month end"
            - name: Review course or self-study decision
              description: |-
                ## Purpose
                Review courses range from live online classes with homework to on-demand videos to a stack of books and practice exams, and the price differences are large. Comparing them against your diagnostic, schedule and budget, rather than what was popular in your office, avoids paying for structure you do not need or skipping it when you do.

                ## Milestones
                1. Three options compared: one live course, one on-demand course and a self-study set.
                2. Each scored on cost, schedule fit, practice problem volume and support.
                3. Refund and extension terms read for each paid option.
                4. A choice made and recorded with the reason.

                ## Notes
                Start from the **Purchase decision** template. Ignore advertised pass rates you cannot verify; ask candidates who used the course in the last year instead.
              priority: medium
              deadlineOffsetDays: 30
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "One study route is chosen from three compared options, with the scoring and the reason recorded."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Shortlist one live course, one on-demand course and a self-study set"
                - "Score each on cost, schedule fit and practice volume"
                - "Read the refund and extension terms for the paid options"
                - "Ask two recent candidates which route they would choose again"
            - name: Practice exam source selection
              description: |-
                ## Purpose
                Practice material differs widely: the official NCEES practice exam is closest in style, while third-party sets are often harder or drift from the current specification. Choosing a small set of sources, and deciding which to save for the final full mock, stops you using up the best material in month one.

                ## Milestones
                1. The official NCEES practice exam for your module bought.
                2. Two third-party problem sources chosen that match the current specification.
                3. Each source's publication date checked against the specification date.
                4. The official exam reserved for the final simulated exam.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A list of no more than three practice sources is recorded, each checked against the current specification, with the official exam held back for the final mock."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Buy the official NCEES practice exam for your module"
                - "Check two third-party sources were updated for the current specification"
                - "Hold back the official practice exam for the final full mock"
                - "Note which source each monthly mock will use"
            - name: Mid-plan reset when scores stall
              description: |-
                ## Purpose
                Around the halfway point many candidates see scores flat for three or four weeks. Rather than adding hours, a deliberate reset reads the tracker and error log, changes the method or source for the stuck areas and drops low-yield work to free time.

                ## Milestones
                1. The last month's scores reviewed against the go target.
                2. The two areas with no improvement identified.
                3. A different method or source chosen for each.
                4. Hours moved from strong areas to the stuck ones.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A written reset names two stalled areas, a new method or source for each and the hours moved, dated at the plan's halfway point."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Compare the last four weeks of scores with your go target"
                - "Name the two knowledge areas with no improvement"
                - "Choose a new source or method for each stalled area"
                - "Ask the agent to rebuild the remaining calendar around the change"
            - name: Low-yield topic triage
              description: |-
                ## Purpose
                No candidate masters every line of the specification, and trying to usually means the large areas get too little time. Deciding on purpose which small, hard topics get only basic coverage, and writing that down, protects the hours for the areas that carry the exam.

                ## Milestones
                1. Each knowledge area ranked by exam share against your current score.
                2. Up to three small, hard topics marked for basic coverage only.
                3. Hours freed by the triage reassigned to large areas.
                4. The triage list reviewed once after the next mock.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A triage list of no more than three low-share topics is recorded, with the hours it frees reassigned to the largest knowledge areas."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Rank knowledge areas by exam share against your current score"
                - "Mark up to three small, hard topics for basic coverage only"
                - "Reassign the freed hours to your two largest knowledge areas"
                - "Revisit the triage list after your next mock"
            - name: Go, postpone or withdraw decision rules
              description: |-
                ## Purpose
                Two weeks before the exam is the wrong moment to decide in a panic whether to sit. Writing your go rules now, based on mock scores and hours completed, and knowing the reschedule deadline and any fee, makes the call a check against numbers rather than a feeling.

                ## Milestones
                1. The score on the last two mocks that means go written down.
                2. The reschedule and cancellation deadlines and costs confirmed.
                3. A fallback test window identified.
                4. The decision made and recorded before the reschedule deadline.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "Written go rules exist, and a go or postpone decision is recorded before the reschedule deadline passes."
                cadence: one-shot
                effort_hours_estimate: "1"
              tasks:
                - "Write the mock score that means you sit as booked"
                - "Confirm the reschedule deadline and any fee on the NCEES site"
                - "Pick a fallback test window in case you postpone"
                - "Record your go or postpone decision before the deadline"
            - name: Booking the PE test appointment
              description: |-
                ## Purpose
                Popular test centres fill weeks ahead, especially on Saturdays and near holidays, and some disciplines may be offered only in set windows. Registering and booking once your board step is clear fixes the date the whole plan counts back from.

                ## Milestones
                1. Board approval in hand first, if your board requires it.
                2. Registration completed in your MyNCEES account for your module.
                3. An appointment booked at a centre you can reach without stress.
                4. The reschedule and cancellation deadlines written in your calendar.

                ## Notes
                Check how often your discipline is offered before choosing a window. If it runs only at set times, a missed window can cost months.
              priority: high
              deadlineOffsetDays: 60
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A confirmed PE appointment is booked, with the confirmation saved and the reschedule deadline in your calendar."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Check whether your board must approve you before you register"
                - "Register for your module in MyNCEES and pay the exam fee"
                - "Book a test centre appointment and save the confirmation"
                - "Put the last reschedule date in your calendar with a reminder"
            - name: Final full simulated exam
              description: |-
                ## Purpose
                A full-length mock at the real appointment length, started at the same time of day as your booking, is the final dress rehearsal. Sitting the official NCEES practice exam this way three to four weeks out leaves time to fix what it shows without cramming.

                ## Milestones
                1. The mock date set three to four weeks before the exam.
                2. The official practice exam sat in one day at your booked start time.
                3. Scores and pacing recorded by knowledge area and by hour.
                4. A short list of final fixes written into the last weeks.
              priority: high
              deadlineOffsetDays: 120
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "The official practice exam is sat full length at your booked start time, with scores, pacing and a final fix list recorded."
                cadence: one-shot
                effort_hours_estimate: "10"
              tasks:
                - "Fix the full mock date three to four weeks before the exam"
                - "Sit the official practice exam at your real start time"
                - "Score it by knowledge area and note pacing for each hour"
                - "List the three fixes to make in the final weeks"
            - name: Final four weeks taper
              description: |-
                ## Purpose
                In the last month, consolidation beats new topics. A taper plan moves from weak-area fixes to mixed timed sets and handbook drills, then to light review and proper sleep in the final days, so you arrive sharp rather than worn out.

                ## Milestones
                1. No new topics started in the last four weeks.
                2. The final mock's fixes completed in weeks one and two.
                3. Mixed timed sets and handbook drills in week three.
                4. Light review only and normal sleep in the final week.
              priority: medium
              deadlineOffsetDays: 150
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "The last four weeks follow a written taper with no new topics started, and the final week holds light review only."
                cadence: phased
                effort_hours_estimate: "30"
              tasks:
                - "Write the taper plan week by week from the final mock results"
                - "Spend weeks one and two on the final mock's fix list"
                - "Switch to mixed timed sets and handbook drills in week three"
                - "Keep the final week to light review and regular sleep"
            - name: Exam week logistics check
              description: |-
                ## Purpose
                Small things undo months of study: an ID with a different name, a late arrival, a watch left in a pocket. Checking the test centre rules, the route and timing and what you may bring, a week ahead, means the only thing left on the day is the exam itself.

                ## Milestones
                1. The NCEES and test centre rules on ID, permitted items and arrival read.
                2. Your ID checked against the name in MyNCEES.
                3. The route to the centre travelled once at the same time of day.
                4. Approved calculator, spare and ID packed the night before.

                ## Notes
                If the nearest centre is in another city or on another island, book somewhere to stay nearby the night before rather than travelling on the morning.
              priority: medium
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "ID, calculators and route are checked a week before the exam, and the bag is packed the night before."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Read the NCEES rules on ID, permitted items and arrival time"
                - "Check your ID name matches your MyNCEES account exactly"
                - "Travel the route to the test centre once at exam time"
                - "Pack your ID, approved calculator and spare the night before"
            - name: Exam day pacing and break plan
              description: |-
                ## Purpose
                On the day, the risk is getting stuck: one problem eats fifteen minutes and the last section is rushed. A written plan for time per problem, when to flag and move on, how to use the break and what to eat keeps decisions away from a tired brain.

                ## Milestones
                1. A target time per problem and hourly checkpoints written down.
                2. The flag and return rule rehearsed in at least two mocks.
                3. Break food, water and any medication planned.
                4. A one-line reset routine for when focus slips.
              priority: high
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A one-page exam-day plan with time checkpoints, a flag rule and a break plan has been rehearsed in two mocks."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Work out a time per problem from the session length and question count"
                - "Write hourly checkpoints for how many problems you should have done"
                - "Rehearse the flag and return rule in your next two mocks"
                - "Plan the food and drink for your scheduled break"
            - name: Results day and the next step
              description: |-
                ## Purpose
                Results arrive through your MyNCEES account as a pass or as a diagnostic report by knowledge area. Deciding in advance what you will do with each outcome, the licence application after a pass or a retake review after a fail, stops the result sitting unread in an inbox for months.

                ## Milestones
                1. A note of what you will do after a pass and after a fail, written before exam day.
                2. The result read and saved as a PDF.
                3. After a pass, the licence application started within a month.
                4. After a fail, the diagnostic report saved for the retake review.
              priority: medium
              frontmatter:
                mode: event
                output_kind: decision
                success_criteria: "The result is saved, and the agreed next step, licence application or retake review, has started within a month."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Write what you will do after a pass and after a fail"
                - "Save the result notice as a PDF in your study folder"
                - "Start the licence application within a month of a pass"
                - "Book a retake review session within two weeks of a fail"
            - name: PE study with young children at home
              description: |-
                ## Purpose
                With small children, long evening sessions are rare and the plan has to work in 45-minute pieces around bedtimes, sick days and school runs. Building it around early mornings, nap windows and one weekend block traded with a partner keeps progress steady without missing family life.

                ## Milestones
                1. Study slots placed around bedtimes, naps and childcare.
                2. One weekend block secured by swapping childcare with a partner, relative or friend.
                3. A plan B for sick days, such as the daily phone problem.
                4. The test date set with a spare month for family disruption.

                ## Notes
                Expect two lost weeks to illness over a five-month plan. Building them in from the start is easier than explaining a postponement later.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A study plan built in short slots around childcare runs for eight weeks with at least one protected weekend block each week."
                cadence: phased
              tasks:
                - "Map the week's bedtimes, naps and school runs on one page"
                - "Place short study slots in the gaps you found"
                - "Arrange a weekly childcare swap for one longer weekend block"
                - "Add a spare month to your test date for illness and holidays"
            - name: Sitting the PE when trained outside the US
              description: |-
                ## Purpose
                Engineers in Trinidad and Tobago, Jamaica, the UK and elsewhere sit the PE to work on US projects or to hold a US licence alongside a local registration. The exam is the same for everyone, but US codes, units and terms, finding a test centre and the board's rules for foreign degrees all need extra lead time.

                ## Milestones
                1. The board's requirements for candidates educated outside the US read, including any credential evaluation.
                2. Test centre locations available to you for your exam confirmed on the NCEES site.
                3. US codes and terms that differ from your local practice listed.
                4. Extra study weeks added for US units and code conventions.
              priority: medium
              deadlineOffsetDays: 45
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A note records the board's rules for foreign-educated candidates, your nearest available test centre and the US conventions you have scheduled study time for."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Read your board's rules for candidates educated outside the US"
                - "Check where NCEES offers your exam outside the US"
                - "List US terms and code conventions that differ from your local practice"
                - "Add study weeks for US units and codes to your calendar"
            - name: Retake plan from the diagnostic report
              description: |-
                ## Purpose
                A failed attempt comes with a diagnostic report showing performance by knowledge area, and it is the most useful study document you will get for this exam. Reading it against your tracker and rebuilding the plan around the weakest areas, rather than repeating the same course, gives the second attempt a real chance.

                ## Milestones
                1. The diagnostic report compared with your practice tracker area by area.
                2. The NCEES rules on retake waiting periods and attempt limits checked.
                3. Two or three areas chosen for a changed method or source.
                4. A new test date booked with a full plan counted back from it.

                ## Notes
                Take a week off first. Candidates who pass at the second attempt usually changed how they studied, not just how long.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A retake plan built from the diagnostic report names the weakest areas, the changed methods and a newly booked test date."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Lay the diagnostic report beside your practice tracker"
                - "Check the NCEES rules on retake timing and attempt limits"
                - "Choose a changed method or source for each weak area"
                - "Book the retake and rebuild the calendar from that date"
            - name: Back to exam study after years in practice
              description: |-
                ## Purpose
                Senior engineers who skipped the PE early, often because their country or employer did not require it, return after ten or twenty years with deep practical judgement and rusty exam habits. Rebuilding timed problem-solving and calculator speed first, before content, plays to the experience you already have.

                ## Milestones
                1. Two weeks of easy timed problems done to rebuild exam rhythm.
                2. Calculator and handbook speed tested and improved.
                3. Code provisions that changed since you learned them listed.
                4. The diagnostic sat only after the rhythm weeks.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Two weeks of rhythm practice are done before the diagnostic, and a list of code changes since your training sits in the study plan."
                cadence: phased
                effort_hours_estimate: "15"
              tasks:
                - "Work five easy timed problems a day for two weeks"
                - "Time ten calculator sequences and repeat until faster"
                - "List code provisions that changed since you last studied them"
                - "Sit the diagnostic once the rhythm weeks are done"
            - name: Testing accommodations request
              description: |-
                ## Purpose
                Candidates with a disability or a medical condition, including pregnancy-related needs, can ask NCEES for accommodations such as extra time or a separate room. Requests take time to review and need documentation from a qualified professional, so starting well before booking avoids a forced delay.

                ## Milestones
                1. The current NCEES accommodations process and timelines read.
                2. Documentation requested from the right professional.
                3. The request submitted with its documents.
                4. The decision received before the appointment is booked.
              priority: medium
              deadlineOffsetDays: 60
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "An accommodations request with supporting documentation is submitted, and its decision is in hand before the appointment is booked."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Read the current NCEES accommodations process and timelines"
                - "Ask your clinician or specialist for the documentation NCEES requires"
                - "Submit the request with its documents through the NCEES process"
                - "Book your appointment only after the decision arrives"
            - name: Study plan for rotational and shift work
              description: |-
                ## Purpose
                Offshore, plant and site engineers on rotations such as two weeks on and two off, or on twelve-hour shifts, cannot keep a Tuesday and Thursday study habit. A plan built on the rotation, with light daily problems on hitch and heavy blocks on home leave, matches the hours you really have.

                ## Milestones
                1. Your rotation for the whole plan mapped on one calendar.
                2. Light on-hitch study defined as the daily problem and card review.
                3. Heavy home-leave blocks scheduled, with mocks placed inside them.
                4. The exam booked on home leave, not straight after a night shift.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A rotation-based plan places every mock and the exam itself on home leave, with light daily work on hitch."
                cadence: phased
              tasks:
                - "Map your rotation dates through the planned test window"
                - "Pack a phone or tablet problem set for days on hitch"
                - "Schedule mocks and long sessions inside home-leave weeks"
                - "Update the plan when the next rotation roster is issued @recurring(monthly:17)"
            - name: Settling routine for exam nerves
              description: |-
                ## Purpose
                Plenty of capable engineers lose marks to nerves: a blank first ten minutes, rushing after a hard problem, poor sleep the night before. Practising a short settling routine in every mock, and rehearsing the first fifteen minutes of the exam, makes the real start feel familiar.

                ## Milestones
                1. A two-minute settling routine chosen and written down.
                2. The routine used at the start of every mock.
                3. The opening of each mock rehearsed with problems you find easier.
                4. A sleep and caffeine plan written for the final three nights.

                ## Notes
                If anxiety is affecting your sleep or health, speak to your doctor. The accommodations process may also apply.
              priority: low
              frontmatter:
                mode: learning
                output_kind: habit
                success_criteria: "A written settling routine has been used in at least three mocks, and a sleep plan for the final three nights is in the exam-day plan."
                cadence: phased
                effort_hours_estimate: "3"
              tasks:
                - "Choose a two-minute breathing or settling routine"
                - "Use the routine at the start of your next three mocks"
                - "Open each mock with two problems you find easier"
                - "Write a sleep and caffeine plan for the last three nights"
            - name: Two-day structural exam preparation
              description: |-
                ## Purpose
                Structural engineers aiming at significant buildings and bridges may need the NCEES Structural Engineering exam, split into vertical and lateral components on separate days. It is a bigger undertaking than a single-day PE, with more codes and longer design problems, so many candidates plan it as a year-long programme taken component by component.

                ## Milestones
                1. The current SE exam specification and permitted codes read for both components.
                2. The jurisdictions you work in checked for whether they require the SE exam.
                3. A decision on which component to sit first.
                4. A separate calendar of several months for each component.
                5. Two full mocks per component sat before booking it.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A component-by-component SE plan exists, and two full mocks per component are sat before each booking."
                cadence: phased
                effort_hours_estimate: "250"
              tasks:
                - "Read the current SE exam specification for both components"
                - "Check whether your target jurisdictions require the SE exam"
                - "Decide which component to sit first and why"
                - "Build a separate study calendar for each component"
            - name: Running a PE study group at work
              description: |-
                ## Purpose
                Once you have passed, or while you study, you can turn your notes, sources and routine into a small programme for junior engineers in your firm. A structured group with a shared calendar and a monthly mock makes licensure part of office culture and adds to your own leadership record.

                ## Milestones
                1. Interest gauged among engineers within a year or two of eligibility.
                2. Management agreement for a room, time and a small materials budget.
                3. A twelve-week outline with a weekly topic and problems.
                4. A monthly mock run for the group with anonymous scores.
              priority: low
              frontmatter:
                mode: service
                output_kind: deliverable
                success_criteria: "A twelve-week in-house PE study programme runs with at least four engineers and a monthly mock."
                cadence: phased
                effort_hours_estimate: "30"
              tasks:
                - "Ask engineers in your office who plans to sit the PE in the next two years"
                - "Propose a room, time and materials budget to your manager"
                - "Draft a twelve-week outline with one topic per week"
                - "Run the group's mock and share anonymous scores @recurring(monthly:9)"
            - name: Second PE discipline later in your career
              description: |-
                ## Purpose
                Engineers whose work moves, from mechanical design into HVAC or from civil into geotechnical, sometimes sit a second PE to match their practice or a jurisdiction's rules on titles. With a licence already held, the plan can be shorter and narrower, built around the new module's specification and the gap between the two.

                ## Milestones
                1. The reason for a second exam checked against your board's rules, so it is worth the effort.
                2. The new module's specification compared line by line with your first.
                3. A focused plan covering the new areas only.
                4. A booking made once mock scores reach your go target.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A second-discipline decision is recorded with the board rule it serves, and a study plan covers only the new module's areas."
                cadence: phased
                effort_hours_estimate: "80"
              tasks:
                - "Ask your board whether a second PE changes what you may practise or be called"
                - "Compare the new specification line by line with your first"
                - "Build a study plan for the areas that do not overlap"
                - "Book the exam once two mocks reach your go target"
            - name: Volunteering on NCEES exam development
              description: |-
                ## Purpose
                Licensed engineers write and review the problems NCEES uses and sit on panels that help set the passing standard. Once you hold a licence, volunteering keeps your knowledge current, adds to your professional development record and puts your experience into the next candidates' exam.

                ## Milestones
                1. Current NCEES volunteer openings for your discipline checked.
                2. Your employer's agreement for the time recorded.
                3. An application or expression of interest submitted.
                4. The confidentiality terms read and any limits on coaching candidates noted.

                ## Notes
                Exam developers sign strict confidentiality agreements, which can limit coaching or study group work on that exam while you serve. Read the terms before you join.
              priority: low
              frontmatter:
                mode: service
                output_kind: deliverable
                success_criteria: "An expression of interest in NCEES exam development is submitted with employer agreement, and the confidentiality terms are noted."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Check the NCEES website for exam development volunteer openings"
                - "Ask your manager to agree time for the workshops"
                - "Submit your interest with your discipline and years of experience"
                - "Step back from coaching that exam if the agreement requires it"
---

# PE Exam (Principles and Practice)

This area is for engineers preparing for the NCEES Principles and Practice of Engineering exam in their discipline, from the first eligibility check to results day. It starts with foundations (discipline and module, the board's order of steps, a diagnostic and a dated study calendar), then the weekly study machinery and the exam skills that working practice does not teach, the course and booking decisions, the mock exams and exam day, plans for parents, rotational workers, retakers and engineers trained outside the US, and specialist work such as the two-day structural exam.

The rhythm is a weekly mixed problem set, an error log review and study group, a short daily problem and card review, and a monthly timed mock, score check and mentor meeting. The Course, Skills matrix, Metrics log, Purchase decision and 1:1 templates pair with it. Installing adds all 50 projects as active, so archive the ones that are not for you yet.
