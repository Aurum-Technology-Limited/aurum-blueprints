---
id: fundraising-investors.venture-debt-facilities
name: Venture Debt Facilities
description: "Decide whether venture debt fits, size and compare facilities, negotiate covenants and warrants, then run the monthly reporting, covenant tests and lender relationship that keep the loan safe."
category: business
version: 1.0.0
tags: [fundraising-investors, venture-debt-facilities, founder, manager, venture-debt, covenants, warrants, runway]
author: Aurum Technology
starter_structure:
  templates:
    - board-meeting
    - vendor
    - metrics-log
    - month-end-close
    - operational-checklist
    - risk-register
  pillars:
    - name: Fundraising & Investor Relations
      emoji: "💰"
      description: "Raising capital and keeping investors informed: rounds from pre-seed to growth, grants and debt, the data room, cap table, investor updates, board reporting and exits."
      pillarFrontmatter:
        review_cadence: quarterly
      areas:
        - name: Venture Debt Facilities
          description: "Raising and managing venture debt alongside equity, comparing lenders, covenants and warrants to extend runway sensibly."
          projects:
            - name: Venture debt fit and purpose decision
              description: |-
                ## Purpose
                Venture debt works best as a runway extension on top of a fresh equity round, and worst as a substitute for equity the company cannot raise. Writing down what the money is for, which milestone it buys time to reach and how it would be repaid if the next round slipped gives the founders and the board a clear yes or no before any lender is called.

                ## Milestones
                1. A one-page statement of what the borrowed money would fund and which milestone it is meant to reach.
                2. The alternatives considered, including a larger equity round, revenue-based financing and no borrowing, each with one line on why it was kept or rejected.
                3. A repayment source named for the case where the next equity round arrives late.
                4. A recorded yes, no or not yet decision, with the date it will be revisited.

                ## Notes
                Debt has to be repaid whether or not the plan works. If the honest answer to how the company would repay without new equity is that it could not, treat the facility as a risk to manage rather than free runway.

                Before you start: this plan is general information to help you organise your own money decisions. It is not financial, investment, tax or legal advice. Check decisions that matter with a qualified, licensed adviser in your country, and remember that investing and trading can lose money.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A written decision on whether to pursue venture debt, naming the milestone it funds and the repayment source if the next round is late, is filed with board papers."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Write one paragraph on what the borrowed money would pay for"
                - "Name the milestone the extra runway is meant to reach"
                - "List two alternatives to debt and why each was kept or rejected"
                - "Record the decision and its revisit date in the finance folder"
            - name: Runway model with and without a debt facility
              description: |-
                ## Purpose
                Lenders and boards both ask how many extra months a facility really buys, and the honest figure is lower than the headline because interest, fees and amortisation eat into it. Adding a debt schedule to the cash forecast, with draw dates, interest-only months and repayments, shows the true runway gain and the month cash would reach the minimum the lender is likely to require.

                ## Milestones
                1. A monthly cash forecast with a debt schedule tab covering draws, interest, fees and principal repayments.
                2. Runway calculated with no debt, with the first tranche only and with the full facility.
                3. The month each version reaches the likely minimum cash covenant marked on the chart.
                4. The model checked by the finance lead or an adviser and saved as the version shared with lenders.

                ## Notes
                Model runway to the covenant floor, not to zero. A company in breach of a minimum cash covenant can lose access to undrawn tranches long before the bank account is empty.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A cash forecast showing runway in months with no debt, one tranche and the full facility, each measured to the covenant floor, is saved and dated."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Add a debt schedule tab to the current cash forecast"
                - "Enter illustrative draw dates, interest-only months and amortisation"
                - "Calculate runway to the covenant floor for each scenario"
                - "Ask the finance lead to check the debt schedule formulas"
                - "Roll the runway model forward with last month's actuals @recurring(monthly:12)"
            - name: Sizing the facility against the latest equity round
              description: |-
                ## Purpose
                Many lenders anchor the facility size to the last equity round and to monthly burn, and asking for far more than that signals the company does not know the market. Working out a sensible range before outreach, and the smallest amount that still changes the plan, keeps the conversation credible and avoids paying fees and warrants on money that sits undrawn.

                ## Milestones
                1. The last equity round size, current monthly burn and months of runway written in one place.
                2. A requested range set, with the reasoning for the top and bottom of it.
                3. A minimum useful amount identified: the size below which the facility is not worth its cost and covenants.
                4. The range checked with the lead investor or an adviser who has seen recent venture debt deals.

                ## Notes
                A rule of thumb often quoted is a facility of roughly a quarter to a third of the last equity round, but lenders vary widely. Use it as a sense check, not as the ask.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A requested facility range and a minimum useful amount, each with written reasoning, have been agreed by the founders and the finance lead."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Write down the last round size, monthly burn and current runway"
                - "Set a requested range with a sentence explaining each end"
                - "Work out the smallest facility that still changes the plan"
                - "Ask the lead investor whether the range matches recent deals they have seen"
            - name: Timing the debt raise around the equity round
              description: |-
                ## Purpose
                Lenders are most comfortable, and terms are usually best, in the months right after a priced equity round, when cash is high and investors have just shown their support. Waiting until runway is short reverses that position. Deciding the window now, and what would trigger opening it early, avoids raising debt from weakness.

                ## Milestones
                1. The date of the last equity close and the months of runway it bought recorded.
                2. A target window for opening lender conversations set.
                3. Trigger events written down that would bring the window forward or push it back.
                4. The window added to the finance calendar with a reminder ahead of it.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A dated window for starting lender conversations, with written triggers that would move it, is in the finance calendar."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Note the date of the last equity close and the runway at that point"
                - "Pick the month you would start lender conversations"
                - "List two events that would bring the window forward"
                - "Add a reminder to the finance calendar a month before the window opens"
            - name: Board and lead investor approval to borrow
              description: |-
                ## Purpose
                Most shareholder agreements and articles require board or investor consent before the company takes on debt or grants security over its assets, and lenders will ask for proof of that consent at closing. Bringing a short paper to the board early, with the purpose, size range and main risks, gets agreement on the principle before terms are negotiated and avoids a late surprise that delays the close.

                ## Milestones
                1. The consent rights in the shareholder agreement and articles that cover borrowing and security identified with counsel.
                2. A two-page board paper covering purpose, size range, cost estimate and covenant risk.
                3. Board discussion held and in-principle support minuted.
                4. The approval route for the final documents agreed, including who signs.

                ## Notes
                Start from the **Board meeting** template. Investors sometimes care more about warrant dilution and security over the IP than about the interest rate, so cover both in the paper.
              priority: high
              deadlineOffsetDays: 45
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "Board minutes record in-principle support for a venture debt facility within a stated size range, with the route to final approval agreed."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Ask counsel which consents the articles require for borrowing and security"
                - "Draft a two-page board paper on the proposed facility"
                - "Ask the agent to condense the board paper into a short note for the lead investor"
                - "Table the paper at the next board meeting and minute the outcome"
                - "Agree who will sign the final loan documents"
            - name: Downside stress test of debt repayment
              description: |-
                ## Purpose
                Facilities that look comfortable in the base plan can become dangerous if revenue lands a third lower or the next round slips by six months. Running two or three downside cases through the debt schedule shows when a covenant would trip, when repayments start to bite and which spending cuts would keep the company inside its terms.

                ## Milestones
                1. Two downside cases defined: slower revenue growth and a delayed next equity round.
                2. Each case run through the debt schedule with the month of first covenant pressure marked.
                3. A list of cost actions that would restore headroom, with the months each one buys.
                4. The results shared with the board alongside the decision to borrow.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Stress test results for at least two downside cases, showing the month of first covenant pressure and the cost actions available, are in the board papers."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Define a slower-revenue case and a delayed-round case in a paragraph each"
                - "Run both cases through the debt schedule"
                - "Mark the month each case puts pressure on a covenant"
                - "List the cost actions that would restore headroom and the months they buy"
            - name: Lender information pack
              description: |-
                ## Purpose
                Unlike equity investors, venture lenders underwrite the investors and the cash runway as much as the product, so their first requests are different: recent monthly accounts, the cap table, the last round's terms, the forecast and a summary of investor support. Having that pack ready before the first call cuts weeks from the process and shows the finance function is in order.

                ## Milestones
                1. Twelve months of monthly management accounts and the latest annual accounts in one folder.
                2. The current cap table, a summary of the last round's documents and a list of investors with their likely follow-on capacity where known.
                3. The forecast with its debt schedule and a one-page business summary added.
                4. An access log recording which lender received which documents and when.

                ## Notes
                Reuse the equity data room where you can, but share a lender-specific subset. Lenders rarely need the full product roadmap or hiring plan.
              priority: medium
              deadlineOffsetDays: 45
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A lender information pack with twelve months of accounts, cap table, forecast and investor summary exists, with a log of who received it."
                cadence: one-shot
                effort_hours_estimate: "10"
              tasks:
                - "Export twelve months of monthly management accounts into one folder"
                - "Write a one-page summary of investors and their support to date"
                - "Add the forecast with its debt schedule to the pack"
                - "Start a log of which lender received which documents and when"
            - name: Choosing finance counsel for the loan documents
              description: |-
                ## Purpose
                Loan and security agreements are long, drafted by the lender and full of definitions that decide when the lender can stop funding or call the loan. Counsel who reads these documents every month will know which points lenders routinely concede, and a fixed or capped fee quote agreed before term sheets arrive stops the negotiation stalling over who pays for what.

                ## Milestones
                1. Two or three lawyers with recent venture debt experience identified through investors or other founders.
                2. Each asked about their experience, the points they usually negotiate and a fee estimate.
                3. Counsel chosen and engaged, with the fee basis in writing.
                4. A note made on whether the lender's legal costs should be capped in the term sheet.

                ## Notes
                Start from the **Vendor** template. Lenders usually expect the borrower to pay the lender's legal fees as well; ask for a cap at term sheet stage.
              priority: medium
              deadlineOffsetDays: 30
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "Counsel with recent venture debt experience is engaged on a written fee basis before the first term sheet is signed."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Ask two investors which lawyers they have seen on recent venture debt deals"
                - "Request experience and a fee estimate from each candidate"
                - "Engage counsel and file the engagement letter"
                - "Note in the tracker whether lender legal fees need a cap"
            - name: Venture debt terms glossary for the team
              description: |-
                ## Purpose
                Draw period, interest-only period, final payment, prepayment fee, warrant coverage, investor abandonment clause: the vocabulary arrives all at once with the first term sheet. A one-page glossary in the company's own words, with an example figure beside each cost term, means the founders, the finance lead and the board are arguing about the same thing.

                ## Milestones
                1. At least fifteen terms listed from a sample or live venture debt term sheet.
                2. Each term defined in one plain sentence.
                3. An illustrative money figure beside each cost term, based on your likely facility size.
                4. The glossary checked by counsel or an adviser and shared with the board.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A one-page glossary of at least fifteen venture debt terms, each with a plain definition, has been checked by counsel and shared with the board."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "List every term in a sample venture debt term sheet you do not fully understand"
                - "Write a one-sentence plain definition for each term"
                - "Add an illustrative money figure beside the cost terms"
                - "Ask counsel or an adviser to correct anything that is wrong"
            - name: Monthly covenant compliance tracker
              description: |-
                ## Purpose
                Covenants are tested on dates the loan agreement sets, and a breach the lender spots before the company does causes far more damage than one raised early. Testing each covenant monthly against actuals, with the headroom shown in money and in months, gives the finance lead weeks of warning instead of days.

                ## Milestones
                1. Every financial and reporting covenant listed with its exact definition, test date and threshold.
                2. A monthly tracker showing actual, threshold and headroom for each covenant.
                3. An amber trigger set for each covenant at which the CEO and board are told.
                4. Twelve consecutive months tested and filed.

                ## Notes
                Start from the **Metrics log** template. Use the agreement's definitions exactly: cash for covenant purposes may exclude restricted cash or cash held outside accounts the lender controls.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Twelve consecutive monthly covenant tests are filed, each showing actual, threshold and headroom, with any amber trigger reported to the CEO."
                cadence: rolling
              tasks:
                - "List every covenant with its exact definition and test date"
                - "Set an amber trigger level for each covenant"
                - "Test each covenant against the month's actuals @recurring(monthly:8)"
                - "Tell the CEO the same day any covenant crosses its amber trigger"
            - name: Monthly lender pack and compliance certificate
              description: |-
                ## Purpose
                Nearly every facility requires monthly management accounts and a signed compliance certificate within a set number of days of month end, and late reporting is itself an event of default under many agreements. Building the pack into the month-end close, with one named owner and a fixed send date, stops a technical default ever arising from an admin slip.

                ## Milestones
                1. The reporting deadlines from the loan agreement written into the month-end close checklist.
                2. A certificate template prepared with the covenant figures pulled from the tracker.
                3. A named signatory and a backup for when they are away.
                4. Twelve months of packs sent on time, each with its send date recorded.

                ## Notes
                Start from the **Month-end close** template and add the lender pack as its final step.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Twelve consecutive monthly lender packs and compliance certificates were sent before the contractual deadline, each with its send date logged."
                cadence: rolling
              tasks:
                - "Copy the reporting deadlines from the loan agreement into the close checklist"
                - "Name a signatory and a backup for the compliance certificate"
                - "Send the monthly accounts and signed certificate to the lender @recurring(monthly:18)"
                - "Log the date each pack was sent"
            - name: Weekly cash check against the covenant floor
              description: |-
                ## Purpose
                Minimum cash covenants bite fastest, because a single late customer payment or a heavy payroll week can push cash below the floor between month-end tests. A weekly look at balances in every account, set against the floor and the next four weeks of known outflows, lets the finance lead act before the test rather than explain afterwards.

                ## Milestones
                1. All bank and money market accounts listed, with the ones that count toward the covenant marked.
                2. A weekly snapshot of covenant cash against the floor and the next four weeks of outflows.
                3. A written action list for when headroom falls below an agreed number of weeks.
                4. Twenty consecutive weekly snapshots filed.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Twenty consecutive weekly cash snapshots showing headroom above the minimum cash covenant are filed, with any action taken noted."
                cadence: rolling
              tasks:
                - "List every account and mark which ones count toward the cash covenant"
                - "Record covenant cash and the next four weeks of outflows @recurring(weekly:mon)"
                - "Agree the headroom level that triggers a call with the CEO"
            - name: Draw period calendar and tranche decisions
              description: |-
                ## Purpose
                Undrawn tranches usually expire at the end of a draw period, and some carry conditions such as a revenue level or new equity raised. Missing the window can cost the company runway it negotiated hard for, while drawing too early means paying interest on idle cash. A calendar of draw windows, conditions and a decision date for each tranche makes every draw a deliberate choice.

                ## Milestones
                1. Every tranche listed with its amount, draw window, conditions and expiry date.
                2. A decision date set a month before each expiry.
                3. Each draw decision recorded with the reasoning and the board's view.
                4. No tranche allowed to lapse without a recorded decision.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every tranche in the facility has a recorded draw or lapse decision made before its expiry date."
                cadence: cyclic
              tasks:
                - "Copy each tranche's window, conditions and expiry into the finance calendar"
                - "Set a decision reminder one month before each expiry"
                - "Review open draw windows and conditions against the forecast @recurring(quarterly)"
                - "Record each draw decision and its reasoning in the board papers"
            - name: Debt service payment calendar
              description: |-
                ## Purpose
                Interest, principal, unused line fees and the final payment all fall on contractual dates, and are often collected by direct debit from an account the lender controls. Keeping a schedule of each payment, checking the lender's statement against your own calculation and funding the account in time avoids missed payments and catches billing errors, which happen more often than people expect.

                ## Milestones
                1. A payment schedule for the life of the loan, showing interest, principal and fees by month.
                2. Each month's lender statement checked against the schedule before it is paid.
                3. The paying account funded at least three working days before each payment date.
                4. Any change in a floating benchmark rate reflected in the schedule.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every debt service payment in the last twelve months was made on time and checked against the company's own schedule, with any discrepancy resolved."
                cadence: rolling
              tasks:
                - "Build a payment schedule for the full term of the loan"
                - "Check the lender's statement against the schedule before payment @recurring(monthly:25)"
                - "Confirm the paying account is funded three working days ahead"
                - "Raise any billing difference with the lender in writing"
            - name: Quarterly lender relationship check-in
              description: |-
                ## Purpose
                Lenders who first hear bad news from a compliance certificate tend to reach for their rights; lenders who have been briefed every quarter tend to negotiate. A short call each quarter with the relationship manager, covering performance, equity plans and any covenant getting tight, builds the goodwill a waiver request will one day need.

                ## Milestones
                1. The relationship manager and their credit counterpart named in the finance contacts.
                2. A quarterly call held, with a short agenda sent beforehand.
                3. Notes from each call filed, with any commitments made.
                4. Four consecutive quarterly check-ins held.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Four consecutive quarterly calls with the lender's relationship manager were held, each with an agenda sent in advance and notes filed."
                cadence: rolling
              tasks:
                - "Record the relationship manager and credit contact in the finance contacts list"
                - "Send a three-item agenda and hold the quarterly lender call @recurring(quarterly)"
                - "File the notes and any commitments made on the call"
            - name: Debt position page in the board pack
              description: |-
                ## Purpose
                Boards approve the borrowing once and then often lose sight of it until a covenant is close. A standing one-page debt section in every board pack, showing the balance outstanding, undrawn tranches, covenant headroom and upcoming repayments, keeps directors informed and makes any later waiver or refinancing conversation faster.

                ## Milestones
                1. A one-page debt section designed with balance, undrawn amounts, headroom and repayment dates.
                2. The section included in every board pack since the facility closed.
                3. Any covenant inside its amber trigger highlighted on the summary page of the pack.
                4. Board questions on the debt answered in the following pack.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every board pack since the facility closed contains a one-page debt section showing balance, headroom and upcoming repayments."
                cadence: rolling
              tasks:
                - "Design a one-page debt section for the board pack"
                - "Update the debt page before each board meeting @recurring(quarterly)"
                - "Highlight any covenant inside its amber trigger on the summary page"
            - name: Annual lender deliverables calendar
              description: |-
                ## Purpose
                Beyond monthly reporting, most facilities require a board-approved budget within a set period of the year start, audited accounts within a set period of year end, renewed insurance certificates naming the lender and updated corporate details. Putting each yearly deliverable in one calendar with an owner stops them being discovered late through a lender's chaser.

                ## Milestones
                1. Every annual deliverable in the loan agreement listed with its deadline and owner.
                2. The budget, audited accounts and insurance certificates sent on time for one full year.
                3. Lender confirmations of receipt filed.
                4. The list updated after any amendment to the facility.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "All annual lender deliverables for one full year, including budget, audited accounts and insurance certificates, were sent by their contractual deadlines."
                cadence: cyclic
              tasks:
                - "Read the reporting section of the loan agreement and list every annual deliverable"
                - "Assign an owner and a deadline to each deliverable"
                - "Send the board-approved annual budget to the lender @recurring(yearly)"
                - "Send renewed insurance certificates naming the lender @recurring(yearly)"
            - name: Bank account register and control agreements
              description: |-
                ## Purpose
                Bank lenders often require the main operating accounts to sit with them, and debt funds usually require control agreements over accounts held elsewhere so they can freeze or sweep those accounts after a default. A current register of every account, with its control agreement status and any balance limit, keeps the company compliant and turns any decision to spread deposits into a checked one rather than an accidental breach.

                ## Milestones
                1. A register of every company bank, card and investment account with its control agreement status.
                2. The facility's rules on accounts held outside the lender written beside the register.
                3. Every new account opened only after the rules were checked.
                4. The register reconciled to bank statements each quarter.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A current account register with control agreement status for every account is reconciled each quarter, with no account opened outside the facility rules."
                cadence: rolling
              tasks:
                - "List every company account with its bank and control agreement status"
                - "Write the facility's rules on accounts held elsewhere beside the list"
                - "Reconcile the account register to bank statements @recurring(quarterly)"
                - "Check the rules with the finance lead before opening any new account"
            - name: Lender warrant register
              description: |-
                ## Purpose
                Warrants granted to a lender sit outside the share register until exercised, and they are easy to forget when modelling the next round or an exit. A single record of each warrant's share class, share count or formula, strike price, expiry and adjustment terms, passed to whoever owns the cap table, keeps dilution figures honest.

                ## Milestones
                1. Each warrant instrument logged with class, share count or formula, strike price and expiry.
                2. Adjustment terms on a new round or a sale summarised in plain words.
                3. The cap table owner confirmed to hold the warrants as fully diluted entries.
                4. The register checked after every equity round.
              priority: low
              frontmatter:
                mode: operating
                output_kind: artifact
                success_criteria: "Every lender warrant is recorded with class, strike, expiry and adjustment terms, and appears in the fully diluted cap table."
                cadence: cyclic
              tasks:
                - "Log each lender warrant with class, share count, strike and expiry"
                - "Summarise how each warrant adjusts on a new round or a sale"
                - "Send the summary to whoever maintains the cap table"
                - "Check the warrant register against the cap table @recurring(yearly)"
            - name: Floating rate and benchmark watch
              description: |-
                ## Purpose
                Many venture loans charge a floating rate set as a margin over a benchmark such as a prime rate, with a floor, so the interest bill moves when central banks move. A quarterly check of the benchmark, the floor and the effect on interest cost keeps the forecast accurate and shows when it is worth asking about repricing or early repayment.

                ## Milestones
                1. The benchmark, margin, floor and reset dates written into the debt schedule.
                2. Interest cost recalculated each quarter with the current benchmark.
                3. The forecast updated whenever the interest bill moves materially.
                4. A note made if rates have fallen far enough to raise repricing with the lender.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "The debt schedule has been updated with the current benchmark rate every quarter for a year, and the forecast reflects the new interest cost."
                cadence: rolling
              tasks:
                - "Write the benchmark, margin, floor and reset dates into the debt schedule"
                - "Recalculate interest cost with the current benchmark rate @recurring(quarterly)"
                - "Agree the change in interest cost that should trigger a forecast update"
            - name: Reading a venture debt term sheet line by line
              description: |-
                ## Purpose
                A venture debt term sheet is short, but each line carries a cost or a control consequence: the commitment fee, the interest-only months, the final payment, the prepayment schedule, the warrant coverage, the covenants and the conditions to draw. Working through a real or sample term sheet with counsel once, and writing what each line means for the company, makes the comparison and negotiation that follow far quicker.

                ## Milestones
                1. A sample or live term sheet annotated line by line with its plain meaning.
                2. Each cost term turned into an illustrative money figure for your facility size.
                3. Each control term marked with the situation in which the lender could use it.
                4. Remaining questions answered by counsel.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "An annotated term sheet with a plain meaning, money figure or control trigger beside every line has been reviewed by counsel."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Get a sample venture debt term sheet from counsel or an investor"
                - "Annotate each line with what it means in plain words"
                - "Mark which lines give the lender control in a bad month"
                - "Book thirty minutes with counsel to clear the open questions"
            - name: All-in cost of debt calculation
              description: |-
                ## Purpose
                The headline interest rate is often the smallest part of the cost once the commitment fee, final payment, prepayment fees, legal costs and warrant value are added. Turning every term into one all-in annual cost, under two or three repayment scenarios, gives founders a figure they can compare across lenders and against the dilution of raising more equity instead.

                ## Milestones
                1. Every cash cost listed: fees, interest, final payment and legal costs.
                2. A method for estimating warrant value agreed with an adviser, with its assumptions written down.
                3. An all-in annual cost calculated for holding to term, early repayment and repayment at a sale.
                4. The calculation saved as a reusable sheet for comparing offers.

                ## Notes
                Warrant value depends on assumptions about future share prices, so record the assumptions rather than treating the number as exact. Ask your accountant how the fees and warrants will be treated in the accounts.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: artifact
                success_criteria: "A reusable sheet calculates an all-in annual cost for a facility under three repayment scenarios, with the warrant assumptions written down."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "List every fee, interest and final payment line from the term sheet"
                - "Agree a method for estimating warrant value with an adviser"
                - "Calculate the all-in cost for holding to term, early repayment and a sale"
                - "Save the sheet so each new offer can be run through it"
            - name: Covenants, MAC and investor abandonment clauses
              description: |-
                ## Purpose
                Venture loans vary most in how and when the lender can stop funding or demand repayment. Some rely on a financial covenant such as minimum cash, some on performance against plan, and many on a material adverse change clause or an investor abandonment clause that turns on whether existing investors keep supporting the company. Knowing which kind you are agreeing to tells you how much discretion the lender keeps.

                ## Milestones
                1. The common covenant and default types written down with a one-line example of each.
                2. Every default trigger in your term sheet or agreement sorted into objective tests and lender judgement.
                3. Two scenarios walked through with counsel: a missed plan and an investor declining to follow on.
                4. A short note for the board on where lender discretion sits.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A board note sorts every default trigger in the facility into objective tests and lender judgement, with two scenarios checked by counsel."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Write a one-line example of each common covenant type"
                - "Sort each default trigger in the term sheet into objective or discretionary"
                - "Walk through a missed plan and a declined follow-on with counsel"
                - "Write a half-page note on lender discretion for the board"
            - name: How lender warrants convert into dilution
              description: |-
                ## Purpose
                Coverage on lender warrants is usually expressed as a percentage of the facility amount, converted into shares at a strike price that is often the last round price, and it may be measured on the amount committed or only the amount drawn. Understanding those mechanics, and what happens to the warrant on a new round or a sale, turns an abstract percentage into a dilution figure the founders can weigh.

                ## Milestones
                1. The coverage, strike price basis and whether coverage applies to committed or drawn amounts written down.
                2. An illustrative share count calculated for your facility size.
                3. What happens to the warrant on a new round, a sale and at expiry summarised.
                4. The resulting dilution compared with raising the same money as equity.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A one-page note shows the share count and dilution from lender warrants for your facility size, compared with raising the same amount as equity."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Note the coverage percentage and strike price basis from the term sheet"
                - "Check whether coverage applies to committed or drawn amounts"
                - "Calculate the illustrative share count and fully diluted percentage"
                - "Compare that dilution with raising the same money as equity"
            - name: Security packages and IP negative pledges
              description: |-
                ## Purpose
                Most venture lenders take security over all company assets, and the treatment of intellectual property ranges from a full charge to a negative pledge, where the company promises not to pledge its IP to anyone else. For a software or biotech company the IP is most of the value, so understanding which you are giving, and what it means for future licensing and partnerships, matters before signing.

                ## Milestones
                1. The assets covered by the proposed security listed with counsel.
                2. The IP treatment identified as a charge, a negative pledge or excluded.
                3. Planned licences, partnerships or IP transfers that the security could affect listed.
                4. Any change the company wants raised in the term sheet negotiation.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A written summary of the proposed security package, including IP treatment and its effect on planned licensing, has been reviewed by counsel."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Ask counsel which assets the proposed security covers"
                - "Check whether IP is charged or covered by a negative pledge"
                - "List any planned licences or partnerships the security could affect"
                - "Add the IP treatment to the negotiation list if it matters"
            - name: Mapping the venture lender landscape
              description: |-
                ## Purpose
                Venture debt comes from three broad kinds of lender: banks with a venture team, which usually price lower but want your deposits; specialist debt funds, which price higher but often lend more with fewer banking ties; and growth or sector lenders for later stages and particular industries. Mapping who is active for your stage, sector and country stops the company pitching lenders who were never going to fit.

                ## Milestones
                1. At least ten active lenders identified through investors, founders and published deal announcements.
                2. Lenders grouped into banks, debt funds and specialty lenders.
                3. Typical stage, sector, countries and facility size noted for each.
                4. A first view of the five best fits marked for shortlisting.
              priority: medium
              deadlineOffsetDays: 45
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A landscape sheet of at least ten active lenders, grouped by type with stage, sector and geography noted, is ready for shortlisting."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Ask investors which lenders their portfolio companies used in the last two years"
                - "Group the lenders into banks, debt funds and specialty lenders"
                - "Ask the agent to draft a one-line profile of each lender from your notes"
                - "Refresh the lender landscape sheet with new entrants and exits @recurring(yearly)"
            - name: Lender shortlist and first conversations
              description: |-
                ## Purpose
                Running three to five lender conversations in parallel, with the same information pack and timetable, gives the company real choice and a feel for market terms. Introductions through existing investors carry weight because lenders lean heavily on investor support, while cold approaches tend to move slower and price higher.

                ## Milestones
                1. Three to five lenders chosen from the landscape sheet.
                2. Introductions requested from investors for at least two of them.
                3. Each lender sent the same pack and an indicative timetable.
                4. Feedback and indicative terms from each lender recorded in one tracker.
              priority: medium
              deadlineOffsetDays: 60
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "Three to five lenders have received the information pack under a common timetable, with feedback from each recorded."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "Pick three to five lenders from the landscape sheet"
                - "Ask the lead investor to introduce the company to two of them"
                - "Send each lender the same pack and an indicative timetable"
                - "Record each lender's feedback and indicative terms in one tracker"
            - name: Side-by-side comparison of debt term sheets
              description: |-
                ## Purpose
                Offers are rarely like for like: one has a lower rate and stricter covenants, another a longer interest-only period and more warrant coverage. Putting every offer into the same grid, with the all-in cost under each repayment scenario and a column for control terms, lets the founders and board choose on the trade-offs that matter to this company rather than on the headline rate.

                ## Milestones
                1. One grid with a row for every term across all offers received.
                2. Each offer run through the all-in cost sheet under three repayment scenarios.
                3. Control terms ranked for each offer with counsel's input.
                4. A recommended lender presented to the board and the choice minuted.
              priority: high
              deadlineOffsetDays: 90
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A comparison grid of all offers, showing all-in cost under three scenarios and the control terms, supports a lender choice minuted by the board."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Build one grid with a row for every term across all offers"
                - "Run each offer through the all-in cost sheet"
                - "Rank the control terms in each offer with counsel"
                - "Present the grid and a recommendation to the board"
            - name: Negotiating covenants and default triggers
              description: |-
                ## Purpose
                Covenant levels and default definitions are where counsel earns the fee, because a small change in a threshold or a cure period can decide whether a bad quarter becomes a crisis. Preparing the company's asks in priority order, backed by the stress test, keeps the negotiation focused on the two or three points that protect the business most.

                ## Milestones
                1. The covenant and default terms the company wants changed, ranked by importance.
                2. Each ask supported by a figure from the stress test.
                3. Asks and fallback positions agreed with counsel before the negotiation call.
                4. The agreed terms recorded against the original term sheet.
              priority: medium
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "Agreed covenant levels, cure periods and default definitions are recorded against the original term sheet, with the changes won listed."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Rank the covenant and default terms you most want changed"
                - "Use the stress test to justify a lower threshold or a longer cure period"
                - "Agree the asks and fallbacks with counsel before the call"
                - "Record what was agreed against the original term sheet"
            - name: Negotiating warrants, fees and prepayment terms
              description: |-
                ## Purpose
                Economic terms such as warrant coverage, the final payment and the prepayment schedule are the ones most often moved in negotiation, and the right priority depends on the plan. A company likely to refinance or be sold within two years should care most about prepayment fees; one expecting to hold the loan to term may trade those for lower warrant coverage.

                ## Milestones
                1. The company's likely holding period for the loan written down with the reasoning.
                2. Warrant coverage, final payment and prepayment fees ranked by importance for that holding period.
                3. Each counter-proposal priced with the all-in cost sheet before it is made.
                4. The agreed economic terms and the reasoning for the priorities recorded.
              priority: low
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "The agreed warrant coverage, final payment and prepayment schedule are recorded, with the reasoning for the priority order the company chose."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Write down how long the company expects to hold the loan"
                - "Rank warrant coverage, final payment and prepayment fees for that period"
                - "Price each counter-proposal with the all-in cost sheet"
                - "Record the agreed economic terms and why they were prioritised"
            - name: Lender banking requirements trade-off
              description: |-
                ## Purpose
                A bank lender's lower price often comes with a requirement to move all or most operating accounts, cards and sometimes payroll to that bank. Weighing the switching work, the concentration of deposits in one institution and any limits on holding cash elsewhere against the saving gives a fair comparison with a debt fund that leaves the banking alone.

                ## Milestones
                1. Each offer's banking requirements written out: accounts, cards, payroll and limits on outside balances.
                2. The work and time to switch banks estimated with the finance team.
                3. The deposit concentration risk noted, with what the facility would allow by way of a backup account.
                4. The banking requirements weighed in the term sheet comparison.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "Each offer's banking requirements and switching cost are written into the term sheet comparison, with a note on deposit concentration."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Write out each offer's requirements for accounts, cards and payroll"
                - "Estimate the work and weeks needed to switch banks"
                - "Ask whether a backup account at another bank would be permitted"
                - "Add the banking trade-off as a row in the comparison grid"
            - name: Term loan versus recurring revenue credit line
              description: |-
                ## Purpose
                Subscription businesses are often offered a revolving line sized to a multiple of recurring revenue instead of, or alongside, a term loan. Lines tend to be cheaper with little or no warrant coverage, but they can shrink when revenue falls and are reviewed at each renewal; term loans are fixed for their life but cost more. Comparing the two against the forecast shows which one would still be there when you actually needed it.

                ## Milestones
                1. Both structures described side by side: size basis, cost, warrants, renewal and when availability can shrink.
                2. Availability under each modelled in the base and downside forecasts.
                3. The months in which each structure would provide cash marked.
                4. A preferred structure, or a combination, chosen and recorded.

                ## Notes
                A revolving line from a bank is different from revenue-based financing, which is repaid as a share of revenue. Keep that comparison in its own decision if it is on the table.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A recorded choice between a term loan, a recurring revenue line or both, based on availability in the base and downside forecasts."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Ask each lender how a recurring revenue line would be sized and renewed"
                - "Model the line's availability in the downside forecast"
                - "Compare cost and warrants for the line and the term loan"
                - "Record the chosen structure and the reasoning"
            - name: Lender due diligence response plan
              description: |-
                ## Purpose
                Once a term sheet is signed, the lender's credit team runs diligence: calls with investors, a review of accounts and key contracts, background checks and sometimes a site visit or customer calls. Giving each request an owner and a turnaround target keeps the process to weeks rather than months and stops the CEO becoming the bottleneck.

                ## Milestones
                1. The lender's diligence list received and every item given an owner.
                2. A target turnaround agreed for each item, with the information pack reused where possible.
                3. Investor reference calls arranged and investors briefed on what the lender will ask.
                4. Every item closed and credit approval received.
              priority: medium
              deadlineOffsetDays: 90
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "Every item on the lender's diligence list is closed and credit approval is confirmed in writing."
                cadence: phased
                effort_hours_estimate: "12"
              tasks:
                - "Ask the lender for the full diligence list in one document"
                - "Give each item an owner and a target turnaround"
                - "Brief the investors the lender will call on what to expect"
                - "Ask the agent to draft weekly status notes on open diligence items"
            - name: Early repayment or refinancing decision
              description: |-
                ## Purpose
                After a strong equity round, during a sale process or when rates fall, the question comes up of whether to repay the loan early or refinance with a cheaper lender. Prepayment fees, the final payment and the cost of new warrants all count, so the answer needs the same all-in cost discipline as the original choice.

                ## Milestones
                1. The cost of repaying today calculated: balance, prepayment fee and final payment.
                2. Any refinancing offer run through the all-in cost sheet.
                3. The effect on runway and covenants of each option shown.
                4. A decision recorded and agreed with the board.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A board-agreed decision to keep, repay or refinance the facility, with the all-in cost of each option shown."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Ask the lender for a current repayment figure including all fees"
                - "Run any refinancing offer through the all-in cost sheet"
                - "Show the runway effect of keeping, repaying and refinancing"
                - "Put the recommendation to the board"
            - name: Facility closing and first draw
              description: |-
                ## Purpose
                Closing a facility needs signed loan and security documents, board consents, security registrations, account control agreements, insurance endorsements and often an officer's certificate. A closing checklist agreed with both sets of counsel, with the first draw request ready, avoids the familiar slip where the documents are signed but the money cannot move.

                ## Milestones
                1. A closing checklist agreed with lender and company counsel, each item with an owner.
                2. Board consents, account control agreements and insurance endorsements in place.
                3. Documents signed and security registered where required.
                4. The first draw received and the debt schedule updated with actual dates.

                ## Notes
                Start from the **Operational checklist** template. File a fully signed copy of every closing document in one place on the day; it is the set you will reread every month.
              priority: high
              deadlineOffsetDays: 120
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "The facility is closed, the first draw has reached the company's account and the full signed document set is filed."
                cadence: one-shot
                effort_hours_estimate: "10"
              tasks:
                - "Ask counsel for the lender's closing checklist"
                - "Assign an owner to every closing condition"
                - "Prepare the first draw request in advance of signing"
                - "File the full signed document set in one folder"
            - name: Second tranche milestone release
              description: |-
                ## Purpose
                Later tranches are often conditional on a milestone such as new equity raised, a revenue level or a regulatory step. Treating the release as a dated event, with the evidence the lender will want prepared in advance and the draw request ready, makes the money available when the plan needs it rather than weeks later.

                ## Milestones
                1. The milestone condition and the evidence required copied from the agreement.
                2. Progress towards the milestone tracked in the board pack.
                3. The evidence pack assembled and sent as soon as the milestone is met.
                4. The tranche drawn or a recorded decision not to draw.
              priority: medium
              deadlineOffsetDays: 270
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "The second tranche milestone evidence was accepted by the lender and the tranche drawn or deliberately declined before its expiry."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Copy the second tranche condition and evidence wording from the agreement"
                - "Ask the lender what form of evidence they will accept"
                - "Prepare the evidence pack before the milestone date"
                - "Submit the draw request once the lender confirms the condition is met"
            - name: Covenant waiver or reset request
              description: |-
                ## Purpose
                When a covenant breach looks likely, asking for a waiver or reset before the test date, with a credible revised plan and visible investor support, gives the company the strongest hand. Lenders typically ask for a fee, tighter reporting or extra warrants in return, so knowing what you can offer and what you will not concede matters before the call.

                ## Milestones
                1. The likely breach, its timing and its cause written in one page.
                2. A revised plan prepared, with investor support confirmed where possible.
                3. Acceptable concessions and limits agreed with the board and counsel.
                4. A signed waiver or amendment filed, with the new terms added to the covenant tracker.

                ## Notes
                Approach the lender before the test date, not after. Get counsel to read any waiver letter: some include a release of claims or new conditions that matter later.
              priority: medium
              frontmatter:
                mode: event
                output_kind: decision
                success_criteria: "A signed waiver or amendment is in place before the covenant test date, with the new terms added to the tracker."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Write a one-page note on the likely breach, its timing and cause"
                - "Confirm with the lead investor what support they can show the lender"
                - "Agree with the board the concessions you will and will not offer"
                - "Call the relationship manager before the covenant test date"
            - name: End of the interest-only period
              description: |-
                ## Purpose
                Monthly payments can jump several times over when the interest-only period ends and principal starts to amortise, which shortens runway and can change the case for repaying early. Preparing three months ahead, with the new payment in the forecast and any option to extend the interest-only period explored with the lender, avoids a cash shock.

                ## Milestones
                1. The date interest-only ends and the new monthly payment confirmed with the lender.
                2. The forecast updated with the amortising payments.
                3. Any contractual or negotiated extension of interest-only explored.
                4. The board told of the runway effect before the first principal payment.
              priority: medium
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "The forecast reflects the amortising payments at least three months before the first principal payment, and the board has been told the runway effect."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Confirm the date interest-only ends and the new payment amount"
                - "Put the amortising payments into the cash forecast"
                - "Ask the lender whether an interest-only extension is available and at what cost"
                - "Report the runway effect in the next board pack"
            - name: Debt payoff at a sale or change of control
              description: |-
                ## Purpose
                Most venture loans become repayable on a change of control, and the buyer's lawyers will want a payoff letter showing the exact amount due on completion day, including interest, the final payment, any prepayment fee and how the warrants are treated. Requesting the figures early in a sale process prevents a late surprise in the funds flow.

                ## Milestones
                1. The change of control and warrant terms summarised for the deal team.
                2. An estimated payoff amount included in the sale model from the start.
                3. A formal payoff letter requested with a per-day interest figure.
                4. Security releases confirmed for completion day.
              priority: medium
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A payoff letter and security release are agreed before completion, and the loan is repaid in the completion funds flow."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Summarise the change of control and warrant clauses for the deal team"
                - "Add an estimated payoff amount to the sale model"
                - "Request a payoff letter with a per-day interest figure"
                - "Confirm the lender will release its security on completion day"
            - name: Annual lender portfolio review meeting
              description: |-
                ## Purpose
                Many lenders review each borrower formally once a year, refreshing their internal risk rating and deciding whether to offer more capacity. Preparing a short annual presentation, showing performance against the plan shared at closing and the next equity plans, shapes that rating instead of leaving it to the credit team's reading of the monthly numbers.

                ## Milestones
                1. The month of the lender's annual review confirmed with the relationship manager.
                2. A short presentation comparing actuals with the plan shared at closing.
                3. The meeting held with the CEO and finance lead present.
                4. Any change to available capacity or terms recorded afterwards.
              priority: low
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "An annual review meeting with the lender was held with a prepared presentation, and its outcome on rating or capacity is recorded."
                cadence: cyclic
              tasks:
                - "Ask the relationship manager when the annual credit review happens"
                - "Prepare a short deck comparing actuals with the closing plan @recurring(yearly)"
                - "Record any change to capacity or terms after the meeting"
            - name: First-time founder venture debt checklist
              description: |-
                ## Purpose
                Founders taking a first facility often focus on rate and size and miss the terms that bind their next decisions: personal guarantees, which are unusual in venture debt and worth resisting, limits on further borrowing, lender consent for acquisitions or dividends, and restrictions on moving IP. A short checklist read before the term sheet is signed catches these while they are still easy to change.

                ## Milestones
                1. A checklist of founder-sensitive terms prepared with counsel.
                2. The term sheet checked against every item.
                3. Any personal guarantee or founder-level obligation raised and resolved.
                4. Restrictions on future borrowing, acquisitions and IP moves summarised for the board.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "The term sheet has been checked against a founder-sensitive checklist, with any personal obligation resolved before signing."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Ask counsel for the terms first-time founders most often miss"
                - "Check whether any term creates a personal obligation for a founder"
                - "List restrictions on borrowing, acquisitions and moving IP"
                - "Share the summary with your co-founders before signing"
            - name: Finance lead inheriting an existing facility
              description: |-
                ## Purpose
                A new finance lead often inherits a loan agreement nobody has reread since closing, with reporting habits that may or may not match it. Reading the agreement and every amendment in the first month, checking past certificates against the actual terms and meeting the relationship manager brings the facility under control before the first certificate goes out under your name.

                ## Milestones
                1. The loan agreement, every amendment and waiver collected in one folder.
                2. A summary of covenants, reporting duties and key dates written.
                3. The last six compliance certificates checked against the actual terms.
                4. An introductory meeting held with the relationship manager.

                ## Notes
                If the check finds a past certificate was wrong, talk to the CEO and counsel before anything else is sent. Corrected early, it is usually manageable.
              priority: medium
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: knowledge
                success_criteria: "Within the first month, a written summary of the facility exists and the last six certificates have been checked against the agreement."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Collect the loan agreement, amendments and waivers in one folder"
                - "Ask the agent to draft a summary of covenants, reporting duties and dates from the agreement"
                - "Check the last six compliance certificates against the agreement"
                - "Book an introductory call with the relationship manager"
            - name: Equipment financing for hardware and deep tech
              description: |-
                ## Purpose
                Companies building hardware, labs or production lines can often fund equipment with asset-backed financing secured on the equipment itself, alongside or instead of a general venture loan. Separating equipment from operating burn can lower the cost and keep the general facility for runway, but the two lenders' security has to fit together.

                ## Milestones
                1. The equipment purchases for the next eighteen months listed with costs and dates.
                2. Two equipment financing quotes obtained.
                3. The existing or proposed venture lender's consent and carve-out for equipment security confirmed.
                4. A decision recorded on which equipment, if any, to finance separately.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A recorded decision on separate equipment financing, with two quotes compared and the venture lender's position on equipment security confirmed."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "List the equipment purchases planned for the next eighteen months"
                - "Request quotes from two equipment financing providers"
                - "Ask the venture lender whether equipment can be carved out of its security"
                - "Record which equipment to finance separately and why"
            - name: Life sciences milestone-linked tranches
              description: |-
                ## Purpose
                Life sciences lenders commonly tie later tranches to clinical or regulatory milestones, such as a trial readout or a filing, and the timing of those events is rarely fully in the company's control. Matching tranche conditions to realistic milestone dates, with slack for delay, avoids a facility whose money arrives only after it was needed.

                ## Milestones
                1. The clinical and regulatory timeline written with a realistic and a delayed date for each milestone.
                2. Each proposed tranche condition mapped to a milestone and its delayed date.
                3. Changes to wording or dates requested where a tranche would arrive too late.
                4. The final tranche conditions checked against the delayed timeline.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "Every tranche condition in the facility is mapped to a milestone, and the delayed timeline still releases each tranche before cash falls below the covenant floor."
                cadence: phased
                effort_hours_estimate: "5"
              tasks:
                - "Write a realistic and a delayed date for each clinical or regulatory milestone"
                - "Map each proposed tranche condition to its milestone"
                - "Flag any tranche that would arrive too late under the delayed timeline"
                - "Ask counsel to propose wording that tolerates a reasonable delay"
            - name: Borrowing from a lender in another country
              description: |-
                ## Purpose
                Startups outside the largest venture markets sometimes find the most active lenders are based abroad, which brings currency mismatch, possible withholding tax on interest, foreign governing law and security over assets in more than one jurisdiction. Mapping these issues with local counsel and the company's accountant before signing avoids costs that never appear in the term sheet.

                ## Milestones
                1. The loan currency compared with the currencies of revenue and costs.
                2. Withholding tax and any registration requirements checked with the accountant.
                3. Governing law, security registration and enforcement questions answered by local counsel.
                4. The extra costs added to the all-in cost calculation.
              priority: low
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "Currency, tax and legal issues of a cross-border facility are written up with input from local counsel and the accountant, and priced into the all-in cost."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Compare the loan currency with the currencies of revenue and costs"
                - "Ask the accountant about withholding tax on interest paid abroad"
                - "Ask local counsel about governing law and security registration"
                - "Add the cross-border costs to the all-in cost sheet"
            - name: Debt plan for when runway gets short
              description: |-
                ## Purpose
                If the next equity round is slipping and cash is approaching the covenant floor, the lender becomes the most important relationship the company has. A written plan covering cost actions, the investor support conversation, when to tell the lender and the options of waiver, restructuring or orderly repayment means the board follows a sequence it agreed calmly rather than reacting to a default notice.

                ## Milestones
                1. The runway level that triggers the plan agreed with the board.
                2. A sequence written: cost actions, investor conversations, lender notice and options.
                3. Counsel's briefing to the board on directors' duties when cash is short recorded.
                4. The plan reviewed by the board each quarter while runway is below the trigger.

                ## Notes
                Start from the **Risk register** template. Bring counsel in early: directors' duties can change as a company approaches insolvency, and the rules differ by country.
              priority: high
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A board-approved plan for the debt in a low-runway scenario, naming the trigger for telling the lender and the options to pursue, is on file."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "Set the runway level that triggers this plan"
                - "Draft the sequence of cost actions, investor calls and lender notice"
                - "Ask counsel to brief the board on directors' duties when cash is short"
                - "Review the plan with the board while runway is below the trigger @recurring(quarterly)"
            - name: Contingency for a failure of the lending bank
              description: |-
                ## Purpose
                The 2023 collapse of a leading venture bank showed that a company whose deposits, payroll and loan all sit with one institution can lose access to cash overnight. Keeping a backup account opened and tested, within whatever the facility allows, and knowing how one payroll cycle would run from it, is cheap insurance.

                ## Milestones
                1. The facility's rules on holding cash outside the lender confirmed.
                2. A backup account opened at a second institution, with control agreements if required.
                3. A written runbook for paying one payroll cycle and key suppliers from the backup account.
                4. A small test payment made from the backup account.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A permitted backup account is open and tested, with a written runbook for running one payroll cycle from it."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Check what the facility allows by way of accounts at another bank"
                - "Open a backup account at a second institution"
                - "Write a one-page runbook for paying payroll from the backup account"
                - "Make a small test payment from the backup account @recurring(yearly)"
            - name: Growth-stage term loan for a scaling company
              description: |-
                ## Purpose
                Later-stage companies with meaningful revenue can access larger term loans from growth lenders, sometimes with fewer warrants but tighter financial covenants tied to revenue or earnings measures. These facilities sit closer to conventional corporate lending, so the finance team needs audited accounts, a track record of hitting budget and a covenant model the lender will test every quarter.

                ## Milestones
                1. Two years of audited accounts and budget-versus-actual history assembled.
                2. The likely financial covenants modelled against the base and downside plans.
                3. Three growth lenders approached through advisers or investors.
                4. A preferred facility chosen and approved by the board.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A board-approved choice of growth-stage term loan, with its financial covenants modelled against base and downside plans."
                cadence: phased
                effort_hours_estimate: "12"
              tasks:
                - "Assemble two years of audited accounts and budget-versus-actual history"
                - "Model revenue and earnings covenants against the downside plan"
                - "Ask advisers which growth lenders are active at your revenue level"
                - "Present the preferred facility to the board for approval"
            - name: Intercreditor terms with a second lender
              description: |-
                ## Purpose
                Adding a second facility, such as equipment financing or a receivables line, alongside an existing venture loan needs the first lender's consent and usually an intercreditor or subordination agreement setting out who is paid first and who can enforce against which assets. Agreeing the structure before the second lender issues terms avoids a deal the first lender then blocks.

                ## Milestones
                1. The existing agreement's limits on further borrowing and security identified.
                2. The first lender's consent and conditions discussed before the second term sheet.
                3. An intercreditor structure agreed in principle: ranking, assets and enforcement.
                4. The signed intercreditor agreement filed with both facilities.
              priority: low
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "An intercreditor or subordination agreement is signed, with ranking and enforcement rights summarised in one page."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Find the clauses limiting further borrowing in the existing agreement"
                - "Ask the first lender what it would need to consent to a second facility"
                - "Agree ranking and enforcement rights in principle with counsel"
                - "Write a one-page summary of who ranks first on which assets"
            - name: Long-term debt strategy across funding rounds
              description: |-
                ## Purpose
                Experienced finance leaders treat debt as a recurring part of the capital plan: a first facility after an early priced round, a larger one after the next, and eventually conventional bank lines. Writing an annual view of how much debt the company could sensibly carry at each stage, and which lenders would follow it, makes each new facility a step in a plan rather than a reaction.

                ## Milestones
                1. The current facilities and their maturity dates summarised.
                2. A view of debt capacity at each future funding stage written down.
                3. The lenders likely to fit each stage named.
                4. The strategy reviewed by the board alongside the annual budget.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A written debt strategy covering current facilities, capacity at each future stage and likely lenders is reviewed by the board every year."
                cadence: cyclic
              tasks:
                - "Summarise current facilities and their maturity dates"
                - "Write a view of debt capacity at each future funding stage"
                - "Update the debt strategy alongside the annual budget @recurring(yearly)"
---

# Venture Debt Facilities

This area is for founders and finance leads weighing or running a venture loan alongside their equity. It starts with the foundations (whether debt fits, how much, when and with whose approval), then the operating routines that keep a facility safe, the skills to read and price a term sheet, the lender choices and negotiations, the dated events from closing to payoff, situations such as inheriting a facility or running short of cash, and finally the specialist work of growth loans, intercreditor terms and a debt strategy across rounds.

What repeats is a monthly covenant test, lender pack, payment check and runway refresh, a weekly cash check against the covenant floor, quarterly lender calls, board debt pages, account and rate checks, and the yearly budget, insurance, warrant and lender review deliverables. The Board meeting, Vendor, Metrics log, Month-end close, Operational checklist and Risk register templates pair with the projects that name them. Installing adds all 50 projects as active, so archive the ones that are not for you yet.
