---
id: family-office.family-liquidity-planning
name: Family Liquidity Planning
description: "Enough cash in the right place at the right time: a map of family liquidity, a twelve-month needs schedule, capital call and tax calendars, a reserve policy, a rolling forecast and stress tests."
category: personal
version: 1.0.0
tags: [family-office, family-liquidity-planning, parent, retiree, cash-flow, capital-calls, liquidity-reserve, distributions]
author: Aurum Technology
starter_structure:
  templates:
    - monthly-budget-bills
    - metrics-log
    - purchase-decision
    - board-meeting
    - risk-register
  pillars:
    - name: Family Office & Private Wealth
      emoji: "🏰"
      description: "Running the affairs of a wealthy family, not picking investments: family governance and a constitution, trusts and foundations across jurisdictions, setting up a single-family office, a family investment policy and reporting, educating the next generation, philanthropy vehicles, household staff and concierge, and the security and privacy wealth brings."
      pillarFrontmatter:
        review_cadence: quarterly
      areas:
        - name: Family Liquidity Planning
          description: "Planning cash needs across the family: spending, taxes, capital calls, distributions to members and keeping enough liquid for the unexpected."
          projects:
            - name: Family liquidity map across every entity and account
              description: |-
                ## Purpose
                Wealthy families usually hold cash in a dozen places: personal current accounts, the holding company, two trusts, a brokerage sweep and a deposit at a bank nobody has visited in years. Until every pot is listed with its owner, its currency and who can sign on it, nobody can say how much the family could actually reach next week.

                ## Milestones
                1. Every bank, brokerage and custody account holding cash listed with its legal owner and currency.
                2. Each account tagged with the people who can authorise a payment from it.
                3. Balances at a single recent date entered for every account.
                4. Cash held inside trusts and companies marked as reachable only through trustees or directors.
                5. A one-page summary of total cash by owner, currency and access route agreed with the principal.

                ## Notes
                Cash in a trust belongs to the trust, not the family. Showing it separately keeps everyone honest about what can really be spent and who has to agree.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: research
                output_kind: artifact
                success_criteria: "A dated liquidity map listing every cash-holding account with owner, currency, signatories and balance, signed off by the principal."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "List every bank and brokerage account you know the family holds"
                - "Ask the accountant and trust administrators for any accounts missing from the list"
                - "Record the owner, currency and signatories for each account"
                - "Enter balances at the same month-end date for every account"
            - name: Twelve-month schedule of family cash needs
              description: |-
                ## Purpose
                Liquidity problems are rarely about total wealth and almost always about timing: a large tax payment, school fees for three grandchildren and a fund drawdown falling in the same quarter. A month-by-month schedule of known outflows for the next year turns vague worry into a list of dated amounts the family can plan around.

                ## Milestones
                1. Known outflows for the next twelve months listed by month, payer and currency.
                2. Each outflow marked as fixed, likely or possible.
                3. Known inflows such as dividends, rents and fund distributions entered alongside.
                4. The three tightest months highlighted with their net shortfall or surplus.
                5. The schedule reviewed with the principal and the family's accountant.

                ## Notes
                Put a value on the likely and possible items even if it is rough. A blank line reads as zero, and zero is the most dangerous estimate there is.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A twelve-month schedule of inflows and outflows by month exists, with the three tightest months identified and reviewed with the accountant."
                cadence: one-shot
                effort_hours_estimate: "10"
              tasks:
                - "Gather last year's bank statements for the main paying accounts"
                - "List every known payment due in the next twelve months by month"
                - "Add expected dividends, rents and fund distributions as inflows"
                - "Highlight the three months with the largest net outflow"
            - name: Household spending baseline by branch and residence
              description: |-
                ## Purpose
                Lifestyle spending is the one outflow that never stops, yet families often only know it as a total that drifts upward every year. Breaking twelve months of household spending into each branch and each home shows the steady monthly draw the liquidity plan must always cover before anything else.

                ## Milestones
                1. Twelve months of household payments gathered from every paying account.
                2. Spending split by branch of the family and by residence.
                3. Fixed costs such as staff, insurance and utilities separated from discretionary spending.
                4. An average monthly lifestyle draw agreed for each branch.
                5. Seasonal peaks such as summer travel or holiday staff noted by month.

                ## Notes
                Start from the **Monthly budget and bills** template for each household. Keep the office's own running costs out of this baseline; they belong in the office budget.
              priority: medium
              frontmatter:
                mode: research
                output_kind: artifact
                success_criteria: "A monthly lifestyle spending figure for each branch and residence, based on twelve months of actual payments, recorded in the liquidity file."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Export twelve months of payments from each household account"
                - "Tag every payment with a branch and a residence"
                - "Separate fixed household costs from discretionary spending"
                - "Agree an average monthly draw with each branch head"
            - name: Tax payment calendar across every jurisdiction
              description: |-
                ## Purpose
                A family with members, trusts and companies in several countries can face income tax instalments, property taxes, withholding top-ups and annual company taxes in five places on five different calendars. One calendar with every due date and an estimated amount stops the most predictable cash crunch of all, and the penalties that follow a missed date.

                ## Milestones
                1. Every taxpayer in the family, including trusts and companies, listed with the countries where it files.
                2. Each due date for payments and instalments entered with its jurisdiction.
                3. An estimated amount entered for each payment, confirmed by the relevant tax adviser.
                4. The paying account for each tax named in advance.
                5. The calendar shared with the accountant and the person who makes payments.

                ## Notes
                Ask each tax adviser for the dates in writing rather than working them out yourself. Rules on instalments and provisional payments vary widely and change.
              priority: high
              deadlineOffsetDays: 45
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A single tax calendar lists every payment date, estimated amount and paying account for each family taxpayer, confirmed by their advisers."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "List each person, trust and company that pays tax, and where"
                - "Ask each tax adviser for next year's payment dates and estimates in writing"
                - "Name the account that will fund each payment"
                - "Refresh the tax calendar with each adviser before the new tax year @recurring(yearly)"
            - name: Private fund capital call commitment schedule
              description: |-
                ## Purpose
                Commitments to private equity, venture, credit and property funds are promises to pay cash on ten days' notice, and the uncalled total is often larger than the family's whole cash balance. Listing every commitment with what has been called, what remains and the likely pace turns surprise drawdowns into a forecast.

                ## Milestones
                1. Every fund commitment listed with the committing entity, total commitment and amount called to date.
                2. Unfunded commitment calculated for each fund and in total.
                3. Expected calls for the next eight quarters estimated with input from the fund managers or the investment adviser.
                4. Notice periods and the paying account recorded for each fund.
                5. Total unfunded commitments compared with the family's liquid reserve.

                ## Notes
                Use the latest capital account statements, not the subscription documents, for amounts called. Recallable distributions can add back to what a fund may still call.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: research
                output_kind: artifact
                success_criteria: "A commitment schedule shows total, called and unfunded amounts for every fund, with eight quarters of expected calls compared against the reserve."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Collect the latest capital account statement for every fund"
                - "Record commitment, called and unfunded amounts for each fund"
                - "Ask the investment adviser for an expected call pace by quarter"
                - "Update unfunded amounts from new fund statements @recurring(quarterly)"
            - name: Liquidity tiers for the family balance sheet
              description: |-
                ## Purpose
                Saying the family is worth a certain sum hides the fact that most of it may take months or years to turn into cash. Sorting every holding into tiers by how fast it could be sold, and at what likely cost, shows how much of the wealth is genuinely available when a bill arrives.

                ## Milestones
                1. Four tiers agreed: same week, within a month, within a year, and longer than a year.
                2. Every holding placed in a tier, with private companies, property and funds in the slowest.
                3. Known sale costs, notice periods and lock-ups noted for each tier.
                4. A total for each tier calculated from the latest valuations.
                5. The share of family wealth available within a month recorded as a headline figure.

                ## Notes
                Be harsh with the faster tiers. A listed position that could only be sold over weeks without moving the price belongs further down.
              priority: medium
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "Every family holding is placed in one of four liquidity tiers, with a total per tier and the share reachable within a month recorded."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Agree four liquidity tiers and their time limits with the principal"
                - "Place each holding from the latest wealth report in a tier"
                - "Note lock-ups, notice periods and sale costs for slower holdings"
                - "Total each tier and record the share reachable within a month"
            - name: Minimum liquidity reserve policy
              description: |-
                ## Purpose
                Without an agreed floor, the cash reserve gets spent on the next good opportunity and is gone when the hard month comes. A written policy that sets the reserve as a number of months of known outflows plus a buffer for capital calls gives the family a line nobody crosses without a deliberate decision.

                ## Milestones
                1. The reserve defined as a number of months of lifestyle, tax and debt payments, with an allowance for capital calls.
                2. The reserve amount calculated from the needs schedule and commitment schedule.
                3. Rules written for who may approve dipping below the reserve and how it is refilled.
                4. The policy agreed with the investment adviser and signed by the principal.
                5. A review date set for the policy each year.

                ## Notes
                There is no correct number of months. Families with large uncalled commitments or one dominant business usually hold more; agree the level with your investment adviser.
              priority: high
              deadlineOffsetDays: 60
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A signed reserve policy states the reserve amount, how it is calculated, who may approve going below it and how it is refilled."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Draft the reserve as months of outflows plus a capital call buffer"
                - "Calculate the reserve amount from the needs and commitment schedules"
                - "Agree the approval and refill rules with the principal"
                - "Review the reserve level against the latest needs schedule @recurring(yearly)"
            - name: Signatory and payment authority map for family cash
              description: |-
                ## Purpose
                Even a good liquidity plan fails on the day it is needed if the only signatory on the reserve account is travelling, ill or recently deceased. Mapping who can move money from each account, up to what amount, and who stands in when they cannot, makes sure cash can actually reach the place it is needed.

                ## Milestones
                1. Signatories and payment limits recorded for every account on the liquidity map.
                2. Accounts with only one signatory identified.
                3. A second signatory or a documented backup arranged for each critical account.
                4. Mandate changes submitted to the banks where needed.
                5. The map stored with the liquidity file and reviewed when anyone joins or leaves.

                ## Notes
                Check how each bank treats a power of attorney before you rely on one. Some will only accept their own form.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Every critical cash account has at least two people able to authorise payments, recorded in a signatory map held in the liquidity file."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Request the current mandate from each bank holding family cash"
                - "Mark accounts that rely on a single signatory"
                - "Agree a second signatory or backup for each critical account"
                - "Send the mandate change forms to the banks"
            - name: Survey of each member's expected cash needs
              description: |-
                ## Purpose
                Adult children and their families often have large needs coming that the head of the family has never been told about: a house deposit, a business start-up, a sabbatical, a child's university fees abroad. Asking each member privately what they expect over the next three years puts those amounts into the plan before they become urgent requests.

                ## Milestones
                1. A short, private questionnaire on expected needs over three years sent to each adult member.
                2. Responses collected from every branch, or a follow-up call held where none came back.
                3. Needs grouped into housing, education, ventures, health and other.
                4. Expected amounts and timings added to the twelve-month schedule and a three-year view.
                5. The survey's purpose and confidentiality explained to every member in writing.

                ## Notes
                Make it clear that answering is not a request for money and not a promise of it. Otherwise people either inflate their answers or skip the survey.
              priority: medium
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "Every adult member has returned the needs survey or been called, and their expected needs appear in the three-year liquidity view."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Write a five-question needs survey with a note on confidentiality"
                - "Send it to every adult member of each branch"
                - "Call members who have not replied within two weeks"
                - "Add the expected amounts and dates to the three-year view"
            - name: Debt and borrowing maturity schedule
              description: |-
                ## Purpose
                Mortgages on several homes, a credit line at the private bank and loans inside the holding company each have repayment dates, rate resets and covenants. Listing every borrowing with its maturity and what happens at that date shows whether a refinancing or a repayment will collide with other cash needs.

                ## Milestones
                1. Every loan, mortgage and credit line listed with borrower, lender, balance, rate and maturity.
                2. Interest and scheduled repayments added to the twelve-month needs schedule.
                3. Covenants and pledged collateral recorded for each facility.
                4. Maturities in the next two years flagged with a plan to repay or refinance.
                5. The schedule checked against the latest lender statements.

                ## Notes
                Personal guarantees given by family members for company or relatives' borrowing belong here too, even though they are not on the family's own statements.
              priority: high
              deadlineOffsetDays: 45
              frontmatter:
                mode: research
                output_kind: artifact
                success_criteria: "A borrowing schedule lists every facility with balance, rate, maturity and collateral, and each maturity in the next two years has a written plan."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Collect the latest statement for every loan, mortgage and credit line"
                - "Record borrower, lender, rate, maturity and collateral for each"
                - "Add interest and repayments to the twelve-month schedule"
                - "Write a repay or refinance plan for each maturity in the next two years"
            - name: Rolling thirteen-week family cash forecast
              description: |-
                ## Purpose
                Yearly plans are too coarse to catch a shortfall three weeks away, and most cash surprises show up first in the short term. A thirteen-week forecast updated every week, by account and currency, gives early warning while there is still time to move money, draw on a facility or delay a payment.

                ## Milestones
                1. A thirteen-week forecast set up with opening balances, receipts and payments by week.
                2. The main paying accounts and currencies shown separately.
                3. Each weekly update compared with last week's forecast and differences explained.
                4. A rule agreed for when a forecast shortfall is reported to the principal.
                5. Thirteen consecutive weekly updates completed.

                ## Notes
                Keep it simple enough to update in under an hour. A forecast that takes a day to refresh stops being refreshed.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "The thirteen-week forecast has been updated every week for a full quarter, with any forecast shortfall reported to the principal within two days."
                cadence: rolling
              tasks:
                - "Build a thirteen-week sheet with opening balances for the main accounts"
                - "Enter known receipts and payments for each of the next thirteen weeks"
                - "Roll the forecast forward and reconcile it to bank balances @recurring(weekly:mon)"
                - "Write down the trigger for reporting a shortfall to the principal"
            - name: Monthly cash position report to the principal
              description: |-
                ## Purpose
                Principals who only hear about cash when something has gone wrong tend to make rushed decisions. A one-page report early each month, showing cash by tier and currency, the reserve against its floor and the next quarter's big payments, keeps the family informed without drowning them in statements.

                ## Milestones
                1. A one-page report layout agreed with the principal.
                2. Cash by owner and currency, the reserve level and the next ninety days of large payments included.
                3. Movements since last month explained in two or three lines.
                4. The report delivered by the same day each month for six months running.

                ## Notes
                Start from the **Metrics log** template to keep the headline figures month by month, so trends show without rebuilding old reports.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A one-page cash position report reaches the principal by the same date every month for six consecutive months."
                cadence: rolling
              tasks:
                - "Agree the one-page report layout with the principal"
                - "Set up a metrics log for cash, reserve and ninety-day payments"
                - "Prepare and send the monthly cash position report @recurring(monthly:5)"
                - "Add two lines explaining the largest movement since last month"
            - name: Capital call notice handling routine
              description: |-
                ## Purpose
                Capital call notices arrive by email from fund administrators, often with short deadlines and wiring details that fraudsters love to imitate. A fixed routine for logging, checking, funding and confirming each call means no drawdown is missed or paid twice, and no payment goes to a changed bank account unchecked.

                ## Milestones
                1. One mailbox or folder named for receiving all capital call notices.
                2. A checklist for each notice: amount against unfunded commitment, due date, paying entity and verified bank details.
                3. Bank details confirmed by phone against a number already on file before any first payment or change.
                4. Every call logged with the date paid and the updated unfunded amount.
                5. No late or duplicate call payment over a full year.

                ## Notes
                Never use a phone number from the notice itself to verify a change of bank details. Call the number you already hold for the administrator.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every capital call over a year is logged, verified by phone where details changed, and paid on time with the unfunded schedule updated."
                cadence: rolling
              tasks:
                - "Ask every fund administrator to send notices to one named mailbox"
                - "Write the checklist for reviewing and funding a call notice"
                - "Record a verified phone number for each fund administrator"
                - "Check the call mailbox and log any new notices @recurring(monthly:15)"
            - name: Quarterly family liquidity review
              description: |-
                ## Purpose
                Monthly reports show the position, but somebody has to step back and ask whether the reserve is still the right size, whether commitments are running ahead of plan and whether any asset sale needs to start now. A quarterly review with the principal and the investment adviser is where those calls get made and written down.

                ## Milestones
                1. A standing agenda: reserve against floor, forecast for two quarters, commitments, borrowing and member requests.
                2. The review held each quarter with the principal and the investment adviser.
                3. Decisions and owners recorded in short minutes.
                4. Actions from the previous review checked off at the start of the next.

                ## Notes
                Keep one running decisions list in the liquidity file rather than separate minutes per meeting, so the history of each decision reads in one place.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Four quarterly liquidity reviews are held in a year, each with minutes recording decisions, owners and follow-up of previous actions."
                cadence: cyclic
              tasks:
                - "Write a standing agenda for the quarterly liquidity review"
                - "Book the review with the principal and investment adviser @recurring(quarterly)"
                - "Record decisions and owners in short minutes after each review"
                - "Open each review by checking the previous actions"
            - name: Quarterly tax instalment funding routine
              description: |-
                ## Purpose
                Instalment and provisional tax payments come round every few months, and each one needs the right amount in the right account in the right currency a few days before it is due. A routine that checks the next payments against the tax calendar each quarter avoids last-minute transfers and penalty interest.

                ## Milestones
                1. The next quarter's tax payments pulled from the tax calendar each quarter.
                2. Amounts confirmed or updated with the relevant tax adviser.
                3. Funding moved to the paying accounts at least five working days before each due date.
                4. Proof of payment filed for every tax payment.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every tax instalment over a year is funded at least five working days before its due date, with proof of payment on file."
                cadence: rolling
              tasks:
                - "List next quarter's tax payments from the tax calendar @recurring(quarterly)"
                - "Confirm each amount with the relevant tax adviser"
                - "Move funds to each paying account five working days before the due date"
                - "File the payment confirmation for every tax payment"
            - name: Member distribution payment run
              description: |-
                ## Purpose
                Regular distributions to family members, whether from a trust, a holding company or the principal's own funds, are where small errors cause big upsets: a payment late before rent day, or one branch paid and another forgotten. A fixed monthly run with an approval step keeps distributions predictable, documented and fair.

                ## Milestones
                1. A list of regular distributions with recipient, payer, amount, currency and approval needed.
                2. A payment date fixed for each month and told to every recipient.
                3. Trustee or director approval obtained where the payer is a trust or company.
                4. Each run reconciled to the list, with any change approved in writing.
                5. Six months of runs completed on the fixed date.

                ## Notes
                Distributions from trusts are trustee decisions. The family office prepares and requests; it does not decide on the trustees' behalf.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Monthly distributions are paid on a fixed date for six months, each run approved and reconciled to the distribution list."
                cadence: rolling
              tasks:
                - "List every regular distribution with payer, recipient and amount"
                - "Tell each recipient the fixed monthly payment date"
                - "Prepare the distribution run and send it for approval @recurring(monthly:20)"
                - "Reconcile each run to the list and file the approvals"
            - name: Idle cash sweep between family accounts
              description: |-
                ## Purpose
                Cash pools in old current accounts earning nothing while the reserve account runs low, and money sits in the wrong currency for next month's bills. A monthly look at balances against agreed account targets moves surplus to where it earns or is needed, within the rules on which entity may fund which.

                ## Milestones
                1. A target balance range set for each main account.
                2. Rules recorded on which transfers between entities need a loan note, a resolution or trustee consent.
                3. Balances checked against targets each month and surplus or shortfall moved.
                4. Every transfer between separate legal owners documented properly.

                ## Notes
                Money moving from a company or trust to a person is not a sweep, it is a distribution, a loan or a salary. Ask the accountant how each flow should be recorded before setting up regular transfers.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Each main account has a target range, balances are swept monthly, and every transfer between legal owners has its supporting document."
                cadence: rolling
              tasks:
                - "Set a target balance range for each main account"
                - "Ask the accountant which transfers between entities need paperwork"
                - "Compare balances with targets and move surplus cash @recurring(monthly:12)"
                - "File the supporting document for each transfer between owners"
            - name: Annual family liquidity plan
              description: |-
                ## Purpose
                Every year brings a new set of tax bills, fund calls, member needs and maturing loans, and the plan that worked last year will not fit this one. Rebuilding the liquidity plan once a year, before the new budget and tax year, resets the reserve, the funding sources and any asset sales that need to start.

                ## Milestones
                1. The twelve-month needs schedule rolled forward and rebuilt from fresh inputs.
                2. Funding sources assigned to each large outflow.
                3. Any asset sales or borrowings needed for the year identified with a start date.
                4. The plan reviewed with the investment and tax advisers.
                5. The plan approved by the principal and filed with last year's for comparison.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: deliverable
                success_criteria: "A new annual liquidity plan, with funding sources for every large outflow, is approved by the principal before the start of each year."
                cadence: cyclic
              tasks:
                - "Start rebuilding next year's liquidity plan from fresh inputs @recurring(yearly)"
                - "Assign a funding source to each outflow above the agreed threshold"
                - "Review the draft plan with the investment and tax advisers"
                - "Compare the approved plan with last year's and note the main changes"
            - name: Receipts tracker for dividends, rents and fund distributions
              description: |-
                ## Purpose
                Inflows are as uncertain as outflows: a family company may skip its dividend, a tenant may pay late and fund distributions come when they come. Tracking expected receipts against what actually arrives shows quickly when the plan is relying on money that is not coming.

                ## Milestones
                1. Every regular source of income listed with expected amount, timing and receiving account.
                2. Actual receipts logged against expected each month.
                3. Shortfalls over an agreed threshold flagged in the cash position report.
                4. Unexpected distributions from funds classified as recallable or final.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Expected and actual receipts are compared every month, with shortfalls above the threshold reported to the principal."
                cadence: rolling
              tasks:
                - "List every regular income source with its expected timing"
                - "Set the shortfall threshold that triggers a note to the principal"
                - "Log actual receipts against expected amounts @recurring(monthly:25)"
                - "Ask each fund whether new distributions are recallable"
            - name: Credit line headroom and covenant check
              description: |-
                ## Purpose
                Credit lines count as a liquidity source only if they are still available on the day it is needed, and pledged portfolios can lose headroom quickly when markets fall. Checking undrawn amounts, collateral values and covenants each quarter shows whether the backup is still real.

                ## Milestones
                1. Undrawn amount, collateral value and loan-to-value recorded for each facility.
                2. Covenant tests and reporting dates listed for each lender.
                3. Headroom compared with the lender's margin call level.
                4. Any facility nearing a limit or renewal raised at the quarterly review.

                ## Notes
                Ask each lender in writing at what loan-to-value they would call for more collateral, and how quickly. The answer shapes how much headroom you can count on.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Each quarter, headroom, collateral value and covenant status are recorded for every facility, with any near-limit facility raised at the review."
                cadence: rolling
              tasks:
                - "Ask each lender for their margin call level and response time in writing"
                - "List covenant tests and reporting dates for every facility"
                - "Record undrawn amounts and loan-to-value for each facility @recurring(quarterly)"
                - "Raise any facility near its limit at the next liquidity review"
            - name: Understanding capital call pacing and the J-curve
              description: |-
                ## Purpose
                Family members who approve private fund commitments often do not realise that cash goes out for four or five years before much comes back. Learning how drawdowns, distributions and net cash flow typically run over a fund's life makes later commitment decisions far less likely to strain liquidity.

                ## Milestones
                1. A short reading list on private fund cash flows gathered from the investment adviser.
                2. The typical pattern of calls and distributions over a fund's life sketched for one real family fund.
                3. Net cash flow by year worked out for the family's existing funds.
                4. Questions for the investment adviser written down and answered.

                ## Notes
                Patterns differ by strategy and vintage, and past funds are no guide to any particular future one. Use the exercise to understand shape, not to predict amounts.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A one-page note explains the family's own funds' cash flow pattern by year, with the investment adviser's answers to your questions."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Ask the investment adviser for two readable explainers on fund cash flows"
                - "Sketch calls and distributions by year for one family fund"
                - "Work out net cash flow by year across all family funds"
                - "Write down the questions the exercise raised for the adviser"
            - name: Reading a fund capital account statement
              description: |-
                ## Purpose
                Capital account statements are where commitment, called capital, distributions, fees and recallable amounts actually live, but they are laid out differently by every administrator. Learning to read one line by line means the commitment schedule is built from facts rather than guesses.

                ## Milestones
                1. Three statements from different funds laid side by side.
                2. Commitment, contributions, distributions, fees and net asset value found on each.
                3. Recallable distributions and remaining commitment identified on each.
                4. A short glossary of terms written for family members.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A one-page glossary explains each line of a capital account statement, tested against three real family fund statements."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Pick three recent capital account statements from different funds"
                - "Find commitment, called capital and distributions on each one"
                - "Mark the recallable amounts and remaining commitment"
                - "Write a one-page glossary for family members"
            - name: Cash flow forecasting basics for family members
              description: |-
                ## Purpose
                When only one person understands the forecast, the family is one illness away from flying blind. A short practical session teaching the next generation and the principal's spouse how the forecast is built and read spreads the knowledge without handing over control.

                ## Milestones
                1. A one-hour session planned around the family's real thirteen-week forecast.
                2. Participants able to explain opening balance, receipts, payments and closing balance.
                3. Each participant spotting a shortfall in a worked example.
                4. A short written guide left with the participants.

                ## Notes
                Use figures rounded or scaled if members should not see actual balances. The skill is reading the shape, not knowing the numbers.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "At least two family members besides the principal can read the forecast and identify a shortfall in a worked example."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Choose who in the family should learn to read the forecast"
                - "Prepare a scaled version of the forecast for teaching"
                - "Run a one-hour session with a worked shortfall example"
                - "Leave a two-page guide with each participant"
            - name: How lenders value pledged portfolios
              description: |-
                ## Purpose
                Borrowing against a portfolio looks like cheap liquidity until a market fall cuts the lending value and the bank asks for cash or sells assets. Understanding advance rates, concentration haircuts and margin call mechanics before signing protects the family from a forced sale at the worst moment.

                ## Milestones
                1. Each current lender's advance rates by asset type obtained.
                2. Concentration and currency haircuts understood for the family's actual holdings.
                3. The fall in portfolio value that would trigger a call worked out for each facility.
                4. The notice the lender gives and the family's options in a call written down.

                ## Notes
                This is about understanding the terms, not about whether to borrow. Agree borrowing decisions with your investment adviser.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "For each facility, the market fall that would trigger a margin call and the lender's notice period are written down."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Ask each lender for their advance rate schedule by asset type"
                - "Note concentration and currency haircuts on the family's holdings"
                - "Work out the market fall that triggers a call on each facility"
                - "Write down the notice period and options in a margin call"
            - name: Redemption terms, gates and lock-ups in pooled funds
              description: |-
                ## Purpose
                Hedge funds, property funds and evergreen private funds often look liquid on a report but can only be redeemed quarterly with long notice, and can gate or suspend redemptions in stressed markets. Reading the terms of each fund the family holds shows how much could really come back, and how fast.

                ## Milestones
                1. Each pooled fund's dealing frequency, notice period and lock-up recorded.
                2. Gate, suspension and side pocket provisions noted for each fund.
                3. The realistic time to cash for each fund placed in the liquidity tiers.
                4. Funds that have gated or suspended in the past flagged.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Dealing terms, notice periods, gates and lock-ups are recorded for every pooled fund, and each is placed in the right liquidity tier."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "List every pooled fund the family holds outside private equity"
                - "Find the dealing, notice and lock-up terms in each offering document"
                - "Note any gate or suspension provisions"
                - "Move each fund to the liquidity tier its terms support"
            - name: Questions for the tax adviser before raising cash
              description: |-
                ## Purpose
                The quickest asset to sell is often the one with the largest gain, and the cash actually received after tax can be far less than the headline price. Working through a standard set of questions with the tax adviser before any sale or distribution shows the after-tax cash and the timing of the tax bill.

                ## Milestones
                1. A list of questions prepared: gain on sale, timing of the tax, withholding on distributions and cross-border effects.
                2. The questions asked for the family's three most likely sources of cash.
                3. After-tax cash estimated for each source.
                4. The tax payment from any sale added to the tax calendar.

                ## Notes
                Tax treatment depends on the owner, the asset and the countries involved. The point is to ask early, not to decide alone.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "After-tax cash and tax timing are recorded for the family's three most likely sources of cash, as advised by the tax adviser."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Write the questions to ask before any sale or distribution"
                - "Pick the three most likely sources of cash in the next year"
                - "Ask the tax adviser to estimate after-tax cash for each"
                - "Add any resulting tax payments to the tax calendar"
            - name: Matching cash to the currency of spending
              description: |-
                ## Purpose
                Spending in dollars, pounds and a Caribbean currency while holding the reserve in only one of them means taking a currency risk with every bill. Mapping spending by currency against cash by currency shows where a fall in one exchange rate would leave a real shortfall.

                ## Milestones
                1. Twelve months of outflows grouped by currency.
                2. Cash and near-cash holdings grouped by currency.
                3. Gaps between spending currency and holding currency calculated.
                4. Options for closing material gaps discussed with the investment adviser and bank.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A table compares twelve months of spending by currency with cash held by currency, with each material gap discussed with the adviser."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Group the twelve-month outflows by currency"
                - "Group cash and near-cash holdings by currency"
                - "Calculate the gap for each currency"
                - "Discuss material gaps with the investment adviser"
            - name: Lessons from family liquidity crises
              description: |-
                ## Purpose
                Families have lost businesses and homes not because they were poor but because cash ran out at the wrong time: a margin call, an estate tax bill, a fund call during a downturn. Reading a handful of well-documented cases and noting what failed gives the family a list of traps to check its own plan against.

                ## Milestones
                1. Four or five documented cases gathered from books, articles or adviser briefings.
                2. The cause of each crisis summarised in two sentences.
                3. Each lesson checked against the family's own plan.
                4. Gaps found added as actions in the quarterly review.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A note summarises at least four liquidity crisis cases and lists which of their lessons apply to the family, with actions logged."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Ask the investment adviser for documented family liquidity crisis cases"
                - "Summarise the cause of each case in two sentences"
                - "Check each lesson against the family's own plan"
                - "Add any gaps as actions for the next liquidity review"
            - name: Choosing where the liquidity reserve is held
              description: |-
                ## Purpose
                Once the reserve amount is agreed, the family still has to decide which kinds of instrument and which institutions hold it, balancing access, credit risk and return. Comparing the options with the investment adviser against the same criteria gives a reasoned answer rather than leaving the reserve wherever it happened to land.

                ## Milestones
                1. Criteria agreed: same-day access, counterparty strength, deposit protection, currency and return.
                2. The categories the adviser suggests, such as bank deposits, money market funds and short government bills, scored against the criteria.
                3. A limit set on how much of the reserve sits with any one institution.
                4. The decision and its reasons recorded and signed by the principal.

                ## Notes
                Start from the **Purchase decision** template to score the options. This compares categories with your adviser; it is not a recommendation of any product.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A signed decision records where the reserve is held, the scoring behind it and a per-institution limit."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Agree the criteria for holding the reserve with the principal"
                - "Ask the investment adviser which categories to compare"
                - "Score each category against the criteria"
                - "Record the decision and the per-institution limit"
            - name: Standby credit facility decision
              description: |-
                ## Purpose
                Arranged in calm times, a committed credit line can bridge a capital call or a tax bill without selling assets at a bad moment, but it carries fees, covenants and the risk of being used as spending money. Deciding deliberately whether the family needs one, and on what terms, beats arranging one in a hurry.

                ## Milestones
                1. The purposes a facility would serve, and those it must not, written down.
                2. Indicative terms from two or three lenders compared on cost, collateral, covenants and commitment.
                3. The effect on liquidity in a falling market considered.
                4. A decision to proceed or not recorded with the reasons.

                ## Notes
                Write the permitted uses into the reserve policy if the facility goes ahead. Lines drawn for lifestyle spending are rarely repaid on time.
              priority: medium
              deadlineOffsetDays: 120
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A written decision on a standby facility, with lender terms compared and permitted uses defined, is approved by the principal."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Write down what a standby facility would and would not be used for"
                - "Request indicative terms from two or three lenders"
                - "Compare cost, collateral, covenants and commitment side by side"
                - "Record the decision and add permitted uses to the reserve policy"
            - name: Commitment pacing plan for new private fund commitments
              description: |-
                ## Purpose
                Families often commit to new funds one opportunity at a time and only later find that the combined calls exceed what the reserve can carry. A pacing plan that caps new commitments each year, based on expected calls and distributions, keeps the private portfolio from outgrowing the family's cash.

                ## Milestones
                1. Expected calls and distributions from existing funds projected for five years by the investment adviser.
                2. A yearly cap on new commitments agreed, linked to the reserve and lifestyle needs.
                3. The cap written into the investment committee's checklist for new commitments.
                4. The plan refreshed each year with the latest fund statements.

                ## Notes
                Projections of calls and distributions are estimates and can be badly wrong in a downturn, when calls continue and distributions stop. Build the cap on the cautious case.
              priority: medium
              deadlineOffsetDays: 120
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A yearly cap on new fund commitments is agreed, based on a five-year projection, and included in the commitment checklist."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Ask the investment adviser for a five-year call and distribution projection"
                - "Propose a yearly commitment cap linked to the reserve"
                - "Add the cap to the checklist used for new commitments"
                - "Refresh the pacing plan with the latest fund statements @recurring(yearly)"
            - name: Deciding which asset to sell to raise cash
              description: |-
                ## Purpose
                When the family needs a large sum, the choice of what to sell decides how much tax is paid, which goals are disturbed and whether a family company's control changes. A structured comparison of candidate assets against the same factors, done with advisers, avoids selling the easiest thing rather than the right one.

                ## Milestones
                1. Candidate assets listed with liquidity tier, likely price range and costs of sale.
                2. After-tax proceeds estimated with the tax adviser for each.
                3. Effects on family control, income and long-term goals noted.
                4. A chosen asset and timetable agreed and recorded.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A recorded decision on which asset to sell, comparing at least three candidates on after-tax proceeds, timing and family effects."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Name the amount and date the cash is needed by"
                - "List at least three candidate assets with their liquidity tier"
                - "Ask the tax adviser for after-tax proceeds on each candidate"
                - "Record the chosen asset and the sale timetable"
            - name: Secondary sale of a fund interest as a liquidity option
              description: |-
                ## Purpose
                Selling a private fund interest on the secondary market can release cash and remove future calls, usually at a discount to reported value and with the fund manager's consent. Knowing how the process works before it is needed lets the family judge whether it is a sensible last resort or an expensive mistake.

                ## Milestones
                1. The transfer provisions in each fund's documents summarised.
                2. The usual process, timing and parties in a secondary sale explained by the investment adviser.
                3. The range of discounts recently seen for similar funds noted from adviser input.
                4. A view recorded on which fund interests could be candidates if needed.

                ## Notes
                Secondary pricing moves with markets and fund quality. Treat any discount you hear about as indicative only.
              priority: low
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A note summarises transfer provisions, the secondary sale process and candidate fund interests, reviewed with the investment adviser."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Summarise the transfer clause in each fund's documents"
                - "Ask the investment adviser to explain the secondary sale process"
                - "Note which fund interests could be sold if cash were needed"
                - "File the note with the liquidity plan"
            - name: Distribution policy for family members
              description: |-
                ## Purpose
                Ad hoc payments to children and grandchildren breed resentment between branches and make the outflow impossible to plan. Choosing between a fixed allowance, a formula linked to family income, or a needs-based approach, and writing it down, gives members certainty and the liquidity plan a predictable line.

                ## Milestones
                1. The current pattern of payments to each member summarised for three years.
                2. Fixed, formula and needs-based approaches compared for fairness, predictability and cost.
                3. A draft policy written covering eligibility, amounts, timing and exceptions.
                4. The draft discussed with branch heads and, where trusts pay, the trustees.
                5. The policy adopted and the first payments made under it.

                ## Notes
                Where trusts pay distributions, the policy can only express the family's wishes. The trustees still decide.
              priority: medium
              deadlineOffsetDays: 180
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A written distribution policy covering eligibility, amounts, timing and exceptions is adopted and the first payments follow it."
                cadence: phased
                effort_hours_estimate: "12"
              tasks:
                - "Summarise three years of payments to each family member"
                - "Compare fixed, formula and needs-based approaches on one page"
                - "Ask the agent to draft a distribution policy from the chosen approach"
                - "Discuss the draft with branch heads and any paying trustees"
            - name: Cash plan for a planned major purchase
              description: |-
                ## Purpose
                New homes, renovations and aircraft deposits can take a large slice of liquid wealth in one go, and the funding source is often decided at the last minute. Planning the payment schedule and the source of each instalment months ahead protects the reserve and gives time to sell assets or arrange borrowing on good terms.

                ## Milestones
                1. The total cost and payment schedule set out, including deposits, stages and taxes on purchase.
                2. A funding source agreed for each payment.
                3. The effect on the reserve and the twelve-month schedule checked.
                4. Any sale or borrowing needed started in time for the first payment.

                ## Notes
                Start from the **Purchase decision** template if the purchase itself is still being chosen. Add running costs to the household baseline once it is bought.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A payment schedule for the purchase names a funding source for each instalment and shows the reserve stays above its floor."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Write the purchase payment schedule with every deposit and stage"
                - "Agree a funding source for each payment"
                - "Check the reserve against the schedule after each payment"
                - "Start any asset sale or borrowing needed for the first payment"
            - name: Liquidity plan for proceeds from a business sale
              description: |-
                ## Purpose
                A family business sale turns concentrated, illiquid wealth into a large cash sum, often with escrow holdbacks, earn-outs and a large tax bill months later. Planning before completion where the proceeds land, what is set aside for tax and what is kept liquid avoids decisions made in the euphoria of the deal.

                ## Milestones
                1. Expected proceeds, timing, escrow and earn-out amounts set out from the deal terms.
                2. The tax due on the sale and its payment date estimated by the tax adviser.
                3. A plan for where proceeds land, with the tax amount kept separate and untouched.
                4. A cooling-off period agreed before any large new commitment.
                5. The plan approved by the principal before completion.

                ## Notes
                Escrow and earn-out amounts may never be paid. Plan as if they will not arrive, and treat them as a bonus if they do.
              priority: high
              deadlineOffsetDays: 90
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "Before completion, a signed plan shows where proceeds land, the tax set aside and a cooling-off period before new commitments."
                cadence: one-shot
                effort_hours_estimate: "10"
              tasks:
                - "Summarise proceeds, escrow and earn-out terms from the deal documents"
                - "Ask the tax adviser for the tax due and its payment date"
                - "Choose a separate account for the tax amount"
                - "Agree a cooling-off period before any new commitment"
            - name: Liquidity for estate taxes and probate delays
              description: |-
                ## Purpose
                On the death of a principal, estate or inheritance taxes may fall due before assets can be sold, while accounts in the deceased's sole name may be frozen for months during probate. Working out now how much cash the estate and the survivors would need, and where it would come from, prevents a forced sale of the family business or home.

                ## Milestones
                1. The estate planning lawyer asked for an estimate of taxes and costs on each principal's death.
                2. Accounts and assets that would be frozen during probate identified.
                3. Cash available to the survivors outside the estate, such as joint accounts or insurance, listed.
                4. Any gap between needs and available cash recorded with options discussed with advisers.

                ## Notes
                Rules on estate tax, joint accounts and probate differ by country and change. Rely on the estate lawyer's estimate, not general rules.
              priority: high
              deadlineOffsetDays: 120
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "An estimate of cash needed on each principal's death, sources available outside the estate and any gap is recorded with the lawyer's input."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Ask the estate lawyer for an estimate of taxes and costs on death"
                - "List accounts that would be frozen during probate"
                - "List cash the survivors could reach outside the estate"
                - "Discuss any funding gap with the estate lawyer and investment adviser"
            - name: Preparing for the year-end tax payment peak
              description: |-
                ## Purpose
                In many families the largest tax payments cluster around one or two dates a year, often alongside year-end bonuses to staff and annual insurance premiums. Starting preparation two months ahead, with amounts confirmed and cash moved in stages, avoids selling assets in a hurry in a bad market week.

                ## Milestones
                1. The peak payments and their dates confirmed with each adviser two months ahead.
                2. Sources of funds identified and any sales started in good time.
                3. Cash moved to paying accounts in stages over the final month.
                4. Every payment made on time with confirmations filed.
              priority: medium
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "All peak-period tax and annual payments are confirmed two months ahead and paid on time without an unplanned asset sale."
                cadence: cyclic
              tasks:
                - "Confirm peak payments with each adviser two months ahead @recurring(yearly)"
                - "Identify the funding source for each peak payment"
                - "Move cash to paying accounts in stages in the final month"
                - "File the payment confirmations after the peak"
            - name: Annual liquidity presentation to the family council
              description: |-
                ## Purpose
                Branches that never see the liquidity picture tend to assume there is always more cash than there is, and requests follow. A short, clear presentation to the family council each year on the reserve, the commitments ahead and the distribution outlook builds shared understanding without disclosing more than the council needs.

                ## Milestones
                1. A presentation of no more than ten slides agreed with the principal.
                2. The reserve, commitments, distribution outlook and main risks covered in plain language.
                3. Questions from council members collected and answered in writing.
                4. The presentation delivered at the council's annual meeting.

                ## Notes
                Start from the **Board meeting** template to prepare papers and capture decisions. Agree with the principal beforehand what level of detail each branch may see.
              priority: medium
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A liquidity presentation is delivered at the council's annual meeting, with members' questions answered in writing within a month."
                cadence: cyclic
              tasks:
                - "Agree with the principal what detail the council may see"
                - "Draft a ten-slide liquidity presentation in plain language"
                - "Book the presentation slot with the council chair @recurring(yearly)"
                - "Answer council members' questions in writing after the meeting"
            - name: Emergency cash access after a hurricane or disaster
              description: |-
                ## Purpose
                After a hurricane, earthquake or flood, banks and card systems can be down for days while the family needs cash for repairs, staff wages and evacuation. A plan for reaching money when local systems fail, with funds in more than one place and documents ready, is part of liquidity planning for any family with Caribbean homes.

                ## Milestones
                1. An agreed amount of emergency cash and its storage arrangements decided for each exposed home.
                2. Access to accounts at a bank outside the affected territory confirmed.
                3. Key staff told how wages will be paid if local banking is down.
                4. Contact details and authorisation steps for urgent transfers stored offline.
                5. The plan reviewed before the start of each hurricane season.
              priority: medium
              frontmatter:
                mode: event
                output_kind: artifact
                success_criteria: "Each exposed home has a written emergency cash plan, with an outside bank confirmed and offline contacts stored, reviewed before hurricane season."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Decide an emergency cash amount for each exposed home"
                - "Confirm access to an account at a bank outside the territory"
                - "Store bank contacts and transfer steps offline"
                - "Tell key staff how wages would be paid in a banking outage"
            - name: Retiree principal's income and drawdown plan
              description: |-
                ## Purpose
                A retired principal who no longer draws a salary from the family business needs a steady, predictable income from investments, pensions and distributions without eating into the reserve. A drawdown plan that sets a monthly amount, its sources and a yearly review keeps lifestyle secure and makes the rest of the family's planning easier.

                ## Milestones
                1. The principal's monthly spending need agreed from the household baseline.
                2. Income sources such as pensions, dividends and distributions listed with timing.
                3. A monthly transfer amount and source account set up.
                4. The sustainable drawdown level reviewed with the investment adviser.
                5. A yearly review date agreed.

                ## Notes
                How much can be drawn sustainably depends on the whole portfolio and on life expectancy. Agree the level with the investment adviser and revisit it after any large market move.
              priority: high
              deadlineOffsetDays: 60
              frontmatter:
                mode: building
                output_kind: habit
                success_criteria: "A monthly income amount for the retiree principal, with named sources and an adviser-reviewed drawdown level, is paid every month."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Agree the principal's monthly spending need from the baseline"
                - "List pensions, dividends and distributions with their timing"
                - "Set up a standing monthly transfer to the principal's account"
                - "Check the drawdown against actual spending @recurring(monthly:28)"
            - name: Funding children's education and first homes
              description: |-
                ## Purpose
                Parents in wealthy families often face several large gifts or loans to children in the same few years: overseas university fees, a first flat, help with a wedding. Setting out the likely timing and amounts for each child, and deciding which pot pays, avoids one child's needs crowding out another's or the reserve.

                ## Milestones
                1. Expected education costs for each child listed by year and currency.
                2. Likely help with first homes or weddings estimated with timing.
                3. The paying source for each, such as an education trust or the parents directly, agreed.
                4. The amounts added to the three-year liquidity view.
                5. Fairness across children discussed and recorded.

                ## Notes
                Where a gift could be a loan through the family bank instead, record which it is now. Changing the label later causes arguments.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A schedule of education and housing help for each child, with sources and timing, is added to the three-year liquidity view."
                cadence: phased
                effort_hours_estimate: "5"
              tasks:
                - "List expected education costs for each child by year"
                - "Estimate likely help with first homes or weddings"
                - "Agree which source pays for each item"
                - "Add the schedule to the three-year liquidity view"
            - name: Cash access if a principal loses capacity
              description: |-
                ## Purpose
                If the person who controls the family's accounts has a stroke or develops dementia, bills, staff wages and fund calls still fall due while banks may refuse to act on anyone else's instructions. Putting powers of attorney, second signatories and written instructions in place while the principal is well keeps the money moving.

                ## Milestones
                1. Lasting or enduring powers of attorney, or the local equivalent, in place for each principal with a lawyer's help.
                2. Each bank's acceptance of the documents confirmed in writing.
                3. A written note of standing payments and who takes over each.
                4. The family members who would act told what is expected of them.

                ## Notes
                The documents and rules vary by country, and some banks need registration of the power before using it. Ask the family lawyer what applies in each jurisdiction where accounts sit.
              priority: high
              deadlineOffsetDays: 120
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Each principal has a power of attorney accepted in writing by every bank holding family cash, and a standing payments note exists."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Ask the family lawyer which capacity documents each principal needs"
                - "Confirm with each bank that it will accept the documents"
                - "Write a note of standing payments and who takes over each"
                - "Brief the family members who would act"
            - name: First-year cash plan for a widowed spouse
              description: |-
                ## Purpose
                Surviving spouses who did not handle the money can face frozen accounts, unfamiliar advisers and pressure to make large decisions within weeks of a death. A simple first-year plan that secures monthly income, defers big choices and lists what is due when gives them breathing space at the hardest time.

                ## Milestones
                1. Monthly spending and the accounts that will pay it identified in the first weeks.
                2. Payments due in the first year, including taxes and estate costs, listed with dates.
                3. A rule agreed that no large irreversible decision is made in the first six months unless unavoidable.
                4. A named person in the office or family assigned to support the spouse.
                5. A review at six and twelve months held with the advisers.

                ## Notes
                Prepare this plan in outline while both spouses are alive, so the survivor already recognises it. Keep the tone practical and gentle.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "An outline first-year cash plan for a surviving spouse exists, naming income sources, dated payments, a support person and review points."
                cadence: phased
                effort_hours_estimate: "5"
              tasks:
                - "Outline the monthly income a surviving spouse would need"
                - "List payments that would fall due in the first year after a death"
                - "Name the person who would support the surviving spouse"
                - "Walk both spouses through the outline plan"
            - name: Handling an urgent cash request from a member in difficulty
              description: |-
                ## Purpose
                Sooner or later a family member faces divorce, job loss, illness or debt and asks for money quickly. A fair, discreet process for urgent requests, with who decides, what information is needed and how the payment is recorded, protects both the member and the plan from decisions made under emotional pressure.

                ## Milestones
                1. A short written process for urgent requests agreed with the principal.
                2. Decision makers and approval limits named.
                3. Information to request set out, such as the amount, purpose and timeline.
                4. Each request recorded as a gift, loan or distribution with the reason.

                ## Notes
                Treat these requests in confidence. Where the help becomes a loan, record it through the family bank's terms rather than inventing new ones.
              priority: medium
              frontmatter:
                mode: service
                output_kind: artifact
                success_criteria: "A written urgent request process exists, and every urgent payment is recorded as a gift, loan or distribution with its approval."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Draft a one-page process for urgent cash requests"
                - "Name the decision makers and their approval limits"
                - "List the information to ask a member for"
                - "Set up a confidential register of urgent payments"
            - name: Family liquidity stress test across three scenarios
              description: |-
                ## Purpose
                Plans that work in a normal year may fail in a bad one, when markets fall, distributions stop, capital calls continue and a family company cuts its dividend at the same time. Running three scenarios through the needs schedule shows how long the reserve lasts and which actions would be taken, before anyone needs them.

                ## Milestones
                1. Three scenarios defined with the investment adviser: a market fall, a business downturn and a combined severe case.
                2. Each scenario applied to inflows, outflows, collateral values and calls for two years.
                3. The month the reserve would breach its floor found for each scenario.
                4. Responses ranked in order, such as drawing the facility, pausing commitments or selling a named asset.
                5. Results and responses presented at the quarterly review.

                ## Notes
                Scenarios are illustrations, not forecasts. Their value is in agreeing the response list in advance.
              priority: medium
              deadlineOffsetDays: 150
              frontmatter:
                mode: research
                output_kind: deliverable
                success_criteria: "A stress test report shows for three scenarios when the reserve would breach its floor and the ranked responses agreed with the principal."
                cadence: phased
                effort_hours_estimate: "14"
              tasks:
                - "Define three stress scenarios with the investment adviser"
                - "Apply each scenario to two years of the needs schedule"
                - "Find the month the reserve breaches its floor in each case"
                - "Rank the responses the family would take in order"
            - name: Contingent liabilities register
              description: |-
                ## Purpose
                Guarantees on a relative's mortgage, indemnities given on a business sale, uncalled share capital and live lawsuits do not appear on any statement, yet each could demand cash. A register of every contingent obligation with its maximum amount and likelihood brings hidden calls on liquidity into the plan.

                ## Milestones
                1. Every guarantee, indemnity, warranty claim period and legal claim listed with the obligor.
                2. Maximum exposure and expiry date recorded for each.
                3. A likelihood rating agreed with the relevant lawyer or adviser.
                4. High-rated items included in the stress test.
                5. The register reviewed every quarter.

                ## Notes
                Start from the **Risk register** template to record each item, its rating and its owner.
              priority: medium
              frontmatter:
                mode: research
                output_kind: artifact
                success_criteria: "A contingent liabilities register lists every obligation with maximum exposure, expiry and likelihood, reviewed each quarter."
                cadence: rolling
              tasks:
                - "Ask the family lawyer for every guarantee and indemnity on file"
                - "Record maximum exposure and expiry for each obligation"
                - "Rate each item's likelihood with the relevant adviser"
                - "Review the register and update expiring items @recurring(quarterly)"
            - name: Multi-currency liquidity and capital controls
              description: |-
                ## Purpose
                Families with assets in Caribbean, Latin American or other markets can find cash trapped by foreign exchange shortages, delayed conversions or limits on sending money abroad. Knowing which balances may be hard to move and keeping enough liquidity in freely convertible currencies protects the plan from a local squeeze.

                ## Milestones
                1. Cash balances in each currency and country listed from the liquidity map.
                2. Known conversion limits, delays or approval rules noted for each country with the local bank's help.
                3. Balances that could be trapped marked as unavailable in the liquidity tiers.
                4. A minimum share of the reserve agreed in freely convertible currencies.
                5. The position checked every quarter.

                ## Notes
                Local foreign exchange rules change, sometimes quickly. Confirm the current position with the local bank and adviser rather than relying on past experience.
              priority: medium
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "Cash at risk of being trapped is identified by country, and a minimum share of the reserve in convertible currencies is agreed and checked quarterly."
                cadence: rolling
              tasks:
                - "List cash balances by currency and country"
                - "Ask each local bank about current conversion limits and delays"
                - "Mark balances that could be trapped in the liquidity tiers"
                - "Check convertible currency share of the reserve @recurring(quarterly)"
            - name: Liquidity coverage ratio for the family balance sheet
              description: |-
                ## Purpose
                Experienced family offices track a single number that compares cash reachable within a month with the next twelve months of firm outflows and unfunded calls. Defining and tracking such a ratio gives the family an early, comparable signal of whether liquidity is improving or slipping year on year.

                ## Milestones
                1. The ratio defined in writing: numerator, denominator and which tiers count.
                2. A comfort range agreed with the investment adviser and principal.
                3. The ratio calculated for the last four quarters as a baseline.
                4. The ratio added to the quarterly liquidity review and the cash position report.

                ## Notes
                Banks use similar ratios with defined rules, but a family's version is its own. What matters is calculating it the same way every time.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A written definition of the family liquidity ratio exists, with four quarters of history and a comfort range reported at each review."
                cadence: rolling
              tasks:
                - "Write the definition of the family liquidity ratio"
                - "Agree a comfort range with the investment adviser"
                - "Calculate the ratio for the last four quarters"
                - "Calculate and report the ratio before each review @recurring(quarterly)"
            - name: Liquidity across a multi-generation family structure
              description: |-
                ## Purpose
                As a family grows into many branches, each with its own trusts, homes and needs, a single plan run by one office becomes harder to keep fair and accurate. Designing how each branch's liquidity is planned, which pools are shared and how the office rolls them up keeps the system working as the family reaches its third and fourth generations.

                ## Milestones
                1. Shared pools, such as the common reserve and joint commitments, separated from branch-level cash.
                2. A short planning template agreed for each branch to complete each year.
                3. Rules written for how shared shortfalls and surpluses are split between branches.
                4. The roll-up of branch plans into the family plan tested for one year.

                ## Notes
                Rules for splitting shared costs and shortfalls should match the family constitution and ownership rules. Raise any conflict with the family council rather than resolving it in the plan.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Each branch completes a yearly liquidity plan on a common template, rolled up into the family plan with written rules for shared pools."
                cadence: phased
                effort_hours_estimate: "16"
              tasks:
                - "Separate shared pools from branch-level cash on the liquidity map"
                - "Draft a one-page liquidity template for each branch"
                - "Write rules for splitting shared shortfalls and surpluses"
                - "Test the roll-up with each branch's first completed template"
---

# Family Liquidity Planning

This area is for the parent or retiree at the head of a wealthy family, and for whoever runs the money for them, who has watched a family rich on paper scramble for cash when a tax bill, a capital call and a member's house purchase landed in the same month. It starts with foundations (a liquidity map, a twelve-month needs schedule, tax and capital call calendars, liquidity tiers and a reserve policy), moves into the operating routines of a rolling forecast, a monthly cash position, distribution runs and the yearly plan, then the skills of reading fund statements, credit terms and redemption rules, decisions about where the reserve sits and how to raise cash, dated events such as a business sale or a death in the family, situations for retirees, widowed spouses and members in difficulty, and specialist work on stress tests, contingent liabilities and currencies.

What repeats is a weekly forecast update, monthly cash position, receipts and distribution runs, a quarterly liquidity review with tax and credit checks, and a yearly liquidity plan and family presentation. The Monthly budget and bills, Metrics log, Purchase decision, Board meeting and Risk register templates pair with the spending baseline, the cash position report, a major purchase, the family council presentation and the contingent liabilities register. None of this is investment, tax or lending advice: agree reserve levels, asset sales and borrowing with the family's investment adviser, tax adviser and bankers. Installing adds all 50 projects as active, so archive the ones that are not for you yet.
