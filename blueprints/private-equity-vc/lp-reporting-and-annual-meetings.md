---
id: private-equity-vc.lp-reporting-and-annual-meetings
name: LP Reporting and Annual Meetings
description: "LP reporting that arrives on time and answers the questions: an obligations map, a valuation policy, quarterly reports and capital account statements, ILPA templates, an LP enquiry log and an annual meeting worth the flight."
category: business
version: 1.0.0
tags: [private-equity-vc, lp-reporting-and-annual-meetings, founder, knowledge-worker, investor-relations, quarterly-reporting, ilpa, fund-valuation]
author: Aurum Technology
starter_structure:
  templates:
    - operational-checklist
    - purchase-decision
    - board-meeting
    - meeting-notes
    - feedback-themes
    - onboarding-30-60-90
  pillars:
    - name: Private Equity & Venture Capital
      emoji: "💹"
      description: "Private markets from the investor's side: sourcing and screening deals, LBO models, investment committee memos, due diligence, value creation and exits, raising and running your own fund, search funds and independent sponsors, venture deal flow and board seats, and careers in both, for people building their own track record."
      pillarFrontmatter:
        review_cadence: monthly
      areas:
        - name: LP Reporting and Annual Meetings
          description: "Reporting to fund investors: quarterly reports, capital account statements, valuation policy, ILPA templates and running the annual meeting."
          projects:
            - name: Map of every reporting promise in the LPA and side letters
              description: |-
                ## Purpose
                Reporting duties are scattered across the limited partnership agreement, the PPM, a dozen side letters and whatever was said in fundraising meetings, and the one nobody remembers is the one an LP will cite. A single map of what is owed, to whom, by when and in what form turns a vague sense of obligation into a checklist the team can run every quarter.

                ## Milestones
                1. The reporting, valuation and audit clauses of the executed LPA extracted with clause references.
                2. Every side letter read and each reporting promise added to the map with the LP named.
                3. Each obligation tagged with its deadline, such as 45, 60 or 90 days after quarter end.
                4. Promises made in fundraising emails or DDQ answers listed separately for review.
                5. The map signed off by fund counsel or the CFO as complete.

                ## Notes
                Most favoured nation elections can extend one LP's reporting right to others, so check the MFN election results before closing the map.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A reporting obligations map exists listing every LPA and side letter duty with clause reference, recipient and deadline, signed off by counsel or the CFO."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Pull the executed LPA and every side letter into one folder"
                - "Extract each reporting, valuation and audit clause with its reference"
                - "Check the MFN election results for reporting rights that spread"
                - "Ask fund counsel to confirm the map is complete"
            - name: LP contact list and report distribution permissions
              description: |-
                ## Purpose
                Reports go to the wrong person more often than they go late: the LP's analyst who left, a consultant who was never authorised, a family office principal who wanted paper. A clean list of who receives what, confirmed by each LP in writing, protects confidentiality and stops reports bouncing into empty inboxes.

                ## Milestones
                1. Every LP entity listed with named recipients for reports, capital calls and notices.
                2. Each recipient's permission level recorded, such as full report, statement only or notices only.
                3. Consultants and gatekeepers with access confirmed in writing by the LP.
                4. A written process for adding and removing recipients, with LP confirmation required.

                ## Notes
                Never accept a change of recipient by email alone without calling back a known contact at the LP. Changes to who receives statements are a common fraud route.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A distribution list confirmed in writing by every LP, with permission levels and a documented change process."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Export the current recipient list from the portal or mailing tool"
                - "Send each LP its recipient list and ask for written confirmation"
                - "Write the call-back rule for any change of recipient"
                - "Check the recipient list against leavers and new contacts @recurring(quarterly)"
            - name: Written valuation policy for quarterly marks
              description: |-
                ## Purpose
                LPs, auditors and the LPAC all ask the same first question about a quarterly mark: what is the method and who decided it. A written valuation policy that names the fair value framework, the methods by asset type, the inputs and the approval route means every quarter starts from the same rules instead of a fresh argument about multiples.

                ## Milestones
                1. The accounting framework and the fair value guidelines the fund follows named in the policy.
                2. Methods set out for each asset type, such as recent transaction, comparable multiples and discounted cash flow.
                3. Rules written for calibration to entry price, marketability discounts and when to change method.
                4. The approval route described, with the valuation committee members and quorum.
                5. The policy reviewed by the auditor and noted by the LPAC.

                ## Notes
                Agree the policy with your auditor before the first year end, not during fieldwork. Changing method later needs a recorded reason.
              priority: high
              deadlineOffsetDays: 60
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A valuation policy covering framework, methods by asset type, calibration rules and approval route is approved and has been reviewed by the auditor."
                cadence: one-shot
                effort_hours_estimate: "12"
              tasks:
                - "Collect two or three peer valuation policies for comparison"
                - "Draft methods and inputs for each asset type the fund holds"
                - "Write the calibration and change of method rules"
                - "Send the draft policy to the auditor for comment"
            - name: Quarterly LP report template and house style
              description: |-
                ## Purpose
                A report rebuilt from scratch each quarter drifts in structure, so LPs cannot compare one quarter with the next and the team spends days on layout. A fixed template, with set sections, a performance summary page, standard company pages and a style sheet, cuts production time and makes changes in the numbers stand out.

                ## Milestones
                1. Section order fixed: letter, fund summary, performance, portfolio pages, financials, fees and expenses.
                2. A one-page fund summary designed with commitments, called capital, NAV, DPI, TVPI and net IRR.
                3. A standard portfolio company page with the same fields for every holding.
                4. A style sheet covering terms, number formats, currency and rounding.
                5. The template tested by producing last quarter's report in it.

                ## Notes
                Put definitions of every metric in an appendix once, and keep them identical across quarters.
              priority: high
              deadlineOffsetDays: 45
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A quarterly report template with fixed sections, a summary page, a standard company page and a style sheet has been used to produce one complete report."
                cadence: one-shot
                effort_hours_estimate: "14"
              tasks:
                - "Gather three quarterly reports LPs have praised as models"
                - "Sketch the section order and the fund summary page"
                - "Write the style sheet for terms, numbers and rounding"
                - "Rebuild last quarter's report in the new template"
            - name: Capital account statement format and tie-out rules
              description: |-
                ## Purpose
                The capital account statement is the document LPs book into their own ledgers, so a figure that does not roll forward from last quarter creates queries that take weeks to close. A statement layout with a clear opening balance, contributions, distributions, fees, allocated gains and closing balance, plus written tie-out rules, gives every LP the same audit trail.

                ## Milestones
                1. A statement layout showing commitment, unfunded commitment and a full period roll-forward.
                2. Inception to date and quarter to date columns agreed.
                3. Tie-out rules written: closing balance equals the sum of LP accounts equals partners' capital in the accounts.
                4. The format checked against the ILPA capital account statement guidance.
                5. One quarter's statements produced and tied out under the new rules.
              priority: high
              deadlineOffsetDays: 45
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A capital account statement format with a full roll-forward and written tie-out rules has produced one quarter of statements that reconcile to the fund accounts."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Ask the administrator for its standard statement layout"
                - "Compare it with the ILPA capital account statement guidance"
                - "Write the three tie-out rules every statement must pass"
                - "Produce and tie out one quarter in the new format"
            - name: Deciding how far to adopt the ILPA reporting templates
              description: |-
                ## Purpose
                Many institutional LPs now expect the ILPA reporting template for fees, expenses and carried interest and the ILPA performance template, and some write them into side letters. Deciding which templates to adopt, from which quarter and with what level of detail, is a decision the GP should make on purpose rather than one LP at a time.

                ## Milestones
                1. The current ILPA reporting and performance templates downloaded and read.
                2. A list of LPs that require, request or ignore each template.
                3. The cost of producing each template estimated with the administrator.
                4. A recorded decision on which templates to adopt and the first quarter they apply.
                5. LPs told the decision in the next quarterly letter.
              priority: medium
              deadlineOffsetDays: 60
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A written decision names which ILPA templates the fund adopts and from which quarter, and LPs have been told."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Download the latest ILPA reporting and performance templates"
                - "List which LPs require each template in their side letters"
                - "Ask the administrator to price producing each template"
                - "Record the adoption decision and the first quarter it applies"
            - name: Reporting calendar with internal cut-off dates
              description: |-
                ## Purpose
                Publishing 60 days after quarter end really depends on portfolio companies closing their books by day 20, the valuation committee meeting by day 35 and the administrator finishing statements by day 45. Writing those internal cut-offs into one calendar shows where each quarter actually slips and gives every contributor a date they can plan around.

                ## Milestones
                1. External deadlines for each quarter, the annual audit and the annual meeting entered.
                2. Internal cut-offs set for company data, valuation committee, draft report, review and sign-off.
                3. Each cut-off assigned to a named owner.
                4. The calendar shared with portfolio company CFOs, the administrator and the auditor.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A reporting calendar exists with external deadlines, internal cut-offs and owners, and has been shared with every contributor."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "List every external reporting deadline for the next twelve months"
                - "Work back from each deadline to set internal cut-off dates"
                - "Name an owner for every cut-off"
                - "Send the calendar to company CFOs, the administrator and the auditor"
            - name: Data sources and owners for each report section
              description: |-
                ## Purpose
                When nobody knows where the NAV bridge number came from, a late correction from the administrator can quietly disagree with the letter. A source map that names the system, file and owner behind every figure in the report makes review faster and makes errors traceable.

                ## Milestones
                1. Every figure in the report template linked to a source system or file.
                2. An owner named for each source, inside the firm, the administrator or the company.
                3. Manual steps and spreadsheet hand-offs marked as control points.
                4. A one-page source map saved beside the report template.
              priority: medium
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A source map links every report figure to a system, file and owner, with manual hand-offs marked as control points."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Mark every number in last quarter's report with where it came from"
                - "Name the owner of each source system or file"
                - "Highlight each manual copy and paste step as a control point"
                - "Save the one-page source map with the report template"
            - name: Investor portal set-up and access controls
              description: |-
                ## Purpose
                Emailing PDFs of capital account statements is how confidential data ends up forwarded to the wrong people. A portal with per-LP folders, named user access, download logs and a clear permission model gives LPs one place to find every document and gives the GP a record of who saw what.

                ## Milestones
                1. Folder structure agreed by fund, LP entity and document type.
                2. Every LP user set up with access matching the confirmed distribution list.
                3. Watermarking and download logging switched on for statements and reports.
                4. LPs sent a short guide to finding documents and adding users.
                5. An access review routine running.
              priority: medium
              deadlineOffsetDays: 75
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Every LP has named portal access matching the distribution list, with watermarking, download logs and a monthly access review in place."
                cadence: phased
                effort_hours_estimate: "12"
              tasks:
                - "Agree the folder structure by fund, LP and document type"
                - "Load users from the confirmed distribution list"
                - "Switch on watermarking and download logs for statements"
                - "Review portal users against the distribution list @recurring(monthly:14)"
            - name: Quarterly LP report production cycle
              description: |-
                ## Purpose
                Every quarter the same report gets built under the same deadline, and the difference between a calm quarter and a frantic one is whether the steps are written down. A production checklist from kick-off to portal upload, run the same way each quarter, keeps the report on time and makes the review stage about substance, not formatting.

                ## Milestones
                1. A kick-off note sent on the first working day after quarter end with the cut-off dates.
                2. Draft report assembled from the template by the internal draft date.
                3. Numbers reviewed against the capital account statements and the fund accounts.
                4. Letter and report signed off by the managing partner and the CFO.
                5. Report uploaded to the portal and LPs notified on or before the deadline.

                ## Notes
                Start from the **Operational checklist** template. Keep a short log of what slipped each quarter and fix one cause before the next cycle.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Four consecutive quarterly reports are published on or before the LPA deadline, each with a recorded sign-off."
                cadence: cyclic
              tasks:
                - "Copy the production checklist into this quarter's folder"
                - "Send the quarter-end kick-off note with cut-off dates @recurring(quarterly)"
                - "Check the draft report against statements and fund accounts"
                - "Log what slipped this quarter and the fix for next time @recurring(quarterly)"
            - name: Quarterly valuation committee meeting
              description: |-
                ## Purpose
                Marks set by the deal partner alone are the first thing an auditor or LPAC will challenge. A quarterly committee with a fixed pack, a quorum that includes someone outside the deal team and minutes that record each mark and its reasoning turns the valuation policy into a practice people can see.

                ## Milestones
                1. A valuation pack per holding with method, inputs, prior mark and proposed mark.
                2. The committee held with quorum before the internal valuation cut-off.
                3. Minutes recording each approved mark, challenges raised and any change of method.
                4. Approved marks passed to the administrator with the minutes.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A valuation committee with quorum is held every quarter and minutes record each approved mark and its reasoning."
                cadence: cyclic
              tasks:
                - "Book the valuation committee dates for the next four quarters"
                - "Ask each deal lead for the valuation pack a week before committee @recurring(quarterly)"
                - "Write minutes recording every mark and each challenge raised"
                - "Send approved marks and minutes to the administrator"
            - name: Quarterly capital account reconciliation
              description: |-
                ## Purpose
                Errors in capital accounts come from small things: an equalisation interest from a late close, a fee offset applied to the wrong LP, a side letter fee discount missed. Reconciling statements against the fund accounts and the call and distribution history every quarter, before they go out, catches them while they are still cheap to fix.

                ## Milestones
                1. Sum of all LP closing balances agreed to partners' capital in the fund accounts.
                2. Each LP's contributions and distributions agreed to the call and distribution notices.
                3. Fee discounts, offsets and side letter terms checked for every LP that has them.
                4. Breaks resolved with the administrator and recorded before release.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Each quarter's statements are released only after a signed reconciliation shows total LP capital agrees to the fund accounts with all breaks resolved."
                cadence: cyclic
              tasks:
                - "Request the draft statements and the trial balance from the administrator"
                - "Agree total LP capital to partners' capital in the accounts @recurring(quarterly)"
                - "Check every side letter fee discount and offset"
                - "Record each break and how it was resolved"
            - name: Portfolio company data collection for LP reports
              description: |-
                ## Purpose
                Quarterly LP reports can only be as current as the data portfolio companies send, and chasing CFOs by email for revenue, EBITDA, net debt and headcount every quarter wastes goodwill. A standard data request with fixed fields and a fixed date, sent through one channel, makes the inputs arrive in the same shape each time.

                ## Milestones
                1. A standard LP reporting data request agreed with each portfolio company CFO.
                2. Fields fixed for revenue, EBITDA, net debt, cash, headcount and a short narrative.
                3. A submission date set within the reporting calendar.
                4. Late or inconsistent submissions followed up and recorded.

                ## Notes
                Keep this request short and separate from the board pack. Ask only for what the LP report actually shows.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every portfolio company submits the standard LP data request by the calendar date for two consecutive quarters."
                cadence: rolling
              tasks:
                - "Draft the standard LP data request with fixed fields"
                - "Agree the submission date with each company CFO"
                - "Check the month's submissions and chase any gaps @recurring(monthly:8)"
                - "Note which companies were late and why"
            - name: LP enquiry log and response standard
              description: |-
                ## Purpose
                An unanswered LP question about a write-down or an expense line becomes a story at the next LPAC. Logging every enquiry with a date, owner and response, and holding the team to a published response time, shows LPs that questions are welcome and gives the firm a record of what was said.

                ## Milestones
                1. One shared log for every LP question, from email, calls and the portal.
                2. A response standard written, such as acknowledgement in two working days.
                3. Each answer reviewed for consistency with what other LPs have been told.
                4. Recurring questions turned into FAQ entries or report changes.

                ## Notes
                Selective disclosure is the risk here: if one LP gets material information, check with counsel whether all LPs should get it too.
              priority: medium
              frontmatter:
                mode: service
                output_kind: habit
                success_criteria: "Every LP enquiry for two quarters is logged with an owner and response date, and the response standard is met for at least nine in ten."
                cadence: rolling
              tasks:
                - "Set up the enquiry log with date, LP, question, owner and answer"
                - "Write and share the response time standard"
                - "Sweep the log for open questions and overdue answers @recurring(weekly:mon)"
                - "Turn the three most common questions into report changes"
            - name: Annual audited financial statements to LPs
              description: |-
                ## Purpose
                Audited accounts are the one document most LPAs set a hard deadline for, often 90 or 120 days after year end, and a missed audit deadline gets noticed by every institutional LP. Running the audit as a planned project with the auditor, the administrator and the valuation support ready on day one protects the deadline.

                ## Milestones
                1. Audit planning meeting held before year end with dates and a document request list.
                2. Valuation support files, capital activity and fee calculations delivered on the agreed date.
                3. Draft accounts reviewed by the GP and the administrator.
                4. Signed audited accounts uploaded and LPs notified before the LPA deadline.
              priority: high
              frontmatter:
                mode: operating
                output_kind: deliverable
                success_criteria: "Signed audited financial statements are delivered to all LPs before the LPA deadline each year."
                cadence: cyclic
              tasks:
                - "Book the audit planning meeting with the auditor @recurring(yearly)"
                - "Agree the document request list and delivery dates"
                - "Review the draft accounts against the year-end report"
                - "Upload the signed accounts and notify every LP"
            - name: Quarterly fee, expense and carry disclosure
              description: |-
                ## Purpose
                Fees and expenses are where LP trust is won or lost, and LPs increasingly compare what they were charged against the LPA line by line. A quarterly schedule showing management fees, offsets, partnership expenses, portfolio company fees and carried interest, in the ILPA format where adopted, answers the question before it is asked.

                ## Milestones
                1. Management fee, offsets and waivers shown by LP for the quarter and inception to date.
                2. Partnership expenses split by category against the LPA's allowed expense list.
                3. Fees received from portfolio companies disclosed with the offset applied.
                4. Accrued and paid carried interest shown.
                5. The schedule reviewed by the CFO before release.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: deliverable
                success_criteria: "Each quarterly report includes a fee, expense and carry schedule that ties to the fund accounts and the LPA expense categories."
                cadence: cyclic
              tasks:
                - "List the expense categories the LPA allows the fund to bear"
                - "Map every expense line in the accounts to one of those categories"
                - "Prepare the fee, expense and carry schedule @recurring(quarterly)"
                - "Ask the CFO to review the schedule against the accounts"
            - name: Side letter reporting duties tracker
              description: |-
                ## Purpose
                Side letters often add reporting duties that sit outside the standard pack: a placement agent disclosure, an ESG questionnaire, a monthly NAV estimate for a pension fund or a sanctions confirmation. A tracker that turns each one into a dated duty with an owner stops them from being forgotten until the LP asks.

                ## Milestones
                1. Every side letter reporting duty entered with LP, form, frequency and owner.
                2. Duties added to the reporting calendar.
                3. Each delivery recorded with date and evidence.
                4. New side letters from later closes added within a week of signing.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every side letter reporting duty has an owner and a recorded delivery date for the last two quarters."
                cadence: rolling
              tasks:
                - "Copy every side letter duty from the obligations map into the tracker"
                - "Add each duty's dates to the reporting calendar"
                - "Check the month's side letter duties are delivered and evidenced @recurring(monthly:20)"
                - "Add new side letters within a week of signing"
            - name: Report archive and version control
              description: |-
                ## Purpose
                Two years on, an LP or a regulator will ask exactly what the fund reported for a given quarter, and a folder of files named final, final v2 and final sent will not answer it. A locked archive of every issued report, statement and notice, with a correction log, gives a single true record.

                ## Milestones
                1. One archive with a fixed folder and naming convention for issued documents.
                2. Issued versions locked against editing.
                3. A correction log recording any reissued document, the reason and who was told.
                4. Retention period agreed with counsel and written down.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every issued report, statement and notice for the last four quarters sits locked in the archive under the naming convention, with corrections logged."
                cadence: rolling
              tasks:
                - "Write the folder and file naming convention for issued documents"
                - "Move the last four quarters of issued documents into the archive"
                - "Start the correction log for reissued documents"
                - "Check this month's issued documents are locked and named correctly @recurring(monthly:27)"
            - name: Annual meeting logistics cycle
              description: |-
                ## Purpose
                LP annual meetings fill a calendar season, and a date that clashes with a larger manager's meeting or a holiday in a key LP's country loses half the room. Running logistics on a yearly cycle, with the date set early, invitations, venue, remote access and RSVPs tracked, leaves the content team free to work on what will be said.

                ## Milestones
                1. Meeting date chosen at least six months ahead, checked against peer meetings and LP holidays.
                2. Venue, remote access and catering booked within budget.
                3. Invitations sent and RSVPs tracked by LP and attendee.
                4. Run sheet prepared for the day, with roles for each team member.

                ## Notes
                Check whether the LPA allows the cost of the meeting to be charged to the fund before booking, and record the answer.
              priority: medium
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "The annual meeting is held on a date set six months ahead, with RSVPs tracked and a run sheet used on the day."
                cadence: cyclic
              tasks:
                - "Check peer manager meeting dates before choosing yours"
                - "Send the save the date to every LP contact @recurring(yearly)"
                - "Book the venue and the remote access platform"
                - "Write the run sheet with a role for each team member"
            - name: Fund performance metrics you can explain to any LP
              description: |-
                ## Purpose
                Nothing loses credibility faster in a first LP call than failing to explain why net IRR fell while TVPI rose. Learning how IRR, TVPI, DPI and RVPI are calculated, gross and net, and how they move with time and cash flows, makes every performance page in the report defensible.

                ## Milestones
                1. Definitions of IRR, TVPI, DPI, RVPI and MOIC written in your own words.
                2. Gross and net figures recalculated from the fund's cash flows in a spreadsheet.
                3. Three worked examples of metrics moving in different directions explained.
                4. A one-page metrics glossary added to the report appendix.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Gross and net IRR, TVPI and DPI recalculated from the fund cash flows match the reported figures, and a metrics glossary is in the report."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "Export the fund's dated cash flows and current NAV"
                - "Recalculate gross and net IRR, TVPI and DPI in a spreadsheet"
                - "Write three short explanations of metrics moving in opposite directions"
                - "Add the metrics glossary to the report appendix"
            - name: Fair value guidelines study for private holdings
              description: |-
                ## Purpose
                Valuation reporting rests on fair value accounting and on the industry guidelines that interpret it for private companies, and LPs read marks with those guidelines in mind. Studying the current guidelines and the relevant accounting standard lets you explain a mark in the terms an auditor and an experienced LP use.

                ## Milestones
                1. The current private capital valuation guidelines read in full.
                2. The fair value standard under the fund's accounting framework summarised in a page.
                3. Each method in the fund's valuation policy matched to the guideline that supports it.
                4. Questions on judgement areas listed for the auditor.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A one-page summary maps each method in the valuation policy to the supporting guideline and accounting standard paragraph."
                cadence: phased
                effort_hours_estimate: "12"
              tasks:
                - "Download the current private capital valuation guidelines"
                - "Summarise the fair value standard your fund reports under"
                - "Match each valuation policy method to its supporting guideline"
                - "List the judgement questions to ask the auditor"
            - name: Portfolio company write-ups LPs actually read
              description: |-
                ## Purpose
                Most portfolio pages repeat the investment thesis and a revenue chart every quarter, so LPs skim them and then ask the same questions on calls. Learning to write a short, honest page per company, covering what changed this quarter, against plan, and what happens next, makes the report the place LPs get answers.

                ## Milestones
                1. A fixed structure for each company page: change this quarter, against plan, next quarter, value drivers.
                2. Three existing company pages rewritten in the new structure and compared with the old ones.
                3. A word limit per page agreed and kept.
                4. Feedback gathered from two friendly LPs on the rewritten pages.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Every company page in the next quarterly report follows the new structure within the agreed word limit."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Pick three company pages from last quarter to rewrite"
                - "Rewrite them as change, against plan and next quarter"
                - "Set a word limit and trim each page to it"
                - "Send the rewrites to two friendly LPs for comment"
            - name: Subscription line effects on reported IRR
              description: |-
                ## Purpose
                Using a capital call facility delays when LPs pay in, which can lift early IRRs while leaving multiples unchanged, and many LPs now ask to see returns with and without the facility. Understanding the effect and disclosing it clearly avoids the impression of flattering the numbers.

                ## Milestones
                1. Fund IRR recalculated as if each call had been made on the investment date.
                2. The difference between reported and unlevered IRR explained in two sentences.
                3. Facility size, outstanding balance and average days outstanding added to the report.
                4. The disclosure checked against the ILPA guidance on subscription facilities.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "The quarterly report shows IRR with and without the subscription facility, plus its size, balance and days outstanding."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Get the facility draw and repayment dates from the administrator"
                - "Recalculate IRR using investment dates instead of call dates"
                - "Draft the two-sentence explanation of the difference"
                - "Add facility size, balance and days outstanding to the report"
            - name: ILPA principles on transparency and reporting
              description: |-
                ## Purpose
                Investors negotiating side letters and judging reports bring the ILPA principles to the table, and a GP who has not read them is reacting rather than leading. Reading the transparency, reporting and LPAC sections and comparing them with what the fund does today shows where you are ahead, level or behind.

                ## Milestones
                1. The current ILPA principles sections on transparency, reporting and the LPAC read.
                2. A gap table showing each recommendation and the fund's current practice.
                3. Gaps ranked by how often LPs raise them.
                4. Two gaps chosen to close in the next year.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A gap table compares the fund's reporting to each ILPA transparency recommendation, with two gaps chosen to close."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Download the current ILPA principles"
                - "Read the transparency, reporting and LPAC sections"
                - "Fill a gap table against the fund's current practice"
                - "Choose the two gaps to close this year"
            - name: Speaker rehearsals for presenting to an LP room
              description: |-
                ## Purpose
                Partners who are sharp in an IC meeting can still run long, read slides and dodge questions in front of sixty LPs. Rehearsing the annual meeting talks with a timer, a hostile question round and recorded feedback makes the room trust the team, not just the numbers.

                ## Milestones
                1. Each speaker's slot timed and cut to its allotted minutes.
                2. Two full rehearsals held with colleagues playing LPs.
                3. A list of the ten hardest likely questions with agreed answers.
                4. One recorded rehearsal watched back by each speaker.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Every annual meeting speaker completes two timed rehearsals and a hard question round before the meeting."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Set a time limit for each speaker's slot"
                - "Book two full rehearsals with colleagues playing LPs"
                - "List the ten hardest questions and agree the answers"
                - "Record one rehearsal for each speaker to watch back"
            - name: Writing the hard paragraph on losses and missed plans
              description: |-
                ## Purpose
                LPs forgive a write-down far more readily than they forgive finding out late or reading a paragraph that sounds like it was written to avoid saying anything. Practising a plain structure, what happened, what it means for value, what the team is doing and when LPs will hear next, makes bad news credible.

                ## Milestones
                1. A four-part structure for bad news paragraphs written down.
                2. The last two difficult paragraphs from past reports rewritten in that structure.
                3. Language agreed with counsel on what to avoid, such as forecasts presented as facts.
                4. The structure added to the report style sheet.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "The report style sheet includes a four-part bad news structure, tested by rewriting two past difficult paragraphs."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Find the two hardest paragraphs in past LP letters"
                - "Rewrite them as what happened, value effect, action and next update"
                - "Ask counsel which phrasings to avoid"
                - "Add the structure to the report style sheet"
            - name: Choosing investor portal and reporting software
              description: |-
                ## Purpose
                First-time managers often report from a shared drive and a mail merge, then outgrow it at the second close. Comparing a stand-alone portal, the administrator's portal and a reporting platform on cost, security, LP experience and data export gives a choice you will not need to unwind in two years.

                ## Milestones
                1. Requirements listed: per-LP permissions, watermarking, logs, bulk upload, data export.
                2. Three options shortlisted, including the administrator's own portal.
                3. Security questionnaires and references completed for the shortlist.
                4. A decision recorded with cost over three years and a migration plan.

                ## Notes
                Start from the **Purchase decision** template. Ask how you get your data out if you leave; some platforms make it hard.
              priority: medium
              deadlineOffsetDays: 60
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A recorded decision on portal and reporting software, with three-year cost, security review results and a migration plan."
                cadence: one-shot
                effort_hours_estimate: "10"
              tasks:
                - "Write the requirements list for portal and reporting software"
                - "Shortlist three options including the administrator's portal"
                - "Send each a security questionnaire and ask for two references"
                - "Record the decision with three-year cost and migration plan"
            - name: Bringing the quarterly report forward by 15 days
              description: |-
                ## Purpose
                LPs reporting to their own boards need your numbers in time, and a fund that reports at day 90 when peers report at day 60 creates work and frustration on the LP side. Finding the slowest steps in the cycle and removing them, one quarter at a time, moves the publication date forward without losing accuracy.

                ## Milestones
                1. Day-by-day timing of the last two cycles mapped from quarter end to publication.
                2. The three slowest steps identified with their causes.
                3. A fix agreed for each, such as earlier company data or a pre-scheduled committee.
                4. The next two reports published at least 15 days earlier than the baseline.
              priority: medium
              deadlineOffsetDays: 180
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "Two consecutive quarterly reports are published at least 15 days earlier than the mapped baseline, with no corrections issued."
                cadence: phased
                effort_hours_estimate: "16"
              tasks:
                - "Map the dates of each step in the last two reporting cycles"
                - "Name the three slowest steps and their causes"
                - "Agree a fix for each with the owner"
                - "Compare the next report date against the baseline"
            - name: ESG and sustainability section decision
              description: |-
                ## Purpose
                Some LPs now require ESG data in side letters while others see it as cost with no value, and a fund can end up producing five different questionnaires. Deciding what sustainability information the fund will report, in which framework and how often, lets you answer most requests from one dataset.

                ## Milestones
                1. LP ESG requests from side letters and questionnaires collected in one list.
                2. The reporting frameworks LPs mention most often identified.
                3. A core metric set chosen that covers most requests.
                4. A decision recorded on frequency and whether the section sits in the quarterly or annual report.

                ## Notes
                Sustainability disclosure rules vary by jurisdiction and fund type; ask counsel whether any are mandatory for your fund before choosing.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A recorded decision names the ESG metric set, framework, frequency and report location, covering most current LP requests."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Collect every ESG request from side letters and questionnaires"
                - "Count which frameworks LPs mention most"
                - "Choose a core metric set that answers most requests"
                - "Ask counsel whether any sustainability disclosure is mandatory"
            - name: LP feedback survey on reports and meetings
              description: |-
                ## Purpose
                GPs usually learn what LPs think of their reporting from a re-up decision, which is too late. A short annual survey, sent after the annual meeting and asking about timing, content, format and the meeting itself, gives specific changes to make while the relationship is still warm.

                ## Milestones
                1. A survey of no more than eight questions drafted.
                2. Survey sent to every LP contact after the annual meeting.
                3. Responses grouped into themes with counts.
                4. Three changes chosen and announced in the next quarterly letter.

                ## Notes
                Start from the **Feedback themes** template.
              priority: low
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "An annual LP survey is sent, responses are grouped into themes, and three resulting changes are announced to LPs."
                cadence: cyclic
              tasks:
                - "Draft eight questions on timing, content, format and the meeting"
                - "Send the LP survey after the annual meeting @recurring(yearly)"
                - "Group the answers into themes with counts"
                - "Announce the three changes in the next quarterly letter"
            - name: Data files for LP monitoring systems
              description: |-
                ## Purpose
                Large LPs and their consultants load cash flows, NAVs and holdings into monitoring systems, and retyping figures from a PDF introduces errors that come back as queries. Providing a standard data file each quarter, with cash flows, NAV, holdings and fees in fixed columns, saves LPs work and keeps their records matching yours.

                ## Milestones
                1. A data file layout agreed with the three largest LPs or their consultants.
                2. Columns fixed for dated cash flows, NAV, holdings, fees and commitments.
                3. The file produced from the same source as the report and tied out.
                4. The file published each quarter alongside the report.
              priority: low
              frontmatter:
                mode: service
                output_kind: deliverable
                success_criteria: "A standard quarterly data file tied to the report is published for two consecutive quarters and accepted by the three largest LPs."
                cadence: rolling
              tasks:
                - "Ask the three largest LPs what data file layout they load"
                - "Fix the columns for cash flows, NAV, holdings and fees"
                - "Tie the data file to the report and publish it @recurring(quarterly)"
                - "Record any LP query that traces back to the file"
            - name: In-house or administrator report production
              description: |-
                ## Purpose
                Report production can sit with the GP team, the administrator or a specialist reporting provider, and the right answer changes as the fund grows. Comparing hours, cost, control and error rates for each option gives a decision you can defend to LPs who ask who prepared the numbers.

                ## Milestones
                1. Team hours spent on the last two reports recorded by step.
                2. Quotes obtained from the administrator and one other provider for the same scope.
                3. Control and review points compared across the options.
                4. A recorded decision on who produces which parts of the report.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A recorded decision on report production ownership, backed by measured team hours and two provider quotes."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Record team hours spent on each step of the last report"
                - "Ask the administrator to quote for producing the report"
                - "Get a second quote from a reporting provider"
                - "Write up the decision on who produces each section"
            - name: Public market equivalent comparison decision
              description: |-
                ## Purpose
                Experienced LPs increasingly judge private returns against what the same cash flows would have earned in a public index, and some will run the comparison themselves whether or not you do. Deciding whether to report a public market equivalent, against which index and with what method, means the comparison is framed by you rather than discovered by them.

                ## Milestones
                1. The main PME methods understood and one chosen for testing.
                2. A benchmark index chosen that fits the fund's strategy, with the reason written down.
                3. The comparison calculated on the fund's own cash flows.
                4. A decision recorded on whether, where and how often to report it.

                ## Notes
                Index choice changes the answer a lot. Record why the index fits the strategy before running the numbers, not after.
              priority: low
              deadlineOffsetDays: 90
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A recorded decision on reporting a public market equivalent, with the method, the index and its rationale written before calculation."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Read a short guide to the main PME methods"
                - "Write down the benchmark index and why it fits the strategy"
                - "Run the comparison on the fund's cash flows"
                - "Record whether and how the fund will report it"
            - name: First quarterly report of a new fund
              description: |-
                ## Purpose
                Your first report after a first close sets the standard LPs will hold you to for ten years, and an emerging manager often has one deal, partial capital called and no history to compare. Planning it as an event, with a clear letter, honest early metrics and a statement every LP can reconcile, starts the relationship well.

                ## Milestones
                1. The first reporting deadline confirmed from the LPA.
                2. A letter drafted covering closes, team, pipeline and the first investment.
                3. Early metrics shown with a note that returns are not yet meaningful.
                4. Capital account statements reconciled for every LP, including equalisation from later closes.
                5. The report published before the deadline.

                ## Notes
                Avoid showing an IRR in the first year; most LPs and guidelines regard it as not meaningful so early.
              priority: high
              deadlineOffsetDays: 120
              frontmatter:
                mode: event
                output_kind: deliverable
                success_criteria: "The fund's first quarterly report and reconciled capital account statements are published before the LPA deadline."
                cadence: one-shot
                effort_hours_estimate: "20"
              tasks:
                - "Confirm the first report deadline from the LPA"
                - "Draft the first LP letter covering closes, team and pipeline"
                - "Reconcile every LP statement including equalisation"
                - "Publish the report and statements on the portal"
            - name: First annual meeting of a new fund
              description: |-
                ## Purpose
                An emerging manager's first annual meeting is small, often a dozen LPs in a hired room or on a call, but it is where anchors decide whether to come back for fund two. Planning a short, honest agenda that shows the team, the portfolio and the process, rather than a fundraising pitch, sets the right tone.

                ## Milestones
                1. Format chosen, in person, virtual or hybrid, with a realistic budget.
                2. An agenda of no more than three hours drafted and shared with anchor LPs for comment.
                3. Each portfolio company presented by the deal lead or the founder.
                4. Time set aside for open LP questions.
                5. Notes and slides circulated to all LPs within a week.
              priority: medium
              deadlineOffsetDays: 150
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "The first annual meeting is held with an agenda reviewed by anchor LPs, and notes and slides reach every LP within a week."
                cadence: one-shot
                effort_hours_estimate: "24"
              tasks:
                - "Choose the format and set the budget"
                - "Draft a three-hour agenda and send it to anchor LPs"
                - "Invite one portfolio founder to present"
                - "Circulate notes and slides to all LPs within a week"
            - name: Annual meeting agenda and presentation deck
              description: |-
                ## Purpose
                Investors travel to an annual meeting to hear what they cannot read in the quarterly report: the team's judgement, the hard companies and the outlook. An agenda and deck built around those questions, with portfolio sessions led by the people closest to each company, gives them a reason to attend.

                ## Milestones
                1. Agenda drafted with a firm update, fund performance, portfolio sessions, a market view and open questions.
                2. A single deck built with consistent figures that match the latest quarterly report.
                3. Every number in the deck checked against the report by someone outside the deal team.
                4. Compliance or counsel review of the deck completed.
                5. Final deck uploaded to the portal after the meeting.

                ## Notes
                Performance figures shown in the room count as fund marketing in many jurisdictions; get counsel to review the deck as you would a pitch.
              priority: medium
              frontmatter:
                mode: event
                output_kind: deliverable
                success_criteria: "An annual meeting deck whose figures all tie to the latest quarterly report has passed counsel review and been uploaded for LPs."
                cadence: one-shot
                effort_hours_estimate: "30"
              tasks:
                - "Draft the agenda around what LPs cannot read in the report"
                - "Ask the agent to draft a speaker brief from the latest quarterly report"
                - "Have someone outside the deal team check every number"
                - "Send the deck to counsel for review"
            - name: LPAC meeting on valuations and conflicts
              description: |-
                ## Purpose
                The limited partner advisory committee is often asked to review valuations, approve conflicts and waive restrictions, and it is usually held alongside the annual meeting. A well run LPAC with a pack sent in advance, clear resolutions and proper minutes protects the GP as much as the LPs.

                ## Milestones
                1. The LPAC's powers and quorum from the LPA summarised for members.
                2. A pack with valuations, conflict items and any consents sent at least a week ahead.
                3. The meeting held with quorum and each resolution voted.
                4. Minutes circulated to members and filed with the fund records.

                ## Notes
                Start from the **Board meeting** template. Ask counsel to draft any consent resolution; the wording matters later.
              priority: medium
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "An LPAC meeting is held with quorum, a pack sent a week ahead, and minutes recording each resolution filed with the fund records."
                cadence: one-shot
                effort_hours_estimate: "10"
              tasks:
                - "Summarise the LPAC's powers and quorum from the LPA"
                - "List the valuation, conflict and consent items for the agenda"
                - "Ask counsel to draft any consent resolutions"
                - "Send the pack to members a week ahead"
            - name: Year-end investor tax documents timing plan
              description: |-
                ## Purpose
                Taxable LPs need their fund tax documents in time to file, and late tax packages are one of the most common LP complaints in fund reporting. Agreeing dates with the tax preparer and the administrator, and telling LPs when to expect estimates and finals, turns a seasonal scramble into a plan.

                ## Milestones
                1. The tax documents each LP type needs listed with the tax preparer.
                2. Dates agreed for estimates and final documents.
                3. LPs told the expected dates in the year-end letter.
                4. Delivery of every document recorded against the promised date.

                ## Notes
                This is about timing and communication only. The content of tax documents belongs to the fund's tax adviser.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: deliverable
                success_criteria: "Every LP receives tax estimates and final documents by the dates communicated in the year-end letter."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Ask the tax preparer which documents each LP type needs"
                - "Agree estimate and final delivery dates with the preparer"
                - "Tell LPs the expected dates in the year-end letter"
                - "Record each document delivery against the promised date"
            - name: Annual meeting follow-up and LP one-to-ones
              description: |-
                ## Purpose
                The questions LPs ask in the corridor are often more useful than the ones asked from the floor, and they are lost unless someone writes them down that evening. Capturing every conversation, answering the open questions within two weeks and booking one-to-ones with LPs who raised concerns turns the meeting into progress.

                ## Milestones
                1. Notes from every LP conversation captured on the day by the team.
                2. Open questions listed with an owner and answered within two weeks.
                3. One-to-one calls booked with any LP who raised a concern.
                4. Themes from the meeting shared with the whole investment team.

                ## Notes
                Start from the **Meeting notes** template.
              priority: medium
              frontmatter:
                mode: service
                output_kind: deliverable
                success_criteria: "Every open question from the annual meeting is answered within two weeks and every LP who raised a concern has had a one-to-one."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Collect each team member's LP conversation notes that evening"
                - "List open questions with an owner and a two-week date"
                - "Book one-to-ones with LPs who raised concerns"
                - "Share the meeting themes with the investment team"
            - name: LP reporting as a solo GP on a small budget
              description: |-
                ## Purpose
                A solo GP or two-person firm with a small first fund cannot afford an IR hire or a reporting platform, but LPs still expect statements, a letter and a valuation process. Building a lean set-up, the administrator for statements, a short template, a borrowed independent valuation reviewer and a fixed day each quarter, meets the duty without eating the deal time.

                ## Milestones
                1. The administrator contracted to produce statements and the fee schedule.
                2. A short report template of no more than ten pages adopted.
                3. An independent person, such as an adviser or LPAC member, agreed to review marks.
                4. Two fixed days blocked each quarter for writing the letter.

                ## Notes
                Keep the promise small and the delivery perfect. A short report on time beats a long one late.
              priority: medium
              deadlineOffsetDays: 60
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A lean reporting set-up with administrator statements, a ten-page template and an independent mark reviewer has produced one on-time report."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "Confirm which statements the administrator produces under its fee"
                - "Cut the report template to ten pages or fewer"
                - "Ask an adviser or LPAC member to review quarterly marks"
                - "Block two writing days in each quarter's calendar"
            - name: Taking over LP reporting as a new IR or finance hire
              description: |-
                ## Purpose
                New investor relations leads and fund controllers often inherit the reporting calendar mid-cycle, with promises they did not make and spreadsheets they did not build. A structured first ninety days, learning the obligations, shadowing one cycle and then owning the next, prevents a missed deadline in the handover.

                ## Milestones
                1. Obligations map, calendar and source map read in the first two weeks.
                2. Introductions made to the administrator, auditor and key LP contacts.
                3. One full reporting cycle shadowed with notes on each step.
                4. The next cycle run as owner, with a list of improvements agreed with the CFO.

                ## Notes
                Start from the **Onboarding 30/60/90** template.
              priority: medium
              deadlineOffsetDays: 90
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Within ninety days the new hire has shadowed one cycle, owned the next on time, and agreed an improvement list with the CFO."
                cadence: phased
                effort_hours_estimate: "40"
              tasks:
                - "Read the obligations map, reporting calendar and source map"
                - "Arrange introductions to the administrator and the auditor"
                - "Shadow one full reporting cycle and note each step"
                - "Agree an improvement list with the CFO after owning a cycle"
            - name: Reporting through fund wind-down and final distributions
              description: |-
                ## Purpose
                Late in a fund's life the remaining holdings are the hardest ones, extensions need LP consent and every LP wants to know when the final cheque arrives. Adjusting reporting for the tail, with a clear exit plan per holding, extension status and expected final distribution timing, keeps patience from running out.

                ## Milestones
                1. A tail page added showing each remaining holding, exit route and expected timing.
                2. Fund term and any extension consents shown with dates.
                3. Expected fees and expenses to wind-up disclosed.
                4. A final report and closing capital account statements issued at liquidation.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: deliverable
                success_criteria: "Each report in the fund's final years shows a tail page with holdings, exit timing and extension status, ending in a final report at liquidation."
                cadence: phased
                effort_hours_estimate: "15"
              tasks:
                - "Add a tail page listing remaining holdings and exit routes"
                - "Show the fund term and extension consent dates"
                - "Estimate fees and expenses until wind-up"
                - "Plan the contents of the final report with the administrator"
            - name: Disclosing a key person event or team departure
              description: |-
                ## Purpose
                Losing a senior partner can trigger a key person clause, and LPs who hear about it from the press or another LP before the GP's notice will remember. Preparing the notice process in advance, what triggers it, who drafts it, who signs it and how fast it goes out, means it is handled within days, not weeks.

                ## Milestones
                1. Key person and notice clauses of the LPA summarised.
                2. A notice template agreed with fund counsel.
                3. A call list for the LPAC and the largest LPs prepared.
                4. A timeline agreed for notice, calls and the follow-up in the next report.

                ## Notes
                Whether an event triggers the clause is a legal question; get fund counsel's view before sending anything.
              priority: high
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A counsel-approved key person notice template, LP call list and notice timeline are filed and ready for use."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Summarise the key person and notice clauses of the LPA"
                - "Ask fund counsel to approve a notice template"
                - "Prepare the call list for the LPAC and largest LPs"
                - "Write the timeline from trigger to notice and calls"
            - name: Reporting a material write-down or portfolio crisis
              description: |-
                ## Purpose
                When a portfolio company breaches covenants, loses a key customer or faces fraud, the quarterly report is too slow and too public a place for LPs to first learn of it. A written approach for interim communication, the threshold that triggers it, the wording review and the follow-up, keeps trust through the worst quarter.

                ## Milestones
                1. A threshold agreed for interim LP communication, such as a mark down above a set share of NAV.
                2. Counsel review built into any interim notice.
                3. A call plan for the LPAC chair and largest LPs before the written notice.
                4. The next quarterly report set to give a full update in the bad news structure.

                ## Notes
                Consistency matters: give all LPs the same material information at the same time, and check with counsel before any selective call.
              priority: high
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A written crisis communication approach with a trigger threshold, counsel review step and LP call plan has been approved by the partners."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Agree the threshold that triggers an interim LP notice"
                - "Write the counsel review step into the process"
                - "Prepare the call order for the LPAC chair and largest LPs"
                - "Get partner approval for the written approach"
            - name: Reporting across several funds and vintages
              description: |-
                ## Purpose
                A manager raising fund two or three suddenly has overlapping LPs, cross-fund deals and different reporting deadlines, and a report designed for one fund stops working. Standardising the template, calendar and metrics across funds while keeping each fund's statements separate saves time and avoids inconsistent numbers on shared deals.

                ## Milestones
                1. One report template used across all funds with fund-specific sections.
                2. A combined calendar showing every fund's deadlines.
                3. Cross-fund investments valued at the same mark in every fund that holds them.
                4. A firm-level summary page for LPs in more than one fund.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "All funds report from one template and calendar, with shared holdings carried at the same mark in every fund."
                cadence: phased
                effort_hours_estimate: "20"
              tasks:
                - "List the deadlines of every fund in one calendar"
                - "Move each fund's report onto the common template"
                - "Check shared holdings carry the same mark in every fund"
                - "Design a firm summary page for LPs in more than one fund"
            - name: Annual reporting quality review against peers
              description: |-
                ## Purpose
                Reporting standards drift upward each year as LPs share what the best managers send, and a report that was good three years ago can now look thin. Comparing a year of your reports with ILPA guidance and with peer reports LPs have shared shows what to add, cut or fix before the next fundraise.

                ## Milestones
                1. A year of your quarterly reports and statements assembled.
                2. Two or three peer reports obtained from LPs or advisers with permission.
                3. A scorecard covering timeliness, completeness, clarity and consistency completed.
                4. Three improvements chosen and added to next year's calendar.
              priority: low
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A yearly scorecard compares the fund's reports with ILPA guidance and two peer reports, with three improvements scheduled."
                cadence: cyclic
              tasks:
                - "Assemble the last four quarterly reports and statements"
                - "Ask a friendly LP for permission to see two peer reports"
                - "Score your reports on timeliness, completeness and clarity @recurring(yearly)"
                - "Schedule three improvements for next year"
            - name: Valuation back-testing against realised exits
              description: |-
                ## Purpose
                Nothing supports a valuation policy better than showing how close the last marks were to the eventual exit prices, and experienced LPs and auditors ask for it. Comparing each realised holding's marks in the year before exit with the actual proceeds shows whether the fund marks conservatively, fairly or optimistically.

                ## Milestones
                1. Every realised holding listed with marks for the four quarters before exit.
                2. Exit proceeds compared with each mark as a percentage difference.
                3. Patterns identified by method, sector or deal lead.
                4. Findings presented to the valuation committee with any policy changes proposed.
              priority: low
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A back-test of marks against exit proceeds for every realised holding is presented to the valuation committee each year."
                cadence: cyclic
              tasks:
                - "List realised holdings with their last four marks before exit"
                - "Calculate the difference between each mark and the exit value"
                - "Look for patterns by method, sector and deal lead"
                - "Present the back-test to the valuation committee @recurring(yearly)"
            - name: Quarterly NAV bridge by value driver
              description: |-
                ## Purpose
                LPs see NAV move but rarely see why, and a single line of unrealised gains hides whether value came from earnings growth, multiple changes, debt paydown or currency. A quarterly bridge that splits value change into those drivers gives a far better conversation about what the team is really doing.

                ## Milestones
                1. A bridge method agreed for earnings, multiple, net debt, currency and other.
                2. The bridge calculated for each holding and the whole fund.
                3. Results checked against the total change in NAV in the accounts.
                4. The bridge added as a standard page in the quarterly report.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: deliverable
                success_criteria: "Each quarterly report includes a NAV bridge by value driver that reconciles to the total change in NAV in the accounts."
                cadence: rolling
              tasks:
                - "Agree the value drivers the bridge will split"
                - "Build the bridge template for one holding as a test"
                - "Calculate the fund NAV bridge and reconcile it @recurring(quarterly)"
                - "Add the bridge as a standard report page"
            - name: Audit season valuation support files
              description: |-
                ## Purpose
                Auditors test the biggest and most judgemental marks every year, and a valuation support file put together from emails during fieldwork costs the deal team days. A standard support file per holding, with the model, inputs, sources, committee minutes and calibration, prepared before year end, shortens fieldwork and reduces audit queries.

                ## Milestones
                1. A standard support file structure agreed with the auditor.
                2. Files completed for every holding above the audit materiality threshold.
                3. Inputs traced to sources such as management accounts and comparable data.
                4. Audit queries logged and answered with the file updated.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: artifact
                success_criteria: "Support files for every holding above materiality are delivered to the auditor on the agreed date, with queries logged and closed."
                cadence: cyclic
              tasks:
                - "Agree the support file structure with the audit manager"
                - "Assemble support files for holdings above materiality @recurring(yearly)"
                - "Trace each input to its source document"
                - "Log and close every audit valuation query"
            - name: Public pension LP disclosure and information requests
              description: |-
                ## Purpose
                Public pension and other government LPs can be subject to public records or freedom of information laws, and some publish fund performance as a matter of policy. Knowing which LPs are covered, what they may have to disclose and how to mark confidential material lets you protect sensitive information without breaking their rules.

                ## Milestones
                1. LPs subject to public records or disclosure laws identified.
                2. Each LP's disclosure policy and the relevant LPA confidentiality clause summarised.
                3. Report sections that may be disclosed marked separately from confidential portfolio data.
                4. A process agreed with counsel for responding when an LP receives a request.

                ## Notes
                Disclosure laws differ by jurisdiction and LP. Fund counsel should advise on what can be withheld.
              priority: low
              frontmatter:
                mode: research
                output_kind: artifact
                success_criteria: "A list of LPs subject to disclosure laws, their policies and a counsel-approved response process is filed and used in report preparation."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "List LPs that may be subject to public records laws"
                - "Ask each one for its disclosure policy"
                - "Mark report sections that could be published"
                - "Agree the response process with fund counsel"
---

# LP Reporting and Annual Meetings

This area is for the emerging manager who writes the LP letter personally and for the CFO, controller or investor relations lead who owns the reporting calendar at a larger firm. It starts with the foundations (what the LPA and side letters actually promise, a valuation policy, the report and statement formats, the calendar and the investor portal), then the quarterly and annual machinery that produces reports, marks and statements, the skills behind performance metrics and fair value, the decisions about tools, timing and extra disclosure, the dated events from a first quarterly report to the annual meeting, the situations that change the tone of reporting, and ends with the specialist work of back-testing marks and handling public pension disclosure.

What repeats is the quarterly cycle of valuation committee, report production, statement reconciliation and fee reporting, a weekly sweep of the LP enquiry log, monthly checks of side letter duties, portfolio data and portal access, and the yearly rhythm of audited accounts, the annual meeting and a reporting quality review. The Operational checklist, Purchase decision, Board meeting, Meeting notes, Feedback themes and Onboarding 30/60/90 templates pair with the projects that name them. Valuation, audit, tax and securities law questions go to your auditor, fund counsel and tax adviser; nothing here is legal, tax or investment advice. Installing adds all 50 projects as active, so archive the ones that are not for you yet.
