---
id: caribbean-exams.cape-computer-science
name: CAPE Computer Science
description: "A full CAPE Computer Science plan: the paper format check, a C compiler at home, weekly coding and trace drills, every module of Units 1 and 2 in syllabus order, both internal assessment projects, past papers, the mock and exam day."
category: personal
version: 1.0.0
tags: [caribbean-exams, cape-computer-science, cxc, cape, programming, student, parent, educator]
author: Aurum Technology
starter_structure:
  templates:
    - meeting-notes
    - metrics-log
    - habit-tracker
    - product-spec
    - remediation-plan
  pillars:
    - name: Caribbean School Exams
      emoji: "📝"
      description: "Caribbean school exams taken one subject at a time: SEA and the other primary exit exams, every major CSEC subject, the core CAPE units, school-based assessments, past-paper practice, revision plans and exam-day logistics, so a student can search for a subject and start."
      pillarFrontmatter:
        review_cadence: monthly
      areas:
        - name: CAPE Computer Science
          description: "Studying CAPE Computer Science Units 1 and 2: computer architecture, problem solving and programming, data structures, software engineering and the internal assessment project."
          projects:
            - name: Computer Science syllabus and paper format check
              description: |-
                ## Purpose
                CXC revises syllabuses, and the CAPE Computer Science an older student or a second-hand textbook describes may not be the one you will sit. One evening with the current syllabus tells you which modules sit in Unit 1 and Unit 2, which programming language is prescribed, what each paper tests and how the internal assessment works, so every later hour of practice rehearses the real exam.

                ## Milestones
                1. The current CAPE Computer Science syllabus downloaded from the CXC website and saved in your study folder.
                2. The three modules of each unit listed with their main topics on one page.
                3. Paper 01, Paper 02, Paper 031 (the internal assessment) and Paper 032 (the alternative for private candidates) each summarised in a line.
                4. The prescribed programming language and any listed compiler or standard noted.
                5. Your sitting confirmed from the published CXC timetable and written on the summary.

                ## Notes
                Take paper durations, numbers of questions and mark weightings only from the current syllabus or your school, never from an old revision guide. Most students sit Unit 1 in lower sixth and Unit 2 in upper sixth, but each unit is a separate exam with its own result.
              priority: high
              deadlineOffsetDays: 7
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A one-page summary of both units, the four papers, the prescribed language and your exam date, taken from the CXC syllabus and timetable, is saved and checked by your teacher."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Check the current syllabus and timetable on the CXC website and note the paper format"
                - "List the modules of Unit 1 and Unit 2 with their main topics"
                - "Note which programming language the syllabus prescribes"
                - "Write your unit's exam date from the published timetable"
                - "Ask your teacher to confirm the summary matches what the school expects"
            - name: C compiler and code editor set up at home
              description: |-
                ## Purpose
                Programming is learned by typing, compiling and fixing code, and a student who can only code in the school lab gets a few hours a week when they need many more. A free C compiler and a simple editor on the home computer, tested with a first program, turn every evening into lab time and remove the excuse before it starts.

                ## Milestones
                1. A free C compiler installed and confirmed working from the command line or an editor.
                2. A code editor or small IDE chosen that shows line numbers and compiler errors clearly.
                3. A first program that reads two numbers and prints their sum compiled and run.
                4. A folder structure for Unit 1, Unit 2 and the internal assessment created and backed up.
                5. A fallback plan written for days the home computer is unavailable, such as an online C compiler or the school lab.

                ## Notes
                Use the same compiler family your school uses where possible, so code that runs at home also runs where it will be marked. Ask your teacher which one that is before installing.
              priority: high
              deadlineOffsetDays: 14
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A C program written at home compiles and runs without help, and the code folders are backed up in a second place."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Ask your teacher which C compiler and editor the school lab uses"
                - "Install the compiler and editor on the home computer"
                - "Compile and run a program that adds two numbers you type in"
                - "Create folders for Unit 1, Unit 2 and the internal assessment"
                - "Back up the code folders to a drive or cloud account @recurring(monthly:20)"
            - name: Home computer and quiet desk for coding practice
              description: |-
                ## Purpose
                Parents often see a laptop on the bed and assume homework is happening, but debugging C needs a table, a steady screen and a spell without the television. Setting up a coding corner, agreeing when the computer is the student's, and sorting a reliable internet plan for downloads and online compilers is the most useful thing a parent can arrange without knowing any code.

                ## Milestones
                1. A table, chair and light set aside for coding, away from the television.
                2. The family computer schedule agreed so the student has protected hours on school nights.
                3. Internet access confirmed as good enough to download compilers and past papers.
                4. A plan for power cuts or a broken laptop, such as a school lab slot or a neighbour's or library computer.

                ## Notes
                A secondhand laptop is enough for CAPE C programming; it does not need a gaming machine. Spend any spare money on a reliable charger and a backup drive first.
              priority: medium
              frontmatter:
                mode: service
                output_kind: deliverable
                success_criteria: "A coding desk is set up and a weekly computer schedule giving the student protected hours is agreed and written on the fridge or family chat."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Ask your child which evenings they need the computer for coding"
                - "Clear a table and light near a socket for the coding corner"
                - "Write the agreed computer schedule where the family can see it"
                - "Check the internet plan can handle downloads of compilers and past papers"
            - name: Diagnostic quiz across the Unit 1 modules
              description: |-
                ## Purpose
                Some students arrive in sixth form having written programs in CSEC Information Technology, while others have never seen binary or a loop. A short, honest diagnostic across architecture, problem solving and programming shows which modules need the most hours before the timetable is drawn, rather than discovering it at the mock.

                ## Milestones
                1. A diagnostic of around twenty questions assembled from past Paper 01 and Paper 02 items across all three Unit 1 modules.
                2. The diagnostic attempted in one sitting without notes.
                3. Results marked against the mark scheme and scored by module.
                4. The three weakest topics named and written at the top of your timetable.

                ## Notes
                Start from the **Remediation plan** template if the diagnostic shows a large gap in one module. A low score here is information, not a verdict.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A marked diagnostic with a score for each Unit 1 module and the three weakest topics named is saved in your study folder."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Pick about twenty past questions covering all three Unit 1 modules"
                - "Sit the diagnostic in one session without notes"
                - "Mark it with the mark scheme and score each module separately"
                - "Write your three weakest topics at the top of the timetable"
            - name: Computer Science timetable to the exam sitting
              description: |-
                ## Purpose
                Two units, six modules, two internal assessment projects and a programming language are too much to leave to whatever the class covers next. A week-by-week timetable counting back from the exam date gives each module its share of evenings, protects time for the IA before its deadline and leaves the last month for timed papers.

                ## Milestones
                1. The exam date and the IA submission date written at the end of a weekly calendar.
                2. Each module given a block of weeks, with the weakest topics from the diagnostic weighted more.
                3. Fixed weekly slots for C practice, a trace drill and a timed question marked on the calendar.
                4. The final four weeks kept clear of new content for past papers.
                5. The timetable shared with a parent and the teacher.
              priority: high
              deadlineOffsetDays: 14
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A weekly timetable from today to the exam, covering every module, the IA deadline and the last four weeks of papers, is printed and shared."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Count the weeks between today and your Computer Science exam"
                - "Give each module a block of weeks, longest for the weakest"
                - "Mark the IA milestones your teacher has set on the same calendar"
                - "Compare the timetable with what you actually covered @recurring(monthly:3)"
            - name: Past papers, mark schemes and subject reports archive
              description: |-
                ## Purpose
                Past papers are the closest thing to the real exam, and the subject reports CXC publishes after each sitting explain exactly where candidates lost marks on code, traces and theory. Collecting them in one folder, sorted by unit and paper, means every drill and timed session can start in seconds.

                ## Milestones
                1. Past Paper 01 and Paper 02 for as many recent sittings as you can find, sorted by unit.
                2. Matching mark schemes or worked solutions saved beside each paper.
                3. The CXC subject reports for recent sittings downloaded and filed by year.
                4. An index noting which questions cover which module, so drills can be pulled by topic.

                ## Notes
                Buy or download past papers from the CXC online store or your school rather than unverified websites, which often carry wrong answers.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A folder holds at least five sittings of Paper 01 and Paper 02 for your unit with mark schemes, subject reports and a topic index."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Ask your teacher which past papers the school already holds"
                - "Buy or download the recent past papers from the CXC store"
                - "File the papers, mark schemes and subject reports by unit and year"
                - "Tag each Paper 02 question with the module it covers"
                - "Add the newest sitting's paper and subject report when released @recurring(yearly)"
            - name: Computer science key terms glossary
              description: |-
                ## Purpose
                Examiners report every year that candidates lose theory marks by describing a term loosely, confusing a compiler with an interpreter or RAM with cache. A glossary of precise definitions, built a few terms at a time as each topic is taught, gives you the exact wording to learn and a quick quiz deck for the bus.

                ## Milestones
                1. A glossary document with a section for each module of both units.
                2. Every bold term from your notes and textbook defined in one or two exact sentences.
                3. An example or a comparison added for terms that are often confused.
                4. The glossary used as a self-test at least once a month, with weak terms marked.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A glossary with exact definitions for the key terms of every module studied so far, self-tested monthly with weak terms marked."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "Create a glossary page with a heading for each module"
                - "Define the terms from your most recent class in exact sentences"
                - "Add a comparison line for pairs like compiler and interpreter"
                - "Add five new terms from the week's lessons @recurring(weekly:fri)"
            - name: Agreeing targets and IA dates with your teacher
              description: |-
                ## Purpose
                Internal assessment marks count toward your grade, and the school sets its own deadlines earlier than the CXC submission date. A short meeting with your teacher early in the year fixes the IA milestones, the target grade, and how they prefer to receive code, so nothing about the project arrives as a surprise in the last month.

                ## Milestones
                1. A meeting held with your Computer Science teacher about targets and the IA.
                2. Internal dates for the IA proposal, draft code and final submission written down.
                3. A target grade agreed with the reasons for it.
                4. The format the teacher wants code and documentation handed in confirmed.

                ## Notes
                Start from the **Meeting notes** template so the agreed dates are written down in one place.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "Written notes record your target grade and every internal IA date, agreed with your teacher."
                cadence: one-shot
                effort_hours_estimate: "1"
              tasks:
                - "Ask your teacher for a fifteen-minute meeting about targets and the IA"
                - "Write down every internal IA deadline your teacher gives"
                - "Agree a target grade and note why it is realistic"
                - "Copy the IA dates into the timetable"
            - name: Computer Science practice score log
              description: |-
                ## Purpose
                Without a record, a student who scored badly on one trace question remembers only that they are bad at the subject. A simple log of every practice score by module and question type shows whether timed marks are rising and which topics keep costing marks, which is what decides where the next week's hours go.

                ## Milestones
                1. A log with columns for date, unit, module, question type, score and the main mistake.
                2. Every timed question and multiple choice set from the last month entered.
                3. A monthly average by module calculated.
                4. The weakest module each month fed back into the timetable.

                ## Notes
                Start from the **Metrics log** template.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A score log with at least eight weeks of entries and a monthly average for each module studied."
                cadence: rolling
              tasks:
                - "Create the score log with columns for module, question type and mistake"
                - "Enter your scores from any practice already done this term"
                - "Record the week's practice scores in the log @recurring(weekly:sat)"
                - "Work out each module's average and pick next month's focus @recurring(monthly:26)"
            - name: Weekday C programming exercises
              description: |-
                ## Purpose
                Programming skill fades quickly without use, and students who code only when an assignment is due find that the syntax has gone each time. Three short sessions a week, each solving one small problem from start to compile, build the fluency that Paper 02 code questions and the IA both rely on.

                ## Milestones
                1. A list of at least thirty small C exercises collected from your textbook, teacher and past papers.
                2. Three sessions a week completed for four weeks in a row.
                3. Every finished exercise saved with a comment explaining what it does.
                4. Exercises that took more than one session marked for a second attempt.

                ## Notes
                Start from the **Habit tracker** template. Write the solution on paper first for one exercise a week, because Paper 02 code is handwritten.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Three C exercises a week are solved and saved for at least eight consecutive weeks, tracked in a habit tracker."
                cadence: rolling
              tasks:
                - "Collect thirty small C exercises into one list"
                - "Solve and save one exercise from the list @recurring(weekly:mon,wed,fri)"
                - "Write one solution a week by hand before typing it"
                - "Retry any exercise marked as hard after a week"
            - name: Weekly trace table and dry-run drill
              description: |-
                ## Purpose
                Tracing an algorithm or a C fragment by hand, row by row, is examined in both units and is the skill students most often skip because the computer can run the code for them. One timed trace a week, checked against the real output, builds the patience and accuracy that exam traces demand.

                ## Milestones
                1. A bank of at least fifteen past paper trace questions and short code fragments.
                2. One trace completed by hand every week with a full table of variable values.
                3. Each trace checked by running the code or comparing with the mark scheme.
                4. Errors sorted into types, such as an off-by-one loop or a missed update.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "At least twelve weekly traces completed by hand and checked, with an error type noted for each wrong one."
                cadence: rolling
              tasks:
                - "Pull fifteen trace questions from the past paper index"
                - "Trace one algorithm by hand with a full variable table @recurring(weekly:tue)"
                - "Run the code to check your final values"
                - "Note the type of each tracing mistake in the score log"
            - name: Weekly Paper 01 multiple choice set
              description: |-
                ## Purpose
                Multiple choice questions in computer science reward quick, exact recall of conversions, gate outputs and definitions, and they punish guessing between two close options. A short timed set each week, marked straight away, keeps every module of the unit fresh rather than only the one being taught.

                ## Milestones
                1. A pool of past Paper 01 questions sorted by module.
                2. A mixed set completed under time each week for at least ten weeks.
                3. Every wrong answer explained in a sentence in your notes.
                4. Your Paper 01 practice average rising across the term in the score log.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Ten or more weekly timed multiple choice sets are marked and logged, with each wrong answer explained."
                cadence: rolling
              tasks:
                - "Sort past Paper 01 questions into a pool by module"
                - "Do a timed mixed set of multiple choice questions @recurring(weekly:wed)"
                - "Write a one-line reason for each question you got wrong"
                - "Move repeated wrong topics onto next week's timetable"
            - name: Saturday timed Paper 02 question
              description: |-
                ## Purpose
                Paper 02 asks you to explain, design and write code by hand under time, which is very different from typing at a keyboard with a compiler catching errors. One full structured question every Saturday, timed and marked against the mark scheme, trains the pace and the handwritten precision the paper needs.

                ## Milestones
                1. A sequence of Paper 02 questions chosen to rotate through every module.
                2. One question done every Saturday in the time it would get in the exam.
                3. Each answer marked against the mark scheme and the score logged.
                4. A full section attempted under exam conditions once a month.

                ## Notes
                Handwrite all code in this drill. Examiners accept small syntax slips more readily than missing logic, so practise getting the structure right first.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "At least twelve Saturday Paper 02 questions are timed, marked against the mark scheme and logged."
                cadence: rolling
              tasks:
                - "List Paper 02 questions so each module comes up in turn"
                - "Answer one Paper 02 question by hand in exam time @recurring(weekly:sat)"
                - "Mark the answer against the mark scheme and log the score"
                - "Sit a full Paper 02 section under exam conditions @recurring(monthly:14)"
            - name: Compiler error and bug notebook
              description: |-
                ## Purpose
                Most beginners meet the same handful of C errors again and again: a missing semicolon, a variable used before it is set, an array index past the end, a scanf without an ampersand. Writing each new error message and its fix in a notebook turns frustration into a reference, and it doubles as revision for testing and debugging questions.

                ## Milestones
                1. A notebook or file with columns for the error message, the cause and the fix.
                2. Every new compiler error and runtime bug from practice entered within a day.
                3. Errors grouped into syntax, logic and runtime types.
                4. The notebook read through once a month, with recurring errors highlighted.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A bug notebook holds at least twenty entries grouped by syntax, logic and runtime errors, reviewed monthly."
                cadence: rolling
              tasks:
                - "Set up a bug notebook with columns for message, cause and fix"
                - "Copy each new compiler error and its fix into the notebook @recurring(weekly:thu)"
                - "Group the entries into syntax, logic and runtime errors"
                - "Reread the notebook and highlight errors that keep coming back @recurring(monthly:28)"
            - name: Sunday check-in for parents of a CAPE computing student
              description: |-
                ## Purpose
                Parents who do not code can still tell whether the week went well: whether the exercises got done, whether a program ran, whether the IA is moving. A ten-minute Sunday conversation, using the timetable and the score log rather than a lecture, catches a slipping week while there is still time to recover it.

                ## Milestones
                1. A fixed Sunday time agreed with your sixth former.
                2. Three questions written down: what got done, what is stuck, what help is needed.
                3. The score log and the IA dates looked at together each week.
                4. Any help needed, such as a lab session or a tutor, arranged within the week.

                ## Notes
                Ask to see a program run rather than asking how it is going. A working program on screen is better evidence than any answer.
              priority: medium
              frontmatter:
                mode: service
                output_kind: habit
                success_criteria: "A Sunday check-in happens on at least eight weeks in a term, with any agreed help arranged the same week."
                cadence: rolling
              tasks:
                - "Agree a Sunday time with your sixth former for a ten-minute check-in"
                - "Ask what got done, what is stuck and what help is needed @recurring(weekly:sun)"
                - "Ask to see one program running on screen @recurring(monthly:5)"
                - "Arrange any help agreed before the next weekend"
            - name: Number bases, conversions and character codes
              description: |-
                ## Purpose
                Unit 1 opens with how a computer represents data, and conversions between binary, octal, hexadecimal and denary appear in almost every paper. Practising until each conversion is quick and exact, and knowing how character codes such as ASCII and Unicode store text, frees time on the paper for the questions that need thought.

                ## Milestones
                1. Conversions between binary, octal, hexadecimal and denary done in both directions without a calculator.
                2. The link between groups of binary digits and octal and hexadecimal digits explained in your own words.
                3. ASCII and Unicode compared, with why Unicode needed more bits.
                4. A set of past paper conversion and character code questions completed and marked.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Twenty mixed base conversions are completed with at least eighteen correct, and the past paper questions on this topic are marked."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Convert five denary numbers to binary, octal and hexadecimal"
                - "Write a short note on how hexadecimal groups four bits"
                - "Compare ASCII and Unicode in a short table"
                - "Answer the past paper questions tagged for number bases"
                - "Do ten mixed conversions without a calculator @recurring(monthly:8)"
            - name: Signed integers, binary arithmetic and floating point
              description: |-
                ## Purpose
                Representing negative numbers and fractions is where data representation gets examined in depth: sign and magnitude, one's and two's complement, overflow, and floating point with a mantissa and exponent. Students often memorise steps without knowing why two's complement works, then fail the first question that changes the bit length.

                ## Milestones
                1. Sign and magnitude, one's complement and two's complement each used to represent the same negative number.
                2. Binary addition and subtraction done using two's complement, with overflow detected.
                3. A number stored in floating point form and normalised, with the effect of more mantissa or exponent bits explained.
                4. Past paper questions on signed numbers and floating point completed and marked.

                ## Notes
                Check the exact floating point format your syllabus uses before practising, as textbooks differ in bit lengths and bias conventions.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Worked examples for each signed representation, two's complement arithmetic with overflow and a normalised floating point number are checked, and the past paper questions are marked."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Write minus nineteen in sign and magnitude, one's and two's complement"
                - "Subtract two binary numbers using two's complement and check for overflow"
                - "Normalise a floating point number in the format your syllabus uses"
                - "Mark the past paper questions on signed numbers and floating point"
            - name: Logic gates, truth tables and Boolean algebra
              description: |-
                ## Purpose
                Logic is the bridge between bits and hardware, and the questions follow a pattern: draw a circuit from an expression, complete a truth table, simplify the expression. Mastering the gates, the Boolean laws including De Morgan's, and a simplification method such as Karnaugh maps if your syllabus lists them makes these some of the most reliable marks on the paper.

                ## Milestones
                1. The symbols and truth tables for AND, OR, NOT, NAND, NOR and XOR drawn from memory.
                2. A circuit drawn from a Boolean expression and an expression written from a circuit.
                3. Expressions simplified using the Boolean laws and De Morgan's theorems.
                4. Karnaugh maps used to simplify three and four variable expressions, if they are on your syllabus.
                5. Past paper logic questions completed and marked.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Gate symbols and truth tables are drawn correctly from memory and at least five past paper logic questions are completed and marked."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Draw all six gate symbols with their truth tables from memory"
                - "Write out the Boolean laws and De Morgan's theorems on one card"
                - "Simplify three expressions from past papers and check the answers"
                - "Simplify one Boolean expression and check it with a truth table @recurring(monthly:16)"
            - name: Adders, flip-flops and other digital circuits
              description: |-
                ## Purpose
                Once gates make sense, the syllabus asks how they combine into circuits that add and remember. Building the half adder and full adder truth tables yourself, and understanding how a flip-flop holds one bit, explains how the ALU and registers work and answers a whole family of design questions.

                ## Milestones
                1. The half adder and full adder drawn with their truth tables and explained.
                2. Combinational and sequential circuits defined with an example of each.
                3. An SR or D flip-flop explained, with how flip-flops make up a register.
                4. Any decoder, multiplexer or other circuit your syllabus lists added to your notes.
                5. Past paper circuit questions completed and marked.

                ## Notes
                A free online logic simulator lets you build and test each circuit, which makes the truth tables stick far better than copying them.
              priority: medium
              frontmatter:
                mode: building
                output_kind: knowledge
                success_criteria: "Annotated diagrams of a half adder, a full adder and a flip-flop are in your notes, tested in a simulator, and the past paper circuit questions are marked."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Build a half adder in a free online logic simulator"
                - "Extend it to a full adder and write its truth table"
                - "Explain in a paragraph how a flip-flop stores one bit"
                - "Answer the past paper questions on adders and flip-flops"
            - name: CPU, memory and the fetch-decode-execute cycle
              description: |-
                ## Purpose
                Questions on computer organisation ask you to name parts and then explain how they work together, and the fetch-decode-execute cycle ties them all into one story. Knowing the ALU, control unit, registers such as the program counter, MAR and MDR, the three buses and where cache, RAM and secondary storage sit in the memory hierarchy lets you answer both the short definitions and the long explanation.

                ## Milestones
                1. A labelled diagram of the CPU, registers, buses and main memory drawn from memory.
                2. Each step of the fetch-decode-execute cycle written with the registers it uses.
                3. The memory hierarchy ordered by speed, cost and capacity with a reason for each level.
                4. Interrupts and how the cycle handles them explained in a paragraph.
                5. Past paper questions on computer organisation completed and marked.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "The fetch-decode-execute cycle and the memory hierarchy are written out from memory with every register and level named, and the past paper questions are marked."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Draw the CPU with its registers and the three buses from memory"
                - "Write out the fetch-decode-execute cycle step by step"
                - "Rank registers, cache, RAM and secondary storage by speed and cost"
                - "Answer the past paper questions on the CPU and memory"
            - name: Instruction formats, addressing modes and assembly language
              description: |-
                ## Purpose
                Low-level programming shows what the CPU actually does with each instruction, and the exam tests it with short assembly programs to trace and addressing modes to compare. Practising immediate, direct, indirect, indexed and relative addressing on small examples, and tracing register contents line by line, turns an abstract topic into a mechanical one.

                ## Milestones
                1. The parts of an instruction, opcode and operand, explained with an example.
                2. Each addressing mode on your syllabus described with a worked example of the value it fetches.
                3. Three short assembly programs traced with the accumulator and register values after each line.
                4. A simple assembly program written for a task such as adding two stored numbers.
                5. Past paper assembly language questions completed and marked.

                ## Notes
                Use the instruction set your syllabus or past papers use, not one from an unrelated textbook, so the mnemonics match the exam.
              priority: medium
              frontmatter:
                mode: building
                output_kind: knowledge
                success_criteria: "Worked examples for every addressing mode on the syllabus and three traced assembly programs are in your notes, and the past paper questions are marked."
                cadence: phased
                effort_hours_estimate: "7"
              tasks:
                - "Find the instruction set used in recent past papers"
                - "Write one worked example for each addressing mode"
                - "Trace three short assembly programs and record register values"
                - "Answer the past paper assembly language questions"
            - name: Problem definition, decomposition and IPO charts
              description: |-
                ## Purpose
                Module 2 of Unit 1 starts before any code: defining the problem, breaking it into parts and identifying the inputs, processing and outputs. Students who skip this stage write programs that solve the wrong problem, and it is also where the IA documentation begins, so the habit pays twice.

                ## Milestones
                1. A problem statement written for three everyday tasks, such as a tuck shop bill or a grade calculator.
                2. Each problem broken down by top-down design into smaller sub-problems.
                3. An IPO chart completed for each problem.
                4. The stages of problem solving listed in the order your syllabus gives them.
                5. Past paper questions on problem definition and decomposition completed and marked.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Three problems are defined, decomposed and charted in IPO form, and the past paper questions on problem solving are marked."
                cadence: phased
                effort_hours_estimate: "5"
              tasks:
                - "Write a problem statement for a school tuck shop bill"
                - "Break the problem into sub-problems by top-down design"
                - "Complete an IPO chart for each of three problems"
                - "Answer the past paper questions on problem solving stages"
            - name: Algorithms in pseudocode and flowcharts
              description: |-
                ## Purpose
                Writing an algorithm that a marker can follow is a core Paper 02 skill, and the same few patterns come up again: totals and counts, the largest and smallest value, averages, sentinel-controlled loops and simple validation. Writing each pattern in both pseudocode and a flowchart, in the conventions your syllabus uses, gives you a toolkit to assemble answers quickly.

                ## Milestones
                1. The standard flowchart symbols and pseudocode keywords for your syllabus listed on one page.
                2. Sequence, selection and iteration each shown in pseudocode and a flowchart.
                3. Algorithms written for totals, counting, maximum and minimum, average and a sentinel loop.
                4. Each algorithm checked with a trace table.
                5. Past paper algorithm questions completed and marked.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Pseudocode and flowcharts for at least six standard algorithms are written, traced and checked, and the past paper algorithm questions are marked."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "List the flowchart symbols and pseudocode keywords your syllabus uses"
                - "Write a sentinel-controlled loop that averages exam marks"
                - "Draw the same algorithm as a flowchart"
                - "Write an algorithm to find the highest and lowest of ten numbers"
                - "Answer two past paper algorithm questions under time"
            - name: Language generations, paradigms and translators
              description: |-
                ## Purpose
                Theory questions ask you to compare machine code, assembly and high-level languages, to name paradigms such as procedural, object-oriented and declarative, and to explain what assemblers, compilers, interpreters and linkers each do. Clear comparison tables, learned well, turn these into quick marks and also explain what happens every time you compile your own C code.

                ## Milestones
                1. A table comparing the generations of programming languages with an example of each.
                2. Procedural, object-oriented, functional and logic paradigms described with an example language.
                3. Assemblers, compilers, interpreters, linkers and loaders compared in one table.
                4. The stages of compilation, from lexical analysis to code generation, listed in order.
                5. Past paper questions on languages and translators completed and marked.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Comparison tables for language generations, paradigms and translators are complete, and the past paper questions on them are marked."
                cadence: phased
                effort_hours_estimate: "5"
              tasks:
                - "Make a table of the language generations with an example of each"
                - "Compare a compiler and an interpreter in four points"
                - "List the stages of compilation in order with one line each"
                - "Answer the past paper questions on translators"
            - name: Data types, operators, input and output in C
              description: |-
                ## Purpose
                Every program in the course rests on getting the basics exactly right: choosing int, float, double or char, declaring and initialising variables, using arithmetic and relational operators correctly, and reading and printing values with the right format specifiers. Errors here cost marks in every later topic, so it is worth drilling them until they are automatic.

                ## Milestones
                1. The C data types on your syllabus listed with their format specifiers and an example value.
                2. Programs written that read input, calculate and print results with correct formatting.
                3. Integer division, the modulus operator and operator precedence demonstrated with small programs.
                4. Constants and meaningful variable names used throughout your code.
                5. Past paper questions on C basics completed and marked.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Five small C programs using input, arithmetic and formatted output compile and run correctly, and the past paper questions on C basics are marked."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Write a program that converts a temperature from Celsius to Fahrenheit"
                - "Test what integer division and the modulus operator return"
                - "Make a table of data types and their format specifiers"
                - "Answer the past paper questions on variables and operators"
            - name: Selection and loops in C
              description: |-
                ## Purpose
                Control structures are where programs start making decisions, and they dominate Paper 02 code questions. Writing if, if-else, switch, for, while and do-while in real programs, and knowing when each loop fits, prepares you for questions that ask you to write, complete or correct a fragment.

                ## Milestones
                1. Programs written using if-else chains and a switch statement for a menu.
                2. The same counting task written with for, while and do-while loops.
                3. A nested loop used to print a pattern or a times table.
                4. Input validation written with a loop that rejects bad values.
                5. Past paper questions on selection and iteration completed and marked.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "At least six programs using every selection and loop structure on the syllabus compile and run, and the past paper questions are marked."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "Write a grade program that uses an if-else chain"
                - "Rewrite a counting loop using for, while and do-while"
                - "Build a menu-driven program with a switch statement"
                - "Answer the past paper questions on loops and selection"
            - name: Arrays and strings in C
              description: |-
                ## Purpose
                Arrays let one program handle a whole class list of marks, and strings in C are arrays of characters ending in a null character, which catches out many students. Working through one-dimensional and two-dimensional arrays and the standard string functions prepares you for questions on storing, searching and printing collections of data.

                ## Milestones
                1. Programs written that fill, total and search a one-dimensional array.
                2. A two-dimensional array used for a table such as marks by subject.
                3. Strings read, compared, copied and measured using the standard library functions.
                4. The null terminator and its effect on string length explained.
                5. Past paper questions on arrays and strings completed and marked.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Programs for array totals, a two-dimensional table and string handling run correctly, and the past paper questions on arrays and strings are marked."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "Write a program that stores ten marks and prints the average"
                - "Store marks by student and subject in a two-dimensional array"
                - "Compare two names using the string comparison function"
                - "Answer the past paper questions on arrays and strings"
            - name: Functions, records and text files in C
              description: |-
                ## Purpose
                Breaking a program into functions is how real software stays readable, and it is exactly what the IA markers look for in your code. Writing functions with parameters and return values, understanding scope, grouping data into structs and, where your syllabus lists it, reading and writing text files, prepares you to build a complete program rather than one long main.

                ## Milestones
                1. Functions written with parameters, return values and prototypes.
                2. Local and global scope explained with an example of a bug caused by confusing them.
                3. A struct defined for a record such as a student, and an array of structs used.
                4. A program that saves records to a text file and reads them back, if files are on your syllabus.
                5. Past paper questions on functions and records completed and marked.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A program using several functions and an array of structs compiles and runs, and the past paper questions on functions and records are marked."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "Split an earlier program into three functions with prototypes"
                - "Define a student struct and store five records in an array"
                - "Save the records to a text file and read them back"
                - "Answer the past paper questions on functions and scope"
            - name: Pointers and dynamic memory in C
              description: |-
                ## Purpose
                Unit 2 data structures are built with pointers, so a shaky grasp of addresses and dereferencing becomes a wall in the first weeks of the unit. Practising pointer basics, passing by reference, pointers to structs and allocating and freeing memory gives you the foundation that linked lists, stacks and queues all depend on.

                ## Milestones
                1. The address-of and dereference operators explained with a memory diagram.
                2. A swap function written that works by passing pointers.
                3. Memory allocated for a struct at run time and freed afterwards.
                4. Common pointer errors, such as using an uninitialised pointer, listed with their symptoms.
                5. Past paper questions on pointers completed and marked.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Memory diagrams and working programs for a pointer swap and a dynamically allocated struct are saved, and the past paper questions on pointers are marked."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Draw a memory diagram showing a variable, its address and a pointer to it"
                - "Write a swap function that uses pointers and test it"
                - "Allocate a struct at run time, use it and free it"
                - "Answer the past paper questions on pointers"
            - name: Linked lists built and traversed in C
              description: |-
                ## Purpose
                Insertion and deletion in a linked list mean rearranging pointers in the right order, which is why it is the first data structure most students find hard. Building one yourself, then drawing the list before and after each operation, makes the exam diagrams and code questions on lists far less risky.

                ## Milestones
                1. A node struct defined and a list built by inserting at the front.
                2. Insertion at the end and in sorted order written and tested.
                3. Deletion of a given node written, including the first and last node cases.
                4. Linked lists compared with arrays for access, insertion and memory use.
                5. Past paper linked list questions completed and marked.

                ## Notes
                Draw boxes and arrows on paper before writing each operation. Most linked list bugs are pointers updated in the wrong order, and a drawing shows that instantly.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A linked list program with insertion, deletion and traversal passes tests for empty, single and multi-node lists, and the past paper list questions are marked."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "Define a node struct and insert three nodes at the front"
                - "Write and test insertion at the end of the list"
                - "Delete the first, a middle and the last node and test each case"
                - "Answer the past paper questions on linked lists"
            - name: Stacks and queues as abstract data types
              description: |-
                ## Purpose
                Stacks and queues are examined both as ideas, defined by their operations, and as code using arrays or linked lists. Implementing push, pop, enqueue and dequeue both ways, including a circular queue, and knowing real uses such as undo, function calls and print queues, covers the theory, the diagrams and the code questions.

                ## Milestones
                1. Abstract data types defined, with a stack and a queue described by their operations.
                2. A stack implemented with an array and with a linked list, with checks for overflow and underflow.
                3. A queue implemented with an array, including a circular queue.
                4. Real uses of stacks and queues listed with a reason for each.
                5. Past paper stack and queue questions completed and marked.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Working stack and queue programs, including a circular queue, are saved with tests, and the past paper stack and queue questions are marked."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "Write the operations of a stack and a queue in plain words"
                - "Implement a stack with an array including overflow checks"
                - "Implement a circular queue and test it with wraparound"
                - "Answer the past paper questions on stacks and queues"
            - name: Searching and sorting algorithms compared
              description: |-
                ## Purpose
                Search and sort algorithms are examined as pseudocode, as code, as traces and as comparisons of efficiency. Coding linear and binary search and the sorts on your syllabus, such as bubble, selection and insertion sort, then counting their comparisons on the same data, gives you answers for every form the question takes.

                ## Milestones
                1. Linear and binary search written in C, with when binary search can be used.
                2. Each sort on your syllabus written in C and traced pass by pass on a small array.
                3. Comparisons counted for each algorithm on sorted, reversed and random data.
                4. Efficiency compared in plain words and in the notation your syllabus uses.
                5. Past paper searching and sorting questions completed and marked.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Search and sort programs run and are traced pass by pass, with a table of comparison counts, and the past paper questions are marked."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "Write linear search and binary search in C"
                - "Trace a bubble sort pass by pass on six numbers"
                - "Count comparisons for each sort on sorted and reversed data"
                - "Answer the past paper questions on searching and sorting"
            - name: Software development life cycle models
              description: |-
                ## Purpose
                Software engineering questions start with how projects are organised, and examiners want more than a list of stages: they want the right model justified for a given scenario. Comparing the waterfall, prototyping, incremental and agile models, with what each suits and where each fails, prepares you for those scenario questions and frames the Unit 2 IA.

                ## Milestones
                1. The stages of the life cycle listed with what each produces.
                2. Each model on your syllabus summarised with its strengths and weaknesses.
                3. A model chosen and justified for three scenarios, such as a bank system, a school app and a game.
                4. Past paper questions on life cycle models completed and marked.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A comparison table of life cycle models and three justified scenario choices are written, and the past paper questions are marked."
                cadence: phased
                effort_hours_estimate: "5"
              tasks:
                - "List the life cycle stages and what each one produces"
                - "Make a table comparing the models on your syllabus"
                - "Choose and justify a model for three different scenarios"
                - "Answer the past paper questions on development models"
            - name: Requirements gathering and feasibility study
              description: |-
                ## Purpose
                Systems fail more often from misunderstood requirements than from bad code, and the syllabus tests how analysts find out what users need. Practising fact-finding methods, separating functional from non-functional requirements and writing a short feasibility study for a real local problem, such as a school library or a small shop, makes the theory concrete and feeds your IA.

                ## Milestones
                1. Interviews, questionnaires, observation and document review compared with when to use each.
                2. Functional and non-functional requirements written for a local scenario.
                3. A short feasibility study covering technical, economic, operational and schedule feasibility.
                4. Past paper questions on analysis and feasibility completed and marked.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A requirements list and a one-page feasibility study for a local scenario are written, and the past paper questions are marked."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Pick a local system, such as a school library, to analyse"
                - "Interview one user and write down what they need"
                - "Sort the needs into functional and non-functional requirements"
                - "Write a one-page feasibility study for the scenario"
                - "Answer the past paper questions on analysis"
            - name: Design diagrams with DFDs, structure charts and UML
              description: |-
                ## Purpose
                Design questions ask you to draw, not just describe, and marks go to correct symbols and consistent levels. Practising context and level 1 data flow diagrams, structure charts and whichever UML diagrams your syllabus lists, on the same scenario each time, builds the drawing fluency that also makes the IA documentation look professional.

                ## Milestones
                1. The symbols for each diagram type on your syllabus listed with their meaning.
                2. A context diagram and a level 1 DFD drawn for one scenario, with balanced flows.
                3. A structure chart drawn for a program you have written.
                4. Any UML or entity relationship diagrams on your syllabus drawn for the same scenario.
                5. Past paper design questions completed and marked.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A full set of design diagrams for one scenario is drawn with correct symbols, and the past paper design questions are marked."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "List the diagram types your syllabus names and their symbols"
                - "Draw a context diagram for the scenario from your feasibility study"
                - "Expand it into a level 1 data flow diagram"
                - "Draw a structure chart for one of your C programs"
                - "Answer two past paper design questions"
            - name: Testing, implementation and maintenance of software
              description: |-
                ## Purpose
                Later stages of the life cycle carry steady marks and are easy to lose through vague answers. Learning unit, integration, system and acceptance testing, black box and white box methods, normal, boundary and erroneous test data, changeover methods and the types of maintenance, with an example for each, makes your answers specific and strengthens the testing section of your IA.

                ## Milestones
                1. Each level of testing described with who does it and when.
                2. A test plan with normal, boundary and erroneous data written for one of your programs.
                3. Direct, parallel, phased and pilot changeover compared with a scenario for each.
                4. Corrective, adaptive and perfective maintenance defined with examples.
                5. Past paper questions on testing and maintenance completed and marked.
              priority: low
              frontmatter:
                mode: building
                output_kind: knowledge
                success_criteria: "A test plan for one real program and comparison notes on testing levels, changeover and maintenance are written, and the past paper questions are marked."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Write a test plan with normal, boundary and erroneous data"
                - "Run the test plan on one of your programs and record results"
                - "Compare the four changeover methods in a table"
                - "Answer the past paper questions on testing and maintenance"
            - name: Operating system functions and resource management
              description: |-
                ## Purpose
                Unit 2 asks how the operating system shares one computer among many programs: scheduling processes, managing memory, organising files and handling devices and interrupts. Working through scheduling algorithms with small worked examples, and comparing paging and virtual memory, turns a descriptive topic into one with calculable answers.

                ## Milestones
                1. The main functions of an operating system listed with an example of each.
                2. Process states drawn and scheduling algorithms on your syllabus worked through on a small set of jobs.
                3. Paging, segmentation and virtual memory explained with a diagram.
                4. File management and device handling summarised in your own words.
                5. Past paper operating system questions completed and marked.

                ## Notes
                Check which module of Unit 2 holds operating systems and networks in the current syllabus, and archive this project if your syllabus does not list them.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Worked scheduling examples and a memory management diagram are in your notes, and the past paper operating system questions are marked."
                cadence: phased
                effort_hours_estimate: "7"
              tasks:
                - "List the functions of an operating system with an example each"
                - "Work through two scheduling algorithms on five sample jobs"
                - "Draw how paging maps a program onto memory frames"
                - "Answer the past paper questions on operating systems"
            - name: Networks, protocols and security basics
              description: |-
                ## Purpose
                Network questions mix vocabulary with reasoning: why a layered model exists, what a protocol does at each layer, how data crosses a network and how it is kept safe. Learning the layered models, addressing, transmission media and common threats with their controls gives you answers for both the definitions and the scenario questions about a school or business network.

                ## Milestones
                1. LAN, WAN and the common topologies compared with their trade-offs.
                2. The OSI and TCP/IP layers listed with a protocol at each.
                3. IP addressing and the role of routers and switches explained.
                4. Common security threats matched to controls such as encryption, firewalls and access rights.
                5. Past paper network and security questions completed and marked.
              priority: low
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "Notes on layered models, addressing and threats with controls are complete, and the past paper network and security questions are marked."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Draw the OSI and TCP/IP layers side by side"
                - "Name one protocol that works at each layer"
                - "Match five security threats to a control that reduces each"
                - "Answer the past paper questions on networks and security"
            - name: Unit 1 IA problem choice and specification
              description: |-
                ## Purpose
                The Unit 1 internal assessment is a programming project, and the choice of problem decides how much there is to show: too small and there is nothing to document, too ambitious and it never runs. Choosing a real, bounded problem, such as a school canteen order system or a small shop's stock list, and writing a clear specification before coding sets up every later stage.

                ## Milestones
                1. Three candidate problems listed and checked against the IA guidelines from your teacher.
                2. One problem chosen and approved by your teacher.
                3. A specification written with the problem statement, inputs, processing, outputs and limits.
                4. The algorithm outlined in pseudocode or a flowchart before any code is written.

                ## Notes
                Start from the **Product spec** template for the specification. Pick a problem with a real user you can ask questions, because that makes the analysis section far easier to write.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A teacher-approved IA problem with a written specification and an outline algorithm is saved by the internal deadline."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Ask your teacher for the IA guidelines and marking criteria"
                - "List three possible problems that have a real user"
                - "Get your teacher's approval for one problem"
                - "Write the specification with inputs, processing and outputs"
                - "Ask the agent to check the specification against the marking criteria"
            - name: Unit 1 IA program, testing and documentation
              description: |-
                ## Purpose
                Most IA marks are lost not in the code but in what surrounds it: missing test evidence, no comments, a user guide that was rushed the night before. Building the program in stages, testing each one, and writing the documentation alongside the code keeps the project on time and shows the marker every part of the process.

                ## Milestones
                1. The program built in working stages, each saved as a separate version.
                2. Every function commented and variable names chosen to be self-explanatory.
                3. A test plan carried out with screenshots or printed output as evidence.
                4. Documentation written for each section the marking criteria ask for.
                5. A complete draft handed to your teacher by the internal date.

                ## Notes
                Save a dated copy of the code after every session. A corrupted file the week before submission is a common and avoidable disaster.
              priority: high
              deadlineOffsetDays: 90
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "A working, commented program with a completed test plan and full documentation is handed to your teacher as a draft by the internal deadline."
                cadence: phased
                effort_hours_estimate: "30"
              tasks:
                - "Break the program into stages you can finish one at a time"
                - "Build and test the first stage, then save a dated copy"
                - "Collect test evidence as screenshots for every test case"
                - "Write each documentation section as its stage is finished"
                - "Hand the full draft to your teacher by the internal date"
            - name: Unit 2 IA software project
              description: |-
                ## Purpose
                The Unit 2 internal assessment asks you to apply data structures and software engineering to a real problem, so it rewards students who treat it as a small engineering project rather than a long program. Running it through analysis, design, implementation and testing, with the diagrams and data structures from the unit visible in the write-up, matches what the marking criteria look for.

                ## Milestones
                1. The Unit 2 IA guidelines and marking criteria read and summarised.
                2. A problem chosen that genuinely needs a data structure such as a list, stack or queue.
                3. Analysis and design documents produced, including the diagrams the criteria ask for.
                4. The solution implemented and tested against a written test plan.
                5. A complete draft submitted to your teacher by the internal date.

                ## Notes
                Confirm with your teacher what the current Unit 2 IA requires, as the brief differs from Unit 1. Reuse the requirements and design work from this unit's topic projects where it fits.
              priority: medium
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "A Unit 2 IA draft with analysis, design diagrams, working code using a data structure and a completed test plan is handed in by the internal deadline."
                cadence: phased
                effort_hours_estimate: "35"
              tasks:
                - "Read the Unit 2 IA guidelines and list what each section needs"
                - "Choose a problem that needs a list, stack or queue"
                - "Draw the design diagrams before writing code"
                - "Implement, test and document the solution in stages"
            - name: IA final check and submission
              description: |-
                ## Purpose
                Marks slip away at the last step: a missing appendix, code that will not compile on the teacher's machine, a declaration form unsigned. A final check against the marking criteria a week before the internal deadline catches these while there is still time, and a clean submission protects work that took months.

                ## Milestones
                1. The project checked section by section against the marking criteria.
                2. The code compiled and run on a different computer, ideally the school's.
                3. Every page numbered, every diagram labelled and sources acknowledged.
                4. Any forms or declarations your school requires signed.
                5. The IA submitted and a full copy kept at home.
              priority: high
              deadlineOffsetDays: 140
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "The IA is submitted by the school's deadline after a criteria check and a successful compile on a second computer, with a full copy kept."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Tick each section of the IA against the marking criteria"
                - "Compile and run the code on a school computer"
                - "Number the pages and label every diagram"
                - "Submit the IA and keep a full copy at home"
            - name: Paper 032 preparation for private candidates
              description: |-
                ## Purpose
                Private candidates who cannot complete an internal assessment through a school sit Paper 032 instead, which tests the same skills through a written paper. Practising its question style, with programs written and traced by hand and design questions answered from a scenario, replaces the guidance a teacher would give on the IA.

                ## Milestones
                1. Paper 032 format confirmed from the current syllabus and with the local registrar.
                2. Past Paper 032 questions collected for your unit.
                3. A practice programming project done at home to build the skills the IA would have tested.
                4. At least three past Paper 032 papers completed under time and marked.
                5. A tutor or experienced programmer asked to review one practice answer.
              priority: medium
              frontmatter:
                mode: building
                output_kind: knowledge
                success_criteria: "Three timed Paper 032 practice papers are marked, and one answer has been reviewed by a tutor or programmer."
                cadence: phased
                effort_hours_estimate: "15"
              tasks:
                - "Confirm your Paper 032 entry with the local registrar"
                - "Collect past Paper 032 questions for your unit"
                - "Complete one Paper 032 under time and mark it"
                - "Ask a tutor or programmer to review one of your answers"
            - name: First full timed Computer Science paper at home
              description: |-
                ## Purpose
                A student who has only practised single questions has never felt how a full paper drains concentration by the last section. Sitting one complete Paper 01 and Paper 02 at home, under exam timing and rules, months before the exam shows where pace collapses and leaves time to fix it.

                ## Milestones
                1. A recent unseen past Paper 01 and Paper 02 set aside.
                2. Both papers sat at home in exam time with no notes, phone or compiler.
                3. Both papers marked against the mark scheme.
                4. Time spent on each section compared with the time it was worth.
                5. Three changes to your exam technique written down.
              priority: medium
              deadlineOffsetDays: 150
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A full Paper 01 and Paper 02 are sat in exam time at home, marked, and three technique changes recorded."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Pick an unseen past paper and put it away until the day"
                - "Ask a parent to keep time and hold the phone"
                - "Sit Paper 01 and Paper 02 under exam conditions"
                - "Mark both papers and note where time ran out"
            - name: School mock exam and marked script review
              description: |-
                ## Purpose
                Mock exams are the last full rehearsal with real marking, and a marked script that goes in a drawer wastes it. Going through every lost mark with your teacher, and turning the pattern into a short remediation plan, gives the final months a precise focus.

                ## Milestones
                1. Every question on the marked mock script reviewed.
                2. Each lost mark labelled as content, code, trace, technique or time.
                3. A short remediation plan written for the three biggest losses.
                4. The plan agreed with your teacher and added to the timetable.

                ## Notes
                Start from the **Remediation plan** template.
              priority: high
              deadlineOffsetDays: 180
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A marked mock script is fully reviewed, and a remediation plan for the three biggest losses is agreed with your teacher and timetabled."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Collect your marked mock script from your teacher"
                - "Label every lost mark by its cause"
                - "Write a remediation plan for the three biggest losses"
                - "Agree the plan with your teacher and add it to the timetable"
            - name: Final four weeks of Computer Science revision
              description: |-
                ## Purpose
                The last four weeks are for past papers and closing gaps, not for learning new topics. A fixed plan, with a timed section each day, full papers on weekends and short refreshers on traces, conversions and definitions, turns the months of practice into steady marks on the day.

                ## Milestones
                1. A day-by-day plan for the final four weeks written and pinned up.
                2. One timed section completed and marked every day.
                3. At least three full papers sat on weekends.
                4. Glossary and bug notebook reread in the final week.
              priority: high
              deadlineOffsetDays: 215
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Daily timed sections and three weekend full papers are completed and marked across the last four weeks before the exam."
                cadence: phased
                effort_hours_estimate: "40"
              tasks:
                - "Write a day-by-day plan for the last four weeks"
                - "Complete and mark one timed section @recurring(daily)"
                - "Sit a full past paper on three weekends"
                - "Reread the glossary and bug notebook in the final week"
            - name: Computer Science exam day plan
              description: |-
                ## Purpose
                Exam day goes wrong in small ways: a forgotten candidate number, a pen that runs out halfway through a trace, a panic on a code question that leaves time unused. A written plan for the night before, the morning and the paper itself removes those risks and lets you spend all your attention on the questions.

                ## Milestones
                1. Exam date, time, room and candidate number confirmed and written down.
                2. Pens, pencils, ruler, eraser and any permitted items packed the night before.
                3. A time plan for each section of each paper written.
                4. A plan for a hard question agreed: mark it, move on and return.

                ## Notes
                Check the CXC rules on what you may take into the room and whether a calculator is allowed for this subject.
              priority: high
              deadlineOffsetDays: 240
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "An exam day checklist with confirmed time, room, candidate number, packed kit and a section time plan is complete the night before."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Confirm your exam time, room and candidate number"
                - "Pack pens, pencils, ruler and permitted items the night before"
                - "Write a time plan for each section of each paper"
                - "Agree with a parent what time you leave home"
            - name: Teacher's bank of C exercises with test cases
              description: |-
                ## Purpose
                Computing teachers and lessons tutors spend hours writing exercises and checking student code one at a time. A shared bank of graded C exercises, each with a model solution and a set of test inputs and expected outputs, lets students check their own work and frees class time for the conversations that need a teacher.

                ## Milestones
                1. Forty exercises written and sorted by topic and difficulty across both units.
                2. A model solution and at least three test cases with expected outputs for each exercise.
                3. The bank shared with students in a folder or learning platform.
                4. Common mistakes from marked student work added as notes to each exercise.

                ## Notes
                Include boundary cases in every test set, such as an empty input or the largest value allowed, since those are where student code most often fails.
              priority: medium
              frontmatter:
                mode: service
                output_kind: artifact
                success_criteria: "A shared bank of at least forty C exercises, each with a model solution and three or more test cases, is in use by a class."
                cadence: phased
                effort_hours_estimate: "25"
              tasks:
                - "List the topics in both units that need graded exercises"
                - "Write ten exercises with model solutions and test cases"
                - "Share the bank with your class in a folder or platform"
                - "Ask the agent to draft test cases for a new exercise"
                - "Add one new exercise from student mistakes @recurring(monthly:12)"
            - name: Subject report patterns across five sittings
              description: |-
                ## Purpose
                CXC subject reports describe, sitting after sitting, the same weaknesses: vague definitions, traces abandoned halfway, code that ignores the question's constraints. Reading five years of reports for Computer Science and listing the repeated comments gives you, or your class, a checklist of the traps examiners keep seeing.

                ## Milestones
                1. Subject reports for the last five sittings of your unit collected.
                2. Every comment on candidate weaknesses listed by module.
                3. Comments that repeat across three or more years highlighted.
                4. A one-page checklist of traps to avoid written and used in the final weeks.
              priority: low
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A one-page checklist of repeated examiner comments from five sittings of subject reports is written and used in revision."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Collect five years of subject reports for your unit"
                - "List every comment on weaknesses by module"
                - "Highlight comments that repeat across three or more years"
                - "Write a one-page checklist of traps to avoid"
            - name: Writing efficient, well-structured C for the top grade
              description: |-
                ## Purpose
                Students aiming for a Grade I need code that is not only correct but clear and efficient, the kind a marker can follow in seconds. Rewriting your own earlier programs, removing repetition, choosing better data structures and adding precise comments, sharpens both your Paper 02 code and your IA, and builds habits that carry into university computing.

                ## Milestones
                1. Three of your earlier programs reread with a list of weaknesses in each.
                2. Each program rewritten with functions in place of repeated code and clearer names.
                3. One rewrite improved by a better algorithm or data structure, with comparisons measured.
                4. A short style guide for your own code written from what you changed.

                ## Notes
                Read code written by stronger programmers, such as worked solutions from your teacher, and copy the structure, not the code.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Three earlier programs are rewritten with measurable improvements, and a one-page personal C style guide is saved."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "Pick three programs you wrote early in the course"
                - "List the repetition and unclear names in each one"
                - "Rewrite each program using functions and better names"
                - "Write a one-page style guide from the changes you made"
---

# CAPE Computer Science

Everything a sixth former, a parent or a computing teacher needs for CAPE Computer Science, from the first evening with a compiler to the last paper. It opens with set-up (the format check, a working C environment, a diagnostic, a timetable and a past paper archive), moves through the weekly routines, then follows the syllabus: Unit 1 on computer architecture, problem solving and programming in C, and Unit 2 on data structures, software engineering, and operating systems and networks, before the internal assessment projects, timed papers, the mock, exam day and projects for private candidates, teachers and students aiming for the top grade.

The rhythm is weekly: C exercises on Monday, Wednesday and Friday, a trace table on Tuesday, a multiple choice set on Wednesday, the bug notebook on Thursday, glossary terms on Friday, a timed Paper 02 question and the score log on Saturday and a parent check-in on Sunday, with a few monthly refreshers and one timed section a day in the final four weeks. The Meeting notes, Metrics log, Habit tracker, Product spec and Remediation plan templates pair with the projects that point at them. Installing adds all 50 projects as active, so archive the ones that are not for you yet.
