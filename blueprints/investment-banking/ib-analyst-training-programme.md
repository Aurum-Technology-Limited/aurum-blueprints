---
id: investment-banking.ib-analyst-training-programme
name: IB Analyst Training Programme
description: "From signed offer to first week on the desk: pre-reading, accounting and modelling courses, graded tests, firm templates, cohort and cross-group networking, and the habits that make the training stick."
category: business
version: 1.0.0
tags: [investment-banking, ib-analyst-training-programme, knowledge-worker, student, analyst-training, financial-modelling, accounting, new-analyst]
author: Aurum Technology
starter_structure:
  templates:
    - reading-queue
    - development-plan
    - person
    - course
    - skills-matrix
    - onboarding-30-60-90
  pillars:
    - name: Investment Banking & Advisory
      emoji: "🏦"
      description: "Advisory and capital markets work from the banker's seat: pitch books and valuation, sell-side and buy-side M&A, equity and debt capital markets, leveraged finance, restructuring and fairness opinions, plus the analyst, associate and VP years and the career moves that follow."
      pillarFrontmatter:
        review_cadence: monthly
      areas:
        - name: IB Analyst Training Programme
          description: "Getting the most from the analyst training programme: accounting and modelling courses, tests, firm templates and early networking across groups."
          projects:
            - name: Start date and onboarding paperwork checklist
              description: |-
                ## Purpose
                Between signing the offer and day one there is a pile of admin that can delay your start if it slips: background screening forms, right-to-work documents, bank details for payroll, a signed code of conduct and often a personal trading account disclosure. Clearing it in one sitting, and knowing exactly where and when training begins, removes the most avoidable source of stress in the first month.

                ## Milestones
                1. Every onboarding form from HR completed and submitted, with a copy of each saved privately.
                2. Background screening and right-to-work checks confirmed as cleared by HR.
                3. Training start date, venue, dress code and daily hours written in your calendar.
                4. Existing brokerage or investment accounts listed, ready for the compliance disclosure.

                ## Notes
                Ask HR which personal accounts must be disclosed and by when. Rules on personal dealing differ between banks and countries, so do not guess.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "All onboarding forms are submitted, screening is confirmed as cleared and the training venue and start time are in your calendar."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Open the HR onboarding portal and list every outstanding form"
                - "Gather passport, degree certificate and right-to-work documents in one folder"
                - "Write down every brokerage or investment account you hold for the disclosure"
                - "Email HR to confirm the training venue, start time and dress code"
            - name: Pre-training reading and online modules
              description: |-
                ## Purpose
                Most banks send pre-work weeks before training: online accounting and finance modules, a reading list and sometimes a short entry test. Analysts who arrive having finished it spend the first week consolidating rather than catching up, and the instructors notice who did the work.

                ## Milestones
                1. Every pre-work module the bank assigned listed with its due date.
                2. All mandatory online modules completed and showing as finished in the learning system.
                3. Any entry test passed, or the weak topics from it noted for the refresher.
                4. Three questions written down to ask in the first week of training.

                ## Notes
                Start from the **Reading queue** template for the reading list. Do the mandatory modules before the optional reading; the system records completion and HR checks it.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: knowledge
                success_criteria: "The learning system shows every mandatory pre-work module as complete before the first day of training."
                cadence: one-shot
                effort_hours_estimate: "15"
              tasks:
                - "Log in to the learning system and list each assigned pre-work module"
                - "Block two hours on four evenings to work through the modules in order"
                - "Sit the entry test and note every question you got wrong"
                - "Write three questions to raise with the instructors in week one"
            - name: Accounting refresher before training starts
              description: |-
                ## Purpose
                Instructors move fast on accounting because they assume you can already walk a change through the income statement, balance sheet and cash flow statement. If your degree was not in finance, or it has been a year since you last touched a set of accounts, three weeks of short daily practice closes the gap before the graded test does it for you.

                ## Milestones
                1. The ten classic linking questions answered correctly without notes, such as depreciation up by 10.
                2. A full set of published accounts read, with each line on the cash flow statement traced to its source.
                3. Deferred revenue, inventory, leases and stock-based compensation explained in your own words.
                4. A self-test score of at least 90 percent on a set of linking questions you did not write.
              priority: high
              deadlineOffsetDays: 45
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "You score 90 percent or more on a timed set of three-statement linking questions written by someone else."
                cadence: phased
                effort_hours_estimate: "20"
              tasks:
                - "Download the latest annual report of a listed company you know"
                - "Trace every line of its cash flow statement back to the other two statements"
                - "Answer five three-statement linking questions on paper @recurring(weekly:mon)"
                - "Ask a friend in finance to set you ten questions you have not seen"
            - name: Training calendar with every graded test
              description: |-
                ## Purpose
                Most programmes run a few intense weeks of modules, each ending in a test, then a final exam and a handover to your group. Seeing the whole calendar on one page, with test dates and the minimum pass marks HR quotes, lets you plan revision instead of discovering a test the night before.

                ## Milestones
                1. The full training timetable copied into your own calendar, module by module.
                2. Every graded test marked with its date and the pass mark HR has published.
                3. Revision evenings blocked before each test.
                4. Any clash with personal commitments raised with HR in the first week.

                ## Notes
                Pass marks and the consequences of failing differ by bank. Check what the programme guide says rather than what last year's analysts remember.
              priority: high
              deadlineOffsetDays: 14
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A calendar shows every training module and graded test with dates and pass marks, plus revision blocks before each test."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Find the training timetable in the welcome pack or programme guide"
                - "Add each module and graded test to your calendar with its pass mark"
                - "Block two revision evenings before every test"
                - "Email HR about any clash with a commitment you cannot move"
            - name: Firm template library map
              description: |-
                ## Purpose
                Every bank has its own model templates, page layouts, colour palettes and standard formats, and training is where you first meet them. Knowing where each one lives and which version is current means your first live task starts from the right file rather than a copy of a copy from a departed analyst.

                ## Milestones
                1. The shared drive or library where firm templates live located and bookmarked.
                2. A one-page list of the core templates: comps, precedents, DCF, LBO, merger model, pitch page.
                3. The current version of each identified, with the owner or team that maintains it.
                4. The bank's PowerPoint and Excel add-ins installed and working on your machine.

                ## Notes
                Keep the list on the firm's systems. Do not email templates to a personal address; that is a conduct breach at most banks.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A list on your work drive names each core firm template, its location, its current version and its owner."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Ask the training team where the official template library lives"
                - "List each core model and page template with its file location"
                - "Check with a second-year analyst which version of each is current"
                - "Install the firm's Excel and PowerPoint add-ins and test one feature of each"
            - name: Training notes system by module
              description: |-
                ## Purpose
                You will hear more finance in four weeks than in most degrees, and notes scattered across a notebook, slides and emails are useless when you need the treatment of minority interest at midnight six months later. One structure, one page per module, built from day one, turns training into a reference you actually use on the desk.

                ## Milestones
                1. A notes structure with one section per training module created before day one.
                2. Each module's key formulas, definitions and common mistakes summarised on a single page.
                3. Instructor tips and firm conventions captured separately from general theory.
                4. The notes reviewed and tidied within a week of training ending.

                ## Notes
                Write concepts in your own words and use public companies as examples. Firm case files and slides stay on firm systems.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A notes file holds one summary page per training module, completed within a week of training ending."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Create a notes file with one section for each module on the timetable"
                - "Write a one-page summary at the end of each training day"
                - "Keep a separate page for firm conventions such as colour codes and sign rules"
                - "Tidy and index the notes in the week after training ends"
            - name: Cohort and cross-group contact list
              description: |-
                ## Purpose
                Only in training will you sit in a room with analysts from every coverage and product group at once, and those people become the friends who explain a levfin term sheet or share a precedent list two years later. A simple contact list, made while names are fresh, keeps those links alive after everyone scatters to their floors.

                ## Milestones
                1. A list of the cohort with each person's name, group, office and one thing you talked about.
                2. Contacts added for at least one analyst in every product and coverage group.
                3. The training instructors and HR contacts recorded with what each one handles.
                4. The list reviewed and updated each quarter as people move groups or leave.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A contact list covers at least one analyst in every group plus instructors and HR, updated in the last quarter."
                cadence: phased
                effort_hours_estimate: "3"
              tasks:
                - "Start a contact list with columns for name, group, office and a note"
                - "Add five cohort members after each training day"
                - "Note which instructor or HR contact handles tests, placements and IT"
                - "Update the list for moves and departures @recurring(quarterly)"
            - name: Personal goals for the training programme
              description: |-
                ## Purpose
                Without written goals, training becomes a blur of tests you hope to pass. Three concrete aims, such as a target score on the modelling exam, a named group preference and five senior people to meet, give you something to measure at the end and a story to tell your staffer on day one.

                ## Milestones
                1. A target score set for each graded test and for the final exam.
                2. Three skills named that you want to be strongest in when you reach the desk.
                3. Five people outside your cohort named whom you aim to meet during training.
                4. The goals reviewed against results in the last week of training.

                ## Notes
                Start from the **Development plan** template. Keep goals to what you control: your scores and your preparation, not where others rank.
              priority: medium
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A written development plan holds test targets, three skill goals and five named people, reviewed in the final training week."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Write a target score for each graded test on the calendar"
                - "Name the three skills you most want to bring to the desk"
                - "List five senior bankers or alumni you want to meet during training"
                - "Book a 30-minute slot in the last week to score yourself against the plan"
            - name: Mandatory conduct and compliance e-learning
              description: |-
                ## Purpose
                Before you touch a live deal, the bank requires its conduct modules: market abuse, inside information, anti-money laundering, data protection, information security and the personal dealing policy. They are pass or fail, they are tracked by compliance, and an overdue module can stop you being staffed.

                ## Milestones
                1. Every mandatory compliance module listed with its deadline.
                2. All modules completed with passing scores recorded in the learning system.
                3. The personal account dealing attestation signed and submitted.
                4. The name of your group's compliance contact written in your notes.

                ## Notes
                Treat the attestations as legal statements. If you are unsure whether an account or holding must be declared, ask compliance in writing before signing.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: knowledge
                success_criteria: "The learning system shows every mandatory compliance module passed and the personal dealing attestation submitted before the deadline."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "List every compliance module assigned to you with its due date"
                - "Complete the inside information and market abuse modules first"
                - "Submit the personal account dealing attestation after checking every account"
                - "Save the name and email of your group's compliance officer"
            - name: Friday afternoon training review
              description: |-
                ## Purpose
                The week's material fades by Monday unless you consolidate it. Forty-five minutes each Friday to rewrite the hardest concept, check your test scores and plan next week's revision is the single habit that separates analysts who pass comfortably from those who cram.

                ## Milestones
                1. A review held at the end of every training week.
                2. The hardest concept of each week rewritten in your own words.
                3. Next week's revision priorities listed before you leave on Friday.
                4. A short log of weekly scores kept from the first week to the last.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A weekly review log has one entry for every week of training, each with a rewritten concept and next week's priorities."
                cadence: rolling
              tasks:
                - "Block 45 minutes every Friday afternoon in your calendar"
                - "Rewrite the week's hardest concept and set next week's priorities @recurring(weekly:fri)"
                - "Record any quiz or test scores from the week in the log"
                - "Flag any topic you could not explain to an instructor by Monday"
            - name: Daily technical flashcards
              description: |-
                ## Purpose
                Accounting links, valuation formulas and modelling conventions stick through short repeated recall, not long rereads. Ten minutes of flashcards on the commute, drawn from what you learned that day, builds the instant recall that tests and later senior questions demand.

                ## Milestones
                1. A flashcard deck started with cards for each training module.
                2. New cards added on every training day from that day's material.
                3. Cards you get wrong twice moved to a weak-topics deck.
                4. The weak-topics deck cleared before the final exam.

                ## Notes
                Write cards as questions with one short answer, for example: What happens to cash if accounts receivable rise by 20? Long cards get skipped.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "The flashcard deck covers every module and the weak-topics deck is empty in the week of the final exam."
                cadence: rolling
              tasks:
                - "Install a spaced repetition app or set up a paper card box"
                - "Spend ten minutes on the flashcard deck @recurring(daily)"
                - "Run through the weak-topics deck in one sitting @recurring(weekly:sun)"
                - "Add five new cards from each day's training material"
            - name: Timed practice tests before graded tests
              description: |-
                ## Purpose
                Every graded test is timed, and most points are lost to running out of time or misreading the question, not to not knowing the material. Sitting practice papers under real time limits, then marking them honestly, shows you where your process breaks before it costs you a retake.

                ## Milestones
                1. Practice papers or question banks collected for every graded test.
                2. At least two full timed practice tests sat before each graded test.
                3. Every wrong answer sorted into knowledge gap, speed or misreading.
                4. Practice scores at or above the target score before each real test.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Two timed practice tests are logged before each graded test, with errors categorised and scores at or above target."
                cadence: rolling
              tasks:
                - "Ask the instructors which practice papers or question banks are allowed"
                - "Sit one full timed practice test with your phone in another room @recurring(weekly:thu)"
                - "Sort every wrong answer into knowledge, speed or misreading"
                - "Redo the misread questions the next morning without notes"
            - name: Cohort study group
              description: |-
                ## Purpose
                Explaining a merger model to three colleagues is the fastest way to find out whether you understand it, and the group catches errors you would repeat alone. A small, regular study group of four or five analysts from different groups also builds the cross-group trust training is meant to create.

                ## Milestones
                1. A group of four or five analysts from at least three different groups formed.
                2. A fixed weekly slot and a place agreed.
                3. Each session led by one member who teaches one topic.
                4. The group kept going through the final exam.

                ## Notes
                Keep sessions to 90 minutes with a set topic. Open-ended sessions drift into gossip about placements.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A study group of four or more met every week of training, with a logged topic and leader for each session."
                cadence: rolling
              tasks:
                - "Invite three or four cohort members from different groups to study together"
                - "Agree a weekly 90-minute slot and a room"
                - "Run the weekly session with one member teaching one topic @recurring(weekly:tue)"
                - "Keep a shared list of topics covered and who led them"
            - name: Coffees with analysts and associates across groups
              description: |-
                ## Purpose
                Placements and staffing follow training, and the analysts who know what each group actually does make better choices and get pulled onto better deals. One coffee a week with someone outside your cohort, prepared with two real questions, builds that map without eating into study time.

                ## Milestones
                1. A list of 15 people across coverage and product groups to meet.
                2. One coffee held each week of training and the first months on the desk.
                3. A short note after each coffee: what the group does, hours, who to know.
                4. A thank-you message sent within a day of every coffee.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A coffee log shows at least one cross-group meeting per week of training, each with notes and a thank-you sent."
                cadence: rolling
              tasks:
                - "List 15 analysts and associates across groups you would like to meet"
                - "Ask one person for a 20-minute coffee @recurring(weekly:wed)"
                - "Write three lines of notes and send a thank-you the same day"
                - "Send a short update to the people you met that month @recurring(monthly:9)"
            - name: Instructor feedback and test results log
              description: |-
                ## Purpose
                Test scores and instructor comments are the first written evidence the bank holds about you, and HR may share them with your group. Keeping your own log of every score and comment lets you spot a pattern, such as consistent formatting deductions, and fix it before it becomes your reputation.

                ## Milestones
                1. Every graded test score recorded with the date and the cohort average if shared.
                2. Instructor comments copied word for word into the log.
                3. Recurring themes in the feedback grouped and named.
                4. One action written against each recurring theme.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: artifact
                success_criteria: "A log holds every test score and instructor comment, with recurring themes named and an action against each."
                cadence: rolling
              tasks:
                - "Create a log with columns for date, test, score, comment and action"
                - "Copy in every score and instructor comment from the month @recurring(monthly:20)"
                - "Group the comments into recurring themes"
                - "Ask an instructor how to fix the most frequent deduction"
            - name: Blank-sheet rebuild of each course case
              description: |-
                ## Purpose
                Following an instructor through a model is very different from building it yourself. Rebuilding each course case from an empty workbook a few days later, without the solution file, is the test of whether you can do it at 2am when the associate asks for a quick model.

                ## Milestones
                1. Each modelling case rebuilt from a blank sheet within a week of the class.
                2. The rebuild checked against the solution, with every difference explained.
                3. Time taken recorded for each rebuild.
                4. The three-statement and LBO cases rebuilt a second time, faster.

                ## Notes
                Rebuild on firm machines with the firm template where the course uses one. The point is the logic, not memorising the instructor's layout.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every course modelling case has been rebuilt from blank at least once, with differences to the solution explained and times logged."
                cadence: rolling
              tasks:
                - "Save each course case solution without opening it again for three days"
                - "Rebuild the latest course case from a blank workbook @recurring(weekly:sat)"
                - "Compare the rebuild to the solution and note every difference"
                - "Record how long each rebuild took"
            - name: Monthly check-in with your analyst buddy
              description: |-
                ## Purpose
                Many programmes pair new analysts with a second-year buddy or a mentor, and the pairing fades if nobody books the meetings. A short monthly slot, with questions saved up in advance, gets you the unwritten rules: which VP wants pages printed, how staffing really works, when to push back.

                ## Milestones
                1. Your buddy or mentor's name and preferred contact method recorded.
                2. A recurring monthly meeting agreed.
                3. A running list of questions kept between meetings.
                4. Notes of each meeting kept with the actions you took.

                ## Notes
                Start from the **Person** template to keep notes on your buddy. If the programme does not assign one, ask a second-year in your group directly.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A monthly buddy meeting has happened for at least six months, with questions and actions noted for each."
                cadence: rolling
              tasks:
                - "Find out from HR who your assigned buddy or mentor is"
                - "Ask your buddy for a recurring 30-minute monthly slot"
                - "Bring three saved questions to the buddy meeting @recurring(monthly:12)"
                - "Write down one action after each meeting and do it that week"
            - name: Banking jargon and acronym glossary
              description: |-
                ## Purpose
                Within a week you will hear EV, LTM, NTM, PIK, RCF, TLB, CIM, SPA and dozens of firm-specific shorthand at you, and asking what an acronym means on a live call is awkward. A personal glossary, added to every week, means you can look it up quietly and know it by the time you hit the desk.

                ## Milestones
                1. A glossary started with the acronyms from pre-reading.
                2. New terms added every week of training with a one-line definition.
                3. Firm-specific shorthand marked separately from industry terms.
                4. At least 150 terms defined by the end of the first quarter.
              priority: low
              frontmatter:
                mode: operating
                output_kind: artifact
                success_criteria: "A glossary holds at least 150 defined terms, with firm shorthand marked, by the end of the first quarter."
                cadence: rolling
              tasks:
                - "Start a glossary with every acronym from the pre-reading"
                - "Add the week's new terms with one-line definitions @recurring(weekly:mon)"
                - "Mark firm-only shorthand with a separate tag"
                - "Ask a second-year to check ten definitions you are unsure of"
            - name: Accounting module and its graded test
              description: |-
                ## Purpose
                The accounting module is usually the first graded test and the one instructors use to sort the cohort. It covers revenue recognition, working capital, deferred taxes, leases, goodwill and the three-statement links at a level above most degree courses, and passing it well buys credibility for everything after.

                ## Milestones
                1. Every accounting class attended and summarised on one page.
                2. The module's practice questions completed with errors reviewed.
                3. Deferred tax, leases and goodwill impairment explained to a study partner.
                4. The graded accounting test passed at or above your target score.

                ## Notes
                Start from the **Course** template to track classes, readings and practice sets. If an instructor offers office hours, use them in the first week, not the night before.
              priority: high
              deadlineOffsetDays: 60
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "The graded accounting test is passed at or above the target score in your development plan."
                cadence: phased
                effort_hours_estimate: "30"
              tasks:
                - "Read the accounting module outline and list its topics"
                - "Complete the practice question set after each accounting class"
                - "Explain deferred tax and lease accounting to your study group"
                - "Book an office hours slot with the instructor for your weakest topic"
            - name: Valuation module on comps, precedents and DCF basics
              description: |-
                ## Purpose
                Valuation is taught through the three methods you will touch on almost every pitch: trading comparables, precedent transactions and the discounted cash flow, ending in a football field. Training covers the mechanics; your job here is to understand why each method gives a different answer and what the test will ask you to defend.

                ## Milestones
                1. Enterprise value to equity value bridge done correctly on a real public company.
                2. A small comps set built in class and each multiple explained.
                3. A simple DCF with WACC and two terminal value methods completed.
                4. The graded valuation test passed at or above your target score.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "The graded valuation test is passed and you can explain in two minutes why the three methods give different ranges."
                cadence: phased
                effort_hours_estimate: "25"
              tasks:
                - "Calculate enterprise value for one listed company from its latest filing"
                - "Write one paragraph on why precedents usually sit above trading comps"
                - "Practise both terminal value methods on the course DCF case"
                - "Sit the valuation practice test under time"
            - name: Three-statement model course case
              description: |-
                ## Purpose
                An integrated three-statement model is the core of the modelling course and the base of every later model you build. The course case asks you to project revenue, costs, working capital, capex, debt and interest and make the balance sheet balance, often against the clock in the test.

                ## Milestones
                1. The course three-statement case completed in class with the instructor.
                2. The model rebuilt alone, balancing without a plug.
                3. A circular interest calculation handled with the firm's preferred switch.
                4. The modelling test section passed within the time limit.

                ## Notes
                When the balance sheet does not balance, check the cash flow statement first: most imbalances are a sign error or a missing line there.
              priority: high
              deadlineOffsetDays: 75
              frontmatter:
                mode: learning
                output_kind: artifact
                success_criteria: "Your own rebuild of the course three-statement case balances in every year without a plug and was finished within the test time limit."
                cadence: phased
                effort_hours_estimate: "25"
              tasks:
                - "Build the course three-statement case alongside the instructor"
                - "Rebuild it alone the next weekend from a blank workbook"
                - "Add a circularity switch for interest the way the firm template does"
                - "Time a full rebuild against the test time limit"
            - name: LBO module from paper LBO to full model
              description: |-
                ## Purpose
                Leveraged buyout modelling matters whether you are placed in sponsor coverage, leveraged finance or M&A, and it is the standard test in private equity interviews later. The module usually starts with a paper LBO done in your head and ends with a full model: sources and uses, debt schedule, cash sweep and returns.

                ## Milestones
                1. Three paper LBOs solved without a calculator in under ten minutes each.
                2. The course LBO model built with sources and uses, debt tranches and a cash sweep.
                3. IRR and money multiple sensitivity tables completed.
                4. The LBO section of the modelling test passed.
              priority: high
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "You can solve a paper LBO in ten minutes and your course LBO model produces returns that match the solution."
                cadence: phased
                effort_hours_estimate: "20"
              tasks:
                - "Solve one paper LBO on paper with a timer running"
                - "Build the course LBO model with every debt tranche and the cash sweep"
                - "Add IRR sensitivity to entry and exit multiples"
                - "Explain the drivers of returns to your study group in five minutes"
            - name: Merger model module basics
              description: |-
                ## Purpose
                Accretion and dilution is the merger model's headline, and training teaches the mechanics: purchase price, financing mix, pro forma earnings and share count. Understanding it in training means your first live merger model is a question of the client's numbers, not the method.

                ## Milestones
                1. The course merger model completed with cash, stock and mixed financing cases.
                2. Pro forma EPS accretion or dilution explained in a sentence for each case.
                3. A quick rule-of-thumb check on accretion done by comparing yields.
                4. The merger section of any test passed.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Your course merger model shows accretion or dilution for three financing mixes and you can explain each result in one sentence."
                cadence: phased
                effort_hours_estimate: "12"
              tasks:
                - "Build the course merger model alongside the instructor"
                - "Switch the financing between all cash, all stock and a mix"
                - "Write a one-line explanation of why each case is accretive or dilutive"
                - "Check one result using the earnings yield versus cost of financing shortcut"
            - name: Credit and debt fundamentals module
              description: |-
                ## Purpose
                Anyone heading to leveraged finance, debt capital markets, restructuring or sponsor coverage needs credit thinking from the start: debt ratios, interest cover, covenants, seniority and how lenders read a business. If your programme's credit content is thin, this project fills it with the basics every credit-facing analyst is expected to know.

                ## Milestones
                1. Net debt to EBITDA, interest cover and fixed charge cover calculated for a public company.
                2. The capital structure of one listed issuer drawn from senior secured to equity.
                3. Maintenance and incurrence covenants explained with an example of each.
                4. Any credit module test passed, or a self-test completed if none is graded.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "You can calculate the main credit ratios for a public company and draw its capital structure by seniority from its filings."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "Pick one listed company with bonds and loans outstanding"
                - "Calculate its net debt to EBITDA and interest cover from the latest filing"
                - "Draw its capital structure in order of seniority"
                - "Write a short explanation of maintenance versus incurrence covenants"
            - name: Presentation, writing and email standards module
              description: |-
                ## Purpose
                Training usually includes a session on page standards, email etiquette and how to write for seniors and clients, and it is easy to dismiss next to modelling. Yet the first errors seniors notice are a misaligned chart, a typo in a client email or a reply-all to the wrong list, so these standards are worth practising deliberately.

                ## Milestones
                1. The firm's page standards summarised on one sheet: fonts, footnotes, sources, colours.
                2. One course pitch page produced that passes the instructor's check first time.
                3. Three sample emails to a senior banker written and reviewed by a second-year.
                4. A personal rule set for email recipients, subject lines and attachments written.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A course pitch page passes the instructor's check without corrections and a second-year has signed off three sample emails."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Summarise the firm's page standards on a single sheet"
                - "Produce the course pitch page and ask for the instructor's check"
                - "Write three practice emails to a senior and have a second-year review them"
                - "Write your own rules for checking recipients before sending"
            - name: Market data terminal training and certifications
              description: |-
                ## Purpose
                Banks rely on data platforms such as Bloomberg, FactSet, Capital IQ or Refinitiv for comps, deal data and filings, and most offer free training and short certifications. Getting comfortable with the platforms your bank licenses during training saves hours on your first comps request.

                ## Milestones
                1. The data platforms your bank licenses identified and logins confirmed.
                2. The vendor's introductory training or certification completed for the main platform.
                3. Share price history, consensus estimates and a deal screen pulled successfully.
                4. A short cheat sheet of the functions you use most saved on your work drive.
              priority: low
              frontmatter:
                mode: building
                output_kind: knowledge
                success_criteria: "You hold the vendor's introductory certification on your bank's main data platform and have pulled prices, estimates and a deal screen."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Ask the training team which data platforms the bank licenses"
                - "Complete the vendor's introductory course for the main platform"
                - "Pull consensus estimates and a precedent deal screen for one company"
                - "Learn one new platform function and add it to your cheat sheet @recurring(monthly:24)"
            - name: Industry primer for your assigned group
              description: |-
                ## Purpose
                Once you know your group, the gap between training and the desk is sector knowledge: the key metrics, the main listed players, recent deals and how the sector is valued. A short primer built in the last weeks of training means your first pitch is not also your first look at the industry.

                ## Milestones
                1. The ten largest listed companies in the sector named with their main business lines.
                2. The sector's key operating and valuation metrics listed and defined.
                3. Five recent deals in the sector summarised in a line each.
                4. A two-page primer reviewed by an analyst or associate in the group.

                ## Notes
                Ask the agent to draft a first list of sector metrics, then check every one against group pitch books and research you have access to.
              priority: medium
              frontmatter:
                mode: research
                output_kind: artifact
                success_criteria: "A two-page sector primer with players, metrics and five recent deals has been reviewed by someone in your group."
                cadence: one-shot
                effort_hours_estimate: "10"
              tasks:
                - "List the ten largest listed companies in your group's sector"
                - "Write down the metrics the sector is valued on, such as EV to EBITDA or price to book"
                - "Summarise five recent sector deals in one line each"
                - "Read a monthly sector update and add one fact to the primer @recurring(monthly:5)"
            - name: Group placement preferences decision
              description: |-
                ## Purpose
                At banks that place analysts after training, the preference form can shape the first two years: deal types, hours, exit routes and who trains you. A decision made from coffees, data and honest priorities is better than one made from the loudest rumour in the cohort.

                ## Milestones
                1. Every group open to your class listed with its deal types and typical hours.
                2. At least two people spoken to in each of your top four groups.
                3. Your own priorities ranked: learning, deal flow, exits, culture, location.
                4. The preference form submitted on time with a ranked list you can explain.

                ## Notes
                Groups vary by bank and year, so ignore league reputations from forums and ask current analysts about the last twelve months.
              priority: high
              deadlineOffsetDays: 60
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "The placement preference form is submitted before the deadline with a ranked list backed by notes from at least two people per top group."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Find the placement process and form deadline in the programme guide"
                - "List every group open to your class with deal types and hours"
                - "Book two coffees in each of your top four groups"
                - "Rank your own priorities before ranking the groups"
            - name: Recovery plan after a failed training test
              description: |-
                ## Purpose
                Failing a training test is more common than people admit, and most banks allow a retake, but the clock is short and the second attempt is watched. A calm plan, built in the first evening after the result, turns a bad day into a pass and a story about how you respond to setbacks.

                ## Milestones
                1. The retake rules, date and pass mark confirmed with HR or the instructors.
                2. The failed paper reviewed question by question with an instructor.
                3. A study plan written covering every weak topic before the retake.
                4. The retake passed and a short note sent to the instructor who helped.

                ## Notes
                Ask what happens after a second failure so you know the stakes, then put that out of mind and work the plan.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: event-completion
                success_criteria: "The retake is passed within the window HR set, after a written plan covering every weak topic from the first attempt."
                cadence: one-shot
                effort_hours_estimate: "15"
              tasks:
                - "Email HR or the instructors to confirm retake rules and date"
                - "Ask an instructor to walk through your paper question by question"
                - "Write a study plan with every weak topic and an evening for each"
                - "Sit two timed practice tests before the retake"
            - name: Deciding whether to sit an extra finance exam in year one
              description: |-
                ## Purpose
                Some new analysts sign up for CFA Level I, a modelling certification or a valuation course during their first year, and some regret it when deal hours hit. Deciding on purpose, with the bank's sponsorship policy and your likely hours in front of you, avoids paying for an exam you cannot prepare for.

                ## Milestones
                1. The bank's policy on sponsoring exams and study leave confirmed.
                2. Two or three options compared on cost, study hours and relevance to your group.
                3. Your likely deal hours in the first year estimated with a second-year in your group.
                4. A written decision: which exam, if any, and in which sitting.

                ## Notes
                Check current fees, dates and structure on the awarding body's website rather than relying on old forum posts.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A written decision names which extra exam you will sit, if any, and the sitting, based on sponsorship policy and expected hours."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Ask HR whether the bank sponsors exams or gives study leave"
                - "Compare two or three exams on cost, study hours and relevance"
                - "Ask a second-year in your group how many weekends they actually had free"
                - "Write down your decision and the sitting you are aiming for"
            - name: Mid-programme skills gap analysis
              description: |-
                ## Purpose
                Halfway through training you have enough scores and feedback to see your real strengths and gaps, and still enough time to act. Scoring yourself on each core skill, then checking that against the evidence, shows where the second half of training should go.

                ## Milestones
                1. Each core skill scored from one to five: accounting, valuation, modelling, pages, writing, data.
                2. Each score checked against actual test results and instructor comments.
                3. The two weakest skills chosen for extra work in the second half.
                4. A rescore done at the end of training to measure the change.

                ## Notes
                Start from the **Skills matrix** template. Where your self-score and the evidence disagree, trust the evidence.
              priority: medium
              frontmatter:
                mode: research
                output_kind: artifact
                success_criteria: "A skills matrix is scored at the midpoint and at the end of training, with the two weakest skills named and their change recorded."
                cadence: phased
                effort_hours_estimate: "3"
              tasks:
                - "Score yourself one to five on each core training skill"
                - "Check each score against your test results and feedback log"
                - "Pick the two weakest skills and plan extra hours for each"
                - "Rescore in the last week of training and note the change"
            - name: Desk reference cards from training notes
              description: |-
                ## Purpose
                On the desk you will not reopen a 200-page training manual, but you will glance at a single sheet of the formulas and conventions you keep forgetting. Turning your notes into a handful of reference cards, one per method, makes training useful in the moments that count.

                ## Milestones
                1. One reference card each for accounting links, EV bridge, DCF, LBO and merger model.
                2. Each card limited to one page of formulas, conventions and common errors.
                3. The cards checked by a second-year for firm-specific conventions.
                4. The cards saved somewhere you can open in ten seconds on the desk.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Five one-page reference cards exist, checked by a second-year and saved where you can open them quickly at your desk."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Pick the five methods you most expect to use in your group"
                - "Condense each method's notes to one page of formulas and errors"
                - "Ask a second-year to mark anything that differs from firm convention"
                - "Save the cards to a folder pinned on your work desktop"
            - name: Choosing a senior mentor outside your group
              description: |-
                ## Purpose
                Your staffer and group seniors judge your work, which makes some questions hard to ask them. A mentor at associate or VP level in another group, found through training sessions or the bank's mentoring scheme, gives you a candid view on reviews, placements and when to raise a problem.

                ## Milestones
                1. Two or three possible mentors identified from training speakers or the mentoring scheme.
                2. An introductory coffee held with each.
                3. One mentor asked and agreed to meet each quarter.
                4. The first quarterly conversation held with a written list of questions.
              priority: low
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A named mentor outside your group has agreed to meet quarterly and the first meeting has taken place."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Note the associates and VPs who spoke well in training sessions"
                - "Ask HR whether the bank runs a formal mentoring scheme"
                - "Hold an introductory coffee with two or three candidates"
                - "Meet your chosen mentor with a written list of questions @recurring(quarterly)"
            - name: Housing and commute for the training period
              description: |-
                ## Purpose
                Training days run long and often start early, sometimes in a different city from your eventual office. Sorting where you will live and how you will get in before day one stops a two-hour commute or a short-let falling through from eating the energy training needs.

                ## Milestones
                1. The training location confirmed, and whether it differs from your permanent office.
                2. Accommodation for the training weeks booked or confirmed.
                3. The commute tested once at the real start time.
                4. Any relocation allowance claimed with receipts kept.

                ## Notes
                Ask HR what relocation or temporary housing support the bank offers before you book anything yourself.
              priority: medium
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "Accommodation for the training period is confirmed, the commute is tested and any relocation allowance has been claimed."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Ask HR whether training runs in a different city from your office"
                - "Check what relocation or temporary housing support the bank provides"
                - "Book or confirm accommodation for the training weeks"
                - "Do a trial commute at the real start time"
            - name: First day of analyst training
              description: |-
                ## Purpose
                Day one is badge photos, laptops, welcome speeches and a room full of people you will work beside for years. Arriving early, prepared and with the logistics already sorted lets you spend the day meeting people instead of chasing IT.

                ## Milestones
                1. Documents, ID and any forms HR asked for packed the night before.
                2. Arrival at least 20 minutes early on the first morning.
                3. Laptop, email and badge working by the end of the day.
                4. Ten cohort members met and added to your contact list.
              priority: medium
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "On the first day you arrived early, had working systems and a badge by the evening and added ten names to your contact list."
                cadence: one-shot
                effort_hours_estimate: "10"
              tasks:
                - "Pack ID, documents and forms HR listed the night before"
                - "Plan to arrive 20 minutes before the published start time"
                - "Raise any login or laptop problem with IT before lunch"
                - "Add ten new names to your cohort contact list that evening"
            - name: Final modelling exam
              description: |-
                ## Purpose
                Expect the final exam to ask you to build or complete a model under time pressure, combining everything from accounting links to valuation, and some banks share results with your group. Treating it as a dated event with a revision plan, rather than another test, gives you the best chance of a clean result.

                ## Milestones
                1. Exam format, time limit and allowed materials confirmed with the instructors.
                2. Two full timed mock exams sat in the fortnight before.
                3. A personal checklist of the errors you make most often written and practised.
                4. The final exam passed at or above your target score.

                ## Notes
                Bring your own checks into the exam: balance check, cash check, sign of every cash flow line. A balanced model with one wrong sign still loses marks.
              priority: high
              deadlineOffsetDays: 90
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "The final modelling exam is passed at or above the target score in your development plan."
                cadence: one-shot
                effort_hours_estimate: "20"
              tasks:
                - "Ask the instructors for the exam format, time limit and allowed materials"
                - "Sit a full timed mock exam two weeks out and another one week out"
                - "Write your five most frequent errors on a card and check for them"
                - "Sleep a full night before the exam rather than revising late"
            - name: Mock deal case team presentation
              description: |-
                ## Purpose
                Many programmes end with a team case: a mock sale or acquisition where a small team builds the analysis and presents to senior bankers. It is the first time seniors see you work in a team under deadline, and the presentation is often remembered longer than any test score.

                ## Milestones
                1. Team roles agreed in the first meeting: model, pages, story, presenter.
                2. A work plan with internal deadlines agreed by the whole team.
                3. A full dry run held the day before with timing checked.
                4. The case presented on time and the panel's feedback written down.

                ## Notes
                Agree one owner for the final model and one for the final deck. Two people editing the same file the night before is how errors reach the panel.
              priority: medium
              deadlineOffsetDays: 80
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "The team case is presented on time after a full dry run and the panel's feedback is recorded in your feedback log."
                cadence: one-shot
                effort_hours_estimate: "25"
              tasks:
                - "Agree team roles and one owner each for the model and the deck"
                - "Write a work plan with internal deadlines back from presentation day"
                - "Hold a timed dry run the day before"
                - "Write down the panel's feedback immediately after presenting"
            - name: Handover from training to your group
              description: |-
                ## Purpose
                Your first weeks on the desk decide your early reputation more than any training score. A short 30, 60 and 90 day plan, agreed with your staffer or a senior analyst, sets out what good looks like and turns training into early, reliable work on live deals.

                ## Milestones
                1. Your staffer and the group's senior analysts met in the first week.
                2. A 30, 60 and 90 day plan written with what you aim to learn and deliver.
                3. Your first live task delivered on time and checked twice.
                4. A 30-day check-in held with your staffer to review the plan.

                ## Notes
                Start from the **Onboarding 30/60/90** template. Ask how the group likes work handed over: email, printed pages or a shared folder.
              priority: high
              frontmatter:
                mode: event
                output_kind: deliverable
                success_criteria: "A 30, 60 and 90 day plan exists and the 30-day check-in with your staffer has taken place."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Introduce yourself to your staffer and the group's senior analysts"
                - "Write a 30, 60 and 90 day plan and share it with your staffer"
                - "Ask how the group prefers work to be handed over"
                - "Book a 30-day check-in with your staffer"
            - name: Group heads networking session
              description: |-
                ## Purpose
                Programmes often run evenings or lunches where group heads and MDs speak to the class. Senior bankers remember the analyst who asked a sharp question about their sector, so preparing for these sessions is a small investment with a long tail.

                ## Milestones
                1. The speakers and their groups known before each session.
                2. One informed question prepared for each speaker, based on a recent deal or sector trend.
                3. At least one senior banker spoken to directly at each session.
                4. A thank-you note or follow-up sent where a real conversation happened.
              priority: low
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "For each networking session you prepared a question per speaker and sent at least one follow-up afterwards."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Find out which group heads are speaking at the next session"
                - "Read one recent deal announcement from each speaker's group"
                - "Prepare one question per speaker that shows you did the reading"
                - "Send a short follow-up to anyone you had a real conversation with"
            - name: Shadowing a product group during training
              description: |-
                ## Purpose
                Some programmes allow a shadowing afternoon or an elective week with a product group such as equity capital markets, leveraged finance or restructuring, and many analysts never ask. Sitting beside a product team for a few hours shows how they work with coverage bankers and gives you contacts you will call on your first live deal.

                ## Milestones
                1. The programme rules on shadowing or electives confirmed with HR.
                2. One product group chosen that works closely with your likely placement.
                3. A half day spent with an analyst or associate in that group.
                4. A short note written on what the group does for coverage teams and who to call.

                ## Notes
                Ask early in training; slots go to whoever asks first, and live deals can cancel a shadowing day at short notice.
              priority: low
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A half day has been spent shadowing a product group, with a written note of what they do and two named contacts."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Ask HR whether the programme allows shadowing or an elective week"
                - "Pick the product group that works most with your likely placement"
                - "Ask an analyst in that group to host you for half a day"
                - "Write a one-page note on the group and its two most useful contacts"
            - name: Final-year student with a signed analyst offer
              description: |-
                ## Purpose
                A student who signs a full-time offer a year early has a choice: coast, or arrive ready. A light plan across the final year, fitted around exams and dissertation, keeps accounting and modelling warm without risking your degree classification, which some offers still depend on.

                ## Milestones
                1. The offer conditions checked, including any minimum degree result.
                2. A monthly study plan written that pauses during your own exam periods.
                3. An accounting and a modelling course completed before graduation.
                4. Contact kept with HR and your future cohort through any pre-start events.

                ## Notes
                Your degree comes first. Most offers are conditional on graduating, and some on a minimum grade.
              priority: medium
              deadlineOffsetDays: 180
              frontmatter:
                mode: building
                output_kind: knowledge
                success_criteria: "You meet the offer's degree conditions and have completed an accounting and a modelling course before your start date."
                cadence: phased
                effort_hours_estimate: "40"
              tasks:
                - "Reread the offer letter for any degree result conditions"
                - "Write a monthly study plan that pauses during your exam periods"
                - "Choose one accounting course and one modelling course to finish before graduating"
                - "Reply to every pre-start event invitation from HR"
            - name: Summer intern converting to a full-time analyst
              description: |-
                ## Purpose
                Returning interns arrive at training with a head start on systems and people but often with gaps, because internships teach what the deal needed rather than the full curriculum. Listing what you actually did and did not do over the summer stops you skipping the topics your internship never touched.

                ## Milestones
                1. A list of the work you did as an intern, by model and page type.
                2. Training topics you never touched as an intern marked as priorities.
                3. Your intern group and staffer told you are back and in training.
                4. The intern contacts in other groups reconnected with during training.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A gap list compares your internship work to the training syllabus and every untouched topic has a study block."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "List every model and page type you worked on as an intern"
                - "Mark the training topics your internship never covered"
                - "Email your intern staffer to say you are back and in training"
                - "Message three intern contacts in other groups to meet during training"
            - name: Career switcher or non-finance degree ramp-up
              description: |-
                ## Purpose
                Engineers, scientists, lawyers and humanities graduates are hired into banking every year and often do well, but training assumes vocabulary they have never used. A structured ramp-up across accounting, corporate finance and the language of deals lets you spend training learning the models, not the words.

                ## Milestones
                1. A self-assessment against the training syllabus completed.
                2. An introductory accounting and corporate finance course finished before day one.
                3. A study partner from a finance background agreed for the training weeks.
                4. Every graded test passed at the first attempt.

                ## Notes
                Your background is an asset in sector groups: engineers in energy and industrials, scientists in healthcare. Say so when placement comes round.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "You complete an introductory accounting and corporate finance course before day one and pass every graded training test first time."
                cadence: phased
                effort_hours_estimate: "35"
              tasks:
                - "Score yourself against each topic in the training syllabus"
                - "Enrol in an introductory accounting and corporate finance course"
                - "Ask a cohort member with a finance degree to be your study partner"
                - "Note where your own background fits a sector group"
            - name: International hire relocating for training
              description: |-
                ## Purpose
                Moving country for the job often means training in a regional hub, then flying to your home office, all while sorting a visa, a bank account and somewhere to live. Planning the admin around training rather than during it protects the test scores that matter.

                ## Milestones
                1. Visa or work permit status confirmed by HR or the bank's immigration adviser.
                2. Temporary housing and a local bank account arranged for the training location.
                3. Travel dates set between the training city and your home office.
                4. Tax and payroll questions passed to the bank's mobility team or a qualified adviser.

                ## Notes
                Immigration and tax are for the bank's mobility team and qualified advisers. Keep copies of every document and date in one folder.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A relocation folder holds visa confirmation, housing, bank account and travel dates, all sorted before training begins."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "Ask HR for the name of the bank's immigration or mobility contact"
                - "Create one folder for visa, housing, payroll and travel documents"
                - "Book housing near the training venue for the full training period"
                - "List tax and payroll questions for the mobility team or an adviser"
            - name: Off-cycle joiner who missed cohort training
              description: |-
                ## Purpose
                Joining mid-year, through a lateral hire or a delayed start, often means recorded training videos and a short induction instead of the full programme. Rebuilding the essentials yourself, with a buddy to check your work, keeps you level with a class that started months earlier.

                ## Milestones
                1. The training materials available to off-cycle joiners obtained from HR.
                2. A buddy assigned or found among last cohort's analysts.
                3. The core modules and tests worked through on a written schedule.
                4. A weekly check-in with your buddy held until the core modules are done.
              priority: medium
              frontmatter:
                mode: building
                output_kind: knowledge
                success_criteria: "You have completed the core training modules and any tests on a written schedule, with weekly buddy check-ins logged."
                cadence: phased
                effort_hours_estimate: "40"
              tasks:
                - "Ask HR what training materials and tests off-cycle joiners can access"
                - "Ask an analyst from the latest class to be your buddy"
                - "Write a schedule to cover the core modules in your first six weeks"
                - "Meet your buddy to check progress @recurring(weekly:tue)"
            - name: Building your own training at a bank without a programme
              description: |-
                ## Purpose
                Analysts at boutiques, regional banks and small Caribbean or emerging market advisory firms often start with a desk, a login and a live deal, and no formal training. Assembling a structured curriculum from public courses, the firm's past work and senior time gives you what bigger banks teach in a month.

                ## Milestones
                1. A curriculum written covering accounting, valuation, modelling and page standards.
                2. A paid or free external modelling course chosen, with the firm asked to sponsor it.
                3. A senior agreed to review one practice model a month.
                4. The curriculum finished within six months, with each module signed off.

                ## Notes
                Ask your manager for two protected hours a week. Small firms often agree when you show a written plan and how it helps their deals.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A written curriculum is complete within six months, each module signed off by a senior at the firm."
                cadence: phased
                effort_hours_estimate: "60"
              tasks:
                - "Write a curriculum covering accounting, valuation, modelling and pages"
                - "Ask your manager to sponsor one external modelling course"
                - "Ask a senior to review one practice model a month"
                - "Spend a protected two-hour block on the curriculum @recurring(weekly:thu)"
            - name: Self-study plan for a specialist group
              description: |-
                ## Purpose
                Groups such as financial institutions, real estate, natural resources, insurance and infrastructure value companies on their own metrics and statements, and core training barely touches them. A focused self-study plan in your first months bridges the gap between general training and what the group expects.

                ## Milestones
                1. The specialist metrics and statements of your sector listed, such as book value, reserves, NAV or regulatory capital.
                2. A sector valuation method practised on a public company.
                3. Two group models or pitch books studied with a senior's permission.
                4. A short self-test on sector topics passed and checked by an associate.
              priority: low
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "You have practised your sector's main valuation method on a public company and an associate has checked your self-test."
                cadence: phased
                effort_hours_estimate: "20"
              tasks:
                - "Ask an associate which sector topics core training left out"
                - "Practise the sector valuation method on one listed company"
                - "Ask permission to study two past group models or pitch books"
                - "Study one specialist topic from your plan @recurring(monthly:16)"
            - name: Analyst buddy for the next training class
              description: |-
                ## Purpose
                In your second year you may be asked, or can volunteer, to buddy a new analyst through training. Doing it well means passing on the unwritten rules without the bad habits, and seniors notice who develops juniors when promotion comes round.

                ## Milestones
                1. Your name put forward to HR as a buddy for the incoming class.
                2. A one-page guide written of what you wish you had known in training.
                3. Regular check-ins held with your buddy through training and their first months.
                4. Feedback from your buddy gathered and passed to HR.
              priority: low
              frontmatter:
                mode: service
                output_kind: habit
                success_criteria: "You buddied a new analyst through training, with a written guide shared and their feedback passed to HR."
                cadence: phased
                effort_hours_estimate: "15"
              tasks:
                - "Tell HR you would like to buddy an incoming analyst"
                - "Write a one-page guide of the things you wish you had known"
                - "Book check-ins with your buddy through training and their first months"
                - "Ask your buddy for honest feedback and pass it to HR"
            - name: Feedback to improve the training programme
              description: |-
                ## Purpose
                Training teams redesign courses each year and genuinely want specific feedback from analysts who have now used the material on live deals. A short, constructive note six months after training, naming what helped and what was missing, improves the next class's start and marks you as someone who thinks about the institution.

                ## Milestones
                1. The post-training survey completed honestly within its deadline.
                2. Six months of desk experience compared against what training covered.
                3. A one-page note of three things to keep and three to change sent to the training team.
                4. Any follow-up conversation with the training team held.

                ## Notes
                Keep it about content and format, never about named instructors or colleagues.
              priority: low
              frontmatter:
                mode: service
                output_kind: deliverable
                success_criteria: "A one-page note with three things to keep and three to change has been sent to the training team."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Complete the post-training survey before it closes"
                - "List the desk tasks in your first six months that training did not prepare you for"
                - "Draft a one-page note with three things to keep and three to change"
                - "Send the note to the training team and offer a short call"
            - name: Running a modelling clinic for summer interns
              description: |-
                ## Purpose
                Interns get a compressed version of training and then struggle on live work. A senior analyst who runs one or two short clinics on the three-statement model and the firm template saves the group hours of rework and gains practice explaining technical material clearly, a skill associates are judged on.

                ## Milestones
                1. The idea agreed with your staffer or the intern programme lead.
                2. A one-hour clinic built around a public company and the firm template.
                3. The clinic delivered to the intern class with questions answered.
                4. Interns' feedback collected and the material revised for next year.

                ## Notes
                Use a public company, not a client. Ask the agent to draft practice questions from your outline, then check every answer yourself.
              priority: low
              frontmatter:
                mode: service
                output_kind: deliverable
                success_criteria: "A one-hour modelling clinic was delivered to the intern class and their feedback was used to revise the material."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Ask your staffer or the intern lead whether a clinic would help"
                - "Build a one-hour clinic around a public company and the firm template"
                - "Deliver the clinic and note the questions interns asked"
                - "Collect intern feedback and revise the material for next year"
---

# IB Analyst Training Programme

This area is for students holding an offer and new analysts in the weeks of formal training, when a bank teaches accounting, valuation and modelling at speed, grades you on it and quietly forms its first view of you. It starts with the foundations (start logistics, pre-reading, an accounting refresher, the test calendar, the template library and mandatory conduct modules), then the weekly machinery of reviews, flashcards, practice tests, study groups and coffees, the course modules themselves from three statements to leveraged buyouts, decisions about group placement, retakes and extra exams, the dated events from day one to the final exam and the desk handover, variants for students, interns, career switchers, international hires, off-cycle joiners and analysts at banks with no formal programme, and finally the work of a second-year who helps train the next class.

What repeats is a Friday training review, a short daily flashcard session, weekly practice tests, study group meetings, blank-sheet rebuilds and coffees across groups, plus monthly feedback logs and mentor check-ins. The Reading queue, Development plan, Person, Course, Skills matrix and Onboarding 30/60/90 templates pair with the projects that name them. Firm training cases, templates and models belong to the bank: keep your personal notes to concepts and public examples, never copies of firm materials. Installing adds all 50 projects as active, so archive the ones that are not for you yet.
