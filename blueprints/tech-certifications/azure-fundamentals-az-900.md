---
id: tech-certifications.azure-fundamentals-az-900
name: Azure Fundamentals (AZ-900)
description: "A full route to Microsoft's AZ-900: the current skills outline, lab access without surprise bills, cloud concepts, core Azure services, identity, governance and pricing, timed practice, exam day and what to study next."
category: personal
version: 1.0.0
tags: [tech-certifications, azure-fundamentals-az-900, student, knowledge-worker, microsoft, azure, cloud-fundamentals, exam-prep]
author: Aurum Technology
starter_structure:
  templates:
    - habit-tracker
    - metrics-log
    - purchase-decision
    - resume
  pillars:
    - name: Tech & Engineering Certifications
      emoji: "🏅"
      description: "Technical credentials and the exams behind them: FE and PE licensing, Chartered Engineer and Trinidad and Tobago engineering registration, PMP, PRINCE2 and Scrum, AWS, Azure and Google Cloud by level, Kubernetes and Terraform, networking and security certifications, Six Sigma belts, and coding, system design and machine-learning interviews."
      pillarFrontmatter:
        review_cadence: monthly
      areas:
        - name: Azure Fundamentals (AZ-900)
          description: "Starting Microsoft Azure certification with AZ-900: cloud concepts, core Azure services, identity and governance, pricing and a short study plan with sandbox labs."
          projects:
            - name: Deciding whether AZ-900 is the right first cloud exam
              description: |-
                ## Purpose
                AZ-900 suits people who need to talk about cloud and Azure with confidence, but an engineer already running Azure workloads might go straight to AZ-104, and someone whose employer runs on another cloud may get more from that provider's entry exam. An evening comparing your role, your employer's platform and the exam's scope tells you whether the next six weeks belong here.

                ## Milestones
                1. The cloud platforms your employer, target employers or course actually use written down.
                2. The AZ-900 skills outline compared with what you already know, skill area by skill area.
                3. A clear answer on whether an associate exam such as AZ-104 would be a better first step for you.
                4. AZ-900 chosen or set aside, with the reason written in one sentence at the top of your study notes.

                ## Notes
                Microsoft does not require AZ-900 before any associate exam. Its value is a structured grounding and a badge that shows non-engineers can hold a cloud conversation.
              priority: high
              deadlineOffsetDays: 14
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A written decision to pursue AZ-900 or not, based on your role and the platforms you will actually work with."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "List the cloud platforms used at your workplace, course or target employers"
                - "Read the AZ-900 exam page on Microsoft Learn end to end"
                - "Score yourself one to five against each skill area in the outline"
                - "Write down whether you are sitting AZ-900 and why"
            - name: Current AZ-900 skills outline and exam rules check
              description: |-
                ## Purpose
                Microsoft revises the AZ-900 study guide every so often, renaming services and moving topics between skill areas, so a video course recorded two years ago can teach Azure Active Directory when the exam now says Microsoft Entra ID. An hour with the official study guide before buying anything keeps you studying the exam that is live, not the one that was retired.

                ## Milestones
                1. The current AZ-900 study guide downloaded and its three skill areas and sub-topics copied into your notes.
                2. The date of the most recent outline change noted, with what changed.
                3. The current price in your country, the retake policy and any languages offered recorded with the date checked.
                4. Any book or course you already own checked against the outline's last update.

                ## Notes
                Where a blog, video or practice test disagrees with the Microsoft Learn study guide, the study guide wins. Record the date you checked so you know when to look again.
              priority: high
              deadlineOffsetDays: 7
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A one-page note of the current AZ-900 skill areas, price, retake rules and outline date, each taken from Microsoft Learn with the date checked."
                cadence: one-shot
                effort_hours_estimate: "1"
              tasks:
                - "Download the current AZ-900 study guide from Microsoft Learn"
                - "Copy the three skill areas and their sub-topics into your notes"
                - "Write down the price, retake policy and languages with today's date"
                - "Recheck the study guide for outline changes @recurring(monthly:25)"
            - name: Microsoft Learn profile and certification dashboard
              description: |-
                ## Purpose
                Your Microsoft Learn profile is where learning path progress, practice assessment history, the exam booking and the final credential all live, and the name on it has to match the photo ID you show the proctor. Setting it up properly with the right sign-in, before any study, avoids the common mess of progress spread across a work and a personal account.

                ## Milestones
                1. One Microsoft account chosen for certification, ideally a personal one that survives a change of employer.
                2. A Microsoft Learn profile created with your legal name exactly as it appears on your ID.
                3. The certification profile linked so the exam booking and transcript show under it.
                4. The AZ-900 learning paths added to a Learn collection so progress is tracked in one place.

                ## Notes
                A work account can disappear when you leave a job. If your employer pays, ask whether you can still book and hold the credential under your personal account.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A Microsoft Learn profile in your legal name, linked to your certification profile, with the AZ-900 learning paths saved in a collection."
                cadence: one-shot
                effort_hours_estimate: "1"
              tasks:
                - "Choose the Microsoft account you will keep for certification"
                - "Set the profile name to match your passport or national ID exactly"
                - "Open the certification profile and confirm it links to that account"
                - "Save the AZ-900 learning paths into a Learn collection"
            - name: Choosing a safe practice environment for Azure labs
              description: |-
                ## Purpose
                Reading about Azure is not enough to remember it, but a forgotten virtual machine on a pay-as-you-go subscription can cost more than the exam. Choosing between the free Microsoft Learn sandbox, Azure for Students and the Azure free account, based on what you qualify for and whether a payment card is involved, gives you hands-on practice with a known worst case.

                ## Milestones
                1. The Learn sandbox, Azure for Students and the Azure free account compared on eligibility, credit, card requirement and what happens when credit runs out.
                2. One environment chosen, with the reason written down.
                3. The environment activated and a first resource group created and deleted as a test.
                4. The date any free credit or trial period ends written in your calendar.

                ## Notes
                The Learn sandbox needs no payment card and resets itself, which makes it the safest default for most AZ-900 exercises. Only add a card if a lab genuinely needs a subscription you own.
              priority: high
              deadlineOffsetDays: 14
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "One lab environment chosen and activated, with its credit limit and end date recorded in your calendar."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Check whether your school email qualifies you for Azure for Students"
                - "Read what happens to the Azure free account when the credit ends"
                - "Complete one Learn module that uses the free sandbox"
                - "Put the credit or trial end date in your calendar"
            - name: Budget alert and spending guardrails on the lab subscription
              description: |-
                ## Purpose
                Anyone using a subscription of their own, even a free one, needs a budget alert before the first lab, because Azure bills by the minute and does not stop a resource just because you closed the browser. Setting a small budget, an email alert and a habit of tagging everything you create turns a possible surprise bill into an email you can act on the same day.

                ## Milestones
                1. A budget in Cost Management set at a figure you would not mind losing, with alerts at half and at the full amount.
                2. The alert email address confirmed by a test notification or a check of the alert settings.
                3. A rule written in your notes that every lab resource lives in a resource group named for that day's lab.
                4. The Cost Management view bookmarked so a monthly check takes two minutes.

                ## Notes
                Skip this project if you only ever use the Learn sandbox. It is also, usefully, a live demonstration of the cost management tools the exam asks about.
              priority: high
              deadlineOffsetDays: 10
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A Cost Management budget with two alert thresholds exists on your lab subscription and its alert email has been confirmed."
                cadence: one-shot
                effort_hours_estimate: "1"
              tasks:
                - "Decide the most you are willing to spend on labs in a month"
                - "Create a budget in Cost Management with alerts at 50 and 100 percent"
                - "Write your resource group naming rule at the top of your lab notes"
                - "Check spend to date in Cost Management @recurring(monthly:5)"
            - name: Baseline score from the free practice assessment
              description: |-
                ## Purpose
                Most people either overestimate what they know from using Microsoft 365 at work or underestimate how much general IT knowledge carries over. Taking the free Microsoft practice assessment cold, before studying, gives a score per skill area that decides where the first fortnight of study goes.

                ## Milestones
                1. The official AZ-900 practice assessment taken once without notes.
                2. The result recorded by skill area, with the date.
                3. The weakest skill area named as the first study priority.
                4. Ten questions you got wrong copied into your wrong-answer log with the topic each one tested.

                ## Notes
                Do not chase the score on this first attempt. Its value is the gap it reveals, so resist looking up answers mid-way.
              priority: medium
              deadlineOffsetDays: 14
              frontmatter:
                mode: building
                output_kind: knowledge
                success_criteria: "A dated baseline score for each AZ-900 skill area, with the weakest area named as the first study priority."
                cadence: one-shot
                effort_hours_estimate: "1"
              tasks:
                - "Open the AZ-900 practice assessment on Microsoft Learn"
                - "Take it once without notes in a quiet half hour"
                - "Record the result for each skill area with today's date"
                - "Copy ten wrong answers into your wrong-answer log"
            - name: Dated six-week AZ-900 study plan
              description: |-
                ## Purpose
                Without a date, fundamentals study drifts for months because no single week feels urgent. A written plan that works back from a target exam week, with each week given to named sub-topics from the outline, makes it obvious when you are behind and by how much.

                ## Milestones
                1. A target exam week chosen, roughly six weeks out for most people studying a few hours a week.
                2. Each study week assigned specific sub-topics from the three skill areas, weakest first.
                3. Two buffer weeks built in for illness, work peaks or a slow topic.
                4. The plan written on one page and saved where you open it every study session.

                ## Notes
                Someone with an IT background may need three weeks; someone new to technology may need eight to ten. Adjust the length, keep the structure.
              priority: high
              deadlineOffsetDays: 10
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A one-page study plan with a target exam week, sub-topics assigned to each week and two buffer weeks, saved where you study."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Pick a target exam week and write it at the top of the plan"
                - "Ask the agent to spread the outline sub-topics across your study weeks"
                - "Move your weakest skill area into the first two weeks"
                - "Mark two buffer weeks before the exam"
            - name: Study notes organised by the three skill areas
              description: |-
                ## Purpose
                Notes scattered across a notebook, browser tabs and screenshots are hard to revise from in the final week. One set of notes with a page per sub-topic in the outline, and a short line on how each service is priced and secured, becomes the revision pack you need anyway.

                ## Milestones
                1. One notes location chosen and three sections created, one per skill area.
                2. A page per outline sub-topic, titled with the outline's own wording.
                3. A fixed format on each service page: what it is, when you would choose it, how it is billed.
                4. A comparison page started for services people mix up, such as VPN Gateway and ExpressRoute.

                ## Notes
                Write in your own words. Copying Microsoft Learn text feels productive but does not help you answer a scenario question.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A notes set with a page for every AZ-900 outline sub-topic, in a fixed format, plus a comparison page for commonly confused services."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Create three note sections named after the AZ-900 skill areas"
                - "Add a page for each sub-topic using the outline's wording"
                - "Write the three-line format at the top of each service page"
                - "Start a page comparing services that are easy to confuse"
            - name: Two protected study blocks every week
              description: |-
                ## Purpose
                Fundamentals exams are passed by steady repetition, and two fixed blocks a week beat a cram session the weekend before. Putting them in the calendar as appointments, at times you can actually keep, is the machinery the rest of the area runs on.

                ## Milestones
                1. Two weekly blocks of 45 to 90 minutes in your calendar, recurring until exam week.
                2. Each block started with the sub-topic from that week of the plan, not whatever feels easy.
                3. Kept and missed blocks marked every week.
                4. A fallback slot agreed with yourself for any block that gets cancelled.

                ## Notes
                Start from the **Habit tracker** template. Missing one block is normal; missing three in a row means the plan, not you, needs changing.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "At least 80 percent of planned study blocks kept over the weeks before the exam, as shown by the tracker."
                cadence: rolling
              tasks:
                - "Block two recurring study slots in your calendar until exam week"
                - "Open the week's plan page at the start of every block"
                - "Study the planned sub-topic for 45 minutes or more @recurring(weekly:tue,sat)"
                - "Mark each block kept or missed in the habit tracker"
            - name: Daily ten-question practice set
              description: |-
                ## Purpose
                Quick recognition of which service or concept fits a short scenario is what AZ-900 questions reward, and it comes from volume more than from reading. Ten questions a day on a phone, over a coffee or a commute, adds up to several hundred questions before the exam without needing an extra study block.

                ## Milestones
                1. A question source chosen that matches the current outline.
                2. A ten-question set done on most days, with the score noted.
                3. Every wrong answer sent to the wrong-answer log the same day.
                4. A running seven-day average visible so you can see the trend.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Ten practice questions answered on at least five days a week, with a seven-day average that rises over the study period."
                cadence: rolling
              tasks:
                - "Install or bookmark the question bank on your phone"
                - "Answer ten practice questions and note the score @recurring(daily)"
                - "Send every wrong answer to the wrong-answer log"
                - "Work out your seven-day average each Sunday"
            - name: Wrong-answer log and weekly review
              description: |-
                ## Purpose
                Questions you get wrong are the most useful material you have, but only if you find out why. A log that records the concept each wrong answer was really testing, reviewed once a week, turns repeated mistakes such as mixing up availability zones and region pairs into fixed knowledge.

                ## Milestones
                1. A log with columns for the question topic, your answer, the right answer and the reason in one line.
                2. Each entry tagged with its skill area from the outline.
                3. A weekly review where repeated topics are counted and the top two scheduled for the next study block.
                4. Topics that stopped appearing marked as fixed.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A wrong-answer log reviewed weekly, with recurring topics counted and fed into the next study block."
                cadence: rolling
              tasks:
                - "Create the wrong-answer log with five columns"
                - "Tag every entry with its skill area"
                - "Count repeated topics and pick the top two to study next @recurring(weekly:sun)"
                - "Mark topics fixed once they stop appearing for two weeks"
            - name: Spaced flashcards for Azure service names
              description: |-
                ## Purpose
                Half the difficulty of AZ-900 for newcomers is vocabulary: dozens of service names, several of them recently renamed, that all sound plausible as an answer. A small flashcard deck with spaced repetition keeps names, one-line purposes and pricing models fresh with five minutes a day.

                ## Milestones
                1. A flashcard app chosen that schedules cards by spaced repetition.
                2. A card for each service and concept named in the outline, with its purpose on the back.
                3. New cards added each week from that week's study.
                4. A daily review habit of five minutes held for most of the study period.

                ## Notes
                Make your own cards rather than importing a shared deck. Shared decks often still carry old service names.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A personal flashcard deck covering every service named in the outline, reviewed on most days until the exam."
                cadence: rolling
              tasks:
                - "Choose a flashcard app with spaced repetition"
                - "Review due cards for five minutes @recurring(daily)"
                - "Add cards for the services met in this week's study @recurring(weekly:fri)"
                - "Fix any card that still uses a retired service name"
            - name: Monthly timed practice assessment and score tracking
              description: |-
                ## Purpose
                Scores from a single practice test are noisy, but the same assessment taken under timed conditions once a month shows whether each skill area is actually improving. Recording the result by skill area also tells you when the plan needs to change, and gives the readiness decision real numbers.

                ## Milestones
                1. A fixed day each month for a full timed practice assessment.
                2. Each result recorded with the date and the score per skill area.
                3. The plan for the coming month adjusted towards the weakest area.
                4. Three consecutive results visible side by side before you book.

                ## Notes
                Start from the **Metrics log** template. Rotate question sources if you start recognising questions; a remembered answer is not a learned one.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A metrics log with at least three monthly timed results, each broken down by skill area, with the plan adjusted after each."
                cadence: rolling
              tasks:
                - "Set up a metrics log with one column per skill area"
                - "Sit a full timed practice assessment @recurring(monthly:12)"
                - "Record the result per skill area with the date"
                - "Reset next month's plan around the weakest skill area @recurring(monthly:27)"
            - name: Weekly sandbox lab session
              description: |-
                ## Purpose
                Creating a storage account, a virtual network or a policy assignment yourself makes the exam's scenario wording concrete in a way that reading never does. One short lab a week in the Learn sandbox or your own subscription, tied to that week's sub-topic, is enough for AZ-900.

                ## Milestones
                1. A list of short labs matched to the outline, one per study week.
                2. Each lab done in a resource group named for that day.
                3. Every lab resource deleted at the end of the session.
                4. Two or three lines of lab notes written per session: what you built and what surprised you.

                ## Notes
                AZ-900 does not test portal clicks, but it does test what a service is for. Use labs to see that, not to memorise menus.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A lab completed in most study weeks, with a short note per lab and no lab resources left running afterwards."
                cadence: rolling
              tasks:
                - "Match one short lab to each week of your study plan"
                - "Do the week's lab and delete its resource group afterwards @recurring(weekly:thu)"
                - "Write three lines of notes on what you built"
                - "Check the portal for any resource you forgot to delete"
            - name: Monthly lab subscription clean-up
              description: |-
                ## Purpose
                Stray public IP addresses, disks left behind by deleted virtual machines and storage accounts from early labs keep billing quietly. A monthly sweep of every resource group, plus a look at the cost trend, keeps the lab subscription at the figure you planned.

                ## Milestones
                1. All resource groups listed and anything not tied to a current lab deleted.
                2. Orphaned disks and public IP addresses checked for and removed.
                3. The month's spend compared with the budget.
                4. A note made of anything that cost more than expected and why.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A monthly sweep that leaves no unused resources in the lab subscription and spend within the budget you set."
                cadence: rolling
              tasks:
                - "List every resource group in the lab subscription @recurring(monthly:20)"
                - "Delete groups not tied to a current lab"
                - "Search for unattached disks and unused public IP addresses"
                - "Note anything that cost more than expected"
            - name: Weekly check-in with a study partner
              description: |-
                ## Purpose
                Studying alone, it is easy to let a week slip with nobody noticing. A fifteen-minute call or message thread with one other person sitting AZ-900, where each of you reports blocks kept and explains one concept to the other, adds just enough accountability and catches misunderstandings early.

                ## Milestones
                1. One study partner found, from a course, a colleague or an online study group.
                2. A fixed weekly check-in time agreed.
                3. Each check-in covering blocks kept, the week's score and one concept explained aloud.
                4. Both exam dates shared so you can push each other through the final weeks.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A weekly check-in held with a study partner on most weeks until both of you have sat the exam."
                cadence: rolling
              tasks:
                - "Ask a colleague, classmate or study group member to partner with you"
                - "Agree a fixed fifteen-minute weekly slot"
                - "Explain one concept aloud and report your week @recurring(weekly:wed)"
                - "Share your target exam dates with each other"
            - name: Cloud deployment models and the shared responsibility model
              description: |-
                ## Purpose
                Many later questions quietly depend on this first skill area: who patches the operating system, who owns the data, and what changes between public, private and hybrid cloud. Being able to draw the shared responsibility split for on-premises, IaaS, PaaS and SaaS from memory makes a whole family of questions straightforward.

                ## Milestones
                1. Public, private, hybrid and multicloud defined in your own words, with one example each.
                2. The shared responsibility diagram drawn from memory for on-premises, IaaS, PaaS and SaaS.
                3. The responsibilities that always stay with the customer listed: data, devices, accounts and identities.
                4. The related Microsoft Learn module completed and its knowledge check passed.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "The shared responsibility split drawn correctly from memory for all four models, and the module knowledge check passed."
                cadence: phased
                effort_hours_estimate: "3"
              tasks:
                - "Complete the Learn module on cloud models and shared responsibility"
                - "Draw the shared responsibility diagram from memory"
                - "Check your drawing against the module and correct it"
                - "Write one real example each of public, private and hybrid cloud"
            - name: Consumption pricing, CapEx and OpEx
              description: |-
                ## Purpose
                Exam questions about cost are less about prices and more about the model: paying for what you use, moving spend from capital to operating expenditure, and why that matters to a finance team. Someone from a finance or procurement role often finds this the easiest section; engineers often find it the one they skimmed.

                ## Milestones
                1. Capital and operating expenditure explained with a server purchase and a monthly cloud bill as examples.
                2. The consumption-based model explained, including when it costs more than owning hardware.
                3. Serverless billing explained as a contrast to paying for a running virtual machine.
                4. Five practice questions on these concepts answered without a mistake.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "CapEx, OpEx and consumption pricing explained correctly on one page, with five practice questions answered without error."
                cadence: phased
                effort_hours_estimate: "2"
              tasks:
                - "Read the Learn unit on the consumption-based model"
                - "Write a paragraph contrasting a server purchase with a monthly cloud bill"
                - "Note one case where owning hardware would be cheaper"
                - "Answer five practice questions on cloud cost models"
            - name: IaaS, PaaS and SaaS with real examples
              description: |-
                ## Purpose
                Scenario questions describe a business need and expect you to pick the service type, so you need examples you can recognise in a sentence, not just definitions. Mapping familiar products, including tools you already use at work or university, onto the three types makes the distinction stick.

                ## Milestones
                1. IaaS, PaaS and SaaS each defined with what the customer manages and what Microsoft manages.
                2. Three Azure services placed under each type, such as virtual machines, App Service and Microsoft 365.
                3. Five tools from your own work or study placed under the right type.
                4. A short set of scenario sentences sorted correctly into the three types.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A one-page table of IaaS, PaaS and SaaS with three Azure and five personal examples each placed correctly."
                cadence: phased
                effort_hours_estimate: "2"
              tasks:
                - "Complete the Learn unit on cloud service types"
                - "Place three Azure services under each service type"
                - "Place five tools you use day to day under the right type"
                - "Write ten scenario sentences and sort them a day later"
            - name: High availability, scalability and the other cloud benefits
              description: |-
                ## Purpose
                Cloud benefits in the outline include high availability, scalability, reliability, predictability, security, governance and manageability, and questions often turn on the difference between two of them. Vertical versus horizontal scaling and availability versus reliability are the pairs people most often swap.

                ## Milestones
                1. Each benefit named in the outline defined in one sentence of your own.
                2. Vertical and horizontal scaling explained with a single example of each.
                3. High availability and reliability distinguished with an example where one holds without the other.
                4. What an uptime figure in a service level agreement means explained in plain terms.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A one-sentence definition for every cloud benefit in the outline, plus correct examples for vertical and horizontal scaling."
                cadence: phased
                effort_hours_estimate: "2"
              tasks:
                - "List every cloud benefit named in the current outline"
                - "Write one sentence of your own defining each"
                - "Explain vertical and horizontal scaling with one example each"
                - "Add the benefit pairs you confuse to your flashcards"
            - name: Regions, availability zones and region pairs
              description: |-
                ## Purpose
                Azure's physical architecture is a favourite source of questions: what a region is, how availability zones protect against a datacentre failure, why region pairs exist and what sovereign regions are for. Getting the hierarchy right also explains many of the storage redundancy options that come later.

                ## Milestones
                1. The hierarchy of datacentre, availability zone, region and geography written out correctly.
                2. The kind of failure each layer protects against noted beside it.
                3. Region pairs and sovereign regions explained in a sentence each.
                4. The regions nearest you, and whether they offer availability zones, looked up and recorded.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A correct one-page diagram of Azure's physical hierarchy, with the failure each layer covers and your nearest regions noted."
                cadence: phased
                effort_hours_estimate: "2"
              tasks:
                - "Complete the Learn unit on Azure physical infrastructure"
                - "Draw the datacentre to geography hierarchy from memory"
                - "Look up the Azure regions nearest you and whether they have zones"
                - "Write one sentence each on region pairs and sovereign regions"
            - name: Subscriptions, resource groups and management groups in practice
              description: |-
                ## Purpose
                The logical hierarchy of management groups, subscriptions, resource groups and resources decides where billing, access and policy apply, and the exam assumes you can picture it. Building a small version in a lab, and deleting a resource group to watch everything in it go, makes inheritance obvious.

                ## Milestones
                1. The four levels of the hierarchy written out with what each level is for.
                2. A resource group created in your lab environment with two resources in it.
                3. The resource group deleted and the removal of its contents confirmed.
                4. The way access and policy inherit down the hierarchy explained in your notes.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "The resource hierarchy written out with each level's purpose, backed by a lab where a resource group and its contents were created and deleted."
                cadence: phased
                effort_hours_estimate: "2"
              tasks:
                - "Write the four hierarchy levels with a line on each"
                - "Create a resource group with two small resources in your lab"
                - "Delete the group and confirm its resources are gone"
                - "Note how access and policy pass down the hierarchy"
            - name: Azure compute choices from virtual machines to Functions
              description: |-
                ## Purpose
                Matching a need to a compute option is a core AZ-900 skill: virtual machines and scale sets, Azure Virtual Desktop, containers with Container Instances or AKS, App Service, and Azure Functions. A comparison table built from what each one hands to Microsoft, and how each one bills, answers most of these questions.

                ## Milestones
                1. A table of the compute services in the outline with what you manage and how each is billed.
                2. Availability sets and scale sets explained with the problem each solves.
                3. One small virtual machine created and deleted in the lab to see what it brings with it.
                4. Three scenario questions on choosing compute answered correctly.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A compute comparison table covering every service in the outline, with three scenario questions answered correctly."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Complete the Learn module on Azure compute services"
                - "Build a table of each compute option, what you manage and how it bills"
                - "Create and delete a small virtual machine and list what it created"
                - "Answer three scenario questions on choosing compute"
            - name: Azure networking basics for AZ-900
              description: |-
                ## Purpose
                Networking questions at this level are about purpose, not configuration: what a virtual network is for, how peering connects two of them, when a VPN Gateway is enough and when ExpressRoute is worth it, and what Azure DNS, public endpoints and private endpoints do. Plain-language definitions and one simple diagram cover the ground.

                ## Milestones
                1. Virtual networks, subnets and peering explained in your own words.
                2. VPN Gateway and ExpressRoute compared on connection type, privacy and typical use.
                3. Public and private endpoints distinguished with one example each.
                4. A simple diagram drawn of an office connected to a virtual network in Azure.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Plain-language notes on every networking service in the outline, a VPN Gateway versus ExpressRoute comparison and one connection diagram."
                cadence: phased
                effort_hours_estimate: "3"
              tasks:
                - "Complete the Learn module on Azure networking services"
                - "Compare VPN Gateway and ExpressRoute in a short table"
                - "Draw an office connected to an Azure virtual network"
                - "Create a virtual network with two subnets in the lab and delete it"
            - name: Storage accounts, redundancy options and access tiers
              description: |-
                ## Purpose
                Storage brings some of the most memorisable and most confusable content in the exam: blob, file, queue and table storage, the hot, cool, cold and archive tiers, and redundancy options from LRS to GZRS. Linking each redundancy option back to zones and regions turns a list of acronyms into something you can reason about.

                ## Milestones
                1. The storage services in the outline listed with one typical use each.
                2. Each redundancy option written with how many copies it keeps and where.
                3. The access tiers listed with their trade-off between storage cost and retrieval cost.
                4. A storage account created in the lab, a file uploaded and its tier changed.

                ## Notes
                Check the current outline for the exact tiers and redundancy options it names; Microsoft has added tiers over time.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A storage page listing every service, redundancy option and access tier in the outline, backed by one lab where a blob's tier was changed."
                cadence: phased
                effort_hours_estimate: "3"
              tasks:
                - "Complete the Learn module on Azure storage services"
                - "Write each redundancy option with its number of copies and locations"
                - "Upload a file to a lab storage account and change its access tier"
                - "Add the redundancy acronyms to your flashcards"
            - name: Microsoft Entra ID, MFA and role-based access control
              description: |-
                ## Purpose
                Identity questions cover Microsoft Entra ID, the service once called Azure Active Directory, along with authentication methods, multifactor authentication, Conditional Access, external identities and Azure role-based access control. Separating authentication from authorisation, and Entra roles from Azure roles, clears up most of the confusion.

                ## Milestones
                1. Authentication and authorisation distinguished with one everyday example.
                2. Entra ID, MFA, passwordless sign-in, single sign-on and Conditional Access each explained in a sentence.
                3. Azure RBAC explained with owner, contributor and reader as examples and scope noted.
                4. A role assignment viewed or made on a lab resource group.

                ## Notes
                Older material uses Azure AD throughout. Learn both names, but expect the exam to use Microsoft Entra ID.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Notes defining every identity and access topic in the outline, with authentication and authorisation clearly separated, and one role assignment viewed in a lab."
                cadence: phased
                effort_hours_estimate: "3"
              tasks:
                - "Complete the Learn module on identity, access and security"
                - "Write one sentence each on MFA, SSO, passwordless and Conditional Access"
                - "Open access control on a lab resource group and read the role assignments"
                - "Explain the difference between authentication and authorisation aloud"
            - name: Zero Trust, defence in depth and Defender for Cloud
              description: |-
                ## Purpose
                Security concepts in AZ-900 are models rather than tools: Zero Trust's assume-breach thinking, the layers of defence in depth, and Microsoft Defender for Cloud as the service that watches posture. Being able to name the layers in order and give a control for each is the level the exam asks for.

                ## Milestones
                1. The three Zero Trust principles written in your own words.
                2. The layers of defence in depth listed in order with one example control per layer.
                3. What Defender for Cloud does, and for which environments, summarised in three lines.
                4. Five practice questions on security concepts answered without a mistake.
              priority: low
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A one-page security summary with the Zero Trust principles, the defence in depth layers and their controls, and a Defender for Cloud description."
                cadence: phased
                effort_hours_estimate: "2"
              tasks:
                - "Read the Learn units on Zero Trust and defence in depth"
                - "List the defence in depth layers with one control each"
                - "Summarise Defender for Cloud in three lines"
                - "Answer five practice questions on security concepts"
            - name: Governance with Azure Policy, resource locks and tags
              description: |-
                ## Purpose
                Management and governance is the third skill area and the one many candidates leave until last. Assigning a built-in policy, adding a delete lock and tagging resources in the lab shows in half an hour why each tool exists, and where Microsoft Purview fits for data governance.

                ## Milestones
                1. Azure Policy, resource locks, tags and Microsoft Purview each defined with the problem it solves.
                2. A built-in policy assigned to a lab resource group and its compliance result viewed.
                3. A delete lock added, a deletion attempted and blocked, then the lock removed.
                4. Tags added to lab resources and used to filter the cost view.
              priority: medium
              frontmatter:
                mode: building
                output_kind: knowledge
                success_criteria: "One lab session completed in which a policy was assigned, a lock blocked a deletion and tags filtered costs, with a note on each tool's purpose."
                cadence: phased
                effort_hours_estimate: "3"
              tasks:
                - "Assign a built-in policy such as allowed locations to a lab resource group"
                - "Add a delete lock and try to delete the group"
                - "Tag two lab resources and filter the cost view by tag"
                - "Write a line on what Microsoft Purview is for"
            - name: Pricing calculator and TCO estimate for a sample workload
              description: |-
                ## Purpose
                Questions on cost management ask what the pricing calculator, the total cost of ownership calculator and Cost Management each do, and which factors change a bill: region, resource type, consumption, bandwidth and reserved capacity. Building one real estimate for a small website shows all of those factors moving.

                ## Milestones
                1. An estimate built in the pricing calculator for a small website with a database and storage.
                2. The same estimate repriced in a second region and the difference noted.
                3. The effect of a reservation or savings option on one component recorded.
                4. The TCO calculator and Cost Management each described in one sentence by what question they answer.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A saved pricing calculator estimate for a sample workload, repriced in two regions, with the cost factors that changed it listed."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Price a small website, database and storage in the pricing calculator"
                - "Switch the region and note how the total changes"
                - "Apply a reservation option to one component and record the effect"
                - "Write one sentence each on the TCO calculator and Cost Management"
            - name: Tools for managing and deploying Azure resources
              description: |-
                ## Purpose
                The outline names several ways to work with Azure: the portal, Cloud Shell with Azure CLI and PowerShell, Azure Arc for resources outside Azure, and infrastructure as code with ARM templates and Bicep. Trying each for a few minutes is enough to answer which tool fits a described task.

                ## Milestones
                1. The portal, Cloud Shell, Azure CLI and Azure PowerShell each used once to list resource groups.
                2. Infrastructure as code explained, with ARM templates and Bicep named as Azure's formats.
                3. Azure Arc explained with an example of an on-premises or other-cloud server.
                4. A one-line rule written for when each tool is the natural choice.
              priority: low
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "Each management tool in the outline tried or described, with a one-line rule for when to use each saved in your notes."
                cadence: phased
                effort_hours_estimate: "2"
              tasks:
                - "Open Cloud Shell and list resource groups with Azure CLI"
                - "Run the same listing in Azure PowerShell"
                - "Read a short Bicep example and note what it would deploy"
                - "Write when you would reach for each management tool"
            - name: Monitoring with Advisor, Service Health and Azure Monitor
              description: |-
                ## Purpose
                Three monitoring tools are regularly confused: Azure Advisor makes recommendations, Service Health reports Microsoft's own incidents and planned maintenance, and Azure Monitor collects metrics and logs from your resources. Opening each one in the lab and noting what it showed you makes the distinction hard to forget.

                ## Milestones
                1. Advisor opened and its recommendation categories recorded.
                2. Service Health opened and the difference between Azure status and your own service health noted.
                3. Azure Monitor, Log Analytics and Application Insights each described in a sentence.
                4. A single question written for each tool that only that tool answers.
              priority: low
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A note giving the distinct question that Advisor, Service Health and Azure Monitor each answer, based on opening all three."
                cadence: phased
                effort_hours_estimate: "2"
              tasks:
                - "Open Azure Advisor and list its recommendation categories"
                - "Open Service Health and read any current advisories"
                - "Write a sentence each on Monitor, Log Analytics and Application Insights"
                - "Write the one question each tool answers"
            - name: Migration and data movement options
              description: |-
                ## Purpose
                Moving existing servers and data into Azure has its own small set of services in the outline, including Azure Migrate, Azure Data Box, AzCopy, Storage Explorer and Azure File Sync. Matching each one to the size of the data and whether the network can carry it answers nearly every question on the topic.

                ## Milestones
                1. Each migration and data movement tool in the outline listed with its typical use.
                2. A rule of thumb written for when shipping a Data Box beats copying over the network.
                3. Storage Explorer or AzCopy used once to copy a file to a lab storage account.
                4. Three scenario questions on migration tools answered correctly.
              priority: low
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A migration tools table matched to data size and network constraints, and three scenario questions answered correctly."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "List each migration and data movement tool with its typical use"
                - "Copy one file to a lab storage account with Storage Explorer or AzCopy"
                - "Write your rule for when to ship a Data Box instead"
                - "Answer three scenario questions on migration tools"
            - name: Choosing a course or practice test to pay for
              description: |-
                ## Purpose
                Microsoft Learn's free learning paths and practice assessment are enough for many people, and a paid course or question bank only earns its price if it fills a gap they leave. Comparing two or three options on how recently they were updated, how close they are to the current outline and what reviewers say about the explanations stops you buying something stale.

                ## Milestones
                1. A decision on whether the free Microsoft material is enough, based on your baseline score.
                2. Up to three paid options shortlisted, each with its last update date checked against the outline.
                3. One option chosen, or none, with the price and reason recorded.
                4. Any refund window noted in your calendar.

                ## Notes
                Start from the **Purchase decision** template. Avoid anything sold as real exam questions: it breaks the exam agreement and can cost you the credential.
              priority: medium
              deadlineOffsetDays: 21
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A recorded decision to buy one named course or question bank, or none, with its update date checked against the outline."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Decide from your baseline whether the free material covers your gaps"
                - "Shortlist up to three paid options and check when each was updated"
                - "Read recent reviews for explanation quality, not pass claims"
                - "Record your choice and any refund deadline"
            - name: Free voucher and discount options check
              description: |-
                ## Purpose
                Microsoft has at times offered free or discounted fundamentals exams through its virtual training events, student offers and employer or partner programmes, and the rules change often. Checking what is open to you before booking can save the full exam price, as long as you note the voucher's expiry.

                ## Milestones
                1. Current Microsoft training events for Azure fundamentals checked for any exam offer.
                2. Student pricing or academic discounts checked if you are enrolled.
                3. Your employer's training budget or Microsoft partner status asked about.
                4. Any voucher obtained recorded with its code location and expiry date.

                ## Notes
                Read the terms: event vouchers usually have to be used within a set window, and some exclude online proctoring in certain countries.
              priority: low
              deadlineOffsetDays: 21
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A note of every voucher or discount route checked, with any voucher obtained and its expiry date in your calendar."
                cadence: one-shot
                effort_hours_estimate: "1"
              tasks:
                - "Check Microsoft's current virtual training events for Azure fundamentals"
                - "Check whether student exam pricing applies to you"
                - "Ask your manager or training team whether the company covers exam fees"
                - "Put any voucher expiry date in your calendar"
            - name: Online proctored or test centre decision
              description: |-
                ## Purpose
                Most candidates can take AZ-900 at home with an online proctor or at a test centre, and each has its own ways to go wrong: a shared flat, a shaky connection or a work laptop with locked settings on one side, travel and limited slots on the other. Choosing deliberately, after running the system test, avoids losing the exam fee on the day.

                ## Milestones
                1. The online system test run on the computer and network you would use.
                2. Your room checked against the online proctoring rules: clear desk, no one entering, no second screen.
                3. The nearest test centres and their available dates looked up.
                4. A delivery method chosen with the reason written down.

                ## Notes
                Company laptops often block the proctoring software. Use a personal machine if you can.
              priority: medium
              deadlineOffsetDays: 28
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A delivery method chosen after a passed online system test or a confirmed test centre slot, with the reason recorded."
                cadence: one-shot
                effort_hours_estimate: "1"
              tasks:
                - "Run the online exam system test on your own computer"
                - "Read the online proctoring room and desk rules"
                - "Look up test centres near you and their next free dates"
                - "Write down your delivery choice and why"
            - name: Exam accommodations and language options
              description: |-
                ## Purpose
                Candidates sitting in a language that is not their first, and those with a disability or medical condition, may be able to get extra time or other adjustments, but these have to be requested and approved before booking. Sorting it out early means the approved arrangement is attached to the booking rather than discovered too late.

                ## Milestones
                1. The available exam languages checked and the best one for you chosen.
                2. Microsoft's accommodations page read and the options relevant to you noted.
                3. Any request submitted with the supporting documents it asks for.
                4. The approval confirmed on your certification profile before you book.

                ## Notes
                Skip this if none of it applies to you. If it does, allow several weeks for a request to be reviewed.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "Exam language chosen and any accommodation request approved and showing on your profile before the exam is booked."
                cadence: one-shot
                effort_hours_estimate: "1"
              tasks:
                - "Check which languages the AZ-900 exam is offered in"
                - "Read Microsoft's exam accommodations page"
                - "Gather any documents an accommodation request needs"
                - "Confirm the approval shows on your profile before booking"
            - name: Readiness decision before booking
              description: |-
                ## Purpose
                Booking too early leads to a rushed resit; booking too late lets momentum fade. A written readiness check, using three timed practice results, the wrong-answer trend and whether you can explain each outline sub-topic aloud, makes the booking decision on evidence rather than nerves.

                ## Milestones
                1. Three recent timed practice results compared, by skill area.
                2. Every outline sub-topic marked as solid, shaky or unknown.
                3. A readiness rule applied, for example consistently comfortable scores with no unknown sub-topics.
                4. A decision recorded to book now, or a dated extra fortnight on named weak topics.

                ## Notes
                Microsoft does not publish a practice score that guarantees a pass. Set your own margin and stick to it.
              priority: high
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A recorded book or wait decision based on three timed practice results and a sub-topic check, with any extra study dated."
                cadence: one-shot
                effort_hours_estimate: "1"
              tasks:
                - "Put your last three timed practice results side by side"
                - "Mark every outline sub-topic solid, shaky or unknown"
                - "Write your own readiness rule before looking at the results again"
                - "Record the decision to book or to study two more weeks"
            - name: Booking the AZ-900 exam
              description: |-
                ## Purpose
                Booking a date is what turns study into preparation. Doing it through your certification profile, with the right name, delivery method, time zone and any voucher applied, is a short task that is surprisingly easy to get wrong, so it deserves a careful half hour.

                ## Milestones
                1. The exam booked through your Microsoft certification profile with the chosen delivery method.
                2. The name on the booking checked against your ID.
                3. The confirmation email saved and the date, time and time zone added to your calendar.
                4. The reschedule and cancellation deadlines written next to the booking.

                ## Notes
                Book a time of day when you are usually sharp. Early morning online slots also mean fewer interruptions at home.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "An AZ-900 booking confirmed under your legal name, with the date, time zone and reschedule deadline in your calendar."
                cadence: one-shot
                effort_hours_estimate: "1"
              tasks:
                - "Book the exam from your certification profile with any voucher applied"
                - "Check the name on the booking matches your ID"
                - "Add the exam and the reschedule deadline to your calendar"
                - "Save the confirmation email in your study folder"
            - name: Full mock exam in the final week
              description: |-
                ## Purpose
                A full timed mock under exam conditions, around five days before the test, is a rehearsal of the pacing, the reading of short scenarios and the nerves. It leaves enough time to patch one or two weak spots without starting anything new.

                ## Milestones
                1. One full timed practice assessment sat at the same time of day as the real exam.
                2. No notes, phone or breaks used during the mock.
                3. Every wrong answer reviewed the same day and traced to a sub-topic.
                4. A short list of no more than three topics to revise in the remaining days.
              priority: medium
              deadlineOffsetDays: 40
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A full timed mock completed under exam conditions within a week of the exam, with no more than three revision topics listed afterwards."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Book the mock in your calendar at your exam time of day"
                - "Sit the full mock with phone and notes in another room"
                - "Review every wrong answer the same day"
                - "List up to three topics for the last few days"
            - name: Online exam room and check-in rehearsal
              description: |-
                ## Purpose
                Online proctored exams can be delayed or cancelled for things that have nothing to do with knowledge: a poster on the wall, a phone within reach, a second monitor or a family member walking in. Rehearsing the check-in a day or two before, in the actual room, removes those risks.

                ## Milestones
                1. The system test rerun on the exam computer and network within two days of the exam.
                2. The desk cleared and the room photographed as the check-in will require.
                3. Household members told the exam time and asked to stay out.
                4. Your ID, a charged phone for check-in photos and the exam launch link ready.

                ## Notes
                Skip this if you are sitting at a test centre; instead check the route and the centre's arrival time.
              priority: medium
              deadlineOffsetDays: 42
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A rerun system test passed, the room cleared and the household told, all within two days of an online exam."
                cadence: one-shot
                effort_hours_estimate: "1"
              tasks:
                - "Rerun the system test on the exam computer"
                - "Clear the desk and take down anything with writing on the walls nearby"
                - "Tell everyone at home when the exam starts and ends"
                - "Put your ID and phone beside the computer the night before"
            - name: Exam day plan and result review
              description: |-
                ## Purpose
                On the day the aim is calm logistics and steady pacing, then a proper look at the score report whatever the result. The report's breakdown by skill area is either the start of a retake plan or a useful note on where your knowledge is thinnest before the next exam.

                ## Milestones
                1. Check-in started early enough, at home or at the centre, with ID in hand.
                2. Every question answered, with uncertain ones marked for review if time allowed.
                3. The score report downloaded and the skill area breakdown saved.
                4. A two-line note written on what went well and what surprised you.

                ## Notes
                Microsoft exams can contain unscored questions. Do not spend time trying to spot them; answer everything.
              priority: high
              deadlineOffsetDays: 45
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "The exam sat, the score report saved with its skill area breakdown and a short reflection written the same day."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Start check-in at the earliest time the instructions allow"
                - "Answer every question and use review time on marked ones"
                - "Download the score report and save it with your study notes"
                - "Write two lines on what went well and what surprised you"
            - name: Claiming the badge and updating your CV and profiles
              description: |-
                ## Purpose
                A pass only helps if people can see and verify it. Accepting the digital badge, adding the credential to your CV and professional profiles with a verification link, and writing one line about what you can now discuss, turns the exam into something a recruiter or manager notices.

                ## Milestones
                1. The credential showing on your Microsoft Learn profile with a shareable link.
                2. The digital badge accepted and set to the visibility you want.
                3. Your CV and professional networking profile updated with the credential and its link.
                4. One sentence written for interviews on how AZ-900 helps in your role or target role.

                ## Notes
                Start from the **Resume** template. Fundamentals credentials sit best under a certifications heading, not at the top of the CV above experience.
              priority: medium
              deadlineOffsetDays: 60
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "The AZ-900 credential visible on your Learn profile, CV and one professional profile, each with a working verification link."
                cadence: one-shot
                effort_hours_estimate: "1"
              tasks:
                - "Copy the shareable credential link from your Learn profile"
                - "Accept the digital badge and choose its visibility"
                - "Add the credential with its link to your CV and profile"
                - "Write one interview sentence on what AZ-900 lets you do"
            - name: AZ-900 alongside a degree or college course
              description: |-
                ## Purpose
                Students have free credit through Azure for Students, often a university with Microsoft Learn links, and very little spare money for retakes. Fitting AZ-900 between assignment deadlines and exam periods, rather than on top of them, is what makes it finishable in a term.

                ## Milestones
                1. Your term's assignment deadlines and exam weeks marked on the study plan.
                2. AZ-900 study weeks placed around them, with the exam outside your university exam period.
                3. Azure for Students activated with your academic email, or the Learn sandbox chosen instead.
                4. Your careers service or a lecturer asked whether a student voucher or study group exists.

                ## Notes
                Azure for Students credit usually needs reverifying each year. Note the date so labs do not stop mid-term.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A term plan showing AZ-900 study weeks and exam date placed clear of your course deadlines and exams."
                cadence: phased
                effort_hours_estimate: "2"
              tasks:
                - "Mark this term's assignment deadlines and exam weeks on the plan"
                - "Move the AZ-900 exam date clear of your university exams"
                - "Ask the careers service about student vouchers or study groups"
                - "Review progress against the term plan @recurring(monthly:3)"
            - name: AZ-900 for sales, finance and project roles
              description: |-
                ## Purpose
                Account managers, finance analysts, procurement staff and project managers often sit AZ-900 to follow cloud conversations, read an Azure bill or challenge an estimate, not to build anything. Studying with your own work in mind, such as the last cloud proposal or invoice you saw, makes the material immediately useful.

                ## Milestones
                1. Three situations at work listed where cloud knowledge would have helped.
                2. One real Azure document from work, such as an estimate, proposal or invoice, annotated with outline concepts.
                3. The pricing, SLA and governance topics given extra weight in your plan.
                4. A short conversation held with a technical colleague to check your understanding.

                ## Notes
                Do not take confidential pricing or customer documents home to study. Use a redacted copy or a public example.
              priority: medium
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "One work document annotated with AZ-900 concepts and checked with a technical colleague, with cost and governance topics weighted in your plan."
                cadence: phased
                effort_hours_estimate: "3"
              tasks:
                - "List three work situations where cloud knowledge would have helped"
                - "Annotate a redacted Azure estimate or invoice with outline concepts"
                - "Book twenty minutes with a technical colleague to test your understanding"
                - "Note one Azure term heard at work and look it up @recurring(monthly:8)"
            - name: AZ-900 as a first step into IT from another career
              description: |-
                ## Purpose
                Career changers from teaching, hospitality, retail or admin often pick AZ-900 as a low-cost signal of intent, but a fundamentals badge alone rarely lands a technical job. Pairing it with a written target role, a few hands-on lab notes you can show and a plan for the next credential makes it a credible first step.

                ## Milestones
                1. A target entry role named, such as cloud support, IT help desk or junior administrator.
                2. Three job adverts for that role read and the skills they ask for listed.
                3. Lab notes from your study tidied into a short write-up you could show an interviewer.
                4. The next credential after AZ-900 chosen to match the adverts.

                ## Notes
                Transferable skills such as customer handling and documentation matter in support roles. Write them down alongside the technical ones.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A named target role, a skills list from three real adverts, a lab write-up and a chosen next credential."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Name the entry role you are aiming for"
                - "Read three adverts for that role and list the skills they want"
                - "Turn your lab notes into a one-page write-up"
                - "Choose the credential that best matches those adverts"
            - name: Fitting AZ-900 around work and caring duties
              description: |-
                ## Purpose
                Parents, carers and people working shifts rarely get two clean evenings a week. A plan built from short fixed pieces, such as twenty minutes before others wake, questions on the commute and one longer block when cover is arranged, gets most people to the exam in eight to ten weeks instead of six.

                ## Milestones
                1. The real free windows in a typical week listed, however short.
                2. Study tasks sorted into ones that fit ten minutes, thirty minutes and an hour.
                3. One longer weekly block agreed with a partner, family member or carer cover.
                4. The exam date set with the longer timeline in mind, and an online slot chosen for a quiet time at home.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A week template that places study in your real free windows, with one longer block agreed and an exam date set to match."
                cadence: phased
                effort_hours_estimate: "2"
              tasks:
                - "List every free window in a normal week, even ten minutes"
                - "Sort study tasks by the time they need"
                - "Agree one longer weekly block with whoever covers at home"
                - "Plan the coming week's study windows @recurring(weekly:mon)"
            - name: Retake plan after a failed attempt
              description: |-
                ## Purpose
                Failing at fundamentals level is common, often from one weak skill area or rushed scenario questions, and the score report says where. A short, targeted plan built from that report, with a waiting period that respects Microsoft's retake policy, usually gets people through on the second sitting.

                ## Milestones
                1. The score report's skill area breakdown compared with your last practice results.
                2. The current retake waiting period and price checked.
                3. A two to four week plan written around the weakest skill area.
                4. A new exam date booked once two timed practice results clear your readiness rule.

                ## Notes
                Skip this if you passed. If you did not, wait a day before planning; the report reads differently once the disappointment fades.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A dated retake plan targeting the weakest skill area from the score report, with a new exam booked after two timed results meet your rule."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Compare the score report breakdown with your practice results"
                - "Check the current retake waiting period and price"
                - "Do one session on the weakest skill area @recurring(weekly:sat)"
                - "Book the retake once two timed results meet your rule"
            - name: Running an AZ-900 study cohort for colleagues
              description: |-
                ## Purpose
                Teams moving to Azure often ask a lead or champion to get several colleagues through AZ-900 together, which works far better than leaving each person to it. A six to eight week cohort with a weekly session, shared plan and a group exam window builds a common vocabulary across the team.

                ## Milestones
                1. Interested colleagues listed and their manager approval for study time confirmed.
                2. A shared plan and weekly session time agreed for the cohort.
                3. Voucher or fee arrangements settled with the training budget holder.
                4. Each member's practice progress checked monthly and a group exam window set.

                ## Notes
                Keep sessions to one topic and a few practice questions. Let different members explain topics; teaching is the best revision.
              priority: medium
              frontmatter:
                mode: service
                output_kind: deliverable
                success_criteria: "A cohort of colleagues taken through a shared plan, with weekly sessions held and every member given an exam window."
                cadence: phased
                effort_hours_estimate: "12"
              tasks:
                - "Ask the team who wants to sit AZ-900 this quarter"
                - "Agree study time and exam fees with the budget holder"
                - "Run the weekly cohort session on one outline topic @recurring(weekly:fri)"
                - "Check each member's practice scores @recurring(monthly:15)"
            - name: One-page Azure proposal for a real problem
              description: |-
                ## Purpose
                After the pass, the best test of fundamentals knowledge is explaining a sensible Azure option for a real need to someone who did not sit the exam. Writing a one-page proposal for a small problem at work, school or a community group, with service choices, a cost estimate and the governance basics, shows the knowledge is usable.

                ## Milestones
                1. A real, small problem chosen, such as hosting a club website or storing shared files.
                2. Two or three Azure service options described with the service type of each.
                3. A pricing calculator estimate attached for the preferred option.
                4. Identity, backup and cost guardrails covered in a short paragraph.
                5. The proposal explained to one non-technical person and their questions noted.

                ## Notes
                Keep it to fundamentals level. The aim is clear reasoning, not an architecture that would pass a design review.
              priority: low
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "A one-page proposal with service options, a cost estimate and guardrails, explained to one non-technical person."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Pick a small real problem that Azure could solve"
                - "Ask the agent to suggest service options, then check each against your notes"
                - "Price your preferred option in the pricing calculator"
                - "Explain the proposal to a non-technical friend or colleague"
            - name: Choosing what to study after AZ-900
              description: |-
                ## Purpose
                Where you are heading decides the right next credential after AZ-900: an associate exam such as AZ-104 for administration, another fundamentals exam such as AI-900, SC-900 or DP-900 for a specialism, or nothing more if you only needed the vocabulary. Deciding within a month of passing keeps the knowledge fresh for the next step.

                ## Milestones
                1. Your goal for the next year written in one sentence.
                2. Two or three candidate next credentials compared against that goal.
                3. The fact that fundamentals certifications do not expire confirmed on Microsoft Learn, or any change noted.
                4. One next credential chosen, or a decision to stop, recorded with a start month.

                ## Notes
                Associate exams expect real hands-on experience. If you have none yet, a few months of lab work first is time well spent.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A recorded choice of the next credential, or a decision to stop, with the reasoning and a start month."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Write your goal for the next twelve months in one sentence"
                - "Compare two or three possible next credentials against it"
                - "Confirm on Microsoft Learn whether AZ-900 has any renewal rule"
                - "Record your next credential and the month you will start"
---

# Azure Fundamentals (AZ-900)

This area takes you from wondering whether AZ-900 is worth sitting to holding the badge and knowing what comes after it, whether you are a student meeting the cloud for the first time or someone in sales, finance or project work who keeps hearing Azure words in meetings. It opens with foundations (the fit decision, the current skills outline, your Learn profile, a safe lab environment with a budget alert, a baseline score and a dated plan), then the weekly study machinery, topic projects across cloud concepts, Azure architecture and services, and management and governance, the decisions about courses, vouchers and delivery, the booking, mock and exam day, variants for students, non-technical roles, career changers, busy carers, retakes and team cohorts, and two pieces of work for after the pass.

The rhythm is two protected study blocks a week, a short daily question set and flashcard review, a weekly wrong-answer review and sandbox lab, and a monthly timed practice assessment, cost check and plan reset. The Habit tracker, Metrics log, Purchase decision and Resume templates pair with keeping study blocks, tracking scores by skill area, choosing a course and updating your CV once you pass. Installing adds all 50 projects as active, so archive the ones that are not for you yet.
