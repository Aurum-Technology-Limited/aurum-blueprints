---
id: finance-accounting.business-debt-loan-servicing
name: Business Debt & Loan Servicing
description: "A register of every loan, overdraft and lease, repayments funded on time, covenants tested before the lender tests them, lender reports sent on schedule and refinancing started while there is still a choice."
category: business
version: 1.0.0
tags: [finance-accounting, business-debt-loan-servicing, small-business, founder, manager, loans, covenants, refinancing]
author: Aurum Technology
starter_structure:
  templates:
    - operational-checklist
    - metrics-log
    - compliance-control
    - purchase-decision
    - remediation-plan
    - onboarding-plan
  pillars:
    - name: Finance & Accounting
      emoji: "🧾"
      description: "The money side of a business: bookkeeping and the monthly close, cash flow, budgeting and forecasting, billing and collections, payroll, tax, audit and financial controls."
      pillarFrontmatter:
        review_cadence: monthly
      areas:
        - name: Business Debt & Loan Servicing
          description: "Managing existing business loans, overdrafts and leases: repayments, covenants, refinancing timing and lender reporting, for owners and finance teams."
          projects:
            - name: Debt register of every loan, overdraft and lease
              description: |-
                ## Purpose
                Most businesses that get into trouble with debt did not know the full list of what they owed: the equipment loan signed by a former director, the van on hire purchase, the director's loan, the merchant cash advance taken in a bad month. One register listing every facility with lender, balance, rate, monthly payment and maturity is the page every other project in this area works from.

                ## Milestones
                1. Every loan, overdraft, revolving facility, hire purchase, lease and merchant advance listed, found by working through twelve months of bank debits.
                2. Each line shows lender, facility type, limit, current balance, interest rate, monthly payment, maturity date and account reference.
                3. Each balance agreed to the lender's most recent statement or online account.
                4. Total debt and total monthly debt service shown at the foot of the register.

                ## Notes
                Include director and shareholder loans to the business. They often carry no paperwork, but lenders ask about them and some agreements rank them behind the bank.
              priority: high
              deadlineOffsetDays: 14
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A debt register exists with every facility, its balance agreed to a lender statement, and a total monthly debt service figure."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Scan twelve months of bank statements for every regular payment to a lender or finance company"
                - "Download the latest statement for each loan, card facility and lease"
                - "Record limit, balance, rate, payment and maturity for each facility in one sheet"
                - "Agree each balance in the register to the lender's latest statement @recurring(quarterly)"
            - name: Key terms sheet for each loan agreement
              description: |-
                ## Purpose
                Loan agreements run to dozens of pages, and the terms that bite, such as a minimum cash covenant, a prepayment fee or a ban on paying dividends, are rarely on the first page. A one-page summary per facility, with clause references, means nobody has to reread the full agreement to answer a routine question from the owner or the board.

                ## Milestones
                1. A signed copy of every agreement, amendment and side letter located.
                2. A one-page sheet per facility covering rate and margin, fees, repayment profile, maturity, security, covenants, reporting duties, restrictions and prepayment terms.
                3. Every line on each sheet referenced to the clause it came from.
                4. Any clause nobody in the business understands listed as a question for your lawyer or accountant.

                ## Notes
                Read the definitions section first. A covenant that looks comfortable can be tight once you see how the agreement defines debt or earnings.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: research
                output_kind: artifact
                success_criteria: "Every active facility has a one-page key terms sheet with clause references, and open questions are listed for a named adviser."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Find the signed agreement and every amendment for the largest facility"
                - "Ask the agent to draft a key terms summary from the agreement text, then check every line against the clause"
                - "Repeat the summary for each remaining facility in the debt register"
                - "List the clauses that need explaining and send them to your adviser"
            - name: Repayment calendar for every facility
              description: |-
                ## Purpose
                Repayments leave the account on different days, some monthly, some quarterly, with interest-only periods ending and balloon payments years out, and a payment that bounces can count as a default. A single calendar of every debt payment for the next twenty-four months shows the busy weeks and the large one-off amounts long before they arrive.

                ## Milestones
                1. Every scheduled repayment, interest payment and fee for the next twenty-four months entered with date and amount.
                2. Balloon payments, interest-only end dates and rate reset dates marked separately.
                3. The account each payment leaves from recorded beside it.
                4. Weeks where total debt payments exceed a set amount highlighted for cash planning.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A twenty-four month repayment calendar covers every facility in the debt register, with balloon and reset dates marked."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Take each facility's repayment profile from its key terms sheet"
                - "Enter every payment date and amount for the next twenty-four months"
                - "Mark balloon payments and the end of any interest-only period in a different colour"
                - "Roll the calendar forward another twelve months @recurring(yearly)"
            - name: Amortisation schedule for each term loan
              description: |-
                ## Purpose
                Without a schedule, nobody can say how much of next month's payment is interest, what the balance will be at the year end or what it would cost to clear the loan early. Building one per term loan from the agreement, and checking it against the lender's figures, gives the books, the forecast and any refinancing conversation the same numbers.

                ## Milestones
                1. A schedule per term loan showing opening balance, payment, interest, principal and closing balance for every period to maturity.
                2. The schedule's current balance agreed to the lender's statement within a small rounding difference.
                3. Year-end balances split into amounts due within one year and after one year.
                4. Rate changes on variable loans entered as they happen.

                ## Notes
                Lenders calculate interest on different day counts, so ask yours which basis they use if your figures drift by more than a few pence a month.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Each term loan has an amortisation schedule whose current balance matches the lender's statement, with the within-one-year split shown."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Ask the lender for their repayment schedule for each term loan"
                - "Build a schedule from the original amount, rate, term and payment date"
                - "Compare your current balance with the lender's and explain any difference"
                - "Add a column splitting each year-end balance into due within and after one year"
            - name: Covenant list and test calendar
              description: |-
                ## Purpose
                Covenants are promises in the agreement, such as keeping interest cover above a level or net debt below a multiple of earnings, and breaching one can let the lender demand repayment even when every instalment has been paid. Listing each covenant with its exact definition, test date and reporting deadline turns a clause buried in the agreement into a date in the diary.

                ## Milestones
                1. Every financial covenant listed with its threshold and the agreement's own definition of each term in it.
                2. Every non-financial covenant listed: insurance, restrictions on new borrowing, dividends, asset sales and change of control.
                3. Test dates, the period each test covers and the deadline for sending the certificate entered in a calendar for two years.
                4. An owner named for each covenant.
              priority: high
              deadlineOffsetDays: 45
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A covenant calendar lists every financial and non-financial covenant with definitions, test dates, deadlines and a named owner."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Copy the covenant clause and the definitions section from each agreement"
                - "List each financial covenant with its threshold and testing period"
                - "Enter each test date and certificate deadline in the finance calendar"
                - "Name who calculates and who signs off each covenant"
            - name: Map of security, guarantees and registered charges
              description: |-
                ## Purpose
                Lenders take security over property, equipment, receivables or the whole business, and often a personal guarantee from the owner, and these outlast the people who signed them. Knowing exactly what is pledged to whom matters the day you want to sell an asset, raise new finance or release a guarantee.

                ## Milestones
                1. Every debenture, fixed charge, floating charge and asset-specific security listed with the lender and assets covered.
                2. The public register of charges checked and any charge for a loan already repaid flagged for release.
                3. Every personal and cross-company guarantee recorded with the guarantor, the amount and the facility it supports.
                4. Assets free of any security identified.

                ## Notes
                In many countries charges are registered on the company registry. A charge left on the register after repayment can hold up a new facility, so ask the old lender to file its release.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A written map lists every charge and guarantee with the lender, assets and guarantor, checked against the public charges register."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Search the company registry for charges registered against the business"
                - "Match each registered charge to a facility in the debt register"
                - "List every personal guarantee the owners and directors have signed"
                - "Flag any charge that relates to a loan already repaid"
            - name: Signed debt document archive
              description: |-
                ## Purpose
                When a lender asks for the signed amendment from three years ago, or an auditor wants the waiver letter, the copy is usually in someone's old inbox. A single folder per facility holding the signed agreement, every amendment, waiver, side letter, security document and redemption letter makes those requests a two-minute job.

                ## Milestones
                1. One folder per facility with a fixed naming pattern: date, lender, document type.
                2. Signed agreements, amendments, waivers, security documents and guarantees filed for every active facility.
                3. Documents for repaid facilities kept in a closed folder with the release evidence.
                4. Access limited to the owners and the finance lead.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Every active facility has a folder holding its signed agreement and all amendments, named in a consistent date, lender and type pattern."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Create one folder per facility using a date, lender and type naming pattern"
                - "Search email and the drive for signed agreements, amendments and waivers"
                - "Ask each lender for copies of any signed document you cannot find"
                - "Move documents for repaid facilities into a closed folder"
            - name: True annual cost of borrowing baseline
              description: |-
                ## Purpose
                The headline rate is only part of what debt costs: arrangement fees, monitoring fees, non-utilisation fees on unused limits, insurance the lender requires and the margin over a moving reference rate all add up. Working out the full annual cost of each facility as a percentage of the average balance shows which debt is expensive and gives a fair baseline for any refinancing quote.

                ## Milestones
                1. Last year's interest, fees and charges collected for every facility from statements and the ledger.
                2. An all-in annual cost per facility in money and as a percentage of the average balance.
                3. Facilities ranked from most to least expensive.
                4. The baseline saved for comparison with future offers.
              priority: medium
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "Each facility has an all-in annual cost figure and percentage, ranked, using a full year of statements and ledger entries."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Pull last year's interest and fee postings for each facility from the ledger"
                - "Add any fees charged straight to the account that never reached the ledger"
                - "Divide each facility's total cost by its average balance for the year"
                - "Recalculate the all-in cost after the year-end accounts are final @recurring(yearly)"
            - name: Monthly debt payment funding check
              description: |-
                ## Purpose
                One failed direct debit to a lender costs a fee, a note on the file and sometimes a technical default, and it almost always happens because cash was in the wrong account on the wrong day. A short checklist run before the busiest payment week confirms every debt payment due in the next ten days is covered.

                ## Milestones
                1. A checklist listing each debt payment, its date, amount and paying account.
                2. A rule for how much buffer must sit in each paying account before payments leave.
                3. The check run monthly for six months without a failed debt payment.
                4. A named back-up person who can move funds if the usual person is away.

                ## Notes
                Start from the **Operational checklist** template.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Six consecutive monthly funding checks completed with no failed or late debt payment."
                cadence: rolling
              tasks:
                - "Create the funding checklist from the repayment calendar"
                - "Agree the minimum buffer to keep in each paying account"
                - "Check every debt payment due in the next ten days is covered by cleared funds @recurring(monthly:24)"
                - "Name a back-up person with authority to move money between accounts"
            - name: Posting repayments as principal and interest
              description: |-
                ## Purpose
                Repayments posted as one lump to the loan account leave the balance wrong and the interest charge missing from the profit and loss, which then distorts every covenant built on earnings or interest. Splitting each payment from the amortisation schedule every month keeps the loan balance, the interest cost and the lender's statement in step.

                ## Milestones
                1. A posting rule for each facility saying which accounts take interest, fees and principal.
                2. Each month's repayments split using the amortisation schedule or the lender's statement.
                3. Loan balances in the books matching lender statements at every quarter end.
                4. Past lump-sum postings corrected with your accountant's agreement.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "For three consecutive quarter ends, each loan balance in the books matches the lender's statement and interest is posted separately."
                cadence: rolling
              tasks:
                - "Write the posting rule for interest, fees and principal on each facility"
                - "Split last month's debt payments into interest and principal in the books @recurring(monthly:5)"
                - "Ask your accountant how to correct any past lump-sum postings"
            - name: Quarterly covenant compliance calculation
              description: |-
                ## Purpose
                Lenders test covenants from your figures, so the first person to spot a breach should be you, weeks before the certificate is due. Calculating each covenant exactly as the agreement defines it, every quarter, with a working paper someone else can follow, is the core routine of debt servicing.

                ## Milestones
                1. A calculation workbook per facility using the agreement's own definitions, line by line.
                2. Each quarter's results recorded beside the threshold, with headroom as a percentage.
                3. Every adjustment to reported figures explained and referenced to the definition that allows it.
                4. The calculation reviewed by a second person before any certificate is signed.

                ## Notes
                Build from the management accounts after the month-end close, not from a draft. A certificate based on figures that later change is an awkward conversation.
              priority: high
              frontmatter:
                mode: operating
                output_kind: deliverable
                success_criteria: "Four consecutive quarterly covenant calculations completed, reviewed by a second person and filed with their working papers."
                cadence: cyclic
                effort_hours_estimate: "4"
              tasks:
                - "Build a covenant workbook that follows each definition in the agreement"
                - "Calculate every covenant from the closed quarter's figures @recurring(quarterly)"
                - "Record headroom against each threshold as a percentage"
                - "Have a second person check the workings before sign-off"
            - name: Covenant headroom early warning tracker
              description: |-
                ## Purpose
                Quarterly tests tell you where you were; a monthly projection tells you where you are heading. Rolling the forecast into the covenant formulas each month gives months of warning of a tight test, which is when lenders are most willing to agree a reset or waiver.

                ## Milestones
                1. Projected covenant results for the next four test dates, refreshed monthly from the forecast.
                2. Amber and red headroom levels agreed with the owners, for example below twenty and below ten percent.
                3. An agreed action for each level, from closer watching to an early lender call.
                4. Twelve months of projections kept to show how accurate they were.

                ## Notes
                Start from the **Metrics log** template.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Twelve monthly headroom projections logged against agreed amber and red levels, with any triggered action recorded."
                cadence: rolling
              tasks:
                - "Set up a headroom log from the metrics log template"
                - "Agree amber and red headroom levels with the owners"
                - "Run the latest forecast through the covenant formulas and log the headroom @recurring(monthly:15)"
                - "Write down what happens when a test turns amber or red"
            - name: Lender reporting pack and compliance certificate
              description: |-
                ## Purpose
                Most facilities oblige you to send management accounts, annual accounts, a signed compliance certificate and sometimes a budget or aged debtor list by fixed deadlines, and a late pack is itself a breach. Treating lender reporting as a controlled obligation, with a diary, an owner and a standard pack, keeps you on the right side of the agreement and the lender confident.

                ## Milestones
                1. Every reporting obligation listed with the document, the deadline and the recipient for each lender.
                2. A standard pack layout agreed with each lender so the format stops changing.
                3. Each compliance certificate signed by the authorised officer named in the agreement.
                4. Twelve months of reports sent on or before their deadline.

                ## Notes
                Start from the **Compliance control** template. Keep the email or upload receipt for every pack sent; it is your evidence if a lender says one was missed.
              priority: high
              frontmatter:
                mode: service
                output_kind: deliverable
                success_criteria: "Every lender report due in a twelve-month period was sent on time, with proof of delivery filed."
                cadence: cyclic
              tasks:
                - "List every reporting duty in each agreement with its deadline and recipient"
                - "Agree a standard pack format with each lender's relationship contact"
                - "Check which lender reports fall due this month and who is preparing each @recurring(monthly:18)"
                - "File the delivery receipt for every pack and certificate sent"
            - name: Weekly overdraft and revolving facility watch
              description: |-
                ## Purpose
                Overdrafts and revolving facilities are meant to swing, and a balance that never comes back up towards zero is a warning sign to you and to the lender. A five-minute weekly note of the peak and lowest balance against the limit shows whether the facility is cushioning timing gaps or quietly funding losses.

                ## Milestones
                1. Weekly peak and lowest balance recorded against the limit.
                2. The lowest point each month compared with the previous six months.
                3. A trigger agreed for raising persistent use with the owners.
                4. No unarranged overdraft or limit excess in the period tracked.

                ## Notes
                Many lenders call an overdraft that has not come back into credit for a long stretch a hardcore balance, and expect it to be moved onto a term loan. See the project on that decision.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Six months of weekly overdraft peaks and lows recorded against the limit, with no limit excess."
                cadence: rolling
              tasks:
                - "Create a simple weekly log of overdraft peak, low and limit"
                - "Record last week's peak and lowest overdraft balance @recurring(weekly:mon)"
                - "Agree with the owners when persistent use should be discussed"
            - name: Annual facility review and renewal
              description: |-
                ## Purpose
                Overdrafts and revolving facilities are usually reviewed and renewed each year, and a lender who receives a late, thin pack may renew on worse terms or a smaller limit. Preparing the review as a fixed event, with accounts, forecast, covenant history and a clear request, puts you in charge of the conversation.

                ## Milestones
                1. Each facility's review or renewal date known and in the calendar.
                2. A review pack ready a month before: latest accounts, forecast, covenant history and planned changes.
                3. A written request for the coming year, such as limit, pricing or covenant changes.
                4. The renewal letter received, checked against the request and filed.
              priority: high
              frontmatter:
                mode: operating
                output_kind: event-completion
                success_criteria: "Each annual facility review was prepared with a written pack and request, and the renewal letter was checked and filed."
                cadence: cyclic
                effort_hours_estimate: "6"
              tasks:
                - "Confirm the review or renewal date of each facility with the lender"
                - "Start the review pack and the written request two months before renewal @recurring(yearly)"
                - "Check the renewal letter against what was asked for before signing"
                - "File the signed renewal and update the key terms sheet"
            - name: Lease and asset finance end-of-term watch
              description: |-
                ## Purpose
                Leases and hire purchase deals end with choices: return the asset, extend, pay a final balloon or option fee, or let it roll onto secondary rentals that can run for years unnoticed. Checking end dates each quarter gives time to give notice, budget the final payment or arrange replacement equipment.

                ## Milestones
                1. Every lease and hire purchase listed with end date, notice period and end-of-term options.
                2. Notice deadlines entered in the calendar at least three months ahead.
                3. A decision recorded for each agreement ending in the next twelve months.
                4. No agreement rolling into secondary rental by default.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every lease ending within twelve months has a recorded end-of-term decision and its notice deadline in the calendar."
                cadence: rolling
              tasks:
                - "Note the end date and notice period of every lease and hire purchase"
                - "Check which agreements end in the next twelve months and decide each one @recurring(quarterly)"
                - "Ask the finance company for the end-of-term options in writing"
            - name: Debt maturity ladder review
              description: |-
                ## Purpose
                Several facilities maturing in the same six months is a refinancing risk, because lenders tighten at the same time for everyone. A quarterly look at a ladder showing how much debt matures in each half-year over the next five years shows bunching early enough to spread it out.

                ## Milestones
                1. A chart or table of debt maturing in each half-year for five years.
                2. Any half-year where maturities exceed an agreed share of total debt flagged.
                3. Refinancing start dates set for every facility maturing within eighteen months.
                4. The ladder shared with the owners or board each quarter.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: knowledge
                success_criteria: "A five-year maturity ladder is refreshed each quarter, with refinancing start dates set for every facility maturing within eighteen months."
                cadence: rolling
              tasks:
                - "Build a five-year table of debt maturing in each half-year"
                - "Refresh the ladder and flag any facility within eighteen months of maturity @recurring(quarterly)"
                - "Set a refinancing start date for each facility that is flagged"
            - name: Lender-required insurance check
              description: |-
                ## Purpose
                Many agreements require specific cover, such as buildings insurance with the lender noted as loss payee or key person cover on the founder, and a lapsed policy can be a default. Checking once a year that every required policy exists, names the lender correctly and has been renewed avoids a breach that has nothing to do with trading.

                ## Milestones
                1. Each insurance requirement in each agreement listed.
                2. The policy meeting each requirement identified with insurer, number and renewal date.
                3. The lender's interest noted on the policies where the agreement asks for it.
                4. Evidence of cover sent to each lender that requires it.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every insurance requirement in the debt agreements is matched to a current policy, with evidence sent to the lenders that require it."
                cadence: cyclic
              tasks:
                - "List the insurance clauses in each agreement"
                - "Match each requirement to a current policy and its renewal date"
                - "Ask your broker to note the lender's interest where the agreement requires it"
                - "Send renewed insurance evidence to each lender that asks for it @recurring(yearly)"
            - name: Reading a facility agreement clause by clause
              description: |-
                ## Purpose
                Owners often sign a facility agreement after skimming the term sheet, then find the real terms in the boilerplate. Working through one agreement section by section, definitions, representations, undertakings, events of default and boilerplate, teaches you where the obligations live so every later agreement is faster to read.

                ## Milestones
                1. The main sections of a standard facility agreement identified in one of your own agreements.
                2. The representations you repeat each time you draw down or certify listed.
                3. Positive and negative undertakings separated into what you must do and must not do.
                4. Questions you could not answer taken to your lawyer and the answers recorded.
              priority: medium
              deadlineOffsetDays: 60
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "One of the business's own facility agreements is annotated section by section, with open questions answered by a lawyer."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Pick the facility agreement with the most covenants to study"
                - "Mark where definitions, undertakings and events of default start"
                - "List the representations the business repeats at each drawdown"
                - "Book thirty minutes with your lawyer for the questions left over"
            - name: How lenders calculate interest cover and debt service cover
              description: |-
                ## Purpose
                Interest cover and debt service cover ratios ask the same question in different ways: can the business pay what it owes from what it earns? Learning how each is built, which earnings figure sits on top and which payments sit underneath, lets you predict a test result and explain a movement to the lender in one sentence.

                ## Milestones
                1. Interest cover and debt service cover each calculated by hand from last year's accounts.
                2. The difference between using earnings and using cash flow in the numerator understood.
                3. The effect of a ten percent fall in earnings on each ratio worked through.
                4. Your own agreements' versions of each ratio compared with the textbook form.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Both ratios calculated by hand from last year's accounts, with a written sensitivity to a ten percent fall in earnings."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Read a plain-language explanation of interest cover and debt service cover"
                - "Calculate both ratios by hand from last year's accounts"
                - "Rework both ratios with earnings ten percent lower"
                - "Compare each with the definition in your own facility agreement"
            - name: Net debt, gearing and the debt to earnings test
              description: |-
                ## Purpose
                Many lenders cap net debt as a multiple of earnings before interest, tax, depreciation and amortisation, and the multiple moves with what counts as debt, what cash can be netted off and which one-off costs can be added back. Understanding the moving parts stops you being surprised by a result that looked safe on the management accounts.

                ## Milestones
                1. Net debt worked out for the business, including leases and hire purchase where the agreement counts them.
                2. The earnings figure built step by step, with each add-back the agreement allows listed.
                3. The difference between gearing on the balance sheet and the earnings multiple explained in a paragraph.
                4. Add-backs the lender may challenge, such as recurring one-offs, flagged.

                ## Notes
                Lenders vary a lot on add-backs. Agree any doubtful one in writing before the test date, not after.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A worked net debt to earnings calculation for the business, with each add-back referenced to the agreement and doubtful ones flagged."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "List what your agreement counts as debt and what cash it lets you net off"
                - "Build the earnings figure line by line with each permitted add-back"
                - "Write one paragraph on how this differs from balance sheet gearing"
                - "Flag any add-back you expect the lender to question"
            - name: Fixed, variable and capped interest explained
              description: |-
                ## Purpose
                Variable-rate loans move with a reference rate plus a margin, fixed rates do not, and caps, collars and swaps sit in between with their own costs and break terms. Knowing how your own debt is priced, and what a one percent rate rise would cost a year, is basic preparation before any conversation about fixing.

                ## Milestones
                1. The pricing basis of every facility written down: reference rate, margin, fixed period or hedge.
                2. The annual cost of a one and a two percentage point rise in the reference rate calculated.
                3. The main features and risks of a fixed rate, a cap and a swap summarised in your own words.
                4. Any existing hedge's maturity and break terms noted.

                ## Notes
                This is for understanding, not for choosing a product. Hedging decisions belong with a qualified adviser who is independent of the seller.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A note covers the pricing basis of every facility and the annual cost of a one and two point rate rise."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Write down the reference rate and margin for each variable facility"
                - "Calculate the yearly cost of a one and two point rise in the reference rate"
                - "Summarise how a fixed rate, a cap and a swap each work"
            - name: Events of default, cross-default and cure rights
              description: |-
                ## Purpose
                Late payment is only one event of default; a breached covenant, a misstatement in a certificate, a court judgment or a default on another loan can all trigger the same clause. Knowing the full list, which ones have grace periods or cure rights and which spread to other facilities, tells you how much time you have when something goes wrong.

                ## Milestones
                1. Every event of default in each agreement listed with any grace period.
                2. Cross-default clauses identified and the facilities they link mapped.
                3. Any equity cure or other cure right, and its limits, written down.
                4. A one-page note shared with the owners on what to do in the first week after a possible default.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A one-page note lists each agreement's events of default, grace periods, cross-default links and cure rights, shared with the owners."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Copy the events of default clause from each agreement"
                - "Note the grace period, if any, for each event"
                - "Map which facilities are linked by cross-default"
                - "Write a one-page first-week note and share it with the owners"
            - name: Prepayment fees and break costs explained
              description: |-
                ## Purpose
                Paying a loan off early can cost a percentage fee, a sliding scale that falls each year, or for fixed-rate and hedged loans a break cost that depends on where rates have moved since you signed. Understanding the method in each agreement, and asking the lender for an illustrative figure, keeps a refinancing plan honest.

                ## Milestones
                1. The prepayment clause of each facility summarised in a sentence.
                2. The notice period and minimum prepayment amount for each recorded.
                3. An illustrative redemption or break cost figure obtained from each lender.
                4. The dates when prepayment fees step down noted in the calendar.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Each facility's prepayment terms are summarised, with an illustrative redemption figure from the lender and step-down dates in the calendar."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Find the prepayment and break cost clause in each agreement"
                - "Ask each lender for an illustrative redemption figure"
                - "Put any fee step-down dates in the finance calendar"
            - name: Hire purchase, finance lease and operating lease differences
              description: |-
                ## Purpose
                Vans, machines and IT kit are often financed in ways that look alike on the monthly bank statement but differ on who owns the asset, who insures and repairs it, whether there is a balloon and what happens at the end. Knowing which type each agreement is avoids nasty surprises at the end of the term and in lender questions about total debt.

                ## Milestones
                1. Each asset finance agreement classified as hire purchase, finance lease, operating lease or contract hire.
                2. Ownership, maintenance, insurance and end-of-term terms noted for each.
                3. Any balloon or residual value payment recorded in the repayment calendar.
                4. The accounting treatment of each confirmed with your accountant.

                ## Notes
                How leases are shown in the accounts depends on the accounting standard you report under. Agree the treatment with your accountant; this project is about the commercial terms.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Every asset finance agreement is classified, with ownership, end-of-term terms and balloon payments recorded and treatment confirmed by the accountant."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "List every asset finance agreement with its supplier and asset"
                - "Classify each one from its terms and conditions"
                - "Add any balloon or residual payment to the repayment calendar"
                - "Ask your accountant to confirm how each agreement is treated in the accounts"
            - name: Refinancing timing decision
              description: |-
                ## Purpose
                Refinancing started three months before maturity leaves you taking whatever the existing lender offers; started twelve to eighteen months out, it leaves time to compare lenders, fix the accounts and avoid prepayment fees. Deciding when to begin, against the maturity ladder and the trading outlook, turns refinancing from a deadline into a choice.

                ## Milestones
                1. Every facility maturing in the next two years listed with its prepayment fee schedule.
                2. The best window for each refinancing chosen, balancing fees, covenant headroom and when the next annual accounts will be ready.
                3. The information a new lender will ask for listed and gaps identified.
                4. A dated decision recorded with the owners on when and how to approach the market.
              priority: high
              deadlineOffsetDays: 60
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A dated, owner-approved decision sets the refinancing start date for every facility maturing within two years."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "List facilities maturing in the next two years with their fee step-down dates"
                - "Note when the next audited or year-end accounts will be available"
                - "Draft the refinancing start date for each facility with reasons"
                - "Agree the dates with the owners and record the decision"
            - name: Like-for-like comparison of refinancing offers
              description: |-
                ## Purpose
                Two term sheets with the same headline rate can differ by thousands a year once fees, security, covenants, prepayment terms and reporting duties are counted. Laying offers side by side on the same criteria, and pricing each over its full term, shows which one is actually cheaper and which one is safer.

                ## Milestones
                1. At least two offers or indicative term sheets in hand.
                2. A comparison table covering all-in cost over the term, security, guarantees, covenants, prepayment terms, reporting and the lender's track record in a downturn.
                3. Questions on each term sheet answered in writing by the lender.
                4. A preferred offer chosen and reviewed by your lawyer before signing.

                ## Notes
                Start from the **Purchase decision** template. A broker or adviser may help widen the field; ask how they are paid before you start.
              priority: medium
              deadlineOffsetDays: 90
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A written comparison of at least two offers on all-in cost and terms, with the chosen one reviewed by a lawyer."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Set up the comparison from the purchase decision template"
                - "Calculate the all-in cost of each offer over its full term"
                - "Send each lender your written questions on the term sheet"
                - "Ask your lawyer to review the chosen offer before acceptance"
            - name: Early repayment versus holding the cash
              description: |-
                ## Purpose
                Surplus cash can clear an expensive loan, but once repaid a term loan rarely comes back, while a cash buffer protects against the next bad quarter. Weighing the interest saved against prepayment fees, lost flexibility and covenant effects, with your accountant, gives a decision you can explain later.

                ## Milestones
                1. The interest saved by repaying each candidate facility calculated after prepayment fees.
                2. The minimum cash buffer the business needs agreed with the owners.
                3. The effect on covenants, especially minimum cash or liquidity tests, checked.
                4. A decision recorded: repay in full, repay in part, or hold, with the reasons.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A recorded decision on early repayment states the interest saved, fees, buffer kept and covenant effect, agreed with the owners."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Calculate the net interest saved by repaying each facility early"
                - "Agree the minimum cash buffer the business must keep"
                - "Check whether repayment affects any minimum cash covenant"
                - "Discuss the options with your accountant and record the decision"
            - name: Consolidating small loans and expensive short-term debt
              description: |-
                ## Purpose
                Businesses that have added a card balance here, a merchant cash advance there and an equipment loan on top can end up with five payment dates and a blended cost far above a single facility. Testing whether one larger loan would cost less and be easier to service, after fees and security, is worth doing once the register shows the full picture.

                ## Milestones
                1. Facilities with the highest all-in cost and the smallest balances identified.
                2. The total monthly payment and blended cost of the current mix calculated.
                3. At least one consolidation quote obtained and compared after fees.
                4. A decision recorded to consolidate, part-consolidate or leave as is.

                ## Notes
                Moving short-term debt onto a longer loan lowers the monthly payment but can raise the total interest paid. Compare both figures.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A recorded consolidation decision compares current blended cost and payments with at least one quote after fees."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Sort the debt register by all-in cost and balance"
                - "Work out the total monthly payment and blended cost of the current mix"
                - "Request one consolidation quote from an existing or new lender"
                - "Compare total interest over the term as well as the monthly payment"
            - name: Fixing or capping a variable-rate loan
              description: |-
                ## Purpose
                When a large share of the debt floats with the reference rate, a rise can wipe out a year's profit growth and squeeze interest cover. Deciding whether to fix, cap or stay variable, with independent advice and a clear view of break costs, protects the plan without locking in a product you do not understand.

                ## Milestones
                1. The share of debt on variable rates and the cost of a two point rise known.
                2. Quotes for a fixed rate or cap obtained, with break or exit terms in writing.
                3. Independent advice taken, separate from the bank selling the product.
                4. A decision recorded with the board or owners, including what would prompt a review.

                ## Notes
                Interest rate hedges have caused serious losses for small businesses that did not understand the break costs. Never sign one without independent advice.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A recorded rate decision for the variable debt, backed by written quotes, break terms and independent advice."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Work out what share of total debt is on a variable rate"
                - "Ask the lender for fixed-rate and cap quotes with break terms in writing"
                - "Book independent advice before agreeing any hedge"
                - "Record the decision and the trigger for reviewing it"
            - name: Turning a hardcore overdraft into a term loan
              description: |-
                ## Purpose
                An overdraft that never returns to credit is really long-term borrowing at short-term terms: repayable on demand and often more expensive. Moving the permanent part onto an amortising term loan, and keeping a smaller overdraft for true timing gaps, usually suits both you and the lender.

                ## Milestones
                1. The permanent part of the overdraft measured from twelve months of lowest balances.
                2. A term loan proposal for that amount, with a repayment the forecast can afford.
                3. The lender's offer compared with the current overdraft cost.
                4. The new structure in place with a reduced overdraft limit.
              priority: medium
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "The hardcore overdraft balance is moved to an amortising term loan and the overdraft limit reduced, with costs compared beforehand."
                cadence: phased
                effort_hours_estimate: "5"
              tasks:
                - "Find the lowest overdraft balance in each of the last twelve months"
                - "Work out what term loan repayment the cash forecast can carry"
                - "Ask the lender for a term loan proposal for the permanent balance"
                - "Compare the new structure's annual cost with the current overdraft"
            - name: Cutting commitment, monitoring and arrangement fees
              description: |-
                ## Purpose
                Fees that seemed small at signing keep running: non-utilisation fees on limits nobody uses, annual monitoring or renewal fees, valuation charges and late reporting penalties. A line-by-line review shows which limits can be reduced and which fees are worth raising at the next renewal.

                ## Milestones
                1. Every fee charged in the last year listed by facility and type.
                2. Unused limits identified, with the fee each costs a year.
                3. A short list of fees to challenge or limits to reduce.
                4. Outcomes of each request recorded.
              priority: low
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A list of last year's debt fees by facility exists, with at least one limit reduced or fee renegotiated and the saving recorded."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "List every fee charged on each facility in the last year"
                - "Calculate what each unused limit costs in commitment fees"
                - "Raise the fees worth challenging at the next lender review"
                - "Review the fees on each facility statement against the agreement @recurring(yearly)"
            - name: Covenant breach response and waiver request
              description: |-
                ## Purpose
                A projected or actual breach is far less damaging when the lender hears it from you first, with numbers, a cause and a plan, than when it appears on a certificate. Running a breach as a structured event, with legal advice and a clear waiver or reset request, protects the relationship and the business.

                ## Milestones
                1. The breach or projected breach confirmed with workings and the clause it relates to.
                2. Legal advice taken on the consequences and on what to say.
                3. A recovery plan with revised forecast and actions written before the lender meeting.
                4. A written waiver, reset or amendment received and filed, with any fee recorded.
                5. New covenant levels updated in the covenant calendar and headroom tracker.

                ## Notes
                Start from the **Remediation plan** template. Do not sign a compliance certificate you believe is wrong; take advice first.
              priority: high
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A signed waiver or amendment is on file for the breach, with a written recovery plan and updated covenant calendar."
                cadence: one-shot
                effort_hours_estimate: "10"
              tasks:
                - "Recheck the covenant calculation and confirm the breach with a second person"
                - "Book a call with your lawyer before contacting the lender"
                - "Draft the recovery plan and waiver request from the remediation plan template"
                - "Meet the lender with the plan and confirm the outcome in writing"
            - name: Payment holiday or restructuring request
              description: |-
                ## Purpose
                When trading falls and the forecast shows repayments cannot be met, asking early for a capital holiday, an extended term or a revised profile keeps options open that disappear once a payment is missed. A clear request backed by a thirteen-week cash forecast and evidence of the cause gives the lender something to approve.

                ## Milestones
                1. A thirteen-week cash forecast showing the gap and when it closes.
                2. The specific request written: what changes, for how long, and how it is repaid.
                3. Advice taken from your accountant and, where solvency is in doubt, an insolvency professional.
                4. The lender's written response received and the new schedule entered in the repayment calendar.

                ## Notes
                If the business may not be able to pay its debts, directors can have personal legal duties to creditors. Get professional advice before agreeing anything.
              priority: medium
              frontmatter:
                mode: event
                output_kind: deliverable
                success_criteria: "A written restructuring request backed by a thirteen-week forecast was sent, and the lender's written answer and any new schedule are on file."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Build a thirteen-week cash forecast showing the size and timing of the gap"
                - "Write the exact change you are asking the lender for"
                - "Take advice from your accountant before sending the request"
                - "Enter any agreed new schedule in the repayment calendar"
            - name: Balloon payment and loan maturity plan
              description: |-
                ## Purpose
                A balloon or bullet repayment can be larger than a year's profit, and it arrives on a fixed date whether trading is good or not. Planning a year or more ahead how it will be met, through refinancing, a sale, saved cash or a mix, removes the single largest date risk in many small business balance sheets.

                ## Milestones
                1. The amount and date of each balloon or final repayment confirmed with the lender.
                2. The planned source of repayment chosen, with a fallback.
                3. Any cash set aside tracked month by month in a separate account.
                4. The refinancing or sale timetable agreed with the owners, finishing at least three months before the date.
              priority: high
              deadlineOffsetDays: 180
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "Each balloon payment due within two years has a confirmed amount, a chosen source with fallback, and a timetable ending three months early."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Ask the lender to confirm the final repayment amount and date in writing"
                - "Choose the main and fallback way of meeting the payment"
                - "Open a separate account for any cash being set aside"
                - "Agree a timetable with the owners that finishes three months early"
            - name: First drawdown and conditions precedent
              description: |-
                ## Purpose
                Signing a facility does not release the money: the lender first needs its conditions precedent, such as board minutes, signed security, insurance evidence, valuations and identity checks. Working through the list as a project, with an owner per item, gets the funds released on the day they are needed.

                ## Milestones
                1. The full conditions precedent list obtained from the lender or its lawyers.
                2. An owner and a target date set for every item.
                3. Every item delivered and confirmed satisfied in writing.
                4. The drawdown request sent and the funds received on the planned date.
              priority: medium
              deadlineOffsetDays: 30
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "All conditions precedent are confirmed satisfied in writing and the funds were received on the planned date."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Ask the lender's lawyers for the conditions precedent list"
                - "Assign an owner and date to every item on the list"
                - "Hold the board meeting that approves the facility and minute it"
                - "Send the drawdown request once the lender confirms every condition is met"
            - name: Telling lenders about a material change
              description: |-
                ## Purpose
                Agreements commonly require notice, and sometimes consent, before you take on new debt, sell a major asset, change ownership, buy a company or pay a dividend. Checking the restrictions and notifying lenders before the change, not after, avoids a breach that could have been a simple letter.

                ## Milestones
                1. The planned change checked against every restriction and notice clause.
                2. Whether notice or prior consent is needed confirmed, with advice if unclear.
                3. The notice or consent request sent with the information the lender needs.
                4. Written consent received before the change happens, where required.
              priority: medium
              frontmatter:
                mode: event
                output_kind: deliverable
                success_criteria: "The planned change was checked against all agreements and any required consent was received in writing before it happened."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Describe the planned change in two sentences"
                - "Check it against the restrictions in each key terms sheet"
                - "Send the notice or consent request to each affected lender"
                - "File the written consent before the change goes ahead"
            - name: Paying off a loan and releasing the security
              description: |-
                ## Purpose
                The last payment on a loan is not the end of it until the lender confirms the balance is nil, cancels the direct debit and releases its charge and any personal guarantee. Closing each facility properly stops ghost charges blocking future borrowing and frees the guarantor.

                ## Milestones
                1. A redemption statement obtained for the payoff date.
                2. The final payment made and a nil balance confirmed in writing.
                3. Direct debits and standing orders to the lender cancelled.
                4. The charge release filed on the public register and guarantees returned or released in writing.
              priority: medium
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "The lender has confirmed a nil balance in writing, the charge release appears on the public register and any guarantee is released."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Request a redemption statement for the planned payoff date"
                - "Make the final payment and ask for written confirmation of a nil balance"
                - "Cancel the direct debit to the lender"
                - "Ask the lender to file the charge release and return any guarantee"
            - name: The first ninety days of a first business loan
              description: |-
                ## Purpose
                Taking a first business loan brings obligations that a business bank account never did: monthly reports, insurance evidence, covenant tests and rules about what you may and may not do. Setting up the basics in the first three months, while the agreement is fresh in your mind, avoids a first-year breach caused by not knowing the rules.

                ## Milestones
                1. The key terms of the loan summarised on one page in plain words.
                2. The repayment date in the calendar and a funding buffer in the account.
                3. The first lender report sent on time.
                4. A thirty-minute check-in with your accountant on how the loan is posted and what to watch.

                ## Notes
                Ask your lender which of their reporting requirements they actually enforce for loans your size. Some are relaxed for small facilities; find out rather than guess.
              priority: medium
              deadlineOffsetDays: 90
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Within ninety days of drawdown the loan has a one-page summary, funded payments, one report sent on time and an accountant check-in held."
                cadence: phased
                effort_hours_estimate: "5"
              tasks:
                - "Write a one-page plain-language summary of your loan terms"
                - "Put the repayment date and the first report deadline in the calendar"
                - "Ask your accountant how the loan and interest should be posted"
                - "Send the first lender report before its deadline"
            - name: Founder personal guarantee exposure map
              description: |-
                ## Purpose
                Founders sign personal guarantees for loans, leases, card facilities and sometimes the office lease, often without keeping a list, and together they can exceed what the founder could ever pay. A clear figure for total personal exposure, and which assets it could reach, informs the founder's household decisions and every later negotiation.

                ## Milestones
                1. Every personal guarantee located, with lender, facility, cap and whether it is joint and several.
                2. Total maximum personal exposure calculated per founder.
                3. The exposure discussed with a spouse or partner where household assets could be affected.
                4. Questions about the guarantees taken to an independent lawyer.

                ## Notes
                Take advice from a lawyer acting for you personally, not for the company, on what each guarantee could mean for you.
              priority: medium
              deadlineOffsetDays: 30
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "Each founder has a written total of their personal guarantee exposure, by lender, reviewed with their own lawyer."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Search your files and email for every guarantee you have signed"
                - "Record the cap and type of each guarantee"
                - "Add up your maximum personal exposure"
                - "Update the exposure total after any new or released guarantee @recurring(yearly)"
            - name: Releasing personal guarantees and surplus security
              description: |-
                ## Purpose
                Guarantees and security taken when the business was young are often more than the lender needs once the loan has been paid down and trading has improved. Asking for releases, with evidence of reduced risk, can free the founder's home from a guarantee and the business's assets for future borrowing.

                ## Milestones
                1. Guarantees and charges that look larger than the remaining debt identified.
                2. A written case for release prepared with current balance, security cover and trading record.
                3. The request made at the annual review or a refinancing.
                4. Releases granted in writing, or the conditions for release recorded.
              priority: low
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A written release request was made for at least one guarantee or charge, with the lender's written answer on file."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Compare each guarantee and charge with the remaining balance it secures"
                - "Draft a one-page case for releasing the largest surplus guarantee"
                - "Raise the release request at the next facility review"
                - "Record the lender's answer and any conditions for a later release"
            - name: Venture debt alongside an equity round
              description: |-
                ## Purpose
                Venture debt is lent against a startup's investors and runway rather than its profits, and its terms, such as warrants, minimum cash covenants, investor abandonment clauses and material adverse change rights, behave differently from bank debt. Founders who understand how it ties to the next round avoid a facility that can be called just when cash is tightest.

                ## Milestones
                1. The venture debt terms summarised, including warrants, fees, interest-only period and covenants.
                2. The months of runway after debt service calculated under the base and downside plans.
                3. Investor consent and information rights connected to the debt mapped.
                4. A board discussion held on how the debt interacts with the next equity round.
              priority: medium
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A board-reviewed note sets out the venture debt terms and runway after debt service under base and downside plans."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Summarise warrants, fees, interest-only period and covenants on one page"
                - "Model runway after debt service in the base and downside plans"
                - "Check months of runway against the minimum cash covenant @recurring(monthly:20)"
                - "Put the debt and the next round on the next board agenda"
            - name: Handover of debt servicing to a new finance manager
              description: |-
                ## Purpose
                Debt servicing knowledge often sits in one person's head: which lender wants the pack by email, which covenant uses a quirky definition, which direct debit comes from the second account. A structured handover when a finance manager joins or leaves keeps every payment, test and report on track through the change.

                ## Milestones
                1. A handover file with the debt register, key terms sheets, calendars and last four covenant calculations.
                2. The new person introduced to each lender's relationship contact.
                3. The next covenant calculation and lender report done by the new person with review.
                4. Bank mandates and lender portal access updated.

                ## Notes
                Start from the **Onboarding plan** template.
              priority: medium
              frontmatter:
                mode: service
                output_kind: artifact
                success_criteria: "The new finance manager has run one covenant calculation and one lender report under review, with access and mandates updated."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Build the handover file from the onboarding plan template"
                - "Introduce the new finance manager to each lender's contact"
                - "Update bank mandates and lender portal users"
                - "Review the new person's first covenant calculation line by line"
            - name: Government-backed loan scheme conditions
              description: |-
                ## Purpose
                Loans under public guarantee or development bank schemes often carry extra conditions on top of the lender's own: limits on use of funds, state aid or subsidy declarations, reporting to the scheme and rules on repayment terms. Recording those conditions and checking them once a year protects the guarantee and avoids clawback.

                ## Milestones
                1. The scheme name and its conditions identified from the offer documents.
                2. Restrictions on use of funds and any declarations you made recorded.
                3. Scheme reporting or certification deadlines added to the covenant calendar.
                4. Evidence of how the funds were used kept in the debt archive.
              priority: low
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "The scheme conditions, declarations and reporting dates are recorded, with evidence of use of funds filed."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Find the scheme name and conditions in the loan offer"
                - "Record the declarations you signed about eligibility and use of funds"
                - "File evidence of what the loan was spent on"
                - "Check the scheme conditions are still being met @recurring(yearly)"
            - name: Repayment profile for a seasonal business
              description: |-
                ## Purpose
                Tourism, agriculture, retail and event businesses earn most of their cash in a few months, yet standard loans ask for the same payment every month. Asking for a profile that matches the cash cycle, such as reduced payments in the quiet season, often costs little and prevents a predictable squeeze every year.

                ## Milestones
                1. Two or three years of monthly cash receipts laid out to show the seasonal pattern.
                2. The months where debt payments exceed a set share of receipts identified.
                3. A proposed seasonal repayment profile with the same total over the year.
                4. The lender's answer received and any new profile entered in the repayment calendar.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A seasonal repayment proposal based on three years of monthly receipts was put to the lender and the outcome recorded."
                cadence: phased
                effort_hours_estimate: "5"
              tasks:
                - "Chart monthly cash receipts for the last two or three years"
                - "Mark the months where debt payments squeeze cash hardest"
                - "Draft a seasonal repayment profile with the same annual total"
                - "Put the proposal to the lender at the next review"
            - name: Borrowing base certificate for invoice or asset-based lending
              description: |-
                ## Purpose
                Invoice finance and asset-based facilities let you borrow a percentage of eligible receivables or stock, recalculated every month or more often, and an overstated certificate is a serious breach. A controlled routine for building the borrowing base, excluding ineligible items and reconciling to the ledger, keeps availability accurate and audits uneventful.

                ## Milestones
                1. The eligibility rules, advance rates and concentration limits written out from the agreement.
                2. A certificate workbook that starts from the aged debtor or stock report and applies every exclusion.
                3. The certificate reconciled to the ledger before submission each period.
                4. A clean result at the lender's next field audit.

                ## Notes
                Common exclusions are invoices past a set age, related-party debtors, disputed items, overseas debtors and contra accounts. Your agreement lists the ones that apply.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: deliverable
                success_criteria: "Twelve borrowing base certificates submitted on time, each reconciled to the ledger, with no findings at the next field audit."
                cadence: rolling
              tasks:
                - "Write out the eligibility rules and advance rates from the agreement"
                - "Build the certificate workbook from the aged debtor or stock report"
                - "Prepare, reconcile and submit the borrowing base certificate @recurring(monthly:10)"
                - "Keep the support for each exclusion for the lender's field audit"
            - name: Board-approved debt and gearing policy
              description: |-
                ## Purpose
                Without a written policy, each new loan is judged on its own and total borrowing creeps up without anyone deciding it should. A short policy setting maximum debt relative to earnings, minimum covenant headroom, the target share of fixed-rate debt and who may approve new borrowing gives managers and lenders a clear frame.

                ## Milestones
                1. Current debt measured against proposed policy limits.
                2. A one-page policy drafted covering debt limits, headroom, rate mix, maturity spread and approval levels.
                3. The policy approved by the board or owners and minuted.
                4. Compliance with the policy reported at least twice a year.
              priority: medium
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A one-page debt policy is board approved and minuted, with compliance against it reported at least twice a year."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Measure current debt, headroom and rate mix against possible limits"
                - "Draft a one-page debt policy with limits and approval levels"
                - "Present the policy to the board or owners for approval"
                - "Review the debt policy limits with the board @recurring(yearly)"
            - name: Quarterly debt report to the board or investors
              description: |-
                ## Purpose
                Boards and investors usually see debt as a single line on the balance sheet, which hides maturities, covenant headroom and rate exposure. A two-page debt report each quarter, covering balances, headroom, upcoming maturities and actions, makes debt a governed topic rather than a surprise.

                ## Milestones
                1. A two-page layout agreed with the chair or lead investor.
                2. Each report covering total debt, cost, covenant headroom, maturity ladder and rate exposure.
                3. Risks and proposed actions stated, not just figures.
                4. Four consecutive quarterly reports delivered with the board papers.
              priority: low
              frontmatter:
                mode: service
                output_kind: deliverable
                success_criteria: "Four consecutive quarterly debt reports covering headroom, maturities and rate exposure were delivered with the board papers."
                cadence: cyclic
                effort_hours_estimate: "3"
              tasks:
                - "Agree the debt report layout with the chair or lead investor"
                - "Draft the quarterly debt report for the board papers @recurring(quarterly)"
                - "End each report with the risks and the actions proposed"
            - name: Multiple lenders and intercreditor terms
              description: |-
                ## Purpose
                Once a business has a senior bank loan, asset finance, invoice finance and perhaps shareholder or mezzanine debt, an intercreditor or priority deed decides who gets paid first, who controls enforcement and what payments junior lenders may receive. Understanding those rules matters before adding any new lender or paying interest on subordinated debt.

                ## Milestones
                1. Every intercreditor, priority or subordination deed located.
                2. The ranking of each lender and its security mapped on one page.
                3. Restrictions on payments to junior or shareholder lenders written down.
                4. Questions on the deeds answered by your lawyer before the next new facility.
              priority: low
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A one-page ranking map of all lenders and their security exists, with payment restrictions on junior debt recorded and checked by a lawyer."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Collect every intercreditor, priority and subordination deed"
                - "Map which lender ranks first over which assets"
                - "List what payments junior and shareholder lenders may receive"
                - "Take open questions to your lawyer before adding a lender"
            - name: Selling the business with loans outstanding
              description: |-
                ## Purpose
                Most facilities include a change of control clause, so a sale normally means repaying or refinancing at completion, releasing security and agreeing payoff figures to the exact day. Preparing the debt side early stops it holding up completion and makes the net proceeds to the owners clear from the start.

                ## Milestones
                1. Change of control and prepayment terms identified for every facility.
                2. Estimated payoff amounts, including fees and break costs, included in the net proceeds estimate.
                3. Lenders' requirements for payoff letters and security releases at completion known.
                4. Signed payoff letters and release documents ready for the completion date.

                ## Notes
                Keep the sale confidential until your advisers agree when lenders need to be told; some agreements require notice before signing.
              priority: medium
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "Payoff letters and release documents for every facility are agreed and ready before completion, and payoff costs are in the net proceeds estimate."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Find the change of control clause in each agreement"
                - "Estimate payoff amounts including fees and break costs"
                - "Ask your lawyer when and how lenders must be told about the sale"
                - "Request payoff letters and release documents for the completion date"
---

# Business Debt & Loan Servicing

This area is for owners, founders and finance managers who already carry business debt and want it run on purpose rather than discovered at the next missed payment or awkward call from the bank. It starts with the foundations (a debt register, a key terms sheet for every agreement, a repayment calendar, amortisation schedules, a covenant calendar and a map of the security given), then the monthly and quarterly routines that keep payments funded, covenants tested and lenders informed, the skills to read a facility agreement and the ratios inside it, the decisions about refinancing, early repayment and interest rate risk, the events that need careful handling such as a covenant breach or a balloon payment, situations for a first loan, a founder with a personal guarantee or a new finance manager, and finally specialist work such as borrowing base reporting and a board-approved debt policy.

What repeats is a monthly payment funding check, the principal and interest postings, a headroom tracker and lender reporting diary, a weekly look at overdraft use, a quarterly covenant calculation, maturity ladder and lease end-date check, and the annual facility review. The Operational checklist, Metrics log, Compliance control, Purchase decision, Remediation plan and Onboarding plan templates pair with the projects that name them. Installing adds all 50 projects as active, so archive the ones that are not for you yet.
