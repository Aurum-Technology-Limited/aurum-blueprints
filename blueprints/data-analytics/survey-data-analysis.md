---
id: data-analytics.survey-data-analysis
name: Survey Data Analysis
description: "Clean, documented survey data, weights you can defend, honest margins of error, coded open text and the routines that turn each wave into findings people act on."
category: business
version: 1.0.0
tags: [data-analytics, survey-data-analysis, researcher, knowledge-worker, nonprofit, weighting, questionnaires, open-ended-coding]
author: Aurum Technology
starter_structure:
  templates:
    - metrics-log
    - reading-queue
    - feedback-themes
    - purchase-decision
    - vendor
  pillars:
    - name: Data & Analytics
      emoji: "📊"
      description: "Turning data into decisions: metrics and dashboards, data pipelines and warehouses, experimentation, forecasting and modelling, machine learning, data quality and governance."
      pillarFrontmatter:
        review_cadence: monthly
      areas:
        - name: Survey Data Analysis
          description: "Cleaning, weighting and analysing survey responses, including open text, to produce trustworthy findings and avoid common biases."
          projects:
            - name: Written analysis plan before fieldwork closes
              description: |-
                ## Purpose
                Analysis decided after the data arrives tends to chase whatever looks interesting, and a survey with no stated questions produces fifty tables and no answer. Writing down the three to five decisions the survey must inform, the key measures, the subgroups to compare and the tests to run, before the survey closes, keeps the findings honest and the report short. It also shows early which questions nobody will use, while they can still be cut.

                ## Milestones
                1. A one-page plan naming the decisions the survey informs and who will make them.
                2. Each research question linked to the questionnaire items that answer it.
                3. The subgroups to be compared listed, each with its expected base size.
                4. Primary measures and tests marked as planned, so later extras are labelled exploratory.
                5. The plan dated and shared with the survey sponsor before the close date.

                ## Notes
                Anything you run that is not in the plan is fine, but report it as exploratory. That single label prevents most overclaiming.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A dated analysis plan linking every research question to questionnaire items and planned subgroups exists before the survey close date."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Write the three to five decisions the survey results must inform"
                - "Map each research question to the question numbers that answer it"
                - "List the subgroups to compare and estimate the base size of each"
                - "Mark the primary measures and send the plan to the survey sponsor"
            - name: Survey codebook and data dictionary
              description: |-
                ## Purpose
                Exports from survey platforms arrive with cryptic column names like Q7_3, numeric codes with no labels and multi-select questions split across a dozen columns. A codebook giving every variable its question wording, value labels, routing condition and missing codes means anyone, including you in six months, can read the file without the questionnaire open beside it.

                ## Milestones
                1. Every variable listed with its name, full question wording and type.
                2. Value labels recorded for every coded answer, including don't know and refused.
                3. Routing conditions noted for each question asked of only some respondents.
                4. Multi-select and grid questions documented with how their columns map to options.
                5. The codebook stored next to the data file with a version date.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A codebook covers every column in the survey export with wording, value labels, routing and missing codes, and carries a version date."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Export the questionnaire and the data map from the survey platform"
                - "Rename cryptic columns to short readable names and record the mapping"
                - "Write value labels for every coded answer, including don't know"
                - "Note the routing condition beside each filtered question"
                - "Save the codebook beside the data with today's version date"
            - name: Read-only raw export and tidy analysis file
              description: |-
                ## Purpose
                Editing the raw download by hand is how responses quietly vanish and nobody can say what changed. Keeping the original export untouched in its own folder, and building a separate analysis file with one row per respondent and every change recorded, means any figure in the report can be traced back to what respondents actually submitted.

                ## Milestones
                1. The original export saved read-only with its download date and record count.
                2. A separate analysis file with one row per respondent and a unique respondent ID.
                3. A change log listing every edit, deletion and recode with its reason.
                4. Record counts reconciled between the raw export, the analysis file and the platform dashboard.
              priority: high
              deadlineOffsetDays: 14
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "The raw export is stored read-only, the analysis file is built from it, and its record count matches the platform with every difference explained in a change log."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Download the full raw export and note the date and number of records"
                - "Set the raw file to read-only in its own folder"
                - "Create the analysis file with one row per respondent and a unique ID"
                - "Start a change log with columns for date, change, records affected and reason"
                - "Reconcile the record count against the platform's own completes figure"
            - name: Response rate and fieldwork disposition record
              description: |-
                ## Purpose
                A response rate quoted without saying how it was calculated is close to meaningless: completes over invitations, over delivered emails and over eligible people can give 40, 25 or 12 percent for the same survey. Recording the outcome of every invitation with standard disposition categories, such as the definitions published by survey research associations like AAPOR, lets you state a rate that others can compare and defend.

                ## Milestones
                1. Every sampled case assigned one disposition: complete, partial, refusal, non-contact, ineligible or unknown.
                2. The response rate formula chosen and written down in words.
                3. Response, cooperation and break-off rates calculated from the dispositions.
                4. Rates broken down by key sample groups such as region or contact channel.

                ## Notes
                Partial completes need a rule decided in advance, for example counting a case as complete once 80 percent of the core questions are answered.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A disposition table covers every sampled case, and the named response rate formula and resulting rate are recorded in the methods notes."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Export the invitation list with delivery, open and completion status"
                - "Assign every sampled case one standard disposition code"
                - "Write down the response rate formula you will report"
                - "Calculate response and break-off rates overall and by sample group"
            - name: Response quality screening rules
              description: |-
                ## Purpose
                Online surveys, especially paid panels and links shared publicly, attract speeders, straight-liners, duplicate entries and bots, and they can make up 5 to 20 percent of completes. Agreeing written screening rules before looking at the results stops you removing respondents simply because their answers are inconvenient. The rules then run the same way on every wave.

                ## Milestones
                1. A written rule for speeders, such as completion time under a third of the median.
                2. Straight-lining checks defined for each grid question of five items or more.
                3. Attention check, duplicate device and nonsense open-text rules agreed.
                4. A flag column per rule in the analysis file and a removal decision for each flagged case.
                5. The number removed under each rule reported in the methods notes.

                ## Notes
                Flag first, remove second. A respondent who trips one rule is often fine; two or more is usually a stronger signal.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Screening rules are written before results are examined, applied as flag columns, and the count removed under each rule appears in the methods notes."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Calculate the median completion time and set a speeder threshold"
                - "Define a straight-lining check for each large grid question"
                - "Add a flag column for every screening rule in the analysis file"
                - "Review cases flagged by two or more rules and record each decision"
                - "Ask the agent to draft the methods paragraph describing the screening rules"
            - name: Skip logic and missing data audit
              description: |-
                ## Purpose
                A blank cell can mean the question was never shown, the respondent skipped it, chose don't know or abandoned the survey there, and mixing those up changes the percentages. Auditing every filtered question against its routing, and coding each kind of missing separately, makes sure each percentage uses the right base and that platform routing errors are caught before they reach the report.

                ## Milestones
                1. Each filtered question checked so that answers come only from respondents who should have seen it.
                2. Separate codes in use for not asked, skipped, don't know and refused.
                3. Routing errors, if any, listed with the number of cases affected.
                4. Item nonresponse calculated for every question, with any above 10 percent flagged.
              priority: medium
              frontmatter:
                mode: building
                output_kind: knowledge
                success_criteria: "Every filtered question has been checked against its routing and each missing value carries one of four distinct codes."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "List every question that is shown to only some respondents"
                - "Cross-tabulate each filter question against its follow-up to find routing errors"
                - "Recode blanks into not asked, skipped, don't know and refused"
                - "Calculate item nonresponse for every question and flag those above 10 percent"
            - name: Derived variables and recode log
              description: |-
                ## Purpose
                Age bands, region groupings, reversed scale items, index scores and top-two-box measures are created once and then reused in every table, so a single wrong recode spreads everywhere. Building them in one place with a written definition and a check for each keeps the numbers consistent between your tables, a colleague's chart and next year's wave.

                ## Milestones
                1. Every derived variable listed with its source items and exact rule.
                2. Reverse-coded items identified and flipped, with a check that correlations now run the right way.
                3. Each derived variable checked against its source with a quick cross-tabulation.
                4. The log added to the codebook so later waves use identical definitions.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A recode log defines every derived variable, and each one is verified by a cross-tabulation against its source items."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "List the derived variables the analysis plan needs"
                - "Write the exact rule for each, including how missing values are treated"
                - "Cross-tabulate each new variable against its source items to check it"
                - "Add the recode rules to the codebook"
            - name: Respondent confidentiality and small-cell rules
              description: |-
                ## Purpose
                Surveys promise anonymity, but a table showing the three people in the finance team over 55, or a quoted comment that mentions a project name, can identify someone instantly. Agreeing a minimum reporting base, rules for identifying free text and who may see respondent-level data keeps the promise made on the first screen and protects future response rates. Staff and beneficiary surveys need this most.

                ## Milestones
                1. The exact confidentiality promise from the survey invitation copied into the rules.
                2. A minimum base for any reported group, commonly 5 to 10, agreed and written down.
                3. A rule for redacting names, places and roles from quoted open text.
                4. A list of who can access respondent-level data, and where it is stored.

                ## Notes
                Small groups can be revealed by subtraction: if the total and all but one group are shown, the last group is exposed too. Check totals as well as cells.
              priority: high
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "Written confidentiality rules set a minimum reporting base, a redaction rule for quotes and a named access list, and they match the promise made to respondents."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Copy the anonymity promise from the survey invitation into a rules document"
                - "Agree a minimum reporting base for any group shown in results"
                - "Write a redaction rule for names, roles and places in quoted comments"
                - "Check draft tables for small groups that could be revealed by subtraction"
                - "Review who can access respondent-level data and remove anyone who no longer needs it @recurring(yearly)"
            - name: Choosing a tool for weighted survey analysis
              description: |-
                ## Purpose
                Spreadsheets handle simple counts but get weighted percentages, design effects and significance tests on weighted data wrong without warning. Deciding early whether to use a dedicated survey package, a statistics program or code such as R with its survey package or Python, based on the skills you have and the sample design, avoids rebuilding everything halfway through the report.

                ## Milestones
                1. The analysis needs listed: weights, complex design, crosstabs, open text and repeat waves.
                2. Two or three tools compared on those needs, cost and the skills already in the team.
                3. A test run on a copy of the data reproducing one weighted percentage by hand.
                4. A choice recorded with the reason, and the training needed noted.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A survey analysis tool is chosen and tested on real data by reproducing a weighted percentage, with the reason for the choice recorded."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "List what the analysis must handle, from weights to repeat waves"
                - "Compare two or three tools against that list and their cost"
                - "Reproduce one weighted percentage in the leading tool and check it by hand"
                - "Record the choice and the reason in the project notes"
            - name: Live fieldwork monitoring against quotas
              description: |-
                ## Purpose
                Problems found after a survey closes are expensive: a quota for younger men short by half, a broken link on mobile, a question where 40 percent drop out. Checking completes, quotas, break-off points and device split twice a week while the survey is live gives time to send reminders, boost a channel or fix the questionnaire.

                ## Milestones
                1. A tracking sheet with completes, quota cells and break-off counts by date.
                2. Target completes per quota cell written beside the actuals.
                3. Break-off points identified for any question losing more than 5 percent of starters.
                4. Reminder and boost actions recorded with the date sent and the effect.

                ## Notes
                Start from the **Metrics log** template. Avoid looking at headline results during fieldwork; it tempts people to tinker with the questionnaire mid-stream.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "During every live survey, completes and quota cells are logged twice a week and each shortfall has a recorded action."
                cadence: rolling
              tasks:
                - "Create a fieldwork tracker from the metrics log template"
                - "Enter quota targets for each cell beside the actuals"
                - "Log completes, quota fill and break-off points while a survey is live @recurring(weekly:mon,thu)"
                - "Send a targeted reminder to the lowest-filling quota groups"
            - name: Weighting targets and benchmark upkeep
              description: |-
                ## Purpose
                Weights are only as good as the population figures they aim for, and those figures go stale when a new census, staff headcount or membership count arrives. Keeping one sheet of target proportions with their source and date, and refreshing it each year, stops a tracker drifting because it is still weighted to figures from five years ago.

                ## Milestones
                1. Target proportions for each weighting variable listed with source and reference date.
                2. Categories in the targets matched exactly to the answer options in the questionnaire.
                3. Each weighting variable justified as related to both who responds and the key outcomes.
                4. A yearly refresh date set, with the change in each target recorded when it is updated.
              priority: high
              frontmatter:
                mode: operating
                output_kind: artifact
                success_criteria: "A dated target sheet lists every weighting variable's population proportions with sources and has been refreshed within the last twelve months."
                cadence: cyclic
              tasks:
                - "List the variables used for weighting and where each target figure came from"
                - "Check the target categories match the questionnaire answer options exactly"
                - "Refresh the population targets from the latest official figures @recurring(yearly)"
                - "Record how much each target changed and which trends that affects"
            - name: Tracker survey wave routine
              description: |-
                ## Purpose
                A survey run every quarter or year is only useful if each wave is processed the same way, otherwise a change in the trend line may be a change in the method. A fixed wave routine with the same screening, weighting, tables and comparison tests makes wave-on-wave movement something you can explain rather than guess at.

                ## Milestones
                1. A written step list for each wave from export to final tables.
                2. The same screening rules, weights and derived variables applied to every wave.
                3. A comparison table showing each key measure against the previous wave with significance flagged.
                4. Any change to questionnaire, sample or mode recorded in a wave log.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Four consecutive waves are processed with the same written routine, each with a wave comparison table and a wave log entry."
                cadence: cyclic
              tasks:
                - "Write the processing steps for a wave from export to final tables"
                - "Run the wave routine on the new data and produce the comparison table @recurring(quarterly)"
                - "Note any questionnaire, sample or mode change in the wave log"
                - "Test each headline movement for significance before calling it a change"
            - name: Survey data archive and version register
              description: |-
                ## Purpose
                Six months after a report, someone asks for the figures behind slide 12 and nobody knows which file version produced them. A register of every dataset, weight version, syntax file and deliverable, with dates and where they live, means results can be reproduced and old surveys reused for trends.

                ## Milestones
                1. One folder structure for raw data, analysis files, scripts, outputs and documents.
                2. A register listing each survey with fieldwork dates, sample size, files and owner.
                3. Each deliverable tagged with the data and weight version used to make it.
                4. Retention dates set for respondent-level data in line with the confidentiality rules.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: artifact
                success_criteria: "Every survey from the last two years appears in the register with its files, versions, owner and retention date."
                cadence: rolling
              tasks:
                - "Set up the standard folder structure for survey projects"
                - "Add every survey from the last two years to the register"
                - "Tag each published deliverable with its data and weight version"
                - "Update the register and clear respondent data past its retention date @recurring(monthly:12)"
            - name: Second-analyst check before results go out
              description: |-
                ## Purpose
                The most common survey errors are mundane: the wrong base, unweighted figures in a weighted report, a label swapped on a chart, percentages summing to 112. A short checklist run by a second person before any deliverable leaves catches most of them in half an hour and protects the credibility of every future survey.

                ## Milestones
                1. A checklist covering bases, weights, labels, totals, rounding and suppression.
                2. A named second checker for every deliverable, even if from outside the team.
                3. Each check recorded with the deliverable, checker, date and issues found.
                4. A running list of repeat errors used to update the checklist.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every survey deliverable released in the last six months has a recorded second-analyst check against the written checklist."
                cadence: rolling
              tasks:
                - "Write a one-page checklist of bases, weights, labels, totals and suppression"
                - "Agree who acts as second checker for each kind of deliverable"
                - "Log each check with the deliverable, checker and issues found"
                - "Review the repeat errors and update the checklist @recurring(monthly:20)"
            - name: Survey fatigue and contact frequency rules
              description: |-
                ## Purpose
                When every team sends its own survey, the same customers, staff or service users are asked six times a year and response rates fall for everyone. A shared calendar of planned surveys and a rule for how often any one person may be invited protects response rates and the goodwill of the people you depend on.

                ## Milestones
                1. A calendar of every planned survey across the organisation for the next twelve months.
                2. A maximum invitation frequency per person agreed, such as one survey per quarter.
                3. Suppression lists in place so recent respondents are not reinvited.
                4. Response rate trends tracked to see whether the rule is working.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A shared survey calendar and an agreed contact frequency limit are in use, with the suppression list applied to every new invitation list."
                cadence: rolling
              tasks:
                - "Collect every survey planned by teams over the next twelve months"
                - "Agree a maximum survey invitation frequency per person"
                - "Apply the suppression list to each new invitation list before sending"
                - "Review the survey calendar for clashes and overlaps @recurring(monthly:3)"
            - name: Tested question bank for future surveys
              description: |-
                ## Purpose
                Writing new wording for satisfaction, trust or wellbeing every time makes results impossible to compare and repeats old mistakes. A bank of questions that have already been fielded, with their wording, answer scale, response distribution and any known problems, lets each new survey start from items with a track record.

                ## Milestones
                1. Core questions from past surveys collected with exact wording and answer options.
                2. Each item annotated with its distribution, item nonresponse and any comprehension issues.
                3. Standard demographic questions agreed so groups match across surveys and benchmarks.
                4. A rule that new surveys use bank items unless there is a written reason not to.
              priority: low
              frontmatter:
                mode: operating
                output_kind: artifact
                success_criteria: "A question bank of at least 30 fielded items, each with wording, scale, distribution and known issues, is used to build the next survey."
                cadence: rolling
              tasks:
                - "Collect the core questions from the last three surveys with exact wording"
                - "Note each item's response distribution and nonresponse rate"
                - "Agree standard wording for age, gender, region and other demographics"
                - "Add newly fielded items and their performance to the bank @recurring(quarterly)"
            - name: Findings to actions follow-up log
              description: |-
                ## Purpose
                People stop answering surveys when nothing visibly changes, and nonprofits and employers hear this in the comments year after year. Logging each finding with an owner, a decided action and a date, then telling respondents what happened, closes the loop and gives next year's survey something to measure.

                ## Milestones
                1. Each headline finding written as one sentence with an evidence reference.
                2. An owner and a decided action, or a recorded decision not to act, for each finding.
                3. Progress checked monthly against the action dates.
                4. A short you said, we did summary sent to respondents within three months of results.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every headline finding from the latest survey has an owner and an action status, and a summary of actions has been sent to respondents."
                cadence: rolling
              tasks:
                - "List each headline finding with the table or chart that supports it"
                - "Agree an owner and an action, or a recorded decision not to act, for each"
                - "Check progress on survey actions with each owner @recurring(monthly:25)"
                - "Send respondents a short summary of what changed because of their answers @recurring(quarterly)"
            - name: Annual survey programme review
              description: |-
                ## Purpose
                Surveys accumulate: a pulse added after a reorganisation, a feedback form nobody reads, a long annual questionnaire nobody has trimmed. Once a year, listing each survey with its cost, response rate, length and the decisions it actually informed shows which to keep, shorten, merge or stop.

                ## Milestones
                1. Every survey run in the year listed with cost, sample, response rate and median completion time.
                2. The decisions each survey informed written next to it.
                3. A keep, shorten, merge or stop recommendation for each.
                4. The recommendations agreed with the people who commission the surveys.
              priority: low
              frontmatter:
                mode: operating
                output_kind: decision
                success_criteria: "A yearly review records a keep, shorten, merge or stop decision for every survey run, agreed with the commissioning owners."
                cadence: cyclic
              tasks:
                - "List every survey run this year with cost, response rate and length"
                - "Write beside each survey the decisions it informed"
                - "Recommend keeping, shortening, merging or stopping each one"
                - "Hold the survey programme review with commissioning owners @recurring(yearly)"
            - name: Margins of error, design effects and effective sample size
              description: |-
                ## Purpose
                Plus or minus 3 points, the margin of error most reports quote, assumes a simple random sample, and weighting, clustering and quotas all make the real one wider. Learning to compute the design effect and effective sample size from your own weights means the uncertainty you report matches the survey you ran, not a textbook ideal.

                ## Milestones
                1. The margin of error for one headline proportion worked through by hand.
                2. Kish's approximate design effect calculated from your weights.
                3. Effective sample size reported beside the actual sample size for the main subgroups.
                4. A one-page reference showing the margin of error for common base sizes in your survey.

                ## Notes
                Start from the **Reading queue** template for a short list of survey sampling texts and package documentation. Margins of error say nothing about bias from who did not respond.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A reference sheet gives margins of error based on effective sample size for the main subgroups of your current survey."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Calculate the margin of error by hand for one headline percentage"
                - "Compute the design effect from the weights using Kish's approximation"
                - "Add effective sample size beside actual base size for each subgroup"
                - "Work one exercise from a survey sampling text @recurring(weekly:wed)"
            - name: Raking weights to population margins
              description: |-
                ## Purpose
                When a sample has too many graduates or too few under-30s, weighting adjusts for it, and raking, also called iterative proportional fitting, is the method most survey teams use when only separate margins are known. Building one yourself once teaches what weights can and cannot fix, and how trimming extreme weights trades bias for variance.

                ## Milestones
                1. Raking run on age, gender and one other variable to known population margins.
                2. Weighted margins checked to match targets within half a percentage point.
                3. The weight distribution reviewed: minimum, maximum and the ratio between them.
                4. A trimming rule applied, for example capping weights at five times the mean, and its effect on key estimates recorded.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A raked weight variable reproduces the population margins within half a point and has a documented trimming rule and weight range."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "Choose three weighting variables and their population margins"
                - "Run a raking procedure in the survey package and save the weights"
                - "Check weighted margins against targets and record the weight range"
                - "Apply a trimming cap and compare key estimates before and after"
            - name: Crosstab significance testing without fishing
              description: |-
                ## Purpose
                Twenty subgroups against 40 questions produce 800 comparisons, and at a 5 percent threshold about 40 will look significant by chance alone. Learning column-proportion tests on weighted data and a correction for multiple comparisons lets you highlight differences that are probably real and stop reporting noise.

                ## Milestones
                1. Column proportion tests run on weighted data using effective base sizes.
                2. The number of comparisons in a standard banner counted.
                3. A multiple comparison approach chosen, such as a false discovery rate correction or a stricter threshold.
                4. A house rule written for which differences may be called out in reports.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A written house rule for significance flags in crosstabs, including a multiple comparison approach, is applied to the next set of tables."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Count the comparisons produced by your standard crosstab banner"
                - "Rerun one table's significance flags using effective base sizes"
                - "Apply a false discovery rate correction and compare the flags"
                - "Write the house rule for which differences reports may call out"
            - name: Analysing Likert and rating scale questions
              description: |-
                ## Purpose
                Five-point agreement scales are ordinal, so a mean of 3.6 hides whether people are split or lukewarm, and top-two-box percentages throw away the difference between agree and strongly agree. Practising the main ways to summarise rating scales on your own data shows which one answers the question being asked, and how neutral and don't know answers change the picture.

                ## Milestones
                1. One rating question summarised as full distribution, top-two-box, net score and mean.
                2. The effect of excluding versus including don't know shown side by side.
                3. A divergent stacked bar drafted for one scale battery.
                4. A house default chosen for reporting rating scales, with the reason.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A house default for summarising rating scales is written down and illustrated with four summaries of one real question."
                cadence: phased
                effort_hours_estimate: "5"
              tasks:
                - "Summarise one rating question four ways: distribution, top-two-box, net and mean"
                - "Show the result with and without don't know answers"
                - "Draft a divergent stacked bar for one battery of agreement items"
                - "Write the house default for reporting rating scales"
            - name: Scale reliability and factor structure checks
              description: |-
                ## Purpose
                Engagement, wellbeing and trust indices average several items on the assumption that they measure one thing, which is often untrue. Checking internal consistency with Cronbach's alpha or omega, and the item structure with an exploratory factor analysis, tells you whether an index deserves a single score or should be reported as separate parts.

                ## Milestones
                1. Item correlations reviewed for each multi-item index.
                2. Alpha or omega calculated, with the effect of dropping each item.
                3. An exploratory factor analysis run on a battery of eight or more items.
                4. A decision recorded for each index: keep, split, drop items or report items separately.

                ## Notes
                A high alpha can come from many near-duplicate items; it does not prove the scale measures what its name claims. Read the wording too.
              priority: low
              frontmatter:
                mode: learning
                output_kind: decision
                success_criteria: "Each multi-item index in the survey has a recorded reliability figure and a keep, split or report-separately decision."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "List every index built by averaging several items"
                - "Calculate alpha or omega for each, with item-dropped values"
                - "Run an exploratory factor analysis on the largest battery"
                - "Record a keep, split or drop decision for each index"
            - name: Coding open-ended survey responses
              description: |-
                ## Purpose
                Comments boxes often hold the most useful answers in a survey, yet they usually end up as a page of cherry-picked quotes. Building a code frame from a sample, coding every response against it and checking agreement between two coders turns open text into counts that sit next to the closed questions and can be cut by subgroup.

                ## Milestones
                1. A code frame of 10 to 25 codes built from a random sample of 100 to 200 responses.
                2. Every response coded, with multiple codes allowed where needed.
                3. Agreement between two coders checked on a shared sample and disagreements resolved.
                4. Code counts reported by key subgroup with two or three redacted quotes per code.

                ## Notes
                Start from the **Feedback themes** template. Keep responses coded as other under 10 percent; if the share grows, the frame needs new codes.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: artifact
                success_criteria: "Every open-ended response is coded against a written frame, with two-coder agreement checked and code counts reported by subgroup."
                cadence: phased
                effort_hours_estimate: "12"
              tasks:
                - "Draw a random sample of 150 responses from one open question"
                - "Ask the agent to suggest candidate codes from the sample, then edit them by hand"
                - "Code all responses and keep the share left as other below 10 percent"
                - "Double-code 50 responses with a colleague and resolve disagreements"
            - name: Key driver analysis for satisfaction surveys
              description: |-
                ## Purpose
                Asking which service attributes drive overall satisfaction is one of the most common survey requests, and a table of correlations answers it badly because the attributes all overlap. Learning relative importance methods, such as Shapley value regression or relative weights, and pairing them with performance scores gives a clear map of what to fix first, while being honest that drivers are associations, not proven causes.

                ## Milestones
                1. Correlations between each attribute and the overall measure calculated as a baseline.
                2. A relative importance method run and compared with the correlation ranking.
                3. An importance against performance chart drafted with quadrants.
                4. Findings written with a plain statement that drivers are associations.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A driver analysis using a relative importance method produces an importance against performance chart, with its limitations stated in writing."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "Pick the overall outcome question and the attributes to test"
                - "Correlate each attribute with the outcome as a baseline"
                - "Run a relative importance analysis and compare the rankings"
                - "Draft an importance against performance chart for the report"
            - name: Spotting questionnaire bias before analysing
              description: |-
                ## Purpose
                Leading wording, double-barrelled questions, unbalanced scales and question order effects shape the answers before analysis starts, and no weighting can undo them. Reviewing the questionnaire with an analyst's eye shows which results need a caveat, which comparisons with other surveys are unsafe, and what to fix next time.

                ## Milestones
                1. Each question reviewed against a checklist of common wording problems.
                2. Questions affected by order, such as overall ratings asked after specific ones, flagged.
                3. Caveats drafted for results from questions with known problems.
                4. A list of wording fixes handed to whoever designs the next wave.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Every question in the current survey has been reviewed against a wording checklist, with caveats and next-wave fixes recorded."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Read a short guide on question wording and order effects"
                - "Review each question for leading, double-barrelled or unbalanced wording"
                - "Flag results that need a caveat in the report"
                - "Send the list of wording fixes to the next wave's designer"
            - name: Nonresponse bias assessment
              description: |-
                ## Purpose
                Low response rates are not a problem in themselves; the problem is when the people who answered differ from those who did not on the things being measured. Comparing respondents with the sample frame, early with late responders, and weighted with unweighted estimates gives evidence about how far the results can be trusted, instead of a guess.

                ## Milestones
                1. Respondents compared with the full sample frame on every variable the frame holds.
                2. Early and late responders compared on the key outcome measures.
                3. Key estimates shown weighted and unweighted, with the size of each shift.
                4. A short nonresponse statement written for the methods section.

                ## Notes
                Late responders are an imperfect stand-in for non-responders, but they are the cheapest evidence you have. Say so when you use them.
              priority: high
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A nonresponse assessment compares respondents with the frame and late with early responders, and its conclusion is written into the methods section."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Compare respondents with the sample frame on every variable the frame holds"
                - "Split respondents by response date and compare early with late"
                - "Show key estimates weighted and unweighted side by side"
                - "Repeat the frame comparison for each major survey you run @recurring(yearly)"
            - name: Deciding how to report Net Promoter and single scores
              description: |-
                ## Purpose
                Single scores such as NPS swing several points between waves on samples of a few hundred purely by chance, because they subtract one percentage from another. Calculating the confidence interval for your score, and deciding with the people who watch it what size of change counts as real, prevents celebrations and post-mortems over noise.

                ## Milestones
                1. The confidence interval for the current score calculated at your sample size.
                2. The smallest change detectable between waves estimated.
                3. A reporting rule agreed: always show the interval and the base size.
                4. The decision recorded on whether the score stays a headline measure.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A recorded decision on reporting the single score, with its confidence interval and minimum detectable change written into the reporting rules."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Calculate the confidence interval for the latest score at its base size"
                - "Estimate the smallest wave-on-wave change that would be detectable"
                - "Agree with the score's owners how changes will be described"
                - "Report the score with its interval and base in each wave's results @recurring(quarterly)"
            - name: Survey platform comparison for clean exports
              description: |-
                ## Purpose
                Survey platforms differ less in question types than in what they hand the analyst: labelled exports, stable variable names across edits, metadata on timing and device, and an API for repeat waves. Comparing two or three on those analysis needs, as well as cost and data hosting, saves weeks of cleaning on every future survey.

                ## Milestones
                1. Analysis needs listed: labelled exports, stable names, timing data, API and multilingual support.
                2. Data hosting location and processing terms checked for each platform.
                3. A test survey run on each shortlisted platform and its export inspected.
                4. A choice recorded with costs over three years.

                ## Notes
                Start from the **Purchase decision** template.
              priority: medium
              deadlineOffsetDays: 60
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A platform is chosen after test exports from at least two shortlisted tools, with three-year cost and hosting terms recorded."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "List what the analyst needs from a survey export"
                - "Shortlist two or three platforms and check where each stores data"
                - "Run the same short test survey on each and inspect the exports"
                - "Record the choice and its three-year cost in the purchase decision"
            - name: Scripted cleaning and tabulation pipeline
              description: |-
                ## Purpose
                Cleaning a survey by hand in a spreadsheet takes days, and the next wave takes the same days again with slightly different decisions. Moving the screening, recodes, weighting and standard tables into a script run from the raw export turns a week of work into an hour and makes every step checkable.

                ## Milestones
                1. A script that reads the raw export and applies screening rules and recodes.
                2. Weights calculated or attached inside the same script.
                3. Standard tables produced from the script in the house format.
                4. The script rerun on last wave's data with its output matching the published figures.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "One script turns a raw export into weighted standard tables and reproduces last wave's published figures exactly."
                cadence: phased
                effort_hours_estimate: "20"
              tasks:
                - "Write down the manual cleaning steps used on the last survey"
                - "Script the screening rules and recodes against the raw export"
                - "Add weighting and standard tables to the script"
                - "Rerun the script on last wave and match it to the published figures"
            - name: Crosstab banner and table specification
              description: |-
                ## Purpose
                Tables commissioned with a vague request come back with inconsistent bases, unlabelled filters and percentages on the wrong axis. A standard specification for banners, bases, filters, decimal places, significance flags and suppression means anyone, including an agency, produces tables that read the same way every time.

                ## Milestones
                1. A standard banner of the subgroups most decisions need.
                2. Rules for bases, filters and weighted versus unweighted counts on every table.
                3. Formats agreed for decimals, rounding, significance letters and suppressed cells.
                4. A sample table built to the specification and approved by its main readers.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A table specification with a standard banner and base, format and suppression rules is approved and used for the next set of tables."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Draft a standard banner from the subgroups in the analysis plan"
                - "Write the rules for bases, filters and weighted counts on each table"
                - "Agree formats for decimals, significance letters and suppressed cells"
                - "Build one sample table to the specification and get it approved"
            - name: Shortening the questionnaire with item analysis
              description: |-
                ## Purpose
                Long questionnaires lose people: break-offs rise and straight-lining grows after about 15 minutes for many online audiences. Using the data you already have, such as break-off points, items nobody uses in reports and items that duplicate each other, shows what can be cut with the least loss, and gives evidence to settle arguments about whose questions stay.

                ## Milestones
                1. Break-off rate and median time per section calculated.
                2. Items never used in a report over the last two waves listed.
                3. Highly correlated item pairs identified as candidates to merge.
                4. A shorter draft agreed with a target completion time.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A shorter questionnaire is agreed with a target completion time, and each cut is justified by break-off, usage or overlap evidence."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Calculate break-off rate and median time for each section"
                - "List items not used in any report in the last two waves"
                - "Find highly correlated item pairs that could be merged"
                - "Propose cuts and a target completion time to the survey owner"
            - name: Briefing a research agency on data delivery
              description: |-
                ## Purpose
                Organisations that commission fieldwork from an agency often receive a polished deck and a data file they cannot use. Writing a data delivery specification into the brief, covering file format, codebook, weights, screening rules, dispositions and open text, means you own analysis-ready data and can rerun or extend the work yourself.

                ## Milestones
                1. A delivery specification listing every file and document the agency must supply.
                2. The specification included in the brief and agreed before fieldwork.
                3. The delivered data checked against the specification within a week of receipt.
                4. Gaps raised with the agency and resolved before the final invoice is paid.

                ## Notes
                Start from the **Vendor** template to keep the agency's contacts, contract and delivery record together.
              priority: medium
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "The agency delivered every item in the data specification, checked against it before the final invoice was approved."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Create a vendor record for the agency from the template"
                - "List the files the agency must deliver, from codebook to weights"
                - "Add the data delivery specification to the brief before fieldwork"
                - "Check the delivered data against the specification within a week"
            - name: Annual staff survey results readout
              description: |-
                ## Purpose
                Staff surveys carry high expectations and real risk: managers want team-level results, staff want anonymity, and leaders want the score to go up. Preparing the readout as a dated event, with suppression applied, intervals on team scores and a pack for each eligible team, gets results out within weeks while trust is still high.

                ## Milestones
                1. Results release date fixed and announced before the survey closes.
                2. Team results produced only for teams meeting the minimum reporting base.
                3. A manager pack per eligible team with scores, intervals, comparisons and redacted comments.
                4. An all-staff summary presented, followed by team discussions within a month.
              priority: medium
              deadlineOffsetDays: 120
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "Staff survey results are released on the announced date, with team packs only for teams above the reporting base and an all-staff summary delivered."
                cadence: one-shot
                effort_hours_estimate: "30"
              tasks:
                - "Fix and announce the results release date"
                - "Apply the minimum reporting base to every team result"
                - "Produce a manager pack for each eligible team"
                - "Present the all-staff summary and schedule team discussions"
                - "Draft the readout timetable for the next staff survey @recurring(yearly)"
            - name: Topline results within two weeks of close
              description: |-
                ## Purpose
                Interest in a survey peaks when it closes, and a full report six weeks later often lands after the decision it was meant to inform. A topline with the key measures, bases, margins of error and three or four headline findings, delivered within two weeks, gets the evidence into the room on time and buys space for the full analysis.

                ## Milestones
                1. The topline structure agreed with the sponsor before fieldwork closes.
                2. Weighted results produced for the primary measures in the analysis plan.
                3. Every figure checked by a second analyst.
                4. The topline delivered within 14 days of close.
              priority: high
              deadlineOffsetDays: 45
              frontmatter:
                mode: event
                output_kind: deliverable
                success_criteria: "A checked topline covering the primary measures, with bases and margins of error, is delivered within 14 days of the survey close date."
                cadence: one-shot
                effort_hours_estimate: "10"
              tasks:
                - "Agree the topline layout with the sponsor before the close date"
                - "Produce weighted results for the primary measures only"
                - "Have a second analyst check every figure in the topline"
                - "Send the topline within 14 days of close"
            - name: Board or trustee presentation of survey findings
              description: |-
                ## Purpose
                Boards and trustees have ten minutes and little patience for methodology, yet they are the people most likely to ask whether a sample of 300 can be trusted. A short presentation with three findings, the decision each supports and one slide on method and limits answers that challenge before it comes.

                ## Milestones
                1. Three findings chosen, each tied to a decision the board owns.
                2. One slide on sample, response rate, weighting and margin of error.
                3. Answers prepared for the three hardest likely questions.
                4. Board decisions and follow-up requests recorded after the meeting.
              priority: medium
              deadlineOffsetDays: 60
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "The board presentation is delivered with a method and limits slide, and the decisions it led to are recorded in the follow-up log."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Choose the three findings that relate to decisions the board owns"
                - "Draft one slide on sample, response rate, weighting and margin of error"
                - "Write answers to the three hardest questions the board may ask"
                - "Record the board's decisions in the findings to actions log"
            - name: Public release with a methods statement
              description: |-
                ## Purpose
                Survey results published by a charity, research group or company get quoted far beyond their original context, sometimes with claims the survey cannot support. Publishing with a methods statement covering who was surveyed, how, when, sample size, weighting and margin of error, plus full question wording, follows the disclosure standards of professional polling bodies and protects your name when results are challenged.

                ## Milestones
                1. A methods statement covering population, sample source, mode, dates, base size, weighting and margin of error.
                2. Exact wording of every reported question, in the order asked.
                3. Headline claims checked against the data by someone not involved in writing them.
                4. Tables or a data summary published alongside the release.

                ## Notes
                If a press release says most people, the data should show a clear majority beyond the margin of error. Ask the claims checker to look for exactly that.
              priority: high
              deadlineOffsetDays: 90
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "Results are published with a methods statement, full question wording and tables, and every headline claim is signed off by an independent checker."
                cadence: one-shot
                effort_hours_estimate: "12"
              tasks:
                - "Draft the methods statement with population, mode, dates, base and weighting"
                - "Add exact wording of every reported question in the order asked"
                - "Have someone outside the writing team check every headline claim"
                - "Publish the tables alongside the release"
            - name: Soft launch data check before full fieldwork
              description: |-
                ## Purpose
                Routing errors, mislabelled answer codes and questions that half the respondents misread are cheap to fix after 50 completes and impossible to fix after 2,000. Releasing the survey to a small soft launch, exporting the data and running the cleaning and draft tables on it confirms that the survey produces analysable data before the main send.

                ## Milestones
                1. A soft launch of 30 to 50 completes collected from the real sample.
                2. The export run through the codebook, routing checks and draft tables.
                3. Median completion time and break-off points checked against expectations.
                4. Fixes made and the survey signed off for full launch.
              priority: medium
              deadlineOffsetDays: 30
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "Soft launch data passes routing checks and produces draft tables before the full send, with each fix recorded."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Send the survey to a soft launch sample of 30 to 50 people"
                - "Export the soft launch data and run the routing checks"
                - "Check median completion time and the largest break-off point"
                - "Fix the problems found and sign off the full launch"
            - name: Beneficiary feedback survey on a small budget
              description: |-
                ## Purpose
                Nonprofits often survey the people they serve with a paper form, a phone call or a link in a text message, in several languages, with samples of 40 to 200. Planning the analysis around those limits, reporting counts alongside percentages, avoiding subgroup splits that are too small and being clear about who was easy to reach, gives funders and staff findings that are honest about what they show.

                ## Milestones
                1. The ways responses were collected recorded, with how many came through each.
                2. Paper and phone responses entered, with a double-entry check on a sample.
                3. Results reported as counts and percentages, with no subgroup under the reporting base.
                4. A plain statement of who was likely missed, such as people who left the programme early.

                ## Notes
                With 60 responses, one person moves a percentage by almost 2 points. Showing counts keeps readers from over-reading small shifts.
              priority: medium
              frontmatter:
                mode: service
                output_kind: deliverable
                success_criteria: "A beneficiary survey report gives counts with percentages, respects the reporting base and states who was likely missed."
                cadence: cyclic
              tasks:
                - "Record how many responses came through each collection channel"
                - "Double-enter a sample of paper forms and fix any mismatches"
                - "Report results as counts with percentages for groups above the base"
                - "Plan the next beneficiary survey round with the programme team @recurring(yearly)"
            - name: Before and after programme survey for a funder
              description: |-
                ## Purpose
                Funders increasingly ask for evidence of change, and a survey at entry and exit is the usual answer, but unmatched before and after averages can show improvement simply because those who struggled dropped out. Linking each person's two responses with a code, analysing only matched pairs and reporting attrition plainly gives a defensible result and prepares you for the follow-up questions funders ask.

                ## Milestones
                1. A participant code agreed that links entry and exit responses without names.
                2. Baseline surveys collected from every new participant.
                3. Matched pairs analysed with a paired test, and dropout reported.
                4. The funder report section drafted with what the design can and cannot show.

                ## Notes
                A before and after survey without a comparison group cannot prove the programme caused the change. Say so in the report; funders respect it.
              priority: medium
              deadlineOffsetDays: 365
              frontmatter:
                mode: service
                output_kind: deliverable
                success_criteria: "The funder report presents matched before and after results with the dropout rate and a stated limitation on causal claims."
                cadence: phased
                effort_hours_estimate: "20"
              tasks:
                - "Agree a participant code that links entry and exit surveys"
                - "Collect a baseline survey from every new participant"
                - "Analyse matched pairs only and report how many dropped out"
                - "Draft the funder report section with the design's limits stated"
            - name: Dissertation or thesis survey analysis chapter
              description: |-
                ## Purpose
                Postgraduate researchers often collect survey data before their analysis plan is settled, and examiners notice. Agreeing hypotheses and planned tests with the supervisor, or pre-registering them, then documenting cleaning and checking scale reliability before testing gives a results chapter that survives the viva and can be turned into a paper.

                ## Milestones
                1. Hypotheses and planned analyses agreed with the supervisor, or pre-registered.
                2. Cleaning, exclusions and missing data handling written up for the methods chapter.
                3. Scale reliability reported before any hypothesis tests.
                4. A results chapter draft with effect sizes and confidence intervals, not only p-values.
              priority: medium
              deadlineOffsetDays: 240
              frontmatter:
                mode: research
                output_kind: deliverable
                success_criteria: "A results chapter draft reports effect sizes with confidence intervals and links every test to a hypothesis agreed with the supervisor."
                cadence: phased
                effort_hours_estimate: "60"
              tasks:
                - "Write the hypotheses and planned tests and agree them with the supervisor"
                - "Document every exclusion and missing data decision for the methods chapter"
                - "Report scale reliability before running hypothesis tests"
                - "Send the supervisor a short progress note on the analysis @recurring(weekly:fri)"
            - name: Comparing results across translated questionnaires
              description: |-
                ## Purpose
                Running the same survey in English, Spanish and French, or across several countries, can show differences that come from translation, scale use or culture rather than real opinion. Checking the translations were reviewed, comparing response styles such as use of the extremes, and testing whether key items behave the same in each version tells you which cross-language comparisons are safe to report.

                ## Milestones
                1. Translation and review method recorded for each language version.
                2. Response style compared across versions, including extreme and midpoint use.
                3. Key items checked for similar distributions and correlations in each version.
                4. A list of which comparisons across languages may be reported and which need a caveat.
              priority: low
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A written list states which results can be compared across language versions, backed by response style and item checks."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Record how each language version was translated and reviewed"
                - "Compare extreme and midpoint answer use across versions"
                - "Check key items correlate similarly in every version"
                - "Write which cross-language comparisons are safe to report"
            - name: Taking over an inherited customer survey
              description: |-
                ## Purpose
                Knowledge workers often inherit a customer or member survey with an old export, last year's deck and no documentation. Reconstructing how the previous results were produced, the filters, weights and definitions, before running the next wave stops an apparent drop in satisfaction that is really a change of method.

                ## Milestones
                1. Previous deliverables and data files gathered in one folder.
                2. Last year's headline figures reproduced from the old data.
                3. Differences between your method and the previous one listed and explained.
                4. A handover note written so the next person does not start from zero.
              priority: medium
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "Last year's headline figures are reproduced from the old data, and a handover note documents the method for future waves."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Gather last year's report, data export and any scripts in one folder"
                - "Ask the agent to list every figure and definition in last year's deck"
                - "Reproduce the three headline figures from last year's data"
                - "List every method difference you find and its effect on the figures"
                - "Write a handover note for whoever runs the survey next"
            - name: Community needs assessment survey
              description: |-
                ## Purpose
                Community needs surveys shape funding bids and service plans, and they are usually collected through partners, events and online links rather than a random sample. Analysing them well means describing exactly who responded, comparing that profile with local population figures, and triangulating with service data, so the needs reported reflect the community and not just its most connected residents.

                ## Milestones
                1. Respondent profile compared with local population figures on age, area and other key traits.
                2. Results shown by area or group only where the base allows.
                3. Survey findings set against service use or waiting list data.
                4. A needs summary that names the underrepresented groups.
              priority: low
              frontmatter:
                mode: service
                output_kind: deliverable
                success_criteria: "A needs summary compares the respondent profile with local population figures and names the underrepresented groups."
                cadence: one-shot
                effort_hours_estimate: "15"
              tasks:
                - "Compare the respondent profile with local population figures"
                - "Report results by area only where the base meets the minimum"
                - "Set the main findings beside service use or waiting list data"
                - "Name the underrepresented groups in the needs summary"
            - name: Item nonresponse and multiple imputation
              description: |-
                ## Purpose
                Dropping every respondent with a missing income or age can discard a fifth of the sample and bias results towards people who answer everything. Multiple imputation fills gaps several times using the other answers, then combines the results so the extra uncertainty is reflected, and it earns its effort when key variables have more than a few percent missing.

                ## Milestones
                1. Missing data patterns described for the key analysis variables.
                2. An imputation model specified with the variables that predict missingness.
                3. Several imputed datasets created and analysed, with the results pooled.
                4. Pooled results compared with complete-case results and the difference reported.

                ## Notes
                Report how many values were imputed for each variable. Imputed values are estimates, not answers anyone gave.
              priority: low
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "Key results are reported from pooled multiply imputed data, alongside complete-case results and the share of values imputed."
                cadence: phased
                effort_hours_estimate: "12"
              tasks:
                - "Tabulate missing data patterns for the key analysis variables"
                - "Specify an imputation model including predictors of missingness"
                - "Create and analyse several imputed datasets and pool the results"
                - "Compare pooled and complete-case estimates in the methods notes"
            - name: Assessing a change of survey mode
              description: |-
                ## Purpose
                Moving a tracker from phone or face-to-face to online often changes answers: people report less socially desirable behaviour, use scale extremes differently and skip more. Running the old and new modes in parallel for one wave, or comparing with a stable benchmark, separates the method effect from real change, so the trend is not broken without anyone knowing.

                ## Milestones
                1. The expected mode effects listed for the key measures.
                2. A parallel run or bridging design agreed for the transition wave.
                3. Differences between modes estimated for each key measure.
                4. A decision recorded for each trend: adjust, footnote or restart.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A transition wave quantifies the mode effect on key measures, and a decision to adjust, footnote or restart each trend is recorded."
                cadence: phased
                effort_hours_estimate: "15"
              tasks:
                - "List the key measures most likely to shift with a change of mode"
                - "Design a parallel run or bridging sample for the transition wave"
                - "Estimate the difference between modes for each key measure"
                - "Record whether to adjust, footnote or restart each trend"
            - name: MaxDiff and conjoint preference studies
              description: |-
                ## Purpose
                When everything on a rating list scores as important, MaxDiff forces trade-offs to rank priorities, and conjoint estimates how people value combinations of features and price. Both need careful experimental design, enough respondents per version and hierarchical Bayes or similar estimation, so getting one right is a step up from standard crosstabs.

                ## Milestones
                1. The choice between MaxDiff and conjoint made from the decision being supported.
                2. An experimental design generated with balanced item or attribute appearances.
                3. Utilities estimated at respondent level and checked for fit.
                4. Results presented as preference shares or simulations, with the uncertainty shown.
              priority: low
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A MaxDiff or conjoint study is fielded from a balanced design and reports preference shares with intervals to the decision owner."
                cadence: phased
                effort_hours_estimate: "30"
              tasks:
                - "Write the decision the preference study must support"
                - "Choose MaxDiff or conjoint and list the items or attributes"
                - "Generate a balanced design and check each item's appearance count"
                - "Estimate utilities and build a simple share simulator"
            - name: Variance estimation for stratified and clustered samples
              description: |-
                ## Purpose
                Household, school and multi-site surveys sample in strata and clusters, and analysing them as if they were simple random samples understates standard errors, sometimes by half. Declaring the design properly with strata, cluster IDs and weights, or using the replicate weights that national statistical surveys often supply, gives standard errors that hold up under peer review.

                ## Milestones
                1. Strata, cluster and weight variables identified in the data and documented.
                2. The full design declared in the analysis package.
                3. Standard errors for key estimates compared with and without the design.
                4. Replicate weight methods tested where the dataset provides them.
              priority: low
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "Key estimates are reported with design-based standard errors, and the comparison with naive standard errors is documented."
                cadence: phased
                effort_hours_estimate: "12"
              tasks:
                - "Identify the strata, cluster and weight variables in the dataset"
                - "Declare the full sample design in the analysis package"
                - "Compare design-based and naive standard errors for five estimates"
                - "Rerun one estimate with replicate weights if the data supplies them"
            - name: Panel attrition and longitudinal weights
              description: |-
                ## Purpose
                Longitudinal panels lose members every wave, and those who leave are rarely random: younger, more mobile and less satisfied people tend to go first. Modelling who drops out and building longitudinal weights from earlier-wave answers keeps estimates of change honest as the panel shrinks.

                ## Milestones
                1. Retention tracked by wave and by key baseline characteristics.
                2. A model of dropout built from baseline answers.
                3. Longitudinal weights created from the dropout model and checked against the baseline profile.
                4. The size of any refreshment sample needed for the next waves estimated.
              priority: low
              frontmatter:
                mode: research
                output_kind: artifact
                success_criteria: "Each new panel wave has longitudinal weights built from a dropout model, and weighted retained members match the baseline profile within agreed limits."
                cadence: cyclic
              tasks:
                - "Tabulate retention by wave and baseline characteristic"
                - "Model dropout using baseline answers"
                - "Build longitudinal weights and check them against the baseline profile"
                - "Update the attrition model after each panel wave @recurring(quarterly)"
            - name: Multilevel regression and poststratification
              description: |-
                ## Purpose
                Estimating opinion for small areas or narrow groups from a national survey usually leaves a handful of respondents per cell. Multilevel regression and poststratification, known as MRP, borrows strength across similar groups and reweights to population tables, and it is now common in political and public health polling, but it needs careful validation before anyone quotes a local figure.

                ## Milestones
                1. A poststratification table built from census or population counts.
                2. A multilevel model fitted with group and area effects.
                3. Estimates validated against areas where direct estimates or official figures exist.
                4. Local estimates published with uncertainty intervals and a plain-language method note.
              priority: low
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "MRP estimates are validated against known benchmarks and published only with intervals and a method note."
                cadence: phased
                effort_hours_estimate: "40"
              tasks:
                - "Build a poststratification table from population counts"
                - "Fit a multilevel model with group and area effects"
                - "Validate estimates against areas with known benchmarks"
                - "Write a plain-language method note for the local estimates"
---

# Survey Data Analysis

This area is for researchers, analysts and nonprofit teams who run or inherit surveys and need findings that hold up when someone asks how the numbers were made. It starts with foundations (an analysis plan, a codebook, a protected raw export, dispositions, screening rules, missing data, recodes, confidentiality and a tool choice), moves through the routines that keep fieldwork, weighting, tracker waves and quality checks steady, then the skills of margins of error, raking, crosstab testing, rating scales, reliability, open-text coding, driver analysis and question bias, followed by decisions, dated releases, situations from a beneficiary survey to a thesis, and specialist methods such as imputation, MaxDiff and MRP.

What repeats is twice-weekly fieldwork monitoring while a survey is live, monthly quality checks, archive upkeep, contact calendar reviews and action follow-ups, quarterly tracker waves, question bank additions and you said, we did updates, and yearly refreshes of weighting targets, access lists and the survey programme. The Metrics log, Reading queue, Feedback themes, Purchase decision and Vendor templates pair with fieldwork tracking, methods reading, open-text coding, the platform choice and agency briefs. Installing adds all 50 projects as active, so archive the ones that are not for you yet.
