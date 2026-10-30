---
id: product-management.product-growth-experiments
name: Product Growth Experiments
description: "A disciplined experiment programme for sign-up, onboarding, sharing and upgrade flows: trustworthy assignment and metrics, a scored backlog, sound statistics and a decision log the team learns from."
category: business
version: 1.0.0
tags: [product-management, product-growth-experiments, team, engineer, ab-testing, experimentation, growth, conversion]
author: Aurum Technology
starter_structure:
  templates:
    - purchase-decision
    - product-spec
    - operational-checklist
    - metrics-log
    - meeting-notes
    - risk-register
  pillars:
    - name: Product Management
      emoji: "🧩"
      description: "Deciding what to build and why: discovery and research, roadmaps and prioritisation, specs and launches, pricing and packaging, product analytics, and the feedback loops that keep a product honest."
      pillarFrontmatter:
        review_cadence: monthly
      areas:
        - name: Product Growth Experiments
          description: "Running a backlog of in-product experiments on sign-up, onboarding, sharing and upgrade flows, with a disciplined process for learning from results."
          projects:
            - name: Growth experiment charter and decision rights
              description: |-
                ## Purpose
                Growth teams that start testing without agreed rules end up arguing after every result about who can launch a test, what counts as a win and who makes the ship call. A one-page charter settles those questions once: what an experiment is, which flows are in scope, who approves risky tests and who decides when results are mixed. Writing it before the first live test means the first disagreement is about evidence, not authority.

                ## Milestones
                1. A one-page charter naming the in-scope flows: sign-up, onboarding, sharing and upgrade.
                2. Approval rules written for low-risk and high-risk tests, with a named approver for each.
                3. Decision rights recorded for ship, iterate and kill calls, including who breaks a tie.
                4. The charter reviewed by the product, engineering, design and data leads and stored where the team can find it.

                ## Notes
                Keep it to one page. A charter nobody reads is worse than none, because people assume rules that do not exist.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A one-page charter with scope, approval rules and decision rights, signed off by four leads and linked from the team's main page."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "List every flow the team expects to test in the next six months"
                - "Draft approval rules for low-risk and high-risk tests"
                - "Name who makes the ship, iterate or kill call on mixed results"
                - "Circulate the charter draft to the product, engineering, design and data leads"
            - name: Funnel baseline from sign-up to upgrade
              description: |-
                ## Purpose
                Without a baseline, nobody knows whether a 2 point lift in sign-up completion is meaningful or ordinary week-to-week noise. Pulling eight to twelve weeks of conversion rates for each step from landing page to paid upgrade, with their weekly spread, shows where the biggest drop-offs are and how far a test must move a number before it counts.

                ## Milestones
                1. Conversion rates for each step from landing to sign-up, first session, invite sent and upgrade, covering the last eight to twelve weeks.
                2. The weekly high and low for each rate recorded beside the average.
                3. The two steps with the largest absolute drop-off highlighted.
                4. The baseline saved with the date range and query used, so anyone can rebuild it.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: research
                output_kind: artifact
                success_criteria: "A dated funnel baseline covering at least eight weeks, with averages, weekly ranges and the query behind each number."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Write down every step from landing page to paid upgrade in order"
                - "Pull weekly conversion for each step over the last twelve weeks"
                - "Note the highest and lowest week beside each average"
                - "Save the queries next to the baseline with their date range"
                - "Refresh the funnel baseline with the latest twelve weeks @recurring(quarterly)"
            - name: Exposure and assignment logging check
              description: |-
                ## Purpose
                An experiment can only be analysed if every user's assignment and the moment they actually saw the change are logged, and the conversion events fire identically in both variants. Checking this before the first test catches the commonest silent failure: counting users who were assigned but never reached the changed screen, which dilutes every effect toward zero.

                ## Milestones
                1. An assignment event recorded with user ID, experiment ID, variant and timestamp.
                2. An exposure event that fires only when the user reaches the changed surface.
                3. Conversion events for each in-scope flow confirmed to fire the same way in control and treatment.
                4. A written list of gaps, each with an engineer and a fix date.

                ## Notes
                This is a check of experiment plumbing, not a full tracking plan. If the product has no reliable event tracking at all, fix that first.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: research
                output_kind: artifact
                success_criteria: "Assignment and exposure events verified in a test environment for two flows, with every gap logged against an owner and a date."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Trigger a test assignment and find its event in the raw data"
                - "Confirm the exposure event fires only when the changed screen renders"
                - "Compare conversion events between variants in a staging build"
                - "Log each gap with an engineer and a fix date"
            - name: Primary and guardrail metric definitions
              description: |-
                ## Purpose
                Teams that pick the success metric after seeing the data will always find a winner. Defining in advance, in writing, the primary metric for each flow and the guardrails that must not get worse, such as refunds, unsubscribes, support tickets or page load time, removes that temptation and makes results comparable from one test to the next.

                ## Milestones
                1. One primary metric defined per in-scope flow, with the exact numerator, denominator and time window.
                2. Three to five guardrail metrics, each with the size of drop that would block a launch.
                3. Each definition checked against real data so it can be computed per variant.
                4. The definitions published in the team's experiment documentation with a version date.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Written definitions for one primary metric per flow and at least three guardrails, each with a computation tested on real data."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Draft a primary metric for each of the four in-scope flows"
                - "Choose guardrails covering revenue, support load and performance"
                - "Agree the size of guardrail drop that blocks a launch"
                - "Test each definition by computing it for last month's users"
                - "Publish the definitions with a version date"
            - name: Choosing an experimentation platform
              description: |-
                ## Purpose
                Building assignment, analysis and a results dashboard in-house can absorb an engineer for a quarter, while a vendor tool can cost far more than expected once traffic grows. Comparing three options, including the in-house route, against the same criteria (server-side support, warehouse-native analysis, statistical method and price at next year's traffic) leads to a choice the team will not regret within a year.

                ## Milestones
                1. Requirements written covering server-side and client-side tests, analysis method, guardrail support and data residency.
                2. Three options scored against the same criteria, one of them the build route.
                3. Price estimated at current traffic and at twice current traffic.
                4. A decision recorded with the reasons and the runner-up.

                ## Notes
                Start from the **Purchase decision** template. Ask each vendor how they handle sample ratio checks and repeated looks at results; the answers say a lot about statistical maturity.
              priority: high
              deadlineOffsetDays: 60
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A platform decision recorded with a scored comparison of three options and a two-year cost estimate for each."
                cadence: one-shot
                effort_hours_estimate: "12"
              tasks:
                - "Write the must-have and nice-to-have requirements for testing"
                - "Shortlist two vendor tools and outline the in-house option"
                - "Run a trial experiment on one tool in a staging environment"
                - "Estimate each option's cost at current and double traffic"
                - "Record the decision and the runner-up with reasons"
            - name: Traffic and minimum detectable effect sheet
              description: |-
                ## Purpose
                Most growth ideas fail not because they are wrong but because the flow they touch has too little traffic to detect a realistic effect in a sensible time. A shared sheet with weekly traffic and baseline rate for each testable surface, plus the smallest lift detectable in two and four weeks, tells the team before planning whether an idea can be tested at all.

                ## Milestones
                1. Weekly eligible users and baseline conversion listed for every testable surface.
                2. The minimum detectable effect calculated for two-week and four-week runs at the team's chosen power.
                3. Surfaces too small for a standard split test flagged.
                4. The sheet linked from the backlog so every idea is checked against it.
              priority: medium
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A traffic sheet covering every in-scope surface with two-week and four-week minimum detectable effects, linked from the backlog."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "List every surface the team might test with its weekly eligible users"
                - "Add the baseline conversion rate for each surface"
                - "Calculate the detectable lift for two-week and four-week runs"
                - "Flag surfaces that cannot support a standard split test"
            - name: One-page experiment brief format
              description: |-
                ## Purpose
                A brief written before build forces the team to state the hypothesis, the metric, the expected effect size, the run length and what each result would lead them to do. Keeping it to one page makes it quick enough that people actually write it, and the brief becomes the record the readout is judged against.

                ## Milestones
                1. A brief format with sections for hypothesis, evidence, variants, primary metric, guardrails, sample size, run length and decision rule.
                2. One past experiment rewritten in the format as a worked example.
                3. A rule agreed that no test goes live without an approved brief.
                4. The format stored where engineers and designers will open it.

                ## Notes
                Start from the **Product spec** template and cut it down hard. The decision rule, what you will do if the result is flat, is the section most often skipped.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A one-page brief format in use, with a worked example and at least three live tests launched from approved briefs."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "List the sections every brief must contain"
                - "Ask the agent to draft a worked example brief from a past test"
                - "Add a decision rule section for flat and negative results"
                - "Agree with the team that no test launches without a brief"
            - name: Growth experiment backlog set-up
              description: |-
                ## Purpose
                Ideas for growth tests arrive from support tickets, sales calls, competitor screenshots and late-night inspiration, and most are lost or argued about from memory. One backlog with a consistent idea format, a flow tag and a simple score lets the team see every candidate in one place and pick the next test in minutes.

                ## Milestones
                1. A single backlog with fields for idea, flow, evidence, expected impact, confidence and effort.
                2. Existing ideas from documents, chat threads and notebooks moved into it.
                3. A scoring method chosen and applied to every idea.
                4. The top ten ideas ranked and visible to the whole team.
              priority: high
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A backlog holding every known growth idea in one format, each scored, with the top ten ranked and visible."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Create the backlog with fields for flow, evidence and score"
                - "Move ideas from old documents and chat threads into the backlog"
                - "Score every idea with the agreed method"
                - "Capture new test ideas raised during the week @recurring(weekly:fri)"
            - name: AA test of the assignment pipeline
              description: |-
                ## Purpose
                Running an experiment where both groups see the identical product sounds pointless until it shows a significant difference, which means the assignment or the analysis is broken. A two-week AA test on real traffic checks for sample ratio mismatch, uneven assignment and an inflated false positive rate before any real decision depends on the pipeline.

                ## Milestones
                1. An AA test live on one high-traffic surface for at least two weeks.
                2. The split between groups checked against the intended ratio.
                3. Primary and guardrail metrics compared, with differences inside the expected noise.
                4. Any fault found fixed and the AA test rerun until it passes.

                ## Notes
                Expect roughly one metric in twenty to look significant by chance at the usual threshold. One is normal; several is a warning.
              priority: high
              deadlineOffsetDays: 45
              frontmatter:
                mode: building
                output_kind: knowledge
                success_criteria: "An AA test completed on real traffic with a matching sample ratio and no more false positives than chance predicts."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Pick a high-traffic surface for the AA test"
                - "Launch the AA test with an even 50-50 split"
                - "Check group sizes against the intended ratio after three days"
                - "Compare every metric between the groups at the end of two weeks"
            - name: Pre-launch experiment QA checklist
              description: |-
                ## Purpose
                Broken variants are common: a button that does nothing on one browser, a translation missing in treatment, or a flag that leaks the new screen to control. A short QA checklist run before every launch, covering each variant on each platform, assignment, exposure events and rollback, stops the team wasting two weeks of traffic on a test that was never valid.

                ## Milestones
                1. A checklist covering variant rendering, platforms, languages, assignment, exposure events, guardrail alerts and rollback.
                2. The checklist run against the next three launches.
                3. Each launch signed off by the building engineer and a second person.
                4. Problems the checklist missed recorded and added to it.

                ## Notes
                Start from the **Operational checklist** template.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A pre-launch checklist used and signed off by two people on three consecutive experiment launches."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Write the checklist items for rendering, events and rollback"
                - "Run the checklist on the next experiment before launch"
                - "Have a second person check each variant on mobile and desktop"
                - "Add any failure the checklist missed as a new item"
            - name: Experiment results log
              description: |-
                ## Purpose
                Six months into testing, most teams cannot say which tests ran, what they found or why the winning variant looks the way it does. A results log with one row per concluded experiment, recording the hypothesis, dates, sample size, effect with its interval and the decision, becomes the team's memory and the raw material for every later review.

                ## Milestones
                1. A log with columns for experiment, flow, hypothesis, dates, sample, primary effect, interval, guardrails and decision.
                2. Every experiment concluded in the last year added.
                3. Each new result entered within two working days of its readout.
                4. The log linked from the backlog and the decision log.

                ## Notes
                Start from the **Metrics log** template. Record flat and negative results as carefully as wins; they are most of the value.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every experiment concluded in the last year appears in the log, and new results are added within two working days."
                cadence: rolling
              tasks:
                - "Set up the results log with the agreed columns"
                - "Back-fill experiments concluded in the last twelve months"
                - "Enter each new result within two days of its readout"
                - "Check the log for missing or half-filled rows @recurring(monthly:8)"
            - name: Weekly growth experiment stand-up
              description: |-
                ## Purpose
                Experiments stall in the gaps between people: the brief waiting for design, the variant waiting for code review, the readout waiting for an analyst. A 30-minute weekly stand-up that walks the board from idea to decision, live tests first, keeps tests moving and surfaces problems before they cost a week of traffic.

                ## Milestones
                1. A fixed 30-minute weekly slot with product, design, engineering and data present.
                2. A standing agenda: live tests, tests due to launch, readouts due, blockers.
                3. Notes with owners and dates kept for each meeting.
                4. Eight consecutive stand-ups held.

                ## Notes
                Start from the **Meeting notes** template.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Eight consecutive weekly stand-ups held, with notes listing an owner and date for every blocker raised."
                cadence: rolling
              tasks:
                - "Book a 30-minute weekly slot with all four disciplines"
                - "Write the standing agenda at the top of the notes page"
                - "Run the growth stand-up and record owners for each blocker @recurring(weekly:tue)"
                - "Ask the team after four weeks what to cut from the agenda"
            - name: Fortnightly backlog scoring session
              description: |-
                ## Purpose
                Scores go stale as evidence arrives: a support spike makes an idea more urgent, a failed test makes three related ideas less likely. Rescoring the top of the backlog every two weeks, and retiring ideas that no longer make sense, keeps the next test the best one available rather than the oldest.

                ## Milestones
                1. A 45-minute session every two weeks to rescore the top 20 ideas.
                2. Evidence added to each idea whenever it changes the score.
                3. Ideas older than six months with no new evidence archived.
                4. The next two tests chosen at the end of each session.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Twelve fortnightly scoring sessions held in six months, each ending with the next two tests chosen."
                cadence: rolling
              tasks:
                - "Book the scoring session twice a month with the trio"
                - "Rescore the top 20 ideas against new evidence @recurring(monthly:5)"
                - "Choose the next two tests from the rescored backlog @recurring(monthly:19)"
                - "Archive ideas older than six months with no new evidence"
            - name: Live experiment health checks
              description: |-
                ## Purpose
                Tests can go wrong after launch: a release breaks one variant, a marketing campaign floods one segment, or a guardrail starts sliding. Checking every live experiment twice a week for sample ratio mismatch, error rates and guardrail movement catches these early enough to pause and fix rather than discard a month of data.

                ## Milestones
                1. A health view showing sample ratio, error rate and guardrails for every live test.
                2. Automated alerts set for sample ratio mismatch and large guardrail drops.
                3. A written rule for when to pause a test and who decides.
                4. Twice-weekly checks recorded for every live experiment.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every live experiment has automated sample ratio and guardrail alerts and a recorded check at least twice a week."
                cadence: rolling
              tasks:
                - "Build a health view covering all live experiments"
                - "Set alerts for sample ratio mismatch and guardrail drops"
                - "Write the pause rule and name who can pull a test"
                - "Check sample ratio and guardrails on each live test @recurring(weekly:mon,thu)"
            - name: Experiment collision calendar
              description: |-
                ## Purpose
                Two tests changing the same screen at the same time can interact so badly that neither result means anything. A calendar of which surfaces each live and planned test touches, with rules for when tests may overlap, lets several squads test in parallel without contaminating each other's results.

                ## Milestones
                1. A calendar showing every live and planned test by surface and date.
                2. Rules written for which tests may share a surface at the same time.
                3. Mutually exclusive layers or traffic splits configured where needed.
                4. Each new test checked against the calendar before launch.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every launch in a quarter is checked against the collision calendar, with no unplanned overlaps on the same surface."
                cadence: rolling
              tasks:
                - "List the surfaces each live test touches"
                - "Write the overlap rules for shared surfaces"
                - "Set up exclusive layers for tests on the checkout page"
                - "Add next week's planned launches to the calendar @recurring(weekly:mon)"
            - name: Monthly experiment readout
              description: |-
                ## Purpose
                Leaders and neighbouring teams rarely read individual test results, but they do notice when growth work seems to produce nothing. A short monthly readout covering tests concluded, what was learned, what shipped and what is next shows the programme's value and invites ideas from sales, support and marketing.

                ## Milestones
                1. A one-page readout format with concluded tests, learnings, shipped changes and next tests.
                2. The readout sent to stakeholders on a fixed day each month.
                3. Flat and losing tests reported alongside winners.
                4. At least one idea a quarter received from outside the team as a result.
              priority: medium
              frontmatter:
                mode: service
                output_kind: deliverable
                success_criteria: "Six monthly readouts sent on schedule, each reporting every concluded test including the flat and negative ones."
                cadence: rolling
              tasks:
                - "Draft the one-page readout format"
                - "Ask the agent to summarise the month's log entries into the readout"
                - "Send the monthly experiment readout to stakeholders @recurring(monthly:12)"
                - "Add a closing line inviting test ideas from other teams"
            - name: Concluded experiment decision log
              description: |-
                ## Purpose
                Weeks after a test ends, people remember the result but not the reasoning: why the team shipped a variant that was only directionally positive, or killed one that won on the primary metric but hurt a guardrail. A decision log, one entry per call with the evidence and the person who made it, makes those choices auditable and stops the same debate starting again.

                ## Milestones
                1. A decision log with fields for experiment, decision, evidence, trade-offs and decider.
                2. Every ship, iterate or kill call since the charter recorded.
                3. Shipped variants confirmed as fully rolled out and the losing code removed.
                4. The log reviewed monthly for decisions still awaiting follow-through.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every concluded experiment has a decision entry with evidence and decider, and none has gone more than a month without follow-through."
                cadence: rolling
              tasks:
                - "Create the decision log with the agreed fields"
                - "Record the decisions made since the charter was signed"
                - "Confirm each shipped variant is serving all users"
                - "Chase decisions still waiting on follow-through @recurring(monthly:22)"
            - name: Searchable library of past experiment learnings
              description: |-
                ## Purpose
                Teams change, and new members happily rerun tests that failed two years ago because nobody can find the result. Grouping concluded experiments by flow and by theme, such as social proof, form length, default choices or urgency messaging, turns the results log into a library people search before proposing a new test.

                ## Milestones
                1. Every concluded experiment tagged by flow and by design or persuasion theme.
                2. A short summary for each theme stating what has and has not worked in this product.
                3. A rule that new briefs cite related past tests.
                4. The library cited in at least half of new briefs within a quarter.
              priority: low
              frontmatter:
                mode: operating
                output_kind: knowledge
                success_criteria: "A library covering every concluded test, tagged by flow and theme, with theme summaries cited in at least half of new briefs."
                cadence: rolling
              tasks:
                - "Choose ten themes to tag past experiments by"
                - "Tag every concluded experiment by flow and theme"
                - "Ask the agent to summarise what each theme has shown so far"
                - "Add the month's concluded tests to the library @recurring(monthly:26)"
            - name: Experiment programme scorecard
              description: |-
                ## Purpose
                Counting wins alone pushes teams toward safe, tiny tests. A scorecard that tracks tests launched, median time from idea to readout, share of tests with a valid result, win rate and cumulative estimated impact shows whether the programme is getting faster and braver or just busier.

                ## Milestones
                1. Five programme measures defined, each with how it is calculated.
                2. Figures for the last two quarters back-filled from the results log.
                3. The scorecard updated every month.
                4. One improvement target chosen each quarter from the scorecard.

                ## Notes
                A win rate well above a third often means tests are too timid, not that the team is brilliant.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A monthly scorecard with five programme measures, updated for six consecutive months."
                cadence: rolling
              tasks:
                - "Define the five programme measures and their formulas"
                - "Back-fill the last two quarters from the results log"
                - "Update the programme scorecard @recurring(monthly:28)"
                - "Pick one measure to improve next quarter"
            - name: Quarterly experimentation retrospective
              description: |-
                ## Purpose
                Process problems hide inside individual tests: briefs written after launch, readouts delayed by analyst queues, QA skipped under deadline pressure. A 60-minute retrospective each quarter, using the scorecard and a handful of tests as evidence, picks two process changes and checks whether last quarter's changes worked.

                ## Milestones
                1. A quarterly retrospective booked with everyone who ran or reviewed a test.
                2. Three or four tests from the quarter reviewed for process, not outcome.
                3. Two process changes agreed, each with an owner.
                4. Last quarter's changes checked for effect.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Four quarterly retrospectives held in a year, each ending with two process changes and a check on the previous two."
                cadence: cyclic
              tasks:
                - "Book the experimentation retrospective @recurring(quarterly)"
                - "Pick three tests from the quarter to review for process"
                - "Agree two process changes and an owner for each"
                - "Check whether last quarter's changes were made and helped"
            - name: Reading confidence intervals and statistical power
              description: |-
                ## Purpose
                Product people who read only the p-value miss the most useful part of a result: the range of effects the data is consistent with. Learning to read a confidence interval, to tell a precise flat result from an underpowered one, and to set power before a test runs makes readouts honest and stops promising ideas being killed by tests that were too small.

                ## Milestones
                1. The difference between statistical and practical significance explained in your own words.
                2. Confidence intervals read correctly on three past results, including one flat test.
                3. Sample size calculated by hand for one planned test and matched to the team's calculator.
                4. A one-paragraph guide written for teammates on reading an interval.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Three past readouts reinterpreted using intervals, and a hand sample size calculation for one planned test that matches the team's calculator."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Pick a short course or textbook chapter on experiment statistics"
                - "Reinterpret three past readouts using their confidence intervals"
                - "Calculate the sample size for one planned test by hand"
                - "Write a one-paragraph guide to reading intervals for the team"
            - name: Peeking, early stopping and sequential tests
              description: |-
                ## Purpose
                Checking a test daily and stopping the moment it looks significant can push the false positive rate far above the intended 5 percent. Understanding why, and learning the alternatives (fixed run lengths, or a sequential method designed for repeated looks), lets the team watch results without fooling itself.

                ## Milestones
                1. A simulation or worked example showing how repeated peeking inflates false positives.
                2. The team's chosen approach written down: fixed horizon or a named sequential method.
                3. Stopping rules added to the brief format.
                4. Two tests run under the new stopping rules.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A written stopping policy in the brief format, followed on two consecutive tests without an unplanned early stop."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Run a simple peeking simulation in a notebook or spreadsheet"
                - "Read how your platform handles repeated looks at results"
                - "Write the team's stopping rule into the brief format"
                - "Hold the next two tests to the written stopping rule"
            - name: Diagnosing sample ratio mismatch
              description: |-
                ## Purpose
                When a 50-50 test ends up 51.5 to 48.5 on a large sample, something is filtering users unevenly, and the result cannot be trusted however good it looks. Knowing the usual causes, such as redirects that lose users, bots, slower loading in one variant or exposure logged in only one arm, turns a confusing alert into an afternoon's fix.

                ## Milestones
                1. A chi-square check for sample ratio run on three past tests.
                2. A list of the common causes of mismatch in this product's stack.
                3. A diagnosis runbook giving the order in which to check causes.
                4. One real or staged mismatch traced to its cause using the runbook.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A mismatch runbook written and used to trace one real or deliberately staged mismatch to its root cause."
                cadence: phased
                effort_hours_estimate: "5"
              tasks:
                - "Run a sample ratio check on three past experiments"
                - "List the redirects, bot filters and loaders that could drop users"
                - "Write a runbook for diagnosing a mismatch alert"
                - "Stage a mismatch in staging and trace it with the runbook"
            - name: Writing falsifiable growth hypotheses
              description: |-
                ## Purpose
                Vague hypotheses, such as bigger buttons improving conversion, cannot be proven wrong in any useful way. A good hypothesis names the user problem, the change, the metric, the expected direction and size, and the evidence behind it, so a flat result still teaches something. Practising on the current backlog sharpens ideas before anyone builds them.

                ## Milestones
                1. A hypothesis pattern agreed: because of this evidence, we believe this change will move this metric by this much for these users.
                2. The top ten backlog ideas rewritten in the pattern.
                3. Ideas that cannot be written this way sent back for more evidence.
                4. Each new brief's hypothesis checked by a second person.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "The top ten backlog ideas rewritten as falsifiable hypotheses, with every idea lacking evidence sent back to its author."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Agree a hypothesis pattern with the team"
                - "Ask the agent to rewrite the top ten ideas in the pattern for review"
                - "Send ideas with no supporting evidence back to their authors"
                - "Pair-review the hypothesis on each new brief"
            - name: Segment cuts without fishing for wins
              description: |-
                ## Purpose
                Slicing a flat result by country, device, plan and traffic source until something looks significant almost guarantees a false win. Learning to declare segments in advance, correct for multiple comparisons and treat surprise segment effects as new hypotheses lets engineers and PMs explore results without misleading anyone.

                ## Milestones
                1. Pre-declared segments added as a field in the brief format.
                2. A multiple comparison correction chosen and explained.
                3. Two past results re-read using only their pre-declared segments.
                4. A rule that unplanned segment wins become new tests, not launches.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A pre-declared segments field in every new brief and a written correction method, applied to two past results."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Add a pre-declared segments field to the brief format"
                - "Pick a multiple comparison correction and note why"
                - "Re-read two past results using only pre-declared segments"
                - "Turn one surprise segment effect into a new backlog idea"
            - name: Bayesian and frequentist readouts compared
              description: |-
                ## Purpose
                Some platforms report a probability that the variant is better, others a p-value and interval, and teams mix the two without noticing they answer different questions. Analysing the same three past experiments both ways shows where the methods agree, where they differ and which one the team should use as its default language.

                ## Milestones
                1. Three past experiments analysed with both a frequentist and a Bayesian method.
                2. Differences in conclusions noted and explained.
                3. The team's default reporting method chosen and written into the readout format.
                4. A short explainer for stakeholders on reading the chosen output.
              priority: low
              frontmatter:
                mode: learning
                output_kind: decision
                success_criteria: "A default reporting method recorded in the readout format, backed by a two-method comparison of three past experiments."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Choose three past experiments with clear, flat and mixed results"
                - "Analyse each with both methods in the same notebook"
                - "Note where the two methods would lead to different decisions"
                - "Write the chosen default method into the readout format"
            - name: Clean experiment code and variant removal
              description: |-
                ## Purpose
                Every experiment leaves a branch in the code, and teams that never remove them end up with hundreds of stale flags, slower builds and bugs that appear only in old variant combinations. Engineers who build variants behind a single, well-named flag and delete the loser within two weeks of a decision keep the codebase fit for the next hundred tests.

                ## Milestones
                1. A coding convention for experiment flags covering naming, ownership and expiry date.
                2. Variant logic kept in one place per experiment rather than scattered through the code.
                3. Flags for all concluded experiments removed or scheduled for removal.
                4. A monthly sweep that lists flags past their expiry date.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: habit
                success_criteria: "No concluded experiment's flag remains in the code more than a month after its decision, confirmed by a monthly sweep."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Write the naming and ownership convention for experiment flags"
                - "Refactor one live experiment so its variant logic sits in one place"
                - "Delete code for experiments decided more than two weeks ago"
                - "Sweep for experiment flags past their expiry date @recurring(monthly:15)"
            - name: Estimating the annual impact of a win honestly
              description: |-
                ## Purpose
                Multiplying a test's lift by a full year of traffic routinely overstates impact, because winners' effects shrink, the test period differs from the rest of the year and only exposed users are affected. Learning a conservative method, using the lower part of the interval, only the share of traffic exposed and an assumed decay, keeps the programme's claimed impact credible to finance.

                ## Milestones
                1. A written method for annualising effects that uses only the exposed share of traffic.
                2. A discount for overestimated winners and effect decay agreed with the data lead.
                3. Last quarter's wins re-estimated with the method.
                4. The method referenced in the monthly readout.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Last quarter's wins re-estimated with a written conservative method agreed with the data lead and finance."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Find how past wins were annualised in earlier readouts"
                - "Draft a method using exposed traffic and the lower interval bound"
                - "Agree a decay assumption with the data lead"
                - "Re-estimate last quarter's wins and share the gap with finance"
            - name: Sign-up form friction experiments
              description: |-
                ## Purpose
                Sign-up forms accumulate fields because each one seems harmless, and every field, password rule and verification step costs some share of people who wanted to start. A series of tests on field count, social sign-in, password rules and when email verification is required finds which friction the product actually needs and which only loses users.

                ## Milestones
                1. Every field and step in the sign-up form listed with the reason it exists.
                2. Three tests briefed: fewer fields, social sign-in placement and deferred verification.
                3. At least two of the three run to a valid result.
                4. Changes shipped or rejected with spam sign-ups and activation checked as guardrails.

                ## Notes
                Watch quality, not just completions. A shorter form that doubles fake accounts is not a win.
              priority: medium
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "At least two sign-up friction tests run to a valid result, each with a recorded ship or reject decision and guardrail check."
                cadence: phased
                effort_hours_estimate: "20"
              tasks:
                - "List every sign-up field and the team that asked for it"
                - "Brief a test removing the least-used optional fields"
                - "Brief a test moving email verification after the first session"
                - "Check spam sign-ups and activation as guardrails on each test"
            - name: Onboarding sequence experiments
              description: |-
                ## Purpose
                Onboarding flows are full of untested opinions: whether to show a tour, how many setup questions to ask, whether to start from a template or a blank page. Testing these choices one at a time against an activation metric the team already trusts settles debates that design reviews cannot.

                ## Milestones
                1. The current onboarding steps mapped with the drop-off at each.
                2. Three candidate tests briefed, each changing a single variable.
                3. Each test run against the agreed activation metric with a retention guardrail.
                4. Learnings added to the library under the onboarding theme.

                ## Notes
                Change one thing per test. Redesigning the whole onboarding at once tells you whether the new version is better, not why.
              priority: medium
              frontmatter:
                mode: building
                output_kind: knowledge
                success_criteria: "Three single-variable onboarding tests concluded against the activation metric, with results filed in the library."
                cadence: phased
                effort_hours_estimate: "20"
              tasks:
                - "Map the current onboarding steps with the drop-off at each"
                - "Brief a test of template start against blank start"
                - "Brief a test that halves the number of setup questions"
                - "Add a thirty-day retention guardrail to each onboarding test"
            - name: Invite and sharing flow experiments
              description: |-
                ## Purpose
                Invite and share prompts drive a large share of new sign-ups in collaborative products, yet their timing, wording and placement are usually set once and never tested. Experiments on when the invite prompt appears, what the invited person sees and how shared links preview can raise both invites sent and invites accepted.

                ## Milestones
                1. Invites sent per active user and invite acceptance rate measured as the baseline.
                2. Tests briefed on prompt timing, invite message and the invitee's landing page.
                3. Acceptance rate measured as well as invites sent, so pushy prompts do not count as wins.
                4. Winning changes shipped and recorded in the library.
              priority: medium
              frontmatter:
                mode: building
                output_kind: knowledge
                success_criteria: "Two sharing tests concluded with both invites sent and invites accepted reported, and the results filed in the library."
                cadence: phased
                effort_hours_estimate: "16"
              tasks:
                - "Measure the current invite send and acceptance rates"
                - "Brief a test moving the invite prompt to after the first success"
                - "Brief a test of the page an invited person lands on"
                - "Track complaints and unsubscribes from invite emails as guardrails"
            - name: Upgrade and checkout flow experiments
              description: |-
                ## Purpose
                Small frictions between clicking upgrade and finishing payment, such as an extra plan choice, a surprise tax line or a forced account step, lose buyers who had already decided. Testing the checkout and plan selection steps, not the prices themselves, recovers revenue without touching the pricing model.

                ## Milestones
                1. Drop-off measured at each step from upgrade click to completed payment.
                2. Tests briefed on plan selection layout, payment form fields and order summary clarity.
                3. Refund and downgrade rates tracked as guardrails.
                4. Each result agreed with finance before shipping.

                ## Notes
                Prices and plan contents belong with the pricing work. Keep these tests to the flow itself.
              priority: medium
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "Two checkout flow tests concluded with refund and downgrade guardrails reported and a decision agreed with finance."
                cadence: phased
                effort_hours_estimate: "20"
              tasks:
                - "Measure drop-off at each step from upgrade click to payment"
                - "Brief a test simplifying the plan selection step"
                - "Brief a test showing the full price including tax earlier"
                - "Agree refund and downgrade guardrails with finance"
            - name: Choosing a test design for each idea
              description: |-
                ## Purpose
                Not every idea needs a full split test, and some cannot have one: a change to an email sent once a quarter, a feature with 200 weekly users, or a flow shared across a whole account. A simple guide matching ideas to designs (standard split, longer run with fewer variants, switchback, or a before-and-after with its weaknesses stated) keeps the team testing honestly where traffic is thin.

                ## Milestones
                1. A decision guide matching idea types and traffic levels to test designs.
                2. The main weakness of each weaker design written beside it.
                3. Every backlog idea tagged with its recommended design.
                4. One idea run with a non-standard design and its result caveated in the log.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A written design guide in use, with every backlog idea tagged by recommended design and one non-standard test logged with caveats."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Sort backlog ideas by the weekly traffic they would reach"
                - "Write the guide matching traffic levels to test designs"
                - "Note the main weakness of before-and-after comparisons"
                - "Tag each backlog idea with its recommended design"
            - name: Server-side versus client-side testing decision
              description: |-
                ## Purpose
                Client-side tools let marketers change pages quickly but cause flicker, miss logged-in flows and break with ad blockers, while server-side tests need engineering time for every change. Deciding in writing which flows use which approach ends the recurring argument and stops flicker biasing results on high-value pages.

                ## Milestones
                1. Each in-scope flow listed with its current testing method.
                2. Flicker and ad-blocker loss measured on one client-side test.
                3. A rule written for which flows must be tested server-side.
                4. Any high-value flow moved to server-side testing where the rule requires it.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A written rule assigning every in-scope flow to server-side or client-side testing, based on measured flicker and user loss."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "List each flow with the testing method it uses now"
                - "Measure flicker time on one client-side test"
                - "Estimate the share of users lost to ad blockers in client tests"
                - "Write the rule for which flows must run server-side"
            - name: Pruning untestable ideas from the backlog
              description: |-
                ## Purpose
                A backlog of 300 ideas hides the twenty worth running. Clearing out ideas that cannot reach a detectable effect, repeat a past test, lack any evidence or belong to another team makes the backlog short enough that scoring is quick and every idea left in it is a real candidate.

                ## Milestones
                1. Every idea checked against the traffic sheet and the learning library.
                2. Ideas that repeat past tests linked to the earlier result and closed.
                3. Ideas belonging to other teams passed on with a note.
                4. The backlog cut to fewer than 60 live ideas.
              priority: low
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "The backlog holds fewer than 60 live ideas, each checked against the traffic sheet and the library of past tests."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Check each idea against the traffic sheet"
                - "Close ideas that repeat a past test and link the earlier result"
                - "Hand ideas that belong to other teams to their owners"
                - "Archive ideas with no evidence after asking their authors once"
            - name: Dark pattern and user trust guardrails
              description: |-
                ## Purpose
                Growth tests can win on the metric by tricking people: pre-ticked boxes, confirm-shaming copy, hidden cancel links or fake scarcity. Writing down what the team will not test, and checking every brief against it, protects users and the brand, and keeps the company clear of consumer protection rules that increasingly target these patterns.

                ## Milestones
                1. A list of patterns the team will not test, with an example of each.
                2. A trust check added to the brief and the QA checklist.
                3. Complaint, refund and cancellation rates included as guardrails where relevant.
                4. Live tests reviewed against the list each quarter.

                ## Notes
                Start from the **Risk register** template. Ask your legal or compliance team which consumer protection rules apply where you sell; this list organises the team's policy and is not legal advice.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A written list of banned patterns, a trust check in every brief, and a quarterly review of live tests recorded."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Draft the list of patterns the team will not test"
                - "Add a trust check question to the experiment brief"
                - "Ask the legal team which consumer rules apply to sign-up and checkout"
                - "Review live tests against the trust list @recurring(quarterly)"
            - name: First end-to-end live split test
              description: |-
                ## Purpose
                The first real test exposes every gap at once: the brief, the QA checklist, assignment, alerts, the readout and the decision. Choosing a modest, low-risk change on a high-traffic surface and running it all the way through, with a short review afterwards, proves the machinery before anyone stakes a big bet on it.

                ## Milestones
                1. A low-risk change on a high-traffic surface chosen and briefed.
                2. The QA checklist completed and the test launched with alerts on.
                3. The test run to its planned length without unplanned stops.
                4. A readout, a recorded decision and a short process review completed.
              priority: high
              deadlineOffsetDays: 60
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "One split test run from approved brief to recorded decision at its planned length, followed by a written process review."
                cadence: one-shot
                effort_hours_estimate: "16"
              tasks:
                - "Pick a low-risk change on the busiest in-scope surface"
                - "Write and approve the brief for the first test"
                - "Launch once the QA checklist is signed off"
                - "Hold a 30-minute review of what broke in the process"
            - name: Two-week growth experiment sprint
              description: |-
                ## Purpose
                Focused sprints, with the whole trio on growth for two weeks, can launch more tests than a quarter of part-time effort and build shared habits fast. Planning the sprint around four to six small, pre-briefed tests on one flow, with launch, QA and readout dates fixed in advance, keeps it from turning into a frantic redesign.

                ## Milestones
                1. One flow chosen and four to six small tests briefed before the sprint starts.
                2. Engineering and design capacity cleared for the two weeks.
                3. All tests launched by day five with QA signed off.
                4. A sprint readout with results, decisions and process lessons.
              priority: medium
              deadlineOffsetDays: 45
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "At least four tests launched within the sprint's first five days and a sprint readout delivered on the final day."
                cadence: one-shot
                effort_hours_estimate: "40"
              tasks:
                - "Pick the flow the sprint will focus on"
                - "Brief four to six small tests before day one"
                - "Clear the trio's calendars for the two sprint weeks"
                - "Hold the sprint readout on the last day"
            - name: Launch review for a high-stakes checkout test
              description: |-
                ## Purpose
                Tests touching payment, billing or account deletion can cost real money or real trust if a variant misbehaves. A formal review before launch, with finance, support and on-call engineering agreeing the guardrails, the traffic share, the kill criteria and who pulls the plug at 2am, makes a risky test safe to run.

                ## Milestones
                1. A pre-registration document with hypothesis, metrics, kill criteria and traffic share.
                2. Finance, support and on-call engineering signed off.
                3. A ramp plan starting at a small traffic share, with checks before each increase.
                4. Support briefed with a script for affected customers.
              priority: high
              deadlineOffsetDays: 90
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A high-stakes test launched only after written sign-off from finance, support and on-call engineering on its kill criteria."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Write the pre-registration with explicit kill criteria"
                - "Book a review with finance, support and on-call engineering"
                - "Agree a ramp plan starting at a small share of traffic"
                - "Brief support on what customers in the variant will see"
            - name: Sharing a failed experiment at the all-hands
              description: |-
                ## Purpose
                Organisations that only hear about wins start to believe experiments always work, and teams start hiding flat results. Presenting one well-run test that failed, what was expected, what happened and what it changed, makes honest reporting normal and shows the rest of the company how the team thinks.

                ## Milestones
                1. One failed or flat test chosen that taught something real.
                2. A five-minute talk covering the hypothesis, the result and the lesson.
                3. The talk given at a company or department meeting.
                4. Questions and ideas from the audience added to the backlog.
              priority: low
              frontmatter:
                mode: event
                output_kind: deliverable
                success_criteria: "A five-minute talk on a failed test delivered at a company or department meeting, with audience ideas logged in the backlog."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Choose a flat or losing test with a clear lesson"
                - "Ask the agent to draft a five-minute talk outline from the brief and readout"
                - "Rehearse the talk once with a teammate"
                - "Add the audience's ideas to the backlog"
            - name: Annual experimentation programme review
              description: |-
                ## Purpose
                Once a year, step back from individual tests and ask bigger questions: which flows still have headroom, which themes keep winning, whether the platform still fits and whether the team has the skills it needs. A half-day review with the year's logs and scorecard sets the programme's focus for the next twelve months.

                ## Milestones
                1. The year's results log, decision log and scorecard summarised.
                2. Remaining headroom estimated for each in-scope flow.
                3. Platform, staffing and skills gaps listed.
                4. Next year's focus flows and two programme goals agreed.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: event-completion
                success_criteria: "A half-day annual review held, ending with written focus flows and two programme goals for the coming year."
                cadence: cyclic
              tasks:
                - "Hold the annual experimentation programme review @recurring(yearly)"
                - "Summarise the year's results and scorecard on two pages"
                - "Estimate remaining headroom on each in-scope flow"
                - "Agree next year's focus flows and two goals"
            - name: Experiments in a low-traffic B2B product
              description: |-
                ## Purpose
                B2B products often have a few thousand active accounts, decisions made by groups and sales cycles longer than any test. Adapting the approach, randomising by account rather than user, choosing earlier proxy metrics, running fewer and bolder tests and pairing tests with customer calls, keeps experimentation useful where consumer playbooks fail.

                ## Milestones
                1. The unit of randomisation set to account wherever users share a workspace.
                2. A leading metric chosen that responds within the test window and links to revenue.
                3. Tests limited to changes big enough to detect at current traffic.
                4. Each test paired with three or more customer conversations about the change.
              priority: medium
              frontmatter:
                mode: building
                output_kind: knowledge
                success_criteria: "Two account-level tests concluded on a leading metric, each accompanied by at least three customer conversations."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "Count weekly active accounts on each in-scope flow"
                - "Switch assignment to account level for shared workspaces"
                - "Pick a leading metric that moves within four weeks"
                - "Schedule three customer calls alongside the next test"
            - name: First 90 days as an engineer on a growth team
              description: |-
                ## Purpose
                Engineers moving from feature teams to growth find the work faster, messier and more measured than they expect, with code that is meant to be thrown away. A 90-day plan covering the experimentation stack, the team's statistics basics, shipping a first variant and owning a test from brief to decision shortens the time to useful contribution.

                ## Milestones
                1. By day 30, the assignment, exposure and flag code understood and one QA checklist run.
                2. By day 60, a variant built and launched under the team's conventions.
                3. By day 90, one test owned from brief to decision.
                4. A list of improvements to the experiment stack proposed to the team.
              priority: medium
              deadlineOffsetDays: 90
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "One test owned from brief to recorded decision within 90 days, and a list of stack improvements shared with the team."
                cadence: phased
                effort_hours_estimate: "30"
              tasks:
                - "Read the assignment and flag code with its current owner"
                - "Run the QA checklist on the next launch alongside a teammate"
                - "Build and ship one variant before day 60"
                - "Own one test from brief to decision by day 90"
            - name: Growth testing without a data analyst
              description: |-
                ## Purpose
                Small teams often run experiments with an engineer or PM doing the analysis between other work, which is where mistakes creep in. A standard toolkit, one fixed analysis notebook, a calculator, a written checklist for every readout and a monthly peer review with someone outside the team, gets most of an analyst's rigour without hiring one.

                ## Milestones
                1. A single analysis notebook or sheet used for every readout.
                2. A readout checklist covering sample ratio, intervals, guardrails and pre-declared segments.
                3. A peer reviewer from another team agreed for monthly reviews.
                4. Three readouts completed with the toolkit and reviewed.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Three consecutive readouts produced from the shared notebook and checklist, each reviewed by someone outside the team."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Build one analysis notebook that every readout reuses"
                - "Write a readout checklist for the team"
                - "Ask a data person on another team to review readouts monthly"
                - "Send the month's readouts for peer review @recurring(monthly:10)"
            - name: Restarting a stalled experimentation programme
              description: |-
                ## Purpose
                Programmes stall for predictable reasons: a run of flat results, the analyst leaving, a platform migration, or leaders losing patience. Inheriting one means first finding out what was learned, what was left half-finished and what broke trust, then relaunching with a small, visible win and fixed rhythms.

                ## Milestones
                1. Past tests, briefs and dashboards gathered and their state recorded.
                2. Interviews held with three people who ran or relied on the old programme.
                3. Half-finished tests concluded, cleaned up or closed.
                4. A relaunch plan with one quick test and the weekly and monthly rhythms restored.
              priority: low
              deadlineOffsetDays: 120
              frontmatter:
                mode: research
                output_kind: artifact
                success_criteria: "A relaunch plan written, every half-finished test closed out, and one new test launched within four months."
                cadence: phased
                effort_hours_estimate: "16"
              tasks:
                - "Gather every past brief, dashboard and readout you can find"
                - "Ask the agent to summarise the old tests into a single list"
                - "Interview three people who ran or used the old programme"
                - "Close or finish every half-finished test"
            - name: Testing through a redesign or replatform
              description: |-
                ## Purpose
                Big redesigns and platform migrations usually ship without a test because they are too large to split, then get blamed or credited for every metric change that follows. Setting a measurement plan beforehand, with a holdback group where possible, pre-registered metrics and a freeze on other tests in affected flows, makes the impact knowable.

                ## Milestones
                1. Affected flows and metrics listed before the redesign ships.
                2. A holdback group on the old experience agreed for at least four weeks, or the reason it is impossible recorded.
                3. Other experiments on affected flows paused for the measurement window.
                4. A readout comparing the redesign against holdback or baseline, with caveats.
              priority: low
              deadlineOffsetDays: 180
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A pre-registered measurement plan agreed before launch and a readout of the redesign's impact delivered after the window closes."
                cadence: phased
                effort_hours_estimate: "12"
              tasks:
                - "List the flows and metrics the redesign will affect"
                - "Ask engineering whether a holdback on the old version is feasible"
                - "Pause other experiments on affected flows for the window"
                - "Write the redesign readout with its caveats"
            - name: Long-term holdout for cumulative impact
              description: |-
                ## Purpose
                Individual wins rarely add up as neatly as their estimates suggest, because effects overlap, fade or cancel. Keeping a small group of users, such as 2 to 5 percent, on the experience from six months ago, and comparing them with everyone else each quarter, measures what the programme has really added.

                ## Milestones
                1. A holdout share agreed with product and finance leads, with the cost of withholding estimated.
                2. The holdout group configured and excluded from newly shipped wins.
                3. A quarterly comparison of key metrics between the holdout and everyone else.
                4. The holdout refreshed on an agreed schedule.

                ## Notes
                Holdouts cost real revenue and complicate support. Keep them small and agree in advance when each one ends.
              priority: low
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A holdout of agreed size running for at least two quarters, with a written quarterly comparison against all other users."
                cadence: rolling
              tasks:
                - "Estimate the revenue cost of a holdout at two sizes"
                - "Agree the holdout share and refresh date with leadership"
                - "Configure the holdout to exclude newly shipped wins"
                - "Compare the holdout with all other users @recurring(quarterly)"
            - name: Variance reduction with pre-experiment data
              description: |-
                ## Purpose
                Using each user's behaviour before the test as a covariate, the approach often called CUPED, can considerably shrink the sample a test needs for metrics with stable user habits. For teams with limited traffic it is the cheapest way to run more tests, but it must be set up carefully to avoid bias from data collected after assignment.

                ## Milestones
                1. Metrics with strong correlation between the pre-period and test period identified.
                2. The adjusted analysis implemented and checked against the unadjusted one on three past tests.
                3. The variance reduction achieved recorded for each metric.
                4. The adjusted method adopted in the analysis notebook where it helps.

                ## Notes
                Only use data from before assignment. Covariates measured after the test starts can carry the treatment effect and bias the result.
              priority: low
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "An adjusted analysis validated on three past tests, with the reduction in interval width recorded for each metric."
                cadence: phased
                effort_hours_estimate: "16"
              tasks:
                - "Find metrics where last month's value predicts this month's"
                - "Implement the adjusted analysis in the team notebook"
                - "Compare adjusted and unadjusted results on three past tests"
                - "Record the reduction in interval width for each metric"
            - name: Interference and cluster tests in sharing features
              description: |-
                ## Purpose
                Sharing, invites and collaboration break the basic assumption that one user's variant does not affect another's. When a treated user invites a control user, effects leak between groups and estimates shrink or even flip; randomising by team, workspace or network cluster restores a fair comparison at the cost of a larger sample.

                ## Milestones
                1. Flows where users in different variants interact identified.
                2. Leakage between groups measured on one past sharing test.
                3. A cluster unit chosen, such as workspace or team.
                4. One sharing test run with cluster randomisation and compared with a user-level version.
              priority: low
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "One sharing test run with cluster randomisation, with its estimate compared against a user-level design in a written note."
                cadence: phased
                effort_hours_estimate: "16"
              tasks:
                - "List flows where users in different variants can interact"
                - "Measure cross-variant invites on one past sharing test"
                - "Choose workspace or team as the cluster unit"
                - "Estimate the larger sample a cluster design needs"
            - name: Novelty effects and long-run follow-up readings
              description: |-
                ## Purpose
                Some variants win because they are new and fade within weeks; others lose at first because users must relearn a flow, then win later. Re-reading key winners at 30 and 90 days, and splitting effects by user tenure, shows which wins are durable before they are counted in the scorecard.

                ## Milestones
                1. The three largest wins of the last six months chosen for follow-up.
                2. Each re-measured at 30 and 90 days after full release.
                3. Effects split between new and existing users.
                4. The scorecard corrected where a win faded.
              priority: low
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "Three major wins re-measured at 30 and 90 days, with the scorecard corrected for any that faded."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Pick the three largest wins of the last six months"
                - "Re-measure each at 30 and 90 days after full release"
                - "Split each effect between new and existing users"
                - "Correct the scorecard where a win faded"
---

# Product Growth Experiments

Product growth experiments is the discipline of testing changes to sign-up, onboarding, sharing and upgrade flows one at a time, and learning from every result, including the flat ones. It is written for product teams and the engineers who build and ship the variants, and runs from foundations (a charter, a funnel baseline, trustworthy assignment and metrics, a platform and a scored backlog) through the weekly and monthly machinery, the statistics skills that keep readouts honest, the flow experiments themselves, launch events, situations such as low traffic or no analyst, and specialist work on holdouts, variance reduction and interference.

The rhythms are a weekly stand-up and collision check, twice-weekly health checks on live tests, backlog scoring twice a month, a monthly readout, log, library and scorecard, a quarterly retrospective and holdout reading, and a yearly programme review. The Purchase decision, Product spec, Operational checklist, Metrics log, Meeting notes and Risk register templates pair with the projects that name them. Installing adds all 50 projects as active, so archive the ones that are not for you yet.
