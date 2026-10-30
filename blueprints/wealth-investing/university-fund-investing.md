---
id: wealth-investing.university-fund-investing
name: University Fund Investing
description: "A university fund with a costed target, the right education account, a monthly contribution worked back from the date fees start and a glide path that moves money to safety before the first term."
category: personal
version: 1.0.0
tags: [wealth-investing, university-fund-investing, parent, education-savings, tuition, glide-path, student-finance]
author: Aurum Technology
starter_structure:
  templates:
    - savings-goal
    - metrics-log
    - meeting-notes
    - risk-register
  pillars:
    - name: Wealth & Investing
      emoji: "📈"
      description: "Building long-term wealth: pensions and retirement accounts, index investing, property, side income, estate planning and the slow, boring decisions that compound over decades."
      pillarFrontmatter:
        review_cadence: quarterly
      areas:
        - name: University Fund Investing
          description: "Investing for a child's future education costs with a target amount, timeline and gradually lower-risk funds."
          projects:
            - name: Costed estimate of university for each child
              description: |-
                ## Purpose
                Most parents save towards a round number they picked years ago, then discover the real bill for fees, rent, food and travel is double it. Pricing three realistic options for each child (living at home and studying locally, moving away within your country, and the most expensive route you would genuinely support) turns a vague worry into a figure you can plan against.

                ## Milestones
                1. Current published fees for three representative courses or institutions recorded per child.
                2. Annual living costs estimated for living at home and living away, with sources noted.
                3. A total for the full course length worked out for each option in today's money.
                4. The option you are planning to fund chosen and marked for each child.

                ## Notes
                Use today's prices first and add inflation later in the target project. Mixing the two at this stage hides how big the bill really is.

                Before you start: this plan is general information to help you organise your own money decisions. It is not financial, investment, tax or legal advice. Check decisions that matter with a qualified, licensed adviser in your country, and remember that investing and trading can lose money.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A written cost estimate for each child covering three study options, with fees and living costs totalled for the full course in today's money."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Look up this year's published fees for three courses your child might take"
                - "Find a student budget guide from a university or student body for living costs"
                - "Total fees and living costs for the full course length of each option"
                - "Mark the option you intend to fund for each child"
            - name: Deciding what share of the bill the family will cover
              description: |-
                ## Purpose
                Few families fund every penny, and deciding up front whether you aim to cover fees only, living costs only, a fixed sum or the whole lot changes the monthly figure dramatically. A written funding share also gives you a straight answer when a teenager asks what they can expect, and stops the target creeping upwards each year.

                ## Milestones
                1. The parts of the cost the family intends to cover named: fees, rent, living costs or a fixed sum.
                2. Expected contributions from grandparents, student loans, part-time work or grants noted as rough figures.
                3. A target amount in today's money agreed by both parents where there are two.
                4. The funding share written in one sentence you could read to your child.
              priority: high
              deadlineOffsetDays: 45
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A one-sentence funding commitment and a target amount in today's money, agreed and written in the fund plan."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "List which parts of the cost estimate you would like to cover"
                - "Note what loans, grants or relatives might reasonably cover"
                - "Agree a target amount in today's money with the other parent"
                - "Write the funding share as one plain sentence"
            - name: Timeline from today to the first fee payment
              description: |-
                ## Purpose
                The number of years left before the first payment decides almost everything: how much risk the fund can carry, how big the monthly contribution must be and when to start moving money into cash. Drawing the timeline for each child, with the five-year, three-year and one-year marks shown, gives every later decision a date to hang on.

                ## Milestones
                1. The expected start month of study written down for each child.
                2. The number of years and months to the first payment calculated.
                3. Review points marked at five years, three years and one year before the start.
                4. Overlapping study years between siblings highlighted.
              priority: medium
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A dated timeline per child showing the first payment month and the five, three and one year review points."
                cadence: one-shot
                effort_hours_estimate: "1"
              tasks:
                - "Work out the likely start month from each child's school year"
                - "Count the years and months to the first payment"
                - "Mark the five, three and one year review points on a timeline"
                - "Shade any years when two children are studying at once"
            - name: Choosing the account type for the university fund
              description: |-
                ## Purpose
                Where the money is held matters as much as what it is invested in: some accounts are designed for education and give tax relief only when spent on it, others hand control to the child at 18, and an ordinary account in your own name keeps full flexibility but loses the tax shelter. Comparing the options available where you live, such as a 529 plan, a child's tax-free account or a parent's own tax-free allowance, on tax, control, flexibility and aid treatment avoids an expensive switch later.

                ## Milestones
                1. The education-related account types available in your country listed.
                2. Each scored on tax treatment, who controls the money, what it can be spent on and how aid assessments treat it.
                3. The penalty or tax cost of using each one for something other than education noted.
                4. One account type chosen, with the reason recorded.

                ## Notes
                Rules differ widely between countries and change with budgets. For anything beyond a straightforward choice, a regulated adviser or the official government guidance should confirm the details.
              priority: high
              deadlineOffsetDays: 45
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A comparison of at least three account options scored on tax, control, flexibility and aid treatment, with one chosen and the reason written."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "List the education savings account types available where you live"
                - "Note who legally controls each account when the child turns 18"
                - "Check the tax cost of a non-education withdrawal for each"
                - "Score the options on tax, control, flexibility and aid treatment"
                - "Record the account type you chose and why"
            - name: Opening the university fund account
              description: |-
                ## Purpose
                Until an account exists with money in it, the fund is only an idea. Opening the chosen account with the right owner, beneficiary and investment option, and making the first contribution, gives the plan a real balance to track from this month onwards.

                ## Milestones
                1. A provider or plan offering the chosen account type selected on charges and investment choice.
                2. The account opened with the correct owner and named beneficiary.
                3. An investment option selected inside the account.
                4. A first contribution made and showing as invested.
              priority: high
              deadlineOffsetDays: 60
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "An open education fund account with the correct beneficiary, an investment option chosen and a first contribution invested."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Gather the child's identity details the provider will ask for"
                - "Compare total annual charges at two or three providers"
                - "Open the account and confirm the beneficiary name is exact"
                - "Make a first contribution and check it has been invested"
            - name: Monthly contribution worked back from the target
              description: |-
                ## Purpose
                Working backwards from a target and a start date shows what you really need to put in each month, and it is usually less frightening than the headline total once growth is included. Running the sum at a cautious and a middling growth rate gives a range, and choosing a figure at the cautious end leaves room for bad years.

                ## Milestones
                1. The target inflated to the year of first payment using an education cost inflation assumption.
                2. Monthly contributions calculated at a cautious and a middling growth rate.
                3. A monthly figure chosen that the household budget can carry through school holidays and lean months.
                4. The figure written into the fund plan with the assumptions behind it.

                ## Notes
                Start from the **Savings goal** template. Assume growth well below long-run stock market averages, because the fund will be partly in cash and bonds for the last few years.
              priority: high
              deadlineOffsetDays: 60
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A monthly contribution figure recorded alongside the growth and inflation assumptions used to calculate it."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Inflate the target to the year of first payment"
                - "Calculate the monthly amount at a cautious growth rate"
                - "Repeat the calculation at a middling growth rate"
                - "Check the cautious figure against last month's household budget"
                - "Write the chosen figure and assumptions into the fund plan"
            - name: Choosing between an age-based fund and a do-it-yourself glide path
              description: |-
                ## Purpose
                Many education plans offer an age-based option that shifts from shares to bonds and cash automatically as the start date nears, while others leave the mix to you. Deciding which you want, and understanding exactly what the automatic version does in its final five years, means the fund's risk falls on purpose rather than by accident.

                ## Milestones
                1. The share, bond and cash mix of the age-based option recorded for five, three and one year before the start.
                2. The charges of the age-based option compared with a simple do-it-yourself mix.
                3. A choice made between automatic and manual, with a reason.
                4. If manual, a written schedule of how much moves to safer assets each year.
              priority: high
              deadlineOffsetDays: 75
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A recorded choice of automatic or manual glide path, with the planned share, bond and cash mix for each remaining year."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Find the glide path table for the plan's age-based option"
                - "Note how much stays in shares one year before the start date"
                - "Compare its charges with a two-fund do-it-yourself mix"
                - "Write down your choice and the year-by-year mix"
            - name: One-page university fund plan
              description: |-
                ## Purpose
                When the plan lives in your head, a partner, a grandparent or your future self cannot follow it. One page with the target, the funding share, the account, the monthly figure, the glide path and the review dates becomes the reference every routine in this area checks against.

                ## Milestones
                1. Target, funding share and timeline summarised at the top.
                2. Account, provider, investment option and monthly contribution listed.
                3. The glide path and the yearly review month written down.
                4. The page shared with the other parent and stored with the fund statements.
              priority: medium
              deadlineOffsetDays: 90
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A single-page plan covering target, account, contribution, glide path and review dates, shared with the other parent."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Ask the agent to draft a one-page plan from your target, account and contribution notes"
                - "Add the glide path and the yearly review month"
                - "Share the page with the other parent for corrections"
                - "Save the final version in the fund folder"
            - name: Beneficiary, successor and access details recorded
              description: |-
                ## Purpose
                If the account owner dies or becomes unable to manage money, an education fund without a named successor can freeze or fall into an estate at exactly the wrong moment. Recording who inherits control, who the beneficiary is and where the login and paperwork live protects the fund from the unexpected.

                ## Milestones
                1. The beneficiary name and date of birth checked against the child's documents.
                2. A successor owner or contingent owner named where the account allows it.
                3. The fund mentioned in your will or letter of wishes where relevant.
                4. Login location and provider contact details stored where a trusted person can find them.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "The account shows a correct beneficiary and a named successor owner, and access details are recorded in the household records."
                cadence: one-shot
                effort_hours_estimate: "1"
              tasks:
                - "Check the beneficiary details on the latest statement"
                - "Ask the provider how to name a successor owner"
                - "Add the fund to the list of accounts in your household records"
                - "Tell your executor or a trusted relative where the details are kept"
            - name: Automatic monthly contribution routine
              description: |-
                ## Purpose
                Contributions that depend on remembering stop the first busy month, and a fund that misses a year of payments rarely catches up. A standing payment timed just after payday, with a quick monthly check and a yearly increase, keeps the fund growing without needing willpower.

                ## Milestones
                1. A standing order or direct debit set for the day after payday.
                2. The first three automatic payments confirmed as invested.
                3. A yearly step-up of the contribution set in line with pay rises or inflation.
                4. Any missed or failed payment followed up within the same month.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Twelve consecutive monthly contributions invested on schedule, with the amount increased at least once a year."
                cadence: rolling
              tasks:
                - "Set up a standing payment for the day after payday"
                - "Confirm this month's contribution was received and invested @recurring(monthly:4)"
                - "Raise the monthly contribution in line with your pay rise or inflation @recurring(yearly)"
                - "Turn on payment failure alerts with the provider"
            - name: Quarterly fund value check against the target path
              description: |-
                ## Purpose
                Funds can drift behind their target for years without anyone noticing until the teenage years, when catching up is painful. Logging the value each quarter beside where the plan said it should be shows early whether contributions or returns need attention.

                ## Milestones
                1. An expected value path drawn from today to the first payment.
                2. Actual values logged each quarter beside the expected path.
                3. A tolerance band agreed, such as within a tenth of the path.
                4. Any quarter outside the band followed by a written note of the reason.

                ## Notes
                Start from the **Metrics log** template. Judge the trend over several quarters, not one: a single bad quarter in a share-heavy fund is normal.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A log with at least four consecutive quarterly values recorded beside the expected path, with any gap outside tolerance explained."
                cadence: rolling
              tasks:
                - "Calculate the expected fund value for the end of each year to the start date"
                - "Log the fund value beside the expected path @recurring(quarterly)"
                - "Agree the tolerance band that would trigger a closer look"
                - "Write a one-line reason whenever the value falls outside the band"
            - name: Yearly glide path step-down
              description: |-
                ## Purpose
                Whether the plan moves money automatically or you do it yourself, the mix should become more cautious each year as the start date nears. A yearly check that the share, bond and cash split matches the planned glide path catches age-based funds that lag and manual plans that were forgotten.

                ## Milestones
                1. The current share, bond and cash mix read from the latest statement.
                2. The mix compared with the planned glide path for the years remaining.
                3. Any manual switch made to bring the mix back in line.
                4. The date and the new mix recorded in the fund plan.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Each year the fund's actual mix is within a few percentage points of the planned glide path, with the check dated in the plan."
                cadence: cyclic
              tasks:
                - "Read the current asset mix from the latest fund statement"
                - "Compare the mix with the glide path for the years remaining @recurring(yearly)"
                - "Switch the amount needed to bring the mix back in line"
                - "Record the date and new mix in the fund plan"
            - name: Yearly refresh of the university cost estimate
              description: |-
                ## Purpose
                Fees, rents and loan rules change, and a child's plans shift from medicine to art school to an apprenticeship and back. Updating the cost estimate each year keeps the target honest and stops a ten-year-old estimate driving decisions at seventeen.

                ## Milestones
                1. This year's fees and student living costs checked for the chosen option.
                2. Any change in the child's likely course or location reflected.
                3. The target and monthly contribution recalculated if the estimate moved by more than a small margin.
                4. The new estimate dated in the fund plan.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "The cost estimate in the fund plan is never more than 13 months old and records the date of each update."
                cadence: cyclic
              tasks:
                - "Recheck fees and living costs for the option you are funding @recurring(yearly)"
                - "Ask your child what they currently imagine studying, if they are old enough"
                - "Recalculate the target if the estimate has moved noticeably"
                - "Date the updated estimate in the fund plan"
            - name: Windfall routing rule for gifts and bonuses
              description: |-
                ## Purpose
                Birthday cheques, holiday money from relatives and work bonuses tend to disappear into the current account unless there is a rule for them. Agreeing in advance what share of each windfall goes to the university fund can add more over a childhood than a small rise in the monthly contribution.

                ## Milestones
                1. A written rule for the share of gifts and bonuses that goes to the fund.
                2. Relatives who give cash told, if you choose, that it can go straight to the fund.
                3. A running total of windfalls added kept in the fund log.
                4. The rule revisited when the child is old enough to have a say.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A written windfall rule exists and the fund log shows every gift or bonus received in the last year with the amount added."
                cadence: rolling
              tasks:
                - "Agree the share of gifts and bonuses that will go to the fund"
                - "Add any windfalls received this quarter to the fund @recurring(quarterly)"
                - "Give generous relatives the fund's gifting details if they ask"
                - "Keep a running total of windfalls in the fund log"
            - name: Annual allowance and state top-up tracking
              description: |-
                ## Purpose
                Education accounts often have yearly contribution limits, and some come with a government top-up, matching grant or local tax deduction that must be claimed. Tracking contributions against the limit and claiming every available bonus is free money many families leave behind.

                ## Milestones
                1. The yearly contribution limit for the account recorded, including any combined family limit.
                2. Any government top-up, grant or tax deduction for education saving identified.
                3. Contributions checked against the limit before the tax year ends.
                4. Each top-up or deduction claimed and its value logged.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Contributions stay within the annual limit every year and every available top-up or deduction is claimed and logged."
                cadence: cyclic
              tasks:
                - "Find the yearly contribution limit for your account type"
                - "Check whether any state top-up or tax deduction applies to your fund"
                - "Check year-to-date contributions against the limit @recurring(quarterly)"
                - "Claim the top-up or deduction for the year just ended @recurring(yearly)"
            - name: Statement and contribution paperwork folder
              description: |-
                ## Purpose
                Withdrawals for education often need proof of what was paid in, when and by whom, and aid assessments may ask for balances on a given date. A single folder with statements, contribution confirmations and gift records saves a frantic search the autumn your child applies.

                ## Milestones
                1. One digital folder created for the fund, with a matching paper file if you keep paper.
                2. Account opening documents and the beneficiary confirmation filed.
                3. Each statement and contribution confirmation saved within a month of arriving.
                4. Gifts from relatives recorded with date, amount and giver.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "The fund folder holds every statement for the last 12 months and a record of every contribution and gift."
                cadence: rolling
              tasks:
                - "Create a folder for the university fund in your document store"
                - "File the opening documents and beneficiary confirmation"
                - "Save this month's statement and contribution confirmations @recurring(monthly:20)"
                - "Add any gifts received to the gift record with date and giver"
            - name: Annual university fund review with your partner
              description: |-
                ## Purpose
                Two parents can carry quite different assumptions about who pays for what, how much is enough and what happens if a child chooses not to go. An hour a year together with the plan, the latest statement and the cost estimate keeps you aligned and catches drift before it becomes an argument at the kitchen table.

                ## Milestones
                1. A yearly date fixed for the review, away from the January bills rush.
                2. The fund value, contribution and cost estimate brought to the review.
                3. Any change to the target, contribution or funding share agreed.
                4. Decisions and actions written down and filed.

                ## Notes
                Start from the **Meeting notes** template. Single parents can use the same review with a trusted friend or relative as a sounding board.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A dated note of each yearly review, listing the fund value, any agreed changes and who will act on them."
                cadence: cyclic
              tasks:
                - "Pick a month for the review and put it in both calendars"
                - "Hold the yearly fund review with the latest statement and plan @recurring(yearly)"
                - "Agree any change to the target or contribution"
                - "File the review notes in the fund folder"
            - name: Yearly charges check on the education fund
              description: |-
                ## Purpose
                Education plans vary widely in cost, and a fund charging one percent more than an alternative can take a noticeable share of the final pot over 18 years. Checking the total of plan, platform and fund charges once a year shows whether you are still getting fair value.

                ## Milestones
                1. Plan or platform charges, fund charges and any advice fees added into one yearly figure.
                2. The figure expressed in money as well as a percentage.
                3. The total compared with at least one lower-cost alternative.
                4. A note recorded of whether a switch is worth investigating.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A yearly record of total fund charges in money and percentage, compared against one alternative."
                cadence: cyclic
              tasks:
                - "Find the plan, platform and fund charges on the latest annual statement"
                - "Add the charges into one yearly figure in money @recurring(yearly)"
                - "Compare the figure with one lower-cost alternative"
                - "Note whether a switch is worth looking into"
            - name: How glide paths and lifecycle funds work
              description: |-
                ## Purpose
                An age-based education fund can look identical to a pension lifecycle fund but behave very differently in its last few years. Understanding why the mix shifts, how fast, and what it does to expected returns lets you judge whether a plan's default path is too aggressive or too timid for your child.

                ## Milestones
                1. A plain explanation of a glide path written in your own words.
                2. The glide paths of two different plans compared side by side.
                3. The trade-off between growth and certainty in the final five years understood and noted.
                4. A view recorded on whether your plan's path suits your child's timeline.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A written comparison of two glide paths and a one-paragraph view on whether your plan's default suits your child."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Read the investment approach document for your plan's age-based option"
                - "Find the glide path of a second plan for comparison"
                - "Write a paragraph on how each handles the final five years"
                - "Record your view on whether your plan's path suits your child"
            - name: Education cost inflation and real returns
              description: |-
                ## Purpose
                University costs have often risen faster than general prices, so a fund that grows a little above inflation can still fall behind the bill. Learning the difference between nominal and real returns, and finding a reasonable inflation assumption for education costs where you live, keeps the target from quietly shrinking in real terms.

                ## Milestones
                1. The difference between nominal and real returns explained in a sentence.
                2. A historical figure for education cost inflation where you live found and noted.
                3. Your fund's assumed return restated in real terms.
                4. The inflation assumption in the fund plan updated if needed.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "The fund plan states an education inflation assumption with its source and the expected real return of the fund."
                cadence: phased
                effort_hours_estimate: "3"
              tasks:
                - "Find how much fees and student rents have risen over the last ten years"
                - "Work out the real return implied by your growth assumption"
                - "Update the inflation assumption in the fund plan"
                - "Note the source of each figure beside it"
            - name: Sequence risk in the final five years
              description: |-
                ## Purpose
                A 30 percent market fall when a child is four is a buying opportunity; the same fall when they are seventeen can cut a year of fees from the fund. Understanding sequence risk, and how much of the next two or three years of costs should already be out of shares, explains why the glide path matters more than the fund choice.

                ## Milestones
                1. The idea of sequence risk explained in your own words.
                2. The effect of a large fall at age 8 and at age 17 compared using your own fund figures.
                3. A rule written for how many years of costs should sit in cash or short bonds before the start.
                4. The rule added to the fund plan.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A worked example using your own fund showing the effect of a large fall at two ages, and a written rule for how much to hold in safer assets."
                cadence: phased
                effort_hours_estimate: "3"
              tasks:
                - "Read a plain explanation of sequence of returns risk"
                - "Model a 30 percent fall on your fund at age 8 and at age 17"
                - "Write a rule for how many years of costs to hold outside shares"
                - "Add the rule to the fund plan"
            - name: How savings affect aid and student finance assessments
              description: |-
                ## Purpose
                In some countries, means-tested grants, bursaries and financial aid look at parental income and assets, and where the money is held can change the result. Learning how your country's assessment treats parent-owned, child-owned and grandparent-owned education savings, before the assessment years begin, avoids accidentally reducing support.

                ## Milestones
                1. The assessment rules for your country or target universities found and summarised.
                2. How parent-owned, child-owned and relative-owned savings are each treated noted.
                3. The tax or income years the assessment looks at identified.
                4. Any questions for a student finance adviser or the university aid office written down.

                ## Notes
                Rules vary between countries and institutions and change often. Treat this as preparation for a conversation with the aid office or an adviser, not a conclusion.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A written summary of how your fund will be treated in the aid or student finance assessment, with open questions listed for an adviser."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Find the official guide to student support assessment where you live"
                - "Note how savings in the parent's, child's and relatives' names are counted"
                - "Identify which income or tax years the assessment uses"
                - "List the questions to put to an aid office or adviser"
            - name: Withdrawal rules for education accounts
              description: |-
                ## Purpose
                Education accounts usually define which costs count as qualifying, and a withdrawal for the wrong cost, or in the wrong year, can trigger tax or penalties. Knowing the list of qualifying expenses, the documents needed and the timing rules well before the first term avoids an expensive surprise in the first autumn.

                ## Milestones
                1. The list of qualifying expenses for your account type written out.
                2. The proof the provider or tax authority expects for each withdrawal noted.
                3. Any rule about matching withdrawals to the same tax year as the cost recorded.
                4. The penalty for a non-qualifying withdrawal noted.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A one-page summary of qualifying expenses, proof required and timing rules for your account, filed in the fund folder."
                cadence: phased
                effort_hours_estimate: "2"
              tasks:
                - "Find the provider's guide to qualifying withdrawals"
                - "List which costs count, including rent, books and equipment"
                - "Note the receipts or invoices needed for each kind of withdrawal"
                - "Check whether withdrawals must fall in the same tax year as the cost"
            - name: Reading an education fund factsheet
              description: |-
                ## Purpose
                The factsheet for your chosen fund or age-based option shows its mix, charges, past performance and what it holds, but most parents never open it. Learning to read one in fifteen minutes means you can spot a drift in strategy, a rise in charges or a portfolio that has become riskier than you thought.

                ## Milestones
                1. The latest factsheet for your fund found and saved.
                2. Asset mix, top holdings, charges and benchmark identified on it.
                3. Performance compared with the benchmark over five years, where available.
                4. Anything you did not understand listed for follow-up.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A saved factsheet with notes on mix, charges, benchmark and five-year performance against that benchmark."
                cadence: phased
                effort_hours_estimate: "2"
              tasks:
                - "Download the latest factsheet for your fund"
                - "Mark the asset mix, charges and benchmark on it"
                - "Compare five-year performance with the benchmark"
                - "Reread the factsheet for changes in mix or charges @recurring(yearly)"
            - name: Student loan terms you are funding against
              description: |-
                ## Purpose
                Student loans your child could take instead are the yardstick for sizing the fund, and in some countries those loans behave more like a graduate tax than a debt. Understanding interest, repayment thresholds and write-off rules helps you decide whether to fund fees, living costs or neither.

                ## Milestones
                1. Current student loan interest, repayment threshold and write-off period noted for your country.
                2. A rough estimate of what your child might repay on two plausible salary paths.
                3. A view formed on whether family money is best spent on fees, living costs or a deposit later.
                4. The view fed into the funding share decision.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A note of the current loan terms, two repayment estimates and a recorded view on which costs the fund should cover."
                cadence: phased
                effort_hours_estimate: "3"
              tasks:
                - "Find the official current student loan terms for your country"
                - "Use an official repayment calculator for two salary paths"
                - "Write down which costs family money would help with most"
                - "Update the funding share in the plan if your view changed"
            - name: Catch-up plan when the fund is behind target
              description: |-
                ## Purpose
                Being a fifth or more behind the path with eight years to go is recoverable; the same gap with two years to go needs a different answer. A catch-up plan sets out the options (higher contributions, windfalls, a smaller funding share, a cheaper study option) and picks the mix you can live with.

                ## Milestones
                1. The size of the gap measured in money and in years of costs.
                2. At least four catch-up options listed with their monthly or total effect.
                3. A combination chosen and the plan updated.
                4. Progress checked monthly for the first six months.

                ## Notes
                Taking more investment risk to catch up late usually makes things worse if markets fall. Close the gap with money and expectations before reaching for risk.
              priority: medium
              deadlineOffsetDays: 120
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A written catch-up plan with the gap measured, options costed and a chosen combination reflected in the contribution or target."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Measure the gap between the fund and its expected path"
                - "Cost four options for closing the gap"
                - "Choose a combination and update the fund plan"
                - "Check catch-up progress against the new plan @recurring(monthly:12)"
            - name: Moving an existing savings pot into the university fund
              description: |-
                ## Purpose
                Many families have money earmarked for a child sitting in a low-interest savings account, a premium bond style product or an old child's account. Deciding whether to move it into the invested university fund, and how, puts idle money to work while there is still time for growth.

                ## Milestones
                1. Every existing pot meant for the child listed with balance, rate and owner.
                2. Any notice period, penalty or tax effect of moving each pot noted.
                3. A decision for each pot recorded: move now, move in stages or leave.
                4. Agreed moves completed and the fund plan updated.
              priority: medium
              deadlineOffsetDays: 60
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "Each existing child savings pot has a recorded decision, and agreed transfers show in the university fund."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "List every account holding money meant for the child"
                - "Check notice periods and penalties on each one"
                - "Decide whether to move, stage or leave each pot"
                - "Complete the agreed transfers and update the plan"
            - name: One fund for all children or one per child
              description: |-
                ## Purpose
                Some account types let you switch beneficiary between siblings, others are tied to one child, and a single pooled fund can feel unfair if one child takes a costlier route. Choosing the structure early avoids a messy split when the eldest starts and the youngest is still years away.

                ## Milestones
                1. The beneficiary change rules of your account type checked.
                2. The pros and cons of pooled and separate funds listed for your family.
                3. A fairness rule agreed for children whose costs differ.
                4. A structure chosen and recorded in the fund plan.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A recorded choice of pooled or separate funds, with a written fairness rule for unequal costs."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Check whether your account allows a change of beneficiary"
                - "List the pros and cons of pooled and separate funds for your family"
                - "Agree how you will treat children whose costs differ"
                - "Record the chosen structure in the fund plan"
            - name: Deciding how much to tell your child about the fund
              description: |-
                ## Purpose
                Children who know a fund exists can make better choices about courses, cities and part-time work, but a large number shared too early can also shape expectations. Deciding what to share at which age, and saying it consistently, turns the fund into part of their planning rather than a surprise.

                ## Milestones
                1. What you will share at primary age, early teens and sixth form or senior year agreed.
                2. The funding share sentence ready for the right moment.
                3. A first age-appropriate conversation held.
                4. A yearly update planned once the child is around fifteen.
              priority: low
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "An agreed plan for what is shared at each age, and a first conversation held and noted."
                cadence: phased
                effort_hours_estimate: "2"
              tasks:
                - "Agree with the other parent what to share at each age"
                - "Prepare the funding share sentence in words your child will follow"
                - "Hold the first conversation and note their questions"
                - "Give your teenager a short yearly update on the fund @recurring(yearly)"
            - name: Balancing the university fund against your own retirement saving
              description: |-
                ## Purpose
                Children can borrow for university, but nobody lends for retirement, and parents who pause pension contributions to fill an education fund can pay for it for decades. Setting a clear order of priorities between emergency savings, retirement and the university fund protects both generations.

                ## Milestones
                1. Your current retirement saving rate compared with the rate your pension provider or adviser suggests.
                2. An order of priorities written for emergency cash, retirement and the university fund.
                3. The university contribution adjusted if it was squeezing retirement saving.
                4. The order shared with the other parent.

                ## Notes
                Employer pension matching is usually the first thing to protect, because each pound or dollar put in is matched immediately.
              priority: high
              deadlineOffsetDays: 60
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A written order of saving priorities, with the university contribution set at a level that keeps retirement saving on track."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Check that you are getting any full employer pension match"
                - "Compare your retirement saving rate with your provider's suggested rate"
                - "Write your order of saving priorities"
                - "Adjust the university contribution if retirement saving is being squeezed"
            - name: Switching education plan or provider to cut charges
              description: |-
                ## Purpose
                If the yearly charges check shows a much cheaper option, switching can be worth it, but transfers between education plans can trigger penalties, lost top-ups or time out of the market. Running the switch as a proper decision protects the gains you are trying to make.

                ## Milestones
                1. The charge saving over the remaining years calculated in money.
                2. Exit fees, lost bonuses and time out of the market checked.
                3. A decision recorded to switch or stay.
                4. If switching, the transfer completed as a direct transfer rather than a withdrawal.

                ## Notes
                Always transfer provider to provider. Withdrawing and reinvesting yourself can count as a non-qualifying withdrawal.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A recorded switch or stay decision based on the money saved over the remaining years, net of exit costs."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Calculate the charge saving in money over the years left"
                - "Ask the current provider for any exit fees or lost bonuses"
                - "Decide to switch or stay and record why"
                - "Request a direct transfer from the new provider if switching"
            - name: Plan B if your child does not go to university
              description: |-
                ## Purpose
                Many young people take a route other than a full-time degree, and a fund built only for tuition can become awkward or penalised money. Knowing in advance what the fund could pay for instead (apprenticeship costs, a later degree, a sibling, a first home deposit) removes pressure from your child's decision.

                ## Milestones
                1. Alternative uses allowed by the account type listed, with any tax or penalty.
                2. Rules for transferring to a sibling or delaying use noted.
                3. A family view agreed on what the money is for if university is not chosen.
                4. The Plan B written into the fund plan.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "The fund plan includes a written Plan B covering alternative uses, the tax cost of each and the family's agreed position."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "List what else the account can pay for without penalty"
                - "Check the rules for delaying use or switching to a sibling"
                - "Agree what the fund is for if university is not chosen"
                - "Write the Plan B into the fund plan"
            - name: Lump sum or monthly investing of a large gift
              description: |-
                ## Purpose
                When a grandparent gift or inheritance arrives for a child's education, investing it all at once usually does better on average, but phasing it in feels safer to many parents. Deciding with the years left to the start date in mind, rather than with the news headlines, gets the money working.

                ## Milestones
                1. The gift's amount and the years left to the start date recorded.
                2. The risk of investing all at once compared with phasing it over six to twelve months.
                3. A method chosen and written down before the money arrives in the fund.
                4. The gift fully invested by the chosen date.
              priority: low
              deadlineOffsetDays: 30
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A written lump sum or phasing decision for the gift, and the money fully invested by the date chosen."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Record the gift amount and the years left to the start date"
                - "Compare investing at once with phasing over six to twelve months"
                - "Choose a method and write down the end date"
                - "Set up the transfers so the gift is fully invested by that date"
            - name: Five-years-out fund review at age thirteen
              description: |-
                ## Purpose
                Five years before the first term is the last point where the fund can grow its way out of a shortfall, and the glide path should start biting. A dedicated review around the child's thirteenth birthday sets the course for the rest of school.

                ## Milestones
                1. Fund value compared with the target path and the latest cost estimate.
                2. The glide path for the next five years confirmed or adjusted.
                3. Any catch-up action agreed and started.
                4. Your child's current interests and likely study route noted.
              priority: medium
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A dated five-years-out review with the fund compared to target, the glide path confirmed and any catch-up action started."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Put the review in the calendar for the month of the thirteenth birthday"
                - "Compare the fund with the target and latest cost estimate"
                - "Confirm the glide path for the next five years"
                - "Start any catch-up action the review shows is needed"
            - name: First year's costs moved to cash before enrolment
              description: |-
                ## Purpose
                Money needed within twelve months should not be exposed to a share market fall. Moving the first year's fees and living costs into cash or a short-term option before the final school year begins means the first term is paid for whatever markets do.

                ## Milestones
                1. The first year's costs confirmed from the latest estimate.
                2. That amount switched into cash or a short-term option inside the account.
                3. The second year's costs checked as mostly out of shares.
                4. The switch recorded in the fund plan.
              priority: high
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "At least the first year's estimated costs sit in cash or a short-term option a year before the first payment."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Confirm the first year's costs from the latest estimate"
                - "Switch that amount into the cash option within the account"
                - "Check how much of the second year's costs is still in shares"
                - "Record the switch and date in the fund plan"
            - name: Receiving and recording a grandparent's lump sum
              description: |-
                ## Purpose
                Large gifts from grandparents can carry tax reporting for the giver, aid assessment implications and family expectations about how the money is used. Receiving one into the right account, with a short note of intent and a record of the date, keeps everyone clear and protects the gift.

                ## Milestones
                1. The account the gift should go into agreed with the giver.
                2. The giver's intent written in a short note: education only or wider use.
                3. The gift received and invested in line with the plan.
                4. A record kept of date, amount and any gift paperwork the giver needs.

                ## Notes
                Large gifts can have tax reporting duties for the giver. Suggest they check with their own adviser or the tax authority's guidance.
              priority: low
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "The gift is invested in the agreed account, with a signed or emailed note of intent and a dated record in the fund folder."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Agree with the grandparent which account the gift should go to"
                - "Ask the agent to draft a short note of the giver's intent for them to confirm"
                - "Invest the gift in line with the fund plan"
                - "File the date, amount and note in the gift record"
            - name: Offer-day funding check against the chosen university
              description: |-
                ## Purpose
                Once offers arrive, the estimate can be replaced with real fees, real halls prices and a real city. Checking the fund against the actual first choice and insurance choice, before your child commits, gives them an honest picture while there is still time to change course.

                ## Milestones
                1. Fees, accommodation and living costs gathered for the firm and backup choices.
                2. Each total compared with the fund and expected loans or grants.
                3. Any gap and how it will be covered discussed with your child.
                4. The final cost estimate dated in the fund plan.
              priority: medium
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A written comparison of the fund against the real costs of the first and backup choices, discussed with your child before they commit."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Collect fees and accommodation prices for each offer your child is weighing"
                - "Compare each total with the fund plus expected loans and grants"
                - "Talk through any gap with your child before they accept"
                - "Date the final cost estimate in the fund plan"
            - name: First tuition payment and withdrawal records
              description: |-
                ## Purpose
                The first withdrawal sets the pattern for every one after it. Paying the first fees and rent from the fund in the way the account rules expect, and keeping the invoices beside the withdrawal record, avoids a tax query or penalty months later.

                ## Milestones
                1. The first fee invoice and accommodation contract received.
                2. The withdrawal made to the right payee in the right tax year.
                3. Invoices and withdrawal confirmations filed together.
                4. The remaining balance compared with the costs still to come.
              priority: medium
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "The first year's fees are paid from the fund with every withdrawal matched to an invoice in the fund folder."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Request the first fee invoice from the university"
                - "Check whether the provider pays the university directly or pays you"
                - "Make the withdrawal and file it with the matching invoice"
                - "Compare the remaining balance with the costs still to come"
            - name: Closing or repurposing the fund after graduation
              description: |-
                ## Purpose
                Funds often end with something left over, or with the account still open years after the last term. Deciding what happens to any balance, closing the account cleanly and keeping the records for the period the tax authority expects wraps up a project that may have run for two decades.

                ## Milestones
                1. The final balance confirmed after the last qualifying withdrawal.
                2. A decision recorded on any leftover: sibling, postgraduate study, other use or withdrawal.
                3. The account closed or transferred as decided.
                4. Records kept for the period the tax authority requires.
              priority: low
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "The fund is closed or transferred with a recorded decision on any balance and the records archived."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Confirm the balance after the final term's withdrawal"
                - "Check the tax cost of each option for any leftover money"
                - "Close or transfer the account as decided"
                - "Archive the fund folder with a note of how long to keep it"
            - name: University fund for a newborn
              description: |-
                ## Purpose
                Starting at birth gives 18 years of compounding, so a modest monthly amount can cover a meaningful share of the bill. In the sleepless first year the aim is simply to open the account, pick a high-growth age-based option and automate a small payment, then refine the plan once life settles.

                ## Milestones
                1. The child's identity number or documents received from the registration process.
                2. An education account opened in the age-based or high-growth option.
                3. A small automatic monthly contribution running.
                4. A note in the calendar to build the full plan at the first birthday.
              priority: medium
              deadlineOffsetDays: 90
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "An education account for the baby is open, invested and receiving an automatic monthly contribution before their first birthday."
                cadence: phased
                effort_hours_estimate: "3"
              tasks:
                - "Find the documents the provider needs for a newborn"
                - "Open the account in the plan's youngest age-based option"
                - "Set up a small automatic monthly contribution"
                - "Diarise building the full plan at the first birthday"
            - name: Starting late with a teenager
              description: |-
                ## Purpose
                With five years or fewer to go, there is little time for growth and a market fall could do real damage. A late-start plan relies on contributions and cash flow rather than investment returns, keeps most of the money cautious, and sets an honest funding share your teenager can plan around.

                ## Milestones
                1. The years remaining and the realistic amount you can save in that time worked out.
                2. A cautious investment mix chosen, with most money in cash or short bonds.
                3. A funding share agreed that matches the realistic total.
                4. The funding share and plan explained to your teenager.

                ## Notes
                With under three years to go, many parents keep the whole fund in cash or near-cash. Discuss it with an adviser if the sums are large.
              priority: high
              deadlineOffsetDays: 60
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A late-start plan with a realistic total, a cautious mix and a funding share explained to your teenager."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Work out what you can realistically save before the start date"
                - "Choose a cautious mix weighted towards cash and short bonds"
                - "Agree a funding share that matches the realistic total"
                - "Explain the plan to your teenager and answer their questions"
            - name: University fund on a single income
              description: |-
                ## Purpose
                Single parents carry the bills, the childcare and the saving alone, so a university fund has to fit around an emergency buffer that may be thinner than in a two-income home. A plan sized to what one income can carry, with child maintenance and family gifts routed in where possible, is better than an ambitious plan that stops after a year.

                ## Milestones
                1. An emergency buffer level set that must be met before contributions rise.
                2. A monthly contribution chosen that fits one income through the leanest month.
                3. Any child maintenance or family gifts earmarked for the fund recorded.
                4. A named guardian or trusted person told where the fund details are kept.
              priority: medium
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A written single-income plan with a buffer threshold, a sustainable monthly figure and the fund details shared with a trusted person."
                cadence: phased
                effort_hours_estimate: "3"
              tasks:
                - "Set the emergency buffer you want before raising contributions"
                - "Pick a monthly figure that survives your leanest month"
                - "Decide whether any maintenance or gifts go to the fund"
                - "Tell your named guardian where the fund details are kept"
            - name: Separated parents sharing university costs
              description: |-
                ## Purpose
                After separation, assumptions about who pays for university are a common source of conflict, often surfacing only when the offer letter arrives. A written arrangement on contributions, fund ownership and how costs will be split, ideally made calmly years ahead, protects the child from being caught in the middle.

                ## Milestones
                1. Each parent's intended contribution or share written down.
                2. Ownership and access to any existing fund agreed.
                3. How extra costs and shortfalls will be split agreed.
                4. A regular fund update between parents set up.
                5. The arrangement checked with a family mediator or solicitor if it forms part of a formal agreement.
              priority: medium
              frontmatter:
                mode: service
                output_kind: deliverable
                success_criteria: "A written arrangement on university contributions and fund ownership, acknowledged by both parents."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Write down what you intend to contribute and ask the other parent to do the same"
                - "Agree who owns and can see the existing fund"
                - "Agree how shortfalls and extra costs will be shared"
                - "Share a fund statement with the other parent @recurring(quarterly)"
            - name: Grandparents contributing to a grandchild's fund
              description: |-
                ## Purpose
                Grandparents often want to help with university but are unsure whether to give to the parents, pay into an existing fund or open their own. Agreeing the route with the parents, and setting a giving rhythm that suits the grandparents' own finances and any gift tax rules, makes the help count without unintended effects on aid assessments.

                ## Milestones
                1. The parents' fund plan and preferred route for gifts understood.
                2. A route chosen: direct contribution, separate account or paying fees later.
                3. The grandparents' own retirement needs confirmed as covered before giving.
                4. A giving amount and rhythm agreed and recorded.

                ## Notes
                Gifts can affect the giver's inheritance or gift tax position and the grandchild's aid assessment. Grandparents should check with their own adviser.
              priority: low
              frontmatter:
                mode: service
                output_kind: deliverable
                success_criteria: "An agreed giving route and amount recorded by both grandparents and parents, with the first contribution made."
                cadence: phased
                effort_hours_estimate: "3"
              tasks:
                - "Ask the parents how they would like help with university to be given"
                - "Check that your own retirement income is secure before committing"
                - "Choose between paying into their fund, a separate account or paying fees later"
                - "Make the agreed yearly contribution @recurring(yearly)"
            - name: Saving for study abroad in another currency
              description: |-
                ## Purpose
                If your child may study in another country, both the fees and the exchange rate become part of the risk. Planning in the currency the bill will be paid in, and deciding when to convert, keeps a strong fund from being hollowed out by a currency swing in the final year.

                ## Milestones
                1. Likely destination countries and their currencies listed.
                2. The cost estimate restated in the currency of the bill.
                3. A conversion plan chosen, such as converting a year's costs at a time over the final years.
                4. Exchange rate checked and logged quarterly during the final three years.
              priority: low
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A cost estimate in the destination currency and a written conversion plan for the final years."
                cadence: phased
                effort_hours_estimate: "3"
              tasks:
                - "List the countries your child might realistically study in"
                - "Restate the cost estimate in each destination currency"
                - "Choose when and how you will convert the money"
                - "Log the exchange rate against your plan @recurring(quarterly)"
            - name: Year-by-year drawdown schedule for the study years
              description: |-
                ## Purpose
                A three or four year course is paid over several years, so the fund keeps working while your child studies. A drawdown schedule that matches each term's costs to cash already set aside, while later years stay cautiously invested, avoids selling in a downturn and spreads withdrawals sensibly for tax.

                ## Milestones
                1. Each term's fees and living costs listed with expected payment months.
                2. A rule set for how much is held in cash ahead of each term.
                3. Later years' money placed in a cautious mix.
                4. The schedule checked against the account's withdrawal and tax-year rules.
              priority: high
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A term-by-term drawdown schedule for the whole course, with cash held ahead of each payment and the account rules checked."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "List each term's costs with their payment months"
                - "Decide how many terms' costs to keep in cash at any time"
                - "Move the next term's money into cash ahead of time @recurring(quarterly)"
                - "Check the schedule against the withdrawal and tax-year rules"
            - name: Coordinating fund withdrawals with education tax credits
              description: |-
                ## Purpose
                Some countries offer tax credits or deductions for education costs, but the same cost usually cannot be used for both a tax-free withdrawal and a credit. Deciding which costs to pay from the fund and which from income or loans can be worth a meaningful sum each year.

                ## Milestones
                1. Any education tax credits or deductions available where you live listed.
                2. The rules on double-counting the same cost noted.
                3. A split agreed of which costs come from the fund and which from other money.
                4. The split checked with a tax adviser or the official guidance before the first tax return.

                ## Notes
                This is detailed tax territory. Use it to prepare questions for an accountant or tax adviser rather than to reach your own conclusion.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A written split of costs between fund withdrawals and tax credits, confirmed with a tax adviser or official guidance."
                cadence: cyclic
                effort_hours_estimate: "3"
              tasks:
                - "Find the education tax credits or deductions available where you live"
                - "Note which costs cannot count for both a credit and a tax-free withdrawal"
                - "Draft a split of costs between the fund and other money"
                - "Take the draft to your tax adviser before filing"
            - name: Overlapping siblings' study years cash plan
              description: |-
                ## Purpose
                Children two or three years apart can mean two sets of fees and rent in the same year, and that peak is when the household budget is most stretched. Mapping the overlap years and building cash for the peak prevents forced selling or a sudden squeeze on the younger child.

                ## Milestones
                1. Years when two or more children study at once identified.
                2. Peak-year costs totalled across all children.
                3. Each fund's glide path adjusted so cash is ready for the peak years.
                4. A household budget for the peak years drafted.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A cash plan showing total costs in each overlap year and enough money planned to be in cash before each one."
                cadence: phased
                effort_hours_estimate: "3"
              tasks:
                - "Mark the years when two children will study at once"
                - "Total all children's costs for each overlap year"
                - "Adjust each fund's glide path so cash is ready for those years"
                - "Draft a household budget for the peak years"
            - name: Funding postgraduate or professional study
              description: |-
                ## Purpose
                Medicine, law, architecture and research careers can need years of study beyond a first degree, often with less loan support. Deciding early whether the family will help with postgraduate costs, and whether the fund should stretch to cover them, changes both the target and the glide path.

                ## Milestones
                1. Typical postgraduate routes for your child's interests and their costs noted.
                2. Available loans and funding for postgraduate study checked.
                3. A family position agreed on supporting study beyond a first degree.
                4. The target and glide path updated if the fund will stretch further.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A recorded family position on postgraduate support, reflected in the fund's target and glide path."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "List the postgraduate routes linked to your child's interests"
                - "Check the loans and funding available for those routes"
                - "Agree whether the family will help beyond a first degree"
                - "Update the target and glide path if the fund will stretch"
            - name: Ten-year stress test of the university fund
              description: |-
                ## Purpose
                A plan that works at average returns can still fail on a poor decade, a job loss or a costlier course than expected. Testing the fund against four or five realistic bad scenarios, and writing down what you would do in each, means the response is decided calmly in advance rather than in a crisis.

                ## Milestones
                1. Four or five scenarios defined, such as weak returns, a fall at age 16, a paused contribution year and higher fees.
                2. The fund's outcome estimated for each scenario.
                3. A response written for each, such as a smaller funding share or more loans.
                4. The scenarios and responses saved with the fund plan.

                ## Notes
                Start from the **Risk register** template. Re-run it at the five-years-out review.
              priority: medium
              frontmatter:
                mode: research
                output_kind: artifact
                success_criteria: "A risk register with at least four scenarios, the estimated fund shortfall for each and a written response."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Define four or five bad scenarios for your family"
                - "Ask the agent to estimate the fund outcome under each scenario from your plan figures"
                - "Write a response for each scenario"
                - "Save the scenarios with the fund plan"
---

# University Fund Investing

Paying for a child's higher education is one of the few big family costs with a known start date, which makes it unusually well suited to a plan rather than a hope. This area is for parents, and the grandparents who help them, who want a fund sized to a real cost estimate and invested so that a market fall in the final years cannot wreck it. It starts with foundations (a costed estimate, a target and funding share, the account and contribution figure), then the routines that keep the fund on its path, the knowledge worth having about glide paths, aid assessments and withdrawal rules, the decisions best made once, dated milestones from the five-years-out review to the first fee payment, variants for newborns, late starters, single parents, separated parents and grandparents, and finally the specialist work of drawdown schedules, overlapping siblings and stress tests.

The rhythm is light: a monthly check that the contribution went in and the statement was filed, a quarterly look at the fund against its target path, and yearly jobs such as refreshing the cost estimate, stepping the risk down a notch, checking charges and allowances and a review with your partner. The Savings goal, Metrics log, Meeting notes and Risk register templates pair with the contribution plan, the quarterly tracking, the yearly review and the scenario stress test. Installing adds all 50 projects as active, so archive the ones that are not for you yet.
