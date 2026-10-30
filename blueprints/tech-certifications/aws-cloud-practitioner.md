---
id: tech-certifications.aws-cloud-practitioner
name: AWS Cloud Practitioner
description: "A complete route to AWS Certified Cloud Practitioner: a guarded free-tier account, the four exam domains studied in order, weekly practice, hands-on labs, booking, exam day and the badge."
category: personal
version: 1.0.0
tags: [tech-certifications, aws-cloud-practitioner, student, knowledge-worker, engineer, aws, cloud-computing, exam-prep]
author: Aurum Technology
starter_structure:
  templates:
    - purchase-decision
    - habit-tracker
    - metrics-log
    - resume
    - portfolio-piece
  pillars:
    - name: Tech & Engineering Certifications
      emoji: "🏅"
      description: "Technical credentials and the exams behind them: FE and PE licensing, Chartered Engineer and Trinidad and Tobago engineering registration, PMP, PRINCE2 and Scrum, AWS, Azure and Google Cloud by level, Kubernetes and Terraform, networking and security certifications, Six Sigma belts, and coding, system design and machine-learning interviews."
      pillarFrontmatter:
        review_cadence: monthly
      areas:
        - name: AWS Cloud Practitioner
          description: "Starting AWS certification with Cloud Practitioner: core services, billing and pricing, security and the shared responsibility model, free-tier practice and the exam."
          projects:
            - name: Deciding whether Cloud Practitioner is your first AWS exam
              description: |-
                ## Purpose
                Cloud Practitioner is the foundational AWS exam, built for people who need to talk about cloud with confidence rather than build on it every day. Engineers with a year of hands-on AWS often skip straight to an associate exam, while students and non-technical staff usually gain most from starting here. An evening comparing your background against both routes saves weeks spent on the wrong syllabus.

                ## Milestones
                1. The official Cloud Practitioner and Solutions Architect Associate exam pages read side by side.
                2. Your current cloud experience written down in five lines: tools used, roles held, anything built.
                3. A clear answer on whether the foundational exam adds value for your next role.
                4. The decision and its reason written at the top of your study notes.

                ## Notes
                Cloud Practitioner is optional on the AWS path, not a prerequisite. If you already deploy workloads on AWS at work, ask whether your employer values the foundational badge before spending on it.
              priority: high
              deadlineOffsetDays: 14
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A written decision to sit Cloud Practitioner or skip to an associate exam, with one sentence of reasoning based on your listed experience."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Read the Cloud Practitioner page on the AWS Certification website"
                - "List the cloud tools and services you have used and for how long"
                - "Ask your manager or tutor which AWS credential they would value most"
                - "Write your decision and reason at the top of your study notes"
            - name: Current exam guide and AWS certification policies check
              description: |-
                ## Purpose
                AWS publishes an exam guide for each version of Cloud Practitioner, with the domains, the in-scope and out-of-scope services and the question types, and it replaces the exam code when the content changes. Courses and books written for an older version still circulate cheaply. An hour with the current guide and the certification policies tells you what is examined, what it costs in your currency and what happens if you need a retake.

                ## Milestones
                1. The current exam guide downloaded, with its exam code and version noted.
                2. The four content domains and their published weightings copied into your notes.
                3. The list of in-scope services saved as a checklist for later study.
                4. Fee, retake waiting period, scoring scale and validity period recorded from the official pages.

                ## Notes
                Check every number on the AWS Certification website on the day you read it. Third-party blogs often repeat fees and question counts from a retired version.
              priority: high
              deadlineOffsetDays: 10
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A notes page listing the current exam code, the four domains with weightings, the in-scope service list, the fee and the retake rule, each copied from an official AWS page."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Download the current Cloud Practitioner exam guide from the AWS Certification site"
                - "Copy the domain names and weightings into your study notes"
                - "Save the in-scope services appendix as a checklist"
                - "Note the fee, retake policy and validity period from the certification policies page"
            - name: AWS Certification and Skill Builder accounts
              description: |-
                ## Purpose
                Booking, score reports, badges and vouchers all live in your AWS Certification account, while the free official course and practice question set live in AWS Skill Builder. People who register with a work email lose access to their own certification history when they change jobs. Setting both up once, with a personal email and your name exactly as it appears on your ID, avoids an exam-day check-in problem.

                ## Milestones
                1. An AWS Certification account created with a personal email address.
                2. Your legal name in the account checked letter by letter against your government ID.
                3. An AWS Skill Builder account linked to the same identity.
                4. The free Cloud Practitioner course and official practice question set added to your Skill Builder plan.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Certification and Skill Builder accounts exist under a personal email, the name matches your ID exactly, and the official course is enrolled."
                cadence: one-shot
                effort_hours_estimate: "1"
              tasks:
                - "Create your AWS Certification account using a personal email address"
                - "Compare the name on the account with your passport or national ID"
                - "Sign in to AWS Skill Builder with the same identity"
                - "Enrol in the free Cloud Practitioner Essentials course"
            - name: Practice AWS account with the root user locked down
              description: |-
                ## Purpose
                A brand new AWS account starts with a root user that can do anything, including run up a large bill, and leaked root credentials are a common way beginners get hurt. Locking the root user away with multi-factor authentication and doing all lab work as a separate administrator identity is also exactly what the security domain of the exam expects you to know. Doing it now means every later lab starts from a safe account.

                ## Milestones
                1. A personal AWS account created that is separate from any employer account.
                2. Multi-factor authentication switched on for the root user and the recovery details stored safely.
                3. A separate administrator identity created for daily lab work, through IAM Identity Center or an IAM user.
                4. No access keys exist for the root user, confirmed in the security credentials page.

                ## Notes
                Never practise in an employer's production account. Sign up yourself and enter your own payment details; nobody else should handle them for you.
              priority: high
              deadlineOffsetDays: 7
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A personal AWS account whose root user has MFA and no access keys, with labs done through a separate administrator identity."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Sign up for a personal AWS account with an email used only for it"
                - "Turn on MFA for the root user and store the recovery codes offline"
                - "Create a separate administrator identity for everyday lab work"
                - "Review IAM users, roles and access keys for anything unused @recurring(quarterly)"
            - name: Zero-spend budget and billing alerts before the first lab
              description: |-
                ## Purpose
                Most surprise AWS bills come from a resource left running after a tutorial: a NAT gateway, an unattached Elastic IP or a database someone forgot. A budget that emails you the moment spend goes above zero, plus free-tier usage alerts, turns a possible month of charges into a same-day warning. It takes twenty minutes and should be in place before you launch anything.

                ## Milestones
                1. A zero-spend or small monthly budget created in AWS Budgets with email alerts.
                2. Free-tier usage alerts switched on in the billing preferences.
                3. Cost Explorer enabled so later charges can be traced to a service.
                4. A test alert email received and filtered so it reaches your inbox, not spam.

                ## Notes
                Check what your account's free tier or starting credits actually cover and when they end. The offer for new accounts has changed over time and differs from older tutorials.
              priority: high
              deadlineOffsetDays: 7
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "AWS Budgets shows an active zero-spend or low monthly budget with email alerts, and free-tier usage alerts are switched on."
                cadence: one-shot
                effort_hours_estimate: "1"
              tasks:
                - "Create a zero-spend budget in AWS Budgets with your email as recipient"
                - "Turn on free-tier usage alerts in the billing preferences"
                - "Enable Cost Explorer in the billing console"
                - "Read what your account's free tier or credits cover and note the end date"
            - name: Diagnostic practice set and domain baseline
              description: |-
                ## Purpose
                Starting with a cold practice set feels uncomfortable, but it shows which of the four domains already make sense and which are blank, so study time goes where it is needed. A business graduate often scores well on billing and pricing and poorly on networking, while an engineer is often the reverse. Recording the baseline by domain gives you something real to measure progress against.

                ## Milestones
                1. The official practice question set or a reputable full-length set taken once without notes.
                2. The score recorded overall and for each of the four domains.
                3. The two weakest domains named in your study plan.
                4. Every wrong answer copied into a wrong-answer log with the topic it belongs to.

                ## Notes
                Start from the **Metrics log** template. A low first score is expected and useful; do not retake the same set until a few weeks have passed or the score will measure memory, not knowledge.
              priority: high
              deadlineOffsetDays: 14
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A metrics log entry with an overall diagnostic score and four domain scores, and the two weakest domains named."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Book a quiet ninety minutes for the diagnostic set"
                - "Take the official practice question set without notes"
                - "Record your overall and per-domain results in the metrics log"
                - "Copy every wrong answer into the wrong-answer log with its domain"
            - name: Dated eight-week Cloud Practitioner study plan
              description: |-
                ## Purpose
                Without a target week, foundational study tends to drift for months because nothing feels urgent. Laying out eight weeks by domain, with the weakest domains early, lab sessions slotted in and two buffer weeks before the booking, turns the exam guide into a calendar you can keep. Shorter plans suit engineers; longer ones suit people studying from scratch around work.

                ## Milestones
                1. A target exam week chosen and written down.
                2. Each week assigned to a domain or set of services from the exam guide.
                3. Two study blocks a week placed in your calendar for the whole plan.
                4. Practice exam dates fixed for weeks four, six and seven.
                5. The plan shared with one person who will ask how it is going.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A written week-by-week plan with a target exam week, two calendar study blocks a week and three dated practice exams."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Pick a target exam week eight weeks from now"
                - "Assign each study week to a domain, weakest domains first"
                - "Put two recurring study blocks in your calendar"
                - "Ask the agent to turn your domain list into a one-page weekly plan"
            - name: Choosing one course and one practice question bank
              description: |-
                ## Purpose
                Beginners often buy three video courses and two question banks, then finish none of them. One main course, chosen against the current exam version, plus one question bank with explanations for every answer, is enough for nearly everyone. Comparing a few options against the same criteria takes an afternoon and saves money.

                ## Milestones
                1. The free official AWS course and two paid options listed with price and last-updated date.
                2. Each option checked against the current exam code.
                3. One practice question bank chosen with full answer explanations.
                4. The final choice and total cost recorded, with everything else unsubscribed.

                ## Notes
                Start from the **Purchase decision** template. Avoid sites that sell real exam questions; using them breaks the candidate agreement and can lead to a revoked certification.
              priority: medium
              deadlineOffsetDays: 21
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "One main course and one question bank chosen against the current exam code, with total spend recorded."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "List the official free course and two paid courses with prices"
                - "Check each one names the current exam code"
                - "Try ten sample questions from two question banks"
                - "Record the chosen course, bank and total cost"
            - name: Plain-language cloud glossary for starters
              description: |-
                ## Purpose
                Half the difficulty of Cloud Practitioner for non-engineers is vocabulary: elasticity, availability zone, edge location, capital versus operating expense, serverless. A personal glossary in your own words, built as you meet each term, turns the questions from jargon into common sense. Engineers benefit too, since the exam uses AWS's own phrasing rather than everyday shorthand.

                ## Milestones
                1. A glossary page started with at least thirty terms from the exam guide.
                2. Each term defined in one sentence in your own words, with an everyday example.
                3. Terms that are easily confused, such as scalability and elasticity, set side by side.
                4. The glossary reread in full before each practice exam.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A glossary of at least sixty exam terms, each with a one-sentence definition in your own words."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Start a glossary page with the first ten terms from the exam guide"
                - "Write each definition in your own words with an example"
                - "Pair up easily confused terms side by side"
                - "Add five new terms from this week's study @recurring(weekly:wed)"
            - name: Exam voucher, discount and training budget request
              description: |-
                ## Purpose
                Many employers will pay for a foundational cloud exam if asked with a short case, and AWS and its partners periodically run training events, challenges and student programmes that include discounts or vouchers. Asking before you pay, and checking whether your account already holds a discount benefit, can cut the cost to nothing. A clear written request also tells your manager what to expect from you afterwards.

                ## Milestones
                1. Your organisation's training or certification budget policy found and read.
                2. A short request sent covering the cost, the target date and how the knowledge helps your role.
                3. Current AWS discount offers or voucher events checked on official pages.
                4. The outcome recorded: funded, part funded or self-funded, with any voucher code stored safely.
              priority: medium
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A written funding request sent or a decision to self-fund recorded, with current discount offers checked on official AWS pages."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Find your employer's policy on paying for certifications"
                - "Write a five-line funding request with cost, date and benefit to your role"
                - "Check the AWS Certification benefits page for current discount offers"
                - "Record the funding outcome and store any voucher code"
            - name: Twice-weekly protected study blocks
              description: |-
                ## Purpose
                Consistent short sessions beat occasional long weekends for a foundational exam, because most of the content is recognition: which service does what, and who is responsible for what. Two fixed blocks a week, guarded like a meeting, keep the eight-week plan moving through busy patches. Tracking whether they happened shows early when the plan needs to stretch.

                ## Milestones
                1. Two study blocks of at least forty-five minutes fixed on the same days each week.
                2. A habit tracker kept for the blocks, with missed ones noted and the reason given.
                3. At least fourteen of the planned sixteen blocks completed over eight weeks.
                4. Blocks moved, not dropped, when a clash comes up.

                ## Notes
                Start from the **Habit tracker** template. Put the course video or reading for each block in the calendar entry so you start without deciding what to do.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A habit tracker showing at least fourteen completed study blocks across the eight-week plan."
                cadence: rolling
              tasks:
                - "Choose two fixed weekly slots for study and block them in your calendar"
                - "Write the planned topic into each calendar entry"
                - "Complete the planned study block and tick it off @recurring(weekly:tue,sat)"
                - "Move any missed block to another day in the same week"
            - name: Daily ten-question warm-up
              description: |-
                ## Purpose
                Ten scenario questions a day, done on the bus or with coffee, builds the habit of reading AWS's wording carefully: the cheapest option, the most secure option, the one that needs the least management. Over eight weeks that adds up to several hundred questions without a single long session. It also exposes weak services quickly, while there is still time to fix them.

                ## Milestones
                1. A question bank available on your phone.
                2. Ten questions answered on most days of the week.
                3. A running accuracy figure recorded weekly.
                4. Accuracy above your diagnostic baseline in every domain by week six.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A weekly accuracy record covering at least six weeks of daily ten-question sets, with every domain above its diagnostic baseline."
                cadence: rolling
              tasks:
                - "Install the question bank app or bookmark it on your phone"
                - "Answer ten practice questions and read every explanation @recurring(daily)"
                - "Write this week's accuracy figure in the metrics log"
                - "Note any service that appears wrong twice in one week"
            - name: Wrong-answer log and weekly review
              description: |-
                ## Purpose
                Practice questions only teach you something when you understand why the wrong answer looked right. A log that records each miss, the domain, the trap and the correct reasoning turns mistakes into a short personal revision list. Reviewing it once a week stops the same confusion, such as Shield versus WAF, costing marks on exam day.

                ## Milestones
                1. A wrong-answer log set up with columns for question topic, domain, your answer, correct answer and the reason.
                2. Every missed practice question entered within a day.
                3. A weekly review held, with repeated mistakes marked.
                4. Entries that have been answered correctly twice in a row archived.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A wrong-answer log with entries for every missed question and a dated weekly review note for each study week."
                cadence: rolling
              tasks:
                - "Set up the wrong-answer log with five columns"
                - "Enter each missed question with the reason the right answer is right"
                - "Review the log and mark repeated mistakes @recurring(weekly:sun)"
                - "Archive entries you have answered correctly twice"
            - name: Monthly timed full-length practice exam
              description: |-
                ## Purpose
                Short question sets do not show whether you can stay focused through a full sitting or pace yourself to leave time for flagged questions. A full-length practice exam under exam conditions once a month gives an honest score by domain and a pacing check. The trend across three or four of these is the best evidence you have for booking or delaying.

                ## Milestones
                1. A full-length practice exam taken under timed conditions each month.
                2. Overall and per-domain scores recorded in the metrics log.
                3. Pacing noted: time left at the end and number of flagged questions.
                4. Two consecutive full-length scores comfortably above the passing standard you have set yourself.

                ## Notes
                Start from the **Metrics log** template. Use a different full-length set each time; repeating one inflates the score.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "At least three full-length timed practice exams logged with domain scores and pacing notes before the exam date."
                cadence: rolling
              tasks:
                - "Choose three different full-length practice exams for the coming months"
                - "Sit one full-length practice exam under timed conditions @recurring(monthly:14)"
                - "Log overall and domain scores with pacing notes @recurring(monthly:15)"
                - "Compare the trend with your diagnostic baseline"
            - name: Service-name flashcards with spaced repetition
              description: |-
                ## Purpose
                Cloud Practitioner expects you to recognise a long list of service names and pick the right one from a one-line need: a managed graph database, a service for discovering sensitive data in S3, a way to share compliance reports. Flashcards with the need on one side and the service on the other, reviewed with a spaced repetition app, fix these faster than rereading notes.

                ## Milestones
                1. A flashcard deck built from the in-scope services list in the exam guide.
                2. Each card written as a need on the front and the service on the back.
                3. Reviews done twice a week with the app scheduling the cards.
                4. Fewer than one in ten cards failed in a review by the final fortnight.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A flashcard deck covering every in-scope service family, with a review failure rate under ten percent in the last two weeks."
                cadence: rolling
              tasks:
                - "Install a spaced repetition flashcard app"
                - "Turn the in-scope service checklist into need-to-service cards"
                - "Review the deck and let the app reschedule cards @recurring(weekly:mon,thu)"
                - "Rewrite any card you fail three times in a clearer way"
            - name: Monthly AWS bill and free-tier usage check
              description: |-
                ## Purpose
                Even with alerts, a practice account accumulates small charges: snapshots, idle load balancers, data left in a storage class with a minimum duration. Opening the bill once a month and tracing every non-zero line to a service keeps the account clean and teaches you how AWS pricing really works, which is a whole exam domain in itself.

                ## Milestones
                1. The current month's bill opened in the billing console.
                2. Every charge traced to a service and a region in Cost Explorer.
                3. Any unexpected charge explained and its resource deleted.
                4. A one-line note in your log for each month: total, cause, action.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A monthly bill note for each month the account is open, with every non-zero charge explained and resolved."
                cadence: rolling
              tasks:
                - "Open the billing console and view this month's charges @recurring(monthly:3)"
                - "Group charges by service and region in Cost Explorer"
                - "Delete any resource behind a charge you did not expect"
                - "Write the month's total and cause in your account log"
            - name: Lab tear-down checklist after every session
              description: |-
                ## Purpose
                Deleting labs properly is what keeps practice cheap. A short checklist used at the end of every hands-on session, checking each region you touched for instances, volumes, snapshots, Elastic IPs, NAT gateways and databases, prevents the slow trickle of charges that makes people give up on hands-on practice.

                ## Milestones
                1. A written tear-down checklist covering the resource types that cost money when idle.
                2. The checklist used after every lab session.
                3. A weekly sweep of all regions for anything still running.
                4. Four consecutive weeks with no unexplained charges on the bill.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A tear-down checklist in use and four consecutive weeks with no unexplained practice account charges."
                cadence: rolling
              tasks:
                - "Write a tear-down checklist of resource types that cost money when idle"
                - "Run the checklist at the end of each lab session"
                - "Sweep every region you used for leftover resources @recurring(weekly:fri)"
                - "Note any resource you missed and add it to the checklist"
            - name: Monthly study plan reset
              description: |-
                ## Purpose
                Eight-week plans rarely survive contact with a busy month. A short reset at the end of each month, looking at completed blocks, practice scores and the domains still weak, lets you move the target week deliberately instead of drifting past it. It is also the moment to decide whether the plan needs more hands-on work or more questions.

                ## Milestones
                1. A monthly review held with completed blocks and latest scores in front of you.
                2. The weakest domain for the next month named.
                3. The target exam week confirmed or moved, with the reason written down.
                4. Next month's study blocks updated in the calendar.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A dated monthly reset note for each month of study, each naming the weakest domain and confirming or moving the exam week."
                cadence: rolling
              tasks:
                - "Review this month's study blocks, scores and weak domains @recurring(monthly:28)"
                - "Name next month's focus domain"
                - "Confirm or move the target exam week and write why"
                - "Update next month's calendar blocks to match"
            - name: Cloud concepts and the Well-Architected pillars
              description: |-
                ## Purpose
                The cloud concepts domain asks why organisations move to the cloud: trading capital expense for variable expense, economies of scale, stopping guessing capacity, speed and global reach. It also expects you to recognise the six pillars of the Well-Architected Framework and match a scenario to the right one. Learning these first gives every later service a reason to exist.

                ## Milestones
                1. The main benefits of cloud computing summarised in your own words with an example each.
                2. The six Well-Architected pillars listed with one design principle for each.
                3. Ten scenario questions sorted correctly by pillar.
                4. A practice set on cloud concepts scored at least as well as your best domain.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A one-page summary of cloud benefits and the six Well-Architected pillars, plus a cloud concepts practice set scored above your diagnostic baseline."
                cadence: phased
                effort_hours_estimate: "5"
              tasks:
                - "Watch the cloud concepts module of your chosen course"
                - "Write the benefits of cloud computing with one example each"
                - "List the six Well-Architected pillars and a design principle for each"
                - "Take a cloud concepts practice set and log the result"
            - name: Cloud adoption framework and migration strategies
              description: |-
                ## Purpose
                Questions about moving to AWS test two ideas that confuse many candidates: the perspectives of the AWS Cloud Adoption Framework, and the migration strategies often called the seven Rs, from rehost and replatform to retire and retain. Knowing which strategy fits a lift-and-shift, a database swap or a rebuild is easy marks once the terms are clear, and very useful in non-technical roles.

                ## Milestones
                1. The Cloud Adoption Framework perspectives listed with who in an organisation owns each.
                2. Each migration strategy defined with a one-line example.
                3. Migration tools such as the Database Migration Service and the Snow family matched to their use.
                4. A mixed practice set on adoption and migration answered with no repeated mistakes.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Notes defining each Cloud Adoption Framework perspective and each migration strategy with an example, and a practice set on the topic logged."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Read the AWS overview of the Cloud Adoption Framework perspectives"
                - "Write one example workload for each migration strategy"
                - "Match the main migration services to the problem each solves"
                - "Answer a practice set on adoption and migration"
            - name: Regions, Availability Zones and edge locations
              description: |-
                ## Purpose
                Global infrastructure is a short topic that appears in many questions: why deploy across more than one Availability Zone, when to choose a region for data residency or latency, and what edge locations do for content delivery. Drawing the hierarchy once, and opening the region selector in the console to see it, makes these questions straightforward.

                ## Milestones
                1. A sketch of a region containing several Availability Zones and their data centres.
                2. The four common factors for choosing a region written down: compliance, latency, service availability and price.
                3. Edge locations, Local Zones and Wavelength Zones each described in one line.
                4. Global infrastructure questions answered correctly in two practice sets in a row.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A labelled sketch of AWS global infrastructure and two consecutive practice sets with no global infrastructure mistakes."
                cadence: phased
                effort_hours_estimate: "3"
              tasks:
                - "Sketch a region with three Availability Zones on one page"
                - "Open the console region selector and note the region nearest you"
                - "Write the factors for choosing a region with an example of each"
                - "Describe edge locations and Local Zones in one line each"
            - name: Shared responsibility model by service type
              description: |-
                ## Purpose
                The shared responsibility model is the single idea most often tested in the security domain, and the line moves depending on the service. On EC2 you patch the operating system; on RDS AWS does; on Lambda you only own your code, data and permissions. Working through real services one by one turns a slogan into answers you can defend.

                ## Milestones
                1. The model summarised as security of the cloud versus security in the cloud.
                2. A table covering EC2, RDS, S3 and Lambda showing who handles patching, encryption settings, network rules and data.
                3. Shared controls, such as patch management and awareness training, listed with each side's part.
                4. Every shared responsibility question correct in your last two practice sets.

                ## Notes
                Most wrong answers here come from assuming AWS manages the guest operating system on EC2. It does not.
              priority: high
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A table splitting customer and AWS duties for EC2, RDS, S3 and Lambda, and no shared responsibility mistakes in two consecutive practice sets."
                cadence: phased
                effort_hours_estimate: "3"
              tasks:
                - "Read the AWS shared responsibility model page"
                - "Build a table of duties for EC2, RDS, S3 and Lambda"
                - "List the shared controls and each side's part in them"
                - "Quiz yourself on five services not in the table"
            - name: IAM essentials with users, groups, roles and policies
              description: |-
                ## Purpose
                Identity and access management is where security questions and real-world mistakes meet: when to use a role instead of long-term keys, why the root user should almost never be used, what least privilege looks like in a policy. Creating a group, a user and a role in your own account makes the vocabulary concrete in an evening.

                ## Milestones
                1. The difference between users, groups, roles and policies written in plain words.
                2. A group with a read-only policy created and a test user added to it in your practice account.
                3. A role created that an EC2 instance could assume, without any access keys.
                4. The tasks that only the root user can perform listed from the AWS documentation.
                5. The test user deleted after the lab.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Notes on IAM concepts plus a completed lab creating and removing a group, user and role, with the root-only tasks listed."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Write one-line definitions of IAM users, groups, roles and policies"
                - "Create a read-only group and a test user in your practice account"
                - "Create a role for EC2 and read its trust policy"
                - "List the tasks that require the root user"
            - name: Security and compliance services map
              description: |-
                ## Purpose
                GuardDuty, Inspector, Macie, Detective, Security Hub, Shield, WAF, KMS, CloudHSM, Secrets Manager and Artifact all appear in the exam guide, and many of them sound alike. A single page grouping them by job, such as threat detection, protecting web traffic, encryption keys or compliance reports, makes the right answer obvious in most questions.

                ## Milestones
                1. Every security service from the exam guide placed in a group by the job it does.
                2. Pairs that are often confused, such as Shield and WAF or Inspector and GuardDuty, written side by side.
                3. Where to find AWS compliance reports and agreements noted.
                4. A security domain practice set scored above your diagnostic baseline.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: artifact
                success_criteria: "A one-page security services map covering every in-scope security service, and a security practice set scored above the diagnostic baseline."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "List every security service named in the exam guide"
                - "Group the services by job on one page"
                - "Write the commonly confused pairs side by side with the difference"
                - "Take a security and compliance practice set and log the score"
            - name: Compute choices from EC2 to Lambda
              description: |-
                ## Purpose
                Compute questions describe a workload and ask for the best fit: virtual servers on EC2, functions on Lambda, containers on ECS, EKS or Fargate, a simple managed platform on Elastic Beanstalk, or a bundled small server on Lightsail. Knowing what each option manages for you, and when Auto Scaling and Elastic Load Balancing come in, covers a large share of the technology domain.

                ## Milestones
                1. Each compute option described by what you manage and what AWS manages.
                2. EC2 instance families named by their broad purpose: general, compute, memory, storage, accelerated.
                3. Auto Scaling and Elastic Load Balancing explained with one scenario each.
                4. Ten compute scenario questions answered with the reasoning written for any mistake.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A comparison of AWS compute options by management responsibility, and a compute scenario set logged with reasons for every mistake."
                cadence: phased
                effort_hours_estimate: "5"
              tasks:
                - "Watch the compute module of your chosen course"
                - "Write a comparison of EC2, Lambda, containers, Beanstalk and Lightsail"
                - "Describe one scenario each for Auto Scaling and load balancing"
                - "Answer ten compute scenario questions and log the result"
            - name: Storage and database services compared
              description: |-
                ## Purpose
                Storage and databases are tested by matching needs to services: object storage on S3 with its storage classes, block storage on EBS, shared file systems on EFS, relational databases on RDS and Aurora, key-value on DynamoDB and warehousing on Redshift. A comparison table with a typical use for each is the quickest way to stop mixing them up.

                ## Milestones
                1. S3, EBS, EFS and instance store compared by type, durability and typical use.
                2. S3 storage classes ordered from frequent access to archive.
                3. RDS, Aurora, DynamoDB, ElastiCache and Redshift each matched to a workload.
                4. A storage and database practice set answered with no repeated wrong-answer topics.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: artifact
                success_criteria: "A comparison table for AWS storage and database services with a typical workload each, and a practice set on the topic logged."
                cadence: phased
                effort_hours_estimate: "5"
              tasks:
                - "Build a table comparing S3, EBS, EFS and instance store"
                - "List the S3 storage classes from most to least frequently accessed"
                - "Match each database service to an example workload"
                - "Take a storage and database practice set"
            - name: Networking and content delivery basics
              description: |-
                ## Purpose
                Networking worries many non-engineers, but the exam asks only the basics: what a VPC is, public and private subnets, security groups versus network ACLs, how Route 53, CloudFront, Direct Connect and Site-to-Site VPN fit in. Building one simple VPC in the console, then deleting it, makes the diagrams in the course make sense.

                ## Milestones
                1. A VPC diagram drawn with one public and one private subnet, an internet gateway and route tables.
                2. Security groups and network ACLs compared by state, level and rule type.
                3. Route 53, CloudFront, Direct Connect and VPN each described with a use case.
                4. A small VPC created with the console wizard, inspected and removed.

                ## Notes
                The VPC wizard can offer a NAT gateway, which is charged by the hour. Leave it out for this lab.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A labelled VPC diagram, a security group versus network ACL comparison, and a lab VPC created and deleted with no NAT gateway charges."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Draw a VPC with a public and a private subnet"
                - "Compare security groups and network ACLs in a short table"
                - "Create a VPC with the wizard without a NAT gateway, then delete it"
                - "Write one use case each for Route 53, CloudFront, Direct Connect and VPN"
            - name: Pricing models, support plans and cost tools
              description: |-
                ## Purpose
                Billing, pricing and support is the domain where non-technical candidates can pick up the most marks. It covers On-Demand, Savings Plans, Reserved Instances, Spot and Dedicated options, the support plan tiers and what each includes, and which tool answers which question: the Pricing Calculator, Cost Explorer, Budgets, the Cost and Usage Report and consolidated billing in Organizations.

                ## Milestones
                1. Each purchasing option described with the type of workload it suits.
                2. The support plans compared on response times, technical account manager access and Trusted Advisor checks, from the current support page.
                3. Each cost tool matched to the question it answers.
                4. A billing and pricing practice set scored above your diagnostic baseline.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Notes comparing purchasing options, support plans and cost tools, and a billing and pricing practice set scored above the diagnostic baseline."
                cadence: phased
                effort_hours_estimate: "5"
              tasks:
                - "Write one workload example for each EC2 purchasing option"
                - "Compare the support plans from the current AWS Support page"
                - "Match each cost management tool to the question it answers"
                - "Take a billing and pricing practice set"
            - name: Management and governance tools tour in the console
              description: |-
                ## Purpose
                CloudWatch, CloudTrail, Config, Trusted Advisor, Organizations, Control Tower, Systems Manager and the Health Dashboard are easy to confuse on paper. Opening each one in your practice account and noting what it actually shows takes a couple of hours and fixes the difference between monitoring performance, recording API calls and checking configuration for good.

                ## Milestones
                1. CloudWatch, CloudTrail and Config each opened and described in one line: metrics, API history, configuration record.
                2. Trusted Advisor checks reviewed and the categories noted.
                3. Organizations and Control Tower described by when a business would use them.
                4. The Health Dashboard checked for your region.
              priority: low
              frontmatter:
                mode: building
                output_kind: knowledge
                success_criteria: "A notes page describing eight management and governance services in one line each, written after opening each in the console."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Open CloudWatch, CloudTrail and Config and note what each shows"
                - "Review the Trusted Advisor categories and note one check @recurring(monthly:10)"
                - "Write when a business would use Organizations and Control Tower"
                - "Check the Health Dashboard for your region"
            - name: Analytics, AI and machine learning service recognition
              description: |-
                ## Purpose
                Recognising analytics and AI services by what they do is part of the current exam: Athena, Kinesis, Glue, QuickSight and EMR on the data side, and SageMaker, Bedrock, Rekognition, Comprehend, Transcribe, Polly, Translate, Lex and Textract on the AI side. Nobody needs to build with them for this exam, but a clear one-line purpose for each turns a dozen likely questions into quick wins.

                ## Milestones
                1. Every analytics and AI service from the exam guide listed with a one-line purpose.
                2. AI services grouped by input: images, text, speech, documents and conversations.
                3. Flashcards added for each one.
                4. A mixed set of service recognition questions answered with at least as much accuracy as your strongest domain.
              priority: low
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A list of every in-scope analytics and AI service with a one-line purpose, and matching flashcards added to your deck."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Pull the analytics and AI services from the exam guide checklist"
                - "Write a one-line purpose for each"
                - "Group the AI services by the kind of input they handle"
                - "Add a flashcard for each service to your deck"
            - name: Static website on S3 behind CloudFront
              description: |-
                ## Purpose
                A small static site is the classic first lab because it touches several exam topics at once: an S3 bucket, bucket policies and public access settings, CloudFront edge caching and, optionally, a Route 53 domain. It also gives you something real to show. An afternoon is enough, and the charges should be close to nothing if you tear it down afterwards.

                ## Milestones
                1. An S3 bucket created and a one-page HTML site uploaded.
                2. The site served through a CloudFront distribution rather than a public bucket.
                3. The bucket's block public access settings understood and left on.
                4. Screenshots and a short note of the steps saved.
                5. The distribution and bucket deleted, or kept deliberately with the cost noted.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A static page served through CloudFront from an S3 bucket, documented with screenshots and then removed or kept with its cost recorded."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Write a one-page HTML file for the test site"
                - "Create an S3 bucket and upload the page"
                - "Serve the page through a CloudFront distribution"
                - "Save screenshots and a note of every step"
            - name: First EC2 instance launched, connected and terminated
              description: |-
                ## Purpose
                Launching one small instance shows what AMIs, instance types, key pairs, security groups and EBS volumes look like in practice, and why stopping an instance is different from terminating it. Doing it once, slowly, with notes, makes dozens of compute and responsibility questions feel familiar.

                ## Milestones
                1. A small free-tier-eligible instance launched in your nearest region.
                2. A connection made through the browser-based connect option, with no inbound SSH open to the world.
                3. The attached EBS volume and security group inspected.
                4. The instance terminated and its volume confirmed deleted.

                ## Notes
                Check that the instance type is covered by your account's free tier or credits before launching.
              priority: medium
              frontmatter:
                mode: building
                output_kind: knowledge
                success_criteria: "One EC2 instance launched, connected to and terminated, with notes covering the AMI, instance type, security group and volume."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Check which instance types your free tier or credits cover"
                - "Launch one small instance with a restrictive security group"
                - "Connect through the browser and look at the attached volume"
                - "Terminate the instance and confirm the volume is gone"
            - name: Pricing Calculator estimate for a small business website
              description: |-
                ## Purpose
                Estimating a real workload is the best way to understand pricing questions, and it is a skill people in finance, sales and project roles use straight away. Pricing a modest website with a couple of instances, a managed database, storage and data transfer shows which line items dominate and how a Savings Plan changes the total.

                ## Milestones
                1. A simple workload written down: users, storage, database and expected traffic.
                2. An estimate built in the AWS Pricing Calculator with each component listed.
                3. A second version using a commitment-based pricing option, with the difference noted.
                4. A shareable estimate link and a three-line summary of what drives the cost.
              priority: low
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "A saved Pricing Calculator estimate in two versions, on-demand and committed, with a summary naming the largest cost drivers."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Write a short description of a small business website workload"
                - "Build the estimate in the AWS Pricing Calculator"
                - "Duplicate it with a commitment-based pricing option"
                - "Summarise the biggest cost drivers in three lines"
            - name: Book, delay or retake readiness decision
              description: |-
                ## Purpose
                Booking too early wastes a fee; booking never wastes months. A short written rule decided in advance, for example two different full-length practice exams above a margin you choose and no domain below your target, takes the emotion out of the choice. Applying the rule two weeks before the target week gives a clear book, delay or reschedule answer.

                ## Milestones
                1. A readiness rule written before the first full-length practice exam.
                2. Your last two full-length scores and weakest domain compared against the rule.
                3. A decision recorded: book, delay by a set number of weeks, or reschedule an existing booking.
                4. Any delay paired with a specific fix for the weak domain.

                ## Notes
                Check the rescheduling and cancellation deadlines on your booking before deciding; late changes may lose the fee.
              priority: medium
              deadlineOffsetDays: 50
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A written readiness rule and a dated book, delay or reschedule decision made against it."
                cadence: one-shot
                effort_hours_estimate: "1"
              tasks:
                - "Write your readiness rule in two sentences"
                - "Compare your last two full-length scores with the rule"
                - "Record the decision to book, delay or reschedule"
                - "Plan the fix for any domain still below target"
            - name: Online proctored or test centre delivery choice
              description: |-
                ## Purpose
                AWS exams can usually be taken at a test centre or online with a remote proctor, and the choice changes what can go wrong. Online delivery needs a quiet private room, a clear desk, a reliable connection and a computer that passes the system test; a test centre needs travel and an available slot. Deciding early, and running the system test on the actual machine, avoids a lost sitting.

                ## Milestones
                1. Both delivery options read on the current AWS exam delivery pages.
                2. The official system test run on the computer and network you would use.
                3. The nearest test centres and their available slots checked.
                4. A delivery choice recorded with the reason.

                ## Notes
                Work laptops often fail online proctoring checks because of security software. Test on the exact machine you will use.
              priority: medium
              deadlineOffsetDays: 40
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A recorded choice of online or test centre delivery, backed by a passed system test or a confirmed test centre slot."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Read the online and test centre delivery rules on the AWS exam pages"
                - "Run the official system test on the computer you would use"
                - "Check slots at the two nearest test centres"
                - "Record your delivery choice and why"
            - name: Non-native English language accommodation request
              description: |-
                ## Purpose
                Candidates sitting an AWS exam in a language that is not their first can usually request an accommodation that adds extra time, but it must be requested in the certification account before booking. Many people who would qualify never ask. Checking the current terms takes ten minutes and the extra time can matter on long scenario questions.

                ## Milestones
                1. The current accommodation options read on the AWS Certification site.
                2. Eligibility checked against your own situation.
                3. The accommodation requested in your certification account, if it applies.
                4. The approval confirmed as active before you book the exam.

                ## Notes
                Other accommodations for disability or medical needs follow a separate request with supporting documents and take longer. Start early if you need one.
              priority: low
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "The accommodation either requested and showing as approved in your certification account before booking, or confirmed as not applicable."
                cadence: one-shot
                effort_hours_estimate: "1"
              tasks:
                - "Read the exam accommodations page on the AWS Certification site"
                - "Decide whether the language accommodation applies to you"
                - "Submit the request in your certification account"
                - "Confirm the approval shows before booking"
            - name: Booking the Cloud Practitioner exam
              description: |-
                ## Purpose
                Nothing turns study into preparation like a booked date. Booking through your certification account once your readiness rule is close, with any voucher applied, any accommodation active and a slot at a time of day you think clearly, sets the countdown for the final fortnight. The confirmation email holds the details you will need on the day.

                ## Milestones
                1. Any voucher, discount and accommodation applied before checkout.
                2. A date and time booked at your chosen test centre or online.
                3. The confirmation email saved and the appointment in your calendar with a reminder.
                4. The reschedule and cancellation deadlines written next to the appointment.
              priority: high
              deadlineOffsetDays: 45
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A confirmed exam booking with the confirmation saved, the date in your calendar and the reschedule deadline recorded."
                cadence: one-shot
                effort_hours_estimate: "1"
              tasks:
                - "Apply any voucher or discount code in your certification account"
                - "Book a date and time at your chosen delivery option"
                - "Save the confirmation and add the appointment to your calendar"
                - "Write down the last date you can reschedule without losing the fee"
            - name: Final fortnight revision before the exam
              description: |-
                ## Purpose
                Consolidation, not new material, is the job of the last two weeks. Rereading the wrong-answer log, the security services map and the pricing notes, taking one last full-length practice exam a week before, and tapering in the final two days leaves you sharp rather than tired. For online delivery, it is also when the room and computer are prepared.

                ## Milestones
                1. One final full-length practice exam taken seven days before the exam.
                2. The wrong-answer log, glossary and service maps reread in full.
                3. The weakest service family revised with flashcards.
                4. For online delivery, the room cleared and the system test run again on the same network.
                5. No new courses or question banks started in the last week.
              priority: medium
              deadlineOffsetDays: 58
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A final full-length practice exam logged a week before the sitting, with the wrong-answer log reread and logistics checked."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Sit the final full-length practice exam a week before the date"
                - "Reread the wrong-answer log, glossary and service maps"
                - "Revise the weakest service family with flashcards"
                - "Run the online system test again or plan your route to the test centre"
            - name: Exam day check-in and pacing plan
              description: |-
                ## Purpose
                Exam-day problems are usually logistics, not knowledge: the wrong ID, a name mismatch, a phone on the desk during an online sitting, arriving after check-in closes. A written plan for the morning and a pacing approach, one pass answering and flagging, a second pass on flagged questions, removes most of the risk. Unanswered questions score nothing, so every question gets an answer.

                ## Milestones
                1. Your ID checked against the name on your booking the day before.
                2. Arrival or online check-in timed with margin, as the confirmation email requires.
                3. A pacing plan written: first pass, flag, second pass, no blanks.
                4. The exam sat and the provisional outcome noted, if one is shown.

                ## Notes
                Results and the score report usually follow by email within a few working days. Check the current timing on the AWS Certification site.
              priority: high
              deadlineOffsetDays: 60
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "The exam sat on the booked date with valid ID, every question answered, and the outcome recorded once received."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Check your ID against the booking name the day before"
                - "Write your pacing plan on one card"
                - "Arrive or start online check-in with the margin your confirmation asks for"
                - "Record the result and score report when they arrive"
            - name: Digital badge, LinkedIn and CV after passing
              description: |-
                ## Purpose
                Passing matters most when people can see it. Accepting the digital badge, adding the certification with its validation number to your professional profile and CV, and telling your manager or careers adviser makes the credential visible to recruiters and to whoever approves your next training budget. It is also the moment to download the certificate for your own records.

                ## Milestones
                1. The digital badge claimed and its public link saved.
                2. The certification added to your professional profile with the issue and expiry dates.
                3. Your CV updated with the credential and one line on what you can now do.
                4. The certificate downloaded and stored with your other credentials.

                ## Notes
                Start from the **Resume** template. Put the credential under certifications, not skills, and keep the AWS name exactly as on the badge.
              priority: medium
              deadlineOffsetDays: 75
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "The badge claimed, the certification shown on your profile and CV with dates, and the certificate stored in your records."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Accept the digital badge from the email you receive"
                - "Add the certification to your professional profile with its dates"
                - "Update your CV with the credential and what you can now do"
                - "Download the certificate into your credentials folder"
            - name: Retake plan after a failed attempt
              description: |-
                ## Purpose
                Failing a foundational exam is common, especially for people new to tech, and the score report shows which sections needed work. A calm plan built on that report, with a short block of targeted study and new practice material, usually turns a near miss into a pass within the retake waiting period. Reusing the same question bank tends to produce the same result.

                ## Milestones
                1. The score report read and the weaker sections listed.
                2. The retake waiting period and any retake discount checked on official pages.
                3. A four-week targeted plan written for the weak sections only.
                4. A fresh practice question source added for the retake.
                5. A new booking made once the readiness rule is met again.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A written retake plan based on the score report's weaker sections, with a fresh practice source and a new booking date."
                cadence: phased
                effort_hours_estimate: "15"
              tasks:
                - "List the weaker sections from your score report"
                - "Check the retake waiting period on the certification policies page"
                - "Write a four-week plan covering only the weak sections"
                - "Choose a practice question source you have not used before"
            - name: Student route through AWS Educate and AWS Academy
              description: |-
                ## Purpose
                Students can often study for free: AWS Educate offers self-paced cloud content and labs without a credit card, and many universities and colleges run AWS Academy courses aligned to Cloud Practitioner. Student cloud clubs and campus events sometimes offer exam discounts. Fitting the exam into a semester, before final exams and internship applications, makes it a useful line on an early CV.

                ## Milestones
                1. AWS Educate checked and an account created if it suits you.
                2. Your institution's careers or computing department asked whether it runs AWS Academy.
                3. A target exam week chosen that avoids your own exam period.
                4. Any student discount or club event recorded.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A recorded study route using free student resources where available, with a target exam week clear of your academic exams."
                cadence: phased
                effort_hours_estimate: "3"
              tasks:
                - "Look at AWS Educate and decide whether to create an account"
                - "Ask your department whether it offers AWS Academy courses"
                - "Check the club or events page for discount sessions @recurring(monthly:20)"
                - "Choose an exam week outside your semester exams"
            - name: Cloud Practitioner for sales, finance and project roles
              description: |-
                ## Purpose
                People in sales, finance, procurement, project management and leadership take Cloud Practitioner to follow conversations about cloud migration and monthly bills. The study is the same, but the payoff comes from linking each topic to your work: pricing models to budgeting, shared responsibility to vendor contracts, support plans to service levels. A few notes connecting the exam to your role make the knowledge stick.

                ## Milestones
                1. Three work situations where cloud knowledge would help listed.
                2. Each exam domain linked to one of those situations in your notes.
                3. A short explanation of a recent cloud bill or proposal written for a colleague.
                4. One conversation with an engineer where you used the new vocabulary.

                ## Notes
                Lean extra time on the billing, pricing and support domain; it is where your day job gives you an advantage.
              priority: medium
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "Notes linking each exam domain to a situation in your role, plus one written explanation of a real cloud cost for a colleague."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "List three moments at work where cloud knowledge would have helped"
                - "Link each exam domain to one of those moments"
                - "Explain a recent cloud cost or proposal in a short note for a colleague"
                - "Ask an engineer to walk you through one AWS architecture diagram"
            - name: Two-week fast track for working engineers
              description: |-
                ## Purpose
                Engineers who already use AWS, or who know Azure or Google Cloud, rarely need eight weeks. What trips them up is AWS's precise naming, the support plan details and the billing tools, which day-to-day engineering seldom touches. A two-week plan built on a diagnostic, aimed at those gaps and two full-length practice exams, is usually enough.

                ## Milestones
                1. A diagnostic taken and the gaps outside daily engineering work identified.
                2. Billing, support plans, Cloud Adoption Framework and the security services map studied first.
                3. Two different full-length practice exams passed with margin.
                4. The exam booked within the fortnight.

                ## Notes
                If you map Azure or Google services onto AWS ones, check the AWS name and scope; the closest equivalent rarely matches exactly.
              priority: low
              frontmatter:
                mode: building
                output_kind: event-completion
                success_criteria: "A two-week plan completed with two full-length practice exams passed and the exam booked or sat within three weeks."
                cadence: phased
                effort_hours_estimate: "15"
              tasks:
                - "Take a diagnostic and mark topics outside your daily work"
                - "Study billing, support plans and the security services map first"
                - "Take two different full-length practice exams"
                - "Book the exam for the end of the second week"
            - name: Studying around a full-time job and children
              description: |-
                ## Purpose
                Parents and carers rarely get two clear hours, but Cloud Practitioner suits short blocks unusually well. Twenty-minute sessions after bedtime, audio from the course on the commute, flashcards in a queue and one longer weekend block cover the syllabus in ten to twelve weeks. Agreeing that weekend block with whoever shares the household matters more than any study technique.

                ## Milestones
                1. The weekly time you genuinely have written down, with no wishful hours.
                2. A ten to twelve week plan built around twenty-minute blocks and one longer weekend session.
                3. The weekend session agreed with your partner or family.
                4. At least three short sessions completed on most weeks.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A ten to twelve week plan in short blocks, with an agreed weekend session and at least three sessions logged on most weeks."
                cadence: phased
                effort_hours_estimate: "30"
              tasks:
                - "Write down the real minutes you have each weekday"
                - "Agree one longer weekend study session with your household"
                - "Download course audio or videos for the commute"
                - "Use the agreed weekend study session for practice questions @recurring(weekly:sat)"
            - name: Team Cloud Practitioner cohort for a department
              description: |-
                ## Purpose
                Managers moving a team or department onto AWS often sponsor a cohort through Cloud Practitioner so everyone shares the same vocabulary. Running it well means a shared start date, the free official course, a weekly half-hour check-in, a voucher or budget arrangement agreed with finance, and no pressure on anyone's performance review. A cohort of five to fifteen people is easy to run alongside normal work.

                ## Milestones
                1. Volunteers enrolled with a shared start date and target exam month.
                2. Funding and voucher handling agreed with finance and recorded.
                3. A weekly check-in running with a short topic and practice questions.
                4. Pass results and lessons collected at the end without naming anyone who did not pass.
              priority: medium
              frontmatter:
                mode: service
                output_kind: deliverable
                success_criteria: "A cohort with a shared start date and funding agreed, weekly check-ins held through to the exam month and a short anonymous outcome summary."
                cadence: phased
                effort_hours_estimate: "20"
              tasks:
                - "Invite the team to volunteer for a Cloud Practitioner cohort"
                - "Agree the funding and voucher process with finance"
                - "Run the cohort's weekly half-hour check-in @recurring(weekly:thu)"
                - "Collect results and lessons in a short anonymous summary"
            - name: Career changer project write-up on AWS
              description: |-
                ## Purpose
                For someone moving into cloud support, IT or junior cloud roles, the badge alone opens fewer doors than the badge plus one small thing you built and can explain. Writing up the static website or a simple serverless form, with a diagram, the cost and what you would change, gives interviewers something to ask about and shows you understood the exam rather than memorised it.

                ## Milestones
                1. One small lab project chosen and rebuilt cleanly.
                2. An architecture diagram drawn with the services labelled.
                3. A write-up covering purpose, services, monthly cost and security choices.
                4. The write-up published on your portfolio or professional profile.

                ## Notes
                Start from the **Portfolio piece** template. Remove account IDs, keys and email addresses from screenshots before publishing.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A published write-up of one AWS lab project with a diagram, monthly cost and security notes, free of account identifiers."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Choose one lab project you can explain end to end"
                - "Draw its architecture diagram with services labelled"
                - "Write the purpose, cost and security choices in a page"
                - "Strip account IDs from screenshots and publish the write-up"
            - name: Choosing the next AWS certification
              description: |-
                ## Purpose
                Cloud Practitioner is a starting point, and the next exam depends on the work you want: Solutions Architect Associate for design roles, Developer Associate for building applications, SysOps or CloudOps for operations, and AI Practitioner for people working with generative AI. Deciding within a month of passing, while the vocabulary is fresh, keeps momentum and avoids a second cold start.

                ## Milestones
                1. The current list of AWS associate and foundational exams read on the certification site.
                2. Two options compared against the role you want in the next two years.
                3. One next exam chosen with a target quarter.
                4. The new exam's guide downloaded and filed for later.

                ## Notes
                Detailed study for the next exam belongs in its own area; this project only makes the choice.
              priority: low
              deadlineOffsetDays: 90
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A recorded choice of the next AWS exam with a target quarter, made by comparing two options against your target role."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Read the current list of AWS certifications by level"
                - "Compare two next exams against the role you want"
                - "Write down the chosen exam and target quarter"
                - "Download the chosen exam's guide"
            - name: Cloud Practitioner validity and recertification plan
              description: |-
                ## Purpose
                AWS certifications expire after a set period, and Cloud Practitioner can usually be kept current either by passing it again or by earning a higher-level AWS certification. Recording the expiry date now, and deciding which route you expect to take, stops the badge lapsing quietly in a busy year. Check the current recertification rules, as AWS revises them.

                ## Milestones
                1. The issue and expiry dates written in your credentials record.
                2. The current recertification options read on the AWS Certification site.
                3. A preferred route chosen: retake the exam or progress to a higher certification before expiry.
                4. A reminder set well ahead of the expiry date.
              priority: low
              frontmatter:
                mode: operating
                output_kind: decision
                success_criteria: "The expiry date recorded, a recertification route chosen from the current official rules and a reminder set ahead of expiry."
                cadence: cyclic
              tasks:
                - "Write the badge issue and expiry dates in your credentials record"
                - "Read the current recertification rules on the AWS Certification site"
                - "Choose whether to retake or progress before expiry"
                - "Check the badge expiry date and recertification rules @recurring(yearly)"
            - name: Cloud Practitioner tutor sessions for newer candidates
              description: |-
                ## Purpose
                Experienced practitioners, study group leaders and lecturers often end up guiding others through the foundational exam. A repeatable set of short sessions, one per domain, with your own diagrams, a curated question set and the common traps, lets you help a friend, a mentee or a class without rebuilding the material each time. Teaching also keeps your own knowledge current for the recertification window.

                ## Milestones
                1. Four session outlines written, one per exam domain, each with three common traps.
                2. A curated set of practice questions for each session, from a legitimate source.
                3. At least one candidate taken through all four sessions.
                4. The outlines updated after checking the current exam guide.

                ## Notes
                Never share real exam questions, even ones you remember; it breaks the candidate agreement for you and your learner.
              priority: low
              frontmatter:
                mode: service
                output_kind: deliverable
                success_criteria: "Four domain session outlines with traps and practice questions, used to take at least one candidate through the full syllabus."
                cadence: phased
                effort_hours_estimate: "12"
              tasks:
                - "Write an outline for each of the four exam domains"
                - "List three common traps for each domain"
                - "Curate a short legitimate practice question set per session"
                - "Recheck the outlines against the current exam guide before each new learner"
---

# AWS Cloud Practitioner

This area takes you from deciding that AWS Cloud Practitioner is the right first cloud exam to holding the badge and choosing what comes next, whether you are a student, someone in sales, finance or project work who keeps hearing about cloud bills, or an engineer who wants the AWS vocabulary on paper. It opens with foundations (the fit decision, the current exam guide, a safe account with billing alarms, a diagnostic and a dated plan), then the study machinery, the exam domains from cloud concepts and global infrastructure through security, core services and pricing, small hands-on labs, the decisions on delivery and readiness, booking and exam day, and variants for students, non-technical professionals, engineers, parents and team cohorts.

The rhythm is two protected study blocks a week, a short daily question set, a weekly wrong-answer review and lab tear-down, flashcards twice a week, and a monthly timed practice exam, bill check and plan reset. The Purchase decision, Habit tracker, Metrics log, Resume and Portfolio piece templates pair with choosing study materials, keeping study blocks, tracking scores by domain, updating your CV and writing up a small project. Installing adds all 50 projects as active, so archive the ones that are not for you yet.
