---
id: tech-certifications.google-cloud-professional-certs
name: Google Cloud Professional Certifications
description: "A plan for a Google Cloud professional exam: choosing Cloud Architect, Data Engineer, DevOps Engineer or another, case study preparation, design trade-off labs, timed mocks, booking and renewal."
category: personal
version: 1.0.0
tags: [tech-certifications, google-cloud-professional-certs, engineer, google-cloud, cloud-architect, data-engineer, devops-engineer, case-studies]
author: Aurum Technology
starter_structure:
  templates:
    - skills-matrix
    - metrics-log
    - reading-queue
    - purchase-decision
    - portfolio-piece
  pillars:
    - name: Tech & Engineering Certifications
      emoji: "🏅"
      description: "Technical credentials and the exams behind them: FE and PE licensing, Chartered Engineer and Trinidad and Tobago engineering registration, PMP, PRINCE2 and Scrum, AWS, Azure and Google Cloud by level, Kubernetes and Terraform, networking and security certifications, Six Sigma belts, and coding, system design and machine-learning interviews."
      pillarFrontmatter:
        review_cadence: monthly
      areas:
        - name: Google Cloud Professional Certifications
          description: "Taking a Google Cloud professional exam such as Cloud Architect, Data Engineer or DevOps Engineer: case studies, design trade-offs and practice questions."
          projects:
            - name: Choosing which Google Cloud professional exam to sit
              description: |-
                ## Purpose
                Google Cloud's professional tier covers several distinct jobs: Cloud Architect, Data Engineer, Cloud DevOps Engineer, Cloud Developer, Network Engineer, Security Engineer, Database Engineer and Machine Learning Engineer among them. Each is written for a role, so the right first choice is the exam closest to the work on your desk this year, which turns your tickets and design reviews into revision. A written choice also stops the common drift of half-studying two exams at once.

                ## Milestones
                1. The current list of professional certifications checked on the Google Cloud certification site, with any retired or renamed exams noted.
                2. Your last twelve months of work sorted into design, data, delivery and operations, networking, security and machine learning.
                3. Two candidate exams scored against your current work, your next role and what your employer values.
                4. One exam chosen in a dated note, with a target month and the reason it beat the runner-up.

                ## Notes
                Cloud Architect is the one most job adverts name, but it is also the broadest. If your days are mostly pipelines or reliability work, the narrower exam is often the faster first pass.
              priority: high
              deadlineOffsetDays: 14
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A dated note names one professional exam, a target month and the reasons it was chosen over the runner-up."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "List every current professional exam from the Google Cloud certification page"
                - "Sort a year of your work tickets into the roles the exams describe"
                - "Score your top two exams against current work and your next role"
                - "Write your chosen exam and target month in a dated note"
            - name: Exam guide and certification policy folder
              description: |-
                ## Purpose
                Every professional exam is written from a published exam guide that lists its sections and the tasks under each, and Google revises these guides and sometimes the exam itself. Keeping the current guide, the sample questions and the policy pages on retakes, rescheduling and validity in one dated folder means every later study decision is checked against the source rather than an old forum post.

                ## Milestones
                1. The current exam guide for your chosen exam saved with its download date.
                2. The section names and any stated weightings copied onto one page from the guide itself.
                3. Delivery options, languages, fee, retake waiting periods and validity period recorded from the official pages in a dated note.
                4. The official sample questions saved, unanswered, for the diagnostic run.

                ## Notes
                Copy numbers only from Google's own pages. Exam length, question count, fees and retake waits have changed before, and blog posts lag behind.
              priority: high
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "One folder holds the dated exam guide, the unanswered sample questions and a policy note copied from official pages."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Download the current exam guide for your chosen professional exam"
                - "Copy the guide's section names and weightings onto a single page"
                - "Record fee, languages, retake waits and validity from the policy pages"
                - "Check the certification site for a revised guide or exam version @recurring(quarterly)"
            - name: Diagnostic run of the official sample questions
              description: |-
                ## Purpose
                Before any course or question bank, answer Google's official sample questions cold under a rough time limit. The score matters less than the pattern: which sections you lose, whether you miss on product knowledge or on reading the requirement, and how long the case study items take. That pattern decides where the first month of study goes.

                ## Milestones
                1. The official sample questions answered in one sitting without notes.
                2. Each miss tagged by exam guide section and by cause: did not know the product, misread the requirement, or picked a workable but not best answer.
                3. Time per question noted for case study and standalone items.
                4. A baseline score and the two weakest sections written at the top of your study plan.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A baseline score, every miss tagged by section and cause, and the two weakest sections are written in the study plan."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Sit the official sample questions in one timed session without notes"
                - "Tag every miss with its exam guide section and its cause"
                - "Note how long the case study questions took compared with the rest"
                - "Write your baseline score and two weakest sections in the plan"
            - name: Exam guide sections rated against your experience
              description: |-
                ## Purpose
                Professional exams assume real time on the platform, and most candidates have strong experience in a few services and none in others. A matrix that rates each task line in the exam guide from never used to run in production shows exactly where hands-on labs are needed and where reading will do.

                ## Milestones
                1. Every task line in the exam guide listed in one matrix.
                2. Each line rated on a four-point scale from never used to run in production.
                3. The lowest-rated lines linked to a lab or a documentation page.
                4. The matrix re-rated after your first timed practice exam.

                ## Notes
                Start from the **Skills matrix** template. Be strict with yourself: having read about a product is not the same as having configured it.
              priority: medium
              deadlineOffsetDays: 21
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A matrix rates every exam guide task line on a four-point scale, with each low rating linked to a lab or page."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Paste every task line from the exam guide into a matrix"
                - "Rate each line from never used to run in production"
                - "Link the lowest-rated lines to a lab or a documentation page"
                - "Re-rate the matrix after your first full practice exam"
            - name: Dated study calendar to a target exam month
              description: |-
                ## Purpose
                Working engineers who study without a date tend to stall around week five, when the easy sections are done. A calendar that counts back from a target month, with weeks set aside for each weak section, a lab day each week and two full mocks before booking, turns the exam into a schedule your household and manager can see.

                ## Milestones
                1. A target exam month written down and shared with someone who will ask about it.
                2. Weeks assigned to each exam guide section, weakest first.
                3. Two full timed mocks and a readiness check placed in the calendar.
                4. Study blocks entered in your real calendar for the first four weeks.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A calendar shows a target month, weeks per section, two mocks and a readiness check, with four weeks of blocks booked."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Pick a target exam month at least eight weeks away"
                - "Assign calendar weeks to sections, starting with your weakest"
                - "Place two full mocks and a readiness check before the booking date"
                - "Enter the first four weeks of study blocks in your calendar"
            - name: Practice organisation with folders, budgets and policies
              description: |-
                ## Purpose
                Questions at this level turn on organisation policies, folders, Shared VPC and cross-project IAM, which a single free project cannot show you. A practice organisation with a few projects under folders, a billing budget with alert thresholds and a rule for what may be left running lets you build the designs the exam describes without a surprise bill.

                ## Milestones
                1. A practice organisation, or a dedicated folder in a sandbox your employer provides, with at least three projects under two folders.
                2. A billing budget set with alert emails at several thresholds.
                3. Organisation policies applied that restrict regions and block external IP addresses by default.
                4. A written rule for which resources may run overnight.

                ## Notes
                A personal organisation needs a domain you control and a Cloud Identity account. If that is a hurdle, ask your employer for a sandbox folder with its own budget rather than practising in a shared project.
              priority: high
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A practice organisation or sandbox folder has three projects, a budget with alerts and region and external IP policies applied."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Set up a practice organisation or request a sandbox folder at work"
                - "Create two folders and three projects to mirror a small company"
                - "Set a billing budget with alert thresholds sent to your email"
                - "Apply organisation policies limiting regions and external IP addresses"
                - "Review the billing report for unexpected lab spend @recurring(monthly:3)"
            - name: Weekly lab teardown and idle resource sweep
              description: |-
                ## Purpose
                Labs for these exams use the expensive things: GKE clusters, Dataflow jobs, Cloud SQL replicas, VPN gateways and Vertex AI endpoints. One short teardown each week, working from a list of what was created, is the habit that keeps practice affordable for months.

                ## Milestones
                1. A running list of every resource created in labs, with its project.
                2. A weekly teardown done against that list.
                3. Idle disks, static IP addresses and snapshots checked, since they keep billing after the VM is gone.
                4. Lab spend kept within the budget you set.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Four weekly teardowns in a row are logged and the month's lab spend sits inside the budget."
                cadence: rolling
              tasks:
                - "Start a list of lab resources with project and date created"
                - "Delete the week's lab resources from the list @recurring(weekly:sun)"
                - "Check each practice project for idle disks, static IPs and snapshots"
                - "Shut down any practice project you no longer need rather than emptying it"
            - name: Employer sponsorship, vouchers and study time
              description: |-
                ## Purpose
                Many employers, and every Google Cloud partner firm, have a reason to pay for professional certifications, and some hold exam vouchers or training credits you only get by asking. A short written request that names the exam, the cost, the study hours and what the team gets back makes a yes far more likely than a hallway mention.

                ## Milestones
                1. Your employer's training, certification and expenses policy read.
                2. A one-page request naming the exam, costs, study hours and the benefit to the team.
                3. A decision from your manager on fees, vouchers and study time recorded.
                4. Any voucher or training credit codes stored with their expiry dates.

                ## Notes
                Check for a repayment clause if you leave within a set period, and note it before you accept.
              priority: medium
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "A written request has been sent and the decision on fees, vouchers and study time is recorded with any expiry dates."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Find the training and certification policy on the intranet"
                - "Write a one-page request with exam, costs, hours and team benefit"
                - "Ask your manager or partner lead whether vouchers or credits exist"
                - "Record the decision and any voucher expiry date"
            - name: Case study pack for the Cloud Architect exam
              description: |-
                ## Purpose
                The Cloud Architect exam publishes its case studies in advance: fictional companies with business and technical requirements that several questions draw on. Reading them cold in the exam wastes time, while arriving with each one summarised, its constraints listed and a target architecture sketched turns those questions into recognition rather than reading.

                ## Milestones
                1. The current case studies downloaded from the exam page, with the date and any change from the previous set noted.
                2. Each case summarised on one page: business requirements, technical requirements, existing environment and stated constraints.
                3. A target architecture sketched for each case, naming the services and the reason for each.
                4. Likely question themes listed for each case, such as migration, compliance, cost or latency.

                ## Notes
                Google refreshes the case studies from time to time, so check you have the set that matches your exam version and ignore summaries of retired cases. Other professional exams may not use published cases; check your exam guide before spending time here.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: learning
                output_kind: artifact
                success_criteria: "Each current case study has a one-page summary, a sketched target architecture and a list of likely question themes."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Download the current case studies from the Cloud Architect exam page"
                - "Summarise each case's business and technical requirements on one page"
                - "Sketch a target architecture for each case with a reason per service"
                - "List the question themes each case is likely to test"
            - name: Weekly scenario question block
              description: |-
                ## Purpose
                Scenario questions at the professional level reward a habit more than a fact: reading the requirement, spotting the deciding constraint and rejecting answers that work but miss it. One protected block a week of around thirty scenario questions, reviewed the same day, builds that habit steadily.

                ## Milestones
                1. A weekly block of scenario questions protected in your calendar.
                2. Each block reviewed the same day, with misses copied into the wrong-answer log.
                3. Section scores tracked week by week.
                4. Block accuracy rising for four weeks in a row before booking.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Eight weekly blocks are completed and scored by section, each with its misses logged the same day."
                cadence: rolling
              tasks:
                - "Choose the weekday and time for a protected question block"
                - "Answer a timed block of scenario questions @recurring(weekly:tue)"
                - "Copy each miss into the wrong-answer log the same day"
                - "Record the block's section scores in one table"
            - name: Wrong-answer log with the missed constraint
              description: |-
                ## Purpose
                Most misses at this level come from choosing an answer that would work rather than the one that best fits a stated requirement such as least operational overhead, lowest cost or data residency. A log that records, for each miss, the constraint you overlooked turns repeated mistakes into a short list of reading rules.

                ## Milestones
                1. A log with columns for question topic, the answer chosen, the right answer and the constraint missed.
                2. Every practice miss entered within a day.
                3. Recurring patterns grouped, such as managed over self-managed or regional over zonal.
                4. A one-page list of reading rules drawn from the patterns.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "The log holds every practice miss with its missed constraint, and a one-page list of reading rules exists."
                cadence: rolling
              tasks:
                - "Set up the log with topic, chosen, correct and missed-constraint columns"
                - "Group the week's misses by the constraint you overlooked @recurring(weekly:fri)"
                - "Write a reading rule for any pattern that appears three times"
                - "Reread the reading rules before each timed mock"
            - name: Weekly hands-on lab from a practice scenario
              description: |-
                ## Purpose
                Reading about Private Service Connect or a Cloud Deploy promotion is not the same as watching it fail on a missing permission. Building one small thing each week from a practice scenario, in Google Cloud Skills Boost or your practice organisation, gives you the operational detail that separates the last two answers after elimination.

                ## Milestones
                1. A lab slot fixed each week.
                2. Each lab chosen from a recent miss or a low-rated matrix line.
                3. A short note for each lab: what was built, what broke and what fixed it.
                4. At least one lab done for every section of the exam guide.
              priority: medium
              frontmatter:
                mode: building
                output_kind: habit
                success_criteria: "Every exam guide section has at least one lab note recording what was built, what broke and the fix."
                cadence: rolling
              tasks:
                - "Pick next week's lab from a recent miss or low matrix rating"
                - "Build the week's lab and note what broke and why @recurring(weekly:sat)"
                - "Write a three-line lab note linked to its exam guide section"
                - "Mark the matrix line as practised once the lab works"
            - name: Monthly full-length timed mock
              description: |-
                ## Purpose
                A full-length mock under exam timing is the only honest readiness signal, and it also shows whether concentration fades in the last third. Sitting one each month, in one sitting with no notes, and logging the section scores gives a trend line to judge the booking date by.

                ## Milestones
                1. A practice source with full-length timed papers chosen.
                2. One timed mock sat each month in a single session.
                3. Overall and section scores entered in a metrics log.
                4. Time left at the end and accuracy in the final third noted.

                ## Notes
                Start from the **Metrics log** template. Do not reuse the same paper within a month; recognised questions inflate the score.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Three monthly mocks are logged with overall and section scores, time left and final-third accuracy."
                cadence: rolling
              tasks:
                - "Choose a source of full-length timed practice exams"
                - "Sit a full timed mock with no notes @recurring(monthly:12)"
                - "Log overall and section scores with the date and paper used"
                - "Note your accuracy on the final third of the paper"
            - name: Architecture Framework and decision guide reading queue
              description: |-
                ## Purpose
                Google's Architecture Framework, the reference architectures in the Cloud Architecture Center and the product decision guides are where many right answers come from. A short queue of pages tied to your weak sections, read in one slot a month and summarised, does more than skimming everything once.

                ## Milestones
                1. A reading queue of framework pillars, decision guides and reference architectures linked to your weak sections.
                2. One reading slot a month kept.
                3. Each page summarised in three lines with the decision it teaches.
                4. The queue reordered after each mock.

                ## Notes
                Start from the **Reading queue** template.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "At least six queued pages are summarised in three lines each, every one tied to an exam guide section."
                cadence: rolling
              tasks:
                - "List framework pages and decision guides for your two weakest sections"
                - "Read and summarise two queued pages in three lines each @recurring(monthly:20)"
                - "Reorder the queue after each timed mock"
                - "Ask the agent to turn your summaries into ten self-test questions"
            - name: Study partner design defence sessions
              description: |-
                ## Purpose
                Explaining out loud why you picked Spanner over Cloud SQL, to someone who pushes back, exposes gaps that multiple choice hides. A weekly half-hour call with a partner sitting the same or a neighbouring exam, taking turns to defend a design from a case study, makes the reasoning stick.

                ## Milestones
                1. A study partner found through work, a user group or an online study community.
                2. A weekly slot agreed.
                3. Each session built around one case study or scenario, with roles swapped.
                4. Disagreements settled against the documentation and noted.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Six weekly sessions are held, each with one defended design and any disagreement settled with a documentation link."
                cadence: rolling
              tasks:
                - "Ask in a user group or team channel for a study partner"
                - "Agree a weekly half-hour slot and a rotating presenter"
                - "Defend one design to your partner and swap roles @recurring(weekly:wed)"
                - "Settle each disagreement with a documentation link"
            - name: Release notes watch for exam guide products
              description: |-
                ## Purpose
                Products on Google Cloud are renamed and merged often, and an exam written last year may still use an older name while your labs show the new one. A monthly scan of the release notes for products in your exam guide, noting renames, retirements and new defaults, keeps you from second-guessing yourself in the exam.

                ## Milestones
                1. The products in your exam guide listed for tracking.
                2. Release notes scanned once a month for those products.
                3. Renames and retirements recorded with old and new names side by side.
                4. Any change that affects a likely exam answer flagged in the wrong-answer log.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "An old-name and new-name table exists for tracked products and has been updated in each of the last three months."
                cadence: rolling
              tasks:
                - "List the products your exam guide names most often"
                - "Scan release notes for those products and note renames @recurring(monthly:5)"
                - "Keep an old-name and new-name table for the products you study"
                - "Flag any change that alters a likely exam answer"
            - name: Monthly score review and study plan reset
              description: |-
                ## Purpose
                Study plans drift: a section you feared turns out fine and one you ignored keeps costing marks. A monthly review that sets mock scores, block scores and the wrong-answer log side by side, then moves next month's weeks to match, keeps time going where the marks are.

                ## Milestones
                1. A monthly review slot fixed a few days after the timed mock.
                2. Section trends compared across mocks and weekly blocks.
                3. Next month's calendar weeks reassigned to the weakest sections.
                4. A note of whether the target month still holds.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Each month has a dated review note with section trends, reassigned weeks and a hold or move decision on the target month."
                cadence: rolling
              tasks:
                - "Put mock and weekly block scores side by side by section"
                - "Reassign next month's study weeks to the weakest sections @recurring(monthly:27)"
                - "Decide whether the target exam month still holds"
                - "Ask the agent to summarise the month's wrong-answer patterns in five lines"
            - name: Service selection decision flashcards
              description: |-
                ## Purpose
                A large share of professional questions come down to picking one product from several plausible ones: Bigtable or Spanner, Cloud Run or GKE Autopilot, Dataflow or Dataproc, Cloud NAT or a proxy. A small deck of decision cards, each giving the deciding factors rather than a definition, reviewed for ten minutes a day, makes those choices quick.

                ## Milestones
                1. A deck of decision cards covering compute, storage, databases, data processing, networking and security choices.
                2. Each card phrased with a requirement on the front and a product with its reason on the back.
                3. Ten minutes of review done on most days.
                4. Cards answered correctly for a week running retired from daily review.
              priority: low
              frontmatter:
                mode: learning
                output_kind: habit
                success_criteria: "A deck of at least sixty decision cards exists and has been reviewed on twenty of the last thirty days."
                cadence: rolling
              tasks:
                - "Write twenty decision cards with a requirement on the front"
                - "Review the decision deck for ten minutes @recurring(daily)"
                - "Add a card for each product choice missed in a practice block"
                - "Retire cards answered correctly for a full week"
            - name: Resource hierarchy, organisation policies and IAM design
              description: |-
                ## Purpose
                Cloud Architect and Security Engineer questions return again and again to where a policy should be set, which role is least privilege and how a service account should work across projects. Working through the hierarchy, policy inheritance, custom roles, workload identity federation and service account impersonation in your practice organisation makes those questions mechanical.

                ## Milestones
                1. A diagram of your practice organisation showing folders, projects and where each policy is set.
                2. Policy inheritance and an organisation policy exception tested.
                3. A custom role and a predefined role compared for one task.
                4. Service account impersonation and workload identity federation each set up once.

                ## Notes
                Prefer groups over individual users and predefined roles over basic roles in every answer unless the question says otherwise. Exam writers reward that default.
              priority: medium
              frontmatter:
                mode: building
                output_kind: knowledge
                success_criteria: "A hierarchy diagram exists and impersonation, federation and an inherited policy have each been configured and tested once."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Draw your practice organisation showing where each IAM policy sits"
                - "Test policy inheritance by granting a role at folder level"
                - "Set up service account impersonation for one deployment task"
                - "Configure workload identity federation for an external CI system"
            - name: VPC design and hybrid connectivity labs
              description: |-
                ## Purpose
                Network design appears on nearly every professional exam, not only Network Engineer: Shared VPC or peering, Private Service Connect or private services access, Cloud VPN or Interconnect, and how routes and firewall policies behave. Building a small hub and spoke layout and connecting it to an on-premises stand-in teaches the limits that questions quietly depend on.

                ## Milestones
                1. A Shared VPC host and two service projects built and tested.
                2. Private Service Connect and private services access each used once, with the difference written down.
                3. An HA VPN tunnel to a second VPC acting as on-premises, with Cloud Router and dynamic routes.
                4. Hierarchical firewall policies applied and their evaluation order noted.
              priority: medium
              frontmatter:
                mode: building
                output_kind: knowledge
                success_criteria: "A working Shared VPC with HA VPN to a simulated on-premises network exists, with a written note on each connectivity choice."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "Build a Shared VPC host project with two service projects"
                - "Connect a managed database by private services access and note the routes"
                - "Set up HA VPN with Cloud Router to a VPC standing in for on-premises"
                - "Write a one-page note on when to choose Interconnect over VPN"
            - name: Compute choice trade-offs for one workload
              description: |-
                ## Purpose
                Exam items about compute rarely ask what a product does; they ask which one fits a team with no Kubernetes skills, a legacy licence, a burst of batch jobs or a strict cold start limit. Deploying the same small service on a managed instance group, GKE Autopilot and Cloud Run, then comparing effort, scaling and cost, gives you the trade-offs first hand.

                ## Milestones
                1. One small service deployed three ways: managed instance group, GKE Autopilot and Cloud Run.
                2. Scaling behaviour, cold starts and operational effort compared in a table.
                3. Spot VMs, sole-tenant nodes and committed use discounts each matched to a scenario.
                4. A one-page compute decision guide in your own words.
              priority: medium
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "One service has run on three compute platforms and a one-page decision guide compares them on scaling, effort and cost."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Containerise a small service you can deploy three ways"
                - "Deploy it on a managed instance group, GKE Autopilot and Cloud Run"
                - "Compare scaling, cold starts and effort in a three-column table"
                - "Write your compute decision guide on one page"
            - name: Storage and database selection by access pattern
              description: |-
                ## Purpose
                Picking the database is the most common single decision across Cloud Architect, Data Engineer and Database Engineer questions. Knowing when Spanner's global consistency is worth its cost, when Bigtable's row key design matters, when AlloyDB or Cloud SQL suits a lift and shift, and which Cloud Storage class fits each access pattern earns marks on every paper.

                ## Milestones
                1. A comparison table of Cloud SQL, AlloyDB, Spanner, Bigtable, Firestore, Memorystore and BigQuery by data model, scale, consistency and cost driver.
                2. Cloud Storage classes and lifecycle rules matched to five access patterns.
                3. A Bigtable row key designed and tested against a hotspotting example.
                4. Backup, replica and failover options noted for each relational choice.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A comparison table covers seven managed data stores and a tested Bigtable row key design is written up."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Fill a comparison table of the managed databases by model and scale"
                - "Match each Cloud Storage class to an access pattern with lifecycle rules"
                - "Design a Bigtable row key and test it for hotspots"
                - "List backup and failover options for Cloud SQL, AlloyDB and Spanner"
            - name: Streaming and batch pipelines for the Data Engineer exam
              description: |-
                ## Purpose
                Data Engineer questions turn on streaming or batch, exactly-once processing, late data, schema changes and how BigQuery tables are partitioned, clustered and secured. Building one streaming pipeline from Pub/Sub through Dataflow into a partitioned BigQuery table, then a batch job, covers most of the design vocabulary the exam uses.

                ## Milestones
                1. A streaming pipeline from Pub/Sub through Dataflow into a partitioned and clustered BigQuery table.
                2. Windowing, triggers and late data handling tried with a test stream.
                3. A batch transformation built, with the choice of tool justified in writing.
                4. BigQuery access controlled at dataset, row and column level once each.

                ## Notes
                If you come from Databricks or Snowflake, map your existing terms to the Google Cloud products before building rather than learning them from zero.
              priority: medium
              frontmatter:
                mode: building
                output_kind: knowledge
                success_criteria: "A streaming and a batch pipeline have both run into BigQuery, with row and column security applied to one table."
                cadence: phased
                effort_hours_estimate: "12"
              tasks:
                - "Publish a test event stream to a Pub/Sub topic"
                - "Build a Dataflow job writing to a partitioned, clustered BigQuery table"
                - "Test windowing and late data with deliberately delayed events"
                - "Apply row-level and column-level security to one BigQuery table"
            - name: SLOs, error budgets and postmortems for the DevOps exam
              description: |-
                ## Purpose
                The Cloud DevOps Engineer exam is written around site reliability engineering: service level indicators and objectives, error budgets and the policy for spending them, alerting on symptoms, reducing toil and blameless postmortems. Setting real SLOs on a small lab service and letting it break teaches the judgement questions far better than the vocabulary alone.

                ## Milestones
                1. Two SLIs and an SLO defined for a lab service in Cloud Monitoring.
                2. A burn-rate alert set on the error budget and tested by injecting errors.
                3. An error budget policy written for what happens when the budget runs out.
                4. One blameless postmortem written for the injected incident.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A lab service has a live SLO with a tested burn-rate alert, a written error budget policy and one postmortem."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Define two SLIs and one SLO for a lab service in Cloud Monitoring"
                - "Set a burn-rate alert and trigger it by injecting errors"
                - "Write an error budget policy in half a page"
                - "Write a blameless postmortem for the incident you caused"
            - name: Release pipeline with Cloud Build and Cloud Deploy
              description: |-
                ## Purpose
                DevOps Engineer and Cloud Developer questions expect you to know how code moves from commit to production: build triggers, artifact storage and scanning, Binary Authorization, progressive delivery and rollback. A pipeline you have built yourself, with a canary that you fail on purpose, makes the safe rollout answer obvious.

                ## Milestones
                1. A Cloud Build trigger that builds, tests and pushes an image to Artifact Registry.
                2. Vulnerability scan results reviewed for that image.
                3. A Cloud Deploy pipeline promoting through two targets with an approval step.
                4. A canary rollout failed on purpose and rolled back.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A working pipeline promotes an image through two targets with approval, and one failed canary has been rolled back."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "Create a Cloud Build trigger that pushes images to Artifact Registry"
                - "Review the vulnerability scan for the image you pushed"
                - "Set up a Cloud Deploy pipeline with an approval before production"
                - "Fail a canary on purpose and record how the rollback behaved"
            - name: Perimeter, key management and data protection controls
              description: |-
                ## Purpose
                Security questions appear on every professional exam, and the Security Engineer exam goes further into VPC Service Controls, Cloud KMS key choices, Secret Manager, Sensitive Data Protection and Security Command Center findings. Configuring each one in the practice organisation, including a perimeter that blocks your own access by mistake, makes the exfiltration and key questions much easier to read.

                ## Milestones
                1. A VPC Service Controls perimeter around one project tested with an allowed and a blocked call.
                2. Customer-managed encryption keys used on a storage bucket and a BigQuery dataset.
                3. Secrets moved from environment variables into Secret Manager for one lab service.
                4. Security Command Center findings reviewed and two fixed.
              priority: medium
              frontmatter:
                mode: building
                output_kind: knowledge
                success_criteria: "A tested service perimeter, customer-managed keys on two resources and two fixed security findings are recorded in lab notes."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "Build a VPC Service Controls perimeter in dry-run mode first"
                - "Encrypt a bucket and a dataset with a customer-managed key"
                - "Move one lab service's secrets into Secret Manager"
                - "Review IAM recommender and Security Command Center findings @recurring(monthly:9)"
            - name: Disaster recovery designs by recovery objectives
              description: |-
                ## Purpose
                Scenario questions often hide the answer in two numbers: how much data the business can lose and how long it can be down. Mapping each recovery objective band to a Google Cloud pattern, from backup and restore through warm standby to multi-region active-active, and testing one failover, lets you match designs to requirements quickly.

                ## Milestones
                1. A table matching recovery time and point objectives to patterns and their cost.
                2. Zonal, regional and multi-regional options listed for compute, storage and databases.
                3. One failover tested, such as a Cloud SQL replica promotion or a regional load balancer shift.
                4. The failover's measured recovery time recorded against the plan.
              priority: low
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A recovery pattern table exists and one tested failover has its measured recovery time written beside the planned one."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Draw a table matching RTO and RPO bands to recovery patterns"
                - "List the zonal, regional and multi-region option for each core service"
                - "Promote a Cloud SQL replica in a lab and time the failover"
                - "Record the measured recovery time beside the planned one"
            - name: Practice question source and course comparison
              description: |-
                ## Purpose
                Paid practice banks vary widely: some mirror the current exam's scenario style, others are copied, out of date or simply wrong. Comparing two or three sources on sample quality, update date, explanations and price before paying saves money and stops you learning wrong answers.

                ## Milestones
                1. Google's official training and Skills Boost paths for your exam listed with their cost.
                2. Two or three third-party sources compared on update date, explanation quality and price.
                3. Ten sample questions from each checked against the documentation.
                4. One primary source and one backup chosen, avoiding any that sells real exam content.

                ## Notes
                Start from the **Purchase decision** template. Sources that promise actual exam questions breach the exam agreement and can cost you the certification.
              priority: medium
              deadlineOffsetDays: 30
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A purchase note records the chosen primary and backup sources, each with ten sample questions checked against documentation."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "List Google's official training path and costs for your exam"
                - "Shortlist three third-party practice sources with update dates"
                - "Check ten sample questions from each against the documentation"
                - "Record your chosen source and the reason in a purchase note"
            - name: Reading method for long scenario questions
              description: |-
                ## Purpose
                Long scenario and case study questions punish reading the options first. A fixed method of reading the last line to find what is asked, marking the deciding constraint, eliminating options that break it and only then comparing the rest cuts both time and careless misses.

                ## Milestones
                1. A written four-step method for scenario questions.
                2. The method used on two practice blocks with time per question measured.
                3. Accuracy before and after the method compared.
                4. The method adjusted where it slowed you down.
              priority: low
              frontmatter:
                mode: building
                output_kind: knowledge
                success_criteria: "A four-step method is written down and two practice blocks using it show accuracy and time per question against earlier blocks."
                cadence: phased
                effort_hours_estimate: "3"
              tasks:
                - "Write your four-step reading method on an index card"
                - "Use the method on a practice block and time each question"
                - "Compare accuracy with your previous block"
                - "Adjust the step that slowed you down most"
            - name: Pacing and flagging plan for exam day
              description: |-
                ## Purpose
                Running out of time on the final questions is a common cause of a narrow fail. A plan that sets checkpoint times, a rule for when to flag and move on, and how much time to keep for flagged items, rehearsed in two mocks, removes that risk.

                ## Milestones
                1. Checkpoint times written for a quarter, half and three quarters of the paper.
                2. A flag rule set, such as moving on after a fixed time without a clear answer.
                3. Time reserved at the end for flagged questions.
                4. The plan rehearsed in two timed mocks and adjusted.

                ## Notes
                Use the question count and duration from the official exam page, not from memory or a forum.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A written pacing plan with three checkpoints and a flag rule has been rehearsed in two timed mocks."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Work out checkpoint times from the official exam duration"
                - "Write a flag rule you will apply without debate"
                - "Rehearse the pacing plan in your next timed mock"
                - "Adjust checkpoints based on where you ran slow"
            - name: Online proctored or test centre decision
              description: |-
                ## Purpose
                Professional exams can usually be taken online with a remote proctor or at a test centre, and each has its own risks: a weak connection or a busy household at home, travel and fixed slots at a centre. Choosing deliberately, after checking the system requirements and your nearest centres, avoids a cancelled sitting.

                ## Milestones
                1. Current delivery options for your exam checked on the official page.
                2. The online proctoring system test run on the computer and network you would use.
                3. Nearest test centres and their available slots found.
                4. A choice recorded with a backup plan if the first option fails.
              priority: medium
              deadlineOffsetDays: 45
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A delivery mode is chosen after a passed system test or a confirmed centre slot, with a backup plan written down."
                cadence: one-shot
                effort_hours_estimate: "1"
              tasks:
                - "Check the delivery options listed for your exam"
                - "Run the online proctoring system test on your exam computer"
                - "Look up the nearest test centre and its open slots"
                - "Record your choice and a backup plan"
            - name: Readiness gate before booking the exam
              description: |-
                ## Purpose
                Booking too early wastes the fee and a retake wait, and booking too late lets momentum fade. A gate written in advance, such as two consecutive mocks above your chosen threshold, no section below a floor and every case study summarised, makes the booking decision a check rather than a mood.

                ## Milestones
                1. A written readiness gate with a mock score threshold and a section floor.
                2. Two consecutive timed mocks meeting the gate.
                3. No exam guide line still rated never used in the skills matrix.
                4. A go or wait decision recorded with the date.
              priority: high
              deadlineOffsetDays: 75
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A dated go or wait decision is recorded against a readiness gate that was written before the last two mocks."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Write your readiness gate with a score threshold and a section floor"
                - "Check the last two mocks against the gate"
                - "Confirm no matrix line is still rated never used"
                - "Record a go or wait decision with the date"
            - name: Weak section recovery fortnight
              description: |-
                ## Purpose
                When one section stays low across three mocks, more of the same practice rarely moves it. A two-week recovery plan for that section, with fresh documentation, two dedicated labs and a targeted question set, usually lifts it faster than spreading time evenly.

                ## Milestones
                1. The persistently weak section identified from mock and block scores.
                2. The cause named: product knowledge, reading the requirement, or both.
                3. Two labs and a targeted question set completed for the section.
                4. The section's score on the next mock compared with its earlier average.
              priority: low
              frontmatter:
                mode: building
                output_kind: knowledge
                success_criteria: "The weakest section's score on the next mock is recorded beside its three-mock average after two labs and a targeted set."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Identify the section that has stayed lowest across three mocks"
                - "Decide whether the cause is product knowledge or reading"
                - "Complete two labs and a targeted question set for that section"
                - "Compare the section score on the next mock with its average"
            - name: Booking the exam and checking your ID name
              description: |-
                ## Purpose
                Your certification account name must match your identification exactly, and mismatches are one of the commonest reasons candidates are turned away. Booking through the official route, checking the name and the ID rules and noting the rescheduling cutoff turns the exam into a fixed date with no surprises.

                ## Milestones
                1. The certification account set up with your name exactly as it appears on your ID.
                2. Accepted ID types and rules for your delivery mode checked.
                3. The exam booked for a date that matches your study calendar.
                4. The rescheduling and cancellation cutoff written in your calendar.
              priority: high
              deadlineOffsetDays: 90
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A booking confirmation exists, the account name matches your ID exactly and the rescheduling cutoff is in your calendar."
                cadence: one-shot
                effort_hours_estimate: "1"
              tasks:
                - "Compare your account name with your ID character by character"
                - "Check the accepted ID list for your delivery mode"
                - "Book the exam on the date your calendar points to"
                - "Put the rescheduling cutoff in your calendar with a reminder"
            - name: Final fourteen days before the exam
              description: |-
                ## Purpose
                Last-fortnight cramming of new products rarely adds marks and often adds doubt. Two weeks spent on the wrong-answer log, the reading rules, the case study summaries, one last mock and steady sleep let what you already know show up on the day.

                ## Milestones
                1. A fourteen-day plan with no new topics after day seven.
                2. The wrong-answer log and reading rules reread twice.
                3. Case study summaries reread, if your exam uses them.
                4. A final mock sat no later than four days before the exam.
              priority: medium
              deadlineOffsetDays: 110
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A written fourteen-day plan was followed, with the final mock sat at least four days before the exam."
                cadence: one-shot
                effort_hours_estimate: "12"
              tasks:
                - "Write a fourteen-day plan that stops new topics at day seven"
                - "Reread the wrong-answer log and reading rules twice"
                - "Sit the final timed mock at least four days before the exam"
                - "Plan sleep and a light final evening before the exam"
            - name: Exam day check-in and logistics
              description: |-
                ## Purpose
                Online sittings fail on cluttered desks, second monitors and late check-ins, and test centre sittings fail on traffic and forgotten ID. A written exam day checklist, from room preparation the night before to the check-in window, protects the weeks of study behind it.

                ## Milestones
                1. A checklist for the night before and the morning of the exam.
                2. Room and desk prepared to the proctoring rules, or the route to the centre planned with spare time.
                3. ID, water and anything permitted laid out the night before.
                4. Check-in started at the earliest time allowed.
              priority: high
              deadlineOffsetDays: 120
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "The exam was sat after a completed night-before checklist, with check-in started at the earliest allowed time."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Write a night-before and morning checklist for exam day"
                - "Clear the desk and room to the proctoring rules the night before"
                - "Lay out your ID and permitted items before bed"
                - "Start check-in at the earliest time the booking allows"
            - name: Result, digital badge and profile updates
              description: |-
                ## Purpose
                Passing is worth more when people can see and verify it, and an on-screen result is not always the final one. Waiting for the official confirmation, then claiming the digital badge, adding it to your CV and profile and telling your manager or partner lead, finishes the job.

                ## Milestones
                1. Official result confirmation received and saved.
                2. The digital badge claimed and its verification link saved.
                3. CV, professional profile and employer skills record updated.
                4. The expiry date recorded in your credential list.
              priority: low
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "The badge verification link, updated CV and expiry date are all saved within two weeks of the official result."
                cadence: one-shot
                effort_hours_estimate: "1"
              tasks:
                - "Save the official result email and certificate"
                - "Claim the digital badge and copy its verification link"
                - "Add the certification to your CV and professional profile"
                - "Record the expiry date in your credential list"
            - name: Retake plan after a failed attempt
              description: |-
                ## Purpose
                Failing a professional exam is common, and your memory of the questions that felt hard is the most useful study material you will get. Writing it down the same day, then building a shorter, targeted plan around the weakest sections and the retake waiting period, usually gets you through the second time.

                ## Milestones
                1. Notes on difficult topics written on the day of the attempt, without recording actual questions.
                2. Any section feedback in the result compared with your mock pattern.
                3. The current retake waiting period checked on the policy page.
                4. A targeted plan of four to eight weeks with a new booking date.

                ## Notes
                Write down topics, not questions. Recording or sharing exam content breaches the candidate agreement.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A targeted retake plan exists with weak topics listed, the current retake wait checked and a new booking date set."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Write down every topic that felt hard on the day of the attempt"
                - "Compare any section feedback with your mock scores"
                - "Check the current retake waiting period on the policy page"
                - "Book the retake for the date your new plan supports"
            - name: Studying around on-call rotations
              description: |-
                ## Purpose
                SREs and platform engineers on call lose whole weeks to incidents and broken sleep. A plan that marks on-call weeks as light, review-only weeks and loads labs and mocks into off-call weeks keeps progress steady without fighting the rota.

                ## Milestones
                1. The next three months of the on-call rota marked in the study calendar.
                2. On-call weeks limited to flashcards and wrong-answer review.
                3. Labs and mocks scheduled only in off-call weeks.
                4. Real incidents noted where they illustrate an exam topic.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Three months of the study calendar show on-call weeks as review-only, with no mock or lab scheduled in them."
                cadence: rolling
              tasks:
                - "Mark the next three months of on-call weeks in the study calendar"
                - "Move labs and mocks out of on-call weeks"
                - "Plan the coming week's study by on-call status @recurring(weekly:mon)"
                - "Note any incident that illustrates an SRE exam topic"
            - name: Working parent study plan in short blocks
              description: |-
                ## Purpose
                Parents of young children rarely get a free two-hour evening, but often get three twenty-minute gaps. Splitting study into short blocks for flashcards and question sets, keeping one longer weekend block for labs and agreeing that block with your partner or family makes steady progress possible.

                ## Milestones
                1. A list of study activities that fit in twenty minutes.
                2. A weekly longer lab block agreed with the people at home.
                3. Study materials available on your phone for short gaps.
                4. A realistic target month set from the hours you actually have.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A weekly lab block is agreed at home and four weeks of short-block study are logged against the target month."
                cadence: rolling
              tasks:
                - "List study tasks that fit in twenty minutes"
                - "Agree a weekly longer lab block with your partner or family"
                - "Load flashcards and question sets onto your phone"
                - "Check the week's short blocks against your target @recurring(weekly:thu)"
            - name: Partner consultant certification targets
              description: |-
                ## Purpose
                Engineers at Google Cloud partner firms often need particular professional certifications so the firm keeps its partner tier or specialisations. Knowing which credentials your firm counts, when colleagues' certifications expire and how your exam fits client work turns certification into part of the job rather than an evening hobby.

                ## Milestones
                1. The certifications your firm's partner status relies on listed with your partner lead.
                2. Your exam matched to an open target and a client engagement.
                3. Study time agreed against your billable hours target.
                4. Your certification recorded in the firm's partner records after passing.
              priority: medium
              frontmatter:
                mode: service
                output_kind: deliverable
                success_criteria: "Your exam is matched to a named firm target, study hours are agreed in writing and the pass is recorded with the firm."
                cadence: phased
                effort_hours_estimate: "2"
              tasks:
                - "Ask your partner lead which certifications the firm needs this year"
                - "Match your exam to a target and a current client engagement"
                - "Agree study hours against your billable target"
                - "Review the firm's certification count with your partner lead @recurring(quarterly)"
            - name: Moving to Google Cloud from AWS or Azure
              description: |-
                ## Purpose
                Years on AWS or Azure give you most of the concepts, but Google Cloud differs in ways that trip experienced engineers up: global VPCs, projects as the unit of billing and IAM, and products with no direct twin. A service mapping and a list of the differences that change answers lets you study only what is new.

                ## Milestones
                1. A mapping of your familiar services to their Google Cloud counterparts.
                2. The differences that change design answers listed, such as global VPCs and the project model.
                3. Products with no direct counterpart studied in the documentation.
                4. Ten practice questions collected where your old cloud's habit led you astray.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A twenty-service mapping, a list of design-changing differences and ten annotated habit-trap questions are saved."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Map twenty services you use daily to their Google Cloud counterparts"
                - "List the platform differences that change a design answer"
                - "Study the products that have no counterpart on your old cloud"
                - "Collect questions where your old cloud's habit gave the wrong answer"
            - name: Analyst to Data Engineer exam route
              description: |-
                ## Purpose
                SQL analysts and BI developers often know BigQuery well but have never built a pipeline, handled a schema change or secured a dataset for other teams. A route that starts from your BigQuery strength and adds Pub/Sub, Dataflow, orchestration and data governance step by step makes the Data Engineer exam reachable.

                ## Milestones
                1. Your BigQuery strengths and gaps rated against the Data Engineer exam guide.
                2. One scheduled pipeline built and orchestrated with Cloud Composer or Workflows.
                3. Data governance tools tried, such as Dataplex and BigQuery policy tags.
                4. A short portfolio note written about the pipeline for your next role.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "An orchestrated pipeline runs on schedule, policy tags protect one dataset and a portfolio note describes the build."
                cadence: phased
                effort_hours_estimate: "15"
              tasks:
                - "Rate your BigQuery skills against the Data Engineer exam guide"
                - "Build a scheduled pipeline orchestrated with Composer or Workflows"
                - "Apply policy tags to sensitive columns in one dataset"
                - "Write a short portfolio note about the pipeline"
            - name: Sitting the exam in your second language
              description: |-
                ## Purpose
                Long scenario questions are harder when the exam language is your second language, and product names do not help. Checking which languages your exam is offered in, practising timed reading and building a glossary of the requirement words that decide answers removes much of the disadvantage.

                ## Milestones
                1. The languages offered for your exam checked on the official page.
                2. A glossary of deciding words, such as minimise, managed and compliant, in both languages.
                3. Timed practice in the exam language for at least four weeks.
                4. Any accommodation for non-native speakers checked and requested if offered.
              priority: low
              frontmatter:
                mode: building
                output_kind: knowledge
                success_criteria: "A bilingual glossary of deciding words exists and four weeks of timed practice in the exam language are logged."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Check which languages your exam is offered in"
                - "Build a glossary of requirement words in both languages"
                - "Do timed practice blocks in the exam language only"
                - "Ask certification support about language accommodations"
            - name: Team lead running a certification cohort
              description: |-
                ## Purpose
                Team leads asked to certify several engineers get better results from a cohort than from vouchers handed out one by one. A cohort with a shared calendar, weekly sessions, paired labs and one person tracking progress makes it far more likely the whole group passes within the quarter.

                ## Milestones
                1. A cohort of engineers with chosen exams and target months.
                2. A weekly cohort session in the calendar.
                3. Shared lab projects and a group budget set up.
                4. Each person's progress and booking date tracked in one place.
              priority: medium
              frontmatter:
                mode: service
                output_kind: deliverable
                success_criteria: "Every cohort member has a target month and booking date tracked in one table, with weekly sessions held for a quarter."
                cadence: phased
                effort_hours_estimate: "15"
              tasks:
                - "Agree exams and target months with each engineer"
                - "Set up shared lab projects with a group budget"
                - "Run the weekly cohort session around one case study @recurring(weekly:thu)"
                - "Track progress and booking dates in one shared table"
            - name: Second professional exam that shares the most ground
              description: |-
                ## Purpose
                Straight after a pass the material is fresh, and some pairs overlap heavily, such as Cloud Architect with Network or Security Engineer, or Data Engineer with Machine Learning Engineer. Choosing the next exam by overlap and booking it within a few months turns one study effort into two credentials.

                ## Milestones
                1. Exam guides for two candidate next exams compared with the one you passed.
                2. The overlap estimated and the new material listed.
                3. A shorter study calendar written for the second exam.
                4. The second exam booked or deliberately deferred with a reason.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A dated note names the second exam, lists its new sections and either books it or records why it is deferred."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Compare two candidate exam guides with the exam you passed"
                - "List the sections that are new to you"
                - "Write a shorter study calendar for the second exam"
                - "Book the second exam or record why you are waiting"
            - name: Machine Learning Engineer exam with Vertex AI labs
              description: |-
                ## Purpose
                Machine Learning Engineer questions are less about model theory than about running ML on the platform: choosing between BigQuery ML, AutoML and custom training, Vertex AI pipelines, feature management, serving, monitoring for drift and responsible AI. One end-to-end pipeline you have built and monitored covers most of the operational judgement the exam expects.

                ## Milestones
                1. A model trained with BigQuery ML and the same task with Vertex AI custom training, compared.
                2. A Vertex AI pipeline that trains, evaluates and registers a model.
                3. A model deployed to an endpoint with monitoring for skew and drift.
                4. Any generative AI topics in the current exam guide studied.

                ## Notes
                Endpoints bill while deployed. Undeploy them as soon as the lab is done.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A Vertex AI pipeline has trained, registered and deployed a monitored model, compared in writing with a BigQuery ML baseline."
                cadence: phased
                effort_hours_estimate: "20"
              tasks:
                - "Train a baseline model with BigQuery ML on a public dataset"
                - "Build a Vertex AI pipeline that trains, evaluates and registers a model"
                - "Deploy the model and turn on skew and drift monitoring"
                - "Undeploy the endpoint and note what the lab cost"
            - name: Renewing a professional credential before expiry
              description: |-
                ## Purpose
                Certifications on Google Cloud expire, and for some professional exams a shorter renewal exam is offered in a window before the expiry date. Knowing your expiry, the renewal option and what has changed in the exam guide since you passed lets you renew with a few weeks' refresh instead of starting over.

                ## Milestones
                1. Expiry date and renewal eligibility window recorded.
                2. The current renewal option for your credential checked.
                3. Changes to the exam guide since your pass listed.
                4. Renewal completed before the expiry date.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "The credential shows a new expiry date, renewed before the old one lapsed."
                cadence: cyclic
              tasks:
                - "Record your expiry date and renewal eligibility window"
                - "Check whether a renewal exam exists for your credential"
                - "List the exam guide changes since you passed"
                - "Review time left before expiry and plan the refresh @recurring(yearly)"
            - name: Reference architectures written up from your labs
              description: |-
                ## Purpose
                Labs leave behind real designs: a Shared VPC layout, a streaming pipeline, an SLO setup, a service perimeter. Writing two or three up as short reference architectures, with a diagram, requirements, trade-offs and observed cost, gives you interview material and makes the reasoning permanent.

                ## Milestones
                1. Two or three lab designs chosen for write-up.
                2. Each written with a diagram, requirements, decisions and rejected options.
                3. Costs and limits noted from what you actually observed.
                4. The write-ups published or kept in a portfolio.

                ## Notes
                Start from the **Portfolio piece** template. Leave out anything from client or employer work.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "At least two reference architecture write-ups exist, each with a diagram, requirements and rejected options."
                cadence: rolling
              tasks:
                - "Choose two lab designs worth writing up"
                - "Draw a diagram for the first design"
                - "Write up one design with requirements and trade-offs @recurring(monthly:15)"
                - "Ask the agent to review a write-up for gaps in the trade-offs"
            - name: Beta exams and subject matter expert work
              description: |-
                ## Purpose
                Experienced certified engineers can sit beta versions of new or revised exams and, at times, apply to help Google review or write exam content. Doing so keeps you close to where the exam is heading and adds a credible line to a senior profile.

                ## Milestones
                1. Announcements of beta exams and subject matter expert programmes followed.
                2. Eligibility for one opportunity checked.
                3. A beta exam sat or an application submitted.
                4. Any confidentiality agreement read and kept on file.

                ## Notes
                Content you see in a beta or a review is confidential. Never share it, even with your cohort.
              priority: low
              frontmatter:
                mode: service
                output_kind: event-completion
                success_criteria: "One beta exam has been sat or one expert programme application submitted, with its agreement on file."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Follow the certification announcements for beta exam notices"
                - "Check eligibility for the next beta or review opportunity"
                - "Sit a beta exam or submit an application"
                - "File the confidentiality agreement with your credential records"
