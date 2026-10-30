---
id: software-engineering.architecture-review-board
name: Architecture Review Board
description: "A chartered review board with clear thresholds, a fast intake and outcome process, a waiver register with expiry dates, and the rhythms that keep big technical decisions consistent without becoming a bottleneck."
category: business
version: 1.0.0
tags: [software-engineering, architecture-review-board, engineer, enterprise, architecture-governance, design-review, technical-decisions, waivers]
author: Aurum Technology
starter_structure:
  templates:
    - meeting-notes
    - risk-register
    - metrics-log
    - operational-checklist
    - vendor
  pillars:
    - name: Software Engineering
      emoji: "⚙️"
      description: "Building and running software: architecture and code quality, delivery and release, testing, infrastructure and reliability, incidents, technical debt, developer experience and engineering teams."
      pillarFrontmatter:
        review_cadence: monthly
      areas:
        - name: Architecture Review Board
          description: "Running a lightweight forum where significant technical decisions are reviewed for consistency, risk and long-term cost before teams commit."
          projects:
            - name: Problem statement for an architecture review board
              description: |-
                ## Purpose
                Boards set up because a senior leader wants oversight tend to become approval queues nobody respects. Writing down the three or four concrete failures the board should prevent, such as two teams buying overlapping observability tools or a service launched without a data retention plan, gives every later design choice a test: does this help prevent those failures, or is it ceremony?

                ## Milestones
                1. Five to ten past decisions from the last two years listed where a second look would have changed the outcome.
                2. Each listed decision costed roughly in engineering months, licence spend or incident hours.
                3. Three or four failure patterns named from that list, each in one sentence.
                4. A one-page problem statement agreed by the head of engineering and two senior engineers.

                ## Notes
                If you cannot find real past decisions that went wrong for want of review, the organisation may not need a board yet. A design clinic or an advice process may be enough.
              priority: medium
              deadlineOffsetDays: 14
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A one-page problem statement naming three or four failure patterns, each backed by at least one real past decision, is agreed by engineering leadership."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "List five past decisions you wish someone had challenged before the team committed"
                - "Estimate what each of those decisions cost in months, money or incidents"
                - "Group the decisions into three or four failure patterns"
                - "Draft the one-page problem statement and send it to two senior engineers for challenge"
            - name: Architecture review board charter
              description: |-
                ## Purpose
                Without a written charter, every team argues afresh about whether the board can block their release and who it answers to. A two-page charter states the board's purpose, scope, decision rights, who it reports to and what it explicitly does not do, so its authority is clear before the first contested review rather than after it.

                ## Milestones
                1. A charter stating purpose, scope, decision rights and the executive sponsor.
                2. A section listing what the board does not review, such as feature design and code style.
                3. The board's relationship to security, data protection and procurement reviews written down.
                4. The charter approved by the sponsor and published where every engineer can find it.

                ## Notes
                Decision rights matter most. Say plainly whether the board approves, advises or can be overruled, and by whom.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A signed-off charter covering purpose, scope, decision rights, exclusions and reporting line is published on the engineering wiki."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Name the executive sponsor the board will report to"
                - "Draft purpose, scope and decision rights in under two pages"
                - "Write the list of things the board will not review"
                - "Get the sponsor's written approval and publish the charter"
            - name: Review threshold for which changes need the board
              description: |-
                ## Purpose
                The commonest way a board fails is by reviewing too much, so teams wait three weeks to add a library. A short threshold, for example any new data store, any new external vendor handling customer data, any change to authentication, or any decision costing more than a set amount per year, lets teams decide for themselves in under a minute whether a proposal belongs on the board.

                ## Milestones
                1. Six to ten threshold criteria written as yes or no questions.
                2. The criteria tested against the last twenty significant changes, with the count that would have needed review recorded.
                3. A clear statement that anything below the threshold is the team's own decision.
                4. The threshold published beside the charter with a named owner.

                ## Notes
                Aim for a threshold that catches roughly one change in ten, not one in two. If the test run against past changes sends half of them to the board, tighten it.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A published threshold of six to ten yes or no criteria, tested against twenty past changes, with the resulting review rate recorded."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Draft six to ten yes or no criteria for board review"
                - "Run the last twenty significant changes against the criteria"
                - "Tighten any criterion that catches routine work"
                - "Publish the threshold next to the charter with an owner named"
            - name: Board membership and rotating seats
              description: |-
                ## Purpose
                A board made only of the longest-serving architects drifts away from how systems are really built today, and a board of twelve cannot reach a decision in an hour. Five to seven members, with two permanent seats and the rest rotating from product teams every few months, keeps reviews grounded and spreads architectural judgement across the organisation.

                ## Milestones
                1. A membership model with seat count, permanent roles and rotating seats written down.
                2. Selection criteria for rotating members agreed, including at least one engineer from a product team.
                3. The first cohort named, with a start and end date for each rotating seat.
                4. A quorum rule and a deputy for the chair recorded.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A membership list of five to seven people with seat types, term dates, a quorum rule and a deputy chair is published with the charter."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Decide the number of seats and which two are permanent"
                - "Write selection criteria for rotating seats"
                - "Invite the first cohort with term dates in the invitation"
                - "Rotate one seat to a new product team engineer @recurring(quarterly)"
            - name: Architecture principles the board reviews against
              description: |-
                ## Purpose
                Reviews without stated principles collapse into the personal taste of whoever speaks loudest. Eight to twelve principles, each with a rationale and its implications, such as prefer managed services over self-hosted for non-differentiating capabilities or every service owns its data, give requesters something to design against and give reviewers a shared vocabulary for saying no.

                ## Milestones
                1. Eight to twelve principles, each with a one-line statement, rationale and implications.
                2. Every principle tested against two real past decisions to check it would have guided them.
                3. Conflicting principles identified, with a note on which wins in which situation.
                4. The principles published and referenced from the review request form.

                ## Notes
                A principle nobody could ever break is a platitude. If no sensible team would ever want to violate it, cut it.
              priority: high
              deadlineOffsetDays: 45
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A published set of eight to twelve principles, each with rationale and implications, is linked from the review request form."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Collect the unwritten rules senior engineers already apply in design debates"
                - "Write each principle with a statement, rationale and implications"
                - "Test every principle against two past decisions"
                - "Publish the principles and link them from the request form"
            - name: Review request intake form and queue
              description: |-
                ## Purpose
                Requests that arrive by direct message, hallway conversation or a forwarded slide deck get lost or reviewed unevenly. A single intake form that asks for the decision being sought, the options considered, the threshold criteria triggered and the date the team needs an answer turns every request into a comparable item in one visible queue.

                ## Milestones
                1. An intake form with no more than eight required fields.
                2. A single queue, such as a board or ticket project, where every request is visible with its status.
                3. Status values agreed: received, assigned, scheduled, decided, conditions open, closed.
                4. Two teams have submitted a real request through the form and given feedback.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A live intake form with at most eight required fields feeds one visible queue, and two real requests have passed through it."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Draft the intake form with the decision sought and the date needed"
                - "Set up the queue with the agreed status values"
                - "Ask two teams to submit their next proposal through the form"
                - "Cut any field the first two requesters left blank or found confusing"
            - name: Review outcome categories and their obligations
              description: |-
                ## Purpose
                Ending a review with general nodding leaves the team unsure whether they may proceed. Four outcome categories, approved, approved with conditions, revise and resubmit, and declined, each with a defined obligation and follow-up, mean every session ends with a decision the requester can repeat to their manager.

                ## Milestones
                1. Four outcome categories defined, each with what the team may and may not do next.
                2. A rule that every condition has an owner and a due date.
                3. A standard outcome note format of no more than half a page.
                4. The categories added to the charter and the intake queue statuses.

                ## Notes
                Declined should be rare and always come with the reason and what would change the answer. A board that declines often is reviewing too late.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "Four outcome categories with written obligations and a half-page outcome note format are part of the published charter."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Write what each of the four outcomes allows the team to do next"
                - "Draft the half-page outcome note format"
                - "Add the rule that every condition carries an owner and due date"
                - "Update the charter and queue statuses to match the four outcomes"
            - name: Board decision log linked to team ADRs
              description: |-
                ## Purpose
                Two years from now someone will ask why the organisation runs two message brokers, and the answer will be in a meeting nobody recorded. A board decision log, one entry per review with outcome, conditions, reviewers and a link to the team's own decision record, keeps the board's reasoning findable without duplicating what teams already write.

                ## Milestones
                1. A log with fields for date, request, outcome, conditions, reviewers and linked record.
                2. A rule that the team's decision record stays the source of detail and the log only summarises.
                3. Every review since the board started entered in the log.
                4. The log searchable by technology, team and outcome.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Every board review has a log entry with outcome, conditions and a link to the team's decision record, searchable by technology and team."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Create the decision log with the agreed fields"
                - "Backfill an entry for every review held so far"
                - "Add the log link to the outcome note format"
                - "Check every decision from the month has a log entry and a linked record @recurring(monthly:26)"
            - name: Review turnaround commitment for requesting teams
              description: |-
                ## Purpose
                Teams route around a board when they cannot predict how long it will take. Publishing a turnaround commitment, such as a scheduled session within ten working days of a complete request and an outcome note within two working days of the session, makes the board something teams can plan a sprint around.

                ## Milestones
                1. A definition of a complete request that starts the clock.
                2. Target times for scheduling, session and outcome note published.
                3. A fast lane defined for urgent requests, with who can invoke it.
                4. Turnaround measured for the first ten requests against the commitment.
              priority: high
              deadlineOffsetDays: 45
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A published turnaround commitment with a fast lane exists, and the first ten requests have recorded turnaround against it."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Define what makes a request complete enough to start the clock"
                - "Set target days for scheduling, session and outcome note"
                - "Write who may invoke the fast lane and when"
                - "Record turnaround for each of the first ten requests"
            - name: Baseline of significant decisions made without review
              description: |-
                ## Purpose
                Before the board can say whether it is working, it needs to know how many significant decisions were happening before it existed and how many it now sees. Counting the last twelve months of new data stores, vendors, languages and platform changes from cloud bills, contracts and repositories gives a baseline that later metrics can be compared with.

                ## Milestones
                1. New data stores, vendors, languages and frameworks adopted in the last year listed from real sources.
                2. Each item marked with whether it would have crossed the review threshold.
                3. A count of threshold-crossing decisions per quarter recorded.
                4. The baseline saved with the board's metrics.
              priority: medium
              deadlineOffsetDays: 60
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A list of threshold-crossing decisions from the previous twelve months, counted per quarter, is stored with the board's metrics."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Pull new vendors from the last year of contracts and expense reports"
                - "List new data stores and runtimes from the cloud bill and repositories"
                - "Mark which items would have crossed the review threshold"
                - "Record the quarterly counts as the board's starting baseline"
            - name: Weekly board session running order
              description: |-
                ## Purpose
                An hour with six senior people is expensive, and sessions that start with ten minutes of finding the right document waste it. A fixed running order, with two or three reviews of fifteen to twenty minutes each, a standing slot for conditions due, and an outcome read back before anyone leaves, gets decisions made in the room rather than in a follow-up thread.

                ## Milestones
                1. A running order with timed slots for reviews, conditions due and outcomes read back.
                2. A rule that a review without a pre-read circulated two working days ahead moves to the next week.
                3. Notes taken in a consistent format for every session.
                4. Outcome notes sent to requesters within one working day for four weeks running.

                ## Notes
                Start from the **Meeting notes** template. Cancel the session when the queue is empty rather than filling it with general discussion.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Four consecutive weekly sessions follow the running order, and every review in them has an outcome note sent within one working day."
                cadence: rolling
              tasks:
                - "Write the timed running order and pin it to the session invite"
                - "Set up the session notes page from the meeting notes template"
                - "Run the board session using the agreed running order @recurring(weekly:wed)"
                - "Send outcome notes for every review held this week @recurring(weekly:thu)"
            - name: Pre-read pack and reviewer assignment routine
              description: |-
                ## Purpose
                Reviewers who see a proposal for the first time in the room ask the questions the document already answers. Assigning two named reviewers to each request at the start of the week, with a pre-read pack of the design document, the threshold criteria triggered and the principles in play, means the session is spent on the hard questions only.

                ## Milestones
                1. A pre-read pack format with the design document, criteria triggered and principles in play.
                2. A rota or rule for assigning two reviewers, one of them from outside the requesting group.
                3. Reviewer comments written on the document before the session.
                4. Every review in a month had its pack out two working days ahead.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "For one full month, every scheduled review has two named reviewers and a pre-read pack circulated at least two working days before the session."
                cadence: rolling
              tasks:
                - "Write the pre-read pack format as a one-page checklist"
                - "Agree the rule for picking a reviewer from outside the requesting group"
                - "Assign two reviewers to every request scheduled for this week @recurring(weekly:mon)"
                - "Ask reviewers to leave comments on the document before the session"
            - name: Conditions follow-up tracker
              description: |-
                ## Purpose
                Approved with conditions turns into approved if nobody checks the conditions. A tracker listing every open condition, its owner, due date and evidence of completion, chased each month and reported in the session, is what gives the board's conditions any weight at all.

                ## Milestones
                1. Every open condition from past reviews listed with owner and due date.
                2. An agreed form of evidence for closing a condition, such as a link to a merged change or a test result.
                3. Overdue conditions raised in the weekly session.
                4. Fewer than one in five conditions overdue at the end of a quarter.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "All open conditions are tracked with owner, due date and closing evidence, and under 20 percent are overdue at quarter end."
                cadence: rolling
              tasks:
                - "Copy every open condition from past outcome notes into the tracker"
                - "Agree what evidence closes a condition"
                - "Chase owners of conditions due this month @recurring(monthly:12)"
                - "Add overdue conditions to the next weekly session agenda"
            - name: Exception and waiver register with expiry dates
              description: |-
                ## Purpose
                Every standard gets broken for good reasons, and the danger is not the exception but the exception that quietly becomes permanent. A register of approved waivers, each with the standard it departs from, the risk accepted, who accepted it and an expiry date, turns exceptions into visible, time-limited debts rather than precedents.

                ## Milestones
                1. A waiver register with standard, reason, risk accepted, accepting owner and expiry date.
                2. A rule that no waiver runs longer than twelve months without renewal.
                3. Existing known exceptions entered in the register.
                4. Expiring waivers reviewed each month and renewed, closed or escalated.

                ## Notes
                Start from the **Risk register** template. The accepting owner should be someone with budget authority over the team, not the board itself.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every active waiver has an accepting owner and an expiry date within twelve months, and none has passed its expiry without a recorded decision."
                cadence: rolling
              tasks:
                - "Create the waiver register from the risk register template"
                - "Enter every known exception with an accepting owner and expiry date"
                - "Review waivers expiring in the next 30 days @recurring(monthly:20)"
                - "Escalate any waiver renewed twice to the executive sponsor"
            - name: Monthly review queue health check
              description: |-
                ## Purpose
                Queues slow down gradually, and by the time teams complain the board is six weeks behind. Recording a handful of numbers each month, requests received, median days to outcome, requests waiting over the commitment, and the share of outcomes by category, shows a slowdown while it is still easy to fix.

                ## Milestones
                1. Four or five queue measures defined with how each is counted.
                2. A metrics log with at least three months of entries.
                3. A trigger agreed for action, such as median turnaround above the commitment two months running.
                4. One change made in response to the numbers and its effect recorded.

                ## Notes
                Start from the **Metrics log** template.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Three consecutive months of queue measures are logged, with an agreed action trigger and at least one recorded response to it."
                cadence: rolling
              tasks:
                - "Define how each queue measure is counted"
                - "Set up the metrics log for the board queue"
                - "Record queue age, throughput and outcome mix in the log @recurring(monthly:3)"
                - "Agree the trigger that forces a change to the process"
            - name: Technology standards list with adopt, hold and retire
              description: |-
                ## Purpose
                Most review time is spent on the same question in different clothes: can we use this database, framework or vendor? A maintained list of standard technologies marked adopt, trial, hold or retire, refreshed each quarter from real review outcomes, answers the common cases before a request is ever written and makes the board's past decisions reusable.

                ## Milestones
                1. A list of standard technologies by category with a status and one-line rationale each.
                2. Each entry linked to the review or decision that set its status.
                3. Retire entries carrying a target date and a named migration owner.
                4. The list refreshed once from the last quarter's review outcomes.

                ## Notes
                Keep hold distinct from forbidden. Hold means new adoption needs a review; existing use carries on.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: artifact
                success_criteria: "A published standards list with statuses, rationale and linked decisions exists and has been refreshed once from a quarter's outcomes."
                cadence: cyclic
              tasks:
                - "List the technologies already in production by category"
                - "Assign each one a status with a one-line rationale"
                - "Give every retire entry a target date and migration owner"
                - "Update the standards list from the quarter's review outcomes @recurring(quarterly)"
            - name: Quarterly board retrospective with requesting teams
              description: |-
                ## Purpose
                Board members rarely hear what it felt like to be reviewed, and teams rarely say it to their faces. A short quarterly survey of everyone who brought a request, followed by a retrospective that includes two requesting engineers, surfaces the friction, unclear feedback or late surprises before the board's reputation sets.

                ## Milestones
                1. A five-question survey sent to every requester from the quarter.
                2. A retrospective held with board members and at least two requesting engineers.
                3. Two or three process changes agreed with owners.
                4. The changes and survey results shared with engineering.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Each quarter, a requester survey and retrospective produce at least two owned process changes, published to engineering."
                cadence: cyclic
              tasks:
                - "Write a five-question survey for requesting teams"
                - "Invite two engineers who were reviewed this quarter to the retrospective"
                - "Run the survey and retrospective with requesting teams @recurring(quarterly)"
                - "Publish the agreed changes with an owner for each"
            - name: Yearly charter and principles renewal
              description: |-
                ## Purpose
                Organisations change faster than charters do: a new cloud provider, a merger or a move to platform teams can make half the threshold criteria irrelevant. Reviewing the charter, threshold and principles once a year against the year's decisions keeps the board reviewing what matters now rather than what mattered when it was founded.

                ## Milestones
                1. The year's decisions and waivers compared against each principle and threshold criterion.
                2. Criteria that never triggered and principles never cited marked for removal.
                3. A revised charter, threshold and principles approved by the sponsor.
                4. A change summary sent to engineering.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: artifact
                success_criteria: "Each year a revised charter, threshold and principles set is approved by the sponsor and published with a change summary."
                cadence: cyclic
              tasks:
                - "Count how often each principle and criterion was cited this year"
                - "Mark unused criteria and principles for removal"
                - "Renew the charter, threshold and principles with the sponsor @recurring(yearly)"
                - "Send engineering a short summary of what changed and why"
            - name: Early design office hours with the board
              description: |-
                ## Purpose
                The most expensive reviews are the ones that arrive after a team has built a prototype and promised a date. A weekly half-hour of office hours, where any engineer can bring a sketch or a question before writing a proposal, moves board input to the point where changing direction costs a conversation rather than a quarter.

                ## Milestones
                1. A recurring half-hour slot with a board member rotating as host.
                2. A booking method that needs no document, only a one-line topic.
                3. A short note kept of each consult and whether it later became a formal request.
                4. At least half of formal requests in a quarter preceded by an office hours visit.
              priority: medium
              frontmatter:
                mode: service
                output_kind: habit
                success_criteria: "Weekly office hours run for a quarter, with consult notes kept and at least half of formal requests preceded by a visit."
                cadence: rolling
              tasks:
                - "Book a recurring half-hour office hours slot and share the booking link"
                - "Set the rota of board members who host each week"
                - "Host office hours for early design questions @recurring(weekly:tue)"
                - "Note each consult topic and whether it became a formal request"
            - name: Monthly decision digest for engineering
              description: |-
                ## Purpose
                Decisions made in a room of six people only shape the rest of engineering if the other few hundred hear about them. A monthly digest of no more than a page, listing outcomes, changes to the standards list, new waivers and expiring ones, makes the board's work visible and lets teams find precedents before they write a request.

                ## Milestones
                1. A one-page digest format with outcomes, standards changes and waivers.
                2. The digest sent to the main engineering channel or mailing list.
                3. Each digest entry linked to its decision log entry.
                4. Three consecutive digests published on time.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Three consecutive monthly digests of one page or less, each linking to the decision log, are published to all of engineering."
                cadence: rolling
              tasks:
                - "Draft the one-page digest format"
                - "Ask the agent to summarise the month's decision log entries into a digest draft"
                - "Publish the digest to the engineering channel @recurring(monthly:28)"
                - "Check every digest entry links to its decision log record"
            - name: Reading a design proposal as a board reviewer
              description: |-
                ## Purpose
                New reviewers tend to either rubber-stamp or rewrite the design in their own image. Learning a structured read, checking the problem framing, the options rejected, failure modes, data ownership, operational burden and exit cost, in that order, lets a reviewer produce useful comments on a twenty-page proposal in under an hour.

                ## Milestones
                1. A personal review checklist of eight to ten questions written.
                2. Three past proposals reviewed with the checklist and compared with the board's actual outcome.
                3. Review comments sorted into blocking, important and optional.
                4. One live review completed alongside an experienced reviewer.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A written reviewer checklist exists and has been applied to three past proposals and one live review with an experienced reviewer."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Write an eight to ten question checklist for reading a proposal"
                - "Review three past proposals with the checklist"
                - "Compare your comments with the outcome the board actually reached"
                - "Shadow an experienced reviewer on a live request"
            - name: Writing review feedback teams can act on
              description: |-
                ## Purpose
                Feedback such as have you considered scalability leaves a team guessing what will satisfy the board. Practising feedback that names the concern, the evidence that would resolve it and whether it blocks approval turns reviews into a list of work rather than a mood.

                ## Milestones
                1. Ten past review comments rewritten in the concern, evidence, blocking form.
                2. A short guide for board members on feedback format.
                3. Every condition in a month's outcome notes stated as a checkable change.
                4. Requesters' survey scores on feedback clarity recorded before and after.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A feedback guide exists, and one month of outcome notes shows every condition written as a checkable change."
                cadence: phased
                effort_hours_estimate: "5"
              tasks:
                - "Pick ten vague comments from past outcome notes"
                - "Rewrite each as concern, evidence needed and blocking or not"
                - "Turn the rewrites into a one-page feedback guide for members"
                - "Compare requester clarity scores before and after the guide"
            - name: Facilitating a review to a decision in 20 minutes
              description: |-
                ## Purpose
                Reviews overrun when the discussion wanders into implementation detail or a debate between two members. Practising facilitation moves, restating the decision being sought, parking detail, calling for each member's position and reading back the outcome, gets a contested proposal to a clear result inside its slot.

                ## Milestones
                1. A facilitation script with an opening, a parking rule and a closing read-back.
                2. Three sessions facilitated using the script.
                3. Each of those reviews finished within its slot with a recorded outcome.
                4. Feedback from members on what to change in the script.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Three reviews facilitated with a written script each ended inside their time slot with a recorded outcome."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Write a facilitation script with an opening and a read-back"
                - "Agree a parking lot rule for implementation detail"
                - "Facilitate three reviews with the script and time each one"
                - "Ask members what to change after the third session"
            - name: Estimating long-term cost of ownership in a review
              description: |-
                ## Purpose
                Proposals usually price the build and forget the next five years: upgrades, on-call load, licence increases, specialist hiring and the eventual migration off. Learning to estimate total cost of ownership roughly, in engineer-months and money per year, lets the board compare a clever self-hosted option with a dull managed one on equal terms.

                ## Milestones
                1. A cost of ownership worksheet covering build, run, people, licences and exit.
                2. The worksheet applied to two past decisions with actual costs compared.
                3. A rule of thumb recorded for the hidden costs your organisation most often misses.
                4. The worksheet attached to the intake form as optional for threshold-crossing requests.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: artifact
                success_criteria: "A cost of ownership worksheet has been tested against two past decisions with actuals and is linked from the intake form."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Draft a worksheet with build, run, people, licence and exit rows"
                - "Fill it in for two past decisions using real cost data"
                - "Note which hidden costs the original proposals missed"
                - "Link the worksheet from the intake form"
            - name: Spotting duplication across teams in reviews
              description: |-
                ## Purpose
                Seeing across teams is the board's most distinctive value: the third team building its own feature flag service, or two groups negotiating separately with the same vendor. Building the habit of checking every proposal against the standards list, the decision log and other teams' roadmaps turns that cross-team view into a routine step rather than lucky memory.

                ## Milestones
                1. A short duplication check added to the reviewer checklist.
                2. A list of shared capabilities already built or bought somewhere in the organisation.
                3. Two reviews in which a duplicate was found and the teams were introduced.
                4. One consolidation opportunity raised with the engineering leadership.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A shared capabilities list exists, the duplication check is in the reviewer checklist, and at least one consolidation opportunity has been raised."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "List capabilities already built or bought by more than one team"
                - "Add a duplication question to the reviewer checklist"
                - "Introduce the teams whenever a review finds overlapping work"
                - "Raise the largest consolidation opportunity with engineering leadership"
            - name: Risk storming a proposal with the board
              description: |-
                ## Purpose
                Open discussion favours the most confident voice and misses quiet worries. Risk storming, where each member silently marks risks on the proposal's diagram before anyone speaks, then the group clusters and rates them, draws out the concerns a junior rotating member would otherwise keep to themselves.

                ## Milestones
                1. The risk storming steps written as a one-page guide for the board.
                2. One practice session run on a past proposal.
                3. Risk storming used in two live reviews with risks rated by likelihood and impact.
                4. Rated risks carried into the outcome note as conditions or accepted risks.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Risk storming has been run in two live reviews, with rated risks carried into the outcome notes."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Write the risk storming steps on one page"
                - "Practise on a past proposal with the current members"
                - "Use the method in the next two contested reviews"
                - "Carry the top-rated risks into each outcome note"
            - name: Chairing the board with neutrality and declared interests
              description: |-
                ## Purpose
                Nobody who also leads the platform team whose product is under review can chair a fair session, however good their intentions. Learning to chair well, declaring interests at the start, stepping aside when conflicted, keeping airtime balanced and owning the final read-back, protects the board's legitimacy with teams who lose a decision.

                ## Milestones
                1. A conflict of interest rule written into the charter.
                2. Interests declared at the start of each session and recorded in the notes.
                3. The deputy chair has run at least one session where the chair was conflicted.
                4. Speaking time noted in two sessions and imbalances discussed with members.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A conflict of interest rule is in the charter, interests are recorded each session, and the deputy has chaired a conflicted review."
                cadence: phased
                effort_hours_estimate: "3"
              tasks:
                - "Draft a conflict of interest rule for the charter"
                - "Open each session by asking members to declare interests"
                - "Hand the chair to the deputy for any review you are conflicted on"
                - "Track who speaks in two sessions and discuss the balance"
            - name: Advice process versus approval board
              description: |-
                ## Purpose
                Some organisations need a board with authority to stop work; many are better served by an advice process, where the deciding team must seek advice from affected people and the board, then decides and records it. Choosing deliberately between the two, or a hybrid with approval only above a cost or risk line, sets the tone of every review that follows.

                ## Milestones
                1. The two models and one hybrid described with how each would handle three recent decisions.
                2. The organisation's appetite for central control discussed with the sponsor.
                3. A model chosen with the reasons recorded.
                4. The charter's decision rights section updated to match.

                ## Notes
                An approval board suits regulated environments and shared platforms. An advice process suits autonomous teams with strong engineering judgement. A hybrid is common and fine.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A recorded decision between approval, advice process or hybrid, with reasons, is reflected in the charter's decision rights."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Write a half page on how each model would have handled three recent decisions"
                - "Discuss central control appetite with the executive sponsor"
                - "Record the chosen model and the reasons"
                - "Update the charter's decision rights to match the model"
            - name: Self-certification checklist for lower-risk changes
              description: |-
                ## Purpose
                Plenty of changes sit just under the threshold but still benefit from a check. A self-certification checklist, which the team completes and files without a session, keeps those changes consistent with the principles while freeing the board to spend its hour on decisions that truly need debate.

                ## Milestones
                1. A checklist of ten to fifteen items tied to the principles and standards list.
                2. A rule for which changes may self-certify instead of attending a session.
                3. Completed checklists filed in the decision log.
                4. A monthly sample of self-certified changes checked by a board member.

                ## Notes
                Start from the **Operational checklist** template.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A self-certification checklist is in use, completed copies are in the decision log, and monthly sample checks are recorded."
                cadence: phased
                effort_hours_estimate: "5"
              tasks:
                - "Draft the checklist from the operational checklist template"
                - "Write the rule for which changes may self-certify"
                - "File completed checklists in the decision log"
                - "Sample five self-certified changes and check them against the principles @recurring(monthly:16)"
            - name: Cutting review cycle time by half
              description: |-
                ## Purpose
                If the median request takes four weeks from intake to outcome, teams will start deciding first and asking later. Mapping where the time goes, usually waiting for a slot, waiting for a complete document or waiting for the outcome note, and fixing the largest wait first can halve cycle time within a quarter without lowering the bar.

                ## Milestones
                1. Cycle time for the last twenty requests broken down by stage.
                2. The single largest waiting stage identified.
                3. One change made to that stage, such as a second weekly slot or a document checklist at intake.
                4. Median cycle time halved against the starting figure for a full quarter.
              priority: medium
              deadlineOffsetDays: 120
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "Median intake to outcome time for a full quarter is half or less of the measured starting figure, with the change that caused it recorded."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "Break the last twenty requests into stage-by-stage waiting times"
                - "Pick the stage with the longest median wait"
                - "Make one change to that stage and announce it to requesters"
                - "Compare median cycle time after a quarter with the starting figure"
            - name: Joint session with security, data and cost reviewers
              description: |-
                ## Purpose
                Teams in larger organisations often face an architecture review, a security review, a data protection assessment and a finance check, each scheduled weeks apart and each asking for the same diagram. Bringing those reviewers into one joint session for threshold-crossing requests cuts the elapsed time and stops conflicting conditions from different reviews.

                ## Milestones
                1. Every review a significant change must pass listed with owner and typical lead time.
                2. Overlapping questions across the reviews identified.
                3. A joint session format agreed with the owners of the other reviews.
                4. Three requests taken through the joint session with elapsed time compared to before.
              priority: medium
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "Three requests have passed a joint architecture, security, data and cost session, with elapsed time compared against separate reviews."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "List every review a significant change must pass and its lead time"
                - "Mark the questions the reviews ask in common"
                - "Agree a joint session format with the other review owners"
                - "Compare elapsed time for three joint reviews with past separate ones"
            - name: Reference architectures for recurring patterns
              description: |-
                ## Purpose
                When the board has approved the same shape of solution four times, such as a public API behind a gateway with a managed relational database, it should not need to review it a fifth. Publishing reference architectures for the patterns the board sees most lets teams that follow them skip review entirely and gives the board a reason to say yes faster.

                ## Milestones
                1. The three most frequently reviewed patterns identified from the decision log.
                2. A reference architecture for each with diagram, standard components and known trade-offs.
                3. A rule that conforming designs need no session.
                4. Each reference architecture checked against recent decisions every quarter.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Three published reference architectures exist, each linked to the decisions that shaped it, and conforming designs are exempt from review."
                cadence: phased
                effort_hours_estimate: "16"
              tasks:
                - "Find the three patterns reviewed most often in the decision log"
                - "Draft a diagram and standard component list for the first pattern"
                - "Publish the rule that conforming designs need no session"
                - "Check each reference architecture against recent decisions @recurring(quarterly)"
            - name: Appeal and escalation path for disputed outcomes
              description: |-
                ## Purpose
                A team that believes the board got it wrong needs a legitimate route other than going round it. A written appeal path, who hears it, what new evidence is needed and how fast it is decided, keeps disputes in the open and stops senior managers quietly overruling the board in private.

                ## Milestones
                1. The appeal route written with who hears it and the evidence required.
                2. A time limit for deciding appeals.
                3. The appeal path added to the charter and to every declined outcome note.
                4. Any appeals and their results recorded in the decision log.
              priority: low
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A written appeal path with a time limit is in the charter and referenced from every declined outcome note."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Agree with the sponsor who hears appeals"
                - "Write the evidence an appeal must bring and the time limit"
                - "Add the appeal path to the charter and the declined outcome template"
                - "Record each appeal and its result in the decision log"
            - name: Board launch with three pilot reviews
              description: |-
                ## Purpose
                Announcing a board with a long policy document invites suspicion; showing it working on three real proposals invites requests. Choosing three willing teams with genuine pending decisions, running their reviews in public and publishing what changed as a result gives the board a track record before it asks anyone to follow its rules.

                ## Milestones
                1. Three teams with real pending threshold-crossing decisions agreed to pilot.
                2. Three reviews held with outcome notes published.
                3. Feedback from each pilot team recorded.
                4. A launch note sent to engineering with the pilot outcomes, charter and threshold.
              priority: high
              deadlineOffsetDays: 60
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "Three pilot reviews have published outcome notes and team feedback, and a launch note has gone to all of engineering."
                cadence: one-shot
                effort_hours_estimate: "12"
              tasks:
                - "Ask three team leads with pending decisions to pilot the board"
                - "Schedule the three pilot reviews within one month"
                - "Collect feedback from each pilot team after its outcome"
                - "Send the launch note with outcomes, charter and threshold"
            - name: Review of a multi-year platform or vendor commitment
              description: |-
                ## Purpose
                Signing a three-year contract for a data platform, an identity provider or a cloud discount commitment is one of the few decisions that is genuinely hard to reverse. A dedicated review covering lock-in, exit cost, data portability, the vendor's roadmap and what happens if it is acquired gives procurement and leadership an engineering view before signature, not after.

                ## Milestones
                1. The commitment's term, cost and exit terms summarised on one page.
                2. Lock-in and data portability assessed with a rough exit cost.
                3. Alternatives and a do-nothing option compared on the same criteria.
                4. A board outcome delivered to procurement and the sponsor before the signing date.

                ## Notes
                Start from the **Vendor** template. Ask procurement for the contract's exit and price review clauses early; they shape the engineering risk more than the feature list.
              priority: medium
              frontmatter:
                mode: event
                output_kind: decision
                success_criteria: "A board outcome covering lock-in, exit cost and alternatives reaches procurement before the commitment is signed."
                cadence: one-shot
                effort_hours_estimate: "10"
              tasks:
                - "Create a vendor record for the commitment from the vendor template"
                - "Ask procurement for the exit and price review clauses"
                - "Estimate the cost and time to exit at the end of the term"
                - "Send the board outcome to procurement before the signing date"
            - name: Architecture review for an acquisition integration
              description: |-
                ## Purpose
                After an acquisition, someone has to decide which of two identity systems, two billing platforms and two deployment pipelines survives, and those calls are often made by whoever moves first. Running a structured board review of the acquired estate gives each overlap a recorded decision: keep, merge, migrate or retire, with an owner and a timeline.

                ## Milestones
                1. An inventory of the acquired company's major systems and their overlaps.
                2. Each overlap assigned a keep, merge, migrate or retire recommendation.
                3. Integration risks such as data residency and contractual constraints listed.
                4. Recommendations recorded in the decision log with owners and target quarters.
              priority: medium
              frontmatter:
                mode: event
                output_kind: decision
                success_criteria: "Every major overlap between the two estates has a recorded keep, merge, migrate or retire decision with an owner and target quarter."
                cadence: phased
                effort_hours_estimate: "24"
              tasks:
                - "Request the acquired company's system inventory and diagrams"
                - "Map each of their systems to its equivalent in your estate"
                - "Hold a board session to assign a recommendation to each overlap"
                - "Record each recommendation with an owner and target quarter"
            - name: Annual state of the estate presentation to leadership
              description: |-
                ## Purpose
                Leadership funds migrations and platform work more readily when they can see the pattern behind individual requests. A yearly presentation drawn from the decision log, waiver register and standards list, showing where the estate is converging, where exceptions are piling up and the three investments that would reduce future risk, turns the board's records into budget decisions.

                ## Milestones
                1. The year's decisions, waivers and standards changes summarised in numbers.
                2. Three trends identified with supporting evidence.
                3. Three recommended investments with rough cost and the risk each reduces.
                4. The presentation delivered and leadership's responses recorded.
              priority: medium
              deadlineOffsetDays: 120
              frontmatter:
                mode: event
                output_kind: deliverable
                success_criteria: "A presentation with three trends and three costed investments is delivered to leadership and their response is recorded."
                cadence: one-shot
                effort_hours_estimate: "12"
              tasks:
                - "Count the year's decisions by outcome and the waivers still open"
                - "Pick three trends and gather the evidence for each"
                - "Cost three investments that would reduce future risk"
                - "Present the state of the estate to leadership @recurring(yearly)"
            - name: Governance evidence pack for an audit or certification
              description: |-
                ## Purpose
                Auditors for security certifications, regulators and enterprise customers increasingly ask how significant technical changes are reviewed and approved. An evidence pack showing the charter, threshold, a sample of outcome notes with conditions closed and the waiver register answers that question in one sitting rather than a scramble across inboxes.

                ## Milestones
                1. The auditor's or customer's governance questions mapped to board artefacts.
                2. A sample of ten recent reviews with outcome notes and closed conditions assembled.
                3. Gaps in the evidence identified and either fixed or explained.
                4. The pack handed over and follow-up questions answered.
              priority: medium
              deadlineOffsetDays: 45
              frontmatter:
                mode: event
                output_kind: deliverable
                success_criteria: "An evidence pack mapping each governance question to board artefacts, with ten sampled reviews, is delivered by the audit deadline."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Get the auditor's list of governance questions"
                - "Map each question to a board artefact or note the gap"
                - "Assemble ten recent outcome notes with their closed conditions"
                - "Hand over the pack and log follow-up questions with owners"
            - name: Lightweight review forum for a 30-engineer scale-up
              description: |-
                ## Purpose
                A company with four teams and one principal engineer does not need a formal board, but it does need someone to notice before the second team picks a different queue technology. A fortnightly forty-five minute forum with the tech leads, a three-line threshold and a shared decision log gives most of the benefit at a fraction of the ceremony.

                ## Milestones
                1. A three-line threshold agreed by the tech leads.
                2. A fortnightly forum held four times.
                3. Decisions recorded in a single shared log.
                4. A point written down at which the forum would become a formal board, such as a headcount or a second office.
              priority: low
              frontmatter:
                mode: building
                output_kind: habit
                success_criteria: "Four fortnightly forums have run with decisions logged, and a written trigger for moving to a formal board exists."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Agree a three-line threshold with the tech leads"
                - "Book a fortnightly forty-five minute forum"
                - "Record every forum decision in one shared log"
                - "Write the headcount or event that would trigger a formal board"
            - name: Fitting the board into enterprise governance
              description: |-
                ## Purpose
                Large organisations already run change advisory boards, enterprise architecture functions, risk committees and design authorities, and a new architecture board that ignores them adds another queue. Mapping the existing bodies, agreeing what each owns and where the architecture board's outcome is accepted as input avoids double review and turf disputes.

                ## Milestones
                1. Every existing governance body touching technology listed with its remit.
                2. Overlaps with the architecture board identified.
                3. A written agreement with each overlapping body on who decides what.
                4. The agreements referenced from the charter.

                ## Notes
                Change advisory boards usually govern when a change is deployed, while the architecture board governs what is built. Saying that plainly settles most overlaps.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "Written remit agreements with each overlapping governance body are referenced from the charter."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "List each governance body that reviews technology changes"
                - "Meet the chair of each overlapping body"
                - "Write who decides what with each overlapping body"
                - "Link the agreements from the charter"
            - name: First term as a rotating board member
              description: |-
                ## Purpose
                Engineers invited onto the board for a few months often feel they lack the seniority to challenge a principal architect. A plan for the first term, reading the principles and the last ten outcomes, shadowing two reviews, then leading one, builds the confidence to contribute and gives the engineer something concrete to cite at their next promotion conversation.

                ## Milestones
                1. The charter, principles and last ten outcome notes read.
                2. Two reviews shadowed with written comments compared to the lead reviewer's.
                3. One review led as primary reviewer.
                4. A short reflection on what you learned shared with your manager.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "During the term you have shadowed two reviews, led one as primary reviewer and shared a written reflection with your manager."
                cadence: phased
                effort_hours_estimate: "15"
              tasks:
                - "Read the charter, principles and last ten outcome notes"
                - "Shadow two reviews and write your own comments first"
                - "Lead one review as primary reviewer"
                - "Write a half-page reflection for your manager at the end of the term"
            - name: Bringing your first proposal to the board
              description: |-
                ## Purpose
                For the engineer presenting, a board review can feel like an exam with unknown questions. Preparing deliberately, checking the threshold, visiting office hours, writing the options and the exit cost, and rehearsing the five-minute summary, turns the session into a conversation and usually means approval at the first sitting.

                ## Milestones
                1. The threshold criteria the proposal triggers identified.
                2. An office hours consult held before writing the proposal.
                3. A proposal with options considered, principles addressed and exit cost.
                4. An outcome received at the first sitting, with any conditions planned into the backlog.

                ## Notes
                Lead with the decision you need and the date you need it by. Reviewers relax when they know what they are being asked.
              priority: medium
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "Your proposal receives an outcome at its first session, and any conditions are in the team backlog with owners."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Check which threshold criteria your change triggers"
                - "Book an office hours slot before writing the proposal"
                - "Write the proposal with options, principles addressed and exit cost"
                - "Rehearse a five-minute summary with a colleague"
            - name: Reviewing systems built by vendors and contractors
              description: |-
                ## Purpose
                Systems delivered by an outsourcing partner or agency often arrive designed to the contract, not to your principles, and the gap shows only at handover. Reviewing externally built work at design stage and again before acceptance, with the same principles and threshold as internal teams, keeps outsourced systems operable by the people who inherit them.

                ## Milestones
                1. A clause or schedule in supplier statements of work requiring design review.
                2. A design-stage review held for one external delivery.
                3. A pre-acceptance review checking operability, documentation and ownership handover.
                4. Findings tracked as conditions until the system is accepted.
              priority: low
              frontmatter:
                mode: service
                output_kind: deliverable
                success_criteria: "One externally built system has passed both a design-stage and a pre-acceptance board review with conditions tracked to closure."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "Ask procurement to add a design review step to supplier statements of work"
                - "Schedule a design-stage review for the next external delivery"
                - "Run a pre-acceptance review covering operability and handover"
                - "Track supplier findings as conditions until acceptance"
            - name: Federated review boards across business units
              description: |-
                ## Purpose
                In an enterprise with several business units, one central board becomes a bottleneck, while fully independent boards drift into incompatible standards. A federated model, with local boards deciding most requests and a central board for cross-unit standards and shared platforms, keeps decisions close to the teams while protecting what must be common.

                ## Milestones
                1. A split of decision rights between local and central boards written down.
                2. Shared principles and standards list adopted by every local board.
                3. Local decision logs feeding a single searchable view.
                4. A quarterly meeting of local chairs to align on standards changes.
              priority: low
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "Local and central decision rights are documented, every local board uses the shared principles, and local logs feed one searchable view."
                cadence: phased
                effort_hours_estimate: "20"
              tasks:
                - "Write which decisions local boards make and which go central"
                - "Get each local chair to adopt the shared principles"
                - "Connect local decision logs into one searchable view"
                - "Book a quarterly meeting of local board chairs"
            - name: Reviving a board that became a rubber stamp
              description: |-
                ## Purpose
                Boards decay into one of two failures: a queue that approves everything because nobody reads the documents, or a gate teams avoid by splitting changes below the threshold. Diagnosing which one you have from the decision log and requester interviews, then making two or three targeted changes, is cheaper than disbanding the board and rebuilding it a year later.

                ## Milestones
                1. The last six months of outcomes analysed for approval rate, conditions closed and late requests.
                2. Five requesters and five non-requesters interviewed about why they did or did not use the board.
                3. A diagnosis written in one paragraph.
                4. Two or three changes made and their effect checked after a quarter.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A written diagnosis based on six months of outcomes and ten interviews leads to two or three changes whose effect is measured after a quarter."
                cadence: phased
                effort_hours_estimate: "12"
              tasks:
                - "Pull six months of outcomes, conditions closed and request timing"
                - "Interview five teams that used the board and five that avoided it"
                - "Write a one-paragraph diagnosis of the board's failure mode"
                - "Make two or three changes and recheck the numbers after a quarter"
            - name: Board conditions enforced as automated policy checks
              description: |-
                ## Purpose
                Conditions such as no public storage buckets for this service or only the approved database engines in this account are easy to forget once the review is over. Expressing the most common conditions and standards as policy checks in the deployment pipeline or cloud account means the board's decisions keep holding long after the outcome note is filed.

                ## Milestones
                1. The ten most frequent conditions and standards reviewed for whether they can be checked automatically.
                2. Three of them implemented as policy checks that warn before they block.
                3. Each check linked to the decision that justified it.
                4. Violations reported to the board monthly for a quarter.

                ## Notes
                Run new checks in warning mode for a few weeks first. A check that blocks deployments on day one will be waived before it is trusted.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Three board conditions or standards run as automated policy checks, each linked to its originating decision, with a quarter of violation reports."
                cadence: phased
                effort_hours_estimate: "20"
              tasks:
                - "List the ten conditions and standards the board sets most often"
                - "Pick three that can be checked from code or cloud configuration"
                - "Implement the three checks in warning mode"
                - "Link each check to the decision log entry that justified it"
            - name: Two-year look-back at board decisions
              description: |-
                ## Purpose
                Boards are rarely held to account for whether their decisions were right. Revisiting a sample of decisions two years on, asking whether the predicted risks appeared, whether conditions were met and whether the team would decide the same way, is the only honest test of the board's judgement and the best source of new principles.

                ## Milestones
                1. Ten decisions from about two years ago sampled across outcomes.
                2. Each requesting team asked how the decision played out.
                3. A short finding written per decision: right, wrong or too early to tell, with reasons.
                4. Lessons fed into the principles or threshold at the next renewal.
              priority: low
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "Ten decisions from about two years ago each have a recorded finding, and at least one lesson is proposed for the next charter renewal."
                cadence: cyclic
              tasks:
                - "Sample ten decisions from about two years ago across all outcomes"
                - "Ask each requesting team how the decision played out"
                - "Write a finding for each decision with the reasons"
                - "Run the two-year look-back on a fresh sample of decisions @recurring(yearly)"
            - name: Portfolio view of architecture risk across teams
              description: |-
                ## Purpose
                Individual reviews see one proposal at a time, but the risks that hurt an enterprise are often aggregate: a dozen services on an end-of-support runtime, or every team depending on one unowned shared library. A portfolio view built from waivers, retire entries on the standards list and open conditions shows those concentrations and lets the board prioritise across teams.

                ## Milestones
                1. Waivers, retire entries and open conditions combined into one view by team and technology.
                2. The five largest risk concentrations identified.
                3. Each concentration assigned an owner and a proposed response.
                4. The view refreshed every quarter and shared with the sponsor.
              priority: low
              frontmatter:
                mode: research
                output_kind: artifact
                success_criteria: "A quarterly portfolio view names the five largest risk concentrations, each with an owner and proposed response, shared with the sponsor."
                cadence: cyclic
              tasks:
                - "Combine waivers, retire entries and open conditions into one table"
                - "Group the table by technology and team to find concentrations"
                - "Assign an owner and response to each of the top five"
                - "Refresh the portfolio risk view and send it to the sponsor @recurring(quarterly)"
            - name: Measuring whether the board improves outcomes
              description: |-
                ## Purpose
                Throughput and turnaround show whether the board is efficient, not whether it is useful. Tracking outcome measures, such as the share of threshold-crossing decisions that reached the board compared with the baseline, incidents traced to unreviewed decisions and the number of duplicated capabilities, tells the sponsor whether the hours spent are paying back.

                ## Milestones
                1. Three or four outcome measures defined, each compared with the original baseline.
                2. The first quarter's values recorded.
                3. A short quarterly note to the sponsor interpreting the numbers.
                4. One change to the board made in response to the measures.

                ## Notes
                Resist counting reviews held as success. A board that reviews more and more may simply be catching routine work.
              priority: low
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "Three or four outcome measures are recorded quarterly against the baseline, with a note to the sponsor and one resulting change."
                cadence: cyclic
              tasks:
                - "Define three or four outcome measures tied to the problem statement"
                - "Record the first quarter's values next to the baseline"
                - "Send the sponsor a quarterly note on the outcome measures @recurring(quarterly)"
                - "Make one change to the board based on what the measures show"
            - name: Board review criteria for AI and LLM features
              description: |-
                ## Purpose
                Proposals to add a hosted language model or an embeddings store raise questions the existing principles may not cover: customer data sent to a third party, unpredictable per-request cost, model version changes outside your control and evaluation before launch. Adding a short set of review criteria for these features lets the board assess them consistently instead of improvising each time.

                ## Milestones
                1. Five to eight review questions for AI features covering data, cost, vendor change and evaluation.
                2. The questions tested against two recent or upcoming AI proposals.
                3. Standards list entries added for approved model providers and data handling rules.
                4. The questions added to the intake form for requests that use a model.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A tested set of five to eight AI feature review questions is part of the intake form, with model providers on the standards list."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Draft five to eight review questions for features that call a model"
                - "Ask the agent to compare your questions with two recent AI proposals and list gaps"
                - "Add approved model providers and data rules to the standards list"
                - "Add the questions to the intake form for model-backed requests"
---

# Architecture Review Board

This area is for the engineers and enterprise architects who run, sit on or present to an architecture review board: the forum where decisions with long tails, such as a new database engine, a multi-year vendor contract or a second messaging platform, get a second look before a team commits. It starts with foundations (why the board exists, its charter, the threshold for what needs review, the principles it reviews against and the outcome categories), then the weekly and monthly machinery, the reviewing and chairing skills, the changes that keep the board fast, dated events such as the first pilot reviews and the annual state of the estate, situations from a small scale-up to a federated enterprise, and specialist work like auditing old decisions.

What repeats is the weekly session with its reviewer assignments and office hours, a monthly chase of open conditions, expiring waivers, queue health and the decision digest, a quarterly refresh of the technology standards list, membership rotation and a retrospective with requesting teams, and a yearly charter renewal. The Meeting notes, Risk register, Metrics log, Operational checklist and Vendor templates pair with the projects that need them. Installing adds all 50 projects as active, so archive the ones that are not for you yet.
