---
id: founding-startups.mvp-scoping-and-build
name: MVP Scoping and Build
description: "Name the one bet your first product tests, cut everything else, build it inside a fixed time box and put it in front of real users within weeks, with pass and fail lines set in advance."
category: business
version: 1.0.0
tags: [founding-startups, mvp-scoping-and-build, founder, engineer, mvp, scope, time-box, shipping]
author: Aurum Technology
starter_structure:
  templates:
    - risk-register
    - product-spec
    - feedback-themes
    - purchase-decision
    - vendor
    - operational-checklist
  pillars:
    - name: Founding & Startups
      emoji: "🚀"
      description: "Starting and steering a young company: validating the idea, incorporating, finding product-market fit, the founder's operating rhythm, co-founder relationships, runway and the hard calls of the early years."
      pillarFrontmatter:
        review_cadence: monthly
      areas:
        - name: MVP Scoping and Build
          description: "Deciding the smallest product that tests the core bet, cutting scope ruthlessly and shipping it to real users within weeks."
          projects:
            - name: One-sentence core bet for the first product
              description: |-
                ## Purpose
                Most first products fail to teach anything because nobody wrote down what they were meant to prove. A single sentence in the form "we believe this user will do this action because of this value" turns a vague product idea into a test, and every later scope argument can be settled by asking whether a feature helps answer it.

                ## Milestones
                1. One sentence naming the user, the action they will take and the value that drives it.
                2. The sentence read aloud to a co-founder or adviser who can repeat it back without notes.
                3. Two or three tempting features written down as explicitly outside the bet.
                4. The sentence pinned at the top of the build board and the spec.

                ## Notes
                If the sentence needs the word "and" twice, you are testing two bets. Pick the one that would end the company if it were false.
              priority: high
              deadlineOffsetDays: 7
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A one-sentence core bet naming user, action and value is pinned on the build board and agreed by every founder."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Write three drafts of the core bet sentence in twenty minutes"
                - "Pick the draft whose failure would hurt the company most"
                - "Read it to a co-founder and ask them to repeat it back"
                - "Pin the agreed sentence at the top of the build board"
            - name: Riskiest assumption map before any code
              description: |-
                ## Purpose
                Every product idea rests on a stack of assumptions about desire, ability to deliver, willingness to pay and reach. Mapping them by how uncertain they are and how fatal they would be shows which one the MVP must test first, and often reveals that the riskiest one needs no code at all.

                ## Milestones
                1. Ten to fifteen assumptions listed across desirability, feasibility, viability and reach.
                2. Each assumption scored for uncertainty and impact on a simple two-by-two.
                3. The single riskiest assumption named, with the evidence that would retire it.
                4. A note on which lower risks are being knowingly carried into the build.

                ## Notes
                Start from the **Risk register** template. Keep the evidence you already have from discovery beside each assumption so you do not retest what is known.
              priority: high
              deadlineOffsetDays: 10
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A scored assumption map exists with one riskiest assumption named and the evidence that would retire it written beside it."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "List every assumption the core bet depends on in one sitting"
                - "Score each one for uncertainty and impact from one to five"
                - "Circle the assumption with the highest combined score"
                - "Write what evidence would prove that assumption false"
            - name: Pass and fail thresholds set before launch
              description: |-
                ## Purpose
                After launch, any number can be explained away as early, noisy or promising. Agreeing in advance that, say, 30 percent of invited users must complete the core action twice in two weeks gives the team a line that decides the next step instead of a debate.

                ## Milestones
                1. One primary measure tied directly to the core bet sentence.
                2. A pass line, a fail line and a grey zone written with numbers.
                3. The sample size and the measurement window agreed.
                4. What the team will do in each of the three outcomes written in a sentence each.
              priority: high
              deadlineOffsetDays: 14
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A written pass line, fail line, sample size and window for one primary measure, signed off by all founders before the first user arrives."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Choose the one user action that best shows the bet is true"
                - "Write a pass number and a fail number for that action"
                - "Agree how many users and how many days the test needs"
                - "Write what you will do after a pass, a fail and a grey result"
            - name: Six-week build time box and ship date
              description: |-
                ## Purpose
                Without a fixed date, scope grows to fill whatever time the runway allows. Committing to a ship date four to eight weeks out, and treating scope as the thing that flexes, is the single habit that separates MVPs that reach users from ones still in staging after six months.

                ## Milestones
                1. A ship date chosen and written on the board with the number of build days left.
                2. Weekly checkpoints set, each with what must be demonstrable by then.
                3. A rule agreed that scope is cut before the date moves.
                4. The date shared with at least three outside people who will ask about it.

                ## Notes
                Telling a few prospective users the date is the cheapest accountability you can buy.
              priority: high
              deadlineOffsetDays: 14
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A ship date within eight weeks is on the board with weekly checkpoints and has been told to at least three people outside the team."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Count the realistic build days available in the next eight weeks"
                - "Pick a ship date and write it on the build board"
                - "Set what must be demonstrable at the end of each week"
                - "Tell three prospective users the date you are aiming for"
            - name: Choosing concierge, Wizard of Oz or coded MVP
              description: |-
                ## Purpose
                Not every bet needs software to test it. A concierge MVP delivers the outcome by hand, a Wizard of Oz MVP puts a real interface in front of work done manually behind it, and a coded MVP automates the core loop; choosing on purpose can save weeks of engineering when the risk is demand rather than feasibility.

                ## Milestones
                1. The three MVP types written out for your product, one paragraph each.
                2. Each option scored on build time, cost, what it can prove and what it cannot.
                3. One type chosen, with the reason tied to the riskiest assumption.
                4. The point at which you would move to the next type written down.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A recorded choice of MVP type with build time, cost and the trigger for moving to a coded version, linked to the riskiest assumption."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Sketch how a fully manual version of the product would work"
                - "Sketch a version with a real front end and manual work behind it"
                - "Estimate build time and cost for each option including full code"
                - "Record the chosen MVP type and why it fits the riskiest assumption"
            - name: User story map of the single core flow
              description: |-
                ## Purpose
                A story map lays the user's steps left to right and the possible features for each step underneath, so the team can see the thinnest slice that still gets someone from arrival to the value moment. Drawing it once replaces a long backlog with one line across the map that defines the first release.

                ## Milestones
                1. The core flow written as six to ten user steps in order.
                2. Candidate features placed under each step.
                3. A release line drawn so every step has the minimum needed to complete it.
                4. The map photographed or rebuilt in the team's planning tool.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A story map with a single release line across every step of the core flow is saved where the whole team can see it."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Write the user's steps from first visit to the value moment"
                - "Add sticky notes for every feature idea under the right step"
                - "Draw the thinnest release line that still completes the flow"
                - "Rebuild the map in the planning tool the team uses daily"
            - name: Must, should, could and cut list
              description: |-
                ## Purpose
                Founders tend to keep features because they are cheap to imagine, not because they serve the bet. Sorting every idea into must, should, could and cut, with a hard rule that only musts ship in version one, gives you a written list to point at each time someone says it will only take a day.

                ## Milestones
                1. Every feature idea placed in exactly one of four columns.
                2. The must column checked against the story map release line.
                3. The cut column kept visible rather than deleted.
                4. Each must feature estimated so the total fits inside the time box.

                ## Notes
                If the musts do not fit the time box, cut musts, not the date. A must that cannot be cut is a sign the bet is too big.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A four-column feature list exists in which the estimated must items fit inside the agreed build time box."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Dump every feature idea from notes, chats and the backlog into one list"
                - "Sort each idea into must, should, could or cut"
                - "Estimate the must items in days and total them"
                - "Move musts to should until the total fits the time box"
            - name: One-page MVP spec the whole team signs
              description: |-
                ## Purpose
                Engineers build what they understand, and a scattered set of chats and sketches leaves too much to guesswork. A single page with the bet, the flow, the must features, what is out of scope and the pass line becomes the reference everyone checks before starting a task.

                ## Milestones
                1. A one-page spec with bet, users, flow, musts, non-goals and pass line.
                2. Open questions listed with an owner and an answer date.
                3. Every founder and builder has read it and raised objections.
                4. The signed version linked from the build board.

                ## Notes
                Start from the **Product spec** template and delete every section you do not need. The non-goals section matters more than the features section.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A one-page MVP spec with explicit non-goals is linked from the build board and acknowledged by every person building."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Ask the agent to draft a one-page spec from the bet, story map and cut list"
                - "Rewrite the non-goals section in your own words"
                - "Send the spec to every builder and ask for objections in a day"
                - "Link the agreed spec from the top of the build board"
            - name: Clickable prototype tested before code
              description: |-
                ## Purpose
                Five users clicking through a prototype in a design tool will find most of the confusing steps in an afternoon, at a fraction of the cost of finding them in production. Testing the core flow as a prototype first means the code you write is for a flow people already understand.

                ## Milestones
                1. A clickable prototype covering only the core flow.
                2. Five sessions run with people who match the target user.
                3. The three biggest points of confusion written down with what each user did.
                4. The prototype revised and the story map updated where the flow changed.
              priority: medium
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "Five prototype sessions are complete and the top three confusion points are recorded with a change made to the flow for each."
                cadence: one-shot
                effort_hours_estimate: "10"
              tasks:
                - "Build the core flow screens as a clickable prototype"
                - "Book five thirty-minute sessions with target users"
                - "Note where each person hesitates, backtracks or asks a question"
                - "Change the flow for the three most common sticking points"
            - name: Monday scope review against the cut list
              description: |-
                ## Purpose
                Scope creeps in one reasonable request at a time, usually from a user call or a late-night idea. A fifteen-minute review each Monday, comparing what is in progress with the must list and the days left, catches drift while it is still a conversation rather than a missed date.

                ## Milestones
                1. A standing Monday slot in every founder's calendar.
                2. Each in-progress item checked against the must list.
                3. Any new item either swapped for a must of the same size or moved to the cut list.
                4. Days remaining to the ship date written on the board each week.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every week of the build has a recorded Monday review in which the board shows days left and no unswapped new items."
                cadence: rolling
              tasks:
                - "Book a fifteen-minute Monday scope review for the build team"
                - "Check each in-progress item against the must list @recurring(weekly:mon)"
                - "Swap or cut any new item that has crept onto the board"
                - "Update the days-left number beside the ship date"
            - name: Daily build note and blocker log
              description: |-
                ## Purpose
                Short daily notes on what shipped, what is next and what is blocking make a small team's progress visible without a meeting. They also become the raw material for the retrospective, showing where days actually went compared with the estimates.

                ## Milestones
                1. A shared channel or document for daily notes.
                2. Three lines posted by each builder on build days.
                3. Blockers older than one day raised directly with the person who can clear them.
                4. A week of notes reviewed to see where estimates were wrong.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Daily notes exist for at least four out of five build days each week, and no blocker stays open for more than two days."
                cadence: rolling
              tasks:
                - "Create a shared channel or page for daily build notes"
                - "Post shipped, next and blocked in three lines @recurring(daily)"
                - "Message the owner of any blocker older than a day"
                - "Compare a week of notes with the original estimates"
            - name: Friday demo to someone outside the team
              description: |-
                ## Purpose
                Showing working software every Friday, even when it is rough, keeps the team honest about what is really done. An outside viewer such as an adviser, a prospective user or a friendly founder asks the obvious questions the team has stopped seeing.

                ## Milestones
                1. A rota of outside viewers for each Friday of the build.
                2. A demo of running software, not slides, every week.
                3. The viewer's top question or confusion written down after each demo.
                4. At least one change made in response to a demo comment.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A working demo was shown to an outside person every Friday of the build, with their main comment logged each time."
                cadence: rolling
              tasks:
                - "List six people outside the team willing to watch a short demo"
                - "Run a ten-minute live demo of working software @recurring(weekly:fri)"
                - "Write down the viewer's first question after each demo"
                - "Pick one demo comment to act on the following week"
            - name: Weekly bug triage with a severity rule
              description: |-
                ## Purpose
                Bugs in an MVP are normal; fixing them in the order they were reported is not. A simple severity rule, where anything that blocks the core flow is fixed today and cosmetic issues wait, keeps the build moving and protects the measure you are testing.

                ## Milestones
                1. A three-level severity rule written in two lines each.
                2. One place where all bug reports land.
                3. A weekly triage that assigns every new bug a level and an owner.
                4. No core-flow blocker open for more than one working day.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every reported bug has a severity and owner within a week, and no bug blocking the core flow stays open more than one working day."
                cadence: rolling
              tasks:
                - "Write a three-level severity rule tied to the core flow"
                - "Point every bug report form and chat to one tracker"
                - "Triage and assign every new bug @recurring(weekly:tue)"
                - "Close or downgrade bugs that nobody has hit in a month"
            - name: First-user feedback inbox and tagging
              description: |-
                ## Purpose
                Feedback from the first users arrives through email, chat, calls and support messages, and scattered feedback gets remembered by whoever shouted loudest. Pulling it into one inbox and tagging each item by flow step and theme shows which problems are common and which are one person's preference.

                ## Milestones
                1. One feedback inbox that every channel forwards to.
                2. A short tag list based on the story map steps.
                3. Every item tagged within a week of arriving.
                4. A monthly summary of the top three themes with counts.

                ## Notes
                Start from the **Feedback themes** template. Record what users did as well as what they said; the two often disagree.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "All first-user feedback sits in one tagged inbox and a monthly summary names the top three themes with counts."
                cadence: rolling
              tasks:
                - "Set up one inbox or board where all user feedback is forwarded"
                - "Create tags from the steps of the story map"
                - "Tag every new feedback item by step and theme @recurring(weekly:wed)"
                - "Summarise the top three themes with counts @recurring(monthly:26)"
            - name: Twice-weekly small release habit
              description: |-
                ## Purpose
                Big releases bundle many changes, so when something breaks nobody knows which one did it. Shipping small changes to production twice a week keeps each deploy easy to roll back and gives early users a visible sign that the product is alive.

                ## Milestones
                1. A deploy process any builder can run in under fifteen minutes.
                2. Releases going out on two fixed days each week.
                3. A one-line release note for each deploy.
                4. A tested way to roll back the last release.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Production releases go out on two fixed days a week with a release note each, and a rollback has been rehearsed at least once."
                cadence: rolling
              tasks:
                - "Write the deploy steps so any builder can follow them"
                - "Ship whatever is ready to production @recurring(weekly:tue,fri)"
                - "Post a one-line release note after each deploy"
                - "Rehearse rolling back the most recent release once"
            - name: Shortcut and tech debt ledger
              description: |-
                ## Purpose
                Every shortcut taken to hit the ship date is reasonable on the day and forgotten a month later. A ledger that records each shortcut, why it was taken and what would force a fix lets you move fast now and decide later with facts instead of guilt.

                ## Milestones
                1. A ledger with columns for shortcut, reason, risk and fix trigger.
                2. Each deliberate shortcut logged on the day it is taken.
                3. A monthly review that marks items as fixed, still fine or now urgent.
                4. The urgent items scheduled into the next build cycle.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every known shortcut is in the ledger with a fix trigger, and the ledger has been reviewed monthly since the build began."
                cadence: rolling
              tasks:
                - "Create a shortcut ledger with reason, risk and fix trigger columns"
                - "Log the shortcuts already taken in the current build"
                - "Review the ledger and mark items fixed, fine or urgent @recurring(monthly:12)"
                - "Schedule the urgent items into the next cycle"
            - name: Manual operations behind the MVP
              description: |-
                ## Purpose
                Concierge and Wizard of Oz MVPs only work if the manual work behind the screen happens reliably and on time. Writing down each manual step, who does it and how fast, keeps users from noticing the seams and tells you exactly what to automate first when volume grows.

                ## Milestones
                1. Every manual step behind the product listed in order.
                2. An owner and a response time agreed for each step.
                3. A daily or weekly check that no request has been missed.
                4. Time spent per request measured so automation can be prioritised.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Each manual step has an owner and response time, and time per request has been measured for at least two weeks."
                cadence: rolling
              tasks:
                - "List every manual step needed to fulfil one user request"
                - "Assign an owner and a response time to each step"
                - "Check the queue for missed or late requests @recurring(weekly:thu)"
                - "Record minutes spent per request for two weeks"
            - name: Cloud and tool spend cap for the MVP
              description: |-
                ## Purpose
                Free tiers, trial credits and per-seat tools add up quietly, and an MVP that costs more each month than its users would ever pay hides a problem. Setting a monthly cap and checking real spend against it keeps the build cheap and surfaces the one service that is running away.

                ## Milestones
                1. Every paid or trial service used by the build listed with its renewal date.
                2. A monthly spend cap agreed by the founders.
                3. Billing alerts set on the main cloud account.
                4. A monthly check of actual spend with any overage explained.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A written monthly spend cap exists, billing alerts are set, and each month's actual spend is recorded against it."
                cadence: rolling
              tasks:
                - "List every service the build uses with its cost and renewal date"
                - "Agree a monthly spend cap with your co-founder"
                - "Set billing alerts at half and full cap on the cloud account"
                - "Compare actual spend with the cap @recurring(monthly:20)"
            - name: Watching recorded user sessions twice a month
              description: |-
                ## Purpose
                Analytics say where users dropped off but not why. Watching ten recorded sessions or screen shares twice a month shows the hesitations, rage clicks and workarounds that no dashboard captures, and keeps the builders close to real use.

                ## Milestones
                1. Session recording or consented screen-share sessions set up for the core flow.
                2. A privacy check that recordings mask passwords and personal fields.
                3. Ten sessions watched in each review with notes on friction.
                4. One fix chosen from each review.

                ## Notes
                Tell users that sessions may be recorded and mask sensitive inputs before turning recording on.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Twice a month, ten sessions are watched, friction notes are written and one fix is chosen and shipped."
                cadence: rolling
              tasks:
                - "Set up session recording with sensitive fields masked"
                - "Add a line about recording to the privacy notice"
                - "Watch ten sessions and note friction @recurring(monthly:8)"
                - "Watch a second batch of ten sessions @recurring(monthly:22)"
            - name: Writing user stories with acceptance criteria
              description: |-
                ## Purpose
                Vague tickets such as "add sharing" lead to arguments at review time about what done means. Learning to write each story as who, what and why, with two to four testable acceptance criteria, shortens build and review and is a skill that pays back on every later product.

                ## Milestones
                1. The who, what and why story format practised on five real must features.
                2. Acceptance criteria written in a given, when, then form for each.
                3. A builder confirms each story is clear enough to start without a meeting.
                4. A short checklist for good stories saved beside the board.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Five must features are rewritten as stories with testable acceptance criteria that a builder accepted without further questions."
                cadence: phased
                effort_hours_estimate: "5"
              tasks:
                - "Read one short guide on user stories and acceptance criteria"
                - "Rewrite five must features as stories with criteria"
                - "Ask a builder whether each story could be started today"
                - "Save a five-point good story checklist beside the board"
            - name: Instrumenting the core bet with five events
              description: |-
                ## Purpose
                Tracking everything produces a noisy dashboard and no answer. Choosing the five events that map to the core flow and the pass line, naming them consistently and checking they fire before launch means the readout is a lookup, not a reconstruction.

                ## Milestones
                1. Five named events covering arrival, setup, core action, repeat use and the pass measure.
                2. Each event documented with its trigger and properties.
                3. Every event verified firing in staging and in production.
                4. A single chart or query that shows the pass measure directly.

                ## Notes
                This is instrumentation for one test, not a company dashboard. Keep it to what the pass line needs.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Five documented events are verified in production and one chart shows the pass measure for the test window."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Name the five events that map to the core flow and pass line"
                - "Write the trigger and properties for each event"
                - "Verify every event fires in staging and production"
                - "Check the pass measure chart against raw counts @recurring(weekly:mon)"
            - name: No-code MVP builders tried hands-on
              description: |-
                ## Purpose
                Spreadsheets, form builders, automation tools and visual app builders can stand up a working MVP in days, and many founders dismiss them without trying. Building the same small slice in two tools shows you, in an afternoon each, whether the bet can be tested without a custom codebase.

                ## Milestones
                1. Two no-code or low-code tools chosen that fit the product type.
                2. The same core flow slice built in each.
                3. Limits noted for each tool: users, data, logins, payments and export.
                4. A decision recorded on whether to build the MVP in one of them.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "The same core slice is built in two tools and a written decision says whether the MVP will use either, with their limits noted."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Pick two no-code tools that suit your product type"
                - "Build the first two steps of the core flow in the first tool"
                - "Build the same steps in the second tool"
                - "Write the limits of each and the decision you reached"
            - name: Running a five-user usability test
              description: |-
                ## Purpose
                Usability testing is a learnable skill: writing tasks rather than questions, staying silent while people struggle and noting behaviour instead of opinion. Running one round properly on the working MVP before inviting the first cohort catches the problems that would otherwise sink the readout.

                ## Milestones
                1. Three realistic tasks written for the core flow.
                2. Five participants who match the target user booked.
                3. Each session run with a think-aloud prompt and no help given.
                4. A findings list ranked by how many participants hit each problem.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Five usability sessions on the working MVP are complete with a ranked findings list and the top problem fixed before first users arrive."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Write three tasks a target user would really try to do"
                - "Recruit five participants who match the target user"
                - "Run each session and say nothing while they work"
                - "Rank problems by how many participants hit them"
            - name: Estimating build work in ranges
              description: |-
                ## Purpose
                Estimates given as single numbers are nearly always optimistic, and the gap shows up as a slipped ship date. Practising estimates as a best case and a likely case, and checking them against what actually happened, makes the time box believable and the cut decisions earlier.

                ## Milestones
                1. Every must item estimated as a best and a likely number of days.
                2. The likely totals compared with the days in the time box.
                3. Actual days recorded as items finish.
                4. The team's average overrun calculated after two weeks.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "All must items have range estimates and actuals, and the team's average overrun is calculated and used to adjust the plan."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Re-estimate each must item as a best and likely number of days"
                - "Total the likely numbers and compare with build days left"
                - "Record actual days as each item is finished"
                - "Work out the average overrun and adjust the remaining plan"
            - name: Technical spike on the scariest feasibility risk
              description: |-
                ## Purpose
                When the riskiest assumption is whether something can be built at all, such as a third-party API's limits or a matching algorithm's speed, a two or three day throwaway spike answers it before the team commits to the full build. The spike's code is discarded; the answer is what you keep.

                ## Milestones
                1. The feasibility question written as one yes or no question.
                2. A time box of no more than three days agreed.
                3. A throwaway prototype that answers the question with real data.
                4. A short write-up of the answer and what it changes in the plan.
              priority: medium
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A written yes or no answer to the feasibility question exists within three days, with any change to the plan recorded."
                cadence: one-shot
                effort_hours_estimate: "16"
              tasks:
                - "Write the feasibility risk as a single yes or no question"
                - "Agree a spike time box of three days or less"
                - "Build the smallest throwaway test that uses real data"
                - "Write a half-page answer and update the plan"
            - name: Reviewing a build as a non-technical founder
              description: |-
                ## Purpose
                If you cannot write the code, you can still judge the product, the pace and the risks, and you must. Learning to read a board, test a staging build against acceptance criteria and ask the right questions about hosting, data and access stops a non-technical founder becoming a passenger in their own company.

                ## Milestones
                1. Access to the code repository, hosting account and domain in the founder's own name.
                2. A weekly habit of testing the staging build against the acceptance criteria.
                3. A short list of questions to ask about security, backups and costs.
                4. One build reviewed end to end with written comments.

                ## Notes
                Owning the accounts matters most. Many founders lose weeks when a departing contractor holds the only login.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "The founder holds owner access to repository, hosting and domain, and has reviewed at least one staging build against acceptance criteria."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Confirm you hold owner access to the repository, hosting and domain"
                - "Learn to open and click through the staging build"
                - "Test each finished story against its acceptance criteria"
                - "Ask your builder five questions about backups, security and costs"
            - name: Minimum security and privacy baseline
              description: |-
                ## Purpose
                Even a tiny MVP holds real people's emails, passwords and sometimes payment or health details, and a leak at this stage can end the company. A short baseline covering login, secrets, access, backups and a privacy notice protects users without slowing the build much.

                ## Milestones
                1. Authentication handled by a proven provider or framework, not written from scratch.
                2. Secrets kept out of the code repository and rotated if ever exposed.
                3. Production access limited to named people with two-factor login.
                4. Daily backups switched on and one restore tested.
                5. A plain privacy notice published, reviewed by a professional if data is sensitive.

                ## Notes
                This is a floor, not a compliance programme. If you hold health, financial or children's data, get advice on the rules in your country before launch.
              priority: high
              deadlineOffsetDays: 35
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Proven authentication, secrets outside the repo, two-factor production access, a tested restore and a published privacy notice are all in place before first users."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Search the repository for keys or passwords committed by mistake"
                - "Turn on two-factor login for every production account"
                - "Switch on daily backups and test one restore"
                - "Review who has production access @recurring(monthly:27)"
            - name: Build in-house, freelancer or agency decision
              description: |-
                ## Purpose
                Paying someone to build the MVP can be the fastest route or the most expensive mistake of the first year. Comparing a founder build, a freelancer and an agency on cost, speed, control and what happens after launch gives you a choice you can defend when the first change request arrives.

                ## Milestones
                1. The three options costed for the must list and the time box.
                2. Each option scored on speed, control, quality risk and post-launch support.
                3. References checked for any outside option still in the running.
                4. A decision recorded with the budget and the fallback plan.

                ## Notes
                Start from the **Purchase decision** template. Whoever builds it, the company must own the code, accounts and domain from day one.
              priority: medium
              deadlineOffsetDays: 28
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A recorded build decision compares three options on cost, speed and control, with references checked and a budget agreed."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Write what a founder build would cost in time and lost selling"
                - "Get two freelancer quotes against the must list"
                - "Get one agency quote against the same must list"
                - "Call two past clients of each outside option you are still considering"
            - name: Fixed-scope contract with an outside developer
              description: |-
                ## Purpose
                Outside builds go wrong most often at the edges: unclear scope, payment for time rather than results and code that never gets handed over. A contract with milestones tied to working features, intellectual property assigned to the company and a clean handover clause protects the build and the relationship.

                ## Milestones
                1. Scope attached to the contract as the signed one-page spec.
                2. Payments tied to demonstrable milestones, not hours alone.
                3. Code, design files and accounts assigned to and held by the company.
                4. A handover clause covering documentation and a walkthrough.
                5. The draft reviewed by a lawyer before signing.

                ## Notes
                Start from the **Vendor** template to track the relationship. This is about organising the deal; have a lawyer check the contract terms.
              priority: medium
              frontmatter:
                mode: service
                output_kind: deliverable
                success_criteria: "A signed contract with milestone payments, IP assignment and a handover clause is on file and was reviewed by a lawyer."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Attach the one-page spec as the contract scope"
                - "Tie each payment to a feature you can see working"
                - "Add clauses on IP assignment and account ownership"
                - "Send the draft to a lawyer for review before signing"
            - name: Removing the sign-up wall from version one
              description: |-
                ## Purpose
                Accounts, passwords and email verification are where many first users quietly give up, and they rarely test the bet. Letting people reach the value moment before signing up, or using a magic link or invite code, often doubles the number who complete the core action.

                ## Milestones
                1. The current number of steps before the value moment counted.
                2. A version where the value moment comes before account creation designed.
                3. The change shipped behind a simple switch.
                4. Completion of the core action compared before and after.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "The steps before the value moment are reduced, and completion of the core action is measured before and after the change."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Count every step a new user takes before the value moment"
                - "Sketch a flow that delays sign-up until after the value moment"
                - "Ship the new flow behind a switch"
                - "Compare core action completion before and after the change"
            - name: Deciding how the MVP takes money
              description: |-
                ## Purpose
                Taking money in version one can be a full checkout, a manual invoice, a payment link or nothing at all, and each tests something different. Deciding on purpose stops a week disappearing into billing code when a payment link would prove willingness to pay just as well.

                ## Milestones
                1. The question written: does this MVP need to test willingness to pay.
                2. Options listed from no payment through link, invoice and full checkout.
                3. One option chosen with the build days it costs.
                4. Refund and cancellation handling agreed for the chosen option.

                ## Notes
                Pricing itself belongs elsewhere. This project is only about the mechanism inside the first build.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A recorded decision on the MVP payment mechanism, its build cost in days and how refunds will be handled."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Decide whether the core bet includes willingness to pay"
                - "List no payment, payment link, invoice and full checkout options"
                - "Estimate build days for each option"
                - "Write how refunds and cancellations will work"
            - name: Faking integrations with manual imports
              description: |-
                ## Purpose
                Integrations with other tools look essential on the feature list and usually take far longer than estimated. Replacing them in the MVP with a spreadsheet upload, a forwarded email or a weekly manual sync tests whether users want the result before you pay for the plumbing.

                ## Milestones
                1. Every planned integration listed with its estimated build days.
                2. A manual substitute designed for each one.
                3. Users told plainly how the manual step works.
                4. A usage threshold written that would justify building the real integration.
              priority: low
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "Each planned integration has a manual substitute in the MVP and a written usage threshold for building it properly."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "List every planned integration and its estimated build days"
                - "Design a manual import or sync for each one"
                - "Write a short user instruction for each manual step"
                - "Set the usage level that would justify the real integration"
            - name: Mid-build scope cut when the date slips
              description: |-
                ## Purpose
                Halfway through most builds the team realises the plan will not fit, and the instinct is to move the date quietly. Holding a deliberate cut session at the midpoint, with the must list and the remaining days on the table, protects the ship date and forces the hardest prioritisation while it still helps.

                ## Milestones
                1. A midpoint check booked for halfway to the ship date.
                2. Remaining work re-estimated against remaining days.
                3. Items cut or simplified until the plan fits, with the reason for each.
                4. The new plan shared with everyone who knows the ship date.
              priority: high
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A midpoint cut session is held and the remaining must items fit the remaining days without moving the ship date."
                cadence: phased
                effort_hours_estimate: "3"
              tasks:
                - "Book a one-hour cut session at the halfway point"
                - "Re-estimate every remaining item in likely days"
                - "Cut or simplify items until the plan fits the days left"
                - "Tell everyone who knows the ship date what changed"
            - name: Throwaway or keeper code decision after the MVP
              description: |-
                ## Purpose
                Some MVP code deserves to be the foundation of the company and some was always scaffolding. Deciding after the readout which parts to keep, harden or rewrite, using the shortcut ledger and real usage, avoids both a premature rewrite and years spent building on a shaky prototype.

                ## Milestones
                1. Each major part of the codebase listed with its usage and shortcut count.
                2. Every part marked keep, harden or replace.
                3. The cost of each replacement estimated in weeks.
                4. A decision recorded and the first replacement scheduled if any.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "Every major part of the MVP codebase is marked keep, harden or replace with a recorded reason and estimate."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "List the main parts of the codebase with how heavily each is used"
                - "Pull the shortcut ledger entries for each part"
                - "Mark each part keep, harden or replace"
                - "Estimate replacement weeks and record the decision"
            - name: Second-version request triage
              description: |-
                ## Purpose
                Requests pile up fast once real users arrive, and building the most recent or loudest one is the usual default. Scoring requests against the core bet, how many users asked and the effort involved turns a pile of asks into a short, defensible list for the next cycle.

                ## Milestones
                1. All requests collected in one list with who asked.
                2. Each scored on fit with the bet, number of askers and effort.
                3. The top five chosen for the next build cycle.
                4. Requesters of rejected items told why.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: decision
                success_criteria: "Every request is scored and the next cycle's top five are chosen, with requesters of declined items answered."
                cadence: rolling
              tasks:
                - "Move every feature request into one list with the asker named"
                - "Score each request on bet fit, askers and effort"
                - "Pick the top five for the next build cycle @recurring(monthly:15)"
                - "Reply to people whose request was declined"
            - name: Internal dogfood week before first users
              description: |-
                ## Purpose
                The founders and builders using the product for real work for a week will find the broken paths that tests miss. A dedicated dogfood week before inviting anyone else means the first users meet a product that has at least survived its makers.

                ## Milestones
                1. Every team member using the product for a real task each day for a week.
                2. Issues logged in the bug tracker with severity.
                3. All core-flow blockers fixed before the invite date.
                4. A short note of what felt slow or confusing to the team.
              priority: medium
              deadlineOffsetDays: 35
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A full dogfood week is complete with every core-flow blocker fixed before the first user invite goes out."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Pick a real task each team member will do in the product daily"
                - "Log every issue found during the week with a severity"
                - "Fix all core-flow blockers before the invite date"
                - "Write a short list of what felt slow or confusing"
            - name: First cohort of twenty invited users
              description: |-
                ## Purpose
                Twenty well-chosen users is enough to see whether the core action happens and small enough to talk to every one. Choosing them from people who felt the problem in discovery, onboarding them personally and telling them what you are testing gives the readout real signal.

                ## Milestones
                1. Twenty names chosen who match the target user and felt the problem.
                2. A personal invite and a short welcome message sent to each.
                3. Each user onboarded on a call or with a recorded walkthrough.
                4. Everyone in the cohort reached the value moment at least once or was asked why not.

                ## Notes
                Avoid friends who will be polite. You need people who would be annoyed if the product disappeared.
              priority: high
              deadlineOffsetDays: 42
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "Twenty target users are invited and onboarded, and each has either reached the value moment or been asked why not."
                cadence: one-shot
                effort_hours_estimate: "12"
              tasks:
                - "List twenty people from discovery notes who felt the problem most"
                - "Ask the agent to draft a short personal invite you then edit for each"
                - "Book a fifteen-minute onboarding call with each person"
                - "Follow up with anyone who has not reached the value moment"
            - name: MVP go-live day checklist
              description: |-
                ## Purpose
                Going live with real users is mostly a list of small things that are embarrassing to forget: monitoring on, error alerts routed, support address working, data reset from testing. Running a checklist the day before and on the day keeps the first impression about the product, not the outage.

                ## Milestones
                1. A checklist covering monitoring, alerts, backups, support, test data and rollback.
                2. Every item checked the day before go-live.
                3. Someone on call for the first forty-eight hours.
                4. A short go-live note recording any issues and how they were handled.

                ## Notes
                Start from the **Operational checklist** template. This is the quiet release to your cohort; a public launch is a separate event.
              priority: medium
              deadlineOffsetDays: 42
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "Every checklist item is ticked the day before go-live and a go-live note records the first forty-eight hours."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Write the go-live checklist from monitoring to rollback"
                - "Clear test accounts and data from production"
                - "Send a test message to the support address and error alerts"
                - "Agree who is on call for the first forty-eight hours"
            - name: Two-week readout against the thresholds
              description: |-
                ## Purpose
                Two weeks after the cohort goes live, the team needs to look at the primary measure and compare it with the pass and fail lines set before launch. Doing this as a dated meeting with the numbers prepared, rather than a running impression, is what makes the MVP an experiment and not just a product.

                ## Milestones
                1. The primary measure pulled for the agreed window and sample.
                2. The result placed against the pass line, fail line and grey zone.
                3. Supporting evidence from interviews and session notes summarised in a page.
                4. The pre-agreed next step for that outcome confirmed or the change justified in writing.
              priority: high
              deadlineOffsetDays: 60
              frontmatter:
                mode: event
                output_kind: decision
                success_criteria: "A dated readout compares the primary measure with the pre-set thresholds and records the next step the team agreed."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Book the readout meeting for two weeks after go-live"
                - "Pull the primary measure for the agreed window"
                - "Summarise interview and session evidence on one page"
                - "Record the outcome and the next step the team agreed"
            - name: MVP retrospective with everyone who built it
              description: |-
                ## Purpose
                Retrospectives after the first build are where a team learns how it actually works together under a deadline. Looking at estimates against actuals, which cuts were right and which shortcuts hurt gives the next build cycle a better plan and a calmer team.

                ## Milestones
                1. A ninety-minute session with everyone who worked on the build.
                2. Estimates compared with actuals from the build notes.
                3. Three things to keep and three to change agreed.
                4. The changes written into the plan for the next cycle.
              priority: low
              frontmatter:
                mode: event
                output_kind: knowledge
                success_criteria: "A retrospective is held with all builders and three agreed changes appear in the next cycle's plan."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Book a ninety-minute retrospective with everyone who built the MVP"
                - "Pull estimates and actuals from the build notes"
                - "Agree three things to keep and three to change"
                - "Add the three changes to the next cycle's plan"
            - name: Live demo of the working MVP for investors
              description: |-
                ## Purpose
                A demo of real software with real users behind it carries far more weight with investors and accelerator panels than a deck. Preparing a three-minute live walkthrough with a backup recording and the readout numbers ready turns the MVP into fundraising evidence.

                ## Milestones
                1. A three-minute demo script following the core flow.
                2. A seeded demo account that never shows test junk.
                3. A recorded backup of the demo in case of network trouble.
                4. Readout numbers on one slide to show after the demo.
              priority: low
              deadlineOffsetDays: 90
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A rehearsed three-minute live demo, a backup recording and a one-slide readout are ready for the dated meeting."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Write a three-minute demo script along the core flow"
                - "Set up a seeded demo account with realistic data"
                - "Record a backup video of the full demo"
                - "Rehearse the demo three times in front of a colleague"
            - name: Engineer founder's guard against over-building
              description: |-
                ## Purpose
                Engineers who found companies often build what is interesting rather than what tests the bet: a scalable architecture for ten users, a custom design system, a perfect test suite. A few explicit rules, reviewed weekly with a co-founder or adviser, keep the craft pointed at learning.

                ## Milestones
                1. Three personal rules written, such as no new infrastructure without a user asking.
                2. A co-founder or adviser agreed as the weekly challenger.
                3. Each week's work checked against the rules.
                4. Time split between building and talking to users recorded for a month.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Three written anti-over-building rules are checked weekly with a challenger, and a month of build versus user time is recorded."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Write three rules that stop you building beyond the bet"
                - "Ask a co-founder or adviser to challenge your week"
                - "Check the week's work against your rules @recurring(weekly:mon)"
                - "Record hours spent building versus talking to users"
            - name: Solo founder building the MVP alone
              description: |-
                ## Purpose
                Building alone means every hour of code is an hour not spent with users, and nobody notices when scope drifts. Splitting the week deliberately, choosing tools that remove whole categories of work and finding one outside person to report to keeps a solo build small and moving.

                ## Milestones
                1. A weekly split between building, user conversations and admin written down.
                2. Managed services chosen for login, hosting and email so none are built.
                3. An accountability partner who receives a weekly progress note.
                4. A ship date small enough for one person to hit.
              priority: medium
              frontmatter:
                mode: building
                output_kind: habit
                success_criteria: "A written weekly time split, managed services for login, hosting and email, and a weekly progress note sent to an outside partner."
                cadence: phased
                effort_hours_estimate: "5"
              tasks:
                - "Decide how many hours a week go to building versus users"
                - "Pick managed services so you build no login, hosting or email"
                - "Ask one founder friend to receive a weekly progress note"
                - "Send your progress note @recurring(weekly:fri)"
            - name: Ten-hour-a-week MVP alongside a day job
              description: |-
                ## Purpose
                With ten or fifteen hours a week, a normal MVP plan takes half a year and momentum dies. Scoping for evenings and weekends means a smaller bet, a no-code or concierge first version, fixed build blocks and a check of your employment contract before you write a line.

                ## Milestones
                1. Your employment contract checked for clauses on side work and IP, with advice if unclear.
                2. Two fixed weekly build blocks protected in the calendar.
                3. A bet and must list small enough to ship in eight weeks of those blocks.
                4. Work kept on your own devices and accounts, not your employer's.

                ## Notes
                Many contracts claim inventions made in work time or with work equipment. Read yours and ask an employment lawyer if the wording worries you.
              priority: medium
              frontmatter:
                mode: building
                output_kind: habit
                success_criteria: "The employment contract is checked, two weekly build blocks are protected, and the must list fits eight weeks of those blocks."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Read your employment contract for side work and IP clauses"
                - "Block two fixed build sessions in your calendar each week"
                - "Cut the must list until it fits eight weeks of those sessions"
                - "Spend the Saturday block on the next must item @recurring(weekly:sat)"
            - name: Splitting build and customer work between co-founders
              description: |-
                ## Purpose
                Two founders both coding, or both talking to users, leaves half the MVP work undone. Agreeing who owns the build, who owns users and how the two meet each week keeps the product shaped by what users say and the users updated on what ships.

                ## Milestones
                1. One founder named as build owner and one as user owner.
                2. A weekly hand-off where user findings meet the build plan.
                3. Each founder spending at least a few hours a week on the other side.
                4. The split reviewed after the readout.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Build and user ownership are written down, a weekly hand-off has happened every week of the build, and the split is reviewed after the readout."
                cadence: phased
                effort_hours_estimate: "3"
              tasks:
                - "Agree who owns the build and who owns user contact"
                - "Hold a thirty-minute user-to-build hand-off @recurring(weekly:sun)"
                - "Swap seats for a few hours each week to see the other side"
                - "Review the split together after the readout"
            - name: MVP scoping in a regulated domain
              description: |-
                ## Purpose
                Regulated areas such as health, finance, insurance or children's services change what an MVP can be: some features cannot ship without approval, data rules apply from the first user and partners will ask questions early. Mapping which parts of the bet can be tested outside the regulated boundary lets you learn without breaking rules.

                ## Milestones
                1. The regulated activities in the product listed in plain words.
                2. A specialist adviser consulted on which activities need approval or licensing.
                3. An MVP design that tests the bet outside or within an allowed boundary.
                4. Data handling rules for the MVP written and followed.

                ## Notes
                This is planning, not legal advice. Take regulatory questions to a qualified adviser for your country before any user touches the product.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A specialist has reviewed the list of regulated activities and the MVP design records how the bet is tested inside an allowed boundary."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "List which product actions might be regulated in your market"
                - "Book a call with a specialist adviser on those actions"
                - "Redesign the MVP so the bet is tested within allowed limits"
                - "Write the data handling rules every builder must follow"
            - name: Mobile MVP through app store review
              description: |-
                ## Purpose
                Store reviews add days or weeks to a mobile MVP and can reject a build for reasons unrelated to your bet, such as a missing account deletion option or unclear login. Preparing for review early, using test distribution for the first cohort and keeping the first submission minimal stops the store dictating your ship date.

                ## Milestones
                1. The current store guidelines read for the features your app uses.
                2. Test distribution set up so the first cohort can install before public review.
                3. Privacy labels, account deletion and demo login prepared for reviewers.
                4. A first build submitted with time to spare before the public date.

                ## Notes
                Check whether a mobile web app would test the bet just as well. It avoids store review entirely for version one.
              priority: low
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "The first cohort installs through test distribution and a store submission is made with privacy labels, account deletion and reviewer login ready."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "Read the current store guidelines for the features you use"
                - "Set up test distribution for the first cohort"
                - "Prepare privacy labels, account deletion and a reviewer login"
                - "Submit the first build at least two weeks before the public date"
            - name: Feature flags and staged rollout
              description: |-
                ## Purpose
                Flags let a small team ship unfinished or risky features to production switched off, then turn them on for a few users before everyone. Used sparingly, they make the twice-weekly release safer; used carelessly, they become a maze of stale switches nobody dares remove.

                ## Milestones
                1. A simple flag mechanism chosen, built in or from a service.
                2. One risky feature released to a small group before everyone.
                3. Each flag given an owner and a removal date.
                4. A monthly sweep that removes flags past their date.
              priority: low
              frontmatter:
                mode: building
                output_kind: habit
                success_criteria: "At least one feature has gone through a staged rollout and every live flag has an owner and a removal date."
                cadence: rolling
              tasks:
                - "Choose a simple way to switch features on per user"
                - "Release one risky feature to five users before everyone"
                - "Give every flag an owner and a removal date"
                - "Remove flags past their removal date @recurring(monthly:18)"
            - name: Single-user value before network effects
              description: |-
                ## Purpose
                Products that only work once many people are on them, such as collaboration tools, communities or marketplaces, make a terrible MVP if the first user finds an empty room. Designing one useful thing a lone user can do on day one tests the bet while the network is still too small to matter.

                ## Milestones
                1. The value a single user gets with nobody else present written in a sentence.
                2. The MVP's first screen built around that single-user value.
                3. A path from single use to inviting others designed but kept small.
                4. Single-user retention measured separately from network features.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "The MVP delivers a written single-user value on the first screen, and retention for solo users is measured separately."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Write what a user gets from the product with nobody else on it"
                - "Redesign the first screen around that single-user value"
                - "Sketch the simplest way for a user to invite one other person"
                - "Track retention for solo users separately from invited ones"
            - name: Data model and migration plan before real data
              description: |-
                ## Purpose
                Code can be rewritten cheaply; real users' data cannot be reshaped without care. Reviewing the core data model before the first cohort arrives, and setting up versioned migrations and tested restores, avoids the painful weekend when a schema change breaks every account.

                ## Milestones
                1. The core entities and relationships drawn on one page.
                2. Fields that will be hard to change later identified and reviewed.
                3. Versioned migrations in place for every schema change.
                4. A full restore from backup into a fresh environment rehearsed.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A one-page data model is reviewed, all schema changes run as versioned migrations, and a full restore has been rehearsed."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Draw the core entities and relationships on one page"
                - "Mark the fields that would be painful to change later"
                - "Move every schema change into versioned migrations"
                - "Rehearse a full restore into a fresh environment @recurring(quarterly)"
---

# MVP Scoping and Build

This area is for founders and founding engineers who have a validated problem and now need the smallest product that proves or kills the core bet. It starts with foundations (the one-sentence bet, the riskiest assumption, pass and fail lines, a time box, the MVP type and a ruthless cut list), moves through the weekly machinery of building and shipping, the skills of writing stories, instrumenting and testing with users, the build, buy and fake decisions, the dated moments from dogfood week to the readout, variants for solo, part-time and regulated builds, and ends with the specialist work of rollouts, data models and store reviews.

What repeats is the rhythm of a small team shipping: a daily build note, a Monday scope review, Friday demos, twice-weekly releases, weekly bug triage and feedback tagging, and monthly checks on shortcuts, spend, access and feature flags. The Risk register, Product spec, Feedback themes, Purchase decision, Vendor and Operational checklist templates pair with the projects that name them. Installing adds all 50 projects as active, so archive the ones that are not for you yet.
