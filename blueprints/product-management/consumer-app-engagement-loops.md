---
id: product-management.consumer-app-engagement-loops
name: Consumer App Engagement Loops
description: "A one-page map of your core loops, metrics that tell healthy use from compulsive use, an ethics charter, and the triggers, rewards and social mechanics that bring people back for good reasons."
category: business
version: 1.0.0
tags: [product-management, consumer-app-engagement-loops, team, founder, creative, gamification, social-features, digital-wellbeing]
author: Aurum Technology
starter_structure:
  templates:
    - metrics-log
    - feedback-themes
    - product-spec
    - meeting-notes
    - risk-register
  pillars:
    - name: Product Management
      emoji: "🧩"
      description: "Deciding what to build and why: discovery and research, roadmaps and prioritisation, specs and launches, pricing and packaging, product analytics, and the feedback loops that keep a product honest."
      pillarFrontmatter:
        review_cadence: monthly
      areas:
        - name: Consumer App Engagement Loops
          description: "Designing the triggers, rewards and social mechanics that keep consumer app users engaged, while avoiding manipulative patterns."
          projects:
            - name: Core engagement loop map on one page
              description: |-
                ## Purpose
                Most consumer apps run on two or three loops, such as post, get a reaction, post again, or practise, see progress, practise again, yet few teams have ever drawn theirs. A one-page map of each loop's trigger, action, reward and the thing the user puts back in shows where people drop out of the cycle and gives every later debate a shared picture. Draw it before adding any new mechanic.

                ## Milestones
                1. Every loop the product depends on named, with no more than three treated as core.
                2. Each core loop drawn as trigger, action, reward and investment, with the screen where each step happens.
                3. The step where most users leave each loop marked from real data or a clearly labelled guess.
                4. The map pinned where the product trio and leadership will see it.

                ## Notes
                Draw the loop users actually live, not the one in the pitch deck. If a step only exists on a slide, mark it as missing.
              priority: high
              deadlineOffsetDays: 14
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A one-page map of every core loop, showing trigger, action, reward, investment and the biggest drop-out step, is shared with the product trio."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "List every repeated action a returning user takes in a normal week"
                - "Group those actions into no more than three core loops"
                - "Draw each loop with its trigger, action, reward and investment step"
                - "Mark the step where each loop loses the most people"
                - "Redraw the loop map after the year's biggest release @recurring(yearly)"
            - name: Engagement metric definitions for each loop
              description: |-
                ## Purpose
                Daily active users tells you people opened the app, not that the loop worked. Defining, for each core loop, a completion rate, a frequency measure such as days active out of the last seven, and one quality signal stops the team celebrating opens while the real cycle stalls. Write these down before anyone sets a target.

                ## Milestones
                1. A completion definition for each core loop, counting a cycle only when the trigger was seen and the reward delivered.
                2. A frequency measure chosen per loop, such as days active out of seven or out of twenty-eight.
                3. One quality signal per loop that a compulsive pattern could not fake, such as a saved item or a reply.
                4. All definitions published on the team's metrics page with an owner for each.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "Each core loop has a written completion rate, frequency measure and quality signal, published with a named owner."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Write what counts as a completed cycle for each core loop"
                - "Choose a days-active-out-of-seven or out-of-twenty-eight measure per loop"
                - "Pick one quality signal per loop that rewards value, not minutes"
                - "Publish the definitions and name an owner for each"
            - name: Loop step event tracking check
              description: |-
                ## Purpose
                A loop cannot be measured if the trigger shown, the action taken and the reward delivered are not logged as separate events, and many apps only log the action. Checking each step of each core loop against the event data, and filing tickets for the gaps, is a short job that makes every later analysis possible. Do it before building the baseline.

                ## Milestones
                1. Every step of every core loop matched to a named event, or flagged as missing.
                2. Reward delivery logged separately from the action that earned it.
                3. Missing or duplicate events filed as tickets with an owner and a target sprint.
                4. A test account taken through each loop with every event seen arriving.
              priority: medium
              deadlineOffsetDays: 30
              frontmatter:
                mode: research
                output_kind: artifact
                success_criteria: "Every step of each core loop maps to a working event, confirmed by a test account run, with any gaps ticketed."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Export the current event list from your analytics tool"
                - "Match each loop step on the map to an event name"
                - "File tickets for any trigger, action or reward that is not logged"
                - "Run a test account through each loop and watch the events arrive"
                - "Spot-check that loop events still fire after recent releases @recurring(quarterly)"
            - name: Engagement baseline by loop and user type
              description: |-
                ## Purpose
                Before changing any mechanic, you need to know how often each kind of user completes each loop today. A baseline split by new, casual, regular and power users usually shows that the loop works well for a small core and barely at all for everyone else, which changes where the effort should go. Four weeks of data is enough to start.

                ## Milestones
                1. Four weeks of loop completion and frequency data pulled for each core loop.
                2. Users split into new, casual, regular and power groups using a written rule.
                3. A days-active histogram for each group, showing the shape rather than only the average.
                4. The two loops with the largest gap between power and casual users named.
              priority: medium
              deadlineOffsetDays: 30
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A written baseline of completion and frequency for each core loop, split by four user groups, names the loops with the largest gaps."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Write the rule that sorts users into new, casual, regular and power"
                - "Pull four weeks of loop completion data for each group"
                - "Chart a days-active histogram for each group"
                - "Name the loop with the widest gap between casual and power users"
            - name: Meaningful use versus compulsive use definition
              description: |-
                ## Purpose
                Time in app rises both when people love a product and when they cannot put it down and resent it. Asking users whether a session was worth it, and linking the answers to behaviour, shows which patterns go with value and which go with regret. With that definition written down, an engagement win can be checked rather than assumed.

                ## Milestones
                1. A short in-app question, such as whether the last session was time well spent, running on a small random sample.
                2. Answers joined to session length, time of day and the loop completed.
                3. Patterns linked to regret, such as long late-night sessions, written down.
                4. A one-paragraph definition of meaningful use agreed by the product trio.

                ## Notes
                Ask on a small random sample and cap how often any one person sees the question, or the survey becomes its own annoyance.
              priority: high
              deadlineOffsetDays: 45
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A written definition of meaningful versus compulsive use, based on at least 300 survey answers joined to behaviour, is agreed by the product trio."
                cadence: one-shot
                effort_hours_estimate: "10"
              tasks:
                - "Draft a one-question worth-it survey for a random sample of sessions"
                - "Agree with engineering how answers will be joined to session data"
                - "Ask the agent to summarise the free-text answers into regret and value themes"
                - "Write and agree a one-paragraph definition of meaningful use"
            - name: Ethical engagement charter for the team
              description: |-
                ## Purpose
                Teams under pressure to lift a number reach for fake scarcity, guilt-laden streak messages and endless feeds one small decision at a time, and nobody remembers agreeing to it. A one-page charter with red lines, written before the pressure arrives, gives anyone on the team a document to point at when a proposal crosses one. It also protects the product's standing with users, app stores and regulators, who look harder at manipulative design every year.

                ## Milestones
                1. A list of mechanics the team will not use, such as fake countdowns, shaming copy and hidden opt-outs.
                2. Three or four positive principles, such as users can always stop, pause or leave without penalty.
                3. Extra rules written for younger users and anyone in a vulnerable moment.
                4. The charter signed off by the product lead and linked from the spec template.

                ## Notes
                Keep it to one page. A charter nobody can recite will not stop a bad idea in a design review.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A one-page engagement charter with named red lines and principles is approved by the product lead and linked from the team's spec template."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Collect three engagement tactics from other apps the team found uncomfortable"
                - "Draft a list of red lines and four positive principles"
                - "Add specific rules for younger users and vulnerable moments"
                - "Get the product lead to approve the charter"
                - "Link the charter from the team's spec template"
            - name: Trigger inventory across internal and external cues
              description: |-
                ## Purpose
                Users return because something prompts them: a friend's message, a widget, a reminder, or an internal cue such as boredom on the bus or wanting to know how a plan is going. Listing every external trigger the app sends and every internal moment it hopes to answer shows which loops depend entirely on pings and which have earned a place in someone's routine. Loops that run only on pings stall the moment users mute them.

                ## Milestones
                1. Every external trigger listed, from badges and widgets to friend activity and shared links.
                2. The internal moments each core loop answers written in the user's own words.
                3. Each trigger labelled as user-requested, social or product-initiated.
                4. The loops that rely mostly on product-initiated triggers named.
              priority: medium
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A trigger inventory lists every external cue by type and source and names the loops that depend mainly on product-initiated triggers."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "List every cue the app sends users outside a session"
                - "Write the internal moment each core loop is meant to answer"
                - "Label each trigger as user-requested, social or product-initiated"
                - "Name the loops that would stall if users muted everything"
            - name: Reward inventory sorted by type
              description: |-
                ## Purpose
                Rewards in consumer apps fall into rough families: social ones such as replies and likes, discovery ones such as fresh content, and mastery ones such as progress and completion. Sorting every reward the product gives into these families usually reveals a lopsided product, for example all likes and no sense of getting better. That imbalance is often why engagement feels shallow.

                ## Milestones
                1. Every reward a user can receive listed, from a like to a level-up.
                2. Each reward sorted into social, discovery or mastery.
                3. Each reward marked as predictable or variable, and as earned or given away.
                4. The missing or overloaded family named, with one idea to rebalance it.
              priority: medium
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A reward inventory sorts every reward into social, discovery and mastery families and names the family the product lacks."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "List every reward a user can receive in a normal week"
                - "Sort each reward into social, discovery or mastery"
                - "Mark which rewards are variable and which are predictable"
                - "Write one idea to fill the family the product lacks"
            - name: Pre-launch checklist for new engagement mechanics
              description: |-
                ## Purpose
                New streaks, badges, leaderboards and feeds tend to ship as small tickets that never get the scrutiny a pricing change would. A short checklist that each new mechanic must pass, covering the loop it serves, the quality signal it should move, the charter red lines and the off switch, catches problems while they are still cheap to fix. Ten minutes per mechanic is enough.

                ## Milestones
                1. A checklist of no more than ten questions, including the charter red lines.
                2. A required field for the quality signal and the guardrail each mechanic should move.
                3. A named reviewer outside the team that built the mechanic.
                4. The checklist trialled on the last mechanic shipped.
              priority: high
              deadlineOffsetDays: 45
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A ten-question engagement mechanic checklist exists, has a named reviewer and has been run on at least one shipped mechanic."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Draft ten checklist questions from the charter and metric definitions"
                - "Add a field for the off switch and how to roll the mechanic back"
                - "Name a reviewer from outside the building team"
                - "Run the checklist on the most recent mechanic you shipped"
            - name: Weekly engagement loop health review
              description: |-
                ## Purpose
                Loop problems show up quietly: completion slips a few points, the reward arrives later, or casual users stop finishing the cycle while power users mask it. A thirty-minute weekly look at completion, frequency and the quality signal for each core loop catches these drifts within days instead of at the quarterly review.

                ## Milestones
                1. A weekly dashboard with each core loop's completion, frequency and quality signal.
                2. A standing thirty-minute slot with the product trio.
                3. Any change beyond a written threshold explained or ticketed in the same week.
                4. Twelve consecutive weekly reviews held.

                ## Notes
                Start from the **Metrics log** template. Read the casual group first; power users hide most problems.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Twelve consecutive weekly loop reviews held, each recording the three measures per loop and an explanation for any change beyond threshold."
                cadence: rolling
              tasks:
                - "Build a weekly dashboard with the three measures for each core loop"
                - "Write the threshold that counts as a real change"
                - "Review loop completion, frequency and quality with the trio @recurring(weekly:tue)"
                - "Ticket or explain any loop that moved past the threshold"
            - name: Monthly engagement cohort read by loop
              description: |-
                ## Purpose
                Weekly numbers mix new and old users, so a fresh wave of sign-ups can hide a loop that is wearing out for people who joined six months ago. Reading each core loop by sign-up month, once a month, shows whether the loop still pays off for long-standing users or only for newcomers.

                ## Milestones
                1. Loop completion charted by sign-up month for at least six cohorts.
                2. Older cohorts compared with newer ones at the same age.
                3. Any loop wearing out with tenure named, with a suspected cause.
                4. A one-paragraph monthly note shared with the wider team.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Six monthly cohort reads completed, each comparing loop completion across at least six sign-up cohorts with a written note."
                cadence: rolling
              tasks:
                - "Set up a loop completion chart split by sign-up month"
                - "Compare loop completion across sign-up cohorts at the same age @recurring(monthly:12)"
                - "Write the month's cohort note and post it in the team channel"
            - name: Streak and progression system health check
              description: |-
                ## Purpose
                Streaks and levels are among the most effective mechanics in consumer apps and among the most likely to sour, as users lose a long streak, feel punished and leave. A monthly check of how many streaks break, how long users stay after a break, freeze use and complaints keeps the mechanic motivating rather than a source of dread.

                ## Milestones
                1. Streak length distribution and weekly break rate on one chart.
                2. Return rate in the fourteen days after a broken streak measured.
                3. Freeze or repair use tracked, if the product offers them.
                4. Complaints and reviews mentioning streaks tagged each month.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Monthly streak checks for six months, each recording break rate, post-break return rate and tagged complaints."
                cadence: rolling
              tasks:
                - "Chart current streak lengths and how many break each week"
                - "Measure how many users come back within fourteen days of a broken streak"
                - "Check streak break rates, freeze use and complaints @recurring(monthly:18)"
                - "Raise a ticket when post-break return falls for two months running"
            - name: User wellbeing signal watch
              description: |-
                ## Purpose
                Some of the clearest signs that engagement has tipped into something unhealthy sit in data the team already has: sessions after midnight, single sessions over two hours, dozens of opens a day, or worth-it scores falling while time spent rises. A monthly watch of a few agreed signals gives early warning and the evidence needed to slow a mechanic down.

                ## Milestones
                1. Four or five wellbeing signals agreed, each with a threshold.
                2. A monthly chart for each signal, split by age band where the product knows it.
                3. A written response rule for when a signal crosses its threshold.
                4. Six monthly readings completed and shared with the product lead.

                ## Notes
                Keep this aggregate. The point is to see patterns across the user base, not to watch individuals.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Six monthly wellbeing readings recorded against agreed thresholds, with any breach followed by a written response."
                cadence: rolling
              tasks:
                - "Agree four wellbeing signals and a threshold for each"
                - "Write what the team will do when a threshold is crossed"
                - "Read the wellbeing signals and note any threshold crossed @recurring(monthly:22)"
                - "Share the month's reading with the product lead"
            - name: Content supply check for feed-driven loops
              description: |-
                ## Purpose
                Feeds, discovery tabs and social loops only reward users when there is something fresh and good to see, and supply often falls before anyone notices engagement dropping. A weekly check of new content per active user, the share of sessions that run dry and how fast new posts get a first reaction keeps the loop fed.

                ## Milestones
                1. New items per active user per week tracked for each feed surface.
                2. The share of sessions that reach an empty or repeated feed measured.
                3. Median time from a new post to its first reaction tracked.
                4. A supply threshold written that triggers seeding or curation.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Weekly supply readings for twelve weeks, covering new items per active user, empty-feed sessions and time to first reaction."
                cadence: rolling
              tasks:
                - "Count new items per active user for each feed surface"
                - "Measure how often a session reaches an empty or repeated feed"
                - "Check content supply and the speed of first reactions @recurring(weekly:thu)"
                - "Write the supply level that triggers seeding or editorial curation"
            - name: Fatigue and annoyance signal tracker
              description: |-
                ## Purpose
                Before people leave, they usually start pushing the app away: muting friends, hiding badges, tapping show less, turning off reminders or skipping the celebration screen. Tracking these small refusals monthly, together with what users say in reviews, tells the team which mechanics have outstayed their welcome while there is still time to change them.

                ## Milestones
                1. Every way a user can dismiss, mute or hide a mechanic listed and logged.
                2. Monthly rates for each dismissal type charted.
                3. Store reviews and support tickets about annoyance tagged by mechanic.
                4. The most rejected mechanic named each month with a proposed change.

                ## Notes
                Start from the **Feedback themes** template to tag review and support comments the same way every month.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Monthly fatigue readings for six months, each naming the most rejected mechanic with a proposed change."
                cadence: rolling
              tasks:
                - "List every mute, hide, skip and turn-off control in the app"
                - "Confirm each of those controls is logged as an event"
                - "Chart dismissal rates and tag annoyance comments by mechanic @recurring(monthly:26)"
                - "Propose one change to the month's most rejected mechanic"
            - name: Live event and seasonal content calendar
              description: |-
                ## Purpose
                Consumer apps with a steady rhythm of challenges, themed weeks and seasonal moments give lapsing users a fresh reason to come back without leaning on more reminders. A rolling calendar, planned a quarter ahead and updated monthly, keeps events from colliding, gives design and content time to prepare, and stops the team inventing an event the week before.

                ## Milestones
                1. A twelve-week calendar of planned events, challenges and seasonal moments.
                2. Each event with an owner, a goal and the loop it is meant to refresh.
                3. Content and design deadlines set two weeks before each event.
                4. A short results note written after every event.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A rolling twelve-week event calendar is maintained, with an owner and goal per event and a results note after each one."
                cadence: rolling
              tasks:
                - "Draft a twelve-week calendar of events and seasonal moments"
                - "Give each event an owner, a goal and a target loop"
                - "Update the calendar and confirm next month's event owners @recurring(monthly:5)"
                - "Plan the next quarter's events with design and content @recurring(quarterly)"
            - name: Engagement ideas backlog with a wellbeing score
              description: |-
                ## Purpose
                Ideas for new mechanics arrive constantly, from competitor screenshots to investor suggestions, and are usually ranked only on expected lift. Scoring each idea on both its likely engagement effect and its wellbeing cost, using the charter, brings the uncomfortable ideas to the surface in planning rather than in a press story.

                ## Milestones
                1. One backlog holding every engagement mechanic idea, with its source.
                2. Each idea scored for expected lift, confidence, effort and wellbeing cost.
                3. Any idea that crosses a charter red line marked as rejected, with the reason.
                4. The top three ideas reviewed with the trio each month.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every engagement idea sits in one backlog with a lift and wellbeing score, and the top three are reviewed monthly."
                cadence: rolling
              tasks:
                - "Gather every engagement mechanic idea into one backlog"
                - "Add a wellbeing cost score from one to five beside the lift score"
                - "Reject ideas that cross a charter red line and record why"
                - "Re-score the backlog and pick the top three with the trio @recurring(monthly:8)"
            - name: Quarterly charter review of live engagement mechanics
              description: |-
                ## Purpose
                Mechanics that passed review at launch drift: copy gets punchier, a timer gets shorter, a pop-up gets harder to dismiss. A quarterly walk through every live engagement mechanic against the charter, on a real device and a fresh account, catches the drift and records what was fixed.

                ## Milestones
                1. A list of every live engagement mechanic with its owner.
                2. Each mechanic walked through on a fresh account and compared with the charter.
                3. Breaches logged with an owner and a fix date.
                4. Last quarter's breaches confirmed as fixed.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Four quarterly charter reviews in a year, each covering every live mechanic, with breaches logged and fixed by their due date."
                cadence: cyclic
              tasks:
                - "List every live engagement mechanic and its owner"
                - "Walk each mechanic on a fresh account against the charter @recurring(quarterly)"
                - "Log any breach with an owner and a fix date"
                - "Confirm last quarter's breaches were fixed"
            - name: Intrinsic motivation and self-determination theory for product teams
              description: |-
                ## Purpose
                Self-determination theory holds that lasting motivation comes from autonomy, competence and relatedness, and research on the overjustification effect suggests external rewards can crowd out enjoyment people already had. Teams who understand this design rewards that support what users want to do rather than bribing them, and notice when points start replacing the real reason to show up.

                ## Milestones
                1. The three needs of self-determination theory summarised, with an example from your product for each.
                2. The overjustification effect explained in your own words, with one place it might apply in your app.
                3. Each core loop rated for how well it supports autonomy, competence and relatedness.
                4. One design change proposed for the weakest need.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A written note rates each core loop against autonomy, competence and relatedness and proposes one change for the weakest."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Read an accessible introduction to self-determination theory"
                - "Write one example from your product for each of the three needs"
                - "Rate each core loop against autonomy, competence and relatedness"
                - "Propose one change for the need the product serves worst"
            - name: Variable rewards and reinforcement schedules primer
              description: |-
                ## Purpose
                Unpredictable rewards, the mechanism behind slot machines and the pull-to-refresh feed, produce more persistent behaviour than predictable ones, which is exactly why they need care. Learning how fixed and variable schedules differ, and where variability turns into compulsion, lets the team use novelty and surprise without building a slot machine.

                ## Milestones
                1. Fixed and variable ratio and interval schedules explained with one app example each.
                2. Every variable reward in your product listed from the reward inventory.
                3. A written line drawn between healthy novelty and gambling-like mechanics.
                4. Findings presented to the team in fifteen minutes.

                ## Notes
                Paid randomised rewards raise legal and store policy questions in several markets. Take those to whoever owns compliance rather than settling them here.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A written primer on reinforcement schedules, applied to every variable reward in the product, has been presented to the team."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Read a plain-language summary of reinforcement schedules"
                - "Match each variable reward in your product to a schedule type"
                - "Write where novelty ends and gambling-like design begins for your app"
                - "Present the primer to the team in a fifteen-minute slot"
            - name: Game design basics for non-game apps
              description: |-
                ## Purpose
                Game designers separate the core loop, the thirty-second action repeated constantly, from the meta loop of progression and goals that gives it meaning over weeks. Borrowing this vocabulary, along with frameworks such as mechanics, dynamics and aesthetics, helps a product team design gamification that feels like play rather than a points layer bolted on.

                ## Milestones
                1. Core loop, meta loop and progression explained with an example from a game the team knows.
                2. The mechanics, dynamics and aesthetics framework summarised on one page.
                3. Your own product's core and meta loops written in game design terms.
                4. One place where points or badges are bolted on rather than part of play named.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A one-page note describes the product's core and meta loops in game design terms and names one bolted-on mechanic."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Play one well-regarded casual game for a week and note its loops"
                - "Read a short introduction to the mechanics, dynamics and aesthetics framework"
                - "Describe your product's core and meta loops in those terms"
                - "Name one bolted-on mechanic and suggest how it could become part of play"
            - name: Social reciprocity, status and belonging mechanics study
              description: |-
                ## Purpose
                Social features keep people coming back more reliably than almost any solo reward, because a reply owed or a friend waiting is hard to ignore. The same forces, reciprocity, status and belonging, also produce anxiety when likes are public and silence feels like rejection. Studying how each force works helps the team choose which to build on and how to soften the sharp edges.

                ## Milestones
                1. Reciprocity, status and belonging each explained with two examples from consumer apps.
                2. A known harm of each force written down, such as like-count anxiety or pressure to reply.
                3. Each social mechanic in your product mapped to the force it uses.
                4. One softening change proposed, such as private like counts or read receipts off by default.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A study note maps every social mechanic in the product to reciprocity, status or belonging and proposes one softening change."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Collect two app examples each for reciprocity, status and belonging"
                - "Write down a known harm for each of the three forces"
                - "Map your product's social mechanics to the force each one uses"
                - "Propose one change that softens a social pressure point"
            - name: Engagement loop teardown of five consumer apps
              description: |-
                ## Purpose
                Watching how good consumer apps bring people back, step by step, teaches more than reading about it. Using five apps for two weeks each, from a language learner to a photo sharing app, and drawing their loops on the same template as your own, produces a set of patterns, and a few warnings, the team can refer to for years.

                ## Milestones
                1. Five apps chosen across at least three categories.
                2. Each app used for two weeks, with screenshots of every trigger and reward.
                3. Each app's core loop drawn on the same template as your own map.
                4. A shortlist of five patterns worth borrowing and three to avoid.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Five app teardowns on the same loop template exist, with five patterns to borrow and three to avoid written up."
                cadence: phased
                effort_hours_estimate: "12"
              tasks:
                - "Pick five consumer apps across at least three categories"
                - "Install each on a clean account and screenshot every trigger and reward"
                - "Draw each app's core loop on your loop map template"
                - "Write up five patterns to borrow and three to avoid"
            - name: Engagement metrics and the time-spent trap
              description: |-
                ## Purpose
                Daily over monthly active users, sessions per day, session length and time spent are the usual engagement numbers, and each can rise while the product gets worse for its users. Learning what each metric really measures, where each one misleads and which pairs to read together protects the team from targets that reward compulsion.

                ## Milestones
                1. Stickiness ratio, sessions per day, session length and time spent defined in a sentence each.
                2. One way each metric can rise while the product gets worse written down.
                3. A paired guardrail chosen for each metric, such as worth-it score beside time spent.
                4. A one-page cheat sheet shared with anyone who sets engagement targets.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A one-page engagement metrics cheat sheet, with a failure mode and paired guardrail for each metric, is shared with everyone who sets targets."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Write a one-sentence definition of each common engagement metric"
                - "Note one way each metric can rise while users are worse off"
                - "Choose a paired guardrail for each metric"
                - "Share the cheat sheet with whoever sets engagement targets"
            - name: Reward and progress microcopy without guilt
              description: |-
                ## Purpose
                The words around a reward decide whether it feels like encouragement or pressure: a broken streak message can say you failed, or welcome back, pick up where you left off. Writers, designers and product managers who practise this copy, testing it against the charter, can turn the same mechanic from a nag into something users like.

                ## Milestones
                1. Every message tied to a reward, streak, level or goal collected in one sheet.
                2. Each message rated for guilt, pressure and false urgency.
                3. Rewrites live for the five worst messages.
                4. A short voice guide for celebration and setback copy added to the design system.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: artifact
                success_criteria: "Five rewritten reward or setback messages are live, and a short copy guide for celebrations and setbacks sits in the design system."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Collect every streak, level, goal and celebration message into one sheet"
                - "Rate each message for guilt, pressure and false urgency"
                - "Ask the agent to draft three gentler rewrites of each of the five worst messages"
                - "Add a short celebration and setback voice guide to the design system"
            - name: Streak design decision with freezes and repair
              description: |-
                ## Purpose
                A daily streak can lift return rates sharply, but it also turns a missed day into a loss users feel personally, and many drop out entirely after a long streak breaks. Choosing deliberately between no streak, a daily streak, a weekly streak or a streak with freezes and repair, using your baseline and the charter, avoids shipping the most anxious version by default.

                ## Milestones
                1. Four options written up: no streak, daily, weekly, and daily with freezes and repair.
                2. Expected effects on return, post-break churn and wellbeing estimated for each.
                3. The chosen option recorded with the reasons.
                4. A spec for the chosen design, including an off switch.

                ## Notes
                Start from the **Product spec** template. A weekly streak often keeps most of the benefit with far less pressure on people with irregular lives.
              priority: medium
              deadlineOffsetDays: 60
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A recorded streak decision compares four options with estimated effects, and a spec with an off switch exists for the chosen design."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Write up the four streak options on one page"
                - "Estimate return, post-break churn and wellbeing effects for each option"
                - "Record the chosen option and the reasons in the decision log"
                - "Write the spec for the chosen streak design, including the off switch"
            - name: Leaderboard format decision across friends and leagues
              description: |-
                ## Purpose
                Global leaderboards motivate the top hundred users and quietly discourage everyone else, which is why many apps have moved to small leagues or friends-only boards. Choosing between global, friends-only, weekly leagues or no board at all, based on who your users are and how they compare, gives competition to people who enjoy it without shaming the rest.

                ## Milestones
                1. Global, friends-only, weekly league and no-board options compared.
                2. The share of users who would ever see themselves in the top quarter estimated for each.
                3. An opt-out and a private mode included in every option that could ship.
                4. A decision recorded with the user groups it serves and the ones it risks.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A recorded leaderboard decision compares four formats, estimates visibility for typical users and includes an opt-out."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Sketch global, friends-only, weekly league and no-board options"
                - "Estimate how many users would ever reach the top quarter in each"
                - "Add an opt-out and a private mode to each option"
                - "Record the decision and the user groups it may discourage"
            - name: Natural stopping points in the feed
              description: |-
                ## Purpose
                Endless feeds remove the moment where a user would decide they are done, which lifts time spent and, for many people, regret. Adding natural stopping points, such as an all caught up marker, a session summary or a pause after a set number of items, gives users a clean exit and often costs less engagement than teams fear.

                ## Milestones
                1. Every endless scroll or autoplay surface in the product listed.
                2. One or two stopping point designs prototyped for the main feed.
                3. A test run measuring worth-it score, time spent and next-day return.
                4. A decision recorded on which stopping points to keep.
              priority: medium
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A stopping point design has been tested on the main feed against worth-it score and next-day return, and a keep or drop decision is recorded."
                cadence: phased
                effort_hours_estimate: "16"
              tasks:
                - "List every endless scroll and autoplay surface in the product"
                - "Prototype an all caught up marker for the main feed"
                - "Test the stopping point against worth-it score and next-day return"
                - "Record which stopping points ship and why"
            - name: Surprise moments tied to real accomplishments
              description: |-
                ## Purpose
                Random rewards handed out for opening the app train users to open the app; surprise tied to something they achieved, a hundredth lesson or a personal best, trains them to achieve. Moving the product's surprise moments onto real accomplishments keeps delight in the experience without building a lottery.

                ## Milestones
                1. Every surprise or celebration moment listed with what triggers it.
                2. Moments triggered by opens or idle time flagged for change.
                3. Three new moments designed around real accomplishments.
                4. The new moments shipped and their effect on the quality signal measured.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Three celebration moments now trigger on real accomplishments, and their effect on the loop's quality signal is recorded."
                cadence: phased
                effort_hours_estimate: "12"
              tasks:
                - "List every celebration or surprise moment and what triggers it"
                - "Flag moments triggered only by opening the app"
                - "Design three moments tied to personal bests or completed goals"
                - "Measure each new moment's effect on the loop's quality signal"
            - name: First post to first response creation loop
              description: |-
                ## Purpose
                On social and creative apps, people who post and hear nothing back rarely post twice. Shortening the gap between a newcomer's first post and the first genuine reaction, through better distribution to interested viewers, prompts to friends or welcome replies from the community, is often the cheapest way to start the creation loop.

                ## Milestones
                1. The share of first posts that receive no reaction within twenty-four hours measured.
                2. Second-post rates compared for first posts with and without a reaction.
                3. One distribution change live that shows first posts to likely responders.
                4. The share of unanswered first posts halved, or the reason it was not recorded.

                ## Notes
                Never fake reactions from bots or paid accounts. Users find out, and it breaks trust in every real reaction.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "The share of first posts with no reaction in twenty-four hours is measured before and after one shipped distribution change."
                cadence: phased
                effort_hours_estimate: "20"
              tasks:
                - "Measure how many first posts get no reaction within a day"
                - "Compare second-post rates for answered and unanswered first posts"
                - "Ship one change that shows first posts to people likely to respond"
                - "Review the unanswered first post rate @recurring(monthly:15)"
            - name: Contact discovery and friend graph consent decision
              description: |-
                ## Purpose
                Finding friends is the fastest way to give a social loop something to run on, and contact uploads are also one of the most criticised practices in consumer apps. Deciding how users find people, whether through contact import, username search, invite links or shared interests, and which consent and deletion controls go with each, balances growth of the graph against privacy and the law in your markets.

                ## Milestones
                1. Contact import, username search, invite links and interest matching compared.
                2. Consent wording and data retention written for any option that touches contacts.
                3. A privacy review completed by whoever owns data protection.
                4. A decision recorded, with a delete-my-uploaded-contacts control specified if imports ship.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A recorded friend discovery decision includes consent wording, retention rules and a completed privacy review."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Compare four ways for users to find friends on one page"
                - "Draft consent wording and retention rules for contact import"
                - "Book a privacy review with whoever owns data protection"
                - "Record the decision and specify the contact deletion control"
            - name: Group goals and co-operative mechanics
              description: |-
                ## Purpose
                Competition motivates some people and drives others away, while shared goals such as a team step count, a family reading target or a group streak give belonging without a loser. Trying one co-operative mechanic alongside or instead of a competitive one tests whether working together keeps more casual users coming back.

                ## Milestones
                1. One co-operative mechanic chosen, such as a group goal or shared streak.
                2. Rules written for what happens when one member stops taking part.
                3. The mechanic tested with a sample of users who already have connections in the app.
                4. Return rates for casual users compared with the competitive version.
              priority: low
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A co-operative mechanic has been tested with connected users, and its effect on casual user return is compared with the competitive one."
                cadence: phased
                effort_hours_estimate: "20"
              tasks:
                - "Choose one co-operative mechanic suited to your core loop"
                - "Write what happens when one member of a group drops out"
                - "Test it with users who already have connections in the app"
                - "Compare casual user return against the competitive mechanic"
            - name: User-facing time limits and break controls
              description: |-
                ## Purpose
                Giving users their own controls, such as a daily time reminder, quiet hours, a take-a-break prompt or a way to hide counts, signals that the product respects their time, and app stores and regulators increasingly expect it for younger users. Deciding which controls to offer, where to put them and what the defaults are turns wellbeing from a slogan into settings people can find.

                ## Milestones
                1. A shortlist chosen from time reminders, quiet hours, break prompts and hidden counts.
                2. Defaults agreed, with stricter ones for younger users.
                3. The controls placed within two taps of the main settings screen.
                4. Use of each control tracked for the first two months.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "At least two user-facing time or break controls are live within two taps of settings, with their use tracked for two months."
                cadence: phased
                effort_hours_estimate: "24"
              tasks:
                - "Shortlist the time and break controls that fit your product"
                - "Agree default settings, with stricter ones for younger users"
                - "Place the controls within two taps of the main settings screen"
                - "Track how many users turn each control on in the first two months"
            - name: Retiring a mechanic that inflates time spent
              description: |-
                ## Purpose
                Most products carry at least one mechanic that lifts time spent without lifting value, such as autoplay, a red badge for low-value activity or a guilt message. Testing its removal with a holdout, and judging it on the quality signal and long-term return rather than minutes, often shows the cost is smaller than feared and the trust gain is real.

                ## Milestones
                1. One mechanic chosen using the fatigue tracker and wellbeing signals.
                2. A removal test designed with a holdout and a run of at least four weeks.
                3. Results read on quality signal, worth-it score and four-week return, not only time spent.
                4. A decision recorded to remove, keep or soften the mechanic.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A removal test of one time-inflating mechanic has run for at least four weeks, and a remove, keep or soften decision is recorded."
                cadence: phased
                effort_hours_estimate: "14"
              tasks:
                - "Choose the mechanic that inflates time spent the most"
                - "Design a removal test with a holdout running at least four weeks"
                - "Read the results on quality signal and four-week return"
                - "Record the decision and tell users what changed if it ships"
            - name: Loop design workshop with design and engineering
              description: |-
                ## Purpose
                Engagement loops cross every discipline: design owns the screens, engineering the triggers and data, product the goals and content the words. A half-day workshop where everyone redraws the core loop together, agrees the biggest drop-out step and leaves with three experiments gets the whole group working on the same cycle.

                ## Milestones
                1. A half-day session booked with design, engineering, product and content leads.
                2. The core loop redrawn together, with agreement on the biggest drop-out step.
                3. Three experiment ideas agreed, each with an owner.
                4. Notes shared within two days.

                ## Notes
                Start from the **Meeting notes** template.
              priority: medium
              deadlineOffsetDays: 21
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A half-day loop workshop has been held, the biggest drop-out step agreed and three owned experiments recorded in shared notes."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Book a half-day slot with design, engineering, product and content leads"
                - "Print the loop map and baseline for the room"
                - "Agree the biggest drop-out step and three experiments"
                - "Share the notes with each owner within two days"
            - name: First community challenge week
              description: |-
                ## Purpose
                A week-long challenge, such as seven days of sketches, a reading sprint or a step goal with friends, gives users a reason to come back that feels like an occasion rather than a reminder. Running a first one with clear goals, simple rules and a results review teaches the team what an event can do before investing in a full calendar.

                ## Milestones
                1. A challenge theme, rules and finishing reward chosen.
                2. Goals set for participation and next-month return among participants.
                3. The challenge run for seven days with all daily content ready in advance.
                4. A results note comparing participants with similar non-participants.
              priority: medium
              deadlineOffsetDays: 75
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A seven-day challenge has run, and a results note compares participants' next-month return with similar non-participants."
                cadence: one-shot
                effort_hours_estimate: "20"
              tasks:
                - "Choose a challenge theme and write the rules on one page"
                - "Prepare all seven days of challenge content before launch"
                - "Set the participation and next-month return goals"
                - "Compare participants with similar non-participants a month later"
            - name: Year-in-review recap feature launch
              description: |-
                ## Purpose
                Annual recaps that show users what they listened to, read, ran or made are among the most shared moments in consumer apps, because they reflect the user back to themselves. Delivering one well takes months of preparation: data checks, design, a privacy review and share cards that work on every platform.

                ## Milestones
                1. The recap data points chosen and checked for accuracy against real accounts.
                2. Designs and share cards ready for every platform.
                3. A privacy review done, with nothing shared publicly by default.
                4. The recap launched on a fixed date with share and return rates recorded.
              priority: medium
              deadlineOffsetDays: 150
              frontmatter:
                mode: event
                output_kind: deliverable
                success_criteria: "A year-in-review recap launches on its planned date after a privacy review, with share and return rates recorded."
                cadence: one-shot
                effort_hours_estimate: "60"
              tasks:
                - "Pick the five data points that best reflect a user's year"
                - "Check those figures against ten real accounts for accuracy"
                - "Get the privacy review done before the design is final"
                - "Start the recap data and design work each September @recurring(yearly)"
            - name: Core loop redesign launch with a holdout group
              description: |-
                ## Purpose
                Redesigning the main loop, whether a new feed, a new progress screen or a new social tab, is the highest-stakes engagement change a team makes, and a launch that only watches the first week often mistakes novelty for improvement. Launching with a holdout group kept for at least eight weeks, and rollback criteria agreed in advance, shows whether the redesign really works.

                ## Milestones
                1. Success, guardrail and rollback criteria agreed before launch.
                2. A holdout group kept on the old loop for at least eight weeks.
                3. Week one, four and eight readings recorded for both groups.
                4. A final decision written up, including what the novelty effect looked like.
              priority: high
              deadlineOffsetDays: 90
              frontmatter:
                mode: event
                output_kind: decision
                success_criteria: "The redesign launched with an eight-week holdout, readings at weeks one, four and eight, and a written final decision."
                cadence: phased
                effort_hours_estimate: "30"
              tasks:
                - "Write success, guardrail and rollback criteria before launch"
                - "Agree with engineering how the holdout group will be kept for eight weeks"
                - "Record week one, four and eight readings for both groups"
                - "Write up the final decision and the size of the novelty effect"
            - name: Engagement ethics review with an outside advisor
              description: |-
                ## Purpose
                Teams become blind to their own mechanics, and what felt bold at launch looks normal by the third release. Inviting an outside advisor, such as a digital wellbeing researcher, a child safety specialist or an experienced designer from another company, to review the product once brings fresh eyes and a record that the team asked.

                ## Milestones
                1. An advisor with relevant experience chosen and briefed.
                2. The advisor given a fresh account, the charter and the wellbeing readings.
                3. Findings received in writing.
                4. Each finding answered with a fix, a plan or a reason to decline.
              priority: low
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "An outside advisor has reviewed the product's engagement mechanics, and each written finding has a recorded response."
                cadence: one-shot
                effort_hours_estimate: "10"
              tasks:
                - "Shortlist two advisors with digital wellbeing or child safety experience"
                - "Send the advisor the charter, wellbeing readings and a fresh account"
                - "Collect the advisor's findings in writing"
                - "Record a response to each finding"
            - name: Founder designing the first loop before launch
              description: |-
                ## Purpose
                Founders often launch with a good product and no reason for anyone to come back on day two. Sketching one core loop before launch, deciding the trigger that will bring people back and the reward waiting for them, and testing it with twenty early users, means the first cohort tells you something about engagement and not just interest.

                ## Milestones
                1. One core loop sketched with its trigger, action, reward and investment.
                2. A day-two reason to return written in one sentence.
                3. Twenty early users given the product and their returns tracked for two weeks.
                4. A decision recorded to keep, change or replace the loop.
              priority: medium
              deadlineOffsetDays: 60
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A first core loop has been tested with twenty early users over two weeks, and a keep, change or replace decision is recorded."
                cadence: phased
                effort_hours_estimate: "15"
              tasks:
                - "Write the one sentence that explains why a user comes back on day two"
                - "Sketch the loop's trigger, action, reward and investment"
                - "Give the product to twenty early users and track their returns"
                - "Decide whether to keep, change or replace the loop"
            - name: Indie creator adding light gamification
              description: |-
                ## Purpose
                Solo creators and indie developers rarely have an analyst or a growth team, but they can still add a small, honest layer of progress: a monthly goal, a collection to complete, a simple streak with a freeze. Choosing one light mechanic, building it in a fortnight and watching a few numbers by hand keeps engagement work in proportion to a one-person product.

                ## Milestones
                1. One mechanic chosen that fits the app and stays inside the charter red lines.
                2. The mechanic built and shipped within a fortnight.
                3. Three numbers tracked by hand in a spreadsheet for a month.
                4. A keep or remove decision based on those numbers and user replies.
              priority: low
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "One light gamification mechanic has shipped, three numbers have been tracked for a month, and a keep or remove decision is written down."
                cadence: phased
                effort_hours_estimate: "16"
              tasks:
                - "Pick one light mechanic that suits your app"
                - "Build and ship the mechanic within a fortnight"
                - "Track three numbers by hand in a spreadsheet for a month"
                - "Email ten users to ask what they think of the new mechanic"
            - name: Age-appropriate mechanics for younger users
              description: |-
                ## Purpose
                Streaks, public likes, leaderboards and late-night prompts affect teenagers and children more strongly, and several countries now have age-appropriate design codes or online safety laws that reach apps young people are likely to use. Mapping which mechanics younger users see, setting stricter defaults and getting a specialist to check the plan against the rules in your markets is essential if under-18s use the product at all.

                ## Milestones
                1. The product's age signals reviewed and the share of likely under-18 users estimated.
                2. Every engagement mechanic a younger user can see listed.
                3. Stricter defaults agreed, such as private profiles, no public counts and quiet hours at night.
                4. The plan reviewed by a legal or child safety specialist familiar with your markets.

                ## Notes
                Start from the **Risk register** template. This project organises the work; whether a specific law applies is a question for your legal adviser.
              priority: high
              deadlineOffsetDays: 60
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A list of the mechanics younger users see, with stricter defaults agreed and a specialist review recorded, is held in the risk register."
                cadence: phased
                effort_hours_estimate: "20"
              tasks:
                - "Estimate how many of your users are likely under eighteen"
                - "List every engagement mechanic a younger user can see"
                - "Agree stricter defaults for younger users"
                - "Book a review with a legal or child safety specialist"
                - "Recheck the age-related rules in your main markets @recurring(yearly)"
            - name: Streaks and nudges in health, fitness and learning apps
              description: |-
                ## Purpose
                In health, fitness and learning apps, engagement is close to the outcome itself: the lesson done or the walk taken is what the user came for. That makes streaks and reminders easier to justify here, and it also raises the cost of shame when someone is ill, injured or overwhelmed. Designing rest days, flexible goals and gentle restarts keeps the behaviour going without punishing real life.

                ## Milestones
                1. Rest days or flexible weekly goals built into the streak.
                2. A gentle restart path for users returning after a break of two weeks or more.
                3. Every message checked so none implies the user failed their health or study.
                4. Return after a long break tracked monthly.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Rest days and a gentle restart path are live, and monthly return after a two-week break is tracked."
                cadence: phased
                effort_hours_estimate: "16"
              tasks:
                - "Add rest days or a flexible weekly goal to the streak"
                - "Design a restart screen for users back after two weeks away"
                - "Check every setback message for implied failure"
                - "Review how many users return after a two-week break @recurring(monthly:3)"
            - name: Inheriting a team measured on time spent
              description: |-
                ## Purpose
                Joining a product team whose main target is time spent or sessions per day puts a new manager in an awkward spot: the number is easy to move and not always in users' favour. Spending the first ninety days understanding why the target exists, gathering evidence on meaningful use and proposing a paired guardrail gives a realistic route to a better goal without picking a fight in week one.

                ## Milestones
                1. The history of the time-spent target, and who set it, understood.
                2. Evidence gathered on how time spent relates to value and regret in your product.
                3. A paired guardrail or replacement metric proposed in writing.
                4. The proposal discussed with the target's owner and the outcome recorded.
              priority: medium
              deadlineOffsetDays: 90
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A written proposal for a paired guardrail or replacement for the time-spent target, backed by evidence, has been discussed with its owner."
                cadence: phased
                effort_hours_estimate: "20"
              tasks:
                - "Ask the target's owner why time spent was chosen"
                - "Gather any data linking time spent to user value or regret"
                - "Draft a proposal for a paired guardrail metric"
                - "Book a meeting to discuss the proposal with the target's owner"
            - name: Creator-side loops for community and content apps
              description: |-
                ## Purpose
                In apps built on what users make, from recipes to music to short videos, the creators' loop matters as much as the viewers': post, see who it reached, learn, post again. Giving creators useful feedback, such as reach, saves and comments that teach, rather than a single vanity count, keeps the supply side motivated and less anxious.

                ## Milestones
                1. The creator loop drawn with its trigger, action, reward and investment.
                2. Interviews held with at least eight creators at different levels.
                3. One feedback improvement shipped, such as a weekly creator summary.
                4. Creator posting frequency and drop-off tracked monthly.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Eight creator interviews are written up, one creator feedback improvement has shipped, and monthly creator posting frequency is tracked."
                cadence: phased
                effort_hours_estimate: "24"
              tasks:
                - "Draw the creator loop from one post to the next"
                - "Interview eight creators at different levels about what keeps them posting"
                - "Ship one feedback improvement such as a weekly creator summary"
                - "Check creator posting frequency and drop-off @recurring(monthly:20)"
            - name: Reviving engagement in a mature app with a tired loop
              description: |-
                ## Purpose
                Mature apps often reach a point where the core loop still works for loyal users but no longer excites anyone new, and the team keeps adding reminders to make up the difference. Diagnosing whether the problem is the trigger, the reward, the content supply or the loop itself, before adding anything, points to the real fix, which is often removing friction rather than adding mechanics.

                ## Milestones
                1. Two years of loop completion charted by sign-up cohort.
                2. The tired step named: trigger, action, reward or investment.
                3. Twelve interviews with lapsed and loyal users written up.
                4. One bet chosen to refresh the loop, with a measure and a review date.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A diagnosis naming the tired loop step, backed by two years of cohort data and twelve interviews, leads to one chosen bet with a review date."
                cadence: phased
                effort_hours_estimate: "25"
              tasks:
                - "Chart two years of loop completion by sign-up cohort"
                - "Name the loop step that has worn out the most"
                - "Interview six lapsed and six loyal users"
                - "Choose one bet to refresh the loop and set its review date"
            - name: Social loop coefficient model
              description: |-
                ## Purpose
                Social and sharing loops can be modelled as a funnel that feeds itself: how many users share, how many recipients respond, how many of those return and share again. A simple model of each step's conversion shows which step gives the most lift per point of improvement and stops the team polishing a step that barely matters.

                ## Milestones
                1. Each step of the main social loop measured: share, receipt, response and repeat.
                2. A spreadsheet model computing the loop coefficient from those rates.
                3. The step with the largest effect per point of improvement identified.
                4. The model refreshed each quarter with new data.
              priority: low
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A spreadsheet model of the social loop's conversion steps names the highest-sensitivity step and is refreshed each quarter."
                cadence: phased
                effort_hours_estimate: "12"
              tasks:
                - "Measure the conversion rate for each step of the main social loop"
                - "Build a spreadsheet that computes the loop coefficient"
                - "Test which step moves the coefficient most per point of change"
                - "Refresh the model with the latest quarter's data @recurring(quarterly)"
            - name: Friend density threshold analysis
              description: |-
                ## Purpose
                Many social products find that users with a handful of connections in their first weeks stay far longer than those with none, which is where well-known rules of so many friends in so many days came from. Finding your own threshold, and checking it is not simply a sign of users who were already keen, tells the team how much effort to put into helping new users connect.

                ## Milestones
                1. Connection counts at day fourteen charted against ninety-day engagement.
                2. A candidate threshold identified where the curve flattens.
                3. The result checked against prior intent, such as users who arrived by invite.
                4. The threshold and its caveats written up for the team.
              priority: low
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A written analysis names a friend-count threshold, tests it against prior intent and records the caveats."
                cadence: one-shot
                effort_hours_estimate: "14"
              tasks:
                - "Pull connection counts at day fourteen for a year of sign-ups"
                - "Chart ninety-day engagement against those counts"
                - "Check the result separately for users who arrived through an invite"
                - "Write up the threshold and the reasons it might mislead"
            - name: Progression curve tuning for levels and milestones
              description: |-
                ## Purpose
                Levels, badges and milestones work when the next one always feels reachable, and fail when early levels come too fast and later ones take months. Charting how long users take to reach each level, and retuning the curve so rewards arrive at a steady perceived pace, keeps progression motivating beyond the first few weeks.

                ## Milestones
                1. Median time to reach each level or milestone charted.
                2. Levels where progress stalls or users drop off named.
                3. A retuned curve designed, with a plan so no existing user loses progress.
                4. The new curve shipped and time between levels checked each quarter.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A retuned progression curve has shipped without anyone losing progress, and time between levels is checked each quarter."
                cadence: phased
                effort_hours_estimate: "16"
              tasks:
                - "Chart the median time users take to reach each level"
                - "Name the levels where users stall or drop off"
                - "Design a retuned curve and a plan to protect existing progress"
                - "Check time between levels against the target curve @recurring(quarterly)"
            - name: Feed ranking objective that weighs reported value
              description: |-
                ## Purpose
                Ranking feeds purely on predicted clicks or watch time tends to surface what grabs attention rather than what users are glad they saw. Adding a measure of reported value, such as survey answers, saves or explicit feedback, to the ranking objective, and testing the trade-off openly, is how experienced teams make the loop serve users over the long run.

                ## Milestones
                1. The current ranking objective written down in plain language.
                2. A reported value signal chosen and its coverage measured.
                3. A test of a blended objective run against the current one.
                4. Results on engagement, worth-it score and long-term return reviewed and a decision recorded.

                ## Notes
                Reported value signals are sparse. Check how many ranked items actually carry one before giving it much weight.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A blended ranking objective including a reported value signal has been tested against the current one, with the decision recorded."
                cadence: phased
                effort_hours_estimate: "40"
              tasks:
                - "Write the current feed ranking objective in plain language"
                - "Choose a reported value signal and check how many items it covers"
                - "Run a test of the blended objective against the current one"
                - "Compare reported value and watch time on the ranked feed @recurring(monthly:28)"
---

# Consumer App Engagement Loops

Consumer app engagement loops are the cycles that bring people back: a trigger, an action, a reward and something the user puts in that makes the next visit better. This area is for product teams, founders and the designers, writers and indie makers who shape those cycles, and it runs from foundations (a loop map, metric definitions, a definition of meaningful use and an ethics charter) through weekly and monthly review rhythms, the psychology and game design worth knowing, decisions about streaks, leaderboards, feeds and social features, dated launches and events, situations from a pre-launch founder to apps used by teenagers, and the specialist modelling and ranking work an experienced team takes on.

What repeats is a weekly loop health review and content supply check, monthly cohort, streak, wellbeing, fatigue and backlog reviews, a quarterly charter walk-through and event plan, and the yearly recap and rules check. The Metrics log, Feedback themes, Product spec, Meeting notes and Risk register templates pair with the projects that name them. Installing adds all 50 projects as active, so archive the ones that are not for you yet.
