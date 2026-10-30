---
id: product-management.new-user-activation-flows
name: New User Activation Flows
description: "An activation definition that predicts retention, a measured path from sign-up to first value, weekly funnel reviews and the onboarding fixes that get more new users to the moment the product clicks."
category: business
version: 1.0.0
tags: [product-management, new-user-activation-flows, team, founder, activation, onboarding, time-to-value, funnel-analysis]
author: Aurum Technology
starter_structure:
  templates:
    - metrics-log
    - operational-checklist
    - feedback-themes
    - product-spec
    - meeting-notes
    - onboarding-30-60-90
  pillars:
    - name: Product Management
      emoji: "🧩"
      description: "Deciding what to build and why: discovery and research, roadmaps and prioritisation, specs and launches, pricing and packaging, product analytics, and the feedback loops that keep a product honest."
      pillarFrontmatter:
        review_cadence: monthly
      areas:
        - name: New User Activation Flows
          description: "Designing the path from sign-up to first real value, measuring where new users drop off and improving the steps that predict retention."
          projects:
            - name: Activation event definition tied to week-four retention
              description: |-
                ## Purpose
                Most teams call a user activated when they finish a sign-up wizard, which says nothing about whether they will come back. Choosing the early action that best separates users who are still active in week four from those who are not, and writing it down with a time window, gives every onboarding decision a target that matters.

                ## Milestones
                1. Three to five candidate actions listed, each something a new user can do in the first week.
                2. Week-four retention compared for users who did and did not take each candidate action.
                3. One activation event chosen with its count and time window, for example two projects created within seven days.
                4. The definition written on one page with the evidence behind it and approved by the product lead.

                ## Notes
                Correlation is a starting point, not proof. Pick the action that is both predictive and something the product can genuinely help users reach.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A one-page activation definition naming the event, the count and the window, with retention evidence, approved by the product lead."
                cadence: one-shot
                effort_hours_estimate: "10"
              tasks:
                - "List five early actions you suspect separate keepers from leavers"
                - "Pull week-four retention for users who did and did not do each action"
                - "Pick the action and window that separate the two groups most clearly"
                - "Write the definition on one page and get product lead sign-off"
            - name: Sign-up to first value flow map
              description: |-
                ## Purpose
                Onboarding usually grows by accretion: a verification email here, a survey there, a tour added after a bad quarter. Mapping every screen, email and decision between the landing page and the activation event, with what the user must type or choose at each one, shows how long the path really is before anyone argues about fixing it.

                ## Milestones
                1. Every screen, modal and email from the sign-up button to the activation event captured in order.
                2. Each step labelled with what the user must enter, choose or wait for.
                3. Branches for different plans, platforms and invited users drawn separately.
                4. The map shared with design and engineering and pinned where the team works.
              priority: high
              deadlineOffsetDays: 14
              frontmatter:
                mode: research
                output_kind: artifact
                success_criteria: "A shared flow map showing every step from sign-up to the activation event, with branches for plans, platforms and invited users."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Screenshot every step of sign-up on a fresh account in a private window"
                - "Label each step with the input or decision it asks for"
                - "Draw the separate branches for invited users and each platform"
                - "Share the map in the team channel and pin it to the onboarding page"
            - name: Onboarding event tracking audit
              description: |-
                ## Purpose
                Funnels are only as good as the events beneath them, and onboarding events break quietly when a screen is redesigned or a step is reordered. Checking that each step in the flow map fires exactly one correctly named event, with the user and account attached, stops the team drawing conclusions from a funnel with holes in it.

                ## Milestones
                1. Each step in the flow map matched to the event that should fire when it is completed.
                2. Every onboarding event fired from a test account and confirmed in the analytics tool.
                3. Missing, duplicated or misnamed events listed with an owner and a fix date.
                4. All fixes shipped and the audit repeated once on a fresh account.

                ## Notes
                Test on every platform and on the invited-user path. Mobile and invite flows are where events most often go missing.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Every step in the flow map fires one correctly named event, confirmed from a test account on each platform, with the audit sheet stored."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Copy the flow map steps into an audit sheet with an expected event column"
                - "Complete onboarding on a test account while watching the live event stream"
                - "Log every missing, duplicated or misnamed event with an owner"
                - "Repeat the test on mobile and the invited-user path after the fixes ship"
            - name: Activation funnel baseline by step
              description: |-
                ## Purpose
                Without a baseline, every change to onboarding is judged on gut feel and the loudest anecdote. A funnel from sign-up to activation, step by step, for the last eight weeks of new accounts shows where the biggest drop sits and gives every later improvement a number to beat.

                ## Milestones
                1. A funnel built from the audited events, from account created to the activation event.
                2. Conversion between each pair of steps shown for the last eight weekly sign-up cohorts.
                3. The single largest drop-off step identified and agreed by the team.
                4. The baseline numbers frozen in a log with the date and the definition used.

                ## Notes
                Start from the **Metrics log** template. Freeze the baseline before changing anything, or you will never know what the first fix achieved.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A step-by-step activation funnel for eight weekly cohorts, with the largest drop-off named and the baseline recorded in a dated log."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Create a metrics log for activation from the template"
                - "Build the step-by-step funnel in the analytics tool for eight weekly cohorts"
                - "Mark the step with the largest drop-off and share it with the team"
                - "Record the baseline conversion for each step with today's date"
            - name: Time to value baseline
              description: |-
                ## Purpose
                Two flows can activate the same share of users while one takes ten minutes and the other takes nine days, and the slow one loses people to every distraction in between. Measuring the median and the slowest quarter of time from sign-up to activation shows whether the problem is people giving up or people never getting round to it.

                ## Milestones
                1. Median time from account creation to the activation event measured for recent cohorts.
                2. The 75th percentile time recorded alongside the median.
                3. The share of activations that happen in the first session noted.
                4. A target time to value agreed and added to the activation log.
              priority: medium
              deadlineOffsetDays: 30
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "Median and 75th percentile time to activation recorded for recent cohorts, with the first-session share and an agreed target in the log."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Export sign-up and activation timestamps for the last eight weeks of accounts"
                - "Calculate the median and 75th percentile time to activation"
                - "Count how many activations happen in the very first session"
                - "Agree a target time to value with the team and log it"
            - name: Fresh account walkthrough and friction log
              description: |-
                ## Purpose
                People who built a product cannot see its onboarding any more, because they skip every step on autopilot. Signing up from scratch on a new email, on a phone and a laptop, and writing down every moment of hesitation, confusion or waiting, produces a list of fixes in an afternoon that no dashboard will show.

                ## Milestones
                1. A full sign-up completed from a new email address on desktop and on a phone.
                2. Every moment of hesitation, unclear copy, wait or dead end written in a friction log.
                3. Each friction item rated for severity and rough effort to fix.
                4. The top five items turned into tickets with owners.

                ## Notes
                Ask someone outside the product team to do the same walkthrough while you watch silently. Their friction list will be different from yours.
              priority: high
              deadlineOffsetDays: 7
              frontmatter:
                mode: research
                output_kind: artifact
                success_criteria: "A friction log from two fresh sign-ups on different devices, with severity ratings and the top five items ticketed."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Sign up with a brand new email address in a private browser window"
                - "Write down every pause, unclear word and wait as it happens"
                - "Repeat the sign-up on a phone over mobile data"
                - "Rate each friction item and ticket the top five"
            - name: Activation owner, metric and target
              description: |-
                ## Purpose
                Onboarding sits between marketing, product, design and lifecycle email, so it often belongs to everyone and therefore nobody. Naming one owner, one metric and a quarterly target, and writing down who else changes the flow and how they coordinate, ends the pattern of three teams shipping onboarding changes in the same week.

                ## Milestones
                1. One person named as owner of the activation rate.
                2. The activation metric and its definition linked from the owner's goals.
                3. A target for the next quarter set from the baseline.
                4. Every team that changes sign-up or onboarding listed with how they give notice.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A named activation owner, a linked metric definition, a quarterly target and a list of teams that must give notice before changing onboarding."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "List every team that has changed sign-up or onboarding in the last year"
                - "Agree one owner for the activation rate with the product lead"
                - "Set next quarter's target from the baseline funnel"
                - "Write the notice rule for onboarding changes and share it"
            - name: Activation baseline by channel and segment
              description: |-
                ## Purpose
                Blended activation rates hide very different stories: paid social sign-ups may activate at a third of the rate of referrals, and solo users differ from teams. Splitting the baseline by acquisition channel, platform and company size shows whether onboarding is failing everyone or failing one group the product was never designed for.

                ## Milestones
                1. Activation rate split by acquisition channel for the last three months.
                2. The same split by platform and by account size or role.
                3. The two weakest segments named with their sign-up volume.
                4. A note on whether each weak segment is worth fixing or is a targeting problem for marketing.
              priority: medium
              deadlineOffsetDays: 45
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "Activation rates by channel, platform and segment recorded, with the two weakest segments named and a fix or retarget decision for each."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Check that acquisition channel is stored on every new account"
                - "Split three months of activation by channel, platform and account size"
                - "Name the two weakest segments and their weekly sign-up volume"
                - "Share the weak segments with marketing to decide fix or retarget"
            - name: Weekly activation funnel review
              description: |-
                ## Purpose
                Activation moves with every campaign, release and outage, and a monthly glance is too slow to catch a broken step. A fifteen-minute weekly look at the latest cohort against the baseline, with one line on what changed and why, keeps the owner close to the numbers without turning it into a meeting.

                ## Milestones
                1. A saved funnel view showing the latest weekly cohort beside the baseline.
                2. A weekly fifteen-minute slot held by the activation owner.
                3. A one-line note logged each week on movement and its likely cause.
                4. Twelve consecutive weekly notes recorded.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Twelve consecutive weekly funnel reviews logged, each with a one-line note on movement and likely cause."
                cadence: rolling
              tasks:
                - "Save a funnel view comparing the latest cohort with the baseline"
                - "Compare last week's sign-up cohort with the baseline and log one line @recurring(weekly:mon)"
                - "Flag any step that moved more than five points to the team channel"
            - name: Monthly sign-up cohort activation report
              description: |-
                ## Purpose
                Weekly cohorts are noisy, especially for smaller products, and leaders need a steadier view to judge whether onboarding work is paying off. A one-page monthly report on activation rate, time to value and the weakest step, compared with last month and the target, gives the product review a fixed agenda item.

                ## Milestones
                1. A one-page report layout with activation rate, time to value and weakest step.
                2. Each report compares the month with the previous month and the quarterly target.
                3. Changes shipped that month listed beside the numbers.
                4. Six monthly reports delivered to the product review.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: deliverable
                success_criteria: "Six consecutive monthly activation reports delivered, each comparing rate, time to value and weakest step with last month and target."
                cadence: rolling
              tasks:
                - "Draft the one-page report layout and agree it with the product lead"
                - "Write and send the monthly activation report to the product review @recurring(monthly:4)"
                - "List the onboarding changes shipped that month beside the numbers"
            - name: Weekly first-session recording review
              description: |-
                ## Purpose
                Funnels say where users drop, recordings show why: the hovering over an unclear button, the tab switch to check an email that never arrived, the rage clicks on a disabled field. Watching five first sessions of users who did not activate each week builds a running list of causes the team can actually fix.

                ## Milestones
                1. Session recording set up for first sessions with sensitive fields masked.
                2. A saved filter for first sessions of users who did not activate.
                3. Five recordings watched each week with observations logged.
                4. Recurring causes grouped and the top three turned into tickets each month.

                ## Notes
                Mask passwords, payment fields and free-text inputs before recording anything, and check your privacy notice covers it.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "At least 40 first-session recordings of non-activators reviewed over eight weeks, with grouped causes and three tickets raised."
                cadence: rolling
              tasks:
                - "Confirm the recording tool masks passwords and free-text fields"
                - "Save a filter for first sessions of users who did not activate"
                - "Watch five non-activator first sessions and log what stalled them @recurring(weekly:thu)"
                - "Ask the agent to group the month's recording notes into recurring causes"
            - name: New-user support conversation review
              description: |-
                ## Purpose
                New users who write to support in their first week are telling you exactly where onboarding failed them, and their tickets are usually tagged by the support tool's categories rather than by onboarding step. Reading first-week conversations once a month and mapping each to a step in the flow puts their words beside the funnel numbers.

                ## Milestones
                1. A saved view of support conversations from accounts under fourteen days old.
                2. Each conversation in the month mapped to a step in the flow map.
                3. The steps with the most conversations compared with the funnel's biggest drops.
                4. One fix or help article agreed each month from the review.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Six monthly reviews of first-week support conversations completed, each mapping conversations to flow steps and agreeing one fix."
                cadence: rolling
              tasks:
                - "Ask support to save a view of conversations from accounts under 14 days old"
                - "Map the month's first-week conversations to steps in the flow map @recurring(monthly:12)"
                - "Agree one fix or help article with support from each review"
            - name: Quarterly sign-up flow regression check
              description: |-
                ## Purpose
                Sign-up breaks in ways nobody notices for weeks: the verification email lands in spam for one provider, a password rule rejects a valid input, a browser update hides the submit button. A quarterly scripted pass through every sign-up route, on the main browsers and devices, catches these before the funnel does.

                ## Milestones
                1. A written checklist covering every sign-up route, email delivery and password reset.
                2. The checklist run on the main desktop browsers and both mobile platforms.
                3. Verification emails tested against the three largest email providers among your users.
                4. Every failure ticketed and retested before the quarter's report.

                ## Notes
                Start from the **Operational checklist** template.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "The sign-up checklist run every quarter across main browsers, mobile platforms and email providers, with each failure fixed and retested."
                cadence: cyclic
              tasks:
                - "Write the sign-up regression checklist from the operational checklist template"
                - "Find the three most common email domains among new accounts"
                - "Run the full checklist on each browser, platform and email provider @recurring(quarterly)"
                - "Retest every failure once the fix ships"
            - name: Onboarding change log with dashboard annotations
              description: |-
                ## Purpose
                Six months on, nobody remembers why activation jumped in March or dipped in May, and the team repeats experiments it already ran. A simple dated log of every change to sign-up and onboarding, mirrored as annotations on the funnel chart, turns the history of the flow into something the next person can read.

                ## Milestones
                1. A log with date, change, owner and the step affected.
                2. Changes from the last six months backfilled from release notes.
                3. Each logged change added as an annotation on the activation chart.
                4. The log checked against release notes every month.
              priority: low
              frontmatter:
                mode: operating
                output_kind: artifact
                success_criteria: "A change log covering at least six months of onboarding changes, each mirrored as an annotation on the activation chart."
                cadence: rolling
              tasks:
                - "Create the change log with date, change, owner and step columns"
                - "Backfill six months of onboarding changes from the release notes"
                - "Add each logged change as an annotation on the activation chart"
                - "Check the month's release notes for unlogged onboarding changes @recurring(monthly:27)"
            - name: First fourteen days activation email sequence
              description: |-
                ## Purpose
                Most new users leave the product within minutes and only return if something brings them back with a reason. A short sequence of emails over the first fourteen days, each triggered by what the user has or has not done yet and pointing to the single next step, rescues users who meant to come back and never did.

                ## Milestones
                1. Three to five emails defined, each tied to a behaviour trigger rather than a fixed day alone.
                2. Every email points to one next step with a link straight to it.
                3. Emails stop as soon as the user activates.
                4. Click-through and activation within two days of each email measured monthly.

                ## Notes
                Fewer, triggered emails beat a daily drip. Respect the user's marketing preferences and keep a clear unsubscribe in every message.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A live sequence of three to five behaviour-triggered emails that stops on activation, with monthly click and activation figures logged."
                cadence: rolling
              tasks:
                - "List the current onboarding emails with their triggers and send days"
                - "Rewrite each email around one next step with a direct link"
                - "Set every email to stop sending once the user activates"
                - "Review click-through and activation after each email @recurring(monthly:18)"
            - name: Sign-up and activation drop alerts
              description: |-
                ## Purpose
                When a release breaks the sign-up form on a Friday evening, a weekly review finds out on Monday after thousands of lost sign-ups. Alerts on hourly sign-up volume and first-step completion, set against normal ranges for the time of day, catch outages and broken releases while they can still be rolled back.

                ## Milestones
                1. Normal hourly ranges for sign-ups and first-step completion worked out from recent weeks.
                2. Alerts set to fire when either falls well below the normal range.
                3. Alerts routed to an on-call channel with a named first responder.
                4. One deliberate test alert fired and acknowledged.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Sign-up and first-step alerts live, routed to a named responder, tested once and reviewed every quarter."
                cadence: rolling
              tasks:
                - "Chart hourly sign-ups by weekday for the last four weeks"
                - "Set alerts for sign-ups and first-step completion below the normal range"
                - "Route the alerts to on-call with a named first responder"
                - "Review alert thresholds and false alarms with engineering @recurring(quarterly)"
            - name: Monthly interviews with users who did not activate
              description: |-
                ## Purpose
                Users who signed up and left are the hardest to reach and the most useful to hear from, because they wanted something the product did not deliver in time. Three short calls a month with recent non-activators, offered a small thank-you, reveal mismatched expectations and missing steps that recordings cannot.

                ## Milestones
                1. A short invite email and a thank-you offer agreed.
                2. Three calls held each month with users who signed up in the last three weeks and did not activate.
                3. Notes tagged by theme in a shared feedback page.
                4. A quarterly summary of the top themes shared with the team.

                ## Notes
                Start from the **Feedback themes** template. Ask what they were hoping to do that day, not what they think of the product.
              priority: medium
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "At least nine non-activator interviews in a quarter, tagged by theme, with a quarterly summary shared with the team."
                cadence: rolling
              tasks:
                - "Write a three-line interview invite with a small thank-you offer"
                - "Book three calls with recent non-activators @recurring(monthly:9)"
                - "Tag each call's notes by theme in the feedback themes page"
                - "Ask the agent to summarise the quarter's interview themes for the team"
            - name: Activation input to quarterly planning
              description: |-
                ## Purpose
                Onboarding fixes lose to new features in planning because their value is never stated in the same terms. Bringing the activation trend, the biggest drop-off, its estimated size in retained users and two candidate fixes to each quarterly planning round gives onboarding work a fair hearing.

                ## Milestones
                1. A one-page activation brief prepared before each planning round.
                2. The largest drop-off sized in users lost per month.
                3. Two candidate fixes with rough effort and expected lift.
                4. The planning outcome for onboarding work recorded.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: deliverable
                success_criteria: "An activation brief presented at four consecutive quarterly planning rounds, each with its outcome recorded."
                cadence: cyclic
              tasks:
                - "Find the date of the next quarterly planning round"
                - "Size the largest drop-off in users lost per month"
                - "Prepare the activation brief with two candidate fixes @recurring(quarterly)"
                - "Record what planning decided about onboarding work"
            - name: Early behaviour and retention correlation study
              description: |-
                ## Purpose
                The first activation definition is usually a guess with some data behind it, and products change underneath it. Learning to run a proper comparison of early behaviours against retention, with cohorts of enough size and attention to the behaviours users do by accident, makes the definition something the team can defend.

                ## Milestones
                1. A list of ten to fifteen early behaviours exported for recent cohorts.
                2. Retention at week four and week eight compared for users with and without each behaviour.
                3. Behaviours that most retained users share, and most churned users lack, identified.
                4. Findings written up and compared with the current activation definition.

                ## Notes
                Watch for behaviours that only power users do. A behaviour that predicts retention but that only five percent of users ever reach is a poor activation target.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A written comparison of at least ten early behaviours against week-four and week-eight retention, set against the current activation definition."
                cadence: phased
                effort_hours_estimate: "12"
              tasks:
                - "List ten to fifteen behaviours a user can perform in week one"
                - "Export behaviour flags and retention for three months of cohorts"
                - "Compare retention with and without each behaviour"
                - "Rerun the comparison and check the activation definition still holds @recurring(yearly)"
            - name: Funnel reading pitfalls with denominators and windows
              description: |-
                ## Purpose
                Activation numbers can rise while the product gets worse: a change in which sign-ups count, a longer window or a surge of high-intent referrals all flatter the rate. Working through the common mistakes with your own data, on purpose, means the team catches them in reviews instead of celebrating them.

                ## Milestones
                1. The difference between step and overall conversion explained with a worked example from your funnel.
                2. The effect of a 7, 14 and 30-day window on the same cohort shown.
                3. A channel mix shift shown changing the blended rate without any product change.
                4. A one-page note of rules for reading the funnel shared with the team.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A one-page note of funnel reading rules, each illustrated with an example from your own data, shared with the team."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Calculate step and overall conversion for one cohort side by side"
                - "Rerun the same cohort with 7, 14 and 30-day windows"
                - "Show how last quarter's channel mix moved the blended rate"
                - "Write and share a one-page note of funnel reading rules"
            - name: Onboarding pattern library study
              description: |-
                ## Purpose
                Checklists, tours, empty states, templates, progressive disclosure and setup wizards each suit different products, and teams often copy the pattern they saw last rather than the one that fits. Studying when each pattern helps and when it gets in the way, with real examples, makes design choices in this area deliberate.

                ## Milestones
                1. Six common onboarding patterns described with when each fits and when it fails.
                2. Two live examples of each pattern captured from products your users already know.
                3. The patterns your own flow uses marked against the list.
                4. A short note on which pattern fits your activation event and why.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A pattern library covering six onboarding patterns with two examples each and a recommendation for your own flow."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "List the onboarding patterns your current flow already uses"
                - "Capture two live examples of each of six common patterns"
                - "Note when each pattern helps and when it slows users down"
                - "Write a recommendation on which pattern fits your activation event"
            - name: Onboarding microcopy practice
              description: |-
                ## Purpose
                Button labels, field hints and empty state lines carry most of the instruction in onboarding, and vague ones such as Get started or Continue leave users guessing what happens next. Practising specific, action-led copy on your own screens, and testing it on five people, sharpens a skill that pays back on every flow.

                ## Milestones
                1. Every button label and heading in the flow listed in one sheet.
                2. Each vague label rewritten to say what happens next.
                3. Rewritten copy read by five people outside the team, with what they expected noted.
                4. The strongest rewrites shipped and logged in the change log.
              priority: low
              frontmatter:
                mode: learning
                output_kind: artifact
                success_criteria: "A copy sheet for the whole flow with rewrites tested on five people and the strongest ones shipped."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Copy every button label and heading in the flow into one sheet"
                - "Ask the agent to draft three specific alternatives for each vague label"
                - "Show the rewrites to five people and note what they expect to happen"
                - "Ship the strongest rewrites and add them to the change log"
            - name: Dark patterns to keep out of onboarding
              description: |-
                ## Purpose
                Pre-ticked marketing boxes, contact uploads users did not mean to grant, fake progress bars and hidden skip links can lift a metric for a quarter while eroding trust and inviting regulatory complaints. Learning to name these patterns, and auditing your flow against them, gives the team a shared line it will not cross.

                ## Milestones
                1. A list of common deceptive onboarding patterns with a plain description of each.
                2. Your own flow audited against the list, with any matches noted.
                3. Each match replaced or removed, with the reason recorded.
                4. A short design principle added to the onboarding spec.

                ## Notes
                Consent rules for marketing and data sharing vary by country. Check yours with whoever handles privacy or legal matters for the company.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "The onboarding flow audited against a written list of deceptive patterns, with every match removed and a principle added to the spec."
                cadence: phased
                effort_hours_estimate: "5"
              tasks:
                - "Write a list of deceptive onboarding patterns with one example each"
                - "Check every screen in the flow map against the list"
                - "Replace each match and record why in the change log"
                - "Add a one-paragraph design principle to the onboarding spec"
            - name: Sign-up flow teardown of five products
              description: |-
                ## Purpose
                The products your users switch between every day set their expectations for how long setup should take. Signing up for five of them, competitors and admired products outside your category, and recording steps, time and the first moment of value, gives a reference point that is hard to argue with.

                ## Milestones
                1. Five products chosen, at least two outside your own category.
                2. Each sign-up recorded with step count, fields asked and minutes to first value.
                3. One idea worth borrowing and one to avoid noted per product.
                4. A comparison table shared with the team beside your own flow's numbers.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A teardown table of five sign-up flows with steps, fields and minutes to first value, compared with your own and shared."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Pick five products, two of them outside your category"
                - "Sign up for each while timing and screenshotting every step"
                - "Note one idea to borrow and one to avoid for each product"
                - "Share the comparison table beside your own flow's numbers"
            - name: Sign-up form field reduction
              description: |-
                ## Purpose
                Every field on the sign-up form costs some share of people, and many are there because someone once wanted the data for a report nobody reads. Challenging each field, deferring what can be asked later and removing what nobody uses is often the quickest measurable gain in the whole area.

                ## Milestones
                1. Every sign-up field listed with who asked for it and where the data is used.
                2. Each field marked keep, defer to later in onboarding, or remove.
                3. The shorter form shipped behind a flag or as a test.
                4. Sign-up completion compared before and after, with the result logged.
              priority: high
              deadlineOffsetDays: 45
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "A shorter sign-up form shipped with every removed or deferred field justified and completion compared with the baseline."
                cadence: one-shot
                effort_hours_estimate: "10"
              tasks:
                - "List every sign-up field with its requester and where the data is used"
                - "Mark each field keep, defer or remove with the data owner"
                - "Ship the shorter form behind a flag to part of new traffic"
                - "Compare sign-up completion with the baseline and log the result"
            - name: Social login and single sign-on at sign-up decision
              description: |-
                ## Purpose
                Signing up with an existing work or personal account can remove a password and a verification email in one go, but each provider adds support load, account-linking edge cases and sometimes data the product does not need. Deciding which providers to offer, from your users' actual email domains, avoids both a cluttered screen and a missed easy win.

                ## Milestones
                1. The share of new accounts on each major email provider calculated.
                2. Candidate providers listed with set-up effort and known account-linking issues.
                3. A decision recorded on which providers to offer, if any.
                4. Sign-up completion by method measured after launch.
              priority: medium
              deadlineOffsetDays: 30
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A recorded decision on which sign-in providers to offer, based on new-account email domains, with completion by method measured after launch."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Count new accounts by email domain for the last three months"
                - "List candidate providers with set-up effort and linking edge cases"
                - "Record the provider decision and its reasoning"
                - "Measure sign-up completion by method a month after launch"
            - name: Email verification timing decision
              description: |-
                ## Purpose
                Forcing users to verify their email before they can see the product drops a share of them at the inbox, while never verifying invites fake accounts and bounced emails. Choosing whether to gate, delay or soft-prompt verification, based on your abuse risk and how much the first session needs a confirmed address, settles a common argument with data.

                ## Milestones
                1. The current drop-off at the verification step measured.
                2. Abuse and bounce rates for unverified accounts estimated with engineering.
                3. Options compared: verify first, verify within a grace period, or verify before sharing or inviting.
                4. A decision recorded and the chosen option shipped.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A recorded verification timing decision weighing measured drop-off against abuse and bounce risk, with the chosen option shipped."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Measure how many users never click the verification link"
                - "Ask engineering for abuse and bounce rates on unverified accounts"
                - "Compare gating, a grace period and verify-before-invite"
                - "Record the decision and ship the chosen option"
            - name: Welcome question that routes users by goal
              description: |-
                ## Purpose
                Users arrive wanting different things, and a single onboarding path serves the average user nobody actually is. One or two welcome questions about what they came to do, used to change the first screen, the sample content or the checklist, can shorten the path for each group without building separate products.

                ## Milestones
                1. Three to five common goals identified from interviews and support conversations.
                2. One welcome question drafted with answers that map to those goals.
                3. At least one visible change in the first session for each answer.
                4. Activation by answer measured and compared with the old single path.

                ## Notes
                Only ask what changes the experience. If an answer does not alter anything the user sees, drop the question.
              priority: medium
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "A live welcome question whose answers each change the first session, with activation by answer compared against the single path."
                cadence: phased
                effort_hours_estimate: "16"
              tasks:
                - "List the goals new users mention most in interviews and tickets"
                - "Draft one welcome question with an answer per goal"
                - "Define what changes in the first session for each answer"
                - "Check the mix of answers and activation by answer @recurring(monthly:7)"
            - name: Empty states that teach the first action
              description: |-
                ## Purpose
                New accounts usually open onto blank lists and empty dashboards, which tell the user nothing about what to do. Rewriting each empty screen on the activation path to explain what will appear there and offer one button to make it happen turns dead ends into the next step.

                ## Milestones
                1. Every empty state a new user can reach on the activation path listed.
                2. Each one given a line on what will appear and a single primary action.
                3. Designs reviewed against the activation event to check each points the right way.
                4. The new empty states shipped and clicks on their actions measured.
              priority: medium
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "Every empty state on the activation path shipped with an explanation and one primary action, with clicks on those actions tracked."
                cadence: one-shot
                effort_hours_estimate: "12"
              tasks:
                - "Screenshot every empty screen a brand new account can reach"
                - "Write one explanatory line and one action for each screen"
                - "Check each action leads towards the activation event"
                - "Track clicks on the new empty state actions after release"
            - name: Sample data and starter templates for the first session
              description: |-
                ## Purpose
                Nobody can judge a reporting tool with no data or a planner with no plans, and asking them to build from nothing is where many give up. Offering a realistic sample workspace or a handful of starter templates lets them see the product working in the first minute, then swap in their own material.

                ## Milestones
                1. The first-session screens that look empty or meaningless without data identified.
                2. A sample dataset or three to five starter templates written for the main user goals.
                3. A clear way to clear sample data or replace it with the user's own.
                4. Activation compared for users who did and did not use the samples.

                ## Notes
                Sample data must look real but be obviously sample. Label it clearly so nobody mistakes it for their own records.
              priority: medium
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "Sample data or starter templates live in the first session with a clear way to remove them, and activation compared for users and non-users."
                cadence: phased
                effort_hours_estimate: "20"
              tasks:
                - "List the first-session screens that mean nothing without data"
                - "Write three to five starter templates for the main user goals"
                - "Add a one-click way to clear sample data"
                - "Review which starter templates new users pick and drop the unused ones @recurring(quarterly)"
            - name: Setup checklist with visible progress
              description: |-
                ## Purpose
                When setup needs several steps, such as connecting data, inviting a colleague and creating a first item, users lose track of what is left. A short checklist with visible progress, where every item leads to the activation event and completed steps tick themselves off, gives users a clear finish line.

                ## Milestones
                1. Three to five checklist items chosen, each a step towards the activation event.
                2. A spec written covering placement, auto-completion and how it is dismissed.
                3. The checklist shipped with each item tracked as an event.
                4. Completion of each item and of the whole list measured for a month.

                ## Notes
                Start from the **Product spec** template. Keep vanity items such as uploading a profile photo off the list unless they predict retention.
              priority: high
              deadlineOffsetDays: 60
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "A shipped setup checklist of three to five tracked items leading to activation, with a month of per-item completion data reviewed."
                cadence: phased
                effort_hours_estimate: "24"
              tasks:
                - "Choose three to five steps that lead to the activation event"
                - "Write the checklist spec from the product spec template"
                - "Make each item tick itself off when the event fires"
                - "Review per-item completion after the first month live"
            - name: Product tour keep, cut or replace decision
              description: |-
                ## Purpose
                Multi-step tooltip tours are easy to add and often skipped within two clicks, while still delaying the user's first real action. Measuring how many users finish the current tour and whether finishers activate more than skippers settles whether to keep it, shorten it or replace it with contextual hints.

                ## Milestones
                1. Tour start, skip and finish rates measured for recent cohorts.
                2. Activation compared for finishers, skippers and users who never saw it.
                3. A decision recorded to keep, shorten, replace with contextual hints or remove.
                4. The change shipped and its effect checked after a month.

                ## Notes
                Finishers often activate more simply because they were more motivated to begin with. Treat that comparison as a hint, and test before concluding.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A recorded keep, shorten, replace or remove decision for the product tour, based on measured completion and activation, checked a month after the change."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Pull tour start, skip and finish rates for the last two months"
                - "Compare activation for finishers, skippers and unseen users"
                - "Record the decision with the evidence behind it"
                - "Check activation a month after the tour change ships"
            - name: Data import and first integration during setup
              description: |-
                ## Purpose
                For many products the moment of value only arrives once the user's own data is inside, whether that is a contact list, a calendar or a code repository. Making the first import or integration possible from inside onboarding, with sensible defaults and clear error messages, removes the step where most serious evaluators stall.

                ## Milestones
                1. The share of activated users who imported data or connected an integration measured.
                2. The import and connection steps reached from onboarding without a detour to settings.
                3. Common import errors rewritten with plain fixes the user can act on.
                4. Import success rate and time to activation for importers tracked.
              priority: medium
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "Import or first integration reachable from onboarding with plain error messages, and import success rate tracked for new accounts."
                cadence: phased
                effort_hours_estimate: "30"
              tasks:
                - "Measure how many activated users imported data in their first week"
                - "Move the import or connect step into the onboarding flow"
                - "Rewrite the five most common import errors with plain fixes"
                - "Track import success rate for new accounts after release"
            - name: Teammate invite step placement
              description: |-
                ## Purpose
                In collaborative products, accounts with a second active member retain far better, but asking for invites before the first user has seen any value usually gets skipped or spammed. Deciding where the invite prompt sits, after which action and with what message, balances team activation against the first user's own path.

                ## Milestones
                1. Retention compared for accounts with one versus two or more active members.
                2. The current invite prompt's position, view rate and send rate measured.
                3. Two candidate positions chosen, both after a moment of value.
                4. The better placement shipped and invites accepted per new account tracked.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "An invite placement decision backed by retention by account size and send rates, with invites accepted per new account tracked after the change."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Compare retention for single-member and multi-member accounts"
                - "Measure view and send rates for the current invite prompt"
                - "Pick two placements that come after a moment of value"
                - "Track accepted invites per new account after the change"
            - name: Accessible sign-up and onboarding check
              description: |-
                ## Purpose
                A sign-up form that cannot be completed with a keyboard or screen reader shuts people out entirely, and they rarely show up in recordings or interviews. Checking the whole flow against common accessibility guidelines, with automated tools and a manual keyboard pass, removes barriers that no funnel analysis will reveal.

                ## Milestones
                1. An automated accessibility scan run on every screen in the flow map.
                2. The full flow completed using only a keyboard and with a screen reader.
                3. Colour contrast, error messages and focus order issues listed by severity.
                4. Blocking issues fixed and the keyboard pass repeated.

                ## Notes
                Many countries set accessibility standards for digital services, often based on the WCAG guidelines. Check which apply to your product.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "The sign-up and onboarding flow passes an automated scan and a manual keyboard and screen reader run with no blocking issues left open."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Run an automated accessibility scan on each onboarding screen"
                - "Complete sign-up using only the keyboard and note where focus is lost"
                - "Complete sign-up with a screen reader and note unclear labels"
                - "Fix the blocking issues and repeat the keyboard pass"
            - name: Onboarding redesign launch with a holdout group
              description: |-
                ## Purpose
                Shipping a redesigned onboarding to everyone at once makes it impossible to tell its effect from seasonality or a new campaign. Launching to most new users while keeping a small holdout on the old flow for a set period gives a clean read on whether the redesign improved activation and early retention.

                ## Milestones
                1. The redesign's expected lift and the minimum detectable change written down before launch.
                2. A holdout of new users kept on the old flow, sized with the analyst.
                3. Launch checklist complete, including events for every new step.
                4. Activation and week-four retention compared after the agreed period and the holdout closed.

                ## Notes
                Agree the run time and success measure before launch and do not stop early because the first week looks good.
              priority: medium
              deadlineOffsetDays: 90
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "The redesign launched with a holdout, and activation and week-four retention compared against it after the pre-agreed period."
                cadence: phased
                effort_hours_estimate: "20"
              tasks:
                - "Write the expected lift and the run time before any code ships"
                - "Size the holdout group with the analyst"
                - "Confirm every new step fires its event on a test account"
                - "Compare activation and week-four retention with the holdout"
            - name: Activation fix-it week
              description: |-
                ## Purpose
                Friction logs, recordings and support reviews pile up small fixes that never win a sprint slot on their own. A dedicated week where design and engineering clear the top items, with a before and after for each, often moves activation more than a quarter of feature work and resets the backlog.

                ## Milestones
                1. The week booked with design and engineering at least a month ahead.
                2. A ranked list of small onboarding fixes, each scoped to a day or less.
                3. Fixes shipped during the week, each logged in the change log.
                4. Activation for the following four cohorts compared with the four before.
              priority: medium
              deadlineOffsetDays: 60
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A fix-it week held with at least ten onboarding fixes shipped and logged, and activation compared for four cohorts before and after."
                cadence: one-shot
                effort_hours_estimate: "40"
              tasks:
                - "Book the fix-it week with design and engineering leads"
                - "Rank small fixes from the friction log, recordings and support review"
                - "Scope each fix to a day or less and assign it"
                - "Compare four cohorts before and after the week"
            - name: Team viewing session of new user recordings
              description: |-
                ## Purpose
                Engineers and designers who watch a real new user struggle for two minutes rarely need further persuasion. A ninety-minute session where the whole team watches six first-session recordings together, pausing to note what they see, builds shared ownership of activation in a way no report does.

                ## Milestones
                1. Six recordings picked, covering the largest drop-off steps.
                2. The session held with product, design, engineering and support present.
                3. Observations captured by step during the session.
                4. Three agreed actions with owners sent round the next day.

                ## Notes
                Start from the **Meeting notes** template. Ban solutioning for the first hour; just watch and write.
              priority: low
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A viewing session held with four functions present, six recordings watched and three owned actions circulated the next day."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Pick six recordings from the steps with the largest drop-off"
                - "Invite product, design, engineering and support for ninety minutes"
                - "Capture observations by step in the meeting notes"
                - "Send three actions with owners the next morning"
            - name: Annual activation review and target reset
              description: |-
                ## Purpose
                Over a year the product, the audience and the channels shift, and last year's activation target can become too easy or meaningless. A yearly look at the definition, the rate, time to value and what moved them, ending in a new target, keeps the metric honest and the goal ambitious.

                ## Milestones
                1. A year of monthly activation reports gathered in one place.
                2. The definition checked against fresh retention data.
                3. The three changes with the biggest measured effect listed.
                4. A target for the coming year agreed and recorded.
              priority: medium
              frontmatter:
                mode: event
                output_kind: decision
                success_criteria: "An annual review document covering the definition check, the biggest changes and a new yearly target, approved by the product lead."
                cadence: cyclic
              tasks:
                - "Gather the last twelve monthly activation reports"
                - "Hold the annual activation review and set next year's target @recurring(yearly)"
                - "List the three changes with the largest measured effect"
                - "Record the new target and share it with leadership"
            - name: Founder-led concierge onboarding for the first 100 users
              description: |-
                ## Purpose
                Before a product has enough sign-ups for a funnel to mean anything, the fastest way to learn what activation looks like is to onboard people personally. Offering every new user a short call with a founder, watching them set up and doing by hand what the product cannot yet do, shows which steps to automate first.

                ## Milestones
                1. A booking link offered to every new sign-up within an hour.
                2. Calls held with the first 100 users or as many as accept.
                3. Every step done manually on a call recorded with how often it was needed.
                4. The three most common manual steps turned into product work.

                ## Notes
                This does not scale and is not meant to. Stop once the patterns repeat and the manual steps are clear.
              priority: high
              deadlineOffsetDays: 120
              frontmatter:
                mode: service
                output_kind: knowledge
                success_criteria: "Onboarding calls held with up to 100 new users, with manual steps tallied and the top three turned into product work."
                cadence: phased
                effort_hours_estimate: "60"
              tasks:
                - "Add a call booking link to the welcome email"
                - "Hold the week's onboarding calls and tally manual steps @recurring(weekly:tue)"
                - "Note the moment each user first says something like that is useful"
                - "Turn the three most common manual steps into product tickets"
            - name: Lightweight activation tracking for a solo founder
              description: |-
                ## Purpose
                A founder without an analyst or a data warehouse still needs to know whether new users reach value. A minimal set of four events, a weekly sign-up list checked by hand and a monthly half-hour count of who activated gives enough signal to act on without building infrastructure ahead of need.

                ## Milestones
                1. Four events chosen: account created, first key action, activation event, return visit.
                2. A free or low-cost analytics tool installed with those events firing.
                3. A monthly count of sign-ups and activations recorded in a sheet.
                4. Three months of counts used to choose one onboarding fix.
              priority: medium
              frontmatter:
                mode: building
                output_kind: habit
                success_criteria: "Four onboarding events live, a monthly activation count recorded for three months and one fix chosen from it."
                cadence: rolling
              tasks:
                - "Choose the four events that matter most for activation"
                - "Install a low-cost analytics tool and fire the four events"
                - "Count the month's sign-ups and activations in a sheet @recurring(monthly:15)"
                - "Pick one onboarding fix after three months of counts"
            - name: Inheriting onboarding as a new product manager
              description: |-
                ## Purpose
                Product managers often inherit an onboarding flow shaped by people who have left, with tests half-finished and decisions undocumented. A structured first ninety days, from learning the history to shipping a first measured fix, builds credibility and avoids undoing work that was there for a reason.

                ## Milestones
                1. Conversations held with the previous owner, support, marketing and the lead engineer.
                2. Past tests and their results gathered, including the ones that failed.
                3. The flow map, baseline and activation definition reviewed and either confirmed or questioned.
                4. One measured fix shipped by day ninety.

                ## Notes
                Start from the **Onboarding 30/60/90** template. Ask why each odd-looking step exists before removing it; some protect against fraud or legal risk.
              priority: medium
              deadlineOffsetDays: 90
              frontmatter:
                mode: learning
                output_kind: deliverable
                success_criteria: "A completed 30/60/90 plan with stakeholder notes, a list of past tests and one measured onboarding fix shipped by day ninety."
                cadence: phased
                effort_hours_estimate: "25"
              tasks:
                - "Book thirty minutes with the previous onboarding owner"
                - "Collect every past onboarding test and its result in one page"
                - "Ask why each unusual step exists before changing it"
                - "Ship and measure one fix before day ninety"
            - name: Account activation for B2B admins and end users
              description: |-
                ## Purpose
                In business products the person who signs up is often an admin who configures things and then hands over, while value lands for the colleagues they invite. Tracking admin setup completion and end-user activation as two separate measures, rolled into an account-level definition, stops the team optimising one at the other's expense.

                ## Milestones
                1. Admin setup steps and end-user first value defined separately.
                2. An account counted as activated only when both are reached within a set window.
                3. Accounts stuck at admin setup and accounts stuck at end-user value counted separately.
                4. A different fix chosen for each stuck group.
              priority: medium
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A written account-level activation definition with separate admin and end-user measures, tracked monthly with each stuck group counted."
                cadence: rolling
              tasks:
                - "List the admin setup steps that must happen before colleagues get value"
                - "Define end-user first value separately from admin setup"
                - "Count accounts stuck at each stage @recurring(monthly:22)"
                - "Choose one fix for admin setup and one for end users"
            - name: Invited user first-run experience
              description: |-
                ## Purpose
                Someone joining from a colleague's invite arrives into a workspace already set up, yet many products show them the same blank-slate onboarding as a founding user. Designing a separate first run that explains who invited them, what is already there and the one thing to do first turns invites into active members.

                ## Milestones
                1. Activation rate for invited users measured separately from founding users.
                2. The invite email and landing screen rewritten to name the inviter and the workspace.
                3. Founding-user setup steps hidden from invited users.
                4. Invited-user activation compared before and after the change.
              priority: medium
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "A separate invited-user first run shipped, with invited-user activation measured before and after."
                cadence: one-shot
                effort_hours_estimate: "12"
              tasks:
                - "Measure activation for invited users separately"
                - "Accept an invite on a test account and note every irrelevant setup step"
                - "Rewrite the invite email to name the inviter and workspace"
                - "Compare invited-user activation before and after release"
            - name: Switcher onboarding for users migrating from another tool
              description: |-
                ## Purpose
                Switchers from a competitor arrive with years of data, habits and vocabulary from the old tool, and the generic flow treats them as beginners. A switcher path with an importer for the common source tools, a vocabulary guide and the old tool's familiar views mapped to yours shortens the painful first week.

                ## Milestones
                1. The share of new users switching from another tool, and which tools, estimated from the welcome question or sales notes.
                2. Importers or import guides available for the two most common source tools.
                3. A short guide mapping the old tool's terms and views to yours.
                4. Activation for switchers tracked separately.
              priority: low
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "A switcher path with import support for the two most common source tools and a terms guide, with switcher activation tracked separately."
                cadence: phased
                effort_hours_estimate: "30"
              tasks:
                - "Add a which tool did you use before answer to the welcome question"
                - "Build or document import for the two most common source tools"
                - "Write a one-page guide mapping their terms to yours"
                - "Track activation for switchers as their own segment"
            - name: Activation driver analysis with matched cohorts
              description: |-
                ## Purpose
                Correlation studies tell you activated users did certain things, not that doing them caused retention. Comparing matched groups of users who were similar at sign-up but differed in one behaviour, and backing the strongest findings with a controlled test, separates real levers from behaviours that motivated users happen to show.

                ## Milestones
                1. Two or three candidate drivers chosen from the correlation study.
                2. Matched groups built on channel, plan, segment and first-day activity.
                3. Retention differences for each driver estimated with matched groups.
                4. The strongest driver tested with a controlled nudge and the result recorded.

                ## Notes
                Matching only controls for what you measured. A controlled test remains the standard for a decision that changes the whole flow.
              priority: medium
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A written analysis of at least two activation drivers using matched groups, with the strongest confirmed or rejected by a controlled test."
                cadence: phased
                effort_hours_estimate: "30"
              tasks:
                - "Pick two or three drivers from the correlation study"
                - "Build matched groups on channel, plan, segment and first-day activity"
                - "Estimate the retention difference for each driver"
                - "Design a controlled nudge test for the strongest driver"
            - name: Product-qualified account signals for sales handoff
              description: |-
                ## Purpose
                In products with both self-serve and sales, some newly activated accounts would buy far more with a conversation, and sales calling every sign-up wastes everyone's time. Defining a short set of activation and fit signals that mark an account as worth a human touch, and passing a weekly list to sales, connects onboarding to revenue.

                ## Milestones
                1. Activation and fit signals chosen from accounts that later bought larger plans.
                2. A product-qualified account rule written and agreed with sales.
                3. A weekly list of qualifying accounts delivered to sales.
                4. Conversion of contacted qualified accounts compared with uncontacted ones after a quarter.
              priority: low
              frontmatter:
                mode: service
                output_kind: habit
                success_criteria: "A written qualified-account rule agreed with sales, a weekly list delivered for a quarter and conversion compared for contacted and uncontacted accounts."
                cadence: rolling
              tasks:
                - "Pull the first-month behaviour of accounts that bought larger plans"
                - "Write the qualified-account rule and agree it with the sales lead"
                - "Send the week's qualified accounts to sales @recurring(weekly:wed)"
                - "Compare conversion of contacted and uncontacted accounts after a quarter"
            - name: Bot and junk sign-up filtering for activation metrics
              description: |-
                ## Purpose
                Spam bots, disposable emails and test accounts created by staff can make up a surprising share of sign-ups, dragging down activation and making every change look smaller than it is. Defining what counts as a genuine sign-up, and filtering the rest out of reporting, gives the funnel a denominator the team can trust.

                ## Milestones
                1. Staff, test and internal domain accounts identified and flagged.
                2. Signals for bot and disposable-email sign-ups listed with engineering.
                3. A genuine sign-up rule applied to every activation report.
                4. The share of filtered sign-ups reviewed every month.

                ## Notes
                Keep the filtered accounts in the data and flag them, rather than deleting them, so the rule can be checked and changed later.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A written genuine sign-up rule applied to all activation reports, with the filtered share reviewed monthly for six months."
                cadence: rolling
              tasks:
                - "List staff, test and internal domains to exclude from reporting"
                - "Agree bot and disposable-email signals with engineering"
                - "Apply the genuine sign-up rule to every activation report"
                - "Review the share of filtered sign-ups for new patterns @recurring(monthly:25)"
            - name: Activation value model in retained revenue
              description: |-
                ## Purpose
                Leaders fund what they can price, and a two-point activation gain sounds small until it is translated into retained users and revenue. A simple model linking activation rate to week-twelve retention and average revenue per account, refreshed yearly, lets the team state what each point of activation is worth.

                ## Milestones
                1. Week-twelve retention and revenue compared for activated and non-activated users.
                2. A model estimating retained accounts and revenue per extra point of activation.
                3. The model's assumptions written beside it and reviewed by finance.
                4. The value per point quoted in the next planning brief.

                ## Notes
                Treat the output as an estimate with a range, not a promise. Finance should agree the revenue assumptions before the figure is used in planning.
              priority: low
              frontmatter:
                mode: research
                output_kind: artifact
                success_criteria: "A value model stating retained accounts and revenue per point of activation, with assumptions reviewed by finance and quoted in a planning brief."
                cadence: cyclic
                effort_hours_estimate: "12"
              tasks:
                - "Compare week-twelve retention for activated and non-activated users"
                - "Estimate revenue per retained account with finance"
                - "Calculate the value of one extra point of activation"
                - "Refresh the value model with the latest year of data @recurring(yearly)"
            - name: Adaptive onboarding by predicted intent
              description: |-
                ## Purpose
                Once a product has enough history, signals available at sign-up such as channel, email domain, company size and first clicks can predict which path a user needs. Using a simple, explainable prediction to choose the first screen or checklist, and testing it against the welcome question, personalises onboarding without asking more questions.

                ## Milestones
                1. Sign-up signals available at account creation listed and checked for quality.
                2. A simple, explainable model predicting the user's likely goal built and validated.
                3. The predicted path tested against the welcome-question path for new users.
                4. A decision recorded on whether to keep, combine or drop the prediction.

                ## Notes
                Keep the logic explainable and avoid signals that could treat groups of people unfairly. Let users switch paths easily if the guess is wrong.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A tested comparison of predicted-intent onboarding against the welcome-question path, with a keep, combine or drop decision recorded."
                cadence: phased
                effort_hours_estimate: "40"
              tasks:
                - "List the signals available at the moment an account is created"
                - "Build a simple model predicting the user's likely goal"
                - "Test the predicted path against the welcome-question path"
                - "Record whether to keep, combine or drop the prediction"
---

# New User Activation Flows

New user activation is the stretch between someone creating an account and the first moment they get real value, and it is where most products lose the majority of the people they paid to acquire. This area is for product teams and founders who own that stretch, and it runs from foundations (a definition of activation that predicts retention, a flow map, trustworthy events and a baseline funnel) through the weekly and monthly review machinery, the analysis and design skills that make onboarding work honest, the concrete fixes to forms, empty states, checklists, imports and invites, a few dated events, situations such as concierge onboarding or inheriting the flow, and the specialist work of proving what actually drives activation.

The rhythms are a weekly funnel review and first-session recordings, monthly cohort reports, support reviews and non-activator interviews, a quarterly regression check and planning input, and a yearly reset of the target. The Metrics log, Operational checklist, Feedback themes, Product spec, Meeting notes and Onboarding 30/60/90 templates pair with the projects that need them. Installing adds all 50 projects as active, so archive the ones that are not for you yet.
