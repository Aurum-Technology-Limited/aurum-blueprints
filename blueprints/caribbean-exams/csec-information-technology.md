---
id: caribbean-exams.csec-information-technology
name: CSEC Information Technology
description: "A complete CSEC Information Technology plan: the current syllabus and papers, daily coding drills, every section from computer fundamentals to program implementation, the SBA, timed past papers, the mock, exam day and results."
category: personal
version: 1.0.0
tags: [caribbean-exams, csec-information-technology, student, parent, educator, cxc, csec, programming, sba]
author: Aurum Technology
starter_structure:
  templates:
    - skills-matrix
    - habit-tracker
    - metrics-log
    - meeting-notes
  pillars:
    - name: Caribbean School Exams
      emoji: "📝"
      description: "Caribbean school exams taken one subject at a time: SEA and the other primary exit exams, every major CSEC subject, the core CAPE units, school-based assessments, past-paper practice, revision plans and exam-day logistics, so a student can search for a subject and start."
      pillarFrontmatter:
        review_cadence: monthly
      areas:
        - name: CSEC Information Technology
          description: "Studying CSEC Information Technology: computer fundamentals, productivity tools, databases, spreadsheets, problem solving and programming, and the SBA."
          projects:
            - name: Current CSEC Information Technology syllabus and paper format check
              description: |-
                ## Purpose
                CXC examines Information Technology through a multiple-choice Paper 01, a structured written Paper 02 that includes problem solving and programming, and either the SBA as Paper 031 or the alternative Paper 032 for private candidates, and syllabus revisions have moved topics around and updated the software and programming expectations. One evening with the current syllabus and the CXC timetable means every later project is aimed at the exam you will actually sit, not the one in an older cousin's notes.

                ## Milestones
                1. The current CSEC Information Technology syllabus downloaded from the CXC website, with its edition year noted.
                2. The format of Paper 01, Paper 02 and Paper 031 or 032 written on one page in the syllabus's own words.
                3. Every syllabus section listed in order, from computer fundamentals to program implementation, so each topic project here matches one.
                4. The programming language and software your school uses checked against what the syllabus allows.
                5. The May to June sitting confirmed with your school and the IT exam date noted once the timetable is out.

                ## Notes
                Revision guides and websites often lag a syllabus change by several years. Where they disagree with the CXC document, the CXC document wins.
              priority: high
              deadlineOffsetDays: 10
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A one-page summary taken from the current CXC syllabus lists the papers, their format, the sections in order, the permitted language and the sitting."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Check the current syllabus and timetable on the CXC website and note the paper format"
                - "Write the syllabus edition year inside the cover of your IT folder"
                - "List the syllabus sections on one page in the order CXC gives them"
                - "Ask your teacher which programming language and SBA arrangement the school uses"
                - "Recheck the CXC website for syllabus amendments each September @recurring(yearly)"
            - name: Diagnostic Paper 01 for Information Technology
              description: |-
                ## Purpose
                Before planning two years of revision, find out what you already know. A full past Paper 01, done under time and marked against the key, shows which sections are already solid from everyday computer use and which, often number systems, file organisation and networks, need real teaching.

                ## Milestones
                1. A recent past Paper 01 sat in one go under the time stated on the paper.
                2. Every answer marked against the key and the score recorded.
                3. Each wrong answer tagged with its syllabus section.
                4. The three weakest sections named and written at the top of your study plan.

                ## Notes
                Do not revise first. The point is an honest starting score, and a low one is normal at the start of fourth form.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A marked diagnostic Paper 01 with the score and the three weakest syllabus sections recorded in the study plan."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Get a recent past Paper 01 and its answer key from your teacher or the official CXC past paper booklets"
                - "Sit the paper in one go with a timer and no notes"
                - "Mark it and tag each wrong answer with its syllabus section"
                - "Write your three weakest sections at the top of your study plan"
            - name: Two-year Information Technology study plan
              description: |-
                ## Purpose
                IT is usually taught across fourth and fifth form with the SBA running alongside the theory, so a plan that ignores SBA deadlines falls apart in the second year. Mapping each syllabus section to a term, with practical lab time and SBA milestones marked, shows early whether the content fits before the mock.

                ## Milestones
                1. Each syllabus section assigned to a term, matching the school's scheme of work where one exists.
                2. SBA milestones and the school's internal deadlines marked on the same calendar.
                3. Two or three study blocks a week fixed around other subjects and lessons.
                4. A topic confidence grid started, rating every section from one to five.
                5. The plan reviewed and adjusted at the end of each term.

                ## Notes
                Start from the **Skills matrix** template for the confidence grid.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A written two-year plan places every syllabus section and SBA milestone in a term, with a confidence grid updated at least once a term."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Ask your teacher for the scheme of work and the SBA calendar"
                - "Assign each syllabus section to a term on one page"
                - "Rate your confidence in every section from one to five"
                - "Check the plan against the school term calendar @recurring(monthly:2)"
            - name: Computer access, software and coursework folder setup
              description: |-
                ## Purpose
                Spreadsheet, database and programming skills only stick with hands on a keyboard, and many students share a family computer or rely on a phone. Sorting out regular access, the right software and one tidy, backed-up folder for coursework early saves the classic disaster of an SBA file lost on a borrowed flash drive a week before submission.

                ## Milestones
                1. Regular weekly access to a computer confirmed, at home, at school, at a relative's or at a public library.
                2. A word processor, spreadsheet, database program and web browser available, matching what the school uses where possible.
                3. One coursework folder with subfolders by syllabus section and a file naming rule such as date, topic and version.
                4. A second copy of the folder kept on a flash drive or cloud storage and updated weekly.

                ## Notes
                Free office suites can do most practical tasks, but menus and database features differ. If the school lab uses a particular package, practise there before the SBA.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A computer with the four productivity tools is available every week, and the coursework folder has a backup no more than seven days old."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "List where and when you can use a computer each week"
                - "Check which office suite and database program the school lab uses"
                - "Create the coursework folder with one subfolder per syllabus section"
                - "Copy the coursework folder to a flash drive or cloud backup @recurring(weekly:fri)"
            - name: Programming environment setup and a first working program
              description: |-
                ## Purpose
                Learners who only ever write code on paper struggle to spot syntax errors and never see a loop actually run. Installing the compiler or editor for the language your syllabus and school use, and getting a short program to accept input and print a result, removes the setup excuse before the programming section begins.

                ## Milestones
                1. The language your school teaches confirmed against the syllabus; Pascal is a long-standing choice in CSEC classrooms.
                2. A free compiler or editor for that language installed on the computer you use most.
                3. A program that asks for a name and prints a greeting compiled and run without errors.
                4. The steps to create, save, compile and run a program written on one card.

                ## Notes
                If no computer you can use will run a compiler, ask your teacher about lab time or an online editor for the same language, and check it behaves like the one in the school lab.
              priority: medium
              deadlineOffsetDays: 14
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A first program in the school's language compiles and runs on a computer you can use every week, with the steps written on a card."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Confirm with your teacher which language and compiler the class uses"
                - "Install a free compiler or editor for that language"
                - "Write, compile and run a program that reads a name and prints a greeting"
                - "Write the save, compile and run steps on an index card"
            - name: Command words and definition answers for Paper 02
              description: |-
                ## Purpose
                Many marks in Paper 02 are lost not through ignorance but through answering the wrong command word: listing when the question says explain, or describing one item when it says distinguish between two. Learning what each command word asks for, and practising the two-part answer that states a point and then justifies it, lifts scores across every section of the paper.

                ## Milestones
                1. The command words in the syllabus glossary, such as state, describe, explain, distinguish and justify, written with what each one requires.
                2. Ten definition answers written for core terms and checked against a mark scheme.
                3. Five distinguish questions answered with a point for each item and a clear contrast.
                4. One full past Paper 02 theory question marked by a teacher for command-word accuracy.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A command-word sheet and fifteen marked practice answers, with a teacher-marked past Paper 02 question scoring at least two thirds of its marks."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Copy the glossary of command words from the back of the syllabus"
                - "Write ten one-sentence definitions of core IT terms"
                - "Answer five distinguish questions from past papers"
                - "Ask your teacher to mark one theory question for command-word accuracy"
            - name: Weekly Information Technology practice sessions
              description: |-
                ## Purpose
                Two short, regular sessions a week beat a long cram before each test, because practical skills such as building a query or tracing a loop fade quickly without use. Splitting each session between one theory topic and one hands-on task keeps both halves of the exam moving forward.

                ## Milestones
                1. Two fixed 45-minute slots a week in your timetable.
                2. Each session split between a theory topic and a practical task at the computer.
                3. A one-line record kept of what each session covered.
                4. Twelve consecutive weeks of sessions completed.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Twelve consecutive weeks with two recorded practice sessions each, every one covering a theory topic and a practical task."
                cadence: rolling
              tasks:
                - "Choose two fixed 45-minute slots in your week"
                - "Hold an IT practice session with one theory topic and one practical task @recurring(weekly:tue,sat)"
                - "Write one line on what each session covered"
                - "Rotate the practical task between spreadsheets, databases and code each fortnight"
            - name: Ten-minute daily algorithm or coding drill
              description: |-
                ## Purpose
                Programming and algorithm questions reward fluency, and fluency comes from small daily repetitions, not occasional marathons. Ten minutes a day writing a short algorithm, tracing someone else's, or fixing a broken program keeps the logic of variables, loops and conditions fresh from fourth form to the exam.

                ## Milestones
                1. A bank of at least thirty short drills collected from textbooks, past papers and your teacher.
                2. A daily ten-minute slot attached to an existing routine.
                3. Drills ticked off on a habit tracker for a month.
                4. Twenty consecutive school days of drills completed.

                ## Notes
                Start from the **Habit tracker** template. Rotate between writing, tracing and fixing so the drill never turns into copying.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Twenty consecutive school days of ten-minute drills ticked off, with the drill bank holding at least thirty exercises."
                cadence: rolling
              tasks:
                - "Collect thirty short algorithm and coding exercises into one document"
                - "Pick the daily routine the drill will follow, such as straight after dinner"
                - "Do one ten-minute algorithm, tracing or debugging drill @recurring(daily)"
            - name: IT terms and acronym recall cards
              description: |-
                ## Purpose
                CSEC IT is thick with terms that look alike in a multiple-choice option: RAM and ROM, LAN and WAN, verification and validation, serial and sequential access. A set of recall cards reviewed a few minutes at a time turns these from guesswork into instant recognition, which is exactly what Paper 01 rewards.

                ## Milestones
                1. Cards made for every key term and acronym in each syllabus section, with the term on one side and a definition and example on the other.
                2. Cards sorted into known, shaky and new piles.
                3. Shaky and new cards reviewed every week until they move to known.
                4. Nine in ten cards in the known pile by the start of the final revision period.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A full card set covering every syllabus section, with at least nine in ten cards in the known pile by the mock."
                cadence: rolling
              tasks:
                - "Make cards for the terms in the section you are studying now"
                - "Sort the cards into known, shaky and new piles"
                - "Review the shaky and new cards for fifteen minutes @recurring(weekly:wed)"
                - "Add a card for every term you got wrong in a practice paper"
            - name: Monthly timed Paper 01 practice for IT
              description: |-
                ## Purpose
                Paper 01 covers the whole syllabus in multiple-choice form, and speed matters as much as knowledge. A full past or practice Paper 01 once a month under time, with the score logged, shows the trend and which sections still leak marks.

                ## Milestones
                1. A supply of past and practice Paper 01s gathered, at least one per month to the exam.
                2. One paper sat each month under the time printed on it.
                3. Scores logged by date with wrong answers tagged by section.
                4. Scores rising across three consecutive months.

                ## Notes
                Start from the **Metrics log** template to log scores by date and section.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Six monthly timed Paper 01 scores logged by date, with errors tagged by syllabus section and a rising trend."
                cadence: rolling
              tasks:
                - "Gather enough past Paper 01s for one a month until the exam"
                - "Sit a full Paper 01 under time and mark it @recurring(monthly:9)"
                - "Log the score and tag each wrong answer by syllabus section"
            - name: Monthly Paper 02 structured question practice for IT
              description: |-
                ## Purpose
                Paper 02 rewards clear, structured written answers and working algorithms, which only improve through marked practice. Answering one full past Paper 02 question a month, alternating between theory, productivity tools and programming, builds the habit of reading the mark allocation and answering to it.

                ## Milestones
                1. A list of past Paper 02 questions grouped by syllabus section.
                2. One full question answered under time each month.
                3. Each answer marked against the mark scheme or by your teacher.
                4. The month's main lesson written in the mistakes log.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Six months of timed Paper 02 questions answered and marked, covering theory, productivity tools and programming."
                cadence: rolling
              tasks:
                - "Group past Paper 02 questions by syllabus section"
                - "Answer one timed Paper 02 question and mark it against the scheme @recurring(monthly:23)"
                - "Alternate between theory, productivity tools and programming questions"
                - "Write the main lesson from each answer in your mistakes log"
            - name: Information Technology mistakes log
              description: |-
                ## Purpose
                Repeating the same slips, such as forgetting the dollar signs in an absolute reference or a loop counter that runs one time too many, costs more marks than real gaps in knowledge. A running log of every error from practice papers, drills and SBA work, with the correct version beside it, becomes the most useful revision document you own.

                ## Milestones
                1. A log with columns for date, source, section, mistake and fix.
                2. Every marked practice paper and drill feeding into the log.
                3. Repeated mistakes highlighted and turned into recall cards.
                4. The log read through before each mock and the final exam.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: artifact
                success_criteria: "A mistakes log with entries from at least ten practice papers or drill weeks, with repeated errors turned into recall cards."
                cadence: rolling
              tasks:
                - "Set up the mistakes log with date, source, section, mistake and fix columns"
                - "Add the week's errors from papers, drills and SBA work @recurring(weekly:sun)"
                - "Ask the agent to group the month's mistakes by syllabus section"
                - "Read the whole log the week before every mock"
            - name: Termly progress review with your IT teacher
              description: |-
                ## Purpose
                Teachers see patterns across the class that a student cannot, and a short conversation once a term turns their view into specific next steps. Bringing scores, the confidence grid and SBA progress makes the meeting about decisions rather than general encouragement.

                ## Milestones
                1. A ten-minute meeting with your IT teacher each term.
                2. Latest Paper 01 scores, the confidence grid and SBA progress brought to the meeting.
                3. Two or three agreed actions written down.
                4. Actions from the last meeting checked at the start of the next.

                ## Notes
                Start from the **Meeting notes** template.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: event-completion
                success_criteria: "A written record of at least three termly reviews, each with agreed actions and a check of the previous ones."
                cadence: cyclic
              tasks:
                - "Ask your teacher for ten minutes near the end of each term @recurring(quarterly)"
                - "Bring your score log, confidence grid and SBA progress"
                - "Write down the two or three actions you agree"
                - "Check last term's actions at the start of the meeting"
            - name: Hardware components and the input, process, output and storage cycle
              description: |-
                ## Purpose
                Every later section assumes you can name the parts of a computer system and say what each does in the IPOS cycle: input devices, the central processing unit with its control unit and arithmetic logic unit, memory, output devices and storage. Getting this vocabulary exact early makes questions on devices, storage and basic troubleshooting much easier.

                ## Milestones
                1. A labelled diagram of a computer system showing input, processing, output and storage, with the main parts of the CPU named.
                2. The roles of the control unit, arithmetic logic unit and registers explained in one sentence each.
                3. The computer types in the syllabus, such as supercomputers, mainframes, desktops and mobile devices, compared in a table.
                4. Basic troubleshooting steps for common faults, such as no display or a device not recognised, listed where the syllabus includes them.
                5. Past-paper questions on this topic answered and marked at 70 percent or better.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A labelled IPOS diagram, a computer types table and past-paper hardware questions marked at 70 percent or better."
                cadence: phased
                effort_hours_estimate: "5"
              tasks:
                - "Draw and label the IPOS diagram from memory"
                - "Write one sentence on what each part of the CPU does"
                - "Make a table comparing the computer types listed in the syllabus"
                - "Answer and mark the hardware questions from three past papers"
            - name: Choosing input and output devices for real situations
              description: |-
                ## Purpose
                Questions rarely ask you to define a barcode reader; they describe a supermarket, a bank, a school or a person with a disability and ask which device fits and why. Practising device choice against real Caribbean settings, from a lottery outlet's mark-sense playslip to the magnetic ink line on a bank cheque, turns a memorised list into marks.

                ## Milestones
                1. A table of input and output devices with an example use, an advantage and a limitation for each.
                2. Devices for people with visual, hearing or mobility impairments listed with how they help.
                3. Five scenario questions answered with a device choice and a justification.
                4. Past-paper device questions marked at 70 percent or better.
              priority: low
              frontmatter:
                mode: building
                output_kind: knowledge
                success_criteria: "A device table, an assistive devices list and five justified scenario answers, with past-paper device questions at 70 percent or better."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Build a table of input and output devices with uses and limitations"
                - "List assistive devices for three different impairments"
                - "Spot five input or output devices in use at shops, banks or school this week"
                - "Answer five scenario questions choosing and justifying a device"
            - name: Primary and secondary storage, units and media choice
              description: |-
                ## Purpose
                Storage questions mix three ideas students often blur: primary memory such as RAM and ROM, secondary storage such as hard drives, solid state drives, optical discs and cloud storage, and the units from bits to terabytes. Separating them cleanly, and practising which medium suits a given job, secures a dependable block of Paper 01 marks.

                ## Milestones
                1. RAM, ROM and cache distinguished in a short table.
                2. Secondary storage media compared by capacity, speed, portability and cost.
                3. Storage units from bit to terabyte written in order, with conversions practised.
                4. Ten scenario questions answered choosing a storage medium and giving a reason.
                5. Past-paper storage questions marked at 70 percent or better.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A storage comparison table, ten reasoned scenario answers and past-paper storage questions marked at 70 percent or better."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Write a table distinguishing RAM, ROM and cache"
                - "Compare four secondary storage media on capacity, speed and portability"
                - "Convert ten storage sizes between bytes, kilobytes, megabytes and gigabytes"
                - "Answer the storage questions from two past papers"
            - name: Binary, octal, hexadecimal and BCD conversions
              description: |-
                ## Purpose
                Number base conversions are among the most reliable marks on the paper for anyone who practises and among the most often lost by anyone who does not. Short, regular sets of conversions, including binary addition and whichever signed representations your syllabus lists, make the method automatic.

                ## Milestones
                1. Conversions between decimal, binary, octal and hexadecimal carried out by a written method you can show.
                2. Binary addition practised with carries.
                3. BCD and the signed representations listed in your syllabus, such as sign and magnitude or two's complement, practised with worked examples.
                4. A weekly set of five mixed conversions done for eight weeks.
                5. Past-paper number system questions marked at 80 percent or better.
              priority: medium
              frontmatter:
                mode: building
                output_kind: knowledge
                success_criteria: "Eight weeks of weekly conversion sets completed and past-paper number system questions marked at 80 percent or better."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Write the method for each conversion on one reference sheet"
                - "Work ten binary additions with carries and check them"
                - "Check which signed number representations your syllabus lists"
                - "Do five mixed base conversions and check them @recurring(weekly:thu)"
            - name: Data, information and the documents of information processing
              description: |-
                ## Purpose
                Raw data only becomes useful information after processing, and the syllabus asks where data comes from and which documents carry it: source documents, turnaround documents, and machine-readable and human-readable forms. Linking each idea to something familiar, such as a utility bill with a tear-off payment slip, makes the definitions stick.

                ## Milestones
                1. Data and information distinguished with three local examples.
                2. Characteristics of good information, such as accuracy, timeliness and relevance, listed with an example of each failing.
                3. Source, turnaround, machine-readable and human-readable documents identified from real bills and forms.
                4. Past-paper information processing questions marked at 70 percent or better.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Three real documents labelled by type, a characteristics-of-information sheet and past-paper questions marked at 70 percent or better."
                cadence: phased
                effort_hours_estimate: "3"
              tasks:
                - "Collect three real bills or forms from home"
                - "Label each one as source, turnaround, machine-readable or human-readable"
                - "Write an example of information that fails on accuracy, timeliness and relevance"
                - "Answer the information processing questions from two past papers"
            - name: Data validation, verification and file organisation
              description: |-
                ## Purpose
                Validation and verification are the classic pair that students swap in Paper 01, and file organisation methods such as serial, sequential, direct and indexed sequential appear in both papers. Working through each check with a concrete example, like a range check on an exam score field, and each file method with a real use, settles both topics.

                ## Milestones
                1. Validation and verification defined and distinguished in two sentences.
                2. Range, type, length, presence, format and check digit checks each shown with an example field.
                3. Double entry and proofreading described as verification methods.
                4. Serial, sequential, direct and indexed sequential access matched to suitable uses.
                5. Past-paper questions on these topics marked at 70 percent or better.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A validation checks sheet with an example field for each check, a file organisation table and past-paper questions at 70 percent or better."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Write one example field for each validation check in the syllabus"
                - "Explain in two sentences how verification differs from validation"
                - "Match each file organisation method to a real use"
                - "Answer the validation and file organisation questions from three past papers"
            - name: Computer networks from school LANs to mobile networks
              description: |-
                ## Purpose
                Section 2 of the syllabus expects you to compare network types, the media that connect them and the equipment involved, from a school lab LAN to a WAN linking bank branches across several islands. Drawing the networks you actually use, at home, at school and on a phone, gives every definition a picture to hang on.

                ## Milestones
                1. LAN, MAN, WAN and the other network types in your syllabus compared in a table.
                2. Wired and wireless transmission media compared, including twisted pair, fibre optic, Wi-Fi and mobile data.
                3. Network devices such as modems, routers, switches and network interface cards described with their roles.
                4. A labelled diagram of your school or home network.
                5. Past-paper networking questions marked at 70 percent or better.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A network types table, a labelled diagram of a real network and past-paper networking questions marked at 70 percent or better."
                cadence: phased
                effort_hours_estimate: "5"
              tasks:
                - "Draw a labelled diagram of your home or school network"
                - "Compare four transmission media in a table"
                - "Write one line on what each network device does"
                - "Answer the networking questions from three past papers"
            - name: The internet, intranets, extranets and web technologies
              description: |-
                ## Purpose
                Internet, intranet and extranet are easily confused, and questions on web technologies expect exact terms: URL, HTTP and HTTPS, browser, web server, hyperlink, upload and download. Taking a real website apart piece by piece connects the vocabulary to something you use every day.

                ## Milestones
                1. Internet, intranet and extranet distinguished with a Caribbean organisation as an example of each.
                2. A URL broken into protocol, domain name and path, with each part named.
                3. The web terms in the syllabus listed with one-line definitions.
                4. Uses such as e-commerce, e-learning and online banking described with a benefit and a risk each.
                5. Past-paper web technology questions marked at 70 percent or better.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Three labelled URLs, a web terms sheet and past-paper internet and web questions marked at 70 percent or better."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Break three real URLs into their parts and label them"
                - "Write an example of an intranet and an extranet from a local organisation"
                - "Define each web term listed in the syllabus in one line"
                - "Answer the internet and web questions from two past papers"
            - name: Computer security, cybercrime and protecting data
              description: |-
                ## Purpose
                Security questions ask you to name a threat, explain its effect and propose a fitting countermeasure, and vague answers such as 'use antivirus' score little. Building a threat and countermeasure table, from phishing and malware to identity theft and data lost in a hurricane, prepares precise, two-part answers.

                ## Milestones
                1. A table of threats, their effects and matching physical and software safeguards.
                2. Phishing, malware, hacking, identity theft and the other cybercrimes in the syllabus each described with an example.
                3. Backups, encryption, passwords, firewalls and access controls explained in one sentence each.
                4. Your country's data protection or cybercrime law noted by name as an example.
                5. Past-paper security questions marked at 70 percent or better.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A ten-row threat, effect and safeguard table, one local example and past-paper security questions marked at 70 percent or better."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Build a threat, effect and safeguard table for ten threats"
                - "Find a recent local news story about a cybercrime or data breach"
                - "Look up whether your country has a data protection act and note its name"
                - "Answer the security questions from three past papers"
            - name: ICT in Caribbean workplaces, health effects and IT careers
              description: |-
                ## Purpose
                Section 3 also asks how ICT changes work, health and society: telecommuting, automation, jobs lost and created, repetitive strain and eye strain, and the careers IT opens up. Grounding each answer in a Caribbean example, such as online government services or a call centre, makes answers specific and gives you a first look at where the subject leads.

                ## Milestones
                1. Effects of ICT on at least four fields, such as banking, education, medicine and law enforcement, noted with an example each.
                2. Health risks of computer use listed with ergonomic precautions.
                3. Intellectual property, software piracy and plagiarism explained with examples.
                4. Five IT careers described with their duties and the qualifications they usually need.
                5. Past-paper questions on social and economic impact marked at 70 percent or better.
              priority: low
              frontmatter:
                mode: building
                output_kind: knowledge
                success_criteria: "An ICT effects sheet with four Caribbean examples, five career profiles and past-paper impact questions marked at 70 percent or better."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Write one Caribbean example of ICT changing banking, education, medicine and policing"
                - "List three health risks of computer use and a precaution for each"
                - "Describe five IT careers and their usual entry qualifications"
                - "Answer the social and economic impact questions from two past papers"
            - name: Word processing features the IT syllabus tests
              description: |-
                ## Purpose
                Word processing questions and SBA tasks test specific features, not general typing: headers and footers, columns, tables, find and replace, page layout and mail merge. Practising each feature named in the syllabus on a short, realistic document, such as a sports day notice or a club newsletter, means none of them is met for the first time in the SBA.

                ## Milestones
                1. A checklist of every word processing feature in the syllabus.
                2. A two-page practice document using each feature on the checklist.
                3. A mail merge letter produced from a small data source.
                4. Past-paper word processing questions answered and marked.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A two-page practice document that uses every syllabus feature on the checklist, plus a working mail merge to five recipients."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Copy the word processing features from the syllabus into a checklist"
                - "Make a two-page club newsletter that uses every feature on the list"
                - "Produce a mail merge letter to five people from a small table"
                - "Answer the word processing questions from two past papers"
            - name: Planning and building a simple web page
              description: |-
                ## Purpose
                Web page design sits in the same syllabus section as word processing and usually features in the SBA, where marks go to planning, navigation and sensible use of text, images and links. Planning a small site on paper first, then building it with the tool your school uses, avoids a page that looks busy but misses the brief.

                ## Milestones
                1. The web page design principles in the syllabus listed, such as consistent layout, readable text and working links.
                2. A site of at least two linked pages planned on paper with a navigation sketch.
                3. The pages built with the web authoring tool or code your school uses.
                4. Every link and image tested and the pages checked in a browser.
                5. Past-paper web page design questions answered and marked.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A planned site of at least two linked pages, built and tested with every link and image working in a browser."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Sketch a two-page site about a school club on paper"
                - "Ask your teacher which web authoring tool the SBA expects"
                - "Build the pages with a menu, an image and links between them"
                - "Test every link and image in two different browsers"
            - name: Spreadsheet formulas, functions and cell referencing
              description: |-
                ## Purpose
                Spreadsheet marks in both Paper 02 and the SBA depend on formulas that are correct and can be copied safely, so relative and absolute referencing matters as much as knowing the functions. Building a small workbook, such as a school tuck shop's weekly sales, gives every function and reference type a real job.

                ## Milestones
                1. Every function listed in the syllabus, such as SUM, AVERAGE, MAX, MIN, COUNT and IF, used in a working sheet.
                2. Relative, absolute and mixed references explained and shown in copied formulas.
                3. Formulas written out by hand in exam style, with cell ranges correct.
                4. A sheet printed showing formulas as well as values.
                5. Past-paper spreadsheet questions answered and marked.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A tuck shop workbook using every syllabus function, printed with formulas showing, and past-paper spreadsheet questions marked."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Build a tuck shop sales sheet with a week of made-up data"
                - "Use each function the syllabus lists at least once"
                - "Copy a formula with an absolute reference and explain the result"
                - "Print the sheet with formulas showing"
                - "Answer the spreadsheet questions from two past papers"
            - name: Sorting, filtering and charting spreadsheet data
              description: |-
                ## Purpose
                Once the formulas work, the syllabus moves to managing and presenting data: sorting on one or more columns, filtering, and choosing a chart that suits the question. Practising on a dataset with real variety, such as monthly rainfall or results by subject, shows why a pie chart is the wrong choice for a trend.

                ## Milestones
                1. A dataset of at least thirty rows sorted on one key and then on two.
                2. Filters applied to answer three specific questions about the data.
                3. A column chart, line chart and pie chart each made where they suit the data, with titles, labels and legends.
                4. The choice of each chart type justified in one sentence.
                5. Past-paper questions on data management and charts answered and marked.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A thirty-row dataset sorted, filtered to answer three questions and shown in three labelled charts, each with a one-sentence justification."
                cadence: phased
                effort_hours_estimate: "5"
              tasks:
                - "Find or type a dataset of at least thirty rows, such as monthly rainfall"
                - "Sort the data on two keys and filter it to answer three questions"
                - "Make three chart types with titles, axis labels and legends"
                - "Write one sentence justifying each chart choice"
            - name: Database tables, field types and primary keys
              description: |-
                ## Purpose
                Database questions start from structure: the right tables, sensible field names and data types, and a primary key that identifies every record. Designing a small database for something familiar, such as a school library or a cricket club's members, before touching the software prevents the most common SBA database errors.

                ## Milestones
                1. The database terms in the syllabus, including table, record, field, primary key and foreign key, defined in one line each.
                2. A table design on paper showing field names, data types and the primary key.
                3. The tables created in the database program with sample records entered.
                4. Two tables linked by a relationship on a shared field.
                5. Past-paper database design questions answered and marked.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A two-table database designed on paper, built with ten records per table and linked by a working relationship."
                cadence: phased
                effort_hours_estimate: "5"
              tasks:
                - "Design a two-table library database on paper with field types and keys"
                - "Create the tables and enter ten sample records in each"
                - "Link the tables on a shared field and test the relationship"
                - "Answer the database design questions from two past papers"
            - name: Database queries, forms and reports
              description: |-
                ## Purpose
                Queries are where database marks are won or lost, especially queries with more than one criterion, calculated fields and sorting. Writing each query in plain English first, then building it and checking the result by eye, catches the wrong operator or missing criterion that would otherwise slip into the SBA.

                ## Milestones
                1. Five queries built, including one with two criteria and one calculated field.
                2. Each query's purpose written in plain English beside its design.
                3. A data entry form created for the main table.
                4. A report grouped and sorted, with a title and a summary figure.
                5. Past-paper query questions answered and marked.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Five working queries with plain-English descriptions, a data entry form and a grouped report with a total."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Write five queries in plain English before building them"
                - "Build the queries, including one with two criteria and one calculated field"
                - "Create a data entry form for the main table"
                - "Produce a grouped report with a title and a total"
            - name: Problem definition and the IPO chart
              description: |-
                ## Purpose
                Problem solving in CSEC IT begins before any algorithm: defining the problem, breaking it into parts and laying out inputs, processing and outputs. Skipping the IPO chart is how algorithms end up reading the wrong data or never producing the output the question asked for.

                ## Milestones
                1. The stages of problem solving listed in the syllabus written in order.
                2. Ten past-paper problems defined in one sentence each.
                3. An IPO chart completed for each of those ten problems.
                4. Variables and constants identified with sensible names and data types.
                5. Past-paper problem definition questions marked at 70 percent or better.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Ten completed IPO charts with named variables and data types, and past-paper problem definition questions at 70 percent or better."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Write the problem-solving stages from the syllabus in order"
                - "Define ten past-paper problems in one sentence each"
                - "Complete an IPO chart for each of the ten problems"
                - "List the variables and constants each problem needs, with data types"
            - name: Writing algorithms in pseudocode
              description: |-
                ## Purpose
                Pseudocode is how most Paper 02 problem-solving marks are earned, and examiners look for correct input, processing, output, selection and loops rather than perfect syntax. Writing algorithms in the conventions your teacher uses, from a simple average to a loop that stops on a sentinel value, builds patterns you will reuse in the exam.

                ## Milestones
                1. The pseudocode keywords and conventions your class uses written on one sheet.
                2. Algorithms written using sequence, IF THEN, IF THEN ELSE and nested selection.
                3. FOR, WHILE and REPEAT loops written, including a sentinel-controlled loop.
                4. Ten past-paper algorithm questions answered and marked against the scheme.
                5. Reusable patterns noted, such as running totals, counters and finding the largest value.
              priority: medium
              frontmatter:
                mode: building
                output_kind: knowledge
                success_criteria: "A conventions sheet, a patterns sheet and ten past-paper algorithm questions marked, with at least seven earning full or near-full marks."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Write the class pseudocode conventions on one sheet"
                - "Write an algorithm that reads ten scores and prints their average"
                - "Write a sentinel-controlled loop that stops when minus one is entered"
                - "Answer and mark ten past-paper algorithm questions"
            - name: Flowcharts and trace tables
              description: |-
                ## Purpose
                Flowcharts and trace tables test the same logic from two directions: drawing an algorithm with the correct symbols, and following one step by step to predict its output. Trace tables in particular reward patience and a neat column for every variable, and they offer some of the most predictable marks on Paper 02.

                ## Milestones
                1. The standard flowchart symbols drawn and named.
                2. Five pseudocode algorithms converted to flowcharts with correct symbols and arrows.
                3. Ten trace tables completed for algorithms with loops and selection.
                4. Common tracing slips, such as updating variables in the wrong order, noted in the mistakes log.
                5. Past-paper trace table questions marked at 80 percent or better.
              priority: medium
              frontmatter:
                mode: building
                output_kind: knowledge
                success_criteria: "Five correct flowcharts and ten completed trace tables, with past-paper trace table questions marked at 80 percent or better."
                cadence: phased
                effort_hours_estimate: "5"
              tasks:
                - "Draw and label each flowchart symbol the syllabus uses"
                - "Convert five of your pseudocode algorithms into flowcharts"
                - "Complete ten trace tables from past papers"
                - "Check each trace table answer against the mark scheme"
            - name: Program structure, variables and data types in code
              description: |-
                ## Purpose
                Moving from pseudocode to a real language means exact syntax: a program heading, declared variables with data types, assignment, input and output. Translating your own pseudocode into the language your school uses, and running it, shows what a compiler cares about that a pseudocode marker forgives.

                ## Milestones
                1. The structure of a program in your language written out with each part labelled.
                2. Integer, real, character, string and Boolean variables declared and used.
                3. Five of your pseudocode algorithms translated into code that compiles and runs.
                4. Syntax errors recorded as they happen, with the fix beside each.
                5. Past-paper questions on program structure and data types answered and marked.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Five working programs translated from your own pseudocode, using each data type in the syllabus, with syntax errors logged."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Label the parts of a short sample program in your language"
                - "Write a program that declares and prints one variable of each data type"
                - "Translate five of your pseudocode algorithms into code and run them"
                - "Record each syntax error and its fix in your mistakes log"
            - name: Selection and loops in working programs
              description: |-
                ## Purpose
                IF statements and loops are where programs start doing real work, and where most logic errors hide. Building small programs that make decisions and repeat, such as one that turns a mark into a grade or a loop that totals a week of sales, makes the control structures second nature.

                ## Milestones
                1. A program using IF THEN ELSE and a nested or multi-way selection.
                2. A FOR loop, a WHILE loop and a REPEAT UNTIL loop each written and run, or the loop forms your language provides.
                3. A program combining a loop and selection, such as counting passes in a list of marks.
                4. Each program tested with normal, boundary and invalid data.
                5. Past-paper selection and loop coding questions answered and marked.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Working programs for each selection and loop structure in the syllabus, each tested with normal, boundary and invalid data."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Write a program that turns a mark into a grade using IF statements"
                - "Write a loop that totals seven days of sales and prints the total"
                - "Combine a loop and a condition to count passes in a list of marks"
                - "Test each program with normal, boundary and invalid data"
            - name: Arrays and processing lists of data in code
              description: |-
                ## Purpose
                Arrays let one program handle a whole class of scores or a list of names, and they appear in both pseudocode and coding questions. Practising the standard array jobs, loading, totalling, searching and finding the highest value, covers the patterns examiners return to year after year.

                ## Milestones
                1. A one-dimensional array declared, filled from input and printed.
                2. The total and average of an array's values calculated in a loop.
                3. A linear search written that reports whether and where a value is found.
                4. The highest and lowest values in an array found and printed.
                5. Past-paper array questions answered in pseudocode and in code.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Four working array programs covering loading, totalling, linear search and finding the highest and lowest values."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Write a program that reads ten names into an array and prints them"
                - "Add a loop that totals and averages an array of scores"
                - "Write a linear search for a name entered by the user"
                - "Find and print the highest and lowest scores in the array"
            - name: Testing, debugging and documenting programs
              description: |-
                ## Purpose
                Compiling is not the same as being correct, and the syllabus expects you to tell syntax, logic and runtime errors apart, choose test data and document code so someone else can follow it. Building these habits now pays twice: in Paper 02 answers and in the programming part of the SBA.

                ## Milestones
                1. Syntax, logic and runtime errors distinguished with one example of each from your own programs.
                2. A test plan for one program with normal, boundary and erroneous data and expected results.
                3. A dry run compared with actual output to track down a logic error.
                4. Internal comments and a short user note added to a finished program.
                5. Past-paper questions on errors and testing answered and marked.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A written test plan with expected and actual results for one program, and a commented program with a user note."
                cadence: phased
                effort_hours_estimate: "5"
              tasks:
                - "Find one syntax, one logic and one runtime error in your own programs"
                - "Write a test plan with normal, boundary and erroneous data for one program"
                - "Compare a dry run with the real output to track down a logic error"
                - "Add comments and a short user note to your best program"
            - name: IT SBA brief, mark scheme and scenario choice
              description: |-
                ## Purpose
                The IT SBA is normally built around one scenario that you work through with the productivity tools and with problem solving and programming, and marks depend on meeting the official requirements, not on how impressive the topic sounds. Reading the CXC guidelines and mark scheme with your teacher before settling the scenario prevents weeks of rework later.

                ## Milestones
                1. The current SBA guidelines and mark scheme read in full, with each requirement listed.
                2. The scenario your teacher sets, or the one you propose, approved in writing.
                3. Each SBA component and its school deadline written on the SBA calendar.
                4. A folder for every SBA component created inside the coursework folder.
              priority: high
              deadlineOffsetDays: 60
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "An approved SBA scenario, a requirements checklist taken from the official guidelines and every component deadline on the calendar."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Get the SBA guidelines and mark scheme from your teacher"
                - "List every SBA requirement on one checklist"
                - "Agree the scenario with your teacher and keep the approval"
                - "Write each component's school deadline on the SBA calendar"
            - name: SBA productivity tools for documents, spreadsheets, databases and web pages
              description: |-
                ## Purpose
                Moderators look for each required feature, clearly shown, when they check the productivity part of the SBA, which applies word processing, spreadsheet, database and web page skills to your scenario. Working through the requirements checklist one tool at a time, with printouts or screenshots that prove each feature, keeps the evidence complete.

                ## Milestones
                1. Each productivity requirement on the checklist matched to the file that meets it.
                2. The spreadsheet, database and documents built with every required feature in use.
                3. The web pages built and linked as the guidelines describe.
                4. Evidence such as formula printouts, query designs and screenshots saved and labelled.
                5. Teacher feedback on a full draft received and acted on.
              priority: medium
              deadlineOffsetDays: 120
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "Every productivity requirement on the checklist has a finished file and labelled evidence, with teacher feedback on a full draft acted on."
                cadence: phased
                effort_hours_estimate: "20"
              tasks:
                - "Match each productivity requirement on the checklist to a file"
                - "Build the spreadsheet and database components with all required features"
                - "Save labelled printouts or screenshots that show each feature"
                - "Show your SBA progress to your teacher @recurring(monthly:15)"
            - name: SBA problem solving and programming component
              description: |-
                ## Purpose
                Leaving the programming part of the SBA until the end often reveals a program that no longer matches the algorithm already written up. Developing the problem definition, algorithm or flowchart, trace table and program together, testing as you go, keeps the parts consistent and the code working.

                ## Milestones
                1. The problem for the programming component defined with an IPO chart.
                2. The algorithm written in pseudocode or as a flowchart, as the guidelines require.
                3. A trace table completed for the algorithm with test data.
                4. The program written, compiled and tested against the algorithm.
                5. Code listing, test results and documentation saved as the guidelines require.
              priority: medium
              deadlineOffsetDays: 150
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "An IPO chart, algorithm, trace table and tested program that match each other, saved with the code listing and test results."
                cadence: phased
                effort_hours_estimate: "15"
              tasks:
                - "Write the IPO chart for the SBA programming problem"
                - "Write the algorithm and trace it with three sets of test data"
                - "Code the program and check it matches the algorithm line by line"
                - "Save the code listing, test runs and documentation in the SBA folder"
            - name: Final IT SBA check and submission
              description: |-
                ## Purpose
                Last-minute SBA losses are usually avoidable: missing printouts, a broken link, a file saved in the wrong format or a cover sheet left blank. A full check against the mark scheme a week before the school deadline, with time to fix what it finds, protects marks you have already earned.

                ## Milestones
                1. Every requirement on the checklist ticked, with its evidence located.
                2. All files opened on a different computer to check they work and display correctly.
                3. Cover sheet, candidate details and any declarations completed.
                4. The SBA handed in before the school deadline, with a backup copy kept.
              priority: high
              deadlineOffsetDays: 175
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "The complete SBA, checked against every requirement and tested on a second computer, handed in before the school deadline."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Tick every checklist requirement against its evidence"
                - "Open every SBA file on a different computer and test links and formulas"
                - "Complete the cover sheet and candidate details"
                - "Hand in the SBA before the school deadline and keep a backup copy"
            - name: Examiner reports and mark schemes for Information Technology
              description: |-
                ## Purpose
                CXC publishes subject reports after each sitting that describe how candidates answered each question and where marks were lost. Reading three or four recent IT reports alongside the mark schemes shows exactly what earns credit, and turns the examiners' comments into a list of traps to avoid.

                ## Milestones
                1. The subject reports for the three or four most recent sittings obtained.
                2. Recurring weaknesses noted section by section.
                3. Each recurring weakness turned into a practice question or recall card.
                4. Mark schemes used to rewrite two of your own weak answers to full marks.
              priority: medium
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A list of recurring weaknesses from at least three subject reports, each matched to a practice question, and two answers rewritten to full marks."
                cadence: phased
                effort_hours_estimate: "5"
              tasks:
                - "Download recent CSEC IT subject reports from the CXC website"
                - "Note the weaknesses examiners mention in more than one report"
                - "Turn each repeated weakness into a practice question or recall card"
                - "Read one section of a subject report beside your mistakes log @recurring(monthly:18)"
            - name: Full Information Technology mock exam under exam conditions
              description: |-
                ## Purpose
                A mock taken as seriously as the real thing reveals timing problems and weak sections while there is still time to fix them. Sitting Paper 01 and Paper 02 under exam conditions, then marking and analysing both, sets the agenda for the final revision period.

                ## Milestones
                1. A full past paper set chosen that you have not seen before.
                2. Both papers sat under exam conditions, with time noted per section.
                3. Both papers marked against the mark schemes, or by your teacher.
                4. The five weakest areas from the mock listed and fed into the final revision timetable.
              priority: high
              deadlineOffsetDays: 195
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A full mock of Paper 01 and Paper 02 sat under exam conditions, marked, with the five weakest areas recorded."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Choose a full unseen past paper set with your teacher"
                - "Sit Paper 01 and Paper 02 under exam conditions"
                - "Mark both papers and record the time spent per section"
                - "List the five weakest areas for the final revision timetable"
            - name: Final eight weeks IT revision timetable
              description: |-
                ## Purpose
                Eight weeks before the exam the job changes from learning new material to rehearsing and patching weak spots. A day-by-day timetable built from the mock results, the confidence grid and the mistakes log puts the remaining hours where they will earn the most marks.

                ## Milestones
                1. A daily timetable for eight weeks with IT blocks set around other subjects.
                2. Weak sections from the mock given at least twice the time of strong ones.
                3. Two full timed papers and weekly algorithm practice scheduled.
                4. Each day's block ticked off as done.
              priority: high
              deadlineOffsetDays: 215
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "An eight-week daily revision timetable, built from the mock results, with at least 90 percent of its IT blocks ticked off."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Build an eight-week day-by-day timetable around your other subjects"
                - "Give your mock's weakest sections double revision time"
                - "Schedule two full timed papers and weekly algorithm practice"
                - "Tick off the day's IT revision block @recurring(daily)"
            - name: Last full IT past paper and the final week
              description: |-
                ## Purpose
                New topics have no place in the final week; it is for confidence and small fixes. One last full past paper about ten days before the exam, followed by light review of recall cards, the mistakes log and a few trace tables, keeps you sharp without burning out.

                ## Milestones
                1. A last full past paper sat about ten days before the exam and marked.
                2. Any final gaps patched with short targeted practice.
                3. Recall cards and the mistakes log reviewed in short sessions.
                4. No new topics started in the last three days.
              priority: high
              deadlineOffsetDays: 255
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A final full past paper sat and marked about ten days before the exam, with its gaps patched before exam day."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Sit and mark the last full past paper about ten days out"
                - "Patch the gaps it shows with short targeted questions"
                - "Review the shaky recall cards and the mistakes log in short sessions"
                - "Check the list of permitted exam items with your school and gather them"
            - name: CSEC Information Technology exam day plan
              description: |-
                ## Purpose
                Exam day nerves ease when nothing is left to chance: the time, the room, the permitted items and how you will spend the minutes on each paper. Writing the plan down the week before means the morning is calm and the time goes on the questions.

                ## Milestones
                1. Exam date, time, centre and candidate number confirmed and written down.
                2. Permitted items packed the night before, including spare pens and pencils.
                3. A time plan for each paper written, with a check of remaining time halfway.
                4. A rule decided for questions you are stuck on, such as mark it and move on.
              priority: high
              deadlineOffsetDays: 270
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A written exam day plan with date, centre, candidate number and a time plan for each paper, followed on the day."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Confirm the exam date, time, centre and your candidate number"
                - "Write a time plan for Paper 01 and Paper 02"
                - "Pack the permitted items the night before"
                - "Arrive at the centre at least thirty minutes early"
            - name: Parent support for a CSEC IT student
              description: |-
                ## Purpose
                Parents do not need to know Pascal or databases to help; they help most with access, routine and deadlines. Making sure the computer is available at agreed times, a weekly ten-minute check-in happens and SBA dates are on the family calendar removes the most common reasons IT students fall behind.

                ## Milestones
                1. Agreed times each week when the student has the family computer or a quiet place to use a laptop.
                2. A weekly ten-minute check-in about practice and the SBA.
                3. The school's SBA deadlines on the family calendar.
                4. A backup plan for computer access if the home device breaks, such as a relative's computer or the school lab.
              priority: medium
              frontmatter:
                mode: service
                output_kind: habit
                success_criteria: "Twelve weekly check-ins held, SBA deadlines on the family calendar and a backup plan for computer access written down."
                cadence: rolling
              tasks:
                - "Agree the weekly times your child has the family computer"
                - "Hold a ten-minute IT check-in with your child @recurring(weekly:sun)"
                - "Put the school's SBA deadlines on the family calendar"
                - "Check the school notices or portal for new IT deadlines @recurring(monthly:5)"
            - name: Teacher or tutor tracker for a CSEC IT class
              description: |-
                ## Purpose
                IT teachers juggle lab bookings, software versions and SBA components for a whole class at once. A single tracker showing each student's practice scores, SBA progress and weak sections makes interventions earlier and moderation preparation calmer.

                ## Milestones
                1. A class tracker with columns for each student's scores, SBA components and weak sections.
                2. Lab time booked for practical topics and SBA work across the year.
                3. Students below the target score identified each month with a support plan.
                4. SBA samples prepared for moderation in good time.
              priority: medium
              frontmatter:
                mode: service
                output_kind: artifact
                success_criteria: "A class tracker updated weekly for a full term, with monthly support plans recorded for students below target."
                cadence: rolling
              tasks:
                - "Set up a class tracker with scores, SBA components and weak sections"
                - "Update the class tracker after each practical or test @recurring(weekly:fri)"
                - "Run a timed Paper 01 with the whole class @recurring(monthly:12)"
                - "Book lab time for the SBA weeks at the start of the term"
            - name: Paper 032 alternative for private IT candidates
              description: |-
                ## Purpose
                Private candidates without a school cannot complete the SBA, so CXC offers Paper 032 as the alternative. Checking its current format in the syllabus, then practising the skills it assesses on your own computer, closes the gap a school SBA would normally fill.

                ## Milestones
                1. Registration as a private candidate confirmed through the local CXC registrar.
                2. The Paper 032 format checked in the current syllabus.
                3. Specimen or past Paper 032 questions sourced and practised.
                4. Practical skills in spreadsheets, databases and programming kept active on your own computer.
              priority: low
              frontmatter:
                mode: building
                output_kind: knowledge
                success_criteria: "Private candidate registration confirmed, the Paper 032 format noted and at least three specimen or past Paper 032 questions answered."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "Contact the local CXC registrar about private candidate registration"
                - "Read the Paper 032 section of the current syllabus"
                - "Get specimen or past Paper 032 questions and work through one"
                - "Practise one spreadsheet, database or coding task at the computer each week"
            - name: Grade I answers on long algorithm and programming questions
              description: |-
                ## Purpose
                Top grades depend on the problem-solving and programming questions, where full-mark answers handle every case the question mentions, use clear variable names and end loops correctly. Studying model answers and rewriting your own until they match is the specialist work that separates good from excellent.

                ## Milestones
                1. Five model answers to long algorithm questions studied and annotated.
                2. Your own answers to the same questions rewritten to full marks.
                3. One timed long algorithm or coding question answered each week for eight weeks.
                4. Teacher or tutor marking showing full or near-full marks on three consecutive answers.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Eight weekly timed long algorithm answers completed, with three consecutive answers marked at full or near-full marks."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "Annotate five model answers to long algorithm questions"
                - "Rewrite your own answers to the same questions to full marks"
                - "Answer one long algorithm question under time @recurring(weekly:sat)"
                - "Ask your teacher to mark three answers in a row"
            - name: Results, review requests and the next step after CSEC IT
              description: |-
                ## Purpose
                Results bring decisions: whether to request a review, whether to resit, and whether IT leads on to CAPE Computer Science, CAPE Information Technology or a technical course. Planning these choices before results day means you can act quickly if a deadline applies.

                ## Milestones
                1. Results checked through the school or the CXC online portal.
                2. The review request process and its deadline noted in case a grade looks wrong.
                3. A decision recorded on CAPE Computer Science, CAPE Information Technology, a resit or a technical course.
                4. SBA files and your best programs kept as a portfolio for the next stage.
              priority: medium
              deadlineOffsetDays: 330
              frontmatter:
                mode: event
                output_kind: decision
                success_criteria: "Results checked, the review deadline noted and a written decision on the next IT course or a resit."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Note how and when results are released by your school and CXC"
                - "Check the review request process and deadline before results day"
                - "Compare CAPE Computer Science, CAPE Information Technology and technical courses"
                - "Save your best SBA work and programs as a portfolio"
---

# CSEC Information Technology

This area takes a CSEC Information Technology student from the first syllabus check to results day, in the order CXC sets out the subject. It opens with the foundations (the current syllabus, a diagnostic paper, a two-year plan, a working computer and a programming environment), sets up the practice routines, then works through the syllabus in turn: computer fundamentals and information processing, networks and web technologies, the social and economic impact of ICT, word processing and web page design, spreadsheets, databases, problem solving and program design, and program implementation, before the SBA, examiner reports, the mock and exam day, with projects for parents, teachers and private candidates at the end.

The rhythm is two practice sessions a week, a ten-minute daily algorithm or coding drill, a weekly backup of coursework files, weekly recall cards and number base conversions, a monthly timed Paper 01 and a monthly Paper 02 question, and a termly talk with your teacher. The Skills matrix, Habit tracker, Metrics log and Meeting notes templates pair with it. Installing adds all 50 projects as active, so archive the ones that are not for you yet.
