---
id: real-estate-development.planning-permission-applications
name: Planning Permission Applications
description: "A planning application run like a project: the site's history and policy checked, pre-application advice taken, a complete submission, consultees and neighbours managed, committee prepared for, conditions discharged and appeals handled."
category: business
version: 1.0.0
tags: [real-estate-development, planning-permission-applications, founder, small-business, planning-permission, pre-application, planning-conditions, planning-appeals]
author: Aurum Technology
starter_structure:
  templates:
    - risk-register
    - operational-checklist
    - vendor
    - meeting-notes
    - compliance-control
  pillars:
    - name: Real Estate Investing & Development
      emoji: "🏢"
      description: "Property as a business: development appraisals, land, planning and construction finance, delivering schemes, syndications, commercial and multifamily acquisitions, short-let portfolios and property management companies, REIT analysis, and land development in the Caribbean, for sponsors, developers and operators rather than single-unit landlords."
      pillarFrontmatter:
        review_cadence: monthly
      areas:
        - name: Planning Permission Applications
          description: "Getting planning permission for a scheme: pre-application advice, consultants, drawings and reports, community consultation, conditions and appeals."
          projects:
            - name: Planning history and constraints search for the site
              description: |-
                ## Purpose
                Before anyone draws a line, you need to know what has already been applied for on the site, what was refused and why, and which designations sit over it: flood zones, conservation areas, listed buildings nearby, tree protection, rights of way. A two-hour search of the planning authority's online register and constraint maps often changes the scheme, the price you offer or whether you proceed at all.

                ## Milestones
                1. Every previous application on the site and its immediate neighbours listed with reference, outcome and date.
                2. The reasons for any refusal copied from the decision notice into one page.
                3. A constraints summary covering flood risk, heritage, trees, ecology, highways and contamination flags.
                4. A short note on what the history and constraints mean for the scheme you have in mind.

                ## Notes
                Search the neighbouring plots too. A refusal next door on the same grounds is the best preview of your own case officer's view.

                Before you start: this plan is general information to help you organise your own affairs. It is not legal advice. Rules differ between countries and change often, so check decisions that matter with a qualified lawyer or the official authority in the country concerned.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A written site planning history and constraints summary, with refusal reasons and designations listed, saved in the planning file."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Search the planning authority's online register for the site address and its neighbours"
                - "Download the decision notices and officer reports for any refused applications"
                - "Check the constraint maps for flood zones, heritage designations and protected trees"
                - "Write a one-page note on what the history means for your scheme"
            - name: Policy map for the scheme from the local plan
              description: |-
                ## Purpose
                Officers decide applications against the adopted development plan unless other considerations outweigh it, so the policies that apply to your site are the test your scheme will be marked against. Listing them, with the exact wording on density, height, parking, affordable housing, design and amenity, lets the design team design to the test instead of guessing at it.

                ## Milestones
                1. The adopted local plan, any neighbourhood plan and the relevant supplementary guidance identified and saved.
                2. Every policy that applies to the site listed with its reference and the key requirement in one line.
                3. Any national policy or guidance that the authority usually cites added to the list.
                4. Points where the scheme may conflict with policy marked for discussion at pre-application stage.

                ## Notes
                Check whether a new local plan is in examination. Emerging policies can carry weight before adoption, and a draft allocation can help or hurt.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: research
                output_kind: artifact
                success_criteria: "A policy schedule listing every applicable plan and guidance policy with its requirement and the scheme's likely compliance, shared with the design team."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Download the adopted local plan and the policies map for the site"
                - "Check whether a neighbourhood plan covers the site"
                - "List each applicable policy with its requirement in one line"
                - "Mark the policies the scheme may struggle to meet"
                - "Check the local plan review timetable for policies that may change @recurring(quarterly)"
            - name: Choosing the right application type
              description: |-
                ## Purpose
                Full, outline, hybrid, reserved matters, prior approval under permitted development, or a lawful development certificate: each carries different costs, information needs and risk. Picking the wrong route can cost months, while the right one can secure value early, for example an outline consent before selling the land, or a prior approval that avoids a full policy test.

                ## Milestones
                1. The application types available for this scheme in your jurisdiction listed with their information requirements.
                2. Fees, timescales and the level of design detail needed compared for the two most likely routes.
                3. The chosen route recorded with the reasons and any later applications it will need.
                4. The choice confirmed with your planning consultant or at pre-application stage.

                ## Notes
                Outline consents leave design to reserved matters, so the value is less certain to a buyer or lender than a detailed permission.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A written decision on the application route, comparing at least two options on cost, time and certainty, confirmed with a planning professional."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "List the application types that could deliver the scheme"
                - "Compare fees and information requirements for the two likeliest routes"
                - "Ask your planning consultant which route the authority usually prefers"
                - "Record the chosen route and the follow-on applications it will need"
            - name: Planning budget covering fees, reports and contingency
              description: |-
                ## Purpose
                Application fees are usually the smallest line in the planning budget. Architects' drawings, transport, ecology, drainage, heritage and noise reports, a planning consultant, consultation events and the cost of a planning agreement can add up to many times the fee, and surprises here eat directly into the land price you can afford.

                ## Milestones
                1. Every planning cost line listed: fees, consultants, surveys, consultation, legal costs on the planning agreement and contributions.
                2. Quotes or reasoned estimates against each line.
                3. A contingency of at least the size of one unplanned report added.
                4. The planning budget fed into the development appraisal and cash flow.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A planning budget with quoted or estimated costs for every line and a contingency, reflected in the latest appraisal."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Look up the current application fee schedule for the chosen route"
                - "List every report the validation checklist is likely to need"
                - "Ask two consultants for fee quotes on the larger reports"
                - "Add the total and a contingency line to the appraisal"
            - name: Planning programme from pre-application to decision
              description: |-
                ## Purpose
                Statutory determination periods are the minimum, not the forecast, and seasonal surveys, committee cycles and consultation windows set the real pace. A programme built backwards from the date you need consent shows which surveys must be booked now, which committee you are aiming for and how much slippage the finance and land deal can absorb.

                ## Milestones
                1. Key dates set out: surveys, pre-application meeting, consultation, submission, validation, target committee and decision.
                2. Seasonal survey windows, such as bat or bird surveys, placed on the programme.
                3. The authority's committee dates for the coming year added.
                4. Float between the expected decision and any land or finance deadline shown.

                ## Notes
                Check whether the land contract or option has a planning longstop date. The programme should show how far ahead of it you expect to land.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A dated planning programme from surveys to decision, including committee dates and survey windows, with float against land and finance deadlines."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Write down the date by which you need a planning decision"
                - "Download the authority's planning committee calendar"
                - "Ask the ecologist which survey windows apply to the site"
                - "Lay out the programme backwards from the decision date"
            - name: Local validation checklist for the application
              description: |-
                ## Purpose
                Applications are not registered until they are valid, and an invalid submission can sit for weeks while a missing plan or report is chased. Most authorities publish a local validation list on top of the national requirements, and turning it into your own checklist, with an owner for each item, is how a submission goes in complete the first time.

                ## Milestones
                1. The national and local validation requirements for the application type downloaded.
                2. A checklist with every required drawing, form, certificate and report, each with an owner and due date.
                3. Drawing scales, north points and red line boundary requirements noted.
                4. The checklist used to sign off the submission pack.

                ## Notes
                Start from the **Operational checklist** template. Validation lists are reviewed every few years, so download the current version rather than reusing one from a past scheme.
              priority: high
              deadlineOffsetDays: 60
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A validation checklist covering every national and local requirement, each item with an owner, used to sign off the submission."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Download the authority's current local validation list"
                - "Turn each requirement into a checklist line with an owner"
                - "Ask the architect to confirm drawing scales and the red line plan"
                - "Set a due date for each report that lands before submission"
            - name: Brief and appointment for a planning consultant
              description: |-
                ## Purpose
                A good planning consultant knows the authority's officers, the policies that bite and the reports that are really needed, and can save more than their fee on a contested scheme. A written brief, with the scope from pre-application to discharge of conditions and the fee basis for each stage, stops scope creep and lets you compare bids fairly.

                ## Milestones
                1. A brief describing the site, the scheme, the route and the stages you want covered.
                2. Two or three consultants with recent local wins asked to bid.
                3. Bids compared on scope, staffing, stage fees and appeal rates.
                4. One consultant appointed with a signed letter or appointment setting out scope and fees.

                ## Notes
                Start from the **Vendor** template. Ask who will actually attend the meetings; the director who pitches is not always the one who runs the case.
              priority: medium
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A planning consultant appointed on a written scope and staged fee, chosen from at least two compared bids."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Write a one-page brief covering site, scheme and stages"
                - "Search recent approvals in the district to find consultants who won them"
                - "Send the brief to three consultants and set a reply date"
                - "Review the consultant's performance and fee rates against the brief @recurring(yearly)"
            - name: Planning risk register for the scheme
              description: |-
                ## Purpose
                Refusal is rarely a surprise in hindsight: the signs show up in a pre-application letter, a highways objection or a vocal residents' group. A short register of planning risks, each with a likelihood, an impact on value or programme and a named mitigation, makes those signs visible early enough to act on.

                ## Milestones
                1. Ten or so planning risks listed, from policy conflicts to consultee objections and political opposition.
                2. Each risk scored for likelihood and impact on value and programme.
                3. An owner and a mitigation recorded against every high-scoring risk.
                4. The register reviewed after pre-application feedback and again at submission.

                ## Notes
                Start from the **Risk register** template.
              priority: high
              frontmatter:
                mode: operating
                output_kind: artifact
                success_criteria: "A planning risk register with scored risks, owners and mitigations, rescored at least monthly while the application is live."
                cadence: rolling
              tasks:
                - "List the ten planning risks that worry you most about this scheme"
                - "Score each one for likelihood and impact"
                - "Agree a mitigation and an owner for the top three"
                - "Rescore the planning risks and note what changed @recurring(monthly:5)"
            - name: Single planning file with version control
              description: |-
                ## Purpose
                Applications go wrong when the case officer is looking at revision C of a drawing and the transport consultant modelled revision B. One shared folder, with a numbering system, a drawing register and a rule that superseded documents move to an archive, keeps the whole team and the authority working from the same set.

                ## Milestones
                1. A shared folder structure for correspondence, drawings, reports, consultation and decision documents.
                2. A drawing and document register listing the current revision of everything submitted.
                3. A rule agreed with the team for naming and superseding files.
                4. Every document sent to the authority logged with date and method.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A shared planning folder and document register that shows the current revision of every submitted document, kept current through determination."
                cadence: rolling
              tasks:
                - "Create the planning folder structure and share it with the team"
                - "Start a register of every drawing and report with its revision"
                - "Agree a file naming rule with the architect"
                - "Move superseded revisions into the archive folder @recurring(monthly:28)"
            - name: Weekly planning tracker and team call
              description: |-
                ## Purpose
                Between submission and decision, applications drift unless someone owns the list of open items: consultee comments to answer, revised drawings to issue, information the officer has asked for. A one-page tracker and a fifteen-minute weekly call with the consultant and architect turns a passive wait into a managed determination period.

                ## Milestones
                1. A tracker listing every open item with owner, date raised and date due.
                2. A standing weekly slot with the planning consultant and architect.
                3. Each call ending with the tracker updated and circulated.
                4. No item older than two weeks without an agreed action.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A planning tracker updated and circulated every week of determination, with no open item older than two weeks without an action."
                cadence: rolling
              tasks:
                - "Set up a one-page tracker with owner and due date columns"
                - "Book a recurring fifteen-minute slot with the consultant and architect"
                - "Update the planning tracker and send it to the team @recurring(weekly:mon)"
                - "Close or escalate any item open for more than two weeks"
            - name: Consultee response log during determination
              description: |-
                ## Purpose
                Highways, drainage, environmental health, ecology, heritage and utility consultees each post comments on the planning portal, often without telling the applicant. An objection left unanswered for three weeks can become the reason for refusal, so logging each response and replying with a technical note quickly is one of the highest-value habits in the whole process.

                ## Milestones
                1. Every statutory and internal consultee for the application listed.
                2. Each response logged with date, position and the specific concern.
                3. A technical reply or revised information issued for every objection or holding objection.
                4. Each objector's final position recorded before the officer writes the report.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A consultee log showing every response, the reply sent and the final position, with no objection left unanswered for more than ten working days."
                cadence: rolling
              tasks:
                - "List the consultees shown on the application's portal page"
                - "Check the planning portal for new consultee comments @recurring(weekly:thu)"
                - "Send each objection to the relevant consultant with a reply deadline"
                - "Ask each objecting consultee whether the reply resolves their concern"
            - name: Case officer contact log and monthly check-in
              description: |-
                ## Purpose
                The case officer writes the report and recommendation, and a working relationship with them is worth more than any glossy document. A short log of every call, email and meeting, plus a planned monthly check-in, keeps you aware of their concerns before they harden and gives you a record if the timeline is later disputed.

                ## Milestones
                1. The case officer's name, contact details and working pattern recorded.
                2. Every contact logged with date, what was asked and what was agreed.
                3. A monthly check-in held or offered throughout determination.
                4. Any extension of time requested by the officer agreed in writing.

                ## Notes
                Start from the **Meeting notes** template. Confirm agreements by email the same day, politely, so both sides have the same note.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A case officer log with every contact recorded and a check-in held each month of determination, with agreements confirmed by email."
                cadence: rolling
              tasks:
                - "Introduce yourself to the case officer by email once the application is allocated"
                - "Start a contact log with date, topic and agreement columns"
                - "Offer the case officer a short progress call @recurring(monthly:14)"
                - "Confirm any agreement or extension of time by email the same day"
            - name: Monthly watch on local planning decisions
              description: |-
                ## Purpose
                Committee agendas and delegated decisions show how your authority is actually applying its policies this year: which members object to height, how parking is being treated, whether a new design code is being enforced. Reading them monthly, even when you have nothing live, keeps your appraisals and scheme designs realistic.

                ## Milestones
                1. The authority's committee agenda and decision list pages bookmarked.
                2. A short notes page for decisions on schemes similar to yours.
                3. Patterns noted, such as recurring refusal reasons or conditions.
                4. Lessons fed into the next pre-application or design brief.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A notes page with at least one entry per month on relevant local decisions, and lessons cited in the next scheme brief."
                cadence: rolling
              tasks:
                - "Bookmark the committee agendas and weekly decision lists"
                - "Read the month's committee agenda and note decisions on similar schemes @recurring(monthly:9)"
                - "Note any refusal reason that appears more than once"
                - "Add the lessons to the next design brief"
            - name: Planning conditions discharge tracker
              description: |-
                ## Purpose
                Pre-commencement conditions must be discharged before work starts, and starting without them can leave the permission open to challenge or enforcement. A tracker listing each condition, its trigger point, the information needed, who prepares it and the authority's response time lets the build programme and the planning programme line up instead of colliding.

                ## Milestones
                1. Every condition on the decision notice listed with its trigger: pre-commencement, pre-occupation, ongoing.
                2. An owner and information pack identified for each condition.
                3. Discharge applications submitted early enough for the authority's response period.
                4. Written confirmation of discharge saved for every condition before its trigger.

                ## Notes
                Commencing without discharging a pre-commencement condition can be serious. Confirm the position with your planning consultant before any start on site.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A conditions tracker with every condition, its trigger, owner and discharge status, and written discharge on file before each trigger is reached."
                cadence: rolling
              tasks:
                - "Copy every condition from the decision notice into the tracker"
                - "Mark each condition by trigger point and assign an owner"
                - "Review the conditions tracker against the build programme @recurring(monthly:3)"
                - "Chase the planning authority on discharge applications past their response period @recurring(weekly:wed)"
            - name: Permission expiry and commencement register
              description: |-
                ## Purpose
                Planning permissions usually lapse if development is not begun within a set period, and a lapsed consent on a site you have paid for is an expensive mistake. Keeping a register of every live permission, its expiry date, what counts as lawful commencement and the conditions that must be cleared first means no consent dies unnoticed in a drawer.

                ## Milestones
                1. Every live permission across your sites listed with reference and expiry date.
                2. What would count as a lawful start confirmed with your planning adviser for each.
                3. Pre-commencement conditions mapped against each expiry date.
                4. A decision recorded for each permission within twelve months of expiry: build, implement to preserve, renew or let lapse.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A register of every live permission with its expiry date and commencement plan, checked each quarter, with no permission lapsing without a recorded decision."
                cadence: rolling
              tasks:
                - "List every live permission with its reference and expiry date"
                - "Ask your planning adviser what counts as lawful commencement for each"
                - "Check every permission's expiry date and flag any within eighteen months @recurring(quarterly)"
                - "Record a build, preserve, renew or lapse decision for each flagged permission"
            - name: Planning obligations compliance calendar
              description: |-
                ## Purpose
                A planning agreement, such as a section 106 agreement in England or a development agreement elsewhere, ties payments and obligations to triggers like commencement, a number of occupations or a sale. Missing a trigger can mean interest, enforcement or a blocked sale, so every obligation needs a date or event, an owner and proof of compliance.

                ## Milestones
                1. Every obligation in the agreement listed with its trigger and amount or action.
                2. Notices the authority must receive, such as commencement notices, identified with deadlines.
                3. Payments and indexation calculations prepared before each trigger.
                4. Evidence of every obligation met saved for the eventual buyer or funder.

                ## Notes
                Start from the **Compliance control** template. Indexation clauses can change the payable sum materially, so ask the authority to confirm the figure before paying.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A compliance calendar for every planning obligation with triggers, owners and evidence of compliance, checked monthly once development starts."
                cadence: rolling
              tasks:
                - "Read the signed planning agreement and list each obligation and trigger"
                - "Set reminders for every notice the agreement requires"
                - "Check obligation triggers against starts, occupations and sales @recurring(monthly:17)"
                - "File the receipt or letter proving each obligation was met"
            - name: Stakeholder and neighbour engagement register
              description: |-
                ## Purpose
                Neighbours, residents' associations, ward councillors and parish or community councils shape the mood around an application long before committee. A register of who they are, what they care about and what you have told them lets you answer concerns consistently, spot where opposition is organising and show the authority a genuine record of engagement.

                ## Milestones
                1. Immediate neighbours, local groups and ward members listed with contact routes.
                2. Each stakeholder's main concerns recorded after first contact.
                3. A consistent set of answers to the common questions agreed with the team.
                4. Engagement summarised for the statement of community involvement.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A stakeholder register with concerns and responses recorded, updates sent monthly while the application is live, and a summary used in the submission."
                cadence: rolling
              tasks:
                - "List the neighbours, local groups and ward councillors around the site"
                - "Record each concern raised and the answer you gave"
                - "Send a short scheme update to the stakeholder list @recurring(monthly:26)"
                - "Draft standard answers to the five most common questions"
            - name: Quarterly planning pipeline review
              description: |-
                ## Purpose
                Founders with several sites lose track of which ones are waiting on surveys, which are at committee and which consents are about to expire. A quarterly review of every site's planning stage, next milestone, spend to date and risk gives you one view for decisions about where to put time and money next.

                ## Milestones
                1. One line per site showing stage, next milestone, spend to date and top risk.
                2. Sites behind programme flagged with a recovery action.
                3. Planning spend compared with budget for each site.
                4. A decision recorded on any site to pause, push or drop.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A planning pipeline summary updated every quarter, with spend against budget and a recorded decision for any site behind programme."
                cadence: cyclic
              tasks:
                - "Build a one-line-per-site pipeline summary"
                - "Add planning spend to date against budget for each site"
                - "Hold the quarterly planning pipeline review and record decisions @recurring(quarterly)"
                - "Send the summary to partners or funders who follow the pipeline"
            - name: How your planning system decides applications
              description: |-
                ## Purpose
                Developers new to a jurisdiction often misread who decides, on what basis and in what time. Learning the basics, the plan-led system, delegated versus committee decisions, statutory consultees, determination periods, appeal rights and who can call an application in, takes a few evenings and prevents the most common procedural mistakes.

                ## Milestones
                1. A one-page summary of how applications are decided in your jurisdiction.
                2. The thresholds that send an application to committee rather than officers noted.
                3. Determination periods and appeal deadlines for your application type written down.
                4. Questions you could not answer listed for your planning consultant.
              priority: medium
              deadlineOffsetDays: 30
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A one-page summary of the decision process, committee thresholds and appeal deadlines, checked against official guidance."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Find the government's official guide to the planning process"
                - "Read the authority's scheme of delegation for committee thresholds"
                - "Write down determination periods and appeal deadlines for your route"
                - "List your open questions for the planning consultant"
            - name: Reading officer reports and committee minutes
              description: |-
                ## Purpose
                Officer reports are where the planning judgement is written out: policy compliance, consultee views, objections and the balance. Reading five reports on schemes like yours teaches you what officers weigh, how they phrase concerns and which conditions they attach, which makes your own submission easier to recommend for approval.

                ## Milestones
                1. Five recent officer reports on comparable schemes read and annotated.
                2. The structure of a typical report noted, from site description to recommendation.
                3. The phrases officers use to flag concerns listed.
                4. Common conditions and obligations for your scheme type recorded.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Five officer reports on comparable schemes annotated, with a summary of common concerns and standard conditions saved in the planning file."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Find five recent officer reports on schemes similar to yours"
                - "Annotate how each one weighs policy against objections"
                - "List the conditions that appear in at least three of the reports"
                - "Read the committee minutes for any of the five that went to committee"
            - name: Material considerations and the planning balance
              description: |-
                ## Purpose
                Officers and committees weigh harm against benefit, and only material considerations count: loss of light counts, loss of a private view usually does not. Knowing what is material, and how benefits like new homes, jobs or a restored building are given weight, helps you frame the scheme and answer objections on the grounds that matter.

                ## Milestones
                1. A list of considerations usually treated as material and those usually not.
                2. The scheme's benefits listed with the weight policy gives each.
                3. The scheme's harms listed honestly, with the mitigation for each.
                4. A draft planning balance paragraph for the planning statement.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A written planning balance for the scheme listing benefits, harms and mitigation, reviewed by the planning consultant."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Read official guidance on what counts as a material consideration"
                - "List the scheme's benefits and the policies that give them weight"
                - "List the scheme's harms and how each is mitigated"
                - "Draft a one-paragraph planning balance for the consultant to review"
            - name: Writing a clear planning statement
              description: |-
                ## Purpose
                The planning statement is the argument for the scheme: what it is, which policies it meets, where it departs and why the benefits outweigh the harm. Officers read dozens a month, so a statement that is short, structured around the policies and honest about conflicts gets a fairer hearing than a long brochure.

                ## Milestones
                1. An outline structured by site, proposal, policy assessment, benefits and balance.
                2. Each relevant policy addressed in turn with evidence from the reports.
                3. Policy conflicts acknowledged with the justification for each.
                4. A final draft under the length the officer is likely to read in full.

                ## Notes
                If a consultant writes it, still read every page. You will be asked about it at committee.
              priority: medium
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "A planning statement that addresses every policy on the policy schedule and the planning balance, signed off by you and the consultant before submission."
                cadence: phased
                effort_hours_estimate: "12"
              tasks:
                - "Agree the statement outline with the planning consultant"
                - "Check every policy on the schedule is addressed in the draft"
                - "Ask the agent to summarise the draft in one page so you can test its argument"
                - "Mark up the final draft for any claim the reports do not support"
            - name: Design and access statement that tells the story
              description: |-
                ## Purpose
                Design is a frequent reason for refusal and the design and access statement is where you show the thinking: context, options tested, why this layout, height and materials, and how people get in and around. A statement that shows the scheme evolving in response to the site and to feedback is far more persuasive than a set of polished renders.

                ## Milestones
                1. A context analysis of the street, scale, materials and character.
                2. Options considered and the reasons for the chosen layout shown.
                3. Access for pedestrians, cyclists, vehicles and disabled users explained.
                4. Changes made after pre-application and consultation feedback recorded.
              priority: medium
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "A design and access statement showing context, options, access and feedback-driven changes, approved by you before submission."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Ask the architect for the context photos and analysis drawings"
                - "List the options tested and why each was dropped"
                - "Add a page on changes made after feedback"
                - "Review the draft against the authority's design guidance"
            - name: Learning from appeal decisions on similar schemes
              description: |-
                ## Purpose
                Appeal decisions are published and show how an independent inspector weighs the same policies your authority uses. A habit of reading one relevant decision a month builds a library of arguments that win and lose, which sharpens your pre-application case and tells you early whether an appeal would be worth it.

                ## Milestones
                1. The search tool for published appeal decisions bookmarked.
                2. A log of decisions read with site type, main issue and outcome.
                3. Arguments that persuaded inspectors noted by topic.
                4. A view formed on how often the authority loses appeals on schemes like yours.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "An appeal decision log with at least twelve entries on comparable schemes, grouped by main issue."
                cadence: rolling
              tasks:
                - "Bookmark the official search for planning appeal decisions"
                - "Start a log with site type, main issue and outcome columns"
                - "Read one appeal decision on a similar scheme and log it @recurring(monthly:20)"
                - "Group the logged arguments by topic each time the log reaches ten entries"
            - name: Practising the committee speech
              description: |-
                ## Purpose
                Applicants usually get a few minutes to speak at committee, often after objectors, and members decide in the room. A speech that is rehearsed, timed and focused on the two or three issues members care about, delivered calmly, can hold a finely balanced vote, while a rushed sales pitch can lose it.

                ## Milestones
                1. The speaking time and registration rules for the authority confirmed.
                2. A script under the time limit that answers the main objections.
                3. The speech rehearsed aloud and timed at least three times.
                4. Short answers prepared for the questions members are most likely to ask.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A timed committee script that fits the speaking limit, rehearsed three times, with prepared answers to five likely member questions."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Check the authority's rules for applicants speaking at committee"
                - "Write a script that answers the top three objections"
                - "Rehearse aloud with a timer until it fits comfortably"
                - "Write short answers to five likely member questions"
            - name: Understanding viability evidence in planning
              description: |-
                ## Purpose
                Where policy asks for affordable housing or contributions the scheme cannot carry, authorities often accept a viability assessment, and the authority usually has it reviewed independently. Understanding the method, benchmark land value, developer return and how reviewers test inputs, lets you commission and defend the assessment instead of being surprised by its review.

                ## Milestones
                1. The authority's guidance on viability assessments read and summarised.
                2. The key inputs and how reviewers usually challenge each listed.
                3. A view on whether a viability case is needed for this scheme, recorded with your consultant.
                4. Review mechanisms, such as late-stage reviews, understood and noted.

                ## Notes
                Viability submissions are often published. Assume every figure will be read by objectors as well as officers.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A note on the authority's viability method, the contested inputs and whether this scheme needs a viability case, agreed with the planning consultant."
                cadence: phased
                effort_hours_estimate: "5"
              tasks:
                - "Download the authority's viability guidance or supplementary document"
                - "List the inputs reviewers most often challenge"
                - "Ask your consultant whether this scheme needs a viability case"
                - "Refresh build cost and sales value evidence used in any viability case @recurring(quarterly)"
            - name: Survey and report scoping with seasonal windows
              description: |-
                ## Purpose
                Commissioning every report on the long list wastes money, while missing one can make the application invalid or delay it by a season. Agreeing the scope of transport, ecology, drainage, noise, heritage and contamination work early, and booking surveys that only happen at certain times of year, is the single biggest lever on the planning programme.

                ## Milestones
                1. A list of reports needed, confirmed against the validation list and pre-application advice.
                2. The scope of each report agreed with the consultant, and with the consultee where possible.
                3. Seasonal surveys booked in their windows.
                4. Fees for each report fixed and added to the planning budget.
              priority: medium
              deadlineOffsetDays: 45
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "An agreed list of reports with scopes, fees and survey dates, including any seasonal surveys booked in their windows."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Compare the validation list with the pre-application advice on reports"
                - "Ask each consultant for a scope and fixed fee"
                - "Book seasonal ecology surveys in their next window"
                - "Update the planning budget with the agreed fees"
            - name: Design changes after pre-application feedback
              description: |-
                ## Purpose
                Pre-application advice is only worth paying for if you act on it, or record why you will not. Working through the officer's letter point by point, deciding which changes to make, which to argue and what each costs in units or value, turns feedback into a better scheme and a stronger submission.

                ## Milestones
                1. Every point in the pre-application response listed.
                2. Each point marked as accept, amend or argue, with the reason.
                3. The value effect of accepted changes run through the appraisal.
                4. Revised drawings and a response table ready for the submission.
              priority: medium
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A response table addressing every pre-application point, with revised drawings and an updated appraisal showing the value effect."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Copy each point from the pre-application letter into a response table"
                - "Mark each point accept, amend or argue with a reason"
                - "Ask the architect to cost the accepted changes in units and area"
                - "Run the revised scheme through the appraisal"
            - name: Handling requested amendments during determination
              description: |-
                ## Purpose
                Officers often ask for changes mid-application: a storey off, a wider access, more parking. Some can be made by amended plans, others mean reconsultation or a fresh application, and each one has a value cost. Deciding quickly and with numbers keeps the application moving without giving away more than you need to.

                ## Milestones
                1. The officer's requested changes confirmed in writing.
                2. The value and programme effect of each change calculated.
                3. A decision recorded on each: accept, offer an alternative or decline.
                4. Amended plans issued with a clear covering note listing every change.
              priority: medium
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "Every requested amendment answered in writing with its value effect recorded, and amended plans issued with a change schedule."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Ask the officer to confirm the requested changes by email"
                - "Work out the value effect of each change in the appraisal"
                - "Agree with the consultant which changes to accept or counter"
                - "Issue amended plans with a covering change schedule"
            - name: Withdraw or proceed decision when refusal looms
              description: |-
                ## Purpose
                When the officer signals a refusal recommendation, there is a short window to choose: withdraw and resubmit, ask for more time to amend, push for a decision to appeal, or take it to committee and argue. Each has different costs and a refusal stays on the site's record, so the choice deserves a written comparison rather than a panicked phone call.

                ## Milestones
                1. The officer's likely reasons for refusal set out in writing.
                2. The options compared on cost, time and chance of success.
                3. The effect on land, option and finance deadlines checked.
                4. A decision recorded with your planning consultant's advice.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A written comparison of withdraw, amend, refuse and appeal, or committee, with the decision and the adviser's view recorded."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Ask the officer to set out the likely refusal reasons"
                - "Compare the four options on cost, time and chance of success"
                - "Check the land and finance deadlines each option affects"
                - "Record the decision and the consultant's advice"
            - name: Post-consent amendments to a permission
              description: |-
                ## Purpose
                Schemes change after approval as costs, buyers or contractors demand it. Small changes can usually go through a non-material amendment, larger ones through a variation of conditions or a fresh application, and building something different from the approved plans risks enforcement. Knowing which route each change needs avoids both delay and unauthorised development.

                ## Milestones
                1. A list of proposed changes compared with the approved drawings.
                2. The route for each change confirmed with your planning adviser.
                3. Applications for amendments submitted with clear comparison drawings.
                4. The approved drawing set updated and issued to the contractor.
              priority: low
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "Every post-consent change approved through the right route before it is built, with the approved drawing set updated and issued."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "List each proposed change against the approved drawings"
                - "Ask your planning adviser which route each change needs"
                - "Prepare comparison drawings showing approved and proposed"
                - "Issue the updated approved set to the contractor"
            - name: Negotiating heads of terms for the planning agreement
              description: |-
                ## Purpose
                Affordable housing, contributions to schools and roads, and on-site obligations are usually agreed in heads of terms before the committee report is written. Agreeing them with numbers in hand, and with your solicitor involved early, avoids a resolution to grant that then sits for months while the agreement is drafted.

                ## Milestones
                1. The authority's requested obligations listed with amounts and triggers.
                2. Each obligation checked against policy and the appraisal.
                3. Heads of terms agreed in writing before the committee report is finalised.
                4. A solicitor instructed and a draft agreement timetable set.

                ## Notes
                Ask for triggers that match your sales and funding plan. Payments due on commencement are harder to fund than payments due on occupation.
              priority: medium
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "Written heads of terms for the planning agreement, tested in the appraisal and agreed with the authority before committee, with a solicitor instructed."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Ask the officer for the full list of requested obligations"
                - "Test each obligation's cost and timing in the appraisal"
                - "Propose triggers that fit your sales and funding plan"
                - "Instruct a solicitor to start the agreement once terms are settled"
            - name: Planning performance agreement for a larger scheme
              description: |-
                ## Purpose
                For larger or complex schemes, many authorities offer a planning performance agreement: you pay for a dedicated officer and an agreed timetable of meetings and decision dates. It costs money but buys certainty of programme, which may be worth more to a funder or land deal than the fee.

                ## Milestones
                1. Whether the authority offers such agreements, and at what cost, confirmed.
                2. The cost compared with the value of a firmer timetable.
                3. An agreed timetable of meetings, submission and target decision signed.
                4. Monthly progress against the timetable reviewed with the officer.
              priority: low
              frontmatter:
                mode: operating
                output_kind: decision
                success_criteria: "A recorded decision on a planning performance agreement and, if signed, monthly reviews against its timetable."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Ask the authority whether it offers planning performance agreements"
                - "Compare the fee with the cost of a three-month delay"
                - "Negotiate a timetable that fits your land and finance dates"
                - "Hold the progress meeting against the agreed timetable @recurring(monthly:7)"
            - name: Pre-application meeting with the planning authority
              description: |-
                ## Purpose
                Pre-application advice is the cheapest way to hear the officer's view before spending on full reports. A clear pack, sketch plans, a short policy note and the questions you need answered, gets you specific feedback on principle, scale and design, and the written response becomes a reference point for the rest of the process.

                ## Milestones
                1. The pre-application service, fee and response time confirmed.
                2. A pack submitted with site plan, sketch scheme, policy note and specific questions.
                3. The meeting held with notes taken and circulated the same day.
                4. The authority's written response received and saved.

                ## Notes
                Ask direct questions: is the principle acceptable, what height would you support, which reports do you need. Vague packs get vague answers.
              priority: high
              deadlineOffsetDays: 60
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A pre-application meeting held and a written response received that answers your questions on principle, scale and required reports."
                cadence: one-shot
                effort_hours_estimate: "10"
              tasks:
                - "Check the authority's pre-application service and fee"
                - "Write the five questions you most need answered"
                - "Submit the pack with sketch plans and a policy note"
                - "Circulate meeting notes to the team the same day"
            - name: Public consultation event for the scheme
              description: |-
                ## Purpose
                Many authorities expect applicants to consult the community before submission, and for contentious schemes it is where opposition either forms or softens. An exhibition or drop-in session with clear boards, the team present and a feedback form gives residents a fair hearing and gives you a record for the statement of community involvement.

                ## Milestones
                1. A venue, date and invitation area agreed, with the authority's expectations checked.
                2. Invitations delivered to every address in the area and ward councillors invited.
                3. Exhibition boards and a feedback form ready, plus an online version.
                4. Feedback analysed and a summary of changes made written up.

                ## Notes
                Hold it at a time working people can attend, and keep the online version open for at least two weeks after.
              priority: medium
              deadlineOffsetDays: 120
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A consultation event held with invitations to the agreed area, feedback logged and a written summary of responses and changes."
                cadence: one-shot
                effort_hours_estimate: "20"
              tasks:
                - "Check the authority's statement of community involvement for expectations"
                - "Book a local venue for an evening and a weekend session"
                - "Agree the invitation area and deliver the leaflets"
                - "Analyse the feedback forms and list changes made in response"
            - name: Submission and validation of the application
              description: |-
                ## Purpose
                Submission day is when weeks of work become a reference number, and validation decides whether the clock starts. Checking every document against the validation checklist, paying the right fee, signing the correct ownership certificate and confirming registration within days avoids the quiet weeks lost to an invalid application.

                ## Milestones
                1. Every item on the validation checklist ticked off against the final pack.
                2. Forms, ownership certificate and fee completed and checked by a second person.
                3. The application submitted and the receipt saved.
                4. Validation confirmed, with the target decision date and case officer recorded.
              priority: high
              deadlineOffsetDays: 150
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A validated application with a reference number, case officer and target decision date recorded within three weeks of submission."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Run the final pack against the validation checklist"
                - "Ask a second person to check the forms, certificate and fee"
                - "Submit the application and save the receipt"
                - "Chase validation if no confirmation arrives within ten working days"
            - name: Planning committee meeting preparation
              description: |-
                ## Purpose
                If the application goes to committee, the officer's recommendation matters, but so do the members, the objectors and the mood on the night. Reading the report the day it is published, briefing your team, correcting factual errors through the proper route and preparing your speaker gives the scheme the best chance on the one evening that decides it.

                ## Milestones
                1. The committee date confirmed and speaking registered by the deadline.
                2. The officer's report read the day it is published, with errors raised in writing.
                3. Objections and likely member concerns listed with short answers.
                4. The team briefed on who speaks, who attends and who answers technical questions.

                ## Notes
                Rules on contacting committee members differ between authorities. Ask your consultant what is appropriate before writing to any councillor.
              priority: high
              deadlineOffsetDays: 240
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "Speaking registered, the officer report reviewed with any factual errors raised, and a briefed team attending on the committee date."
                cadence: one-shot
                effort_hours_estimate: "10"
              tasks:
                - "Register to speak before the authority's deadline"
                - "Read the officer report the day it is published"
                - "Write to the officer about any factual errors in the report"
                - "Brief the team on roles for the night"
            - name: Design review panel presentation
              description: |-
                ## Purpose
                Some authorities send larger or sensitive schemes to an independent design review panel, and its comments carry weight with officers and members. Preparing a clear presentation of context, options and the chosen design, and responding visibly to the panel's points, can turn a design objection into support.

                ## Milestones
                1. Whether a panel review is expected confirmed, and the session booked.
                2. A presentation prepared showing context, options and the design rationale.
                3. The panel's written comments received and logged.
                4. A response to each panel comment included in the submission.
              priority: low
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A design review session held and a written response to every panel comment included in the application documents."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Ask the officer whether the scheme should go to design review"
                - "Book the panel session and check its fee"
                - "Prepare the presentation with the architect"
                - "Write a response to each comment in the panel's letter"
            - name: Decision notice review within a week of issue
              description: |-
                ## Purpose
                A decision notice is not the end: conditions can be unworkable, the description can be wrong and an unwelcome condition may be appealable within a fixed period. Reading the notice carefully in the first week, against the drawings and the officer report, catches problems while they can still be fixed cheaply.

                ## Milestones
                1. The decision notice checked against the application description and drawing list.
                2. Every condition read for workability, cost and timing.
                3. Any errors or problem conditions raised with the officer or consultant.
                4. The appeal deadline for any condition you might contest noted.
              priority: medium
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A written review of the decision notice within seven days of issue, with any errors raised and appeal deadlines recorded."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Check the description and drawing list on the notice against the application"
                - "Read every condition and mark any that are unclear or costly"
                - "Ask your consultant whether any condition is worth contesting"
                - "Note the appeal deadline in the planning file"
            - name: First application for a small infill site
              description: |-
                ## Purpose
                Founders starting with one infill plot or a backland site usually face the same issues: overlooking, parking, access width and the neighbours on three sides. Running your first application with a small team, a tight budget and a clear set of steps builds a template you can reuse on every site after it.

                ## Milestones
                1. The main local concerns for infill schemes identified from recent decisions.
                2. A lean team appointed: architect, and only the specialists the site needs.
                3. Neighbours spoken to before submission.
                4. A short lessons note written after the decision for the next site.

                ## Notes
                Overlooking and loss of light are the most common objections on infill sites. Show the measurements on the drawings rather than in the text.
              priority: medium
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "A first application submitted for an infill site with a lean team and pre-submission neighbour contact, followed by a written lessons note."
                cadence: phased
                effort_hours_estimate: "30"
              tasks:
                - "Find three recent decisions on infill sites in the same district"
                - "Ask the architect which specialists this site genuinely needs"
                - "Knock on the neighbouring doors before submission"
                - "Write a lessons note after the decision"
            - name: Change of use application for an existing building
              description: |-
                ## Purpose
                Converting offices, shops, barns or warehouses to homes or other uses can go through prior approval, a full application or both, depending on the building, the use and the local rules. Getting the route, the space and light standards and any loss-of-use policy right before buying or designing protects the value the conversion depends on.

                ## Milestones
                1. The current lawful use of the building established with evidence.
                2. Whether a permitted development or prior approval route applies confirmed.
                3. Space, light and amenity standards for the new use checked against the floor plans.
                4. Any policy protecting the existing use addressed with marketing or other evidence.

                ## Notes
                Some areas remove permitted development rights through local directions. Check before assuming the route is available.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A recorded decision on the change of use route, with lawful use evidenced and the floor plans tested against the new use standards."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Gather evidence of the building's current lawful use"
                - "Check for local directions removing permitted development rights"
                - "Test the floor plans against space and daylight standards"
                - "Ask the consultant whether marketing evidence is needed for loss of use"
            - name: Applying on land you do not yet own
              description: |-
                ## Purpose
                Developers often apply while the land is under contract or option, which is allowed in many systems but brings duties: the correct ownership certificate, notice to the owner and any tenants, and agreement with the owner on what is applied for. Getting this wrong can invalidate the application or the permission.

                ## Milestones
                1. Everyone with a qualifying interest in the land identified.
                2. The correct ownership certificate chosen with your planning adviser.
                3. Notices served on owners and tenants, with proof kept.
                4. The landowner's written agreement to the application obtained.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "The correct ownership certificate signed, notices served on every qualifying owner and tenant with proof kept, and the landowner's agreement on file."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Get the title documents and list every owner and tenant"
                - "Ask your planning adviser which ownership certificate applies"
                - "Serve notice on each owner and tenant and keep proof of delivery"
                - "Get the landowner's written agreement to the application"
            - name: Scheme in a conservation area or near a listed building
              description: |-
                ## Purpose
                Heritage designations raise the bar: harm to a listed building's setting or a conservation area's character has to be justified, works to a listed building may need separate consent, and the heritage officer's view can decide the case. Early heritage advice and a proper statement of significance often decide whether the scheme survives.

                ## Milestones
                1. Every heritage asset affected identified, including settings.
                2. A heritage consultant appointed and a statement of significance prepared.
                3. Whether separate listed building or demolition consent is needed confirmed.
                4. The heritage officer's views sought at pre-application stage and recorded.
              priority: medium
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "A heritage statement assessing significance and impact, with the need for separate consents confirmed and the heritage officer's view recorded."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "Check the heritage map for designations on and around the site"
                - "Ask a heritage consultant for a scope and fee"
                - "Confirm whether listed building or demolition consent is also needed"
                - "Ask for the heritage officer to attend the pre-application meeting"
            - name: Extending your own business premises
              description: |-
                ## Purpose
                Small businesses expanding a workshop, shop, café or yard are often applying for the first time, with no consultant and a business to run. Knowing the likely issues, such as noise, parking, deliveries and hours, and preparing simple evidence on jobs and trading need, helps the application succeed without taking months of management time.

                ## Milestones
                1. The likely concerns for your use type identified from local decisions.
                2. Drawings and any short reports commissioned within a set budget.
                3. Evidence on jobs created or protected and why the extension is needed written up.
                4. Neighbours told about the plans before the application goes in.
              priority: low
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "An application submitted for the premises extension with a jobs and need statement and neighbours informed beforehand, within the budget set."
                cadence: phased
                effort_hours_estimate: "15"
              tasks:
                - "Set a total budget and time limit for the application"
                - "Look up decisions on similar business extensions nearby"
                - "Write a one-page note on jobs and why the space is needed"
                - "Tell your neighbours about the plans in person"
            - name: Planning appeal against a refusal
              description: |-
                ## Purpose
                An appeal hands the decision to an independent inspector, but it costs months and money, has a strict deadline from the decision date and can carry a costs award if either side behaves unreasonably. Testing the refusal reasons against policy and past appeal decisions, then choosing the right procedure, decides whether an appeal is worth bringing.

                ## Milestones
                1. The refusal reasons analysed against policy and comparable appeal decisions.
                2. The appeal deadline confirmed and recorded.
                3. A decision made to appeal, resubmit or stop, with costs and timescales compared.
                4. If appealing, the procedure chosen and the statement of case prepared.

                ## Notes
                Appeal deadlines are strict and differ by application type and jurisdiction. Confirm yours on the day the refusal arrives.
              priority: medium
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A recorded appeal decision made before the deadline, and if appealing, a statement of case submitted under the chosen procedure."
                cadence: phased
                effort_hours_estimate: "25"
              tasks:
                - "Confirm the appeal deadline the day the refusal arrives"
                - "Compare each refusal reason with policy and past appeal decisions"
                - "Ask the consultant to estimate costs and timescales for each procedure"
                - "Record the decision to appeal, resubmit or stop"
            - name: Hearing or inquiry appeal with expert witnesses
              description: |-
                ## Purpose
                Contested schemes sometimes go to a hearing or a public inquiry, where evidence is tested in person and the cost and preparation are far higher than written representations. Running it properly means appointing an advocate and expert witnesses, agreeing common ground with the authority and keeping evidence consistent across every witness.

                ## Milestones
                1. An advocate and expert witnesses appointed for each main issue.
                2. A statement of common ground agreed with the authority.
                3. Proofs of evidence checked for consistency across witnesses.
                4. Witnesses rehearsed and the event logistics confirmed.
              priority: low
              frontmatter:
                mode: service
                output_kind: event-completion
                success_criteria: "An appeal hearing or inquiry attended with appointed experts, an agreed statement of common ground and consistent proofs of evidence submitted on time."
                cadence: phased
                effort_hours_estimate: "60"
              tasks:
                - "Ask your consultant which issues need an expert witness"
                - "Appoint an advocate with appeal experience on similar schemes"
                - "Agree a statement of common ground with the authority"
                - "Read every proof of evidence side by side for contradictions"
            - name: Protecting a permission through the challenge period
              description: |-
                ## Purpose
                Once permission is granted, a third party can usually seek a legal challenge within a short fixed period, and lenders and buyers often wait until it passes. Checking the decision for procedural weak points, keeping the evidence trail and not committing major spend until the window closes reduces the damage a challenge could do.

                ## Milestones
                1. The challenge period for the decision confirmed with your solicitor.
                2. The decision process reviewed for procedural gaps with your advisers.
                3. Major spend that can wait held until the period has passed.
                4. Confirmation obtained after the period that no challenge was lodged.

                ## Notes
                This is a legal matter. Ask your solicitor to confirm the period and whether any steps are advisable during it.
              priority: low
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "The challenge period confirmed with a solicitor, major spend timed after it, and written confirmation that no challenge was lodged saved on file."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Ask your solicitor to confirm the challenge period for the decision"
                - "Review the committee process and report for any procedural gaps"
                - "Hold contracts that can wait until the period ends"
                - "Get written confirmation that no challenge was lodged"
            - name: Environmental impact assessment screening and scoping
              description: |-
                ## Purpose
                Larger schemes, or those in sensitive locations, may need an environmental impact assessment, which changes the cost, the content and the timetable of the whole application. Asking for a screening opinion early, and a scoping opinion if one is needed, settles the question before the programme depends on it.

                ## Milestones
                1. The scheme checked against the impact assessment thresholds with your consultant.
                2. A screening opinion requested from the authority where the answer is not clear.
                3. If an assessment is needed, a scoping opinion agreed on the topics to cover.
                4. The programme and budget updated for the outcome.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A screening opinion or written consultant view on whether an impact assessment is needed, with the programme and budget updated to match."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Ask your consultant whether the scheme is near the assessment thresholds"
                - "Request a screening opinion if the answer is unclear"
                - "Agree the scoping topics if an assessment is required"
                - "Update the programme and budget for the outcome"
            - name: Twin-tracking a revised application and an appeal
              description: |-
                ## Purpose
                Experienced developers sometimes run a revised application addressing the refusal reasons alongside an appeal on the original scheme, so one route can succeed while the other is decided. It doubles some costs and needs careful coordination, but on valuable sites it can save a year and strengthen the negotiating position.

                ## Milestones
                1. Whether the authority allows a free resubmission, and on what terms, confirmed.
                2. The revised scheme designed to answer each refusal reason.
                3. Both routes costed and timed side by side.
                4. One coordinated programme with a rule for which route to drop and when.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A costed twin-track plan with a revised scheme answering each refusal reason and a written rule for which route to drop."
                cadence: phased
                effort_hours_estimate: "15"
              tasks:
                - "Check whether the authority offers a free resubmission"
                - "Ask the architect to revise the scheme against each refusal reason"
                - "Cost and time the appeal and the resubmission side by side"
                - "Write the rule for which route you will drop and when"
            - name: Lawful development certificate for an existing use
              description: |-
                ## Purpose
                Where a building or use has existed long enough to become immune from enforcement, or where you want certainty that a proposal does not need permission, a lawful development certificate can lock in value. It depends entirely on evidence, so building a dated file of documents and statements before applying is the work that matters.

                ## Milestones
                1. The time periods that apply in your jurisdiction confirmed with your adviser.
                2. Dated evidence gathered: bills, photographs, tenancy records, sworn statements.
                3. Gaps in the evidence identified and filled where possible.
                4. The application submitted with an indexed evidence bundle.

                ## Notes
                The burden of proof is usually on the applicant. Thin or contradictory evidence is the main reason these applications fail.
              priority: low
              frontmatter:
                mode: research
                output_kind: deliverable
                success_criteria: "A lawful development certificate application submitted with an indexed, dated evidence bundle covering the full required period."
                cadence: one-shot
                effort_hours_estimate: "10"
              tasks:
                - "Ask your adviser which time period applies to the use or building"
                - "Collect dated bills, photos and tenancy records for the period"
                - "Ask people with knowledge of the site for signed statements"
                - "Index the evidence bundle by date before submitting"
---

# Planning Permission Applications

Planning permission is where most of a scheme's value is made or lost, and it rewards developers who treat the application as a managed project rather than a form sent off and hoped for. This area is for founders and small developers taking their own schemes through planning, and for small businesses applying for their own premises. It starts with the site's planning history, the policies that apply, the right application type, a budget and a programme, then builds the recurring machinery of trackers, consultee logs, condition and obligation registers, moves through the skills of reading officer reports and writing statements, the decisions that come up mid-application, the dated moments from pre-application meeting to committee night, situations such as change of use or heritage sites, and the specialist work of appeals, impact assessments and protecting a permission once granted.

The rhythms are a weekly tracker update during determination, monthly reads of committee agendas and appeal decisions, monthly checks of conditions, obligations and the risk register, and quarterly reviews of permission expiry dates and the whole planning pipeline. The Risk register, Operational checklist, Vendor, Meeting notes and Compliance control templates suit the risk, validation, consultant, case officer and obligations projects. None of this is legal or planning advice: confirm procedure, deadlines and policy readings with a qualified planning consultant or solicitor in your jurisdiction. Installing adds all 50 projects as active, so archive the ones that are not for you yet.
