---
id: data-analytics.online-experimentation-ab-tests
name: Online Experimentation (A-B Tests)
description: "Experiment briefs, an evaluation criterion and guardrails, sound randomisation and sample sizes, launch and readout routines, the statistics behind honest results, and advanced designs such as holdouts and switchbacks."
category: business
version: 1.0.0
tags: [data-analytics, online-experimentation-ab-tests, team, knowledge-worker, researcher, ab-testing, experiment-design, product-analytics]
author: Aurum Technology
starter_structure:
  templates:
    - purchase-decision
    - operational-checklist
    - meeting-notes
    - metrics-log
    - remediation-plan
  pillars:
    - name: Data & Analytics
      emoji: "📊"
      description: "Turning data into decisions: metrics and dashboards, data pipelines and warehouses, experimentation, forecasting and modelling, machine learning, data quality and governance."
      pillarFrontmatter:
        review_cadence: monthly
      areas:
        - name: Online Experimentation (A-B Tests)
          description: "Running controlled experiments on websites and products with proper randomisation, sample sizes, guardrail metrics and honest readouts."
          projects:
            - name: Audit of tests run in the last twelve months
              description: |-
                ## Purpose
                Before changing how a team experiments, find out how it has been experimenting. Pulling every test from the last year out of the testing tool, tickets and slide decks, with its hypothesis, primary metric, planned sample size, duration and the decision taken, often shows that many had no written hypothesis and several were stopped the day they looked good. That list is the baseline every later improvement is measured against.

                ## Milestones
                1. A sheet listing every test started in the last twelve months, with owner, dates and status.
                2. Each row marked for whether a hypothesis, primary metric and planned sample size were written before launch.
                3. Tests stopped early, never read out or with no recorded decision flagged.
                4. A one-paragraph summary of the main gaps shared with the people who run tests.

                ## Notes
                Count tests that were set up and abandoned too. They show where the process breaks before launch, not only after.
              priority: medium
              deadlineOffsetDays: 30
              frontmatter:
                mode: research
                output_kind: artifact
                success_criteria: "An audit sheet covers every test from the last twelve months, with gaps in hypothesis, sizing and decisions counted and shared."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Export the list of tests from the testing tool for the last twelve months"
                - "Search tickets and decks for tests run outside the tool"
                - "Mark each test for a written hypothesis, primary metric and planned sample size"
                - "Ask the agent to summarise the most common gaps across the audit sheet"
            - name: One-page experiment brief and pre-registration
              description: |-
                ## Purpose
                Writing the hypothesis, primary metric, guardrails, sample size and decision rule down before launch is what separates an experiment from a fishing trip. A one-page brief, dated and frozen before the first user is assigned, stops the readout from quietly switching to whichever metric moved. It also makes design review possible, because reviewers can see the plan instead of guessing it.

                ## Milestones
                1. A one-page brief with fields for hypothesis, change, audience, randomisation unit, primary metric, guardrails, sample size, run time and decision rule.
                2. A rule that the brief is dated and frozen before launch, with any later change logged as an amendment.
                3. The brief stored in the experiment registry with a link from the testing tool.
                4. Two recent tests rewritten in the format to prove it fits real work.

                ## Notes
                Keep the decision rule concrete: what you will do if the result is positive, flat or negative. A brief without one invites argument after the data arrives.
              priority: high
              deadlineOffsetDays: 14
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A one-page experiment brief format exists, has been used for two real tests and requires a frozen copy before launch."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Draft the brief headings and share them with two people who run tests"
                - "Add a decision rule field for positive, flat and negative results"
                - "Rewrite two recent tests in the new brief format"
                - "Agree that no test launches without a dated, frozen brief"
            - name: Overall evaluation criterion for product tests
              description: |-
                ## Purpose
                Teams that judge each test on a different metric end up shipping changes that win on clicks and lose on revenue. An overall evaluation criterion is the one metric, or small weighted set, that every product test is finally judged on, chosen because it moves within a test's run time and predicts long-term value. Agreeing it with leadership once saves the same argument in every readout.

                ## Milestones
                1. Three or four candidate metrics compared on sensitivity, time to move and link to long-term value.
                2. One overall evaluation criterion chosen and written with its exact definition and source table.
                3. Known ways the criterion could be gamed listed alongside it.
                4. The criterion signed off by the product lead and recorded in the registry.

                ## Notes
                Sessions and clicks are fast but easy to inflate. Revenue is honest but noisy. Many teams settle on a retention or engaged-user measure with revenue as a guardrail.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "One overall evaluation criterion is defined, signed off by the product lead and named as the primary metric in the brief template."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "List the metrics recent readouts used as their headline"
                - "Compare candidates on how quickly they move and how well they track retention"
                - "Write the chosen criterion's definition and source table"
                - "Present the choice to the product lead for sign-off"
                - "Revisit the evaluation criterion with leadership @recurring(yearly)"
            - name: Guardrail metric set for every test
              description: |-
                ## Purpose
                A test can win on its primary metric while slowing the page, raising unsubscribes or lifting refunds. Guardrails are the handful of metrics that must not get worse beyond a stated threshold, computed automatically in every readout. Setting them once means nobody has to remember to look, and nobody can quietly decide not to.

                ## Milestones
                1. Five to eight guardrails chosen across page performance, reliability, revenue and user harm.
                2. A threshold for each that counts as an unacceptable degradation.
                3. Every guardrail computed by default in the testing tool or readout notebook.
                4. A written rule that a breached guardrail blocks shipping until reviewed.
              priority: high
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Every new test reports at least five guardrails with stated thresholds, and the blocking rule is written in the readout standard."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Shortlist guardrails covering page speed, errors, revenue and unsubscribes"
                - "Set a degradation threshold for each with its metric owner"
                - "Add the guardrails to the default readout"
                - "Review guardrail thresholds with metric owners @recurring(quarterly)"
            - name: Choosing the randomisation unit
              description: |-
                ## Purpose
                Randomising by page view when the change affects a whole visit, or by device when people switch between phone and laptop, quietly breaks the independence the statistics rely on. The unit should be the smallest thing that experiences the change consistently: usually a logged-in user, sometimes a cookie, account, store or session. Deciding this per type of test, and writing down why, prevents a whole class of invalid results.

                ## Milestones
                1. The identifiers your stack can randomise on listed: cookie, device, user, account and any others.
                2. A default unit chosen for each type of test, with the reason.
                3. The analysis unit confirmed to match the randomisation unit, or the variance method adjusted where it does not.
                4. Known leaks, such as switching from logged out to logged in mid visit, documented.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A written rule names the randomisation unit for each type of test, with the matching analysis method, and is linked from the brief template."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "List the identifiers your testing tool can randomise on"
                - "Note where users switch identifiers, such as logging in mid visit"
                - "Choose a default unit for web, app, email and account-level tests"
                - "Write the rule and link it from the brief template"
            - name: Sample size and minimum detectable effect calculator
              description: |-
                ## Purpose
                Most underpowered tests are underpowered because nobody did the arithmetic before launch. A shared calculator that takes the baseline rate or variance, the smallest effect worth acting on, alpha and power, and returns users per arm and days needed at current traffic, turns run time from a guess into a commitment. It also makes it obvious when a test simply cannot be run on the traffic you have.

                ## Milestones
                1. A calculator covering conversion and continuous metrics, with inputs for alpha, power and number of arms.
                2. Baseline rates and variances for the main metrics pre-filled from the last eight weeks.
                3. Output shown as users per arm and calendar days at current traffic.
                4. The calculator linked from the brief and its output recorded for every new test.

                ## Notes
                Pick the minimum detectable effect from what would change the decision, not from what makes the run time convenient.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A shared calculator returns users per arm and days needed for conversion and continuous metrics, and every new brief records its output."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Pull eight weeks of baseline rates and variances for the main metrics"
                - "Build or adopt a calculator for conversion and continuous metrics"
                - "Check the calculator against a published worked example"
                - "Refresh baseline rates and variances in the calculator @recurring(quarterly)"
            - name: Exposure logging and assignment records
              description: |-
                ## Purpose
                Analysis should include the users who actually reached the changed experience, not everyone who visited the site that week. Logging an exposure event at the moment a variant is served, with experiment id, variant, unit id and timestamp, keeps diluted samples out of the readout. Without it, real effects shrink toward zero and nobody can say why.

                ## Milestones
                1. An exposure event specification with experiment id, variant, unit id, timestamp and platform.
                2. Exposure fired at the point the variant is rendered, not at page load.
                3. Assignment and exposure counts reconciled for one live test.
                4. A warehouse table that joins exposures to outcome events by unit id.
              priority: high
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Every live test writes exposure events to the warehouse, and assignment and exposure counts reconcile within an agreed tolerance on one test."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Write the exposure event specification with its required fields"
                - "Agree with engineering where in the code exposure fires"
                - "Reconcile assignment and exposure counts for one live test"
                - "Build the warehouse table joining exposures to outcomes"
            - name: A-A test to validate the assignment pipeline
              description: |-
                ## Purpose
                Running two identical variants against each other is the cheapest way to find out whether the platform, logging and analysis can be trusted. At a 5 percent significance level about one metric in twenty should differ by chance; far more than that, or an uneven traffic split, points to a bug that would contaminate every real test. Run one before the first important test and again after any platform change.

                ## Milestones
                1. An A-A test run for at least one full week on the default randomisation unit.
                2. The traffic split checked against the configured ratio.
                3. The share of metrics showing significant differences compared with what chance predicts.
                4. Any problem traced and fixed before real tests rely on the pipeline.

                ## Notes
                Reshuffling assignment many times on historical data shows whether p-values spread evenly between 0 and 1. A pile-up near zero means the variance method is wrong.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "An A-A test has run for a full week with a correct traffic split and a false positive rate close to the chosen alpha, recorded in the registry."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Set up two identical variants on the default randomisation unit"
                - "Check the traffic split after the first two days"
                - "Count how many metrics show significant differences after a full week"
                - "Rerun an A-A test to confirm the pipeline still behaves @recurring(quarterly)"
            - name: Choosing an experimentation platform
              description: |-
                ## Purpose
                Teams outgrow hand-built flag scripts and spreadsheet readouts once they run more than a few tests a month. Comparing a commercial platform, a warehouse-native tool and an in-house build on assignment, statistics engine, metric definitions, cost at your traffic and data residency gives a choice you can defend for years. Score the options on your own data, not on vendor demos.

                ## Milestones
                1. Requirements written covering assignment, exposure, statistics, metric library, permissions and cost.
                2. Three options shortlisted across commercial, warehouse-native and in-house.
                3. The strongest option trialled on an A-A or low-risk test.
                4. A decision recorded with the three-year cost and an exit plan.

                ## Notes
                Start from the **Purchase decision** template. Ask each vendor how they handle sequential testing, variance reduction and sample ratio checks; a vague answer is an answer.
              priority: medium
              deadlineOffsetDays: 60
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A platform decision is recorded with requirements, scores for three options, a trial result and a three-year cost."
                cadence: one-shot
                effort_hours_estimate: "16"
              tasks:
                - "Write the requirements list with the people who run and analyse tests"
                - "Shortlist one commercial, one warehouse-native and one in-house option"
                - "Trial the strongest option on a low-risk test"
                - "Score each option and record the decision with its exit plan"
            - name: Central experiment registry and results archive
              description: |-
                ## Purpose
                Six months after a test, nobody remembers whether the green button lost or was never tested. A registry with one entry per experiment, holding the frozen brief, dates, traffic, result, decision and a link to the readout, becomes the team's memory and stops the same idea being retested every year. Searchable beats beautiful.

                ## Milestones
                1. A registry with fields for id, owner, hypothesis, dates, status, primary result, decision and readout link.
                2. Every test from the audit entered, including failed and abandoned ones.
                3. A rule that a test cannot be marked concluded without its readout attached.
                4. The registry searchable by page, feature and metric.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A searchable registry holds every test from the last year and every new test, each with a decision and readout link."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Create the registry with the agreed fields"
                - "Enter every test from the twelve-month audit"
                - "Link each registry entry to its frozen brief and readout"
                - "Check every concluded test has a readout filed @recurring(monthly:8)"
            - name: Pre-launch checklist for every experiment
              description: |-
                ## Purpose
                Broken tests are usually broken on day one: a variant does not render on one browser, exposure is not logged, or targeting silently excludes the app. A short checklist run before traffic is switched on, covering each variant, logging, targeting, allocation, guardrails and the frozen brief, catches these while they are cheap. It takes ten minutes and saves weeks of unusable data.

                ## Milestones
                1. A checklist of no more than fifteen items covering variants, logging, targeting, allocation and brief.
                2. Each item with a named checker, either the author or a reviewer.
                3. The checklist used for three consecutive launches.
                4. Items that never catch anything removed and new failure points added.

                ## Notes
                Start from the **Operational checklist** template.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Three consecutive tests have launched with a completed checklist attached to their registry entry."
                cadence: rolling
              tasks:
                - "Draft the checklist from the failures found in the audit"
                - "Add a check that each variant renders on the main browsers and app versions"
                - "Attach the completed checklist to each registry entry"
                - "Prune checklist items that have not caught a problem in six months"
            - name: Weekly experiment design review
              description: |-
                ## Purpose
                A thirty-minute weekly slot where authors present briefs before launch catches the mistakes that are cheap to fix on paper: the wrong unit, a metric that cannot move in two weeks, a sample size the traffic cannot deliver. Reviewers rotate, and the same slot reads out concluded tests so lessons spread. Teams with a review tend to run fewer tests, and more of them produce a usable answer.

                ## Milestones
                1. A fixed weekly slot with a rota of at least three reviewers.
                2. Every brief reviewed before launch, with comments recorded.
                3. Concluded tests read out in the same slot.
                4. A short note of decisions and changes kept for each session.

                ## Notes
                Start from the **Meeting notes** template.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "The design review has met at least ten times in a quarter and every test launched that quarter was reviewed first."
                cadence: rolling
              tasks:
                - "Book a thirty-minute weekly slot and invite the people who run tests"
                - "Set up a reviewer rota of at least three people"
                - "Hold the design review and record its decisions @recurring(weekly:tue)"
                - "Ask authors to share briefs a day before the review"
            - name: Sample ratio mismatch alerting on live tests
              description: |-
                ## Purpose
                When a 50/50 test shows 50.8 percent of a large sample in one arm, something is wrong with assignment, redirects, bots or logging, and the results cannot be trusted. A sample ratio mismatch check, a chi-squared test of the observed split against the configured one, run every day a test is live, is the single most useful automatic alarm in experimentation. Catching it on day two beats explaining it in the readout.

                ## Milestones
                1. A daily check comparing observed and configured splits for every live test.
                2. An alert threshold set strictly, commonly a p-value below 0.0005, to avoid false alarms.
                3. Alerts routed to the test owner and the platform owner.
                4. Every mismatch found and its cause recorded in the registry.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every live test is checked daily for sample ratio mismatch, alerts reach the owner, and every alert has a recorded cause."
                cadence: rolling
              tasks:
                - "Write the chi-squared split check against the exposure table"
                - "Set the alert threshold and route alerts to the test owner"
                - "Glance at the mismatch report for every live test @recurring(daily)"
                - "Log each mismatch and its cause in the registry"
            - name: Standard readout document for every test
              description: |-
                ## Purpose
                Readouts written from scratch each time vary in what they show, which makes them easy to spin and hard to compare. A standard format with the hypothesis, the primary metric with its confidence interval, guardrails, the sample ratio check, run dates, pre-declared segments and the decision means anyone can read any test in five minutes. It also makes flat results respectable rather than embarrassing.

                ## Milestones
                1. A readout template with fixed sections and the primary metric's interval shown first.
                2. A data quality section covering sample ratio, exposure counts and bot filtering.
                3. A plain-language summary of three sentences at the top.
                4. Five readouts in a row produced in the format.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: artifact
                success_criteria: "Five consecutive readouts follow the standard format, each with an interval for the primary metric and a recorded decision."
                cadence: rolling
              tasks:
                - "Draft readout sections from the brief fields so plan and result line up"
                - "Put the primary metric with its confidence interval in the first section"
                - "Add a three-sentence plain-language summary at the top"
                - "Ask the agent to check each draft readout against its frozen brief"
            - name: Prioritised experiment backlog
              description: |-
                ## Purpose
                With limited traffic, every test that runs blocks another. Scoring ideas on expected impact, confidence from prior evidence and effort, and checking each against the sample size calculator, keeps the slots for tests that can actually reach a decision. Ideas that cannot be powered get redirected to user research or shipped as plain improvements.

                ## Milestones
                1. Every open idea in one backlog with a one-line hypothesis and an owner.
                2. Each idea scored on impact, confidence and effort.
                3. The top ideas checked for a feasible sample size at current traffic.
                4. Ideas that cannot be powered moved to a separate list with a suggested alternative.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "The top twenty backlog ideas are scored, checked for sample size and re-scored at least monthly."
                cadence: rolling
              tasks:
                - "Collect open test ideas from tickets, decks and chat into one backlog"
                - "Score each idea on impact, confidence and effort"
                - "Check the top ideas against the sample size calculator"
                - "Re-score the top twenty backlog ideas @recurring(monthly:3)"
            - name: Traffic allocation and test collision calendar
              description: |-
                ## Purpose
                Two tests on the same checkout step, launched the same week by different teams, can mask or exaggerate each other. A calendar of live and planned tests by surface and audience, with the share of traffic each uses, shows collisions before launch and helps decide when to run tests in parallel layers and when to queue them.

                ## Milestones
                1. A calendar showing every live and planned test by surface, audience and traffic share.
                2. A rule for which surfaces may run overlapping tests and which need exclusive traffic.
                3. Collisions flagged at design review before launch.
                4. Free traffic capacity visible for the next four weeks.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every planned test appears on the calendar before launch and no exclusive surface has run two overlapping tests in the last quarter."
                cadence: rolling
              tasks:
                - "List every live and planned test with its surface and traffic share"
                - "Agree which surfaces need exclusive traffic"
                - "Update the collision calendar for next week's launches @recurring(weekly:fri)"
                - "Raise any collision at the next design review"
            - name: Ship, iterate or stop decision log
              description: |-
                ## Purpose
                A significant result does not ship itself, and a flat result does not mean the idea is dead. Logging the decision for every concluded test, who made it, on what evidence and what happens next, closes the gap between the readout and the product. It also exposes tests that won and were never rolled out, which happens more often than anyone admits.

                ## Milestones
                1. A decision recorded for every concluded test: ship, iterate, stop or rerun.
                2. Each decision linked to its readout and the person accountable.
                3. Shipped winners confirmed as fully rolled out with the flag removed.
                4. Decisions that overrode the pre-declared rule noted with the reason.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every test concluded in the last quarter has a logged decision, and every ship decision is confirmed as rolled out."
                cadence: rolling
              tasks:
                - "Add decision, decider and next step fields to the registry"
                - "Backfill decisions for tests concluded this quarter"
                - "Check each logged decision was carried out @recurring(monthly:20)"
                - "Note any decision that overrode the pre-declared rule and why"
            - name: Monthly experimentation programme metrics
              description: |-
                ## Purpose
                Judging a programme by its win rate rewards safe tests and quiet peeking. Tracking tests launched, the share with a frozen brief, the share passing quality checks, median time to decision, the share of decisions carried out and estimated cumulative impact gives a fairer picture of whether the team is learning faster. One page a month is enough.

                ## Milestones
                1. Six programme metrics defined, covering quality and speed, not just wins.
                2. A monthly log filled from the registry.
                3. Trends shown over at least three months.
                4. The page shared with the heads of product and analytics.

                ## Notes
                Start from the **Metrics log** template. In mature programmes most tests do not beat control; a very high win rate usually means something is off.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A monthly log of six programme metrics covers at least three consecutive months and is shared with the heads of product and analytics."
                cadence: rolling
              tasks:
                - "Define the six programme metrics and where each comes from"
                - "Fill the first month from the registry"
                - "Update the programme metrics log @recurring(monthly:5)"
                - "Share the monthly page with the heads of product and analytics"
            - name: Feature flag clean-up after concluded tests
              description: |-
                ## Purpose
                Every concluded test leaves a flag and a dead code path behind, and a codebase with hundreds of stale flags becomes slower to change and riskier to release. Agreeing that the losing branch is removed within a set number of weeks of the decision, and checking the list monthly, keeps experimentation from turning into technical debt.

                ## Milestones
                1. A list of every flag created for a test, with its decision date.
                2. A rule that test flags are removed within six weeks of the decision.
                3. Stale flags older than the rule assigned to an engineer.
                4. The count of stale test flags falling month on month.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "No flag for a concluded test is older than six weeks after its decision, checked monthly."
                cadence: rolling
              tasks:
                - "Export the flags created for tests with their decision dates"
                - "Agree the removal window with the engineering lead"
                - "List flags for tests concluded over six weeks ago @recurring(monthly:14)"
                - "Assign each stale flag to the engineer who owns that code"
            - name: Quarterly synthesis of experiment learnings
              description: |-
                ## Purpose
                Individual readouts answer individual questions; patterns across thirty tests answer bigger ones, such as whether urgency messaging ever helps or whether onboarding changes move retention. A quarterly synthesis groups concluded tests by theme and states what the evidence now says, flat results included. It feeds the backlog and stops teams relearning the same lesson.

                ## Milestones
                1. Concluded tests from the quarter grouped into themes.
                2. A short evidence statement for each theme with the tests behind it.
                3. Backlog ideas re-scored where the evidence changed.
                4. The synthesis shared with product, design and marketing.
              priority: medium
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A synthesis covering every test concluded in the quarter is shared within three weeks of quarter end."
                cadence: rolling
              tasks:
                - "Pull every test concluded this quarter from the registry"
                - "Ask the agent to group the quarter's readouts into themes"
                - "Write an evidence statement for each theme"
                - "Run the quarterly learning synthesis @recurring(quarterly)"
            - name: Reading p-values and confidence intervals correctly
              description: |-
                ## Purpose
                Saying that a p-value of 0.03 means a 97 percent chance the variant is better is the commonest mistake in readouts, closely followed by treating a non-significant result as proof of no effect. Learning what these numbers do and do not say, and practising stating results as an interval for the effect size, is the base skill for anyone who writes or reads test results. It takes a few evenings and changes every conversation after.

                ## Milestones
                1. A one-paragraph definition of a p-value and of a confidence interval in your own words, checked against a trusted text.
                2. Five past readouts rewritten to lead with the effect size and its interval.
                3. A list of phrases the team will stop using, such as calling a p-value the chance of winning.
                4. A one-page explainer shared with the people who read readouts.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Five past readouts have been rewritten to lead with effect size and interval, and a one-page explainer is shared with readout readers."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Read a reputable introductory chapter on hypothesis tests for online experiments"
                - "Write your own definitions of a p-value and a confidence interval"
                - "Rewrite five past readouts to lead with the interval"
                - "Share a one-page explainer with the people who read readouts"
            - name: Statistical power and the winner's curse
              description: |-
                ## Purpose
                Underpowered tests do not just miss real effects; the ones that do reach significance tend to overstate the effect, sometimes several times over. Understanding power, and why a winning test's measured lift shrinks after rollout, explains many disappointing launches. Practising with a simulation makes the idea stick far better than formulas.

                ## Milestones
                1. Power, minimum detectable effect and false negative rate explained in your own notes.
                2. A simulation showing how significant results from low-power tests exaggerate the true effect.
                3. Past winners' measured lifts compared with what happened after rollout, where data exists.
                4. A proposed minimum power that a test must have to launch.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A simulation of the winner's curse is shared with the team and a minimum power rule is written into the brief template."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Simulate a thousand low-power tests with a small true effect in a notebook"
                - "Compare the average significant lift with the true effect"
                - "Check two past winners' lifts against post-rollout data"
                - "Propose a minimum power rule for the brief template"
            - name: Peeking and sequential testing
              description: |-
                ## Purpose
                Checking a fixed-horizon test every morning and stopping the first time it crosses significance can push the false positive rate from 5 percent to well over 20. Sequential methods, such as group sequential designs with spending functions or always-valid confidence sequences, let you look early without paying that price. Knowing which one your platform uses, and its rules, makes early stopping defensible.

                ## Milestones
                1. A simulation showing how daily peeking inflates false positives on A-A data.
                2. The sequential method your platform uses identified and its assumptions noted.
                3. A rule for when early stopping is allowed and on which metrics.
                4. One test run with planned interim looks and the outcome recorded.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "The team's early stopping rule names its sequential method and has been used on at least one test with planned interim looks."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "Simulate daily peeking on A-A data and count false positives"
                - "Find out which sequential method the testing platform uses"
                - "Write the early stopping rule for primary and guardrail metrics"
                - "Plan interim looks for the next suitable test"
            - name: Variance reduction with pre-experiment data
              description: |-
                ## Purpose
                Adjusting each user's outcome for what they did in the weeks before the test, the method known as CUPED, can remove a large share of variance on metrics where behaviour is stable, which shortens tests by a similar share. Learning how the adjustment works, when it helps and when it does nothing, as with brand-new users, is one of the most valuable skills for a team short on traffic.

                ## Milestones
                1. The CUPED adjustment worked through by hand on a small dataset.
                2. Pre-period covariates chosen for the main metrics, using data from before assignment only.
                3. Variance reduction measured on three past tests.
                4. The adjusted estimate added to the readout where it is shown to help.

                ## Notes
                Covariates must come from before assignment. Using anything the treatment could influence biases the result.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Variance reduction has been measured on three past tests and the adjusted estimate is in the readout for metrics where it helped."
                cadence: phased
                effort_hours_estimate: "12"
              tasks:
                - "Work through the CUPED adjustment on a small sample by hand"
                - "Pick a pre-period covariate for each main metric"
                - "Rerun three past tests with and without the adjustment"
                - "Add the adjusted estimate to the readout where it reduces variance"
            - name: Ratio metrics and the delta method
              description: |-
                ## Purpose
                Metrics like clicks per session or revenue per order have a denominator that varies by user, so treating each session as independent understates the variance and produces false wins. The delta method, or a bootstrap at the user level, gives the right interval when the randomisation unit is the user but the metric is per session or per order. This is one of the most common hidden errors in hand-built readouts.

                ## Milestones
                1. The ratio metrics in your readouts listed with their numerator and denominator units.
                2. The delta method variance worked through for one ratio metric.
                3. Naive and corrected intervals compared on a past test.
                4. Readouts switched to the corrected method for every ratio metric.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Every ratio metric in the standard readout uses a user-level variance method, shown to differ from the naive interval on a past test."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "List every ratio metric in the readout with its units"
                - "Compute the delta method variance for one ratio metric"
                - "Compare naive and corrected intervals on a past test"
                - "Switch the readout code to the corrected method"
            - name: Many metrics, many segments and false discoveries
              description: |-
                ## Purpose
                Look at forty metrics across ten segments and some will be significant by chance alone, which is how a test with a flat primary metric becomes a story about weekend tablet users. Learning how false discovery control works, and agreeing which results count as findings and which as hypotheses for the next test, keeps readouts honest without hiding interesting signals.

                ## Milestones
                1. The expected number of chance findings worked out for a typical readout.
                2. A correction method chosen for secondary metrics, such as Benjamini-Hochberg.
                3. A rule that only pre-declared segments are reported as findings.
                4. Unplanned segment results labelled as ideas for follow-up tests.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "The readout standard names a correction method for secondary metrics and labels unplanned segment results as follow-up hypotheses."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Count the metrics and segments in a typical readout"
                - "Work out how many chance findings that count implies"
                - "Choose a correction method for secondary metrics"
                - "Label unplanned segment results as follow-up ideas in the readout template"
            - name: Bayesian and frequentist readouts compared
              description: |-
                ## Purpose
                Some platforms report a probability to beat control, others a p-value and interval, and teams that switch between them often misread both. Running one past test through each approach, with the prior and decision threshold made explicit, shows where they agree, where they differ and what each statement actually means. The aim is a team that can read either, not a winner in a methods argument.

                ## Milestones
                1. One past test analysed with both a frequentist and a Bayesian method.
                2. The prior written down and its influence checked by rerunning with a wider one.
                3. A plain-language sentence for each output that a product manager would understand.
                4. A note on which output the team reports by default and why.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A comparison of both methods on one past test is written up with plain-language statements and a recorded default."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Choose a concluded test with clean data for the comparison"
                - "Analyse it with a frequentist test and a Bayesian model"
                - "Rerun the Bayesian model with a wider prior and note the change"
                - "Write the plain-language summary for each approach"
            - name: Novelty and primacy effects in user behaviour
              description: |-
                ## Purpose
                Existing users often click a new design because it is new, or avoid it because it is unfamiliar, and both effects fade. Plotting the treatment effect by days since first exposure, and comparing new with returning users, shows whether a two-week result is likely to hold. Spotting this stops teams shipping a novelty spike or killing a change that needed a month to settle.

                ## Milestones
                1. The effect by days since exposure plotted for two past tests.
                2. Effects for new and returning users compared.
                3. A rule for when a test needs a longer run or a follow-up holdout.
                4. The plot added as an optional section of the readout.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Effect-over-time plots for two past tests are shared and a rule for extending runs is in the readout standard."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Plot the daily treatment effect by days since first exposure for a past test"
                - "Split the effect into new and returning users"
                - "Write the rule for extending a run when the effect is still moving"
                - "Add the plot to the readout as an optional section"
            - name: Testing revenue metrics with heavy tails
              description: |-
                ## Purpose
                One customer placing a very large order can swing revenue per user by more than the change being tested, so revenue tests are noisy and easily dominated by a few accounts. Learning to use capping or winsorising, user-level bootstraps and trimmed or log metrics, and to pre-declare which you will use, makes revenue a usable metric rather than a lottery.

                ## Milestones
                1. The distribution of revenue per user plotted and its top one percent examined.
                2. A capping rule chosen and pre-declared in the brief template.
                3. Capped and uncapped results compared on two past tests.
                4. A user-level bootstrap interval produced for one revenue test.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A pre-declared capping rule for revenue metrics is in the brief template and has been compared with uncapped results on two past tests."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Plot revenue per user and inspect the top one percent"
                - "Pick a capping threshold and justify it in a sentence"
                - "Compare capped and uncapped results on two past tests"
                - "Run a user-level bootstrap for one revenue test"
            - name: Diagnosing a sample ratio mismatch
              description: |-
                ## Purpose
                Once the alarm fires, the work is finding why: bots filtered in one arm only, a redirect that loses users on slow connections, a variant that crashes on an old app version, or exposure logged after a step only one arm reaches. Working through a known list of causes, slice by slice, usually finds the culprit within a day. The test's results stay quarantined until it does.

                ## Milestones
                1. The mismatch confirmed on raw assignment logs, not only on the dashboard.
                2. The split checked by browser, device, app version, country and day.
                3. The cause identified and written up.
                4. The fix deployed and the test restarted or discarded, with the decision in the registry.

                ## Notes
                Start from the **Remediation plan** template. Do not reweight the arms to repair the ratio; the missing users are missing for a reason that probably relates to the outcome.
              priority: high
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "The cause of the mismatch is written up, the fix is deployed and the affected test is restarted or discarded with the decision logged."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Confirm the mismatch on raw assignment logs"
                - "Slice the split by browser, device, app version and day"
                - "Write up the cause and the fix"
                - "Restart or discard the affected test and log the decision"
            - name: Minimum run time and stopping rules policy
              description: |-
                ## Purpose
                Tests stopped after three days miss weekend behaviour, and tests left running for months collect cookie churn and seasonal drift. A written policy, for example at least one full week and whole weeks only, a maximum run time and the conditions for stopping early for harm, removes the daily argument about whether to call it. Agree it once with the product and analytics leads.

                ## Milestones
                1. A minimum run time in whole weeks agreed.
                2. A maximum run time agreed, with the reason.
                3. Conditions for stopping early for harm, or for success under the sequential rule, written down.
                4. The policy linked from the brief and checked at design review.
              priority: medium
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A run-time policy with minimum, maximum and early-stop conditions is signed off by the product and analytics leads and linked from the brief."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Check how weekday and weekend behaviour differ on the main metrics"
                - "Draft minimum and maximum run times in whole weeks"
                - "Write the conditions for stopping early for harm"
                - "Get sign-off from the product and analytics leads"
            - name: Default alpha, power and sidedness settings
              description: |-
                ## Purpose
                Leaving each author to pick their own significance level and power invites quiet tuning until results look good. Setting defaults, such as alpha of 0.05, 80 percent power and two-sided tests for most decisions, with documented exceptions such as one-sided non-inferiority tests for guardrails, makes results comparable across teams. The exact choice matters less than everyone using the same one.

                ## Milestones
                1. Default alpha, power and sidedness written for standard tests.
                2. Exceptions listed, such as non-inferiority margins for guardrails or a stricter alpha for hard-to-reverse changes.
                3. Defaults set in the calculator and the platform.
                4. Any deviation required to be justified in the brief.
              priority: medium
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "Default alpha, power and sidedness are configured in the calculator and platform, and the brief template requires a reason for any deviation."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Write the default alpha, power and sidedness for standard tests"
                - "Define the exceptions and who can approve them"
                - "Set the defaults in the calculator and the testing platform"
                - "Add a deviation reason field to the brief template"
            - name: Moving tests from client side to server side
              description: |-
                ## Purpose
                Client-side tests that swap page content in the browser cause flicker, slow the page and fail when ad blockers or consent tools block the script, and all three bias results. Moving assignment and rendering to the server or app backend removes those problems at the cost of engineering time per test. Deciding which test types move first keeps the change practical.

                ## Milestones
                1. Current client-side tests listed with their flicker and load-time impact measured.
                2. A server-side assignment path built or adopted for at least one surface.
                3. One test run server side and its exposure counts compared with a client-side equivalent.
                4. A rule for which test types stay client side and which move.
              priority: medium
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "At least one surface runs tests server side and a written rule says which test types use each approach."
                cadence: phased
                effort_hours_estimate: "30"
              tasks:
                - "Measure the flicker and load time added by the current testing script"
                - "Choose the first surface to move to server-side assignment"
                - "Run one test server side and compare exposure counts"
                - "Write the rule for which tests stay client side"
            - name: Leading indicators when the real outcome is slow
              description: |-
                ## Purpose
                Retention at ninety days or annual renewal is what matters, but no team can wait a year per test. A leading indicator, such as week-one activation, can stand in only if past evidence shows that moving it moves the real outcome. Validating a stand-in metric against historical tests before relying on it prevents a programme that pushes a number nobody cares about.

                ## Milestones
                1. The slow outcome and two or three candidate leading indicators named.
                2. Each candidate's relationship to the slow outcome checked across past tests.
                3. One indicator chosen, with its known weaknesses written down.
                4. A long-term check planned to confirm the indicator still tracks the outcome.
              priority: medium
              deadlineOffsetDays: 60
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A leading indicator is chosen for the slow outcome, with evidence from past tests and a scheduled long-term check."
                cadence: one-shot
                effort_hours_estimate: "10"
              tasks:
                - "Name the slow outcome and list candidate early metrics"
                - "Check whether past tests that moved each candidate also moved the outcome"
                - "Choose one indicator and write down its weaknesses"
                - "Schedule a follow-up check against the slow outcome"
            - name: Consent, privacy and ethics review for tests
              description: |-
                ## Purpose
                Experiments change what real people see, pay and are told, and some changes cross a line: different prices by group, manipulative copy, dark patterns or tests on vulnerable users. A short review step, plus checks that assignment identifiers respect consent rules and that test data follows the retention policy, protects users and the organisation. Ask your privacy or legal team which rules apply where you operate.

                ## Milestones
                1. A list of test types that need extra review before launch.
                2. Consent handling for assignment identifiers confirmed in writing with the privacy lead.
                3. Retention of experiment data aligned with the data retention policy.
                4. A review question added to the brief and checked at design review.
              priority: high
              deadlineOffsetDays: 45
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "The brief template includes an ethics and privacy question, and consent handling for assignment identifiers is confirmed in writing by the privacy lead."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "List the kinds of tests that would need extra review"
                - "Ask the privacy lead how assignment identifiers fit your consent rules"
                - "Add an ethics and privacy question to the brief template"
                - "Re-check consent handling for test identifiers with the privacy lead @recurring(yearly)"
            - name: Interaction checks between concurrent tests
              description: |-
                ## Purpose
                Running tests in overlapping layers multiplies capacity, and in most cases interactions between them are small. The risk lies in the exceptions, such as two tests that both change the checkout button. A monthly check for interaction between every pair of tests sharing users, with a rule for what to do when one appears, keeps overlapping traffic safe.

                ## Milestones
                1. A query that lists pairs of concurrent tests sharing users.
                2. An interaction test defined for each pair's primary metric, with a threshold.
                3. A rule for handling a significant interaction, such as reading results within the other test's control.
                4. Surfaces with repeated interactions moved to exclusive traffic.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every pair of overlapping tests in the last quarter has an interaction check recorded in the registry."
                cadence: rolling
              tasks:
                - "Write the query that finds live tests sharing users"
                - "Define the interaction test and threshold for primary metrics"
                - "Run the pairwise interaction check on overlapping tests @recurring(monthly:11)"
                - "Move surfaces with repeated interactions to exclusive traffic"
            - name: Bot and internal traffic filtering for tests
              description: |-
                ## Purpose
                Crawlers, monitoring scripts, staff and QA accounts can make up a surprising share of test traffic and rarely split evenly across arms. Filtering them consistently, before assignment where possible and in analysis where not, removes a frequent source of sample ratio mismatch and diluted effects.

                ## Milestones
                1. Known bot user agents, monitoring services and staff accounts listed.
                2. Filtering applied at assignment or in the exposure table, and documented.
                3. The filtered share of traffic reported per test.
                4. The filter list reviewed monthly to catch new bots.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every readout reports the filtered share of traffic, and the filter list has been reviewed monthly for a quarter."
                cadence: rolling
              tasks:
                - "List staff, QA and monitoring accounts that reach tested pages"
                - "Apply the filter in the exposure table and document it"
                - "Report the filtered share in the readout template"
                - "Review the bot and staff share of test traffic @recurring(monthly:22)"
            - name: First end-to-end experiment from brief to readout
              description: |-
                ## Purpose
                The first test under the new process should be low risk and high traffic, such as copy on a busy page, so every step from brief to decision gets exercised without much at stake. Running it end to end with the full checklist, daily ratio checks and the standard readout finds the gaps in the process itself, before a test that matters depends on it.

                ## Milestones
                1. A low-risk, high-traffic test chosen and briefed.
                2. The test launched with the full checklist.
                3. The readout produced in the standard format.
                4. A list of process problems found during the run, each with a fix.
              priority: medium
              deadlineOffsetDays: 60
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "One test has gone from frozen brief to logged decision under the new process, with a list of process fixes recorded."
                cadence: one-shot
                effort_hours_estimate: "12"
              tasks:
                - "Pick a low-risk change on a high-traffic page"
                - "Write and freeze the brief"
                - "Launch with the full checklist and watch the daily mismatch check"
                - "Write the readout and list the process problems found"
            - name: Checkout change shipped as a staged experiment
              description: |-
                ## Purpose
                Changes to checkout, sign-up or payments carry real revenue risk, so they deserve a staged rollout: a small exposure for safety, then a full-power test, then rollout. Planning the stages, guardrails, kill switch and decision owner in advance means a bad change is caught at 5 percent of traffic rather than at 100.

                ## Milestones
                1. Stages, traffic shares and duration for each written in the brief.
                2. A kill switch tested before launch.
                3. Guardrail thresholds agreed with finance and the checkout owner.
                4. The full-power stage read out and a ship decision logged.
              priority: medium
              deadlineOffsetDays: 90
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "The checkout change has passed each planned stage with guardrails reviewed at each step and a logged ship decision."
                cadence: phased
                effort_hours_estimate: "20"
              tasks:
                - "Write the stages and traffic shares into the brief"
                - "Test the kill switch in a staging environment"
                - "Agree guardrail thresholds with finance and the checkout owner"
                - "Review guardrails before moving to each stage"
            - name: Peak season test freeze and restart
              description: |-
                ## Purpose
                Sales peaks, holiday weeks and big campaigns bring visitors who behave unlike everyone else, and tests run across them rarely generalise. Planning a freeze window, deciding which tests conclude or pause beforehand and scheduling restarts afterwards protects both the peak and the evidence.

                ## Milestones
                1. Freeze dates agreed with marketing and trading.
                2. Each live test assigned to conclude, pause or continue, with a reason.
                3. Any test allowed to run through the peak flagged in its readout.
                4. Restarts scheduled for the weeks after.
              priority: low
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "Freeze dates are agreed before the peak, every live test has a recorded plan, and restarts are on the calendar."
                cadence: cyclic
              tasks:
                - "Confirm peak freeze dates with marketing and trading @recurring(yearly)"
                - "Assign each live test to conclude, pause or continue"
                - "Flag in the readout any test that ran through the peak"
                - "Schedule restarts on the collision calendar"
            - name: Company experimentation showcase
              description: |-
                ## Purpose
                Outside the core programme, most people hear about tests only when one wins big. A one-hour showcase of five tests, including a surprising loss and a useful flat result, shows how decisions are made, recruits new test authors and makes the process feel like help rather than gatekeeping.

                ## Milestones
                1. Five tests chosen, including at least one loss and one flat result.
                2. Each presented in five minutes by its author using the readout format.
                3. Questions and new test ideas captured.
                4. Attendance and ideas raised noted for the next showcase.
              priority: low
              deadlineOffsetDays: 120
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A showcase of five tests, including a loss and a flat result, has been held and the ideas raised are in the backlog."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Choose five tests including one loss and one flat result"
                - "Book a one-hour slot open to the whole company"
                - "Coach each author to present in five minutes"
                - "Add ideas raised in the session to the backlog"
            - name: Annual experimentation programme review
              description: |-
                ## Purpose
                Once a year, step back from individual tests and ask whether the programme is worth its cost in traffic, engineering time and analyst hours, against the decisions it improved and its estimated impact. Reviewing the registry, programme metrics and a sample of readouts sets next year's priorities, platform spend and the methods worth adopting.

                ## Milestones
                1. A year of programme metrics summarised.
                2. Ten readouts sampled and scored for quality.
                3. Three priorities for next year agreed.
                4. Platform and staffing needs written into the planning cycle.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "An annual review with programme metrics, a quality sample of ten readouts and three agreed priorities is filed before planning starts."
                cadence: cyclic
              tasks:
                - "Summarise a year of programme metrics from the log"
                - "Sample ten readouts and score them against the standard"
                - "Agree three priorities for next year with the product and analytics leads"
                - "Hold the annual programme review @recurring(yearly)"
            - name: Landing page and email tests for marketers
              description: |-
                ## Purpose
                Marketers run more tests than anyone, often in tools that declare a winner after a few hundred visits. Applying the same basics, a hypothesis, one primary metric such as qualified sign-ups rather than clicks, a sample size worked out in advance and a full-week minimum, turns subject line and landing page tests into results that hold up.

                ## Milestones
                1. Automatic winner selection switched off, or its rules understood.
                2. A primary metric chosen that reflects lead quality, not just opens or clicks.
                3. Sample size checked before each test against list size or traffic.
                4. Marketing test results logged in the main registry.

                ## Notes
                Open rates are unreliable where mail apps preload images. Prefer clicks or a downstream conversion as the primary metric.
              priority: medium
              frontmatter:
                mode: building
                output_kind: habit
                success_criteria: "The next three marketing tests each have a pre-set sample size and a quality-based primary metric, and are logged in the registry."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Check how the email or landing page tool picks winners"
                - "Choose a primary metric tied to qualified sign-ups"
                - "Work out the sample size for the next send from the list size"
                - "Log each marketing test result in the registry"
            - name: Product manager's first month running tests
              description: |-
                ## Purpose
                New product managers are often handed a testing tool and a target without being told how the team decides. A first month spent reading ten past readouts, sitting in on two design reviews, writing one brief and learning the evaluation criterion builds judgement before a high-stakes test lands on their desk.

                ## Milestones
                1. Ten past readouts read and three lessons noted.
                2. Two design reviews attended.
                3. One brief written and reviewed.
                4. The evaluation criterion and guardrails explained back to the analyst partner.
              priority: medium
              deadlineOffsetDays: 30
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Within a month, the new product manager has read ten readouts, attended two reviews and had one brief reviewed."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "Read ten past readouts from the registry and note three lessons"
                - "Attend the next two design reviews"
                - "Write one brief for a test you own"
                - "Explain the evaluation criterion back to your analyst partner"
            - name: Online field experiments for academic researchers
              description: |-
                ## Purpose
                Researchers running experiments on live platforms, whether with a company partner or on their own site, need ethics approval, a consent approach or a justified waiver, pre-registration on a public registry and a data agreement before any participant is assigned. Planning these alongside the power analysis keeps a publishable study from being halted by a review board or a partner's lawyers halfway through.

                ## Milestones
                1. Ethics approval obtained, with the consent approach agreed.
                2. The study pre-registered with hypotheses, outcomes and analysis plan.
                3. A data sharing agreement signed with the platform partner, where there is one.
                4. Power analysis and stopping rule written into the registration.
              priority: medium
              deadlineOffsetDays: 90
              frontmatter:
                mode: research
                output_kind: deliverable
                success_criteria: "The study is pre-registered on a public registry with ethics approval and a signed data agreement before the first participant is assigned."
                cadence: phased
                effort_hours_estimate: "30"
              tasks:
                - "Contact your ethics board about online field experiment requirements"
                - "Draft the pre-registration with hypotheses and analysis plan"
                - "Agree data access and publication rights with the platform partner"
                - "Add the power analysis and stopping rule to the registration"
            - name: Experimenting with low traffic in a small team
              description: |-
                ## Purpose
                With a few thousand visitors a month, a typical conversion test needs months to detect anything but a large effect. Small teams do better testing bolder changes, using metrics close to the change, pooling similar pages, applying variance reduction and accepting a larger minimum detectable effect, or deciding plainly that a change ships without a test.

                ## Milestones
                1. Monthly traffic and baseline rates for the pages you want to test written down.
                2. The smallest effect detectable in eight weeks at that traffic calculated.
                3. Upcoming changes sorted into ones worth testing and ones to ship without a test.
                4. One test run on a metric close to the change.
              priority: medium
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A written list separates changes the team can test at its traffic from changes it will ship untested, and one suitable test has run."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Write down monthly traffic and baseline rates for key pages"
                - "Calculate the smallest effect detectable in eight weeks"
                - "Sort upcoming changes into test and ship-without-test lists"
                - "Run one test on a metric close to the change"
            - name: Re-analysing past winners nobody trusts
              description: |-
                ## Purpose
                Inheriting a programme often means inheriting claims: a 12 percent lift from a button colour, a sign-up page that supposedly doubled conversions. Re-running the five most-cited wins with sample ratio checks, correct variance methods and the original primary metric shows which claims hold. It is uncomfortable work, and it resets trust in everything that follows.

                ## Milestones
                1. The five most-cited past wins identified from decks and planning documents.
                2. Each re-analysed from raw data with current methods.
                3. Post-rollout trends checked where the change shipped.
                4. A short verdict on each claim: confirmed, smaller or not supported.

                ## Notes
                Share findings with the original authors first. The goal is better methods, not blame.
              priority: medium
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "The five most-cited wins are re-analysed and each has a written verdict shared with the original authors."
                cadence: one-shot
                effort_hours_estimate: "16"
              tasks:
                - "List the five past wins cited most often in planning decks"
                - "Re-analyse each from raw data with current methods"
                - "Check post-rollout trends for each shipped change"
                - "Share each verdict with the original author before wider circulation"
            - name: Long-term holdout for cumulative impact
              description: |-
                ## Purpose
                Adding up the lifts of every winning test overstates total impact, because of the winner's curse, novelty and interactions. Keeping a small share of users, often 1 to 5 percent, out of all shipped changes for six to twelve months measures what the programme actually delivered. It is the most credible number an experimentation team can present.

                ## Milestones
                1. Holdout size and duration agreed with product leadership.
                2. Holdout users excluded from all shipped test winners.
                3. A monthly comparison of holdout and main population on the evaluation criterion.
                4. A final readout comparing summed test lifts with the measured holdout effect.

                ## Notes
                Holdouts withhold improvements from real users. Agree exclusions for safety, accessibility and legal fixes, which should always ship to everyone.
              priority: medium
              deadlineOffsetDays: 365
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A holdout runs for at least six months and a final readout compares summed test lifts with the measured holdout effect."
                cadence: phased
                effort_hours_estimate: "20"
              tasks:
                - "Propose holdout size and duration to product leadership"
                - "Confirm with engineering that holdout users skip shipped winners"
                - "Refresh the holdout comparison on the evaluation criterion @recurring(monthly:26)"
                - "Write the final readout comparing summed lifts with the holdout"
            - name: Switchback and cluster tests for network effects
              description: |-
                ## Purpose
                In marketplaces, delivery and social products, treating one user changes what others experience, so user-level randomisation leaks and biases the result. Switchback designs, which alternate the whole market between variants in time blocks, and cluster designs, which randomise cities or groups, restore a valid comparison at the cost of power. Both need a statistician's input on block length and analysis.

                ## Milestones
                1. The interference mapped: who affects whom and through what.
                2. A switchback or cluster design chosen, with block or cluster size justified.
                3. Power estimated with a realistic number of blocks or clusters.
                4. One test run and analysed with cluster-level variance.
              priority: low
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "One switchback or cluster test has run with a written design justification and an analysis using block or cluster-level variance."
                cadence: phased
                effort_hours_estimate: "30"
              tasks:
                - "Map how treating one user changes what others experience"
                - "Choose switchback or cluster randomisation and justify the unit"
                - "Estimate power for the realistic number of blocks or clusters"
                - "Run and analyse one test with cluster-level variance"
            - name: Multi-armed bandits versus fixed-horizon tests
              description: |-
                ## Purpose
                Bandit algorithms shift traffic toward better-performing variants as data arrives, which suits short-lived choices such as headlines or promotions where earning during the test matters more than learning. They make clean effect estimates harder and can lock onto early noise. Knowing when each fits, and running one bandit beside a fixed test, gives the team a second tool without replacing the first.

                ## Milestones
                1. Use cases listed where earning during the test matters more than a precise effect estimate.
                2. A bandit method chosen and its exploration settings documented.
                3. One bandit run in parallel with a fixed test on a similar decision.
                4. A rule written for when the team uses a bandit and when a fixed test.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A written rule says when to use a bandit or a fixed test, informed by one bandit run beside a fixed test."
                cadence: phased
                effort_hours_estimate: "16"
              tasks:
                - "List upcoming decisions where short-term earnings matter most"
                - "Choose a bandit method and document its exploration settings"
                - "Run one bandit beside a fixed test on a similar decision"
                - "Write the rule for choosing between a bandit and a fixed test"
---

# Online Experimentation (A-B Tests)

This area is for the people who run and read online tests: product and growth teams, the analysts who check the numbers and researchers running field experiments on live platforms. It starts with foundations (an audit of past tests, the experiment brief, the evaluation criterion and guardrails, randomisation, sample sizing, exposure logging, an A-A test, platform choice and a registry), moves through the operating routines and the statistics every experimenter should be able to explain, then decisions on run time, defaults, server-side testing and ethics, dated events from a first end-to-end test to the annual review, situations for marketers, new product managers, academics and small teams, and finally specialist designs such as long-term holdouts, switchbacks and bandits.

What repeats is a daily sample ratio check while tests are live, a weekly design review and collision calendar update, monthly backlog scoring, programme metrics, decision follow-through, flag clean-up, bot filtering, interaction checks and holdout comparisons, quarterly guardrail, calculator, A-A and learning reviews, and a yearly look at the evaluation criterion, consent handling, the peak season freeze and the programme as a whole. The Purchase decision, Operational checklist, Meeting notes, Metrics log and Remediation plan templates pair with the platform choice, the pre-launch checklist, the design review, programme metrics and diagnosing a sample ratio mismatch. Installing adds all 50 projects as active, so archive the ones that are not for you yet.
