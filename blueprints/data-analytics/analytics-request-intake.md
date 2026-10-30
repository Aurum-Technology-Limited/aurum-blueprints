---
id: data-analytics.analytics-request-intake
name: Analytics Request Intake
description: "A single front door for data questions, a decision-first form, prioritisation and turnaround targets, a request desk rota and a searchable library of past answers, so asks stop getting lost or answered twice."
category: business
version: 1.0.0
tags: [data-analytics, analytics-request-intake, team, manager, request-queue, prioritisation, service-levels, answer-library]
author: Aurum Technology
starter_structure:
  templates:
    - purchase-decision
    - meeting-notes
    - metrics-log
    - feedback-themes
    - operational-checklist
  pillars:
    - name: Data & Analytics
      emoji: "📊"
      description: "Turning data into decisions: metrics and dashboards, data pipelines and warehouses, experimentation, forecasting and modelling, machine learning, data quality and governance."
      pillarFrontmatter:
        review_cadence: monthly
      areas:
        - name: Analytics Request Intake
          description: "Managing incoming data questions with a clear intake form, prioritisation, turnaround expectations and a record of past answers."
          projects:
            - name: Map of where data requests arrive today
              description: |-
                ## Purpose
                Before designing anything, find out how questions actually reach the data team: direct messages, email threads, comments on dashboards, asides at the end of meetings and the occasional ticket. A two-week tally usually shows that more than half of requests skip any formal route and that a handful of senior requesters account for a large share. That picture decides where the front door has to be and who needs persuading to use it.

                ## Milestones
                1. Every channel that carried a data request in the last two weeks listed, with a rough count for each.
                2. The ten most frequent requesters named, with their team and the channel they usually use.
                3. Requests that arrived through two or more channels at once flagged as duplicates.
                4. A one-page summary shared with the team lead showing where requests come from and in what volume.

                ## Notes
                Count, do not judge. People route requests to whoever answered quickly last time, and the map is more honest if nobody feels caught out.
              priority: high
              deadlineOffsetDays: 14
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A one-page channel map covering at least two weeks, with request counts per channel and the top ten requesters, is shared with the team lead."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Search your messages and inbox for data questions from the last two weeks"
                - "Ask each analyst to list the requests they took outside any queue"
                - "Tally requests by channel, requester and team in one sheet"
                - "Share the channel map with the team lead and agree the main finding"
            - name: Open request backlog snapshot and clean-out
              description: |-
                ## Purpose
                Most teams starting an intake process already carry an invisible backlog: half-finished pulls, promised follow-ups and asks nobody has said no to. Gathering every open request into one list, confirming which are still wanted and closing the rest gives the new process a clean starting line instead of a hidden debt. Expect around a third of old requests to be no longer needed once you ask.

                ## Milestones
                1. Every open request from every analyst gathered into one list with requester, date asked and current state.
                2. Each requester contacted to confirm whether their request is still needed.
                3. Requests no longer needed closed, each with a short note to the requester.
                4. The remaining list ranked, with a named analyst against every item.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "One backlog list holds every open request with an owner, and every request older than thirty days has been confirmed or closed with its requester."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Ask each analyst to paste their open requests into a shared sheet"
                - "Add the requester, date asked and current state to each line"
                - "Message each requester to confirm which of their requests still matter"
                - "Close the unwanted requests with a one-line note to each requester"
                - "Assign a named owner to every request left open"
            - name: Single front door for analytics requests
              description: |-
                ## Purpose
                Requests that arrive through ten channels cannot be prioritised, counted or shared, so the first structural change is one place where every data question starts. It can be a shared chat channel, a ticket queue or a form feeding a board, but it must be one route, publicised, and faster for the requester than messaging an analyst directly. Pick the route requesters already use most and make it official.

                ## Milestones
                1. One intake route chosen and named, with the reason for choosing it recorded.
                2. The route set up so every new request lands in a single list the whole team can see.
                3. A short reply agreed for analysts to send when a request arrives by another channel.
                4. The front door linked from the team wiki page, chat profiles and email signatures.

                ## Notes
                Redirecting politely is the hard part. Analysts who keep answering direct messages quietly undo the front door within a month.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Every new request for one full week landed in the single intake route, with any stray requests redirected using the agreed reply."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Pick the intake route that requesters already use most often"
                - "Set up the route so every request appears in one shared list"
                - "Write the polite redirect reply for requests that arrive elsewhere"
                - "Add a link to the front door on the team wiki and chat profiles"
            - name: Decision-first analytics request form
              description: |-
                ## Purpose
                A form that asks only 'what data do you need' invites requests for spreadsheets nobody opens twice. Asking first what decision the answer will inform, who will act on it, when it is needed and what the requester already believes turns a vague ask into something an analyst can size in five minutes. Keep it to seven or eight fields so people actually fill it in.

                ## Milestones
                1. A form with no more than eight fields, led by the decision the answer will inform.
                2. Required fields limited to the question, the decision, the needed-by date and the audience.
                3. A free-text field for links to reports or dashboards the requester has already checked.
                4. The form tested by three requesters from different teams, with their confusions fixed.

                ## Notes
                Resist adding a field for every edge case. Each extra required field costs you requesters who go back to messaging analysts directly.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A live intake form of at most eight fields, tested by three requesters from different teams, is the standard way to raise a new request."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Draft the form fields with the decision question first"
                - "Mark only the question, decision, needed-by date and audience as required"
                - "Ask three requesters from different teams to submit a real request through it"
                - "Reword any field that two or more testers misread"
            - name: Request types and size classes
              description: |-
                ## Purpose
                Quick numbers, recurring reports, dashboard changes, raw extracts and three-week investigations are different kinds of work, and treating them as one queue makes every turnaround promise wrong. Naming five to seven request types and three size classes, each with an example and an effort range, gives triage a shared vocabulary and makes reporting on the queue possible.

                ## Milestones
                1. Five to seven request types named, each with a one-line definition and a real example.
                2. Three size classes defined by expected analyst hours, such as under two hours, up to two days and longer.
                3. Fifty recent requests classified to prove that every one fits a type and a size.
                4. Type and size added as fields in the tracking tool.
              priority: medium
              frontmatter:
                mode: building
                output_kind: knowledge
                success_criteria: "Fifty recent requests have each been classified into one defined type and one size class, with fewer than five needing a new category."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "List the kinds of request the team received last quarter"
                - "Write a one-line definition and an example for each type"
                - "Classify fifty recent requests by type and size"
                - "Add type and size fields to the tracking tool"
            - name: Choosing a request tracking tool
              description: |-
                ## Purpose
                Shared spreadsheets work for a team of two, but once several analysts take requests you need status, owner, due date, history and search in one place. Comparing a ticketing tool, a work board and the tools the company already pays for against the same criteria avoids buying something requesters refuse to open. Requester ease matters more than analyst features.

                ## Milestones
                1. Five criteria agreed: requester ease, search of past answers, cycle time reporting, permissions and cost.
                2. Three options shortlisted, including at least one tool the company already licenses.
                3. Each option tested with five real requests from intake to close.
                4. A choice recorded with the reasons and a migration date.

                ## Notes
                Start from the **Purchase decision** template. Check with IT before trialling anything that stores request text, because requests often contain customer or staff details.
              priority: medium
              deadlineOffsetDays: 45
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A tracking tool is chosen against five written criteria after a five-request trial of three options, with the decision and migration date recorded."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Write the five criteria and weight requester ease highest"
                - "List tools the company already licenses that could hold requests"
                - "Run five real requests through each shortlisted option"
                - "Record the decision, the reasons and the migration date"
            - name: Turnaround targets by request size
              description: |-
                ## Purpose
                Requesters judge the data team on whether answers arrive when they expected, and with no stated turnaround every expectation quietly becomes today. Publishing a first response time and a delivery target for each size class, in working days, lets requesters plan and gives analysts permission to finish one thing before starting the next. Set targets the team can meet nine times in ten, not aspirational ones.

                ## Milestones
                1. A first response target set, such as one working day for every request.
                2. Delivery targets set for each size class from the last quarter's actual cycle times.
                3. The targets written on the intake page in plain language.
                4. A rule agreed for missed targets: who tells the requester, and how early.
              priority: high
              deadlineOffsetDays: 45
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "Response and delivery targets for each size class are published on the intake page and were met for at least 85 percent of requests in the first month."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Pull last quarter's cycle times by size class from closed requests"
                - "Set targets the team would have met nine times in ten"
                - "Publish the targets on the intake page in plain language"
                - "Agree who warns the requester when a target is going to slip"
                - "Check the targets against actual cycle times @recurring(quarterly)"
            - name: Prioritisation rubric for data requests
              description: |-
                ## Purpose
                When every requester says their ask is urgent, queue order is set by whoever shouts loudest or sits closest. A short scoring rubric covering the size of the decision, the deadline, the number of people affected and the effort makes ranking defensible, and lets the team explain to a senior requester why something else went first. Agree it with the managers who will sometimes be on the losing end of it.

                ## Milestones
                1. Four or five scoring factors chosen, each scored on a simple one to three scale.
                2. The rubric tested on twenty past requests and the resulting order checked for sense.
                3. The rubric agreed with the heads of the three biggest requesting teams.
                4. A rubric score recorded on every new request in the tracker.

                ## Notes
                Keep a tiebreak rule, such as the earliest needed-by date. Without one, every tie becomes a negotiation.
              priority: high
              deadlineOffsetDays: 45
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A written rubric agreed with the three largest requesting teams is applied to every new request, with the score visible in the tracker."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Draft four scoring factors with a one to three scale each"
                - "Score twenty past requests and check the order makes sense"
                - "Walk the heads of the three biggest requesting teams through the rubric"
                - "Recalibrate the rubric weights against last quarter's outcomes @recurring(quarterly)"
            - name: Request statuses and definition of done
              description: |-
                ## Purpose
                Vague statuses hide the truth: a request marked in progress for three weeks tells the requester nothing, and one marked done when the analyst has pasted a query result the requester cannot read is not done. Defining five to seven statuses, and what done means for each request type, keeps the tracker honest and makes cycle time measurable.

                ## Milestones
                1. Five to seven statuses defined, including waiting on requester and declined.
                2. A definition of done written for each request type, such as answer sent and acknowledged.
                3. The statuses configured in the tracker under the same names.
                4. Every open request moved into one of the new statuses.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Every open request sits in one of no more than seven defined statuses, and each request type has a written definition of done."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "List the states a request actually passes through today"
                - "Add waiting on requester and declined as explicit statuses"
                - "Write what done means for each request type"
                - "Move every open request into the new statuses"
            - name: Searchable library of past answers
              description: |-
                ## Purpose
                Many data questions have been answered before, often by someone who has since left, and the answer sits in a chat thread nobody can find. A library where every closed request leaves a short entry, with the question, the answer, the query or report used and the date the data was pulled, turns the queue into a reference that saves hours every week. Start with the last fifty answers, not the last five years.

                ## Milestones
                1. A home for the library chosen where requesters and analysts can both search.
                2. A standard entry format with question, answer, source, query link, data-as-of date and owner.
                3. The last fifty answered requests written up in that format.
                4. Closing a request in the tracker requires a library entry or a reason for skipping it.

                ## Notes
                Never publish an entry without its data-as-of date. Old answers quoted as current are the main way a library does harm.
              priority: high
              deadlineOffsetDays: 60
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "At least fifty past answers are searchable in the library in the standard format, and newly closed requests add an entry by default."
                cadence: one-shot
                effort_hours_estimate: "10"
              tasks:
                - "Choose where the library lives so requesters can search it"
                - "Write the standard entry format with a data-as-of date field"
                - "Ask the agent to draft library entries from the last fifty closed request threads"
                - "Add a library entry step to the close-out of every request"
            - name: Daily intake triage slot
              description: |-
                ## Purpose
                New requests need a human look within a working day, even when the work itself waits a week, because an unacknowledged request is the one that turns into a message to your manager. A fixed fifteen to thirty minute slot each morning to read new requests, ask clarifying questions, size, score and assign keeps the queue moving without analysts checking it every hour.

                ## Milestones
                1. A fixed daily triage slot in the calendar of whoever is on the request desk.
                2. Every new request acknowledged, sized and scored within one working day.
                3. Clarifying questions sent the same day for any request missing its decision or deadline.
                4. A one-line triage note on each request so the next person can see what was decided.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "For four consecutive weeks, every new request was acknowledged and sized within one working day of arriving."
                cadence: rolling
              tasks:
                - "Book a recurring thirty-minute triage slot each working morning"
                - "Acknowledge, size and score every new request in the queue @recurring(daily)"
                - "Send clarifying questions for requests missing a decision or deadline"
                - "Record a one-line triage note on each request"
            - name: Weekly request prioritisation call
              description: |-
                ## Purpose
                Scoring sets a draft order, but trade-offs between teams need a conversation, and a short weekly call with the main requesting leads settles them in one place instead of in twenty side chats. Twenty-five minutes on new large requests, what slipped and what is due next week is enough for most teams of up to eight analysts.

                ## Milestones
                1. A standing weekly call with the leads of the three to five biggest requesting teams.
                2. The ranked queue sent a day ahead so the call is spent on disagreements.
                3. Every reordering decision recorded with its reason.
                4. The agreed order published where all requesters can see it.

                ## Notes
                Start from the **Meeting notes** template. Keep the call to large requests; small ones are settled at triage.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "The call has run for eight consecutive weeks, with each week's reordering decisions and reasons recorded and the queue order published."
                cadence: rolling
              tasks:
                - "Invite the leads of the main requesting teams to a weekly 25-minute call"
                - "Send the ranked queue to attendees the day before the call"
                - "Run the call and record each reordering decision with its reason @recurring(weekly:tue)"
                - "Publish the agreed order where requesters can see it"
            - name: Requester status updates and chaser reduction
              description: |-
                ## Purpose
                Silence is what makes requesters chase. A predictable rhythm of messages, an acknowledgement on arrival, a note when work starts, a warning when a target will slip and a close-out with the answer, removes most chasers and builds trust faster than raw speed does.

                ## Milestones
                1. Four short message templates written: received, started, delayed and delivered.
                2. The templates saved as quick replies in the tracker or chat tool.
                3. A weekly sweep of requests older than five working days, with a status note to each requester.
                4. Chaser messages counted for a month before and after the change.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Four status templates are in use, and chaser messages from requesters fell by at least half over the first two months."
                cadence: rolling
              tasks:
                - "Write received, started, delayed and delivered message templates"
                - "Save the templates as quick replies in the tracker"
                - "Send a status note on every request older than five working days @recurring(weekly:thu)"
                - "Count chaser messages for a month to see whether they fall"
            - name: Monthly intake metrics review
              description: |-
                ## Purpose
                Without numbers, arguments about the queue run on anecdote: everything takes forever, one team always gets priority. A monthly look at volume, cycle time by size, share of targets met, ageing requests and volume by requesting team shows whether the process works and where to adjust it.

                ## Milestones
                1. Five metrics defined: received, closed, median cycle time by size, targets met and requests older than thirty days.
                2. The metrics computed from the tracker for the last three months as a baseline.
                3. A monthly summary shared with the team and the main requesting leads.
                4. One process change agreed at each review and checked the following month.

                ## Notes
                Start from the **Metrics log** template. Median cycle time is more honest than the average, which one stuck request can distort.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Six consecutive monthly reviews are logged, each with the five metrics, a shared summary and one recorded process change."
                cadence: rolling
              tasks:
                - "Export closed and open requests from the tracker with dates and sizes"
                - "Work out the five intake metrics for the last three months"
                - "Review the intake metrics and agree one process change @recurring(monthly:9)"
                - "Share the monthly summary with the requesting team leads"
            - name: Answer library upkeep
              description: |-
                ## Purpose
                Answer libraries rot: definitions change, tables are renamed and a two-year-old revenue figure gets quoted in a board deck. A monthly half hour to retire stale entries, refresh the most viewed ones and tidy tags keeps the library trustworthy enough that people look there before raising a request.

                ## Milestones
                1. Each entry carries a review-by date set by how fast its data goes stale.
                2. Entries past their review-by date refreshed or marked out of date every month.
                3. The ten most viewed entries confirmed against current definitions.
                4. Tags tidied so a search for a common metric returns the right entries.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "No library entry is more than a month past its review-by date, and the ten most viewed entries were checked in the last quarter."
                cadence: rolling
              tasks:
                - "Add a review-by date to every library entry"
                - "Refresh or mark out of date every entry past its review-by date @recurring(monthly:17)"
                - "Check the ten most viewed entries still match current definitions"
                - "Merge duplicate tags so common searches return the right entries"
            - name: Weekly backlog grooming and ageing requests
              description: |-
                ## Purpose
                Requests that sit untouched for weeks are usually either no longer needed or quietly too big for their size class. A weekly fifteen-minute pass over anything past its target, merging duplicates, re-sizing what grew and closing what the requester has abandoned, keeps the backlog an honest picture of real demand.

                ## Milestones
                1. A saved view in the tracker showing every request past its target date.
                2. Duplicate and overlapping requests merged, with every requester told.
                3. Requests waiting on the requester for more than ten working days closed with a note.
                4. Backlog size and median age tracked week on week.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "For two months, no request has sat past its target without a weekly grooming decision, and backlog size is logged each week."
                cadence: rolling
              tasks:
                - "Create a saved view of requests past their target date"
                - "Merge duplicate requests and tell every requester involved"
                - "Close requests waiting on the requester for over ten working days"
                - "Groom the ageing backlog and log its size and median age @recurring(weekly:fri)"
            - name: Quarterly demand review with department heads
              description: |-
                ## Purpose
                Department heads rarely see what their teams asked the data team for, what they got and how long it took, yet that evidence decides staffing, embedding an analyst or funding a standing report. A short quarterly review per department, with request counts, the biggest asks and what is coming next quarter, turns the queue into planning input instead of a complaint log.

                ## Milestones
                1. Last quarter's requests grouped by requesting department.
                2. A one-page summary per department with counts, cycle times and the three largest asks.
                3. A review held with each major department head.
                4. Each department's expected large requests for next quarter recorded.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: deliverable
                success_criteria: "Each major requesting department received a one-page quarterly summary and a review, with next quarter's expected large requests written down."
                cadence: cyclic
              tasks:
                - "Pull last quarter's requests grouped by requesting department"
                - "Write a one-page summary per department with counts and cycle times"
                - "Meet each department head to walk through their summary @recurring(quarterly)"
                - "Record the large requests each department expects next quarter"
            - name: Requester feedback after delivery
              description: |-
                ## Purpose
                Speed is easy to measure, but usefulness is what matters, and the only way to know whether an answer helped is to ask. A two-question check when a request closes, was this useful and did it arrive in time, plus a monthly read of the comments, shows which request types disappoint and why.

                ## Milestones
                1. A two-question feedback prompt sent automatically when a request closes.
                2. Responses received for at least a third of closed requests.
                3. Comments grouped into themes every month.
                4. One fix made each quarter from the most common complaint.

                ## Notes
                Start from the **Feedback themes** template. Low scores on large requests usually point to scoping, not analysis quality.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Feedback is collected on at least a third of closed requests, with monthly themes recorded and one fix shipped each quarter."
                cadence: rolling
              tasks:
                - "Write two feedback questions: was it useful and was it on time"
                - "Set the tracker to send the questions when a request closes"
                - "Group the month's feedback comments into themes @recurring(monthly:24)"
                - "Pick one fix from the most common complaint each quarter"
            - name: Register of repeat requests
              description: |-
                ## Purpose
                The same question asked every month by the same team is not an ad hoc request, it is a report nobody has built. Keeping a register of repeated asks, and deciding each quarter whether each becomes a scheduled report, a library entry or a polite no, removes a predictable slice of volume from the queue.

                ## Milestones
                1. Every question asked three or more times in six months listed with its requesters.
                2. A decision recorded for each: scheduled report, library entry, dashboard change request or decline.
                3. Each new scheduled report handed to a named owner with a delivery day.
                4. Repeat volume measured again the following quarter.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: artifact
                success_criteria: "A register lists every request repeated three or more times in six months, each with a recorded decision and, where scheduled, an owner."
                cadence: rolling
              tasks:
                - "Search the tracker for questions asked three or more times in six months"
                - "List each repeat request with its requesters and frequency"
                - "Decide the future of each repeat request with its main requester @recurring(quarterly)"
                - "Hand each new scheduled report to a named owner"
            - name: Request desk rota for analysts
              description: |-
                ## Purpose
                If every analyst watches the queue, nobody gets a quiet morning, and if nobody is assigned, requests sit. A weekly rota where one analyst owns triage, clarifications and quick answers, while the rest work on scheduled analysis, spreads the interruption load fairly and gives requesters one name to contact each week.

                ## Milestones
                1. A rota covering the next eight weeks with one named desk owner per week.
                2. A written list of what the desk owner handles and what they pass on.
                3. A short handover note used at each Monday change-over.
                4. Interruptions outside the desk week compared before and after the rota.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "An eight-week rota is published, every change-over has a handover note, and analysts report fewer interruptions outside their desk week."
                cadence: rolling
              tasks:
                - "Draft an eight-week rota with one desk owner per week"
                - "Write what the desk owner handles and what they pass on"
                - "Hand over the request desk with a short note @recurring(weekly:mon)"
                - "Ask analysts after a month whether interruptions have dropped"
            - name: Clarifying conversation for vague requests
              description: |-
                ## Purpose
                Pull the churn numbers could mean five different analyses, and answering the wrong one well is the most expensive mistake on the desk. Learning a short set of clarifying questions, what decision is this for, what would surprise you, what do you already know, what format and by when, and practising them on real requests for a month makes them the default first reply.

                ## Milestones
                1. Six clarifying questions written and kept beside the triage notes.
                2. Ten real requests clarified in a short conversation before any querying.
                3. A note for each of how the request changed after clarification.
                4. The questions trimmed to the ones that changed requests most often.

                ## Notes
                A five-minute call beats a long message thread. Requesters often discover the real question while explaining the first one.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Ten requests have been clarified using the question set, each with a recorded note of how the request changed."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Write six clarifying questions starting with what decision this informs"
                - "Use the questions on the next ten vague requests before querying"
                - "Note how each request changed after the conversation"
                - "Drop the questions that never changed a request"
            - name: Effort estimation for analytics requests
              description: |-
                ## Purpose
                Analysts tend to underestimate by about half, because data cleaning, definition checks and reviewer questions do not feel like work until they happen. Logging an estimate on every request and comparing it with actual time builds calibration, so size classes and turnaround promises become accurate instead of hopeful.

                ## Milestones
                1. An estimate in hours recorded on every request before work starts.
                2. Actual hours logged when each request closes.
                3. A monthly comparison showing the typical ratio of actual to estimate by request type.
                4. Size class boundaries adjusted using the observed ratios.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Three months of estimate and actual hours are logged, and the actual-to-estimate ratio by request type has been used to adjust size classes."
                cadence: phased
                effort_hours_estimate: "5"
              tasks:
                - "Add estimated and actual hours fields to the tracker"
                - "Record an estimate on each request before starting work"
                - "Compare estimates with actuals by request type @recurring(monthly:12)"
                - "Adjust size class boundaries using the observed ratios"
            - name: Declining and redirecting requests gracefully
              description: |-
                ## Purpose
                Saying no is a skill: a team that cannot do it ends up with a queue it never clears, and a team that does it badly loses the goodwill it depends on. Practising a few standard responses, pointing to an existing answer, offering a smaller version, suggesting a later date or naming what would have to drop, keeps relationships intact while protecting capacity.

                ## Milestones
                1. Four standard responses written: redirect, smaller scope, later date and trade-off.
                2. Each response role-played once in a team meeting.
                3. Every declined or redirected request recorded with its reason in the tracker.
                4. Feedback on declined requests checked for complaints after a quarter.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Four standard responses are written and practised, and every declined request in the last quarter carries a recorded reason."
                cadence: phased
                effort_hours_estimate: "3"
              tasks:
                - "Write four standard responses for saying no or not yet"
                - "Role-play each response with a colleague playing a senior requester"
                - "Record the reason on every declined or redirected request"
                - "Review a quarter of declined requests for any that should have been accepted"
            - name: Hypothesis-first scoping for larger analyses
              description: |-
                ## Purpose
                Larger requests drift when the analyst starts querying before anyone has written down what they expect to find. Twenty minutes with the requester on a one-paragraph scope, covering the question, the likely answer, the data to be used, the deliverable and what is out of scope, halves rework and makes it obvious when a request has grown.

                ## Milestones
                1. A one-paragraph scope template with question, expected answer, data, deliverable and out of scope.
                2. Every medium and large request scoped and agreed with the requester before work starts.
                3. Scope changes recorded as re-sized or new requests.
                4. Rework on scoped requests compared with unscoped ones after two months.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Every medium and large request in a two-month period had an agreed written scope, and rework was compared with earlier unscoped requests."
                cadence: phased
                effort_hours_estimate: "5"
              tasks:
                - "Write a one-paragraph scope template with an out of scope line"
                - "Scope the next three medium requests with their requesters"
                - "Record any scope change as a re-size in the tracker"
                - "Compare rework on scoped and unscoped requests after two months"
            - name: Guide for requesters on asking a good data question
              description: |-
                ## Purpose
                Nobody trains requesters to ask analysts questions, and most poor requests come from not knowing what the team needs to start. A one-page guide with examples of weak and strong requests, what happens after submitting and how to search the library first raises request quality without adding fields to the form.

                ## Milestones
                1. A one-page guide with three before-and-after request examples.
                2. The guide linked at the top of the intake form.
                3. The guide introduced at a meeting of each of the three biggest requesting teams.
                4. The share of requests needing clarification measured before and after.
              priority: medium
              frontmatter:
                mode: service
                output_kind: deliverable
                success_criteria: "A one-page requester guide is linked from the form and presented to three teams, and the share of requests needing clarification has been measured before and after."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Pick three real weak requests and rewrite them as strong ones"
                - "Ask the agent to draft the one-page guide from the examples and the form"
                - "Link the guide at the top of the intake form"
                - "Present the guide at the three biggest requesting teams' meetings"
            - name: Standard close-out note for answered requests
              description: |-
                ## Purpose
                An answer sent as a bare number in chat gets misquoted within a week. A short standard close-out, with the answer, the definition used, the date range, the data-as-of date, caveats and who to ask, makes each answer safe to forward and ready for the answer library without rework.

                ## Milestones
                1. A close-out format agreed with six parts: answer, definition, date range, data-as-of date, caveats and contact.
                2. The format used on ten consecutive closed requests.
                3. Two requesters asked whether the format is clear, and their changes made.
                4. The format saved as a quick reply that also feeds the library entry.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A six-part close-out format is saved as a quick reply and was used on ten consecutive closed requests."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Draft a close-out format with answer, definition, date range and caveats"
                - "Use the format on the next ten requests you close"
                - "Ask two requesters whether the close-out is clear to forward"
                - "Save the format as a quick reply in the tracker"
            - name: Check-the-library step before submitting
              description: |-
                ## Purpose
                Many requests could be answered by a dashboard or library entry the requester did not know existed. Adding a search step to the intake form, either showing related entries as the question is typed or asking which reports were checked, deflects repeats before they reach an analyst and teaches requesters where answers live.

                ## Milestones
                1. A search or suggestion step placed before the form's submit button.
                2. A field asking which existing reports the requester checked.
                3. Deflections counted where the requester found an answer and did not submit.
                4. The deflection rate reviewed after one quarter.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "The form shows library results before submission, and a quarter of deflection counts has been reviewed."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Check whether the form tool can show search results before submit"
                - "Add a search step or a link to the library above the submit button"
                - "Add a field asking which reports the requester already checked"
                - "Count abandoned forms where the requester followed a library link"
            - name: Split between request work and planned analysis
              description: |-
                ## Purpose
                If requests take all available time, the planned work that would reduce requests never happens. Deciding a deliberate split, for example sixty percent planned and forty percent reactive, and tracking it monthly gives the manager a lever and an honest answer when asked why a project is late.

                ## Milestones
                1. The current split measured from four weeks of time logs or tracker data.
                2. A target split agreed with the team's manager and main stakeholders.
                3. Sprint plans or analyst calendars reflecting the agreed split.
                4. The actual split reported monthly against the target.
              priority: medium
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A target split between request work and planned work is agreed in writing, and three monthly actual-versus-target figures are reported."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Measure four weeks of time spent on requests versus planned work"
                - "Propose a target split to the team's manager with the evidence"
                - "Reflect the split in sprint plans or analyst calendars"
                - "Compare the actual split with the target @recurring(monthly:3)"
            - name: Analyst hour allowances for each department
              description: |-
                ## Purpose
                When demand far exceeds capacity, some organisations give each department a monthly allowance of analyst hours, which moves prioritisation inside the department where the context lives. Weigh that against the admin overhead and the risk of teams spending hours just because they have them before deciding.

                ## Milestones
                1. Twelve months of request hours by department calculated.
                2. Three options compared: no allowance, a soft allowance with reporting and a hard allowance.
                3. A decision recorded with the heads of the main requesting departments.
                4. If adopted, a monthly usage statement sent to each department.

                ## Notes
                A soft allowance with visible usage often gets most of the benefit. Hard limits tend to produce end-of-month request rushes.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A written decision on department allowances, with the twelve-month evidence and the options considered, is agreed with the main requesting department heads."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Work out request hours by department for the last twelve months"
                - "Write a one-page comparison of no, soft and hard allowances"
                - "Agree the approach with the main requesting department heads"
                - "Send each department its monthly usage statement @recurring(monthly:28)"
            - name: Fast lane for urgent and executive requests
              description: |-
                ## Purpose
                Some requests really are urgent: a regulator's question, a board member's challenge, a live incident. Without written rules, every executive ask jumps the queue and planned work stalls. Defining what qualifies, who can invoke it, how often and what gets bumped keeps urgency meaningful.

                ## Milestones
                1. Written criteria for what qualifies as a fast-lane request.
                2. A short list of people who can invoke the fast lane.
                3. A rule for which work pauses and who tells the affected requesters.
                4. Fast-lane use reviewed monthly for creep.
              priority: medium
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "Fast-lane criteria and invokers are written and agreed, and every fast-lane request in the last three months was reviewed in a monthly check."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Write three criteria a request must meet to use the fast lane"
                - "Agree with your manager who may invoke the fast lane"
                - "Decide how bumped requesters are told and by whom"
                - "Review every fast-lane request from the past month @recurring(monthly:20)"
            - name: Intake automation for routing and replies
              description: |-
                ## Purpose
                Once the process is stable, the dull parts can run themselves: acknowledgement on submission, routing by request type to the right analyst or pod, reminders on ageing requests and the feedback prompt on close. Automating after the process settles, not before, avoids encoding a workflow that is about to change.

                ## Milestones
                1. Every manual step that happens on every request listed.
                2. An automatic acknowledgement sent on submission, quoting the turnaround target.
                3. Routing rules by request type tested on twenty requests.
                4. Reminders firing for requests approaching their target date.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Acknowledgement, routing and reminder automations are live, and routing was correct for at least eighteen of twenty test requests."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "List the manual steps the desk does on every request"
                - "Set up an automatic acknowledgement quoting the turnaround target"
                - "Write routing rules by request type and test them on twenty requests"
                - "Add reminders for requests two days from their target date"
            - name: Rules for raw data extract requests
              description: |-
                ## Purpose
                Asking for all the customer data in a spreadsheet carries privacy and accuracy risks that a dashboard question does not. A short rule for extracts, covering what the requester must state about purpose, which data needs access approval, how files are shared and when they are deleted, lets the desk handle them consistently rather than case by case.

                ## Milestones
                1. Last quarter's extract requests listed with the kinds of data they contained.
                2. The fields that need access approval confirmed with the data protection owner.
                3. Purpose and retention questions added to the form for extract requests.
                4. A sharing method agreed that avoids emailing files containing personal data.

                ## Notes
                Agree the rule with whoever owns data protection in your organisation. The intake desk applies the policy; it does not set it.
              priority: medium
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A written extract rule agreed with the data protection owner is applied, and every extract request in the last month recorded its purpose and deletion date."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "List the extract requests received last quarter and what they contained"
                - "Ask the data protection owner which fields need an access approval"
                - "Add purpose and retention questions to the form for extract requests"
                - "Agree a sharing method that avoids emailing files with personal data"
            - name: Cycle time study of thirty closed requests
              description: |-
                ## Purpose
                Slow requests are rarely slow because of the analysis; they sit waiting for clarification, data access, a reviewer or the requester. Tracing thirty closed requests through each status and separating waiting from working time shows exactly where the delay lives and which fix pays back first.

                ## Milestones
                1. Thirty closed requests sampled across all types and sizes.
                2. Time in each status measured for every sampled request.
                3. Waiting time separated from working time and totalled by cause.
                4. Two changes chosen to remove the largest waiting causes.
              priority: medium
              deadlineOffsetDays: 60
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A study of thirty closed requests shows waiting and working time by cause, and two changes targeting the biggest waits are agreed."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Sample thirty closed requests across all types and sizes"
                - "Export the status history for each sampled request"
                - "Total waiting and working time by cause"
                - "Pick two changes that remove the biggest waits"
            - name: Converting oversized asks into scoped projects
              description: |-
                ## Purpose
                Some requests are really projects: a pricing study, a new team scorecard, a three-week investigation. Running them through the queue hides them and blocks everything behind them. A threshold, for example anything over five analyst days, and a one-page brief with sponsor, goal and milestones moves them into planned work properly.

                ## Milestones
                1. A size threshold above which a request becomes a project.
                2. A one-page project brief format with sponsor, goal, milestones and end date.
                3. Current oversized requests converted, with each requester agreeing the brief.
                4. Converted projects visible on the team's planned work list.
              priority: low
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A written conversion threshold exists, and every open request above it has an agreed one-page brief and sits on the planned work list."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Agree the analyst-day threshold that turns a request into a project"
                - "Write a one-page brief format with sponsor, goal and end date"
                - "Convert the current oversized requests and agree each brief with its sponsor"
                - "Move converted projects onto the team's planned work list"
            - name: Launch of the new intake process
              description: |-
                ## Purpose
                Treat the switch as a small launch, because a new front door that nobody hears about fails quietly. A date, an announcement from a senior sponsor, a five-minute demo at each big requesting team's meeting and a two-week grace period for old habits gets most requesters through the door in the first month.

                ## Milestones
                1. A launch date set and agreed with a senior sponsor.
                2. An announcement sent by the sponsor, not by the data team.
                3. A five-minute demo given at each major requesting team's meeting.
                4. Two weeks of gentle redirects completed, then the old channels closed to new requests.

                ## Notes
                Sponsor matters more than wording. An announcement from the operations or finance lead carries further than one from the data team.
              priority: high
              deadlineOffsetDays: 40
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "The process launched on the agreed date with a sponsor announcement and team demos, and 80 percent of requests in the following month came through the front door."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Agree a launch date and a senior sponsor with your manager"
                - "Ask the agent to draft the launch announcement for the sponsor to send"
                - "Book five-minute demo slots in the main requesting teams' meetings"
                - "Close the old request channels after a two-week grace period"
            - name: Thirty-day intake pilot retrospective
              description: |-
                ## Purpose
                The first month always shows what the design missed: a field nobody understands, a request type with no home, a target nobody can meet. A dated retrospective at day thirty with the analysts and three or four regular requesters catches these before they harden into workarounds.

                ## Milestones
                1. A retrospective booked for day thirty with analysts and four regular requesters.
                2. The first month's intake metrics and feedback summarised beforehand.
                3. What worked, what did not and what to change listed and agreed.
                4. No more than three changes chosen, each with an owner and a date.
              priority: medium
              deadlineOffsetDays: 75
              frontmatter:
                mode: event
                output_kind: decision
                success_criteria: "The retrospective was held, and up to three agreed changes to the intake process each have an owner and a completion date."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Book the retrospective for thirty days after launch"
                - "Invite four regular requesters from different teams"
                - "Summarise the first month's metrics and feedback in one page"
                - "Agree no more than three changes, each with an owner and a date"
            - name: Planning season request surge
              description: |-
                ## Purpose
                Annual budgeting and goal-setting bring a predictable wave of requests: targets, baselines and last year's numbers cut every possible way. Preparing six weeks ahead, by publishing a pack of standard planning figures, setting an early cut-off and pausing low-priority work, keeps the season from swamping the team.

                ## Milestones
                1. Last year's planning-season requests reviewed for the most common asks.
                2. A standard pack of planning figures published before the season starts.
                3. A cut-off date for planning requests announced to all departments.
                4. Non-urgent work deferred, with its requesters told in advance.

                ## Notes
                Agree the planning pack's figures with finance first, or the season produces two versions of last year's revenue.
              priority: medium
              deadlineOffsetDays: 90
              frontmatter:
                mode: event
                output_kind: deliverable
                success_criteria: "A planning figures pack was published before the season opened, and a request cut-off date was announced to all departments."
                cadence: one-shot
                effort_hours_estimate: "12"
              tasks:
                - "Find last year's planning-season requests in the tracker"
                - "List the ten figures requested most often during planning"
                - "Prepare and publish the planning figures pack with finance's sign-off"
                - "Announce the planning request cut-off date to all departments"
            - name: Quarter-end reporting crunch plan
              description: |-
                ## Purpose
                Quarter-end brings board packs, investor updates and finance reconciliations, and they collide with the normal queue every time. A repeating plan, with a freeze on new large requests in the final week, a named owner for each recurring quarter-end ask and a checklist started two weeks out, makes the crunch predictable.

                ## Milestones
                1. Every recurring quarter-end request listed with its usual requester and date.
                2. A named owner for each recurring quarter-end ask.
                3. A freeze on new large requests in the final week announced each quarter.
                4. A checklist run two weeks before each quarter close.

                ## Notes
                Start from the **Operational checklist** template.
              priority: medium
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "Two consecutive quarter-ends were run from the checklist, with every recurring ask owned and delivered by its date."
                cadence: cyclic
              tasks:
                - "List every request that arrives at each quarter-end"
                - "Name an owner for each recurring quarter-end ask"
                - "Announce a freeze on new large requests for the final week"
                - "Run the quarter-end checklist two weeks before close @recurring(quarterly)"
            - name: Annual intake process review
              description: |-
                ## Purpose
                Once a year the whole process deserves a fresh look, because the company, the team and the tools will all have changed. A review of a year of intake metrics, feedback themes and the request types that grew or shrank decides what to keep, what to simplify and what to retire before the next year starts.

                ## Milestones
                1. Twelve months of intake metrics and feedback themes gathered in one document.
                2. Each part of the process rated keep, simplify or retire.
                3. The form, targets and rubric updated from the review.
                4. Changes announced to requesters with the reasons.
              priority: low
              frontmatter:
                mode: operating
                output_kind: decision
                success_criteria: "An annual review document records a keep, simplify or retire decision for each part of the process, and the resulting changes were announced."
                cadence: cyclic
              tasks:
                - "Gather twelve months of intake metrics and feedback themes"
                - "Rate each part of the process keep, simplify or retire"
                - "Hold the annual intake review with the team and key requesters @recurring(yearly)"
                - "Announce the changes to requesters with the reasons"
            - name: Request queue handover before a holiday period
              description: |-
                ## Purpose
                Holiday shutdowns and long leave leave requests stranded, and the first week back is spent apologising. A short handover a fortnight before, with every open request reassigned, paused or closed, an out-of-office note on the intake page and a reduced service level announced, keeps requesters informed while the team is thin.

                ## Milestones
                1. Every open request marked reassign, pause or close two weeks before the break.
                2. Paused requests' requesters told the new expected date.
                3. A reduced service level posted on the intake page for the break.
                4. A return checklist ready for the first morning back.
              priority: low
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "Before the break every open request was reassigned, paused or closed, and the reduced service level was posted on the intake page."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Mark each open request as reassign, pause or close"
                - "Tell requesters of paused work the new expected date"
                - "Post a reduced service level on the intake page for the break"
                - "Write a return checklist for the first morning back"
            - name: Solo analyst covering a whole company
              description: |-
                ## Purpose
                One analyst serving every department has no rota to share the load and no one to cover holidays, so the intake process has to protect them more, not less. Two protected mornings a week, a published shortlist of what is and is not handled, and a monthly view for their manager of what was asked and what was turned down keep one person from becoming a bottleneck and a burnout case.

                ## Milestones
                1. A short list of request types the analyst handles and the ones that are declined or redirected.
                2. Two mornings a week protected from request work in the calendar.
                3. A monthly one-page view for the manager showing requests received, done and declined.
                4. A cover plan agreed for the analyst's leave.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "The analyst has two protected mornings a week for a full month, and their manager has received a monthly request summary twice."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Write the list of request types you handle and the ones you redirect"
                - "Keep the morning for planned work and start requests after lunch @recurring(weekly:mon,thu)"
                - "Send your manager a one-page monthly view of requests received, done and declined"
                - "Agree with your manager who covers requests during your leave"
            - name: In-scope request list for a new data team
              description: |-
                ## Purpose
                When a manager stands up a new data team, the first month decides whether it becomes a strategic function or a report factory. Agreeing with leadership which request types the team takes, which go elsewhere and which wait until capacity grows, before the front door opens, prevents the queue from defining the team by accident.

                ## Milestones
                1. A draft list of request types marked in scope, elsewhere and later.
                2. The list agreed with the team's executive sponsor.
                3. The out-of-scope types each mapped to where they should go instead.
                4. The list published on the intake page from day one.

                ## Notes
                Name the destination for every out-of-scope type. A list that only says no sends requests back to direct messages.
              priority: medium
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "An in-scope, elsewhere and later list agreed with the executive sponsor is published on the intake page before the first request arrives."
                cadence: phased
                effort_hours_estimate: "5"
              tasks:
                - "Draft request types under in scope, elsewhere and later"
                - "Map each out-of-scope type to the team that should take it"
                - "Review the list with the team's executive sponsor"
                - "Publish the agreed list on the intake page"
            - name: Shared intake across embedded analysts
              description: |-
                ## Purpose
                Where analysts sit inside marketing, product or finance, each pod tends to grow its own private queue, and cross-team questions fall between them. One shared intake with routing by requesting team, a weekly cross-pod look at shared requests and a common answer library keeps local responsiveness without losing the single view.

                ## Milestones
                1. One intake route with a requesting-team field that routes to the right pod.
                2. A rule for requests that span two or more pods, with a named lead for each.
                3. Pod queues visible to every analyst in one tracker.
                4. All pods contributing to one answer library.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "All embedded pods take requests through one routed intake, and every cross-pod request in a month had a named lead."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Add a requesting-team field that routes to the right pod"
                - "Write the rule for naming a lead on cross-pod requests"
                - "Put every pod's queue into one tracker view"
                - "Agree that all pods add their answers to the shared library"
            - name: Inheriting a request backlog after a reorg
              description: |-
                ## Purpose
                After a reorg or an analyst's departure, a team can inherit dozens of requests with no context, half-built queries and requesters who were promised dates. Triage the inherited list in one pass: find the context, confirm with each requester, and re-commit only to what the team can now deliver.

                ## Milestones
                1. Every inherited request listed with any query, file or thread that goes with it.
                2. Each requester contacted to confirm need and an honest new date.
                3. Inherited work ranked with the rubric alongside the existing queue.
                4. Requests the team cannot take closed with an explanation.
              priority: medium
              frontmatter:
                mode: service
                output_kind: artifact
                success_criteria: "Every inherited request is confirmed and re-dated, merged into the ranked queue or closed with an explanation to its requester."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Collect every inherited request with its query, files and threads"
                - "Ask the agent to summarise each inherited request thread into a one-line status"
                - "Contact each requester to confirm need and agree a new date"
                - "Close the inherited requests the team cannot take, with an explanation"
            - name: Request coordinator in a requesting team
              description: |-
                ## Purpose
                For a manager in marketing, sales or operations whose team sends many data requests, naming one coordinator who batches, de-duplicates and pre-ranks the team's asks each week cuts noise for both sides. The data team gets one ranked list instead of twelve competing messages, and the department decides its own priorities.

                ## Milestones
                1. One coordinator named in the requesting team, with a deputy.
                2. A weekly batch of the team's requests, de-duplicated and ranked by the manager.
                3. Requests from the team submitted only through the coordinator for a trial month.
                4. Duplicate and repeat requests from the team compared before and after.
              priority: low
              frontmatter:
                mode: service
                output_kind: habit
                success_criteria: "The requesting team ran a month of weekly batched submissions through one coordinator, with duplicates measured before and after."
                cadence: rolling
              tasks:
                - "Name a request coordinator and a deputy in the team"
                - "Agree with the data team what a weekly batch should contain"
                - "Batch, de-duplicate and rank the team's requests @recurring(weekly:wed)"
                - "Compare duplicate requests from the team before and after a month"
            - name: Request intake during a data platform migration
              description: |-
                ## Purpose
                During a warehouse or BI migration, the same analysts doing the move are answering requests from systems about to be switched off, and numbers can differ between old and new. Running reduced intake for the migration window, with a short list of protected requests, a note on which system each answer came from and a freeze on new standing reports, keeps both the migration and trust on track.

                ## Milestones
                1. A migration window and a reduced service level announced to requesters.
                2. A short list of protected requests that continue at full service.
                3. Every answer during the window labelled with the system it came from.
                4. New standing reports frozen until the new platform is signed off.
              priority: low
              frontmatter:
                mode: operating
                output_kind: decision
                success_criteria: "A reduced intake plan was announced for the migration window, and every answer delivered during it names its source system."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Agree the migration window and reduced service level with your manager"
                - "List the requests that stay at full service during the migration"
                - "Add a source system line to every close-out note in the window"
                - "Announce a freeze on new standing reports until sign-off"
            - name: Request volume forecast for analyst capacity
              description: |-
                ## Purpose
                Twelve months of tracker data is enough to forecast request volume by month and type, which turns hiring and leave planning from guesswork into evidence. A simple seasonal view, hours of demand per month against hours of capacity, shows when the team will be overloaded and how much a new hire or a deflection project would really change.

                ## Milestones
                1. Twelve months of request hours by month and type extracted.
                2. A seasonal forecast of demand hours for the next four quarters.
                3. Demand set against available analyst hours, including leave and planned work.
                4. The gap months shared with the manager as input to hiring and leave planning.

                ## Notes
                Keep the method simple and the error visible. A forecast that is a few percent off but understood beats a precise one nobody trusts.
              priority: low
              frontmatter:
                mode: research
                output_kind: artifact
                success_criteria: "A four-quarter forecast of request demand against analyst capacity is shared with the manager, with forecast error checked each quarter."
                cadence: rolling
              tasks:
                - "Extract twelve months of request hours by month and type"
                - "Build a seasonal forecast of demand hours for four quarters"
                - "Set forecast demand against available analyst hours"
                - "Refresh the forecast and record last quarter's error @recurring(quarterly)"
            - name: Decision log of what answered requests changed
              description: |-
                ## Purpose
                Closing a request proves work was done, not that it mattered. Asking requesters a month later what they decided, and logging the decision against the request, builds the evidence that shows which request types change outcomes and which only feed curiosity, and it is the best argument in any budget conversation.

                ## Milestones
                1. A decision field added to closed requests in the tracker.
                2. Requesters of the previous month's closed requests asked what they decided.
                3. At least thirty requests logged with the decision they informed.
                4. A summary of decisions by request type shared with the team.
              priority: low
              frontmatter:
                mode: research
                output_kind: artifact
                success_criteria: "At least thirty closed requests carry a recorded decision outcome, summarised by request type and shared with the team."
                cadence: rolling
              tasks:
                - "Add a decision outcome field to closed requests"
                - "Ask last month's requesters what they decided @recurring(monthly:14)"
                - "Log each reply against its request in the tracker"
                - "Summarise decisions by request type for the team"
            - name: Theme analysis of a year of requests
              description: |-
                ## Purpose
                A year of request text is the clearest map of what the business wants to know and cannot find. Grouping twelve months of requests by theme, metric and team shows where a missing dataset, an absent report or an unclear definition is generating dozens of tickets, and turns the queue into a backlog of fixes worth proposing.

                ## Milestones
                1. Twelve months of request text exported with type, team and size.
                2. Requests grouped into fifteen to twenty-five themes.
                3. The five themes with the most hours linked to a likely root cause.
                4. A short proposal of fixes for the top themes shared with the manager.
              priority: low
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A theme analysis of twelve months of requests names the five most costly themes with root causes and a proposal for each."
                cadence: one-shot
                effort_hours_estimate: "10"
              tasks:
                - "Export twelve months of request text with type, team and size"
                - "Ask the agent to group the requests into fifteen to twenty-five themes"
                - "Total hours per theme and link the top five to a root cause"
                - "Write a one-page fix proposal for the top themes"
            - name: Published catalogue of analytics services
              description: |-
                ## Purpose
                Mature data teams publish what they offer the way an IT service desk does: named services such as quick answer, recurring report, investigation and extract, each with what the requester gets, the turnaround, the inputs needed and the owner. A catalogue sets expectations before a request is written and makes the queue read like a service, not a favour bank.

                ## Milestones
                1. Five to eight named services, each with deliverable, turnaround, inputs and owner.
                2. The catalogue published as the landing page of the intake route.
                3. Request types in the tracker renamed to match the catalogue.
                4. The catalogue reviewed with three requesting teams for gaps.
              priority: low
              frontmatter:
                mode: service
                output_kind: deliverable
                success_criteria: "A catalogue of five to eight services is the intake landing page, and tracker request types match its service names."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Name five to eight services from the current request types"
                - "Write the deliverable, turnaround, inputs and owner for each service"
                - "Publish the catalogue as the landing page of the intake route"
                - "Rename tracker request types to match the catalogue"
---

# Analytics Request Intake

This area is for data teams and the managers around them who are tired of questions arriving by direct message, being answered twice and then disappearing into chat history. It starts with foundations (a map of where requests come from, one front door, a decision-first form, size classes, turnaround targets, a prioritisation rubric and a library of past answers), then the routines that keep the queue moving, the skills of clarifying, estimating and saying no, improvements such as deflection and fast-lane rules, dated events like the launch and planning season, situations from a solo analyst to a team mid-migration, and finally specialist work on forecasting demand and recording what answers actually changed.

What repeats is a daily triage slot, a weekly prioritisation call, status sweep, backlog grooming and desk handover, monthly reviews of intake metrics, feedback, fast-lane use and the answer library, and quarterly demand reviews with department heads. The Purchase decision, Meeting notes, Metrics log, Feedback themes and Operational checklist templates pair with the projects that name them. Installing adds all 50 projects as active, so archive the ones that are not for you yet.
