---
id: family-office.trustee-selection-and-oversight
name: Trustee Selection and Oversight
description: "A family's working system for trustees: who holds which role, letters of wishes, a proper selection process, a reporting and fee routine, and a calm plan for replacing a trustee when it is time."
category: personal
version: 1.0.0
tags: [family-office, trustee-selection-and-oversight, parent, retiree, trustees, protector, letter-of-wishes, trust-oversight]
author: Aurum Technology
starter_structure:
  templates:
    - meeting-notes
    - development-plan
    - vendor
  pillars:
    - name: Family Office & Private Wealth
      emoji: "🏰"
      description: "Running the affairs of a wealthy family, not picking investments: family governance and a constitution, trusts and foundations across jurisdictions, setting up a single-family office, a family investment policy and reporting, educating the next generation, philanthropy vehicles, household staff and concierge, and the security and privacy wealth brings."
      pillarFrontmatter:
        review_cadence: quarterly
      areas:
        - name: Trustee Selection and Oversight
          description: "Choosing and overseeing trustees: professional or family trustees, protectors, letters of wishes, trustee reporting, fees and replacing a trustee."
          projects:
            - name: Register of family trusts and their trustees
              description: |-
                ## Purpose
                Families with wealth built over decades often hold five or six trusts set up by different advisers in different decades, and nobody has a single list of who the trustee of each one is today. One register, with the trust name, date, governing law, trustee, protector and the relationship manager's name, is the base everything else in this area works from.

                ## Milestones
                1. Every trust the family settled or benefits from listed by name and date of settlement.
                2. The current trustee, any co-trustee and any protector recorded against each trust.
                3. A named contact and a direct line at each trustee written in the register.
                4. Gaps, such as a trust nobody can find the deed for, flagged for follow-up.

                ## Notes
                Include trusts where a family member is only a beneficiary, such as a grandparent's will trust. They are often the ones with the least oversight.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A single register lists every family trust with its governing law, current trustee, protector and a named contact."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "List every trust you know of from memory and old adviser letters"
                - "Ask each trustee to confirm in writing the trusts they act for"
                - "Record the protector and governing law for each trust"
                - "Confirm the register is still accurate with each trustee @recurring(yearly)"
            - name: Reading each trust deed for trustee powers
              description: |-
                ## Purpose
                What a trustee may and may not do is set by the deed and any later supplemental deeds, not by what the relationship manager says on the phone. Reading each deed once, with a one-page summary of the powers that matter to the family, means every later conversation about distributions, investments or a change of trustee starts from the actual words.

                ## Milestones
                1. A full copy of every deed and supplemental deed obtained for each trust.
                2. A one-page summary per trust covering powers of distribution, investment, addition and appointment.
                3. The clause naming who can appoint or remove trustees identified in each deed.
                4. Points that are unclear listed as questions for the family's trust lawyer.

                ## Notes
                Ask for the deed of retirement and appointment for every change of trustee too. Without them you cannot prove the current trustee was validly appointed.
              priority: high
              deadlineOffsetDays: 45
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Each trust has a one-page powers summary, and unclear clauses are listed as questions sent to the trust lawyer."
                cadence: one-shot
                effort_hours_estimate: "10"
              tasks:
                - "Request a certified copy of each deed and every supplemental deed"
                - "Summarise the distribution and investment powers on one page per trust"
                - "Mark the clause that says who appoints and removes trustees"
                - "Send the list of unclear clauses to the trust lawyer"
            - name: Roles and reserved powers chart for each trust
              description: |-
                ## Purpose
                Settlor, trustee, protector, enforcer, appointor, investment adviser and beneficiaries can all hold different powers, and in some structures the settlor has reserved powers of their own. A simple chart for each trust showing who can do what, and whose consent each act needs, stops family members assuming powers they do not have.

                ## Milestones
                1. A chart per trust naming every role holder and the powers attached to each role.
                2. Acts that need protector or settlor consent marked clearly on the chart.
                3. Roles that are vacant or held by someone who has died flagged.
                4. The charts checked by the trust lawyer and filed with the register.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Every trust has a roles chart checked by the trust lawyer, with vacant roles and consent requirements marked."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Draw the roles chart for the largest trust first"
                - "Mark every act that needs another party's consent"
                - "Flag any role that is vacant or held by someone deceased"
                - "Ask the trust lawyer to check the charts for errors"
            - name: Trustee engagement terms on file
              description: |-
                ## Purpose
                Professional trustees work under terms of business that set fees, notice periods, liability limits and what happens to records if you leave, yet many families have never seen the current version. Getting the signed terms for every trustee onto file shows what you actually agreed and what it would cost to move.

                ## Milestones
                1. The current signed terms of business for every professional trustee on file.
                2. Notice periods, exit fees and termination charges extracted into one table.
                3. Limits on the trustee's liability and indemnity clauses noted for each provider.
                4. Any terms that were changed by notice rather than signature identified.

                ## Notes
                Trust companies often update terms by sending a new schedule that takes effect unless you object. Ask for the version history, not just the latest copy.
              priority: medium
              frontmatter:
                mode: research
                output_kind: artifact
                success_criteria: "A table compares notice periods, exit fees and liability limits for every professional trustee, based on signed terms."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Ask each trustee for their current terms and the version history"
                - "Extract notice periods and exit fees into one table"
                - "Note the liability limit and indemnity wording for each provider"
                - "File the signed terms alongside the trust register"
            - name: Professional, family or mixed trustee decision
              description: |-
                ## Purpose
                A licensed trust company brings continuity, regulation and insurance, a family trustee brings knowledge of the people, and a mix can give both at the price of slower decisions. Weighing the three for each trust, against its size, its beneficiaries and its likely life, leads to a choice the family can explain to the next generation.

                ## Milestones
                1. The trade-offs of professional, family and mixed trusteeship written down for this family.
                2. Each trust scored against cost, continuity, independence and knowledge of the family.
                3. A preferred arrangement chosen per trust and the reasons recorded.
                4. The choice reviewed with the trust lawyer for tax residence and control risks.

                ## Notes
                Where a family member acts as trustee, where they live can affect where the trust is resident for tax. Check this with advisers before anyone accepts the role.
              priority: high
              deadlineOffsetDays: 60
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A written decision for each trust names the preferred trustee arrangement and the reasons, reviewed by the trust lawyer."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Write the pros and cons of each arrangement in plain words"
                - "Score each trust against cost, continuity, independence and knowledge"
                - "Ask the trust lawyer about tax residence risks of family trustees"
                - "Record the chosen arrangement and its reasons in the register"
            - name: Deciding whether each trust needs a protector
              description: |-
                ## Purpose
                A protector can approve or block key trustee decisions and often holds the power to replace the trustee, which gives the family a safeguard without running the trust day to day. Not every trust needs one, and the wrong person in the role can create deadlock, so the decision deserves its own short piece of work.

                ## Milestones
                1. Each trust's deed checked for whether a protector can be added and on what terms.
                2. The powers a protector would hold listed for the trusts where one makes sense.
                3. Candidates considered, including an independent professional and a trusted family friend.
                4. A decision recorded per trust, with the appointment drafted by the lawyer where needed.
              priority: medium
              deadlineOffsetDays: 60
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "Every trust has a recorded decision on whether a protector is needed, and any appointment is drafted by the trust lawyer."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Check each deed for a power to add a protector"
                - "List the powers a protector would need in each case"
                - "Shortlist two candidates for each trust that needs one"
                - "Ask the trust lawyer to draft any protector appointment"
            - name: Letter of wishes first draft or refresh
              description: |-
                ## Purpose
                A letter of wishes is not binding, but trustees of a discretionary trust read it first when a beneficiary asks for money, and many letters on file are fifteen years old and name grandchildren as babies. Writing or refreshing it now, in your own voice, tells the trustees what you would want when you are no longer there to ask.

                ## Milestones
                1. The current letter of wishes for each trust read, or its absence confirmed.
                2. A new draft covering education, homes, ventures, hardship and the age at which you trust judgement.
                3. The draft discussed with the trust lawyer so it stays guidance rather than instruction.
                4. The signed letter lodged with the trustee and a copy kept in the family's records.

                ## Notes
                Write about the reasons behind your wishes, not just the wishes. Trustees decide better when they understand what you were worried about.
              priority: high
              deadlineOffsetDays: 45
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "A signed, dated letter of wishes for each trust is lodged with the trustee and a copy is in the family's records."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Ask each trustee for the letter of wishes they hold on file"
                - "Write down what worries you most about each beneficiary and money"
                - "Ask the agent to turn your notes into a first draft letter"
                - "Review the draft with the trust lawyer before signing"
                - "Lodge the signed letter with the trustee and request acknowledgement"
            - name: Baseline of what each trustee charges
              description: |-
                ## Purpose
                Trustee fees come as annual fees, time costs, transaction charges, a percentage of assets and fees for third parties the trustee appoints, so the real cost is rarely the figure quoted at the start. Adding up the last two years of actual charges for each trust gives a baseline to compare, negotiate and review against.

                ## Milestones
                1. Two years of invoices and fee deductions gathered for every trust.
                2. Each charge sorted into fixed fee, time cost, transaction fee, asset-based fee or third party.
                3. Total cost per trust shown as an amount and as a share of trust assets.
                4. The three largest or least explained charges listed for questions to the trustee.
              priority: medium
              deadlineOffsetDays: 30
              frontmatter:
                mode: research
                output_kind: artifact
                success_criteria: "A fee baseline shows two years of actual trustee charges per trust, sorted by type and as a share of assets."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Request two years of invoices and fee deductions from each trustee"
                - "Sort every charge into one of five fee types"
                - "Work out total cost per trust as a share of its assets"
                - "Write the three questions you most want answered on fees"
            - name: Agreeing the trustee reporting pack
              description: |-
                ## Purpose
                Many families receive a valuation once a year and little else, then find out about a large decision months after it was made. Agreeing a standard reporting pack with each trustee, covering assets, transactions, distributions, decisions and fees, turns oversight from chasing into reading.

                ## Milestones
                1. A list of what the family wants to see each quarter and each year agreed internally.
                2. The list sent to each trustee and their standard reporting compared against it.
                3. A written agreement on contents, format and delivery dates with every trustee.
                4. The first pack received in the agreed form.

                ## Notes
                Trustees owe information duties mainly to beneficiaries, not to the settlor. Ask the lawyer who in the family is entitled to which reports before making demands.
              priority: medium
              deadlineOffsetDays: 45
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "Every trustee has agreed in writing a reporting pack with set contents and delivery dates, and the first pack has arrived."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Write a one-page list of the reports the family wants"
                - "Compare each trustee's standard reporting against the list"
                - "Agree contents and delivery dates in writing with each trustee"
                - "Check the first pack against the agreed list"
            - name: Family briefing on how the trustees work
              description: |-
                ## Purpose
                Adult children and their spouses often think the trust is a bank account the family controls, and are shocked when a trustee asks why they need the money. A short, calm briefing from the parents, with the trustee present for part of it, sets expectations before the first awkward request arrives.

                ## Milestones
                1. The beneficiaries who should attend agreed by the parents.
                2. A plain-language explanation of who the trustee is and how decisions get made prepared.
                3. A meeting held, with the trustee answering questions for part of it.
                4. Each attendee knowing how to make a request and who to contact.
              priority: medium
              frontmatter:
                mode: service
                output_kind: event-completion
                success_criteria: "Every adult beneficiary has attended a briefing and holds a one-page note on how to make a request to the trustee."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Agree with your partner which family members to invite"
                - "Write a one-page note on how a request to the trustee works"
                - "Invite the trustee to join for the question session"
                - "Send the note to everyone who attended"
            - name: Quarterly trustee report review
              description: |-
                ## Purpose
                Reports that arrive and go straight into a folder are not oversight. Setting aside an hour each quarter to read every trustee's pack, compare it with the last one and write down questions is where most problems, such as an unexplained transfer or a stale valuation, actually get caught.

                ## Milestones
                1. A fixed quarterly hour for reading trustee reports in the family calendar.
                2. Each pack checked against the previous quarter for asset changes and transactions.
                3. Questions sent to the trustee within a week of the review.
                4. Answers filed with the report they relate to.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Four quarterly reviews a year are completed, each with questions sent and answers filed within a month of the report."
                cadence: rolling
              tasks:
                - "Block an hour in the family calendar for the first review"
                - "Read every trustee report and note changes since last quarter @recurring(quarterly)"
                - "Send written questions to the trustee within a week of reading"
                - "File each answer with the report it relates to"
            - name: Annual trustee meeting with the family
              description: |-
                ## Purpose
                Meeting each trustee once a year, in person where possible, lets the family hear how decisions were made, raise concerns face to face and meet the people who will act if something happens to the settlor. Trustees also learn about family changes they would otherwise miss.

                ## Milestones
                1. A date agreed with each trustee at least two months ahead.
                2. An agenda covering performance, distributions, fees, family changes and the year ahead.
                3. The meeting held and minuted, with actions assigned to named people.
                4. Actions followed up before the next quarterly review.

                ## Notes
                Start from the **Meeting notes** template.
              priority: medium
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "Each trustee meets the family once a year, with minutes and a dated action list circulated within two weeks."
                cadence: cyclic
              tasks:
                - "Propose three dates to each trustee for this year's meeting"
                - "Send the agenda to the trustee a month before the meeting @recurring(yearly)"
                - "Circulate minutes and actions within two weeks"
                - "Check every action is closed by the next quarterly review"
            - name: Annual trust accounts review
              description: |-
                ## Purpose
                Trustees should prepare accounts for each trust every year, and reading them is the clearest check that assets, income, distributions and fees match what the quarterly reports said. Many families never ask for them, which leaves errors and unauthorised charges sitting unseen for years.

                ## Milestones
                1. Annual accounts for every trust requested and received.
                2. Opening and closing values reconciled with the quarterly reports.
                3. Distributions and fees in the accounts matched to the family's own records.
                4. Differences raised with the trustee and their answers filed.

                ## Notes
                Where the accounts are large or complex, ask the family's accountant to read them with you. They will spot a missing line faster than anyone.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Annual accounts for every trust are received, reconciled against reports and family records, and differences are answered in writing."
                cadence: cyclic
              tasks:
                - "Ask each trustee for the date their annual accounts are ready"
                - "Request and read each trust's annual accounts @recurring(yearly)"
                - "Match distributions and fees against the family's own records"
                - "Send the trustee a list of any differences found"
            - name: Letter of wishes yearly re-read
              description: |-
                ## Purpose
                Births, marriages, divorces, illness and a child's new business all change what the settlor would want, yet letters of wishes are usually written once and forgotten. A short yearly re-read, ideally just before the trustee meeting, keeps the guidance current without rewriting it every time.

                ## Milestones
                1. Each letter of wishes re-read against the past year's family changes.
                2. A decision recorded on whether each letter still reflects the settlor's views.
                3. Any updated letter signed, dated and lodged with the trustee.
                4. The trustee's acknowledgement of the latest letter filed.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every letter of wishes has a yearly dated note saying it was reviewed, and any new version is acknowledged by the trustee."
                cadence: cyclic
              tasks:
                - "List the family changes since the letter was last signed"
                - "Re-read each letter of wishes before the trustee meeting @recurring(yearly)"
                - "Note whether each letter still says what the settlor means"
                - "Lodge any updated letter and file the trustee's acknowledgement"
            - name: Distribution request log
              description: |-
                ## Purpose
                Requests to the trustee for school fees, a deposit on a home or a medical bill can sit unanswered for weeks, and beneficiaries soon feel ignored. A simple log of every request, its date, amount, purpose and outcome shows how long the trustee takes and gives the family facts rather than grievances.

                ## Milestones
                1. A log with date, beneficiary, amount, purpose, status and decision date set up.
                2. Every request from the past year added from emails and letters.
                3. Average response time per trustee worked out.
                4. Slow or unexplained refusals raised at the annual meeting.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every distribution request is logged with its decision date, and average response time per trustee is known."
                cadence: rolling
              tasks:
                - "Set up the request log with six columns"
                - "Add every request from the past year from emails and letters"
                - "Update the log with new requests and decisions @recurring(monthly:12)"
                - "Chase any request open longer than thirty days @recurring(monthly:26)"
            - name: Trustee resolutions and minutes file
              description: |-
                ## Purpose
                Every significant trustee decision should be recorded in a written resolution, and beneficiaries can usually ask to see at least some of them. Keeping copies in one family file means that when someone asks why a property was sold or a loan made, the reasoning is there.

                ## Milestones
                1. The trustee asked to send copies of resolutions affecting family assets.
                2. A file set up by trust and by year.
                3. Past resolutions for the last three years obtained where available.
                4. New resolutions filed each quarter with a one-line summary.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A file holds trustee resolutions for each trust for the past three years, updated every quarter with summaries."
                cadence: rolling
              tasks:
                - "Ask each trustee which resolutions they will share with the family"
                - "Set up the resolutions file by trust and year"
                - "File new resolutions with a one-line summary @recurring(quarterly)"
                - "Request missing resolutions for the last three years"
            - name: Trustee invoice check against the fee schedule
              description: |-
                ## Purpose
                Time-cost charging means a trustee can bill for every email and phone call, and invoices often arrive as a single figure deducted straight from the trust. Checking each quarter's invoices against the agreed schedule catches overcharging and double billing while it is still small.

                ## Milestones
                1. The agreed fee schedule for each trustee kept beside the invoice file.
                2. Each quarter's invoices or deductions checked line by line.
                3. Charges outside the schedule queried in writing.
                4. Refunds or credits recorded and confirmed on the next statement.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every quarter's trustee invoices are checked against the schedule, with queries and any credits recorded."
                cadence: rolling
              tasks:
                - "Put each trustee's fee schedule beside its invoice file"
                - "Check this quarter's invoices against the schedule @recurring(quarterly)"
                - "Query any charge not covered by the schedule in writing"
                - "Confirm credits appear on the next statement"
            - name: Telling trustees about family life events
              description: |-
                ## Purpose
                Trustees cannot consider a beneficiary they do not know exists, and they need to hear about births, deaths, marriages, divorces, moves abroad and serious illness to act well. A standing habit of sending a short written update after any such event closes a gap that causes real harm at distribution time.

                ## Milestones
                1. A list of events that should always be reported to the trustees agreed.
                2. A short template note for reporting an event drafted.
                3. Past events not yet reported sent to each trustee.
                4. A yearly check that each trustee's beneficiary list matches the family.

                ## Notes
                A move to another country can change tax and reporting for the trust. Tell the trustee before the move, not after.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Each trustee's beneficiary list matches the family tree at the yearly check, with every life event reported in writing."
                cadence: rolling
              tasks:
                - "Write the list of events that must be reported to trustees"
                - "Draft a short template note for reporting an event"
                - "Send each trustee any event from the past two years not yet reported"
                - "Compare each trustee's beneficiary list with the family tree @recurring(yearly)"
            - name: Annual trustee performance scorecard
              description: |-
                ## Purpose
                Without a written measure, a family's view of its trustee rests on the last phone call. Scoring each trustee once a year on responsiveness, accuracy of reporting, quality of decisions, cost and continuity of staff gives a record that shows drift over time and supports a fair conversation about change.

                ## Milestones
                1. Five or six scoring criteria agreed by the family.
                2. Evidence for each criterion drawn from the request log, invoices and reports.
                3. A score and short comment recorded for each trustee.
                4. Results shared with the trustee at the annual meeting.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Each trustee has a dated yearly score against the same criteria, shared with them at the annual meeting."
                cadence: cyclic
              tasks:
                - "Agree five scoring criteria with the family"
                - "Pull evidence from the request log, invoices and reports"
                - "Score each trustee and write a short comment @recurring(yearly)"
                - "Share the scorecard with the trustee at the annual meeting"
            - name: Watching for changes at the trust company
              description: |-
                ## Purpose
                Trust companies are bought, merged and restructured often, and the relationship manager who knew the family can leave without notice. Checking each quarter for staff departures, ownership news and regulatory action means the family hears about a change from its own watch rather than from a letter announcing new terms.

                ## Milestones
                1. The names of the key people at each trust company recorded.
                2. Each trust company's regulator and its public enforcement register noted.
                3. A quarterly check of staff, ownership news and regulatory notices carried out.
                4. Any significant change raised with the trustee in writing.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A quarterly note records staff, ownership and regulatory changes at each trust company, with significant ones raised in writing."
                cadence: rolling
              tasks:
                - "Record the key people at each trust company"
                - "Find each trustee's regulator and its public enforcement register"
                - "Check staff, ownership and regulatory news for each trustee @recurring(quarterly)"
                - "Write to the trustee about any significant change"
            - name: Protector consents and decisions log
              description: |-
                ## Purpose
                Protectors who approve trustee decisions need a clear record of what they consented to, when, and on what information, because they may later have to explain it to a beneficiary or a court. Keeping a log for each protector makes the role easier to hand on and harder to challenge.

                ## Milestones
                1. Every consent or refusal by the protector in the past three years gathered.
                2. A log with the date, the decision, the information seen and the reasons.
                3. A protocol agreed with the trustee for how consent requests arrive.
                4. The log updated each quarter and shared with the trust lawyer when needed.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Each protector holds a log of consents and refusals with dates and reasons, updated every quarter."
                cadence: rolling
              tasks:
                - "Gather the protector's consents and refusals from the past three years"
                - "Set up a log with date, decision, information seen and reasons"
                - "Agree with the trustee how consent requests will be sent"
                - "Bring the protector log up to date @recurring(quarterly)"
            - name: Trustee duties primer for the family
              description: |-
                ## Purpose
                Family members who understand that trustees owe duties of loyalty, prudence, impartiality between beneficiaries and keeping proper accounts ask better questions and make fewer unfair accusations. A short study of trustee duties in general terms, then checked against the governing law of the family's trusts with the lawyer, builds that understanding.

                ## Milestones
                1. A reading list of two or three plain-language guides on trustee duties.
                2. A one-page summary of the main duties written in the family's own words.
                3. Questions on how the governing law changes those duties answered by the lawyer.
                4. The summary shared with adult beneficiaries.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A one-page summary of trustee duties, checked by the trust lawyer for the governing law, is shared with adult beneficiaries."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Find two plain-language guides on trustee duties"
                - "Write the main duties in the family's own words"
                - "Ask the lawyer how the governing law changes those duties"
                - "Share the checked summary with the adult beneficiaries"
            - name: Reading trustee financial statements
              description: |-
                ## Purpose
                Trust accounts mix capital and income, show distributions and fees in different places, and often value private holdings at cost for years. Learning to read them, with a worked example from one of the family's own trusts, means the yearly accounts review is a real check rather than a glance at the closing figure.

                ## Milestones
                1. The difference between capital and income accounts understood and written down.
                2. One trust's accounts worked through line by line with the accountant.
                3. Where fees, distributions and valuations appear in the statements noted.
                4. A short checklist for reading future accounts written.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A personal checklist for reading trust accounts exists, tested on one of the family's trusts with the accountant."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Pick one trust's latest accounts as the worked example"
                - "Book an hour with the family accountant to walk through them"
                - "Note where fees, distributions and valuations appear"
                - "Write a ten-point checklist for future accounts"
            - name: How discretionary trustees weigh requests
              description: |-
                ## Purpose
                In a discretionary trust no beneficiary has a right to a payment, and trustees must weigh the request, the letter of wishes, the other beneficiaries and the trust's long life. Understanding that reasoning helps the family frame requests well and accept a refusal without assuming bad faith.

                ## Milestones
                1. The factors trustees generally weigh on a request listed.
                2. Two past requests to the family's trustee reviewed against those factors.
                3. A short guide on how to make a well-prepared request written.
                4. The guide checked by the trustee for anything they would add.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A request guide reflecting how the trustee weighs requests exists and the trustee has reviewed it."
                cadence: phased
                effort_hours_estimate: "5"
              tasks:
                - "List the factors a trustee weighs when asked for money"
                - "Review two past requests against those factors"
                - "Write a one-page guide to making a well-prepared request"
                - "Ask the trustee to comment on the guide"
            - name: Beneficiary information rights
              description: |-
                ## Purpose
                What a beneficiary may see, from the deed to the accounts to the trustees' reasons, depends on the governing law, the deed and the kind of interest they hold, and it varies a great deal between jurisdictions. Knowing the position for each trust lets the family ask for what it is entitled to and stop asking for what it is not.

                ## Milestones
                1. The general categories of trust information listed.
                2. The lawyer's view obtained on which beneficiaries may see what, for each trust.
                3. Any clauses in the deeds restricting information noted.
                4. A short summary given to each adult beneficiary.

                ## Notes
                Some deeds and some jurisdictions allow the settlor to restrict information to younger beneficiaries. Ask the lawyer before assuming either way.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Each trust has a lawyer-checked note saying which beneficiaries may see which information, shared with adult beneficiaries."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "List the kinds of information a trust holds"
                - "Ask the lawyer who may see what under each trust"
                - "Note any deed clause restricting information"
                - "Give each adult beneficiary a short summary"
            - name: Protector powers and their limits
              description: |-
                ## Purpose
                Someone asked to serve as protector needs to know whether their powers are personal or held in a fiduciary capacity, what they can veto, and when they must act. Learning this before accepting the role avoids both rubber-stamping and overreach.

                ## Milestones
                1. The protector clauses in the relevant deed read and summarised.
                2. The question of whether the powers are fiduciary put to the lawyer.
                3. The protector's likely decisions over a typical year listed.
                4. A personal note of what the protector will and will not do written.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "The protector holds a written summary of their powers, the lawyer's view on whether they are fiduciary, and a personal role note."
                cadence: phased
                effort_hours_estimate: "5"
              tasks:
                - "Summarise the protector clauses from the deed"
                - "Ask the lawyer whether the powers are fiduciary or personal"
                - "List the decisions the protector may face in a year"
                - "Write a short note on how you will carry out the role"
            - name: Conflicts of interest in trusteeship
              description: |-
                ## Purpose
                Conflicts arise quietly: a family trustee who is also a beneficiary, a trustee placing assets with its own group's funds, or a protector who is the settlor's business partner. Learning to spot and record these, and asking each trustee for their conflicts policy, protects decisions from later challenge.

                ## Milestones
                1. Common trustee conflicts listed with examples.
                2. Each trust checked for conflicts among its role holders.
                3. Each professional trustee's conflicts policy obtained and read.
                4. Identified conflicts recorded with how they are managed.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Every trust has a written note of known conflicts among its role holders and how each is managed."
                cadence: phased
                effort_hours_estimate: "5"
              tasks:
                - "List the common trustee conflicts with an example of each"
                - "Check every trust's role holders for conflicts"
                - "Request each professional trustee's conflicts policy"
                - "Record each conflict found and how it is managed"
            - name: Training a family co-trustee
              description: |-
                ## Purpose
                Appointing a son, daughter or niece as co-trustee only works if they learn the duties, the paperwork and how to disagree with a professional trustee politely. A one-year development plan, with a mentor and real decisions observed before they vote, prepares them properly.

                ## Milestones
                1. A development plan with goals for duties, accounts, decisions and conduct.
                2. A mentor agreed, such as a retired trustee or the family's lawyer.
                3. Monthly sessions held for a year, with decisions observed before they take part.
                4. A review at twelve months on readiness to act fully.

                ## Notes
                Start from the **Development plan** template.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "The family co-trustee completes a twelve-month plan with a mentor and a recorded readiness review."
                cadence: phased
                effort_hours_estimate: "30"
              tasks:
                - "Agree with the candidate what the role involves"
                - "Ask a mentor to support the candidate for a year"
                - "Hold a mentoring session on a real decision @recurring(monthly:8)"
                - "Review readiness with the mentor at twelve months"
            - name: Trustee proposal process with three trust companies
              description: |-
                ## Purpose
                When a trustee needs replacing or a new trust needs one, asking three licensed trust companies to propose against the same brief gives a fair comparison of service, people, fees and stability. Without it, families tend to take whichever name their banker suggests.

                ## Milestones
                1. A written brief covering the trust, its assets, beneficiaries, reporting needs and timetable.
                2. Three trust companies invited and each proposal received.
                3. Proposals scored on people, regulation, insurance, fees and fit with the family.
                4. Two finalists met in person and a preferred trustee chosen.

                ## Notes
                Start from the **Vendor** template. Ask who would actually work on the trust day to day, not who presents the pitch.
              priority: high
              deadlineOffsetDays: 120
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "Three proposals are scored against one brief and a preferred trustee is chosen with the reasons recorded."
                cadence: phased
                effort_hours_estimate: "20"
              tasks:
                - "Write a two-page brief describing the trust and what you need"
                - "Invite three licensed trust companies to propose"
                - "Score each proposal on the same five criteria"
                - "Meet the two finalists and the people who would serve you"
            - name: Due diligence file on a shortlisted trustee
              description: |-
                ## Purpose
                Before handing a trust to a new provider, the family should confirm the licence, the regulator's record, the insurance, the ownership, the financial strength and the people. A due diligence file, kept for the life of the appointment, also shows later that the choice was made with care.

                ## Milestones
                1. The trustee's licence confirmed on the regulator's public register.
                2. Professional indemnity insurance, ownership and latest financial statements obtained.
                3. References from two current clients of similar size taken.
                4. Any adverse findings reviewed and the file signed off by the family.
              priority: high
              deadlineOffsetDays: 90
              frontmatter:
                mode: research
                output_kind: artifact
                success_criteria: "A signed-off due diligence file covers licence, insurance, ownership, finances and two references for the chosen trustee."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Check the licence on the regulator's public register"
                - "Request insurance, ownership and financial statement details"
                - "Take references from two clients of similar size"
                - "Sign off the file once adverse findings are resolved"
            - name: Negotiating the trustee fee schedule
              description: |-
                ## Purpose
                Trustee fees are more negotiable than most families think, especially at appointment, at a review or when consolidating several trusts. Going in with the baseline, competing quotes and a clear view of the services wanted can produce a fixed fee or a cap that holds for years.

                ## Milestones
                1. The family's preferred fee structure decided, such as fixed annual fee with capped time costs.
                2. Current fees compared with competing proposals.
                3. A revised schedule agreed in writing.
                4. The new schedule filed and used for the quarterly invoice check.
              priority: medium
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "A revised fee schedule is agreed in writing and the next quarter's invoices are checked against it."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Decide the fee structure the family would prefer"
                - "Compare current fees with any competing proposals"
                - "Propose the revised schedule to the trustee in writing"
                - "File the agreed schedule beside the invoice file"
            - name: Exoneration and indemnity clause review
              description: |-
                ## Purpose
                Many deeds and terms of business excuse trustees from liability for anything short of fraud or gross negligence, which can leave beneficiaries with little remedy. Asking the lawyer to review these clauses, especially at a change of trustee, shows how much protection the family really has and whether it can be improved.

                ## Milestones
                1. Every exoneration and indemnity clause in the deeds and terms listed.
                2. The lawyer's view on what each clause excuses obtained.
                3. Changes to seek identified for any new appointment.
                4. The outcome of any negotiation recorded.
              priority: medium
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A lawyer's note explains each exoneration and indemnity clause, with the changes sought and their outcome recorded."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "List every exoneration and indemnity clause you can find"
                - "Ask the lawyer to explain what each clause excuses"
                - "Decide which changes to seek at the next appointment"
                - "Record what the trustee agreed to change"
            - name: Adding an independent co-trustee
              description: |-
                ## Purpose
                Where a family member is sole trustee, an independent co-trustee can bring professional discipline, a second view and continuity if the family trustee dies or falls out with siblings. The appointment needs care, because two trustees who cannot agree can freeze a trust.

                ## Milestones
                1. The case for a co-trustee written, including how decisions will be made between them.
                2. The deed checked for the power to add a trustee and any consents needed.
                3. A candidate chosen through a proper proposal process.
                4. The appointment deed signed and the co-trustee briefed on the family.
              priority: medium
              deadlineOffsetDays: 180
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "An independent co-trustee is appointed by signed deed and has received a written family briefing."
                cadence: phased
                effort_hours_estimate: "12"
              tasks:
                - "Write the case for adding a co-trustee in one page"
                - "Ask the lawyer whether the deed allows the addition"
                - "Agree how the two trustees will settle disagreements"
                - "Brief the new co-trustee on the family in writing"
            - name: Successor trustee and appointor chain
              description: |-
                ## Purpose
                If the person holding the power to appoint trustees dies or loses capacity, a family can find nobody able to replace a failing trustee. Mapping who holds that power in each trust, and naming successors where the deed allows, keeps the chain unbroken.

                ## Milestones
                1. The holder of the power to appoint and remove trustees confirmed for each trust.
                2. What happens on that person's death or incapacity checked with the lawyer.
                3. Successors named by deed where the trust allows it.
                4. The chain recorded on each trust's roles chart.
              priority: high
              deadlineOffsetDays: 90
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Every trust shows on its roles chart who appoints trustees and who succeeds them, confirmed by the lawyer."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Confirm who holds the appointment power in each trust"
                - "Ask the lawyer what happens if that person dies or loses capacity"
                - "Name successors by deed where the trust allows"
                - "Check the successor chain still works @recurring(yearly)"
            - name: Consolidating trustee providers
              description: |-
                ## Purpose
                Six trusts with four trustees means four sets of fees, reports and relationship managers, and a weaker voice with each. Moving to one or two trustees can cut cost and make oversight easier, but brings concentration risk and transfer costs that need weighing first.

                ## Milestones
                1. The current spread of trusts across trustees and the cost of each set out.
                2. Benefits and risks of consolidation listed, including exit fees and tax effects.
                3. Advice taken on any tax or legal consequences of moving trusts.
                4. A decision recorded to consolidate, partly consolidate or stay as is.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A recorded decision on consolidating trustee providers, with costs, risks and advice set out."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Set out which trusts sit with which trustee and their costs"
                - "Add up exit fees from the engagement terms table"
                - "Ask advisers about tax effects of moving each trust"
                - "Record the consolidation decision and its reasons"
            - name: Splitting investment and administrative trustee roles
              description: |-
                ## Purpose
                Some families want a trust company to handle administration while an investment adviser or committee directs the portfolio, which the deed and governing law may or may not allow. Working out whether a split suits the family, and what duties then sit where, avoids a gap where nobody is responsible.

                ## Milestones
                1. The deed and governing law checked by the lawyer for powers to split or direct roles.
                2. The responsibilities of each party under a split written out.
                3. The trustee's view and any extra fees obtained.
                4. A decision recorded on whether to split, with the documents needed listed.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A recorded decision on splitting trustee roles, with the duties of each party written out and the lawyer's view filed."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Ask the lawyer whether the deed allows a split of roles"
                - "Write who would be responsible for what under a split"
                - "Ask the trustee for its view and any change in fees"
                - "Record the decision and list the documents needed"
            - name: Planned retirement and appointment of a trustee
              description: |-
                ## Purpose
                Replacing a trustee is a formal step: a deed of retirement and appointment, transfer of every asset into the new trustee's name, and often an indemnity the outgoing trustee will ask for. Planning it as a project with a timetable stops assets sitting in limbo and the old trustee holding back funds for months.

                ## Milestones
                1. The power to replace the trustee confirmed and the incoming trustee chosen.
                2. The deed of retirement and appointment drafted and agreed by both trustees.
                3. Any indemnity or retention requested by the outgoing trustee negotiated with the lawyer.
                4. Every asset re-registered into the new trustee's name and confirmed.

                ## Notes
                Outgoing trustees often ask to hold back money against future liabilities. Ask the lawyer what is reasonable before agreeing a figure.
              priority: high
              deadlineOffsetDays: 180
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "The deed of retirement and appointment is signed and every asset is confirmed as held by the new trustee."
                cadence: phased
                effort_hours_estimate: "25"
              tasks:
                - "Confirm with the lawyer who has the power to make the change"
                - "Agree a timetable with both trustees in writing"
                - "Negotiate any retention or indemnity with the lawyer"
                - "Check each asset has been re-registered to the new trustee"
                - "Tell banks, managers and beneficiaries about the change"
            - name: Records handover to an incoming trustee
              description: |-
                ## Purpose
                Any new trustee is only as good as the records it inherits: deeds, letters of wishes, past resolutions, accounts, tax filings and beneficiary details. A handover checklist, agreed before the change, stops documents being lost between offices or held back over unpaid fees.

                ## Milestones
                1. A list of every record the incoming trustee needs agreed by both trustees.
                2. Records transferred and the incoming trustee's receipt obtained.
                3. Missing records identified and chased.
                4. The family's own copies checked against what was transferred.
              priority: medium
              deadlineOffsetDays: 120
              frontmatter:
                mode: event
                output_kind: deliverable
                success_criteria: "The incoming trustee confirms in writing that every record on the agreed handover list has been received."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Draft the handover list with the incoming trustee"
                - "Send the list to the outgoing trustee with a date"
                - "Chase every record not received by that date"
                - "Compare the family's own copies with what was transferred"
            - name: Responding to a change of ownership at the trust company
              description: |-
                ## Purpose
                When a trust company is sold, the family often receives a short letter promising nothing will change, followed months later by new terms, new staff and new fees. Treating the sale as a trigger for a structured review lets the family decide whether to stay on its own terms.

                ## Milestones
                1. The new owner, its regulator and its plans for the business researched.
                2. Written assurances on staff, terms and fees requested from the trustee.
                3. The scorecard and fee baseline compared with what the new owner offers.
                4. A decision recorded to stay, renegotiate or begin a proposal process.
              priority: medium
              frontmatter:
                mode: event
                output_kind: decision
                success_criteria: "Within six months of a sale, the family records a decision to stay, renegotiate or move, based on written assurances."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Research the new owner and its regulator"
                - "Ask the trustee for written assurances on staff, terms and fees"
                - "Compare the assurances with the scorecard and fee baseline"
                - "Record whether to stay, renegotiate or move"
            - name: Trustee meeting when a beneficiary reaches a set age
              description: |-
                ## Purpose
                Many trusts give a beneficiary new rights or let trustees consider larger distributions at 18, 21, 25 or 30, and the first conversation with the trustee shapes how that person sees the trust for life. Preparing the meeting with the parents and the trustee makes it a welcome rather than a surprise.

                ## Milestones
                1. The ages in each deed that change a beneficiary's position listed.
                2. The young person briefed by a parent on the trust before meeting the trustee.
                3. A meeting held where the trustee explains the trust and how requests work.
                4. Follow-up questions answered in writing.
              priority: medium
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "Each beneficiary reaching a set age has met the trustee and received written answers to their questions."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "List the ages in each deed that change a beneficiary's position"
                - "Talk the young person through the trust before the meeting"
                - "Arrange the meeting with the trustee"
                - "Send the trustee's written answers to the young person"
            - name: Trustee actions after the settlor's death
              description: |-
                ## Purpose
                When the settlor dies, trustees may need death certificates, updated beneficiary details, tax filings and decisions on assets the settlor used to direct, while the family is grieving. Agreeing now with each trustee what will happen in the first ninety days, and writing it down, spares the family a scramble.

                ## Milestones
                1. Each trustee asked what they will need and do after the settlor's death.
                2. A ninety-day checklist written for each trust.
                3. The family member who will be the trustee's first contact named.
                4. The checklist filed with the will and the family's emergency papers.

                ## Notes
                Some trusts change character on the settlor's death, for example a power the settlor reserved may lapse. Ask the lawyer what changes in each trust.
              priority: high
              deadlineOffsetDays: 120
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A ninety-day checklist per trust, agreed with the trustee, is filed with the will and names the family's first contact."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Ask each trustee what they will need after the settlor's death"
                - "Ask the lawyer what changes in each trust on that death"
                - "Write a ninety-day checklist for each trust"
                - "File the checklists with the will and emergency papers"
            - name: Replacing a protector on death or incapacity
              description: |-
                ## Purpose
                Protectors are often old friends of the settlor, and when they die or decline, the deed may leave the role empty or name an unsuitable successor. Planning the replacement before it is urgent keeps the safeguard in place and avoids a trustee acting unchecked.

                ## Milestones
                1. The deed's rules for replacing a protector confirmed for each trust.
                2. A successor candidate agreed and willing to serve.
                3. The appointment documents prepared by the lawyer in advance where allowed.
                4. The trustee told who the successor will be.
              priority: low
              frontmatter:
                mode: event
                output_kind: decision
                success_criteria: "Each trust with a protector has an agreed, willing successor and prepared appointment papers where the deed allows."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Check each deed's rules for replacing the protector"
                - "Ask a suitable successor whether they would serve"
                - "Ask the lawyer to prepare appointment papers in advance"
                - "Tell the trustee who the successor will be"
            - name: Choosing trustees for a trust for young children
              description: |-
                ## Purpose
                Parents setting up a trust for children under ten are choosing people who may act for twenty years or more, through school, university, first homes and perhaps the parents' deaths. Thinking about guardians and trustees together, and avoiding putting both roles in one pair of hands without a check, protects the children.

                ## Milestones
                1. The likely life of the trust and the decisions trustees will face written down.
                2. The link between guardians named in wills and the trustees considered.
                3. Trustees chosen, with a professional or independent check alongside family.
                4. The choice and a letter of wishes for the children lodged with the lawyer.

                ## Notes
                Many advisers suggest the guardian and the trustee are different people, so the person raising the children is not also the sole holder of their money.
              priority: medium
              deadlineOffsetDays: 90
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "Trustees for the children's trust are chosen with an independent check, and the choice and letter of wishes are lodged."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "List the decisions trustees will face as the children grow"
                - "Compare your chosen guardians with your possible trustees"
                - "Choose trustees with an independent check beside family"
                - "Review the trustee choice as the children grow @recurring(yearly)"
            - name: Retiree stepping back from serving as trustee
              description: |-
                ## Purpose
                Retired settlors who have acted as their own trustee or co-trustee may want to hand on before age or health forces it, while still being consulted. A staged step back, with a successor in place and a clear role as adviser, keeps the trust running and avoids a rushed change after a fall or diagnosis.

                ## Milestones
                1. The point at which you want to step back agreed with your family.
                2. A successor trustee chosen and willing.
                3. A transition year in which you and the successor act together, if the deed allows.
                4. The retirement deed signed and your ongoing role as adviser written down.
              priority: medium
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A successor trustee is appointed by signed deed and the retiree's continuing advisory role is set out in writing."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "Decide when you want to step back and tell the family"
                - "Ask your chosen successor whether they will serve"
                - "Plan a transition year of acting together with the lawyer"
                - "Write down how you will be consulted after stepping back"
            - name: Preparing adult children to deal with the trustee
              description: |-
                ## Purpose
                Adult beneficiaries who learn to write a clear request, read a trustee report and ask a polite but firm question become the family's oversight when the parents are gone. A few guided sessions, using real reports, prepare them for that role.

                ## Milestones
                1. Each adult child given copies of the reports they are entitled to see.
                2. A session held reading one trustee report together.
                3. Each child making one practice request or question to the trustee.
                4. A yearly check-in agreed to see how they find dealing with the trustee.
              priority: medium
              frontmatter:
                mode: service
                output_kind: knowledge
                success_criteria: "Each adult child has read a trustee report with a parent and sent at least one request or question to the trustee."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Check with the lawyer which reports each child may see"
                - "Read one trustee report together and explain each section"
                - "Help each child send one question to the trustee"
                - "Hold a check-in on how they find the trustee @recurring(yearly)"
            - name: Settlor incapacity plan for the trustees
              description: |-
                ## Purpose
                If the settlor loses capacity, trustees will need to know who can speak for them, whether any reserved powers lapse, and how to treat requests for care costs. Setting this out now, alongside powers of attorney, keeps the trust and the settlor's care working together.

                ## Milestones
                1. The settlor's powers of attorney and their scope confirmed.
                2. The lawyer's view on what happens to reserved powers on incapacity obtained.
                3. Each trustee given the attorneys' details and told how to verify them.
                4. A note on funding care costs added to the letter of wishes.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Each trustee holds the attorneys' details and a note on care funding, and the lawyer's view on reserved powers is filed."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Confirm the scope of the settlor's powers of attorney"
                - "Ask the lawyer what happens to reserved powers on incapacity"
                - "Send each trustee the attorneys' details and how to verify them"
                - "Re-confirm the attorney details with each trustee @recurring(yearly)"
            - name: Trustee briefing for a beneficiary with additional needs
              description: |-
                ## Purpose
                Trustees caring for a beneficiary with a disability or long-term illness need to understand daily needs, care providers, state benefits that payments might affect and what the parents hope for after they are gone. A written briefing, updated each year, lets the trustee act well without relearning the person's life at every request.

                ## Milestones
                1. A memo covering needs, routines, carers, medical contacts and future hopes written.
                2. Advice taken on how trust payments could affect any benefits.
                3. The memo shared with the trustee and discussed in a meeting.
                4. A yearly update of the memo agreed.

                ## Notes
                Keep medical detail to what the trustee needs to act. Share it securely and ask the trustee how they store it.
              priority: medium
              frontmatter:
                mode: service
                output_kind: artifact
                success_criteria: "The trustee holds a current needs memo, discussed in a meeting, and advice on benefits effects is on file."
                cadence: rolling
              tasks:
                - "Write a memo on needs, routines, carers and future hopes"
                - "Ask an adviser how trust payments could affect benefits"
                - "Meet the trustee to talk through the memo"
                - "Update the needs memo and send it to the trustee @recurring(yearly)"
            - name: Trustee neutrality in a blended family
              description: |-
                ## Purpose
                Where there are children from more than one marriage, a trustee who is a sibling or a new spouse can look partial even when acting fairly. Choosing a trustee everyone can accept, and recording the settlor's intentions for each branch, lowers the risk of a long dispute later.

                ## Milestones
                1. Each branch's interest under the trusts mapped.
                2. Current trustees assessed for perceived partiality.
                3. An independent trustee or co-trustee appointed where perception is a risk.
                4. The settlor's intentions for each branch written in the letter of wishes.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A recorded decision on trustee neutrality for each trust, with the settlor's intentions for each branch in the letter of wishes."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Map each branch's interest under each trust"
                - "Note where a trustee could look partial to any branch"
                - "Decide with the lawyer whether an independent trustee is needed"
                - "Add your intentions for each branch to the letter of wishes"
            - name: Escalating a dispute with a trustee
              description: |-
                ## Purpose
                Disputes with a trustee, over refused information, ignored requests or a decision the family thinks is wrong, have a ladder running from a polite letter to the trustee's complaints process, the regulator and, at the end, an application to court. Knowing the steps and keeping a clear record makes each one more likely to work without reaching the last.

                ## Milestones
                1. The issue, the dates and the trustee's responses written up as a timeline.
                2. A formal written complaint made under the trustee's complaints procedure.
                3. The lawyer's advice on options, costs and likely outcomes obtained.
                4. A decision taken on whether to escalate to the regulator, mediation or court.

                ## Notes
                Court applications over trusts are slow and costly and often paid from the trust itself. Mediation is usually worth trying first.
              priority: high
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A written timeline, formal complaint and lawyer's advice are on file, with a recorded decision on the next step."
                cadence: phased
                effort_hours_estimate: "15"
              tasks:
                - "Write a dated timeline of the issue and every response"
                - "Ask the agent to draft a calm formal complaint from the timeline"
                - "Send the complaint under the trustee's complaints procedure"
                - "Ask the lawyer for options, costs and likely outcomes"
            - name: Removing a trustee using the protector's power
              description: |-
                ## Purpose
                Removing a trustee against its will is different from a planned retirement: the protector or appointor must act strictly within the deed, often for proper reasons, and the trustee may resist handing over assets. Preparing the case, the documents and the successor before acting reduces the chance of challenge.

                ## Milestones
                1. The power of removal and any conditions on its use confirmed by the lawyer.
                2. The reasons for removal recorded with supporting evidence.
                3. A successor trustee chosen and ready to accept.
                4. The removal and appointment executed and assets transferred.

                ## Notes
                Using a removal power for the wrong reasons can be challenged. Take advice on whether the reasons are proper before signing anything.
              priority: medium
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "The removal and appointment deeds are executed within the deed's powers and every asset is confirmed with the successor."
                cadence: phased
                effort_hours_estimate: "20"
              tasks:
                - "Ask the lawyer to confirm the removal power and its conditions"
                - "Record the reasons for removal with supporting evidence"
                - "Secure a successor trustee before serving notice"
                - "Confirm every asset has moved to the successor trustee"
---

# Trustee Selection and Oversight

This area is for the settlor, the parent planning for children and the retiree whose wealth now sits in trust, and who wants the trustees to be well chosen and properly watched rather than simply trusted. It starts with foundations (a register of every trust, the deeds read, a roles chart, a letter of wishes and the choice between professional and family trustees), then the operating routine of reports, meetings, accounts, distributions and fees, the knowledge behind trustee duties and beneficiary rights, decisions on selecting, paying and adding trustees, the dated events of a handover or a settlor's death, situations for young children, retirement and blended families, and finally specialist work on disputes and removal.

What repeats is a quarterly read of trustee reports, invoices and protector decisions, a monthly distribution log, and a yearly cycle of the trustee meeting, the accounts, the letter of wishes and a performance scorecard. The Meeting notes, Development plan and Vendor templates pair with the annual trustee meeting, a family co-trustee's training and a trustee proposal process. None of this replaces advice: agree anything with legal or tax effect with the family's trust lawyer in each jurisdiction. Installing adds all 50 projects as active, so archive the ones that are not for you yet.
