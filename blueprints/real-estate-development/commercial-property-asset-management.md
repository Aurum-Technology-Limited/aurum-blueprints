---
id: real-estate-development.commercial-property-asset-management
name: Commercial Property Asset Management
description: "Running commercial buildings after purchase: a business plan per asset, a leasing strategy, service charges that reconcile, capex that earns its keep and an honest hold or sell review every year."
category: business
version: 1.0.0
tags: [real-estate-development, commercial-property-asset-management, knowledge-worker, small-business, business-plan, service-charges, capex, hold-sell-review]
author: Aurum Technology
starter_structure:
  templates:
    - vendor
    - risk-register
    - metrics-log
    - meeting-notes
    - onboarding-30-60-90
    - feedback-themes
  pillars:
    - name: Real Estate Investing & Development
      emoji: "🏢"
      description: "Property as a business: development appraisals, land, planning and construction finance, delivering schemes, syndications, commercial and multifamily acquisitions, short-let portfolios and property management companies, REIT analysis, and land development in the Caribbean, for sponsors, developers and operators rather than single-unit landlords."
      pillarFrontmatter:
        review_cadence: monthly
      areas:
        - name: Commercial Property Asset Management
          description: "Managing commercial properties after purchase: a business plan per asset, leasing strategy, service charges, capex and hold or sell reviews."
          projects:
            - name: Asset takeover after a purchase completes
              description: |-
                ## Purpose
                The first month after completion decides whether rent, insurance and safety carry on without a gap. Rent demands may still be going out in the seller's name, service contracts may be about to lapse and tenants often do not know who to call. A short, checklisted takeover moves every live obligation onto the new owner before anything slips.

                ## Milestones
                1. Notice of the change of landlord sent to every tenant with new payment details.
                2. Insurance in the new owner's name from the completion date, with the lender noted where required.
                3. Every service, maintenance and utility contract either novated, renewed or ended in writing.
                4. Keys, codes, building manuals and the seller's arrears and apportionment figures received and checked.

                ## Notes
                Rent and service charge received around completion is usually apportioned between buyer and seller. Check the completion statement with your solicitor before chasing any tenant for money.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "Every tenant notified, insurance and contracts transferred and the completion apportionments reconciled within 30 days of completion."
                cadence: one-shot
                effort_hours_estimate: "12"
              tasks:
                - "List every contract, utility account and insurance policy the seller held"
                - "Send the change of landlord letter with new payment details to each tenant"
                - "Confirm insurance is in the new owner's name from completion"
                - "Reconcile the completion apportionment of rent and service charge"
            - name: Lease abstracts and asset data room
              description: |-
                ## Purpose
                Asset decisions get made from summaries, and a summary copied from the sales brochure is often wrong about breaks, repairing terms or rent reviews. Abstracting each lease from the signed document and its variations into one consistent format, filed alongside title, plans and certificates, gives every later project a source you can trust.

                ## Milestones
                1. One abstract per lease covering term, rent, reviews, breaks, repair, alienation, user and service charge caps.
                2. Every abstract checked against the signed lease and all deeds of variation and licences.
                3. Title, plans, surveys, certificates and the acquisition reports filed in one structured folder.
                4. Gaps such as a missing licence for alterations listed with who is chasing them.
              priority: high
              deadlineOffsetDays: 45
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "An abstract for every lease, checked against the signed documents, and a data room folder with a written list of missing items."
                cadence: one-shot
                effort_hours_estimate: "16"
              tasks:
                - "Set up the folder structure for title, leases, plans and certificates"
                - "Ask the agent to draft lease abstracts from the signed leases for you to check"
                - "Check each abstract against the lease and every deed of variation"
                - "List missing documents and who is chasing each one"
            - name: Five-year business plan for each asset
              description: |-
                ## Purpose
                Without a written plan, a building drifts: leases renew on whatever terms are offered and capex goes to whoever shouts loudest. A five-year plan per asset sets out what the building is for, the leasing moves, the capital works, the target income and the exit, so every decision afterwards can be tested against it.

                ## Milestones
                1. A one-paragraph thesis saying what the asset is meant to achieve and by when.
                2. Year-by-year income, voids, leasing events and capex set out for five years.
                3. The main risks named with the action that addresses each one.
                4. Target outcomes and the exit or hold intention agreed with the owner or investment committee.

                ## Notes
                Start with the acquisition case and change it openly where the asset has turned out differently. A plan that hides the gap from underwriting is the one owners stop trusting.
              priority: high
              deadlineOffsetDays: 60
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A signed-off five-year plan for each asset with a thesis, yearly income and capex lines, named risks and an exit intention."
                cadence: one-shot
                effort_hours_estimate: "20"
              tasks:
                - "Pull the acquisition model and investment paper for the asset"
                - "Write the asset thesis in one paragraph"
                - "Lay out five years of income, voids, lease events and capex"
                - "Present the plan to the owner and record the approval"
            - name: First-year operating budget and NOI baseline
              description: |-
                ## Purpose
                Net operating income is the number the owner, the lender and the valuer all watch, and the first budget after purchase sets the baseline everyone measures you against. Building it line by line from leases, contracts and the seller's actual costs, rather than the brochure, avoids a year of explaining variances that were never real.

                ## Milestones
                1. Rental income budgeted lease by lease, with known voids and rent-free periods.
                2. Non-recoverable costs such as void service charge, empty rates and letting fees budgeted separately.
                3. The seller's last two years of actual costs compared with the new budget.
                4. A monthly phasing of the budget loaded into the reporting tool.
              priority: high
              deadlineOffsetDays: 45
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "An approved first-year budget phased by month, with income built lease by lease and non-recoverable costs shown separately."
                cadence: one-shot
                effort_hours_estimate: "10"
              tasks:
                - "Request the seller's actual operating costs for the last two years"
                - "Budget rent lease by lease, including voids and rent-free periods"
                - "Separate recoverable service charge costs from owner costs"
                - "Phase the budget by month and send it for approval"
            - name: Tenant contact sheet and introductory meetings
              description: |-
                ## Purpose
                Tenants decide whether to renew partly on how the landlord behaves in the first year, and a new owner is a natural moment to listen. Meeting each occupier, learning who signs their property decisions and what annoys them about the building, turns a list of lease abstracts into relationships you can plan around.

                ## Milestones
                1. A contact sheet naming each tenant's day-to-day contact, decision maker and accounts contact.
                2. An introductory meeting held with every tenant above a size you set.
                3. Complaints and plans to grow, shrink or move recorded for each tenant.
                4. Quick fixes promised in meetings either done or given a date.

                ## Notes
                Start from the **Meeting notes** template so every visit is recorded the same way.
              priority: medium
              frontmatter:
                mode: service
                output_kind: knowledge
                success_criteria: "A complete tenant contact sheet and written notes from an introductory meeting with every major tenant."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Build a contact sheet with each tenant's three key contacts"
                - "Book introductory meetings with the largest tenants first"
                - "Record each tenant's complaints and space plans after the meeting"
                - "Follow up every promised fix with a date"
            - name: Managing agent appointment and service levels
              description: |-
                ## Purpose
                Most owners delegate rent collection, service charge accounting and building management to a managing agent, and the agreement decides what you can hold them to. A clear scope, fee basis, reporting timetable and client money arrangement agreed at the start avoids the common gap where everyone thinks someone else is doing the compliance checks.

                ## Milestones
                1. Two or three agents compared on scope, fees, team and client accounting.
                2. A management agreement signed with a written schedule of services and reporting dates.
                3. Service levels set for rent demands, arrears chasing, reactive repairs and monthly reports.
                4. Client money held in a designated account with the owner's access confirmed.

                ## Notes
                Start from the **Vendor** template. Ask whether the agent belongs to a professional body with client money protection rules, which varies by country.
              priority: high
              deadlineOffsetDays: 60
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A signed management agreement with a services schedule, measurable service levels and a confirmed client money account."
                cadence: one-shot
                effort_hours_estimate: "10"
              tasks:
                - "Write the scope of services you need from a managing agent"
                - "Ask three agents for fee proposals against the same scope"
                - "Agree service levels for demands, arrears, repairs and reports"
                - "Confirm the client money account details and your access"
            - name: Building compliance register
              description: |-
                ## Purpose
                Fire risk assessments, asbestos surveys, lift inspections, water hygiene and electrical testing all fall due on different cycles, and a lapsed certificate can invalidate insurance or put people at risk. One register per building with each duty, its responsible person and its next due date is the minimum an owner should be able to show an insurer or an inspector.

                ## Milestones
                1. Every statutory and insurance-required inspection for the building listed with its frequency.
                2. The latest certificate or report for each item filed and its next due date recorded.
                3. A named responsible person for each item, split between landlord and tenant areas.
                4. Overdue or failed items assigned with a completion date.

                ## Notes
                The duties and their frequencies differ by country and building type. Confirm the list with a qualified fire, health and safety or building services adviser rather than copying another building's register.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A register for each building listing every required inspection, its current certificate, responsible person and next due date, with no overdue items unassigned."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "List every inspection and certificate the building needs"
                - "File the latest certificate for each and record the due date"
                - "Assign a responsible person for each item"
                - "Check the register for certificates due in the next 60 days @recurring(monthly:3)"
            - name: Insurance schedule and reinstatement cost check
              description: |-
                ## Purpose
                Buildings are insured for the cost of rebuilding, not their market value, and an old reinstatement figure carried over from the seller can leave the owner underinsured after a fire. Checking the sum insured, the loss of rent cover period and what is recharged to tenants protects both income and the lease obligations to rebuild.

                ## Milestones
                1. A current reinstatement cost assessment from a qualified surveyor on file.
                2. Sum insured, loss of rent period and terrorism or flood cover compared with the leases and loan terms.
                3. The insurance recharge to each tenant matched to what their lease allows.
                4. Insurance renewal date and broker contact recorded in the asset calendar.
              priority: medium
              deadlineOffsetDays: 90
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A reinstatement cost assessment under three years old, cover matched to lease and loan requirements, and recharges agreed to each lease."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Find the date of the last reinstatement cost assessment"
                - "Commission a new assessment if it is more than three years old"
                - "Compare cover with what the leases and the loan require"
                - "Check each tenant's insurance recharge against their lease"
            - name: Approval matrix with the owner and lender
              description: |-
                ## Purpose
                Asset managers lose weeks waiting for sign-off on things they could have approved, and occasionally sign things they had no authority to. Writing down who approves a new lease, a rent concession, a capex spend or a contract, and which of those also need lender consent under the loan agreement, makes the asset manager faster and safer.

                ## Milestones
                1. Spending, leasing and contract decisions listed with the approval level for each.
                2. Lender consent requirements taken from the facility agreement and marked on the matrix.
                3. Thresholds agreed in writing with the owner.
                4. The matrix shared with the managing agent so instructions match it.
              priority: medium
              deadlineOffsetDays: 45
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A written approval matrix covering leasing, spend and contracts, including lender consents, signed off by the owner."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "List the decisions you make on the asset in a typical year"
                - "Extract every lender consent requirement from the loan agreement"
                - "Propose approval thresholds to the owner"
                - "Send the agreed matrix to the managing agent"
            - name: Asset risk register
              description: |-
                ## Purpose
                Risks on a single building are concrete: one tenant paying 40 percent of the rent, a roof at the end of its life, a lease expiry that coincides with a loan maturity. Writing them down with a likelihood, an impact and an owner turns worries into actions and gives the owner an honest view of what could go wrong.

                ## Milestones
                1. Tenant, building, market, financing and compliance risks listed for the asset.
                2. Each risk scored for likelihood and impact with a named owner.
                3. A mitigating action and a review date set for every high risk.
                4. The register reviewed and updated at least each quarter.

                ## Notes
                Start from the **Risk register** template.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: artifact
                success_criteria: "A risk register for the asset with scored risks, owners and actions, updated in each of the last four quarters."
                cadence: rolling
              tasks:
                - "List the ten biggest risks to the asset's income and value"
                - "Score each risk and give it an owner"
                - "Write a mitigating action for every high risk"
                - "Review and rescore the asset risk register @recurring(quarterly)"
            - name: Monthly asset performance review
              description: |-
                ## Purpose
                Problems in a commercial building show up in the numbers weeks before anyone mentions them: arrears creeping, a cost line running hot, a void lasting longer than budget. A fixed monthly review of collections, arrears, occupancy, budget variance and open actions catches them early and gives the owner a short, regular summary.

                ## Milestones
                1. A one-page monthly dashboard of rent collected, arrears, occupancy and budget variance.
                2. Variances over a threshold you set explained in a sentence each.
                3. An action list carried from month to month with owners and dates.
                4. A short monthly summary sent to the owner on a fixed day.

                ## Notes
                Start from the **Metrics log** template and keep the same layout every month so trends are visible.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Twelve consecutive monthly reviews completed, each with a dashboard, explained variances and an action list sent to the owner."
                cadence: rolling
              tasks:
                - "Set the variance threshold that needs a written explanation"
                - "Build the dashboard layout for collections, occupancy and costs"
                - "Review the agent's monthly report against the budget @recurring(monthly:8)"
                - "Send the monthly asset summary to the owner @recurring(monthly:10)"
            - name: Quarter day rent collection and arrears follow-up
              description: |-
                ## Purpose
                Commercial rent is often billed quarterly in advance, so one late tenant can leave a quarter of their annual rent outstanding for months. A set routine around each quarter day, checking receipts within a week, calling late payers and escalating in writing, keeps collections high and shows early which tenants are struggling.

                ## Milestones
                1. A collection target by day 7 and day 28 after each quarter day agreed with the agent.
                2. An escalation ladder from reminder to formal demand written down.
                3. Every arrear over 28 days explained with the action being taken.
                4. Collection rates tracked quarter by quarter for each tenant.

                ## Notes
                Remedies for unpaid commercial rent vary a great deal by jurisdiction. Take advice from your solicitor before any formal recovery step.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Collection rates at day 7 and day 28 recorded for each of the last four quarters, with every arrear over 28 days explained."
                cadence: rolling
              tasks:
                - "Agree collection targets for day 7 and day 28 with the agent"
                - "Write the escalation ladder for late payers"
                - "Check the arrears report with the agent @recurring(weekly:tue)"
                - "Record each tenant's collection rate after the quarter day @recurring(quarterly)"
            - name: Loan covenant test diary
              description: |-
                ## Purpose
                A facility agreement typically tests interest cover and loan to value on fixed dates, and a breach discovered on the test date leaves no time to fix it. Forecasting each test a quarter ahead, using the latest rent roll and valuation, gives time to talk to the lender or cure the position before it becomes a default.

                ## Milestones
                1. Every covenant, test date, definition and reporting deadline taken from the loan agreement.
                2. A forecast of each test for the next four quarters using the current rent roll.
                3. Headroom shown as how much rent or value could fall before a breach.
                4. A compliance certificate prepared and checked before each deadline.

                ## Notes
                Covenant definitions are specific to each loan. Have the owner's finance team or solicitor confirm how income and value are calculated for the test.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Each covenant forecast a quarter ahead with headroom recorded, and every compliance certificate submitted on time for a year."
                cadence: rolling
              tasks:
                - "Extract each covenant definition and test date from the loan agreement"
                - "Build a forecast of the next four covenant tests"
                - "Update covenant headroom with the latest rent roll @recurring(quarterly)"
                - "Diary each compliance certificate deadline with two weeks' lead time"
            - name: Annual service charge budget
              description: |-
                ## Purpose
                Tenants judge the landlord heavily on service charges, and a budget that arrives late or rises without explanation sours renewals. Building it from contracts, last year's actuals and the planned works, then explaining the big movements to tenants before the year starts, keeps recoveries high and disputes low.

                ## Milestones
                1. Last year's actual costs, contract prices and planned works gathered for each cost head.
                2. A draft budget with year-on-year movements over 10 percent explained.
                3. Each tenant's share calculated using the apportionment in their lease.
                4. The budget sent to tenants before the start of the service charge year.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: deliverable
                success_criteria: "A service charge budget issued to all tenants before the year starts, with every movement over 10 percent explained in writing."
                cadence: cyclic
                effort_hours_estimate: "8"
              tasks:
                - "Collect last year's actual costs and current contract prices"
                - "Ask the agent for the draft budget by cost head"
                - "Write a short explanation for each large movement"
                - "Start next year's service charge budget with the agent @recurring(yearly)"
            - name: Service charge year-end reconciliation
              description: |-
                ## Purpose
                At the end of each service charge year the actual costs are reconciled against what tenants paid on account, and balancing charges or credits issued. Reconciliations that run a year or more late leave the owner carrying costs and tenants doubting every figure, so a fixed timetable and a proper check of the accounts matter.

                ## Milestones
                1. Actual expenditure for the year reconciled to invoices and the ledger.
                2. Costs checked against what each lease allows to be recovered.
                3. Certified accounts issued within a target period after year end, such as four to six months.
                4. Balancing charges invoiced and credits paid or applied.

                ## Notes
                Many markets have a professional code of practice for commercial service charges. Ask your agent which applies and work to it even where it is voluntary.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: deliverable
                success_criteria: "Certified service charge accounts issued within six months of year end, with balancing charges and credits settled."
                cadence: cyclic
                effort_hours_estimate: "8"
              tasks:
                - "Agree the reconciliation timetable with the agent"
                - "Check a sample of large invoices against the leases"
                - "Review the draft accounts before they are certified"
                - "Diary the reconciliation start after the service charge year end @recurring(yearly)"
            - name: Quarterly building inspection walk
              description: |-
                ## Purpose
                Reports from the agent tell you what has been noticed; walking the building tells you what has not. A quarterly walk of roofs, plant rooms, common parts, car parks and vacant units with the building manager finds leaks, breaches of lease and tired finishes before tenants or viewers do.

                ## Milestones
                1. A standard inspection checklist covering roof, plant, common parts, external areas and voids.
                2. Photographs and findings recorded for each walk.
                3. Every defect given an owner, a priority and a target date.
                4. Tenant breaches such as unauthorised alterations or signage noted for follow-up.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Four inspection reports a year with photos, and every defect found assigned an owner and a target date."
                cadence: rolling
              tasks:
                - "Write a one-page inspection checklist for the building"
                - "Walk the building with the building manager @recurring(quarterly)"
                - "Photograph and log each defect with an owner"
                - "Follow up suspected tenant breaches with the agent"
            - name: Tenant covenant watch list
              description: |-
                ## Purpose
                Tenant failures rarely arrive without warning: late payments, delayed accounts, a profit warning, staff cuts or a request to sublet usually come first. A quarterly check of each significant tenant's financial signals gives you months, not days, to plan for a vacancy or protect the rent.

                ## Milestones
                1. The tenants that together pay most of the rent listed with their latest financial filings.
                2. A credit monitoring service or regular manual check set up for each one.
                3. A red, amber or green rating given to each tenant with the reason.
                4. A contingency plan written for every red-rated tenant.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A rated watch list of the main tenants reviewed each quarter, with a written contingency plan for every red-rated tenant."
                cadence: rolling
              tasks:
                - "List the tenants that pay most of the asset's rent"
                - "Set up credit alerts or a manual filing check for each"
                - "Rate each tenant red, amber or green with a reason @recurring(quarterly)"
                - "Write a contingency plan for any red-rated tenant"
            - name: Annual business plan refresh and reforecast
              description: |-
                ## Purpose
                A five-year plan written at purchase is out of date within a year: leases have moved, costs have changed and the market has shifted. Refreshing it each year, with a reforecast of income and value and an honest comparison against the original case, keeps the plan a working tool rather than a filed document.

                ## Milestones
                1. Last year's actual income, costs and capex compared with the plan.
                2. A reforecast of the remaining years using current leases and market evidence.
                3. Business plan actions for the coming year set with owners and dates.
                4. The refreshed plan presented to and approved by the owner.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: artifact
                success_criteria: "An approved refreshed business plan each year showing actuals against plan, a reforecast and dated actions for the next year."
                cadence: cyclic
                effort_hours_estimate: "12"
              tasks:
                - "Compare last year's actuals with the business plan"
                - "Reforecast income, costs and capex for the remaining years"
                - "Set next year's business plan actions with owners"
                - "Book the business plan refresh with the owner @recurring(yearly)"
            - name: Capex project tracker per asset
              description: |-
                ## Purpose
                Capital works on an occupied building usually run late and over budget in small, unnoticed steps. A single tracker showing each approved project, its budget, committed and spent costs, programme and whether the cost can be recovered from tenants keeps spending visible and stops the owner learning about overruns from the final account.

                ## Milestones
                1. Every approved capex project listed with budget, approval date and responsible person.
                2. Committed and spent figures updated from orders and invoices each month.
                3. Recoverable and non-recoverable spend separated according to the leases.
                4. Overruns over a threshold reported to the owner before further spend is committed.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A capex tracker updated monthly for a year, with every overrun above the threshold approved before more spend."
                cadence: rolling
              tasks:
                - "List approved capex projects with budgets and approvals"
                - "Mark which costs the leases allow you to recover"
                - "Update committed and spent figures in the capex tracker @recurring(monthly:20)"
                - "Report any overrun above the threshold to the owner"
            - name: Quarterly managing agent performance review
              description: |-
                ## Purpose
                Managing agent service tends to drift once the appointment is won, and owners often only notice when a big mistake happens. A short quarterly review against the agreed service levels, with examples on both sides, keeps standards up and gives you a record if you ever need to retender.

                ## Milestones
                1. A scorecard covering collections, report timeliness, repairs response and compliance.
                2. Evidence gathered for each measure before the meeting.
                3. Agreed improvement actions recorded with dates.
                4. A decision each year on whether to keep, renegotiate or retender the agent.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Four scored agent reviews a year with recorded actions, and a yearly keep or retender decision on file."
                cadence: rolling
              tasks:
                - "Build a scorecard from the service levels in the agreement"
                - "Gather evidence for each measure before the review"
                - "Hold the managing agent review meeting @recurring(quarterly)"
                - "Record a keep, renegotiate or retender decision each year"
            - name: Landlord energy and utility monitoring
              description: |-
                ## Purpose
                Landlord supplies to common parts, central plant and vacant units are often the largest controllable cost in the service charge, and meters left unread hide waste for years. Reading consumption monthly against the same month last year shows heating running in empty floors, faulty controls and billing errors.

                ## Milestones
                1. Every landlord meter listed with what it serves and its supplier account.
                2. Monthly readings or smart meter data captured in one sheet.
                3. Consumption compared with the same month last year and with occupancy.
                4. Anomalies investigated with the building manager and the cause recorded.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Twelve months of landlord meter data compared year on year, with every anomaly above 15 percent investigated and explained."
                cadence: rolling
              tasks:
                - "List every landlord meter and what it supplies"
                - "Set up a sheet for monthly consumption by meter"
                - "Compare consumption with last year's same month @recurring(monthly:12)"
                - "Investigate any meter more than 15 percent above last year"
            - name: Reading a commercial lease as an asset manager
              description: |-
                ## Purpose
                An asset manager does not need to draft leases but must be able to find, in any lease, the clauses that drive income and cost: rent and reviews, repair, service charge, insurance, alienation, alterations, user and breaks. Learning to read them quickly and spot unusual wording means fewer surprises and better instructions to solicitors.

                ## Milestones
                1. A checklist of the clauses that matter for asset decisions, with what to look for in each.
                2. Three of your own leases read in full and compared on those clauses.
                3. Two unusual or onerous clauses identified and discussed with your solicitor.
                4. A one-page cheat sheet saved for reading future leases.

                ## Notes
                Interpreting a lease clause in a dispute is a legal question. Use this knowledge to ask better questions, and take the answer from your solicitor.
              priority: medium
              deadlineOffsetDays: 60
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Three leases compared clause by clause on a written checklist, and a cheat sheet saved for future use."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "Write a checklist of the clauses that drive income and cost"
                - "Read three of your leases against the checklist"
                - "List unusual clauses to raise with your solicitor"
                - "Save a one-page lease reading cheat sheet"
            - name: Service charge principles and codes of practice
              description: |-
                ## Purpose
                Disputes over service charges usually turn on a few principles: what the lease allows, whether costs are reasonable, how they are apportioned, and whether improvements can be recharged as repairs. Understanding these, and the professional code your market follows, lets you challenge an agent's draft budget and answer tenants with confidence.

                ## Milestones
                1. The main principles of recoverable cost, reasonableness and apportionment summarised in your own words.
                2. The relevant professional code of practice for your market read and noted.
                3. Your service charge budget checked against the code with any gaps listed.
                4. A short tenant-facing explanation of how the service charge works drafted.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A written summary of service charge principles, a gap list against the applicable code and a tenant explanation drafted."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Find the service charge code of practice used in your market"
                - "Summarise recoverability, reasonableness and apportionment rules"
                - "Check your budget against the code and list gaps"
                - "Draft a plain explanation of the service charge for tenants"
            - name: Dilapidations explained for landlords
              description: |-
                ## Purpose
                When a lease ends, the tenant's repair and reinstatement obligations can be worth a significant sum, but claims are often limited by what the landlord actually loses. Knowing how schedules of dilapidations are prepared, served and settled, and what limits a claim, helps you decide early whether to pursue works, cash or neither.

                ## Milestones
                1. The stages of a dilapidations claim from interim schedule to settlement summarised.
                2. Common limits on a claim, such as the landlord's intended works, noted for your jurisdiction with your surveyor.
                3. Leases expiring in the next three years listed with their repair and reinstatement clauses.
                4. A rule agreed with the owner on when to instruct a surveyor before a lease ends.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A written summary of the dilapidations process, a list of upcoming expiries with their clauses and an agreed instruction rule."
                cadence: phased
                effort_hours_estimate: "5"
              tasks:
                - "Read a surveyor's guide to dilapidations claims"
                - "Ask your surveyor what limits a claim in your jurisdiction"
                - "List leases expiring within three years with their repair clauses"
                - "Agree when a surveyor is instructed before each expiry"
            - name: How asset management moves value
              description: |-
                ## Purpose
                Valuers price commercial property on income, lease length, tenant strength and building quality, so the same rent can be worth very different sums. Understanding which asset management actions move value most, such as removing a break, extending a lease or improving an energy rating, helps you spend time and capital where the owner gains most.

                ## Milestones
                1. The main value drivers for your asset type written down with a short explanation each.
                2. A recent valuation report for your asset read and its key assumptions noted.
                3. Three possible asset management actions ranked by their likely effect on value, with your valuer's view.
                4. A note on which actions also reduce risk to income.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A ranked list of three asset management actions with their likely value effect, discussed with your valuer."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Read the assumptions section of the latest valuation report"
                - "List the value drivers for your asset type"
                - "Rank three possible actions by likely effect on value"
                - "Ask your valuer to comment on the ranking"
            - name: Building services basics for asset managers
              description: |-
                ## Purpose
                Heating and cooling, ventilation, lifts, fire systems and building management systems account for most of the cost and complaints in an office or multi-let building. An asset manager who understands what each system does, how long it lasts and what failure looks like can question maintenance contractors and plan replacements before they fail.

                ## Milestones
                1. Each major system in the building listed with its age, condition and expected life.
                2. A plant room walk-round completed with the building engineer or maintenance contractor.
                3. The planned preventative maintenance contract read and its scope understood.
                4. A list of systems likely to need replacement in the next five years.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A list of the building's major systems with age, expected life and a five-year replacement watch list."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Book a plant room walk-round with the maintenance contractor"
                - "List each major system with its age and condition"
                - "Read the scope of the planned maintenance contract"
                - "Note systems likely to need replacing within five years"
            - name: Energy performance rules for let buildings
              description: |-
                ## Purpose
                Many markets now set minimum energy ratings for letting commercial buildings, with tighter thresholds announced years ahead, and a building that falls below them may become hard or unlawful to let. Knowing the rules that apply to each asset and where its rating sits is the starting point for any energy upgrade plan.

                ## Milestones
                1. The energy rating rules that apply in your jurisdiction, and future thresholds, summarised.
                2. The current rating and expiry date for each building or unit recorded.
                3. Units at risk of falling below a current or announced threshold listed.
                4. Any exemptions or registration duties confirmed with an energy assessor or solicitor.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Each unit's energy rating and expiry recorded, with units at risk of a current or announced threshold listed."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Look up the energy rating rules for commercial lettings where your asset is"
                - "Record each unit's current rating and its expiry date"
                - "List units at risk of a current or future threshold"
                - "Confirm any exemptions with an energy assessor"
            - name: Leasing strategy for each asset
              description: |-
                ## Purpose
                Leasing decisions made one at a time, as each tenant comes up, rarely add up to the best building. A leasing strategy decides in advance which tenants to keep at almost any cost, which leases to regear early, where to accept shorter terms and how voids will be filled, so the agent's work follows the business plan.

                ## Milestones
                1. Each tenant classed as core to keep, keep on the right terms, or replace.
                2. A target lease expiry profile that avoids several large expiries in the same year.
                3. Target occupiers and a quoting approach for current and expected voids.
                4. Early regear or extension targets named for the next 18 months.

                ## Notes
                The day-to-day marketing and heads of terms sit with your letting work. This project sets the strategy those lettings follow.
              priority: high
              deadlineOffsetDays: 75
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A written leasing strategy per asset classing every tenant, setting a target expiry profile and naming 18-month regear targets."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Class each tenant as core, keep on terms, or replace"
                - "Chart lease expiries and breaks by year"
                - "Name early regear targets for the next 18 months"
                - "Brief the letting agent on the agreed strategy"
            - name: Cutting the cost of vacant space
              description: |-
                ## Purpose
                Every empty unit costs the owner its share of the service charge, insurance, property taxes, security and utilities, often a fifth or more of its rent. Listing the true holding cost of each void, and the ways to reduce it such as rate relief, meanwhile lets or reduced servicing, puts a number on how long a void can sensibly be held.

                ## Milestones
                1. The monthly holding cost of each vacant unit calculated from every cost line.
                2. Available reliefs, exemptions or reduced servicing options checked for each void.
                3. Savings actions agreed and started, with the amount saved recorded.
                4. A holding cost figure added to every letting decision on that unit.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A monthly holding cost for every vacant unit, with agreed savings actions and the amount saved recorded."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Calculate each void's monthly holding cost by cost line"
                - "Check property tax reliefs available for empty units"
                - "Ask the agent which services can be reduced in vacant areas"
                - "Record the savings made on each void"
            - name: Service charge contract retender
              description: |-
                ## Purpose
                Cleaning, security, maintenance and landscaping contracts are often rolled over for years at rising prices without testing the market. Retendering them on a clear specification, every three to five years, usually finds savings or a better service, and tenants notice both.

                ## Milestones
                1. All service contracts listed with value, end date and notice period.
                2. A specification written for the two or three largest contracts.
                3. At least three tenders received and compared on price, quality and references.
                4. New contracts awarded and the saving or service change explained to tenants.

                ## Notes
                Check whether the leases require tenant consultation before major contract changes, and whether existing contracts carry staff transfer obligations.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "The largest service contracts retendered against a written specification, with at least three bids compared and an award decision recorded."
                cadence: phased
                effort_hours_estimate: "14"
              tasks:
                - "List every service contract with value and end date"
                - "Write a specification for the largest contracts"
                - "Invite at least three tenders for each"
                - "Explain the outcome of the retender to tenants"
            - name: Refurbish or hold as is decision
              description: |-
                ## Purpose
                Tired floors and buildings can be let as it is at a lower rent, given a light refresh or fully refurbished, and each choice has a different cost, void period and rent. Comparing them on return on cost, time to let and effect on value, rather than gut feel, gives the owner a decision they can stand behind.

                ## Milestones
                1. Three options costed: as is, light refresh and full refurbishment.
                2. Expected rent, void period and incentives for each option agreed with the letting agent.
                3. Return on cost and effect on value worked out for each option.
                4. A recommendation approved by the owner with a budget and programme.
              priority: medium
              deadlineOffsetDays: 120
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A written comparison of three refurbishment options on cost, rent, void and return on cost, with the owner's decision recorded."
                cadence: one-shot
                effort_hours_estimate: "12"
              tasks:
                - "Get cost estimates for a light refresh and a full refurbishment"
                - "Ask the letting agent for rent and void views on each option"
                - "Work out the return on cost of each option"
                - "Present the recommendation and record the owner's decision"
            - name: Energy and carbon upgrade plan for an asset
              description: |-
                ## Purpose
                Occupiers and lenders increasingly ask about a building's energy performance, and rating thresholds tighten over time. A costed upgrade plan, phased with lease events and planned plant replacement, lets you improve the rating at the lowest extra cost instead of paying for rushed works later.

                ## Milestones
                1. An energy assessment identifying the measures that would lift the rating.
                2. Each measure costed and timed against lease expiries and plant replacement dates.
                3. Measures split between recoverable maintenance and owner capex.
                4. A phased plan approved and added to the business plan.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "An approved, costed energy upgrade plan phased against lease events, showing the target rating for each phase."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "Commission an energy assessment with recommended measures"
                - "Cost each measure and match it to lease and plant dates"
                - "Split the measures into recoverable and owner-funded"
                - "Add the approved plan to the asset business plan"
            - name: Alternative use option study
              description: |-
                ## Purpose
                Some buildings are worth more in a different use: secondary offices as homes or labs, retail as leisure or clinics, a car park as a development site. A short study of the realistic alternatives, their planning prospects and rough values, tells the owner whether the current use is still the best plan or one option among several.

                ## Milestones
                1. Two or three alternative uses identified with a reason each could work.
                2. Planning prospects for each checked with a planning consultant.
                3. A rough value and cost for each alternative compared with the current use.
                4. A decision recorded to pursue, park or drop each option.

                ## Notes
                Keep this as an option study. Taking an alternative use forward becomes a development project with its own appraisal and planning work.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A short study comparing at least two alternative uses with the current use on planning prospects and rough value, with a decision recorded."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "List the alternative uses that might suit the building"
                - "Ask a planning consultant for a view on each"
                - "Compare rough values with the current use"
                - "Record whether to pursue, park or drop each option"
            - name: Annual hold, sell or refinance review
              description: |-
                ## Purpose
                Owners tend to hold assets by default, long after the business plan has been delivered or the market has turned. A yearly review asking whether the remaining upside justifies holding, compared with selling or refinancing, forces a decision and makes it easier to sell at the right time rather than under pressure.

                ## Milestones
                1. Remaining business plan upside and risks summarised for the asset.
                2. Hold, sell and refinance options compared on expected return and risk, with the owner's advisers.
                3. Market evidence and an agent's view of likely sale price gathered.
                4. A recorded decision with the trigger that would reopen it.

                ## Notes
                This is a decision for the owner and their investment and tax advisers. The asset manager's job is to present the options and the evidence clearly.
              priority: high
              frontmatter:
                mode: operating
                output_kind: decision
                success_criteria: "A written hold, sell or refinance paper each year with an owner decision and a stated trigger for reopening it."
                cadence: cyclic
                effort_hours_estimate: "10"
              tasks:
                - "Summarise the upside and risks still left in the business plan"
                - "Ask an agent for a view of the likely sale price"
                - "Write the hold, sell or refinance paper for the owner"
                - "Schedule the yearly hold or sell review @recurring(yearly)"
            - name: Ancillary income review
              description: |-
                ## Purpose
                Roofs, car parks, walls and reception areas can earn income beyond rent: telecom masts, rooftop solar, advertising, electric vehicle charging, parking or event hire. Reviewing the building for these once, with the lease restrictions and tenant rights in mind, often finds income that costs little to set up.

                ## Milestones
                1. Every possible ancillary income source for the building listed.
                2. Lease, title and planning restrictions on each checked.
                3. Two or three opportunities priced with specialist operators.
                4. The best opportunity agreed and contracted, or a reason recorded for not proceeding.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A list of ancillary income options checked against leases and title, with at least two priced and a decision recorded."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Walk the building looking for roof, wall and parking income"
                - "Check lease and title restrictions on each idea"
                - "Ask specialist operators to price two or three options"
                - "Record a go or no-go decision for each option"
            - name: Yearly tenant satisfaction survey and action plan
              description: |-
                ## Purpose
                Occupiers rarely complain formally about slow repairs, poor cleaning or a cold reception; they simply do not renew. A short yearly survey of every tenant, with the results shared and three visible improvements made, gives early warning on renewals and shows tenants the landlord is listening.

                ## Milestones
                1. A survey of ten questions or fewer covering service, building quality, communication and plans to stay.
                2. Responses collected from at least two thirds of tenants by floor area.
                3. Results summarised with the three most common complaints named.
                4. Three improvements made and reported back to tenants within six months.

                ## Notes
                Start from the **Feedback themes** template to group comments into themes.
              priority: low
              frontmatter:
                mode: service
                output_kind: deliverable
                success_criteria: "A tenant survey run each year with at least two thirds response by area and three reported improvements within six months."
                cadence: cyclic
                effort_hours_estimate: "6"
              tasks:
                - "Write a survey of ten questions or fewer for tenants"
                - "Send the survey to every tenant contact"
                - "Summarise the results and name the top three complaints"
                - "Run the tenant satisfaction survey @recurring(yearly)"
            - name: Dilapidations settlement at a lease end
              description: |-
                ## Purpose
                When a significant lease is about to end, the window to serve a schedule of dilapidations, inspect and negotiate is short, and a late claim weakens the landlord's position. Running it as a dated project, linked to the re-letting plan, recovers what is fair and avoids leaving the unit in limbo.

                ## Milestones
                1. A surveyor instructed well before the lease end with the repair and reinstatement clauses briefed.
                2. An interim or terminal schedule served on the tenant within the agreed timetable.
                3. The landlord's intentions for the unit recorded, since they affect the claim.
                4. A settlement in works or cash agreed, or the next step decided with your solicitor.
              priority: medium
              deadlineOffsetDays: 180
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A schedule served on time and a dilapidations settlement agreed, or a recorded decision on next steps, within six months of lease end."
                cadence: one-shot
                effort_hours_estimate: "10"
              tasks:
                - "Instruct a building surveyor on the expiring lease"
                - "Record what the owner intends to do with the unit"
                - "Serve the schedule on the tenant within the timetable"
                - "Negotiate and record the settlement"
            - name: Annual valuation preparation
              description: |-
                ## Purpose
                The year-end valuation sets the owner's reported value and the loan to value test, and valuers work from whatever information they are given. Sending a complete, accurate pack of leases, rent roll, lettings in progress and capex, then checking the draft for factual errors, is the asset manager's main influence on the figure.

                ## Milestones
                1. A valuation information pack sent by the valuer's deadline.
                2. Lettings, regears and capex in progress explained with evidence.
                3. The draft valuation checked for factual errors in tenancy and area data.
                4. Movements in value explained in a short note for the owner.

                ## Notes
                Correcting facts is fair; pressing a valuer on their opinion of value is not. Keep any discussion to evidence and facts. Start from the **Meeting notes** template for the valuer meeting.
              priority: medium
              deadlineOffsetDays: 90
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A complete information pack sent by the deadline, the draft valuation fact-checked and a value movement note sent to the owner."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Ask the valuer for their information list and deadline"
                - "Assemble the rent roll, leases and lettings in progress"
                - "Fact-check the draft valuation against the tenancy schedule"
                - "Write the value movement note for the owner"
            - name: Preparing an asset for sale
              description: |-
                ## Purpose
                Buyers discount for uncertainty, so an asset with missing licences, unreconciled service charges or unclear lease data sells for less or slower. Tidying the asset six months before marketing, and building a vendor data room that answers the usual due diligence questions, protects price and shortens the sale.

                ## Milestones
                1. Outstanding lease documents, licences and certificates obtained or explained.
                2. Service charge reconciliations up to date and arrears explained.
                3. A vendor data room built with leases, title, surveys, compliance and capex history.
                4. Selling agent briefed with an accurate tenancy schedule and the asset's story.
              priority: medium
              deadlineOffsetDays: 180
              frontmatter:
                mode: event
                output_kind: deliverable
                success_criteria: "A complete vendor data room and an accurate tenancy schedule ready before the asset is marketed."
                cadence: phased
                effort_hours_estimate: "30"
              tasks:
                - "List the gaps a buyer's solicitor would ask about"
                - "Bring service charge reconciliations up to date"
                - "Build the vendor data room folder by folder"
                - "Brief the selling agent with the tenancy schedule"
            - name: Tenant insolvency response
              description: |-
                ## Purpose
                Once a significant tenant enters administration, a restructuring plan or liquidation, the landlord has a short time to protect rent, rights and the building. Knowing in advance who to call, what notices may arrive and what decisions will be needed turns a crisis into a sequence of steps.

                ## Milestones
                1. Notice of the insolvency logged with the date, the insolvency practitioner and the procedure.
                2. Advice taken from your solicitor on the landlord's rights and any claims to file.
                3. Rent deposits, guarantees and the unit's security position checked.
                4. A decision on the unit, such as accepting a new tenant, a surrender or re-letting, recorded with the owner.

                ## Notes
                Insolvency rules and landlord rights vary by country and change often. Act on your solicitor's advice, not on general guidance.
              priority: high
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "Legal advice taken, claims filed where advised, security checked and a decision on the unit recorded with the owner."
                cadence: one-shot
                effort_hours_estimate: "10"
              tasks:
                - "Write the contact list for a tenant insolvency today"
                - "Log the insolvency notice and practitioner details"
                - "Instruct your solicitor on the landlord's rights and claims"
                - "Record the owner's decision on the unit"
            - name: Major works with tenants in occupation
              description: |-
                ## Purpose
                Replacing a roof, lifts or central plant in an occupied building risks complaints, disruption claims and broken leases if tenants are not managed carefully. Planning the works around access rights in the leases, phasing and clear communication keeps tenants on side and protects renewals.

                ## Milestones
                1. Landlord access and works rights checked in every lease affected.
                2. A phasing plan agreed with the contractor to limit disruption to each tenant.
                3. Tenants told the scope, programme, recharges and contacts before work starts.
                4. Complaints logged and resolved during the works, with a close-out letter at the end.
              priority: medium
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "Works delivered with every affected tenant briefed beforehand, complaints logged and resolved, and a close-out letter sent."
                cadence: phased
                effort_hours_estimate: "20"
              tasks:
                - "Check access and works rights in each affected lease"
                - "Agree a phasing plan with the contractor"
                - "Send tenants the scope, programme and contacts"
                - "Log and close every tenant complaint during the works"
            - name: First 90 days as an asset manager on a new portfolio
              description: |-
                ## Purpose
                Inheriting a portfolio from a previous asset manager means taking over live negotiations, half-finished works and promises you did not make. A structured first 90 days, listening to tenants and agents, reconciling the numbers and producing a short findings paper, earns the owner's trust and shows where the real problems are.

                ## Milestones
                1. Handover meeting held with the previous asset manager and open items listed.
                2. Every asset visited and its key tenants and agent met.
                3. A findings paper on each asset's position against its business plan written.
                4. A 90-day action list agreed with the owner.

                ## Notes
                Start from the **Onboarding 30/60/90** template.
              priority: medium
              deadlineOffsetDays: 90
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "Every asset visited and a findings paper with a 90-day action list agreed with the owner within 90 days of starting."
                cadence: phased
                effort_hours_estimate: "40"
              tasks:
                - "Book a handover meeting with the previous asset manager"
                - "Visit every asset and meet its main tenants"
                - "Write a findings paper against each business plan"
                - "Agree a 90-day action list with the owner"
            - name: Owner-occupier landlord with tenants on other floors
              description: |-
                ## Purpose
                Many small businesses own their building, occupy part of it and let the rest. That brings a split role: paying your share of service costs fairly, keeping the tenants' leases separate from your own business decisions and planning capex for a building you also work in. Setting the split out clearly prevents disputes and protects the building's value if you ever move.

                ## Milestones
                1. The floor areas and service cost share of your own business and each tenant measured and agreed.
                2. Your own occupation documented, such as a lease from the property company to the trading company, on your accountant's advice.
                3. A simple service charge budget that charges your business its fair share.
                4. Capex plans for the building separated from the trading business budget.
              priority: low
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "Floor areas and service cost shares agreed, your own occupation documented and a separate building budget in place."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Measure the floor area used by your business and each tenant"
                - "Ask your accountant how your own occupation should be documented"
                - "Set up a service charge budget that includes your own share"
                - "Keep a separate capex budget for the building"
            - name: Self-managing a few commercial units
              description: |-
                ## Purpose
                An owner with two or three shops or small offices often manages them alone, without a managing agent, and is then responsible for demands, insurance recharges, compliance and repairs. A simple system for each of those, run on a quarterly rhythm, keeps the income steady without turning the units into a second job.

                ## Milestones
                1. A rent and recharge invoice schedule for each tenant set up in your accounts software.
                2. Compliance items and insurance renewal dates in one calendar.
                3. A short list of trusted contractors for urgent repairs.
                4. A rule for when the units would justify appointing an agent.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Four quarters of invoices raised on time, compliance dates in one calendar and a contractor list ready."
                cadence: rolling
              tasks:
                - "Set up recurring rent invoices in your accounts software"
                - "Put compliance and insurance dates into one calendar"
                - "List three trusted contractors for urgent repairs"
                - "Raise rent and recharge invoices ahead of each quarter day @recurring(quarterly)"
            - name: Asset management for a private owner
              description: |-
                ## Purpose
                Families and private investors who own commercial property often need an asset manager who explains decisions in plain language, without fund jargon. Agreeing what they want from the asset, such as steady income, growth or a future sale, and reporting simply on that, builds trust and avoids decisions they later regret.

                ## Milestones
                1. The owner's goals, time horizon and appetite for risk written down in their words.
                2. A reporting format agreed that fits how they read, such as a one-page note.
                3. Decisions that need their approval listed clearly.
                4. A yearly meeting held to review the asset against their goals.

                ## Notes
                Keep to presenting options and evidence. Investment, tax and estate planning decisions belong with the owner's own advisers.
              priority: medium
              frontmatter:
                mode: service
                output_kind: habit
                success_criteria: "The owner's goals recorded, a simple report sent each month and a yearly review meeting held against those goals."
                cadence: rolling
              tasks:
                - "Interview the owner about their goals for the asset"
                - "Agree a one-page report format with them"
                - "Send the owner a one-page monthly note @recurring(monthly:14)"
                - "Hold a yearly review meeting against their goals"
            - name: Multi-let business park estate management
              description: |-
                ## Purpose
                Business parks and trading estates with many small occupiers depend on their shared roads, landscaping, security and signage, all paid for through an estate charge. Managing the common areas well, and the estate charge fairly, is what keeps small occupiers renewing and stops the estate looking neglected to new tenants.

                ## Milestones
                1. An estate plan showing common areas, roads, parking and who maintains each.
                2. Estate charge apportionment checked against the leases.
                3. A standard for landscaping, lighting, signage and security set and costed.
                4. A routine estate walk with defects tracked to completion.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "An estate plan and service standard in place, apportionment checked and monthly estate walks logged for a year."
                cadence: rolling
              tasks:
                - "Mark common areas and maintenance responsibilities on an estate plan"
                - "Check the estate charge apportionment against the leases"
                - "Set a standard for landscaping, lighting and signage"
                - "Walk the estate common areas and log defects @recurring(monthly:5)"
            - name: Asset under lender watch or covenant breach
              description: |-
                ## Purpose
                Falling income or values can push a loan into breach of its covenants, and the lender may move the asset to a watch list or special servicing. Responding early with a credible plan, accurate data and a clear ask gives the owner the best chance of a waiver or a reset rather than enforcement.

                ## Milestones
                1. The breach or likely breach confirmed with figures and the relevant loan clauses.
                2. Legal advice taken on the owner's position and the lender's options.
                3. A recovery plan with leasing, cost and capital actions prepared for the lender.
                4. The lender's response and any agreed waiver or amendment documented.

                ## Notes
                Talk to your solicitor before any discussion with the lender about a breach, and keep every communication factual.
              priority: high
              frontmatter:
                mode: event
                output_kind: deliverable
                success_criteria: "A recovery plan presented to the lender with legal advice taken, and the outcome documented in writing."
                cadence: phased
                effort_hours_estimate: "20"
              tasks:
                - "Confirm the covenant figures and the clauses involved"
                - "Brief your solicitor before contacting the lender"
                - "Prepare a recovery plan with leasing and cost actions"
                - "Document the lender's response and any waiver"
            - name: Headlease and ground rent restructuring
              description: |-
                ## Purpose
                Some assets are held on a long headlease with a ground rent geared to income, a short unexpired term or restrictive user clauses, all of which cap value. Negotiating an extension, a change to the rent basis or a buy-out of the freehold can add more value than any leasing move, but takes careful preparation.

                ## Milestones
                1. The headlease terms, unexpired term and ground rent basis summarised.
                2. The effect of the headlease on value explained by your valuer.
                3. Options such as extension, rent re-basing or freehold purchase costed.
                4. An approach to the freeholder agreed with the owner and solicitor.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A paper comparing headlease restructuring options with their value effect and an agreed approach to the freeholder."
                cadence: phased
                effort_hours_estimate: "15"
              tasks:
                - "Summarise the headlease term, ground rent and restrictions"
                - "Ask your valuer how the headlease affects value"
                - "Cost each restructuring option"
                - "Agree the approach to the freeholder with the owner"
            - name: Service charge apportionment model rebuild
              description: |-
                ## Purpose
                Apportionment methods inherited from previous owners are often out of date after units are split, combined or remeasured, leaving some tenants overpaying and the owner absorbing shortfalls. Rebuilding the model on current measured areas, sensible weightings and separate schedules for shared services makes the service charge fair and defensible.

                ## Milestones
                1. Current measured areas for every unit confirmed.
                2. Cost schedules set up for services that benefit only some tenants, such as lifts or air conditioning.
                3. The new apportionment compared with the old and with each lease's wording.
                4. Changes agreed with your surveyor and explained to tenants before the next budget.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A rebuilt apportionment model on current areas with separate service schedules, checked against the leases and explained to tenants."
                cadence: one-shot
                effort_hours_estimate: "12"
              tasks:
                - "Confirm the measured area of every unit"
                - "Group costs into schedules by which tenants benefit"
                - "Compare the new apportionment with the old and the leases"
                - "Explain the changes to tenants before the next budget"
            - name: Strategy for a building facing obsolescence
              description: |-
                ## Purpose
                Older offices and secondary retail can lose occupiers to newer buildings, tighter energy rules and changing ways of working, until no sensible amount of capex keeps them competitive. Facing this early, by testing whether the building can be repositioned, sold or redeveloped, protects the owner from holding an asset that only declines.

                ## Milestones
                1. Evidence of obsolescence gathered: rents, voids, occupier feedback and energy rating against competing stock.
                2. Repositioning, sale and redevelopment routes costed at a high level.
                3. The timing of each route matched to lease expiries and loan maturity.
                4. A recommended route agreed with the owner and added to the business plan.

                ## Notes
                Ask the agent to summarise competing buildings' specifications and rents so the comparison uses market evidence, then check it yourself.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A recommendation paper comparing repositioning, sale and redevelopment, with timing matched to leases and debt, approved by the owner."
                cadence: phased
                effort_hours_estimate: "20"
              tasks:
                - "Gather rent, void and energy evidence against competing buildings"
                - "Cost repositioning, sale and redevelopment at a high level"
                - "Map each route against lease expiries and the loan maturity"
                - "Present the recommended route to the owner"
