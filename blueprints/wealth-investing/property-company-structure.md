---
id: wealth-investing.property-company-structure
name: Property Company Structure
description: "Weigh personal against company ownership of rental property on your own numbers, then run a property company properly: filings, director loans, dividends, company mortgages, succession and exit."
category: personal
version: 1.0.0
tags: [wealth-investing, property-company-structure, homeowner, small-business, limited-company, landlord-tax, company-mortgages]
author: Aurum Technology
starter_structure:
  templates:
    - vendor
    - month-end-close
    - compliance-control
    - meeting-notes
    - purchase-decision
    - risk-register
  pillars:
    - name: Wealth & Investing
      emoji: "📈"
      description: "Building long-term wealth: pensions and retirement accounts, index investing, property, side income, estate planning and the slow, boring decisions that compound over decades."
      pillarFrontmatter:
        review_cadence: quarterly
      areas:
        - name: Property Company Structure
          description: "Deciding whether to hold investment property personally or in a limited company, weighing tax, mortgages and admin."
          projects:
            - name: Property and ownership inventory
              description: |-
                ## Purpose
                Before anyone can say whether a company makes sense for you, they need the facts: which properties you own, whose names are on each title, what you paid, what is owed and when each mortgage deal ends. Pulling this onto one page usually takes an evening and turns the first meeting with an adviser from a history lesson into a real conversation.

                ## Milestones
                1. Every property listed with address, legal owners and each owner's share.
                2. Purchase price, purchase date and major improvement costs recorded for each.
                3. Each mortgage's lender, balance, rate, product end date and early repayment charge noted.
                4. Current rent and an estimated market value set against every property.
                5. The inventory saved somewhere your accountant can read it.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A single inventory lists every property with owners, cost, mortgage terms, rent and estimated value, and has been shared with your accountant."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "List every property you own or part-own with the names on each title"
                - "Find completion statements and note price, date and buying costs"
                - "Download current balances and product end dates from each lender"
                - "Add current rent and a rough market value for each property"
            - name: Five-year property plan before choosing a structure
              description: |-
                ## Purpose
                The right structure depends far more on what you intend to do than on what you own today. Someone planning one rental and drawing the rent as income faces a very different answer from someone aiming for ten properties who will reinvest every penny of profit. Writing down how many properties, how much borrowing and how much income you need over five years gives the tax comparison something real to test.

                ## Milestones
                1. A target number of properties and total borrowing for five years written down.
                2. The rental income you need to draw each year, if any, stated as a figure.
                3. Your expected holding period noted, including any properties you might sell.
                4. The people who will co-own or eventually inherit the portfolio named.
                5. The plan agreed with any partner or co-owner.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A one-page five-year plan states target properties, borrowing, income needed and holding period, and any co-owner has agreed it."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Write how many properties you hope to own in five years and why"
                - "Decide how much rental income you need to draw each year"
                - "Mark which properties you expect to keep for the long term"
                - "Go through the plan with your partner or co-owner and note changes"
            - name: Personal tax position on rental profits
              description: |-
                ## Purpose
                Holding property personally means rental profit is added to your other income and taxed at your marginal rate, and in some countries, the UK being one, individual landlords only get a basic-rate credit for mortgage interest instead of deducting it. Knowing your band now, and how close the rental profit pushes you to the next one, is the starting point of every comparison you will make.

                ## Milestones
                1. Your other income for the year and the resulting tax band recorded.
                2. Last full year's rental profit worked out before and after finance costs.
                3. The tax currently paid on rental profit stated as a figure.
                4. Headroom before the next tax band noted.
                5. Any income-linked thresholds you are close to, such as allowance tapering or family benefits, listed.

                ## Notes
                Rules on finance cost relief differ between countries and change often. Use this year's figures from your tax authority, not an old article or forum post.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "The tax paid on last year's rental profit, your marginal band and remaining headroom are written down and confirmed by your accountant."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Find last year's tax return or tax calculation"
                - "Separate rental profit before and after mortgage interest"
                - "Note how much headroom remains before the next tax band"
                - "Ask your accountant to confirm the tax paid on rental profit"
            - name: Ten-year personal versus company tax model
              description: |-
                ## Purpose
                Company ownership often looks cheaper in year one, because corporation tax rates sit below higher personal rates, but much of the saving can vanish once profits are drawn as dividends and the extra costs are paid. A ten-year model on your own numbers, with and without extracting profit, shows whether the gap is worth the paperwork.

                ## Milestones
                1. A spreadsheet with a personal column and a company column for each of ten years.
                2. The company scenario including corporation tax, accountancy costs and higher mortgage rates.
                3. Two extraction cases modelled: all profit retained, and the income you need drawn as dividends.
                4. Interest rate rises and a property sale tested as sensitivities.
                5. The model reviewed by your accountant and their corrections made.
              priority: high
              deadlineOffsetDays: 60
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A ten-year model comparing personal and company ownership, with two extraction cases, has been checked and corrected by an accountant."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Set up a spreadsheet with personal and company columns for ten years"
                - "Add company running costs and the higher company mortgage rate"
                - "Model a year where you draw income against one where you retain all profit"
                - "Ask the agent to list every assumption in the model for the accountant to check"
                - "Send the model to your accountant for review"
            - name: Briefing pack for a property tax specialist
              description: |-
                ## Purpose
                Advisers charge by the hour, and much of a first meeting is often spent collecting facts you could have sent beforehand. A short pack holding your inventory, five-year plan, tax position and a written question list lets a property tax specialist give you an opinion rather than an intake interview.

                ## Milestones
                1. Inventory, five-year plan and tax summary bundled in one folder.
                2. Up to ten questions written in order of importance.
                3. Constraints stated: properties you will not sell, income you must keep, dates that matter.
                4. The pack sent at least a week before the meeting.
                5. The adviser's answer written under each question afterwards.
              priority: high
              deadlineOffsetDays: 45
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A briefing pack and question list went to the adviser before the meeting, and written answers to each question are filed."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Gather the inventory, plan and tax summary into one folder"
                - "Write your ten questions, most important first"
                - "Send the pack a week before the meeting"
                - "Write the adviser's answer under each question the same day"
            - name: Choosing an accountant who handles property companies
              description: |-
                ## Purpose
                A general bookkeeper may file company accounts correctly yet miss the points specific to property: how mortgage interest, director loans, transfers in and dividend timing interact. Comparing two or three accountants who already act for landlord companies, on fixed fees and what those fees include, avoids paying twice to repair a cheap first year.

                ## Milestones
                1. Three accountants shortlisted who already act for property-holding companies.
                2. Each asked the same five questions about experience, fees and scope.
                3. Fixed annual quotes compared for accounts, the company tax return and directors' personal returns.
                4. One accountant appointed under a signed engagement letter.

                ## Notes
                Start from the **Vendor** template. Ask how many property companies they act for, not simply whether they do.
              priority: high
              deadlineOffsetDays: 45
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "An accountant with existing property company clients is appointed under a signed engagement letter with a fixed annual fee."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Ask two landlords you trust which accountants they use"
                - "Send the same five questions to three firms"
                - "Compare fixed fee quotes and exactly what each one covers"
                - "Sign the engagement letter with the firm you choose"
            - name: Lender appetite check for company mortgages
              description: |-
                ## Purpose
                Fewer lenders offer mortgages to limited companies, rates and arrangement fees are usually higher, and nearly all ask directors to sign personal guarantees. A conversation with a broker who places company buy-to-let lending every month tells you what borrowing would really cost before your tax model assumes it.

                ## Milestones
                1. A broker found who arranges company buy-to-let mortgages regularly.
                2. Indicative rates, fees and maximum loan-to-value for a newly formed company recorded.
                3. Each lender's rental cover test for companies noted.
                4. Personal guarantee terms explained and written down.
                5. The cost difference against personal borrowing fed into the tax model.
              priority: high
              deadlineOffsetDays: 45
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "Indicative company mortgage rates, fees, rental cover tests and guarantee terms from a broker are recorded and used in the tax model."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Find a broker who places company buy-to-let mortgages every month"
                - "Ask for indicative rates and fees for a newly formed company"
                - "Ask what each lender's personal guarantee would require of you"
                - "Update the tax model with the company mortgage cost"
            - name: Costs of running a property company, totalled
              description: |-
                ## Purpose
                Whether it owns one property or twenty, a company brings fixed costs: accountancy, registry filings, a business bank account, software, sometimes a registered office service and higher mortgage fees. Totalling them gives a yearly hurdle the tax saving must clear, and it is often the reason one property in a company does not pay.

                ## Milestones
                1. Every annual company cost listed with a realistic figure.
                2. One-off set-up costs listed separately.
                3. The annual total compared with the yearly tax saving from the model.
                4. The number of properties at which the company breaks even noted.
              priority: medium
              deadlineOffsetDays: 30
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A costed list of set-up and annual company running costs, with a break-even point against the tax saving, is filed with the model."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "List accountancy, filing, bank, software and insurance costs for a year"
                - "Add one-off formation and legal costs as a separate total"
                - "Compare the annual total with the tax saving in your model"
                - "Note how many properties it takes for the company to break even"
            - name: Structure decision record
              description: |-
                ## Purpose
                Whatever you decide, the reasons fade within a year and the question returns every time a friend mentions their company. One page recording the choice, the figures behind it, the advice taken and the events that should reopen it ends the circular debate and gives your future self a clear starting point.

                ## Milestones
                1. The chosen structure stated for existing and for future properties.
                2. The three main reasons and the figures behind them recorded.
                3. The adviser who gave the opinion and the date noted.
                4. Review triggers listed, such as a tax rule change, a pay rise or a planned purchase.
                5. The record filed with the inventory and the tax model.
              priority: high
              deadlineOffsetDays: 90
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A dated decision record names the structure for existing and new properties, the reasons, the adviser consulted and the review triggers."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Write the structure you chose for existing and future properties"
                - "Note the three reasons and figures that decided it"
                - "List the events that should reopen the decision"
                - "Re-read the decision record against its review triggers @recurring(yearly)"
            - name: Company bank account and rent routing
              description: |-
                ## Purpose
                Mixing company and personal money is the quickest way to create a director's loan muddle and a larger accountancy bill. Opening a business account in the company's name, moving every tenant and letting agent payment to it, and paying every property cost from it keeps the records clean from the first month.

                ## Milestones
                1. A business current account open in the company's name.
                2. Every tenant, agent and booking platform paying into the company account.
                3. Mortgage direct debits and property bills moved to the company account.
                4. A separate company savings account open for tax and repairs.
                5. A full month passed with no personal spending through the company account.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "All rent arrives in, and all property costs leave from, the company's own account, with a full month showing no personal transactions."
                cadence: rolling
              tasks:
                - "Apply for a business current account in the company's name"
                - "Send tenants and agents the new account details in writing"
                - "Move mortgage and insurance direct debits to the company account"
                - "Check no personal spending went through the company account @recurring(monthly:5)"
            - name: Monthly bookkeeping close for the company
              description: |-
                ## Purpose
                Annual accounts built from a shoebox in month eleven cost more and hide mistakes until they are hard to fix. A monthly close, with every bank line matched to a receipt, rent statement or mortgage statement, keeps the books ready for the accountant and shows early when a tenant or a cost has gone wrong.

                ## Milestones
                1. Bank feeds connected to the bookkeeping software.
                2. Every transaction for the month categorised by property with evidence attached.
                3. Rent received checked against rent due for each property.
                4. Twelve consecutive monthly closes completed.

                ## Notes
                Start from the **Month-end close** template. Tag each line to a property from day one; splitting a year of costs afterwards is miserable.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Twelve monthly closes completed in a row, each with all bank lines matched and rent received reconciled to rent due."
                cadence: rolling
              tasks:
                - "Connect the company bank account to your bookkeeping software"
                - "Match the month's bank lines to receipts and statements @recurring(monthly:9)"
                - "Check rent received against rent due for each property"
                - "Chase any letting agent statement that has not arrived"
            - name: Director's loan account register
              description: |-
                ## Purpose
                Most small property companies are funded by directors lending money in for deposits and costs, and repaying that loan later is one of the cheapest ways to take money back out. A running register of every amount in and out, reconciled to the books each quarter, protects the balance you are owed and spots an overdrawn account before it causes a tax charge.

                ## Milestones
                1. The opening director's loan balance agreed with the accountant.
                2. Every advance, cost paid personally and repayment entered with date and evidence.
                3. The register reconciled to the company's books every quarter.
                4. A written loan note or board minute covering the main advances.

                ## Notes
                An overdrawn director's loan, where you owe the company, can trigger tax charges in many countries. Ask your accountant before drawing more than you have lent.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "The director's loan register agrees with the company's books at each quarter end, with written evidence for every entry."
                cadence: rolling
              tasks:
                - "Agree the opening director's loan balance with your accountant"
                - "Record each sum paid in or drawn out with its date and evidence"
                - "Reconcile the loan register to the company's books @recurring(quarterly)"
                - "Write a board minute for any advance above an amount you set"
            - name: Company filing and payment calendar
              description: |-
                ## Purpose
                Running a company brings dated obligations a personal landlord never had: annual accounts, a confirmation statement or annual return to the company registry, a corporation tax return and a tax payment date that in some countries falls before the return is due. Late filing penalties are automatic and visible on the public record, so the dates belong in one calendar with reminders a month ahead.

                ## Milestones
                1. Accounting year end, accounts deadline and confirmation statement date recorded.
                2. Corporation tax payment and return deadlines recorded separately.
                3. Personal tax return dates for each director added.
                4. Reminders set one month before every deadline.
                5. A full year passed with every filing and payment on time.

                ## Notes
                Start from the **Compliance control** template.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every company filing and tax payment for a full year was made before its deadline, with reminders set a month ahead of each."
                cadence: cyclic
              tasks:
                - "Look up the company's filing dates on the company registry's website"
                - "Add every filing and payment deadline to one calendar with reminders"
                - "Check the registry's dates still match your calendar @recurring(yearly)"
                - "File the annual confirmation statement with the registry @recurring(yearly)"
            - name: Corporation tax set-aside each month
              description: |-
                ## Purpose
                Rent arrives every month but corporation tax lands as one bill months after the year end, by which time the cash has often gone on a boiler or the next deposit. Moving a fixed share of each month's profit into a separate tax account turns the bill into a non-event.

                ## Milestones
                1. A set-aside percentage agreed with the accountant from last year's profit.
                2. A dedicated tax savings account open in the company's name.
                3. The transfer made every month without exception.
                4. The balance compared with the estimated bill at the half year.
                5. The year's bill paid in full from the set-aside.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "The year's corporation tax bill was paid in full from a dedicated account funded by monthly transfers."
                cadence: rolling
              tasks:
                - "Ask your accountant what share of profit to set aside for tax"
                - "Open a company savings account named for corporation tax"
                - "Move the month's tax set-aside into the tax account @recurring(monthly:20)"
                - "Compare the balance with the estimated bill at the half year"
            - name: Board minutes and written resolutions file
              description: |-
                ## Purpose
                Lenders, solicitors and tax authorities all ask to see the paper behind a company decision, because a company only acts through its directors and shareholders. Minutes for each purchase, refinance, loan and dividend, kept together in one file, prove the decision was properly made when someone asks years later.

                ## Milestones
                1. A one-page minute format and a written resolution format saved.
                2. Minutes written for every purchase, refinance, director loan and dividend.
                3. Signed copies stored in one dated file.
                4. A quarter-end check that no decision is missing its minute.

                ## Notes
                Start from the **Meeting notes** template. A sole director company still needs written records of its decisions.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every purchase, refinance, loan and dividend in the last twelve months has a signed minute or resolution on file."
                cadence: rolling
              tasks:
                - "Save a one-page minute format and a written resolution format"
                - "Minute the most recent decision the company made"
                - "File the quarter's signed minutes and resolutions together @recurring(quarterly)"
            - name: Dividend declaration routine
              description: |-
                ## Purpose
                A dividend paid without enough retained profit behind it, or without paperwork, can be treated as unlawful or reclassified as pay, and either is costly to unpick. A short routine for every dividend, covering reserves, the minute, vouchers and the bookkeeping entry, makes each payment stand up to scrutiny.

                ## Milestones
                1. Distributable profit confirmed from up-to-date accounts before each dividend.
                2. A board minute and a dividend voucher produced for each payment.
                3. Payments made in proportion to shareholdings unless the share classes say otherwise.
                4. Each shareholder's dividend total recorded for their personal tax return.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every dividend paid in the year has accounts showing enough retained profit, a signed minute and a voucher on file."
                cadence: rolling
              tasks:
                - "Confirm retained profit in the latest accounts before declaring"
                - "Write the dividend minute and issue a voucher to each shareholder"
                - "Pay each shareholder from the company account, never in cash"
                - "Send each shareholder their dividend total for the tax return @recurring(yearly)"
            - name: Quarterly management accounts review
              description: |-
                ## Purpose
                Annual accounts tell you what happened up to a year ago. A one-page quarterly view of rent, costs, profit, cash, retained earnings and loan-to-value per property shows whether the company is building as planned and gives you the figures for dividend and refinance decisions.

                ## Milestones
                1. A one-page quarterly report with the same headings every time.
                2. Profit and cash compared with the same quarter last year.
                3. Loan-to-value and interest cover worked out for each property.
                4. Four quarterly reports completed and filed in a year.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Four quarterly reports filed in a year, each showing profit, cash, retained earnings and loan-to-value for every property."
                cadence: rolling
              tasks:
                - "Set up a one-page quarterly report with fixed headings"
                - "Produce the quarter's profit, cash and loan-to-value figures @recurring(quarterly)"
                - "Ask the agent to summarise what changed since last quarter"
                - "Write one action arising from each review"
            - name: Company property and mortgage schedule
              description: |-
                ## Purpose
                Lenders, insurers and accountants each ask for a list of the company's properties, and each time it gets rebuilt from scratch. One schedule of title references, purchase costs, mortgage accounts, product end dates and insured values, refreshed once a year, answers all of them in minutes.

                ## Milestones
                1. Every company property listed with title reference and purchase cost.
                2. Mortgage lender, account number, rate and product end date recorded for each.
                3. Sum insured and policy renewal date recorded for each.
                4. Estimated values and loan balances updated once a year.
              priority: low
              frontmatter:
                mode: operating
                output_kind: artifact
                success_criteria: "A schedule lists every company property with title, cost, mortgage and insurance details, updated within the last twelve months."
                cadence: cyclic
              tasks:
                - "List each company property with its title reference and cost"
                - "Add the mortgage account, rate and product end date for each"
                - "Add sums insured and policy renewal dates"
                - "Update values and loan balances on the schedule @recurring(yearly)"
            - name: Annual structure review with your accountant
              description: |-
                ## Purpose
                Tax rates, allowances and lender pricing move most years, and so do your income and plans. An annual meeting after the year-end accounts that looks at the structure, not only the filings, catches the year when a change such as buying elsewhere or a different extraction mix starts to pay.

                ## Milestones
                1. A review meeting booked after each set of year-end accounts.
                2. Last year's actual tax compared with what the model predicted.
                3. Tax and lending changes since the last review listed.
                4. A written decision to keep, adjust or revisit the structure.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: event-completion
                success_criteria: "An annual structure review is held after the year-end accounts, with a written keep, adjust or revisit decision filed."
                cadence: cyclic
              tasks:
                - "Book the structure review for after the year-end accounts @recurring(yearly)"
                - "List tax and lending changes since the last review"
                - "Compare the tax actually paid with the model's prediction"
                - "Record the keep, adjust or revisit decision"
            - name: How company rental profits are taxed, in outline
              description: |-
                ## Purpose
                Two layers of tax apply to a property company: corporation tax on its profit, usually with mortgage interest deductible as a business cost, and personal tax again when profit reaches the shareholders. Understanding when each layer bites makes sense of every comparison and every adviser's comment that follows.

                ## Milestones
                1. The corporation tax rates and thresholds that would apply to the company written down.
                2. The treatment of finance costs in a company compared with personal ownership, in your own words.
                3. Personal tax rates on dividends at your band noted.
                4. A one-page worked example of 10,000 of rental profit passing through both layers.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A one-page note works through how 10,000 of rental profit is taxed inside the company and again when paid out, checked by your accountant."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Read the tax authority's guidance on company tax rates"
                - "Note how dividends are taxed at your personal band"
                - "Work 10,000 of profit through both tax layers on one page"
                - "Ask your accountant to check the worked example"
            - name: Ways to take money out of a property company
              description: |-
                ## Purpose
                Money inside a company is not yours until it comes out, and every route is taxed differently: salary, dividends, repaying your director's loan, interest on that loan and employer pension contributions. Knowing the order and limits of each lets you plan your income instead of reaching for whichever route is easiest that month.

                ## Milestones
                1. Each extraction route listed with how it is taxed for you and for the company.
                2. Your director's loan balance noted as money you can take back without further tax.
                3. Any rules on paying salary from a company with no staff besides its directors noted.
                4. A preferred order of routes for your situation agreed with your accountant.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A written note ranks the extraction routes for your circumstances, and your accountant has agreed the order."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "List salary, dividends, loan repayment, loan interest and pension routes"
                - "Note how each route is taxed for you and for the company"
                - "Ask your accountant whether employer pension contributions suit you"
                - "Rank the routes in the order you plan to use them"
            - name: Director duties and statutory company records
              description: |-
                ## Purpose
                Becoming a director brings legal duties to act in the company's interests, keep proper records and manage conflicts, and the company must keep statutory registers of members, directors and people with significant control. Learning what is required takes an afternoon and closes the gaps that tend to surface during a refinance or sale.

                ## Milestones
                1. Your country's list of director duties read and summarised on one page.
                2. Statutory registers set up and brought up to date.
                3. The articles of association read once from start to finish.
                4. Conflicts such as letting to a relative noted and minuted.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Statutory registers are complete and a one-page summary of director duties is filed with the articles of association."
                cadence: phased
                effort_hours_estimate: "3"
              tasks:
                - "Read the company registry's guide to director responsibilities"
                - "Set up registers of members, directors and significant control"
                - "Read the articles of association from start to finish"
                - "Minute any conflict of interest such as letting to family"
            - name: Reading a property company's accounts
              description: |-
                ## Purpose
                Company accounts for a landlord look unfamiliar at first: properties held at fair value, deferred tax on revaluations, the director's loan shown as a creditor and retained earnings that may not all be distributable. Learning to read the balance sheet and profit and loss lets you question a draft before you sign it.

                ## Milestones
                1. Each line of the balance sheet explained in one sentence.
                2. Revaluation gains told apart from realised profit.
                3. Retained earnings available for dividends identified.
                4. Three written questions on the draft accounts sent to the accountant before approval.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Before signing the latest accounts you sent at least three written questions about them and filed the accountant's answers."
                cadence: phased
                effort_hours_estimate: "3"
              tasks:
                - "Read a sample set of small company accounts line by line"
                - "Mark where revaluation gains and the director's loan appear"
                - "Find the figure that shows profit available for dividends"
                - "Send three questions on the draft accounts before signing"
            - name: Transfer costs of moving property into a company
              description: |-
                ## Purpose
                Moving a property you already own into your company is treated in many countries as a sale at market value, which can mean capital gains tax for you, transfer or stamp tax for the company, early repayment charges and fresh legal fees. Learning these costs before anyone suggests a transfer stops a saving of a few hundred a year being bought with a bill of tens of thousands.

                ## Milestones
                1. Every cost of transfer listed: gains tax, transfer tax, early repayment charges, legal and valuation fees.
                2. Each cost estimated for the property you would most likely transfer.
                3. Reliefs that might apply noted as questions for your adviser, not assumptions.
                4. The total compared with ten years of projected tax saving.

                ## Notes
                Reliefs often depend on facts such as how much time you spend running the portfolio. Treat any online claim that transfers are tax free with suspicion and get written advice.
              priority: high
              deadlineOffsetDays: 60
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A costed estimate of transferring one named property into the company is set against ten years of projected tax saving."
                cadence: phased
                effort_hours_estimate: "5"
              tasks:
                - "List every cost of transfer for your most likely candidate property"
                - "Estimate the gain from purchase cost, improvements and current value"
                - "Ask the lender for the early repayment charge in writing"
                - "Set the total transfer cost against ten years of projected saving"
            - name: Trading versus investment company status
              description: |-
                ## Purpose
                A company that buys to hold and let is taxed and treated differently from one that buys to renovate and sell, and mixing the two in one company can cost reliefs and confuse lenders. Understanding the difference before your first purchase helps you decide whether any development or resale work belongs in a separate company.

                ## Milestones
                1. The difference between holding for rent and buying to sell explained in your own words.
                2. How each activity is taxed inside a company noted.
                3. Any planned activity that could make the company a trading one identified.
                4. A decision recorded on where development or resale work will sit.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A written note confirms the company holds investment property only and states where any trading activity will sit."
                cadence: phased
                effort_hours_estimate: "2"
              tasks:
                - "Read how your tax authority separates trading from investment"
                - "List any planned renovations for resale, developments or land sales"
                - "Ask your accountant whether those belong in a separate company"
                - "Add the answer to your structure decision record"
            - name: Annual property taxes on company-owned homes
              description: |-
                ## Purpose
                Some countries charge an extra annual tax or a higher transfer tax when a company owns residential property, with the UK's annual tax on enveloped dwellings as one example, and exemptions for genuine letting businesses can still require a yearly return or claim. Checking what applies, before a purchase and every year after, avoids penalties on a return you never knew existed.

                ## Milestones
                1. Any annual or surcharge taxes on company-owned homes in your country identified.
                2. Value thresholds and letting business exemptions noted.
                3. Each property's value checked against the thresholds.
                4. Any return or relief claim deadline added to the filing calendar.
              priority: medium
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A note confirms which company property taxes apply, and any return or relief claim dates are in the filing calendar."
                cadence: cyclic
              tasks:
                - "Search your tax authority's site for taxes on company-owned homes"
                - "Note the value thresholds and letting business exemptions"
                - "Check each property's value against the thresholds @recurring(yearly)"
                - "Add any return or relief claim deadline to the filing calendar"
            - name: Keep, transfer or sell each existing property
              description: |-
                ## Purpose
                For most landlords with properties already in their own names, the answer is not all or nothing. Taking each property in turn, with its gain, mortgage, early repayment charge and expected holding period, gives a keep personal, transfer or sell decision you can defend one property at a time.

                ## Milestones
                1. Each property assessed on gain, transfer cost, mortgage and holding plan.
                2. A keep, transfer or sell decision recorded for each, with its reason.
                3. Adviser confirmation obtained for any property marked transfer.
                4. Any transfer or sale timed around mortgage product end dates.
              priority: high
              deadlineOffsetDays: 120
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "Each existing property has a recorded keep, transfer or sell decision with its reason, and an adviser has confirmed any transfer."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Build a table with one row per property showing gain and transfer cost"
                - "Mark each property keep, transfer or sell with a one-line reason"
                - "Ask your adviser to confirm any transfer before acting on it"
                - "Line up transfers or sales with mortgage product end dates"
            - name: New purchases only in the company
              description: |-
                ## Purpose
                Plenty of landlords take a middle path, leaving existing properties where they are and buying every future property through the company, avoiding transfer taxes while the company's share of the portfolio grows. Deciding this deliberately, with the deposit route settled, stops the next purchase defaulting to personal ownership in the rush to exchange.

                ## Milestones
                1. A rule written that new purchases go into the company, with any exceptions named.
                2. How deposits will reach the company decided: director's loan, share capital or retained profit.
                3. Broker and lender approach confirmed for the next company purchase.
                4. The rule added to the structure decision record.
              priority: medium
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A written rule states where future purchases will be owned and how their deposits will be funded, and sits in the decision record."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Write the rule for where future purchases will be owned"
                - "Decide how deposits will be put into the company"
                - "Tell your broker the next purchase will be made by the company"
                - "Copy the rule into your structure decision record"
            - name: Shareholding split between owners and family
              description: |-
                ## Purpose
                Who owns the shares decides who receives dividends, who controls decisions and whose estate the growth lands in. Settling the split between partners, and whether a lower-earning spouse or adult children should hold shares, is far simpler at formation than once the company owns property.

                ## Milestones
                1. Each intended shareholder and their percentage listed with a reason.
                2. Voting control and dividend rights decided separately where they differ.
                3. The need for separate share classes confirmed with the accountant.
                4. Tax, separation and creditor risks of each shareholder discussed and noted.

                ## Notes
                Shares given to family can count as gifts for tax purposes, and splitting income with a spouse is restricted in some countries. Get advice before issuing shares, not after.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "The intended shareholders, percentages, voting control and any share classes are written down and confirmed with an accountant."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "List who will hold shares and the reason for each"
                - "Decide who controls votes and who receives dividends"
                - "Ask your accountant whether separate share classes are needed"
                - "Note the risks each shareholder brings, including separation"
            - name: Company, partnership or LLC comparison
              description: |-
                ## Purpose
                Limited companies are not the only vehicle: landlords also use partnerships, limited liability partnerships and, in the US, LLCs whose profit passes straight through to the owners. Comparing tax, liability protection, lender acceptance and admin across the options available where you live makes sure the company is chosen rather than assumed.

                ## Milestones
                1. The ownership vehicles available to landlords in your country listed.
                2. Each compared on tax, liability, lending and admin in one table.
                3. Lender acceptance of each vehicle checked with your broker.
                4. A preferred vehicle chosen with the reasons recorded.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A comparison table of at least three ownership vehicles on tax, liability, lending and admin ends in a recorded choice."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "List the ownership vehicles landlords use in your country"
                - "Compare each on tax, liability, lending and admin in one table"
                - "Ask your broker which vehicles lenders will actually lend to"
                - "Record the vehicle you chose and why"
            - name: Retained profit or income each year
              description: |-
                ## Purpose
                Only when much of the profit stays inside to pay down debt or fund the next deposit does a company beat personal ownership by a wide margin. Deciding each year how much to keep and how much to draw, and in what form, stops dividends being taken by habit and taxed at your top rate.

                ## Milestones
                1. Your personal income need for the year set against your other income.
                2. The amount to retain for deposits, repairs and debt reduction agreed.
                3. A salary and dividend plan for the year set with the accountant.
                4. The plan checked at the half year against actual profit.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: decision
                success_criteria: "A written annual plan sets retained profit and drawings for the year and is checked once against actual profit at the half year."
                cadence: cyclic
              tasks:
                - "Work out how much income you need from the company this year"
                - "Decide how much profit stays in for deposits and repairs"
                - "Set the year's salary and dividend plan with your accountant @recurring(yearly)"
                - "Compare drawings with actual profit at the half year"
            - name: Charging interest on your loans to the company
              description: |-
                ## Purpose
                When directors lend the company money for deposits, the company can often pay interest on that loan, which may be deductible for the company and fall inside a personal savings allowance for you. Agreeing a rate, documenting it and paying it properly turns an idle loan balance into a modest, tax-efficient income.

                ## Milestones
                1. Your accountant's view on charging interest, and any withholding duty, recorded.
                2. A commercial interest rate agreed and written into a short loan agreement.
                3. Interest calculated and paid on a set date with any tax deducted.
                4. The interest received included on your personal tax return.

                ## Notes
                Some countries require the company to deduct tax from interest paid to individuals and report it each quarter. Check before the first payment.
              priority: low
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A signed loan agreement sets a commercial rate, and the year's interest has been paid and reported on your personal return."
                cadence: phased
                effort_hours_estimate: "3"
              tasks:
                - "Ask your accountant whether interest on your director's loan suits you"
                - "Agree a commercial rate and write a short loan agreement"
                - "Calculate and pay the year's loan interest, deducting any tax due @recurring(yearly)"
                - "Include the interest received on your personal tax return"
            - name: Bookkeeping software for a property company
              description: |-
                ## Purpose
                Property bookkeeping needs tracking by property, bank feeds, receipt capture and ideally imports of letting agent statements, and some tax authorities now require digital records. Choosing software your accountant already supports avoids paying for a migration in year two.

                ## Milestones
                1. Your accountant's supported packages listed.
                2. Two options trialled with one month of real transactions.
                3. Profit by property tested in each.
                4. One package chosen, with the subscription paid by the company.

                ## Notes
                Start from the **Purchase decision** template.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "Bookkeeping software is chosen after a trial with real transactions, is supported by your accountant and is paid for by the company."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Ask your accountant which packages they support"
                - "Trial two packages with one month of real transactions"
                - "Test whether each can report profit by property"
                - "Subscribe to your choice in the company's name"
            - name: Insurance in the company's name
              description: |-
                ## Purpose
                When a company buys a property, or one moves in from personal ownership, the policy must name the company as the insured and note the lender; an old personal policy may not pay out at all. Checking every policy, and confirming owner's liability cover suited to a company landlord, closes a gap many people only find after a claim.

                ## Milestones
                1. Every property's buildings and landlord policy checked for the insured name.
                2. Policies reissued in the company's name with the lender noted.
                3. Property owner's liability cover confirmed for each property.
                4. Renewal dates added to the property schedule.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every company property is insured in the company's name with the lender noted, and the policies are checked at each renewal."
                cadence: cyclic
              tasks:
                - "Check the insured name on every property's policy"
                - "Ask the insurer to reissue policies in the company's name"
                - "Confirm owner's liability cover for each property"
                - "Check each policy names the company and lists every property @recurring(yearly)"
            - name: Company incorporation day
              description: |-
                ## Purpose
                Forming the company takes under an hour online, but the choices made that day, its name, registered office, business activity code, share structure and directors, are slow and costly to change. Preparing them in advance and finishing the follow-up steps in the first week gives the company a clean start.

                ## Milestones
                1. Name, registered office, activity code, directors and shareholders decided beforehand.
                2. The company registered and its certificate of incorporation saved.
                3. Shares issued and the statutory registers updated.
                4. Tax registration completed within the required period.
                5. The company bank account application submitted.

                ## Notes
                Use the activity code for letting your own property, not property development or estate agency, as lenders check it.
              priority: medium
              deadlineOffsetDays: 120
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "The company is registered with the intended directors and shares, is registered for tax and has a bank account application submitted."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Choose the company name and check it is available on the registry"
                - "Pick the business activity code for letting your own property"
                - "Register the company with the agreed shares and directors"
                - "Register the company with the tax authority in the first week"
            - name: First company purchase from offer to completion
              description: |-
                ## Purpose
                Buying through a company adds steps a personal purchase does not have: a company mortgage application, personal guarantees, a solicitor acting for the company, deposit money moving through the director's loan and a minute authorising the purchase. Planning them from the offer stage keeps completion on time.

                ## Milestones
                1. Mortgage offer issued to the company with guarantees signed.
                2. Deposit lent to the company and recorded in the director's loan register.
                3. A board minute authorising the purchase signed.
                4. Completion reached with the title registered in the company's name.
                5. The completion statement filed for the year-end accounts.

                ## Notes
                Many lenders require independent legal advice on the personal guarantee before they release funds. Book it early so it does not hold up completion.
              priority: medium
              deadlineOffsetDays: 180
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A property completes in the company's name, with the minute, signed guarantee, deposit loan entry and completion statement on file."
                cadence: phased
                effort_hours_estimate: "12"
              tasks:
                - "Instruct a solicitor who regularly acts for property companies"
                - "Lend the deposit to the company and record it in the loan register"
                - "Sign the board minute authorising the purchase"
                - "File the completion statement with the company's records"
            - name: Transferring a property into the company
              description: |-
                ## Purpose
                Once an adviser has confirmed a transfer is worth it, the move itself needs a market valuation, a new company mortgage or lender consent, conveyancing, a transfer tax return and a capital gains report. Treating it as a dated project avoids missing a short reporting window after completion.

                ## Milestones
                1. A formal market valuation obtained.
                2. A company mortgage offer in place before the personal mortgage is redeemed.
                3. Transfer completed and title registered to the company.
                4. Transfer tax return filed and paid on time.
                5. The capital gain reported and paid within your country's deadline.
              priority: medium
              deadlineOffsetDays: 180
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "The property is registered to the company, and the transfer tax and capital gains returns are filed and paid within their deadlines."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "Book a formal market valuation of the property"
                - "Arrange the company mortgage before redeeming the personal one"
                - "Diary the transfer tax and gains reporting deadlines from completion"
                - "File and pay the transfer tax return straight after completion"
            - name: First year-end and first accounts filing
              description: |-
                ## Purpose
                The first set of company accounts is the one most likely to be late, because the first period can run longer than a year and the deadline comes sooner than people expect. Handing over the records, director's loan register and property costs within a month of the year end makes the first filing routine rather than a scramble.

                ## Milestones
                1. The first accounting period end date confirmed.
                2. Year-end books and the loan register handed to the accountant within a month.
                3. Draft accounts reviewed and approved by the directors.
                4. Accounts and corporation tax return filed before their deadlines.
              priority: medium
              deadlineOffsetDays: 450
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "The company's first accounts and corporation tax return were filed, and the tax paid, before their deadlines."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Confirm the first accounting period end date on the registry record"
                - "Send the year-end books and loan register to the accountant"
                - "Review and approve the draft accounts"
                - "Check the filing shows as received on the registry"
            - name: Remortgaging a company property
              description: |-
                ## Purpose
                Company fixed rates end like any other, and drifting onto a lender's variable rate can wipe out a year's profit on that property. Starting the refinance six months ahead, with current company accounts ready and guarantee terms compared, keeps the rental cover test from becoming a surprise.

                ## Milestones
                1. Product end date and any early repayment charge confirmed.
                2. Latest company accounts and rent schedule ready for lenders.
                3. At least three offers compared through a broker, including guarantee terms.
                4. The new product completed before the old one ended.
                5. Board minute and property schedule updated.
              priority: medium
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A company mortgage was refinanced before its fixed rate ended, with the minute and property schedule updated."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Diary the date six months before the fixed rate ends"
                - "Send the broker the latest accounts and rent schedule"
                - "Compare at least three offers including their guarantee terms"
                - "Minute the refinance and update the property schedule"
            - name: Accidental landlord weighing a company for a former home
              description: |-
                ## Purpose
                Homeowners who let a former home after moving are often told to put it in a company, but a transfer can trigger gains tax, lose main home reliefs and need a brand new mortgage. Checking the numbers for this one property, against simply keeping it personal, is an afternoon well spent before anyone pays a solicitor.

                ## Milestones
                1. The former home's value, mortgage and the lender's consent to let recorded.
                2. Main home relief on a future sale estimated with your adviser.
                3. Transfer cost compared with personal ownership for the years you expect to let.
                4. A keep personal, transfer or sell decision recorded.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A written comparison of keeping, transferring or selling the former home ends in a recorded decision."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Check whether your lender has consented to letting the former home"
                - "Ask your adviser what main home relief you would keep or lose"
                - "Compare transfer costs with personal ownership over your letting period"
                - "Record whether you keep, transfer or sell"
            - name: Homeowner buying a first rental through a company
              description: |-
                ## Purpose
                Your first company purchase comes with no trading history, so lenders lean heavily on your personal finances, and the deposit may come from equity in your own home. Planning the deposit route, the guarantee and the running costs before an offer prevents a first purchase that only works in the spreadsheet.

                ## Milestones
                1. The deposit source confirmed, with any effect on your own home loan noted.
                2. A lender willing in principle to lend to a newly formed company.
                3. Annual company costs added to the first property's cash flow.
                4. A one-page first purchase plan written.

                ## Notes
                Raising a deposit against your own home puts it behind the investment. Agree a maximum with your partner before speaking to a broker.
              priority: medium
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A written first purchase plan shows the deposit source, a lender in principle and cash flow after company running costs."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Decide where the deposit comes from and what it does to your home loan"
                - "Ask a broker for an agreement in principle for a new company"
                - "Add company running costs to the property's cash flow"
                - "Write the first purchase plan on one page"
            - name: Business premises in a separate property company
              description: |-
                ## Purpose
                Owners of trading businesses often buy their premises in a separate company that lets them to the trading company, keeping the building safer if the business fails and making either easier to sell on its own. The arrangement only works with a proper lease at market rent and a clean split between the two companies' money.

                ## Milestones
                1. Separate ownership compared with buying in the trading company or through a pension scheme, with advice taken.
                2. A formal lease at a market rent signed between the two companies.
                3. Rent paid monthly between the companies' bank accounts.
                4. The lease rent reviewed against the market on its review dates.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "The premises are owned outside the trading company and let to it under a signed lease at a market rent."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Ask your accountant to compare three ways to own the premises"
                - "Instruct a solicitor to draft a lease between the two companies"
                - "Set up monthly rent between the companies' bank accounts"
                - "Check the lease rent against local market rents @recurring(yearly)"
            - name: Investing trading company profits in property
              description: |-
                ## Purpose
                Surplus cash in a profitable trading company can buy property directly or move to a holding or sister company, and each route affects business sale reliefs, risk and lender appetite differently. Choosing the route before the first purchase avoids tangling investment property up with the trade.

                ## Milestones
                1. Surplus cash available for investment worked out after working capital needs.
                2. Buying in the trading company, a sister company and a holding company compared with an adviser.
                3. The effect of each route on reliefs when selling the business noted.
                4. A route chosen and the first movement of funds documented.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A route for investing trading profits in property is chosen, with written advice on its effect on a future business sale."
                cadence: phased
                effort_hours_estimate: "5"
              tasks:
                - "Work out the cash surplus after six months of business costs"
                - "Ask your adviser to compare three routes for investing it"
                - "Ask how each route affects reliefs on selling the business"
                - "Document the chosen route and the first funds moved"
            - name: Shareholders' agreement for co-owners and family
              description: |-
                ## Purpose
                Partners, siblings and friends who form a property company together agree on everything until one wants their money back, separates or dies. A shareholders' agreement covering funding, decisions, exits and valuations, signed while everyone gets on, costs far less than the dispute it prevents.

                ## Milestones
                1. Each shareholder's capital and loan contribution recorded.
                2. Decisions that need every shareholder's consent listed.
                3. Terms for exit, death and separation agreed, including the valuation method.
                4. The agreement drafted by a solicitor and signed by every shareholder.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A shareholders' agreement covering funding, decisions, exits and death, drafted by a solicitor, is signed by every shareholder."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "List what each shareholder is putting in as capital and loans"
                - "Agree which decisions need every shareholder's consent"
                - "Agree how shares are valued if someone leaves or dies"
                - "Ask a solicitor to draft the agreement for signing"
            - name: Running a property company while living abroad
              description: |-
                ## Purpose
                Directors who move abroad can unintentionally shift where the company is managed and taxed, and may face different rules on dividends, loans and filings. Planning where board decisions are made, who can sign locally and how your tax returns change keeps the company taxed where you intend.

                ## Milestones
                1. Advice taken on the company's residence and your personal tax position after the move.
                2. A local director, agent or managing agent arranged if needed.
                3. Where and how board decisions are made recorded each quarter.
                4. Registered addresses and banking access updated before departure.
              priority: low
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "Written advice covers the company's residence and your personal tax after moving, and board decision arrangements are recorded."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Ask your accountant how moving abroad affects the company's residence"
                - "Decide who signs and acts locally while you are away"
                - "Record where the quarter's board decisions were made @recurring(quarterly)"
                - "Update registered addresses and banking access before you leave"
            - name: Incorporation relief evidence for a portfolio business
              description: |-
                ## Purpose
                In some countries a larger portfolio run as a genuine business can move into a company with the gain rolled into the new shares, but the relief turns on facts such as hours worked and services provided. Building an evidence file for a year before an adviser decides is what makes any claim defensible.

                ## Milestones
                1. The relief's conditions in your country summarised in writing by an adviser.
                2. A log of hours and tasks spent running the portfolio kept for twelve months.
                3. Evidence of business activity filed: tenant dealings, maintenance and finance work.
                4. The adviser's written opinion on whether the relief applies.

                ## Notes
                Larger claims of this kind attract scrutiny. Commission advice from a specialist, not from a firm that also sells the scheme.
              priority: low
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "Twelve months of activity evidence and an adviser's written opinion on whether the relief applies are on file."
                cadence: phased
                effort_hours_estimate: "20"
              tasks:
                - "Ask an adviser to summarise the relief's conditions in writing"
                - "Total the month's hours and tasks spent running the portfolio @recurring(monthly:28)"
                - "File evidence of tenant, maintenance and finance work"
                - "Ask for a written opinion once twelve months are logged"
            - name: Holding company and group structure review
              description: |-
                ## Purpose
                Investors with several companies, or a trading company alongside property, sometimes add a holding company above them to move profits between companies, ring-fence risk and simplify a future sale. The structure adds cost and filings, so it needs a clear reason and specialist advice before anything moves.

                ## Milestones
                1. Current companies and their owners drawn as a diagram.
                2. The problem a holding company would solve stated in one sentence.
                3. Specialist advice obtained on tax, lending and reorganisation cost.
                4. A decision recorded, with dated steps if going ahead.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A diagram of the current companies, a one-sentence purpose and written specialist advice lead to a recorded decision."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Draw your companies and who owns them as a diagram"
                - "Write the one problem a holding company would solve"
                - "Ask the agent to draft questions for a reorganisation specialist"
                - "Record the decision and any steps with dates"
            - name: Succession plan for company shares
              description: |-
                ## Purpose
                Shares in a property company pass under your will like any other asset, but the articles, any shareholders' agreement and lenders' guarantees all affect what heirs actually receive and control. Lining these documents up, and checking inheritance tax exposure on the shares, keeps the portfolio from freezing when a director dies.

                ## Milestones
                1. Wills checked to deal with the company shares explicitly.
                2. Articles and shareholders' agreement checked for what happens to shares on death.
                3. A second director or power of attorney arranged so the company can still act.
                4. Inheritance tax exposure on the shares estimated with an adviser.
                5. Heirs told where the company documents are kept.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "Wills, articles and the shareholders' agreement all deal with the shares on death, and a second signatory can act for the company."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Check your will names who receives the company shares"
                - "Read the articles for what happens to shares on death"
                - "Appoint a second director or arrange a lasting power of attorney"
                - "Review wills and share transfer clauses side by side @recurring(yearly)"
            - name: Exit routes for the company and its shareholders
              description: |-
                ## Purpose
                Getting value out of a property company at the end is a decision in itself: selling the properties and paying out cash, selling the shares to a buyer, or closing the company, each taxed differently and some needing years of preparation. Mapping the routes early lets you shape the company now for the exit you prefer.

                ## Milestones
                1. Each exit route described with its tax steps for the company and the shareholders.
                2. Estimated net proceeds compared for each route on today's values.
                3. Steps needed now to keep the preferred route open noted.
                4. A preferred exit route recorded in the decision record.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A comparison of net proceeds from three exit routes on current values ends in a preferred route recorded."
                cadence: phased
                effort_hours_estimate: "5"
              tasks:
                - "Ask your accountant to outline the tax steps of each exit route"
                - "Estimate net proceeds of each route on today's values"
                - "Note what must happen now to keep the preferred route open"
                - "Add the preferred exit to your structure decision record"
            - name: Personal guarantee exposure stress test
              description: |-
                ## Purpose
                Limited liability is limited only as far as the guarantees you have signed, and company mortgages often carry higher rates and stricter rental cover tests. Testing the whole company each year against higher rates, longer voids and falling values shows how much headroom exists before a lender could turn to your personal assets.

                ## Milestones
                1. Every personal guarantee listed with lender, amount and terms.
                2. Company cash flow tested at rates two and four points higher.
                3. A three-month void on the largest property modelled.
                4. Worst-case guarantee exposure written down as a figure.
                5. Actions agreed for any property that fails the test.

                ## Notes
                Start from the **Risk register** template.
              priority: medium
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A yearly test shows company cash flow at higher rates and longer voids, with worst-case personal guarantee exposure written as a figure."
                cadence: cyclic
              tasks:
                - "List every personal guarantee you have signed for the company"
                - "Test company cash flow at rates two and four points higher @recurring(yearly)"
                - "Model a three-month void on the largest property"
                - "Write the worst-case amount the guarantees could cost you"
---

# Property Company Structure

This area is for homeowners, landlords and business owners deciding whether investment property belongs in their own names or in a limited company, and for those already running one. It starts with the facts and an honest tax model, moves through the company's monthly and yearly machinery and the tax and legal knowledge behind it, then covers the big decisions, the dated moments such as incorporation and a first company purchase, situations like an accidental landlord or a business buying its own premises, and finally specialist work on reliefs, group structures, succession and exit.

The rhythm is monthly bookkeeping, a bank check and a tax set-aside, quarterly management accounts, minutes and director's loan reconciliations, and a yearly cycle of filings, an extraction plan, insurance checks, a guarantee stress test and a structure review with your accountant. The Vendor, Month-end close, Compliance control, Meeting notes, Purchase decision and Risk register templates pair with the accountant choice, the monthly close, the filing calendar, board minutes, software choice and the stress test, and every tax figure here exists to organise questions for a qualified adviser, never to replace one. Installing adds all 50 projects as active, so archive the ones that are not for you yet.
