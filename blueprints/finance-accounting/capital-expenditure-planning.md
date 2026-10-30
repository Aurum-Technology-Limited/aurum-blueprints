---
id: finance-accounting.capital-expenditure-planning
name: Capital Expenditure Planning
description: "A capital policy, house appraisal assumptions, business cases a panel can decide on, monthly spend against approval and post-investment reviews, from a first van to a group capital programme."
category: business
version: 1.0.0
tags: [finance-accounting, capital-expenditure-planning, manager, enterprise, small-business, business-case, payback, capital-budgeting]
author: Aurum Technology
starter_structure:
  templates:
    - purchase-decision
    - risk-register
    - board-meeting
    - vendor
    - metrics-log
    - meeting-notes
  pillars:
    - name: Finance & Accounting
      emoji: "🧾"
      description: "The money side of a business: bookkeeping and the monthly close, cash flow, budgeting and forecasting, billing and collections, payroll, tax, audit and financial controls."
      pillarFrontmatter:
        review_cadence: monthly
      areas:
        - name: Capital Expenditure Planning
          description: "Planning and approving major investments in equipment, property or systems with business cases, payback analysis and post-investment checks."
          projects:
            - name: Capital expenditure policy and approval scope
              description: |-
                ## Purpose
                Capital requests in most growing businesses arrive as an email asking for a new machine by Friday, and approval depends on who asks loudest. A short policy that says which spend goes through the capital process, the value above which a written business case is needed, who reviews it and how unbudgeted needs are handled gives every manager the same route. It sits alongside the capitalisation policy used for the accounts but answers a different question: not how spend is booked, but how it is decided.

                ## Milestones
                1. A written definition of capital expenditure for decision purposes, covering equipment, property works, vehicles and systems.
                2. A value above which a full business case is required, and a lighter form below it.
                3. The route from request to approval named, with the approval limits taken from your authority matrix.
                4. A rule for urgent replacements and safety spend that cannot wait for the next review.
                5. The policy signed by the managing director or finance director and saved where managers can find it.

                ## Notes
                Keep it to two pages. A long policy is skipped; a short one with a clear threshold is followed.

                Before you start: this plan is general information to help you organise your own money decisions. It is not financial, investment, tax or legal advice. Check decisions that matter with a qualified, licensed adviser in your country, and remember that investing and trading can lose money.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A signed capital expenditure policy stating the business case threshold, the approval route and the urgent spend rule is saved in the finance folder."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "List the capital purchases made in the last two years and how each was approved"
                - "Draft the business case threshold and the lighter form limit"
                - "Write the urgent replacement rule with a named approver"
                - "Circulate the draft to department heads for one round of comments"
                - "Check the capital policy thresholds still fit the size of the business @recurring(yearly)"
            - name: Capital project categories and their tests
              description: |-
                ## Purpose
                Replacing a failed compressor, meeting a new fire regulation and opening a second site should not be judged by the same test, yet many capital plans rank them on payback alone. Sorting every request into sustaining, compliance, efficiency and growth categories, each with its own evidence standard, stops safety work losing to exciting projects and stops growth bets hiding as replacements.

                ## Milestones
                1. Four or five categories defined, such as sustaining, health and safety or compliance, efficiency, growth and strategic.
                2. The evidence each category must provide written in one line, for example a condition report for sustaining or a regulation reference for compliance.
                3. A rule written for requests that fit two categories.
                4. Last year's capital spend sorted into the categories to show the current mix.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Every capital request from now on carries one of four or five defined categories, and last year's spend has been sorted into them."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Pull last year's capital purchases into one list"
                - "Draft four or five categories with the evidence each needs"
                - "Tag each of last year's purchases with a category"
                - "Add the category field to the capital request form"
            - name: Three-year list of known capital needs
              description: |-
                ## Purpose
                Ask most managers what they will need to replace in the next three years and the answers live in their heads: the forklift on its last service, the roof that leaks in heavy rain, the server warranty that ends next spring. Gathering those into one list, with a rough cost and year for each, is the raw material for every later decision and usually reveals spend nobody had budgeted.

                ## Milestones
                1. Every department head asked for the assets, works and systems they expect to replace or add in three years.
                2. One list holding each need with a rough cost, the expected year and the reason.
                3. Duplicate and overlapping requests merged.
                4. The total by year compared with what the business has spent on capital in recent years.
              priority: high
              deadlineOffsetDays: 45
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A single list of expected capital needs for the next three years, with a rough cost and year for each, covers every department."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Send department heads a short form asking what they expect to replace or add"
                - "Walk the site with the operations lead to spot needs missing from the forms"
                - "Merge the replies into one list with cost, year and reason"
                - "Total the list by year and compare it with recent capital spend"
            - name: Asset condition and age survey
              description: |-
                ## Purpose
                Replacement planning built on purchase dates alone misses the van with double the normal mileage and the ten-year-old machine that still runs like new. A survey recording the age, condition, maintenance cost and failure history of the main assets lets the capital plan replace things when the evidence says so, rather than when they break or when a salesperson calls.

                ## Milestones
                1. The main assets listed from the fixed asset register, with purchase year and expected life.
                2. A simple condition score from one to five agreed with the people who use and maintain each asset.
                3. Maintenance cost and breakdowns for the last two years added for the largest items.
                4. Assets scoring one or two flagged for the capital needs list.
              priority: medium
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "The main assets each carry a condition score, age and two-year maintenance cost, and every poorly scored asset appears on the capital needs list."
                cadence: cyclic
              tasks:
                - "Export the main assets and purchase dates from the fixed asset register"
                - "Agree a one to five condition score with the maintenance lead"
                - "Add two years of repair invoices for the largest assets"
                - "Rescore asset condition with the maintenance team @recurring(yearly)"
            - name: Hurdle rate and appraisal assumptions sheet
              description: |-
                ## Purpose
                Two business cases using different discount rates, inflation figures and appraisal periods cannot be compared, and the one with the most generous assumptions usually wins. One sheet of house assumptions, agreed by the finance director with input from your accountant or adviser, means every case is tested against the same hurdle and every reviewer can spot when a request departs from it.

                ## Milestones
                1. A hurdle rate or discount rate for appraisals agreed and recorded with a sentence on how it was set.
                2. Standard assumptions for inflation, tax rate, appraisal period and residual values written down.
                3. A rule for when a higher hurdle applies, such as new markets or untested technology.
                4. The sheet dated, version numbered and linked from the business case template.

                ## Notes
                The hurdle rate is a judgement for the finance director and board, usually informed by the cost of borrowing and what shareholders expect. Ask your adviser to sense check it rather than copying a figure from elsewhere.
              priority: high
              deadlineOffsetDays: 45
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A dated assumptions sheet with an agreed hurdle rate, inflation, tax rate and appraisal period is linked from the business case template."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Collect the discount rates and assumptions used in the last three business cases"
                - "Ask the finance director to propose a hurdle rate with the reasoning"
                - "Ask your accountant or adviser to sense check the rate and assumptions"
                - "Publish the sheet with a version number and date"
                - "Review the hurdle rate and assumptions against current borrowing costs @recurring(yearly)"
            - name: Capital request form and business case template
              description: |-
                ## Purpose
                Panels waste most of their time asking for missing information: what happens if we do nothing, what else was considered, when the cash goes out. A standard template that puts the options, cash flows, risks and benefits in the same order every time makes requests quicker to write, easier to compare and harder to pad.

                ## Milestones
                1. A short request form for spend below the business case threshold.
                2. A full template with sections for need, options including doing nothing, costs, benefits, cash flow timing, risks and measures of success.
                3. A linked spreadsheet that calculates payback, net present value and internal rate of return from the house assumptions.
                4. The template tested on one real request and revised.
              priority: high
              deadlineOffsetDays: 45
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A short form, a full business case template and a linked appraisal spreadsheet are published and have been used for at least one real request."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Gather two or three past business cases that reviewers found clear"
                - "Draft the template sections in the order reviewers read them"
                - "Build the appraisal tab that pulls from the assumptions sheet"
                - "Test the template with one manager on a live request"
            - name: Capital review panel terms of reference
              description: |-
                ## Purpose
                Once requests follow a template, somebody has to read them with the same eyes every time. Written terms of reference for a small capital review panel, covering its members, quorum, meeting rhythm and the decisions it can make or must refer upward, stop approvals depending on who happens to be in the office. The financial limits come from your delegation of authority; the panel's job is to test the case.

                ## Milestones
                1. Three to five panel members named, including finance and operations.
                2. Meeting frequency, quorum and the route for urgent requests out of cycle written down.
                3. The panel's decision options defined: approve, approve with conditions, defer, decline or refer upward.
                4. The terms approved by the managing director or the board.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Approved terms of reference name the panel members, quorum, meeting rhythm and the decisions the panel can make."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Name the three to five people who should sit on the panel"
                - "Write the quorum and the out-of-cycle route for urgent requests"
                - "List the decisions the panel can make and those it must refer upward"
                - "Get the terms approved by the managing director"
            - name: Capital project register
              description: |-
                ## Purpose
                Ask how many capital projects are live, how much was approved and how much has been spent, and most finance teams need a day to answer. A register holding every request from submission to post-investment review, with status, approved value, spend to date and owner, answers it in a minute and becomes the source for every report in this area.

                ## Milestones
                1. A register with columns for reference, title, category, owner, status, approved value, committed, spent and expected completion.
                2. A numbering scheme for capital projects that matches the codes used in the ledger.
                3. Every open and approved project from the last year entered.
                4. Status values limited to a short list, such as submitted, approved, in progress, complete and reviewed.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A register lists every capital request from the last year with status, approved value and spend to date, and is updated monthly."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Set up the register columns in a shared spreadsheet or the finance system"
                - "Agree a numbering scheme with whoever runs the ledger codes"
                - "Enter every open and approved capital project from the last year"
                - "Update status and spend for every live project in the register @recurring(monthly:8)"
            - name: Project codes for tracking capital spend
              description: |-
                ## Purpose
                Spend on an approved project often lands in a general equipment account mixed with everything else, so nobody can tell whether the new production line is on budget. Giving each approved project its own code in the accounting system, and making every purchase order carry it, lets spend be pulled by project in seconds and checked against what was approved.

                ## Milestones
                1. A project or job code created in the accounting system for each approved capital project.
                2. Purchase orders and supplier bills for capital projects required to carry the code.
                3. A report showing spend by project code, run and checked against the register.
                4. Codes closed once a project completes and its cost is handed to whoever keeps the asset register.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Every live capital project has its own code, and a spend by project report agrees to the register at month end."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Check how your accounting system handles project, job or class codes"
                - "Create a code for each approved capital project in the register"
                - "Tell purchasing and accounts payable that capital orders must carry the code"
                - "Look for capital invoices posted without a project code @recurring(monthly:3)"
            - name: Annual capital plan round
              description: |-
                ## Purpose
                Capital approved one request at a time tends to go to whoever asks first, and the year's budget is gone by the third month. Running one round a year, with a call for bids, a common deadline, a ranking meeting and a single approved plan, lets the business compare every claim on its capital at once and keep a reserve for surprises.

                ## Milestones
                1. A timetable for the round set to finish before the operating budget is signed off.
                2. A call for bids issued with the template, assumptions sheet and deadline.
                3. All bids ranked in one meeting using the agreed scoring.
                4. An approved capital plan for the year, with a contingency reserve, recorded in the register.
              priority: high
              frontmatter:
                mode: operating
                output_kind: deliverable
                success_criteria: "An approved annual capital plan with ranked projects and a contingency reserve is signed off before the operating budget each year."
                cadence: cyclic
              tasks:
                - "Pick the month the round must finish so it feeds the operating budget"
                - "Issue the call for capital bids with the template and deadline @recurring(yearly)"
                - "Hold the ranking meeting and record each decision"
                - "Publish the approved plan and tell each requester the outcome"
            - name: Monthly capital spend against authorisation
              description: |-
                ## Purpose
                Overruns are cheap to fix at 30 percent complete and expensive at 90. A short monthly report showing, for each live project, the approved value, orders committed, invoices paid and the forecast to complete gives project owners and the panel a chance to act while there is still room to.

                ## Milestones
                1. A one-page report pulled from the register and the project codes.
                2. Forecast to complete supplied by each project owner, not assumed from spend to date.
                3. Projects forecasting more than their approved value highlighted.
                4. The report sent to the panel by an agreed working day each month.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A monthly report showing approved, committed, spent and forecast to complete for every live project reaches the panel for twelve consecutive months."
                cadence: rolling
              tasks:
                - "Design a one-page layout with approved, committed, spent and forecast columns"
                - "Ask each project owner for a forecast to complete @recurring(monthly:10)"
                - "Send the capital spend report to the panel @recurring(monthly:12)"
                - "Flag any project forecasting above its approved value"
            - name: Quarterly reforecast of capital spend phasing
              description: |-
                ## Purpose
                Almost every capital project slips, so a plan that assumed the new warehouse racking would be paid for in March can leave the cash forecast and lending headroom wrong by the summer. Rephasing the expected spend each quarter, project by project, and passing the result to whoever owns the cash forecast keeps the two in step.

                ## Milestones
                1. Expected spend for each live and approved project set out by month for the next four quarters.
                2. Slippage since the last quarter explained in one line per project.
                3. Projects that will not start this year identified for deferral or re-approval.
                4. The rephased totals handed to the cash forecast owner.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Four consecutive quarterly reforecasts of capital spend by month are completed and reflected in the cash flow forecast."
                cadence: rolling
              tasks:
                - "Set out expected spend by month for each live project"
                - "Rephase capital spend with each project owner and note slippage @recurring(quarterly)"
                - "Send the rephased totals to whoever owns the cash forecast"
                - "List approved projects that will not start this year"
            - name: Capital review panel meeting cycle
              description: |-
                ## Purpose
                Terms of reference only matter if the panel actually meets. A fixed monthly meeting with papers out three working days ahead, a standing agenda and a decisions log means requesters know when they will get an answer and nobody has to chase approvals in corridors.

                ## Milestones
                1. A monthly meeting date in every member's calendar for the year.
                2. A paper deadline three working days before each meeting.
                3. A standing agenda: new requests, change requests, the monthly spend report and post-investment reviews due.
                4. A decisions log recording each outcome, its conditions and the reason.

                ## Notes
                Start from the **Meeting notes** template for each meeting's record.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "The panel meets monthly for six consecutive months with papers circulated on time and every decision logged."
                cadence: rolling
              tasks:
                - "Book the monthly panel meetings for the next twelve months"
                - "Write the standing agenda and the paper deadline"
                - "Circulate panel papers three working days before the meeting @recurring(monthly:15)"
                - "Record each decision and its conditions in the decisions log"
            - name: Overrun and change request procedure
              description: |-
                ## Purpose
                Without a rule for overruns, a project approved at one figure quietly becomes a project costing much more, and nobody approved the difference. A change request procedure that requires fresh approval once forecast cost exceeds the approved value by an agreed margin, with a revised case for larger changes, keeps the original decision honest.

                ## Milestones
                1. A tolerance agreed, such as 10 percent or a fixed amount, beyond which a change request is needed.
                2. A one-page change request form covering the new cost, the reason, the options and the effect on returns.
                3. A rule that larger overruns or scope changes need a revised business case.
                4. Change requests logged in the register alongside the original approval.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every project that went beyond its tolerance in the last year has an approved change request recorded in the register."
                cadence: rolling
              tasks:
                - "Agree the overrun tolerance with the finance director"
                - "Draft a one-page change request form"
                - "Set the threshold above which a revised business case is required"
                - "Add a change request column to the capital project register"
            - name: Post-investment review programme
              description: |-
                ## Purpose
                Most businesses approve capital with care and never look back, so the same optimistic assumptions are made again next year. Reviewing each significant project six to eighteen months after completion, against the costs, timing and benefits promised in its case, tells you which estimates to trust and which project owners deliver.

                ## Milestones
                1. A rule for which projects get a review, such as all above the business case threshold.
                2. A short review template comparing promised and actual cost, timing and benefits.
                3. A review date set for each completed project in the register.
                4. Findings presented to the panel and lessons added to the lessons register.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every project above the business case threshold completed more than a year ago has a written post-investment review presented to the panel."
                cadence: rolling
              tasks:
                - "Choose which completed projects need a post-investment review"
                - "Draft a review template that mirrors the business case sections"
                - "Check the register for post-investment reviews now due @recurring(quarterly)"
                - "Present completed reviews at the next panel meeting"
            - name: Benefits realisation log
              description: |-
                ## Purpose
                Benefits promised in a business case, such as fewer breakdowns, lower energy bills or extra units per shift, fade from memory once the new kit arrives. Logging the promised measure, its baseline and the actual figure each month for the larger projects gives the post-investment review real numbers instead of impressions.

                ## Milestones
                1. A log listing each project's promised benefits with a measurable figure and an owner.
                2. A baseline recorded before the project started, or rebuilt from past records.
                3. Actual figures entered monthly for at least the first year.
                4. Gaps between promised and actual explained in a line each quarter.

                ## Notes
                Start from the **Metrics log** template. Pick two or three measures per project; with more than that, nobody updates them.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Twelve months of actual benefit figures against baseline are logged for every project above the business case threshold."
                cadence: rolling
              tasks:
                - "Pull the promised benefits from each approved business case"
                - "Record the baseline figure for each benefit measure"
                - "Enter actual benefit figures for each project @recurring(monthly:25)"
                - "Write one line explaining any large gap"
            - name: Rolling five-year capital plan
              description: |-
                ## Purpose
                Big replacements like a roof, a vehicle fleet or a core system come round every few years and can swamp a single year's budget if nobody sees them coming. A five-year plan, rolled forward each year from the needs list and the condition survey, shows the peaks early enough to save for them, stagger them or arrange funding.

                ## Milestones
                1. Known and expected capital needs set out by year for five years.
                2. Peaks above the usual annual capital spend highlighted.
                3. Options noted for each peak: bring forward, defer, phase or fund.
                4. The plan shared with the board or owners alongside the annual budget.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: artifact
                success_criteria: "A five-year capital plan by year and category is rolled forward and shared with the owners or board each year."
                cadence: cyclic
              tasks:
                - "Lay out the three-year needs list across five years"
                - "Highlight years where planned spend exceeds the usual level"
                - "Note an option for handling each peak year"
                - "Roll the five-year plan forward one year @recurring(yearly)"
            - name: Lessons register for capital projects
              description: |-
                ## Purpose
                The same mistakes recur across capital projects: installation costs left out, building works discovered late, training forgotten, benefits counted twice. Keeping a short register of lessons from post-investment reviews and project closures, and checking new cases against it, turns past pain into a checklist.

                ## Milestones
                1. A register with the lesson, the project it came from and the change it implies.
                2. Lessons from at least three past projects recorded.
                3. The most common lessons turned into questions on the business case template.
                4. The register reviewed each quarter by the panel.
              priority: low
              frontmatter:
                mode: operating
                output_kind: knowledge
                success_criteria: "A lessons register with entries from at least three projects exists, and its top lessons appear as questions in the business case template."
                cadence: rolling
              tasks:
                - "Ask two experienced project owners what they would do differently"
                - "Record each lesson with its source project"
                - "Add the three most common lessons as template questions"
                - "Review new lessons at the panel meeting @recurring(quarterly)"
            - name: Payback and discounted payback by hand
              description: |-
                ## Purpose
                Payback is the measure owners ask about first and the one most often miscalculated, usually by ignoring the timing of cash or the cost of waiting. Working three real examples by hand, simple and discounted, builds a feel for when payback is a fair test and when it hides a project that keeps paying long after.

                ## Milestones
                1. Simple payback calculated by hand for three past or proposed projects.
                2. Discounted payback calculated for the same three at the house hurdle rate.
                3. A note on why the two answers differ for each.
                4. One example found where payback would reject a project with a positive net present value.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Three worked examples of simple and discounted payback, each with a note on the difference, are saved in the finance folder."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Choose three past or proposed projects with known cash flows"
                - "Work out simple payback for each with a calculator"
                - "Recalculate each using discounted cash flows at the hurdle rate"
                - "Write a note on when payback misleads"
            - name: Net present value and internal rate of return in a spreadsheet
              description: |-
                ## Purpose
                Spreadsheet functions for net present value and internal rate of return are easy to misuse: the first cash flow discounted when it should not be, uneven timing ignored, two answers for projects with later outflows. Building the calculation from first principles once, then checking it against the built-in functions, makes you the person who catches these errors in other people's cases.

                ## Milestones
                1. A worksheet that discounts each year's cash flow manually and sums to net present value.
                2. The result matched to the spreadsheet's built-in function, with any timing difference understood.
                3. Internal rate of return calculated and compared with the hurdle rate.
                4. A case with a late outflow, such as decommissioning, tested for multiple or misleading rates.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A worksheet calculating net present value manually and with built-in functions agrees exactly, and a note explains the timing convention used."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Set up yearly cash flows for one real project in a blank worksheet"
                - "Discount each year manually and sum the results"
                - "Compare the result with the built-in net present value function"
                - "Add a late decommissioning outflow and see how the rate of return behaves"
            - name: Incremental cash flows in a business case
              description: |-
                ## Purpose
                The question a business case must answer is what changes because of this decision, and many get it wrong by counting money already spent, overheads that exist anyway or profits simply moved from another product. Learning the rules of incremental cash flows, covering sunk costs, opportunity costs, working capital and cannibalisation, makes your cases defensible.

                ## Milestones
                1. A one-page checklist of what belongs and what does not belong in a capital case.
                2. Two past business cases reviewed against the checklist with errors noted.
                3. Working capital effects, such as extra stock or debtors, included in a worked example.
                4. The checklist added to the business case template.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A checklist of incremental cash flow rules is attached to the business case template after being tested against two past cases."
                cadence: phased
                effort_hours_estimate: "5"
              tasks:
                - "Read a textbook chapter or course module on relevant cash flows"
                - "Write a checklist of items to include and exclude"
                - "Review two past business cases against the checklist"
                - "Add the checklist to the business case template"
            - name: Sensitivity and scenario testing for capital cases
              description: |-
                ## Purpose
                A single-figure business case invites the question nobody can answer in the meeting: what if volumes are 20 percent lower? Testing each case against its few critical assumptions, and showing a downside, base and upside scenario, lets the panel see how much has to go wrong before the investment loses money.

                ## Milestones
                1. The three to five assumptions that move the result most identified for a live case.
                2. A table showing net present value as each assumption moves up and down.
                3. Break-even values found, such as the volume at which net present value is zero.
                4. Downside, base and upside scenarios presented together.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A live business case includes a sensitivity table, break-even values for its key assumptions and three scenarios."
                cadence: phased
                effort_hours_estimate: "5"
              tasks:
                - "Pick the live case with the largest value"
                - "List the assumptions the result depends on most"
                - "Build a table flexing each assumption up and down by a set amount"
                - "Calculate the break-even value for the most sensitive assumption"
            - name: Total cost of ownership for equipment and systems
              description: |-
                ## Purpose
                Purchase price is often less than half of what an asset costs over its life once installation, training, consumables, maintenance contracts, energy, downtime and disposal are added. Learning to build a total cost of ownership comparison stops the cheapest quote winning when it is the dearest over seven years.

                ## Milestones
                1. A cost of ownership template with lines for acquisition, installation, running, maintenance, downtime and disposal.
                2. One real comparison of two options completed over the expected life.
                3. Discounting applied so costs years apart are compared fairly.
                4. The template linked from the business case template.
              priority: low
              frontmatter:
                mode: learning
                output_kind: artifact
                success_criteria: "A total cost of ownership comparison of two real options over their expected life, using the house discount rate, is complete."
                cadence: phased
                effort_hours_estimate: "5"
              tasks:
                - "List every cost an asset incurs from order to disposal"
                - "Build the cost of ownership template with those lines"
                - "Compare two real options over their expected life"
                - "Ask the maintenance lead to check the running cost estimates"
            - name: Challenging a supplier's return on investment claim
              description: |-
                ## Purpose
                Suppliers of machinery, software and energy systems routinely provide a return on investment sheet, and it is written to sell. Learning to unpick one, finding which savings assume full utilisation, which ignore your own costs and which double count, protects the business from buying on a brochure figure.

                ## Milestones
                1. One supplier return on investment claim taken apart line by line.
                2. Each saving traced to an assumption and marked as verified, plausible or doubtful.
                3. Costs the supplier left out added back.
                4. A revised return calculated on your own assumptions.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A supplier's return on investment sheet has been recalculated on house assumptions, with each saving marked verified, plausible or doubtful."
                cadence: phased
                effort_hours_estimate: "3"
              tasks:
                - "Ask a current supplier for their return on investment workings in a spreadsheet"
                - "Ask the agent to list every assumption behind the supplier's savings"
                - "Mark each saving as verified, plausible or doubtful"
                - "Recalculate the return using house assumptions"
            - name: Tax effects in capital appraisal
              description: |-
                ## Purpose
                Tax relief on capital spend changes the timing of cash and sometimes tips a decision, but the rules on allowances, incentives and the treatment of leases vary by country and change often. Learning how your tax system treats capital spend, in enough depth to ask the adviser good questions and to put the effects in the right year, keeps business cases realistic.

                ## Milestones
                1. A summary of how your tax system gives relief for equipment, buildings and software, checked by your tax adviser.
                2. The timing of tax payments understood so relief lands in the right year in a cash flow.
                3. A worked example showing net present value before and after tax effects.
                4. A rule for when the adviser must review a case, such as above a set value or for property.

                ## Notes
                This is about putting tax in the right place in the model, not about tax planning. Your adviser confirms the treatment for each significant case.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A one-page summary of tax relief on capital spend, checked by your tax adviser, and a worked before and after tax example are saved."
                cadence: phased
                effort_hours_estimate: "5"
              tasks:
                - "Ask your tax adviser for a short note on relief for capital spend"
                - "Write a one-page summary in your own words"
                - "Rework one business case with tax effects in the right years"
                - "Agree when the adviser must review a capital case"
            - name: Writing a business case a panel can decide on
              description: |-
                ## Purpose
                Good projects get declined because the case buries the decision under twenty pages of background, while weak ones pass on confident prose. Practising a clear structure, with the decision asked for on page one, options including doing nothing, the numbers in one table and the risks stated plainly, makes cases faster to approve and harder to argue with.

                ## Milestones
                1. A one-page summary format agreed with the panel chair.
                2. One past case rewritten in the new format.
                3. The rewritten case reviewed by someone outside finance for clarity.
                4. The format added as the first page of the business case template.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: artifact
                success_criteria: "A one-page decision summary format is agreed with the panel chair and sits at the front of the business case template."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Ask the panel chair what they want to see on the first page"
                - "Ask the agent to draft a one-page summary from a past business case"
                - "Edit the summary until the decision, numbers and risks fit on one page"
                - "Have a manager outside finance read it and say what is unclear"
            - name: Lease, hire purchase or buy decision
              description: |-
                ## Purpose
                Equipment can be bought outright, financed over time or leased, and the option with the lowest monthly payment is often the dearest overall. Comparing the options on the same basis, the present value of all payments, tax effects, maintenance terms, flexibility at the end and the effect on borrowing headroom, gives a decision you can explain to the bank and the board.

                ## Milestones
                1. Quotes for buying, financing and leasing the same asset obtained on comparable terms.
                2. The present value of each option calculated at the house discount rate.
                3. End-of-term options, maintenance responsibility and early exit costs compared.
                4. The accounting and tax effect of each option confirmed with your accountant.
                5. A decision recorded with the reason.

                ## Notes
                Start from the **Purchase decision** template. How a lease is shown in the accounts is a separate question for whoever runs lease accounting.
              priority: medium
              deadlineOffsetDays: 30
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A recorded decision for one asset compares buy, finance and lease options on present value, terms and accounting effect."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Request buy, finance and lease quotes for the same asset"
                - "Put all payments for each option into one comparison"
                - "Discount each option at the house rate"
                - "Ask your accountant how each option affects the accounts and tax"
                - "Record the lease or buy decision and the reason"
            - name: Repair, refurbish or replace decision
              description: |-
                ## Purpose
                Ageing plant creates a recurring argument between the engineer who wants a new machine and the accountant who wants one more year out of the old one. Setting the three options side by side, with repair history, refurbishment quotes, replacement cost, downtime risk and the remaining life of each, turns the argument into a decision with a review date.

                ## Milestones
                1. Two years of repair costs and downtime for the asset gathered.
                2. A refurbishment quote and its expected extra life obtained.
                3. Replacement cost and lead time confirmed.
                4. The three options compared on annual equivalent cost.
                5. A decision recorded with the date it will be revisited.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A recorded decision for one ageing asset compares repair, refurbish and replace on annual equivalent cost, with a review date."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Pull two years of repair invoices and downtime records for the asset"
                - "Ask the supplier for a refurbishment quote and expected extra life"
                - "Get a replacement price and lead time"
                - "Compare the three options on annual equivalent cost"
            - name: Scoring matrix for ranking capital requests
              description: |-
                ## Purpose
                When ten bids compete for the money that will fund five, net present value alone favours big growth bets and ignores safety, compliance and strategic fit. A scoring matrix that combines financial return with risk reduction, strategic fit and deliverability, with weights agreed before the bids arrive, makes the ranking defensible to the managers whose bids lose.

                ## Milestones
                1. Four to six criteria chosen, with financial return as one of them.
                2. Weights agreed by the leadership team before the annual round.
                3. A scoring guide describing what a low, middle and high score look like for each criterion.
                4. Last year's approved projects rescored to test whether the matrix gives sensible answers.
              priority: medium
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A weighted scoring matrix with a written guide is agreed before the annual round and tested on last year's projects."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Draft four to six criteria including financial return"
                - "Ask the leadership team to agree weights before bids arrive"
                - "Write what a low, middle and high score looks like for each criterion"
                - "Rescore last year's projects to test the matrix"
            - name: Capital rationing when bids exceed the budget
              description: |-
                ## Purpose
                In most years the bids add up to two or three times the money available, and approving projects in order of net present value can sink the budget into one large project when several smaller ones return more per unit spent. Ranking by return per unit of capital, funding must-do compliance spend first and checking which projects can be split or delayed gets the most from a fixed sum.

                ## Milestones
                1. Must-do compliance and safety spend ring-fenced first.
                2. Remaining bids ranked by profitability index or score per unit of capital.
                3. Projects that can be phased, delayed or scaled down identified.
                4. A funded list and a reserve list approved, with the reasons for exclusions recorded.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "An approved funded list and reserve list for the year are recorded, with must-do spend ring-fenced and exclusions explained."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Separate must-do compliance and safety bids from the rest"
                - "Calculate a profitability index for each remaining bid"
                - "Mark the bids that can be phased or scaled down"
                - "Publish the funded list and the reserve list"
            - name: Stage-gate approval for large projects
              description: |-
                ## Purpose
                Approving a large project in one go commits the whole sum on the strength of early estimates that may be 30 percent out. Splitting it into gates, such as feasibility, design, procurement and delivery, each with its own approval and a firmer estimate, lets the business stop or reshape the project before most of the money is spent.

                ## Milestones
                1. The project size that requires stage gates agreed, such as several times the business case threshold.
                2. Three to five gates defined with what must be known at each.
                3. The spend allowed before each gate capped.
                4. One current large project put through the first gate.
              priority: medium
              deadlineOffsetDays: 90
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A stage-gate procedure is approved and one large project has passed its first gate with a firmer estimate recorded."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Agree the project size that triggers stage gates"
                - "Define what must be known at each gate"
                - "Set the spending cap before each gate"
                - "Put one current large project through the first gate"
            - name: Tendering for major capital purchases
              description: |-
                ## Purpose
                Single quotes for a large machine or building works leave money on the table and invite questions from auditors and owners. Running a simple tender, with a written specification, three or more invited suppliers, a fixed return date and an evaluation on price, cost of ownership and service, gives a choice you can defend.

                ## Milestones
                1. A written specification agreed with the users and the maintenance lead.
                2. Three or more suppliers invited with the same specification and return date.
                3. Bids scored on price, cost of ownership, delivery, service and references.
                4. The award decision and its reasons filed with the business case.

                ## Notes
                Start from the **Vendor** template for the winning supplier's record. Check whether your organisation has procurement rules that set a value above which tenders are required.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A tender for one major purchase has at least three scored bids and a recorded award decision filed with the business case."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Write the specification with the people who will use the asset"
                - "Invite at least three suppliers with the same return date"
                - "Score each bid on price, cost of ownership and service"
                - "Take up references for the preferred supplier"
                - "File the award decision with the business case"
            - name: Contingency setting for capital projects
              description: |-
                ## Purpose
                A flat 10 percent contingency on every project is too much for a standard vehicle and far too little for building works in an old property. Setting contingency from a short risk assessment of each project, and controlling who may draw on it, gives a figure that reflects real uncertainty and stops it turning into spare budget.

                ## Milestones
                1. Typical contingency ranges set for each category, from off-the-shelf purchases to building works.
                2. The main risks for each large project listed with likelihood and cost if they occur.
                3. Contingency for each project set from its risk list and shown separately in the approval.
                4. A rule that drawing on contingency needs the panel chair's agreement.

                ## Notes
                Start from the **Risk register** template for each large project's risk list.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Each approved project above the business case threshold shows contingency separately, set from a written risk list."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Set default contingency ranges for each project category"
                - "List the main risks for the largest live project"
                - "Price the cost of each risk if it happens"
                - "Agree who can approve a drawdown of contingency"
            - name: Energy and carbon in capital appraisal
              description: |-
                ## Purpose
                Lighting, heating, motors, vehicles and solar panels all carry energy savings that swing with prices, and many lenders, investors and customers now ask about emissions too. Adding energy use and emissions to the appraisal, with a stated energy price assumption and, if the board chooses, an internal carbon price, makes efficiency projects comparable with the rest and shows the emissions effect of every major purchase.

                ## Milestones
                1. Energy price assumptions added to the house assumptions sheet.
                2. An energy and emissions line added to the business case template.
                3. A decision recorded on whether to use an internal carbon price and at what level.
                4. One efficiency project appraised with and without an energy price sensitivity.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "The assumptions sheet carries energy price assumptions, the template has an emissions line and the carbon price decision is recorded."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Gather the last twelve months of energy bills by site"
                - "Add an energy price assumption to the assumptions sheet"
                - "Add energy use and emissions lines to the business case template"
                - "Ask the board whether to use an internal carbon price"
            - name: Board approval paper for a major investment
              description: |-
                ## Purpose
                Investments above the managing director's limit go to the board, and a paper that arrives late or reads like a sales pitch will be deferred a month. Preparing the paper to the board's timetable, with the recommendation, options, funding, returns, risks and answers to the questions directors are likely to ask, gets a decision at the first meeting.

                ## Milestones
                1. The board meeting date and paper deadline confirmed with the company secretary or chair.
                2. A paper of no more than six pages with a one-page summary and appendices.
                3. The funding source and the effect on cash and borrowing set out.
                4. The paper reviewed by the finance director and one non-executive or adviser before circulation.
                5. The board's decision and any conditions recorded in the register.

                ## Notes
                Start from the **Board meeting** template for the meeting itself.
              priority: high
              deadlineOffsetDays: 60
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A board paper for one major investment is circulated on time and the board's decision is recorded in the register."
                cadence: one-shot
                effort_hours_estimate: "12"
              tasks:
                - "Confirm the board date and paper deadline with the chair"
                - "Draft the one-page summary with the recommendation first"
                - "Set out funding and the effect on cash and borrowing"
                - "List the five questions directors are most likely to ask and answer them"
                - "Record the board decision and conditions in the register"
            - name: Installation, commissioning and handover
              description: |-
                ## Purpose
                Between delivery and full use, the hidden costs appear: building works, power upgrades, lost production, training and teething faults. Planning installation and commissioning as a dated event, with acceptance tests agreed before the final payment, protects both the budget and the date the benefits start.

                ## Milestones
                1. An installation plan with dates, site preparation, utilities and downtime agreed with operations.
                2. Acceptance tests written and agreed with the supplier before final payment.
                3. Training for operators and maintenance staff booked.
                4. A signed handover record with manuals, warranties and spare parts lists.
                5. The completion date entered in the register to start the benefits clock.
              priority: medium
              deadlineOffsetDays: 120
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A signed handover record with passed acceptance tests exists before the final supplier payment is released."
                cadence: one-shot
                effort_hours_estimate: "10"
              tasks:
                - "Agree installation dates and downtime with operations"
                - "Write the acceptance tests and send them to the supplier"
                - "Book operator and maintenance training"
                - "Hold the final payment until acceptance tests are signed off"
            - name: Year-end capital carry-forward and cut-off
              description: |-
                ## Purpose
                At the financial year end some approved projects are half finished, some have not started and some are complete but not yet invoiced. Deciding which approvals carry forward, which lapse and must be bid for again, and making sure work done reaches the accounts, stops last year's money becoming an unplanned addition to this year's plan.

                ## Milestones
                1. Every open project in the register reviewed two months before year end.
                2. A rule applied: projects not started lapse unless re-approved, while those in progress carry forward their remaining approval.
                3. Work completed but not yet invoiced reported to whoever prepares the year-end accruals.
                4. Carried-forward amounts added to next year's plan and shown separately.
              priority: medium
              frontmatter:
                mode: event
                output_kind: deliverable
                success_criteria: "At each year end every open project is marked as carried forward or lapsed, and carried-forward sums appear separately in the new plan."
                cadence: cyclic
              tasks:
                - "List every open capital project two months before year end @recurring(yearly)"
                - "Mark each open project as carry forward or lapse"
                - "Send uninvoiced completed work to whoever prepares the year-end accruals"
                - "Show carried-forward amounts separately in next year's plan"
            - name: Premises fit-out or relocation capital project
              description: |-
                ## Purpose
                Moving into new premises or refitting the current ones is often the largest capital outlay a small or mid-sized business makes, and the costs spread across builders, IT, furniture, signage, fees and the landlord's requirements. Budgeting it as one capital project with a single owner and a cost plan by package catches the items that usually get missed, from data cabling to dilapidations on the old site.

                ## Milestones
                1. A cost plan by package: building works, mechanical and electrical, IT and cabling, furniture, signage, fees and moving costs.
                2. Landlord contributions, rent-free periods and dilapidations on the old premises included.
                3. Contingency set to reflect the condition of the building.
                4. Approval obtained and spend tracked against the cost plan monthly.
                5. A final account agreed with the main contractor.
              priority: medium
              deadlineOffsetDays: 180
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A premises project is delivered with a final account agreed and total cost reported against the approved cost plan."
                cadence: phased
                effort_hours_estimate: "20"
              tasks:
                - "List every cost package for the fit-out or move"
                - "Ask your property adviser about landlord contributions and dilapidations"
                - "Get approval for the cost plan with contingency shown separately"
                - "Agree the final account with the main contractor"
            - name: Business systems replacement case
              description: |-
                ## Purpose
                Replacing an accounting, planning or production system rarely pays back on licence savings alone, and the real costs sit in data migration, process change, staff time and running two systems in parallel. Building the case around those costs and the benefits users can actually measure gives a realistic budget and a go-live date that holds.

                ## Milestones
                1. Current system costs and pain points documented with figures where possible.
                2. Implementation costs set out, including internal staff time, migration, parallel running and training.
                3. Benefits expressed as measures, such as days to close, order errors or hours saved.
                4. Subscription and support costs projected over five years.
                5. The case approved through the normal capital route.

                ## Notes
                Some cloud software costs are treated as operating expense rather than capital in the accounts. Ask your accountant early, because it changes which budget pays.
              priority: medium
              deadlineOffsetDays: 90
              frontmatter:
                mode: research
                output_kind: deliverable
                success_criteria: "A systems replacement case with five-year costs, internal staff time and measurable benefits is approved through the capital route."
                cadence: phased
                effort_hours_estimate: "12"
              tasks:
                - "Write down what the current system costs and where it fails"
                - "Estimate internal staff time for migration and testing"
                - "Project subscription and support costs over five years"
                - "Ask your accountant which implementation costs can be capitalised"
            - name: Grant or incentive application for capital equipment
              description: |-
                ## Purpose
                Governments and development agencies in many countries offer grants or incentives for equipment, energy efficiency and export capacity, and they usually require the application before any order is placed. Checking what is available early, preparing the evidence and fitting the timeline around the decision date can cut the net cost of a project noticeably.

                ## Milestones
                1. Schemes that fit the project identified from official government or agency sources.
                2. Eligibility rules, including any ban on ordering before approval, written down.
                3. The application submitted with quotes, the business case and financial statements.
                4. Conditions of any award, such as reporting or repayment if terms are broken, recorded in the register.
              priority: low
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "An application for one scheme is submitted before any order is placed, and award conditions are recorded if it succeeds."
                cadence: one-shot
                effort_hours_estimate: "10"
              tasks:
                - "Search official government and agency sites for equipment schemes"
                - "Write down the eligibility rules and the decision timeline"
                - "Collect quotes and financial statements for the application"
                - "Record award conditions and reporting dates in the register"
            - name: First major equipment purchase for a small business
              description: |-
                ## Purpose
                For a small business, the first big purchase, whether a van, an oven or a cutting machine, can tie up months of profit, and the owner usually decides it alone. A simple one-page case covering the cost, how it will be paid for, what it will earn or save each month and what happens if sales dip takes an evening and stops a good idea becoming a cash problem.

                ## Milestones
                1. The full cost written down, including delivery, installation, insurance and training.
                2. How it will be paid for decided: cash, a loan, finance or a lease.
                3. Monthly earnings or savings estimated with a cautious and a hopeful figure.
                4. The cash position checked for three months after the payment.
                5. A decision made and the one-page case kept with the invoice.

                ## Notes
                Start from the **Purchase decision** template. Talk to your accountant before buying, because the timing of a purchase can affect tax and the way it is financed changes the accounts.
              priority: medium
              deadlineOffsetDays: 30
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A one-page case with full cost, funding, a cautious monthly return and a three-month cash check is completed before the order is placed."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Write down the full cost including delivery, set-up and insurance"
                - "Estimate monthly earnings or savings with a cautious figure"
                - "Check the bank balance three months after the payment"
                - "Ask your accountant about timing and financing before ordering"
            - name: Department manager's first capital request
              description: |-
                ## Purpose
                Managers promoted from operations often see their first capital request sent back three times because finance wanted a different format, a do-nothing option or numbers by year rather than by month. Preparing the request with a finance partner from the start, using the house template and assumptions, gets it approved at the first panel and teaches the process for next time.

                ## Milestones
                1. The need described in a paragraph with the cost of doing nothing.
                2. Two or three options costed, including a cheaper alternative.
                3. Cash flows and benefits checked with a finance partner before submission.
                4. The request submitted by the panel paper deadline.
                5. Feedback from the panel noted for the next request.
              priority: medium
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "A first capital request using the house template is submitted by the paper deadline after a review with a finance partner."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Book thirty minutes with a finance partner to talk through the need"
                - "Write down the cost of doing nothing for a year"
                - "Cost a cheaper alternative alongside the preferred option"
                - "Submit the request by the panel paper deadline"
            - name: Group capital governance across sites and subsidiaries
              description: |-
                ## Purpose
                In a group with several sites or companies, each local team runs capital its own way, and head office sees the spend only when it reaches the consolidated accounts. Common thresholds, a shared template, a single register and a quarterly return from each unit give group finance a view of committed and planned capital across the group without taking every decision away from local managers.

                ## Milestones
                1. Group-wide thresholds for local approval and for referral to group set out.
                2. One business case template and assumptions sheet used by every unit.
                3. A group register fed by each unit's register.
                4. A quarterly capital return from each unit showing approved, committed, spent and planned.
                5. Currency and local tax differences handled consistently in appraisals.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Every unit uses the group template and submits a quarterly capital return feeding one group register."
                cadence: phased
                effort_hours_estimate: "20"
              tasks:
                - "Collect each unit's current capital approval rules"
                - "Draft group thresholds for local approval and referral"
                - "Set up a quarterly capital return format for the units"
                - "Consolidate the unit capital returns into the group register @recurring(quarterly)"
            - name: Buying versus renting business premises
              description: |-
                ## Purpose
                Owner-managed businesses with steady profits often reach the point where rent looks like money thrown away and buying the building seems obvious. The decision ties up a large deposit, changes the risk the business carries and has tax and legal sides that need advisers, so laying out the full comparison, including what the cash could do elsewhere, is worth doing before viewing properties.

                ## Milestones
                1. Current and expected rent over ten years compared with the full cost of buying, including deposit, fees, borrowing costs and maintenance.
                2. Other uses of the deposit cash and the return they could earn noted.
                3. Whether the property would sit in the trading company, another company or with the owners discussed with your accountant and solicitor.
                4. Flexibility costs considered, such as being tied to a building the business outgrows.
                5. A decision recorded with the advisers' input.

                ## Notes
                This is a planning exercise. Structure, tax and borrowing choices must be confirmed with your accountant, solicitor and lender.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A written ten-year comparison of renting and buying, reviewed by your accountant, supports a recorded decision."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Write down current rent, service charges and the lease end date"
                - "Estimate the full cost of buying a comparable property"
                - "Ask your accountant how ownership structure would affect the business"
                - "Record the rent or buy decision and the reasons"
            - name: Capital plan in a cash-tight year
              description: |-
                ## Purpose
                When cash is short, capital is the easiest spend to stop and the most expensive to stop badly: a deferred roof repair becomes a flood, and a frozen system upgrade becomes a security breach. Sorting the plan into must-do, can-defer and stop, and writing down the risk of each deferral, keeps the cash while protecting the assets the business cannot run without.

                ## Milestones
                1. Every planned project sorted into must-do, can-defer and stop.
                2. The risk and likely extra cost of each deferral written in a line.
                3. Cheaper interim measures identified, such as refurbishment, renting or second-hand equipment.
                4. A revised plan approved with a date to revisit the deferred list.
              priority: medium
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A revised capital plan sorts every project into must-do, can-defer or stop, with the risk of each deferral recorded."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Sort every planned project into must-do, can-defer or stop"
                - "Write the risk of deferring each project in one line"
                - "Look for cheaper interim options for the deferred items"
                - "Revisit the deferred capital list as cash improves @recurring(monthly:20)"
            - name: Capital plan ahead of a sale or investment round
              description: |-
                ## Purpose
                Buyers and investors look hard at capital: whether recent profits were flattered by skipping replacements, what must be spent soon after completion and whether past investments delivered. Preparing an honest capital history and forward plan, with sustaining and growth spend separated, answers the due diligence questions before they turn into price reductions.

                ## Milestones
                1. Five years of capital spend analysed by category.
                2. Sustaining capital needed to keep the business running at its current level estimated.
                3. A backlog of deferred replacements listed with costs.
                4. Post-investment results for the largest projects summarised.
                5. The pack reviewed by your corporate finance adviser.
              priority: low
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "A capital history and forward plan separating sustaining and growth spend is ready for due diligence and reviewed by your adviser."
                cadence: one-shot
                effort_hours_estimate: "12"
              tasks:
                - "Analyse five years of capital spend by category"
                - "Estimate the sustaining capital the business needs each year"
                - "List deferred replacements with estimated costs"
                - "Share the pack with your corporate finance adviser"
            - name: Monte Carlo analysis for a high-uncertainty investment
              description: |-
                ## Purpose
                For a new production line, a new market or a large system, three scenarios hide how likely each outcome is. Simulating thousands of combinations of the key assumptions, each with a sensible range, shows the probability that the project falls below the hurdle rate and which assumption drives that risk.

                ## Milestones
                1. Ranges and distributions set for the four to six key assumptions, with sources noted.
                2. Links between assumptions considered, such as price and volume moving together.
                3. A simulation run with enough trials for the result to settle.
                4. The probability of a negative net present value and the main drivers presented to the panel.

                ## Notes
                Poorly chosen ranges give precise-looking answers that are wrong. Spend more time on the ranges than on the software.
              priority: low
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A simulation of one large case reports the probability of a negative net present value and its top three drivers to the panel."
                cadence: phased
                effort_hours_estimate: "12"
              tasks:
                - "Pick the large case with the widest uncertainty"
                - "Agree a range for each key assumption with the people who know it"
                - "Run the simulation in a spreadsheet add-in or short script"
                - "Present the probability of loss and the main drivers"
            - name: Real options in staged and expandable investments
              description: |-
                ## Purpose
                Standard appraisal treats a decision as now or never, but many investments carry choices that have value: to expand if demand appears, to delay until a price is known, to abandon and sell the equipment. Learning to identify and roughly value these options, usually with a decision tree, stops sound flexible projects being rejected by a rigid net present value.

                ## Milestones
                1. The options in one live case identified: expand, delay, switch or abandon.
                2. A decision tree drawn with probabilities and cash flows at each branch.
                3. The value of flexibility estimated as the difference from the fixed case.
                4. A note written on when options thinking is worth the effort and when it is not.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A decision tree for one live case shows the value of at least one real option compared with the fixed net present value."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Read an introduction to real options and decision trees"
                - "List the expand, delay and abandon choices in one live case"
                - "Draw the decision tree with probabilities and values"
                - "Compare the result with the fixed case"
            - name: Capital portfolio review against strategy
              description: |-
                ## Purpose
                Each project may pass its own hurdle while the portfolio as a whole drifts, with most money going to sustain one ageing site and little to the products the strategy says will grow. A yearly review of where capital went, by category, site and strategic goal, and the returns each group delivered, lets the leadership team steer the next round deliberately.

                ## Milestones
                1. Three years of approved capital analysed by category, site and strategic goal.
                2. Returns from completed projects grouped the same way.
                3. Gaps between the capital mix and the stated strategy identified.
                4. Guidance for the next annual round agreed by the leadership team.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: decision
                success_criteria: "A yearly portfolio review comparing capital mix and returns with strategy is presented and produces written guidance for the next round."
                cadence: cyclic
              tasks:
                - "Group three years of approved capital by category, site and goal"
                - "Group completed project returns the same way"
                - "Hold the capital portfolio review with the leadership team @recurring(yearly)"
                - "Write guidance for the next annual round"
            - name: Appraisal accuracy review across past projects
              description: |-
                ## Purpose
                Studies of large projects consistently find costs underestimated and benefits overestimated, and your own business will have a pattern too. Comparing forecast and actual figures across every reviewed project shows the typical bias by category and by sponsor, which can then be built into contingency and the challenge applied to future cases.

                ## Milestones
                1. Forecast and actual cost, timing and benefits collected for every reviewed project.
                2. Average overrun and benefit shortfall calculated by category.
                3. Patterns by sponsor or supplier noted carefully and discussed privately.
                4. An adjustment for typical bias added to the contingency guidance or the panel's checklist.
              priority: low
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "An analysis of forecast versus actual results for all reviewed projects sets a bias adjustment used in contingency guidance."
                cadence: cyclic
              tasks:
                - "Collect forecast and actual figures from every post-investment review"
                - "Ask the agent to summarise the average overrun and shortfall by category"
                - "Discuss sponsor patterns privately with the panel chair"
                - "Recalibrate the bias adjustment with the latest reviews @recurring(yearly)"
---

# Capital Expenditure Planning

This area is for anyone who has to decide whether to spend serious money on equipment, vehicles, property works or systems, from the owner weighing up a first van to the finance team running a capital panel across several sites. It starts with the foundations (a capital policy, project categories, a three-year needs list, house assumptions, a business case template and a project register), then the routines that keep spend and benefits visible, the appraisal skills behind a sound case, the decisions about leasing, replacing, ranking and tendering, the events that need preparing, situations for small firms, managers and groups, and finally specialist work on simulation, real options and forecasting bias.

What repeats is the monthly spend report against authorisation, the monthly panel meeting and benefits log, a quarterly rephasing of capital spend and check for post-investment reviews due, and a yearly bid round, five-year plan roll-forward, hurdle rate review and year-end carry-forward. The Purchase decision, Risk register, Board meeting, Vendor, Metrics log and Meeting notes templates pair with the projects that name them. Installing adds all 50 projects as active, so archive the ones that are not for you yet.
