---
id: private-equity-vc.management-incentive-plans
name: Management Incentive Plans
description: "A route from first principles to a signed management equity plan: instrument choice, pool sizing, sweet equity and the envy ratio, vesting and leaver terms, a register that stays reconciled, and a plan the team actually understands."
category: business
version: 1.0.0
tags: [private-equity-vc, management-incentive-plans, knowledge-worker, sweet-equity, management-equity, leaver-terms, vesting, envy-ratio]
author: Aurum Technology
starter_structure:
  templates:
    - vendor
    - meeting-notes
    - compliance-control
    - board-meeting
    - metrics-log
  pillars:
    - name: Private Equity & Venture Capital
      emoji: "💹"
      description: "Private markets from the investor's side: sourcing and screening deals, LBO models, investment committee memos, due diligence, value creation and exits, raising and running your own fund, search funds and independent sponsors, venture deal flow and board seats, and careers in both, for people building their own track record."
      pillarFrontmatter:
        review_cadence: monthly
      areas:
        - name: Management Incentive Plans
          description: "Designing equity incentives for portfolio company management: sweet equity, options or MIPs, vesting, leaver terms and explaining the plan to the team."
          projects:
            - name: Written objectives for the management incentive plan
              description: |-
                ## Purpose
                Before anyone argues about percentages, the deal team should agree in writing what the plan is for: retaining five named people through exit, rewarding a specific value creation plan, or recruiting a missing CFO. A one-page objectives note settles later arguments about depth, vesting and ratchets because each term can be tested against it.

                ## Milestones
                1. A one-page note naming the three or four outcomes the plan must drive.
                2. The roles the plan must retain or attract listed by name or title.
                3. The holding period and expected exit route the plan assumes stated.
                4. The note agreed by the deal partner and filed with the deal papers.

                ## Notes
                Keep the note short. A plan that tries to reward everything ends up rewarding tenure rather than value.
              priority: high
              deadlineOffsetDays: 14
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A signed-off one-page objectives note exists, naming the outcomes, the key roles and the assumed holding period."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Draft three to four sentences on what the plan must achieve"
                - "List the roles that must stay through exit and any still to hire"
                - "Write down the holding period and exit route the model assumes"
                - "Agree the objectives note with the deal partner"
            - name: Entry cap table and existing management holdings
              description: |-
                ## Purpose
                Management often arrive with shares, options or earn-outs from the previous owner, and a new plan built without a clean picture double counts or misses them. Mapping every existing holding at entry, with what happens to each at completion, is the base every allocation conversation rests on.

                ## Milestones
                1. A pro forma cap table showing institutional, rollover and management lines at completion.
                2. Every existing option, share and phantom award listed with its treatment on the deal.
                3. Any accelerated vesting or change of control payments under the old plan quantified.
                4. The cap table reconciled to the sources and uses in the deal model.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A pro forma completion cap table exists that ties to the sources and uses, with every legacy award and its treatment listed."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Request the current share register and option schedules from the seller"
                - "List every legacy award with its change of control treatment"
                - "Build the pro forma completion cap table beside the sources and uses"
                - "Flag any legacy payments that hit the funds flow"
            - name: Choosing sweet equity, options or growth shares
              description: |-
                ## Purpose
                Ordinary sweet equity alongside an institutional strip, share options and growth or hurdle shares produce very different tax, cash and voting outcomes for the same headline percentage. Comparing them against the objectives note and the jurisdiction's rules, with counsel, turns an instinct into a recorded choice.

                ## Milestones
                1. Three candidate instruments described on one page with how each pays out.
                2. Tax and securities questions for each written for counsel to answer.
                3. Counsel's view on each instrument in this jurisdiction recorded.
                4. The chosen instrument and the reasons for it written into the deal file.

                ## Notes
                The comparison is about structure and process. Whether an instrument qualifies for any tax treatment is for counsel and the tax adviser to say.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "The chosen instrument is recorded with counsel's written view and a short rationale tied to the plan objectives."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Describe how sweet equity, options and growth shares each pay out at exit"
                - "Write the tax and securities questions for counsel on each instrument"
                - "Record counsel's answers beside each option"
                - "Write the chosen instrument and the reasons into the deal file"
            - name: Sizing the management equity pool
              description: |-
                ## Purpose
                Pool size decides how much of the upside management share and how much room is left for future hires, and it is hard to enlarge once the deal closes. Sizing it from the roles to be covered, the house range for similar deals and the dilution it causes to fund returns gives the partner a number with a reason behind it.

                ## Milestones
                1. The participants and future hires the pool must cover counted.
                2. A pool size expressed as a share of ordinary equity, with a low and high case.
                3. The effect on fund money multiple and IRR shown at the base exit.
                4. An unallocated reserve for hires and promotions agreed.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A pool size with an unallocated reserve is agreed by the deal partner, with its effect on fund returns shown in the model."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Count the current participants and the hires the plan must cover"
                - "Pull the pool sizes used on comparable house deals"
                - "Run the fund returns at a low and a high pool size"
                - "Agree the pool size and the unallocated reserve with the partner"
            - name: Envy ratio and institutional strip calculation
              description: |-
                ## Purpose
                Management's sweet equity is only attractive if they pay less per point of upside than the fund does, and the envy ratio measures exactly that gap. Calculating it from the institutional strip, the loan notes or preference shares and the management subscription shows whether the structure is generous, mean or about right before it reaches the term sheet.

                ## Milestones
                1. The institutional strip split between ordinary equity and preferred instruments set out.
                2. Management's total subscription and share of ordinary equity stated.
                3. The envy ratio calculated and checked by a second person.
                4. Management proceeds at three exit values shown beside the fund's.

                ## Notes
                A very high envy ratio can raise tax questions about whether value passed to management on entry. Ask counsel before finalising.
              priority: medium
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A checked envy ratio calculation exists with management and fund proceeds shown at three exit values."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Set out the institutional strip between ordinary and preferred instruments"
                - "Calculate the envy ratio from the subscription prices"
                - "Ask a colleague to check the calculation line by line"
                - "Show management and fund proceeds at low, base and high exits"
            - name: Appointing the MIP advisers
              description: |-
                ## Purpose
                A plan touches tax, employment law, corporate law and valuation, and gaps between advisers are where costly mistakes sit. Appointing counsel, a tax adviser and, where needed, an independent valuer with a written scope and fee cap means each question has an owner and nothing falls between them.

                ## Milestones
                1. A list of the advice areas the plan needs, each with an owner.
                2. Engagement letters with scope and fee caps signed for each adviser.
                3. A single adviser named to coordinate the documents.
                4. A kick-off call held with every adviser on the same call.

                ## Notes
                Start from the **Vendor** template for each adviser. Management usually need their own separate adviser; budget for it.
              priority: medium
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "Signed engagement letters with fee caps exist for counsel, tax and valuation, with one named coordinating adviser."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "List the advice areas the plan needs and who covers each"
                - "Request scope and fee proposals from two firms per area"
                - "Sign engagement letters with fee caps"
                - "Hold one kick-off call with all advisers together"
            - name: Entry valuation of management shares
              description: |-
                ## Purpose
                The price management pay for their shares on entry drives the tax position on the way in and the gain on the way out, and tax authorities can challenge a price that looks too low. An independent or well-documented valuation, prepared before subscription, is the record you will want if anyone asks years later.

                ## Milestones
                1. The valuation approach agreed with the tax adviser.
                2. A valuation report or memo dated before the subscription date.
                3. The subscription price per share set from the valuation.
                4. The valuation filed with the completion bible.

                ## Notes
                Whether the price needs agreeing with the tax authority in advance depends on the jurisdiction; ask the tax adviser.
              priority: high
              deadlineOffsetDays: 45
              frontmatter:
                mode: research
                output_kind: artifact
                success_criteria: "A dated valuation memo supports the subscription price and is filed in the completion bible before shares are issued."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Ask the tax adviser which valuation approach the plan needs"
                - "Send the valuer the cap table, model and instrument terms"
                - "Review the draft valuation against the deal price"
                - "File the final valuation with the completion documents"
            - name: MIP term sheet for the deal
              description: |-
                ## Purpose
                A two-page term sheet agreed with management before lawyers draft saves weeks of redlines and avoids surprises in the articles. It should cover instrument, pool, price, vesting, leaver terms, any ratchet, drag and tag, and what happens on a partial exit.

                ## Milestones
                1. A term sheet covering every economic and leaver term on two pages.
                2. Internal sign-off from the deal partner on each term.
                3. Management's comments received and a marked-up version agreed.
                4. The agreed term sheet sent to counsel as the drafting brief.
              priority: high
              deadlineOffsetDays: 45
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "A two-page MIP term sheet agreed with management is in counsel's hands as the drafting brief."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Draft the term sheet from the objectives note and pool decision"
                - "Get the deal partner to sign off each term"
                - "Send the term sheet to management and their adviser"
                - "Send the agreed version to counsel to draft from"
            - name: Confidentiality rules for individual allocations
              description: |-
                ## Purpose
                Individual allocations leak quickly and a manager who learns a peer got more can sour the whole team. Agreeing who sees the full allocation schedule, where it is stored and how each participant hears only their own number protects the plan from day one.

                ## Milestones
                1. A short list of people allowed to see the full allocation schedule.
                2. One controlled location for the schedule and the drafts.
                3. A rule that each participant receives only their own award letter.
                4. The rules shared with advisers and the company's HR lead.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A written access list and storage location for the allocation schedule exist and have been shared with advisers and HR."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Name the people who may see the full allocation schedule"
                - "Move all allocation drafts into one restricted folder"
                - "Tell advisers and HR the rules in writing"
                - "Check award letters show only the recipient's own number"
            - name: Leaver register for plan participants
              description: |-
                ## Purpose
                Leaver events are where plans go wrong: a missed notice period, an unvalued compulsory transfer or a good leaver treated as bad can end in a dispute. A register that logs every departure, its classification, the price formula applied and the date shares were transferred keeps each case clean.

                ## Milestones
                1. A register listing every participant with status and leaver category if departed.
                2. Each leaver case showing notice date, classification and price basis.
                3. Compulsory transfer completed and recorded for every closed case.
                4. Any disputed classification flagged to counsel with dates.

                ## Notes
                Classification of a leaver is a legal question under the articles; record the facts and take the call with counsel.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every departed participant appears in the register with classification, price basis and transfer date, reviewed monthly."
                cadence: rolling
              tasks:
                - "Set up the register with one row per participant"
                - "Review departures with the company's HR lead @recurring(monthly:9)"
                - "Log each leaver's notice date and the clause relied on"
                - "Record the transfer date when each leaver case closes"
            - name: Allocation ledger reconciled to the cap table
              description: |-
                ## Purpose
                Over a five-year hold the pool is granted, forfeited, recycled and topped up, and a spreadsheet that drifts from the statutory register causes trouble at exit. A ledger reconciled each month to the company's register means the exit waterfall can be run from clean numbers.

                ## Milestones
                1. A ledger of grants, forfeitures and recycled shares with dates.
                2. Unallocated pool balance shown at each month end.
                3. A monthly reconciliation to the company's register with differences explained.
                4. Company secretary confirmation that filings match the ledger.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "The allocation ledger agrees to the statutory register at every month end for a full year, with any difference explained."
                cadence: rolling
              tasks:
                - "Build the ledger from completion with one line per grant"
                - "Reconcile the ledger to the share register @recurring(monthly:14)"
                - "Note the unallocated pool balance after each reconciliation"
                - "Ask the company secretary to confirm filings match"
            - name: Vesting schedule tracker
              description: |-
                ## Purpose
                Time-vesting and performance-vesting tranches build up quietly and are often only checked at a leaver event or exit, when it is too late to correct. A tracker showing each participant's vested and unvested position, updated each quarter, answers the leaver question in minutes.

                ## Milestones
                1. Every participant's vesting start date and schedule entered.
                2. Vested and unvested positions shown per person each quarter.
                3. Any performance conditions linked to the evidence that tests them.
                4. The tracker agreed with the company's finance lead.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A vesting tracker shows each participant's vested and unvested position, updated every quarter and agreed with finance."
                cadence: rolling
              tasks:
                - "Enter each participant's start date and vesting schedule"
                - "Update vested and unvested positions @recurring(quarterly)"
                - "Link performance conditions to the accounts that test them"
                - "Agree the tracker with the company's finance lead"
            - name: Quarterly indicative value statements for participants
              description: |-
                ## Purpose
                Managers who never see what their equity might be worth stop believing in it, and those shown a careless number hold you to it. A short quarterly statement with an indicative value range, the assumptions behind it and a clear caveat keeps the plan alive without promising anything.

                ## Milestones
                1. A one-page statement format with value range, assumptions and caveat.
                2. Indicative values tied to the latest fund valuation of the company.
                3. Statements issued to each participant individually each quarter.
                4. Questions from participants logged and answered.

                ## Notes
                Have counsel approve the caveat wording once. Never send a single point value.
              priority: medium
              frontmatter:
                mode: service
                output_kind: habit
                success_criteria: "Each participant receives an individual statement with a value range and approved caveat every quarter for a year."
                cadence: rolling
              tasks:
                - "Draft a one-page statement format with an approved caveat"
                - "Issue individual value statements after the fund valuation @recurring(quarterly)"
                - "Log questions participants raise about their statement"
                - "Answer each question within two weeks"
            - name: New joiner and promotion grant routine
              description: |-
                ## Purpose
                Most plans need new awards after completion for hires and promotions, and ad hoc grants made months late at a stale price create tax and fairness problems. A standing routine that checks the hiring plan, values the grant and issues award letters keeps the reserve working as intended.

                ## Milestones
                1. A list of roles eligible for a grant and the typical range for each.
                2. A grant approval step with the board or remuneration committee.
                3. Award letters issued within an agreed number of weeks of start date.
                4. Each grant entered in the allocation ledger.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every eligible hire or promotion in a year receives an approved award letter within the agreed window and appears in the ledger."
                cadence: rolling
              tasks:
                - "Write grant ranges for each eligible role"
                - "Check the hiring plan for roles due an award @recurring(monthly:21)"
                - "Send each proposed grant to the remuneration committee for approval"
                - "Issue the award letter and update the ledger"
            - name: Annual remuneration committee review of the plan
              description: |-
                ## Purpose
                Once a year the board should ask whether the plan still drives the outcomes it was built for: who has left, what is unallocated, whether hurdles look reachable and whether key people feel underwater. A structured annual review turns those questions into board minutes and actions.

                ## Milestones
                1. A review pack covering leavers, pool balance, vesting and hurdle position.
                2. Participant sentiment gathered from the CEO and HR lead.
                3. Remuneration committee meeting held with the pack.
                4. Decisions and actions minuted with owners.

                ## Notes
                Start from the **Board meeting** template for the remuneration committee session.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A remuneration committee meeting reviews the plan each year with a written pack and minuted actions."
                cadence: cyclic
              tasks:
                - "Book the remuneration committee review of the plan @recurring(yearly)"
                - "Assemble the pack on leavers, pool, vesting and hurdles"
                - "Ask the CEO and HR lead how participants view the plan"
                - "Minute the decisions and assign owners"
            - name: Annual valuation refresh for new grants
              description: |-
                ## Purpose
                Grants made at the entry price two years after completion can create a tax charge or an unfair windfall. Refreshing the share valuation each year, before the grant window, gives new awards a defensible price.

                ## Milestones
                1. A yearly valuation date agreed with the tax adviser.
                2. The valuation updated from the latest accounts and fund valuation.
                3. A memo stating the price for grants made until the next refresh.
                4. The memo filed beside the original entry valuation.
              priority: low
              frontmatter:
                mode: operating
                output_kind: artifact
                success_criteria: "A dated valuation memo for new grants is refreshed each year before any awards are made."
                cadence: cyclic
              tasks:
                - "Agree the yearly valuation date with the tax adviser"
                - "Commission the valuation refresh from the latest accounts @recurring(yearly)"
                - "Record the grant price in a short memo"
                - "File the memo beside the entry valuation"
            - name: Employee share reporting and filing calendar
              description: |-
                ## Purpose
                Many jurisdictions require annual returns on employee share awards, notices on grants and withholding when shares vest or are sold, and missed filings carry penalties. A calendar of every filing the plan triggers, with the owner and adviser for each, keeps the company out of trouble.

                ## Milestones
                1. Every filing and withholding duty the plan triggers listed with counsel.
                2. A due date and owner set for each.
                3. Evidence of each completed filing stored in one place.
                4. A year completed with no late filings.

                ## Notes
                Start from the **Compliance control** template. The list of filings must come from the tax adviser for each country the participants live in.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A filing calendar with owners exists and a full year passes with every plan-related return filed on time."
                cadence: rolling
              tasks:
                - "Ask the tax adviser for every filing the plan triggers"
                - "Check the filing calendar for items due @recurring(monthly:3)"
                - "Confirm the annual employee share return was filed @recurring(yearly)"
                - "Store each filing receipt in the plan folder"
            - name: Ratchet and hurdle position tracker
              description: |-
                ## Purpose
                Performance ratchets and hurdles only motivate if management know where they stand against them. A tracker that converts the latest forecast into a projected fund multiple and the ratchet band it implies lets the partner and the CEO talk about the same number.

                ## Milestones
                1. The ratchet or hurdle mechanics written out from the articles.
                2. A tracker turning the latest forecast into a projected fund multiple.
                3. The implied ratchet band shown each month.
                4. The position shared with the deal partner each quarter.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A monthly tracker shows the projected fund multiple and ratchet band, reviewed with the deal partner each quarter."
                cadence: rolling
              tasks:
                - "Write the ratchet mechanics in plain words from the articles"
                - "Update the tracker after the monthly accounts @recurring(monthly:18)"
                - "Share the ratchet position with the deal partner @recurring(quarterly)"
                - "Note any change in forecast that moves the band"
            - name: Modelling management proceeds through the exit waterfall
              description: |-
                ## Purpose
                Management care about what lands in their bank account, not about the fund multiple, and a waterfall that misorders preferred return, loan note interest and ratchets gives everyone the wrong answer. Building the management proceeds tab yourself is the fastest way to understand how the structure really pays out.

                ## Milestones
                1. A waterfall tab ordering debt, preferred instruments, ordinary equity and ratchets.
                2. Proceeds per participant at five exit values.
                3. The tab reconciled to the fund's own returns model.
                4. A chart of management share of proceeds against exit value.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A waterfall tab produces proceeds per participant at five exit values and reconciles to the fund returns model."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "List every instrument in order of payout from the articles"
                - "Build the waterfall tab at five exit values"
                - "Reconcile the tab to the fund returns model"
                - "Chart management's share of proceeds against exit value"
            - name: Studying sweet equity economics across exit outcomes
              description: |-
                ## Purpose
                Sweet equity behaves like a geared option on the business: it is worth nothing in a weak exit and a great deal in a strong one. Working through how the preferred coupon, the institutional strip and holding period change management's outcome builds the intuition to defend a structure in front of both management and the committee.

                ## Milestones
                1. Management value at break-even, base and strong exits calculated.
                2. The effect of the preferred coupon on management value over four, five and six years shown.
                3. A one-page note explaining the shape of the payout in plain words.
                4. The note reviewed by a senior colleague.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A reviewed one-page note explains management payout shape across three exit outcomes and three holding periods."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Calculate management value at break-even, base and strong exits"
                - "Rerun with four, five and six year holding periods"
                - "Write a one-page explanation of the payout shape"
                - "Ask a senior colleague to review the note"
            - name: Good, bad and intermediate leaver provisions
              description: |-
                ## Purpose
                Leaver terms decide what a manager keeps if they leave early, and they are the most negotiated part of any plan. Studying the common structures (cost versus market value, time-based tapering, intermediate categories, and what counts as cause) lets you explain trade-offs instead of reciting the house form.

                ## Milestones
                1. A table of the common leaver categories and price outcomes.
                2. Three real leaver scenarios worked through under each structure.
                3. The terms management advisers usually push back on listed.
                4. A short brief of preferred and fallback positions reviewed by counsel.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A counsel-reviewed brief sets out leaver categories, three worked scenarios and preferred and fallback positions."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Tabulate common leaver categories and their price outcomes"
                - "Work three leaver scenarios through each structure"
                - "List the terms management advisers usually challenge"
                - "Send the preferred and fallback brief to counsel for review"
            - name: Tax touchpoints of management equity with counsel
              description: |-
                ## Purpose
                Every plan has tax moments: subscription, any elections on acquisition, vesting, leaver transfers and sale. Mapping those touchpoints with the tax adviser, without trying to answer them yourself, means the right questions are asked at the right time on every deal.

                ## Milestones
                1. A timeline of the tax events a typical plan creates.
                2. The questions for each event written for the tax adviser.
                3. The adviser's answers for this jurisdiction recorded.
                4. Deadlines for any elections or filings added to the filing calendar.

                ## Notes
                This is a map of questions. The answers are for the tax adviser and may differ for each participant.
              priority: medium
              deadlineOffsetDays: 60
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A timeline of plan tax events carries the tax adviser's recorded answers, with any election deadlines added to the calendar."
                cadence: phased
                effort_hours_estimate: "5"
              tasks:
                - "Draw a timeline of tax events from subscription to sale"
                - "Write the question for the tax adviser at each event"
                - "Record the adviser's answers for this jurisdiction"
                - "Add any election deadlines to the filing calendar"
            - name: Ratchets and performance conditions
              description: |-
                ## Purpose
                Ratchets that move management's share with fund returns can align interests well, but badly drafted ones reward financial engineering or create a cliff that pushes for a rushed exit. Learning how money multiple and IRR ratchets, sliding scales and caps behave lets you propose one only where it fits.

                ## Milestones
                1. Money multiple, IRR and combined ratchets described with a worked example each.
                2. The cliff effect of a single-step ratchet shown on a chart.
                3. A note on when a ratchet helps and when it distorts behaviour.
                4. The note shared with the deal team.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A shared note explains three ratchet designs with worked examples and a chart of the single-step cliff."
                cadence: phased
                effort_hours_estimate: "5"
              tasks:
                - "Work an example for a money multiple ratchet"
                - "Work an example for an IRR ratchet and a combined test"
                - "Chart the cliff effect of a single-step ratchet"
                - "Write when a ratchet helps and when it distorts behaviour"
            - name: Reading the articles and shareholders' agreement for management terms
              description: |-
                ## Purpose
                The plan lives in the articles of association and the investment agreement, not in the term sheet, and drafting often drifts from what was agreed. Reading the documents clause by clause against the term sheet catches errors before they are signed into the company's constitution.

                ## Milestones
                1. A checklist mapping each term sheet item to its clause.
                2. Every mismatch between term sheet and drafts listed.
                3. Mismatches raised with counsel and resolved or explained.
                4. A clean sign-off on the final drafts recorded.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: artifact
                success_criteria: "A checklist maps every term sheet item to a clause, with all mismatches resolved before signing."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Map each term sheet item to its clause in the drafts"
                - "List every mismatch you find"
                - "Raise the mismatches with counsel in one note"
                - "Record sign-off once the drafts match"
            - name: House benchmark of management plan terms
              description: |-
                ## Purpose
                Partners ask what the house usually does on pool size, envy ratio, vesting and leaver terms, and the answer is often a memory of the last deal. A benchmark table built from closed deals gives an evidence-based range without sharing any one company's confidential terms outside the firm.

                ## Milestones
                1. A table of key plan terms for every closed deal you can access.
                2. Ranges and medians for pool size, envy ratio and vesting period.
                3. A rule on who may see the table and how it is anonymised.
                4. The benchmark used in at least one live term sheet discussion.

                ## Notes
                Start from the **Metrics log** template. Keep it inside the firm's systems.
              priority: low
              frontmatter:
                mode: research
                output_kind: artifact
                success_criteria: "An anonymised benchmark of plan terms across closed deals exists with ranges and medians, updated each quarter."
                cadence: rolling
              tasks:
                - "Collect plan terms from the closed deals you can access"
                - "Calculate ranges and medians for the main terms"
                - "Agree access and anonymisation rules with the partner"
                - "Add newly closed deals to the benchmark @recurring(quarterly)"
            - name: Explaining the plan to non-finance managers
              description: |-
                ## Purpose
                Sales directors and operations heads who cannot explain their own equity will value it at zero. Practising a ten-minute plain-language explanation, with one chart and three worked numbers, makes the plan land with people who do not read articles.

                ## Milestones
                1. A ten-minute explanation script with one chart.
                2. Three worked examples of what a participant might receive.
                3. The explanation tested on a non-finance colleague.
                4. The script revised after their questions.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: artifact
                success_criteria: "A tested ten-minute explanation with one chart and three worked examples is ready for the management presentation."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Ask the agent to draft a plain-language explanation from the term sheet"
                - "Pick one chart showing payout against exit value"
                - "Test the explanation on a non-finance colleague"
                - "Revise the script after their questions"
            - name: Deciding how deep the plan reaches
              description: |-
                ## Purpose
                Limiting the plan to the top four concentrates reward but can leave the next layer of managers, who run the plants and the sales teams, with nothing to aim for. Deciding depth deliberately, perhaps with a second-tier plan or a cash scheme below the equity line, avoids an unhappy middle layer.

                ## Milestones
                1. Each management layer listed with the outcomes they influence.
                2. Two or three depth options costed against the pool.
                3. A recommendation on depth with any second-tier scheme described.
                4. The decision agreed with the CEO and the deal partner.
              priority: medium
              deadlineOffsetDays: 45
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A recorded decision on plan depth, agreed with the CEO and deal partner, covers any second-tier scheme."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "List each management layer and what they influence"
                - "Cost two or three depth options against the pool"
                - "Recommend a depth and any scheme below the equity line"
                - "Agree the decision with the CEO and deal partner"
            - name: Cash bonus and equity balance for senior managers
              description: |-
                ## Purpose
                Equity pays at exit, years away, while cash bonuses pay this year, and managers with mortgages weigh the two very differently. Setting the balance for each senior role, with the remuneration committee, keeps the annual bonus from undermining the long-term plan or the reverse.

                ## Milestones
                1. Current base, bonus and expected equity value laid out for each senior role.
                2. Bonus metrics checked for conflict with the value creation plan.
                3. A recommended balance for each role.
                4. The balance approved by the remuneration committee.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "The remuneration committee approves a cash and equity balance for each senior role, with bonus metrics checked against the plan."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Lay out base, bonus and expected equity per senior role"
                - "Check bonus metrics against the value creation plan"
                - "Propose a balance for each role"
                - "Take the proposal to the remuneration committee"
            - name: Founder rollover versus fresh sweet equity
              description: |-
                ## Purpose
                Selling founders often roll part of their proceeds into the new structure, and the split between rolled value on institutional terms and new sweet equity changes both their incentive and their risk. Modelling two or three splits and agreeing one in principle early stops this becoming a last-minute fight.

                ## Milestones
                1. Two or three rollover and sweet equity splits modelled.
                2. Founder proceeds at exit under each split compared.
                3. Tax and legal questions on each split sent to counsel.
                4. A split agreed in principle with the founders.

                ## Notes
                Founders need their own tax and legal advice on rollover; make sure they have it.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A rollover and sweet equity split is agreed in principle with the founders, with the modelled alternatives on file."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Model three rollover and sweet equity splits"
                - "Compare founder proceeds at exit under each"
                - "Send the tax and legal questions on each split to counsel"
                - "Agree a split in principle with the founders"
            - name: Pool top-up mechanism for add-ons and new money
              description: |-
                ## Purpose
                Add-on acquisitions and fresh equity dilute management unless the plan says otherwise, and managers who see their percentage fall after a deal they worked on lose faith. Deciding in advance how and when the pool is topped up, and who approves it, makes each add-on a plan event rather than a negotiation.

                ## Milestones
                1. The dilution effect of a typical add-on shown on the cap table.
                2. A top-up rule agreed, with the approval route.
                3. The rule written into the plan or a board resolution.
                4. Each pending add-on checked against the rule.
              priority: medium
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A written top-up rule with an approval route exists, and every add-on is checked against it before completion."
                cadence: rolling
              tasks:
                - "Show the dilution from a typical add-on on the cap table"
                - "Propose a top-up rule and approval route"
                - "Record the rule in a board resolution"
                - "Check pending add-ons for pool dilution @recurring(monthly:26)"
            - name: Resetting an underwater plan
              description: |-
                ## Purpose
                After a bad year or a lower valuation, sweet equity can look worthless and the best managers start taking recruiter calls. Deciding whether to reset hurdles, issue new awards or accept the position, with counsel, needs a clear view of cost, precedent and fairness to those who left.

                ## Milestones
                1. Current indicative value of each award compared with entry.
                2. Reset options costed in dilution and tax terms with advisers.
                3. Retention risk for each key manager assessed with the CEO.
                4. A decision recorded by the board with reasons.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "The board records a reasoned decision on resetting the plan, supported by costed options and a retention risk view."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Compare current indicative award values with entry"
                - "Ask advisers to cost each reset option"
                - "Assess retention risk for each key manager with the CEO"
                - "Take a recommendation to the board"
            - name: Management loans to fund subscriptions
              description: |-
                ## Purpose
                Some managers cannot fund their subscription in cash, and a company or fund loan solves that but adds tax, interest and leaver complications. Deciding whether loans are offered, on what terms, and what happens if the manager leaves keeps one person's circumstances from reshaping the plan.

                ## Milestones
                1. The participants who need funding identified privately.
                2. Loan options and their tax questions set out for counsel.
                3. Leaver and repayment terms for any loan agreed.
                4. A decision recorded and applied equally to all participants.

                ## Notes
                Loans to employees can carry tax and regulatory consequences; counsel decides the terms.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A decision on management loans, with counsel-approved terms if offered, is recorded and applied equally to all participants."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Ask the CEO privately which participants need funding"
                - "Set out loan options and questions for counsel"
                - "Agree repayment and leaver terms for any loan"
                - "Record the decision and apply it to everyone"
            - name: Exit acceleration and partial exit treatment
              description: |-
                ## Purpose
                Plans often go quiet on what happens when the fund sells part of its stake, refinances, or the buyer wants management to stay. Settling unvested treatment, partial sale rights and any rollover expectation now prevents a stand-off in the middle of a sale process.

                ## Milestones
                1. Treatment of unvested awards on full and partial exit written down.
                2. Management's rights on a partial sale or recapitalisation set out.
                3. The position on rolling management equity into a buyer's structure stated.
                4. The terms checked against the articles by counsel.
              priority: medium
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "Written exit, partial exit and rollover treatment for management awards is confirmed against the articles by counsel."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Write the treatment of unvested awards on full and partial exit"
                - "Set out management's rights on a partial sale"
                - "State the position on rollover into a buyer's structure"
                - "Ask counsel to check the terms against the articles"
            - name: Redrafting leaver terms after a dispute
              description: |-
                ## Purpose
                Contested leaver cases usually expose an ambiguous definition, a missing intermediate category or an unworkable valuation mechanism. Turning that lesson into revised terms for future grants, rather than arguing it again, is the improvement most plans need once.

                ## Milestones
                1. The disputed clause and both sides' readings written up.
                2. Counsel's proposed redraft for future grants.
                3. Revised terms approved by the board.
                4. New award letters issued on the revised terms.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Board-approved revised leaver terms exist and are used in every award letter issued after the dispute."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Write up the disputed clause and both readings"
                - "Ask counsel for a redraft for future grants"
                - "Take the revised terms to the board"
                - "Use the new terms in the next award letter"
            - name: Investment committee approval of the plan
              description: |-
                ## Purpose
                Committees increasingly want to see the plan, not just a line saying ten percent sweet equity, because it moves fund returns and retention risk. A short paper with pool size, envy ratio, leaver terms and returns dilution gets a clean approval and a record of what was agreed.

                ## Milestones
                1. A two-page paper on the plan's terms and their effect on fund returns.
                2. The paper included in the final committee pack.
                3. Committee questions answered and conditions recorded.
                4. Approval minuted.
              priority: medium
              deadlineOffsetDays: 45
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "The investment committee minutes record approval of the plan terms, with any conditions noted."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Draft a two-page paper on the plan and its returns dilution"
                - "Add the paper to the final committee pack"
                - "Prepare answers on pool size and leaver terms"
                - "Record committee conditions and the approval"
            - name: Management presentation of the incentive plan
              description: |-
                ## Purpose
                The first time the team hears the plan sets their view of it for years. A planned session, with the CEO alongside the deal partner, a clear chart and time for questions, beats a document sent by email.

                ## Milestones
                1. A session date with all participants and the CEO confirmed.
                2. A short deck with one payout chart and the key terms.
                3. Questions captured and answered in writing afterwards.
                4. Each participant's adviser contact details collected.

                ## Notes
                Start from the **Meeting notes** template to capture the questions.
              priority: medium
              deadlineOffsetDays: 60
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "The plan is presented to all participants in one session, with every question answered in writing within a week."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Book the session with all participants and the CEO"
                - "Build a short deck with one payout chart"
                - "Capture every question raised in the session"
                - "Send written answers within a week"
            - name: Individual allocation conversations
              description: |-
                ## Purpose
                Each participant should hear their number from the CEO or deal partner in a private conversation, with the reasoning, before any letter arrives. Planned conversations reduce comparison and give you a read on who feels short-changed while there is still time to adjust.

                ## Milestones
                1. A script with each person's number and the reason for it.
                2. A private conversation held with every participant.
                3. Reactions and concerns noted for each person.
                4. Any adjustments agreed before award letters go out.
              priority: medium
              deadlineOffsetDays: 75
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "Every participant has had a private allocation conversation, with reactions noted, before award letters are issued."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Write each person's number and the reason in a private script"
                - "Schedule a private conversation with each participant"
                - "Note each person's reaction after the call"
                - "Agree any adjustments before letters go out"
            - name: Management subscription at completion
              description: |-
                ## Purpose
                Management subscriptions are often the last item closed and the one most likely to slip, with unsigned forms, unfunded amounts or missing tax elections. Running the management subscription as its own completion workstream gets every share issued correctly on day one.

                ## Milestones
                1. A checklist of forms, funds and elections for each participant.
                2. All subscription monies received and matched.
                3. Shares issued and the register updated on completion.
                4. Any post-completion elections filed within their deadline.

                ## Notes
                Run it from the firm closing list if there is one. Election deadlines after completion can be very short.
              priority: high
              deadlineOffsetDays: 90
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "Every participant's shares are issued at completion with funds matched and any elections filed in time."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Build a per-participant checklist of forms, funds and elections"
                - "Chase unsigned forms a week before completion"
                - "Match subscription monies to each participant"
                - "Confirm any elections are filed before the deadline"
            - name: Plan treatment on a refinancing or dividend recap
              description: |-
                ## Purpose
                Refinancing that returns cash to the fund through a recap changes the waterfall, and management may expect a share. Deciding how preferred instruments are repaid and whether management receive anything, with counsel, avoids a surprise for the team when the cash moves.

                ## Milestones
                1. The recap's effect on the waterfall and management value modelled.
                2. Plan and articles checked for management rights on a distribution.
                3. A position on any management participation agreed by the board.
                4. Participants told before the transaction closes.
              priority: low
              frontmatter:
                mode: event
                output_kind: decision
                success_criteria: "A board-agreed position on management participation in the recap is communicated to participants before it closes."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Model the recap's effect on management value"
                - "Check the articles for management rights on a distribution"
                - "Agree the board position on management participation"
                - "Tell participants before the transaction closes"
            - name: Settling management proceeds at exit
              description: |-
                ## Purpose
                On a sale the plan has to produce a correct number for every participant, net of any loans, leaver adjustments and withholding, often on a tight timetable. Preparing the management proceeds schedule and its sign-off before signing means the funds flow is right first time.

                ## Milestones
                1. A management proceeds schedule from the final waterfall.
                2. Loans, leaver adjustments and withholding deducted per person.
                3. The schedule checked by counsel and the company's finance lead.
                4. Each participant's statement of proceeds issued.
              priority: high
              frontmatter:
                mode: event
                output_kind: deliverable
                success_criteria: "A checked management proceeds schedule feeds the funds flow and every participant receives an individual statement."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Run the final waterfall to a per-participant schedule"
                - "Deduct loans, leaver adjustments and withholding"
                - "Get the schedule checked by counsel and finance"
                - "Issue each participant a statement of proceeds"
            - name: First plan in a founder-led business
              description: |-
                ## Purpose
                Founder-led companies often have a loyal team with no equity and a founder who sees any dilution as a gift. Designing the first plan with the founder, explaining why the next layer needs a stake, turns a hard conversation into shared ownership of the outcome.

                ## Milestones
                1. The founder's view on who deserves a stake recorded.
                2. A participant list agreed between founder and deal team.
                3. The founder's own position set beside the team's.
                4. The founder co-presenting the plan to the team.
              priority: medium
              frontmatter:
                mode: service
                output_kind: deliverable
                success_criteria: "A participant list agreed with the founder exists, and the founder co-presents the plan to the team."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Ask the founder who in the team deserves a stake and why"
                - "Agree the participant list with the founder"
                - "Show the founder's position beside the team's"
                - "Plan the presentation with the founder as co-presenter"
            - name: Incentive plan for a corporate carve-out team
              description: |-
                ## Purpose
                Managers coming out of a large group are used to listed share awards with a liquid price, and private sweet equity feels strange and risky. A carve-out plan needs extra explanation, a view on forfeited group awards and sometimes a retention bridge until the new plan is in place.

                ## Milestones
                1. Group awards each manager forfeits on completion quantified.
                2. Any buy-out or retention bridge proposal costed.
                3. An explanation session on private equity tailored to group managers.
                4. The bridge and plan terms agreed before completion.
              priority: medium
              frontmatter:
                mode: service
                output_kind: deliverable
                success_criteria: "Forfeited group awards are quantified, any bridge is agreed, and carve-out managers have attended a tailored explanation session."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Ask each manager for their unvested group awards"
                - "Cost any buy-out or retention bridge"
                - "Run an explanation session for group managers"
                - "Agree bridge and plan terms before completion"
            - name: Rolling over a previous sponsor's plan in a secondary buyout
              description: |-
                ## Purpose
                In a secondary buyout, management are cashing out one plan while being asked to reinvest in yours, and how much they roll tells you how much they believe. Setting reinvestment expectations, the new pool and the treatment of anyone who does not roll gives a fair restart.

                ## Milestones
                1. Each manager's expected proceeds from the old plan estimated.
                2. A reinvestment expectation set and explained.
                3. The new pool sized net of reinvested value.
                4. Treatment of managers who decline to reinvest agreed.
              priority: medium
              frontmatter:
                mode: service
                output_kind: decision
                success_criteria: "Reinvestment expectations, the new pool and the treatment of non-reinvesting managers are agreed and recorded before signing."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Estimate each manager's proceeds from the old plan"
                - "Set the reinvestment expectation for each manager"
                - "Size the new pool net of reinvested value"
                - "Agree treatment for managers who do not reinvest"
            - name: Management incentives in a minority investment
              description: |-
                ## Purpose
                When founders keep control, the investor cannot impose a plan and must persuade instead, often through an option pool or a performance tranche. A minority plan proposal that shows how it protects both sides' value is more likely to be adopted than a buyout template.

                ## Milestones
                1. The founders' existing incentive arrangements reviewed.
                2. A proposal suited to a minority position drafted.
                3. Consent rights over future grants agreed in the investment terms.
                4. The plan adopted by the company's board.
              priority: low
              frontmatter:
                mode: service
                output_kind: deliverable
                success_criteria: "The company's board adopts a management plan with investor consent rights over future grants written into the terms."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Review the founders' existing incentive arrangements"
                - "Draft a plan proposal suited to a minority stake"
                - "Agree consent rights over future grants"
                - "Present the plan to the company's board"
            - name: Cross-border management team plan
              description: |-
                ## Purpose
                A management team spread across three countries may face three different tax treatments for the same share, and a plan that works well in one can be costly in another. Mapping each participant's country and getting local advice before finalising the instrument avoids an unfair or unworkable plan.

                ## Milestones
                1. Each participant's country of tax residence listed.
                2. Local tax and securities advice obtained for each country.
                3. Any country-specific variations or sub-plans agreed.
                4. Rule changes in each country checked each year.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "Local advice is on file for every participant's country, with any sub-plan or variation agreed before grants."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "List each participant's country of tax residence"
                - "Commission local advice for each country"
                - "Agree any sub-plans or variations"
                - "Ask local counsel about rule changes @recurring(yearly)"
            - name: Grant for a replacement CEO
              description: |-
                ## Purpose
                Replacing a CEO mid-hold means freeing up the outgoing CEO's equity, valuing it, and making a grant big enough to attract the right candidate without reshaping the pool. Planning both sides together keeps the leaver case and the new grant consistent.

                ## Milestones
                1. The outgoing CEO's leaver treatment confirmed with counsel.
                2. Equity freed up from the leaver quantified.
                3. A grant range for the new CEO set against the market and the pool.
                4. The new CEO's award approved and issued.
              priority: medium
              frontmatter:
                mode: service
                output_kind: decision
                success_criteria: "The outgoing CEO's leaver case and the new CEO's award are both approved, with the pool balance reconciled."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Confirm the outgoing CEO's leaver treatment with counsel"
                - "Quantify the equity freed up by the departure"
                - "Set the new CEO's grant range against the pool"
                - "Issue the approved award and update the ledger"
            - name: Phantom and cash-settled plans
              description: |-
                ## Purpose
                Where issuing real shares is impractical, because of local law, a small team or a family co-owner, a phantom or cash-settled plan can mimic the upside without changing the cap table. Understanding how these plans are funded, accounted for and taxed lets you offer one with confidence.

                ## Milestones
                1. The situations where a phantom plan fits written down.
                2. Funding at exit and accounting treatment set out with advisers.
                3. Tax treatment for participants confirmed by the tax adviser.
                4. A template phantom plan term sheet ready for use.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A phantom plan term sheet template exists with adviser-confirmed funding, accounting and tax notes."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "List the situations where a phantom plan fits"
                - "Ask advisers about exit funding and accounting treatment"
                - "Confirm participant tax treatment with the tax adviser"
                - "Draft a template phantom plan term sheet"
            - name: Management equity in a restructuring
              description: |-
                ## Purpose
                When a portfolio company is restructured, existing sweet equity may be wiped out while lenders or new money need the management team to stay. Designing a new plan inside a restructuring means balancing creditor views, retention and fairness under real time pressure.

                ## Milestones
                1. The restructuring's effect on existing awards modelled.
                2. Lender and new money views on a management plan gathered.
                3. A new plan proposal with retention terms drafted.
                4. The proposal agreed as part of the restructuring terms.
              priority: medium
              frontmatter:
                mode: service
                output_kind: decision
                success_criteria: "A new management plan is agreed within the restructuring terms, with the effect on old awards documented."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "Model the restructuring's effect on existing awards"
                - "Gather lender and new money views on a plan"
                - "Draft a new plan proposal with retention terms"
                - "Agree the plan inside the restructuring documents"
            - name: House management equity playbook
              description: |-
                ## Purpose
                Every deal team reinvents the plan, so terms drift and lessons are lost between deals. A house playbook with standard term sheet, leaver positions, explanation materials and a filing checklist turns experience into a starting point for the next deal.

                ## Milestones
                1. A standard term sheet with preferred and fallback positions.
                2. Standard explanation deck and award letter.
                3. A filing and tax checklist per jurisdiction where the firm invests.
                4. The playbook reviewed after each new deal.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A house playbook with term sheet, explanation materials and checklists exists and is reviewed after each new deal."
                cadence: rolling
              tasks:
                - "Collect the term sheets from the last three deals"
                - "Draft standard preferred and fallback positions"
                - "Add a standard explanation deck and award letter"
                - "Review the playbook against the latest deal @recurring(yearly)"
            - name: Post-mortem of plan outcomes on realised deals
              description: |-
                ## Purpose
                Few firms check whether their plans actually kept the right people and paid what was expected. Reviewing realised deals for retention, payout and disputes shows which terms worked and gives the playbook real evidence.

                ## Milestones
                1. Each realised deal's plan terms and outcomes in one table.
                2. Retention of key managers through exit measured.
                3. Payouts compared with what was shown at entry.
                4. Lessons fed into the house playbook.
              priority: low
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A table of realised deals shows plan terms, retention and payouts, with lessons recorded in the playbook."
                cadence: cyclic
              tasks:
                - "Collect plan terms and outcomes for realised deals"
                - "Measure key manager retention through each exit"
                - "Compare payouts with the values shown at entry"
                - "Review new realisations and update lessons @recurring(yearly)"
---

# Management Incentive Plans

This area is for the deal professional who has to design, agree and then run the equity plan that ties a portfolio company's managers to the outcome. It starts with the foundations (objectives, the entry cap table, instrument choice, pool size, the envy ratio and the term sheet), moves through the routines that keep a plan clean for five years, the skills behind sound terms such as waterfalls, leaver provisions and ratchets, the decisions on depth, rollover, top-ups and resets, the dated moments from the management presentation to exit settlement, the variants for founder-led, carve-out, secondary, minority and cross-border deals, and ends with phantom plans, distress and a house playbook.

What repeats is a monthly reconciliation of the allocation ledger, monthly leaver, hiring and hurdle checks on varied days, a quarterly vesting update and value statement to participants, and a yearly remuneration committee review, valuation refresh and filing check. The Vendor, Meeting notes, Compliance control, Board meeting and Metrics log templates pair with the projects that name them. Tax, securities and employment questions always go to counsel; nothing here is legal or tax advice. Installing adds all 50 projects as active, so archive the ones that are not for you yet.
