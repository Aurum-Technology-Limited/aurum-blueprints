---
id: strategy-leadership.public-sector-leadership
name: Public Sector Leadership
description: "Leading in government and public services: clear accountability lines, a working rhythm with ministers or elected members, budgets kept within the rules, scrutiny prepared for and services improved on constrained money."
category: business
version: 1.0.0
tags: [strategy-leadership, public-sector-leadership, manager, enterprise, government, public-services, accountability, public-finance]
author: Aurum Technology
starter_structure:
  templates:
    - risk-register
    - vendor
    - meeting-notes
    - metrics-log
    - onboarding-30-60-90
  pillars:
    - name: Strategy & Leadership
      emoji: "♟️"
      description: "Setting direction and leading people toward it: strategy and planning cycles, objectives and key results, the executive team, decision-making, culture, change programmes and the board."
      pillarFrontmatter:
        review_cadence: quarterly
      areas:
        - name: Public Sector Leadership
          description: "Leading in government or public services, working with political direction, public accountability and constrained budgets."
          projects:
            - name: Accountability map for your public sector role
              description: |-
                ## Purpose
                Public sector leaders usually answer to several masters at once: a minister or elected members, a permanent head or chief executive, an audit body, a scrutiny committee, an ombudsman and sometimes a regulator. Drawing those lines on one page, with what each can ask of you and how, stops you being surprised by a request you were always obliged to meet and shows where the lines conflict.

                ## Milestones
                1. One page listing every person or body you answer to, with the legal or constitutional basis for each line.
                2. For each line, a note of what they can require: information, attendance, a decision, a report or a correction.
                3. The two or three points where lines could pull against each other marked, with how conflicts are normally resolved.
                4. The map checked with your line manager or the governance lead and kept with your role papers.

                ## Notes
                Include the bodies you rarely hear from, such as the information commissioner or the ombudsman. They tend to matter on the worst day of the year.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: research
                output_kind: artifact
                success_criteria: "A one-page accountability map naming every body you answer to and what each can require, checked by your line manager or governance lead."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "List every person and body you have answered to in the last twelve months"
                - "Find the document that creates each line: statute, framework, delegation or code"
                - "Note what each one can require of you and how quickly"
                - "Walk your line manager through the map and record their corrections"
                - "Refresh the accountability map after any change of role or structure @recurring(yearly)"
            - name: Statutory duties and delegated authority register
              description: |-
                ## Purpose
                Delegated authority sets out what you may sign, spend, approve or decide in your own name, and statutory duties are the things the law says your service must do whatever the budget. Most leaders inherit both in scattered documents and learn the limits by breaching them. A single register, with the source of each power and duty, makes it obvious when a decision needs to go up, sideways or to elected members.

                ## Milestones
                1. Your scheme of delegation, financial limits and any personal letters of delegation gathered in one place.
                2. A register listing each power you hold, its limit and the document it comes from.
                3. The statutory duties your service carries listed, with the legislation behind each and who monitors compliance.
                4. Any gap or ambiguity between powers held and duties owed raised with the monitoring officer, legal team or governance lead.
                5. Onward delegations to your own managers written down and signed.

                ## Notes
                If your financial limit is unclear, treat it as the lower of the plausible readings until it is confirmed in writing.
              priority: high
              deadlineOffsetDays: 45
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A register of every delegated power and statutory duty you hold, each with its source document, and signed onward delegations for your managers."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Ask the governance team for the current scheme of delegation and your letter of delegation"
                - "List each financial and decision limit with the page it comes from"
                - "List the statutory duties your service must meet and the legislation behind each"
                - "Write and sign onward delegations for each of your direct reports"
                - "Check the register against the latest scheme of delegation @recurring(yearly)"
            - name: Declarations of interest, gifts and hospitality record
              description: |-
                ## Purpose
                Senior public servants are held to codes of conduct that cover outside interests, shareholdings, family links to suppliers, gifts, hospitality and, in many services, political activity. A conflict that was declared is a non-event; the same conflict found later by a journalist or an auditor is a story. Getting your declarations complete and current now costs an hour and removes a whole category of personal risk.

                ## Milestones
                1. The code of conduct and declarations policy that apply to your grade read and noted.
                2. Interests, directorships, shareholdings and close family links to the organisation's suppliers or regulated parties declared.
                3. A personal log started for every gift or hospitality offer, accepted or declined.
                4. Any restrictions on your political activity or outside work understood and noted.

                ## Notes
                When unsure whether something counts, declare it. Declaring too much is never a disciplinary matter.
              priority: high
              deadlineOffsetDays: 14
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A complete, current declaration of interests lodged with the organisation and a personal gifts and hospitality log in use."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Find the code of conduct and declarations policy for your grade"
                - "List every interest, directorship and family link that could look like a conflict"
                - "Submit your declaration of interests to the register holder"
                - "Start a log of gifts and hospitality offered, with the decision on each"
                - "Review and resubmit your declarations of interest @recurring(yearly)"
            - name: Working agreement with your minister or lead member
              description: |-
                ## Purpose
                Ministers, mayors and lead councillors set direction, while officials advise, implement and keep the organisation within the law. When that split is never discussed, each side fills the gap with assumptions and the relationship sours over small things like who speaks to the press or how much detail goes in a briefing. A short, explicit conversation about priorities, briefing style and red lines in the first weeks makes the next two years easier.

                ## Milestones
                1. The politician's top three priorities for your area, in their own words, written down.
                2. Their preferred briefing format, length and timing agreed.
                3. The boundary between political and official roles discussed, including press, party and constituency matters.
                4. A note of the agreement shared with the private office or member support team.

                ## Notes
                Keep the note factual and neutral. It may be disclosed later, and it should read well to the next minister too.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A written note of the minister's or lead member's priorities, briefing preferences and role boundaries, agreed with their office."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Read the politician's manifesto pledges, speeches and recent statements on your area"
                - "Draft five questions on priorities, briefing style and boundaries"
                - "Hold the conversation and write up what was agreed the same day"
                - "Share the note with the private office and check they agree with it"
            - name: Budget baseline and spending control rules
              description: |-
                ## Purpose
                Unlike a private budget, voted public money comes with its own rules: funds voted for one purpose cannot simply be moved to another, unspent money may be lost at year end, capital and revenue are kept apart and some spending needs central approval whatever its size. Knowing your budget lines and the control rules around them before you commit anything protects you from the commonest way senior officials end up in an audit report.

                ## Milestones
                1. Your budget broken into its main lines, with the split between pay, non-pay, capital and income.
                2. The rules on moving money between lines, carrying it forward and committing it before approval written down.
                3. Spending categories that need central or political sign-off listed, such as consultancy, advertising or new posts.
                4. A briefing from the finance business partner completed and its key points noted.
                5. The year-end timetable for orders, accruals and returns in your calendar.

                ## Notes
                Ask specifically about novel or contentious spending. Many systems require extra approval for anything that could set a precedent, whatever the amount.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A written summary of your budget lines, the rules on moving and carrying money, the spend needing extra approval and the year-end dates, checked by finance."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Book an hour with your finance business partner to walk through the budget"
                - "Ask which rules govern moving money between budget lines"
                - "List the spending categories that need central or political approval"
                - "Put the year-end ordering and accrual deadlines in your calendar"
            - name: Political commitments tracker for your services
              description: |-
                ## Purpose
                Manifesto pledges, a programme for government, a council plan or a mayor's promises become the yardstick your organisation is judged by, often with dates attached in public. Tracking each commitment that touches your services, with an owner and an honest status, lets you warn early when one is slipping and avoids the minister learning it from a newspaper.

                ## Milestones
                1. Every published commitment touching your services listed with its source and any promised date.
                2. Each commitment assigned to a named owner in your team.
                3. A plain status for each, with the evidence behind it.
                4. Commitments at risk raised with the political office before the date passes.
              priority: medium
              deadlineOffsetDays: 60
              frontmatter:
                mode: operating
                output_kind: artifact
                success_criteria: "A tracker listing every published commitment on your services with an owner and evidenced status, updated monthly for six months."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Collect the manifesto, programme or council plan that applies to your services"
                - "Pull out each commitment that touches your area and its promised date"
                - "Name an owner for each commitment and agree how they report status"
                - "Update the status of every commitment with your owners @recurring(monthly:5)"
            - name: Service performance baseline for your directorate
              description: |-
                ## Purpose
                Before anyone can say whether services are improving, there has to be an agreed picture of where they stand: waiting times, backlogs, satisfaction, cost per case, statutory targets met or missed. Assembling that baseline in the first two months, with the definitions written down, gives you a fair starting line and protects you from being blamed for problems you inherited.

                ## Milestones
                1. Six to ten measures chosen that cover demand, timeliness, quality, cost and user experience.
                2. Each measure defined, with its data source, owner and any statutory target.
                3. Twelve months of history gathered where it exists.
                4. A one-page baseline signed off by your line manager and filed.

                ## Notes
                Start from the **Metrics log** template. Write the definition before the number. Many public sector figures change meaning when someone quietly changes what counts.
              priority: medium
              deadlineOffsetDays: 60
              frontmatter:
                mode: research
                output_kind: artifact
                success_criteria: "A signed-off one-page baseline of six to ten defined service measures, each with twelve months of history where available."
                cadence: one-shot
                effort_hours_estimate: "10"
              tasks:
                - "Ask each service head for the three figures they would use to judge their own service"
                - "Write a definition and data source for each chosen measure"
                - "Gather twelve months of history into a metrics log"
                - "Agree the baseline with your line manager and file the signed copy"
            - name: Principal risks register for a public body
              description: |-
                ## Purpose
                Risk in public services covers more than money: harm to the people you serve, a breach of a statutory duty, a data loss, a failed contractor, loss of public confidence. A short register of the principal risks, scored on an agreed scale with named owners and real controls, is what audit committees and accounting officers expect to see and what lets you discuss risk appetite with politicians in concrete terms.

                ## Milestones
                1. No more than twelve principal risks written as cause, event and consequence.
                2. Each risk scored for likelihood and impact on the organisation's agreed scale.
                3. A named owner, current controls and planned actions recorded for every risk.
                4. The risk appetite for each category discussed with your management board.
                5. The register reviewed by the audit and risk committee.

                ## Notes
                Start from the **Risk register** template. A register with forty risks is usually a list of worries; twelve well-written ones get discussed.
              priority: high
              frontmatter:
                mode: operating
                output_kind: artifact
                success_criteria: "A register of no more than twelve principal risks, each with owner, controls and actions, reviewed by the audit and risk committee and updated each quarter."
                cadence: rolling
              tasks:
                - "Ask each director for the one risk that keeps them awake"
                - "Write each principal risk as cause, event and consequence"
                - "Agree scores, owners and controls at a management board meeting"
                - "Review the principal risks and their actions with each owner @recurring(quarterly)"
            - name: Records, transparency and freedom of information duties check
              description: |-
                ## Purpose
                Almost everything a public leader writes, including messages on personal phones in many jurisdictions, can be requested under freedom of information law, called by an inquiry or audited later. Understanding what your organisation must publish, keep and disclose, and setting your own habits to match, protects both the public record and you.

                ## Milestones
                1. The organisation's records management and retention policy read, with the rules for your own messages noted.
                2. The publication scheme or proactive disclosure duties for your area checked.
                3. Your use of messaging apps, personal devices and private email brought within policy.
                4. A clear route agreed for passing freedom of information requests to the information team on day one.

                ## Notes
                Write every email as if it will be read aloud at a committee. That is not paranoia; it is the job.
              priority: medium
              deadlineOffsetDays: 45
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A note of your records, retention and disclosure duties, with your own message handling brought within policy and confirmed with the information team."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Read the records management and retention policy for your organisation"
                - "Check how the policy treats messaging apps and personal devices"
                - "Move any official business off personal accounts and into the record"
                - "Agree with the information team how requests reach them on the day they arrive"
            - name: Weekly briefing rhythm with the political office
              description: |-
                ## Purpose
                Ministers and lead members make decisions in short gaps between votes, constituency work and media, so officials who brief in long, unpredictable bursts get less time and worse decisions. A fixed weekly slot, with a one-page note of decisions needed, risks emerging and news coming, gives the politician a predictable view of your area and gives you a place to raise problems early.

                ## Milestones
                1. A standing weekly slot agreed with the private office or member support.
                2. A one-page weekly note format covering decisions needed, emerging risks and forthcoming announcements.
                3. Decisions from each meeting recorded and sent back within one working day.
                4. Twelve consecutive weekly briefings held or replaced by a written note.

                ## Notes
                Start from the **Meeting notes** template for the decision record. Keep political strategy out of official notes; that belongs to the special adviser or party.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Twelve consecutive weekly briefings or notes delivered, each followed by a recorded list of decisions within one working day."
                cadence: rolling
              tasks:
                - "Agree a standing weekly slot with the private office"
                - "Design a one-page weekly note with decisions, risks and news"
                - "Prepare the weekly note and send it a day before the slot @recurring(weekly:mon)"
                - "Send the decisions record back within one working day of each briefing"
            - name: Ministerial and member correspondence pipeline
              description: |-
                ## Purpose
                Letters from MPs, councillors and the public about individual cases are judged on speed and accuracy, and a backlog quickly becomes a political complaint in its own right. Running correspondence as a pipeline, with a target turnaround, a quality check and a weekly look at what is overdue, turns it from a constant irritant into a service people notice.

                ## Milestones
                1. The turnaround target for each type of correspondence confirmed and published to the team.
                2. A single log showing every item, its owner, due date and status.
                3. A quality check in place for replies going out in the politician's name.
                4. Overdue items reduced below an agreed level for eight consecutive weeks.
              priority: medium
              frontmatter:
                mode: service
                output_kind: habit
                success_criteria: "Eight consecutive weeks with overdue correspondence below the agreed level and every reply in the politician's name quality checked."
                cadence: rolling
              tasks:
                - "Confirm the target turnaround for each correspondence type with the private office"
                - "Set up one log with owner, due date and status for every item"
                - "Agree who checks replies drafted for the politician's signature"
                - "Review overdue correspondence and reassign stuck items @recurring(weekly:thu)"
            - name: Monthly budget monitoring and forecast outturn
              description: |-
                ## Purpose
                Overspending draws criticism of public bodies, and so, almost as often, does underspending that loses money at year end. A monthly forecast of where each budget line will finish, with reasons for any variance and actions agreed, lets you move money within the rules in good time rather than discovering the problem in the final quarter.

                ## Milestones
                1. A monthly forecast outturn for every main budget line, prepared with finance.
                2. Variances above an agreed threshold explained in one sentence each.
                3. Corrective actions or approved virements recorded with dates.
                4. Year-end outturn within the tolerance agreed with the finance director.

                ## Notes
                Ask budget holders for a forecast, not just actuals to date. Spend in public services is lumpy, and the last quarter often carries a third of the year.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Twelve monthly forecasts produced with variances explained and a year-end outturn within the tolerance agreed with the finance director."
                cadence: rolling
              tasks:
                - "Agree the variance threshold that needs a written explanation"
                - "Ask each budget holder for a forecast to year end, not just spend to date"
                - "Review the forecast outturn and agree actions with finance @recurring(monthly:12)"
                - "Record any approved virement with its approval reference"
            - name: Parliamentary and council questions process
              description: |-
                ## Purpose
                Written and oral questions from legislators or councillors are answered on the public record, usually against fixed deadlines, and an inaccurate answer may have to be corrected formally. A clear process for drafting, fact-checking and clearing answers, with an owner for each, keeps the politician safe and the organisation credible.

                ## Milestones
                1. The deadlines and clearance route for each type of question written down.
                2. A small pool of trained drafters across your teams.
                3. A fact-check step that confirms every figure against its source before clearance.
                4. A monthly look-back on timeliness and any corrections needed.

                ## Notes
                If an answer cannot be complete in time, say what is known and offer to write with the rest. Never guess a figure to meet a deadline.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every question answered by its deadline for three months, with every figure checked against a named source and no formal corrections needed."
                cadence: rolling
              tasks:
                - "Get the deadlines and clearance route for each type of question from the private office"
                - "Train two drafters in each team on the house style for answers"
                - "Add a figure check against named sources before clearance"
                - "Review the month's answers for timeliness and accuracy @recurring(monthly:25)"
            - name: Quarterly performance report to the board or committee
              description: |-
                ## Purpose
                Boards, scrutiny committees and cabinet members need a regular, honest view of service performance against plan, and they lose trust fast in reports that are all green until something fails in public. A quarterly report with the same measures each time, short commentary and the actions behind any red, becomes the place where problems surface early and support is asked for.

                ## Milestones
                1. A fixed set of measures agreed with the board or committee chair.
                2. A report format with trend, target, status and one paragraph of commentary per measure.
                3. Rating rules written down so amber and red mean the same thing each quarter.
                4. Four consecutive quarterly reports delivered on the committee timetable.

                ## Notes
                Report the measure you agreed even when it has turned bad. Swapping measures after a bad quarter is the fastest way to lose a committee.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Four consecutive quarterly performance reports delivered on time, using the same agreed measures and written rating rules."
                cadence: rolling
              tasks:
                - "Agree the measures and reporting dates with the committee chair"
                - "Write the rules for green, amber and red ratings"
                - "Prepare the quarterly performance report and commentary @recurring(quarterly)"
                - "Note the committee's questions and answer any left open in writing"
            - name: Audit recommendations tracker
              description: |-
                ## Purpose
                Internal auditors and the national or local audit body issue recommendations with agreed dates, and audit committees follow up the ones that slip. A tracker that shows every open recommendation, its owner and evidence of completion keeps you ahead of the follow-up report and stops old findings resurfacing as repeat findings, which carry far more weight.

                ## Milestones
                1. Every open internal and external audit recommendation for your area in one tracker.
                2. An owner, an agreed date and the evidence needed for closure recorded for each.
                3. Overdue recommendations either completed or formally re-dated with the auditor's agreement.
                4. No repeat findings in the next audit cycle.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A tracker holding every open audit recommendation with owner, date and closure evidence, and no unagreed overdue items at the next audit committee."
                cadence: rolling
              tasks:
                - "Ask internal audit for the list of open recommendations in your area"
                - "Record the owner, agreed date and closure evidence for each"
                - "Check progress on open audit recommendations with each owner @recurring(monthly:18)"
                - "Send closure evidence to the auditor as soon as each item is done"
            - name: Complaints and ombudsman learning review
              description: |-
                ## Purpose
                Complaints and ombudsman findings are the cheapest evidence a public service ever gets about where it fails people, yet most organisations treat them as cases to close. A quarterly review of themes, upheld findings and the changes made in response turns complaints into service improvement and shows the ombudsman that recommendations are acted on.

                ## Milestones
                1. Complaint categories agreed so themes can be counted the same way each quarter.
                2. A quarterly summary of volumes, themes, response times and upheld cases.
                3. Every ombudsman recommendation tracked to completion.
                4. At least two service changes made in a year as a direct result of complaints.

                ## Notes
                Read a handful of complaints in full each quarter, not just the summary. The detail is where the fix is.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Four quarterly complaint reviews held, every ombudsman recommendation closed and at least two service changes traced to complaint themes."
                cadence: rolling
              tasks:
                - "Agree a short list of complaint categories with the complaints team"
                - "Read five complaints in full from the last quarter"
                - "Review complaint themes, upheld cases and ombudsman findings @recurring(quarterly)"
                - "Name an owner for each service change agreed at the review"
            - name: Trade union partnership forum
              description: |-
                ## Purpose
                Trade union membership is high across most public sector workforces, and changes to rotas, structures, pay or working practices usually carry a formal duty to consult. A regular forum with recognised unions, run in good faith with papers in advance and actions recorded, makes difficult changes possible and keeps disagreements out of tribunals and the press.

                ## Milestones
                1. The recognition agreement and consultation duties read and the key obligations noted.
                2. A monthly forum with agreed terms of reference, papers circulated in advance.
                3. Actions and agreements recorded and circulated within three working days.
                4. Every significant workforce change in the year brought to the forum before decision.

                ## Notes
                Start from the **Meeting notes** template. Consult on proposals while they can still change. Consultation on a decided outcome is not consultation.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A monthly union forum held for a year with recorded actions, and every significant workforce change consulted on before decision."
                cadence: rolling
              tasks:
                - "Read the union recognition agreement and note your consultation duties"
                - "Agree terms of reference for the forum with union representatives"
                - "Hold the partnership forum and circulate the actions @recurring(monthly:20)"
                - "List workforce changes planned for the next six months to bring to the forum"
            - name: Outsourced service contract reviews
              description: |-
                ## Purpose
                When cleaning, care, IT, maintenance or whole services are delivered by contractors, the public body remains accountable for the outcome. Quarterly reviews of each significant contract against its performance measures, with evidence rather than the supplier's own summary, catch failing contracts before they become service failures or emergency retenders.

                ## Milestones
                1. A list of every contract above an agreed value in your area, with owner and expiry date.
                2. Performance measures and evidence sources confirmed for each contract.
                3. A quarterly review held for each significant contract with actions recorded.
                4. Contracts expiring within eighteen months flagged for a decision on renewal or retender.

                ## Notes
                Start from the **Vendor** template for each major supplier. Visit the service, not only the supplier's office.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every contract above the agreed value reviewed quarterly against its measures for a year, with expiries due inside eighteen months flagged for decision."
                cadence: rolling
              tasks:
                - "Ask procurement for every contract in your area above the agreed value"
                - "Confirm the performance measures and evidence for each contract"
                - "Review each significant contract against its measures with the contract manager @recurring(quarterly)"
                - "Flag contracts expiring within eighteen months for a renewal or retender decision"
            - name: Annual business plan aligned to the spending settlement
              description: |-
                ## Purpose
                Every year the budget settles late, priorities shift and teams carry on with last year's plan until someone notices. A business plan written once the settlement is known, linking each priority to money, people and measures, gives managers something real to plan against and gives the politician a clear record of what the year will and will not deliver.

                ## Milestones
                1. The settlement figures and political priorities for the year confirmed.
                2. Priorities for the year listed with the budget, staff and measures attached to each.
                3. Work that will stop or slow written down explicitly.
                4. The plan agreed by the management board and noted by the minister or lead member.
                5. Every team's plan traced back to a priority in the business plan.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: deliverable
                success_criteria: "An annual business plan linking each priority to budget, staff and measures, agreed by the board and noted by the politician within two months of the settlement."
                cadence: cyclic
              tasks:
                - "Collect the settlement figures and confirmed priorities for the year"
                - "Draft the annual business plan with money, staff and measures per priority @recurring(yearly)"
                - "List the work that will stop or slow and agree it with the board"
                - "Ask each team leader to show how their plan links to a priority"
            - name: How the public budget and estimates cycle works
              description: |-
                ## Purpose
                Government money moves through a cycle of spending reviews, annual estimates or budget votes, in-year revisions and audited accounts, and each stage has its own deadlines and rules. Leaders who understand the cycle bid at the right moment, avoid commitments the legislature has not voted and can explain to staff why money appears or disappears when it does.

                ## Milestones
                1. The stages of your government's or council's budget cycle drawn on one page with typical months.
                2. The points where you can bid for or lose money marked.
                3. The difference between capital and revenue, and between budget and cash, explained in your own words.
                4. Questions resolved with a finance colleague and the page kept for your team.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A one-page diagram of your organisation's budget cycle, with bidding points marked, checked by a finance colleague."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Find your finance ministry's or council's published budget timetable"
                - "Draw the cycle on one page with the usual months for each stage"
                - "Mark the points where you can bid for money or must give it back"
                - "Check the diagram with a finance colleague and share it with your team"
            - name: Writing decision submissions for ministers or councillors
              description: |-
                ## Purpose
                A good submission lets a busy politician make a lawful, well-informed decision in ten minutes: the issue, the options, the recommendation, the risks, the cost and how it will play publicly. Poor submissions bury the choice or offer only one real option, and they come back or, worse, lead to decisions that unravel. Practising the form on real cases is the single most useful drafting skill in government.

                ## Milestones
                1. The house format for submissions and the clearance route understood.
                2. Three recent submissions that worked well studied for structure and tone.
                3. Two submissions drafted on live issues with genuinely different options and costs.
                4. Feedback from the private office or a senior colleague received and applied.

                ## Notes
                Put the recommendation and the decision needed in the first paragraph. Always include the legal, equality and financial implications, even if each is one line.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Two submissions on live issues drafted in house format, each with at least two real options, cleared and returned with feedback applied."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "Ask the private office for three recent submissions they rated as good"
                - "Note how each one sets out the decision, options and implications"
                - "Draft a submission on a live issue with at least two real options"
                - "Ask a senior colleague to critique the draft before clearance"
            - name: Building a public sector business case
              description: |-
                ## Purpose
                Spending bids, new services and major purchases in government usually need a business case that shows the strategic need, compares options on value for money, sets out the commercial route, proves affordability and explains how it will be managed. Many administrations use a five-part model of this kind. Learning to build one on a modest proposal first makes the big bids far less painful.

                ## Milestones
                1. The business case guidance your organisation follows read and its required sections listed.
                2. A real proposal chosen and a long list of options, including doing the minimum, drafted.
                3. A short list appraised for costs, benefits and risks over the proposal's life.
                4. The case reviewed by finance and procurement and submitted for approval.

                ## Notes
                Include a genuine do-minimum option. Approvers rightly distrust cases where the only alternative to the preferred option is doing nothing at all.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: artifact
                success_criteria: "A business case for a real proposal, with a do-minimum option and appraised short list, reviewed by finance and procurement and submitted for approval."
                cadence: phased
                effort_hours_estimate: "20"
              tasks:
                - "Find the business case guidance your organisation follows"
                - "Choose a modest live proposal to write a case for"
                - "Ask the agent to draft a long list of options from your problem statement"
                - "Appraise the short list with finance on cost, benefit and risk"
                - "Submit the case and note the approver's questions"
            - name: Public procurement rules for senior leaders
              description: |-
                ## Purpose
                Procurement law and internal rules decide how suppliers are chosen, and breaches can void contracts, trigger legal challenges from losing bidders and end careers. Senior leaders rarely run tenders themselves, but they set requirements, talk to suppliers and sign awards, so they need to know where the lines are, especially on early supplier conversations and conflicts.

                ## Milestones
                1. The thresholds and procedures that apply in your organisation summarised on one page.
                2. The rules on talking to suppliers before and during a tender understood.
                3. Your role in approving awards and handling challenges confirmed with procurement.
                4. A personal checklist for any conversation with a potential supplier written.

                ## Notes
                If a supplier contacts you during a live tender, do not discuss it. Pass the contact to the procurement lead and note it.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A one-page summary of procurement thresholds and supplier contact rules, checked by the head of procurement, and a personal supplier contact checklist in use."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Ask the head of procurement for a briefing on thresholds and procedures"
                - "Write down the rules on supplier contact before and during tenders"
                - "Confirm what you personally approve and sign in the award process"
                - "Draft a checklist for any conversation with a potential supplier"
            - name: Evidence and evaluation standards for policy
              description: |-
                ## Purpose
                Programmes funded with public money are increasingly expected to show what they achieved, and the evaluation has to be designed before the programme starts or the counterfactual is lost. Many governments publish guidance on evaluation methods. Learning the basics of logic models, baselines, comparison groups and proportionate evaluation lets you commission work that answers the question ministers will ask.

                ## Milestones
                1. Your government's evaluation guidance or an equivalent read and summarised.
                2. A logic model drawn for one live programme: inputs, activities, outputs, outcomes and assumptions.
                3. The evaluation questions and a proportionate method agreed with an analyst.
                4. Baseline data collection started before the programme goes live.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A logic model and agreed evaluation plan for one live programme, with baseline data collection started before launch."
                cadence: phased
                effort_hours_estimate: "12"
              tasks:
                - "Find your government's published guidance on evaluating programmes"
                - "Draw a logic model for one programme you are responsible for"
                - "Agree the evaluation questions and method with an analyst"
                - "Start collecting baseline data before the programme goes live"
            - name: Equality impact assessment in practice
              description: |-
                ## Purpose
                Many public bodies carry a legal duty to consider the effect of decisions on people with protected characteristics, and decisions taken without evidence of that consideration can be overturned by the courts. Doing an impact assessment early, on real data and with affected groups, often improves the policy itself as well as protecting it.

                ## Milestones
                1. The equality duty and your organisation's assessment template understood, with legal advice on scope where needed.
                2. One live decision assessed using real data on who uses the service.
                3. People from affected groups or their representatives consulted.
                4. Mitigations recorded and the assessment attached to the decision paper.

                ## Notes
                The assessment has to inform the decision, not justify it afterwards. Start it while options are still open.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: artifact
                success_criteria: "An equality impact assessment for one live decision, using service data and input from affected groups, attached to the decision paper before it was taken."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Read your organisation's equality impact assessment guidance and template"
                - "Choose a live decision that will affect service users"
                - "Gather data on who uses the service and who could be affected"
                - "Meet representatives of the affected groups and record their views"
                - "Attach the assessment and mitigations to the decision paper"
            - name: Political awareness without partisanship
              description: |-
                ## Purpose
                Senior officials need to read the political weather: what will play badly in a marginal seat, which backbenchers or opposition members care about an issue, how a coalition partner will react. Doing that without becoming partisan is a learned skill, and losing the balance either way damages trust with the next administration or the current one.

                ## Milestones
                1. The impartiality rules in your code of conduct read and their practical limits noted.
                2. A map of the political interests around your area: parties, committees, campaign groups and media.
                3. Advice on handling sensitive issues sought from a respected senior colleague.
                4. Your own rules for social media, events and private conversations written down.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A written map of political interests in your area and a personal set of impartiality rules, discussed with a senior colleague."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Reread the impartiality section of your code of conduct"
                - "Map the parties, committees and groups with a stake in your area"
                - "Ask a respected senior colleague how they keep the balance"
                - "Write your own rules for social media and private conversations"
            - name: Public consultation that stands up to challenge
              description: |-
                ## Purpose
                Consultations on service closures, charges or policy changes are one of the commonest grounds for legal challenge against public bodies, usually because they were too late, too narrow or ignored what people said. Designing one properly, with real options, enough time, accessible material and a published response, protects the decision and often improves it.

                ## Milestones
                1. Legal and policy advice taken on whether consultation is required and on what.
                2. A consultation document with genuine options, plain language and accessible formats.
                3. A consultation period and reach agreed that suits the people affected.
                4. Responses analysed and a published response explaining how they shaped the decision.

                ## Notes
                Consult while proposals are still formative. A consultation launched after contracts are signed invites a challenge.
              priority: medium
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "A consultation run with real options and accessible material, followed by a published response showing how views shaped the decision."
                cadence: phased
                effort_hours_estimate: "30"
              tasks:
                - "Ask the legal team whether consultation is required and what it must cover"
                - "Draft the consultation document with at least two genuine options"
                - "Agree the period, formats and channels with the communications team"
                - "Publish a response showing how the views received changed the decision"
            - name: Savings plan for a flat or falling budget
              description: |-
                ## Purpose
                Budgets that stay flat while pay, inflation and demand rise mean real cuts, and salami-slicing every line by the same percentage usually damages the services that matter most. A savings plan that sorts spending into statutory, essential and discretionary, tests options against impact on people and is agreed politically gives you defensible choices instead of a crisis in March.

                ## Milestones
                1. Spending classified as statutory, essential or discretionary with the evidence for each.
                2. A long list of savings options costed and assessed for impact on service users and staff.
                3. Equality and legal implications assessed for each shortlisted option.
                4. A savings package agreed by the politician and the management board, with owners and dates.

                ## Notes
                Show the politician the options you do not recommend as well as the ones you do. They are accountable for the choice and need to see it.
              priority: high
              deadlineOffsetDays: 120
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A savings package meeting the required total, with costed options, impact assessments and owners, agreed by the politician and management board."
                cadence: phased
                effort_hours_estimate: "40"
              tasks:
                - "Confirm the savings total and deadline with the finance director"
                - "Classify each budget line as statutory, essential or discretionary"
                - "Ask service heads for costed options with their impact on users"
                - "Run impact assessments on the shortlisted options"
                - "Present the options and recommendation to the politician"
            - name: In-house, outsource or shared service decision
              description: |-
                ## Purpose
                Whether a service is run in-house, contracted out, shared with another public body or handed to a community organisation is one of the largest choices a public leader makes, and it is often taken on ideology or habit. A structured comparison on cost, quality, control, resilience, workforce effects and exit makes the choice defensible and the transition planned.

                ## Milestones
                1. The service's current cost, performance and workforce documented as the baseline.
                2. At least three delivery models compared on agreed criteria including cost of exit.
                3. Workforce transfer and pension implications checked with human resources and legal advisers.
                4. A recommendation with its reasons presented to decision-makers and the decision recorded.

                ## Notes
                Cost the client side honestly. Outsourced services still need people to specify, monitor and manage the contract.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A recorded decision on the delivery model for one service, based on a comparison of at least three models on agreed criteria including exit cost."
                cadence: phased
                effort_hours_estimate: "30"
              tasks:
                - "Write a baseline of the service's cost, performance and workforce"
                - "Agree comparison criteria with finance, human resources and the service head"
                - "Compare at least three delivery models against the criteria"
                - "Check transfer and pension implications with legal advisers"
                - "Present the recommendation and record the decision"
            - name: Service redesign with citizens and front-line staff
              description: |-
                ## Purpose
                Public services are often designed around the organisation's departments rather than the person trying to get help, which produces repeat contacts, failure demand and complaints. Redesigning one service end to end with people who use it and staff who deliver it, testing small changes before rolling them out, cuts cost and frustration at the same time.

                ## Milestones
                1. One service chosen and its current user route mapped from first contact to resolution.
                2. Failure demand measured: contacts caused by delays, errors or unclear information.
                3. Three changes tested with real users and front-line staff on a small scale.
                4. The changes that worked adopted and the effect on demand and satisfaction measured.
              priority: medium
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "One service redesigned with at least three tested changes adopted and a measured fall in failure demand."
                cadence: phased
                effort_hours_estimate: "40"
              tasks:
                - "Choose one service with high complaint or repeat contact levels"
                - "Shadow front-line staff for a morning on that service"
                - "Map the route from first contact to resolution with five users"
                - "Test three small changes and measure their effect"
            - name: Proportionate internal approvals and controls review
              description: |-
                ## Purpose
                Controls in public bodies tend to accumulate after every scandal and are rarely removed, so a small purchase can need five signatures while a large risk goes unchecked. Reviewing the approvals your teams need, keeping those that genuinely protect public money and simplifying the rest, frees time without weakening accountability, provided audit is involved from the start.

                ## Milestones
                1. The ten most common approvals your teams seek listed with the time each takes.
                2. The original purpose and risk behind each control identified.
                3. Proposals to simplify, combine or delegate agreed with internal audit and finance.
                4. Changes made to the scheme of delegation or procedures and communicated to staff.
              priority: low
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "At least three internal approvals simplified or delegated with internal audit agreement, and the change reflected in written procedures."
                cadence: one-shot
                effort_hours_estimate: "15"
              tasks:
                - "Ask managers which approvals cost them the most time"
                - "Find out why each control was introduced and what risk it covers"
                - "Agree simplification proposals with internal audit and finance"
                - "Update the written procedures and tell staff what has changed"
            - name: Data sharing agreement between public bodies
              description: |-
                ## Purpose
                Many public service failures trace back to one agency knowing something another did not, yet data sharing stalls on uncertainty about law and responsibility. A formal agreement that sets out the lawful basis, purpose, data, security and review, drafted with information governance and legal advice, lets front-line staff share what they need with confidence.

                ## Milestones
                1. The specific purpose and the data needed for it written down by both bodies.
                2. The lawful basis and any privacy impact assessment completed with information governance advice.
                3. A data sharing agreement signed by the senior owners in each body.
                4. Front-line staff briefed and a review date set.

                ## Notes
                Share the minimum data needed for the stated purpose. Agreements that try to cover everything usually stall at legal review.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A signed data sharing agreement between two public bodies, with a completed privacy impact assessment and front-line staff briefed."
                cadence: phased
                effort_hours_estimate: "15"
              tasks:
                - "Write a one-paragraph purpose for sharing and the data it needs"
                - "Ask the information governance lead for the privacy impact assessment process"
                - "Draft the agreement with the other body's data protection officer"
                - "Get both senior owners to sign and brief front-line staff"
            - name: Grant scheme design with fraud controls
              description: |-
                ## Purpose
                Grant schemes put public money directly into the hands of businesses, charities or individuals, and schemes launched quickly without eligibility checks are a known target for fraud. Designing the scheme with clear criteria, proportionate checks, a fair scoring process and post-award monitoring protects both the money and the reputation of the programme.

                ## Milestones
                1. Objectives, eligibility criteria and the outcomes to be funded written down.
                2. A fraud risk assessment completed with the counter-fraud team before launch.
                3. A transparent scoring and decision process documented, including conflicts of interest.
                4. Monitoring and clawback terms written into the grant agreement.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A grant scheme launched with written eligibility criteria, a pre-launch fraud risk assessment, a documented scoring process and monitoring terms in every agreement."
                cadence: phased
                effort_hours_estimate: "25"
              tasks:
                - "Write the scheme's objectives and eligibility criteria on one page"
                - "Book a fraud risk assessment with the counter-fraud team"
                - "Document how applications will be scored and conflicts declared"
                - "Add monitoring and clawback terms to the grant agreement"
            - name: Fees and charges policy review
              description: |-
                ## Purpose
                Charges for permits, licences, parking, leisure, planning and other services raise income but are often set by inflating last year's figure, with no view of the real cost or the effect on people on low incomes. A review that compares each charge with its legal basis, true cost and concessions gives politicians a clear choice on what to recover and from whom.

                ## Milestones
                1. Every charge in your area listed with its legal basis and any statutory cap.
                2. The full cost of delivering each charged service estimated with finance.
                3. Concessions and their effect on low-income users reviewed.
                4. A recommended schedule of charges agreed through the budget process.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A schedule of charges for your area, each compared with its legal basis and full cost, agreed through the budget process."
                cadence: one-shot
                effort_hours_estimate: "15"
              tasks:
                - "List every charge in your area with its legal basis"
                - "Estimate the full cost of each charged service with finance"
                - "Review who receives concessions and what they cost"
                - "Bring the recommended schedule into the budget process"
            - name: Pre-election period conduct plan
              description: |-
                ## Purpose
                In the weeks before an election, public bodies follow conventions on what they may announce, publish or decide, known in different countries as purdah, the caretaker period or the pre-election period. Mistakes here are visible and can taint the result. Planning in advance which decisions to bring forward, which to hold and how staff should handle candidates keeps the organisation neutral.

                ## Milestones
                1. The rules and guidance that apply to your organisation for the coming election confirmed.
                2. Decisions, announcements and publications due in the period listed and each marked go ahead, bring forward or hold.
                3. Staff and communications teams briefed on handling candidates, events and social media.
                4. A named contact set for difficult cases during the period.

                ## Notes
                Routine services continue during an election. The conventions restrict new initiatives and publicity, not the day job.
              priority: high
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "Every decision and announcement due in the pre-election period classified in advance, staff briefed and no breaches of the conventions recorded."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Find the published guidance for the pre-election period that applies to you"
                - "List decisions, announcements and publications due in the period"
                - "Mark each one go ahead, bring forward or hold and agree it with the governance lead"
                - "Brief staff on handling candidates, visits and social media"
            - name: Incoming administration briefing after an election
              description: |-
                ## Purpose
                After an election the new or returning administration expects officials to be ready with an honest account of the state of services, the money and how the manifesto could be delivered. Preparing briefings for each plausible outcome before polling day means the first meeting is about choices rather than catching up.

                ## Milestones
                1. The main parties' published commitments on your area analysed for cost, legal route and time to deliver.
                2. A core briefing on services, budget, risks and imminent decisions prepared.
                3. Versions or annexes for each plausible outcome drafted.
                4. First meetings held and the new priorities recorded within the first two weeks.

                ## Notes
                Analyse every party's commitments with the same rigour. The briefings are a test of impartiality.
              priority: medium
              deadlineOffsetDays: 60
              frontmatter:
                mode: event
                output_kind: deliverable
                success_criteria: "A core briefing and an annex for each plausible election outcome ready before polling day, with new priorities recorded within two weeks of the result."
                cadence: one-shot
                effort_hours_estimate: "25"
              tasks:
                - "Collect each main party's published commitments on your area"
                - "Ask the agent to summarise each commitment's likely cost and legal route"
                - "Draft the core briefing on services, budget, risks and decisions"
                - "Prepare an annex for each plausible outcome"
            - name: Giving evidence to a scrutiny committee
              description: |-
                ## Purpose
                Appearing before a parliamentary select committee, public accounts committee or council scrutiny panel is one of the most exposed moments in a public leader's year, and a poor answer becomes the headline. Preparing with the facts, likely questions, a practice session and a clear line on what you can and cannot say makes the session a chance to explain the work rather than defend it.

                ## Milestones
                1. The committee's terms of reference, previous reports and members' interests read.
                2. A briefing pack with key facts, figures and sources on one page each.
                3. A practice session with colleagues playing committee members held.
                4. Commitments made in the session followed up in writing by the committee's deadline.

                ## Notes
                If you do not know, say so and offer to write. A wrong figure given confidently is worse than a promise to check.
              priority: medium
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A committee appearance prepared with a briefing pack and a practice session, with every follow-up promised in the session sent by the deadline."
                cadence: one-shot
                effort_hours_estimate: "15"
              tasks:
                - "Read the committee's last two reports on your area"
                - "List the twenty questions you would least like to be asked"
                - "Prepare a one-page fact sheet for each likely topic"
                - "Hold a practice session with colleagues playing committee members"
                - "Send written follow-ups by the committee's deadline"
            - name: Annual report and accounts sign-off
              description: |-
                ## Purpose
                Accounting officers and chief finance officers sign statements on governance, internal control and the regularity of spending, and the auditors give an opinion that is published. Planning the year-end with finance, reading the governance statement properly and resolving audit issues before the deadline turns signature into an informed act rather than a ritual.

                ## Milestones
                1. The year-end timetable agreed with finance and the external auditor.
                2. The draft governance statement read and checked against what you know of the year.
                3. Significant audit findings resolved or disclosed before the signing deadline.
                4. Accounts signed on time with an audit opinion received.

                ## Notes
                Read the governance statement as if you were the auditor. If something is missing that you would mention to a friend, it probably belongs in it.
              priority: high
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "Annual report and accounts signed by the statutory deadline, with the governance statement reviewed by you and significant audit issues resolved or disclosed."
                cadence: cyclic
              tasks:
                - "Ask finance for the year-end timetable and auditor milestones"
                - "Read the draft governance statement and list what is missing"
                - "Meet the external auditor to discuss significant findings before signature"
                - "Sign the accounts and note lessons for next year's close"
            - name: Spending review or budget bid submission
              description: |-
                ## Purpose
                Spending reviews and annual budget rounds are where the next few years of your services are decided, usually on a tight timetable set by the finance ministry or council treasury. A bid that shows costed demand, evidence of value, savings already found and the consequences of each funding level is far more likely to be funded than a list of pressures.

                ## Milestones
                1. The bid guidance, templates and deadlines confirmed with central finance.
                2. Demand and cost pressures quantified with their evidence.
                3. Funding scenarios set out, with what each level would and would not deliver.
                4. The bid cleared by the politician and submitted on time.
              priority: medium
              deadlineOffsetDays: 120
              frontmatter:
                mode: event
                output_kind: deliverable
                success_criteria: "A bid submitted by the deadline with quantified pressures, funding scenarios and the consequences of each, cleared by the politician."
                cadence: one-shot
                effort_hours_estimate: "40"
              tasks:
                - "Get the bid guidance, template and deadline from central finance"
                - "Quantify demand and cost pressures with evidence for each"
                - "Set out what three funding levels would and would not deliver"
                - "Clear the bid with the politician and submit it before the deadline"
            - name: Inspection or regulator visit readiness
              description: |-
                ## Purpose
                Inspectorates for schools, care, health, policing and other services publish judgements that shape public confidence and can trigger intervention. Preparing continuously, by knowing the framework, gathering evidence against it and fixing what you find, works far better than a scramble when notice arrives.

                ## Milestones
                1. The current inspection framework read and its key questions mapped to your services.
                2. A self-assessment completed against the framework with evidence for each judgement.
                3. The weaknesses found turned into an improvement plan with owners.
                4. Staff briefed on what inspectors will ask and how to answer honestly.

                ## Notes
                Inspectors talk to front-line staff and service users. A self-assessment that only reflects the leadership view will be found out.
              priority: medium
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A self-assessment against the current inspection framework with evidence and an owned improvement plan, completed before the next inspection window."
                cadence: phased
                effort_hours_estimate: "30"
              tasks:
                - "Download the current inspection framework for your service"
                - "Map each key question to the service and the evidence you hold"
                - "Complete a self-assessment with front-line managers"
                - "Turn each weakness into an owned improvement action"
            - name: Moving from the private sector into public service
              description: |-
                ## Purpose
                Leaders who join government from business often find that speed, risk and money work differently: decisions need visible process, budgets are voted, the press is always watching and the politician can overrule you. Planning the first ninety days around learning those differences, rather than importing private sector habits, avoids the early clashes that end many such appointments.

                ## Milestones
                1. The main differences in decision-making, accountability and money noted from conversations with peers who made the same move.
                2. A mentor inside the organisation with long public sector experience agreed.
                3. The rules on procurement, conduct and records understood before any commitment is made.
                4. A 30, 60 and 90 day plan agreed with your line manager.

                ## Notes
                Start from the **Onboarding 30/60/90** template. Your commercial skills are wanted; the trick is applying them inside the rules.
              priority: medium
              deadlineOffsetDays: 90
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A 30, 60 and 90 day plan agreed with your line manager and a public sector mentor in place, with conduct and procurement rules reviewed before any commitment."
                cadence: phased
                effort_hours_estimate: "15"
              tasks:
                - "Ask two people who moved from business to government what surprised them"
                - "Ask your line manager to suggest a mentor with long public service"
                - "Read the procurement and conduct rules before committing to anything"
                - "Agree a 30, 60 and 90 day plan with your line manager"
            - name: First year as an accounting officer or chief executive
              description: |-
                ## Purpose
                Taking on personal accountability for an organisation's spending, often answerable directly to a legislature or public accounts committee, changes the job overnight. The first year needs a deliberate plan: understanding the duties, testing the controls, building relationships with auditors and the sponsor or political leadership, and deciding what you will personally sign.

                ## Milestones
                1. The formal duties of the role read and summarised from the appointment letter and official guidance.
                2. Meetings held with the external auditor, head of internal audit and audit committee chair.
                3. The highest-risk spending and controls tested by commissioned assurance.
                4. A first-year plan agreed with the board and political leadership.
                5. A review of the year written and shared with the board chair.
              priority: high
              deadlineOffsetDays: 365
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A first-year plan agreed with the board, meetings held with all assurance providers, and a written review of the year shared with the chair."
                cadence: phased
                effort_hours_estimate: "60"
              tasks:
                - "Read your appointment letter and the official guidance on your duties"
                - "Book meetings with the external auditor and the audit committee chair"
                - "Commission assurance on the highest-risk spending area"
                - "Agree a first-year plan with the board and political leadership"
            - name: Leading an arm's-length body and its sponsor relationship
              description: |-
                ## Purpose
                Agencies, regulators and public corporations operate at arm's length from their sponsoring department, with independence on some matters and close control on others, usually set out in a framework document. Many disputes between agency and sponsor come from never agreeing what independence means in practice. A clear, regularly reviewed relationship makes it possible to act decisively without surprises.

                ## Milestones
                1. The framework document or equivalent read and the areas of independence and control listed.
                2. A named sponsor team contact and a regular meeting agreed.
                3. Information the sponsor needs, and when, set out in writing.
                4. A quarterly review of the relationship held and issues resolved.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A written note of independence and control areas agreed with the sponsor, with four quarterly sponsor reviews held in a year."
                cadence: rolling
              tasks:
                - "Read the framework document between your body and its sponsor"
                - "List the areas where you are independent and where the sponsor decides"
                - "Agree what information the sponsor needs and when"
                - "Hold a review of the sponsor relationship with the sponsor team @recurring(quarterly)"
            - name: Chief officer working with a council of mixed parties
              description: |-
                ## Purpose
                In local government, chief officers serve the whole council, not just the ruling group, and in a council with no overall control or a fragile majority the job means briefing several groups fairly. Setting a clear, even-handed practice for briefing group leaders, handling opposition requests and protecting officer neutrality keeps trust across the chamber.

                ## Milestones
                1. The council's protocol on member and officer relations read and its main rules noted.
                2. A regular briefing offer agreed with each political group leader.
                3. A log of information requests from members, showing equal treatment.
                4. Any pressure to act in a partisan way raised with the monitoring officer.

                ## Notes
                Give the same factual information to every group that asks. What differs is the political use they make of it, which is their business.
              priority: medium
              frontmatter:
                mode: service
                output_kind: habit
                success_criteria: "Regular briefings offered to every political group for a year, with a log showing equal treatment of member information requests."
                cadence: rolling
              tasks:
                - "Read the protocol on member and officer relations"
                - "Offer each group leader a regular briefing slot"
                - "Log every member information request and how it was answered"
                - "Meet the group leaders' offices to check briefings are working @recurring(monthly:3)"
            - name: Handover to a new minister after a reshuffle
              description: |-
                ## Purpose
                Reshuffles can change the minister or cabinet member overnight, sometimes mid-way through a major decision, and a new politician may have different priorities, style and knowledge. A prepared handover pack and a deliberate first fortnight keep live decisions moving and give the new principal confidence in the department.

                ## Milestones
                1. A short induction pack ready at all times, covering services, budget, risks and live decisions.
                2. Decisions due in the next month listed with their deadlines and options.
                3. The new politician's interests and record researched within a day of appointment.
                4. A first meeting held and their priorities recorded within the first week.
              priority: low
              frontmatter:
                mode: event
                output_kind: deliverable
                success_criteria: "An induction pack kept current and a first meeting held with any new minister within a week, with their priorities written down."
                cadence: one-shot
                effort_hours_estimate: "10"
              tasks:
                - "Draft a short induction pack on services, budget, risks and live decisions"
                - "List decisions due in the next month with their deadlines"
                - "Research a new politician's interests and record on the day of appointment"
                - "Record the new politician's priorities after the first meeting"
            - name: Leading a front-line service through rising demand
              description: |-
                ## Purpose
                Emergency departments, social care, housing, police control rooms and benefits offices can see demand rise faster than budgets for years at a time, and staff burn out long before the figures show it. Leading through that means honest demand forecasting, clear priorities for what will not be done, visible support for staff and early escalation to political leaders.

                ## Milestones
                1. A demand forecast for the next twelve months agreed with analysts.
                2. Service priorities and thresholds written down, including what will be slowed or stopped.
                3. Staff wellbeing, sickness and turnover monitored alongside demand.
                4. The gap between demand and capacity escalated in writing to the political leadership.

                ## Notes
                Put the thresholds in writing and agree them politically. Staff should never be left to ration quietly on their own judgement.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A twelve-month demand forecast, written priorities and thresholds agreed with the political leadership, and monthly reviews of demand and staff wellbeing for six months."
                cadence: rolling
              tasks:
                - "Ask analysts for a twelve-month demand forecast"
                - "Write the service priorities and thresholds and agree them politically"
                - "Review demand, sickness and turnover together @recurring(monthly:15)"
                - "Escalate the gap between demand and capacity in writing"
            - name: Assurance for a major public programme
              description: |-
                ## Purpose
                Large infrastructure, IT and reform programmes in government are notorious for running late and over budget, and many governments now require independent assurance reviews at key decision points. As the senior responsible owner or sponsor, using those reviews properly, acting on their findings and being honest about the delivery rating keeps the programme defensible.

                ## Milestones
                1. The assurance requirements for the programme confirmed, including review points and any central reporting.
                2. Your role and accountability as senior owner written in a letter of appointment.
                3. Each review's recommendations tracked to completion.
                4. A delivery confidence rating reported honestly at each stage.

                ## Notes
                A review that rates the programme red is doing its job. Hiding a red rating is the decision that ends up in the public accounts report.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every scheduled assurance review held, all recommendations tracked to completion and delivery confidence reported at each stage."
                cadence: phased
                effort_hours_estimate: "30"
              tasks:
                - "Confirm the programme's assurance review points with the central assurance team"
                - "Ask for a letter setting out your role as senior owner"
                - "Track each review recommendation to completion"
                - "Report the delivery confidence rating honestly to the board"
            - name: Accounting officer concerns and ministerial directions
              description: |-
                ## Purpose
                When a politician wants to spend money in a way that the accounting officer believes is irregular, improper, poor value or unfeasible, many systems give the official a formal route: put the concern in writing and, if overruled, seek a written direction. It is rare and serious. Knowing the route before you need it lets you raise concerns early and calmly, and protects both the public purse and the relationship.

                ## Milestones
                1. The official guidance on raising concerns and seeking a direction read and summarised.
                2. The tests used to judge regularity, propriety, value for money and feasibility understood.
                3. A template letter for setting out a formal concern prepared with legal and finance advice.
                4. The informal steps to try first agreed with the permanent head or chief executive.

                ## Notes
                Raise concerns informally and early. A formal direction should be the last step in a conversation, never the first.
              priority: high
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A summary of the formal process for raising spending concerns, a template letter checked by legal and finance, and agreed informal steps to try first."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Find the official guidance on spending concerns and directions"
                - "Summarise the tests for regularity, propriety, value and feasibility"
                - "Prepare a template concern letter with legal and finance advice"
                - "Agree the informal steps to take first with your permanent head"
            - name: Fraud and integrity risk programme for public funds
              description: |-
                ## Purpose
                Fraud drains money from public bodies through benefits, grants, procurement, payroll and expenses, and losses tend to be found by accident long after they began. A deliberate programme, with a fraud risk assessment, data matching, a confidential reporting route and visible action on cases, deters fraud and shows auditors and the public that the money is being guarded.

                ## Milestones
                1. A fraud risk assessment covering your main spending streams completed with counter-fraud specialists.
                2. Controls and data checks in place for the highest-risk streams.
                3. A confidential reporting route publicised to staff and suppliers.
                4. An annual report of cases, losses and recoveries to the audit committee.

                ## Notes
                Treat whistleblowers' reports as a gift. Make sure the reporting route is independent of the managers being reported.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A completed fraud risk assessment, controls on the highest-risk streams and an annual cases and recoveries report to the audit committee."
                cadence: cyclic
              tasks:
                - "Ask the counter-fraud team for the latest fraud losses in your area"
                - "Run a fraud risk assessment of your main spending streams @recurring(yearly)"
                - "Put data checks in place on the highest-risk stream"
                - "Publicise the confidential reporting route to staff and suppliers"
            - name: Preparing the organisation for a public inquiry
              description: |-
                ## Purpose
                Public inquiries into failures of care, safety or policy can run for years, call officials to give evidence under oath and require every relevant record to be preserved and disclosed. Early preparation, with a document preservation notice, legal representation, a dedicated team and support for staff who will be witnesses, lets the organisation cooperate fully while continuing to run services.

                ## Milestones
                1. A document preservation instruction issued across the organisation.
                2. Legal advisers appointed and the terms of reference analysed for what they will cover.
                3. A dedicated inquiry team set up with clear separation from day-to-day operations.
                4. Welfare support and legal guidance arranged for staff who will give evidence.

                ## Notes
                Never destroy or alter records once an inquiry is likely, even under routine retention schedules. Suspend those schedules for relevant material.
              priority: medium
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "A preservation instruction issued, legal advisers appointed, a separate inquiry team in place and support arranged for staff witnesses."
                cadence: phased
                effort_hours_estimate: "40"
              tasks:
                - "Issue a document preservation instruction to all staff"
                - "Appoint legal advisers and analyse the terms of reference"
                - "Set up an inquiry team separate from daily operations"
                - "Arrange welfare and legal support for staff witnesses"
---

# Public Sector Leadership

This area is for directors, chief officers, permanent secretaries, agency heads and senior managers who lead in government departments, local authorities, health and police bodies, regulators and other public services, where the boss is partly political, the money is voted and every decision can be read back in public. It starts with the foundations (your accountability lines, delegated authority, declarations, the working agreement with your minister or lead member, the budget rules and a baseline of risks and performance), then the recurring machinery of briefings, correspondence, budget monitoring, audit and complaints, the craft skills of submissions, business cases, procurement and evaluation, the decisions about savings and service models, the dated events such as elections, committee hearings and the accounts, the situations that change the job, and finally the specialist work of major programme assurance, ministerial directions, fraud and public inquiries.

What repeats is a weekly briefing with the political office and a weekly correspondence check, a monthly budget forecast, audit tracker, questions review, union forum and commitments update, quarterly risk, performance, complaints, contract and sponsor reviews, and a yearly cycle of business planning, declarations, delegations and fraud risk. The Risk register, Vendor, Meeting notes, Metrics log and Onboarding 30/60/90 templates pair with the projects that name them. Installing adds all 50 projects as active, so archive the ones that are not for you yet.
