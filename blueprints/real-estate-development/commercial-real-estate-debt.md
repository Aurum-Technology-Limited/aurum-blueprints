---
id: real-estate-development.commercial-real-estate-debt
name: Commercial Real Estate Debt
description: "Borrowing against income property with your eyes open: a debt register, lender-ready sponsor papers, quotes compared on all-in cost, covenant tests run before the lender runs them, and refinancing planned years ahead."
category: business
version: 1.0.0
tags: [real-estate-development, commercial-real-estate-debt, founder, small-business, commercial-mortgages, dscr, loan-to-value, refinancing]
author: Aurum Technology
starter_structure:
  templates:
    - purchase-decision
    - metrics-log
    - risk-register
    - meeting-notes
  pillars:
    - name: Real Estate Investing & Development
      emoji: "🏢"
      description: "Property as a business: development appraisals, land, planning and construction finance, delivering schemes, syndications, commercial and multifamily acquisitions, short-let portfolios and property management companies, REIT analysis, and land development in the Caribbean, for sponsors, developers and operators rather than single-unit landlords."
      pillarFrontmatter:
        review_cadence: monthly
      areas:
        - name: Commercial Real Estate Debt
          description: "Financing income property: bank and non-bank lenders, debt service coverage and loan-to-value tests, covenants, fixed or floating rates and refinancing risk."
          projects:
            - name: Debt register for every income property
              description: |-
                ## Purpose
                Owners with three or four loans often cannot say, without opening files, what each one costs, when it matures and which covenant is tightest. A single register with lender, balance, rate, margin, maturity, amortisation, prepayment terms, guarantees and covenant levels turns scattered facility letters into something you can manage. Build it first, because every other project in this area reads from it.

                ## Milestones
                1. Every loan listed with lender, outstanding balance, interest basis and margin.
                2. Maturity date, amortisation profile and any interest-only period recorded for each loan.
                3. Covenant levels, prepayment terms and guarantee scope noted against each facility.
                4. The register checked against the latest lender statements and differences resolved.

                ## Notes
                Record the covenant definitions as the facility agreement writes them, not as you remember them. Lenders test the wording, not the intent.

                Before you start: this plan is general information to help you organise your own affairs. It is not legal advice. Rules differ between countries and change often, so check decisions that matter with a qualified lawyer or the official authority in the country concerned.
              priority: high
              deadlineOffsetDays: 14
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A register covering every loan secured on your income property, reconciled to the latest lender statements, with maturity and covenant levels for each."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Gather the facility letter and latest statement for each loan into one folder"
                - "Enter balance, rate basis, margin and maturity for every loan"
                - "Add covenant levels, prepayment terms and guarantee scope to each row"
                - "Reconcile register balances to lender statements and note any differences"
                - "Refresh the debt register against year-end lender statements @recurring(yearly)"
            - name: Commercial property debt terms glossary
              description: |-
                ## Purpose
                Term sheets for income property use a dense vocabulary: loan to value, debt service coverage, debt yield, interest cover, margin over a base rate, floors, amortisation, balloon, recourse, carve-outs, cash traps and yield maintenance. Misreading one term can cost more than the arrangement fee. A glossary in your own words, each term worked on one sample property, lets you read quotes quickly and ask sharper questions.

                ## Milestones
                1. Plain definitions written for at least twenty common commercial lending terms.
                2. Loan to value, debt service coverage and debt yield calculated for one sample property.
                3. The difference between interest cover and debt service coverage shown with figures.
                4. Each fee and prepayment term described with when it bites and what it is based on.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A glossary of at least twenty terms, each with a worked figure from one sample property, saved beside your loan documents."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "List every unfamiliar term from the last commercial loan quote you received"
                - "Write a one-sentence definition for each term in plain words"
                - "Work LTV, DSCR and debt yield on one property you own or are bidding on"
                - "Ask the agent to quiz you on the glossary until you answer without notes"
            - name: Lender landscape map for income property
              description: |-
                ## Purpose
                High street banks, regional and mutual banks, insurance companies, debt funds, securitised conduit lenders, government-backed multifamily programmes and private lenders all lend on income property, with very different appetite, pricing and paperwork. Knowing which type suits a stabilised warehouse, a part-let office or a small apartment block saves months of pitching to the wrong desk. Map them once and refresh the map each year.

                ## Milestones
                1. Each lender type described with typical loan size, term, loan to value range and recourse stance.
                2. At least three named lenders or programmes listed per type that are active in your market.
                3. Each of your current properties matched to the two lender types most likely to want it.
                4. A note on which lender types are retreating or expanding in the current market.
              priority: medium
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A lender map covering at least six lender types with named examples and a best-fit lender type recorded for every property you own or target."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Ask your broker or accountant which lenders closed local deals in the last year"
                - "Group the lenders by type with loan size, term and recourse stance"
                - "Match each property you own to the two best-fit lender types"
                - "Refresh the lender map with who is lending and who has stepped back @recurring(yearly)"
            - name: Sponsor resume and real estate schedule
              description: |-
                ## Purpose
                Credit teams lend to people as much as to buildings, and the first thing they ask for is a schedule of real estate owned and a short sponsor resume. A clean schedule showing each property, purchase date, cost, current debt, occupancy and net income, beside a one-page account of your experience, shortens every application. Keep it current and you can answer a lender the same day.

                ## Milestones
                1. A schedule of real estate owned listing every property with cost, debt, occupancy and net income.
                2. A one-page sponsor resume covering ownership history, management and any setbacks explained plainly.
                3. Two or three references from lenders, brokers or partners agreed in advance.
                4. Both documents saved as a lender pack ready to send.

                ## Notes
                Disclose past defaults, restructurings or litigation up front. Lenders find them in searches, and a surprise ends more applications than the history itself.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A schedule of real estate owned and a one-page sponsor resume, both dated within the last quarter and saved in a lender pack."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "List every property you own or co-own with purchase date and cost"
                - "Add current debt, occupancy and last twelve months net income to each line"
                - "Write a one-page sponsor resume with ownership and management history"
                - "Ask two past lenders or partners whether they will act as references"
            - name: Personal net worth, liquidity and contingent liabilities statement
              description: |-
                ## Purpose
                Many commercial lenders test the sponsor as well as the property, often asking for net worth at least equal to the loan and liquid assets covering several months of debt service. Guarantees you have already given count against you as contingent liabilities. Preparing an honest statement with your accountant shows how much more you can borrow before a lender says no.

                ## Milestones
                1. A personal statement of assets and liabilities prepared and checked with your accountant.
                2. Liquid assets separated from property equity and restricted funds.
                3. Every existing guarantee listed with the lender, amount and whether it is capped.
                4. A note of the net worth and liquidity tests your likely lenders apply, confirmed with your broker.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A signed personal financial statement with a separate liquidity figure and a schedule of every guarantee you have given."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Book a session with your accountant to prepare a personal financial statement"
                - "Separate cash and listed investments from property equity and pensions"
                - "List every guarantee you have signed with lender, amount and any cap"
                - "Ask your broker which net worth and liquidity tests your target lenders use"
            - name: Written debt policy for your portfolio
              description: |-
                ## Purpose
                Without written limits, borrowing creeps up in good years and the refinancing wall arrives in a bad one. A short policy setting your own ceiling on loan to value, a floor on debt service coverage, a cap on floating rate exposure and a rule on how many loans may mature in one year gives you a test for every new deal. Agree it with partners before the next term sheet arrives.

                ## Milestones
                1. A maximum portfolio loan to value and a maximum per property written down.
                2. A minimum debt service coverage you will accept, set above typical lender covenants.
                3. Limits on the share of debt at floating rates and on maturities falling in any one year.
                4. The policy agreed and signed by partners or co-owners.

                ## Notes
                Set your limits inside lender covenants, not at them. Headroom is what keeps a valuation dip from becoming a default.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A one-page debt policy with numeric limits on LTV, DSCR, floating rate share and maturity concentration, signed by every partner."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Compare current LTV and DSCR on each loan with its covenant levels"
                - "Draft numeric limits for LTV, DSCR, floating share and maturities per year"
                - "Test the draft limits against the last two deals you did"
                - "Circulate the policy to partners and record their sign-off"
            - name: Loan document library and key terms abstract
              description: |-
                ## Purpose
                Facility agreements, mortgage deeds, guarantees, side letters and hedging confirmations run to hundreds of pages, and the clauses that matter are buried. A one-page abstract per loan pulling out events of default, cure rights, reporting duties, transfer restrictions, prepayment terms and notice addresses means the answer is found in minutes when the lender writes.

                ## Milestones
                1. Signed copies of every loan, security and guarantee document stored in one place per property.
                2. A one-page abstract per loan covering defaults, cure periods, reporting and prepayment.
                3. Notice addresses and lender contact names recorded for each facility.
                4. Any amendments or waivers filed with the original document they change.
              priority: medium
              deadlineOffsetDays: 45
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A complete signed document set and a one-page key terms abstract for every loan in the debt register."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Request certified copies of any missing loan documents from your solicitor"
                - "Create one folder per property for facility, security, guarantee and hedge papers"
                - "Ask the agent to draft a key terms abstract from each facility agreement"
                - "Check every abstract against the signed document before relying on it"
            - name: Choosing a commercial mortgage broker
              description: |-
                ## Purpose
                Good brokers know which lenders are hungry this quarter and how to present a deal to their credit teams; poor ones spray your papers across the market and burn your name. Choosing deliberately, on lender reach, deals closed in your property type, fee basis and conflicts, matters more than the first quote they promise.

                ## Milestones
                1. Three brokers shortlisted with recent deals in your property type and size range.
                2. Each broker's fee basis, exclusivity terms and lender panel written down.
                3. References taken from two borrowers each broker has served.
                4. One broker appointed with a signed engagement letter limiting where your deal is sent.

                ## Notes
                Start from the **Purchase decision** template. Ask every broker to name the lenders they will approach before they send anything.
              priority: medium
              deadlineOffsetDays: 30
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A broker appointed under a signed engagement letter after comparing three on lender reach, fees and references."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Ask your solicitor and two local investors which brokers they trust"
                - "Shortlist three brokers with closed deals in your property type"
                - "Compare fee basis, exclusivity period and lender panel side by side"
                - "Sign an engagement letter that lists the lenders to be approached"
            - name: Borrowing entity and recourse structure review
              description: |-
                ## Purpose
                Whether a loan sits in a single-purpose company, a partnership or your own name decides what a lender can reach if things go wrong and how easily the property can later be sold or refinanced. Many lenders require a single-asset borrower with no other liabilities. Reviewing the structure with your solicitor and accountant before applying avoids restructuring under deadline pressure.

                ## Milestones
                1. The current owning entity for each property and its other liabilities documented.
                2. Lender requirements for single-purpose borrowers and separateness noted from recent term sheets.
                3. Tax and legal consequences of any change set out by your accountant and solicitor.
                4. A decided borrowing structure for the next loan, recorded with the reasons.
              priority: medium
              deadlineOffsetDays: 60
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A written note from your advisers on the borrowing structure for the next loan, with the entity chosen and the reasons recorded."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Draw a chart of which entity owns each property and who owns each entity"
                - "List any other debts or contracts each owning entity carries"
                - "Book a joint call with your solicitor and accountant on the structure"
                - "Record the chosen borrowing entity and the reasons in the debt register"
            - name: Monthly debt service and payment calendar
              description: |-
                ## Purpose
                Missing or shorting a payment on a commercial loan can trigger default interest and a lender's attention far out of proportion to the amount. Floating rate payments change each period and some loans collect reserves alongside interest. A calendar of every payment date, amount and paying account, checked each month against the lender's notice, keeps the basics clean.

                ## Milestones
                1. Every loan payment date, account and collection method listed in one calendar.
                2. Floating rate payment notices checked against the base rate and margin each period.
                3. Operating accounts holding enough cash for the next payment five days before it falls.
                4. A year of payments made on time with no default interest charged.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Twelve consecutive months of loan payments made on time, each checked against the lender's notice, with no default interest."
                cadence: rolling
              tasks:
                - "Put every loan payment date and paying account into one calendar"
                - "Check each payment notice against rate, margin and balance @recurring(monthly:3)"
                - "Confirm cash in each paying account covers the next instalment"
                - "Reconcile the yearly interest statement for each loan with your accountant @recurring(yearly)"
            - name: Quarterly covenant compliance tests
              description: |-
                ## Purpose
                Lenders test debt service coverage, loan to value, interest cover or debt yield on dates set in the facility, using their definitions of income and cost. Running the same tests yourself a few weeks earlier shows whether you are close to a breach while there is still time to cure it, prepay a little or talk to the lender first.

                ## Milestones
                1. A covenant tracker holding each loan's test, definition, level and test dates.
                2. Each quarter's figures calculated on the lender's definitions before the lender asks.
                3. Headroom shown as a percentage for every covenant on every loan.
                4. Any loan with less headroom than your debt policy allows flagged with an action.

                ## Notes
                Start from the **Metrics log** template. Note whether each test is historic, forward-looking or both, because the answer changes which figures you use.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Covenant tests run on lender definitions for every loan each quarter, with headroom recorded at least two weeks before each test date."
                cadence: rolling
              tasks:
                - "Copy each covenant definition word for word into the tracker"
                - "Run DSCR, LTV and other tests on every loan before lender dates @recurring(quarterly)"
                - "Flag any covenant with headroom below your debt policy limit @priority(high)"
                - "Prepare and sign the annual compliance certificate where loans require one @recurring(yearly)"
            - name: Loan maturity ladder and refinancing watch
              description: |-
                ## Purpose
                Refinancing risk is the risk that when a loan matures, rates, values or lender appetite have moved and the new loan is smaller than the old one. A maturity ladder showing every expiry over five years, with an estimate of the refinance amount at today's terms, shows the gap early enough to save, sell or extend.

                ## Milestones
                1. Every loan maturity and any extension option plotted on a five-year ladder.
                2. An estimated refinance amount at current lender terms for each maturity.
                3. The shortfall or surplus against the outstanding balance shown per loan.
                4. A named action for any loan maturing within eighteen months with a shortfall.

                ## Notes
                Start from the **Risk register** template, with refinancing shortfall, rate rise and lender withdrawal as standing risks.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A five-year maturity ladder reviewed every quarter, with a refinance estimate and a named action for every loan maturing within eighteen months."
                cadence: rolling
              tasks:
                - "Plot every loan maturity and extension option on a five-year ladder"
                - "Estimate each refinance amount using current LTV and DSCR limits"
                - "Review the ladder and update shortfall estimates @recurring(quarterly)"
                - "Write a named action for each maturity within eighteen months"
            - name: Reserve and escrow account reconciliation
              description: |-
                ## Purpose
                Many investment loans make the lender hold money for property tax, insurance, replacement works or tenant incentives and leasing commissions. Those balances are your money, but they are released only on request and evidence, and errors go unnoticed for years. A monthly reconciliation and a habit of claiming releases keeps cash from sitting idle.

                ## Milestones
                1. Every reserve and escrow account listed with its purpose, balance and release conditions.
                2. Monthly lender statements reconciled to your own records for each account.
                3. Release requests submitted with invoices for completed works and paid tax or premiums.
                4. Reserve balances above what the loan requires identified and a release asked for.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every reserve account reconciled monthly for six months, with release requests filed within thirty days of each qualifying payment."
                cadence: rolling
              tasks:
                - "List each reserve account with its purpose and release conditions"
                - "Reconcile lender reserve statements to your own ledger @recurring(monthly:12)"
                - "Submit release requests with invoices for completed qualifying works"
                - "Ask the lender to release any balance above the required level"
            - name: Quarterly lender reporting pack
              description: |-
                ## Purpose
                Facilities usually require quarterly operating statements, rent rolls and sometimes budgets and leasing updates within a set number of days of quarter end. Late or messy reporting is a technical default and colours how a lender treats you when you later need a waiver. A standard pack, sent early and the same way each time, builds credit you can draw on.

                ## Milestones
                1. Each loan's reporting duties listed with content, deadline and recipient.
                2. A standard pack format with operating statement, rent roll and a short commentary.
                3. Packs sent before the deadline for four quarters in a row.
                4. Any lender questions answered within five working days and filed.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: deliverable
                success_criteria: "Four consecutive quarterly packs sent to every lender before the facility deadline, each with operating statement, rent roll and commentary."
                cadence: cyclic
              tasks:
                - "List reporting duties, deadlines and recipients for every loan"
                - "Build one pack layout with statement, rent roll and commentary"
                - "Send each lender its quarterly pack before the facility deadline @recurring(quarterly)"
                - "File lender questions and your answers beside each pack"
            - name: Interest rate and lending margin log
              description: |-
                ## Purpose
                Refinancing and fixing decisions are made against a market you only glimpse when you are in it. A monthly log of base rates, swap rates for common terms and indicative margins quoted for your property types shows the trend, so a broker's quote can be judged on the day it arrives.

                ## Milestones
                1. A log with base rate, swap rates for three and five years and indicative margins.
                2. Margins recorded separately for office, retail, industrial and residential where quoted.
                3. Twelve months of entries showing the trend for your property types.
                4. Each new quote received compared with the log within a day.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Twelve monthly entries of base rate, swap rates and margins by property type, used to check every quote received."
                cadence: rolling
              tasks:
                - "Set up the log with base rate, swap rates and margin columns"
                - "Record rates and any margins heard from brokers or lenders @recurring(monthly:20)"
                - "Note the source and date beside every margin entered"
                - "Compare each new quote with the last three months of the log"
            - name: Lender relationship roster
              description: |-
                ## Purpose
                When a loan is maturing in a hard market, the borrowers who refinance are the ones who already know a credit officer who trusts them. A roster of relationship managers at six to ten lenders, met at least yearly whether or not you need money, turns cold applications into warm conversations.

                ## Milestones
                1. Six to ten lender contacts listed with role, appetite and last contact date.
                2. Each current lender met at least once a year outside a live deal.
                3. Two new lenders added each year from the lender landscape map.
                4. Notes from every meeting filed with what each lender wants to see next.

                ## Notes
                Start from the **Meeting notes** template for each lender meeting, so appetite changes are written down while fresh.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A roster of at least six lender contacts, each met or spoken to in the last twelve months, with meeting notes filed."
                cadence: rolling
              tasks:
                - "List current and prospective lender contacts with their appetite"
                - "Book a catch-up with one lender contact outside any live deal @recurring(quarterly)"
                - "Send each current lender a short portfolio update after year end"
                - "Add two new lender contacts from the landscape map this year"
            - name: Yearly insurance check against loan requirements
              description: |-
                ## Purpose
                Loan agreements set minimum cover for buildings, loss of rent, liability and sometimes terrorism, flood or windstorm, and require the lender to be named on the policy. A renewal that quietly drops loss of rent cover or changes the deductible can put you in breach without anyone noticing. Check each renewal against the facility before it binds.

                ## Milestones
                1. Insurance requirements from every facility listed in one table.
                2. Each policy schedule checked against those requirements before renewal.
                3. Lender interest noted correctly on every policy.
                4. Certificates of insurance sent to each lender before the renewal date.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: deliverable
                success_criteria: "Every policy checked against facility requirements before renewal, with lender interest noted and certificates delivered on time."
                cadence: cyclic
              tasks:
                - "Extract insurance requirements from each facility agreement into a table"
                - "Send the requirements table to your insurance broker before renewal @recurring(yearly)"
                - "Check each new schedule for sums insured, deductibles and lender interest"
                - "Send certificates of insurance to every lender after renewal"
            - name: Cash trap and cash sweep trigger watch
              description: |-
                ## Purpose
                Many investment loans move surplus rent into a lender-controlled account when coverage or debt yield falls below a trigger, or when a major tenant gives notice. The trap can starve the property of cash for leasing and repairs just when it needs it. Watching each trigger monthly, with the tenant events that set them off, gives time to act before the money stops flowing to you.

                ## Milestones
                1. Every cash management trigger listed with its measure, level and cure condition.
                2. Tenant events that can trigger a trap, such as break notices, recorded per loan.
                3. Monthly figures checked against each trigger with headroom shown.
                4. A plan written for any loan within ten percent of a trigger.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Cash management triggers checked monthly for every loan that has them, with a written plan for any loan within ten percent of a trigger."
                cadence: rolling
              tasks:
                - "List every cash trap and sweep trigger from the facility agreements"
                - "Note tenant break dates and notices that could set off a trap"
                - "Check monthly figures against each trigger and record headroom @recurring(monthly:15)"
                - "Draft a cure plan for any loan close to a trigger"
            - name: Yearly portfolio debt review
              description: |-
                ## Purpose
                Once a year, step back from individual loans and look at the whole: total debt, average cost, the share fixed and floating, maturities by year, guarantees outstanding and how the portfolio sits against your written debt policy. That review is where you decide which loans to refinance early, which to pay down and what new borrowing you can afford.

                ## Milestones
                1. Portfolio totals for debt, weighted cost, weighted maturity and fixed share calculated.
                2. Every limit in the debt policy compared with actual figures.
                3. Guarantees outstanding totalled and compared with your net worth.
                4. A short list of debt actions for the coming year agreed with partners.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: decision
                success_criteria: "A yearly review comparing portfolio debt figures with the written policy, with an agreed list of debt actions for the next twelve months."
                cadence: cyclic
              tasks:
                - "Total debt, weighted cost and weighted maturity from the register"
                - "Compare actual LTV, DSCR, floating share and maturities with the policy"
                - "Hold the portfolio debt review with partners and agree actions @recurring(yearly)"
                - "Update the debt policy if the review shows a limit no longer fits"
            - name: How lenders size a commercial loan
              description: |-
                ## Purpose
                Lenders usually run several tests at once, maximum loan to value, minimum debt service coverage at a stressed or actual rate, and often a minimum debt yield, and lend the lowest answer. Knowing which test binds for a given property tells you whether a better valuation, a longer amortisation or a lower rate would actually raise the loan.

                ## Milestones
                1. Loan size calculated on LTV, DSCR and debt yield for one real property.
                2. The binding test identified and the reason it binds written down.
                3. The effect of a stressed interest rate on the DSCR loan size shown.
                4. Sizing repeated for a second property of a different type.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Worked sizing for two properties on LTV, DSCR and debt yield, each with the binding test identified."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Take net income and value for one property you own or are bidding on"
                - "Size the loan on LTV, DSCR and debt yield in a simple sheet"
                - "Rerun the DSCR test at the stress rate a lender quoted"
                - "Repeat the sizing for a property of a different type"
            - name: Underwriting net income the way a lender does
              description: |-
                ## Purpose
                Lenders' views of net operating income are almost always lower than the seller's or yours. Credit teams mark rents to market, add a vacancy allowance even on a full building, charge a management fee you do not pay yourself and deduct reserves for replacements and leasing. Rebuilding your income on their basis shows the loan you will really be offered.

                ## Milestones
                1. Your own net operating income for one property set out line by line.
                2. Lender adjustments applied for vacancy, management fee, reserves and above-market rents.
                3. The gap between your figure and the lender figure explained item by item.
                4. The lender-basis income used to resize the expected loan.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A side-by-side of your income and a lender-basis income for one property, with every adjustment explained and the loan resized."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Lay out twelve months of income and costs for one property"
                - "Ask your broker which haircuts recent lenders applied on similar assets"
                - "Apply vacancy, management fee and reserve adjustments to your figures"
                - "Resize the loan on the lender-basis income and note the difference"
            - name: Reading an investment loan term sheet line by line
              description: |-
                ## Purpose
                Two term sheets with the same headline rate can differ sharply once you read the floor, the stress rate in the coverage test, the reserves, the guarantee wording and the prepayment terms. Working through one real term sheet clause by clause, with a list of questions for each, builds the habit of reading what is on the page and spotting what is missing.

                ## Milestones
                1. Every clause in one term sheet summarised in a sentence.
                2. Each economic term turned into a cost or a cash effect where possible.
                3. Missing terms noted, such as cure rights or extension options.
                4. A list of questions for the lender sent and the answers filed.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "One term sheet annotated clause by clause with costs, gaps and a filed list of questions and lender answers."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Pick a recent term sheet, your own or a sample from your broker"
                - "Summarise each clause in one sentence in the margin"
                - "Note terms that are missing or vague, such as cure rights"
                - "Send the lender a short list of questions and file the replies"
            - name: Prepayment terms, yield maintenance and defeasance
              description: |-
                ## Purpose
                Fixed rate commercial loans often charge heavily to repay early, through yield maintenance, defeasance, swap break costs or a fixed step-down scale. The cost can run to several percent of the balance and decides whether a sale or refinance is worth doing. Working each type on one of your loans shows the price of flexibility before you sign the next one.

                ## Milestones
                1. Each prepayment method described in plain words with its formula.
                2. The cost of repaying one current loan today estimated under its actual terms.
                3. The same cost estimated at two other rate levels to show sensitivity.
                4. A rule written on which prepayment terms you will accept for different hold periods.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A worked prepayment cost for one current loan at three rate levels and a written rule on acceptable prepayment terms."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Find the prepayment clause in one current facility agreement"
                - "Ask the lender or broker for an indicative redemption figure today"
                - "Rework the cost at rates one point higher and one point lower"
                - "Write a rule matching prepayment terms to expected hold period"
            - name: Recourse, non-recourse and carve-out guarantees
              description: |-
                ## Purpose
                Non-recourse loans limit the lender to the property, but nearly all come with carve-out guarantees that make the sponsor personally liable for fraud, unauthorised transfers, environmental problems and sometimes voluntary insolvency. Small bank loans are often fully recourse. Understanding exactly what you have signed tells you what is really at stake on each property.

                ## Milestones
                1. Each of your loans classed as full recourse, partial recourse or non-recourse.
                2. Every carve-out in your guarantees listed with what triggers it.
                3. Carve-outs you could trigger by ordinary decisions, such as a transfer, identified.
                4. Your solicitor's notes on any wording you do not fully understand filed.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A table classing every loan by recourse and listing each carve-out trigger, reviewed by your solicitor."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Pull every guarantee and indemnity you have signed into one folder"
                - "Class each loan as full, partial or non-recourse in the register"
                - "List each carve-out trigger in plain words"
                - "Ask your solicitor to explain any carve-out you could trip by accident"
            - name: Amortisation, interest-only and balloon payments worked
              description: |-
                ## Purpose
                Amortisation decides how much of the loan is left at maturity, and therefore how big the refinancing problem is. An interest-only period helps cash flow early but leaves the whole balance due. Working the same loan at interest-only, twenty-five and thirty-year profiles shows the trade between cash today and risk later.

                ## Milestones
                1. One loan modelled interest-only, at twenty-five years and at thirty years amortisation.
                2. Annual debt service and balance at maturity shown for each profile.
                3. DSCR under each profile compared with the covenant level.
                4. A preferred profile chosen for your next loan with the reason written.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A comparison of three amortisation profiles on one loan showing debt service, DSCR and balance at maturity, with a preferred profile recorded."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Set up a loan schedule for one loan in a spreadsheet"
                - "Run it interest-only, at twenty-five and at thirty years"
                - "Compare annual debt service and the balloon at maturity"
                - "Record which profile fits your next loan and why"
            - name: Floating rate mechanics, floors and caps
              description: |-
                ## Purpose
                Floating rate loans cost a base rate plus a margin, often with a floor, and lenders may require you to buy a cap. How the base rate is set, compounded and published differs by currency and market, and the floor can wipe out the benefit of a rate fall. Working one period's interest by hand removes the mystery from the lender's notice.

                ## Milestones
                1. The base rate used by each floating loan identified with its publication source.
                2. One period's interest calculated by hand and matched to the lender's notice.
                3. The effect of the floor shown at a lower base rate.
                4. Cap terms on any hedged loan summarised with strike, notional and expiry.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "One period's interest on a floating loan calculated by hand and matched to the lender notice, with floor and cap effects shown."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Find the base rate definition in a floating rate facility"
                - "Calculate one period's interest and compare with the lender notice"
                - "Rework the interest at a lower base rate to see the floor bite"
                - "Summarise strike, notional and expiry for any cap you hold"
            - name: Fixed or floating rate decision for a new loan
              description: |-
                ## Purpose
                Fixing buys certainty but usually brings prepayment costs; floating keeps flexibility but leaves debt service exposed to rate rises. The right answer depends on hold period, coverage headroom and how the rest of the portfolio is set. Deciding with numbers, rather than a view on rates, keeps the choice defensible.

                ## Milestones
                1. Fixed and floating quotes for the same loan obtained on the same day.
                2. Debt service and DSCR under floating shown at today's rate and at two higher rates.
                3. Prepayment cost of the fixed option estimated at your likely exit date.
                4. A decision recorded against your debt policy limits on floating exposure.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A written fixed or floating decision for the next loan, with stressed DSCR, prepayment cost and the debt policy check recorded."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Ask the lender for fixed and floating pricing on the same day"
                - "Stress floating debt service at two higher base rates"
                - "Estimate the fixed rate prepayment cost at your planned exit"
                - "Record the decision and how it fits the debt policy"
            - name: Loan term length matched to the business plan
              description: |-
                ## Purpose
                Taking a five-year loan on a property you plan to hold for fifteen years creates two or three refinancing events, each a chance for terms to turn against you. A loan longer than your hold can trap you behind prepayment costs. Matching term, extension options and prepayment terms to the plan for each property removes a hidden source of risk.

                ## Milestones
                1. The intended hold period and exit route written for the property.
                2. Available terms from three, five, seven and ten years priced.
                3. Refinancing events and prepayment exposure shown for each term.
                4. A term chosen with extension or prepayment terms that fit the hold period.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A loan term chosen for the next facility with the hold period, refinancing events and prepayment exposure written beside it."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Write the hold period and planned exit for the property"
                - "Ask the broker to price several loan terms side by side"
                - "Count refinancing events and prepayment exposure for each term"
                - "Record the chosen term and the reasons in the debt register"
            - name: All-in cost comparison of lender quotes
              description: |-
                ## Purpose
                Headline rates hide arrangement fees, exit fees, legal and valuation costs paid for the lender, required reserves, hedging costs and the effect of a lower loan amount. Converting each quote to an all-in annual cost over your expected hold, and the cash it leaves you, shows which offer is really cheaper.

                ## Milestones
                1. At least three quotes entered in one comparison on the same loan amount basis.
                2. Fees, reserves, hedging and third-party costs added to each quote.
                3. An all-in annual cost and net proceeds calculated for your expected hold.
                4. Non-price terms such as recourse, covenants and flexibility scored beside cost.
              priority: medium
              deadlineOffsetDays: 30
              frontmatter:
                mode: research
                output_kind: artifact
                success_criteria: "A comparison of at least three quotes showing all-in annual cost, net proceeds and scored non-price terms for the same hold period."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Put every quote's rate, fees and reserves in one sheet"
                - "Add legal, valuation and hedging costs you will pay for each lender"
                - "Calculate all-in annual cost and net proceeds over your hold"
                - "Score recourse, covenants and flexibility beside the cost figures"
            - name: Interest rate cap purchase decision
              description: |-
                ## Purpose
                Lenders on floating rate loans often require a cap, and its price swings with rate volatility and term. Choosing the strike, term and provider, and deciding whether to buy longer than the lender requires, can change the cost by a large margin. Get competing quotes through an independent hedging adviser rather than accepting the first figure.

                ## Milestones
                1. The lender's cap requirements written down: strike, notional, term and provider rating.
                2. Quotes from at least two providers for two strike levels.
                3. The cost of each option compared with the debt service saved in a rate rise.
                4. A cap bought and its terms recorded in the debt register.

                ## Notes
                Start from the **Purchase decision** template. Note the cap expiry in the payment calendar: lenders often require a replacement before it lapses.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A cap bought after comparing at least two providers and two strikes, with terms and expiry recorded in the debt register."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Copy the lender's cap requirements from the term sheet"
                - "Ask an independent hedging adviser for quotes on two strike levels"
                - "Compare each cap cost with the debt service it protects"
                - "Record cap strike, notional and expiry in the debt register"
            - name: Covenant headroom and cure rights negotiation
              description: |-
                ## Purpose
                The time to win covenant headroom is before signing, when the lender wants the deal. A coverage test set a little lower, an equity cure right, a grace period or a covenant holiday during a planned lease-up can be the difference between a quiet year and a default. Go into the negotiation with figures showing why each ask is reasonable.

                ## Milestones
                1. Proposed covenants tested against your downside case for the property.
                2. A ranked list of asks: levels, equity cure, cure period and test basis.
                3. Each ask supported with a figure from the downside case.
                4. Final agreed terms recorded against the first draft.
              priority: medium
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "Covenant terms negotiated against a written downside case, with agreed levels and cure rights recorded beside the first draft."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Run the proposed covenants against your downside case"
                - "Rank asks for lower levels, equity cure and longer cure periods"
                - "Send the lender the asks with the supporting figures"
                - "Record the agreed terms beside the first draft"
            - name: Carve-out guarantee scope on an investment loan
              description: |-
                ## Purpose
                Guarantee wording is negotiable more often than borrowers assume. Capping a payment guarantee, limiting carve-outs to deliberate acts, removing full recourse springing on a voluntary insolvency or agreeing a burn-off as coverage improves can limit what you put at risk personally. Work with your solicitor on a short list rather than redlining everything.

                ## Milestones
                1. The proposed guarantee read with your solicitor and each obligation listed.
                2. Three to five priority changes agreed with your solicitor.
                3. Asks sent to the lender with a reason for each.
                4. The signed guarantee recorded in the register with its cap and burn-off terms.
              priority: medium
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A signed guarantee whose scope, cap and any burn-off were negotiated from a written list of priority changes."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Book a review of the draft guarantee with your solicitor"
                - "Agree three to five priority changes with reasons"
                - "Send the asks to the lender through your solicitor"
                - "Record the final cap and burn-off terms in the register"
            - name: Early refinancing or keep the existing loan
              description: |-
                ## Purpose
                When rates fall, values rise or a property has been re-let, an early refinance can release equity or cut cost, but prepayment charges, fees and a new set of covenants can wipe out the gain. Comparing the full cost of breaking the current loan with the benefit of the new one, over the same period, gives a clear answer.

                ## Milestones
                1. A redemption figure obtained for the existing loan, including any break costs.
                2. An indicative refinance quote with all fees and reserves.
                3. Net benefit over the remaining hold calculated for both options.
                4. A decision recorded with the figures and agreed with partners.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A written comparison of keeping or refinancing one loan, showing redemption cost and net benefit over the hold, with the decision recorded."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Ask the current lender for a redemption figure with break costs"
                - "Get an indicative refinance quote through your broker"
                - "Calculate net benefit of each option over the remaining hold"
                - "Agree the decision with partners and record it"
            - name: Staggering maturities to cut refinancing risk
              description: |-
                ## Purpose
                Portfolios where half the debt matures in the same year are betting on the market in that year. Spreading maturities, by choosing different terms on new loans, extending one facility or refinancing another early, means no single year can force a sale. The ladder shows where the bunching is; this project fixes it.

                ## Milestones
                1. Years with more debt maturing than your policy allows identified on the ladder.
                2. Options to spread each bunched year listed with cost.
                3. One change agreed for the most concentrated year.
                4. The ladder updated to show the new maturity spread.
              priority: low
              deadlineOffsetDays: 180
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "No more debt maturing in any one year than the debt policy allows, or a dated change agreed to get there."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Mark years on the ladder where maturities exceed the policy"
                - "List extension, early refinance and term options for each"
                - "Agree one change for the most concentrated year"
                - "Check the ladder for new bunching before each new loan @recurring(yearly)"
            - name: Acquisition loan application and credit submission
              description: |-
                ## Purpose
                Buying with debt means the loan must close on the purchase timetable, and lenders need weeks for credit, valuation and legal work. A complete package sent on day one, with the purchase contract, rent roll, operating history, sponsor papers and a short business plan, is the best way to keep the exchange date. Work back from completion to set each date.

                ## Milestones
                1. A timetable worked back from completion with credit, valuation and legal dates.
                2. A complete application package sent to the chosen lender.
                3. Credit approval received with any conditions listed.
                4. Approval conditions agreed or negotiated before exchange.
              priority: high
              deadlineOffsetDays: 60
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "Credit approval received for the acquisition loan before exchange, with every approval condition listed and agreed."
                cadence: phased
                effort_hours_estimate: "15"
              tasks:
                - "Work back from completion to set credit, valuation and legal dates"
                - "Assemble rent roll, operating history, sponsor papers and business plan"
                - "Send the complete package to the chosen lender in one go"
                - "List every credit approval condition and who owns each"
            - name: Lender valuation and site inspection day
              description: |-
                ## Purpose
                The lender's valuer and credit officer decide much of the loan amount in one visit. A prepared visit, with leases, service charge accounts, building surveys and a plain account of capex plans ready, and the property clean and accessible, removes the doubts that turn into lower values and extra reserves.

                ## Milestones
                1. An information pack sent to the valuer before the visit.
                2. Access arranged to every unit, roof and plant area.
                3. Questions from the visit answered in writing within three days.
                4. The valuation report reviewed for errors and any corrections sent.

                ## Notes
                You can correct facts in a valuation, not opinions. Send evidence for any wrong floor area, lease term or rent.
              priority: medium
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A valuation visit held with a pre-sent pack and full access, and the report checked with factual corrections sent within a week."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Send leases, surveys and capex plans to the valuer ahead of the visit"
                - "Arrange access to all units, the roof and plant rooms"
                - "Answer the valuer's questions in writing after the visit"
                - "Check the report for factual errors and send evidence for corrections"
            - name: Loan closing and conditions precedent checklist
              description: |-
                ## Purpose
                Funds are released only when every condition precedent is satisfied: signed documents, title, insurance, corporate approvals, legal opinions, reserves funded and fees paid. Missing one item on completion day can delay the purchase and cost a daily penalty. A checklist owned by one person, reviewed with the solicitors each week, avoids that.

                ## Milestones
                1. Every condition precedent listed with owner and target date.
                2. Weekly review calls held with both solicitors until completion.
                3. All conditions satisfied and confirmed in writing by the lender's solicitor.
                4. A funds flow agreed and the loan drawn on the planned day.

                ## Notes
                One owner and one list matters more than the format. Most delays come from corporate approvals and insurance certificates, not the loan documents.
              priority: high
              deadlineOffsetDays: 90
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "Every condition precedent confirmed satisfied by the lender's solicitor and the loan drawn on the planned completion day."
                cadence: one-shot
                effort_hours_estimate: "10"
              tasks:
                - "Ask the lender's solicitor for the full conditions precedent list"
                - "Assign an owner and target date to every condition"
                - "Hold a weekly call with both solicitors until completion"
                - "Agree a funds flow statement two days before completion"
            - name: Refinancing a maturing loan eighteen months out
              description: |-
                ## Purpose
                Refinancing that starts three months before maturity leaves no room to deal with a low valuation, a lost tenant or a lender stepping back. Starting eighteen months out gives time to fix leases, gather a clean operating history, test the market and line up a fallback such as an extension or a partial paydown.

                ## Milestones
                1. A refinance plan with timetable, target loan and fallback written down.
                2. Leasing and capex actions that improve the refinance completed or scheduled.
                3. At least three lenders approached with a full package.
                4. A new loan closed or an extension agreed before the old loan matures.

                ## Notes
                Keep the shortfall and fallback options with the maturity ladder risks and review them monthly once the refinance is live.
              priority: high
              deadlineOffsetDays: 365
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A new loan closed, or an extension signed, at least one month before the existing loan's maturity date."
                cadence: phased
                effort_hours_estimate: "30"
              tasks:
                - "Write a refinance plan with target loan, timetable and fallback"
                - "List leasing and capex actions that would raise the refinance amount"
                - "Send the refinance package to at least three lenders"
                - "Review progress against the refinance timetable @recurring(monthly:26)"
            - name: Loan payoff and release of security
              description: |-
                ## Purpose
                Paying off a loan on a sale or refinance is not finished until the charge is removed from the title, guarantees are released in writing, reserves are returned and any hedge is closed. Loose ends here have caused sale delays years later. A short close-out checklist makes sure each one is done.

                ## Milestones
                1. A redemption statement checked against your own figures.
                2. Security releases and title discharges registered.
                3. Guarantee release letters received for every guarantor.
                4. Reserves returned and any hedge terminated or transferred.
              priority: medium
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A paid-off loan with charges removed from title, guarantee releases filed and reserve balances returned within sixty days of redemption."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Check the redemption statement against the debt register"
                - "Ask your solicitor to register the security release on title"
                - "Request written guarantee releases for every guarantor"
                - "Confirm return of reserves and closure of any hedge"
            - name: First commercial mortgage for your own business premises
              description: |-
                ## Purpose
                Small business owners buying the building they trade from face a different test from investors: the lender looks at the business accounts as much as the property, and the loan may sit beside the business overdraft. Preparing accounts, forecasts and a clear split between the property company and the trading company makes the application stronger and keeps the property safe if trading has a bad year.

                ## Milestones
                1. Three years of business accounts and a current year forecast ready.
                2. A decision taken with your accountant on which entity owns the building.
                3. A lease drawn up between the property owner and the trading business where advised.
                4. Quotes from at least two lenders, including your current business bank.
              priority: medium
              deadlineOffsetDays: 90
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "An owner-occupier loan offer accepted after comparing two lenders, with the owning entity and any internal lease agreed with your accountant."
                cadence: phased
                effort_hours_estimate: "12"
              tasks:
                - "Gather three years of business accounts and this year's forecast"
                - "Ask your accountant which entity should own the building"
                - "Request quotes from your business bank and one other lender"
                - "Agree a market-rent lease between the owner and the business if advised"
            - name: Moving from residential buy-to-let loans to commercial lending
              description: |-
                ## Purpose
                Investors who grew a portfolio on residential mortgages find commercial lenders look at things differently: the business as a whole, portfolio coverage, accounts and management rather than personal income and a single house. Preparing for that shift, often by refinancing several properties into one company facility, can widen what you can borrow but brings covenants and reporting you have not had before.

                ## Milestones
                1. Existing residential loans listed with rates, terms and early repayment charges.
                2. Portfolio accounts and a management summary prepared for a commercial lender.
                3. Indicative terms from at least two commercial or portfolio lenders.
                4. A decision on whether and when to move, with the cost of breaking existing loans.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A written decision on moving to commercial lending, comparing indicative portfolio terms with the cost of breaking existing residential loans."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "List every residential loan with rate, term and early repayment charge"
                - "Prepare portfolio accounts and a one-page management summary"
                - "Ask a broker for indicative terms from two portfolio lenders"
                - "Compare the new terms with the cost of breaking current loans"
            - name: Assuming existing debt when buying a property
              description: |-
                ## Purpose
                Some properties come with a loan the buyer can take over, which can be valuable when the existing rate is below today's market. Assumption needs the lender's consent, a fee, new guarantees and often a review of your finances, and the timetable is set by the lender's servicer, not the seller. Checking early whether assumption is possible and worth it shapes the bid.

                ## Milestones
                1. Existing loan terms, balance and transfer provisions obtained from the seller.
                2. The value of the below-market rate estimated against a new loan.
                3. Assumption fee, conditions and timetable confirmed with the lender or servicer.
                4. A bid structure that reflects the assumption, agreed with your advisers.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A written assessment of assuming the existing loan, with rate benefit, fees, conditions and timetable, used to set the bid."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Ask the seller for the facility agreement and latest loan statement"
                - "Estimate the value of the existing rate against a new loan"
                - "Confirm assumption fee, conditions and timetable with the servicer"
                - "Agree the bid structure with your solicitor and broker"
            - name: Portfolio facility across several properties
              description: |-
                ## Purpose
                Once you own four or five income properties, one facility secured on all of them can reduce costs and paperwork, but it cross-collateralises them so one weak asset affects the rest. Negotiating release prices, substitution rights and portfolio-level covenants keeps the flexibility to sell or refinance a single building later.

                ## Milestones
                1. The case for a portfolio facility set against separate loans in figures.
                2. Release prices and substitution rights listed as must-have terms.
                3. Portfolio-level covenants tested against a downside on the weakest asset.
                4. A decision recorded on a single facility or separate loans.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A written decision between a portfolio facility and separate loans, with release prices and covenant tests on the weakest asset set out."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Compare cost and fees of one portfolio facility with separate loans"
                - "Write the release price and substitution terms you need"
                - "Test portfolio covenants with the weakest asset losing its tenant"
                - "Record the decision and the reasons in the debt register"
            - name: Commercial property loans from Caribbean banks and credit unions
              description: |-
                ## Purpose
                In much of the Caribbean, commercial property lending comes mainly from a handful of commercial banks, development banks and larger credit unions, often with shorter terms, lower loan to value, full recourse and requirements for local currency income. Foreign currency rents, title and land registry timelines and stamp duty all shape what can be borrowed. Mapping local lenders and their real requirements avoids planning on terms they do not offer.

                ## Milestones
                1. Commercial banks, development banks and credit unions lending on income property in your island listed.
                2. Typical terms gathered: loan to value, tenor, recourse, currency and fees.
                3. Title, registration and stamp duty steps that affect the loan timetable confirmed with a local attorney.
                4. A preferred lender approached with a package matched to its requirements.

                ## Notes
                Ask about currency matching early: a loan in one currency against rents in another adds a risk lenders will price or refuse.
              priority: medium
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A map of at least four local lenders with their typical terms and a confirmed title and registration timetable from a local attorney."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "List commercial banks, development banks and credit unions lending locally"
                - "Ask each for typical LTV, tenor, recourse and currency terms"
                - "Confirm title, registration and stamp duty steps with a local attorney"
                - "Send a matched package to the preferred lender"
            - name: Covenant breach early warning and lender conversation
              description: |-
                ## Purpose
                A lost tenant, a valuation fall or a rate rise can push a loan towards a covenant breach. Lenders deal far better with a borrower who tells them first, with figures and a plan, than one they catch at a test date. Preparing the conversation, the cure options and what you will ask for keeps the relationship and the property.

                ## Milestones
                1. A forward forecast showing when and by how much the covenant will be missed.
                2. Cure options costed: equity cure, partial paydown, cash collateral or a waiver.
                3. A meeting held with the lender before the test date with a written proposal.
                4. Agreed terms of any waiver or amendment documented by solicitors.

                ## Notes
                Read the facility for what counts as a default and what notice you must give. Some loans require notice as soon as you know of a likely breach.
              priority: high
              frontmatter:
                mode: service
                output_kind: decision
                success_criteria: "A lender meeting held before the test date with a written cure proposal, and any waiver or amendment signed and filed."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "Forecast covenant results for the next four test dates"
                - "Cost an equity cure, a partial paydown and a waiver request"
                - "Check the facility for notice duties with your solicitor"
                - "Book a meeting with the lender before the test date @priority(high)"
                - "Refresh the forward covenant forecast for loans under watch @recurring(monthly:18)"
            - name: Loan modification and forbearance negotiation
              description: |-
                ## Purpose
                When a property cannot support its loan, the options are a modification, forbearance, a discounted payoff, a consensual sale or handing back the keys. Each has costs for guarantees, tax and reputation. Going in with an independent view of value, a realistic business plan and advice from a restructuring solicitor gives the best chance of an outcome you can live with.

                ## Milestones
                1. An independent view of current value and achievable income obtained.
                2. Each option costed for guarantees, tax and future borrowing with your advisers.
                3. A written proposal sent to the lender or special servicer.
                4. An agreed outcome documented and the debt register updated.

                ## Notes
                Take restructuring legal and tax advice before you offer anything. A discounted payoff or debt write-off can create a tax charge in some countries.
              priority: medium
              frontmatter:
                mode: service
                output_kind: decision
                success_criteria: "A written workout proposal sent after advice on guarantees and tax, and a signed agreement or recorded decision on the outcome."
                cadence: phased
                effort_hours_estimate: "25"
              tasks:
                - "Instruct a restructuring solicitor with experience of property loans"
                - "Commission an independent valuation and income review"
                - "Cost each option for guarantees, tax and future borrowing"
                - "Send the lender a written proposal with the business plan"
            - name: Interest rate swaps and hedge documentation
              description: |-
                ## Purpose
                Swaps fix a floating loan's rate but add a separate contract under a master agreement, with break costs that can be large if rates fall and you sell early. Credit lines for the swap may be secured on the property alongside the loan. Understanding the documentation and the break exposure before trading avoids a surprise on exit.

                ## Milestones
                1. The swap's notional, fixed rate, term and amortisation matched to the loan.
                2. Break cost estimated at two lower rate scenarios.
                3. Master agreement and schedule terms reviewed with an independent hedging adviser.
                4. Hedge confirmation filed and swap terms added to the debt register.

                ## Notes
                Hedging products may be regulated in your country. Use an independent adviser rather than relying on the lending bank's own desk.
              priority: low
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A swap traded or declined after break costs were estimated and documents reviewed by an independent adviser, with terms in the register."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Match swap notional, term and amortisation to the loan schedule"
                - "Ask an independent adviser to estimate break costs in two scenarios"
                - "Review master agreement and schedule terms with the adviser"
                - "Check the mark-to-market value of each swap with the counterparty @recurring(quarterly)"
            - name: Mezzanine or preferred equity on a stabilised acquisition
              description: |-
                ## Purpose
                Where senior debt stops short of what a purchase needs, mezzanine debt or preferred equity can close the gap, at a much higher cost and with intercreditor rights that let the junior lender step in. Modelling whether the extra return on your equity survives a downside, and reading the intercreditor terms, decides whether the gap is worth filling or the deal is too tight.

                ## Milestones
                1. Returns to your equity modelled with and without the junior layer.
                2. A downside case showing when the junior lender's remedies would be triggered.
                3. Intercreditor terms reviewed with your solicitor, including cure and purchase rights.
                4. A decision recorded to use a junior layer, put in more equity or walk away.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A recorded decision on junior capital for one acquisition, based on base and downside returns and a solicitor's review of intercreditor terms."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Model equity returns with and without the junior layer"
                - "Run a downside where income falls a fifth and note the triggers"
                - "Ask your solicitor to summarise intercreditor rights for both sides"
                - "Record whether to use junior capital, add equity or walk away"
            - name: Securitised loan servicing and special servicer transfer
              description: |-
                ## Purpose
                Securitised loans are run by a master servicer with fixed procedures, and one that goes into difficulty moves to a special servicer whose duty is to bondholders. Consents for leases, alterations or transfers take longer and cost fees. Knowing the process, the contacts and what triggers a transfer helps you plan and negotiate.

                ## Milestones
                1. Master servicer contacts, consent procedures and fee schedule recorded.
                2. The events that move a loan to special servicing listed from the documents.
                3. Lease approvals and other consents planned with servicer timelines.
                4. A plan written for engaging a special servicer if a transfer happens.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A servicer file holding contacts, consent procedures, fees and transfer triggers, with a written plan for a special servicing transfer."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Ask the master servicer for its consent procedures and fee schedule"
                - "List events that would move the loan to special servicing"
                - "Plan lease approvals with the servicer's response times"
                - "Write a plan for engaging a special servicer if needed"
            - name: Bridge loan for a transitional income property
              description: |-
                ## Purpose
                Half-empty offices and buildings needing works to re-let often cannot get long-term debt until it is stabilised, so sponsors use a shorter bridge loan from a debt fund or private lender. Bridges cost more, carry extension tests and assume the business plan works on time. Planning the takeout loan before signing the bridge is what stops a bridge from becoming a trap.

                ## Milestones
                1. The business plan with leasing and works dates that lead to stabilisation.
                2. Bridge quotes compared on cost, future funding for works and extension tests.
                3. The takeout loan sized at stabilisation with a lender's indicative interest.
                4. A bridge signed with extension tests you can meet in a slower case.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A bridge loan chosen against a sized takeout loan, with extension tests checked against a slower leasing case."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Write the leasing and works timetable to stabilisation"
                - "Compare bridge quotes on cost, works funding and extension tests"
                - "Size the takeout loan at stabilisation with a lender's indication"
                - "Test extension conditions against a leasing case six months slower"
---

# Commercial Real Estate Debt

Commercial real estate debt is the borrowing secured on property that already earns rent: offices, shops, warehouses, apartment buildings and mixed portfolios. This area is for founders and small businesses who borrow to buy or hold income property, from a first owner-occupier mortgage to a portfolio facility with several banks. It starts with a register of every loan, your sponsor papers and a written debt policy, then builds the monthly and quarterly machinery of payments, reserves and covenant tests, the skills of reading how lenders size and price loans, the decisions on rates, terms and guarantees, the dated moments from application to payoff, situations for different borrowers and the specialist work of workouts, hedging, securitised loans and bridge finance.

The rhythms are a monthly payment and reserve check, a monthly rates log and cash trap watch, quarterly covenant tests, lender reports and maturity reviews, and a yearly insurance check, lender map refresh and portfolio debt review. Purchase decision suits choosing a broker and an interest rate cap, Metrics log suits the covenant tracker, Risk register suits refinancing risk and Meeting notes suits lender meetings. None of this is financial, tax or legal advice: agree structures, documents and hedging with your solicitor, accountant and a regulated adviser where your country requires one. Installing adds all 50 projects as active, so archive the ones that are not for you yet.
