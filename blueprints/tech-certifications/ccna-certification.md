---
id: tech-certifications.ccna-certification
name: CCNA Certification
description: "A route to Cisco's CCNA: the current exam topics, Packet Tracer labs, subnetting until it is automatic, switching, routing, IP services, security and automation, timed practice exams, booking and exam day."
category: personal
version: 1.0.0
tags: [tech-certifications, ccna-certification, student, engineer, cisco, ccna, networking, exam-prep]
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
        - name: CCNA Certification
          description: "Studying for Cisco's CCNA: network fundamentals, IP connectivity and services, switching and routing, security basics and automation, with Packet Tracer labs."
          projects:
            - name: CCNA exam topics and policies folder
              description: |-
                ## Purpose
                Cisco publishes the CCNA 200-301 exam topics as a numbered list of domains and objectives, and revises it from time to time, most recently with a v1.1 update. Courses and question banks lag behind those changes, so saving the official list and the current exam policies with the date you checked them gives every later decision a single source. It takes an hour and prevents weeks spent on a topic that is no longer examined.

                ## Milestones
                1. The current CCNA exam topics PDF saved with its version number and the date you downloaded it.
                2. Each domain and its numbered objectives copied onto one page you can tick off.
                3. Current fee, exam length, language options and retake waiting rules noted from Cisco and Pearson VUE pages, dated.
                4. The certification validity period and recertification options noted from the official page.

                ## Notes
                Domain weightings, fees and durations quoted in videos and forums are often out of date. Copy them from the official pages on the day, and check again just before you book.
              priority: high
              deadlineOffsetDays: 10
              frontmatter:
                mode: research
                output_kind: artifact
                success_criteria: "One folder holds the dated official exam topics, a one-page objective checklist and a dated note of fee, length, retake rules and validity."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Download the current CCNA 200-301 exam topics from the Cisco certification site"
                - "Copy every domain and numbered objective onto a one-page checklist"
                - "Note the fee, length, languages and retake policy with today's date"
                - "Save the recertification page and note how long the CCNA stays valid"
            - name: Networking skills audit against the CCNA objectives
              description: |-
                ## Purpose
                A help desk technician who already crimps cables and a computing student who has never seen a switch need very different plans, and both tend to overestimate what they know. Rating yourself honestly against every numbered objective, from duplex mismatches to JSON syntax, shows where the hours should go and which chapters you can skim. Repeat the rating halfway through so progress is measured, not guessed.

                ## Milestones
                1. Every CCNA objective rated from zero to three for how well you could explain and configure it today.
                2. The five weakest objectives listed with the domain each belongs to.
                3. Objectives you have already used at work or in class marked, with the evidence.
                4. A second rating pencilled in for the midpoint of your study calendar.

                ## Notes
                Start from the **Skills matrix** template. Rate configuration and troubleshooting separately: many people can type the commands but cannot read the output.
              priority: high
              deadlineOffsetDays: 14
              frontmatter:
                mode: research
                output_kind: artifact
                success_criteria: "A skills matrix covering every CCNA objective with a zero to three rating, the five weakest named and a midpoint re-rating date set."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Rate yourself zero to three on each CCNA objective in a skills matrix"
                - "Mark separately whether you could configure it and troubleshoot it"
                - "List the five weakest objectives at the top of the matrix"
                - "Put a midpoint re-rating date in your calendar"
            - name: Baseline CCNA practice quiz before any study
              description: |-
                ## Purpose
                Sitting a short mixed quiz on day one feels pointless, but it gives you a starting score and shows which question styles slow you down, from subnet maths to reading a routing table. Without a baseline you cannot tell later whether a month of study moved anything. Keep the result private and unflattering on purpose.

                ## Milestones
                1. A timed quiz of 40 to 60 mixed CCNA questions completed without notes.
                2. The score recorded overall and by domain.
                3. The three question styles that took longest noted, such as subnetting, show output or drag and drop.
                4. The result saved in the same log you will use for later practice exams.
              priority: medium
              deadlineOffsetDays: 10
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A dated baseline score by domain and a note of the three slowest question styles, stored in the practice exam log."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Pick a reputable practice quiz of 40 to 60 mixed CCNA questions"
                - "Sit it in one go with a timer and no notes"
                - "Record the overall and per-domain score in the practice log"
                - "Write down the three question styles that cost the most time"
            - name: Packet Tracer installed with a first two-switch topology
              description: |-
                ## Purpose
                Packet Tracer, Cisco's simulator, is free through a Cisco Networking Academy account and simulates almost everything the CCNA asks you to configure. Getting it installed and building a tiny network on the first evening, two switches, two PCs and a ping that works, removes the biggest barrier to hands-on study. Most CCNA knowledge only sticks once you have typed it into a device prompt.

                ## Milestones
                1. A Networking Academy account created and the current Packet Tracer version installed.
                2. A topology of two switches and two PCs built and cabled.
                3. Hostnames and IP addresses set and a successful ping between the PCs.
                4. The file saved in a dated labs folder.

                ## Notes
                Packet Tracer does not support every command real IOS does. When a command is rejected, note it and check whether the exam objective needs real or emulated kit.
              priority: high
              deadlineOffsetDays: 7
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Packet Tracer runs on your machine and a saved two-switch lab shows a successful ping between two PCs."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Create a free Cisco Networking Academy account and download Packet Tracer"
                - "Build two switches and two PCs and connect them with the right cables"
                - "Assign addresses to both PCs and ping one from the other"
                - "Save the file as lab 001 in a dated labs folder"
            - name: Choosing CCNA lab software and kit
              description: |-
                ## Purpose
                Packet Tracer covers most of the exam, but some candidates want real IOS behaviour from Cisco Modeling Labs, GNS3 or EVE-NG with licensed images, or a stack of second-hand switches and routers. Each costs different money, laptop memory and setup time, and old hardware can be loud, power hungry and too old for current commands. A short comparison stops you buying a rack you never cable.

                ## Milestones
                1. Packet Tracer, an emulator option and used hardware compared on cost, RAM needs, setup time and command coverage.
                2. The objectives Packet Tracer handles poorly listed, if any matter to you.
                3. A decision recorded with a spending limit.
                4. The chosen option installed or ordered, or a note that Packet Tracer alone is enough.

                ## Notes
                Start from the **Purchase decision** template. Only run router and switch images you are licensed to use; Cisco Modeling Labs includes legitimate images.
              priority: medium
              deadlineOffsetDays: 21
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A written comparison of at least three lab options with a decision, a spending cap and the chosen option set up or ordered."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Check how much free RAM and disk your laptop has for an emulator"
                - "Compare Packet Tracer, Cisco Modeling Labs and used hardware on cost and coverage"
                - "Set a spending cap before looking at any second-hand listings"
                - "Record the decision and set up or order the chosen option"
            - name: CCNA course and question bank choice
              description: |-
                ## Purpose
                The CCNA market is crowded: official Cisco courseware, the Networking Academy CCNA curriculum, long video courses, the well-known two-volume certification guides and many question banks of mixed quality. Choosing one main course, one reference book and one practice question source, and ignoring the rest, saves money and stops the habit of starting a new course every fortnight. Check that each one matches the current exam topics version.

                ## Milestones
                1. Three course options compared on exam version, labs included, length and price.
                2. One main course, one reference book and one question bank chosen.
                3. Each choice confirmed against the current exam topics version.
                4. Anything else you have bookmarked moved to a someday list.

                ## Notes
                Avoid sites selling real exam questions. Using them breaches the Cisco candidate agreement and can lead to decertification.
              priority: medium
              deadlineOffsetDays: 21
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "One main course, one reference book and one question bank chosen, each checked against the current exam topics version, with the decision written down."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "List three CCNA courses with exam version, lab count and price"
                - "Read the table of contents of the reference book you are considering"
                - "Choose one course, one book and one question bank and write down why"
                - "Move every other bookmarked resource to a someday list"
            - name: Dated CCNA study calendar
              description: |-
                ## Purpose
                Most candidates study for three to six months, and the ones who drift are usually the ones with no target week. Laying the exam domains across a calendar, with a lab each week and the practice exam dates fixed, turns a vague plan into a sequence you can check against. Build slack in for illness, exams at college or a busy month at work.

                ## Milestones
                1. A target exam month chosen and written at the top of the calendar.
                2. Each CCNA domain given a block of weeks in the order your course teaches it.
                3. Monthly practice exam dates and a two-week final review fixed.
                4. Two buffer weeks built in before the target month.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A calendar shows a target exam month, week blocks for every domain, monthly practice exam dates, a final review and two buffer weeks."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Choose a target exam month and count the weeks available"
                - "Give each exam domain a block of weeks in course order"
                - "Fix the monthly practice exam dates in your calendar"
                - "Add two buffer weeks and a two-week final review before the target"
            - name: Subnetting from first principles
              description: |-
                ## Purpose
                Subnetting appears across the whole exam, in addressing questions, routing tables, ACL wildcard masks and OSPF network statements, and slow subnetting costs minutes on every one. Learning the binary behind it once, then a fast method such as the magic number, lets you find the network, broadcast and host range of any IPv4 address in under thirty seconds. Treat it as a foundation, not a topic to tick.

                ## Milestones
                1. Binary to decimal conversion for any octet done without a calculator.
                2. Network, first host, last host and broadcast found for ten addresses in a row without error.
                3. Variable length subnet masking used to address a small network with four different subnet sizes.
                4. Wildcard masks worked out from subnet masks and back.

                ## Notes
                No calculator is allowed in the exam. Practise on paper or a whiteboard from the start so speed transfers.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Ten consecutive subnetting questions solved correctly by hand, each in under thirty seconds, plus a working VLSM plan for four subnets."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "Write out the powers of two and the binary octet values from memory"
                - "Work ten network and broadcast questions by hand with a timer"
                - "Design a VLSM plan for subnets of 100, 50, 20 and 2 hosts"
                - "Convert five subnet masks to wildcard masks and check each one"
            - name: Lab notebook and configuration archive
              description: |-
                ## Purpose
                Every lab you build teaches something, but without notes you will rebuild the same broken OSPF neighbour three times. A notebook that records the goal, the commands, what failed and the fix, plus an archive of saved running configs, becomes your personal revision guide in the final fortnight. It also becomes the start of a portfolio for your first network role.

                ## Milestones
                1. A lab notebook set up with one page per lab: goal, topology, key commands, faults and fixes.
                2. A configuration archive folder with saved running configs named by lab and device.
                3. Each note tagged with the exam objective number it covers.
                4. At least five labs recorded in the notebook.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A notebook with at least five lab pages tagged by objective, and a config archive with matching files named by lab and device."
                cadence: rolling
              tasks:
                - "Create a notebook page template with goal, topology, commands, faults and fixes"
                - "Set up an archive folder named by lab number and device"
                - "Tag each existing lab note with its exam objective number"
                - "Copy this week's running configs into the archive @recurring(weekly:mon)"
            - name: Cisco IOS command line fluency
              description: |-
                ## Purpose
                The exam assumes you are at home in the IOS prompt: user and privileged modes, global and interface configuration, context help, abbreviations, show commands and saving the config. Candidates who still hunt for the right mode lose time in every simulation. A few evenings of plain CLI practice, before the protocols, pays back across the whole course.

                ## Milestones
                1. Moving between user, privileged, global, interface and line modes done without thinking.
                2. Hostname, banner, passwords, interface descriptions and addressing set on a switch and a router.
                3. Running and startup configs compared and the difference explained.
                4. Twenty common show commands listed with what each one tells you.
              priority: medium
              frontmatter:
                mode: building
                output_kind: knowledge
                success_criteria: "A device configured from blank with hostname, passwords, banner, addressing and a saved config, plus a written list of twenty show commands and their uses."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Practise moving through every IOS mode using only context help"
                - "Configure a blank router with hostname, banner, passwords and addresses"
                - "Compare running and startup configs before and after saving"
                - "Write a one-page list of twenty show commands and what each reveals"
            - name: Weekly CCNA study blocks
              description: |-
                ## Purpose
                Steady sessions beat weekend marathons for a topic as layered as networking, where VLANs feed trunking, which feeds inter-VLAN routing. Two weekday evenings and one longer weekend block, held like appointments, keep the calendar on track. When a week slips, shorten the block rather than skip it.

                ## Milestones
                1. Two weekday sessions and one weekend block fixed in your calendar.
                2. Each session starting with a stated objective number and ending with a two-line note.
                3. Four consecutive weeks completed with no block skipped entirely.
                4. Hours per week tracked against the plan.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Three study blocks a week held for at least eight consecutive weeks, each logged with an objective number and a short note."
                cadence: rolling
              tasks:
                - "Block two weekday evenings and one weekend morning in your calendar"
                - "Study the objective set for this evening and write a two-line note @recurring(weekly:tue,thu)"
                - "Work through a full chapter and its lab in the weekend block @recurring(weekly:sat)"
                - "Add up this week's study hours in your plan"
            - name: Daily ten-minute subnetting drill
              description: |-
                ## Purpose
                Subnetting speed fades within weeks if you stop practising, and it is the skill that most often separates a pass from a near miss. Ten minutes a day of random questions, on paper and timed, keeps it automatic right up to exam day. Pair it with something you already do daily, such as the morning coffee.

                ## Milestones
                1. A random subnetting question source chosen and bookmarked.
                2. Ten questions done on paper every day for thirty days.
                3. Average time per question recorded weekly and falling.
                4. IPv6 prefix and summarisation questions added once IPv4 is under thirty seconds.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Thirty days of ten-question drills logged, with average time per question recorded each week."
                cadence: rolling
              tasks:
                - "Bookmark a random subnetting practice generator"
                - "Do ten timed subnetting questions on paper @recurring(daily)"
                - "Record your average seconds per question each Sunday"
                - "Add route summarisation and IPv6 prefixes once IPv4 is quick"
            - name: CCNA flashcard deck with spaced repetition
              description: |-
                ## Purpose
                Plenty of the CCNA is plain recall: administrative distances, port numbers, STP port states, OSPF neighbour states, wireless standards and the order of default route selection. A spaced repetition deck built from your own mistakes keeps those facts fresh for a few minutes a day. Write cards in your own words, not copied from the book.

                ## Milestones
                1. A spaced repetition app set up with one deck tagged by exam domain.
                2. At least 150 cards written from your own notes and wrong answers.
                3. Daily reviews kept for a month with fewer than five days missed.
                4. Cards you always get right suspended to keep the deck short.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A deck of at least 150 self-written cards tagged by domain, reviewed on at least 25 days of a 30-day month."
                cadence: rolling
              tasks:
                - "Set up a spaced repetition app with a CCNA deck tagged by domain"
                - "Write cards for administrative distances and well-known port numbers"
                - "Clear today's due flashcards @recurring(daily)"
                - "Suspend cards you have answered correctly ten times running"
            - name: Weekly Packet Tracer lab
              description: |-
                ## Purpose
                Reading about trunk negotiation is not the same as watching a link refuse to come up because of a native VLAN mismatch. One focused lab a week, tied to the objective you studied that week and verified with show commands, turns theory into reflex. Build from a blank topology at least every other week rather than relying on prebuilt files.

                ## Milestones
                1. One lab a week built and verified with the relevant show commands.
                2. Every other lab started from a blank canvas.
                3. Each lab recorded in the notebook with the objective it covers.
                4. Twelve labs completed across the main domains.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Twelve weekly labs completed and logged in the notebook, at least six of them built from a blank topology."
                cadence: rolling
              tasks:
                - "Choose this week's lab from the objective you studied"
                - "Build and verify this week's lab, then log it in the notebook @recurring(weekly:sun)"
                - "Start every second lab from a blank Packet Tracer canvas"
                - "Count how many labs each domain has so far"
            - name: CCNA mistake log and Friday review
              description: |-
                ## Purpose
                Wrong answers are the most useful data you produce, but only if you record why you got them wrong: a misread question, a fact you never knew, or a concept you half understood. A weekly review of the log points next week's study at the real gaps. Patterns appear quickly, such as always confusing OSPF cost with administrative distance.

                ## Milestones
                1. A mistake log with columns for question topic, objective, cause and fix.
                2. Every wrong practice answer entered within a day.
                3. A short Friday review that picks next week's two weakest objectives.
                4. Recurring causes counted after a month.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A mistake log with every wrong practice answer classified by cause, reviewed weekly for at least eight weeks."
                cadence: rolling
              tasks:
                - "Set up a mistake log with topic, objective, cause and fix columns"
                - "Enter each wrong practice answer with its cause the same day"
                - "Review the log and choose next week's two weakest objectives @recurring(weekly:fri)"
                - "Count which cause appears most often after four weeks"
            - name: Monthly timed CCNA practice exam
              description: |-
                ## Purpose
                A full-length timed practice exam once a month shows whether study is converting into marks, and trains the pacing you need when you cannot go back to earlier questions. Score by domain, not just overall, so a strong switching score cannot hide weak IP services. Use exams from your chosen question bank, not memorised dumps.

                ## Milestones
                1. A full-length practice exam sat under timed conditions each month.
                2. Scores logged overall and by domain with the date.
                3. Every wrong answer moved into the mistake log.
                4. A trend of at least three monthly scores visible in one table.

                ## Notes
                Start from the **Metrics log** template. Sit the exam at the time of day you plan to book the real one.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "At least three monthly timed practice exams logged with overall and per-domain scores, and every wrong answer entered in the mistake log."
                cadence: rolling
              tasks:
                - "Set up a metrics log with columns for each CCNA domain"
                - "Sit a full timed practice exam without going back to questions @recurring(monthly:20)"
                - "Log the overall and per-domain scores the same day"
                - "Move every wrong answer into the mistake log"
            - name: CCNA exam topics change watch
              description: |-
                ## Purpose
                Cisco gives notice before changing the CCNA, and candidates halfway through a plan need to know whether their target date falls before or after a new version. A quarterly look at the certification news page and the exam topics version takes ten minutes. It also catches new objectives, such as the AI and cloud items added in recent updates.

                ## Milestones
                1. The Cisco certification news page bookmarked.
                2. The current exam topics version noted with the date checked.
                3. Any announced change compared against your target exam month.
                4. Your objective checklist updated if a new version is announced.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A dated note each quarter of the current exam topics version and whether any announced change affects your target date."
                cadence: rolling
              tasks:
                - "Bookmark the Cisco certification news and exam topics pages"
                - "Check the exam topics version and record it with the date @recurring(quarterly)"
                - "Compare any announced change date with your target exam month"
                - "Update your objective checklist when a new version is published"
            - name: Monthly troubleshooting challenge lab
              description: |-
                ## Purpose
                Building a network from instructions is easier than finding what is wrong with one someone else built. Once a month, open a broken lab, or have a friend break yours, and fix it using only show and debug commands with a timer running. This is the skill the exam simulations and a first network job both reward.

                ## Milestones
                1. A source of broken labs found, or a study partner willing to plant faults.
                2. One timed troubleshooting lab completed each month.
                3. Each fault recorded with the command that revealed it.
                4. A personal troubleshooting order written, from physical layer upward.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "At least four monthly troubleshooting labs completed with each fault and its revealing command written down."
                cadence: rolling
              tasks:
                - "Find a set of broken CCNA labs or ask a friend to plant faults"
                - "Fix a broken lab against a forty-minute timer @recurring(monthly:12)"
                - "Write down each fault and the command that revealed it"
                - "Draft your own layer by layer troubleshooting order"
            - name: OSI and TCP-IP models through Wireshark captures
              description: |-
                ## Purpose
                Network fundamentals questions ask where things happen: which layer adds a MAC address, what a TCP handshake looks like, why UDP suits voice. Capturing real traffic in Wireshark, or in Packet Tracer's simulation mode, and finding each header makes the models concrete. It also builds the habit of looking at packets when something breaks.

                ## Milestones
                1. Wireshark installed and a capture of a web page load saved.
                2. Ethernet, IP and TCP headers identified in one frame with key fields labelled.
                3. A TCP three-way handshake and an ARP exchange found and explained.
                4. A one-page comparison of TCP and UDP written with examples.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A saved capture with labelled Ethernet, IP and TCP headers, an explained handshake and ARP exchange, and a TCP versus UDP page."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Install Wireshark and capture a single web page loading"
                - "Label the MAC, IP and port fields in one captured frame"
                - "Find and annotate a TCP handshake and an ARP request and reply"
                - "Write a one-page TCP versus UDP comparison with real examples"
            - name: VLANs, trunking and inter-VLAN routing
              description: |-
                ## Purpose
                Network access is built on VLANs: access ports, 802.1Q trunks, native VLANs, allowed lists and then routing between them with a router on a stick or a Layer 3 switch. It is also where the most common lab faults live. Working through it in a single topology that grows each session shows how the pieces depend on each other.

                ## Milestones
                1. Three VLANs created and access ports assigned on two switches.
                2. An 802.1Q trunk configured with a non-default native VLAN and a pruned allowed list.
                3. Inter-VLAN routing working by router on a stick and by switch virtual interfaces.
                4. A planted native VLAN mismatch found from show output alone.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A saved lab with three VLANs, a trunk, inter-VLAN routing by two methods and a written fix for a planted native VLAN mismatch."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Create three VLANs and assign access ports on two switches"
                - "Configure a trunk with a changed native VLAN and an allowed list"
                - "Route between the VLANs with a router on a stick, then with SVIs"
                - "Plant a native VLAN mismatch and fix it from show output"
            - name: Spanning tree, Rapid PVST+ and EtherChannel
              description: |-
                ## Purpose
                Spanning tree questions test whether you can predict the root bridge, port roles and port states from a diagram, which is hard until you have watched it converge. EtherChannel adds LACP and the rule that member ports must match. A triangle of three switches is enough to see all of it.

                ## Milestones
                1. The root bridge, root ports and blocked port predicted on paper, then confirmed in the lab.
                2. The root bridge moved deliberately by changing bridge priority.
                3. PortFast and BPDU guard configured on access ports.
                4. A two-link LACP EtherChannel built and a mismatch fault diagnosed.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A three-switch lab where predicted STP roles match the show output, the root is moved on purpose and a working LACP EtherChannel is saved."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Draw a three-switch triangle and predict the root and blocked port"
                - "Confirm your prediction with show spanning-tree in the lab"
                - "Change bridge priority to move the root to a chosen switch"
                - "Bundle two links with LACP and break it with a speed mismatch"
            - name: IPv4 static routing and reading the routing table
              description: |-
                ## Purpose
                Every IP connectivity question starts with the routing table: how a router picks a route by longest prefix match, then administrative distance, then metric. Static routes, default routes and floating static backups make that logic visible. Being able to read a table at a glance is worth more marks than any single protocol.

                ## Milestones
                1. Each code and field in a show ip route output explained in writing.
                2. Static, default and floating static routes configured across three routers.
                3. Longest prefix match predicted for five destinations, then confirmed.
                4. A host route and a network route compared in the same table.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A three-router lab with static, default and floating static routes, plus five correct written longest prefix match predictions."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Annotate every field in one show ip route output"
                - "Configure static and default routes across three routers"
                - "Add a floating static backup and test it by shutting the main link"
                - "Predict the chosen route for five destinations before checking"
            - name: Single-area OSPFv2 configuration and verification
              description: |-
                ## Purpose
                OSPF is the dynamic routing protocol the CCNA examines in depth: neighbour adjacencies, router IDs, DR and BDR election on broadcast networks, cost and passive interfaces. Most OSPF faults come down to mismatched timers, areas or network types. Building and breaking a small single-area network teaches you which show command reveals each one.

                ## Milestones
                1. OSPF running across four routers with explicit router IDs.
                2. DR and BDR election predicted and then changed with interface priority.
                3. Passive interfaces and a default route advertised into OSPF.
                4. Three neighbour faults planted and fixed: timers, area and network type.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A four-router OSPF lab with set router IDs, a controlled DR election, a propagated default route and three neighbour faults fixed and logged."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "Enable OSPF on four routers with manually set router IDs"
                - "Change interface priority to control the DR election"
                - "Make user-facing interfaces passive and advertise a default route"
                - "Break adjacencies with a timer, area and network type mismatch"
            - name: IPv6 addressing, SLAAC and static routes
              description: |-
                ## Purpose
                IPv6 questions catch people who learned it last and lightly: address types, shortening rules, EUI-64, SLAAC and IPv6 static routes. Once the notation is familiar the logic is simpler than IPv4. Running a dual-stack lab alongside your IPv4 one keeps it from feeling like a separate subject.

                ## Milestones
                1. Global unicast, link-local, unique local and multicast addresses identified on sight.
                2. Ten addresses shortened and expanded correctly by hand.
                3. An EUI-64 interface ID calculated from a MAC address and checked on a router.
                4. A dual-stack lab with IPv6 static and default routes working end to end.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Ten correct hand shortenings, one verified EUI-64 calculation and a saved dual-stack lab with working IPv6 static routes."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Shorten and expand ten IPv6 addresses on paper"
                - "Calculate an EUI-64 interface ID and compare it with the router"
                - "Add IPv6 addressing to your existing three-router lab"
                - "Configure IPv6 static and default routes and ping end to end"
            - name: NAT, DHCP, DNS, NTP and other IP services
              description: |-
                ## Purpose
                IP services make up a cluster of small features that real networks cannot run without: static and overload NAT, DHCP pools and relays, DNS, NTP, Syslog, SNMP, QoS concepts and first hop redundancy. Each is quick to configure and easy to forget. One lab that layers them onto a small branch network ties them together.

                ## Milestones
                1. PAT configured so internal hosts reach an outside server, with translations verified.
                2. A DHCP pool on a router and a relay for a remote VLAN working.
                3. NTP and Syslog sending time and logs to a server in the lab.
                4. The purpose of HSRP, SNMP and QoS marking explained in a few lines each.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A branch lab with working PAT, DHCP with relay, NTP and Syslog, saved with a short written explanation of HSRP, SNMP and QoS."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Configure PAT on the edge router and check the translation table"
                - "Set up a DHCP pool and a helper address for a remote VLAN"
                - "Point every device at an NTP server and a Syslog server"
                - "Write three short paragraphs on HSRP, SNMP and QoS marking"
            - name: Wireless LAN fundamentals and controller set-up
              description: |-
                ## Purpose
                Wireless is a smaller part of the exam but a common weak spot: 2.4 and 5 GHz channels, SSIDs and BSSIDs, autonomous versus lightweight access points, CAPWAP and WPA2 and WPA3 security. Configuring a wireless LAN controller GUI in Packet Tracer covers the hands-on objectives. Most candidates have never touched a controller, so a single focused lab closes the gap.

                ## Milestones
                1. Non-overlapping 2.4 GHz channels and the main 802.11 standards listed from memory.
                2. Autonomous, lightweight and cloud-managed access point models compared in writing.
                3. A WLAN created on a controller with WPA2 or WPA3 personal security.
                4. A wireless client joined and its association verified.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A saved lab with a controller-managed WLAN using WPA2 or WPA3 and a joined client, plus a written comparison of access point models."
                cadence: phased
                effort_hours_estimate: "5"
              tasks:
                - "List the 802.11 standards and non-overlapping 2.4 GHz channels"
                - "Compare autonomous, lightweight and cloud-managed access points"
                - "Create a WLAN with WPA2 or WPA3 on a controller in Packet Tracer"
                - "Join a wireless client and confirm it on the controller"
            - name: Access control lists and Layer 2 security
              description: |-
                ## Purpose
                Security fundamentals questions mix concepts, such as threats, AAA and VPN types, with configuration: standard and extended ACLs, port security, DHCP snooping and dynamic ARP inspection. ACL placement and the implicit deny trip up more candidates than the syntax does. Writing each ACL on paper before typing it forces the logic first.

                ## Milestones
                1. A standard and an extended ACL written on paper, placed correctly and tested.
                2. A named ACL edited by sequence number without rewriting it.
                3. Port security limiting MAC addresses with a chosen violation mode.
                4. DHCP snooping and dynamic ARP inspection blocking a rogue server in the lab.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A lab with tested standard, extended and named ACLs, port security and DHCP snooping, each with a note of where it is applied and why."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Write a standard and an extended ACL on paper before configuring them"
                - "Apply each ACL and prove it blocks only the intended traffic"
                - "Configure port security with a two MAC limit and test a violation"
                - "Add a rogue DHCP server and stop it with DHCP snooping"
            - name: Device hardening with SSH, AAA and local users
              description: |-
                ## Purpose
                Any switch that still accepts Telnet with a shared password would fail a real audit, and the exam expects you to know how to fix it. Securing management access with SSH, local user accounts, enable secret, password encryption and login banners is a short, satisfying lab. Add the concepts of RADIUS and TACACS+ so you can compare them in a question.

                ## Milestones
                1. SSH version 2 enabled and Telnet disabled on every lab device.
                2. Local usernames with hashed secrets and an enable secret set.
                3. Management access limited to one subnet with an ACL on the VTY lines.
                4. RADIUS and TACACS+ compared in a short table.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Every device in a saved lab accepts only SSH from one management subnet with local users, plus a written RADIUS versus TACACS+ table."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Generate RSA keys and enable SSH version 2 on every lab device"
                - "Create local users with secrets and remove Telnet from the VTY lines"
                - "Restrict VTY access to the management subnet with an ACL"
                - "Write a short table comparing RADIUS and TACACS+"
            - name: Network automation, REST APIs and JSON
              description: |-
                ## Purpose
                Automation and programmability feel unfamiliar to many network candidates: controller-based and software-defined networking, REST API verbs, JSON structure and what tools like Ansible, Puppet and Chef do. You do not need to be a programmer, but you do need to read a JSON payload and know what a GET returns. Calling a public Cisco sandbox API once makes it all far less abstract.

                ## Milestones
                1. Traditional and controller-based networking compared, including the control and data planes.
                2. CRUD operations matched to HTTP verbs and response codes.
                3. Five JSON snippets read correctly, including nested objects and arrays.
                4. One GET request sent to a Cisco DevNet sandbox API and the response explained.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A written comparison of traditional and controller-based networks, five correctly read JSON samples and one saved API response from a DevNet sandbox."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Draw the control, data and management planes for both network styles"
                - "Match each HTTP verb to its CRUD action and common response codes"
                - "Read five JSON samples and identify every key, object and array"
                - "Send a GET request to a DevNet sandbox API and save the response"
            - name: CCNA exam readiness decision
              description: |-
                ## Purpose
                Booking too early wastes a fee and confidence, and booking too late lets knowledge fade while you keep studying for a test you are ready for. A written rule set in advance, such as three consecutive practice exams at a target score with no domain far behind, makes the decision objective. Decide the rule before you see the scores.

                ## Milestones
                1. A readiness rule written down with a target score and a minimum per domain.
                2. The last three practice exam results compared against the rule.
                3. A ready or not yet decision recorded with the date.
                4. If not yet, the two domains to fix and a date to decide again.

                ## Notes
                Practice bank scores vary in difficulty, so compare against that bank's own trend rather than its marketing claims about pass rates.
              priority: high
              deadlineOffsetDays: 120
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A written readiness rule and a dated ready or not yet decision based on the last three practice exams, with next steps recorded."
                cadence: one-shot
                effort_hours_estimate: "1"
              tasks:
                - "Write your readiness rule before your next practice exam"
                - "Put the last three practice scores beside the rule"
                - "Record a ready or not yet decision with today's date"
                - "Name the two domains to fix and a date to decide again if not ready"
            - name: Performance-based question and simulation practice
              description: |-
                ## Purpose
                Besides multiple choice, the CCNA can include drag and drop items, testlets and simulations where you configure or diagnose devices in a limited interface. These take longer and punish unfamiliarity with the format more than lack of knowledge. Practising the formats in your question bank and with Cisco's exam tutorial removes the surprise.

                ## Milestones
                1. Cisco's official exam tutorial on question formats watched or worked through.
                2. Twenty drag and drop and testlet items completed in your question bank.
                3. Five short simulations finished inside a self-imposed time limit.
                4. A note of which format costs you the most time.
              priority: medium
              frontmatter:
                mode: building
                output_kind: knowledge
                success_criteria: "The official exam tutorial reviewed, twenty drag and drop or testlet items and five timed simulations completed, with the slowest format noted."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Work through Cisco's official exam question format tutorial"
                - "Complete twenty drag and drop and testlet items in your bank"
                - "Do five short simulations with a strict time limit"
                - "Note which question format costs you the most time"
            - name: Exam pacing and no-review question strategy
              description: |-
                ## Purpose
                Cisco exams generally do not let you go back to a question once you have moved on, which changes how you should pace. You need a rule for when to make a best guess and move, and a time checkpoint every quarter of the exam. Rehearsing the strategy in practice exams makes it automatic under pressure.

                ## Milestones
                1. The current navigation and review rules confirmed from Cisco's exam policies.
                2. Quarter-point time checkpoints worked out for the current exam length.
                3. A personal rule written for when to guess and move on.
                4. The strategy used in two full practice exams and adjusted.
              priority: medium
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A written pacing plan with quarter-point checkpoints and a guess rule, tested in two practice exams and adjusted."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Confirm the current question navigation rules in Cisco's exam policies"
                - "Work out time checkpoints for each quarter of the exam"
                - "Write a rule for when to guess and move to the next question"
                - "Test the pacing plan in your next two practice exams"
            - name: Test centre or online proctored exam choice
              description: |-
                ## Purpose
                You can take the CCNA at a Pearson VUE test centre or online with OnVUE, and each has trade-offs: travel and fixed slots against a strict room scan, webcam rules and the risk of your own internet dropping. Candidates in shared homes or with unreliable power often do better at a centre. Choosing early lets you rehearse the right environment.

                ## Milestones
                1. The nearest Pearson VUE test centres and their available days listed.
                2. The OnVUE system test run on the machine and network you would use.
                3. Room, noise, power and internet risks noted for sitting at home.
                4. A decision recorded and practice exams planned in that setting.
              priority: medium
              deadlineOffsetDays: 90
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A recorded choice between test centre and online delivery, with the OnVUE system test result and the nearest centre's availability noted."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Search Pearson VUE for the nearest centres offering the CCNA"
                - "Run the OnVUE system test on your exam laptop and network"
                - "List the noise, power and internet risks of sitting at home"
                - "Record your choice and sit your next mock in that setting"
            - name: Employer sponsorship and exam discount check
              description: |-
                ## Purpose
                Many employers, colleges and Networking Academy courses pay for or discount the CCNA voucher, and some partners and events offer reduced pricing. Asking before you pay can save the whole fee, and a short written case also tells your manager you are building skills they can use. Check what any sponsorship asks in return, such as staying for a period.

                ## Milestones
                1. Your employer's or college's training budget and voucher policy found.
                2. Networking Academy and other legitimate discount routes checked.
                3. A one-paragraph case written linking the CCNA to current or planned work.
                4. A yes, no or partial answer recorded with any conditions attached.
              priority: low
              deadlineOffsetDays: 45
              frontmatter:
                mode: service
                output_kind: decision
                success_criteria: "A recorded answer on sponsorship or discount, with any conditions, after a written case was sent to the decision maker."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Find your employer's or college's policy on certification vouchers"
                - "Check whether your Networking Academy course includes an exam discount"
                - "Write one paragraph linking the CCNA to work your team needs done"
                - "Record the answer and any conditions such as a stay period"
            - name: Weak domain remediation plan
              description: |-
                ## Purpose
                If practice scores stall, the usual cause is one or two domains that never got proper lab time, often IP services or automation. A focused plan for those domains, with specific objectives, labs and a retest date, beats rereading everything. Treat it as a short sprint, then return to the main calendar.

                ## Milestones
                1. The two weakest domains identified from the mistake log and practice scores.
                2. The specific objectives behind the low scores listed.
                3. A three-week plan of reading, labs and targeted questions for each.
                4. A retest showing the domain score improved.

                ## Notes
                Start from the **Remediation plan** template.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: artifact
                success_criteria: "A written remediation plan for the two weakest domains and a retest result showing each score has improved."
                cadence: phased
                effort_hours_estimate: "15"
              tasks:
                - "Pick the two weakest domains from your scores and mistake log"
                - "List the objectives behind each low score"
                - "Plan three weeks of labs and targeted questions for each domain"
                - "Check progress on the remediation plan and adjust it @recurring(monthly:5)"
            - name: Booking the CCNA exam with Pearson VUE
              description: |-
                ## Purpose
                Nothing sharpens study like a booked date, but one booked carelessly can clash with work shifts, college exams or travel. Booking through your Cisco certification account, with your legal name matching your ID exactly, avoids being turned away. Leave room for the rescheduling window in the current policy.

                ## Milestones
                1. A Cisco certification account created with your name exactly as on your ID.
                2. A date chosen that avoids work, college and family clashes.
                3. The exam booked and the confirmation saved.
                4. The rescheduling and cancellation deadlines put in your calendar.

                ## Notes
                Name mismatches between the booking and the ID are a common reason candidates cannot sit. Check middle names and accents.
              priority: high
              deadlineOffsetDays: 130
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "The CCNA exam is booked under a name matching your ID, with confirmation saved and the reschedule deadline in your calendar."
                cadence: one-shot
                effort_hours_estimate: "1"
              tasks:
                - "Create or check your Cisco certification account name against your ID"
                - "Choose an exam date clear of work, college and family commitments"
                - "Book the CCNA through Pearson VUE and save the confirmation"
                - "Put the reschedule and cancellation deadlines in your calendar"
            - name: Final fourteen days before the CCNA
              description: |-
                ## Purpose
                The last two weeks are for consolidation, not new material: a final full practice exam, the mistake log, the flashcard deck and quick labs on the objectives that still wobble. Sleep and a steady routine matter more now than squeezing in another video course. A written plan stops panic study the night before.

                ## Milestones
                1. A day-by-day plan for the final fourteen days written.
                2. One last full timed practice exam sat about a week out.
                3. The mistake log and weakest flashcards reviewed twice.
                4. Study stopped by early evening the day before the exam.
              priority: medium
              deadlineOffsetDays: 150
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A day-by-day fourteen-day plan followed, including one final practice exam a week out and two passes through the mistake log."
                cadence: phased
                effort_hours_estimate: "20"
              tasks:
                - "Write a day-by-day plan for the last fourteen days"
                - "Sit a final full practice exam about seven days before"
                - "Review the whole mistake log twice in the final week"
                - "Stop studying by early evening the day before the exam"
            - name: CCNA exam day run sheet
              description: |-
                ## Purpose
                Exam day problems are rarely about networking: wrong ID, late arrival, a laptop update during an online check-in, or hunger by the second hour. A one-page run sheet covering travel, ID, food and the check-in steps removes avoidable risks. Read it the night before and follow it in the morning.

                ## Milestones
                1. Travel time to the centre, or OnVUE check-in steps, written down.
                2. Two forms of acceptable ID checked against current Pearson VUE rules.
                3. Food, water and a break plan noted for before and after the exam.
                4. The run sheet followed and the exam sat.
              priority: high
              deadlineOffsetDays: 155
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A one-page run sheet with travel or check-in steps, checked ID and timings, followed on the day and the exam sat."
                cadence: one-shot
                effort_hours_estimate: "1"
              tasks:
                - "Check the current Pearson VUE ID rules and lay out your ID"
                - "Write travel times or the OnVUE check-in steps on one page"
                - "Turn off automatic updates on the exam laptop if sitting online"
                - "Plan a light meal and arrive or check in thirty minutes early"
            - name: CCNA retake plan after a failed attempt
              description: |-
                ## Purpose
                Plenty of working network engineers needed two attempts at the CCNA, and the score report shows how you did in each domain. Reading it calmly within a few days, while the exam is fresh, tells you exactly where to focus. Respect the current retake waiting period and rebook only when practice scores clear your readiness rule again.

                ## Milestones
                1. The score report saved and each domain's performance noted.
                2. Question styles and topics you remember struggling with written down within two days.
                3. A four to six week plan aimed at the weakest domains.
                4. A retake booked after the waiting period and a passed readiness check.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A written retake plan based on the score report and fresh notes, with a rebooked date after the waiting period and a passed readiness check."
                cadence: phased
                effort_hours_estimate: "30"
              tasks:
                - "Save the score report and note each domain's result"
                - "Write down every topic you remember struggling with within two days"
                - "Check the current retake waiting period in the exam policies"
                - "Plan four to six weeks on the weakest domains before rebooking"
            - name: Certificate, digital badge and CV update after passing
              description: |-
                ## Purpose
                Passing is only useful if recruiters and managers can see and verify it. Accepting the digital badge, downloading the certificate, recording the certification ID and adding it to your CV and professional profiles takes an hour. Do it within a week while you still remember the labs you can talk about in interviews.

                ## Milestones
                1. The digital badge accepted and the certificate downloaded.
                2. The certification ID, pass date and expiry date recorded in one place.
                3. CV and professional profiles updated with the CCNA and two labs you can discuss.
                4. Your manager or tutor told, with a request for any network work you could take on.
              priority: low
              deadlineOffsetDays: 165
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "The badge is accepted, the certificate and ID are saved with the expiry date, and your CV and profiles show the CCNA."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Accept the CCNA digital badge from the email Cisco sends"
                - "Save the certificate, certification ID, pass date and expiry date"
                - "Add the CCNA and two discussable labs to your CV and profiles"
                - "Tell your manager or tutor and ask for real network tasks"
            - name: CCNA recertification before the expiry date
              description: |-
                ## Purpose
                Your CCNA expires after a set period, currently three years, and lapsing means sitting the exam again from scratch. Cisco lets you recertify by passing exams or earning continuing education credits from approved training, and work toward the CCNP can count. Tracking the date and credits from the day you pass makes renewal routine.

                ## Milestones
                1. The expiry date and current recertification options checked on Cisco's site.
                2. A route chosen: continuing education credits, a higher exam, or a retake.
                3. Credits or exams logged as they are earned.
                4. Recertification completed at least three months before expiry.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "The CCNA is recertified at least three months before expiry, with each credit or exam used recorded with its date."
                cadence: cyclic
              tasks:
                - "Check the current CCNA recertification options on the Cisco site"
                - "Choose between continuing education credits, a higher exam or a retake"
                - "Review credits earned and months left before expiry @recurring(yearly)"
                - "Complete recertification three months before the expiry date"
            - name: CCNA plan for a full-time student
              description: |-
                ## Purpose
                Students on a computing or networking course, or in a Networking Academy class, can often earn the CCNA before graduating, which makes a real difference to entry-level applications. The challenge is fitting it around coursework deadlines and exam seasons. Aligning CCNA topics with what your modules already cover saves hours, and the academy may offer an exam discount.

                ## Milestones
                1. Your course modules mapped against CCNA domains to find overlap.
                2. A target exam date chosen outside your college or university exam periods.
                3. Study blocks placed around coursework deadlines for the term.
                4. Any academy exam discount or college lab access confirmed.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A term plan that maps course modules to CCNA domains, avoids college exam periods and shows a target exam date."
                cadence: phased
                effort_hours_estimate: "3"
              tasks:
                - "Map each course module to the CCNA domains it overlaps"
                - "Choose an exam date outside your college exam periods"
                - "Ask your lecturer about lab access and any exam discount"
                - "Check the CCNA plan against the term's coursework deadlines @recurring(monthly:3)"
            - name: CCNA plan for a help desk technician moving to networks
              description: |-
                ## Purpose
                Help desk and desktop support staff are the classic CCNA candidates: they already see network tickets, but escalate them. Using work as a lab, by asking to shadow the network team, reading real switch configs with permission and noting the tickets you could now solve, speeds learning and builds the internal case for a move. Be careful never to change production kit without authorisation.

                ## Milestones
                1. Permission obtained to shadow or read configs from the network team.
                2. Ten real network tickets logged with the CCNA topic each one touches.
                3. One ticket diagnosed further than before using show commands, with permission.
                4. A conversation held with your manager about a path into the network team.
              priority: medium
              frontmatter:
                mode: building
                output_kind: knowledge
                success_criteria: "Ten real network tickets mapped to CCNA topics, shadowing permission granted and a recorded conversation with your manager about moving into networks."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Ask the network team if you can shadow them or read configs"
                - "Log one network ticket from work with its CCNA topic @recurring(weekly:thu)"
                - "Diagnose one ticket further with read-only show commands, with permission"
                - "Book a conversation with your manager about joining the network team"
            - name: CCNA for a systems or cloud engineer
              description: |-
                ## Purpose
                Systems administrators, developers and cloud engineers often study the CCNA to stop guessing when a VPC route, a firewall rule or a VLAN on a hypervisor misbehaves. You will move quickly through IP basics but may need extra time on switching, spanning tree and the Cisco CLI. Linking each topic to its cloud or data centre equivalent makes it stick.

                ## Milestones
                1. Domains you can skim and domains needing full study marked on the checklist.
                2. A table linking CCNA concepts to cloud equivalents such as route tables and security groups.
                3. Extra lab time scheduled for switching, spanning tree and IOS.
                4. One real work problem explained using CCNA knowledge.
              priority: low
              frontmatter:
                mode: building
                output_kind: knowledge
                success_criteria: "A marked domain checklist, a CCNA to cloud concept table of at least ten rows and one work problem written up using CCNA knowledge."
                cadence: phased
                effort_hours_estimate: "5"
              tasks:
                - "Mark which CCNA domains you can skim and which need full study"
                - "Build a table linking ten CCNA concepts to cloud equivalents"
                - "Schedule extra lab hours for switching, spanning tree and IOS"
                - "Write up one past work problem using what the CCNA taught you"
            - name: CCNA study around a full-time job and family
              description: |-
                ## Purpose
                Parents and carers working full time rarely get a free evening, so the plan has to fit short, predictable slots: a lunch break for flashcards, a commute for videos, and one protected lab session a week. Agreeing that session with the household matters as much as the study itself. A longer timeline, such as six to nine months, is realistic rather than a failure.

                ## Milestones
                1. Short study slots found in a typical week, including lunch and commute.
                2. One protected lab session a week agreed with the household.
                3. A realistic exam month set allowing for school holidays and busy periods.
                4. A month completed with at least three quarters of the slots kept.
              priority: medium
              frontmatter:
                mode: building
                output_kind: habit
                success_criteria: "A weekly plan of short slots plus one agreed lab session, held for a month with at least three quarters of the slots kept."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "List every fifteen-minute gap in a typical week"
                - "Agree one protected lab evening a week with your household"
                - "Set an exam month that avoids school holidays"
                - "Review next week's study slots with your household @recurring(weekly:sun)"
            - name: CCNA from the Caribbean with power and internet backups
              description: |-
                ## Purpose
                Candidates in Trinidad and Tobago, Jamaica, Barbados, Guyana and across the OECS may have limited test centre options and live with power cuts, storm season and unreliable home broadband. Planning around those, by checking which centres run Cisco exams, keeping offline study material and having a backup power and data plan, protects both study time and exam day. Price the voucher in local currency early, since exchange rates and card limits can bite.

                ## Milestones
                1. Pearson VUE centres offering the CCNA in your country or nearby listed.
                2. Course videos and labs downloaded for offline study.
                3. A backup power source and mobile data plan tested for a two-hour session.
                4. The voucher cost checked in local currency with a working payment method.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A written plan naming the nearest centres, offline study material, a tested two-hour power and data backup and a checked payment route."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Search Pearson VUE for CCNA centres in your country and nearby islands"
                - "Download course videos and labs for offline study"
                - "Test a two-hour session on backup power and mobile data"
                - "Charge the power bank and test the backup hotspot @recurring(monthly:26)"
            - name: Running a CCNA study group
              description: |-
                ## Purpose
                A study group of three to six people, from a class, a workplace or an online community, keeps everyone accountable and turns lab troubleshooting into a game. It works when someone sets a rhythm, a topic per week and a rule that each member presents one lab. Groups that only chat tend to fade within a month.

                ## Milestones
                1. Three to six members recruited with similar target exam months.
                2. A weekly session time and a topic order matching the exam domains agreed.
                3. Each member presenting at least one lab or fault to the group.
                4. Eight sessions held with attendance recorded.
              priority: low
              frontmatter:
                mode: service
                output_kind: habit
                success_criteria: "Eight weekly sessions held with three or more members, each member presenting at least one lab."
                cadence: rolling
              tasks:
                - "Invite three to five people with a similar target exam month"
                - "Agree a weekly time and a topic order following the exam domains"
                - "Run this week's session with one member presenting a lab @recurring(weekly:wed)"
                - "Keep a simple attendance and topics record"
            - name: Small branch office network design capstone
              description: |-
                ## Purpose
                Once the domains are covered, designing a complete branch network from a written brief shows whether you can combine them: an addressing plan, VLANs, trunks, OSPF to head office, NAT, DHCP, wireless, ACLs and SSH. It is the best final rehearsal for simulations and a strong interview talking point. Write the brief first, then build to it.

                ## Milestones
                1. A one-page brief describing users, departments, guest wireless and a head office link.
                2. An IPv4 and IPv6 addressing plan with VLSM and a diagram.
                3. The full design built and verified in the lab.
                4. A short design document explaining each choice.

                ## Notes
                Start the build from blank devices, not an earlier lab, so you prove you can do it end to end.
              priority: medium
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "A written brief, addressing plan, diagram, working lab file and design document for a branch network that uses at least eight CCNA features."
                cadence: phased
                effort_hours_estimate: "15"
              tasks:
                - "Write a one-page brief for a forty-user branch office"
                - "Draw the topology and an addressing plan with VLSM and IPv6"
                - "Build the design from blank devices and verify every feature"
                - "Write a design document explaining each choice in a few lines"
            - name: CCNA lab portfolio for a first network role
              description: |-
                ## Purpose
                Entry-level network applicants with the CCNA are common, so evidence of hands-on work stands out. A small public portfolio of three to five well-documented labs, with diagrams, configs stripped of passwords and a short write-up of a fault you fixed, gives interviewers something concrete to ask about. It also shows you can document, which network teams value.

                ## Milestones
                1. Three to five labs chosen that cover different domains.
                2. Each lab written up with a diagram, goal, configs and the fault you fixed.
                3. All passwords, secrets and keys removed from the published configs.
                4. The portfolio link added to your CV and profiles.

                ## Notes
                Never publish configs from an employer's network, even with addresses changed.
              priority: low
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "A public portfolio of at least three documented CCNA labs with diagrams and sanitised configs, linked from your CV."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Pick three to five labs from your notebook covering different domains"
                - "Draw a clean diagram for each lab"
                - "Remove every password, secret and key from the configs"
                - "Publish the write-ups and add the link to your CV"
            - name: Python config backup script with Netmiko
              description: |-
                ## Purpose
                Writing a short script that logs into each lab device over SSH and saves its running config makes the automation domain real and is a common first automation task in network teams. Netmiko handles the SSH session, so the script can be under fifty lines. Run it only against your own lab, never against devices you are not authorised to touch.

                ## Milestones
                1. Python and Netmiko installed and an SSH session opened to one lab device.
                2. A script that reads a device list and saves each running config with a date.
                3. Credentials kept out of the script in environment variables or a prompt.
                4. The script run against at least three lab devices successfully.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A working Python script that backs up running configs from at least three lab devices into dated files, with no credentials in the code."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Install Python and Netmiko in a virtual environment"
                - "Open an SSH session to one emulated lab device from Python"
                - "Ask the agent to review your backup script for hard-coded credentials"
                - "Run the script against three lab devices and check the dated files"
---

# CCNA Certification

This area is for students and engineers working toward Cisco's CCNA, the associate exam that tests whether you can address, build and fix a small enterprise network from the command line. It starts with foundations (the official exam topics and policies, a skills audit, a baseline quiz, Packet Tracer, lab and course choices, subnetting and a dated plan), then the weekly study, drill and lab machinery, the skills behind each exam domain from VLANs and spanning tree to OSPF, IPv6, NAT, wireless, ACLs and REST APIs, the decisions about readiness and where to sit the exam, booking and exam day, plans for full-time students, help desk technicians, systems engineers, busy parents, Caribbean candidates and study groups, and specialist work such as a branch office design and a config backup script.

The rhythm is study blocks on set weekdays, a short daily subnetting drill and flashcard round, a weekly lab, config archive and mistake review, a monthly timed practice exam and troubleshooting challenge, and a quarterly check for exam topic changes. The Skills matrix, Purchase decision, Metrics log and Remediation plan templates pair with it. Installing adds all 50 projects as active, so archive the ones that are not for you yet.
