---
id: tech-certifications.aws-solutions-architect-associate
name: AWS Solutions Architect Associate
description: "A route to AWS Solutions Architect Associate: the exam guide, a guarded sandbox account, labs across the four design domains, timed practice exams, scenario reading skills, booking and exam day."
category: personal
version: 1.0.0
tags: [tech-certifications, aws-solutions-architect-associate, engineer, aws, cloud-architecture, exam-prep, solutions-architect]
author: Aurum Technology
starter_structure:
  templates:
    - skills-matrix
    - purchase-decision
    - metrics-log
    - reading-queue
    - portfolio-piece
  pillars:
    - name: Tech & Engineering Certifications
      emoji: "🏅"
      description: "Technical credentials and the exams behind them: FE and PE licensing, Chartered Engineer and Trinidad and Tobago engineering registration, PMP, PRINCE2 and Scrum, AWS, Azure and Google Cloud by level, Kubernetes and Terraform, networking and security certifications, Six Sigma belts, and coding, system design and machine-learning interviews."
      pillarFrontmatter:
        review_cadence: monthly
      areas:
        - name: AWS Solutions Architect Associate
          description: "Studying for AWS Solutions Architect Associate: resilient, high-performing, secure and cost-aware designs, hands-on labs, practice exams and scenario questions."
          projects:
            - name: SAA exam guide and domain map folder
              description: |-
                ## Purpose
                AWS writes the Solutions Architect Associate exam from its published exam guide, which lists the four design domains, the task statements under each and an appendix of in-scope and out-of-scope services. Saving the current guide with its version and date, and turning it into a one-page domain map, means every course, lab and question bank is checked against the source rather than a forum thread.

                ## Milestones
                1. The current exam guide saved with its exam code, version and the date you downloaded it.
                2. The four domains and their task statements copied onto one page.
                3. The in-scope service list saved beside it, with out-of-scope services struck through.
                4. Current fee, exam length, question types and retake policy noted from the AWS certification pages, with the date checked.

                ## Notes
                Do not rely on weightings or fees quoted in course videos; they are often a version behind. Copy them from AWS on the day you check.
              priority: high
              deadlineOffsetDays: 14
              frontmatter:
                mode: research
                output_kind: artifact
                success_criteria: "One folder holds the dated exam guide, a one-page domain and task map, the in-scope service list and a dated note of fees and retake rules taken from AWS."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Download the current Solutions Architect Associate exam guide from the AWS certification site"
                - "Copy the four domain names and their task statements onto one page"
                - "Save the in-scope and out-of-scope service appendix next to the domain map"
                - "Note the current fee, duration, question types and retake waiting period with today's date"
            - name: Cloud skills audit before SAA study
              description: |-
                ## Purpose
                Most people who struggle with the associate exam are not short of AWS facts but of the networking, Linux and application basics the scenarios assume: CIDR ranges, DNS, TLS, how a load balancer and a database actually talk. Rating yourself honestly against those basics and against each domain before you start tells you whether to begin with SAA, take Cloud Practitioner first or spend two weeks on networking fundamentals.

                ## Milestones
                1. A skills matrix rating you from one to four on networking, Linux, security basics, databases and each SAA domain.
                2. Any hands-on AWS experience you already have listed by service and how long you used it.
                3. The three weakest rows marked as the first things to study.
                4. A written start decision: SAA now, a short fundamentals block first, or an entry credential first.

                ## Notes
                Start from the **Skills matrix** template. Subnetting is the gap that catches the most candidates; if you cannot split a /16 into /24s in your head, fix that first.
              priority: medium
              deadlineOffsetDays: 14
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A completed skills matrix with a one to four rating per row and a written decision on where your SAA study starts."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Rate yourself one to four on networking, Linux, security, databases and each SAA domain"
                - "List every AWS service you have used at work or at home and for how long"
                - "Split a 10.0.0.0/16 range into four subnets on paper as a quick networking check"
                - "Write down whether you start SAA now or do a fundamentals block first"
            - name: Diagnostic SAA practice exam and baseline score
              description: |-
                ## Purpose
                A full practice exam taken cold, before any study, shows which domains are already strong and which are close to zero, and it sets the number every later mock is measured against. Without it, people spend weeks on comfortable topics like EC2 and leave storage classes and hybrid networking until the final fortnight.

                ## Milestones
                1. One full-length practice exam completed under timed conditions before studying.
                2. The overall score and a score per domain recorded with the date.
                3. Every wrong answer tagged with the service and the domain it tests.
                4. The two weakest domains written at the top of the study calendar.

                ## Notes
                A low first score is normal and useful. Use the official AWS practice question set or a reputable bank; avoid dumps of supposedly real questions, which break the candidate agreement and can lead to revocation.
              priority: high
              deadlineOffsetDays: 10
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A dated baseline score with a per-domain breakdown and the two weakest domains named in the study plan."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Block a quiet uninterrupted slot this week for a full timed practice exam"
                - "Take the practice exam without notes and without pausing"
                - "Record the overall score and the score for each domain"
                - "Tag each wrong answer with the service and domain it tested"
            - name: Sandbox AWS account with billing guardrails
              description: |-
                ## Purpose
                Labs are what turn SAA from memorisation into design sense, but a forgotten NAT gateway, idle RDS instance or open S3 bucket in a personal account can cost real money or leak data. Setting up a dedicated study account with the root user locked down, budget alerts and an admin user for daily work, before the first lab, removes both risks.

                ## Milestones
                1. A separate AWS account used only for study, not your employer's or a shared one.
                2. Root user protected with multi-factor authentication and no access keys.
                3. An IAM Identity Center or IAM admin user created for daily lab work, also with MFA.
                4. A monthly budget with email alerts at a low threshold you would notice.
                5. Free tier or credit terms for new accounts read and their limits noted.

                ## Notes
                Free tier terms for new accounts have changed over time; read the current terms rather than a course slide. Set the budget alert lower than you think, since a single forgotten resource is the usual surprise.
              priority: high
              deadlineOffsetDays: 7
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A study-only AWS account exists with MFA on root, no root access keys, a separate admin login and an active budget alert."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Create or choose an AWS account used only for SAA study"
                - "Turn on MFA for the root user and confirm it has no access keys"
                - "Create a separate admin login with MFA for daily lab work"
                - "Set a monthly budget with email alerts at a low threshold"
                - "Read the current free tier or new account credit terms and note the limits"
            - name: Choosing an SAA course and question bank
              description: |-
                ## Purpose
                Video courses, official AWS training, books and question banks overlap heavily, and buying four of them is a common way to spend money instead of time. Comparing two or three options against the current exam guide, last update date, lab content and explanation quality lets you commit to one main course and one bank.

                ## Milestones
                1. Two or three courses and two question banks shortlisted with prices and last update dates.
                2. Each option checked against the current exam code and domain list.
                3. Sample questions from each bank compared for how well the explanations teach.
                4. One main course and one question bank chosen and recorded with the reason.

                ## Notes
                Start from the **Purchase decision** template. A bank whose explanations say why each wrong option is wrong is worth more than one with twice as many questions.
              priority: medium
              deadlineOffsetDays: 21
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A recorded choice of one main course and one question bank, both confirmed against the current exam code, with price and reason noted."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Shortlist three SAA courses and note each one's price and last update date"
                - "Check that each course names the current exam code in its description"
                - "Try ten free sample questions from two question banks and compare the explanations"
                - "Record the course and bank you chose and why"
            - name: SAA study calendar to a target exam week
              description: |-
                ## Purpose
                Candidates with some AWS experience often need eight to twelve weeks of steady study, and those new to cloud usually need longer. Working backwards from a target exam week, with each domain given its own block, a mock exam every few weeks and a fortnight of buffer before the end, turns a vague intention into a plan you can fall behind on and notice.

                ## Milestones
                1. A target exam week chosen and written down.
                2. Weekly blocks assigned to each domain, weakest domains first.
                3. Practice exam dates marked at regular intervals.
                4. A two-week review buffer before the exam week.
                5. The calendar shared with anyone whose time it affects.
              priority: high
              deadlineOffsetDays: 14
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A dated calendar runs from this week to a target exam week, with each domain, every practice exam and a two-week buffer placed on it."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Pick a target exam week and count the weeks from today"
                - "Give each of the four domains its own block, starting with the weakest"
                - "Mark practice exam dates every three to four weeks"
                - "Leave the last two weeks free for review and tell your household the plan"
            - name: Service comparison notebook for the in-scope list
              description: |-
                ## Purpose
                Exam questions rarely ask what a service is; they ask which of four plausible services fits a requirement such as lowest latency, least operational effort or cheapest archive. A notebook organised by decision rather than by service, with pages like queue versus topic versus event bus, captures exactly the distinctions the scenarios test.

                ## Milestones
                1. One page for each common decision: compute, block versus file versus object storage, relational versus key-value, messaging, edge and caching.
                2. Each page listing the candidate services and the requirement words that favour each.
                3. Limits and defaults that change answers noted, such as message retention or replica counts, checked against AWS docs.
                4. Every page linked back to the exam guide task it serves.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A notebook of at least ten decision pages, each listing candidate services and the requirement words that point to each."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "Create a notebook with one page per common architecture decision"
                - "Fill the storage page with S3, EBS, EFS and FSx and the words that favour each"
                - "Check every limit you write down against the current AWS documentation"
                - "Ask the agent to quiz you on one decision page and note the gaps it finds"
            - name: AWS certification account and booking set-up
              description: |-
                ## Purpose
                Exam booking, score reports, digital badges and any discount from a previous AWS exam all live in your AWS Certification account, and a name that does not match your ID exactly can stop you sitting the exam. Setting the account up early, with your legal name and the test delivery provider linked, avoids a scramble the week you want to book.

                ## Milestones
                1. An AWS Certification account created or found, under a personal email you will keep.
                2. Your name matching your government ID character for character.
                3. Any discount benefit from a previous AWS certification checked and noted.
                4. The test delivery provider's profile linked and your time zone set correctly.

                ## Notes
                Use a personal email rather than a work one, so the credential follows you if you change jobs.
              priority: medium
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "An AWS Certification account exists under a personal email, with a name matching your ID and any discount benefit recorded."
                cadence: one-shot
                effort_hours_estimate: "1"
              tasks:
                - "Sign in to or create your AWS Certification account with a personal email"
                - "Compare the name on the account with your passport or ID exactly"
                - "Check the benefits page for a discount from any earlier AWS certification"
                - "Link the test delivery provider profile and confirm your time zone"
            - name: Four SAA study blocks a week routine
              description: |-
                ## Purpose
                Steady short sessions beat weekend marathons for a scenario exam, because judgement builds from seeing the same trade-offs many times. Two weekday evening blocks, one lunchtime review and one longer weekend block, each with a named domain and a stop time, keeps progress moving without burning out.

                ## Milestones
                1. Four recurring study blocks placed in your calendar with start and stop times.
                2. Each block tied to a domain or a named lab before it starts.
                3. A simple tick record of blocks done and missed each week.
                4. Six consecutive weeks with at least three of four blocks done.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Your record shows at least three of four planned SAA study blocks completed in each of six consecutive weeks."
                cadence: rolling
              tasks:
                - "Put four recurring SAA study blocks in your calendar with stop times"
                - "Do a weekday evening study block on the domain of the week @recurring(weekly:tue,thu)"
                - "Do a long weekend study block finishing with ten scenario questions @recurring(weekly:sun)"
                - "Tick each block done or missed on your weekly record"
            - name: Wrong-answer log with domain tags
              description: |-
                ## Purpose
                Scores rise fastest from the questions you got wrong, but only if you know why: a missed keyword, a service you confused with another, or a fact you never learned. A log that records each miss with its cause and domain, reviewed weekly, turns scattered errors into a short list of patterns to fix.

                ## Milestones
                1. A log with columns for question topic, chosen answer, right answer, cause and domain.
                2. Every practice miss entered within a day of the session.
                3. A weekly count of misses by cause and by domain.
                4. The top recurring cause written as a single rule on the first page.

                ## Notes
                Use only three or four cause labels, such as missed requirement, confused services, unknown fact and changed my answer. More labels make the pattern harder to see.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "The wrong-answer log has entries for every practice session and a weekly cause count for at least six weeks."
                cadence: rolling
              tasks:
                - "Set up a wrong-answer log with topic, answers, cause and domain columns"
                - "Enter every missed practice question with its cause within a day"
                - "Review the week's misses and count them by cause and domain @recurring(weekly:fri)"
                - "Write the most common cause as a one-line rule at the top of the log"
            - name: Weekly SAA lab build and teardown
              description: |-
                ## Purpose
                Building the architecture a scenario describes, even a small version, fixes details that reading never will: why the private instance cannot reach the internet, why the bucket policy denies you, how health checks fail. One lab a week from the current domain, torn down the same day, adds up to a dozen working designs by exam week.

                ## Milestones
                1. A lab list of at least ten builds mapped to exam guide tasks.
                2. One lab built and torn down each week, with a short note of what broke.
                3. A diagram of each lab saved with its notes.
                4. Ten labs completed before the first readiness decision.

                ## Notes
                Write the teardown steps before you build. Labs that use NAT gateways, load balancers or databases cost money by the hour, so finish them in one sitting.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Ten or more labs, each mapped to an exam guide task, are built, documented with a diagram and torn down."
                cadence: rolling
              tasks:
                - "List ten lab builds and map each one to an exam guide task"
                - "Build and tear down the week's lab and note what broke @recurring(weekly:sat)"
                - "Save a simple diagram of each lab beside its notes"
                - "Write the teardown steps for the next lab before starting it"
            - name: Monthly timed SAA practice exam
              description: |-
                ## Purpose
                Stamina and pacing count on the real exam as much as knowledge, and the only way to practise both is full-length timed sittings. Taking one every month in exam conditions, then reviewing every question including the ones you got right, shows whether the score is rising and whether you are finishing in time.

                ## Milestones
                1. A full practice exam sat each month in one sitting with the real time limit.
                2. Score, time remaining and per-domain results recorded after each one.
                3. Every question reviewed, with lucky guesses treated as misses.
                4. Three consecutive monthly scores comfortably above your own readiness line.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "At least three monthly timed practice exams are recorded with score, time remaining and per-domain results."
                cadence: rolling
              tasks:
                - "Choose the question bank exams you will use for monthly timed sittings"
                - "Sit a full timed SAA practice exam in exam conditions @recurring(monthly:12)"
                - "Review every question, marking lucky guesses as misses"
                - "Record score, time left and domain results in your score tracker"
            - name: Daily flashcards for SAA service distinctions
              description: |-
                ## Purpose
                Some exam answers hinge on small facts: which storage classes have retrieval fees, which databases offer read replicas across Regions, which load balancer works at layer 4. Ten minutes of spaced-repetition cards a day keeps these facts fresh without stealing time from labs and scenarios.

                ## Milestones
                1. A deck of cards built from your comparison notebook and wrong-answer log.
                2. Cards worded as decisions, such as cheapest storage for data read once a year.
                3. Daily review kept to about ten minutes.
                4. Thirty days of reviews done out of the last thirty-five.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Your flashcard app shows reviews on at least 30 of the last 35 days and a deck of over 150 SAA cards."
                cadence: rolling
              tasks:
                - "Install a spaced-repetition app and create an SAA deck"
                - "Turn ten entries from your comparison notebook into decision cards"
                - "Review the day's SAA flashcards for about ten minutes @recurring(daily)"
                - "Add a card for each new fact in the wrong-answer log"
            - name: Sandbox cost and cleanup sweep
              description: |-
                ## Purpose
                Study accounts drift: an Elastic IP left unattached, snapshots kept forever, a test database in a second Region you forgot you used. A short weekly sweep of every Region and a monthly look at the bill keeps the account cheap and teaches the cost visibility tools the exam expects you to know.

                ## Milestones
                1. A sweep checklist covering running instances, NAT gateways, load balancers, databases, Elastic IPs and snapshots.
                2. Each weekly sweep done across all Regions you have used.
                3. A monthly note of the bill and the biggest line item.
                4. Two consecutive months under your budget with no surprise charges.

                ## Notes
                Cost Explorer and the billing console show charges by service and Region; use them rather than guessing which Region holds the forgotten resource.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Weekly sweeps and a monthly bill note are recorded, with two consecutive months under budget and no unexplained charges."
                cadence: rolling
              tasks:
                - "Write a sweep checklist of the resources that charge by the hour"
                - "Sweep every used Region for leftover lab resources @recurring(weekly:mon)"
                - "Check the bill in Cost Explorer and note the biggest line item @recurring(monthly:3)"
                - "Delete old snapshots and unattached volumes from finished labs"
            - name: SAA domain score tracker
              description: |-
                ## Purpose
                An overall percentage hides the real picture: a strong secure-architectures score can carry a weak cost domain for weeks without you noticing. Tracking each domain's practice score over time, on one sheet, shows which study blocks are working and when you have plateaued.

                ## Milestones
                1. A sheet with dates down the side and the four domains across the top.
                2. Every practice exam and large quiz entered within a day.
                3. A monthly note on which domain moved most and which stood still.
                4. Each domain trending at or above your readiness line before booking.

                ## Notes
                Start from the **Metrics log** template.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "The tracker holds per-domain scores from every practice exam and a monthly note on movement for at least three months."
                cadence: rolling
              tasks:
                - "Set up a score sheet with the four domains as columns"
                - "Enter the baseline diagnostic scores as the first row"
                - "Update the tracker and note the domain that moved least @recurring(monthly:20)"
                - "Highlight any domain below your readiness line"
            - name: Monthly SAA study plan reset
              description: |-
                ## Purpose
                Every study plan slips, and the risk is not slipping but pretending you have not. A short monthly review that compares blocks done, scores and labs against the calendar, then moves the remaining weeks, keeps the target exam week honest.

                ## Milestones
                1. Blocks done, labs done and the latest scores compared with the calendar each month.
                2. Remaining domain blocks reordered by current weakness.
                3. The target exam week confirmed or moved, with the reason written down.
                4. One thing dropped from the plan each month that is not paying off.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A dated monthly review note exists for each month of study, confirming or moving the exam week with a reason."
                cadence: rolling
              tasks:
                - "Compare blocks done, labs done and scores with the study calendar @recurring(monthly:27)"
                - "Reorder the remaining domain blocks by current weakness"
                - "Confirm or move the target exam week and write the reason"
                - "Drop one study activity that has not moved your scores"
            - name: Weekly architecture whiteboard with a study partner
              description: |-
                ## Purpose
                Explaining out loud why you chose Aurora over DynamoDB, or a pilot light over warm standby, exposes fuzzy reasoning faster than any question bank. A weekly half-hour with a partner, taking turns to whiteboard a scenario and defend it, builds the habit of justifying every design choice by requirement.

                ## Milestones
                1. A study partner or small group agreed, with a fixed weekly slot.
                2. A shared list of scenarios to whiteboard, one per session.
                3. Each session ending with the trade-off each person would change.
                4. Eight sessions held before exam week.

                ## Notes
                Online study groups and local cloud meetups are good places to find a partner if no colleague is studying.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "At least eight whiteboard sessions are logged, each with the scenario used and the trade-off discussed."
                cadence: rolling
              tasks:
                - "Ask a colleague or online study group member to be your SAA partner"
                - "Agree a shared list of design scenarios to whiteboard"
                - "Whiteboard and defend one scenario with your partner @recurring(weekly:wed)"
                - "Write the one trade-off you would change after each session"
            - name: Exam guide and service change watch
              description: |-
                ## Purpose
                AWS updates exam guides, retires services from scope and launches features that change the best answer to old questions. A quarterly check of the certification page and a monthly skim of AWS announcements for in-scope services stops you studying an outdated version or arguing with a correct answer.

                ## Milestones
                1. The exam guide version and date you study to noted on the domain map.
                2. A quarterly check of the certification page for a new version or retirement notice.
                3. A monthly skim of announcements filtered to services on the in-scope list.
                4. Any change that affects your notes written into them with the date.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "The domain map shows the guide version studied and a dated quarterly check, with any relevant changes recorded in your notes."
                cadence: rolling
              tasks:
                - "Write the exam guide version and date at the top of your domain map"
                - "Check the AWS certification page for a new exam guide version @recurring(quarterly)"
                - "Skim AWS announcements for changes to in-scope services @recurring(monthly:8)"
                - "Update your notes for any change that alters a best answer"
            - name: IAM policies, roles and multi-account access
              description: |-
                ## Purpose
                Identity questions run through the secure architectures domain and appear inside many others: an application on EC2 that needs S3 access, a third party that needs read-only access, an organisation that wants guardrails on every account. Writing and testing policies yourself, rather than reading them, makes the evaluation logic of allow, explicit deny and boundaries stick.

                ## Milestones
                1. An identity-based policy, a resource-based policy and a trust policy written and tested in the sandbox.
                2. An EC2 instance role used to reach S3 without any stored keys.
                3. A cross-account role assumed from a second account.
                4. Service control policies and permission boundaries explained in your own words with one example each.
                5. A practice question set on identity scored at or above your readiness line.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Working examples of identity, resource and trust policies exist in your lab notes and an identity question set is scored at or above your readiness line."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Write an identity policy that allows read access to one S3 bucket only"
                - "Attach an instance role to EC2 and read from S3 without access keys"
                - "Set up and assume a cross-account role between two accounts"
                - "Explain policy evaluation with an explicit deny in a short note"
            - name: VPC design with subnets, routing and endpoints
              description: |-
                ## Purpose
                Networking is where most associate candidates lose marks, because scenarios assume you can picture where traffic flows: public versus private subnets, a NAT gateway per Availability Zone, gateway and interface endpoints, peering versus a transit gateway. Building a two-AZ VPC by hand, without the wizard, makes every networking question easier to read.

                ## Milestones
                1. A VPC built by hand with public and private subnets in two Availability Zones.
                2. Route tables, an internet gateway and NAT gateways configured and tested from a private instance.
                3. An S3 gateway endpoint added and traffic confirmed to avoid the NAT gateway.
                4. Peering and transit gateway compared on one page with when each fits.
                5. A diagram of the VPC saved with the CIDR plan.

                ## Notes
                Delete the NAT gateways when the lab ends; they charge by the hour whether or not traffic flows.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A hand-built two-AZ VPC with tested routing and an S3 gateway endpoint is documented in a diagram with its CIDR plan."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "Draw a CIDR plan for a VPC with public and private subnets in two AZs"
                - "Build the VPC by hand and test internet access from a private instance"
                - "Add an S3 gateway endpoint and check the route table entry"
                - "Compare VPC peering and transit gateway on a single page"
            - name: Hybrid connectivity with VPN and Direct Connect
              description: |-
                ## Purpose
                Scenarios about a company keeping its data centre while moving to AWS test whether you know when a Site-to-Site VPN is enough, when Direct Connect is worth the lead time, and how to make either resilient. Few candidates can lab Direct Connect, so a clear comparison table and a VPN lab built against a simulated on-premises network carry most of the value.

                ## Milestones
                1. Site-to-Site VPN, Client VPN and Direct Connect compared by bandwidth, set-up time, cost model and resilience.
                2. A Site-to-Site VPN built between two VPCs, one acting as on-premises.
                3. Resilient patterns written down, such as two connections or VPN as Direct Connect backup.
                4. Hybrid DNS resolution with Route 53 Resolver endpoints summarised with one diagram.
              priority: low
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A comparison table of hybrid connection options and lab notes from a working Site-to-Site VPN exist in your study folder."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Build a comparison table of Site-to-Site VPN, Client VPN and Direct Connect"
                - "Simulate an on-premises network in a second VPC and connect it by VPN"
                - "Write down two resilient hybrid connectivity patterns with a diagram"
                - "Summarise how Route 53 Resolver endpoints handle hybrid DNS"
            - name: Encryption, keys and secrets for data protection
              description: |-
                ## Purpose
                Data protection questions ask which encryption option satisfies a requirement such as customer control of keys, key rotation or audit of every key use. Working through S3 encryption choices, KMS key types, EBS and RDS encryption and where to keep database credentials, in the sandbox, gives you the vocabulary to pick between answers that all say encrypted.

                ## Milestones
                1. S3 server-side encryption options compared and one bucket set to enforce encryption.
                2. AWS managed and customer managed KMS keys compared, with a key policy read line by line.
                3. An encrypted EBS volume and an encrypted RDS snapshot created, and the rule for encrypting an existing unencrypted database written down.
                4. Secrets Manager and Parameter Store compared for storing credentials and rotation.
                5. Certificate Manager's role in TLS at a load balancer or CloudFront noted.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Lab notes show an encryption-enforced bucket, a customer managed KMS key with its policy explained, and a written comparison of Secrets Manager and Parameter Store."
                cadence: phased
                effort_hours_estimate: "7"
              tasks:
                - "Enforce default encryption on a sandbox S3 bucket and test an upload"
                - "Create a customer managed KMS key and annotate its key policy"
                - "Write the steps for encrypting an existing unencrypted RDS database"
                - "Compare Secrets Manager and Parameter Store for credential rotation"
            - name: Security groups, NACLs, WAF and Shield
              description: |-
                ## Purpose
                Perimeter questions mix layers deliberately: a stateful security group, a stateless network ACL, a web application firewall rule and DDoS protection may all appear as options for one problem. Testing each control in a lab, and writing down what layer it works at and what it can and cannot block, makes the distractors easy to rule out.

                ## Milestones
                1. A security group and a network ACL configured on the same subnet, with the stateful and stateless difference shown by a test.
                2. Security groups that reference other security groups used for a web and database tier.
                3. A WAF rule attached to a load balancer or CloudFront distribution and tested.
                4. Shield Standard and Shield Advanced compared, and GuardDuty, Inspector and Macie each summarised in one line.
              priority: medium
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "Lab notes demonstrate security group and NACL behaviour on one subnet and a tested WAF rule, with a one-line summary of each detection service."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Block a port with a NACL and show the stateless return traffic problem"
                - "Set a database security group to accept traffic only from the web tier group"
                - "Attach a WAF rate rule to a test load balancer and trigger it"
                - "Write one line each on GuardDuty, Inspector and Macie"
            - name: Multi-AZ resilience and disaster recovery strategies
              description: |-
                ## Purpose
                Questions in the resilient architectures domain keep returning to the same question: what happens when an instance, an Availability Zone or a whole Region fails, and what recovery time and data loss can the business accept. Learning the four standard recovery strategies against recovery time and recovery point objectives, and failing over a Multi-AZ database yourself, answers most of these scenarios.

                ## Milestones
                1. Backup and restore, pilot light, warm standby and multi-site active-active compared by RTO, RPO and cost.
                2. A Multi-AZ RDS failover triggered in the sandbox and timed.
                3. Read replicas and Multi-AZ explained as different tools for different problems.
                4. AWS Backup and cross-Region snapshot copy tried on one resource.
                5. Route 53 failover routing with a health check set up between two endpoints.

                ## Notes
                A common trap is choosing read replicas for high availability or Multi-AZ standby for read scaling; write the difference on a flashcard.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A recovery strategy table with RTO, RPO and cost for each option exists, and lab notes record a timed Multi-AZ failover and a Route 53 failover test."
                cadence: phased
                effort_hours_estimate: "9"
              tasks:
                - "Build a table of the four DR strategies by RTO, RPO and relative cost"
                - "Trigger a Multi-AZ RDS failover and time how long it takes"
                - "Copy a snapshot to a second Region with AWS Backup"
                - "Set up Route 53 failover routing with a health check between two endpoints"
            - name: Decoupling with queues, topics and events
              description: |-
                ## Purpose
                When a scenario says orders are lost during traffic spikes or one slow component brings the rest down, the answer is usually a loose coupling pattern. Building a small producer and consumer with SQS, a fan-out with SNS and a rule in EventBridge shows how standard and FIFO queues, dead-letter queues and visibility timeouts change behaviour.

                ## Milestones
                1. A producer and consumer built on an SQS queue, with a dead-letter queue catching failed messages.
                2. Standard and FIFO queues compared on ordering, duplicates and throughput.
                3. An SNS topic fanning out to two queues.
                4. An EventBridge rule routing an event to a target, and Step Functions summarised as the orchestration option.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Lab notes show a working SQS pipeline with a dead-letter queue, an SNS fan-out and an EventBridge rule, plus a standard versus FIFO comparison."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Send and receive messages on an SQS queue with a dead-letter queue attached"
                - "Write a comparison of standard and FIFO queues"
                - "Fan out one SNS message to two SQS queues"
                - "Create an EventBridge rule that sends a test event to a target"
            - name: Load balancing and Auto Scaling patterns
              description: |-
                ## Purpose
                Scaling questions test whether you can match an Application, Network or Gateway Load Balancer to a requirement and choose a scaling policy that reacts at the right speed. Putting an Auto Scaling group behind a load balancer and watching it scale under load teaches health checks, cooldowns and target tracking better than any diagram.

                ## Milestones
                1. Application, Network and Gateway Load Balancers compared by layer, routing features and typical use.
                2. An Auto Scaling group across two AZs behind an Application Load Balancer.
                3. A target tracking policy triggered by generated load and the scale-out observed.
                4. Scheduled, predictive and step scaling each summarised with a scenario that suits it.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Lab notes record an Auto Scaling group scaling out behind a load balancer under test load, plus a comparison of the three load balancer types."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Compare the three load balancer types on one page"
                - "Launch an Auto Scaling group across two AZs behind an ALB"
                - "Generate load and watch a target tracking policy add instances"
                - "Note one scenario each for scheduled, predictive and step scaling"
            - name: Choosing storage for each SAA scenario
              description: |-
                ## Purpose
                Storage questions are some of the most predictable on the exam once you know the decision points: object, block or file, how often data is read, how many instances share it, and how fast it must come back. Working through S3 storage classes and lifecycle rules, EBS volume types, EFS and the FSx family turns these into quick eliminations.

                ## Milestones
                1. S3 storage classes laid out by access pattern, retrieval time and minimum storage duration, checked against AWS docs.
                2. A lifecycle rule created that moves objects to an archive class.
                3. EBS volume types compared by performance profile and use.
                4. EFS and the FSx options compared, including when Windows or high-performance file systems are required.
                5. Storage Gateway and DataSync summarised for hybrid and migration cases.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A storage decision sheet covers S3 classes, EBS types, EFS and FSx, and a working S3 lifecycle rule is recorded in your lab notes."
                cadence: phased
                effort_hours_estimate: "7"
              tasks:
                - "List S3 storage classes by access pattern and retrieval time from AWS docs"
                - "Create a lifecycle rule that moves test objects to an archive class"
                - "Compare EBS volume types and note which suit databases and boot volumes"
                - "Write when to choose EFS, each FSx option, Storage Gateway or DataSync"
            - name: Choosing databases and caching layers
              description: |-
                ## Purpose
                Database questions turn on a few clues: relational or key-value, read-heavy or write-heavy, global users, sub-millisecond reads, analytics over large history. Comparing RDS, Aurora, DynamoDB, ElastiCache and Redshift against those clues, and trying DynamoDB and a cache in the sandbox, covers a large share of the high-performing and resilient scenarios.

                ## Milestones
                1. RDS, Aurora, DynamoDB, ElastiCache and Redshift compared on one page by data model and scaling pattern.
                2. A DynamoDB table created with on-demand capacity and a global secondary index.
                3. Aurora replicas, Aurora global databases and DynamoDB global tables compared for multi-Region reads.
                4. Caching with ElastiCache and DynamoDB Accelerator summarised with when each applies.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A database comparison page covering five services and lab notes from a DynamoDB table with a secondary index are saved in your study folder."
                cadence: phased
                effort_hours_estimate: "7"
              tasks:
                - "Build a one-page comparison of RDS, Aurora, DynamoDB, ElastiCache and Redshift"
                - "Create a DynamoDB table with a global secondary index and query it"
                - "Compare the multi-Region read options for Aurora and DynamoDB"
                - "Write when a cache in front of a database is the right answer"
            - name: Ingestion and analytics services at associate depth
              description: |-
                ## Purpose
                Associate candidates are expected to recognise the analytics building blocks without being a data engineer: streaming with Kinesis, serverless queries with Athena, cataloguing with Glue, dashboards and a warehouse. A small pipeline that lands streaming data in S3 and queries it with Athena is enough to answer the pattern questions confidently.

                ## Milestones
                1. Kinesis Data Streams and Firehose compared, with when to choose each.
                2. Test data delivered to S3 through Firehose.
                3. A Glue crawler cataloguing the data and an Athena query run against it.
                4. Redshift, EMR, OpenSearch and QuickSight each summarised in one line by use case.
              priority: low
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "Lab notes show data delivered to S3 through Firehose and queried with Athena, plus a one-line use case for each other analytics service."
                cadence: phased
                effort_hours_estimate: "5"
              tasks:
                - "Compare Kinesis Data Streams and Firehose in a short note"
                - "Send test records through Firehose into an S3 bucket"
                - "Catalogue the data with a Glue crawler and query it in Athena"
                - "Write one line on when to choose Redshift, EMR, OpenSearch and QuickSight"
            - name: Serverless and container options for architects
              description: |-
                ## Purpose
                Architect questions ask which compute model meets a requirement with the least operational effort, not how to write the function. Comparing EC2, Lambda, ECS on EC2, Fargate and EKS by control, scaling, cost shape and run-time limits, and deploying one small container on Fargate, makes the least-effort answer easy to spot.

                ## Milestones
                1. EC2, Lambda, ECS, Fargate and EKS compared by operational effort, scaling and limits.
                2. One small container service running on Fargate behind a load balancer.
                3. Lambda limits that rule it out for a workload noted from AWS docs.
                4. API Gateway and Lambda sketched as a serverless front end for a scenario.
              priority: low
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A compute comparison table covering five options and lab notes from a Fargate service behind a load balancer are saved."
                cadence: phased
                effort_hours_estimate: "5"
              tasks:
                - "Build a compute comparison table from EC2 to EKS by operational effort"
                - "Run a small container on Fargate behind a load balancer"
                - "Note the Lambda limits that rule it out for long or heavy jobs"
                - "Sketch an API Gateway and Lambda front end for a sample scenario"
            - name: Cost-optimised compute and purchasing options
              description: |-
                ## Purpose
                Cost questions usually hide in a scenario about steady workloads, interruptible batch jobs or unpredictable traffic, and the answer depends on matching the purchase option to the pattern. Laying out On-Demand, Savings Plans, Reserved Instances, Spot and Dedicated options side by side, with right-sizing and instance families, makes these some of the easiest marks on the paper.

                ## Milestones
                1. Purchasing options compared by commitment, flexibility, interruption risk and typical saving.
                2. Three workload patterns matched to the best purchase option with a reason.
                3. Right-sizing and instance family choice summarised, including Arm-based instances.
                4. Compute Optimizer and Cost Explorer recommendations looked at in the sandbox.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A purchase option comparison and three workload-to-option matches with reasons are written in your notes."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Compare On-Demand, Savings Plans, Reserved, Spot and Dedicated options"
                - "Match a steady, a batch and a spiky workload to the best purchase option"
                - "Look at the right-sizing recommendations in your sandbox account"
                - "Write a short note on when Arm-based instances lower cost"
            - name: Data transfer and storage cost traps
              description: |-
                ## Purpose
                Quiet charges are where the cost domain catches people out: NAT gateway processing, cross-AZ and cross-Region transfer, internet egress, retrieval fees on archive classes and over-provisioned volumes. A one-page map of where data transfer is charged, with the design change that avoids each charge, answers a whole family of questions.

                ## Milestones
                1. A diagram showing where data transfer is free and where it is charged, checked against current pricing pages.
                2. Gateway endpoints, CloudFront and same-AZ placement noted as ways to cut transfer cost.
                3. Archive retrieval fees and minimum storage durations listed for the cold storage classes.
                4. Five practice cost questions answered with the trap named in each.
              priority: low
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A data transfer cost map and five annotated cost questions naming the trap in each are saved in your study folder."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Draw where data transfer is charged between AZs, Regions and the internet"
                - "List three design changes that cut NAT gateway and egress charges"
                - "Note retrieval fees and minimum durations for the archive storage classes"
                - "Answer five cost scenario questions and name the trap in each"
            - name: Reading SAA scenario questions for the key requirement
              description: |-
                ## Purpose
                Most SAA questions offer two answers that work and one that works best for a stated constraint: least operational overhead, most cost-effective, highest availability, minimal changes to the application. Practising a fixed reading method, finding the constraint first and eliminating options that break it, is often worth more than another week of service facts.

                ## Milestones
                1. A list of the qualifier phrases that decide answers, each with what it usually favours.
                2. A reading routine written down: last sentence first, underline constraints, eliminate, then choose.
                3. Twenty scenario questions answered with the deciding phrase written beside each.
                4. Multiple-response questions practised with a rule for how many options to select.

                ## Notes
                Least operational overhead usually points to managed or serverless services; minimal application changes usually rules out a rewrite. Check each rule against your wrong-answer log rather than trusting it blindly.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A written reading routine and twenty scenario questions annotated with their deciding phrase are saved, and the missed requirement cause is falling in your log."
                cadence: phased
                effort_hours_estimate: "5"
              tasks:
                - "List the qualifier phrases that decide SAA answers and what each favours"
                - "Write a five-step reading routine on a card"
                - "Answer ten untimed scenario questions noting the deciding phrase @recurring(weekly:thu)"
                - "Practise multiple-response questions until you read the select count every time"
            - name: Well-Architected Framework and key whitepapers
              description: |-
                ## Purpose
                The four exam domains map closely to the Well-Architected Framework's pillars, and many correct answers simply restate its design principles. Reading the framework overview and the security, reliability, performance and cost pillars, with a few targeted whitepapers and service FAQs, gives you the reasoning AWS expects behind each answer.

                ## Milestones
                1. A reading list of the framework overview, four relevant pillar papers and three service FAQs.
                2. Design principles from each pillar written as one-line rules.
                3. Each rule linked to a domain on your exam map.
                4. A Well-Architected Tool review run against one of your lab designs.

                ## Notes
                Start from the **Reading queue** template. Read the S3, EC2 and VPC FAQs; they answer many of the edge cases question banks like to test.
              priority: low
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "One-line design principle rules from four pillars are linked to exam domains, and a Well-Architected Tool review of a lab design is saved."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Build a reading queue of the framework overview, four pillars and three FAQs"
                - "Write each pillar's design principles as one-line rules"
                - "Link each rule to a domain on your exam map"
                - "Run a Well-Architected Tool review against one of your lab designs"
            - name: Closing the weakest SAA domain after the second mock
              description: |-
                ## Purpose
                By the second timed practice exam, one domain is usually clearly behind, and general revision will not move it fast enough. A focused two-week block on that domain alone, with targeted labs, a fresh question set and a retest, lifts the overall score more than spreading the same hours across everything.

                ## Milestones
                1. The weakest domain identified from the tracker and the wrong-answer log.
                2. Its exam guide task statements listed with your confidence on each.
                3. Two targeted labs and one domain-only question set completed.
                4. A retest on that domain scoring at or above your readiness line.
              priority: medium
              deadlineOffsetDays: 75
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A retest on the previously weakest domain scores at or above your readiness line, recorded in the score tracker."
                cadence: phased
                effort_hours_estimate: "12"
              tasks:
                - "Pick the weakest domain from the tracker and wrong-answer log"
                - "Rate your confidence on each of its task statements"
                - "Complete two labs and one question set on that domain only"
                - "Retest the domain and record the score in the tracker"
            - name: Online proctored or test centre decision
              description: |-
                ## Purpose
                Online proctoring saves travel but brings strict room rules, a system check and the risk of a dropped connection mid-exam; a test centre removes those risks but needs travel and an available slot. Deciding early, with the room, internet and nearest centres checked, avoids booking a format that fails you on the day.

                ## Milestones
                1. The provider's online testing rules read, including room, desk and break rules.
                2. The official system test run on the computer and network you would use.
                3. The nearest test centres and their available dates checked.
                4. A decision recorded with the main reason and a fallback.

                ## Notes
                Work laptops often fail the system test because of security software or blocked ports; test on the exact machine you will use.
              priority: medium
              deadlineOffsetDays: 60
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A recorded choice of online or test centre delivery, backed by a passed system test or a confirmed nearby centre."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Read the current online proctoring rules from the test delivery provider"
                - "Run the official system test on the computer and network you would use"
                - "Check available dates at the two nearest test centres"
                - "Write down your choice, the reason and your fallback"
            - name: SAA exam readiness go or postpone decision
              description: |-
                ## Purpose
                Booking too early wastes the fee and a retake wait, and booking too late lets knowledge fade and motivation drop. A short written decision, made against evidence you set in advance such as three timed scores above your line and no domain below it, takes emotion out of the call.

                ## Milestones
                1. Readiness criteria written before the decision date.
                2. The last three timed scores and per-domain results set against the criteria.
                3. Lab count and wrong-answer trends checked.
                4. A go or postpone decision recorded, with a new date if postponing.

                ## Notes
                Practice bank scores vary in difficulty; judge against your own trend in one bank rather than comparing across banks.
              priority: high
              deadlineOffsetDays: 90
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A dated go or postpone decision exists, checked against readiness criteria written in advance and the last three timed scores."
                cadence: one-shot
                effort_hours_estimate: "1"
              tasks:
                - "Write your readiness criteria before looking at the latest scores"
                - "Set your last three timed scores and domain results against the criteria"
                - "Decide go or postpone and record the reason"
                - "Set a new decision date if you postpone"
            - name: Booking the SAA exam slot
              description: |-
                ## Purpose
                Popular slots fill weeks ahead, and the rescheduling and cancellation windows mean a booking made carelessly can cost money. Booking through your certification account with the right time zone, a time of day you think well at, and any accommodation already approved, fixes the date the last weeks of study aim at.

                ## Milestones
                1. Any accommodation, such as extra time, requested and approved before booking.
                2. Discount benefit applied if you have one.
                3. A slot booked at a time of day you are alert, in the correct time zone.
                4. Confirmation email saved and the reschedule deadline put in your calendar.
              priority: high
              deadlineOffsetDays: 100
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A confirmed exam booking exists with the confirmation saved and the last reschedule date in your calendar."
                cadence: one-shot
                effort_hours_estimate: "1"
              tasks:
                - "Request any accommodation you need before choosing a slot"
                - "Apply any discount benefit at checkout"
                - "Book a slot at your best time of day and check the time zone"
                - "Put the reschedule deadline in your calendar with a reminder"
            - name: Final fourteen days before the SAA exam
              description: |-
                ## Purpose
                The last two weeks are for consolidation, not new services: one more timed exam, a pass through every wrong-answer entry, the comparison notebook and flashcards, and sleep. A written fortnight plan prevents the panic of starting a new course three days before the exam.

                ## Milestones
                1. A day-by-day plan for the final fourteen days written out.
                2. One final timed exam taken at the same time of day as the real one.
                3. Every wrong-answer log entry reread and the top rules memorised.
                4. No new study material started in the last three days.
              priority: high
              deadlineOffsetDays: 115
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A fourteen-day plan is completed, including a final timed exam at exam time of day and a full pass of the wrong-answer log."
                cadence: one-shot
                effort_hours_estimate: "20"
              tasks:
                - "Write a day-by-day plan for the last fourteen days"
                - "Do twenty mixed scenario questions each day of the final fortnight @recurring(daily)"
                - "Sit the final timed exam at the same time of day as your booking"
                - "Reread every wrong-answer entry and the top rules on the log's first page"
            - name: SAA exam day plan
              description: |-
                ## Purpose
                Small things go wrong on exam day: an ID name mismatch, a cluttered desk that fails the online check, arriving late, spending ten minutes on one question. A written plan for the morning, the check-in and pacing, including when to flag a question and move on, leaves your attention for the scenarios.

                ## Milestones
                1. ID checked against the booking name the day before.
                2. For online exams, the room cleared and the system test rerun the day before.
                3. A pacing rule written, such as flag and move on after two minutes.
                4. A plan for the final review pass on flagged questions.

                ## Notes
                There is no penalty for a wrong answer, so never leave a question blank; flag it, choose your best guess and come back if time allows.
              priority: high
              deadlineOffsetDays: 120
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "The exam is sat on the booked date with ID checked, room or travel prepared and a written pacing rule followed."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Check your ID against the name on the booking"
                - "Clear the room and rerun the system test the day before an online exam"
                - "Write a pacing rule and a flagged-question review plan on a card"
                - "Plan travel to arrive at the centre with time to spare"
            - name: SAA result, badge and profile update
              description: |-
                ## Purpose
                Score reports, digital badges and certificates arrive separately, and the credential only helps your career once people can see and verify it. Recording the result, the validation number and the expiry date, and updating your CV and profiles within a week, finishes the job.

                ## Milestones
                1. Score report saved with the domain feedback it gives.
                2. Digital badge claimed and the validation number recorded.
                3. Certification expiry date put in your credential record and calendar.
                4. CV and professional profile updated with the credential and a verifiable link.
              priority: medium
              deadlineOffsetDays: 135
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "The score report, badge link, validation number and expiry date are recorded and your CV lists the credential."
                cadence: one-shot
                effort_hours_estimate: "1"
              tasks:
                - "Save the score report and its domain feedback"
                - "Claim the digital badge and record the validation number"
                - "Put the expiry date in your credential record and calendar"
                - "Add the credential with its verification link to your CV and profile"
            - name: SAA retake plan after a below-pass result
              description: |-
                ## Purpose
                A fail at associate level is common, especially for people strong in one domain and new to others, and the score report's domain feedback tells you exactly where to look. A short retake plan built from that feedback and your wrong-answer log, respecting the waiting period before you can rebook, turns a setback into a narrower second attempt.

                ## Milestones
                1. Domain feedback from the score report copied into your tracker.
                2. The retake waiting period and fee checked on the AWS site.
                3. A four to six week plan aimed at the domains marked as needing improvement.
                4. A new exam slot booked once two timed scores clear your readiness line.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A written retake plan targets the score report's weak domains and a new exam slot is booked after two qualifying timed scores."
                cadence: phased
                effort_hours_estimate: "30"
              tasks:
                - "Copy the score report's domain feedback into your tracker"
                - "Check the current retake waiting period and fee"
                - "Write a four to six week plan aimed at the weak domains"
                - "Book a new slot after two timed scores clear your readiness line"
            - name: SAA for an on-premises sysadmin moving to cloud
              description: |-
                ## Purpose
                Systems administrators bring real strengths, such as networking, backups and patching, but often try to rebuild the data centre in AWS when the exam wants managed services. Mapping what you already run to its AWS equivalent, and noting where the cloud answer differs, turns experience into an advantage instead of a source of wrong answers.

                ## Milestones
                1. A table mapping your current tools, such as file servers, backup software and firewalls, to AWS services.
                2. The places where the managed answer differs from your habit marked.
                3. Three migration scenarios answered using lift-and-shift and re-platform options.
                4. The migration services summarised: Application Migration Service, Database Migration Service and DataSync.
              priority: medium
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A mapping table from your current on-premises tools to AWS services is complete, with the differing managed answers marked."
                cadence: phased
                effort_hours_estimate: "5"
              tasks:
                - "List the tools and systems you run today on premises"
                - "Map each one to its closest AWS managed service"
                - "Mark where the managed answer would beat your usual approach"
                - "Summarise the AWS migration services in a short note"
            - name: SAA for a software developer new to infrastructure
              description: |-
                ## Purpose
                Developers often know Lambda, DynamoDB and APIs well but have never designed a network, planned for a failed Availability Zone or worried about the bill. A study plan that starts with VPCs, resilience and cost, and treats familiar application services as revision, puts your hours where the marks are.

                ## Milestones
                1. Your baseline scores reordered to put infrastructure domains first.
                2. The VPC and resilience labs completed before any application-service study.
                3. A short glossary of networking terms that keep appearing in scenarios.
                4. A practice exam showing networking and resilience at or above your readiness line.
              priority: low
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "Networking and resilience domain scores reach your readiness line on a practice exam, with those labs completed first."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Reorder your study calendar to put networking and resilience first"
                - "Keep a glossary of networking terms you meet in scenario questions"
                - "Finish the VPC and disaster recovery labs before application services"
                - "Ask the agent to explain one networking term you keep missing, then explain it back"
            - name: Studying for SAA as a working parent
              description: |-
                ## Purpose
                With a job and children, the long evening blocks most study plans assume are rare, but short fixed slots before the house wakes or after bedtime add up. A plan built around twenty-five minute sessions, labs saved for one protected weekend slot and a partner who knows the exam date makes the timeline realistic.

                ## Milestones
                1. A realistic weekly hours figure agreed with your partner or household.
                2. Short daily sessions placed at a fixed time, with study material ready on your phone.
                3. One protected weekend lab slot each week.
                4. The target exam week moved later if the hours figure needs it.

                ## Notes
                School holidays and illness will knock out whole weeks. Build two empty buffer weeks into the calendar rather than hoping they will not happen.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A household-agreed weekly hours figure, fixed short daily sessions and one weekend lab slot are in the calendar, with the exam week set to fit."
                cadence: phased
              tasks:
                - "Agree a realistic weekly study hours figure with your household"
                - "Load flashcards and question sets onto your phone for short sessions"
                - "Do a twenty-five minute SAA session at your fixed early or late slot @recurring(daily)"
                - "Add two buffer weeks to the study calendar for holidays and illness"
            - name: SAA from the Caribbean and other smaller markets
              description: |-
                ## Purpose
                Candidates in Trinidad and Tobago, Jamaica, Barbados, Guyana and the OECS islands often face fewer local test centres, power cuts and patchy internet during online exams, and exam fees and course costs charged in US dollars. Checking centre availability, testing a backup connection, planning the payment method and finding regional study groups early removes the practical obstacles.

                ## Milestones
                1. Test centres in your country or the nearest one listed with their available dates.
                2. For online testing, a backup power and internet plan, such as a UPS and a mobile hotspot, tested.
                3. A payment method that works for US dollar charges confirmed.
                4. A regional cloud community or study group joined for support.

                ## Notes
                If the power or connection fails during an online exam, follow the provider's instructions and contact their support straight away; keep their contact details on paper beside you.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A written plan names your exam format, a confirmed payment method and a tested backup power and internet arrangement or a reachable test centre."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Search for test centres in your country and note the nearest available dates"
                - "Test a mobile hotspot and backup power with the online system check"
                - "Confirm that your card or payment method accepts US dollar charges"
                - "Join a regional cloud community or AWS user group online"
            - name: SAA in a second language
              description: |-
                ## Purpose
                Long scenario questions are hard enough in your first language, and phrases like least operational overhead or most cost-effective decide the answer. Checking whether AWS offers the exam in your language or an extra-time accommodation for non-native English speakers, and building a glossary of exam English, removes avoidable lost marks.

                ## Milestones
                1. The available exam languages and any non-native speaker accommodation checked on the AWS site.
                2. The accommodation requested and approved before booking, if it applies.
                3. A glossary of qualifier phrases and service terms with translations.
                4. Timed practice done in the language you will sit the exam in.
              priority: low
              frontmatter:
                mode: research
                output_kind: artifact
                success_criteria: "The exam language is chosen, any extra-time accommodation is approved before booking and a glossary of at least forty exam phrases exists."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Check which languages the SAA exam is offered in"
                - "Check whether an extra-time accommodation for non-native speakers is available"
                - "Request the accommodation before booking if it applies to you"
                - "Build a glossary of forty exam phrases with translations"
            - name: Running an SAA study cohort for your team
              description: |-
                ## Purpose
                Team leads who want several engineers certified get better pass rates from a shared cohort than from individual vouchers, because a weekly session and shared labs keep people moving. Agreeing time, budget, a shared sandbox policy and a light weekly rhythm with the team turns certification into a team practice rather than a solo evening project.

                ## Milestones
                1. Study time and budget for vouchers and courses agreed with your manager.
                2. Cohort members, a shared course and a target exam window agreed.
                3. A sandbox account policy that keeps lab costs and access under control.
                4. A weekly cohort session running with one member presenting a design.
                5. Pass results and lessons recorded for the next cohort.
              priority: low
              frontmatter:
                mode: service
                output_kind: deliverable
                success_criteria: "A cohort with agreed time, budget and sandbox policy holds weekly sessions to its exam window and records results for the next group."
                cadence: phased
                effort_hours_estimate: "25"
              tasks:
                - "Ask your manager for study time and a voucher budget for the cohort"
                - "Agree members, a shared course and an exam window"
                - "Set a sandbox policy with budget alerts and separate accounts per member"
                - "Host the weekly cohort session with one member presenting @recurring(weekly:thu)"
            - name: Capstone three-tier design with written trade-offs
              description: |-
                ## Purpose
                A design you can show and defend is worth more in interviews than the badge alone. Designing a highly available three-tier web application from a written brief, building it, and documenting each choice against the four domains, produces a portfolio piece and a final check that the exam knowledge holds together.

                ## Milestones
                1. A written brief with traffic, availability, security and budget requirements.
                2. An architecture diagram covering network, compute, data, edge and monitoring.
                3. The design built in the sandbox and tested by stopping instances in one AZ.
                4. A trade-off write-up explaining each choice against security, resilience, performance and cost.
                5. Estimated monthly cost from the pricing calculator included.

                ## Notes
                Start from the **Portfolio piece** template. Tear the build down after recording it; keep the diagram, the write-up and infrastructure code if you used any.
              priority: medium
              deadlineOffsetDays: 150
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A portfolio page holds the brief, diagram, cost estimate and trade-off write-up for a three-tier design that was built and failure tested."
                cadence: phased
                effort_hours_estimate: "16"
              tasks:
                - "Write a one-page brief with traffic, availability, security and budget requirements"
                - "Draw the architecture and estimate its monthly cost in the pricing calculator"
                - "Build the design and stop instances in one AZ to test resilience"
                - "Write the trade-off for each choice against the four domains"
            - name: Architecture decision records at work after SAA
              description: |-
                ## Purpose
                The credential pays off when you start shaping real designs, and the habit that makes that visible is writing down decisions: the context, the options, the choice and its consequences. Writing one architecture decision record a month for a real workload builds the evidence for a promotion case and the experience the professional level expects.

                ## Milestones
                1. A short decision record format agreed with your team.
                2. A decision record written each month for a real design choice.
                3. Each record naming the Well-Architected pillar it most affects.
                4. Six records reviewed with a senior engineer for feedback.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Six architecture decision records for real workloads exist, each tied to a pillar and reviewed by a senior engineer."
                cadence: rolling
              tasks:
                - "Agree a short decision record format with your team"
                - "Write a decision record for one real design choice @recurring(monthly:15)"
                - "Tag each record with the Well-Architected pillar it most affects"
                - "Book a review of your records with a senior engineer"
---

# AWS Solutions Architect Associate

This area is for engineers who want the AWS Solutions Architect Associate credential and the design judgement behind it, whether you come from on-premises systems, software development or networking. It starts with foundations (the exam guide, a skills audit, a baseline practice score, a sandbox account that cannot run up a bill, a course choice and a dated study calendar), then the weekly study and lab machinery, the design skills behind the secure, resilient, high-performing and cost-optimised domains, the decisions about readiness and delivery mode, booking and exam day, plans for sysadmins, developers, working parents, Caribbean candidates, second-language candidates and team leads, and specialist work such as a documented capstone design and architecture decision records at work.

The rhythm is study blocks on set weekdays and a short daily flashcard set, a weekly lab build and teardown, a weekly wrong-answer review and partner whiteboard session, a monthly timed practice exam, score update, bill check and plan reset, and a quarterly look for changes to the exam guide. The Skills matrix, Purchase decision, Metrics log, Reading queue and Portfolio piece templates pair with it. Installing adds all 50 projects as active, so archive the ones that are not for you yet.
