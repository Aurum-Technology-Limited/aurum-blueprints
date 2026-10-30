---
id: fundraising-investors.quarterly-earnings-communications
name: Quarterly Earnings Communications
description: "Results releases, earnings call scripts, Q&A banks and a quarterly timeline that keeps finance, legal and investor relations agreed on every number before it goes public."
category: business
version: 1.0.0
tags: [fundraising-investors, quarterly-earnings-communications, enterprise, manager, earnings-call, results-release, disclosure, listed-company]
author: Aurum Technology
starter_structure:
  templates:
    - vendor
    - operational-checklist
    - feedback-themes
    - metrics-log
    - remediation-plan
  pillars:
    - name: Fundraising & Investor Relations
      emoji: "💰"
      description: "Raising capital and keeping investors informed: rounds from pre-seed to growth, grants and debt, the data room, cap table, investor updates, board reporting and exits."
      pillarFrontmatter:
        review_cadence: quarterly
      areas:
        - name: Quarterly Earnings Communications
          description: "Preparing quarterly results releases, earnings call scripts and Q&A for listed companies, aligned with finance and legal."
          projects:
            - name: Annual results calendar and blackout dates
              description: |-
                ## Purpose
                Four results dates a year drive every other deadline: the close, the audit committee meeting, the trading blackout and the call itself. Fixing them twelve months ahead stops the scramble when a board date moves or the auditors need an extra week. It also tells every insider exactly when they cannot trade.

                ## Milestones
                1. Four release dates and call times agreed with the CFO, CEO and audit committee chair.
                2. Close, audit review, disclosure committee and board dates set backwards from each release.
                3. Blackout start and end dates for each quarter confirmed with the company secretary or legal team.
                4. The calendar shared with finance, legal, communications and the executive assistants.
                5. Release dates published where your market and your holders expect to find them.

                ## Notes
                Check the filing deadline for your interim and annual reports with legal before choosing dates, and leave a few working days between the auditors' review and the release.

                Before you start: this plan is general information to help you organise your own money decisions. It is not financial, investment, tax or legal advice. Check decisions that matter with a qualified, licensed adviser in your country, and remember that investing and trading can lose money.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A twelve-month calendar showing four release dates, the dates each one depends on and the blackout windows, shared with every function involved."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "List the filing deadlines that apply to each quarter's results"
                - "Agree four release dates with the CFO and audit committee chair"
                - "Set close, review and board dates backwards from each release date"
                - "Send the blackout dates to every insider with the trading policy attached"
                - "Set next year's results dates before the final quarter of this year closes @recurring(yearly)"
            - name: Earnings working group roles and approvals
              description: |-
                ## Purpose
                Results go wrong most often at the handoffs: a controller updates a number after legal has signed off, or nobody owns the CEO quote. Naming one owner for each document and one approver for each sign-off on a single page means every draft has a home and every late change has a gatekeeper.

                ## Milestones
                1. A working group named, usually investor relations, the CFO, controller, FP&A, legal, communications and the CEO's office.
                2. One owner recorded for the release, script, slides, Q&A bank and filing.
                3. A sign-off sequence agreed, ending with the person who authorises distribution.
                4. A deputy named for every role in case someone is ill or travelling on results day.

                ## Notes
                Keep the core group small. Reviewers outside it comment on a locked draft at set points rather than editing live.
              priority: high
              deadlineOffsetDays: 14
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A one-page responsibility chart naming the owner, approver and deputy for every earnings document, agreed by the CFO."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Write down who drafted each results document last quarter"
                - "Name one owner and one approver for every earnings document"
                - "Agree the order of sign-offs from controller to final approver"
                - "Name a deputy for each role and share the page with the group"
            - name: Disclosure committee review of results
              description: |-
                ## Purpose
                Most listed companies need a documented process showing that results were reviewed by people who know the business before release. A disclosure committee with a short charter, a fixed slot in each earnings cycle and minutes of what it checked gives the CEO and CFO a basis for their certifications and gives the auditors something to test.

                ## Milestones
                1. A charter stating membership, quorum and what the committee reviews each quarter.
                2. A sub-certification form for business unit heads confirming nothing material is missing.
                3. A standing committee meeting placed in each quarter's timeline before final sign-off.
                4. Minutes of the first meeting recording the drafts reviewed and the issues resolved.

                ## Notes
                Ask legal what your market requires, as certification rules differ between jurisdictions. The committee organises the review; it does not replace legal advice.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A disclosure committee charter approved and the first quarterly meeting minuted, with sub-certifications from each business unit on file."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Ask legal what review and certification your market requires for results"
                - "Draft a one-page committee charter with members and quorum"
                - "Send sub-certification forms to business unit heads two weeks before release"
                - "Book the committee meeting into each quarter's timeline"
            - name: Results release template and house style
              description: |-
                ## Purpose
                A release that changes shape every quarter forces analysts to hunt for the numbers and invites the question of what is being hidden. A fixed template, with the headline, highlights, quotes, outlook, tables and reconciliations always in the same order, makes each quarter quicker to draft and easier to compare with the last.

                ## Milestones
                1. A template with fixed sections in an agreed order.
                2. A style sheet covering number formats, rounding, currency, period labels and capitalisation.
                3. Standard financial tables laid out to match the primary statements in the filing.
                4. Last quarter's release rebuilt in the new template as a test.

                ## Notes
                Put the comparable period beside every headline figure. A number without its comparison reads as spin.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A results release template and one-page style sheet approved by the CFO, with last quarter's release rebuilt in it."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Lay the last four releases side by side and mark where the order changed"
                - "Agree the fixed section order with the CFO and legal"
                - "Write a one-page style sheet for numbers, periods and rounding"
                - "Rebuild last quarter's release in the template and circulate it"
            - name: Cautionary statements for results materials
              description: |-
                ## Purpose
                Forward-looking comments on outlook, pipeline and margins are where earnings materials carry the most legal risk. Having legal approve one set of cautionary language for the release, the opening of the call and the slides, and refreshing it when the risks change, keeps every document consistent and every speaker covered.

                ## Milestones
                1. Cautionary language for the release, call opening and slides approved by legal.
                2. The language cross-referenced to the risk factors in your latest periodic filing.
                3. A short statement written for the operator or investor relations lead to read at the start of every call.
                4. A quarterly check that new risks are reflected before each release.

                ## Notes
                The wording itself is a legal call. This project makes sure approved wording exists, is used everywhere and is kept current.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "One legally approved set of cautionary statements in use across the release, script and slides, refreshed before each release."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Collect the cautionary wording from last quarter's release, script and slides"
                - "Ask legal to approve one consistent set for all three documents"
                - "Add the call opening statement to the script template"
                - "Ask legal whether new risks need adding before each release @recurring(quarterly)"
            - name: Non-GAAP measures and reconciliation policy
              description: |-
                ## Purpose
                Adjusted EBITDA, underlying profit and free cash flow are the measures most likely to draw a regulator's comment letter or an analyst's scepticism. A written policy that defines each measure, explains why it is used and requires a reconciliation to the nearest statutory figure with equal prominence keeps the adjustments honest from one quarter to the next.

                ## Milestones
                1. Every non-GAAP or alternative performance measure in use listed with its definition.
                2. A reason recorded for each measure and each recurring adjustment.
                3. A reconciliation table to the nearest statutory measure for each one.
                4. A rule for when a new adjustment may be added and who approves it.
                5. The policy approved by the CFO and reviewed by the audit committee.

                ## Notes
                Rules differ by market, for example Regulation G in the US or the ESMA guidelines on alternative performance measures in Europe. Check yours with legal and the auditors.
              priority: high
              deadlineOffsetDays: 45
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A written non-GAAP policy covering every measure in use, with reconciliations, approved by the CFO and reviewed by the audit committee."
                cadence: one-shot
                effort_hours_estimate: "10"
              tasks:
                - "List every adjusted measure used in the last four releases"
                - "Write a definition and a one-line reason for each measure"
                - "Build the reconciliation table from each measure to its statutory figure"
                - "Send the draft policy to the audit committee for review"
            - name: Quarterly KPI set with fixed definitions
              description: |-
                ## Purpose
                Operating metrics such as net revenue retention, same-store sales or order backlog often matter more to investors than the income statement, and dropping one quietly is noticed at once. Choosing the set you will report every quarter, writing each definition down and agreeing who calculates it makes the numbers repeatable and defensible under questioning.

                ## Milestones
                1. A list of six to ten operating KPIs to report every quarter.
                2. A written definition, data source and owner for each KPI.
                3. Eight quarters of history recalculated on the same definitions.
                4. A rule agreed for how a KPI is changed or retired, with notice to the market.
              priority: medium
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A KPI register of six to ten metrics with definitions, owners and eight quarters of consistent history, approved by the CFO."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "List every operating metric mentioned on the last four calls"
                - "Choose the set to report every quarter with the CFO"
                - "Write the definition, source and owner for each KPI"
                - "Recalculate eight quarters of history on the agreed definitions"
            - name: Earnings archive of the last eight quarters
              description: |-
                ## Purpose
                Analysts remember what management said two years ago, and so should the people writing this quarter's script. Pulling the last eight releases, scripts, slides, transcripts and Q&A answers into one indexed folder gives every drafter the history they need to stay consistent and to spot a promise that needs following up.

                ## Milestones
                1. Releases, scripts, slides and transcripts for eight quarters saved in one folder.
                2. Each quarter's guidance and headline numbers summarised on one page.
                3. Questions asked on each call listed by topic.
                4. Folder access limited to the working group.
              priority: medium
              frontmatter:
                mode: building
                output_kind: knowledge
                success_criteria: "An indexed archive covering eight quarters of earnings materials, with a one-page summary per quarter, available to the working group."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Download the last eight releases and call transcripts"
                - "Save each quarter's final script and slides beside its release"
                - "Ask the agent to list the questions from each transcript by topic"
                - "Summarise each quarter's guidance and headline numbers on one page"
            - name: Newswire and simultaneous disclosure set-up
              description: |-
                ## Purpose
                Results usually have to reach the whole market at the same moment, through a regulatory announcement service or a newswire, before anyone else hears them. Setting up the accounts, the release order, the filing route and a tested fallback means the release goes out on the minute even if the person who normally sends it is unreachable.

                ## Milestones
                1. A contract with a newswire or regulatory announcement service, with at least two authorised users.
                2. The order of release written down: wire or announcement service, regulatory filing, website, email alerts.
                3. A fallback route tested in case the primary service fails.
                4. A test release sent through the full chain before the next results.

                ## Notes
                Ask legal which channels count as public disclosure in your market. A website post on its own often does not.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Two authorised users, a written release sequence and a tested fallback route in place before the next results date."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Confirm with legal which channels count as public disclosure"
                - "Set up two authorised users on the newswire account"
                - "Write the release sequence from wire to website on one page"
                - "Test the newswire login and fallback route a week before each release @recurring(quarterly)"
            - name: Conference call and webcast provider choice
              description: |-
                ## Purpose
                Dropped lines, a muted CEO or a webcast that fails at two thousand viewers become the story of the quarter. Comparing two or three providers on operator-assisted Q&A, webcast capacity, replay, transcript turnaround and support on the day lets you choose on reliability rather than habit.

                ## Milestones
                1. Requirements written for audience size, Q&A method, languages, replay and transcripts.
                2. Three providers compared on the same criteria, including the price per event.
                3. References taken from two listed companies that use each finalist.
                4. A provider contracted, with a named event manager for results days.

                ## Notes
                Start from the **Vendor** template. Ask for the provider's failover plan in writing, including a dial-in backup if the webcast fails.
              priority: medium
              deadlineOffsetDays: 30
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A provider chosen against written criteria and contracted, with a named event manager and a written failover plan."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "List what went wrong technically on the last four calls"
                - "Write the requirements for audience size, Q&A and transcripts"
                - "Compare three providers against the requirements"
                - "Ask two listed companies about their experience with each finalist"
            - name: Quarterly earnings countdown run sheet
              description: |-
                ## Purpose
                From quarter end to the call is usually four to six weeks, with dozens of dated steps across finance, legal and communications. A countdown run sheet with every step dated back from the release and an owner against each catches the slipped audit review or late segment data while there is still time to recover.

                ## Milestones
                1. A run sheet listing every step from quarter end to the post-call debrief.
                2. Each step dated relative to release day and given an owner.
                3. A short weekly status check held through each earnings cycle.
                4. Four quarters run from the same sheet, with changes noted after each.

                ## Notes
                Start from the **Operational checklist** template.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Four consecutive quarters delivered from the same countdown run sheet, with every step owned and dated."
                cadence: cyclic
              tasks:
                - "Build the run sheet from last quarter's emails and calendar invitations"
                - "Date every step backwards from the release day"
                - "Open the run sheet for the coming cycle on the day the quarter ends @recurring(quarterly)"
                - "Hold a fifteen-minute status check in each week of the cycle"
            - name: Results release drafting rounds
              description: |-
                ## Purpose
                Drafting a release by committee in a shared file produces late-night changes nobody can trace. Running fixed rounds, a skeleton on flash numbers, a full draft for the working group, a legal and audit review draft and a locked final, each with a version number and a comment deadline, keeps the text under control.

                ## Milestones
                1. A skeleton draft prepared from flash numbers within days of the close.
                2. Four named draft rounds with dates on the countdown run sheet.
                3. One person controlling edits, with comments collected rather than typed into the text.
                4. A locked final version with a change log signed off by the approver.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: deliverable
                success_criteria: "Each quarter's release passes through four numbered draft rounds, with a comment log and a locked, approved final."
                cadence: cyclic
              tasks:
                - "Prepare a skeleton release from the flash numbers"
                - "Set the comment deadline for each draft round"
                - "Collect comments in one log and resolve each one"
                - "Lock the final version and record who approved it"
            - name: Prepared remarks for the CEO and CFO
              description: |-
                ## Purpose
                Investors listen for what changed and why, and prepared remarks that recite the release waste the first fifteen minutes of the call. Writing the CEO's section around three strategic messages and the CFO's around the drivers of the numbers, timed to fifteen or twenty minutes in total, leaves room for questions and tells the market something the release could not.

                ## Milestones
                1. Three key messages for the quarter agreed with the CEO before drafting starts.
                2. The CEO's and CFO's sections drafted, each with a target speaking time.
                3. Every number in the script matched to the release.
                4. A read-through by both executives completed, with phrases they stumble on rewritten.

                ## Notes
                Write for the ear: short sentences, one number at a time, and the comparison period spoken every time.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: deliverable
                success_criteria: "A timed script for the CEO and CFO, within the agreed length, read through by both executives before the call."
                cadence: cyclic
              tasks:
                - "Agree three key messages for the quarter with the CEO"
                - "Draft the CEO and CFO sections with a target time for each"
                - "Read the script aloud and time it"
                - "Rewrite any sentence either executive stumbles on"
            - name: Anticipated questions bank with approved answers
              description: |-
                ## Purpose
                Most hard questions on an earnings call can be predicted from the numbers, the news and what analysts asked last time. A standing bank of likely questions, each with an approved answer, the supporting data and a named responder, means executives walk in rehearsed and legal has already cleared the sensitive lines.

                ## Milestones
                1. A question bank grouped by topic, with an approved answer for each question.
                2. Each answer tagged with the executive who will take it.
                3. Sensitive answers reviewed by legal before every call.
                4. New questions from each call added within a week.
                5. Answers older than two quarters rechecked or retired.
              priority: high
              frontmatter:
                mode: operating
                output_kind: artifact
                success_criteria: "A Q&A bank with an approved answer and named responder for every likely question, updated within a week of each call."
                cadence: rolling
              tasks:
                - "Pull the questions from the last four calls into one bank"
                - "Write a short approved answer and named responder for each question"
                - "Add new questions from the latest call to the bank @recurring(quarterly)"
                - "Check the bank for stale answers and outdated figures @recurring(monthly:12)"
            - name: Number tie-out across every earnings document
              description: |-
                ## Purpose
                A single wrong figure in a release can force a correction notice and undo a good quarter. Tying every number in the release, script, slides and Q&A answers back to the consolidation or the filing, in a tick-mark file someone else can check, is dull work that prevents the most embarrassing errors.

                ## Milestones
                1. A tie-out file listing every number in each earnings document with its source.
                2. Each number ticked by someone who did not draft it.
                3. Percentages and growth rates recalculated from the underlying figures.
                4. The tie-out completed on the final versions, not an earlier draft.

                ## Notes
                Re-run the tie-out on anything changed after sign-off. Most late errors come from a last-minute edit.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every figure in the release, script and slides ties to a source and is checked by a second person before each release."
                cadence: cyclic
              tasks:
                - "Create a tie-out file listing each number and its source"
                - "Assign a checker who did not draft the document"
                - "Recalculate every percentage and growth rate from the source figures"
                - "Run the full tie-out on the final versions before release @recurring(quarterly)"
            - name: Earnings presentation slides
              description: |-
                ## Purpose
                Many investors follow the webcast slides rather than the release, and a dense deck of tiny tables gets skipped. A standard slide set with the quarter's highlights, a revenue and margin bridge, segment pages, cash flow and outlook, built from the same numbers as the release, helps listeners follow the story while the CFO talks.

                ## Milestones
                1. A standard slide order that stays the same every quarter.
                2. Bridge charts showing what moved revenue and margin since the prior period.
                3. Slides published with the release, in an accessible format.
                4. Every slide's numbers included in the tie-out.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: deliverable
                success_criteria: "Each quarter's slides follow the standard order, tie to the release and are published at the moment of release."
                cadence: cyclic
              tasks:
                - "Agree a fixed slide order with the CFO"
                - "Build the revenue and margin bridge from the variance analysis"
                - "Add every slide to the tie-out file"
                - "Publish the slides at the same moment as the release"
            - name: Pre-results consensus comparison
              description: |-
                ## Purpose
                The market judges results against consensus, not against your budget, so knowing where analysts sit before the release tells you which lines will draw attention. Collecting the published estimates, working out the mean and range and setting them beside actuals shows where a beat or miss will be read and which explanations the script must carry.

                ## Milestones
                1. A consensus table of revenue, margin, earnings per share and key KPIs by analyst.
                2. Mean, median and range worked out, with stale estimates flagged.
                3. Actuals compared line by line before the script is finalised.
                4. The comparison kept inside the working group as confidential.

                ## Notes
                Do not comment on or correct individual estimates during the quiet period. Ongoing analyst relationships belong in your analyst relations plan, not here.
              priority: medium
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A consensus table with mean, range and stale flags, compared with actuals before the script is locked each quarter."
                cadence: cyclic
              tasks:
                - "List the covering analysts and the date of each one's latest estimate"
                - "Collect published consensus in the week after each quarter closes @recurring(quarterly)"
                - "Flag any estimate older than ninety days as stale"
                - "Compare actuals with consensus line by line"
            - name: Quarterly guidance reaffirm or update decision
              description: |-
                ## Purpose
                Every release that carries guidance forces a choice: reaffirm, raise, lower, narrow or withdraw. Reviewing the latest forecast against the published range with the CFO and legal each quarter, and recording the decision and the reasons, turns guidance into a deliberate call rather than a paragraph rewritten at midnight.

                ## Milestones
                1. The latest forecast set beside the published guidance range.
                2. The options written out with what each would signal to the market.
                3. A recorded decision from the CFO, CEO and legal, with the reasoning.
                4. Outlook wording in the release, script and slides matching the decision word for word.

                ## Notes
                The overall guidance policy sits with your wider investor relations plan; this project is the quarterly decision made within it.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: decision
                success_criteria: "A recorded guidance decision with reasons each quarter, and outlook wording identical across the release, script and slides."
                cadence: cyclic
              tasks:
                - "Compare the latest forecast with the published guidance range @recurring(quarterly)"
                - "Write out the options and what each would signal"
                - "Record the decision and the reasons with the CFO and legal"
                - "Match the outlook wording across release, script and slides"
            - name: Interim filing consistency with the release
              description: |-
                ## Purpose
                Your release, the call and the quarterly or interim report are written by different people on different timelines, and a mismatch between them is easy for a regulator or analyst to find. Checking that numbers, segment descriptions and risk language agree, and that the copy filed with the regulator matches what went on the wire, closes the gap.

                ## Milestones
                1. A checklist of items that must match between the release and the filing.
                2. Management commentary in the filing compared with the call script.
                3. The filed or furnished copy of the release confirmed as identical to the wire version.
                4. Differences resolved and signed off before the filing deadline.

                ## Notes
                In the US this usually means the 8-K and the 10-Q; other markets have their own interim report and announcement rules. Confirm yours with legal.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Each quarter's filing and release checked against one checklist, with no unresolved differences at the filing deadline."
                cadence: cyclic
              tasks:
                - "List the items that must match between the release and the filing"
                - "Compare the filing commentary with the call script"
                - "Confirm the filed copy of the release matches the wire version"
                - "Resolve every difference before the filing deadline"
            - name: Quiet period discipline before results
              description: |-
                ## Purpose
                In the weeks before results, a casual remark at a conference or a client lunch can amount to selective disclosure. Setting a quiet period start date, telling every spokesperson and executive assistant, and holding a short list of what can still be said keeps the company safe while the numbers are known internally.

                ## Milestones
                1. A quiet period start agreed, often at or near quarter end, and recorded in the calendar.
                2. All spokespeople and their assistants told the dates and the rules.
                3. A short form of words for declining questions politely during the period.
                4. Investor meetings and conferences inside the window declined or moved.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every spokesperson and assistant notified of the quiet period each quarter, with no investor meetings booked inside it."
                cadence: rolling
              tasks:
                - "Agree the quiet period start date with legal"
                - "Confirm the quiet period dates with executives and their assistants @recurring(quarterly)"
                - "Write a two-line response for declining questions in the period"
                - "Check the conference calendar for clashes with the window"
            - name: Post-call debrief and follow-up log
              description: |-
                ## Purpose
                The day after the call is when you learn what landed and what did not: the analyst notes, the share price, the questions people ask on call-backs. A debrief within two working days, recording themes, unanswered questions and promised follow-ups, feeds the next quarter's script and Q&A bank while memories are fresh.

                ## Milestones
                1. A debrief meeting held within two working days of the call.
                2. Themes from analyst notes and call-backs recorded.
                3. Every follow-up promised on the call listed with an owner and date.
                4. Changes for next quarter's materials agreed.

                ## Notes
                Start from the **Feedback themes** template. Follow-up answers to individual investors must not contain new material information.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: knowledge
                success_criteria: "A written debrief within two working days of every call, with follow-ups owned and three changes listed for the next quarter."
                cadence: cyclic
              tasks:
                - "Collect the analyst notes published after the call"
                - "Hold the debrief within two working days of each call @recurring(quarterly)"
                - "List every promised follow-up with an owner"
                - "Write three changes for next quarter's materials"
            - name: Reading the quarter's variances like an analyst
              description: |-
                ## Purpose
                Analysts build models line by line, so their questions follow the variances: why gross margin fell 80 basis points, why receivables grew faster than revenue. Learning to read your own quarter that way, from the bridge and the cash flow statement before the script is drafted, shows which questions are coming and which explanations are thin.

                ## Milestones
                1. A walk-through of last quarter's variance analysis completed with FP&A.
                2. A list of the ten largest movements against the prior year and consensus.
                3. A plain-language explanation drafted for each movement.
                4. The list compared afterwards with the questions actually asked on the call.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A variance-based list of likely questions prepared before the script, then compared in writing with the questions asked on the call."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Book an hour with FP&A to walk through the variance analysis"
                - "List the ten largest movements against the prior year"
                - "Draft a one-sentence explanation for each movement"
                - "Compare the list with the questions asked on the call"
            - name: Writing results headlines that hold up
              description: |-
                ## Purpose
                Headlines and bullet highlights are quoted by newswires and trading screens within seconds, usually stripped of context. Practising how to write them, statutory figure first, comparison period always shown and no adjective the numbers cannot support, makes the first line the one you would want repeated.

                ## Milestones
                1. Ten peer headlines collected and rated for clarity and balance.
                2. Three alternative headlines drafted for last quarter.
                3. A short set of headline rules added to the style sheet.
                4. Words to avoid unless the numbers support them, such as record or strong, agreed with legal and the CFO.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A set of headline rules added to the release style sheet, agreed with the CFO and legal, and used on the next release."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Collect ten peer results headlines from the last reporting season"
                - "Mark which ones lead with an adjusted figure"
                - "Draft three alternative headlines for last quarter"
                - "Add the headline rules to the release style sheet"
            - name: Non-GAAP disclosure rules in your market
              description: |-
                ## Purpose
                Regulators review adjusted measures more closely than almost any other part of earnings materials, and the rules on prominence, labels and reconciliation are precise. Studying the rules that apply to your listing, and the comment letters or enforcement notices issued to peers, lets you spot a problem before a regulator does.

                ## Milestones
                1. The rules on non-GAAP or alternative measures for your listing identified.
                2. Recent regulator comments to peers on adjusted measures read and summarised.
                3. Last quarter's release checked against each rule.
                4. Gaps raised with legal and the auditors.

                ## Notes
                Examples include Regulation G and the related staff guidance in the US and the ESMA guidelines in Europe. Treat your summary as a study aid; legal decides.
              priority: medium
              deadlineOffsetDays: 60
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A summary of the applicable non-GAAP rules and a rule-by-rule check of last quarter's release, reviewed by legal."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Ask legal which non-GAAP rules apply to your listing"
                - "Read five recent regulator comments on peers' adjusted measures"
                - "Check last quarter's release against each rule"
                - "Send any gaps to legal and the auditors"
            - name: Fair disclosure rules for earnings conversations
              description: |-
                ## Purpose
                Call-backs after results, conference fireside chats and one-to-ones with large holders are where selective disclosure usually happens, nearly always by accident. Knowing what the rules in your market say about material non-public or inside information, and training everyone who speaks to investors, protects the company and the individuals.

                ## Milestones
                1. The fair disclosure or inside information rules for your listing summarised on one page.
                2. A short training session delivered to every spokesperson.
                3. A rule agreed for when a second person must attend investor conversations.
                4. Attendance recorded and the session repeated each year.

                ## Notes
                Examples are Regulation FD in the US and the Market Abuse Regulation in the EU and UK. Legal owns the interpretation.
              priority: medium
              deadlineOffsetDays: 60
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Every authorised spokesperson trained on the disclosure rules within the past twelve months, with attendance recorded."
                cadence: phased
                effort_hours_estimate: "5"
              tasks:
                - "Ask legal for a one-page summary of the disclosure rules"
                - "Run a thirty-minute session for every spokesperson"
                - "Agree when a second person must join investor conversations"
                - "Repeat the disclosure session for all spokespeople @recurring(yearly)"
            - name: Earnings call media training for executives
              description: |-
                ## Purpose
                Executives who are brilliant in the boardroom can sound evasive or defensive on a call, and tone moves share prices. A coached session using real questions from past calls, recorded and played back, teaches the bridge back to key messages, how to say the answer is not known yet, and when to hand a question to a colleague.

                ## Milestones
                1. A coach or experienced investor relations adviser booked.
                2. Real questions from past calls selected for practice.
                3. A recorded session with playback completed by the CEO and CFO.
                4. Two or three personal habits noted for each executive to work on.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "The CEO and CFO complete a recorded training session using real call questions, with personal improvement points written down."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Pick six difficult questions from past call transcripts"
                - "Book a coach for a two-hour session with the CEO and CFO"
                - "Record the session and play it back with each executive"
                - "Book a refresher session ahead of the full-year results @recurring(yearly)"
            - name: Peer earnings benchmarking study
              description: |-
                ## Purpose
                Your results are read alongside three or four peers reporting in the same fortnight, and investors notice when they disclose a metric you do not. Studying peers' releases, slides and calls each season, noting their KPIs, format and the questions they faced, shows where your materials fall short and which questions are heading your way.

                ## Milestones
                1. Four to six peers chosen with the CFO.
                2. A comparison of disclosed KPIs, guidance style and call format.
                3. A list of questions peers faced that could apply to you.
                4. Two or three changes proposed for your next quarter.
              priority: low
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A peer comparison of KPIs, guidance and format updated each season, with at least two proposed changes recorded."
                cadence: cyclic
              tasks:
                - "Agree the peer list with the CFO"
                - "Listen to two peer calls in each reporting season @recurring(quarterly)"
                - "Compare the KPIs each peer discloses with yours"
                - "Copy peers' hardest questions into your own Q&A bank"
            - name: Explaining one-off items in plain language
              description: |-
                ## Purpose
                Impairments, restructuring charges, currency swings and acquisition costs can make a quarter look worse or better than the business really is. Learning to explain each in two plain sentences, what it is, whether it will recur and how it affects cash, keeps the call from being swallowed by the adjustments.

                ## Milestones
                1. A list of one-off items from the last eight quarters.
                2. A two-sentence plain explanation written for each item.
                3. Explanations checked by the controller for accuracy.
                4. The explanations added to the Q&A bank.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Plain two-sentence explanations for every recent one-off item, checked by the controller and added to the Q&A bank."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "List the one-off items from the last eight quarters"
                - "Write two plain sentences for each item"
                - "Ask the controller to check each explanation"
                - "Ask the agent to simplify any explanation longer than forty words"
            - name: Release timing before the open or after the close
              description: |-
                ## Purpose
                Releasing before the market opens gives investors the trading day to react; releasing after the close gives them the evening to read. Comparing what peers do, where your shareholders sit by time zone and what each option means for the team's night, settles the timing on purpose rather than by habit.

                ## Milestones
                1. Peers' release and call times collected.
                2. The shareholder base mapped by main time zone.
                3. The options set out with their effect on the team's working hours.
                4. A decision recorded and reflected in the results calendar.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A recorded decision on release and call timing, with reasons, reflected in the annual results calendar."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Note the release and call times of six peers"
                - "Map the largest shareholders by time zone"
                - "Write the pros and cons of each option for the CFO"
                - "Record the decision in the results calendar"
            - name: Choosing the earnings call format
              description: |-
                ## Purpose
                Live calls with scripted remarks are no longer the only option: some companies publish a shareholder letter and take only questions, others post pre-recorded remarks or a written Q&A. Weighing each format against your audience, your executives' strengths and the depth of questioning investors expect lets you change deliberately and announce the change in advance.

                ## Milestones
                1. Three or more formats described with peer examples.
                2. Top holders and covering analysts asked which format they find most useful.
                3. A recommendation made to the CEO and CFO.
                4. Any change announced at least one quarter ahead.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A recorded format decision based on peer examples and holder feedback, with any change announced a quarter ahead."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Find three peers that use a different call format"
                - "Ask five top holders which format they find most useful"
                - "Write a one-page recommendation for the CEO and CFO"
                - "Announce any format change with the previous quarter's results"
            - name: Retail shareholder question submissions
              description: |-
                ## Purpose
                Retail holders rarely get a turn in the operator queue, even in companies where they own a large share of the stock. A way for them to submit questions before the call, with a published rule for how many are answered and how they are chosen, widens the audience without losing control of the time.

                ## Milestones
                1. Options compared: email, a web form or a retail Q&A platform.
                2. A selection rule written, such as the most common themes or the most supported questions.
                3. The method announced in the call invitation.
                4. Two or three retail questions answered on the next call.
              priority: low
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "A retail question channel announced in the call invitation, with at least two retail questions answered on the next call."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Check what share of the register is held by retail investors"
                - "Compare email, web form and platform options"
                - "Write the rule for choosing which questions are answered"
                - "Add the submission method to the next call invitation"
            - name: Cutting days from close to release
              description: |-
                ## Purpose
                A long gap between quarter end and results leaves room for leaks and rumours, and it squeezes the time left for drafting. Working with the controller to find where the close and review stall, and removing two or three days over a year, gives the drafting team breathing room or lets the company report sooner.

                ## Milestones
                1. Working days from quarter end to release measured for the last four quarters.
                2. The slowest steps identified with the controller and the auditors.
                3. Two changes agreed, such as earlier segment cut-offs or drafting in parallel with the review.
                4. The gap reduced by at least two working days within four quarters.
              priority: medium
              deadlineOffsetDays: 365
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "The working days from quarter end to release reduced by at least two within four quarters, with the changes recorded."
                cadence: phased
                effort_hours_estimate: "20"
              tasks:
                - "Count the working days from quarter end to release for four quarters"
                - "Map the slowest steps with the controller"
                - "Agree two changes with finance and the auditors"
                - "Measure the gap again after each of the next four quarters"
            - name: Accessible earnings materials and transcripts
              description: |-
                ## Purpose
                Screen-reader users, listeners with hearing loss and investors reading in a second language all depend on materials that work without the live audio. Accessible PDFs, captions on the webcast replay and a corrected transcript posted within two working days make the results usable by everyone who owns the shares.

                ## Milestones
                1. Release and slides checked with an accessibility checker.
                2. Captions added to the webcast replay.
                3. A corrected transcript posted within two working days.
                4. Accessibility checks added to the countdown run sheet.
              priority: low
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "Release, slides, captioned replay and corrected transcript all accessible within two working days of the next call."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Run last quarter's release and slides through an accessibility checker"
                - "Ask the webcast provider about captions on the replay"
                - "Arrange a corrected transcript within two working days of the call"
                - "Add the accessibility checks to the countdown run sheet"
            - name: Recasting history when segments or KPIs change
              description: |-
                ## Purpose
                Reorganisations that change reporting segments, or a revised KPI definition, break every analyst's model unless history is restated on the new basis. Publishing recast prior quarters before or with the first results in the new format, with a bridge from old to new, prevents a whole quarter of confused questions.

                ## Milestones
                1. The changes and their effective quarter confirmed with finance and the auditors.
                2. Eight quarters recast on the new basis.
                3. A bridge between the old and new presentation for each recast period.
                4. The recast data published before or with the first results on the new basis.
                5. The KPI register and release template updated.
              priority: medium
              deadlineOffsetDays: 120
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Eight quarters of recast history with a bridge, published before or with the first results on the new basis."
                cadence: phased
                effort_hours_estimate: "24"
              tasks:
                - "Confirm the effective quarter of the change with the controller"
                - "Recast eight quarters on the new segment basis"
                - "Build a bridge table between the old and new figures"
                - "Publish the recast history with a short explanatory note"
            - name: Rules for AI tools on unreleased results
              description: |-
                ## Purpose
                Drafting tools are tempting in a tight earnings week, but pasting unreleased numbers into an unapproved service can breach confidentiality and insider rules. Agreeing which tools are approved, what may be put into them before release and who checks the output keeps the speed without the exposure.

                ## Milestones
                1. A list of AI tools approved by IT and legal for confidential results work.
                2. A one-page rule on what may and may not be entered before release.
                3. A human check required on every AI-assisted draft, with numbers tied out.
                4. The rule shared with the working group and added to the run sheet.
              priority: medium
              deadlineOffsetDays: 45
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A one-page rule on AI tools for unreleased results, approved by IT and legal and briefed to the working group."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Ask IT which AI tools are approved for confidential data"
                - "Draft the one-page rule with legal"
                - "Add a human review step for AI-assisted drafts to the run sheet"
                - "Brief the working group before the next cycle starts"
            - name: Mock earnings call with a hostile panel
              description: |-
                ## Purpose
                Rehearsing answers in your head is not the same as hearing a sceptical analyst ask the follow-up. A mock call a few days before results, with colleagues or an adviser playing analysts and asking the hardest questions from the bank, shows where answers wobble while there is still time to fix them.

                ## Milestones
                1. A panel of three or four people briefed to play analysts.
                2. The full script read and timed, followed by thirty minutes of questions.
                3. Weak answers rewritten and added to the bank.
                4. The mock held at least three working days before every call.
              priority: medium
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A timed mock call with at least thirty minutes of hostile questions held before every results call, with weak answers rewritten."
                cadence: cyclic
              tasks:
                - "Choose four people to play analysts and brief them"
                - "Pick the ten hardest questions from the bank"
                - "Hold the mock call three working days before each results call @recurring(quarterly)"
                - "Rewrite the answers that wobbled and update the bank"
            - name: Earnings day minute-by-minute run of show
              description: |-
                ## Purpose
                On results day the release goes out, the filing goes in, the website updates, the call starts and call-backs begin, often within two hours. A minute-by-minute plan naming who sends each item, where the executives sit, who watches the wire and what happens if the line drops lets everyone do their part calmly.

                ## Milestones
                1. A timed run of show from final sign-off to the last call-back.
                2. A named person for the wire, filing, website, call operator and social channels.
                3. A contingency plan for a failed line, a leak or an early release.
                4. The run of show rehearsed the day before each call.
              priority: medium
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A timed run of show with named owners and contingencies, rehearsed with the team the day before each call."
                cadence: cyclic
              tasks:
                - "Write the timed run of show from sign-off to the last call-back"
                - "Name the person responsible for each step"
                - "Write down what happens if the line drops or the numbers leak"
                - "Walk through the run of show with the team the day before each call @recurring(quarterly)"
            - name: First earnings call as a listed company
              description: |-
                ## Purpose
                The first quarterly results after an IPO set the tone with new holders, and they often arrive only weeks after the prospectus. Planning this quarter as its own project, with the advisers still close at hand, a clear line back to the offering documents and extra rehearsal, gives a newly listed management team its best chance of a clean start.

                ## Milestones
                1. The first results date confirmed against the research quiet period and the filing deadline.
                2. Release, script and Q&A built with the offering documents' disclosures beside them.
                3. Two full mock calls held.
                4. A guidance approach agreed with the CFO, legal and advisers.
                5. The call delivered and a debrief held.

                ## Notes
                Expect questions on anything the prospectus mentioned. Inconsistency with the offering documents is the fastest way to lose new holders' trust.
              priority: medium
              deadlineOffsetDays: 90
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "The first results as a listed company delivered on the agreed date, consistent with the offering documents, after two mock calls."
                cadence: one-shot
                effort_hours_estimate: "40"
              tasks:
                - "Confirm the first results date with legal and the advisers"
                - "List the prospectus statements analysts will check against"
                - "Book two mock calls in the fortnight before results"
                - "Agree the guidance approach with the CFO and legal"
            - name: Full-year results and annual outlook package
              description: |-
                ## Purpose
                Fourth-quarter results carry more weight: the full-year numbers, the audit timetable, any dividend decision and usually next year's guidance. Treating them as a bigger package with an earlier start, a longer script and the annual report team in the loop stops the full year being squeezed into a normal quarter's timeline.

                ## Milestones
                1. An extended timeline starting two weeks earlier than a normal quarter.
                2. The audit sign-off date confirmed against the release date.
                3. Full-year highlights, outlook and any dividend wording agreed with the board.
                4. Next year's guidance range approved and reflected in all materials.
              priority: medium
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "Full-year results released on the planned date with audited figures, an agreed outlook and next year's guidance in every document."
                cadence: cyclic
              tasks:
                - "Start the full-year timeline two weeks earlier than a normal quarter @recurring(yearly)"
                - "Confirm the audit sign-off date with the auditors"
                - "Agree the outlook and dividend wording with the board"
                - "Brief the annual report team on the final numbers"
            - name: Profit warning and trading update readiness
              description: |-
                ## Purpose
                When the quarter is going to land well outside guidance or consensus, many markets expect the news to be released promptly rather than held for the scheduled date. Preparing the escalation trigger, an outline statement and an approval chain in advance means the company can move within hours, on legal advice, if that day comes.

                ## Milestones
                1. A threshold agreed for escalating forecast changes to the CFO and legal.
                2. An outline trading update approved in principle by legal.
                3. An emergency approval chain that works outside office hours.
                4. A plan for the short call or webcast that would follow.

                ## Notes
                Whether disclosure is required is a legal judgement made on the facts at the time. This project makes sure the process is ready, not the conclusion.
              priority: high
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "An escalation threshold, outline trading update and out-of-hours approval chain approved by legal and filed with the working group."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Agree with FP&A when a forecast change escalates to the CFO"
                - "Ask legal to approve the outline of a trading update"
                - "Write the out-of-hours approval chain with phone numbers"
                - "Plan how a short call would follow an unscheduled update"
            - name: One-person investor relations earnings kit
              description: |-
                ## Purpose
                Small-cap companies often have one investor relations manager doing everything from the release to the call-backs, with the CFO as the only reviewer. A lean kit, with a cut-down run sheet, an outsourced transcript, an agency on call for results day and a trained backup, stops one person becoming the single point of failure.

                ## Milestones
                1. A cut-down run sheet covering only the steps that cannot be skipped.
                2. Tasks that can be outsourced identified and costed.
                3. A named backup in finance trained to run the release sequence.
                4. One full cycle run with the kit and changes noted.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A lean earnings kit with a trained backup used for one full cycle, with outsourced tasks costed and agreed with the CFO."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "Mark the run sheet steps that cannot be skipped"
                - "Get quotes for transcript, webcast and results-day support"
                - "Train a finance colleague to send the release if you cannot"
                - "Note what to change after the first cycle with the kit"
            - name: New CFO's first earnings cycle
              description: |-
                ## Purpose
                Incoming CFOs are scrutinised hardest on their first call, when they know the business least. A structured handover covering eight quarters of messages, the guidance history, the analysts' favourite questions and open commitments, plus extra rehearsal, lets a new CFO speak with confidence within their first two months.

                ## Milestones
                1. A briefing pack prepared from the earnings archive and the Q&A bank.
                2. Handover meetings held with the controller, FP&A and the outgoing CFO where possible.
                3. The new CFO's section of the script drafted in their own voice.
                4. Two rehearsals held before the call.

                ## Notes
                Investors expect a new CFO to keep existing guidance unless there is a clear reason. Any reset is a separate, deliberate decision.
              priority: medium
              deadlineOffsetDays: 90
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "The new CFO delivers the first call after a briefing pack, handover meetings and two rehearsals, with existing guidance addressed."
                cadence: phased
                effort_hours_estimate: "16"
              tasks:
                - "Build a briefing pack from the archive and the Q&A bank"
                - "Book handover meetings with the controller and FP&A"
                - "Draft the CFO section in the new CFO's own words"
                - "Hold two rehearsals before the first call"
            - name: Leadership change announced with results
              description: |-
                ## Purpose
                Announcing a CEO or CFO departure alongside results is common, and the leadership news will take over the call if it is not handled. Aligning the timing with the board and legal, preparing one short statement and a set of answers on strategy and succession, and agreeing who gives them keeps the quarter's numbers from being lost.

                ## Milestones
                1. Announcement timing agreed with the board and legal.
                2. A short statement placed in the release and the opening remarks.
                3. Answers on succession, strategy and guidance added to the Q&A bank.
                4. Messages to employees and major holders timed to the release.
              priority: low
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "A leadership change announced with results using a single statement, prepared answers and timed messages agreed with the board."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Confirm the announcement timing with the board chair and legal"
                - "Draft a short statement for the release and script"
                - "Add succession and strategy questions to the bank"
                - "Time employee and holder messages to the release"
            - name: Results in a quarter with a major acquisition
              description: |-
                ## Purpose
                Closing a large acquisition mid-quarter muddies every comparison: revenue jumps, margins shift and integration costs appear. Planning how to show organic and acquired growth separately, how to treat deal costs and what like-for-like figures to give keeps investors able to judge the underlying business.

                ## Milestones
                1. Organic and acquired contributions separated with finance.
                2. The treatment of deal and integration costs agreed with the auditors.
                3. Pro forma or like-for-like figures prepared where useful and permitted.
                4. Questions on integration and promised cost savings added to the bank.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Results released with organic and acquired growth shown separately and deal costs explained consistently in every document."
                cadence: phased
                effort_hours_estimate: "16"
              tasks:
                - "Agree with finance how to split organic and acquired growth"
                - "Confirm the treatment of deal costs with the auditors"
                - "Prepare like-for-like comparisons for the release"
                - "Add questions on integration and promised cost savings to the bank"
            - name: Delayed results or restatement communications
              description: |-
                ## Purpose
                Sometimes the numbers are not ready: an accounting review, an open audit question or an error found in prior periods forces a delay or a restatement. Planning how to announce it, what can be said, the new timetable and how to answer holders limits the damage to trust that silence would cause.

                ## Milestones
                1. The facts, the new timetable and any regulatory deadlines confirmed with legal and the auditors.
                2. A short holding statement approved.
                3. A Q&A covering what is known, what is not and when the next update comes.
                4. Every update issued on the date promised.

                ## Notes
                Every word here is a legal and audit matter. Keep the process tight and the statements factual.
              priority: medium
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "A delay or restatement announced with an approved statement and timetable, and every promised update issued on time."
                cadence: one-shot
                effort_hours_estimate: "12"
              tasks:
                - "Confirm the facts and new timetable with legal and the auditors"
                - "Draft a holding statement for approval"
                - "Write a Q&A on what is and is not yet known"
                - "Issue each update on the date promised"
            - name: Earnings after a crisis or major incident
              description: |-
                ## Purpose
                Cyber attacks, product recalls, plant fires or major lawsuits in the quarter will take over the call whatever the numbers say. Agreeing with legal and the incident team what can be said, quantifying the effect where possible and putting the topic early in the remarks shows control and avoids answering the same question ten times.

                ## Milestones
                1. The agreed public position confirmed with legal and the incident team.
                2. Financial effects quantified, or a clear statement of when they will be.
                3. The topic placed early in the prepared remarks.
                4. A focused set of answers on the incident ready in the bank.
              priority: low
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "Results delivered with an agreed public position on the incident, effects quantified or dated, and prepared answers in the bank."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Get the current public position from the incident team"
                - "Ask finance which effects can be quantified now"
                - "Move the incident to the opening section of the script"
                - "Write five answers on the incident for the bank"
            - name: Dual-listed results across time zones and languages
              description: |-
                ## Purpose
                Companies listed in two markets, or with large holders on another continent, face different regulators, filing times and languages for the same quarter. A release time that works for both, translations checked by a finance reviewer and not only a translator, and a second call or replay timed for the other region keep both sets of holders on equal terms.

                ## Milestones
                1. Disclosure requirements and filing deadlines for both markets mapped.
                2. A release time chosen that meets simultaneous disclosure in both.
                3. Translated materials checked by a bilingual finance reviewer.
                4. A second call, replay or written Q&A timed for the other region.
              priority: low
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "Results released simultaneously in both markets with checked translations and a second call or replay for the other region."
                cadence: phased
                effort_hours_estimate: "12"
              tasks:
                - "Map the filing deadlines in both markets"
                - "Choose a release time that works for both exchanges"
                - "Find a bilingual finance reviewer for the translations"
                - "Schedule a second call or replay for the other region"
            - name: Management commitments register across quarters
              description: |-
                ## Purpose
                Executives make promises on calls, a margin target by next year or a product launch by the summer, and analysts track them carefully. Logging every commitment from releases and calls with a date and an owner, and reporting back on each, tells you what must be addressed before an analyst raises it.

                ## Milestones
                1. Commitments from the last eight quarters logged with dates.
                2. An owner and current status recorded for each.
                3. Missed or changed commitments addressed in the next script.
                4. The register reviewed monthly by investor relations and the CFO.
              priority: low
              frontmatter:
                mode: operating
                output_kind: artifact
                success_criteria: "A commitments register covering eight quarters, reviewed monthly, with every missed commitment addressed in the next script."
                cadence: rolling
              tasks:
                - "Pull every forward commitment from the last eight transcripts"
                - "Assign an owner and status to each commitment"
                - "Update the register status with each owner @recurring(monthly:20)"
                - "Flag missed commitments for the next script"
            - name: Share price reaction analysis after results
              description: |-
                ## Purpose
                Knowing why the shares moved after results is more useful than knowing that they moved. Recording the price and volume reaction against the market and peers, the surprise against consensus and the themes in analyst notes over eight quarters shows which messages the market rewards and which it ignores.

                ## Milestones
                1. A log of price, relative move and volume for each results day.
                2. Each move set against the consensus surprise and any guidance change.
                3. Themes from analyst notes recorded for each quarter.
                4. A summary written after eight quarters of what drives the reaction.

                ## Notes
                Start from the **Metrics log** template. This is for understanding how communication lands, not for predicting or trading the shares.
              priority: low
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A results reaction log covering at least four quarters, with each move set against consensus surprise and guidance change."
                cadence: cyclic
              tasks:
                - "Set up a log for price, relative move and volume"
                - "Record the reaction and consensus surprise after each results day @recurring(quarterly)"
                - "Note the three main themes from analyst notes"
                - "Write a summary after eight quarters"
            - name: Annual review of the earnings disclosure process
              description: |-
                ## Purpose
                Disclosure controls should be tested like any other control, and a near miss in one quarter is a warning for the next. A yearly review by internal audit or an independent colleague of the run sheets, sign-offs, tie-outs and any corrections issued gives the audit committee assurance and produces a short list of fixes.

                ## Milestones
                1. Evidence collected for four quarters: run sheets, sign-offs, tie-outs and committee minutes.
                2. Errors, corrections and near misses listed with root causes.
                3. Findings presented to the audit committee.
                4. Fixes assigned owners and dates and tracked to completion.

                ## Notes
                Start from the **Remediation plan** template.
              priority: medium
              frontmatter:
                mode: research
                output_kind: deliverable
                success_criteria: "A yearly review of the earnings process presented to the audit committee, with every finding assigned and tracked to closure."
                cadence: cyclic
              tasks:
                - "Collect four quarters of run sheets and sign-off evidence"
                - "List every correction and near miss with its cause"
                - "Present the findings to the audit committee @recurring(yearly)"
                - "Track each fix to completion with its owner"
---

# Quarterly Earnings Communications

This area is for the investor relations lead, CFO, controller or communications manager at a listed company who has to put the quarter's results in front of the market four times a year. It starts with the foundations (the results calendar, the approval path, a release template, cautionary language and non-GAAP rules), then the quarterly machinery of drafting, tie-out and Q&A, the skills behind a credible call, decisions about format and timing, the dated events, the situations that change a quarter, and finally the specialist work of tracking what management has promised and auditing the process itself.

What repeats is the quarterly cycle: the countdown run sheet, newswire test, quiet period notice, consensus check, guidance decision, full tie-out, mock call, results-day walk-through and post-call debrief, with a monthly sweep of the Q&A bank and the commitments register and a yearly reset of the results calendar and spokesperson training. The Vendor, Operational checklist, Feedback themes, Metrics log and Remediation plan templates pair with the projects that name them. Installing adds all 50 projects as active, so archive the ones that are not for you yet.
