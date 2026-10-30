---
id: family-office.family-investment-policy-statement
name: Family Investment Policy Statement
description: "A written family investment policy statement drafted with your advisers: goals and time horizons, risk tolerance, liquidity needs, roles, limits and a yearly review that keeps it current."
category: personal
version: 1.0.0
tags: [family-office, family-investment-policy-statement, parent, retiree, investment-policy, ips, risk-tolerance, governance]
author: Aurum Technology
starter_structure:
  templates:
    - reading-queue
    - meeting-notes
    - compliance-control
    - risk-register
  pillars:
    - name: Family Office & Private Wealth
      emoji: "🏰"
      description: "Running the affairs of a wealthy family, not picking investments: family governance and a constitution, trusts and foundations across jurisdictions, setting up a single-family office, a family investment policy and reporting, educating the next generation, philanthropy vehicles, household staff and concierge, and the security and privacy wealth brings."
      pillarFrontmatter:
        review_cadence: quarterly
      areas:
        - name: Family Investment Policy Statement
          description: "Writing a family investment policy statement with advisers: goals and time horizons, risk tolerance, liquidity needs, roles and governance."
          projects:
            - name: Scope of assets the policy will govern
              description: |-
                ## Purpose
                Before anyone writes a single objective, the family has to agree which money the policy actually covers: the liquid portfolio only, or also the holding company's cash, trust portfolios, private investments and property held for return. Families who skip this end up with a policy that governs half the wealth while the other half drifts under nobody's rules.

                ## Milestones
                1. A list of every pool of investable assets, with owner, custodian and approximate size band.
                2. Each pool marked as in scope, out of scope or covered by its own separate policy.
                3. Operating businesses and personal homes explicitly recorded as outside the policy, or the reason they are inside.
                4. The scope list agreed by the senior family members and the lead adviser.

                ## Notes
                Size bands are enough at this stage. Exact balances belong in the reporting system, not in a scoping note circulated by email.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A dated scope list showing every investable pool as in, out or separately governed, agreed by the senior family members and the lead adviser."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "List every account, portfolio and investment vehicle the family owns or benefits from"
                - "Mark each pool as in scope, out of scope or under its own policy"
                - "Note who owns each pool legally, the family member, a trust or a company"
                - "Send the scope list to the lead adviser and ask what is missing"
            - name: Collection of existing mandates and investment clauses
              description: |-
                ## Purpose
                Most families already have investment rules scattered across documents nobody has read together: discretionary mandates with each bank, investment powers in trust deeds, a holding company's articles, an old policy from a previous adviser. Gathering them first shows where the new statement must fit in and where the existing rules contradict each other.

                ## Milestones
                1. Every investment management agreement and mandate letter collected in one folder.
                2. The investment powers and restrictions in each trust deed and company constitution extracted into a short summary.
                3. Any earlier investment policy statement found and dated.
                4. A one-page note listing conflicts between the documents for the adviser to resolve.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: research
                output_kind: artifact
                success_criteria: "One folder holding every mandate, relevant trust and company clause and earlier policy, with a dated note of the conflicts found."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Ask each bank and manager for a copy of the current signed mandate"
                - "Ask the trustees for the investment powers clause of each trust deed"
                - "Search the family files for any earlier investment policy or guidelines"
                - "Write a one-page list of where the documents disagree"
            - name: Family goals and spending interviews
              description: |-
                ## Purpose
                An investment policy is only as good as the goals it serves, and goals held by a parent, a retiree and an adult child are rarely the same. Short private conversations with each adult member surface what the money is for: income in retirement, homes for children, a business stake, giving, or simply keeping the capital intact for the next generation.

                ## Milestones
                1. A conversation held with each adult member of the generations the policy serves.
                2. Each person's top three uses of the family's money written down in their own words.
                3. Expected annual spending from the portfolio gathered as a range for each household.
                4. A summary of shared goals and points of disagreement, without attributing views to individuals.

                ## Notes
                A neutral facilitator or the adviser often hears more than a parent does. Keep individual notes private and share only the anonymised summary.
              priority: high
              deadlineOffsetDays: 45
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "Interviews completed with every adult member in scope and a written anonymised summary of goals and spending ranges shared with the family."
                cadence: one-shot
                effort_hours_estimate: "10"
              tasks:
                - "List the adult family members whose goals the policy must serve"
                - "Draft five open questions about what the family money is for"
                - "Book a 45-minute private conversation with each person"
                - "Ask the agent to draft an anonymised summary from the interview notes"
            - name: Time horizon map for each pool of money
              description: |-
                ## Purpose
                Money needed for next year's school fees and money meant for grandchildren in thirty years should not be judged by the same yardstick. Splitting the in-scope wealth into pools by when it will be needed gives the policy a time horizon for each, and that horizon drives almost every later decision about risk and liquidity.

                ## Milestones
                1. Three to five named pools, such as near-term spending, medium-term commitments, long-term growth and legacy.
                2. A time horizon in years recorded for each pool.
                3. An approximate share of in-scope assets assigned to each pool.
                4. The map reviewed with the adviser and adopted as the basis for the draft.
              priority: high
              deadlineOffsetDays: 60
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A written map of named pools with a time horizon and share of assets each, agreed with the adviser."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Sort the goals from the interviews by the year the money is needed"
                - "Group them into three to five named pools"
                - "Estimate the share of in-scope assets each pool should hold"
                - "Review the map with the adviser and record the agreed version"
            - name: Risk tolerance and risk capacity assessment
              description: |-
                ## Purpose
                Willingness to bear losses and ability to bear them are different things: a retiree may feel relaxed about markets but have no income to replace a fall, while a founder with a large business may be able to absorb losses but lose sleep over them. Assessing both, with the adviser's questionnaire and a frank talk about past reactions to falls, produces a risk statement the family will actually stand behind in a bad year.

                ## Milestones
                1. The adviser's risk questionnaire completed by each signatory.
                2. A note of how each signatory reacted in the last large market fall.
                3. Risk capacity worked out from spending needs, other income and the size of the in-scope assets.
                4. A draft risk statement naming the largest fall the family has agreed it can live with, set with the adviser.

                ## Notes
                If willingness and capacity disagree, the lower one usually wins. Agree the wording with your adviser rather than picking a number from a brochure.
              priority: high
              deadlineOffsetDays: 60
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A written risk statement covering both tolerance and capacity, agreed by every signatory and the adviser, with the tolerable fall stated."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Ask the adviser for their risk questionnaire and how they score it"
                - "Have each signatory complete the questionnaire separately"
                - "Write down what each signatory did during the last big market fall"
                - "Agree the draft risk statement wording with the adviser"
            - name: Liquidity floor written into the policy
              description: |-
                ## Purpose
                A family can be wealthy on paper and short of cash in a month that brings a tax bill, a capital call and a house purchase at once. The policy should state the minimum held in cash and near-cash, in months of known outgoings, so no manager can invest it away and no signatory has to sell at the bottom.

                ## Milestones
                1. Known annual outgoings from the portfolio gathered from the family's cash plan.
                2. A liquidity floor expressed in months of outgoings, agreed with the adviser.
                3. The instruments that count towards the floor named in the policy.
                4. A rule for what happens if the floor is breached, and who is told.

                ## Notes
                The detailed cash forecast lives in the family's liquidity planning. The policy only needs the floor, what counts and the breach rule.
              priority: high
              deadlineOffsetDays: 75
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "The policy draft states a liquidity floor in months of outgoings, the eligible instruments and the breach rule, agreed with the adviser."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Ask the office for last year's total outgoings paid from the portfolio"
                - "Agree with the adviser how many months of outgoings the floor should hold"
                - "List the instruments that count towards the floor"
                - "Write the breach rule and the person who must be told"
            - name: Constraints register for the investment policy
              description: |-
                ## Purpose
                Every family has limits that a generic policy template misses: a trust deed that bans certain assets, tax rules that make selling a holding expensive, a regulator's view of a family member's role, a shareholding nobody may sell, or a religious or ethical line. Writing them in one register stops the adviser discovering them after the portfolio is built.

                ## Milestones
                1. Legal and trust constraints listed from the document collection.
                2. Tax constraints, such as large unrealised gains or residence rules, listed with the tax adviser.
                3. Holdings that may not be sold or must be kept recorded with the reason.
                4. Ethical, religious or reputational limits written in plain words.
                5. The register attached to the policy draft as a schedule.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A constraints register covering legal, tax, retained holdings and ethical limits, attached as a schedule to the policy draft."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Pull every investment restriction from the trust and company documents"
                - "Ask the tax adviser which holdings would be costly to sell"
                - "List any holdings the family has decided never to sell"
                - "Write the family's ethical or religious limits in one paragraph"
            - name: Choosing who holds the pen on the draft
              description: |-
                ## Purpose
                A policy drafted by the bank that manages the money tends to fit the bank's products, while one drafted by the family alone can miss what professionals know. Deciding early whether the office, an independent consultant, the lawyer or the lead adviser writes the first draft, and who reviews it, avoids a document with no clear owner.

                ## Milestones
                1. The options for the drafter listed: family office staff, independent consultant, lawyer or current adviser.
                2. Each option's independence, cost and knowledge of the family noted.
                3. One drafter appointed in writing with a timetable and fee agreed.
                4. A second reviewer named who did not write the draft.

                ## Notes
                An independent drafter who earns nothing from the portfolio is the usual way to keep product bias out of the statement.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A named drafter appointed in writing with fee and timetable, and a separate reviewer named."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "List who could draft the policy and how each is paid today"
                - "Ask two candidates for a fee quote and a sample policy with names removed"
                - "Appoint the drafter in a short engagement letter"
                - "Name a reviewer who earns nothing from the portfolio"
            - name: Roles and responsibilities matrix for the policy
              description: |-
                ## Purpose
                When a portfolio falls, the first question is always who decided what. A matrix showing which decisions belong to the family, the investment committee, the office, the trustees and each manager, and who is only consulted or informed, turns that argument into a lookup.

                ## Milestones
                1. The twelve to twenty recurring investment decisions listed, from setting ranges to picking individual securities.
                2. Each decision assigned to one owner, with those consulted and informed.
                3. Trustee decisions separated from family wishes where trusts hold assets.
                4. The matrix agreed and inserted into the policy draft.
              priority: high
              deadlineOffsetDays: 90
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A roles matrix with one named owner for each listed investment decision, agreed by the family and inserted into the policy."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "List every recurring investment decision the family, office and managers make"
                - "Assign one owner to each decision"
                - "Mark who must be consulted and who only informed"
                - "Check the trust decisions with the trustees before finalising"
            - name: Outline and table of contents for the statement
              description: |-
                ## Purpose
                Agreeing the headings before drafting saves weeks of rewriting. A good outline covers purpose and scope, objectives, risk, liquidity, constraints, asset allocation ranges, permitted investments, rebalancing, roles, monitoring, exceptions and review, and the family can see at a glance whether anything it cares about is missing.

                ## Milestones
                1. A draft table of contents circulated to the signatories.
                2. Each section given a one-line description of what it will say.
                3. Sections the family considers sensitive marked for a confidential schedule.
                4. The outline approved before full drafting starts.
              priority: medium
              deadlineOffsetDays: 60
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "An approved table of contents with a one-line description per section, signed off before drafting begins."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Ask the drafter for a proposed table of contents"
                - "Add a one-line description under each heading"
                - "Mark the sections that belong in a confidential schedule"
                - "Circulate the outline to the signatories for approval"
            - name: Writing the investment objectives section
              description: |-
                ## Purpose
                Vague objectives such as growth with safety cannot be checked. A useful objective ties the return the family needs to its spending, inflation and costs, over a stated period, so that in five years anyone can read the section and say whether the portfolio did its job.

                ## Milestones
                1. The family's expected spending rate from the portfolio stated.
                2. An objective written as a real return target over a rolling period, agreed with the adviser.
                3. A separate objective for each pool where pools differ.
                4. Secondary objectives such as capital preservation for heirs written in plain words.

                ## Notes
                The adviser sets what is realistic. The family's job is to say what the money must achieve and over what period success is judged.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "An objectives section stating a measurable return objective per pool, the period it is judged over and the spending it supports."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Write the expected annual spending from the portfolio as one figure"
                - "Ask the adviser what real return that spending implies after costs"
                - "Choose the rolling period over which the objective is judged"
                - "Draft the objective for each pool in two sentences or fewer"
            - name: Strategic asset allocation ranges with the adviser
              description: |-
                ## Purpose
                The allocation table is where the policy becomes concrete: target weights for each broad asset class with a permitted range around each. The adviser proposes it from the objectives, risk statement and constraints, and the family's job is to ask how it behaved in past falls, understand every class in it and approve ranges wide enough to avoid constant trading.

                ## Milestones
                1. A proposed allocation table received from the adviser with targets and ranges per asset class.
                2. The adviser's estimate of how the mix would have fared in two past market falls written down.
                3. Every asset class in the table explained in a sentence the signatories understand.
                4. The final table approved and inserted into the policy.

                ## Notes
                Ask for the reasoning, not just the numbers. A table the family cannot explain is a table it will abandon in a bad year.
              priority: high
              deadlineOffsetDays: 120
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "An allocation table with targets and ranges per asset class, with the adviser's stress estimates attached, approved by every signatory."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Ask the adviser for a proposed allocation table with targets and ranges"
                - "Ask how the proposed mix would have fared in two past market falls"
                - "List every asset class you could not explain to a relative"
                - "Hold a meeting to approve or amend the table"
            - name: Benchmarks and performance measurement rules
              description: |-
                ## Purpose
                Without agreed benchmarks, every review becomes an argument about whether a return was good. The policy should name a benchmark for each asset class and a blended benchmark for the whole portfolio, say how returns are measured after fees, and say over what period a manager is judged.

                ## Milestones
                1. A benchmark named for each asset class in the allocation table.
                2. A blended policy benchmark built from the target weights.
                3. A rule that returns are reported after all fees and in the family's base currency.
                4. The evaluation period for managers and for the whole portfolio stated.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "The policy names a benchmark per asset class, a blended policy benchmark, a net-of-fees rule and the evaluation period."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Ask the adviser to propose one benchmark per asset class"
                - "Have the blended benchmark built from the target weights"
                - "Write the net-of-fees and base currency reporting rule"
                - "Agree the period over which managers are judged"
            - name: Rebalancing policy and decision record
              description: |-
                ## Purpose
                Markets push a portfolio away from its targets, and without a rule the family either never rebalances or does it on a whim after reading the news. A written rule, whether calendar-based, range-based or both, with a named person who triggers it, keeps the allocation the family approved.

                ## Milestones
                1. A rebalancing method chosen with the adviser: calendar, ranges or a mix.
                2. The person or committee who authorises a rebalance named.
                3. Tax and cost considerations for rebalancing noted with the tax adviser.
                4. A log started for every rebalance with date, reason and trades in summary.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A written rebalancing rule with a named authoriser and a rebalancing log with an entry for each quarter since adoption."
                cadence: rolling
              tasks:
                - "Ask the adviser to compare calendar and range-based rebalancing for the family"
                - "Name who authorises a rebalance in the roles matrix"
                - "Ask the tax adviser how rebalancing gains are treated"
                - "Record each rebalancing decision against the policy ranges @recurring(quarterly)"
            - name: Permitted and prohibited investments schedule
              description: |-
                ## Purpose
                Managers will buy whatever their mandate allows, so the policy must say plainly what is allowed and what is not: derivatives only for hedging, no single issuer above a set share, no investments in family members' companies without approval, no instruments the signatories cannot explain. A short schedule is easier to enforce than paragraphs of prose.

                ## Milestones
                1. A list of permitted instrument types agreed with the adviser.
                2. A list of prohibited instruments and practices, each with a one-line reason.
                3. Single issuer and single manager concentration limits stated.
                4. The schedule cross-checked against each manager's mandate.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A schedule of permitted and prohibited investments with concentration limits, checked against every current mandate."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Ask the adviser for a draft permitted and prohibited list"
                - "Add a one-line reason beside every prohibition"
                - "Set issuer and manager concentration limits with the adviser"
                - "Compare the schedule with each manager's current mandate"
            - name: Concentrated holding policy for founder shares
              description: |-
                ## Purpose
                Families whose wealth came from one company often hold a single share position larger than the rest of the portfolio, and emotion makes it hard to discuss. The policy should say how that holding is treated: inside or outside the allocation, any planned reduction over time, hedging permitted or not, and who decides, so the subject is settled in calm conditions.

                ## Milestones
                1. The concentrated holding's share of total family wealth stated.
                2. A decision recorded on whether it sits inside or outside the allocation table.
                3. Any reduction plan, lock-up periods and insider rules noted with legal advice.
                4. The founder's view and the next generation's view both heard before the rule is adopted.

                ## Notes
                Insider dealing rules, lock-ups and tax on a sale are specialist matters. Take legal and tax advice before writing any sale schedule.
              priority: medium
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A policy clause on the concentrated holding stating its treatment, any reduction plan and the decision owner, adopted after legal and tax advice."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Work out the concentrated holding's share of total family wealth"
                - "Ask the lawyer about lock-ups and insider rules affecting a sale"
                - "Hold one conversation with the founder and one with the next generation"
                - "Check the holding's share of family wealth against the policy clause @recurring(quarterly)"
            - name: Private markets pacing and illiquidity limits
              description: |-
                ## Purpose
                Commitments to private equity, private credit or property funds are drawn over years and returned over more years, so a family can be over-committed without noticing. The policy should cap total illiquid exposure, set a yearly commitment pace and say how unfunded commitments are counted against the liquidity floor.

                ## Milestones
                1. Current private commitments listed with called and uncalled amounts.
                2. A maximum share of in-scope assets in illiquid investments agreed with the adviser.
                3. A yearly commitment budget written into the policy.
                4. A rule stating how uncalled commitments count against the liquidity floor.
              priority: medium
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "The policy caps illiquid exposure, sets a yearly commitment budget and defines how uncalled commitments are counted, agreed with the adviser."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "List every private fund commitment with called and uncalled amounts"
                - "Ask the adviser to model drawdowns and distributions for the next five years"
                - "Agree the illiquid cap and the yearly commitment budget"
                - "Refresh the commitment pacing plan before the new year @recurring(yearly)"
            - name: Values and responsible investing section
              description: |-
                ## Purpose
                Many families want the portfolio to reflect what they care about, but the generations often care about different things and the word sustainable means something different to each manager. Writing the family's position in its own words, with exclusions, preferences and how much return it is prepared to trade, gives managers instructions they can follow and avoids arguments at every review.

                ## Milestones
                1. Each generation's priorities collected in one short session.
                2. A list of exclusions the whole family accepts.
                3. Preferences or impact goals stated where the family agrees on them.
                4. A statement on how far the family accepts different returns for these choices, agreed with the adviser.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A values section listing agreed exclusions, any preferences and the family's stated position on return trade-offs, adopted into the policy."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Run a one-hour session asking each generation what the money should avoid"
                - "Write the exclusions everyone accepts as a short list"
                - "Ask the adviser how the exclusions would change the current portfolio"
                - "Draft the section in the family's own words"
            - name: Base currency and currency exposure rules
              description: |-
                ## Purpose
                A family with homes in two countries, children studying in a third and a business paid in a fourth has no obvious home currency. The policy should name a base currency for reporting, say which spending is in which currency, and set how much foreign currency risk is hedged, so returns are not judged in one currency and spent in another.

                ## Milestones
                1. The currencies of the family's main spending and liabilities listed.
                2. A base currency chosen for reporting and objectives.
                3. A hedging rule for foreign currency exposure agreed with the adviser.
                4. Any pool with a different spending currency given its own currency rule.

                ## Notes
                Families in Caribbean economies with pegged or managed currencies often hold US dollar spending pools. Ask the adviser how the peg affects the hedging rule.
              priority: low
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "The policy names a base currency, maps spending currencies and states a hedging rule agreed with the adviser."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "List the currencies the family spends and borrows in"
                - "Choose the base currency for reporting with the adviser"
                - "Ask the adviser to propose a hedging rule for foreign exposure"
                - "Write a currency rule for any pool spent in another currency"
            - name: Borrowing and gearing policy
              description: |-
                ## Purpose
                Lombard loans, margin accounts and fund-level borrowing can turn a fall the family could bear into one it cannot. The policy should state whether borrowing against the portfolio is allowed, for what purposes, up to what share of assets and with what margin call plan, so a bank's offer of cheap credit does not quietly change the family's risk.

                ## Milestones
                1. Every existing loan secured on investments listed with lender and terms.
                2. Permitted purposes for borrowing against the portfolio written down.
                3. A maximum borrowing level agreed with the adviser.
                4. A margin call plan naming which assets are sold first and who decides.
              priority: medium
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A borrowing clause listing permitted purposes, a maximum level and a margin call plan, with every existing secured loan recorded."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Ask each bank for a list of credit lines secured on family investments"
                - "Write down the purposes for which borrowing is allowed"
                - "Agree a maximum borrowing level with the adviser"
                - "Draft the margin call plan and name the decision owner"
            - name: Exceptions and breach procedure
              description: |-
                ## Purpose
                Ranges will be breached, sometimes by markets and sometimes by a manager's mistake, and the policy is weakened if nobody knows what happens next. A short procedure saying who is told, how fast, who may approve a temporary exception and how it is recorded keeps every breach visible and every exception deliberate.

                ## Milestones
                1. Breach types defined: market drift, manager error and deliberate exception.
                2. A notification timetable for each type written down.
                3. The person who may approve a temporary exception named, with a maximum duration.
                4. An exceptions log created and referenced in the policy.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A breach procedure with defined types, notification times, a named exception approver and an exceptions log in use."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Define the three types of breach in one sentence each"
                - "Set how quickly each type must be reported and to whom"
                - "Name who may approve a temporary exception and for how long"
                - "Create the exceptions log in the family office files"
            - name: Delegation of authority and signing limits
              description: |-
                ## Purpose
                Any policy that says the committee approves allocations but lets one family member sign any trade instruction is a policy in name only. Writing down what each person and body may approve, up to what value, and which decisions need two signatures, closes the gap between the document and the bank's mandate letters.

                ## Milestones
                1. Each signatory's current authority at every bank and manager listed.
                2. Approval limits by decision type and value agreed.
                3. Dual signature rules set for large or unusual instructions.
                4. Bank mandates updated to match the policy's limits.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A delegation schedule with approval limits and dual signature rules, and every bank mandate updated to match it."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Ask each bank for the current list of authorised signatories"
                - "Draft approval limits by decision type and value"
                - "Agree which instructions need two signatures"
                - "Check that bank signatory lists still match the policy @recurring(yearly)"
            - name: Conflicts of interest and related-party investments
              description: |-
                ## Purpose
                Families are asked to back a cousin's start-up, buy a stake in a friend's fund or co-invest with an adviser's firm, and each request carries a conflict. A clause on related-party investments, with declarations from signatories and advisers and a separate approval route, protects both the portfolio and family relationships.

                ## Milestones
                1. A definition of a related-party investment written for the family.
                2. A separate approval route agreed for related-party requests.
                3. Signatories and advisers asked to declare their interests in writing.
                4. A register of declared interests kept with the policy.

                ## Notes
                Loans to members for homes or ventures belong with the family bank rules. This clause covers investments the portfolio itself makes.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A related-party clause with its own approval route and a register of written declarations from every signatory and adviser."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Write a one-paragraph definition of a related-party investment"
                - "Agree who approves related-party requests and what they review"
                - "Send a declaration of interests form to signatories and advisers"
                - "Collect fresh declarations of interest from signatories @recurring(yearly)"
            - name: Quarterly policy compliance check
              description: |-
                ## Purpose
                Once the policy is signed, the risk is that nobody checks the portfolio against it until something goes wrong. A short quarterly check of allocation ranges, concentration limits, liquidity floor and borrowing level, done by someone who did not make the decisions, keeps the document honest.

                ## Milestones
                1. A one-page checklist built from every measurable limit in the policy.
                2. A named checker who is independent of the investment decisions.
                3. Each quarter's results filed with any breaches sent through the breach procedure.
                4. Four consecutive quarterly checks completed.

                ## Notes
                Start from the **Compliance control** template.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Four consecutive quarterly checks against every measurable policy limit filed, with breaches logged through the breach procedure."
                cadence: rolling
              tasks:
                - "List every measurable limit in the signed policy on one page"
                - "Name the person who will run the check"
                - "Run the policy compliance checklist against the latest statements @recurring(quarterly)"
                - "Log any limit breached between checks in the exceptions log @recurring(monthly:14)"
            - name: Annual policy review and re-signing
              description: |-
                ## Purpose
                Written for a family of four with a business still owned, a policy is wrong for a family of nine after the sale, yet many statements sit unchanged for a decade. A yearly review of goals, risk, liquidity, constraints and ranges, ending with every signatory re-signing, keeps the document current and keeps it read.

                ## Milestones
                1. A review pack prepared with the year's changes in family, wealth and markets.
                2. Each section confirmed or amended at the review meeting.
                3. The amended policy given a new version number and date.
                4. Every signatory's signature on the current version.
              priority: high
              frontmatter:
                mode: operating
                output_kind: deliverable
                success_criteria: "Each year a new dated version of the policy signed by every signatory, with a change summary filed."
                cadence: cyclic
              tasks:
                - "Choose the month the annual review will be held each year"
                - "Ask the drafter to prepare a review pack of the year's changes @recurring(yearly)"
                - "Collect every signatory's signature on the new version @recurring(yearly)"
                - "File a one-page change summary beside the signed version"
            - name: Risk register for the investment policy
              description: |-
                ## Purpose
                The policy deals with market risk, but families are hurt just as often by other things: a key adviser leaving, a custodian failing, a manager drifting from its style, a signatory losing capacity. A register of these risks with an owner and response for each, reviewed every quarter, keeps them in view.

                ## Milestones
                1. Ten to fifteen risks to the policy listed, beyond market moves.
                2. Each risk scored for likelihood and impact.
                3. An owner and response recorded for every risk.
                4. The register reviewed at least four times in the first year.

                ## Notes
                Start from the **Risk register** template.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: artifact
                success_criteria: "A scored risk register with an owner and response for each risk, reviewed four times in the first year."
                cadence: rolling
              tasks:
                - "List the risks to the policy that are not market moves"
                - "Score each risk for likelihood and impact"
                - "Give every risk an owner and a planned response"
                - "Review the investment policy risk register with the office @recurring(quarterly)"
            - name: Trigger events that reopen the policy
              description: |-
                ## Purpose
                Some events cannot wait for the annual review: the sale of a business, a death, a divorce, a large inheritance, a move to a new country, a change of trustee. Listing these triggers in the policy, with a short monthly check for whether one has happened, makes an off-cycle review automatic instead of forgotten.

                ## Milestones
                1. A list of trigger events written into the review section.
                2. A rule for how soon after a trigger the review must be held.
                3. A named person responsible for spotting triggers.
                4. Every trigger since adoption logged with the review it caused.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A trigger list in the policy and a log showing a monthly check and an off-cycle review for every trigger that occurred."
                cadence: rolling
              tasks:
                - "List the family events that should reopen the policy"
                - "Set how many weeks after a trigger the review must happen"
                - "Name the person who watches for triggers"
                - "Check the family's news against the trigger list @recurring(monthly:21)"
            - name: Briefing new signatories and family members
              description: |-
                ## Purpose
                Policies only work if the people bound by them understand them, and new signatories arrive all the time: an adult child, a new trustee, a spouse joining the committee, a new head of office. A standard briefing pack and a one-hour walk-through means nobody signs a document they have not read.

                ## Milestones
                1. A two-page plain-language summary of the policy written.
                2. A walk-through script covering objectives, risk, liquidity and roles.
                3. A signed acknowledgement collected from each new signatory.
                4. A list of current signatories kept with the master copy.
              priority: low
              frontmatter:
                mode: service
                output_kind: deliverable
                success_criteria: "A plain-language summary and walk-through used for every new signatory, with a signed acknowledgement on file for each."
                cadence: rolling
              tasks:
                - "Ask the agent to draft a two-page plain summary of the signed policy"
                - "Write a one-hour walk-through agenda for new signatories"
                - "Collect a signed acknowledgement after each walk-through"
                - "Confirm the list of current signatories with the office @recurring(yearly)"
            - name: Annual spending rate review
              description: |-
                ## Purpose
                The spending rate is the single number that most decides whether the capital lasts, and it creeps up quietly as households grow. Comparing actual withdrawals with the rate the policy assumed, once a year, tells the family whether the objectives still hold or the spending conversation needs to happen.

                ## Milestones
                1. Total withdrawals for the year gathered by household.
                2. Actual spending rate worked out against average in-scope assets.
                3. The gap between actual and policy rate explained.
                4. A decision recorded to hold, adjust spending or revisit the objective.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: decision
                success_criteria: "A yearly note comparing actual and policy spending rates with a recorded decision to hold or change course."
                cadence: cyclic
              tasks:
                - "Ask the office for total withdrawals by household for the year"
                - "Work out the actual spending rate against average assets"
                - "Compare actual spending with the rate assumed in the policy @recurring(yearly)"
                - "Record the family's decision on any gap"
            - name: Yearly stress test discussion
              description: |-
                ## Purpose
                Risk statements agreed in calm markets are tested only when markets fall. Asking the adviser once a year to show what a severe fall, a high-inflation decade and a currency shock would do to the portfolio and to spending lets the family rehearse its reaction and check that the policy still fits.

                ## Milestones
                1. Three scenarios chosen with the adviser.
                2. The estimated effect on portfolio value and on years of spending covered for each scenario.
                3. The family's planned response to each scenario written down.
                4. Any policy changes the test suggests passed to the annual review.
              priority: low
              frontmatter:
                mode: operating
                output_kind: knowledge
                success_criteria: "A yearly stress test note covering three scenarios, their estimated effects and the family's planned response."
                cadence: cyclic
              tasks:
                - "Agree three scenarios with the adviser for this year's test"
                - "Ask for the effect on value and years of spending covered"
                - "Write the family's planned response to each scenario"
                - "Book the stress test discussion with the adviser @recurring(yearly)"
            - name: Learning the parts of an investment policy statement
              description: |-
                ## Purpose
                Signatories who have never read a policy statement tend to approve whatever the adviser presents. A short reading programme, covering a few sample policies, a professional body's guide and a book on family wealth governance, lets a parent or retiree read the draft with informed questions.

                ## Milestones
                1. A reading list of five to eight items assembled.
                2. Two sample policies read and compared section by section.
                3. A list of questions to ask the drafter written from the reading.
                4. The reading list completed before the drafting workshop.

                ## Notes
                Start from the **Reading queue** template. Professional bodies for investment analysts and consultants publish free guides on policy statements.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Five or more readings finished before the workshop, with a written list of questions for the drafter."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "Ask the adviser for two sample policies with names removed"
                - "Add a professional body's guide on policy statements to the reading list"
                - "Read one item from the policy statement reading list @recurring(weekly)"
                - "Write questions for the drafter as you read"
            - name: Risk measures in plain language
              description: |-
                ## Purpose
                Advisers talk about volatility, drawdown, tracking error and value at risk, and families nod along. Learning what each measure does and does not tell you, with an example from the family's own portfolio, means the risk section of the policy is understood rather than accepted.

                ## Milestones
                1. Volatility, maximum drawdown, tracking error and value at risk each explained in one sentence.
                2. The adviser asked to show each measure for the current portfolio.
                3. The limits of each measure noted, especially for illiquid assets.
                4. The signatories agreed on which measure the policy will lead with.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A one-page glossary of four risk measures with the portfolio's current figures and an agreed lead measure for the policy."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Write a one-sentence definition of each of four risk measures"
                - "Ask the adviser to show each measure for the current portfolio"
                - "Note why each measure can mislead for private assets"
                - "Agree which measure the risk section will lead with"
            - name: Reading a performance report against the policy
              description: |-
                ## Purpose
                Quarterly reports arrive full of numbers, and the useful question is simply whether the portfolio is doing what the policy asked. Practising on real reports, comparing results with the objective, the blended benchmark and the ranges, makes every review meeting shorter and sharper.

                ## Milestones
                1. The report sections that map to the policy identified.
                2. Last quarter's return compared with the objective and the blended benchmark.
                3. Allocations compared with the policy ranges.
                4. Three questions for the adviser written from each report.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Two consecutive quarterly reports annotated against the policy, each with three written questions put to the adviser."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Mark on last quarter's report which pages map to the policy"
                - "Compare the return with the objective and the blended benchmark"
                - "Annotate the quarterly report against the policy ranges @recurring(quarterly)"
                - "Send three written questions to the adviser after each report"
            - name: Fees and their effect over decades
              description: |-
                ## Purpose
                Layers of fees, from the private bank, the managers, the funds and the consultants, compound quietly and can take a large share of a long-term return. Understanding every layer and modelling its effect over twenty or thirty years helps the family write a cost clause into the policy instead of discovering fees after the fact.

                ## Milestones
                1. Every fee layer on the portfolio listed, including fund-level costs.
                2. Total cost expressed as a share of assets for the last year.
                3. The effect of that cost over twenty years shown in a simple projection.
                4. A cost reporting clause drafted for the policy.

                ## Notes
                Negotiating fees with each manager belongs with adviser and manager oversight. This project is about understanding the total and writing the policy clause.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A full list of fee layers, a total cost figure for the year, a twenty-year projection and a cost clause in the draft."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Ask each provider for a full statement of fees and fund costs"
                - "Add the layers up to one total for the year"
                - "Project the effect of that total over twenty years"
                - "Draft a clause requiring all-in cost reporting"
            - name: Prudent investor duties for family trustees
              description: |-
                ## Purpose
                When a parent or retiree serves as a trustee, the trust's investments are judged against legal duties that differ from investing one's own money: diversification, regard for all beneficiaries, taking advice and reviewing it. Learning these duties in outline, and how a written policy helps meet them, protects family trustees and the trust.

                ## Milestones
                1. The governing law of each family trust noted.
                2. The main investment duties under that law summarised with the trust lawyer.
                3. How the policy statement helps document those duties understood.
                4. Any gaps between current practice and the duties passed to the trustees.

                ## Notes
                Trustee duties are a legal matter that varies by jurisdiction. Rely on the trust lawyer's summary, not a general guide.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A lawyer-checked summary of investment duties for each trust's governing law, with any practice gaps passed to the trustees."
                cadence: phased
                effort_hours_estimate: "5"
              tasks:
                - "List each family trust and its governing law"
                - "Ask the trust lawyer for a one-page summary of investment duties"
                - "Note where a written policy would help show those duties are met"
                - "Send any gaps you find to the trustees in writing"
            - name: Drafting workshop with family and advisers
              description: |-
                ## Purpose
                First drafts are best built in one room, with the signatories, the drafter and the lead adviser working through goals, risk, liquidity and roles together. A well prepared half-day workshop replaces months of emailed redlines and gives everyone a stake in the result.

                ## Milestones
                1. A date agreed with every signatory, the drafter and the lead adviser.
                2. A pre-read circulated a week ahead with the interview summary, horizon map and risk statement.
                3. Decisions and open questions recorded during the session.
                4. A first full draft circulated within three weeks of the workshop.

                ## Notes
                Start from the **Meeting notes** template.
              priority: medium
              deadlineOffsetDays: 90
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A half-day workshop held with all signatories, notes filed and a first full draft circulated within three weeks."
                cadence: one-shot
                effort_hours_estimate: "12"
              tasks:
                - "Propose three possible workshop dates to the signatories"
                - "Assemble the pre-read from the foundation projects"
                - "Record decisions and open questions during the workshop"
                - "Chase the first full draft three weeks after the workshop"
            - name: Sign-off meeting for the first policy
              description: |-
                ## Purpose
                Adoption should be a deliberate act, not a document that drifts into force. A short meeting where the final draft is walked through, last questions answered and every signatory signs, with the managers then sent a copy, marks the point from which the family's money is run to the policy.

                ## Milestones
                1. The final draft circulated two weeks before the meeting.
                2. Remaining questions answered in writing before or at the meeting.
                3. The policy signed by every signatory and dated.
                4. A copy sent to each manager and custodian with a request to confirm their mandate fits.
              priority: medium
              deadlineOffsetDays: 150
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "The first policy signed by every signatory and acknowledged in writing by each manager and custodian."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Circulate the final draft two weeks before the meeting"
                - "Collect remaining questions and answer them in writing"
                - "Hold the signing meeting and date the signed copy"
                - "Send the signed policy to each manager asking them to confirm fit"
            - name: Bringing manager mandates into line with the policy
              description: |-
                ## Purpose
                Signing the policy changes nothing until each manager's mandate reflects it. Comparing every mandate with the allocation ranges, permitted investments, borrowing rules and reporting requirements, then agreeing amendments, is the step most families forget after the signing.

                ## Milestones
                1. Each mandate compared clause by clause with the signed policy.
                2. A list of required amendments sent to each manager.
                3. Amended mandates signed or a reasoned exception recorded.
                4. A summary showing every mandate as aligned.
              priority: medium
              deadlineOffsetDays: 210
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "Every manager mandate amended to match the signed policy, or a recorded exception approved under the breach procedure."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Compare each mandate with the signed policy clause by clause"
                - "Send each manager a written list of amendments"
                - "Track each amended mandate to signature"
                - "Record any mandate that cannot be aligned as an exception"
            - name: First annual review of the new policy
              description: |-
                ## Purpose
                Year one's review is where a new policy proves useful or quietly dies. Holding it on time, with a full year's compliance checks, rebalancing log, spending figures and trigger log, shows the family what worked and what needs rewording while the reasoning is still fresh.

                ## Milestones
                1. The review date fixed within twelve months of signing.
                2. A pack prepared from the year's compliance checks, logs and spending figures.
                3. Each section confirmed or amended.
                4. Version two signed and circulated.
              priority: medium
              deadlineOffsetDays: 400
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "The first annual review held within thirteen months of signing, with version two of the policy signed."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Book the first review date in the signatories' calendars"
                - "Gather the year's compliance checks, logs and spending figures"
                - "List what the family wants to change after one year"
                - "Circulate version two for signature"
            - name: Policy review after a sharp market fall
              description: |-
                ## Purpose
                After a large fall the temptation is to change the policy to match the fear. A planned review, held a few weeks after the fall, checks whether the portfolio behaved as the stress test said, whether the liquidity floor held and whether rebalancing happened, and separates real lessons from panic.

                ## Milestones
                1. The size of the fall compared with the tolerable loss in the risk statement.
                2. The liquidity floor and rebalancing rule checked against what happened.
                3. Each signatory's reaction discussed openly.
                4. Changes, if any, deferred to a cooling-off period before adoption.

                ## Notes
                A good default is that no policy change made during a fall takes effect until a second meeting at least a month later.
              priority: medium
              frontmatter:
                mode: event
                output_kind: decision
                success_criteria: "A written review after the fall comparing outcomes with the policy, with any change adopted only after a cooling-off period."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Compare the fall with the tolerable loss in the policy"
                - "Check whether the liquidity floor and rebalancing rule held"
                - "Hold a meeting where each signatory says how they felt"
                - "Set a date at least a month later before any change takes effect"
            - name: Rewriting the policy after a business sale
              description: |-
                ## Purpose
                Selling the family business can turn a portfolio that was a side pot into most of the family's wealth overnight, with new cash, new goals and new pressure from banks. Rewriting the policy before the proceeds are invested, rather than after, stops a rush of products filling the gap.

                ## Milestones
                1. Expected net proceeds and timing confirmed with the deal advisers.
                2. A holding rule for the proceeds while the policy is rewritten.
                3. Goals, horizons and risk revisited for the larger wealth.
                4. A new policy signed before the proceeds are fully invested.

                ## Notes
                Many families park proceeds in short-term instruments for six to twelve months while the policy is redone. Agree the holding rule with your adviser.
              priority: medium
              frontmatter:
                mode: event
                output_kind: deliverable
                success_criteria: "A holding rule agreed for the proceeds and a rewritten policy signed before more than a small share of the proceeds is invested."
                cadence: phased
                effort_hours_estimate: "15"
              tasks:
                - "Confirm expected net proceeds and timing with the deal advisers"
                - "Agree a holding rule for the cash with the adviser"
                - "Rerun the goals interviews with the larger wealth in mind"
                - "Sign the new policy before investing the bulk of the proceeds"
            - name: Income-focused policy for a retiree
              description: |-
                ## Purpose
                Retirees living on the portfolio need a policy that answers different questions: how much can be drawn each year, from which pool, what happens to withdrawals after a bad year and how care costs later in life are covered. Writing those rules down gives a retired parent steady income and gives the children clarity about what the plan is.

                ## Milestones
                1. A sustainable withdrawal approach agreed with the adviser.
                2. A rule for adjusting withdrawals after a poor year.
                3. A reserve set aside in the policy for possible care costs.
                4. The arrangement explained to the adult children with the retiree's consent.

                ## Notes
                Withdrawal rates depend on age, health, other income and tax. Let the adviser propose the approach and keep the reasoning on file.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A retiree income section stating the withdrawal approach, the bad-year rule and a care reserve, agreed with the adviser."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "List the retiree's other income such as pensions and rents"
                - "Ask the adviser to propose a withdrawal approach"
                - "Agree a rule for withdrawals after a poor year"
                - "Check that the monthly income arrived as the policy planned @recurring(monthly:3)"
            - name: Separate policy for each family trust
              description: |-
                ## Purpose
                Trustees, not the family, own the investment decisions for trust assets, and each trust has its own beneficiaries, deed and governing law. A policy statement per trust, adopted by the trustees and consistent with the family's umbrella goals, respects that legal reality while keeping the family's intentions on record.

                ## Milestones
                1. Each trust listed with its trustees, beneficiaries and investment powers.
                2. A short policy drafted for each trust from the family template.
                3. The family's wishes for each trust recorded separately from the trustee's policy.
                4. Each trust policy adopted by resolution of its trustees.

                ## Notes
                A letter of wishes can express what the family hopes for, but the trustees decide. Keep the two documents separate.
              priority: medium
              frontmatter:
                mode: service
                output_kind: deliverable
                success_criteria: "A trustee-adopted policy statement for each family trust, with the family's wishes held in a separate document."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "List each trust with its trustees and investment powers"
                - "Send each trustee the family template and the trust's constraints"
                - "Ask each trustee to adopt the trust policy by resolution"
                - "Confirm with each trustee that the trust policy is still current @recurring(yearly)"
            - name: Endowment policy for the family foundation
              description: |-
                ## Purpose
                Foundation capital has a different job from the family's: it must fund grants in perpetuity or over a set life, meet any legal payout rules and avoid investments that clash with its mission. A separate endowment policy, adopted by the foundation board, lets the family's giving and investing pull in the same direction.

                ## Milestones
                1. The foundation's intended life, perpetual or spend-down, recorded.
                2. Any legal payout or distribution requirement confirmed with the foundation's lawyer.
                3. Mission-related exclusions agreed with the board.
                4. The endowment policy adopted by board resolution.
              priority: low
              frontmatter:
                mode: service
                output_kind: deliverable
                success_criteria: "An endowment policy adopted by the foundation board, stating its life, payout requirement and mission exclusions."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Ask the board whether the foundation is perpetual or spend-down"
                - "Confirm any payout requirement with the foundation's lawyer"
                - "Agree mission-related exclusions with the board"
                - "Compare grants paid with the endowment policy payout rule @recurring(yearly)"
            - name: Policy for a young family with long horizons
              description: |-
                ## Purpose
                Parents in their thirties and forties with young children have the longest horizons in the family and the most competing goals: school and university fees, a first family home, and capital for children decades away. A simple policy that ring-fences education money by year of need and lets the rest take a long view keeps those goals from crowding each other.

                ## Milestones
                1. Each child's expected education costs listed by year.
                2. An education pool set aside with a horizon matched to those years.
                3. A long-term pool defined with its own risk statement.
                4. The policy reviewed when each child starts a new stage of schooling.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A family policy with a dated education pool for each child and a separate long-term pool, each with its own risk statement."
                cadence: phased
                effort_hours_estimate: "5"
              tasks:
                - "Estimate each child's school and university costs by year"
                - "Agree with the adviser how the education pool should be held"
                - "Write a separate risk statement for the long-term pool"
                - "Add each child's school stage changes to the trigger list"
            - name: Sub-policies for adult children's portfolios
              description: |-
                ## Purpose
                As children become adults, many families give each a portfolio of their own, and a single family policy may not fit a 25-year-old saving for a home and a 45-year-old funding retirement. Short sub-policies under the family umbrella let each adult set their own goals and risk within shared limits, and are a gentle first lesson in governance.

                ## Milestones
                1. The shared limits every sub-policy must respect written in the umbrella policy.
                2. Each adult child's goals and horizon recorded in their own sub-policy.
                3. Each sub-policy signed by the child and noted by the family signatories.
                4. A yearly check that each sub-policy still sits inside the shared limits.
              priority: low
              frontmatter:
                mode: service
                output_kind: deliverable
                success_criteria: "A signed sub-policy for each adult child with a portfolio, each within the umbrella limits and checked yearly."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Write the shared limits every sub-policy must follow"
                - "Meet each adult child to draft their goals and horizon"
                - "Have each child sign their sub-policy"
                - "Check each sub-policy against the umbrella limits @recurring(yearly)"
            - name: Policy update after the death of the family leader
              description: |-
                ## Purpose
                When the person who set the family's investment direction dies, the policy may name them as decision maker, rely on their spending and reflect their risk appetite rather than their heirs'. A planned update, done carefully and not in the first weeks of grief, transfers authority, revisits goals and keeps managers clear about who now gives instructions.

                ## Milestones
                1. Every clause naming the late leader identified.
                2. Interim decision authority confirmed with the executors and the lawyer.
                3. Goals and risk revisited with the surviving spouse and heirs.
                4. An updated policy signed and sent to every manager.

                ## Notes
                Estate and probate rules may freeze or redirect accounts. Take the executors' and lawyer's lead on timing.
              priority: medium
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "An updated policy with no clause relying on the late leader, signed by the new signatories and acknowledged by every manager."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Mark every clause that names or relies on the late leader"
                - "Confirm interim authority with the executors and lawyer"
                - "Hold a gentle goals conversation with the surviving spouse and heirs"
                - "Send the updated policy to every manager and custodian"
            - name: Umbrella policy across holding company, trusts and individuals
              description: |-
                ## Purpose
                Wealth spread across a holding company, several trusts, a foundation and personal accounts can be invested at cross purposes, each piece sensible alone and the whole badly concentrated. An umbrella statement that sets family-wide goals and limits, with an addendum for each entity, lets advisers see the whole while respecting each owner's legal authority.

                ## Milestones
                1. A structure chart showing every entity whose assets the umbrella covers.
                2. Family-wide limits on concentration, illiquidity and currency agreed.
                3. An addendum drafted for each entity setting its own goals within the umbrella.
                4. A look-through check showing the combined position against family-wide limits.

                ## Notes
                Each entity's board or trustees must adopt its own addendum. The umbrella records the family's shared intent, not a power over trustees.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "An umbrella policy with family-wide limits and an adopted addendum for each entity, plus a look-through check against the limits."
                cadence: phased
                effort_hours_estimate: "16"
              tasks:
                - "Mark on the structure chart which entities the umbrella covers"
                - "Agree family-wide limits for concentration, illiquidity and currency"
                - "Draft an addendum template each entity can adopt"
                - "Ask the reporting provider for a combined look-through view"
            - name: Goals-based risk budgets by pool
              description: |-
                ## Purpose
                Experienced families often find one risk number for the whole portfolio too blunt, because the spending pool and the legacy pool should not share a loss limit. Setting a separate risk budget for each pool, and showing how they add up, lets the policy be cautious where it must and patient where it can.

                ## Milestones
                1. A risk budget agreed for each pool in the horizon map.
                2. The combined family risk shown as the sum of the pools.
                3. Rules for moving money between pools written down.
                4. The approach tested in the yearly stress test.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A written risk budget per pool, rules for transfers between pools and a stress test showing the combined result."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Ask the adviser to propose a risk budget for each pool"
                - "Check that the pool budgets add up to an acceptable family total"
                - "Write the rules for moving money between pools"
                - "Include the pool budgets in the next stress test"
            - name: Direct investment and co-investment rules
              description: |-
                ## Purpose
                Families with business experience are offered direct stakes in companies and property, and co-investments alongside funds, which bypass the managers the policy was written around. A dedicated section sets the share of wealth allowed in direct deals, the minimum diligence, who approves, and how a deal is valued and reported once held.

                ## Milestones
                1. A cap on direct and co-investments as a share of in-scope assets agreed.
                2. A minimum diligence checklist written for every direct deal.
                3. An approval route that includes at least one independent view.
                4. Valuation and reporting rules for held direct investments set.

                ## Notes
                Keep deal papers and confidential information about other companies out of the family's general files. Record only the decision and the summary.
              priority: low
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A direct investment section with a cap, a diligence checklist, an approval route with an independent voice and valuation rules."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Agree a cap on direct and co-investments with the adviser"
                - "Write a minimum diligence checklist for direct deals"
                - "Name an independent reviewer for every direct deal"
                - "Set how held direct investments are valued each year"
---

# Family Investment Policy Statement

This area is for a family that wants its money managed to a written policy rather than to whoever spoke last at the dinner table, and for the parent or retiree who will sign that policy with the advisers. It starts with foundations (what the policy covers, the documents already in force, the family's goals, time horizons, risk tolerance, liquidity floor, constraints and who holds the pen), then works through drafting each section, the routines that keep the policy alive, the knowledge needed to read it with confidence, the dated workshop, sign-off and first review, versions for a retiree, a trust, a foundation or a young family, and finally specialist work such as an umbrella policy across several entities.

What repeats is a quarterly check of the portfolio against the policy ranges, a quarterly risk register review, a monthly watch for events that should reopen the policy, and a yearly cycle of review, re-signing, spending rate and stress test discussions. The Reading queue, Meeting notes, Compliance control and Risk register templates pair with the study list, the drafting workshop, the compliance check and the risk register. Nothing here is investment, tax or legal advice: the family decides its goals and limits, and the numbers in the policy are set with qualified advisers. Installing adds all 50 projects as active, so archive the ones that are not for you yet.
