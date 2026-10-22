---
id: professions-trades.defence-force-military-career
name: Defence Force and Military Career
description: "The route into a defence force or military, from eligibility and selection through basic training, a trade, promotion and reserve service to resettlement and life after you leave."
category: personal
version: 1.0.0
tags: [professions-trades, defence-force-military-career, everyone, student, defence-force, military, enlistment, coast-guard]
author: Aurum Technology
starter_structure:
  templates:
    - metrics-log
    - job-application
    - training-program
    - monthly-budget-bills
    - development-plan
    - resume
  pillars:
    - name: Professions & Trades
      emoji: "🧰"
      description: "Specific careers from first interest to established practitioner: entry qualifications, training and apprenticeships, licensing and registration, the first job, specialising, and working abroad, across health, law, teaching, engineering, the skilled trades, public service, hospitality and more."
      pillarFrontmatter:
        review_cadence: quarterly
      areas:
        - name: Defence Force and Military Career
          description: "Joining the defence force or military: enlisted and officer routes, selection, basic training, trades and specialisms, and life after service."
          projects:
            - name: Testing whether military life suits you
              description: |-
                ## Purpose
                Recruiters see plenty of applicants who like the idea of the uniform but have never thought about early mornings, being told where to live, long periods away from home and following lawful orders they disagree with. Spending a few weeks testing the reality against your expectations, before any application, saves you from signing a multi-year engagement you want out of by the third week of basic training.

                ## Milestones
                1. A written list of what attracts you to service and what worries you about it.
                2. At least two accounts of daily life in your country's force read or watched from official channels.
                3. A week lived on a service-style routine: early start, fitness, made bed, kit laid out.
                4. A short honest note on whether you still want to apply, and why.

                ## Notes
                Recruitment adverts show the best days. Ask serving members about the dull ones too, because most of service is routine, maintenance and waiting.
              priority: high
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A dated note records your decision to apply, wait or not apply, with three reasons drawn from what you learned about real service life."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Write down five reasons you want to join and three things that worry you"
                - "Watch your defence force's official recruitment videos and read its careers pages"
                - "Live one week on a 5.30am wake, daily exercise and a made bed"
                - "Decide whether to apply now, wait a year or look elsewhere"
            - name: Enlisted or officer entry route decision
              description: |-
                ## Purpose
                Two doors lead into most defence forces: enlisting as a private, seaman or airman, or applying as an officer cadet, usually with higher academic requirements and a separate selection board. Choosing deliberately, based on your qualifications, age and the kind of work you want, matters because switching later is possible but slow.

                ## Milestones
                1. The academic and age requirements for both routes in your target force written side by side.
                2. Your own CSEC, CAPE, A level, high school diploma or degree results checked against each.
                3. The first five years of each route compared: training length, pay, responsibility.
                4. A route chosen, with a fallback if the first application is unsuccessful.

                ## Notes
                Plenty of senior officers started in the ranks. Enlisting first is a legitimate route, not a lesser one, and some forces actively commission experienced soldiers.
              priority: high
              deadlineOffsetDays: 45
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "One entry route chosen and written down, with your qualifications checked against its published requirements and a fallback route named."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Find the published entry requirements for enlisted and officer entry"
                - "List your exam results and check them against both sets of requirements"
                - "Compare training length, starting pay and duties for each route"
                - "Write down your chosen route and a fallback route"
            - name: Choosing between land forces, coast guard, air wing and reserves
              description: |-
                ## Purpose
                Land forces, a coast guard, an air wing and the reserves are very different working lives, even inside one small defence force such as those in Jamaica, Trinidad and Tobago, Barbados or Guyana. Matching the branch to whether you want to be at sea, in the field, around aircraft or serving part-time shapes your training, postings and the trades open to you.

                ## Milestones
                1. The branches of your target force listed with what each one actually does day to day.
                2. Entry routes and any extra requirements for each branch noted, such as swimming or eyesight standards.
                3. One conversation held with someone serving in your first-choice branch.
                4. A first and second choice of branch written into your application notes.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A first and second choice of branch recorded, each with its extra entry requirements checked against your own situation."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "List every branch and unit type your target force recruits for"
                - "Note any extra requirement each branch sets, such as a swim test"
                - "Ask a recruiter which branches are recruiting this year"
                - "Rank your first and second choice of branch with one reason each"
            - name: Checking entry eligibility before you apply
              description: |-
                ## Purpose
                Applications fail every intake on things that could have been checked in an evening: age limits, nationality or residency, minimum subject passes, height or eyesight standards, tattoos in visible places and a criminal record. Working through the published eligibility rules line by line, and asking the recruiting office about anything unclear, tells you whether to apply now or fix something first.

                ## Milestones
                1. The current eligibility rules downloaded or copied from the official recruiting source.
                2. Each rule marked met, not met or unsure against your own details.
                3. Every unsure item put to the recruiting office and its answer recorded.
                4. A plan written for any rule not yet met, or a decision that it cannot be met.

                ## Notes
                Rules change between intakes. Use only the force's own website, recruiting office or official social media, never a third party offering to get you in for a fee.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "Every published eligibility rule is marked met or not met against your details, with recruiter answers recorded for any doubtful item."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Check the current entry rules on the defence force's official website"
                - "Mark each rule as met, not met or unsure for yourself"
                - "Phone or visit the recruiting office about every unsure item"
                - "Write a plan for fixing any rule you do not yet meet"
            - name: Application documents pack for the defence force
              description: |-
                ## Purpose
                Missing paperwork is the commonest reason an application stalls between intakes. Birth certificate, national ID or passport, certified exam results, a police certificate of character, referees and passport photos all take time to obtain, so gathering them before the recruitment window opens means you apply on day one rather than week six.

                ## Milestones
                1. A checklist of every document the application asks for.
                2. Certified copies of birth certificate, ID and exam certificates in one folder.
                3. A police certificate of character or record check applied for or in hand.
                4. Two referees who have agreed and whose contact details are confirmed.
                5. Scanned copies stored safely in case originals are lost.

                ## Notes
                Start from the **Job application** template. Police certificates can take weeks in some countries, so apply for yours first.
              priority: high
              deadlineOffsetDays: 45
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A complete folder of certified documents, a current police certificate and two confirmed referees is ready before the recruitment window opens."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Write a checklist of every document the application form asks for"
                - "Apply for a police certificate of character this week"
                - "Get certified copies of your birth certificate, ID and exam results"
                - "Ask two referees for permission and confirm their contact details"
                - "Scan every document and store the copies somewhere safe"
            - name: Fitness baseline against the entry standard
              description: |-
                ## Purpose
                Most entry tests combine a timed run with push-ups, sit-ups or a shuttle test, and some add swimming or a loaded march. Testing yourself against the published standard now shows exactly how far you are from a pass, so training time goes where it is needed rather than on what you already do well.

                ## Milestones
                1. The current entry fitness standard for your age and sex found from an official source.
                2. Each test element attempted once under honest conditions.
                3. Your results recorded beside the pass mark, with the gap for each.
                4. The weakest element named as the first training priority.

                ## Notes
                Start from the **Metrics log** template. If you have a heart, joint or breathing condition, check with your doctor before an all-out test.
              priority: high
              deadlineOffsetDays: 14
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A metrics log shows your score for every element of the entry fitness test beside its pass mark, with your weakest element identified."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Find the official entry fitness standard for your age and sex"
                - "Measure out a flat running route of the test distance"
                - "Attempt each test element and record your scores honestly"
                - "Mark the gap to the pass mark and name your weakest element"
            - name: Conversations with serving members and recruiters
              description: |-
                ## Purpose
                Serving soldiers and sailors will tell you what the brochure leaves out: how postings are decided, what the first year's pay really covers and which trades are hard to get. Three or four planned conversations, including one with a recruiter at an open day or recruitment drive, give you a far better picture than social media comment threads.

                ## Milestones
                1. A list of ten questions you genuinely need answered.
                2. At least one recruitment drive, open day or careers fair attended.
                3. Conversations held with three people serving now or recently.
                4. Answers written up and any surprises noted against your plans.
              priority: medium
              deadlineOffsetDays: 60
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "Notes from at least three conversations with serving or recent members, plus one recruiter, are written up against your ten questions."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Write ten questions about daily life, pay, postings and trades"
                - "Find the date of the next recruitment drive or open day"
                - "Ask family, church or school contacts to introduce you to serving members"
                - "Write up the answers and note anything that changes your plan"
            - name: Cadet corps membership as a head start
              description: |-
                ## Purpose
                School cadet units and national cadet forces teach drill, fieldcraft, first aid and discipline years before a recruit reaches the gate, and selection staff notice it. For a student in first to fifth form, joining the cadets and working towards rank or a proficiency badge builds both skills and a record of commitment that a referee can speak to.

                ## Milestones
                1. The cadet unit at your school or nearest to home identified.
                2. Membership started, with parades attended for a full term.
                3. One proficiency badge, camp or course completed.
                4. Your cadet officer willing to act as a referee later.

                ## Notes
                If your school has no unit, ask the national cadet force about community or nearby school detachments.
              priority: medium
              frontmatter:
                mode: building
                output_kind: habit
                success_criteria: "A full term of cadet parades attended and one badge, camp or course completed, with the cadet officer agreeing to be a referee."
                cadence: phased
                effort_hours_estimate: "60"
              tasks:
                - "Ask your school or the national cadet force where the nearest unit parades"
                - "Attend the next parade night with a parent's consent form if needed"
                - "Choose a proficiency badge or annual camp to aim for this year"
                - "Ask your cadet officer whether they would be a referee later"
            - name: Family, money and affairs in order before enlisting
              description: |-
                ## Purpose
                Basic training can mean weeks with almost no phone access, so bills, debts, children, a car loan or an elderly parent need a plan before you report. Writing down who handles what, setting up payments and naming next of kin properly means nothing at home falls apart while you are on the square.

                ## Milestones
                1. Every regular bill and debt listed with how it will be paid during training.
                2. A trusted person named to handle post, banking queries and emergencies.
                3. Next of kin, beneficiaries and emergency contacts written down correctly.
                4. Care arrangements in place for any child or dependent relative.
                5. Family told what contact to expect and how to reach the unit in an emergency.

                ## Notes
                Ask a bank officer or legal adviser about a limited authority for your trusted person rather than handing over passwords.
              priority: high
              deadlineOffsetDays: 120
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A written household plan names who handles each bill, dependant and emergency, with next of kin and beneficiaries confirmed before report day."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "List every bill, loan and regular payment in your name"
                - "Choose one trusted person to handle post and emergencies while you train"
                - "Write down next of kin, beneficiaries and emergency contacts"
                - "Review the will, beneficiaries and emergency contacts @recurring(yearly)"
            - name: Reading the terms of service before you sign
              description: |-
                ## Purpose
                Signing on commits you to a minimum engagement, a code of discipline, postings where you are sent and rules about leaving early that can involve repaying training costs. Reading the actual terms, with someone you trust, and asking the recruiting office about anything unclear, means you know what you are agreeing to before the oath.

                ## Milestones
                1. A copy of the terms of engagement or enlistment contract obtained before signing.
                2. Length of engagement, notice rules and any early release terms written in plain words.
                3. Questions put to the recruiting office and answers recorded.
                4. The terms read with a parent, partner or adviser you trust.

                ## Notes
                This is about understanding, not legal advice. If anything worries you, ask an independent legal adviser before you sign.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A one-page plain-language summary of your engagement length, notice rules and early release terms exists, with recruiter answers to your questions."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Ask the recruiting office for a copy of the terms before signing day"
                - "Write the engagement length and early release rules in plain words"
                - "List three questions about the terms and get them answered"
                - "Read the terms through with someone you trust"
            - name: Twelve-week pre-selection fitness programme
              description: |-
                ## Purpose
                Twelve weeks is enough time for most reasonably active people to close a modest gap to the entry standard, if the training is planned rather than random. A programme built around your weakest test element, with steady increases in running distance and strength work, gets you to selection fit enough to pass and resilient enough to avoid early injury in basic training.

                ## Milestones
                1. A twelve-week plan written with running, strength and rest days.
                2. At least three sessions a week completed for ten of the twelve weeks.
                3. A retest every four weeks recorded against your baseline.
                4. Every element of the entry test passed in practice at least once before selection.

                ## Notes
                Start from the **Training program** template. Increase running distance gradually; shin splints and stress fractures in the first weeks of basic training usually come from rushing this.
              priority: high
              deadlineOffsetDays: 90
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Twelve weeks of logged training with a retest every four weeks, ending in a practice pass of every entry test element."
                cadence: phased
                effort_hours_estimate: "60"
              tasks:
                - "Write a twelve-week plan built around your weakest test element"
                - "Buy or check running shoes that fit and are not worn through"
                - "Complete the week's planned runs and strength sessions @recurring(weekly:mon)"
                - "Retest every element of the entry test and log the results @recurring(monthly:14)"
            - name: Weekly kit, uniform and boot care routine
              description: |-
                ## Purpose
                Inspections are won or lost on the night before, and recruits who leave kit until Sunday night spend their week catching up. A fixed weekly slot for washing, pressing, boot polishing and repairs, with a checklist taped inside the locker, keeps you ready for inspection and keeps issued kit from wearing out early.

                ## Milestones
                1. A written list of every kit item you are responsible for.
                2. A weekly kit slot fixed in your routine.
                3. A small repair kit with needle, thread, spare buttons and polish assembled.
                4. Four consecutive inspections passed without a kit fault.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Four consecutive inspections passed with no kit or uniform fault recorded against you."
                cadence: rolling
              tasks:
                - "List every item of kit and uniform you have been issued"
                - "Put together a repair kit with thread, buttons and boot polish"
                - "Wash, press and polish kit and fix any damage @recurring(weekly:sun)"
                - "Report and exchange any worn or damaged issued item through stores"
            - name: Personal service record and qualifications file
              description: |-
                ## Purpose
                Course certificates, driving permits, postings, commendations and medical grades are all held by the service, but records get lost, misfiled or are hard to obtain years later when you need them for promotion or a civilian job. Keeping your own copies, in one place, makes every promotion board, re-engagement and resettlement application easier.

                ## Milestones
                1. A folder, physical or digital, with sections for courses, postings, reports and commendations.
                2. Every certificate earned so far copied in.
                3. Service number, enlistment date and key dates written on the first page.
                4. The file updated within a month of every new course or posting.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: artifact
                success_criteria: "A personal file holds copies of every course certificate, posting order and annual report, updated within the last quarter."
                cadence: rolling
              tasks:
                - "Set up a folder with sections for courses, postings, reports and awards"
                - "Write your service number, enlistment date and key dates on the first page"
                - "Ask the orderly room how to request copies of missing certificates"
                - "File new certificates, posting orders and reports in the record @recurring(quarterly)"
            - name: Annual fitness test readiness cycle
              description: |-
                ## Purpose
                Passing the fitness test at selection is only the start; serving members are usually retested every year, and a failure can delay promotion or courses. Practising the test under test conditions every quarter, instead of cramming in the final fortnight, keeps the score comfortable and shows early when an injury or a busy posting is costing you fitness.

                ## Milestones
                1. The current service fitness standard for your age band written in your log.
                2. A practice test completed every quarter with results recorded.
                3. Any element within ten per cent of the pass mark given extra training.
                4. The annual test passed in each year of service.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Four quarterly practice tests logged in a year and the annual service fitness test passed."
                cadence: cyclic
              tasks:
                - "Copy the fitness standard for your age band into your log"
                - "Run a practice fitness test under test conditions @recurring(quarterly)"
                - "Add extra sessions for any element close to the pass mark"
                - "Book a physical training instructor's advice if scores are falling"
            - name: Military pay, allowances and deductions check
              description: |-
                ## Purpose
                Payslips in uniformed services carry rank pay, increments, allowances for duties or locations, and deductions for messing, quarters, pension and loans, and errors are common after promotions and postings. Checking each payslip against what you should be paid, and putting a budget around it, catches mistakes early and stops a new recruit's pay disappearing in the first week.

                ## Milestones
                1. Your pay scale, increment date and entitled allowances written down.
                2. Each payslip checked against them for three months running.
                3. A monthly budget with savings set aside before spending money.
                4. Any error raised with the pay office in writing and its outcome noted.

                ## Notes
                Start from the **Monthly budget and bills** template. Be wary of high-interest lenders who target new soldiers near barracks.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Six consecutive payslips checked against your scale and allowances, with a budget in use and any error raised in writing."
                cadence: rolling
              tasks:
                - "Find your pay scale, increment date and allowance entitlements"
                - "Set up a monthly budget with savings taken out first"
                - "Check the payslip against your rank, allowances and deductions @recurring(monthly:26)"
                - "Review savings, allotments and loan balances @recurring(quarterly)"
            - name: Leave planning with the family calendar
              description: |-
                ## Purpose
                Leave is granted around exercises, duties and other people's requests, so the members who plan early get the dates that matter: a child's graduation, Carnival, Christmas at home or a wedding overseas. Keeping a running leave plan beside the family calendar, and submitting requests as early as your unit allows, turns leave from a scramble into something you can book flights around.

                ## Milestones
                1. Your annual leave entitlement and the unit's request rules written down.
                2. Key family dates for the next twelve months on one calendar.
                3. Leave requests for the most important dates submitted early.
                4. All entitled leave taken by the end of the leave year.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A twelve-month calendar shows family dates and approved leave, with all entitled leave taken by the end of the leave year."
                cadence: rolling
              tasks:
                - "Ask the orderly room how much leave you have and how to request it"
                - "Put the next twelve months of family dates on one calendar"
                - "Update the leave plan against the unit and family calendars @recurring(monthly:3)"
                - "Submit requests for the most important dates as early as allowed"
            - name: Annual performance report preparation
              description: |-
                ## Purpose
                Promotion boards rely heavily on annual or confidential reports, and supervisors write them from memory unless you give them the facts. Keeping a short running note of duties, courses, achievements and extra responsibilities through the year, and bringing it to your report interview, makes your report specific and fair.

                ## Milestones
                1. A running note started with headings for duties, courses and achievements.
                2. An entry added every month.
                3. A one-page summary handed to your reporting officer before the report is written.
                4. The finished report read, signed and any disagreement raised through the proper channel.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A twelve-month running note exists and a one-page summary was given to your reporting officer before your last annual report."
                cadence: cyclic
              tasks:
                - "Start a running note with headings for duties, courses and achievements"
                - "Add the month's duties and achievements to the running note @recurring(monthly:20)"
                - "Ask your reporting officer for a report interview before the report is written @recurring(yearly)"
                - "Hand over a one-page summary at the report interview"
            - name: Stress, sleep and mental health check-in
              description: |-
                ## Purpose
                Long duties, broken sleep, time away from family and difficult tasks such as recovery work after a disaster all build up, and the culture can make people slow to say so. A two-line weekly check-in on sleep, mood and stress, plus knowing in advance who you can talk to confidentially, means you notice a slide early and act on it.

                ## Milestones
                1. The confidential support routes in your force found: padre, medical officer, welfare officer or helpline.
                2. A weekly two-line check-in kept for eight weeks.
                3. A personal rule written for when you will speak to someone.
                4. One trusted person outside your chain of command named.

                ## Notes
                If you ever feel unsafe or think about harming yourself, contact your medical officer, a crisis line or emergency services straight away.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Eight weekly check-ins recorded, with your force's confidential support contacts and a personal rule for speaking up written down."
                cadence: rolling
              tasks:
                - "Find out how to reach the padre, medical officer and welfare officer"
                - "Write two lines on the week's sleep, mood and stress @recurring(weekly:fri)"
                - "Write a rule for when you will talk to someone about how you feel"
                - "Save one crisis line number in your phone"
            - name: Injury prevention and recovery routine
              description: |-
                ## Purpose
                Shin splints, stress fractures, back pain from carrying loads and rolled ankles end more training courses than failed tests do. A weekly mobility session, sensible footwear, reporting niggles early to the medical centre and following rehabilitation plans to the end keeps you training rather than on light duties.

                ## Milestones
                1. A twenty-minute mobility and stretching routine chosen with a physical training instructor or physio.
                2. The routine done weekly for two months.
                3. Boots and running shoes checked for wear and replaced on schedule.
                4. Any pain lasting more than a few days reported to the medical centre.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Two months of weekly mobility sessions logged and every lasting pain reported to the medical centre rather than trained through."
                cadence: rolling
              tasks:
                - "Ask a physical training instructor for a short mobility routine"
                - "Do a twenty-minute mobility and stretching session @recurring(weekly:wed)"
                - "Check boots and running shoes for worn soles and split seams"
                - "Report any pain lasting three days to the medical centre"
            - name: Rank structure, customs and courtesies
              description: |-
                ## Purpose
                Knowing who to salute, how to address a warrant officer, when to stand and what happens in the officers' and sergeants' messes saves a recruit a great deal of shouting in the first fortnight. Learning the rank badges, forms of address and customs of your force before you report means you can concentrate on everything else that is new.

                ## Milestones
                1. Every rank badge in your force recognised on sight, enlisted and officer.
                2. Correct forms of address for each rank written down.
                3. When and how to salute, stand to attention and report learned.
                4. Basic mess customs and unit traditions read about.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "You can name every rank badge in your force from pictures and state the correct form of address for each without notes."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Find an official chart of your force's rank badges"
                - "Make flashcards of each badge and the correct form of address"
                - "Learn when and how to salute and how to report to a superior"
                - "Ask a serving member about mess customs in their unit"
            - name: Drill, turnout and inspection standards
              description: |-
                ## Purpose
                Drill and turnout are how instructors judge a recruit's attention to detail in the first weeks, long before anyone sees you on a range or in the field. Practising the basic foot drill movements and learning how to press a uniform, polish boots and lay out kit before basic training gives you room to cope with everything else.

                ## Milestones
                1. The basic foot drill movements practised: attention, stand at ease, turns and marching.
                2. A uniform shirt and trousers pressed to a sharp crease.
                3. A pair of boots polished to a standard a cadet instructor or serving member approves.
                4. A locker or kit layout practised from a photo or diagram.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A serving member or cadet instructor has watched your basic drill and checked your pressed uniform and polished boots as acceptable."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "Watch an official drill training video for your force"
                - "Practise attention, stand at ease and turns for ten minutes daily for two weeks"
                - "Press a shirt and trousers to a single sharp crease"
                - "Ask a cadet instructor or serving member to check your drill and boots"
            - name: Map reading and land navigation practice
              description: |-
                ## Purpose
                Satellite navigation fails under canopy, in hills and when batteries die, and land forces still teach and test the map and compass. Learning grid references, contours, bearings and pacing on real ground before or during training makes navigation exercises far less stressful and is a skill you keep for life.

                ## Milestones
                1. Six-figure grid references given and found on a topographic map.
                2. Contour lines read to describe hills, valleys and spurs.
                3. A compass bearing taken and followed across open ground.
                4. Your personal pace count for one hundred metres measured on flat and hilly ground.
                5. A short navigation route walked with a partner for safety.

                ## Notes
                Never practise alone in remote or dense terrain. Tell someone your route and return time.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A five-leg navigation route completed using only map, compass and pacing, finishing within fifty metres of each checkpoint."
                cadence: phased
                effort_hours_estimate: "14"
              tasks:
                - "Get a topographic map of an area near you and a baseplate compass"
                - "Practise giving six-figure grid references for ten features"
                - "Measure your pace count over one hundred metres"
                - "Walk a short navigation route with a partner @recurring(monthly:9)"
            - name: Swimming and water confidence for maritime roles
              description: |-
                ## Purpose
                Coast guard, marine and amphibious roles usually require a swim test, and many otherwise strong applicants in island nations have never learned to swim properly. Building to continuous swimming, treading water and getting in and out of water in clothing, with a qualified instructor, makes the test routine and the work safer.

                ## Milestones
                1. The swim standard for your chosen branch confirmed from an official source.
                2. Lessons or coached sessions booked with a qualified instructor if needed.
                3. The required distance swum continuously in a pool.
                4. Treading water and swimming in clothing practised under supervision.

                ## Notes
                Practise in a supervised pool or beach with a lifeguard. Open water, currents and swimming alone are not where to learn.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "The swim standard for your branch has been met in a supervised practice, including treading water and swimming in clothing."
                cadence: phased
                effort_hours_estimate: "20"
              tasks:
                - "Check the swim standard for coast guard or maritime roles in your force"
                - "Book lessons or coached sessions at a supervised pool"
                - "Swim continuous lengths under supervision @recurring(weekly:sat)"
                - "Practise treading water in clothing with an instructor present"
            - name: Military law, discipline and your rights
              description: |-
                ## Purpose
                Service members live under a defence act or service code that adds offences civilians do not have, such as absence without leave and disobeying a lawful command, and its own summary hearings and courts martial. Understanding how the system works, what your rights are at a hearing and how to make a redress of grievance lets you avoid trouble and respond properly if it comes.

                ## Milestones
                1. The name of the law or code that governs your force found.
                2. Common service offences and their usual consequences listed in plain words.
                3. Your rights at a summary hearing, including to an assisting friend or adviser, noted.
                4. The redress of grievance or complaint procedure written down step by step.

                ## Notes
                This is for understanding, not legal advice. If you face a charge, ask for the adviser or legal support your force provides.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A plain-language note covering common service offences, your rights at a hearing and the complaint procedure, checked with a senior NCO or legal officer."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Find the name and an official summary of your force's service law"
                - "List the common service offences in plain words"
                - "Write down your rights at a summary hearing"
                - "Write the redress of grievance procedure step by step"
            - name: First aid and casualty care certificate
              description: |-
                ## Purpose
                A casualty's first minutes depend on whoever is nearest, on a range, an exercise or a road after a storm. Holding a current recognised first aid certificate before service, then adding the casualty care training your force teaches, makes you useful in an emergency and counts in your favour at selection and for promotion.

                ## Milestones
                1. A recognised first aid course booked with the Red Cross, St John or an equivalent provider.
                2. The certificate earned and its expiry date noted.
                3. Service casualty care training completed when offered.
                4. The certificate renewed before it lapses.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A current recognised first aid certificate is held, with its expiry date recorded and renewal booked in time."
                cadence: cyclic
                effort_hours_estimate: "16"
              tasks:
                - "Find a recognised first aid course near you and its next date"
                - "Complete the course and file the certificate in your record"
                - "Ask your unit when casualty care training is next offered"
                - "Check the first aid certificate expiry and book any renewal @recurring(yearly)"
            - name: Range safety and weapons handling discipline
              description: |-
                ## Purpose
                Every weapon handling lesson in basic training starts with safety rules, and range staff remove recruits who break them. Learning the safety rules and range procedures exactly as your instructors teach them, and treating them as non-negotiable habits, keeps you and others safe and is the foundation of every later weapons qualification.

                ## Milestones
                1. The safety rules as taught by your instructors written from memory and checked.
                2. Range commands and what each requires of you learned.
                3. Every weapon handling test passed at the first attempt.
                4. No safety warning recorded against you on any range day.

                ## Notes
                Learn weapons handling only from your force's qualified instructors on authorised ranges. This project is about memorising and following their rules, not practising elsewhere.
              priority: high
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "All weapon handling tests passed at the first attempt with no safety warning recorded on any range day."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Write the safety rules from memory after your first handling lesson"
                - "Check your written rules with your section instructor"
                - "Learn each range command and what you must do on hearing it"
                - "Review the rules and commands the evening before every range day"
            - name: Choosing a trade or specialism after basic training
              description: |-
                ## Purpose
                After basic training most recruits are allocated or apply for a trade: infantry, engineers, signals, logistics, vehicle mechanic, medic, chef, military police, seamanship or aviation support. The trade shapes your daily work, your courses and what civilian qualifications you leave with, so comparing them on more than first impressions is worth a few evenings.

                ## Milestones
                1. The trades open to your intake and their entry tests listed.
                2. Each shortlisted trade compared on training length, courses and civilian equivalents.
                3. One person in each shortlisted trade asked what the job is really like.
                4. A ranked preference submitted with reasons.

                ## Notes
                Trades that lead to recognised civilian qualifications, such as vehicle mechanics, electrical work, catering or medical support, make resettlement much easier later.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A ranked list of three trades, each compared on training, courses and civilian equivalents, submitted as your preference."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Ask your training staff which trades your intake can apply for"
                - "Shortlist three trades and note the civilian qualification each leads to"
                - "Talk to one serving member from each shortlisted trade"
                - "Submit your ranked trade preference with a reason for each"
            - name: Studying for qualifications while serving
              description: |-
                ## Purpose
                Many defence forces support members to add CSEC or CAPE subjects, a diploma or a degree through education officers, study leave or fee assistance, and those qualifications count for promotion, commissioning and life after service. Choosing a course that fits shift patterns and postings, then keeping a weekly study rhythm, turns spare evenings into credentials.

                ## Milestones
                1. The education support your force offers, and its conditions, confirmed with the education officer.
                2. One course chosen that fits your duties and goals.
                3. Funding, study leave or fee assistance applied for.
                4. A weekly study slot kept for a full term.
                5. The first module or subject passed.

                ## Notes
                Check whether fee assistance commits you to extra service time before you accept it.
              priority: medium
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "One course enrolled with any service support agreed in writing, and the first module or subject passed."
                cadence: phased
                effort_hours_estimate: "120"
              tasks:
                - "Book a meeting with your unit's education officer"
                - "Choose one course that fits your duty pattern and goals"
                - "Apply for any study leave or fee assistance in writing"
                - "Log study hours and assignment progress @recurring(weekly:sun)"
            - name: Commissioning from the ranks application
              description: |-
                ## Purpose
                Experienced soldiers, sailors and airmen with the right qualifications and reports can often apply to become officers, and they bring credibility that direct entrants take years to earn. Checking the scheme's rules, getting the support of your commanding officer and preparing for the board alongside your duties gives you a fair shot at the next intake.

                ## Milestones
                1. The commissioning scheme's eligibility rules and timeline confirmed.
                2. Any missing academic requirement identified and a plan to meet it.
                3. Your commanding officer's recommendation requested.
                4. The application submitted before the closing date.
                5. Board preparation completed, including a mock interview.
              priority: low
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "A commissioning application with your commanding officer's recommendation is submitted before the scheme's closing date."
                cadence: phased
                effort_hours_estimate: "20"
              tasks:
                - "Ask the adjutant or orderly room for the commissioning scheme rules"
                - "Compare your qualifications and reports against the requirements"
                - "Request an interview with your commanding officer about your application"
                - "Submit the application before the closing date"
            - name: Overseas officer academy and course applications
              description: |-
                ## Purpose
                Officer cadets from smaller forces are often trained at partner academies abroad, such as Sandhurst in the United Kingdom, the Royal Military College of Canada or academies in the United States, and serving members compete for overseas courses. These places are limited and competitive, so understanding how your force selects candidates, and preparing for the climate, culture and academic load, improves both your chances and your performance.

                ## Milestones
                1. How your force selects candidates for overseas academies and courses confirmed.
                2. The academic, fitness and medical standards of your target academy noted.
                3. Passport and any travel documents current.
                4. A preparation plan for fitness, study and being away for an extended period.
              priority: low
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A written note of your force's overseas selection process, the target academy's standards and your preparation plan exists, with your passport current."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Ask your training officer how overseas academy places are allocated"
                - "Read the target academy's published standards and course outline"
                - "Check your passport is valid for at least the length of the course"
                - "Write a preparation plan for fitness, study and time away"
            - name: Re-engage or leave at the end of your engagement
              description: |-
                ## Purpose
                Near the end of an engagement you choose between signing on again, perhaps for a new trade or posting, and leaving with whatever pension or gratuity your service has earned. Weighing pay, family, promotion prospects, civilian job options and what you lose by leaving a year early or late, well before the deadline, keeps the decision yours rather than the calendar's.

                ## Milestones
                1. The date by which you must decide, and the notice rules, confirmed.
                2. What you would earn and receive in each option written side by side.
                3. Civilian job prospects for your trade checked with real vacancies.
                4. Family views heard and recorded.
                5. A decision made and notified through the proper channel on time.

                ## Notes
                Ask the pay or pensions office what your service length means for gratuity or pension. A few months either side of a threshold can matter a lot.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A written comparison of re-engaging and leaving, with pension or gratuity figures from the pay office, ends in a decision notified before the deadline."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Confirm the decision deadline and notice rules with the orderly room"
                - "Ask the pay office what gratuity or pension each option earns"
                - "Find five real civilian vacancies that match your trade"
                - "Talk the options through with your family and write down the decision"
            - name: Military professional reading programme
              description: |-
                ## Purpose
                Officers and senior NCOs are expected to understand leadership, military history and how their force fits into regional security, and promotion courses assume some reading has been done. A modest programme of a book or long article a month, chosen from your force's or a partner academy's reading list, builds that background steadily.

                ## Milestones
                1. A reading list chosen from an official or academy source.
                2. One book or long article finished each month for six months.
                3. A three-line note written on each item.
                4. One idea from the reading discussed with a mentor or used in a briefing.

                ## Notes
                A notebook is enough. Include something on Caribbean regional security cooperation alongside the classics of leadership and military history.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Six items from an official reading list finished in six months, each with a three-line note."
                cadence: rolling
              tasks:
                - "Ask a senior NCO or officer for your force's recommended reading list"
                - "Pick six items for the next six months"
                - "Write a three-line note on each item when you finish it"
                - "Discuss one idea from your reading with a mentor"
            - name: Recruitment selection day preparation
              description: |-
                ## Purpose
                Selection usually packs an aptitude or written test, fitness test, medical screening and interview into one or two long days, and nerves cost more points than lack of ability. Preparing each element, knowing the timetable and arriving with every document and the right kit makes the day a test of you rather than of your organisation.

                ## Milestones
                1. The selection timetable and what to bring confirmed in writing.
                2. Three practice aptitude or literacy and numeracy tests completed under time.
                3. A mock interview held, covering why you want to join and what you know about the force.
                4. Documents, kit and transport arranged the night before.
                5. Selection attended on time with every document.

                ## Notes
                Aptitude tests often cover English, mathematics and reasoning at around CSEC level. Practise without a calculator unless told otherwise.
              priority: high
              deadlineOffsetDays: 120
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "Selection attended on the scheduled day with all documents, after three timed practice tests and one mock interview."
                cadence: one-shot
                effort_hours_estimate: "15"
              tasks:
                - "Confirm the selection date, timetable and what to bring with the recruiting office"
                - "Complete a timed practice test in English, maths and reasoning"
                - "Ask a teacher or mentor to run a mock interview with you"
                - "Pack documents, sports kit, water and food the night before"
            - name: Medical, dental and eyesight examination preparation
              description: |-
                ## Purpose
                Eyesight, hearing, dental health, blood pressure, past injuries and some medical conditions can delay or stop an application, and an undisclosed condition found later is worse. Getting your records together, seeing a dentist and an optometrist first and answering the medical questionnaire honestly gives the medical board the full picture.

                ## Milestones
                1. Your past medical history and any hospital letters gathered.
                2. A dental check and any needed treatment completed.
                3. An eyesight test done and glasses or contact lens prescription noted.
                4. The service medical questionnaire completed fully and honestly.
                5. The medical examination attended and its outcome recorded.

                ## Notes
                Never hide a condition. Ask the recruiting office whether a medical waiver or later reassessment exists if something rules you out.
              priority: high
              deadlineOffsetDays: 100
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "The service medical attended with dental and eyesight checks done beforehand and every past condition declared, and the outcome recorded."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Gather hospital letters and records for any past illness or injury"
                - "Book a dental check-up and finish any treatment it finds"
                - "Book an eyesight test with an optometrist"
                - "Fill in the service medical questionnaire honestly and completely"
            - name: Officer selection board and interview preparation
              description: |-
                ## Purpose
                Officer selection boards test far more than knowledge: planning exercises, group discussions, leaderless tasks, a short talk and interviews designed to see how you think and lead under pressure. Practising each type of exercise with honest feedback, and knowing current affairs and your force's role, makes the difference between a nervous candidate and a credible one.

                ## Milestones
                1. The board's format confirmed from official sources and former candidates.
                2. Two group planning problems practised with friends under time.
                3. A five-minute talk prepared and delivered to an audience for feedback.
                4. Current affairs, regional security and your force's recent operations studied.
                5. A mock board interview completed with an experienced officer or mentor.
              priority: high
              deadlineOffsetDays: 150
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "The officer selection board attended after two practice planning problems, one delivered talk and one mock board interview with written feedback."
                cadence: phased
                effort_hours_estimate: "25"
              tasks:
                - "Ask former candidates what each part of the board involved"
                - "Practise a timed group planning problem with three friends"
                - "Prepare and deliver a five-minute talk and ask for blunt feedback"
                - "Read the news every day for a month and note regional security stories"
            - name: Report day and the first two weeks of basic training
              description: |-
                ## Purpose
                The first fortnight is the hardest adjustment: new names, no privacy, constant shouting, kit to learn and almost no free time. Arriving with the right items, knowing what to expect and having a few simple rules for yourself (eat everything, sleep when allowed, help the person next to you) gets most recruits through the period when people most often quit.

                ## Milestones
                1. The joining instructions read twice and the packing list completed.
                2. Family told how and when they can contact you.
                3. Report day attended on time with every listed item.
                4. Three personal rules written for the first two weeks.
                5. The first fortnight completed.

                ## Notes
                Homesickness and doubt peak in week one or two for nearly everyone. Talk to your section commander or padre before making any decision to leave.
              priority: medium
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "Report day attended on time with every item on the joining list and the first two weeks of basic training completed."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Read the joining instructions and tick off the packing list"
                - "Tell family when and how they will be able to contact you"
                - "Write three personal rules for getting through the first fortnight"
                - "Arrange transport to arrive early on report day"
            - name: Passing out parade with family and friends
              description: |-
                ## Purpose
                Families travel across islands and from the diaspora for a passing out parade, and it is often the first time they see what the recruit has achieved. Sorting guest numbers, tickets, travel and a meal afterwards early lets you enjoy the day instead of solving logistics between rehearsals.

                ## Milestones
                1. The parade date, guest allowance and dress code confirmed.
                2. Guests chosen and told the arrangements, including any security checks.
                3. Travel and accommodation for overseas guests booked.
                4. A meal or gathering afterwards arranged by a family member.
                5. The day attended and photos shared with family who could not come.
              priority: low
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "The passing out parade attended by your invited guests, with travel and a family gathering afterwards arranged in advance."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Confirm the parade date, guest allowance and dress code with training staff"
                - "Choose your guests and send them the arrangements"
                - "Ask a family member to organise a meal after the parade"
                - "Send photos to relatives who could not travel"
            - name: Joining your first unit after training
              description: |-
                ## Purpose
                Arriving at a unit after training is a second start: new commanders, older soldiers who judge quickly, a different routine and real duties rather than lessons. Reporting correctly, learning names and procedures quickly, finding a good mentor and asking how things work here rather than how training did it sets your reputation in the first month.

                ## Milestones
                1. Joining instructions and the person to report to confirmed.
                2. Arrival administration done: pay, accommodation, medical and kit.
                3. The names and roles of your chain of command learned.
                4. A more experienced member identified as an informal mentor.
                5. First month's duties completed without an administrative gap.
              priority: medium
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "Within a month of arrival, all joining administration is complete and you can name your chain of command up to the commanding officer."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Confirm who to report to and the time on your first day"
                - "Complete pay, accommodation, medical and kit administration in week one"
                - "Write down your chain of command from section to commanding officer"
                - "Ask an experienced member to show you how the unit's routine works"
            - name: First operational tasking or deployment
              description: |-
                ## Purpose
                Hurricane relief, border patrols, joint operations with the police, maritime interdiction and overseas exercises are where Caribbean service members do their real work, sometimes at short notice. Preparing personal admin, kit and family before the first one, and debriefing yourself after it, makes the next deployment smoother and helps you process what you saw.

                ## Milestones
                1. A personal deployment checklist covering kit, documents, medication and family contacts.
                2. Family briefed on what to expect and who to contact through the unit.
                3. The tasking completed and personal kit recovered and cleaned.
                4. A short personal debrief written: what went well, what to change, anything troubling.

                ## Notes
                If something you saw on a tasking stays with you, raise it with the medical officer, padre or welfare officer. That is normal and early help works best.
              priority: medium
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A personal deployment checklist used on your first tasking and a written personal debrief completed within a week of return."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Write a personal deployment checklist for kit, documents and family"
                - "Brief your family on contact arrangements while you are away"
                - "Clean and restock personal kit within two days of return"
                - "Write a short personal debrief on what to change next time"
            - name: Supporting a son or daughter through enlistment
              description: |-
                ## Purpose
                Parents often hear about the application late, worry about safety and feel shut out once basic training starts. A parent who learns how the process works, helps with documents and fitness without taking over and knows what contact to expect can be a steady support rather than an extra pressure.

                ## Milestones
                1. An honest conversation held about why your child wants to join.
                2. The application steps and timeline understood from the force's official information.
                3. Practical help agreed: documents, transport, a training partner for runs.
                4. Contact arrangements during basic training understood.
                5. The passing out parade attended or followed.

                ## Notes
                Recruiters will usually talk to parents of younger applicants. Ask your questions directly rather than relying on rumours.
              priority: low
              frontmatter:
                mode: service
                output_kind: knowledge
                success_criteria: "You can describe each step of your child's application and know how to contact the unit in an emergency during training."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Ask your son or daughter what draws them to service and listen"
                - "Read the force's official recruitment information together"
                - "Offer one practical form of help such as documents or training runs"
                - "Find out how families can reach the unit in an emergency"
            - name: Partner and household plan for deployments
              description: |-
                ## Purpose
                Deployments and long exercises leave a partner running the house alone, often with children, bills and car trouble arriving the week after departure. A household plan made together, covering money, childcare, emergency contacts, who to call at the unit and how you will stay in touch, keeps both of you steadier while apart.

                ## Milestones
                1. A shared list of bills, accounts and who pays what during absences.
                2. Childcare and school arrangements agreed for deployment periods.
                3. Unit welfare contacts and the emergency procedure written down.
                4. A realistic contact rhythm agreed, allowing for times without signal.
                5. A short review after each deployment of what to change.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A written household plan covering money, childcare, unit contacts and keeping in touch is in place before the next deployment and reviewed after it."
                cadence: cyclic
                effort_hours_estimate: "4"
              tasks:
                - "Sit down together and list the bills and accounts each of you handles"
                - "Write down the unit welfare officer's contact and emergency procedure"
                - "Agree a realistic contact rhythm for times away"
                - "Review what worked after each deployment and update the plan"
            - name: Women preparing for defence force service
              description: |-
                ## Purpose
                Women serve across Caribbean and international forces in combat support, coast guard, aviation, medical and command roles, and more are joining each intake. Preparing well means meeting the same fitness standards, knowing the policies on accommodation, uniform, pregnancy and family, and having women who have served to ask practical questions.

                ## Milestones
                1. Your force's policies for women on accommodation, uniform, pregnancy and maternity read.
                2. A conversation held with at least one woman serving or recently retired.
                3. Fitness training built on load carriage and upper body strength as well as running.
                4. The reporting routes for harassment or discrimination noted before you need them.
              priority: low
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "Notes on your force's relevant policies and reporting routes exist, plus advice from at least one serving or former servicewoman."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Ask the recruiting office for the policies on accommodation, uniform and maternity"
                - "Find a serving or retired servicewoman to talk to"
                - "Add load carriage and upper body strength sessions to your training"
                - "Write down how to report harassment or discrimination confidentially"
            - name: Joining a foreign military as a Commonwealth applicant
              description: |-
                ## Purpose
                Several larger militaries recruit Commonwealth citizens or permanent residents, and many Caribbean nationals have served in the British Army or the Canadian and United States forces. The rules on residency, nationality, age, security clearance and which roles are open change often, so applying from official sources only, with your documents and plans for family and status in order, avoids wasted years and costly scams.

                ## Milestones
                1. The current nationality and residency rules for your target military confirmed on its official recruiting site.
                2. Roles open to applicants of your status listed.
                3. Immigration and family consequences understood, including what happens to your status if training is not completed.
                4. Documents gathered and translated or certified as required.
                5. An application made directly to the official recruiter, never through a paid agent.

                ## Notes
                Nobody can sell you a guaranteed place in a foreign military. Check immigration questions with the official immigration authority or a regulated adviser.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "The target military's current rules for your nationality and residency are recorded from its official site, and a decision to apply or not is written down."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Read the official recruiting site's rules for Commonwealth or foreign applicants"
                - "List the roles open to someone with your nationality and residency"
                - "Check immigration and family questions with an official source"
                - "Decide whether to apply and record the reasons"
            - name: Reserve service alongside a civilian job
              description: |-
                ## Purpose
                Reservists train on evenings, weekends and annual camps and are called out for disasters, elections or national emergencies, all while holding a civilian job or studying. Making it work means agreeing time off with your employer early, keeping training attendance up and knowing what protection, if any, your country gives reservists' jobs.

                ## Milestones
                1. Your reserve unit's training commitment for the year written down.
                2. Your employer or college told and an arrangement for training and call-outs agreed.
                3. Any legal protection for reservists' jobs in your country checked.
                4. The year's required training days attended.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "An agreed arrangement with your employer is in writing and the year's required reserve training days have been attended."
                cadence: cyclic
              tasks:
                - "Get the reserve unit's training calendar for the year"
                - "Talk to your manager about time off for training and call-outs"
                - "Confirm upcoming training weekends with your employer @recurring(monthly:5)"
                - "Check what job protection your country gives reservists"
            - name: Direct entry as a qualified professional
              description: |-
                ## Purpose
                Doctors, nurses, lawyers, engineers, pilots and chaplains can often join as specialist or professional officers, with shorter military training and a rank that reflects their qualifications. Understanding the scheme, how civilian registration carries over and what the service expects of a professional in uniform lets an established practitioner judge whether the move makes sense.

                ## Milestones
                1. The direct entry or professional officer scheme for your profession found.
                2. How your civilian registration, licence and continuing education are maintained in service confirmed.
                3. Pay, rank on entry and length of commitment compared with your civilian position.
                4. A conversation held with a serving professional officer in your field.
                5. A decision recorded to apply, defer or decline.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A written comparison of direct entry against your civilian position, informed by a serving professional officer, ends in a recorded decision."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Ask the recruiting office whether a direct entry scheme exists for your profession"
                - "Confirm how your civilian licence and continuing education are kept current in service"
                - "Compare entry rank, pay and commitment with your current job"
                - "Speak to a serving officer from your profession"
            - name: Non-commissioned officer promotion course preparation
              description: |-
                ## Purpose
                Corporal and sergeant are where a soldier stops being responsible only for themselves and starts leading a section, and the promotion courses test instruction, field leadership, administration and fitness. Preparing a development plan with your platoon sergeant months before the course, and practising teaching and giving orders, raises both your course grade and your confidence.

                ## Milestones
                1. The promotion criteria and course content for the next rank confirmed.
                2. A development plan agreed with your platoon sergeant or equivalent.
                3. Two short lessons delivered to your section with feedback.
                4. A set of section orders written and delivered in an exercise.
                5. The promotion course passed.

                ## Notes
                Start from the **Development plan** template.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: deliverable
                success_criteria: "A development plan agreed with your supervisor, two lessons delivered and the promotion course passed."
                cadence: phased
                effort_hours_estimate: "40"
              tasks:
                - "Ask your platoon sergeant what the next promotion course covers"
                - "Write a development plan with three gaps to close before the course"
                - "Deliver a short lesson to your section and ask for feedback"
                - "Write and deliver a set of section orders on an exercise"
            - name: Becoming a recruit instructor
              description: |-
                ## Purpose
                Instructors shape every intake that passes through the training school, and good ones are remembered for decades. Moving into instruction needs strong personal standards, an instructor qualification, patience with nervous recruits and a clear understanding of the line between firm training and abuse.

                ## Milestones
                1. The selection process and course for instructors confirmed.
                2. Your own drill, fitness and turnout brought to instructor standard.
                3. The instructor course completed.
                4. The training school's rules on recruit welfare and conduct read and understood.
                5. A first intake trained with feedback gathered from recruits and senior staff.
              priority: low
              frontmatter:
                mode: service
                output_kind: deliverable
                success_criteria: "The instructor qualification held and one full intake trained, with written feedback from senior staff."
                cadence: phased
                effort_hours_estimate: "80"
              tasks:
                - "Ask the training school how instructors are selected"
                - "Bring your drill, fitness and turnout up to instructor standard"
                - "Read the school's rules on recruit welfare and conduct"
                - "Ask senior staff for written feedback after your first intake"
            - name: Leading disaster response and humanitarian assistance
              description: |-
                ## Purpose
                Caribbean defence forces are among the first responders after hurricanes, floods and volcanic eruptions, at home and across the region through joint relief operations with regional partners. Leaders at section, platoon or ship level who know the national disaster plan, how civil authorities request military help and how relief stores are distributed fairly make those operations faster and safer.

                ## Milestones
                1. Your national disaster plan and the military's role in it read.
                2. How civil authorities request military assistance written down.
                3. A pre-season readiness checklist for your team agreed.
                4. One disaster response exercise led or planned.
                5. Lessons from the last real operation recorded and shared.
              priority: medium
              frontmatter:
                mode: service
                output_kind: deliverable
                success_criteria: "A pre-season readiness checklist is in use for your team and one disaster response exercise has been led or planned."
                cadence: cyclic
                effort_hours_estimate: "20"
              tasks:
                - "Read your country's national disaster plan and the military annex"
                - "Write a readiness checklist for your team's people, vehicles and stores"
                - "Run the readiness checklist with your team before hurricane season @recurring(yearly)"
                - "Record lessons learned after each real relief operation"
            - name: Resettlement and translating service skills to civilian jobs
              description: |-
                ## Purpose
                Leaving the service after years in uniform means rewriting your experience in language civilian employers understand: logistics, security, maintenance, team leadership, safety management. Starting two years before your exit, using any resettlement courses your force offers and converting trade training into civilian certificates gives you a job to walk into rather than a gap.

                ## Milestones
                1. Your exit date and resettlement entitlements confirmed.
                2. Every service qualification matched to its nearest civilian equivalent.
                3. A civilian CV written without military jargon.
                4. Two resettlement or conversion courses completed.
                5. Applications sent for at least five civilian roles.

                ## Notes
                Start from the **Resume** template. Security, logistics, maritime, engineering trades and emergency management all hire former service members.
              priority: medium
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "A civilian CV and two completed conversion courses are in hand, with at least five applications sent before your exit date."
                cadence: phased
                effort_hours_estimate: "40"
              tasks:
                - "Ask the resettlement or education office what support you are entitled to"
                - "List every service qualification beside its nearest civilian equivalent"
                - "Ask the agent to translate your service record into a civilian CV draft"
                - "Apply for five civilian roles that fit your trade"
            - name: Service pension, gratuity and veteran benefits record
              description: |-
                ## Purpose
                Pensions, gratuities, medical support and veteran benefits depend on exact dates of service, rank and any injuries recorded in service, and claiming them years later without paperwork is slow. Keeping your own record of service dates, pension statements and any service-related injuries, and knowing where veterans' associations can help, protects what you have earned.

                ## Milestones
                1. Enlistment, promotion and discharge dates written down with copies of orders.
                2. Your pension or gratuity entitlement confirmed in writing by the pensions office.
                3. Any service-related injury or illness documented with medical records.
                4. The contact details of a veterans' or ex-service association saved.

                ## Notes
                This record supports a claim; it does not replace advice. Ask the pensions office or a veterans' association to check any claim before you submit it.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: artifact
                success_criteria: "A personal pension record holds your service dates, a written entitlement statement and documentation of any service-related injury."
                cadence: rolling
              tasks:
                - "Write your enlistment, promotion and discharge dates in one document"
                - "Ask the pensions office for a written statement of your entitlement"
                - "Copy medical records for any injury or illness from service"
                - "Check your pension statement and recorded service dates @recurring(yearly)"
---

# Defence Force and Military Career

This area is for anyone weighing up a defence force or military career, from a fifth-form student with a cadet uniform in the cupboard to a graduate thinking about a commission, a reservist with a day job and a soldier counting down to the end of an engagement. It starts with the foundations (whether the life suits you, enlisted or officer entry, the branch, eligibility, documents and fitness), then the routines that keep a serving member ready, the skills every recruit is expected to learn, the big decisions about trades, study, commissioning and re-engaging, the dated events from selection day to the first deployment, situations such as parents, partners, Commonwealth applicants and direct entry professionals, and finally promotion, instructing, disaster response leadership and life after service.

What repeats is a weekly kit routine, weekly fitness, mobility and wellbeing check-ins, a monthly payslip check, leave and report notes, quarterly practice fitness tests and record updates, and the yearly round of certificates, family paperwork and pension statements. The Metrics log, Job application, Training program, Monthly budget and bills, Development plan and Resume templates pair with the projects that name them. Installing adds all 50 projects as active, so archive the ones that are not for you yet.
