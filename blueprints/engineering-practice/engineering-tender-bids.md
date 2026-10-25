---
id: engineering-practice.engineering-tender-bids
name: Engineering Tender Bids
description: "Bids that are compliant, priced on purpose and delivered on time: a go or no-go discipline, a tender register and compliance matrix, clarifications, priced risks, a settled price and a clean submission."
category: business
version: 1.0.0
tags: [engineering-practice, engineering-tender-bids, engineer, small-business, tendering, bid-management, proposals, procurement]
author: Aurum Technology
starter_structure:
  templates:
    - risk-register
    - meeting-notes
    - operational-checklist
    - metrics-log
    - development-plan
  pillars:
    - name: Engineering Practice
      emoji: "🔧"
      description: "The day-to-day work of practising engineers: each major discipline, process safety and risk studies, FEED, design reviews, commissioning, reliability and maintenance, CAD, simulation and PLC work, project delivery, tenders, reports, ethics and standards, and the Caribbean energy sector from Point Lisas to LNG."
      pillarFrontmatter:
        review_cadence: quarterly
      areas:
        - name: Engineering Tender Bids
          description: "Preparing a contractor's bid for engineering work: reading the tender documents, technical clarifications, scope assumptions, estimates, schedule and the bid submission."
          projects:
            - name: Go or no-go scorecard for engineering tenders
              description: |-
                ## Purpose
                Most firms that complain about a low hit rate are bidding for work they were never likely to win, and every unwinnable bid takes estimators and engineers away from the ones they could. A written scorecard, with weighted criteria such as client relationship, technical fit, capacity, competition, contract risk and margin potential, turns the decision to bid into something the team can argue about with facts in the first two days of a tender.

                ## Milestones
                1. Eight to ten go or no-go criteria agreed, each with a weighting and a scoring guide.
                2. A minimum score below which the firm declines to bid unless a director overrides it in writing.
                3. The scorecard tested on the last five tenders, won and lost, and the weightings adjusted.
                4. The scorecard saved where the whole bid team can find it and use it on the next enquiry.

                ## Notes
                Declining politely, with a short letter to the client, protects the relationship far better than a rushed, non-compliant bid.
              priority: high
              deadlineOffsetDays: 14
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A weighted go or no-go scorecard with a minimum score exists and has been applied to at least five past tenders."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "List the last five tenders the firm bid and whether each was won"
                - "Draft eight to ten go or no-go criteria with weightings"
                - "Score the five past tenders and compare against the results"
                - "Agree the minimum bid score with the directors"
            - name: Tender document read-through and register
              description: |-
                ## Purpose
                Tender packages arrive as dozens of files: instructions to tenderers, form of tender, conditions of contract, scope of work, specifications, drawings, pricing schedules and returnable forms, and the requirement that sinks a bid is usually buried in one of the less obvious ones. Logging every document with its revision and reading each one in the first week means nothing surprises the team on submission day.

                ## Milestones
                1. Every tender document listed in a register with number, title, revision and date received.
                2. Each document assigned to a named reader with a date to finish reading it.
                3. A one-page summary of the key requirements, deadlines and evaluation basis circulated to the team.
                4. Missing, illegible or contradictory documents raised with the client as clarifications.
              priority: high
              deadlineOffsetDays: 7
              frontmatter:
                mode: research
                output_kind: artifact
                success_criteria: "A tender document register shows every file with its revision and a named reader, and a key requirements summary has been circulated."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Download every tender file and check the count against the document list"
                - "Log each document with its number, title and revision in a register"
                - "Assign a named reader and a finish date to every document"
                - "Ask the agent to draft a one-page key requirements summary from the instructions to tenderers"
            - name: Bid timetable worked back from the submission deadline
              description: |-
                ## Purpose
                Every tender has a fixed closing time and most bid teams spend the first week as if they had a month, then price the last items at midnight. Working backwards from the deadline, with internal cut-offs for clarifications, supplier quotes, the draft technical proposal, the red team review, price settlement and printing or upload, gives the team dates they can actually hold.

                ## Milestones
                1. The client's closing date, clarification cut-off and site visit date written at the top of the timetable.
                2. Internal deadlines set for supplier quotes, technical drafts, reviews and price settlement.
                3. At least one full working day held in reserve before the closing time.
                4. The timetable issued to everyone contributing, including subcontractors and suppliers.

                ## Notes
                Set the internal submission deadline at least 24 hours before the client's. Portals slow down and crash in the last hours before a popular tender closes.
              priority: high
              deadlineOffsetDays: 7
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A bid timetable with internal cut-offs and a full reserve day before closing has been issued to every contributor."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Copy the closing time and clarification cut-off from the instructions to tenderers"
                - "Set internal cut-offs for quotes, drafts, review and price settlement"
                - "Mark a full reserve day before the client's deadline"
                - "Send the timetable to every contributor and supplier"
            - name: Bid team roles and a named bid manager
              description: |-
                ## Purpose
                Bids that belong to everyone belong to no one, and the classic failure is an excellent technical proposal submitted with an unsigned form of tender because each person assumed someone else had it. Naming a bid manager, an estimator, a technical lead, a commercial reviewer and a director who signs, with clear handovers between them, removes that gap before the work starts.

                ## Milestones
                1. A bid manager named with authority over the timetable and the final package.
                2. Technical, estimating, commercial and signing roles assigned to named people.
                3. Each role's deliverables and deadlines written on one page.
                4. Holiday and site commitments checked so no key person is away during the tender.

                ## Notes
                In a small firm one person may hold three roles. That is fine, as long as the commercial review is done by someone other than the person who wrote the price.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A one-page bid team chart names the bid manager, technical lead, estimator, commercial reviewer and signatory with their deliverables."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Name the bid manager for the next tender"
                - "Assign technical, estimating, commercial and signing roles"
                - "Write each role's deliverables and deadlines on one page"
                - "Check leave and site rotations for the tender period"
            - name: Compliance matrix against the instructions to tenderers
              description: |-
                ## Purpose
                Evaluators often score compliance before they read a word of the proposal, and a missing returnable schedule, a wrong page limit or an unsigned declaration can remove a bid from the evaluation entirely. A compliance matrix that lists every instruction, required form and evaluation criterion, with where and how the bid answers it, is the single best defence against disqualification.

                ## Milestones
                1. Every requirement in the instructions to tenderers and returnable schedules listed as one row.
                2. Each row given an owner, the section of the bid that answers it and a status.
                3. Page limits, fonts, file formats and naming rules captured as requirements in their own right.
                4. The matrix checked line by line against the final package before submission.
              priority: high
              deadlineOffsetDays: 10
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A compliance matrix covers every instruction and returnable form, and every row is marked complete before the bid is submitted."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Extract every instruction and returnable form into a matrix"
                - "Add page limits, file formats and naming rules as separate rows"
                - "Give each row an owner and the bid section that answers it"
                - "Review the matrix status at the end of each bid week"
            - name: Bid library of standard company documents
              description: |-
                ## Purpose
                Half the hours on a typical bid go on finding the same documents again: registration certificates, insurance certificates, the HSE policy, the quality manual, organisation charts, key staff CVs and project references. Building one controlled library, with each document's expiry date and owner, means the next bid starts with the standard returnables already done.

                ## Milestones
                1. Company registration, tax compliance and insurance certificates filed with their expiry dates.
                2. HSE, quality and environmental policies filed at their current signed revision.
                3. Key staff CVs and ten project references written in a consistent format.
                4. An index of the library with an owner for each document.
              priority: medium
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A bid library index lists every standard returnable with its current revision, expiry date and owner."
                cadence: one-shot
                effort_hours_estimate: "12"
              tasks:
                - "Gather the documents used in the last three bids into one folder"
                - "Record the expiry date of every certificate in the index"
                - "Rewrite key staff CVs in a single standard format"
                - "Write ten project references with value, scope, dates and client contact"
            - name: Tender portal registrations and opportunity alerts
              description: |-
                ## Purpose
                Public bodies, state enterprises and large operators increasingly publish tenders only on their own e-procurement portals, and a firm that is not registered never sees the enquiry. Registering on the portals of the clients you want, with alerts set for the right work categories, turns tender hunting from luck into a routine.

                ## Milestones
                1. A list of target clients and the portal or procurement unit each one uses.
                2. Company registrations completed on each portal, with logins held by two people.
                3. Alerts set for the engineering and construction categories the firm can deliver.
                4. A routine in place to check the portals and public notices twice a week.

                ## Notes
                Store portal logins in the firm's password manager, never in a shared spreadsheet, and make sure two people can get in if one is ill on closing day.
              priority: medium
              deadlineOffsetDays: 14
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "The firm is registered on every target client portal with alerts set, and portals are scanned twice a week."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "List the ten clients you most want to work for and their portals"
                - "Register the company on each portal with two named users"
                - "Set alerts for the work categories the firm can deliver"
                - "Scan the portals and public notices for new tenders @recurring(weekly:mon,thu)"
            - name: Cost of bidding budget and bid hours record
              description: |-
                ## Purpose
                Bidding is not free: a mid-sized lump sum bid can absorb several hundred hours of engineering and estimating time, plus site visits, printing and supplier design work. Setting a bid budget at the go decision and recording hours against it shows which kinds of tender pay back their bid cost and which should be declined next time.

                ## Milestones
                1. A bid budget in hours and expenses set when the go decision is taken.
                2. A bid cost code or timesheet line opened for each live tender.
                3. Actual bid hours compared with the budget at submission.
                4. Bid cost as a share of awarded value calculated for the year.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every live tender has a bid budget and an hours record, and bid cost against awarded value is calculated at year end."
                cadence: rolling
              tasks:
                - "Open a bid cost code for the next tender"
                - "Set a bid budget in hours at the go decision"
                - "Record bid hours against each live tender @recurring(weekly:fri)"
                - "Compare actual bid hours with the budget at submission"
            - name: Confidentiality, conflict and anti-collusion checks
              description: |-
                ## Purpose
                Before a firm starts work on a tender it needs to know whether it signed a non-disclosure agreement for the documents, whether any of its people helped the client write the scope, and whether a partner or supplier is also bidding against it. These checks protect the firm from disqualification and protect engineers from ethical breaches that follow them for a career.

                ## Milestones
                1. Any confidentiality undertaking for the tender documents signed and filed.
                2. Every bid team member asked to declare prior involvement with the client's scope.
                3. Suppliers and partners asked whether they are supporting competing bidders.
                4. A signed certificate of independent bid determination ready if the client requires one.

                ## Notes
                Never discuss prices, margins or bid intentions with a competitor. If a competitor raises it, stop the conversation and tell your director the same day.
              priority: medium
              deadlineOffsetDays: 14
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "Confidentiality, conflict and independence declarations for the current tender are signed and filed before pricing starts."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Check whether the tender documents carry a confidentiality undertaking"
                - "Ask each bid team member to declare prior work on this scope"
                - "Confirm in writing that key suppliers are not tied to a competitor"
                - "File the signed declarations with the tender register"
            - name: Weekly bid pipeline meeting
              description: |-
                ## Purpose
                Small and mid-sized firms often find out on a Thursday that three tenders close the following week and only one estimator is free. A short weekly meeting covering expected enquiries, live bids, decisions due and resources gives directors time to decline, extend or staff a bid before it becomes a crisis.

                ## Milestones
                1. A pipeline list of expected, live and submitted bids with value, closing date and owner.
                2. A fixed thirty-minute weekly slot with the bid manager, estimator and a director.
                3. Resource clashes flagged at least two weeks before the affected closing dates.
                4. Go or no-go decisions recorded in the pipeline with the score and the date.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A pipeline list is reviewed every week and each live bid shows its owner, closing date and go or no-go record."
                cadence: rolling
              tasks:
                - "Build a pipeline list of expected, live and submitted bids"
                - "Hold the thirty-minute bid pipeline meeting @recurring(weekly:tue)"
                - "Record each go or no-go decision with its score"
                - "Flag estimator clashes two weeks ahead of closing dates"
            - name: Clarification and technical query log
              description: |-
                ## Purpose
                Questions to the client during the tender period are the cheapest risk control a bidder has, but only if they are asked before the cut-off, worded clearly and tracked to an answer. A single log of every query, who raised it, when it was sent and how the client replied keeps the team from pricing on guesses and gives the contract team a record if a dispute arises later.

                ## Milestones
                1. One log for every clarification and technical query, with a unique number for each.
                2. Each query linked to the tender document and clause it concerns.
                3. Replies and addenda that answer queries cross-referenced in the log.
                4. Unanswered queries at the cut-off turned into stated assumptions in the bid.

                ## Notes
                Clients usually share questions and answers with all bidders. Ask what you need to price, but think twice before a question that reveals your technical approach.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every query raised during the tender has a log number, a document reference and either an answer or a matching assumption in the bid."
                cadence: rolling
              tasks:
                - "Set up a numbered clarification log for the current tender"
                - "Link each query to the document and clause it concerns"
                - "Chase unanswered clarifications with the client @recurring(weekly:wed)"
                - "Turn unanswered queries into written bid assumptions at the cut-off"
            - name: Addenda and tender bulletin control
              description: |-
                ## Purpose
                Addenda change drawings, quantities, dates and sometimes the contract itself, and a bid priced on superseded drawings can be both non-compliant and loss-making. Controlling every addendum, acknowledging it on the form of tender and pushing each change to the estimator, suppliers and technical writers keeps the whole package on the current revision.

                ## Milestones
                1. Every addendum logged with its number, date and the documents it changes.
                2. The tender document register updated to the new revisions after each addendum.
                3. Suppliers and subcontractors sent each relevant addendum with a request to confirm their price.
                4. All addenda acknowledged on the form of tender in the final package.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: artifact
                success_criteria: "The final bid acknowledges every addendum issued, and the register shows each changed document at its latest revision."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Log the first addendum and list the documents it changes"
                - "Update the tender register to the new document revisions"
                - "Send relevant addenda to suppliers and ask them to confirm prices"
                - "Check the form of tender acknowledges every addendum by number"
            - name: Supplier and subcontractor enquiry tracker
              description: |-
                ## Purpose
                Supplier quotes for equipment, bulk materials and specialist subcontracts are often the largest part of a bid price and the last to arrive. Tracking each enquiry package, the date sent, the promised return date and whether the quote is technically and commercially aligned with the tender stops the estimator plugging gaps with old prices on the final night.

                ## Milestones
                1. An enquiry list covering every major equipment, material and subcontract package.
                2. Each package sent with the relevant specification, scope and the tender's key commercial terms.
                3. At least two quotes received for each major package, or the gap recorded as a risk.
                4. Every quote levelled against the tender scope before it enters the price.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every major package in the current bid has a tracked enquiry and at least two levelled quotes, or a recorded risk where it does not."
                cadence: rolling
              tasks:
                - "List every equipment, material and subcontract package to quote"
                - "Send enquiry packages with specification and commercial terms"
                - "Chase outstanding supplier and subcontractor quotes @recurring(weekly:thu)"
                - "Level each quote against the tender scope before pricing"
            - name: Prequalification documents refresh cycle
              description: |-
                ## Purpose
                Insurance certificates, tax compliance letters, safety statistics, financial statements and accreditations all expire or go stale, and clients increasingly reject prequalification submissions with a single out-of-date certificate. A quarterly refresh of the standard prequalification pack, with monthly expiry checks, means the firm can answer a short-notice questionnaire in days rather than weeks.

                ## Milestones
                1. A prequalification pack with financial, HSE, quality and legal sections, each at its current revision.
                2. Every document's expiry date held in one list with a renewal owner.
                3. Safety statistics and turnover figures updated to the latest complete period.
                4. No expired certificate in the pack at any quarterly check.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "The prequalification pack has had a quarterly refresh and contains no expired certificate at the last check."
                cadence: cyclic
              tasks:
                - "Assemble the current prequalification pack in one folder"
                - "Check insurance and tax certificate expiry dates @recurring(monthly:12)"
                - "Refresh safety statistics and turnover figures in the pack @recurring(quarterly)"
                - "Name a renewal owner for every expiring document"
            - name: Win and loss register with hit rate
              description: |-
                ## Purpose
                Without a record of every bid, its value, competitors, price position and result, a firm cannot tell whether it is losing on price, on technical score or by bidding for the wrong clients. A monthly win and loss register, with a hit rate by client and type of work each quarter, gives directors facts for the go or no-go scorecard and the business plan.

                ## Milestones
                1. Every bid of the last two years entered with value, client, work type and result.
                2. Reasons for each loss recorded from debriefs or award notices where known.
                3. Hit rate by number and by value calculated for each client and work type.
                4. One change to the go or no-go criteria agreed from the findings.

                ## Notes
                Start from the **Metrics log** template.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A register lists every bid for two years with results, and hit rates by client and work type are calculated each quarter."
                cadence: rolling
              tasks:
                - "Enter the last two years of bids with value and result"
                - "Record the reason for each loss where it is known"
                - "Update the register with new submissions and results @recurring(monthly:20)"
                - "Calculate hit rate by client and work type @recurring(quarterly)"
            - name: Case studies and staff CVs kept current
              description: |-
                ## Purpose
                Case studies written from memory at bid time are vague, and evaluators score evidence: values, dates, safety records, client names and what went well. Writing a short case study as each project completes, and refreshing key staff CVs each quarter, gives the technical proposal material that scores without a rush.

                ## Milestones
                1. A standard one-page case study format with scope, value, dates, outcomes and a client reference.
                2. Case studies written for every project completed in the last three years.
                3. Key staff CVs updated each quarter with recent roles and qualifications.
                4. Client permission recorded for every case study that names the client.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every project completed in the last three years has a one-page case study, and key staff CVs are no more than three months old."
                cadence: rolling
              tasks:
                - "Draft a one-page case study format the team will reuse"
                - "Write a case study for the latest completed project @recurring(monthly:25)"
                - "Refresh key staff CVs with recent roles @recurring(quarterly)"
                - "Ask each named client for permission to use their reference"
            - name: Labour, plant and overhead rate book
              description: |-
                ## Purpose
                Labour and plant rates copied from the last bid carry last year's wage settlements, fuel prices and overhead recovery, and they can be wrong by enough to wipe out a margin. A rate book that builds each all-in rate from basic pay, statutory costs, allowances, overheads and productivity, reviewed every quarter, gives every estimator the same defensible starting point.

                ## Milestones
                1. All-in rates built up for each labour grade from pay, statutory costs and allowances.
                2. Plant rates built from ownership or hire cost, fuel, maintenance and operator.
                3. Site and head office overhead recovery stated as a clear percentage or lump sum.
                4. The rate book dated, approved by a director and used in the next bid.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: artifact
                success_criteria: "A dated rate book with built-up labour, plant and overhead rates is approved by a director and reviewed every quarter."
                cadence: cyclic
              tasks:
                - "Collect current pay scales, statutory costs and allowances"
                - "Build all-in rates for each labour grade and plant item"
                - "Review the rate book against current pay and fuel prices @recurring(quarterly)"
                - "Compare the rate book with the rates in the latest won bid @recurring(yearly)"
            - name: Bid lessons log after every submission
              description: |-
                ## Purpose
                Lost bids and painful submissions repeat their mistakes when the lessons live only in people's heads. Holding a thirty-minute review within a week of each submission, and again when the result comes in, and logging the actions with owners, makes each bid a little better than the last.

                ## Milestones
                1. A lessons log with date, bid, what happened, cause and action for each entry.
                2. A review held within a week of every submission.
                3. Each action given an owner and closed within the quarter.
                4. The log read at the kick-off of every new bid.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every submission has a lessons review within a week, and lessons actions are closed or reassigned each month."
                cadence: rolling
              tasks:
                - "Set up a lessons log with date, bid, cause and action columns"
                - "Hold a thirty-minute review within a week of the next submission"
                - "Review open lessons actions with their owners @recurring(monthly:15)"
                - "Read the lessons log aloud at the next bid kick-off"
            - name: Reading conditions of contract for bid risk
              description: |-
                ## Purpose
                Conditions of contract decide who pays when ground conditions, design errors, delays or price rises happen, and engineers who price only the scope miss the clauses that carry the real money. Learning to read the standard families, such as FIDIC and NEC, and the client's amendments to them, for liability caps, liquidated damages, payment, variations, design responsibility and termination makes every bid's risk visible.

                ## Milestones
                1. The structure of at least one standard contract family read and summarised.
                2. A checklist of twelve high-risk clauses to look for in any contract.
                3. The client's amendments in the current tender compared against the standard form.
                4. High-risk clauses referred to a contracts specialist or lawyer for advice before pricing.

                ## Notes
                This is about spotting and recording risk, not interpreting the law. Contract advice belongs to a qualified contracts professional or lawyer.
              priority: high
              deadlineOffsetDays: 45
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A twelve-clause risk checklist exists and has been applied to the current tender, with high-risk clauses referred for advice."
                cadence: phased
                effort_hours_estimate: "16"
              tasks:
                - "Read the summary guide for the standard contract family your clients use"
                - "Write a checklist of twelve high-risk clauses to check"
                - "Mark where the current tender amends the standard form"
                - "Send the high-risk clauses to a contracts specialist for review"
            - name: Technical proposals that answer the evaluation criteria
              description: |-
                ## Purpose
                Technical proposals lose marks not because the firm is weak but because the writing describes the company when the evaluator wanted the method, the people and the evidence for each criterion. Learning to structure every section around the published criteria and weightings, with headings that mirror them and proof in every paragraph, is the fastest way to raise technical scores.

                ## Milestones
                1. A proposal outline whose headings mirror the client's evaluation criteria in order.
                2. Word or page budgets set in proportion to each criterion's weighting.
                3. Each section carrying at least one specific piece of evidence: a number, a project or a named person.
                4. A past losing proposal rewritten in this structure and compared with the original.
              priority: medium
              deadlineOffsetDays: 60
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A past proposal has been rewritten with headings mirroring the evaluation criteria and page budgets set by weighting."
                cadence: phased
                effort_hours_estimate: "14"
              tasks:
                - "Pull the evaluation criteria and weightings from a recent tender"
                - "Draft a proposal outline that mirrors those criteria in order"
                - "Set page budgets in proportion to each weighting"
                - "Rewrite one section of a lost proposal using the new outline"
            - name: Method statements written for the evaluator
              description: |-
                ## Purpose
                Method statements in a bid have two readers: the evaluator who must believe you can build it safely, and your own site team who will be held to it after award. Writing them step by step, with sequence, resources, plant, hold points, hazards and controls specific to this site, scores better and makes the post-award execution plan half done.

                ## Milestones
                1. A standard method statement layout covering sequence, resources, plant, hazards and hold points.
                2. Method statements for the three highest-risk activities in the current tender.
                3. Each method statement reviewed by someone who has done the work on site.
                4. Site-specific constraints from the site visit written into each method.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: artifact
                success_criteria: "Method statements for the three highest-risk activities are written to a standard layout and reviewed by an experienced site person."
                cadence: phased
                effort_hours_estimate: "12"
              tasks:
                - "Pick the three highest-risk activities in the current scope"
                - "Draft a method statement layout with sequence, hazards and hold points"
                - "Write the first method statement using notes from the site visit"
                - "Ask an experienced supervisor to review it for realism"
            - name: Tender programme with a defensible critical path
              description: |-
                ## Purpose
                Clients read the tender programme to judge whether the bidder understands the work, and a bar chart with no logic or float tells them it does not. Learning to build a logic-linked tender programme, with procurement lead times, access constraints, approvals and testing on the critical path, also gives the estimator the duration that drives time-related costs.

                ## Milestones
                1. A logic-linked programme with every activity tied to a predecessor and successor.
                2. Long-lead procurement and client approval periods shown as activities.
                3. The critical path identified and checked against the client's key dates.
                4. Programme duration passed to the estimator for preliminaries and time-related costs.

                ## Notes
                Keep the tender programme at a level the client can read on one or two pages. The detailed schedule comes after award.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: artifact
                success_criteria: "A logic-linked tender programme shows the critical path and long-lead items, and its duration matches the preliminaries in the price."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "List the main activities and milestones from the scope of work"
                - "Add supplier lead times and client approval periods as activities"
                - "Link every activity and read off the critical path"
                - "Give the programme duration to the estimator for time-related costs"
            - name: How clients evaluate engineering tenders
              description: |-
                ## Purpose
                Knowing whether a tender is judged on lowest compliant price, a quality and cost ratio, two envelopes opened in sequence or a pass and fail technical gate changes where the bid team should spend its hours. Studying the evaluation methods your target clients use, and how they normalise prices and score technical answers, stops the firm polishing sections that carry no marks.

                ## Milestones
                1. The main evaluation methods summarised on one page with how each scores price and quality.
                2. The method used by each target client identified from past tenders or procurement rules.
                3. A worked example showing how a price difference converts into evaluation points.
                4. The current tender's evaluation method written at the top of the bid plan.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A one-page evaluation methods summary exists with a worked scoring example, and each target client's method is recorded."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Read the evaluation section of the last three tenders received"
                - "Summarise the main evaluation methods on one page"
                - "Work an example of how a five percent price gap converts to points"
                - "Record each target client's usual evaluation method"
            - name: Writing assumptions, exclusions and qualifications
              description: |-
                ## Purpose
                Qualifications protect the bidder, but too many of them, or any that contradict a mandatory requirement, can make a bid non-compliant and send it straight to the reject pile. Learning to separate clarifications the client can answer, assumptions that define the price basis and genuine qualifications, and to keep the last list short and specific, protects both the margin and the bid.

                ## Milestones
                1. A rule set for when to use a clarification, an assumption, an exclusion or a qualification.
                2. Every assumption in the current bid written as a single precise sentence tied to a document reference.
                3. Qualifications reviewed against the instructions to tenderers for anything that breaches a mandatory term.
                4. The final list of qualifications cut to those the firm would genuinely walk away over.

                ## Notes
                Vague exclusions such as "all works not specifically mentioned" annoy evaluators and rarely survive a dispute. Name the item and the document.
              priority: high
              frontmatter:
                mode: learning
                output_kind: artifact
                success_criteria: "The current bid's assumptions and qualifications each tie to a document reference, and none breaches a mandatory requirement."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Write a one-page rule set for clarifications, assumptions and qualifications"
                - "Rewrite each assumption in the current bid as one precise sentence"
                - "Check every qualification against the mandatory tender terms"
                - "Cut qualifications to those the firm would walk away over"
            - name: Pricing a bill of quantities or schedule of rates
              description: |-
                ## Purpose
                Priced schedules are checked arithmetically and read for patterns, and errors such as a missed item, a rate in the wrong unit or a lump sum where a rate was asked can cost the bid or the profit. Learning to price each line from a build-up, check quantities against drawings and spread preliminaries in line with the client's rules makes the priced schedule something the firm can live with after award.

                ## Milestones
                1. Every line in the priced schedule traced to a rate build-up or a supplier quote.
                2. Quantities sampled against the drawings, with major differences raised as clarifications.
                3. Preliminaries and general items priced according to the tender's method of measurement.
                4. An arithmetic check of extensions and totals by someone other than the estimator.

                ## Notes
                Front-loading rates to improve early cash flow is spotted by experienced evaluators and can be grounds for rejection. Price each item at its true cost and margin.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: artifact
                success_criteria: "Every priced line traces to a build-up or quote, and an independent arithmetic check of the schedule finds no errors."
                cadence: one-shot
                effort_hours_estimate: "10"
              tasks:
                - "Read the method of measurement named in the tender"
                - "Link each priced line to a rate build-up or supplier quote"
                - "Sample ten quantities against the drawings"
                - "Ask a second person to check every extension and total"
            - name: Priced risk and opportunity register for the bid
              description: |-
                ## Purpose
                Risks noticed during a tender are usually discussed, worried about and then left out of the price, or covered by a single round contingency nobody can explain. A bid risk register that gives each risk a probability, a cost range and a decision (price it, qualify it, insure it or accept it) turns contingency into a number the directors can defend at settlement.

                ## Milestones
                1. A register of technical, commercial, site and contract risks for the current bid.
                2. Each risk given a probability, a cost range and a treatment decision.
                3. Opportunities recorded with the same rigour, including any savings the firm will keep.
                4. The total priced risk carried into the settlement summary as a separate line.

                ## Notes
                Start from the **Risk register** template.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "Every identified bid risk has a probability, cost range and treatment, and priced risk appears as its own line at settlement."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Run a one-hour risk workshop with the technical and commercial leads"
                - "Give each risk a probability, cost range and treatment"
                - "Record opportunities and their likely value"
                - "Carry the total priced risk into the settlement summary"
            - name: Price settlement and margin decision meeting
              description: |-
                ## Purpose
                Settling the final tender price is a director's decision, and it should be taken on a clear summary of cost, risk, overheads, margin, competition and cash flow rather than a single number read off the bottom of a spreadsheet. A structured settlement meeting, held a day or two before closing, records why the price was set and who approved it, which is what the firm learns from when the result comes in.

                ## Milestones
                1. A one-page settlement summary showing direct cost, indirects, priced risk, overheads and margin.
                2. Any commercial adjustment explained in writing with the reason for it.
                3. The final price and margin approved by the authorised director and minuted.
                4. The settled figures locked so the priced schedules and form of tender match.
              priority: high
              frontmatter:
                mode: event
                output_kind: decision
                success_criteria: "A minuted settlement meeting approves the final price on a one-page summary, and the submitted forms match the settled figures."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Book the settlement meeting two days before the closing date"
                - "Prepare the one-page settlement summary from the estimate"
                - "Minute the approved price, margin and reasons for any adjustment"
                - "Check the priced schedules and form of tender match the settled price"
            - name: Bid alone, subcontract or join with a partner
              description: |-
                ## Purpose
                Some tenders ask for capability the firm does not fully hold: a discipline, a licence, a balance sheet size or a track record. Deciding early whether to bid as prime with subcontractors, join as a subcontractor to someone else or form a consortium, and putting a short teaming agreement in place, avoids the last-minute scramble that weakens so many joint bids.

                ## Milestones
                1. The tender's capability, financial and experience requirements compared with the firm's own.
                2. Gaps listed with the options for filling each one.
                3. A decision on the bidding structure recorded with the reasons.
                4. A teaming or exclusivity agreement signed with any partner, reviewed by a lawyer.

                ## Notes
                Agree in writing how work, price and liability will be split before sharing any pricing with a partner.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "The bidding structure for the tender is decided in writing, and any partner relationship is covered by a signed teaming agreement."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Compare the tender's capability requirements with the firm's own"
                - "List each gap and the options for filling it"
                - "Record the bidding structure decision with reasons"
                - "Send the draft teaming agreement to a lawyer for review"
            - name: Bid bonds, performance bonds and insurance requirements
              description: |-
                ## Purpose
                Bonds and insurances asked for in a tender can take weeks to arrange through a bank or surety, and a missing bid bond normally means automatic rejection. Reading the security and insurance requirements on day one, confirming the firm's bonding headroom and getting the insurer's view on unusual covers prevents a compliant bid failing on paperwork.

                ## Milestones
                1. Bid bond, performance bond, advance payment guarantee and retention bond requirements listed.
                2. The bank or surety's lead time and cost for each instrument confirmed.
                3. Required insurances compared with current policies and any gaps quoted by the broker.
                4. Bond wording checked against the client's required form before issue.

                ## Notes
                Ask your bank or surety how much of the firm's bonding facility is already used. A large performance bond on one contract can block the next two bids.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "Every bond and insurance required by the tender is either in hand or confirmed by the bank, surety or broker before the closing date."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "List every bond and insurance the tender requires"
                - "Ask the bank or surety for lead times and fees"
                - "Send the insurance requirements to the broker for a gap check"
                - "Check bonding facility headroom with the bank @recurring(quarterly)"
            - name: Contract cash flow profile before pricing
              description: |-
                ## Purpose
                Payment terms, retention, milestone payments and the absence of an advance payment can leave a small contractor funding the client's project for months, and many profitable contracts have broken the firms that won them. Drawing the cash flow curve from the tender programme and payment terms shows the peak funding need and whether the firm can carry it.

                ## Milestones
                1. Payment terms, retention, advance payment and milestone rules extracted from the contract.
                2. A monthly cost and income curve drawn from the tender programme.
                3. The peak negative cash position and its month identified.
                4. A decision recorded on financing, pricing for finance cost or qualifying the payment terms.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A monthly cash flow curve shows the peak funding need, and the treatment of that need is recorded before price settlement."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Extract payment terms and retention rules from the contract"
                - "Spread cost and income by month from the tender programme"
                - "Mark the peak negative cash position and when it falls"
                - "Decide with the finance lead how the peak will be funded"
            - name: Alternative or value-engineered offer
              description: |-
                ## Purpose
                Experienced contractors often see a cheaper, faster or safer way to deliver the client's need, but an alternative submitted instead of a compliant bid is usually rejected. Checking whether the tender permits alternatives, pricing the compliant offer first and presenting the alternative separately with its savings and risks gives the client a real choice without risking disqualification.

                ## Milestones
                1. The tender's rules on alternatives and variant bids confirmed in writing.
                2. The compliant base bid completed and priced on its own.
                3. The alternative described with drawings, savings, programme effect and any risks to the client.
                4. Both offers submitted in the form the instructions require.
              priority: low
              frontmatter:
                mode: research
                output_kind: deliverable
                success_criteria: "A compliant base bid and a separately priced alternative, with its savings and risks stated, are submitted where the tender permits."
                cadence: one-shot
                effort_hours_estimate: "10"
              tasks:
                - "Check whether the tender allows alternative or variant bids"
                - "Finish and price the compliant base bid first"
                - "Write up the alternative with savings and programme effect"
                - "Raise a clarification if the rules on alternatives are unclear"
            - name: Bid pricing workbook with locked formulas and checks
              description: |-
                ## Purpose
                Spreadsheet errors have lost contractors entire margins: a sum that misses the last rows, a currency cell left unconverted, an overhead percentage applied twice. A standard pricing workbook with locked formulas, a version log, control totals and a check sheet that reconciles to the form of tender removes most of those errors before settlement.

                ## Milestones
                1. A standard workbook layout with separate input, calculation and summary sheets.
                2. Formulas locked, with inputs in a single colour and a version log on the first sheet.
                3. A check sheet reconciling the summary to the priced schedules and the form of tender.
                4. The workbook used on one live bid and the check sheet passed before settlement.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "The firm's standard pricing workbook has locked formulas, a version log and a reconciliation check sheet, and has been used on a live bid."
                cadence: one-shot
                effort_hours_estimate: "12"
              tasks:
                - "Copy the last bid workbook and separate inputs from calculations"
                - "Lock formula cells and add a version log sheet"
                - "Build a check sheet that reconciles to the form of tender"
                - "Use the workbook on the next live bid"
            - name: Site visit and pre-bid meeting
              description: |-
                ## Purpose
                Site visits and pre-bid meetings are often mandatory, and the bidder who walks the site with a checklist sees access limits, ground conditions, existing services and interfaces that never made it into the drawings. Going prepared with questions, a camera and the right people, then logging what was seen and said, feeds directly into the method, the programme and the risk register.

                ## Milestones
                1. Attendance registered and the attendees booked, including any site induction requirements.
                2. A site checklist covering access, laydown, utilities, ground, existing plant and working hours.
                3. Photos and notes filed against the checklist within a day of the visit.
                4. Questions arising raised formally as clarifications before the cut-off.

                ## Notes
                Start from the **Meeting notes** template. Verbal answers at a site visit are not binding unless the client confirms them in writing, so log them and ask again formally.
              priority: medium
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A completed site checklist with photos is filed within a day of the visit, and every open question is raised as a formal clarification."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Register attendance and check the site induction and PPE requirements"
                - "Prepare a site checklist and a list of questions"
                - "File photos and notes against the checklist within a day"
                - "Raise questions from the visit as formal clarifications"
            - name: Red team review of the draft proposal
              description: |-
                ## Purpose
                Fresh readers find what the writers cannot: the criterion that was never answered, the section that contradicts the programme, the claim with no evidence. A red team review, held on a complete draft at least four days before closing and scored as the evaluator would score it, gives time to fix the weak sections rather than just noticing them.

                ## Milestones
                1. Two or three reviewers chosen who did not write the proposal.
                2. Reviewers briefed with the evaluation criteria and weightings, not the bid team's view.
                3. A score and written comments for each section against the criteria.
                4. Every comment answered or closed by the bid manager before final production.
              priority: medium
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A red team scores the complete draft against the published criteria at least four days before closing, and every comment is closed."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Choose two or three reviewers who did not write the proposal"
                - "Send them the draft with the evaluation criteria and weightings"
                - "Collect section scores and comments in one sheet"
                - "Close every red team comment before final production"
            - name: Submission day checklist and upload
              description: |-
                ## Purpose
                Submission is where months of work can be lost to a file over the size limit, a password-protected price that the portal rejects, a missing signature or a courier stuck in traffic. A submission checklist run against the compliance matrix, with the upload or delivery done well before closing and proof of receipt saved, is the last control between the bid and the evaluator.

                ## Milestones
                1. Signed form of tender, priced schedules and all returnables checked against the compliance matrix.
                2. File names, sizes and formats checked against the portal rules or hard copy instructions.
                3. The bid uploaded or delivered at least four hours before the closing time.
                4. The portal receipt or signed delivery note saved in the tender register.

                ## Notes
                Start from the **Operational checklist** template. Keep the final submitted set as a locked archive: it is the reference for every clarification and negotiation that follows.
              priority: high
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "The bid is submitted at least four hours before closing, and the receipt and a locked archive of the submitted set are saved."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Run the final package against the compliance matrix"
                - "Check file names, sizes and formats against the portal rules"
                - "Upload or deliver the bid at least four hours before closing"
                - "Save the receipt and a locked archive of the submitted set"
            - name: Tender interview and technical presentation
              description: |-
                ## Purpose
                Shortlisted bidders are often invited to present their approach and answer questions, and clients use the session to meet the people who will actually run the job. Preparing the proposed project manager and leads to present a clear story, rehearse hard questions and stay consistent with the written bid can move a close evaluation.

                ## Milestones
                1. The proposed project manager and technical leads confirmed as the presenting team.
                2. A short presentation built around the client's main concerns and the evaluation criteria.
                3. Two rehearsals held, one with a colleague playing a sceptical client panel.
                4. Answers to likely questions checked against the written bid for consistency.
              priority: medium
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "The presenting team has rehearsed twice against a mock panel, and every planned answer is consistent with the written bid."
                cadence: one-shot
                effort_hours_estimate: "10"
              tasks:
                - "Confirm who will present and that they are the proposed delivery team"
                - "Build a short presentation around the client's main concerns"
                - "List the ten hardest questions the panel could ask"
                - "Hold two rehearsals with a colleague playing the panel"
            - name: Post-tender clarifications and best and final offer
              description: |-
                ## Purpose
                After submission, clients often send clarification questions, ask bidders to remove qualifications or invite a best and final offer, and each reply can quietly give away margin or accept risk the firm priced out. Answering through the bid manager, against the submitted set, with every concession costed and approved, keeps the deal the firm intended.

                ## Milestones
                1. Every post-tender question logged and answered through the bid manager only.
                2. Each answer checked against the submitted bid so nothing contradicts it.
                3. Any concession or withdrawn qualification costed and approved by a director.
                4. A final offer letter that states the full basis of the price.
              priority: medium
              frontmatter:
                mode: event
                output_kind: deliverable
                success_criteria: "Every post-tender answer is logged, consistent with the submitted bid, and every concession is costed and approved before it is sent."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Log each post-tender question as it arrives"
                - "Check each draft answer against the submitted bid"
                - "Cost any requested concession before replying"
                - "Get director approval for the best and final offer letter"
            - name: Award, contract signature and handover to delivery
              description: |-
                ## Purpose
                Winning starts the most expensive mistakes: a contract signed with clauses that changed since the bid, a delivery team that never saw the assumptions, a programme that ignores what the estimate allowed. A formal handover meeting from the bid team to the project team, with the settlement summary, risk register, assumptions and supplier quotes, carries the bid's thinking into the job.

                ## Milestones
                1. The contract offered for signature compared with the submitted bid and agreed clarifications.
                2. Differences resolved or accepted in writing before signature.
                3. A handover pack with estimate, risks, assumptions, programme and supplier quotes issued.
                4. A handover meeting held with the project manager and site lead within two weeks of award.
              priority: medium
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "The contract is compared with the bid before signing, and a handover pack and meeting are completed within two weeks of award."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Compare the contract offered with the submitted bid line by line"
                - "Agree any differences in writing before signature"
                - "Assemble the handover pack for the project team"
                - "Book the bid to project handover meeting"
            - name: Client debrief after a lost tender
              description: |-
                ## Purpose
                Debriefs are the cheapest market research a contractor can get, yet many firms never ask. Requesting a debrief soon after the award, asking specific questions on technical score, price position and what the winner did better, and logging the answers, tells the firm whether to change its approach or simply its price.

                ## Milestones
                1. A debrief requested in writing within a week of the award notice.
                2. Five specific questions prepared on scores, price position and evaluator comments.
                3. The debrief notes filed in the win and loss register.
                4. One action from the debrief added to the lessons log.
              priority: low
              frontmatter:
                mode: event
                output_kind: knowledge
                success_criteria: "A debrief is requested within a week of the award notice, and its notes and one action are recorded in the registers."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Email the client to request a debrief on the last lost tender"
                - "Prepare five questions on scores and price position"
                - "File the debrief notes in the win and loss register"
                - "Add one debrief action to the lessons log"
            - name: First tender for a small engineering firm
              description: |-
                ## Purpose
                First-time bidders from small firms usually underestimate the paperwork, not the engineering, and lose on a missing certificate or a vague method. Choosing a modest, well-matched first tender, building the standard returnables once and working through a full compliant submission, even if it does not win, gives the firm a template for every bid after it.

                ## Milestones
                1. A first tender chosen that matches the firm's size, skills and cash position.
                2. Company registration, tax, insurance and safety documents in place for the returnables.
                3. A complete compliant bid submitted on time with a priced schedule and method.
                4. A debrief requested and the lessons written up as the firm's first bid procedure.

                ## Notes
                A smaller contract as a subcontractor to an established firm is often a better first step than bidding as prime for a large one.
              priority: medium
              deadlineOffsetDays: 90
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "The firm submits a complete compliant first bid on time and writes a short bid procedure from the experience."
                cadence: phased
                effort_hours_estimate: "40"
              tasks:
                - "Pick one modest tender the firm could deliver comfortably"
                - "List the returnables you do not yet hold and how to get each"
                - "Submit the complete bid before the reserve day ends"
                - "Write a two-page bid procedure from what you learned"
            - name: Engineer moving into a proposals role
              description: |-
                ## Purpose
                Engineers who move into bid or proposals roles bring technical credibility but often lack the commercial, writing and deadline skills the job demands. A six-month development plan covering contract reading, estimating basics, proposal writing and running a bid under supervision builds a competent bid engineer rather than a tired one.

                ## Milestones
                1. A development plan with targets for contracts, pricing, writing and bid management.
                2. Three bids supported under an experienced bid manager.
                3. One bid of modest size managed end to end with a mentor's review.
                4. A competence record signed off by the bid manager at six months.

                ## Notes
                Start from the **Development plan** template.
              priority: low
              deadlineOffsetDays: 180
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "The engineer has supported three bids, managed one end to end and has a competence record signed off within six months."
                cadence: phased
                effort_hours_estimate: "60"
              tasks:
                - "Ask an experienced bid manager to act as your mentor"
                - "Draft a six-month development plan with four skill targets"
                - "Shadow the commercial review on the next live bid"
                - "Request sign-off of your competence record at six months"
            - name: Owner-manager bidding without a bid team
              description: |-
                ## Purpose
                Owner-managers of small contracting and consultancy firms often write, price and submit bids in the evenings while running live jobs by day. A lean bidding routine, with protected writing time, a reusable bid library, a trusted reviewer and a hard rule on which tenders to decline, keeps bidding from eating the business it is meant to grow.

                ## Milestones
                1. A fixed weekly block of protected time for bid work.
                2. A short list of tender types the firm will always decline.
                3. A trusted external reviewer, such as a former colleague, agreed for final price and compliance checks.
                4. Two bids submitted using the routine and the time spent on each recorded.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "The owner has a weekly bid block, a written decline list and an external reviewer, and has submitted two bids with the routine."
                cadence: phased
                effort_hours_estimate: "20"
              tasks:
                - "Write down three types of tender you will always decline"
                - "Block a protected bid writing session in the diary @recurring(weekly:sat)"
                - "Ask a former colleague to review your next price and compliance"
                - "Record the hours spent on each of the next two bids"
            - name: Public sector tender for a small consultancy
              description: |-
                ## Purpose
                Government ministries, municipal bodies and state enterprises follow procurement rules that are often stricter than private clients': mandatory registration, tax and statutory clearances, prescribed forms, sealed bid openings and strict non-negotiation periods. Learning one public body's procurement rules and submitting a compliant bid gives a small consultancy access to work that is published openly and paid reliably.

                ## Milestones
                1. The procurement rules and standard bidding documents for the chosen public body read.
                2. Supplier registration and the statutory clearance certificates obtained.
                3. A compliant bid submitted using the prescribed forms and envelopes.
                4. The public bid opening attended or its record of prices obtained.

                ## Notes
                Public procurement laws and thresholds differ by country. Read the current law or the procurement regulator's guidance in your jurisdiction rather than relying on another bidder's account.
              priority: medium
              deadlineOffsetDays: 60
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "The consultancy is registered with the public body, holds the required clearances and has submitted one compliant public tender."
                cadence: phased
                effort_hours_estimate: "30"
              tasks:
                - "Download the public body's procurement rules and standard forms"
                - "Apply for supplier registration and statutory clearances"
                - "Prepare the bid in the prescribed forms and envelopes"
                - "Attend the public bid opening and note the prices read out"
            - name: Fee proposal for engineering consultancy services
              description: |-
                ## Purpose
                Consultancy fee proposals are priced in hours by discipline and grade, not in materials and plant, and the usual loss comes from underestimating drawing counts, reviews, site visits and meetings. Building the fee from a deliverables list with hours per deliverable, then checking it against past jobs, gives a fee that is both competitive and recoverable.

                ## Milestones
                1. A deliverables list covering reports, calculations, drawings, reviews and site visits.
                2. Hours estimated for each deliverable by discipline and grade.
                3. The total compared with hours spent on two similar past jobs.
                4. Expenses, disbursements and the basis for extra work stated in the proposal.
              priority: medium
              frontmatter:
                mode: service
                output_kind: deliverable
                success_criteria: "The fee proposal is built from a deliverables list with hours by grade, checked against two past jobs, and states the basis for extra work."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "List every deliverable in the client's terms of reference"
                - "Estimate hours for each deliverable by discipline and grade"
                - "Compare the total with two similar past jobs"
                - "State the hourly rates for extra work in the proposal"
            - name: Framework agreement tender and call-off pricing
              description: |-
                ## Purpose
                Frameworks and term contracts appoint a few firms for several years and then award work through call-offs, so the tender is really about rates, capability and responsiveness over the whole term. Pricing a schedule of rates that survives inflation, explaining how call-offs will be resourced and tracking the work that actually arrives tells the firm whether the framework is worth renewing.

                ## Milestones
                1. The framework's term, call-off process and any guaranteed volume understood and recorded.
                2. A schedule of rates priced with the price adjustment or escalation terms checked.
                3. A resourcing plan showing how call-offs will be staffed at short notice.
                4. Call-offs received logged against the value expected at bid time.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "The framework rates and resourcing plan are submitted, and call-offs received are logged monthly against expected value."
                cadence: phased
                effort_hours_estimate: "20"
              tasks:
                - "Record the framework term, call-off process and any volume promise"
                - "Check the escalation terms before pricing the rates"
                - "Write a resourcing plan for short-notice call-offs"
                - "Log call-offs received under each framework @recurring(monthly:28)"
            - name: Lump sum EPC bid risk strategy
              description: |-
                ## Purpose
                Lump sum engineering, procurement and construction bids transfer design development, quantities, procurement and often ground risk to the contractor, and a modest underestimate of design growth can erase the margin. Setting a deliberate strategy for design allowances, quantity growth, supplier commitments, liability caps and contingency, agreed before the estimate is finished, keeps the price honest about what the firm is accepting.

                ## Milestones
                1. Design maturity of the tender package assessed, with allowances set for quantity growth by discipline.
                2. Supplier quote validity and price commitments aligned with the bid validity period.
                3. Liability caps, liquidated damages and performance guarantees mapped to the risk register.
                4. A written risk strategy approved by the directors before price settlement.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A written lump sum risk strategy, with growth allowances and liability mapping, is approved before price settlement."
                cadence: phased
                effort_hours_estimate: "16"
              tasks:
                - "Rate the design maturity of each discipline's tender drawings"
                - "Set quantity growth allowances by discipline"
                - "Check supplier quote validity against the bid validity period"
                - "Present the risk strategy to the directors for approval"
            - name: Price to win analysis for a strategic tender
              description: |-
                ## Purpose
                Guessing what competitors will bid is common and usually wrong, but a structured price to win estimate built from published award values, the client's budget signals and competitors' likely approaches can show whether the firm's cost base can ever win. Used carefully, it tells the team where to find savings before settlement rather than cutting margin blindly on the day.

                ## Milestones
                1. Published award values for similar contracts gathered from public sources.
                2. Likely competitors listed with their probable approach, strengths and cost position.
                3. A target price range set, with the gap to the firm's current estimate.
                4. Savings options identified to close the gap without adding unpriced risk.

                ## Notes
                Use only public and legitimately obtained information. Never seek a competitor's confidential pricing or accept it if offered.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A price to win range based on public data is recorded, with the gap to the estimate and savings options agreed before settlement."
                cadence: one-shot
                effort_hours_estimate: "10"
              tasks:
                - "Gather published award values for five similar contracts"
                - "List the likely competitors and their probable approach"
                - "Set a target price range and measure the gap to your estimate"
                - "Ask the agent to summarise savings options from the risk and estimate notes"
            - name: Market intelligence from published award notices
              description: |-
                ## Purpose
                Published award notices, public bid openings and procurement reports reveal who wins which clients and at what values, and few small firms ever collect them. A simple monthly log of awards in the firm's market builds, within a year, a picture of competitors, price levels and client buying patterns that sharpens every go or no-go decision.

                ## Milestones
                1. A list of public sources for award notices and bid opening results in the firm's market.
                2. An award log with client, winner, value, work type and date.
                3. Twelve months of awards collected and summarised by competitor and client.
                4. One finding fed into the go or no-go scorecard or the price to win method.
              priority: low
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "An award log holds twelve months of public award data summarised by competitor and client, and one finding has changed the scorecard."
                cadence: rolling
              tasks:
                - "List the public sources that publish award notices in your market"
                - "Set up an award log with client, winner, value and date"
                - "Log newly published award notices and opening prices @recurring(monthly:8)"
                - "Summarise twelve months of awards by competitor and client"
            - name: Overseas tender with currency and tax exposure
              description: |-
                ## Purpose
                Overseas tenders bring exchange rate movements, withholding taxes, local registration rules, import duties and labour permits into the price, and each can be larger than the margin. Mapping these exposures with a tax adviser and the bank before pricing, and deciding which currency each cost and payment will sit in, keeps a foreign win from becoming a foreign loss.

                ## Milestones
                1. Currencies of each major cost and of the client's payments identified.
                2. Exchange rate assumptions and any hedging options discussed with the bank.
                3. Withholding tax, local registration, duties and permit costs confirmed with a tax adviser.
                4. A schedule of overseas costs and assumptions included in the settlement summary.

                ## Notes
                Tax and exchange treatment depend on the countries involved and any tax treaties. Take advice from a qualified tax adviser in both jurisdictions before settling the price.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "Currency, tax, duty and permit exposures are confirmed with the bank and a tax adviser and appear as a schedule in the settlement summary."
                cadence: one-shot
                effort_hours_estimate: "12"
              tasks:
                - "List the currency of each major cost and client payment"
                - "Book a call with the bank about exchange rate options"
                - "Ask a tax adviser about withholding tax and local registration"
                - "Add an overseas costs schedule to the settlement summary"
            - name: Annual bid performance audit
              description: |-
                ## Purpose
                Once a year the firm should step back from individual tenders and ask whether its bidding is working: hit rate, bid cost against awarded value, margin achieved on won work against margin bid, and how often compliance failures happened. A short audit report with three changes for the coming year turns twelve months of registers into a better bid office.

                ## Milestones
                1. Hit rate, bid cost ratio and compliance failures calculated for the year.
                2. Margin bid compared with margin achieved on contracts completed in the year.
                3. Three changes to the bid process agreed with the directors.
                4. The audit report filed and its changes added to the lessons log.
              priority: medium
              frontmatter:
                mode: research
                output_kind: deliverable
                success_criteria: "A yearly audit report states hit rate, bid cost ratio and bid against achieved margin, and three agreed changes are logged."
                cadence: cyclic
              tasks:
                - "Pull the year's figures from the win and loss register"
                - "Compare margin bid with margin achieved on completed contracts"
                - "Agree three bid process changes with the directors"
                - "Run the annual bid performance audit @recurring(yearly)"
---

# Engineering Tender Bids

Tendering is where an engineering contractor or consultancy wins or loses most of its future, and where a single missed form or an unpriced clause can either disqualify a good offer or lock the firm into a loss for two years. These projects start with the foundations (the go or no-go decision, the tender read-through, the timetable, the team, the compliance matrix, the bid library, portals, bid costs and conflict checks), move through the machinery that keeps a bid office running, the core skills of contracts, proposals, method statements, programmes, evaluation and pricing, the big decisions on risk, margin, partners, bonds, cash flow and alternatives, the dated events from site visit to award, the situations of small firms, owner-managers, consultancies and engineers new to bidding, and specialist work on lump sum strategy, price to win, award intelligence, overseas bids and an annual bid audit.

The repeating rhythm is weekly during live tenders: portal scans, the pipeline meeting, clarification and supplier chases and bid hours, with monthly certificate checks, win and loss reviews, case study updates and lessons actions, quarterly rate book, prequalification and bonding reviews, and a yearly bid audit. The Risk register, Meeting notes, Operational checklist, Metrics log and Development plan templates pair with the projects that keep a standing record. Installing adds all 50 projects as active, so archive the ones that are not for you yet.
