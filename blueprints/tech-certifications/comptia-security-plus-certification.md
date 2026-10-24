---
id: tech-certifications.comptia-security-plus-certification
name: CompTIA Security+ Certification
description: "A route to CompTIA Security+: the current objectives, a readiness grid, a safe practice lab, domain study, performance-based question drills, timed mocks, booking, exam day and keeping the credential renewed."
category: personal
version: 1.0.0
tags: [tech-certifications, comptia-security-plus-certification, student, engineer, comptia, security-plus, cybersecurity, exam-prep]
author: Aurum Technology
starter_structure:
  templates:
    - skills-matrix
    - purchase-decision
    - metrics-log
    - remediation-plan
    - training-program
    - portfolio-piece
  pillars:
    - name: Tech & Engineering Certifications
      emoji: "🏅"
      description: "Technical credentials and the exams behind them: FE and PE licensing, Chartered Engineer and Trinidad and Tobago engineering registration, PMP, PRINCE2 and Scrum, AWS, Azure and Google Cloud by level, Kubernetes and Terraform, networking and security certifications, Six Sigma belts, and coding, system design and machine-learning interviews."
      pillarFrontmatter:
        review_cadence: monthly
      areas:
        - name: CompTIA Security+ Certification
          description: "Studying for CompTIA Security+: threats and vulnerabilities, security architecture, operations, incident response and governance, plus performance-based question practice."
          projects:
            - name: Security+ exam objectives and candidate rules folder
              description: |-
                ## Purpose
                CompTIA publishes the Security+ exam objectives as a numbered list of domains and sub-objectives, and each exam code is retired on a published date and replaced by a new one. Courses, books and question banks lag behind those changes. Saving the current objectives, the exam code and the candidate rules with the date you checked them gives every later study decision a single trusted source.

                ## Milestones
                1. The current exam objectives PDF saved, with the exam code and its retirement date written on the first page.
                2. The five domains and their numbered sub-objectives copied onto one page.
                3. The current question count, time allowed, passing score and price noted from the CompTIA site with today's date.
                4. The candidate agreement, retake policy and ID rules saved alongside the objectives.

                ## Notes
                Numbers quoted in videos and forum posts are often from an older exam code. Copy them from CompTIA on the day you check and check again before booking.
              priority: high
              deadlineOffsetDays: 10
              frontmatter:
                mode: research
                output_kind: artifact
                success_criteria: "One folder holds the dated objectives PDF, the exam code and retirement date, a one-page domain map and a dated note of exam format, price and retake rules."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Download the current Security+ exam objectives from the CompTIA website"
                - "Write the exam code and its retirement date on the first page"
                - "Note the question count, duration, passing score and price with today's date"
                - "Save the candidate agreement and the retake policy in the same folder"
            - name: Security+ readiness grid across the five domains
              description: |-
                ## Purpose
                Most candidates arrive strong in one corner, such as networking from a help desk job or code from a degree, and thin in another, such as governance or cryptography. Rating yourself against every sub-objective shows where the hours should go and stops you paying for a course that spends weeks on what you already know.

                ## Milestones
                1. Every sub-objective from the current objectives listed in one grid.
                2. Each line rated from zero to three, with a one-line reason for any rating of two or three.
                3. The ten weakest sub-objectives marked as first study targets.
                4. The grid dated so it can be re-rated after the first month.

                ## Notes
                Start from the **Skills matrix** template. Rate a line three only if you could explain it to someone else and answer a scenario question on it without notes.
              priority: high
              deadlineOffsetDays: 14
              frontmatter:
                mode: research
                output_kind: artifact
                success_criteria: "A dated grid rates every Security+ sub-objective from zero to three and names the ten weakest as study targets."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Copy every numbered sub-objective into a skills grid"
                - "Rate each line from zero to three with a short reason"
                - "Mark the ten lowest-rated lines as your first targets"
                - "Put a reminder in the calendar to re-rate the grid in four weeks"
            - name: Baseline Security+ practice test before studying
              description: |-
                ## Purpose
                A cold practice test in the first week feels uncomfortable and is worth more than any study plan written without one. The score by domain, and the kind of question you miss, tells you whether to start with vocabulary, concepts or scenario reading.

                ## Milestones
                1. One full practice test from a reputable question bank sat under timed conditions.
                2. The score recorded per domain, not just overall.
                3. Each wrong answer tagged as a gap in knowledge, a misread question or a guess.
                4. The baseline scores added to the readiness grid.

                ## Notes
                Do not judge yourself on this number. Its only job is to aim the first month of study.
              priority: high
              deadlineOffsetDays: 7
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A timed baseline test is complete, with scores by domain and every wrong answer tagged by cause."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Pick one free or low-cost full-length Security+ practice test"
                - "Sit it in one go with a timer and no notes"
                - "Record the score for each of the five domains"
                - "Tag every wrong answer as knowledge gap, misread or guess"
            - name: Choosing a Security+ course, book and question bank
              description: |-
                ## Purpose
                Security+ resources range from free video series to paid bootcamps costing more than the exam, and they are not all written for the current exam code. One primary course, one reference book and one question bank, all matched to the current objectives, is usually enough; more than that tends to mean watching instead of practising.

                ## Milestones
                1. A shortlist of three courses and two question banks, each checked against the current exam code.
                2. Each option scored on objective coverage, performance-based practice, explanations and price.
                3. One course, one book and one question bank chosen and recorded with the reason.
                4. A spending limit for study materials written down.

                ## Notes
                Start from the **Purchase decision** template. Check that question banks explain why wrong answers are wrong, not only which answer is right.
              priority: medium
              deadlineOffsetDays: 21
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "One course, one book and one question bank are chosen for the current exam code, with scores and a spending limit recorded."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "List three courses and two question banks that name the current exam code"
                - "Score each on coverage, simulations, explanations and price"
                - "Read recent reviews from candidates who sat the current exam"
                - "Record the chosen course, book and question bank with the reason"
            - name: Dated Security+ study calendar
              description: |-
                ## Purpose
                Without a target date, Security+ study drifts for months and the objectives you learned first fade before the exam. A calendar that counts back from a provisional exam week, giving each domain its share of weeks plus review and mock time, turns a large syllabus into a sequence you can follow.

                ## Milestones
                1. A provisional exam week chosen, typically eight to fourteen weeks out for a working candidate.
                2. Weekly hours agreed that fit work, classes and family, with study days named.
                3. Each domain given its weeks, weighted toward the weak areas in the readiness grid.
                4. The last three weeks kept for timed mocks and remediation only.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A calendar shows a provisional exam week, named study days, weeks per domain and a protected three-week review block."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Choose a provisional exam week and write it at the top of the calendar"
                - "Name the days and hours you can study each week"
                - "Allocate weeks to each domain, giving more to weak areas"
                - "Block the final three weeks for mocks and remediation"
            - name: Security+ acronym and port reference sheet
              description: |-
                ## Purpose
                The objectives end with a long acronym list, and many questions hinge on knowing that SAML, OAuth and RADIUS solve different problems, or that a protocol runs on a given port. Building your own reference sheet from the official list, with a plain-English line for each, is slower than buying one and sticks far better.

                ## Milestones
                1. Every acronym from the official list copied into one sheet.
                2. Each acronym expanded with a plain-English line on what it does.
                3. Common secure and insecure protocols paired with their default ports.
                4. The sheet converted into flashcards for the daily round.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A reference sheet covers every acronym on the official list with a plain-English line, plus a protocol and port table, and exists as flashcards."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Copy the official acronym list from the objectives into a sheet"
                - "Write one plain-English line beside each acronym"
                - "Add a table pairing insecure protocols with their secure replacements and ports"
                - "Turn the sheet into a deck in your flashcard app"
            - name: Isolated practice lab for Security+ objectives
              description: |-
                ## Purpose
                Reading about packet captures, hashing and vulnerability scans is not the same as running them, and performance-based questions reward people who have touched the tools. A small lab of virtual machines on an isolated network, with an attacker box and a deliberately vulnerable target, lets you practise safely without going near anything you do not own.

                ## Milestones
                1. A hypervisor installed with a host-only or internal network that cannot reach your home network.
                2. One Linux security distribution and one intentionally vulnerable target running.
                3. A clean snapshot of each machine taken before any exercise.
                4. A one-page lab map listing machines, addresses and the Security+ objectives each supports.

                ## Notes
                Only scan, attack or capture traffic on machines and networks you own or have written permission to test. Keep vulnerable targets off any network that touches the internet.
              priority: medium
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "An isolated lab with an attacker machine, a vulnerable target and clean snapshots runs, documented on a one-page map linked to objectives."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Install a free hypervisor and create a host-only network"
                - "Build a Linux security distribution virtual machine"
                - "Add one intentionally vulnerable target image to the isolated network"
                - "Take clean snapshots and write the one-page lab map"
            - name: Security+ voucher, discount and bundle options
              description: |-
                ## Purpose
                Paying full list price for a voucher is common and often unnecessary. Student pricing, academic partners, employer or veteran schemes, and bundles that include a retake can change the real cost a great deal, and vouchers have expiry dates that need to fit the study calendar.

                ## Milestones
                1. The current list price and any student or academic pricing noted from official sources.
                2. Bundles with a retake or training compared against buying the voucher alone.
                3. Expiry dates checked against your provisional exam week.
                4. The cheapest legitimate option recorded, with where to buy it.

                ## Notes
                Buy vouchers from CompTIA or an authorised partner only. Heavily discounted vouchers from unknown sellers are a known scam and may be revoked.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A note compares list price, discounts and bundles, checks expiry against the exam week, and names the chosen purchase route."
                cadence: one-shot
                effort_hours_estimate: "1"
              tasks:
                - "Check the current Security+ voucher price on the CompTIA store"
                - "Ask your college or employer whether they offer academic or partner vouchers"
                - "Compare a voucher with retake against a single voucher"
                - "Record the chosen option and its expiry date"
            - name: Weekly Security+ study blocks
              description: |-
                ## Purpose
                Short, fixed sessions on the same weekdays beat a long Sunday cram for a syllabus this broad. Two or three protected blocks a week, each tied to one sub-objective from the calendar, keep the plan moving even in a heavy week at work or college.

                ## Milestones
                1. Study blocks set as repeating calendar events on named days.
                2. Each block opened with the sub-objective it covers written down.
                3. A Sunday check that moves missed blocks rather than dropping them.
                4. Four consecutive weeks with every planned block either done or rescheduled.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Four consecutive weeks show every planned study block completed or rescheduled, each with its sub-objective noted."
                cadence: rolling
              tasks:
                - "Put repeating study blocks in your calendar on your chosen days"
                - "Write the sub-objective at the top of the page before each block"
                - "Study the planned sub-objective for one focused block @recurring(weekly:tue,thu)"
                - "Check the coming week and move any missed block @recurring(weekly:sun)"
            - name: Daily ten-minute flashcard round
              description: |-
                ## Purpose
                Acronyms, ports, attack names and control types are pure recall, and spaced repetition handles recall better than rereading. Ten minutes a day on the flashcard deck, with the app deciding what comes back, keeps hundreds of small facts available without eating study time.

                ## Milestones
                1. A flashcard app with spaced repetition installed and the acronym deck loaded.
                2. New cards added from each study block.
                3. A run of twenty-one days with the daily round done.
                4. Mature card retention reported by the app at a level you are happy with.

                ## Notes
                Keep cards to one fact each. A card that needs a paragraph to answer belongs in your notes, not the deck.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "The flashcard app shows twenty-one consecutive days of reviews and new cards added from each week's study."
                cadence: rolling
              tasks:
                - "Install a spaced repetition flashcard app on your phone"
                - "Load the acronym and port deck you built"
                - "Clear the day's due flashcards in one ten-minute sitting @recurring(daily)"
                - "Add three to five cards after each study block"
            - name: Wrong-answer log and Saturday review
              description: |-
                ## Purpose
                Every practice question you miss is a free diagnosis, but only if you write down why. A log that records the sub-objective, the trap and the correct reasoning shows patterns, such as confusing detective and preventive controls, that a score alone hides.

                ## Milestones
                1. A log with columns for date, question source, sub-objective, cause and correct reasoning.
                2. Every missed practice question from the week entered.
                3. A weekly note of the three most common causes.
                4. Repeated weak sub-objectives fed back into the study calendar.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "The log holds every missed practice question for at least six weeks, each with a sub-objective and cause, and a weekly top-three note."
                cadence: rolling
              tasks:
                - "Create a wrong-answer log with sub-objective and cause columns"
                - "Enter each missed question with the reasoning behind the right answer"
                - "Review the week's misses and write the top three causes @recurring(weekly:sat)"
                - "Move any sub-objective missed three times into next week's plan"
            - name: Monthly full-length timed Security+ mock
              description: |-
                ## Purpose
                Full-length mocks test stamina and time management as well as knowledge, and the trend across months matters more than any one score. Sitting one each month under exam conditions, including the simulations, and logging the result by domain shows whether the plan is working.

                ## Milestones
                1. A mock sat each month in one sitting with a timer and no notes.
                2. Scores by domain and time left at the end recorded.
                3. Simulation questions scored separately from multiple choice.
                4. A three-month trend visible in one log.

                ## Notes
                Start from the **Metrics log** template. Use a different question bank for at least one mock so you are not just remembering answers.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A log shows at least three monthly mocks with domain scores, simulation scores and time remaining."
                cadence: rolling
              tasks:
                - "Set up a mock log with columns for each domain and simulations"
                - "Sit a full-length timed mock in one sitting @recurring(monthly:12)"
                - "Record domain scores and minutes left at the end"
                - "Compare this month's scores with last month's and note the change"
            - name: Weekly performance-based question practice
              description: |-
                ## Purpose
                Performance-based questions ask you to place firewall rules, match attacks to controls, read logs or order incident steps, and many candidates lose more time on them than anywhere else. A weekly set of simulations, done against a timer, builds both the skill and the nerve to handle them on the day.

                ## Milestones
                1. A source of performance-based practice chosen from your course or question bank.
                2. At least two simulations completed each week with time taken recorded.
                3. Each simulation type in the objectives attempted at least once.
                4. Average time per simulation falling over a month.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Over a month at least eight simulations are logged with time taken, covering every simulation type you have found for the current exam."
                cadence: rolling
              tasks:
                - "List the simulation types your course covers for the current exam"
                - "Complete two timed performance-based questions @recurring(weekly:wed)"
                - "Write down the time each simulation took and where you hesitated"
                - "Redo any simulation you scored below full marks the following week"
            - name: Friday breach-to-objective digest
              description: |-
                ## Purpose
                Breach reports and vendor advisories turn abstract objectives into stories: a phishing email, a stolen session token, an unpatched edge device. Spending twenty minutes each Friday mapping one real incident to the sub-objectives it touches makes scenario questions feel familiar.

                ## Milestones
                1. Two reputable security news sources chosen.
                2. One incident a week summarised in three sentences.
                3. Each summary tagged with the attack type, the failed control and the matching sub-objective.
                4. Ten digests collected by the time of the exam.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "At least ten weekly digests exist, each tagged with an attack type, a failed control and a Security+ sub-objective."
                cadence: rolling
              tasks:
                - "Choose two reputable security news or advisory sources"
                - "Summarise one incident and tag its sub-objectives @recurring(weekly:fri)"
                - "Note which control would have stopped or limited each incident"
                - "Ask the agent to quiz you on the month's digests"
            - name: Exam objective and retirement date watch
              description: |-
                ## Purpose
                CompTIA refreshes Security+ on a multi-year cycle and announces the next exam code and the old one's retirement date in advance. A quarterly check stops you studying for an exam that will retire before your booking, or buying materials just as a new version lands.

                ## Milestones
                1. The current exam code and retirement date recorded in the objectives folder.
                2. Any announced successor exam noted with its launch date.
                3. A decision recorded on which version to sit if both are open.
                4. Materials checked against the version you will sit.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "The objectives folder carries a dated quarterly note of the current exam code, its retirement date and any successor."
                cadence: rolling
              tasks:
                - "Check CompTIA for exam code changes and retirement dates @recurring(quarterly)"
                - "Note any successor exam and its launch date in the folder"
                - "Decide which version to sit if both are open when you book"
            - name: Monthly lab patch, snapshot and isolation check
              description: |-
                ## Purpose
                Lab machines go stale, fill disks and occasionally end up bridged to the home network by accident. A monthly maintenance pass keeps the lab safe and ready, so a study evening is spent on exercises rather than fixing broken virtual machines.

                ## Milestones
                1. Attacker and defender machines updated each month.
                2. Network settings checked so vulnerable targets remain isolated.
                3. Fresh snapshots taken after updates, with old ones pruned.
                4. Host disk space kept above a set minimum.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "The lab map shows a dated monthly entry confirming updates, isolation settings and a fresh snapshot."
                cadence: rolling
              tasks:
                - "Update the lab machines and take fresh snapshots @recurring(monthly:22)"
                - "Confirm the vulnerable target has no route to your home network"
                - "Delete snapshots older than two months to free disk space"
            - name: Weekly explain-back with a study partner
              description: |-
                ## Purpose
                Explaining why a hashing algorithm is not encryption, or why least privilege belongs in a scenario answer, exposes fuzzy understanding faster than rereading. A weekly half hour with a partner, each explaining two sub-objectives aloud, catches the gaps the grid missed.

                ## Milestones
                1. A study partner or small group found through a course, college or online community.
                2. A fixed weekly slot agreed.
                3. Each person explaining two sub-objectives per session without notes.
                4. Points neither could explain added to both wrong-answer logs.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "At least six weekly explain-back sessions are held, with unexplained points logged after each."
                cadence: rolling
              tasks:
                - "Post in your course forum or college group to find a study partner"
                - "Agree a fixed weekly half-hour slot"
                - "Explain two sub-objectives aloud and swap @recurring(weekly:mon)"
                - "Log anything neither of you could explain clearly"
            - name: Security controls, zero trust and change management basics
              description: |-
                ## Purpose
                The first domain sets the vocabulary every other question uses: control categories and types, the CIA triad, authentication, authorisation and accounting, zero trust, physical controls, deception technology and why change management is a security process. Getting these definitions exact early prevents dozens of misread scenario questions later.

                ## Milestones
                1. Control categories and types explained with one workplace example each.
                2. Zero trust control plane and data plane ideas summarised in your own words.
                3. Physical security and deception controls listed with what each detects or deters.
                4. The change management steps and their security purpose written out.
                5. A domain quiz scored and misses logged.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Notes cover every sub-objective in the general security concepts domain, and a domain quiz has been scored with misses logged."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Build a table of control categories against control types with examples"
                - "Write a half-page summary of zero trust in your own words"
                - "List the change management steps and the risk each one reduces"
                - "Take a domain one quiz and log the misses"
            - name: Cryptography and PKI from hashing to certificates
              description: |-
                ## Purpose
                Cryptography questions trip up candidates who know the names but not the purposes: when to hash rather than encrypt, why salting matters, what a certificate authority vouches for, and how keys are stored and escrowed. Practising with real tools in the lab makes symmetric, asymmetric, signing and certificate chains concrete.

                ## Milestones
                1. Symmetric, asymmetric and hashing compared in one table with typical uses.
                2. A file hashed, signed and verified in the lab.
                3. A self-signed certificate created and its fields read.
                4. Certificate chains, revocation methods and key storage options explained in notes.
                5. A cryptography question set scored above your target.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Lab notes show a file hashed, signed and verified and a certificate inspected, and a cryptography question set is scored and logged."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "Make a table comparing symmetric, asymmetric and hashing uses"
                - "Hash, sign and verify a file with command-line tools in the lab"
                - "Create a self-signed certificate and read each of its fields"
                - "Draw a certificate chain from root to leaf with revocation checks"
            - name: Threat actors, vectors and social engineering
              description: |-
                ## Purpose
                Threat questions ask you to tell a nation-state actor from a hacktivist from an insider by motive and resources, and to name the vector in a short scenario. Learning the categories alongside real phishing, pretexting and supply chain examples makes those distinctions quick.

                ## Milestones
                1. Each threat actor type summarised by motive, resources and typical target.
                2. Message-based, image-based, removable media and supply chain vectors listed with one example each.
                3. Social engineering techniques matched to the human weakness they exploit.
                4. A threat scenario set answered with reasons recorded.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Notes summarise every threat actor type and vector in the objectives, and a scenario set is scored with reasoning recorded."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Write a one-line motive and resource profile for each threat actor type"
                - "Collect one real example of each attack vector in the objectives"
                - "Match each social engineering technique to the weakness it uses"
                - "Answer a threat scenario set and record why each answer is right"
            - name: Malware indicators and attack pattern recognition
              description: |-
                ## Purpose
                Malware and attack questions describe symptoms and expect you to name the cause: a host beaconing at night, a login from two countries in an hour, a web form returning database errors. Building an indicator sheet from logs and lab exercises trains the pattern recognition the exam rewards.

                ## Milestones
                1. Malware types listed with their defining behaviour and one indicator each.
                2. Network, application and password attacks matched to the log entries they leave.
                3. One injection and one brute-force attempt observed in the lab logs.
                4. An indicator question set scored and logged.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "An indicator sheet covers every malware and attack type in the objectives, with two attacks observed in lab logs and a question set scored."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "List each malware type with its behaviour and a typical indicator"
                - "Run a brute-force attempt against your lab target and read the logs"
                - "Trigger a test injection on the vulnerable web app and capture the evidence"
                - "Score an indicators question set and log the misses"
            - name: Vulnerability types and mitigation techniques
              description: |-
                ## Purpose
                This part of the exam pairs weaknesses with the fix that fits: segmentation for flat networks, patching and isolation for legacy systems, input validation for injection, least privilege for over-permissioned accounts. Learning each vulnerability with its mitigation, rather than separately, mirrors how the questions are written.

                ## Milestones
                1. Application, operating system, hardware, cloud and mobile vulnerabilities listed with examples.
                2. Each vulnerability paired with at least one mitigation from the objectives.
                3. Segmentation, isolation, allow lists and hardening explained with when to choose each.
                4. A mitigation scenario set scored and logged.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A two-column sheet pairs every vulnerability type in the objectives with a mitigation, and a scenario set is scored and logged."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Build a two-column sheet of vulnerabilities and their mitigations"
                - "Write when you would choose segmentation over isolation"
                - "Find one public advisory for a hardware or firmware flaw and summarise it"
                - "Answer a mitigation scenario set and log the misses"
            - name: Security architecture across cloud, on-premises and OT
              description: |-
                ## Purpose
                Architecture questions compare models: infrastructure as code, serverless, containers, on-premises networks, industrial control systems and embedded devices, each with its own risks. Knowing the trade-offs, and where firewalls, proxies, VPNs and network access control sit, lets you pick the design that fits the scenario.

                ## Milestones
                1. Each architecture model summarised with its main security considerations.
                2. A network diagram drawn showing zones, security devices and their placement.
                3. Secure communication options such as VPN, TLS and SD-WAN compared.
                4. An architecture question set scored and logged.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Notes summarise every architecture model in the objectives with a placement diagram, and a question set is scored and logged."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Write the main security considerations for each architecture model"
                - "Draw a network with zones, firewalls, proxies and a jump server"
                - "Compare VPN, TLS and SD-WAN options in a short table"
                - "Score an architecture question set and log the misses"
            - name: Data protection, resilience and recovery
              description: |-
                ## Purpose
                Backups and high availability are security topics on this exam, alongside data classification, data states and sovereignty. Questions ask you to choose between hot, warm and cold sites, snapshots and replication, or encryption and tokenisation, so practising those choices with a real backup and restore helps.

                ## Milestones
                1. Data types, classifications and states summarised with a protection method for each.
                2. Hot, warm and cold sites and backup types compared by cost and recovery time.
                3. A lab backup taken and restored to prove it works.
                4. A resilience and data protection question set scored.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Notes compare recovery sites and backup types, a lab restore has been tested, and a resilience question set is scored."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Summarise data states and the protection that fits each"
                - "Compare hot, warm and cold sites by cost and recovery time"
                - "Restore a lab machine from its backup to prove it works @recurring(monthly:28)"
                - "Score a resilience question set and log the misses"
            - name: Identity and access management lab
              description: |-
                ## Purpose
                Identity questions cover provisioning, single sign-on, federation, multifactor methods, privileged access and access control models. Setting up accounts, groups and permissions in the lab, then breaking and fixing them, turns terms like attribute-based access control and just-in-time permissions into things you have done.

                ## Milestones
                1. Users and groups created in a lab directory or Linux host with least privilege applied.
                2. Discretionary, mandatory, role-based and attribute-based access control explained with examples.
                3. Multifactor methods ranked by strength with their weaknesses noted.
                4. Privileged access practices such as just-in-time and password vaulting summarised.
                5. An identity question set scored and logged.
              priority: medium
              frontmatter:
                mode: building
                output_kind: knowledge
                success_criteria: "Lab notes show accounts and groups built with least privilege, access models and MFA methods are summarised, and a question set is scored."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Create three lab users and two groups with least privilege permissions"
                - "Write an example of each access control model from a real workplace"
                - "Rank multifactor methods by strength and note one weakness each"
                - "Score an identity and access question set and log the misses"
            - name: Hardening, vulnerability scanning and monitoring labs
              description: |-
                ## Purpose
                Security operations questions assume you know what a baseline, a scan report and an alert look like. Hardening a lab host against a published benchmark, scanning it before and after, and reading the logs a monitoring tool produces covers a large share of the operations domain in practice.

                ## Milestones
                1. A lab host hardened against a published configuration benchmark.
                2. A vulnerability scan run before and after hardening, with findings compared.
                3. Findings prioritised using severity scores and exposure.
                4. Logs from the host collected in one place and three alerts explained.

                ## Notes
                Scan only your own lab. Running scanners against networks you do not own can breach the law and your employer's or college's rules.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A before-and-after scan report for a hardened lab host exists with prioritised findings and three explained alerts."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "Download a published hardening benchmark for your lab operating system"
                - "Run a vulnerability scan on the lab host before any changes"
                - "Apply the benchmark settings and rescan to compare findings"
                - "Rescan the lab and note any new findings @recurring(monthly:5)"
            - name: Incident response process and forensics basics
              description: |-
                ## Purpose
                When a question asks what to do first after detecting ransomware, the answer depends on knowing the incident response phases in order and the rules of evidence. Learning preparation, detection, analysis, containment, eradication, recovery and lessons learned, with chain of custody and order of volatility, makes these questions mechanical.

                ## Milestones
                1. The incident response phases written in order with one action per phase.
                2. Order of volatility and chain of custody explained in notes.
                3. A short incident scenario worked through from detection to lessons learned.
                4. Threat hunting, root cause analysis and tabletop exercises distinguished.
                5. An incident response question set scored and logged.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Notes list the incident response phases and evidence rules, one scenario is worked end to end, and a question set is scored."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Write the incident response phases in order with one action each"
                - "List the order of volatility from most to least volatile"
                - "Work a ransomware scenario from detection to lessons learned"
                - "Score an incident response question set and log the misses"
            - name: Governance, risk, compliance and third-party risk
              description: |-
                ## Purpose
                Governance questions are where engineers lose easy marks, because the language of policies, standards, risk registers, business impact analysis and vendor agreements is unfamiliar. Reading real examples of each document and working a small risk calculation gives the domain the same footing as the technical ones.

                ## Milestones
                1. Policy, standard, procedure and guideline distinguished with an example each.
                2. A small risk register built with likelihood, impact and treatment for five risks.
                3. Single loss expectancy and annualised loss expectancy calculated for one example.
                4. Vendor agreements such as SLA, MOU, MSA and NDA summarised by purpose.
                5. A governance question set scored and logged.
              priority: medium
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "Notes cover governance documents and agreement types, a five-line risk register and one loss calculation exist, and a question set is scored."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Find a published security policy and label its policy, standard and procedure parts"
                - "Build a five-line risk register with likelihood, impact and treatment"
                - "Work one single and annualised loss expectancy calculation by hand"
                - "Score a governance question set and log the misses"
            - name: Performance-based question technique
              description: |-
                ## Purpose
                Simulations often appear early in the exam, and candidates who spend twenty minutes on the first one run short later. A written technique, covering when to flag and skip, how to read every tab before acting and how partial credit may work, protects the rest of the paper.

                ## Milestones
                1. A rule written for how long to spend on a simulation before flagging it.
                2. A checklist for reading all tabs, logs and instructions before answering.
                3. The rule tested in two timed mocks and adjusted.
                4. The final technique written on one card for exam week.

                ## Notes
                Check the current candidate guidance for how simulations are presented and whether you can return to them, rather than relying on forum memories.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A one-card simulation technique with a time rule and reading checklist has been tested in two timed mocks."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Write a time limit for simulations before flagging them"
                - "Make a short checklist for reading every tab and log first"
                - "Use the technique in your next two mocks and note what changed"
                - "Copy the final technique onto one card"
            - name: Reading best, first and most likely questions
              description: |-
                ## Purpose
                Security+ questions often have two technically correct answers and ask for the best, the first or the most cost-effective. Training yourself to underline the qualifier, eliminate the merely true options and pick the one that fits the scenario's constraint is a skill separate from knowing the content.

                ## Milestones
                1. Twenty missed questions from the log reviewed for qualifier words.
                2. A short elimination routine written for qualifier questions.
                3. A set of thirty qualifier questions answered using the routine.
                4. Misread errors in the log falling over the next three weeks.
              priority: medium
              frontmatter:
                mode: building
                output_kind: knowledge
                success_criteria: "An elimination routine is written and used on thirty qualifier questions, and misread errors in the log fall over three weeks."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Pull twenty missed questions tagged as misreads from your log"
                - "Underline the qualifier word in each and note what it changed"
                - "Write a three-step elimination routine for qualifier questions"
                - "Answer thirty qualifier questions using only the routine"
            - name: Weak-domain remediation sprint
              description: |-
                ## Purpose
                Two or three weeks before the exam, mock results usually show one or two domains well below the rest. A short, written sprint aimed only at those sub-objectives, with a target score and a retest, is a better use of the time than another full pass of the syllabus.

                ## Milestones
                1. The two weakest domains named from the last two mocks.
                2. The specific sub-objectives behind the misses listed.
                3. A ten-day plan of reading, lab work and questions for those sub-objectives.
                4. A retest showing each weak domain at or above your target.

                ## Notes
                Start from the **Remediation plan** template.
              priority: medium
              deadlineOffsetDays: 75
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A written ten-day sprint targets named sub-objectives, and a retest shows each weak domain at or above the target score."
                cadence: phased
                effort_hours_estimate: "12"
              tasks:
                - "Name the two weakest domains from your last two mocks"
                - "List the sub-objectives behind most of the misses"
                - "Write a ten-day plan of reading, labs and questions for them"
                - "Retest those domains and record the new scores"
            - name: Exam readiness decision from mock scores
              description: |-
                ## Purpose
                Deciding when to book or keep a booked date is easier with a rule written in advance than with a feeling the night before. Setting a threshold, such as three recent mocks from at least two sources above a chosen score with simulations completed in time, makes the call clear.

                ## Milestones
                1. A readiness rule written before the review weeks begin.
                2. The last three mocks compared against the rule.
                3. A go, move or wait decision recorded with the date.
                4. Any move made inside the provider's rescheduling window.

                ## Notes
                Practice bank scores vary in difficulty. A rule based on one bank alone can mislead you in either direction.
              priority: high
              deadlineOffsetDays: 80
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A written readiness rule exists and a dated go, move or wait decision has been recorded against the last three mocks."
                cadence: one-shot
                effort_hours_estimate: "1"
              tasks:
                - "Write your readiness rule with a score threshold and number of sources"
                - "Compare your last three mocks against the rule"
                - "Record a go, move or wait decision with today's date"
                - "Check the rescheduling deadline if you decide to move"
            - name: Online proctored or test centre Security+ sitting
              description: |-
                ## Purpose
                Online proctoring saves travel but needs a quiet, clear room, a reliable connection and a machine that passes the system check, and a dropped connection can end the attempt. A test centre removes those risks at the cost of travel time. Choosing deliberately, with the rules for each read, avoids exam-day surprises.

                ## Milestones
                1. The current online and test centre rules read from the exam delivery provider.
                2. The system test run on the computer you would use.
                3. The nearest test centres listed with travel time and available dates.
                4. A choice recorded with the reason.
              priority: medium
              deadlineOffsetDays: 60
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A recorded choice between online and test centre delivery, supported by a passed system test or a named centre with dates."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Read the online proctored exam rules from the delivery provider"
                - "Run the provider's system test on your exam computer"
                - "List the nearest test centres with travel time and open dates"
                - "Record your choice and the reason"
            - name: Employer sponsorship case for the Security+ exam
              description: |-
                ## Purpose
                Many employers pay for Security+ when it supports a role requirement, a client contract or a move into the security team, but only if someone asks with a clear case. A one-page request that names the business reason, the full cost and what you will do with the skill makes a yes far more likely.

                ## Milestones
                1. The business reason written in two sentences, such as a contract or role requirement.
                2. Total cost listed: voucher, materials and any retake.
                3. Study time requested, if any, and how work will be covered.
                4. The request sent to your manager and the answer recorded.
              priority: low
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "A one-page sponsorship request with reason, cost and study time has been sent to your manager and the response recorded."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Check whether your employer has a training or certification policy"
                - "Ask the agent to draft a one-page sponsorship request from your notes"
                - "Add the full cost and any study time you are asking for"
                - "Send the request to your manager and note the reply"
            - name: Choosing a next credential once Security+ is passed
              description: |-
                ## Purpose
                Passing Security+ opens several directions: analyst work, penetration testing, cloud security, or a senior credential once experience builds. Deciding the next step before motivation fades, based on the job you want rather than the most popular badge, keeps the momentum from this exam.

                ## Milestones
                1. Three target job adverts collected and their required credentials listed.
                2. Two or three candidate next credentials compared on prerequisites, cost and fit.
                3. Any experience requirement for senior credentials noted with the years still needed.
                4. One next credential chosen with a provisional start month.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A recorded choice of one next credential, supported by three job adverts and a comparison of two or three options."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Save three job adverts for the role you want next"
                - "List the credentials each advert asks for"
                - "Compare two or three next credentials on prerequisites and cost"
                - "Record the chosen credential and a provisional start month"
            - name: Booking the Security+ exam
              description: |-
                ## Purpose
                Booking a date turns the plan into a commitment, and popular slots at test centres and online can fill weeks ahead. Booking once the readiness rule is close, with the rescheduling and cancellation terms noted, gives a firm target without trapping you.

                ## Milestones
                1. A candidate account created with the delivery provider using the name on your ID.
                2. The voucher applied and an exam slot booked.
                3. The confirmation saved with the date, time, time zone and location.
                4. The rescheduling and cancellation deadlines written in your calendar.

                ## Notes
                Your account name must match your government ID exactly. Fix any mismatch before exam day, not on it.
              priority: high
              deadlineOffsetDays: 60
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "An exam slot is booked under a name matching your ID, with the confirmation saved and the rescheduling deadline in your calendar."
                cadence: one-shot
                effort_hours_estimate: "1"
              tasks:
                - "Check that your candidate account name matches your ID exactly"
                - "Apply your voucher and book the exam slot"
                - "Save the confirmation with date, time zone and location"
                - "Put the rescheduling deadline in your calendar"
            - name: Final fourteen days before the Security+ exam
              description: |-
                ## Purpose
                In the last two weeks, new material helps less than consolidation, sleep and confidence with the exam format. A written plan of two final mocks, targeted review, a light last day and practical logistics stops the panic of trying to relearn the whole syllabus.

                ## Milestones
                1. Two final mocks scheduled, the last no later than three days before the exam.
                2. Daily review limited to weak sub-objectives, the acronym deck and simulation technique.
                3. Travel, ID and room logistics confirmed.
                4. The day before kept light, with no full mock.
              priority: medium
              deadlineOffsetDays: 100
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A fourteen-day plan with two final mocks and confirmed logistics was followed, with no full mock on the day before."
                cadence: one-shot
                effort_hours_estimate: "15"
              tasks:
                - "Schedule your two final mocks in the calendar"
                - "List the weak sub-objectives you will review each day"
                - "Confirm your ID, travel route or online room set-up"
                - "Plan a light final day with only flashcards and the technique card"
            - name: Security+ exam day run sheet
              description: |-
                ## Purpose
                Exam morning is the wrong time to search for your ID, discover a software update on the exam laptop or misjudge the travel time. A one-page run sheet with timings, the items you need and your pacing plan lets you arrive calm and spend your attention on the questions.

                ## Milestones
                1. A timed plan from waking to check-in, with a buffer for travel or check-in delays.
                2. ID and confirmation laid out the night before.
                3. For online exams, the room cleared and the system test rerun that morning.
                4. A pacing plan with checkpoints for questions answered at set times.
              priority: high
              deadlineOffsetDays: 110
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A one-page run sheet with timings, items and pacing checkpoints was written and used on exam day."
                cadence: one-shot
                effort_hours_estimate: "1"
              tasks:
                - "Write a timed plan from waking up to check-in"
                - "Lay out ID and confirmation the night before"
                - "Rerun the system test on the morning of an online exam"
                - "Write pacing checkpoints for set points in the exam"
            - name: Security+ retake plan after a failed attempt
              description: |-
                ## Purpose
                Failing Security+ is common, and the score report shows which domains were weak. A calm plan within a few days, using that report to aim study and checking the retake policy and costs, turns a failed attempt into a better-prepared second one.

                ## Milestones
                1. The score report saved and the weak domains listed.
                2. The retake policy, waiting period and cost checked on the CompTIA site.
                3. A four to six week plan aimed at the weak domains.
                4. A new exam date booked once mocks meet the readiness rule.

                ## Notes
                Write down what the exam felt like within a day, while you remember which question styles surprised you. Do not record or share actual exam questions, which breaks the candidate agreement.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A retake plan based on the score report exists, with the retake policy checked and a new date booked once mocks meet the rule."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Save the score report and list the weak domains"
                - "Write what surprised you about the exam within one day"
                - "Check the current retake policy and cost"
                - "Plan four to six weeks of study aimed at the weak domains"
            - name: Certificate, badge and CV update after passing
              description: |-
                ## Purpose
                Once the result is confirmed, the credential is worth most when employers can verify it. Claiming the digital badge, recording the certification ID and expiry, and updating your CV and professional profiles takes an hour and saves awkward questions in later applications.

                ## Milestones
                1. The digital badge claimed and the verification link saved.
                2. Certification ID, pass date and expiry date recorded in one place.
                3. The CV and professional profile updated with the credential.
                4. Your manager or tutor told, if they sponsored or supported you.
              priority: low
              deadlineOffsetDays: 120
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "The badge is claimed, ID and expiry are recorded, and the CV and profile list Security+ with a verification link."
                cadence: one-shot
                effort_hours_estimate: "1"
              tasks:
                - "Claim your digital badge and save the verification link"
                - "Record the certification ID and expiry date"
                - "Add Security+ and the verification link to your CV and profile"
                - "Thank whoever sponsored or supported your study"
            - name: Security+ alongside a degree or college course
              description: |-
                ## Purpose
                Students often find that a networking or security module overlaps with parts of Security+, while coursework deadlines and exams squeeze study time. Mapping modules to objectives, using student pricing and timing the exam outside assessment weeks makes the credential fit the academic year instead of competing with it.

                ## Milestones
                1. Each relevant module mapped to the Security+ sub-objectives it covers.
                2. Coursework deadlines and exam weeks marked in the study calendar.
                3. Student or academic voucher pricing checked with your institution.
                4. An exam date chosen in a lighter part of the term or a holiday.

                ## Notes
                Ask your department whether it is a CompTIA academic partner. Some institutions offer vouchers or lab access to students.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A calendar shows module overlap, assessment weeks and an exam date outside them, with student pricing checked."
                cadence: phased
                effort_hours_estimate: "3"
              tasks:
                - "Map your current modules to Security+ sub-objectives"
                - "Mark coursework deadlines and exam weeks in the study calendar"
                - "Ask your department about academic voucher pricing"
                - "Check the week ahead against coursework deadlines @recurring(weekly:sun)"
            - name: Help desk to security analyst via Security+ study
              description: |-
                ## Purpose
                Help desk technicians already handle password resets, phishing reports and malware clean-ups, which are security work by another name. Turning that experience into examples for each domain, and asking to shadow the security team, makes both the exam and the first security interview easier.

                ## Milestones
                1. Ten real help desk tickets mapped to Security+ sub-objectives.
                2. A conversation held with the security team about shadowing or small tasks.
                3. One security-related task taken on at work and written up.
                4. A CV line reworded to show security work from the help desk.

                ## Notes
                Remove names, ticket numbers and anything confidential before using work examples outside the organisation.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Ten tickets are mapped to sub-objectives, one security task at work has been written up, and the CV shows security experience."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "List ten recent tickets with a security angle and remove identifying details"
                - "Map each ticket to a Security+ sub-objective"
                - "Ask the security team lead whether you can shadow or help with one task"
                - "Reword one CV line to show the security side of your help desk work"
            - name: Security+ plan for network and systems engineers
              description: |-
                ## Purpose
                Network and systems engineers usually find the architecture and operations domains familiar and are caught out by governance, cryptography detail and the exam's preferred terms. A plan that skims what you do daily and spends the time on the unfamiliar domains can shorten study by weeks.

                ## Milestones
                1. The readiness grid re-rated with honest scores for familiar areas.
                2. Study hours shifted toward governance, cryptography and threat vocabulary.
                3. Differences between your workplace terms and the exam's terms listed.
                4. A mock showing the weaker domains within reach of the stronger ones.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A revised plan shifts hours to weaker domains, a terms list exists, and a mock shows the gap between domains narrowing."
                cadence: phased
                effort_hours_estimate: "3"
              tasks:
                - "Re-rate the readiness grid with your day job in mind"
                - "Move study hours toward governance and cryptography"
                - "List workplace terms that differ from the exam's wording"
                - "Compare domain scores in your next mock with the baseline"
            - name: Security+ for software developers
              description: |-
                ## Purpose
                Developers bring secure coding, dependency management and API experience, but often have less exposure to networks, physical security and incident handling. Linking the application security objectives to your own code, and building the infrastructure side in the lab, uses the strength and closes the gap.

                ## Milestones
                1. Application security sub-objectives mapped to practices in your own codebase.
                2. Input validation, secure cookies, static analysis and code signing explained with your examples.
                3. Network and physical security sub-objectives given extra lab and study time.
                4. A mock showing network and operations scores near your application scores.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Application security objectives are mapped to your own work, extra time is planned for network topics, and a mock shows the domains close."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Map the application security sub-objectives to practices in your codebase"
                - "Run a static analysis tool on one of your own projects and read the report"
                - "Add extra lab sessions for network and physical security topics"
                - "Check network and operations scores in your next mock"
            - name: Security+ as a defence or government contract requirement
              description: |-
                ## Purpose
                Some government and defence roles require Security+ or an equivalent within a set period of starting, for example under the US Department of Defense 8140 qualification framework. Confirming the exact requirement, deadline and whether the certification must stay current protects the job, not just the credential.

                ## Milestones
                1. The exact requirement and deadline confirmed in writing with your employer or contracting officer.
                2. The current qualification matrix checked to confirm Security+ meets your role.
                3. The exam date set with a margin before the deadline.
                4. Renewal and continuing education duties for the role noted.

                ## Notes
                Requirements differ by role, agency and country, and the frameworks change. Confirm with your security officer rather than relying on what a colleague was told.
              priority: high
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "The role's certification requirement and deadline are confirmed in writing, and the exam is booked with a margin before it."
                cadence: phased
                effort_hours_estimate: "2"
              tasks:
                - "Ask your employer for the certification requirement and deadline in writing"
                - "Check the current qualification framework for your role"
                - "Set an exam date with at least a month's margin before the deadline"
                - "Note any requirement to keep the certification current"
            - name: Sitting Security+ from the Caribbean
              description: |-
                ## Purpose
                Candidates in Trinidad and Tobago, Jamaica, Barbados, Guyana and the smaller islands face practical hurdles: few test centres, card payments in foreign currency and power or internet cuts during an online exam. Planning around these, with a backup connection and a payment route that works, avoids losing an attempt to something other than the questions.

                ## Milestones
                1. Test centres in your country or the nearest island listed with available dates.
                2. A payment method that works for foreign currency purchases confirmed.
                3. For online exams, a backup power source and internet connection arranged.
                4. A plan B recorded for a power cut, storm or outage near exam day.

                ## Notes
                Avoid booking online exams in the peak of hurricane season if you can. Check the provider's rules on what happens if your connection drops.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A written plan names a test centre or a backed-up online set-up, a working payment route and a fallback for outages."
                cadence: phased
                effort_hours_estimate: "3"
              tasks:
                - "List test centres in your country or nearest island with open dates"
                - "Confirm a card or payment route that accepts foreign currency"
                - "Arrange backup power and a mobile data connection for an online exam"
                - "Write a plan B for a power cut or storm near exam day"
            - name: Running a Security+ study group at work
              description: |-
                ## Purpose
                A team that needs several people certified, for a contract or a security programme, does better with a shared plan than with everyone studying alone. A short study group with a weekly session, shared lab and agreed exam window raises pass rates and builds common security vocabulary in the team.

                ## Milestones
                1. Participants, a sponsor and a target exam window agreed.
                2. A weekly session plan covering each domain with one presenter per week.
                3. Shared lab access and question bank licences arranged.
                4. Progress reviewed at the halfway point and pass results recorded at the end.

                ## Notes
                Start from the **Training program** template.
              priority: medium
              frontmatter:
                mode: service
                output_kind: deliverable
                success_criteria: "A study group with a sponsor, weekly domain sessions and shared resources ran to the exam window, with pass results recorded."
                cadence: phased
                effort_hours_estimate: "20"
              tasks:
                - "Ask your manager to sponsor a Security+ study group"
                - "Agree participants and a target exam window"
                - "Assign one domain per week to a presenter"
                - "Run the weekly study group session @recurring(weekly:wed)"
            - name: Keeping Security+ current through CompTIA CE
              description: |-
                ## Purpose
                Security+ is valid for three years and lapses unless you renew through CompTIA's continuing education programme, by earning qualifying activities, passing a higher credential or completing a renewal course. Logging activities as they happen and paying any annual fee on time avoids a scramble or a lapse in the final months.

                ## Milestones
                1. The expiry date and current renewal requirements recorded from the CompTIA site.
                2. A log of qualifying activities with evidence attached.
                3. Any annual fee paid on time each year.
                4. Renewal completed and the new expiry date recorded before the deadline.

                ## Notes
                Check which activities qualify before relying on them. A higher CompTIA credential can renew Security+ automatically, which may suit you if one is already planned.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A renewal log holds dated activities with evidence, annual fees are paid, and renewal is completed before the expiry date."
                cadence: rolling
              tasks:
                - "Record your expiry date and the current renewal rules"
                - "Log any qualifying training or work with evidence @recurring(quarterly)"
                - "Pay the continuing education fee if one is due @recurring(yearly)"
                - "Check whether a planned higher credential would renew Security+"
            - name: Security lab portfolio from Security+ practice
              description: |-
                ## Purpose
                Hiring managers for junior security roles look for evidence that a candidate can do the work, and a certificate alone rarely shows that. Writing up three to five lab exercises, such as a hardening before-and-after or a log analysis, turns study time into a portfolio you can share in applications.

                ## Milestones
                1. Three to five lab exercises chosen that show different skills.
                2. Each written up with goal, steps, findings and what you would do differently.
                3. Screenshots checked so they show nothing sensitive.
                4. The portfolio published and linked from your CV.

                ## Notes
                Start from the **Portfolio piece** template. Write up only work on your own lab, never anything from an employer's systems.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "At least three lab write-ups with goal, steps and findings are published and linked from your CV."
                cadence: phased
                effort_hours_estimate: "12"
              tasks:
                - "Choose three lab exercises that show different security skills"
                - "Write up the first with goal, steps, findings and lessons"
                - "Check every screenshot for addresses, names or keys before publishing"
                - "Add one new lab write-up to the portfolio @recurring(monthly:18)"
            - name: Tabletop incident exercise built from Security+ material
              description: |-
                ## Purpose
                Tabletop exercises appear in the objectives and are a practical way to apply incident response knowledge for a small team, a club or a student society. Designing one scenario, running it for an hour and writing up the lessons shows you can turn exam knowledge into something an organisation uses.

                ## Milestones
                1. A realistic scenario written, such as ransomware on a shared drive or a phishing compromise.
                2. Roles, injects and timings set for a one-hour session.
                3. The exercise run with at least three participants.
                4. A short after-action report written with three improvements.
              priority: low
              frontmatter:
                mode: service
                output_kind: deliverable
                success_criteria: "A one-hour tabletop exercise has been run with at least three participants and an after-action report lists three improvements."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Write a one-page incident scenario for a small organisation"
                - "Prepare roles and five timed injects for the session"
                - "Run the tabletop for one hour with at least three people"
                - "Write an after-action report with three improvements"
---

# CompTIA Security+ Certification

This area is for students and engineers working toward CompTIA Security+, the broad entry security exam that mixes multiple-choice questions with hands-on performance-based tasks. It starts with foundations (the current objectives, a readiness grid, a baseline test, resources, a dated plan and an isolated practice lab), then the weekly study, flashcard, simulation and mock machinery, the knowledge behind each exam domain from controls and cryptography to incident response and governance, the decisions about readiness and how to sit the exam, booking and exam day, plans for students, help desk technicians, engineers, developers, defence contractors, Caribbean candidates and study groups, and specialist work such as renewal, a security portfolio and a tabletop exercise.

The rhythm is study blocks on set weekdays, a short daily flashcard round, a weekly wrong-answer review, weekly simulation practice, a Friday news digest and a partner explain-back, a monthly timed mock, lab patch and restore test, and a quarterly check for objective changes. The Skills matrix, Purchase decision, Metrics log, Remediation plan, Training program and Portfolio piece templates pair with it. Installing adds all 50 projects as active, so archive the ones that are not for you yet.
