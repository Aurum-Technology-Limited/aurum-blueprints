---
id: fundraising-investors.investor-tax-relief-schemes
name: Investor Tax Relief Schemes
description: "Investor tax relief handled properly: eligibility checks, advance opinions, qualifying shares, compliance statements and certificates, and the monitoring that keeps angels' relief safe for years."
category: business
version: 1.0.0
tags: [fundraising-investors, investor-tax-relief-schemes, founder, small-business, tax-relief, advance-assurance, seis-eis, qsbs]
author: Aurum Technology
starter_structure:
  templates:
    - vendor
    - compliance-control
    - risk-register
    - remediation-plan
  pillars:
    - name: Fundraising & Investor Relations
      emoji: "💰"
      description: "Raising capital and keeping investors informed: rounds from pre-seed to growth, grants and debt, the data room, cap table, investor updates, board reporting and exits."
      pillarFrontmatter:
        review_cadence: quarterly
      areas:
        - name: Investor Tax Relief Schemes
          description: "Qualifying for and using investor tax relief schemes that make early-stage shares more attractive to angels and funds."
          projects:
            - name: Map of the investor relief schemes open to you
              description: |-
                ## Purpose
                Most countries that run investor tax reliefs have more than one: a seed scheme for the very first money, a main scheme for larger rounds, fund-based routes and sometimes regional credits, each with its own conditions. Writing down which ones exist where your company and your investors pay tax, with a line on what each gives the investor, is the starting point for every later decision in this area. Examples include SEIS and EIS in the UK, qualified small business stock in the US, ESIC status in Australia and EIIS in Ireland.

                ## Milestones
                1. A list of every investor relief scheme in the company's country, with the official guidance page saved for each.
                2. For each scheme, one line on what the investor receives: income tax relief, a gains exemption, deferral or loss relief.
                3. The two or three schemes that could plausibly apply to your company marked.
                4. Any state, provincial or regional credit for angels where you are based noted.

                ## Notes
                Use the tax authority's own pages and your adviser for the conditions. Blog summaries go out of date quickly, and limits change in budgets.
              priority: high
              deadlineOffsetDays: 14
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A written map of the investor relief schemes in your country, each with an official guidance link and a note of what it gives investors, with your likely schemes marked."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Search the tax authority's website for investor and venture tax relief schemes"
                - "Save the official guidance page for each scheme in one folder"
                - "Write one line per scheme on what the investor receives"
                - "Mark the schemes your company could plausibly qualify for"
                - "Note any regional angel credit that exists where the company is based"
            - name: Deciding whether investor relief is worth pursuing
              description: |-
                ## Purpose
                Relief makes shares more attractive to individual angels, and in some markets many angels will not invest without it, but it also brings adviser fees, paperwork and limits on how the company can change for several years. Weighing those costs against who you are likely to raise from, before you promise relief to anyone, avoids a half-finished application and disappointed investors.

                ## Milestones
                1. Your likely investor mix written down: individuals who pay tax locally, funds, overseas investors and corporates.
                2. A rough count of target angels who have said relief matters to their decision.
                3. The costs listed: adviser fees, founder time and restrictions on trade, share rights and exits.
                4. A recorded decision to pursue relief, defer it or skip it, with the reason.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A written decision on whether to pursue investor relief for the next round, citing the expected investor mix and the costs involved."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "List the investors you expect to approach and where each pays tax"
                - "Ask five target angels whether relief affects their decision to invest"
                - "Get an indicative fee quote for relief work from one adviser"
                - "Record the decision to pursue, defer or skip relief and the reason"
                - "Revisit the relief decision ahead of the next planned round @recurring(yearly)"
            - name: Company eligibility check against scheme conditions
              description: |-
                ## Purpose
                Eligibility usually turns on the company itself: how old it is or how long it has traded, its gross assets and headcount, whether it is independent of other companies, where it has a permanent establishment and whether its trade is excluded. Running through each condition against your own facts, with the evidence beside it, shows early whether the company qualifies or what would need to change.

                ## Milestones
                1. A table of every company-level condition for your chosen scheme, copied from official guidance.
                2. Your company's position against each condition, with the source document noted.
                3. Any condition that is borderline or failed flagged for the adviser.
                4. The completed table reviewed and annotated by your tax adviser.

                ## Notes
                Many tests are measured immediately before and after the share issue, and across the whole group rather than only the parent company.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: research
                output_kind: artifact
                success_criteria: "A condition-by-condition eligibility table for your chosen scheme, with evidence for each line and a review note from your adviser."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Copy each company-level condition from the official guidance into a table"
                - "Fill in the company's position and source document for each condition"
                - "Flag any borderline condition for your adviser"
                - "Send the completed table to your adviser for review"
                - "Recheck the table against the latest accounts and headcount @recurring(yearly)"
            - name: Excluded trade review of your business model
              description: |-
                ## Purpose
                Certain activities are commonly excluded from investor relief, such as financial services, property development, leasing, energy generation and some licensing or royalty income, and a company can fail on part of its revenue rather than all of it. Mapping each revenue stream against the excluded list, and estimating its share of the business, catches a platform or hardware rental model that looks fine at first sight.

                ## Milestones
                1. Every current and planned revenue stream listed with its rough share of income.
                2. Each stream compared with the scheme's excluded activities list.
                3. Any stream that could count as excluded described in plain words for the adviser.
                4. The adviser's view recorded on whether the mix affects eligibility.

                ## Notes
                Include planned revenue, not just today's. A licensing deal signed after the round can matter as much as the business model at the time of applying.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "Each revenue stream is mapped against the excluded activities list, with your adviser's written view on any stream that might be excluded."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "List each current and planned revenue stream with its share of income"
                - "Compare each stream with the excluded activities list in the guidance"
                - "Describe any doubtful stream in plain words for your adviser"
                - "Record the adviser's view on whether the revenue mix affects eligibility"
            - name: Choosing a tax adviser for relief work
              description: |-
                ## Purpose
                Applications, compliance statements and the follow-up questions from the tax authority go far faster with an adviser who files these every month, and slower with a generalist learning on your round. Comparing two or three specialists on scheme experience, fixed fees and turnaround means the adviser is in place before any investor asks whether the round qualifies.

                ## Milestones
                1. Three advisers or firms shortlisted, each with recent experience of your scheme.
                2. Fixed or capped fee quotes collected for an application and a compliance statement.
                3. Turnaround times and the person who will do the work confirmed.
                4. One adviser engaged, with the engagement letter on file.

                ## Notes
                Start from the **Vendor** template. Angel networks and your company lawyer usually know who does this work well and who is slow.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "An engagement letter signed with a specialist adviser who has filed applications for your chosen scheme, with the fee and turnaround agreed."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Ask your lawyer and two angels which advisers they rate for relief work"
                - "Request fixed fee quotes for an application and a compliance statement"
                - "Compare the shortlist on experience, fees and turnaround"
                - "Sign an engagement letter with the chosen adviser"
                - "Review the adviser's fees and service against what was agreed @recurring(yearly)"
            - name: Share rights review for qualifying shares
              description: |-
                ## Purpose
                Some schemes require shares paid for in full and in cash, with no preferential right to assets on a winding up, no redemption right and no fixed preferential dividend, and those are rights that venture term sheets routinely include. Reviewing the articles and the proposed terms with your lawyer and adviser together, before investors sign, is far cheaper than restructuring after the money arrives.

                ## Milestones
                1. Current articles and any shareholders' agreement collected in one place.
                2. Proposed rights for the new shares listed: liquidation, dividends, conversion, redemption and anti-dilution.
                3. Each right marked by your adviser as acceptable or a risk under the scheme.
                4. A share class agreed that relief investors can subscribe for.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A written adviser note confirming the share class offered to relief investors carries no rights that disqualify it under the chosen scheme."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Collect the current articles of association and any shareholders' agreement"
                - "List the rights proposed for the new shares in the draft term sheet"
                - "Ask your adviser to mark each right as acceptable or a risk"
                - "Agree the share class for relief investors with your lawyer"
            - name: Company history file for relief claims
              description: |-
                ## Purpose
                Tax authorities ask for dates that founders rarely have to hand: incorporation, first commercial sale, each share issue, earlier relief raised and any change of trade or group structure. One file holding these facts, with the documents behind them, answers most application questions in minutes and stays useful for every later round.

                ## Milestones
                1. Incorporation date, first commercial sale date and trade description recorded with evidence.
                2. Every past share issue listed with date, price, number of shares and whether relief was claimed.
                3. Group structure, subsidiaries and any past holding company changes noted.
                4. Grants and other public funding received listed with amounts and dates.

                ## Notes
                Grant history matters for some schemes because public support received can count towards overall funding limits.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A company history file holding dated evidence of incorporation, first sale, every share issue and all past public funding."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Find the incorporation certificate and the invoice for the first commercial sale"
                - "List every past share issue with date, price and any relief claimed"
                - "Record the group structure and any past changes to it"
                - "List grants and public funding the company has received"
                - "Add the year's share issues and funding to the history file @recurring(yearly)"
            - name: Connected investor screening
              description: |-
                ## Purpose
                Investors already connected with the company, for example through a large existing shareholding, employment, a paid directorship or a close relative who holds shares, are often barred from claiming relief. Screening each prospective investor with a short questionnaire before they commit avoids promising relief to someone the rules exclude, which is a hard conversation once the money is in.

                ## Milestones
                1. The scheme's investor-side conditions summarised in plain words.
                2. A short questionnaire covering holdings, employment, directorships and relatives.
                3. Every prospective relief investor screened before signing.
                4. Doubtful cases referred to your adviser with the answers attached.

                ## Notes
                Screening keeps the company's records straight. Each investor's own eligibility is a question for their own tax adviser.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Every investor expecting relief in the current round has a completed screening questionnaire on file, with doubtful cases reviewed by your adviser."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Summarise the scheme's investor-side conditions in plain words"
                - "Ask the agent to draft a five-question connection screening form"
                - "Send the form to each prospective relief investor before signing"
                - "Refer any doubtful answer to your adviser with the form attached"
            - name: Relief funding limits and headroom tracker
              description: |-
                ## Purpose
                Schemes cap how much a company can raise under them, often per year and over its lifetime, and the count usually includes earlier relief money and sometimes other public funding. A running tracker of what has been raised under each scheme against the current limits tells you how big the next relief tranche can be before you quote it to investors.

                ## Milestones
                1. Current annual and lifetime limits for your schemes recorded from official guidance, with the date checked.
                2. Every past relief-eligible raise entered with date and amount.
                3. Headroom for the next round calculated and confirmed by your adviser.
                4. The tracker updated after every share issue and every budget change.
              priority: high
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A limits tracker showing money raised under each scheme against current limits, with headroom for the next round confirmed by your adviser."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Record the current funding limits for each scheme from official guidance"
                - "Enter every past relief-eligible share issue with date and amount"
                - "Calculate remaining headroom and ask your adviser to confirm it"
                - "Recheck the limits and update the tracker @recurring(quarterly)"
            - name: Monthly qualifying conditions check
              description: |-
                ## Purpose
                After a relief round the company usually has to stay qualifying for a set period, often around three years, and a stretch of trading in an excluded activity, losing independence or moving the business abroad can withdraw relief from every investor. A fifteen-minute monthly check against the conditions turns a long, invisible obligation into a short routine with a record behind it.

                ## Milestones
                1. A one-page checklist of the ongoing conditions for each scheme you used.
                2. The checklist completed monthly, with any concern escalated the same week.
                3. Twelve consecutive monthly checks on file.
                4. A board minute each quarter noting the checks were done.

                ## Notes
                Start from the **Compliance control** template. Ask your adviser to approve the checklist wording once, so the monthly check needs no interpretation.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Twelve consecutive monthly conditions checks recorded, with any flagged item referred to the adviser within a week."
                cadence: rolling
              tasks:
                - "Turn the scheme's ongoing conditions into a one-page checklist"
                - "Complete the qualifying conditions checklist and file it @recurring(monthly:11)"
                - "Send any flagged item to your adviser the same week"
                - "Report the completed checks to the board @recurring(quarterly)"
            - name: Register of relief-sensitive decisions
              description: |-
                ## Purpose
                Ordinary company decisions can affect investors' relief: a new subsidiary, a licensing deal, a share buyback, a new share class, a change of trade or an approach from a buyer. Keeping a register of decisions that need a relief check before they are agreed, and reading it at leadership meetings, stops a commercial win from quietly costing angels their relief.

                ## Milestones
                1. A list of decision types that need a relief check before approval.
                2. The register shared with co-founders, finance and the company lawyer.
                3. Each relevant decision logged with the adviser's view before it is signed.
                4. The register reviewed each quarter for anything that slipped through.

                ## Notes
                Start from the **Risk register** template.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every decision on the trigger list over the last six months appears in the register with the adviser's view recorded before signing."
                cadence: rolling
              tasks:
                - "List the decision types that need a relief check before approval"
                - "Share the register with co-founders, finance and the company lawyer"
                - "Log new decisions and get the adviser's view before signing @recurring(monthly:19)"
                - "Review the register for decisions that slipped through @recurring(quarterly)"
            - name: Returns of value check on payments to investors
              description: |-
                ## Purpose
                Money or benefits flowing back to a relief investor, such as a loan, a fee for services, a share buyback, goods on non-commercial terms or a repayment of capital, can count as a return of value and reduce or withdraw their relief. Checking every planned payment to a shareholder against the rules before it is made protects relief that took months to secure.

                ## Milestones
                1. Every shareholder who claimed relief flagged in the finance system.
                2. A written rule that payments to flagged shareholders need a relief check first.
                3. Each quarter's payments to shareholders reviewed for returns of value.
                4. Any risky payment discussed with the adviser before it is made.

                ## Notes
                Angels who also advise or consult for the company are the usual case. Agree the terms with your adviser before any invoice is paid.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Four consecutive quarterly reviews of payments to relief investors on file, with no payment made before an adviser check where one was needed."
                cadence: rolling
              tasks:
                - "Flag every relief investor as a contact in the finance system"
                - "Write a rule that payments to relief investors need a check first"
                - "Review the quarter's payments to shareholders for returns of value @recurring(quarterly)"
                - "Ask your adviser about any payment that looks like a return of value"
            - name: Spend log for relief-funded money
              description: |-
                ## Purpose
                Relief money usually has to be spent on the qualifying trade, or on research and development leading to it, within a set window, and the tax authority can ask how it was used. A simple monthly log tying relief-funded spend to qualifying activities answers that question and supports the compliance statement.

                ## Milestones
                1. The spending deadline for each relief raise noted from the guidance.
                2. A ledger tag or separate account in use for relief-funded spend.
                3. A monthly log of spend against qualifying activities.
                4. Full use of the money evidenced before the deadline.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A monthly spend log showing every relief-funded amount used on qualifying activity before the scheme's spending deadline."
                cadence: rolling
              tasks:
                - "Note the spending deadline that applies to each relief raise"
                - "Set up a ledger tag for spend funded by relief money"
                - "Log relief-funded spend against qualifying activities @recurring(monthly:23)"
                - "Warn your adviser if any money looks unlikely to be spent in time"
            - name: Investor certificate issuing routine
              description: |-
                ## Purpose
                Investors cannot claim until the company sends them the certificate or claim form the tax authority has authorised, and late certificates are the commonest complaint angels have about relief rounds. A standing routine that issues, records and chases each certificate keeps investors able to claim in the tax year they expected.

                ## Milestones
                1. A certificate log listing each investor, share issue, scheme and date sent.
                2. Certificates sent within two weeks of authorisation arriving.
                3. Each investor's receipt confirmed.
                4. Lost or incorrect certificates replaced through the authority's proper route.
              priority: medium
              frontmatter:
                mode: service
                output_kind: habit
                success_criteria: "Every authorised certificate is logged as sent within two weeks of authorisation, with receipt confirmed by each investor."
                cadence: rolling
              tasks:
                - "Create a certificate log with investor, issue date, scheme and date sent"
                - "Send authorised certificates to investors and record the date"
                - "Chase receipt from any investor who has not confirmed @recurring(monthly:4)"
                - "Ask your adviser how to replace a certificate with wrong details"
            - name: Annual investor tax pack
              description: |-
                ## Purpose
                Each year, as personal tax returns come due, relief investors need certificate copies, share issue dates and a reminder of what the company has confirmed, and many ask in the same fortnight. Sending a short pack to every relief investor before the busy season saves dozens of individual emails and keeps relationships warm.

                ## Milestones
                1. A list of every investor holding relief-eligible shares.
                2. A one-page pack with issue dates, scheme, certificate references and a contact.
                3. The pack sent to every relief investor before their return deadline.
                4. Questions from investors logged and answered.

                ## Notes
                The pack states facts from the company's records. Point investors to their own adviser for how and when to claim.
              priority: medium
              frontmatter:
                mode: service
                output_kind: deliverable
                success_criteria: "A tax pack sent to every relief investor before the personal return deadline, with each investor question answered within a week."
                cadence: cyclic
              tasks:
                - "List every investor who holds relief-eligible shares"
                - "Draft a one-page pack with issue dates, scheme and certificate references"
                - "Send the investor tax pack before personal tax return season @recurring(yearly)"
                - "Log investor questions and reply within a week"
            - name: Scheme rule change watch
              description: |-
                ## Purpose
                Limits, age tests and even whole schemes change in annual budgets, sometimes with only weeks of notice, and a raise planned around last year's rules can miss a better window or fall foul of a new one. A quarterly scan of official announcements, with a note to the adviser when something moves, keeps every plan in this area current.

                ## Milestones
                1. Official sources for scheme changes listed: the tax authority, the finance ministry and your adviser's bulletins.
                2. Alerts set for budget and finance bill announcements.
                3. Each quarter's scan recorded, even when nothing changed.
                4. Affected plans and trackers updated within a month of a confirmed change.
              priority: low
              frontmatter:
                mode: operating
                output_kind: knowledge
                success_criteria: "Four quarterly scans recorded in a year, with every confirmed scheme change reflected in the limits tracker within a month."
                cadence: rolling
              tasks:
                - "List the official sources that announce changes to your schemes"
                - "Subscribe to your adviser's tax bulletin and the tax authority's updates"
                - "Scan announcements for scheme changes and note the result @recurring(quarterly)"
                - "Update plans and trackers after any confirmed change"
            - name: Qualifying period end-date tracker
              description: |-
                ## Purpose
                Every relief share issue starts its own clock, so a company with three relief rounds has three qualifying periods ending on different dates. Recording each end date makes it clear when exit talks, a change of trade or a group restructure would put relief at risk, and when the risk has passed.

                ## Milestones
                1. Every relief share issue listed with its qualifying period end date, as confirmed by your adviser.
                2. The latest end date shown at the top of the tracker.
                3. End dates shared with the board and the company lawyer.
                4. The tracker read before any exit, buyback or restructuring discussion.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: artifact
                success_criteria: "A tracker listing every relief share issue with an adviser-confirmed end date, shared with the board and reviewed in the last twelve months."
                cadence: rolling
              tasks:
                - "List each relief share issue with its date and scheme"
                - "Ask your adviser to confirm the qualifying period end date for each"
                - "Share the end dates with the board and the company lawyer"
                - "Check upcoming end dates and brief the board @recurring(yearly)"
            - name: Regional angel tax credit registration
              description: |-
                ## Purpose
                Several US states and some Canadian provinces offer angels a credit only if the company registers or is certified in advance, often renewing every year, and investments made before approval may not count. Getting registered, and renewing on time, is a small piece of admin that can matter a great deal to local angels.

                ## Milestones
                1. The regional credit's eligibility rules and application window confirmed.
                2. The registration or certification submitted with supporting documents.
                3. Approval received and shared with prospective local investors.
                4. Renewal or annual reporting dates in the calendar.

                ## Notes
                Archive this project if your region has no credit for angel investors.
              priority: low
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "The company holds current registration for the regional angel credit, with the reference number recorded and the renewal date in the calendar."
                cadence: cyclic
              tasks:
                - "Check whether the regional angel credit requires the company to register first"
                - "Gather the documents the registration form asks for"
                - "Submit the registration and record the reference number"
                - "Renew the registration or file the annual report @recurring(yearly)"
            - name: Relief evidence archive
              description: |-
                ## Purpose
                Enquiries into relief can come years after the shares were issued, and buyers' lawyers ask for the same papers at an exit. Keeping applications, approvals, compliance statements, certificates and board minutes in one indexed archive means the evidence survives staff changes and can be produced in a day.

                ## Milestones
                1. A folder for each relief raise with subfolders for application, approval, compliance statement, certificates and correspondence.
                2. All past relief documents filed in it.
                3. Access limited to named people, with a working backup.
                4. A yearly check that every new document has been filed.
              priority: low
              frontmatter:
                mode: operating
                output_kind: artifact
                success_criteria: "Every relief raise has a complete archive folder, and the yearly check confirming nothing is missing is recorded."
                cadence: rolling
              tasks:
                - "Create one folder per relief raise with standard subfolders"
                - "File every past application, approval and certificate in the archive"
                - "Limit access to named people and confirm the backup works"
                - "Check the archive holds the year's relief documents @recurring(yearly)"
            - name: How investor relief works from the angel's side
              description: |-
                ## Purpose
                Founders pitch relief better when they understand what it does for the person writing the cheque: relief against income tax, a possible exemption on gains, deferral of other gains and relief if the company fails. Learning the investor's view in plain terms lets you answer questions accurately without straying into advice you are not qualified to give.

                ## Milestones
                1. The main investor benefits of your scheme summarised in your own words.
                2. An official worked example read through, showing relief on a success and on a failure.
                3. Three common investor questions written down with factual answers.
                4. A clear line written on what you will refer to the investor's own adviser.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A one-page note of investor benefits, three factual answers to common questions and a referral sentence, checked by your adviser."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Read the investor section of the official scheme guidance"
                - "Work through an official example showing relief on success and on failure"
                - "Write factual answers to three questions angels commonly ask"
                - "Write the sentence you will use to refer investors to their own adviser"
            - name: Reading the tax authority's scheme manual
              description: |-
                ## Purpose
                Behind the short guidance pages, most tax authorities publish a detailed manual their own staff use to decide applications, and it settles many questions founders pay advisers to answer. Learning how the manual is organised, and reading the sections on your trade and your share rights, makes conversations with your adviser faster and cheaper.

                ## Milestones
                1. The detailed manual or technical guidance for your scheme located.
                2. Its structure noted: company conditions, share conditions, investor conditions and procedures.
                3. The sections relevant to your trade and share terms read and summarised.
                4. Two questions taken to your adviser with manual references.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A summary of the manual sections on your trade and share terms, with two questions answered by your adviser against the references."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Find the detailed technical manual for your scheme on the tax authority's site"
                - "Note the manual's main sections and what each covers"
                - "Read and summarise the sections on your trade and share rights"
                - "Take two questions to your adviser with the manual references"
            - name: Knowledge-intensive company status
              description: |-
                ## Purpose
                Some schemes offer higher limits or a longer age window to companies that spend heavily on research and development or innovation, or that employ many highly qualified staff. Understanding the tests, and measuring whether you meet them, can raise how much relief money you can take and how late in the company's life you can take it.

                ## Milestones
                1. The enhanced category's tests listed from official guidance.
                2. Research spend and qualified staff numbers measured against them.
                3. A note of which tests you meet, with evidence.
                4. The adviser's view recorded on whether to claim enhanced status.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A measured comparison of your research spend and qualified staff against the enhanced tests, with the adviser's recommendation recorded."
                cadence: phased
                effort_hours_estimate: "5"
              tasks:
                - "Read the guidance on enhanced status for knowledge-intensive companies"
                - "Measure research and development spend as a share of operating costs"
                - "Count staff with qualifying higher degrees or research roles"
                - "Ask your adviser whether to claim enhanced status in the next application"
                - "Re-measure research spend and qualified staff after year end @recurring(yearly)"
            - name: Risk-to-capital and genuine growth tests
              description: |-
                ## Purpose
                Several schemes ask whether the company genuinely intends to grow and whether investors' capital is really at risk, to filter out low-risk or asset-backed arrangements dressed up as start-ups. Learning how these tests are judged helps you write a business plan and application that show real growth intent, rather than tripping a question you did not know existed.

                ## Milestones
                1. The test's wording and the authority's examples read.
                2. Features of your business that show growth intent listed: hiring plans, market expansion and product development.
                3. Features that might look low-risk identified and explained.
                4. The growth section of the business plan revised in light of the test.

                ## Notes
                In the UK this is the risk-to-capital condition. Asset-heavy plans and guaranteed income streams attract the most questions.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A revised business plan growth section that addresses each element of the test, reviewed by your adviser before the application."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Read the official guidance and examples on the risk-to-capital test"
                - "List features of your plan that show growth intent"
                - "Identify anything that could look low-risk or asset-backed"
                - "Revise the growth section of your business plan with the test in mind"
            - name: Gross asset and employee tests in practice
              description: |-
                ## Purpose
                Size tests often look at gross assets just before and just after the share issue, and at full-time equivalent staff across the group, so a large round or an acquisition can tip a company over a limit on the day itself. Learning exactly how your scheme measures these figures prevents the surprise of a round too big to qualify.

                ## Milestones
                1. How your scheme measures gross assets and headcount written down, including timing.
                2. Current figures calculated on the same basis.
                3. The effect of the planned round on gross assets estimated.
                4. Any risk of breaching a limit raised with the adviser.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Gross assets and full-time equivalent staff calculated on the scheme's basis before and after the planned issue, with any risk raised with the adviser."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Read how your scheme measures gross assets and headcount"
                - "Calculate current group gross assets and full-time equivalent staff"
                - "Estimate gross assets immediately after the planned share issue"
                - "Raise any risk of breaching a size limit with your adviser"
            - name: Gains exclusions for long-held small company shares
              description: |-
                ## Purpose
                In some countries, investors and founders who hold qualifying small company shares for a minimum period can exclude part or all of the gain on sale, with the US treatment of qualified small business stock the best-known example. Learning what the company must do to keep its stock eligible, and which records holders will need, avoids losing a valuable benefit through a structure choice nobody questioned.

                ## Milestones
                1. The company-level conditions of any gains exclusion in your country listed.
                2. How the company's legal form and asset size affect eligibility noted.
                3. Records holders will need at sale identified: issue dates, asset figures and active business evidence.
                4. A standing request filed for your adviser to confirm eligibility at each share issue.

                ## Notes
                Conversions, redemptions and changes of legal form can all affect eligibility. Raise any of them with your adviser first.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A note of the company-level conditions and holder records for any gains exclusion in your country, with adviser confirmation requested at each issue."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Read official guidance on gains exclusions for small company shares"
                - "List the conditions that depend on the company rather than the holder"
                - "Identify the records holders will need when they sell"
                - "Ask your adviser to confirm eligibility at each future share issue"
            - name: SAFEs, notes and advance subscriptions under relief rules
              description: |-
                ## Purpose
                Convertible instruments can clash with relief: under some schemes a SAFE or convertible note does not qualify at all, while an advance subscription agreement written to the authority's conditions can. Understanding which instruments your scheme accepts, and on what terms, matters before an early angel signs something that later blocks their relief.

                ## Milestones
                1. Your scheme's position on convertible and pre-funded instruments read in official guidance.
                2. The differences between a SAFE, a convertible note and an advance subscription agreement summarised.
                3. The terms that keep an advance subscription within the rules listed.
                4. The instrument for the next early cheque agreed with your adviser and lawyer.

                ## Notes
                In the UK, for example, advance subscription agreements are generally expected to have a short longstop date and no interest, refund or variation. Confirm the current conditions with your adviser.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A written comparison of the instruments under your scheme and a recorded choice of instrument for the next early cheque, agreed with your adviser."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Read your scheme's guidance on convertible and pre-funded instruments"
                - "Summarise how a SAFE, a note and an advance subscription differ under it"
                - "List the conditions an advance subscription must meet"
                - "Agree with your lawyer which instrument to offer the next early angel"
            - name: Advance opinion application to the tax authority
              description: |-
                ## Purpose
                Many tax authorities will give an advance opinion that a planned share issue looks likely to qualify, and many angels will not invest under a scheme without one. A complete application, with the business plan, forecasts, draft articles and a list of likely investors where asked for, draws fewer questions and gets an answer sooner.

                ## Milestones
                1. The authority's application form and required attachments listed.
                2. Business plan, forecasts, latest accounts and draft articles assembled.
                3. The application reviewed by your adviser and submitted.
                4. The advance opinion received and shared with prospective investors.

                ## Notes
                Allow several weeks for a reply, longer around budget periods. An advance opinion is not a guarantee: the final claim is tested on what actually happens. In the UK this is called advance assurance.
              priority: high
              deadlineOffsetDays: 45
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "An advance opinion application submitted with every required attachment, and the authority's reply filed and shared with prospective investors."
                cadence: one-shot
                effort_hours_estimate: "10"
              tasks:
                - "Download the advance opinion form and its list of required attachments"
                - "Assemble the business plan, forecasts, accounts and draft articles"
                - "Ask the agent to check the application narrative against each scheme condition"
                - "Have your adviser review and submit the application"
                - "Share the advance opinion with prospective relief investors"
            - name: Answering tax authority questions on an application
              description: |-
                ## Purpose
                Questions from the tax authority often arrive weeks after submission, usually about the trade, share rights, the growth test or how the money will be used, and a slow or vague reply resets the clock. Setting up the response process in advance, with an owner and the adviser copied, keeps the round on its timetable.

                ## Milestones
                1. A named owner for replies, with the adviser copied on every message.
                2. Each question logged with the date received and the reply deadline.
                3. Replies drafted with evidence attached and reviewed by the adviser.
                4. The final outcome and any conditions recorded in the company history file.
              priority: medium
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "Every authority question on the application answered before its deadline, with replies and the final outcome filed."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Name who will draft replies to the tax authority"
                - "Log each question with the date received and the reply deadline"
                - "Draft replies with evidence attached and send them to the adviser"
                - "Record the outcome and any conditions in the company history file"
            - name: Advance subscription agreement for an early angel
              description: |-
                ## Purpose
                When an angel wants to fund the company before a priced round but also wants relief, an advance subscription agreement can bridge the gap if it is drafted to the authority's conditions. Agreeing a template with your lawyer and adviser once, with conversion terms and the longstop date clear, lets you accept early cheques without putting relief at risk.

                ## Milestones
                1. A template agreement reviewed by both your lawyer and your tax adviser.
                2. Conversion price, any discount and the longstop date set out in plain words.
                3. Each signed agreement recorded with amount, date and longstop.
                4. Shares issued under each agreement before its longstop date.
              priority: medium
              deadlineOffsetDays: 45
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "An adviser-approved template in use, and every signed agreement converted into shares before its longstop date."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Ask your lawyer for an advance subscription template written for your scheme"
                - "Have your tax adviser confirm the template meets the scheme conditions"
                - "Record each signed agreement with amount, date and longstop"
                - "Issue the shares under each agreement before its longstop date @priority(high)"
            - name: Splitting a round into seed and main scheme issues
              description: |-
                ## Purpose
                Where a seed scheme and a main scheme exist side by side, a round can often use both, but the order of the share issues, their dates and which investors go in which tranche all matter. Planning the split with your adviser before the term sheet, rather than at completion, avoids issuing everything on one day and losing the more generous relief.

                ## Milestones
                1. Seed scheme and main scheme headroom confirmed from the limits tracker.
                2. Each investor allocated to a tranche, with their agreement.
                3. A completion timetable with separate issue dates, approved by the adviser.
                4. The split reflected in the subscription documents and board minutes.

                ## Notes
                In the UK, SEIS shares are generally issued before EIS shares rather than on the same day. Confirm the current rule with your adviser.
              priority: medium
              deadlineOffsetDays: 60
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "An adviser-approved completion timetable showing which investors sit in each tranche and the separate issue date for each."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Confirm headroom under each scheme from the limits tracker"
                - "Allocate each investor to a tranche and confirm it with them"
                - "Agree a timetable with separate issue dates with your adviser"
                - "Check the subscription documents and board minutes reflect the split"
            - name: Group structure check before adding a subsidiary
              description: |-
                ## Purpose
                Setting up a subsidiary abroad, inserting a holding company for an overseas raise or taking a stake in another business can break the independence and subsidiary conditions in relief schemes. Checking the change against the rules before the lawyers start drafting saves an expensive unwind.

                ## Milestones
                1. The proposed structure drawn as a simple diagram.
                2. Scheme conditions on subsidiaries, control and independence listed.
                3. The adviser's written view on the effect on existing and future relief.
                4. A decision recorded to proceed, change or drop the restructure.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A recorded decision on the restructure, backed by the adviser's written view of its effect on existing and future relief."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Draw the proposed group structure as a simple diagram"
                - "List the scheme conditions on subsidiaries and independence"
                - "Ask your adviser for a written view on the effect on relief"
                - "Record the decision to proceed, change or drop the restructure"
            - name: Fixing a disqualifying share right before the round
              description: |-
                ## Purpose
                Articles written for an earlier round or copied from a template sometimes give the class relief investors would buy a preference, redemption or conversion right that disqualifies it. Planning the fix, the shareholder approvals it needs and the timing, before investors sign, keeps the round on its date.

                ## Milestones
                1. The problem right identified and described by your adviser.
                2. Amendment options set out with the approvals each needs.
                3. Existing shareholders consulted and the required resolution passed.
                4. Amended articles filed before the relief share issue.

                ## Notes
                Start from the **Remediation plan** template. Existing preferred holders may ask for something in return, so raise it with them early.
              priority: medium
              deadlineOffsetDays: 60
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "Amended articles filed before the relief share issue, with the adviser confirming the new shares no longer carry a disqualifying right."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Ask your adviser to describe exactly which right causes the problem"
                - "Get the lawyer to set out amendment options and the approvals needed"
                - "Brief existing shareholders on the change and why it is needed"
                - "Pass the resolution and file the amended articles before the share issue"
            - name: Mixing relief and non-relief investors in one round
              description: |-
                ## Purpose
                Funds and corporate investors often want preference shares, while relief investors may need plain ordinary shares, so putting both in one round needs care over share classes, timing and whether the institutional terms affect everyone. Agreeing a structure with the lead investor early prevents a late clash between the term sheet and the scheme.

                ## Milestones
                1. Each investor in the round tagged as relief or non-relief.
                2. Structure options compared: separate classes, staggered issues or one class for all.
                3. The lead investor's agreement to the chosen structure recorded.
                4. The adviser's confirmation that relief shares still qualify.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A chosen round structure agreed by the lead investor, with the adviser's written confirmation that relief shares still qualify under it."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Tag each investor in the round as relief or non-relief"
                - "Compare separate classes, staggered issues and one class for all"
                - "Discuss the preferred structure with the lead investor"
                - "Get the adviser to confirm relief shares still qualify under it"
            - name: Relief share issue day
              description: |-
                ## Purpose
                On the day relief shares are issued, everything the later claim depends on must line up: cleared funds before allotment, the right share class, board approval, an updated register and the correct date recorded. A closing checklist written for relief issues, separate from the general completion list, protects the claim from avoidable technical faults.

                ## Milestones
                1. Funds from every relief investor confirmed cleared before allotment.
                2. The board resolution allotting the shares passed on the planned date.
                3. Share register and statutory filings updated with the issue date.
                4. Issue date, amounts and investor list sent to the adviser for the compliance statement.

                ## Notes
                Shares allotted before the money arrives, or paid for partly in kind, are a common reason claims fail.
              priority: high
              deadlineOffsetDays: 90
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "Relief shares allotted on the planned date against cleared funds, with the register updated and issue details sent to the adviser within a week."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Write a relief closing checklist separate from the main completion list"
                - "Confirm every relief investor's funds have cleared before allotment"
                - "Pass the board resolution allotting the shares on the planned date"
                - "Send the issue date and investor list to your adviser the same week"
            - name: Compliance statement after the share issue
              description: |-
                ## Purpose
                Filing a compliance statement is the step that lets the tax authority authorise certificates, and investors cannot claim until it is done. Most schemes set an earliest date, often once trading or spending has begun, and a final deadline, so the filing window belongs in the calendar from the day of issue.

                ## Milestones
                1. Earliest filing date and deadline for the issue in the calendar.
                2. Statement figures reconciled to the share register and bank receipts.
                3. The statement reviewed by the adviser and submitted.
                4. Authorisation received and certificates released to investors.
              priority: high
              deadlineOffsetDays: 150
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "A compliance statement submitted within the filing window, reconciled to the register, with authorised certificates released to investors."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Put the earliest filing date and deadline for the issue in the calendar"
                - "Reconcile the statement figures to the share register and bank receipts"
                - "Have your adviser review and submit the compliance statement"
                - "Release the authorised certificates to investors as soon as they arrive"
            - name: One-page relief summary for prospective investors
              description: |-
                ## Purpose
                Angels ask the same three things: does the round qualify, what has the tax authority said, and when will certificates arrive. A factual one-page summary, checked by your adviser and attached to the deck follow-up or data room, answers them consistently and stops founders improvising tax claims in meetings.

                ## Milestones
                1. A one-page summary covering scheme, advance opinion status, share class and expected certificate timing.
                2. A clear statement that investors should take their own tax advice.
                3. The summary checked by your adviser for accuracy.
                4. The summary added to the pitch follow-up materials and data room.
              priority: medium
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "An adviser-checked one-page relief summary sits in the data room and is sent with every investor follow-up email."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Ask the agent to draft a factual one-page relief summary from your approvals"
                - "Add a line telling investors to take their own tax advice"
                - "Have your adviser check the summary for accuracy"
                - "Add the summary to the data room and investor follow-up emails"
            - name: Relief re-check before a follow-on round
              description: |-
                ## Purpose
                An advance opinion usually covers one planned issue, and a year later the company may look quite different, with more staff, more assets and perhaps a new product line. Rechecking eligibility, limits and share terms before announcing a follow-on round avoids promising relief the company no longer qualifies for.

                ## Milestones
                1. The eligibility table refreshed with current figures.
                2. Remaining headroom confirmed against the limits tracker.
                3. New share terms reviewed for disqualifying rights.
                4. A fresh advance opinion requested if your adviser recommends it.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A refreshed eligibility table and headroom figure, reviewed by the adviser, before the follow-on round is announced to investors."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Refresh the eligibility table with current assets, staff and trade"
                - "Confirm remaining headroom in the limits tracker"
                - "Send the new term sheet to your adviser to check the share rights"
                - "Request a fresh advance opinion if the adviser recommends one"
            - name: Responding to an enquiry into past relief
              description: |-
                ## Purpose
                Years after a round, the tax authority may open an enquiry into whether the company stayed qualifying, often prompted by an exit, a change of trade or an investor's claim. Responding calmly through your adviser, with evidence from the archive and the monthly checks, usually resolves it far faster than reconstructing history from memory.

                ## Milestones
                1. The enquiry letter logged with its response deadline.
                2. The adviser instructed and a single point of contact named.
                3. Evidence assembled from the archive, conditions checks and board minutes.
                4. The response submitted and the outcome recorded.

                ## Notes
                Tell relief investors only what the adviser agrees they need to know, and do not speculate about the outcome.
              priority: low
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "A complete response submitted through the adviser before the enquiry deadline, with the outcome recorded in the history file."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Log the enquiry letter and its response deadline"
                - "Instruct your adviser and name one point of contact"
                - "Pull the evidence from the relief archive and monthly checks"
                - "Record the outcome and any lessons in the history file"
            - name: Exit offer during a qualifying period
              description: |-
                ## Purpose
                Acquisition offers that complete before a qualifying period ends can cost relief investors some or all of their benefit, and the timing and form of the deal, such as cash or shares in the buyer, can change the answer. Bringing the adviser in at the first serious approach lets the board weigh relief alongside price and terms.

                ## Milestones
                1. Qualifying period end dates for every relief issue checked.
                2. The adviser's view on the effect of the offer's timing and form recorded.
                3. Relief investors told in general terms what is at stake, without tax advice.
                4. The board's decision recorded with relief impact considered.
              priority: medium
              frontmatter:
                mode: event
                output_kind: decision
                success_criteria: "A board decision on the offer, minuted with the adviser's written view of its effect on investors' relief."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Check the qualifying period end dates in the tracker"
                - "Ask your adviser how the offer's timing and form affect relief"
                - "Brief relief investors on what is at stake and suggest their own advice"
                - "Record the board's decision with the relief impact noted"
            - name: Solo founder claiming relief on a first raise
              description: |-
                ## Purpose
                A solo founder raising a first round from a handful of angels has to run the application, the share issue and the certificates alongside everything else, with no finance team behind them. A cut-down plan built on a fixed-fee adviser and a single checklist keeps the relief work to a few evenings and makes sure nothing is missed.

                ## Milestones
                1. A fixed-fee adviser handling the application and compliance statement.
                2. One checklist covering application, share issue, filing and certificates.
                3. An advance opinion received before the first angel signs.
                4. Certificates in investors' hands within the tax year they invested.
              priority: medium
              deadlineOffsetDays: 90
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Every angel in the first round holds an authorised certificate, issued within the tax year they invested."
                cadence: phased
                effort_hours_estimate: "12"
              tasks:
                - "Write a one-page relief checklist from application to certificates"
                - "Book a fixed-fee adviser for the application and compliance statement"
                - "Block two evenings a month for relief admin until certificates are out"
                - "Tell each angel the expected certificate timing in writing"
            - name: Small business raising from local angels with relief
              description: |-
                ## Purpose
                Established small businesses, such as a growing manufacturer, café group or service firm, often raise from customers, suppliers and local business people who value relief highly, and friends or relatives may be among them. Checking trading age, excluded activities and connections early matters most here, because older or asset-heavy businesses fail these tests more often.

                ## Milestones
                1. The business's trading age and asset base checked against the scheme limits.
                2. Each prospective investor screened for connection to the business or its owners.
                3. Property, leasing or rental income ruled in or out with the adviser.
                4. A decision recorded on whether relief is realistic for this raise.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A recorded decision on whether relief is realistic for the raise, based on age, asset and connection checks reviewed by the adviser."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Check the business's first trading date against the scheme's age limit"
                - "Screen each local investor for family or business connections"
                - "Ask your adviser about any property, leasing or rental income"
                - "Record whether relief is realistic for this raise and why"
            - name: Incorporating a sole trade before raising
              description: |-
                ## Purpose
                Turning an existing sole trade or partnership into a company is often the first step to taking equity, and the way it is done can affect the company's age for relief purposes, its gross assets and whether the trade counts as new. Planning the transfer with your accountant and tax adviser together avoids a structure that blocks relief before the first pitch.

                ## Milestones
                1. Options for moving the business into a company set out by your accountant.
                2. The effect of each option on age tests and asset limits noted by your adviser.
                3. A transfer date and method chosen and recorded.
                4. The new company's eligibility table started from day one.
              priority: medium
              deadlineOffsetDays: 60
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A chosen transfer method and date, with the adviser's note on its effect on relief eligibility, filed before the company raises."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Ask your accountant to set out options for moving the business into a company"
                - "Ask your tax adviser how each option affects relief eligibility"
                - "Choose the transfer date and method and record why"
                - "Start the eligibility table for the new company"
            - name: Founders abroad and overseas investors
              description: |-
                ## Purpose
                Many schemes require the company to have a permanent establishment in the country, and only investors who pay tax there can claim, so a founder relocating or a round with overseas angels changes the picture. Mapping where founders, staff, investors and operations sit lets you set honest relief expectations and keep the base of the business where the scheme needs it.

                ## Milestones
                1. Where founders, staff and operations are based recorded.
                2. The permanent establishment condition checked with your adviser.
                3. Investors split into those who can and cannot claim the local scheme.
                4. Overseas investors pointed to their own country's rules and advisers.
              priority: low
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A map of where founders, staff and investors are based, with the adviser's view on the permanent establishment condition recorded."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Record where each founder, staff member and operation is based"
                - "Ask your adviser whether the permanent establishment condition is met"
                - "Split the investor list into those who can and cannot claim locally"
                - "Point overseas investors to their own country's rules and advisers"
            - name: Last raise before the scheme age limit
              description: |-
                ## Purpose
                Age limits mean a company can usually raise relief money only within a window after its first commercial sale or incorporation, and founders often notice the window only when it has nearly shut. Working out the closing date now, and deciding whether to bring a raise forward, can keep relief available for one more round.

                ## Milestones
                1. The age window's closing date for each scheme confirmed with your adviser.
                2. The next planned raise compared with the closing date.
                3. A decision recorded to bring the raise forward, rely on an exception or plan without relief.
                4. Investors told in good time whether relief will apply.
              priority: medium
              deadlineOffsetDays: 30
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "The age window closing date confirmed by the adviser and a recorded decision on the timing of the next raise."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Find the first commercial sale date in the company history file"
                - "Ask your adviser to confirm when the age window closes for each scheme"
                - "Compare the closing date with the next planned raise"
                - "Record whether to bring the raise forward or plan without relief"
            - name: Pivot or change of trade after a relief round
              description: |-
                ## Purpose
                Start-ups pivot, but a new direction taken within a qualifying period can move the company into an excluded activity or look like a different trade from the one investors' relief was based on. Testing the planned pivot against the scheme conditions before announcing it lets you shape the change so relief survives, or tell investors honestly if it may not.

                ## Milestones
                1. The planned change described in a page: new product, customers and revenue model.
                2. The change tested against excluded activities and the qualifying trade condition.
                3. The adviser's written view recorded.
                4. Relief investors briefed before or alongside the announcement.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "An adviser's written view on the pivot's effect on relief, recorded before the change is announced to investors."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Describe the planned change in one page for your adviser"
                - "Test the new revenue model against the excluded activities list"
                - "Get the adviser's written view on the effect on relief"
                - "Brief relief investors before or alongside the announcement"
            - name: Raising from relief funds and venture trusts
              description: |-
                ## Purpose
                Funds that pool relief investors, such as managed scheme funds and listed venture capital trusts, bring their own qualifying and reporting demands, and many want regular figures to confirm their holdings still qualify. Knowing what these investors need before taking their money avoids friction later and makes the company easier to back again.

                ## Milestones
                1. Relief-focused funds active at your stage and sector identified.
                2. Their information and reporting requirements listed.
                3. The requirements reflected in the shareholders' agreement or a side letter.
                4. Regular reporting to each fund manager running on time.

                ## Notes
                Fund investments may be held through a nominee, so check how holdings appear in the register and on certificates.
              priority: low
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "Each relief fund investor's reporting requirements written into the agreement or side letter, with the last four quarterly reports sent on time."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "List funds at your stage that invest through relief schemes"
                - "Ask a fund manager what qualifying information they need each quarter"
                - "Write the reporting requirements into the side letter or agreement"
                - "Send each fund manager its quarterly qualifying information @recurring(quarterly)"
            - name: Relief across two tax systems
              description: |-
                ## Purpose
                Companies with investors in two countries, such as a UK company with US angels or a US parent with UK angels, may be asked to keep shares eligible for two different reliefs whose conditions pull in opposite directions. Mapping both sets of conditions side by side, and choosing deliberately which to protect, saves a restructure the next time a lead investor asks.

                ## Milestones
                1. Both schemes' company and share conditions listed side by side.
                2. Points of conflict identified: legal form, share rights, group structure and asset limits.
                3. A recorded decision on which relief to protect where they conflict.
                4. Advisers in both countries briefed on the decision.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A side-by-side conditions map and a recorded decision on which relief to protect, reviewed by advisers in both countries."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "List both schemes' company and share conditions side by side"
                - "Mark the conditions that conflict between the two systems"
                - "Record which relief to protect where they conflict and why"
                - "Review both schemes against the company's plans @recurring(yearly)"
            - name: Relief impact review before a share buyback
              description: |-
                ## Purpose
                Buybacks and secondary sales are common ways to give founders and early holders some liquidity, but company money flowing to shareholders, or relief shares changing hands within a qualifying period, can reduce or withdraw relief. Reviewing the proposal with the adviser before it is offered to anyone protects both the sellers and the investors who stay.

                ## Milestones
                1. The proposed buyback or secondary sale described: who sells, who buys and who pays.
                2. Relief holders and their qualifying period end dates identified.
                3. The adviser's view on returns of value and disposals recorded.
                4. The proposal adjusted or timed to protect relief where needed.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "The buyback or secondary proposal carries the adviser's written view on relief before it is offered to any shareholder."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Describe who sells, who buys and who pays in the proposed transaction"
                - "Identify relief holders and their qualifying period end dates"
                - "Ask your adviser how the transaction affects relief for sellers and remaining holders"
                - "Adjust the timing or structure to protect relief where needed"
            - name: Relief diligence pack for later investors and buyers
              description: |-
                ## Purpose
                Later-stage investors and acquirers check whether past relief could be withdrawn, because a clawback can sour relations with early shareholders and lead to warranty claims. A ready diligence pack with every application, approval, certificate, conditions check and adviser letter shortens that part of diligence and supports cleaner warranties.

                ## Milestones
                1. An index of every relief raise with links to its documents.
                2. Monthly conditions checks and board minutes for each qualifying period included.
                3. Any past issue, enquiry or adviser concern disclosed with its resolution.
                4. The pack reviewed by the company lawyer before release.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A lawyer-reviewed relief diligence pack, indexed by raise, ready to share within a day of a request."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Ask the agent to build an index of relief raises from the archive"
                - "Add the monthly conditions checks and relevant board minutes"
                - "Write a short disclosure note on any past issue and how it was resolved"
                - "Have the company lawyer review the pack before it is shared"
            - name: Supporting investors' loss relief if the company fails
              description: |-
                ## Purpose
                If the company winds down or its shares become close to worthless, relief investors may be able to claim loss relief, and they will need dates, certificates and evidence of the company's position from you. Preparing a factual pack for them as part of an orderly wind-down is one of the last good turns a founder can do for early backers.

                ## Milestones
                1. Each relief investor's share issue dates and certificate references listed.
                2. A factual statement of the company's position prepared with the insolvency practitioner or lawyer.
                3. The pack sent to every relief investor.
                4. Investors pointed to their own adviser for how to claim.
              priority: low
              frontmatter:
                mode: service
                output_kind: deliverable
                success_criteria: "Every relief investor receives a factual pack with share dates, certificate references and a statement of the company's position."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "List each relief investor's issue dates and certificate references"
                - "Agree a factual statement of the company's position with the lawyer"
                - "Send the pack to every relief investor"
                - "Remind investors to ask their own adviser how to claim"
---

# Investor Tax Relief Schemes

This area is for founders and small business owners who want their shares to qualify for investor tax relief, such as the seed and main schemes many countries run for angels, and then keep that relief safe for the years that follow. It starts with foundations (which schemes exist, whether relief is worth it, eligibility, share rights and the adviser), moves to the routines that keep a company qualifying, the rules worth learning properly, the decisions on instruments and round structure, the dated filings from advance opinion to certificates, situations for solo founders, small businesses and overseas teams, and ends with specialist work on relief funds, two tax systems and exits. None of it is tax advice: every project organises the work you do with a qualified adviser.

What repeats is a monthly conditions check on the 11th, a register of relief-sensitive decisions on the 19th, a spend log on the 23rd and certificate chasing on the 4th, quarterly reviews of payments to shareholders and rule changes, and a yearly investor tax pack, registration renewal and archive check. The Vendor, Compliance control, Risk register and Remediation plan templates pair with the projects that name them. Installing adds all 50 projects as active, so archive the ones that are not for you yet.
