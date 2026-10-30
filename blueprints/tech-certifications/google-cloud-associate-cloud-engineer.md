---
id: tech-certifications.google-cloud-associate-cloud-engineer
name: Google Cloud Associate Cloud Engineer
description: "A route to Google Cloud Associate Cloud Engineer: the exam guide, a sandbox project with budget alerts, gcloud fluency, labs across every exam section, timed practice exams, booking and exam day."
category: personal
version: 1.0.0
tags: [tech-certifications, google-cloud-associate-cloud-engineer, engineer, google-cloud, gcp, gcloud, exam-prep, cloud-operations]
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
        - name: Google Cloud Associate Cloud Engineer
          description: "Studying for Google Cloud's Associate Cloud Engineer: projects and billing, compute and storage choices, networking, IAM, the gcloud tool and hands-on labs."
          projects:
            - name: ACE exam guide and section map folder
              description: |-
                ## Purpose
                Google writes the Associate Cloud Engineer exam from its published exam guide, which groups the objectives into sections such as setting up a cloud solution environment, planning and implementing it, keeping it running and configuring access and security. Saving the current guide with its date and turning it into a one-page section map means every course, lab and practice question is checked against the source, not against a video recorded two versions ago.

                ## Milestones
                1. The current exam guide saved as a PDF with the date you downloaded it.
                2. Every section and its objectives copied onto one page, one line per objective.
                3. The current fee, exam length, question format, languages and retake policy noted from Google's certification page, with the date checked.
                4. The credential's validity period and renewal route written at the bottom of the map.

                ## Notes
                Section weightings, fees and retake waiting periods change. Copy them from Google's own page on the day you check, never from a course slide.
              priority: high
              deadlineOffsetDays: 14
              frontmatter:
                mode: research
                output_kind: artifact
                success_criteria: "One folder holds the dated ACE exam guide, a one-page section and objective map and a dated note of fees, format and retake rules taken from Google."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Download the current Associate Cloud Engineer exam guide from Google's certification site"
                - "Copy each section and its objectives onto a single page"
                - "Note the fee, exam length, question format and retake waiting period with today's date"
                - "Write down how long the credential stays valid and how renewal works"
            - name: Cloud skills audit before ACE study
              description: |-
                ## Purpose
                The ACE exam assumes you already understand CIDR ranges, DNS records, SSH keys, Linux permissions and how a web tier talks to a database, and it tests whether you can do things at the command line rather than describe them. Rating yourself against those basics and against each exam section before you start shows whether to begin ACE now, spend two weeks on fundamentals first or take a lighter cloud fundamentals exam before it.

                ## Milestones
                1. A skills matrix rating you from one to four on networking, Linux, scripting, databases and each ACE section.
                2. Every Google Cloud product you have touched listed with how you used it and for how long.
                3. The three weakest rows marked as the first study targets.
                4. A written start decision: ACE now, a fundamentals block first, or a fundamentals credential first.

                ## Notes
                Start from the **Skills matrix** template. If splitting 10.0.0.0/16 into /20 subnets takes you more than a minute, put networking fundamentals at the top of the list.
              priority: medium
              deadlineOffsetDays: 14
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A completed skills matrix with a one to four rating per row and a written decision on where ACE study starts."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Rate yourself one to four on networking, Linux, scripting, databases and each ACE section"
                - "List every Google Cloud product you have used and how you used it"
                - "Split a 10.0.0.0/16 range into four subnets on paper as a quick check"
                - "Write down whether ACE study starts now or after a fundamentals block"
            - name: Diagnostic ACE practice exam and baseline score
              description: |-
                ## Purpose
                Before any study, one timed attempt at a full practice exam shows which sections you already pass on instinct and which ones you are guessing at. A baseline score per section turns a vague plan into a measured one, and taking it cold stops you from spending three weeks on Compute Engine when IAM and networking are the real gaps.

                ## Milestones
                1. Google's official sample questions attempted without notes.
                2. One full-length timed practice exam completed in a single sitting.
                3. The score recorded overall and broken down by exam section.
                4. Each wrong answer tagged as a knowledge gap, a misread question or a guess.

                ## Notes
                A low first score is useful data, not a verdict. Do not repeat the same practice exam within a month, or you will be measuring memory.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A baseline practice score recorded per ACE section, with every wrong answer tagged by cause."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Work through Google's official ACE sample questions without notes"
                - "Sit one full practice exam timed and in one sitting"
                - "Record the score by exam section in your tracker"
                - "Tag each wrong answer as a gap, a misread or a guess"
            - name: Sandbox project with budgets and billing alerts
              description: |-
                ## Purpose
                Labs need a real Google Cloud project, and the classic study mistake is a forgotten GKE cluster or a VM with a GPU quietly billing for a month. A dedicated study project linked to its own billing account, with a budget, alert thresholds sent to your phone and a habit of deleting what you build, lets you practise freely without a surprise invoice.

                ## Milestones
                1. A separate Google account or organisation used only for study, with two-step verification on.
                2. A study project linked to a billing account, with any free trial credit and its expiry noted.
                3. A budget with alerts at low percentages of a small monthly amount, sent to an address you read daily.
                4. A written list of expensive resources you will never leave running overnight.

                ## Notes
                A budget alert warns you; it does not stop spending. Deleting resources, or the whole project, is the only reliable brake.
              priority: high
              deadlineOffsetDays: 10
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A study-only Google Cloud project exists with a budget and at least three alert thresholds, and a test alert has reached your inbox."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Create a Google account used only for cloud study and turn on two-step verification"
                - "Create a study project and link it to a billing account"
                - "Set a monthly budget with alerts at three thresholds to an inbox you check daily"
                - "Write a list of resources you will always delete before ending a lab"
            - name: Choosing an ACE course and question bank
              description: |-
                ## Purpose
                Preparation material splits into three kinds of material: Google's own learning path and labs on Skills Boost, third-party video courses and practice question banks, and they vary a lot in how current they are. Comparing two or three options on recency, lab depth and question quality before paying means you buy one good course and one question bank instead of five half-finished ones.

                ## Milestones
                1. Google's official ACE learning path reviewed for what it covers and what it costs.
                2. Two or three third-party courses or question banks shortlisted with their last update date.
                3. Each option scored on recency, hands-on labs, explanation quality and price.
                4. One course and one question bank chosen, with the reason written down.

                ## Notes
                Start from the **Purchase decision** template. Avoid any source selling real exam questions: it breaks the candidate agreement and can cost you the credential.
              priority: medium
              deadlineOffsetDays: 21
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A scored comparison of at least three ACE study resources and a recorded choice of one course and one question bank."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Open the official ACE learning path on Google Cloud Skills Boost and note its cost"
                - "Shortlist two third-party courses or question banks and note their last update date"
                - "Score each option on recency, labs, explanations and price"
                - "Record the course and question bank you chose and why"
            - name: ACE study calendar to a target exam week
              description: |-
                ## Purpose
                Most engineers with a full-time job need somewhere between six and twelve weeks for ACE, and the ones who never sit it usually had no date. Choosing a target exam week, counting back to the last mock and laying each section into the weeks between gives every study block a job and shows early if the plan does not fit your life.

                ## Milestones
                1. A target exam week chosen and written at the top of the calendar.
                2. Study weeks assigned to each exam section, weakest first.
                3. Two full mock exam dates placed in the final four weeks.
                4. Holidays, on-call weeks and family commitments blocked out before the plan is final.

                ## Notes
                Plan for five study weeks out of every six. The spare week absorbs illness, work crunches and the section that takes longer than expected.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A dated study calendar runs to a target exam week, with every ACE section assigned and two mock exams scheduled."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Pick a target exam week between six and twelve weeks from now"
                - "Assign each ACE section to study weeks, weakest section first"
                - "Put two full mock exams into the last four weeks"
                - "Block out holidays, on-call weeks and family events before finalising"
            - name: Cloud Shell and local gcloud CLI set-up
              description: |-
                ## Purpose
                ACE questions regularly hinge on knowing which gcloud command, flag or configuration does the job, and that knowledge only sticks if you type commands daily. Setting up both Cloud Shell and the Google Cloud CLI on your own machine, with named configurations for your study project, makes the command line the default way you work rather than the console.

                ## Milestones
                1. Cloud Shell opened, with its persistent home directory and editor tried once.
                2. The Google Cloud CLI installed locally and authenticated with gcloud auth login.
                3. A named gcloud configuration holding your study project, default region and zone.
                4. A cheat sheet started with gcloud config, gcloud auth and the component update commands.

                ## Notes
                Know the difference between gcloud auth login for your user and application default credentials for code. The exam likes to test it.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Both Cloud Shell and a local gcloud install work against the study project through a named configuration, and a starter cheat sheet exists."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Open Cloud Shell in the study project and try its editor once"
                - "Install the Google Cloud CLI on your laptop and run gcloud init"
                - "Create a named configuration with your study project, region and zone"
                - "Start a cheat sheet with the config, auth and components commands"
            - name: Exam provider account and delivery mode choice
              description: |-
                ## Purpose
                Delivery runs through an exam partner Google appoints, either online with a remote proctor or at a test centre, and the name on your account has to match your ID exactly. Creating the account early, checking your ID and choosing the delivery mode against your home set-up removes the most common reasons candidates are turned away on the day.

                ## Milestones
                1. An account created on the exam delivery platform Google's certification page links to.
                2. The account name checked letter by letter against your passport or national ID.
                3. Online proctoring requirements read and the system check run on the computer you would use.
                4. Online or test centre chosen, with nearby centres and their available days noted if relevant.

                ## Notes
                A shared house, a second monitor you cannot unplug or an unreliable connection usually points to a test centre.
              priority: medium
              deadlineOffsetDays: 30
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "An exam provider account with a name matching your ID exists, the system check has been run and the delivery mode is chosen."
                cadence: one-shot
                effort_hours_estimate: "1"
              tasks:
                - "Follow the registration link on Google's ACE page and create your account"
                - "Check that the account name matches your ID exactly"
                - "Run the online proctoring system check on the computer you would use"
                - "Write down whether you will test online or at a centre and why"
            - name: Service comparison notebook for the ACE scope
              description: |-
                ## Purpose
                A large share of ACE questions ask which product fits: Cloud Run or GKE, Cloud SQL or Spanner, Nearline or Coldline, an internal or external load balancer. A notebook with one page per decision, listing the deciding features, limits and costs side by side, becomes your fastest revision tool in the last fortnight.

                ## Milestones
                1. A page for each recurring choice: compute, databases, storage classes, load balancers and connectivity.
                2. Each page listing the two to five options with their deciding features.
                3. One sample scenario per page with the right choice and the reason.
                4. The notebook reviewed and corrected after every practice exam.

                ## Notes
                Start from the **Reading queue** template to track the product pages and documentation you still need to read for each comparison.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A comparison notebook holds at least eight decision pages, each with options, deciding features and a sample scenario."
                cadence: rolling
              tasks:
                - "Create one notebook page each for compute, databases, storage and load balancing choices"
                - "Fill the compute page with Compute Engine, GKE, Cloud Run and App Engine"
                - "Add a sample scenario and the correct choice to each page"
                - "Correct the notebook pages against your latest wrong answers @recurring(monthly:22)"
            - name: Four ACE study blocks a week routine
              description: |-
                ## Purpose
                Short, regular blocks beat weekend marathons for an exam this broad, because gcloud syntax and product limits fade within days if they are not revisited. Fixing four blocks of about an hour on set days, each with one objective from the section map, keeps progress steady through busy weeks.

                ## Milestones
                1. Four study slots fixed in your calendar on the same days each week.
                2. Each block starting with a named objective from the section map.
                3. A one-line note after each block saying what was covered and what is still unclear.
                4. Four consecutive weeks completed with at least three blocks each.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Four weeks in a row each show at least three completed study blocks with a written objective and note."
                cadence: rolling
              tasks:
                - "Choose four weekly study slots and add them to your calendar"
                - "Pick an exam guide objective for each block before it starts"
                - "Run an ACE study block on the section planned for this week @recurring(weekly:mon,wed,sat)"
                - "Write a one-line note after each block on what is still unclear"
            - name: Daily gcloud command recall drill
              description: |-
                ## Purpose
                Recognising the right command among four similar options is a recall skill, and ten minutes of flashcards a day builds it far faster than rereading documentation. A small deck of gcloud, gcloud storage, bq and kubectl commands, with the flags the exam favours, turns idle minutes into marks.

                ## Milestones
                1. A flashcard deck of at least 60 commands across compute, storage, IAM, networking and GKE.
                2. Cards written as a task on the front and the exact command on the back.
                3. The deck reviewed on at least five days a week for a month.
                4. New cards added from every practice exam wrong answer about a command.

                ## Notes
                Write the task on the front, not the command. You need to produce the command from the need, as the exam asks.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A deck of at least 60 command cards has been reviewed on at least 20 days in a month."
                cadence: rolling
              tasks:
                - "Set up a flashcard deck in a spaced repetition app"
                - "Write 20 cards for gcloud compute and gcloud config commands"
                - "Add cards for gcloud storage, bq, IAM and kubectl commands"
                - "Review the gcloud flashcard deck for ten minutes @recurring(daily)"
            - name: Weekly Skills Boost lab session
              description: |-
                ## Purpose
                Skills Boost labs from Google give you a temporary, pre-built project with a checker that confirms each step, which is the closest practice to the tasks ACE describes. One lab a week, chosen from the section you are studying and repeated without the instructions a few days later, makes the console and gcloud steps automatic.

                ## Milestones
                1. The labs in the official ACE learning path listed against exam sections.
                2. One lab completed each week from the section currently being studied.
                3. Each lab repeated once from memory in your own sandbox project.
                4. A short note per lab of any command or setting you had to look up.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "At least eight Skills Boost labs completed across different ACE sections, each repeated once without instructions."
                cadence: rolling
              tasks:
                - "List the labs in the ACE learning path against each exam section"
                - "Complete one Skills Boost lab from this week's section @recurring(weekly:tue)"
                - "Repeat last week's lab from memory in your sandbox project"
                - "Note any command or setting you had to look up during the lab"
            - name: Weekly sandbox build and teardown
              description: |-
                ## Purpose
                Building something small in your own project every week, then deleting it, practises the full life of a resource: create, configure, check and remove. It also trains the cleanup habit that keeps the study bill near zero, and teardown with gcloud is itself exam material.

                ## Milestones
                1. A list of weekly builds, one per section, such as a VPC with two subnets or a managed instance group behind a load balancer.
                2. Each build created with gcloud commands saved to a script.
                3. Each build checked as working before teardown.
                4. The project confirmed empty of billable resources at the end of each session.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Eight weekly builds have been created from saved scripts and fully torn down, with the project left empty each time."
                cadence: rolling
              tasks:
                - "Write a list of eight small weekly builds, one per exam area"
                - "Build, check and tear down this week's sandbox exercise @recurring(weekly:sun)"
                - "Save the gcloud commands for each build to a script file"
                - "List remaining resources in the project after each teardown"
            - name: Wrong-answer log with exam section tags
              description: |-
                ## Purpose
                Wrong answers are the most useful material you will produce, but only if each one is written down with why it was wrong and which section it belongs to. A log reviewed weekly shows patterns, such as always confusing Shared VPC with peering, that a score alone hides.

                ## Milestones
                1. A log with columns for date, source, section, topic, cause and the correct reasoning.
                2. Every wrong answer from practice exams and question banks entered within a day.
                3. A weekly review that groups entries by topic and marks the top three repeat offenders.
                4. Each repeat topic linked to a lab or notebook page that fixes it.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "The wrong-answer log holds every miss from at least four weeks, with a weekly top three topics recorded."
                cadence: rolling
              tasks:
                - "Create a wrong-answer log with section, topic and cause columns"
                - "Enter every wrong answer from today's practice questions"
                - "Review the log and mark the three most repeated topics @recurring(weekly:fri)"
                - "Link each repeat topic to a lab or notebook page that fixes it"
            - name: Monthly timed ACE practice exam
              description: |-
                ## Purpose
                Exam pace and stamina are skills of their own: two hours of scenario questions feels different from twenty questions at lunch. A full timed practice exam each month, sat under exam conditions with no notes or second screen, shows whether your scores are really rising and whether you finish with time to review flagged questions.

                ## Milestones
                1. A rotation of different full-length practice exams so none is repeated within a month.
                2. Each exam sat timed, in one sitting, with no notes.
                3. Time left at the end and number of flagged questions recorded.
                4. Results entered in the score tracker the same day.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "At least three monthly timed practice exams sat under exam conditions, with scores and timing recorded."
                cadence: rolling
              tasks:
                - "List the full practice exams you have and the order you will use them"
                - "Sit a full timed ACE practice exam under exam conditions @recurring(monthly:12)"
                - "Record the time left and how many questions you flagged"
                - "Enter section scores in the tracker the same day"
            - name: Billing and orphaned resource sweep
              description: |-
                ## Purpose
                Persistent disks left after a VM is deleted, static IP addresses no longer attached, forgotten snapshots and idle Cloud SQL instances all keep billing quietly. A weekly look at the billing report and a monthly sweep through every resource type keeps the study bill predictable and teaches you where Google Cloud costs actually come from.

                ## Milestones
                1. The billing report filtered to the study project and bookmarked.
                2. A sweep checklist covering VMs, disks, snapshots, static IPs, buckets, Cloud SQL, GKE and load balancers.
                3. Every orphaned resource found deleted or deliberately kept with a reason.
                4. Monthly spend recorded against your study budget.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Monthly study spend stays within your set budget for three months, with a sweep checklist completed each month."
                cadence: rolling
              tasks:
                - "Bookmark the billing report filtered to your study project"
                - "Check the billing report for unexpected charges @recurring(weekly:thu)"
                - "Sweep every resource type for orphaned disks, IPs and snapshots @recurring(monthly:20)"
                - "Record the month's study spend against your budget"
            - name: ACE section score tracker
              description: |-
                ## Purpose
                Overall practice scores move slowly and hide uneven progress, such as networking stuck while compute climbs. A tracker with one row per practice attempt and one column per exam section shows exactly where the next study week should go and gives you evidence for the go or postpone decision.

                ## Milestones
                1. A tracker with one column per exam section, plus overall score and date.
                2. The diagnostic baseline entered as the first row.
                3. Every practice exam and large question set added within a day.
                4. A monthly note on which section moved least and what changes next.

                ## Notes
                Start from the **Metrics log** template.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: artifact
                success_criteria: "A score tracker holds at least four dated entries with per-section scores and a monthly note on the slowest section."
                cadence: rolling
              tasks:
                - "Create a score tracker from the metrics log template"
                - "Enter your diagnostic baseline as the first row"
                - "Write a note on the section that moved least this month @recurring(monthly:14)"
                - "Highlight any section still below your target score"
            - name: Monthly ACE study plan reset
              description: |-
                ## Purpose
                Study plans drift: a section takes twice as long, work gets busy, or a practice exam shows a gap you did not expect. A monthly half hour to compare the calendar with the score tracker and move weeks around keeps the target date honest instead of quietly slipping.

                ## Milestones
                1. The calendar compared with actual study hours and tracker scores each month.
                2. Remaining weeks reassigned to the sections furthest from target.
                3. The target exam week confirmed or moved, with the reason written down.
                4. Any change shared with whoever else your study time affects.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A dated monthly reset note exists for each study month, confirming or moving the target exam week with a reason."
                cadence: rolling
              tasks:
                - "Compare planned study hours with the hours you actually logged"
                - "Reset the study calendar against the latest section scores @recurring(monthly:28)"
                - "Confirm or move the target exam week and write why"
                - "Tell your household or manager about any change to study time"
            - name: Exam guide and release notes watch
              description: |-
                ## Purpose
                Google renames and retires products regularly, and the ACE exam guide gets revised to match, so a course recorded two years ago can teach names and tools that no longer appear. A quarterly check of the exam guide and a monthly skim of release notes for core products keeps your notes current without chasing every announcement.

                ## Milestones
                1. The exam guide's date or version noted in your section map folder.
                2. A short list of core products whose release notes you skim.
                3. Each renamed or retired product corrected in your notebook and flashcards.
                4. A dated note of any exam guide change and what it means for your plan.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "The exam guide has been checked each quarter and every renamed product found has been corrected in your notes."
                cadence: rolling
              tasks:
                - "List the core products whose release notes you will skim"
                - "Check Google's ACE page for a revised exam guide @recurring(quarterly)"
                - "Skim release notes for core products and note renames @recurring(monthly:5)"
                - "Correct flashcards and notebook pages for any renamed product"
            - name: Resource hierarchy, folders and organisation policies
              description: |-
                ## Purpose
                Understanding how the organisation, folders and projects nest, and how IAM and organisation policies inherit down that tree, explains a whole family of ACE questions about who can do what and where a setting applies. Building a small hierarchy yourself makes inheritance visible instead of theoretical.

                ## Milestones
                1. A diagram of organisation, folders and projects for a fictional company with three teams.
                2. Two or three projects created with gcloud and grouped into folders, if your account has an organisation.
                3. An organisation policy constraint, such as restricting resource locations, explained and tried where possible.
                4. Project IDs, names and numbers distinguished in your own words.

                ## Notes
                A personal account usually has no organisation resource. You can still practise projects and read the folder and policy commands, then try them in a Skills Boost lab.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A hierarchy diagram exists and you can explain, without notes, how a role and an organisation policy set on a folder affect a project below it."
                cadence: phased
                effort_hours_estimate: "5"
              tasks:
                - "Draw an organisation, folder and project tree for a three-team company"
                - "Create two projects with gcloud projects create and list them"
                - "Read how organisation policy constraints inherit and override"
                - "Write the difference between project ID, name and number in one line each"
            - name: Billing accounts, export and the pricing calculator
              description: |-
                ## Purpose
                The exam expects you to link projects to billing accounts, assign billing roles, set budgets, export billing data to BigQuery and estimate costs before building. Practising each of these on your own project, and pricing three small architectures in the calculator, also gives you a feel for which choices are expensive.

                ## Milestones
                1. The billing roles that let someone view, manage or link billing written down and compared.
                2. Billing export to a BigQuery dataset enabled in the study project.
                3. Three small designs priced in the pricing calculator, such as two VMs, a Cloud Run service and a Cloud SQL instance.
                4. Sustained and committed use discounts and Spot VMs explained in a paragraph each.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Billing export runs to BigQuery in the study project and three priced estimates are saved with notes on the cost drivers."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Write down the billing roles and what each one allows"
                - "Enable billing export to a BigQuery dataset in the study project"
                - "Price three small designs in the pricing calculator and save the links"
                - "Explain committed use discounts and Spot VMs in a paragraph each"
            - name: IAM roles, service accounts and impersonation
              description: |-
                ## Purpose
                Access and security is one of the sections candidates lose most marks on, usually by mixing up basic, predefined and custom roles or by misunderstanding how service accounts are granted and used. Granting, testing and removing roles yourself, and running a command while impersonating a service account, turns the policy language into something you can reason about under time pressure.

                ## Milestones
                1. Basic, predefined and custom roles compared, with one example of when each fits.
                2. A predefined role granted to a second test user and tested, then removed.
                3. A service account created, granted a narrow role and used through impersonation with gcloud.
                4. The risks of user-managed service account keys written down with the alternatives.

                ## Notes
                When a question offers a basic role such as Editor, it is rarely the answer. Look for the narrowest predefined role that does the job.
              priority: high
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "You have granted and removed a predefined role, impersonated a service account with gcloud and can explain the three role types without notes."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Grant a predefined role to a test account and check what it can do"
                - "Create a service account and give it one narrow role"
                - "Run a gcloud command while impersonating the service account"
                - "Write why user-managed keys are risky and what to use instead"
            - name: VPC networks, subnets and firewall rules
              description: |-
                ## Purpose
                Unlike many clouds, Google Cloud VPC networks are global with regional subnets, which surprises people arriving from other clouds and appears in many ACE scenarios. Building a custom-mode network with subnets in two regions and firewall rules using tags and service accounts makes routing and rule priority concrete.

                ## Milestones
                1. Auto mode and custom mode networks compared in writing.
                2. A custom network with subnets in two regions built with gcloud.
                3. Ingress firewall rules created by network tag and by service account, with priorities tested.
                4. Two VMs in different regions shown talking over internal IPs.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A custom VPC with two regional subnets and tagged firewall rules has been built from a saved script and torn down."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Write the differences between auto mode and custom mode networks"
                - "Create a custom network with subnets in two regions using gcloud"
                - "Add firewall rules targeted by tag and by service account"
                - "Ping between VMs in the two regions on internal IPs, then tear down"
            - name: Cloud NAT, Private Google Access, VPN and peering
              description: |-
                ## Purpose
                Scenarios about private VMs reaching the internet or Google APIs, two networks talking to each other or an office connecting in all rest on a handful of features. Building Cloud NAT and Private Google Access for a VM without an external IP, and comparing VPC peering, Shared VPC and Cloud VPN on paper, covers the connectivity questions ACE favours.

                ## Milestones
                1. A VM with no external IP reaching the internet through Cloud NAT.
                2. Private Google Access enabled on a subnet and tested against Cloud Storage.
                3. VPC peering, Shared VPC and Cloud VPN compared on one page with a use for each.
                4. Two networks peered in the sandbox and the non-transitive behaviour noted.
              priority: medium
              frontmatter:
                mode: building
                output_kind: knowledge
                success_criteria: "A private VM has reached the internet through Cloud NAT and Cloud Storage through Private Google Access, and a one-page connectivity comparison exists."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Create a VM with no external IP and set up Cloud NAT for its subnet"
                - "Enable Private Google Access and copy a file from Cloud Storage"
                - "Peer two VPC networks and test which routes are shared"
                - "Compare peering, Shared VPC and Cloud VPN on one page"
            - name: Compute Engine, instance templates and managed instance groups
              description: |-
                ## Purpose
                Compute Engine runs through the whole exam: choosing machine types, attaching disks, using startup scripts, and building managed instance groups that autoscale and heal themselves. Building a regional managed instance group from an instance template, then breaking a VM to watch autohealing work, covers most of what the scenarios ask.

                ## Milestones
                1. A VM created with gcloud using a chosen machine type, boot disk and startup script.
                2. An instance template and a regional managed instance group built from it.
                3. Autoscaling on CPU set up and observed under a small load test.
                4. A health check added and autohealing seen replacing a stopped instance.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A regional managed instance group with autoscaling and autohealing has been built from an instance template, tested and removed."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Create a VM with a startup script that installs a web server"
                - "Build an instance template and a regional managed instance group"
                - "Add CPU autoscaling and run a short load test"
                - "Stop one instance and watch the health check replace it"
            - name: GKE clusters and workloads at associate depth
              description: |-
                ## Purpose
                ACE asks about Google Kubernetes Engine from an operator's point of view: creating Autopilot and Standard clusters, managing node pools, getting credentials and deploying and exposing a workload. You do not need administrator depth, but you do need to run the full cycle once with gcloud and kubectl and know what each mode leaves to Google.

                ## Milestones
                1. Autopilot and Standard clusters compared on who manages nodes and how billing works.
                2. A small cluster created, credentials fetched with gcloud and nodes listed with kubectl.
                3. A container deployed, scaled and exposed through a Service.
                4. The cluster deleted the same day and the deletion confirmed.

                ## Notes
                A cluster is the resource most likely to surprise your bill. Delete it at the end of every session.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "You have created a GKE cluster, deployed and exposed a workload with kubectl and deleted the cluster in one session."
                cadence: phased
                effort_hours_estimate: "5"
              tasks:
                - "Write a comparison of Autopilot and Standard cluster modes"
                - "Create a small cluster and fetch credentials with gcloud"
                - "Deploy, scale and expose a sample container with kubectl"
                - "Delete the cluster and confirm it no longer appears in the list"
            - name: Cloud Run, Cloud Run functions and App Engine choices
              description: |-
                ## Purpose
                Serverless questions on ACE usually come down to which platform fits a container, a short event-driven function or a long-standing App Engine app, and how traffic is split between versions. Deploying the same small app to Cloud Run with two revisions, and a function triggered by a Cloud Storage upload, makes the differences easy to recall.

                ## Milestones
                1. A container deployed to Cloud Run with gcloud run deploy.
                2. Traffic split between two Cloud Run revisions and rolled back.
                3. A function triggered by a Cloud Storage upload deployed and tested.
                4. App Engine standard and flexible environments compared in a short note.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A Cloud Run service with a traffic split and a storage-triggered function have both been deployed and tested from the command line."
                cadence: phased
                effort_hours_estimate: "5"
              tasks:
                - "Deploy a sample container to Cloud Run from the command line"
                - "Deploy a second revision and split traffic between the two"
                - "Deploy a function triggered by an upload to a Cloud Storage bucket"
                - "Note when App Engine standard or flexible still fits"
            - name: Cloud Storage classes, lifecycle rules and access
              description: |-
                ## Purpose
                Cloud Storage questions test storage classes and their minimum durations, lifecycle rules, versioning, location types and the difference between uniform bucket access and signed URLs. Creating buckets, moving objects between classes with a lifecycle rule and sharing one object for an hour with a signed URL covers the lot.

                ## Milestones
                1. Standard, Nearline, Coldline and Archive compared on access pattern and minimum storage duration.
                2. A bucket created with uniform bucket-level access and object versioning on.
                3. A lifecycle rule that changes class and deletes old versions, saved as JSON.
                4. A signed URL generated for one object and tested in a private browser window.
              priority: medium
              frontmatter:
                mode: building
                output_kind: knowledge
                success_criteria: "A versioned bucket with a lifecycle rule exists in the sandbox and a signed URL has been tested, with storage classes compared in your notebook."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Compare the four storage classes on a notebook page"
                - "Create a bucket with uniform access and versioning using gcloud storage"
                - "Write and apply a lifecycle rule in JSON"
                - "Generate a signed URL for one object and test it"
            - name: Choosing Cloud SQL, Firestore, Spanner, Bigtable or BigQuery
              description: |-
                ## Purpose
                Database questions turn on a few signals: relational or not, regional or global, transactional or analytical, small rows at huge scale or ad hoc SQL over terabytes. Writing one decision table and loading a small dataset into Cloud SQL and BigQuery gives you the signals and the commands in one place.

                ## Milestones
                1. A decision table for Cloud SQL, AlloyDB, Spanner, Firestore, Bigtable and BigQuery with the deciding signals.
                2. A Cloud SQL instance created, connected to and backed up once, then deleted.
                3. A CSV loaded into BigQuery with the bq tool and queried.
                4. Five practice scenarios answered from the table alone.

                ## Notes
                Cloud SQL instances bill while they exist, even when idle. Stop or delete them at the end of the lab.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: decision
                success_criteria: "A database decision table exists, Cloud SQL and BigQuery have both been used hands-on, and five scenarios are answered correctly from the table."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Draft a decision table of the managed database options and their signals"
                - "Create a small Cloud SQL instance, connect to it and take a backup"
                - "Load a CSV into BigQuery with bq load and run a query"
                - "Answer five database scenario questions using only your table"
            - name: Load balancer selection and Cloud DNS records
              description: |-
                ## Purpose
                Google Cloud offers several load balancers that differ by layer, scope and whether traffic is external or internal, and ACE scenarios expect you to pick the right one quickly. Building one external Application Load Balancer in front of a managed instance group, and a Cloud DNS zone pointing at it, ties the choice to something you have run.

                ## Milestones
                1. A one-page chart of load balancer types by layer, scope and external or internal traffic.
                2. An external Application Load Balancer built in front of a managed instance group.
                3. A Cloud DNS managed zone created with an A record for the load balancer.
                4. Public and private DNS zones compared in a short note.
              priority: medium
              frontmatter:
                mode: building
                output_kind: knowledge
                success_criteria: "A load balancer chart exists and an external Application Load Balancer with a Cloud DNS record has been built and torn down."
                cadence: phased
                effort_hours_estimate: "5"
              tasks:
                - "Draw a chart of load balancer types by layer and scope"
                - "Put an external Application Load Balancer in front of a managed instance group"
                - "Create a Cloud DNS zone with an A record for the load balancer"
                - "Write when you would use a private DNS zone"
            - name: Cloud Monitoring dashboards and alerting policies
              description: |-
                ## Purpose
                Keeping a solution running is a whole exam section, and most of it is Cloud Monitoring: metrics, dashboards, uptime checks, alerting policies and the Ops Agent on VMs. Setting up an uptime check and an alert that actually emails you when a test VM stops is the fastest way to learn how the pieces connect.

                ## Milestones
                1. The Ops Agent installed on a VM and its memory and disk metrics visible.
                2. A custom dashboard with CPU, memory and uptime charts.
                3. An uptime check and an alerting policy with an email notification channel.
                4. The alert triggered on purpose and the notification received.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "An alerting policy has fired on purpose and delivered an email from your study project, with a dashboard showing Ops Agent metrics."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Install the Ops Agent on a test VM and check its metrics"
                - "Build a dashboard with CPU, memory and uptime charts"
                - "Create an uptime check and an alert with an email channel"
                - "Stop the VM to trigger the alert and confirm the email arrives"
            - name: Cloud Logging, audit logs and log sinks
              description: |-
                ## Purpose
                Questions about finding who deleted a resource, keeping logs for a year or sending them to BigQuery all depend on knowing the audit log types and how sinks and retention work. Querying admin activity logs for your own actions, and routing one log stream to a bucket and to BigQuery, answers them from experience.

                ## Milestones
                1. Admin Activity, Data Access, System Event and Policy Denied audit logs explained in a line each.
                2. A Logs Explorer query that finds a resource you deleted and who deleted it.
                3. A log sink created to Cloud Storage or BigQuery, with its writer identity granted access.
                4. Log bucket retention settings found and noted.
              priority: medium
              frontmatter:
                mode: building
                output_kind: knowledge
                success_criteria: "You have found your own delete action in the audit logs and routed a log stream through a working sink."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Write one line each on the four audit log types"
                - "Delete a test bucket and find the entry in Logs Explorer"
                - "Create a log sink to BigQuery and grant its writer identity access"
                - "Note where log retention is set and the default period"
            - name: Snapshots, machine images and database backups
              description: |-
                ## Purpose
                Operations questions ask how to back up a disk on a schedule, copy a VM to another region or restore a database to a point in time. Practising snapshot schedules, machine images and a Cloud SQL restore once each turns three similar-looking answers into one obvious one.

                ## Milestones
                1. Snapshots, custom images and machine images compared on what each captures.
                2. A snapshot schedule attached to a persistent disk.
                3. A VM restored in another zone from a snapshot.
                4. Cloud SQL automated backups and point-in-time recovery settings found and explained.
              priority: low
              frontmatter:
                mode: building
                output_kind: knowledge
                success_criteria: "A snapshot schedule has been attached to a disk and a VM restored from a snapshot, with the three image types compared in writing."
                cadence: phased
                effort_hours_estimate: "3"
              tasks:
                - "Compare snapshots, custom images and machine images on one page"
                - "Attach a snapshot schedule to a test disk"
                - "Restore a VM in another zone from the snapshot"
                - "Note how Cloud SQL backups and point-in-time recovery are turned on"
            - name: Quotas, APIs and project-level troubleshooting
              description: |-
                ## Purpose
                Some of the simplest ACE marks come from knowing why a command fails: the API is not enabled, a quota is exhausted, the wrong project is active or the caller lacks a permission. Breaking things on purpose in your sandbox and reading each error teaches you to diagnose them in seconds.

                ## Milestones
                1. An API disabled and the resulting error read, then the API enabled with gcloud services enable.
                2. Quotas for the study project viewed and the request process noted.
                3. A command run against the wrong configuration and the fix recorded.
                4. A short troubleshooting checklist of the four usual causes written.

                ## Notes
                Ask the agent to quiz you with failing gcloud error messages and the likely cause of each, then check its answers against the documentation.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A one-page troubleshooting checklist exists, built from errors you produced yourself for APIs, quotas, projects and permissions."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Disable an API in the sandbox and read the error a command returns"
                - "Open the quotas page and note how to request an increase"
                - "Run a command under the wrong configuration and record the fix"
                - "Ask the agent to quiz you on ten gcloud error messages and their causes"
            - name: Reading ACE scenario questions for the deciding constraint
              description: |-
                ## Purpose
                Many wrong answers come from reading a scenario too fast and missing the one phrase that decides it: least operational overhead, lowest cost, no external IP, Google-recommended practice. Practising a slower read on a batch of questions, underlining the constraint before looking at the options, often lifts scores more than another week of content.

                ## Milestones
                1. A list of the deciding phrases that appear most often in your wrong-answer log.
                2. Thirty scenario questions answered with the constraint underlined before the options are read.
                3. Your misread rate compared before and after the practice.
                4. A personal rule for flagging and returning to long questions.
              priority: medium
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "Thirty scenario questions have been practised with the constraint marked first, and the misread rate in your log has fallen."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Pull every misread question from your wrong-answer log"
                - "List the deciding phrases that tripped you up"
                - "Answer thirty scenario questions underlining the constraint first"
                - "Write your rule for flagging and returning to long questions"
            - name: Closing the weakest ACE section after the second mock
              description: |-
                ## Purpose
                By the second mock most candidates have one section well behind the rest, and spreading study evenly from there wastes the last weeks. A two-week block aimed only at that section, built from your wrong-answer log and labs, is usually the difference between a borderline score and a comfortable one.

                ## Milestones
                1. The weakest section named from the score tracker after the second mock.
                2. Every wrong answer in that section regrouped by topic.
                3. Two weeks of study blocks and labs assigned only to those topics.
                4. A fresh question set on that section showing a higher score than before.
              priority: medium
              frontmatter:
                mode: building
                output_kind: knowledge
                success_criteria: "The weakest ACE section's score on a fresh question set has risen after a dedicated two-week block."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "Name the weakest section from your second mock scores"
                - "Regroup that section's wrong answers by topic"
                - "Plan two weeks of blocks and labs on only those topics"
                - "Sit a fresh question set on the section and record the score"
            - name: ACE readiness go or postpone decision
              description: |-
                ## Purpose
                Booking too early costs a retake fee and confidence, while waiting for a perfect score can drag on for months. Setting a readiness rule in advance, such as consistent mock scores comfortably above your target in every section, and checking it on a fixed date makes the call calmly rather than in a panic.

                ## Milestones
                1. A written readiness rule set before the final mocks.
                2. The last two mock scores checked against the rule, section by section.
                3. A go or postpone decision recorded with the date.
                4. If postponed, a new target week and the gaps to close written down.
              priority: high
              deadlineOffsetDays: 75
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A dated go or postpone decision is recorded against a readiness rule written before the final mocks."
                cadence: one-shot
                effort_hours_estimate: "1"
              tasks:
                - "Write your readiness rule for scores in every section"
                - "Check your last two mock results against the rule"
                - "Record a go or postpone decision with today's date"
                - "Set a new target week and gap list if you postpone"
            - name: Booking the ACE exam slot
              description: |-
                ## Purpose
                Popular weekend and evening slots, and test centres in smaller cities, can fill weeks ahead. Booking as soon as the readiness decision says go, at a time of day when you usually think clearly, locks in the date and gives the final fortnight a fixed end.

                ## Milestones
                1. Two or three possible dates and times chosen around work and family.
                2. The exam booked through the provider account, online or at a centre.
                3. The confirmation email saved and the date put in your calendar with reminders.
                4. Rescheduling and cancellation deadlines noted from the provider's policy.
              priority: high
              deadlineOffsetDays: 90
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "An ACE exam is booked, the confirmation is saved and the rescheduling deadline is in your calendar."
                cadence: one-shot
                effort_hours_estimate: "1"
              tasks:
                - "Choose two or three possible exam slots around work and family"
                - "Book the exam through your provider account"
                - "Save the confirmation and add the date with reminders to your calendar"
                - "Note the last day you can reschedule without losing the fee"
            - name: Final fourteen days before the ACE exam
              description: |-
                ## Purpose
                The last two weeks are for consolidation, not new material: the notebook, the flashcards, the wrong-answer log and one last mock. A written plan for those fourteen days, with lighter final days and good sleep, stops last-minute cramming from undoing the work.

                ## Milestones
                1. A day-by-day plan for the final fourteen days.
                2. The last full mock sat no later than five days before the exam.
                3. Every page of the comparison notebook and wrong-answer log reread once.
                4. The final two days kept to light review only.
              priority: high
              deadlineOffsetDays: 100
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A fourteen-day plan was followed, with the last full mock at least five days before the exam and the final two days kept light."
                cadence: one-shot
                effort_hours_estimate: "15"
              tasks:
                - "Write a day-by-day plan for the last fourteen days"
                - "Sit the final full mock at least five days before the exam"
                - "Reread the notebook and wrong-answer log once in full"
                - "Keep the last two days to flashcards and light review"
            - name: ACE exam day plan
              description: |-
                ## Purpose
                Exam day problems are usually logistics: ID that does not match, a webcam that will not connect, a cluttered desk or a late arrival. A short checklist covering the night before, the morning and the check-in, plus a pacing plan for the exam itself, means your attention goes to the questions.

                ## Milestones
                1. ID, confirmation and travel or room set-up checked the night before.
                2. For online exams, the desk cleared and the system check passed again on the day.
                3. A pacing plan written: a first pass with flags, then a review pass.
                4. Check-in completed early, with time to settle before starting.
              priority: high
              deadlineOffsetDays: 105
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "The exam is sat on the booked date after an exam day checklist was completed and check-in finished early."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Lay out your ID and confirmation the night before"
                - "Clear the desk and rerun the system check if testing online"
                - "Write your pacing plan of a first pass with flags and a review pass"
                - "Start check-in early enough to settle before the exam begins"
            - name: ACE result, credential and profile update
              description: |-
                ## Purpose
                Passing is only useful if people can see and verify it, and the credential has an expiry you will forget about. Claiming the digital badge, adding it to your CV and profiles, and recording the expiry and renewal route in one place turns the result into something employers can check.

                ## Milestones
                1. The result and certification email saved.
                2. The digital badge claimed and linked from your professional profile.
                3. Your CV updated with the credential name and date.
                4. The expiry date and renewal route recorded with a reminder well before it.
              priority: medium
              deadlineOffsetDays: 120
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "The ACE badge is claimed and visible on your profile, and the expiry date is recorded with a reminder."
                cadence: one-shot
                effort_hours_estimate: "1"
              tasks:
                - "Save the result and certification emails in your study folder"
                - "Claim the digital badge and link it from your profile"
                - "Add the credential and date to your CV"
                - "Check the credential expiry date and renewal route @recurring(yearly)"
            - name: ACE retake plan after a below-pass result
              description: |-
                ## Purpose
                Failing ACE is common and recoverable, and the retake waiting period gives you time to fix what went wrong rather than just repeat it. Writing down what felt hard while it is fresh, then rebuilding a short plan around those sections, makes the second attempt a targeted one.

                ## Milestones
                1. Notes written within a day on topics and question styles that felt hardest.
                2. The retake waiting period and fee checked on Google's current policy.
                3. A four to six week plan aimed at the two weakest areas.
                4. A new exam date booked once mock scores pass your readiness rule again.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A written retake plan exists within a week of the result, and a new exam date is booked after mocks pass the readiness rule."
                cadence: phased
                effort_hours_estimate: "20"
              tasks:
                - "Write down the topics and question styles that felt hardest today"
                - "Check the current retake waiting period and fee"
                - "Build a four to six week plan on the two weakest areas"
                - "Book a new date once your mocks pass the readiness rule"
            - name: ACE for an AWS or Azure certified engineer
              description: |-
                ## Purpose
                Engineers with an AWS or Azure credential already know the concepts but trip over Google's differences: global VPCs, projects instead of accounts or subscriptions, IAM bound to resources in a hierarchy, and different product names. A translation table and a short plan focused on those differences can cut study time to a few weeks.

                ## Milestones
                1. A translation table mapping your current cloud's services to Google Cloud equivalents.
                2. The five biggest conceptual differences written down with an example each.
                3. A practice exam taken early to find where old habits cost marks.
                4. A shortened study calendar that skips what transfers and drills what does not.

                ## Notes
                The trap is answering with your old cloud's pattern. Global VPCs and hierarchical IAM catch out most crossover candidates.
              priority: medium
              frontmatter:
                mode: research
                output_kind: artifact
                success_criteria: "A service translation table and a list of five key differences exist, and a shortened study calendar is built from them."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Map the services you know to their Google Cloud equivalents in a table"
                - "Write the five biggest differences with an example each"
                - "Sit a practice exam to see where old habits cost marks"
                - "Cut your study calendar to the sections that do not transfer"
            - name: ACE for a Linux sysadmin new to cloud
              description: |-
                ## Purpose
                Sysadmins arrive strong on SSH, disks, networking and scripting, and weak on identity, billing and managed services that replace servers they would have built themselves. A plan that starts from Compute Engine, where your skills transfer, and moves deliberately to IAM, serverless and managed databases plays to strengths without leaving gaps.

                ## Milestones
                1. Your existing skills mapped to the exam sections where they apply.
                2. OS Login and IAP-based SSH practised as the replacement for shared keys.
                3. One server you manage at work redrawn as a managed Google Cloud design.
                4. Extra study blocks given to IAM, billing and managed services.
              priority: low
              frontmatter:
                mode: building
                output_kind: knowledge
                success_criteria: "A redraw of one familiar server as a managed Google Cloud design exists, and OS Login or IAP SSH has been used in the sandbox."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Map your sysadmin skills to the ACE sections they cover"
                - "Connect to a VM using OS Login or IAP instead of a shared key"
                - "Redraw one server you run at work as a managed Google Cloud design"
                - "Move extra study blocks to IAM, billing and managed services"
            - name: ACE for an application developer
              description: |-
                ## Purpose
                Developers are often comfortable with Cloud Run and APIs but less so with networking, firewall rules, quotas and the operations section. A plan that uses your own app as the lab subject, deploying it, putting it behind a load balancer and monitoring it, covers infrastructure while staying close to work you understand.

                ## Milestones
                1. One of your own small apps containerised and deployed to Cloud Run.
                2. The same app placed behind a load balancer with a custom domain in Cloud DNS.
                3. Logs, an uptime check and an alert set up for the app.
                4. Extra blocks assigned to VPC networking and IAM.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Your own app runs on Cloud Run behind a load balancer with monitoring and an alert, built from saved commands."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Containerise one of your own small apps"
                - "Deploy it to Cloud Run with gcloud"
                - "Put the app behind a load balancer with a Cloud DNS record"
                - "Add an uptime check and alert for the app"
            - name: Studying for ACE as a working parent
              description: |-
                ## Purpose
                With a job and children, study happens in early mornings, school runs and the hour after bedtime, and a plan built for long evenings collapses in a week. A realistic plan with short blocks, flashcards on the phone, labs saved for one protected weekend slot and a longer timeline protects both the exam and family time.

                ## Milestones
                1. Your realistic weekly study hours agreed with your partner or support network.
                2. Short daily blocks set for flashcards and reading, with labs in one protected weekend slot.
                3. A study calendar stretched to fit those hours, with school holidays blocked.
                4. A fallback for weeks when a child is ill or schedules change.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A family-agreed study calendar runs for six weeks with at least five of them on plan."
                cadence: rolling
              tasks:
                - "Agree realistic weekly study hours with your partner or support"
                - "Pick a protected weekend slot for hands-on labs"
                - "Plan the coming week's study around school and family events @recurring(weekly:sun)"
                - "Write a fallback plan for weeks when a child is ill"
            - name: ACE from the Caribbean and other smaller markets
              description: |-
                ## Purpose
                Candidates in Trinidad and Tobago, Jamaica, Barbados, Guyana and other smaller markets face practical hurdles: card payments in foreign currency, few test centres, variable internet for online proctoring and the nearest cloud region far away. Planning around those early, from the payment method to a backup connection, avoids losing an exam slot to something outside the syllabus.

                ## Milestones
                1. A card or payment method confirmed to work for foreign currency online charges.
                2. Nearest test centres checked, or a reliable connection confirmed for online proctoring.
                3. Total cost in local currency estimated, including any bank fees.
                4. A backup connection or venue arranged for exam day.

                ## Notes
                Ask your employer or a regional user group whether vouchers or discounts are available before paying the full fee.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A working payment method, a chosen delivery option and a backup connection or venue are confirmed before booking."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Check that your card works for foreign currency online payments"
                - "Check test centres near you or test your connection for online proctoring"
                - "Estimate the total cost in local currency including bank fees"
                - "Arrange a backup connection or venue for exam day"
            - name: Running an ACE study cohort for your team
              description: |-
                ## Purpose
                Teams moving onto Google Cloud often want several engineers certified together, and a cohort shares course costs, keeps people accountable and spreads knowledge. Leading one well means agreeing a schedule, rotating who presents each section, keeping a shared lab budget and checking in weekly.

                ## Milestones
                1. Cohort members, target exam window and manager support agreed.
                2. A shared schedule with a section owner for each week.
                3. A shared lab project with a budget and an agreed cleanup rule.
                4. A weekly check-in held with scores and blockers recorded.

                ## Notes
                Ask the agent to draft the cohort's kick-off message and schedule from your section map, then edit it before you send it.
              priority: low
              frontmatter:
                mode: service
                output_kind: deliverable
                success_criteria: "A team cohort has a shared schedule, a budgeted lab project and at least six weekly check-ins with notes."
                cadence: phased
                effort_hours_estimate: "20"
              tasks:
                - "Agree members, target exam window and manager support"
                - "Ask the agent to draft a cohort schedule from the section map"
                - "Set up a shared lab project with a budget and cleanup rule"
                - "Run the weekly cohort check-in and record scores and blockers @recurring(weekly:thu)"
            - name: Capstone two-tier environment built with gcloud
              description: |-
                ## Purpose
                Once the sections make sense on their own, building one small environment end to end shows you can combine them: a custom network, a managed instance group behind a load balancer, Cloud SQL on a private IP, IAM for a service account, monitoring and a teardown script. Written up, it doubles as a portfolio piece that shows what the badge means.

                ## Milestones
                1. A design diagram with network, compute, database, IAM and monitoring choices explained.
                2. The environment built entirely from a saved script of gcloud commands.
                3. An alert, a log sink and a backup configured and tested.
                4. A write-up with the diagram, trade-offs, cost estimate and teardown proof.

                ## Notes
                Start from the **Portfolio piece** template. Keep it small enough to build and remove in an afternoon, so it costs little.
              priority: medium
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "A two-tier environment has been built from a script, tested and removed, with a written portfolio piece covering design, cost and trade-offs."
                cadence: one-shot
                effort_hours_estimate: "12"
              tasks:
                - "Sketch the capstone design with network, compute, database and IAM"
                - "Write the gcloud script that builds the environment"
                - "Test an alert, a log sink and a backup in the running environment"
                - "Write up the design, trade-offs and cost, then tear it down"
            - name: Least-privilege IAM review of a real project
              description: |-
                ## Purpose
                After the exam, the most valuable thing you can do with ACE knowledge at work is tighten access on a real project, where basic roles and old service account keys often linger. Reviewing who holds which role, using the recommender's suggestions and removing excess with the owner's agreement, puts the access and security section to real use.

                ## Milestones
                1. Permission obtained from the project owner to review its IAM policy.
                2. Every principal with a basic role or a user-managed key listed.
                3. IAM recommender suggestions reviewed and agreed changes made.
                4. A short review note shared, with a date for the next one.

                ## Notes
                Only change access you are authorised to change, and agree each removal with the owner first. Removing the wrong role can break a production service.
              priority: low
              frontmatter:
                mode: service
                output_kind: deliverable
                success_criteria: "A dated IAM review note for a real project lists basic roles and keys found, the changes agreed with the owner and the next review date."
                cadence: cyclic
                effort_hours_estimate: "6"
              tasks:
                - "Ask the project owner for permission to review its IAM policy"
                - "List every principal with a basic role or a user-managed key"
                - "Review the IAM recommender suggestions with the owner"
                - "Repeat the least-privilege review and share the note @recurring(quarterly)"
---

# Google Cloud Associate Cloud Engineer

This area is for engineers working toward Google Cloud's Associate Cloud Engineer credential and the hands-on operating skill it stands for, whether you are new to cloud or crossing over from AWS, Azure or a server room. It starts with foundations (the exam guide, a skills audit, a baseline score, a sandbox project that cannot run up a bill, a course choice, gcloud on your machine and a dated study calendar), then the weekly study and lab machinery, the skills behind each exam section from the resource hierarchy and IAM to networking, compute, storage and operations, the readiness, booking and exam day steps, plans for different backgrounds and lives, and specialist work such as a documented capstone environment and a least-privilege review of a real project.

The rhythm is study blocks on set weekdays and a short daily gcloud recall drill, a weekly Skills Boost lab, sandbox teardown and wrong-answer review, a monthly timed practice exam, score update, bill sweep and plan reset, and a quarterly look for changes to the exam guide. The Skills matrix, Purchase decision, Metrics log, Reading queue and Portfolio piece templates pair with it. Installing adds all 50 projects as active, so archive the ones that are not for you yet.
