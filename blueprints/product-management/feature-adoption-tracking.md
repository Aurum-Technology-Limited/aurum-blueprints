---
id: product-management.feature-adoption-tracking
name: Feature Adoption Tracking
description: "Clear adoption definitions, a dashboard per feature, regular post-launch checkpoints and the fix, promote or retire calls that follow when nobody is using what shipped."
category: business
version: 1.0.0
tags: [product-management, feature-adoption-tracking, team, manager, adoption, product-analytics, dashboards, post-launch]
author: Aurum Technology
starter_structure:
  templates:
    - metrics-log
    - feedback-themes
    - purchase-decision
    - operational-checklist
    - onboarding-30-60-90
  pillars:
    - name: Product Management
      emoji: "🧩"
      description: "Deciding what to build and why: discovery and research, roadmaps and prioritisation, specs and launches, pricing and packaging, product analytics, and the feedback loops that keep a product honest."
      pillarFrontmatter:
        review_cadence: monthly
      areas:
        - name: Feature Adoption Tracking
          description: "Measuring who discovers, tries and keeps using each feature after launch, and acting on features that nobody is adopting."
          projects:
            - name: Feature inventory with owners and launch dates
              description: |-
                ## Purpose
                Most products have more features than anyone can list from memory, and adoption cannot be tracked for features nobody has written down. A single inventory with each feature's owner, launch date, plan availability and the event that shows it being used is the spine every later report hangs from.

                ## Milestones
                1. A list of every user-facing feature, grouped by product area, with no duplicates.
                2. Each feature has a named owner, a launch month and the plans or roles that can see it.
                3. Each feature has the event or events that show real use, or is flagged as untracked.
                4. The inventory is shared with the product team and linked from the adoption dashboard.

                ## Notes
                Keep it at the level a customer would recognise. A settings toggle is rarely a feature; a workflow a customer would ask about by name is.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "An inventory listing every user-facing feature with owner, launch month, availability and usage event, shared with the team."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "List the features in the main navigation and settings in a spreadsheet"
                - "Add owner, launch month and plan availability for each feature"
                - "Match each feature to the event that shows it being used"
                - "Add features shipped in the last month to the inventory @recurring(monthly:5)"
            - name: Written definition of an adopted user per feature
              description: |-
                ## Purpose
                Clicking a button once is not adoption, yet many dashboards count it that way and every feature looks like a success. Writing down, per feature, what counts as adopted (for example, used on three separate days within 30 days) turns arguments about whether a feature landed into a lookup.

                ## Milestones
                1. A default adoption rule agreed for the product, with the usage count and the time window stated.
                2. Feature-specific exceptions written for features used naturally weekly, monthly or once a year.
                3. Each definition names the exact event and any property filters it relies on.
                4. Definitions recorded in the feature inventory and approved by the product lead.

                ## Notes
                Match the window to how often the job naturally happens. A payroll feature used monthly should not be judged on a seven-day window.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "Every feature in the inventory has a written adoption rule stating the event, the count and the time window, approved by the product lead."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Draft a default rule such as three days of use within 30 days"
                - "Mark features whose natural frequency is monthly or rarer"
                - "Write a specific rule for each exception with its own window"
                - "Review the definitions with the product lead and record approval"
            - name: Eligible user base for each feature
              description: |-
                ## Purpose
                An adoption rate is only as honest as its denominator: dividing users of an admin-only feature by all users makes it look like a failure. Defining who could actually use each feature, by plan, role, platform and permission, keeps rates comparable and stops good features being cut for the wrong reason.

                ## Milestones
                1. Eligibility rules written for each feature covering plan, role, platform and permissions.
                2. A saved user segment or query for each eligible base in the analytics tool.
                3. Adoption rates recalculated against eligible users rather than all users.
                4. Features whose rate changed sharply under the new denominator noted for the team.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Each tracked feature has a saved eligible-user segment, and the dashboard reports adoption against it rather than total users."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Note which plans, roles and platforms can see each feature"
                - "Build a saved segment for the eligible users of the top ten features"
                - "Recalculate adoption for those features against the eligible base"
                - "Recheck eligibility rules when plans or permissions change @recurring(quarterly)"
            - name: Adoption event coverage audit
              description: |-
                ## Purpose
                Before building any adoption report, check that the events it needs exist, fire once per real action and carry the properties you will filter on. An audit of the top features against live event data finds the gaps early, so the instrumentation backlog gets a precise list instead of a vague complaint.

                ## Milestones
                1. Each feature in the inventory checked against live event data for the last 30 days.
                2. Features marked as fully tracked, partly tracked or untracked.
                3. Double-firing, missing properties and renamed events written up with examples.
                4. A ranked list of tracking gaps handed to the engineering or analytics owner.

                ## Notes
                This audit is about whether adoption can be answered. Designing the event schema itself belongs to the instrumentation work.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "Every inventory feature has a tracked, partly tracked or untracked status, and the gaps list has been accepted by an engineering owner."
                cadence: one-shot
                effort_hours_estimate: "10"
              tasks:
                - "Pull 30 days of event counts for the events in the feature inventory"
                - "Trigger each top feature yourself and check the events that fire"
                - "Mark each feature as tracked, partly tracked or untracked"
                - "Send the ranked gap list to the engineering owner with examples"
            - name: Discovered, tried and kept funnel stages
              description: |-
                ## Purpose
                A single adoption percentage hides where users are lost. Splitting each feature into three stages, saw it, tried it once and kept using it, shows whether the fix is visibility, first-use experience or ongoing value, which are three very different pieces of work.

                ## Milestones
                1. Discovery, first use and repeat use each tied to a specific event per feature.
                2. A three-step funnel built for the five most important features.
                3. Conversion between each stage recorded as a starting baseline.
                4. The weakest stage for each of the five features named in a one-line summary.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Five key features each have a discovered, tried and kept funnel in the analytics tool, with the weakest stage named."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Pick the five features the business cares most about"
                - "Choose the discovery, first use and repeat use event for each"
                - "Build the three-step funnel for each feature in the analytics tool"
                - "Write one line per feature naming its weakest stage"
            - name: Baseline adoption snapshot of the top 20 features
              description: |-
                ## Purpose
                Without a dated baseline every later number is a guess about whether things improved. A snapshot of discovery, trial and kept rates for the 20 most important features, taken on a fixed date with the definitions written beside it, becomes the reference point for every review that follows.

                ## Milestones
                1. Discovery, trial and kept rates for 20 features captured on one date.
                2. Each figure stored with its definition, denominator and date range.
                3. Features ranked from strongest to weakest adoption.
                4. The snapshot saved where the team can find it a year from now.

                ## Notes
                Start from the **Metrics log** template. Store the numbers as values, not as a live chart, so the baseline does not quietly change.
              priority: high
              deadlineOffsetDays: 45
              frontmatter:
                mode: research
                output_kind: artifact
                success_criteria: "A dated snapshot of adoption rates for 20 features, with definitions and denominators, saved as static values."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Create an adoption log from the metrics log template"
                - "Choose the 20 features by revenue, usage or strategic weight"
                - "Record discovery, trial and kept rates for each on one date"
                - "Rank the features and highlight the bottom five"
            - name: Adoption targets written into every spec
              description: |-
                ## Purpose
                Teams that only decide what good adoption looks like after launch tend to declare whatever happened a success. Adding an expected adoption figure, a time frame and the user group to every spec before build starts makes post-launch reviews a comparison rather than a debate.

                ## Milestones
                1. A short adoption section added to the team's spec format.
                2. The section asks for expected kept rate, eligible group and review date.
                3. The next three specs written with targets filled in.
                4. Targets copied into the feature inventory at launch.
              priority: medium
              deadlineOffsetDays: 60
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "The spec format includes an adoption target section, and the next three specs written use it with figures filled in."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Add an expected adoption section to the spec format"
                - "Write guidance on choosing a target from similar past features"
                - "Fill in targets for the specs currently in progress"
                - "Copy each target into the feature inventory when the feature ships"
            - name: First feature adoption dashboard
              description: |-
                ## Purpose
                Adoption numbers scattered across ad hoc queries get pulled once and forgotten. One dashboard showing discovery, trial and kept rates per feature, against eligible users and with launch dates marked, gives the team a single place to look before any planning conversation.

                ## Milestones
                1. A dashboard with one row or tile per tracked feature.
                2. Discovered, tried and kept rates shown against eligible users.
                3. Launch dates and major changes marked on each trend line.
                4. The dashboard numbers reconciled against raw event counts once.
                5. The link pinned in the team channel and the feature inventory.
              priority: high
              deadlineOffsetDays: 45
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A live adoption dashboard covering the top 20 features against eligible users, reconciled once against raw counts and linked from the inventory."
                cadence: one-shot
                effort_hours_estimate: "12"
              tasks:
                - "Sketch the dashboard layout on one page before building it"
                - "Build tiles for the top 20 features using the saved eligible segments"
                - "Annotate launch dates and major releases on each trend"
                - "Check dashboard figures against raw event counts @recurring(quarterly)"
            - name: Adoption metric glossary for the product team
              description: |-
                ## Purpose
                When one person says active and another says adopted, meetings go in circles. A one-page glossary defining discovery rate, trial rate, kept rate, breadth, depth, stickiness and eligible base, each with a worked example, gives everyone the same vocabulary.

                ## Milestones
                1. Eight to twelve adoption terms defined in plain language.
                2. Each term has a worked example using a real feature.
                3. Terms that were being used inconsistently are called out.
                4. The glossary linked from the dashboard and the spec format.
              priority: medium
              deadlineOffsetDays: 60
              frontmatter:
                mode: building
                output_kind: knowledge
                success_criteria: "A glossary of at least eight adoption terms with worked examples is published and linked from the dashboard."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "List the adoption terms used in the last month of meetings and docs"
                - "Ask the agent to draft plain-language definitions for each term"
                - "Add a worked example from your own product to each definition"
                - "Review the glossary against current dashboard definitions @recurring(yearly)"
            - name: Weekly adoption review of recent launches
              description: |-
                ## Purpose
                The first 90 days after a launch are when adoption problems are cheapest to fix, and also when teams have already moved on to the next thing. A 20-minute weekly look at every feature launched in that window catches stalled funnels while the people who built them still remember how.

                ## Milestones
                1. A standing list of features launched in the last 90 days.
                2. A short weekly slot where the team looks at each feature's funnel.
                3. Any feature below its spec target gets a named owner and next step.
                4. Features graduate off the list at day 90 with a recorded outcome.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "The weekly review runs at least 10 times in a quarter, and every feature leaving the 90-day list has a recorded outcome."
                cadence: rolling
              tasks:
                - "Book a recurring 20-minute slot with the product trio"
                - "List every feature launched in the last 90 days with its target"
                - "Review funnels for features launched in the last 90 days @recurring(weekly:tue)"
                - "Record an outcome for each feature reaching day 90"
            - name: Thirty, sixty and ninety day adoption checkpoints
              description: |-
                ## Purpose
                Early adoption numbers are inflated by curiosity and launch announcements, and later ones by habit. Recording the kept rate at fixed checkpoints of 30, 60 and 90 days after launch makes features comparable with each other, whatever month they shipped.

                ## Milestones
                1. A checkpoint schedule calculated from each feature's launch date.
                2. Kept rate, trial rate and eligible base recorded at each checkpoint.
                3. Each checkpoint compared with the target in the spec.
                4. A rolling table of checkpoint results for every feature launched this year.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every feature launched in the last year has recorded rates at 30, 60 and 90 days, compared against its spec target."
                cadence: rolling
              tasks:
                - "Add 30, 60 and 90 day dates to each recent feature in the inventory"
                - "Create a checkpoint table with one row per feature per checkpoint"
                - "Record rates for features reaching a checkpoint this month @recurring(monthly:3)"
                - "Flag any feature whose kept rate falls between 30 and 90 days"
            - name: Monthly feature adoption report for leadership
              description: |-
                ## Purpose
                Leaders hear about launches and rarely hear what happened next, so investment follows shipping rather than use. A one-page monthly report naming the biggest adoption wins, the worst stalls and the decisions needed keeps adoption in the conversation where budgets get set.

                ## Milestones
                1. A one-page report format with wins, stalls and decisions needed.
                2. Every figure in the report traceable to the dashboard.
                3. The report sent on a fixed day each month.
                4. At least one decision per quarter traced back to something in the report.

                ## Notes
                Lead with the decision you need, not the chart. Leaders forward one sentence, not a dashboard.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A monthly adoption report is sent on the same day for three consecutive months, each naming at least one decision needed."
                cadence: rolling
              tasks:
                - "Agree with your manager which leaders receive the report"
                - "Draft a one-page format with wins, stalls and decisions needed"
                - "Send the monthly adoption report @recurring(monthly:8)"
                - "Note which report items led to a decision each quarter"
            - name: Quarterly feature portfolio adoption review
              description: |-
                ## Purpose
                Once a quarter, every feature deserves a verdict, not only the new ones. Sorting the whole inventory into keep, improve, promote or retire, based on kept rate, trend and cost, gives roadmap planning a list of features that need work and a list that need letting go.

                ## Milestones
                1. Every feature in the inventory placed in keep, improve, promote or retire.
                2. Each placement supported by its kept rate and three-month trend.
                3. Improve and promote features turned into backlog items with owners.
                4. Retire candidates passed to the deprecation process with the evidence.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: decision
                success_criteria: "Each quarter, every inventory feature has a recorded verdict, and improve and retire items have owners."
                cadence: cyclic
              tasks:
                - "Export kept rates and three-month trends for every feature"
                - "Run the keep, improve, promote or retire session @recurring(quarterly)"
                - "Create backlog items with owners for improve and promote features"
                - "Send retire candidates and their evidence to the deprecation owner"
            - name: Weekly adoption tracking health check
              description: |-
                ## Purpose
                A renamed event or a broken release can make a healthy feature look abandoned overnight, and the team may cut it before anyone notices the tracking failed. A short weekly check of event volumes against the previous four weeks catches silent breaks before they become bad decisions.

                ## Milestones
                1. A list of the events behind the top 20 features with normal weekly ranges.
                2. A weekly comparison of each event's volume against its four-week average.
                3. Any drop over an agreed threshold raised with engineering the same week.
                4. Dashboard periods affected by broken tracking annotated.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Event volumes for the top 20 features are checked every week, and every tracking break found is annotated on the dashboard."
                cadence: rolling
              tasks:
                - "Record the normal weekly range for each top feature event"
                - "Set a drop threshold that counts as a possible tracking break"
                - "Compare event volumes with the four-week average @recurring(weekly:mon)"
                - "Annotate the dashboard wherever tracking was broken"
            - name: Low adoption watchlist with named owners
              description: |-
                ## Purpose
                Features that nobody uses rarely get discussed, because nobody wants to admit their launch missed. A visible watchlist of features below their target, each with an owner and a dated next step, turns quiet failures into ordinary work.

                ## Milestones
                1. Features below target or below an agreed floor added to the watchlist.
                2. Each watchlist feature has an owner and a dated next step.
                3. Features leave the list only when they recover or a retire decision is made.
                4. The watchlist reviewed monthly with progress recorded.

                ## Notes
                Keep the tone neutral. A watchlist that feels like a wall of shame will be quietly emptied by lowering targets.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A watchlist exists in which every feature has an owner and a next step dated within 30 days, reviewed every month."
                cadence: rolling
              tasks:
                - "Set the adoption floor below which a feature joins the watchlist"
                - "Add every current feature below target or floor to the list"
                - "Assign an owner and a dated next step to each entry"
                - "Review watchlist progress with owners @recurring(monthly:15)"
            - name: Feature owner adoption scorecards
              description: |-
                ## Purpose
                Owners care about adoption when they can see their own features plainly. A monthly scorecard per owner, with each feature's kept rate, trend and target, makes adoption part of how a product manager judges their own work rather than a central report they skim.

                ## Milestones
                1. A scorecard view filtered to each feature owner.
                2. Each feature shows kept rate, three-month trend and target.
                3. Owners receive their scorecard on a fixed day each month.
                4. Owners add a one-line comment on any feature trending down.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Each feature owner receives a monthly scorecard for three consecutive months and comments on every declining feature."
                cadence: rolling
              tasks:
                - "Build a dashboard filter by feature owner"
                - "Add kept rate, trend and target columns to the owner view"
                - "Send each owner their scorecard @recurring(monthly:22)"
                - "Collect owner comments on any feature trending down"
            - name: Account-level adoption feed for customer success
              description: |-
                ## Purpose
                Customer success managers often learn an account never used the feature it bought only at renewal. A monthly feed of feature adoption per account, for the features in each customer's plan, gives them time to train, nudge or escalate well before the contract conversation.

                ## Milestones
                1. Adoption per account calculated for the features each plan includes.
                2. Accounts with paid features unused for 60 days flagged.
                3. A monthly feed agreed with the customer success lead on format and delivery.
                4. At least three accounts contacted because of the feed, with outcomes noted.
              priority: medium
              frontmatter:
                mode: service
                output_kind: habit
                success_criteria: "Customer success receives a monthly account adoption feed, and at least three accounts are contacted from it in the first quarter."
                cadence: rolling
              tasks:
                - "Ask the customer success lead which accounts and features matter most"
                - "Build an account by feature adoption table for paid features"
                - "Flag accounts with a paid feature unused for 60 days"
                - "Send the account adoption feed to customer success @recurring(monthly:12)"
            - name: Annual feature adoption census
              description: |-
                ## Purpose
                Once a year it is worth looking at every feature at once, including the ones that never made a report. A census of the full inventory, showing which features most users touch and which only a handful do, informs annual planning and shows how much of the product is carrying its weight.

                ## Milestones
                1. Kept rates for every feature in the inventory captured on one date.
                2. Features grouped into widely used, niche but valued and rarely used.
                3. Year-on-year changes compared against last year's census.
                4. A summary of findings shared before annual planning begins.
              priority: low
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A census of every inventory feature is completed and shared before the annual planning cycle starts."
                cadence: cyclic
              tasks:
                - "Check the inventory is complete before the census date"
                - "Run the full feature adoption census @recurring(yearly)"
                - "Group features into widely used, niche and rarely used"
                - "Ask the agent to summarise year-on-year changes for planning"
            - name: Adoption drop alerts for key features
              description: |-
                ## Purpose
                Sudden falls in use of a core feature, after a release or a change in a partner's API, are often noticed by customers first. Automated alerts on the kept rate and daily usage of the ten most important features tell the team within a day rather than at the monthly report.

                ## Milestones
                1. Ten key features chosen for alerting.
                2. Alert thresholds set for daily usage and weekly kept rate.
                3. Alerts routed to the owning team's channel with the dashboard link.
                4. Thresholds tuned after a month to cut false alarms.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Alerts cover ten key features, route to the owning team, and fewer than one false alarm a week fires after tuning."
                cadence: rolling
              tasks:
                - "Choose the ten features that most affect customers if they break"
                - "Set daily usage and weekly kept rate thresholds for each"
                - "Route alerts to the owning team channel with the dashboard link"
                - "Tune thresholds against last month's false alarms @recurring(monthly:26)"
            - name: Cohort analysis for feature retention
              description: |-
                ## Purpose
                Overall usage can rise while each new group of users drops a feature faster, hidden by growth in sign-ups. Learning to build and read cohort tables, grouped by the week users first tried a feature, shows whether the feature is getting stickier or just busier.

                ## Milestones
                1. A cohort table built for one feature, grouped by first-use week.
                2. Retention at weeks one, four and eight read for each cohort.
                3. A plain-language explanation of what the table shows written for the team.
                4. Cohort tables built for two more features without help.
              priority: medium
              deadlineOffsetDays: 90
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Cohort retention tables exist for three features, each with a written interpretation the team has reviewed."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "Work through your analytics tool's guide to retention cohorts"
                - "Build a first-use cohort table for one feature"
                - "Write a paragraph explaining what changed between cohorts"
                - "Repeat the analysis for two more features"
            - name: Reading feature retention curves
              description: |-
                ## Purpose
                A feature retention curve that flattens means a core group has made it part of their work; one that slides to zero means curiosity, not value. Practising on your own features, and comparing curves side by side, gives a quick judgement of which features are worth investing in.

                ## Milestones
                1. Retention curves plotted for five features over 12 weeks.
                2. Each curve labelled as flattening, sliding or too early to tell.
                3. The flattening level recorded as each feature's long-run kept rate.
                4. Findings shared with the feature owners.

                ## Notes
                A low curve that flattens can still be a valuable niche feature. Judge it against its eligible base, not the whole product.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Five features have labelled 12-week retention curves with their long-run kept rate recorded and shared with owners."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Plot 12-week retention curves for five features"
                - "Label each curve as flattening, sliding or too early"
                - "Record the level each flattening curve settles at"
                - "Share the labelled curves with each feature owner"
            - name: Path and funnel analysis in your analytics tool
              description: |-
                ## Purpose
                Many teams own an analytics tool that can show how users reach a feature, and only ever use its basic charts. Learning path analysis, funnel breakdowns by segment and time to convert lets a product manager answer most adoption questions without waiting in the analyst queue.

                ## Milestones
                1. A path report showing the three most common routes to one feature.
                2. A funnel broken down by plan, platform and signup month.
                3. Median time from discovery to first use calculated for one feature.
                4. Three adoption questions answered alone and checked by an analyst.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Three real adoption questions answered using path, breakdown and time-to-convert reports, each checked by an analyst."
                cadence: phased
                effort_hours_estimate: "12"
              tasks:
                - "Complete the vendor's tutorial on path and funnel reports"
                - "Build a path report ending at one key feature"
                - "Break a feature funnel down by plan and platform"
                - "Ask an analyst to check your answers to three adoption questions"
            - name: Correlation and causation in adoption claims
              description: |-
                ## Purpose
                Users of feature X retain twice as well is one of the most repeated and least reliable sentences in product reviews, because engaged users adopt more of everything. Learning the common traps, selection bias, reverse causation and survivorship, stops the team building roadmaps on a coincidence.

                ## Milestones
                1. The three most common causal traps in adoption data understood with examples.
                2. Two past adoption claims in your own team re-examined.
                3. A short checklist of questions to ask before accepting a retention claim.
                4. The checklist added to the monthly report template.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A causal claims checklist exists, has been applied to two past adoption claims and is part of the report template."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Read an introduction to selection bias in product analytics"
                - "Find two past claims linking a feature to retention"
                - "Re-examine each claim for selection and reverse causation"
                - "Write a five-question checklist for future adoption claims"
            - name: Interviews with users who never adopted
              description: |-
                ## Purpose
                Usage data shows that people did not use a feature but never why. Talking to five or six eligible users who saw a feature and did not try it, or tried it once and stopped, separates features that are hard to find from ones that are not worth the effort.

                ## Milestones
                1. Five or six non-adopters recruited from the eligible base of one feature.
                2. Interviews held with a short guide focused on their actual workflow.
                3. Reasons sorted into did not know, could not use and did not need.
                4. Findings shared with the feature owner with a recommended next step.

                ## Notes
                Start from the **Feedback themes** template. Ask about the last time they did the job the feature supports, not whether they like the feature.
              priority: medium
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "At least five non-adopter interviews completed for one feature, with reasons grouped and a next step agreed with its owner."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "Pull a list of eligible users who saw but never tried one feature"
                - "Write a short interview guide about their real workflow"
                - "Record reasons in a feedback themes page"
                - "Interview two non-adopters of a watchlist feature @recurring(monthly:18)"
            - name: Session replay review of first use
              description: |-
                ## Purpose
                Numbers say users abandon a feature at step two; watching ten recordings shows the button they could not find or the error they hit. A regular review of session replays for first-time users of a struggling feature gives the team specific fixes instead of guesses.

                ## Milestones
                1. Replays filtered to first-time users of one watchlist feature.
                2. Ten sessions watched with each point of hesitation noted.
                3. The three most common friction points written up with timestamps.
                4. At least one friction point turned into a backlog item.

                ## Notes
                Check that replays mask personal data before sharing clips, and follow your company's privacy rules for recordings.
              priority: low
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "Ten first-use sessions of a watchlist feature reviewed, with three friction points written up and one in the backlog."
                cadence: rolling
              tasks:
                - "Confirm session replays mask personal data in your tool"
                - "Filter replays to first-time users of one watchlist feature"
                - "Write up the three most common friction points with timestamps"
                - "Watch ten first-use replays of a watchlist feature @recurring(monthly:20)"
            - name: Writing adoption insights people act on
              description: |-
                ## Purpose
                On its own, a chart showing a 12 percent kept rate changes nothing. Learning to write adoption findings as a short claim, the evidence, what it means and the decision requested, makes reports get read and decisions get made.

                ## Milestones
                1. A four-part insight format: claim, evidence, meaning, decision.
                2. Three past adoption updates rewritten in the new format.
                3. Feedback collected from two readers on which version was clearer.
                4. The format used in the next monthly report.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Three past updates rewritten in a claim, evidence, meaning, decision format, and the format used in the next report."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Pick three adoption updates that led to no decision"
                - "Rewrite each as claim, evidence, meaning and decision"
                - "Ask two regular readers which versions were clearer"
                - "Use the new format in the next monthly report"
            - name: Discoverability audit of feature entry points
              description: |-
                ## Purpose
                Low discovery is the cheapest adoption problem to fix, because the feature already works and people simply cannot see it. Auditing where each watchlist feature can be reached, from navigation, contextual links, search and empty states, usually turns up features with one buried entry point.

                ## Milestones
                1. Every entry point for each watchlist feature listed with screenshots.
                2. Traffic through each entry point measured.
                3. Places where the feature should appear in context but does not identified.
                4. A ranked list of entry point changes agreed with design.
              priority: medium
              deadlineOffsetDays: 45
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "Each watchlist feature has its entry points mapped and measured, with a ranked list of changes agreed with design."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Screenshot every route to each watchlist feature"
                - "Measure how many users arrive through each entry point"
                - "Mark moments in related workflows where the feature belongs"
                - "Agree a ranked list of entry point changes with design"
            - name: In-app guide for an under-adopted feature
              description: |-
                ## Purpose
                Users who find a feature but stall at first use often need one prompt at the right moment, not a tour of everything. Building a short contextual guide for one watchlist feature, shown only to eligible users who have not tried it, and measuring its effect on trial and kept rates, shows whether guidance is the missing piece.

                ## Milestones
                1. One watchlist feature chosen where discovery is fine but trial is weak.
                2. A guide of no more than three steps shown in the relevant context.
                3. The guide targeted only at eligible users who have not tried the feature.
                4. Trial and kept rates compared for users who saw and did not see the guide.

                ## Notes
                Guides that fire on every login train users to close them without reading. Show it once, in context, and cap it.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A targeted guide is live for one feature, and its effect on trial and kept rates is measured against users who did not see it."
                cadence: phased
                effort_hours_estimate: "12"
              tasks:
                - "Choose a feature with good discovery but weak trial"
                - "Write a guide of three steps or fewer tied to the right moment"
                - "Target the guide at eligible users who have not tried the feature"
                - "Compare trial and kept rates with a group who did not see it"
            - name: Fix, promote or retire decision for low adopters
              description: |-
                ## Purpose
                Every product carries features that a few people use and everyone maintains. Making an explicit, evidence-backed call on the three weakest features, fix the experience, promote it to the right users or retire it, frees the team from carrying them by default.

                ## Milestones
                1. The three lowest adopting features chosen from the watchlist.
                2. A one-page case for each covering usage, who uses it, cost and customer impact.
                3. A fix, promote or retire decision recorded for each with the decision maker.
                4. Follow-up work scheduled, or the feature passed to the deprecation process.
              priority: high
              deadlineOffsetDays: 60
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "Three low-adoption features each have a recorded fix, promote or retire decision with a named decision maker and scheduled follow-up."
                cadence: one-shot
                effort_hours_estimate: "10"
              tasks:
                - "Pick the three weakest features from the watchlist"
                - "List the accounts and users who still rely on each"
                - "Estimate the maintenance and support cost of each feature"
                - "Record the fix, promote or retire decision with the decision maker"
            - name: Choosing a feature adoption analytics tool
              description: |-
                ## Purpose
                Teams outgrow spreadsheets and ad hoc queries, then face a choice between a product analytics tool, a digital adoption platform with guides and a warehouse plus BI approach. Comparing them on the questions you actually need answered, cost per tracked user and the work to keep them running avoids a tool nobody opens after three months.

                ## Milestones
                1. The ten adoption questions the tool must answer written down.
                2. Three options shortlisted across analytics, adoption platform and warehouse approaches.
                3. Each option tested against the same questions on real or sample data.
                4. A decision recorded with cost, owner and review date.

                ## Notes
                Start from the **Purchase decision** template. Check data residency and privacy terms before sending any user data in a trial.
              priority: medium
              deadlineOffsetDays: 60
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A tool decision recorded after testing three options against the same ten adoption questions, with cost and owner stated."
                cadence: one-shot
                effort_hours_estimate: "16"
              tasks:
                - "Write the ten adoption questions the tool must answer"
                - "Shortlist three options across different approaches"
                - "Test each option against the same questions"
                - "Record the decision in a purchase decision page"
            - name: First-use empty state redesign for one feature
              description: |-
                ## Purpose
                Blank screens are where many features lose people who were genuinely interested: they opened it, saw nothing and left. Redesigning the first-use state of one feature with an example, a template or a single clear starting action is a contained change that often lifts trial into repeat use.

                ## Milestones
                1. One feature chosen where many users open it once and leave.
                2. The current empty state reviewed in replays or interviews.
                3. A redesigned first-use state shipped with one clear starting action.
                4. Tried to kept conversion compared before and after the change.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A redesigned first-use state is live for one feature, with tried to kept conversion compared for four weeks before and after."
                cadence: phased
                effort_hours_estimate: "16"
              tasks:
                - "Find the feature with the biggest gap between opened and used"
                - "Review what users see the first time they open it"
                - "Brief design on one clear starting action or example"
                - "Compare conversion for four weeks before and after release"
            - name: Holdout test for an adoption nudge
              description: |-
                ## Purpose
                Adoption often rises after an email or banner, but it may have risen anyway. Holding back a random tenth of eligible users from the nudge and comparing their kept rate is the simplest honest way to know whether promotion caused the lift.

                ## Milestones
                1. One planned adoption nudge chosen, such as an email, banner or in-app message.
                2. A random holdout group of eligible users set aside before sending.
                3. Kept rates compared between nudged and holdout users after 30 days.
                4. The measured lift recorded and used to decide on future nudges.

                ## Notes
                Agree the comparison and the 30-day window before sending. Changing the measure after seeing results defeats the point.
              priority: low
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "One adoption nudge has a measured kept-rate lift against a random holdout group after 30 days, recorded for future use."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Choose one upcoming nudge that promotes a single feature"
                - "Set aside a random tenth of eligible users as a holdout"
                - "Write down the comparison and the 30-day window in advance"
                - "Compare kept rates for both groups after 30 days"
            - name: Breadth versus depth as the headline measure
              description: |-
                ## Purpose
                Breadth asks how many users touched a feature; depth asks how much the ones who use it rely on it. Some features succeed by reaching everyone and others by being used daily by a few, so choosing the headline measure per feature type stops niche power features being judged as failures.

                ## Milestones
                1. Features in the inventory sorted into broad, deep or both.
                2. A depth measure chosen for deep features, such as uses per active week.
                3. The dashboard showing the right headline measure for each type.
                4. The choice explained in the glossary.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "Each inventory feature is tagged broad, deep or both, and the dashboard shows the matching headline measure."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Tag each feature in the inventory as broad, deep or both"
                - "Choose a depth measure for features tagged deep"
                - "Update the dashboard to show the right measure per feature"
                - "Add a breadth and depth entry to the glossary"
            - name: Default on or opt in for new features
              description: |-
                ## Purpose
                Turning a feature on by default inflates adoption figures and can annoy users; making it opt in protects them but may bury it. Deciding the default deliberately, and knowing which choice your adoption numbers reflect, keeps comparisons between features fair.

                ## Milestones
                1. Current features listed with whether they are on by default or opt in.
                2. Adoption definitions adjusted so default-on features count active use, not exposure.
                3. A written rule for choosing defaults on future features.
                4. The rule added to the spec format.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A written rule for default-on versus opt-in exists in the spec format, and default-on features count only active use."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "List which features are on by default and which are opt in"
                - "Check that default-on features count only deliberate use"
                - "Write a rule for choosing defaults on future features"
                - "Add the default rule to the spec format"
            - name: Shorter time to first use of a key feature
              description: |-
                ## Purpose
                When users take weeks to try a feature they were sold on, many never do. Measuring the median days from account creation or eligibility to first use of one key feature, then removing the steps in between, brings value forward and gives adoption a clear number to move.

                ## Milestones
                1. Median days to first use measured for one key feature.
                2. The steps users must take before first use mapped.
                3. Two or three of those steps removed, shortened or automated.
                4. Median time to first use measured again after eight weeks.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Median time to first use of one key feature is measured before and eight weeks after removing at least two prerequisite steps."
                cadence: phased
                effort_hours_estimate: "20"
              tasks:
                - "Measure median days from eligibility to first use of one feature"
                - "Map every step a user takes before first use"
                - "Pick two or three steps to remove or automate"
                - "Measure the median again eight weeks after the change"
            - name: Adoption readiness check before a launch
              description: |-
                ## Purpose
                Launch day is the worst time to discover the new feature's events were never added, because the first weeks of data cannot be recovered. A short readiness check, events firing in staging, eligible segment built, dashboard tile ready and target written, means adoption can be read from the first morning.

                ## Milestones
                1. Discovery, first use and repeat use events verified in a test environment.
                2. The eligible user segment for the feature saved.
                3. A dashboard tile for the feature built and showing test data.
                4. The adoption target and checkpoint dates recorded in the inventory.

                ## Notes
                Start from the **Operational checklist** template. Make the check a gate for go or no-go, not a nice-to-have.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "The next launch passes an adoption readiness check before release, with events verified, segment saved and dashboard tile live."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Create an adoption readiness list from the operational checklist template"
                - "Verify the new feature's events fire correctly in staging"
                - "Build the eligible segment and dashboard tile before release"
                - "Add the readiness check to the launch go or no-go list"
            - name: Ninety day adoption retrospective for a launch
              description: |-
                ## Purpose
                Ninety days after a meaningful launch, the team knows enough to say whether it worked and why. A short retrospective comparing the target with what happened at each funnel stage, and what the team would change, feeds better estimates into the next spec.

                ## Milestones
                1. Funnel results at 30, 60 and 90 days set beside the spec target.
                2. A session held with the product trio and key stakeholders.
                3. Three lessons recorded for future launches.
                4. A follow-up decision on the feature: keep, improve or watchlist.
              priority: medium
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A 90-day retrospective is held for the most recent major launch, with three lessons and a follow-up decision recorded."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Book the retrospective for the launch's 90-day date"
                - "Prepare the funnel results beside the original target"
                - "Run the session and record three lessons"
                - "Record the keep, improve or watchlist decision"
            - name: Adoption slides for a key account review
              description: |-
                ## Purpose
                Business reviews with large customers go better when the product team can show exactly which features each team uses and where they are missing value. Preparing a two-slide adoption view for one key account, with recommendations, helps the account team and often surfaces product problems no dashboard shows.

                ## Milestones
                1. The account manager's goals for the review agreed.
                2. Adoption of the account's purchased features summarised in two slides.
                3. Two or three recommendations for features the account is not using.
                4. Product questions raised in the review written up afterwards.
              priority: low
              frontmatter:
                mode: service
                output_kind: deliverable
                success_criteria: "Two adoption slides delivered for one key account review, with product questions from the meeting recorded afterwards."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Ask the account manager what the review needs to achieve"
                - "Pull adoption for the features in the account's plan"
                - "Draft two slides with usage and recommendations"
                - "Write up product questions raised during the review"
            - name: Adoption readout at the planning offsite
              description: |-
                ## Purpose
                Planning offsites usually start from a list of new ideas, not from how the last year's ideas landed. A 15-minute readout of adoption across last year's launches, hits, misses and surprises, grounds the conversation in evidence before new bets are made.

                ## Milestones
                1. Last year's launches listed with kept rates against targets.
                2. Three hits, three misses and one surprise picked for the readout.
                3. A 15-minute slot secured on the offsite agenda.
                4. Decisions from the offsite that referenced the readout noted.
              priority: low
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A 15-minute adoption readout is delivered at the planning offsite, covering every launch from the previous year against its target."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Ask the offsite organiser for a 15-minute agenda slot"
                - "List last year's launches with targets and kept rates"
                - "Choose three hits, three misses and one surprise"
                - "Note which offsite decisions referenced the readout"
            - name: First 90 days inheriting a feature area
              description: |-
                ## Purpose
                Product managers who inherit a feature area often have no idea which of its features anyone uses. Spending the first weeks reading adoption across the area, meeting the heaviest users and finding the untracked features gives a new owner a grounded view before committing to any roadmap.

                ## Milestones
                1. Adoption of every feature in the inherited area read within 30 days.
                2. Five of the heaviest users and five lapsed users spoken to by day 60.
                3. Untracked or poorly tracked features listed for the instrumentation backlog.
                4. A one-page adoption view of the area shared with your manager by day 90.

                ## Notes
                Start from the **Onboarding 30/60/90** template.
              priority: medium
              deadlineOffsetDays: 90
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A one-page adoption view of the inherited area, informed by ten user conversations, is shared with your manager by day 90."
                cadence: phased
                effort_hours_estimate: "20"
              tasks:
                - "Create a 30, 60, 90 plan from the onboarding template"
                - "Pull adoption for every feature in the inherited area"
                - "Book calls with five heavy users and five lapsed users"
                - "Write the one-page adoption view for your manager"
            - name: Manager's adoption expectations for the team
              description: |-
                ## Purpose
                When a product leader only asks what shipped, the team learns that shipping is the job. Managers who set a clear expectation that every launch is followed to 90 days, and ask about adoption in one to ones and reviews, change what the team pays attention to within a quarter.

                ## Milestones
                1. A written expectation that each PM tracks their launches to 90 days.
                2. Adoption added as a standing question in one to ones.
                3. Adoption outcomes included in how PM performance is discussed.
                4. Each PM able to state the kept rate of their last launch.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every PM on the team can state the kept rate of their last launch, and adoption is a standing one-to-one question for a quarter."
                cadence: rolling
              tasks:
                - "Write a short note setting the 90-day adoption expectation"
                - "Share the note with the team and discuss it in a team meeting"
                - "Ask each PM for one adoption insight in your one to ones @recurring(monthly:10)"
                - "Include adoption outcomes in the next performance conversations"
            - name: Spreadsheet adoption tracking for a small team
              description: |-
                ## Purpose
                Small teams without an analyst or a paid tool can still track adoption well. A weekly export of event counts into a spreadsheet, with the inventory, definitions and a simple kept-rate formula, covers the ten features that matter until the product justifies more.

                ## Milestones
                1. A spreadsheet with tabs for inventory, definitions and weekly counts.
                2. A repeatable export from the database or free analytics tier.
                3. Kept rate calculated automatically for ten features.
                4. Eight consecutive weeks of data captured.

                ## Notes
                Keep user identifiers out of the spreadsheet where possible. Aggregate counts are enough for most adoption questions.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A spreadsheet holds eight consecutive weeks of adoption data for ten features with kept rate calculated automatically."
                cadence: rolling
              tasks:
                - "Set up a spreadsheet with inventory, definitions and counts tabs"
                - "Write the export query or report for the ten key features"
                - "Add a formula for kept rate per feature per week"
                - "Paste in the weekly export and check the chart @recurring(weekly:wed)"
            - name: Account versus user adoption in B2B products
              description: |-
                ## Purpose
                In business software a feature can be used by one admin in every account or by everyone in a few accounts, and the two tell very different stories. Tracking both account-level and user-level adoption for the main features shows whether a feature has spread inside customers or only been switched on.

                ## Milestones
                1. Account-level adoption defined, such as at least one kept user in the account.
                2. User-level adoption within adopting accounts calculated.
                3. Features compared on both measures in one table.
                4. Features with wide account reach but thin user spread flagged for owners.
              priority: medium
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "The top ten features show both account-level and within-account user adoption, with thin-spread features flagged to owners."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Define what makes an account count as having adopted a feature"
                - "Calculate user-level adoption inside adopting accounts"
                - "Put both measures for the top ten features in one table"
                - "Flag features with wide account reach but thin user spread"
            - name: Adoption after a redesign or migration
              description: |-
                ## Purpose
                Redesigns and platform migrations often quietly lose users of features that moved or changed name. Comparing feature use before and after the change, for the same users, shows which features survived and which need a path back before support tickets reveal it.

                ## Milestones
                1. Kept rates for affected features captured before the change.
                2. Event mapping between old and new versions written down.
                3. The same users' feature use compared four and eight weeks after.
                4. Features with a significant drop given a recovery plan.
              priority: medium
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "Before and after kept rates exist for every feature affected by the redesign, and each one that dropped has a recovery plan."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "List features whose location, name or flow is changing"
                - "Snapshot their kept rates before the change ships"
                - "Map old events to their new equivalents"
                - "Compare the same users' feature use at four and eight weeks"
            - name: Adoption of features in paid plans
              description: |-
                ## Purpose
                Customers who pay for a higher plan and never use the features that justify it are at risk at renewal. Tracking adoption of plan-defining features only among the customers entitled to them shows whether the upgrade is delivering what was sold.

                ## Milestones
                1. The features that define each paid plan listed.
                2. Adoption of those features measured among entitled accounts only.
                3. Accounts on higher plans using none of their plan's features identified.
                4. Findings shared with the pricing owner and customer success.
              priority: medium
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "Adoption of plan-defining features is measured for entitled accounts, and unused-plan accounts are listed for customer success."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "List the features that define each paid plan"
                - "Measure their adoption among entitled accounts only"
                - "Identify higher-plan accounts using none of their plan's features"
                - "Share the findings with the pricing owner and customer success"
            - name: Estimating the retention impact of a feature
              description: |-
                ## Purpose
                Claims that a feature drives retention need more than a comparison of adopters and non-adopters. Matching adopters with similar non-adopters on tenure, plan and prior activity, or using a natural experiment such as a staged release, gives a defensible estimate of what the feature is worth.

                ## Milestones
                1. One feature chosen where a retention claim matters to a decision.
                2. Adopters matched to similar non-adopters on tenure, plan and activity.
                3. Retention compared for matched groups, with uncertainty stated.
                4. The method and estimate reviewed by an analyst or data scientist.

                ## Notes
                Even a careful matched comparison is an estimate. State the range and the assumptions, not a single headline figure.
              priority: low
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A matched-comparison retention estimate for one feature, with stated uncertainty, is reviewed by an analyst."
                cadence: phased
                effort_hours_estimate: "20"
              tasks:
                - "Pick one feature whose retention claim affects a decision"
                - "Agree matching variables with an analyst"
                - "Run the matched comparison and state the uncertainty"
                - "Ask the agent to draft a plain summary of the method and limits"
            - name: Feature co-adoption and sequence map
              description: |-
                ## Purpose
                Features are rarely adopted alone: some are stepping stones to others, and some are only used together. Mapping which features tend to be adopted together and in what order shows where to point users next and which features should be designed as one.

                ## Milestones
                1. Co-adoption rates calculated for pairs among the top 20 features.
                2. The most common adoption order for kept users identified.
                3. Stepping-stone features that precede wider adoption named.
                4. Findings turned into two in-product suggestions or design changes.
              priority: low
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A co-adoption matrix and common adoption sequence for the top 20 features lead to two agreed product changes."
                cadence: one-shot
                effort_hours_estimate: "12"
              tasks:
                - "Calculate pairwise co-adoption for the top 20 features"
                - "Find the most common order in which kept users adopt them"
                - "Name the stepping-stone features that precede wider adoption"
                - "Propose two product changes based on the sequence"
            - name: Maintenance cost per adopted user
              description: |-
                ## Purpose
                Features that few people use still cost engineering time, support tickets and testing on every release. Estimating the yearly cost of each feature and dividing it by its kept users shows which features are expensive to carry and makes retire decisions less emotional.

                ## Milestones
                1. Engineering, support and infrastructure effort estimated per feature for a year.
                2. Cost per kept user calculated for the top 30 features.
                3. The five most expensive features per user highlighted.
                4. The analysis fed into the quarterly portfolio review.

                ## Notes
                Rough estimates are enough. The aim is to spot order-of-magnitude differences, not to build an accounting system.
              priority: low
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "Cost per kept user is estimated for 30 features, and the five most expensive are discussed at the next portfolio review."
                cadence: cyclic
              tasks:
                - "Ask engineering leads for rough yearly effort per feature"
                - "Pull support ticket counts tagged by feature"
                - "Calculate cost per kept user for the top 30 features"
                - "Refresh the cost per adopted user analysis @recurring(yearly)"
            - name: Internal adoption benchmarks by feature type
              description: |-
                ## Purpose
                Teams set adoption targets by guessing, then argue about whether 15 percent is good. Building internal benchmarks from your own launch history, grouped by feature type such as workflow, reporting, admin and integration, gives every new spec a realistic starting target.

                ## Milestones
                1. Past launches grouped by feature type.
                2. Median and range of kept rates at 90 days calculated per type.
                3. Benchmarks published alongside the spec adoption section.
                4. Benchmarks refreshed with each year's new launches.

                ## Notes
                Published industry benchmarks rarely use your definitions or denominator. Your own history is a better guide.
              priority: low
              frontmatter:
                mode: research
                output_kind: artifact
                success_criteria: "A benchmark table of 90-day kept rates by feature type, built from at least 15 past launches, is linked from the spec format."
                cadence: cyclic
              tasks:
                - "Group past launches by feature type"
                - "Calculate median and range of 90-day kept rates per type"
                - "Publish the benchmark table beside the spec adoption section"
                - "Refresh the benchmarks with the year's launches @recurring(yearly)"
            - name: Feature adoption signals in churn and expansion
              description: |-
                ## Purpose
                Changes in which features an account uses often show up months before a cancellation or an upgrade. Testing whether drops in key feature adoption predict churn, and whether new adoption predicts expansion, gives customer success an early warning built on product behaviour rather than gut feel.

                ## Milestones
                1. Historical churned and expanded accounts paired with their feature adoption history.
                2. Two or three adoption signals tested for predictive value.
                3. Signals that held up on a later period of data kept, the rest dropped.
                4. The surviving signals added to the account adoption feed.

                ## Notes
                Test any signal on a later period than the one it was found in. Patterns that only fit the past are common.
              priority: low
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "At least one adoption signal validated on a later data period is added to the account feed used by customer success."
                cadence: phased
                effort_hours_estimate: "24"
              tasks:
                - "Pull a year of churned and expanded accounts with adoption history"
                - "Propose two or three candidate adoption signals"
                - "Test each signal on a later period of data"
                - "Add the signals that held up to the account adoption feed"
---

# Feature Adoption Tracking

Feature adoption tracking is the habit of finding out, after every launch, who discovered a feature, who tried it and who kept using it, and then doing something about the answer. It is written for product teams and the managers who lead them, and runs from foundations (an inventory of features, a written definition of adoption, the right denominator and a first dashboard) through the weekly and monthly review machinery, the analysis skills that make the numbers honest, the decisions about features nobody uses, launch and review events, situations such as inheriting a product or working without an analyst, and the specialist work of measuring what adoption is actually worth.

The rhythms are a weekly look at recently launched features and tracking health, monthly reports, watchlists and scorecards, a quarterly portfolio review and a yearly census of every feature. The Metrics log, Feedback themes, Purchase decision, Operational checklist and Onboarding 30/60/90 templates pair with the projects that need them. Installing adds all 50 projects as active, so archive the ones that are not for you yet.
