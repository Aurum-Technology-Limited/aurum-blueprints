---
id: tech-certifications.aws-developer-associate
name: AWS Developer Associate
description: "A route to AWS Developer Associate: the exam guide and a guarded sandbox, Lambda, API Gateway, DynamoDB and messaging labs, security and pipelines for developers, debugging drills, timed mocks and exam day."
category: personal
version: 1.0.0
tags: [tech-certifications, aws-developer-associate, engineer, aws, serverless, ci-cd, exam-prep]
author: Aurum Technology
starter_structure:
  templates:
    - purchase-decision
    - reading-queue
    - metrics-log
    - course
  pillars:
    - name: Tech & Engineering Certifications
      emoji: "🏅"
      description: "Technical credentials and the exams behind them: FE and PE licensing, Chartered Engineer and Trinidad and Tobago engineering registration, PMP, PRINCE2 and Scrum, AWS, Azure and Google Cloud by level, Kubernetes and Terraform, networking and security certifications, Six Sigma belts, and coding, system design and machine-learning interviews."
      pillarFrontmatter:
        review_cadence: monthly
      areas:
        - name: AWS Developer Associate
          description: "Studying for AWS Developer Associate: serverless and API services, deployment pipelines, security for developers, debugging and practice in a sandbox account."
          projects:
            - name: Developer Associate exam guide and domain map
              description: |-
                ## Purpose
                AWS publishes an exam guide that lists the domains, task statements and in-scope services, and it is the only syllabus that counts. Turning it into a one-page map, with every task statement rated by how confident you are, shows in an evening where most of the study hours need to go and stops you studying services that are out of scope.

                ## Milestones
                1. The current exam guide downloaded from the AWS certification site and its version noted.
                2. Every domain and task statement copied into one page with a confidence rating from one to five.
                3. The in-scope and out-of-scope service lists saved beside the map.
                4. The question format, length, fee and scoring rules checked on the official page and written down with the date checked.

                ## Notes
                At the time of writing the domains covered development with AWS services, security, deployment, and troubleshooting and optimisation. Confirm against the current guide rather than this note, because AWS revises exam versions.
              priority: high
              deadlineOffsetDays: 7
              frontmatter:
                mode: research
                output_kind: artifact
                success_criteria: "A dated one-page domain map lists every task statement from the current exam guide with a confidence rating beside each."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Download the current Developer Associate exam guide from the AWS certification site"
                - "Copy each domain and task statement into a single page"
                - "Rate your confidence on every task statement from one to five"
                - "Note the current fee, format and scoring rules with today's date"
            - name: Diagnostic practice set and baseline score
              description: |-
                ## Purpose
                Most developers overrate the services they use every day and underrate how much the exam asks about deployment and IAM detail. One untimed practice set taken before studying, scored by domain, gives an honest starting point and makes later progress visible rather than felt.

                ## Milestones
                1. A full practice set from AWS Skill Builder or a reputable bank completed without notes.
                2. The score broken down by domain and recorded with the date.
                3. The three weakest task statements identified from the wrong answers.
                4. Your confidence ratings on the domain map adjusted to match the evidence.

                ## Notes
                Do not cram before this set. A deliberately cold score is more useful than a flattering one.
              priority: high
              deadlineOffsetDays: 14
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A dated baseline score by domain is recorded, with the three weakest task statements named."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Find the official practice question set in AWS Skill Builder"
                - "Take one full set without notes or search"
                - "Record the score for each domain with the date"
                - "Name the three task statements you missed most often"
            - name: Sandbox AWS account with billing guardrails
              description: |-
                ## Purpose
                Developer Associate is a hands-on exam in disguise: questions about Lambda timeouts, DynamoDB throttling and CodeDeploy hooks are far easier once you have broken them yourself. A separate study account with a budget alert, MFA on the root user and a region you always use means you can experiment freely without surprise bills or touching work resources.

                ## Milestones
                1. A dedicated AWS account for study, separate from any employer account.
                2. MFA enabled on the root user and the root credentials stored away from daily use.
                3. A monthly budget with email alerts at a small threshold you choose.
                4. One home region chosen and written on the domain map for every lab.

                ## Notes
                Free tier limits change and some services used in the exam are not free. Check the current free tier page and set the alert low; it is cheaper to be woken by an email than by an invoice.
              priority: high
              deadlineOffsetDays: 10
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A study account exists with root MFA, a monthly budget alert and a chosen home region recorded."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Create a separate AWS account used only for study"
                - "Turn on MFA for the root user and lock the root credentials away"
                - "Set a monthly budget with email alerts at a low threshold"
                - "Pick one home region and use it for every lab"
            - name: CLI profiles, SSO access and one SDK language
              description: |-
                ## Purpose
                Exam questions assume you know how credentials reach code: the default credential provider chain, named profiles, environment variables and instance or execution roles. Setting up IAM Identity Center or a least-privilege admin user, a named CLI profile and one SDK you will use for every lab makes those questions familiar and keeps access keys off your laptop.

                ## Milestones
                1. IAM Identity Center or an admin role set up so daily work never uses the root user.
                2. A named CLI profile that signs in with short-lived credentials.
                3. One SDK language chosen and a hello-world call to S3 or STS working from it.
                4. The credential provider chain order written in your own words.

                ## Notes
                Pick the language you write at work. The exam is language neutral, and labs go faster when the SDK is not also new.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A named CLI profile using short-lived credentials and a working SDK call in your chosen language exist in the sandbox."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Enable IAM Identity Center or create an admin role in the sandbox"
                - "Configure a named CLI profile that uses short-lived credentials"
                - "Call STS get-caller-identity from your chosen SDK"
                - "Write the credential provider chain order on one card"
            - name: Choosing a course and practice exam bank
              description: |-
                ## Purpose
                Developers usually need one structured video or text course plus a question bank whose explanations go beyond the right letter. Comparing two or three of each on how recently they were updated for the current exam version, lab content and explanation quality avoids paying twice and avoids studying a retired syllabus.

                ## Milestones
                1. Two or three courses and two question banks shortlisted with prices.
                2. Each checked for an update date that matches the current exam version.
                3. Sample questions from each bank compared for explanation depth.
                4. One course and one bank chosen and the decision recorded with reasons.

                ## Notes
                Start from the **Purchase decision** template. AWS Skill Builder has free and subscription material from AWS itself; treat it as one of the options, not automatically the only one.
              priority: medium
              deadlineOffsetDays: 14
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "One course and one practice bank are chosen, each updated for the current exam version, with the comparison saved."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Shortlist three courses and two practice banks with prices"
                - "Check each one's last update against the current exam version"
                - "Compare ten sample explanations from each bank"
                - "Record the chosen course and bank with your reasons"
            - name: Study calendar to a target exam week
              description: |-
                ## Purpose
                Without a target week, study for an associate exam tends to stretch for months and the early topics fade. Working back from a chosen exam week, with the weak domains from the baseline given more sessions and two buffer weeks before the date, gives every week a clear job.

                ## Milestones
                1. A target exam week chosen and written at the top of the plan.
                2. Every domain given a block of weeks weighted toward your weakest areas.
                3. Timed practice exams scheduled in the second half of the plan.
                4. Two buffer weeks kept clear before the target week.
                5. The plan shared with anyone whose evenings it affects.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A week-by-week calendar runs from today to a named exam week, with domain blocks, practice exams and two buffer weeks."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Choose a target exam week and write it on the plan"
                - "Count the study weeks between now and that week"
                - "Give the weakest baseline domains the most weeks"
                - "Ask the agent to lay the blocks out as a week-by-week calendar"
            - name: A sample serverless app as the study spine
              description: |-
                ## Purpose
                Isolated labs are forgotten within a fortnight; one small app that grows with each topic is remembered. A simple notes or orders API, built with API Gateway, Lambda and DynamoDB and later given auth, queues, tracing and a pipeline, ties every exam domain to code you have actually written.

                ## Milestones
                1. A one-paragraph spec for a small API with three or four endpoints.
                2. A first deployed version with API Gateway, Lambda and one DynamoDB table.
                3. The code in a git repository with a readme listing which exam topics each part covers.
                4. A backlog of later additions mapped to the domain map: auth, queues, tracing, pipeline.
                5. A teardown command that removes every resource the app creates.

                ## Notes
                Keep it boring. A to-do or orders API is enough; the exam rewards knowing the services, not the product idea.
              priority: high
              deadlineOffsetDays: 45
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A deployed API backed by Lambda and DynamoDB exists in a repository, with a backlog of additions mapped to exam domains and a working teardown."
                cadence: phased
                effort_hours_estimate: "12"
              tasks:
                - "Write a one-paragraph spec for a small API with four endpoints"
                - "Create the repository and a readme with a topic map"
                - "Deploy the first endpoint with API Gateway, Lambda and DynamoDB"
                - "List later additions and tag each with its exam domain"
                - "Script a teardown that removes every resource"
            - name: Developer reading list of FAQs and docs
              description: |-
                ## Purpose
                Many Developer Associate questions turn on a default or a limit stated in a service FAQ or developer guide: visibility timeouts, Lambda environment variable size, DynamoDB item size. A short queue of the right FAQ pages and guide chapters, read one at a time, fills the gaps a course skims over.

                ## Milestones
                1. A queue of FAQ pages and developer guide chapters for every in-scope service you rated three or below.
                2. Each item tagged with its exam domain.
                3. One page of notes per item, capped at ten lines.
                4. The queue finished or trimmed before the final fortnight.

                ## Notes
                Start from the **Reading queue** template. Read the Lambda, DynamoDB, SQS and API Gateway FAQs first; they repay the time most.
              priority: low
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "Every queued FAQ or guide chapter has a ten-line note or a recorded reason for skipping it."
                cadence: rolling
              tasks:
                - "List the FAQ pages for every service rated three or below"
                - "Tag each reading item with its exam domain"
                - "Read one queued FAQ and write ten lines of notes @recurring(weekly:wed)"
            - name: Weekly build session in the sandbox
              description: |-
                ## Purpose
                Reading about CodeDeploy lifecycle hooks or Lambda destinations is not the same as watching one fire. A protected weekly block spent adding the current topic to the study app keeps the hands-on side moving alongside the reading and produces short lab notes you can revise from.

                ## Milestones
                1. A recurring two-hour slot in the calendar that others know about.
                2. Each session ends with a commit to the study app repository.
                3. A lab note of five lines per session: what was built, what broke, what fixed it.
                4. At least one session spent on every domain before the first full mock.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Each week has a commit to the study app and a five-line lab note, with every domain covered before the first full mock."
                cadence: rolling
              tasks:
                - "Block a two-hour sandbox build session @recurring(weekly:sat)"
                - "Pick the domain map topic for this week's session"
                - "Commit the work and write a five-line lab note at the end"
            - name: Daily ten-question warm-up
              description: |-
                ## Purpose
                Scenario questions reward pattern recognition, and that comes from volume spread over many days rather than marathon weekends. Ten questions a day, checked immediately, takes about fifteen minutes and keeps every domain warm while the weekly sessions go deep on one.

                ## Milestones
                1. A daily slot of fifteen minutes chosen, such as the commute or before work.
                2. Ten questions answered and checked each day from the chosen bank.
                3. Every wrong answer copied into the wrong answer log the same day.
                4. A streak of five days a week held for a month.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Ten practice questions are answered and checked on at least five days a week for four consecutive weeks."
                cadence: rolling
              tasks:
                - "Choose a fifteen-minute daily slot for questions"
                - "Answer and check ten practice questions @recurring(daily)"
                - "Copy each wrong answer into the log the same day"
            - name: Wrong answer log and weekly pattern review
              description: |-
                ## Purpose
                A wrong answer is only useful once you know why you chose it: a misread keyword, a service confused with its neighbour or a gap in knowledge. Logging each miss with its reason, then reviewing the week's misses together, turns scattered mistakes into a short list of things to fix.

                ## Milestones
                1. A log with columns for question topic, your answer, the right answer and the reason you missed it.
                2. Every miss tagged as misread, confused service or knowledge gap.
                3. A weekly review naming the top two patterns.
                4. Repeat misses on the same topic falling over the following month.

                ## Notes
                If most misses are misreads, the fix is slower reading, not more content. See the scenario reading project.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A wrong answer log tags every miss by reason, and a weekly entry names the top two patterns for at least six weeks."
                cadence: rolling
              tasks:
                - "Set up a wrong answer log with a column for the reason"
                - "Review the week's misses and name the top two patterns @recurring(weekly:sun)"
                - "Retry last week's missed questions without notes @recurring(weekly:wed)"
                - "Add the top pattern to next week's build session"
            - name: Twice-monthly timed practice exam
              description: |-
                ## Purpose
                Stamina and pacing are skills of their own, and the first full sitting in exam conditions should not be the real one. A full timed practice exam twice a month in the second half of the plan shows whether scores are rising, where time runs out and whether you are flagging questions sensibly.

                ## Milestones
                1. The first full timed practice exam sat in quiet conditions with no notes.
                2. Each score recorded by domain on the score tracker.
                3. Time per question checked and a pacing rule written down.
                4. Three consecutive practice scores at or above your own readiness bar.

                ## Notes
                Use a different practice set each time. Repeating the same set measures memory of that set, not readiness.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "At least four full timed practice exams are sat in exam conditions, each recorded by domain."
                cadence: rolling
              tasks:
                - "Book a quiet three-hour slot for the first timed practice exam"
                - "Sit a full timed practice exam with no notes @recurring(monthly:9)"
                - "Sit a second full timed practice exam this month @recurring(monthly:23)"
                - "Write a pacing rule from where time ran short"
            - name: Domain score tracker
              description: |-
                ## Purpose
                One overall percentage hides the domain that is quietly failing. A simple tracker of practice scores by domain, updated after each mock, shows which areas are rising, which have stalled and when the plan needs to shift weeks around.

                ## Milestones
                1. A tracker with a row per practice exam and a column per domain.
                2. The baseline and every later practice score entered.
                3. A trend line or simple chart per domain.
                4. The lowest domain highlighted and linked to the next month's plan.

                ## Notes
                Start from the **Metrics log** template.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "The tracker holds the baseline and every practice exam score by domain, with the lowest domain marked each month."
                cadence: rolling
              tasks:
                - "Create a tracker with a column for each exam domain"
                - "Enter the baseline score by domain"
                - "Update the tracker and mark the lowest domain @recurring(monthly:24)"
            - name: Monthly sandbox clean-up and cost check
              description: |-
                ## Purpose
                Labs leave things behind: NAT gateways, provisioned concurrency, Elastic Beanstalk environments and forgotten CloudWatch log groups with no retention. A monthly pass through the bill and the resource list catches the leftovers before they cost real money and teaches you which services charge by the hour.

                ## Milestones
                1. Last month's bill read by service in Cost Explorer.
                2. Every running resource either tagged as part of the study app or removed.
                3. Log groups given a retention period.
                4. Any service that cost more than expected noted with why.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Each month the sandbox bill is reviewed and every untagged resource is either tagged or deleted."
                cadence: rolling
              tasks:
                - "Tag every study app resource with a project tag"
                - "Read last month's costs by service and remove untagged resources @recurring(monthly:28)"
                - "Set a retention period on every CloudWatch log group"
            - name: Service limits and defaults flashcards
              description: |-
                ## Purpose
                A surprising share of developer questions hang on a number or a default: maximum Lambda timeout, SQS message size, DynamoDB item size, the default visibility timeout. A small spaced-repetition deck of the ones that keep tripping you up, reviewed in five minutes a day, makes those details stick.

                ## Milestones
                1. A deck of limits and defaults built only from the official docs, not memory or forums.
                2. Each card tagged with its service and domain.
                3. A daily five-minute review kept for at least six weeks.
                4. Cards you always get right retired so the deck stays small.

                ## Notes
                Limits change. Check each card against the current documentation when you create it and again in the final fortnight.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A flashcard deck sourced from current AWS documentation is reviewed on at least five days a week for six weeks."
                cadence: rolling
              tasks:
                - "Create a flashcard deck in a spaced-repetition app"
                - "Add each limit from the official docs with a source link"
                - "Review the limits deck for five minutes @recurring(daily)"
                - "Retire cards you have answered correctly ten times running"
            - name: Monthly study plan review and exam guide check
              description: |-
                ## Purpose
                Plans written in week one rarely survive week six unchanged: a domain turns out harder, work gets busy, or AWS announces a new exam version. A short monthly reset against the score tracker, plus a quarterly look at the certification page, keeps the plan honest and the syllabus current.

                ## Milestones
                1. A monthly note comparing planned and actual study hours.
                2. Weeks moved toward the domain the tracker shows lowest.
                3. The target exam week confirmed or moved with a reason.
                4. The exam guide version checked on the AWS site each quarter.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A dated monthly review note exists for each month of study, and the exam guide version is checked every quarter."
                cadence: rolling
              tasks:
                - "Compare planned and actual study hours for the month @recurring(monthly:3)"
                - "Move next month's weeks toward the lowest scoring domain"
                - "Check the AWS certification page for a new exam version @recurring(quarterly)"
            - name: Lambda execution model, concurrency and configuration
              description: |-
                ## Purpose
                Lambda sits under more Developer Associate questions than any other service: cold starts, reserved and provisioned concurrency, timeouts, memory and CPU, layers, environment variables, destinations and event source mappings. Building and deliberately breaking functions in the study app makes the behaviour behind those questions concrete.

                ## Milestones
                1. Notes on synchronous, asynchronous and poll-based invocation and how retries differ for each.
                2. A function whose timeout, memory and environment variables you have changed and measured.
                3. Reserved concurrency set to force throttling, and the resulting error observed.
                4. A layer and an async destination added to the study app.
                5. Practice questions on Lambda scoring above your readiness bar.

                ## Notes
                Know which invocation types retry automatically and which leave retries to the caller. That one distinction answers a lot of questions.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "The study app uses a layer, an async destination and tuned memory, and Lambda practice questions score at or above your bar."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "Write a one-page note on the three Lambda invocation models"
                - "Set reserved concurrency to one and trigger throttling on purpose"
                - "Add a shared layer and an on-failure destination to the study app"
                - "Answer twenty Lambda practice questions and log the misses"
            - name: API Gateway stages, integrations and authorisers
              description: |-
                ## Purpose
                Scenarios in the exam ask which API type to pick, how to pass a request through to Lambda, how stage variables and canary releases work, and where caching, throttling and usage plans fit. Wiring each of these onto the study app's API is the quickest way to stop confusing REST and HTTP APIs.

                ## Milestones
                1. A comparison note of REST, HTTP and WebSocket APIs and when each fits.
                2. Proxy and non-proxy Lambda integrations both tried, with the mapping difference written down.
                3. Two stages with stage variables pointing at different Lambda aliases.
                4. A Lambda or Cognito authoriser protecting one endpoint.
                5. Throttling and a usage plan with an API key configured and tested.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "The study API has two stages, an authoriser and a usage plan, and a written REST versus HTTP API comparison exists."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Write a short REST versus HTTP API comparison from the docs"
                - "Create dev and prod stages with stage variables"
                - "Protect one endpoint with an authoriser and test a denied call"
                - "Attach a usage plan and API key and hit the throttle"
            - name: DynamoDB keys, indexes and capacity modes
              description: |-
                ## Purpose
                DynamoDB questions test whether you can pick a partition key that spreads load, choose between a local and a global secondary index, size read and write capacity and tell a query from a scan. Modelling the study app's tables from its access patterns, before writing any code, is the habit the exam is really checking for.

                ## Milestones
                1. The study app's access patterns listed before any table is changed.
                2. Partition and sort keys chosen to serve those patterns, with the reasoning written down.
                3. One global secondary index added and queried.
                4. A worked capacity calculation for strongly and eventually consistent reads.
                5. On-demand and provisioned modes compared in a short note.

                ## Notes
                Practise the read and write capacity unit arithmetic by hand until it is quick. It appears in many forms.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "The study app's tables are modelled from written access patterns with one GSI, and three capacity calculations are worked correctly by hand."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "List every access pattern the study app needs"
                - "Choose partition and sort keys and write why"
                - "Add a global secondary index and query it from your SDK"
                - "Work three read and write capacity calculations by hand"
            - name: DynamoDB conditional writes, transactions and streams
              description: |-
                ## Purpose
                Beyond keys, the exam asks how to stop two writers overwriting each other, how to make several writes succeed or fail together and how to react to changes. Adding optimistic locking, a transaction and a stream-triggered Lambda to the study app covers these in one sitting and shows why each exists.

                ## Milestones
                1. A conditional write with a version attribute that rejects a stale update.
                2. A two-item transaction that rolls back when one condition fails.
                3. A DynamoDB stream feeding a Lambda function that logs each change.
                4. TTL enabled on one attribute and an expired item observed.
                5. A note on when DAX or ElastiCache would sit in front of the table.
              priority: low
              frontmatter:
                mode: building
                output_kind: knowledge
                success_criteria: "The study app shows a rejected stale write, a rolled-back transaction and a stream-triggered function in its logs."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Add a version attribute and a conditional update to one item"
                - "Write a two-item transaction and force one condition to fail"
                - "Enable a stream on the table and trigger a logging function"
                - "Turn on TTL for one attribute and check an item expires"
            - name: Decoupling with SQS, SNS and EventBridge
              description: |-
                ## Purpose
                Many scenarios describe a slow or spiky downstream system and ask how to decouple it. Knowing the difference between standard and FIFO queues, visibility timeouts, dead-letter queues, SNS fan-out and EventBridge rules, and having built each, makes these answers obvious rather than guesswork.

                ## Milestones
                1. An order placed in the study app sent to an SQS queue and processed by Lambda.
                2. A dead-letter queue catching a message that fails repeatedly.
                3. Standard and FIFO queues compared for ordering and duplicates in a short note.
                4. An SNS topic fanning one event out to two queues.
                5. An EventBridge rule routing an event by a field in its detail.

                ## Notes
                Set the queue's visibility timeout longer than the consuming function's timeout. Getting this wrong causes duplicate processing in the exam and in real life.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "The study app routes events through SQS with a DLQ, SNS fan-out and one EventBridge rule, each tested end to end."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Send study app orders to an SQS queue consumed by Lambda"
                - "Add a dead-letter queue and push a poison message into it"
                - "Fan one event out to two queues through an SNS topic"
                - "Route an event by its detail field with an EventBridge rule"
            - name: Step Functions workflows with retries and catches
              description: |-
                ## Purpose
                When a process has several steps, waits or human approvals, the exam usually wants Step Functions rather than Lambdas calling Lambdas. Building one short state machine for the study app, with a retry policy, a catch and a choice state, teaches the vocabulary and the reason it beats chaining functions.

                ## Milestones
                1. A three-step state machine processing a study app order.
                2. A retry with backoff on one task and a catch that routes failures.
                3. A choice state branching on the order value.
                4. Standard and Express workflows compared in a short note.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A state machine with a retry, a catch and a choice state runs successfully and on a forced failure in the study account."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Sketch the three order steps as states on paper"
                - "Build the state machine in Workflow Studio or a template"
                - "Add a retry with backoff and a catch to one task"
                - "Force a failure and follow it in the execution history"
            - name: Cognito user pools and identity pools
              description: |-
                ## Purpose
                Developers mix up the two halves of Cognito more than almost anything else on the exam. User pools sign people in and issue tokens; identity pools swap those tokens for temporary AWS credentials. Adding sign-up and sign-in to the study app, then one call that uses identity pool credentials, settles the distinction for good.

                ## Milestones
                1. A user pool with sign-up, sign-in and a hosted or custom UI.
                2. The study API protected by a Cognito authoriser that checks the ID or access token.
                3. An identity pool granting signed-in users scoped access to one S3 prefix.
                4. A one-paragraph note on which pool solves which problem.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "The study app signs users in through a user pool and grants one scoped S3 action through an identity pool."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Create a user pool and sign up a test user"
                - "Protect one study API endpoint with a Cognito authoriser"
                - "Grant signed-in users access to one S3 prefix through an identity pool"
                - "Write which pool answers which kind of question"
            - name: IAM policies, roles and STS from application code
              description: |-
                ## Purpose
                The security domain expects developers to read a policy and say what it allows, give each function only what it needs, and understand how roles and temporary credentials reach code. Rewriting the study app's permissions to least privilege, and reading a dozen tricky policies by hand, covers most of what is asked.

                ## Milestones
                1. Every Lambda function in the study app given its own execution role with only the actions it uses.
                2. Identity-based and resource-based policies compared using a real bucket or queue policy.
                3. Policy evaluation logic written as a short sequence, with explicit deny first.
                4. AssumeRole called from code and the temporary credentials inspected.
                5. Ten sample policies read and their effect stated correctly.

                ## Notes
                IAM Access Analyzer and the policy simulator are both worth trying here. Neither replaces reading the policy yourself.
              priority: high
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Each study app function runs under its own least-privilege role, and ten sample policies are read with their effect stated correctly."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "List the AWS actions each study app function really calls"
                - "Give each function its own execution role with only those actions"
                - "Call AssumeRole from your SDK and print the expiry time"
                - "Read ten sample policies and write what each allows"
            - name: Encryption with KMS, Secrets Manager and Parameter Store
              description: |-
                ## Purpose
                Keeping a database password out of code, choosing between Secrets Manager and Parameter Store, and knowing how envelope encryption handles data too large for a KMS key to encrypt directly all come up in the security domain. Moving the study app's configuration and one secret into the right stores makes each choice clear.

                ## Milestones
                1. Envelope encryption explained in a short diagram: data key, encrypted data key, KMS key.
                2. One value stored in Parameter Store and one secret in Secrets Manager, both read from Lambda.
                3. A customer managed key with a key policy you have read line by line.
                4. Secrets Manager and Parameter Store compared on rotation, cost and size.
                5. No credential left in code, environment variables or the repository.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "The study app reads its configuration from Parameter Store and its secret from Secrets Manager, with no credential in code or the repository."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Draw envelope encryption on one page"
                - "Move one config value into Parameter Store and read it from Lambda"
                - "Store one secret in Secrets Manager and remove it from the code"
                - "Search the repository history for any committed credential"
            - name: S3 presigned URLs, events and encryption for developers
              description: |-
                ## Purpose
                Developer questions about S3 are less about storage classes and more about code: letting a browser upload without credentials, reacting to new objects, choosing an encryption option and handling large uploads. Adding an upload feature to the study app covers presigned URLs, event notifications and multipart upload in one piece of work.

                ## Milestones
                1. A presigned PUT URL generated by Lambda and used from a browser or curl.
                2. An S3 event notification triggering a Lambda function on each new object.
                3. SSE-S3, SSE-KMS and client-side encryption compared in a short note.
                4. A large file uploaded with multipart upload from your SDK.
                5. CORS configured so the browser upload works.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "The study app accepts browser uploads through presigned URLs and processes each new object with an event-triggered function."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Generate a presigned upload URL from a Lambda function"
                - "Upload a file with it and fix the CORS error you hit"
                - "Trigger a function from new objects in the bucket"
                - "Upload a large file with multipart upload from your SDK"
            - name: CloudFormation, SAM and CDK templates
              description: |-
                ## Purpose
                Deployment questions assume you can read a template, know what intrinsic functions and outputs do, and understand how SAM and the CDK sit on top of CloudFormation. Rebuilding the study app as a SAM template, then one stack in the CDK, turns hand-built resources into infrastructure you can redeploy in minutes.

                ## Milestones
                1. The study app defined in a SAM template and deployed with sam deploy.
                2. Parameters, outputs, Ref, GetAtt and Sub each used at least once.
                3. A change set reviewed before an update, and a failed stack rollback observed.
                4. One small stack written in the CDK and synthesised to CloudFormation.
                5. A note on cross-stack references and nested stacks.

                ## Notes
                Run sam local invoke at least once. Local testing of Lambda appears in exam scenarios and saves hours in practice.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "The study app deploys from a SAM template, one CDK stack synthesises cleanly, and a reviewed change set is on record."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "Rewrite the study app's resources as a SAM template"
                - "Test one function locally with sam local invoke"
                - "Review a change set before applying an update"
                - "Write one small stack in the CDK and synthesise it"
            - name: Release pipeline with CodeBuild, CodeDeploy and CodePipeline
              description: |-
                ## Purpose
                Exam questions name buildspec and appspec files, deployment lifecycle hooks and pipeline stages as if you had used them. Building a real pipeline that takes a commit to the study app through build, test and deploy, with a manual approval before production, gives you that working knowledge.

                ## Milestones
                1. A buildspec that installs, tests and packages the study app.
                2. A pipeline that starts on a push to the main branch from your git host.
                3. A manual approval action before the production stage.
                4. A CodeDeploy deployment with a lifecycle hook that runs a check.
                5. A failed build and a failed deployment each investigated from their logs.

                ## Notes
                Check which source providers the pipeline currently supports. AWS has changed its own source repository offering, and exam material can lag behind.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A push to the study app's main branch runs through build, test, approval and deploy, with one failed run diagnosed from its logs."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Write a buildspec that runs the study app's tests"
                - "Create a pipeline triggered by pushes to main"
                - "Add a manual approval before the production stage"
                - "Break a test on purpose and diagnose it from the build logs"
            - name: Deployment strategies across Lambda, Beanstalk and containers
              description: |-
                ## Purpose
                Questions on releases ask which strategy limits risk for a given change: all at once, rolling, rolling with batch, immutable, blue/green, canary or linear. Trying Lambda aliases with weighted traffic, an Elastic Beanstalk environment with two deployment policies and a container on ECS with Fargate fixes the vocabulary to things you have seen.

                ## Milestones
                1. Lambda versions and an alias shifting ten percent of traffic to a new version.
                2. A SAM or CodeDeploy canary deployment with an alarm that rolls back.
                3. An Elastic Beanstalk environment deployed with rolling and immutable policies.
                4. A container image pushed to ECR and run as a Fargate task.
                5. A one-page table of strategies with downtime, cost and rollback speed.

                ## Notes
                Tear down the Beanstalk environment and Fargate service the same day. Both cost money while idle.
              priority: medium
              frontmatter:
                mode: building
                output_kind: knowledge
                success_criteria: "A weighted alias, a canary with automatic rollback and two Beanstalk policies have each been run, and a strategies table is written."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Publish two Lambda versions and shift traffic with an alias"
                - "Run a canary deployment that rolls back on an alarm"
                - "Deploy a Beanstalk app with rolling and immutable policies"
                - "Fill in a one-page table comparing deployment strategies"
            - name: CloudWatch logs, metrics and alarms for application code
              description: |-
                ## Purpose
                Troubleshooting questions expect you to find a failure from logs, publish a custom metric from code and alarm on it. Adding structured logs, a custom business metric and an alarm to the study app, then using Logs Insights to find a planted error, practises exactly that.

                ## Milestones
                1. Structured JSON logs from every study app function.
                2. A Logs Insights query that finds a planted error in under a minute.
                3. A custom metric published from code, by PutMetricData or the embedded metric format.
                4. An alarm on that metric that sends a notification.
                5. A note on metric filters and when to use one.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "The study app emits structured logs and a custom metric with an alarm, and a saved Logs Insights query finds a planted error."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Switch study app functions to structured JSON logging"
                - "Plant an error and find it with a Logs Insights query"
                - "Publish one custom metric from code"
                - "Create an alarm on the custom metric with an email notification"
            - name: X-Ray tracing across a serverless request
              description: |-
                ## Purpose
                When a request crosses API Gateway, Lambda, DynamoDB and SQS, logs alone rarely show where the time went. Turning on X-Ray for the study app, adding a subsegment and an annotation, and reading the service map gives you the picture the exam describes when it asks how to find a slow downstream call.

                ## Milestones
                1. Active tracing on for API Gateway and every study app function.
                2. The SDK instrumented so DynamoDB and SQS calls appear as subsegments.
                3. A custom annotation added and used to filter traces.
                4. A deliberately slow call found from the service map.
                5. Annotations and metadata compared in a short note.
              priority: low
              frontmatter:
                mode: building
                output_kind: knowledge
                success_criteria: "Traces for the study app show DynamoDB and SQS subsegments, and a planted slow call is located from the service map."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Turn on active tracing for the API and every function"
                - "Instrument the SDK so downstream calls show as subsegments"
                - "Add an annotation and filter traces by it"
                - "Add a sleep to one call and find it on the service map"
            - name: SDK retries, backoff and throttling errors
              description: |-
                ## Purpose
                ThrottlingException, ProvisionedThroughputExceededException and 429s from API Gateway all lead to the same exam answer family: retries with exponential backoff and jitter, batching, or more capacity. Writing a small script that triggers throttling and handles it properly turns a memorised phrase into understood behaviour.

                ## Milestones
                1. A script that deliberately throttles a low-capacity DynamoDB table.
                2. The SDK's built-in retry settings read and changed in code.
                3. A manual exponential backoff with jitter written and tested.
                4. Batch operations used to cut the number of calls.
                5. A note on which errors are safe to retry and which are not.
              priority: low
              frontmatter:
                mode: building
                output_kind: knowledge
                success_criteria: "A script triggers throttling on a test table and recovers using configured retries and backoff with jitter."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Create a table with minimum provisioned capacity"
                - "Write a script that writes to it fast enough to throttle"
                - "Change the SDK retry mode and maximum attempts in code"
                - "List which error codes are safe to retry"
            - name: Caching with ElastiCache, DAX and API Gateway
              description: |-
                ## Purpose
                Optimisation questions often come down to where a cache belongs and which strategy fills it. Comparing lazy loading and write-through, and knowing when DAX, ElastiCache or the API Gateway cache is the right layer, lets you answer these without guessing between three plausible options.

                ## Milestones
                1. Lazy loading and write-through explained with their stale-data and cost trade-offs.
                2. API Gateway caching turned on for one read endpoint and the hit observed.
                3. A note on when DAX suits a DynamoDB workload and when it does not.
                4. Session storage in ElastiCache compared with DynamoDB for a stateless app.
                5. Ten caching practice questions answered with reasons.

                ## Notes
                ElastiCache and DAX clusters charge by the hour. Reading and diagrams are enough for them; turn on only the API Gateway cache in the sandbox, and only briefly.
              priority: low
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A one-page caching note covers strategies and the three cache layers, and ten caching questions are answered with reasons."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Write lazy loading and write-through side by side"
                - "Turn on API Gateway caching for one endpoint briefly"
                - "Note when DAX helps a DynamoDB workload"
                - "Answer ten caching questions and write a reason for each"
            - name: Service comparison sheet for look-alike answers
              description: |-
                ## Purpose
                Four answer options that all sound possible are the core difficulty of this exam: SQS or Kinesis, SNS or EventBridge, Secrets Manager or Parameter Store, Beanstalk or SAM. One sheet of look-alike pairs, each with the deciding keyword, is the most efficient revision page you will make.

                ## Milestones
                1. Every service pair confused in the wrong answer log listed.
                2. Each pair given one deciding keyword or condition.
                3. Kinesis Data Streams and SQS compared on ordering, replay and consumers.
                4. The sheet tested by a study partner or the agent reading pairs at random.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A one-page sheet lists at least twelve look-alike service pairs, each with its deciding keyword, drawn from your own misses."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Pull every confused service pair from the wrong answer log"
                - "Write one deciding keyword for each pair"
                - "Add a Kinesis versus SQS row with ordering and replay"
                - "Ask the agent to quiz you on the pairs at random"
            - name: Reading scenario questions for keywords and distractors
              description: |-
                ## Purpose
                Associate questions usually hide the answer in one phrase: least operational overhead, most cost-effective, without changing code, near real time. Practising the habit of underlining the constraint before reading the options cuts misread errors, which are often the cheapest marks to win back.

                ## Milestones
                1. A list of the constraint phrases that keep appearing, with what each usually points to.
                2. Twenty questions practised by naming the constraint before looking at the options.
                3. Two wrong options eliminated with a reason on each practised question.
                4. Misread errors in the log falling over the following two weeks.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Misread errors in the wrong answer log fall for two weeks running after twenty questions practised with the constraint-first method."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "List ten constraint phrases from your practice questions"
                - "Name the constraint before reading options on twenty questions"
                - "Write why each eliminated option is wrong"
                - "Compare misread counts in the log before and after"
            - name: Closing the weakest domain after the first full mock
              description: |-
                ## Purpose
                The first timed mock usually shows one domain lagging well behind the rest, often deployment or security for developers who write application code all day. Two focused weeks on that domain alone, with labs and targeted questions, does more for the final score than another general pass.

                ## Milestones
                1. The lowest domain from the first mock named with its score.
                2. The weakest task statements in it listed from the domain map.
                3. A two-week block of labs and questions on those statements only.
                4. A domain-only question set retaken with a higher score recorded.
              priority: medium
              deadlineOffsetDays: 75
              frontmatter:
                mode: building
                output_kind: knowledge
                success_criteria: "A domain-only question set taken after two focused weeks scores higher than that domain did in the first mock."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "Name the lowest domain from the first full mock"
                - "List its weakest task statements from the domain map"
                - "Plan two weeks of labs and questions on those statements"
                - "Retake a domain-only set and record the score"
            - name: Making the case for employer exam funding
              description: |-
                ## Purpose
                Many employers pay for exam vouchers, training subscriptions or study time, especially for AWS partners whose partner tier depends on certified staff. A short written request that names the cost, the time and the benefit to current projects is more likely to be approved than a hallway question.

                ## Milestones
                1. Your employer's training or certification policy found and read.
                2. The exam fee, course cost and study hours estimated in one table.
                3. Two or three work benefits named, such as current services or partner requirements.
                4. A written request sent to your manager and the answer recorded.

                ## Notes
                Check whether any funding comes with a repayment clause if you leave within a set period, and note it before agreeing.
              priority: low
              deadlineOffsetDays: 30
              frontmatter:
                mode: service
                output_kind: deliverable
                success_criteria: "A written funding request with costs and benefits is sent to your manager and the decision is recorded."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Find your employer's training and certification policy"
                - "Estimate the exam fee, course cost and study hours"
                - "Draft a one-page request naming two work benefits"
                - "Send the request and record your manager's answer"
            - name: Exam readiness go or postpone decision
              description: |-
                ## Purpose
                Booking too early wastes a fee and a confidence; waiting too long lets early topics fade. Setting your own readiness bar in advance, then deciding against three recent practice scores and the domain tracker a fortnight before the target week, makes the call on evidence rather than nerves.

                ## Milestones
                1. A readiness bar written down before the first mock, such as a score and a minimum per domain.
                2. The last three timed practice scores compared with the bar.
                3. No domain below its minimum on the tracker.
                4. A dated decision: sit on the target week, or move it by a named number of weeks.

                ## Notes
                Practice bank scores are not the real scaled score. Set the bar with a margin above the official pass mark you checked on the exam page.
              priority: high
              deadlineOffsetDays: 90
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A dated go or postpone decision is recorded against a pre-set readiness bar and the last three practice scores."
                cadence: one-shot
                effort_hours_estimate: "1"
              tasks:
                - "Write your readiness bar before the first full mock"
                - "Put the last three practice scores beside the bar"
                - "Check every domain is above its minimum on the tracker"
                - "Record the go or postpone decision with the date"
            - name: Booking the exam and choosing test centre or online
              description: |-
                ## Purpose
                AWS exams are delivered through a testing partner at a centre or online with a remote proctor, and each has its own rules on room, ID and breaks. Choosing the format that suits your home and nerves, then booking early enough to get a good slot, removes a source of last-minute stress.

                ## Milestones
                1. Test centre and online delivery compared for your situation, including the online room rules.
                2. The ID requirements checked against your documents, with the name matching your AWS Certification account.
                3. An exam slot booked in the target week at your best time of day.
                4. The confirmation, reschedule window and cancellation rules saved.

                ## Notes
                If English is not your first language, check whether an accommodation for extra time is available and request it before booking.
              priority: high
              deadlineOffsetDays: 60
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "An exam slot is booked in the target week, with ID checked and the reschedule rules saved."
                cadence: one-shot
                effort_hours_estimate: "1"
              tasks:
                - "Sign in to your AWS Certification account and check the name matches your ID"
                - "Compare test centre and online delivery rules for your home"
                - "Book a slot in the target week at your sharpest time of day"
                - "Save the confirmation and the reschedule deadline"
            - name: Final fortnight before the Developer Associate exam
              description: |-
                ## Purpose
                Consolidation, not new services, is the job of the last two weeks. A plan that alternates one last timed mock, the comparison sheet, the flashcard deck and the weakest task statements, with lighter days at the end, brings you to the exam sharp rather than tired.

                ## Milestones
                1. One final full timed practice exam sat about a week before.
                2. The look-alike comparison sheet and limits deck reviewed in full.
                3. The three weakest task statements revisited with one lab each.
                4. No new courses or banks started in the final week.
                5. A light final day with sleep protected.
              priority: medium
              deadlineOffsetDays: 100
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "The final fortnight plan is followed, with one last timed mock and the comparison sheet and limits deck fully reviewed."
                cadence: one-shot
                effort_hours_estimate: "15"
              tasks:
                - "Write a day-by-day plan for the final fourteen days"
                - "Sit the final full timed practice exam a week before"
                - "Review the whole comparison sheet and limits deck"
                - "Keep the last evening free of study"
            - name: Exam day plan and check-in
              description: |-
                ## Purpose
                Most exam day problems are logistics: a webcam that will not pass the room scan, a name mismatch on the ID, a late train. A written plan for the morning, with the check-in steps for your chosen format rehearsed, leaves the attention for the questions.

                ## Milestones
                1. Travel time to the centre, or the online system test, checked a few days before.
                2. Valid ID, confirmation and any allowed items set out the night before.
                3. Room cleared and desk empty if sitting online.
                4. A pacing rule and a flag-and-return approach written on the plan.
                5. Arrival or check-in at least the recommended time before the slot.

                ## Notes
                For online sittings, run the testing partner's system check on the same computer, network and room you will use on the day.
              priority: high
              deadlineOffsetDays: 110
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "The exam is sat on the booked date with check-in completed on time and no ID or system issue."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Run the online system check or plan the route to the centre"
                - "Set out your ID and confirmation the night before"
                - "Clear the desk and room if sitting online"
                - "Write your pacing rule on the exam day plan"
            - name: Results, digital badge and retake plan
              description: |-
                ## Purpose
                Results arrive in your certification account with a score report by domain, and passing brings a digital badge and benefits such as a discount on a later exam. Whether you passed or not, reading the report the same week and acting on it, by sharing the badge or by planning a focused retake, keeps the momentum.

                ## Milestones
                1. The score report downloaded and the domain performance noted.
                2. If passed: the badge accepted, added to your profile and the expiry date recorded.
                3. If passed: current certification benefits checked and any voucher saved.
                4. If not passed: the retake waiting period checked and a four to six week plan on the weakest domains written.

                ## Notes
                Record the certification expiry and recertification options now, while they are fresh, in whatever single record you keep for credentials.
              priority: medium
              deadlineOffsetDays: 130
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "The score report is saved and either the badge is published with its expiry recorded or a dated retake plan exists."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Download the score report from your certification account"
                - "Accept the digital badge and add it to your profile"
                - "Record the expiry date and any benefit voucher"
                - "Write a focused retake plan if the result fell short"
            - name: Developer Associate for a backend developer new to AWS
              description: |-
                ## Purpose
                Engineers coming from on-premises servers, another cloud or containers on a single VM often know the concepts but not the AWS names and defaults. Mapping what you already know to its AWS equivalent first, then spending extra time on IAM and serverless, uses your experience instead of starting from zero.

                ## Milestones
                1. A translation table from your current stack to AWS services: queue, cache, secrets, CI, logs.
                2. IAM and the shared responsibility split given an extra week in the study calendar.
                3. One existing small service of yours redeployed on Lambda or Fargate.
                4. The services with no equivalent in your stack marked for extra labs.

                ## Notes
                If you come from another cloud, beware false friends: similar names with different defaults, quotas or permission models.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A written translation table from your current stack to AWS exists, and one of your own services runs on Lambda or Fargate."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "List the queue, cache, secrets, CI and logging tools you use now"
                - "Write the AWS equivalent beside each one"
                - "Add an extra IAM week to the study calendar"
                - "Redeploy one small service of yours on Lambda or Fargate"
            - name: Developer Associate for a frontend developer going full stack
              description: |-
                ## Purpose
                Frontend developers moving into backend work often find the exam's deployment and data questions the hardest, while authentication and API questions feel closer to home. Building the study app's API from the client's side first, with Cognito sign-in and presigned uploads, starts from familiar ground and then pushes into DynamoDB and pipelines.

                ## Milestones
                1. A small web client calling the study API with Cognito sign-in.
                2. The client hosted on S3 behind CloudFront, or on Amplify Hosting.
                3. Extra weeks given to DynamoDB modelling and deployment in the calendar.
                4. Backend vocabulary you met for the first time written up as a glossary.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A hosted web client signs in with Cognito and calls the study API, and a glossary of new backend terms exists."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Build a minimal web page that calls the study API"
                - "Add Cognito sign-in to the page"
                - "Host the client on S3 with CloudFront or on Amplify Hosting"
                - "Keep a glossary of backend terms as you meet them"
            - name: Studying in short sessions as a working parent
              description: |-
                ## Purpose
                Two-hour lab blocks are hard to find around school runs, bedtimes and on-call rotas. Splitting the plan into twenty-minute question and reading sessions on weekdays, with one longer lab when childcare allows, and agreeing the schedule at home, keeps progress steady without turning every evening into study.

                ## Milestones
                1. The study calendar recut into twenty-minute weekday sessions and one longer weekly lab.
                2. The schedule agreed with a partner or other carer.
                3. Questions available on a phone for unexpected spare minutes.
                4. The target exam week moved later if the shorter sessions need it, without guilt.

                ## Notes
                Labs that run unattended, such as a pipeline build, fit well in short sessions: start them, do questions, check the result.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Four weeks of twenty-minute weekday sessions and one longer lab a week are completed on an agreed home schedule."
                cadence: rolling
              tasks:
                - "Recut the study calendar into twenty-minute weekday sessions"
                - "Agree the study times with your partner or co-carer"
                - "Install the practice bank's mobile app or bookmark it"
                - "Do a twenty-minute question session after bedtime @recurring(weekly:tue,fri)"
            - name: Sitting the exam in a second language
              description: |-
                ## Purpose
                Scenario questions are long and their meaning often turns on one qualifier, so reading in a second language costs time and marks. Checking whether the exam is offered in your first language, whether extra time can be requested, and practising with long English questions closes most of that gap.

                ## Milestones
                1. The languages the exam is offered in checked on the official page.
                2. Any extra-time accommodation for non-native speakers checked and requested before booking.
                3. A glossary of qualifiers that change meaning, such as least, most, without and only.
                4. Timed practice done in the language you will sit in.
              priority: low
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "The exam language and any extra-time accommodation are settled before booking, and a qualifier glossary is in use."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Check which languages the exam is currently offered in"
                - "Check and request any extra-time accommodation before booking"
                - "Build a glossary of qualifiers that flip a question's meaning"
                - "Read one AWS developer guide page aloud in the exam language @recurring(weekly:mon)"
            - name: Leading a team study cohort
              description: |-
                ## Purpose
                Tech leads are often asked to get several developers certified, for a partner tier or simply to raise the team's AWS fluency. A cohort with a shared sandbox policy, a weekly session where each person demos one lab and staggered exam dates turns individual study into a team habit and spreads the knowledge.

                ## Milestones
                1. Three to eight developers signed up with target exam weeks.
                2. Each person given their own sandbox or a separate account under the organisation with budget alerts.
                3. A weekly forty-five minute session where one person demos a lab from the study app.
                4. Exam dates staggered so a pass can share tips with the next.
                5. Results and lessons written up for the next cohort.

                ## Notes
                Start from the **Course** template to lay out the weekly sessions. Keep scores private unless people choose to share them.
              priority: medium
              frontmatter:
                mode: service
                output_kind: deliverable
                success_criteria: "A cohort of at least three developers meets weekly for eight weeks, and a written lessons note is shared with the team."
                cadence: phased
                effort_hours_estimate: "16"
              tasks:
                - "Ask the team who wants to join and their target exam weeks"
                - "Set up separate sandbox accounts with budget alerts"
                - "Run the weekly lab demo session @recurring(weekly:thu)"
                - "Write a lessons note once the cohort has sat the exam"
            - name: Hardening the study app to production habits
              description: |-
                ## Purpose
                Experienced developers use the exam's topics as a checklist for their real services: idempotent handlers, dead-letter queues on every async path, least-privilege roles, alarms that someone would act on. Applying that checklist to the study app turns certification knowledge into habits you can bring to code review at work.

                ## Milestones
                1. Every async path in the study app given a DLQ or on-failure destination.
                2. Handlers made idempotent with a key stored in DynamoDB.
                3. Every role checked against IAM Access Analyzer findings.
                4. Alarms set only on signals with a written response.
                5. A one-page checklist written for use in code reviews at work.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "The study app has DLQs, idempotent handlers and reviewed roles, and a one-page production checklist exists."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "List every async path and add a DLQ or destination"
                - "Make the order handler idempotent with a stored key"
                - "Run IAM Access Analyzer and fix each finding"
                - "Check the depth of every dead-letter queue @recurring(monthly:12)"
            - name: Internal serverless starter template from your notes
              description: |-
                ## Purpose
                After the exam, the most useful thing you can hand your team is a starter repository that already has the patterns you studied: a SAM or CDK skeleton, structured logging, tracing, least-privilege roles and a pipeline. It saves each new service a week of setup and keeps your knowledge current as you maintain it.

                ## Milestones
                1. A starter repository with an API, a function, a table and a queue.
                2. Logging, tracing, alarms and a pipeline included by default.
                3. A readme explaining each choice in a line, with links to the AWS docs.
                4. One colleague using it for a real service and feedback taken in.

                ## Notes
                Ask your security or platform team to review the default roles before anyone uses the template in production.
              priority: low
              frontmatter:
                mode: service
                output_kind: deliverable
                success_criteria: "A documented serverless starter repository is used by at least one colleague for a real service."
                cadence: phased
                effort_hours_estimate: "12"
              tasks:
                - "Copy the study app into a clean starter repository"
                - "Strip the study features and keep the patterns"
                - "Write a readme with a line of reasoning for each default"
                - "Update the template's dependencies and runtimes @recurring(quarterly)"
            - name: Choosing the next AWS step after Developer Associate
              description: |-
                ## Purpose
                Developer Associate often leads somewhere: another associate that fills a gap, a professional exam such as DevOps Engineer, or a pause to use the skills at work. Deciding deliberately, using the score report and what your role needs over the next year, avoids collecting certificates that do not help.

                ## Milestones
                1. Your score report's weaker domains and your role's next-year needs listed side by side.
                2. Two or three options named, including not taking another exam for now.
                3. Each option given a rough cost in hours and money.
                4. A decision recorded with a review date.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A recorded decision names the next step after Developer Associate, or a deliberate pause, with a review date."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "List your role's AWS needs for the next twelve months"
                - "Name two or three next steps, including a pause"
                - "Estimate hours and cost for each option"
                - "Record the decision and a date to revisit it"
---

# AWS Developer Associate

This area is for developers who write code that runs on AWS, or soon will, and want the Developer Associate certification to prove they can build, secure, ship and debug it. It opens with foundations (the exam guide, a baseline score, a sandbox account with billing guardrails, credentials, a course and a small serverless app that carries every lab), then the study machinery, the service skills from Lambda, API Gateway and DynamoDB through Cognito, KMS, pipelines, CloudWatch and X-Ray, the decisions about readiness and funding, booking and exam day, plans for backend and frontend developers, parents, second-language candidates and team leads, and specialist work such as hardening the study app and turning it into a team starter template.

The rhythm is a daily question warm-up and flashcard pass, a weekly build session, reading slot and wrong-answer review, a timed practice exam twice a month, a monthly score update, sandbox clean-up and plan reset, and a quarterly check of the exam guide. The Purchase decision, Reading queue, Metrics log and Course templates pair with it. Installing adds all 50 projects as active, so archive the ones that are not for you yet.
