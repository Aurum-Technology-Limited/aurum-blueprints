---
id: strategy-leadership.leadership-pipeline-development
name: Leadership Pipeline Development
description: "A leadership bench you can see and grow: critical roles, a capability framework, talent reviews and calibration, stretch roles, mentoring and cohort programmes that turn promising people into ready leaders."
category: business
version: 1.0.0
tags: [strategy-leadership, leadership-pipeline-development, manager, enterprise, talent-review, high-potential, mentoring, stretch-assignments]
author: Aurum Technology
starter_structure:
  templates:
    - skills-matrix
    - development-plan
    - one-on-one
    - training-program
    - vendor
    - risk-register
  pillars:
    - name: Strategy & Leadership
      emoji: "♟️"
      description: "Setting direction and leading people toward it: strategy and planning cycles, objectives and key results, the executive team, decision-making, culture, change programmes and the board."
      pillarFrontmatter:
        review_cadence: quarterly
      areas:
        - name: Leadership Pipeline Development
          description: "Identifying and developing future leaders across the organisation, with stretch roles, mentoring and structured development."
          projects:
            - name: Leadership pipeline current-state audit
              description: |-
                ## Purpose
                Before designing anything, find out where future leaders actually come from today: how many leadership vacancies were filled internally last year, how long they stayed open, and how many new managers failed within eighteen months. A two-week audit built from HR data and a dozen interviews replaces impressions with numbers and shows which level of the pipeline leaks most.

                ## Milestones
                1. Internal versus external fill rates for every leadership vacancy in the last two years, split by level.
                2. Time to fill and first-eighteen-month exit or demotion rate for new leaders recorded.
                3. Twelve interviews with line managers and recent promotees summarised into five recurring themes.
                4. A one-page audit naming the two levels where the pipeline is weakest.

                ## Notes
                Ask for the data by level, not as a company average. A healthy overall internal fill rate often hides a first-line level that is filled well and a senior manager level that is almost always hired in.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A one-page audit with internal fill rates, time to fill and new leader failure rates by level, shared with the executive sponsor."
                cadence: one-shot
                effort_hours_estimate: "14"
              tasks:
                - "Request two years of leadership vacancy and fill data from HR, split by level"
                - "Calculate internal fill rate and average time to fill for each level"
                - "Interview twelve line managers and recent promotees about how leaders are found"
                - "Write the one-page audit naming the two weakest levels"
            - name: Mapping the critical leadership roles
              description: |-
                ## Purpose
                Not every management role deserves the same pipeline effort. Identifying the thirty or so roles below the executive team where a vacancy would hurt revenue, safety, customers or a key capability, and where outside hires rarely succeed, tells you where to focus scarce development money first.

                ## Milestones
                1. Every leadership role below the executive team listed with its level and headcount led.
                2. Each role scored on business impact, difficulty to fill externally and time a vacancy can safely last.
                3. A ranked list of critical roles agreed by the executive sponsor.
                4. Critical roles flagged in the HR system so later reviews can filter on them.

                ## Notes
                Critical is about the role, not the person in it. Keep the scoring separate from any view of the current incumbent, or the list turns into a ranking of favourites.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A ranked list of critical leadership roles with impact and fill-difficulty scores, approved by the executive sponsor and flagged in the HR system."
                cadence: one-shot
                effort_hours_estimate: "10"
              tasks:
                - "Export every people-leader role below the executive team from the HR system"
                - "Agree three scoring criteria with the executive sponsor"
                - "Score each role with two senior leaders in a ninety-minute session"
                - "Flag the agreed critical roles in the HR system"
            - name: Leadership capability framework by career level
              description: |-
                ## Purpose
                Promotion into management usually fails because the new role needs different skills and values, not more of the old ones: a team leader must stop doing the work, a manager of managers must stop managing tasks. A framework describing what good leadership looks like at four levels, in observable behaviours, gives every talent conversation a shared language.

                ## Milestones
                1. Four leadership levels defined, from leading self to leading a function or business.
                2. For each level, six to eight observable behaviours and the habits the person must let go of.
                3. The draft tested in two workshops with leaders from different functions.
                4. The final framework published in a skills matrix that reviews and development plans refer to.

                ## Notes
                Start from the **Skills matrix** template. Keep it short enough to fit on two pages; a forty-competency dictionary is read once and never used again.
              priority: high
              deadlineOffsetDays: 60
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A two-page framework with behaviours for four leadership levels, tested in two workshops and published as the reference for talent reviews."
                cadence: phased
                effort_hours_estimate: "24"
              tasks:
                - "Collect any existing competency models and leadership values documents"
                - "Draft behaviours and letting-go habits for each of the four levels"
                - "Run two test workshops with leaders from different functions"
                - "Publish the final framework as a skills matrix"
            - name: Agreeing what potential means here
              description: |-
                ## Purpose
                Talent reviews collapse when one director means strong performer, another means ambitious, and a third means reminds me of myself. Agreeing a short written definition of leadership potential, with three or four indicators such as learning agility, drive and judgement in ambiguity, is the decision that makes every later rating comparable.

                ## Milestones
                1. Three published definitions of potential compared and their trade-offs summarised.
                2. A one-paragraph definition and three or four indicators agreed by the leadership team.
                3. A rating scale with behavioural anchors for each indicator.
                4. Performance and potential confirmed as separate ratings in the review form.

                ## Notes
                High performance in the current job is necessary but weak evidence of potential. Most organisations that skip this step end up promoting their best specialists into roles they do not want.
              priority: high
              deadlineOffsetDays: 45
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A written definition of leadership potential with anchored indicators, approved by the leadership team and built into the talent review form."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Collect three published definitions of leadership potential"
                - "Summarise how each one differs from current performance"
                - "Facilitate a one-hour leadership team discussion to choose the indicators"
                - "Write behavioural anchors for each indicator on a four-point scale"
            - name: Pipeline sponsor and governance group
              description: |-
                ## Purpose
                Leadership development owned only by HR becomes a training calendar. Naming an executive sponsor and a small talent council of business leaders, with written decision rights over nominations, programme places and cross-unit moves, gives the pipeline authority and someone to answer for it.

                ## Milestones
                1. An executive sponsor named who chairs the talent council.
                2. Five to seven council members drawn from the main business units and functions.
                3. A one-page terms of reference covering decisions, meeting rhythm and quorum.
                4. First council meeting held with the audit and critical role list on the agenda.
              priority: medium
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A talent council with a named sponsor and written terms of reference has held its first meeting and recorded its decisions."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Ask the chief executive or chief people officer to name a pipeline sponsor"
                - "Draft a one-page terms of reference for the talent council"
                - "Invite council members from each major business unit"
                - "Run the first council meeting and record its decisions"
            - name: Talent data fields in the HR system
              description: |-
                ## Purpose
                Spreadsheets passed between directors before each review go stale and leak. Adding a small set of fields to the HR system, such as potential rating, readiness for promotion, mobility, career aspiration and flight risk, lets the organisation see its pipeline at any time and keeps sensitive ratings under proper access control.

                ## Milestones
                1. No more than eight talent fields agreed, each with defined values.
                2. Access rules set so ratings are visible only to the employee's leadership line and HR partners.
                3. Fields built and tested in the HR system with a pilot business unit.
                4. Last year's review spreadsheets migrated and then deleted.

                ## Notes
                Check data protection rules with your privacy or legal team before storing potential ratings or flight risk, and decide in advance what employees can see if they request their own data.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Eight or fewer talent fields live in the HR system with access rules agreed with the privacy team, and old review spreadsheets removed."
                cadence: one-shot
                effort_hours_estimate: "16"
              tasks:
                - "List the talent fields the review will need and cut them to eight"
                - "Agree access rules for the fields with the privacy or legal team"
                - "Ask the HR systems team to build and test the fields with one business unit"
                - "Check field completeness for critical role holders @recurring(quarterly)"
            - name: Bench strength baseline for critical roles
              description: |-
                ## Purpose
                Bench strength is the simplest question a board can ask about leadership: for each critical role, who could step in now, who in one to two years, and who in three to five? Recording the answer once, with names and honest readiness levels, gives the number every later improvement is measured against.

                ## Milestones
                1. For each critical role, named candidates recorded as ready now, ready in one to two years or ready in three to five.
                2. Roles with no ready-now or ready-soon candidate flagged as uncovered.
                3. A bench strength ratio calculated for the whole set of critical roles.
                4. The baseline presented to the talent council with the five most exposed roles named.

                ## Notes
                A person listed as successor for four roles is one successor, not four. Count unique names when you calculate coverage.
              priority: high
              deadlineOffsetDays: 45
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A bench strength baseline with readiness levels for every critical role and a single coverage ratio, presented to the talent council."
                cadence: one-shot
                effort_hours_estimate: "12"
              tasks:
                - "Send each critical role's line leader a short form asking for named successors"
                - "Challenge any readiness rating that lacks a concrete example"
                - "Calculate coverage using unique successor names"
                - "Present the five most exposed roles to the talent council"
            - name: Business case and budget for leadership development
              description: |-
                ## Purpose
                Pipeline budgets get cut first in a bad quarter unless they are tied to costs the finance director already recognises: executive search fees, vacancy time in critical roles and the cost of a failed external hire. A costed case comparing current spend with those avoidable costs protects the programme through the next downturn.

                ## Milestones
                1. Last year's search fees, interim manager costs and failed hire costs for leadership roles totalled.
                2. Current leadership development spend gathered across all business units.
                3. A three-year budget for the pipeline with a stated target internal fill rate.
                4. The case approved by finance and the executive sponsor.
              priority: medium
              deadlineOffsetDays: 60
              frontmatter:
                mode: research
                output_kind: deliverable
                success_criteria: "A three-year costed pipeline budget, linked to search fees and vacancy costs, approved by finance and the executive sponsor."
                cadence: one-shot
                effort_hours_estimate: "10"
              tasks:
                - "Ask finance for last year's leadership search and interim management costs"
                - "Collect leadership training spend from every business unit"
                - "Draft a three-year budget tied to a target internal fill rate"
                - "Walk the finance director through the case before the budget round"
            - name: Career conversation guide for line managers
              description: |-
                ## Purpose
                Most emerging leaders first learn they are seen as future managers, or not, from a hurried chat at appraisal time. A short guide that helps line managers ask about aspirations, mobility and what the person wants to learn, and record the answers, makes career conversations a normal part of the year instead of a reward for the vocal.

                ## Milestones
                1. A two-page guide with eight questions and a simple record format.
                2. Advice included on what not to promise about promotion or timing.
                3. Guide trialled by ten managers and revised from their feedback.
                4. Every people manager sent the guide with a short briefing.

                ## Notes
                The hardest conversation is with the solid performer who wants to lead and is not yet seen as ready. Give managers words for that one specifically.
              priority: medium
              deadlineOffsetDays: 45
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A tested two-page career conversation guide has been sent to every people manager with a briefing."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Ask the agent to draft eight career conversation questions and a record format"
                - "Add guidance on avoiding promises about promotion timing"
                - "Trial the guide with ten managers and collect their comments"
                - "Brief all people managers on the final guide"
            - name: Annual leadership talent review cycle
              description: |-
                ## Purpose
                One yearly review, run the same way in every business unit, is the backbone of the pipeline: managers prepare evidence, business leaders discuss each person in a structured meeting, and decisions about development, moves and programme places follow. Without a fixed cycle, reviews drift into whenever a vacancy forces one.

                ## Milestones
                1. A review calendar set with preparation, unit reviews, calibration and council sign-off dates.
                2. Pre-work pack issued to managers with the framework and potential definition.
                3. Every business unit review held and outcomes entered in the HR system.
                4. Agreed development actions sent to each line manager within two weeks of the review.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every business unit completes its talent review each year, with outcomes recorded and development actions issued within two weeks."
                cadence: cyclic
              tasks:
                - "Set this year's talent review calendar with the talent council"
                - "Issue the pre-work pack to all people managers"
                - "Launch the annual talent review cycle @recurring(yearly)"
                - "Check outcome entry and development action follow-up by unit @recurring(quarterly)"
            - name: Calibration sessions for potential ratings
              description: |-
                ## Purpose
                Left alone, some directors rate half their team as high potential and others rate nobody. Calibration sessions, where leaders explain ratings to peers using evidence, pull the scale into line across units and surface people nobody outside their own team has heard of.

                ## Milestones
                1. A calibration agenda and evidence standard agreed before the first session.
                2. Every high-potential and not-yet-ready rating discussed against the definition.
                3. The final distribution of ratings by unit compared and outliers explained.
                4. Changes to ratings recorded with a reason.

                ## Notes
                Ban the phrase gut feel from the room. Ask for one recent example of each indicator, and park any discussion that turns on personality rather than behaviour.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Each year's potential ratings are calibrated across units in facilitated sessions, with every change recorded with a reason."
                cadence: cyclic
              tasks:
                - "Write a one-page evidence standard for calibration discussions"
                - "Book calibration sessions for each group of business units"
                - "Compare the distribution of ratings across units after each session"
                - "Run the cross-unit calibration round after unit reviews @recurring(yearly)"
            - name: Quarterly bench strength refresh
              description: |-
                ## Purpose
                Successor lists go out of date the moment someone is promoted, leaves or turns down a move. A short quarterly refresh of the critical role bench keeps coverage figures honest and catches the role that quietly lost its only ready-soon candidate.

                ## Milestones
                1. Critical role successor lists checked against joiners, leavers and moves each quarter.
                2. Coverage ratio recalculated and compared with the baseline.
                3. Newly uncovered roles raised with the talent council within a month.
                4. A rolling log of quarterly coverage figures kept for the annual report.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Bench coverage for critical roles is recalculated every quarter and any newly uncovered role is raised with the talent council within a month."
                cadence: rolling
              tasks:
                - "Pull joiners, leavers and moves for critical role successors from HR"
                - "Refresh critical role successor lists and coverage ratio @recurring(quarterly)"
                - "Email the talent council about any role that lost its last ready-soon successor"
                - "Add the quarter's coverage figure to the rolling log @recurring(quarterly)"
            - name: Development plans for the high-potential pool
              description: |-
                ## Purpose
                Labelling someone high potential with no plan attached breeds cynicism within a year. Each person in the pool should have a short written plan, agreed with their manager, with one stretch experience, one relationship such as a mentor or sponsor, and one piece of learning, each linked to a gap in the capability framework.

                ## Milestones
                1. Every person in the high-potential pool has a written plan agreed with their manager.
                2. Each plan names one experience, one relationship and one learning action.
                3. Every action linked to a specific behaviour in the capability framework.
                4. Plans reviewed and updated at least twice a year.

                ## Notes
                Start from the **Development plan** template. Plans heavy on courses and light on real experience are the most common failure.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every member of the high-potential pool has a current development plan with an experience, a relationship and a learning action, reviewed twice a year."
                cadence: rolling
              tasks:
                - "List everyone in the pool and whether they have a current plan"
                - "Send managers the plan format with one worked example"
                - "Check plan completeness across the pool @recurring(monthly:9)"
                - "Flag plans with no stretch experience to the person's manager"
            - name: Monthly development check-ins with emerging leaders
              description: |-
                ## Purpose
                Development happens between reviews, in the conversations where a manager asks what the stretch project taught someone and what they will try next. A monthly thirty-minute check-in kept separate from status updates keeps each emerging leader's plan alive and gives the manager evidence for the next review.

                ## Milestones
                1. A standing monthly thirty-minute development slot booked with each emerging leader.
                2. A simple note kept of what was tried, learned and next.
                3. Plan actions updated after every check-in.
                4. Evidence from the notes brought to the annual talent review.

                ## Notes
                Start from the **1:1** template and keep a separate section for development so it does not get swallowed by project updates.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Each emerging leader has a monthly development check-in with notes kept, and the notes are used as evidence at the talent review."
                cadence: rolling
              tasks:
                - "Book a recurring thirty-minute development slot with each emerging leader"
                - "Prepare three questions on the current stretch experience before each slot"
                - "Hold the development check-in and update the plan @recurring(monthly:14)"
                - "Move any action stalled for two months back to the person's manager"
            - name: Stretch assignment matching
              description: |-
                ## Purpose
                The most powerful development is a real role or project slightly beyond someone's experience, yet most stretch opportunities are handed to whoever the sponsor already knows. A simple monthly round where leaders post short-term assignments and the talent team matches them to people whose plans need that experience spreads opportunity and builds evidence of readiness.

                ## Milestones
                1. A standing list of stretch assignments with scope, length and the capability each builds.
                2. A monthly matching round between posted assignments and development plans.
                3. At least half the high-potential pool on a stretch assignment within a year.
                4. A short debrief recorded at the end of each assignment.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A monthly matching round has placed at least half the high-potential pool on a debriefed stretch assignment within twelve months."
                cadence: rolling
              tasks:
                - "Ask each business unit leader to post two stretch assignments"
                - "Write a one-paragraph template for describing an assignment"
                - "Match open assignments to development plans @recurring(monthly:20)"
                - "Record a debrief with each person when an assignment ends"
            - name: Annual mentoring programme cycle
              description: |-
                ## Purpose
                Mentoring works when pairs are matched for a reason, meet regularly and know when the arrangement ends. Running mentoring as a yearly cycle, from applications and matching to a closing review, keeps it from fading into a list of pairs who met twice.

                ## Milestones
                1. A pool of trained mentors from at least two levels above the mentees.
                2. Pairs matched on a stated development goal rather than convenience.
                3. A light midpoint check with every pair.
                4. A closing survey and a decision on each pair: end, extend or rematch.

                ## Notes
                Cross-functional pairs usually teach more than pairs inside one reporting line, and they avoid the mentor being the mentee's future boss.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Each year's mentoring cohort is matched on stated goals, checked at midpoint and closed with a survey and a decision for every pair."
                cadence: cyclic
              tasks:
                - "Open applications for mentors and mentees @recurring(yearly)"
                - "Run a one-hour mentor briefing on goals and boundaries"
                - "Match pairs against each mentee's stated development goal"
                - "Send every pair a midpoint check-in form @recurring(quarterly)"
            - name: Pipeline health dashboard
              description: |-
                ## Purpose
                Five numbers tell you whether the pipeline is getting stronger: internal fill rate for leadership roles, bench coverage for critical roles, high-potential retention, time to fill and new leader success at eighteen months. A dashboard updated monthly makes trends visible long before the annual report.

                ## Milestones
                1. Five pipeline measures defined with formulas and data sources.
                2. A dashboard built and filled with two years of history where available.
                3. A monthly update routine with a named owner.
                4. The dashboard reviewed at every talent council meeting.

                ## Notes
                Resist adding more measures. A sixth or seventh number rarely changes a decision and always takes time to collect.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A five-measure pipeline dashboard is updated each month by a named owner and reviewed at every talent council meeting."
                cadence: rolling
              tasks:
                - "Write formulas and data sources for the five pipeline measures"
                - "Build the dashboard with two years of history"
                - "Update the pipeline dashboard figures @recurring(monthly:5)"
                - "Add the dashboard as a standing talent council agenda item"
            - name: Internal-first review for leadership vacancies
              description: |-
                ## Purpose
                Hiring managers under pressure go straight to an agency, and the internal candidate who was told they were next hears about it from the announcement. A rule that every leadership vacancy is first checked against the succession list and talent pool, with a short written reason if no internal candidate is interviewed, keeps the pipeline meaningful.

                ## Milestones
                1. A written rule that leadership vacancies are checked against the talent pool before going external.
                2. A simple form recording internal candidates considered and why they were or were not interviewed.
                3. Monthly review of every leadership vacancy opened in the period.
                4. Internal fill rate for leadership roles reported against the target each quarter.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every leadership vacancy has a recorded internal-first check before external search, and the internal fill rate is reported quarterly."
                cadence: rolling
              tasks:
                - "Draft the internal-first rule and get the talent council to approve it"
                - "Build a short form for internal candidates considered"
                - "Review every newly opened leadership vacancy against the talent pool @recurring(monthly:16)"
                - "Tell internal candidates the outcome before any external announcement"
            - name: High-potential retention watch
              description: |-
                ## Purpose
                High potentials are the people recruiters call first, and losing two from a small pool can wipe out a year of development. A monthly look at the pool for warning signs, such as a stalled move, a manager change or a pay gap, and a named leader to act on each one, turns resignations from surprises into conversations held in time.

                ## Milestones
                1. Each person in the pool assigned a senior leader responsible for retention.
                2. A short list of warning signs agreed and checked monthly.
                3. A stay conversation held with anyone showing two or more signs.
                4. High-potential regretted exits tracked and their reasons recorded.

                ## Notes
                Ask the person what would make them stay before discussing a counter-offer. Many leave over a blocked next step rather than pay.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every high potential has a named retention owner, warning signs are checked monthly and regretted exits are recorded with reasons."
                cadence: rolling
              tasks:
                - "Assign a senior retention owner to each person in the pool"
                - "Agree five warning signs with HR business partners"
                - "Check the pool for warning signs and alert retention owners @recurring(monthly:26)"
                - "Record the reason for every regretted high-potential exit @recurring(quarterly)"
            - name: Assessing potential without bias
              description: |-
                ## Purpose
                Potential ratings are where similarity, visibility and confidence biases do most damage, because the evidence is thinner than for performance. Learning the common patterns, such as rating extroverts and people who work near senior leaders more highly, helps reviewers and facilitators catch them in the room.

                ## Milestones
                1. Six biases common in talent assessment understood with an example of each.
                2. Your own last set of ratings checked for patterns by gender, location and working pattern.
                3. Three counter-questions prepared for use in talent review discussions.
                4. One short briefing on bias delivered to a group of reviewers.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A personal ratings check by group has been completed and a bias briefing with three counter-questions delivered to reviewers."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "Read two research summaries on bias in talent assessment"
                - "Break your last ratings down by gender, location and working pattern"
                - "Write three counter-questions to ask when evidence is thin"
                - "Deliver a twenty-minute briefing to the next group of reviewers"
            - name: Facilitating a talent review meeting
              description: |-
                ## Purpose
                Whether a talent review works depends mostly on its facilitator: keeping time across forty names, stopping the loudest director from setting every rating and turning discussion into actions. Practising the role before the first live review saves the meeting that would otherwise overrun by two hours and decide nothing.

                ## Milestones
                1. A facilitation plan with timings per person and a rule for parking long debates.
                2. One practice review run with a friendly leadership team on real anonymised cases.
                3. A method for capturing actions live, visible to the room.
                4. Feedback from participants used to adjust the plan.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A practice talent review has been facilitated within its timings, with actions captured live and participant feedback recorded."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Observe or read notes from a talent review run by an experienced facilitator"
                - "Write a facilitation plan with timings and a parking rule"
                - "Run a practice review with anonymised cases"
                - "Ask three participants what to change before the live review"
            - name: Designing stretch assignments that build capability
              description: |-
                ## Purpose
                An assignment stretches someone only if it puts them in charge of something unfamiliar, with real stakes and people who do not report to them. Learning what separates a developmental assignment from simply more work lets leaders write assignments that prove readiness rather than exhaust people.

                ## Milestones
                1. The features of developmental assignments understood: unfamiliar scope, visible stakes, influence without authority.
                2. Five existing assignments assessed against those features.
                3. Two weak assignments rewritten to add real stretch.
                4. A one-page checklist for leaders posting assignments.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Five current assignments have been assessed, two rewritten and a one-page checklist issued to leaders who post assignments."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Read a summary of research on developmental job experiences"
                - "Score five current assignments against the three stretch features"
                - "Rewrite the two weakest assignments with their sponsors"
                - "Publish a one-page checklist for posting assignments"
            - name: Coaching skills for leaders who develop leaders
              description: |-
                ## Purpose
                Senior managers often develop people by telling them what they would do, which builds dependence rather than judgement. A short structured programme in coaching conversations, with practice on live cases, helps the leaders who own the pipeline grow people who can think for themselves.

                ## Milestones
                1. A six-session programme planned with practice between sessions.
                2. Participants able to run a twenty-minute coaching conversation using a simple model.
                3. Each participant coaching two emerging leaders during the programme.
                4. Programme feedback and observed practice reviewed at the end.

                ## Notes
                Start from the **Training program** template. Coaching is a skill learned by doing it badly with feedback, so protect the practice time.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A cohort of senior managers has completed six coaching sessions, each coaching two emerging leaders, with observed practice reviewed."
                cadence: phased
                effort_hours_estimate: "18"
              tasks:
                - "Choose a simple coaching conversation model for the programme"
                - "Plan six sessions with practice assignments between them"
                - "Pair each participant with two emerging leaders to coach"
                - "Observe one coaching conversation per participant and give feedback"
            - name: Writing development feedback people can act on
              description: |-
                ## Purpose
                Talent review outputs such as needs more strategic presence leave emerging leaders guessing. Learning to write feedback as a specific situation, the behaviour seen and the effect it had, with one suggested experiment, turns review outcomes into something a person can work on next week.

                ## Milestones
                1. A feedback format based on situation, behaviour and impact understood and practised.
                2. Ten past review comments rewritten into that format.
                3. A short guide with good and weak examples shared with reviewers.
                4. Review outcome letters checked for vague phrases before sending.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Ten past review comments rewritten, a guide with examples shared, and the next round of outcome letters checked for vague phrases."
                cadence: phased
                effort_hours_estimate: "5"
              tasks:
                - "Collect ten vague comments from last year's review outcomes"
                - "Rewrite each as situation, behaviour, impact and one experiment"
                - "Share a one-page guide with good and weak examples"
                - "Check outcome letters for vague phrases before they go out"
            - name: Sponsorship for under-represented talent
              description: |-
                ## Purpose
                Mentors give advice; sponsors spend their reputation to put someone forward for roles and visible work. Evidence suggests talented people from under-represented groups are often over-mentored and under-sponsored, so learning how sponsorship works and running a small sponsored cohort changes who gets the next opening.

                ## Milestones
                1. The difference between mentoring and sponsorship explained in a one-page brief.
                2. Ten senior sponsors recruited and briefed on what they commit to.
                3. Each sponsor paired with a high-potential protégé for twelve months.
                4. Roles, nominations and visible assignments gained by protégés recorded.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Ten sponsor pairs have run for twelve months, with the roles and nominations each protégé gained recorded."
                cadence: phased
                effort_hours_estimate: "14"
              tasks:
                - "Write a one-page brief on how sponsorship differs from mentoring"
                - "Recruit ten senior leaders willing to act as sponsors"
                - "Pair each sponsor with a protégé from the talent pool"
                - "Record each protégé's nominations and visible assignments at six months"
            - name: Interviewing internal leadership candidates fairly
              description: |-
                ## Purpose
                Internal candidates are often interviewed less rigorously than external ones, or judged on reputation rather than evidence, which leaves unsuccessful insiders feeling the result was fixed. Learning structured interviewing for internal moves, with the same questions and scoring for every candidate, protects both the decision and the relationship.

                ## Milestones
                1. Structured interview principles for internal candidates understood.
                2. A question bank tied to the capability framework for each leadership level.
                3. A scoring sheet used by every panel member independently before discussion.
                4. A feedback script for unsuccessful internal candidates.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A level-specific question bank, scoring sheet and feedback script for internal candidates are in use on the next leadership vacancy."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Read a guide to structured interviewing for internal promotions"
                - "Write six questions per leadership level tied to the framework"
                - "Build a scoring sheet panel members complete before discussion"
                - "Draft a feedback script for unsuccessful internal candidates"
            - name: Balancing experience, relationships and courses
              description: |-
                ## Purpose
                The familiar rule of thumb that most development comes from experience, some from other people and a little from courses is often quoted and rarely checked. Studying how development time is really spent in your pool, and what research says about the mix, helps rebalance spending away from classroom days that change little.

                ## Milestones
                1. The research and criticism behind common development ratios summarised.
                2. Current development activity in the pool split into experience, relationships and formal learning.
                3. A target mix agreed with the talent council.
                4. Next year's budget shifted towards the target mix.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A summary of the evidence and a measured split of current development activity have led to an agreed target mix in next year's budget."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Read two critiques of common development ratio rules"
                - "Categorise every action in current development plans"
                - "Present the measured split and a proposed target to the talent council"
                - "Adjust next year's development budget to the agreed mix"
            - name: Choosing in-house or external programme delivery
              description: |-
                ## Purpose
                First-line and mid-level leadership programmes can be built and taught internally, bought from a provider, or blended. The right answer depends on scale, the capability of your learning team and how specific the content must be to your strategy, and making the choice deliberately avoids an expensive off-the-shelf programme nobody connects to their real job.

                ## Milestones
                1. Requirements written: audience size, levels, outcomes and budget.
                2. Three delivery models costed over three years.
                3. Two or three providers asked for proposals against the same brief.
                4. A recommendation approved with the reasons recorded.

                ## Notes
                Start from the **Vendor** template for each provider. Ask providers for references from organisations of similar size and to describe a programme they ended because it did not work.
              priority: medium
              deadlineOffsetDays: 90
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A delivery model for the leadership programme chosen from three costed options and provider proposals, with reasons recorded."
                cadence: one-shot
                effort_hours_estimate: "20"
              tasks:
                - "Write a two-page requirements brief for the programme"
                - "Cost in-house, external and blended delivery over three years"
                - "Request proposals from three providers against the same brief"
                - "Take a recommendation with reasons to the talent council"
            - name: Leadership assessment centre design
              description: |-
                ## Purpose
                For promotions into manager of managers or functional head roles, interviews alone predict poorly. A one-day assessment centre with a business case exercise, a difficult conversation role play and a structured interview, scored by trained assessors against the framework, gives stronger evidence of readiness and a development report for everyone who attends.

                ## Milestones
                1. Three exercises designed, each mapped to framework behaviours for the target level.
                2. Six assessors trained and a scoring guide agreed.
                3. A pilot centre run with six candidates and results compared with manager views.
                4. Every pilot participant given a written development report.

                ## Notes
                If you use psychometric tests, use only those with published validity evidence and have a qualified user interpret them.
              priority: medium
              deadlineOffsetDays: 120
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A three-exercise assessment centre has been piloted with six candidates by trained assessors, and each participant has a development report."
                cadence: phased
                effort_hours_estimate: "40"
              tasks:
                - "Choose the leadership level the centre will assess"
                - "Design three exercises mapped to framework behaviours"
                - "Train six assessors on the scoring guide"
                - "Run the pilot and issue written development reports"
            - name: Closing diversity gaps at each pipeline level
              description: |-
                ## Purpose
                Representation often holds up at entry level and falls away at each promotion step, and the drop is usually concentrated at one or two transitions. Measuring representation and promotion rates by level, then finding where and why the drop happens, points to specific fixes rather than a general diversity statement.

                ## Milestones
                1. Representation by group at each leadership level for three years.
                2. Promotion and high-potential nomination rates by group compared.
                3. The two transitions with the largest drop identified and interviews held to understand them.
                4. Three targeted actions agreed with owners and dates.

                ## Notes
                Check with your privacy and legal teams which demographic data you may collect and how it must be reported, especially across countries.
              priority: high
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "Representation and promotion rates by group are measured for each level, and three targeted actions are agreed with owners for the two weakest transitions."
                cadence: phased
                effort_hours_estimate: "20"
              tasks:
                - "Confirm with the privacy team which demographic data may be analysed"
                - "Pull representation and promotion rates by level for three years"
                - "Interview people at the two transitions with the largest drop"
                - "Agree three targeted actions with owners at the talent council"
            - name: Deciding whether to tell people they are high potential
              description: |-
                ## Purpose
                Telling people they are in the talent pool can boost commitment, but it can also breed entitlement and demotivate the many who are not told. Making a deliberate, written choice about transparency, and how to explain it, prevents each manager inventing their own policy.

                ## Milestones
                1. Arguments for full, partial and no disclosure set out with examples from other organisations.
                2. Views gathered from ten managers and ten pool members.
                3. A written policy on what is shared, by whom and how.
                4. Talking points issued to managers for both included and not-included conversations.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A written disclosure policy for talent pool membership is approved, with talking points issued to every manager."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Summarise the case for full, partial and no disclosure"
                - "Ask ten managers and ten pool members how they would want it handled"
                - "Draft the disclosure policy for talent council approval"
                - "Write talking points for included and not-included conversations"
            - name: Rotational programme for future general managers
              description: |-
                ## Purpose
                General managers need to understand sales, operations and finance well enough to make trade-offs between them, and few careers provide that by accident. A structured rotation of three twelve-month placements across functions, with a sponsor and clear return roles, builds that breadth deliberately for a small group.

                ## Milestones
                1. Host roles identified in at least three functions, each with a real accountability.
                2. Selection criteria and a process for choosing four to six participants.
                3. A sponsor and a guaranteed landing role defined for each participant.
                4. A review at the end of each placement with evidence against the framework.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Four to six participants have started a three-placement rotation with named sponsors, host roles and defined landing roles."
                cadence: phased
                effort_hours_estimate: "30"
              tasks:
                - "Ask function heads to nominate host roles with real accountability"
                - "Write selection criteria for rotation participants"
                - "Agree a sponsor and landing role for each participant"
                - "Schedule end-of-placement reviews for each rotation"
            - name: Promotion criteria for first-line leader roles
              description: |-
                ## Purpose
                When the best technician or salesperson is promoted to team leader by default, the organisation loses a strong performer and gains a struggling manager. Rewriting promotion criteria for first-line roles to require evidence of leading others, such as running a project or onboarding new staff, raises the success rate of new leaders.

                ## Milestones
                1. Current promotion criteria and recent first-line promotions reviewed.
                2. New criteria drafted with two or three required pieces of leadership evidence.
                3. Criteria tested on ten past promotions to see who would have qualified.
                4. New criteria published and applied to the next promotion round.
              priority: medium
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "New first-line promotion criteria requiring leadership evidence are published and applied in the next promotion round."
                cadence: one-shot
                effort_hours_estimate: "10"
              tasks:
                - "Gather current promotion criteria for first-line leader roles"
                - "Draft two or three required pieces of leadership evidence"
                - "Test the draft against ten past first-line promotions"
                - "Publish the criteria before the next promotion round"
            - name: Retiring development activities that do not work
              description: |-
                ## Purpose
                Leadership development portfolios accumulate: a course from five years ago, a book club, an offsite that nobody remembers commissioning. Reviewing every activity against attendance, feedback and any evidence of changed behaviour or promotion frees budget and attention for what works.

                ## Milestones
                1. Every leadership development activity listed with cost, participants and owner.
                2. Each activity rated on evidence of behaviour change or career progression.
                3. A keep, change or stop decision for each, approved by the talent council.
                4. Freed budget reallocated to the highest-value activity.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "Every development activity has a recorded keep, change or stop decision, and freed budget is reallocated."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "List every leadership development activity with its cost and owner"
                - "Rate each activity on evidence of behaviour change or promotion"
                - "Take keep, change or stop recommendations to the talent council"
                - "Move freed budget to the top-rated activity"
            - name: Talent mobility rules across business units
              description: |-
                ## Purpose
                Strong managers hold on to their best people because losing them hurts this year's results, which keeps future leaders stuck in one unit. Clear rules on who owns talent, how long a manager can block a move and how a releasing unit is supported make cross-unit moves normal instead of political.

                ## Milestones
                1. Blocked or delayed moves from the last year collected with reasons.
                2. Draft rules covering talent ownership, release periods and backfill support.
                3. Rules agreed by business unit heads at the talent council.
                4. Moves of pool members across units tracked for a year.

                ## Notes
                Recognising managers who export talent, for example in their own objectives, works better than rules alone.
              priority: medium
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "Written talent mobility rules are agreed by all business unit heads and cross-unit moves of pool members are tracked for a year."
                cadence: one-shot
                effort_hours_estimate: "10"
              tasks:
                - "Collect examples of blocked or delayed internal moves from HR partners"
                - "Draft talent ownership, release period and backfill rules"
                - "Agree the rules with business unit heads"
                - "Add an export-of-talent measure to senior managers' objectives"
            - name: Launching the first emerging leaders cohort
              description: |-
                ## Purpose
                A first cohort sets the reputation of a programme for years: if nominations look political or the first session wastes a day, the second cohort will be hard to fill. Treating the launch as a dated event, with a fair nomination process, a sponsor kick-off and line managers briefed before day one, gives the programme a credible start.

                ## Milestones
                1. Nomination criteria published and nominations closed by a set date.
                2. Fifteen to twenty-five participants confirmed with their managers' agreement.
                3. Line managers briefed on their role before the first session.
                4. Kick-off held with the executive sponsor and each participant's development goal recorded.
              priority: high
              deadlineOffsetDays: 120
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "The first emerging leaders cohort has launched with a sponsor kick-off, briefed line managers and a recorded goal for every participant."
                cadence: one-shot
                effort_hours_estimate: "30"
              tasks:
                - "Publish nomination criteria and a closing date"
                - "Confirm participants and get each manager's written agreement"
                - "Run a one-hour briefing for participants' line managers"
                - "Hold the kick-off with the executive sponsor"
            - name: Cohort showcase of action learning projects
              description: |-
                ## Purpose
                Action learning projects, where cohort teams tackle a real business problem set by an executive, prove what participants can do and give senior leaders a rare look at them in action. A showcase where teams present recommendations to the problem owners, with a decision on each, turns the programme's end into visible evidence of readiness.

                ## Milestones
                1. Each cohort team's problem owner confirmed to attend the showcase.
                2. Teams given a format: ten minutes, one recommendation, the evidence and the ask.
                3. A decision recorded from each problem owner within a month.
                4. Observations on each participant passed to the next talent review.
              priority: medium
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "Every cohort team has presented to its problem owner, a decision is recorded for each recommendation and observations reach the talent review."
                cadence: one-shot
                effort_hours_estimate: "12"
              tasks:
                - "Confirm each problem owner's attendance at the showcase"
                - "Send teams the presentation format and timings"
                - "Collect a written decision from each problem owner"
                - "Pass observations on each participant to their talent review"
            - name: Annual pipeline report to the executive team
              description: |-
                ## Purpose
                Once a year the executive team should see the pipeline as clearly as it sees the sales forecast: coverage of critical roles, internal fill rate, diversity by level, retention of the pool and what the money bought. A short report with three asks keeps leadership development on the strategic agenda.

                ## Milestones
                1. Pipeline measures for the year compared with the baseline and targets.
                2. Three named success stories and three honest gaps.
                3. Three specific asks of the executive team.
                4. Decisions on the asks recorded and fed into next year's plan.

                ## Notes
                Lead with the critical roles that are still uncovered. Executive teams respond to named risks more than to programme statistics.
              priority: medium
              deadlineOffsetDays: 90
              frontmatter:
                mode: event
                output_kind: deliverable
                success_criteria: "A pipeline report with measures against baseline and three asks has been presented to the executive team and their decisions recorded."
                cadence: one-shot
                effort_hours_estimate: "12"
              tasks:
                - "Ask the agent to draft the report from the year's dashboard figures"
                - "Choose three success stories and three honest gaps"
                - "Write three specific asks of the executive team"
                - "Book the executive pipeline report slot @recurring(yearly)"
            - name: Talent review outcome conversations with every nominee
              description: |-
                ## Purpose
                A review that changes ratings but never tells people what was decided wastes most of its value. Making sure every person discussed hears their development priorities from their manager within a month, framed by the disclosure policy, turns the review into action and protects trust.

                ## Milestones
                1. Every person discussed in the review listed with their manager.
                2. Managers given a brief and agreed messages for each person.
                3. All outcome conversations held within thirty days of the review.
                4. Completion confirmed and any difficult conversations followed up by HR.
              priority: medium
              deadlineOffsetDays: 30
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "Every person discussed in the talent review has had an outcome conversation with their manager within thirty days, confirmed in writing."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "List every person discussed with their manager's name"
                - "Send each manager agreed messages and the disclosure talking points"
                - "Track conversations completed each week until all are done"
                - "Ask HR partners to follow up on difficult conversations"
            - name: First cohort one-year impact review
              description: |-
                ## Purpose
                Twelve months after the first cohort finishes is the right moment to ask whether anything changed: who was promoted, who left, how their teams' engagement moved and what their managers saw. An honest impact review decides whether the next cohort runs as designed, changes or stops.

                ## Milestones
                1. Promotion, retention and role change data for every participant compared with a similar non-participant group.
                2. Managers of participants asked for specific behaviour changes observed.
                3. Participants asked what they still use and what they forgot.
                4. A recommendation to keep, change or stop the programme approved.

                ## Notes
                Comparing with a similar group who did not attend matters. Nominated people were already likely to be promoted, so raw promotion rates overstate the effect.
              priority: medium
              deadlineOffsetDays: 400
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A one-year impact review comparing participants with a similar group has produced an approved keep, change or stop decision."
                cadence: one-shot
                effort_hours_estimate: "14"
              tasks:
                - "Choose a comparison group of similar non-participants"
                - "Pull promotion and retention data for both groups"
                - "Survey participants' managers on observed behaviour change"
                - "Present the keep, change or stop recommendation to the talent council"
            - name: Growing leaders fast in a scaling company
              description: |-
                ## Purpose
                When headcount doubles in eighteen months, people who were individual contributors last year are running teams of eight, and there is no time for a two-year programme. A compressed approach, with a short manager bootcamp, peer groups and a light talent review every six months, keeps leadership quality from falling behind growth.

                ## Milestones
                1. A forecast of leadership roles needed over the next eighteen months.
                2. A two-day bootcamp for every newly promoted manager within their first month.
                3. Peer learning groups of six new managers meeting fortnightly.
                4. A light talent review held every six months while growth continues.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Every manager promoted during the growth phase attends the bootcamp within a month and joins a peer group, with six-monthly light reviews held."
                cadence: phased
                effort_hours_estimate: "24"
              tasks:
                - "Forecast leadership roles needed from the headcount plan"
                - "Design a two-day bootcamp for newly promoted managers"
                - "Form peer learning groups of six new managers"
                - "Schedule light talent reviews every six months"
            - name: Leadership pipeline across a multinational group
              description: |-
                ## Purpose
                In a group operating in many countries, future leaders in smaller markets are often invisible to headquarters, and international assignments go to the same few nationalities. A group-wide pipeline with regional talent reviews feeding a group review, and international moves planned in advance, widens the pool and builds leaders who can run across borders.

                ## Milestones
                1. Regional talent reviews feeding a single group review with a common framework.
                2. Local high potentials in every market visible in group data.
                3. International assignment candidates identified two years ahead, with family and visa factors considered.
                4. Nationality and region mix of the group pool reported each year.

                ## Notes
                Ratings travel badly across cultures: modesty in one country reads as low ambition in another. Calibrate regionally before calibrating globally.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every region runs a talent review that feeds the group review, and the regional mix of the group pool is reported each year."
                cadence: cyclic
              tasks:
                - "Map which regions currently run talent reviews and how"
                - "Agree a common review format with regional HR leads"
                - "Identify international assignment candidates two years ahead"
                - "Report the regional and nationality mix of the group pool @recurring(yearly)"
            - name: Developing leaders where promotions are rare
              description: |-
                ## Purpose
                In flat organisations, small firms and stable public bodies, a manager role may open once every few years, so a promotion-based pipeline frustrates everyone. Building leadership through project leadership, acting-up cover, cross-organisation secondments and external roles such as trusteeships keeps capable people growing and staying.

                ## Milestones
                1. Every leadership opportunity short of promotion listed: projects, acting-up, secondments, committees.
                2. Acting-up cover for absences used deliberately as development.
                3. One secondment or external leadership role arranged for each person in the pool.
                4. Retention of the pool compared with before the change.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Each person in the talent pool has a non-promotion leadership opportunity in place, and pool retention is compared with the previous year."
                cadence: phased
                effort_hours_estimate: "12"
              tasks:
                - "List every leadership opportunity available short of promotion"
                - "Agree that acting-up cover will go to pool members first"
                - "Approach two partner organisations about secondments"
                - "Compare pool retention with the previous year"
            - name: Rebuilding the pipeline after a restructure
              description: |-
                ## Purpose
                Restructures and layoffs often remove whole layers of middle management, and the people who would have filled them next leave out of uncertainty. A focused rebuild within ninety days, with a fresh bench assessment, quick conversations with remaining high potentials and honest communication about future paths, prevents a leadership gap two years later.

                ## Milestones
                1. Critical roles and successor lists redone for the new structure.
                2. A conversation held with every remaining high potential within six weeks.
                3. New career paths through the changed structure described and shared.
                4. Pool retention reported to the talent council at three and six months.
              priority: medium
              deadlineOffsetDays: 90
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Within ninety days of a restructure, successor lists are redone and every remaining high potential has had a career conversation."
                cadence: phased
                effort_hours_estimate: "18"
              tasks:
                - "Redraw the critical role list for the new structure"
                - "Book a career conversation with every remaining high potential"
                - "Describe the new career paths through the changed structure"
                - "Report pool retention at three and six months"
            - name: Growing your own successor as a manager
              description: |-
                ## Purpose
                Managers who cannot be replaced cannot be promoted. Choosing one or two people in your team, handing them parts of your role in stages and getting them seen by your peers and boss, makes you movable and gives your team continuity when you go.

                ## Milestones
                1. One or two possible successors named and their readiness gaps listed.
                2. Three parts of your role delegated in stages over six months.
                3. Each successor given visible exposure to your boss and peers.
                4. Your successor named in the next talent review with evidence.
              priority: medium
              frontmatter:
                mode: service
                output_kind: habit
                success_criteria: "A named successor is covering three delegated parts of your role and is put forward with evidence at the next talent review."
                cadence: rolling
              tasks:
                - "Name one or two possible successors and their readiness gaps"
                - "Choose three parts of your role to delegate in stages"
                - "Let your successor chair one of your regular meetings"
                - "Review delegation progress with each successor @recurring(monthly:23)"
            - name: Technical experts moving into leadership
              description: |-
                ## Purpose
                Senior engineers, scientists and specialists are often pushed into management because it is the only way to progress, and many neither want it nor enjoy it. A clear choice between a technical leadership track and a people leadership track, with a low-risk trial of managing, keeps experts in the organisation and puts people who want to lead into leadership roles.

                ## Milestones
                1. A technical track with senior roles and pay comparable to management levels described.
                2. A trial period of people leadership offered with a no-penalty return option.
                3. Each technical high potential has chosen a track in a recorded conversation.
                4. Track choices reviewed a year later with each person.
              priority: low
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A technical track and a reversible leadership trial exist, and every technical high potential has a recorded track choice."
                cadence: phased
                effort_hours_estimate: "16"
              tasks:
                - "Map current senior technical roles against management levels"
                - "Draft a technical track with comparable seniority and pay"
                - "Offer a six-month leadership trial with a return option"
                - "Hold track choice conversations with technical high potentials"
            - name: Keeping part-time staff and returners in the pipeline
              description: |-
                ## Purpose
                People who work part time, care for family or return from parental or long-term leave often drop out of talent pools without anyone deciding they should. Checking who disappears from the pool and why, and adjusting nomination rules, stretch roles and programme timings, keeps their potential in the pipeline.

                ## Milestones
                1. Pool membership compared for full-time, part-time and returning staff.
                2. Nomination and programme rules checked for hidden full-time assumptions.
                3. Stretch assignments offered in part-time or job-share form.
                4. A return conversation built into the process after any long leave.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "Pool membership is compared by working pattern, rules are adjusted, and every returner has a pipeline conversation after leave."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Compare talent pool membership by working pattern and leave history"
                - "Check programme and nomination rules for full-time assumptions"
                - "Offer two stretch assignments in part-time or job-share form"
                - "Add a pipeline conversation to the return-from-leave process"
            - name: Testing whether potential ratings predict success
              description: |-
                ## Purpose
                After three or four review cycles, an organisation can check whether people rated high potential actually did better in bigger roles than those who were not. Validating ratings against later outcomes shows which reviewers and indicators predict well and which are noise, and is the strongest argument for or against the whole process.

                ## Milestones
                1. Past potential ratings linked to later promotions, performance and exits.
                2. Accuracy compared by indicator, business unit and reviewer group.
                3. Findings reviewed with a people analytics specialist.
                4. Changes to the definition or review method agreed from the findings.

                ## Notes
                Ratings partly cause their outcomes, because high potentials get more opportunities. Treat results as signals, not proof.
              priority: low
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "Three or more years of potential ratings are compared with later outcomes and changes to the method are agreed from the findings."
                cadence: phased
                effort_hours_estimate: "24"
              tasks:
                - "Extract three or more years of potential ratings from the HR system"
                - "Link each rating to later promotion, performance and exit data"
                - "Review the analysis with a people analytics specialist"
                - "Agree method changes at the talent council"
            - name: Leadership succession risk register
              description: |-
                ## Purpose
                Combining role criticality, bench coverage and the flight risk of incumbents and successors produces a ranked view of where a single resignation would hurt most. Keeping that view as a living risk register, reviewed with enterprise risk owners, puts leadership continuity alongside operational and financial risks.

                ## Milestones
                1. A risk score per critical role from criticality, coverage and flight risk.
                2. The top ten leadership risks each with a mitigation and owner.
                3. The register shared with the enterprise risk function.
                4. Scores refreshed after each quarterly bench update.

                ## Notes
                Start from the **Risk register** template. Keep named flight-risk assessments restricted to the talent council.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: artifact
                success_criteria: "A leadership risk register with the top ten risks, mitigations and owners is refreshed quarterly and shared with the enterprise risk function."
                cadence: rolling
              tasks:
                - "Agree a scoring method for criticality, coverage and flight risk"
                - "Score every critical role and rank the top ten"
                - "Assign a mitigation owner to each top ten risk"
                - "Refresh the leadership risk scores @recurring(quarterly)"
            - name: Senior leaders as internal programme faculty
              description: |-
                ## Purpose
                Emerging leaders learn more from a divisional director explaining a hard decision they made than from a generic case study, and teaching sharpens the teacher too. Building a faculty of senior leaders who each teach one session a year makes the programme specific to your organisation and gives participants visibility with the people who will promote them.

                ## Milestones
                1. Twelve senior leaders recruited to teach one session each year.
                2. A session format: a real decision, what they weighed and what they would change.
                3. Each faculty member given a short preparation briefing and feedback.
                4. Faculty teaching recognised in senior leaders' objectives.
              priority: low
              frontmatter:
                mode: service
                output_kind: deliverable
                success_criteria: "Twelve senior leaders each teach one session a year in the programme, with participant feedback returned to them."
                cadence: rolling
              tasks:
                - "Invite twelve senior leaders to teach one session each"
                - "Write a one-page session format based on a real decision"
                - "Run a thirty-minute preparation briefing for each faculty member"
                - "Share participant feedback with faculty members @recurring(quarterly)"
---

# Leadership Pipeline Development

This area is for heads of people, talent leads, divisional leaders and line managers who want the next generation of team leaders, managers and functional heads grown on purpose rather than discovered in a panic when someone resigns. It starts with foundations (a pipeline audit, critical roles, a capability framework, a shared view of potential and a bench baseline), moves to the operating machinery of talent reviews, calibration, development plans, stretch roles, mentoring and internal fills, then the skills of assessing, coaching and sponsoring, the decisions about programmes, providers and mobility, the dated work of cohorts and reports, situations for fast growth, multinationals, flat organisations and technical experts, and finally specialist work on validating ratings and modelling risk.

What repeats is a yearly talent review with quarterly bench refreshes, monthly development check-ins, stretch role matching, retention watch and internal fill reviews on different days, and a mentoring cycle that restarts each year. The Skills matrix, Development plan, 1:1, Training program, Vendor and Risk register templates pair with the projects that name them. Installing adds all 50 projects as active, so archive the ones that are not for you yet.
