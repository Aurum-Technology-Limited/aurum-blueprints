---
id: professions-trades.cybersecurity-career-entry
name: Cybersecurity Career Entry
description: "The route into a first security role, from networking and Linux basics, a home lab and capture the flag practice to entry certifications, a portfolio, interviews and the first 90 days."
category: personal
version: 1.0.0
tags: [professions-trades, cybersecurity-career-entry, everyone, student, engineer, soc-analyst, certifications, home-lab]
author: Aurum Technology
starter_structure:
  templates:
    - development-plan
    - content-pipeline
    - job-application
    - risk-register
    - portfolio-piece
    - resume
    - onboarding-30-60-90
  pillars:
    - name: Professions & Trades
      emoji: "🧰"
      description: "Specific careers from first interest to established practitioner: entry qualifications, training and apprenticeships, licensing and registration, the first job, specialising, and working abroad, across health, law, teaching, engineering, the skilled trades, public service, hospitality and more."
      pillarFrontmatter:
        review_cadence: quarterly
      areas:
        - name: Cybersecurity Career Entry
          description: "Breaking into cybersecurity: networking and systems foundations, entry certifications, home labs, capture the flag practice and the first security role."
          projects:
            - name: Mapping the cybersecurity job families
              description: |-
                ## Purpose
                Cybersecurity is not one job: a security operations centre analyst watches alerts on shifts, a governance and risk analyst writes policies and runs audits, a penetration tester attacks systems with permission, and a cloud security engineer fixes misconfigurations in code. Picking a first target role before buying courses keeps every later choice, from certification to home lab, pointed the same way. Most first security jobs are SOC analyst, junior GRC or security-minded IT roles, so start by reading what those really involve.

                ## Milestones
                1. Twenty real entry-level security job adverts collected from at least two countries or remote job boards.
                2. Each advert tagged by job family, required certifications and years of experience asked for.
                3. A one-page comparison of SOC analyst, GRC analyst and one other family on daily work, pay and entry route.
                4. A first target role chosen and written at the top of your study notes.

                ## Notes
                Adverts asking for five years of experience for an entry title are common. Count the skills that repeat across many adverts rather than the wish list in any one of them.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "Twenty adverts are tagged by job family and a first target role is written down with a two-sentence reason."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Save ten entry-level security job adverts from local and remote job boards"
                - "Save ten more from a second country you could realistically work for"
                - "Tag each advert by job family and list the skills that appear in most of them"
                - "Ask two people working in security what an ordinary week looks like in their role"
                - "Write down your first target role and the reason in two sentences"
            - name: Skills baseline against a target job advert
              description: |-
                ## Purpose
                Before studying anything, it pays to know which gaps are real. Scoring yourself against the skills in your saved adverts, from subnetting to reading a Windows event log, turns a vague feeling of not being ready into a short ranked list. Rescore the same list later and the progress becomes visible.

                ## Milestones
                1. A list of 15 to 25 skills taken from the adverts for your target role.
                2. Each skill rated from 0 to 3 with one line of evidence for the score.
                3. The five biggest gaps ranked by how often they appear in adverts.
                4. The baseline saved so the same list can be rescored in three months.
              priority: medium
              deadlineOffsetDays: 21
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A scored list of at least 15 skills exists, with evidence for each score and the five largest gaps ranked."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Copy the recurring skills from your saved adverts into one list"
                - "Score yourself from 0 to 3 on each skill and note the evidence"
                - "Rank the five biggest gaps by how often adverts ask for them"
                - "Set a reminder to rescore the same list in three months"
            - name: Choosing a learning route into security
              description: |-
                ## Purpose
                There are four realistic routes in: a computing or cybersecurity degree, a college diploma or associate degree, a structured bootcamp or certificate programme, or self-study built around certifications while working in IT. Each costs different amounts of money and time, and employers in the Caribbean, the UK, the US and Canada weigh them differently. Comparing them against your savings, hours and target role prevents an expensive course that leads nowhere.

                ## Milestones
                1. Four routes compared on cost, duration, entry requirements and what employers in your target market accept.
                2. Every paid programme checked for accreditation, named graduate outcomes and refund terms.
                3. A route chosen, with a written fallback if money or time runs short.
                4. Application or enrolment dates for the chosen route noted in your calendar.

                ## Notes
                Be wary of bootcamps that promise a large salary in twelve weeks or guarantee placement. Ask for named graduate outcomes and speak to two former students before paying anything.
              priority: high
              deadlineOffsetDays: 45
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A learning route is chosen after comparing four options on cost and outcomes, with a written fallback and enrolment dates recorded."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "List the degree, diploma, bootcamp and self-study options open to you"
                - "Write down the total cost and weekly hours each route demands"
                - "Ask two former students of any paid programme about their outcomes"
                - "Check the refund and deferral terms before paying a deposit"
                - "Record your chosen route and the fallback plan"
            - name: Home security lab on one laptop
              description: |-
                ## Purpose
                Almost every entry interview asks what you have built or broken, and a home lab is where that answer comes from. A laptop with 16 GB of memory can run a hypervisor, an attacker machine, a deliberately vulnerable target and a Windows server on an isolated virtual network, at no cost beyond the hardware. Building it early means every later skill project has somewhere safe to happen.

                ## Milestones
                1. A free hypervisor installed and an internal network created that cannot reach your home network.
                2. An attacker distribution, a deliberately vulnerable target and a Windows evaluation machine running.
                3. Clean snapshots taken of every machine.
                4. A diagram of the lab network saved in your notes.

                ## Notes
                Keep vulnerable machines off your home network and never expose them to the internet. If one needs updates, switch it to NAT briefly, update it, then switch it back. Eight gigabytes of memory works if you run fewer machines at once.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Three virtual machines run on an isolated network with clean snapshots, and a lab diagram is saved in your notes."
                cadence: one-shot
                effort_hours_estimate: "10"
              tasks:
                - "Check your laptop memory, storage and whether virtualisation is enabled"
                - "Install a free hypervisor and create an isolated internal network"
                - "Build an attacker machine, a vulnerable target and a Windows evaluation server"
                - "Take a clean snapshot of each machine and draw the lab network"
                - "Update the lab machines and refresh the clean snapshots @recurring(monthly:9)"
            - name: Legal and ethical limits for practising security skills
              description: |-
                ## Purpose
                Scanning or logging in to a system you do not own without written permission can be a crime under computer misuse or cybercrime laws, from the UK Computer Misuse Act to Jamaica's Cybercrimes Act, even when nothing is damaged. Writing your own rules before you learn offensive tools protects your record, and a clean record matters because many security employers run background checks. The rule of thumb is simple: your own lab, authorised platforms and written scope only.

                ## Milestones
                1. The computer misuse or cybercrime law that applies where you live identified and its main offences summarised in plain words.
                2. A one-page personal code listing where you may practise and what you will never touch.
                3. The terms of service of each practice platform you use read and saved.
                4. A rule recorded for what to do if you stumble on a real vulnerability.

                ## Notes
                This is organisation, not legal advice. If you are unsure whether something is allowed, the answer is not yet: ask the system owner in writing, or a lawyer.
              priority: high
              deadlineOffsetDays: 14
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A one-page personal practice code is saved, naming the law that applies where you live and the platforms you are authorised to use."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Look up the computer misuse or cybercrime law in your country"
                - "Write a one-page code of where you may and may not practise"
                - "Save the terms of service for every practice platform you use"
                - "Note who you would report a real vulnerability to and how"
            - name: Personal security hygiene before defending others
              description: |-
                ## Purpose
                Interviewers notice when a security candidate reuses passwords or has no multi-factor sign-in, and attackers notice sooner. Tidying your own accounts, devices and backups gives you hands-on experience of the controls you will later recommend, and keeps your lab work apart from your banking and email. It takes an afternoon.

                ## Milestones
                1. A password manager in use, with unique passwords on email, banking and study accounts.
                2. Multi-factor sign-in on every account that offers it, using an app or hardware key rather than text messages where possible.
                3. Lab and study accounts separated from personal ones.
                4. Device updates, disk encryption and a tested backup in place on your main laptop and phone.
              priority: medium
              deadlineOffsetDays: 14
              frontmatter:
                mode: building
                output_kind: habit
                success_criteria: "Every important account uses a unique password and app-based multi-factor sign-in, and one file has been restored from backup as a test."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Install a password manager and move your email password into it first"
                - "Turn on app-based multi-factor sign-in for email, banking and cloud storage"
                - "Create separate accounts for lab and study platforms"
                - "Turn on disk encryption and test restoring one file from backup"
                - "Read the password manager security report and fix flagged items @recurring(quarterly)"
            - name: Security study notes and knowledge base
              description: |-
                ## Purpose
                Security learning produces hundreds of commands, port numbers, tool flags and half-solved lab steps, and most of it is forgotten within a month if it lives in browser tabs. A searchable notes system organised by topic, with one page per tool and one per technique, becomes your revision guide, your interview preparation and the raw material for writeups. Set it up once, then add to it every session.

                ## Milestones
                1. A notes app chosen that supports search, code blocks and offline access.
                2. Top-level sections created for networking, Linux, Windows, web, detection, tools and exam objectives.
                3. A standard page layout for tools covering purpose, common commands and a lab example.
                4. Ten pages written from things you already know.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A searchable notes system holds at least ten pages across six topic sections, using one standard tool page layout."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Pick a notes app with search, code blocks and offline access"
                - "Create sections for networking, Linux, Windows, web, detection and tools"
                - "Write a page layout for tool notes and save it as a reusable page"
                - "Fill ten pages with commands and concepts you already know"
            - name: Twelve-month plan to the first security role
              description: |-
                ## Purpose
                Most people who break into security take between six months and two years, and the ones who make it usually had a plan with dates rather than a list of courses. A written twelve-month plan sets the order of fundamentals, the first certification, portfolio projects and the job search, sized to the hours you genuinely have each week. Reviewing it monthly keeps it honest.

                ## Milestones
                1. Weekly study hours set from your real timetable, work and family commitments.
                2. The year divided into quarters, each with one main skill, one project and one checkpoint.
                3. The first certification exam pencilled into a specific month.
                4. The month your job search starts fixed, with the portfolio target it depends on.

                ## Notes
                Start from the **Development plan** template. Eight focused hours a week, kept up all year, beats twenty hours for a fortnight followed by nothing.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A dated twelve-month plan exists with weekly hours, quarterly goals, an exam month and a job search start month."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Count the hours you can study each week without losing sleep or family time"
                - "Assign one main skill, one project and one checkpoint to each quarter"
                - "Pencil in the month for your first certification exam"
                - "Choose the month your job applications will start"
                - "Compare progress with the plan and adjust the coming month @recurring(monthly:28)"
            - name: Budget for certifications, labs and training
              description: |-
                ## Purpose
                Exam vouchers, practice tests, lab subscriptions and retake fees add up quickly, and for anyone paid in Caribbean dollars or living on a student budget the exchange rate can double the pain. A written budget separates what is worth paying for from the many good free resources, and shows when the money for each exam will be there. It also flags student discounts, employer sponsorship and scholarships worth chasing.

                ## Milestones
                1. Every planned cost listed in your own currency, including exam retakes and any card or transfer fees.
                2. A free alternative found for each paid resource where one exists.
                3. Student, academic or regional discounts and sponsorships checked.
                4. A monthly saving amount set so each exam is paid for before its booking date.
              priority: medium
              deadlineOffsetDays: 30
              frontmatter:
                mode: research
                output_kind: artifact
                success_criteria: "A one-year training budget in your own currency lists every exam and subscription with a monthly saving amount set against it."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "List every exam, lab subscription and course you expect to pay for this year"
                - "Convert each cost to your currency, including card and transfer fees"
                - "Find a free alternative for each paid resource where one exists"
                - "Ask your college or employer about voucher discounts or sponsorship"
                - "Set the monthly amount you will put aside for exam fees"
            - name: Weekly hands-on lab sessions
              description: |-
                ## Purpose
                Reading about attacks and defences feels productive, but employers hire people who have done the thing at a keyboard. Two fixed lab sessions a week, each ending with a short written log, build the hands-on hours that interviews probe and give you material for writeups. Keep each session small: one technique, one tool, one finding.

                ## Milestones
                1. Two weekly lab slots fixed in your calendar.
                2. A lab log page with date, objective, what worked, what failed and the next step.
                3. At least eight sessions logged in the first month.
                4. A list of techniques practised that you can point to in interviews.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "The lab log shows at least eight sessions a month, each with an objective, a result and a next step."
                cadence: rolling
              tasks:
                - "Block two lab sessions a week in your calendar"
                - "Create a lab log page with objective, result and next step columns"
                - "Run a lab session on one technique and log the outcome @recurring(weekly:tue,sat)"
                - "Pick next week's two lab objectives from your gap list"
            - name: Threat news and advisory reading routine
              description: |-
                ## Purpose
                Hiring managers routinely ask what security story caught your eye this month, and analysts need to know which new vulnerabilities their employer is exposed to. A short weekly routine of government advisories, a national or regional incident response team feed and two reputable news sources builds that awareness without drowning in headlines. Summarising one item in your own words each month turns reading into a skill.

                ## Milestones
                1. Five sources chosen, including a government advisory feed and your country's or region's incident response team if it publishes.
                2. A weekly 30-minute reading slot in place.
                3. A running page of notable incidents and vulnerabilities with dates.
                4. One 200-word summary written each month in your own words.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A dated incident page is updated weekly and holds at least one 200-word summary for each of the last three months."
                cadence: rolling
              tasks:
                - "Choose five sources, including a government advisory feed and a regional response team"
                - "Read the week's advisories and note anything affecting common software @recurring(weekly:mon)"
                - "Write a 200-word summary of one incident or vulnerability @recurring(monthly:14)"
                - "Add notable items to your running page of incidents with dates"
            - name: Capture the flag practice rhythm
              description: |-
                ## Purpose
                Capture the flag challenges compress real security problems into puzzles with a clear answer, which makes them the fastest feedback loop a beginner can get. A weekly guided room on a learning platform plus one live competition a month, even when you solve only one challenge, builds speed, tool familiarity and the habit of writing up what worked. Start with beginner categories such as forensics, web and cryptography.

                ## Milestones
                1. Accounts set up on one guided learning platform and one CTF event calendar.
                2. One guided room completed each week for two months.
                3. Three live CTF events entered, with at least one challenge solved in each.
                4. A note added to your knowledge base for every new technique.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Eight guided rooms and three live CTF events are logged within two months, with a knowledge base note for each new technique."
                cadence: rolling
              tasks:
                - "Sign up to a guided learning platform and a CTF event calendar"
                - "Complete one guided room and note the technique used @recurring(weekly:thu)"
                - "Enter one online CTF and attempt at least two challenges @recurring(monthly:20)"
                - "Read other players' writeups for one challenge you could not solve"
            - name: Security writeup and blog pipeline
              description: |-
                ## Purpose
                A public writeup of a retired lab machine or a CTF challenge shows an employer how you think, in a way a certificate cannot. A simple pipeline from lab notes to draft to published post, one a month, builds a body of evidence by the time you apply. Write for a beginner one step behind you: explaining clearly is itself the skill being judged.

                ## Milestones
                1. A free blog or repository set up under your real name or a professional handle.
                2. A writeup layout covering scenario, approach, dead ends, solution and lessons.
                3. Three writeups published, each on a retired or explicitly permitted challenge.
                4. Every writeup linked from your CV and profile.

                ## Notes
                Start from the **Content pipeline** template. Never publish solutions to active exam labs or live competitions: most platforms forbid it and it can cost you a certification.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: artifact
                success_criteria: "At least three writeups on permitted challenges are published and linked from your CV."
                cadence: rolling
              tasks:
                - "Set up a free blog or repository for writeups"
                - "Write a reusable writeup layout with scenario, approach, dead ends and lessons"
                - "Check the platform rules before publishing any solution"
                - "Publish one writeup from your lab or CTF notes @recurring(monthly:24)"
            - name: Security job application tracker
              description: |-
                ## Purpose
                Entry security roles attract hundreds of applicants and many employers never reply, so a job search without a tracker turns into guesswork about who was contacted and when. A tracker with the role, source, contact, tailored CV version and next action makes a steady weekly rhythm possible and shows which kinds of application get responses. Treat it as a pipeline, not a lottery.

                ## Milestones
                1. A tracker with role, employer, source, date sent, CV version, contact and next action.
                2. A weekly application slot kept for at least eight weeks.
                3. Responses reviewed after twenty applications to see which roles and sources work.
                4. A follow-up sent at seven to ten days for every application with a named contact.

                ## Notes
                Start from the **Job application** template.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "The tracker shows at least three tailored applications a week for eight weeks, with response rates reviewed after twenty."
                cadence: rolling
              tasks:
                - "Build an application tracker with source, CV version and next action columns"
                - "Send three tailored applications and log them in the tracker @recurring(weekly:wed)"
                - "Follow up on applications older than ten days that have a named contact"
                - "Review response rates after twenty applications and adjust the target roles"
            - name: Security community and network upkeep
              description: |-
                ## Purpose
                Plenty of first security jobs come through someone who has seen your work or met you, not through a cold application. Showing up regularly at a local chapter of a professional body, a BSides or OWASP meetup, a university club or an online Caribbean security community, and helping where you can, builds those relationships slowly and genuinely. Aim to be useful, not to collect contacts.

                ## Milestones
                1. Two communities joined, one local or regional and one online.
                2. One event or online meetup attended each month.
                3. Five working security people you could ask a question of by name.
                4. One contribution made, such as a talk, a shared writeup or a newcomer helped.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Two communities are joined, one event a month is attended, and five named security contacts are recorded."
                cadence: rolling
              tasks:
                - "Find a local professional chapter, meetup or student club and one online community"
                - "Attend one meetup or online session and note two people you met @recurring(monthly:17)"
                - "Send a short thank-you or follow-up to someone who helped you"
                - "Offer one small contribution, such as answering a newcomer's question"
            - name: Daily flashcards for ports, protocols and exam objectives
              description: |-
                ## Purpose
                Security exams and technical interviews expect instant recall of common ports, protocol behaviour, attack names and control types, and recall fades fast without repetition. Ten minutes a day with a spaced-repetition app keeps hundreds of facts available while your real study time goes on hands-on work. Write your own cards from your notes rather than downloading a huge deck.

                ## Milestones
                1. A spaced-repetition app installed with one deck per topic.
                2. Cards written for common ports, protocols, attack types and control families.
                3. A daily review streak of at least 30 days.
                4. Exam objective cards added once a certification is chosen.

                ## Notes
                Ten minutes on a commute or in a lunch break counts. This is the routine that survives the busiest weeks.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "The flashcard app shows a review streak of at least 30 days across decks you wrote yourself."
                cadence: rolling
              tasks:
                - "Install a spaced-repetition app and create decks by topic"
                - "Write 30 cards on common ports and protocols from your notes"
                - "Clear the day's flashcard reviews in ten minutes @recurring(daily)"
                - "Add cards for each exam objective once your certification is chosen"
            - name: Quarterly skills rescore against target adverts
              description: |-
                ## Purpose
                Progress in security is easy to underestimate, because each new skill reveals three more you lack. Rescoring the same skills list from your baseline every quarter, against fresh adverts, shows what has really moved and whether the target role still fits. It is also the right moment to reshuffle the next quarter of your plan.

                ## Milestones
                1. Five new adverts for your target role collected each quarter.
                2. The baseline skills list rescored with fresh evidence.
                3. Any new skill that most adverts now ask for added to the list.
                4. The next quarter's focus updated in your twelve-month plan.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "The skills list carries a dated rescore for each quarter since the baseline, and the plan's next quarter matches the largest gap."
                cadence: cyclic
              tasks:
                - "Collect five fresh adverts for your target role"
                - "Rescore your baseline skills list with new evidence @recurring(quarterly)"
                - "Add any skill that now appears in most new adverts"
                - "Move next quarter's focus in your plan to the largest remaining gap"
            - name: Continuing education credits and certification renewals
              description: |-
                ## Purpose
                Most security certifications expire unless you earn continuing education credits and pay a maintenance fee, and people lose certifications they worked hard for simply by forgetting. A single log of every certification, its renewal date, the credits needed and the evidence for each credit makes renewal a formality. Webinars, conferences, courses and published writing usually count.

                ## Milestones
                1. Every certification listed with its expiry date, credit requirement and annual fee, taken from the issuer's site.
                2. A credit log with date, activity, hours and evidence file.
                3. Annual fees budgeted in advance.
                4. Each renewal completed before its expiry date.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every certification you hold has a logged credit total on track for its renewal date and no certification has lapsed."
                cadence: cyclic
              tasks:
                - "List each certification with its renewal cycle, credit count and fee from the issuer's site"
                - "Create a credit log with date, activity, hours and evidence"
                - "Log credits earned from webinars, courses and events @recurring(quarterly)"
                - "Check annual maintenance fees and renewal dates @recurring(yearly)"
            - name: Networking fundamentals for security work
              description: |-
                ## Purpose
                Every alert, attack and firewall rule is ultimately about packets, so weak networking is the most common reason entry candidates stumble in technical interviews. Working through the layers, subnetting, TCP and UDP, DNS, DHCP, HTTP and common ports, and then watching each one in packet captures from your own lab, makes the theory stick. Every later project rests on this one.

                ## Milestones
                1. Subnetting problems solved accurately without a calculator.
                2. The TCP three-way handshake, a DNS lookup and an HTTP request identified in your own packet captures.
                3. A one-page cheat sheet of common ports and what normally runs on them.
                4. A small lab network built with two subnets and a router or firewall between them.
                5. A practice set of networking questions completed with at least 80 percent.
              priority: high
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "You score at least 80 percent on a networking question set and can point to your own captures of a handshake, a DNS lookup and an HTTP request."
                cadence: phased
                effort_hours_estimate: "40"
              tasks:
                - "Work through one subnetting practice set and check every answer"
                - "Capture a DNS lookup and an HTTP request in your lab with a packet analyser"
                - "Write a one-page cheat sheet of common ports and services"
                - "Build two lab subnets joined by a virtual router or firewall"
                - "Complete a networking question set and review every wrong answer"
            - name: Linux command line for defenders
              description: |-
                ## Purpose
                Servers, security tools and most of the cloud run on Linux, and analysts are expected to move around a shell, read logs and spot a suspicious process without a graphical interface. Learning the file system, permissions, users, processes, services, logs and text tools such as grep and awk through lab exercises gives you daily fluency rather than memorised commands.

                ## Milestones
                1. Navigation, file permissions, users and groups handled confidently on a lab machine.
                2. Running processes, services and listening ports inspected and explained.
                3. Authentication and system logs searched with grep, awk and similar tools to answer a specific question.
                4. A beginner Linux wargame completed to a level of your choosing.
                5. A short Bash script written that automates one repeated lab task.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "You can find failed logins in a Linux authentication log from the command line and have a working Bash script saved in your repository."
                cadence: phased
                effort_hours_estimate: "30"
              tasks:
                - "Practise permissions, users and groups on a lab machine for one session"
                - "List running processes, services and open ports and explain each one"
                - "Find failed logins in the authentication log using grep and awk"
                - "Work through the first levels of a beginner Linux wargame"
                - "Write a Bash script that automates one task you repeat in the lab"
            - name: Windows and Active Directory for security analysts
              description: |-
                ## Purpose
                Banks, government ministries and hotel groups across the Caribbean, like most organisations elsewhere, run Windows desktops managed through Active Directory, and most real intrusions pass through it. Building a small domain in your lab and learning users, groups, Group Policy, event logs and common attack paths at a conceptual level prepares you for what SOC analysts see every day.

                ## Milestones
                1. A lab domain controller and one joined workstation running.
                2. Users, groups and a Group Policy object created and tested.
                3. Logon, account creation and privilege events found in the Windows event logs and explained.
                4. Common Active Directory attack techniques described in your own words, with the events they leave behind.
                5. Extra endpoint logging installed and a normal hour of its events reviewed.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A working lab domain exists and your notes explain the event log traces of three Active Directory attack techniques."
                cadence: phased
                effort_hours_estimate: "30"
              tasks:
                - "Promote a Windows evaluation server to a domain controller in your lab"
                - "Join a workstation and create test users, groups and one Group Policy"
                - "Find logon and account creation events in the event viewer"
                - "Install extra endpoint logging and review what a normal hour looks like"
                - "Write notes on three common Active Directory attack techniques and their traces"
            - name: Python and PowerShell scripting for security tasks
              description: |-
                ## Purpose
                Analysts who can script spend less time copying and pasting and more time investigating, and a working script in a public repository is solid evidence in an interview. You do not need to be a developer: parsing a log file, calling a reputation lookup, checking a list of hashes or pulling Windows events with PowerShell covers most entry needs.

                ## Milestones
                1. Python basics covered: variables, loops, functions, files and using libraries.
                2. A script that parses a log file and counts failed logins by source address.
                3. A script that checks a list of file hashes or domains against a free reputation service within its usage terms.
                4. A PowerShell snippet that pulls specific Windows events and exports them.
                5. All scripts committed to a public repository with a short readme.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: artifact
                success_criteria: "Three working security scripts, two in Python and one in PowerShell, sit in a public repository with readmes."
                cadence: phased
                effort_hours_estimate: "35"
              tasks:
                - "Complete an introductory Python course section on files and functions"
                - "Write a Python script that counts failed logins by source address"
                - "Write a script that checks file hashes against a free reputation service"
                - "Pull a set of Windows events with PowerShell and export them to CSV"
                - "Commit each script to a public repository with a short readme"
            - name: Log analysis and SIEM basics
              description: |-
                ## Purpose
                Entry SOC work is mostly reading logs and alerts in a SIEM, deciding which are real and writing up why. Installing a free SIEM or log platform in your lab, feeding it from your Linux and Windows machines and investigating your own simulated attacks teaches the exact loop you will be paid for.

                ## Milestones
                1. A free SIEM or log platform running in the lab and receiving logs from at least two machines.
                2. Three searches written: failed logins, new user accounts and unusual processes.
                3. A simple dashboard showing authentication activity over time.
                4. Two simulated attacks run in the lab and investigated from the logs alone, with a short report for each.
                5. One public blue team investigation challenge completed.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Your lab SIEM receives logs from two machines and you have written two investigation reports based only on its data."
                cadence: phased
                effort_hours_estimate: "35"
              tasks:
                - "Install a free SIEM or log platform in your lab"
                - "Forward logs from your Linux and Windows lab machines"
                - "Write searches for failed logins, new accounts and unusual processes"
                - "Run a simulated attack in the lab and investigate it from the logs alone"
                - "Complete one public blue team investigation challenge"
            - name: Web application security fundamentals
              description: |-
                ## Purpose
                Web applications are where many breaches start, and almost every security role, from SOC to penetration testing, expects you to understand the common vulnerability classes. Working through the OWASP Top 10 categories against deliberately vulnerable apps in your lab, with an intercepting proxy, shows you how injection, broken access control and authentication flaws really look.

                ## Milestones
                1. HTTP requests, responses, cookies and sessions inspected in an intercepting proxy.
                2. Each OWASP Top 10 category explained in a paragraph with a lab example.
                3. Injection, cross-site scripting and broken access control exploited in a deliberately vulnerable app you host yourself.
                4. The fix for each vulnerability described from a developer's point of view.
                5. The beginner topics of a free web security learning path completed.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Your notes hold a paragraph and a lab example for every OWASP Top 10 category, each with the developer fix."
                cadence: phased
                effort_hours_estimate: "35"
              tasks:
                - "Install an intercepting proxy and inspect your own lab app's traffic"
                - "Host a deliberately vulnerable web app inside your isolated lab"
                - "Exploit one injection flaw and write how a developer would fix it"
                - "Write a paragraph and lab example for each OWASP Top 10 category"
                - "Finish the beginner topics on a free web security academy"
            - name: Cryptography and identity basics
              description: |-
                ## Purpose
                Questions about hashing versus encryption, how TLS certificates work, or why multi-factor sign-in stops most account takeovers appear in nearly every security exam and interview. Understanding the concepts, not the mathematics, and seeing them in your lab through certificate inspection, cracking hashes of test passwords you created and single sign-on settings, lets you explain them clearly.

                ## Milestones
                1. Symmetric and asymmetric encryption, hashing and digital signatures explained in your own words.
                2. A website certificate chain inspected and each part named.
                3. Weak test passwords cracked from hashes you created yourself, showing why salting and length matter.
                4. Authentication, authorisation, multi-factor and single sign-on described with one example each.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Your notes explain hashing, encryption, signatures and single sign-on in your own words, backed by one lab exercise each."
                cadence: phased
                effort_hours_estimate: "15"
              tasks:
                - "Write one-paragraph explanations of hashing, encryption and digital signatures"
                - "Inspect a website certificate chain in your browser and name each part"
                - "Crack weak hashes of test passwords you created in the lab"
                - "Draw how single sign-on passes identity between two applications"
            - name: Incident response lifecycle and tabletop practice
              description: |-
                ## Purpose
                When something goes wrong, the value of a junior analyst lies in following the process calmly: preparation, detection and analysis, containment, eradication, recovery and lessons learned. Studying a published incident response framework and running a small tabletop exercise, alone or with a study group, gives you the vocabulary and instincts that interviewers test with scenario questions.

                ## Milestones
                1. The phases of a published incident response framework summarised on one page.
                2. A phishing scenario walked through phase by phase, with decisions written down.
                3. A tabletop run with at least two other people playing analyst, manager and communications.
                4. A short after-action report written from the tabletop.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A one-page framework summary and an after-action report from a tabletop with at least three participants are saved."
                cadence: phased
                effort_hours_estimate: "12"
              tasks:
                - "Summarise a published incident response framework on one page"
                - "Write a phishing incident scenario with three twists"
                - "Run the tabletop with two or more study partners"
                - "Write a one-page after-action report from the exercise"
            - name: Governance, risk and compliance foundations
              description: |-
                ## Purpose
                Not every security job is technical: governance, risk and compliance teams write policies, run risk assessments, prepare for audits and map controls to standards such as ISO 27001, the NIST Cybersecurity Framework and data protection laws. For people coming from audit, law, banking or administration, GRC is often the quickest way in, and Caribbean banks, insurers and regulators hire for it. Learning the frameworks and producing one sample risk assessment shows you can do the work.

                ## Milestones
                1. The main functions of a recognised security framework summarised, with one example control each.
                2. The data protection law that applies in your country, or a comparable one, summarised on a page.
                3. A sample risk register for a fictional small business with ten scored risks.
                4. One sample policy, such as acceptable use, written in plain language.

                ## Notes
                Start from the **Risk register** template. Use a fictional organisation for portfolio samples and never publish a real employer's risks.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: artifact
                success_criteria: "A ten-risk sample register and one plain-language policy for a fictional business are finished and ready to show in interviews."
                cadence: phased
                effort_hours_estimate: "20"
              tasks:
                - "Summarise the core functions of a recognised security framework"
                - "Write a one-page summary of the data protection law in your country"
                - "Build a risk register for a fictional small business with ten scored risks"
                - "Draft an acceptable use policy in plain language for that business"
            - name: Cloud security basics in a free tier
              description: |-
                ## Purpose
                Many recent breaches come from misconfigured cloud storage, overly broad access keys and accounts without multi-factor sign-in rather than clever exploits. Opening a free-tier account on one major cloud platform, locking it down and then reviewing its identity and logging settings teaches the shared responsibility model through your own mistakes, at little or no cost.

                ## Milestones
                1. A free-tier cloud account created with a billing alert and multi-factor sign-in on the owner account.
                2. A least-privilege user or role created for daily work.
                3. Audit logging turned on and one of your own actions traced in the logs.
                4. A storage bucket deliberately misconfigured, detected and fixed, with a short writeup.
                5. The shared responsibility model explained in a paragraph.

                ## Notes
                Set a billing alert before creating anything, and delete resources at the end of each session so a forgotten machine does not run up a bill.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A locked-down free-tier account with a billing alert exists and a writeup shows one misconfiguration found and fixed."
                cadence: phased
                effort_hours_estimate: "20"
              tasks:
                - "Create a free-tier cloud account and set a billing alert first"
                - "Add multi-factor sign-in and create a least-privilege user for daily work"
                - "Turn on audit logging and trace one of your own actions in it"
                - "Misconfigure a test storage bucket, detect the problem and fix it"
                - "Delete every resource you created at the end of each session"
            - name: Choosing your first security certification
              description: |-
                ## Purpose
                Recruiters and some government contracts use entry certifications as a filter, so the first one should match the adverts you collected rather than social media hype. Common first choices include CompTIA Security+, ISC2 Certified in Cybersecurity, practical blue team certifications and vendor-neutral certificate programmes, while offensive certifications usually come later. Comparing them on recognition in your target market, cost, format and renewal rules gives a clear decision.

                ## Milestones
                1. Certifications mentioned in your saved adverts counted and ranked.
                2. Three candidates compared on recognition, cost in your currency, exam format, prerequisites and renewal rules.
                3. Testing centre or online proctoring availability confirmed for where you live.
                4. One certification chosen with a target exam month.

                ## Notes
                Check on the certification body's own site whether the exam can be taken online from your country and what identification it needs, before you commit.
              priority: high
              deadlineOffsetDays: 60
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "One certification is chosen after comparing three on cost, format and renewal, with a target exam month in your plan."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Count which certifications appear most often in your saved adverts"
                - "Compare three candidates on cost, format, prerequisites and renewal"
                - "Confirm testing centre or online proctoring availability where you live"
                - "Record your chosen certification and target exam month"
            - name: Portfolio of three security projects
              description: |-
                ## Purpose
                A portfolio answers the question every entry candidate dreads: with no experience, what can you actually do? Three finished projects, for example a home SIEM with detection rules, a documented lab investigation and a small security script or GRC sample, each with a clear readme and screenshots, give a hiring manager something concrete to discuss.

                ## Milestones
                1. Three project ideas chosen that match your target role.
                2. Each project finished with a readme covering the problem, approach, tools and results.
                3. Screenshots and diagrams added with any sensitive details removed.
                4. The portfolio linked from your CV, profile and applications.
                5. Feedback received from one working security professional.

                ## Notes
                Start from the **Portfolio piece** template for each project. Three finished projects beat ten abandoned ones.
              priority: medium
              deadlineOffsetDays: 150
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Three finished projects with readmes are public, linked from your CV, and reviewed by one working security professional."
                cadence: phased
                effort_hours_estimate: "40"
              tasks:
                - "Choose three portfolio projects that match your target role"
                - "Finish the first project and write its readme with screenshots"
                - "Strip internal addresses, real names and keys from every screenshot"
                - "Ask a working security professional to review the portfolio"
                - "Link the portfolio from your CV and profile"
            - name: Security CV and public profile
              description: |-
                ## Purpose
                Hiring managers spend seconds on each CV, and a security CV that lists courses without results is easily skipped. Rewriting yours around projects, lab work and transferable experience, and matching your online profile to it, makes the evidence visible. Keep public profiles professional without oversharing details of an employer's systems.

                ## Milestones
                1. A one or two page CV with a summary aimed at your target role.
                2. Projects, labs and certifications written as results with the tools named.
                3. Transferable experience from previous jobs rewritten in security terms.
                4. An online professional profile that matches the CV and links the portfolio.
                5. A version of the CV tailored for each of your two main job families.

                ## Notes
                Start from the **Resume** template. A UK or Caribbean CV and a US or Canadian resume differ in length and in the personal details they include, so check the norms where you apply.
              priority: medium
              deadlineOffsetDays: 90
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Two tailored CV versions and a matching online profile are finished, each linking the portfolio."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Write a three-line summary aimed at your target role"
                - "Rewrite each project and lab as a result with the tools named"
                - "Ask the agent to translate past job duties into security terms such as access control"
                - "Update your online profile to match and link your portfolio"
                - "Refresh the CV and profile with new skills and projects @recurring(quarterly)"
            - name: Moving into security from IT, networking or development
              description: |-
                ## Purpose
                Engineers and IT staff already in work have the shortest route into security, often through an internal move rather than a new employer. Taking on security-flavoured tasks in your current role, such as patching reports, access reviews, firewall changes or secure code reviews, and telling your manager about the goal, builds experience that counts on a CV. Many SOC and security engineering teams recruit internally first.

                ## Milestones
                1. Your current responsibilities mapped against the skills in security adverts.
                2. Your manager told about your goal and asked for security-related work.
                3. Two security tasks completed in your current job with documented results.
                4. A conversation held with the security team about how they recruit internally.

                ## Notes
                Keep evidence of work tasks in general terms on your CV. Details of an employer's systems and weaknesses stay inside the employer.
              priority: medium
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "Two documented security tasks are completed in your current job and a conversation with the security team about internal moves is recorded."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "Map your current duties against the skills in your saved security adverts"
                - "Tell your manager about your security goal and ask for related tasks"
                - "Complete one security task at work and document the result"
                - "Ask the security team how they recruit and what they value"
            - name: Finding a mentor and a study group
              description: |-
                ## Purpose
                Self-taught learners often stall for weeks on a problem a mentor could unblock in five minutes, and study partners keep each other turning up. A mentor a few years ahead and a small group working towards the same certification or role provide accountability, honest CV feedback and early news of openings. Ask for small, specific help rather than a vague request to be mentored.

                ## Milestones
                1. Three possible mentors identified through communities, alumni networks or professional chapters.
                2. One mentor agreed to a short monthly call with a clear focus.
                3. A study group of three to five people meeting on a fixed schedule.
                4. One concrete outcome from mentoring recorded, such as a revised CV or a referral.
              priority: low
              frontmatter:
                mode: building
                output_kind: habit
                success_criteria: "A mentor has agreed to monthly calls and a study group of three to five people meets on a fixed weekly time."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "List three potential mentors from communities or alumni networks"
                - "Send one a short request with a specific question and a time limit"
                - "Form or join a study group of three to five people"
                - "Agree a fixed weekly meeting time and a shared goal for the group"
            - name: Sitting the first certification exam
              description: |-
                ## Purpose
                The weeks before an exam are when plans fall apart, especially for people who are working or caring for others. Booking the date early, working through the official objectives, timing practice tests and preparing the room or the trip to the testing centre turns a vague intention into a pass. A booked date is the strongest motivation there is.

                ## Milestones
                1. Exam booked for a specific date, with identification requirements checked.
                2. Every official exam objective mapped to your notes and labs.
                3. Three timed practice exams completed, with scores logged and weak areas revised.
                4. Online proctoring check or route to the testing centre completed a week before.
                5. The exam sat and the result recorded.

                ## Notes
                Download the objectives from the certification body itself; third-party summaries go out of date when exams are revised.
              priority: high
              deadlineOffsetDays: 120
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "The exam is sat on the booked date after at least three timed practice exams, and the result is recorded."
                cadence: phased
                effort_hours_estimate: "60"
              tasks:
                - "Download the official exam objectives and map each one to your notes"
                - "Book the exam date and check the identification rules"
                - "Sit a timed practice exam and log the score by domain @recurring(weekly:sat)"
                - "Run the online proctoring system check or plan the route to the centre"
                - "Record the result and the date your certification renewal falls due"
            - name: First team capture the flag competition
              description: |-
                ## Purpose
                Competing as a team in a live capture the flag event, such as a university, regional or online beginner competition, teaches collaboration under time pressure in a way solo practice cannot. Preparing a shared notes channel, dividing categories by strength and writing up afterwards turns one weekend into portfolio material and new contacts.

                ## Milestones
                1. A team of three to five formed, with roles by challenge category.
                2. A beginner-friendly event chosen and registered for.
                3. A shared notes channel and toolset prepared in advance.
                4. The event completed with every solved challenge documented.
                5. A team writeup published for at least one challenge once the event closes.
              priority: medium
              deadlineOffsetDays: 90
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "Your team completes one live CTF event and publishes a writeup of at least one solved challenge afterwards."
                cadence: one-shot
                effort_hours_estimate: "16"
              tasks:
                - "Recruit three to five teammates from your study group or community"
                - "Register for a beginner-friendly team CTF event"
                - "Set up a shared notes channel and agree who covers which category"
                - "Write up at least one solved challenge after the event closes"
            - name: First security conference or BSides
              description: |-
                ## Purpose
                Conferences, especially community BSides events and regional gatherings, are where people meet employers, hear what teams are struggling with and find mentors. Going with a plan, two talks you want to discuss, three people to meet and a short introduction, makes a first conference far more useful than drifting between sessions. Many offer student tickets or volunteer places that cover entry.

                ## Milestones
                1. An event chosen within reach, online or in person, with a ticket or volunteer place confirmed.
                2. Two talks and three people to meet chosen in advance.
                3. A short spoken introduction prepared covering your target role and current project.
                4. Follow-up messages sent within a week of the event.
                5. Notes on two talks added to your knowledge base.
              priority: low
              deadlineOffsetDays: 180
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "One conference is attended, three planned conversations happen and follow-up messages go out within a week."
                cadence: one-shot
                effort_hours_estimate: "12"
              tasks:
                - "Find a conference or BSides event you can attend in person or online"
                - "Apply for a student ticket or volunteer place if cost is a barrier"
                - "Choose two talks and three people you want to meet"
                - "Practise a 30-second introduction about your target role and project"
                - "Send follow-up messages within a week of the event"
            - name: SOC analyst interview preparation
              description: |-
                ## Purpose
                Interviews for entry security roles usually mix behavioural questions, technical questions on networking and common attacks, and a scenario such as walking through a suspicious email or a burst of failed logins. Practising answers aloud, with your own lab stories ready, and doing at least one mock interview with someone in the field, moves you from knowing things to explaining them under pressure.

                ## Milestones
                1. A bank of 40 likely questions across behavioural, technical and scenario types.
                2. Six lab or project stories written in situation, task, action and result form.
                3. Answers to the five most common scenarios practised aloud and timed.
                4. At least one mock interview completed, with feedback from someone working in security.
                5. A list of questions to ask the interviewer about the team, tooling and shifts.

                ## Notes
                Saying you do not know, then explaining how you would find out, scores better than guessing. Interviewers test the method as much as the answer.
              priority: high
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A 40-question bank and six written stories exist, and at least one mock interview has been completed with feedback recorded."
                cadence: phased
                effort_hours_estimate: "15"
              tasks:
                - "Build a bank of 40 behavioural, technical and scenario questions"
                - "Write six project stories in situation, task, action and result form"
                - "Practise walking through a suspicious email investigation aloud"
                - "Book a mock interview with someone working in security"
                - "Ask the agent to quiz you with follow-up questions on your weakest topic"
            - name: Internship, apprenticeship and graduate scheme applications
              description: |-
                ## Purpose
                Structured entry programmes, such as summer internships, degree or cyber apprenticeships in the UK, co-op placements in Canada, graduate schemes at banks and telecoms providers, and attachments with national incident response teams or regulators in the Caribbean, are designed for people without experience. They open on fixed cycles, often many months ahead, so missing the window can cost a year.

                ## Milestones
                1. A list of programmes open to you with opening and closing dates.
                2. Eligibility rules for each checked, including citizenship, age and study status.
                3. Applications submitted for at least five programmes before their deadlines.
                4. Online tests and assessment day formats researched and practised.
              priority: medium
              deadlineOffsetDays: 120
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "At least five programme applications are submitted before their closing dates, each with eligibility confirmed."
                cadence: phased
                effort_hours_estimate: "20"
              tasks:
                - "List internships, apprenticeships and graduate schemes open to you with closing dates"
                - "Check citizenship, age and study status rules for each programme"
                - "Practise the online aptitude or situational tests used by two employers"
                - "Submit five applications before their closing dates"
            - name: First 90 days as a security analyst
              description: |-
                ## Purpose
                The first three months in a SOC or security team decide how fast you are trusted with real investigations. A plan for learning the environment, the escalation paths, the ticketing system and the most common alert types, with written notes and regular check-ins with your lead, avoids both freezing and overconfident mistakes. Keep a running record of what you handled, because it feeds your first review.

                ## Milestones
                1. Network layout, critical assets and escalation contacts written in your work notes by week four.
                2. The ten most common alert types and their usual handling understood.
                3. Check-ins with your lead held at 30, 60 and 90 days.
                4. A personal runbook of the procedures you were taught.
                5. A record of investigations handled, ready for your first review.

                ## Notes
                Start from the **Onboarding 30/60/90** template. Never copy client or employer data into personal notes or apps; keep work notes on work systems.
              priority: high
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "Three check-ins with your lead have taken place and a runbook and investigation record are ready for your first review."
                cadence: phased
                effort_hours_estimate: "30"
              tasks:
                - "Ask your lead for the network layout, critical assets and escalation list"
                - "List the ten most common alert types and how each is handled"
                - "Book 30, 60 and 90-day check-ins with your lead"
                - "Write a short note of the alerts you handled and what you learned @recurring(weekly:fri)"
                - "Start a personal runbook of procedures on work systems"
            - name: School and university route into cybersecurity
              description: |-
                ## Purpose
                Students aged 14 to 18 can lay real groundwork before university: CSEC Information Technology and Mathematics, then CAPE Computer Science or Information Technology in the Caribbean, GCSE and A level Computer Science in the UK, or AP Computer Science and similar courses in the US and Canada. Choosing subjects with computing degrees in mind, joining a coding or cyber club and entering student competitions makes applications stronger. Parents and teachers can help by finding the clubs and checking entry requirements early.

                ## Milestones
                1. Subject choices checked against the entry requirements of three computing or cybersecurity degrees.
                2. A coding club, cyber club or online student programme joined.
                3. One student cyber competition entered.
                4. A shortlist of universities or colleges with security courses, entry grades and scholarship options.
                5. A small personal project finished, such as a website you secured yourself.

                ## Notes
                Mathematics matters more than many students expect. Check the grade each degree asks for before dropping it.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "Subject choices are confirmed against three degree entry requirements and one student competition has been entered."
                cadence: phased
                effort_hours_estimate: "15"
              tasks:
                - "Check the entry requirements of three computing or cybersecurity degrees"
                - "Confirm your CSEC, CAPE, A level or equivalent subjects fit those requirements"
                - "Join a coding or cyber club at school or online"
                - "Enter one student cyber competition this year"
                - "List scholarships for computing students in your country"
            - name: Career change into security after thirty
              description: |-
                ## Purpose
                Career changers bring valuable experience from banking, policing, the military, audit, teaching or healthcare, but they also carry mortgages, children and full-time jobs. A plan that fits study into seven to ten hours a week, targets roles where your past experience counts, such as GRC for auditors or fraud and investigations for police officers, and keeps your current income until an offer arrives, is far safer than quitting to study.

                ## Milestones
                1. Your previous experience mapped to the security role where it counts most.
                2. A weekly study schedule agreed with the people you live with.
                3. A spending limit set for paid courses and a rule not to resign until an offer exists.
                4. Two people who made a similar change interviewed about what worked.

                ## Notes
                Short sessions count for parents and carers. Thirty minutes of flashcards on the commute and one longer lab block at the weekend still add up over a year.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A target role matched to your past experience, an agreed weekly schedule and a written spending limit are recorded."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Write down which past experience is most relevant to which security role"
                - "Agree a weekly study schedule with the people you live with"
                - "Set a spending limit for courses and certifications this year"
                - "Interview two people who moved into security from your field"
            - name: Security careers from the Caribbean
              description: |-
                ## Purpose
                In the region, security jobs sit mostly in banks, credit unions, telecoms providers, government ministries, national incident response teams, regulators, energy companies and a growing number of managed security providers, and many are never advertised widely. Mapping the employers in your island and the wider region, plus remote roles that hire in your time zone, shows where the real openings are and what they expect. It also tells you whether you need to leave to grow.

                ## Milestones
                1. A list of 20 employers in your country and the wider region that employ security staff.
                2. Their usual entry titles, requirements and recruitment channels noted.
                3. Remote employers that hire in Caribbean time zones identified, with how they pay contractors.
                4. Three conversations held with security staff working in the region.
                5. A decision recorded on whether to build your first years at home, remotely or abroad.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A list of 20 regional employers with their entry routes exists, and a decision on home, remote or abroad is recorded."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "List 20 regional employers with security teams, from banks to telecoms providers"
                - "Note each employer's entry titles and how they recruit"
                - "Find remote employers that hire security staff in Caribbean time zones"
                - "Speak to three security staff working in the region about their route in"
            - name: Working abroad or remotely for an overseas employer
              description: |-
                ## Purpose
                Skills in security travel well, and Caribbean graduates regularly move to the UK, the US or Canada, or work remotely for employers there. Each route has its own requirements: work visas or permits, recognition of your degree, background checks across several countries and, for remote contracts, tax registration and payment in a foreign currency. Organising the documents and checking each rule with official sources stops offers falling through late.

                ## Milestones
                1. Target countries chosen and their official immigration sites checked for skilled worker routes.
                2. Degree and certification recognition requirements confirmed for each country.
                3. Police certificates and references gathered from every country you have lived in, where required.
                4. Tax registration, invoicing and currency questions for remote work put to an accountant in your country.
                5. A document folder with passport, transcripts, certificates and references kept current.

                ## Notes
                Immigration and tax rules change often. Rely on official government sites and qualified advisers, and be wary of any agent who charges to guarantee a visa.
              priority: low
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "Official requirements for each target country are noted and a complete document folder with passport, transcripts and references is ready."
                cadence: phased
                effort_hours_estimate: "12"
              tasks:
                - "Check the official immigration site of each target country for skilled worker routes"
                - "Confirm how your degree and certifications are recognised there"
                - "Request police certificates from each country you have lived in if needed"
                - "Ask an accountant how remote contract income is taxed where you live"
                - "Scan passport, transcripts, certificates and references into one folder"
            - name: Background checks and security clearance readiness
              description: |-
                ## Purpose
                Government, defence, banking and critical infrastructure roles often require background screening or a formal security clearance, and gaps or surprises in your history can delay or end an offer. Gathering your address, employment, travel and financial history now, and being honest about anything that may come up, makes vetting forms faster and less stressful. Clearance rules differ widely between countries and some require citizenship.

                ## Milestones
                1. Ten years of addresses, employers and referees listed with dates.
                2. Foreign travel and residence history recorded.
                3. Credit report checked and any problems documented with explanations.
                4. The vetting or clearance levels common in your target sector researched from official sources.
              priority: low
              frontmatter:
                mode: research
                output_kind: artifact
                success_criteria: "A dated ten-year history of addresses, employers, travel and referees is saved and ready to copy into a vetting form."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "List addresses, employers and referees for the last ten years with dates"
                - "Record foreign travel and residence with approximate dates"
                - "Check your credit report and note anything you would need to explain"
                - "Read the official guidance on vetting or clearance for your target sector"
            - name: Choosing a security specialism after the first year
              description: |-
                ## Purpose
                After a year in an entry role, most people have seen enough of the field to choose a direction: detection and response, threat intelligence, penetration testing, application security, cloud security, digital forensics or GRC. Choosing deliberately, based on the work you enjoyed and the demand in your market, shapes the next certification, lab work and job move. Drifting usually means staying a generalist analyst for too long.

                ## Milestones
                1. Your first year reviewed: tasks enjoyed, tasks avoided and strongest results.
                2. Three specialisms compared on demand, pay range and the skills gap from where you are.
                3. Two specialists interviewed about their day-to-day work.
                4. One specialism chosen with a matching six-month development plan.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "One specialism is chosen after comparing three and interviewing two specialists, with a six-month plan written."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Review your first year: what you enjoyed, avoided and did best"
                - "Compare three specialisms on demand, pay and skills gap"
                - "Interview two specialists about an ordinary week"
                - "Write a six-month plan for the specialism you choose"
            - name: From tier 1 alerts to detection engineering and threat hunting
              description: |-
                ## Purpose
                Moving beyond tier 1 triage means writing the detections rather than only answering them, and hunting for threats no alert has caught. Learning a detection rule format, mapping coverage against a public framework of attacker techniques such as MITRE ATT&CK and proposing improvements to your team's alerts shows readiness for tier 2 and engineering roles.

                ## Milestones
                1. A detection rule format learned and five rules written and tested in your lab.
                2. Your team's or lab's detection coverage mapped against the ATT&CK framework.
                3. One threat hunt planned from a hypothesis, run and written up.
                4. One improvement to a noisy or missing alert proposed to your lead with evidence.
              priority: medium
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "Five tested detection rules, an ATT&CK coverage map and one written threat hunt are finished and shared with your lead."
                cadence: phased
                effort_hours_estimate: "40"
              tasks:
                - "Learn a detection rule format and write five rules for your lab"
                - "Map your lab or team detections against ATT&CK techniques"
                - "Write a hunting hypothesis and test it against a week of logs"
                - "Draft one new detection idea and test it in the lab @recurring(monthly:11)"
                - "Propose one alert tuning change to your lead with evidence"
            - name: Penetration testing route with written authorisation
              description: |-
                ## Purpose
                Penetration testing attracts many beginners, but employers hire testers who combine solid networking, Linux, Windows and web skills with disciplined reporting and strict respect for scope. Working through retired machines on legal practice platforms, writing professional reports on each and learning how rules of engagement and authorisation letters work prepares you for a practical certification and a junior tester role.

                ## Milestones
                1. Twenty retired practice machines completed, with a client-style report for five of them.
                2. A standard report layout with executive summary, findings, risk ratings and fixes.
                3. Rules of engagement and authorisation letters studied from published examples.
                4. A practical offensive certification chosen with a target date.
                5. A methodology checklist in your notes covering reconnaissance to reporting.

                ## Notes
                Every test outside your own lab or a platform's machines needs written authorisation that names the scope and dates. No letter, no test.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Twenty retired machines are completed, five client-style reports are written and a practical certification has a target month."
                cadence: phased
                effort_hours_estimate: "120"
              tasks:
                - "Complete one retired practice machine and write it up as a client report"
                - "Build a report layout with summary, findings, risk ratings and fixes"
                - "Read published examples of rules of engagement and authorisation letters"
                - "Write a methodology checklist from reconnaissance to reporting"
                - "Choose a practical offensive certification and set a target month"
            - name: Bug bounty and responsible disclosure practice
              description: |-
                ## Purpose
                Bug bounty programmes let you test real systems legally, but only within each programme's published scope and rules, and most beginners earn nothing for months. Reading the safe harbour terms carefully, starting with programmes that welcome beginners and treating each report as a writing exercise builds credibility. Responsible disclosure also matters when you stumble on a flaw outside any programme.

                ## Milestones
                1. Two programmes chosen, with their scope and safe harbour terms saved.
                2. Reconnaissance notes kept for each target, within scope only.
                3. One clearly written report submitted, whether or not it is accepted.
                4. A personal disclosure process written for flaws found outside any programme.

                ## Notes
                Testing anything outside a programme's written scope is unauthorised access. If in doubt, ask the programme before testing.
              priority: low
              frontmatter:
                mode: research
                output_kind: deliverable
                success_criteria: "One report is submitted to an in-scope programme and a written disclosure process for out-of-programme flaws is saved."
                cadence: phased
                effort_hours_estimate: "30"
              tasks:
                - "Choose two beginner-friendly programmes and save their scope and rules"
                - "Read each programme's safe harbour and disclosure terms in full"
                - "Submit one clearly written report with reproduction steps"
                - "Write your own disclosure process for flaws found outside any programme"
            - name: Advanced certification or master's degree decision
              description: |-
                ## Purpose
                Mid-career security professionals usually face a choice between a deep technical certification, a management certification that requires years of verified experience, or a master's degree. Each has different costs, study loads and employer value, and some require endorsement by an existing holder. Comparing them against your specialism and a two to three year career goal avoids spending a large sum on the wrong one.

                ## Milestones
                1. A two to three year career goal written in a sentence.
                2. Three advanced options compared on cost, experience requirements, study hours and value in your market.
                3. Experience requirements checked against your verifiable work history.
                4. Employer sponsorship or study leave requested where available.
                5. One option chosen with a start date.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "One advanced certification or degree is chosen after comparing three options, with a start date recorded."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Write your career goal for the next two to three years"
                - "Compare three advanced certifications or degrees on cost and requirements"
                - "Check experience requirements against your verifiable work history"
                - "Ask your employer about sponsorship or study leave"
            - name: Mentoring newcomers and teaching security in schools
              description: |-
                ## Purpose
                Once you are established, teaching others is one of the best ways to deepen your own understanding and to grow the talent pool in your community. Mentoring a newcomer, running a session at a school or college, or helping with a student competition builds leadership experience and gives the next person the help you wished you had.

                ## Milestones
                1. One newcomer mentored with monthly calls for six months.
                2. A beginner talk or workshop prepared on safe online habits or getting into security.
                3. The session delivered at a school, college, library or community group.
                4. Feedback collected and the materials shared for others to reuse.
              priority: low
              frontmatter:
                mode: service
                output_kind: deliverable
                success_criteria: "One newcomer has had six monthly mentoring calls and one workshop has been delivered at a school, college or community group."
                cadence: rolling
              tasks:
                - "Offer to mentor one newcomer through a community or alumni network"
                - "Hold a mentoring call with a clear agenda @recurring(monthly:6)"
                - "Prepare a one-hour beginner workshop with a hands-on exercise"
                - "Contact a school, college or library to offer the session"
---

# Cybersecurity Career Entry

This area is for anyone trying to land a first job in cybersecurity: a CSEC or A level student eyeing a computing degree, a graduate with no experience yet, a police officer or auditor changing career at forty, or a network or software engineer moving sideways. It starts with the foundations (a target role, a learning route, a home lab and the legal limits on practice), then the routines that build evidence, the core skills from networking to cloud, the decisions on certifications and CVs, the exams, competitions and interviews, the situations that change the route, from school to working abroad, and finally the specialist work of the second and third years.

What repeats is twice-weekly lab sessions, weekly advisory reading, guided rooms and applications, daily flashcards, monthly capture the flag events, writeups, meetups and plan reviews, and a quarterly rescore of your skills and certification credits. The Development plan, Content pipeline, Job application, Risk register, Portfolio piece, Resume and Onboarding 30/60/90 templates pair with the projects that name them. Installing adds all 50 projects as active, so archive the ones that are not for you yet.
