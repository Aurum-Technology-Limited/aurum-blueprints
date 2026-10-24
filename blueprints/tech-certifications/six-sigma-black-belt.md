---
id: tech-certifications.six-sigma-black-belt
name: Six Sigma Black Belt
description: "A route to a Six Sigma Black Belt: the right certifying body, a sponsored project pipeline, advanced statistics and designed experiments, green belt coaching, timed practice exams and the project review."
category: personal
version: 1.0.0
tags: [tech-certifications, six-sigma-black-belt, engineer, manager, six-sigma, dmaic, design-of-experiments, statistics]
author: Aurum Technology
starter_structure:
  templates:
    - purchase-decision
    - development-plan
    - metrics-log
    - one-on-one
    - risk-register
    - onboarding-30-60-90
  pillars:
    - name: Tech & Engineering Certifications
      emoji: "🏅"
      description: "Technical credentials and the exams behind them: FE and PE licensing, Chartered Engineer and Trinidad and Tobago engineering registration, PMP, PRINCE2 and Scrum, AWS, Azure and Google Cloud by level, Kubernetes and Terraform, networking and security certifications, Six Sigma belts, and coding, system design and machine-learning interviews."
      pillarFrontmatter:
        review_cadence: monthly
      areas:
        - name: Six Sigma Black Belt
          description: "Working toward a Six Sigma Black Belt: advanced statistics, design of experiments, leading improvement projects, coaching green belts and the exam or project review."
          projects:
            - name: Choosing your Black Belt certifying body
              description: |-
                ## Purpose
                Black Belt credentials range from an exam-only certificate to ones that demand signed, completed projects, and employers and recruiters weigh them very differently. Comparing the main options (a professional quality society such as ASQ, an independent examiner such as IASSC, your employer's internal programme, or a university course) on project requirements, exam style, cost and recognition in your industry means you commit study time to the credential that will actually count.

                ## Milestones
                1. Three or four certifying routes listed with their current requirements copied from each body's own website.
                2. Each route scored on project evidence required, exam format, total cost and recognition in your sector.
                3. Two people who hire or promote belts in your industry asked which credential they value.
                4. One route chosen, with the reason written in two sentences.

                ## Notes
                Internal company belts can carry real weight inside that company and very little outside it. If you expect to move employers, check whether your programme is also aligned to an external body.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A written decision names one certifying route, scored against at least two alternatives on the same four criteria."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "List the Black Belt routes open to you, including any employer programme"
                - "Copy each body's current project and exam requirements into one table"
                - "Ask two hiring managers in your sector which credential they rate"
                - "Record the chosen route and the reason in your plan"
            - name: Reading the current Black Belt body of knowledge
              description: |-
                ## Purpose
                Every Black Belt exam is written against a published body of knowledge, and the bodies revise theirs every few years, adding topics such as lean flow or organisational change and dropping others. Working from the live version of your chosen body's document, rather than an old textbook's contents page, keeps your study hours pointed at what is examined now.

                ## Milestones
                1. The current body of knowledge downloaded from your certifying body, with its effective date noted.
                2. Exam format, length, scoring and reference rules copied from the official page and dated.
                3. Every subtopic turned into a checklist line with a confidence rating from one to three.
                4. Gaps between the body of knowledge and your study materials flagged.

                ## Notes
                Do not trust question counts, durations, pass marks or fees quoted in forums. Take every number from the body's own pages and write the date beside it.
              priority: high
              deadlineOffsetDays: 14
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A dated checklist of every body of knowledge subtopic with a confidence rating, plus the official exam rules copied from the certifying body."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Download the current Black Belt body of knowledge from your certifying body"
                - "Copy the exam format and reference material rules into your plan with today's date"
                - "Rate your confidence on every subtopic from one to three"
                - "Check the certifying body's site for a revised body of knowledge @recurring(yearly)"
            - name: Project evidence and eligibility check
              description: |-
                ## Purpose
                Some bodies certify a Black Belt only after one or two completed projects with a signed statement from a sponsor or champion, and some also ask for years of work experience in the body of knowledge; others need nothing beyond the exam. Checking your own history against the exact rules now tells you whether past projects can count, what proof they need, and whether the exam or the project is your real critical path.

                ## Milestones
                1. The current eligibility and project evidence rules for your route read and dated.
                2. Every past improvement project listed with dates, your role, sponsor and measured result.
                3. Each past project marked as usable, usable with more evidence, or not usable.
                4. A verdict written: eligible now, eligible after one more project, or eligible after two.
              priority: high
              deadlineOffsetDays: 14
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A dated eligibility verdict lists which past projects qualify and how many new projects are still needed."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Read the eligibility and project affidavit rules on your certifying body's site"
                - "List past improvement projects with your role, sponsor and measured result"
                - "Ask former sponsors whether they would still sign for those projects"
                - "Write the eligibility verdict and the number of projects still needed"
            - name: Statistics baseline diagnostic
              description: |-
                ## Purpose
                Most Green Belts arrive at Black Belt study comfortable with a t-test and a control chart and shaky on everything past them: power, multiple regression, interaction effects, non-normal capability. A timed diagnostic across the advanced topics before studying shows which areas need weeks and which need an evening, so the plan is built on evidence rather than guesswork.

                ## Milestones
                1. A diagnostic of at least 50 questions sat under timed conditions.
                2. Scores broken down by body of knowledge section.
                3. The three weakest sections named, with a sample wrong answer for each.
                4. The baseline score entered as the first row of your practice score log.
              priority: high
              deadlineOffsetDays: 10
              frontmatter:
                mode: building
                output_kind: knowledge
                success_criteria: "A timed diagnostic score by section is recorded, with the three weakest sections named in the study plan."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Find a sample Black Belt question set mapped to your body of knowledge"
                - "Sit 50 questions in one timed session without notes"
                - "Score the set by body of knowledge section"
                - "Name your three weakest sections in the study plan"
            - name: Choosing statistical software for Black Belt work
              description: |-
                ## Purpose
                Designed experiments, gauge studies and multiple regression are done in software, and the package you pick decides how fast you can analyse a live project and whether your colleagues can open your files. Comparing a commercial package such as Minitab or JMP with free options such as R or Python against cost, licence access at work and what your certifying body's materials use avoids learning one tool and switching halfway.

                ## Milestones
                1. Two or three packages shortlisted with licence cost and what your employer already owns.
                2. The same small factorial design analysed in each to compare effort.
                3. One package chosen, with a licence or installation in place.
                4. A folder of template project files set up in the chosen package.

                ## Notes
                Start from the **Purchase decision** template. Exam questions are answered by hand or with a calculator, so software skill does not replace knowing the formulas.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "One statistical package is installed and licensed, chosen against at least one alternative on cost, access and fit."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Ask IT which statistical packages the company already licenses"
                - "Shortlist two or three packages with their annual cost"
                - "Analyse the same two-level factorial example in each package"
                - "Install the chosen package and create a project template folder"
            - name: Sponsor and champion agreement
              description: |-
                ## Purpose
                Lost sponsorship sinks more Black Belt projects than bad statistics do: the sponsor moves role, the budget is cut, or the team is pulled back to firefighting. Agreeing in writing who sponsors your projects, how much of your week they release, what data access you get and who signs off the benefits protects the certification and the work at the same time.

                ## Milestones
                1. A named sponsor and champion for your Black Belt projects.
                2. Protected hours per week agreed and written down.
                3. Data access, finance contact and team members confirmed.
                4. A one-page agreement signed or acknowledged by email by the sponsor.

                ## Notes
                Ask for a percentage of your week, not "time when you can". Half a day a week is rarely enough to lead a Black Belt project to closure inside a year.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A one-page sponsor agreement naming hours released, data access and the benefits sign-off owner is acknowledged by the sponsor."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Draft a one-page sponsor agreement with hours, data access and sign-off owner"
                - "Book thirty minutes with your proposed sponsor to go through it"
                - "Confirm a finance contact who will validate project benefits"
                - "File the acknowledged agreement in your evidence folder"
            - name: Dated Black Belt study and project plan
              description: |-
                ## Purpose
                Black Belt candidates run two clocks at once: exam study measured in weeks and live projects measured in months, and the projects nearly always take longer. A single plan that works back from a target exam window and a project closure date, with study blocks around project tollgates, stops one quietly swallowing the other.

                ## Milestones
                1. A target exam window and a target project closure date written at the top of the plan.
                2. Study weeks allocated to each body of knowledge section, weakest first.
                3. Project tollgates for Define, Measure, Analyse, Improve and Control placed on the same calendar.
                4. Two buffer weeks built in before the exam.

                ## Notes
                Start from the **Development plan** template.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "One dated plan shows study weeks by section and project tollgates on the same calendar, with an exam window and closure date."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Pick a target exam window and a project closure date"
                - "Allocate study weeks to each section, weakest sections first"
                - "Place your project tollgates on the same calendar"
                - "Re-baseline the plan against actual progress @recurring(monthly:3)"
            - name: Black Belt reference binder and formula sheet
              description: |-
                ## Purpose
                Whether your exam allows references or not, a tidy set of formulas, decision trees for test selection and worked examples is what you reach for on live projects for years afterwards. Building it as you study, in your own handwriting or layout, also fixes the material far better than highlighting a textbook.

                ## Milestones
                1. The exam's reference material rules confirmed from the certifying body.
                2. A formula sheet covering capability, sample size, regression and design of experiments.
                3. A one-page hypothesis test selection flowchart drawn by you.
                4. Tabs or an index that let you find any formula in under thirty seconds.

                ## Notes
                If references are allowed, practise with exactly the binder you will take in. A binder that has never been used under time pressure slows you down.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A tabbed reference binder with a formula sheet and test selection flowchart exists and has been used in at least one timed practice exam."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Confirm what reference material your exam allows"
                - "Start a formula sheet with the capability and sample size formulas"
                - "Draw your own hypothesis test selection flowchart"
                - "Tab the binder so each body of knowledge section is one flick away"
            - name: Project candidate pipeline with financial screening
              description: |-
                ## Purpose
                Your choice of project decides whether the certification is easy or miserable: too small and it will not pass review, too big and it will not close before the exam result expires or the sponsor leaves. Keeping a short pipeline of candidate problems, each with a baseline, a rough cost of poor quality and a data check, lets you choose well now and have the second project ready later.

                ## Milestones
                1. At least six candidate problems listed with process owner and a one-line problem statement.
                2. A rough annual cost of poor quality estimated for each with your finance contact.
                3. Each candidate checked for available baseline data.
                4. Candidates ranked on benefit, data, scope and sponsor support.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A ranked pipeline of at least six candidate projects, each with an estimated cost of poor quality and a data availability check."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Ask three process owners for their most costly recurring problem"
                - "Estimate the annual cost of poor quality for each with finance"
                - "Check that baseline data exists for every candidate"
                - "Add new candidates and re-rank the pipeline @recurring(monthly:15)"
            - name: Twice-weekly statistics study sessions
              description: |-
                ## Purpose
                Advanced statistics fades fast without use, and a single long weekend session tends to be cancelled when a project gets busy. Two fixed sessions a week, each working one topic from your weakest section with problems done by hand, keep the material moving even in tollgate weeks.

                ## Milestones
                1. Two 90-minute sessions a week fixed in the calendar.
                2. Each session logged with the topic and the problems attempted.
                3. Eight consecutive weeks with no more than two missed sessions.
                4. Every body of knowledge section studied at least once.

                ## Notes
                Work problems by hand first and check them in software afterwards. The exam will not let you lean on the software.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A study log shows two sessions a week for eight consecutive weeks with no more than two missed."
                cadence: rolling
              tasks:
                - "Block two 90-minute study slots in your calendar"
                - "Choose the topic for each session from your weakest section"
                - "Hold a 90-minute statistics study session @recurring(weekly:tue,sat)"
                - "Note topic and problems attempted in your study log"
            - name: Monthly timed practice exam and score log
              description: |-
                ## Purpose
                Black Belt exams are long and mostly calculation-based, so pacing matters as much as knowledge. A monthly timed mock, scored by section and logged, shows whether the plan is working and gives you a clear readiness signal before booking a seat.

                ## Milestones
                1. A score log with date, total score, score by section and minutes per question.
                2. At least three timed practice exams completed under exam conditions.
                3. A trend line by section visible across the mocks.
                4. A readiness threshold agreed with yourself before you book.

                ## Notes
                Start from the **Metrics log** template.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A score log holds at least three timed practice exams scored by section, with a written readiness threshold."
                cadence: rolling
              tasks:
                - "Create a score log with columns for each body of knowledge section"
                - "Write down the score you need to see twice before booking"
                - "Sit a full timed practice exam and log the section scores @recurring(monthly:12)"
                - "Move study time toward the lowest-scoring section after each mock"
            - name: Monthly project tollgate review
              description: |-
                ## Purpose
                Projects drift when nobody asks whether the current phase is really finished: Measure runs on because the data is messy, Improve starts before the root cause is proven. A monthly tollgate with your sponsor against a short checklist for each DMAIC phase keeps the project honest and leaves a signed trail that project reviewers look for.

                ## Milestones
                1. A one-page exit checklist for each DMAIC phase.
                2. A standing monthly slot with the sponsor in the calendar.
                3. Every phase exit recorded with date, evidence and sponsor decision.
                4. Actions from each tollgate tracked to completion.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Each completed DMAIC phase has a dated tollgate record with the sponsor's decision and evidence attached."
                cadence: rolling
              tasks:
                - "Write a one-page exit checklist for each DMAIC phase"
                - "Book a standing monthly tollgate slot with your sponsor"
                - "Run the tollgate review and record the sponsor's decision @recurring(monthly:20)"
                - "Chase open tollgate actions before the next review"
            - name: Control chart watch on closed projects
              description: |-
                ## Purpose
                Gains that are not watched slide back within months, and a project that regresses after closure can undo the benefit claim and your credibility. A short monthly look at the control charts for every closed project, with reaction rules agreed with each process owner, catches drift while it is still cheap to fix.

                ## Milestones
                1. A list of every closed project with its key metric and chart location.
                2. Reaction rules for out-of-control signals agreed with each process owner.
                3. Monthly checks recorded with any signals and the action taken.
                4. No closed project left more than two months unchecked.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every closed project's control chart has a dated monthly check, with any special cause signal and the response logged."
                cadence: rolling
              tasks:
                - "List closed projects with their key metric and chart location"
                - "Agree reaction rules for signals with each process owner"
                - "Review each closed project's control chart and log any signals @recurring(monthly:8)"
                - "Raise a corrective action with the process owner for any sustained shift"
            - name: Quarterly benefits validation with finance
              description: |-
                ## Purpose
                Reviewers and executives trust savings figures only when finance has checked them, and claimed savings that are really cost avoidance or shifted cost quietly damage a programme. Agreeing the calculation method up front and validating realised benefits with finance each quarter gives you numbers you can put on a certification affidavit and a CV.

                ## Milestones
                1. A benefit calculation method agreed with finance for each project.
                2. Hard savings, cost avoidance and non-financial benefits recorded separately.
                3. Quarterly realised benefits signed off by the finance contact.
                4. A running benefits total kept in your evidence file.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Each active or closed project has quarterly benefit figures signed off by finance, split into hard savings and cost avoidance."
                cadence: rolling
              tasks:
                - "Agree with finance how each project's benefit will be calculated"
                - "Split benefits into hard savings, cost avoidance and non-financial gains"
                - "Send realised benefits to finance for sign-off @recurring(quarterly)"
                - "Update the running benefits total in your evidence file"
            - name: Weekly green belt coaching slot
              description: |-
                ## Purpose
                Coaching green belts is part of the Black Belt role and part of many bodies of knowledge, and it is where you find out whether you can explain a method rather than just run it. A short weekly slot with each green belt, working from their project's current phase, builds their projects and your own fluency at the same time.

                ## Milestones
                1. Each green belt you coach has a standing weekly or fortnightly slot.
                2. Notes kept per green belt on phase, blockers and agreed actions.
                3. Every coached project past its next tollgate within three months.
                4. Feedback from each green belt gathered once a quarter.

                ## Notes
                Start from the **1:1** template. Ask them to bring data and a question, not a status update.
              priority: medium
              frontmatter:
                mode: service
                output_kind: habit
                success_criteria: "Coaching notes show regular sessions with each green belt and every coached project passing its next tollgate within three months."
                cadence: rolling
              tasks:
                - "List the green belts you coach and their project phase"
                - "Set up a coaching note for each green belt"
                - "Hold green belt coaching sessions from the current phase @recurring(weekly:thu)"
                - "Ask each green belt what would make coaching more useful"
            - name: Project storyboard and evidence file
              description: |-
                ## Purpose
                Project reviews and affidavits ask for proof: the charter, baseline data, analysis outputs, the pilot, the control plan and the sponsor's sign-off. Updating a single storyboard and evidence folder each month, while the work is fresh, saves weeks of reconstruction when the review comes.

                ## Milestones
                1. One folder per project with a subfolder for each DMAIC phase.
                2. A storyboard of no more than fifteen slides kept current.
                3. Key analysis outputs saved with the data and settings used.
                4. Sponsor sign-offs filed against each phase.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: artifact
                success_criteria: "Each project has a phase-by-phase evidence folder and a storyboard updated within the last month."
                cadence: rolling
              tasks:
                - "Create a project folder with one subfolder for each DMAIC phase"
                - "Start a storyboard with the charter and baseline slides"
                - "Save analysis outputs together with their data and settings"
                - "Update the storyboard and file new evidence @recurring(monthly:26)"
            - name: Wrong-answer review notebook
              description: |-
                ## Purpose
                Repeating practice questions you already get right feels productive and moves the score very little. Keeping every wrong answer with the reason it was wrong (wrong test chosen, formula slip, misread question) and reviewing the notebook weekly is where most of the score gain between mocks actually comes from.

                ## Milestones
                1. A notebook or sheet recording each wrong answer, topic and reason.
                2. Reasons grouped into knowledge gaps, method slips and misreads.
                3. Each wrong answer reworked correctly within a week.
                4. The most common error type reduced across three mocks.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A wrong-answer log with reasons is reviewed weekly, and the most common error type falls across three consecutive mocks."
                cadence: rolling
              tasks:
                - "Set up a wrong-answer log with topic and reason columns"
                - "Copy in the wrong answers from your baseline diagnostic"
                - "Rework the week's wrong answers without looking at the solution @recurring(weekly:sun)"
                - "Count error types after each mock to see which is shrinking"
            - name: Lessons learned and replication register
              description: |-
                ## Purpose
                Solutions proven on one line, branch or ward often apply to five others, and that replication is where much of a Black Belt's value to an organisation sits. A register of closed project lessons and replication candidates, reviewed quarterly with process owners, turns one project's benefit into several without starting from scratch.

                ## Milestones
                1. A register listing each closed project, its solution and where else it might apply.
                2. Replication candidates confirmed with the relevant process owners.
                3. At least one replication started from the register.
                4. Lessons about method and stakeholders recorded alongside technical lessons.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A lessons and replication register is reviewed each quarter and has produced at least one replication project."
                cadence: rolling
              tasks:
                - "List closed projects with their solution in one register"
                - "Name two other processes where each solution might apply"
                - "Review the register with process owners for replication candidates @recurring(quarterly)"
                - "Write one method lesson for every project you close"
            - name: Probability distributions and sampling refresh
              description: |-
                ## Purpose
                Almost every advanced tool rests on knowing which distribution applies: binomial and Poisson for defects, exponential and Weibull for time to failure, normal and its relatives for sampling. Refreshing these with worked problems before tackling capability and hypothesis testing prevents a cascade of confusion later.

                ## Milestones
                1. Binomial, Poisson, normal, exponential and Weibull distributions explained in your own notes with an example each.
                2. Central limit theorem and standard error worked through with a simulation.
                3. Sampling plans and sample size for estimating a mean and a proportion calculated by hand.
                4. Twenty practice questions on distributions scored at 80 percent or better.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Twenty practice questions on distributions and sampling are answered with at least 80 percent correct."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "Write one real process example for each of the five main distributions"
                - "Simulate sample means in software to see the central limit theorem"
                - "Calculate sample sizes for a mean and a proportion by hand"
                - "Score twenty distribution questions and log the result"
            - name: Measurement system analysis and gauge R&R
              description: |-
                ## Purpose
                If the measurement system cannot tell good parts or transactions from bad, every later analysis is built on noise. Running crossed and nested gauge studies for continuous data and attribute agreement analysis for pass and fail judgements is a core Black Belt skill and one project reviewers check first.

                ## Milestones
                1. Bias, linearity, stability, repeatability and reproducibility defined in your notes.
                2. A crossed gauge R&R study run and interpreted on real or sample data.
                3. An attribute agreement analysis completed for an inspection or judgement step.
                4. Acceptance guidelines for a measurement system written with their source.

                ## Notes
                Choose parts that span the real process range. A study using only near-identical parts makes a good gauge look poor.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "One crossed gauge R&R and one attribute agreement analysis are completed and interpreted with written conclusions."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "Pick a measurement step on your project to study"
                - "Select ten parts that span the full process range"
                - "Run a crossed gauge R&R with two or three operators"
                - "Run an attribute agreement analysis for one judgement step"
            - name: Process capability with non-normal data
              description: |-
                ## Purpose
                Real process data is often skewed, bounded at zero or a mix of streams, and a capability index calculated as if it were normal can mislead a whole business case. Learning to test for normality, choose a fitting distribution or transformation, and report both short and long term capability honestly is what separates a Black Belt report from a Green Belt one.

                ## Milestones
                1. Cp, Cpk, Pp and Ppk calculated by hand and in software for a normal data set.
                2. A non-normal data set handled by distribution fit and by transformation, with the results compared.
                3. Capability for discrete data expressed as defects per million opportunities and process sigma.
                4. A one-page guide on which capability measure to report when.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Capability is reported for one normal, one non-normal and one discrete data set, with a written guide to choosing the measure."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Calculate Cp and Cpk by hand for a small sample data set"
                - "Test a skewed data set for normality and fit an alternative distribution"
                - "Convert a defect count into defects per million opportunities"
                - "Write a one-page guide to choosing a capability measure"
            - name: Hypothesis test selection and statistical power
              description: |-
                ## Purpose
                Exam questions and live projects both punish picking the wrong test, and an underpowered study can declare no difference when one is costing the business money every week. Building a reliable decision route through tests for means, variances, proportions and counts, and learning to size a study for the power you need, removes two of the most common Black Belt errors.

                ## Milestones
                1. Parametric and non-parametric tests mapped to data type and question on one page.
                2. Type I and type II error, power and effect size explained with a numerical example.
                3. Sample size calculated for a two-sample comparison at a stated power.
                4. Thirty mixed test selection questions answered at 80 percent or better.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A one-page test selection map exists and thirty mixed test selection questions are answered with at least 80 percent correct."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "Map each common test to its data type and question on one page"
                - "Work a power calculation for a two-sample t-test by hand"
                - "Run a non-parametric test alongside its parametric equivalent"
                - "Score thirty mixed test selection questions"
            - name: Multiple regression and logistic regression
              description: |-
                ## Purpose
                When several inputs move together, simple correlation hides what actually drives the output. Learning multiple regression with residual checks, multicollinearity diagnostics and model reduction, plus logistic regression for pass and fail outcomes, lets you model a real process from historical data before spending money on experiments.

                ## Milestones
                1. A simple regression fitted and its residuals checked against the assumptions.
                2. A multiple regression built and reduced, with variance inflation factors checked.
                3. A binary logistic regression fitted to a pass and fail outcome and interpreted.
                4. A written caution on the difference between correlation in historical data and cause.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "One multiple regression and one logistic regression are fitted, checked and interpreted in writing on real or sample data."
                cadence: phased
                effort_hours_estimate: "12"
              tasks:
                - "Fit a simple regression and plot the residuals"
                - "Build a multiple regression and check variance inflation factors"
                - "Fit a logistic regression to a pass and fail outcome"
                - "Write a paragraph on what the historical model cannot prove"
            - name: Full and fractional factorial experiments
              description: |-
                ## Purpose
                Designed experiments are the signature Black Belt tool: changing several factors at once in a planned pattern finds main effects and interactions that one-factor-at-a-time testing never sees. Planning, running and analysing a small factorial, including randomisation, replication, centre points and the resolution of a fractional design, turns textbook knowledge into something you can run on a real line or service process.

                ## Milestones
                1. A two-level full factorial designed, run and analysed, even on a desk-top process such as a paper helicopter or catapult.
                2. Main effects, interactions and residuals interpreted in writing.
                3. A fractional factorial chosen with its resolution and confounding pattern explained.
                4. Blocking and centre points used correctly in at least one design.

                ## Notes
                A practice experiment on a cheap physical toy teaches more about randomisation and measurement error than any number of software examples.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "One full factorial and one fractional factorial are designed, run and analysed, with confounding explained in writing."
                cadence: phased
                effort_hours_estimate: "14"
              tasks:
                - "Choose a cheap practice process such as a paper helicopter"
                - "Design a two-level full factorial with three factors and replicates"
                - "Run the trials in randomised order and record the results"
                - "Analyse effects and interactions and write the conclusion"
                - "Design a fractional version and explain what it confounds"
            - name: Response surface methods and optimisation
              description: |-
                ## Purpose
                Once the vital few factors are known, the next question is where to set them, and that often sits on a curve that a two-level design cannot see. Learning central composite and Box-Behnken designs, steepest ascent and desirability functions for several responses at once gives you the tools to find a best operating window rather than just a better one.

                ## Milestones
                1. Steepest ascent explained and worked from a first-order model.
                2. A central composite design and a Box-Behnken design compared on run count and region covered.
                3. A response surface fitted and its contour plot interpreted.
                4. A two-response trade-off solved with a desirability function.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A response surface design is analysed with a contour plot and a two-response optimum found using desirability."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "Work a steepest ascent example from a first-order model"
                - "Compare central composite and Box-Behnken designs for three factors"
                - "Fit a response surface and read its contour plot"
                - "Find a joint optimum for two responses with a desirability function"
            - name: Advanced statistical process control
              description: |-
                ## Purpose
                Basic Shewhart charts are slow to spot small sustained shifts and awkward for short production runs or autocorrelated data. Learning EWMA and CUSUM charts, short-run charts and when to subgroup lets you design a control plan that catches the drift your project fixed, rather than one that alarms constantly or never.

                ## Milestones
                1. Rational subgrouping explained with an example from your own process.
                2. EWMA and CUSUM charts built and compared with an individuals chart on the same data.
                3. A short-run or standardised chart set up for a low-volume process.
                4. Autocorrelation checked in one data set and its effect on the chart described.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "EWMA, CUSUM and individuals charts are compared on one data set, with a written note on which detects the shift first."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Describe a rational subgroup for one process you know"
                - "Build EWMA and CUSUM charts on data with a small shift"
                - "Compare how quickly each chart flags the shift"
                - "Set up a short-run chart for a low-volume product or service"
            - name: Lean flow tools at Black Belt depth
              description: |-
                ## Purpose
                Many Black Belt bodies of knowledge now examine lean alongside statistics, and many real problems are about waiting and flow rather than variation. Working through value stream mapping with timings, takt time, line balancing, pull systems and setup reduction means you can pick the right toolkit for the problem in front of you.

                ## Milestones
                1. A current state value stream map with process and waiting times for a real process.
                2. Takt time calculated and a line or workflow balanced against it.
                3. A setup or changeover reduction worked through on one step.
                4. A future state map with the three biggest flow changes named.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A timed current and future state value stream map exist for one real process, with takt time calculated."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "Walk one process end to end and time each step and wait"
                - "Draw the current state value stream map with lead time"
                - "Calculate takt time and compare it with each step's cycle time"
                - "Draw a future state map with the three biggest flow changes"
            - name: Change leadership and stakeholder analysis
              description: |-
                ## Purpose
                Technically sound solutions die when the people who run the process were not part of finding them. Learning stakeholder mapping, resistance analysis, force field analysis and simple team facilitation methods, and using them on your own project, is the part of the Black Belt that most separates leaders from analysts.

                ## Milestones
                1. A stakeholder map for your current project with influence and support ratings.
                2. Likely sources of resistance named with a planned response for each.
                3. A force field analysis run with the project team.
                4. One difficult meeting planned, held and reflected on in writing.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A stakeholder map and resistance plan exist for the live project, with a written reflection on one difficult meeting."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Map your project stakeholders by influence and support"
                - "Name the likely resistance from each key stakeholder"
                - "Run a force field analysis with the project team"
                - "Write a short reflection after one difficult stakeholder meeting"
            - name: Charter for your first Black Belt project
              description: |-
                ## Purpose
                Tight charters are the best single predictor of a project that closes on time: one measurable problem, a baseline, a goal, a clear scope and a team with the authority to change the process. Writing and agreeing it before collecting a single new data point stops the scope creep that ends most failed projects.

                ## Milestones
                1. A problem statement with metric, baseline, gap and cost, free of any assumed cause.
                2. A goal with a target value and date agreed with the sponsor.
                3. In and out of scope boundaries written, with a SIPOC of the process.
                4. Team members, roles and time commitments confirmed.
                5. The charter signed off at the Define tollgate.

                ## Notes
                Start from the **Risk register** template for the risks section. If the problem statement contains the word "because", it has a cause in it and needs rewriting.
              priority: high
              deadlineOffsetDays: 45
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "A charter with baseline, goal, scope, SIPOC, team and risks is signed off by the sponsor at the Define tollgate."
                cadence: one-shot
                effort_hours_estimate: "10"
              tasks:
                - "Pick the top-ranked candidate from your project pipeline"
                - "Write a problem statement with metric, baseline, gap and cost"
                - "Draw a SIPOC with the process owner"
                - "List project risks and owners in a risk register"
                - "Present the charter to your sponsor for Define sign-off"
            - name: Measure phase data collection plan
              description: |-
                ## Purpose
                Measure is the phase where Black Belt projects most often stall, usually because data was pulled before anyone agreed on operational definitions or checked the measurement system. A written data collection plan, a measurement system check and a clean baseline turn a vague problem into one you can analyse with confidence.

                ## Milestones
                1. Operational definitions written for the output and every candidate input.
                2. A data collection plan naming source, sample size, frequency and owner.
                3. The measurement system checked and accepted before baseline data is used.
                4. A baseline with capability or sigma level presented at the Measure tollgate.
              priority: medium
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "A Measure tollgate record includes operational definitions, an accepted measurement system study and a baseline capability figure."
                cadence: phased
                effort_hours_estimate: "20"
              tasks:
                - "Write operational definitions for the output and key inputs"
                - "Draft a data collection plan with source, size and owner"
                - "Run a measurement system check before using the data"
                - "Pull the week's data extract and check it for gaps @recurring(weekly:fri)"
            - name: Proving root cause with a designed experiment
              description: |-
                ## Purpose
                Brainstormed causes on a fishbone diagram are hypotheses, not findings, and reviewers expect the Analyse phase to show statistical proof. Screening candidate causes with graphs and historical data, then confirming the vital few with a planned experiment on the live process, gives you a root cause you can defend to a sponsor and an assessor.

                ## Milestones
                1. Candidate causes listed and screened with graphs and historical data.
                2. Three to five suspected vital few causes carried forward with evidence.
                3. An experiment designed with operations agreeing the trial runs and safety limits.
                4. Root causes confirmed or rejected with statistical results at the Analyse tollgate.

                ## Notes
                Agree trial conditions with the process owner and follow your site's change and safety procedures before changing any live setting.
              priority: medium
              deadlineOffsetDays: 150
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "The Analyse tollgate record shows each suspected cause confirmed or rejected by a statistical test or designed experiment."
                cadence: phased
                effort_hours_estimate: "30"
              tasks:
                - "Run a cause and effect session with the people who do the work"
                - "Screen candidate causes with graphs of historical data"
                - "Design the confirmation experiment with the process owner"
                - "Present confirmed and rejected causes at the Analyse tollgate"
            - name: Piloting the improvement before full roll-out
              description: |-
                ## Purpose
                Solutions that work on paper can still fail on the night shift, in a second branch or with a different supplier. Choosing between solution options with a weighted matrix, testing the winner in a time-limited pilot with a failure mode review beforehand, and comparing before and after statistically, protects the business and the credibility of the project.

                ## Milestones
                1. Solution options scored against agreed criteria in a weighted matrix.
                2. A failure mode and effects review of the chosen solution completed.
                3. A pilot run with a clear start, end, scope and success measure.
                4. Before and after performance compared with a hypothesis test.
              priority: medium
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "A pilot report compares before and after results with a hypothesis test and a completed failure mode review."
                cadence: phased
                effort_hours_estimate: "20"
              tasks:
                - "Score solution options in a weighted criteria matrix"
                - "Run a failure mode review on the chosen solution"
                - "Agree the pilot scope, dates and success measure with the sponsor"
                - "Test whether the pilot result differs from the baseline"
            - name: Control plan and handover to the process owner
              description: |-
                ## Purpose
                A Black Belt project is not finished when the numbers improve but when the process owner can keep them improved without you. A control plan with the monitored measures, reaction plans, updated procedures and training records, formally accepted by the owner, is what makes the gain last and what reviewers ask to see.

                ## Milestones
                1. A control plan listing each critical input and output, its limits, check frequency and owner.
                2. Procedures and training records updated to the new method.
                3. A reaction plan for out-of-control signals agreed with the operators.
                4. The process owner's written acceptance of the handover.

                ## Notes
                Mistake-proofing a step beats monitoring it. Ask whether any control can be built into the process before writing it into the plan.
              priority: medium
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "A control plan with reaction rules is signed by the process owner, and procedures and training records reflect the new method."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "List critical inputs and outputs with limits and check frequency"
                - "Update the procedures and training records to the new method"
                - "Agree a reaction plan with the operators who will use it"
                - "Get the process owner's written acceptance of the handover"
            - name: Second certification project
              description: |-
                ## Purpose
                If your route needs two completed projects, starting the second only after the first closes can add a year to the certification. Chartering a second, different project once the first reaches Improve, ideally one that uses a tool your first did not, spreads the effort and broadens what you can show in a review.

                ## Milestones
                1. A second project chartered from the pipeline while the first is in Improve.
                2. A deliberate difference from the first, such as a designed experiment or a transactional process.
                3. Each phase passed through a tollgate with sponsor sign-off.
                4. Benefits validated by finance and the project closed with a control plan.
              priority: medium
              deadlineOffsetDays: 365
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "A second project is closed with signed tollgates, a control plan and finance-validated benefits within twelve months."
                cadence: phased
                effort_hours_estimate: "80"
              tasks:
                - "Choose a second candidate that uses a different main tool"
                - "Confirm a sponsor for the second project"
                - "Write and agree the second charter"
                - "Plan the second project's tollgates around the first's closure"
            - name: Deciding when a problem is not a DMAIC project
              description: |-
                ## Purpose
                Not every problem deserves four months of DMAIC: some need a two-day kaizen event, some a straightforward fix with an owner, and some a redesign. A simple triage rule for incoming problems keeps you from wasting your sponsor's patience on overkill and from forcing a known solution through a statistical ritual.

                ## Milestones
                1. Four routes defined: just do it, kaizen event, DMAIC and design project.
                2. Criteria written for each route, covering known cause, data, scope and risk.
                3. The last five problems brought to you classified with the rule.
                4. The rule agreed with your champion and shared with green belts.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A written triage rule with four routes and criteria has been applied to at least five real problems and agreed with the champion."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Write criteria for just do it, kaizen, DMAIC and design projects"
                - "Classify the last five problems you were asked to solve"
                - "Agree the triage rule with your champion"
                - "Share the rule with the green belts you coach"
            - name: Booking the Black Belt exam
              description: |-
                ## Purpose
                Exam windows, test centre seats and remote proctoring slots can fill weeks ahead, and some bodies require the application to be approved before you can book at all. Booking once your practice scores have cleared your threshold twice, with the logistics checked, turns an open-ended plan into a fixed date.

                ## Milestones
                1. The application approved or eligibility confirmed by the certifying body.
                2. A date and delivery mode chosen, test centre or remote, with the rules for each read.
                3. Identification documents checked against the exact name on the booking.
                4. The exam date written into the study plan with a final four-week block.

                ## Notes
                Check the reschedule and cancellation rules before paying. Fees and windows change, so read them on the body's own site on the day you book.
              priority: high
              deadlineOffsetDays: 120
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A confirmed exam booking exists, with identification checked and the date written into the study plan."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Confirm your practice scores have cleared your threshold twice"
                - "Submit the exam application and supporting documents"
                - "Choose test centre or remote delivery and read its rules"
                - "Check your identification matches the booking name exactly"
            - name: Final four weeks before the exam
              description: |-
                ## Purpose
                The last month is for consolidation, not new topics: full-length mocks, the wrong-answer notebook, and making the reference binder fast to use. A fixed four-week plan with one rest day a week keeps you from cramming the night before and arriving tired.

                ## Milestones
                1. Two full-length timed mocks completed in the final four weeks.
                2. The wrong-answer notebook reviewed end to end twice.
                3. The reference binder or formula recall drilled under time pressure.
                4. No new topics started in the final seven days.
              priority: medium
              deadlineOffsetDays: 150
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "Two full mocks and two complete passes of the wrong-answer notebook are done in the four weeks before the exam."
                cadence: phased
                effort_hours_estimate: "30"
              tasks:
                - "Write a four-week plan with mock dates and one rest day a week"
                - "Sit the first full-length mock in week one"
                - "Work through the whole wrong-answer notebook twice"
                - "Drill finding formulas in your binder against the clock"
            - name: Exam day logistics and pacing plan
              description: |-
                ## Purpose
                Long calculation-heavy exams are lost to pacing as often as to knowledge: an hour sunk into three design of experiments questions leaves no time for easy ones at the end. A written pacing plan, a checked calculator and a morning routine settled the week before remove avoidable risk on the day.

                ## Milestones
                1. A pacing plan with checkpoints for each quarter of the exam.
                2. An approved calculator checked against the body's list, with spare batteries.
                3. Route, arrival time or remote room setup tested in advance.
                4. A rule written for skipping and flagging questions that take too long.
              priority: medium
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A pacing plan, an approved calculator and tested travel or remote setup are all in place two days before the exam."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Check your calculator against the certifying body's approved list"
                - "Write pacing checkpoints for each quarter of the exam"
                - "Test the route or the remote exam room setup"
                - "Pack identification, calculator and permitted references the night before"
            - name: Project review or affidavit submission
              description: |-
                ## Purpose
                For project-based routes, the certification is only granted once a reviewer or the body accepts your project evidence, and incomplete submissions are a common cause of delay. Assembling the storyboard, sponsor signatures and benefit validation into the exact format the body asks for, checked by a certified belt first, gets it accepted the first time.

                ## Milestones
                1. The body's current project submission format and checklist read and dated.
                2. The storyboard trimmed to the required length with every phase covered.
                3. Sponsor and finance signatures obtained on the required forms.
                4. A certified Black Belt or Master Black Belt has reviewed the submission.
                5. The submission sent and the confirmation filed.
              priority: high
              deadlineOffsetDays: 240
              frontmatter:
                mode: event
                output_kind: deliverable
                success_criteria: "A complete project submission with sponsor and finance signatures is sent to the certifying body and its receipt confirmed."
                cadence: one-shot
                effort_hours_estimate: "10"
              tasks:
                - "Download the current project submission format and checklist"
                - "Trim the storyboard to the required length"
                - "Collect sponsor and finance signatures on the required forms"
                - "Ask a certified belt to review the submission before you send it"
            - name: Presenting project results to leadership
              description: |-
                ## Purpose
                A closing presentation is often the only time senior leaders see your work, and it shapes whether the next project gets funded and whether you are seen as a leader or an analyst. A ten-minute story built around the business problem, the proof and the sustained result, not the tools, lands far better than forty slides of charts.

                ## Milestones
                1. A presentation of no more than ten slides built on problem, cause, solution and result.
                2. Benefit figures matching the finance sign-off exactly.
                3. A rehearsal with the sponsor and their feedback applied.
                4. Recognition for the team members named in the presentation.
              priority: low
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A presentation of ten slides or fewer, with finance-matched benefits, is delivered to leadership and the team is credited by name."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Draft a ten-slide story of problem, cause, solution and result"
                - "Check every benefit figure against the finance sign-off"
                - "Rehearse with your sponsor and apply their feedback"
                - "Name the team members who did the work on the final slide"
            - name: After the result, a pass or retake plan
              description: |-
                ## Purpose
                A pass needs a few administrative steps to turn into a usable credential, and a fail needs a calm look at the score report before anyone books again. Planning both outcomes ahead means the week after the exam is spent acting, not stewing.

                ## Milestones
                1. The score report or result filed with the date.
                2. On a pass, the certificate, digital badge and CV and profile updates done.
                3. On a fail, weak sections identified from the score report and a retake date chosen.
                4. The sponsor told the result and the next step.

                ## Notes
                Check the retake waiting period and fee on the body's site before choosing a date.
              priority: low
              frontmatter:
                mode: event
                output_kind: decision
                success_criteria: "Within two weeks of the result, either the credential is recorded on CV and profiles or a dated retake plan exists."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "File the score report with the exam date"
                - "Update your CV and professional profiles if you passed"
                - "Find the weakest sections on the score report if you did not"
                - "Tell your sponsor the result and the next step"
            - name: Running a belt programme as a line manager
              description: |-
                ## Purpose
                Managers who earn a Black Belt are often asked to sponsor or run improvement work across their department, which is a different job from leading one project. Setting up a small portfolio with project selection rules, a monthly review and a fair way to free up belts' time turns individual projects into a programme people can see paying off.

                ## Milestones
                1. Project selection criteria agreed with the leadership team.
                2. A portfolio view of every active project with phase, sponsor and expected benefit.
                3. Belts' protected time written into team capacity plans.
                4. A monthly portfolio review held with the leadership team.
              priority: medium
              frontmatter:
                mode: service
                output_kind: habit
                success_criteria: "A departmental project portfolio is reviewed monthly by the leadership team, with protected belt time in the capacity plan."
                cadence: rolling
              tasks:
                - "Agree project selection criteria with the leadership team"
                - "Build a one-page portfolio view of every active project"
                - "Write belts' protected hours into the team capacity plan"
                - "Review the belt portfolio with the leadership team @recurring(monthly:5)"
            - name: Black Belt work in a regulated plant
              description: |-
                ## Purpose
                Engineers in pharmaceutical, food, medical device or aerospace plants cannot simply try a new setting: process changes need change control, validation and sometimes regulator notification. Building those steps into the project plan from Define, with quality assurance as a team member, prevents a proven improvement waiting months for paperwork.

                ## Milestones
                1. Your site's change control and validation requirements mapped to the DMAIC phases.
                2. Quality assurance named on the project team from the charter onward.
                3. Experiment and pilot protocols approved before any trial run.
                4. The change control record closed with the control plan.

                ## Notes
                Never run an experiment on a validated process outside an approved protocol. Your quality and regulatory teams decide what needs approval, not the project.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "The project plan shows change control and validation steps per phase, with approved protocols on file before any trial."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Map your site's change control steps onto the DMAIC phases"
                - "Ask quality assurance to name a team member for the project"
                - "Write experiment and pilot protocols for approval"
                - "Close the change control record alongside the control plan"
            - name: Black Belt projects in service and transactional processes
              description: |-
                ## Purpose
                In banks, hospitals, call centres and public services, the data is mostly counts, times and yes or no outcomes from IT systems, and the process is invisible until mapped. Adapting the toolkit, with swim lane maps, discrete data capability, time-to-complete analysis and logistic regression, makes Black Belt methods work outside the factory.

                ## Milestones
                1. A swim lane map of the service process with hand-offs and wait times.
                2. Defect definitions and opportunities agreed for a transactional output.
                3. Cycle time data analysed with methods suited to skewed times.
                4. A customer-facing measure linked to the internal metric.
              priority: low
              frontmatter:
                mode: building
                output_kind: knowledge
                success_criteria: "A transactional project has a swim lane map, agreed defect definitions and a cycle time analysis suited to skewed data."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "Map one service process as a swim lane diagram with wait times"
                - "Agree what counts as a defect and an opportunity with the process owner"
                - "Analyse cycle times with a method suited to skewed data"
                - "Link the internal metric to one measure the customer feels"
            - name: Self-funded Black Belt without an employer sponsor
              description: |-
                ## Purpose
                Candidates between jobs, in very small firms or paying their own way often have no obvious project and no one to sign for it. Finding a real host such as a charity, a family business or a local clinic, agreeing scope and sign-off with them, and checking the certifying body will accept it, keeps the project route open without an employer.

                ## Milestones
                1. The certifying body's rules on who may sign for a project checked.
                2. Two or three host organisations approached with a one-page offer.
                3. A host and sponsor agreed, with data access and confidentiality written down.
                4. A total cost budget for training, software and exam set.

                ## Notes
                Agree confidentiality in writing before seeing any host data, and anonymise what goes into your submission.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A host organisation and sponsor are agreed in writing, and the certifying body's rules confirm they can sign for the project."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Check who your certifying body accepts as a project sponsor"
                - "Write a one-page offer describing the improvement project you could run"
                - "Approach three possible host organisations"
                - "Agree data access and confidentiality with the chosen host in writing"
            - name: First 90 days as a full-time Black Belt
              description: |-
                ## Purpose
                Moving from engineer or manager into a dedicated continuous improvement role changes how success is measured: no line authority, results through other people, and a portfolio rather than a single job. A deliberate first 90 days, learning the business, meeting process owners and closing a quick win, sets the credibility every later project depends on.

                ## Milestones
                1. Every key process owner and finance partner met in the first 30 days.
                2. The current project portfolio and backlog understood and summarised.
                3. One quick win delivered by day 60.
                4. A 12-month project plan agreed with your champion by day 90.

                ## Notes
                Start from the **Onboarding 30/60/90** template.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "By day 90, key stakeholders are met, a quick win is delivered and a 12-month project plan is agreed with the champion."
                cadence: phased
                effort_hours_estimate: "20"
              tasks:
                - "List the process owners and finance partners to meet in 30 days"
                - "Summarise the current project portfolio and backlog"
                - "Choose one quick win you can close by day 60"
                - "Meet your champion to review progress @recurring(weekly:mon)"
            - name: Design for Six Sigma on a new process
              description: |-
                ## Purpose
                DMAIC fixes an existing process; when the process or product does not exist yet, or is too broken to fix, the design route (often DMADV) is the right tool. Learning to capture customer needs, translate them into measurable requirements with quality function deployment, and test the design's capability before launch extends your skill into new product and service work.

                ## Milestones
                1. Customer needs gathered and translated into critical to quality requirements.
                2. A quality function deployment matrix linking needs to design features.
                3. Design alternatives compared and one chosen with a predicted capability.
                4. A pilot of the new design with capability measured against the prediction.
              priority: low
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A design project shows a quality function deployment matrix and a pilot capability measured against the predicted value."
                cadence: phased
                effort_hours_estimate: "20"
              tasks:
                - "Interview five customers about what the new process must do"
                - "Translate their needs into measurable critical to quality requirements"
                - "Build a quality function deployment matrix"
                - "Pilot the chosen design and compare actual with predicted capability"
            - name: Mentoring toward Master Black Belt
              description: |-
                ## Purpose
                The Master Black Belt role is about building other people's capability: training, certifying belts, setting standards and advising leadership on the portfolio. Finding a Master Black Belt mentor, teaching a module and reviewing other belts' projects tells you whether that path suits you before you commit to it.

                ## Milestones
                1. A Master Black Belt mentor agreed, with a monthly meeting.
                2. One training module taught to a green belt cohort.
                3. Two other belts' projects reviewed with written feedback.
                4. A decision written on whether to pursue Master Black Belt and by when.
              priority: low
              frontmatter:
                mode: service
                output_kind: decision
                success_criteria: "One taught module, two written project reviews and a recorded decision on Master Black Belt exist within a year."
                cadence: phased
                effort_hours_estimate: "30"
              tasks:
                - "Ask a Master Black Belt you respect to mentor you"
                - "Offer to teach one module on the next green belt course"
                - "Review two belts' projects and write feedback"
                - "Meet your Master Black Belt mentor @recurring(monthly:22)"
            - name: Programme metrics and deployment health review
              description: |-
                ## Purpose
                Senior leaders judge a Six Sigma deployment by a handful of numbers, and programmes without them get cut in the next budget round. Tracking cycle time from charter to closure, validated benefits, belts certified and gains sustained after a year shows what the programme delivers and where it is stuck.

                ## Milestones
                1. Four or five programme measures defined with data sources.
                2. A baseline for each measure from the last twelve months.
                3. A one-page quarterly dashboard shared with leadership.
                4. One programme change made in response to what the measures show.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A quarterly programme dashboard with at least four measures is shared with leadership and has driven one documented change."
                cadence: rolling
              tasks:
                - "Define four or five programme measures with their data sources"
                - "Pull twelve months of history to baseline each measure"
                - "Share the programme dashboard with leadership @recurring(quarterly)"
                - "Pick one programme change based on the measures"
            - name: Keeping the Black Belt credential current
              description: |-
                ## Purpose
                Some Black Belts are for life, while others expire unless you earn recertification units or retake an exam on a fixed cycle. Knowing your body's exact rule, logging qualifying activity as it happens and setting a reminder well before expiry keeps the credential you worked for from lapsing quietly.

                ## Milestones
                1. The recertification rule, cycle length and expiry date confirmed from the body's site.
                2. A log of qualifying activity such as projects, teaching and training, with evidence.
                3. Recertification submitted before the expiry date.
                4. The new expiry date recorded in your credentials list.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "The Black Belt's expiry date and recertification rule are recorded, with a log of qualifying activity kept current."
                cadence: cyclic
              tasks:
                - "Look up your Black Belt's recertification rule and expiry date"
                - "Start a log of projects, teaching and training that count"
                - "Check your recertification log against the requirement @recurring(yearly)"
                - "Submit recertification at least two months before expiry"
---

# Six Sigma Black Belt

This area is for engineers and managers who already know DMAIC at Green Belt level and now want the Black Belt: the advanced statistics, the designed experiments, and the harder part, leading improvement projects that finance will sign off and other people will sustain. It opens with foundations (choosing a certifying body, reading its body of knowledge, checking project evidence rules, a statistics baseline, software, a sponsor agreement and a dated plan), moves through the operating rhythm of study, tollgates, control charts and coaching, then the advanced methods, your own certification projects, the exam and project review, plans for line managers, plant engineers, service teams, self-funded candidates and new full-time belts, and specialist work in DMADV, programme metrics and the road toward Master Black Belt.

The rhythm is two statistics sessions and a wrong-answer review each week, a weekly coaching slot with your green belts, a monthly timed practice exam, tollgate review, control chart check and evidence file update, and quarterly benefit sign-offs and lessons learned. The Purchase decision, Development plan, Metrics log, 1:1, Risk register and Onboarding 30/60/90 templates pair with it. Installing adds all 50 projects as active, so archive the ones that are not for you yet.
