---
id: private-equity-vc.fund-compliance-and-regulatory-filings
name: Fund Compliance and Regulatory Filings
description: "A working compliance programme for your own fund manager: registration or exemption settled with counsel, a filing calendar, investor AML and KYC, a conflicts register, a code of ethics and the yearly review that proves it all runs."
category: business
version: 1.0.0
tags: [private-equity-vc, fund-compliance-and-regulatory-filings, founder, emerging-manager, compliance, aml-kyc, regulatory-filings, conflicts]
author: Aurum Technology
starter_structure:
  templates:
    - compliance-control
    - risk-register
    - purchase-decision
    - vendor
    - remediation-plan
  pillars:
    - name: Private Equity & Venture Capital
      emoji: "💹"
      description: "Private markets from the investor's side: sourcing and screening deals, LBO models, investment committee memos, due diligence, value creation and exits, raising and running your own fund, search funds and independent sponsors, venture deal flow and board seats, and careers in both, for people building their own track record."
      pillarFrontmatter:
        review_cadence: monthly
      areas:
        - name: Fund Compliance and Regulatory Filings
          description: "Keeping a fund manager compliant: registration or exemption, regulatory filings, AML and KYC on investors, a conflicts policy and a compliance calendar."
          projects:
            - name: Regulatory status map for the management company
              description: |-
                ## Purpose
                Founders often discover a filing obligation only when an LP's due diligence questionnaire asks for the confirmation number. Mapping every place the firm and its funds touch (where the manager is based, where each fund vehicle is domiciled, where investors live, where you market) shows which regulators could have a claim on you before anyone else points it out.

                ## Milestones
                1. A one-page map of the manager, each fund vehicle, the GP entity and their jurisdictions.
                2. Every country or state where investors sit or where you plan to market listed beside the map.
                3. The regulator or registry that could apply in each place named, marked as confirmed or still to check.
                4. The map reviewed with fund counsel and their comments recorded on it.

                ## Notes
                Typical examples include a securities regulator for the adviser, a fund regulator where the vehicle is domiciled, and notice filings where investors are. Treat the map as a list of questions for counsel, not as a conclusion.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: research
                output_kind: artifact
                success_criteria: "A jurisdiction map covering the manager, every fund vehicle and investor locations exists, with counsel's comments recorded against each regulator."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Draw the entity chart: manager, GP, each fund and any feeder or SPV"
                - "List the countries and states where current and target investors live"
                - "Note the regulator or registry that may apply in each place"
                - "Send the map to fund counsel with your open questions"
            - name: Registration or exemption decision with fund counsel
              description: |-
                ## Purpose
                Whether the manager registers fully, relies on an exemption or files as an exempt reporting adviser decides almost everything else in this area, from the filings you owe to whether you need a written compliance programme by law. Getting the decision written down, with the facts it depends on, stops it being reopened in every LP meeting and tells you what would force a change.

                ## Milestones
                1. The facts counsel needs gathered: assets under management, fund types, investor types and locations.
                2. Counsel's advice on registration or exemption received in writing.
                3. The chosen status, and the thresholds or facts that would change it, recorded in one memo.
                4. Any initial registration or exemption filing submitted and its confirmation saved.

                ## Notes
                Assets under management for regulatory purposes are often calculated differently from the fund size in your deck, for example including uncalled commitments. Ask counsel how your regime measures it.
              priority: high
              deadlineOffsetDays: 45
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A written memo records the manager's regulatory status, the advice behind it and the triggers that would change it, with any filing confirmation attached."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Collect current and projected assets under management for each fund"
                - "Book a scoping call with fund counsel on registration and exemptions"
                - "Write a one-page status memo with the triggers that would change it"
                - "Save the filing confirmation in the regulatory records folder"
            - name: Appointing a chief compliance officer
              description: |-
                ## Purpose
                Both regulators and LPs expect one named person to own compliance, and at an emerging manager that person is often a founder who also runs investor relations or finance. Deciding who holds the role, how much time it gets, and what outside support backs them up turns compliance from everyone's afterthought into someone's job.

                ## Milestones
                1. The options compared: a founder as CCO, an internal hire, or an outsourced CCO service.
                2. A named CCO appointed in writing, with reporting lines and authority stated.
                3. Hours per month and an annual budget agreed for the role and any outside support.
                4. The appointment reflected in any regulatory filing that names the CCO.

                ## Notes
                If a founder takes the role, pair them with an outsourced compliance consultant for the first year. A CCO who also signs off their own deals has a conflict worth noting in the conflicts register.
              priority: high
              deadlineOffsetDays: 45
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A signed appointment letter names the CCO, states their authority and time budget, and matches the name on regulatory filings."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "List who could hold the CCO role and how many hours each could give"
                - "Request proposals from two outsourced compliance providers"
                - "Write and sign the CCO appointment letter"
                - "Update the CCO name on any filing that records it"
            - name: Twelve-month regulatory filing calendar
              description: |-
                ## Purpose
                Missed filings are the most common and most avoidable compliance failure at small managers, and the deadlines are scattered: annual amendments, periodic regulator reports, notice filings after each sale of interests, tax information returns and renewals. One calendar with every obligation, its owner and its lead time turns a dozen separate surprises into a list.

                ## Milestones
                1. Every recurring filing, renewal and report for the manager and each fund listed with its due date.
                2. Each item given an owner, a preparer and a reminder at least three weeks before the deadline.
                3. Filings triggered by events, such as a new close or a change of key staff, listed separately with their windows.
                4. The calendar checked by counsel or the compliance adviser for anything missing.

                ## Notes
                Examples include an annual adviser registration amendment, a periodic private fund report, a notice filing after the first sale of fund interests, and yearly FATCA and CRS returns. Confirm the list for your own structure.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A shared calendar lists every known filing for the next twelve months with an owner, a due date and a reminder, checked by the compliance adviser."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "List every filing and renewal named in counsel's advice and the fund documents"
                - "Add each one to a shared calendar with an owner and a reminder"
                - "Write a separate list of event-triggered filings and their windows"
                - "Ask the compliance adviser to check the calendar for gaps"
            - name: First edition of the compliance manual
              description: |-
                ## Purpose
                LPs will ask for the compliance manual in operational due diligence, and a regulator will compare what it says against what the firm actually does. A short manual written for your real size and strategy, rather than a 200-page off-the-shelf document nobody has read, is easier to follow and much safer to show.

                ## Milestones
                1. A table of contents agreed with the compliance adviser, covering only policies that apply to the firm.
                2. Each policy written with a named owner, the control it relies on and the evidence it leaves.
                3. Every partner and employee has read the manual and signed an acknowledgement.
                4. A version number, an effective date and a review date on the cover page.

                ## Notes
                Start from the **Compliance control** template for each policy. Delete any policy section you cannot actually operate: a written promise you do not keep is worse than none.
              priority: high
              deadlineOffsetDays: 90
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A versioned compliance manual with an owner and evidence for each policy is in force, with signed acknowledgements from every member of staff."
                cadence: phased
                effort_hours_estimate: "30"
              tasks:
                - "Agree the manual's table of contents with the compliance adviser"
                - "Ask the agent to draft a first pass of each policy from the agreed outline"
                - "Name an owner and the evidence for every policy"
                - "Collect a signed acknowledgement from each person at the firm"
            - name: Code of ethics and personal trading rules
              description: |-
                ## Purpose
                Partners in a fund manager hear things about listed companies through board seats, lenders and deal processes, and their own brokerage accounts are the first place a regulator looks for misuse. A code of ethics with pre-clearance, holdings reports and a restricted list protects the firm and the people in it.

                ## Milestones
                1. A code of ethics adopted covering personal trading, outside activities, gifts and confidentiality.
                2. Every covered person's brokerage accounts listed, including those of household members where required.
                3. A pre-clearance process running for trades in anything on the restricted list.
                4. Initial holdings reports collected from every covered person.

                ## Notes
                Ask counsel who counts as a covered person in your regime. Family members' accounts are a frequent gap.
              priority: high
              deadlineOffsetDays: 60
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A code of ethics is adopted, every covered account is listed, and initial holdings reports are on file for all covered persons."
                cadence: one-shot
                effort_hours_estimate: "10"
              tasks:
                - "Ask counsel which people and accounts the code must cover"
                - "Adopt the code of ethics with pre-clearance and holdings rules"
                - "Collect a list of brokerage accounts from every covered person"
                - "File initial holdings reports for each covered person"
            - name: Investor AML and KYC onboarding procedure
              description: |-
                ## Purpose
                Accepting a commitment before checking who the money belongs to can expose the fund to sanctions breaches and money laundering charges, and LPs now expect the manager to show its procedure, not just say the administrator handles it. A written procedure sets out what you collect from individuals, companies, trusts and funds of funds, who checks it and when a commitment can be accepted.

                ## Milestones
                1. Document lists written for each investor type: individuals, companies, trusts, pension plans and fund investors.
                2. Risk ratings defined, with enhanced checks for politically exposed persons and higher-risk countries.
                3. The split of duties between the manager, the administrator and the fund's AML officer written down.
                4. A rule that no capital is accepted before KYC is signed off, with the sign-off recorded.

                ## Notes
                Beneficial owners behind companies and trusts are where most files fall short. Ask the administrator for their standard document list and build from it.
              priority: high
              deadlineOffsetDays: 45
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A written AML and KYC procedure with document lists per investor type, risk ratings and a sign-off rule is approved by the CCO."
                cadence: one-shot
                effort_hours_estimate: "10"
              tasks:
                - "Request the administrator's standard KYC document list"
                - "Write document requirements for each investor type"
                - "Define what triggers enhanced checks and who approves them"
                - "Record the rule that no capital is accepted before KYC sign-off"
            - name: Conflicts of interest policy and register
              description: |-
                ## Purpose
                Fund managers are full of conflicts: fees charged to portfolio companies, deals shared between funds, partners' outside board seats, service providers who are also investors. Regulators rarely object to a conflict that was identified, disclosed and handled; they object to the ones nobody wrote down.

                ## Milestones
                1. A conflicts policy adopted saying how conflicts are identified, recorded, disclosed and resolved.
                2. A register listing every known conflict with the mitigation and where it is disclosed.
                3. Each conflict checked against the LPA and offering documents for a matching disclosure.
                4. Conflicts that need LPAC or investor consent flagged for action.

                ## Notes
                Keep the register in the **Risk register** template so likelihood and mitigation sit beside each entry.
              priority: high
              deadlineOffsetDays: 60
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A conflicts policy is adopted and a register lists each known conflict with its mitigation and disclosure reference."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "List every fee, relationship and shared deal that could be a conflict"
                - "Adopt a conflicts policy with an approval route"
                - "Record each conflict in the register with its mitigation"
                - "Check each entry against the fund documents for a disclosure"
            - name: Books and records retention set-up
              description: |-
                ## Purpose
                Regulators can ask for years of records at short notice, and fund managers keep them in a mess of shared drives, inboxes and the administrator's portal. Deciding what you keep, where and for how long, before the first examination, is far cheaper than rebuilding a missing trail afterwards.

                ## Milestones
                1. A list of required record types with the retention period counsel confirmed for each.
                2. One storage location named for each record type, with access controls set.
                3. Email and approved messaging archived automatically for every member of staff.
                4. A test retrieval of three old records completed within one working day.
              priority: medium
              deadlineOffsetDays: 60
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A records schedule names every required record type, its retention period and storage location, and a test retrieval succeeded within one day."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Ask counsel for the record types and retention periods that apply"
                - "Name one storage location for each record type"
                - "Switch on email archiving for every account at the firm"
                - "Run a yearly test retrieval of three old records @recurring(yearly)"
            - name: Regulatory capital and insurance check
              description: |-
                ## Purpose
                Some regimes require a manager to hold minimum capital or professional indemnity cover, and many LPs expect directors and officers and errors and omissions insurance whatever the law says. Checking both before the first close avoids the uncomfortable discovery that the policy excludes regulatory investigations.

                ## Milestones
                1. Counsel's confirmation of any capital or insurance requirement in each jurisdiction.
                2. Quotes for management liability, errors and omissions and cyber cover compared.
                3. A policy bound, with regulatory investigation costs covered or the gap noted.
                4. Renewal dates added to the compliance calendar.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "Any capital requirement is confirmed and met, and an insurance policy is bound with its regulatory coverage and renewal date recorded."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Ask counsel whether any minimum capital or cover is required"
                - "Request quotes from two brokers who place fund manager insurance"
                - "Check each quote for regulatory investigation cover"
                - "Review insurance limits and exclusions before renewal @recurring(yearly)"
            - name: Monthly compliance calendar review
              description: |-
                ## Purpose
                Calendars only work if someone looks ahead every month and starts the work early. Fifteen minutes with the CCO on the first working days of the month catches the filing that needs data from the administrator, the renewal that needs a signature and the event-triggered notice nobody remembered.

                ## Milestones
                1. The next sixty days of deadlines reviewed every month with owners confirmed.
                2. Data requests sent to the administrator and advisers at least three weeks before each deadline.
                3. Every filing made in the month marked complete with its confirmation saved.
                4. Twelve consecutive months with no late filing.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "The calendar is reviewed every month, every filing in the period shows a saved confirmation, and no filing is late for twelve months."
                cadence: rolling
              tasks:
                - "Review the next sixty days of compliance deadlines with the CCO @recurring(monthly:3)"
                - "Send data requests for upcoming filings to the administrator"
                - "Save each filing confirmation and mark the item complete @recurring(monthly:27)"
                - "Add any newly triggered filing to the calendar the day it arises"
            - name: Quarterly personal holdings and trade attestations
              description: |-
                ## Purpose
                Codes of ethics prove themselves through the evidence it leaves: quarterly trade reports, annual holdings reports and signed attestations. Running the cycle on the same dates every quarter keeps it quick, and the CCO's review of the reports against the restricted list is the control a regulator will ask to see.

                ## Milestones
                1. Quarterly transaction reports collected from every covered person on time.
                2. Each report checked against the restricted list and pre-clearance records.
                3. Exceptions written up with the explanation and any action taken.
                4. Annual holdings reports and code acknowledgements collected each year.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every covered person's quarterly report is on file within the deadline, reviewed against pre-clearances, with exceptions documented."
                cadence: cyclic
              tasks:
                - "Send the quarterly trade report request to all covered persons @recurring(quarterly)"
                - "Compare each report against pre-clearance approvals"
                - "Write up any exception with the person's explanation"
                - "Collect annual holdings reports alongside the year-end attestation"
            - name: Gifts, entertainment and outside activities log
              description: |-
                ## Purpose
                Bankers, lenders and service providers compete for a fund manager's business with dinners, tickets and conference trips, and partners collect board seats and advisory roles. A simple log with thresholds and approvals shows LPs and regulators that hospitality never bought a mandate and that outside roles were cleared.

                ## Milestones
                1. Value thresholds set for gifts and entertainment given and received.
                2. A log in place recording date, counterparty, value and approval.
                3. Every outside directorship, advisory role and investment by staff approved and recorded.
                4. A monthly glance at the log for patterns, such as one bank appearing every week.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A gifts and outside activities log with thresholds is kept current, with every entry above the threshold showing an approval."
                cadence: rolling
              tasks:
                - "Set gift and entertainment thresholds with the CCO"
                - "Create the log with fields for counterparty, value and approval"
                - "Record every outside role held by partners and staff"
                - "Scan the month's log entries for patterns or missing approvals @recurring(monthly:20)"
            - name: Investor sanctions and PEP rescreening cycle
              description: |-
                ## Purpose
                An investor who was clean at subscription can be sanctioned, become politically exposed or change ownership years into a ten-year fund. Rescreening the investor register on a schedule, and whenever sanctions lists change sharply, is the part of AML that most small managers forget once the fund has closed.

                ## Milestones
                1. The full investor register, including beneficial owners, loaded into the screening tool or sent to the administrator.
                2. Rescreening run on a fixed schedule, with results saved.
                3. Any match investigated, resolved and documented, with counsel involved where needed.
                4. Investor transfers and secondary buyers screened before consent is given.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "The full investor register is rescreened on schedule, every match has a documented resolution, and every transferee is screened before consent."
                cadence: rolling
              tasks:
                - "Confirm who runs ongoing screening: the manager or the administrator"
                - "Rescreen the investor register and save the results @recurring(monthly:12)"
                - "Document the resolution of every potential match"
                - "Screen any proposed transferee before the GP consents"
            - name: Quarterly conflicts register review
              description: |-
                ## Purpose
                New conflicts appear with every deal: a portfolio company hires a partner's former firm, a second fund wants into a deal the first fund owns, a lender is also an LP. A quarterly pass over the register with the deal team keeps it current and turns disclosure into a routine instead of a scramble before the annual meeting.

                ## Milestones
                1. The deal team asked each quarter for new relationships, fees and shared deals.
                2. New conflicts added with mitigation and disclosure; resolved ones closed.
                3. Any conflict needing consent sent to the LPAC or investors in time.
                4. A short quarterly note from the CCO filed with the register.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "The conflicts register shows a review every quarter, with new entries mitigated and any required consents obtained before the action."
                cadence: cyclic
              tasks:
                - "Ask each partner for new relationships, fees and shared deals @recurring(quarterly)"
                - "Update the register with new and closed conflicts"
                - "Send any conflict needing consent to the LPAC chair"
                - "File a one-paragraph CCO note with the quarter's changes"
            - name: Pre-use review of marketing materials
              description: |-
                ## Purpose
                Pitch decks, websites, tear sheets, DDQ answers and LinkedIn posts all count as marketing in many regimes, and performance figures in them are where regulators find the most problems. Running every piece through a compliance review before it goes out, and keeping the approved version, is cheap insurance for a manager who is always raising.

                ## Milestones
                1. A rule that no deck, website change or investor letter goes out without CCO sign-off.
                2. A checklist for each review: performance presentation, required disclosures, testimonials and hypothetical figures.
                3. A log of every approved version with its date and where it was used.
                4. Back-up for every number in the deck filed beside the approved version.

                ## Notes
                Gross and net figures shown together, with the time period stated, is a common requirement. Ask counsel what your rules demand for track record presentation.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every external marketing piece in use has a logged CCO approval and filed back-up for each performance figure."
                cadence: rolling
              tasks:
                - "Write a one-page review checklist for marketing materials"
                - "Log the current deck and website as approved versions"
                - "File the back-up workbook for every figure in the deck"
                - "Check that live decks and web pages match approved versions @recurring(monthly:25)"
            - name: Off-channel messaging and communications archiving
              description: |-
                ## Purpose
                Regulators have fined firms heavily for business conversations on personal messaging apps that were never archived. Deciding which channels staff may use for business, archiving them and checking that the rule holds is especially important at small firms where partners text LPs and bankers from their own phones.

                ## Milestones
                1. A list of approved channels for business communication, with everything else banned for business use.
                2. Archiving running for email and every approved messaging channel.
                3. Each person's signed acknowledgement of the messaging rule on file.
                4. A monthly sample of archived messages reviewed and the review recorded.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every approved channel is archived, every person has acknowledged the rule, and a sample review is recorded each month."
                cadence: rolling
              tasks:
                - "List the channels partners actually use with LPs and bankers"
                - "Choose approved channels and set up archiving for each"
                - "Collect signed acknowledgements of the messaging rule"
                - "Review a sample of archived messages and record the check @recurring(monthly:15)"
            - name: Fund and management company expense allocation checks
              description: |-
                ## Purpose
                Charging the fund for costs the LPA says the manager should bear, or splitting a shared cost unfairly between funds, is one of the findings regulators raise most often. A quarterly check of the expense ledger against the LPA's list of fund expenses catches the mistake while it is small and easy to reimburse.

                ## Milestones
                1. A one-page summary of what the LPA allows as fund expenses and what the manager pays.
                2. A written method for splitting shared costs between funds and co-investment vehicles.
                3. Each quarter's fund expenses sampled against the summary.
                4. Any misallocation reimbursed and recorded, with LPs told if counsel advises it.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Fund expenses are sampled against the LPA every quarter, with a written allocation method and a record of any reimbursement."
                cadence: cyclic
              tasks:
                - "Summarise the LPA's fund expense and manager expense lists on one page"
                - "Write the method for splitting shared costs between vehicles"
                - "Sample the quarter's fund expenses against the summary @recurring(quarterly)"
                - "Record any reimbursement and the reason for it"
            - name: Restricted list and inside information control
              description: |-
                ## Purpose
                Board seats, lender talks and bids for listed targets put material non-public information inside the firm. A restricted list that the deal team updates as soon as they are wall-crossed, and that blocks personal and fund trading, is the control that separates a careful manager from an insider trading case.

                ## Milestones
                1. A written rule for when a company goes on and comes off the restricted list.
                2. The list kept by the CCO, with the date and reason for each entry.
                3. Pre-clearance checks run against the list for every personal trade.
                4. A monthly confirmation from each deal lead that the list is complete.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A dated restricted list is maintained, pre-clearance checks use it, and deal leads confirm its completeness every month."
                cadence: rolling
              tasks:
                - "Write the rule for adding and removing restricted list names"
                - "Load current board seats and live listed-company processes onto the list"
                - "Ask each deal lead to confirm the list is complete @recurring(monthly:8)"
                - "Check that pre-clearance requests are tested against the list"
            - name: Regulatory change watch
              description: |-
                ## Purpose
                Rules for private fund managers change often, with new reporting forms, revised marketing rules and AML updates arriving every year in most jurisdictions. A light monthly scan of a few reliable sources, with each change logged and assigned, means you hear about a new obligation from your own notes rather than from an LP.

                ## Milestones
                1. Three or four sources chosen: counsel's client alerts, the regulator's updates and an industry body.
                2. A change log recording each relevant change, its effective date and its owner.
                3. Each logged change mapped to the policy, filing or control it affects.
                4. Changes discussed with the compliance adviser before their effective dates.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A regulatory change log is updated monthly, with each relevant change assigned an owner and an action before its effective date."
                cadence: rolling
              tasks:
                - "Subscribe to counsel's client alerts and the regulator's updates"
                - "Set up a change log with effective dates and owners"
                - "Scan the month's alerts and log anything relevant @recurring(monthly:28)"
                - "Raise logged changes at the next call with the compliance adviser"
            - name: Annual compliance programme review
              description: |-
                ## Purpose
                Many regimes expect the manager to test once a year whether its policies are adequate and actually followed, and LPs ask to see the result. A structured review, with findings and a remediation list, is also the moment to trim policies that no longer fit the firm.

                ## Milestones
                1. Each policy in the manual tested for adequacy and for whether it was followed.
                2. Findings written up with severity and an owner.
                3. A report presented to the founders and minuted.
                4. The manual updated and re-acknowledged where policies changed.

                ## Notes
                Many managers have an outside consultant run the review every second or third year for an independent view.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: deliverable
                success_criteria: "An annual review report with findings, owners and dates is presented to the founders, and the manual is updated where needed."
                cadence: cyclic
              tasks:
                - "Schedule the annual compliance review and its scope @recurring(yearly)"
                - "Test each policy against evidence from the past year"
                - "Write the findings report with owners and dates"
                - "Present the report to the founders and minute the discussion"
            - name: Learning the filings your status triggers
              description: |-
                ## Purpose
                Founders sign regulatory filings personally, often without understanding what each section asks or how the answers are used. Working through each form your status triggers, one at a time, makes the annual amendment a check rather than a rewrite and helps you spot an answer that has become untrue.

                ## Milestones
                1. A list of every form the manager and funds file, with its purpose in one sentence.
                2. Each form read section by section with the last filed version beside it.
                3. Questions for counsel noted against the sections you could not answer confidently.
                4. A one-page cheat sheet of facts that, if they change, require an amendment.

                ## Notes
                Examples include an adviser registration form with a narrative brochure, a periodic private fund report and a notice of exempt offering. Use the forms that apply to you.
              priority: medium
              deadlineOffsetDays: 60
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A cheat sheet lists each filing's purpose and the facts that trigger an amendment, with counsel's answers to open questions recorded."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Download the last filed version of each regulatory form"
                - "Read one form a week alongside the regulator's instructions"
                - "Note sections where you are unsure of the answer"
                - "Write a cheat sheet of amendment triggers"
            - name: Fund marketing and performance advertising rules
              description: |-
                ## Purpose
                Founders are always marketing, and the rules on what counts as an advertisement, how track record may be shown and when hypothetical or extracted performance is allowed can catch out even experienced investors. Learning the rules that apply to you lets you write a deck that passes review the first time.

                ## Milestones
                1. The marketing rules that apply in each jurisdiction where you raise summarised on two pages.
                2. Rules on gross and net returns, extracted performance and hypothetical figures noted.
                3. Rules on testimonials, endorsements and third-party ratings noted.
                4. Your current deck marked up against the summary.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A two-page summary of applicable marketing rules exists and the current deck has been marked up against it."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Ask counsel for their summary of the marketing rules that apply"
                - "Read the regulator's guidance on performance presentation"
                - "Write a two-page summary of the rules for the team"
                - "Mark up the current deck against the summary"
            - name: AML red flags training for the investor relations team
              description: |-
                ## Purpose
                The people who meet investors first are best placed to notice the warning signs: a family office that will not name its principals, money arriving from an unrelated third party, pressure to skip checks to make a close. Short, specific training once a year makes them comfortable saying no or escalating.

                ## Milestones
                1. A list of red flags drawn from your own investor types and channels.
                2. A thirty-minute session delivered to everyone who deals with investors.
                3. The escalation route to the CCO and the AML officer explained and written down.
                4. Attendance recorded and a short quiz completed by each attendee.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Every investor-facing person completes AML red flags training each year, with attendance and quiz results on file."
                cadence: cyclic
                effort_hours_estimate: "4"
              tasks:
                - "List red flags that match your investor types and channels"
                - "Prepare a thirty-minute session with real-looking examples"
                - "Deliver the session and record attendance"
                - "Run the AML training for all investor-facing staff @recurring(yearly)"
            - name: Beneficial ownership and sanctions screening basics
              description: |-
                ## Purpose
                Understanding who ultimately owns or controls an investor behind layers of companies, trusts and nominees is the hardest part of KYC, and sanctions rules often catch entities owned by listed persons even when the entity itself is not listed. Knowing the concepts lets you challenge the administrator's file instead of just trusting it.

                ## Milestones
                1. Notes on ownership and control thresholds used in your AML regime.
                2. Notes on how sanctions ownership rules extend to entities owned by listed persons.
                3. Three complex investor files from your own fund traced to their ultimate owners.
                4. Questions about any gaps sent to the administrator or AML officer.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Three complex investor files have been traced to their ultimate beneficial owners, with any gaps raised in writing."
                cadence: phased
                effort_hours_estimate: "5"
              tasks:
                - "Read your regulator's guidance on beneficial ownership"
                - "Read the sanctions authority's guidance on owned and controlled entities"
                - "Trace three complex investor files to their ultimate owners"
                - "Send any gaps you find to the administrator in writing"
            - name: FATCA and CRS classification basics for a fund
              description: |-
                ## Purpose
                Most fund vehicles are financial institutions for international tax information exchange, which means registrations, investor self-certifications and annual reports, usually handled with the administrator and tax adviser. Understanding the basics helps you check that the fund was registered, that every investor gave a self-certification and that the yearly report went in.

                ## Milestones
                1. Each fund vehicle's classification confirmed with the tax adviser and recorded.
                2. Registration numbers for each vehicle saved in the regulatory records.
                3. Self-certification forms checked as present for every investor.
                4. The yearly reporting deadlines for each vehicle added to the calendar.

                ## Notes
                Classification is a tax question: agree it with your tax adviser rather than deciding it yourself.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Each vehicle's classification and registration number is recorded and every investor has a self-certification on file."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Ask the tax adviser to confirm each vehicle's classification"
                - "Save each vehicle's registration number in the records folder"
                - "Ask the administrator for a list of missing self-certifications"
                - "Add each vehicle's reporting deadline to the calendar"
            - name: Lessons from published enforcement actions against fund managers
              description: |-
                ## Purpose
                Settled cases are published by regulators, and the same handful of failures appears again and again at private fund managers: undisclosed fees, expense misallocation, misleading performance, weak MNPI controls and unarchived messages. Reading a dozen recent cases is the fastest way to learn what examiners actually look for.

                ## Milestones
                1. Twelve recent enforcement actions against private fund managers read and summarised.
                2. Each case mapped to the policy or control in your manual that would prevent it.
                3. Gaps where your firm has no matching control listed.
                4. Each gap given an owner and a date.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Twelve enforcement actions are summarised and mapped to your controls, with each uncovered gap assigned an owner."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Find a dozen recent enforcement actions against private fund managers"
                - "Ask the agent to summarise each case in three lines"
                - "Map each case to the control in your manual that would prevent it"
                - "Assign an owner to every gap with no matching control"
            - name: Cybersecurity and data protection duties for a small manager
              description: |-
                ## Purpose
                Passport copies, bank details and tax numbers for every investor sit with the fund manager, and wire fraud aimed at capital calls and distributions is common. Knowing your data protection and cyber obligations, and the basic controls LPs expect, shapes the policies, vendors and training you need.

                ## Milestones
                1. Data protection and cyber obligations in your jurisdictions summarised with counsel's help.
                2. A list of where investor personal data is held, inside the firm and at providers.
                3. Baseline controls confirmed: multi-factor sign-in, device encryption and call-back checks on payment changes.
                4. Gaps listed with owners and dates.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A data map of investor personal data exists, baseline controls are confirmed in place, and each gap has an owner."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Ask counsel which data protection laws apply to your investor data"
                - "List every system and provider holding investor personal data"
                - "Confirm multi-factor sign-in on email and the investor portal"
                - "Write a call-back rule for any change to payment instructions"
            - name: Choosing compliance software for attestations and pre-clearance
              description: |-
                ## Purpose
                Spreadsheets and email work for two partners but break once you add staff, a second fund and quarterly attestations for everyone. Comparing a few compliance platforms on the jobs you actually do (pre-clearance, attestations, gifts, marketing review, the calendar) avoids buying an enterprise system you will never configure.

                ## Milestones
                1. The jobs the software must do listed, ranked by how often you do them.
                2. Three platforms demonstrated against the same list.
                3. Prices, data location and integrations with brokers and archiving compared.
                4. A decision recorded, including the option of staying on spreadsheets for another year.

                ## Notes
                Start from the **Purchase decision** template.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A recorded decision compares three platforms against the same ranked job list, with cost and data location noted."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "List the compliance jobs you do and how often"
                - "Book demonstrations with three compliance platforms"
                - "Score each platform against the same job list"
                - "Record the decision and the reason for it"
            - name: Oversight of AML checks delegated to the administrator
              description: |-
                ## Purpose
                Handing investor checks to the administrator does not hand over responsibility: regulators and LPs still hold the manager and the fund accountable. A written delegation agreement, regular reporting and a yearly sample of the administrator's files show that you oversee the work rather than assume it is done.

                ## Milestones
                1. A delegation agreement stating which AML checks the administrator performs and to what standard.
                2. A reporting format agreed: new investors approved, pending files, matches and escalations.
                3. A sample of investor files reviewed by the CCO once a year.
                4. Findings from the sample raised with the administrator and closed.

                ## Notes
                Start from the **Vendor** template to keep the agreement, contacts and review dates together.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: artifact
                success_criteria: "A signed AML delegation agreement is in place and a yearly sample review of administrator files is documented with findings closed."
                cadence: rolling
              tasks:
                - "Ask the administrator for their AML delegation agreement"
                - "Agree a quarterly report on investor files and matches"
                - "Sample five investor files and record what you find @recurring(yearly)"
                - "Raise sample findings with the administrator in writing"
            - name: Investor eligibility and accreditation records
              description: |-
                ## Purpose
                Private funds can usually only accept investors who meet a wealth, sophistication or professional test, and the manager must be able to show how each investor qualified. Checking the eligibility evidence across the register finds the subscription that ticked a box nobody verified.

                ## Milestones
                1. The eligibility tests each fund relies on listed with the evidence each needs.
                2. Every investor's eligibility representation and evidence checked as present.
                3. Missing or weak evidence requested from the investor.
                4. A rule added to onboarding so no subscription is accepted without it.
              priority: medium
              frontmatter:
                mode: research
                output_kind: artifact
                success_criteria: "Every investor on the register has a recorded eligibility basis and supporting evidence, or an open request to obtain it."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Ask counsel which eligibility tests each fund relies on"
                - "Check each subscription for an eligibility representation and evidence"
                - "Request missing evidence from the investors concerned"
                - "Add an eligibility check to the onboarding procedure"
            - name: Fee and expense disclosure gap review
              description: |-
                ## Purpose
                Monitoring fees, transaction fees, director fees and operating partner costs charged to portfolio companies need to match what investors were told and how the LPA offsets them. Comparing every fee stream the firm and its people receive against the disclosures in the fund documents closes the gap before an LP or examiner finds it.

                ## Milestones
                1. Every fee or payment the manager, its staff or affiliates receive from portfolio companies listed.
                2. Each fee matched to its disclosure and any offset against management fees.
                3. Gaps written up with counsel's view on whether disclosure or reimbursement is needed.
                4. Disclosures updated in the next investor communication where counsel advises it.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A complete list of fee streams is matched to fund document disclosures, with counsel's recommended action recorded for each gap."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "List every fee received from portfolio companies in the past two years"
                - "Match each fee to its disclosure and offset terms"
                - "Send the gaps to counsel for a view"
                - "Record the action taken on each gap"
            - name: Cyber incident response plan for the manager
              description: |-
                ## Purpose
                When an email account is taken over and a fake capital call goes out, the first hours decide how much money and trust is lost. A short plan naming who to call, which providers to alert and which regulators and investors must be told, and in what time, means nobody is inventing the process during the incident.

                ## Milestones
                1. A two-page plan with roles, contacts and the first ten steps.
                2. Notification duties to regulators, investors and insurers listed with their time limits.
                3. The plan shared with the administrator, IT provider and insurer.
                4. A tabletop exercise run on a fake wire fraud scenario.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A two-page incident plan with notification time limits is shared with key providers and tested in a tabletop exercise."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Write the first ten steps after a suspected breach"
                - "List notification duties and time limits with counsel's help"
                - "Share the plan with the administrator, IT provider and insurer"
                - "Run a tabletop exercise on a fake capital call fraud @recurring(yearly)"
            - name: Political donations pre-clearance for public pension investors
              description: |-
                ## Purpose
                Where public pension plans are investors or prospects, some jurisdictions restrict political contributions by the manager's staff to officials who influence those plans, with penalties that can include giving up fees. A pre-clearance rule and a look-back check on new hires keep a small personal donation from costing the firm a mandate.

                ## Milestones
                1. Counsel's confirmation of whether contribution rules apply to the firm.
                2. A pre-clearance rule for political contributions by covered staff.
                3. A look-back questionnaire completed by every new hire before they start.
                4. Contributions reported and reviewed each year.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A contributions pre-clearance rule is adopted and every covered person has a look-back questionnaire on file."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Ask counsel whether contribution rules apply to your investor base"
                - "Adopt a pre-clearance rule for covered staff"
                - "Add a look-back questionnaire to the new hire process"
                - "Collect contribution declarations from current staff"
            - name: Whistleblowing and complaints procedure
              description: |-
                ## Purpose
                Investor complaints and staff concerns are early warnings, and some regimes require them to be recorded and handled in a set way. A simple route to raise a concern, a log and a promise of no retaliation also protect founders, because problems surface while they can still be fixed quietly.

                ## Milestones
                1. A written procedure for investor complaints, with response times.
                2. A whistleblowing route that does not depend on the founders, such as an outside adviser.
                3. A complaints and concerns log kept by the CCO.
                4. The procedure explained to staff and included in the manual.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A complaints and whistleblowing procedure with an independent route is in the manual and a log is maintained by the CCO."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Write the investor complaints procedure with response times"
                - "Name an outside contact for whistleblowing reports"
                - "Set up a complaints and concerns log"
                - "Explain the procedure to staff at the next team meeting"
            - name: Annual regulatory filing amendment delivered
              description: |-
                ## Purpose
                The annual amendment to the manager's registration or exemption filing is the most visible deadline in the year, and it publishes facts about the firm that LPs and journalists read. Preparing it early, with fresh numbers from the administrator and a careful read of every narrative answer, keeps it accurate and on time.

                ## Milestones
                1. Assets under management and fund data obtained from the administrator.
                2. Every section of last year's filing reviewed for answers that have changed.
                3. A draft reviewed by counsel or the compliance adviser.
                4. The amendment filed before the deadline and any required delivery to investors completed.
              priority: high
              deadlineOffsetDays: 120
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "The annual amendment is filed before its deadline, reviewed by an adviser, with the confirmation and any investor delivery recorded."
                cadence: one-shot
                effort_hours_estimate: "10"
              tasks:
                - "Request year-end assets and fund data from the administrator"
                - "Mark up last year's filing for every answer that changed"
                - "Send the draft to counsel for review"
                - "Start the annual amendment six weeks before it is due @recurring(yearly)"
            - name: First close compliance checklist
              description: |-
                ## Purpose
                The first close is when investor money arrives, and with it a cluster of obligations: every investor cleared, eligibility confirmed, offering filings made within their windows, and side arrangements recorded. A checklist signed by the CCO before the GP countersigns subscriptions keeps the excitement of the close from skipping a step.

                ## Milestones
                1. KYC and eligibility signed off for every investor in the close.
                2. Offering notice filings due after the first sale identified with their deadlines.
                3. Marketing materials used in the raise confirmed as approved versions.
                4. The CCO's signed checklist filed with the closing documents.
              priority: high
              deadlineOffsetDays: 120
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A CCO-signed checklist confirms KYC, eligibility, filings and marketing approval for every investor before subscriptions are accepted."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Draft the first close checklist with the compliance adviser"
                - "Confirm KYC and eligibility sign-off for each investor"
                - "Diary each notice filing due after the first sale"
                - "File the signed checklist with the closing documents"
            - name: Mock regulatory examination
              description: |-
                ## Purpose
                A first examination is stressful mostly because nobody knows what will be asked or where the documents are. A mock exam run by an outside consultant, with a realistic document request and interviews with the founders, shows the gaps while there is time to fix them.

                ## Milestones
                1. A consultant engaged to run a mock exam with a realistic document request list.
                2. Every requested document produced within the time a regulator would allow.
                3. Founders and the CCO interviewed on their roles and the controls they own.
                4. A findings report turned into a remediation plan with owners and dates.

                ## Notes
                Track the findings in the **Remediation plan** template.
              priority: medium
              deadlineOffsetDays: 180
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A mock exam is completed, all requested documents produced on time, and findings are tracked in a remediation plan with dates."
                cadence: one-shot
                effort_hours_estimate: "20"
              tasks:
                - "Request mock exam proposals from two compliance consultants"
                - "Gather documents against a sample regulator request list"
                - "Sit the mock interviews with the founders and CCO"
                - "Turn the findings into a remediation plan with owners"
            - name: Responding to a regulator's information request
              description: |-
                ## Purpose
                Letters from a regulator asking for documents, or announcing an examination, set short deadlines and expects one coordinated response. Knowing in advance who leads, when counsel is called, how documents are logged and what is said in interviews keeps the response accurate and calm.

                ## Milestones
                1. A one-page response protocol naming the lead, counsel and the document log owner.
                2. A rule that counsel is told the same day any regulator contact arrives.
                3. A document production log ready to record what was sent, when and to whom.
                4. The protocol walked through once with the founders.
              priority: medium
              frontmatter:
                mode: event
                output_kind: artifact
                success_criteria: "A written response protocol and production log template exist and have been walked through with the founders."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Write a one-page protocol for regulator contact"
                - "Agree with counsel how quickly they want to be told"
                - "Create a document production log template"
                - "Walk the founders through the protocol"
            - name: Independent AML programme test
              description: |-
                ## Purpose
                AML rules in many fund domiciles require the programme to be tested independently, and LPs increasingly ask for the result. An outside reviewer sampling investor files, screening records and training logs gives an honest view of whether the procedure works in practice.

                ## Milestones
                1. An independent reviewer appointed with a written scope.
                2. Investor files, screening results, escalations and training records sampled.
                3. A report received with findings ranked by severity.
                4. Each finding closed or scheduled with an owner.
              priority: medium
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "An independent AML test report is received and every finding is closed or scheduled with an owner and date."
                cadence: cyclic
                effort_hours_estimate: "10"
              tasks:
                - "Ask counsel how often your domicile requires an independent AML test"
                - "Appoint a reviewer and agree the scope in writing"
                - "Provide the sample of files and records requested"
                - "Assign an owner and date to each finding"
            - name: Year-end FATCA and CRS reporting submission
              description: |-
                ## Purpose
                Each fund vehicle usually has to report investor account information to the tax authority every year, often through the administrator. Confirming the data, the submission and the receipt yourself, rather than assuming it happened, avoids penalties and a messy correction the following year.

                ## Milestones
                1. The administrator's reporting timetable for each vehicle confirmed.
                2. Investor classification and self-certification exceptions resolved before submission.
                3. The submission made and the authority's receipt saved for each vehicle.
                4. Any nil returns filed where the domicile requires them.
              priority: medium
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A receipt from the tax authority is saved for every reporting vehicle, with exceptions resolved before submission."
                cadence: cyclic
                effort_hours_estimate: "4"
              tasks:
                - "Ask the administrator for the reporting timetable for each vehicle"
                - "Resolve missing self-certifications before the data cut-off"
                - "Save each vehicle's submission receipt"
                - "Confirm the year's tax information reports were filed @recurring(yearly)"
            - name: Proportionate compliance for a two-partner first fund
              description: |-
                ## Purpose
                Two founders raising a small first fund cannot run the compliance programme of a large manager, and do not need to. Deciding what is essential now, what can be outsourced and what can wait until the second fund keeps the firm compliant without burying the partners in policies they cannot operate.

                ## Milestones
                1. A list of obligations that apply now, confirmed by counsel.
                2. Each obligation marked as do yourselves, outsource or not yet needed.
                3. A first-year compliance budget agreed between the partners.
                4. A list of triggers, such as a first hire or a new fund, that mean adding the deferred items.

                ## Notes
                Do not defer AML, conflicts or the filing calendar: they matter from the first investor.
              priority: medium
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A written plan sorts every applicable obligation into in-house, outsourced or deferred, with a budget and triggers for the deferred items."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "List every obligation counsel says applies today"
                - "Mark each one as in-house, outsourced or deferred"
                - "Agree a first-year compliance budget between the partners"
                - "Write the triggers for adding each deferred item"
            - name: Transition from exempt reporting to full registration
              description: |-
                ## Purpose
                Growing past an exemption threshold, launching a second strategy or taking on a new type of investor can force a manager to register fully, usually within a fixed window. Planning the transition early gives time to build the policies, testing and people that full registration expects on the first day.

                ## Milestones
                1. The trigger and the date by which registration must be complete confirmed with counsel.
                2. A gap list between current controls and what full registration requires.
                3. Policies, staff and systems in place before the effective date.
                4. The registration application filed and approved.
              priority: medium
              deadlineOffsetDays: 270
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "The manager's registration is approved before the deadline, with every item on the gap list closed or scheduled."
                cadence: phased
                effort_hours_estimate: "40"
              tasks:
                - "Ask counsel to confirm the registration trigger and deadline"
                - "List gaps between current controls and registered requirements"
                - "Assign owners and dates to each gap"
                - "File the registration application"
            - name: Marketing a fund to investors in other countries
              description: |-
                ## Purpose
                Talking to a prospective LP in another country can trigger local private placement rules, notice filings or a requirement to use a licensed intermediary before the first meeting. Checking each country before the roadshow, not after the investor says yes, keeps the raise from stalling at the subscription stage.

                ## Milestones
                1. A list of target countries with the investor types you plan to approach in each.
                2. Local counsel's advice on what is allowed, with any pre-marketing or notice requirements.
                3. Required filings made before marketing starts in each country.
                4. A country rules sheet shared with everyone who speaks to investors.
              priority: medium
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "Every target country has written local advice and any required filings made before the first marketing contact."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "List target countries and investor types for the raise"
                - "Ask counsel for a cross-border marketing survey"
                - "Make any required filings before contacting investors"
                - "Share a country rules sheet with the investor relations team"
            - name: Offshore fund vehicle registration and local obligations
              description: |-
                ## Purpose
                Funds domiciled in offshore centres often have to register with the local regulator, appoint local directors and AML officers, file annual returns and pay fees on fixed dates. Listing those obligations, separate from the manager's own, makes sure a vehicle you rarely think about does not fall out of good standing.

                ## Milestones
                1. The local registration status of each offshore vehicle confirmed.
                2. Local officer appointments, such as AML officers and directors, recorded with their terms.
                3. Annual returns, fees and audited accounts deadlines added to the calendar.
                4. A certificate of good standing obtained for each vehicle.

                ## Notes
                Common examples include Caribbean domiciles such as the Cayman Islands or the British Virgin Islands. The registered office provider is usually the best source of the local deadline list.
              priority: medium
              frontmatter:
                mode: research
                output_kind: artifact
                success_criteria: "Each offshore vehicle has its registration, local officers and annual deadlines recorded, and a current certificate of good standing."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Ask the registered office provider for each vehicle's local deadlines"
                - "Record each local director and AML officer appointment"
                - "Add annual returns and fees to the compliance calendar"
                - "Request a certificate of good standing for each vehicle"
            - name: Compliance steps when a partner joins or leaves
              description: |-
                ## Purpose
                A new partner brings brokerage accounts, outside roles and possibly a disciplinary history that filings must disclose; a departing one takes access, information and a name that may appear in key person clauses and regulatory forms. A checklist for both moves keeps filings accurate and stops data leaving with the person.

                ## Milestones
                1. A joiner checklist: background checks, code acknowledgement, holdings report and filing updates.
                2. A leaver checklist: access removed, devices returned, confidentiality reminded and filings amended.
                3. Key person and regulatory notifications checked for each move.
                4. Both checklists used and filed for every move.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Joiner and leaver checklists exist and are completed and filed for every partner or staff move."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Write the joiner compliance checklist"
                - "Write the leaver compliance checklist"
                - "Note which filings and notices name individual partners"
                - "Store completed checklists in the personnel compliance file"
            - name: Fund wind-down and deregistration
              description: |-
                ## Purpose
                When the last asset of a fund is sold, the compliance work does not stop: final filings, records kept for years, investor screening on final distributions, and deregistration or withdrawal where the manager no longer needs its status. A planned wind-down avoids paying fees and filing reports for a vehicle that no longer exists.

                ## Milestones
                1. A list of final filings, notices and deregistrations for the fund and its vehicles.
                2. Final distributions screened and paid only to verified accounts.
                3. Records moved to long-term storage for the full retention period.
                4. Deregistration confirmations saved for each vehicle and, if relevant, the manager.
              priority: low
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "Every final filing and deregistration for the fund is confirmed and its records are in long-term storage."
                cadence: phased
                effort_hours_estimate: "12"
              tasks:
                - "Ask counsel for the list of final filings and deregistrations"
                - "Rescreen investors before the final distribution"
                - "Move the fund's records to long-term storage"
                - "Save each deregistration confirmation"
            - name: LPAC consent process for conflicted transactions
              description: |-
                ## Purpose
                Cross-fund deals, transactions with affiliates and fees outside the LPA usually need LPAC consent, and the quality of the information you give the committee is what makes the consent hold. A standard consent pack and process, prepared well ahead of the deal timetable, protects both the investors and the GP.

                ## Milestones
                1. A list of transaction types that require LPAC consent under the LPA.
                2. A standard consent pack: the conflict, alternatives considered, independent pricing evidence and the request.
                3. Time for LPAC review built into deal timetables.
                4. Each consent minuted and filed with the conflicts register.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A consent pack template and process exist, and every conflicted transaction shows a minuted LPAC consent before closing."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "List the transaction types the LPA says need LPAC consent"
                - "Build a standard consent pack template with counsel"
                - "Add LPAC review time to the deal timetable template"
                - "File each consent minute with the conflicts register"
            - name: Anti-bribery controls for deals in higher-risk markets
              description: |-
                ## Purpose
                Buying companies in markets with weak governance, or ones that sell to governments, exposes the fund to bribery laws that reach well beyond borders. Pre-deal screening of agents and government touchpoints, and post-close controls in the portfolio company, are what LPs and lenders now ask to see.

                ## Milestones
                1. An anti-bribery policy for the manager covering deals, agents and portfolio companies.
                2. A pre-deal checklist on government customers, licences, agents and intermediaries.
                3. Anti-bribery items added to the post-close governance plan for higher-risk deals.
                4. Findings on each deal recorded in the investment file.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "An anti-bribery policy and pre-deal checklist are adopted and every higher-risk deal file shows completed checks."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Ask counsel which anti-bribery laws reach your firm and funds"
                - "Write a pre-deal anti-bribery checklist"
                - "Add anti-bribery items to the post-close governance plan"
                - "Record checks in each higher-risk deal file"
            - name: Transaction-level compliance testing programme
              description: |-
                ## Purpose
                Experienced compliance teams test individual transactions, not just policies: a sample of fee calculations, expense allocations, trades and investor transfers rebuilt from source documents. A rotating testing programme finds the errors that a policy review never will.

                ## Milestones
                1. A testing plan rotating through fees, expenses, trades, transfers and marketing over the year.
                2. Each test documented with the sample, the method and the result.
                3. Errors traced to their cause and the control fixed.
                4. Results summarised in the annual compliance review.

                ## Notes
                Start with management fee calculations: they are large, mechanical and easy to rebuild from the LPA.
              priority: low
              frontmatter:
                mode: operating
                output_kind: artifact
                success_criteria: "A yearly testing plan exists, each test is documented with sample and result, and findings feed the annual review."
                cadence: cyclic
                effort_hours_estimate: "20"
              tasks:
                - "Write a testing plan rotating through five areas over the year"
                - "Rebuild one quarter's management fee calculation from the LPA"
                - "Document each test's sample, method and result"
                - "Feed test results into the annual compliance review"
---

# Fund Compliance and Regulatory Filings

This area is for the founder of a fund manager who has to keep the firm on the right side of its regulators while also raising capital and doing deals, usually without a full compliance team. It starts with foundations (which regimes apply, the registration or exemption decision, a named compliance officer, the filing calendar, the manual, the code of ethics, investor AML and KYC, a conflicts register and records), moves into the operating machinery of reviews, attestations, screening and marketing sign-off, then the knowledge a founder needs, the improvements and decisions that close gaps, dated events such as the first close checklist and a mock examination, variants for different kinds of manager, and finally specialist work on LPAC consents, anti-bribery and transaction testing.

What repeats is a monthly calendar review and filing check, quarterly personal holdings attestations, conflicts reviews and expense allocation checks, monthly logs for gifts, messaging and the restricted list, a regular sanctions rescreen, and the yearly programme review, training, insurance renewal and filings. The Compliance control, Risk register, Purchase decision, Vendor and Remediation plan templates pair with the projects that name them. Nothing here is legal or regulatory advice: fund counsel and your compliance adviser make those calls, and these projects keep you prepared, organised and on record. Installing adds all 50 projects as active, so archive the ones that are not for you yet.
