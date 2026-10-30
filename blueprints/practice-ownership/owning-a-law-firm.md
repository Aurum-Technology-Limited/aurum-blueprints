---
id: practice-ownership.owning-a-law-firm
name: Owning a Law Firm
description: "Practice area choices, conflict checks, key dates, undertakings, billing rhythms and partner routines for owning a law firm, from opening day to merger talks."
category: business
version: 1.0.0
tags: [practice-ownership, owning-a-law-firm, small-business, founder, law-firm, conflict-checks, professional-conduct, fee-earners]
author: Aurum Technology
starter_structure:
  templates:
    - compliance-control
    - operational-checklist
    - meeting-notes
    - feedback-themes
    - development-plan
    - risk-register
  pillars:
    - name: Professional Practice Ownership
      emoji: "🔑"
      description: "Owning and running a professional practice: medical and dental clinics, law and accounting firms, engineering consultancies, architecture studios, veterinary practices and pharmacies, from buying or starting one through partnership agreements, billing, compliance, hiring and growth to succession and sale."
      pillarFrontmatter:
        review_cadence: monthly
      areas:
        - name: Owning a Law Firm
          description: "Running a law firm as owner: practice areas, fee earners, billing and client accounts, conflict checks, professional conduct rules and the partner team."
          projects:
            - name: Practice area map and firm positioning
              description: |-
                ## Purpose
                Most small firms drift into practice areas one client at a time, until conveyancing, family, wills and a little litigation all compete for the same partners and the same marketing budget. Mapping every area by fees, margin, claims risk and the partner who leads it gives you a short written answer to what the firm does, what it refers out and where it wants to grow over the next three years.

                ## Milestones
                1. Last year's fees, matter counts and write-offs listed for each practice area.
                2. Each area scored for margin, claims risk, demand and partner interest.
                3. Every area marked as grow, hold, reduce or refer out.
                4. A one-page positioning statement agreed by all partners.

                ## Notes
                Claims risk is not evenly spread. Conveyancing, wills and litigation with limitation periods tend to produce more negligence claims than advisory work, so a busy area can still be a poor one.
              priority: high
              deadlineOffsetDays: 60
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A one-page practice area map with a grow, hold, reduce or refer-out decision for every area, signed off by all partners."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Pull last year's fees and matter counts by practice area from the accounts system"
                - "Score each area for margin, claims risk and demand on a five-point scale"
                - "Hold a partners' session to mark each area grow, hold, reduce or refer out"
                - "Write the one-page positioning statement and circulate it to the firm"
            - name: Firm authorisation and compliance roles register
              description: |-
                ## Purpose
                Your regulator authorises or registers the firm, not just the lawyers in it, and many regimes expect named people to answer for compliance with the conduct rules and with client money, such as the COLP and COFA roles in England and Wales. A single register of the firm's authorisation, each lawyer's practising status and who holds each compliance role means nobody discovers a lapse during an inspection.

                ## Milestones
                1. The firm's current authorisation or registration details and renewal date recorded.
                2. Every lawyer's practising certificate status and expiry date listed.
                3. Each required compliance role named, with the holder's written acceptance on file.
                4. A deputy identified for each role to cover absence.

                ## Notes
                Start from the **Compliance control** template. Check your own regulator's rules for which roles are mandatory; they differ by jurisdiction and firm type.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A register showing firm authorisation, every lawyer's practising status and the named holder and deputy of each compliance role, checked against the regulator's rules."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Download the firm's authorisation record from the regulator's portal"
                - "List every lawyer with practising certificate number and expiry date"
                - "Confirm in writing who holds each compliance role the regulator requires"
                - "Name a deputy for each role and note it in the register"
                - "Recheck the register against the regulator's records @recurring(yearly)"
            - name: Conflict check procedure for every new matter
              description: |-
                ## Purpose
                A conflict of interest missed at intake can force the firm off a matter halfway through, cost the fees already earned and lead to a complaint or a claim. A written procedure that searches every party, related company and former client before any work starts, with a named partner deciding the hard cases, is the single most important gate in a law firm.

                ## Milestones
                1. A written conflict procedure naming who searches, what is searched and who decides.
                2. All current and closed matters searchable by client, opponent and related party.
                3. No new matter opened without a recorded search result and a clearance sign-off.
                4. A log of conflicts found and how each one was resolved or declined.

                ## Notes
                Search the other side and connected parties, not only the client. Former client conflicts and confidential information held from old matters are where most small firms get caught.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Every matter opened in a month has a recorded conflict search and sign-off, confirmed by a spot check of at least five files."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Write down how conflict searches are done today and who does them"
                - "List the fields every search must cover, including opponents and related parties"
                - "Draft the conflict procedure and agree the deciding partner for hard cases"
                - "Block matter opening in the system until a clearance is recorded"
                - "Spot-check five new matters for a recorded conflict clearance @recurring(monthly:3)"
            - name: Engagement letter and client care standard
              description: |-
                ## Purpose
                Disputes over fees and scope usually trace back to an engagement letter that was vague, late or never sent. One standard letter per practice area, covering scope, who does the work, how fees are charged, the complaints route and the terms of business, gives every client the same clear start and the firm a defensible record.

                ## Milestones
                1. A standard engagement letter drafted for each practice area.
                2. Scope, fee basis, supervising partner and complaints route included in every version.
                3. Terms of business reviewed and dated.
                4. Letters going out within a set number of days of instruction, checked on a sample of files.

                ## Notes
                Your conduct rules may require particular information at the start of a matter, such as cost information and the complaints procedure. Have the letters checked against your own regulator's current requirements.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "An approved engagement letter for every practice area, with a sample of ten new files showing letters sent within the firm's set time."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Collect the engagement letters each partner currently sends"
                - "Mark the gaps in scope, fees and complaints wording across them"
                - "Draft one standard letter per practice area with the terms of business"
                - "Check a sample of ten new files for a letter sent on time"
            - name: Matter opening checklist and file structure
              description: |-
                ## Purpose
                When each fee earner opens files their own way, documents end up in personal inboxes and a colleague covering a holiday cannot find the last letter sent. A firm-wide opening checklist and a fixed folder structure for every matter type make files readable by anyone and file reviews quicker.

                ## Milestones
                1. One opening checklist covering conflict clearance, engagement letter, key dates and fee estimate.
                2. A standard folder structure set up in the document system for each matter type.
                3. All new matters opened from the checklist for one full month.
                4. Older live files moved into the structure on a rolling basis.

                ## Notes
                Start from the **Operational checklist** template. Keep the checklist to one screen; a long one gets ticked without being read.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Every matter opened in a full calendar month follows the checklist and folder structure, confirmed by the practice manager."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "List what must exist on a file before any substantive work starts"
                - "Agree a folder structure for litigation, transactional and advisory files"
                - "Build the checklist into the matter opening screen or form"
                - "Move each fee earner's live files into the new structure"
            - name: Key dates and limitation diary
              description: |-
                ## Purpose
                Missed limitation periods and court deadlines are among the commonest causes of negligence claims against law firms. A central key dates diary, with every critical date entered by one person and checked by another, then reviewed weekly, turns a single fee earner's memory into a firm-wide safety net.

                ## Milestones
                1. One central diary holding limitation dates, court deadlines, completion dates and option expiries.
                2. Every critical date entered by the fee earner and checked by a second person.
                3. Reminders set at fixed intervals before each date.
                4. A weekly list of dates due in the next thirty days circulated to fee earners.

                ## Notes
                Calculate limitation dates conservatively and record how each was worked out. When in doubt, the supervising partner decides, in writing.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: building
                output_kind: habit
                success_criteria: "All live matters have their critical dates in the central diary with a second-person check recorded, and the weekly thirty-day list is circulated."
                cadence: one-shot
                effort_hours_estimate: "10"
              tasks:
                - "Ask each fee earner to list every critical date on their live files"
                - "Enter each date in the central diary and have a second person check it"
                - "Set reminders at sixty, thirty and seven days before each date"
                - "Circulate the next thirty days of key dates to fee earners @recurring(weekly:mon)"
            - name: Undertakings register
              description: |-
                ## Purpose
                An undertaking given by anyone at the firm binds the firm, and a breach is a conduct matter whatever the reason. A register of every undertaking given and received, with the person responsible and the date it must be met, is the only reliable way to know what the firm has promised.

                ## Milestones
                1. A firm rule on who may give undertakings and in what form.
                2. Every live undertaking entered with giver, recipient, wording and due date.
                3. Each undertaking marked discharged, with evidence, when met.
                4. A monthly review of open undertakings by a partner.

                ## Notes
                Most breaches come from informal promises in emails and phone calls on transactions. Train staff to treat any promise to do something as a possible undertaking.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A register holding every live undertaking with wording, owner and due date, reviewed monthly with discharges evidenced."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Write a one-paragraph rule on who may give undertakings"
                - "Ask fee earners to list every live undertaking on their files"
                - "Enter each one in the register with its wording and due date"
                - "Review open undertakings with the responsible partner @recurring(monthly:20)"
            - name: Fee earner roster and capacity map
              description: |-
                ## Purpose
                Partners often take on new matters without knowing that the associate who will do the work is already at full stretch. A simple map of every fee earner, their practice area, level, target hours and live matters shows where capacity exists before work is accepted, not after a deadline slips.

                ## Milestones
                1. Every partner, associate, trainee and paralegal listed with level and practice area.
                2. Target chargeable hours and current live matters recorded for each.
                3. Over and under capacity flagged person by person.
                4. The map used in the weekly partners' meeting to allocate new work.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A capacity map covering every fee earner, refreshed monthly and used to allocate at least four weeks of new instructions."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "List every fee earner with level, practice area and supervising partner"
                - "Add target hours and the count of live matters for each"
                - "Flag anyone well above or below a sensible caseload"
                - "Refresh live matter counts in the capacity map @recurring(monthly:7)"
            - name: Partner team roles and decision rights
              description: |-
                ## Purpose
                In small firms every partner tends to decide everything, so decisions stall or get made twice. Writing down who leads finance, people, risk, IT and each practice area, and which decisions need all partners, a majority or one person, gives the partner team a working structure without rewriting the partnership agreement.

                ## Milestones
                1. A list of management responsibilities with one named partner for each.
                2. A decision table showing which matters need unanimity, a majority or a single lead.
                3. The table checked for consistency with the partnership or members' agreement.
                4. Roles reviewed after six months and adjusted.

                ## Notes
                This sits alongside the partnership agreement and does not replace it. If the table conflicts with the agreement, the agreement wins until it is properly amended.
              priority: medium
              deadlineOffsetDays: 60
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A signed responsibilities and decision rights table covering at least eight management areas, consistent with the partnership agreement."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "List the management jobs partners do today and who does each"
                - "Propose one lead partner for finance, people, risk, IT and each practice area"
                - "Draft the decision table and compare it with the partnership agreement"
                - "Agree and sign the table at a partners' meeting"
            - name: Firm budget by practice area
              description: |-
                ## Purpose
                A single firm-wide budget hides the practice area that is losing money behind the one that carries it. Building next year's budget area by area, with fee earner hours, expected rates, realisation and direct costs, gives each lead partner a number they own and the firm a forecast it can test every month.

                ## Milestones
                1. Expected chargeable hours and rates set for each fee earner.
                2. Fee income forecast per practice area after expected write-offs.
                3. Direct costs and a share of overheads allocated to each area.
                4. A budget agreed by the partners with a monthly comparison format.
              priority: medium
              deadlineOffsetDays: 60
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A budget for the coming financial year broken down by practice area, agreed by the partners before the year starts."
                cadence: one-shot
                effort_hours_estimate: "12"
              tasks:
                - "Export last year's hours, fees and write-offs by fee earner"
                - "Ask each lead partner for hours and rate assumptions for their area"
                - "Build the budget by practice area with overheads allocated"
                - "Agree the budget at a partners' meeting before the year starts"
            - name: Weekly partners' meeting rhythm
              description: |-
                ## Purpose
                Partners who only meet when something goes wrong spend those meetings firefighting. A short weekly meeting with a fixed agenda covering new instructions, key dates, capacity, cash and one risk item keeps decisions small and frequent, and leaves minutes an insurer or inspector could follow.

                ## Milestones
                1. A fixed agenda and a 45-minute slot agreed.
                2. Minutes with decisions and owners kept for every meeting.
                3. Actions from each meeting checked at the start of the next.
                4. Twelve consecutive weekly meetings held.

                ## Notes
                Start from the **Meeting notes** template.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Twelve consecutive weekly partners' meetings held, each with minutes recording decisions, owners and follow-up."
                cadence: rolling
              tasks:
                - "Agree the agenda and a fixed weekly time with the other partners"
                - "Set up a shared minutes page from the meeting notes template"
                - "Hold the partners' meeting and record decisions and owners @recurring(weekly:tue)"
            - name: Monthly file review programme
              description: |-
                ## Purpose
                Independent file reviews catch missing engagement letters, stale key dates and drifting matters long before a client complains. Reviewing a set number of files per fee earner each month against a short checklist gives supervising partners evidence of supervision and gives fee earners specific feedback.

                ## Milestones
                1. A file review checklist covering client care, conflicts, key dates, progress and billing.
                2. A target number of files per fee earner per month agreed.
                3. Findings recorded with actions and a re-check date.
                4. Themes from reviews reported to the partners each quarter.

                ## Notes
                Have someone other than the file handler do the review. Partners' own files need reviewing too.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "At least two files per fee earner reviewed every month for six months, with findings and actions recorded."
                cadence: rolling
              tasks:
                - "Write a one-page file review checklist"
                - "Agree how many files per fee earner each partner reviews"
                - "Review the month's selected files and record findings @recurring(monthly:12)"
                - "Re-check files where actions were raised last month"
            - name: Junior lawyer supervision rhythm
              description: |-
                ## Purpose
                Newly qualified lawyers and paralegals make most of their mistakes in their first two years, and conduct rules generally expect the firm to supervise them properly. A weekly half-hour with each junior, going through their matter list, upcoming dates and any work going out under their name, builds skill and catches errors while they are cheap.

                ## Milestones
                1. Each junior lawyer and paralegal assigned a named supervising lawyer.
                2. A weekly matter list review in each supervisor's diary.
                3. Rules written for which documents need sign-off before they go out.
                4. A supervision record kept that could be shown to an inspector.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every junior fee earner has a named supervisor and a weekly review recorded for at least ten consecutive weeks."
                cadence: rolling
              tasks:
                - "Assign a named supervisor to each junior fee earner"
                - "Write down which documents need supervisor sign-off before sending"
                - "Go through each junior's matter list and upcoming dates @recurring(weekly:thu)"
                - "Note the outcome of each supervision session in one line"
            - name: Month-end billing day across the firm
              description: |-
                ## Purpose
                Bills raised whenever a fee earner gets round to it mean lumpy cash and clients receiving large surprises. Fixing one billing day each month, when every fee earner reviews unbilled time on every matter and a partner approves the bills, makes billing a firm habit rather than a personal one.

                ## Milestones
                1. A fixed billing day in every fee earner's diary.
                2. Unbilled time reviewed on every live matter that day.
                3. Interim bills raised wherever the engagement letter allows.
                4. Bills approved by the supervising partner before they go out.

                ## Notes
                Time recording habits and bill narratives are covered in the Billable Time and Fee Notes area; this project is the firm's monthly billing rhythm.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Six consecutive month-end billing days held, with every fee earner's unbilled time reviewed and bills approved."
                cadence: rolling
              tasks:
                - "Choose a billing day and put it in every fee earner's diary"
                - "Run the unbilled time report for every live matter @recurring(monthly:28)"
                - "Approve each fee earner's draft bills before they go out"
            - name: Partner oversight of client account reconciliations
              description: |-
                ## Purpose
                Client money is where a law firm's regulatory risk is highest, and a partner signing a reconciliation they have not read gives no protection. A monthly routine where a named partner reviews the reconciliation, the client ledgers with old or debit balances and any unexplained differences turns the signature into real oversight.

                ## Milestones
                1. A named partner responsible for reviewing client account reconciliations.
                2. Each monthly reconciliation signed within the period your accounts rules require.
                3. Old balances and any debit balances on client ledgers listed and actioned.
                4. Twelve months of signed reconciliations filed for inspection.

                ## Notes
                Day-to-day client account bookkeeping sits in the Client Trust Accounts area. Check your own jurisdiction's accounts rules for reconciliation frequency and who may sign.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Twelve consecutive monthly reconciliations reviewed and signed by a named partner within the required time, with exceptions actioned."
                cadence: rolling
              tasks:
                - "Confirm which partner reviews and signs client account reconciliations"
                - "Ask the cashier for the reconciliation and the exceptions list each month"
                - "Review and sign the client account reconciliation @recurring(monthly:15)"
                - "Chase every old or debit client balance on the exceptions list"
            - name: Monthly practice area profitability review
              description: |-
                ## Purpose
                Fee income alone says little about whether a practice area pays its way. Looking monthly at each area's fees billed, cash collected, write-offs and direct costs against the budget shows the lead partner where the year is drifting while there is still time to act.

                ## Milestones
                1. A one-page monthly report per practice area against budget.
                2. Variances above an agreed threshold explained by the lead partner.
                3. One action agreed for any area that is behind.
                4. Twelve monthly reviews completed in a year.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Twelve monthly practice area reports produced and reviewed, with variances explained and actions recorded."
                cadence: rolling
              tasks:
                - "Agree the five figures each practice area report must show"
                - "Produce the practice area report against budget @recurring(monthly:9)"
                - "Ask lead partners to explain any variance above the threshold"
            - name: Quarterly compliance officer report to partners
              description: |-
                ## Purpose
                Compliance officers in small firms often carry the role alongside a full caseload and only speak up when there is a crisis. A short written report every quarter covering breaches, near misses, complaints, file review themes and regulatory changes gives the partners a regular view of risk and a record that oversight happened.

                ## Milestones
                1. A standard report format agreed with the compliance role holders.
                2. A breach and near miss log kept up to date between reports.
                3. Four quarterly reports presented and minuted.
                4. Any possibly reportable matter considered and the decision recorded.

                ## Notes
                Start from the **Compliance control** template. Whether a breach must be reported to the regulator is a judgement for the compliance officer under your own rules; record the reasoning either way.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Four quarterly compliance reports presented to the partners in a year, each minuted with decisions on any reportable matters."
                cadence: rolling
              tasks:
                - "Agree the headings for the quarterly compliance report"
                - "Start a breach and near miss log the whole firm can add to"
                - "Present the compliance report at the partners' meeting @recurring(quarterly)"
            - name: Matter closure and file archiving routine
              description: |-
                ## Purpose
                Files left open after the work is done hold stray client balances, keep key dates live and clutter the next conflict search. Closing matters properly each month, with a final bill, residual client money returned, a closing letter and a destruction date, keeps the matter list honest.

                ## Milestones
                1. A closing checklist covering final bill, client balance, original documents and closing letter.
                2. A retention period and destruction date set on every closed file.
                3. Matters inactive for six months listed and either progressed or closed.
                4. Closed files stored where they can be retrieved for a claim or complaint.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every matter finished in the last six months is closed with a nil client balance, a closing letter and a destruction date recorded."
                cadence: rolling
              tasks:
                - "Write the matter closing checklist"
                - "Pull the list of matters with no activity for six months"
                - "Close finished matters and set their destruction dates @recurring(monthly:24)"
                - "Return original documents such as wills and deeds as instructed"
            - name: Client feedback at matter close
              description: |-
                ## Purpose
                Clients rarely complain to the firm; they simply do not come back, or they tell a friend. Asking for two minutes of feedback when each matter closes, and reading the answers monthly, shows which practice areas and fee earners clients value and catches service problems before they become complaints.

                ## Milestones
                1. A three-question feedback request sent with every closing letter.
                2. Responses collected in one place by practice area.
                3. A monthly summary shared with the partners.
                4. Two service changes made from feedback in the first year.

                ## Notes
                Start from the **Feedback themes** template.
              priority: low
              frontmatter:
                mode: service
                output_kind: habit
                success_criteria: "Feedback requested on every closed matter for six months, with a monthly summary and at least one service change made."
                cadence: rolling
              tasks:
                - "Write three short questions about service, communication and value"
                - "Add the feedback link to the closing letter template"
                - "Read the month's client feedback and note the themes @recurring(monthly:18)"
                - "Thank any client whose comment led to a change"
            - name: Annual conduct rules refresher for the whole firm
              description: |-
                ## Purpose
                Conduct breaches in small firms are rarely deliberate; they come from staff who never learned the rules on confidentiality, undertakings or conflicts, or learned them years ago. A short annual session for everyone, including receptionists and cashiers, built around real examples from your own files, keeps the basics fresh.

                ## Milestones
                1. A one-hour session covering confidentiality, conflicts, undertakings and client money.
                2. Examples drawn from the firm's own near misses, anonymised.
                3. Attendance recorded for every member of staff.
                4. New joiners given the session within their first month.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every member of staff has attended a conduct refresher in the last twelve months, with attendance recorded."
                cadence: cyclic
              tasks:
                - "Pick three anonymised near misses from the firm's own files"
                - "Build a one-hour session around the four core topics"
                - "Run the conduct refresher for all staff and record attendance @recurring(yearly)"
                - "Add the session to every new joiner's first month"
            - name: Reading your conduct code as a firm owner
              description: |-
                ## Purpose
                Most lawyers learned the conduct rules as individual practitioners, but owning a firm brings duties of its own: systems, supervision, client money, reporting and responsibility for everyone the firm employs. Reading the code and its guidance once with an owner's eye, and noting every duty that falls on the firm, shows where your systems need to change.

                ## Milestones
                1. The current code of conduct for firms and its guidance read in full.
                2. A list of every duty that falls on the firm or its managers.
                3. Each duty matched to the system or person that meets it.
                4. Gaps added to the compliance officer's action list.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A written list of the firm's conduct duties, each mapped to a system or owner, with gaps passed to the compliance officer."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Download the current conduct code and guidance from your regulator"
                - "Read the sections that apply to firms and their managers"
                - "List each firm duty and the system or person that meets it"
                - "Pass every unmatched duty to the compliance officer"
            - name: Law firm economics of hours, rates and realisation
              description: |-
                ## Purpose
                Profit in a law firm comes from a handful of numbers: chargeable hours, rates, how much recorded time is billed and collected, the ratio of associates to partners and overheads. Learning how these interact, using your own firm's figures, shows which change would move profit per partner most.

                ## Milestones
                1. The main law firm ratios defined in your own words.
                2. Last year's figures calculated for the firm.
                3. The effect of a five percent change in each one modelled.
                4. The two most promising changes presented to the partners.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A one-page model of the firm's economics showing the effect of a five percent change in each driver, presented to the partners."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Write definitions of utilisation, realisation and collection in your own words"
                - "Calculate each ratio from last year's figures"
                - "Model a five percent change in each ratio on profit per partner"
                - "Present the two biggest drivers at the next partners' meeting"
            - name: Matter cost estimates clients can rely on
              description: |-
                ## Purpose
                Clients increasingly expect a written estimate and a warning before it is exceeded, and many regulators require cost information at the outset. Learning to build estimates from phases, past matters and stated assumptions, and to revise them before the client is surprised, reduces write-offs and fee complaints.

                ## Milestones
                1. Ten closed matters of each common type analysed for actual time by phase.
                2. A phase-based estimate template for each main matter type.
                3. Assumptions and exclusions written into every estimate.
                4. A rule that clients are told before an estimate is exceeded.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: artifact
                success_criteria: "Estimate templates for the firm's three most common matter types, built from closed-matter data and used on all new matters of those types."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "Pull actual hours by phase for ten closed matters of one type"
                - "Build a phase-based estimate template with assumptions and exclusions"
                - "Agree the point at which a revised estimate must be sent"
                - "Use the template on every new matter of that type for a month"
            - name: Pricing fixed-fee legal services
              description: |-
                ## Purpose
                Fixed fees win clients in conveyancing, wills, immigration and many business services, but a fixed fee set from guesswork can lose money on every matter. Learning to price from real time data, define exactly what is included and track margin per matter lets the firm offer certainty without carrying the risk blind.

                ## Milestones
                1. Average and worst-case time for the service measured from past matters.
                2. A fixed price set with a written scope and listed extras.
                3. Margin tracked on the first twenty fixed-fee matters.
                4. The price or scope adjusted from the results.
              priority: low
              frontmatter:
                mode: learning
                output_kind: decision
                success_criteria: "One fixed-fee service priced from past data and tracked for margin over twenty matters, with a recorded decision to keep, adjust or drop it."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Choose one service where clients ask for certainty on price"
                - "Measure time spent on the last fifteen matters of that service"
                - "Set the fixed fee, the scope and the priced extras"
                - "Record the margin on each fixed-fee matter as it closes"
            - name: Delegating legal work to the right level
              description: |-
                ## Purpose
                Work done by a partner that a paralegal could do is the most common reason small firms are busy but not profitable. Learning to split a matter into tasks, hand each to the least expensive person who can do it well, and set clear instructions and review points frees partner time for advice, supervision and new clients.

                ## Milestones
                1. One week of partner time reviewed and each task labelled by the level it needs.
                2. Delegation instructions written for three repeatable tasks.
                3. Those tasks handed over with review points agreed.
                4. Partner time on the delegated tasks lower after two months.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: habit
                success_criteria: "Three repeatable tasks delegated from partners with written instructions, and partner time on them measurably lower after two months."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Label a week of your own time by the level each task needs"
                - "Pick three tasks a junior could do with instructions"
                - "Write instructions and review points for each one"
                - "Compare your time on those tasks after two months"
            - name: Privilege and confidentiality in firm systems
              description: |-
                ## Purpose
                Confidential client information now lives in email, shared drives, messaging apps and cloud tools, and a single misdirected email or open folder can breach confidentiality for a whole client. Understanding where privileged material flows through the firm, and setting access, information barriers and email controls to match, protects both the clients and the firm's name.

                ## Milestones
                1. A map of where client information is stored and who can access it.
                2. Access to sensitive matters limited to the team working on them.
                3. A procedure for setting up an information barrier when one is needed.
                4. Staff trained on misdirected email and what to do when one happens.

                ## Notes
                Whether a barrier is enough to act in a particular case is a conduct question for the responsible partner under your own rules.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A written map of client information locations and access, with restricted access on sensitive matters and a misdirected email procedure in force."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "List every system where client documents or emails are stored"
                - "Check who can open sensitive matter folders today"
                - "Write the procedure for setting up an information barrier"
                - "Brief staff on reporting a misdirected email the same day"
            - name: Instructing counsel and experts well
              description: |-
                ## Purpose
                Barristers, advocates, experts and agents are often the largest disbursement on a litigation file and the hardest to recover if the client was never told. Learning to choose them carefully, write clear instructions, agree fees in writing and get client approval first protects the case and the firm's cash.

                ## Milestones
                1. A standard instruction format for counsel and for experts.
                2. A rule that fees are agreed in writing and approved by the client before instruction.
                3. A list of preferred counsel and experts with notes on fees and quality.
                4. Large disbursements funded on account before they are paid.
              priority: low
              frontmatter:
                mode: learning
                output_kind: artifact
                success_criteria: "Standard instruction formats in use, with client fee approval on file for every counsel or expert instructed in the last quarter."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Draft a standard brief to counsel and a standard letter to experts"
                - "Add a client approval step before any external fee is incurred"
                - "Start a preferred list of counsel and experts with fee notes"
                - "Ask clients for money on account before large disbursements"
            - name: Payment diversion fraud defences
              description: |-
                ## Purpose
                Fraudsters target law firms because large sums move through client account on completions and settlements, often after a single spoofed email changing bank details. Simple controls, such as confirming bank details by phone on a known number, warning clients in writing and testing staff, stop most of these losses, which insurance may not fully cover.

                ## Milestones
                1. A written rule that bank details are never accepted or changed by email alone.
                2. A warning about bank detail fraud in every engagement letter and email footer.
                3. Call-back verification recorded on every outgoing client account payment.
                4. Staff tested with a simulated fraud email and the results reviewed.

                ## Notes
                Check what your insurance covers for cyber crime and funds transfer fraud. Report any attempted or actual fraud to your insurer, bank and regulator as your rules require.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: habit
                success_criteria: "No client account payment made in a quarter without a recorded call-back check, and every client warned in writing about bank detail fraud."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Write the rule that bank details are never accepted by email alone"
                - "Add a fraud warning to engagement letters and email footers"
                - "Add a call-back check box to the payment request form"
                - "Run a simulated fraud email test for all staff @recurring(yearly)"
            - name: Precedent bank and document automation
              description: |-
                ## Purpose
                Each fee earner keeping their own versions of standard letters and agreements means mistakes copied from old files and hours spent redrafting. A central precedent bank, owned by a named lawyer per practice area and reviewed when the law changes, is the first step; automating the five most used documents comes second.

                ## Milestones
                1. The twenty most used documents identified across practice areas.
                2. One approved precedent for each, with an owner and a review date.
                3. Old personal versions retired from shared drives.
                4. The five most used documents built in a document assembly tool.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Twenty approved precedents in a central bank with owners and review dates, and five of them automated."
                cadence: phased
                effort_hours_estimate: "20"
              tasks:
                - "Ask each practice area for its ten most used documents"
                - "Pick the best version of each and name an owner"
                - "Move approved precedents to one central folder"
                - "Ask the agent to draft a question list for automating the first precedent"
            - name: Adding or closing a practice area
              description: |-
                ## Purpose
                Adding a practice area because a client asked once, or keeping one because it was always there, are both expensive mistakes. A structured case covering demand, competition, the people needed, insurance impact and conduct requirements, tested against the firm's positioning, gives the partners a clear yes or no and an exit plan for existing clients if the answer is to close.

                ## Milestones
                1. A written case with demand, competition, staffing and insurance impact.
                2. The effect on the indemnity premium checked with the broker.
                3. A partners' decision recorded.
                4. If closing, a plan for referring or completing every live matter.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A recorded partners' decision on one practice area, with a staffing and insurance assessment and, if closing, a plan for every live matter."
                cadence: one-shot
                effort_hours_estimate: "10"
              tasks:
                - "Write down the practice area in question and why it is being considered"
                - "Ask the broker how the change would affect the indemnity premium"
                - "Estimate demand and the fee earners needed over three years"
                - "Put the case to the partners and record the decision"
            - name: Panel memberships review
              description: |-
                ## Purpose
                Lender, insurer, legal aid and corporate panels can bring steady volume, but many come with low rates, audit burdens and terms that let the panel owner remove the firm at short notice. Reviewing every panel the firm sits on for fees, margin, workload and risk shows which ones are worth keeping and which to leave or join.

                ## Milestones
                1. A list of every panel with fee rates, volumes and audit requirements.
                2. Margin per panel matter estimated from a sample of files.
                3. Each panel marked keep, renegotiate or leave.
                4. Applications started for any panel worth joining.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A review of every panel membership with a recorded keep, renegotiate or leave decision for each."
                cadence: cyclic
              tasks:
                - "List every panel the firm belongs to and its terms"
                - "Estimate margin per matter from a sample of panel files"
                - "Mark each panel keep, renegotiate or leave"
                - "Review panel terms and performance before renewals @recurring(yearly)"
            - name: Associates per partner ratio decision
              description: |-
                ## Purpose
                Firms with too few associates per partner rely on expensive partner time for routine work, while too many stretch supervision and raise claims risk. Comparing your current ratio in each practice area with its work mix, and deciding a target for the next two years, guides every hiring decision that follows.

                ## Milestones
                1. Current fee earners per partner calculated for each practice area.
                2. The work in each area split into partner, associate and paralegal work.
                3. A target ratio agreed for each area.
                4. A hiring or role change plan linked to the target.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A target fee earner to partner ratio agreed for each practice area, with a linked two-year hiring plan."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Count fee earners per partner in each practice area"
                - "Split a sample of matters into partner, associate and paralegal work"
                - "Agree a target ratio for each area"
                - "Draft the hiring or role changes needed to reach it"
            - name: Client concentration check on the top ten clients
              description: |-
                ## Purpose
                Losing one big client can sink a small firm when that client is a fifth of fees, and it often follows a single partner retiring or moving. Measuring how much fee income comes from the top ten clients, and who holds each relationship, shows whether the firm needs wider relationships or more clients.

                ## Milestones
                1. Top ten clients by fees listed with their share of firm income.
                2. The relationship partner and a second contact named for each.
                3. Any client above an agreed share flagged.
                4. A plan to add a second relationship lawyer for each flagged client.
              priority: medium
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A top ten client analysis with share of fees and two named contacts per client, rechecked at each year end."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Rank clients by fees billed over the last twelve months"
                - "Calculate each top ten client's share of firm income"
                - "Name a second lawyer the client knows for each top client"
                - "Rerun the top ten client analysis at the year end @recurring(yearly)"
            - name: Office, hybrid or remote firm model
              description: |-
                ## Purpose
                Rent is often a law firm's second biggest cost after salaries, yet many lawyers now work from home part of the week. Deciding deliberately between a full office, a smaller hybrid space and a mainly remote model, with supervision, confidentiality and client meeting needs in the picture, avoids signing a long lease for desks that sit empty.

                ## Milestones
                1. Actual office use measured over four weeks.
                2. Supervision, confidentiality and client meeting needs listed for each model.
                3. Costs compared for three models over the lease term.
                4. A decision recorded before the next lease event.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A recorded decision on the firm's working model, with costs and supervision arrangements compared for three options before the next lease break or renewal."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Count desk use each day for four weeks"
                - "List what supervision and client meetings need from a workspace"
                - "Compare the costs of three models over the remaining lease"
                - "Record the decision and the date of the next lease event"
            - name: Legal research and know-how subscriptions review
              description: |-
                ## Purpose
                Law reports, practitioner texts, research databases and know-how services quietly add up to a large annual bill, and some go unused while others are shared on one login against the licence. Reviewing usage before each renewal keeps what fee earners actually use and makes sure licences match the people using them.

                ## Milestones
                1. Every subscription listed with cost, renewal date and number of users.
                2. Usage checked with the supplier or the fee earners.
                3. Unused services cancelled or downgraded.
                4. Licence numbers matched to actual users.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "Every research subscription reviewed before renewal, with unused ones cancelled and licences matching users."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "List every research and know-how subscription with renewal dates"
                - "Ask each supplier for usage reports by user"
                - "Cancel or downgrade services nobody uses"
                - "Set a reminder sixty days before each subscription renews"
            - name: Regulator inspection readiness for a law firm
              description: |-
                ## Purpose
                An inspection or practice review usually arrives with a few weeks' notice and asks for files, client account records, policies and evidence of supervision. Preparing a readiness pack now, with policies, registers and a sample of reviewed files, means the visit tests systems you already run rather than ones assembled in a panic.

                ## Milestones
                1. Every policy the regulator expects listed and located.
                2. Registers for conflicts, undertakings, complaints and breaches up to date.
                3. Client account records for the last year ready to produce.
                4. A mock inspection of five files completed and the gaps fixed.

                ## Notes
                Ask your regulator or law society what a typical inspection covers; many publish guidance or checklists for firms.
              priority: high
              deadlineOffsetDays: 90
              frontmatter:
                mode: event
                output_kind: deliverable
                success_criteria: "A complete inspection readiness pack and a mock inspection of five files, with every gap closed, finished within ninety days."
                cadence: one-shot
                effort_hours_estimate: "16"
              tasks:
                - "Find the regulator's published guidance on what inspections cover"
                - "List the policies and registers an inspector will ask for"
                - "Gather twelve months of client account records in one place"
                - "Run a mock inspection on five files and fix the gaps"
            - name: Annual partners' strategy retreat
              description: |-
                ## Purpose
                Weekly meetings deal with this week, and nobody steps back to ask where the firm should be in three years. One day a year away from the office, with the numbers, the practice area map and client feedback prepared in advance, gives the partners time to agree priorities and the few big decisions for the year ahead.

                ## Milestones
                1. A date and venue agreed with all partners.
                2. Financials, the practice area map and client feedback circulated a week before.
                3. Three priorities for the year agreed and written up.
                4. An owner and a date set for each priority.
              priority: medium
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A strategy day held with all partners, ending in three written priorities with owners and dates."
                cadence: cyclic
              tasks:
                - "Agree a date for the strategy day with every partner"
                - "Circulate the numbers and practice area map a week before"
                - "Write up the three agreed priorities with owners"
                - "Book next year's partners' strategy day @recurring(yearly)"
            - name: Annual rate review letter to clients
              description: |-
                ## Purpose
                Hourly rates that are never reviewed fall behind salary costs every year, but increases sprung on clients mid-matter cause disputes. Setting new rates once a year, giving existing clients the written notice their engagement terms require and recording any agreed exceptions keeps rates current without surprises.

                ## Milestones
                1. New rates by fee earner level agreed by the partners.
                2. Engagement terms checked for the notice each client must receive.
                3. Notice sent to all clients with live matters.
                4. Billing system rates updated on the agreed date, with exceptions recorded.
              priority: medium
              deadlineOffsetDays: 75
              frontmatter:
                mode: event
                output_kind: deliverable
                success_criteria: "New rates agreed, written notice sent to every client with a live matter, and the billing system updated on the effective date."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Compare current rates with salary and overhead increases"
                - "Agree new rates by level at a partners' meeting"
                - "Send rate notice to every client with a live matter"
                - "Load new rates into the billing system on the effective date @recurring(yearly)"
            - name: Departing lawyer and client file transfer
              description: |-
                ## Purpose
                When a lawyer leaves, clients are free to choose who acts for them, and handling that badly leads to complaints, lost fees and disputes over files and unpaid bills. A plan covering client notification, each client's written instructions, file transfer, outstanding fees and undertakings protects the clients first and the firm second.

                ## Milestones
                1. A joint or firm letter to affected clients agreed, explaining their choice.
                2. Written instructions from each client on who will act.
                3. Files transferred with a record of what was sent and any unpaid fees.
                4. Undertakings and key dates on the leaver's files reassigned or released.

                ## Notes
                Restrictive covenants and departure terms are questions for the partnership agreement or employment contract and, if disputed, your own lawyer.
              priority: medium
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "Every client of a departing lawyer has given written instructions, files are transferred or reassigned and no undertaking is left without an owner."
                cadence: one-shot
                effort_hours_estimate: "10"
              tasks:
                - "List every live matter, key date and undertaking held by the leaver"
                - "Agree the client notification letter with the leaving lawyer if possible"
                - "Record each client's written choice of who acts"
                - "Reassign undertakings and key dates before the leaving date"
            - name: Lateral partner arrival with a client following
              description: |-
                ## Purpose
                A lateral partner who brings clients can add a practice area overnight, but the clients bring conflicts, transferred files, unpaid bills and sometimes undertakings from the old firm. Planning the arrival around conflict checks on the incoming book, new engagement letters, file transfer and introductions to the rest of the firm turns a hire into retained clients.

                ## Milestones
                1. Conflict searches run on every client and matter expected to follow.
                2. New engagement letters ready to send on day one.
                3. A file transfer process agreed with the old firm and the clients.
                4. Each incoming client introduced to a second lawyer within three months.
              priority: medium
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "Every incoming client conflict-cleared and on a new engagement letter within thirty days of arrival, with a second lawyer introduced within three months."
                cadence: phased
                effort_hours_estimate: "15"
              tasks:
                - "Ask the incoming partner for a list of clients expected to follow"
                - "Run conflict searches on every name before the start date"
                - "Prepare engagement letters to send on the first day"
                - "Introduce each incoming client to a second lawyer"
            - name: Leaving your old firm to start your own
              description: |-
                ## Purpose
                Lawyers starting their own firm often underestimate the duties they still owe their old firm and its clients, and a messy exit can follow them for years. Planning the departure around your notice terms, confidentiality, the clients' free choice and what you may take with you means the new firm starts with its reputation intact.

                ## Milestones
                1. Your employment or partnership terms on notice and restrictive covenants read and noted.
                2. Independent legal advice taken on anything unclear.
                3. A plan for telling clients that respects their choice and the old firm's rights.
                4. A list of what you may and may not take, confirmed in writing.

                ## Notes
                Take your own legal advice before approaching clients or colleagues. This project organises the exit; it does not decide what your contract allows.
              priority: medium
              deadlineOffsetDays: 60
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "A written exit plan covering notice, covenants, client communication and property, checked by your own adviser before notice is given."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Find and reread your contract or partnership deed on notice and covenants"
                - "Book independent advice on any covenant you are unsure about"
                - "Draft the timeline from notice to the first day at the new firm"
                - "List the documents and data you may lawfully take"
            - name: First ninety days of a new law firm
              description: |-
                ## Purpose
                Opening a law firm means authorisation, indemnity cover, a client account and conduct systems must all be in place before the first client walks in, and then fees must arrive before savings run out. A ninety-day plan, from authorisation to the first bills collected, keeps the founder working on things in the order they must happen.

                ## Milestones
                1. Firm authorisation, indemnity cover and client account in place before trading.
                2. Conflict, key dates and engagement letter systems live on day one.
                3. The first ten matters opened through the full intake process.
                4. First bills issued and collected within ninety days.

                ## Notes
                Premises, business licences and general set-up are covered in the Starting a Practice from Scratch area; this project is about the law-firm specifics.
              priority: medium
              deadlineOffsetDays: 90
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "Authorisation, cover, client account and core systems live, ten matters opened through intake and first bills collected within ninety days of opening."
                cadence: phased
                effort_hours_estimate: "40"
              tasks:
                - "Confirm the regulator's steps and timescale for authorising a new firm"
                - "Get indemnity quotes for the firm's planned practice areas"
                - "Open the client account and agree the bookkeeping arrangement"
                - "Open the first ten matters through the full intake process"
            - name: Sole practitioner emergency cover arrangement
              description: |-
                ## Purpose
                If a sole practitioner is suddenly ill or dies, clients' files, money and court deadlines can be frozen for weeks, and some regulators step in to close the practice. A written arrangement with another lawyer who can reach the files, the key dates diary and the client account keeps clients protected and the practice saleable.

                ## Milestones
                1. Another qualified lawyer agreed in writing to act as emergency cover.
                2. Access to files, key dates and systems documented and stored securely.
                3. Bank mandate and attorney arrangements checked with your bank and adviser.
                4. Staff told who to call and what to do on the first day.

                ## Notes
                Some regulators require or recommend a named successor or emergency contact. Check your own rules and take advice on the bank mandate and any power of attorney.
              priority: high
              deadlineOffsetDays: 45
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A signed emergency cover arrangement with a named lawyer, with access instructions stored securely and staff briefed."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Ask a trusted practitioner nearby to act as your emergency cover"
                - "Write down where files, the key dates diary and system logins are kept"
                - "Ask the bank how client account signing would work in an emergency"
                - "Recheck the cover arrangement and contact details @recurring(yearly)"
            - name: Growing from two partners to a partner team
              description: |-
                ## Purpose
                Two partners can run a firm over coffee, but at four or five the informal approach breaks: decisions slow, profit sharing gets argued and nobody owns management. Planning the move in advance, with a managing partner role, written decision rights, a partner pipeline and the partnership agreement reviewed by a lawyer, keeps growth from splitting the firm.

                ## Milestones
                1. A managing partner role defined with a time allowance and authority.
                2. Decision rights updated for a larger group.
                3. Criteria for new partners agreed in principle.
                4. The partnership agreement reviewed by your lawyer for the larger team.

                ## Notes
                Profit sharing models and partner admission terms have their own areas; this project is about how the firm is run as it grows.
              priority: medium
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A managing partner role, updated decision rights and new partner criteria agreed, with the partnership agreement reviewed for a larger team."
                cadence: phased
                effort_hours_estimate: "12"
              tasks:
                - "List the decisions that have become slow or contested"
                - "Write a managing partner role with time and authority"
                - "Agree draft criteria for future partners"
                - "Instruct a lawyer to review the agreement for a larger partner team"
            - name: High street general practice service mix
              description: |-
                ## Purpose
                Small-town and high street firms often do a little of everything, from wills and conveyancing to family, crime and small business work, and the mix decides how busy and how profitable they are. Reviewing which services local clients actually buy, which feed each other and which belong with specialists helps a general practice stay broad without being stretched.

                ## Milestones
                1. Matters over two years grouped by service and source.
                2. Services that bring repeat or cross-referred work identified.
                3. Services handled rarely and riskily marked for referral.
                4. A referral arrangement with specialist firms for those services.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A service mix review for a general practice firm, with at least two low-volume services moved to referral arrangements."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Group the last two years of matters by service"
                - "Note which services led clients to instruct the firm again"
                - "Mark rarely done services that carry high claims risk"
                - "Agree referral terms with a specialist firm for each one"
            - name: Taking on trainees or pupils
              description: |-
                ## Purpose
                Training the next generation of lawyers builds a firm's own talent and is often cheaper than hiring qualified associates, but regulators set rules on supervision, the work trainees must see and record keeping. Planning the places, supervisors and rotation before the first trainee arrives makes it real training and a defensible record.

                ## Milestones
                1. Your regulator's requirements for training or qualifying work checked.
                2. Supervisors named and prepared for each seat.
                3. A training plan covering the work each trainee will see.
                4. Regular reviews and sign-offs recorded.

                ## Notes
                Start from the **Development plan** template. Routes differ widely: training contracts, qualifying work experience, pupillage and articles each have their own rules.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A trainee programme with named supervisors, a written training plan and review records that meet the regulator's requirements."
                cadence: phased
                effort_hours_estimate: "15"
              tasks:
                - "Read your regulator's current requirements for trainee supervision"
                - "Name a supervisor for each seat and agree their time"
                - "Write the training plan from the development plan template"
                - "Hold a review with the trainee at the end of each seat"
            - name: Law firm risk register
              description: |-
                ## Purpose
                Every partner carries a list of worries in their head, from a key partner leaving to a cyber attack or a large negligence claim. A firm-wide risk register naming each risk, its likelihood and impact, the control in place and an owner turns worry into action and gives insurers and inspectors evidence of risk management.

                ## Milestones
                1. Twenty risks listed across claims, conduct, money, people, IT and clients.
                2. Each risk scored for likelihood and impact.
                3. A control and an owner named for every high risk.
                4. The register reviewed by the partners each quarter.

                ## Notes
                Start from the **Risk register** template.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: artifact
                success_criteria: "A risk register of at least twenty firm risks, each with a score, control and owner, reviewed by the partners every quarter."
                cadence: rolling
              tasks:
                - "List twenty risks across claims, conduct, money, people and IT"
                - "Score each risk for likelihood and impact"
                - "Name a control and an owner for every high risk"
                - "Review the risk register at the partners' meeting @recurring(quarterly)"
            - name: Conditional and contingency fee portfolio risk
              description: |-
                ## Purpose
                No-win no-fee and contingency work can pay well, but the firm is funding each case with its own time and disbursements, and a run of losses hits cash hard. Treating these matters as a portfolio, with a screening rule for new cases, a cap on total exposure and a regular review of prospects, keeps the risk in proportion to the firm's balance sheet.

                ## Milestones
                1. Every conditional or contingency matter listed with time invested and disbursements.
                2. A written screening rule for taking on new cases.
                3. A cap on total unbilled exposure agreed by the partners.
                4. Each matter's prospects reviewed and recorded every quarter.

                ## Notes
                Rules on these fee arrangements differ greatly by jurisdiction and some are prohibited. Check what your regulator allows and the client documents it requires.
              priority: low
              frontmatter:
                mode: operating
                output_kind: decision
                success_criteria: "A portfolio list of all conditional or contingency matters with a screening rule, an exposure cap and quarterly prospect reviews recorded."
                cadence: rolling
              tasks:
                - "List every conditional or contingency matter with time and costs invested"
                - "Write the screening rule for accepting new cases"
                - "Agree a cap on total unbilled exposure"
                - "Review prospects on each case with the supervising partner @recurring(quarterly)"
            - name: Merger talks with another law firm
              description: |-
                ## Purpose
                Mergers between small firms are often pitched as succession, scale or a route into a new practice area, and many fail on culture, conflicts or profit sharing after the deal is done. Running talks with a clear rationale, early conflict checks across both client lists, honest numbers and your own advisers lets the partners decide on facts.

                ## Milestones
                1. A written rationale and the deal breakers agreed by your partners.
                2. A confidentiality agreement signed before information is shared.
                3. Client lists cross-checked for conflicts under a confidential process.
                4. Financials, claims history and profit sharing compared side by side.
                5. A go or no-go decision recorded.

                ## Notes
                Take advice from lawyers and accountants who are not partners in either firm. Indemnity history and run-off cover need early attention.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A recorded go or no-go decision on a merger, based on a conflicts check, a side-by-side financial comparison and agreed deal breakers."
                cadence: phased
                effort_hours_estimate: "40"
              tasks:
                - "Write down why the firm would merge and the deal breakers"
                - "Sign a confidentiality agreement before any information is shared"
                - "Run a confidential conflicts cross-check of both client lists"
                - "Compare financials, claims history and profit sharing side by side"
            - name: Non-lawyer ownership and alternative structures
              description: |-
                ## Purpose
                Some jurisdictions now allow law firms to have non-lawyer managers or owners, outside investment or multi-disciplinary structures, while others prohibit them outright. Understanding what your regulator permits, and what it would mean for conduct duties, client confidentiality and control, lets the partners judge whether an offer or idea is even possible before paying for advice.

                ## Milestones
                1. Your regulator's current rules on ownership and management summarised.
                2. The permitted structures listed with their conduct requirements.
                3. The effect on control, profit and confidentiality noted for each.
                4. A partners' view recorded on whether to explore any option further.

                ## Notes
                This is a research project. Any actual change of ownership needs specialist regulatory and legal advice.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A summary of the ownership structures your regulator permits, with a recorded partners' view on whether to explore any of them."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Find your regulator's current rules on firm ownership and management"
                - "List the structures permitted and the conduct duties attached to each"
                - "Note how each would change control, profit and confidentiality"
                - "Put a short summary to the partners and record their view"
---

# Owning a Law Firm

This area is for the lawyer who owns or co-owns a firm, whether a sole practitioner, a founder who has just left a larger practice or one of a small partner team. It starts with the foundations (a practice area map, the firm's authorisation and compliance roles, conflict checks, engagement letters, the key dates diary and the undertakings register), then the operating routines that keep files, money and people supervised, the skills that make the firm's economics work, the decisions about practice areas, panels and working models, the events that need planning, the situations particular founders and partner teams face, and finally specialist work such as risk portfolios, mergers and new ownership structures.

What repeats is a weekly key dates list, partners' meeting and junior supervision, a monthly round of file reviews, billing day, client account sign-off and practice area figures, quarterly compliance and risk reports, and a yearly rate review, conduct refresher and strategy day. The Compliance control, Operational checklist, Meeting notes, Feedback themes, Development plan and Risk register templates pair with the projects that name them. Installing adds all 50 projects as active, so archive the ones that are not for you yet.
