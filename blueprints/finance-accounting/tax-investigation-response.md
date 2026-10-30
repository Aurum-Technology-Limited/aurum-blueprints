---
id: finance-accounting.tax-investigation-response
name: Tax Investigation Response
description: "A calm first response to a tax authority letter, the right adviser and a case file, deadline and request logs, penalty know-how, and the routes from inspection visit to settlement, appeal or closure."
category: business
version: 1.0.0
tags: [finance-accounting, tax-investigation-response, small-business, founder, enterprise, tax-enquiry, tax-dispute, penalties]
author: Aurum Technology
starter_structure:
  templates:
    - vendor
    - meeting-notes
    - risk-register
    - remediation-plan
  pillars:
    - name: Finance & Accounting
      emoji: "🧾"
      description: "The money side of a business: bookkeeping and the monthly close, cash flow, budgeting and forecasting, billing and collections, payroll, tax, audit and financial controls."
      pillarFrontmatter:
        review_cadence: monthly
      areas:
        - name: Tax Investigation Response
          description: "Handling tax authority enquiries, inspections and disputes: gathering records, working with advisers and negotiating outcomes for businesses under review."
          projects:
            - name: First 48 hours after the enquiry letter arrives
              description: |-
                ## Purpose
                An opening letter from the tax authority usually names the tax, the period and a reply date, and what is said or sent in the first two days often shapes the whole enquiry. Reading it calmly, logging the dates and getting it to an adviser before anyone phones the inspector keeps your options open and avoids volunteering half-checked answers.

                ## Milestones
                1. The letter scanned, stamped with the date it arrived and saved in one place.
                2. The tax, the periods, the reference number and the reply deadline written on a single page.
                3. A copy with your accountant or a tax investigation adviser.
                4. One person agreed as the only contact with the authority, with nobody else replying in the meantime.

                ## Notes
                Do not ignore the letter, and do not ring the inspector to explain things informally before you know exactly what is being asked. If the letter mentions fraud, a criminal investigation or a special code of practice for serious cases, go straight to the suspected fraud project near the end of this area.

                Before you start: this plan is general information to help you organise your own money decisions. It is not financial, investment, tax or legal advice. Check decisions that matter with a qualified, licensed adviser in your country, and remember that investing and trading can lose money.
              priority: high
              deadlineOffsetDays: 7
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "Within two working days of receipt, the letter's key dates are logged, an adviser has a copy and one named person is the only contact with the authority."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Scan the letter and note the date it arrived"
                - "Write the tax, periods, reference and reply deadline on one page"
                - "Send the letter to your accountant or tax adviser today"
                - "Ask colleagues not to contact the authority until a contact is agreed"
            - name: Enquiry deadlines and time limits tracker
              description: |-
                ## Purpose
                Tax enquiries run on deadlines that carry consequences when missed: reply dates, information notice periods, review requests and appeal windows that are often only around 30 days. Keeping every date in one tracker, with the letter that set it and the person who owns it, means no window closes because a letter sat in someone's inbox.

                ## Milestones
                1. Every deadline from every letter in one tracker, with its source letter, the date set and an owner.
                2. Appeal and review windows listed alongside ordinary reply dates.
                3. Each extension request made in writing, with the authority's answer recorded.
                4. Calendar reminders set seven days before each deadline.

                ## Notes
                Ask for an extension before a deadline passes, in writing and with a reason. A request made after the date is far weaker than one made early.
              priority: high
              deadlineOffsetDays: 7
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A tracker lists every date from authority correspondence with owner and source, and no deadline has passed without a reply or a written extension."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "List every date mentioned in the authority's letters so far"
                - "Add an owner and the source letter beside each deadline"
                - "Set calendar reminders seven days before each date"
                - "Check the tracker for deadlines falling in the next three weeks @recurring(weekly:mon)"
            - name: Appointing a specialist tax investigation adviser
              description: |-
                ## Purpose
                The accountant who prepared the returns is not always the right person to defend them, both for skills and because their own work may be part of what is being questioned. Comparing two or three advisers who handle enquiries regularly, on experience with this tax and this authority, fee basis and approach, gives the business someone who knows how inspectors think.

                ## Milestones
                1. Two or three advisers with enquiry experience in this tax shortlisted.
                2. Each adviser asked the same questions about recent cases, approach and fee basis.
                3. A conflict check made on whether the current accountant prepared the figures under review.
                4. One adviser chosen, with the reasons recorded.

                ## Notes
                Start from the **Vendor** template. If you hold fee protection insurance, check whether it requires a particular adviser or the insurer's approval before work starts.
              priority: high
              deadlineOffsetDays: 14
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A tax investigation adviser is appointed from a shortlist of at least two, with the comparison and the reason for the choice recorded."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Ask your accountant and two trusted contacts for enquiry specialists"
                - "Shortlist three advisers who regularly handle this tax and authority"
                - "Put the same five questions on experience and fees to each adviser"
                - "Record your choice and the reasons in the vendor record"
            - name: Adviser engagement letter and privilege boundaries
              description: |-
                ## Purpose
                Before sensitive facts are discussed, the business should know what the adviser is engaged to do, what it will cost and whether those conversations are protected from disclosure. In many countries legal privilege covers lawyers but not accountants, so the choice of who looks into a delicate issue can matter as much as what they find.

                ## Milestones
                1. A signed engagement letter covering scope, fees, billing and who gives instructions.
                2. A written answer from the adviser on what protection applies to their advice in your country.
                3. A rule agreed on when a lawyer, rather than an accountant, should lead a line of enquiry.
                4. The engagement letter saved in the case file.

                ## Notes
                This is a question for your adviser, not a conclusion to draw yourself. Privilege rules differ widely between countries and between types of adviser.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A signed engagement letter is on file with scope and fees, together with the adviser's written note on which communications are protected."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Ask the adviser for an engagement letter with scope and fee basis"
                - "Ask in writing which of your conversations would be privileged"
                - "Agree the point at which a lawyer should be brought in to lead"
                - "Sign the engagement letter and save it in the case file"
            - name: Single point of contact with the tax inspector
              description: |-
                ## Purpose
                Enquiries go wrong when the inspector hears three versions of events from the owner, the bookkeeper and the accountant. Naming one contact, usually the adviser, and telling the authority in writing that all correspondence should go through them keeps every answer consistent and checked before it leaves the business.

                ## Milestones
                1. One named contact agreed, with a deputy for absences.
                2. The authority told in writing, with any agent authorisation form it requires completed.
                3. Staff briefed to pass any call, letter or visit from the authority to the named contact.
                4. A short script ready for staff who take an unexpected call.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "The authority holds written confirmation of one named contact, the agent authorisation is in place and staff have the call script."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Agree who will be the single contact and who deputises"
                - "Complete the authority's agent authorisation form for your adviser"
                - "Write a three-line script for staff who take a call from the authority"
                - "Brief staff to pass every call and letter to the named contact"
            - name: Investigation case file and document index
              description: |-
                ## Purpose
                Within weeks an enquiry builds up letters, schedules, bank statements, adviser notes and draft replies, and losing track of which version went to the authority causes real damage. One case file with numbered documents and an index showing what was sent, when and by whom means every new reply can be checked against what has already been said.

                ## Milestones
                1. A case folder with sections for correspondence, information supplied, working papers and adviser advice.
                2. Every document numbered and listed in an index with its date and status.
                3. Each document sent to the authority marked as sent, with the date and covering letter.
                4. Access limited to the named people working on the enquiry.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A case file exists with an index in which every document sent to the authority is numbered, dated and marked as sent."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Create the case folder with its four sections"
                - "Number every document received or created so far"
                - "Mark each document already sent to the authority with the date sent"
                - "Restrict folder access to the people working on the case"
                - "File new documents and update the index @recurring(weekly:fri)"
            - name: Records preservation hold for the years under enquiry
              description: |-
                ## Purpose
                Routine deletion schedules, a software migration or a clear-out of the storeroom can destroy records the authority is entitled to see, and missing records invite estimated assessments. Suspending disposal for the periods under enquiry, across paper, the ledger, email and apps, protects the evidence you need to support your figures.

                ## Milestones
                1. The periods and record types covered by the hold listed.
                2. Automatic deletion paused in email, cloud storage and accounting apps for those periods.
                3. Staff and any outside bookkeeper told in writing not to dispose of those records.
                4. Archived paper records located and their storage confirmed.

                ## Notes
                Keep the hold until the enquiry is closed and any appeal period has passed, and ask your adviser before lifting it. Plan any change of accounting software so that old data stays readable.
              priority: high
              deadlineOffsetDays: 10
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A written hold notice has gone to everyone who keeps records, and deletion settings for the periods under enquiry are paused in every system."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "List the years and record types the enquiry could touch"
                - "Pause automatic deletion rules in email and cloud storage"
                - "Send a written hold notice to staff and your bookkeeper"
                - "Find the archived paper records and check how they are stored"
                - "Confirm the hold is still applied in every system @recurring(quarterly)"
            - name: Scope map of taxes, years and entities under enquiry
              description: |-
                ## Purpose
                Letters often ask about one issue in one year, but a single question can reach other years, other taxes and related companies that used the same treatment. Mapping what is formally open, what could follow and where the same approach was used elsewhere shows you and the adviser the real exposure before anything is replied.

                ## Milestones
                1. Each open enquiry listed by tax, entity, period and issue.
                2. Other years or entities where the same treatment was used identified.
                3. The adviser's view of which areas could widen recorded.
                4. The map revised each time a new letter arrives.
              priority: medium
              deadlineOffsetDays: 21
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A one-page scope map shows every formally open issue and every other year or entity using the same treatment, reviewed by the adviser."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "List each tax, entity and period named in the letters"
                - "Find other years where the same treatment was applied"
                - "Ask the adviser which areas could reasonably widen"
                - "Revise the map whenever a new letter adds a period or issue"
            - name: Fee protection insurance and adviser cost cover check
              description: |-
                ## Purpose
                Adviser fees in a long enquiry can exceed the tax in dispute, and many businesses hold fee protection cover through their accountant, a trade body or a business policy without realising it. Checking what cover exists, what it excludes and how to notify the insurer has to happen before fees build up, or a claim can be refused.

                ## Milestones
                1. Every policy that might cover enquiry costs found: fee protection, business insurance and trade body membership.
                2. Exclusions noted, such as deliberate errors, late filing or enquiries opened before cover began.
                3. The insurer notified within the policy's time limit where cover exists.
                4. A decision recorded on taking cover for the future if none exists.

                ## Notes
                Cover of this kind usually pays adviser fees only, not the tax, interest or penalties.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "Every policy that could cover enquiry fees has been checked, the insurer notified where cover exists, and a decision on future cover recorded."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Ask your accountant whether the business is on a fee protection scheme"
                - "Check business insurance and trade body membership for enquiry cover"
                - "Notify the insurer in writing before more fees are incurred"
                - "Check the policy renewal still includes enquiry fee cover @recurring(yearly)"
            - name: Unannounced inspection visit protocol
              description: |-
                ## Purpose
                Some authorities can arrive without notice, particularly for indirect tax, payroll and cash businesses, and the first hour at reception sets the tone. A short protocol telling staff who to call, where visitors wait, how to check identity and what not to hand over unsupervised keeps the business courteous and cooperative without being caught off guard.

                ## Milestones
                1. A one-page protocol covering identity checks, who to call first and where visitors wait.
                2. Phone numbers for the named contact and the adviser printed on it.
                3. Reception staff and duty managers walked through it.
                4. A line on politely asking officers which powers they are using and what they want to see.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A visit protocol sits at reception with current phone numbers, and every receptionist and duty manager has been walked through it."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Draft a one-page visit protocol naming who to call first"
                - "Add the named contact's and the adviser's phone numbers"
                - "Walk reception staff and duty managers through the protocol"
                - "Refresh the protocol and brief any new front desk staff @recurring(yearly)"
            - name: Weekly case call with the investigation adviser
              description: |-
                ## Purpose
                Without a fixed slot, enquiry work drifts until a deadline forces a rushed reply. A thirty-minute weekly call with the adviser to go through new correspondence, open requests, deadlines and decisions needed keeps the case moving and gives the owner one place to ask questions.

                ## Milestones
                1. A standing weekly call in both calendars.
                2. A fixed agenda: new correspondence, open requests, deadlines and decisions needed.
                3. Notes and actions filed in the case file after each call.
                4. Calls moved to fortnightly by agreement once the enquiry goes quiet.

                ## Notes
                Start from the **Meeting notes** template.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A call is held each week with notes filed, and every action from it has an owner and a date."
                cadence: rolling
              tasks:
                - "Book a standing thirty-minute call with the adviser"
                - "Set a four-line agenda for the call"
                - "Hold the case call and file the notes @recurring(weekly:tue)"
                - "Agree with the adviser when the call can move to fortnightly"
            - name: Information request log with response owners
              description: |-
                ## Purpose
                Inspectors usually ask for documents in batches, and items get missed when requests live inside letters rather than on a list. Logging every item requested, who will gather it, its due date and when it was sent makes partial replies visible and stops the same item being asked for twice.

                ## Milestones
                1. Every requested item split out onto its own line with an owner.
                2. Due dates matched to the deadline tracker.
                3. Each item marked as gathered, checked by the adviser and sent.
                4. Items that appear to fall outside the enquiry flagged for the adviser.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every item the authority has requested appears on the log with an owner, and none is past its due date without a written explanation."
                cadence: rolling
              tasks:
                - "Split each information request into separate line items"
                - "Give each item an owner and a due date"
                - "Flag items that look outside the scope of the enquiry"
                - "Review open items and chase their owners @recurring(weekly:thu)"
            - name: Correspondence register for the enquiry
              description: |-
                ## Purpose
                Phone calls with an inspector are easily forgotten and later remembered differently by each side. Recording every letter, email, call and meeting with the date, the people involved and a short summary, and confirming important calls in writing, gives you an accurate history if the authority later relies on what was said.

                ## Milestones
                1. Every contact with the authority so far entered in the register.
                2. Each call followed by an email confirming what was agreed.
                3. The register reconciled to the case file index.
                4. Any disagreement about what was said noted and raised in writing.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "The register holds an entry for every contact with the authority, and every call has a written confirmation on file."
                cadence: rolling
              tasks:
                - "Enter every contact with the authority so far in the register"
                - "Send a confirming email after each call with the inspector"
                - "Raise in writing any point where the authority's account differs from yours"
                - "Reconcile the register with the case file index @recurring(monthly:4)"
            - name: Investigation cost tracking against the agreed budget
              description: |-
                ## Purpose
                Fees in an enquiry are easy to approve one invoice at a time and alarming in total. Asking the adviser for a budget by stage and comparing each invoice to it shows when the cost of fighting a point is approaching the tax at stake, which is a call the owner should make deliberately.

                ## Milestones
                1. A fee estimate split by stage from the adviser.
                2. Every invoice logged against the stage it relates to.
                3. Spend to date compared with the tax at stake each month.
                4. Any overrun discussed with the adviser before more work is approved.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Each month, enquiry spend to date is compared with the stage budget and the tax in dispute, and any overrun is agreed in writing."
                cadence: rolling
              tasks:
                - "Ask the adviser for a fee estimate split by stage"
                - "Log every adviser invoice against its stage"
                - "Compare spend to date with the budget and the tax at stake @recurring(monthly:9)"
                - "Agree any overrun in writing before further work starts"
            - name: Monthly enquiry report to the owner or board
              description: |-
                ## Purpose
                Directors are responsible for the company's tax affairs, and a board that hears about an enquiry only at settlement cannot weigh the risk, the cost or the reputational side. A one-page monthly update on status, exposure, cost and decisions needed lets owners and boards make the calls that are theirs to make.

                ## Milestones
                1. A one-page report format agreed.
                2. Status, exposure range, cost to date and decisions needed covered every month.
                3. The report circulated before each board or owner meeting.
                4. Decisions taken recorded in the minutes and the case file.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A one-page enquiry update reaches the owner or board every month, and every decision taken from it is minuted."
                cadence: rolling
              tasks:
                - "Agree the four headings for the monthly report"
                - "Ask the agent to draft the report from the case call notes"
                - "Send the enquiry report to the owner or board @recurring(monthly:18)"
                - "Record each decision in the minutes and the case file"
            - name: Interest and penalty exposure running total
              description: |-
                ## Purpose
                Interest on unpaid tax usually keeps running while an enquiry is open, and penalty ranges depend on behaviour and the quality of disclosure. A running total of the tax at issue, interest to date and the adviser's penalty range shows the true cost of delay and whether paying an amount on account is worth discussing.

                ## Milestones
                1. Tax at issue by year recorded from the adviser's analysis.
                2. Interest to date calculated at the authority's published rate.
                3. The adviser's likely penalty range noted.
                4. A payment on account discussed with the adviser and the decision recorded.

                ## Notes
                A payment on account is not an admission in every system, but ask the adviser how your authority treats it before paying.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A monthly figure for tax, interest and penalty range is on file, and a decision on paying on account has been recorded."
                cadence: rolling
              tasks:
                - "Record the tax at issue by year from the adviser's analysis"
                - "Look up the authority's current late payment interest rate"
                - "Ask the adviser whether a payment on account would stop interest"
                - "Update the interest and penalty totals @recurring(monthly:24)"
            - name: Open tax enquiries risk register
              description: |-
                ## Purpose
                Larger businesses rarely have one enquiry at a time: a payroll check in one country, an indirect tax visit in another and a corporate tax question at group level. A single register with each enquiry's exposure, likelihood, owner and next step gives the tax lead and the audit committee one honest view.

                ## Milestones
                1. Every open enquiry across the group on one register.
                2. Exposure, likelihood, owner and next step recorded for each.
                3. The register reviewed and dated by the tax lead each quarter.
                4. Closed enquiries moved to an archive tab with their outcome.

                ## Notes
                Start from the **Risk register** template.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A risk register lists every open tax enquiry with exposure and owner, and has been reviewed and dated each quarter."
                cadence: rolling
              tasks:
                - "List every open tax enquiry across all entities"
                - "Add exposure, likelihood, owner and next step for each"
                - "Review the register with the tax lead @recurring(quarterly)"
                - "Move closed enquiries to an archive tab with their outcome"
            - name: Disclosing open tax disputes in the year-end accounts
              description: |-
                ## Purpose
                Open enquiries can call for a provision, a contingent liability note or an uncertain tax position disclosure, and the auditors will ask about them. Preparing a status pack for each open enquiry before the year-end means the accounting judgement is made with the adviser's view in hand, not in the last week of fieldwork.

                ## Milestones
                1. A status note for each open enquiry with the adviser's view of likely outcomes.
                2. The accounting treatment agreed with your accountant or auditor.
                3. Disclosure wording reviewed by the adviser for anything that could prejudice the case.
                4. Final figures and wording filed with the year-end papers.

                ## Notes
                Published accounts can be read by the authority, so have the adviser look at any wording about the dispute before it is signed off.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: deliverable
                success_criteria: "Before each year-end, every open enquiry has a status note and an agreed accounting treatment filed with the year-end papers."
                cadence: cyclic
              tasks:
                - "Ask the adviser for a written view on each open enquiry"
                - "Agree the accounting treatment with your accountant or auditor"
                - "Have the adviser review the disclosure wording before sign-off"
                - "Prepare the year-end status pack for open enquiries @recurring(yearly)"
            - name: Types of tax enquiry and what each signals
              description: |-
                ## Purpose
                A random compliance check, an aspect enquiry into one figure, a full enquiry into a whole return and a fraud investigation call for very different responses. Learning how your authority labels each type, and what the wording of the opening letter tells you, helps you respond in proportion rather than panic or underreact.

                ## Milestones
                1. The enquiry types your authority uses listed with a one-line description each.
                2. The type of your current enquiry identified and confirmed with the adviser.
                3. The usual stages and typical length of that type noted.
                4. Signs that an enquiry is widening or escalating written down.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A one-page note names your authority's enquiry types, identifies which applies to you and has been confirmed by the adviser."
                cadence: phased
                effort_hours_estimate: "3"
              tasks:
                - "Read your authority's published guidance on enquiry types"
                - "Write a one-line description of each type"
                - "Ask the adviser to confirm which type you are facing"
                - "Note the signs that an enquiry is widening or escalating"
            - name: Taxpayer rights and obligations during an enquiry
              description: |-
                ## Purpose
                Most tax authorities publish a charter or code of practice setting out what they will do and what they expect in return: reasonable deadlines, courtesy, explanations of decisions and the right to complain or appeal. Knowing it lets you hold the authority to its own standards while meeting your duty to cooperate.

                ## Milestones
                1. Your authority's charter or code of practice found and read.
                2. Your rights that matter for this enquiry listed.
                3. Your obligations, such as producing records and replying on time, listed.
                4. Any point where the authority seems to fall short raised with the adviser.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A list of rights and obligations taken from your authority's published charter is in the case file, with any concerns raised with the adviser."
                cadence: phased
                effort_hours_estimate: "2"
              tasks:
                - "Find your tax authority's taxpayer charter or code of practice"
                - "List the rights that apply to the stage you are at"
                - "List your own obligations during the enquiry"
                - "Raise any apparent shortfall in the authority's conduct with the adviser"
            - name: How tax penalties and disclosure reductions work
              description: |-
                ## Purpose
                Penalties are often set by the behaviour behind an error, such as careless, deliberate or deliberate and concealed, and then reduced for the quality of disclosure: telling, helping and giving access. Understanding the mechanics shows why prompt, full cooperation can matter more to the final bill than the argument over the tax itself.

                ## Milestones
                1. Your authority's penalty categories and reduction factors summarised on one page.
                2. The adviser's view on which category could apply recorded.
                3. The cooperation steps that can earn reductions listed.
                4. Evidence of your cooperation kept in the case file as it happens.

                ## Notes
                Whether an error was careless or deliberate is a judgement for the authority and, if disputed, a tribunal. Work out your position with the adviser rather than conceding a label in conversation.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A one-page penalty summary is on file with the adviser's view of the likely category and a list of cooperation steps taken."
                cadence: phased
                effort_hours_estimate: "3"
              tasks:
                - "Read your authority's published penalty guidance"
                - "Summarise the behaviour categories and reductions on one page"
                - "Ask the adviser which category the authority is likely to consider"
                - "Keep a dated note of each cooperation step in the case file"
            - name: Time limits for reopening earlier tax years
              description: |-
                ## Purpose
                Authorities can normally reopen recent years, but longer windows often apply where an error was careless or deliberate, and the right to raise an assessment eventually expires. Knowing the limits for each year in play tells you how far back the enquiry could reach and whether some years are already protected.

                ## Milestones
                1. The ordinary and extended time limits for each tax in the enquiry noted.
                2. Each year in the scope map marked with the date its limit expires.
                3. The adviser's view on whether extended limits could apply recorded.
                4. Years that are out of time identified with reasons.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Every year in the scope map shows its assessment time limit, checked by the adviser."
                cadence: phased
                effort_hours_estimate: "2"
              tasks:
                - "Look up the assessment time limits for each tax in the enquiry"
                - "Mark each year in the scope map with the date its limit expires"
                - "Ask the adviser whether an extended limit could apply"
                - "Note which years are out of time and why"
            - name: Information notices and how to challenge one
              description: |-
                ## Purpose
                If informal requests stall, an authority may issue a formal notice requiring documents, often with penalties for not complying and a short window to appeal. Understanding what a notice can demand, what it usually cannot, such as some privileged advice or material unrelated to the enquiry, and how to appeal lets you comply where you must and challenge overreach in time.

                ## Milestones
                1. Your authority's information powers and any limits on them summarised.
                2. The difference between an informal request and a formal notice understood.
                3. The appeal route and time limit for a notice noted in the deadline tracker.
                4. A plan agreed with the adviser for responding if a notice arrives.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A short note on information powers, their limits and the appeal window is in the case file, with a response plan agreed with the adviser."
                cadence: phased
                effort_hours_estimate: "3"
              tasks:
                - "Read your authority's guidance on information and inspection powers"
                - "Note what a formal notice can require and what it cannot"
                - "Add the appeal window for any notice to the deadline tracker"
                - "Agree with the adviser how you would answer a formal notice"
            - name: Practising answers for an interview with the inspector
              description: |-
                ## Purpose
                Owners asked to attend an interview often over-answer, guess at figures or speculate about what a former bookkeeper did. Rehearsing the likely questions with the adviser, agreeing what you know and what you need to check, and getting comfortable saying you will confirm a point later keeps every answer accurate.

                ## Milestones
                1. A list of the questions the inspector is likely to ask, drafted with the adviser.
                2. Facts you can confirm separated from points that need checking.
                3. One rehearsal session held with the adviser playing the inspector.
                4. A short note of points to avoid speculating on.

                ## Notes
                Answer the question asked, briefly. It is fine to say you do not know or will come back with the figure.
              priority: medium
              deadlineOffsetDays: 30
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A rehearsal with the adviser has been held, and a written list of likely questions with agreed answers and open points is in the case file."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Ask the adviser for the questions an inspector usually asks in this type of case"
                - "Separate what you know for certain from what needs checking"
                - "Hold a rehearsal with the adviser playing the inspector"
                - "Write down the topics you will not guess about on the day"
            - name: Checking the inspector's calculations and working papers
              description: |-
                ## Purpose
                Assessments built from samples, extrapolations or bank deposit analysis can contain errors: transfers between your own accounts counted as sales, a loan treated as income or one unusual month scaled up to a whole year. Rebuilding the calculation line by line, with the adviser, is often where the largest reductions come from.

                ## Milestones
                1. The authority's calculations and working papers obtained in full.
                2. Each line traced back to the source document it relies on.
                3. Errors, double counts and unsupported assumptions listed with evidence.
                4. A corrected calculation prepared for the adviser to put forward.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: artifact
                success_criteria: "A line-by-line review of the authority's calculation exists, with each error evidenced and a corrected figure agreed with the adviser."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Ask the inspector for the full working papers behind the figures"
                - "Trace each line of the calculation to its source document"
                - "List transfers, loans and one-off items wrongly treated as income"
                - "Prepare a corrected calculation for the adviser to check"
            - name: Dispute resolution routes from review to tribunal
              description: |-
                ## Purpose
                When you disagree with a decision there are usually several routes: an internal review by an officer not involved in the case, mediation or another form of alternative dispute resolution, and an appeal to an independent tribunal or court. Each has its own time limits, costs and chances of a negotiated outcome, and choosing late can close off the better ones.

                ## Milestones
                1. The routes available for your tax and authority listed with their time limits.
                2. The rough cost, duration and publicity of each noted.
                3. Whether one route rules out another understood.
                4. A preferred route agreed with the adviser and recorded.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A one-page comparison of review, mediation and appeal routes, with time limits, is in the case file with a preferred route agreed."
                cadence: phased
                effort_hours_estimate: "3"
              tasks:
                - "List the review, mediation and appeal routes your authority offers"
                - "Note the time limit and rough cost of each route"
                - "Ask the adviser whether choosing one route closes another"
                - "Record the preferred route and the reasons"
            - name: Internal fact-finding review before the first reply
              description: |-
                ## Purpose
                Answering an inspector before you know the facts risks saying something that later proves wrong, which damages credibility and can affect penalties. A short review led by the adviser, pulling the records behind the questioned figures and speaking to the people involved, gives you the true position before anything is sent.

                ## Milestones
                1. The records behind each questioned figure pulled together.
                2. The people who prepared or approved those figures spoken to, with notes kept.
                3. A written summary of the true position on each question.
                4. Any errors found listed separately for a disclosure decision.

                ## Notes
                Ask the adviser whether the review should be run under a lawyer's instruction so that its findings are protected, where your country allows that.
              priority: medium
              deadlineOffsetDays: 30
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A written fact-finding summary covers every question in the opening letter before the first substantive reply is sent."
                cadence: one-shot
                effort_hours_estimate: "10"
              tasks:
                - "Pull the ledger entries and invoices behind each questioned figure"
                - "Speak to whoever prepared or approved those figures and keep notes"
                - "Write a short summary of the true position on each question"
                - "List any errors found for a separate disclosure decision"
            - name: Voluntary disclosure decision for other errors found
              description: |-
                ## Purpose
                Fact-finding sometimes turns up errors outside the enquiry: an unrecorded bank account, an old expense claim, a missed filing for another tax. Deciding with the adviser whether and how to disclose them, before the authority finds them, can change penalties substantially, so the decision should be made deliberately and recorded.

                ## Milestones
                1. Each error found outside the enquiry listed with the tax and years affected.
                2. The adviser's written view on disclosure options and their consequences.
                3. A decision taken by the owner or board, with the date and the advice relied on.
                4. Any disclosure made in the form the authority requires, with a copy filed.

                ## Notes
                This is a decision for the business, made on professional advice. Record who decided, when, and on what advice.
              priority: high
              deadlineOffsetDays: 60
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A recorded decision on disclosing each additional error exists, signed off by the owner or board on the adviser's written advice."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "List each error found outside the enquiry with the years affected"
                - "Ask the adviser for written disclosure options and consequences"
                - "Take the decision at an owner or board meeting and minute it"
                - "File a copy of any disclosure made and the authority's acknowledgement"
            - name: Negotiating a proportionate records request
              description: |-
                ## Purpose
                Opening requests sometimes ask for every bank statement, invoice and ledger entry over several years, which can take weeks to gather and go well beyond what the question needs. Proposing a sample, a summary or a narrower date range through the adviser often satisfies the inspector at a fraction of the effort.

                ## Milestones
                1. The hours needed to meet the request as written estimated.
                2. A proportionate alternative drafted: a sample, a summary or a narrower range.
                3. The proposal put to the inspector in writing by the adviser.
                4. The agreed scope recorded in the information request log.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A written agreement with the inspector on the scope of records to be supplied is filed, replacing the original open-ended request."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Estimate the hours needed to meet the request as written"
                - "Draft a sample or summary that would answer the inspector's question"
                - "Ask the adviser to put the proposal to the inspector in writing"
                - "Record the agreed scope in the information request log"
            - name: Reply to the inspector's preliminary view letter
              description: |-
                ## Purpose
                Many enquiries reach a point where the inspector sets out a provisional view and figures and invites comments before making a decision. This reply is the best chance to correct facts, challenge the calculation and supply missing evidence, so it deserves a structured, checked response sent by the deadline.

                ## Milestones
                1. Every point in the preliminary view listed and marked agreed, disputed or needing evidence.
                2. Evidence gathered for each disputed point.
                3. A reply drafted, reviewed by the adviser and approved by the owner.
                4. The reply sent before the deadline and filed with its date.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "A reply addressing every point in the preliminary view, approved by the owner and the adviser, is sent before the deadline."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Mark each point in the letter as agreed, disputed or needing evidence"
                - "Gather the evidence for each disputed point"
                - "Ask the agent to draft a reply structured point by point for the adviser"
                - "Send the approved reply before the deadline and file a copy"
            - name: Settlement range and accounting provision for the enquiry
              description: |-
                ## Purpose
                Before negotiating, the business needs a realistic range: the best case if your arguments succeed, the likely case, and the worst case including interest and penalties. Agreeing that range with the adviser, and the provision it implies with your accountant, sets a walk-away point and stops the accounts surprising anyone later.

                ## Milestones
                1. Best, likely and worst case figures with tax, interest and penalties.
                2. The adviser's reasoning for each case written down.
                3. A provision or disclosure agreed with your accountant.
                4. A walk-away point agreed by the owner or board.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A three-case settlement range and an agreed provision are on file, with a walk-away point approved by the owner or board."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Ask the adviser for best, likely and worst case figures"
                - "Add interest and the penalty range to each case"
                - "Agree the provision or disclosure with your accountant"
                - "Get the owner or board to approve a walk-away figure"
            - name: Time-to-pay arrangement for the settled liability
              description: |-
                ## Purpose
                A settlement that lands as one sum can strain cash flow, and most authorities will consider an instalment arrangement if asked early with a credible plan. Preparing a short cash forecast and a proposal before the settlement figure is final turns a lump sum into payments the business can actually meet.

                ## Milestones
                1. A thirteen-week cash forecast showing what the business can pay each month.
                2. An instalment proposal with amounts and dates.
                3. The arrangement agreed in writing with the authority.
                4. Every instalment paid on its date and logged.

                ## Notes
                Missing an instalment can cancel the arrangement. Set the amounts at what you can pay in a poor month, not an average one.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A written instalment arrangement with the authority is on file, and every payment due so far has been made on its date."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Build a thirteen-week cash forecast from the bank and known bills"
                - "Draft an instalment proposal with amounts and dates"
                - "Ask the adviser to agree the arrangement in writing with the authority"
                - "Confirm the instalment has gone out on the agreed date @recurring(monthly:28)"
            - name: Fixing the record-keeping weaknesses the enquiry exposed
              description: |-
                ## Purpose
                Most enquiries reveal a weak spot: cash takings not banked intact, missing receipts, a private expense running through the business or a treatment nobody had questioned. Turning each finding into a fix with an owner and a date stops the same issue becoming the subject of the next enquiry, and shows the authority the business has acted.

                ## Milestones
                1. Every weakness the enquiry found listed with its cause.
                2. A fix, an owner and a completion date set for each.
                3. Fixes confirmed as working after one full month.
                4. A one-page lessons note shared with everyone who handles the records.

                ## Notes
                Start from the **Remediation plan** template.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Every weakness from the enquiry has a completed fix with an owner and date, and the lessons note has been shared with the finance team."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "List every weakness the enquiry exposed and its cause"
                - "Give each fix an owner and a completion date"
                - "Check progress on each open fix @recurring(monthly:12)"
                - "Share a one-page lessons note with everyone who keeps the records"
            - name: Advance ruling to stop the same dispute recurring
              description: |-
                ## Purpose
                Where the dispute was about an uncertain treatment that continues every year, settling one year does not settle the next. Many authorities offer a clearance or ruling process for a specific transaction or treatment, and a written ruling can turn an annual argument into a known position.

                ## Milestones
                1. The recurring treatment and the years it affects described in a paragraph.
                2. Your authority's ruling or clearance process and its requirements identified.
                3. A decision taken with the adviser on whether to apply.
                4. Any ruling received filed with the return preparation notes.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A recorded decision on applying for a ruling exists, and any ruling received is filed where next year's return will be prepared."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Describe the recurring treatment and the years it affects"
                - "Find your authority's ruling or clearance process and its conditions"
                - "Decide with the adviser whether an application is worthwhile"
                - "File any ruling with next year's return preparation notes"
            - name: On-site inspection visit preparation
              description: |-
                ## Purpose
                Scheduled visits to your premises usually mean an officer will look at records, systems and how the business actually operates, and may want to speak to staff. Preparing the room, the records list, who attends and a short walkthrough of your systems makes the visit shorter and keeps the discussion within the agreed scope.

                ## Milestones
                1. The date, the officers attending and the stated purpose confirmed in writing.
                2. A quiet room booked and the agreed records ready in it.
                3. The adviser booked to attend, with the owner briefed.
                4. A short walkthrough of the accounting and sales systems prepared.
                5. Notes of the visit written up the same day and filed.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "The visit takes place with the adviser present and agreed records ready, and notes are filed in the case file the same day."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Confirm the visit date, attendees and purpose in writing"
                - "Book a quiet room and set out the agreed records"
                - "Prepare a ten-minute walkthrough of the accounting and sales systems"
                - "Write up the visit notes the same day and file them"
            - name: Formal meeting with the tax inspector
              description: |-
                ## Purpose
                Meetings with the inspector, in person or by video, are written up in the authority's notes and can be relied on later. Agreeing an agenda in advance, attending with the adviser and checking the authority's notes for accuracy protects you from a summary that does not match what was said.

                ## Milestones
                1. An agenda agreed with the inspector in advance.
                2. Attendees on your side confirmed and briefed.
                3. Your own notes taken during the meeting.
                4. The authority's meeting notes checked and any corrections sent in writing.

                ## Notes
                Start from the **Meeting notes** template.
              priority: medium
              deadlineOffsetDays: 45
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "The meeting is held to an agreed agenda, and corrections to the authority's notes, if any, have been sent in writing."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Ask the adviser to agree an agenda with the inspector"
                - "Brief everyone attending on the agenda and their role"
                - "Take your own notes throughout the meeting"
                - "Check the authority's notes and send any corrections in writing"
            - name: Settlement negotiation meeting
              description: |-
                ## Purpose
                Negotiated settlements are usually reached in a meeting or call where both sides trade points: the inspector drops some issues, the business accepts others and penalties are agreed. Walking in with your range, the points you will concede, the points you will not and the evidence for each makes it a negotiation rather than an acceptance.

                ## Milestones
                1. A list of points you can concede and points you will defend, with evidence for each.
                2. Your settlement range and walk-away point confirmed with the owner or board.
                3. The meeting held with the adviser leading.
                4. Agreed terms summarised in writing within two days.
              priority: medium
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A written summary of agreed settlement terms is sent to the authority within two days of the meeting and sits within the approved range."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "List the points you will concede and those you will defend"
                - "Attach the strongest evidence to each defended point"
                - "Confirm the walk-away figure with the owner before the meeting"
                - "Send a written summary of agreed terms within two days"
            - name: Closure notice and final settlement check
              description: |-
                ## Purpose
                An enquiry is only finished when the authority issues its closure notice or settlement agreement and the figures match what was agreed. Checking the tax, interest and penalty amounts, the years covered and any wording about future years before signing avoids paying more than agreed or leaving years quietly open.

                ## Milestones
                1. The closure notice or settlement agreement checked against the agreed terms.
                2. Tax, interest and penalty figures recalculated and matched.
                3. Any wording that keeps other years open queried with the adviser.
                4. Payment made or arranged, and the records hold lifted only on the adviser's say-so.
              priority: high
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "The closure document matches the agreed figures and years, is signed and filed, and the liability is paid or under an agreed arrangement."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Compare the closure document line by line with the agreed terms"
                - "Recalculate the tax, interest and penalty figures"
                - "Query any wording about other years with the adviser before signing"
                - "Pay or arrange payment and file the signed closure document"
            - name: Founder's personal return enquiry linked to the company
              description: |-
                ## Purpose
                Enquiries into a founder's own return frequently reach into the company: the director's loan account, expenses paid personally and reclaimed, a car or a home office, or share transactions. Separating personal and company records early, with an adviser who can see both sides, stops one enquiry turning into two uncoordinated ones.

                ## Milestones
                1. The personal issues under enquiry matched to the company records they touch.
                2. The director's loan account reconciled for every year in scope.
                3. One adviser, or two who share information, covering both returns.
                4. Personal and company documents kept in separate sections of the case file.

                ## Notes
                Founders often pay company costs on a personal card and the reverse. Each crossing needs a clear record.
              priority: medium
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "The director's loan account is reconciled for every year in scope, and one coordinated adviser team covers the personal and company sides."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Match each personal question to the company records it touches"
                - "Reconcile the director's loan account for every year in scope"
                - "Confirm one adviser team is covering both returns"
                - "Review new director's loan movements with the bookkeeper @recurring(quarterly)"
            - name: Running the business while an enquiry is open
              description: |-
                ## Purpose
                For an owner-managed business the hidden cost of an enquiry is the owner's time and attention, which can stretch over a year or more. Ring-fencing a weekly slot, handing document gathering to a bookkeeper or assistant and agreeing what the adviser handles alone protects sales and staff while the case moves.

                ## Milestones
                1. A weekly two-hour slot for enquiry work in the owner's calendar.
                2. Document gathering delegated to a named person.
                3. A written list of what the adviser can handle without the owner.
                4. A short note for key staff on what is happening and what is expected of them.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "The owner spends a fixed weekly slot on the enquiry, gathering is delegated to a named person and the adviser's delegated tasks are written down."
                cadence: rolling
              tasks:
                - "Delegate document gathering to a named bookkeeper or assistant"
                - "List what the adviser can handle without asking the owner"
                - "Tell key staff briefly what is happening and what you need from them"
                - "Keep a two-hour block for enquiry work in the diary @recurring(weekly:wed)"
            - name: Business economics and lifestyle questions for owner-managed businesses
              description: |-
                ## Purpose
                Inspectors looking at smaller businesses, especially cash businesses, often test whether declared profits could fund the owner's lifestyle, comparing drawings, mortgage payments, cars and holidays with reported income. Preparing a reconciliation of personal spending against sources of money, such as loans, gifts, savings and a partner's income, answers the question before it hardens into an assumption.

                ## Milestones
                1. Household spending for each year in scope estimated from bank and card statements.
                2. Sources of money listed with evidence: drawings, loans, gifts, savings and other income.
                3. Any gap between spending and declared sources explained in writing.
                4. Gross margins and cash takings compared with similar businesses, with reasons for differences.

                ## Notes
                This is personal and can feel intrusive. Go through it with the adviser first, and only provide what has been asked for.
              priority: medium
              frontmatter:
                mode: research
                output_kind: artifact
                success_criteria: "A reconciliation of personal spending against evidenced sources exists for every year in scope, reviewed by the adviser."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "Estimate household spending each year from bank and card statements"
                - "Gather evidence for loans, gifts, savings and other income"
                - "Explain any gap between spending and declared sources in writing"
                - "Note why your margins differ from similar businesses, if they do"
            - name: Employer compliance inspection of payroll and worker status
              description: |-
                ## Purpose
                Employer checks look at payroll deductions, benefits and expenses, and at whether people paid as contractors should really have been on the payroll. Gathering the contracts, payroll records and evidence of how each contractor actually works lets you explain each arrangement with the adviser rather than defend it blind.

                ## Milestones
                1. Payroll reports, benefit records and expense policies for the periods in scope gathered.
                2. A list of every contractor with their contract, invoices and how they work in practice.
                3. The adviser's view on each contested worker recorded.
                4. Any agreed corrections reflected in the next payroll runs.
              priority: medium
              frontmatter:
                mode: research
                output_kind: deliverable
                success_criteria: "A pack covering payroll, benefits and every contractor in scope is supplied, and any agreed corrections are in the payroll."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "Export payroll and benefit reports for the periods in scope"
                - "List every contractor with their contract and recent invoices"
                - "Describe how each contractor actually works day to day"
                - "Feed agreed corrections into the next payroll run"
            - name: Indirect tax inspection of a trading business
              description: |-
                ## Purpose
                Sales tax and VAT inspections test the link between sales records, the returns filed and the bank, often with a close look at input claims, exempt sales and cross-border supplies. Rebuilding that link for the periods under review, with the reconciliations ready, answers most of the inspector's questions in one sitting.

                ## Milestones
                1. Each return in scope reconciled to the sales and purchase ledgers.
                2. Sales reconciled to bank receipts, including card and marketplace payouts.
                3. Large input claims supported by valid invoices.
                4. Exempt, zero-rated and cross-border sales listed with their evidence.
              priority: medium
              frontmatter:
                mode: research
                output_kind: deliverable
                success_criteria: "Every return under inspection is reconciled to the ledgers and bank, with valid invoices for large input claims, before the inspector arrives."
                cadence: phased
                effort_hours_estimate: "12"
              tasks:
                - "Reconcile each return in scope to the sales and purchase ledgers"
                - "Match declared sales to bank receipts and payment processor payouts"
                - "Pull valid invoices for the twenty largest input claims"
                - "List exempt and cross-border sales with their supporting evidence"
            - name: Enquiry disclosed during a fundraise or company sale
              description: |-
                ## Purpose
                Investors and buyers will ask about open tax enquiries in due diligence, and one that surfaces late can break warranties or stall a deal. Preparing a short factual summary with the adviser's view, and agreeing with the deal lawyers how it is disclosed and whether an indemnity or escrow is likely, keeps the process on track.

                ## Milestones
                1. A two-page factual summary of the enquiry, its status and the exposure range.
                2. The adviser's view attached in a form suitable for the data room.
                3. Disclosure wording against the warranties agreed with the deal lawyers.
                4. Any indemnity, escrow or price adjustment understood before signing.
              priority: medium
              frontmatter:
                mode: research
                output_kind: deliverable
                success_criteria: "A factual enquiry summary is in the data room, and the disclosure letter covers the enquiry in wording agreed with the deal lawyers."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Ask the agent to draft a two-page factual summary from the case file"
                - "Ask the adviser for a status note suitable for the data room"
                - "Agree disclosure wording against the tax warranties with the deal lawyers"
                - "Ask the lawyers how an indemnity or escrow would work for this exposure"
            - name: Inherited enquiry after an acquisition
              description: |-
                ## Purpose
                Buying a company means inheriting its tax history, and an enquiry into years before completion can arrive months later. Checking the sale agreement's tax covenant or indemnity, notifying the sellers within the required time and agreeing who controls the defence protects the right to recover the cost.

                ## Milestones
                1. The tax covenant or indemnity and its claim conditions read and summarised.
                2. The sellers notified in the form and time the agreement requires.
                3. Conduct of the enquiry agreed between buyer and sellers in writing.
                4. Costs and any settlement tracked for recovery under the agreement.

                ## Notes
                Notice clauses are often strict. Have your lawyers check the notice before it is sent.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "The sellers have been notified within the agreement's time limit, conduct of the enquiry is agreed in writing and recoverable costs are tracked."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Find the tax covenant or indemnity in the sale agreement"
                - "Note the notice period and form a claim requires"
                - "Ask your lawyers to check and send the notice to the sellers"
                - "Track costs and any settlement for recovery under the agreement"
            - name: Suspected fraud or criminal investigation response
              description: |-
                ## Purpose
                Letters that mention fraud, a criminal investigation, an interview under caution or a special code of practice for serious cases change everything about the response, and what is said early can be used later. The sensible first step is to pause all contact and get a specialist tax investigation lawyer involved before anything further is said or sent.

                ## Milestones
                1. All contact with the authority paused until a specialist lawyer is instructed.
                2. A specialist tax investigation lawyer instructed within days.
                3. The letter's own deadlines logged, including any short window to accept or reject a disclosure process.
                4. A plan agreed with the lawyer for every further step.

                ## Notes
                This project organises the first steps; it does not replace legal advice. Do not destroy, alter or move any record, and do not discuss the matter with colleagues beyond what the lawyer agrees.
              priority: high
              deadlineOffsetDays: 7
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A specialist tax investigation lawyer is instructed within seven days of the letter, and every deadline in it is logged with the lawyer's plan."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Stop all contact with the authority until a lawyer is instructed"
                - "Find and instruct a specialist tax investigation lawyer this week"
                - "Log every deadline in the letter, including any acceptance window"
                - "Agree in writing with the lawyer who may discuss the matter internally"
            - name: Mediation or alternative dispute resolution with the authority
              description: |-
                ## Purpose
                Disputes that have stalled on facts rather than law are often suited to mediation, where a trained facilitator from the authority or outside helps both sides narrow the issues. Preparing a clear statement of the disputed facts and your position, and deciding in advance what a good outcome looks like, makes a single session productive.

                ## Milestones
                1. Eligibility for your authority's mediation or dispute resolution process confirmed.
                2. A statement of disputed facts and your position prepared with the adviser.
                3. A target outcome and a fallback agreed by the owner or board.
                4. The session held and any agreement recorded in writing.
              priority: low
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A mediation session is held with a prepared position statement, and its outcome is recorded in writing and filed."
                cadence: one-shot
                effort_hours_estimate: "10"
              tasks:
                - "Check whether your authority offers mediation for this kind of dispute"
                - "Prepare a statement of disputed facts with the adviser"
                - "Agree a target outcome and fallback with the owner or board"
                - "Record any agreement reached in writing after the session"
            - name: Tribunal appeal preparation
              description: |-
                ## Purpose
                If settlement fails, an appeal to an independent tribunal or court puts the evidence and arguments before a judge, with procedural rules, document bundles and witness statements. Preparing early, with counsel where needed, and weighing cost and publicity against the amount at stake makes the decision to go to a hearing a considered one.

                ## Milestones
                1. The appeal lodged within the time limit, with the grounds agreed with the adviser.
                2. A cost, timetable and publicity estimate weighed against the tax at stake.
                3. Witnesses identified and statements drafted.
                4. The hearing bundle prepared to the tribunal's rules.
                5. A recorded decision at each stage on whether to continue or settle.
              priority: medium
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "The appeal is lodged in time, a hearing bundle and witness statements meet the tribunal's rules, and each continue or settle decision is minuted."
                cadence: phased
                effort_hours_estimate: "40"
              tasks:
                - "Diarise the appeal deadline and confirm the grounds with the adviser"
                - "Get a cost and timetable estimate for the appeal"
                - "Identify witnesses and start their draft statements"
                - "Minute a continue or settle decision at each stage"
            - name: Formal complaint about the authority's delay or conduct
              description: |-
                ## Purpose
                Enquiries that stall for months without explanation, or officers who ignore their own code of practice, can be challenged through the authority's complaints process and, in many countries, an independent adjudicator or ombudsman. A factual, dated complaint focused on conduct rather than the tax often restarts a stalled case.

                ## Milestones
                1. A dated timeline of the delays or conduct complained of, drawn from the correspondence register.
                2. The authority's complaints process and any independent reviewer identified.
                3. A complaint sent, reviewed by the adviser, focused on conduct only.
                4. The response recorded and any escalation decided.
              priority: low
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "A factual complaint with a dated timeline has been sent through the authority's process, and its outcome is recorded."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Build a dated timeline of the delays from the correspondence register"
                - "Find the authority's complaints process and independent reviewer"
                - "Draft a complaint about conduct only and have the adviser review it"
                - "Record the response and decide whether to escalate"
            - name: Tax dispute governance for a large group
              description: |-
                ## Purpose
                Groups facing several enquiries a year benefit from deciding in advance when to settle, when to litigate, who approves concessions and how the relationship with the authority's large-business team is managed. A written dispute policy approved by the board makes those calls consistent across countries, entities and tax teams.

                ## Milestones
                1. Criteria written for settling, litigating or seeking a ruling.
                2. Approval limits set for concessions and settlements by size.
                3. Ownership of the relationship with each authority's large-business team assigned.
                4. The policy approved by the board or audit committee.

                ## Notes
                Link the approval limits to the group's delegation of authority so that settlements follow the same rules as other commitments.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A board-approved tax dispute policy sets settlement criteria, approval limits and relationship owners, and is reviewed every year."
                cadence: phased
                effort_hours_estimate: "16"
              tasks:
                - "Draft criteria for settling, litigating or seeking a ruling"
                - "Set approval limits for concessions by size of settlement"
                - "Assign an owner for the relationship with each authority"
                - "Review the policy with the audit committee @recurring(yearly)"
---

# Tax Investigation Response

This area is for owners, founders and in-house finance teams who have opened a letter from the tax authority and need to handle what follows without guesswork. It starts with the first days (triage, deadlines, choosing an adviser, privilege, one point of contact, a case file and a records hold), then the machinery of a live enquiry, the knowledge behind enquiry types, penalties, time limits and information notices, the decisions on disclosure, reply and settlement, the dated visits and meetings, the situations founders, small businesses and groups face, and finally fraud investigations, mediation, tribunal appeals and dispute governance.

What repeats is a weekly case call, weekly reviews of deadlines and open requests, a monthly cost check, report and interest update, quarterly checks of the records hold and the risk register, and a yearly status pack for the accounts. The Vendor, Meeting notes, Risk register and Remediation plan templates pair with the projects that name them. Installing adds all 50 projects as active, so archive the ones that are not for you yet.
