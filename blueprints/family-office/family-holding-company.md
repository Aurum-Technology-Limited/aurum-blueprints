---
id: family-office.family-holding-company
name: Family Holding Company
description: "A family holding company run properly: a clear map of what it holds, a working board, intercompany loans on paper, dividend flows traced, annual accounts closed and every filing made on time."
category: personal
version: 1.0.0
tags: [family-office, family-holding-company, parent, founder, holding-company, corporate-governance, intercompany-loans, statutory-filings]
author: Aurum Technology
starter_structure:
  templates:
    - vendor
    - board-meeting
    - month-end-close
    - purchase-decision
    - risk-register
    - meeting-notes
  pillars:
    - name: Family Office & Private Wealth
      emoji: "🏰"
      description: "Running the affairs of a wealthy family, not picking investments: family governance and a constitution, trusts and foundations across jurisdictions, setting up a single-family office, a family investment policy and reporting, educating the next generation, philanthropy vehicles, household staff and concierge, and the security and privacy wealth brings."
      pillarFrontmatter:
        review_cadence: quarterly
      areas:
        - name: Family Holding Company
          description: "Running a family holding company: what it holds, board and management, intercompany loans, dividend flows, annual accounts and filings."
          projects:
            - name: Holding company asset and entity map
              description: |-
                ## Purpose
                Families often discover that nobody can say exactly what the holding company owns: a trading company, two property companies, a dormant shell from an old deal and a brokerage account opened by a parent decades ago. One chart showing every entity, its percentage owned, its country and what it holds is the document every adviser asks for first, and the starting point for everything else in this area.

                ## Milestones
                1. Every subsidiary, associate and direct asset of the holding company listed with country of incorporation and registration number.
                2. Ownership percentages confirmed against the share registers, not memory.
                3. A one-page structure chart drawn and dated, showing the holding company at the top.
                4. The chart checked by the group accountant and filed with the corporate records.

                ## Notes
                Include dormant and struck-off companies you are unsure about. A company you forgot can still have a filing obligation and a director who is personally liable for missing it.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: research
                output_kind: artifact
                success_criteria: "A dated structure chart of every entity and direct asset the holding company owns, checked by the group accountant."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "List every company and account you believe the holding company owns"
                - "Pull the latest share register or registry extract for each subsidiary"
                - "Draw a one-page structure chart with ownership percentages"
                - "Send the chart to the group accountant to check against the accounts"
            - name: Statutory registers and minute book check
              description: |-
                ## Purpose
                Company law in most countries requires a holding company to keep registers of members, directors and charges, plus minutes of board and shareholder decisions, and these are often missing or years out of date in family companies. Bringing them up to date before a bank, buyer or tax authority asks for them avoids a scramble and the awkward discovery that a share transfer was never recorded.

                ## Milestones
                1. The registers of members, directors, secretaries and charges located for the holding company.
                2. Each register compared with the company registry record and the differences listed.
                3. Missing entries written up and approved by the board, with backdated items flagged by the company secretary.
                4. Minute books for the last six years gathered into one place, with gaps noted.

                ## Notes
                Do not quietly rewrite old minutes. Where a decision was taken but never minuted, ask the lawyer or company secretary how to ratify it properly.
              priority: high
              deadlineOffsetDays: 45
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Up-to-date statutory registers that match the company registry, with a written list of any ratifications still needed."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Find where the holding company's statutory registers are currently kept"
                - "Download the registry's current record of directors and shareholders"
                - "List every difference between the registers and the registry record"
                - "Ask the company secretary which gaps need a board ratification"
            - name: Holding company remit and scope statement
              description: |-
                ## Purpose
                Without a written remit, a family holding company drifts into owning whatever a relative asked it to buy: a boat, a restaurant, a loan to a friend. A short statement of what the holding company exists to hold, what it will not hold and how it relates to the family office and the trusts above it gives the board a reason to say no and keeps personal assets out of the corporate books.

                ## Milestones
                1. The purposes of the holding company written in a few plain sentences, such as owning the operating businesses and the commercial property.
                2. A list of asset types the holding company will not hold, such as personal homes or vehicles used privately.
                3. Its place between the shareholders above and the subsidiaries below described in one paragraph.
                4. The statement approved by the board and filed with the governance documents.
              priority: medium
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A board-approved remit statement for the holding company listing what it holds and what it will not hold."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Write down what the holding company was originally set up to do"
                - "List any assets it holds that sit outside that purpose"
                - "Draft a one-page remit with a list of excluded asset types"
                - "Put the remit to the board for approval at the next meeting"
            - name: Board composition and director appointment review
              description: |-
                ## Purpose
                Many family holding companies still have the directors chosen on incorporation day: a retired parent, an accountant who has since moved firms, a cousin who lives abroad and never attends. Reviewing who sits on the board, whether each appointment is properly filed, and what skills are missing tells the family whether the board can actually govern the group or only sign forms.

                ## Milestones
                1. Every current director listed with appointment date, role and attendance over the last two years.
                2. Each appointment confirmed as filed with the company registry.
                3. A short skills grid showing finance, legal, sector and family knowledge across the board.
                4. A recommendation on appointments or retirements agreed by the shareholders.

                ## Notes
                A director who never attends still carries the full legal duties of the role. That is often the kindest argument for letting someone step down.
              priority: high
              deadlineOffsetDays: 60
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A written board review with a skills grid and an agreed list of appointments and retirements, recorded in a shareholder resolution."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "List each director with their appointment date and recent attendance"
                - "Check every appointment against the company registry filing"
                - "Score the board on finance, legal, sector and family knowledge"
                - "Draft a recommendation on who should join or step down"
            - name: Reserved matters and delegated authority matrix
              description: |-
                ## Purpose
                Without clear limits, the board of a family holding company ends up approving supplier invoices in a subsidiary, while a subsidiary managing director could sell a property without the board knowing. A matrix setting out which decisions are reserved to shareholders, which to the holding board and which are delegated to subsidiary management, with money thresholds, removes most of the friction between family and executives.

                ## Milestones
                1. A list of decision types drawn up, from capital spending and borrowing to hiring senior staff and selling assets.
                2. Each decision assigned to shareholders, the holding board, subsidiary boards or management.
                3. Money thresholds set for spending, borrowing and contracts at each level.
                4. The matrix approved by the board and sent to every subsidiary managing director.

                ## Notes
                Check the matrix against the articles and any shareholders' agreement. A matrix that conflicts with the constitutional documents will lose.
              priority: high
              deadlineOffsetDays: 60
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A board-approved delegated authority matrix with money thresholds, acknowledged in writing by every subsidiary managing director."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "List the twenty decisions that most often reach the family for approval"
                - "Mark which level of the group should make each decision"
                - "Propose spending and borrowing thresholds for each level"
                - "Ask the lawyer to check the matrix against the articles of association"
            - name: Bank mandates and payment authority for the holding company
              description: |-
                ## Purpose
                Bank mandates in family companies are often the last thing updated: a deceased parent still listed as a signatory, a single director able to move the whole cash balance alone. Setting dual authorisation, thresholds and a current signatory list for every holding company account protects the family from fraud and from a frozen account when one person is unavailable.

                ## Milestones
                1. Every bank and brokerage account of the holding company listed with its current signatories.
                2. A dual authorisation rule agreed for payments above a set amount.
                3. Mandates updated with each bank to match the board's decision.
                4. Former and deceased signatories removed and the removal confirmed in writing.
              priority: high
              frontmatter:
                mode: operating
                output_kind: artifact
                success_criteria: "Every holding company account has a current mandate with dual authorisation above an agreed limit, confirmed by each bank in writing."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Request the current signatory list from each bank the holding company uses"
                - "Draft a board resolution setting signatories and payment thresholds"
                - "Submit the updated mandate forms to each bank"
                - "Review the signatory list against the board register @recurring(yearly)"
            - name: Annual filings and compliance calendar
              description: |-
                ## Purpose
                Forty statutory deadlines a year is normal for a family group with six companies in three countries: annual returns, accounts, tax returns, beneficial ownership confirmations and licence renewals. Late filings bring fines, and in some registries repeated lateness leads to the company being struck off. One calendar covering every entity, with an owner for each deadline, is the cheapest protection the group can buy.

                ## Milestones
                1. Every filing deadline for every group entity listed for the next twelve months.
                2. Each deadline given an owner, whether the accountant, company secretary or an office staff member.
                3. Reminders set sixty and fourteen days before each deadline.
                4. Last year's late filings and fines, if any, recorded with the reason.

                ## Notes
                Ask each adviser for their own list of deadlines, then merge them. Advisers rarely know what the others are filing.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: operating
                output_kind: artifact
                success_criteria: "A single compliance calendar listing every statutory deadline for every group entity, each with a named owner."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Ask the accountant and company secretary for their deadline lists"
                - "Merge every deadline into one calendar sorted by date"
                - "Assign a named owner to each filing"
                - "Check the next sixty days of deadlines on the calendar @recurring(monthly:3)"
            - name: Appointing the group accountant and company secretary
              description: |-
                ## Purpose
                Holding company work needs an accountant who understands group accounts and intercompany balances, and a company secretary who keeps registers and filings current in each country. Families often inherit a sole practitioner who did the original incorporation. Comparing two or three firms on group experience, fees and responsiveness either confirms the current choice or replaces it before the next year end.

                ## Milestones
                1. The scope of work written down: bookkeeping, statutory accounts, tax returns, company secretarial and filings.
                2. Two or three firms asked for proposals against the same scope.
                3. Proposals compared on group experience, fees, named staff and turnaround times.
                4. An engagement letter signed with the chosen firm and handover dates agreed.

                ## Notes
                Start from the **Vendor** template. Ask each firm who exactly will do the work, not just who will attend the pitch.
              priority: medium
              deadlineOffsetDays: 45
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A signed engagement letter with a group accountant and company secretary, chosen after comparing at least two proposals on the same scope."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Write a one-page scope of work for the holding company and subsidiaries"
                - "Ask two or three firms for proposals against that scope"
                - "Compare proposals on group experience, fees and named staff"
                - "Sign the engagement letter and agree a handover timetable"
            - name: Beneficial ownership and registered agent records
              description: |-
                ## Purpose
                Most jurisdictions now require companies to record who ultimately owns and controls them, and offshore holding companies usually rely on a registered agent who must hold up-to-date identity documents for each beneficial owner. When a passport expires or a trust changes its trustee, the records go stale and the agent can freeze the company. Keeping these records current avoids that.

                ## Milestones
                1. The registered office and registered agent for each group entity confirmed.
                2. The beneficial owners recorded for each entity listed, including any trust or trustee above the holding company.
                3. Identity and address documents checked for expiry and updated where needed.
                4. Beneficial ownership filings confirmed as current with each registry or agent.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: artifact
                success_criteria: "Current beneficial ownership records and registered agent details for every group entity, with no expired identity documents on file."
                cadence: rolling
              tasks:
                - "Ask each registered agent for the beneficial ownership details they hold"
                - "List which identity documents on file expire in the next year"
                - "Send updated documents to the agents that need them"
                - "Confirm beneficial ownership records with each agent @recurring(yearly)"
            - name: Intercompany balances baseline at a set date
              description: |-
                ## Purpose
                Money moves between group companies for years without anyone agreeing the balances: one company pays another's rent, a dividend is declared but never paid, a loan is half repaid. Picking one date, usually the last year end, and agreeing every intercompany balance in both companies' books gives a clean starting point. Until the two sides match, the group accounts cannot be relied on.

                ## Milestones
                1. Every intercompany balance at the chosen date listed from each company's books.
                2. Both sides of each balance compared and the mismatches explained.
                3. Correcting entries agreed with the accountant and posted.
                4. A signed schedule of agreed intercompany balances filed with the year-end papers.
              priority: high
              deadlineOffsetDays: 45
              frontmatter:
                mode: research
                output_kind: artifact
                success_criteria: "A signed schedule of intercompany balances at a stated date where both sides of every balance agree."
                cadence: one-shot
                effort_hours_estimate: "10"
              tasks:
                - "Choose the date for the intercompany baseline with the accountant"
                - "Export intercompany ledger balances from each group company"
                - "List every pair of balances that do not match"
                - "Agree correcting entries and have both companies post them"
            - name: Quarterly holding company board cycle
              description: |-
                ## Purpose
                Boards that meet only when a document needs signing never see the group as a whole. Four meetings a year, each with a standing agenda of subsidiary results, cash, intercompany positions, dividends, risks and compliance, turn the board into the place where the group is actually run, and leave a minute trail that auditors and tax authorities expect.

                ## Milestones
                1. Four board dates fixed for the year, with papers due a week before each.
                2. A standing agenda agreed covering results, cash, intercompany, dividends, risk and compliance.
                3. Minutes for each meeting circulated within ten working days and signed at the next.
                4. An action log carried from meeting to meeting with owners and dates.

                ## Notes
                Start from the **Board meeting** template. Keep board papers short: one page per subsidiary is enough most quarters.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Four quorate board meetings held in the year, each with circulated papers, signed minutes and an updated action log."
                cadence: cyclic
              tasks:
                - "Fix four board dates for the next twelve months"
                - "Agree the standing agenda with the chair"
                - "Circulate board papers a week before the meeting @recurring(quarterly)"
                - "Update the board action log after each meeting"
            - name: Monthly holding company management accounts
              description: |-
                ## Purpose
                The holding company's own books are often neglected because it has no customers, yet it carries the loans, the investments, the dividends received and the group's cash. A short monthly close producing a balance sheet, income statement and cash position for the holding company alone lets the board see problems in weeks rather than at the year end.

                ## Milestones
                1. A month-end checklist agreed with the bookkeeper, from bank reconciliation to intercompany accruals.
                2. Management accounts for the holding company produced by the twelfth of each month.
                3. Variances against budget explained in a few lines.
                4. Three consecutive months closed on time.

                ## Notes
                Start from the **Month-end close** template.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Holding company management accounts with a short variance note produced by the twelfth of the month for three months running."
                cadence: rolling
              tasks:
                - "Agree a month-end checklist for the holding company with the bookkeeper"
                - "Reconcile every holding company bank account to its statement"
                - "Review the holding company management accounts and variances @recurring(monthly:12)"
                - "Send the monthly pack to the chair with questions noted"
            - name: Intercompany loan register and interest accruals
              description: |-
                ## Purpose
                Intercompany loans are the plumbing of a family group, and also where tax authorities look first. A register showing each loan's lender, borrower, principal, rate, repayment terms and the agreement behind it, with interest accrued every month in both companies, keeps the books consistent and gives the tax adviser what they need to defend the terms.

                ## Milestones
                1. Every intercompany loan entered in one register with its agreement attached.
                2. Interest rates and repayment terms recorded as written in each agreement.
                3. Monthly interest accrued in both lender and borrower books.
                4. Year-end balances agreed by both sides and confirmed in writing.

                ## Notes
                Ask the tax adviser whether the rates need an arm's length review in your jurisdictions. Interest-free loans between companies can create tax consequences in some countries.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A complete intercompany loan register with monthly interest accrued in both companies and year-end balances confirmed in writing."
                cadence: rolling
              tasks:
                - "Set up a loan register with lender, borrower, rate and terms columns"
                - "Attach the signed agreement for each loan to the register"
                - "Post interest accruals for every intercompany loan @recurring(monthly:20)"
                - "Send year-end balance confirmations to each borrowing company @recurring(yearly)"
            - name: Upstream dividend calendar from subsidiaries
              description: |-
                ## Purpose
                Cash reaches the holding company mainly as dividends from its subsidiaries, and each payment needs the subsidiary to have distributable profits, a board resolution and often a withholding tax check. A calendar planning when each subsidiary pays, how much, and the paperwork behind it stops dividends being paid on a whim or forgotten until the holding company runs short.

                ## Milestones
                1. Expected dividends from each subsidiary for the year listed with target months.
                2. Distributable reserves for each paying subsidiary confirmed by the accountant before declaration.
                3. A board resolution and dividend voucher produced for every payment.
                4. Withholding tax treatment for cross-border dividends checked with the tax adviser.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every subsidiary dividend in the year paid against confirmed distributable reserves, with a board resolution and voucher on file."
                cadence: cyclic
              tasks:
                - "List the dividends each subsidiary is expected to pay this year"
                - "Ask the accountant to confirm distributable reserves before each declaration"
                - "Review the next quarter's planned dividends with each subsidiary @recurring(quarterly)"
                - "File the board resolution and voucher for each dividend paid"
            - name: Holding company cash buffer and treasury check
              description: |-
                ## Purpose
                On paper a holding company can look rich and still miss a tax payment because its cash sits in subsidiaries or in a fixed deposit. Setting a minimum cash buffer for the holding company, covering six to twelve months of its own costs, interest and known commitments, and checking it monthly, keeps the parent able to support a subsidiary in trouble without a fire sale.

                ## Milestones
                1. The holding company's fixed costs, interest and known commitments for twelve months listed.
                2. A minimum cash buffer agreed by the board.
                3. A short monthly cash report comparing the balance with the buffer.
                4. A rule agreed for what happens when the buffer is breached, such as calling a dividend.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A board-approved minimum cash buffer for the holding company, compared with actual cash in a monthly report."
                cadence: rolling
              tasks:
                - "List the holding company's commitments for the next twelve months"
                - "Propose a minimum cash buffer to the board"
                - "Compare holding company cash with the agreed buffer @recurring(monthly:6)"
                - "Write down what action follows if the buffer is breached"
            - name: Annual statutory accounts and audit cycle
              description: |-
                ## Purpose
                Statutory accounts for the holding company, and for each subsidiary that needs them, are the backbone of every bank, tax and buyer conversation. Running the year end as a planned cycle, with a timetable agreed with the auditor, a closing pack prepared in advance and the board approving the accounts well before the filing deadline, prevents the annual rush and the audit adjustments that come with it.

                ## Milestones
                1. A year-end timetable agreed with the accountant and auditor, working back from the filing deadline.
                2. A closing pack prepared with bank confirmations, intercompany schedules and loan registers.
                3. Audit queries answered and the management letter points listed.
                4. Accounts approved by the board, signed and filed before the deadline.

                ## Notes
                Whether the holding company needs an audit depends on its size, its jurisdiction and its lenders. Ask the accountant; some small holding companies can claim exemption, others cannot.
              priority: high
              frontmatter:
                mode: operating
                output_kind: deliverable
                success_criteria: "Signed statutory accounts for the holding company and every subsidiary filed before the deadline, with management letter points logged."
                cadence: cyclic
              tasks:
                - "Agree the year-end timetable with the auditor"
                - "Prepare the closing pack of confirmations and schedules"
                - "Start the statutory accounts timetable for the year end @recurring(yearly)"
                - "Log each management letter point with an owner"
            - name: Subsidiary reporting pack from each operating company
              description: |-
                ## Purpose
                The holding board cannot govern a business it hears about only at Christmas lunch. A standard one-page monthly pack from each operating subsidiary, showing sales, margin, cash, borrowing, headcount and the managing director's top three issues, gives the family the same view every month without asking executives for bespoke reports.

                ## Milestones
                1. A one-page pack format agreed with each subsidiary managing director.
                2. Key measures defined in writing so every company reports them the same way.
                3. Packs received by the fifteenth of each month.
                4. The packs summarised into one group page for the board.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A standard monthly pack from every operating subsidiary received by the fifteenth, summarised into one group page."
                cadence: rolling
              tasks:
                - "Draft a one-page reporting pack format for subsidiaries"
                - "Agree definitions of each measure with the managing directors"
                - "Chase and file each subsidiary's monthly pack @recurring(monthly:15)"
                - "Summarise the packs into one group page for the chair"
            - name: Group management charges and recharges
              description: |-
                ## Purpose
                When the holding company pays for the group's finance team, insurance or office and its subsidiaries benefit, the cost should be recharged on a documented basis. Without an agreement and a consistent method, the charges look arbitrary to tax authorities and to minority shareholders in any subsidiary. A written basis and quarterly invoicing keep it clean.

                ## Milestones
                1. Shared costs paid by the holding company listed with the subsidiaries that benefit.
                2. An allocation method agreed, such as headcount or revenue, with the tax adviser's input.
                3. A written management services agreement in place with each subsidiary.
                4. Quarterly invoices raised and paid between group companies.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Signed management services agreements with each subsidiary and quarterly recharge invoices issued on the agreed method."
                cadence: cyclic
              tasks:
                - "List shared costs the holding company pays for the group"
                - "Agree an allocation method with the tax adviser"
                - "Draft a management services agreement for each subsidiary"
                - "Raise recharge invoices to each subsidiary @recurring(quarterly)"
            - name: Board resolutions and minutes log
              description: |-
                ## Purpose
                Family holding companies often make real decisions by phone and paper them months later, or never. A running log of every board and shareholder resolution, with the date passed, the signed copy and where it is filed, proves that decisions were made properly and in the right place, which matters for tax residence and for any later dispute.

                ## Milestones
                1. A resolutions log set up with date, decision, type and filing location.
                2. The last two years of resolutions entered from the minute book.
                3. A rule agreed that no decision is acted on until the resolution is signed.
                4. Every new resolution added within a week of signing.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A resolutions log covering the last two years and every new resolution, each linked to a signed copy."
                cadence: rolling
              tasks:
                - "Set up a resolutions log with date, decision and filing columns"
                - "Enter the last two years of resolutions from the minute book"
                - "Check the log against signed copies received this month @recurring(monthly:27)"
                - "Agree with the board that unsigned decisions are not acted on"
            - name: Related party and directors' interests register
              description: |-
                ## Purpose
                In a family group, almost every director is related to someone the company deals with: a brother who leases a warehouse to a subsidiary, a spouse whose firm supplies the office. Directors usually must declare these interests, and auditors must disclose related party transactions. A register updated each year makes those declarations easy and protects the directors involved.

                ## Milestones
                1. Each director asked to declare outside directorships, shareholdings and family business dealings with the group.
                2. Related party transactions in the year listed with values.
                3. The register tabled at a board meeting and minuted.
                4. The register shared with the auditor for the accounts disclosure.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: artifact
                success_criteria: "A related party and directors' interests register declared by every director and tabled at a minuted board meeting each year."
                cadence: cyclic
              tasks:
                - "Send each director a short declaration of interests form"
                - "List related party transactions from the ledger for the year"
                - "Table the register at the board and minute it"
                - "Request fresh declarations from every director @recurring(yearly)"
            - name: Reading holding company and consolidated accounts
              description: |-
                ## Purpose
                Family members who sit on a holding company board, or will one day, need to read three sets of numbers: the holding company's own accounts, each subsidiary's, and the consolidated group picture. Learning where intercompany balances disappear on consolidation, what goodwill and minority interests mean and how dividends show up lets a director ask the right question at the board.

                ## Milestones
                1. The difference between company-only and consolidated accounts explained in your own words.
                2. Last year's group accounts read with the accountant, with intercompany eliminations traced.
                3. Five questions about the group's numbers written down and answered.
                4. A one-page glossary of the terms you found hardest.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A one-page glossary and five answered questions from a walk-through of the group's own consolidated accounts with the accountant."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "Get last year's holding company and consolidated accounts"
                - "Book a two-hour walk-through with the group accountant"
                - "Trace one intercompany loan from both companies into the group accounts"
                - "Write a one-page glossary of the terms that confused you"
            - name: Directors' duties for family directors
              description: |-
                ## Purpose
                Being a director of the family holding company is not an honorary title. Directors generally owe duties to the company itself, not to their branch of the family, including acting in good faith, avoiding conflicts and taking care. A short course or briefing from the group's lawyer, followed by a written summary, means every family director knows what they are signing up to.

                ## Milestones
                1. A briefing from the lawyer on directors' duties in the holding company's jurisdiction held.
                2. Each family director given a written summary of their duties.
                3. Situations where family and company interests diverge discussed with examples.
                4. Directors' and officers' insurance cover confirmed or a gap noted.
              priority: medium
              deadlineOffsetDays: 60
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Every family director has attended a duties briefing and received a written summary, with insurance cover confirmed."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Ask the lawyer for a one-hour briefing on directors' duties"
                - "Collect three real examples where family and company interests might clash"
                - "Circulate a written duties summary to every family director"
                - "Check whether directors' and officers' insurance covers each director"
            - name: Distributable reserves and lawful dividends
              description: |-
                ## Purpose
                A dividend paid when the company lacks distributable profits can be unlawful, and directors can be asked to repay it. Understanding how distributable reserves are worked out, why a holding company with big unrealised gains may still not be able to pay, and how interim accounts support an interim dividend saves the family from a painful conversation with the auditor.

                ## Milestones
                1. The meaning of distributable reserves in your jurisdiction explained by the accountant.
                2. The reserves of the holding company and each subsidiary read from the last accounts.
                3. The paperwork for a lawful dividend listed: accounts, resolution and voucher.
                4. Any past dividends that may not have met the rules flagged to the lawyer.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A written note of each group company's distributable reserves and the paperwork needed for a lawful dividend, checked by the accountant."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Ask the accountant to explain distributable reserves for your jurisdictions"
                - "Note the distributable reserves of each group company from the accounts"
                - "List the documents every dividend needs before payment"
                - "Flag any doubtful past dividends to the lawyer"
            - name: Intercompany pricing and arm's length basics
              description: |-
                ## Purpose
                Tax authorities in many countries expect transactions between group companies, such as loans, rent, management charges and the sale of goods, to be priced as if the companies were strangers. Learning the arm's length idea and what documentation your group may need helps the family ask better questions of the tax adviser rather than leaving it until an enquiry arrives.

                ## Milestones
                1. The arm's length principle explained in a short note in your own words.
                2. Every type of intercompany transaction in the group listed.
                3. The tax adviser's view recorded on which transactions need documentation.
                4. A plan agreed for any transfer pricing documentation required.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A list of the group's intercompany transaction types with the tax adviser's documented view on which need arm's length support."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Read a plain-language guide to the arm's length principle"
                - "List every kind of transaction between group companies"
                - "Ask the tax adviser which transactions need pricing support"
                - "Record the documentation plan the adviser recommends"
            - name: Chairing a family holding company board
              description: |-
                ## Purpose
                The chair of a family holding board has to run a meeting where a parent, a sibling and a non-family director all sit as equals, keep family arguments out of company business and still finish on time. Studying how good chairs build agendas, manage dissent and close decisions, and asking for feedback after each meeting, makes the board noticeably better within a year.

                ## Milestones
                1. Two or three books or courses on board chairing completed.
                2. A chair's checklist written for before, during and after each meeting.
                3. Feedback collected from directors after two meetings.
                4. One change to how meetings are run made as a result.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A written chair's checklist and feedback from directors after two meetings, with one documented change to how meetings run."
                cadence: phased
                effort_hours_estimate: "15"
              tasks:
                - "Choose one book or short course on chairing a board"
                - "Write a checklist for before, during and after a board meeting"
                - "Ask each director for three lines of feedback after the next meeting"
                - "Change one thing about the meeting based on the feedback"
            - name: Group tax concepts briefing with the tax adviser
              description: |-
                ## Purpose
                Tax for a holding company turns on a handful of ideas that recur in every adviser conversation: where the company is resident, how dividends from subsidiaries are taxed or exempt, withholding taxes, interest deductibility and controlled foreign company rules. A structured briefing on how these apply to your own group lets the family follow the advice rather than simply signing it.

                ## Milestones
                1. A list of questions on residence, dividends, withholding and interest sent to the tax adviser in advance.
                2. A briefing held using the group's own structure chart.
                3. A one-page summary of how each concept applies to the group, reviewed by the adviser.
                4. Open questions logged for the next adviser meeting.

                ## Notes
                This is for understanding, not a substitute for advice. Every structuring decision still goes back to the adviser in writing.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A one-page summary of how the main holding company tax concepts apply to the group, reviewed by the tax adviser."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Send the tax adviser the structure chart and a list of questions"
                - "Hold a briefing walking through the group structure"
                - "Ask the agent to draft a one-page summary from your meeting notes"
                - "Send the summary to the adviser to correct"
            - name: Independent non-executive director search
              description: |-
                ## Purpose
                An independent director with operating or finance experience changes the tone of a family holding board: questions get sharper and family disagreements are aired in front of someone whose respect matters. Finding the right person takes a written brief, a fair process and agreed terms, and is best done before a crisis makes it urgent.

                ## Milestones
                1. A brief written for the role covering skills, time commitment, fee and term.
                2. Candidates sourced through networks, advisers or a search firm.
                3. A shortlist interviewed by the chair and one other director.
                4. An appointment letter signed and the appointment filed.
              priority: medium
              deadlineOffsetDays: 120
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "An independent non-executive director appointed on a written letter after interviews with a shortlist of at least three candidates."
                cadence: phased
                effort_hours_estimate: "20"
              tasks:
                - "Write a one-page brief for the independent director role"
                - "Ask advisers and peers for five candidate names"
                - "Interview a shortlist with the chair present"
                - "Issue an appointment letter with fee, term and duties"
            - name: Striking off dormant and redundant subsidiaries
              description: |-
                ## Purpose
                Every dormant company in the group still needs filings, a registered agent fee and sometimes an audit exemption claim, and each one is a place where a forgotten liability can hide. Reviewing which entities no longer serve a purpose, checking they hold nothing and owe nothing, and closing them properly can cut annual costs and make the structure chart readable.

                ## Milestones
                1. Every dormant or near-dormant entity listed with its annual running cost.
                2. Assets, liabilities, contracts and bank accounts checked for each candidate.
                3. A board decision recorded on which entities to strike off or liquidate.
                4. Strike-off or liquidation applications filed and confirmations received.

                ## Notes
                Ask the lawyer whether strike-off or a formal liquidation is right. Striking off a company that still owns an asset can hand that asset to the state.
              priority: low
              deadlineOffsetDays: 180
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A board decision on each dormant entity, with strike-off or liquidation confirmations received for those being closed."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "List each dormant entity and what it costs to keep each year"
                - "Check every candidate for assets, contracts and open bank accounts"
                - "Ask the lawyer whether to strike off or liquidate each one"
                - "Record the board decision and file the applications"
            - name: Written agreements for undocumented intercompany loans
              description: |-
                ## Purpose
                Balances that have built up between group companies over years, with no agreement, no rate and no repayment date, are a risk with tax authorities, auditors and any future buyer. Putting each one on written terms, or converting it to equity or writing it off with advice, turns a vague balance into something the board can defend.

                ## Milestones
                1. Every intercompany balance without a signed agreement listed.
                2. The tax adviser's recommendation recorded for each: document, convert, repay or waive.
                3. Agreements signed by both companies for balances being kept as loans.
                4. Board minutes recording each conversion, repayment or waiver.

                ## Notes
                Waiving an intercompany loan can have tax effects in both companies. Get the advice in writing before signing anything.
              priority: high
              deadlineOffsetDays: 90
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "Every intercompany balance is either covered by a signed agreement or resolved by a minuted board decision taken on written tax advice."
                cadence: phased
                effort_hours_estimate: "12"
              tasks:
                - "List every intercompany balance that has no signed agreement"
                - "Ask the tax adviser for a recommendation on each balance"
                - "Have the lawyer draft standard loan agreements for balances being kept"
                - "Minute each conversion, repayment or waiver at the board"
            - name: Upstream dividend and retained earnings policy
              description: |-
                ## Purpose
                Should subsidiaries send all spare profit up to the holding company, or keep it to grow? Families argue about this every year when there is no policy. A written policy, agreed with subsidiary management, setting how much each business normally retains for investment and debt repayment and how much it pays up, makes the annual dividend round predictable for executives and the family alike.

                ## Milestones
                1. Each subsidiary's investment plans and debt commitments for three years gathered.
                2. A normal payout range agreed for each subsidiary.
                3. Exceptions defined, such as a major capital project or a covenant limit.
                4. The policy approved by the holding board and shared with subsidiary boards.

                ## Notes
                This covers money moving up within the group. What the holding company then pays to family shareholders belongs to the family's ownership rules.
              priority: medium
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A board-approved policy setting a normal payout range for each subsidiary, with exceptions defined and shared with subsidiary boards."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Ask each managing director for a three-year investment outline"
                - "Note bank covenants that restrict dividends from each subsidiary"
                - "Propose a payout range for each subsidiary to the board"
                - "Share the approved policy with every subsidiary board"
            - name: Parent company guarantees and security register
              description: |-
                ## Purpose
                Banks lending to a subsidiary often ask the holding company to guarantee the loan or pledge its shares, and those promises outlast the memories of the people who signed them. A register of every guarantee, pledge, comfort letter and cross-default clause shows the family how much of the group is really exposed if one business fails.

                ## Milestones
                1. Every guarantee, share pledge and comfort letter given by the holding company listed.
                2. The amount, beneficiary, expiry and release conditions noted for each.
                3. Cross-default clauses in group borrowing identified with the lawyer.
                4. The total exposure presented to the board.
              priority: medium
              frontmatter:
                mode: research
                output_kind: artifact
                success_criteria: "A register of every guarantee and security given by the holding company, with total exposure presented to the board."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Search the minute book and facility letters for guarantees given"
                - "Record amount, beneficiary and release terms for each"
                - "Ask the lawyer to flag any cross-default clauses"
                - "Re-confirm each guarantee and request releases where possible @recurring(yearly)"
            - name: Choosing entity management software
              description: |-
                ## Purpose
                Once a group passes ten or so entities, registers, filings, directors and documents kept in spreadsheets start to slip. Entity management software holds the structure chart, registers, deadlines and signed documents in one place with access for advisers. Comparing two or three products against the group's real needs avoids paying for a system built for multinationals.

                ## Milestones
                1. Requirements written: number of entities, jurisdictions, users, adviser access and security.
                2. Two or three products demonstrated using the group's own structure.
                3. Costs, data location and export options compared.
                4. A decision made and a migration plan agreed, or a decision to stay on spreadsheets recorded.

                ## Notes
                Start from the **Purchase decision** template. A well-kept spreadsheet beats an empty system, so budget the time to load data.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A recorded decision on entity management software after comparing at least two products against written requirements."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Write a one-page list of requirements for entity records"
                - "Book demonstrations with two or three providers"
                - "Compare cost, data location and export options"
                - "Record the decision and the migration plan"
            - name: Holding company risk register
              description: |-
                ## Purpose
                A holding company carries risks no single subsidiary sees: concentration in one business, a guarantee that could crystallise, a key director nearing retirement, a filing failure in a far-off registry. A short register, scored for likelihood and impact with an owner for each, reviewed by the board each quarter, keeps those risks visible.

                ## Milestones
                1. Ten to fifteen group-level risks listed with likelihood and impact scores.
                2. An owner and a mitigation action assigned to each risk.
                3. The register reviewed at a board meeting and minuted.
                4. Scores updated after each quarterly review.

                ## Notes
                Start from the **Risk register** template.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: artifact
                success_criteria: "A scored group risk register with owners and actions, reviewed and minuted by the board each quarter."
                cadence: rolling
              tasks:
                - "List the ten risks that worry the directors most about the group"
                - "Score each risk for likelihood and impact"
                - "Assign an owner and an action to each risk"
                - "Review and rescore the risk register at the board @recurring(quarterly)"
            - name: Where non-operating assets should sit
              description: |-
                ## Purpose
                Holding companies collect property, portfolios and cash surpluses alongside the trading businesses, and that mix can expose family savings to trading risks and complicate a future sale. Deciding with advisers whether investment assets stay in the holding company, move to a sister company or sit in a separate vehicle is one of the bigger structural choices a family makes.

                ## Milestones
                1. Non-operating assets in the holding company listed with values and income.
                2. Options described: keep, move to a sister company, or hold in a separate vehicle.
                3. Written views from the tax adviser and lawyer on each option.
                4. A board decision recorded, with any transfer timetable.

                ## Notes
                Moving assets between companies can trigger taxes and duties. The decision is the board's; the analysis is the advisers'.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A minuted board decision on where non-operating assets are held, based on written tax and legal advice."
                cadence: phased
                effort_hours_estimate: "12"
              tasks:
                - "List investment assets held alongside the trading businesses"
                - "Describe the three main options in a one-page paper"
                - "Ask the tax adviser and lawyer for written views on each"
                - "Put the options paper and advice to the board for decision"
            - name: Holding company annual general meeting
              description: |-
                ## Purpose
                Even where the law allows a private company to skip its annual general meeting, a family holding company benefits from one: shareholders receive the accounts, approve the auditor, re-elect directors and hear from the board in one room. Holding the first properly run meeting sets the pattern for every year after.

                ## Milestones
                1. The legal requirements for notice, quorum and resolutions confirmed with the company secretary.
                2. Notice and papers sent to all shareholders in time.
                3. The meeting held with accounts received, auditor appointed and directors re-elected.
                4. Minutes and any filings completed within the deadline.

                ## Notes
                Start from the **Meeting notes** template for the minutes draft.
              priority: medium
              deadlineOffsetDays: 120
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "An annual general meeting held with valid notice, signed minutes and every resulting filing made on time."
                cadence: one-shot
                effort_hours_estimate: "10"
              tasks:
                - "Confirm notice and quorum rules with the company secretary"
                - "Draft the notice, agenda and resolutions"
                - "Send notice and papers to every shareholder"
                - "Set the date for next year's general meeting @recurring(yearly)"
            - name: Acquiring a business into the holding company
              description: |-
                ## Purpose
                When the family buys a business, the holding company is usually the buyer, and the deal has to fit the existing structure: which entity acquires, how it is funded, what the board approves and how the new company joins the reporting and compliance routines. Planning the integration into the group alongside the deal stops a new subsidiary living outside every system for its first year.

                ## Milestones
                1. The acquiring entity and funding route agreed with advisers.
                2. Board approval minuted with the reserved matters satisfied.
                3. Completion documents filed in the corporate records and registers updated.
                4. The new subsidiary added to the structure chart, compliance calendar and reporting pack within thirty days.
              priority: medium
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "An acquired company fully added to the group registers, structure chart, compliance calendar and reporting pack within thirty days of completion."
                cadence: phased
                effort_hours_estimate: "30"
              tasks:
                - "Ask advisers which group entity should be the buyer"
                - "Prepare the board paper for approval of the acquisition"
                - "Update the registers and structure chart on completion"
                - "Add the new company to the compliance calendar and reporting pack"
            - name: Selling a subsidiary out of the group
              description: |-
                ## Purpose
                Selling a subsidiary means untangling it from the holding company: intercompany loans repaid or released, guarantees withdrawn, shared staff and services separated, and the proceeds received by the right entity. A disentanglement checklist prepared before the buyer arrives shortens due diligence and stops a guarantee surviving the sale.

                ## Milestones
                1. Every intercompany balance, guarantee and shared service with the subsidiary listed.
                2. Settlement of each item agreed with advisers before completion.
                3. Proceeds received by the right entity and recorded.
                4. The subsidiary removed from the registers, calendar and reporting after completion.
              priority: medium
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A completed sale with all intercompany balances settled, guarantees released in writing and group records updated."
                cadence: phased
                effort_hours_estimate: "25"
              tasks:
                - "List every link between the subsidiary and the rest of the group"
                - "Agree with advisers how each link is settled at completion"
                - "Obtain written releases of any parent company guarantees"
                - "Remove the subsidiary from group records after completion"
            - name: Incorporating a new subsidiary for a family venture
              description: |-
                ## Purpose
                When a family member starts a venture with group money, setting it up as a new subsidiary keeps its risk ring-fenced and its books separate. Doing it properly means choosing the jurisdiction, articles, directors and funding route, and adding it to the group routines from day one rather than after the first filing is missed.

                ## Milestones
                1. The case for a new subsidiary approved by the holding board under the reserved matters.
                2. The company incorporated with directors, share capital and bank account in place.
                3. Initial funding documented as equity or a written intercompany loan.
                4. The company added to the registers, calendar and reporting pack.
              priority: low
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A new subsidiary incorporated with documented funding and added to every group register and routine within a month."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Write a short board paper on why the venture needs its own company"
                - "Instruct the company secretary to incorporate the subsidiary"
                - "Document the initial funding as equity or a written loan"
                - "Add the new subsidiary to every group register and routine"
            - name: Responding to a tax authority enquiry on the group
              description: |-
                ## Purpose
                Tax enquiries into family groups often focus on intercompany loans, management charges, dividends and where the board really makes decisions. An organised response, led by the tax adviser, with documents pulled from the registers and minute book rather than reconstructed, is faster and far less stressful than an improvised one.

                ## Milestones
                1. The enquiry letter passed to the tax adviser within two working days.
                2. A single point of contact named and response deadlines logged.
                3. Requested documents gathered from the corporate records and checked by the adviser.
                4. The response submitted on time and the outcome recorded with lessons learned.

                ## Notes
                Do not contact the tax authority directly before speaking to the adviser.
              priority: medium
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A tax enquiry answered on time through the tax adviser, with documents drawn from the records and lessons logged."
                cadence: one-shot
                effort_hours_estimate: "15"
              tasks:
                - "Send the enquiry letter to the tax adviser the day it arrives"
                - "Log every response deadline in the compliance calendar"
                - "Gather the requested documents from the minute book and registers"
                - "Record the outcome and what to do differently next time"
            - name: Founder putting an operating company under a new holding company
              description: |-
                ## Purpose
                Founders often decide, once a business is established, to place it under a holding company so profits can be moved up and reinvested, or new ventures started, without touching the operating company. The usual route is a share exchange, and the timing, tax clearances and bank consents matter. Planning it as a project keeps the business running while the structure changes above it.

                ## Milestones
                1. Reasons for the holding company written down and tested with the tax adviser.
                2. The route agreed, such as a share for share exchange, with any tax clearance applied for.
                3. Consents from lenders, landlords and key customers obtained where contracts require them.
                4. The new holding company incorporated, the exchange completed and registers updated.

                ## Notes
                Some contracts treat a change of shareholder as a change of control. Ask the lawyer to check the main ones before completion.
              priority: medium
              deadlineOffsetDays: 180
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "The operating company wholly owned by a new holding company, with any tax clearance and contract consents on file."
                cadence: phased
                effort_hours_estimate: "25"
              tasks:
                - "Write down why you want a holding company above the business"
                - "Ask the tax adviser about the share exchange route and clearances"
                - "Have the lawyer check major contracts for change of control clauses"
                - "Complete the exchange and update both companies' registers"
            - name: Splitting chair and managing director roles as the founder steps back
              description: |-
                ## Purpose
                In first-generation groups the founder is usually chair of the holding company, managing director of the main subsidiary and signatory on every account. Stepping back works best when those roles are separated one at a time: a professional or family managing director appointed below, the founder staying as chair for a period, and authority written down.

                ## Milestones
                1. Every role the founder holds across the group listed.
                2. A sequence agreed for handing over each role, with dates.
                3. Authority limits for the new managing director written into the delegated authority matrix.
                4. The founder's remaining role as chair described in a short role statement.

                ## Notes
                Choosing the next family leader belongs to succession planning. This project is the mechanics of separating holding company roles.
              priority: medium
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A dated handover sequence for each of the founder's group roles, with a chair role statement and updated authority limits approved by the board."
                cadence: phased
                effort_hours_estimate: "12"
              tasks:
                - "List every directorship, signatory and title the founder holds"
                - "Agree the order in which each role is handed over"
                - "Update the authority matrix for the new managing director"
                - "Write a one-page role statement for the founder as chair"
            - name: Preparing an adult child for a holding company directorship
              description: |-
                ## Purpose
                Parents often want an adult child on the holding board but worry about appointing someone who has never read a board paper. A year of preparation, with the child attending as an observer, reading the papers, meeting the advisers and the subsidiary managing directors, means that when the appointment is made it is earned and understood.

                ## Milestones
                1. A preparation plan agreed between parent, child and chair.
                2. Four board meetings attended as an observer.
                3. Meetings held with the accountant, lawyer and each subsidiary managing director.
                4. An appointment decision taken by the shareholders at the end of the year.

                ## Notes
                Agree in advance what the observer may share outside the boardroom. Confidentiality is the first lesson.
              priority: low
              frontmatter:
                mode: service
                output_kind: decision
                success_criteria: "An adult child has observed four board meetings and met each adviser, followed by a recorded shareholder decision on appointment."
                cadence: phased
                effort_hours_estimate: "20"
              tasks:
                - "Agree a one-year observer plan with your child and the chair"
                - "Ask the chair to invite your child to the next board meeting"
                - "Arrange introductions to the accountant, lawyer and managing directors"
                - "Put the appointment question to shareholders after the year"
            - name: Board continuity if a director dies or loses capacity
              description: |-
                ## Purpose
                If the family holding company has two directors and one dies, the board may be unable to act, the bank may freeze the accounts and subsidiaries may lose their authority to sign. Checking quorum rules, appointing alternates or reserve directors where the articles allow, and holding lasting powers or equivalents where relevant, keeps the group running through the worst week.

                ## Milestones
                1. The articles checked for quorum, minimum directors and alternate director provisions.
                2. A scenario written showing who can act if each director is unavailable.
                3. Additional or alternate directors appointed where the gap is real.
                4. Each bank told what documentation it would need and the answer recorded.

                ## Notes
                Ask the lawyer how personal powers of attorney interact with directorships in your jurisdiction. They often do not cover a director's role.
              priority: high
              deadlineOffsetDays: 60
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A written continuity plan showing who can act for each group company if any director is unavailable, with any gaps closed by appointments."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Read the quorum and alternate director clauses in the articles"
                - "Write who could act if each director were suddenly unavailable"
                - "Ask the lawyer how to close any gap the scenario reveals"
                - "Ask each bank what it would need to accept new signatories"
            - name: Director moving abroad and the holding company's tax residence
              description: |-
                ## Purpose
                In many countries a company is tax resident where its board actually meets and decides, so a family director who moves country and joins every meeting from the new home can, in some cases, shift where the company is taxed. Reviewing where decisions are made, before or soon after the move, lets the tax adviser recommend changes to meeting arrangements.

                ## Milestones
                1. The director's new country and moving date recorded.
                2. The tax adviser's view obtained on residence risk for each company where they are a director.
                3. Meeting arrangements agreed, such as the location of board meetings and who attends in person.
                4. The minutes template updated to record where each director attends from.

                ## Notes
                Personal tax for the moving director is a separate question for their own adviser.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "Written tax advice on residence risk following a director's move, with agreed board meeting arrangements recorded in the minutes."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Record which group companies the moving director sits on"
                - "Ask the tax adviser for a written view on residence risk"
                - "Agree where future board meetings are held and who attends in person"
                - "Add a director location line to the minutes template"
            - name: Small holding company for a young family business
              description: |-
                ## Purpose
                Not every family holding company sits above a conglomerate. A couple running one trading business and owning the building it trades from may simply want profits held in one place, a clean split between property and trade, and children able to inherit shares rather than assets. This project scales the area down to what such a family really needs.

                ## Milestones
                1. The holding company's job for this family written in two sentences.
                2. A simple structure chart of the parent, the trading company and any property company.
                3. A short list of yearly duties: accounts, returns, board minutes and one family meeting.
                4. A cost check comparing the holding company's annual running cost with its benefit.

                ## Notes
                Many projects in this area are more than a small group needs. Archive the specialist ones and keep the foundations and the yearly cycle.
              priority: low
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A two-sentence purpose, a simple structure chart and a list of yearly duties for a small family holding company, with its running cost checked."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Write in two sentences why your family has a holding company"
                - "Sketch the parent, trading and property companies on one page"
                - "List the yearly filings and meetings the holding company needs"
                - "Ask the accountant what the holding company costs to run each year"
            - name: Group reorganisation of subsidiaries
              description: |-
                ## Purpose
                Groups that grew deal by deal end up with three companies doing one job, property scattered across entities and subsidiaries owned by other subsidiaries for no reason anyone remembers. A planned reorganisation, merging, hiving up assets or moving shares within the group under advice, can cut costs and risk but touches tax, contracts, staff and lenders at once.

                ## Milestones
                1. A target structure chart drawn and its benefits written down.
                2. Tax, legal and accounting advice obtained on the steps and any clearances.
                3. A step plan with dates, consents and filings for each move.
                4. The reorganisation completed and the new structure reflected in every register.
              priority: low
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "A completed reorganisation following a written step plan on professional advice, with registers and structure chart updated."
                cadence: phased
                effort_hours_estimate: "40"
              tasks:
                - "Draw the structure you would want if starting from scratch"
                - "List the benefits and costs of moving towards it"
                - "Commission a step plan from the tax adviser and lawyer"
                - "Track each step's consents and filings to completion"
            - name: Economic substance file for the holding company
              description: |-
                ## Purpose
                Holding companies in many international centres must show they have real presence where they are registered: directors who meet there, decisions taken there, and adequate people and premises for what they do, with an annual substance return in several jurisdictions. A substance file built through the year, rather than reconstructed at return time, protects the company from penalties.

                ## Milestones
                1. The substance rules that apply to the holding company confirmed with the registered agent or adviser.
                2. Evidence gathered for the year: board meetings held locally, minutes, local service providers and costs.
                3. The annual substance return or notification filed on time.
                4. Gaps found in the year listed with fixes agreed by the board.

                ## Notes
                Comparing jurisdictions belongs elsewhere. This file proves substance for the holding company you already have.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: artifact
                success_criteria: "A complete substance evidence file for the year and the substance return filed on time, with gaps minuted."
                cadence: cyclic
              tasks:
                - "Ask the registered agent which substance rules apply to the company"
                - "Create a folder for the year's board minutes, invoices and local evidence"
                - "File the annual economic substance return @recurring(yearly)"
                - "Minute any substance gaps and the agreed fixes"
            - name: Borrowing at holding company level for an acquisition
              description: |-
                ## Purpose
                Borrowing at the top of the group to fund an acquisition puts the holding company's assets and dividends on the line, and lenders will look through to every subsidiary. Preparing the information pack, understanding the covenants and their effect on the dividend flow, and getting board approval on a clear view of the repayment source makes this a decision rather than a deal momentum outcome.

                ## Milestones
                1. The amount, purpose and repayment source written in a short board paper.
                2. An information pack prepared from the group accounts and reporting packs.
                3. Term sheets compared, with covenants and security reviewed by the lawyer.
                4. The facility approved by the board and added to the guarantees register.

                ## Notes
                Check how the covenants restrict dividends from subsidiaries. A covenant that blocks the upstream flow can starve the holding company of the cash to repay.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A board decision on group borrowing taken after comparing at least two term sheets with legal review of covenants and security."
                cadence: phased
                effort_hours_estimate: "20"
              tasks:
                - "Write a one-page paper on the amount, purpose and repayment source"
                - "Prepare a lender information pack from the group accounts"
                - "Ask the lawyer to review covenants and security in each term sheet"
                - "Record the board decision and add the facility to the guarantees register"
            - name: Consolidated group accounts preparation
              description: |-
                ## Purpose
                Some family groups are required to prepare consolidated accounts and many more would benefit from them, because the holding company's own accounts show only investments at cost and dividends received. Preparing a full consolidation, with eliminations, minority interests and group cash flow, gives the family the true size and shape of what it owns.

                ## Milestones
                1. The accountant's view recorded on whether consolidation is required or voluntary.
                2. Group accounting policies aligned across subsidiaries.
                3. A consolidation schedule built with intercompany eliminations agreed.
                4. Consolidated accounts reviewed by the board.
              priority: low
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "Consolidated group accounts with agreed intercompany eliminations, prepared by the accountant and reviewed by the board."
                cadence: phased
                effort_hours_estimate: "20"
              tasks:
                - "Ask the accountant whether the group must prepare consolidated accounts"
                - "List differences in accounting policies between subsidiaries"
                - "Agree the elimination schedule for intercompany balances"
                - "Table the consolidated accounts at the board"
            - name: Independent board effectiveness review
              description: |-
                ## Purpose
                After a few years of regular meetings, a family holding board benefits from an outside view of how well it works: whether papers are useful, whether the independent director is heard, whether family dynamics crowd out business. An independent reviewer interviewing each director and observing a meeting gives the chair a short list of changes the board will actually accept.

                ## Milestones
                1. A reviewer chosen with no existing ties to the family or the group.
                2. Each director interviewed and one board meeting observed.
                3. A written report with findings and recommendations received.
                4. An action plan agreed by the board and reviewed a year later.
              priority: low
              frontmatter:
                mode: service
                output_kind: deliverable
                success_criteria: "A written independent board review with a board-approved action plan, revisited at least once a year later."
                cadence: one-shot
                effort_hours_estimate: "12"
              tasks:
                - "Agree with the chair what the review should cover"
                - "Ask two advisers for names of independent board reviewers"
                - "Arrange interviews with each director and one observed meeting"
                - "Turn the report into an action plan the board approves"
---

# Family Holding Company

This area is for the family whose businesses, property and investments sit under one holding company, whether a founder who has just put a trading company under a new parent or a second generation inheriting a group that nobody has tidied for twenty years. It starts with foundations (an entity map, the statutory registers, the board, reserved matters, bank mandates and a filing calendar), moves into the operating routines of board meetings, management accounts, intercompany loans, upstream dividends and the annual audit, then the skills of reading group accounts and directors' duties, decisions such as independent directors and striking off dormant companies, dated events like acquisitions and disposals, situations for founders and parents, and specialist work on reorganisations, substance and group borrowing.

What repeats is a monthly close of the holding company's own books, a monthly intercompany interest accrual and subsidiary reporting pack, a quarterly board meeting with its dividend and recharge cycle, and a yearly round of statutory accounts, annual returns, registers and the general meeting. The Vendor, Board meeting, Month-end close, Purchase decision, Risk register and Meeting notes templates pair with choosing advisers, the board cycle, the monthly close, software, the risk register and the general meeting. None of this is legal, tax or accounting advice: agree every structure, loan and dividend with the group's lawyer, tax adviser and auditor. Installing adds all 50 projects as active, so archive the ones that are not for you yet.
