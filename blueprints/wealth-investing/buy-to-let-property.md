---
id: wealth-investing.buy-to-let-property
name: Buy-to-Let Property
description: "A route from first affordability check to a well-run rental: yield maths, buy-to-let mortgages, safety compliance, tenants, letting agents, rental tax records and long-term hold or sell decisions."
category: personal
version: 1.0.0
tags: [wealth-investing, buy-to-let-property, homeowner, everyone, landlord, rental-yield, tenancy, buy-to-let-mortgage]
author: Aurum Technology
starter_structure:
  templates:
    - purchase-decision
    - compliance-control
    - vendor
    - metrics-log
    - operational-checklist
    - risk-register
  pillars:
    - name: Wealth & Investing
      emoji: "📈"
      description: "Building long-term wealth: pensions and retirement accounts, index investing, property, side income, estate planning and the slow, boring decisions that compound over decades."
      pillarFrontmatter:
        review_cadence: quarterly
      areas:
        - name: Buy-to-Let Property
          description: "Buying and running residential rental property: yields, mortgages, tenants, letting agents, tax and long-term capital growth."
          projects:
            - name: Buy-to-let readiness and affordability check
              description: |-
                ## Purpose
                Before any property search, it pays to know whether a rental purchase fits the rest of your finances: a typical buy-to-let needs a deposit of around 25 percent, purchase costs on top, and a cash buffer for months with no rent. Checking your emergency fund, existing debts, pension contributions and income stability first stops a rental from becoming the thing that squeezes everything else.

                ## Milestones
                1. Cash available for deposit, purchase costs and a reserve written down as three separate figures.
                2. Existing debts and their rates listed, with any that should be cleared first marked.
                3. Your income, other commitments and age checked against typical lender rules on minimum income and maximum term.
                4. A written yes, not yet or no on buying a rental in the next 12 months.

                ## Notes
                Extra purchase taxes on additional homes catch many first-time landlords out. Ask a conveyancer, or read your tax authority's guidance, to see what applies to you.

                Before you start: this plan is general information to help you organise your own money decisions. It is not financial, investment, tax or legal advice. Check decisions that matter with a qualified, licensed adviser in your country, and remember that investing and trading can lose money.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A dated note records available cash in three pots, debts to clear first and a yes, not yet or no on buying within 12 months."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "List the cash you could commit without touching your emergency fund"
                - "Look up the extra purchase taxes on a second property where you live"
                - "Ask a broker for typical minimum income and deposit rules for a first landlord"
                - "Write your decision and the reason in one paragraph"
            - name: Written rental investment brief
              description: |-
                ## Purpose
                Landlords who never decide what they want from a property end up with one that pays neither good income nor good growth. A one-page brief settles whether you are after monthly cash flow, long-term capital growth or a mix, how long you plan to hold, how hands-on you will be and what you will not buy.

                ## Milestones
                1. Your main aim (income, growth or both) stated with a target net yield or growth range.
                2. An intended holding period written down, such as ten years or until retirement.
                3. Hands-on hours per month you can realistically give set as a limit.
                4. Deal breakers listed, such as leasehold flats with high service charges or properties needing structural work.
                5. The brief shared with anyone you are buying with.
              priority: medium
              deadlineOffsetDays: 21
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A one-page brief states your aim, holding period, monthly time limit and at least three deal breakers, agreed by any co-buyer."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Write one sentence on why you want a rental property at all"
                - "Choose income, growth or a balance, and set a target range"
                - "List at least three property types you will not buy"
                - "Ask the agent to tidy your notes into a one-page brief"
            - name: Rental yield and cash flow calculator
              description: |-
                ## Purpose
                Gross yield headlines in property adverts leave out letting fees, maintenance, insurance, voids and mortgage interest, which together can halve the real return. A calculator that turns any asking price and rent into net yield, monthly cash flow and return on cash invested lets you compare properties on the same honest basis in ten minutes.

                ## Milestones
                1. A spreadsheet that takes price, rent, deposit and interest rate and returns gross yield, net yield and monthly cash flow.
                2. Default allowances set for voids, maintenance, agent fees and insurance, with the source of each.
                3. A stress-test line showing cash flow at an interest rate two to three points higher.
                4. Three real listings run through it as a test.

                ## Notes
                Many landlords start with a void allowance of one month a year and maintenance at around 10 percent of rent. Replace these with your own figures after the first year.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A working calculator has produced net yield, monthly cash flow and a stressed-rate figure for three real listings."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Set up a sheet with inputs for price, rent, deposit and mortgage rate"
                - "Add rows for voids, repairs, agent fees, insurance and service charges"
                - "Add a line that reruns cash flow at a higher interest rate"
                - "Test the calculator on three listings from your target area"
            - name: Rental demand research for target areas
              description: |-
                ## Purpose
                Rent levels, tenant demand and void periods vary street by street, and the cheapest postcode is often cheap for a reason. Comparing two or three areas on achieved rents, time to let, employers, transport and local licensing rules gives you a search area chosen on evidence rather than on where prices look low.

                ## Milestones
                1. Two or three candidate areas shortlisted within a travel time you can manage.
                2. Asking rents and typical days on market recorded for the property type you want in each.
                3. Main local employers, transport links and planned developments noted.
                4. Any selective or additional landlord licensing schemes run by the local council checked.
                5. One area chosen as the primary search area, with the reasons written down.

                ## Notes
                Ring two local letting agents as a prospective landlord. They know which streets let in a week and which sit empty for months.
              priority: medium
              deadlineOffsetDays: 60
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A comparison of at least two areas on rents, days to let and licensing rules ends with one primary search area recorded."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "Pick two or three areas within an hour of home"
                - "Note asking rents and days on market for ten comparable lets per area"
                - "Call two local letting agents about demand and typical tenants"
                - "Check each council's website for landlord licensing schemes"
                - "Choose one primary search area and write down why"
            - name: Buy-to-let mortgage comparison with a broker
              description: |-
                ## Purpose
                Buy-to-let lending works differently from a home mortgage: lenders test the rent against the payment at a stressed interest rate, fees are often a percentage of the loan, and many products are interest-only. Getting an agreement in principle through a whole-of-market broker before viewing tells you what you can borrow and which deals fit your numbers.

                ## Milestones
                1. A whole-of-market mortgage broker with buy-to-let experience appointed.
                2. The lender's rent coverage test understood, with the minimum rent needed at your target price.
                3. Two or three products compared on rate, fee, term, early repayment charges and total cost over the fixed period.
                4. Interest-only or repayment chosen, with a written note on how any interest-only balance would be repaid.
                5. An agreement in principle in hand.

                ## Notes
                Start from the **Purchase decision** template. Compare products on total cost over the fixed period, not on rate alone: a low rate with a large percentage fee is often dearer.
              priority: high
              deadlineOffsetDays: 45
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "An agreement in principle is held and the chosen product type is recorded with its total cost over the fixed period."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Find two whole-of-market brokers who arrange buy-to-let mortgages"
                - "Ask how the rent coverage test works at your target price"
                - "Compare three products on total cost over the fixed period"
                - "Decide between interest-only and repayment and note the reason"
                - "Obtain an agreement in principle from the preferred lender"
            - name: Deposit and cash reserve build-up
              description: |-
                ## Purpose
                Most buy-to-let lenders want a deposit of 25 percent or more, and on top of that come purchase taxes, legal fees, survey, mortgage fees and furnishing. Saving into a dedicated pot with a fixed monthly transfer turns a vague ambition into a date you can plan around, and the reserve stays in place after purchase to cover voids and repairs.

                ## Milestones
                1. A target figure covering deposit, purchase costs and a reserve of at least three months of mortgage and running costs.
                2. A separate savings account opened for the fund.
                3. A standing order set up for a fixed amount each month.
                4. A projected date when the target will be reached.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A ring-fenced savings pot receives a fixed monthly transfer, and a written target and projected completion date exist."
                cadence: phased
                effort_hours_estimate: "2"
              tasks:
                - "Add up deposit, purchase costs and a three-month reserve into one target"
                - "Open a separate easy-access savings account for the fund"
                - "Set up a standing order for the day after payday"
                - "Check the fund balance against the projected date @recurring(monthly:25)"
            - name: Viewing and due diligence checklist for rentals
              description: |-
                ## Purpose
                Viewing a rental with a home buyer's eyes misses what matters to a landlord: how the layout will let, what tenants in that street pay, and defects that turn into repeat callouts. A written checklist used at every viewing, plus a set of document checks before any offer, stops you falling for a nice kitchen in a property that will never pay its way.

                ## Milestones
                1. A viewing checklist covering layout, damp, roof, boiler age, electrics, windows, parking and storage.
                2. A pre-offer document list: lease length and ground rent for leaseholds, service charges, planning history, flood risk and any existing tenancy.
                3. Every viewing scored on the same sheet with photos.
                4. At least five properties viewed and scored before the first offer.

                ## Notes
                For leasehold flats, ask early for the service charge history and any planned major works. A large bill in year two can wipe out several years of profit.
              priority: high
              deadlineOffsetDays: 60
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "At least five viewings are scored on one checklist, and the pre-offer document list is complete for any property you offer on."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Write a one-page viewing checklist with landlord-specific checks"
                - "Add a pre-offer list of documents to request from the seller's agent"
                - "Score each viewing on the sheet the same day, with photos"
                - "Run the top property through your yield calculator before offering"
            - name: Offer to completion on a rental purchase
              description: |-
                ## Purpose
                Between accepted offer and completion sit a lender valuation, a survey, legal searches and the mortgage offer, and delays in any one can cost the deal. Treating the purchase as a timetable with named people and dates, rather than waiting for updates, gets you to completion with fewer surprises and a property ready to let.

                ## Milestones
                1. A conveyancer with buy-to-let experience instructed, with their quote in writing.
                2. A survey suited to the property's age and condition completed, with any defects priced.
                3. The mortgage offer received and checked against the agreed product.
                4. Searches and enquiries answered, with open issues closed or priced into a renegotiation.
                5. Completion done and keys collected, with the purchase tax return filed by the conveyancer.
              priority: high
              deadlineOffsetDays: 150
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "Completion is recorded with keys in hand, a filed purchase tax return and a list of any defects to fix before letting."
                cadence: phased
                effort_hours_estimate: "15"
              tasks:
                - "Get written quotes from two conveyancers who act on rental purchases"
                - "Book a survey suited to the property's age"
                - "Ask the conveyancer for a weekly progress note until exchange"
                - "Check the mortgage offer matches the product and term you chose"
                - "Confirm the date keys will be released and insurance must start"
            - name: Landlord insurance cover set-up
              description: |-
                ## Purpose
                Standard home insurance usually does not cover a let property, and a gap on the day of exchange or between tenancies can leave the largest asset you own unprotected. Landlord cover arranged before exchange, with buildings, liability and any optional rent guarantee or contents chosen deliberately, protects both the building and you.

                ## Milestones
                1. Buildings cover in place from exchange, using the rebuild value from your survey or a calculator.
                2. Property owner's liability included at a level checked against typical claims.
                3. Optional covers decided: contents, rent guarantee, legal expenses, accidental damage.
                4. The policy's conditions on unoccupied periods noted in your compliance calendar.

                ## Notes
                Many policies limit cover once a property has been empty for 30 or 45 days. Know your number before your first void.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A landlord policy covers the property from exchange, with rebuild value, liability limit and unoccupied-period rule recorded."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Find the rebuild value in your survey or a rebuild cost calculator"
                - "Get three quotes for landlord buildings and liability cover"
                - "Decide which optional covers are worth it for this property"
                - "Compare price and cover a month before the policy renews @recurring(yearly)"
            - name: Separate rental bank account and bookkeeping
              description: |-
                ## Purpose
                Rent and repairs mixed into a personal current account make year-end tax a weekend of guesswork and hide whether the property actually pays. A dedicated account for every rental transaction, plus a simple bookkeeping sheet or app with categories that match the tax return, sets you up before the first rent arrives.

                ## Milestones
                1. A dedicated bank account opened that receives all rent and pays all property costs.
                2. The mortgage, insurance and agent fees switched to come out of that account.
                3. Bookkeeping categories set to match the property section of your tax return.
                4. A folder created for receipts, invoices and statements, organised by tax year.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "All rent and property costs flow through one account, and a bookkeeping file with tax-return categories exists before the first rent arrives."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Open a separate current account used only for the rental"
                - "Move the mortgage and insurance direct debits to the new account"
                - "Set up bookkeeping categories that mirror the property tax return"
                - "Create a receipts folder organised by tax year"
            - name: Landlord safety and compliance calendar
              description: |-
                ## Purpose
                Gas safety checks, electrical inspections, energy certificates, smoke and carbon monoxide alarms, deposit protection deadlines and licence renewals all run on different clocks, and missing one can bring fines or make an eviction notice invalid. One calendar with every certificate, its expiry date and a reminder well before it lapses turns compliance into a routine instead of a scramble.

                ## Milestones
                1. Every legal requirement for rented homes where your property is listed, with its renewal interval.
                2. Current certificates filed with issue and expiry dates.
                3. Reminders set 60 days before each expiry.
                4. A record kept of which documents were given to the tenant and when.

                ## Notes
                Start from the **Compliance control** template. Rules differ between countries and even regions, so use your government's landlord guidance as the source list.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every required certificate has a recorded expiry date, a reminder 60 days ahead and proof of when it was given to the tenant."
                cadence: rolling
              tasks:
                - "List every safety certificate and licence your rental needs"
                - "Record issue and expiry dates for each current certificate"
                - "Book the annual gas safety check a month before it expires @recurring(yearly)"
                - "Scan the calendar for anything due in the next 60 days @recurring(monthly:8)"
            - name: Monthly rent collection and arrears routine
              description: |-
                ## Purpose
                Arrears grow quietly: one late month becomes two, and by the time a landlord acts the sum is too large for the tenant to repay. A fixed day to check every payment, a polite contact on day three and a written escalation path keep small slips small and give you a clear record if things go wrong.

                ## Milestones
                1. Rent due dates and amounts for every tenancy listed in one place.
                2. A monthly check day set a few days after the due date.
                3. Template messages written for a first reminder, a follow-up and a request to agree a repayment plan.
                4. Every late payment and every contact logged with dates.

                ## Notes
                Speak to the tenant early and kindly. Many arrears start with a change of job or benefit timing that a short repayment plan can solve.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every rent payment is checked monthly and every late payment has a dated log of contacts and outcomes."
                cadence: rolling
              tasks:
                - "List each tenancy's rent amount and due date"
                - "Draft three polite arrears messages for days 3, 10 and 21"
                - "Check every rent payment has arrived @recurring(monthly:3)"
                - "Log any late payment and the contact made on the same day"
            - name: Rental income and expense records
              description: |-
                ## Purpose
                Allowable expenses only reduce your tax bill if you can show them, and receipts lost over twelve months are money paid twice. A monthly half-hour matching bank lines to receipts and categories means the year-end figures are already done and nothing deductible is forgotten.

                ## Milestones
                1. Every bank line in the rental account given a category each month.
                2. Receipts and invoices attached or filed against each expense.
                3. Capital improvements kept separate from repairs, since they are usually treated differently for tax.
                4. A running year-to-date total of income and expenses.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "At any month end the bookkeeping file holds every transaction categorised with a receipt and a year-to-date total."
                cadence: rolling
              tasks:
                - "Download last month's statement from the rental account"
                - "Mark any spending that improves the property rather than repairing it"
                - "Match each bank line to a receipt and a category @recurring(monthly:20)"
                - "Update the year-to-date income and expense totals"
            - name: Repair requests and contractor log
              description: |-
                ## Purpose
                Tenants judge a landlord by how fast the boiler gets fixed, and many legal repair duties start the moment a problem is reported. A single log of every request with date reported, date fixed and cost, plus a short list of trusted trades, makes response times predictable and gives you evidence if a disrepair complaint ever arises.

                ## Milestones
                1. One channel for reporting repairs agreed with the tenant in writing.
                2. A log with date reported, urgency, contractor, date fixed and cost.
                3. At least one trusted gas engineer, electrician, plumber and handyman listed with contact details.
                4. Urgency levels defined, such as same day for no heating or water.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every repair request in the last 12 months appears in the log with reported and fixed dates, and each core trade has a named contact."
                cadence: rolling
              tasks:
                - "Tell the tenant in writing how to report repairs"
                - "Set up a log with reported, fixed, contractor and cost columns"
                - "Collect contacts for a gas engineer, electrician, plumber and handyman"
                - "Review open repairs and chase anything overdue @recurring(monthly:15)"
            - name: Periodic property inspections
              description: |-
                ## Purpose
                Small leaks, blocked gutters and black mould turn into big bills when nobody sees them for a year. An inspection every three to six months, arranged with proper notice and done with a standard checklist and photos, catches problems early and builds a record of the property's condition between tenancies.

                ## Milestones
                1. An inspection checklist covering each room, the exterior, alarms and signs of damp.
                2. Notice periods for access confirmed for your tenancy type and written into the request template.
                3. Each inspection saved with dated photos and a list of actions.
                4. Actions from the last inspection closed before the next one.

                ## Notes
                Tenants have a right to quiet enjoyment of their home. Give written notice, agree a time and keep inspections to a reasonable frequency.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Inspections happen at least twice a year with dated photos, and every action from the previous visit is closed."
                cadence: cyclic
              tasks:
                - "Write a room-by-room inspection checklist"
                - "Draft an access request with the notice your tenancy requires"
                - "Arrange an inspection visit with the tenant @recurring(quarterly)"
                - "File photos and an action list after each visit"
            - name: Letting agent annual performance review
              description: |-
                ## Purpose
                Letting agents often charge 10 to 15 percent of rent for full management, and the service delivered for that fee varies widely. A yearly review against the contract, covering rent paid on time, repairs handled, inspections done and compliance kept, tells you whether to keep the agent, renegotiate or move.

                ## Milestones
                1. The agent's contract and fee schedule reread, including notice periods and tenant-find clauses.
                2. Twelve months of statements checked for fees, repair invoices and rent dates.
                3. Evidence of inspections and certificate renewals requested.
                4. A keep, renegotiate or replace decision recorded.

                ## Notes
                Start from the **Vendor** template. Check the termination clause carefully: some contracts charge a fee for as long as the tenant they found stays.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: decision
                success_criteria: "Each year a recorded keep, renegotiate or replace decision is backed by checked statements and inspection evidence."
                cadence: cyclic
              tasks:
                - "Reread the agent contract for fees, notice and termination terms"
                - "Check a year of statements for unexpected charges"
                - "Ask the agent for the last two inspection reports"
                - "Hold the annual agent review and record the decision @recurring(yearly)"
            - name: Fixed-rate expiry and mortgage rate watch
              description: |-
                ## Purpose
                When a fixed rate ends, many buy-to-let mortgages roll onto a variable rate that can add hundreds a month. Knowing each mortgage's expiry date and early repayment charges, and checking the market every quarter, means you start the switch six months ahead rather than finding out from a higher direct debit.

                ## Milestones
                1. Each mortgage's lender, balance, rate, fixed-term end and early repayment charge listed.
                2. A reminder set six months before each fixed term ends.
                3. Current market rates for your loan-to-value noted each quarter.
                4. Monthly cash flow at the reversion rate worked out.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: knowledge
                success_criteria: "A mortgage register shows each expiry date and early repayment charge, with a quarterly rate check logged."
                cadence: rolling
              tasks:
                - "Write down each rental mortgage's fixed-term end date"
                - "Set a reminder six months before each fixed rate ends"
                - "Note current buy-to-let rates for your loan-to-value @recurring(quarterly)"
                - "Work out the monthly payment at the lender's reversion rate"
            - name: Annual rent review against the local market
              description: |-
                ## Purpose
                Rents left unchanged for years drift well below market, and then a sudden large rise drives out a good tenant. A yearly review comparing your rent with similar lets, followed by the correct legal process and notice for any change, keeps income in line without souring the relationship.

                ## Milestones
                1. Five comparable lets of the same size in the same area recorded with their asking rents.
                2. The lawful method and notice for a rent increase under your tenancy type confirmed.
                3. A decision on the new rent, or no change, written with the reasoning.
                4. Any increase notice served correctly and the tenant's response logged.

                ## Notes
                Weigh a modest rise against the cost of a void and re-letting. A reliable tenant staying another year is often worth more than the extra rent.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: decision
                success_criteria: "A dated rent review records five comparables, the chosen rent and, if raised, a correctly served notice."
                cadence: cyclic
              tasks:
                - "Find five comparable lets near your property"
                - "Check how rent increases must be made under your tenancy type"
                - "Decide on the new rent and note the reasoning"
                - "Run the rent review before the tenancy anniversary @recurring(yearly)"
            - name: Repairs and replacement sinking fund
              description: |-
                ## Purpose
                Boilers, roofs, kitchens and carpets all wear out on a schedule, and a landlord with no fund pays for them on a credit card. Setting aside a fixed share of rent each month, sized against a list of big items and their remaining life, makes a new boiler a withdrawal rather than an emergency.

                ## Milestones
                1. A list of major components with age, expected life and replacement cost.
                2. A monthly sum worked out to cover them over their remaining life.
                3. A ring-fenced savings pot receiving that sum automatically.
                4. The list updated after each replacement.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A sinking fund receives a fixed monthly transfer sized from a written list of components, ages and replacement costs."
                cadence: rolling
              tasks:
                - "List the boiler, roof, windows, kitchen and flooring with their ages"
                - "Estimate a replacement cost and remaining life for each"
                - "Set up a separate pot for the sinking fund"
                - "Move the monthly amount into the sinking fund @recurring(monthly:10)"
            - name: Rental portfolio performance log
              description: |-
                ## Purpose
                Without a running record it is easy to believe a property is doing well because its value has gone up while the cash flow quietly turned negative. A quarterly log of rent, costs, mortgage balance, estimated value and equity shows net yield, return on cash invested and whether each property still earns its place.

                ## Milestones
                1. A log with columns for rent received, costs, interest, net cash flow, estimated value and mortgage balance.
                2. Net yield and return on cash invested calculated each quarter.
                3. At least four quarters recorded.
                4. One sentence a year on what the numbers say.

                ## Notes
                Start from the **Metrics log** template. Use one consistent source for valuations, such as an online estimate checked against recent sales nearby.
              priority: low
              frontmatter:
                mode: operating
                output_kind: artifact
                success_criteria: "Four consecutive quarters of rent, costs, equity and net yield are recorded for every rental property."
                cadence: rolling
              tasks:
                - "Create a performance log from the metrics log template"
                - "Add last quarter's rent, costs, interest and mortgage balance"
                - "Update value, equity and net yield in the log @recurring(quarterly)"
                - "Write a one-line summary at the end of each tax year"
            - name: Landlord legal obligations primer
              description: |-
                ## Purpose
                Landlord law covers deposits, safety, repairs, discrimination, access, licensing and how a tenancy can end, and it changes often. A few structured weeks reading your government's official guidance, with notes in your own words, means you know what you must do before a tenant moves in rather than after a complaint.

                ## Milestones
                1. Your government's official guide for private landlords read in full.
                2. A one-page summary of duties before, during and at the end of a tenancy.
                3. Questions you could not answer listed and taken to a landlord association or solicitor.
                4. A source chosen for checking legal updates at least once a year.

                ## Notes
                Joining a national landlord association is a cheap way to get template documents, legal updates and a helpline.
              priority: medium
              deadlineOffsetDays: 60
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A one-page summary of landlord duties exists, written from official guidance, with open questions answered by a qualified source."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Download your government's official guide for private landlords"
                - "Summarise duties before, during and at the end of a tenancy"
                - "Take unanswered questions to a landlord association or solicitor"
                - "Check official guidance for changes to landlord law @recurring(yearly)"
            - name: How rental profits are taxed, explained
              description: |-
                ## Purpose
                Tax on rental income depends on which expenses are allowable, how mortgage interest is treated, whether a cost is a repair or an improvement and how losses carry forward, and the rules often differ from what friends assume. Learning the framework, then confirming your own position with an accountant, avoids both overpaying and an unwelcome letter from the tax authority.

                ## Milestones
                1. Notes on allowable expenses, finance cost rules, repairs versus improvements and loss relief where you live.
                2. A worked example of tax on one year of your projected rent.
                3. A list of questions answered by an accountant who works with landlords.
                4. Deadlines for registering and reporting rental income added to the compliance calendar.

                ## Notes
                This is about understanding and preparing, not tax advice. Agree your treatment with a qualified accountant.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A worked tax example for your rental exists and an accountant has answered your written list of questions."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Read your tax authority's guidance on property income"
                - "Work through a year of projected rent and costs as an example"
                - "Write a list of questions about your own situation"
                - "Book a session with an accountant who works with landlords"
            - name: Tenancy agreement clause-by-clause reading
              description: |-
                ## Purpose
                Most landlords sign a template tenancy without reading it and discover the gaps at the first dispute over pets, decorating, break clauses or who pays which bill. Reading a standard agreement clause by clause, and noting what each means in practice, lets you choose and adapt one deliberately.

                ## Milestones
                1. A standard or association template agreement for your tenancy type obtained.
                2. Each clause summarised in a sentence in your own words.
                3. Clauses on rent, deposit, repairs, access, pets, subletting and ending the tenancy flagged for decisions.
                4. Your wording on each flagged clause settled, with legal advice where you changed anything material.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "An annotated tenancy agreement shows a plain-language summary of every clause and your decision on each flagged term."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Get a template tenancy agreement from a landlord association or official source"
                - "Summarise each clause in one plain sentence"
                - "Flag clauses on pets, decorating, break and repairs for a decision"
                - "Check any changed wording with a solicitor before use"
            - name: Reading a survey for costly defects
              description: |-
                ## Purpose
                Surveys are long and cautious, and buyers either panic at every comment or skim past the one that costs ten thousand. Learning the condition ratings, the common big-ticket defects such as subsidence, roof structure, damp and old wiring, and how to price them turns a survey into a negotiating tool.

                ## Milestones
                1. The survey types available where you live understood, with which suits which property age.
                2. Condition rating meanings and the most expensive defect categories noted.
                3. A sample survey read and each urgent item priced with a quote or estimate.
                4. A short list of questions ready for a surveyor before and after the visit.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A sample survey has been read with every urgent item priced, and a list of surveyor questions is ready for the next purchase."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Find a sample survey report for a property like your target"
                - "Note what each condition rating means"
                - "Price the urgent items in the sample using builder estimates"
                - "Write five questions to ask your surveyor on the next purchase"
            - name: Fair and lawful tenant referencing standard
              description: |-
                ## Purpose
                Choosing tenants by gut feel invites both bad outcomes and discrimination claims. A written standard applied the same way to every applicant, covering identity and right-to-rent checks where required, income, previous landlord references and affordability, protects you and treats applicants fairly.

                ## Milestones
                1. Legal checks you must carry out, such as immigration status checks where they apply, listed with the documents accepted.
                2. Income and affordability criteria written down, with the rules for when a guarantor is needed.
                3. A referencing provider or do-it-yourself process chosen.
                4. Handling of applicants' documents set out, including how long you keep them.

                ## Notes
                Apply the same criteria to everyone and record why each applicant was accepted or declined. Blanket bans on groups of tenants can be unlawful in some places.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A written referencing standard covers legal checks, affordability, references and data retention, and has been applied to every applicant."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "List the legal checks landlords must make on tenants where you let"
                - "Write your affordability rule and when a guarantor is needed"
                - "Choose a referencing provider or a checklist for doing it yourself"
                - "Decide how long applicant documents are kept and how they are destroyed"
            - name: Tenancy deposit protection and fair deductions
              description: |-
                ## Purpose
                In many places a deposit must be protected in an approved scheme within a set number of days, with prescribed information given to the tenant, and getting it wrong can mean penalties and an invalid notice. Knowing the rules, and what counts as fair wear and tear versus damage, makes deposit returns quick and disputes winnable.

                ## Milestones
                1. The deposit rules where you let understood: any cap, the protection deadline and the information to give.
                2. A protection scheme chosen and the deposit protected within the deadline.
                3. Proof that the prescribed information reached the tenant filed.
                4. A note on fair wear and tear written, with examples from the scheme's own guidance.
              priority: high
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "The deposit is protected within the legal deadline, with the certificate and proof that the tenant received the information filed."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Read your country's rules on deposit caps and protection deadlines"
                - "Choose a protection scheme and note its deadline"
                - "File the protection certificate and proof the tenant received the information"
                - "Read the scheme's guidance on wear and tear versus damage"
            - name: Energy efficiency rules for rented homes
              description: |-
                ## Purpose
                Minimum energy standards for rented homes are rising in many countries, and a property that falls below them may not legally be let without improvements. Understanding your property's rating, the current and planned minimum, and the cheapest measures to close the gap tells you how big this cost is before it becomes urgent.

                ## Milestones
                1. The property's current energy rating and certificate expiry recorded.
                2. The current minimum standard for rentals, and any announced future one, noted.
                3. The measures recommended on the certificate listed with indicative costs.
                4. Any grants or exemptions available to landlords checked.
              priority: medium
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A note records the current rating, the legal minimum now and as announced, and costed measures to reach it."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Look up your property's energy certificate on the official register"
                - "Note the minimum rating for lets now and any announced future target"
                - "List the certificate's recommended measures with rough costs"
                - "Check for landlord grants or exemptions in your area"
            - name: Gearing and loan-to-value risk explained
              description: |-
                ## Purpose
                Borrowing magnifies returns on the way up and losses on the way down, and a rental at 75 percent loan-to-value can lose most of its equity in a modest price fall. Working through how gearing, interest rates and price changes interact on your own numbers helps you choose a borrowing level you can live with.

                ## Milestones
                1. Return on cash invested worked out for your property at 50, 60 and 75 percent loan-to-value.
                2. The effect of a 15 percent price fall on equity shown at each level.
                3. Cash flow at each level under a higher interest rate calculated.
                4. A personal maximum loan-to-value written into your investment brief.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A worked comparison of three loan-to-value levels under price and rate shocks ends with a written personal maximum."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Rerun your yield calculator at 50, 60 and 75 percent loan-to-value"
                - "Show equity after a 15 percent price fall at each level"
                - "Check cash flow at each level with a higher interest rate"
                - "Add your maximum loan-to-value to your investment brief"
            - name: Self-managing or using a letting agent
              description: |-
                ## Purpose
                Full management can cost a sixth of the rent, but self-managing means answering a midnight call about a leak and knowing the law yourself. Comparing let-only, rent collection and full management against your time, distance from the property and appetite for tenant contact leads to a choice you will not regret in year two.

                ## Milestones
                1. The three common service levels and their typical local fees compared.
                2. Your monthly time, distance and confidence with the law scored honestly.
                3. Two or three local agents interviewed with the same questions.
                4. A service level chosen and the agent appointed, or self-management confirmed.

                ## Notes
                Start from the **Vendor** template. Ask each agent how client money is protected, which redress scheme they belong to and what they charge for renewals.
              priority: medium
              deadlineOffsetDays: 30
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A service level is chosen after interviewing at least two agents, with the reasoning and fees recorded."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "List local fees for let-only, rent collection and full management"
                - "Score your time, distance and legal confidence out of five"
                - "Interview two or three agents with the same question list"
                - "Record the chosen service level and why"
            - name: Furnished or unfurnished letting decision
              description: |-
                ## Purpose
                Furnishing can widen the pool of tenants in some markets, such as students and short-contract professionals, but adds cost, wear, fire safety rules for furniture and replacement obligations. Deciding with local demand and a costed list in hand, rather than leaving the seller's sofa in place, sets the right rent and tenant from the start.

                ## Milestones
                1. Local agents asked which option lets faster and for how much more.
                2. A costed list of furnishings needed, with expected life.
                3. Fire safety labelling rules for furniture in rentals checked.
                4. A decision recorded and reflected in the listing and inventory.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A decision on furnished, part-furnished or unfurnished is recorded with local rent evidence and a costed furnishing list."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Ask two agents how furnished and unfurnished lets compare locally"
                - "Cost the furnishings needed and their expected life"
                - "Check the fire safety labelling rules for rental furniture"
                - "Record the decision in the listing brief"
            - name: Target tenant profile and property fit
              description: |-
                ## Purpose
                A two-bed flat near a hospital, a family house near good schools and a terrace near a university each attract different tenants with different needs, tenancy lengths and wear. Writing down who your property suits best shapes the listing, the furnishing, the rent and the referencing criteria.

                ## Milestones
                1. The property's location features and nearby demand drivers listed.
                2. One or two likely tenant groups chosen, such as young professionals or families.
                3. What those tenants value most noted: parking, storage, broadband, gardens, pets.
                4. Listing wording and any small improvements adjusted to fit.
              priority: low
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A written tenant profile for each property names the target group and lists at least three changes made to the listing or property for them."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "List the employers, schools and transport near the property"
                - "Choose one or two tenant groups the property suits best"
                - "Note what those tenants look for in a listing"
                - "Ask the agent to draft a listing aimed at that tenant profile"
            - name: Energy performance upgrade plan
              description: |-
                ## Purpose
                Once you know the gap between your property's rating and the standard, the order of upgrades matters: loft and cavity insulation and heating controls usually cost far less per rating point than new windows. A costed, sequenced plan timed around tenancies avoids works while tenants live there and keeps the property lettable.

                ## Milestones
                1. Quotes for the top three recommended measures obtained.
                2. Measures ranked by cost per expected rating improvement.
                3. Works scheduled for the next void period or agreed with the current tenant.
                4. A new energy certificate obtained after the works.

                ## Notes
                Keep invoices for every measure. They support the new rating and may matter for tax or grant claims.
              priority: medium
              deadlineOffsetDays: 180
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "The ranked upgrades are installed and a new energy certificate shows the property at or above the minimum for lets."
                cadence: phased
                effort_hours_estimate: "12"
              tasks:
                - "Get quotes for the three measures with the best rating impact"
                - "Rank the measures by cost per rating point"
                - "Schedule works for the next void or agree dates with the tenant"
                - "Book a new energy assessment once works are complete"
            - name: Refurbishment between tenancies on budget
              description: |-
                ## Purpose
                A tired property lets slowly and to less careful tenants, but over-spending on a rental refurbishment is one of the easiest ways to wreck a year's return. A scoped, priced plan with durable landlord-grade finishes, fixed quotes and a schedule tied to the void keeps works short and the budget intact.

                ## Milestones
                1. A scope of works written room by room with must-do and nice-to-have items.
                2. Two or three fixed quotes from trades for the main items.
                3. Durable mid-range finishes chosen with future replacement in mind.
                4. Works completed within the void period and the budget, with invoices filed.

                ## Notes
                Neutral colours, hard-wearing flooring and one standard paint colour you can touch up between tenants save money for years.
              priority: low
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "The refurbishment is finished within the agreed budget and void period, with invoices filed and categorised."
                cadence: phased
                effort_hours_estimate: "20"
              tasks:
                - "Walk the property and write a room-by-room scope"
                - "Split the scope into must-do and nice-to-have"
                - "Get fixed quotes from two trades for the main items"
                - "Choose hard-wearing finishes and one standard paint colour"
            - name: Remortgaging before the fixed rate ends
              description: |-
                ## Purpose
                About six months before a fixed rate ends is usually when you can secure a new deal, either a product transfer with your current lender or a remortgage elsewhere. Comparing both properly, including fees, a new valuation and any change in rent coverage rules, avoids months on the reversion rate.

                ## Milestones
                1. Your current lender's product transfer options requested.
                2. A broker comparison of remortgage deals on total cost over the new fixed term.
                3. Rent coverage and valuation checked against the new lender's rules.
                4. The new product secured to start the day the old one ends.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A new mortgage product starts the day the old fixed rate ends, chosen after comparing a product transfer with at least two remortgage options."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Ask your lender for product transfer options six months before expiry"
                - "Ask your broker for two remortgage alternatives"
                - "Compare all options on total cost over the new fixed term"
                - "Confirm the new product starts the day after the old one ends"
            - name: Hold, sell or refinance review per property
              description: |-
                ## Purpose
                Properties that suited you five years ago may now tie up equity that earns little, need large works, or sit in a market where rents have stalled. A yearly look at each property's return on equity, upcoming costs and your own plans leads to a deliberate hold, refinance or sell decision instead of drift.

                ## Milestones
                1. Return on current equity calculated for each property, not just on the original cash.
                2. Known costs for the next three years listed, such as roof, boiler or energy works.
                3. Options compared: hold as is, refinance, improve or sell.
                4. A decision recorded for each property with a review date.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "Each property has a dated hold, refinance, improve or sell decision based on return on current equity and three-year costs."
                cadence: cyclic
              tasks:
                - "Work out each property's net income as a share of current equity"
                - "List big costs expected in the next three years"
                - "Compare holding with refinancing and selling for each property"
                - "Run the yearly hold, sell or refinance review @recurring(yearly)"
            - name: Tenant check-in day with a photo inventory
              description: |-
                ## Purpose
                Most deposit disputes are lost because the landlord cannot prove the condition at the start. A detailed inventory with dated photos and meter readings, acknowledged by the tenant on move-in day, plus a welcome pack explaining how to report repairs, starts the tenancy on a clear and friendly footing.

                ## Milestones
                1. A room-by-room inventory with dated photos and descriptions of condition.
                2. Meter readings taken and utility and local tax accounts notified.
                3. Required documents handed over with a signed receipt, such as safety certificates and deposit information.
                4. Keys handed over and the inventory signed or acknowledged by the tenant within an agreed time.
              priority: medium
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "On move-in day a signed inventory with dated photos, meter readings and a receipt for required documents is filed."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Book an inventory clerk or block four hours to do it yourself"
                - "Photograph each room, meter and appliance with dates"
                - "Prepare a welcome pack with repair contacts and bin days"
                - "Get the tenant to sign for documents and the inventory"
            - name: End of tenancy and deposit return
              description: |-
                ## Purpose
                The last two weeks of a tenancy decide whether the deposit is returned quickly and the next let starts on time. A check-out against the original inventory, a fair list of deductions with evidence, and the deposit returned within the scheme's time limit end things cleanly and keep disputes rare.

                ## Milestones
                1. Check-out done against the check-in inventory, with photos.
                2. Final meter readings taken and utility accounts updated.
                3. Any deductions listed with evidence and costs, allowing for fair wear and tear.
                4. Deposit returned or a proposal agreed within the scheme's time limit.
              priority: medium
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "The deposit is returned or deductions agreed within the scheme's time limit, with a check-out report and photos filed."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Book the check-out for the day the tenant leaves"
                - "Compare the property against the check-in inventory and photos"
                - "Write any deductions with evidence and quotes"
                - "Submit the return or proposal through the deposit scheme"
            - name: Void period turnaround
              description: |-
                ## Purpose
                Every empty week costs a week of rent plus the utility bills and local property tax that landlords usually pay while a home sits empty. A turnaround checklist that runs from notice received to new tenant in, with marketing started before the old tenant leaves, can cut a typical void from six weeks to two.

                ## Milestones
                1. A checklist from notice received to new tenancy start, with target days for each step.
                2. Marketing and viewings started during the notice period where the tenancy allows.
                3. Cleaning, small repairs and safety checks booked for the days after check-out.
                4. Insurer told if the property will be empty longer than the policy allows.

                ## Notes
                Start from the **Operational checklist** template.
              priority: medium
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A void turnaround checklist with target days per step is in use and the length of the latest void is recorded."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Build a checklist from notice to new tenant with target days"
                - "Ask the tenant for viewing access during the notice period"
                - "Book cleaning and repairs for the days after check-out"
                - "Tell the insurer if the empty period will exceed the policy limit"
            - name: Year-end tax pack for your accountant
              description: |-
                ## Purpose
                An accountant charges for time, and a shoebox of receipts handed over at the deadline costs more than a tidy pack in the spring. Closing the rental books soon after the tax year ends, with totals by category, mortgage interest statements and a list of capital spending, means the return is filed early and questions are cheap.

                ## Milestones
                1. Income and expenses totalled by category for the tax year.
                2. Mortgage interest statements and agent annual statements collected.
                3. Capital spending listed separately from repairs.
                4. The pack sent to your accountant, or the return filed, well before the deadline.
              priority: medium
              frontmatter:
                mode: event
                output_kind: deliverable
                success_criteria: "The rental tax pack reaches the accountant within three months of the tax year end, with interest statements and capital spending listed."
                cadence: cyclic
              tasks:
                - "Ask your lender for the annual mortgage interest statement"
                - "Total income and expenses by category from the bookkeeping file"
                - "List capital spending separately with invoices"
                - "Send the year-end rental pack to your accountant @recurring(yearly)"
            - name: Serving notice lawfully when a tenancy must end
              description: |-
                ## Purpose
                Notices that use the wrong form or the wrong dates, or that were served without the required certificates and deposit protection, are thrown out, often months into the process. Preparing properly, with the legal grounds, proof of the documents the tenant should already have, and advice where needed, protects both your position and the tenant's rights.

                ## Milestones
                1. The lawful routes to end the tenancy where you let identified, with notice periods.
                2. Proof gathered that required documents and deposit protection were in place.
                3. The correct notice drafted, checked by a solicitor or landlord association, and served with proof of service.
                4. A plan written for each outcome: tenant leaves, agrees a date or stays past the notice.

                ## Notes
                Never change the locks, remove belongings or cut off utilities to make a tenant leave. In most places that is illegal eviction and a criminal offence.
              priority: high
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A notice checked by a qualified adviser is served with proof of service, and supporting compliance documents are filed together."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Read the official guidance on ending a tenancy where you let"
                - "Gather proof of deposit protection and certificates given to the tenant"
                - "Have a solicitor or landlord association check the notice"
                - "Serve the notice in a way you can prove and file the evidence"
            - name: First-year landlord review
              description: |-
                ## Purpose
                The first year is when your assumptions meet reality: actual voids, repairs, agent fees and tax set against the calculator you used to buy. A structured review at twelve months replaces guesses with your own numbers and decides what to change before year two.

                ## Milestones
                1. Actual income and costs for the first year set beside the original projection.
                2. The three biggest differences explained.
                3. Calculator defaults updated with real figures.
                4. Up to three changes for year two written down, such as agent, rent or reserve level.
              priority: medium
              deadlineOffsetDays: 365
              frontmatter:
                mode: event
                output_kind: knowledge
                success_criteria: "A first-year review compares actual and projected figures, updates the calculator and lists up to three changes for year two."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Pull the year's totals from your bookkeeping file"
                - "Put them beside the figures you projected before buying"
                - "Update the calculator's void and repair allowances"
                - "Write up to three changes for the second year"
            - name: Accidental landlord letting a former home
              description: |-
                ## Purpose
                Many homeowners become landlords by moving in with a partner or relocating for work and letting the home they still own. The mortgage, insurance, tax and safety rules all change the day it is let, and lenders usually require consent to let or a switch to a buy-to-let product first.

                ## Milestones
                1. Lender consent to let obtained or a buy-to-let remortgage arranged.
                2. Insurance switched to a landlord policy from the day the tenancy starts.
                3. Safety certificates and deposit arrangements in place before move-in.
                4. Tax on letting a former home, including any relief on an eventual sale, discussed with an accountant.
              priority: high
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "Before the first tenant moves in, lender consent or a buy-to-let mortgage, landlord insurance and all safety certificates are in place."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Call your lender to ask about consent to let"
                - "Tell your insurer you plan to let and get a landlord quote"
                - "Book the safety checks required before a tenant moves in"
                - "Ask an accountant how letting affects tax on a future sale"
            - name: Remote landlord managing from a distance
              description: |-
                ## Purpose
                Owning a rental hours away, or in another country, means you cannot pop round when the boiler fails. A local support system of a managing agent or trusted contact, digital records, a clear spending limit for emergency repairs and a regular call keeps the property well run without you being there.

                ## Milestones
                1. A local agent or named contact able to attend the property within a day.
                2. An emergency repair spending limit agreed in writing.
                3. All documents, certificates and statements held in shared digital storage.
                4. A regular update call with the agent or contact in the diary.

                ## Notes
                If you live abroad, check how rental income is taxed in both countries and whether tax must be withheld from rent paid to an overseas landlord.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A local contact can attend within a day, an emergency spending limit is agreed in writing and a monthly update call happens."
                cadence: rolling
              tasks:
                - "Name a local agent or contact who can attend within a day"
                - "Agree an emergency repair spending limit in writing"
                - "Move all certificates and statements into shared digital storage"
                - "Hold an update call with your local agent or contact @recurring(monthly:28)"
            - name: Joint ownership agreement for a rental
              description: |-
                ## Purpose
                Buying with a partner, sibling or friend spreads the deposit but raises questions nobody asks until they disagree: who pays for the new roof, what happens if one wants to sell, and how profits are split. A written agreement drawn up with a solicitor before completion settles these while everyone is still on good terms.

                ## Milestones
                1. The form of joint ownership chosen and understood, including what happens on death.
                2. Shares of deposit, ongoing costs and profit agreed and written down.
                3. Rules set out for decisions, extra spending and one owner wanting to exit.
                4. The agreement signed with independent legal advice and stored with the title documents.
              priority: medium
              deadlineOffsetDays: 90
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A signed ownership agreement covering shares, costs, decisions and exit is stored with the title documents."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "List each owner's deposit and monthly contribution"
                - "Agree how profits, losses and big repairs are shared"
                - "Write down what happens if one owner wants to sell"
                - "Ask a solicitor to draft the agreement and witness the signing"
            - name: Landlord with a demanding day job
              description: |-
                ## Purpose
                Landlords with full-time jobs tend to deal with the rental in stolen moments, which is how certificates lapse and emails go unanswered. A fixed monthly admin hour, automated payments and a clear rule on what goes to the agent and what comes to you keep the rental from leaking into the working week.

                ## Milestones
                1. A recurring monthly admin slot in your diary.
                2. Rent, mortgage and insurance payments fully automated.
                3. A short rule set on which issues the agent handles and which come to you.
                4. Hours spent on the rental tracked for three months and compared with your limit.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A monthly admin hour is in the diary and three months of logged hours sit within your stated limit."
                cadence: rolling
              tasks:
                - "Spend a monthly landlord admin hour on the rental @recurring(monthly:14)"
                - "Automate every regular payment in and out of the rental account"
                - "Write a one-page rule on what the agent handles without asking"
                - "Log hours spent on the rental for three months"
            - name: Retiring landlord simplifying the portfolio
              description: |-
                ## Purpose
                In later life the appeal of tenant calls and boiler repairs fades, while the need for steady, predictable income grows. Planning how rental income fits retirement, whether to move to full management, pay down mortgages or sell some properties over several tax years, and who would step in if you could not, makes the portfolio easier to live with and to pass on.

                ## Milestones
                1. Rental net income set beside other retirement income in one projection.
                2. Options compared: full management, paying off mortgages, selling some or all.
                3. A lasting power of attorney or local equivalent covering property decisions in place.
                4. A written note for family on where documents are and who manages what.

                ## Notes
                Selling several properties in one tax year can push gains into a higher band. Discuss timing with an accountant.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A written plan sets out which properties are kept, sold or handed to management, with a power of attorney in place."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Put rental income beside pension and other income for the next ten years"
                - "Compare full management, paying off mortgages and selling"
                - "Arrange a lasting power of attorney covering property decisions"
                - "Write a note for family on documents, agents and accounts"
            - name: Shared house and licensing feasibility study
              description: |-
                ## Purpose
                Letting a house room by room to several unrelated sharers can lift the gross rent well above a single let, but often needs a licence, planning permission, fire doors, linked alarms and far more management. A feasibility study before buying or converting tells you whether the uplift survives the extra rules and costs.

                ## Milestones
                1. Licensing and planning rules for shared houses in your target area confirmed with the council.
                2. Fire safety and minimum room size requirements listed with conversion costs.
                3. Room rents and demand checked with local agents.
                4. A side-by-side net yield comparison of single let and shared let, with a go or no-go decision.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A go or no-go decision on shared letting is recorded, based on confirmed council rules, costed works and a net yield comparison."
                cadence: one-shot
                effort_hours_estimate: "10"
              tasks:
                - "Ask the council about licensing and planning for shared houses"
                - "List fire safety and room size requirements with costs"
                - "Check local room rents with two agents"
                - "Compare single let and shared let net yield side by side"
            - name: Portfolio stress test for rates and voids
              description: |-
                ## Purpose
                A portfolio that works at today's rate and full occupancy can turn cash negative after one bad year of rate rises, a long void and a big repair. Testing each property against those shocks together, and listing what you would do in each case, shows how much buffer you really need.

                ## Milestones
                1. Each property's cash flow tested at interest rates two and four points higher.
                2. A three-month void and a large repair added to the same test.
                3. The total cash buffer needed to survive the worst case calculated.
                4. Risks and planned responses recorded in a register.

                ## Notes
                Start from the **Risk register** template.
              priority: medium
              frontmatter:
                mode: research
                output_kind: artifact
                success_criteria: "A stress test across all properties shows the cash buffer needed for the worst case, and a risk register lists a response to each risk."
                cadence: cyclic
              tasks:
                - "Rerun each property's cash flow at two and four points higher"
                - "Add a three-month void and a large repair to the test"
                - "Work out the cash buffer needed for the worst case"
                - "Rerun the stress test with current figures @recurring(yearly)"
            - name: Releasing equity to buy a second rental
              description: |-
                ## Purpose
                Once a property has risen in value, refinancing it to fund a second deposit is the usual route to growing a portfolio, but it raises debt on both and makes each more sensitive to falls. Modelling the combined position before refinancing shows whether two properties at higher gearing beat one at lower.

                ## Milestones
                1. Current value and available equity at your maximum loan-to-value worked out.
                2. Combined cash flow of both properties modelled at a stressed rate.
                3. Lender rules for portfolio landlords, such as those with four or more mortgaged properties, checked.
                4. A go or wait decision recorded, with ownership structure questions referred to an accountant.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A go or wait decision on releasing equity is recorded, based on a combined stressed cash flow for both properties."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Get an up-to-date valuation estimate for the current rental"
                - "Work out the equity available at your maximum loan-to-value"
                - "Model both properties' combined cash flow at a stressed rate"
                - "Ask your broker about portfolio landlord lending rules"
            - name: Exit plan for a tenanted rental property
              description: |-
                ## Purpose
                Selling a rental involves choices a home seller never faces: sell with the tenant in place to an investor or with vacant possession, how to end the tenancy lawfully, and when in the tax year to complete. Planning the exit a year ahead keeps options open and avoids a forced sale at the wrong time.

                ## Milestones
                1. Selling with tenants in place and with vacant possession compared on price and timing.
                2. The notice and tenancy steps needed for vacant possession listed with dates.
                3. Estimated tax on the sale and the best timing discussed with an accountant.
                4. A target sale window and estate agent chosen.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A written exit plan sets a sale window, chooses a tenanted or vacant sale and records the accountant's view on tax and timing."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Ask two estate agents for tenanted and vacant valuations"
                - "List the tenancy steps and dates for vacant possession"
                - "Book an accountant to estimate tax and timing on the sale"
                - "Choose a target sale window and record it"
---

# Buy-to-Let Property

Buy-to-let is a small business wearing a property's clothes, and this area is for homeowners and anyone else thinking about, buying or already running a residential rental. It starts with the foundations (affordability, a written brief, honest yield maths, mortgages, due diligence, insurance and a separate account), moves into the routines that keep a let legal and profitable, then the law and tax worth learning, the decisions on agents, furnishing and upgrades, the dated events of a tenancy from check-in to notice, variants for accidental, remote, joint, busy and retiring landlords, and finally specialist work such as shared houses, stress tests, equity release and a planned exit.

The rhythm is monthly and yearly: rent checked on the 3rd, the compliance calendar scanned, receipts matched and the sinking fund topped up each month, inspections and rate checks each quarter, and the gas check, rent review, agent review, insurance renewal and tax pack once a year. The Compliance control, Vendor, Metrics log, Purchase decision, Operational checklist and Risk register templates pair with the compliance calendar, the agent choice and review, the performance log, the mortgage comparison, void turnarounds and the stress test. Installing adds all 50 projects as active, so archive the ones that are not for you yet.
