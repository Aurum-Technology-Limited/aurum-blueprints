---
id: founding-startups.product-market-fit-search
name: Product-Market Fit Search
description: "A written definition of fit, retention cohorts and a disappointment survey you trust, a weekly iteration loop on segment and positioning, and the evidence to say when a clear segment is pulling the product from you."
category: business
version: 1.0.0
tags: [founding-startups, product-market-fit-search, founder, product-market-fit, retention-cohorts, positioning, segmentation]
author: Aurum Technology
starter_structure:
  templates:
    - metrics-log
    - meeting-notes
    - feedback-themes
    - product-spec
    - board-meeting
  pillars:
    - name: Founding & Startups
      emoji: "🚀"
      description: "Starting and steering a young company: validating the idea, incorporating, finding product-market fit, the founder's operating rhythm, co-founder relationships, runway and the hard calls of the early years."
      pillarFrontmatter:
        review_cadence: monthly
      areas:
        - name: Product-Market Fit Search
          description: "Iterating on product, audience and positioning until a clear segment pulls the product from you, and measuring when you are there."
          projects:
            - name: Written definition of product-market fit for this company
              description: |-
                ## Purpose
                Without a definition agreed in advance, every founder team either declares fit too early on the back of a good month or never declares it at all. Writing down the two or three measurable signals that would count as fit for your product, such as a flattening retention curve above a stated level and a survey score, turns a vague feeling into a test you can pass or fail.

                ## Milestones
                1. A one-page definition naming the segment, the usage behaviour and the thresholds that would count as fit.
                2. Each signal tied to a data source you already have or can build within a month.
                3. A list of signals that do not count, such as press, sign-ups or investor interest, agreed by the founders.
                4. The definition dated, signed off by every co-founder and stored where the team can find it.

                ## Notes
                Borrow benchmarks as a starting point, not a verdict. A daily-use consumer app and a quarterly-use B2B tool need very different retention thresholds.
              priority: high
              deadlineOffsetDays: 14
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A dated one-page fit definition with at least two numeric thresholds and a list of excluded vanity signals is signed off by all co-founders."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Write one sentence describing what fit would look like for your product"
                - "Pick two measurable signals and set a threshold for each"
                - "List the vanity signals the team agrees will not count as fit"
                - "Book thirty minutes with co-founders to sign off the definition"
            - name: Honest audit of current fit evidence
              description: |-
                ## Purpose
                Founders usually overrate their position because the loudest users and the best weeks are easiest to remember. Pulling every piece of evidence you hold into one place, retention by month of sign-up, revenue by customer, renewals, referrals and unprompted praise, shows where you actually sit before you change anything.

                ## Milestones
                1. Retention, revenue and usage figures for every sign-up cohort since launch gathered in one sheet.
                2. Each piece of qualitative evidence labelled as unprompted, prompted or paid for.
                3. The share of usage or revenue coming from the top ten accounts or users calculated.
                4. A short written verdict on where the company sits: no fit, fit in a pocket, or broad fit.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "One evidence sheet covering every cohort since launch exists, with a written verdict on current fit that a co-founder has challenged and accepted."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Export sign-ups and active users by month since launch"
                - "Label every testimonial or quote as unprompted, prompted or paid for"
                - "Work out how concentrated usage is in the top ten accounts"
                - "Write a three-line verdict and ask a co-founder to argue against it"
            - name: Single target segment hypothesis
              description: |-
                ## Purpose
                Fit is always fit with someone, and a product aimed at everyone collects lukewarm users from five segments and love from none. Choosing one segment, defined by role or life situation, a trigger moment and the alternative they use today, gives every later experiment a population to be measured against.

                ## Milestones
                1. One segment described by who they are, the moment the problem bites and what they use today.
                2. Current users tagged by whether they belong to the segment.
                3. Retention and survey results for the segment compared with everyone else.
                4. The segment hypothesis recorded with the evidence that would make you drop it.

                ## Notes
                Pick the segment that already shows the strongest usage, not the one with the biggest market slide. You can widen later; narrowing after a broad launch is far harder.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A written segment hypothesis exists, every current user is tagged in or out of it, and the segment's retention is compared with the rest."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Describe the segment in one sentence: who, trigger moment, current alternative"
                - "Add a segment tag to every user or account record"
                - "Compare thirty-day retention for tagged users against the rest"
                - "Write down what evidence would make you abandon this segment"
            - name: One-sentence value proposition for the segment
              description: |-
                ## Purpose
                If the founders describe the product three different ways, users hear three different products and the survey results become impossible to read. A single sentence naming the segment, the job they hire the product for and the outcome versus their current alternative becomes the baseline every positioning test is measured against.

                ## Milestones
                1. Three candidate sentences drafted, each naming segment, job and outcome.
                2. Each candidate read to five users in the segment and their reactions noted.
                3. One sentence chosen and used on the homepage, in onboarding and in sales emails.
                4. The previous descriptions retired from decks, profiles and the app store listing.
              priority: medium
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "One value proposition sentence is live on the homepage and in onboarding, and has been read to at least five segment users."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Draft three one-sentence value propositions for the target segment"
                - "Read each one to five segment users and note what they repeat back"
                - "Choose one and update the homepage headline and onboarding screen"
                - "Search old decks and profiles for retired wording and replace it"
            - name: Activation event that predicts retention
              description: |-
                ## Purpose
                Sign-ups tell you about marketing; the moment a user first gets real value tells you about the product. Finding the action that separates users who stay from users who leave, for example inviting a colleague or completing a second project within seven days, gives the team one number to move before retention data has had time to mature.

                ## Milestones
                1. Five candidate activation actions listed from product data and user interviews.
                2. Retention at thirty days compared for users who did and did not take each action.
                3. One activation event chosen with a time window, such as within the first seven days.
                4. The activation rate for the last three months of sign-ups calculated as a baseline.

                ## Notes
                Correlation is a start, not proof. Confirm the chosen event by asking retained users when the product first became useful to them.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "One activation event with a time window is defined, its link to thirty-day retention is shown in data, and a baseline activation rate is recorded."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "List five actions that retained users seem to take early"
                - "Compare thirty-day retention for users who did each action against those who did not"
                - "Ask three retained users when the product first became useful"
                - "Record the chosen event, its time window and the current baseline rate"
            - name: Retention cohort tracking set-up
              description: |-
                ## Purpose
                Total active users can rise for months while every cohort quietly decays, which is how companies mistake marketing spend for fit. A cohort table that shows, for each month of sign-ups, the share still active in week one, month one, month three and beyond is the single most reliable fit instrument a young company has.

                ## Milestones
                1. A definition of an active user written down, based on the core action rather than logins.
                2. A cohort table or chart built showing retention by sign-up month.
                3. The same chart filterable by the target segment.
                4. The chart saved where every founder can open it in under a minute.

                ## Notes
                Start from the **Metrics log** template to record the headline cohort figures each week. Define active by the core job, not by opening the app.
              priority: high
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A cohort retention chart by sign-up month, filterable by segment and based on a written active-user definition, is live and shared with the founders."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Write the active-user definition in terms of the core action"
                - "Build a cohort table by sign-up month in your analytics tool or a spreadsheet"
                - "Add a segment filter to the cohort view"
                - "Pin the chart link in the founders' channel"
            - name: Very disappointed survey set-up
              description: |-
                ## Purpose
                Asking users how they would feel if they could no longer use the product, with very disappointed, somewhat disappointed and not disappointed as answers, is the most widely used leading indicator of fit. Setting it up properly, sent only to users who have used the core feature recently, gives a score you can track month to month and slice by segment.

                ## Milestones
                1. A four-question survey written: the disappointment question, who benefits most, the main benefit and what would make it better.
                2. An eligibility rule set, such as two or more uses of the core feature in the last fortnight.
                3. A first wave sent to at least forty eligible users.
                4. The very disappointed share recorded overall and for the target segment.

                ## Notes
                Forty percent very disappointed is the benchmark most often quoted. Treat it as a reference point, and pay more attention to the trend and to the segment that scores highest.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "The four-question survey has gone to at least forty eligible users and the very disappointed share is recorded overall and for the target segment."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Write the four survey questions in a form tool"
                - "Set the eligibility rule and pull the list of qualifying users"
                - "Send the first wave to at least forty eligible users"
                - "Record the very disappointed share overall and for the segment"
            - name: Product analytics event plan for the core workflow
              description: |-
                ## Purpose
                Half the questions in a fit search die because the data was never captured, or was captured under names nobody remembers. A short tracking plan covering sign-up, activation, the core action and the moments users drop off means every iteration can be read within days rather than argued about.

                ## Milestones
                1. A tracking plan listing ten to twenty events with names, triggers and properties.
                2. Segment and acquisition source attached to every user record.
                3. Each event tested in a staging build and seen arriving in the analytics tool.
                4. A check scheduled after each release to confirm the events still fire.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A written tracking plan of ten to twenty events exists, and every event has been verified arriving in the analytics tool with segment attached."
                cadence: one-shot
                effort_hours_estimate: "10"
              tasks:
                - "List the ten to twenty events the core workflow needs"
                - "Agree one naming convention and write it at the top of the plan"
                - "Test each event in staging and confirm it reaches the analytics tool"
                - "Check that tracked events still fire after the latest release @recurring(monthly:6)"
            - name: Time and money box for the fit search
              description: |-
                ## Purpose
                Left without a box, a fit search drifts until the runway decides for you. Agreeing how many months and how much cash the current search gets, with checkpoints where the founders look at the evidence together, keeps iterations fast and makes the later conversation about a bigger change calmer and earlier.

                ## Milestones
                1. A number of months and a cash amount allocated to the current search, agreed by the founders.
                2. Checkpoints set at roughly a third and two thirds of the box.
                3. The evidence each checkpoint will look at named in advance.
                4. The box written into the founders' shared plan and the investor update.

                ## Notes
                This box frames the search; the decision to change direction belongs to a separate, evidence-led review. Set checkpoints, not a cliff edge.
              priority: high
              deadlineOffsetDays: 14
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "The founders have recorded a time and cash allocation for the search with two dated checkpoints and the evidence each will review."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Check current runway in months against the plan"
                - "Propose a time and cash allocation for this fit search"
                - "Set two checkpoint dates and the evidence each will review"
                - "Write the agreed box into the founders' shared plan"
            - name: Weekly cohort retention review
              description: |-
                ## Purpose
                Retention moves slowly, so it only gets attention if someone looks at it on a fixed day. Fifteen minutes every Monday comparing the newest cohorts with older ones, overall and for the target segment, is where you first see whether last month's changes did anything.

                ## Milestones
                1. A standing Monday slot in the founders' calendar.
                2. Week-one and month-one retention for the latest cohorts recorded each week.
                3. Any cohort that beats or misses the previous one by a clear margin flagged with a likely cause.
                4. Eight consecutive weeks of figures in the log.

                ## Notes
                Start from the **Metrics log** template. Write the likely cause of any change the same day, while you still remember what shipped.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Eight consecutive weekly entries of week-one and month-one retention, overall and for the target segment, exist in the metrics log."
                cadence: rolling
              tasks:
                - "Block fifteen minutes on Monday mornings for the cohort review"
                - "Record week-one and month-one retention for the newest cohorts @recurring(weekly:mon)"
                - "Flag any clearly better or worse cohort with its likely cause"
                - "Share a two-line summary in the founders' channel"
            - name: Monthly disappointment survey wave
              description: |-
                ## Purpose
                One survey is a snapshot; a monthly wave to newly eligible users shows whether fit is improving and in which segment. Running it on the same day each month, with the same questions and eligibility rule, keeps the trend comparable and stops the team cherry-picking a good wave.

                ## Milestones
                1. A fixed monthly send date and an unchanged question set.
                2. Each wave sent only to users who became eligible since the last one.
                3. The very disappointed share logged by month and by segment.
                4. Open-text answers from very disappointed users collected for the positioning work.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Six monthly survey waves have been sent with the same questions and eligibility rule, and the very disappointed share is logged by segment for each."
                cadence: rolling
              tasks:
                - "Pull the list of users who became eligible since the last wave"
                - "Send the survey wave to newly eligible users @recurring(monthly:9)"
                - "Log the very disappointed share by segment within a week of sending"
                - "Ask the agent to summarise the open-text answers from very disappointed users"
            - name: Weekly iteration loop on one hypothesis
              description: |-
                ## Purpose
                Teams searching for fit tend to ship many changes at once and then cannot say which one mattered. Running one written hypothesis per week, the change, the metric it should move and the result, builds a record of what moves your segment and what does not.

                ## Milestones
                1. A hypothesis log with columns for the change, the expected effect, the metric and the result.
                2. One hypothesis chosen and written before the week's work starts.
                3. The result written up at the end of the week, including null results.
                4. Twelve weeks of entries showing which kinds of change moved activation or retention.

                ## Notes
                A null result is still a result. Teams that only record wins end up repeating experiments that already failed.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "The hypothesis log holds twelve consecutive weekly entries, each with a stated expected effect and a recorded result."
                cadence: rolling
              tasks:
                - "Set up a hypothesis log with change, expected effect, metric and result"
                - "Write this week's single hypothesis before planning starts @recurring(weekly:tue)"
                - "Record the result and what you learned, including null results @recurring(weekly:fri)"
                - "Review the last twelve entries for patterns every quarter"
            - name: Weekly calls with power users
              description: |-
                ## Purpose
                The users who would be very disappointed to lose you know exactly why, and their reasons are the raw material for positioning, onboarding and roadmap. One thirty-minute call a week with a heavy user in the target segment keeps the founders close to what the product actually means to the people it works for.

                ## Milestones
                1. A list of twenty power users ranked by usage and segment fit.
                2. One call a week booked and held, with notes written the same day.
                3. The exact words users use for the product and its benefit collected in one place.
                4. Ten calls completed and their themes shared with the team.

                ## Notes
                Start from the **Meeting notes** template for each call. Ask about the last time they used the product and what they would use instead, not about features they want.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Ten power-user calls have been held and written up, with users' own words for the benefit collected in a single shared document."
                cadence: rolling
              tasks:
                - "Rank twenty power users by usage and segment fit"
                - "Hold one thirty-minute power-user call and write notes the same day @recurring(weekly:wed)"
                - "Copy users' exact phrases for the benefit into a shared document"
                - "Send a short thank-you after each call"
            - name: Feedback triage tagged by segment
              description: |-
                ## Purpose
                Support tickets, chat messages and survey comments pile up and get read by whoever has time, so the loudest users steer the product. Tagging every piece of feedback by segment and theme once a week means a request from a core user carries more weight than one from someone who will never stay.

                ## Milestones
                1. One inbox or board where all feedback channels land.
                2. A tag set covering segment, theme and whether the user is retained.
                3. A weekly triage slot where every new item is tagged.
                4. A monthly count of themes from target-segment users shared with the team.

                ## Notes
                Start from the **Feedback themes** template to keep the theme counts.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "All feedback channels feed one place, and every item from the last eight weeks is tagged by segment, theme and retention status."
                cadence: rolling
              tasks:
                - "Route support, chat and survey comments into one feedback board"
                - "Create tags for segment, theme and retained or churned"
                - "Tag every new feedback item from the past week @recurring(weekly:thu)"
                - "Share the top three themes from target-segment users each month"
            - name: Positioning evidence log from calls and lost deals
              description: |-
                ## Purpose
                How prospects describe you, which alternatives they compare you with and why they say no is positioning evidence that is usually lost the moment the call ends. Logging it consistently shows which framing wins with the target segment and which competitor you are really up against.

                ## Milestones
                1. A log with columns for the prospect's segment, the alternative they named and the words they used.
                2. Every sales or demo call from the month entered.
                3. Lost deals entered with the stated and the suspected reason.
                4. A monthly note on which framing and which alternative came up most.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Three months of calls and lost deals are logged with the named alternative and the prospect's own words, and each month has a written summary."
                cadence: rolling
              tasks:
                - "Create a positioning log with segment, alternative and words used"
                - "Enter every sales or demo call within a day of holding it"
                - "Add lost deals with the stated reason and your honest suspicion"
                - "Write the monthly summary of winning framings and main alternatives @recurring(monthly:20)"
            - name: Monthly conversations with churned users
              description: |-
                ## Purpose
                Churned users explain the gap between what you promised and what they got more clearly than any dashboard. Two short conversations a month with recently churned users in the target segment tell you whether they left because of the product, the price, the timing or because they were never the right user.

                ## Milestones
                1. A list of users who churned in the last month, filtered to the target segment.
                2. Two conversations held each month, by call or short written questions.
                3. Each churn reason classified as product gap, wrong fit, timing or price.
                4. Six months of reasons reviewed for the pattern that matters most.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Twelve churned-user conversations over six months are recorded, each with a classified reason, and the dominant reason is written up."
                cadence: rolling
              tasks:
                - "Pull last month's churned users who fit the target segment"
                - "Invite two churned users to a fifteen-minute conversation @recurring(monthly:14)"
                - "Classify each reason as product gap, wrong fit, timing or price"
                - "Note which reasons the next hypothesis could address"
            - name: Monthly fit scorecard for co-founders and investors
              description: |-
                ## Purpose
                Fit evidence is easy to spin in either direction when it is reported in prose. A one-page scorecard each month, showing the same few numbers against the thresholds in your fit definition, makes progress visible to co-founders and investors and keeps everyone honest about the trend.

                ## Milestones
                1. A scorecard layout with retention, activation, survey score and segment share against thresholds.
                2. The first scorecard filled from real data.
                3. A short commentary on what changed and what the team will test next.
                4. Six monthly scorecards sent on the same date.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Six monthly scorecards have been sent on a fixed date, each showing the same metrics against the thresholds in the fit definition."
                cadence: rolling
              tasks:
                - "Lay out a one-page scorecard against the fit definition thresholds"
                - "Fill in and send the monthly fit scorecard @recurring(monthly:3)"
                - "Ask the agent to draft the three-line commentary from the month's logs"
                - "Keep every past scorecard in one folder for trend review"
            - name: Quarterly segment re-cut
              description: |-
                ## Purpose
                The segment that looked strongest three months ago may not be the one now pulling the product, and new pockets of usage appear without anyone choosing them. Re-cutting your users by role, company size, use case and acquisition source each quarter shows where retention and survey scores are really concentrated.

                ## Milestones
                1. All users and accounts re-tagged against an updated set of segment attributes.
                2. Retention and very disappointed share compared across at least four segments.
                3. Any segment outperforming the chosen one named, with sample size noted.
                4. A decision recorded to keep, narrow or switch the target segment.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "Each quarter has a written comparison of at least four segments on retention and survey score, ending in a recorded keep, narrow or switch decision."
                cadence: cyclic
              tasks:
                - "Update the segment attributes on every user and account record"
                - "Compare retention and survey score across segments @recurring(quarterly)"
                - "Note sample size next to every segment result"
                - "Record the keep, narrow or switch decision with its reason"
            - name: Feature request ledger weighted by segment fit
              description: |-
                ## Purpose
                Counting feature requests raw rewards whichever users shout most, often the ones least likely to stay. A ledger that weights each request by whether it came from a retained user in the target segment shows which requests would deepen fit and which would drag the product towards someone else.

                ## Milestones
                1. Every open feature request listed with who asked and their segment and retention status.
                2. A simple weighting agreed, such as triple weight for retained target-segment users.
                3. The ledger re-ranked each month and the top five shared with the team.
                4. Requests from outside the segment parked in a separate list with a reason.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "The request ledger is weighted by segment and retention, re-ranked monthly, and requests from outside the segment are parked with reasons."
                cadence: rolling
              tasks:
                - "List every open request with requester, segment and retention status"
                - "Agree the weighting rule with your co-founder"
                - "Re-rank the ledger and share the top five requests @recurring(monthly:25)"
                - "Move out-of-segment requests to a parked list with a one-line reason"
            - name: Reading retention curves
              description: |-
                ## Purpose
                A retention curve that flattens, even at a modest level, means some users have found lasting value; one that keeps sliding towards zero means nobody has, however good the launch looked. Learning to read curves by cohort and by segment, and to spot smile curves and seasonal dips, is the core analytical skill of a fit search.

                ## Milestones
                1. Three published retention case studies read and their curve shapes sketched.
                2. Your own curves classified as decaying, flattening or rising for each recent cohort.
                3. The usage frequency your product naturally has, daily, weekly or monthly, written down with the matching measurement window.
                4. A one-paragraph explanation of your curve shape that a co-founder can repeat.
              priority: medium
              deadlineOffsetDays: 45
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Every recent cohort curve is classified as decaying, flattening or rising, with the natural usage frequency and measurement window written down."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Read three published retention curve case studies from product analysts"
                - "Sketch your last six cohort curves on one chart"
                - "Decide whether your product is naturally daily, weekly or monthly use"
                - "Write a paragraph explaining your curve shape to the team"
            - name: Analysing the disappointment survey by segment
              description: |-
                ## Purpose
                Who gave the score matters more than the headline number. Learning the method popularised by early fit surveys, isolating the very disappointed group, reading how they describe themselves and their main benefit, then finding the somewhat disappointed users who share that benefit, turns a number into a roadmap.

                ## Milestones
                1. The very disappointed group described by role, use case and main benefit.
                2. The somewhat disappointed users who share that main benefit identified.
                3. Not disappointed users set aside from planning, with the reason noted.
                4. A written summary of what would turn the closest somewhat disappointed users into very disappointed ones.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A written analysis of one survey wave profiles the very disappointed group and names what would convert the somewhat disappointed users who share their main benefit."
                cadence: phased
                effort_hours_estimate: "5"
              tasks:
                - "Read a published write-up of segmenting a fit survey by main benefit"
                - "Profile the very disappointed group by role, use case and benefit"
                - "Filter somewhat disappointed users who named the same main benefit"
                - "Summarise what is holding those users back in their own words"
            - name: Jobs to be done framing for the core segment
              description: |-
                ## Purpose
                Users rarely want your product; they want progress in a situation, and they compare you with whatever else could deliver it, including a spreadsheet or doing nothing. Writing the job your segment hires the product for, with its trigger, desired outcome and anxieties, explains churn and positioning better than any persona slide.

                ## Milestones
                1. The core job written as situation, motivation and expected outcome.
                2. The forces on a switch listed: push of the current way, pull of the new, anxiety and habit.
                3. Five recent switchers interviewed about the moment they started looking.
                4. The job statement used to check the next three roadmap items.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A job statement and a four-forces map built from at least five switcher interviews are written and used to review three roadmap items."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Read one practical guide to jobs to be done interviewing"
                - "Write the core job as situation, motivation and outcome"
                - "Interview five recent switchers about when they started looking"
                - "Map the push, pull, anxiety and habit forces from those interviews"
            - name: Positioning method study and first worksheet
              description: |-
                ## Purpose
                Positioning decides which customers think you are for them before they ever try the product, and most early teams inherit theirs by accident from the first pitch deck. Working through a structured method, competitive alternatives, unique attributes, the value they enable, the customers who care most and the market category, gives you a worksheet you can test.

                ## Milestones
                1. One recognised positioning method read and its steps summarised.
                2. A completed worksheet covering alternatives, unique attributes, value, best-fit customers and category.
                3. The worksheet checked against the words in the power-user call notes.
                4. Gaps between the worksheet and the current homepage listed.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: artifact
                success_criteria: "A completed positioning worksheet, checked against power-user language, exists with a written list of gaps versus the current homepage."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Read one book or guide on a structured positioning method"
                - "Fill in the worksheet with alternatives, attributes, value, customers and category"
                - "Check each line against phrases from the power-user call notes"
                - "List where the current homepage contradicts the worksheet"
            - name: Telling pull signals from push signals
              description: |-
                ## Purpose
                Growth you are pushing, through outreach, discounts and favours, looks identical on a chart to growth customers are pulling, until you stop pushing. Learning to separate the two, inbound requests, unprompted referrals, users complaining loudly when something breaks, colleagues asking for seats, keeps the team from mistaking effort for fit.

                ## Milestones
                1. A list of pull signals and push signals specific to your product.
                2. Last quarter's new users and revenue split by pull or push source.
                3. The share of growth that would remain if outbound stopped estimated.
                4. Two pull signals added to the monthly scorecard.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Last quarter's new users and revenue are split into pull and push sources, and two pull signals are added to the monthly scorecard."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Write a list of pull signals and push signals for your product"
                - "Tag last quarter's new users by how they arrived"
                - "Estimate how much growth would remain without outbound effort"
                - "Add two pull signals to the monthly fit scorecard"
            - name: Coding open-text survey and interview answers
              description: |-
                ## Purpose
                Hundreds of open-text answers are worthless if they are skimmed for the quotes that support the current plan. Learning a simple coding practice, a codebook of themes, two people coding the same sample and counts per segment, turns free text into evidence that survives a sceptical co-founder.

                ## Milestones
                1. A codebook of eight to fifteen themes with short definitions.
                2. A sample of thirty answers coded independently by two people and differences resolved.
                3. All open-text answers from the latest wave coded and counted by segment.
                4. The top three themes for the very disappointed group written up with example quotes.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A codebook exists, a thirty-answer sample has been double-coded with differences resolved, and the latest wave is fully coded by segment."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Draft a codebook of eight to fifteen themes with definitions"
                - "Code thirty answers separately with a co-founder and compare"
                - "Ask the agent to apply the agreed codebook to the remaining answers for you to check"
                - "Write up the top three themes for very disappointed users"
            - name: Engagement depth measures beyond active users
              description: |-
                ## Purpose
                Two products with the same monthly active count can be in very different places if one is opened daily for real work and the other once a month out of habit. Measuring frequency, breadth of features used and intensity of the core action for the target segment shows whether engagement is deepening as you iterate.

                ## Milestones
                1. Frequency, breadth and intensity defined in terms of your product's events.
                2. Each measure calculated for the target segment over the last three months.
                3. A distribution chart showing light, medium and heavy users.
                4. The share of heavy users added to the monthly scorecard.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Frequency, breadth and intensity are defined and charted for the target segment, and the heavy-user share appears on the monthly scorecard."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Define frequency, breadth and intensity using your tracked events"
                - "Calculate each for the target segment over the last three months"
                - "Chart users into light, medium and heavy bands"
                - "Add the heavy-user share to the scorecard"
            - name: Judging small samples and noisy cohorts
              description: |-
                ## Purpose
                Early cohorts of twenty or thirty users swing wildly from month to month, and teams regularly celebrate or panic over a change that is pure noise. Learning a few simple habits, showing sample sizes beside every figure, pooling cohorts before comparing, and treating a single surprising result as a question rather than an answer, protects the search from false signals in both directions.

                ## Milestones
                1. Sample size shown beside every retention and survey figure in the scorecard.
                2. A minimum sample agreed below which no segment comparison is treated as evidence.
                3. Cohorts pooled into quarters where monthly groups are too small to compare.
                4. One past decision re-examined to see whether it rested on too few users.

                ## Notes
                No statistics course is needed. A rough rule such as not comparing groups of fewer than thirty users, and waiting for a second cohort before acting, catches most mistakes.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Every scorecard figure carries its sample size, a written minimum sample rule exists, and one past decision has been re-checked against it."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Add sample sizes beside every figure on the scorecard"
                - "Agree a minimum group size for segment comparisons"
                - "Pool monthly cohorts into quarters where groups are too small"
                - "Re-check one past decision that rested on a small sample"
            - name: High-expectation customer profile
              description: |-
                ## Purpose
                Building for the most discerning user in your segment, the one with the sharpest need and the least patience for workarounds, tends to produce a product the wider segment also values. Writing that customer's profile from real users gives the team a specific person to design for instead of an average that nobody is.

                ## Milestones
                1. Five real users chosen who show the strongest need and highest standards.
                2. A one-page profile of their situation, the job, their alternatives and what delights or annoys them.
                3. The profile reviewed by two of those users for accuracy.
                4. The profile pinned in planning documents and referenced in the next two specs.
              priority: medium
              deadlineOffsetDays: 45
              frontmatter:
                mode: research
                output_kind: artifact
                success_criteria: "A one-page high-expectation customer profile, built from five real users and checked by two of them, is referenced in the next two specs."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Pick five real users with the sharpest need and highest standards"
                - "Write a one-page profile from their calls and usage"
                - "Send the profile to two of them and ask what is wrong"
                - "Revisit the profile against new power-user calls @recurring(quarterly)"
            - name: Narrowing to the strongest segment
              description: |-
                ## Purpose
                Most fit searches end with a narrower segment than the one they started with, and the hardest part is turning away users who are polite, active and wrong. Deciding on evidence to focus on the segment with the best retention and survey score, and saying what you will stop doing for the others, concentrates every hour on the users most likely to pull.

                ## Milestones
                1. Retention, survey score and growth source compared for every candidate segment.
                2. One segment chosen, with the evidence and sample sizes recorded.
                3. A written list of what the team will stop doing for other segments.
                4. Existing users outside the segment told how support and roadmap will change, where needed.

                ## Notes
                Narrowing is not abandoning. Existing users outside the segment can usually keep the product as it is; they just stop setting the roadmap.
              priority: high
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A recorded decision names one segment with its evidence and sample sizes, plus a written list of work the team will stop for other segments."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Put every candidate segment side by side on retention and survey score"
                - "Choose one segment and record the evidence and sample sizes"
                - "List the requests, integrations and channels you will stop pursuing"
                - "Draft a short note for affected users outside the segment"
            - name: Positioning rewrite and homepage message test
              description: |-
                ## Purpose
                Once the worksheet is done, the new positioning has to meet real visitors. Rewriting the homepage, onboarding and outbound copy around the target segment and testing it against the old version, by sign-up quality and activation rather than clicks, shows whether the message brings in more of the users who stay.

                ## Milestones
                1. New homepage headline, subhead and first screen written from the positioning worksheet.
                2. The new version shown to five segment users before launch, with their reactions noted.
                3. Old and new versions compared on segment share of sign-ups and activation over four weeks.
                4. The winning version adopted across onboarding, sales emails and listings.
              priority: medium
              deadlineOffsetDays: 60
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "A positioning rewrite has run for four weeks against the old copy, judged on segment share of sign-ups and activation, and the result is adopted."
                cadence: phased
                effort_hours_estimate: "12"
              tasks:
                - "Write a new homepage headline and subhead from the positioning worksheet"
                - "Show the draft to five segment users and note what they repeat back"
                - "Run old and new copy side by side for four weeks"
                - "Compare segment share of sign-ups and activation, not click rate"
            - name: Onboarding rebuilt around time to first value
              description: |-
                ## Purpose
                Many users who would have loved the product leave in the first session because they never reach the activation event. Rebuilding onboarding so the target segment reaches that moment faster, by cutting steps, pre-filling examples or offering a guided set-up call, is often the quickest lever on retention a young team has.

                ## Milestones
                1. Current median time from sign-up to the activation event measured.
                2. Every onboarding step listed with its drop-off rate.
                3. A spec for the new flow that removes or defers at least two steps.
                4. The new flow live, with time to activation and activation rate compared after four weeks.

                ## Notes
                Start from the **Product spec** template for the new flow. Watching five new users sign up on a call reveals more friction than any funnel chart.
              priority: medium
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "A new onboarding flow is live and, after four weeks, its time to activation and activation rate are compared with the old flow in writing."
                cadence: phased
                effort_hours_estimate: "30"
              tasks:
                - "Measure median time from sign-up to the activation event"
                - "Watch five new segment users sign up on a screen share"
                - "Write a spec that removes or defers at least two steps"
                - "Compare activation for the new flow against the old after four weeks"
            - name: Cutting features that serve the wrong segment
              description: |-
                ## Purpose
                Every feature built for a user outside the target segment adds weight to onboarding, support and the codebase, and blurs what the product is for. Reviewing features by who uses them and removing or hiding those used mainly by non-target users makes the product clearer for the users you are trying to win.

                ## Milestones
                1. Usage of each feature broken down by segment.
                2. Features used mainly outside the target segment listed with their maintenance cost.
                3. A decision for each: keep, hide behind a setting, or remove.
                4. Affected users told before anything is removed.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "Every feature has a recorded keep, hide or remove decision based on segment usage, and affected users were told before any removal."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Break down usage of each feature by segment"
                - "List features used mostly outside the target segment"
                - "Decide keep, hide or remove for each with the team"
                - "Email affected users before removing anything"
            - name: Map of competitive alternatives in use today
              description: |-
                ## Purpose
                Often the real competitor for a young product is usually a spreadsheet, an agency, an incumbent's add-on or simply putting up with the problem. Mapping what your target segment actually uses today, and why they tolerate it, tells you what the product must clearly beat and where positioning should draw the contrast.

                ## Milestones
                1. Every alternative mentioned in calls, surveys and lost deals listed.
                2. Each alternative scored on how often it is named and what users like about it.
                3. The two alternatives you most often lose to identified.
                4. A one-paragraph statement of what you do that those two cannot.
              priority: medium
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A map of every alternative named by the target segment exists, with frequency counts and a written statement of difference against the top two."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "List every alternative named in calls, surveys and lost deals"
                - "Count how often each alternative comes up"
                - "Note what users like about the two most common alternatives"
                - "Write what your product does that those two cannot"
            - name: Market category decision
              description: |-
                ## Purpose
                Placing the product in an existing category gives buyers an instant frame and a budget line but invites direct comparison; creating a new one avoids comparison but demands that you educate the market. Deciding deliberately, with the evidence from calls and the positioning work, stops the team describing the company as a different kind of thing in every meeting.

                ## Milestones
                1. Two or three candidate categories listed, including at least one existing category.
                2. Each candidate tested in five prospect conversations for instant understanding.
                3. The chosen category recorded with the trade-off it accepts.
                4. Homepage, deck and listings updated to use the chosen category.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "One market category is chosen after testing in at least five prospect conversations, and all public descriptions use it."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "List two or three candidate categories for the product"
                - "Open five prospect conversations with a different category framing each time"
                - "Record which framing prospects grasped fastest"
                - "Update the homepage, deck and listings to the chosen category"
            - name: Roadmap split between loved and missing benefits
              description: |-
                ## Purpose
                Teams chasing fit often spend every sprint on what the unhappy users ask for and neglect what the happy ones love. Splitting roadmap capacity roughly in half, one part deepening the main benefit that very disappointed users name, the other fixing what holds back the closest somewhat disappointed users, keeps both strengths and gaps moving.

                ## Milestones
                1. The main benefit of very disappointed users and the top blocker of near-fit users written down.
                2. Roadmap items tagged as deepening the benefit or removing the blocker.
                3. Capacity for the next quarter split between the two groups.
                4. Survey score for both groups compared at the end of the quarter.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every roadmap item for the quarter is tagged benefit or blocker, capacity is split between them, and both groups' survey scores are compared at quarter end."
                cadence: cyclic
              tasks:
                - "Write the main loved benefit and the top near-fit blocker"
                - "Tag every planned item as deepening the benefit or removing the blocker"
                - "Rebalance the split if one side has fallen behind @recurring(monthly:28)"
                - "Compare survey scores for both groups at quarter end"
            - name: Founders' fit evidence offsite
              description: |-
                ## Purpose
                Day-to-day iteration makes it hard to step back and see whether the search as a whole is working. A one-day offsite where the founders review every piece of fit evidence against the written definition, without laptops open to the backlog, produces a shared view and a clear plan for the next quarter.

                ## Milestones
                1. An evidence pack prepared: cohort chart, survey trend, segment comparison and hypothesis log.
                2. A date and quiet venue booked for a full day.
                3. A written shared verdict on progress against the fit definition.
                4. The three experiments for the next quarter agreed and owned.

                ## Notes
                Start from the **Meeting notes** template to record the verdict and owners.
              priority: medium
              deadlineOffsetDays: 90
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "The offsite has been held, and a written verdict against the fit definition plus three owned experiments for the next quarter are recorded."
                cadence: one-shot
                effort_hours_estimate: "12"
              tasks:
                - "Pick a date and book a quiet room for a full day"
                - "Assemble the evidence pack from the logs and charts"
                - "Agree the agenda: evidence first, verdict second, plan last"
                - "Write up the verdict and the three owned experiments"
            - name: Fit evidence narrative for the next fundraise
              description: |-
                ## Purpose
                Investors at the next round will ask whether you have fit, and a slide of logos or a growth chart driven by spend will not convince a careful one. Building the narrative from cohort curves, segment survey scores and pull signals, stated plainly with sample sizes, makes the case credible and shows you know how to measure it.

                ## Milestones
                1. Three charts chosen: cohort retention, survey score by segment and share of pull growth.
                2. A short written narrative of how the segment and positioning evolved.
                3. Sample sizes and definitions shown beside every figure.
                4. The narrative tested on two friendly investors or advisors and revised.
              priority: medium
              deadlineOffsetDays: 120
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "A fit evidence section with three charts, definitions and sample sizes is complete and has been reviewed by two investors or advisors."
                cadence: one-shot
                effort_hours_estimate: "10"
              tasks:
                - "Choose the three charts that best show fit evidence"
                - "Write a half-page story of how segment and positioning changed"
                - "Add definitions and sample sizes beside every figure"
                - "Walk two friendly investors or advisors through it and note their doubts"
            - name: Six-month fit checkpoint with board and advisors
              description: |-
                ## Purpose
                Board members and advisors are most useful when they see the fit search as a whole, not a stream of anecdotes. A dedicated checkpoint around six months into the search, with the scorecard trend and the hypothesis log, gives them the material to challenge the plan and suggest what to try or stop.

                ## Milestones
                1. A pre-read sent a week ahead with six scorecards and the hypothesis log.
                2. Specific questions for the board or advisors written into the agenda.
                3. Their challenges and suggestions recorded during the meeting.
                4. Changes to the plan, or the reasons for not changing it, sent afterwards.

                ## Notes
                Start from the **Board meeting** template for the pre-read and minutes.
              priority: medium
              deadlineOffsetDays: 180
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A six-month checkpoint has been held with a pre-read sent a week ahead, and a written response to the board's challenges was sent within a week after."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Set a date about six months into the search"
                - "Send a pre-read with six scorecards and the hypothesis log a week ahead"
                - "Write three specific questions you want the room to answer"
                - "Send the plan changes and reasoning within a week of the meeting"
            - name: Relaunch to the narrowed segment
              description: |-
                ## Purpose
                After narrowing and repositioning, the product often still looks like the old, broader version to everyone who saw it first. A focused relaunch to the chosen segment, through the communities, newsletters and channels they actually use, resets first impressions and gives a clean cohort to measure the new direction.

                ## Milestones
                1. Five channels where the narrowed segment gathers listed and ranked.
                2. Relaunch messages written in the segment's own language from call notes.
                3. The relaunch delivered on a planned date across the top channels.
                4. The relaunch cohort tracked separately for retention and survey score.
              priority: medium
              deadlineOffsetDays: 120
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A relaunch to the narrowed segment has happened on a planned date, and its sign-up cohort is tracked separately for retention and survey score."
                cadence: one-shot
                effort_hours_estimate: "15"
              tasks:
                - "List five channels where the narrowed segment gathers"
                - "Write relaunch messages using phrases from power-user calls"
                - "Pick a relaunch date and prepare each channel's post"
                - "Tag the relaunch cohort so its retention is tracked on its own"
            - name: Fit declaration and readiness-to-scale review
              description: |-
                ## Purpose
                Declaring fit is a decision with consequences: more hiring, more spend on acquisition and less tolerance for experiments. A formal review against the written definition, with each threshold checked for at least three consecutive cohorts, protects the company from scaling a product that only fits a few early enthusiasts.

                ## Milestones
                1. Each threshold in the fit definition checked against at least three consecutive cohorts.
                2. Risks that would undo fit listed, such as concentration in a few accounts.
                3. A recorded decision: fit declared, fit in progress, or definition revised with reasons.
                4. If declared, the first scaling steps and the metrics that would trigger a rethink written down.
              priority: medium
              deadlineOffsetDays: 365
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A written review checks every fit threshold across three consecutive cohorts and records whether fit is declared, with the triggers for a rethink."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Check each fit threshold against the last three cohorts"
                - "List risks such as dependence on a few large accounts"
                - "Record the decision and the reasoning with your co-founders"
                - "Write the metrics that would trigger a rethink after scaling starts"
            - name: Fit search for B2B products with long sales cycles
              description: |-
                ## Purpose
                When a deal takes three to nine months and a cohort might be six accounts, monthly retention charts tell you almost nothing for a year. B2B founders need fit signals that arrive sooner: champions who pull colleagues in, expansion within accounts, renewal intent and how often buyers come back unprompted.

                ## Milestones
                1. Leading B2B fit signals chosen, such as seats added, weekly active teams and renewal intent.
                2. Each active account scored against those signals.
                3. Champions in each account identified and interviewed about internal spread.
                4. A quarterly view of which account profiles show the strongest signals.
              priority: medium
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "Every active account is scored on at least three leading B2B fit signals, and a quarterly view shows which account profiles score highest."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "Choose three leading fit signals that suit long sales cycles"
                - "Score every active account on those signals"
                - "Interview the champion in each account about how use is spreading"
                - "Group accounts by profile to see which score highest"
            - name: Fit search for consumer products
              description: |-
                ## Purpose
                Consumer products live or die on habit, and the retention level that signals fit depends heavily on whether the product is meant to be used daily, weekly or occasionally. Consumer founders need to compare their curves with products of the same natural frequency and watch for organic sharing, rather than borrowing B2B thresholds.

                ## Milestones
                1. The product's natural usage frequency agreed and the matching retention window chosen.
                2. Published retention ranges for products of similar frequency gathered as a reference.
                3. Organic sharing and invite rates measured for recent cohorts.
                4. A consumer-specific version of the fit definition written.

                ## Notes
                Paid acquisition can hide weak retention in consumer apps for months. Read cohorts from organic sign-ups separately.
              priority: medium
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A consumer-specific fit definition exists with a retention window matched to natural usage frequency and an organic sharing rate measured."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Agree whether the product is daily, weekly or occasional use"
                - "Gather published retention ranges for products of similar frequency"
                - "Measure invite and organic share rates for recent cohorts"
                - "Separate organic cohorts from paid ones in the retention view"
            - name: Fit on both sides of a marketplace
              description: |-
                ## Purpose
                Marketplaces can have eager buyers and frustrated sellers, or the reverse, and an overall fit score hides which side is about to leave. Measuring fit separately for each side, repeat transactions for buyers and earnings or utilisation for sellers, shows which side the next iteration must serve.

                ## Milestones
                1. Separate fit signals defined for buyers and for sellers.
                2. The disappointment survey run on each side separately.
                3. Repeat rate for buyers and utilisation for sellers tracked by cohort.
                4. The weaker side named with the main reason, and the next hypothesis aimed at it.
              priority: low
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "Fit signals and survey scores are tracked separately for buyers and sellers, and the weaker side is named with its main reason."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Define one fit signal for buyers and one for sellers"
                - "Run the disappointment survey on each side separately"
                - "Track buyer repeat rate and seller utilisation by cohort"
                - "Name the weaker side and aim the next hypothesis at it"
            - name: Fit search as a solo founder with limited hours
              description: |-
                ## Purpose
                A solo founder cannot run weekly interviews, a survey programme, analytics and the build at the same time without something giving way. Choosing the smallest set of fit instruments, one cohort chart, one quarterly survey wave and two user calls a month, and protecting a weekly block for them keeps the search honest without stalling the product.

                ## Milestones
                1. A minimal instrument set chosen and the rest explicitly dropped for now.
                2. A protected weekly two-hour block for reading evidence and planning the next change.
                3. Two user calls a month held and noted.
                4. A peer or advisor sent the monthly numbers to keep you honest.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A minimal set of fit instruments is in use, a weekly evidence block has been kept for eight weeks, and an outside person receives the monthly numbers."
                cadence: rolling
              tasks:
                - "Choose the three fit instruments you will keep and drop the rest"
                - "Hold a two-hour block to read evidence and pick the next change @recurring(weekly:sat)"
                - "Book two user calls for this month"
                - "Ask a peer founder or advisor to receive your monthly numbers"
            - name: Fit search for technical founders who keep building
              description: |-
                ## Purpose
                Technical founders often respond to weak retention by shipping more features, because building is where they feel useful. Setting a rule that no new feature starts without a named user problem from the evidence logs, and spending a fixed share of each week with users rather than code, redirects that energy at fit.

                ## Milestones
                1. A rule written that every new feature must cite a logged user problem.
                2. A fixed share of each week, such as one day, set aside for users and evidence.
                3. The last ten shipped features checked for whether they moved activation or retention.
                4. A co-founder or advisor asked to call out builds that break the rule.
              priority: low
              frontmatter:
                mode: learning
                output_kind: habit
                success_criteria: "The feature rule is written and enforced for one quarter, and the last ten shipped features have been checked against activation and retention."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Write the rule linking every feature to a logged user problem"
                - "Mark one day a week in the calendar for users and evidence"
                - "Check whether the last ten features moved activation or retention"
                - "Ask someone you trust to flag builds that break the rule"
            - name: Finding fit again after a market shift
              description: |-
                ## Purpose
                Fit is not permanent: a new competitor, a platform change or a shift such as cheap AI tools can turn a loved product into an optional one within a year. Founders who had fit and see retention slipping need to re-run the search quickly, starting from which segment is leaving first and what they are switching to.

                ## Milestones
                1. The cohorts and segments where retention fell first identified.
                2. Ten recently lost or downgraded users asked what they switched to and why.
                3. The fit definition revisited for the new market conditions.
                4. Leading indicators checked monthly until the trend has stabilised.
              priority: medium
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "The first-affected segments are identified, ten switchers have explained their move, and the fit definition is revised for the new conditions."
                cadence: phased
                effort_hours_estimate: "12"
              tasks:
                - "Find the cohorts and segments where retention fell first"
                - "Ask ten lost or downgraded users what they switched to"
                - "Revise the fit definition for the new conditions"
                - "Check activation, retention and survey score for a turn @recurring(monthly:11)"
            - name: Behavioural cohorts of retained users
              description: |-
                ## Purpose
                Sign-up month cohorts show whether fit is improving; behavioural cohorts show why. Grouping users by what they did in their first weeks, which features, how many colleagues, which integrations, reveals the paths that lead to long-term retention and the ones that look busy but lead nowhere.

                ## Milestones
                1. Five or more behavioural cohorts defined from first-month actions.
                2. Ninety-day retention compared across those cohorts.
                3. The two paths with the highest retention described in plain language.
                4. Onboarding or messaging changes proposed to steer new users onto those paths.
              priority: low
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "At least five behavioural cohorts are compared on ninety-day retention, and the two best paths are written up with proposed onboarding changes."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "Define five behavioural cohorts from first-month actions"
                - "Compare ninety-day retention across those cohorts"
                - "Describe the two strongest paths in plain language"
                - "Refresh the behavioural cohort comparison @recurring(quarterly)"
            - name: Word of mouth and organic referral measurement
              description: |-
                ## Purpose
                When users recommend you without being asked, the segment is starting to pull the product into new hands. Measuring the share of new users who arrive by recommendation, and which existing users send them, gives an early and hard-to-fake fit signal that paid growth cannot imitate.

                ## Milestones
                1. A how did you hear about us question added to sign-up, with free text allowed.
                2. Referral sources tracked through invites and shared links where possible.
                3. The monthly share of new users from word of mouth recorded by segment.
                4. The users who refer most identified and interviewed about why.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "The share of new users arriving by word of mouth is recorded monthly by segment for six months, and the top referrers have been interviewed."
                cadence: rolling
              tasks:
                - "Add a how did you hear about us question to sign-up"
                - "Track invites and shared links back to the referring user"
                - "Log the monthly share of word-of-mouth sign-ups by segment @recurring(monthly:17)"
                - "Interview the three users who referred the most people"
            - name: Net revenue retention as a fit signal
              description: |-
                ## Purpose
                For products sold to teams, fit shows up when accounts spend more over time, adding seats or moving up a plan, even as some leave. Tracking net revenue retention by cohort and by segment tells you whether the accounts you keep are growing fast enough to outweigh the ones you lose.

                ## Milestones
                1. A definition of net revenue retention agreed, including how downgrades and churn count.
                2. Net revenue retention calculated for each quarterly cohort of accounts.
                3. The figure broken down by segment and account size.
                4. The segments with the strongest expansion written into the scorecard.

                ## Notes
                Agree the calculation with whoever keeps the books so the number matches what investors will later see. Small cohorts swing widely; show the account count beside every figure.
              priority: low
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "Net revenue retention is calculated by quarterly cohort and segment with account counts shown, and the strongest expansion segment is on the scorecard."
                cadence: cyclic
              tasks:
                - "Agree the revenue retention definition with whoever keeps the books"
                - "Calculate net revenue retention for each quarterly account cohort @recurring(quarterly)"
                - "Break the figure down by segment and account size"
                - "Add the strongest expansion segment to the scorecard"
            - name: Multi-segment fit map before scaling
              description: |-
                ## Purpose
                Once one segment pulls the product, the temptation is to sell to every adjacent group at once. A fit map that rates each adjacent segment on how close its job, alternatives and buying path are to the core segment, plus any early usage evidence, lets you choose the order of expansion instead of diluting the product again.

                ## Milestones
                1. Five adjacent segments listed with how their job and alternatives differ from the core.
                2. Existing usage and survey evidence from each adjacent segment gathered.
                3. Each segment rated on closeness to the core and evidence of pull.
                4. An expansion order chosen with the signal that would trigger moving to the next segment.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "Five adjacent segments are rated on closeness and evidence, and an expansion order with a trigger signal for each step is recorded."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "List five segments adjacent to the core segment"
                - "Gather any usage and survey evidence from each"
                - "Rate each segment on closeness to the core job and evidence of pull"
                - "Record the expansion order and the trigger for each step"
---

# Product-Market Fit Search

Product-Market Fit Search is the stretch between having users and having a segment that would be genuinely upset to lose you, and it is for founders who need to know which of the two they are in. It starts with foundations (a written definition of fit, an honest audit of current evidence, one target segment, an activation event, cohort tracking and a disappointment survey), moves into the weekly machinery of cohort reviews, iteration loops and power-user calls, then skills such as reading retention curves and positioning, decisions about narrowing and cutting, dated checkpoints and relaunches, variants for B2B, consumer, marketplace, solo and technical founders, and finally specialist measurement of word of mouth, revenue retention and multi-segment fit.

The rhythm is weekly and monthly: cohort reviews on Mondays, one hypothesis shipped and read every week, power-user calls midweek, feedback triage on Thursdays, a monthly survey wave, scorecard, churn conversations and feature ledger, and a quarterly re-cut of segments. The Metrics log, Meeting notes, Feedback themes, Product spec and Board meeting templates pair with it. Installing adds all 50 projects as active, so archive the ones that are not for you yet.
