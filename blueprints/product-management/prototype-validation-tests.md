---
id: product-management.prototype-validation-tests
name: Prototype Validation Tests
description: "Testing ideas before anyone writes production code: assumption maps and pass thresholds, clickable prototypes, fake doors, concierge and Wizard of Oz tests, a weekly session rhythm, and evidence strong enough to justify a build."
category: business
version: 1.0.0
tags: [product-management, prototype-validation-tests, team, founder, creative, usability-testing, fake-door, prototyping]
author: Aurum Technology
starter_structure:
  templates:
    - purchase-decision
    - metrics-log
    - feedback-themes
    - meeting-notes
    - operational-checklist
  pillars:
    - name: Product Management
      emoji: "🧩"
      description: "Deciding what to build and why: discovery and research, roadmaps and prioritisation, specs and launches, pricing and packaging, product analytics, and the feedback loops that keep a product honest."
      pillarFrontmatter:
        review_cadence: monthly
      areas:
        - name: Prototype Validation Tests
          description: "Testing clickable prototypes, fake doors and concierge versions with users to validate demand and usability before engineering builds anything."
          projects:
            - name: Assumption map ranked by risk and evidence
              description: |-
                ## Purpose
                Every idea rests on a stack of beliefs: that the problem is painful, that people will find the feature, that they will understand it, that they will pay. Writing those beliefs down and plotting each by how much the idea depends on it and how little evidence you have shows which one to test first, so the first prototype answers the question that could sink the whole plan.

                ## Milestones
                1. Every assumption behind the idea written as a single sentence that could be proved wrong.
                2. Each assumption tagged as desirability, usability, feasibility or viability.
                3. All assumptions plotted on a two-by-two of importance against existing evidence.
                4. The top three riskiest assumptions named and agreed by product, design and engineering.

                ## Notes
                Feasibility assumptions usually belong to engineering spikes, not user tests. Keep them on the map so they are not forgotten, but do not try to answer them with a prototype.
              priority: high
              deadlineOffsetDays: 14
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A dated assumption map lists every belief behind the idea, plotted by importance and evidence, with the three riskiest marked and agreed by the product trio."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "List every assumption the idea depends on in one shared document"
                - "Rewrite each assumption as a sentence a test could prove false"
                - "Plot the assumptions on an importance against evidence grid"
                - "Circle the three riskiest and confirm them with design and engineering @priority(high)"
            - name: Matching each assumption to a test method
              description: |-
                ## Purpose
                Different assumptions need different tests: a fake door says whether people want something, a clickable prototype says whether they can use it, and a concierge service says whether the outcome is worth anything to them. Picking the method per assumption, rather than defaulting to the same usability test every time, avoids months of polished prototypes that answer the wrong question.

                ## Milestones
                1. A one-page matrix pairing each risky assumption with the cheapest test that could settle it.
                2. Each test marked with its rough cost in days and the number of participants it needs.
                3. Tests that need production code flagged and pushed back until cheaper tests have run.
                4. The first two tests chosen and scheduled.

                ## Notes
                A useful rule: if you can test it without a prototype, do. A fake door or a concierge week often answers desirability faster than any screen design.
              priority: high
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A test method matrix covers each of the top risky assumptions, names the cheapest suitable test with its cost, and has the first two tests booked."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Write the top three assumptions at the head of a new matrix"
                - "Pair each with a fake door, prototype, concierge or Wizard of Oz test"
                - "Estimate days and participants for each test option"
                - "Book the first two tests into the team calendar"
            - name: Hypothesis cards with pass and fail thresholds
              description: |-
                ## Purpose
                Without a number agreed in advance, every test result gets read as encouraging. A hypothesis card that states the assumption, the test, the metric and the threshold (for example, at least 4 of 6 participants complete checkout unaided, or a 3 percent click rate on the fake door) means the team decides what success looks like before the data has a chance to flatter anyone.

                ## Milestones
                1. A card format with fields for assumption, test, metric, pass threshold, fail threshold and decision owner.
                2. A completed card for each of the first two scheduled tests.
                3. Thresholds signed off by the product lead before any session runs.
                4. Cards stored next to the results so each outcome can be read against its card.

                ## Notes
                Set a fail threshold as well as a pass one. The zone between them is where you plan a second, sharper test instead of arguing.
              priority: high
              deadlineOffsetDays: 14
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Every scheduled test has a hypothesis card with a numeric pass and fail threshold, signed off before its first session."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Draft a hypothesis card format with metric and threshold fields"
                - "Fill in a card for the first scheduled test"
                - "Agree pass and fail numbers with the product lead before sessions start"
                - "Store the signed cards in the same folder as test results"
            - name: Prototype fidelity choice for the first round
              description: |-
                ## Purpose
                Paper sketches, grey wireframes, polished clickable screens and coded prototypes each answer different questions at very different costs. Choosing fidelity on purpose stops a team spending two weeks on pixel-perfect screens to learn something a paper test would have shown in an afternoon, and stops the opposite mistake of testing visual trust with boxes and placeholder text.

                ## Milestones
                1. The question for the first round written in one sentence.
                2. A fidelity level chosen with a reason tied to that question.
                3. A list of what the prototype will fake, skip or hard-code.
                4. A build time box agreed, typically two to four days for a clickable prototype.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A short note records the first round's question, the chosen fidelity and why, what will be faked, and a time box agreed by the designer."
                cadence: one-shot
                effort_hours_estimate: "1"
              tasks:
                - "Write the single question the first round must answer"
                - "Compare paper, wireframe, clickable and coded options against that question"
                - "List the screens and states the prototype will fake or skip"
                - "Agree a build time box with whoever makes the prototype"
            - name: Participant screener for prototype sessions
              description: |-
                ## Purpose
                Five sessions with the wrong people produce confident findings that do not hold. A screener that checks the behaviour that matters (they ran payroll in the last month, they own a dog, they edit video weekly) rather than job titles or demographics, with a few trap questions to catch professional testers, makes every session count.

                ## Milestones
                1. Two to four behavioural criteria that define a qualifying participant.
                2. A screener of six to ten questions with at least one disqualifying trap answer.
                3. Quotas set so no single company, region or segment dominates the sample.
                4. The screener piloted on three people and adjusted.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A piloted screener with behavioural criteria, trap questions and quotas is in use for the first test round."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Write the recent behaviour a qualifying participant must have"
                - "Draft six to ten screener questions including one trap answer"
                - "Set quotas so no single segment fills more than half the slots"
                - "Pilot the screener on three people and fix confusing questions"
            - name: Consent, recording and data handling for test sessions
              description: |-
                ## Purpose
                Participants are handing over their screen, face, voice and sometimes their own data, and recordings tend to sit in shared drives for years. A plain consent form, a recording policy and a retention period agreed with whoever handles data protection in your organisation protects participants and keeps the team inside the privacy rules that apply where you work.

                ## Milestones
                1. A one-page consent form covering recording, who will see it, and the right to stop at any time.
                2. A retention period for recordings and notes agreed with your data protection contact.
                3. A storage location with access limited to the people who need it.
                4. A rule for blurring or avoiding real customer data shown on screen.

                ## Notes
                Privacy law differs by country. This project organises the paperwork; the rules themselves should come from your legal or data protection contact.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A consent form, a written retention period and an access-restricted recording folder are in place and used for every session."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Draft a plain-language consent form for recorded prototype sessions"
                - "Ask your data protection contact what retention period applies"
                - "Set up a recording folder that only the research group can open"
                - "Review consent wording and delete recordings past retention @recurring(yearly)"
            - name: Prototype testing tool stack
              description: |-
                ## Purpose
                Teams lose hours in every round to a prototype that will not share, a recording tool that drops audio, or notes scattered across four apps. Settling on one prototyping tool, one way of running remote sessions, one recording method and one note template, and checking they work together, makes the weekly rhythm cheap enough to keep.

                ## Milestones
                1. One prototyping tool chosen that can share a clickable link without an account.
                2. A remote session method that records screen, face and audio tested end to end.
                3. An unmoderated testing service shortlisted or chosen if the team will use one.
                4. A note template and folder structure in place for every round.

                ## Notes
                Start from the **Purchase decision** template when comparing paid testing platforms. Many teams need only a prototyping tool and a video call to begin.
              priority: medium
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A written tool stack covering prototyping, sessions, recording and notes has been tested in one dry-run session."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "List the tools the team already pays for that can prototype or record"
                - "Run a dry-run session with a colleague to test sharing and recording"
                - "Compare two unmoderated testing services on panel quality and price"
                - "Review tool subscriptions against how often each was used @recurring(yearly)"
            - name: Validation results log
              description: |-
                ## Purpose
                Six months from now someone will ask whether the team ever tested the onboarding idea, and the answer will be buried in a slide deck nobody can find. A single log with one row per test (hypothesis, method, date, participants, result against threshold, decision taken and a link to the evidence) turns scattered sessions into an institutional memory.

                ## Milestones
                1. A log with columns for hypothesis, method, date, sample, result, decision and evidence link.
                2. Every test from the last six months back-filled where records exist.
                3. Each new test added within a week of its last session.
                4. The log linked from the team's main product page.

                ## Notes
                Start from the **Metrics log** template and add the decision column yourself. A log without decisions is just a list of meetings.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A results log holds every test from the last six months, each with method, sample, result against threshold and decision recorded."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Create the results log from the metrics log template"
                - "Add columns for threshold, result and decision taken"
                - "Ask the agent to summarise past test decks into one row each"
                - "Link the log from the team's main product page"
            - name: Honesty rules for fake door and concierge tests
              description: |-
                ## Purpose
                Fake doors, smoke tests and concierge services all involve showing people something that is not quite what it seems, and done carelessly they burn trust, break consumer rules or take money for things that do not exist. Writing the team's rules once (what the reveal message says, how quickly it appears, that no card is charged without a clear refund, who signs off) lets people run these tests confidently and decently.

                ## Milestones
                1. A standard reveal message explaining the feature is not ready yet and thanking the person.
                2. A rule that no payment is taken in a test without clear terms and a full refund route.
                3. A cap on the share of users exposed to any fake door at once.
                4. A named approver for any test shown to existing paying customers.

                ## Notes
                Check consumer protection and advertising rules with your legal contact before any test that mentions a price or collects pre-orders.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A one-page set of honesty rules with a reveal message, payment rule, exposure cap and named approver is published to the team."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Draft the reveal message users see after clicking a fake door"
                - "Write the rule on payments, refunds and pre-order terms"
                - "Set the maximum share of users any fake door may reach"
                - "Name the approver for tests shown to paying customers"
            - name: Weekly prototype session rhythm
              description: |-
                ## Purpose
                Teams that test only when a big decision looms end up with a frantic recruiting scramble and three-week gaps between ideas and evidence. Holding three to five sessions on the same weekday every week, whether or not a major question is pending, means a prototype made on Monday can be in front of users by Wednesday.

                ## Milestones
                1. A fixed weekly testing slot in the team calendar, with three to five session times.
                2. Participants booked at least a week ahead from the panel or screener.
                3. A rule for what gets tested when nothing big is pending, such as the riskiest backlog item.
                4. Eight consecutive weeks of sessions held.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Eight consecutive weeks each have at least three prototype sessions held on the agreed testing day."
                cadence: rolling
              tasks:
                - "Choose a weekly testing day and block three session slots"
                - "Confirm next week's participants and send prototype links @recurring(weekly:tue)"
                - "Run the week's prototype sessions @recurring(weekly:wed)"
                - "Agree what to test in weeks with no pending decision"
            - name: Standing participant panel
              description: |-
                ## Purpose
                Recruiting from scratch for every round costs days and pushes teams toward whoever is easiest to reach. A standing panel of 40 to 100 opted-in users and prospects, tagged by segment and last-tested date, lets you fill a week of sessions in an afternoon and stops the same five friendly customers seeing every prototype.

                ## Milestones
                1. An opt-in route on the website, in the product or in support emails.
                2. A panel list with segment tags, contact consent and last-session date.
                3. At least 40 active panel members across your main segments.
                4. A rule that nobody is tested more than once in a set period, such as three months.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A panel of at least 40 consenting members, tagged by segment and last-session date, has supplied participants for three rounds."
                cadence: rolling
              tasks:
                - "Add a research opt-in link to the help centre or product settings"
                - "Build the panel list with segment, consent and last-session columns"
                - "Invite new opt-ins to top up thin segments @recurring(monthly:9)"
                - "Remove inactive members and refresh consent @recurring(quarterly)"
            - name: Same-day debrief after every session
              description: |-
                ## Purpose
                Memory of a session fades fast, and by Friday three observers will remember three different versions of Tuesday. A fifteen-minute debrief straight after each session, with every observer writing what they saw before discussing it, captures observations while they are fresh and separates what happened from what people think it means.

                ## Milestones
                1. A debrief template with columns for observation, quote, severity and interpretation.
                2. Debriefs held within an hour of each session for a full round.
                3. Observations clustered into themes at the end of each week.
                4. Each theme rated by how many participants it affected.

                ## Notes
                Start from the **Feedback themes** template for the weekly clustering. Count participants per theme rather than mentions, so one vocal person does not look like a trend.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every session in a four-week period has a written debrief, and each week ends with themes counted by participant."
                cadence: rolling
              tasks:
                - "Set up a debrief template that separates observation from interpretation"
                - "Book fifteen minutes straight after each session slot"
                - "Cluster the week's observations into themes with participant counts @recurring(weekly:thu)"
                - "Ask the agent to draft a highlight list from the debrief notes"
            - name: Monthly validation readout for stakeholders
              description: |-
                ## Purpose
                Stakeholders who never see test evidence keep asking for features the tests have already killed. A thirty-minute monthly readout covering what was tested, what passed, what failed and what changed in the plan, with two or three short clips, gives leadership, sales and support a reason to trust decisions made from prototypes.

                ## Milestones
                1. A standing monthly slot with leadership, sales and support invited.
                2. A one-page readout format: tests run, results against thresholds, decisions, next tests.
                3. Two or three video clips of under a minute each chosen per readout.
                4. Six readouts delivered with decisions recorded.

                ## Notes
                Start from the **Meeting notes** template to record what stakeholders decided or challenged. Lead with the failed tests: they show the process is honest.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Six consecutive monthly readouts delivered, each with results against thresholds and the decisions stakeholders agreed."
                cadence: rolling
              tasks:
                - "Book a recurring thirty-minute readout with leadership, sales and support"
                - "Ask the agent to draft the readout from the month's results log rows"
                - "Deliver the validation readout with two short clips @recurring(monthly:14)"
                - "Record the decisions and challenges raised in meeting notes"
            - name: Prototype version archive
              description: |-
                ## Purpose
                By the fourth round nobody can say which prototype version a participant saw, so findings get pinned to screens that no longer exist. Naming versions, freezing a copy before each round and linking it from the results log means any finding can be traced to exactly what was tested.

                ## Milestones
                1. A naming rule for versions, such as concept, round number and date.
                2. A frozen copy of each prototype saved before its round begins.
                3. Each results log row linked to the exact version tested.
                4. Superseded versions moved to an archive folder each month.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every test round in the last quarter links to a frozen, named prototype version that still opens."
                cadence: rolling
              tasks:
                - "Write the prototype version naming rule in the team handbook"
                - "Duplicate and freeze the prototype before each round begins"
                - "Move superseded prototype versions into the archive folder @recurring(monthly:22)"
            - name: Participant incentive tracking
              description: |-
                ## Purpose
                Incentives are small sums that add up quickly and go wrong in public: a participant not thanked for weeks, or a gift card sent twice. A simple tracker of who was promised what, when it was sent and what the month cost keeps participants happy and gives finance a clean record.

                ## Milestones
                1. A standard incentive rate per session type, agreed with whoever holds the budget.
                2. A tracker with participant, session date, amount promised and date sent.
                3. Every incentive sent within five working days of the session.
                4. A monthly spend total reconciled against the research budget.

                ## Notes
                Some organisations cannot pay certain participants, such as public sector staff or existing customers under some contracts. Check before you promise anything.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Three months of incentives tracked, each sent within five working days, with monthly totals matching the budget record."
                cadence: rolling
              tasks:
                - "Agree standard incentive amounts for moderated and unmoderated sessions"
                - "Create an incentive tracker with promised and sent dates"
                - "Reconcile last month's incentives against the research budget @recurring(monthly:3)"
            - name: Quarterly check of test calls against real outcomes
              description: |-
                ## Purpose
                Validation only earns its keep if the ideas that passed tests do better once built than the ones that skipped them. Looking back each quarter at features that shipped after a prototype test, and comparing their adoption with what the test predicted, shows which test types the team can trust and which keep producing false positives.

                ## Milestones
                1. A list of features shipped in the last two quarters with their pre-build test results.
                2. Post-launch adoption or conversion pulled for each one.
                3. Each test marked as predicted correctly, too optimistic or too pessimistic.
                4. One change to test methods or thresholds agreed from the pattern.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: knowledge
                success_criteria: "Four quarterly reviews completed, each comparing test predictions with post-launch results and recording one method change."
                cadence: cyclic
              tasks:
                - "List features shipped last quarter alongside their pre-build tests"
                - "Compare each test's prediction with post-launch adoption @recurring(quarterly)"
                - "Agree one change to methods or thresholds from what the review shows"
            - name: Observer rota for engineers and stakeholders
              description: |-
                ## Purpose
                Engineers and designers who watch a real person struggle with a prototype argue less and build better than those who only read the summary. A monthly rota that puts each engineer, designer, salesperson and leader behind at least one live session a quarter spreads first-hand evidence across the people who make the calls.

                ## Milestones
                1. A list of everyone who should observe at least one session a quarter.
                2. A rota assigning observers to specific session slots.
                3. Observer guidelines: stay muted, write observations, no leading questions in the chat.
                4. Every person on the list has observed at least once in the quarter.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Everyone on the observer list attends at least one live prototype session per quarter for two consecutive quarters."
                cadence: rolling
              tasks:
                - "List the engineers, designers and stakeholders who should observe"
                - "Write one page of observer guidelines for live sessions"
                - "Assign next month's observers to session slots @recurring(monthly:17)"
            - name: Open assumptions backlog
              description: |-
                ## Purpose
                New assumptions appear every time a roadmap item moves or a stakeholder has an idea, and without a home they are either forgotten or tested in the wrong order. A short ranked backlog of untested assumptions, reviewed every week, keeps the testing slot pointed at the riskiest open question rather than the loudest one.

                ## Milestones
                1. A backlog with one row per untested assumption and its importance score.
                2. Each roadmap item linked to the assumptions it depends on.
                3. The top three items always ready with a hypothesis card.
                4. Assumptions closed with a link to the test that settled them.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A ranked assumptions backlog is reviewed weekly for two months, with the top three always carrying a hypothesis card."
                cadence: rolling
              tasks:
                - "Move the assumption map's untested items into a ranked backlog"
                - "Link each roadmap item to the assumptions it depends on"
                - "Re-rank the assumptions backlog and pick the next test @recurring(weekly:mon)"
                - "Close settled assumptions with a link to their test result"
            - name: Writing neutral usability tasks
              description: |-
                ## Purpose
                Tasks that name the button ("click Export") or hint at the answer turn a usability test into a reading test. Learning to write scenario-based tasks with a realistic goal, no interface words and a clear end state is the single biggest improvement most teams can make to their prototype sessions.

                ## Milestones
                1. Five past tasks rewritten as scenarios with goals, not instructions.
                2. A checklist for task wording: no interface labels, one goal, a clear finish.
                3. A set of tasks for the next round reviewed by someone outside the team.
                4. One pilot session run to catch tasks that confuse or give away the answer.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "The next round's tasks pass a written wording checklist, have been reviewed by an outsider and were piloted once before real sessions."
                cadence: phased
                effort_hours_estimate: "5"
              tasks:
                - "Rewrite five old tasks as goal-based scenarios without interface words"
                - "Write a one-page task wording checklist"
                - "Ask someone outside the team to review the next round's tasks"
                - "Pilot the tasks with a colleague and remove any that give away the answer"
            - name: Moderating a think-aloud prototype session
              description: |-
                ## Purpose
                Good moderation is mostly restraint: staying quiet through a long pause, answering questions with questions and resisting the urge to rescue someone who is stuck. Practising think-aloud moderation with recorded sessions and feedback builds the habit of drawing out what participants expect, not just what they click.

                ## Milestones
                1. A moderator guide with intro script, warm-up, tasks and wrap-up questions.
                2. Three practice sessions run with colleagues and recorded.
                3. Each recording reviewed for leading questions, rescues and talking time.
                4. A real round moderated with talking time kept under a fifth of the session.

                ## Notes
                Useful neutral prompts: "What are you expecting to happen?", "What would you do next?", "Tell me more about that." Avoid "Did you find that easy?"
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Three recorded practice sessions reviewed, followed by a real round in which the moderator spoke for under a fifth of each session."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Write a moderator guide with intro script, tasks and wrap-up"
                - "Run three recorded practice sessions with colleagues"
                - "Review each recording for leading questions and rescues"
                - "Time your own talking share in the first real session"
            - name: Reading task success, time on task and SUS
              description: |-
                ## Purpose
                Usability findings carry more weight when they come with numbers, but small-sample metrics are easy to misread. Learning how to score task completion, record time on task, run a System Usability Scale questionnaire and report them honestly with sample sizes lets you compare rounds and concepts without overstating anything.

                ## Milestones
                1. A scoring rule for task success: complete, complete with help, or failed.
                2. Time on task recorded for each participant and task in one round.
                3. The SUS questionnaire run at the end of each session and scored correctly.
                4. A results table that shows every metric with its sample size.

                ## Notes
                SUS scores are only meaningful compared with something: a previous round, a competitor or the live product. A single score on its own says little.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "One round reported with task success, time on task and SUS for every participant, each metric shown with its sample size."
                cadence: phased
                effort_hours_estimate: "5"
              tasks:
                - "Define complete, assisted and failed for each task in the round"
                - "Add the SUS questionnaire to the end of the session script"
                - "Score the SUS results and record time on task in one table"
                - "Write the round's metrics with sample sizes beside every figure"
            - name: Sample sizes and confidence for small tests
              description: |-
                ## Purpose
                Five users will find most of the big usability problems in a flow, but five users cannot tell you whether 30 percent of the market wants a feature. Understanding which questions small qualitative samples answer, and when a fake door or survey needs hundreds of exposures and a confidence interval, keeps the team from overclaiming in both directions.

                ## Milestones
                1. A one-page note on when five to eight participants are enough and when they are not.
                2. A rough rule for fake door and smoke test exposure numbers before reading results.
                3. Confidence intervals calculated for one past conversion-style test.
                4. Sample size guidance added to the hypothesis card format.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A written sample size note exists, one past test has been re-reported with a confidence interval, and hypothesis cards now carry a sample size field."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Read a reputable source on usability sample sizes and note the limits"
                - "Calculate a confidence interval for one past fake door result"
                - "Write a one-page sample size note for the team"
                - "Add a minimum sample field to the hypothesis card"
            - name: Building your first clickable prototype
              description: |-
                ## Purpose
                Founders and product managers without a designer often wait weeks for screens when a rough clickable prototype would have been enough. Learning the basics of one prototyping tool (frames, links between screens, simple overlays and a shareable link) lets you put an idea in front of users within a couple of days.

                ## Milestones
                1. One prototyping tool's beginner tutorial completed.
                2. A five-screen flow built with working links between screens.
                3. An overlay or error state added to show what happens when something goes wrong.
                4. The prototype shared by link and opened successfully on a phone and a laptop.

                ## Notes
                Use a ready-made interface kit rather than drawing buttons. The aim is believable enough to test, not beautiful.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: artifact
                success_criteria: "A five-screen clickable prototype with one error state is shareable by link and has been opened on a phone and a laptop."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "Complete the beginner tutorial of one prototyping tool"
                - "Sketch the five screens of the flow on paper first"
                - "Build the screens from an interface kit and link them"
                - "Open the shared link on a phone and a laptop to check it works"
            - name: Running unmoderated remote prototype tests
              description: |-
                ## Purpose
                Unmoderated tests let 15 to 30 people try a prototype overnight without anyone scheduling a call, which is ideal for comparing designs or checking a single flow. They also fail quietly: unclear instructions, dead-end screens and low-effort participants can ruin a run, so the setup needs more care than a live session.

                ## Milestones
                1. Written instructions and tasks that work with no moderator to clarify them.
                2. A pilot run with three participants before the full launch.
                3. Quality rules for excluding low-effort sessions, set before results come in.
                4. A full run of at least 15 participants analysed against its hypothesis card.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "One unmoderated test of at least 15 participants completed after a three-person pilot, with exclusion rules written before launch."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Rewrite the tasks so they make sense with no moderator present"
                - "Pilot the unmoderated test with three participants"
                - "Write exclusion rules for rushed or off-task sessions before launch"
                - "Launch the full run and analyse it against the hypothesis card"
            - name: Telling polite interest from real demand
              description: |-
                ## Purpose
                People are kind in research sessions: they say they love the idea, they would definitely use it and they will tell their friends. Learning to separate compliments and hypotheticals from commitments (time spent, data handed over, a meeting booked, money put down) is what stops a team building something everyone praised and nobody used.

                ## Milestones
                1. A ladder of evidence from compliments up to payment, agreed by the team.
                2. Last month's session notes re-coded against the ladder.
                3. Each current hypothesis card updated with the rung of evidence it requires.
                4. Session scripts changed to end with a small, real ask.

                ## Notes
                A useful closing ask is something with a real cost: an introduction to a colleague, a calendar slot for a follow-up, a sample of their actual data.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "An evidence ladder is agreed, one month of notes has been re-coded against it, and every current session script ends with a concrete ask."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Draft an evidence ladder from compliment to payment"
                - "Re-code last month's session notes against the ladder"
                - "Add the required evidence rung to each open hypothesis card"
                - "Add a small real ask to the end of the session script"
            - name: Fake door test for a planned feature
              description: |-
                ## Purpose
                Adding a button, menu item or upgrade card for a feature that does not exist yet, and counting how many people click it, is one of the cheapest demand signals a live product can get. Run with a clear reveal message, a cap on exposure and a threshold set in advance, it can kill or confirm a roadmap item in two weeks.

                ## Milestones
                1. A hypothesis card with the target click rate and the minimum exposures needed.
                2. The fake door built behind a flag and shown to a capped share of users.
                3. The reveal message and a short follow-up question live for everyone who clicks.
                4. Results read only after the planned exposure count, and the decision recorded.

                ## Notes
                Measure clicks against people who saw the entry point, not all users. A link buried three menus deep will always look unpopular.
              priority: medium
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A fake door has reached its planned exposure count and the click rate has been compared with the pre-set threshold, with a go or stop recorded."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Write the hypothesis card with click rate threshold and exposure count"
                - "Ask engineering to place the fake door behind a feature flag"
                - "Add the reveal message and one follow-up question for clickers"
                - "Check fake door clicks and complaints every two days while it is live"
                - "Record the go or stop decision once the exposure count is reached"
            - name: Landing page smoke test for a new product
              description: |-
                ## Purpose
                For a product that does not exist yet, a landing page that describes it and asks for an email, a booked demo or a waitlist place measures whether the promise attracts anyone. Driving a modest, known amount of traffic to it from the right audience gives a sign-up rate you can compare against a threshold, rather than a hunch.

                ## Milestones
                1. A landing page stating the problem, the promised outcome and a single call to action.
                2. A traffic plan naming the audience, channel and budget for a fixed period.
                3. Visits, sign-ups and the source of each tracked from day one.
                4. A sample of sign-ups contacted to check they match the intended customer.

                ## Notes
                Write the page around the outcome the customer wants, not the feature list. Test two headlines if you can afford the traffic, but read results only after the planned visit count.
              priority: medium
              deadlineOffsetDays: 45
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A landing page has received its planned visits from the target audience, and its sign-up rate has been compared with the threshold on its hypothesis card."
                cadence: one-shot
                effort_hours_estimate: "12"
              tasks:
                - "Write the landing page headline around the customer's desired outcome"
                - "Set the traffic budget, channel and visit target for the test"
                - "Set up tracking for visits, sign-ups and traffic source"
                - "Call five sign-ups to check they fit the intended customer"
            - name: Concierge test with five customers
              description: |-
                ## Purpose
                Doing the job by hand for five real customers, with spreadsheets, email and phone calls instead of software, tests whether the outcome is valuable before anyone designs a screen. It also shows which steps customers care about and which they ignore, which is exactly what the eventual product spec needs.

                ## Milestones
                1. Five customers who agree to receive the service manually for a set period.
                2. A manual process written step by step with the time each step takes.
                3. The service delivered for the agreed period with a note after every interaction.
                4. Each customer asked whether they would continue, and at what price or effort.

                ## Notes
                Tell customers the service is manual. Concierge tests work because the value is real, not because the customer is fooled.
              priority: medium
              deadlineOffsetDays: 60
              frontmatter:
                mode: service
                output_kind: knowledge
                success_criteria: "Five customers received the service by hand for the agreed period, with time per step logged and a continue or stop answer from each."
                cadence: phased
                effort_hours_estimate: "30"
              tasks:
                - "Invite five target customers to try a hand-delivered version"
                - "Write the manual process step by step before the first delivery"
                - "Log the time each manual step takes for every customer"
                - "Ask each customer whether they would continue and on what terms"
            - name: Wizard of Oz test for an automated feature
              description: |-
                ## Purpose
                Automation is expensive to build and hard to change, so it pays to know whether people trust and use the result before writing it. In a Wizard of Oz test the participant sees what looks like an automated feature (a smart suggestion, an instant report, a matching service) while a person behind the scenes produces each response.

                ## Milestones
                1. A front end or prototype that looks automated to the participant.
                2. A wizard playbook with response rules and a target response time.
                3. At least eight participants run through the flow with the wizard in place.
                4. A record of which responses participants trusted, ignored or corrected.

                ## Notes
                Rehearse the wizard role twice before real sessions. Slow or inconsistent wizard responses get read as a product flaw and muddy the findings.
              priority: medium
              deadlineOffsetDays: 45
              frontmatter:
                mode: building
                output_kind: knowledge
                success_criteria: "Eight participants completed a Wizard of Oz flow with a rehearsed wizard, and their trust, edits and abandonment are recorded per response."
                cadence: phased
                effort_hours_estimate: "16"
              tasks:
                - "Write the wizard playbook with response rules and timing"
                - "Rehearse the wizard role twice with a colleague as the participant"
                - "Run the flow with at least eight participants"
                - "Tag each wizard response as trusted, ignored or corrected"
            - name: First-click and five-second tests on key screens
              description: |-
                ## Purpose
                Navigation and first impressions are where many prototypes quietly fail: people click the wrong thing first and never recover, or cannot say what a page is for. First-click tests show where people expect to go for a task, and five-second tests show what a screen communicates at a glance, both in a day and with little setup.

                ## Milestones
                1. Three to five key screens chosen, such as home, pricing and the main dashboard.
                2. A first-click task written for each screen with the correct target defined.
                3. A five-second test run on the home or landing screen asking what it is for.
                4. Results shown as click maps and recall summaries with sample sizes.
              priority: low
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "First-click results for three to five screens and one five-second test are summarised with sample sizes and the screens that failed are flagged."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Pick three to five screens where a wrong first click is costly"
                - "Write one first-click task per screen with the correct target"
                - "Run a five-second test asking what the home screen is for"
                - "Flag screens where fewer than two thirds clicked the right place first"
            - name: Head-to-head test of two prototype concepts
              description: |-
                ## Purpose
                Choosing between two design directions by debate usually means the most senior voice wins. Testing both concepts with the same tasks and participants, in alternating order, gives the team evidence on which one people complete faster, understand better and prefer, and often reveals a hybrid nobody had proposed.

                ## Milestones
                1. Two prototypes of equal fidelity covering the same tasks.
                2. A session plan that alternates which concept each participant sees first.
                3. Task success, time and a preference question recorded for both concepts.
                4. A written choice of concept, or a hybrid, with the evidence behind it.

                ## Notes
                Keep fidelity equal. A polished concept will beat a rough one on preference almost every time, whatever its merits.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "Both concepts were tested on the same tasks with counterbalanced order, and a concept choice is recorded with task and preference results."
                cadence: one-shot
                effort_hours_estimate: "12"
              tasks:
                - "Bring both concepts to the same fidelity for the tested tasks"
                - "Plan sessions so half the participants see each concept first"
                - "Record task success and preference for both concepts"
                - "Write the concept choice and the evidence that decided it"
            - name: Pre-order or letter of intent test
              description: |-
                ## Purpose
                Clicks and sign-ups cost nothing, so they overstate demand for anything expensive. Asking prospects for a refundable pre-order, a deposit or, for business products, a signed letter of intent tests the viability assumption directly, and the number of people who say no is as useful as the number who say yes.

                ## Milestones
                1. The offer written: what is promised, when, at what price and how refunds work.
                2. Terms reviewed by your legal or finance contact before anything is taken.
                3. The offer put to a defined list of prospects with a response deadline.
                4. Commitments, refusals and the reasons for refusal recorded for each prospect.

                ## Notes
                This project organises the test; consumer, payment and contract rules vary by country, so the terms need sign-off from the right professional.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A reviewed pre-order or letter of intent offer was put to a defined prospect list, with commitments and refusal reasons recorded for every prospect."
                cadence: one-shot
                effort_hours_estimate: "10"
              tasks:
                - "Write the offer with price, delivery date and refund terms"
                - "Ask your legal or finance contact to review the terms"
                - "Send the offer to the prospect list with a reply-by date"
                - "Record each commitment or refusal with the reason given"
            - name: Go, pivot or stop call after a test round
              description: |-
                ## Purpose
                Test rounds that end with "interesting, let's do more research" waste the evidence they produced. A short decision meeting after each round, reading results against the hypothesis card and choosing to go to build, pivot the concept or stop, makes testing a decision tool rather than a holding pattern.

                ## Milestones
                1. A decision meeting booked for within three days of a round's last session.
                2. Results laid out against the pass and fail thresholds on the card.
                3. A go, pivot or stop decision recorded with the owner and date.
                4. The roadmap, backlog or design brief updated to reflect the decision.

                ## Notes
                If the result lands between pass and fail, the decision is to run one sharper test with a narrower question, not an open-ended extension.
              priority: high
              deadlineOffsetDays: 60
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "The most recent test round has a recorded go, pivot or stop decision made within three days, and the roadmap reflects it."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Book a decision meeting within three days of the round ending"
                - "Lay the round's results beside the card's thresholds"
                - "Record go, pivot or stop with an owner and date"
                - "Update the roadmap or design brief to match the decision"
            - name: Prototype test day with ten customers
              description: |-
                ## Purpose
                One concentrated day of back-to-back sessions, with the whole product trio and a few stakeholders watching from an observation room or shared call, produces more shared conviction than a month of reports. It suits a big concept that needs a fast, visible answer before a planning cycle closes.

                ## Milestones
                1. Ten participants booked into forty-five minute slots with backups on standby.
                2. Prototype, script, consent forms and recording tested the day before.
                3. Observers briefed and assigned to note-taking roles.
                4. Findings synthesised on the same day and shared by the next morning.

                ## Notes
                Start from the **Operational checklist** template for the day's logistics. Over-recruit by two: no-shows are normal.
              priority: medium
              deadlineOffsetDays: 45
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A single test day ran at least eight sessions, with findings shared with stakeholders by the following morning."
                cadence: one-shot
                effort_hours_estimate: "20"
              tasks:
                - "Fix the test day date and invite twelve participants for ten slots"
                - "Build a test day checklist covering room, links, consent and backups"
                - "Brief observers on note-taking roles the day before"
                - "Hold a same-day synthesis session after the last participant"
            - name: Five-day design sprint ending in a test
              description: |-
                ## Purpose
                Teams stuck in weeks of debate over a big question can get to a tested answer in five days with a design sprint: map the problem, sketch solutions, decide, build a realistic prototype, and test it with five customers on the last day. The fixed schedule and the Friday sessions force decisions that open-ended meetings never reach.

                ## Milestones
                1. A sprint question and a decider named, with five days cleared for a small team.
                2. Five customers recruited for the final day before the sprint begins.
                3. A realistic prototype built in one day from the chosen sketches.
                4. Final-day sessions run and the decider's next step recorded.

                ## Notes
                Recruit the Friday participants a week before the sprint starts. Leaving it to the Monday of the sprint is the commonest reason sprints end without a test.
              priority: medium
              deadlineOffsetDays: 30
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A five-day sprint finished with at least four customer sessions on the final day and a recorded next step from the decider."
                cadence: one-shot
                effort_hours_estimate: "35"
              tasks:
                - "Write the sprint question and name the decider"
                - "Clear five consecutive days in the calendars of four to seven people"
                - "Recruit five customers for the final day a week ahead"
                - "Record the decider's next step after the final sessions"
            - name: Guerrilla tests at a trade show or meetup
              description: |-
                ## Purpose
                Events put dozens of your target users within a few metres of you, and many will give ten minutes to try a prototype on a tablet. A plan for short intercept tests, with one or two focused tasks and a quick way to record answers, turns an event stand or a meetup into a day of fast feedback.

                ## Milestones
                1. One or two tasks that fit in under ten minutes on a tablet or phone.
                2. A short screening question to check each person matches the target user.
                3. A recording method that works in a noisy hall, such as a one-page tally sheet.
                4. At least twelve intercept sessions completed and summarised.
              priority: low
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "Twelve or more intercept tests completed at one event, each screened and recorded, with a written summary within a week."
                cadence: one-shot
                effort_hours_estimate: "10"
              tasks:
                - "Choose an upcoming event where target users will gather"
                - "Cut the prototype down to one or two ten-minute tasks"
                - "Print a tally sheet with a screening question and task outcomes"
                - "Summarise the intercept results within a week of the event"
            - name: Evidence pack for the build decision
              description: |-
                ## Purpose
                Engineering time is the most expensive resource most product teams have, and the moment an idea moves from prototype to sprint is when evidence matters most. A short evidence pack (assumptions tested, results against thresholds, open risks and what was cut) gives engineering and leadership a clear basis for committing, and a record to look back on.

                ## Milestones
                1. Every risky assumption listed with the test that addressed it and the result.
                2. Untested or failed assumptions named as open risks with a plan.
                3. Features cut on the strength of evidence listed separately.
                4. The pack reviewed in a build decision meeting and the outcome recorded.
              priority: high
              deadlineOffsetDays: 90
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "A build decision meeting reviewed an evidence pack listing every risky assumption with its test result and open risks, and the commit decision is recorded."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Pull every closed assumption and result from the results log"
                - "Ask the agent to draft the evidence pack from those log rows"
                - "List open risks and the features cut because of test results"
                - "Present the pack at the build decision meeting and record the outcome"
            - name: Investor demo backed by test evidence
              description: |-
                ## Purpose
                Investors have seen hundreds of polished prototypes and are rarely moved by the screens alone. A founder who shows the prototype alongside what users did with it (completion rates, concierge retention, pre-orders or a fake door rate) is presenting evidence of demand rather than a design exercise.

                ## Milestones
                1. The three strongest pieces of test evidence chosen and checked for honest framing.
                2. A demo path through the prototype that matches what was actually tested.
                3. One or two short user clips, used with participants' permission.
                4. The demo rehearsed with a mentor or adviser and their questions answered.

                ## Notes
                Report sample sizes and methods plainly. Investors discount evidence that sounds bigger than it was, and your credibility goes with it.
              priority: low
              deadlineOffsetDays: 120
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "An investor demo has been rehearsed with an adviser, pairing the prototype with three pieces of test evidence each stated with its sample size."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Pick the three strongest test results and note each sample size"
                - "Check participant consent covers showing clips to investors"
                - "Script a demo path that follows the tested flow"
                - "Rehearse the demo with a mentor and note their hardest questions"
            - name: Validation on a solo founder's budget
              description: |-
                ## Purpose
                Solo founders rarely have money for testing platforms or recruiting agencies, but they do have direct access to their audience and no committee to persuade. A lean routine of paper or free-tool prototypes, a weekly hour of tests with people from your network and online communities, and a strict rule against building before a threshold is hit gets real evidence for almost nothing.

                ## Milestones
                1. A free or low-cost prototyping tool and a video call setup in use.
                2. Three online communities or networks where target users can be approached respectfully.
                3. A weekly testing hour kept for six weeks.
                4. A written rule naming the evidence needed before any code is written.

                ## Notes
                Read each community's rules on research requests before posting. A short, honest ask with a clear time limit gets far more replies than a survey link.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Six consecutive weekly testing hours held with at least two participants each, and a written no-build-until rule in place."
                cadence: rolling
              tasks:
                - "List three communities where target users gather and read their rules"
                - "Write a short, honest request for twenty minutes of feedback"
                - "Hold a one-hour prototype testing slot @recurring(weekly:sat)"
                - "Write the evidence you need before writing any code"
            - name: Testing with existing customers without denting trust
              description: |-
                ## Purpose
                Established products have the best participants on hand, their own customers, and the most to lose if tests feel careless. Agreeing with account managers who can be approached, how often, and how fake doors and concepts are framed protects relationships while still getting the evidence the team needs.

                ## Milestones
                1. An agreed process with sales and customer success for approaching accounts.
                2. A do-not-contact list for accounts in renewal, escalation or onboarding.
                3. A cap on how often any one customer is invited to research.
                4. A follow-up message to participants telling them what changed because of their input.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A written approach process, do-not-contact list and contact cap are agreed with customer-facing teams and followed for two quarters."
                cadence: rolling
              tasks:
                - "Agree with customer success how test invitations to accounts are made"
                - "Build a do-not-contact list for accounts in renewal or escalation"
                - "Refresh the do-not-contact list with account managers @recurring(quarterly)"
                - "Send past participants a note on what changed because of them"
            - name: Concept tests for creative work
              description: |-
                ## Purpose
                Illustrators, writers, musicians and makers can test a cover, a character design, a packaging idea or a product concept before committing months to it. Showing three to five rough variants to the people who would actually buy or share the work, and asking them to choose and explain, separates your favourite from the audience's.

                ## Milestones
                1. Three to five rough variants of the concept at the same level of finish.
                2. Twenty or more people from the intended audience shown the variants in random order.
                3. Choice and a one-line reason captured for each person.
                4. A direction chosen, with the reasons that recurred most often written down.

                ## Notes
                Ask "Which would you pick up first, and why?" rather than "Which do you like?" The first gets closer to behaviour.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "At least twenty audience members chose between three to five variants with reasons recorded, and a direction is chosen from the pattern."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Make three to five rough variants at the same level of finish"
                - "Find twenty people who match the audience for the work"
                - "Show the variants in random order and record each choice and reason"
                - "Choose a direction and note the reasons that came up most"
            - name: Playtesting a game or interactive prototype
              description: |-
                ## Purpose
                Games and interactive pieces live or die on moments a designer cannot judge alone: the point where a player gets bored, confused or hooked. Regular playtests of a paper or grey-box prototype, where you watch silently and note where players hesitate, quit or smile, shape the work while changes are still cheap.

                ## Milestones
                1. A playable paper, tabletop or grey-box version of the core loop.
                2. A playtest note sheet recording hesitations, rule questions, quits and highlights.
                3. Six playtests with people who have not seen the game before.
                4. Three changes to the core loop made from the patterns observed.

                ## Notes
                Resist explaining the rules mid-session. Every question a player asks is a finding about the design, not a gap in their attention.
              priority: low
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "Six playtests with first-time players recorded on a note sheet, followed by three documented changes to the core loop."
                cadence: phased
                effort_hours_estimate: "12"
              tasks:
                - "Build a paper or grey-box version of the core loop"
                - "Create a playtest sheet for hesitations, questions, quits and highlights"
                - "Run six playtests with players new to the game"
                - "Make three changes to the core loop from what players did"
            - name: Running prototype tests for a client
              description: |-
                ## Purpose
                Freelance designers and small studios are often asked to test a prototype on a client's behalf, with the client watching, the budget fixed and the client's own preferences at stake. Agreeing the questions, participants, deliverables and how disagreements with the findings will be handled before the first session keeps the work honest and the relationship intact.

                ## Milestones
                1. A test brief agreed with the client covering questions, participants and deliverables.
                2. Recruiting responsibility and incentive costs settled in writing.
                3. Client observers briefed on staying silent during sessions.
                4. A findings report delivered with clips, severity ratings and recommendations.

                ## Notes
                Put the hypothesis thresholds in the brief. A client who agreed in advance that four of six must succeed finds a poor result easier to accept.
              priority: low
              frontmatter:
                mode: service
                output_kind: deliverable
                success_criteria: "A signed test brief, a completed round of sessions and a findings report with severity ratings have been delivered to the client."
                cadence: one-shot
                effort_hours_estimate: "20"
              tasks:
                - "Draft a test brief with questions, participants and deliverables"
                - "Agree in writing who recruits and who pays incentives"
                - "Brief client observers on how to watch sessions"
                - "Deliver the findings report with clips and severity ratings"
            - name: Prototype sessions with busy B2B buyers
              description: |-
                ## Purpose
                Finance directors, clinic managers and operations leads will not give an hour to a stranger's prototype, and their colleagues who do have time are often not the decision makers. Shorter sessions, realistic sample data from their world, recruiting through customer-facing teams and offering something of value in return make it possible to test with the people whose approval actually matters.

                ## Milestones
                1. A twenty to thirty minute session format focused on one or two tasks.
                2. Realistic sample data built for each main industry or role tested.
                3. Separate sessions planned for end users and for budget holders.
                4. Six sessions with qualifying professionals completed.

                ## Notes
                Senior participants often value a summary of what peers said more than money. Offer an anonymised findings note in place of, or alongside, an incentive.
              priority: medium
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "Six short sessions completed with qualifying professionals, including at least two budget holders, using realistic sample data."
                cadence: phased
                effort_hours_estimate: "15"
              tasks:
                - "Cut the session to one or two tasks that fit in thirty minutes"
                - "Build sample data that looks like each target role's real work"
                - "Ask account managers to introduce three budget holders"
                - "Send participants an anonymised summary of peer findings"
            - name: Testing a prototype across markets and languages
              description: |-
                ## Purpose
                A prototype that works in your home market can fail elsewhere because of a word that does not translate, an unfamiliar payment step or a different expectation of formality. Running a small round in each priority market, with local participants, translated tasks and a local moderator or interpreter, catches these problems before they are built in.

                ## Milestones
                1. Priority markets chosen for the round, with a reason for each.
                2. Tasks and prototype text translated and checked by a native speaker.
                3. A local moderator, interpreter or unmoderated panel arranged per market.
                4. Findings compared across markets, separating universal from local issues.
              priority: low
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "At least four sessions held in each priority market with translated materials, and findings sorted into universal and market-specific issues."
                cadence: phased
                effort_hours_estimate: "20"
              tasks:
                - "Choose the priority markets and note why each matters"
                - "Have a native speaker check the translated tasks and prototype text"
                - "Arrange a local moderator or interpreter for each market"
                - "Sort findings into universal and market-specific issues"
            - name: Accessibility testing with assistive technology users
              description: |-
                ## Purpose
                Screen reader users, keyboard-only users and people using magnification meet problems in a prototype that no automated check will show, and fixing them after launch costs far more. Including participants who use assistive technology in prototype rounds, with a prototype or coded test page they can actually operate, builds accessibility into the design rather than auditing it in at the end.

                ## Milestones
                1. A prototype or coded test page that works with screen readers and keyboard navigation.
                2. Participants recruited who use assistive technology day to day, through a specialist panel or community group.
                3. Sessions run in the participants' own setup, with extra time allowed.
                4. Findings rated by severity and added to the design brief.

                ## Notes
                Many design tool prototypes cannot be read by screen readers at all. Check this first; a simple coded page is often the only way to test with blind participants.
              priority: medium
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "At least four participants who use assistive technology have tested the prototype, and severity-rated findings are in the design brief."
                cadence: phased
                effort_hours_estimate: "15"
              tasks:
                - "Check whether the prototype works with a screen reader and keyboard"
                - "Contact a specialist panel or disability organisation about recruiting"
                - "Run sessions on participants' own devices with extra time allowed"
                - "Include an assistive technology user in each major test round @recurring(quarterly)"
            - name: Simulated AI responses in prototype tests
              description: |-
                ## Purpose
                AI features are hard to prototype because their value depends on the quality and variety of what they produce, including the wrong answers. Building a prototype that serves a prepared set of good, mediocre and plainly wrong responses lets you see whether users notice errors, how much they edit and whether they trust the feature, before any model work is paid for.

                ## Milestones
                1. A response set for each task with good, mediocre and wrong outputs.
                2. A prototype that serves those responses in a planned order.
                3. Six or more participants tested, with error spotting and edits recorded.
                4. A written quality bar describing what level of error users tolerated.

                ## Notes
                Always include some wrong answers. A test where the simulated AI is always right tells you only that people like correct answers.
              priority: low
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "Six participants used a prototype serving prepared good, mediocre and wrong responses, and a quality bar is written from how they reacted."
                cadence: phased
                effort_hours_estimate: "14"
              tasks:
                - "Write good, mediocre and wrong responses for each task"
                - "Set the order in which the prototype serves each response"
                - "Record whether each participant spotted and corrected the wrong answers"
                - "Write the quality bar users seemed willing to accept"
            - name: Two-week diary test of a prototype
              description: |-
                ## Purpose
                Some products only show their value, or their friction, after repeated use: a budgeting tool, a habit app, a weekly planning feature. A diary test gives eight to twelve participants a working prototype or concierge version for two weeks and asks for short entries after each use, catching drop-off and novelty effects that a single session misses.

                ## Milestones
                1. A prototype or manual version that participants can use repeatedly for two weeks.
                2. A short diary prompt of three questions sent after each use or each day.
                3. Eight to twelve participants enrolled, with a mid-point check-in call.
                4. Entries analysed for when use dropped off and why.

                ## Notes
                Expect a third of participants to fade by the second week. Over-recruit and pay part of the incentive at the midpoint to keep entries coming.
              priority: low
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A two-week diary test completed with at least eight participants, and a written analysis of when and why use dropped off."
                cadence: phased
                effort_hours_estimate: "20"
              tasks:
                - "Write a three-question diary prompt for after each use"
                - "Enrol twelve participants and schedule a midpoint call with each"
                - "Send reminders on the days participants miss an entry"
                - "Chart when use dropped off and note the reasons given"
            - name: Benchmarking a redesign against the live product
              description: |-
                ## Purpose
                Redesigns are often shipped on the strength of opinions about the old design, with no proof the new one is easier. Running the same tasks on the live product and on the redesign prototype, with comparable participants and the same metrics, shows whether the redesign actually improves task success, time and satisfaction before anyone rebuilds the screens.

                ## Milestones
                1. A fixed set of four to six core tasks that both versions support.
                2. Baseline task success, time on task and SUS measured on the live product.
                3. The same measures taken on the redesign prototype with comparable participants.
                4. A comparison table with sample sizes and a recommendation.

                ## Notes
                Start from the **Metrics log** template to keep the benchmark comparable across rounds. Keep the task wording identical, or the comparison is meaningless.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A comparison table shows task success, time and SUS for the live product and the redesign on identical tasks, with a recorded recommendation."
                cadence: phased
                effort_hours_estimate: "18"
              tasks:
                - "Choose four to six core tasks both versions support"
                - "Measure the live product on those tasks to set the baseline"
                - "Run the identical tasks on the redesign prototype"
                - "Repeat the live product benchmark to track drift @recurring(yearly)"
            - name: Prototype validation playbook and coaching
              description: |-
                ## Purpose
                Once three or four people run prototype tests, quality drifts: different screeners, different thresholds, findings written in different shapes. A short playbook covering methods, templates, honesty rules and the decision process, plus a few coached sessions for each new tester, lets the practice spread across teams without losing its standards.

                ## Milestones
                1. A playbook of no more than ten pages covering methods, templates and decision rules.
                2. Every template the team uses linked from the playbook.
                3. Two coached sessions completed by each new tester before they run solo.
                4. The playbook reviewed once a year against the quarterly outcome checks.
              priority: medium
              frontmatter:
                mode: service
                output_kind: artifact
                success_criteria: "A playbook of ten pages or fewer is published, and every new tester in the last six months completed two coached sessions before running solo."
                cadence: phased
                effort_hours_estimate: "16"
              tasks:
                - "Ask the agent to draft a playbook outline from the team's templates and rules"
                - "Write the decision rules section from past go, pivot and stop calls"
                - "Shadow each new tester for two sessions and give written feedback"
                - "Review the playbook against the quarterly outcome checks @recurring(yearly)"
---

# Prototype Validation Tests

This area is for product teams, founders and creative makers who would rather learn that an idea is wrong from a prototype on a Tuesday than from a launch six months later. It starts with the foundations (an assumption map, hypotheses with pass marks, fidelity, recruiting, consent and the honesty rules for fake doors), moves into the weekly machinery of sessions, debriefs and readouts, then the skills of writing tasks, moderating and reading small samples, the main test formats from fake doors to Wizard of Oz, the dated moments such as test days and design sprints, situations for solo founders, client work and creative projects, and the specialist work of accessibility, AI simulation, diary tests and a shared playbook.

The rhythm is weekly for test sessions, debriefs and the assumption backlog, monthly for the stakeholder readout, panel top-ups, observer rotas, incentive reconciliation and the prototype archive, and quarterly for checking past calls against what actually happened after launch. The Purchase decision, Metrics log, Feedback themes, Meeting notes and Operational checklist templates pair with the projects that name them. Installing adds all 50 projects as active, so archive the ones that are not for you yet.
