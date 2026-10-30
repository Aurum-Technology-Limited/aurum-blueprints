---
id: data-analytics.algorithmic-bias-review
name: Algorithmic Bias Review
description: "An inventory of your models and automated decisions, agreed fairness metrics, disparity testing, documented limitations, release gates and the mitigations and audits that fix unfair outcomes."
category: business
version: 1.0.0
tags: [data-analytics, algorithmic-bias-review, researcher, enterprise, fairness, responsible-ai, model-audit, disparate-impact]
author: Aurum Technology
starter_structure:
  templates:
    - compliance-control
    - metrics-log
    - risk-register
    - reading-queue
    - vendor
    - board-meeting
  pillars:
    - name: Data & Analytics
      emoji: "📊"
      description: "Turning data into decisions: metrics and dashboards, data pipelines and warehouses, experimentation, forecasting and modelling, machine learning, data quality and governance."
      pillarFrontmatter:
        review_cadence: monthly
      areas:
        - name: Algorithmic Bias Review
          description: "Checking models and automated decisions for unfair outcomes across groups, documenting limitations and fixing harmful patterns."
          projects:
            - name: Inventory of models and automated decisions
              description: |-
                ## Purpose
                Most organisations cannot say how many models make or shape decisions about people, and bias reviews then only reach the systems someone happened to mention. A single inventory listing each model, the decision it feeds, who is affected and who owns it is the scope every later review depends on.

                ## Milestones
                1. A list of every model, scoring rule and vendor tool that ranks, approves, prices or flags people.
                2. Each entry showing the decision it feeds, the people affected and a named business owner.
                3. Every entry tiered high, medium or low risk using three written criteria.
                4. The inventory stored where risk, legal and data teams can all read it.

                ## Notes
                Include spreadsheet scorecards and hard-coded business rules. A points-based rule that rejects applicants is an automated decision even if nobody calls it a model.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: research
                output_kind: artifact
                success_criteria: "A risk-tiered inventory of every automated decision affecting people, each with a named owner, is published to risk, legal and data teams."
                cadence: one-shot
                effort_hours_estimate: "12"
              tasks:
                - "List the models and scoring rules your own team runs today"
                - "Ask procurement for every vendor tool that scores or ranks people"
                - "Write three criteria that make a decision high risk"
                - "Tier each entry and name its business owner"
                - "Add newly proposed models and vendor tools to the inventory @recurring(monthly:9)"
            - name: Register of groups and sensitive attributes to test
              description: |-
                ## Purpose
                Every bias review needs to know which groups it is comparing, and the answer depends on the decision, the jurisdiction and the population affected. Writing down the characteristics in scope, such as sex, age, ethnicity, disability and their proxies, with counsel's view on which are legally protected where you operate, stops each analyst choosing their own list.

                ## Milestones
                1. A list of characteristics to test for each high-risk decision, agreed with legal counsel.
                2. Known proxies noted beside each one, such as postcode, first name or device type.
                3. The source of each attribute recorded: collected, self-reported, inferred or unavailable.
                4. Rules for who may access the attributes and for what purpose written down.

                ## Notes
                Which characteristics are protected, and whether you may collect them, differs by country and sector. Treat counsel's answer as the rule and this register as the record of it.
              priority: high
              deadlineOffsetDays: 45
              frontmatter:
                mode: research
                output_kind: artifact
                success_criteria: "A register listing the groups and proxies to test for every high-risk decision, reviewed by counsel and dated."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Draft the characteristics you think each high-risk decision should be tested on"
                - "Ask counsel which are legally protected for these decisions and places"
                - "Note likely proxies for each characteristic in your data"
                - "Record where each attribute comes from and who may see it"
                - "Ask counsel whether the protected list has changed @recurring(yearly)"
            - name: Fairness metric choice for each decision type
              description: |-
                ## Purpose
                Demographic parity, equal opportunity, predictive parity and calibration cannot all hold at once when base rates differ, so choosing a metric is a value judgement, not a technical default. Recording which metric applies to each decision, and why, means a disparity finding can be argued about on its merits rather than on the yardstick.

                ## Milestones
                1. Each high-risk decision classed as allocating a benefit, imposing a burden or ranking for attention.
                2. A primary and a secondary fairness metric chosen for each class, with a one-paragraph rationale.
                3. A tolerance or threshold for each metric agreed with the decision owner.
                4. The choices signed off and stored with the bias review charter.

                ## Notes
                Where a false negative costs someone a loan or a job, error-rate metrics usually matter most. Where the score is read as a probability, check calibration by group as well.
              priority: high
              deadlineOffsetDays: 45
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A signed decision record names the primary and secondary fairness metric and tolerance for every high-risk decision type."
                cadence: one-shot
                effort_hours_estimate: "10"
              tasks:
                - "Class each high-risk decision as benefit, burden or ranking"
                - "Write down which error hurts people most for each class"
                - "Choose a primary and secondary metric and justify each in a paragraph"
                - "Agree a tolerance for each metric with the decision owner"
            - name: Harm and stakeholder map for one high-risk decision
              description: |-
                ## Purpose
                Group metrics only measure the harms someone thought to count. Mapping who touches one automated decision, from applicants and caseworkers to people who never apply because of it, and what could go wrong for each, surfaces harms such as denied services, extra scrutiny or degraded quality of service before the analysis is designed.

                ## Milestones
                1. Every group affected by the decision listed, including people screened out before they apply.
                2. Harms for each group described as allocation, quality of service, dignity or extra scrutiny.
                3. Each harm rated for severity and how reversible it is.
                4. The three most serious harms turned into questions the bias analysis must answer.
              priority: medium
              deadlineOffsetDays: 30
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A written harm map for one high-risk decision, with its top three harms turned into analysis questions."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Pick the highest-risk decision in the inventory"
                - "Interview two frontline staff about who the decision affects"
                - "List harms per group and rate severity and reversibility"
                - "Write the top three harms as questions for the analysis"
            - name: Bias review charter and sign-off roles
              description: |-
                ## Purpose
                Without a charter, bias reviews happen when someone is worried and stop when someone is busy. A short charter saying which systems need review, who performs it, who can block a release and how disagreements are escalated makes the review a duty rather than a favour.

                ## Milestones
                1. A charter of no more than three pages covering scope, triggers, roles and escalation.
                2. A named reviewer who is independent of the team that built each model.
                3. A named person with authority to delay a release on fairness grounds.
                4. The charter approved by the risk owner or equivalent executive.

                ## Notes
                The reviewer who can block a release should not report to the person whose target the release serves.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "An approved charter names the systems in scope, the independent reviewer and the person with authority to block a release."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Ask the agent to draft a three-page bias review charter from your inventory"
                - "Name the reviewer and the person who can block a release"
                - "Write the escalation route for a disputed finding"
                - "Get the charter approved by the risk owner"
            - name: Baseline disparity report for the riskiest model
              description: |-
                ## Purpose
                Until one model has been measured, every conversation about bias is hypothetical. A first report on the highest-risk model, with outcome rates and error rates by group and their confidence intervals, gives the organisation its starting numbers and shows what a review actually involves.

                ## Milestones
                1. Group outcome rates and selection ratios computed on a recent, representative period.
                2. False positive and false negative rates by group, with confidence intervals.
                3. Calibration by group checked where the model outputs a probability.
                4. Findings, limitations and open questions written up in under ten pages.

                ## Notes
                Report sample sizes beside every rate. A gap measured on 40 people is a question, not a finding.
              priority: high
              deadlineOffsetDays: 60
              frontmatter:
                mode: research
                output_kind: deliverable
                success_criteria: "A report giving outcome and error rates by group with intervals and sample sizes for the riskiest model is shared with its owner."
                cadence: one-shot
                effort_hours_estimate: "24"
              tasks:
                - "Pull a recent period of decisions with outcomes and group attributes"
                - "Compute selection rates and error rates for each group"
                - "Add confidence intervals and sample sizes to every figure"
                - "Write up findings and limitations for the model owner"
            - name: Group labels when attributes are not collected
              description: |-
                ## Purpose
                Many organisations deliberately do not record ethnicity or disability, which leaves bias undetectable rather than absent. Deciding between a voluntary self-identification survey, a privacy-preserving trusted third party or a statistical inference method, each with its error and consent trade-offs, is often the hardest step in the whole review.

                ## Milestones
                1. The attributes missing for each high-risk decision listed.
                2. Three options compared on accuracy, consent, legal risk and cost.
                3. A method chosen with counsel and the privacy officer, and its error rate estimated.
                4. Rules written so inferred labels are used only for aggregate bias testing.

                ## Notes
                Inferred group labels carry their own errors, which can hide or exaggerate a disparity. Report results under the inference uncertainty, and never use inferred labels to make decisions about individuals.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A recorded decision on how group labels will be obtained for each high-risk decision, approved by counsel and the privacy officer."
                cadence: one-shot
                effort_hours_estimate: "12"
              tasks:
                - "List the group attributes missing for each high-risk decision"
                - "Compare self-identification, trusted third party and inference options"
                - "Review the preferred option with counsel and the privacy officer"
                - "Write the rule limiting inferred labels to aggregate testing"
            - name: Model card for a production model
              description: |-
                ## Purpose
                Model cards record what a model is for, what it must not be used for, how it performs by group and what its known limitations are. Writing one for a model already in production usually turns up an undocumented use or an untested group, and it becomes the page every reviewer and auditor asks for first.

                ## Milestones
                1. Intended use and explicitly out-of-scope uses written in plain language.
                2. Training data period, sources and known gaps described.
                3. Performance and fairness metrics reported by group with sample sizes.
                4. Known limitations, caveats and the owner's contact listed.
                5. The card versioned beside the model so each release has its own card.
              priority: medium
              deadlineOffsetDays: 45
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A versioned model card with intended use, out-of-scope uses, group metrics and limitations is published for one production model."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Interview the model owner about intended and forbidden uses"
                - "Fill in training data, metrics by group and limitations"
                - "Store the card beside the model version it describes"
                - "Check every production model has a current model card @recurring(quarterly)"
            - name: Datasheet for a training dataset
              description: |-
                ## Purpose
                Most bias enters through the data: who was sampled, who labelled it, which period it covers and what was dropped in cleaning. A datasheet that answers those questions for the main training set makes representation gaps and label problems visible before anyone tunes a model on top of them.

                ## Milestones
                1. Collection method, period and population of the dataset described.
                2. Group representation compared with the population the model will serve.
                3. Labelling process, labeller instructions and agreement rates recorded.
                4. Rows removed during cleaning counted by group.

                ## Notes
                Counting dropped rows by group is the step most often skipped, and missing-value filters frequently remove one group far more than others.
              priority: medium
              deadlineOffsetDays: 60
              frontmatter:
                mode: research
                output_kind: artifact
                success_criteria: "A datasheet for the main training dataset shows group representation against the served population and rows dropped by group."
                cadence: one-shot
                effort_hours_estimate: "10"
              tasks:
                - "Find who collected and labelled the training data and when"
                - "Compare group shares with the population the model serves"
                - "Count rows removed in cleaning for each group"
                - "Write the datasheet and link it from the model card"
            - name: Pre-release bias review gate
              description: |-
                ## Purpose
                Fairness checks that happen after launch are apologies. A gate in the release process requiring a completed bias review, with metrics inside tolerance or a signed exception, for every high-risk model change means no new version reaches people without someone having looked.

                ## Milestones
                1. A written trigger list: new model, retrain, new feature, new population or new use.
                2. A checklist the reviewer completes before sign-off.
                3. An exception route requiring a named approver and an expiry date.
                4. Every high-risk release in the last quarter passed through the gate.

                ## Notes
                Start from the **Compliance control** template. Exceptions without an expiry date become permanent.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every high-risk model release in a quarter has a completed bias review or a signed, dated exception on file."
                cadence: rolling
              tasks:
                - "Write the list of changes that trigger a bias review"
                - "Add the review step to the release checklist for high-risk models"
                - "Agree who signs exceptions and the maximum exception length"
                - "Review open gate exceptions and their expiry dates @recurring(monthly:16)"
            - name: Quarterly fairness report to the risk committee
              description: |-
                ## Purpose
                Leaders hear about bias when it becomes a complaint or a headline. A short quarterly report giving the status of every high-risk model, metrics against tolerance, open findings and overdue fixes keeps fairness on the same footing as credit, security and operational risk.

                ## Milestones
                1. A one-page format agreed with the committee chair.
                2. Each high-risk model shown as within tolerance, under watch or breached.
                3. Open findings listed with owners and due dates.
                4. Four consecutive quarterly reports delivered on time.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Four consecutive quarterly fairness reports reach the risk committee, each with model status and open findings."
                cadence: rolling
              tasks:
                - "Agree the one-page report format with the committee chair"
                - "Compile model status and open findings for the committee @recurring(quarterly)"
                - "Record the committee's decisions in the findings log"
            - name: Monthly outcome disparity check on live decisions
              description: |-
                ## Purpose
                Fairness at validation is no guarantee: a model can drift unfair as the applicant mix, the economy or a downstream policy changes. A monthly check of live selection rates and, where outcomes are known, error rates by group catches a widening gap within weeks instead of at the annual audit.

                ## Milestones
                1. A query or job producing group outcome rates for each high-risk model.
                2. Alert thresholds tied to the tolerances in the metric decision record.
                3. Each month's figures added to a running log with a short comment.
                4. Any breach opened as a finding within five working days.

                ## Notes
                Start from the **Metrics log** template. Keep this to group outcomes; general accuracy and data drift belong to model monitoring.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Six consecutive months of group outcome rates logged for every high-risk model, with every breach opened as a finding."
                cadence: rolling
              tasks:
                - "Write the query that produces group outcome rates per model"
                - "Set alert thresholds from the agreed tolerances"
                - "Run the disparity check and log each model's figures @recurring(monthly:12)"
            - name: Bias findings log and remediation tracker
              description: |-
                ## Purpose
                Findings raised in meetings or emails tend to vanish when the analyst moves on. A single log recording each disparity, its severity, the agreed fix, the owner and the date it was verified closed gives auditors and leaders one place to see whether problems are actually being fixed.

                ## Milestones
                1. A log with columns for model, group, metric, severity, owner, fix and verified date.
                2. All past findings from reports and emails entered.
                3. A rule that a finding closes only after the fix is re-measured.
                4. No high-severity finding older than ninety days without an approved plan.

                ## Notes
                Start from the **Risk register** template.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every bias finding has an owner and status in one log, and none closes without a re-measured result."
                cadence: rolling
              tasks:
                - "Set up the findings log from the risk register template"
                - "Enter every past finding from reports and email threads"
                - "Review open findings, owners and overdue fixes @recurring(monthly:25)"
            - name: Complaint and appeal review for automated decisions
              description: |-
                ## Purpose
                People affected by a decision often notice unfairness long before a metric does, but their complaints sit in a support queue tagged as billing or account issues. Routing complaints and appeals about automated decisions to the bias reviewer, and reading them for patterns by group, turns lived experience into evidence.

                ## Milestones
                1. A tag or category for complaints about automated decisions agreed with support.
                2. A monthly extract of tagged complaints and appeal outcomes.
                3. Appeal overturn rates compared across groups where data allows.
                4. Recurring themes raised as findings in the log.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Monthly reviews of automated-decision complaints and appeals run for six months, with themes logged as findings."
                cadence: rolling
              tasks:
                - "Agree a complaint tag for automated decisions with the support lead"
                - "Read the month's tagged complaints and appeal outcomes for patterns @recurring(monthly:21)"
                - "Compare appeal overturn rates by group each quarter"
            - name: Annual re-review of every high-risk model
              description: |-
                ## Purpose
                Populations, laws and business uses change, and a review from two years ago describes a model nobody runs any more. A full yearly re-review of each high-risk model, repeating the disparity analysis and checking its use against the model card, keeps the evidence current.

                ## Milestones
                1. A calendar placing each high-risk model's annual review in a fixed month.
                2. Each re-review repeating the baseline analysis on the latest year of data.
                3. Actual uses compared with the intended uses on the model card.
                4. Results added to the findings log and the model card updated.
              priority: high
              frontmatter:
                mode: operating
                output_kind: event-completion
                success_criteria: "Every high-risk model has a completed re-review dated within the last twelve months."
                cadence: cyclic
              tasks:
                - "Assign each high-risk model a fixed review month"
                - "Run the full re-review for models due this year @recurring(yearly)"
                - "Check how each model is really used against its model card"
            - name: Algorithmic regulation and standards watch
              description: |-
                ## Purpose
                Rules on automated decisions are arriving quickly, from AI-specific laws to employment and credit rules and published risk management frameworks. A quarterly scan, logged and passed to counsel, means obligations such as impact assessments or audit publication are known months before they apply.

                ## Milestones
                1. A list of the laws, regulators and standards bodies relevant to your sectors and countries.
                2. A quarterly log entry of changes, each with a one-line implication.
                3. Every material change sent to counsel for a view.
                4. The charter and metric record updated when counsel confirms a new duty.

                ## Notes
                This log tracks what changed and who was told. Counsel decides what it means for you.
              priority: medium
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "Four quarterly regulation scans logged in a year, each material change sent to counsel with their response recorded."
                cadence: rolling
              tasks:
                - "List the regulators and standards bodies to watch for your sectors"
                - "Scan for new rules on automated decisions and log changes @recurring(quarterly)"
                - "Send material changes to counsel and record their view"
            - name: Human override monitoring by group
              description: |-
                ## Purpose
                Keeping a human in the loop only helps if the human's own judgements are fair. Tracking how often reviewers override model recommendations, and in which direction, for each group shows whether people are correcting the model's bias or quietly adding their own.

                ## Milestones
                1. Overrides captured as data with direction, reason and reviewer.
                2. Override rates and directions compared across groups monthly.
                3. Any reviewer or team with a consistent skew discussed with their manager.
                4. Override reasons reviewed for patterns that suggest a model fix.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Override rates by group and direction reported monthly for six months, with any persistent skew followed up."
                cadence: rolling
              tasks:
                - "Make sure overrides are recorded with direction and a reason code"
                - "Compare override rates by group and direction @recurring(monthly:4)"
                - "Raise any persistent reviewer skew with the team manager"
            - name: Fairness tests in the model training pipeline
              description: |-
                ## Purpose
                Manual reviews catch problems once; automated tests catch them on every retrain. Adding group metric checks to the training pipeline, so a run fails or warns when a metric leaves tolerance, makes fairness a property the pipeline enforces rather than a document someone has to remember.

                ## Milestones
                1. Group metric tests written for each high-risk model using the agreed metrics.
                2. Tests running automatically on every training run and pull request.
                3. A failing test blocking promotion unless an exception is approved.
                4. Test history kept so trends across retrains are visible.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Every high-risk model's pipeline runs group fairness tests on each retrain, and a failing test blocks promotion."
                cadence: phased
                effort_hours_estimate: "20"
              tasks:
                - "Write a group metric test for the riskiest model"
                - "Wire the test into the training pipeline as a promotion check"
                - "Extend the tests to every high-risk model"
                - "Review fairness test failures and warnings from recent runs @recurring(monthly:28)"
            - name: Fairness metrics and their trade-offs
              description: |-
                ## Purpose
                Reviewers who know only one fairness metric tend to declare a model fair or unfair on that one alone. Studying the main group metrics, why they conflict when base rates differ and what each assumes about the world gives you the vocabulary to explain a trade-off to a decision owner.

                ## Milestones
                1. Plain-language definitions written for five common group fairness metrics.
                2. The impossibility result on calibration and error-rate balance explained in your own words.
                3. All five metrics computed on one real or public dataset.
                4. A one-page note on which metric suits which kind of decision.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A one-page note explaining five fairness metrics and their conflicts, backed by a worked example on real data."
                cadence: phased
                effort_hours_estimate: "15"
              tasks:
                - "Read a survey paper on group fairness definitions"
                - "Write one-paragraph definitions of five metrics"
                - "Compute all five on a public benchmark dataset"
                - "Summarise which metric suits which decision in one page"
            - name: Intersectional analysis with small groups
              description: |-
                ## Purpose
                Gaps often appear only where groups intersect, such as older women or young disabled men, and those cells are small. Learning to estimate rates with honest uncertainty, set minimum cell sizes and use shrinkage or Bayesian methods stops you both missing real harm and reporting noise as discrimination.

                ## Milestones
                1. Minimum cell size and suppression rules written for reports.
                2. Confidence or credible intervals produced for every intersectional rate.
                3. One analysis comparing raw and shrunk estimates for small cells.
                4. A short guide for colleagues on reading intersectional results.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A written guide with minimum cell sizes and an intersectional worked example showing intervals for every rate."
                cadence: phased
                effort_hours_estimate: "14"
              tasks:
                - "Choose two attributes and build the intersectional table for one model"
                - "Add intervals and flag cells below the minimum size"
                - "Compare raw and shrunk estimates for the smallest cells"
                - "Write a one-page guide to reading intersectional results"
            - name: Sources of bias in data and labels
              description: |-
                ## Purpose
                Most unfair models are trained faithfully on unfair data, through historical decisions, uneven measurement, missing groups or labels that stand in for the wrong thing. Learning the common sources, with a real example of each, lets you ask the right questions of a dataset before running a single metric.

                ## Milestones
                1. Historical, representation, measurement, aggregation and label bias each explained with an example.
                2. Each source mapped to a check you can run on a dataset.
                3. The checks applied to one of your own training sets.
                4. Findings added to that dataset's datasheet.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A checklist of bias sources with one data check each, applied to one internal training set and recorded in its datasheet."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "Read a taxonomy of bias sources in machine learning"
                - "Write one data check for each source"
                - "Run the checks on one internal training set"
                - "Add the results to the dataset's datasheet"
            - name: Disparate impact law and guidance with counsel
              description: |-
                ## Purpose
                Analysts often quote screening heuristics such as the four-fifths rule as if they were legal tests, and lawyers often lack the statistics to read a disparity report. A structured series of sessions with counsel on how discrimination law treats unequal outcomes in your sectors builds a shared language without anyone giving legal advice outside their role.

                ## Milestones
                1. Three sessions held with counsel on disparate treatment, disparate impact and justification.
                2. A glossary pairing legal and statistical terms.
                3. Clear notes on which questions analysts must always pass to counsel.
                4. A sample report reviewed by counsel for wording that could be misread.

                ## Notes
                This is about working together, not drawing legal conclusions. Analysts describe the numbers; counsel decides what they mean in law.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Three sessions with counsel completed and a shared legal and statistical glossary published to the review team."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Ask counsel for three sessions on discrimination law and automated decisions"
                - "Build a glossary pairing legal and statistical terms"
                - "List the questions analysts must always pass to counsel"
                - "Have counsel review the wording of one past report"
            - name: Explainability methods for bias investigation
              description: |-
                ## Purpose
                Once a gap is found, the next question is which features are driving it. Learning feature attribution, partial dependence and counterfactual explanations, and their limits on correlated data, lets you trace a disparity to a proxy or a threshold instead of guessing.

                ## Milestones
                1. Attribution, partial dependence and counterfactual methods each tried on one model.
                2. Feature attributions compared across groups to find the main drivers of a gap.
                3. The limits of each method under correlated features written down.
                4. One investigation note tracing a real disparity to its likely drivers.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "An investigation note that traces one measured disparity to its likely drivers using two explanation methods, with limits stated."
                cadence: phased
                effort_hours_estimate: "16"
              tasks:
                - "Run feature attributions for one model on a sample of decisions"
                - "Compare average attributions between the groups with the largest gap"
                - "Generate counterfactuals for a sample of rejected cases"
                - "Write up which features drive the gap and the method limits"
            - name: Bias testing for language model features
              description: |-
                ## Purpose
                Chatbots, summarisers and text classifiers can treat names, dialects or topics differently in ways group outcome tables never show. Learning prompt-based probes, paired counterfactual inputs and published social bias benchmarks lets you test generative features that sit inside customer or staff decisions.

                ## Milestones
                1. A set of paired prompts varying only names, pronouns or dialect.
                2. Outputs scored for differences in tone, refusal rate or content.
                3. One public bias benchmark run and its limits noted.
                4. A short test protocol for language features in the release gate.

                ## Notes
                Benchmarks cover only the groups and languages their authors chose. Build paired prompts from your own users' real requests.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A written test protocol for language features, proven on one feature with paired prompts and one public benchmark."
                cadence: phased
                effort_hours_estimate: "14"
              tasks:
                - "Collect fifty real requests the language feature receives"
                - "Create paired versions that change only names or dialect"
                - "Score paired outputs for tone, refusals and content differences"
                - "Write the test protocol for the release gate"
            - name: Algorithmic audit case study reading group
              description: |-
                ## Purpose
                Some of the clearest lessons in this field come from published audits: a health risk score that used cost as a proxy for need, a hiring model that learned from past hires, a risk tool argued over by two sides using different metrics. A monthly reading group on one case keeps reviewers sharp and gives newer colleagues the shared stories the field relies on.

                ## Milestones
                1. A reading list of twelve published audits and investigations.
                2. One case discussed each month, with a written note on what failed.
                3. Each case's lesson mapped to a step in your own review process.
                4. At least one process change adopted from the reading.

                ## Notes
                Start from the **Reading queue** template.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Twelve case studies discussed in a year, each with a written lesson, and at least one process change adopted."
                cadence: rolling
              tasks:
                - "Build a reading list of twelve published algorithmic audits"
                - "Discuss one case and write its lesson in a short note @recurring(monthly:7)"
                - "Map each lesson to a step in your review process"
            - name: Removing or replacing a proxy variable
              description: |-
                ## Purpose
                Postcode, school attended, gaps in employment and device type can carry group information into a model that never sees the protected attribute. Testing the model with and without a suspected proxy, and measuring both the fairness and the accuracy change, turns a hunch into a decision the owner can sign.

                ## Milestones
                1. The suspected proxy's association with group membership measured.
                2. The model retrained without it, or with a less revealing version.
                3. Fairness metrics and accuracy compared across both versions.
                4. A decision recorded on which version ships, with the trade-off stated.

                ## Notes
                Dropping one proxy rarely removes the information, because other features carry it too. Measure the outcome, not just the feature list.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A recorded decision on a suspected proxy, backed by a side-by-side comparison of fairness and accuracy with and without it."
                cadence: one-shot
                effort_hours_estimate: "12"
              tasks:
                - "Measure how strongly the suspected proxy predicts group membership"
                - "Retrain the model without the proxy or with a coarser version"
                - "Compare fairness and accuracy for both versions"
                - "Record the shipping decision and its trade-off"
            - name: Reweighting or resampling training data
              description: |-
                ## Purpose
                When a group is under-represented or its historical outcomes reflect past discrimination, pre-processing such as reweighting, resampling or relabelling can reduce the gap before training. Trying it in a controlled comparison shows whether it helps without simply moving the error to another group.

                ## Milestones
                1. Two pre-processing methods chosen and their assumptions written down.
                2. Models trained with each method and with no treatment.
                3. Group metrics, overall accuracy and intersectional effects compared.
                4. A recommendation to the owner on whether to adopt either method.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A comparison of two pre-processing methods against an untreated baseline, with a written recommendation to the model owner."
                cadence: one-shot
                effort_hours_estimate: "16"
              tasks:
                - "Choose two pre-processing methods and note their assumptions"
                - "Train treated and untreated models on the same split"
                - "Compare group, overall and intersectional metrics"
                - "Write the recommendation for the model owner"
            - name: Group-aware decision threshold review
              description: |-
                ## Purpose
                Adjusting thresholds per group can equalise error rates quickly, but in some jurisdictions and sectors using a protected attribute at decision time is itself unlawful. Modelling the effect of threshold changes and taking the options to counsel before anyone deploys one keeps a fairness fix from creating a legal problem.

                ## Milestones
                1. The effect of single and group-specific thresholds modelled on recent data.
                2. Each option's change in outcomes and error rates by group tabulated.
                3. Counsel's view on whether group-specific thresholds are permitted recorded.
                4. A decision on the threshold approach signed by the decision owner.

                ## Notes
                Never deploy group-specific thresholds without counsel's written view for that decision and place.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A signed threshold decision for one model, supported by modelled outcomes and counsel's written view."
                cadence: one-shot
                effort_hours_estimate: "10"
              tasks:
                - "Model outcomes under the current threshold and two alternatives"
                - "Tabulate outcome and error rate changes by group"
                - "Ask counsel whether group-specific thresholds are permitted here"
                - "Record the threshold decision with the owner's signature"
            - name: Fixing a biased target label
              description: |-
                ## Purpose
                Even a perfectly accurate model can be unfair if it predicts the wrong thing, such as past spending instead of need, or arrests instead of offending. Examining what the target label really measures, and testing a better one, often removes more bias than any algorithmic fix.

                ## Milestones
                1. The target label's definition and how it was produced written down.
                2. Evidence gathered on whether the label differs by group for reasons unrelated to the true outcome.
                3. At least one alternative label defined and its data sourced.
                4. A model trained on the alternative label and compared with the original.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A comparison of the original and an alternative target label, with group metrics for both and a recorded choice."
                cadence: phased
                effort_hours_estimate: "24"
              tasks:
                - "Write down exactly how the current target label is produced"
                - "Ask domain experts what the label is meant to stand for"
                - "Define and source one alternative label"
                - "Train and compare a model on the alternative label"
            - name: Closing a data gap for an under-served group
              description: |-
                ## Purpose
                A model that performs badly for one group because there are too few examples will not be fixed by clever reweighting. Planning targeted data collection, through partnerships, new channels or labelled samples, with consent and privacy built in, addresses the cause rather than the symptom.

                ## Milestones
                1. The size of the gap stated: current examples, error rate and the number needed.
                2. Collection options costed, including partnerships and new labelling.
                3. Consent and privacy terms for the new data approved.
                4. New data collected and the model's error rate for the group re-measured.
              priority: low
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "New data collected for an under-served group and the model's error rate for that group re-measured against the baseline."
                cadence: phased
                effort_hours_estimate: "30"
              tasks:
                - "Estimate how many more examples the group needs"
                - "Cost three ways of collecting them"
                - "Get consent and privacy terms approved"
                - "Retrain and re-measure the group's error rate"
            - name: Choosing a fairness testing toolkit
              description: |-
                ## Purpose
                Several open-source libraries compute group metrics, mitigation methods and dashboards, and commercial platforms add monitoring and reporting. Choosing one on fit with your stack, metric coverage and auditability, instead of each analyst writing their own, makes results comparable across teams.

                ## Milestones
                1. Requirements listed: metrics needed, languages, mitigation methods and reporting.
                2. Three toolkits tested on the same model and dataset.
                3. Each scored on coverage, correctness checks, maintenance and licence.
                4. A standard toolkit chosen and a starter notebook published.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "One fairness toolkit chosen after a scored comparison of three, with a starter notebook available to every reviewer."
                cadence: one-shot
                effort_hours_estimate: "12"
              tasks:
                - "List the metrics and mitigation methods you need"
                - "Run three toolkits on the same model and data"
                - "Check each toolkit's figures against a hand calculation"
                - "Publish a starter notebook for the chosen toolkit"
            - name: Vendor model bias due diligence
              description: |-
                ## Purpose
                Buying a hiring, credit or fraud scoring tool does not transfer responsibility for its outcomes. A standard set of questions and evidence requests for vendors, covering training data, group testing, audit history and your right to test, gives procurement a basis to compare suppliers and to say no.

                ## Milestones
                1. A vendor questionnaire covering data, testing, audits, monitoring and contract rights.
                2. Evidence requested and received from each vendor in scope.
                3. Your own disparity test run on the vendor's outputs where possible.
                4. Contract terms for testing access and notification of changes agreed.

                ## Notes
                Start from the **Vendor** template. A vendor that will not let you test its outputs on your own population is a finding in itself.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "Every vendor scoring tool in scope has a completed questionnaire, an independent disparity test or a recorded refusal."
                cadence: one-shot
                effort_hours_estimate: "10"
              tasks:
                - "Ask the agent to draft a vendor bias due diligence questionnaire"
                - "Send the questionnaire to each vendor in scope"
                - "Run your own disparity test on vendor outputs"
                - "Request updated bias test results from each vendor @recurring(yearly)"
            - name: Go or no-go decision on a problem model
              description: |-
                ## Purpose
                Sometimes the honest finding is that a model cannot be made fair enough for its use, or that the manual process it replaced was no better. A structured decision comparing the model, a fixed version, a simpler rule and the human process gives leaders a defensible choice, including the choice to retire it.

                ## Milestones
                1. Four options defined: current model, mitigated model, simple rule and human process.
                2. Each option measured on fairness, accuracy, cost and appeal rates.
                3. Affected teams consulted on the operational impact of each.
                4. A decision recorded by the accountable executive, with reasons.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A signed decision on whether a problem model continues, changes or retires, backed by a four-option comparison."
                cadence: one-shot
                effort_hours_estimate: "14"
              tasks:
                - "Define the four options for the problem model"
                - "Measure each option on fairness, accuracy and cost"
                - "Consult the teams who run the decision day to day"
                - "Present the options to the accountable executive"
            - name: Independent third-party bias audit
              description: |-
                ## Purpose
                Internal reviews are necessary but rarely convince regulators, customers or the public on their own, and some rules now require an independent audit for certain tools. Scoping, procuring and supporting an external audit of one high-risk system, with clear data access terms, produces evidence others will accept.

                ## Milestones
                1. Audit scope, questions and the system under review agreed.
                2. An auditor chosen with no stake in the system's success.
                3. Data access arranged under a written agreement that protects personal data.
                4. The audit report received and every recommendation entered in the findings log.
              priority: high
              deadlineOffsetDays: 120
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "An independent audit report on one high-risk system is received, with each recommendation logged with an owner."
                cadence: one-shot
                effort_hours_estimate: "30"
              tasks:
                - "Write a two-page audit scope for the chosen system"
                - "Shortlist three independent auditors and check for conflicts"
                - "Agree data access terms with the privacy officer"
                - "Log every audit recommendation with an owner and date"
            - name: Pre-launch fairness red-team session
              description: |-
                ## Purpose
                Teams that built a system are the worst placed to imagine how it fails for people unlike them. A half-day session before launch, with colleagues from support, legal, accessibility and affected communities trying to break it, surfaces failure cases the metrics were never set up to measure.

                ## Milestones
                1. A diverse group of eight to twelve testers invited from outside the build team.
                2. Realistic test cases and personas prepared in advance.
                3. Every failure logged with steps to reproduce and the group affected.
                4. Launch-blocking issues fixed or signed off before release.
              priority: medium
              deadlineOffsetDays: 30
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A red-team session held before launch, with every failure logged and launch-blocking issues resolved or signed off."
                cadence: one-shot
                effort_hours_estimate: "10"
              tasks:
                - "Invite eight to twelve testers from outside the build team"
                - "Prepare test personas and realistic edge cases"
                - "Run the session and log every failure"
                - "Agree which failures block launch"
            - name: Bias inquiry response rehearsal
              description: |-
                ## Purpose
                When a regulator, journalist or researcher asks how a model treats a group, the organisation usually has days, not weeks, to answer accurately. Preparing a response pack and rehearsing the first 72 hours means the reply is consistent, factual and approved rather than improvised.

                ## Milestones
                1. A response pack with the model card, latest metrics and review history for each high-risk model.
                2. Roles agreed for data, legal, communications and the executive spokesperson.
                3. A tabletop exercise run on a realistic inquiry.
                4. Gaps found in the exercise fixed within a month.
              priority: medium
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A tabletop exercise on a bias inquiry completed, with a response pack ready for every high-risk model."
                cadence: one-shot
                effort_hours_estimate: "12"
              tasks:
                - "Assemble a response pack for each high-risk model"
                - "Agree roles for data, legal and communications"
                - "Run a two-hour tabletop on a realistic inquiry"
                - "Fix the gaps the exercise exposed"
            - name: Annual algorithmic transparency statement
              description: |-
                ## Purpose
                Customers and the public increasingly expect to know where automated decisions are used and how they are checked, and some rules require publication. A yearly statement listing the systems in use, how fairness is tested, how to appeal and what changed builds trust and forces the internal record to be complete.

                ## Milestones
                1. The list of public-facing automated decisions confirmed.
                2. A plain-language description of testing, appeals and human review.
                3. Legal and communications review completed.
                4. The statement published and its date added to the yearly calendar.
              priority: medium
              deadlineOffsetDays: 180
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "A transparency statement listing automated decisions, testing and appeal routes is published and dated."
                cadence: one-shot
                effort_hours_estimate: "16"
              tasks:
                - "List the automated decisions that affect customers or the public"
                - "Draft a plain-language section on testing and appeals"
                - "Send the draft for legal and communications review"
                - "Publish the updated transparency statement @recurring(yearly)"
            - name: Board briefing on algorithmic fairness risk
              description: |-
                ## Purpose
                Boards are asked to oversee AI risk but are rarely shown what a disparity looks like or what the organisation does about it. A prepared briefing with the inventory, two real findings and their fixes, and the decisions the board needs to make gives directors something concrete to govern.

                ## Milestones
                1. A slot on the board or risk committee agenda confirmed.
                2. A paper of no more than six pages with inventory, findings and fixes.
                3. Two or three decisions or approvals the board is asked for stated clearly.
                4. The board's decisions recorded and actions assigned.

                ## Notes
                Start from the **Board meeting** template.
              priority: medium
              deadlineOffsetDays: 90
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A board paper on algorithmic fairness presented, with the board's decisions minuted and actions assigned."
                cadence: one-shot
                effort_hours_estimate: "10"
              tasks:
                - "Ask the company secretary for a board agenda slot"
                - "Draft a six-page paper with two real findings and fixes"
                - "State the decisions the board is being asked to make"
                - "Record the board's decisions and assign actions"
            - name: Bias review for an academic predictive study
              description: |-
                ## Purpose
                A researcher publishing a predictive model, for example a clinical risk score or a dropout predictor, is expected by ethics boards and journals to report performance by subgroup. Building subgroup analysis and limitations into the protocol before data access keeps the study honest and the review shorter.

                ## Milestones
                1. Subgroups and fairness metrics named in the pre-registered protocol.
                2. Ethics board approval covering the use of sensitive attributes.
                3. Subgroup results with intervals included in the main paper or supplement.
                4. A limitations section naming groups the data could not assess.

                ## Notes
                Check whether the target journal follows a reporting guideline for prediction models that asks for subgroup results.
              priority: medium
              frontmatter:
                mode: research
                output_kind: deliverable
                success_criteria: "A submitted manuscript reports pre-registered subgroup metrics with intervals and names the groups it could not assess."
                cadence: phased
                effort_hours_estimate: "20"
              tasks:
                - "Add subgroups and fairness metrics to the study protocol"
                - "Confirm the ethics approval covers sensitive attributes"
                - "Report subgroup results with intervals in the manuscript"
                - "Write a limitations section on groups not assessed"
            - name: First bias review programme for a large organisation
              description: |-
                ## Purpose
                Large organisations new to this often stall trying to design a complete governance framework before reviewing a single model. A ninety-day starter programme that reviews the three riskiest systems, writes up what was learned and only then proposes a standing process gets real findings in front of leaders quickly.

                ## Milestones
                1. An executive sponsor and a small working group named.
                2. Three highest-risk systems reviewed end to end.
                3. A lessons note on data access, attribute gaps and ownership problems.
                4. A proposal for the standing review process, sized from real effort.
              priority: medium
              deadlineOffsetDays: 90
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "Three high-risk systems reviewed within ninety days and a sized proposal for a standing process presented to the sponsor."
                cadence: phased
                effort_hours_estimate: "60"
              tasks:
                - "Ask a senior leader to sponsor a ninety-day starter programme"
                - "Pick the three highest-risk systems from the inventory"
                - "Review each one end to end and log the effort"
                - "Present a standing process proposal sized from the pilot"
            - name: Hiring and promotion tool bias review
              description: |-
                ## Purpose
                CV screeners, assessment games, interview scoring and promotion models decide who gets work, and employment law in many countries scrutinises unequal selection rates closely. Reviewing each stage of the funnel by group, not just the final offer, shows where candidates are being lost and whether a tool is responsible.

                ## Milestones
                1. Every automated or scored stage of the hiring and promotion funnel mapped.
                2. Selection rates by group computed at each stage.
                3. Stages with the largest gaps examined with HR and counsel.
                4. Changes agreed for any tool that cannot be justified.

                ## Notes
                Selection-rate ratios are a screening signal. Whether a gap is lawful or justified is for counsel and HR to judge.
              priority: high
              frontmatter:
                mode: research
                output_kind: deliverable
                success_criteria: "Selection rates by group are reported for every stage of the hiring funnel, with each large gap reviewed by HR and counsel."
                cadence: phased
                effort_hours_estimate: "20"
              tasks:
                - "Map each scored or automated stage of the hiring funnel"
                - "Compute selection rates by group at each stage"
                - "Review the largest gaps with HR and counsel"
                - "Rerun the stage-by-stage analysis on the latest hiring cycle @recurring(quarterly)"
            - name: Credit and lending decision fairness review
              description: |-
                ## Purpose
                Lending models face some of the oldest fair lending rules, and declined applicants are often owed accurate reasons. Reviewing approval rates, pricing and the accuracy of reason codes by group, alongside your compliance team, shows whether the model and the explanations it gives would stand up to examination.

                ## Milestones
                1. Approval, pricing and limit outcomes analysed by group with controls agreed with compliance.
                2. A sample of decline reasons checked against what actually drove each score.
                3. Less discriminatory alternative models explored and documented.
                4. Findings and any changes recorded with compliance sign-off.

                ## Notes
                Fair lending duties vary by country and product. Compliance and counsel define the tests; this project assembles the evidence.
              priority: medium
              frontmatter:
                mode: research
                output_kind: deliverable
                success_criteria: "A fair lending review of approvals, pricing and decline reasons is signed off by compliance, with alternatives documented."
                cadence: phased
                effort_hours_estimate: "30"
              tasks:
                - "Agree the analysis plan and controls with the compliance team"
                - "Analyse approvals, pricing and limits by group"
                - "Sample decline reasons and check their accuracy @recurring(monthly:18)"
                - "Document any less discriminatory alternative tested"
            - name: Clinical risk score equity review
              description: |-
                ## Purpose
                Risk scores that decide who gets extra care, screening or a specialist referral can under-serve groups whose past access to care was lower. Working with clinicians to check calibration and referral rates by group, and whether the score's inputs reflect access rather than need, protects patients from a hidden barrier.

                ## Milestones
                1. The score's inputs and target reviewed with clinicians for access-related bias.
                2. Calibration and referral rates compared across groups.
                3. Clinical leads' view on acceptable differences recorded.
                4. Any change taken through the organisation's clinical safety process.

                ## Notes
                Clinical decisions stay with clinicians. The review supplies evidence to the clinical safety or governance process.
              priority: medium
              frontmatter:
                mode: service
                output_kind: deliverable
                success_criteria: "An equity review of one clinical score, with calibration by group, is accepted by the clinical safety or governance group."
                cadence: phased
                effort_hours_estimate: "24"
              tasks:
                - "Review the score's inputs and target with two clinicians"
                - "Compare calibration and referral rates by group"
                - "Present findings to the clinical safety group"
                - "Record the group's decision and any change requested"
            - name: Public service eligibility and fraud flag review
              description: |-
                ## Purpose
                Algorithms that flag benefit claims for fraud checks or rank cases for inspection impose real burdens, and errors fall hardest on people with the least capacity to challenge them. Reviewing who gets flagged, how often flags prove right for each group and how easily people can contest them is a public interest duty as much as a technical one.

                ## Milestones
                1. Flag rates and confirmed-fraud rates computed by group.
                2. The cost of a false flag to the person described and quantified where possible.
                3. The contest and appeal route tested from the claimant's side.
                4. Findings shared with the service owner and any oversight body.
              priority: medium
              frontmatter:
                mode: service
                output_kind: deliverable
                success_criteria: "Flag and confirmed-fraud rates by group reported to the service owner, with the appeal route tested and any gaps logged."
                cadence: phased
                effort_hours_estimate: "24"
              tasks:
                - "Compute flag rates and confirmed-fraud rates by group"
                - "Describe what a false flag costs the person flagged"
                - "Walk through the appeal route as a claimant would"
                - "Repeat the flag-rate analysis on the latest year @recurring(yearly)"
            - name: Answering customers' AI fairness questionnaires
              description: |-
                ## Purpose
                Companies selling scoring or AI products to large customers increasingly face procurement questionnaires about bias testing, data and audits, and inconsistent answers lose deals or create promises nobody keeps. A maintained library of approved answers backed by real evidence makes responses fast and true.

                ## Milestones
                1. The last ten fairness questions from customers collected.
                2. Approved standard answers written, each linked to its evidence.
                3. Legal review of any commitment the answers make.
                4. A turnaround of under five working days for new questionnaires.
              priority: low
              frontmatter:
                mode: service
                output_kind: artifact
                success_criteria: "A library of legally reviewed fairness answers, each linked to evidence, is used for every customer questionnaire."
                cadence: rolling
              tasks:
                - "Collect the fairness questions from recent customer questionnaires"
                - "Ask the agent to draft standard answers from your model cards"
                - "Have legal review every commitment in the answers"
                - "Refresh the standard answers against current evidence @recurring(quarterly)"
            - name: Fairness across countries and populations
              description: |-
                ## Purpose
                Models validated in one country or region are often deployed elsewhere, where groups, base rates and even the relevant protected characteristics differ. Testing transfer performance and fairness on each new population before rollout stops a model fair at home from failing abroad.

                ## Milestones
                1. Each population the model serves or will serve listed with its relevant groups.
                2. Performance and fairness measured separately for each population.
                3. Local experts consulted on groups the home analysis did not cover.
                4. Rollout criteria per population agreed with the owner.
              priority: low
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "Fairness and performance measured separately for every population a model serves, with rollout criteria agreed for each."
                cadence: phased
                effort_hours_estimate: "20"
              tasks:
                - "List every country or population the model serves"
                - "Ask local colleagues which groups matter in their context"
                - "Measure fairness and performance per population"
                - "Agree rollout criteria with the model owner"
            - name: Causal fairness analysis of a decision
              description: |-
                ## Purpose
                Group statistics show that outcomes differ but not why, and some differences run through legitimate factors while others run through proxies. Drawing a causal graph of the decision with domain experts and estimating path-specific or counterfactual effects separates the two in a way regulators and researchers increasingly expect.

                ## Milestones
                1. A causal graph of the decision agreed with domain experts.
                2. Paths labelled as acceptable or unacceptable with written reasons.
                3. Effects along unacceptable paths estimated with stated assumptions.
                4. Sensitivity of the conclusion to unmeasured confounding tested.

                ## Notes
                Every causal fairness result depends on the graph. Publish the graph and its assumptions with the numbers.
              priority: low
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A written causal fairness analysis with an expert-agreed graph, path-specific estimates and a sensitivity analysis."
                cadence: phased
                effort_hours_estimate: "40"
              tasks:
                - "Sketch the decision's causal graph with two domain experts"
                - "Label each path as acceptable or unacceptable"
                - "Estimate effects along unacceptable paths"
                - "Test how sensitive the result is to unmeasured confounding"
            - name: Feedback loop and long-term effect study
              description: |-
                ## Purpose
                Models that decide who gets inspected, lent to or shown opportunities also shape the data they will next be trained on, so a small bias can compound year on year. Simulating or measuring these loops over several retraining cycles shows whether a system is drifting towards a worse equilibrium.

                ## Milestones
                1. The loop described: how decisions change the next training data.
                2. A simulation or historical analysis covering at least three retraining cycles.
                3. Group outcome trends across cycles reported.
                4. Interventions such as exploration or audit samples proposed where loops are found.
              priority: low
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A study covering three or more retraining cycles reports group outcome trends and proposes an intervention if a loop is found."
                cadence: phased
                effort_hours_estimate: "40"
              tasks:
                - "Describe how the model's decisions shape its next training data"
                - "Build a simple simulation of three retraining cycles"
                - "Compare group outcome trends across the cycles"
                - "Propose an audit sample or exploration step if a loop appears"
            - name: Community panel for an automated decision
              description: |-
                ## Purpose
                People affected by a system can name harms and priorities no internal reviewer will think of, and their involvement makes trade-offs legitimate. A paid panel of affected people who review the harm map, the metric choices and the findings for one high-risk decision brings that knowledge in at the points where it changes outcomes.

                ## Milestones
                1. Eight to fifteen panel members recruited from affected groups and paid for their time.
                2. Plain-language briefing materials on the decision and its data.
                3. Two sessions held on harms, metrics and findings.
                4. A written response showing what changed because of the panel and what did not, and why.
              priority: low
              frontmatter:
                mode: service
                output_kind: event-completion
                success_criteria: "Two community panel sessions held for one decision, followed by a written response to every panel recommendation."
                cadence: phased
                effort_hours_estimate: "30"
              tasks:
                - "Partner with a community organisation to recruit panel members"
                - "Write plain-language briefing materials on the decision"
                - "Run two sessions on harms, metrics and findings"
                - "Publish a written response to each recommendation"
            - name: Publishing a bias audit method or benchmark
              description: |-
                ## Purpose
                Experienced reviewers and researchers advance the field by sharing methods others can reuse and critique. Writing up your audit method, or releasing a benchmark or synthetic dataset with documentation, after privacy and legal checks, invites external scrutiny and raises the standard for everyone.

                ## Milestones
                1. The method or benchmark scoped so no personal or confidential data is exposed.
                2. Privacy, legal and communications approval obtained.
                3. A paper, technical report or repository with full documentation released.
                4. Feedback from external reviewers collected and answered.
              priority: low
              frontmatter:
                mode: research
                output_kind: deliverable
                success_criteria: "A documented audit method or benchmark is publicly released after privacy and legal approval, with external feedback answered."
                cadence: phased
                effort_hours_estimate: "60"
              tasks:
                - "Choose the method or benchmark worth publishing"
                - "Check with privacy and legal what can be released"
                - "Write the documentation and release the report or repository"
                - "Answer feedback from external reviewers"
---

# Algorithmic Bias Review

This area is for researchers, data scientists and the risk, legal and product people in larger organisations who have to show that a model or automated decision treats groups fairly, and fix it when it does not. It starts with the foundations (an inventory, the groups and metrics that matter, a charter and a first disparity baseline), then the review machinery that runs every month and every release, the skills that make a bias finding defensible, the mitigation decisions, the dated audits and briefings, the situations that change the stakes such as hiring, lending, health and public services, and finally the specialist work on causal fairness, feedback loops and published methods.

What repeats is a monthly outcome disparity check, a monthly look at complaints and human overrides, a quarterly fairness report and regulation watch, and a yearly re-review of every high-risk model. The Compliance control, Metrics log, Risk register, Reading queue, Vendor and Board meeting templates pair with the projects that name them. Installing adds all 50 projects as active, so archive the ones that are not for you yet.