---

# Google Cloud Professional Certifications

This area is for engineers sitting a Google Cloud professional exam such as Cloud Architect, Data Engineer, Cloud DevOps Engineer, Network or Security Engineer, or Machine Learning Engineer, where the questions are long scenarios about design trade-offs rather than product definitions. It starts with foundations (choosing the exam, the current exam guide, a diagnostic run, a skills matrix, a dated calendar, a practice organisation with a budget and the Cloud Architect case studies), then the weekly study machinery, the design knowledge the exams lean on (hierarchy and IAM, networking, compute, databases, pipelines, SRE, release pipelines, security and recovery objectives), the decisions about practice sources, reading method, pacing, delivery mode and readiness, booking and exam day, plans for on-call engineers, working parents, partner consultants, cloud switchers, analysts, second-language candidates and team leads, and specialist work such as a second exam, Machine Learning Engineer, renewal and beta exams.

The rhythm is a weekly scenario question block, a weekly wrong-answer review, a weekly lab, a weekly partner session and a weekly teardown, short daily decision flashcards, a monthly timed mock, a monthly reading slot, a monthly release notes scan and a monthly score review, with quarterly checks on the exam guide and a yearly look at your expiry date. The Skills matrix, Metrics log, Reading queue, Purchase decision and Portfolio piece templates pair with it. Installing adds all 50 projects as active, so archive the ones that are not for you yet.
