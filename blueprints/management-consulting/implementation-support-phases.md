---
id: management-consulting.implementation-support-phases
name: Implementation Support Phases
description: "Stay on after the recommendation and help the client make it real: pilots with clear go or no-go criteria, change support, benefits tracked against a locked baseline and a handover the client owns."
category: business
version: 1.0.0
tags: [management-consulting, implementation-support-phases, knowledge-worker, implementation, pilots, change-management, benefits-tracking, handover]
author: Aurum Technology
starter_structure:
  templates:
    - risk-register
    - metrics-log
    - skills-matrix
    - remediation-plan
    - meeting-notes
  pillars:
    - name: Management Consulting
      emoji: "📋"
      description: "Consulting as a craft and a business: case interviews and getting hired, structuring problems with issue trees, hypothesis-driven workplans, client interviews, slides and steering committees, the career from analyst to partner, and going independent or building a boutique firm with sensible pricing."
      pillarFrontmatter:
        review_cadence: monthly
      areas:
        - name: Implementation Support Phases
          description: "Staying on to help a client implement: pilot design, change support, tracking benefits and planning the handover so the client owns the results."
          projects:
            - name: Implementation phase scope and exit criteria
              description: |-
                ## Purpose
                Implementation phases that start without written exit criteria tend to run until the budget runs out, with the client unsure what it bought and the team unsure when to leave. Agreeing in writing which initiatives are in scope, what done looks like for each and the date the consulting team steps back gives both sides a clean finish line from the first week.

                ## Milestones
                1. A one-page scope listing each initiative carried into implementation, with anything deliberately left out named.
                2. Exit criteria per initiative written as observable states, such as a process running at two sites with client staff only.
                3. A planned end date and a taper point agreed with the sponsor.
                4. The document signed off by the sponsor and the engagement partner.

                ## Notes
                Write the exit criteria around the client operating alone, not around consultant activity. A criterion like training delivered is met on day one and proves nothing.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A signed scope and exit criteria document names every initiative, its done state and the consulting team's planned end date."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "List every recommendation the client approved and mark which carry into implementation"
                - "Write one observable done state for each initiative in scope"
                - "Propose a taper point and end date to the engagement partner"
                - "Walk the sponsor through the draft and record the agreed changes"
            - name: Recommendation to implementation plan translation
              description: |-
                ## Purpose
                A board-approved recommendation is a statement of intent, not a plan anyone can execute on Monday morning. Breaking each recommendation into initiatives, milestones, dependencies and the people affected turns the readout deck into a plan a client operations manager can open and act on.

                ## Milestones
                1. Each recommendation broken into named initiatives with three to six milestones apiece.
                2. Dependencies between initiatives mapped, including IT changes, policy approvals and hiring.
                3. A first ninety days shown week by week, with later months at monthly level.
                4. The plan reviewed by at least two client managers who will run it, and their changes made.

                ## Notes
                Keep the plan in a tool the client already uses. A beautiful consultant tracker that only the team can edit becomes a handover problem later.
              priority: high
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "An implementation plan covering every in-scope recommendation, with milestones and dependencies, is reviewed and accepted by the client managers who will run it."
                cadence: one-shot
                effort_hours_estimate: "14"
              tasks:
                - "Copy each approved recommendation into a sheet with one row per initiative"
                - "Draft milestones and dependencies for the three largest initiatives first"
                - "Ask the client IT lead which system changes the plan quietly assumes"
                - "Review the draft with two client managers and log their changes"
            - name: Named client owners for every initiative
              description: |-
                ## Purpose
                Initiatives owned by the consulting team stop the day the team leaves. Securing a named client owner for each one, with time released by their line manager, is the single strongest predictor that the change outlasts the engagement.

                ## Milestones
                1. One accountable client owner named for every in-scope initiative.
                2. Each owner's line manager has agreed the share of their week released for the work.
                3. A consultant counterpart assigned to each owner, with the support role written down.
                4. Initiatives with no willing owner escalated to the sponsor with a recommendation.

                ## Notes
                An owner who is told rather than asked is a warning sign. A short conversation about what is in it for them saves weeks of quiet resistance.
              priority: high
              frontmatter:
                mode: service
                output_kind: decision
                success_criteria: "Every in-scope initiative has a named client owner with released time agreed by their manager, recorded in the implementation plan."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "List initiatives that still show a consultant as the owner"
                - "Ask the sponsor for two candidate owners per open initiative"
                - "Meet each candidate to explain the role and the time it takes"
                - "Confirm released time with each owner's line manager in writing"
            - name: Baseline measures locked before any change
              description: |-
                ## Purpose
                Once a pilot starts, nobody can go back and measure how things were, and every later benefit claim rests on that missing number. Locking the baseline for each target measure, with its source, period and calculation, before the first process changes is what makes the benefits case defensible in front of finance.

                ## Milestones
                1. A list of target measures per initiative, each with a definition and a data source.
                2. Baseline values calculated over a period long enough to cover normal seasonality.
                3. The calculation method written down so a client analyst can repeat it.
                4. The baseline signed off by the client finance or performance lead and frozen.

                ## Notes
                Twelve months is a sensible default baseline period where seasonality matters. If only three months exist, say so on the page rather than hiding it.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: research
                output_kind: artifact
                success_criteria: "A frozen baseline document with values, periods, sources and methods for every target measure is signed off by client finance before any pilot starts."
                cadence: one-shot
                effort_hours_estimate: "12"
              tasks:
                - "List the two or three target measures for each initiative"
                - "Request twelve months of history for each measure from the client data owner"
                - "Write the calculation method beside each baseline value"
                - "Book a sign-off session with the finance lead before pilot launch"
            - name: Benefits case agreed with client finance
              description: |-
                ## Purpose
                Benefits promised in a strategy deck often mix cash savings, avoided costs and productivity that never turns into money. Rebuilding the benefits case with client finance, line by line and by type, means the numbers reported later will be ones the finance director already accepts.

                ## Milestones
                1. Each benefit classified as cash saving, revenue, avoided cost or capacity released.
                2. Expected timing of each benefit set out by quarter.
                3. The finance team's rules for recognising each benefit type written down.
                4. A benefits case total agreed with finance, with any gap to the readout figure explained.

                ## Notes
                Capacity released only becomes money when someone decides what to do with the hours. Flag those lines clearly so nobody books them as savings.
              priority: high
              deadlineOffsetDays: 45
              frontmatter:
                mode: service
                output_kind: decision
                success_criteria: "A benefits case, classified by type and timed by quarter, is agreed in writing with client finance and reconciled to the readout figure."
                cadence: one-shot
                effort_hours_estimate: "10"
              tasks:
                - "Pull the benefit figures from the final readout into one sheet"
                - "Tag each line as cash, revenue, avoided cost or capacity"
                - "Ask the finance lead how each benefit type is recognised in their accounts"
                - "Write a short note explaining any gap between readout and agreed totals"
            - name: Implementation risk and dependency register
              description: |-
                ## Purpose
                Rollouts usually fail on something outside the plan: a system release slips, a union consultation runs long, a key manager resigns. Keeping one register of risks and cross-initiative dependencies, each with an owner and a trigger, lets the team act on the warning sign rather than the failure.

                ## Milestones
                1. A register with at least the top fifteen risks and every hard dependency between initiatives.
                2. Each entry carrying an owner, a likelihood and impact rating and a trigger to watch.
                3. Mitigations agreed for every high-rated risk.
                4. A monthly review slot with the client implementation lead in the diary.

                ## Notes
                Start from the **Risk register** template. Keep dependencies in the same register so a slipped IT release shows up next to the initiatives it blocks.
              priority: high
              frontmatter:
                mode: operating
                output_kind: artifact
                success_criteria: "A risk and dependency register with owners, ratings, triggers and mitigations is reviewed monthly with the client implementation lead."
                cadence: rolling
              tasks:
                - "Ask each initiative owner for the three things most likely to derail them"
                - "Map the dependencies on IT releases, approvals and hiring"
                - "Agree a mitigation and owner for every high-rated risk"
                - "Review the top ten risks with the client implementation lead @recurring(monthly:5)"
            - name: Consultant and client role split charter
              description: |-
                ## Purpose
                Clients often expect consultants to keep doing the work, while the consulting team expects to coach, and the gap surfaces as frustration around month two. A short charter that says, activity by activity, who does, who supports and who decides prevents that argument and sets up the handover from the start.

                ## Milestones
                1. The main implementation activities listed, from data refreshes to training sessions.
                2. Each activity marked as consultant does, consultant supports or client does alone, with a date when it shifts.
                3. Decision rights stated for scope changes, timing and budget.
                4. The charter agreed with the sponsor and shared with all initiative owners.

                ## Notes
                Build the shift dates into the charter itself. A split that never changes is a staffing arrangement, not implementation support.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A role split charter covering every main activity, with dated shifts from consultant to client, is agreed with the sponsor and circulated."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "List the twenty or so recurring implementation activities"
                - "Mark who does each one today and who should do it by the exit date"
                - "Write the decision rights for scope, timing and budget changes"
                - "Share the charter with initiative owners and invite corrections"
            - name: Implementation team working rhythm
              description: |-
                ## Purpose
                Mixed client and consultant teams lose days to unclear meeting habits: who attends what, when updates are due, where the latest plan lives. Setting a fixed rhythm of short stand-ups, one weekly review and a shared workspace in the first fortnight gives everyone predictable time back for the real work.

                ## Milestones
                1. A meeting calendar with purpose, attendees and length for each recurring meeting.
                2. A shared workspace holding the plan, the register and the benefits log, with client access.
                3. Update deadlines agreed so the weekly review always has fresh data.
                4. The rhythm reviewed after four weeks and at least one meeting cut or shortened.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A written meeting rhythm and shared workspace are in use by all client leads, with the rhythm reviewed and trimmed after four weeks."
                cadence: rolling
              tasks:
                - "Draft the meeting calendar with purpose and attendees for each slot"
                - "Set up the shared workspace with client access to every tracker"
                - "Run a fifteen-minute stand-up with the client implementation leads @recurring(weekly:mon,wed,fri)"
                - "Ask the team after four weeks which meeting they would drop"
            - name: Organisational readiness check before rollout
              description: |-
                ## Purpose
                Even a sound recommendation can still fail because the organisation has no spare capacity, a competing programme or managers who were never consulted. A quick readiness check across the affected units shows where to start, where to wait and what support each unit needs before change lands on it.

                ## Milestones
                1. Each affected unit rated on capacity, leadership support, competing change and systems readiness.
                2. Short interviews held with at least one manager in every unit.
                3. A readiness heatmap with the two or three units best placed to go first.
                4. Support actions agreed for low-readiness units before their wave starts.

                ## Notes
                Ask about other programmes landing in the same quarter. Change fatigue from three overlapping initiatives explains more resistance than any objection to the content.
              priority: medium
              deadlineOffsetDays: 30
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A readiness rating for every affected unit, based on manager interviews, is presented to the sponsor with a recommended starting order."
                cadence: one-shot
                effort_hours_estimate: "10"
              tasks:
                - "Agree four readiness criteria with the client implementation lead"
                - "Book twenty-minute calls with a manager in each affected unit"
                - "Ask each manager what other change is landing on their team this year"
                - "Turn the ratings into a heatmap with a recommended starting order"
            - name: Weekly implementation status note to the sponsor
              description: |-
                ## Purpose
                Sponsors stop backing an implementation when they hear about problems second hand. A one-page note every Friday, with status per initiative, decisions needed and one honest line on what is going wrong, keeps the sponsor informed and makes bad news ordinary rather than dramatic.

                ## Milestones
                1. A fixed one-page format with initiative status, benefits to date, decisions needed and top risks.
                2. Status colours defined by written rules, not by mood.
                3. Initiative owners supplying their lines by Thursday afternoon.
                4. Eight consecutive notes sent on time.

                ## Notes
                Define amber and red before the first note. A rule such as red means a milestone more than two weeks late with no recovery plan stops colours drifting green.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A one-page status note using written colour rules reaches the sponsor every Friday for at least eight consecutive weeks."
                cadence: rolling
              tasks:
                - "Draft the one-page note format and the colour rules"
                - "Collect status lines from every initiative owner @recurring(weekly:thu)"
                - "Send the one-page status note to the sponsor @recurring(weekly:fri)"
                - "Ask the sponsor after a month what they skip and what they want added"
            - name: Monthly benefits tracking log
              description: |-
                ## Purpose
                Benefits that are only counted at the end of an engagement are argued over and usually discounted. Recording actuals against plan every month, using the agreed baseline method, shows early whether an initiative is delivering and gives finance nothing to dispute at sign-off.

                ## Milestones
                1. A log with one row per benefit line, plan by month and actuals entered monthly.
                2. Each actual traceable to a named report or ledger extract.
                3. Variances over an agreed threshold explained in a sentence.
                4. Quarterly totals reconciled with the finance team's own figures.

                ## Notes
                Start from the **Metrics log** template. Enter actuals even when they disappoint; a quiet month left blank looks worse at sign-off than one explained.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Benefits actuals are entered monthly against plan, with sources and variance notes, and reconciled with finance every quarter."
                cadence: rolling
              tasks:
                - "Set up the log with plan values from the agreed benefits case"
                - "Enter last month's actual benefits against plan with sources @recurring(monthly:8)"
                - "Reconcile tracked benefits with the finance team's figures @recurring(quarterly)"
                - "Write a one-line explanation for every variance over the threshold"
            - name: Blocker escalation routine
              description: |-
                ## Purpose
                Most implementation delays are small blockers left sitting: an access request, a missing approval, a manager who will not release staff. A simple routine that ages every blocker and escalates anything older than ten days to the right level keeps the plan moving without the sponsor hearing about every hiccup.

                ## Milestones
                1. A blocker list with date raised, owner, the person who can clear it and age in days.
                2. An escalation ladder written down: owner, implementation lead, sponsor.
                3. Every blocker over ten days old either cleared or escalated.
                4. Median blocker age tracked and falling over the first two months.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "No blocker sits unescalated for more than ten days, and median blocker age is reported monthly."
                cadence: rolling
              tasks:
                - "Create the blocker list with an age column calculated from date raised"
                - "Write the three-step escalation ladder and agree it with the sponsor"
                - "Sweep blockers older than ten days and escalate each one @recurring(weekly:tue)"
                - "Report the median blocker age in the monthly review"
            - name: Adoption measurement for new ways of working
              description: |-
                ## Purpose
                New processes can be launched, trained and signed off while most staff quietly carry on the old way. Measuring adoption directly, through system usage, compliance spot checks or output data, tells you where the change has really landed and where the benefits will never appear.

                ## Milestones
                1. One or two adoption measures defined per initiative, separate from benefit measures.
                2. A data source for each measure that refreshes at least monthly.
                3. Adoption shown by site or team, so laggards are visible.
                4. Targeted follow-up agreed for any unit below the adoption threshold.

                ## Notes
                Adoption leads benefits by weeks or months. If adoption is flat, do not expect the savings line to move.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Adoption figures for every initiative are refreshed monthly by site or team, with follow-up agreed for units below threshold."
                cadence: rolling
              tasks:
                - "Choose an adoption measure for each initiative with its owner"
                - "Ask the system owner for a usage report broken down by team"
                - "Refresh adoption figures by site and team @recurring(monthly:12)"
                - "Agree a follow-up visit for the lowest-adopting unit each month"
            - name: Change champion network across sites
              description: |-
                ## Purpose
                Central teams cannot answer every question at every site, and staff trust a colleague more than a consultant. A network of change champions, one per team or shift, gives the implementation local eyes, early warning of trouble and someone nearby who can show the new process.

                ## Milestones
                1. Champions recruited for every affected team, with their manager's agreement.
                2. A short champion briefing pack covering the change, common questions and where to escalate.
                3. A regular champions call with issues logged and answered.
                4. Champion feedback visible in the status note at least monthly.

                ## Notes
                Pick champions who are respected, not just enthusiastic. A sceptic who is won over carries more weight than a volunteer everyone expected.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every affected team has a briefed champion, and a regular champions call logs and closes issues each month."
                cadence: rolling
              tasks:
                - "Ask each team manager to nominate one respected champion"
                - "Write a two-page champion briefing with the ten likeliest questions"
                - "Host the champions call and log every issue raised @recurring(monthly:15)"
                - "Add a champion feedback line to the status note"
            - name: Pilot learning review rhythm
              description: |-
                ## Purpose
                Pilots exist to learn, yet many teams run them like miniature rollouts and only look at results at the end. A weekly review with the site leads, covering what was tried, what broke and what to change next week, turns a pilot into a fast series of fixes before scale-up.

                ## Milestones
                1. A pilot learning log with date, observation, change made and result.
                2. A weekly thirty-minute review held with pilot site leads.
                3. At least one design change made per fortnight from what the log shows.
                4. A summary of all pilot changes ready for the scale-up decision.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A pilot learning log is kept throughout the pilot, with weekly reviews and documented design changes feeding the scale-up decision."
                cadence: rolling
              tasks:
                - "Set up the pilot learning log with four columns"
                - "Hold the pilot learning review with site leads @recurring(weekly:thu)"
                - "Pick one change to test at the pilot site next week"
                - "Summarise all pilot changes for the scale-up pack"
            - name: Client capability transfer tracker
              description: |-
                ## Purpose
                A handover date means little if client owners still phone the consultants for every data refresh or tricky meeting. Scoring each owner's independence on the key skills every month shows whether capability is really moving across and where coaching time should go before the team leaves.

                ## Milestones
                1. The skills each owner needs listed, from running the tracker to facilitating a review.
                2. A simple four-level scale from watches to does alone without help.
                3. Monthly scores recorded for every owner, agreed with them rather than imposed.
                4. Every owner at does alone on the critical skills before the exit date.

                ## Notes
                Start from the **Skills matrix** template. Score with the owner, not about them; the conversation is half the value.
              priority: medium
              frontmatter:
                mode: service
                output_kind: habit
                success_criteria: "Every client owner reaches the top independence level on their critical skills before the planned exit date, shown on a monthly tracker."
                cadence: rolling
              tasks:
                - "List the six to ten skills each client owner needs to run alone"
                - "Agree the four-level independence scale with the implementation lead"
                - "Score each owner's independence with them on the tracker @recurring(monthly:20)"
                - "Plan coaching time for the two lowest-scoring skills"
            - name: Consultant footprint taper plan
              description: |-
                ## Purpose
                Implementation teams often stay at full size because nobody planned the step down, which is expensive for the client and slows the handover. A taper plan that reduces consultant days as client capability rises keeps fees aligned to real need and signals clearly that ownership is moving.

                ## Milestones
                1. Planned consultant days by month, falling toward the exit date.
                2. Each reduction tied to a capability or milestone trigger, not only a date.
                3. Actual days compared with plan monthly and variances explained.
                4. The sponsor told in advance of each step down.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Consultant days fall each month in line with a trigger-based taper plan, with actuals reviewed monthly and shared with the sponsor."
                cadence: rolling
              tasks:
                - "Draft planned consultant days by month to the exit date"
                - "Link each step down to a capability score or milestone"
                - "Compare consultant days used against the taper plan @recurring(monthly:25)"
                - "Tell the sponsor about the next step down a month ahead"
            - name: Frontline feedback loop on the change
              description: |-
                ## Purpose
                People doing the work see the flaws in a new process first, often within days, but rarely have a way to say so. A simple feedback channel, read every week and answered visibly, catches design problems early and shows staff that the change is being done with them rather than to them.

                ## Milestones
                1. A low-effort feedback channel in place, such as a short form or a box at each site.
                2. Every submission themed and logged within a week.
                3. A visible you said, we did update shared with staff monthly.
                4. At least three process fixes traced back to frontline feedback.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Frontline feedback is themed weekly and answered monthly, with at least three process changes traced to it."
                cadence: rolling
              tasks:
                - "Set up a two-question feedback form with the client communications team"
                - "Read and theme the new frontline feedback @recurring(weekly:mon)"
                - "Publish a short you said, we did update to affected staff"
                - "Pass recurring design issues to the relevant initiative owner"
            - name: Pilot design principles and controls
              description: |-
                ## Purpose
                Consultants trained on analysis often design pilots that cannot answer the question they were meant to answer: too short, at a hand-picked site, with no comparison. Learning the basics of pilot design, from clear hypotheses to comparison sites and run length, makes the later scale-up decision far easier to defend.

                ## Milestones
                1. Notes on the main pilot designs: before and after, matched comparison site and staggered start.
                2. The common traps written up, including novelty effects and hand-picked sites.
                3. A one-page pilot design checklist you can reuse.
                4. The checklist applied to one live or past pilot, with gaps noted.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A reusable one-page pilot design checklist exists and has been applied to a real pilot with its gaps recorded."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Read a practical guide to field experiments in business settings"
                - "Write down three traps that made past pilots inconclusive"
                - "Draft a one-page pilot design checklist"
                - "Test the checklist against the current or last pilot design"
            - name: Benefits realisation methods
              description: |-
                ## Purpose
                Tracking benefits well depends on knowing the difference between a benefit, an outcome and an output, and on handling timing, double counting and one-off effects. A short study of benefits realisation practice, as used in programme management, gives you methods finance teams recognise.

                ## Milestones
                1. Notes on benefit mapping from initiative to outcome to financial line.
                2. Rules written for one-off versus recurring benefits and run-rate versus in-year.
                3. Common double-counting traps listed with an example each.
                4. One benefit line from the live engagement rewritten using the methods.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Written notes on benefit mapping, timing and double counting exist, and one live benefit line has been restated using them."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Read a programme management guide's chapter on benefits realisation"
                - "Draw a benefit map for one initiative from activity to money"
                - "Write the difference between run-rate and in-year benefit in two sentences"
                - "Restate one live benefit line using the new method"
            - name: Coaching client owners instead of doing the work
              description: |-
                ## Purpose
                The instinct of a capable consultant is to fix the spreadsheet or run the meeting, which feels efficient and quietly blocks the handover. Practising a coaching stance, asking before telling and letting owners lead with you in support, is the core skill of good implementation support.

                ## Milestones
                1. A simple coaching structure learned, such as goal, reality, options and way forward.
                2. Weekly coaching conversations held with at least two client owners.
                3. A short log of each conversation and what the owner decided.
                4. Feedback from owners after six weeks on what helped and what did not.

                ## Notes
                Agree with your manager that slower progress for a few weeks is acceptable. Without that, the pressure to just do it yourself wins every time.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: habit
                success_criteria: "Weekly coaching conversations with at least two client owners are logged for six weeks, with owner feedback collected at the end."
                cadence: phased
                effort_hours_estimate: "12"
              tasks:
                - "Learn one simple coaching structure and write its four questions down"
                - "Hold a coaching conversation with a client owner and log the decisions @recurring(weekly:wed)"
                - "Agree with your manager which tasks you will stop doing for owners"
                - "Ask two owners after six weeks what helped them most"
            - name: Reading resistance and adoption signals
              description: |-
                ## Purpose
                Resistance rarely announces itself; it shows up as missed meetings, workarounds, data that stops arriving or managers who agree in the room and change nothing. Learning to read these signals and respond to the cause, whether fear, workload or a design flaw, prevents small resistance hardening into failure.

                ## Milestones
                1. A list of observable resistance signals relevant to this client.
                2. Signals noted for each unit over a month.
                3. For each strong signal, a likely cause identified through a conversation.
                4. A response agreed for each cause, such as redesign, extra support or a sponsor conversation.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Resistance signals are recorded by unit for a month, with a cause and a response agreed for each strong signal."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Write down eight resistance signals you would expect at this client"
                - "Note which signals appear in each unit over four weeks"
                - "Talk to one person in the strongest-signal unit about what is behind it"
                - "Agree a response with the initiative owner for each cause found"
            - name: Standard operating procedures the client will use
              description: |-
                ## Purpose
                New processes are often documented in consultant slides that frontline staff never open. Writing short standard operating procedures in the client's own format and words, tested by someone doing the job, gives the change a home after the team leaves.

                ## Milestones
                1. The client's existing procedure format and document library identified.
                2. Procedures drafted for each changed process, each no longer than two pages.
                3. Each procedure tested by a frontline user who follows it unaided.
                4. Procedures approved by the process owner and filed in the client's library.

                ## Notes
                A procedure that needs a consultant to explain it has failed the test. Rewrite until the frontline user can follow it alone.
              priority: medium
              frontmatter:
                mode: service
                output_kind: deliverable
                success_criteria: "Every changed process has a procedure in the client's format, tested by a frontline user and approved by its process owner."
                cadence: phased
                effort_hours_estimate: "16"
              tasks:
                - "Ask the quality or operations team for their procedure template"
                - "Draft the procedure for the first changed process in two pages"
                - "Watch a frontline user follow the draft and note where they stall"
                - "File approved procedures in the client's document library"
            - name: Train-the-trainer rollout design
              description: |-
                ## Purpose
                Consultants cannot personally train hundreds of staff across sites, and training they deliver leaves with them. Designing a train-the-trainer programme, with client trainers certified on the new process, scales the rollout and leaves a training capability behind.

                ## Milestones
                1. Training needs set out by role, with the length of session each role needs.
                2. Client trainers selected and taken through the material and a practice session.
                3. Each trainer observed delivering once and signed off.
                4. Training completion tracked by site against the rollout plan.
              priority: medium
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "Client trainers are certified after an observed session and training completion is tracked by site against the rollout plan."
                cadence: phased
                effort_hours_estimate: "20"
              tasks:
                - "List the roles affected and what each needs to learn"
                - "Ask site managers to nominate trainers with credibility on the floor"
                - "Run a practice session where each trainer delivers one module"
                - "Set up a completion tracker by site and role"
            - name: Pilot site selection decision
              description: |-
                ## Purpose
                The site chosen for a pilot shapes everything that follows: a showcase site proves nothing, while a site in crisis cannot absorb change. Choosing pilot sites against written criteria, with a deliberate mix of typical and difficult conditions, makes the results credible to the units that come later.

                ## Milestones
                1. Selection criteria written, covering representativeness, readiness, data quality and leadership.
                2. A longlist of candidate sites scored against the criteria.
                3. One or two pilot sites chosen, plus a comparison site where possible.
                4. The choice and the reasons recorded and agreed with the sponsor.

                ## Notes
                Avoid choosing the site whose manager volunteered first. Their enthusiasm is real, but other sites will dismiss the result as special.
              priority: medium
              deadlineOffsetDays: 30
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "Pilot and comparison sites are chosen against written criteria, with scores and reasons agreed by the sponsor."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Write four or five pilot site selection criteria"
                - "Score every candidate site with the client operations lead"
                - "Pick the pilot and a comparison site and write why in one paragraph"
                - "Present the choice to the sponsor for agreement"
            - name: Pilot scorecard and go or no-go criteria
              description: |-
                ## Purpose
                Without thresholds set in advance, every pilot gets declared a success. Writing the scorecard and the go, adjust or stop thresholds before the pilot starts, and having the sponsor sign them, protects the client from scaling something that did not work.

                ## Milestones
                1. Three to six measures chosen, covering benefit, adoption, quality and staff impact.
                2. Thresholds written for go, adjust and stop on each measure.
                3. The run length and data collection method fixed.
                4. Scorecard and thresholds signed by the sponsor before launch.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A pilot scorecard with go, adjust and stop thresholds for each measure is signed by the sponsor before the pilot launches."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Pick one benefit, one adoption, one quality and one staff measure"
                - "Draft go, adjust and stop thresholds for each measure"
                - "Check with the data owner that each measure can be collected weekly"
                - "Get the sponsor's signature on the scorecard before launch"
            - name: Scale-up decision after the pilot
              description: |-
                ## Purpose
                The end of a pilot is a decision point, and the pressure to roll out regardless is strong when the plan already shows wave one starting next month. Preparing a clear decision pack, results against the pre-agreed thresholds, design changes made and conditions for scaling, lets the sponsor make a real choice.

                ## Milestones
                1. Pilot results set out against every threshold on the signed scorecard.
                2. Design changes from the pilot listed with their effect.
                3. A recommendation of go, adjust and re-pilot, or stop, with conditions.
                4. The decision recorded with the sponsor's name and date.

                ## Notes
                Present the stop option seriously. A sponsor who sees it was considered trusts the go recommendation more.
              priority: high
              deadlineOffsetDays: 120
              frontmatter:
                mode: service
                output_kind: decision
                success_criteria: "A scale-up decision of go, adjust or stop is recorded with the sponsor, based on results against the pre-signed pilot scorecard."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Fill in the pilot scorecard with final results"
                - "Summarise the design changes made during the pilot"
                - "Write the recommendation with conditions for scaling"
                - "Book the decision meeting with the sponsor and record the outcome"
            - name: Rollout wave sequencing plan
              description: |-
                ## Purpose
                Rolling out to every site at once overloads trainers, support and systems, while a slow site-by-site approach loses momentum. Grouping units into waves by readiness, dependencies and support capacity gives a rollout the client can actually staff.

                ## Milestones
                1. Units grouped into waves using readiness ratings and dependencies.
                2. Support capacity, trainers and floor support checked for each wave.
                3. Gaps between waves long enough to fix problems found in the previous one.
                4. The wave plan agreed with site leaders and published.
              priority: medium
              deadlineOffsetDays: 60
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A wave plan grouping every unit by readiness and support capacity is agreed with site leaders and published."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Group units into draft waves using the readiness heatmap"
                - "Check trainer and floor support capacity for each wave"
                - "Leave at least two weeks between waves for fixes"
                - "Review the wave plan with site leaders and publish it"
            - name: Recovery plan for a stalled initiative
              description: |-
                ## Purpose
                Sooner or later one initiative stalls: milestones slip, the owner disengages, the numbers stop moving. Diagnosing the real cause and agreeing a time-boxed recovery plan, with a clear point to stop if it fails, is better than another month of amber status.

                ## Milestones
                1. The cause of the stall diagnosed through conversations with the owner and affected staff.
                2. A recovery plan with three to five actions and a four to eight week time box.
                3. A review point set where the sponsor decides to continue or stop.
                4. The outcome of the review recorded.

                ## Notes
                Start from the **Remediation plan** template. If the cause is that the initiative was a weak idea, say so; recovery plans for bad ideas waste everyone's time.
              priority: medium
              frontmatter:
                mode: service
                output_kind: decision
                success_criteria: "A time-boxed recovery plan for the stalled initiative ends with a recorded sponsor decision to continue or stop."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "Meet the initiative owner to hear their view of why it stalled"
                - "Talk to two affected staff about what is happening on the ground"
                - "Draft a recovery plan with a time box and a review date"
                - "Take the plan to the sponsor for agreement"
            - name: Re-baselining benefits after a scope change
              description: |-
                ## Purpose
                Scope changes during implementation, such as a site sold, a product dropped or a system delayed, make the original benefits case wrong. Re-baselining openly, with the reasons and the before and after figures, keeps the benefits story honest and avoids a painful surprise at final sign-off.

                ## Milestones
                1. The scope change and its effect on each benefit line described.
                2. A revised benefits case with original and new figures side by side.
                3. The change approved by finance and the sponsor.
                4. The benefits log updated with the new plan and a note of the change.
              priority: low
              frontmatter:
                mode: service
                output_kind: decision
                success_criteria: "A revised benefits case showing original and new figures, with reasons, is approved by finance and the sponsor and reflected in the log."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Write a paragraph describing the scope change and when it happened"
                - "Recalculate each affected benefit line with the finance analyst"
                - "Show original and revised figures side by side with reasons"
                - "Update the benefits log once finance approves"
            - name: Descoping initiatives that will not land
              description: |-
                ## Purpose
                Some initiatives in the original recommendation turn out to be impractical once implementation starts, and carrying them on the plan drains attention from the ones that work. Making a deliberate descoping decision, with the reasons recorded, protects the credibility of the whole programme.

                ## Milestones
                1. Each initiative reviewed against progress, adoption and expected benefit.
                2. Candidates for descoping identified with the case for and against.
                3. A decision taken with the sponsor on each candidate.
                4. Descoped initiatives closed formally and the plan and benefits case updated.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "Each descoping candidate has a recorded sponsor decision, and the plan and benefits case are updated for every initiative dropped."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Rank initiatives by progress against their expected benefit"
                - "Write a short case for and against dropping the bottom two"
                - "Take the candidates to the sponsor for a decision"
                - "Close dropped initiatives formally and tell their owners why"
            - name: Sustainment audits after go-live
              description: |-
                ## Purpose
                Processes drift back to the old way within months unless someone checks, particularly after the consultants step back. Short, regular audits at live sites catch drift early, while there is still someone with the authority and the time to correct it.

                ## Milestones
                1. A ten-point audit checklist for each changed process.
                2. Audits rotating across live sites, with results logged.
                3. Drift findings passed to the site manager with a correction date.
                4. The audit routine handed to a client owner before the exit.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Monthly sustainment audits run at live sites with findings logged and corrected, and the routine is owned by a client lead before exit."
                cadence: rolling
              tasks:
                - "Draft a ten-point audit checklist for the first changed process"
                - "Run a spot audit of the new process at one live site @recurring(monthly:18)"
                - "Send drift findings to the site manager with a correction date"
                - "Train a client owner to run the audit alone"
            - name: Pilot launch day preparation
              description: |-
                ## Purpose
                Day one of a pilot sets the tone for the staff involved: missing system access, confused supervisors or no visible support signal that the change is not serious. A launch checklist covering people, systems, materials and floor support makes day one calm and visible.

                ## Milestones
                1. A launch checklist covering access, materials, briefings, data capture and support.
                2. Supervisors briefed two days before launch.
                3. Floor support scheduled for the first week, with named people per shift.
                4. A short end-of-day debrief held on launch day and issues logged.
              priority: medium
              deadlineOffsetDays: 45
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "The pilot launches with every checklist item complete, floor support on each shift and a launch-day debrief logged."
                cadence: one-shot
                effort_hours_estimate: "10"
              tasks:
                - "Write the launch checklist with the pilot site lead"
                - "Test system access for every pilot user three days before launch"
                - "Brief supervisors on the change and where to send questions"
                - "Hold a twenty-minute debrief at the end of launch day"
            - name: Go-live readiness review for the first wave
              description: |-
                ## Purpose
                Going live with wave one when training is half done or a system fix is outstanding damages trust across every later wave. A formal readiness review against agreed criteria, a few days before go-live, gives the sponsor a clear go or delay decision.

                ## Milestones
                1. Readiness criteria agreed covering training, systems, procedures, support and data.
                2. Evidence gathered for each criterion, not just owner assurance.
                3. A go or delay recommendation made with any conditions.
                4. The decision recorded and communicated to wave one sites.
              priority: high
              deadlineOffsetDays: 75
              frontmatter:
                mode: event
                output_kind: decision
                success_criteria: "A readiness review with evidence against each criterion produces a recorded go or delay decision before wave one goes live."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Agree five readiness criteria with the implementation lead"
                - "Collect evidence for each criterion from the owners"
                - "Write the go or delay recommendation with conditions"
                - "Tell the wave one sites the decision the same day"
            - name: Thirty-day post go-live review
              description: |-
                ## Purpose
                A month after go-live is the right time to see what is working, before workarounds harden and while staff still remember the old way. A structured review covering adoption, early benefits, issues and staff experience gives the next wave a better start.

                ## Milestones
                1. Adoption and early benefit figures for the wave collected.
                2. Issues and workarounds gathered from champions and site leads.
                3. A short review document with what to keep, fix and change for the next wave.
                4. Agreed fixes added to the plan with owners.
              priority: medium
              deadlineOffsetDays: 120
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A thirty-day review document with keep, fix and change actions is produced and its fixes are in the plan with owners."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Pull adoption and early benefit figures for the first wave"
                - "Ask champions for the top three workarounds staff are using"
                - "Write a two-page keep, fix and change review"
                - "Add every agreed fix to the plan with an owner"
            - name: Benefits sign-off with the client finance director
              description: |-
                ## Purpose
                At the end of an implementation phase someone senior in finance needs to confirm what was delivered, especially if fees or future work depend on it. Preparing a clean sign-off pack from the monthly log, with evidence and caveats, turns that meeting into a confirmation rather than a negotiation.

                ## Milestones
                1. A sign-off pack with benefits delivered by type, against plan and baseline.
                2. Evidence for each line, traced to ledger extracts or agreed reports.
                3. Caveats stated, such as benefits not yet at full run rate.
                4. The finance director's sign-off recorded with any adjustments.

                ## Notes
                Share the draft pack with the finance team a week before. Nothing should be new in the room.
              priority: medium
              deadlineOffsetDays: 180
              frontmatter:
                mode: event
                output_kind: deliverable
                success_criteria: "A benefits sign-off pack with evidence for every line is confirmed by the client finance director, with adjustments recorded."
                cadence: one-shot
                effort_hours_estimate: "10"
              tasks:
                - "Build the sign-off pack from the monthly benefits log"
                - "Attach the evidence source for every benefit line"
                - "Send the draft to the finance team a week before the meeting"
                - "Record the finance director's sign-off and any adjustments"
            - name: Formal handover meeting to client owners
              description: |-
                ## Purpose
                Handovers that happen by email leave gaps nobody notices until something breaks. A formal meeting where each consultant walks their client owner through what is handed over, what is open and who to call, closes the phase cleanly and puts ownership on record.

                ## Milestones
                1. A handover list per initiative covering trackers, routines, open issues and contacts.
                2. Each client owner confirming they can run every item on the list.
                3. Open issues assigned to client owners with dates.
                4. Minutes recording what was handed over and accepted.

                ## Notes
                Start from the **Meeting notes** template for the minutes. Hold a short dry run with each owner first so the meeting confirms rather than discovers.
              priority: high
              deadlineOffsetDays: 180
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A handover meeting is held with minutes recording each owner's acceptance of their initiative, open issues and contacts."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Draft the handover list for each initiative"
                - "Hold a dry run with each client owner a week before"
                - "Assign every open issue to a client owner with a date"
                - "Circulate the minutes to the sponsor and owners within two days"
            - name: Handover pack and runbook for client owners
              description: |-
                ## Purpose
                Client owners inherit trackers, data refreshes and review routines that they have only watched consultants run. A runbook that sets out each routine step by step, with file locations and contacts, means the work survives staff turnover as well as the consultants leaving.

                ## Milestones
                1. Every recurring routine listed with frequency, owner and time it takes.
                2. Step-by-step instructions for each routine, including where data comes from.
                3. Each routine run once by the client owner using only the runbook.
                4. The runbook stored where the client team will find it.
              priority: medium
              frontmatter:
                mode: service
                output_kind: deliverable
                success_criteria: "A runbook covering every recurring routine has been tested by client owners running each routine alone from it."
                cadence: phased
                effort_hours_estimate: "14"
              tasks:
                - "List every recurring routine the consulting team runs today"
                - "Write step-by-step instructions for the data refresh routine first"
                - "Ask a client owner to run one routine using only the runbook"
                - "Store the final runbook in the client's shared drive"
            - name: Six-month post-exit sustainability check-in
              description: |-
                ## Purpose
                Whether an implementation worked is only clear months after the team has left. A planned check-in six months on, looking at adoption, benefits and whether the routines still run, gives the client an honest view and gives you real evidence of impact.

                ## Milestones
                1. The check-in agreed with the sponsor at handover and in both diaries.
                2. Adoption, benefits and routine status collected from client owners.
                3. A short note on what has held, what has slipped and what to fix.
                4. The findings discussed with the sponsor.

                ## Notes
                Agree at handover that this is a check-in, not a sales call. Clients engage more openly when it is framed that way.
              priority: low
              deadlineOffsetDays: 365
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A sustainability note covering adoption, benefits and routines six months after exit is discussed with the sponsor."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Agree the six-month check-in date with the sponsor at handover"
                - "Ask client owners for current adoption and benefit figures"
                - "Write a one-page note on what held and what slipped"
                - "Talk the sponsor through the note"
            - name: First implementation role after strategy work
              description: |-
                ## Purpose
                Consultants moving from strategy projects into implementation find the work very different: slower, more political, measured in weeks of adoption rather than slides. Setting expectations and a learning plan for your first implementation role helps you adjust quickly and avoid treating the client team like a data source.

                ## Milestones
                1. A conversation with a colleague who has done implementation work, with notes.
                2. Your own goals for the role written down, such as coaching and frontline time.
                3. Time on the floor or at a site booked in the first two weeks.
                4. A check-in with your manager after a month on what is different.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A written set of goals for the first implementation role exists, with site time completed and a one-month review held with your manager."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Ask a colleague with implementation experience for a thirty-minute call"
                - "Write three goals for the role that are not about slides"
                - "Book two days at a client site in your first fortnight"
                - "Review with your manager after a month what has surprised you"
            - name: Solo implementation support for a smaller client
              description: |-
                ## Purpose
                Smaller clients often keep one consultant on after the recommendation, part time, with no team behind them. Working alone means choosing ruthlessly what to support, building the client's own capacity from day one and agreeing clear limits so the role does not drift into an interim management job.

                ## Milestones
                1. A written support scope with days per week and the activities included.
                2. The two or three initiatives that matter most chosen for your time.
                3. A client lead named who owns the plan between your visits.
                4. A monthly review of days used against value with the client.

                ## Notes
                Write down what you will not do, such as line managing staff or approving spend. It protects both sides.
              priority: low
              frontmatter:
                mode: service
                output_kind: artifact
                success_criteria: "A written support scope with days, activities and exclusions is agreed, and days used are reviewed monthly with the client lead."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Draft a one-page scope with days per week and exclusions"
                - "Pick the two initiatives where your time adds most"
                - "Ask the client to name a lead who owns the plan between visits"
                - "Review days used and progress with the client lead each month"
            - name: Embedded at the client site for months
              description: |-
                ## Purpose
                Long implementation phases often mean working inside the client's office for months, at their desks, under their norms. Being embedded brings trust and insight, but also the risk of losing an independent view and taking on work that belongs to client staff.

                ## Milestones
                1. The client's working norms noted, from dress and hours to meeting habits.
                2. A routine of regular contact with your own firm to keep an outside view.
                3. Requests outside scope logged and discussed with your manager.
                4. A quarterly reflection on whether you are still adding value as an outsider.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Out-of-scope requests are logged and reviewed monthly with your manager, and a quarterly reflection on independence is written."
                cadence: rolling
              tasks:
                - "Write down five client working norms you have noticed this week"
                - "Start a log of requests that fall outside the agreed scope"
                - "Review the out-of-scope log with your manager @recurring(monthly:28)"
                - "Write a half-page reflection on your independence each quarter"
            - name: Remote implementation support across many sites
              description: |-
                ## Purpose
                When a rollout spans dozens of sites or countries, consultants cannot be everywhere and most support happens by video and phone. Designing remote support well, with site visits rationed to where they matter and a clear way for sites to ask for help, keeps far-flung sites from feeling forgotten.

                ## Milestones
                1. A site map with time zones, languages and local contacts.
                2. A support request route that every site knows.
                3. Visits planned to the sites with the lowest adoption or highest risk.
                4. Monthly contact recorded with every site, in person or by video.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every site has monthly recorded contact and a known support route, with visits planned by adoption and risk."
                cadence: rolling
              tasks:
                - "Build a site list with time zones, languages and local contacts"
                - "Set up one support request route and tell every site"
                - "Hold a video walk-through with one remote site lead @recurring(monthly:10)"
                - "Plan site visits for the three lowest-adopting sites"
            - name: Supporting implementation through a sponsor change
              description: |-
                ## Purpose
                Sponsors move on mid-implementation more often than plans assume, and a new executive may not share the old one's commitment. Preparing a briefing for the incoming sponsor and securing their explicit decision on scope keeps the work from stalling while everyone waits to see what they think.

                ## Milestones
                1. A briefing pack for the new sponsor covering purpose, progress, benefits and decisions pending.
                2. A first meeting held within two weeks of their arrival.
                3. The new sponsor's priorities and concerns written down.
                4. A recorded decision to continue, change or pause the scope.

                ## Notes
                Expect the new sponsor to want to put their own mark on the programme. Offering one or two sensible changes early often secures support for the rest.
              priority: medium
              frontmatter:
                mode: service
                output_kind: decision
                success_criteria: "The new sponsor has been briefed within two weeks of arriving and has recorded a decision on scope."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Draft a five-page briefing pack for the incoming sponsor"
                - "Ask the outgoing sponsor for a handover note or call"
                - "Request a first meeting within two weeks of the new sponsor starting"
                - "Record the new sponsor's decision on scope and share it"
            - name: Benefit attribution across overlapping programmes
              description: |-
                ## Purpose
                Clients rarely run one change at a time, and when a cost line falls, several programmes claim it. Agreeing attribution rules with finance before results arrive avoids double counting and arguments over credit, and makes your own benefits claim stand up.

                ## Milestones
                1. Other programmes touching the same measures identified.
                2. Attribution rules agreed, such as first mover, split by driver or comparison group.
                3. The rules applied to each benefit line in the log.
                4. Finance confirming no benefit is counted twice across programmes.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "Written attribution rules agreed with finance are applied to every overlapping benefit line, with no double counting confirmed."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "List other programmes that affect the same cost or revenue lines"
                - "Propose attribution rules to the finance lead"
                - "Apply the agreed rules to each overlapping benefit line"
                - "Ask finance to confirm the totals across programmes"
            - name: Controlled pilots with comparison groups
              description: |-
                ## Purpose
                When the stakes are high, such as a pricing change or a staffing model, a simple before and after comparison is not enough to convince a sceptical board. Running a pilot with matched comparison groups, and ideally random assignment where the business allows, gives evidence that holds up.

                ## Milestones
                1. The question and the measure defined with the effect size that would matter.
                2. Pilot and comparison groups matched on the factors most likely to affect results.
                3. A plan for how long to run, based on the volume of data each week.
                4. Results analysed with a client or firm analyst and limits stated plainly.

                ## Notes
                Bring in a statistician or experienced analyst for the run length. Stopping the moment results look good is the most common way to fool yourself.
              priority: low
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A controlled pilot with matched comparison groups and a pre-set run length is completed and its results written up with limits stated."
                cadence: phased
                effort_hours_estimate: "20"
              tasks:
                - "Write the question and the smallest effect worth acting on"
                - "Choose matching factors for pilot and comparison groups"
                - "Agree the run length with an analyst before launch"
                - "Write up results with the main limitations listed"
            - name: Embedding new KPIs in the client's management reporting
              description: |-
                ## Purpose
                If the measures that track the change live only in a consultant dashboard, they disappear when the team leaves. Getting the key indicators into the client's own monthly management pack, owned by their performance team, keeps leaders looking at them long after the implementation phase ends.

                ## Milestones
                1. The three to five indicators that should outlive the implementation chosen.
                2. Definitions and data feeds agreed with the client performance team.
                3. The indicators appearing in the regular management pack.
                4. Each indicator discussed in at least one leadership meeting.
              priority: medium
              frontmatter:
                mode: service
                output_kind: deliverable
                success_criteria: "Three to five implementation indicators appear in the client's own monthly management pack, owned by the performance team."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "Choose the indicators that should survive the consultants leaving"
                - "Agree definitions and data feeds with the performance team"
                - "Check the new indicators appear correctly in the monthly pack @recurring(monthly:3)"
                - "Ask the sponsor to discuss one indicator at the next leadership meeting"
            - name: Coordinating system changes with technology vendors
              description: |-
                ## Purpose
                Many implementations depend on a system change built by the client's IT team or an outside vendor, and consultants sit awkwardly between business and technology. Coordinating requirements, testing and release dates, without taking on the vendor's job, keeps the process change and the system change landing together.

                ## Milestones
                1. Business requirements for each system change written in plain language and agreed.
                2. Release dates mapped against the rollout waves.
                3. Business users involved in acceptance testing before each release.
                4. A fallback agreed for any wave whose system change is late.

                ## Notes
                Make clear in writing that the vendor owns delivery. Consultants who manage vendors informally end up blamed for their delays.
              priority: low
              frontmatter:
                mode: service
                output_kind: artifact
                success_criteria: "Every system change has agreed requirements, a release date mapped to the waves, user testing and a written fallback."
                cadence: phased
                effort_hours_estimate: "12"
              tasks:
                - "List every system change the rollout depends on"
                - "Write plain-language requirements for each and get user agreement"
                - "Map release dates against the rollout waves"
                - "Agree a fallback for any wave with a late system change"
            - name: Employee representative consultation during rollout
              description: |-
                ## Purpose
                Where changes affect roles, shifts or terms, many organisations must consult unions, works councils or staff forums, and the timetable is set by law or agreement rather than the plan. Supporting the client's HR and legal teams with clear materials and a realistic timeline keeps the rollout lawful and avoids late surprises.

                ## Milestones
                1. The client's HR and legal leads have confirmed which changes require consultation.
                2. The consultation timeline built into the rollout plan.
                3. Clear materials on the change prepared for the client to present.
                4. Feedback from consultation logged and design changes considered.

                ## Notes
                Consultation obligations are a legal matter for the client's own HR and legal advisers. Your role is to prepare materials and plan around their timeline, not to advise on the law.
              priority: medium
              frontmatter:
                mode: service
                output_kind: deliverable
                success_criteria: "The rollout plan includes the consultation timeline confirmed by client HR and legal, with materials delivered and feedback logged."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "Ask the client HR lead which changes need formal consultation"
                - "Add the consultation timeline to the rollout plan"
                - "Draft plain-language materials for HR to present"
                - "Log consultation feedback and pass design points to owners"
            - name: Implementation lessons debrief with the client
              description: |-
                ## Purpose
                Organisations that have just finished a major change are better placed to run the next one themselves, if they capture what they learned. A joint debrief, run with the client team rather than about them, records what made the difference so their next programme starts stronger.

                ## Milestones
                1. A debrief session held with client owners, the sponsor and the consulting team.
                2. Lessons grouped into what to repeat, what to avoid and what to try.
                3. A short lessons note owned by the client and stored with their programme files.
                4. Two or three lessons turned into changes to the client's own change approach.
              priority: low
              frontmatter:
                mode: event
                output_kind: deliverable
                success_criteria: "A client-owned lessons note from a joint debrief is filed, with at least two lessons adopted into the client's change approach."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Book a ninety-minute debrief with owners and the sponsor"
                - "Ask the agent to draft discussion prompts from the status notes"
                - "Group lessons into repeat, avoid and try"
                - "Hand the lessons note to the client implementation lead"
---

# Implementation Support Phases

Implementation support is the phase after the final readout, when the slides are approved and the consulting team stays on to help the client actually change how it works. This area starts with foundations (exit criteria, owners for every initiative, a locked baseline, a benefits case finance accepts and a clear split of who does what), then the weekly and monthly routines that keep a rollout honest, the skills of pilot design, change support and coaching, the decisions on pilots, waves and initiatives that will not land, the dated go-lives and handover, variants for embedded, remote and solo support, and finally specialist work such as benefit attribution and controlled pilots.

The rhythm is a Friday status note, a daily or thrice-weekly stand-up with client leads, a weekly pilot learning review and blocker sweep, and monthly benefits entries, adoption figures, capability scores and a check of consultant days against the taper plan. The Risk register, Metrics log, Skills matrix, Remediation plan and Meeting notes templates pair with the risk and dependency register, the benefits log, the capability tracker, a stalled initiative and the formal handover meeting. Installing adds all 50 projects as active, so archive the ones that are not for you yet.
