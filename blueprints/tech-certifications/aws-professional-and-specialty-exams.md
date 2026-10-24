---
id: tech-certifications.aws-professional-and-specialty-exams
name: AWS Professional and Specialty Exams
description: "A plan past associate level on AWS: choosing Solutions Architect Professional, DevOps Engineer Professional or a specialty, long scenario practice, multi-account labs, timed mocks and exam day."
category: personal
version: 1.0.0
tags: [tech-certifications, aws-professional-and-specialty-exams, engineer, aws, cloud, solutions-architect-professional, devops-professional, exam-prep]
author: Aurum Technology
starter_structure:
  templates:
    - purchase-decision
    - metrics-log
    - skills-matrix
    - reading-queue
    - portfolio-piece
  pillars:
    - name: Tech & Engineering Certifications
      emoji: "🏅"
      description: "Technical credentials and the exams behind them: FE and PE licensing, Chartered Engineer and Trinidad and Tobago engineering registration, PMP, PRINCE2 and Scrum, AWS, Azure and Google Cloud by level, Kubernetes and Terraform, networking and security certifications, Six Sigma belts, and coding, system design and machine-learning interviews."
      pillarFrontmatter:
        review_cadence: monthly
      areas:
        - name: AWS Professional and Specialty Exams
          description: "Going beyond associate level on AWS: Solutions Architect Professional, DevOps Engineer Professional or a specialty such as security, with long scenario practice."
          projects:
            - name: Choosing your first professional or specialty AWS exam
              description: |-
                ## Purpose
                Solutions Architect Professional rewards broad design judgement across many services, DevOps Engineer Professional rewards depth in pipelines, automation and operations, and the specialties go narrow and deep. Picking the one that matches the work you do now, and the role you want next, means your daily job becomes study time instead of competing with it.

                ## Milestones
                1. The current list of AWS professional and specialty exams checked on the AWS certification site, with any retirement notices noted.
                2. Your last twelve months of work sorted into design, delivery and operations, security and networking.
                3. Two candidate exams scored against your work, your next role and the help your employer offers.
                4. A written choice of one exam with a target quarter and the reason in two sentences.

                ## Notes
                AWS has retired several specialties in recent years and added new exams, so check the live list rather than a blog post. If two exams tie, take the one closest to your current tickets.
              priority: high
              deadlineOffsetDays: 14
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A dated note names one professional or specialty exam, a target quarter and the reasons it beat the runner-up."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Open the AWS certification page and list every current professional and specialty exam"
                - "Note any exam marked for retirement or replacement and its last sitting date"
                - "Score two candidate exams against your current work and next role"
                - "Write your choice and target quarter in one dated note"
            - name: Exam guide and AWS certification policy folder
              description: |-
                ## Purpose
                Every AWS exam is written from its published exam guide, which lists the domains, the task statements and the in-scope and out-of-scope services. Keeping the current guide, the sample questions and the policy pages on retakes, rescheduling and recertification in one dated folder means every study decision is checked against the source.

                ## Milestones
                1. The current exam guide for your chosen exam saved with its version and date.
                2. The domains and their stated weightings copied onto one page from the guide itself.
                3. The in-scope and out-of-scope service lists saved where you study.
                4. Current fee, retake waiting period and rescheduling rules recorded from AWS in a dated note.

                ## Notes
                Do not trust weightings, question counts or durations quoted on forums; copy them from the guide you will actually sit.
              priority: high
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "One folder holds the dated exam guide, sample questions, service scope lists and a policy note taken from AWS pages."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Download the current exam guide and official sample questions for your exam"
                - "Copy the domain names and weightings from the guide onto one page"
                - "Record the fee, retake wait and rescheduling rules from the AWS policy pages"
                - "Check AWS for a revised exam guide or exam code for your exam @recurring(quarterly)"
            - name: Diagnostic scenario set and baseline score
              description: |-
                ## Purpose
                A cold attempt at a block of professional-style questions before any study shows two things: your domain weak spots and how long you take per question. Both numbers drive the study calendar, and seeing a modest baseline early is far better than discovering your pace problem in the final week.

                ## Milestones
                1. Twenty to thirty professional-level questions answered under exam-like timing.
                2. A score recorded per domain from the exam guide.
                3. Average minutes per question recorded alongside the score.
                4. The two weakest domains named as the first study targets.

                ## Notes
                Start from the **Metrics log** template. Use questions you will not see again later, so the baseline stays honest.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A metrics log shows a baseline score per domain and an average minutes per question from a timed diagnostic set."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Set aside a quiet ninety minutes with no notes or console open"
                - "Answer a diagnostic block of professional-level questions on a timer"
                - "Record the score per domain and the average minutes per question"
                - "Name the two weakest domains at the top of the log"
            - name: Domain map of the exam guide against your experience
              description: |-
                ## Purpose
                The exam guide breaks each domain into task statements, and most engineers have real experience in some and none in others. Rating every task statement against what you have built, run or only read about turns a vague syllabus into a ranked list of where hours will pay back most.

                ## Milestones
                1. Every task statement from the exam guide listed in one table.
                2. Each rated as built in production, built in a lab, read about or unknown.
                3. The services each weak task statement depends on noted beside it.
                4. The table sorted so the top ten study targets are obvious.

                ## Notes
                Start from the **Skills matrix** template. Be strict: having seen a service in a diagram does not count as building with it.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A skills matrix rates every exam guide task statement and lists the ten weakest with the services behind them."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Copy every task statement from the exam guide into a table"
                - "Rate each one as production, lab, read or unknown"
                - "Note the services each weak task statement depends on"
                - "Sort the table and mark the top ten study targets"
            - name: Dated study calendar to a target exam month
              description: |-
                ## Purpose
                Most engineers preparing for a professional exam need somewhere between two and four months of steady evenings, depending on experience, and the plan fails when it lives only in their head. A calendar that counts back from a target month, with weak domains front-loaded and two full mocks before booking, turns intent into sessions that happen.

                ## Milestones
                1. A target exam month chosen and written at the top of the plan.
                2. Weekly study hours agreed with yourself and anyone you share time with.
                3. Each week assigned a domain or theme, weakest domains first.
                4. Two full timed mocks and a readiness check placed before the booking date.

                ## Notes
                Leave one empty week in every six for illness, releases and on-call weeks. Plans with no slack collapse at the first incident.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A dated calendar shows weekly themes, study hours, two full mocks and a readiness check ahead of a named exam month."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Pick a target exam month and write it at the top of the plan"
                - "Block weekly study sessions in your calendar for the whole period"
                - "Assign each week a domain, putting the weakest first"
                - "Place two full mocks and a readiness check before the booking date"
            - name: Multi-account practice sandbox with AWS Organizations
              description: |-
                ## Purpose
                Scenarios at this level are full of organisations, service control policies, cross-account roles and centralised logging, which a single personal account cannot show you. A small practice organisation with a management account, a security account, a shared services account and two workload accounts lets you build the patterns the questions describe.

                ## Milestones
                1. A management account with multi-factor authentication on the root user and no workloads in it.
                2. At least four member accounts in organisational units for security, shared services and workloads.
                3. One service control policy that blocks unused regions applied and tested.
                4. Cross-account access working through IAM Identity Center or assumed roles, not long-lived keys.

                ## Notes
                Use a dedicated email alias per account and record them in your password manager. Never reuse an employer's organisation for exam practice.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A practice organisation with at least four member accounts, a tested region-blocking service control policy and role-based access is running."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Create a fresh management account and enable multi-factor authentication on root"
                - "Set up organisational units for security, shared services and workloads"
                - "Create four member accounts with their own email aliases"
                - "Apply and test a service control policy that denies unused regions"
            - name: Lab spend ceiling and weekly teardown
              description: |-
                ## Purpose
                Labs at this level touch the services that cost real money while idle: NAT gateways, Transit Gateway attachments, VPN connections, managed directories and large database instances. A hard monthly ceiling, alarms in every account and a weekly teardown habit keep a two-month study plan from producing a bill bigger than the exam fee.

                ## Milestones
                1. A monthly lab budget figure written down and agreed with yourself.
                2. Budget alerts at half and at the full figure sent to an inbox you read.
                3. A teardown checklist of the idle-cost services you use most.
                4. A month of study completed within the ceiling.

                ## Notes
                Build labs from templates or code so tearing them down is one command and rebuilding them next week is cheap.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Budget alerts cover every practice account and monthly lab spend stays under the written ceiling for the whole study period."
                cadence: rolling
              tasks:
                - "Write your monthly lab spend ceiling at the top of your study plan"
                - "Create budget alerts at half and full ceiling in the management account"
                - "List the idle-cost services you plan to use and how to delete each"
                - "Tear down every lab resource and check the cost explorer @recurring(weekly:fri)"
            - name: Employer sponsorship and study time request
              description: |-
                ## Purpose
                Many employers, especially AWS partners, pay exam fees and some give study hours, but only if someone asks with a clear case. A one-page request that ties the exam to a project, a customer need or a partner requirement gets a faster yes than a hallway mention.

                ## Milestones
                1. Your company's training, certification and reimbursement policy found and read.
                2. A one-page case linking the exam to current or upcoming work.
                3. A specific ask written down: fee, practice materials, hours per week and any lab account.
                4. A decision from your manager recorded, with any repayment conditions noted.

                ## Notes
                Check for clauses requiring repayment if you leave within a set period, and note them before you accept.
              priority: medium
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "A one-page sponsorship request has been sent and your manager's decision, including any repayment terms, is recorded."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Find your employer's training and certification reimbursement policy"
                - "Ask the agent to draft a one-page case tying the exam to current work"
                - "List the fee, materials, weekly hours and lab account you are asking for"
                - "Send the request to your manager and record the answer"
            - name: Weekly long-scenario question block
              description: |-
                ## Purpose
                Professional questions are paragraphs, not sentences, and the skill being tested is reading a business situation, spotting the deciding constraint and rejecting three plausible designs. Doing a fixed block of long scenarios every week builds that reading speed in a way that short flashcard questions never will.

                ## Milestones
                1. A weekly slot of at least ninety minutes held for scenario practice.
                2. Each block timed at your target pace per question.
                3. Score and pace recorded after every block.
                4. Pace per question at or under target for four weeks running.

                ## Notes
                Do the block in one sitting with the timer visible. Splitting it into five-minute bursts hides the fatigue that the real exam brings.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A log shows a weekly timed scenario block with score and pace, and pace at or under target for four consecutive weeks."
                cadence: rolling
              tasks:
                - "Choose a fixed weekly slot of ninety minutes for scenario practice"
                - "Set your target minutes per question from the exam guide timing"
                - "Answer a timed block of long scenario questions @recurring(weekly:sat)"
                - "Record score and pace for the block in your log"
            - name: Wrong-answer log with distractor patterns
              description: |-
                ## Purpose
                Getting a scenario wrong is only useful if you find out why the right answer won: cheaper, less operational overhead, fewer moving parts, meets the stated recovery time. Logging each miss with the constraint you overlooked and the distractor that tempted you turns repeated mistakes into rules you apply on exam day.

                ## Milestones
                1. Every missed or guessed question logged with the deciding constraint.
                2. The tempting wrong answer noted with why it fails.
                3. Misses grouped into recurring patterns such as overlooked cost or overbuilt designs.
                4. A one-page list of personal traps reread before every mock.

                ## Notes
                Log guesses you got right as well. A lucky right answer is a miss waiting for exam day.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A wrong-answer log covers every missed or guessed question for the study period and a one-page traps list is kept current."
                cadence: rolling
              tasks:
                - "Set up a log with columns for constraint missed, tempting answer and rule"
                - "Enter every missed or guessed question after each practice block"
                - "Group the week's misses into patterns and update your traps page @recurring(weekly:sun)"
                - "Reread the traps page before each full mock"
            - name: Service quotas and limits flashcard deck
              description: |-
                ## Purpose
                Many professional scenarios turn on a number: a payload limit, a maximum retention period, a throughput ceiling, a replication delay or whether a feature crosses regions. A small deck of these facts, reviewed in a few minutes a day, saves the time you would otherwise spend reasoning from first principles.

                ## Milestones
                1. A deck started with the limits that appeared in your diagnostic misses.
                2. Each card checked against current AWS documentation, with the page noted.
                3. Daily review held for most days of the study period.
                4. The deck pruned of cards you have answered right for a month.

                ## Notes
                Limits change. Recheck a card against the documentation whenever a practice question contradicts it.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A flashcard deck of documented AWS limits is reviewed on most days of the study period and pruned monthly."
                cadence: rolling
              tasks:
                - "Create a deck with ten limits taken from your diagnostic misses"
                - "Add the documentation page to each card as its source"
                - "Review the deck for ten minutes @recurring(daily)"
                - "Remove cards answered correctly for a full month"
            - name: Weekly lab built from a practice scenario
              description: |-
                ## Purpose
                Reading that a pattern works is different from watching it fail because of a missing route, a key policy or a trust relationship. Building one scenario from your wrong-answer log each week, in the sandbox organisation, makes the right answer something you have seen rather than memorised.

                ## Milestones
                1. One scenario chosen each week from the wrong-answer log.
                2. The design built in the sandbox, preferably from code.
                3. The failure modes you hit written as short notes.
                4. Eight scenario labs completed and torn down by the end of the plan.

                ## Notes
                Keep each lab under two hours. If it needs more, you are building a product, not studying.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "At least eight scenario labs are built, noted and torn down during the study period, each traced to a logged miss."
                cadence: rolling
              tasks:
                - "Pick this week's lab from the top of the wrong-answer log"
                - "Build the scenario design in the sandbox organisation @recurring(weekly:wed)"
                - "Write down what broke and how you fixed it"
                - "Tear the lab down and log the hours spent"
            - name: Monthly full-length timed mock
              description: |-
                ## Purpose
                Long professional exams test stamina as much as knowledge, and scores often fall in the final third when concentration fades. A full-length mock each month, sat at the time of day you plan to book, shows whether you can hold pace for the whole paper and gives the clearest trend line in your plan.

                ## Milestones
                1. A full-length mock sat each month under real timing with no breaks you would not get.
                2. Score recorded overall, per domain and for each third of the paper.
                3. Questions flagged for review counted and their accuracy noted.
                4. Two consecutive mocks above your readiness threshold.

                ## Notes
                Start from the **Metrics log** template. Sit mocks at the same time of day as your planned exam slot.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A metrics log holds monthly full-length mock scores by domain and by third of the paper, ending with two consecutive scores above threshold."
                cadence: rolling
              tasks:
                - "Book a three-hour slot at your planned exam time of day"
                - "Sit a full-length timed mock with notes and console closed @recurring(monthly:12)"
                - "Record scores overall, by domain and by third of the paper"
                - "Compare the final third with the first third and note any drop"
            - name: Whitepaper and Well-Architected reading queue
              description: |-
                ## Purpose
                Correct answers often mirror the reasoning in AWS whitepapers and the Well-Architected lenses: multi-account strategy, disaster recovery options, hybrid connectivity and security pillars. A short queue of the papers that match your weak domains, read one a month with notes, gives you the vocabulary the questions are written in.

                ## Milestones
                1. A queue of six to eight papers chosen against your weakest domains.
                2. Each paper read with a one-page summary of its decision rules.
                3. Summaries linked from the matching rows of your domain map.
                4. The queue reviewed after each mock and reordered.

                ## Notes
                Start from the **Reading queue** template. Prefer the current version of each paper; older editions describe retired features.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "At least six whitepapers or Well-Architected lenses are read with one-page summaries linked to the domain map."
                cadence: rolling
              tasks:
                - "List six to eight whitepapers that match your weakest domains"
                - "Read one paper and write a one-page summary of its decision rules @recurring(monthly:20)"
                - "Link each summary to the matching row of your domain map"
                - "Reorder the queue after each mock"
            - name: Study partner scenario review
              description: |-
                ## Purpose
                Explaining why an answer wins to another engineer exposes the reasoning you skipped, and hearing their reasoning shows you constraints you never notice. A weekly half hour with one partner working through three hard scenarios is the cheapest mock interview for the exam's way of thinking.

                ## Milestones
                1. A study partner preparing for the same or a related exam agreed.
                2. A fixed weekly half hour in both calendars.
                3. Three hard scenarios brought by each person every session.
                4. A shared list of disagreements resolved against documentation.

                ## Notes
                Community groups, internal guilds and partner networks are good places to find a partner. Two people is usually enough; larger groups drift into chat.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A weekly partner session runs for the study period and a shared list records each disagreement and its documented answer."
                cadence: rolling
              tasks:
                - "Ask one colleague or community member to be a study partner"
                - "Agree a weekly half hour and a shared notes document"
                - "Bring three hard scenarios to the partner session @recurring(weekly:thu)"
                - "Settle each disagreement with a documentation link"
            - name: Service change watch against the exam guide
              description: |-
                ## Purpose
                AWS launches and renames features constantly, but exams are refreshed far less often, so a brand new feature may be the right answer at work and the wrong one in the exam. A monthly scan of announcements against your exam guide's service list keeps you aware of the gap rather than surprised by it.

                ## Milestones
                1. A filtered view of AWS announcements for the services in your exam scope.
                2. A monthly note of changes that touch in-scope services.
                3. Each note marked as likely in the exam or too new to be tested yet.
                4. Flashcards or summaries updated where a change matters.

                ## Notes
                When in doubt, answer from the behaviour described in the exam guide's era, not from last week's launch.
              priority: low
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A monthly change note covers in-scope services for the study period, with each change marked as testable or too new."
                cadence: rolling
              tasks:
                - "Set up a filtered feed of AWS announcements for your in-scope services"
                - "Scan announcements and note changes to in-scope services @recurring(monthly:3)"
                - "Mark each change as testable now or too new"
                - "Update affected flashcards and summaries"
            - name: Monthly score review and plan reset
              description: |-
                ## Purpose
                Study plans written in week one are guesses, and the mock scores, lab notes and wrong-answer patterns tell you where the guesses were wrong. A monthly half hour to compare trends against the calendar, move hours toward the domains still lagging and decide whether the target month holds keeps the plan honest.

                ## Milestones
                1. Mock, scenario block and flashcard trends compared in one view.
                2. Study hours moved toward the domains still below target.
                3. A clear yes or no on keeping the target exam month.
                4. The calendar updated and the reason for any change written down.

                ## Notes
                Moving the exam a month is a normal outcome of this review, not a failure.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: decision
                success_criteria: "Each month of the study period has a dated review note with a keep or move decision on the exam month and the hours reallocated."
                cadence: rolling
              tasks:
                - "Put mock, block and flashcard trends side by side"
                - "Review trends and move hours toward lagging domains @recurring(monthly:27)"
                - "Decide whether the target exam month still holds"
                - "Update the calendar and note the reason for any change"
            - name: Multi-account strategy and governance patterns
              description: |-
                ## Purpose
                Questions about many teams, many accounts and central control appear throughout the Solutions Architect Professional and DevOps Professional exams. Knowing when to reach for service control policies, delegated administration, a landing zone, centralised logging and resource sharing, and what each cannot do, answers a large share of them.

                ## Milestones
                1. The difference between service control policies, permission boundaries and identity policies written as a short rule set.
                2. Control Tower guardrails and Organizations features compared on one page.
                3. Centralised CloudTrail and Config logging built in the sandbox.
                4. Ten governance scenarios answered with no more than two misses.

                ## Notes
                A common trap: service control policies never grant permissions, they only limit what identity policies can grant.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A rule set on policy types exists, centralised logging is built in the sandbox and a ten-question governance set scores eight or more."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "Write one rule each for service control policies, permission boundaries and identity policies"
                - "Compare Control Tower guardrails with plain Organizations features"
                - "Build organisation-wide CloudTrail and Config logging into the security account"
                - "Answer ten governance scenarios and log any misses"
            - name: Hybrid and multi-VPC networking at professional depth
              description: |-
                ## Purpose
                Connecting dozens of VPCs and an on-premises data centre is where many professional candidates lose marks, because the right answer depends on scale, bandwidth, transitive routing and overlap. Building a small Transit Gateway hub, a site-to-site VPN and a PrivateLink service shows how each choice behaves.

                ## Milestones
                1. VPC peering, Transit Gateway, PrivateLink and VPN compared in one decision table.
                2. Direct Connect options, including gateways and resilient designs, summarised from documentation.
                3. A Transit Gateway hub with three VPCs and route tables built and tested.
                4. Hybrid DNS resolution with Route 53 Resolver endpoints explained in your own words.

                ## Notes
                Transit Gateway attachments and VPN connections cost money every hour. Build, test and tear down in one sitting.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A connectivity decision table exists and a three-VPC Transit Gateway lab has been built, tested and torn down."
                cadence: phased
                effort_hours_estimate: "12"
              tasks:
                - "Draw a decision table for peering, Transit Gateway, PrivateLink and VPN"
                - "Summarise resilient Direct Connect designs from the AWS documentation"
                - "Build a Transit Gateway hub with three VPCs and test routing"
                - "Explain hybrid DNS with Resolver endpoints in a half-page note"
            - name: Migration and modernisation patterns
              description: |-
                ## Purpose
                Large numbers of professional design questions describe an estate on premises and ask for the fastest, cheapest or least disruptive way to move it. Knowing the migration strategies, the discovery and transfer services and when to rehost before refactoring lets you match the stated business goal instead of picking the most modern design.

                ## Milestones
                1. The common migration strategies listed with a one-line example of each.
                2. Discovery, server, database and bulk data transfer services matched to the scenarios they suit.
                3. Offline transfer devices compared with network transfer by data size and timeline.
                4. Ten migration scenarios answered with the deciding constraint written beside each.

                ## Notes
                Read the time constraint first. A petabyte that must arrive in two weeks rules out most network options before anything else.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A migration strategy sheet maps services to scenarios and ten migration questions are answered with their deciding constraint noted."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "List each migration strategy with one real example"
                - "Match discovery, server, database and data transfer services to scenarios"
                - "Work out transfer time for one, ten and one hundred terabytes over your bandwidth"
                - "Answer ten migration scenarios and note the deciding constraint"
            - name: Disaster recovery designs by recovery objectives
              description: |-
                ## Purpose
                Recovery time and recovery point objectives decide between backup and restore, pilot light, warm standby and multi-site active designs, and the exam expects you to pick the cheapest one that meets them. Practising this choice with real numbers, and building one cross-region failover, makes it reflexive.

                ## Milestones
                1. The four common strategies described with typical recovery times and relative costs.
                2. Data replication options for databases and storage compared across regions.
                3. A pilot light or warm standby built in the sandbox with a tested failover.
                4. Ten recovery scenarios answered with no more than two misses.

                ## Notes
                The exam usually wants the least expensive design that still meets the objective, not the most resilient one available.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A recovery strategy sheet exists, one cross-region failover has been tested in the sandbox and ten recovery scenarios score eight or more."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "Write one paragraph per recovery strategy with cost and recovery time"
                - "Compare cross-region replication for your main database and storage options"
                - "Build and fail over a small warm standby between two regions"
                - "Answer ten recovery scenarios and log the misses"
            - name: Cost optimisation decisions at organisation scale
              description: |-
                ## Purpose
                Plenty of scenarios add the line most cost-effective, and the answer depends on purchase options, commitment types, storage tiers and where data crosses regions. Learning to read a scenario for its cost lever, and practising it with your own sandbox bills, wins marks that design knowledge alone misses.

                ## Milestones
                1. Savings Plans, Reserved Instances, Spot and On-Demand compared on one page.
                2. Storage class and lifecycle choices mapped to access patterns.
                3. Data transfer charges for common architectures sketched.
                4. The cost and usage report or cost explorer used to explain one month of sandbox spend.

                ## Notes
                Watch for the trap of choosing a commitment for a workload the scenario says is temporary or unpredictable.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A cost lever sheet covers purchase options, storage tiers and data transfer, and one month of sandbox spend is explained line by line."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Compare purchase options and commitment types on one page"
                - "Map storage classes and lifecycle rules to access patterns"
                - "Sketch where data transfer costs arise in a three-tier design"
                - "Explain last month's sandbox bill using cost explorer"
            - name: Delivery pipelines and deployment strategies
              description: |-
                ## Purpose
                DevOps Engineer Professional, and a good part of Solutions Architect Professional, expect you to choose between in-place, rolling, blue and green, and canary deployments for compute, containers and functions, and to wire them into a pipeline with approvals and rollback. Building one pipeline end to end shows where each strategy really differs.

                ## Milestones
                1. Deployment strategies compared for EC2, containers and Lambda in one table.
                2. A pipeline with source, build, test, approval and deploy stages running in the sandbox.
                3. An automatic rollback triggered by a failing alarm and observed.
                4. Ten pipeline and deployment scenarios answered with no more than two misses.

                ## Notes
                Cross-account pipelines, where tooling lives in one account and deploys into others, come up often. Build yours that way.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A cross-account pipeline with an alarm-driven rollback runs in the sandbox and ten deployment scenarios score eight or more."
                cadence: phased
                effort_hours_estimate: "12"
              tasks:
                - "Compare deployment strategies for EC2, containers and Lambda in a table"
                - "Build a cross-account pipeline with an approval stage"
                - "Trigger an alarm-driven rollback and record what happened"
                - "Answer ten deployment scenarios and log the misses"
            - name: Infrastructure as code and configuration at fleet scale
              description: |-
                ## Purpose
                Rolling a baseline out to a hundred accounts, patching a fleet or detecting drift are everyday DevOps Professional scenarios. Knowing what CloudFormation StackSets, drift detection, Systems Manager automation and patching each do, and where they overlap, lets you choose the managed option the exam prefers.

                ## Milestones
                1. StackSets deployed to two organisational units with automatic deployment on new accounts.
                2. Drift introduced on purpose and detected.
                3. A Systems Manager automation runbook and a patch baseline used against test instances.
                4. A one-page note on when to use each tool and when they conflict.

                ## Notes
                Answers that rely on custom scripts run from a laptop are almost always wrong where a managed option exists.
              priority: low
              frontmatter:
                mode: building
                output_kind: knowledge
                success_criteria: "StackSets, drift detection and a Systems Manager runbook have each been used in the sandbox and a one-page tool choice note exists."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Deploy a StackSet to two organisational units with auto deployment on"
                - "Change a resource by hand and run drift detection"
                - "Run a Systems Manager automation and a patch baseline on test instances"
                - "Write a one-page note on choosing between these tools"
            - name: Observability and automated incident response
              description: |-
                ## Purpose
                Scenarios that start with something failing at three in the morning want an answer that detects, alerts and fixes it without a human. Building one loop from a metric or log pattern through an event rule to an automated remediation teaches the CloudWatch, EventBridge and Systems Manager wiring these questions test.

                ## Milestones
                1. Metrics, logs, traces and events compared by what each can detect.
                2. A log metric filter and composite alarm built for a sample application.
                3. An event rule that triggers an automated fix built and tested.
                4. Ten monitoring and remediation scenarios answered with no more than two misses.

                ## Notes
                Read the scenario for the word automatically. It usually rules out answers that page someone to act.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "An alarm-to-remediation loop is built and tested in the sandbox and ten monitoring scenarios score eight or more."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Write a table of what metrics, logs, traces and events each detect"
                - "Build a log metric filter and composite alarm for a sample app"
                - "Wire an event rule to an automated remediation and test it"
                - "Answer ten monitoring scenarios and log the misses"
            - name: IAM policy evaluation and KMS key policies
              description: |-
                ## Purpose
                Security Specialty questions, and many professional ones, hinge on exactly how AWS decides whether a request is allowed when identity policies, resource policies, boundaries, session policies and key policies all apply. Working through the evaluation order by hand and testing it with the policy simulator turns guesswork into a method.

                ## Milestones
                1. The policy evaluation logic drawn as a flowchart in your own hand.
                2. Cross-account access tested with and without a resource policy.
                3. A customer managed key with a key policy and a grant used from a second account.
                4. Fifteen access control scenarios answered with no more than two misses.

                ## Notes
                An explicit deny anywhere wins. Most wrong answers forget a deny in a service control policy or a key policy.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A hand-drawn evaluation flowchart exists, cross-account key access is tested and fifteen access scenarios score thirteen or more."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "Draw the policy evaluation order as a flowchart from the documentation"
                - "Test cross-account access with and without a resource policy"
                - "Use a customer managed key from a second account through a grant"
                - "Answer fifteen access control scenarios and log the misses"
            - name: Practice question bank and course comparison
              description: |-
                ## Purpose
                Practice materials for professional exams vary widely in how closely they match the real question style, and a weak bank trains you on short, trivia-heavy questions. Comparing two or three options on recency, explanation quality and scenario length before paying saves both money and false confidence.

                ## Milestones
                1. Three candidate question banks or courses shortlisted.
                2. Each scored on last update date, explanation depth and average question length.
                3. Free sample questions from each tried and compared with AWS's official samples.
                4. One primary bank and at most one backup chosen.

                ## Notes
                Start from the **Purchase decision** template. Avoid any source that claims to contain real exam questions: using them breaches the AWS candidate agreement and can cost you the credential.
              priority: medium
              deadlineOffsetDays: 21
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A purchase decision record scores three practice options on the same criteria and names one primary choice."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Shortlist three practice question banks or courses for your exam"
                - "Note each one's last update date against the current exam guide version"
                - "Try ten free sample questions from each and compare to the official samples"
                - "Choose one primary bank and record why"
            - name: Reading method for long scenario questions
              description: |-
                ## Purpose
                Strong candidates read the final sentence first to learn what is being asked, then hunt the paragraph for the requirements and constraints that decide it. Writing your own reading method down and practising it on twenty questions makes it hold up when you are tired in the final hour.

                ## Milestones
                1. A written reading order of no more than five steps.
                2. A short list of signal phrases such as least operational overhead and most cost-effective, each with what it usually rules out.
                3. Twenty questions answered using the method, with time per question recorded.
                4. Accuracy and pace compared with your diagnostic baseline.

                ## Notes
                When two answers both work, the one with fewer components or more managed services is usually the intended one.
              priority: medium
              frontmatter:
                mode: building
                output_kind: knowledge
                success_criteria: "A five-step reading method and signal-phrase list are written, and twenty questions using them beat the baseline on accuracy or pace."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Write your reading order for a long scenario in five steps or fewer"
                - "List signal phrases and what each usually rules out"
                - "Answer twenty questions using the method and time each one"
                - "Compare accuracy and pace with your diagnostic baseline"
            - name: Pacing plan and flagging rules for the exam
              description: |-
                ## Purpose
                Running out of time with ten questions unread costs more marks than any knowledge gap, and it happens to well-prepared candidates on long exams. A pacing plan with checkpoints and a rule for when to flag and move on gives you a decision to follow instead of a panic.

                ## Milestones
                1. Checkpoint question numbers set for each quarter of the exam time.
                2. A rule for flagging: the maximum minutes before you choose your best answer and move on.
                3. The plan used in one full mock with checkpoints hit or missed recorded.
                4. The plan adjusted and written on one card for exam week.

                ## Notes
                Never leave a question blank. Pick the best remaining option before flagging so an unrevisited question still has an answer.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A pacing card with quarter checkpoints and a flagging rule has been tested in a full mock and adjusted."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Work out checkpoint question numbers for each quarter of the exam"
                - "Set a maximum minutes rule for flagging and moving on"
                - "Use the plan in your next full mock and note each checkpoint"
                - "Write the adjusted plan on one card"
            - name: Online proctored or test centre decision
              description: |-
                ## Purpose
                Taking the exam at home saves travel but brings strict room checks, webcam rules and the risk of a connection drop on a long paper, while a test centre removes those risks at the cost of travel time. Deciding early, with a system check if you choose home, avoids a forfeited booking.

                ## Milestones
                1. Current rules for online proctored exams read on the AWS and delivery provider pages.
                2. Nearest test centres and their available times checked.
                3. The online system check run on the exact computer and network you would use, if choosing home.
                4. A choice recorded with the reason.

                ## Notes
                Home sittings usually require a clear desk, a closed room and no second monitor. Check the current list rather than assuming.
              priority: medium
              deadlineOffsetDays: 45
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A recorded choice between online and test centre delivery, with the system check result if online was chosen."
                cadence: one-shot
                effort_hours_estimate: "1"
              tasks:
                - "Read the current online proctoring rules for AWS exams"
                - "Check the nearest test centres and their available times"
                - "Run the online system check on the computer and network you would use"
                - "Record your delivery choice and the reason"
            - name: Readiness gate before booking the exam
              description: |-
                ## Purpose
                Booking too early wastes a fee and a retake waiting period, while booking too late lets momentum fade. A written gate, such as two full mocks above a set score, no domain below a floor and pace on target, makes the booking decision a check rather than a mood.

                ## Milestones
                1. Readiness criteria written down before you see the next mock score.
                2. Two consecutive full mocks above the score threshold.
                3. No domain below the floor you set.
                4. A booking decision recorded with the evidence.

                ## Notes
                Third-party mock scores are not the real exam's scale. Set your threshold with a margin above what the bank says is a pass.
              priority: high
              deadlineOffsetDays: 90
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "Written readiness criteria are met by two consecutive mocks and a booking decision is recorded with those scores."
                cadence: one-shot
                effort_hours_estimate: "1"
              tasks:
                - "Write your readiness criteria before the next mock"
                - "Check the last two mock scores against the threshold"
                - "Check every domain against your floor"
                - "Record a book or wait decision with the evidence"
            - name: Exam accommodation and extra time request
              description: |-
                ## Purpose
                AWS offers accommodations for candidates who need them, including extra time for some candidates whose first language is not English, but they must be requested and approved before you book. Applying early means the extra time is attached to your account when you schedule, not discovered afterwards.

                ## Milestones
                1. The current accommodation types and eligibility read on the AWS certification site.
                2. Any supporting documents gathered if your request needs them.
                3. The request submitted through your certification account.
                4. Approval confirmed on your account before booking.

                ## Notes
                If the accommodation is approved after you book, check whether you need to reschedule for it to apply.
              priority: medium
              deadlineOffsetDays: 60
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "An accommodation request has been submitted and its approval or refusal is recorded before the exam is booked."
                cadence: one-shot
                effort_hours_estimate: "1"
              tasks:
                - "Read the current AWS exam accommodation types and eligibility"
                - "Gather any documents your request requires"
                - "Submit the request through your AWS certification account"
                - "Confirm approval shows on your account before booking"
            - name: Booking the exam slot and checking your ID
              description: |-
                ## Purpose
                The name on your certification account must match your identification exactly, and slots at good times can be weeks away. Booking a specific date with your ID checked, and noting the rescheduling cutoff, turns the readiness decision into a fixed point the final weeks plan can count back from.

                ## Milestones
                1. The name on your AWS certification account matched character for character to your ID.
                2. A date and time booked that matches when you sit your mocks.
                3. The confirmation email saved with the rescheduling and cancellation cutoff noted.
                4. Any voucher or discount code applied before payment.

                ## Notes
                Check your ID's expiry date against the exam date. An ID that expires before the exam is a common reason to be turned away.
              priority: high
              deadlineOffsetDays: 100
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "An exam is booked for a named date and time, with matching ID checked and the rescheduling cutoff recorded."
                cadence: one-shot
                effort_hours_estimate: "1"
              tasks:
                - "Compare the name on your AWS certification account with your ID"
                - "Apply any voucher or discount before payment"
                - "Book a slot at the time of day you sit your mocks"
                - "Save the confirmation and note the rescheduling cutoff"
            - name: Final fourteen days before a professional exam
              description: |-
                ## Purpose
                The last two weeks are for consolidation, not new services: one final full mock, your traps page, the pacing card and the flashcards you still miss. A written plan for these days stops the late panic of starting a new course or a new question bank.

                ## Milestones
                1. One final full mock sat at least a week before the exam.
                2. The traps page and pacing card reread and updated.
                3. Remaining flashcard misses reviewed down to a short list.
                4. The last two days kept light, with no new material.

                ## Notes
                If the final mock falls well below your readiness gate, moving the exam before the cutoff is cheaper than a retake.
              priority: high
              deadlineOffsetDays: 120
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A final mock, traps review and light last two days are completed as planned, with any reschedule decision made before the cutoff."
                cadence: one-shot
                effort_hours_estimate: "12"
              tasks:
                - "Sit one final full mock at least a week before the exam"
                - "Reread and trim the traps page and pacing card"
                - "Review only the flashcards you still miss"
                - "Keep the last two days to light review and rest"
            - name: Exam day check-in and logistics
              description: |-
                ## Purpose
                Late arrival, a cluttered desk for an online sitting or an unexpected software update can cost a professional exam before the first question. A short checklist for the day, with travel or room setup settled the evening before, means your attention goes into the scenarios.

                ## Milestones
                1. Travel time to the test centre checked, or the room cleared and computer updated for an online sitting.
                2. ID, confirmation and any permitted items ready the night before.
                3. Arrival or check-in started early enough for the stated check-in window.
                4. Notes written within an hour afterwards on what felt weakest.

                ## Notes
                Eat before a long exam. Breaks may be limited, and a three-hour paper on an empty stomach shows in the final third.
              priority: high
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "The exam is sat on the booked date with check-in on time and a short note of weak areas written the same day."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Check travel time or prepare the room and computer the evening before"
                - "Lay out your ID and confirmation the night before"
                - "Start check-in early within the stated window"
                - "Write a short note on weak areas within an hour of finishing"
            - name: After the result, badge, profile and next-exam benefit
              description: |-
                ## Purpose
                Passing is worth more when people can see it and when you use what comes with it: a digital badge, any discount on the next exam and in some cases access to certified community events. Claiming these in the first week, and noting the expiry date, makes the credential work for you straight away.

                ## Milestones
                1. The score report saved and domain feedback noted.
                2. The digital badge accepted and added to your professional profile and CV.
                3. Any next-exam discount or other benefit claimed and its expiry noted.
                4. The certification expiry date added to your credential record.

                ## Notes
                Associate credentials in the same path have often been renewed by a professional pass. Check the current recertification rules and update your record.
              priority: medium
              deadlineOffsetDays: 150
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "The badge is on your profile and CV, any next-exam benefit is claimed and the expiry date is in your credential record."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Save the score report and note the domain feedback"
                - "Accept the digital badge and add it to your profile and CV"
                - "Claim any next-exam benefit and note its expiry"
                - "Add the certification expiry date to your credential record"
            - name: Retake plan after a failed attempt
              description: |-
                ## Purpose
                Plenty of capable engineers fail a professional exam at the first attempt, and the score report's domain feedback is the best map you will get of what to fix. A retake plan written within a week, while the questions are fresh, turns a fail into a focused six to eight weeks instead of starting over.

                ## Milestones
                1. The score report's domain feedback compared with your mock domain scores.
                2. Notes written on question styles that surprised you, without recording any exam content.
                3. A short study plan aimed at the two weakest domains.
                4. A retake date booked after the waiting period ends.

                ## Notes
                Never write down or share actual exam questions. It breaks the candidate agreement and can lead to a ban.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A retake plan aimed at the two weakest reported domains exists and a retake is booked after the waiting period."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Compare the score report domains with your mock domain scores"
                - "Note the question styles that surprised you without recording content"
                - "Write a six to eight week plan aimed at the two weakest domains"
                - "Book the retake after the waiting period ends"
            - name: Second professional exam while the material is fresh
              description: |-
                ## Purpose
                Solutions Architect Professional and DevOps Engineer Professional share a lot of ground, from multi-account design to deployment and recovery, so a second professional exam within a few months of the first costs far less effort than it would later. Planning it now, around the gaps the second guide adds, uses the momentum before it fades.

                ## Milestones
                1. The second exam's guide compared with the first, with shared and new task statements marked.
                2. A shorter study calendar built around the new task statements only.
                3. One diagnostic block sat to confirm the overlap.
                4. The second exam booked or a written decision to wait.

                ## Notes
                Check whether a next-exam discount from your first pass still applies before it expires.
              priority: low
              deadlineOffsetDays: 270
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A gap list between the two exam guides and a shortened calendar exist, ending in a booking or a dated decision to wait."
                cadence: phased
                effort_hours_estimate: "40"
              tasks:
                - "Compare the two exam guides and mark shared and new task statements"
                - "Build a shorter calendar around the new task statements"
                - "Sit a diagnostic block for the second exam"
                - "Book the second exam or record a decision to wait"
            - name: Studying for a professional exam around on-call weeks
              description: |-
                ## Purpose
                Engineers on a rotation lose whole weeks to incidents and broken sleep, and a plan that assumes every evening is free falls apart in the first on-call week. Planning on-call weeks as light weeks, with short flashcard work only, and loading study into off weeks keeps progress steady.

                ## Milestones
                1. The next three months of on-call shifts marked on the study calendar.
                2. On-call weeks set to flashcards and reading only.
                3. Mocks and labs placed in off weeks.
                4. The exam date checked so it does not fall in or straight after an on-call week.

                ## Notes
                Ask to swap a shift if your preferred exam date lands in one. Most teams would rather swap than have you sit tired.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "The study calendar shows on-call weeks as light weeks and the exam date sits outside on-call and the week after it."
                cadence: rolling
              tasks:
                - "Mark the next three months of on-call shifts on the study calendar"
                - "Change on-call weeks to flashcards and reading only"
                - "Move mocks and labs into off weeks"
                - "Check the coming week's rota and adjust the study plan @recurring(weekly:mon)"
            - name: Working parent study plan in short blocks
              description: |-
                ## Purpose
                Parents of young children rarely get a quiet three hours on a weekday, but they can often find twenty-five minutes before school runs or after bedtime. Splitting study into short blocks, with long scenario practice saved for one protected weekend session, makes a professional exam workable without missing family life.

                ## Milestones
                1. The daily windows you can realistically protect written down.
                2. Short tasks such as flashcards and one scenario matched to those windows.
                3. One weekly long session agreed with your partner or family support.
                4. A month completed with most short blocks and every long session held.

                ## Notes
                Choose a later exam month rather than squeezing harder. A plan you can keep beats a fast one you abandon.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A month of the plan shows most daily short blocks and every weekly long session held, agreed with family."
                cadence: rolling
              tasks:
                - "Write down the daily windows you can protect most weeks"
                - "Agree one weekly long study session with your partner or support"
                - "Answer one scenario question in a short daily window @recurring(daily)"
                - "Review the month and move the exam date if blocks keep slipping"
            - name: Partner consultant certification target
              description: |-
                ## Purpose
                Consultants at AWS partner firms are often asked to hold a professional or specialty credential because partner programme tiers and some customer bids count them. Lining your exam up with the firm's certification target and a customer engagement gets you study time, sponsorship and real scenarios to practise on.

                ## Milestones
                1. Your firm's certification targets and which credentials count toward them confirmed.
                2. A current or upcoming engagement that uses the exam's domains identified.
                3. Sponsorship and study time agreed with your practice lead.
                4. Your certification linked to the partner account once you pass.

                ## Notes
                Keep customer data out of your study notes. Turn engagement lessons into anonymous patterns only.
              priority: low
              frontmatter:
                mode: service
                output_kind: deliverable
                success_criteria: "The exam is matched to a named firm certification target and the credential is linked to the partner account after passing."
                cadence: phased
                effort_hours_estimate: "3"
              tasks:
                - "Ask your practice lead which credentials count toward the firm's targets"
                - "Identify an engagement that uses the exam's domains"
                - "Agree sponsorship and study time with your practice lead"
                - "Link your credential to the partner account after passing"
            - name: Moving to AWS professional exams from Azure or Google Cloud
              description: |-
                ## Purpose
                Engineers with deep experience on another cloud already know the design patterns but trip over AWS names, defaults and the way AWS separates services. A translation sheet from your home cloud to AWS, plus targeted labs where the models really differ, closes the gap far faster than starting from the beginning.

                ## Milestones
                1. A translation table from your home cloud's core services to AWS equivalents.
                2. The places where the models differ, such as identity, networking and organisation hierarchy, listed.
                3. One lab built for each major difference.
                4. A diagnostic block retaken with misses traced to translation errors.

                ## Notes
                Watch for false friends: services with similar names that behave differently in scope, pricing or limits.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A translation table and difference list exist, a lab covers each major difference and a retaken diagnostic shows fewer translation misses."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "Build a table mapping your home cloud's core services to AWS"
                - "List where identity, networking and hierarchy work differently"
                - "Build one sandbox lab for each major difference"
                - "Retake a diagnostic block and tag translation errors"
            - name: Long scenarios in your second language
              description: |-
                ## Purpose
                For engineers who read English as a second or third language, professional questions add a reading load on top of the technical one, and small words like only, must and without change the answer. Practising with a focus on those qualifiers, and requesting any extra time you are eligible for, levels the field.

                ## Milestones
                1. A list of qualifier words and phrases that change answers, with examples.
                2. Weekly practice reading scenarios aloud or underlining qualifiers.
                3. Pace per question measured against your target.
                4. Eligibility for extra time checked and requested if it applies.

                ## Notes
                Read the question in full once. Skimming in a second language misses the qualifier that the whole question turns on.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A qualifier list exists, weekly reading practice is logged and any eligible extra time request is recorded."
                cadence: rolling
              tasks:
                - "Start a list of qualifier words that changed an answer for you"
                - "Practise five scenarios underlining every qualifier @recurring(weekly:tue)"
                - "Measure your pace per question against your target"
                - "Check eligibility for extra time and request it if it applies"
            - name: Team lead running an exam cohort
              description: |-
                ## Purpose
                Leads who want several engineers through the same professional exam gets better results from a shared cohort than from individual vouchers handed out and forgotten. A small cohort with a common calendar, a weekly session and shared labs raises pass rates and spreads the knowledge across the team.

                ## Milestones
                1. Four to eight volunteers agreed with a target exam window.
                2. Vouchers, sandbox accounts and practice materials arranged.
                3. A weekly cohort session running with a rotating presenter.
                4. Results and lessons written up for the next cohort.

                ## Notes
                Keep attendance voluntary and protect study time in sprint planning. A cohort squeezed into evenings loses people quickly.
              priority: medium
              frontmatter:
                mode: service
                output_kind: deliverable
                success_criteria: "A cohort of four to eight engineers runs weekly sessions to a shared exam window and a lessons note is written at the end."
                cadence: phased
                effort_hours_estimate: "20"
              tasks:
                - "Invite volunteers and agree a target exam window"
                - "Arrange vouchers, sandbox accounts and practice materials"
                - "Run the weekly cohort session with a rotating presenter @recurring(weekly:tue)"
                - "Write up results and lessons for the next cohort"
            - name: Advanced Networking Specialty preparation
              description: |-
                ## Purpose
                Advanced Networking goes deeper than any professional exam into hybrid routing, BGP behaviour, Direct Connect resilience, DNS, load balancing and network security at scale. It suits engineers who already run cloud networks, and it rewards lab time on routing far more than reading.

                ## Milestones
                1. The current specialty exam guide compared with what your professional study already covered.
                2. BGP path selection and route propagation for VPN and Direct Connect summarised.
                3. Labs completed for Transit Gateway routing domains, inspection VPCs and hybrid DNS.
                4. Two full mocks above your readiness threshold.

                ## Notes
                Simulated BGP labs with open-source routers in your sandbox are a cheap way to see path selection without a physical connection.
              priority: low
              deadlineOffsetDays: 240
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Routing, inspection and hybrid DNS labs are complete and two full specialty mocks score above the readiness threshold."
                cadence: phased
                effort_hours_estimate: "60"
              tasks:
                - "Compare the specialty exam guide with your professional study notes"
                - "Summarise BGP path selection for VPN and Direct Connect"
                - "Build Transit Gateway routing domains with an inspection VPC"
                - "Sit two full specialty mocks and log the scores"
            - name: Security Specialty with detection and response labs
              description: |-
                ## Purpose
                Expect the security specialty to ask you to run an investigation, not just configure a service: find the compromised credential, contain it, preserve evidence and fix the root cause. Rehearsing two or three incident playbooks end to end in the sandbox prepares you for the question style better than any list of features.

                ## Milestones
                1. The current specialty exam guide and its domains copied into your study folder.
                2. Threat detection, findings aggregation and logging services enabled across the sandbox organisation.
                3. Playbooks for a leaked access key, an exposed bucket and a compromised instance written and rehearsed.
                4. Two full mocks above your readiness threshold.

                ## Notes
                Practise containment steps that preserve evidence, such as snapshots and isolating security groups, before terminating anything.
              priority: medium
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "Three incident playbooks are rehearsed in the sandbox and two full security specialty mocks score above the readiness threshold."
                cadence: phased
                effort_hours_estimate: "50"
              tasks:
                - "Save the current security specialty exam guide to your folder"
                - "Enable threat detection and findings aggregation across the sandbox"
                - "Write and rehearse playbooks for a leaked key, open bucket and compromised instance"
                - "Sit two full specialty mocks and log the scores"
            - name: Machine learning and AI exam route decision
              description: |-
                ## Purpose
                Amazon has been reshaping its machine learning and AI credentials, adding new associate and professional options while retiring older specialties, so the right exam for an ML engineer today may not be the one a colleague sat two years ago. Checking the current line-up against your work avoids studying for an exam with a closing date.

                ## Milestones
                1. The current AWS machine learning and AI exams listed with any retirement dates.
                2. Each compared with the work you do: building models, operating ML platforms or building generative AI applications.
                3. One route chosen, or a decision that ML is not your next exam.
                4. The choice and reason recorded in your credential plan.

                ## Notes
                If an exam you want has a published retirement date, check that your study plan finishes well before it.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A dated note lists the current AWS ML and AI exams with retirement dates and records one chosen route or a decision to wait."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "List current AWS machine learning and AI exams from the certification site"
                - "Note any retirement or replacement dates"
                - "Compare each with the ML work you actually do"
                - "Record your chosen route or decision to wait"
            - name: Professional credential recertification path
              description: |-
                ## Purpose
                AWS professional and specialty credentials expire after a set period, and the recertification route has changed over time between retaking the exam and other options. Knowing your expiry date and the current rule a year ahead lets you plan a recertification calmly instead of in the final month.

                ## Milestones
                1. Each AWS credential's expiry date recorded from your certification account.
                2. The current recertification options for your credential read and noted.
                3. A recertification window chosen about six months before expiry.
                4. A yearly check on the rules scheduled.

                ## Notes
                Check whether passing a higher-level exam renews lower ones in the same path under the current rules. It can save a separate sitting.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Each AWS credential has a recorded expiry date and a recertification window set at least six months before it."
                cadence: cyclic
              tasks:
                - "Record each AWS credential's expiry date from your certification account"
                - "Read the current recertification options for your credential"
                - "Set a recertification window about six months before expiry"
                - "Review AWS recertification rules and your expiry dates @recurring(yearly)"
            - name: Reference architectures written up from your study labs
              description: |-
                ## Purpose
                Labs built for a professional exam are real architecture work, and written up well they become evidence in interviews and promotion cases. Turning three of them into short reference pieces, with a diagram, the trade-offs and what you would change at scale, keeps the learning after the exam is over.

                ## Milestones
                1. Three labs chosen that show different domains.
                2. A clean diagram drawn for each.
                3. A one-page write-up of requirements, design choices and trade-offs for each.
                4. The pieces published or stored where an interviewer or manager can see them.

                ## Notes
                Start from the **Portfolio piece** template. Leave out account IDs, keys and anything from an employer's environment.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Three reference architecture write-ups, each with a diagram and trade-offs, are stored where an interviewer or manager can read them."
                cadence: phased
                effort_hours_estimate: "9"
              tasks:
                - "Pick three labs that show different exam domains"
                - "Draw a clean architecture diagram for one lab @recurring(monthly:16)"
                - "Write a one-page trade-offs note for each diagram"
                - "Publish the pieces or save them to your career folder"
            - name: Contributing to AWS exam development as a subject matter expert
              description: |-
                ## Purpose
                Certified practitioners can be invited to help AWS write and review exam items and set pass standards through its subject matter expert programme. Taking part sharpens your sense of how questions are built, is recognised experience for senior roles and puts you among other experts in your field.

                ## Milestones
                1. The current AWS subject matter expert programme page read and eligibility checked.
                2. Your profile or interest registered as the programme describes.
                3. A first workshop or item-writing session completed if invited.
                4. Confidentiality terms noted so nothing from the sessions leaks into study groups.

                ## Notes
                Taking part usually bars you from sharing or teaching specific exam content. Check how that affects any mentoring or course work you do.
              priority: low
              frontmatter:
                mode: service
                output_kind: deliverable
                success_criteria: "Your eligibility for the AWS subject matter expert programme is checked and your interest is registered, with confidentiality terms recorded."
                cadence: rolling
              tasks:
                - "Read the current AWS certification subject matter expert programme page"
                - "Check that your credentials meet the stated eligibility"
                - "Register your interest as the programme describes"
                - "Check for open exam development workshops in your domain @recurring(quarterly)"
---

# AWS Professional and Specialty Exams

This area is for engineers who already hold, or have outgrown, an AWS associate credential and want Solutions Architect Professional, DevOps Engineer Professional or a specialty such as Security or Advanced Networking. It starts with foundations (choosing the exam, the current exam guide, a diagnostic baseline, a domain map, a study calendar and a multi-account sandbox with a spend ceiling), then the weekly study machinery, the knowledge the professional tier leans on (multi-account design, hybrid networking, migration, disaster recovery, cost at scale, pipelines, automation and security), the decisions about question banks, pacing, delivery mode and readiness, booking and exam day, plans for on-call engineers, working parents, partner consultants, cloud switchers, second-language candidates and team leads, and specialist work such as a second professional exam, a specialty, recertification and helping write exam content.

The rhythm is a weekly long-scenario block, a weekly wrong-answer review, a weekly lab built from a scenario and a weekly partner session, short daily quota flashcards, a monthly timed mock, a monthly reading slot, a monthly score review and a monthly check on service changes, with quarterly and yearly checks on the exam guide and recertification. The Purchase decision, Metrics log, Skills matrix, Reading queue and Portfolio piece templates pair with it. Installing adds all 50 projects as active, so archive the ones that are not for you yet.
