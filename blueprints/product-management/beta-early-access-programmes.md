---
id: product-management.beta-early-access-programmes
name: Beta & Early Access Programmes
description: "Running betas that answer real questions: goals and exit criteria, recruiting and agreements, feedback and bug channels, weekly review rhythms, and a clear evidence-based call on when a feature is ready for general release."
category: business
version: 1.0.0
tags: [product-management, beta-early-access-programmes, team, founder, beta-testing, early-access, waitlist, release-readiness]
author: Aurum Technology
starter_structure:
  templates:
    - risk-register
    - feedback-themes
    - meeting-notes
    - metrics-log
    - purchase-decision
  pillars:
    - name: Product Management
      emoji: "🧩"
      description: "Deciding what to build and why: discovery and research, roadmaps and prioritisation, specs and launches, pricing and packaging, product analytics, and the feedback loops that keep a product honest."
      pillarFrontmatter:
        review_cadence: monthly
      areas:
        - name: Beta & Early Access Programmes
          description: "Recruiting early users, running a beta with clear goals and feedback channels, and deciding when a feature is ready for general release."
          projects:
            - name: Beta goals and the decisions they inform
              description: |-
                ## Purpose
                Most betas fail quietly because nobody wrote down what they were meant to prove, so they run for months and end when someone gets impatient. Naming two to four questions the beta must answer, each tied to a decision such as pricing, scope or launch date, turns it from a soft launch into an experiment with a finish line.

                ## Milestones
                1. Two to four beta questions written down, each linked to a named product decision.
                2. Each question marked with the evidence that would answer it: usage data, interviews or support load.
                3. A single sentence stating what the beta is not trying to learn.
                4. The goals agreed with the engineering and design leads and pinned where the team works.

                ## Notes
                A good beta question has an answer that could change your plan. If every possible result leads to the same launch, it is a validation ritual, not a goal.
              priority: high
              deadlineOffsetDays: 14
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A one-page note lists two to four beta questions, each tied to a named decision and an evidence source, and is signed off by the product, design and engineering leads."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "List the product decisions still open before general release"
                - "Rewrite the riskiest three as questions a beta could answer"
                - "Name the evidence that would settle each question"
                - "Agree the final goals with the design and engineering leads"
            - name: Choosing closed, open or invite-only beta format
              description: |-
                ## Purpose
                A closed beta of twenty hand-picked accounts, an invite-only beta released in waves and an open beta anyone can join answer very different questions and carry very different support loads. Choosing the format deliberately, against your goals and how much you can support, avoids the common mistake of opening the doors before the product can take the traffic.

                ## Milestones
                1. The three formats compared against the beta goals, support capacity and risk of public exposure.
                2. A format chosen with a target number of participants and the reason written down.
                3. A rule for whether and when the format widens, for example closed to invite-only after four weeks.
                4. The choice shared with support and marketing so their plans match.

                ## Notes
                Closed betas suit unfinished products and deep feedback; open betas suit load testing and demand signals. Starting closed and widening is easier than shrinking an open beta.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A recorded decision names the beta format, the target participant count and the conditions for widening it, and support and marketing have acknowledged it."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Estimate how many beta users support and engineering can realistically help each week"
                - "Compare closed, invite-only and open formats against the beta goals"
                - "Write the chosen format, target size and widening rule in one paragraph"
                - "Share the decision with the support and marketing leads"
            - name: Beta participant profile and cohort size
              description: |-
                ## Purpose
                Inviting whoever is loudest fills a beta with fans and power users who will never show you where newcomers get stuck. A written profile of the accounts you need, with a mix by segment, usage level and setup, and a cohort size that is large enough for the questions you are asking, keeps recruitment honest.

                ## Milestones
                1. A profile describing the behaviours, plan, company size or setup that qualify a participant.
                2. Target proportions written for each segment, such as half new accounts and half established ones.
                3. Exclusions listed: staff, competitors, accounts in a live dispute and anyone with an open escalation.
                4. A cohort size justified against the beta questions, with an allowance for testers who go quiet.

                ## Notes
                Plan for a third or more of invited testers to do very little. Invite more than you need, rather than chasing the same few people.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A written participant profile with segment proportions, exclusions and a justified cohort size is approved by the product lead before invitations go out."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Write the three behaviours that make an account worth inviting"
                - "Set target proportions for each segment in the cohort"
                - "List the accounts and groups to exclude from the beta"
                - "Work out the cohort size with an allowance for quiet testers"
            - name: Beta exit criteria for general release
              description: |-
                ## Purpose
                If the bar for general release is decided at the end, it bends to whatever the beta happened to produce. Writing exit criteria up front, such as a crash-free session rate, a task completion rate, no open severity one bugs and a share of testers who would be disappointed to lose the feature, gives everyone the same finish line before results arrive.

                ## Milestones
                1. Four to six exit criteria written, each with a measurable threshold.
                2. A source named for every criterion: analytics, bug tracker, survey or support queue.
                3. A minimum beta length and minimum active tester count stated alongside the criteria.
                4. The criteria approved by the people who will make the release call.

                ## Notes
                Mix quality, usage and sentiment criteria. A feature can be stable and still unwanted, or loved and still too fragile to release.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "Four to six exit criteria with numeric thresholds and named data sources are approved in writing by the release decision makers before the beta opens."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Draft quality, usage and sentiment criteria for general release"
                - "Set a numeric threshold and data source for each criterion"
                - "Add a minimum beta length and active tester count"
                - "Get written approval from whoever makes the release call"
            - name: Beta agreement, confidentiality and data consent
              description: |-
                ## Purpose
                Everyone in a beta needs to know the feature may change or disappear, what they may share publicly and what data you will collect, and your company needs the same terms recorded. A short beta agreement, reviewed by whoever handles your legal and privacy questions, protects both sides without scaring people off with pages of small print.

                ## Milestones
                1. A plain-language beta agreement covering confidentiality, changes, support levels and data use.
                2. The agreement reviewed by your legal adviser or privacy lead.
                3. A consent step for any recording, session replay or interview that goes beyond normal product use.
                4. A record of which accounts accepted the agreement and when.

                ## Notes
                This is organisational, not legal advice: your adviser decides the wording. Keep a one-paragraph summary at the top so testers actually read it.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A reviewed beta agreement and consent step are live, and every participating account has an accepted-on date recorded."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "List what the beta will collect, record and change during the programme"
                - "Draft a plain-language beta agreement with a summary paragraph"
                - "Send the draft to your legal adviser or privacy lead for review"
                - "Set up a way to record which accounts accepted and when"
                - "Check the agreement still matches what the beta collects @recurring(yearly)"
            - name: Beta roles and a single programme owner
              description: |-
                ## Purpose
                Betas fall between teams: product assumes support is answering testers, support assumes engineering is fixing their bugs, and nobody sends the weekly update. Naming one programme owner and writing down who triages bugs, who answers testers, who reads the data and who signs off release removes most of the dropped balls before they happen.

                ## Milestones
                1. One named owner accountable for the beta from kick-off to close-out.
                2. A short role list covering bug triage, tester replies, data review, updates and release sign-off.
                3. Response time expectations agreed for tester questions and bug reports.
                4. The role list linked from the beta channel so testers and staff can see it.
              priority: medium
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A published role list names the beta owner and the person responsible for each of five duties, with agreed response times."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Name the single owner of the beta programme"
                - "Assign owners for triage, replies, data review, updates and sign-off"
                - "Agree response times for tester questions and bug reports"
                - "Link the role list from the beta channel"
            - name: Beta feedback channels and reporting form
              description: |-
                ## Purpose
                Feedback scattered across email, chat, sales calls and social posts is impossible to count or act on. Setting up one place for discussion, one structured form for bugs and ideas, and a tag that marks every item as beta feedback in your tracker means nothing a tester says is lost, and you can see patterns by week three.

                ## Milestones
                1. A dedicated beta discussion space, such as a private community channel or group.
                2. A short reporting form asking what the tester tried, what happened and what they expected.
                3. An in-product link to the form from every beta screen.
                4. A beta tag applied to every report in the tracker, with a test report filed end to end.

                ## Notes
                Ask for the steps and the expectation, not a rating. A screenshot field doubles the usefulness of bug reports.
              priority: high
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A beta discussion space, a structured reporting form and an in-product link are live, and a test report has reached the tracker with the beta tag."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Create the private discussion space for beta testers"
                - "Build a reporting form asking what was tried, seen and expected"
                - "Add a link to the form on every beta screen"
                - "File a test report and confirm it lands in the tracker with the beta tag"
            - name: Beta risk register and rollback plan
              description: |-
                ## Purpose
                Beta code touches real accounts, and a bad migration or a runaway job can damage data customers depend on. Listing what could go wrong, how you would notice and how you would switch the beta off or restore data, before the first external tester logs in, means a bad day stays a bad day rather than an incident report.

                ## Milestones
                1. A register of the top risks with likelihood, impact and an owner for each.
                2. A tested way to remove beta access for one account or for everyone.
                3. A data restore or repair route agreed with engineering for the riskiest changes.
                4. A short message drafted for testers in case the beta has to be paused.

                ## Notes
                Start from the **Risk register** template. Test the switch-off on a staging account before launch, not during the incident.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A risk register with owners exists, beta access has been removed and restored on a test account, and a pause message is drafted."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "List the five worst things the beta could do to customer data"
                - "Test removing and restoring beta access on a staging account"
                - "Draft the message testers would receive if the beta paused"
                - "Review the beta risk register with engineering @recurring(monthly:10)"
            - name: Beta welcome pack and first-session guide
              description: |-
                ## Purpose
                Testers who cannot find the feature in their first session rarely come back for a second. A short welcome pack that explains what to try first, what is unfinished on purpose, how to report problems and who to contact gets most of the cohort to a first real use within the opening week.

                ## Milestones
                1. A welcome email or page under 400 words, with the three tasks to try first.
                2. A list of known gaps and unfinished areas so testers do not report them twice.
                3. The reporting form, discussion space and contact person linked in one place.
                4. The pack tested on two colleagues who have not seen the feature.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A welcome pack with three first tasks, known gaps and links is sent to every tester, and two fresh colleagues completed the first task from it unaided."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Choose the three tasks every tester should try first"
                - "Write the known gaps list in plain language"
                - "Draft the welcome pack with all links in one place"
                - "Watch two colleagues follow the pack and fix what confused them"
            - name: Early access waitlist and sign-up page
              description: |-
                ## Purpose
                Founders and teams announcing something early need a way to capture interest that also tells them who is interested. A waitlist page that asks two or three qualifying questions, such as role, team size and current tool, gives you a pool you can invite in waves that match your participant profile instead of first come, first served.

                ## Milestones
                1. A sign-up page with a clear promise of what early access includes and when.
                2. Two or three qualifying questions mapped to the participant profile.
                3. An automatic confirmation that sets expectations about timing.
                4. Sign-ups flowing into one list with source and answers recorded.

                ## Notes
                Do not promise a date you cannot keep. Saying invitations go out in waves over the coming months is honest and still works.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A live waitlist page captures qualifying answers and source for every sign-up into one list, with a confirmation message sent automatically."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Write the early access promise in two sentences"
                - "Pick the qualifying questions that match the participant profile"
                - "Set up the confirmation message with honest timing"
                - "Export waitlist sign-ups and remove duplicates @recurring(monthly:25)"
            - name: Internal dogfood round before external testers
              description: |-
                ## Purpose
                Every obvious bug an employee finds is one an external tester never has to waste goodwill on. A one or two week internal round, with staff using the feature for real work and reporting through the same form testers will use, shakes out crashes and confusing copy and proves the feedback pipeline works.

                ## Milestones
                1. Ten or more colleagues outside the build team given access with a task to complete.
                2. All internal reports filed through the external reporting form.
                3. Every severity one and two issue found internally fixed or accepted before external launch.
                4. A one-line verdict from the dogfood round recorded: ready, ready with caveats or not ready.
              priority: medium
              deadlineOffsetDays: 21
              frontmatter:
                mode: operating
                output_kind: deliverable
                success_criteria: "At least ten colleagues outside the build team used the feature for real work, reports went through the external form, and a ready verdict is recorded."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Invite ten colleagues outside the build team to the internal round"
                - "Give each colleague one real task to do with the feature"
                - "Ask colleagues to file every issue through the external form"
                - "Record the ready, caveats or not ready verdict before external invites"
            - name: Weekly beta feedback review
              description: |-
                ## Purpose
                Raw beta feedback goes stale fast: a tester who reports a problem and hears nothing for a month stops reporting. A fixed weekly hour to read every new item, group it into themes, decide an action and reply to the people who raised it keeps testers engaged and turns noise into a ranked list.

                ## Milestones
                1. A recurring weekly review slot with the beta owner and one engineer.
                2. Every new item tagged with a theme and an action: fix, investigate, park or decline.
                3. A theme list showing counts and accounts affected, updated weekly.
                4. Every tester who reported something that week sent a reply.

                ## Notes
                Start from the **Feedback themes** template. Count accounts affected, not reports filed: one vocal tester can file twenty.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Eight consecutive weekly reviews held while the beta runs, each leaving every new item themed and actioned and every reporter replied to."
                cadence: rolling
              tasks:
                - "Set up a feedback themes page for the beta"
                - "Theme and action every new beta feedback item @recurring(weekly:tue)"
                - "Reply to each tester who reported something this week"
                - "Move the top three themes into the findings decision log"
            - name: Beta bug intake and severity triage
              description: |-
                ## Purpose
                Beta bugs need a different path from production bugs: they are expected, but data loss and security issues still need same-day attention. A simple severity scale, a twice-weekly triage and an agreed rule for what stops the beta make sure serious problems are fixed fast while cosmetic ones wait their turn.

                ## Milestones
                1. A four-level severity scale with an example for each level.
                2. A rule naming which severities pause the beta or block release.
                3. Twice-weekly triage held with every new beta bug assigned a severity and owner.
                4. Duplicate reports merged and testers told when their bug is fixed.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every beta bug older than four days has a severity and owner, and no severity one bug has gone more than one working day without action."
                cadence: rolling
              tasks:
                - "Write the four severity levels with one example each"
                - "Agree which severities pause the beta or block release"
                - "Triage new beta bugs and assign owners @recurring(weekly:mon,thu)"
                - "Tell testers when a bug they reported has been fixed"
            - name: Beta participant roster and engagement tracker
              description: |-
                ## Purpose
                Knowing who is actually using the beta, and who signed up and vanished, decides whether your evidence means anything. A roster with each account's segment, start date, last active date and feedback count shows at a glance whether the cohort still matches the profile or has shrunk to five enthusiasts.

                ## Milestones
                1. A roster of every beta account with segment, contact, start date and agreement date.
                2. Last active date and feedback count added for each account.
                3. Accounts flagged as active, quiet or gone, with the definition of each written down.
                4. A weekly count of active accounts by segment compared with the profile.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "The roster shows segment, last active date and status for every beta account, refreshed weekly for the life of the beta."
                cadence: rolling
              tasks:
                - "Build the roster with segment, contact and start date columns"
                - "Write the definitions of active, quiet and gone"
                - "Refresh last active dates and statuses on the roster @recurring(weekly:fri)"
                - "Compare active accounts by segment against the participant profile"
            - name: Nudging quiet beta testers back into use
              description: |-
                ## Purpose
                Quiet testers are not just missing data; they are often the people who hit a wall and gave up, which is exactly what you need to hear. A short personal note asking what got in the way, followed by a decision to help, swap or release them, recovers some of the cohort and tells you why the rest left.

                ## Milestones
                1. Quiet accounts identified from the roster each month.
                2. A short personal note sent to each, asking one question about what stopped them.
                3. Every reply logged as a reason, such as setup, timing, value or a bug.
                4. Accounts that stay quiet released from the beta and replaced from the waitlist.

                ## Notes
                Ask what got in the way, not whether they will try again. The reason is the useful part.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every account marked quiet for two weeks receives a personal note, and the reasons for going quiet are logged for at least half of them."
                cadence: rolling
              tasks:
                - "Write a two-line note asking quiet testers what got in the way"
                - "Send the note to accounts quiet for two weeks @recurring(monthly:14)"
                - "Log each reply as setup, timing, value or bug"
                - "Release persistently quiet accounts and invite replacements"
            - name: Beta tester update emails
              description: |-
                ## Purpose
                People keep giving feedback when they can see it lands. A short weekly email listing what changed in the beta build, which reports led to which fixes and what to try next keeps the cohort engaged and gives you a dated record of how the feature evolved.

                ## Milestones
                1. A fixed format: what changed, what you told us, what to try next.
                2. An update sent every week the beta is live.
                3. Each update credits at least one piece of tester feedback by theme.
                4. An archive of all updates kept in one place for the retrospective.

                ## Notes
                Keep it under 250 words. Private beta updates are not your public changelog; be candid about what is still rough.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A beta update has gone to testers every week the beta is live, each crediting tester feedback, with all issues archived."
                cadence: rolling
              tasks:
                - "Set up the three-part update format"
                - "Send the weekly beta update to all active testers @recurring(weekly:wed)"
                - "Credit at least one tester theme in each update"
                - "File each update in the beta archive"
            - name: Beta office hours with testers
              description: |-
                ## Purpose
                Some of the best beta insight comes from watching a tester share their screen and get stuck, which no form will ever capture. An open half-hour slot each week where testers can drop in with questions gives you live observation, catches setup problems early and makes testers feel heard.

                ## Milestones
                1. A weekly half-hour slot announced in the welcome pack and beta space.
                2. A product person and an engineer attending each session.
                3. Notes from each session with the problems seen and who raised them.
                4. Any problem seen twice moved into the feedback review.

                ## Notes
                Start from the **Meeting notes** template. Ask permission before recording, in line with the beta agreement.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Weekly office hours run for the life of the beta, each with notes on problems seen and any repeated problem moved into the feedback review."
                cadence: rolling
              tasks:
                - "Book a recurring half-hour slot and share the link with testers"
                - "Hold beta office hours and take notes @recurring(weekly:thu)"
                - "Move any problem seen twice into the feedback review"
                - "Ask an engineer to join at least every other session"
            - name: Beta metrics tracked against exit criteria
              description: |-
                ## Purpose
                Exit criteria written at the start only help if someone checks them every week. A small log showing each criterion's current value, threshold and trend tells the team whether general release is weeks or months away, and stops the release date being set by optimism.

                ## Milestones
                1. A log with one row per exit criterion: threshold, current value, trend and source.
                2. Values refreshed weekly from analytics, the bug tracker and surveys.
                3. Criteria marked met, close or far, with a one-line reason.
                4. The log linked from the weekly tester update and the leadership readout.

                ## Notes
                Start from the **Metrics log** template. Record the active tester count beside each value so small samples are obvious.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every exit criterion has a weekly value, threshold and status recorded for the whole beta, with the active tester count beside it."
                cadence: rolling
              tasks:
                - "Create a metrics log with one row per exit criterion"
                - "Find the query or report that produces each value"
                - "Refresh exit criteria values and statuses @recurring(weekly:mon)"
                - "Mark each criterion met, close or far with a reason"
            - name: Waitlist invitation waves
              description: |-
                ## Purpose
                Inviting the whole waitlist at once swamps support and leaves you no fresh testers for the next version. Releasing invitations in planned waves, each sized to support capacity and chosen to fill gaps in the cohort, lets you fix what the last wave found before the next wave meets it.

                ## Milestones
                1. A wave plan with sizes and target segments for the next three waves.
                2. Each wave chosen from the waitlist by qualifying answers, not sign-up order.
                3. A short check after each wave on support load and activation before the next is sent.
                4. Waitlisted people who are not yet invited told roughly where they stand.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "At least three invitation waves sent to plan, each preceded by a support and activation check, with uninvited sign-ups kept informed."
                cadence: cyclic
              tasks:
                - "Plan the size and segments of the next three waves"
                - "Select and send the next invitation wave @recurring(monthly:8)"
                - "Check support load and activation before the following wave"
                - "Send a holding note to people still on the waitlist"
            - name: Beta status readout for leadership and go-to-market teams
              description: |-
                ## Purpose
                Sales, marketing and leadership hear about a beta through hallway rumours unless someone tells them properly, and rumours become promises to customers. A one-page monthly readout covering progress against exit criteria, top themes, risks and the current release estimate keeps expectations in line with evidence.

                ## Milestones
                1. A one-page readout format agreed with the people who receive it.
                2. A readout sent each month the beta is live.
                3. The release estimate stated as a range, with what would move it.
                4. Questions from readers answered and logged for the next issue.

                ## Notes
                Lead with the release estimate and its confidence. Most readers stop after the first paragraph.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A monthly one-page readout with exit criteria status, themes, risks and a release range has gone out for every month the beta runs."
                cadence: rolling
              tasks:
                - "Agree the readout format with the sales and marketing leads"
                - "Ask the agent to draft the monthly readout from the metrics log and themes page"
                - "Send the beta status readout to leadership and go-to-market @recurring(monthly:20)"
                - "Log questions from readers to answer in the next readout"
            - name: Standing beta panel refresh
              description: |-
                ## Purpose
                Standing panels of testers who see every beta go stale: the same people learn your product too well and stop representing new users. Refreshing a share of the panel each quarter, retiring tired testers with thanks and adding fresh accounts from the waitlist, keeps feedback representative.

                ## Milestones
                1. A panel size and a target refresh share, such as a quarter of members each quarter.
                2. Members who have been on the panel longest or contributed least identified.
                3. Retiring members thanked and offered a way to stay in touch.
                4. New members recruited to fill segment gaps.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Each quarter, the agreed share of the beta panel is retired with thanks and replaced with new members who fill a recorded segment gap."
                cadence: cyclic
              tasks:
                - "Decide the panel size and quarterly refresh share"
                - "Refresh the standing beta panel from the waitlist @recurring(quarterly)"
                - "Send thanks to retiring panel members"
                - "Note which segment gaps each new member fills"
            - name: Writing beta questions that get specific answers
              description: |-
                ## Purpose
                Asking testers what they think of the feature produces polite praise and nothing you can act on. Learning to ask about the last time they used it, what they were trying to do and what they did instead gives you stories, steps and workarounds, which are the raw material of good product decisions.

                ## Milestones
                1. Three common question mistakes understood: leading, hypothetical and rating-only.
                2. A bank of ten beta survey and prompt questions written around recent behaviour.
                3. The questions trialled on three testers and rewritten where answers were vague.
                4. The final bank saved for reuse in future betas.

                ## Notes
                Ask about the last time, not usually. Past behaviour is far more reliable than predictions about future use.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A bank of ten behaviour-based beta questions, trialled on three testers and revised, is saved in the beta playbook."
                cadence: phased
                effort_hours_estimate: "5"
              tasks:
                - "Read a short guide on writing non-leading user research questions"
                - "Rewrite five existing survey questions around recent behaviour"
                - "Trial the questions on three testers and note vague answers"
                - "Save the revised bank in the beta playbook"
            - name: Reading small-sample beta data honestly
              description: |-
                ## Purpose
                With thirty testers, one enthusiastic account can swing a completion rate by several points, and a dip in week two may be noise. Learning to report counts alongside percentages, look at individual accounts behind every number and separate the cohort by segment stops a team celebrating or panicking over a handful of users.

                ## Milestones
                1. The habit of writing counts beside every percentage, such as 12 of 30 accounts.
                2. Results split by segment to check one group is not hiding another.
                3. A rule of thumb for when a change is too small to act on in your cohort.
                4. One past beta report rewritten using these habits.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "One beta report has been rewritten with counts beside percentages, segment splits and a stated threshold for meaningful change."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Read an introduction to small samples and confidence for product data"
                - "Add counts beside every percentage in the current beta report"
                - "Split the latest results by segment and compare"
                - "Write your rule for when a change is too small to act on"
            - name: Sorting beta reports into bugs, usability and requests
              description: |-
                ## Purpose
                Beta inboxes mix broken behaviour, confusing design and wishes for features nobody planned, and treating them all as bugs buries the real problems. Practising a quick sort into these three kinds, with a clear test for each, speeds up triage and shows whether the feature is broken, hard to use or simply not what testers wanted.

                ## Milestones
                1. A one-line test for each kind: broken, works but confusing, works but not wanted.
                2. Fifty past reports sorted by two people independently and disagreements discussed.
                3. The test adjusted until both people agree on at least nine in ten.
                4. The sorting test added to the triage and feedback review guides.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Two people sorting the same fifty beta reports agree on at least 45, and the sorting test is written into the triage guide."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Write a one-line test for bug, usability issue and request"
                - "Pull fifty recent beta reports into one sheet"
                - "Sort them separately with a colleague and compare results"
                - "Add the agreed test to the triage guide"
            - name: Facilitating a beta kick-off call
              description: |-
                ## Purpose
                Kick-off calls that are all slides waste the one moment testers are most willing to try things. Learning to run a short call that sets expectations, gets everyone into the feature live and ends with each tester's first task booked lifts first-week activity far more than a longer welcome email.

                ## Milestones
                1. A 30-minute agenda: why we need you, what is rough, try it now, how to report.
                2. A live walkthrough rehearsed with a colleague acting as a tester.
                3. A plan for testers who cannot get in during the call.
                4. One kick-off run and the share of attendees who used the feature that week recorded.
              priority: low
              frontmatter:
                mode: learning
                output_kind: artifact
                success_criteria: "A rehearsed 30-minute kick-off agenda exists and has been used once, with first-week usage among attendees recorded."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Write a 30-minute kick-off agenda with a live try-it section"
                - "Rehearse the walkthrough with a colleague playing a tester"
                - "Prepare a fallback for testers who cannot log in during the call"
                - "Record first-week usage among attendees after the call"
            - name: App store test tracks for mobile betas
              description: |-
                ## Purpose
                Mobile betas run through each app store's own testing tracks, with their own tester limits, review steps and build expiry rules, and teams new to them lose days to rejected builds and expired invites. Learning how your platforms' internal and external test tracks work, and writing it down, makes every mobile beta start on time.

                ## Milestones
                1. The internal and external test tracks for each platform you ship on understood and noted.
                2. Current tester limits, review requirements and build expiry rules checked on each store's developer documentation.
                3. A step-by-step guide for adding testers and publishing a beta build.
                4. One beta build published to a test track using the guide.

                ## Notes
                Store rules change; check the current developer documentation rather than relying on last year's guide.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A written guide to each platform's test tracks, checked against current store documentation, has been used to publish one beta build."
                cadence: phased
                effort_hours_estimate: "5"
              tasks:
                - "Read each store's current documentation on beta test tracks"
                - "Note tester limits, review steps and build expiry rules"
                - "Write a step-by-step guide for publishing a beta build"
                - "Check beta build expiry dates on each test track @recurring(monthly:18)"
            - name: Product-market fit survey for beta users
              description: |-
                ## Purpose
                Usage tells you what testers do, not how much they would miss the feature if it vanished. A short survey asking how disappointed they would be without it, who it is best for and what the main benefit is gives a sentiment signal for the exit criteria and the words your launch messaging should use.

                ## Milestones
                1. A survey of four or five questions, including how disappointed testers would be without the feature.
                2. The survey sent only to testers who have used the feature at least a set number of times.
                3. Results split by segment, with counts beside percentages.
                4. The benefit phrases testers used most passed to whoever writes launch copy.

                ## Notes
                Survey only engaged testers. Asking people who barely tried the feature measures onboarding, not fit.
              priority: medium
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A fit survey has been answered by at least half of engaged testers, with results split by segment and benefit phrases shared with marketing."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Draft four or five survey questions including the disappointment question"
                - "Set the minimum usage that qualifies a tester for the survey"
                - "Send the survey to qualifying testers and chase once"
                - "Share the most common benefit phrases with marketing"
            - name: Studying how other products run early access
              description: |-
                ## Purpose
                Plenty of well-known products have run waitlists, invite systems, public labs and long beta labels, and their choices show what works for different audiences. Reviewing five public examples, looking at how they invited people, labelled the feature and ended the beta, gives you tested patterns to borrow rather than inventing everything.

                ## Milestones
                1. Five public early access or beta programmes chosen from different kinds of product.
                2. For each, the invite method, labelling, feedback route and exit noted.
                3. Three patterns worth borrowing and one to avoid written down.
                4. The notes shared with the team before the next beta plan is drafted.
              priority: low
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A comparison of five public beta programmes, with three patterns to borrow and one to avoid, is shared with the team."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Pick five public beta or early access programmes to study"
                - "Note each one's invite method, labelling, feedback route and exit"
                - "Write three patterns to borrow and one to avoid"
                - "Share the notes before drafting the next beta plan"
            - name: Choosing a beta management tool
              description: |-
                ## Purpose
                Spreadsheets and email work for ten testers and break at a hundred, when you need invitations, agreements, feedback and builds in one place. Comparing a few beta management or feedback tools against what you actually need, and the cost per seat, avoids buying a platform you will use a tenth of.

                ## Milestones
                1. A list of must-have and nice-to-have needs from the current beta process.
                2. Three options compared, including staying with the current spreadsheet setup.
                3. A trial of the favourite run with one real beta cohort.
                4. A decision recorded with cost, owner and renewal date.

                ## Notes
                Start from the **Purchase decision** template. Check whether your existing feedback or support tool already has a beta feature.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A recorded decision compares three options including the status quo, follows a real trial, and names cost, owner and renewal date."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "List the beta tasks that currently take the most manual effort"
                - "Shortlist three options including the current setup"
                - "Trial the favourite option with one real beta cohort"
                - "Review beta tool seats and cost before renewal @recurring(yearly)"
            - name: Early access pricing and beta discount policy
              description: |-
                ## Purpose
                Free betas attract testers who would never pay, while charging full price for an unfinished feature feels unfair. Deciding whether the beta is free, discounted or paid, how long any discount lasts and what happens at general release, and writing it down before invitations go out, prevents awkward renegotiations later.

                ## Milestones
                1. The options compared: free, discounted, full price with credits, or paid early access.
                2. A policy chosen with the discount size, duration and end date stated.
                3. The general release transition written: what testers pay and when they are told.
                4. Sales and support given the policy in writing so they quote it consistently.

                ## Notes
                A small charge is often a better filter for serious testers than any screener. Never let a beta discount roll on with no end date.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A written beta pricing policy names the price or discount, its end date and the release transition, and sales and support have confirmed receipt."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Compare free, discounted and paid early access for this beta"
                - "Choose the policy and set the discount end date"
                - "Write what testers pay at general release and when they hear"
                - "Send the policy to sales and support in writing"
            - name: Beta tester incentives and recognition
              description: |-
                ## Purpose
                Hours of tester time go into every beta, and a thank-you that arrives months later or not at all teaches testers not to bother next time. A simple, fair scheme, such as account credit, early access to the next beta, swag or public credit with permission, rewards the people doing the work without turning feedback into a paid chore.

                ## Milestones
                1. Two or three incentive options chosen within a budget agreed with finance.
                2. A rule for who qualifies, based on contribution rather than volume of reports.
                3. Permission asked before naming anyone publicly.
                4. Rewards sent on a set day each month.

                ## Notes
                Rewarding report counts invites low-quality reports. Reward useful contributions, judged by the beta owner.
              priority: low
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "An incentive scheme with a budget and qualifying rule is in place, and rewards have gone out on schedule for at least two months."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Agree a beta incentive budget with finance"
                - "Choose two or three rewards and the qualifying rule"
                - "Ask permission before crediting any tester publicly"
                - "Send this month's thank-you rewards to qualifying testers @recurring(monthly:28)"
            - name: Beta findings decision log
              description: |-
                ## Purpose
                Every beta produces more findings than a team can act on before release, and without a record the same debate repeats every week. A log that gives each significant finding a decision, fix before release, fix after release or will not fix, with a reason and owner, makes scope trade-offs visible and defensible.

                ## Milestones
                1. A log with columns for finding, accounts affected, decision, reason and owner.
                2. Every theme from the feedback review given one of three decisions.
                3. Will not fix decisions explained back to the testers who raised them.
                4. The fix before release list reconciled with the exit criteria.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Every significant beta theme has a recorded decision, reason and owner, and testers have been told about each will not fix decision."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Create the findings log with decision, reason and owner columns"
                - "Give every current theme a fix before, fix after or will not fix decision"
                - "Explain will not fix decisions to the testers who raised them"
                - "Review open findings against the release plan @recurring(monthly:5)"
            - name: Extend, pivot or stop a beta that misses its criteria
              description: |-
                ## Purpose
                Some betas show that a feature is not wanted, or not workable, and the hardest call in early access is admitting it. Setting a review when the planned beta length is up, with three honest options and the evidence for each, stops a beta drifting into a permanent half-release that nobody owns.

                ## Milestones
                1. A review date set at the end of the planned beta length.
                2. Evidence gathered for three options: extend with a fix plan, change direction, or stop.
                3. A recorded decision with what would have to be true for each option.
                4. Testers told the outcome within a week, with a reason they can understand.

                ## Notes
                Stopping a beta is a result, not a failure. Thank testers properly and tell them what you learned.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "At the end of the planned beta length a decision to extend, change direction or stop is recorded with evidence, and testers are told within a week."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Put the end-of-beta review in the calendar now"
                - "Gather the evidence for extending, changing direction and stopping"
                - "Record the decision and what would have to be true for it"
                - "Tell testers the outcome and the reason within a week"
            - name: Converting beta users to paying customers
              description: |-
                ## Purpose
                The weeks after a beta are when its most engaged users decide whether to pay, and a surprise bill or a silent end loses many of them. Planning the conversion, from advance notice and a clear offer to help moving their beta data, turns beta goodwill into first revenue and a set of reference customers.

                ## Milestones
                1. Engaged beta accounts identified with their likely plan.
                2. Notice of the end of the beta and the offer sent at least four weeks ahead.
                3. Any beta data or settings confirmed to carry over, or a migration route offered.
                4. Conversion rate recorded and reasons for not converting collected.

                ## Notes
                Ask converted testers early whether they would act as a reference or case study, while the goodwill is fresh.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: deliverable
                success_criteria: "Every engaged beta account received notice and an offer four weeks before the beta ended, and the conversion rate and reasons for not converting are recorded."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "List engaged beta accounts and the plan each would likely need"
                - "Confirm whether beta data and settings carry over at release"
                - "Send the end-of-beta notice and offer four weeks ahead"
                - "Record who converted and why others did not"
            - name: General release readiness review
              description: |-
                ## Purpose
                The beta exists to answer one final question: is this ready for everyone? A formal review that walks through each exit criterion, open severe bugs, support readiness and the findings log produces a clear ready, ready with conditions or not ready call, and hands the launch team evidence instead of opinions.

                ## Milestones
                1. A readiness pack showing every exit criterion's final value against its threshold.
                2. Open severe bugs and will not fix decisions listed with their risk.
                3. Support documentation and staffing confirmed by the support lead.
                4. A recorded call of ready, ready with conditions or not ready, signed by the decision makers.
                5. The decision and its conditions handed to the launch team.

                ## Notes
                This review decides readiness. Launch logistics belong to your launch plan; hand over the decision, do not try to run both in one meeting.
              priority: high
              deadlineOffsetDays: 90
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A signed readiness decision, supported by final exit criteria values, open bug risks and support confirmation, is handed to the launch team."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Book the readiness review with the release decision makers"
                - "Build the readiness pack from the metrics log and findings log"
                - "Ask the support lead to confirm documentation and staffing"
                - "Record the readiness call and hand it to the launch team"
            - name: Beta kick-off week
              description: |-
                ## Purpose
                The first week sets the pace for the whole beta: testers who use the feature in week one tend to keep reporting, and those who do not mostly never start. Planning the week, with invitations, agreements, welcome pack, kick-off call and a check on who has logged in by day five, gives the beta a strong start.

                ## Milestones
                1. Invitations and agreements sent to the first cohort.
                2. The welcome pack delivered and the kick-off call held.
                3. Every invited account checked for first use by day five.
                4. Accounts with no use contacted personally before the week ends.
              priority: medium
              deadlineOffsetDays: 45
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "By the end of kick-off week every invited account has accepted the agreement, been offered the call and been checked for first use, with non-users contacted."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Fix the kick-off week dates with engineering and support"
                - "Send invitations and agreements to the first cohort"
                - "Hold the kick-off call and share the recording with consent"
                - "Check first use on day five and contact anyone who has not started"
            - name: Mid-beta checkpoint review
              description: |-
                ## Purpose
                Halfway through, there is still time to change course: swap testers, fix a blocking theme or reset the release estimate. A checkpoint that compares progress against exit criteria, cohort health and the original goals catches a beta that is drifting while the fix is still cheap.

                ## Milestones
                1. Exit criteria progress, cohort activity and top themes summarised on one page.
                2. Each beta goal marked on track, at risk or unanswerable with the current cohort.
                3. Corrective actions agreed with owners and dates.
                4. The release estimate confirmed or reset and shared.
              priority: medium
              deadlineOffsetDays: 60
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A mid-beta checkpoint is held with a one-page summary, each goal rated, corrective actions owned and the release estimate confirmed or reset."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Book the checkpoint for the halfway date of the beta"
                - "Summarise criteria, cohort activity and themes on one page"
                - "Rate each beta goal as on track, at risk or unanswerable"
                - "Agree corrective actions and share the updated release estimate"
            - name: Beta close-out and tester offboarding
              description: |-
                ## Purpose
                Ending a beta badly, with access cut without warning or data left in limbo, damages trust with exactly the customers who helped most. A planned close-out that gives notice, explains what happens to their access and data, removes beta labels and closes the beta channels ends the programme cleanly.

                ## Milestones
                1. Notice sent to all testers with the end date and what happens to their access and data.
                2. Beta-only data retained, migrated or deleted according to the beta agreement.
                3. Beta channels archived after a final message.
                4. Beta labels, flags and test accounts cleaned up in the product.

                ## Notes
                Check the beta agreement before deleting anything, and confirm deletions in writing if testers asked for them.
              priority: medium
              deadlineOffsetDays: 120
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "Every tester was given notice, beta data was handled as the agreement states, and beta channels, labels and test accounts are closed."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Send the end date and access plan to all testers"
                - "Handle beta-only data as the agreement states"
                - "Post a final message and archive the beta channels"
                - "Remove beta labels, test accounts and unused access lists"
            - name: You said, we did report for beta testers
              description: |-
                ## Purpose
                Testers rarely learn what their feedback changed, so the next invitation feels like unpaid work. A short closing report showing the top themes testers raised and what the team did about each, including what it chose not to do, is the best recruiting tool you have for the next beta.

                ## Milestones
                1. The top eight to ten themes from the beta listed with counts.
                2. Each theme paired with what changed, what is planned or why it was declined.
                3. Testers who shaped a change credited, with their permission.
                4. The report sent to every tester and saved for future recruiting.
              priority: low
              frontmatter:
                mode: service
                output_kind: deliverable
                success_criteria: "A closing report pairing at least eight beta themes with outcomes has been sent to every tester."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Pull the top themes and counts from the feedback themes page"
                - "Write what changed, what is planned or why it was declined for each"
                - "Ask permission from testers you want to credit by name"
                - "Send the report to every tester"
            - name: Beta retrospective and playbook update
              description: |-
                ## Purpose
                Every beta teaches the team something about running betas, and without a retrospective the next one repeats the same recruiting gaps and slow replies. A short retrospective with the beta owner, engineering and support, ending in specific changes to a written beta playbook, makes each programme easier than the last.

                ## Milestones
                1. A retrospective held within two weeks of the beta closing.
                2. What worked and what did not recorded across recruiting, feedback, triage and the release call.
                3. Three to five specific changes agreed.
                4. The beta playbook updated with those changes and a link to this beta's archive.
              priority: medium
              deadlineOffsetDays: 135
              frontmatter:
                mode: event
                output_kind: artifact
                success_criteria: "A retrospective is held within two weeks of close, and three to five agreed changes are written into the beta playbook."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Book the retrospective within two weeks of the beta closing"
                - "Collect views from engineering, support and three testers"
                - "Agree three to five changes for the next beta"
                - "Write the changes into the beta playbook"
            - name: Founder's first beta with ten design partners
              description: |-
                ## Purpose
                A founder with an early product needs ten committed accounts more than a hundred casual ones. Recruiting design partners who share the problem, agreeing what each side gives, such as weekly calls and honest feedback in return for influence and a launch discount, and meeting them on a regular rhythm turns a rough product into one shaped by real users.

                ## Milestones
                1. Ten design partners recruited who match the problem you are solving.
                2. A one-page partnership note agreed with each: commitments, access, pricing after launch.
                3. A fortnightly call or check-in held with each partner.
                4. A record of which product decisions each partner influenced.

                ## Notes
                Choose partners who feel the problem every week. Friends and investors make polite partners and poor evidence.
              priority: high
              deadlineOffsetDays: 60
              frontmatter:
                mode: operating
                output_kind: deliverable
                success_criteria: "Ten design partners have signed partnership notes and held at least three check-ins each, with influenced decisions recorded."
                cadence: phased
                effort_hours_estimate: "20"
              tasks:
                - "List thirty prospects who feel the problem every week"
                - "Write the one-page design partner note"
                - "Book fortnightly check-ins with each partner who signs"
                - "Record which decisions each partner influenced"
            - name: Consumer app beta from a pre-launch waitlist
              description: |-
                ## Purpose
                Consumer founders often build a waitlist of thousands and then discover that most sign-ups were curiosity. Running the beta in small, measured waves from the waitlist, watching week-one and week-four return rates and asking leavers why, tells you whether you have something people come back to before you spend on a public launch.

                ## Milestones
                1. The waitlist segmented by source and qualifying answers.
                2. A first wave of a few hundred invited, with week-one and week-four return rates measured.
                3. A short exit question sent to anyone who stops opening the app.
                4. A written view of whether return rates justify a wider launch.

                ## Notes
                Compare return rates by sign-up source. Referral sign-ups usually behave very differently from those who came through an advert.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: decision
                success_criteria: "At least one waitlist wave has week-one and week-four return rates recorded by source, and a written launch view is agreed by the founders."
                cadence: phased
                effort_hours_estimate: "12"
              tasks:
                - "Segment the waitlist by source and qualifying answers"
                - "Invite the first wave and mark the date"
                - "Measure week-one and week-four return rates by source"
                - "Write the founders' view on whether to widen the launch"
            - name: Feature beta inside an established product
              description: |-
                ## Purpose
                Testing a new feature with existing customers is different from a new product beta: they have habits, contracts and expectations, and a beta that disrupts their daily work causes support tickets and account manager complaints. Choosing accounts with their account owners, labelling the feature clearly and keeping the old path available protects relationships while you learn.

                ## Milestones
                1. Account owners consulted on which customers to invite and which to avoid.
                2. The beta feature labelled clearly in the product, with a short explanation.
                3. The existing workflow kept available for beta accounts throughout.
                4. Support briefed on the beta and how to recognise beta-related tickets.
              priority: medium
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "Account owners approved the invite list, the feature is labelled as beta, the old workflow remains available and support has been briefed."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Ask account owners which customers to invite and avoid"
                - "Write the in-product beta label and short explanation"
                - "Confirm with engineering the old workflow stays available"
                - "Brief support on spotting and routing beta tickets"
            - name: Private beta with an enterprise customer
              description: |-
                ## Purpose
                Large customers often want early access to a feature they asked for, but their security reviews, procurement rules and internal sign-offs can stall a beta for months. Agreeing a written pilot scope with success measures, the customer's sponsor and the paperwork needed up front keeps the private beta moving and stops it becoming unpaid custom development.

                ## Milestones
                1. A named sponsor on the customer side and a single contact on yours.
                2. A pilot scope with success measures, duration and what is out of scope.
                3. Security, data and contract requirements identified and started early with your legal and security leads.
                4. A closing review with the sponsor against the agreed success measures.

                ## Notes
                Keep the feature general. If the customer asks for changes only they would use, log them as requests, not beta scope.
              priority: high
              frontmatter:
                mode: service
                output_kind: deliverable
                success_criteria: "A signed pilot scope with success measures exists, required reviews were started in the first week, and a closing review with the sponsor is recorded."
                cadence: phased
                effort_hours_estimate: "16"
              tasks:
                - "Ask the account owner to name the customer's sponsor"
                - "Draft the pilot scope with success measures and exclusions"
                - "Start the security and contract reviews in the first week"
                - "Hold the closing review against the agreed measures"
            - name: Running a beta as a solo founder with limited hours
              description: |-
                ## Purpose
                Working evenings as a solo founder, you cannot run weekly office hours, daily triage and monthly readouts. Cutting the beta down to a small cohort, one feedback channel, one fixed weekly hour and two exit criteria keeps the learning without burning out, and makes it obvious which parts to automate or drop.

                ## Milestones
                1. A cohort of fifteen to thirty testers, sized to what one person can reply to.
                2. One feedback channel and one reporting form, nothing else.
                3. A fixed weekly hour for reading feedback, replying and choosing one fix.
                4. Two exit criteria chosen that you can measure without a data team.

                ## Notes
                Say in the welcome pack that replies may take a few days. Testers forgive slow replies; they do not forgive silence.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A solo beta runs with one channel, a cohort of thirty or fewer and a weekly hour kept for at least six weeks."
                cadence: phased
                effort_hours_estimate: "15"
              tasks:
                - "Decide the largest cohort you can reply to in one hour a week"
                - "Close every feedback route except one channel and one form"
                - "Block one fixed hour a week in the calendar for the beta"
                - "Choose two exit criteria you can measure yourself"
            - name: B2B feature beta with sales and support in the loop
              description: |-
                ## Purpose
                In a business product, sales will mention the beta to close deals and support will field questions about it, whether or not the product team has briefed them. Giving both teams a short brief, approved talking points, a rule on what may be promised and a route to nominate customers keeps the beta from turning into commitments the product cannot meet.

                ## Milestones
                1. A one-page brief for sales and support on what the beta does and does not do.
                2. A rule on what may be promised to prospects, approved by the product lead.
                3. A nomination route for sales to suggest beta accounts against the profile.
                4. A monthly check that no deal has been closed on an unapproved beta promise.
              priority: medium
              frontmatter:
                mode: service
                output_kind: artifact
                success_criteria: "Sales and support have a one-page brief and promise rule, nominations go through one route, and a monthly promise check is held."
                cadence: phased
                effort_hours_estimate: "5"
              tasks:
                - "Write the one-page beta brief for sales and support"
                - "Get the product lead to approve what may be promised"
                - "Set up a nomination route for beta accounts"
                - "Check recent deals for beta promises @recurring(monthly:22)"
            - name: Beta for a breaking change or data migration
              description: |-
                ## Purpose
                Betas of changes that move or reshape customer data, or break existing integrations, carry more risk than new features because the old behaviour is what customers rely on. Running these with a dry run on copies of real data, explicit opt-in, a tested way back and testers who use the affected paths heavily is how teams avoid irreversible mistakes.

                ## Milestones
                1. The affected data, integrations and workflows mapped with engineering.
                2. A dry run completed on a copy of real customer data with differences checked.
                3. Explicit opt-in from each beta account, with a tested way back to the old behaviour.
                4. Heavy users of the affected paths recruited ahead of light ones.

                ## Notes
                Never run a migration beta without a reversal you have actually tested. Agree a stop rule in advance, such as any data discrepancy pausing all new opt-ins.
              priority: high
              deadlineOffsetDays: 90
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "A dry run on real data copies has been checked, every beta account opted in explicitly and the way back has been tested before any live migration."
                cadence: phased
                effort_hours_estimate: "20"
              tasks:
                - "Map the data, integrations and workflows the change touches"
                - "Run a dry migration on a copy of real data and check differences"
                - "Test the way back to the old behaviour on a staging account"
                - "Write the stop rule and share it with engineering and support"
            - name: Always-on early access programme across releases
              description: |-
                ## Purpose
                Teams that ship often benefit from a standing early access group rather than recruiting for every beta. A permanent programme with an opt-in setting, a labs area in the product, a fixed feedback route and a steady flow of features gives you a ready cohort, and gives customers who enjoy trying new things a reason to stay.

                ## Milestones
                1. An opt-in setting or labs area that customers can join and leave themselves.
                2. A rule for which features go through early access and for how long.
                3. A fixed feedback route and monthly digest for the early access group.
                4. Membership, activity and graduations tracked across features.

                ## Notes
                Set a maximum time a feature may stay in early access. Labs areas full of abandoned experiments make the whole product feel unfinished.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A standing early access programme with self-serve opt-in has run for two quarters, with every feature in it graduating or being removed within the agreed limit."
                cadence: rolling
              tasks:
                - "Write the rule for which features enter early access and for how long"
                - "Design the opt-in setting or labs area with engineering"
                - "Send the early access digest to the programme @recurring(monthly:16)"
                - "Check every early access feature against its time limit @recurring(quarterly)"
            - name: Beta programme scorecard across several betas
              description: |-
                ## Purpose
                Once a team has run several betas, the useful questions move from one feature to the programme itself: how long betas take, how many features graduate and whether beta findings predicted post-launch problems. A quarterly scorecard across betas shows whether the process is getting faster and more predictive, or just longer.

                ## Milestones
                1. A list of every beta run in the last year with start, end and outcome.
                2. Measures chosen, such as days to release, share graduated and tester activity.
                3. Post-launch issues compared with what each beta found.
                4. A quarterly scorecard shared with product leadership.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A quarterly scorecard covering every beta of the past year, with days to release, graduation share and post-launch comparison, is shared with product leadership."
                cadence: cyclic
              tasks:
                - "List every beta of the last year with dates and outcome"
                - "Choose three or four programme measures"
                - "Compare post-launch issues with each beta's findings"
                - "Publish the beta programme scorecard @recurring(quarterly)"
            - name: Coaching a colleague through their first beta
              description: |-
                ## Purpose
                Running a beta well is learned mostly by doing, and a new product manager left alone usually skips exit criteria and drowns in feedback. Pairing with them through goals, recruiting, the weekly rhythm and the readiness call, using your playbook, spreads the skill across the team and tests whether the playbook works for someone else.

                ## Milestones
                1. A coaching plan agreed covering goals, recruiting, rhythm and the readiness call.
                2. Weekly half-hour check-ins held while their beta runs.
                3. Their exit criteria and readiness pack reviewed before use.
                4. Gaps they found in the playbook written back into it.
              priority: low
              frontmatter:
                mode: service
                output_kind: deliverable
                success_criteria: "A colleague has run a beta from goals to readiness call with weekly coaching, and at least two playbook improvements came from their experience."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "Agree the coaching plan and check-in time with your colleague"
                - "Review their beta goals and exit criteria before invitations go out"
                - "Ask the agent to summarise their weekly notes before each check-in"
                - "Write the playbook gaps they found back into the playbook"
---

# Beta & Early Access Programmes

This area is for product teams and founders who want a beta to settle questions rather than simply delay a launch. It starts with the foundations (goals, format, who to invite, exit criteria, agreements, feedback channels and a rollback plan), moves into the weekly machinery of feedback review, bug triage, tester updates and invitation waves, then covers the skills of asking and reading beta evidence, the decisions on pricing, conversion and readiness, the dated moments from kick-off to close-out, situations for founders and established teams, and the specialist work of standing early access programmes and coaching others.

The rhythm is weekly while a beta is live for feedback review, bug triage, tester updates, office hours and the exit metrics, monthly for waitlist waves, leadership readouts, risk and findings reviews and tester thanks, and quarterly for panel refreshes and the programme scorecard. The Risk register, Feedback themes, Meeting notes, Metrics log and Purchase decision templates pair with the projects that name them. Installing adds all 50 projects as active, so archive the ones that are not for you yet.
