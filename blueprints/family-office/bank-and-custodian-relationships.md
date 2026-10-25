---
id: family-office.bank-and-custodian-relationships
name: Bank and Custodian Relationships
description: "Every private bank and custodian the family uses mapped and justified, KYC kept current, fees and credit lines tested, bankers reviewed on a steady rhythm, and a calm plan for switching or losing a bank."
category: personal
version: 1.0.0
tags: [family-office, bank-and-custodian-relationships, parent, retiree, private-banking, custody, kyc, bank-fees]
author: Aurum Technology
starter_structure:
  templates:
    - risk-register
    - meeting-notes
    - vendor
    - purchase-decision
    - onboarding-plan
  pillars:
    - name: Family Office & Private Wealth
      emoji: "🏰"
      description: "Running the affairs of a wealthy family, not picking investments: family governance and a constitution, trusts and foundations across jurisdictions, setting up a single-family office, a family investment policy and reporting, educating the next generation, philanthropy vehicles, household staff and concierge, and the security and privacy wealth brings."
      pillarFrontmatter:
        review_cadence: quarterly
      areas:
        - name: Bank and Custodian Relationships
          description: "Managing private banks and custodians: how many relationships, KYC refreshes, fees, credit lines, service reviews and switching when needed."
          projects:
            - name: Map of every bank and custodian relationship
              description: |-
                ## Purpose
                Wealthy families often discover a forgotten deposit account or a custody account opened for one deal a decade ago only when a tax return or a death forces the question. One page listing every bank, custodian and account, with the legal owner, booking centre and rough balance band, is the base every other project here builds on.

                ## Milestones
                1. Every bank, custodian and broker the family or its structures uses listed on one page.
                2. Each account shown with legal owner, booking centre, currency and account type.
                3. Balances recorded in bands rather than exact figures, with the date of the snapshot.
                4. Accounts nobody can explain flagged for follow-up.
                5. The map stored in the family document vault with restricted access.

                ## Notes
                Include accounts held by trusts, companies and foundations, not only personal ones. Those are the accounts most often forgotten when a trustee or director changes.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A dated relationship map lists every account the family and its structures hold, with legal owner and booking centre, and no account is left unexplained."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Pull the last statement from every bank and custodian you know about"
                - "Ask the accountant and trustees for any accounts missing from your list"
                - "Record legal owner, booking centre and currency for each account"
                - "Flag any account nobody in the family can explain"
            - name: Signatory and mandate register
              description: |-
                ## Purpose
                Signing authority tends to drift: a former employee still on a company mandate, a late grandparent still listed as a joint signatory, a trustee who resigned years ago. A register showing who can sign, approve or instruct on each account, and with what limits, closes the gaps that fraud and frozen accounts come through.

                ## Milestones
                1. Every account's current signatories and signing rules confirmed with the bank in writing.
                2. Limits and dual-signature rules recorded against each signatory.
                3. Anyone who has left the family office, died or resigned removed from mandates.
                4. The register checked by a second person against the bank confirmations.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A register matching each bank's written confirmation of signatories and limits exists for every account, with no departed person still authorised."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Ask each bank for a written list of current signatories and limits"
                - "Enter every signatory, limit and approval rule into one register"
                - "Send removal instructions for anyone who should no longer sign"
                - "Reconcile the register with fresh bank confirmations each year @recurring(yearly)"
            - name: Named contacts at each bank and in the family
              description: |-
                ## Purpose
                Knowing only the relationship manager's mobile is not enough when a payment is stuck at a booking centre in another time zone. A contact sheet naming the banker, their deputy, the service desk and the person in the family or office who speaks to each bank means nothing waits on one individual.

                ## Milestones
                1. For each bank, the relationship manager, deputy, service desk and escalation contact recorded.
                2. One named person on the family side responsible for each bank.
                3. Agreed ways of instructing each bank written down, such as secure portal or authenticated call-back.
                4. The sheet shared only with the people who instruct the banks.

                ## Notes
                Record how each bank will verify an instruction, not just who to call. That detail is what stops a convincing email from moving money.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A contact sheet shows four named contacts per bank, the family owner of each relationship and the approved instruction channel."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Ask each relationship manager for their deputy and service desk details"
                - "Assign one family or office person to own each bank relationship"
                - "Write down how each bank verifies payment instructions"
                - "Share the sheet with the people who give instructions, and no one else"
            - name: Written reason for keeping each bank
              description: |-
                ## Purpose
                Most families accumulate banks by accident: one came with a mortgage, one with a business sale, one because a friend worked there. Writing a sentence on what each relationship is for, such as custody, credit, local payments or a currency, shows which banks earn their place and which only add KYC work.

                ## Milestones
                1. A one-line purpose recorded against every bank on the relationship map.
                2. Relationships with no clear purpose listed separately.
                3. Overlaps noted where two banks do the same job.
                4. The list reviewed with the family decision makers.
              priority: medium
              deadlineOffsetDays: 45
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "Every bank on the map has a written purpose, and relationships without one are listed for a keep or close decision."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Write one sentence on what each bank does for the family"
                - "Mark any two banks that do the same job"
                - "List banks kept only out of habit or loyalty"
                - "Take the list to the next family or office meeting"
            - name: Counterparty exposure and deposit protection check
              description: |-
                ## Purpose
                Securities held in custody are normally kept apart from a bank's own assets, but cash deposits are a loan to the bank and are protected only up to the local scheme limit, if there is one. Knowing how much cash sits with each institution, and how strong each one looks, tells the family where a bank failure would actually hurt.

                ## Milestones
                1. Cash and deposit balances totalled per institution, separate from custody assets.
                2. Each bank's deposit protection scheme and limit noted, or its absence recorded.
                3. Public credit ratings or equivalent strength indicators recorded per bank.
                4. Any institution holding more cash than the family is comfortable with flagged.
                5. A rough exposure ceiling per bank agreed with the family's advisers.

                ## Notes
                Start from the **Risk register** template. Deposit protection rules differ by country and by booking centre, so confirm them with the bank and your adviser rather than assuming the home country's scheme applies.
              priority: high
              deadlineOffsetDays: 60
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A risk register shows cash exposure, deposit protection and credit strength for every bank, with an exposure ceiling agreed and recorded."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Total the cash held at each bank separately from securities"
                - "Look up the deposit protection scheme for each booking centre"
                - "Record each bank's published credit rating"
                - "Agree an exposure ceiling per bank with the family's adviser"
                - "Refresh balances and ratings in the register @recurring(yearly)"
            - name: How custody actually holds the family's assets
              description: |-
                ## Purpose
                Your name appears on a custody statement, but the shares usually sit in a nominee name, in an omnibus account at a sub-custodian, several links down a chain. Understanding segregation, nominee holding and the custodian's network means you can ask the right questions about what would happen if one link broke.

                ## Milestones
                1. The difference between segregated and omnibus accounts explained in your own words.
                2. Each custodian's sub-custodian network for the family's main markets requested.
                3. Where the family's assets are registered in a nominee name noted per custodian.
                4. Three questions for each custodian about asset protection written and asked.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A short note explains how each custodian holds the family's assets, including nominee and sub-custodian arrangements, with the custodians' answers attached."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Read your custody agreement's section on asset segregation"
                - "Ask each custodian for its sub-custodian list for your main markets"
                - "Write down which holdings are in a nominee name"
                - "Ask each custodian how client assets are returned if it fails"
            - name: Ready-to-send KYC document pack
              description: |-
                ## Purpose
                Private banks ask for the same documents again and again: certified passports, proof of address, structure charts, trust deeds, company registers. Keeping one current, certified pack for every individual and entity turns a three-week scramble into a same-day reply, and avoids accounts being restricted for missing paperwork.

                ## Milestones
                1. A list of documents each bank typically requests for individuals, trusts and companies.
                2. Current certified copies held for every family member and entity on the accounts.
                3. Expiry dates for passports and certifications recorded.
                4. The pack stored in the document vault with a log of what was sent to which bank.

                ## Notes
                Send only what each bank asks for, and keep a record of each disclosure. A full pack emailed in one go is a privacy risk if it reaches the wrong inbox.
              priority: high
              deadlineOffsetDays: 45
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A certified, in-date KYC pack exists for every individual and entity on the family's accounts, with a disclosure log of what went to each bank."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Ask your main bank for its full KYC checklist for each client type"
                - "Gather certified copies of passports and proofs of address"
                - "Collect current trust deeds, registers and structure charts"
                - "Record every expiry date in the pack's index"
                - "Start a log of which documents were sent to which bank"
            - name: Source of wealth narrative
              description: |-
                ## Purpose
                Every bank compliance team wants to understand where the family's money came from, and inconsistent stories across banks are a common trigger for extra scrutiny. A written source of wealth narrative, checked by the family's lawyer and backed by evidence such as sale agreements and tax returns, gives every bank the same clear account.

                ## Milestones
                1. A two to three page narrative covering how the family's wealth was built, generation by generation.
                2. Supporting evidence listed for each major event, such as a business sale or inheritance.
                3. The narrative checked by the family's lawyer for accuracy and consistency.
                4. The same version used for every bank, with a date and version number.
              priority: high
              deadlineOffsetDays: 60
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A dated, lawyer-reviewed source of wealth narrative with an evidence list is on file and is the version supplied to every bank."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "List the main events that created the family's wealth, with dates"
                - "Ask the agent to draft a plain source of wealth narrative from your list"
                - "Match each event to a supporting document"
                - "Ask the family lawyer to check the narrative before any bank sees it"
            - name: Mandate type for every account
              description: |-
                ## Purpose
                Families are often unsure whether an account is execution-only, advisory or discretionary, which matters because it decides who is responsible for each trade and what the bank must tell you. Confirming the mandate on every account, in writing, removes the most common cause of disputes with a bank.

                ## Milestones
                1. The three main mandate types explained in a short note.
                2. Each account's mandate confirmed by the bank in writing.
                3. Any account where the family and the bank disagree on the mandate flagged.
                4. The mandate added to the relationship map against each account.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Every account on the relationship map shows its mandate type, confirmed in writing by the bank."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Write a short note on execution-only, advisory and discretionary mandates"
                - "Ask each bank to confirm the mandate on each account in writing"
                - "Add the mandate type to the relationship map"
                - "Raise any mismatch with the relationship manager"
            - name: Online banking access register
              description: |-
                ## Purpose
                Portal logins and security tokens end up spread across family members, an assistant and the office, and nobody can say who can see or move what. A register of who holds access to each bank portal, at what level, without ever storing the passwords themselves, makes it simple to remove access when someone leaves.

                ## Milestones
                1. Every portal user listed per bank, with view, instruct or approve rights.
                2. Physical tokens and authenticator apps assigned to named people.
                3. Shared logins replaced with individual access where the bank allows it.
                4. A removal step for each bank written into the staff leaving checklist.

                ## Notes
                The register records who has access, never the credentials. Passwords belong in each person's own password manager.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A register lists every portal user and token per bank with access level, no credentials are stored in it, and no shared logins remain."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Ask each bank for a list of portal users on your accounts"
                - "Record each user's access level and token holder"
                - "Request individual logins to replace any shared ones"
                - "Review portal users against the register @recurring(quarterly)"
            - name: KYC refresh calendar across all banks
              description: |-
                ## Purpose
                Banks refresh client files on their own cycles, often every one to three years, and a missed request can freeze an account just before a large payment. A single calendar of when each bank's refresh is due, and when passports and certifications expire, lets the family send documents before being chased.

                ## Milestones
                1. Each bank's last KYC refresh date and usual cycle recorded.
                2. Document expiry dates from the KYC pack added to the same calendar.
                3. A reminder set two months before each refresh or expiry.
                4. No account restricted for missing KYC in the following year.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A calendar shows the next KYC refresh for every bank and every document expiry, and no account is restricted for KYC reasons over twelve months."
                cadence: rolling
              tasks:
                - "Ask each relationship manager when your next KYC review is due"
                - "Enter refresh dates and document expiries in one calendar"
                - "Scan the calendar for refreshes or expiries due in sixty days @recurring(monthly:4)"
                - "Send a refreshed source of wealth and structure chart to each bank @recurring(yearly)"
            - name: Monthly statement check for charges and movements
              description: |-
                ## Purpose
                Unexpected custody fees, a foreign exchange conversion nobody asked for or a payment that was never approved usually show up first on a statement. A short monthly read of every bank and custody statement, against a simple checklist, catches errors while the bank can still reverse them.

                ## Milestones
                1. A one-page checklist of what to look for on each statement.
                2. Statements from every bank arriving in one place each month.
                3. Queries raised with the bank within a week of spotting them.
                4. A running list of queries and outcomes kept for the annual review.

                ## Notes
                This is a check for errors and unauthorised activity, not a performance review. Leave investment returns to the family's consolidated reporting.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every statement is checked each month against the checklist, and each query raised has a recorded outcome."
                cadence: rolling
              tasks:
                - "Write a checklist of fees, conversions and payments to look for"
                - "Route every bank statement to one secure folder"
                - "Read each statement against the checklist @recurring(monthly:9)"
                - "Log each query and the bank's answer"
            - name: Quarterly meeting with each private banker
              description: |-
                ## Purpose
                Bankers who only hear from the family when something goes wrong cannot anticipate what the family needs, and the family hears about rate changes and new rules too late. A short quarterly meeting with a standing agenda keeps service, pricing, KYC and upcoming plans on the table.

                ## Milestones
                1. A standing agenda covering service issues, fees, KYC, credit and upcoming events.
                2. A meeting booked with each main bank every quarter.
                3. Notes and actions recorded and sent back to the banker after each meeting.
                4. Open actions checked at the start of the next meeting.

                ## Notes
                Start from the **Meeting notes** template. Smaller relationships may only need a call twice a year.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Each main bank has met the family at least four times in a year, with written notes and actions on file for every meeting."
                cadence: rolling
              tasks:
                - "Draft a standing agenda for banker meetings"
                - "Hold a review meeting with each main bank @recurring(quarterly)"
                - "Send the banker a written summary of actions after each meeting"
                - "Check open actions before the next meeting"
            - name: Annual service scorecard for each bank
              description: |-
                ## Purpose
                Families tend to stay with a bank long after service has slipped because nobody has the evidence to say so. A yearly scorecard rating each bank on responsiveness, accuracy, pricing, credit and reporting, using the year's query log, turns a vague feeling into a clear keep, fix or replace decision.

                ## Milestones
                1. Five or six scoring criteria agreed by the family.
                2. Each bank scored using the year's query log and meeting notes.
                3. Scores shared with each relationship manager with specific examples.
                4. A keep, fix or replace decision recorded for each bank.

                ## Notes
                Start from the **Vendor** template, one record per bank.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: decision
                success_criteria: "Every bank has a dated annual scorecard against agreed criteria and a recorded keep, fix or replace decision."
                cadence: cyclic
                effort_hours_estimate: "6"
              tasks:
                - "Agree the scoring criteria with the family decision makers"
                - "Score each bank using the query log and meeting notes @recurring(yearly)"
                - "Share each scorecard with the relationship manager"
                - "Record a keep, fix or replace decision per bank"
            - name: Fee schedule register and quarterly fee check
              description: |-
                ## Purpose
                Custody fees, transaction charges, foreign exchange spreads, account fees and minimum charges are spread across tariff sheets, side letters and footnotes. One register of what each bank has agreed to charge, checked each quarter against what was actually debited, is the only reliable way to know the true cost.

                ## Milestones
                1. Current tariff sheets and any negotiated side letters collected from every bank.
                2. Agreed rates entered in one register per bank and account.
                3. Actual charges for the quarter compared with the agreed rates.
                4. Overcharges claimed back and the outcome recorded.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A fee register holds the agreed rates for every account, and each quarter's actual charges have been checked against it with any overcharges claimed."
                cadence: rolling
              tasks:
                - "Request each bank's current tariff sheet and any side letters"
                - "Enter agreed rates per account in the register"
                - "Compare the quarter's charges with the agreed rates @recurring(quarterly)"
                - "Claim back any overcharge in writing"
            - name: Corporate actions and proxy instruction routine
              description: |-
                ## Purpose
                Custodians send notices of rights issues, tender offers, elections and shareholder votes with short deadlines, and an unanswered notice usually means the default option is applied. A clear routine for who reads these notices and who decides keeps the family from losing value or votes by silence.

                ## Milestones
                1. Each custodian's corporate action notices routed to one named person.
                2. A rule agreed on which notices go to the investment adviser and which to the family.
                3. Instruction deadlines tracked so none passes unanswered.
                4. A log of every notice, the decision and the instruction sent.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every corporate action notice for a year is logged with a decision and instruction before its deadline, and none was missed."
                cadence: rolling
              tasks:
                - "Ask each custodian where corporate action notices are sent today"
                - "Route all notices to one named person"
                - "Agree which notices the adviser decides and which the family decides"
                - "Review the notice log for open deadlines @recurring(monthly:14)"
            - name: Deposit rates and cash sweep terms check
              description: |-
                ## Purpose
                Large cash balances often sit in current accounts earning far less than the bank pays on its own money market or deposit products, and the difference is pure margin for the bank. Checking each quarter what every bank pays on cash, and what sweep options exist, puts that margin back in front of the family.

                ## Milestones
                1. The rate paid on cash at every bank and in every currency recorded.
                2. Each bank's sweep and term deposit options listed.
                3. Rates compared across banks in the same currency.
                4. Any bank paying well below the others asked to explain or improve.

                ## Notes
                This is about the price each bank pays, not how much cash to hold. The family's liquidity plan sets the amounts.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A quarterly table compares cash rates and sweep terms across every bank and currency, and each outlier has been raised with its bank."
                cadence: rolling
              tasks:
                - "Ask each bank what it pays on cash in each currency"
                - "List the sweep and term deposit options each bank offers"
                - "Compare cash rates across banks @recurring(quarterly)"
                - "Raise any low rate with the relationship manager"
            - name: Signatory change routine for joiners and leavers
              description: |-
                ## Purpose
                Every bank needs a fresh mandate when a controller leaves the office, a trustee is replaced or a child reaches adulthood, and the changes rarely happen on the same day. A standard routine, with a checklist per bank and a confirmation step, means authority moves cleanly and nobody is left signing after they should have stopped.

                ## Milestones
                1. A checklist of documents each bank needs to add or remove a signatory.
                2. A named person who runs the routine for every change.
                3. Written confirmation from each bank filed after each change.
                4. The signatory register updated within a week of each confirmation.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: artifact
                success_criteria: "A written signatory change checklist exists for every bank, and each change in the year has a bank confirmation on file."
                cadence: rolling
              tasks:
                - "Ask each bank what it needs to add or remove a signatory"
                - "Write one checklist covering every bank"
                - "Name the person who runs each signatory change"
                - "File each bank's confirmation and update the register"
            - name: Bank request and service issue log
              description: |-
                ## Purpose
                A payment chased three times, a statement that never arrived, a tax certificate promised for weeks: without a log, each looks like a one-off. Recording every request and its turnaround gives the family evidence for the quarterly meetings and the annual scorecard.

                ## Milestones
                1. A simple log with bank, request, date raised, date resolved and notes.
                2. Every significant request to any bank entered.
                3. Open items reviewed every week.
                4. Average turnaround per bank calculated for the annual scorecard.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every significant request to a bank over a year is logged with dates, and turnaround per bank is available for the annual review."
                cadence: rolling
              tasks:
                - "Set up a request log with bank, request and dates"
                - "Enter every open request you are waiting on today"
                - "Chase or close open requests in the log @recurring(weekly:fri)"
                - "Work out average turnaround per bank before the scorecard"
            - name: Annual tax document collection from every bank
              description: |-
                ## Purpose
                Tax advisers need year-end statements, interest and dividend summaries, withholding tax certificates and realised gains reports from every bank, and the last one to arrive sets the filing date. Requesting them all in January, and tracking what has arrived, keeps the family's returns on time.

                ## Milestones
                1. A list of the tax documents each bank produces and when.
                2. Requests sent to every bank early in the new year.
                3. A tracker showing what has arrived and what is outstanding.
                4. A complete pack handed to the tax adviser by an agreed date.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: deliverable
                success_criteria: "A complete set of year-end tax documents from every bank reaches the tax adviser by the agreed date each year."
                cadence: cyclic
                effort_hours_estimate: "4"
              tasks:
                - "Ask your tax adviser which bank documents they need each year"
                - "Request year-end tax packs from every bank @recurring(yearly)"
                - "Track which packs have arrived"
                - "Send the full set to the tax adviser"
            - name: How a private bank earns money from the family
              description: |-
                ## Purpose
                The visible fees are often the smaller part of a private bank's income from a family: foreign exchange spreads, retrocessions from funds, margins on structured products and the gap between deposit and lending rates add up. Learning where the money is made lets you ask sharper questions without needing to accuse anyone.

                ## Milestones
                1. The main revenue sources of a private bank listed in a short note.
                2. Each source matched to whether the family is exposed to it.
                3. Three questions on hidden costs prepared for the next banker meeting.
                4. The banker's answers recorded.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A note lists the bank revenue sources the family is exposed to, with the banker's written answers to the family's cost questions."
                cadence: phased
                effort_hours_estimate: "5"
              tasks:
                - "Read an industry guide on private bank revenue sources"
                - "Mark which sources apply to the family's accounts"
                - "Prepare three questions on indirect costs"
                - "Ask the questions at the next banker meeting and record the answers"
            - name: Reading a custody statement line by line
              description: |-
                ## Purpose
                Custody statements mix trade date and settlement date, accrued interest, pending corporate actions and positions held at sub-custodians, and few family members are ever shown how to read one. One guided session with each custodian's statement, and a cheat sheet, makes the monthly check meaningful.

                ## Milestones
                1. A walkthrough of a real statement with the custodian's service team.
                2. A one-page cheat sheet explaining each section and column.
                3. Common confusions noted, such as pending settlements or accruals.
                4. At least two family members able to read a statement unaided.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A cheat sheet for each custodian's statement exists and two family members have each read a full statement without help."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Ask the custodian's service team for a statement walkthrough"
                - "Write a one-page cheat sheet from the session"
                - "Note the parts of the statement that caused confusion"
                - "Have a second family member read a statement with the cheat sheet"
            - name: What happens if a bank or custodian fails
              description: |-
                ## Purpose
                The collapse of a bank or a broker is rare but not unheard of, and recovery for clients has taken months or years where records were poor. Knowing how client assets, cash deposits and pledged securities are treated in an insolvency, and what records speed recovery, is part of choosing and sizing relationships.

                ## Milestones
                1. A short note on how custody assets, cash and pledged assets are treated in a failure.
                2. The family's own records needed to prove ownership listed.
                3. Each custodian asked how it protects client assets and where that is documented.
                4. Gaps in the family's records closed.

                ## Notes
                Insolvency rules differ by country and booking centre. Ask the family's lawyer to confirm how they apply to your accounts.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A written note on failure scenarios per booking centre exists, checked by the family's lawyer, and the family holds its own ownership records for every account."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Read a plain guide to client asset protection in bank failures"
                - "List the records the family would need to prove ownership"
                - "Ask each custodian where its client asset protections are documented"
                - "Ask the family lawyer to review the note"
            - name: Securities-backed lending explained
              description: |-
                ## Purpose
                Lombard loans and other securities-backed credit are among the most common products private banks offer, and also where families get hurt in a falling market. Learning how loan-to-value ratios, haircuts, margin calls and forced sales work comes before any decision to borrow.

                ## Milestones
                1. Loan-to-value, haircut, margin call and close-out explained in a short note.
                2. A worked example of what a market fall would mean for a loan.
                3. The bank's lending values for the family's main holdings requested.
                4. Questions for the bank and the family's adviser written down.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A short note with a worked market-fall example explains how the bank's securities-backed lending works, with the bank's lending values attached."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Read the bank's own guide to securities-backed lending"
                - "Work through a market-fall example with your adviser"
                - "Ask the bank for lending values on your main holdings"
                - "Write down the questions you still have"
            - name: Foreign exchange pricing and how to test it
              description: |-
                ## Purpose
                Anyone moving money between currencies for school fees, property or capital calls can pay a wide spread without seeing it, because the rate is shown but the margin is not. Learning how to compare an executed rate with the market rate at the time shows whether the bank's pricing is fair.

                ## Milestones
                1. The way the bank prices foreign exchange explained in a short note.
                2. The last five conversions compared with the market rate at the time of execution.
                3. The average margin paid calculated.
                4. A request for better pricing or a quote process agreed with the bank.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "The margin paid on the last five currency conversions is calculated, and an improved pricing or quote process is agreed with the bank in writing."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Find the last five currency conversions on your statements"
                - "Compare each rate with the market rate at that time"
                - "Calculate the average margin you paid"
                - "Ask the bank for tighter pricing or a quote before each trade"
            - name: Why banks exit clients and how to stay bankable
              description: |-
                ## Purpose
                Banks close relationships they see as too complex, too risky or too small for the compliance effort, and families with structures in several countries or links to higher-risk regions are often affected. Understanding what makes a relationship look risky to a compliance team helps the family keep its affairs simple to explain.

                ## Milestones
                1. The common reasons banks exit clients listed in a short note.
                2. The family's own features that might raise compliance questions identified.
                3. Simple fixes noted, such as clearer structure charts or closing unused entities.
                4. The fixes discussed with the family's lawyer.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A note names the features of the family's affairs that could worry a bank's compliance team, with agreed fixes and a lawyer's comments."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Read a recent industry report on bank de-risking"
                - "List features of the family's affairs a compliance team might question"
                - "Note simple fixes for each feature"
                - "Discuss the fixes with the family's lawyer"
            - name: Right number of banking relationships
              description: |-
                ## Purpose
                One bank concentrates risk and leaves the family with no bargaining power; eight banks multiply KYC, fees and reporting work. Deciding on a target number, and which roles each kept bank plays, gives every later keep or close decision a frame.

                ## Milestones
                1. The costs and benefits of the current number of relationships written down.
                2. Roles the family needs covered, such as custody, credit, local payments and a standby bank.
                3. A target number of relationships agreed.
                4. A list of banks to keep, merge or close, with reasons.
              priority: medium
              deadlineOffsetDays: 120
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A recorded family decision sets a target number of banks and lists each current bank as keep, merge or close with a reason."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Count the hours spent each year on KYC and reporting per bank"
                - "List the banking roles the family needs covered"
                - "Propose a target number of banks to the decision makers"
                - "Record the keep, merge or close decision for each bank"
            - name: Fee negotiation with a private bank
              description: |-
                ## Purpose
                Private bank pricing is negotiable for families with meaningful assets, but few ask, and published tariffs are a starting point. A prepared negotiation, armed with the fee register, the scorecard and a competing quote, often reduces custody, transaction and foreign exchange costs.

                ## Milestones
                1. Total annual cost per bank calculated from the fee register.
                2. At least one competing indication of pricing from another bank.
                3. A written request for revised pricing sent to the relationship manager.
                4. The agreed rates confirmed in a side letter and added to the register.
              priority: medium
              deadlineOffsetDays: 90
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "Revised pricing is confirmed in writing by at least one bank and entered in the fee register, or the reason it was refused is recorded."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Total last year's charges for the bank from the fee register"
                - "Ask another bank for an indicative price on a similar mandate"
                - "Send a written request for revised pricing"
                - "File the confirmed rates as a side letter"
            - name: Committed credit line for the family
              description: |-
                ## Purpose
                Families often need short-term cash for a property completion, a tax bill or a capital call without selling investments at the wrong moment. Arranging a credit facility in calm times, with terms reviewed by the family's lawyer, is cheaper and safer than asking for one in a hurry.

                ## Milestones
                1. The purposes and rough size of a facility agreed with the family's advisers.
                2. Indicative terms obtained from two banks.
                3. The facility agreement reviewed by the family's lawyer.
                4. The facility in place, with its renewal date and conditions recorded.

                ## Notes
                Whether to borrow at all is a decision for the family with its advisers. This project is about having good terms ready, not using them.
              priority: high
              deadlineOffsetDays: 120
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A credit facility with lawyer-reviewed terms is in place, or a recorded decision not to have one exists, with renewal date noted."
                cadence: one-shot
                effort_hours_estimate: "10"
              tasks:
                - "Write down what a facility would be used for and roughly how much"
                - "Request indicative terms from two banks"
                - "Send the draft facility agreement to the family lawyer"
                - "Check the facility's renewal date and terms @recurring(yearly)"
            - name: Margin call protocol for securities-backed loans
              description: |-
                ## Purpose
                Margin calls can arrive overnight with a short deadline, and a family that has not agreed who decides may find the bank selling assets on its behalf. A written protocol for watching loan-to-value and responding to a call keeps the decision with the family.

                ## Milestones
                1. The bank's margin call and close-out terms summarised in plain words.
                2. A loan-to-value warning level agreed below the bank's call level.
                3. A named decision maker and deputy for any call.
                4. Options for meeting a call listed in order, such as cash, extra collateral or partial repayment.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A written margin call protocol names decision makers, a warning level and response options, and loan-to-value is checked every month."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Summarise the facility's margin call and close-out terms"
                - "Agree a warning level with the family's adviser"
                - "Name a decision maker and deputy for margin calls"
                - "Check current loan-to-value against the warning level @recurring(monthly:21)"
            - name: Global custodian or private bank custody
              description: |-
                ## Purpose
                Larger, multi-manager family portfolios are sometimes moved to a global custodian, with several managers trading on the one account, rather than held at each manager's own bank. Comparing the two models on cost, reporting, independence and service shows whether a change is worth the effort.

                ## Milestones
                1. The family's current custody arrangement described.
                2. Two or three providers of each model asked for an indication.
                3. Costs, reporting quality and switching effort compared side by side.
                4. A recorded decision, with reasons, to stay or change.

                ## Notes
                Start from the **Purchase decision** template. Global custody usually suits larger, more complex portfolios; the family's adviser can say whether yours is one.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A side-by-side comparison of custody models with indicative costs exists and the family's decision to stay or change is recorded with reasons."
                cadence: phased
                effort_hours_estimate: "12"
              tasks:
                - "Describe how custody is arranged across the family today"
                - "Ask two global custodians for an indicative proposal"
                - "Compare cost, reporting and switching effort side by side"
                - "Record the decision and reasons"
            - name: Retrocession and product conflict disclosure request
              description: |-
                ## Purpose
                Some banks receive payments from fund houses or product issuers for placing client money, and those payments are not always obvious on a statement. Asking each bank in writing to disclose any such payments on the family's accounts, and how conflicts are managed, puts the answer on record.

                ## Milestones
                1. A standard written request drafted for every bank.
                2. Replies received from each bank.
                3. Any payments disclosed recorded against the relevant accounts.
                4. Follow-up agreed where payments are not passed back to the family.
              priority: low
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "Every bank has replied in writing on third-party payments and conflicts, and each disclosed payment has a recorded follow-up."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Draft one written request on third-party payments and conflicts"
                - "Send it to every bank"
                - "Record each disclosed payment against its account"
                - "Ask whether disclosed payments can be passed back to the family"
            - name: Request for proposal to replace a bank
              description: |-
                ## Purpose
                When the scorecard says a bank should go, families often move to whichever competitor took them to lunch. A short, structured request for proposal to three banks, using the same questions and scoring, gives a defensible choice and a better price.

                ## Milestones
                1. A request for proposal covering services, pricing, credit, reporting and onboarding.
                2. Three banks invited and replies received.
                3. Replies scored on the same criteria as the annual scorecard.
                4. A preferred bank chosen and the reasons recorded.
              priority: medium
              deadlineOffsetDays: 150
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "Three banks have answered the same written request for proposal, each is scored, and the chosen bank and reasons are recorded."
                cadence: phased
                effort_hours_estimate: "15"
              tasks:
                - "Write a request for proposal with the family's needs and questions"
                - "Invite three banks to respond"
                - "Score each reply against the annual scorecard criteria"
                - "Record the chosen bank and the reasons"
            - name: Moving custody with an in-specie transfer plan
              description: |-
                ## Purpose
                Selling everything to move banks can trigger taxes and costs, so most switches move securities in kind, which takes weeks and fails quietly if one holding cannot be held by the new custodian. A written transfer plan, holding by holding, keeps the move under control.

                ## Milestones
                1. Every holding checked for whether the new custodian can hold it.
                2. Holdings that cannot move identified, with an agreed alternative.
                3. Transfer instructions signed and a timetable agreed with both banks.
                4. Each holding confirmed as received, and the old account closed.

                ## Notes
                Ask the tax adviser before selling anything that cannot be transferred. Keep the old account open until the final holding and any trailing income have arrived.
              priority: high
              deadlineOffsetDays: 180
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "Every holding has been received at the new custodian or dealt with by an agreed alternative, and the old account is closed with a final statement."
                cadence: phased
                effort_hours_estimate: "20"
              tasks:
                - "List every holding to be transferred"
                - "Ask the new custodian to confirm which holdings it can accept"
                - "Agree a transfer timetable with both banks"
                - "Tick off each holding as received"
                - "Close the old account once trailing income has arrived"
            - name: Closing dormant and unused accounts cleanly
              description: |-
                ## Purpose
                Old accounts with small balances still need KYC refreshes, still appear in tax reporting and can be taken over by fraudsters if nobody watches them. Closing them properly, with a final statement on file, cuts the paperwork every year after.

                ## Milestones
                1. Dormant and unused accounts listed from the relationship map.
                2. Each one confirmed as safe to close with the accountant.
                3. Closure instructions sent and balances moved to a kept account.
                4. Final statements and closure letters filed.
              priority: low
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "Every account marked for closure has a closure letter and final statement on file, and the relationship map is updated."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "List accounts with no activity in the past year"
                - "Check with the accountant that each can be closed"
                - "Send closure instructions with a destination account"
                - "File each closure letter and final statement"
            - name: Onboarding with a new private bank
              description: |-
                ## Purpose
                Opening a private bank relationship for a family with trusts and companies can take two to four months and dozens of documents. Treating it as a planned project, with one coordinator, the KYC pack and a target date, avoids the restarts that come from piecemeal answers.

                ## Milestones
                1. The bank's full onboarding checklist received for every individual and entity.
                2. Documents sent from the KYC pack and logged.
                3. Account opening forms, mandates and signatories completed.
                4. Accounts open, a test payment made and the relationship map updated.

                ## Notes
                Start from the **Onboarding plan** template.
              priority: medium
              deadlineOffsetDays: 90
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "Accounts at the new bank are open, mandates confirmed, a test payment completed and the relationship map updated, by the target date."
                cadence: phased
                effort_hours_estimate: "15"
              tasks:
                - "Ask the new bank for its full onboarding checklist"
                - "Name one coordinator for the onboarding"
                - "Send documents from the KYC pack and log each one"
                - "Make a small test payment once the accounts are open"
            - name: When the relationship manager leaves
              description: |-
                ## Purpose
                Bankers move, and departing bankers sometimes try to take clients with them while the bank assigns a stranger. Having a plan for that week, from meeting the replacement to deciding whether to follow the banker, keeps the relationship tied to the family's interests rather than to one person.

                ## Milestones
                1. A meeting held with the incoming relationship manager within a month.
                2. The new banker briefed with the relationship map, purpose and open issues.
                3. Any approach from the departing banker considered against the family's criteria.
                4. A recorded decision to stay, test the market or follow.
              priority: medium
              frontmatter:
                mode: event
                output_kind: decision
                success_criteria: "Within two months of a banker leaving, the replacement has been met and briefed, and a decision to stay or move is recorded."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Ask the bank who will take over and when you can meet them"
                - "Prepare a briefing with the relationship map and open issues"
                - "Weigh any offer from the departing banker against the scorecard"
                - "Record whether the family stays, tests the market or moves"
            - name: Responding to an account exit letter
              description: |-
                ## Purpose
                Few letters from a bank are as disruptive as one giving thirty or sixty days to move all assets, and families often lose time trying to change the bank's mind. A prepared response, with a standby bank and a transfer plan ready, turns it into a managed move.

                ## Milestones
                1. The deadline and the bank's stated reasons recorded.
                2. The family's lawyer consulted on any obligations or requests to extend.
                3. A receiving bank confirmed and onboarding started.
                4. All assets transferred before the deadline and the exit confirmed in writing.

                ## Notes
                Banks rarely explain their reasons in detail. Ask once, politely, then spend the time on the move.
              priority: high
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "All assets have moved to a receiving bank before the exit deadline, with written confirmation from the exiting bank."
                cadence: one-shot
                effort_hours_estimate: "15"
              tasks:
                - "Record the exit deadline and the reasons given"
                - "Ask the family lawyer whether to request an extension"
                - "Start onboarding with the standby or preferred bank"
                - "Track each transfer until the old accounts are empty"
            - name: Annual banking review for the family
              description: |-
                ## Purpose
                Once a year the people who make family decisions should see the whole banking picture in one sitting: the map, the scorecards, total costs, exposure and any planned changes. A short annual review keeps the banks a family decision rather than something only one person understands.

                ## Milestones
                1. A short pack with the map, scorecards, total costs and exposure.
                2. The pack sent to decision makers a week before the meeting.
                3. Decisions on keeps, closures, negotiations and credit recorded.
                4. Actions assigned with owners and dates.
              priority: medium
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "An annual banking review meeting has taken place with a written pack, and its decisions and owners are recorded in the minutes."
                cadence: cyclic
                effort_hours_estimate: "6"
              tasks:
                - "Ask the agent to assemble the review pack from the scorecards and fee register"
                - "Send the pack to decision makers a week before"
                - "Hold the annual banking review @recurring(yearly)"
                - "Record decisions and owners in the minutes"
            - name: Bank merger or sale affecting the family's accounts
              description: |-
                ## Purpose
                When a private bank is sold or merged, account numbers, booking centres, fees, staff and terms can all change, sometimes with little notice. Reviewing what the change means for each account, and whether the new owner still fits the family, avoids being carried along by default.

                ## Milestones
                1. The announced changes to accounts, terms and booking centres summarised.
                2. New terms compared with the current fee register and agreements.
                3. The family's lawyer asked about any change in legal counterparty.
                4. A recorded decision to stay or move.
              priority: low
              frontmatter:
                mode: event
                output_kind: decision
                success_criteria: "A written summary of how the merger changes each account exists, and the family's decision to stay or move is recorded."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Collect every notice the bank has sent about the merger"
                - "Compare the new terms with your current agreements"
                - "Ask the lawyer whether your legal counterparty changes"
                - "Record the decision to stay or move"
            - name: Simplifying banking in retirement
              description: |-
                ## Purpose
                Retirees who built up banks over a working life often want fewer statements, fewer KYC requests and arrangements their children could pick up easily. Reducing to a small number of well-understood relationships, with clear mandates and someone briefed to step in, makes later life and eventual estate administration far easier.

                ## Milestones
                1. The relationships the retiree wants to keep agreed.
                2. Others closed or merged in a planned order.
                3. Mandates and portal access simplified on the kept accounts.
                4. A trusted family member or adviser briefed on every remaining bank.
              priority: medium
              deadlineOffsetDays: 180
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "The retiree's banking is reduced to an agreed short list of relationships, and a named person has been briefed on each remaining bank."
                cadence: phased
                effort_hours_estimate: "12"
              tasks:
                - "Choose which banks to keep and why"
                - "Plan the order in which other accounts close or merge"
                - "Simplify mandates and portal access on the kept accounts"
                - "Brief a trusted person on each remaining bank"
            - name: Introducing adult children to the family's bankers
              description: |-
                ## Purpose
                Children who first meet the family's bankers after a parent's death start at a disadvantage, unsure who to trust or how the accounts work. A planned introduction, while parents are well, lets young adults meet the bankers, open their own accounts if the family wishes and learn how instructions and statements work.

                ## Milestones
                1. The parents agree which children to introduce and what they may see.
                2. A meeting held with each main banker and the children.
                3. Each child shown how statements, instructions and security checks work.
                4. Any accounts for the children opened with clear mandates.

                ## Notes
                Agree in advance what level of detail about family assets is shared. An introduction can be useful without revealing every balance.
              priority: low
              frontmatter:
                mode: service
                output_kind: event-completion
                success_criteria: "Each adult child has met the main bankers, understands how statements and instructions work, and any accounts for them are open with recorded mandates."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Agree with your partner which children to introduce and what to share"
                - "Ask each main banker for an introductory meeting"
                - "Walk each child through a statement and the instruction process"
                - "Open any accounts for the children with clear mandates"
            - name: Bank accounts after a death in the family
              description: |-
                ## Purpose
                When an account holder or signatory dies, banks freeze or restrict accounts, ask for death certificates and grants of representation, and may handle joint and trust accounts differently. Knowing in advance what each bank will need, and keeping the relationship map current, saves executors and grieving relatives months.

                ## Milestones
                1. Each bank's bereavement process and document list obtained.
                2. Accounts marked as personal, joint, company or trust on the relationship map.
                3. Executors told where the relationship map and KYC pack are kept.
                4. After a death, each bank notified and its process tracked to completion.

                ## Notes
                Joint, company and trust accounts usually follow different rules from personal ones. The executors' lawyer confirms what applies.
              priority: high
              frontmatter:
                mode: service
                output_kind: knowledge
                success_criteria: "Each bank's bereavement document list is on file, executors know where to find it, and accounts are marked by ownership type on the relationship map."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Ask each bank for its bereavement process and document list"
                - "Mark each account as personal, joint, company or trust"
                - "Tell the executors where the map and bereavement lists are kept"
                - "Notify each bank and track progress after a death"
            - name: Notifying banks of a family member's move abroad
              description: |-
                ## Purpose
                A child moving to study abroad or a parent retiring to another country changes tax residence, address and sometimes what products a bank may offer them. Telling each bank properly, with updated self-certifications and addresses, avoids blocked accounts and services the bank can no longer legally provide.

                ## Milestones
                1. The banks holding accounts for the moving family member listed.
                2. Each bank asked what it needs and whether it can still serve the new country.
                3. New address and tax residence forms sent.
                4. Accounts the bank can no longer serve moved or closed.

                ## Notes
                Whether the move changes tax residence is a question for advisers in both countries. This project is about telling the banks once the answer is known.
              priority: medium
              frontmatter:
                mode: service
                output_kind: deliverable
                success_criteria: "Every bank serving the family member has the new address and tax residence details on file, and any account it cannot serve has been moved or closed."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "List every bank that holds an account for the person moving"
                - "Ask each bank whether it can serve clients in the new country"
                - "Send updated address and tax residence forms"
                - "Move or close any account the bank can no longer serve"
            - name: Powers of attorney at each bank for an ageing parent
              description: |-
                ## Purpose
                Powers of attorney are only useful at a bank once that bank has accepted and registered them, and some banks have their own forms or refuse documents from another country. Registering the family's powers of attorney while the parent is well means payments and decisions can continue if capacity is lost.

                ## Milestones
                1. Each bank's rules for accepting powers of attorney obtained.
                2. The parent's power of attorney checked by the family lawyer for each country.
                3. The power of attorney registered with every bank, or the bank's own form completed.
                4. Attorneys given the contact sheet and instruction process for each bank.
              priority: medium
              deadlineOffsetDays: 60
              frontmatter:
                mode: service
                output_kind: deliverable
                success_criteria: "Every bank holding the parent's accounts has registered a power of attorney or its own equivalent mandate, confirmed in writing."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Ask each bank how it accepts powers of attorney"
                - "Have the family lawyer check the documents for each country"
                - "Register the power of attorney with every bank"
                - "Confirm each registration is still on file @recurring(yearly)"
            - name: Caribbean family banking across local and international banks
              description: |-
                ## Purpose
                Caribbean families often bank locally for daily life and the family business, and internationally for custody and other currencies, while correspondent banking pressure on the region makes cross-border payments slower and KYC heavier. Mapping which payments go through which banks, and keeping documents ready for both, prevents delays on school fees, property and business transfers.

                ## Milestones
                1. Local and international banks listed with what each is used for.
                2. Regular cross-border payment routes mapped, with typical delays.
                3. The extra documents local banks ask for on outgoing transfers noted.
                4. A backup route for essential payments agreed.

                ## Notes
                Rules on foreign currency and outgoing transfers vary across the region, for example between Trinidad and Tobago, Jamaica and Barbados. Confirm the current position with each bank.
              priority: medium
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A map of the family's local and international banks and payment routes exists, with typical delays, document needs and a backup route for essential payments."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "List each local and international bank and its job"
                - "Map the regular cross-border payments and how long they take"
                - "Ask local banks what documents they need for outgoing transfers"
                - "Agree a backup route for school fees and other essential payments"
            - name: Standby bank ready to use
              description: |-
                ## Purpose
                If a main bank freezes an account, sends an exit letter or suffers an outage, the family needs somewhere to receive and send money within days, not months. Keeping a second, fully onboarded relationship with a small balance, and testing it each year, is cheap insurance.

                ## Milestones
                1. A standby bank chosen from existing or new relationships.
                2. Accounts open and KYC current for the key individuals and entities.
                3. Payment instructions and signatories tested with a small transfer.
                4. The standby's role written into the relationship map.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A standby bank has open accounts with current KYC, and a test transfer has succeeded within the last twelve months."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Pick a standby bank from the family's current or shortlisted banks"
                - "Confirm KYC is current for the key people and entities"
                - "Send a test payment in and out of the standby account @recurring(yearly)"
                - "Note the standby's role on the relationship map"
            - name: Bank relationships held by trusts and companies
              description: |-
                ## Purpose
                Accounts held by trusts, foundations and holding companies are opened and run by trustees and directors, so the family can lose sight of fees, service and signatories. Agreeing what the trustees and directors report about these bank relationships keeps them in the same disciplined routine as personal accounts.

                ## Milestones
                1. Every structure's bank accounts listed with the trustee or director who runs them.
                2. A yearly reporting request agreed covering fees, signatories and service.
                3. Structure accounts included in the annual banking review.
                4. Any concern raised with the trustee in writing.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: knowledge
                success_criteria: "Each trustee or director has supplied a yearly report on fees, signatories and service for the structure's bank accounts."
                cadence: cyclic
                effort_hours_estimate: "4"
              tasks:
                - "List each structure's bank accounts and who runs them"
                - "Agree a yearly bank report with each trustee and director"
                - "Request the yearly bank report from each trustee @recurring(yearly)"
                - "Add structure accounts to the annual banking review"
            - name: Pledged assets and cross-collateral review
              description: |-
                ## Purpose
                Credit agreements often include general pledges and set-off clauses that let a bank use any asset it holds, in any account, as security, not just the portfolio the family had in mind. Reading every pledge and guarantee, with the lawyer, shows exactly which assets are tied up and where.

                ## Milestones
                1. Every pledge, guarantee and set-off clause across the banks collected.
                2. Assets subject to each pledge listed per bank and account.
                3. The family lawyer's summary of what each bank could claim.
                4. Unneeded pledges released or narrowed in writing.
              priority: low
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A lawyer-reviewed list shows which assets each bank holds security over, and any unneeded pledge has been released in writing."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Collect every pledge, guarantee and credit agreement"
                - "List the assets each pledge covers"
                - "Ask the family lawyer what each bank could claim"
                - "Request release of any pledge no longer needed"
            - name: Securities lending by the custodian
              description: |-
                ## Purpose
                Some custody agreements allow the custodian to lend the family's securities to other market participants for a fee, which brings extra risk and can affect voting. Finding out whether this happens on each account, and on what terms, lets the family choose to opt in or out deliberately.

                ## Milestones
                1. Each custody agreement checked for securities lending terms.
                2. Each custodian asked whether lending is active and how income is shared.
                3. Collateral and indemnity terms summarised.
                4. A recorded opt in or opt out decision for each account.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "Every custody account has a recorded decision on securities lending, based on written answers from the custodian on terms and income."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Search each custody agreement for securities lending terms"
                - "Ask each custodian whether lending is active on your accounts"
                - "Summarise collateral, indemnity and income share"
                - "Confirm the lending decision is still right @recurring(yearly)"
---

# Bank and Custodian Relationships

This area is for the parent or retiree whose family money sits with several private banks and custodians, and who wants those relationships to work for the family rather than the other way round. It starts with foundations (a map of every account, the signatories, the reason each bank exists, counterparty exposure and a KYC pack that is always ready), moves through the operating routine that keeps banks honest, the knowledge that lets you read a custody statement and spot how a bank earns its money, then the decisions on fees, credit lines, the right number of banks and switching, the events that test a relationship, situations such as a bereavement or an ageing parent, and specialist work on trust accounts, pledged assets and a standby bank.

What repeats is a weekly look at open requests, a monthly statement check and expiry scan, a quarterly banker meeting with fee and deposit rate checks, and a yearly cycle of scorecards, KYC refreshes, tax packs and credit line renewals. The Risk register, Meeting notes, Vendor, Purchase decision and Onboarding plan templates pair with counterparty exposure, banker meetings, service reviews, the custody model choice and opening a new bank. None of this is investment, tax or legal advice: take those calls to the family's own independent advisers. Installing adds all 50 projects as active, so archive the ones that are not for you yet.
