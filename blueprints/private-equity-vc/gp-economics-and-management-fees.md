---
id: private-equity-vc.gp-economics-and-management-fees
name: GP Economics and Management Fees
description: "A fee income schedule, a management company budget and breakeven, a funded GP commitment, monthly cash and cost reviews, and an economics plan that carries a manager from Fund I to Fund III."
category: business
version: 1.0.0
tags: [private-equity-vc, gp-economics-and-management-fees, founder, management-company, management-fees, gp-commitment, fund-budgeting, emerging-manager]
author: Aurum Technology
starter_structure:
  templates:
    - month-end-close
    - vendor
    - purchase-decision
    - risk-register
    - monthly-budget-bills
  pillars:
    - name: Private Equity & Venture Capital
      emoji: "💹"
      description: "Private markets from the investor's side: sourcing and screening deals, LBO models, investment committee memos, due diligence, value creation and exits, raising and running your own fund, search funds and independent sponsors, venture deal flow and board seats, and careers in both, for people building their own track record."
      pillarFrontmatter:
        review_cadence: monthly
      areas:
        - name: GP Economics and Management Fees
          description: "Running the management company: the fee budget, team costs, the GP commitment and how to fund it, and planning economics across successive funds."
          projects:
            - name: Management company and GP entity map
              description: |-
                ## Purpose
                Most first-time managers have at least three entities in play: the fund, the general partner that controls it and takes carry, and the management company that receives fees and employs the team. A one-page map of who owns each entity, which one signs which contract and where each cash flow lands stops fees, costs and GP capital ending up in the wrong bank account.

                ## Milestones
                1. A diagram showing the fund, the GP entity, the management company and any carry vehicle, with owners and percentages.
                2. Each recurring cash flow (fees, expenses, GP commitment, carry) drawn as an arrow between the right entities.
                3. The signatory and bank account for each entity listed underneath.
                4. The map checked by fund counsel or your accountant and dated.

                ## Notes
                Keep the map with the formation documents and update it whenever an entity is added. Structuring choices themselves belong to fund counsel and your tax adviser; this project records what was set up.
              priority: high
              deadlineOffsetDays: 14
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A dated one-page entity map shows every manager entity, its owners, signatories, bank account and the cash flows between them, reviewed by counsel or the accountant."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Sketch the fund, GP and management company boxes with their owners"
                - "Draw each fee, expense, commitment and carry flow between the entities"
                - "List the signatories and bank account for every entity"
                - "Send the map to fund counsel or your accountant for a check"
            - name: Fee income schedule from the signed LPA
              description: |-
                ## Purpose
                Fee income is the only revenue the management company can count on for a decade, and it is set by a handful of clauses: the rate, the fee base, the step-down date, offsets and any discounts for early or large LPs. Turning those clauses into a year-by-year schedule for the life of the fund gives every budget, hire and draw a real ceiling instead of a hopeful one.

                ## Milestones
                1. The fee rate, fee base, step-down trigger, offset percentage and LP discounts copied from the LPA and side letters into one sheet.
                2. Annual gross fee income projected for every year of the fund term, including any extension years.
                3. Fee discounts and offsets deducted to show expected net fee income.
                4. The schedule checked against the fund administrator's fee calculation for the first period.

                ## Notes
                Use the documents as signed, not the term sheet you pitched. Side letters with fee breaks for anchor LPs are the usual reason the real number comes in below the model.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A schedule shows gross and net management fee income for every year of the fund term, built from the signed LPA and side letters and agreed with the administrator."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Copy the fee rate, base and step-down clauses from the signed LPA"
                - "List every side letter fee discount with the LP and its commitment"
                - "Project gross fee income for each year of the fund term"
                - "Ask the administrator for their first-period fee calculation to compare"
            - name: Fixed and variable cost inventory for the manager
              description: |-
                ## Purpose
                The cost base of a small manager hides in card statements, annual renewals and things a former employer used to provide: data subscriptions, the compliance consultant, audit fees, travel to LP meetings. Listing every cost once, with its frequency and whether it is fixed or tied to deal activity, is the raw material for the budget and for any honest breakeven.

                ## Milestones
                1. Twelve months of bank and card statements reviewed for every recurring cost.
                2. Each cost tagged as people, premises, systems, professional fees, travel or other.
                3. Each line marked fixed or variable, with its annual amount.
                4. Costs that might belong to the fund rather than the manager flagged for the allocation policy.
              priority: medium
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A cost inventory lists every manager cost with category, fixed or variable flag and annual amount, with possible fund expenses flagged."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Export the last twelve months of bank and card transactions"
                - "Group each recurring cost into one of six categories"
                - "Mark every line as fixed or variable with its annual cost"
                - "Flag costs that could be charged to the fund under the LPA"
            - name: First-year management company budget
              description: |-
                ## Purpose
                A first-year budget is where the fee schedule meets the cost inventory, and it is usually the first time a founder sees how little a small fund pays for. Building it month by month, with salaries, rent, systems and professional fees against expected fee receipts, shows whether the plan works before contracts are signed and people are hired.

                ## Milestones
                1. Monthly fee receipts entered from the fee schedule, on the dates the LPA bills them.
                2. Every cost from the inventory phased into the month it is paid.
                3. A monthly and cumulative surplus or shortfall line.
                4. Budget assumptions written on a single page the partners have read and agreed.

                ## Notes
                Fees are often billed quarterly or semi-annually in advance, while salaries go out monthly. Budget on the cash timing, not the annual total.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A month-by-month first-year budget shows fee receipts, every cost and the cumulative cash position, with written assumptions signed off by the partners."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Enter fee receipts by month using the LPA billing dates"
                - "Phase each cost from the inventory into its payment month"
                - "Add a cumulative cash line and highlight the lowest month"
                - "Write a one-page assumptions note and circulate it to the partners"
            - name: Breakeven fund size for the management company
              description: |-
                ## Purpose
                Every manager should know the fund size at which fee income covers the cost base it plans to carry, because that number shapes the hard cap you aim for, the team you can promise and how long you can keep raising. A breakeven calculation run at three cost levels turns an argument about ambition into a figure the partners can see.

                ## Milestones
                1. Annual run-rate costs set out for a lean, planned and full team.
                2. Net fee income per million committed calculated from the fee terms.
                3. Breakeven commitments calculated for each cost level.
                4. The breakeven figures compared with the current target size and first close.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A breakeven note gives the fund size needed to cover lean, planned and full cost bases, compared with the target and first close sizes."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Set out annual costs for a lean, planned and full team"
                - "Calculate net fee income for each million of commitments"
                - "Divide each cost level by that figure to get breakeven size"
                - "Record the gap between breakeven and the first close size"
            - name: Founder runway before the first fee arrives
              description: |-
                ## Purpose
                Between leaving a salaried job and the first close, founders pay for legal formation, travel, a data room and sometimes a placement agent with no fee income at all, and fundraises routinely run months longer than planned. A runway plan that names who funds the pre-close period and how many months it lasts lets you decide calmly rather than under pressure from an anchor LP.

                ## Milestones
                1. Pre-close costs estimated month by month, including formation legal fees.
                2. Sources of pre-close funding listed: founder savings, partner contributions, a loan or reimbursement at first close.
                3. Runway in months calculated at the planned and a slower fundraising pace.
                4. A trigger point agreed at which the partners cut costs or rethink the raise.

                ## Notes
                Many LPAs let organisational expenses be reimbursed by the fund up to a cap after first close. Check your cap with fund counsel before counting on it.
              priority: high
              deadlineOffsetDays: 14
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A runway plan gives pre-close months of funding at two fundraising speeds, names the funding sources and records an agreed cost-cut trigger."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Estimate pre-close spending month by month until a first close"
                - "List who is funding the pre-close period and how much each puts in"
                - "Calculate runway at the planned pace and six months slower"
                - "Agree the month at which costs are cut if no first close is in sight"
            - name: Fund versus manager expense allocation policy
              description: |-
                ## Purpose
                Regulators and LPs pay close attention to which costs a manager charges to the fund, and misallocated expenses are one of the most common findings in examinations. A written allocation policy that maps each cost type to the fund, the management company or a shared split, and cites the LPA clause behind it, protects the fee relationship and makes every invoice easy to code.

                ## Milestones
                1. Each LPA clause on fund expenses, organisational costs and manager costs quoted in one document.
                2. Every cost type from the inventory assigned to fund, manager or a stated split method.
                3. A rule for broken-deal costs and shared costs across co-investors written down.
                4. The policy reviewed by fund counsel or the compliance adviser and adopted by the partners.

                ## Notes
                Where the LPA is silent, treat the cost as a manager expense until counsel says otherwise. Allocation errors are cheaper to prevent than to refund with interest.
              priority: high
              deadlineOffsetDays: 45
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "An adopted written policy assigns every cost type to fund, manager or a stated split, cites the LPA clause and records counsel's review."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Quote every LPA clause on fund and manager expenses in one document"
                - "Assign each cost type to fund, manager or a split method"
                - "Write the rule for broken-deal and co-investor shared costs"
                - "Book a review of the draft policy with fund counsel"
            - name: Management company banking and approval limits
              description: |-
                ## Purpose
                Two-partner managers can drift into one person paying everything from a personal card, which makes the audit painful and invites disputes later. Opening the right accounts, setting payment approval limits and agreeing who can sign what puts simple controls around the fee money from the first day.

                ## Milestones
                1. Separate operating accounts open for the management company and the GP entity.
                2. A payment approval matrix agreed, with a limit above which two partners sign.
                3. Company cards issued with monthly limits and a receipt rule.
                4. The approval matrix written into the partners' records and shared with the bookkeeper.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "The manager and GP each have their own bank accounts, and a written approval matrix with dual-signature limits is in use by the bookkeeper."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Confirm the management company and GP each have their own account"
                - "Agree the payment amount above which two partners must approve"
                - "Set monthly limits and a receipt rule for company cards"
                - "Review signatories and approval limits each year @recurring(yearly)"
            - name: GP commitment size and source decision
              description: |-
                ## Purpose
                LPs expect the GP to invest its own money in the fund, often a percentage of commitments, and they will ask both how much and where it comes from. Deciding the amount, how it splits between partners and whether any of it comes from fee waivers or borrowing, and writing that decision down, gives a consistent answer for every LP meeting and the PPM.

                ## Milestones
                1. The GP commitment expected by target LPs noted from conversations and the LPA draft.
                2. A total commitment amount chosen and split between partners.
                3. The source of each partner's share recorded: cash, borrowing or fee waiver.
                4. The decision approved by all partners and passed to fund counsel for the documents.

                ## Notes
                The size of the commitment is a market and negotiation question covered elsewhere. This project is about what you can actually fund and how you will explain it.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A signed partner decision records the total GP commitment, each partner's share and the source of funds for each share."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Note what each target LP has said about GP commitment size"
                - "Propose a total amount and a split between the partners"
                - "Record whether each share comes from cash, borrowing or a fee waiver"
                - "Send the agreed decision to fund counsel for the fund documents"
            - name: Personal balance sheet check before committing GP capital
              description: |-
                ## Purpose
                Your share of the GP commitment is drawn over five years or more, cannot be cancelled and sits alongside a reduced salary and a mortgage. Laying out each partner's own assets, liabilities and expected calls before signing shows whether the commitment is affordable without forced sales of other assets or strain at home.

                ## Milestones
                1. Each partner's liquid assets, illiquid assets and liabilities listed privately.
                2. That partner's GP commitment phased into a call schedule over the investment period.
                3. Personal cash flow checked against the call schedule in a slow year.
                4. Any shortfall raised with a financial planner or lender before the commitment is signed.

                ## Notes
                Keep each partner's figures private to that partner; the partnership only needs to know the commitment is covered. This is a personal planning exercise, not financial advice.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "Each partner has a private note showing their GP commitment call schedule covered by named personal sources in a slow year."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "List your liquid assets, illiquid assets and debts"
                - "Phase your share of the GP commitment over the investment period"
                - "Test whether your household cash flow covers calls in a lean year"
                - "Book a meeting with a financial planner if there is a shortfall"
            - name: How management fees are calculated and stepped down
              description: |-
                ## Purpose
                Founders who negotiated the headline fee rate are often vague on the mechanics: fees on committed capital during the investment period, on invested or net invested capital afterwards, what counts as a realisation and how write-downs change the base. Working through those mechanics on worked examples makes you fluent when an LP, the administrator or a new partner asks how the number was reached.

                ## Milestones
                1. The difference between committed, invested and net invested capital fee bases written in your own words.
                2. Three worked examples calculated: investment period, post step-down and after a partial exit.
                3. The effect of a write-down and a write-off on the fee base shown in one example.
                4. A one-page explainer saved for new team members.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A one-page explainer with three worked examples shows how your fund's fee base moves before and after the step-down and after an exit."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Write a definition of each fee base used in private funds"
                - "Calculate the fee on a sample fund during the investment period"
                - "Recalculate it after the step-down and after a partial exit"
                - "Show how a write-down changes the fee base in one example"
            - name: Reading the fee and expense clauses of your LPA
              description: |-
                ## Purpose
                The LPA is long, and the parts that decide your management company's income are scattered across definitions, the fee section, the expense section and side letters. Reading those clauses closely once, with a list of questions for counsel, means you understand the document you operate under rather than the summary from the fundraise.

                ## Milestones
                1. Every defined term used in the fee calculation listed with its clause number.
                2. The fee, offset, organisational expense and fund expense clauses summarised on two pages.
                3. Each side letter term that changes fees or expenses noted against the clause it modifies.
                4. Open questions answered by fund counsel in writing.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A two-page summary lists every fee and expense clause, defined term and side letter override, with counsel's written answers to open questions."
                cadence: phased
                effort_hours_estimate: "5"
              tasks:
                - "List each defined term the fee clause relies on with its clause number"
                - "Summarise the fee, offset and expense clauses on two pages"
                - "Mark where side letters override those clauses"
                - "Email your open questions to fund counsel"
            - name: Fee offsets and portfolio company fees explained
              description: |-
                ## Purpose
                Transaction, monitoring and director fees paid by portfolio companies usually reduce the management fee by an agreed share, and LPs examine how these are disclosed. Understanding how offsets work, which fees qualify and how they flow through the fee calculation prevents both underpaying LPs and leaving manager income unrecorded.

                ## Milestones
                1. The types of portfolio company fees your LPA covers listed.
                2. The offset percentage and any carry-forward of excess offsets explained with an example.
                3. Fees paid to individual partners for board seats checked against the LPA treatment.
                4. A short note on how offsets appear in the LP report agreed with the administrator.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A worked example shows how each type of portfolio company fee offsets the management fee under your LPA, including partner director fees."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "List every type of portfolio company fee the LPA mentions"
                - "Work one example of a transaction fee offset against the quarterly fee"
                - "Check how director fees paid to partners are treated"
                - "Confirm with the administrator how offsets show in LP reports"
            - name: GP commitment structures and their trade-offs
              description: |-
                ## Purpose
                GP commitments can be met in cash, by waiving part of the management fee in exchange for a fund interest, by a loan from a bank or the management company, or by a mix. Each route has different cash, tax and LP perception consequences, and knowing them before the commitment decision saves expensive restructuring later.

                ## Milestones
                1. The four common funding routes described, with how cash moves under each.
                2. The tax and accounting questions each route raises listed for your adviser.
                3. Feedback from two or three LPs or peers on how they view fee waivers and borrowed commitments.
                4. A comparison table ready for the GP commitment decision.

                ## Notes
                Fee waiver arrangements are closely watched by tax authorities in several countries. Treat the tax side as a question for a specialist adviser, never something to settle from a peer's example.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A comparison table covers cash, fee waiver, loan and mixed GP commitment routes, with adviser questions and LP feedback recorded."
                cadence: phased
                effort_hours_estimate: "5"
              tasks:
                - "Describe how cash moves under each GP commitment route"
                - "List the tax and accounting questions for your adviser"
                - "Ask two LPs or fellow managers how they view fee waivers"
                - "Build the comparison table for the commitment decision"
            - name: Management company accounting basics for founders
              description: |-
                ## Purpose
                Investors who read company accounts all day can still be unsure about their own manager's books: accruing fees billed in advance, deferred revenue, prepaid expenses and partner capital accounts. A short self-study of these basics, applied to your own trial balance, lets you challenge the bookkeeper and read the monthly pack in minutes.

                ## Milestones
                1. Fee revenue recognition for fees billed in advance understood and checked in your books.
                2. Accruals, prepayments and deferred revenue lines on your balance sheet explained.
                3. Partner capital and current accounts reconciled to what each partner believes they have put in.
                4. A list of chart of accounts changes agreed with the bookkeeper.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "You can explain each line of the management company balance sheet, and the agreed chart of accounts changes are in place with the bookkeeper."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Ask the bookkeeper for the latest trial balance and chart of accounts"
                - "Trace one quarterly fee invoice through revenue and deferred revenue"
                - "Reconcile each partner's capital account with what they contributed"
                - "Agree chart of accounts changes with the bookkeeper"
            - name: Benchmarking manager costs against peer firms
              description: |-
                ## Purpose
                Without benchmarks a founder either overbuilds, hiring a full back office for a small fund, or underbuilds and burns out the team. Gathering cost ratios from peer managers, fund formation surveys and service providers shows what similar-sized firms typically spend on people, systems and outsourced services as a share of fee income.

                ## Milestones
                1. Three to five peer managers of similar fund size asked for rough cost ratios.
                2. Published compensation or cost surveys for emerging managers collected.
                3. Your cost base expressed as a share of fee income by category.
                4. The two categories most out of line with peers noted for the next budget.

                ## Notes
                Peers will share ratios more readily than amounts. Ask about percentages of fee income, never for their actual salaries.
              priority: low
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A benchmark table compares your cost categories as a share of fee income with at least three peers or surveys and names two outliers."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Ask three peer managers for cost ratios as a share of fee income"
                - "Collect any published emerging manager cost or pay surveys"
                - "Express your own costs by category as a share of fees"
                - "Refresh the peer comparison before each budget @recurring(yearly)"
            - name: Fee-related earnings and what they show
              description: |-
                ## Purpose
                Fee-related earnings, the profit from management fees before any carry, is how LPs, lenders and GP stake buyers judge whether a manager is a stable business. Learning to calculate yours and track it over time tells you whether the firm survives a fund that never pays carry.

                ## Milestones
                1. A definition of fee-related earnings agreed for your firm, including which costs are in.
                2. Fee-related earnings calculated for the last full year and the budget year.
                3. The margin compared with what lenders or GP stake investors describe as healthy.
                4. The figure added to the monthly management pack.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Fee-related earnings and margin are calculated for two years on an agreed definition and appear in the monthly management pack."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Write down which revenues and costs count in your definition"
                - "Calculate fee-related earnings for the last full year"
                - "Repeat the calculation for the budget year"
                - "Add the figure and margin to the monthly management pack"
            - name: Monthly management company close and P&L review
              description: |-
                ## Purpose
                Managers that only look at their numbers at year end find out about overspends after they have happened. A short monthly close, with the bookkeeper's P&L compared to budget and every variance over an agreed threshold explained, keeps the partners honest about the cost base while it can still change.

                ## Milestones
                1. A close checklist with a fixed date each month.
                2. The P&L compared with budget, with variances above the threshold explained in one line each.
                3. Uncoded and personal card items cleared before the pack is circulated.
                4. Three consecutive months closed on time.

                ## Notes
                Start from the **Month-end close** template. A threshold of a fixed amount or a percentage of the budget line, whichever is larger, stops the review drowning in small items.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "The management company P&L is closed and compared with budget every month, with variances explained, for three months in a row."
                cadence: rolling
              tasks:
                - "Agree the variance threshold that needs a written explanation"
                - "Close the books and review P&L against budget @recurring(monthly:12)"
                - "Clear uncoded transactions and missing receipts before circulating"
                - "Send the partners a one-page variance note"
            - name: Rolling eighteen-month manager cash forecast
              description: |-
                ## Purpose
                Fee receipts arrive in lumps, bonuses and GP capital calls fall in different months, and the fundraise for the next fund adds costs before it adds fees. A rolling eighteen-month cash forecast, updated monthly, shows the lowest cash point ahead and gives time to move a hire or a draw instead of scrambling.

                ## Milestones
                1. An eighteen-month forecast built from the budget and the fee schedule.
                2. GP capital calls, bonuses and tax payments shown in the months they fall.
                3. A minimum cash balance agreed by the partners and marked on the forecast.
                4. The forecast rolled forward and compared with actuals each month.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "An eighteen-month cash forecast is rolled forward monthly and shows the lowest balance against an agreed minimum."
                cadence: rolling
              tasks:
                - "Build the first eighteen months from the budget and fee schedule"
                - "Mark GP calls, bonuses and tax payments in the right months"
                - "Agree the minimum cash balance the manager must hold"
                - "Roll the forecast forward one month and compare to actuals @recurring(monthly:20)"
            - name: Quarterly fee receipt reconciliation
              description: |-
                ## Purpose
                The administrator calculates the fee, the fund pays it, and the management company books it, which gives three chances for a wrong base, a missed discount or an offset applied twice. Reconciling each fee period against your own schedule catches errors before they reach an LP report or an audit.

                ## Milestones
                1. The administrator's fee calculation received for each period.
                2. That calculation checked against your fee schedule, discounts and offsets.
                3. The amount received in the management company account matched to the calculation.
                4. Any differences resolved with the administrator in writing.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every fee period has a reconciliation showing administrator calculation, your schedule and cash received agreeing, or a documented resolution."
                cadence: rolling
              tasks:
                - "Request the administrator's fee calculation for the period"
                - "Check the fee calculation against your own schedule @recurring(quarterly)"
                - "Match the cash received to the agreed fee amount"
                - "Log any difference and the administrator's written answer"
            - name: Fee offset ledger by portfolio company
              description: |-
                ## Purpose
                Offsets only work if someone records every fee a portfolio company pays to the manager or its people as it happens. A ledger by portfolio company, updated monthly, feeds the next fee calculation and gives a clean answer when an LP asks what the manager earned from portfolio companies last year.

                ## Milestones
                1. A ledger with one tab per portfolio company and columns for fee type, payer, recipient and date.
                2. Every transaction, monitoring and director fee since the fund's first close entered.
                3. Offset amounts calculated and passed to the administrator before each fee period.
                4. The ledger total agreed with the management company books each quarter.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A per-company ledger records every portfolio fee since first close and its offset amount, agreed to the books each quarter."
                cadence: rolling
              tasks:
                - "Create one ledger tab for each portfolio company"
                - "Enter every portfolio fee received since first close"
                - "Log new portfolio company fees and their offsets @recurring(monthly:25)"
                - "Send offset totals to the administrator before each fee period"
            - name: Quarterly expense allocation review
              description: |-
                ## Purpose
                Written policies are only as good as how invoices are coded in practice, and the drift usually comes from travel, broken-deal costs and software used for both fund and manager work. Sampling the quarter's charges to the fund against the allocation policy finds mistakes while they are small enough to correct quietly.

                ## Milestones
                1. A sample of fund-charged expenses pulled for the quarter, including all items over a set amount.
                2. Each sampled item checked against the allocation policy and the LPA clause.
                3. Misallocated items corrected with a journal and noted in a log.
                4. Recurring causes of errors fed back to the bookkeeper and the team.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Each quarter a sample of fund-charged expenses is tested against the policy, and every error is corrected and logged."
                cadence: rolling
              tasks:
                - "Pull every fund-charged expense over the review threshold"
                - "Test the sample against the allocation policy @recurring(quarterly)"
                - "Correct misallocated items and record them in the error log"
                - "Tell the team about any repeated coding mistake"
            - name: GP commitment funding tracker for capital calls
              description: |-
                ## Purpose
                When the fund calls capital, the GP must fund its share on the same terms as the LPs, and a late GP payment is an embarrassing thing to explain. A tracker that shows each partner's share of every call, the source of the cash and the date it was paid makes sure the GP is never the investor in default.

                ## Milestones
                1. Each partner's share of the GP commitment and unfunded balance in one tracker.
                2. Every capital call entered with each partner's amount and due date.
                3. Payments recorded with date and source of funds.
                4. Unfunded GP commitment remaining shown against each partner's planned sources.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every capital call shows each partner's GP share paid on or before the due date, with remaining unfunded commitment per partner."
                cadence: rolling
              tasks:
                - "Set up the tracker with each partner's commitment and unfunded balance"
                - "Enter each capital call with every partner's share and due date"
                - "Check unfunded GP balances against planned sources @recurring(monthly:8)"
                - "Record each GP payment with its date and source"
            - name: Annual management company budget cycle
              description: |-
                ## Purpose
                Each year the fee income changes with closes, step-downs and new funds, and the cost base creeps with every renewal. A fixed annual budget cycle, starting two months before year end, sets the cost plan, hiring, compensation pool and partner draws together rather than in separate conversations.

                ## Milestones
                1. A budget timetable with dates for draft, partner review and sign-off.
                2. Next year's fee income taken from the updated fee schedule.
                3. Costs built bottom up with each line owner's input.
                4. A signed budget with the compensation pool and draw policy for the year.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: artifact
                success_criteria: "A signed annual budget, with fee income, costs, compensation pool and draw policy, is approved before the start of each financial year."
                cadence: cyclic
              tasks:
                - "Set the budget timetable two months before year end @recurring(yearly)"
                - "Update next year's fee income from the fee schedule"
                - "Ask each line owner for their cost estimate"
                - "Hold the partner review and record the signed budget"
            - name: Headcount plan tied to fee capacity
              description: |-
                ## Purpose
                People are usually 60 to 80 percent of a manager's costs, so each hire is a decade-long bet on fee income. A headcount plan that shows each role, its timing and its fully loaded cost against fee capacity makes it clear which hires the current fund can carry and which wait for the next close.

                ## Milestones
                1. Current team listed with fully loaded cost per person.
                2. Planned hires for three years listed with timing and loaded cost.
                3. Each hire marked as affordable on current fees or dependent on a future close.
                4. The plan checked against the cash forecast each quarter.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: artifact
                success_criteria: "A three-year headcount plan shows each role's loaded cost and whether current fees or a future close funds it, reviewed quarterly."
                cadence: rolling
              tasks:
                - "List the team with salary, benefits and employer costs"
                - "Add planned hires with timing and loaded cost"
                - "Mark which hires depend on a future fund close"
                - "Check the headcount plan against the cash forecast @recurring(quarterly)"
            - name: Vendor and service contract register for the manager
              description: |-
                ## Purpose
                Administrators, auditors, data providers, compliance consultants and software tools each come with a contract, a renewal date and often an automatic price rise. A single register with renewal dates and notice periods stops the manager rolling into another year of a tool nobody uses.

                ## Milestones
                1. Every vendor contract listed with cost, term, renewal date and notice period.
                2. Each contract marked as manager cost, fund cost or shared under the allocation policy.
                3. An owner named for every contract.
                4. Contracts coming up for renewal reviewed before their notice dates.

                ## Notes
                Start from the **Vendor** template for each significant provider.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A register lists every vendor contract with cost, renewal, notice period, allocation and owner, and no contract renews unreviewed."
                cadence: rolling
              tasks:
                - "Collect every signed vendor contract into one folder"
                - "Enter cost, term, renewal date and notice period for each"
                - "Name an owner for every contract"
                - "Review contracts with notice dates in the next ninety days @recurring(monthly:3)"
            - name: Quarterly partner draws and profit distributions
              description: |-
                ## Purpose
                Partners in a young manager often take irregular draws whenever cash looks healthy, then find the account short when a capital call or bonus lands. A quarterly draw routine tied to the cash forecast and a written draw policy keeps distributions fair between partners and the minimum balance intact.

                ## Milestones
                1. A draw policy agreed: frequency, minimum cash retained and split between partners.
                2. Each quarter's draw calculated from the forecast, not the current balance.
                3. Draws recorded against each partner's current account.
                4. An annual reconciliation of draws to each partner's share of profit.

                ## Notes
                How draws are taxed depends on the entity type and where partners live. Agree the mechanics with your accountant before the first draw.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Partner draws follow a written policy each quarter, are calculated from the forecast and reconcile to profit shares at year end."
                cadence: rolling
              tasks:
                - "Write the draw policy with frequency, retained cash and split"
                - "Calculate the quarterly draw from the cash forecast @recurring(quarterly)"
                - "Record each draw against the partner's current account"
                - "Ask the accountant how draws are taxed for each partner"
            - name: Fee waiver versus cash GP commitment
              description: |-
                ## Purpose
                Waiving part of the management fee in return for a fund interest reduces the cash a partner needs to find, but it cuts management company income and carries tax and documentation risk. Comparing the two routes with your own numbers, with your tax adviser's view attached, turns a technical choice into a recorded decision.

                ## Milestones
                1. Management company cash flow modelled with and without a fee waiver.
                2. Each partner's personal cash need compared under both routes.
                3. Written advice from a tax adviser on the waiver mechanics in your jurisdictions.
                4. A partner decision recorded with the reasons.

                ## Notes
                Start from the **Purchase decision** template and treat each route as an option.
              priority: medium
              deadlineOffsetDays: 60
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A recorded partner decision on fee waiver or cash GP commitment includes both cash flow models and written tax advice."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Model management company cash with and without a fee waiver"
                - "Compare each partner's cash need under both routes"
                - "Request written advice from a tax adviser on the waiver"
                - "Record the decision and reasons in the partner minutes"
            - name: Financing the GP commitment with a loan
              description: |-
                ## Purpose
                Some banks and specialist lenders provide GP commitment loans, and some managers lend to their own partners from the management company. Borrowing spreads the burden but adds interest, personal guarantees and LP questions about skin in the game, so it deserves the same diligence as a portfolio financing.

                ## Milestones
                1. Two or three lenders' indicative terms collected: rate, security, guarantees and covenants.
                2. Interest cost compared with the expected timing of carry and distributions.
                3. LP disclosure expectations for borrowed GP commitments checked with counsel.
                4. A decision to borrow or not recorded, with the chosen lender if any.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "Indicative terms from at least two lenders are compared, LP disclosure is checked with counsel and a borrowing decision is recorded."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Ask two or three lenders for indicative GP commitment loan terms"
                - "Compare total interest cost with the expected distribution timing"
                - "Check with counsel what LPs must be told about borrowing"
                - "Record the borrowing decision in the partner minutes"
            - name: Outsourced CFO or in-house finance hire
              description: |-
                ## Purpose
                First funds rarely pay for a full-time CFO, yet the work of fee checks, budgets, audits, LP reporting oversight and tax deadlines lands somewhere. Comparing a fractional CFO, an outsourced fund accounting firm and a junior in-house hire on cost and coverage settles who owns finance before a missed deadline decides it for you.

                ## Milestones
                1. A list of finance tasks with the hours each needs per quarter.
                2. Quotes or salary estimates for three options.
                3. Each option scored on cost, coverage, independence and LP perception.
                4. A chosen option with a start date and a review point.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "Three finance staffing options are scored on cost and coverage, and one is chosen with a start date and a review point."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "List the finance tasks and quarterly hours each needs"
                - "Get quotes from two fractional CFOs and one outsourced firm"
                - "Estimate the cost of a junior in-house hire"
                - "Score the options and record the choice"
            - name: Office space choice for a small manager
              description: |-
                ## Purpose
                Signing a long lease on smart offices commits you to one of the largest fixed costs a small manager can take on, and it outlasts most fundraising plans. Comparing serviced space, a short lease and a home-plus-meeting-room set-up against what LPs and founders actually need to see keeps premises from eating into fee income.

                ## Milestones
                1. Requirements written down: desks, meeting rooms, LP meetings, location.
                2. Three options priced over three years including fit-out and service charges.
                3. Break clauses and personal guarantees compared.
                4. A decision recorded and the cost added to the budget.

                ## Notes
                Start from the **Purchase decision** template.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "Three premises options are priced over three years with break terms compared, and the chosen option is in the budget."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Write down what space the team and LP meetings really need"
                - "Price three options over three years including all charges"
                - "Compare break clauses and any personal guarantees"
                - "Record the decision and update the budget"
            - name: Insurance programme for the manager
              description: |-
                ## Purpose
                Management liability, professional indemnity, GP liability and cyber cover protect the partners personally as well as the firm, and LPs ask about them in operational due diligence. Setting out which risks are covered, by which policy and which entity pays the premium, means the cover matches the allocation policy and the LPA.

                ## Milestones
                1. The risks to cover listed with a specialist broker.
                2. Quotes for each line of cover with limits and exclusions.
                3. Premiums allocated between fund and manager in line with the LPA.
                4. Policies bound and a renewal date in the contract register.
              priority: medium
              frontmatter:
                mode: research
                output_kind: deliverable
                success_criteria: "Bound policies cover the agreed risks, premiums are allocated per the LPA and renewal dates are in the contract register."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Book a scoping call with a broker who covers fund managers"
                - "Compare quotes, limits and exclusions for each policy line"
                - "Allocate premiums between fund and manager under the LPA"
                - "Review cover and limits before each renewal @recurring(yearly)"
            - name: Team cash compensation bands and bonus pool
              description: |-
                ## Purpose
                Carry is the long-term reward, but salaries and bonuses are paid from fees every month, and a pool set by instinct either drains the manager or loses the analyst you trained. Setting pay bands by role and a bonus pool sized to fee-related earnings makes the annual compensation round predictable for the firm and fair for the team.

                ## Milestones
                1. Market pay data for each role gathered from surveys or recruiters.
                2. Salary bands set for each role.
                3. A bonus pool rule linked to fee-related earnings and individual reviews.
                4. The annual compensation round run on the agreed bands.

                ## Notes
                How carry points are allocated across the team is a separate question; keep this project to cash pay paid from fees.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Written salary bands for every role and a bonus pool rule tied to fee-related earnings are used in the annual compensation round."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Collect market pay data for each role from a recruiter or survey"
                - "Set a salary band for each role"
                - "Write the rule for sizing the bonus pool from fee earnings"
                - "Run the compensation round on the agreed bands @recurring(yearly)"
            - name: Technology and data spend review
              description: |-
                ## Purpose
                Pipeline software, market data, research subscriptions, virtual data rooms and portfolio monitoring tools are easy to buy one by one and hard to justify together. An annual review of every tool against how often it is used, and who would notice if it went, often recovers a material share of non-people costs.

                ## Milestones
                1. Every software and data subscription listed with annual cost and number of users.
                2. Usage checked for each tool from logins or by asking the users.
                3. Each tool marked keep, downgrade or cancel.
                4. Savings captured in the next budget.
              priority: low
              frontmatter:
                mode: operating
                output_kind: decision
                success_criteria: "Every subscription has a keep, downgrade or cancel decision based on usage, and the savings appear in the next budget."
                cadence: cyclic
                effort_hours_estimate: "4"
              tasks:
                - "List every software and data subscription with annual cost"
                - "Check logins or ask users how often each tool is used"
                - "Mark each subscription keep, downgrade or cancel @recurring(yearly)"
                - "Ask the agent to draft cancellation notices for the tools being dropped"
            - name: Cost reduction plan if the fundraise slips
              description: |-
                ## Purpose
                Fundraises slip, final closes come in below target and step-downs arrive on schedule regardless. A pre-agreed cost reduction plan, written while nobody is under pressure, lists which costs go first, in what order and at which cash trigger, so the partners act on a plan instead of arguing in a crisis.

                ## Milestones
                1. Cost lines ranked from easiest to hardest to cut.
                2. Three trigger levels defined from the cash forecast.
                3. Actions and savings listed for each trigger, including partner pay deferral.
                4. The plan agreed by all partners and kept with the budget.

                ## Notes
                Start from the **Risk register** template to record each trigger and its owner.
              priority: medium
              deadlineOffsetDays: 90
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A partner-agreed plan sets three cash triggers, each with named cuts and estimated savings, kept with the budget."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Rank every cost line from easiest to hardest to cut"
                - "Set three cash trigger levels from the forecast"
                - "List the cuts and savings attached to each trigger"
                - "Get every partner to sign off the plan"
            - name: Preparing for the first management fee drawdown
              description: |-
                ## Purpose
                Usually the first fee is called with the first capital call, and it is the moment the management company stops living on founder savings. Checking the calculation, the start date, the treatment of organisational expenses and the receiving account before the call goes out avoids an awkward correction notice to every LP in the fund's first week.

                ## Milestones
                1. The fee start date and first period confirmed against the LPA.
                2. The first fee calculation agreed with the administrator, including any discounts.
                3. Organisational expense reimbursement calculated within the LPA cap.
                4. Cash received into the management company account and booked.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "The first fee and organisational expense reimbursement are calculated, agreed with the administrator and received into the right account."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Confirm the fee start date and first period in the LPA"
                - "Agree the first fee calculation with the administrator"
                - "Total organisational expenses and compare them with the LPA cap"
                - "Confirm the receiving bank details with the administrator"
            - name: Final close fee catch-up and equalisation
              description: |-
                ## Purpose
                LPs who join at later closes usually pay fees back to the first close date, often with an interest-like additional amount, and the fund rebalances between earlier and later investors. Working the catch-up calculation through before the final close means the management company books the right income and LPs receive a notice that matches their documents.

                ## Milestones
                1. Each later-close LP's catch-up fee period and amount calculated.
                2. Any additional amount or interest under the LPA calculated.
                3. The calculation agreed with the administrator before notices go out.
                4. Catch-up fees received and booked to the right period.
              priority: medium
              deadlineOffsetDays: 120
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "Catch-up fees for every later-close LP are calculated, agreed with the administrator and booked before the final close notices go out."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "List each later-close LP with commitment and join date"
                - "Calculate each catch-up fee back to the first close"
                - "Calculate any additional amount the LPA charges"
                - "Agree the figures with the administrator before notices are sent"
            - name: End of investment period fee step-down
              description: |-
                ## Purpose
                When the investment period ends, or a successor fund starts charging fees, the fee base or rate usually drops, and management company income can fall by a third or more overnight. Preparing a year ahead, with the new income figure in the budget and the cost plan adjusted, stops the step-down becoming a cash crisis.

                ## Milestones
                1. The step-down trigger and expected date confirmed from the LPA.
                2. Post step-down fee income calculated on the expected fee base.
                3. A revised budget showing how the cost base will be carried.
                4. The administrator briefed on the new calculation before the first reduced period.
              priority: medium
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A budget revised for post step-down fees is approved at least twelve months before the step-down, and the administrator has confirmed the new calculation."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Confirm what triggers the step-down and its likely date"
                - "Calculate fee income on the post step-down fee base"
                - "Revise the budget for the lower fee income"
                - "Brief the administrator on the new fee basis"
            - name: Annual management company audit or review
              description: |-
                ## Purpose
                Whether the management company's accounts need an audit depends on its size, its regulator and what LPs request, but either way year end means accountants asking for reconciliations, contracts and partner records. A prepared year-end file shortens the audit, lowers the fee and shows LPs in operational due diligence that the manager runs its own books well.

                ## Milestones
                1. Audit or review requirements confirmed with the accountant and compliance adviser.
                2. A year-end file prepared: bank reconciliations, fee reconciliations, contract register and partner accounts.
                3. Accountant queries answered within an agreed turnaround.
                4. Signed accounts filed and any management letter points logged.
              priority: medium
              frontmatter:
                mode: event
                output_kind: deliverable
                success_criteria: "Signed management company accounts are filed on time each year, and every management letter point has an owner and a date."
                cadence: cyclic
                effort_hours_estimate: "10"
              tasks:
                - "Confirm whether the manager needs an audit or a review"
                - "Prepare the year-end file and send it to the accountant @recurring(yearly)"
                - "Answer the accountant's queries within the agreed turnaround"
                - "Log management letter points with an owner and date"
            - name: Fee terms for fund term extensions
              description: |-
                ## Purpose
                Many funds still hold assets when the term ends, and extension years often carry a reduced fee or none at all, depending on the LPA and what the LP advisory committee approves. Planning the extension economics before you ask for one shows whether the team can afford to keep managing the remaining assets well.

                ## Milestones
                1. The LPA extension mechanics and fee terms summarised.
                2. Management company income and costs projected for each possible extension year.
                3. Options prepared for the advisory committee: fee level, length and reporting.
                4. The approved extension terms reflected in the fee schedule and budget.
              priority: low
              frontmatter:
                mode: event
                output_kind: decision
                success_criteria: "Extension year economics are projected before the advisory committee request, and approved terms are entered in the fee schedule and budget."
                cadence: phased
                effort_hours_estimate: "5"
              tasks:
                - "Summarise the extension clause and its fee terms"
                - "Project manager income and costs for each extension year"
                - "Prepare fee options for the advisory committee"
                - "Update the fee schedule with the approved extension terms"
            - name: Fund II launch budget and fee overlap
              description: |-
                ## Purpose
                Raising a second fund costs money before it earns any: travel, legal fees and often new hires, while Fund I fees may step down when Fund II starts charging. A launch budget that shows both funds' fees side by side across the overlap tells you whether to raise now or wait.

                ## Milestones
                1. Fundraising costs for Fund II estimated, including legal, travel and any placement fees.
                2. Fund I and Fund II fee income shown side by side for five years.
                3. The effect of the Fund I step-down on combined income calculated.
                4. A launch timing decision recorded with the combined budget.
              priority: medium
              deadlineOffsetDays: 180
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A five-year combined budget shows Fund I and Fund II fees, fundraising costs and the step-down, with a recorded launch timing decision."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "Estimate legal, travel and placement costs for raising Fund II"
                - "Put Fund I and Fund II fee income side by side for five years"
                - "Model when the Fund I step-down is triggered by Fund II"
                - "Record the launch timing decision with the combined budget"
            - name: Solo GP economics on a small first fund
              description: |-
                ## Purpose
                A solo GP with a small first fund often has fee income that barely covers an administrator, an auditor, compliance and one salary, with nothing left for help. Building the economics around outsourcing, a modest personal draw and a clear point at which the first hire is affordable lets one person run a credible manager without hollowing out their savings.

                ## Milestones
                1. The fixed costs that cannot be avoided listed with annual amounts.
                2. Outsourced options priced for finance, compliance and investor relations.
                3. A personal draw set that the fee income can support every year.
                4. The fund size or fee level at which a first hire becomes affordable written down.

                ## Notes
                LPs ask solo GPs about key person risk. A written plan for who runs the fund if you are unavailable is part of the economics, because it often requires a paid back-up provider.
              priority: medium
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A solo GP plan shows unavoidable costs, outsourced services, a sustainable personal draw and the fee level that funds a first hire."
                cadence: phased
                effort_hours_estimate: "5"
              tasks:
                - "List the fixed costs a solo manager cannot avoid"
                - "Price outsourced finance, compliance and investor relations"
                - "Set a personal draw the fee income can support"
                - "Write down the fee level that pays for a first hire"
            - name: Co-founder ownership and draws in the management company
              description: |-
                ## Purpose
                Two or three founders often split the management company equally at the start, then contribute very differently in time, capital and LP relationships. Agreeing ownership, draws, capital contributions and what happens if a founder leaves, in a written agreement drafted by counsel, protects the firm and the friendship.

                ## Milestones
                1. Each founder's capital contribution and expected time commitment recorded.
                2. Ownership, profit share and draw rights agreed in principle.
                3. Leaver terms, buy-out pricing and deadlock rules agreed in principle.
                4. A management company agreement drafted by counsel and signed.

                ## Notes
                Carry allocation is a separate document. Keep this agreement to the management company: fees, costs, profits and control.
              priority: high
              deadlineOffsetDays: 90
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "A signed management company agreement sets ownership, profit share, draws, leaver terms and deadlock rules for every founder."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "Write down each founder's capital and time commitment"
                - "Agree ownership, profit share and draw rights in principle"
                - "Agree leaver, buy-out and deadlock terms in principle"
                - "Instruct counsel to draft the management company agreement"
            - name: Spin-out economics leaving an established firm
              description: |-
                ## Purpose
                Partners spinning out of a larger firm give up a salary, a bonus and often unvested carry, and may face non-compete or non-solicit restrictions that delay the raise. Laying out what you forfeit, what you keep and the cost of setting up alone gives you an honest number to weigh against the opportunity.

                ## Milestones
                1. Vested and unvested carry, deferred bonus and co-investment positions listed with their leaver treatment.
                2. Restrictive covenants in your current agreements reviewed by an employment lawyer.
                3. Set-up costs and the pre-close runway estimated.
                4. A personal go or wait decision recorded with the numbers behind it.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A decision note lists forfeited and retained economics, legal restrictions reviewed by a lawyer and the cost of launching, with a recorded go or wait."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "List your vested and unvested carry and deferred pay"
                - "Book an employment lawyer to review your restrictive covenants"
                - "Estimate set-up costs and months of runway needed"
                - "Record a go or wait decision with the numbers"
            - name: Household budget while drawing a reduced founder salary
              description: |-
                ## Purpose
                Most first-time managers cut their own pay sharply for several years while carrying the same mortgage, school fees and family commitments. A household budget built on the founder draw, agreed with your partner at home and reviewed monthly, keeps the fund's economics from quietly becoming the family's problem.

                ## Milestones
                1. Household spending listed against the expected founder draw.
                2. Savings set aside for the GP commitment kept separate from household money.
                3. A spending plan agreed with your partner or family.
                4. Three months of actual spending tracked against the plan.

                ## Notes
                Start from the **Monthly budget and bills** template.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A household budget based on the founder draw is agreed at home and tracked against actual spending for three consecutive months."
                cadence: rolling
              tasks:
                - "List household spending against your expected founder draw"
                - "Move GP commitment savings into a separate account"
                - "Agree the spending plan with your partner or family"
                - "Compare household spending with the plan @recurring(monthly:27)"
            - name: Admitting a new partner to the management company
              description: |-
                ## Purpose
                A new partner may expect a share of management company profits as well as carry, and the founders have to decide whether that share is bought, earned or granted. Settling the price or vesting, the effect on existing draws and the agreement changes before the offer letter avoids resentment in year three.

                ## Milestones
                1. The proposed management company share and how it is earned or bought agreed by the founders.
                2. The effect on existing partners' draws modelled for three years.
                3. Vesting and leaver terms for the new partner agreed.
                4. The management company agreement amended by counsel and signed.
              priority: low
              frontmatter:
                mode: service
                output_kind: deliverable
                success_criteria: "The new partner's management company share, vesting and leaver terms are written into an amended agreement signed by all partners."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Agree among founders whether the share is bought, earned or granted"
                - "Model the effect on existing draws for three years"
                - "Set vesting and leaver terms for the new partner"
                - "Ask counsel to amend the management company agreement"
            - name: Harvest years with a single fund in run-off
              description: |-
                ## Purpose
                If a successor fund does not happen, the manager keeps a duty to the LPs in the remaining companies while fee income shrinks with each exit. Planning the run-off, with a shrinking team, outsourced functions and a clear end date, lets you manage the last assets properly without funding the firm from your own pocket.

                ## Milestones
                1. Remaining portfolio companies listed with expected exit years.
                2. Fee income projected as each asset is realised.
                3. A run-off cost plan with team, outsourcing and office changes by year.
                4. A partner-agreed plan reviewed each quarter against exits.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A run-off plan matches projected fee income to a shrinking cost base by year and is reviewed quarterly against actual exits."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "List remaining portfolio companies with expected exit years"
                - "Project fee income as each asset is realised"
                - "Plan team, outsourcing and office changes by year"
                - "Review the run-off plan against actual exits @recurring(quarterly)"
            - name: Multi-fund economics model from Fund I to Fund III
              description: |-
                ## Purpose
                Once a manager has two or three funds at different stages, fees, step-downs, GP commitments and team costs overlap in ways no single-fund budget shows. A combined ten-year model of all funds tells you how large Fund III must be, when the team can grow and how much GP capital the partners must find at once.

                ## Milestones
                1. Each fund's fee schedule, step-down and GP commitment in one model.
                2. Team and cost growth linked to combined fee income.
                3. Total GP commitment calls per partner per year shown.
                4. Scenarios run for a smaller, on-plan and larger successor fund.

                ## Notes
                Ask the agent to summarise each scenario in a short paragraph for the partner meeting, then check every figure against the model.
              priority: medium
              frontmatter:
                mode: research
                output_kind: artifact
                success_criteria: "A ten-year model combines every fund's fees and GP commitments with team costs and shows three successor fund scenarios."
                cadence: phased
                effort_hours_estimate: "16"
              tasks:
                - "Combine each fund's fee schedule and GP commitment in one model"
                - "Link team and cost growth to combined fee income"
                - "Show each partner's total GP calls per year"
                - "Run small, on-plan and large successor fund scenarios"
            - name: Evaluating a GP stake or revenue share investor
              description: |-
                ## Purpose
                Seeding investors and GP stake buyers offer working capital or a GP commitment in exchange for a share of management fees, carry or both, often for the life of the firm. Modelling what a revenue share costs over several funds, and what control rights come with it, shows whether the money accelerates the business or permanently shrinks it.

                ## Milestones
                1. Term sheets or indicative terms from each interested party summarised.
                2. The share of fees and carry given up modelled across three funds.
                3. Control, consent and exit rights compared side by side.
                4. Advice from counsel recorded and a decision made by the partners.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "Each GP stake or revenue share offer is modelled over three funds with control rights compared, and the partners record a decision after counsel's advice."
                cadence: one-shot
                effort_hours_estimate: "12"
              tasks:
                - "Summarise each offer's economics and rights on one page"
                - "Model the fees and carry given up over three funds"
                - "Compare control, consent and exit rights side by side"
                - "Take counsel's advice before the partners decide"
            - name: Management company succession and ownership transfer
              description: |-
                ## Purpose
                Founding partners eventually step back, and the management company's value, its profits and its control must pass to the next generation without disrupting LPs or the funds. Planning the transfer years ahead, including how departing founders are paid and how key person clauses are handled, keeps the franchise intact.

                ## Milestones
                1. Each founder's intended timeline for stepping back recorded.
                2. A method for valuing and paying for founder ownership agreed in principle.
                3. Key person and LP consent requirements in each LPA mapped.
                4. A written succession plan agreed by the partners and reviewed by counsel.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A written succession plan sets founder timelines, a valuation and payment method and LP consent steps, reviewed by counsel."
                cadence: phased
                effort_hours_estimate: "12"
              tasks:
                - "Ask each founder for their intended step-back timeline"
                - "Agree a method for valuing founder ownership"
                - "Map key person and consent clauses in every LPA"
                - "Draft the succession plan for counsel's review"
---

# GP Economics and Management Fees

This area is for the founder running a fund manager as a business: the management company that collects fees, pays the team and the rent, and has to put its own money into the fund alongside the LPs. It starts with foundations (the entity map, the fee schedule as signed, a first budget, breakeven and the GP commitment), then the knowledge that makes the numbers make sense, the monthly and quarterly operating routines, decisions about financing, people and costs, the dated moments such as the first fee drawdown and the step-down, founder situations from solo GP to spin-out, and finally the economics of several funds at once.

What repeats is a monthly management company close and cash forecast, a monthly fee offset ledger and GP commitment check, quarterly fee reconciliations, expense allocation reviews, headcount checks and partner draws, and a yearly budget, compensation and insurance cycle. The Month-end close, Vendor, Purchase decision, Risk register and Monthly budget and bills templates pair with the projects that name them. Installing adds all 50 projects as active, so archive the ones that are not for you yet.
