---
id: management-consulting.consulting-engagement-pricing
name: Consulting Engagement Pricing
description: "A pricing system for independent consultants and small firms: a floor rate from real costs, effort estimates before quoting, fixed fees by phase, retainers, success fees, discount rules and reviews of what each job actually earned."
category: business
version: 1.0.0
tags: [management-consulting, consulting-engagement-pricing, freelancer, small-business, day-rates, fixed-fees, retainers, effort-estimating]
author: Aurum Technology
starter_structure:
  templates:
    - metrics-log
    - risk-register
    - meeting-notes
  pillars:
    - name: Management Consulting
      emoji: "📋"
      description: "Consulting as a craft and a business: case interviews and getting hired, structuring problems with issue trees, hypothesis-driven workplans, client interviews, slides and steering committees, the career from analyst to partner, and going independent or building a boutique firm with sensible pricing."
      pillarFrontmatter:
        review_cadence: monthly
      areas:
        - name: Consulting Engagement Pricing
          description: "Pricing consulting work: daily or weekly team rates, fixed fees by phase, success fees, retainers, discounts and estimating effort before quoting."
          projects:
            - name: Floor day rate from your income target
              description: |-
                ## Purpose
                Most first rates are copied from a competitor or a recruiter's number, with no link to the income you need or the days you can really bill. Working back from a target take-home figure, through tax and overheads, to the number of billable days in a realistic year gives a floor rate you should not quote below, and a reason to say no to work that pays less.

                ## Milestones
                1. A target annual income written down, before tax, with the figure you need to clear after tax noted beside it.
                2. Realistic billable days for the year counted, after holidays, sales time, admin and a gap between clients.
                3. A floor day rate calculated as income plus overheads divided by billable days.
                4. The floor rate recorded where you will see it every time you quote.

                ## Notes
                Freelancers commonly assume 220 billable days and land nearer 120. Start from 100 to 140 unless you already have a full order book, and ask your accountant what to set aside for tax.
              priority: high
              deadlineOffsetDays: 14
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A floor day rate, with the income target, overhead total and billable day count behind it, written in one place and dated."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Write the annual income you need from consulting this year"
                - "Count your billable days after holidays, selling time and admin"
                - "Divide income plus overheads by billable days to get the floor rate"
                - "Ask your accountant what share of fees to reserve for tax"
            - name: Fully loaded cost of a delivery day
              description: |-
                ## Purpose
                Overheads hide in many places: insurance, software, a laptop every three years, accounting fees, travel that a client will not pay for and the weeks spent writing proposals that lose. Adding them up and spreading them across billable days shows the cost every quoted day has to cover before it earns you anything.

                ## Milestones
                1. Every annual overhead listed with its cost, from professional indemnity cover to subscriptions.
                2. Unbillable time valued, including proposal writing, networking and learning.
                3. A cost per billable day calculated and compared with your current day rate.
                4. The overhead list saved so it can be refreshed each year.
              priority: high
              deadlineOffsetDays: 14
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "An itemised overhead list with a cost per billable day, compared in writing against the rate you currently charge."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Pull last year's bank statements and list every business cost"
                - "Estimate the hours spent last year on proposals that did not win"
                - "Divide total overheads by billable days to get a cost per day"
                - "Refresh the overhead list and cost per day @recurring(yearly)"
            - name: Team rate card by role and seniority
              description: |-
                ## Purpose
                Quoting every job from scratch, a small firm ends up charging the same senior consultant at three different rates to three clients. A rate card with a day and a week rate for each role, from analyst to partner, built from salary or contractor cost plus a target margin, makes quotes faster and lets anyone in the firm price a team the same way.

                ## Milestones
                1. Each delivery role listed with its cost per day, whether employee or contractor.
                2. A target gross margin set for each role and the resulting day rate calculated.
                3. Weekly rates set for full-time weeks, with any weekly discount stated.
                4. The rate card agreed by the partners and stored where proposals are written.

                ## Notes
                Solo consultants can still use a rate card: one rate for you, one for any associate you bring in, and one for a research assistant.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A one-page rate card with day and week rates for every delivery role, each showing its cost and margin, signed off by the partners."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "List every role you staff on engagements and its cost per day"
                - "Agree the gross margin each role should earn"
                - "Set day and week rates for each role on one page"
                - "Share the rate card with whoever writes proposals"
            - name: Choosing which pricing models you will offer
              description: |-
                ## Purpose
                Daily rates, fixed fees by phase, retainers and success fees each suit a different kind of work, and offering all of them to everyone creates confusion. Deciding which models you will use, for which kinds of engagement, means every quote starts from a sensible default instead of whatever the client happens to ask for.

                ## Milestones
                1. Each model described in two lines with the kind of work it suits.
                2. A default model chosen for your three most common engagement types.
                3. Models you will not offer, and why, written down.
                4. The choices summarised on one page to use when scoping new work.

                ## Notes
                A common default: diagnostics as a fixed fee, open-ended support as a retainer, and time and materials only where scope truly cannot be fixed.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A one-page pricing model policy naming the default model for each of your three main engagement types and the models you decline."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "List your last ten engagements and how each was priced"
                - "Note which ones made or lost money against the estimate"
                - "Pick a default pricing model for each engagement type"
                - "Write down the pricing models you will refuse and the reason"
            - name: Bottom-up effort estimate before quoting
              description: |-
                ## Purpose
                Fixed fees go wrong when the number comes before the work is broken down. Listing every activity in the proposed approach, from kickoff and interviews to analysis, drafting, review cycles and the readout, and putting days against each role, gives an estimate you can defend and a fee you can stand behind.

                ## Milestones
                1. The approach broken into activities for each phase, including review cycles and client meetings.
                2. Days per activity estimated for each role, with a best, likely and worst case.
                3. Total effort multiplied by the rate card to give a cost-based fee.
                4. The estimate sheet saved with the quote so it can be compared with actual time later.

                ## Notes
                The items most often missed are client review rounds, travel days, steering committee preparation and the week of rework after the first draft.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A reusable estimating sheet with activities, roles and best, likely and worst case days, used on at least one live quote."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Build an estimating sheet with phases, activities and roles as columns"
                - "Add rows for review rounds, travel days and steering committee preparation"
                - "Estimate best, likely and worst case days for a live opportunity"
                - "Multiply effort by the rate card to get a cost-based fee"
            - name: Minimum engagement size and walk-away fee
              description: |-
                ## Purpose
                Small jobs carry almost the same selling, contracting and invoicing effort as large ones, and a stream of two-day pieces can fill a calendar without paying the bills. Setting a minimum engagement fee and a walk-away point for negotiation means you decide in advance which work is too small to take.

                ## Milestones
                1. The fixed effort of selling, contracting and closing a job estimated in hours.
                2. A minimum engagement fee set that covers that effort and still earns your floor rate.
                3. A walk-away fee set for negotiations, below which you decline politely.
                4. A short referral list ready for work below your minimum.
              priority: medium
              deadlineOffsetDays: 21
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A written minimum engagement fee and walk-away rule, with two peers listed to refer smaller work to."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Estimate the hours spent winning and closing your last small job"
                - "Set a minimum fee that covers that effort at your floor rate"
                - "Write the fee below which you will decline any negotiation"
                - "Name two peers you can refer smaller jobs to"
            - name: Expenses and travel billing policy
              description: |-
                ## Purpose
                Travel, accommodation and subsistence can add a fifth to the cost of an on-site engagement, and arguing about them after the event damages the relationship. A written policy on what is billed at cost, what is included in the fee and what needs approval avoids surprises on both sides.

                ## Milestones
                1. A decision on whether expenses are billed at cost, capped or included in the fee.
                2. Rules for travel class, hotel standard and per diems written in plain terms.
                3. A standard expenses clause ready to paste into proposals.
                4. A receipts routine set up so every claim can be evidenced.

                ## Notes
                Many clients have their own travel policy. Ask for it before quoting, since it can cut what you are allowed to recover.
              priority: medium
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A one-page expenses policy and a matching proposal clause, plus a receipts folder in use for the next billable trip."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Choose between expenses at cost, a cap or an all-inclusive fee"
                - "Write rules for travel class, hotels and daily meals"
                - "Draft a standard expenses clause for your proposals"
                - "Set up a folder or app to capture receipts on the day"
            - name: Payment terms, deposits and invoice milestones
              description: |-
                ## Purpose
                Even a good fee paid ninety days late can still leave a small firm short of cash. Agreeing standard payment terms, a deposit or first invoice at kickoff, and invoices tied to phase deliverables rather than the end of the job keeps cash coming in while the work is done.

                ## Milestones
                1. Standard payment days chosen, with a stated late payment charge where your law allows one.
                2. A deposit or mobilisation invoice set as the default for new clients.
                3. An invoicing pattern for fixed fees tied to phases or monthly instalments.
                4. The terms built into your proposal and contract templates.

                ## Notes
                Large corporate clients often impose their own terms through procurement. Find out early and price the wait in if you must accept long terms.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Standard payment terms, a deposit rule and a phase invoicing pattern written into your proposal and contract templates."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Check how many days your last five clients took to pay"
                - "Choose standard payment terms and a deposit rule for new clients"
                - "Map fixed-fee invoices to phase deliverables"
                - "Update the terms section of your contract template"
            - name: Quote log of every price you have given
              description: |-
                ## Purpose
                Without a record of what you quoted, to whom and whether it won, every pricing decision rests on memory. A simple log of each quote, its model, value, estimated days and outcome becomes, within a year, the best evidence you have about what your market will pay.

                ## Milestones
                1. A log set up with client, date, scope, model, fee, estimated days and outcome.
                2. Quotes from the last twelve months entered as far as records allow.
                3. A reason recorded for every lost quote, from the client where possible.
                4. The log updated within a week of every new quote.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A quote log with at least the last twelve months of quotes, each with an outcome and, for losses, a stated reason."
                cadence: rolling
              tasks:
                - "Create the quote log with columns for model, fee, days and outcome"
                - "Enter every quote you can find from the last twelve months"
                - "Ask the last two clients who said no what drove the decision"
                - "Update outcomes and loss reasons in the quote log @recurring(monthly:28)"
            - name: Weekly burn check on fixed-fee engagements
              description: |-
                ## Purpose
                Fixed-fee work is only profitable if the days spent stay close to the days estimated, and overruns are usually visible by week two. Comparing days used with days planned and with work completed every Friday gives you time to rescope, raise a change request or adjust the team before the margin is gone.

                ## Milestones
                1. A burn sheet for each live fixed-fee job showing planned days, used days and percent complete.
                2. A rule set for when an overrun triggers a conversation, such as ten percent over plan.
                3. Overruns explained by cause: scope growth, estimate error or client delay.
                4. Four consecutive weekly checks completed on every live job.

                ## Notes
                Start from the **Metrics log** template to keep one row per engagement per week.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every live fixed-fee engagement has a weekly burn entry for at least four weeks, with any overrun over ten percent explained."
                cadence: rolling
              tasks:
                - "Set up a burn sheet for each live fixed-fee engagement"
                - "Agree the overrun level that triggers a talk with the client"
                - "Compare days used with days planned and work done @recurring(weekly:fri)"
                - "Tag each overrun as scope growth, estimate error or client delay"
            - name: Time recording on fixed-fee work
              description: |-
                ## Purpose
                Consultants on fixed fees often stop recording time, and then cannot tell whether a job made money or how to price the next one. Logging hours daily against the phases of the estimate, even when nobody is billed by the hour, builds the evidence every future estimate needs.

                ## Milestones
                1. A time tracking tool or sheet chosen with phases matching your estimate sheet.
                2. Time logged daily for a full month across all engagements.
                3. Unbilled time, such as proposal writing, recorded in its own category.
                4. A month of time data summarised by engagement and phase.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Thirty consecutive working days of time entries mapped to engagement phases, with unbilled time in its own category."
                cadence: rolling
              tasks:
                - "Pick a time tracking tool and create phases for each live job"
                - "Add categories for selling, admin and learning time"
                - "Log hours against engagement phases before closing the laptop @recurring(daily)"
                - "Summarise last month's time by engagement and phase"
            - name: Monthly realisation and effective day rate review
              description: |-
                ## Purpose
                The rate on the rate card is rarely the rate you earn: overruns, write-offs, discounts and unbilled travel all erode it. Dividing fees actually invoiced by days actually worked, each month and for each engagement, shows your effective day rate and where the gap comes from.

                ## Milestones
                1. Fees invoiced and days worked pulled for each engagement in the month.
                2. An effective day rate calculated for each engagement and for the month overall.
                3. Realisation shown as effective rate divided by rate card rate.
                4. The two largest causes of lost realisation named with a fix for each.

                ## Notes
                Start from the **Metrics log** template. Realisation consistently below 80 percent usually means estimating or scope control needs work, not the rate card.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A monthly realisation figure for each engagement for three months running, with the main causes of any shortfall written down."
                cadence: rolling
              tasks:
                - "Export last month's invoices and time entries"
                - "Calculate effective day rate and realisation for each engagement @recurring(monthly:8)"
                - "Name the two biggest causes of lost realisation this month"
                - "Agree one change to estimating or scope control from the review"
            - name: Quarterly win rate and price position review
              description: |-
                ## Purpose
                Winning every proposal is a sign you are too cheap, and losing most of them on price is a sign you are pitching to the wrong buyers or explaining value badly. Reviewing win rate by price band, model and client type every quarter turns the quote log into a pricing decision.

                ## Milestones
                1. Win rate calculated for the quarter overall and by pricing model.
                2. Lost quotes split into price, timing, scope and competitor reasons.
                3. Average fee per won engagement compared with the previous quarter.
                4. One pricing change agreed for the next quarter, or a reason to hold.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: decision
                success_criteria: "A quarterly note giving win rate by model, loss reasons and one recorded pricing decision for the coming quarter."
                cadence: cyclic
              tasks:
                - "Calculate win rate by pricing model from the quote log @recurring(quarterly)"
                - "Split lost quotes by price, timing, scope and competitor"
                - "Compare average won fee with last quarter"
                - "Record one pricing decision for next quarter"
            - name: Annual rate card review
              description: |-
                ## Purpose
                Rates left untouched for three years fall behind costs, salaries and the experience you have added. A yearly review that checks costs, realisation, win rates and what peers charge, then sets the new rate card from a fixed date, keeps prices moving without awkward one-off conversations.

                ## Milestones
                1. Costs, realisation and win rate for the year summarised on one page.
                2. Peer and market rate evidence gathered for each role.
                3. A new rate card set with an effective date for new work.
                4. A plan agreed for when existing clients move to the new rates.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: decision
                success_criteria: "A new dated rate card approved each year, backed by a one-page summary of costs, realisation and market evidence."
                cadence: cyclic
              tasks:
                - "Book a half day for the annual rate card review @recurring(yearly)"
                - "Summarise the year's costs, realisation and win rate"
                - "Gather current market rate evidence for each role"
                - "Set the new rate card and its effective date"
            - name: Change request routine for scope creep
              description: |-
                ## Purpose
                Scope creep on consulting work rarely arrives as one large request; it is an extra interview here, another business unit there and a board pack nobody priced. A standing routine to log every request, judge it against the agreed scope and price it as a change request before doing the work protects fixed fees.

                ## Milestones
                1. A scope register listing each live engagement's agreed deliverables and exclusions.
                2. A one-page change request form with effort, fee and timing impact.
                3. Every out-of-scope request logged and answered within three working days.
                4. At least one change request raised, priced and agreed or declined in writing.

                ## Notes
                Absorbing a small request can be a good gesture, but record it as a concession in writing so it does not become the new baseline.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A scope register and change request form in use, with every out-of-scope request on live jobs logged and answered in writing."
                cadence: rolling
              tasks:
                - "List agreed deliverables and exclusions for each live engagement"
                - "Draft a one-page change request form with fee and timing impact"
                - "Review open scope requests on every live job @recurring(weekly:mon)"
                - "Record any request you absorb free as a written concession"
            - name: Retainer usage tracking
              description: |-
                ## Purpose
                Retainers drift in two directions: clients who use far more than the agreed days, and clients who use so little that they cancel at renewal. Tracking usage each month against the allowance, and telling the client where they stand, keeps the retainer fair and gives you evidence for the renewal conversation.

                ## Milestones
                1. Each retainer's monthly allowance in days, hours or deliverables recorded.
                2. Usage logged monthly against the allowance for each retainer client.
                3. A short usage note sent to each client every month.
                4. Rules written for unused time rolling over or expiring.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Monthly usage against allowance recorded and sent to every retainer client for three months, with rollover rules written down."
                cadence: rolling
              tasks:
                - "Record the monthly allowance for each retainer client"
                - "Log retainer usage and send each client a short note @recurring(monthly:20)"
                - "Write the rule for unused time rolling over or lapsing"
                - "Flag any client using more than the allowance two months running"
            - name: Fee collection follow-up routine
              description: |-
                ## Purpose
                An uncollected fee is a discount of one hundred percent, and small firms often wait too long to chase because they fear upsetting the client. A calm, regular routine of reminders before and after the due date, with an agreed escalation path, gets most invoices paid without any awkwardness.

                ## Milestones
                1. An aged list of open invoices by client and days outstanding.
                2. A reminder sequence written: before due date, on due date, and at fourteen and thirty days late.
                3. A named contact in each client's accounts team recorded.
                4. Average days to payment measured and reduced over three months.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "An aged invoice list reviewed weekly for twelve weeks, with average days to payment recorded at the start and the end."
                cadence: rolling
              tasks:
                - "List every unpaid invoice with its due date and client contact"
                - "Write short reminder emails for before, on and after the due date"
                - "Send reminders on invoices due or overdue this week @recurring(weekly:wed)"
                - "Calculate average days to payment across all clients @recurring(monthly:3)"
            - name: Estimate versus actual after each engagement
              description: |-
                ## Purpose
                Estimates only get better if you compare each one with what really happened. A short review at the close of every job, setting estimated days and fee beside actual days and fee by phase, shows which kinds of work you underestimate and by how much, so the next quote carries the right buffer.

                ## Milestones
                1. Estimated and actual days compared by phase for the engagement.
                2. The variance explained in a sentence per phase.
                3. Adjustment factors updated for the type of work, such as interviews or modelling.
                4. The review filed with the original estimate sheet.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: knowledge
                success_criteria: "An estimate versus actual review by phase for every engagement closed, with an adjustment factor table updated after each."
                cadence: rolling
              tasks:
                - "Set out estimated and actual days by phase for the last closed job"
                - "Write one sentence explaining the variance in each phase"
                - "Update your adjustment factors for each type of activity"
                - "Run the review on any engagement closed this month @recurring(monthly:26)"
            - name: Value conversation before naming a fee
              description: |-
                ## Purpose
                Fifty thousand in fees looks expensive against a day rate and cheap against a two million saving or a decision that avoids a failed acquisition. Learning to ask the questions that put a number on the client's problem, before any fee is discussed, lets you anchor the price to value instead of to your time.

                ## Milestones
                1. A set of six to eight value questions written: cost of the problem, cost of delay, what success is worth.
                2. The questions practised in three real or mock scoping calls.
                3. A value estimate, with the client's own numbers, recorded for each opportunity.
                4. At least one quote set with reference to client value rather than days alone.

                ## Notes
                Never invent the value figure yourself. Use the client's numbers, and say which ones you are relying on when you price.
              priority: medium
              deadlineOffsetDays: 60
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A written list of value questions used in at least three scoping calls, with a client-sourced value estimate recorded for each."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Read one book or long guide on value-based pricing for advisers"
                - "Write six to eight questions that size the client's problem in money"
                - "Practise the questions on a scoping call this month"
                - "Record the client's value figures beside the quote you send"
            - name: Three-option fee presentation
              description: |-
                ## Purpose
                One price invites a yes or no; three options invite the client to choose how much help they want. Building a light, standard and extended option for the same problem, each with a clear scope and fee, moves the conversation from whether to hire you to which version, and often lifts the average fee.

                ## Milestones
                1. Three scopes defined for one live opportunity, each solving the problem at a different depth.
                2. Fees set for each with the middle option as the one you recommend.
                3. A one-page comparison showing what each option includes and excludes.
                4. The format reused on at least three proposals and the choices recorded.

                ## Notes
                Keep the cheapest option genuinely useful. A deliberately poor first option is easy for buyers to spot and damages trust.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: artifact
                success_criteria: "A reusable three-option fee page used on three proposals, with the option each client chose recorded in the quote log."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Pick a live opportunity and draft light, standard and extended scopes"
                - "Price each option from the effort estimate and client value"
                - "Lay out the options side by side on a single page"
                - "Record which option each client picked in the quote log"
            - name: Holding the fee when procurement pushes back
              description: |-
                ## Purpose
                Procurement teams are measured on savings, so a request for ten percent off is often routine rather than a sign the client will walk. Preparing what you will trade instead of cutting the price, such as fewer workshops, a shorter report or faster payment, lets you keep the fee or give something back only for something in return.

                ## Milestones
                1. A list of scope or terms trades you can offer in place of a discount.
                2. Prepared answers for the five pushback lines you hear most often.
                3. A walk-away point agreed with yourself or your partners before each negotiation.
                4. One negotiation run using trades, with the outcome recorded.

                ## Notes
                Start from the **Meeting notes** template to plan each negotiation call and record what was conceded.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A written trade list and pushback answers used in at least one real negotiation, with concessions and outcome recorded."
                cadence: phased
                effort_hours_estimate: "5"
              tasks:
                - "List the scope and terms trades you could offer instead of a discount"
                - "Write answers to the five pushback lines you hear most"
                - "Set your walk-away point before the next fee negotiation"
                - "Rehearse the negotiation with a peer playing procurement"
            - name: Pricing risk and contingency into fixed fees
              description: |-
                ## Purpose
                Quoting a fixed fee moves the risk of overrun from the client to you, and that risk should be priced. Naming the specific risks on each engagement, such as poor data, slow client approvals or an unclear decision maker, and sizing a contingency for each, gives a fee that survives the likely problems and assumptions that protect you from the rest.

                ## Milestones
                1. A list of the common risks on your type of engagement with a typical cost in days.
                2. A method for sizing contingency, such as a percentage per risk or a worst-case gap.
                3. Assumptions written for the proposal that move uncontrollable risks back to the client.
                4. Contingency and assumptions applied to one live quote.

                ## Notes
                Start from the **Risk register** template. Data quality and client review delays are the two risks most often unpriced.
              priority: high
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A risk list with day costs, a contingency method and a set of standard proposal assumptions, applied to at least one quote."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "List the risks that caused overruns on your last five jobs"
                - "Put a typical cost in days against each risk"
                - "Write standard assumptions that hand back risks you cannot control"
                - "Apply contingency and assumptions to your next fixed-fee quote"
            - name: Finding the client's budget before quoting
              description: |-
                ## Purpose
                Sending a fee into silence wastes the proposal if it is three times the budget, and leaves money on the table if it is half. Asking about budget range, approval limits and how similar work was bought before, early in scoping, lets you shape the scope to the money available rather than guessing.

                ## Milestones
                1. Three or four budget questions written in words you are comfortable saying.
                2. Approval thresholds for the buyer found, such as the level above which a tender is required.
                3. A budget range or a past comparable fee obtained on two opportunities.
                4. Scope adjusted to fit the budget on at least one quote.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A budget range or approval threshold recorded for at least two opportunities before the fee was sent."
                cadence: phased
                effort_hours_estimate: "3"
              tasks:
                - "Write three budget questions you can ask naturally on a call"
                - "Ask the next prospect about their approval limits and process"
                - "Ask how they priced similar advisory work in the past"
                - "Note the budget signal beside the opportunity in the quote log"
            - name: Market rate research for your niche
              description: |-
                ## Purpose
                Rates for consulting vary widely by sector, country, seniority and type of buyer, so a general survey says little about your own market. Gathering rate evidence from peers, published surveys, framework agreements and lost proposals gives a range you can position yourself in deliberately.

                ## Milestones
                1. Five or more data points on day or project rates from peers in your niche.
                2. Published fee surveys or public framework rates collected where they exist.
                3. A low, typical and premium rate band set out for your niche.
                4. Your own position in the band chosen with a reason.

                ## Notes
                Public sector framework rates are often published and give a useful floor, since they are usually below private market rates.
              priority: medium
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A rate band for your niche built from at least five sourced data points, with your chosen position and reason written beside it."
                cadence: cyclic
                effort_hours_estimate: "6"
              tasks:
                - "Ask five peers in your niche what they charge per day"
                - "Look up published consulting fee surveys for your sector"
                - "Find public framework agreement rates for similar roles"
                - "Refresh the rate band with new evidence @recurring(yearly)"
            - name: Phase-based fees with decision gates
              description: |-
                ## Purpose
                Clients hesitate to commit to a large fixed fee for work whose later stages depend on what the first stage finds. Pricing each phase separately, with a decision gate where the client chooses whether to continue, lowers the first commitment and lets you price later phases with far better information.

                ## Milestones
                1. A standard phase structure for your main engagement type, with a deliverable at each gate.
                2. A fee for phase one fixed and later phases shown as indicative ranges.
                3. Gate criteria written so both sides know what triggers the next phase.
                4. One engagement sold and run with at least one decision gate.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "One engagement priced in phases with a fixed first phase, indicative later ranges and written gate criteria."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Split your most common engagement into phases with gate deliverables"
                - "Fix the phase one fee and show later phases as ranges"
                - "Write the criteria that open each gate"
                - "Offer the phased structure on the next suitable opportunity"
            - name: Moving from day rates to fixed fees
              description: |-
                ## Purpose
                Day rates cap your income at the days you work and reward slowness, while fixed fees reward the speed that comes with experience, provided estimating is sound. Deciding which engagements to move to fixed fees, piloting on two, and comparing the effective day rate with your usual rate shows whether the switch pays.

                ## Milestones
                1. Engagement types ranked by how predictable their scope is.
                2. Two engagements chosen to pilot a fixed fee.
                3. Effective day rate on the pilots compared with your standard day rate.
                4. A decision recorded on which work moves to fixed fees by default.
              priority: medium
              deadlineOffsetDays: 120
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "Two fixed-fee pilots completed, their effective day rates compared with your standard rate, and a written default for each engagement type."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Rank your engagement types from most to least predictable scope"
                - "Choose two upcoming jobs to quote as fixed fees"
                - "Compare the effective day rate on each pilot with your usual rate"
                - "Record which engagement types move to fixed fees"
            - name: Success fee structure and measurement terms
              description: |-
                ## Purpose
                Success fees tie part of your pay to the client's result, which buyers like, but they fail when the result cannot be measured cleanly or is outside your control. Deciding the base fee you need regardless, the measure, the baseline, the payment timing and the cap before offering one avoids disputes months after the work ends.

                ## Milestones
                1. A base fee set that covers your costs even if no success fee is paid.
                2. A measurable outcome, its baseline and who confirms it agreed in principle.
                3. Payment timing and a cap on the success element written down.
                4. Terms reviewed by a lawyer before they go into any contract.

                ## Notes
                Some professional bodies and public buyers restrict contingent fees, especially where the adviser also gives an independent opinion. Check your own rules first.
              priority: medium
              deadlineOffsetDays: 45
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A written success fee term sheet with base fee, measure, baseline, timing and cap, reviewed by a lawyer before first use."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Set the base fee you need even if the success fee never pays"
                - "Pick an outcome measure the client's own accounts will show"
                - "Write the baseline, payment timing and cap in a short term sheet"
                - "Ask a lawyer to review the term sheet before you offer it"
            - name: Designing a monthly advisory retainer
              description: |-
                ## Purpose
                Retainers turn irregular project income into a predictable monthly fee, but a vague one becomes unlimited free access to your phone. Defining what the retainer includes, the response time, the monthly allowance and the notice period gives the client a clear product and gives you steady revenue.

                ## Milestones
                1. The retainer's contents defined: calls, reviews, board attendance or a set number of days.
                2. A monthly fee set from the allowance and the value of availability.
                3. Minimum term, notice period and treatment of extra work written down.
                4. The retainer offered to at least two current or past clients.
              priority: medium
              deadlineOffsetDays: 45
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A one-page retainer offer with contents, allowance, fee, minimum term and notice period, sent to at least two clients."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "List what a retainer client would get each month"
                - "Set the allowance and monthly fee for the retainer"
                - "Write the minimum term, notice period and overage rate"
                - "Offer the retainer to two clients who keep calling between projects"
            - name: Written discount policy and approval limits
              description: |-
                ## Purpose
                Discounts given case by case add up to a lower rate card nobody agreed. A written policy that names when a discount is allowed, such as a multi-phase commitment, early payment or a nonprofit client, the maximum size, and who must approve it, keeps discounting deliberate.

                ## Milestones
                1. Every discount given in the last year listed with its reason and size.
                2. Allowed reasons for discounting and the maximum for each written down.
                3. An approval rule set for anything beyond the standard limits.
                4. Discounts shown on invoices as a line against the full fee.

                ## Notes
                Showing the discount as its own invoice line, rather than a lower rate, keeps the full price visible when the client comes back for more.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A one-page discount policy with allowed reasons, limits and approver, and every discount since adoption shown as a separate invoice line."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "List every discount given in the last year and why"
                - "Write the allowed reasons and the maximum discount for each"
                - "Name who must approve a discount above the limit"
                - "Review discounts granted against the policy @recurring(quarterly)"
            - name: Repricing a client stuck on an old rate
              description: |-
                ## Purpose
                Long-standing clients often sit on the rate you charged when you started, sometimes years below what new clients pay. Planning the move, with notice, a reason linked to added experience or scope, and perhaps a step increase, raises the rate while keeping a client who values the relationship.

                ## Milestones
                1. The gap between the client's rate and your current rate card calculated.
                2. A step plan chosen: full move, two steps, or new rate on the next piece of work.
                3. A short, warm notice drafted with the effective date.
                4. The conversation held and the new rate confirmed in writing.
              priority: medium
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A client on an old rate moved to a new rate with an effective date confirmed in writing."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Work out how far each long-standing client sits below the rate card"
                - "Choose a full or stepped increase for the client furthest behind"
                - "Ask the agent to draft a short rate notice in your own tone"
                - "Confirm the new rate and effective date by email after the call"
            - name: Paid diagnostic as a fixed-price entry offer
              description: |-
                ## Purpose
                Many buyers will not approve a large engagement without evidence, and free scoping work gives away the thinking that makes your proposal valuable. A short paid diagnostic at a fixed price, with a defined report and a credit against the main engagement, lets the client test you cheaply and lets you scope the real work properly.

                ## Milestones
                1. A diagnostic scope of five to ten days with a fixed deliverable.
                2. A fixed price set, with any credit toward follow-on work stated.
                3. A one-page description of the diagnostic ready to send.
                4. The diagnostic sold to at least one client.
              priority: medium
              deadlineOffsetDays: 60
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A one-page fixed-price diagnostic offer with a defined deliverable, sold to at least one client."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Define a five to ten day diagnostic and its written output"
                - "Set the fixed price and any credit toward a larger engagement"
                - "Write a one-page description of the diagnostic"
                - "Offer it to the next prospect who wants proof before committing"
            - name: Productised fixed-scope service packages
              description: |-
                ## Purpose
                Work you have done ten times, such as an operating model review or a pricing health check, can be sold as a package with a fixed scope, timeline and price. Packaging removes most of the estimating effort, shortens the sales cycle and makes your margin predictable, as long as the scope stays fixed.

                ## Milestones
                1. Two or three repeatable services chosen from past engagements.
                2. A fixed scope, timeline, exclusions and price set for each package.
                3. Effort per package checked against actual time on past jobs.
                4. Each package sold at least once and its margin recorded.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "At least two packages with fixed scope, timeline and price, each sold once with its actual margin recorded."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "Pick the services you have delivered at least five times"
                - "Write scope, timeline, exclusions and price for each package"
                - "Check package effort against time records from past jobs"
                - "Record the margin on the first sale of each package"
            - name: Pricing work for clients in other currencies
              description: |-
                ## Purpose
                Quoting a client abroad raises questions a domestic quote never does: which currency, who carries the exchange rate risk, withholding tax and bank charges on receipt. Setting a default currency rule and building the costs of receiving foreign payments into the fee keeps cross-border work from paying less than it appears.

                ## Milestones
                1. A rule chosen for which currency you quote in for each region.
                2. Bank and transfer charges on a foreign payment measured.
                3. Withholding tax questions for your main client countries listed for your accountant.
                4. A buffer for exchange movements built into foreign currency quotes.

                ## Notes
                Tax treatment of cross-border fees depends on treaties and local rules. Agree the approach with your accountant before quoting.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A written currency rule, a measured cost of receiving foreign payments and an accountant's note on withholding tax for your main client countries."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Decide which currency to quote in for each client region"
                - "Check the charges on your last foreign payment received"
                - "Ask your accountant about withholding tax for your main client countries"
                - "Check rates on open foreign currency quotes and invoices @recurring(quarterly)"
            - name: Nonprofit and pro bono rate policy
              description: |-
                ## Purpose
                Charities, community groups and friends' startups will ask for a lower rate, and without a policy you either refuse awkwardly or discount so often it eats the year. Setting a fixed number of reduced-rate or pro bono days, the organisations that qualify and how the full value is shown keeps generosity planned.

                ## Milestones
                1. An annual budget of reduced-rate and pro bono days set.
                2. Criteria written for which organisations qualify.
                3. A standard way to show the full fee and the reduction on the proposal.
                4. Days used tracked against the budget through the year.
              priority: low
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A written policy with a yearly budget of reduced and pro bono days and qualifying criteria, with days used tracked."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Choose how many reduced-rate and pro bono days you can give a year"
                - "Write the criteria an organisation must meet to qualify"
                - "Show the full fee and reduction on every reduced-rate proposal"
                - "Track reduced and pro bono days used against the budget"
            - name: Fee schedule for a formal tender response
              description: |-
                ## Purpose
                Tenders and requests for proposals usually demand fees in a fixed format: day rates by named person, a total by deliverable, and sometimes a separate price envelope scored against quality. Preparing a fee schedule that follows the format exactly, ties to the workplan and stays inside any published budget avoids disqualification on a technicality.

                ## Milestones
                1. Every pricing instruction in the tender pack listed, including format, currency and validity period.
                2. Days by person and deliverable reconciled with the technical workplan.
                3. Rates and totals checked against any published budget or ceiling.
                4. The fee schedule reviewed by a second person and submitted before the deadline.

                ## Notes
                Read the clarification responses issued to all bidders. Pricing rules are often changed there, not in the original pack.
              priority: medium
              deadlineOffsetDays: 21
              frontmatter:
                mode: event
                output_kind: deliverable
                success_criteria: "A fee schedule in the exact tender format, reconciled to the workplan and checked by a second reader, submitted before the deadline."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "List every pricing instruction in the tender pack and clarifications"
                - "Reconcile days by person and deliverable with the technical workplan"
                - "Check totals against any published budget or ceiling"
                - "Have a second person check every figure before submission @priority(high)"
            - name: Retainer renewal and repricing meeting
              description: |-
                ## Purpose
                The renewal of a retainer is the natural moment to reset its scope and fee, and the one most often missed when it rolls on silently. Preparing a short review of what the client used and gained over the term, and proposing the next term's allowance and fee, turns a quiet rollover into a priced decision.

                ## Milestones
                1. Usage over the term summarised against the allowance.
                2. Two or three outcomes the client gained from the retainer named.
                3. A proposed allowance and fee for the next term prepared.
                4. The renewal meeting held and the new terms confirmed in writing.
              priority: medium
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A renewal meeting held before the term ends, with new allowance and fee confirmed in writing."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Book the renewal meeting six weeks before the term ends"
                - "Summarise usage against the allowance for the whole term"
                - "Prepare the proposed allowance and fee for the next term"
                - "Send written confirmation of the renewed terms after the meeting"
            - name: Seven-day quote turnaround for a live lead
              description: |-
                ## Purpose
                Warm leads cool fast, and a quote that takes three weeks often arrives after the buyer has hired someone else or lost the budget. Working to a seven-day turnaround from first call to priced proposal, with the estimate, risk check and fee decision done in fixed steps, gives a quick answer without guessing.

                ## Milestones
                1. Scoping call held and notes written on the same day.
                2. Effort estimate and risk list completed by day three.
                3. Fee and model decided and checked against the floor rate by day five.
                4. Priced proposal sent by day seven.
              priority: medium
              frontmatter:
                mode: event
                output_kind: deliverable
                success_criteria: "A priced proposal sent within seven days of the first scoping call, with the estimate sheet and risk list saved."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Write up scoping call notes on the same day"
                - "Complete the effort estimate and risk list by day three"
                - "Decide the fee and check it against your floor rate"
                - "Send the priced proposal by day seven"
            - name: Final invoice and engagement close-out
              description: |-
                ## Purpose
                Money leaks at the end of a job: approved change requests never invoiced, expenses left unclaimed, a final instalment waiting for a sign-off nobody asked for. A close-out checklist that reconciles everything billable against everything billed, and gets written acceptance of the deliverables, closes the job cleanly.

                ## Milestones
                1. Fees billed reconciled against the contract and approved change requests.
                2. All outstanding expenses claimed with receipts.
                3. Written acceptance of the final deliverables obtained.
                4. The final invoice sent and the engagement marked closed in your records.
              priority: medium
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A closed engagement with fees reconciled to contract and change requests, expenses claimed, acceptance received and final invoice sent."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Reconcile fees billed against the contract and change requests"
                - "Claim any outstanding expenses with receipts"
                - "Ask the sponsor for written acceptance of the final deliverables"
                - "Send the final invoice and mark the engagement closed"
            - name: Fee dispute resolution meeting
              description: |-
                ## Purpose
                When a client disputes an invoice after an overrun or a disappointing result, the fee can be tied up for months. Preparing the facts, from the contract and change requests to emails confirming scope, and deciding in advance what you would accept, lets you settle the dispute in one meeting while keeping the relationship where possible.

                ## Milestones
                1. The disputed amount and the client's stated reason written down.
                2. Contract, change requests and scope emails gathered in date order.
                3. Your settlement range decided before the meeting.
                4. An agreed outcome recorded in writing and the invoice amended or confirmed.

                ## Notes
                If the amount is large or the contract is unclear, take advice from a lawyer before the meeting rather than after.
              priority: low
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A dispute settled in writing, with the agreed amount reflected on an amended or confirmed invoice."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Write down the disputed amount and the client's stated reason"
                - "Gather the contract, change requests and scope emails in date order"
                - "Decide the lowest settlement you would accept"
                - "Confirm the agreed outcome by email after the meeting"
            - name: Pricing your first three engagements as a solo consultant
              description: |-
                ## Purpose
                Newly independent consultants tend to underprice the first jobs out of nerves, then find those rates follow them for years through referrals. Pricing the first three engagements deliberately, at or above the floor rate, with fixed scopes and written assumptions, sets the level future clients will hear about.

                ## Milestones
                1. Floor rate and minimum engagement size confirmed before the first quote.
                2. Each of the first three quotes built from an effort estimate, not a guess.
                3. No introductory discount larger than your policy allows.
                4. Effective day rate of each of the three jobs calculated at the end.

                ## Notes
                If you offer a launch discount, show it as a one-off line on the invoice so the full rate stays the reference point.
              priority: medium
              deadlineOffsetDays: 180
              frontmatter:
                mode: building
                output_kind: knowledge
                success_criteria: "Three engagements priced from effort estimates at or above the floor rate, with effective day rates calculated for each."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Confirm your floor rate and minimum engagement fee before quoting"
                - "Build each early quote from the estimating sheet"
                - "Show any launch discount as a separate invoice line"
                - "Calculate the effective day rate when each job closes"
            - name: Pricing a mixed-seniority team for a small firm
              description: |-
                ## Purpose
                A boutique earns its margin from the mix of senior and junior time, and a quote that staffs a partner at analyst hours, or the reverse, either loses money or the job. Building the team plan behind each quote, with the days each role really spends and a blended rate, makes the fee match how the work will be delivered.

                ## Milestones
                1. A team plan for one live quote with days by role and phase.
                2. A blended day rate calculated and compared with the firm's target.
                3. Partner time shown honestly, including reviews and client meetings.
                4. The team mix checked against actual time when the job closes.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A quote with a team plan by role and phase, a blended rate against target, and a close-out comparison with actual time."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Draft days by role and phase for the next team quote"
                - "Calculate the blended day rate and compare it with target"
                - "Add partner review and client meeting time to the plan"
                - "Compare the planned team mix with actual time at close"
            - name: Day rate for a former executive consulting part time
              description: |-
                ## Purpose
                Former executives often consult two or three days a week and price either at their old salary per day, which is too low once overheads and gaps are included, or at a big firm partner rate their buyers will not pay. Pricing around the value of senior judgement, a limited number of days, and perhaps a retainer suits this kind of practice.

                ## Milestones
                1. The number of days a month you want to work set and protected.
                2. A day rate set from income target, overheads and those days.
                3. A retainer or advisory board fee option defined for ongoing roles.
                4. A rate tested in two conversations with likely buyers.
              priority: low
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A written day rate and retainer option based on a set number of working days a month, tested with two buyers."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Decide how many days a month you want to consult"
                - "Set the day rate from income target, overheads and those days"
                - "Define a monthly advisory fee for ongoing roles"
                - "Test the rate in conversations with two likely buyers"
            - name: Pricing for clients in smaller economies
              description: |-
                ## Purpose
                Consultants working across small island states, emerging markets or regional economies face budgets far below those of global corporations, but also fewer competitors and closer relationships. Setting a regional rate band, deciding what scope fits those budgets and keeping a separate rate for internationally funded work stops you either pricing yourself out or working for little.

                ## Milestones
                1. Rates for local private clients, regional clients and internationally funded work set separately.
                2. Typical budgets for each client type gathered from experience and peers.
                3. Scope options that fit smaller budgets defined, such as shorter diagnostics.
                4. The rate bands applied to the next three quotes.

                ## Notes
                Donor-funded and development bank work often publishes fee ceilings by expert category. Check those before quoting into them.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "Separate written rate bands for local, regional and internationally funded clients, applied to three quotes."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Group your clients into local, regional and internationally funded"
                - "Ask two regional peers what budgets they see for each group"
                - "Set a rate band for each client group"
                - "Define a shorter scope option for smaller budgets"
            - name: Margin on associates you bring onto a job
              description: |-
                ## Purpose
                Independent consultants who bring in associates often pass their rate straight through and earn nothing for the selling, management and risk they carry. Setting a standard margin between what you pay an associate and what you charge the client, and checking it on every job, makes growing a network profitable.

                ## Milestones
                1. A standard margin set for associate days, with a minimum.
                2. Associate pay terms aligned with client payment terms where possible.
                3. Margin calculated for every current associate on live work.
                4. Associate cost and client fee checked monthly on live jobs.

                ## Notes
                Agree in writing whether the associate is paid when the client pays or on their own invoice date. It is the most common source of disputes.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A written associate margin rule, with margin calculated monthly for every associate on live work for three months."
                cadence: rolling
              tasks:
                - "Set the standard margin you add to associate day costs"
                - "Agree in writing when associates are paid relative to the client"
                - "Check associate cost against client fee on live jobs @recurring(monthly:15)"
                - "Flag any associate engagement running below the minimum margin"
            - name: Equity or deferred fees from startup clients
              description: |-
                ## Purpose
                Startups often ask to pay in shares, options or a fee deferred until a funding round, and a consultant who says yes without thinking can end up with paper that never pays. Deciding the cash minimum you need, what form of equity you would take, and getting tax and legal advice before signing keeps the arrangement a choice, not a gamble.

                ## Milestones
                1. A cash minimum set that must be paid regardless of any equity.
                2. The forms of deferred or equity payment you would consider listed.
                3. Questions for a lawyer and an accountant on valuation, tax and vesting written down.
                4. A decision recorded on whether to accept the startup's offer.

                ## Notes
                This is not investment advice. Treat any equity as worth nothing in your own budgeting until it is sold.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A written decision on a startup's equity or deferred fee offer, with a cash minimum and professional advice recorded."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Set the cash fee you need regardless of any equity"
                - "List the equity or deferred options the startup has offered"
                - "Write questions on valuation, tax and vesting for your advisers"
                - "Record your decision and the reasons behind it"
            - name: Engagement pricing calculator workbook
              description: |-
                ## Purpose
                Once estimating, rate card, risk and expenses rules exist, they belong in one workbook that turns an activity list into a fee in minutes. A calculator that pulls rates, applies contingency and margin checks and shows the effective day rate for every option makes pricing consistent across everyone who quotes.

                ## Milestones
                1. A workbook with tabs for activities, rate card, risks, expenses and summary.
                2. Floor rate and margin checks that flag a quote below target.
                3. The calculator tested against three past engagements with known outcomes.
                4. A short guide written so a colleague can price a job with it.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A pricing workbook that reproduces three past quotes within ten percent and flags any quote below the floor rate."
                cadence: one-shot
                effort_hours_estimate: "10"
              tasks:
                - "Build tabs for activities, rate card, risks and expenses"
                - "Add a check that flags quotes below the floor rate or margin"
                - "Test the workbook against three past engagements"
                - "Ask the agent to draft a one-page guide to using the calculator"
            - name: Profitability by client and service line
              description: |-
                ## Purpose
                Revenue tells you who your biggest clients are; profit tells you who is worth keeping. Calculating margin by client and by service line, after time, associates, expenses and write-offs, often shows that the busiest client is among the least profitable and that one service subsidises the rest.

                ## Milestones
                1. Revenue, direct cost and time pulled for each client and service line.
                2. Gross margin and effective day rate calculated for each.
                3. The lowest margin clients and services ranked with a cause for each.
                4. A pricing or scope action agreed for the bottom three.
              priority: medium
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A quarterly table of margin and effective day rate by client and service line, with an action agreed for the bottom three."
                cadence: cyclic
              tasks:
                - "Pull revenue, direct costs and time by client and service line"
                - "Calculate margin and effective day rate by client @recurring(quarterly)"
                - "Rank the three least profitable clients and services"
                - "Agree a pricing or scope action for each of the bottom three"
            - name: Testing prices across proposals
              description: |-
                ## Purpose
                Most consultants never learn their real price ceiling because they never test it. Raising the fee on a share of new proposals, or varying the option structure, and tracking win rates against the quote log shows whether the market will bear more, with a sample large enough to trust.

                ## Milestones
                1. A test defined: a fee increase or structure change on a set share of proposals.
                2. Proposals tagged in the quote log as test or standard.
                3. At least ten proposals sent under the test.
                4. Win rate and average fee compared and a decision recorded.

                ## Notes
                Small firms send few proposals, so run the test for six months before concluding, and compare like with like on client type.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "Ten or more test proposals tagged in the quote log, with win rate and average fee compared and a written decision."
                cadence: phased
                effort_hours_estimate: "5"
              tasks:
                - "Choose one price or structure change to test"
                - "Tag test and standard proposals in the quote log"
                - "Send the test version on alternate suitable proposals"
                - "Compare win rate and average fee after ten test proposals"
            - name: Multi-year framework agreement rate schedules
              description: |-
                ## Purpose
                Framework agreements and master services agreements fix rates for two to five years, often with a single indexation clause, and a careless schedule can lock in a loss by year three. Building rates that allow for cost growth, an indexation mechanism and volume tiers protects margin over the whole term.

                ## Milestones
                1. Cost growth over the agreement term estimated for each role.
                2. An indexation clause chosen, linked to a published index or a fixed step.
                3. Volume tiers or call-off minimums priced where the client asks for them.
                4. The rate schedule checked for year-three margin before signing.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A multi-year rate schedule with indexation and a year-three margin check above your minimum, approved before submission."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Estimate cost growth per role over the agreement term"
                - "Draft an indexation clause tied to a published index or fixed step"
                - "Check margin in the final year of the schedule"
                - "Apply indexation to framework rates on each anniversary @recurring(yearly)"
            - name: Deal review before quotes over a threshold
              description: |-
                ## Purpose
                As a boutique grows, more people quote, and one optimistic estimate on a large job can wipe out a quarter's profit. A short deal review for any quote above a set value, where a second partner checks scope, estimate, risks, model and margin before it goes out, catches the costly mistakes.

                ## Milestones
                1. A fee threshold set above which a deal review is required.
                2. A one-page review checklist covering scope, estimate, risks, model and margin.
                3. A standing slot in the week for reviews so quotes are not delayed.
                4. Every quote above the threshold reviewed for a full quarter.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every quote above the threshold for one quarter has a completed review checklist signed by a second partner."
                cadence: rolling
              tasks:
                - "Set the fee level above which a deal review is required"
                - "Write a one-page review checklist for scope, risk and margin"
                - "Hold the deal review slot for quotes in progress @recurring(weekly:tue)"
                - "Record review outcomes beside each quote in the quote log"
---

# Consulting Engagement Pricing

Pricing is where most independent consultants and small firms quietly lose money: a day rate picked from a forum post, a fixed fee guessed from gut feel, and a discount given to win a job that then runs a month over. This area starts with foundations (a floor rate from your income target, the real cost of a delivery day, a team rate card, the models you will offer, effort estimating, minimum sizes, expenses and payment terms), then the operating routines that keep live engagements profitable, the skills of value conversations, options and holding a fee, decisions about fixed fees, success fees, retainers and discounts, dated events such as tender fee schedules and renewals, variants for solo consultants, part-time former executives and small teams, and finally specialist work on profitability analysis, framework agreements and pricing governance.

What repeats is a daily time entry, a Friday burn check on fixed-fee jobs, a Monday look at scope requests, a monthly realisation review and retainer usage check, quarterly win rate and profitability reviews, and a yearly rate card refresh. The Metrics log, Risk register and Meeting notes templates pair with the realisation review, risk pricing and negotiation preparation. Installing adds all 50 projects as active, so archive the ones that are not for you yet.
