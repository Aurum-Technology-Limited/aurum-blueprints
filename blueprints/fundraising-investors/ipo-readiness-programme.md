---
id: fundraising-investors.ipo-readiness-programme
name: IPO Readiness Programme
description: "A structured route to a stock market listing: an honest gap assessment, the venue and timeline, board and controls built to listed standards, the right advisers and a calm path from drafting to first trading day."
category: business
version: 1.0.0
tags: [fundraising-investors, ipo-readiness-programme, enterprise, founder, manager, ipo, listing, corporate-governance]
author: Aurum Technology
starter_structure:
  templates:
    - risk-register
    - board-meeting
    - month-end-close
    - compliance-control
    - remediation-plan
    - vendor
  pillars:
    - name: Fundraising & Investor Relations
      emoji: "💰"
      description: "Raising capital and keeping investors informed: rounds from pre-seed to growth, grants and debt, the data room, cap table, investor updates, board reporting and exits."
      pillarFrontmatter:
        review_cadence: quarterly
      areas:
        - name: IPO Readiness Programme
          description: "Getting a company ready to list: governance, reporting systems, controls, advisers and the timeline to an initial public offering."
          projects:
            - name: IPO readiness gap assessment
              description: |-
                ## Purpose
                Most companies that list successfully spend 18 to 24 months getting ready, and the first useful step is an honest picture of where you stand today across governance, financial reporting, controls, systems, legal housekeeping, tax and people. A gap assessment scored against what a listed company of your size must do turns a vague ambition into a costed list of work, and it tells the board whether the target window is realistic before money is spent on banks and lawyers.

                ## Milestones
                1. Ten readiness workstreams defined, each with a named executive owner.
                2. Every workstream scored red, amber or green against the likely venue's requirements.
                3. The twenty largest gaps listed with an effort estimate and the earliest date each could close.
                4. A one-page summary presented to the board with a recommendation on the target window.

                ## Notes
                Many audit and advisory firms offer a readiness diagnostic. If you use one, keep ownership of the scoring so the result does not become a sales document for their follow-on work.

                Before you start: this plan is general information to help you organise your own money decisions. It is not financial, investment, tax or legal advice. Check decisions that matter with a qualified, licensed adviser in your country, and remember that investing and trading can lose money.
              priority: high
              deadlineOffsetDays: 45
              frontmatter:
                mode: research
                output_kind: artifact
                success_criteria: "A scored gap assessment covering ten workstreams, with the twenty largest gaps costed, presented to the board and minuted."
                cadence: one-shot
                effort_hours_estimate: "20"
              tasks:
                - "List the ten readiness workstreams and pencil an owner against each"
                - "Gather the last audit management letter and any open findings"
                - "Score each workstream against the venue's published requirements"
                - "Ask the agent to turn the scores into a one-page board summary"
                - "Present the gap summary and proposed target window to the board"
            - name: Listing rationale and objectives memo
              description: |-
                ## Purpose
                Before anyone talks to a bank, the board and the main shareholders should agree in writing why the company wants to list: primary capital for growth, liquidity for early investors, shares to use in acquisitions, profile with customers or a way for employees to own a stake. The answer shapes the venue, the offer size, how much stock existing holders sell and whether a listing is even the right route, and an unclear rationale is one of the first things institutional investors probe on the roadshow.

                ## Milestones
                1. Each director and major shareholder interviewed on what they want from a listing.
                2. Primary and secondary objectives ranked, with any conflicts between shareholders written down.
                3. The benefits of listing set against the ongoing obligations in one table.
                4. A memo of no more than three pages approved by the board and kept as the reference for later choices.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A board-approved memo of three pages or fewer stating the ranked objectives for listing and the obligations accepted in return."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Book 30-minute conversations with each director and major shareholder"
                - "Write down what each one wants from listing in their own words"
                - "Draft a table of benefits against ongoing public-company obligations"
                - "Circulate the memo for comment and record the board's approval"
            - name: Choosing the listing venue and market segment
              description: |-
                ## Purpose
                Exchanges differ in admission tests, investor base, research coverage, cost of compliance and how they treat founder control or dual-class shares, and a company listed in the wrong place can trade thinly for years. Comparing two to four realistic venues on the same criteria, with input from bankers and counsel, gives the board a reasoned choice rather than the default of the nearest or best-known exchange.

                ## Milestones
                1. Two to four venues shortlisted, including main and growth segments where relevant.
                2. Each venue scored on the same eight criteria, from admission rules to annual cost.
                3. Trading volume and valuation of comparable listed peers on each venue gathered.
                4. The board's venue decision recorded with the reasons and the runner-up.

                ## Notes
                Growth segments often have lighter admission rules but rely on a nominated or sponsoring adviser and can have shallower liquidity. Ask how many comparable companies listed there in the last three years and how their shares trade now.
              priority: high
              deadlineOffsetDays: 90
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A venue and market segment chosen by the board from a scored shortlist of at least two, with the reasons minuted."
                cadence: one-shot
                effort_hours_estimate: "16"
              tasks:
                - "Shortlist the venues where your closest listed peers trade"
                - "Collect each venue's admission rules and annual fee schedule"
                - "Score the venues on investor base, liquidity, cost and control rules"
                - "Ask two bankers and your counsel for their view on the shortlist"
                - "Record the board's venue decision and the reasons in the minutes"
            - name: IPO steering committee and programme office
              description: |-
                ## Purpose
                An IPO touches finance, legal, HR, technology, investor relations and the board at once, and without a single owner the work drifts into silos that only meet when an adviser asks a question. A small steering committee chaired by the CEO or CFO, with a programme manager running the plan day to day, gives every workstream one place to raise issues and one set of dates to work to.

                ## Milestones
                1. Terms of reference agreed, naming the chair, members and decision rights.
                2. A programme manager appointed with time released from their usual role.
                3. One integrated plan holding every workstream's tasks, owners and dependencies.
                4. A standing monthly steering meeting in the diary for the next twelve months.

                ## Notes
                The programme manager role is often underestimated. From about nine months before listing it is close to a full-time job.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Signed terms of reference, a named programme manager and one integrated plan exist, with monthly steering meetings booked for a year."
                cadence: one-shot
                effort_hours_estimate: "10"
              tasks:
                - "Draft one page of terms of reference for the steering committee"
                - "Choose a programme manager and agree their release from other duties"
                - "Load every workstream's tasks into one plan with owners"
                - "Chair the steering committee and log its decisions @recurring(monthly:3)"
            - name: Working-back IPO timeline
              description: |-
                ## Purpose
                Listing windows open and close with market conditions, and the date that matters most is often the point at which the latest audited accounts become too old to use in the prospectus. Working back from a target window through filing, drafting, audits, board changes and system upgrades shows which tasks are already on the critical path today and which can safely wait.

                ## Milestones
                1. A target listing window agreed, with the financial statements it depends on identified with the auditors.
                2. Key dates worked back for audit sign-off, drafting, regulatory filing and roadshow.
                3. The critical path marked, with the three tasks most likely to move the date.
                4. The timeline re-baselined each month, with any change explained to the steering committee.

                ## Notes
                Ask counsel when financial statements go stale on your venue. Staleness rules decide the realistic windows more than any other date.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A dated timeline from today to first trading day, with the critical path marked and the accounts it relies on agreed with the auditors."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Agree the target window and the accounts it relies on with the auditors"
                - "Work back the key dates from filing to the first trading day"
                - "Mark the critical path and the three tasks most likely to slip"
                - "Re-baseline the timeline against workstream status @recurring(monthly:28)"
            - name: IPO cost budget and adviser fee tracker
              description: |-
                ## Purpose
                Underwriting fees are only part of the bill: there is counsel for the company and for the banks, auditors' comfort letters, reporting accountants, printers, exchange and regulator fees, directors' and officers' insurance, new hires and systems. Building the budget early, and checking invoices against engagement letters every month, prevents the cost shock that otherwise arrives in the weeks before pricing, when there is no time left to argue.

                ## Milestones
                1. A budget by cost category with a low and a high estimate for each.
                2. Every adviser's engagement letter filed with its fee basis and any cap.
                3. Monthly actual spend compared with budget and explained where it differs.
                4. The yearly running cost of being listed estimated separately from the one-off cost.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A budget with low and high estimates per category exists, and actual adviser spend has been reconciled to it every month since approval."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "List every adviser and cost category you expect before listing"
                - "Ask each adviser for a fee estimate and the assumptions behind it"
                - "Estimate the yearly running cost of being a listed company"
                - "Compare adviser invoices with engagement letter estimates @recurring(monthly:25)"
            - name: Listing eligibility check against admission rules
              description: |-
                ## Purpose
                Every venue sets admission tests, such as a minimum trading record, profit, revenue or market value thresholds, a minimum free float, a working capital statement and a clean audit history, and a single missed test can push the timetable back a year. Checking each test against your own numbers now, with counsel confirming the reading, tells the board which tests are met, which are close and which need a waiver or a different segment.

                ## Milestones
                1. Every admission test listed from the venue's current rulebook, with its version date.
                2. Each test marked met, close or not yet met, with the evidence that would prove it.
                3. Free float and shareholder spread estimated for the planned offer size.
                4. Counsel's written confirmation of how the tests apply to your structure on file.

                ## Notes
                Rules change. Work from the venue's current rulebook and record the version date beside your checklist.
              priority: high
              deadlineOffsetDays: 60
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "An eligibility checklist covering every admission test, each marked with evidence, confirmed in writing by counsel."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Download the current admission rules for the chosen venue"
                - "List each test with the figure or document that would prove it"
                - "Mark each test as met, close or not yet met"
                - "Ask counsel to confirm how the tests apply to your group structure"
            - name: Pre-IPO group structure and reorganisation plan
              description: |-
                ## Purpose
                Private groups often carry holding companies, minority interests, intercompany loans and founder-held assets that make sense privately but confuse a prospectus reader and complicate the audit. Deciding early which entity will list, and what has to move beneath it, gives tax advisers and counsel time to plan the steps, obtain any clearances and keep the audited history comparable.

                ## Milestones
                1. A current group chart showing every entity, its owners and intercompany balances.
                2. The listing entity chosen, with the advisers' reasons recorded.
                3. Reorganisation steps sequenced, each with tax and legal sign-off.
                4. The reorganisation completed and reflected in statutory records before the financial history is finalised.

                ## Notes
                A reorganisation can have tax consequences for shareholders as well as the company. Get written advice before any step, and check with the auditors whether the changes must be reflected in historical accounts.
              priority: medium
              deadlineOffsetDays: 300
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "The listing entity is chosen and every reorganisation step is completed with written tax and legal sign-off before the prospectus accounts close."
                cadence: phased
                effort_hours_estimate: "30"
              tasks:
                - "Draw the current group chart with every entity and owner"
                - "Ask tax advisers and counsel which entity should be the listing vehicle"
                - "Sequence the reorganisation steps with any clearances needed"
                - "Confirm with the auditors how the steps affect the historical accounts"
            - name: Audited financial history to listing standard
              description: |-
                ## Purpose
                Venues usually require two or three years of audited accounts under an accepted framework such as IFRS or US GAAP, and auditors may have to meet independence and registration rules stricter than a private audit. Restating older years, clearing qualified opinions or switching auditor late is one of the most common reasons listings slip, so the financial history needs a plan of its own.

                ## Milestones
                1. The required number of audited years and the reporting framework confirmed with counsel.
                2. Auditor independence and any registration requirement confirmed for the whole audited period.
                3. Accounting policy changes, conversions or restatements completed and documented.
                4. Unqualified audit opinions in hand for every required year.

                ## Notes
                Independence rules for listed-company auditors can rule out services your audit firm provides today, such as bookkeeping or some tax work, and they often look back over the whole audited period.
              priority: high
              deadlineOffsetDays: 240
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "Unqualified audit opinions exist for every year the venue requires, from an auditor confirmed as independent for the whole period."
                cadence: phased
                effort_hours_estimate: "60"
              tasks:
                - "Confirm with counsel how many audited years the venue requires"
                - "Ask the auditors to check independence for the whole audited period"
                - "List any accounting policy changes or restatements still needed"
                - "Book the annual audit planning meeting with the auditors @recurring(yearly)"
            - name: IPO programme risk register
              description: |-
                ## Purpose
                The things that derail listings are rarely surprises in hindsight: a delayed audit, a key executive leaving, a litigation matter, a large customer lost or a market window closing. Keeping a register of these risks, each with an owner, a likelihood and an early warning sign, lets the steering committee act months before a problem reaches the prospectus.

                ## Milestones
                1. At least fifteen risks logged across market, financial, legal, people and operational headings.
                2. Every risk given an owner, a likelihood, an impact and a warning sign to watch.
                3. The top ten risks reviewed with their owners every month.
                4. Risks likely to become prospectus risk factors flagged and shared with counsel.

                ## Notes
                Start from the **Risk register** template.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: artifact
                success_criteria: "A risk register of at least fifteen owned risks exists and its top ten have been reviewed with owners in each of the last three months."
                cadence: rolling
              tasks:
                - "Run a 45-minute session with workstream owners to list risks"
                - "Give every risk an owner, likelihood, impact and warning sign"
                - "Flag the risks counsel may need as prospectus risk factors"
                - "Review the top ten risks with their owners @recurring(monthly:10)"
            - name: Weekly IPO workstream stand-up
              description: |-
                ## Purpose
                Between monthly steering meetings, small blockers pile up: a document waiting on legal, a reconciliation waiting on a subsidiary, a hire waiting on budget approval. A 30-minute weekly stand-up of workstream leads, run from the integrated plan, clears these while they are still small and keeps the programme manager's view of the critical path honest.

                ## Milestones
                1. A fixed weekly slot with a standing list of workstream leads.
                2. Each lead reporting done, next and blocked in under three minutes.
                3. Every blocker logged with an owner and a date to clear it.
                4. Most blockers closed within a week, with repeat offenders escalated to steering.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A weekly stand-up has run for eight consecutive weeks, with a blocker log showing owners and dates for each item."
                cadence: rolling
              tasks:
                - "Set a 30-minute weekly slot with every workstream lead"
                - "Agree the three-question format and a two-minute limit each"
                - "Run the stand-up and log new blockers @recurring(weekly:mon)"
                - "Send the blocker list with owners within an hour of the meeting"
            - name: Monthly IPO readiness report to the board
              description: |-
                ## Purpose
                Directors usually carry personal responsibility for the prospectus, so they need to see readiness progress regularly, not only when a decision is due. A short monthly report showing each workstream's status, the timeline, spend against budget and the top risks lets the board challenge early and creates the record that directors took reasonable care.

                ## Milestones
                1. A two-page format with an appendix agreed with the board chair.
                2. Each workstream shown red, amber or green, with the change since last month.
                3. Decisions the board must take called out at the top of the report.
                4. Board minutes recording the readiness discussion every month.

                ## Notes
                Start from the **Board meeting** template for the readiness item on each agenda.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A readiness report has gone to the board before each of the last three meetings, and the minutes record the discussion."
                cadence: rolling
              tasks:
                - "Agree a two-page report format with the board chair"
                - "Ask the agent to draft the report from the plan and risk register"
                - "Send the readiness report five days before each board @recurring(monthly:12)"
                - "Record the board's challenges and management's responses in the minutes"
            - name: Public-company close calendar
              description: |-
                ## Purpose
                Listed companies report to tight deadlines, and a finance team that takes fifteen working days to close the books will struggle in its first reporting season. Shortening the monthly close step by step, toward roughly five to eight working days with fewer late adjustments, builds the habits the team will need under public scrutiny.

                ## Milestones
                1. The working days taken by the last three closes measured.
                2. A target number of days agreed with the CFO.
                3. A close calendar with every step, owner, cut-off and dependency.
                4. Post-close adjustments counted and their causes tracked each month.
                5. The target met for three consecutive months without extra adjustments.

                ## Notes
                Start from the **Month-end close** template. Speed without accuracy is worse than a slow close, so track adjustments alongside days to close.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "The monthly close has met the agreed working-day target for three consecutive months, with post-close adjustments recorded each time."
                cadence: rolling
              tasks:
                - "Measure how many working days the last three closes took"
                - "Map every close step with its owner and dependency"
                - "Run the close calendar and record when each step finished @recurring(monthly:5)"
                - "Count post-close adjustments and note the cause of each"
            - name: Quarterly reporting dry runs
              description: |-
                ## Purpose
                Producing full quarterly financial statements, with notes, segment data and a management commentary, is a different skill from producing monthly management accounts. Running at least two quarters as a dry run before listing, with the auditors performing review procedures where they will later be required, exposes the gaps in data, timing and judgement while mistakes are still private.

                ## Milestones
                1. A quarterly pack format agreed that matches what will later be published.
                2. The first dry-run pack delivered within the target number of days after quarter end.
                3. Auditor review comments logged and resolved.
                4. The second dry run delivered faster and with fewer comments than the first.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Two consecutive quarterly dry-run packs have been delivered on time and every auditor review comment on them is closed."
                cadence: cyclic
              tasks:
                - "Agree the quarterly pack contents with the auditors and counsel"
                - "Set the number of days after quarter end for delivering the pack"
                - "Deliver the quarterly dry-run pack and log review comments @recurring(quarterly)"
                - "Close every review comment before the next quarter ends"
            - name: Internal control testing cycle
              description: |-
                ## Purpose
                Investors and regulators expect a listed company to have documented, working controls over financial reporting, and in some markets management and the auditors must formally attest to them within the first years after listing. Documenting the key controls, testing a sample each quarter and filing the evidence builds a track record that a later attestation can rely on.

                ## Milestones
                1. Significant accounts and the processes that feed them scoped.
                2. Each key control documented with an owner, a frequency and the evidence it leaves.
                3. A quarterly test of a sample of key controls, with results recorded.
                4. Every failed test moved into the remediation log with an owner.

                ## Notes
                Start from the **Compliance control** template for each key control. Ask the auditors early when any formal attestation would first apply on your venue.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every key control is documented and has been tested in at least two quarterly cycles, with evidence filed and failures logged."
                cadence: cyclic
              tasks:
                - "List the significant accounts and the processes that feed them"
                - "Document each key control with its owner, frequency and evidence"
                - "Test this quarter's sample of key controls and file the evidence @recurring(quarterly)"
                - "Move every failed control test into the remediation log"
            - name: Control deficiency remediation log
              description: |-
                ## Purpose
                Auditor management letters, readiness reviews and control testing all produce findings, and a material weakness still open at listing usually has to be disclosed in the prospectus. One remediation log, with each deficiency rated, owned and evidenced when fixed, shows the board and the auditors steady progress and avoids that disclosure wherever it can be avoided.

                ## Milestones
                1. Every open finding from every source held in one log.
                2. A severity rating agreed with the auditors for each finding.
                3. A remediation plan and target date for each finding.
                4. Fixed controls retested, with the evidence attached before closure.
                5. No material weakness open three months before the planned filing.

                ## Notes
                Start from the **Remediation plan** template.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "All findings sit in one rated log, and no material weakness remains open three months before the planned filing date."
                cadence: rolling
              tasks:
                - "Pull every open finding from management letters and reviews into one log"
                - "Agree a severity rating for each finding with the auditors"
                - "Chase owners on overdue remediation actions @recurring(weekly:thu)"
                - "Retest each fixed control before marking it closed"
            - name: KPI dictionary and adjusted measures control
              description: |-
                ## Purpose
                The metrics in a prospectus, such as annual recurring revenue, net revenue retention, active users or adjusted EBITDA, will be quoted back to management every quarter after listing, and regulators look closely at how non-standard measures are defined and reconciled. One dictionary of every KPI, with its exact definition, source and reconciliation to the audited numbers, stops definitions drifting and gives the auditors something to check.

                ## Milestones
                1. Every metric used in board packs and investor material listed.
                2. One written definition, data source and owner for each metric.
                3. A reconciliation of each adjusted measure to the nearest audited figure.
                4. A monthly check that board figures match the dictionary's definitions.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A KPI dictionary covers every board and investor metric, and each adjusted measure reconciles to an audited figure for the last three months."
                cadence: rolling
              tasks:
                - "Collect every metric used in board packs and investor decks"
                - "Write one definition, source and owner for each metric"
                - "Reconcile each adjusted measure to the nearest audited figure"
                - "Check this month's board metrics against the dictionary @recurring(monthly:8)"
            - name: Disclosure committee dry run
              description: |-
                ## Purpose
                Once listed, the company must judge quickly whether events such as a large contract loss, a profit shortfall or a senior departure need announcing, and that judgement is usually made by a disclosure committee working to a written policy. Setting the committee up before listing and running it monthly on real events trains its members to decide, document and escalate in hours rather than days.

                ## Milestones
                1. A disclosure policy drafted with counsel for the chosen venue.
                2. Committee members, a quorum and out-of-hours contacts named.
                3. A monthly meeting reviewing recent events against the policy.
                4. A decision log recording each judgement and the reasoning behind it.

                ## Notes
                Before listing these decisions are practice. Check with counsel which events would actually require an announcement under your venue's rules.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A written disclosure policy exists and the committee has met monthly for at least three months, with a log of each decision and its reasons."
                cadence: rolling
              tasks:
                - "Ask counsel for a draft disclosure policy for the chosen venue"
                - "Name committee members, a quorum and out-of-hours contacts"
                - "Review last month's events against the policy and log decisions @recurring(monthly:20)"
                - "Test the out-of-hours escalation route once with a mock scenario"
            - name: Project confidentiality and insider list
              description: |-
                ## Purpose
                Word that a company is preparing to list leaks easily through recruiters, suppliers and adviser teams, and an early leak can unsettle staff, invite competitor noise and, in some markets, breach the rules on publicity before an offer. A project code name, a need-to-know list kept current and clear rules on what people may say keep the programme quiet until the board chooses to speak.

                ## Milestones
                1. A code name in use on documents, calendar invites and file names.
                2. A list of everyone who knows about the project, advisers included, kept current.
                3. Confidentiality agreements in place with every adviser and supplier involved.
                4. Holding lines for staff and media questions approved by counsel.

                ## Notes
                Many venues restrict promotional communication before and during an offer. Agree the rules with counsel before any interview, conference talk or press release.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A code name, a current insider list reviewed monthly and counsel-approved holding lines are all in place."
                cadence: rolling
              tasks:
                - "Choose a project code name and use it on every file and invite"
                - "Start the list of people who know about the project, advisers included"
                - "Ask counsel for the publicity rules that apply before the offer"
                - "Update the project insider list and remove leavers @recurring(monthly:15)"
            - name: How an IPO runs from kick-off to first trade
              description: |-
                ## Purpose
                Founders and finance leaders who have run private rounds often underestimate how many parties an IPO involves and how sequential it is: kick-off meeting, due diligence, drafting, regulatory review, analyst education, roadshow, bookbuilding, pricing, settlement and stabilisation. Learning the stages and who does what before the banks arrive lets the leadership team ask sharper questions and notice when an adviser is padding the scope.

                ## Milestones
                1. A one-page map of the stages with typical durations for your venue.
                2. A list of every party involved and what each one is responsible for.
                3. A glossary of the thirty terms the team keeps meeting.
                4. Two recent sector prospectuses read, with notes on their structure.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A one-page process map, a party responsibility list and a thirty-term glossary are shared with the leadership team."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "Read one practitioner guide to the IPO process for your chosen venue"
                - "Draw the stages on one page with typical durations"
                - "Build a glossary of the thirty terms you keep meeting"
                - "Read two recent sector prospectuses and note how they are structured"
            - name: Continuing obligations of a listed company
              description: |-
                ## Purpose
                Listing is the start of a new set of duties: periodic reporting, prompt disclosure of inside information, related party rules, shareholder approval for large transactions and reporting against a corporate governance code. Senior leaders who learn these duties now can design processes that comply from the first day instead of bolting them on after an awkward announcement.

                ## Milestones
                1. A summary of the venue's continuing obligations prepared from the rulebook.
                2. Each obligation mapped to the team and process that will own it.
                3. The governance code chosen, with any areas where the company would explain a departure noted.
                4. A one-page reference shared with the executive team.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Every continuing obligation on the chosen venue is mapped to an owner, and the executive team has received the one-page summary."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Collect the continuing obligations chapter of the venue's rulebook"
                - "List each obligation with the team that will own it"
                - "Note where the governance code would need a departure explained"
                - "Share a one-page summary with the executive team"
            - name: Prospectus anatomy for the leadership team
              description: |-
                ## Purpose
                Investors buy on the prospectus, and directors are usually responsible for it being accurate and complete. Knowing its sections, from risk factors and business description to the operating and financial review, capitalisation, management, related party transactions and use of proceeds, lets each executive see early which parts they will own and what evidence each statement will need.

                ## Milestones
                1. Three recent peer prospectuses on the chosen venue read.
                2. Each main section mapped to an internal owner.
                3. A list of claims from current pitch materials that would need verification evidence.
                4. Counsel's drafting and verification conventions noted for the team.

                ## Notes
                Prospectus language is plain and evidenced. Superlatives such as market-leading need a source, or they come out.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Every prospectus section has a named internal owner, and a list of claims needing evidence has been shared with counsel."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Download three recent prospectuses from peers on your venue"
                - "List the main sections and assign an internal owner to each"
                - "Note the claims in your pitch materials that would need evidence"
                - "Ask counsel for their drafting and verification conventions"
            - name: Insider dealing and dealing code briefing
              description: |-
                ## Purpose
                As soon as the company is listed, and in some respects during the offer itself, directors and employees who hold inside information face rules on dealing, closed periods, disclosure and record keeping, and breaches can be criminal. A briefing from counsel for the board, executives and the finance team, repeated each year and for new senior hires, makes sure no one learns the rules after the fact.

                ## Milestones
                1. A briefing delivered by counsel to directors, executives and finance staff.
                2. A share dealing code drafted with closed periods and a clearance procedure.
                3. Attendance recorded, with slides sent to anyone absent.
                4. New senior hires briefed within thirty days of joining.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A share dealing code exists and every director and senior manager has a recorded briefing from counsel within the last year."
                cadence: cyclic
              tasks:
                - "Book a briefing with counsel for directors, executives and finance"
                - "Ask counsel to draft the share dealing code and clearance procedure"
                - "Record attendance and send the slides to those absent"
                - "Repeat the briefing for the board and new senior hires @recurring(yearly)"
            - name: Bookbuilding, pricing and allocation explained
              description: |-
                ## Purpose
                Few private-company executives have seen how the final weeks of an offer work: price ranges, indications of interest, book coverage, allocation between long-only funds, hedge funds and retail investors, and the over-allotment option and stabilisation. Understanding these mechanisms, and which ones the company can influence, lets management discuss pricing with the syndicate as an informed client rather than a spectator.

                ## Milestones
                1. Notes on how the price range is set and how the book is built.
                2. A written list of allocation questions the board wants the banks to answer.
                3. The over-allotment option and stabilisation explained in your own words.
                4. A list of pricing decisions the board keeps and those it delegates.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A written note on bookbuilding and allocation, and a board-agreed list of retained and delegated pricing decisions, exist before launch."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Ask the lead bank's syndicate desk to walk through a recent book"
                - "Write in your own words how the over-allotment option works"
                - "List the allocation questions the board wants answered"
                - "Agree which pricing decisions stay with the board"
            - name: Public-company accounting and disclosure topics
              description: |-
                ## Purpose
                Several accounting areas get harder or newly visible at listing: segment reporting, earnings per share, share-based payment expense, revenue recognition judgements, related party disclosures and alternative performance measures. A finance team that works through each topic with the auditors before drafting starts avoids late restatements and long debates during the regulator's review.

                ## Milestones
                1. The topics relevant to your business agreed with the auditors.
                2. A short position paper written on each significant judgement.
                3. Reporting segments decided, consistent with how the CEO manages the business.
                4. The auditors' agreement recorded against each position paper.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A position paper exists for each significant public-company accounting judgement, each with the auditors' recorded agreement."
                cadence: phased
                effort_hours_estimate: "15"
              tasks:
                - "Ask the auditors which public-company topics apply to you"
                - "Write a short position paper on each significant judgement"
                - "Decide reporting segments that match how the business is managed"
                - "Record the auditors' agreement on each position paper"
            - name: Director induction for a listed company board
              description: |-
                ## Purpose
                Directors who have only sat on private boards may not know how prospectus liability, listed-company duties, committee roles and shareholder expectations change their job. An induction pack and session for every current and incoming director, covering duties, the programme plan and the company's key risks, gives each one the grounding to approve the prospectus with confidence.

                ## Milestones
                1. An induction pack with the plan, risk register and governance documents.
                2. A session with counsel on directors' responsibilities for the prospectus.
                3. Each director's questions collected and answered in writing.
                4. The proposed directors' and officers' insurance cover explained to the board.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Every director has received the induction pack and attended a counsel session on prospectus responsibility, with attendance recorded."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Assemble an induction pack with the plan, risks and governance documents"
                - "Book counsel to brief directors on prospectus responsibility"
                - "Collect each director's questions and circulate the answers"
                - "Ask the insurance broker to explain the proposed directors' and officers' cover"
            - name: Independent director recruitment for listing
              description: |-
                ## Purpose
                Governance codes and listing rules typically expect a substantial share of independent directors, an independent chair or senior independent director, and audit committee members with recent financial experience. Recruitment often takes six to nine months once a search firm is involved, and appointing the new directors early lets them shape the prospectus rather than inherit it.

                ## Milestones
                1. The current board's skills and independence mapped against the chosen code.
                2. A search brief naming the missing skills and experience agreed by the board.
                3. Candidates checked for independence, conflicts and time commitment.
                4. At least two independent directors appointed, including one with recent financial experience.
                5. Board composition meeting the chosen code, or departures explained.
              priority: high
              deadlineOffsetDays: 270
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "Independent directors are appointed so the board meets the chosen governance code, with at least one financial expert on the audit committee."
                cadence: phased
                effort_hours_estimate: "25"
              tasks:
                - "Map the current board's skills and independence against the code"
                - "Write a search brief naming the skills and experience missing"
                - "Shortlist candidates and check independence and time commitment"
                - "Agree terms and appointment dates with the chosen candidates"
            - name: Board committee charters and calendar
              description: |-
                ## Purpose
                Audit, remuneration and nomination committees do most of the detailed governance work of a listed company, and investors read their charters and membership in the prospectus. Drafting the charters with counsel, setting a yearly calendar of what each committee reviews and holding a few meetings before listing gives the committees a working record rather than a paper existence.

                ## Milestones
                1. Charters for the audit, remuneration and nomination committees approved by the board.
                2. Chairs and members appointed for each committee.
                3. A yearly calendar of each committee's agenda items set against the board calendar.
                4. At least two meetings of each committee held before the filing.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Three approved committee charters exist and each committee has met at least twice, with minutes, before the filing."
                cadence: one-shot
                effort_hours_estimate: "10"
              tasks:
                - "Ask counsel for charter drafts that match the governance code"
                - "Appoint chairs and members for each committee"
                - "Map each committee's yearly agenda onto the board calendar"
                - "Review each charter against the year's work @recurring(yearly)"
            - name: Legal and contract housekeeping before diligence
              description: |-
                ## Purpose
                Underwriters' counsel will read every material contract, board minute, share issue and intellectual property assignment, and gaps that were tolerable privately become disclosure points or deal delays. Finding missing signatures, unassigned IP from early contractors, change-of-control clauses in customer contracts and unfiled corporate records now gives you months to fix what would otherwise be found in a few weeks.

                ## Milestones
                1. Material contracts above an agreed value reviewed for change-of-control, exclusivity and assignment clauses.
                2. Signed IP assignments confirmed for founders, employees and contractors.
                3. The statutory share register reconciled with every board and shareholder approval.
                4. Litigation and regulatory matters summarised with counsel.
                5. Each problem fixed, or its disclosure agreed with counsel.
              priority: medium
              deadlineOffsetDays: 150
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "A housekeeping log shows every material contract, IP assignment and share issue checked, with each gap fixed or its disclosure agreed."
                cadence: phased
                effort_hours_estimate: "30"
              tasks:
                - "Agree with counsel the contract value that counts as material"
                - "Check change-of-control and assignment clauses in the top customer contracts"
                - "Confirm signed IP assignments for founders, staff and early contractors"
                - "Reconcile the statutory share register with every board approval"
            - name: Selecting the lead underwriters
              description: |-
                ## Purpose
                Banks running the offer shape the valuation narrative, the investor list, research coverage and support for the shares after listing, and choosing them on relationship alone is a common regret. A structured selection, often called a bake-off, asks each bank the same questions on sector credibility, distribution strength, research analyst, recent deal performance and fees, so the board compares like with like.

                ## Milestones
                1. A longlist drawn from banks that led recent sector listings on the venue.
                2. The same written questions and fee request sent to every bank.
                3. Presentations scored by at least three evaluators against agreed criteria.
                4. References taken from issuers each shortlisted bank recently took public.
                5. Lead banks appointed, with engagement letter terms reviewed by counsel.

                ## Notes
                Start from the **Vendor** template to keep each bank's answers, fees and references side by side. Ask how each bank's recent listings trade six and twelve months after pricing, not only on the first day.
              priority: high
              deadlineOffsetDays: 180
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "Lead underwriters are appointed after a scored comparison of at least three banks, with references taken and engagement letters reviewed by counsel."
                cadence: one-shot
                effort_hours_estimate: "20"
              tasks:
                - "List banks that led sector listings on your venue in the last three years"
                - "Send every bank the same written questions and fee request"
                - "Score each presentation with at least three evaluators"
                - "Call two issuers each shortlisted bank took public recently"
                - "Ask counsel to review the engagement letter before signing"
            - name: Appointing counsel, auditors and the adviser team
              description: |-
                ## Purpose
                Alongside the banks, a listing needs issuer's securities counsel, sometimes local counsel in each jurisdiction, auditors who meet listed-company independence rules, a reporting accountant where the venue requires one, a registrar or transfer agent, a financial printer and, on growth markets, a nominated adviser. Appointing them in a planned order, with written scopes, avoids duplicated work and gaps such as no one owning the working capital report.

                ## Milestones
                1. An adviser map listing every role the venue and offer structure require.
                2. A one-page scope written for each role before proposals are requested.
                3. At least two firms considered for issuer's counsel.
                4. Engagement letters signed with fee estimates for every role.
                5. A responsibility matrix circulated showing who owns each document.

                ## Notes
                Start from the **Vendor** template for each adviser so scope, fees and contacts sit in one place.
              priority: high
              deadlineOffsetDays: 120
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "Every adviser role the venue requires is filled under a signed engagement letter, and a responsibility matrix has been circulated."
                cadence: one-shot
                effort_hours_estimate: "15"
              tasks:
                - "Map every adviser role the venue and the offer structure need"
                - "Write a one-page scope for each role before asking for proposals"
                - "Interview at least two securities law firms with recent listings"
                - "Circulate a responsibility matrix showing who owns each document"
            - name: Finance systems for public reporting
              description: |-
                ## Purpose
                Spreadsheet consolidations, manual revenue schedules and an accounting package the business has outgrown are the usual sources of late closes and control failures. Deciding which systems need replacing or upgrading, such as the general ledger, consolidation, revenue and equity administration, and completing the change at least two quarters before listing, avoids switching systems in the very period the auditors are reviewing.

                ## Milestones
                1. An inventory of every system and spreadsheet that feeds reported numbers.
                2. Each one rated for error risk, access control and audit trail.
                3. Replace, upgrade or keep decisions recorded with reasons and costs.
                4. Each new system run in parallel for at least one close.
                5. Go-live completed at least two quarters before the planned listing.

                ## Notes
                Avoid going live with a new ledger in the last quarter before a filing. If the timeline forces it, tell the auditors early.
              priority: medium
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "Every system feeding reported numbers has a recorded decision, and any replacements went live after a parallel run at least two quarters before listing."
                cadence: phased
                effort_hours_estimate: "40"
              tasks:
                - "List every system and spreadsheet that feeds the reported numbers"
                - "Rate each one for error risk, access controls and audit trail"
                - "Decide which to replace and record the reasoning and cost"
                - "Plan a parallel run of at least one close for each new system"
            - name: Building the public-company finance team
              description: |-
                ## Purpose
                A listed company typically needs roles a private one can do without: a financial reporting lead who has drafted public filings, a head of tax, an internal audit function, an investor relations lead and a company secretary. Hiring them six to twelve months before listing gives each person time to learn the business and take ownership of their part of the prospectus.

                ## Milestones
                1. A target finance and governance organisation drawn for the first listed year.
                2. Missing roles identified, with those that can be interim or outsourced marked.
                3. Hires ranked by when their workstream starts, with budget approved.
                4. Each new hire given a first 90-day plan tied to the IPO plan.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Every role in the target organisation is filled, interim or scheduled, and each new hire has a written 90-day plan."
                cadence: phased
                effort_hours_estimate: "30"
              tasks:
                - "Draw the target finance and governance organisation for the first listed year"
                - "Mark which roles are missing and which can be interim"
                - "Rank the hires by how early their workstream starts"
                - "Give each new hire a first 90-day plan tied to the IPO plan"
            - name: Equity incentive plans for a listed company
              description: |-
                ## Purpose
                Private-company option schemes rarely suit a listed company: investors expect long-term incentive plans with performance conditions and dilution limits, often alongside an all-employee share plan, and shareholders usually vote on them. Designing the post-listing plans with remuneration advisers, and deciding how existing options vest or convert, settles what employees will hold and what the prospectus must disclose.

                ## Milestones
                1. Every existing award summarised, with what happens to it at listing.
                2. Peer plan terms and dilution limits gathered by remuneration advisers.
                3. Post-listing plan terms drafted and approved by the board for shareholder approval.
                4. A plain-language note for employees prepared and checked by advisers.

                ## Notes
                The tax treatment of employee awards varies by country and can change with a listing. Take advice before telling employees anything about value or timing.
              priority: medium
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "Post-listing incentive plan terms are board-approved for a shareholder vote, and every existing award has a documented treatment at listing."
                cadence: phased
                effort_hours_estimate: "20"
              tasks:
                - "Summarise every existing award and what happens to it at listing"
                - "Ask remuneration advisers for peer plan terms and dilution limits"
                - "Draft the post-listing plan terms for board review"
                - "Prepare a plain-language note for employees on what will change"
            - name: Dual-track decision between listing and a sale
              description: |-
                ## Purpose
                Many companies preparing to list also receive approaches from trade buyers or private equity, and running a sale process in parallel can create price tension but doubles the load on the same small team. Agreeing up front whether to run a dual track, what offer would beat the listing case and who handles approaches stops the board drifting into a half-run sale that distracts from readiness.

                ## Milestones
                1. An indicative listing valuation range and expected proceeds from the banks.
                2. Written criteria an approach must meet before the board engages.
                3. A board decision on whether to run a dual track, with reasons.
                4. A protocol naming who receives and responds to inbound approaches.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "The board has minuted whether to run a dual track and adopted written criteria and a named owner for inbound approaches."
                cadence: one-shot
                effort_hours_estimate: "12"
              tasks:
                - "Ask the banks for an indicative listing valuation range and its assumptions"
                - "Write the criteria an approach would need to meet to be considered"
                - "Agree which director receives and responds to inbound approaches"
                - "Record the board's dual-track decision in the minutes"
            - name: Comparing alternatives to a traditional IPO
              description: |-
                ## Purpose
                A traditional underwritten offer is not the only route onto an exchange: direct listings, a merger with a listed acquisition vehicle, an introduction without raising money or a placing on a growth market each trade cost, speed, price certainty and dilution differently. Comparing them honestly before appointing banks, whose fees depend on the route, keeps the choice in the board's hands.

                ## Milestones
                1. Each route available on the chosen venue described in a paragraph.
                2. A comparison table covering capital raised, cost, timeline, price discovery and dilution.
                3. The table reviewed by an adviser with no fee riding on the outcome.
                4. The board's chosen route recorded with its reasons.

                ## Notes
                Mergers with listed acquisition vehicles have had mixed results after completion in several markets. Ask for the trading record of recent deals before treating one as a shortcut.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A comparison of at least three listing routes has been reviewed by an independent adviser and the board's chosen route is minuted."
                cadence: one-shot
                effort_hours_estimate: "10"
              tasks:
                - "List the listing routes available on your chosen venue"
                - "Compare them on capital raised, cost, time and price certainty"
                - "Ask an adviser with no fee in the outcome to review the table"
                - "Present the comparison and record the board's chosen route"
            - name: Prospectus drafting and verification
              description: |-
                ## Purpose
                Drafting the prospectus takes months of all-party sessions with counsel and the banks, and every statement of fact must be backed by evidence in a verification file. Running the drafting to an agreed calendar, with section owners and a verification log kept as you go, avoids the late scramble in which claims are cut because no one can prove them.

                ## Milestones
                1. A drafting calendar agreed, with a named internal owner for each section.
                2. A first full draft circulated to all parties.
                3. Verification evidence filed for every factual statement.
                4. Risk factors reviewed in full by the board.
                5. The final draft approved by directors, with responsibility statements signed.
              priority: high
              deadlineOffsetDays: 365
              frontmatter:
                mode: event
                output_kind: deliverable
                success_criteria: "A board-approved prospectus exists with a verification log that evidences every factual statement and signed director responsibility statements."
                cadence: phased
                effort_hours_estimate: "120"
              tasks:
                - "Agree a drafting session calendar with counsel and the banks"
                - "Give each prospectus section a named internal owner"
                - "Keep a verification log with evidence for each factual claim"
                - "Book a board session to review the risk factors in full"
            - name: Regulatory filing and comment rounds
              description: |-
                ## Purpose
                Many venues let companies submit a draft prospectus to the regulator confidentially, and the review then runs through rounds of comments that each need a careful written response. Planning the response process, who drafts, who signs off and how fast, keeps the comment cycle from adding months to the timetable.

                ## Milestones
                1. The filing route and date confirmed with counsel.
                2. Owners and a turnaround time agreed for each comment round.
                3. Every regulator comment logged with owner, response and status.
                4. All comments cleared and the public filing timing agreed.

                ## Notes
                Ask counsel whether confidential submission is available on your venue and when the filing must become public before the roadshow.
              priority: medium
              deadlineOffsetDays: 420
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "Every regulator comment is logged and cleared, and the date for the public filing is agreed with counsel."
                cadence: phased
                effort_hours_estimate: "40"
              tasks:
                - "Ask counsel whether confidential submission is available on your venue"
                - "Agree owners and a turnaround time for each comment letter"
                - "Log every regulator comment with owner, response and status"
                - "Brief the board after each round on any change to disclosure"
            - name: Analyst presentation and early investor education
              description: |-
                ## Purpose
                Before launch, research analysts at the syndicate banks usually hear a detailed management presentation and build their own models, and in some markets management also holds early meetings with selected investors to test the story. Preparing a well-rehearsed presentation and consistent answers on the numbers sets the tone for how the company will be valued and covered.

                ## Milestones
                1. An analyst presentation drafted from the prospectus and cleared by counsel.
                2. A bank of the sixty hardest questions with agreed answers.
                3. Two rehearsals completed in front of the bankers.
                4. Analyst and investor feedback logged, with changes to the story decided.

                ## Notes
                Communication rules before an offer are strict. Every slide and handout goes through counsel, and nothing should be said that is not in, or consistent with, the prospectus.
              priority: medium
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "The analyst presentation has been delivered from counsel-cleared materials and the feedback log has a recorded decision on each point."
                cadence: one-shot
                effort_hours_estimate: "30"
              tasks:
                - "Draft the analyst presentation from the prospectus business section"
                - "Ask the agent to draft a bank of the sixty hardest analyst questions"
                - "Rehearse twice with the CEO and CFO in front of the bankers"
                - "Log analyst and investor feedback and decide what to change"
            - name: Roadshow preparation and management rehearsal
              description: |-
                ## Purpose
                A roadshow packs dozens of investor meetings into one or two weeks, often across several cities and time zones, and the CEO and CFO must tell the same story fresh each time while the business keeps running. Preparing the presentation, rehearsing questions, planning the schedule and naming who runs the company in their absence protects both the offer and the quarter's results.

                ## Milestones
                1. The roadshow presentation and any recorded version finalised and cleared by counsel.
                2. Three full rehearsals completed with bankers playing difficult investors.
                3. A named deputy running daily operations while the CEO and CFO travel.
                4. A daily feedback call with the syndicate in the schedule.
              priority: medium
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "Three full rehearsals are complete, a deputy is named for daily operations and the roadshow schedule is confirmed with the syndicate."
                cadence: one-shot
                effort_hours_estimate: "40"
              tasks:
                - "Name who runs daily operations while the CEO and CFO are away"
                - "Run three full rehearsals with bankers playing tough investors"
                - "Agree a daily call with the syndicate to review investor feedback"
                - "Plan travel, rest and spare slots across the roadshow weeks"
            - name: Pricing day and first day of trading
              description: |-
                ## Purpose
                Pricing night and the first trading day compress big decisions into hours: final price and size, allocations, the announcement, employee messages and the opening at the exchange. Agreeing beforehand who is in the room, what the board has delegated, what communications say in each scenario and how employees hear the news keeps the day calm and the record clean.

                ## Milestones
                1. A pricing committee formed, with its delegated authority written down.
                2. Announcements drafted for pricing at the top, middle and bottom of the range.
                3. An employee announcement plan ready to run before the media story.
                4. Closing, settlement and stabilisation reporting steps confirmed with counsel and the registrar.
              priority: medium
              deadlineOffsetDays: 540
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "Pricing is completed by a committee acting within written delegated authority, and closing and settlement are confirmed by the registrar."
                cadence: one-shot
                effort_hours_estimate: "12"
              tasks:
                - "Set up a pricing committee and write down its delegated authority"
                - "Draft announcements for pricing at the top, middle and bottom of the range"
                - "Plan how employees hear the news before the media does"
                - "Confirm closing and settlement steps with counsel and the registrar"
            - name: Announcing the planned listing to staff and partners
              description: |-
                ## Purpose
                The announcement that the company intends to list is the first public moment of the process, and staff, customers and suppliers all react to it. Preparing an internal question and answer sheet, briefing managers shortly beforehand and giving employees clear rules on share dealing and media contact turns the moment into a morale lift instead of a rumour mill.

                ## Milestones
                1. Announcement wording approved by counsel and the board.
                2. A manager briefing pack and staff question sheet ready.
                3. A short note for key customers and suppliers drafted.
                4. Employee rules on media contact and share dealing circulated.
                5. Staff questions logged and answered within two working days.
              priority: low
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "On announcement day managers were briefed beforehand, staff rules were circulated and every logged question was answered within two working days."
                cadence: one-shot
                effort_hours_estimate: "10"
              tasks:
                - "Draft an internal question sheet with counsel on what staff may say"
                - "Brief managers an hour before the public announcement"
                - "Send key customers and suppliers a short note on what changes"
                - "Log employee questions and publish answers within two days"
            - name: Founder readiness for life as a listed CEO
              description: |-
                ## Purpose
                Founders who take a company public give up some control and privacy: their holdings, pay and share dealings become public, sales are restricted by lock-ups and closed periods, and quarterly scrutiny lands on them personally. Working through control arrangements, personal tax and wealth advice, a selling plan and media training before drafting starts lets the founder decide calmly rather than under deal pressure.

                ## Milestones
                1. The founder's goals for control, liquidity and role written down.
                2. Control structures the venue and investors accept discussed with counsel.
                3. Personal tax and wealth advice taken from advisers separate from the company's.
                4. A lock-up and selling plan agreed with the banks.
                5. Media and presentation training completed before the analyst presentation.

                ## Notes
                Personal advice should come from advisers who act for you, not for the company or the banks, because your interests and theirs can differ.
              priority: medium
              frontmatter:
                mode: building
                output_kind: knowledge
                success_criteria: "The founder has written goals, separate personal advice on file, an agreed selling plan and completed media training before the analyst presentation."
                cadence: phased
                effort_hours_estimate: "15"
              tasks:
                - "Write down what you want from listing in control, money and role"
                - "Ask counsel which control structures the venue and investors accept"
                - "Book personal tax and wealth advice separate from the company's advisers"
                - "Arrange media and presentation training before the analyst session"
            - name: Sponsor-backed listing of a private equity owned company
              description: |-
                ## Purpose
                When a private equity owner takes a portfolio company public, the listing is also the sponsor's exit route, so the size of its sale, lock-up terms, a relationship agreement and post-listing board seats all need agreeing between management, the sponsor and the banks. Managers who understand the sponsor's goals early can protect the company's own interests, such as using primary proceeds to pay down debt or keeping management incentives intact.

                ## Milestones
                1. The sponsor's sell-down plan and timing documented.
                2. The treatment of the management incentive plan at listing agreed.
                3. Relationship agreement terms drafted with counsel where the venue requires one.
                4. A refinancing plan for existing borrowings agreed with lenders and the banks.
                5. Post-listing board composition agreed, including any sponsor directors.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "The sponsor's sell-down plan, the management incentive treatment and post-listing board composition are agreed in writing."
                cadence: phased
                effort_hours_estimate: "15"
              tasks:
                - "Ask the sponsor to set out its sell-down plan and timing"
                - "Agree how the management incentive plan converts at listing"
                - "Ask counsel what a relationship agreement must cover on your venue"
                - "Meet the sponsor deal team on exit timing and market view @recurring(quarterly)"
            - name: Carve-out listing of a corporate division
              description: |-
                ## Purpose
                Carving a division out of a larger group and listing it means creating a company that has never existed on its own: carve-out financial statements, a standalone cost base, its own board, treasury and systems, and transitional services agreements with the parent. Planning the separation as a workstream of its own, with a dated exit from each shared service, is what convinces investors the new company can stand alone.

                ## Milestones
                1. The perimeter of the listed business agreed with the parent.
                2. Carve-out financial statements prepared with the auditors' agreed approach.
                3. A standalone cost base estimated for every function the parent provides.
                4. Transitional services agreements signed, each with an exit date.
                5. A separate board, treasury and core systems in place before listing.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "An agreed perimeter, audited carve-out accounts and signed transitional services agreements with exit dates exist before the filing."
                cadence: phased
                effort_hours_estimate: "60"
              tasks:
                - "Agree the perimeter of the business being listed with the parent"
                - "Ask the auditors how carve-out financial statements will be prepared"
                - "List every shared service and give each a target exit date"
                - "Estimate the standalone cost of each function the parent provides today"
            - name: Finance manager on the IPO project team
              description: |-
                ## Purpose
                Managers seconded to an IPO often carry the project on top of their normal role for a year, and burnout or a missed close is common in the final months. Agreeing what you hand over, which deliverables you own, which public-company skills you will build and what recognition follows turns the project into a career step rather than a drain.

                ## Milestones
                1. A written agreement with your manager on the duties you drop or delegate.
                2. Your IPO deliverables and decision rights listed and agreed with the CFO.
                3. Two public-company skills chosen to build, with a way to practise each.
                4. Recognition or retention terms discussed and noted.
                5. A weekly workload check kept through the final six months.

                ## Notes
                Ask for decision rights as well as tasks. Owning a section of the prospectus or the close calendar outright is better experience than supporting everything.
              priority: low
              frontmatter:
                mode: building
                output_kind: knowledge
                success_criteria: "A written handover agreement and deliverables list exist, and weekly workload checks have been held for at least eight weeks."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "List the day-job tasks you will hand over or pause"
                - "Agree your IPO deliverables and decision rights with the CFO"
                - "Pick two public-company skills to build during the project"
                - "Review workload and handover gaps with your manager @recurring(weekly:fri)"
            - name: Listing on a growth or regional exchange
              description: |-
                ## Purpose
                Smaller companies often list on a growth segment or a regional exchange, such as a junior market in the Caribbean or an alternative market in Europe, where admission rules are lighter, a nominated or sponsoring adviser vouches for the company and some markets offer tax incentives for a set period. The trade-offs are a smaller investor pool, thinner trading and the need to keep the adviser satisfied, so the case needs testing against the company's real size and plans.

                ## Milestones
                1. The market's rules, adviser model and any incentive conditions summarised.
                2. At least two firms that act as listing advisers on the market met.
                3. Trading frequency of comparable listed companies reviewed.
                4. Local institutional demand assessed with brokers, from pension funds to insurers.
                5. A recorded decision on whether the market fits the company's plans.

                ## Notes
                Incentives on some junior markets depend on staying listed for a minimum period and meeting conditions throughout. Have counsel and tax advisers confirm the current terms.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "The board has recorded whether to list on the growth or regional market after meeting two listing advisers and reviewing peer trading data."
                cadence: phased
                effort_hours_estimate: "15"
              tasks:
                - "Read the market's rules and any incentive conditions"
                - "Meet two firms that act as listing advisers on that market"
                - "Check how often comparable companies' shares actually trade"
                - "Ask local brokers which institutions buy new listings there"
            - name: Listing abroad as a foreign issuer
              description: |-
                ## Purpose
                Companies from smaller markets sometimes list on a larger foreign exchange, directly or through depositary receipts, to reach deeper pools of capital. Doing so brings reporting in another framework or a reconciliation to it, foreign securities law liability, currency and tax questions, and governance expectations that may differ from home rules, so the extra cost needs weighing against the valuation and liquidity it buys.

                ## Milestones
                1. Direct listing abroad, depositary receipts and a dual listing compared.
                2. Foreign issuer accommodations and obligations summarised by counsel.
                3. The reporting framework impact assessed with the auditors.
                4. The yearly extra cost of reporting in two markets estimated.
                5. A board decision recorded on whether and where to list abroad.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "The board has decided on a foreign listing route after reviewing counsel's summary of issuer obligations and a costed reporting estimate."
                cadence: phased
                effort_hours_estimate: "20"
              tasks:
                - "Ask counsel to summarise foreign issuer rules on the target exchange"
                - "Compare direct listing abroad, depositary receipts and a dual listing"
                - "Check with the auditors which reporting framework would apply"
                - "Estimate the yearly extra cost of reporting in two markets"
            - name: Sustainability and cyber disclosure readiness
              description: |-
                ## Purpose
                Institutional investors and, in a growing number of markets, regulators expect a company coming to market to disclose climate and sustainability data, cyber security governance and data protection practices alongside its financials. Gathering reliable data now, with owners and controls like any financial number, avoids making claims in the prospectus that the company cannot evidence a year later.

                ## Milestones
                1. The disclosure requirements and investor frameworks that apply identified with counsel.
                2. An owner and data source named for each metric to be disclosed.
                3. A first full data set collected and reviewed for accuracy.
                4. Board oversight of cyber risk and incident response documented.
                5. Every sustainability claim in draft materials checked against evidence.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Each sustainability and cyber metric to be disclosed has an owner and source, and every related claim in the draft prospectus has evidence on file."
                cadence: phased
                effort_hours_estimate: "25"
              tasks:
                - "Ask counsel which sustainability and cyber disclosures apply on your venue"
                - "Name an owner and data source for each metric you will disclose"
                - "Document how the board oversees cyber risk and incident response"
                - "Collect and review the sustainability data set @recurring(quarterly)"
            - name: Share capital restructuring before admission
              description: |-
                ## Purpose
                Ahead of admission, preferred shares usually convert to ordinary shares, convertible instruments settle, a share split or consolidation sets a sensible price per share and the articles are rewritten for a listed company. Mapping each step, the shareholder consents it needs and its effect on every holder lets the company secure all approvals in one well-organised round instead of chasing signatures in the final weeks.

                ## Milestones
                1. A pro forma share register showing every class as it will stand at listing.
                2. Conversion mechanics confirmed for each share class and instrument.
                3. Required consents and voting thresholds listed for each step.
                4. New articles for the listed company drafted by counsel.
                5. All shareholder approvals obtained and filed.

                ## Notes
                Conversion terms for preferred shares can be complex, especially where different rounds carry different rights. Have counsel confirm the mechanics before any holder sees a pro forma figure.
              priority: medium
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A pro forma share register is agreed with counsel and every shareholder approval needed for conversion and the new articles is obtained and filed."
                cadence: phased
                effort_hours_estimate: "20"
              tasks:
                - "Build a pro forma share register showing each class converting at listing"
                - "List the shareholder consents each step needs and the voting thresholds"
                - "Ask counsel to draft the articles for the listed company"
                - "Send shareholders one consent pack covering every step"
---

# IPO Readiness Programme

This area is for founders, CFOs and leadership teams getting a private company, a sponsor-owned business or a corporate division ready to list on a stock exchange. It starts with the foundations (the gap assessment, the reason to list, the venue, the timeline, eligibility, group structure and audited history), then the operating machinery of a readiness programme, the knowledge a listed company's leaders need, the decisions on directors, advisers, systems and equity plans, the dated events from prospectus drafting to the first trading day, situations for founders, sponsors, carve-outs, project team members and smaller exchanges, and finally specialist work on foreign listings, sustainability disclosure and share capital restructuring.

What repeats is a weekly stand-up and remediation chase, monthly steering, close, KPI, disclosure, confidentiality, risk, budget and board reporting rhythms spread across different days, quarterly reporting dry runs and control testing, and yearly audit planning, charter reviews and dealing code briefings. The Risk register, Board meeting, Month-end close, Compliance control, Remediation plan and Vendor templates pair with the projects that name them. Installing adds all 50 projects as active, so archive the ones that are not for you yet.
