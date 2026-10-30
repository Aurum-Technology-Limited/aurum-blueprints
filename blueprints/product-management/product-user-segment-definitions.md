---
id: product-management.product-user-segment-definitions
name: Product User Segment Definitions
description: "Segment definitions the whole product team trusts: clear assignment rules, sized and profiled groups, scheduled refreshes, segment-level metrics and the calls on which users to build for first."
category: business
version: 1.0.0
tags: [product-management, product-user-segment-definitions, team, manager, segmentation, behavioural-segments, personas, product-analytics]
author: Aurum Technology
starter_structure:
  templates:
    - metrics-log
    - purchase-decision
    - meeting-notes
    - onboarding-30-60-90
    - risk-register
  pillars:
    - name: Product Management
      emoji: "🧩"
      description: "Deciding what to build and why: discovery and research, roadmaps and prioritisation, specs and launches, pricing and packaging, product analytics, and the feedback loops that keep a product honest."
      pillarFrontmatter:
        review_cadence: monthly
      areas:
        - name: Product User Segment Definitions
          description: "Defining distinct user segments from behaviour and needs so the product team can prioritise and measure work for each group separately."
          projects:
            - name: Inventory of segment definitions already in use
              description: |-
                ## Purpose
                Most product teams already live with four or five competing segmentations: sales tiers by employee count, marketing personas, finance's plan types and whatever cohort filters an analyst saved last year. Listing every one of them, with its owner, its rule and where it is used, shows where the arguments in planning meetings really come from and what any new definition has to replace or reconcile.

                ## Milestones
                1. A list of every segmentation in active use across product, sales, marketing, finance and support.
                2. Each entry records the owner, the exact rule, the data source and the reports or tools that use it.
                3. Overlaps and contradictions marked, such as one account counted as mid-market by sales and small business by product.
                4. The inventory shared with the product team and with the owner of each definition.

                ## Notes
                Look in CRM fields, saved cohorts in the analytics tool, dashboard filters and old strategy decks. The definitions nobody remembers creating are often the ones still feeding a board metric.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: research
                output_kind: artifact
                success_criteria: "An inventory of every segmentation in use, with owner, rule, source and known conflicts, shared with all definition owners."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Search the analytics tool for saved cohorts and segment filters"
                - "Ask the sales, marketing and finance leads which customer groupings they report on"
                - "Record each definition's rule, owner and data source in one sheet"
                - "Mark every pair of definitions that classify the same account differently"
            - name: Decisions the segmentation must serve
              description: |-
                ## Purpose
                Segments built without a stated purpose end up as interesting charts that change nothing. Writing down the three to five product decisions the segmentation must inform, such as roadmap allocation, onboarding variants or which group a feature's success is judged on, gives every later choice of variable and boundary a test it can pass or fail.

                ## Milestones
                1. Three to five named decisions the segmentation must inform, each with the person who makes it.
                2. For each decision, the question it answers written as one sentence.
                3. Uses the segmentation is explicitly not for, such as sales territory design, listed.
                4. The purpose statement agreed by the product lead and pinned at the top of the segment dictionary.
              priority: high
              deadlineOffsetDays: 14
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A one-page purpose statement naming three to five decisions, their owners and the out-of-scope uses, approved by the product lead."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "List product decisions from the last two quarters that lacked a clear segment view"
                - "Write each decision the segmentation must serve as one question"
                - "Name the decision owner beside each question"
                - "Agree the purpose statement with the product lead"
            - name: Choosing the unit of segmentation
              description: |-
                ## Purpose
                A business product can segment by individual user, by workspace or by paying account, and each gives different answers: one account can hold an admin power user and forty occasional viewers. Choosing the unit deliberately, and saying how the other levels roll up, prevents the same customer appearing in three segments depending on who ran the query.

                ## Milestones
                1. Users, workspaces and accounts compared against the decisions in the purpose statement.
                2. One primary unit chosen, with the reason written down.
                3. A rule for rolling user behaviour up to the account, or pushing account traits down to users.
                4. The choice confirmed with the analyst or data engineer who will build it.

                ## Notes
                Many teams settle on two linked layers: account segments for roadmap and revenue questions, and user roles within them for design questions. That works as long as each layer has its own distinct names.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A written choice of segmentation unit with its roll-up rule, reviewed with the person who owns the data."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Write down how many users a typical account holds and the range"
                - "Test two candidate units against each decision in the purpose statement"
                - "Draft the roll-up rule between users and accounts"
                - "Review the chosen unit with the data engineer who will build it"
            - name: Shortlist of candidate segmentation variables
              description: |-
                ## Purpose
                Plan type and company size are easy to segment on because they already sit in the CRM, but they rarely explain why users behave differently. Building a long list of candidate variables across behaviour, stated needs, role, context and firmographics, then cutting it to the eight to twelve that plausibly drive different product needs, keeps the first cut from defaulting to whatever was convenient.

                ## Milestones
                1. A long list of at least 25 variables grouped by behaviour, needs, role, context and firmographics.
                2. Each variable rated for how plausibly it drives different product needs and how available its data is.
                3. A shortlist of eight to twelve variables, each with a sentence on why it might matter.
                4. Variables rejected for privacy or fairness reasons recorded with the reason.
              priority: medium
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A shortlist of eight to twelve candidate variables, each rated and justified, with rejected sensitive variables recorded."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Brainstorm variables with one designer and one engineer for 45 minutes"
                - "Rate each variable for relevance to product needs and data availability"
                - "Cut the list to eight to twelve variables with a reason for each"
                - "Note any variable that touches sensitive personal data"
            - name: Data availability audit for segment attributes
              description: |-
                ## Purpose
                A segment that depends on a field filled in for 30 percent of accounts will quietly misclassify the other 70. Checking, for each shortlisted variable, where the data lives, how complete and fresh it is and whether it joins to product usage separates the segments you can build this quarter from the ones that need tracking or data work first.

                ## Milestones
                1. Each shortlisted variable mapped to its source system and field.
                2. Fill rate, refresh frequency and join key recorded for every variable.
                3. Variables marked ready, fixable within a sprint, or not available.
                4. Requests for missing tracking or data fields raised with the owning team.

                ## Notes
                Self-reported fields from sign-up forms decay fast. Treat job titles and company sizes typed in by users as hints, not facts.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: research
                output_kind: artifact
                success_criteria: "Every shortlisted variable has a recorded source, fill rate, freshness and readiness rating, with tickets raised for the blockers."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Map each shortlisted variable to its source system and field"
                - "Query the fill rate for each field across active accounts"
                - "Check how often each source refreshes and how it joins to usage data"
                - "Raise tickets for missing fields that block a priority variable"
            - name: First-draft behavioural segments from usage data
              description: |-
                ## Purpose
                Behavioural segments, built from what people actually do in the product, are usually more stable and more useful to a product team than demographic ones. A first draft of four to seven segments from 90 days of usage, such as daily operators, weekly reporters, admin-only accounts and dormant seats, gives the team something concrete to argue with instead of an abstract debate.

                ## Milestones
                1. Ninety days of usage pulled for the chosen unit, covering the shortlisted behavioural variables.
                2. Four to seven draft segments, each described by its distinctive behaviours.
                3. Each segment's share of the active base and of revenue calculated.
                4. The draft reviewed with two product managers and one designer, and their objections recorded.

                ## Notes
                Start with simple rules on two or three variables before reaching for clustering. Rules the team can recite get adopted; clusters nobody can explain get ignored.
              priority: high
              deadlineOffsetDays: 45
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A draft of four to seven behavioural segments with shares of base and revenue, reviewed by two product managers and a designer."
                cadence: phased
                effort_hours_estimate: "16"
              tasks:
                - "Pull 90 days of usage for the chosen unit and behavioural variables"
                - "Sketch rule-based groups on two or three variables"
                - "Calculate each draft segment's share of active users and revenue"
                - "Walk two product managers and a designer through the draft"
            - name: Needs-based segment hypotheses from existing research
              description: |-
                ## Purpose
                Usage data shows what people do but not why, and two users with identical click patterns can want very different things. Mining the interview notes, survey answers and support themes the team already holds for differences in goals and constraints produces needs-based hypotheses that can be laid over the behavioural draft before any new research is commissioned.

                ## Milestones
                1. Interview notes, survey results and support themes from the last 12 months gathered in one folder.
                2. Distinct goals, needs and constraints extracted and grouped.
                3. Three to six needs-based segment hypotheses written, each with supporting quotes or data.
                4. Each hypothesis mapped to the behavioural segments it most likely overlaps.
              priority: medium
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "Three to six needs-based hypotheses with evidence for each, mapped against the behavioural segments."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Gather the last 12 months of interview notes and survey exports in one folder"
                - "Ask the agent to extract stated goals and constraints from the notes"
                - "Group the extracted needs into three to six hypotheses"
                - "Map each hypothesis against the behavioural draft"
            - name: Segment sizing and value baseline
              description: |-
                ## Purpose
                A segment holding 4 percent of users and 40 percent of revenue deserves a different conversation from one that holds half the base and churns twice as fast. Recording each segment's size, revenue, growth, retention and support load as of one date gives the baseline every later review and allocation decision will compare against.

                ## Milestones
                1. Count of users and accounts per segment as of one dated snapshot.
                2. Revenue, 12-month growth and 90-day retention per segment recorded.
                3. Support tickets per account per segment calculated.
                4. The baseline table saved with its snapshot date and query, and shared with the team.
              priority: high
              deadlineOffsetDays: 45
              frontmatter:
                mode: research
                output_kind: artifact
                success_criteria: "A dated baseline table showing size, revenue, growth, retention and support load per segment, with its query saved."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Pick a snapshot date and freeze segment membership for it"
                - "Calculate count, revenue and growth per segment"
                - "Add 90-day retention and support tickets per account to each segment"
                - "Save the baseline table with the query that produced it"
            - name: Assignment rules and tie-breakers
              description: |-
                ## Purpose
                Segments only work as a shared language if every user or account lands in exactly one of them, every time, whoever runs the query. Writing precise entry rules, an order of precedence for accounts that meet two definitions and an explicit unclassified bucket stops the quiet drift that happens when each analyst resolves edge cases their own way.

                ## Milestones
                1. Each segment's entry rule written precisely enough to code without asking questions.
                2. An order of precedence for units that qualify for more than one segment.
                3. An unclassified bucket defined, with a ceiling on its acceptable size.
                4. The rules tested on 50 hand-picked edge cases, with expected and actual results compared.

                ## Notes
                Keep an unclassified bucket rather than forcing everyone in. If it grows past roughly 10 percent of units, the definitions need work, not the bucket.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Written assignment rules with precedence and an unclassified bucket, passing all 50 edge-case tests."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Write each segment's entry rule as plain conditions"
                - "Set the precedence order for units that match two segments"
                - "Pick 50 edge-case accounts and write down their expected segment"
                - "Run the rules on the edge cases and fix every mismatch"
            - name: One-page profiles for each segment
              description: |-
                ## Purpose
                Definitions in a data dictionary rarely change how a designer sketches or how an engineer weighs a trade-off. A one-page profile per segment, with its rule, size, typical behaviours, top needs, two real quotes and what success looks like for that group, gives the whole team a shared picture to bring into planning and design critique.

                ## Milestones
                1. A profile per segment with rule, size, revenue share and typical behaviours.
                2. Top three needs and two real customer quotes on each profile.
                3. What good looks like for each segment written as one measurable outcome.
                4. Profiles linked from the segment dictionary and walked through at a team meeting.

                ## Notes
                Use real quotes and real numbers. Invented names and stock photos turn profiles back into marketing personas.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A one-page profile exists for every segment, linked from the dictionary and presented to the product team."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Draft a profile layout with rule, size, behaviours, needs and quotes"
                - "Fill one profile and test it with a designer before writing the rest"
                - "Pick two real quotes per segment from research notes"
                - "Present the profiles at the next product team meeting"
            - name: Segment dictionary as the single source of truth
              description: |-
                ## Purpose
                Once segments exist, copies multiply: a slide with last year's rule, a dashboard filter someone tweaked, a spreadsheet in sales. A maintained dictionary holding each segment's name, rule, owner, version and canonical query is the one place anyone checks before quoting a number.

                ## Milestones
                1. A dictionary page listing every segment's name, rule, owner, version and canonical query.
                2. Links to the dictionary from the main product dashboards.
                3. Old copies of definitions replaced with links or marked as superseded.
                4. A monthly check confirming the dictionary still matches the live rules.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A dictionary page holds every segment's current rule and query, is linked from the main dashboards and matches the live logic at each monthly check."
                cadence: rolling
              tasks:
                - "Create the dictionary page with name, rule, owner, version and query"
                - "Link the dictionary from the three most used product dashboards"
                - "Replace or mark superseded copies found in decks and spreadsheets"
                - "Compare the dictionary rules with the live segment logic @recurring(monthly:9)"
            - name: Scheduled refresh of segment membership
              description: |-
                ## Purpose
                Behavioural segments go stale within weeks if membership is calculated once and pasted into a dashboard. A scheduled job that reassigns every unit on a fixed rhythm, logs how many moved and alerts someone when it fails keeps segment numbers current without anyone having to remember to rerun a query.

                ## Milestones
                1. Segment assignment running as a scheduled job rather than a manual query.
                2. A run log recording date, units assigned and units that changed segment.
                3. An alert to a named person when the job fails.
                4. Segment membership available as a field in the analytics tool and the CRM.

                ## Notes
                Weekly is usually enough for behavioural segments. Daily refreshes make segments flicker for users who sit near a boundary.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Segment membership refreshes on schedule with a run log and failure alert, and appears as a field in both analytics and the CRM."
                cadence: rolling
              tasks:
                - "Agree the refresh frequency and owner with the data engineer"
                - "Add a run log with units assigned and units moved"
                - "Sync the segment field to the analytics tool and the CRM"
                - "Check the latest refresh completed and its counts look sane @recurring(weekly:mon)"
            - name: Monthly segment metrics review
              description: |-
                ## Purpose
                Averages across the whole base hide the story: overall retention can hold steady while one segment quietly collapses and another grows. A short monthly review of the same five metrics per segment, recorded in one log, catches those movements while there is still time to act on them.

                ## Milestones
                1. Five metrics chosen for every segment, such as active units, retention, depth of use, revenue and support load.
                2. A dashboard view showing those metrics side by side by segment.
                3. A log entry each month with the two biggest movements and a likely cause.
                4. At least one follow-up action raised from the review each quarter.

                ## Notes
                Start from the **Metrics log** template. Keep the metric set fixed for at least two quarters so the trends mean something.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A log entry for each of at least six consecutive months, each naming the two largest segment movements and any follow-up raised."
                cadence: rolling
              tasks:
                - "Choose the five metrics every segment will be reviewed on"
                - "Build a dashboard view with the metrics side by side per segment"
                - "Log the two biggest segment movements and a likely cause @recurring(monthly:12)"
                - "Raise a ticket or research question for any unexplained movement"
            - name: Segment migration and drift watch
              description: |-
                ## Purpose
                Users move between segments as they grow, shrink or change how they work, and those movements are often the earliest signal of expansion or churn. A monthly migration matrix, from-segment against to-segment, shows which paths are healthy, such as trial accounts becoming daily operators, and which are warnings.

                ## Milestones
                1. A matrix showing how many units moved from each segment to each other segment last month.
                2. Healthy and warning paths labelled on the matrix.
                3. A short note each month on the three largest flows.
                4. A quarterly check of whether the boundaries still split the base sensibly.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A monthly migration matrix with labelled paths and a note on the largest flows, plus a recorded quarterly boundary check."
                cadence: rolling
              tasks:
                - "Build the from-segment to to-segment matrix for last month"
                - "Label which migration paths are healthy and which are warnings"
                - "Note the three largest flows and their likely cause @recurring(monthly:20)"
                - "Check whether any boundary now splits a natural group in two @recurring(quarterly)"
            - name: Quarterly roadmap allocation by segment
              description: |-
                ## Purpose
                Teams often agree to prioritise one segment and then spend most of a quarter building for whoever shouts loudest. Tagging every roadmap item with the segment it mainly serves, and comparing the share of effort against the agreed priorities each quarter, makes drift visible before planning rather than after it.

                ## Milestones
                1. Every roadmap item tagged with a primary segment or marked as platform work.
                2. Effort share per segment calculated from estimates or sprint data.
                3. Actual share compared against the agreed target share for each segment.
                4. Gaps of more than ten points explained or corrected in the next quarter's plan.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Each quarter, a recorded comparison of effort share per segment against target, with every gap over ten points explained."
                cadence: cyclic
              tasks:
                - "Add a primary segment field to the roadmap tool"
                - "Tag every item on the current roadmap with its primary segment"
                - "Compare effort share per segment with the agreed targets @recurring(quarterly)"
                - "Bring any gap over ten points to the next planning meeting"
            - name: Segment label on research notes and tickets
              description: |-
                ## Purpose
                Research notes and support tickets without a segment label cannot answer the question product managers ask most: is this a problem for everyone, or for one group? Adding the segment as an automatic field where the tools allow, and a required one where they do not, lets any theme be split by segment in seconds.

                ## Milestones
                1. A segment field added to the research repository, the support tool and the feedback inbox.
                2. The field filled automatically from the account record wherever possible.
                3. A short guide for researchers on labelling the participants they recruit.
                4. A monthly sample showing at least 90 percent of new records labelled.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "At least 90 percent of new research notes and tickets in each monthly sample carry a segment label."
                cadence: rolling
              tasks:
                - "List every tool where research notes or tickets are recorded"
                - "Add a segment field synced from the account record where possible"
                - "Write a three-line guide for labelling research participants"
                - "Sample 30 new records and count how many carry a segment @recurring(monthly:15)"
            - name: Segment quotas for research recruiting
              description: |-
                ## Purpose
                Research panels drift towards the customers who answer emails, usually the most engaged segment, so studies keep confirming what that one group wants. Setting a recruiting quota per segment for every study, and checking monthly who has actually been spoken to, keeps quieter segments from disappearing from the evidence.

                ## Milestones
                1. A default quota per segment for interviews and usability studies.
                2. Recruiting screeners updated to capture or look up each participant's segment.
                3. A running count of participants per segment over the last 90 days.
                4. Any segment below its quota for two months flagged to the research lead.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every segment meets its research quota over each rolling 90-day window, or the shortfall is flagged to the research lead."
                cadence: rolling
              tasks:
                - "Set a default participant quota per segment"
                - "Add a segment lookup to the recruiting screener"
                - "Count participants per segment over the last 90 days @recurring(monthly:24)"
                - "Flag any segment below quota to the research lead"
            - name: Annual segmentation review and re-cut
              description: |-
                ## Purpose
                Products change, markets shift and a segmentation built two years ago may describe a customer base that no longer exists. A yearly review, testing whether segments still differ in behaviour and needs, whether their sizes are workable and whether teams still use them, ends in a clear call to keep, adjust or re-cut.

                ## Milestones
                1. Each segment tested for whether it still differs meaningfully on key behaviours.
                2. Segments under a minimum workable size or without an active owner flagged.
                3. Product managers asked which segments they used in decisions and which they ignored.
                4. A recorded decision to keep, adjust or re-cut, with any changes scheduled.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A dated annual decision to keep, adjust or re-cut the segmentation, with its evidence and any changes scheduled."
                cadence: cyclic
              tasks:
                - "Compare key behaviours across segments to check they still differ"
                - "Flag segments below the minimum size or without an owner"
                - "Ask product managers which segments they used in decisions this year"
                - "Hold the annual keep, adjust or re-cut review @recurring(yearly)"
            - name: Versioned change log for segment definitions
              description: |-
                ## Purpose
                When a rule changes, last quarter's numbers stop matching this quarter's, and someone will spend a day discovering why. A versioned change log with what changed, why, the date and whether history was restated lets anyone reconcile a number across a definition change in minutes.

                ## Milestones
                1. A change log with version, date, change, reason and approver for every definition edit.
                2. A written policy for when history is restated and when it is footnoted.
                3. Dashboards showing the definition version they use.
                4. A quarterly check that no undocumented change has reached the live rules.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every definition change since the log began has an entry with reason and approver, and quarterly checks find no undocumented changes."
                cadence: rolling
              tasks:
                - "Create the change log with version, date, reason and approver columns"
                - "Write the restate or footnote policy in two sentences"
                - "Show the definition version on each segment dashboard"
                - "Diff the live rules against the last logged version @recurring(quarterly)"
            - name: Segment data quality checks
              description: |-
                ## Purpose
                Segment numbers break silently: a renamed event, a CRM field nobody fills in, a new plan that matches no rule. A small set of automated checks on the unclassified share, null rates in key fields and sudden swings in segment size catches these within days instead of at the next quarterly review.

                ## Milestones
                1. Checks running for unclassified share, null rates in key fields and week-on-week size swings.
                2. A threshold set for each check, with a named owner for alerts.
                3. A record of every alert, its cause and the fix.
                4. A monthly summary of check results shared with the product analytics lead.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Quality checks run weekly with thresholds and owners, and every alert has a recorded cause and fix."
                cadence: rolling
              tasks:
                - "Define thresholds for unclassified share, null rates and size swings"
                - "Route an alert for each check to a named owner"
                - "Review this week's check results and note the cause of any alert @recurring(weekly:thu)"
                - "Send the monthly quality summary to the analytics lead @recurring(monthly:6)"
            - name: Segmentation approaches compared
              description: |-
                ## Purpose
                Firmographic, demographic, behavioural, needs-based and value-based segmentations answer different questions, and mixing them in one scheme is the commonest reason segments feel muddled. Working through each approach with an example from your own product makes it far easier to explain why yours uses the lens it does.

                ## Milestones
                1. A one-paragraph explanation of each of the five approaches, in your own words.
                2. An example of each approach drawn from your own product.
                3. A note on which product decisions each approach suits.
                4. A short rationale for your chosen approach, ready for stakeholders.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Written notes on five segmentation approaches with a product example for each and a stakeholder-ready rationale for the chosen one."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Read two practitioner articles on behavioural and needs-based segmentation"
                - "Write a paragraph on each approach in your own words"
                - "Find an example of each approach in your own product data"
                - "Draft a three-sentence rationale for the approach you chose"
            - name: Cluster analysis basics for product managers
              description: |-
                ## Purpose
                Analysts may propose k-means or a similar method to find segments, and a product manager who cannot question the inputs will either reject good work or accept nonsense. Learning enough to ask how variables were scaled, how the number of clusters was chosen and whether clusters hold up on a second sample takes a few evenings.

                ## Milestones
                1. Scaling, distance, choosing the number of clusters and stability explained in your own notes.
                2. A small clustering run completed on a sample dataset in a notebook or spreadsheet tool.
                3. Five questions to ask any analyst presenting clusters, written down.
                4. One real clustering output reviewed using those questions.

                ## Notes
                Clustering always produces clusters, whether or not real groups exist. Stability across samples and a clear story for each cluster are the tests that matter.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Notes on four clustering concepts, one completed practice run and a written five-question review checklist."
                cadence: phased
                effort_hours_estimate: "12"
              tasks:
                - "Work through one introductory tutorial on k-means clustering"
                - "Run a small clustering on a sample of your usage data"
                - "Write five questions to ask about any clustering output"
                - "Use the questions on the next clustering an analyst shares"
            - name: Comparing retention curves across segments
              description: |-
                ## Purpose
                Blended retention curves can look flat while one segment's curve levels off early and another's slides towards zero. Learning to read segment-level cohort curves, including where each one flattens and how small cohorts widen the noise, turns the segment view into something you can act on.

                ## Milestones
                1. Retention curves plotted for each segment from the same start month.
                2. The point where each curve flattens noted, if it does.
                3. Cohort sizes shown on every curve so noisy ones are not over-read.
                4. Two written observations shared with the product team.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Segment retention curves plotted with cohort sizes, and two written observations shared with the team."
                cadence: phased
                effort_hours_estimate: "5"
              tasks:
                - "Plot 12-week retention curves for each segment from one start month"
                - "Mark where each curve flattens or keeps falling"
                - "Add cohort sizes so small segments are read with caution"
                - "Write two observations and share them with the product team"
            - name: Mix shift and Simpson's paradox in segment metrics
              description: |-
                ## Purpose
                An overall conversion rate can fall while every segment's rate rises, simply because the mix moved towards a lower-converting segment. Learning to separate mix shift from real change, with a worked example on your own data, stops a team chasing a problem that does not exist and missing one that does.

                ## Milestones
                1. Simpson's paradox and mix shift explained with a simple worked example.
                2. One product metric decomposed into rate change and mix change.
                3. A standard two-line note drafted for reports when the mix has moved materially.
                4. The concept explained to at least one colleague.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A worked decomposition of one product metric into rate and mix change, and a standard mix-shift note added to segment reports."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Work through a published example of Simpson's paradox"
                - "Decompose one product metric into rate change and mix change"
                - "Draft the mix-shift note for segment reports"
                - "Explain the example to a colleague in under five minutes"
            - name: Writing segment rules as queries and filters
              description: |-
                ## Purpose
                Rules written in prose leave room for interpretation, while a query does exactly what it says. Learning to express your segment rules as warehouse queries or cohort filters in the analytics tool, and to check them against the canonical version, lets a product manager verify a number without queueing for an analyst.

                ## Milestones
                1. Each segment rule rebuilt as a cohort filter in the analytics tool.
                2. At least one rule written as a warehouse query, reviewed by an analyst.
                3. Counts from your versions compared with the canonical query and any gaps explained.
                4. Your filters saved next to the canonical ones in the dictionary.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: artifact
                success_criteria: "Every segment rebuilt as a filter and at least one as a query, with counts matching the canonical version or the gap explained."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Rebuild one segment as a cohort filter in the analytics tool"
                - "Write the same segment as a warehouse query and ask an analyst to review it"
                - "Compare your count with the canonical query and explain any gap"
                - "Rebuild the remaining segments the same way"
            - name: Sample sizes and confidence for small segments
              description: |-
                ## Purpose
                With 300 accounts in a segment, a five-point swing can look dramatic when it is mostly noise. Learning how sample size drives confidence intervals, and what size a segment needs before a launch or experiment can be judged on it, stops the team overreacting to small groups and ignoring real signals in large ones.

                ## Milestones
                1. A confidence interval for a proportion calculated for one segment metric.
                2. The minimum detectable effect worked out for each segment at its current size.
                3. A rule written for when segment results are reported as directional only.
                4. The rule added to the segment dictionary.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A minimum detectable effect recorded for every segment and a written directional-only rule in the dictionary."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Calculate a confidence interval for one segment's conversion rate"
                - "Use a sample size calculator to find the minimum detectable effect per segment"
                - "Write a rule for when segment results count as directional only"
                - "Add the directional-only rule to the segment dictionary"
            - name: Personas versus segments in practice
              description: |-
                ## Purpose
                Teams often keep marketing personas with names and photos alongside data-driven segments, and confuse the two. Understanding that segments group users for measurement and allocation, while personas describe people for design empathy, lets you link each persona to the segments it represents instead of maintaining two competing stories.

                ## Milestones
                1. The difference between personas and segments written as a short explainer.
                2. Each existing persona mapped to one or more segments.
                3. Personas with no matching segment, and segments with no persona, listed.
                4. The mapping agreed with the design and marketing leads.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A persona-to-segment mapping agreed with design and marketing, with unmatched items listed."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Collect the current persona documents from design and marketing"
                - "Write a short explainer on how personas and segments differ"
                - "Map each persona to the segments it represents"
                - "Review the mapping with the design and marketing leads"
            - name: Presenting segments so stakeholders use them
              description: |-
                ## Purpose
                Segmentations fail more often on presentation than on analysis: a 40-slide deck nobody can repeat afterwards. Practising a five-minute version, with one chart of size against value, one sentence per segment and one decision it changes, is the skill that turns a model into the shared language of a company.

                ## Milestones
                1. A five-minute talk track that covers each segment in one sentence.
                2. A single chart of segment size against value.
                3. The talk rehearsed with a peer and their questions noted.
                4. A revised version given to one stakeholder group.
              priority: low
              frontmatter:
                mode: learning
                output_kind: deliverable
                success_criteria: "A five-minute segment presentation with one chart, rehearsed with a peer and delivered to one stakeholder group."
                cadence: phased
                effort_hours_estimate: "5"
              tasks:
                - "Write one jargon-free sentence describing each segment"
                - "Build one chart plotting segment size against value"
                - "Rehearse the five-minute version with a peer"
                - "Revise the talk from the peer's questions"
            - name: Merging or retiring overlapping segments
              description: |-
                ## Purpose
                Segmentations accumulate: a launch adds an enterprise pilot group, an analyst splits power users in two, and nobody removes anything. Reviewing which segments behave alike, have no owner or drive no decisions, and then merging or retiring them, keeps the set small enough for people to remember, usually five to eight.

                ## Milestones
                1. Segment pairs with similar behaviour and needs identified.
                2. Segments with no owner, or no decision use in the last two quarters, listed.
                3. A merge, retire or keep decision recorded for each candidate.
                4. The dictionary, dashboards and CRM updated to the reduced set.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A recorded merge, retire or keep decision for each candidate segment, with all tools updated to the reduced set."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Compare key metrics across segments to find pairs that behave alike"
                - "List segments not used in any decision for two quarters"
                - "Record a merge, retire or keep decision for each candidate"
                - "Update the dictionary and dashboards to the reduced set"
            - name: Choosing the primary segment to serve next
              description: |-
                ## Purpose
                Product teams that try to serve every segment equally end up with a roadmap of small wins for everyone and a big win for nobody. Scoring segments on size, growth, strategic fit, unmet need and cost to serve, then naming one primary segment for the next two quarters, gives every prioritisation argument a default answer.

                ## Milestones
                1. Each segment scored on size, growth, strategic fit, unmet need and cost to serve.
                2. Scores reviewed with sales, marketing and finance representatives.
                3. One primary and one secondary segment chosen for the next two quarters.
                4. The choice and its reasoning written up and shared with the product organisation.
              priority: high
              deadlineOffsetDays: 60
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A primary and a secondary segment named for the next two quarters, with scores and reasoning published to the product organisation."
                cadence: one-shot
                effort_hours_estimate: "10"
              tasks:
                - "Set up a scoring sheet with five weighted criteria"
                - "Score each segment using the sizing and value baseline"
                - "Review the scores with sales, marketing and finance representatives"
                - "Publish the primary segment choice and its reasoning"
            - name: Segment-specific success measures for roadmap items
              description: |-
                ## Purpose
                Features built for one segment but judged on whole-base adoption will look like failures even if their target users love them. Adding a target segment and a segment-level success measure to every roadmap item before work starts means launches are judged against the people they were meant for.

                ## Milestones
                1. Target segment and success measure fields added to the spec or roadmap template.
                2. Every item in the next quarter given a target segment and a measure.
                3. Baselines recorded for each measure before work begins.
                4. Post-launch reviews reporting the measure for the target segment.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Every roadmap item for the next quarter has a target segment, a segment-level measure and a recorded baseline."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Add target segment and success measure fields to the spec template"
                - "Fill both fields for every item in next quarter's plan"
                - "Record the current baseline for each measure"
                - "Check the first post-launch review reports the target segment result"
            - name: Splitting a catch-all segment by behaviour
              description: |-
                ## Purpose
                Most segmentations have one oversized group, often called core, standard or small business, that holds half the base and behaves like several different customers. Splitting it on two or three behavioural variables usually reveals sub-groups with very different retention and needs that deserve separate attention.

                ## Milestones
                1. The spread of key behaviours inside the oversized segment examined.
                2. Two to four candidate sub-segments proposed, each with a rule.
                3. Each sub-segment shown to differ on retention, depth of use or needs.
                4. A decision recorded to split, or to keep the segment whole with the reasons.
              priority: medium
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A recorded split-or-keep decision for the largest segment, with evidence that any new sub-segments differ on retention or use."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "Plot the spread of key behaviours inside the largest segment"
                - "Propose two to four sub-segment rules"
                - "Compare retention and depth of use across the proposed sub-segments"
                - "Decide to split or keep and record the reasons"
            - name: Standard segment breakdown in launch readouts
              description: |-
                ## Purpose
                Launch and experiment readouts that show only the blended result miss the cases where a change helps one segment and hurts another. Agreeing a standard segment table at the end of every readout, with the same segments, metrics and caveats each time, makes those splits routine rather than something someone has to remember to ask for.

                ## Milestones
                1. A standard segment table defined for launch and experiment readouts.
                2. The table added to the readout template with a caveat on small segments.
                3. The last three readouts reworked with the table as a test.
                4. A monthly check that new readouts include it.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "The readout template includes a standard segment table and every readout in the following quarter uses it."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Define the segments and metrics for the standard readout table"
                - "Add the table and small-segment caveat to the readout template"
                - "Rework the last three readouts with the table"
                - "Check that last month's readouts included the segment table @recurring(monthly:27)"
            - name: Reconciling product segments with sales and marketing tiers
              description: |-
                ## Purpose
                When sales calls an account enterprise because of headcount and product calls it a light user because of behaviour, the two teams' plans quietly contradict each other. Mapping product segments against sales tiers and marketing's ideal customer profile, and agreeing where they must match and where they legitimately differ, ends the argument about whose number is right.

                ## Milestones
                1. A crosswalk of product segments against sales tiers and marketing profiles.
                2. Accounts with conflicting labels across schemes counted and sampled.
                3. Agreement on which scheme is used for which decision.
                4. A shared field or join so each team can see the other teams' labels.
              priority: high
              deadlineOffsetDays: 60
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A crosswalk and a written agreement on which scheme governs which decision, signed off by the product, sales and marketing leads."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Build a crosswalk of product segments against sales tiers"
                - "Count the accounts whose labels conflict across the two schemes"
                - "Agree with sales and marketing leads which scheme each decision uses"
                - "Review the crosswalk with sales and marketing @recurring(quarterly)"
            - name: Choosing where segment logic lives
              description: |-
                ## Purpose
                Segment rules can live in the data warehouse, a customer data platform, the analytics tool or the CRM, and teams that let them live in all four end up with four answers. Comparing the options on accuracy, freshness, who can edit, cost and reach leads to one home for the logic, with synced copies everywhere else.

                ## Milestones
                1. Three options compared on accuracy, freshness, edit rights, cost and reach.
                2. Each option checked against the tools that need segment membership.
                3. One home for the logic chosen, with a sync plan to the other tools.
                4. The decision recorded with its cost and a review date.

                ## Notes
                Start from the **Purchase decision** template. A warehouse model synced outwards is a common default when an analytics engineer is available.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A recorded decision naming one home for segment logic, with costs, a sync plan and a review date."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "List every tool that needs segment membership as a field"
                - "Compare three homes for the logic on five criteria"
                - "Get a cost estimate for any paid option"
                - "Record the chosen home and the sync plan"
            - name: Sizing an underserved segment opportunity
              description: |-
                ## Purpose
                Some segments sit in the data with poor retention or shallow use, and the open question is whether the product fails them or they were never a fit. Estimating what it would be worth to close half the gap with a healthier segment, and setting that against the likely cost, turns a hunch into a case that can be argued.

                ## Milestones
                1. One underserved segment chosen, with its current retention and depth of use.
                2. The value of closing half the gap with a healthier segment estimated.
                3. The main product gaps for the segment listed from existing evidence.
                4. A recommendation to invest, test or leave, with the estimate attached.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A written invest, test or leave recommendation for one underserved segment, with a value estimate and a gap list."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Pick the segment with the widest gap to a healthier one"
                - "Estimate the revenue from closing half that gap"
                - "List the segment's product gaps from support and research notes"
                - "Write an invest, test or leave recommendation"
            - name: Naming the segments you will not build for
              description: |-
                ## Purpose
                Saying who the product is not for is harder than saying who it is for, and without it every request from a non-priority segment reopens the roadmap. Writing down which segments will be served with existing features only, and how sales and support should handle their requests, protects focus and gives customers honest answers.

                ## Milestones
                1. Segments to serve with existing features only, named with reasons.
                2. Guidance for sales and support on handling those segments' feature requests.
                3. Leadership sign-off on the list.
                4. The list revisited each year during planning.
              priority: high
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A signed-off list of non-priority segments with handling guidance for sales and support."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Draft the list of segments to serve with existing features only"
                - "Write how sales and support should respond to their requests"
                - "Get leadership sign-off on the list"
                - "Revisit the not-building-for list at annual planning @recurring(yearly)"
            - name: Segmentation readout to the leadership team
              description: |-
                ## Purpose
                New segmentations only change plans once leadership has seen them, questioned them and agreed to use them. A 30-minute readout covering the purpose, the segments, their size and value, the primary segment proposal and the decisions you need is the moment analysis becomes policy.

                ## Milestones
                1. A readout deck of no more than ten slides.
                2. A pre-read sent two days before, with the dictionary linked.
                3. The decisions requested listed on the first slide.
                4. Decisions made and open questions recorded and circulated within two days.
              priority: medium
              deadlineOffsetDays: 60
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "The readout held, with decisions and open questions recorded and circulated within two days."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Book 30 minutes in the leadership meeting"
                - "Ask the agent to draft a ten-slide outline from the profiles and baseline"
                - "Send the pre-read two days before the meeting"
                - "Circulate decisions and open questions within two days"
            - name: Segment boundary workshop with design and engineering
              description: |-
                ## Purpose
                Designers and engineers spot edge cases that dashboards miss, such as an account that looks dormant but runs everything through the API. A half-day workshop to challenge the draft segments against real accounts and agree the boundaries produces both better rules and the shared ownership that keeps people using them.

                ## Milestones
                1. Twenty real accounts near segment boundaries prepared as cards with usage summaries.
                2. Each draft segment challenged against the cards.
                3. Boundary changes agreed and recorded.
                4. Workshop notes shared within a day.

                ## Notes
                Start from the **Meeting notes** template. Choose accounts that sit near boundaries; obvious ones teach nobody anything.
              priority: medium
              deadlineOffsetDays: 30
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A workshop held with design and engineering, with agreed boundary changes recorded and notes shared within a day."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Pick 20 real accounts that sit near segment boundaries"
                - "Prepare a one-card usage summary for each account"
                - "Run the half-day workshop to sort the cards into segments"
                - "Record agreed boundary changes and share notes within a day"
            - name: Segment brief for annual planning
              description: |-
                ## Purpose
                Annual planning tends to start from last year's roadmap rather than from how the customer base has changed. A short segment brief, prepared before planning opens, with each segment's movement over the year, the main migration flows and the case for the primary segment, puts the base itself at the start of the conversation.

                ## Milestones
                1. Year-on-year change in size, value and retention per segment.
                2. The year's main migration flows summarised.
                3. A recommended primary segment and effort allocation for next year.
                4. The brief circulated before the first planning session.
              priority: medium
              frontmatter:
                mode: event
                output_kind: deliverable
                success_criteria: "A segment brief circulated before the first annual planning session, with year-on-year changes and a recommended allocation."
                cadence: cyclic
              tasks:
                - "Pull year-on-year size, value and retention per segment"
                - "Summarise the year's three largest migration flows"
                - "Draft the recommended allocation by segment for next year"
                - "Circulate the segment brief before annual planning opens @recurring(yearly)"
            - name: Company-wide segment dashboard launch
              description: |-
                ## Purpose
                Segments only become shared language when people outside product can see them without asking. Launching a self-serve segment dashboard to the company, with a short walkthrough, a definition link on every chart and a channel for questions, moves segment numbers from a product team artefact to something sales, support and finance quote correctly.

                ## Milestones
                1. A dashboard showing size, value and key metrics per segment, linked to the dictionary.
                2. A ten-minute recorded walkthrough.
                3. An announcement sent to sales, support, marketing and finance.
                4. Questions from the first month collected and the dashboard adjusted.
              priority: medium
              deadlineOffsetDays: 75
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A company dashboard launched with a walkthrough, and adjusted from the questions received in its first month."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Build the company dashboard with a dictionary link on each chart"
                - "Record a ten-minute walkthrough of the dashboard"
                - "Announce the dashboard to sales, support, marketing and finance"
                - "Collect questions for a month and adjust the dashboard"
            - name: Segment mix section for the quarterly business review
              description: |-
                ## Purpose
                Quarterly business reviews usually report total customers and revenue, which hides whether growth is coming from the segments the strategy targets. A standing segment mix section, one chart and three bullets, keeps leadership watching whether the base is moving the way the strategy says it should.

                ## Milestones
                1. One chart of segment mix by count and revenue over the last four quarters.
                2. Three standing bullets: biggest gain, biggest loss and progress in the primary segment.
                3. The section agreed with whoever owns the business review.
                4. The section refreshed before every review.
              priority: low
              frontmatter:
                mode: event
                output_kind: deliverable
                success_criteria: "A segment mix section with the chart and three standing bullets appears in each quarterly business review."
                cadence: cyclic
              tasks:
                - "Agree a slot for segment mix with the business review owner"
                - "Build the four-quarter segment mix chart"
                - "Write the three standing bullets for this quarter"
                - "Update the segment mix section before each business review @recurring(quarterly)"
            - name: Inheriting a segmentation as a new product manager
              description: |-
                ## Purpose
                Joining a team as a product manager means inheriting segments with history nobody wrote down: why a boundary sits at 20 seats, which segment the last leader promised to sales. Spending the first weeks reading the dictionary, re-running the core numbers and asking the original owners about their reasoning avoids both blindly trusting the scheme and tearing it up too early.

                ## Milestones
                1. The dictionary, change log and last two reviews read.
                2. Core segment counts re-run and matched to the published numbers.
                3. Conversations held with the original owners about why boundaries sit where they do.
                4. A list of questions and suspected issues shared with your manager.

                ## Notes
                Start from the **Onboarding 30/60/90** template. Hold off proposing changes until you can explain the current scheme in your own words.
              priority: medium
              deadlineOffsetDays: 45
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "Core counts reproduced and a written list of questions and issues shared with your manager within 45 days of starting."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Read the segment dictionary and its change log"
                - "Re-run the core segment counts and compare them with the dashboard"
                - "Ask the original owners why each boundary sits where it does"
                - "Share your questions and suspected issues with your manager"
            - name: Segmenting an early product with few users
              description: |-
                ## Purpose
                With a few hundred users, clustering is meaningless and per-segment dashboards are mostly noise. Early teams do better with two or three hand-defined segments based on use case or role, assigned by looking at accounts one by one, until the base is large enough for rules to hold.

                ## Milestones
                1. Two or three segments defined from use case or role.
                2. Every active account assigned by hand in a shared sheet, with a one-line reason.
                3. Qualitative notes per segment from the accounts the team knows well.
                4. A user count set at which assignment moves to written rules.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Every active account assigned by hand to one of two or three segments, with a written threshold for switching to rules."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "List every active account in a shared sheet"
                - "Agree two or three use-case segments as a team"
                - "Assign each account by hand with a one-line reason"
                - "Set the user count at which you will switch to rules"
            - name: Merging segmentations after an acquisition
              description: |-
                ## Purpose
                When two products or companies combine, each arrives with its own segments, metrics and history, and the combined board pack soon fills with numbers that cannot be added together. Mapping both schemes, agreeing a combined set and planning how history is restated gives the merged organisation a single view within a quarter or two.

                ## Milestones
                1. Both segmentation schemes documented side by side.
                2. A combined set of segments agreed, with a mapping from each old segment.
                3. A plan for restating historical numbers or footnoting the break.
                4. Dashboards for both products moved to the combined set.
              priority: medium
              deadlineOffsetDays: 90
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "A combined segmentation, with a mapping from both old schemes, live on the dashboards for both products and a recorded restatement approach."
                cadence: phased
                effort_hours_estimate: "20"
              tasks:
                - "Document both segment schemes side by side"
                - "Draft a combined set with a mapping from each old segment"
                - "Agree the restatement approach with both analytics leads"
                - "Move both product dashboards to the combined set"
            - name: Segment ownership across product teams
              description: |-
                ## Purpose
                Several product teams sharing one customer base tends to go one of two ways: every team claims the most valuable segment, or none feels responsible for the awkward one. A head of product or group product manager who gives each segment a single accountable owner, with the metrics they answer for, ends both problems.

                ## Milestones
                1. Each segment assigned one accountable product team or manager.
                2. The metrics each owner answers for written down.
                3. An escalation route for work that serves a segment but sits in another team's area.
                4. Ownership reviewed every quarter.
              priority: medium
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "Every segment has one accountable owner with named metrics, agreed by the product leads."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Draft a table of segments with a proposed owner for each"
                - "Write the metrics each owner will answer for"
                - "Agree the table with the product leads in one meeting"
                - "Review segment ownership as part of quarterly planning @recurring(quarterly)"
            - name: Separating buyer and user segments in business software
              description: |-
                ## Purpose
                In business software the person who signs the contract, the admin who configures it and the people who use it every day often want different things. Defining account segments for the buyer view and role segments for the users inside accounts lets the team see, for example, that a well-paying segment has a frustrated daily user base that predicts trouble at renewal.

                ## Milestones
                1. Account segments and user-role segments defined separately, with distinct names.
                2. User roles identified from permissions, behaviour or sign-up data.
                3. A cross-tab of account segment by user role, with key metrics.
                4. One finding from the cross-tab presented to the team.
              priority: medium
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "Separate account and role segments defined, with a cross-tab of key metrics and one finding presented to the team."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "List the roles users hold inside a typical account"
                - "Define role segments from permissions or behaviour"
                - "Build a cross-tab of account segment against user role"
                - "Present one finding from the cross-tab to the team"
            - name: Predictive propensity scores within segments
              description: |-
                ## Purpose
                Within every segment, some accounts are about to expand and others about to leave, and the segment label alone cannot tell them apart. A simple propensity score inside a priority segment, built with an analyst from a few leading behaviours, lets the team aim in-product prompts and research at the accounts where they matter most.

                ## Milestones
                1. Two to four leading behaviours for expansion or churn identified in one priority segment.
                2. A simple score built and back-tested on the last two quarters.
                3. Score accuracy recorded against a naive baseline.
                4. Scores available to product and customer success, with a monthly calibration check.

                ## Notes
                A logistic regression on a handful of behaviours is usually enough. An explainable score that beats chance modestly is more useful than an opaque one nobody trusts.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A propensity score for one priority segment, back-tested over two quarters and beating a naive baseline, with monthly calibration recorded."
                cadence: phased
                effort_hours_estimate: "24"
              tasks:
                - "Pick the outcome to predict, expansion or churn, with an analyst"
                - "Shortlist leading behaviours in the priority segment"
                - "Back-test the score on the last two quarters"
                - "Compare predicted and actual outcomes for last month @recurring(monthly:17)"
            - name: Lifetime value and cost to serve by segment
              description: |-
                ## Purpose
                Revenue per segment tells only half the story: a segment can pay well and still lose money once support, onboarding and infrastructure are counted. Building a simple lifetime value and cost-to-serve model per segment with finance shows which segments genuinely fund the product and which it subsidises.

                ## Milestones
                1. Average revenue, gross margin and expected lifetime per segment agreed with finance.
                2. Support, onboarding and infrastructure costs allocated to segments.
                3. Contribution per segment calculated and reviewed with finance.
                4. The model refreshed each year with year-end figures.

                ## Notes
                Agree the allocation method with finance before calculating anything. A model finance does not recognise will be ignored however good it is.
              priority: medium
              frontmatter:
                mode: research
                output_kind: artifact
                success_criteria: "A per-segment lifetime value and cost-to-serve model, reviewed with finance and refreshed every year."
                cadence: phased
                effort_hours_estimate: "16"
              tasks:
                - "Agree revenue, margin and lifetime assumptions with finance"
                - "Allocate support and onboarding hours by segment"
                - "Calculate contribution per segment and review it with finance"
                - "Refresh the segment value model with year-end figures @recurring(yearly)"
            - name: Privacy and fairness review of segment attributes
              description: |-
                ## Purpose
                Segment rules can quietly use or infer sensitive traits such as age, health or precise location, and treating segments differently can then disadvantage some groups or breach data protection rules. A structured review with privacy or legal colleagues of every attribute and every segment-driven experience records the risks and the controls before a regulator or a journalist asks.

                ## Milestones
                1. Every attribute used in segment rules listed with its source and sensitivity.
                2. Inferred traits and proxies for protected characteristics identified.
                3. Segment-driven experiences, such as different prompts or offers, listed with who could be disadvantaged.
                4. Risks and controls recorded and reviewed with privacy or legal colleagues.

                ## Notes
                Start from the **Risk register** template. Whether a use is lawful is a call for your privacy or legal team, not the product team.
              priority: medium
              frontmatter:
                mode: research
                output_kind: artifact
                success_criteria: "A risk register covering every segment attribute and segment-driven experience, reviewed with privacy or legal colleagues."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "List every attribute used in segment rules with its source"
                - "Flag attributes that could act as proxies for protected traits"
                - "List the product experiences that differ by segment"
                - "Review the register with privacy or legal colleagues @recurring(yearly)"
---

# Product User Segment Definitions

Product user segment definitions are the shared answer to a question every product team asks several times a week: which users are we actually talking about? This area is for product teams and the managers who lead them, and runs from foundations (an inventory of the definitions already in use, a stated purpose, the unit and variables, a data audit, a first behavioural draft and precise assignment rules) through the operating machinery that keeps segments current and used, the analysis and presentation skills behind them, decisions about which segments to serve, split or retire, readouts and planning moments, situations such as inheriting a scheme or merging two after an acquisition, and specialist work on propensity, value and fairness.

The rhythms are a weekly refresh and data quality check, monthly metrics, migration, labelling and recruiting reviews, quarterly allocation, ownership and business review updates, and a yearly re-cut, planning brief and value model refresh. The Metrics log, Purchase decision, Meeting notes, Onboarding 30/60/90 and Risk register templates pair with the projects that need them. Installing adds all 50 projects as active, so archive the ones that are not for you yet.
