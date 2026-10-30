---
id: management-consulting.consulting-firm-partnership-model
name: Consulting Firm Partnership Model
description: "Partner economics for a consulting firm you own: the ownership baseline, equity or profit share, origination credit, drawings, buy-ins, admitting new partners and fair, documented exits."
category: business
version: 1.0.0
tags: [management-consulting, consulting-firm-partnership-model, founder, small-business, partner-compensation, origination-credit, partner-buy-in, partnership-agreement]
author: Aurum Technology
starter_structure:
  templates:
    - metrics-log
    - board-meeting
    - person
  pillars:
    - name: Management Consulting
      emoji: "📋"
      description: "Consulting as a craft and a business: case interviews and getting hired, structuring problems with issue trees, hypothesis-driven workplans, client interviews, slides and steering committees, the career from analyst to partner, and going independent or building a boutique firm with sensible pricing."
      pillarFrontmatter:
        review_cadence: monthly
      areas:
        - name: Consulting Firm Partnership Model
          description: "Setting partner economics in a consulting firm: equity or profit share, origination credit, buy-ins, admitting partners and exits."
          projects:
            - name: One-page ownership and profit split baseline
              description: |-
                ## Purpose
                Most small consulting firms run for years on a handshake about who owns what, and the first serious disagreement reveals that each founder remembers a different deal. Putting current ownership percentages, profit shares, capital contributed and any side promises on a single page, agreed by every owner, gives every later decision in this area a starting point.

                ## Milestones
                1. Every current owner listed with ownership percentage, profit share and capital contributed.
                2. Any verbal promises of future equity or bonus written down with who made them and when.
                3. Differences between the legal record and the working understanding flagged.
                4. The page signed or acknowledged by email by every owner.

                ## Notes
                Expect at least one surprise, usually a promise made to a senior hire. Record it neutrally now rather than arguing it later.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A one-page ownership baseline exists, lists every owner and promise, and has been acknowledged in writing by each owner."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Pull the shareholder or member register from the company records"
                - "List every verbal promise of equity or profit share you know about"
                - "Ask each co-owner to correct the draft page within a week"
                - "File the agreed baseline where all owners can read it"
            - name: Choosing the legal vehicle for the partnership
              description: |-
                ## Purpose
                Limited companies, limited liability partnerships and general partnerships treat liability, tax, admission and exit very differently, and switching later costs fees and goodwill. Before anyone new is admitted, a short paper comparing the vehicles open to you in your country, reviewed by a lawyer and an accountant, settles whether the current structure can carry a multi-partner model.

                ## Milestones
                1. The vehicles available in your jurisdiction listed with liability, tax and admission features.
                2. Questions for the lawyer and accountant agreed by the owners in advance.
                3. Professional advice received in writing on whether to keep or change the vehicle.
                4. The decision and its reasons minuted by the owners.

                ## Notes
                This is a professional call, not a spreadsheet one. Your role is to prepare the questions and record the answer, not to pick the structure from a blog post.
              priority: high
              deadlineOffsetDays: 60
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A written decision on the firm's legal vehicle, based on documented legal and tax advice, is recorded in the owners' minutes."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Write the five questions you need the lawyer to answer about structure"
                - "Book a structure review with a business lawyer and the firm's accountant"
                - "Compare liability, admission and exit rules for each option on one table"
                - "Minute the owners' decision with the advice attached"
            - name: Distributable profit baseline for the last three years
              description: |-
                ## Purpose
                Partner economics are a fight over one number, distributable profit, and few founders can say what it was last year once owner salaries, reserves and one-off costs are stripped out. Rebuilding it for three years shows how much there really is to share and how volatile it is, which shapes every later choice between fixed and variable pay.

                ## Milestones
                1. Revenue, direct staff cost, overheads and owner pay laid out for three financial years.
                2. One-off items and owner perks separated from normal running costs.
                3. Distributable profit per year and per owner calculated on a consistent basis.
                4. The year-to-year swing in profit noted as a percentage.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A three-year table shows distributable profit on a consistent basis, reviewed by the firm's accountant."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Export three years of management accounts from the accounting system"
                - "Mark owner salaries, perks and one-off costs in a separate column"
                - "Calculate distributable profit per year and per current owner"
                - "Ask the accountant to check the adjustments before sharing"
            - name: What a partner means at this firm
              description: |-
                ## Purpose
                Clients, staff and the partners themselves use the word partner loosely: some mean an owner, some a senior title, some a person who brings in work. A short written definition of each tier, such as equity partner, salaried partner and principal, with what each owns, decides and is paid on, stops promotions creating owners by accident.

                ## Milestones
                1. Each senior tier named with its ownership, voting rights and pay basis.
                2. The expectations for each tier written as three to five observable behaviours.
                3. External use of the title agreed, including on proposals and email signatures.
                4. The definitions approved by the current owners.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A one-page tier definition covering ownership, votes, pay basis and expectations is approved by the owners."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "List every title currently used above senior consultant"
                - "Write what each tier owns, votes on and is paid for"
                - "Decide whether salaried partners may use the partner title with clients"
                - "Circulate the definitions to owners for approval"
            - name: Equity ownership or profit share decision
              description: |-
                ## Purpose
                Giving someone a share of the firm and giving them a share of this year's profit are different promises, with different exit, tax and control consequences. Deciding which one the firm offers to new senior people, and on what conditions, prevents the common mistake of handing out equity when a profit share would have rewarded the same contribution.

                ## Milestones
                1. The options set out: pure equity, profit share without equity, phantom equity and a mix.
                2. Each option scored against control, retention, exit cost and simplicity.
                3. Legal and tax points for the shortlisted option checked with advisers.
                4. A default offer for new senior people agreed and written down.

                ## Notes
                A profit share can always be converted to equity later; equity is far harder to take back.
              priority: high
              deadlineOffsetDays: 60
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "The owners have recorded a default ownership or profit share offer for new senior people, with the scoring behind it."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Write a one-paragraph description of each ownership option"
                - "Score each option against control, retention, exit cost and simplicity"
                - "Check the tax treatment of the preferred option with the accountant"
                - "Record the default offer in the owners' decision log"
            - name: Founders' agreement before any outside partner
              description: |-
                ## Purpose
                Founders who have not settled the rules between themselves cannot offer a coherent deal to anyone else, and a newcomer will find the cracks within a year. A founders' agreement covering decision rights, deadlock, vesting, departure and what happens on death or disability, drafted with a lawyer, has to come before the first admission.

                ## Milestones
                1. A term sheet of the points the founders agree on, and the ones they do not.
                2. Open points resolved in a facilitated session or with an adviser.
                3. A lawyer's draft of the agreement reviewed by each founder separately.
                4. The agreement signed and stored with the company records.

                ## Notes
                Each founder should have the chance to take independent advice. A shared lawyer acts for the firm, not for any one of you.
              priority: high
              deadlineOffsetDays: 45
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "A signed founders' agreement covering decisions, deadlock, vesting and departure is stored with the company records."
                cadence: one-shot
                effort_hours_estimate: "10"
              tasks:
                - "List the ten situations the agreement must cover, from deadlock to death"
                - "Mark which points the founders already agree on"
                - "Instruct a lawyer with the term sheet of agreed and open points"
                - "Sign the final agreement and file it with the company records"
            - name: Partner capital and working capital policy
              description: |-
                ## Purpose
                Consulting firms carry months of unbilled work and unpaid invoices, and that gap is funded either by partner capital, a bank facility or by delaying partner pay. A written policy on how much capital each partner contributes, how it is held and when it is repaid makes buy-ins and exits calculable instead of negotiable.

                ## Milestones
                1. Average lock-up of work in progress and debtors measured in days.
                2. A target working capital level set in months of running costs.
                3. Capital per partner or per point agreed, with how it is paid in and repaid.
                4. The policy written into the partnership agreement or a schedule to it.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A capital policy states the working capital target, capital per partner and repayment rules, and is attached to the partnership agreement."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Measure lock-up days from work in progress and debtor reports"
                - "Set a working capital target in months of fixed costs"
                - "Draft how capital is contributed, held and repaid"
                - "Compare working capital to the policy level and note any gap @recurring(monthly:20)"
            - name: Partner compensation principles in writing
              description: |-
                ## Purpose
                Every compensation argument is easier when partners agreed in a calm year what they want the system to reward. Five to eight written principles, such as rewarding firm building as well as sales, or never paying twice for the same fee, become the test against which every formula, point allocation and exception is checked.

                ## Milestones
                1. Each partner's view of what should be rewarded collected separately.
                2. A shortlist of five to eight principles drafted from the overlap.
                3. Trade-offs between principles stated plainly, such as stability against incentive.
                4. The principles adopted at a partners' meeting and kept with the agreement.

                ## Notes
                Ask the agent to draft principles from the partners' separate answers, then edit them together so the wording is yours.
              priority: high
              deadlineOffsetDays: 90
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Five to eight compensation principles are adopted by a recorded partner vote and filed with the partnership agreement."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Send each partner three questions on what the firm should reward"
                - "Ask the agent to draft principles from the anonymised answers"
                - "Name the two hardest trade-offs between the draft principles"
                - "Put the principles to a vote at the next partners' meeting"
            - name: Advisers for partnership matters
              description: |-
                ## Purpose
                Partnership questions sit between corporate law, employment law and tax, and the firm's usual bookkeeper is rarely equipped for buy-ins, goodwill or retirement annuities. Choosing a lawyer and an accountant with professional services partnership experience, before a live dispute, gives the firm advisers who know the structures and are not conflicted.

                ## Milestones
                1. A brief of the issues the firm expects to face in the next two years.
                2. Two or three firms of each kind spoken to about their partnership experience.
                3. Fee basis and conflict position confirmed in writing.
                4. One lawyer and one accountant engaged with a named contact.
              priority: medium
              deadlineOffsetDays: 30
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A named lawyer and accountant with partnership experience are engaged, with fees and conflicts confirmed in writing."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Ask two peer firm founders who advised them on partner matters"
                - "Write a one-page brief of the issues you expect to face"
                - "Hold short calls with three candidate advisers"
                - "Confirm the engagement letter and named contact for each adviser"
            - name: Monthly partner profit and drawings pack
              description: |-
                ## Purpose
                Partners who only see the numbers at year end are always surprised, and surprise is where trust breaks. A short monthly pack showing revenue, utilisation, lock-up, profit against plan and each partner's drawings, sent on a fixed day, keeps every partner reading the same figures before they argue about them.

                ## Milestones
                1. A pack format of no more than four pages agreed by the partners.
                2. Data sources and the person who prepares each figure named.
                3. The first three packs sent on the agreed day.
                4. Questions from partners logged and answered in the next pack.

                ## Notes
                Start from the **Metrics log** template. Keep the same layout every month so changes stand out.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A partner profit pack in the agreed format has gone out on the fixed day for three consecutive months."
                cadence: rolling
              tasks:
                - "Agree the four pages and twelve figures the pack will show"
                - "Name who produces each figure and by which day"
                - "Close the month and send the partner pack by the eighth @recurring(monthly:8)"
                - "Log partner questions and answer them in the following pack"
            - name: Origination and delivery credit ledger
              description: |-
                ## Purpose
                Origination credit is the most fought-over idea in consulting partner pay, because the partner who found the client and the partner who kept it often remember the work differently. A ledger written when each engagement is signed, recording who originated, who leads delivery and the agreed split, replaces year-end memory with a dated record.

                ## Milestones
                1. Credit categories defined: origination, relationship, delivery and expansion.
                2. A ledger with one row per engagement and the agreed split at signature.
                3. Every live engagement backfilled with credits agreed by the partners involved.
                4. The ledger reconciled each month to fees actually invoiced.

                ## Notes
                Record credit when the engagement letter is signed, not at year end. A split agreed while everyone is pleased is far easier than one agreed in a bad year.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every engagement signed in the last quarter has a ledger row with agreed credit splits, reconciled to invoiced fees."
                cadence: rolling
              tasks:
                - "Write a one-line definition of each credit category"
                - "Backfill credit rows for every live engagement"
                - "Log origination and delivery credit for each engagement signed this week @recurring(weekly:fri)"
                - "Reconcile the credit ledger to fees invoiced last month @recurring(monthly:12)"
            - name: Monthly drawings and quarterly true-up
              description: |-
                ## Purpose
                Partners are usually paid a fixed monthly drawing in advance of profit, with the balance settled later, and firms that never true up find themselves paying out profit they have not earned. A routine that pays drawings on one date and compares them with actual profit each quarter keeps cash and expectations aligned.

                ## Milestones
                1. Monthly drawing per partner or per point set as a share of budgeted profit.
                2. A fixed payment date and approval step agreed.
                3. A quarterly comparison of drawings against profit earned to date.
                4. A rule for what happens when drawings run ahead of profit.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Drawings are paid on a fixed date each month and a quarterly true-up compares them with profit earned, with any overpayment rule applied."
                cadence: rolling
              tasks:
                - "Set drawings as a percentage of budgeted profit per partner"
                - "Approve and pay partner drawings on the agreed date @recurring(monthly:25)"
                - "Compare drawings paid with profit earned to date @recurring(quarterly)"
                - "Write the rule for clawing back drawings that run ahead of profit"
            - name: Annual partner compensation round
              description: |-
                ## Purpose
                However the formula works, someone has to decide each partner's share once a year, and the process matters as much as the outcome. A fixed annual timetable with self-assessments, data from the credit ledger, a small compensation committee and a written rationale for each partner turns a closed-door negotiation into a process partners can accept.

                ## Milestones
                1. A timetable from self-assessment to announcement fixed at the start of the year.
                2. Self-assessments and ledger data collected for every partner.
                3. Committee recommendations with a short rationale per partner.
                4. Final allocations approved and each partner given a one-to-one explanation.

                ## Notes
                Keep the committee small and rotate one seat each year. Founders who decide everyone's pay alone end up blamed for every result.
              priority: high
              frontmatter:
                mode: operating
                output_kind: decision
                success_criteria: "Each partner receives an approved allocation with a written rationale within the published timetable."
                cadence: cyclic
              tasks:
                - "Publish this year's compensation timetable to all partners"
                - "Collect partner self-assessments against the agreed scorecard @recurring(yearly)"
                - "Prepare the credit ledger summary for the committee"
                - "Hold a one-to-one with each partner on their allocation"
            - name: Partners' meeting cadence and decision rights
              description: |-
                ## Purpose
                Small firms often make big decisions in corridors and small ones in long meetings. A monthly partners' meeting with a standing agenda, and a written list of which decisions need a simple majority, a special majority or unanimity, means admissions, capital calls and large hires are decided in the right forum by the right vote.

                ## Milestones
                1. A list of decisions sorted into management, majority, special majority and unanimous.
                2. A standing monthly agenda with finance, pipeline, people and decisions sections.
                3. Minutes and a decision log kept for every meeting.
                4. The decision rights list cross-checked with the partnership agreement.

                ## Notes
                Start from the **Board meeting** template for the agenda and minutes.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Monthly partners' meetings run to a standing agenda with minutes and a decision log, and decision rights match the agreement."
                cadence: rolling
              tasks:
                - "Sort the firm's twenty biggest decision types by the vote they need"
                - "Draft a standing agenda for the partners' meeting"
                - "Hold the monthly partners' meeting and update the decision log @recurring(monthly:15)"
                - "Check the decision rights list against the partnership agreement"
            - name: Partner scorecard beyond billings
              description: |-
                ## Purpose
                If revenue is the only thing measured, revenue is the only thing partners will do, and nobody will train juniors, build methods or run the firm. A balanced scorecard with a few measures each for clients, people, quality and firm building, reviewed quarterly, gives the compensation round evidence for the contributions a ledger cannot see.

                ## Milestones
                1. Four to six scorecard areas agreed, each with one or two measures.
                2. Weights for each area tied to the compensation principles.
                3. A quarterly update filled in by each partner with evidence.
                4. Scorecards used as an input in the next compensation round.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: artifact
                success_criteria: "Every partner has a completed scorecard for each of the last two quarters, and the compensation round uses it."
                cadence: rolling
              tasks:
                - "Propose four to six scorecard areas with one measure each"
                - "Weight each area against the compensation principles"
                - "Update each partner's scorecard with evidence from the quarter @recurring(quarterly)"
                - "Attach the scorecards to the compensation committee papers"
            - name: Annual partner capital account statements
              description: |-
                ## Purpose
                Each partner's capital account records what they put in, what they were allocated and what they took out, and in many firms nobody can produce it on request. Issuing a statement to every partner after the year-end accounts are signed makes buy-outs, retirements and disputes start from an agreed balance.

                ## Milestones
                1. Opening balance, capital paid in, profit allocated, drawings and closing balance per partner.
                2. Statements reconciled to the signed year-end accounts.
                3. Each partner's statement sent with a deadline for queries.
                4. Queries resolved and balances confirmed in writing.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: artifact
                success_criteria: "Every partner has received and confirmed a capital account statement reconciled to the signed year-end accounts."
                cadence: cyclic
              tasks:
                - "Ask the accountant for the capital account schedule from the year-end accounts"
                - "Issue capital account statements to every partner @recurring(yearly)"
                - "Set a four-week window for partner queries"
                - "Record each partner's confirmation of their balance"
            - name: Origination credit dispute procedure
              description: |-
                ## Purpose
                Two partners claiming the same client is the most predictable conflict in the model, and without a procedure it is settled by whoever shouts last or by the founder. A short written procedure, with a time limit, a neutral partner to review the evidence and a default split if nobody agrees, settles credit disputes before they spill into compensation.

                ## Milestones
                1. The evidence that counts written down: first contact, proposal authorship, sponsor relationship.
                2. A neutral reviewer and a time limit for each dispute agreed.
                3. A default split that applies if the reviewer cannot decide.
                4. Every dispute and its outcome recorded in the credit ledger.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A written credit dispute procedure with evidence rules, a reviewer, a time limit and a default split is adopted by the partners."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "List the evidence a reviewer will look at in a credit dispute"
                - "Choose how the neutral reviewer is appointed"
                - "Agree a default split for unresolved disputes"
                - "Add a disputes column to the origination credit ledger"
            - name: Annual partnership agreement review
              description: |-
                ## Purpose
                Partnership agreements are usually signed once and then drift away from how the firm actually works, until a departure shows the gap. Reading the agreement once a year against the decision log, the capital policy and any side letters keeps the document current and catches clauses that would surprise the partners in a dispute.

                ## Milestones
                1. The agreement read against the past year's decisions and side letters.
                2. A list of clauses that no longer match practice.
                3. Changes agreed by the partners and sent to the lawyer.
                4. A signed amendment or a note that no change was needed.
              priority: low
              frontmatter:
                mode: operating
                output_kind: decision
                success_criteria: "The partnership agreement has been reviewed this year, with either a signed amendment or a minuted decision that no change is needed."
                cadence: cyclic
              tasks:
                - "Collect side letters and partner decisions from the past year"
                - "Read the partnership agreement against the decision log @recurring(yearly)"
                - "List clauses that no longer match practice"
                - "Send agreed changes to the lawyer for drafting"
            - name: Partner compensation models compared
              description: |-
                ## Purpose
                Lockstep, modified lockstep, eat what you kill, points systems and formula hybrids each suit a different kind of firm, and founders often copy the model of their previous employer without asking whether it fits a firm of six. Studying how each model works, where it breaks and which firm sizes use it gives the partners a shared vocabulary before they design their own.

                ## Milestones
                1. A one-page summary of each main model with how profit is divided.
                2. The failure mode of each model noted, such as hoarding clients or carrying passengers.
                3. Three peer firms' approaches gathered through conversations or published material.
                4. A short memo on which models fit this firm's size and culture.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A memo comparing at least four compensation models, with their failure modes and fit to this firm, is shared with the partners."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "Read two practitioner guides on professional firm partner pay"
                - "Summarise lockstep, eat what you kill and points systems on one page each"
                - "Ask three founders of peer firms how they split profit"
                - "Write a memo on which models fit a firm of your size"
            - name: Reading partnership accounts with confidence
              description: |-
                ## Purpose
                Many partners sign off accounts that decide their pay yet cannot explain work in progress, accrued income or how profit is allocated between partners. Learning to read the profit and loss, balance sheet and allocation note of a professional firm lets every partner challenge the numbers instead of trusting the person who prepared them.

                ## Milestones
                1. The main lines of a professional firm's accounts explained in your own words.
                2. Work in progress, accrued income and lock-up traced from timesheets to the balance sheet.
                3. The profit allocation note reconciled to each partner's capital account.
                4. Three questions on last year's accounts put to the accountant and answered.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "You can trace work in progress and each partner's profit allocation through last year's accounts and have had three questions answered."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Get last year's signed accounts and the profit allocation schedule"
                - "Trace work in progress from timesheets to the balance sheet"
                - "Reconcile your own allocation to your capital account"
                - "Send three written questions on the accounts to the accountant"
            - name: Partner income tax set-aside routine
              description: |-
                ## Purpose
                In many structures partners are taxed on profit allocated rather than cash drawn, and a good year can leave a partner with a tax bill larger than their savings. Asking the accountant how partner income is taxed in your structure, then setting aside a fixed share of every drawing, avoids a firm-wide cash crunch when the bills land.

                ## Milestones
                1. The accountant's written summary of how partner income is taxed in your structure.
                2. Payment dates for partner tax noted for the year.
                3. A set-aside percentage chosen with the accountant's guidance.
                4. A separate account holding the set-aside for each payment date.

                ## Notes
                Tax rules vary by country and structure. The accountant sets the numbers; this project makes sure the cash is there.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A separate tax account holds the agreed share of every drawing, and the next payment date is covered in full."
                cadence: rolling
              tasks:
                - "Ask the accountant how partner income is taxed in your structure"
                - "Write the partner tax payment dates in your calendar"
                - "Open a separate account for the tax set-aside"
                - "Move the agreed share of this month's drawing to the tax account @recurring(monthly:26)"
            - name: Valuing a share of a consulting firm
              description: |-
                ## Purpose
                Buy-ins, buy-outs and retirements all need a price for a partner's share, and consulting firms are hard to value because most of the value walks out of the door each evening. Understanding the common approaches, such as book value plus work in progress, a multiple of profit or no goodwill at all, lets the partners pick a method before a real transaction forces it.

                ## Milestones
                1. The main valuation approaches for professional firms summarised with their pros and cons.
                2. This firm's value worked out under two or three methods with last year's figures.
                3. The gap between methods and what drives it explained in a short note.
                4. An independent valuer or accountant asked to comment on the preferred method.

                ## Notes
                Many consulting partnerships deliberately pay no goodwill on entry or exit, which keeps buy-ins affordable. Decide that question openly.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A note values the firm under at least two methods using last year's figures and records an adviser's comment on the preferred one."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Summarise book value, profit multiple and no-goodwill approaches"
                - "Value the firm under two methods with last year's numbers"
                - "Explain what drives the gap between the methods in one paragraph"
                - "Ask the accountant to comment on the preferred valuation method"
            - name: Origination split conventions from peer firms
              description: |-
                ## Purpose
                Firms that credit origination well have explicit conventions: how long origination lasts on a client, how it splits when two partners pitch together, and whether expanding an existing client counts. Collecting conventions from peer firms and published practice gives the partners tested options rather than inventing rules in the middle of a disagreement.

                ## Milestones
                1. Conventions from at least three firms or sources written up.
                2. Options compared for credit duration, joint pitches and account expansion.
                3. A recommended convention for each question drafted for the partners.
                4. The chosen conventions added to the credit ledger rules.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Written conventions for credit duration, joint pitches and account expansion are added to the credit ledger rules."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Ask three peer firm partners how long origination credit lasts"
                - "Compare options for joint pitches and account expansion"
                - "Draft a recommended convention for each open question"
                - "Add the agreed conventions to the credit ledger rules"
            - name: Partner economics scenario model
              description: |-
                ## Purpose
                On paper a proposed compensation system looks fair in a meeting and very different when each partner sees their own number in a bad year. A spreadsheet that runs the current and proposed models against three years of history and three forward scenarios shows who wins, who loses and by how much before anyone votes.

                ## Milestones
                1. Inputs set up for revenue, credit splits, costs and points or shares per partner.
                2. Current and proposed models calculated side by side.
                3. Results for a good, normal and poor year shown per partner.
                4. Model checks in place so totals always equal distributable profit.

                ## Notes
                Show each partner their own results privately first. Public surprises turn a modelling exercise into a dispute.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A model shows each partner's result under current and proposed systems for three scenarios, with totals that tie to distributable profit."
                cadence: one-shot
                effort_hours_estimate: "12"
              tasks:
                - "Set up an input sheet with three years of partner credit data"
                - "Build current and proposed allocations side by side"
                - "Add good, normal and poor year scenarios"
                - "Add a check that allocations sum to distributable profit"
            - name: Negotiating terms with a prospective partner
              description: |-
                ## Purpose
                Founders who sell consulting work every week often negotiate badly with a future partner, either giving too much to close quickly or haggling in a way that sours the relationship. Practising the conversation, with a clear opening offer, the items you can trade and the points you will not move on, makes the negotiation firm and friendly at once.

                ## Milestones
                1. Your opening offer, walk-away point and tradeable items written down.
                2. The candidate's likely priorities listed from conversations so far.
                3. A practice run with a co-founder or adviser playing the candidate.
                4. Agreed terms summarised in writing after the real conversation.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A written negotiation plan exists and the agreed terms are summarised in an email to the candidate within two days of the meeting."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Write your opening offer and walk-away point"
                - "List five items you can trade, such as title, timing or capital terms"
                - "Rehearse the conversation with a co-founder playing the candidate"
                - "Email the candidate a summary of agreed terms within two days"
            - name: Moving from founder-takes-all to a points system
              description: |-
                ## Purpose
                Many boutiques start with the founder keeping all profit and paying everyone else a salary and bonus, which works until senior people can earn more elsewhere or start their own firm. Introducing a points system, where each partner holds a number of points reviewed annually, spreads profit in a way that can grow with the firm without renegotiating everything each year.

                ## Milestones
                1. A total points pool and the founder's starting allocation decided.
                2. Criteria for moving up or down the points scale written.
                3. Each first-year partner's points modelled against their current pay.
                4. The points system adopted with a transition period.

                ## Notes
                Expect the founder's share to fall in percentage terms. The test is whether the founder's income grows because the firm does.
              priority: medium
              deadlineOffsetDays: 180
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A points system with a defined pool, movement criteria and a transition period is adopted by a recorded vote."
                cadence: phased
                effort_hours_estimate: "15"
              tasks:
                - "Decide the total points pool and the founder's starting points"
                - "Write criteria for moving up and down the points scale"
                - "Model each proposed partner's points against current pay"
                - "Set a two-year transition period and put it to a vote"
            - name: Introducing a salaried partner tier
              description: |-
                ## Purpose
                Not every strong senior consultant wants or can afford to be an owner, and promoting them only to equity forces a choice between overpaying and losing them. A salaried or non-equity partner tier, with a title, a profit-linked bonus and a clear route to equity, keeps strong people without diluting ownership too early.

                ## Milestones
                1. The tier's title, pay basis, bonus range and voting rights defined.
                2. Employment and title implications checked with the firm's lawyer.
                3. Criteria for promotion into the tier and from it to equity written.
                4. The first candidates identified and the tier announced internally.
              priority: medium
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A salaried partner tier with pay, rights and promotion criteria is approved by the partners and announced to the firm."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Draft the pay basis and bonus range for salaried partners"
                - "Ask the lawyer about employment status and use of the partner title"
                - "Write criteria for promotion into and out of the tier"
                - "Announce the tier at the next all-staff meeting"
            - name: Setting the buy-in price and financing terms
              description: |-
                ## Purpose
                Set too high, a buy-in price keeps out the people the firm most needs; set too low, it lets new partners share years of retained value for nothing. Agreeing how the price is calculated and how a new partner can pay it, such as instalments from future profit or a bank loan, makes every future admission a matter of arithmetic.

                ## Milestones
                1. The valuation method for buy-ins agreed by the partners.
                2. A worked example price for a typical new partner.
                3. Payment options defined, with any interest or security.
                4. The method and terms written into the partnership agreement.

                ## Notes
                Banks in some countries offer loans specifically for professional partner capital. Ask your firm's bank before designing instalments from scratch.
              priority: high
              deadlineOffsetDays: 120
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A buy-in method, a worked example price and payment terms are written into the partnership agreement."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Choose the valuation method from the share valuation work"
                - "Calculate a worked example price for a typical new partner"
                - "Ask the firm's bank about partner capital loans"
                - "Send the agreed buy-in clause to the lawyer"
            - name: Vesting and earn-in for new partners
              description: |-
                ## Purpose
                Granting a full share on day one means a partner who leaves after eight months takes ownership they never earned. A vesting schedule or a staged earn-in, such as a third of the points each year over three years, protects the firm and gives the new partner a visible route to full status.

                ## Milestones
                1. Options compared: time vesting, performance earn-in and a mix.
                2. Treatment of unvested shares on early departure defined.
                3. A schedule chosen and tested against two example departures.
                4. The schedule written into the admission documents.
              priority: medium
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A vesting or earn-in schedule with early departure rules is written into the standard admission documents."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Compare time-based vesting with performance earn-in"
                - "Define what happens to unvested shares on early departure"
                - "Test the schedule against a partner leaving at month eight and month thirty"
                - "Add the schedule to the standard admission pack"
            - name: Staff bonus pool before partner profit
              description: |-
                ## Purpose
                When partners divide profit first and fund staff bonuses from what is left, the best consultants notice and leave. Setting the staff bonus pool as a rule, for example a fixed share of profit above a threshold, agreed before partner allocations, protects the people who deliver the work and makes partner profit more predictable.

                ## Milestones
                1. Last three years of staff bonuses compared with partner profit.
                2. A pool rule chosen, such as a share of profit above budget.
                3. How the pool is split among staff and who decides written down.
                4. The rule applied before partner allocations in the next year-end round.
              priority: medium
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A written staff bonus pool rule is applied ahead of partner allocations at the next year end."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Compare three years of staff bonuses with partner profit"
                - "Choose a pool rule and the profit threshold it starts from"
                - "Write how the pool is divided among staff"
                - "Fund the staff bonus pool before partner allocations @recurring(yearly)"
            - name: Reserve and reinvestment policy before distributions
              description: |-
                ## Purpose
                Distributing every penny of profit feels fair each year and leaves the firm unable to fund a new office, a slow quarter or a partner retirement. A written policy that holds back a reserve and a reinvestment budget before profit is shared, checked each quarter, keeps the firm solvent without leaving partners guessing about their pay.

                ## Milestones
                1. A target reserve set in months of fixed costs.
                2. An annual reinvestment budget agreed for methods, hires or markets.
                3. The order of payments written: costs, reserve, reinvestment, then partners.
                4. A quarterly check that the reserve is at the target level.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "The reserve target and reinvestment budget are written down and the reserve has been checked against target each quarter for a year."
                cadence: rolling
              tasks:
                - "Set a reserve target in months of fixed costs"
                - "Agree this year's reinvestment budget with the partners"
                - "Write the order of payments before partner distributions"
                - "Check the cash reserve against the target before any distribution @recurring(quarterly)"
            - name: Restrictive covenants for departing partners
              description: |-
                ## Purpose
                A partner who leaves and takes the firm's largest client can undo years of work, but covenants that are too broad may not hold up and can deter good candidates. Agreeing with a lawyer which non-solicit, non-dealing and confidentiality terms are reasonable where you operate protects client relationships without overreaching.

                ## Milestones
                1. The firm's client concentration and the departures that would hurt most identified.
                2. Covenant options discussed with the lawyer for your jurisdiction.
                3. Terms chosen for duration, scope and the clients covered.
                4. Covenants included in the partnership agreement and admission documents.

                ## Notes
                Enforceability depends heavily on local law. The lawyer's view is the decision; the partners decide how much protection they want to ask for.
              priority: medium
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "Covenant terms reviewed by a lawyer for your jurisdiction are included in the partnership agreement and admission documents."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "List the five clients whose loss would hurt the firm most"
                - "Ask the lawyer which covenants are likely to hold where you operate"
                - "Choose duration and scope for non-solicit and non-dealing terms"
                - "Add the covenant clauses to the admission documents"
            - name: Deadlock and dispute resolution clause
              description: |-
                ## Purpose
                Two-partner and evenly split firms are especially exposed to deadlock, and an unresolved disagreement can freeze hiring, pricing and banking for months. A clause that sets out escalation steps, such as a cooling-off period, mediation and finally a buy-sell mechanism, means a disagreement ends in a decision rather than a stalemate.

                ## Milestones
                1. The decisions most likely to deadlock identified.
                2. Escalation steps chosen, with time limits for each.
                3. A final mechanism agreed, such as mediation then a buy-sell offer.
                4. The clause drafted by the lawyer and signed by all partners.
              priority: medium
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "A signed deadlock clause sets escalation steps, time limits and a final mechanism for resolving partner disputes."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "List the three decisions most likely to deadlock"
                - "Choose escalation steps and a time limit for each"
                - "Ask the lawyer to draft a mediation and buy-sell mechanism"
                - "Sign the clause as an amendment to the partnership agreement"
            - name: Admitting the first outside partner
              description: |-
                ## Purpose
                The first partner who is not a founder sets the precedent for every one after, and whatever terms they get will be quoted back for a decade. Running the admission as a project, from candidate assessment through terms, documents and an announcement to clients and staff, makes it a deliberate model rather than a one-off deal.

                ## Milestones
                1. The candidate assessed against the written partner definition and scorecard.
                2. Terms agreed for points or equity, buy-in, vesting and covenants.
                3. Admission documents signed and capital paid or scheduled.
                4. The admission announced to staff and key clients.

                ## Notes
                Start from the **Person** template for the candidate file. Write down every term you offer, because the next candidate will ask what the first one got.
              priority: high
              deadlineOffsetDays: 180
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "The first outside partner has signed admission documents with recorded terms and has been announced to staff and clients."
                cadence: phased
                effort_hours_estimate: "25"
              tasks:
                - "Open a candidate file and note evidence against the partner definition"
                - "Prepare the term sheet from the buy-in and vesting decisions"
                - "Instruct the lawyer to prepare admission documents"
                - "Draft the announcement to staff and the top ten clients"
            - name: Lateral partner hire with a client book
              description: |-
                ## Purpose
                Lateral partners from another firm promise a book of business, but clients often do not follow, and any covenants with the old firm can delay their revenue for a year. Testing the claimed book, the covenant position and the cultural fit before offering terms protects the firm from paying full partner economics for portable revenue that never arrives.

                ## Milestones
                1. The candidate's claimed client book listed with realistic portability.
                2. The candidate's covenants with their current firm reviewed by your lawyer.
                3. A guarantee period or ramp in the terms tied to actual revenue.
                4. References taken from clients and former colleagues.
              priority: medium
              deadlineOffsetDays: 120
              frontmatter:
                mode: event
                output_kind: decision
                success_criteria: "A recorded decision on the lateral hire is supported by a portability assessment, legal review of covenants and references."
                cadence: phased
                effort_hours_estimate: "15"
              tasks:
                - "Ask the candidate for a client list with fees over two years"
                - "Rate each client's realistic chance of moving"
                - "Have your lawyer review the candidate's current covenants"
                - "Build a revenue ramp into the offered terms"
            - name: Annual partner election round
              description: |-
                ## Purpose
                Promotion to partner works best as a yearly round with published criteria and a timetable, not as a reaction to a resignation threat. A defined cycle of nominations, business cases, interviews with existing partners and a vote gives candidates a fair process and gives the firm a steady pipeline of new owners.

                ## Milestones
                1. Criteria and timetable published to eligible staff at the start of the year.
                2. Nominations and business cases received by the deadline.
                3. Candidate interviews with partners completed and notes kept.
                4. A vote held and every candidate given feedback, successful or not.
              priority: medium
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A partner election round runs to its published timetable and every candidate receives written feedback after the vote."
                cadence: cyclic
              tasks:
                - "Publish election criteria and the timetable to eligible staff"
                - "Invite partners to submit nominations for the election round @recurring(yearly)"
                - "Schedule candidate interviews with three partners each"
                - "Give every candidate feedback within two weeks of the vote"
            - name: Partner retreat on firm economics
              description: |-
                ## Purpose
                Monthly meetings deal with this month's numbers, and the bigger questions, such as whether the model still fits, what to reinvest in and who the next partners are, never get airtime. A yearly one or two day retreat with a prepared agenda and pre-read keeps the model under deliberate review rather than changing only in a crisis.

                ## Milestones
                1. A date, venue and agenda agreed six weeks ahead.
                2. A pre-read with the year's economics, scorecards and open questions sent.
                3. Decisions and actions from the retreat recorded.
                4. Actions followed up at the next two partners' meetings.
              priority: low
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A partner retreat is held with a pre-read and agenda, and its recorded decisions are followed up at the next two meetings."
                cadence: cyclic
              tasks:
                - "Book the partner retreat date and venue @recurring(yearly)"
                - "Draft three big questions for the retreat agenda"
                - "Send the pre-read two weeks before the retreat"
                - "Record retreat decisions in the partners' decision log"
            - name: Retiring partner payout and handover
              description: |-
                ## Purpose
                When a founding partner retires, the firm tests its capital policy, the valuation method and the client handover all at once, and a poorly planned exit can drain the firm's cash for years. Planning the payout schedule, the client transition and the partner's role in the final year protects the retiring partner's value and the remaining partners' cash flow.

                ## Milestones
                1. The retiring partner's capital account balance and any goodwill payment confirmed.
                2. A payout schedule the firm's cash flow can carry.
                3. A handover plan for each client relationship with named successors.
                4. Retirement documents signed and announced.

                ## Notes
                Instalment payouts tied to firm profit share the risk fairly, but agree a cap and a floor so neither side is surprised.
              priority: medium
              deadlineOffsetDays: 365
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "Signed retirement terms include a payout schedule, a client handover plan with named successors and an announcement date."
                cadence: phased
                effort_hours_estimate: "20"
              tasks:
                - "Confirm the retiring partner's capital balance with the accountant"
                - "Model a payout schedule against the next three years of cash flow"
                - "Name a successor for each of the retiring partner's clients"
                - "Pay and record the retired partner's instalment @recurring(quarterly)"
            - name: Handling a partner leaving for a competitor
              description: |-
                ## Purpose
                Sooner or later a partner resigns to join a rival or set up alone, often with clients and juniors in mind. A prepared playbook covering notice, garden leave, client communications, capital repayment under bad leaver terms and protection of confidential material lets the firm respond calmly within days rather than improvising under pressure.

                ## Milestones
                1. The agreement's leaver terms, notice and covenants summarised on one page.
                2. A client communication plan for the departing partner's accounts.
                3. Access to systems and confidential files reviewed on notice.
                4. Capital repayment calculated under the agreed leaver terms.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A one-page departure playbook covers notice, client contact, system access and capital repayment, and is approved by the partners."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Summarise the agreement's leaver, notice and covenant terms"
                - "Draft a client message template for a departing partner's accounts"
                - "List the systems and files to review when notice is given"
                - "Ask the lawyer to check the playbook against the agreement"
            - name: Fair equity split between two founders
              description: |-
                ## Purpose
                Two founders often split fifty-fifty by default, even when one brought the clients, one brought the capital and one plans to leave in three years. Talking through contributions, future roles and time commitment, and then choosing a split with vesting, makes the split defensible on the day one founder starts to feel it was unfair.

                ## Milestones
                1. Each founder's past and expected contributions written separately.
                2. Differences discussed in a structured conversation with notes.
                3. A split agreed with vesting and a review point.
                4. The split recorded in the founders' agreement.

                ## Notes
                An equal split with clear roles and a deadlock clause can be fine. The danger is an equal split chosen to avoid the conversation.
              priority: medium
              deadlineOffsetDays: 45
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "Two founders have recorded an agreed equity split with vesting and a review date in their founders' agreement."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Write your expected contribution for the next three years"
                - "Ask your co-founder to do the same separately"
                - "Meet to compare the two lists and note where they differ"
                - "Record the agreed split and vesting in the founders' agreement"
            - name: Solo founder sharing profit before equity
              description: |-
                ## Purpose
                A solo founder with two or three senior consultants can lose them to bigger firms long before they are ready to share ownership. A transparent profit share for a defined group, with published rules and a route to equity later, tests whether the people and the firm are ready for a partnership without giving away ownership too early.

                ## Milestones
                1. The share of profit above a threshold offered to a named senior group.
                2. Rules for the split among participants written and shared.
                3. One full year of the profit share paid and reviewed.
                4. A decision recorded on whether any participant moves to equity.
              priority: medium
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A written profit share for senior staff has run for a full year and a decision on equity for each participant is recorded."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Choose the profit threshold above which sharing starts"
                - "Write the rules for splitting the shared profit"
                - "Explain the scheme to the senior group in one meeting"
                - "Review the first year and decide on any equity offers"
            - name: Partner leave, illness and reduced capacity rules
              description: |-
                ## Purpose
                Parental leave, long illness or caring for a parent will affect most partners at some point, and a pure eat what you kill system can punish them for it. Agreeing in advance how points, drawings and credit work during leave or reduced capacity protects partners and stops each case becoming a private negotiation at a hard moment.

                ## Milestones
                1. Situations covered: parental leave, illness, caring duties and sabbatical.
                2. Treatment of points, drawings and credit for each situation agreed.
                3. Any insurance, such as income protection, reviewed with an adviser.
                4. The rules added to the partnership agreement or a policy schedule.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Written rules for points, drawings and credit during leave and reduced capacity are adopted and attached to the partnership agreement."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "List the leave and capacity situations the rules must cover"
                - "Agree how points and drawings work in each situation"
                - "Ask an adviser about partner income protection insurance"
                - "Add the agreed rules to the partnership agreement schedule"
            - name: Part-time and semi-retired partner arrangement
              description: |-
                ## Purpose
                Senior partners approaching retirement often want to step down gradually, keeping a few clients and mentoring others, and the firm benefits from their relationships. A defined part-time or consultant partner arrangement, with reduced points, a fixed term and handover duties, avoids an abrupt exit and stops a partial role drifting into full pay for half the work.

                ## Milestones
                1. Eligible roles and minimum time commitment defined.
                2. Points or pay reduced in proportion to the agreed commitment.
                3. Handover duties for each retained client written down.
                4. A fixed term and review date set for each arrangement.
              priority: low
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A part-time partner arrangement with reduced points, handover duties and a fixed end date is agreed and recorded."
                cadence: phased
                effort_hours_estimate: "5"
              tasks:
                - "Define the minimum time commitment for a part-time partner"
                - "Set points in proportion to the agreed commitment"
                - "List handover duties for each retained client"
                - "Agree an end date and a mid-term review"
            - name: Family members as partners in a small firm
              description: |-
                ## Purpose
                Family-run consultancies, such as a founder and a spouse or a parent and an adult child, mix ownership, household money and family loyalty in ways that confuse non-family partners and staff. Separating ownership, pay and decision rights from family relationships, in writing, keeps the firm fair to non-family partners and protects the family if the business struggles.

                ## Milestones
                1. Each family member's role, pay basis and ownership written down.
                2. Decisions where family members must abstain identified.
                3. Divorce, death and exit effects on ownership reviewed with a lawyer.
                4. The arrangement explained to non-family partners.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A written note sets out family members' roles, pay, ownership and abstention rules, reviewed by a lawyer and shared with other partners."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Write each family member's role, pay basis and ownership"
                - "List decisions where family members should abstain"
                - "Ask the lawyer how divorce or death would affect ownership"
                - "Brief non-family partners on the arrangement"
            - name: Merging two small consulting firms
              description: |-
                ## Purpose
                Two boutiques merging to gain scale often agree the strategy quickly and then spend a year arguing about how to combine two incompatible partner models. Mapping both firms' economics, valuing each contribution and designing a combined model with a transition period before signing avoids a merger that splits again within two years.

                ## Milestones
                1. Both firms' partner models, profit and capital accounts mapped side by side.
                2. Relative contribution of each firm valued on an agreed basis.
                3. A combined compensation model with a two to three year transition designed.
                4. Merger and partnership documents reviewed by each firm's lawyer.

                ## Notes
                Each firm should have its own lawyer. Protecting existing partners' economics during transition usually decides whether the merger holds.
              priority: medium
              deadlineOffsetDays: 270
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A combined partner model with a transition period and an agreed contribution valuation is documented before merger terms are signed."
                cadence: phased
                effort_hours_estimate: "40"
              tasks:
                - "Exchange partner models and three years of profit under a confidentiality agreement"
                - "Map both models side by side on one page"
                - "Agree how each firm's contribution will be valued"
                - "Draft a combined model with a transition period"
            - name: Founding partner succession plan
              description: |-
                ## Purpose
                Most consulting firms are built around a founder's name and relationships, and many fail to outlive the founder because nobody planned the transfer of clients, leadership and ownership. A written succession plan covering the next managing partner, client relationships and the founder's equity gives the firm a value beyond one person.

                ## Milestones
                1. Founder-dependent clients, relationships and decisions listed.
                2. A successor or shortlist for managing partner named, with a development plan.
                3. A timeline for transferring each key client relationship.
                4. The founder's equity exit route agreed and documented.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A succession plan names a successor, sets client transfer dates and records the founder's equity exit route."
                cadence: phased
                effort_hours_estimate: "15"
              tasks:
                - "List every client and decision that depends on the founder"
                - "Name a successor shortlist for managing partner"
                - "Set a transfer date for each founder-held client relationship"
                - "Review progress on the succession plan with the partners @recurring(yearly)"
            - name: Outside investor or sale and partner equity
              description: |-
                ## Purpose
                An offer from a larger firm or an investor changes the partner model overnight: earn-outs, retention terms and the gap between founders and recent partners all come into play. Understanding how a sale or investment would treat each class of partner, with a corporate finance adviser and lawyer, lets partners judge an approach on its merits.

                ## Milestones
                1. Typical deal structures for consulting firm sales, such as earn-outs and retention, summarised.
                2. Each partner class's likely treatment in a sale mapped.
                3. Advisers identified who could act if an approach arrives.
                4. The partners' conditions for considering an approach agreed.

                ## Notes
                This is preparation, not a decision to sell. Valuation and deal terms are for a corporate finance adviser and lawyer.
              priority: low
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A note maps how a sale or investment would treat each partner class and records the partners' conditions for considering an approach."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Summarise earn-out and retention structures in consulting firm sales"
                - "Map how founders, equity partners and salaried partners would be treated"
                - "Name a corporate finance adviser you could call"
                - "Agree the partners' conditions for considering an approach"
            - name: Exploring employee ownership for the firm
              description: |-
                ## Purpose
                Some founders want the firm to belong to its people rather than to a buyer, and employee ownership trusts or broad share schemes exist in several countries for exactly that. Finding out what structures are available where you operate, what they cost and how they would sit alongside the partner model lets founders keep that option open.

                ## Milestones
                1. Employee ownership structures available in your jurisdiction listed.
                2. Costs, tax features and funding of a transfer outlined by an adviser.
                3. The effect on existing partner economics described.
                4. A decision recorded on whether to pursue the option further.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A recorded decision on employee ownership is based on an adviser's outline of structures, costs and effects on partner economics."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "List employee ownership structures available where you operate"
                - "Ask an adviser to outline costs and how a transfer is funded"
                - "Describe how staff ownership would affect partner profit"
                - "Record whether the partners want to explore further"
            - name: Practice area and office profit pools
              description: |-
                ## Purpose
                Once a firm has several practices or offices, partners start asking whether profit should be pooled firm-wide or kept by the unit that earned it. Designing allocation keys for shared costs and a rule for how much profit stays local balances the incentive to grow each unit against the need for partners to help each other.

                ## Milestones
                1. Profit by practice and office calculated with agreed cost allocation keys.
                2. Options compared: full firm pool, local pools and a split.
                3. A rule chosen for the share of profit pooled firm-wide.
                4. Allocation keys reviewed once a year.
              priority: low
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "Written cost allocation keys and a pooling rule are adopted, with profit by unit reported on that basis for the year."
                cadence: phased
                effort_hours_estimate: "12"
              tasks:
                - "Calculate profit by practice and office for last year"
                - "Draft allocation keys for shared costs such as rent and support staff"
                - "Compare full pooling with a local and firm-wide split"
                - "Review cost allocation keys with practice leads @recurring(yearly)"
            - name: Partner underperformance and de-equitisation process
              description: |-
                ## Purpose
                Every partnership eventually has a partner whose contribution has fallen for years while their share has not, and avoiding the issue breeds resentment among the others. A fair process, with clear evidence, a support period, a reduction in points and as a last step a move to salaried status or exit, lets the firm act without breaking trust.

                ## Milestones
                1. Triggers for the process defined from the scorecard and credit ledger.
                2. A support and improvement period with measurable goals agreed.
                3. Steps for reducing points or moving to salaried status written.
                4. The process checked by the lawyer against the agreement.

                ## Notes
                Most of the value is in using the process early, with support. If it is only ever used to remove someone, partners will treat every review as a threat.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A written underperformance process with triggers, a support period and de-equitisation steps is adopted and checked by a lawyer."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Define scorecard triggers that start the process"
                - "Write the support period and its measurable goals"
                - "Draft the steps for reducing points or moving to salaried status"
                - "Ask the lawyer to check the process against the agreement"
---

# Consulting Firm Partnership Model

This area is for founders and owners of small and mid-sized consulting firms who have to decide how partners own the firm and share its profit, and then live with that decision every month. It starts with foundations (a one-page ownership baseline, the legal vehicle, distributable profit, what a partner means here and the first written principles), moves to the operating routines that pay partners and credit their work, then the knowledge behind compensation models, valuation and tax, the big design decisions such as points systems, salaried tiers and buy-in prices, the dated events of admitting, electing and retiring partners, situations from two-founder splits to firm mergers, and finally specialist work on succession, outside investors, staff ownership and de-equitisation.

The rhythm is a weekly credit log, a monthly partner profit pack, drawings run and partners' meeting, a quarterly true-up and reserve check, and a yearly compensation round, capital statement, agreement review, election cycle and retreat. The Metrics log, Board meeting and Person templates pair with the monthly pack, the partners' meeting and each partner candidate's file. Installing adds all 50 projects as active, so archive the ones that are not for you yet.
