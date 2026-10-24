---
id: tech-certifications.terraform-associate-certification
name: Terraform Associate Certification
description: "A route to HashiCorp Terraform Associate: the current objectives, a guarded lab account, the core workflow, state, modules and HCP Terraform, timed practice tests, booking and exam day."
category: personal
version: 1.0.0
tags: [tech-certifications, terraform-associate-certification, engineer, terraform, infrastructure-as-code, hashicorp, devops, exam-prep]
author: Aurum Technology
starter_structure:
  templates:
    - skills-matrix
    - purchase-decision
    - metrics-log
    - portfolio-piece
  pillars:
    - name: Tech & Engineering Certifications
      emoji: "🏅"
      description: "Technical credentials and the exams behind them: FE and PE licensing, Chartered Engineer and Trinidad and Tobago engineering registration, PMP, PRINCE2 and Scrum, AWS, Azure and Google Cloud by level, Kubernetes and Terraform, networking and security certifications, Six Sigma belts, and coding, system design and machine-learning interviews."
      pillarFrontmatter:
        review_cadence: monthly
      areas:
        - name: Terraform Associate Certification
          description: "Studying for HashiCorp's Terraform Associate: infrastructure as code concepts, the core workflow, state, modules, providers and practice on a real cloud account."
          projects:
            - name: Terraform Associate objectives and exam facts folder
              description: |-
                ## Purpose
                HashiCorp writes the Terraform Associate exam from a published list of objectives tied to a specific exam version, and the version changes every few years as Terraform and HCP Terraform change. Saving the current objectives, the Terraform version the exam is tested against and the delivery rules in one dated folder means every course, lab and practice question is checked against the source rather than a three-year-old video.

                ## Milestones
                1. The current exam objectives saved with the exam version code and the date you downloaded them.
                2. Each objective and its sub-points copied onto a one-page map you can tick off.
                3. The Terraform version the exam is based on noted, so labs use matching syntax.
                4. Current fee, duration, question formats, validity period and retake rules noted from HashiCorp's certification pages, with the date checked.

                ## Notes
                Course videos often quote an older exam version. If the objectives mention import blocks, moved blocks or HCP Terraform by name, your materials should too.
              priority: high
              deadlineOffsetDays: 14
              frontmatter:
                mode: research
                output_kind: artifact
                success_criteria: "One folder holds the dated objectives for the current exam version, a one-page objective map and a dated note of fees, format, validity and retake rules taken from HashiCorp."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Download the current Terraform Associate exam objectives from the HashiCorp certification site"
                - "Copy every objective and sub-point onto one page with a tick column"
                - "Note which Terraform version the current exam is tested against"
                - "Record today's fee, duration, question formats, validity and retake policy with the date"
            - name: Infrastructure as code skills audit
              description: |-
                ## Purpose
                Candidates who struggle with Terraform Associate are rarely short of HCL syntax; they are short of the things around it: git, a shell, how a cloud network or IAM role actually fits together, and what a state file is for. Rating yourself against those basics and against each objective before you start tells you whether to begin straight away or spend a fortnight on git and one cloud provider first.

                ## Milestones
                1. A skills matrix rating you from one to four on git, shell use, one cloud provider, networking basics and each exam objective.
                2. Any Terraform, CloudFormation, Bicep, Pulumi or Ansible you have used listed with how long and in what role.
                3. The three weakest rows marked as the first things to study.
                4. A written start decision: begin the objectives now, or close a named fundamentals gap first.

                ## Notes
                Start from the **Skills matrix** template. Be strict on git: much of real Terraform work is reviewing a plan in a pull request.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A completed skills matrix with a one to four rating per row and a written decision on where your Terraform study starts."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Rate yourself one to four on git, shell, one cloud, networking and each exam objective"
                - "List every infrastructure as code tool you have used and for how long"
                - "Explain in three sentences what a Terraform state file holds and why it matters"
                - "Write down whether you start the objectives now or close a fundamentals gap first"
            - name: Diagnostic Terraform practice test and baseline score
              description: |-
                ## Purpose
                A cold practice test in your first week shows which objectives you already know from work and which you have only heard of, which is far more useful than starting the course at lesson one. Recording the score per objective gives you a baseline to beat and stops you spending three weeks on variables you already write every day.

                ## Milestones
                1. One full-length practice test taken under timed conditions before any study.
                2. The score broken down by objective and saved with the date.
                3. Every question you guessed marked, even the ones you got right.
                4. The two weakest objectives named as the first study targets.

                ## Notes
                Use a reputable question bank whose questions match the current exam version. Do not memorise the diagnostic; you will retake it later.
              priority: high
              deadlineOffsetDays: 10
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A dated baseline practice score with a per-objective breakdown and the two weakest objectives written down."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Choose one practice test that matches the current exam version"
                - "Sit it in one timed session with notes and browser closed"
                - "Break the score down by objective and save it with today's date"
                - "Name the two weakest objectives at the top of your study plan"
            - name: Lab cloud account with budget alerts and tags
              description: |-
                ## Purpose
                Terraform makes it easy to create twenty resources with one command and just as easy to forget them, and a NAT gateway or managed database left running for a month is a painful lesson. A separate lab account or project with budget alerts, a dedicated user or role for Terraform and a tag on everything it creates lets you practise freely without a surprise bill.

                ## Milestones
                1. A separate cloud account, subscription or project used only for Terraform labs.
                2. A monthly budget with alerts at low thresholds sent to an email you read.
                3. A dedicated identity for Terraform with credentials kept out of every config file.
                4. A default tag such as purpose and owner applied to every resource Terraform creates.

                ## Notes
                Never commit cloud keys to a repository, even a private one. Use environment variables, a credentials file outside the repo or short-lived tokens from your cloud's login tool.
              priority: high
              deadlineOffsetDays: 7
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A lab-only cloud account exists with budget alerts set, a dedicated Terraform identity and a default tag on every created resource."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Create a cloud account, subscription or project used only for Terraform labs"
                - "Set a small monthly budget with alerts sent to your main inbox"
                - "Create a dedicated Terraform identity and store its credentials outside any repo"
                - "Add a default tags block to your provider configuration"
                - "Check the lab budget alerts still reach your inbox @recurring(monthly:3)"
            - name: Pinned Terraform toolchain on your machine
              description: |-
                ## Purpose
                Half the confusing errors in early Terraform study come from a mismatch between the version in a tutorial and the one on your laptop. Installing Terraform through a version manager, pinning it to the version the exam is tested against and adding an editor extension for HCL gives you autocomplete, formatting and the same behaviour as the exam material.

                ## Milestones
                1. Terraform installed through a version manager or package manager, with the version recorded.
                2. The installed version matching the one the current exam is based on, or a newer minor release.
                3. An HCL extension in your editor with format on save turned on.
                4. Shell tab completion for the terraform command working.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Running terraform version shows a release that matches the exam's tested version, with editor formatting and shell completion working."
                cadence: one-shot
                effort_hours_estimate: "1"
              tasks:
                - "Install a Terraform version manager or use your package manager"
                - "Install the Terraform version the current exam is tested against"
                - "Add the HCL extension to your editor and turn on format on save"
                - "Run terraform -install-autocomplete and test tab completion"
                - "Check for a new Terraform minor release and update the lab machine @recurring(quarterly)"
            - name: Choosing a Terraform course and question bank
              description: |-
                ## Purpose
                There are dozens of Terraform Associate courses, and the gap between them is mostly whether they match the current exam version and whether they make you type real code. Comparing two or three courses and one question bank against the objectives map, on price, version and hands-on content, saves the money and weeks lost to an outdated one.

                ## Milestones
                1. Three courses and two question banks shortlisted with prices and the exam version each covers.
                2. Each scored against the objective map for coverage, hands-on labs and update date.
                3. One course and one question bank chosen and the reason written down.
                4. HashiCorp's own free tutorials and study guide added as the reference set.

                ## Notes
                Start from the **Purchase decision** template. HashiCorp's official tutorials are free and track the product closely; a paid course is worth it for structure and practice questions, not for content you cannot find elsewhere.
              priority: medium
              deadlineOffsetDays: 21
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A recorded decision naming one course and one question bank, each confirmed to cover the current exam version."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Shortlist three courses and two question banks with prices and last update date"
                - "Check which exam version each one says it covers"
                - "Score each against your objective map for coverage and hands-on labs"
                - "Record your choice and bookmark HashiCorp's free Associate tutorials"
            - name: Terraform study calendar to a target exam week
              description: |-
                ## Purpose
                Most working engineers need six to ten weeks of steady study for Terraform Associate, less if they use Terraform daily, and a plan without a target week drifts for months. Counting back from a chosen exam week, with each objective given its slot and two mock tests near the end, turns good intentions into dated blocks.

                ## Milestones
                1. A target exam week chosen and written at the top of the calendar.
                2. Every objective given a study week, weakest objectives first.
                3. Two timed mock tests scheduled in the final three weeks.
                4. A buffer week left before the exam for review or slippage.

                ## Notes
                Plan five to seven hours a week as a working default. If the baseline was above 70 percent, compress the plan rather than padding it.
              priority: high
              deadlineOffsetDays: 14
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A dated study calendar from today to a target exam week, with every objective scheduled and two mock tests placed in the last three weeks."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Choose a target exam week and write it at the top of the calendar"
                - "Give every objective a study week, starting with the two weakest"
                - "Block two timed mock test sessions in the final three weeks"
                - "Leave one buffer week empty before the exam"
            - name: HashiCorp certification account and booking set-up
              description: |-
                ## Purpose
                Booking runs through HashiCorp's certification portal and its online proctoring partner, and the name on the account must match your photo ID exactly. Setting the account up early, with your legal name, a working email and the system check run once, avoids discovering a mismatch or a blocked webcam the week you want to book.

                ## Milestones
                1. A HashiCorp certification account created in your legal name as it appears on your ID.
                2. The current proctoring provider and its booking steps noted.
                3. The proctoring system check passed on the computer you will use.
                4. Any discount or voucher route through your employer or a HashiCorp event checked.
              priority: medium
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A certification account in your legal name exists and the proctoring system check has passed on your exam computer."
                cadence: one-shot
                effort_hours_estimate: "1"
              tasks:
                - "Create your HashiCorp certification account using the name on your passport or ID"
                - "Note the current proctoring provider and how its booking works"
                - "Run the proctoring system check on the computer you will sit on"
                - "Ask your manager whether the company pays for or discounts the exam"
            - name: Terraform lab repository with one folder per objective
              description: |-
                ## Purpose
                Labs scattered across downloads folders and tutorial clones are hard to revisit the week before the exam. A single git repository with one folder per objective, a gitignore that keeps state files, plan files and tfvars with secrets out, and a short readme per lab becomes your revision notes and later a portfolio piece.

                ## Milestones
                1. A git repository with one folder per exam objective.
                2. A gitignore covering the .terraform folder, state files, crash logs and secret tfvars files.
                3. A readme in each folder saying what the lab shows and the commands to run it.
                4. The repository pushed to a private remote and backed up.

                ## Notes
                Commit the dependency lock file; it belongs in version control. Never commit terraform.tfstate, which can hold secrets in plain text.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A private lab repository exists with a folder per objective, a gitignore excluding state and secrets, and a readme in each folder."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Create a private git repository named for your Terraform labs"
                - "Add one folder per exam objective with a short readme"
                - "Write a gitignore that excludes state, plan files, crash logs and secret tfvars"
                - "Push the repository to a private remote"
            - name: Terraform study blocks on set weekdays
              description: |-
                ## Purpose
                Short, fixed study blocks beat long weekend sessions for a tool you learn by typing, because each block ends with something applied and destroyed. Holding two weekday evenings and one longer weekend slot, protected in your calendar, keeps the plan moving through busy weeks at work.

                ## Milestones
                1. Two weekday blocks and one weekend block recurring in your calendar.
                2. Each block starting from the objective due that week in the study calendar.
                3. A one-line note after every block saying what you built or learned.
                4. Four weeks completed with no more than two blocks missed.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Four consecutive weeks show at least ten of twelve planned study blocks completed, each with a one-line note."
                cadence: rolling
              tasks:
                - "Put two weekday and one weekend study block in your calendar"
                - "Open the study calendar and start the objective due this week"
                - "Hold a one-hour Terraform study block @recurring(weekly:tue,thu)"
                - "Hold a two-hour lab and review session @recurring(weekly:sat)"
            - name: Weekly plan, apply and destroy lab
              description: |-
                ## Purpose
                Reading about Terraform and running it are different skills, and the exam asks about outputs and behaviour you only recognise after seeing them. Building one small lab a week tied to that week's objective, reading the plan output line by line, applying it and then destroying it, makes the symbols in a plan second nature.

                ## Milestones
                1. One lab a week built in the lab repository for the current objective.
                2. The plan output read and the meaning of each create, change, replace and destroy symbol noted.
                3. Every lab destroyed the same day, with the destroy output checked.
                4. Eight labs committed with readmes by the end of the study plan.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Eight labs, each tied to an objective, are committed with readmes and none has resources left running in the lab account."
                cadence: rolling
              tasks:
                - "Pick the lab for this week's objective from your course or HashiCorp's tutorials"
                - "Read the plan output and note what each symbol means before applying"
                - "Build, apply and destroy one objective lab @recurring(weekly:wed)"
                - "Commit the lab code and readme to the lab repository"
            - name: Wrong-answer log by objective
              description: |-
                ## Purpose
                Every missed practice question points to a gap, but only if you record why you missed it: a forgotten command flag, a misread of what plan does, or confusion between CLI workspaces and HCP Terraform workspaces. Logging each miss with its objective and the reason shows which mistakes repeat and turns a question bank into a study plan.

                ## Milestones
                1. A log with columns for date, question topic, objective, your answer, the right answer and why.
                2. Every missed or guessed question from each session entered the same week.
                3. Repeat mistakes grouped into themes at the end of each month.
                4. Each theme linked to a lab or doc page that fixes it.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "The log holds every missed or guessed question from your practice sessions, tagged by objective, with themes reviewed monthly."
                cadence: rolling
              tasks:
                - "Set up the wrong-answer log with columns for objective and reason"
                - "Enter every missed and guessed question from this week's practice @recurring(weekly:sun)"
                - "Group repeat mistakes into themes at the end of the month"
                - "Link each theme to a lab or documentation page that fixes it"
            - name: Daily Terraform command and flag drill
              description: |-
                ## Purpose
                Plenty of exam questions turn on knowing exactly what a command or flag does: what terraform init downloads, what fmt and validate check, what refresh-only, -target and -replace change. Ten minutes of flashcards a day, built from the CLI documentation and your wrong-answer log, fixes these distinctions in a way a weekend cram does not.

                ## Milestones
                1. A deck of cards covering every Terraform command and the flags the objectives mention.
                2. Cards added from the wrong-answer log each week.
                3. Ten minutes of cards done on at least five days a week.
                4. The deck answered at over 90 percent before the final fortnight.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A command and flag deck exists and is answered at over 90 percent correct in the fortnight before the exam."
                cadence: rolling
              tasks:
                - "Build cards for init, validate, fmt, plan, apply, destroy, state, import and output"
                - "Add cards for flags such as -replace, -refresh-only, -target and -upgrade"
                - "Run ten minutes of Terraform command cards @recurring(daily)"
                - "Add a card for every command mistake in the wrong-answer log"
            - name: Monthly timed Terraform practice test
              description: |-
                ## Purpose
                Scores from untimed, open-notes questions flatter you, and the real exam gives you one sitting to read code snippets carefully. One full practice test a month under exam conditions shows whether study is moving the score and whether you finish with time to review flagged questions.

                ## Milestones
                1. One timed practice test sat each month with notes closed.
                2. The overall score and per-objective scores logged with the date.
                3. Time left at the end recorded, along with the number of flagged questions.
                4. Two consecutive scores comfortably above your question bank's suggested ready mark.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Monthly timed test scores are logged by objective, with two consecutive results above the question bank's ready mark before booking."
                cadence: rolling
              tasks:
                - "Choose an unseen practice test for this month's sitting"
                - "Sit a full timed Terraform practice test with notes closed @recurring(monthly:12)"
                - "Log the score per objective and the time left at the end"
                - "Move every miss into the wrong-answer log"
            - name: Lab cost and orphaned resource sweep
              description: |-
                ## Purpose
                A failed apply, a lost state file or a lab you forgot to destroy can leave resources running that Terraform no longer knows about. A short weekly sweep of the lab account for anything tagged as a lab, plus a monthly look at the bill by service, catches orphans before they cost more than the exam fee.

                ## Milestones
                1. A saved filter or query in the cloud console that lists every resource carrying your lab tag.
                2. The list checked weekly and anything not in a current lab deleted.
                3. Untagged resources in the lab account investigated and removed.
                4. The month's lab spend recorded and kept under your budget.

                ## Notes
                Elastic IPs, NAT gateways, load balancers and managed databases are the usual surprise charges. Check them first.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "The lab account shows no resources older than the current lab, and monthly lab spend is recorded and under budget."
                cadence: rolling
              tasks:
                - "Save a console filter that lists every resource with your lab tag"
                - "Check the lab account for leftover and untagged resources @recurring(weekly:fri)"
                - "Record the month's lab spend by service @recurring(monthly:20)"
                - "Delete any resource you cannot match to a current lab"
            - name: Terraform objective score tracker
              description: |-
                ## Purpose
                An overall practice score hides the objective that is still failing, and the exam does not care which section your marks came from. Tracking each objective's score across every practice test and quiz shows whether the weakest area is improving and when it is time to stop studying a strong one.

                ## Milestones
                1. A tracker with one row per objective and one column per practice test.
                2. Every practice test and section quiz entered within a day.
                3. The lowest objective highlighted after each entry.
                4. Every objective above your ready mark on the last two tests.

                ## Notes
                Start from the **Metrics log** template.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: artifact
                success_criteria: "A tracker shows per-objective scores for every practice test, with every objective above the ready mark on the last two."
                cadence: rolling
              tasks:
                - "Create the tracker from the metrics log template with one row per objective"
                - "Enter the baseline diagnostic scores"
                - "Update the tracker and highlight the lowest objective @recurring(monthly:13)"
                - "Shift next week's study time toward the lowest objective"
            - name: Exam version and Terraform release watch
              description: |-
                ## Purpose
                HashiCorp retires exam versions and Terraform keeps adding features such as import blocks, check blocks and testing, so a plan made in spring can be out of date by autumn. A quarterly look at the certification page and the Terraform changelog tells you whether your materials still match the exam you will sit.

                ## Milestones
                1. The certification page and Terraform changelog bookmarked together.
                2. A dated note after each check saying whether anything changed.
                3. Any new objective or retired feature added to or struck from the objective map.
                4. Your booking timed to avoid sitting in the weeks around an exam version change.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A dated note exists for each quarter of study confirming the exam version and recording any objective changes."
                cadence: rolling
              tasks:
                - "Bookmark the Terraform Associate exam page and the Terraform changelog"
                - "Check for a new exam version or objective change @recurring(quarterly)"
                - "Update the objective map with anything added or removed"
                - "Note the date of any announced exam version change"
            - name: Monthly Terraform study plan reset
              description: |-
                ## Purpose
                Plans slip when a release crunch or a sick child takes a week, and pretending they have not leads to a rushed final month. A short reset at the end of each month, looking at scores, missed blocks and the target week, either keeps the date or moves it on purpose.

                ## Milestones
                1. Last month's completed blocks, labs and scores reviewed in one sitting.
                2. Objectives behind schedule moved into next month with time taken from strong ones.
                3. The target exam week confirmed or moved, with the reason written down.
                4. Next month's blocks in the calendar before the month starts.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A dated monthly note records completed blocks, current scores and a confirmed or revised exam week."
                cadence: rolling
              tasks:
                - "Review last month's blocks, labs and practice scores"
                - "Reset the study plan and confirm the exam week @recurring(monthly:28)"
                - "Move behind-schedule objectives into next month"
                - "Ask the agent to summarise the month's wrong-answer themes in five lines"
            - name: Infrastructure as code concepts and Terraform's place
              description: |-
                ## Purpose
                The first objectives are conceptual: what infrastructure as code solves, declarative against imperative tools, idempotence, and why Terraform's provider model works across clouds and SaaS platforms. Questions here look easy and catch people who only know Terraform by habit, so a page of your own explanations is worth more than another video.

                ## Milestones
                1. A one-page explanation in your own words of infrastructure as code and its benefits.
                2. Declarative and imperative approaches compared with one example each.
                3. Terraform compared with configuration management tools and with cloud-native templates.
                4. Every conceptual practice question on these objectives answered correctly twice.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A one-page concept summary exists and two consecutive practice sets on the concept objectives score full marks."
                cadence: phased
                effort_hours_estimate: "3"
              tasks:
                - "Write a one-page explanation of infrastructure as code in your own words"
                - "Compare declarative and imperative tools with one example each"
                - "Note how Terraform differs from configuration management and cloud templates"
                - "Answer every concept question in your bank and log any misses"
            - name: Core workflow from init to destroy
              description: |-
                ## Purpose
                Write, plan, apply is the spine of the exam and of daily Terraform work, and the details matter: what init does to the .terraform folder and lock file, what validate catches that fmt does not, when plan refreshes state and what destroy really runs. Walking one configuration through every step and writing down what changed on disk makes each command concrete.

                ## Milestones
                1. One small configuration taken through init, fmt, validate, plan, apply and destroy.
                2. The files created or changed by each command listed.
                3. A saved plan file applied, and the difference from an unsaved plan noted.
                4. Every practice question on the core workflow answered correctly.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A lab readme lists what each core workflow command changes on disk, and practice questions on the workflow score full marks."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Write a two-resource configuration in a new lab folder"
                - "Run init, fmt, validate, plan, apply and destroy in order"
                - "List the files each command creates or changes in the readme"
                - "Save a plan to a file and apply that saved plan"
            - name: Providers, version constraints and the lock file
              description: |-
                ## Purpose
                Providers are separate plugins with their own versions, and the exam expects you to know how required_providers, version constraint operators and the dependency lock file work together. Getting this right also prevents the most common real failure: a colleague's apply pulling a new provider major version and changing resources nobody touched.

                ## Milestones
                1. A configuration with a required_providers block and a pessimistic version constraint.
                2. The meaning of each constraint operator written with an example.
                3. The lock file inspected and the effect of init -upgrade seen.
                4. Provider aliases used to deploy to two regions from one configuration.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A lab uses pinned providers and two provider aliases, and its readme explains each constraint operator and the lock file."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Add a required_providers block with a pessimistic version constraint"
                - "Write out what each version constraint operator allows"
                - "Run init -upgrade and compare the lock file before and after"
                - "Deploy one resource to two regions using provider aliases"
            - name: Variables, outputs, locals and sensitive values
              description: |-
                ## Purpose
                Input variables, locals and outputs are where most configurations become reusable, and the exam tests the precedence order for setting variables, type constraints, validation rules and what marking a value sensitive does and does not hide. A lab that sets the same variable five different ways shows the precedence in a way a table never will.

                ## Milestones
                1. Variables with types, defaults, descriptions and a validation rule in one lab.
                2. The same variable set by default, tfvars file, auto tfvars, environment variable and command line, with the winner noted each time.
                3. A sensitive output shown and the fact that it still sits in state written down.
                4. Locals used to remove repetition from the configuration.

                ## Notes
                Sensitive hides a value from CLI output, not from the state file. That distinction appears in exam questions and in real incidents.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A lab readme records variable precedence from five sources and explains where sensitive values are and are not hidden."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Declare typed variables with descriptions and one validation rule"
                - "Set one variable five different ways and record which value wins"
                - "Mark an output sensitive and find the value in the state file"
                - "Replace repeated values with locals"
            - name: Resources, data sources and dependency graph
              description: |-
                ## Purpose
                Terraform builds a dependency graph from references, and exam questions ask when you need depends_on, how a data source differs from a resource and how resource addresses are written. Drawing the graph for a small network lab and reading it against the plan shows why order usually takes care of itself.

                ## Milestones
                1. A lab mixing resources and data sources, such as a network that looks up the latest machine image.
                2. The graph produced with terraform graph and read against the plan order.
                3. One case written up where depends_on is genuinely needed.
                4. Resource addresses for single, counted and for_each resources written correctly.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A lab readme includes the dependency graph, one justified depends_on case and correct addresses for three resource styles."
                cadence: phased
                effort_hours_estimate: "3"
              tasks:
                - "Build a lab that uses a data source to look up an existing image or zone"
                - "Generate the dependency graph and compare it with the plan order"
                - "Write up one case where depends_on is needed and why"
                - "Write the address of a single, a counted and a for_each resource"
            - name: Expressions, functions, count, for each and dynamic blocks
              description: |-
                ## Purpose
                HCL's expressions are where code-snippet questions get tricky: count against for_each, splat expressions, for expressions building maps, conditional expressions and dynamic blocks for repeated nested blocks. The terraform console lets you test each one in seconds, so a session there is the fastest way to stop guessing.

                ## Milestones
                1. Ten built-in functions tried in terraform console with results noted.
                2. The same set of resources built once with count and once with for_each, and the effect of removing a middle item compared.
                3. A for expression and a splat expression each used to build an output.
                4. A dynamic block used to generate repeated security or firewall rules.

                ## Notes
                Removing an item from the middle of a count list renumbers everything after it. This is the main reason for_each is preferred for named things.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A lab demonstrates count against for_each, for and splat expressions and a dynamic block, with console results for ten functions recorded."
                cadence: phased
                effort_hours_estimate: "5"
              tasks:
                - "Open terraform console and try ten functions such as lookup, merge and cidrsubnet"
                - "Build three resources with count, remove the middle one and read the plan"
                - "Rebuild them with for_each and repeat the removal"
                - "Generate repeated firewall rules with a dynamic block"
            - name: State, backends and locking
              description: |-
                ## Purpose
                State is the objective people underrate and the one that causes the worst real outages: two people applying at once, a laptop with the only copy, secrets in plain text. Moving a lab from local state to a remote backend with locking, and deliberately trying to apply twice at once, shows exactly what state protects and what goes wrong without it.

                ## Milestones
                1. The purpose of state written in your own words, including drift and performance.
                2. A lab migrated from local state to a remote backend with locking and encryption.
                3. A second apply attempted during a running one and the lock message recorded.
                4. The difference between a backend and HCP Terraform remote operations noted.

                ## Notes
                Treat state as sensitive data. Keep the remote state store encrypted, versioned and readable only by the people and pipelines that need it.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A lab uses an encrypted, locked remote backend, and its readme records the migration steps and the lock message from a concurrent apply."
                cadence: phased
                effort_hours_estimate: "5"
              tasks:
                - "Write a paragraph on what state is for and what drift means"
                - "Create an encrypted, versioned remote state store in the lab account"
                - "Migrate a lab from local state with init -migrate-state"
                - "Start two applies at once and record the lock behaviour"
            - name: State commands, import blocks and moved blocks
              description: |-
                ## Purpose
                Real Terraform work means bringing existing resources under management and renaming things without destroying them, and the exam asks which tool does which job. Practising terraform state list, show, mv and rm, an import block with generated configuration, a moved block and apply -replace on a lab shows when each is safe.

                ## Milestones
                1. A console-built resource brought under Terraform with an import block and generated configuration.
                2. A resource renamed with a moved block and the plan showing no destroy.
                3. state list, show, mv and rm each run and their effect noted.
                4. apply -replace used, and why it replaced the older taint command written down.

                ## Notes
                Back up state before any state command. On a remote backend, pull a copy first and keep it until the next clean plan.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A lab readme records a successful import, a moved block rename with no destroy, the four state subcommands and a forced replacement."
                cadence: phased
                effort_hours_estimate: "5"
              tasks:
                - "Create a storage bucket in the console and import it with an import block"
                - "Generate its configuration with plan -generate-config-out"
                - "Rename a resource with a moved block and confirm the plan shows no destroy"
                - "Run state list, show, mv and rm on a copy of lab state"
                - "Force a rebuild of one resource with apply -replace"
            - name: Modules from the registry and your own
              description: |-
                ## Purpose
                Modules are how Terraform scales beyond one folder, and the exam covers module sources, inputs and outputs, version pinning for registry modules and how child modules see variables. Using one public registry module and then writing a small module of your own with its own variables and outputs covers both sides of the objective.

                ## Milestones
                1. A public registry module used with a pinned version and its required inputs set.
                2. A local module written with variables, outputs and a readme.
                3. An output from a child module passed into another resource in the root module.
                4. Module source types listed: local path, registry, git and others the docs name.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A lab uses a pinned registry module and a local module of your own, with outputs passed between them and source types documented."
                cadence: phased
                effort_hours_estimate: "5"
              tasks:
                - "Use a network module from the public registry with a pinned version"
                - "Write a small local module with its own variables and outputs"
                - "Pass a child module output into a resource in the root module"
                - "List each module source type the documentation supports"
            - name: CLI workspaces against HCP Terraform workspaces
              description: |-
                ## Purpose
                The word workspace means two different things in Terraform, and exam questions rely on you knowing which is which. CLI workspaces are separate state files for one configuration in one working directory; HCP Terraform workspaces are full units with their own variables, runs and permissions. A short lab with each settles the confusion.

                ## Milestones
                1. Two CLI workspaces created for one configuration and the separate state files located.
                2. terraform.workspace used in an expression to name resources per workspace.
                3. An HCP Terraform workspace created on the free tier and connected to a configuration.
                4. A side-by-side table of what each kind of workspace holds.

                ## Notes
                CLI workspaces are not a substitute for separate environments with separate credentials. Most teams use separate directories or HCP Terraform workspaces for production.
              priority: low
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A side-by-side table compares CLI and HCP Terraform workspaces, backed by a lab using each."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Create two CLI workspaces and find where each state file lives"
                - "Name a resource using terraform.workspace"
                - "Create a free HCP Terraform workspace and run a plan in it"
                - "Write a side-by-side table of the two workspace kinds"
            - name: HCP Terraform features at Associate depth
              description: |-
                ## Purpose
                HCP Terraform, formerly Terraform Cloud, has its own objective covering remote runs, VCS-driven workflows, variable sets, the private registry, policy enforcement and run tasks. You do not need a paid plan, but you do need to have clicked through a remote run once, because questions describe the screens and options.

                ## Milestones
                1. A free HCP Terraform organisation with one workspace linked to a git repository.
                2. A pull request triggering a speculative plan in that workspace.
                3. A variable set and a sensitive workspace variable created.
                4. One page summarising the private registry, policy as code and run tasks, and which plans include them.
              priority: medium
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A free HCP Terraform workspace runs speculative plans from pull requests, and a one-page feature summary exists."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Sign up for a free HCP Terraform organisation"
                - "Link one workspace to a lab repository and open a pull request"
                - "Create a variable set and a sensitive workspace variable"
                - "Summarise the private registry, policy enforcement and run tasks on one page"
            - name: Reading Terraform errors and debug logs
              description: |-
                ## Purpose
                Terraform's error messages are usually precise once you know where to look, and the exam expects you to know how TF_LOG and its levels work and where crash logs go. Breaking a lab on purpose in five common ways and reading each error builds the calm that saves an hour at work and a question in the exam.

                ## Milestones
                1. Five deliberate errors triggered: a typo, a missing variable, a bad provider version, a cycle and a permission failure.
                2. Each error message saved with a one-line explanation.
                3. TF_LOG set at two levels and the difference in output noted.
                4. TF_LOG_PATH used to write a log to a file.
              priority: low
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A lab readme lists five deliberate errors with explanations and shows debug logging written to a file."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Break a lab with a typo and read the error"
                - "Trigger a dependency cycle and a provider version conflict"
                - "Run a plan with TF_LOG set to debug and then to trace"
                - "Write a log to a file with TF_LOG_PATH"
            - name: Reading Terraform code-snippet questions
              description: |-
                ## Purpose
                Many exam questions show a block of HCL or CLI output and ask what happens, and the wrong options are built from small misreadings: a count where you expected for_each, a missing provider alias, a string where a list belongs. Practising a slow, line-by-line read of snippet questions, and noting the trap in each miss, lifts scores more than another pass through the course.

                ## Milestones
                1. Thirty snippet-style questions answered with the trap in each wrong option written down.
                2. A short list of your personal misreading habits.
                3. A reading routine: question stem first, then the snippet, then options.
                4. Snippet question accuracy above your overall practice average.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Thirty snippet questions are logged with traps noted, and snippet accuracy on the latest practice test beats the overall score."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Collect thirty snippet-style questions from your question bank"
                - "Answer them slowly and note the trap in every wrong option"
                - "Write down your three most common misreading habits"
                - "Practise reading the stem before the snippet on the next ten"
            - name: Refactoring a console-built setup into Terraform
              description: |-
                ## Purpose
                Nothing tests Terraform understanding like taking something built by hand and bringing it under code without downtime. Building a small network, virtual machine and storage bucket in the console, then importing, refactoring into a module and reaching a clean plan, uses most of the objectives in one exercise.

                ## Milestones
                1. A small console-built setup of at least four resources in the lab account.
                2. Every resource imported with import blocks and configuration generated.
                3. The generated code cleaned up into variables and a local module.
                4. A plan showing no changes after the refactor.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A lab folder holds refactored code for a console-built setup, and terraform plan reports no changes."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Build a network, a VM and a bucket by hand in the lab console"
                - "Write import blocks for each and generate their configuration"
                - "Refactor the generated code into variables and a local module"
                - "Run plan until it reports no changes, then destroy everything"
            - name: Terraform or OpenTofu for your study labs
              description: |-
                ## Purpose
                Since Terraform's licence change, some teams run OpenTofu, the open-source fork, and its newer features have started to diverge. The exam tests HashiCorp Terraform only, so anyone using OpenTofu at work needs to know where the two differ and keep exam labs on Terraform itself.

                ## Milestones
                1. The tool and version your workplace uses recorded.
                2. Features that differ between the two in the exam's scope listed.
                3. All exam labs confirmed to run on HashiCorp Terraform.
                4. A note of any command or block you use at work that the exam treats differently.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A written note lists the differences relevant to the exam and confirms all study labs run on HashiCorp Terraform."
                cadence: one-shot
                effort_hours_estimate: "1"
              tasks:
                - "Record which tool and version your team runs in production"
                - "List features that differ between Terraform and OpenTofu within exam scope"
                - "Confirm every lab in your repository runs on HashiCorp Terraform"
                - "Note any habit from work that the exam would mark differently"
            - name: Closing the weakest objective after the second mock
              description: |-
                ## Purpose
                By the second mock test one or two objectives are usually still below the line while the rest are comfortable, often state commands or HCP Terraform. A focused two-week push on just those objectives, with a lab and a fresh question set each, is the highest-return study you will do.

                ## Milestones
                1. The one or two weakest objectives named from the score tracker.
                2. A lab built for each that covers the questions you missed.
                3. A fresh set of at least twenty questions per weak objective answered.
                4. Each weak objective above the ready mark on a retest.
              priority: medium
              deadlineOffsetDays: 75
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "The weakest objectives from the second mock each score above the ready mark on a fresh question set within two weeks."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Pick the one or two weakest objectives from the score tracker"
                - "Build a lab aimed at the exact questions you missed"
                - "Answer twenty fresh questions per weak objective"
                - "Retest each weak objective and log the new score"
            - name: Online proctoring room and computer check
              description: |-
                ## Purpose
                Terraform Associate is usually sat online with a remote proctor, and exams are cancelled for a second monitor, a work laptop that blocks the proctoring software, a noisy room or a weak connection. Checking the current rules and rehearsing in the actual room on the actual computer removes the risk of failing before the first question.

                ## Milestones
                1. The current online proctoring rules read and the key ones noted.
                2. The system check passed on the exact computer, network and room you will use.
                3. A clear desk and wall with second screens unplugged or removed.
                4. A backup plan for power and internet written down.

                ## Notes
                Corporate laptops often block proctoring software. Use a personal computer unless IT confirms otherwise.
              priority: medium
              deadlineOffsetDays: 60
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "The proctoring system check has passed on the exam computer and room, with a written backup plan for power and internet."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Read the current online proctoring rules and note anything that applies to you"
                - "Run the system check on the exam computer in the exam room"
                - "Clear the desk and unplug every second screen"
                - "Write a backup plan for a power cut or dropped connection"
            - name: Terraform exam readiness go or postpone decision
              description: |-
                ## Purpose
                Booking before you are ready wastes a fee and a retake wait; waiting for perfect scores drags the plan out for months. A written readiness check against fixed rules, made two weeks before the target date, takes the guesswork out of the decision.

                ## Milestones
                1. The last two timed practice scores and per-objective results gathered.
                2. Readiness rules written before looking at the numbers.
                3. A go or postpone decision recorded with the reason.
                4. A new target week set if the decision was to postpone.

                ## Notes
                A workable rule: two consecutive timed scores comfortably above the question bank's ready mark, no objective below it, and finishing with time to review.
              priority: high
              deadlineOffsetDays: 90
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A dated go or postpone decision is recorded against readiness rules written in advance."
                cadence: one-shot
                effort_hours_estimate: "1"
              tasks:
                - "Write your readiness rules before checking the latest scores"
                - "Gather the last two timed scores and per-objective results"
                - "Record a go or postpone decision with the reason"
                - "Set a new target week if you postpone"
            - name: Booking the Terraform Associate exam slot
              description: |-
                ## Purpose
                Popular time slots fill and a booking made on a whim lands in a week full of on-call or travel. Choosing a slot at a time of day when you think clearly, in a quiet week, and recording the reschedule and cancellation cut-offs, makes the date one you can keep.

                ## Milestones
                1. A slot booked at a time of day you study best, in a week without on-call or travel.
                2. The confirmation email saved and the slot in your calendar with a reminder.
                3. Reschedule and cancellation deadlines noted from the booking terms.
                4. Household or team told the date and time you need undisturbed.
              priority: high
              deadlineOffsetDays: 100
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "An exam slot is booked, the confirmation is saved and the reschedule cut-off is in your calendar."
                cadence: one-shot
                effort_hours_estimate: "1"
              tasks:
                - "Check your on-call rota and travel before choosing a week"
                - "Book a slot at the time of day you study best"
                - "Save the confirmation and add the reschedule cut-off to your calendar"
                - "Tell your household or team the time you need undisturbed"
            - name: Final fourteen days before the Terraform exam
              description: |-
                ## Purpose
                Consolidation, not new material, is the job of the last two weeks: one last mock, the wrong-answer log, the command deck and a run through every lab readme. A fixed plan for the fortnight stops the panic of opening a new course three days out.

                ## Milestones
                1. A final timed mock sat around ten days before the exam.
                2. The whole wrong-answer log reread and every theme rechecked.
                3. Every lab readme read through once.
                4. No new courses or question banks started in the final week.
              priority: high
              deadlineOffsetDays: 115
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A final mock, a full wrong-answer review and a readme read-through are complete at least two days before the exam."
                cadence: one-shot
                effort_hours_estimate: "10"
              tasks:
                - "Sit the final timed mock about ten days before the exam"
                - "Reread the whole wrong-answer log and recheck each theme"
                - "Read every lab readme once in objective order"
                - "Run fifteen minutes of command cards each evening this fortnight @recurring(daily)"
            - name: Terraform exam day plan
              description: |-
                ## Purpose
                Online exams fail on small things: an ID that does not match the account, a check-in started too late, a phone left on the desk. A written plan for the day, from what you eat to when you start check-in, leaves your attention for the questions.

                ## Milestones
                1. Your ID checked against the name on the certification account.
                2. Check-in started at the earliest time the provider allows.
                3. A pacing plan: one pass answering and flagging, one pass reviewing flags.
                4. The exam completed and the provisional result noted.
              priority: high
              deadlineOffsetDays: 120
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "The exam is sat at the booked time with check-in started on time and the result recorded the same day."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Check your ID matches the name on the certification account"
                - "Clear the desk and restart the computer an hour before"
                - "Start check-in at the earliest time the provider allows"
                - "Answer in one pass, flag doubtful items and review flags at the end"
            - name: Terraform Associate badge and profile update
              description: |-
                ## Purpose
                The credential only helps your career if people can see and verify it, and it carries an expiry date that is easy to forget. Claiming the digital badge, adding it to your CV and profiles and putting the expiry in your calendar takes an hour and is worth doing the week you pass.

                ## Milestones
                1. The digital badge claimed and its verification link saved.
                2. The credential added to your CV and professional profile with the issue date.
                3. The expiry date and renewal route noted from HashiCorp's current policy.
                4. Your manager told, with a note of anything it should change in your role.
              priority: medium
              deadlineOffsetDays: 135
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "The badge is claimed, the credential is on your CV and profile and the expiry date is in your calendar."
                cadence: one-shot
                effort_hours_estimate: "1"
              tasks:
                - "Claim the digital badge and save its verification link"
                - "Add the credential with its issue date to your CV and profile"
                - "Put the expiry date and renewal route in your calendar"
                - "Check the credential expiry and renewal route are still correct @recurring(yearly)"
            - name: Terraform retake plan after a below-pass result
              description: |-
                ## Purpose
                A below-pass result is common for people who use Terraform daily but only one way, and the score report tells you exactly where to look. A calm plan within a week of the result, built on the section feedback and the retake waiting period, usually turns into a pass on the second sitting.

                ## Milestones
                1. The score report saved and the weakest sections noted.
                2. The current retake waiting period and fee confirmed.
                3. A four-week plan aimed only at the weak sections.
                4. A new exam date booked after the waiting period.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A written retake plan based on the score report exists, with a new exam date booked after the waiting period."
                cadence: phased
                effort_hours_estimate: "15"
              tasks:
                - "Save the score report and note the weakest sections"
                - "Confirm the current retake waiting period and fee"
                - "Write a four-week plan aimed at the weak sections"
                - "Book the retake for after the waiting period"
            - name: Terraform Associate for a sysadmin used to the console
              description: |-
                ## Purpose
                Systems administrators often know the cloud resources well but have built them by clicking, and the shift is thinking in desired state, plans and code review rather than steps. Starting by writing Terraform for something you already manage by hand, and learning git properly alongside, uses what you know instead of starting from zero.

                ## Milestones
                1. One resource you manage by hand at work recreated in a lab with Terraform.
                2. Git basics practised: branches, commits, pull requests and reviewing a diff.
                3. A list of daily console tasks that could become Terraform at work.
                4. A conversation with your team lead about bringing one of them under code.
              priority: medium
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "One familiar resource is recreated in Terraform in a lab, and a list of candidate console tasks has been shared with your team lead."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Recreate one resource you already manage by hand in a Terraform lab"
                - "Practise branches, commits and pull requests on the lab repository"
                - "List daily console tasks that could become Terraform"
                - "Book half an hour with your team lead to discuss one of them"
            - name: Terraform Associate for a developer new to infrastructure
              description: |-
                ## Purpose
                Developers usually find HCL easy and the cloud underneath hard: network ranges, IAM policies and why a database cannot just be public. Pairing each Terraform objective with the small piece of cloud knowledge it assumes, and deploying the infrastructure for one of your own applications, makes both stick.

                ## Milestones
                1. A list of the cloud concepts each lab assumes, with gaps marked.
                2. Networking and IAM basics studied for one cloud provider.
                3. Infrastructure for a small application of your own deployed with Terraform.
                4. Its plan reviewed by someone who runs infrastructure.
              priority: low
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A small application's infrastructure is deployed with Terraform and its plan has been reviewed by an infrastructure engineer."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "List the cloud concepts your labs assume and mark the gaps"
                - "Study networking and IAM basics on one cloud provider"
                - "Write Terraform for the infrastructure of a small app of your own"
                - "Ask an infrastructure colleague to review the plan"
            - name: Studying Terraform as a working parent
              description: |-
                ## Purpose
                With children, study time arrives in twenty-minute pieces and rarely when planned. Terraform suits this better than most exams because each lab is small, but only if labs are prepared in advance and every session can end with a destroy rather than resources left running overnight.

                ## Milestones
                1. Labs broken into twenty-minute pieces with clear stopping points.
                2. A weekly planning slot to pick the coming week's pieces.
                3. A destroy-before-you-leave rule kept so nothing runs while you are away.
                4. A realistic exam week agreed with your partner or support network.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Four weeks of study logged in short sessions with no lab resources left running between sessions."
                cadence: rolling
              tasks:
                - "Break the next three labs into twenty-minute pieces"
                - "Plan the coming week's study pieces around family commitments @recurring(weekly:mon)"
                - "Add a destroy step to the end of every short session"
                - "Agree a realistic exam week with your partner or support network"
            - name: Terraform Associate from the Caribbean and smaller markets
              description: |-
                ## Purpose
                Candidates in Trinidad and Tobago, Jamaica, Barbados, Guyana and the smaller islands face practical hurdles: paying in US dollars, cloud card verification, power cuts and patchy home internet during a proctored exam, and few local Terraform roles to practise in. Planning around these early, and finding regional or remote communities, keeps them from derailing the exam.

                ## Milestones
                1. A card that works for US dollar exam and cloud payments confirmed.
                2. Backup power and a second internet option arranged for exam day.
                3. Exam time chosen with the time zone conversion checked.
                4. One regional or remote DevOps community joined for study partners.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A working payment card, exam-day backup power and internet and a time-zone-checked slot are all confirmed in writing."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Confirm your card works for US dollar exam and cloud payments"
                - "Arrange backup power and a mobile data option for exam day"
                - "Check the exam slot time against your local time zone"
                - "Join one regional or remote DevOps community for study partners"
            - name: Running a Terraform Associate study group for your team
              description: |-
                ## Purpose
                Platform and DevOps leads often want a whole team on the same Terraform standards, and a shared study group gets there faster than everyone studying alone. A six to eight week group with one objective a week, shared labs in a team repository and a code review of each other's modules builds the credential and the team's conventions together.

                ## Milestones
                1. Members, a weekly time and a target exam window agreed.
                2. A shared lab repository with one folder per week.
                3. A weekly session where one member presents the objective and others review a lab.
                4. Exam vouchers or budget agreed with management and results recorded.
              priority: low
              frontmatter:
                mode: service
                output_kind: deliverable
                success_criteria: "A study group has met weekly for at least six weeks, with shared labs committed and exam results recorded."
                cadence: phased
                effort_hours_estimate: "15"
              tasks:
                - "Invite team members and agree a weekly time and exam window"
                - "Create a shared lab repository with one folder per week"
                - "Run the weekly session with one presenter and a lab review @recurring(weekly:thu)"
                - "Ask management for exam vouchers or training budget"
            - name: Moving to Terraform from CloudFormation, Bicep or Pulumi
              description: |-
                ## Purpose
                Engineers who know another infrastructure as code tool learn Terraform fast but bring habits that trip exam questions: expecting the cloud to hold state, stack-style rollbacks, or general-purpose code instead of HCL. Mapping your old tool's ideas to Terraform's, point by point, shows where your instinct is right and where it will cost marks.

                ## Milestones
                1. A table mapping your previous tool's concepts to Terraform equivalents.
                2. Three behaviours that differ written up, such as state ownership or rollback.
                3. One familiar template rewritten in Terraform.
                4. Practice questions on state and the workflow answered without old-tool assumptions.
              priority: low
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A concept mapping table and one rewritten template exist, with state and workflow practice questions scoring above the ready mark."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Map your previous tool's concepts to Terraform in a table"
                - "Write up three behaviours that differ, such as state and rollback"
                - "Rewrite one familiar template in Terraform"
                - "Ask the agent to quiz you on where Terraform differs from your old tool"
            - name: Capstone multi-environment Terraform project
              description: |-
                ## Purpose
                After passing, a finished project shows employers more than the badge: a reusable module, two environments, remote state with locking and a readme explaining the choices. Building it also cements everything the exam touched lightly, from module versioning to variable validation.

                ## Milestones
                1. A reusable module for a small web stack with documented inputs and outputs.
                2. Development and production environments calling the module with different variables.
                3. Remote state with locking per environment and no secrets in the repository.
                4. A readme with an architecture sketch, design choices and how to run it.

                ## Notes
                Start from the **Portfolio piece** template. Destroy the environments after recording the demo; the code is the portfolio, not the running resources.
              priority: medium
              deadlineOffsetDays: 150
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A public or shareable repository holds a module, two environments with separate locked state and a readme explaining the design."
                cadence: phased
                effort_hours_estimate: "15"
              tasks:
                - "Sketch a small web stack and list the module inputs and outputs"
                - "Write the module with variable validation and pinned providers"
                - "Create development and production environments with separate remote state"
                - "Write the readme with design choices and run instructions"
            - name: Terraform plans reviewed in pull requests
              description: |-
                ## Purpose
                On a real team, Terraform runs in a pipeline: format and validate on every push, a plan posted to the pull request for review, and apply only after approval. Building that pipeline for your capstone, with a security scanner and a linter, is the step from passing an exam to working the way platform teams expect.

                ## Milestones
                1. A pipeline that runs fmt check and validate on every push.
                2. A plan generated for each pull request and shown to the reviewer.
                3. A linter and a security scanner added with findings fixed or explained.
                4. Apply allowed only from the main branch after approval.

                ## Notes
                Give the pipeline short-lived cloud credentials through your CI provider's identity federation rather than stored keys where you can.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "The capstone repository runs fmt, validate, lint, a security scan and a plan on every pull request, with apply gated on approval."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Add a pipeline step running fmt check and validate on each push"
                - "Generate a plan for every pull request and surface it to reviewers"
                - "Add a Terraform linter and a security scanner and fix the findings"
                - "Restrict apply to the main branch after an approved review"
            - name: Route to the Terraform Authoring and Operations Professional
              description: |-
                ## Purpose
                HashiCorp's professional-level Terraform exam is lab-based and assumes months of real authoring and operations work, not more multiple choice. Deciding whether and when to aim for it, based on the current exam details and the Terraform work you actually do, keeps the Associate as a step rather than a stopping point.

                ## Milestones
                1. The current professional exam objectives, format and prerequisites read and saved.
                2. Your real Terraform work in the last six months listed against them.
                3. Gaps named, such as module testing, complex state surgery or policy work.
                4. A go, wait or skip decision recorded with a review date.

                ## Notes
                Check HashiCorp's site for the current exam name and format; professional exams are revised and renamed over time.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A dated decision on the professional exam exists, backed by a gap list against its current objectives."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Read the current professional Terraform exam objectives and format"
                - "List your real Terraform work from the last six months against them"
                - "Name the gaps such as module testing or state surgery"
                - "Record a go, wait or skip decision with a review date"
---

# Terraform Associate Certification

This area is for engineers studying for HashiCorp's Terraform Associate, whether you build infrastructure by hand in a cloud console today, write application code and want to own your own environments, or already run Terraform at work and want the credential to prove it. It starts with foundations (the current objectives, a skills audit, a baseline test, a lab account that cannot run up a bill, a pinned toolchain and a dated study calendar), then the weekly study and lab machinery, the skills the exam is written around (the core workflow, providers, variables, expressions, state, imports, modules and HCP Terraform), readiness and booking decisions, exam day, plans for sysadmins, developers, working parents, Caribbean candidates and team leads, and specialist work such as a multi-environment capstone and Terraform in a pull request pipeline.

The rhythm is study blocks on set weekdays and a short daily command drill, a weekly lab built and destroyed, a weekly wrong-answer review and lab cost sweep, a monthly timed practice test, score update and plan reset, and a quarterly check for a new exam version or Terraform release. The Skills matrix, Purchase decision, Metrics log and Portfolio piece templates pair with it. Installing adds all 50 projects as active, so archive the ones that are not for you yet.
