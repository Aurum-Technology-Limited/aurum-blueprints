---
id: tech-certifications.ccnp-enterprise-certification
name: CCNP Enterprise Certification
description: "A route from CCNA to CCNP Enterprise: the core exam and a chosen concentration, a virtual lab, advanced routing, switching, wireless, assurance, security and automation, timed practice, booking and recertification."
category: personal
version: 1.0.0
tags: [tech-certifications, ccnp-enterprise-certification, engineer, cisco, ccnp, encor, networking, routing]
author: Aurum Technology
starter_structure:
  templates:
    - skills-matrix
    - purchase-decision
    - metrics-log
    - remediation-plan
  pillars:
    - name: Tech & Engineering Certifications
      emoji: "🏅"
      description: "Technical credentials and the exams behind them: FE and PE licensing, Chartered Engineer and Trinidad and Tobago engineering registration, PMP, PRINCE2 and Scrum, AWS, Azure and Google Cloud by level, Kubernetes and Terraform, networking and security certifications, Six Sigma belts, and coding, system design and machine-learning interviews."
      pillarFrontmatter:
        review_cadence: monthly
      areas:
        - name: CCNP Enterprise Certification
          description: "Moving from CCNA to CCNP Enterprise: the core exam and a concentration exam, advanced routing, wireless and automation, and a lab of real or virtual kit."
          projects:
            - name: CCNP Enterprise blueprints and exam policies folder
              description: |-
                ## Purpose
                Cisco publishes an exam topics blueprint for the core exam and for each concentration exam, and it revises them, sometimes renaming or retiring a concentration altogether. Saving the current blueprints, the certification requirements and the exam policies with the date you checked them means every course, book and lab is judged against the source rather than a forum thread written for an older version.

                ## Milestones
                1. The current core exam blueprint saved with its version number and the date downloaded.
                2. The current list of concentration exams saved, with each one's blueprint.
                3. The certification requirements page saved, showing that CCNP Enterprise needs the core exam plus one concentration.
                4. Current fees, durations, languages, retake waiting periods and validity noted from the official pages with today's date.

                ## Notes
                Fees, durations, question counts and passing scores quoted by course providers are often out of date, and Cisco does not publish a fixed pass mark. Take every figure from the official pages on the day you check, and check again before you book.
              priority: high
              deadlineOffsetDays: 10
              frontmatter:
                mode: research
                output_kind: artifact
                success_criteria: "One folder holds the dated core and concentration blueprints, the certification requirements page and a dated note of fees, retake rules and validity."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Download the current ENCOR exam topics blueprint from the Cisco certification site"
                - "Save the blueprint for every concentration exam currently listed for CCNP Enterprise"
                - "Read the exam policies page and note retake waiting periods and ID rules"
                - "Write down the current fee, duration and validity period with today's date"
            - name: Choosing your CCNP Enterprise concentration exam
              description: |-
                ## Purpose
                The concentration decides what your CCNP says about you: advanced routing and troubleshooting suits most campus and WAN engineers, while design, wireless, SD-WAN or automation suit narrower roles. Choosing on the basis of the work you do now and the job you want next, rather than whichever exam a friend found easiest, makes the second half of the certification feed straight into your career.

                ## Milestones
                1. Every current concentration exam listed with a one-line summary of its blueprint.
                2. Each option scored against your current job, the next role you want and the kit you can lab.
                3. One concentration chosen and the reason written in two sentences.
                4. A rough order decided: core first, concentration first or both studied together.

                ## Notes
                Many candidates take the routing and troubleshooting concentration straight after the core because the two blueprints overlap heavily. Wireless concentrations need access to real access points and a controller, so check what you can lab before choosing one.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A written decision names one concentration exam, its blueprint version, the reasons for choosing it and the order in which the two exams will be taken."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "List each concentration exam with a one-line summary of its blueprint"
                - "Score each one against your current job, target role and available lab kit"
                - "Ask your manager or a senior engineer which concentration your team values most"
                - "Write the chosen concentration and your reasons at the top of the study plan"
            - name: CCNA to ENCOR gap audit
              description: |-
                ## Purpose
                ENCOR assumes everything in CCNA and then goes wider and deeper: BGP, multicast, QoS, SD-Access, SD-WAN, wireless architecture and automation all appear. Rating yourself against every blueprint line, with one quick lab or recall check for each, shows where the hours should go and stops you spending weeks on OSPF basics you already know while BGP path selection stays a mystery.

                ## Milestones
                1. Every ENCOR blueprint line copied into one grid, grouped by domain.
                2. Each line rated from zero to three after a short check, not a guess.
                3. The eight weakest lines marked as the first study targets.
                4. Topics you have never configured on a live device flagged separately from topics you only find hard.

                ## Notes
                Start from the **Skills matrix** template. Rate a topic three only if you could configure and verify it from memory and explain why it behaves that way.
              priority: high
              deadlineOffsetDays: 14
              frontmatter:
                mode: research
                output_kind: artifact
                success_criteria: "A skills grid covers every ENCOR blueprint line with a tested rating from zero to three and the eight weakest lines named as priorities."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Copy every ENCOR blueprint line into a skills grid grouped by domain"
                - "Rate each line after a short recall or lab check"
                - "Flag the topics you have never configured on any device"
                - "Mark the eight lowest-rated lines as your first study targets"
            - name: Baseline ENCOR practice score and lab timing
              description: |-
                ## Purpose
                Before studying, sit one full practice exam from a reputable provider under exam conditions and time yourself on three small lab tasks. The score and the timings give a starting point every later mock is compared against, and they tell you whether your problem is breadth of knowledge, speed at the command line or reading long scenario questions.

                ## Milestones
                1. One full practice exam completed in a single sitting with no notes.
                2. The score recorded overall and by blueprint domain.
                3. Three lab tasks timed: a multi-area OSPF build, an eBGP peering and a trunk with EtherChannel.
                4. A short note on which domain cost the most marks and which task took the longest.

                ## Notes
                Practice exam scores from different providers are not comparable, so use one provider for the baseline and the later monthly mocks. Avoid question dumps: they breach the exam agreement and can cost you the certification.
              priority: high
              deadlineOffsetDays: 14
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A baseline practice score by domain and three timed lab tasks are recorded in the metrics log before structured study begins."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Choose one reputable practice exam provider and buy access"
                - "Sit one full practice exam in a single quiet sitting"
                - "Time yourself on three small lab builds and record the minutes"
                - "Write down the weakest domain and the slowest task"
            - name: Virtual lab platform choice, CML, EVE-NG or GNS3
              description: |-
                ## Purpose
                CCNP study needs routers and switches you can break without consequences, and the platform you choose decides which images you can run, how many nodes your laptop or server can hold and what it costs each year. Comparing the options against the ENCOR and concentration topics you must lab, and buying or installing one, removes the most common reason study stalls at the theory stage.

                ## Milestones
                1. Two or three platforms compared on cost, legal image access, node capacity and ease of use.
                2. Your hardware checked against each platform's memory and CPU needs.
                3. One platform installed and a two-router test topology running.
                4. The licence, renewal date and image versions written in your lab notes.

                ## Notes
                Start from the **Purchase decision** template. Use only images you are licensed to run: a paid Cisco Modeling Labs personal licence includes them, while open platforms need images you obtain legitimately.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "One lab platform is installed with legally licensed images and a working two-router topology, and its cost and renewal date are recorded."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Check how much memory and CPU your laptop or home server can spare"
                - "Compare two or three lab platforms on cost, image licensing and node limits"
                - "Install the chosen platform and boot two routers with a link between them"
                - "Record the licence terms, renewal date and image versions in your lab notes"
            - name: Core ENCOR lab topology build
              description: |-
                ## Purpose
                A single reusable topology that covers the whole core blueprint saves hours of rebuilding: a campus with access and distribution switches, two WAN edges, an internet edge running BGP to two simulated providers, and a management host for automation. Built once with saved base configurations, it becomes the place where every later skill project is practised.

                ## Milestones
                1. A diagram drawn showing every device, link, VLAN and addressing block.
                2. Base configurations applied: hostnames, management addressing, SSH and logging.
                3. The topology saved with a clean starting point you can reset to in minutes.
                4. A Linux or automation host added with reachability to every device.

                ## Notes
                Keep addressing simple and documented, for example one /24 per site and a loopback scheme by device number. Fancy addressing makes later troubleshooting labs slower without teaching anything new.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A saved lab topology with a diagram, documented addressing, base configurations and an automation host can be reset to a clean state in under ten minutes."
                cadence: one-shot
                effort_hours_estimate: "10"
              tasks:
                - "Sketch the campus, WAN, internet edge and management host on one diagram"
                - "Write an addressing plan with a loopback scheme by device number"
                - "Apply base configurations and confirm SSH to every device"
                - "Save a clean snapshot you can reset the whole lab to"
            - name: Dated study plan to the core exam
              description: |-
                ## Purpose
                Candidates who study without a date tend to drift for a year, while a plan that counts back from a target exam week keeps each domain to its share of the time. Setting a realistic target, often three to six months for the core exam alongside a full-time job, and placing every domain and mock in the calendar turns the gap audit into a sequence of weeks.

                ## Milestones
                1. A target exam month chosen from your weekly hours and the gap audit.
                2. Every ENCOR domain given a block of weeks in proportion to its gap.
                3. Monthly timed mocks and a final two weeks of revision placed in the calendar.
                4. Planned concentration study start date added after the core exam.

                ## Notes
                Plan for fewer hours than you hope to have. Six reliable hours a week beat twelve that collapse after a bad month at work.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A written plan shows a target exam month, a week-by-week domain schedule, dated mocks and a final revision fortnight."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Count the study hours you can reliably give each week"
                - "Choose a target exam month based on those hours and the gap audit"
                - "Place each blueprint domain into the calendar as a block of weeks"
                - "Ask the agent to turn the plan into a one-page week-by-week schedule"
            - name: Study budget and employer sponsorship request
              description: |-
                ## Purpose
                Two exam fees, a lab licence, books, a practice exam subscription and perhaps a course add up to a meaningful sum, especially for candidates paying in a currency weaker than the US dollar. Costing it properly and asking your employer to fund some or all of it, with a short case tied to the network you run, often turns a personal expense into a training budget line.

                ## Milestones
                1. Every expected cost listed: two exams, lab platform, books, practice tests and any retake allowance.
                2. Your employer's training and certification policy read, including any repayment clause.
                3. A one-page sponsorship request written linking the certification to current network work.
                4. The answer recorded and the remaining personal budget set aside.

                ## Notes
                Read any repayment clause before signing: some employers ask for training costs back if you leave within a set period.
              priority: medium
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A costed budget exists, a sponsorship request has been submitted and the employer's answer and any repayment terms are recorded."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "List every expected cost in your own currency, including one retake"
                - "Read your employer's training policy and any repayment clause"
                - "Write a one-page request tying the certification to network work you do now"
                - "Record the answer and set aside the personal share of the budget"
            - name: Reading list and lab notes system
              description: |-
                ## Purpose
                Official certification guides, configuration guides, RFCs and your own lab output quickly become a scattered mess across bookmarks and screenshots. One notes structure organised by blueprint domain, with a page per protocol holding your own configuration snippets and verification output, becomes the revision source you trust in the final weeks.

                ## Milestones
                1. One primary book or course chosen for the core exam and one for the concentration.
                2. A notes folder created with a page for each blueprint domain.
                3. A template for each protocol page: purpose, minimal configuration, verification commands and failure symptoms.
                4. The first three protocol pages filled from your own lab output.

                ## Notes
                Write configuration snippets from your lab, not copied from a book. Typing them yourself is half the learning.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A notes folder organised by blueprint domain holds a protocol page template and at least three pages filled with your own lab configurations and verification output."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Choose one primary study guide for the core exam"
                - "Create a notes folder with one page per blueprint domain"
                - "Write a protocol page template with configuration, verification and failure sections"
                - "Fill the first three protocol pages from your own lab output"
            - name: Weekly CCNP study blocks
              description: |-
                ## Purpose
                Most working engineers pass CCNP on fixed, protected sessions rather than bursts of enthusiasm. Two weekday evenings for reading and short labs, plus one longer weekend lab, keeps momentum even through busy change windows and on-call weeks.

                ## Milestones
                1. Two weekday study blocks and one weekend lab block fixed in the calendar.
                2. Each block tied to the current domain in the study plan.
                3. Four consecutive weeks completed with at least two of three blocks kept.
                4. A rule agreed for moving, not dropping, a block lost to an outage or change window.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "At least two of the three weekly study blocks are kept in eight of any ten consecutive weeks, as recorded in the study log."
                cadence: rolling
              tasks:
                - "Put two weekday study blocks and one weekend lab block in the calendar"
                - "Work through the current domain's reading and short labs @recurring(weekly:mon,wed)"
                - "Run a two to three hour lab on the current domain @recurring(weekly:sat)"
                - "Move any block lost to an outage to another day the same week"
            - name: Daily verification command drill
              description: |-
                ## Purpose
                Exam questions and lab simulations reward knowing exactly which show command proves a point: the OSPF neighbour state, the BGP table versus the routing table, the spanning tree role of a port. Ten minutes a day recalling and running verification commands builds the reflex that saves minutes on every simulation and every real outage.

                ## Milestones
                1. A list of the forty most useful verification commands written, grouped by protocol.
                2. Each command paired with the one fact it proves and what a bad result looks like.
                3. Thirty days of the ten-minute drill logged.
                4. The ten commands you still hesitate on moved to the top of the list.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A grouped list of at least forty verification commands exists and thirty daily drill sessions are logged within any six-week period."
                cadence: rolling
              tasks:
                - "Write the forty verification commands you use most, grouped by protocol"
                - "Add the one fact each command proves and what a bad result looks like"
                - "Run ten minutes of verification commands on the lab from memory @recurring(daily)"
                - "Move the commands you hesitate on to the top of the list"
                - "Keep a small flashcard deck for BGP path selection and OSPF LSA types"
            - name: Weekly lab rebuild from a blank configuration
              description: |-
                ## Purpose
                Building a topology once teaches far less than rebuilding it from memory, because the second and third time expose every step you were copying. Resetting part of the lab each week and rebuilding it without notes, against a timer, turns configuration into something your hands know.

                ## Milestones
                1. A rebuild list chosen, such as multi-area OSPF, eBGP to two providers, HSRP and an EtherChannel trunk.
                2. One section rebuilt from a blank configuration each week without notes.
                3. Rebuild times recorded so the trend is visible.
                4. Every section rebuilt at least twice before the core exam.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Each section on the rebuild list has been rebuilt from blank at least twice, with times recorded, before the core exam date."
                cadence: rolling
              tasks:
                - "Write a rebuild list of five lab sections that cover the core blueprint"
                - "Reset one section and rebuild it from memory against a timer @recurring(weekly:sun)"
                - "Record the rebuild time and any step you had to look up"
                - "Compare this week's time with the last attempt at the same section"
            - name: Wrong-answer and lab mistake log
              description: |-
                ## Purpose
                The same few misunderstandings cause most lost marks: administrative distance during redistribution, which BGP attribute wins first, or why a trunk silently drops a VLAN. Logging every wrong practice answer and lab mistake with the real reason, then reviewing the log each week, stops you making the same error three times.

                ## Milestones
                1. A log set up with columns for topic, what you thought, what is true and the source.
                2. Every wrong practice answer and lab mistake entered within a day.
                3. A weekly review that groups mistakes by topic.
                4. The three most repeated topics added to the next week's study block.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "The mistake log is updated after every practice session and reviewed weekly, with the top three repeated topics fed into the following week's plan."
                cadence: rolling
              tasks:
                - "Set up a mistake log with topic, belief, correct answer and source columns"
                - "Enter every wrong answer and lab error within a day of making it"
                - "Group the week's mistakes by topic and pick the top three @recurring(weekly:fri)"
                - "Add the top three topics to next week's study blocks"
            - name: Monthly timed ENCOR practice exam
              description: |-
                ## Purpose
                A full timed mock once a month shows whether the study is working and trains you for reading long questions without the option of going back. Recording the score by domain in the same log as the baseline turns vague confidence into a trend line you can make a booking decision from.

                ## Milestones
                1. A fixed day each month set aside for a full timed mock.
                2. Each score recorded by domain beside the baseline.
                3. Every wrong answer moved into the mistake log the same week.
                4. Three consecutive mocks at or above your readiness threshold before booking.

                ## Notes
                Start from the **Metrics log** template. Sit mocks in one go without skipping back, since Cisco exams have generally not let candidates return to earlier questions; confirm the current rule in the exam policies.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A full timed mock is sat each month and every score is recorded by domain in the metrics log alongside the baseline."
                cadence: rolling
              tasks:
                - "Choose a fixed weekend day each month for the full mock"
                - "Sit a full timed ENCOR practice exam without going back to earlier questions @recurring(monthly:12)"
                - "Record the score by domain beside the baseline"
                - "Move every wrong answer into the mistake log"
            - name: Weekly study partner session
              description: |-
                ## Purpose
                Explaining route redistribution or SD-Access fabric roles out loud to another engineer quickly shows whether you understand it or have only memorised it. A fixed weekly session with one partner or a small group, alternating teaching and troubleshooting each other's broken labs, adds pressure and catches gaps that solo study misses.

                ## Milestones
                1. One study partner or group found, ideally sitting the same exam within a few months.
                2. A fixed weekly slot agreed with a simple format.
                3. Each session includes one topic taught aloud and one broken lab fixed by the other person.
                4. Eight sessions held, with the topics covered listed.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Eight weekly partner sessions have been held, each with one taught topic and one swapped troubleshooting lab recorded."
                cadence: rolling
              tasks:
                - "Ask in a networking community or at work for a CCNP study partner"
                - "Agree a fixed weekly slot and a teach-then-troubleshoot format"
                - "Teach one topic and fix one of your partner's broken labs @recurring(weekly:thu)"
                - "List the topics covered after each session"
            - name: Lab licence and cloud cost check
              description: |-
                ## Purpose
                Lab costs creep: a cloud server left running over a holiday, a practice exam subscription that renews automatically, a lab licence nobody remembered. A short monthly check of every lab and study subscription keeps the certification within the budget you set and catches charges before they become a surprise.

                ## Milestones
                1. Every lab and study subscription listed with its cost and renewal date.
                2. Billing alerts set on any cloud account used for lab servers.
                3. A monthly check completed for three months in a row.
                4. Subscriptions you no longer use cancelled.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A list of every lab and study subscription with costs and renewal dates is checked monthly and unused ones are cancelled."
                cadence: rolling
              tasks:
                - "List every lab platform, cloud server and study subscription with its renewal date"
                - "Set a billing alert on any cloud account you use for lab servers"
                - "Check lab and study charges against the budget @recurring(monthly:3)"
                - "Cancel any subscription you have not used in the last month"
            - name: Quarterly blueprint and release notes check
              description: |-
                ## Purpose
                Cisco announces exam revisions in advance, and a change to the blueprint or a renamed concentration can land partway through your preparation. Checking the official pages each quarter, and the release notes of the software versions your lab runs, means you hear about a change from Cisco rather than in the exam room.

                ## Milestones
                1. The dates of the current blueprint versions recorded in your folder.
                2. A quarterly check of the core and concentration exam pages completed.
                3. Any announced revision noted with its effective date and the topics added or removed.
                4. The study plan adjusted if a revision falls before your exam date.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "The exam pages are checked every quarter and any announced revision is recorded with its effective date and the effect on the study plan."
                cadence: rolling
              tasks:
                - "Note the version and date of each blueprint you are studying"
                - "Check the core and concentration exam pages for announced revisions @recurring(quarterly)"
                - "Record any change with its effective date and topics affected"
                - "Adjust the study plan if a revision lands before your exam"
            - name: OSPF multi-area design and troubleshooting
              description: |-
                ## Purpose
                OSPF at CCNP level goes well past single-area adjacencies: area types, LSA types, summarisation, filtering, path preference and the neighbour problems that stop adjacencies forming. Building a four-area design in the lab and breaking it on purpose makes the LSA database something you can read rather than recite.

                ## Milestones
                1. A multi-area OSPF topology built with a stub, a totally stubby and an NSSA area.
                2. Inter-area summarisation and route filtering configured and verified.
                3. The LSA database read for each area and each LSA type explained in your notes.
                4. Five adjacency faults, such as mismatched timers, MTU and area type, introduced and fixed.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A working four-area OSPF lab with summarisation and filtering exists, and notes explain each LSA type and the fix for five adjacency faults."
                cadence: phased
                effort_hours_estimate: "12"
              tasks:
                - "Build a four-area OSPF topology including stub and NSSA areas"
                - "Configure inter-area summarisation and check the result in the routing table"
                - "Read the LSA database in each area and note what each LSA type carries"
                - "Break five adjacencies on purpose and record the symptom and fix for each"
            - name: EIGRP named mode, metrics and stub routing
              description: |-
                ## Purpose
                EIGRP still runs in many enterprise networks and appears in the blueprints, often through named mode configuration, feasibility conditions and stub routers at branch sites. Working through the DUAL logic by hand on a small topology, then confirming it in the lab, is what makes feasible successor questions straightforward.

                ## Milestones
                1. A small EIGRP topology built in named mode with wide metrics.
                2. Successors and feasible successors worked out on paper, then confirmed in the topology table.
                3. Stub routing configured at a branch and its effect on queries verified.
                4. Unequal-cost load balancing tested and explained in your notes.
              priority: low
              frontmatter:
                mode: building
                output_kind: knowledge
                success_criteria: "A named-mode EIGRP lab exists with stub routing and unequal-cost load balancing verified, and paper calculations of feasible successors match the topology table."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Build a five-router EIGRP topology using named mode"
                - "Work out successors and feasible successors on paper for one prefix"
                - "Confirm your answer against the EIGRP topology table"
                - "Configure a stub branch and test unequal-cost load balancing"
            - name: BGP path selection and attributes lab
              description: |-
                ## Purpose
                BGP is where many CCNA-level engineers lose the most marks, because path selection has a fixed order and every attribute behaves differently across iBGP and eBGP. Building a dual-homed internet edge and steering traffic with weight, local preference, AS path prepending and MED, one at a time, shows exactly what each attribute changes.

                ## Milestones
                1. An internet edge built with two eBGP providers and an iBGP pair inside.
                2. Outbound traffic steered with weight and local preference, and the change verified.
                3. Inbound traffic influenced with AS path prepending and MED, and the effect explained.
                4. The path selection order written from memory and checked against the official documentation.

                ## Notes
                Change one attribute at a time and clear the session softly between tests. Changing two at once hides which one made the difference.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A dual-homed BGP lab demonstrates the effect of weight, local preference, AS path prepending and MED, and the path selection order can be written from memory."
                cadence: phased
                effort_hours_estimate: "14"
              tasks:
                - "Build an edge with two eBGP providers and an internal iBGP pair"
                - "Steer outbound traffic with local preference and verify the best path"
                - "Prepend the AS path toward one provider and check the inbound effect"
                - "Write the BGP path selection order from memory and correct it against the documentation"
            - name: Route redistribution and route maps without loops
              description: |-
                ## Purpose
                Redistribution between OSPF, EIGRP and BGP is a staple of the routing concentration and a common cause of real outages, because two-way redistribution at two points can create loops and suboptimal paths. Building the classic two-point design, watching it misbehave, then fixing it with tags, route maps and distance, teaches a skill you will use in production.

                ## Milestones
                1. Two-way redistribution configured between OSPF and EIGRP at two routers.
                2. A routing loop or suboptimal path reproduced and captured.
                3. Route tags and route maps applied to stop the loop, with the fix verified.
                4. Prefix lists, distribute lists and administrative distance changes compared in your notes.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A two-point redistribution lab shows a reproduced loop and its fix with tags and route maps, and notes compare three filtering methods."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "Configure two-way OSPF and EIGRP redistribution at two routers"
                - "Trace a route that loops or takes the long path and save the output"
                - "Fix the loop with route tags and route maps, then verify"
                - "Note when you would use a prefix list, distribute list or distance change"
            - name: Spanning tree, MST and EtherChannel at campus scale
              description: |-
                ## Purpose
                Campus switching at CCNP level means Rapid PVST and MST, root bridge placement, port protection features and EtherChannel negotiation, and the faults that come from getting any of them wrong. Building a two-tier campus and deliberately causing a root bridge takeover or an EtherChannel mismatch teaches what the symptoms look like before you meet them on a live network.

                ## Milestones
                1. A two-tier campus built with access and distribution switches and several VLANs.
                2. Root bridges placed deliberately and MST regions configured and verified.
                3. BPDU guard, root guard and loop guard applied where each belongs.
                4. EtherChannel built with LACP and a mismatch fault introduced and fixed.

                ## Notes
                Some virtual switch images do not support every Layer 2 feature. Check the release notes for your image, and see the real kit project if a feature will not work.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A campus lab shows deliberate root placement, an MST region, guard features and an LACP EtherChannel, with one introduced fault and its fix recorded."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "Build a two-tier campus with four VLANs across access and distribution switches"
                - "Place the root bridge for each VLAN and confirm with show commands"
                - "Apply BPDU guard and root guard and test what triggers each"
                - "Build an LACP EtherChannel, break it with a mismatch and fix it"
            - name: First hop redundancy and default gateway design
              description: |-
                ## Purpose
                HSRP, VRRP and GLBP all keep a default gateway alive when a distribution switch fails, but they differ in standards, load sharing and how they track uplinks. Configuring each one with interface or object tracking, then pulling a link to watch failover, gives you both the exam detail and the judgement to choose one for a real design.

                ## Milestones
                1. HSRP version 2 configured with priority, preemption and object tracking.
                2. VRRP configured on the same pair and the differences noted.
                3. GLBP load sharing tested and its use cases written down.
                4. Failover times measured when an uplink is shut.
              priority: low
              frontmatter:
                mode: building
                output_kind: knowledge
                success_criteria: "A lab shows HSRP, VRRP and GLBP each failing over on tracked uplink loss, with measured failover times and a written comparison."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Configure HSRP with priority, preemption and uplink tracking"
                - "Shut the tracked uplink and time the gateway failover"
                - "Replace HSRP with VRRP and note what changes"
                - "Test GLBP load sharing and write when you would choose each protocol"
            - name: VRF-lite, GRE and IPsec tunnel labs
              description: |-
                ## Purpose
                Separating traffic with VRFs and carrying it across a network with GRE and IPsec make up the virtualisation domain, and it is where many candidates rely on memorised syntax. Building a VRF-lite design for two tenants and then joining two sites with GRE over IPsec, verified with routing running across the tunnel, ties the concepts together.

                ## Milestones
                1. Two VRFs configured on shared routers with overlapping addressing.
                2. Route leaking between VRFs configured for one shared service and verified.
                3. A GRE tunnel built between two sites with a routing protocol running over it.
                4. The tunnel protected with IPsec and encryption confirmed in the security association counters.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A lab shows two VRFs with overlapping addresses, a working leak for one service and a GRE over IPsec tunnel carrying routing between two sites."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "Configure two VRFs with overlapping address space on shared routers"
                - "Leak one shared service route between the VRFs and test reachability"
                - "Build a GRE tunnel between two sites and run OSPF across it"
                - "Add IPsec protection and confirm packets are encrypted"
            - name: Enterprise wireless architecture for ENCOR
              description: |-
                ## Purpose
                Wireless makes up part of the core blueprint even for engineers who never touch an access point: RF principles, antenna types, AP modes, controller deployment models, roaming and wireless security. Many routing-focused candidates leave it to the end and lose marks, so working through it early with a virtual controller and a few real access points if you can get them pays off.

                ## Milestones
                1. RF terms written in your own words: signal strength, SNR, channel width, interference and dBm.
                2. Controller deployment models and AP modes compared in one table.
                3. Layer 2 and Layer 3 roaming explained with a diagram.
                4. A virtual wireless controller deployed and a WLAN with WPA2 or WPA3 enterprise security configured.

                ## Notes
                A virtual controller can be labbed, but client and RF behaviour needs real access points. Borrow one from work or a colleague if you can.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Notes cover RF terms, AP modes, deployment models and roaming, and a virtual controller with an enterprise-secured WLAN has been configured."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "Write one-line definitions of the RF terms in the wireless blueprint lines"
                - "Compare controller deployment models and AP modes in a single table"
                - "Deploy a virtual wireless controller in the lab"
                - "Configure a WLAN with enterprise security and note each setting's purpose"
            - name: SD-WAN and SD-Access architecture concepts
              description: |-
                ## Purpose
                Controller roles, overlay and underlay, fabric node roles and policy that follows the user are all part of how the architecture domain covers Cisco SD-WAN and SD-Access. Few candidates can lab them fully at home, so this project uses official sandboxes, design guides and labelled diagrams to build an explanation you could give to a manager.

                ## Milestones
                1. The SD-WAN components and their roles drawn on one diagram.
                2. SD-Access fabric roles, such as control plane, border and edge nodes, drawn and explained.
                3. Underlay and overlay compared for both technologies in a short table.
                4. One free vendor sandbox or demo explored and screenshots added to your notes.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Labelled diagrams of SD-WAN and SD-Access with a written underlay versus overlay comparison are in your notes, plus evidence of one sandbox session."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Draw the SD-WAN components and label each one's role"
                - "Draw an SD-Access fabric with control plane, border and edge nodes"
                - "Book a free session in a vendor sandbox and explore the controller"
                - "Explain both architectures aloud in five minutes and note what you stumbled on"
            - name: Network assurance tools and evidence gathering
              description: |-
                ## Purpose
                Proving what the network is doing is the point of the assurance domain: syslog, SNMP, NetFlow, SPAN and RSPAN, IP SLA, debugs and conditional debugs, and the controller dashboards that sit on top. Setting each one up in the lab with a collector receiving real data makes the difference between knowing the names and knowing which tool answers which question during an outage.

                ## Milestones
                1. Syslog and SNMP sent from the lab to a collector host and viewed there.
                2. Flexible NetFlow exporting to a free collector and top talkers identified.
                3. SPAN capture taken and opened in a packet analyser.
                4. IP SLA configured to track a path and trigger a route change on failure.
              priority: medium
              frontmatter:
                mode: building
                output_kind: knowledge
                success_criteria: "The lab sends syslog, SNMP and NetFlow to a collector, a SPAN capture has been analysed and an IP SLA track triggers a route change on failure."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "Install a free syslog, SNMP and NetFlow collector on the lab host"
                - "Export Flexible NetFlow from the edge router and list top talkers"
                - "Capture traffic with SPAN and open it in a packet analyser"
                - "Tie an IP SLA probe to a static route and test failover"
            - name: Infrastructure security and device hardening
              description: |-
                ## Purpose
                Securing the network devices themselves is a core blueprint domain: AAA with RADIUS and TACACS+, ACLs, control plane policing, secure management access and wireless and wired access control concepts. Hardening your lab routers to a written baseline, then testing that the baseline still lets you manage them, mirrors the work security teams ask of network engineers.

                ## Milestones
                1. A hardening baseline written covering management access, AAA, logging and unused services.
                2. AAA configured against a lab RADIUS or TACACS+ server with a local fallback.
                3. Control plane policing applied and its counters checked.
                4. Extended and named ACLs written for a management subnet and verified.

                ## Notes
                Always keep a local fallback account and a console path before applying AAA in a lab or production. Locking yourself out is the classic mistake.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A written hardening baseline is applied to the lab routers, with working AAA and fallback, control plane policing and management ACLs verified."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Write a one-page hardening baseline for the lab routers"
                - "Stand up a free RADIUS or TACACS+ server on the lab host"
                - "Configure AAA with a local fallback and test both paths"
                - "Apply control plane policing and check which traffic it drops"
            - name: QoS and multicast fundamentals
              description: |-
                ## Purpose
                QoS and multicast are the topics routing candidates most often skim, yet both appear in the core blueprint and in real networks carrying voice, video and market data. Learning the QoS model from classification and marking through queuing and policing, and multicast from IGMP through PIM sparse mode and the rendezvous point, closes two gaps that cost marks every time.

                ## Milestones
                1. Classification, marking, queuing, shaping and policing explained in one page with DSCP examples.
                2. A simple QoS policy applied in the lab and its counters verified.
                3. IGMP, PIM sparse mode and the role of the rendezvous point explained with a diagram.
                4. A multicast stream sent across the lab and the tree verified with show commands.
              priority: low
              frontmatter:
                mode: building
                output_kind: knowledge
                success_criteria: "One page of QoS notes and one multicast diagram exist, and the lab shows a QoS policy with matching counters and a working PIM sparse mode tree."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Write one page on classification, marking, queuing and policing with DSCP values"
                - "Apply a simple QoS policy in the lab and read its counters"
                - "Draw how IGMP and PIM sparse mode build a multicast tree"
                - "Send a test multicast stream across the lab and verify the tree"
            - name: Network automation with Python, NETCONF and RESTCONF
              description: |-
                ## Purpose
                Reading and reasoning about Python, JSON and YANG is part of the automation domain, alongside NETCONF, RESTCONF, controller APIs and on-box tools such as EEM. Writing a few small scripts against your own lab, rather than only reading about them, makes the exam questions familiar and gives you something useful to take back to work.

                ## Milestones
                1. NETCONF and RESTCONF enabled on two lab devices and a YANG model explored.
                2. A Python script that pulls interface state over RESTCONF and prints it as a table.
                3. A configuration change pushed over NETCONF and verified on the device.
                4. An EEM applet written that reacts to a syslog message.

                ## Notes
                You do not need to become a developer for ENCOR, but you do need to read short code and JSON confidently. Small working scripts teach that faster than any course.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Working scripts that read state over RESTCONF and change configuration over NETCONF are saved in the lab notes, alongside one tested EEM applet."
                cadence: phased
                effort_hours_estimate: "12"
              tasks:
                - "Enable NETCONF and RESTCONF on two lab routers"
                - "Write a Python script that pulls interface status over RESTCONF"
                - "Push one configuration change over NETCONF and verify it on the device"
                - "Write one small new automation script against the lab @recurring(monthly:20)"
            - name: Ticket-style troubleshooting method
              description: |-
                ## Purpose
                Troubleshooting questions in the routing concentration and in real outages reward a method, not luck: define the symptom, isolate the layer, compare against a known good state, change one thing and verify. Practising a written method on broken labs built by someone else, against a timer, makes it habit under pressure.

                ## Milestones
                1. A one-page troubleshooting method written, from symptom to verified fix.
                2. Ten broken lab scenarios collected from a partner, a book or a lab provider.
                3. Each scenario solved against a timer with the method followed and times recorded.
                4. Median time to fix reduced by a third between the first and last five scenarios.
              priority: medium
              frontmatter:
                mode: building
                output_kind: knowledge
                success_criteria: "Ten timed troubleshooting scenarios are solved using a written method, with times recorded and a measurable drop in median fix time."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "Write a one-page troubleshooting method from symptom to verified fix"
                - "Collect ten broken lab scenarios from a partner or lab provider"
                - "Solve each scenario against a timer, following the method step by step"
                - "Compare median fix times for the first and last five scenarios"
            - name: Readiness decision before booking ENCOR
              description: |-
                ## Purpose
                Booking too early wastes an exam fee and a retake waiting period, while waiting for perfect confidence can drag on for months. A short written test of readiness, built from mock scores, rebuild times and gap audit ratings, turns the booking into a decision rather than a mood.

                ## Milestones
                1. Readiness criteria written in advance, such as three mocks above a set score and every blueprint line rated two or more.
                2. The latest mock scores, rebuild times and gap ratings set against the criteria.
                3. A decision recorded: book now, book after a set number of weeks, or replan.
                4. Any remaining weak domains given a final study block.
              priority: medium
              deadlineOffsetDays: 120
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A dated readiness decision compares mock scores, rebuild times and gap ratings against criteria written in advance, and records the booking choice."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Write your readiness criteria before looking at the latest scores"
                - "Re-rate every blueprint line in the gap audit grid"
                - "Compare the last three mock scores and rebuild times against the criteria"
                - "Record the booking decision and any final study blocks"
            - name: Test centre or online proctored exam choice
              description: |-
                ## Purpose
                Cisco exams can usually be taken at a test centre or online with a remote proctor, and each carries its own risks: travel and limited dates on one side, room checks, webcam rules and connection drops on the other. Choosing deliberately, and testing the online setup well before the day if you go that way, removes a common source of exam-day stress.

                ## Milestones
                1. The nearest test centres found with their available dates.
                2. The current online proctoring rules read, including room, desk, ID and breaks.
                3. If online, the system test passed on the computer and connection you will use.
                4. A choice recorded with the reason and a backup plan.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A recorded choice between test centre and online delivery, with a passed system test if online and a written backup plan."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Search the exam delivery provider for test centres near you and their dates"
                - "Read the current online proctoring rules on room, ID and breaks"
                - "Run the online system test on the computer and connection you would use"
                - "Write the choice and a backup plan if the connection or centre fails"
            - name: Real switches or virtual images for Layer 2 practice
              description: |-
                ## Purpose
                Virtual switch images cover most of the blueprint, but some features behave differently or not at all, and wireless needs real access points. Deciding whether to buy a pair of used enterprise switches, borrow kit from work or accept the virtual limits is a small purchase decision worth making on purpose rather than after a frustrating weekend.

                ## Milestones
                1. A list of blueprint features that your virtual images do not support properly.
                2. Used hardware options priced, including power, noise and licence considerations.
                3. Borrowing from work or a colleague explored as an alternative.
                4. A decision recorded and, if buying, the kit set up and connected to the virtual lab.

                ## Notes
                Start from the **Purchase decision** template. Older used switches can be loud and power hungry; check the software version supports the features on your list before buying.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A recorded decision on real or virtual Layer 2 practice, based on a list of unsupported features and priced hardware options."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "List the blueprint features your virtual switch images do not support"
                - "Price two used switch options including power and noise"
                - "Ask at work whether spare switches or access points can be borrowed"
                - "Record the decision and connect any real kit to the virtual lab"
            - name: Retake plan after a failed exam attempt
              description: |-
                ## Purpose
                Failing ENCOR or a concentration exam is common and the score report shows performance by section, which is the most useful study guide you will get. Writing a retake plan within a week, while the questions are fresh in mind, turns a disappointing day into a sharper second attempt after the waiting period.

                ## Milestones
                1. The score report saved and each section's result recorded.
                2. Your memory of weak topic areas written down within two days, without breaching the exam agreement.
                3. A focused plan of four to eight weeks aimed at the weakest sections.
                4. A retake date booked after the current waiting period.

                ## Notes
                Start from the **Remediation plan** template. Write down topic areas only, never the questions themselves: sharing exam content breaks the candidate agreement.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Within a week of a failed attempt, a written retake plan targets the weakest sections from the score report and a retake date is booked."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Save the score report and record each section's result"
                - "Write down the weak topic areas you remember within two days"
                - "Plan four to eight weeks of study aimed at the weakest sections"
                - "Book the retake for after the current waiting period"
            - name: Booking the ENCOR exam
              description: |-
                ## Purpose
                Booking turns the target date into a real one and tends to sharpen the final weeks of study. Choosing a date with a calm week before it, checking the name on your ID matches your Cisco profile exactly and noting the reschedule deadline avoids the small administrative problems that ruin exam days.

                ## Milestones
                1. Your Cisco certification profile checked so the name matches your ID exactly.
                2. An exam date chosen with no on-call or major change window in the week before.
                3. The exam booked and the confirmation saved.
                4. The reschedule and cancellation deadline written in your calendar.
              priority: high
              deadlineOffsetDays: 150
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "The ENCOR exam is booked on a date clear of on-call duties, with the confirmation saved and the reschedule deadline in the calendar."
                cadence: one-shot
                effort_hours_estimate: "1"
              tasks:
                - "Check that the name on your Cisco profile matches your ID exactly"
                - "Pick a date with no on-call week or major change before it"
                - "Book the exam and save the confirmation email"
                - "Put the reschedule deadline in your calendar"
            - name: ENCOR exam week and exam day
              description: |-
                ## Purpose
                The last week should consolidate, not cram: one final mock early in the week, light flashcard review and sleep. On the day, a set routine for travel or room checks, ID, timing and pacing through questions you cannot return to keeps attention on the exam rather than the logistics.

                ## Milestones
                1. A final timed mock completed no later than four days before the exam.
                2. The last two days limited to notes and flashcard review.
                3. Travel or the online room setup, ID and arrival time confirmed the day before.
                4. The exam sat and the result and score report saved.

                ## Notes
                Plan your pacing in advance: a rough check of minutes per question at a few points. Simulation questions can take longer, so do not let one eat the time for ten others.
              priority: high
              deadlineOffsetDays: 180
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "The ENCOR exam is sat on the booked date with a final mock done four or more days before, and the result and score report are saved."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Sit the final timed mock at least four days before the exam"
                - "Write a simple pacing plan with time checkpoints"
                - "Confirm travel or the online room setup and ID the day before"
                - "Save the result and score report the same day"
            - name: Concentration exam preparation sprint
              description: |-
                ## Purpose
                Once the core exam is done, the concentration is narrower but deeper, and for the routing concentration much of it is troubleshooting at speed. A focused sprint against the concentration blueprint, reusing the core lab and adding the topics the core only touched, usually takes less time than the core if it starts while the material is still fresh.

                ## Milestones
                1. The concentration blueprint copied into its own gap grid and rated.
                2. Lab topology extended for concentration topics, such as DMVPN or advanced redistribution for routing.
                3. A weekly timed troubleshooting lab completed for six weeks.
                4. Two full concentration practice exams sat with scores recorded.
              priority: high
              deadlineOffsetDays: 300
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "The concentration gap grid is rated, the lab is extended, six weekly timed labs are logged and two practice exams are scored before booking."
                cadence: phased
                effort_hours_estimate: "60"
              tasks:
                - "Copy the concentration blueprint into its own gap grid and rate each line"
                - "Extend the lab topology with the concentration-only topics"
                - "Run a timed concentration troubleshooting lab @recurring(weekly:tue)"
                - "Sit two full concentration practice exams and record the scores"
            - name: Concentration exam day and certification claim
              description: |-
                ## Purpose
                Passing the concentration completes CCNP Enterprise, but the certification only appears once the exam results reach your Cisco profile and you accept the digital badge. Booking the concentration sensibly, sitting it and then checking the record, badge and certificate means the credential is visible and verifiable when an employer asks.

                ## Milestones
                1. The concentration exam booked with ID and profile checked.
                2. The exam sat and the score report saved.
                3. CCNP Enterprise showing on your Cisco certification record.
                4. The digital badge accepted and the certificate downloaded with its expiry date noted.
              priority: high
              deadlineOffsetDays: 330
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "CCNP Enterprise appears on your Cisco certification record, the digital badge is accepted and the expiry date is recorded."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Book the concentration exam once two practice scores meet your criteria"
                - "Sit the exam and save the score report"
                - "Check that CCNP Enterprise appears on your certification record"
                - "Accept the digital badge and record the certification expiry date"
            - name: CCNP on your CV and the pay conversation
              description: |-
                ## Purpose
                A new professional-level certification is a natural moment to update your CV and profile and to raise your role or pay with your manager. Doing it within a month, with concrete examples of how the study has already changed your work, makes the conversation about value delivered rather than a badge earned.

                ## Milestones
                1. CV and professional profile updated with CCNP Enterprise, the concentration and the badge link.
                2. Three examples written of work improved by what you learned, such as a cleaner BGP edge or a faster outage fix.
                3. Market pay ranges for your role and region gathered from two sources.
                4. A conversation held with your manager and the outcome recorded.
              priority: medium
              deadlineOffsetDays: 360
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "Within a month of certifying, your CV and profile show CCNP Enterprise and a role or pay conversation with your manager has been held and recorded."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Add CCNP Enterprise, the concentration and the badge link to your CV"
                - "Write three examples of work improved by what you learned"
                - "Gather pay ranges for your role and region from two sources"
                - "Ask the agent to draft talking points for the conversation with your manager"
            - name: CCNP study around NOC and on-call shifts
              description: |-
                ## Purpose
                Network operations engineers often work rotating shifts and on-call weeks, which makes fixed weekday study blocks unrealistic. Planning around the rota, using quiet night shifts for reading where your employer allows it and protecting post-shift sleep, keeps progress steady without wrecking your health.

                ## Milestones
                1. Study blocks mapped onto the next month's shift rota.
                2. An agreed rule with your manager on whether study is allowed during quiet shifts.
                3. Short reading tasks prepared for night shifts and lab tasks saved for days off.
                4. Three months of study kept going through at least one on-call week.

                ## Notes
                Never study on a production device or during a live incident. Keep labs on your own platform and away from the network you are on shift for.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Study blocks are re-planned against each month's rota and progress is logged through three consecutive months including an on-call week."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Map study blocks onto next month's shift rota"
                - "Ask your manager whether reading is allowed during quiet night shifts"
                - "Re-plan study blocks when the new shift rota is published @recurring(monthly:25)"
                - "Keep a short list of reading tasks ready for quiet shifts"
            - name: CCNP plan for working parents
              description: |-
                ## Purpose
                Parents with a full-time networking job rarely find long evenings free, and lab sessions do not fit around bedtimes and school runs easily. A plan built on early mornings or one protected weekend block, agreed with your partner or family, with a longer target date accepted up front, gets parents through without constant guilt.

                ## Milestones
                1. A realistic weekly hour count agreed with your partner or family.
                2. One protected weekend lab block and short weekday study windows fixed.
                3. The target exam date extended to fit the real hours.
                4. Twelve weeks of study logged without missing more than two weekend blocks.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A study plan agreed with your family is followed for twelve weeks, with no more than two weekend lab blocks missed."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Agree a weekly study hour count with your partner or family"
                - "Set a later target exam date that fits those hours"
                - "Hold the protected family-agreed lab block @recurring(weekly:sat)"
                - "Use short early-morning sessions for flashcards and reading"
            - name: Caribbean candidate plan for CCNP
              description: |-
                ## Purpose
                Candidates in the Caribbean face their own practical hurdles: exam fees and lab subscriptions priced in US dollars, a limited number of test centres on some islands, and power cuts or unstable internet that can end an online proctored exam. Planning for these early, from currency and card payments to a backup venue with reliable power, prevents a strong candidate being let down by logistics.

                ## Milestones
                1. Test centres in your country or the nearest island found with their exam availability.
                2. Costs worked out in local currency with your card's foreign transaction fees included.
                3. Power and internet backup assessed if sitting online, or a quieter venue arranged.
                4. Regional study groups or user communities identified for partners and kit loans.

                ## Notes
                If online delivery is the only option, test at the same time of day as the exam to see what your connection is really like then.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A written plan covers the chosen exam venue, costs in local currency including card fees, and power and connection backup for exam day."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Search for test centres in your country and the nearest islands"
                - "Work out every cost in local currency including card fees"
                - "Run the online system test at the same time of day as your exam slot"
                - "Find a regional networking community for study partners and kit loans"
            - name: Server or cloud engineer crossing into enterprise networking
              description: |-
                ## Purpose
                Systems and cloud engineers often arrive with strong Linux, scripting and virtualisation skills but little hands-on campus switching or routing protocol work. Spending the first weeks on the networking basics a CCNA holder takes for granted, and treating automation as the head start it is, avoids a frustrating first mock.

                ## Milestones
                1. CCNA-level gaps listed, such as subnetting speed, VLANs, trunking and single-area OSPF.
                2. Four weeks of foundation labs completed before starting core blueprint study.
                3. Existing scripting skill applied early through the automation domain.
                4. A first mock taken only after the foundation weeks.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A list of CCNA-level gaps is closed through four weeks of logged foundation labs before core blueprint study begins."
                cadence: phased
                effort_hours_estimate: "30"
              tasks:
                - "List the CCNA-level networking topics you have never configured"
                - "Drill subnetting until you can do a /27 in your head in seconds"
                - "Build VLANs, trunks and single-area OSPF in the lab from scratch"
                - "Start the automation domain early using your existing scripting skill"
            - name: Sitting CCNP exams in a second language
              description: |-
                ## Purpose
                Many candidates sit Cisco exams in English as a second or third language, where long scenario questions take longer to read and small words like except or not change the answer. Checking which languages are offered for your exams, practising reading under time pressure and building a vocabulary list of exam phrasing narrows the gap.

                ## Milestones
                1. The languages offered for your core and concentration exams checked on the official pages.
                2. Any extra time or accommodation policy for non-native speakers read and, if eligible, requested.
                3. A list of thirty networking and exam phrasing terms you find ambiguous, each with a plain definition.
                4. Two timed mocks completed in the exam language with reading time noted.
              priority: low
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "Language options and accommodation rules are recorded, a thirty-term vocabulary list exists and two timed mocks have been sat in the exam language."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Check which languages your core and concentration exams are offered in"
                - "Read the accommodation policy and request extra time if you qualify"
                - "List thirty terms or phrasings you find ambiguous with plain definitions"
                - "Sit two timed mocks in the exam language and note your reading time"
            - name: Team lead running a CCNP study cohort
              description: |-
                ## Purpose
                Network team leads can lift the whole team by running a study cohort: shared lab access, weekly sessions and a common target. Organising the group well, with a lab environment everyone can reach and a simple progress check, turns individual certification into a team capability and makes the training budget easier to defend.

                ## Milestones
                1. Three to eight engineers signed up with their target exams and dates.
                2. A shared lab environment set up with access for every member.
                3. A weekly cohort session held with a topic leader rotating each week.
                4. A monthly progress check against each member's plan reported to management.
              priority: low
              frontmatter:
                mode: service
                output_kind: deliverable
                success_criteria: "A cohort of at least three engineers has shared lab access, weekly sessions and a monthly progress summary sent to management for three months."
                cadence: rolling
              tasks:
                - "Invite the team to join a study cohort and record each target exam"
                - "Set up a shared lab environment with access for each member"
                - "Run the cohort session with a rotating topic leader @recurring(weekly:wed)"
                - "Send a short progress summary to management @recurring(monthly:28)"
            - name: CCNP recertification plan with continuing education
              description: |-
                ## Purpose
                CCNP Enterprise is valid for a fixed period, currently three years, and can be renewed by passing exams, earning continuing education credits or a mix, under rules Cisco updates from time to time. Planning recertification as soon as you certify, and recording credits as you earn them, avoids a scramble in the final months.

                ## Milestones
                1. The current recertification options and requirements saved from the official pages with today's date.
                2. Your expiry date recorded and a route chosen: exams, credits or a mix.
                3. Every eligible course or exam logged with its credits as it is completed.
                4. A yearly check of progress against the requirement.

                ## Notes
                Some later exams, such as a further concentration or a higher-level exam, count toward renewal. Check what counts before paying for any continuing education course.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A recertification record shows the expiry date, the chosen route and every credit or exam logged, checked at least once a year."
                cadence: cyclic
              tasks:
                - "Save the current recertification requirements with today's date"
                - "Record your expiry date and choose exams, credits or a mix"
                - "Log each eligible course or exam with its credits as you finish it"
                - "Check recertification progress against the requirement @recurring(yearly)"
            - name: CCIE Enterprise Infrastructure lab readiness assessment
              description: |-
                ## Purpose
                Passing ENCOR also meets the written qualification for the CCIE Enterprise Infrastructure lab for a limited time, which makes it the natural moment to ask whether to go further. An honest assessment of time, money, employer support and lab skill, backed by one full timed practice section, tells you whether to start now, later or not at all.

                ## Milestones
                1. The current CCIE lab blueprint, qualification window and format saved from the official pages.
                2. Total cost estimated, including lab fees, travel to a lab location and rack rental.
                3. One full practice lab section attempted against the clock and scored.
                4. A decision recorded with a target date if going ahead.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A written CCIE decision is based on the current lab blueprint, a costed estimate and one scored timed practice section."
                cadence: phased
                effort_hours_estimate: "20"
              tasks:
                - "Save the current CCIE Enterprise Infrastructure lab blueprint and qualification rules"
                - "Estimate total cost including travel to a lab location"
                - "Attempt one full timed practice lab section and score it"
                - "Work through one full CCIE-style lab section @recurring(monthly:16)"
            - name: Applying CCNP design to a real network change
              description: |-
                ## Purpose
                Certification knowledge sticks when it changes the network you run: a cleaner BGP edge, MST replacing a tangle of per-VLAN root bridges, or tracked HSRP on a branch. Taking one real improvement through your organisation's change process, with a design note, a lab rehearsal and a rollback plan, proves the skill to your employer and to yourself.

                ## Milestones
                1. One real improvement chosen with a written problem statement and agreed with your manager.
                2. A design note written and the change rehearsed in the lab with production-like configuration.
                3. A change record approved with a rollback plan and maintenance window.
                4. The change made, verified and a short post-change review written.

                ## Notes
                Never test on production. Follow your organisation's change management process and have a peer review the configuration before the window.
              priority: medium
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "One real network change based on CCNP learning has been designed, rehearsed in the lab, approved through change management and verified, with a review written."
                cadence: phased
                effort_hours_estimate: "20"
              tasks:
                - "Pick one improvement in your real network and write the problem in a paragraph"
                - "Write a short design note and rehearse the change in the lab"
                - "Raise a change record with a rollback plan and peer review"
                - "Write a short post-change review after the window"
            - name: Network automation portfolio from CCNP labs
              description: |-
                ## Purpose
                Employers hiring senior network engineers increasingly ask to see automation work, not just certificates. Turning the scripts and templates written during CCNP study into a small, tidy public or internal portfolio, with no real company data in it, shows the skill clearly and keeps it growing after the exam.

                ## Milestones
                1. Three to five lab scripts cleaned up with a short readme each.
                2. All addresses, hostnames and credentials checked to be lab-only or removed.
                3. The portfolio published in a code repository or shared internally.
                4. One new script or template added each month for six months.

                ## Notes
                Never publish anything taken from your employer's network, including configuration snippets with real addressing or device names.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A repository holds at least five documented lab automation scripts containing no employer data, with one new addition logged each month for six months."
                cadence: rolling
              tasks:
                - "Choose three lab scripts worth sharing and write a readme for each"
                - "Remove every real address, hostname and credential from the code"
                - "Publish the portfolio in a code repository or an internal wiki"
                - "Add one new script or template to the portfolio @recurring(monthly:8)"
---

# CCNP Enterprise Certification

This area is for network engineers moving from CCNA to CCNP Enterprise, which means passing the core exam (ENCOR) and one concentration exam you choose, such as advanced routing, design, wireless or automation. It starts with foundations (the official blueprints, the concentration decision, a gap audit, a baseline score, a lab platform and topology, a dated plan and a budget), then the weekly study and lab machinery, the core skills from OSPF, EIGRP and BGP through redistribution, Layer 2, gateway redundancy, tunnels, wireless, SD-WAN and SD-Access, assurance, security, QoS and automation, the readiness, exam format and hardware decisions, booking and both exam days, plans for shift workers, parents, Caribbean candidates, server engineers crossing over, second-language candidates and team leads, and specialist work such as recertification, CCIE lab readiness and production change.

The rhythm is study blocks on set weekdays, a short daily verification command drill, a weekly lab rebuild, mistake review and partner session, a monthly timed practice exam and lab cost check, and a quarterly look at the exam blueprints and release notes. The Skills matrix, Purchase decision, Metrics log and Remediation plan templates pair with it. Installing adds all 50 projects as active, so archive the ones that are not for you yet.