---

# Commercial Property Asset Management

Commercial asset management is the work that starts the day a purchase completes: turning an office building, a parade, a business park or a warehouse into the income and value the acquisition case promised. It is written for asset managers working for an owner or a fund, and for small business owners who hold a few commercial units themselves. The projects run from taking over the asset and writing its business plan, through the monthly and yearly machinery of performance reviews, collections, service charges, inspections and capex tracking, into the knowledge behind leases, dilapidations and energy rules, then the decisions on leasing strategy, refurbishment and hold or sell, dated events such as valuations, tenant failures and sales, different owner situations and finally specialist work on headleases, apportionment and obsolete buildings.

The rhythms are a monthly performance review and owner summary, weekly arrears checks around quarter days, monthly compliance, capex and energy checks, quarterly inspections, tenant covenant watch, agent reviews and loan covenant tests, and a yearly tenant survey, service charge budget, reconciliation, business plan refresh and hold or sell review. Vendor suits the managing agent appointment, Risk register suits the asset risk log, Metrics log suits the monthly performance review, Meeting notes suits the valuation and tenant meetings, Feedback themes suits the tenant survey and Onboarding 30/60/90 suits a new asset manager. None of this is legal, tax, valuation or investment advice: take those calls with your solicitor, accountant, surveyor and the owner's advisers. Installing adds all 50 projects as active, so archive the ones that are not for you yet.
