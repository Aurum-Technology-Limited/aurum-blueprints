---
id: sales-revenue.deal-negotiation-closing
name: Deal Negotiation & Closing
description: "Walk-away points, give-get concession lists, clause positions agreed with your lawyer and a closing routine that turns verbal yeses into signed contracts without giving away margin."
category: business
version: 1.0.0
tags: [sales-revenue, deal-negotiation-closing, team, founder, small-business, negotiation, contracts, closing]
author: Aurum Technology
starter_structure:
  templates:
    - operational-checklist
    - meeting-notes
    - metrics-log
    - risk-register
  pillars:
    - name: Sales & Revenue
      emoji: "💼"
      description: "Turning interest into revenue: prospecting and pipeline, discovery and demos, proposals and negotiation, forecasting, key accounts, sales process, enablement and compensation."
      pillarFrontmatter:
        review_cadence: monthly
      areas:
        - name: Deal Negotiation & Closing
          description: "Preparing walk-away points, trading concessions, handling last-minute pushback and getting contracts signed on terms that protect margin and the relationship."
          projects:
            - name: Walk-away, target and opening price for each deal
              description: |-
                ## Purpose
                Most sellers walk into a pricing conversation knowing the list price and nothing else, so the buyer's first discount request sets the outcome. Writing three numbers before every negotiation, the opening offer, the realistic target and the walk-away point below which you decline, keeps you anchored when the buyer pushes. The walk-away should come from margin and alternatives, not from how badly you want this customer.

                ## Milestones
                1. A one-page worksheet with opening, target and walk-away price fields for any deal.
                2. The three numbers filled in for every deal currently at proposal or negotiation stage.
                3. The reasoning behind each walk-away point written in one line.
                4. A rule agreed that the walk-away cannot be lowered mid-call without a pause to think.

                ## Notes
                Set the walk-away before you meet the buyer. Lowering it in the room, under pressure, is the most common way margin disappears.
              priority: high
              deadlineOffsetDays: 14
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Every late-stage deal has an opening, target and walk-away price recorded with a one-line reason before its next pricing conversation."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "List every deal currently at proposal or negotiation stage"
                - "Write opening, target and walk-away numbers for the largest one"
                - "Note in one line why the walk-away sits where it does"
                - "Add the three price fields to your deal record in the CRM"
            - name: Your best alternative if a deal falls through
              description: |-
                ## Purpose
                Your bargaining strength depends less on the buyer and more on what you will do if they say no: other pipeline, a different customer, or simply keeping capacity free. Negotiators call this the BATNA, the best alternative to a negotiated agreement. Writing yours down for each big deal, and estimating the buyer's, shows who actually needs the deal more and how firm you can afford to be.

                ## Milestones
                1. Your realistic alternative written for each of the three largest open deals.
                2. The buyer's likely alternative estimated, including doing nothing or staying with the incumbent supplier.
                3. A judgement recorded on which side loses more if talks fail.
                4. Actions listed that would strengthen your alternative, such as advancing a second deal.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A written alternative for you and an estimated alternative for the buyer exist for the three largest open deals, each with one action to strengthen yours."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Write what you will do if your largest open deal is lost"
                - "Estimate what the buyer does if they do not sign with you"
                - "Move one other deal forward so you are not relying on a single close"
                - "Re-check your alternatives for every deal in negotiation @recurring(monthly:2)"
            - name: Tradeable terms inventory
              description: |-
                ## Purpose
                Price is only one of a dozen things a deal can move on, yet untrained negotiators treat it as the only lever and give it away first. Listing every term that can vary in your deals, from contract length and payment timing to start date, support level and case study rights, and scoring each for what it costs you and what it is worth to the buyer, shows where the cheap, valuable trades are.

                ## Milestones
                1. A list of at least ten terms that can vary in your deals.
                2. Each term scored for its cost to you and its likely value to buyers.
                3. The cheap-to-give, valuable-to-them terms marked as your first trades.
                4. Terms you never trade marked clearly, with the reason.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A tradeable terms list of at least ten items exists, each scored for cost and value, with fixed terms clearly marked."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "List every term that changed in a deal you signed this year"
                - "Score each term for cost to you and value to the buyer"
                - "Mark three terms you are happy to trade first"
                - "Mark the terms that are never on the table and say why"
            - name: Give-get concession list for price pushback
              description: |-
                ## Purpose
                Concessions given freely teach the buyer that pushing works, so the next request comes faster. A give-get list pairs every concession you can make with what you ask in return: a discount for a longer term, faster payment for a lower setup fee, a case study for extra onboarding. With it written down, nobody on the team gives something for nothing on a live call.

                ## Milestones
                1. Ten or more give-get pairs written, each naming the concession and the matching ask.
                2. Pairs sorted from smallest to largest concession.
                3. The list shared with everyone who negotiates price.
                4. One recent deal reviewed to see which gets were missed.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A give-get list of at least ten paired concessions is shared with everyone who negotiates and used on the next priced deal."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Write the five concessions buyers ask you for most often"
                - "Pair each concession with something of equal value to ask back"
                - "Sort the pairs from smallest to largest"
                - "Share the list with everyone who negotiates price"
            - name: Margin floor for discount requests
              description: |-
                ## Purpose
                A ten percent discount on an offer with a thirty percent gross margin wipes out a third of the profit on that deal, which most sellers never work out in the moment. Calculating the margin floor per offer, the lowest price that still covers delivery cost and your minimum profit, turns a discount request into simple arithmetic. Founders and small teams need this most, because the person negotiating is often the person paying for delivery.

                ## Milestones
                1. Delivery cost per unit or per project worked out for each main offer.
                2. A minimum acceptable margin agreed with whoever owns the numbers.
                3. A floor price per offer calculated and written down.
                4. A quick table showing what 5, 10, 15 and 20 percent off does to margin.

                ## Notes
                Include the hidden costs: onboarding time, extra support for small accounts and payment processing fees often turn a thin deal into a loss.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: research
                output_kind: artifact
                success_criteria: "A floor price and a discount-to-margin table exist for each main offer and are referenced in the next three priced deals."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "List the delivery cost of your three best-selling offers"
                - "Agree a minimum margin with whoever owns the profit and loss"
                - "Calculate the floor price for each offer"
                - "Build a table of what each discount step does to margin"
                - "Update the floors when supplier or delivery costs change @recurring(quarterly)"
            - name: Preferred, fallback and walk-away clause positions
              description: |-
                ## Purpose
                Late-stage deals stall when the buyer's lawyer redlines the liability cap or payment terms and nobody on your side knows what is acceptable. A short positions sheet, agreed with your lawyer, lists your preferred wording, the fallback you can accept, and the point at which counsel must be involved, for the clauses that come up in nearly every deal. Sellers can then answer routine redlines in a day instead of a fortnight.

                ## Milestones
                1. The eight to ten clauses most often redlined in your deals listed.
                2. Preferred, fallback and walk-away positions written for each, agreed with your lawyer.
                3. A rule stating which changes need legal or leadership sign-off.
                4. The sheet stored where sellers can find it during a live deal.

                ## Notes
                This sheet records positions your lawyer has approved; it is not legal advice and does not replace review of unusual terms. Typical entries are liability caps, payment terms, auto-renewal, termination and data protection.
              priority: high
              deadlineOffsetDays: 60
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A positions sheet covering at least eight common clauses, approved by your lawyer, is stored next to the contract template."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "List the clauses buyers' lawyers ask to change most often"
                - "Book an hour with your lawyer to agree positions for each clause"
                - "Write the escalation rule for changes outside the fallback"
                - "Store the positions sheet next to your contract template"
                - "Review the clause positions with counsel @recurring(yearly)"
            - name: Signing authority and e-signature set-up
              description: |-
                ## Purpose
                Deals slip at the very last step when the buyer is ready but nobody knows who on your side may sign, or the contract goes out as a document to print, sign and scan. Deciding who can sign which contract values, and setting up an e-signature tool with your standard templates, removes days of friction from the end of every deal.

                ## Milestones
                1. A written list of who may sign contracts up to which value.
                2. An e-signature account set up with your standard contract templates loaded.
                3. A test envelope sent, signed and filed end to end.
                4. Signed contracts saving automatically to one agreed folder.
              priority: medium
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A signing authority list exists and a test contract has been signed and filed through the e-signature tool."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Write who may sign contracts and up to what value"
                - "Choose an e-signature tool your buyers already accept"
                - "Load your standard contract template with signature fields"
                - "Send a test envelope to a colleague and file the result"
                - "Check the signatory list after any role change @recurring(quarterly)"
            - name: One-page negotiation prep sheet
              description: |-
                ## Purpose
                Most negotiations are lost in the preparation, not the meeting: the seller has not worked out what the buyer cares about, what they will ask for or what to trade. A one-page prep sheet completed before every pricing or terms call, covering interests, likely asks, your three numbers, tradeable terms and the question you will open with, takes twenty minutes and changes how the call goes.

                ## Milestones
                1. A reusable one-page prep sheet with fixed headings.
                2. The sheet completed before the next three negotiation calls.
                3. Each sheet updated after the call with what was actually asked and agreed.
                4. The headings adjusted after three uses to match how your buyers negotiate.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Prep sheets exist for three consecutive negotiation calls, each updated afterwards with what was asked and agreed."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Draft prep sheet headings for interests, likely asks, numbers, trades and opening question"
                - "Complete a sheet before your next pricing call"
                - "Add what the buyer actually asked for after the call"
                - "Adjust the headings after three uses"
            - name: Closing checklist from verbal yes to countersigned contract
              description: |-
                ## Purpose
                Between a buyer saying yes and the contract coming back signed, deals die from small things: the wrong legal entity on the order form, a missing purchase order number, a signer on holiday. A closing checklist run on every deal from the moment of the verbal yes catches these while there is still time, and makes the close predictable enough to forecast.

                ## Milestones
                1. A checklist covering legal entity, signer, purchase order, start date, billing contact and countersignature.
                2. An owner named for every item on the list.
                3. The checklist run on the next three deals that reach verbal agreement.
                4. Gaps found in those deals added to the list.

                ## Notes
                Start from the **Operational checklist** template.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A closing checklist with owners is in use and has been completed on three deals from verbal yes to countersignature."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "List what went wrong on the last two deals that slipped after a verbal yes"
                - "Write the closing checklist with an owner for each item"
                - "Run the checklist on the next deal that reaches verbal agreement"
                - "Compare the checklist against the latest slipped deal @recurring(quarterly)"
            - name: Weekly late-stage negotiation huddle
              description: |-
                ## Purpose
                Deals in negotiation change daily, and a seller alone with a demanding buyer tends to concede more than the team would. A twenty-minute weekly huddle covering only deals where price or terms are being argued, with the open asks, the proposed reply and the walk-away, gives every seller a second opinion before they respond. It is not a pipeline review: earlier-stage deals stay out.

                ## Milestones
                1. A fixed weekly slot with a standing agenda for late-stage deals only.
                2. Each deal presented as the buyer's latest ask, the proposed response and the walk-away.
                3. Decisions and agreed trades recorded in the deal record the same day.
                4. Four consecutive huddles held.

                ## Notes
                Start from the **Meeting notes** template. Keep the list to deals where price or terms are actively being negotiated.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Four consecutive weekly huddles held, each with decisions recorded against every deal in negotiation."
                cadence: rolling
              tasks:
                - "Book a twenty-minute weekly slot with everyone who negotiates"
                - "Write the three-question agenda of latest ask, proposed reply and walk-away"
                - "Run the late-stage negotiation huddle @recurring(weekly:tue)"
                - "Record agreed trades in each deal record after the huddle"
            - name: Concession log across every deal
              description: |-
                ## Purpose
                Without a record, nobody notices that the last six deals all got free onboarding or that one buyer has had three extensions to their payment terms. Logging every concession given, what was received in return and who approved it shows patterns within a quarter: which concessions are habitual, which sellers give most, and which buyers come back for more.

                ## Milestones
                1. A concession log with columns for deal, concession, value, what was received and approver.
                2. Every concession from the current quarter entered.
                3. A monthly look at the log with the top three patterns written down.
                4. One habitual giveaway removed or turned into a priced option.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A concession log covers every deal closed this quarter and three monthly pattern notes have been written."
                cadence: rolling
              tasks:
                - "Create a log with columns for deal, concession, value, return and approver"
                - "Enter every concession given so far this quarter"
                - "Review the concession log and note three patterns @recurring(monthly:9)"
                - "Turn the most common free giveaway into a priced option"
            - name: Quarter-end closing plan without panic discounting
              description: |-
                ## Purpose
                Buyers know sellers have targets, and a team that discounts hard in the last week of every quarter trains its customers to wait. Planning the quarter-end close six weeks out, with each target deal's remaining steps, signer availability and a fixed rule on which end-of-quarter incentives may be offered, lands deals on time without giving away margin you did not need to.

                ## Milestones
                1. Deals expected to close this quarter listed with remaining steps and signer dates six weeks out.
                2. A written rule for any end-of-period incentive: what, for whom, and when it expires.
                3. Signer availability confirmed for every deal in the plan.
                4. Discount depth on quarter-end deals compared with mid-quarter deals afterwards.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A quarter-end plan existed six weeks before the quarter closed, and discount depth on quarter-end deals was compared with mid-quarter deals."
                cadence: cyclic
              tasks:
                - "List every deal you expect to sign before quarter end"
                - "Confirm signer availability and holidays for each one"
                - "Write the rule for which end-of-quarter incentives may be offered"
                - "Start the quarter-end closing plan six weeks before quarter end @recurring(quarterly)"
            - name: Contract redline tracker
              description: |-
                ## Purpose
                Once a contract goes to the buyer's lawyers, weeks can pass with versions in three inboxes and nobody sure which clause is still open. A tracker listing every open clause, the latest position on each side, who owns the next move and the date it was sent keeps redlines moving and stops agreed points being reopened.

                ## Milestones
                1. A tracker per contract listing open clauses, both positions, owner and date sent.
                2. One master version of each contract stored and named by date.
                3. A weekly check that no clause has waited more than five working days.
                4. Agreed clauses marked as closed and not reopened without a stated reason.

                ## Notes
                Track positions, not legal conclusions. Anything outside your agreed fallback goes to your lawyer.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every contract in legal review has a tracker, and no open clause has waited more than five working days without a chase."
                cadence: rolling
              tasks:
                - "List every contract currently with the buyer's lawyers"
                - "Record each open clause with both positions and the next owner"
                - "Name and store one master version per contract"
                - "Chase any clause waiting more than five working days @recurring(weekly:thu)"
            - name: Closed-won handover within 48 hours
              description: |-
                ## Purpose
                What was promised in negotiation, a start date, a training session, a discount that ends after year one, often lives only in the seller's head. A handover note written within two days of signature, listing every commitment and concession, protects the relationship and stops the delivery team discovering promises from an annoyed customer.

                ## Milestones
                1. A handover note format listing commitments, concessions, key contacts and renewal terms.
                2. A note completed within 48 hours for every signed deal.
                3. The note sent to delivery and finance and acknowledged.
                4. A monthly check that every signed deal has a note.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every deal signed in the last month has a handover note acknowledged by delivery and finance within 48 hours of signature."
                cadence: rolling
              tasks:
                - "Write the handover note headings with delivery and finance"
                - "Ask the agent to draft a handover note from the latest signed deal's notes"
                - "Send each note to delivery and finance for acknowledgement"
                - "Check every deal signed last month has a handover note @recurring(monthly:21)"
            - name: Restarting deals that go quiet after pricing
              description: |-
                ## Purpose
                A buyer who goes silent after receiving pricing is usually stuck on something they have not said: an internal objection, a competitor's quote, a budget question. A weekly pass over late-stage deals with no reply in ten working days, using a short message that names the likely issue or offers a graceful exit, either restarts the conversation or clears the deal from the forecast.

                ## Milestones
                1. A rule defining a quiet deal: pricing sent and no buyer reply for ten working days.
                2. Two or three short re-engagement messages written, including a polite close-the-file note.
                3. A weekly pass over quiet deals with one action per deal.
                4. Each quiet deal either re-engaged or marked lost within a month.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every late-stage deal silent for ten working days has had a re-engagement message, and none stays quiet beyond a month without a decision."
                cadence: rolling
              tasks:
                - "Write the rule for when a late-stage deal counts as quiet"
                - "Draft a short close-the-file message that invites a reply"
                - "Send one message to each quiet late-stage deal @recurring(weekly:mon)"
                - "Mark deals lost when the close-the-file note gets no reply"
            - name: Monthly review of list price versus signed price
              description: |-
                ## Purpose
                Price realisation, the share of list price you actually collect, is the clearest single measure of how well a team negotiates. Comparing list and signed price for every deal each month, split by offer, deal size and seller, shows where discounts are earned and where they have quietly become a habit.

                ## Milestones
                1. Every deal signed this year listed with list price, signed price and discount percentage.
                2. Average realisation calculated by offer, deal size and seller.
                3. A monthly figure tracked in a log with a short note on movement.
                4. One action agreed whenever realisation drops two months running.

                ## Notes
                Start from the **Metrics log** template.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A metrics log shows monthly price realisation for at least three months, split by offer and seller."
                cadence: rolling
              tasks:
                - "Export signed deals with list and signed prices from your CRM"
                - "Calculate the discount percentage for each deal"
                - "Log the month's price realisation by offer and seller @recurring(monthly:4)"
                - "Raise one action when realisation falls two months running"
            - name: Monthly negotiation sparring sessions
              description: |-
                ## Purpose
                Negotiation is a skill that fades between big deals, and the first time a seller hears a procurement lead flatly reject a price should not be on a live call. A monthly forty-five-minute sparring session, where a colleague plays a tough buyer using a real upcoming deal, builds the habit of pausing, trading rather than conceding, and holding the walk-away.

                ## Milestones
                1. Five realistic buyer scenarios written from real deals.
                2. A monthly session booked with rotating buyer and seller roles.
                3. Each session ending with one thing each seller will do differently.
                4. Six sessions held.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Six monthly sparring sessions held, each using a real upcoming deal and ending with one written change per seller."
                cadence: rolling
              tasks:
                - "Write five buyer scenarios based on real recent deals"
                - "Book a monthly forty-five-minute sparring slot"
                - "Run a sparring session on a deal closing this month @recurring(monthly:16)"
                - "Note one change each seller will try on their next call"
            - name: Renewal negotiation calendar
              description: |-
                ## Purpose
                Renewals negotiated in the last fortnight before expiry hand the bargaining power to the customer, who knows you cannot afford to lose them. A calendar that flags each contract 120 days before renewal gives time to agree price changes, term length and any new scope while both sides still have options.

                ## Milestones
                1. Every active contract listed with renewal date, notice period and current price.
                2. Each renewal flagged 120 days ahead with an owner.
                3. A renewal position written for each contract 90 days out: price, term and any trades.
                4. No renewal reaching its notice date without a proposal sent.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every contract renewing in the next six months has an owner and a written renewal position at least 90 days before expiry."
                cadence: rolling
              tasks:
                - "List every active contract with renewal date and notice period"
                - "Assign an owner to each renewal due in the next six months"
                - "Flag contracts reaching 120 days before renewal @recurring(monthly:12)"
                - "Write a renewal position for each contract 90 days out"
            - name: Anchoring with the first credible number
              description: |-
                ## Purpose
                The first credible number put on the table pulls the final price towards it, which is why experienced buyers try to make sellers name a discount first. Learning when to anchor, how to justify an ambitious opening with the buyer's own numbers, and how to respond when the buyer anchors low gives you a better starting point in every pricing conversation.

                ## Milestones
                1. The research on anchoring summarised in five sentences you could explain to a colleague.
                2. Three opening price statements written for your own offers, each tied to a buyer outcome.
                3. A practised response for when a buyer opens with an unrealistic number.
                4. Anchoring used deliberately on two live deals and the results noted.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Anchoring has been used deliberately on two live deals, with opening and final price recorded for each."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Read one chapter or article on anchoring in negotiation"
                - "Write an opening price statement linked to a buyer's stated outcome"
                - "Practise a reply to a buyer who opens far too low"
                - "Compare final price with your anchor on two deals"
            - name: Trading concessions with if-then language
              description: |-
                ## Purpose
                Saying you could probably do something on price invites the buyer to name the number. Rewording every concession as a condition, if you sign a two-year term then we can hold this year's price, keeps each move tied to something you receive and slows the pace of giving. It is the single habit that most separates trained negotiators from untrained ones.

                ## Milestones
                1. Ten if-then sentences written for your most common concessions.
                2. The phrases practised aloud until they sound natural.
                3. Every concession on the next three deals made as an if-then offer.
                4. A note on which conditions buyers accepted and which they refused.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Every concession in three consecutive deals was offered as an if-then condition, with the buyer's response recorded."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Write ten if-then sentences from your give-get list"
                - "Practise the sentences aloud with a colleague"
                - "Use only if-then offers in your next pricing call"
                - "Record which conditions the buyer accepted"
            - name: Holding your price under direct pushback
              description: |-
                ## Purpose
                When a buyer says the price is too high, the instinct is to offer a discount in the same breath. Holding price well means asking what they are comparing against, restating the value in their own terms, and offering to change scope rather than rate. Practising this sequence until it is automatic protects margin on the many deals where the pushback is a test, not a deal-breaker.

                ## Milestones
                1. A four-step sequence written: pause, ask, restate value, offer a scope change.
                2. Three questions ready for finding out what the buyer is comparing against.
                3. Scope-down options prepared for each main offer.
                4. The sequence used on two live deals without an unplanned discount.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "The hold-price sequence has been used on two live deals and neither ended with an unplanned discount."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Write the questions you will ask when a buyer calls the price too high"
                - "Prepare a smaller scope option for each main offer"
                - "Role-play the sequence with a colleague playing a tough buyer"
                - "Use the sequence on the next price challenge and note the outcome"
            - name: Recognising common buyer negotiation tactics
              description: |-
                ## Purpose
                Professional buyers use a small set of well-known tactics: the flinch at your price, the higher authority who must approve, the nibble for one more thing after agreement, the competitor quote you never see, and the deadline that suddenly appears. Knowing them by name lets you respond calmly instead of reacting, and most lose their force once they are recognised.

                ## Milestones
                1. Eight common tactics listed with a one-line description of each.
                2. A calm response written for each tactic.
                3. Tactics from your own recent deals identified and tagged.
                4. Responses shared with the rest of the team.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A list of at least eight buyer tactics with a written response for each is shared with the team."
                cadence: phased
                effort_hours_estimate: "5"
              tasks:
                - "List the buyer tactics you have met in the last three months"
                - "Write a calm response to the nibble after agreement"
                - "Write a response to the higher authority who must approve"
                - "Share the tactic list and responses with the team"
            - name: Asking for the close and using silence
              description: |-
                ## Purpose
                Many deals drift for weeks simply because nobody asked the buyer directly whether they are ready to sign. Learning a handful of plain closing questions, when to ask them, and how to stay silent afterwards so the buyer answers rather than the seller filling the gap, shortens deals that are already won.

                ## Milestones
                1. Five closing questions written in your own words.
                2. A rule for when to ask: after the buyer confirms the problem, price and timing.
                3. Silence after the question practised until it is comfortable.
                4. A closing question asked on every deal at verbal-agreement stage for a month.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A direct closing question has been asked on every deal at verbal-agreement stage for a month, with buyer responses noted."
                cadence: phased
                effort_hours_estimate: "3"
              tasks:
                - "Write five closing questions in plain words you would actually say"
                - "Practise asking one and staying silent for ten seconds"
                - "Ask a direct closing question on your most advanced deal"
                - "Note what the buyer said and how long the silence lasted"
            - name: Contract terms every seller should understand
              description: |-
                ## Purpose
                Sellers who do not understand the contract either concede clauses that matter or escalate trivial ones to legal and lose a week. Learning in plain language what liability caps, indemnities, payment terms, auto-renewal, termination for convenience and service credits mean for your business lets you have a sensible first conversation before handing over to your lawyer.

                ## Milestones
                1. A plain-language glossary of the ten clauses in your standard contract.
                2. The commercial effect of each clause on your business noted.
                3. Each glossary entry checked by your lawyer for accuracy.
                4. The glossary used to answer the next routine contract question from a buyer.

                ## Notes
                This is about understanding, not interpreting. Your lawyer decides what a clause means in a specific contract.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A plain-language glossary of ten contract clauses, checked by your lawyer, has been used on the next routine contract question."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "List the ten clauses in your standard contract"
                - "Write a plain-language line on what each clause means for the business"
                - "Ask your lawyer to check the glossary for accuracy"
                - "Use the glossary on the next contract question from a buyer"
            - name: Negotiating with professional procurement teams
              description: |-
                ## Purpose
                Procurement professionals are measured on savings against your first price, so they will ask for a discount however good the deal already is. Learning how they work, with scorecards, competitive tension, best-and-final requests and approval thresholds, helps you build room into the first proposal and give procurement a visible win without losing margin.

                ## Milestones
                1. Notes on how procurement teams are measured and what a savings target means for you.
                2. A planned procurement concession built into pricing in advance.
                3. A response prepared for being asked to match a competitor's lower quote.
                4. The approach used on one deal involving procurement, with the outcome noted.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A planned procurement concession and a competitor-match response exist and were used on one deal, with the result recorded."
                cadence: phased
                effort_hours_estimate: "5"
              tasks:
                - "Ask a friendly buyer contact how their procurement team measures savings"
                - "Decide a planned concession you can give procurement as a visible win"
                - "Prepare an answer for when procurement asks you to match a cheaper quote"
                - "Note the outcome on the next deal that involves procurement"
            - name: Three packaged offers presented at once
              description: |-
                ## Purpose
                Offering a single proposal invites the buyer to negotiate it line by line. Presenting two or three complete packages at the same time, each balancing price, term and scope differently, shows what the buyer values most and moves the conversation from how much off to which one. Negotiation researchers call these multiple equivalent simultaneous offers.

                ## Milestones
                1. Three packages built for one live deal, each equally acceptable to you.
                2. Each package varying at least two terms, not only price.
                3. The packages presented together and the buyer's choice recorded.
                4. The format turned into a reusable layout for future deals.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Three equivalent packages were presented together on one live deal and the buyer's choice and reasons recorded."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Pick one live deal where the buyer is pushing on price"
                - "Build three packages that vary price, term and scope"
                - "Check that you would be equally happy with any of the three"
                - "Present all three together and record which the buyer picks"
            - name: Simplifying your contract template to cut redlines
              description: |-
                ## Purpose
                If buyers' lawyers strike the same clauses in most of your contracts, the template itself is adding weeks to every close. Reviewing which clauses are changed most often and agreeing with your lawyer which can be softened, shortened or removed by default can cut the time from verbal yes to signature without taking on risk you have not chosen.

                ## Milestones
                1. Redlines from the last ten contracts tallied by clause.
                2. The three most-changed clauses reviewed with your lawyer.
                3. A revised template issued with any agreed changes.
                4. Average days in legal review compared before and after the change.

                ## Notes
                Your lawyer decides what is safe to change. The aim is to stop fighting over clauses you would concede anyway.
              priority: medium
              deadlineOffsetDays: 90
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A revised contract template is in use and average days in legal review have been compared before and after the change."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Tally which clauses were changed in your last ten contracts"
                - "Book a review of the three most-changed clauses with your lawyer"
                - "Issue the revised template to everyone who sends contracts"
                - "Compare days in legal review before and after the change"
            - name: Deposit and payment terms policy
              description: |-
                ## Purpose
                Small businesses and founders often accept the buyer's payment terms without question, then wait 60 or 90 days for cash on work already delivered. Deciding your default terms, when you require a deposit, and what you will accept in exchange for longer terms gives you a position to negotiate from rather than a gap to fill.

                ## Milestones
                1. Your default payment terms and deposit rule written down.
                2. The cash effect of 30, 60 and 90 day terms on a typical deal calculated.
                3. A trade agreed for longer terms, such as a higher price or a longer contract.
                4. The policy added to proposals and the contract template.

                ## Notes
                Check the cash effect with whoever runs your finances. Large customers sometimes have fixed supplier terms, which makes the trade more important, not less.
              priority: medium
              deadlineOffsetDays: 45
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A written payment terms and deposit policy, with a stated trade for longer terms, appears in the proposal and contract templates."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Write down the payment terms your last ten deals were signed on"
                - "Work out the cash effect of 30, 60 and 90 day terms on a typical deal"
                - "Decide when a deposit is required and how much"
                - "Add the default terms to your proposal and contract templates"
            - name: Multi-year deal structures and annual uplifts
              description: |-
                ## Purpose
                Buyers often offer a longer contract in exchange for a bigger discount, and without a structure in mind sellers accept a deep cut locked in for three years. Deciding in advance how you price two and three year terms, with ramped pricing, annual uplifts or a price lock in exchange for upfront payment, means you can say yes to commitment without giving away future revenue.

                ## Milestones
                1. Two or three multi-year structures written, with ramp, uplift or prepayment options.
                2. Total contract value of each compared with a series of one-year renewals.
                3. An annual uplift clause agreed with your lawyer for the template.
                4. One structure offered on the next deal where the buyer asks about a longer term.
              priority: medium
              deadlineOffsetDays: 60
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "Written multi-year structures with total contract value comparisons exist and one has been offered on a live deal."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Model total contract value for one, two and three year terms"
                - "Draft a ramped pricing option for a buyer growing into the product"
                - "Agree an annual uplift clause wording with your lawyer"
                - "Offer a structured multi-year option on the next suitable deal"
            - name: Paid pilots that convert into full contracts
              description: |-
                ## Purpose
                Free trials and open-ended pilots let buyers delay decisions indefinitely. Setting pilot terms before the pilot starts, with a fee, a fixed length, agreed success measures and the price of the full contract written in, turns the end of the pilot into a signing date rather than a fresh negotiation.

                ## Milestones
                1. A pilot terms sheet with fee, length, success measures and conversion price.
                2. Success measures agreed in writing with the buyer before the pilot begins.
                3. A conversion meeting booked for the pilot's last week on day one.
                4. The conversion outcome tracked across the next three pilots.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "The next three pilots each started with signed terms and agreed success measures, and their conversion outcomes are recorded."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Write a one-page pilot terms sheet with fee, length and conversion price"
                - "Agree success measures with the buyer before any pilot starts"
                - "Book the conversion meeting for the pilot's final week"
                - "Record whether each of the next three pilots converted"
            - name: Walking away from a bad deal cleanly
              description: |-
                ## Purpose
                Saying no to a deal below your floor is hard when the pipeline is thin, but signing it costs more than the revenue suggests: a reference price for the next negotiation, a demanding customer and a team stretched for little return. Deciding in advance the signs that a deal should be declined, and writing a respectful exit message that leaves the door open, makes it a business decision instead of a crisis.

                ## Milestones
                1. Five signals written that a deal should be declined, such as price below floor or unlimited scope.
                2. A short, respectful walk-away message that restates your best offer.
                3. One current deal checked against the signals.
                4. Any declined buyer contacted again three months later.
              priority: medium
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "Written walk-away signals and an exit message exist, and at least one late-stage deal has been checked against them."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Write five signs that a deal is not worth signing"
                - "Draft a polite message that declines and restates your best offer"
                - "Check your weakest late-stage deal against the five signs"
                - "Set a reminder to contact any declined buyer three months later"
            - name: Shortening the gap from verbal yes to signature
              description: |-
                ## Purpose
                Teams that track the days between a buyer agreeing and the signed contract usually find the lag is longer than they thought, and most of it is waiting: for a signer, a purchase order or a redline reply. Measuring that lag for each deal and fixing the two biggest causes brings revenue forward without any extra selling.

                ## Milestones
                1. Verbal-yes and signature dates recorded for the last ten closed deals.
                2. The average lag and the longest delays identified.
                3. The two biggest causes named with a fix for each.
                4. The average lag re-measured after three months.
              priority: medium
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "Average days from verbal yes to signature are measured for ten deals and re-measured after three months with two fixes in place."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Find the verbal agreement and signature dates for the last ten deals"
                - "Work out the average gap and the three slowest deals"
                - "Agree a fix for the two biggest causes of delay"
                - "Record the verbal-yes to signature gap for deals signed this month @recurring(monthly:25)"
            - name: Passing a price increase through to existing customers
              description: |-
                ## Purpose
                Raising prices on existing customers is one of the hardest negotiations a small business faces, and many simply never do it, so costs rise and margins shrink each year. Planning the increase per customer, with the reason, the notice you owe under the contract and a trade for customers who push back, makes it a conversation rather than a shock.

                ## Milestones
                1. Contracts checked for price change clauses and notice periods.
                2. An increase decided per customer or segment with the reason written.
                3. Notices sent within the contractual notice period.
                4. Pushback handled with a pre-agreed trade, such as a longer term at the old rate.
              priority: medium
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "Every affected customer received a price increase notice within their contractual notice period, with pushback handled by a pre-agreed trade."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Check each contract for price change rights and notice periods"
                - "Decide the increase for each customer segment and the reason"
                - "Ask the agent to draft a clear price increase notice from your reasons"
                - "Hold the yearly price review before renewal notices go out @recurring(yearly)"
            - name: Closing your largest deal of the year
              description: |-
                ## Purpose
                The biggest deal of the year deserves its own plan: more people involved, more scrutiny on terms and more at stake if it slips into next quarter. Treating the final eight weeks as a project, with dated internal steps, a negotiation strategy agreed with leadership and named reviewers for each workstream, gives it the attention it needs without derailing everything else.

                ## Milestones
                1. A dated internal plan for the final eight weeks with an owner per workstream.
                2. Opening, target and walk-away positions agreed with leadership in writing.
                3. Legal, finance and delivery reviewers booked in advance for contract turnaround.
                4. The contract signed, or a written decision to walk away recorded.
              priority: high
              deadlineOffsetDays: 90
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "The largest deal of the year was signed within the agreed walk-away terms, or a recorded decision to walk away was made."
                cadence: one-shot
                effort_hours_estimate: "20"
              tasks:
                - "Name your largest deal expected to close in the next three months"
                - "Agree positions and authority limits with leadership in writing"
                - "Book legal and finance reviewers for the expected contract weeks"
                - "Hold a short weekly internal check on the deal until it signs"
            - name: Run sheet for the final negotiation meeting
              description: |-
                ## Purpose
                When the last sticking points are settled in one meeting, the side with a plan usually gets the better outcome. A run sheet that sets the agenda, who speaks on price and who on terms, the order in which you raise issues, what you will trade and when you will call a break makes that meeting calm instead of improvised.

                ## Milestones
                1. An agenda sent to the buyer in advance listing the open issues.
                2. Speaking roles and concession authority agreed on your side.
                3. The order of issues and planned trades written down.
                4. A written summary of what was agreed sent within 24 hours.

                ## Notes
                Start from the **Meeting notes** template for the summary. Agree beforehand that nobody concedes anything off the trade list without calling a break first.
              priority: medium
              deadlineOffsetDays: 30
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A final negotiation meeting was held to a written run sheet and a summary of agreed points reached the buyer within 24 hours."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "List every open issue for your next final-stage meeting"
                - "Send the buyer an agenda with the open issues"
                - "Decide the order you will raise each open issue in"
                - "Send a written summary of agreed points within 24 hours"
            - name: Responding to a best and final offer deadline
              description: |-
                ## Purpose
                A request for a best and final offer, often shortened to BAFO, arrives with a short deadline and the clear hint that this is the last chance. Handling it well means deciding quickly whether to move at all, making any movement conditional, and presenting the final position with its reasoning so the buyer can defend it internally.

                ## Milestones
                1. The request read for what has actually been asked and by when.
                2. A decision recorded on whether to hold, improve price or improve terms.
                3. Any improvement tied to a condition such as signature by a fixed date.
                4. The final offer submitted before the deadline with a short rationale.
              priority: medium
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "The best and final offer was submitted before the deadline, with any improvement tied to a stated condition."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Read the request and note the exact deadline and what is being asked"
                - "Decide whether to hold, move on price or move on terms"
                - "Tie any improvement to signature by a fixed date"
                - "Submit the final offer with a short rationale before the deadline"
            - name: In-person negotiation visit to the buyer
              description: |-
                ## Purpose
                Some deals close faster face to face, especially with founders, family businesses and buyers who distrust an agreement done entirely by email. Planning a visit around one clear purpose, reaching agreement on the remaining terms, with the right people in the room and the contract ready to sign, gives the trip a real chance of ending with a signature.

                ## Milestones
                1. A clear purpose for the visit agreed with the buyer in advance.
                2. The buyer's decision-maker confirmed as attending.
                3. A contract prepared with only the open points left to complete.
                4. The outcome and any agreed changes written up the same day.
              priority: low
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "The visit took place with the decision-maker present and a same-day write-up records the outcome and any agreed changes."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Agree with the buyer what the visit should settle"
                - "Confirm the person who can sign will be in the room"
                - "Bring a contract that is ready except for the open points"
                - "Write up the outcome and agreed changes the same day"
            - name: Won deal negotiation debrief
              description: |-
                ## Purpose
                Teams study lost deals but rarely look at how a won deal was negotiated, so the same concessions are made again next time. A thirty-minute debrief within a week of signature, covering what the buyer pushed on, what was given, what you got back and what you would do differently, turns each big win into a lesson for the next one.

                ## Milestones
                1. A deal value set above which a debrief is always held.
                2. Asks, concessions and returns written down for the most recent large deal.
                3. One thing to repeat and one to change recorded.
                4. Lessons added to the team's negotiation notes.
              priority: low
              frontmatter:
                mode: event
                output_kind: knowledge
                success_criteria: "A debrief note with asks, concessions, returns and two lessons exists for the most recent large win."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Set the deal value above which a negotiation debrief is held"
                - "Book a thirty-minute debrief for your most recent big win"
                - "Write down what was asked, given and received"
                - "Record one thing to repeat and one to change"
            - name: Early-customer discount terms for founders
              description: |-
                ## Purpose
                Early customers set the price, terms and expectations every later customer will hear about, and founders often give too much because each logo feels essential. Negotiating the first five with a clear early-customer offer, a defined discount in exchange for feedback, a case study and a reference, keeps the price list intact for customer six onwards.

                ## Milestones
                1. A written early-customer offer: what they get and what they give in return.
                2. A list price set even if early customers pay less, so discounts are visible.
                3. Five contracts signed with the early-customer terms recorded.
                4. Price and terms reviewed before quoting customer six.
              priority: medium
              deadlineOffsetDays: 120
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "Five early contracts are signed on a written early-customer offer, and price is reviewed before customer six is quoted."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "Set a list price before agreeing your first discounted deal"
                - "Write the early-customer offer with the feedback and reference you expect"
                - "Record the terms of each early contract in one table"
                - "Review price and terms before quoting your sixth customer"
            - name: Small supplier terms with a much larger customer
              description: |-
                ## Purpose
                Selling to a company a thousand times your size usually means their standard terms arrive presented as fixed: 90-day payment, broad liability, demanding supplier codes. Knowing which of these are truly fixed, which can be traded and which are dangerous for a small firm lets you sign the contract that grows the business without one that could sink it.

                ## Milestones
                1. The buyer's standard terms read and the three riskiest clauses identified.
                2. A view taken from your lawyer or accountant on those clauses.
                3. A short list of asks, such as a liability cap or faster payment, with a trade for each.
                4. A decision recorded on whether the final terms are acceptable.

                ## Notes
                Larger buyers often have a small-supplier policy with shorter payment terms. Ask whether one exists before negotiating payment.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "The three riskiest clauses in a large buyer's terms have been reviewed with a professional and a decision on acceptance is recorded."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Read the buyer's standard supplier terms and mark the riskiest clauses"
                - "Ask whether the buyer has a small-supplier payment policy"
                - "Get your lawyer's view on the three riskiest clauses"
                - "Send a short list of asks with something offered for each"
            - name: Negotiating when you badly need the deal
              description: |-
                ## Purpose
                Cash pressure, a thin pipeline or a missed target makes sellers transmit need, and buyers notice. Recognising when you are negotiating from need, setting beforehand the lowest terms you would truly accept, and having a colleague or adviser check any concession before it goes out stops short-term pressure from setting a long-term price.

                ## Milestones
                1. An honest note on how much you need this deal and why.
                2. Your floor terms written before the next conversation, not during it.
                3. A colleague, partner or adviser named to check concessions before they are sent.
                4. The signed terms compared afterwards with your floor.
              priority: medium
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "Floor terms were written before the next buyer call and every concession on the deal was checked by a named second person."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Write down honestly what happens if this deal does not sign"
                - "Set your floor terms before the next call with the buyer"
                - "Name someone to review any concession before you send it"
                - "Compare the signed terms with your floor afterwards"
            - name: Handing pricing authority to your first sales hire
              description: |-
                ## Purpose
                Founders and owners who have negotiated every deal themselves often give a new seller either no authority, so every discount comes back to them, or unlimited authority with no record. Writing what the new hire may agree alone, what needs a quick check and what stays with you, then reviewing their deals monthly, lets them close without the founder becoming the bottleneck.

                ## Milestones
                1. Three bands written: what the hire may agree alone, with a check, and only with you.
                2. Your own past deals shared as examples of good and bad trades.
                3. The hire's first five negotiations reviewed together.
                4. A monthly review of every concession the hire gave.
              priority: medium
              deadlineOffsetDays: 90
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Written authority bands exist and the new hire's first five negotiations were reviewed with the founder."
                cadence: phased
                effort_hours_estimate: "5"
              tasks:
                - "Write the three authority bands for price, term and payment"
                - "Share three of your past deals as worked examples"
                - "Review the hire's first five negotiations together"
                - "Review every concession the hire gave last month @recurring(monthly:28)"
            - name: Two-person negotiation roles for a team
              description: |-
                ## Purpose
                Two sellers on a negotiation call without agreed roles talk over each other, contradict each other on price and hand buyers a gap to exploit. Agreeing who leads, who listens and takes notes, who holds authority and the private signal for calling a break turns a pair into a team the buyer cannot split.

                ## Milestones
                1. Roles defined for lead, note-taker and authority holder.
                2. A private signal agreed for calling a break.
                3. A short debrief held after each joint call.
                4. Roles used consistently on five joint negotiations.
              priority: low
              frontmatter:
                mode: operating
                output_kind: knowledge
                success_criteria: "Defined roles and a break signal were used on five joint negotiations, each followed by a short debrief."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Agree who leads and who takes notes on the next joint call"
                - "Decide which of you holds authority to agree price"
                - "Agree a private signal for calling a break"
                - "Debrief for ten minutes after each joint call"
            - name: Negotiating with friends, family and long-standing customers
              description: |-
                ## Purpose
                Small businesses often sell to people they know: a cousin's company, a neighbour's shop, a customer of fifteen years. These deals carry unspoken expectations of a favour price and loose terms, which turn into resentment when invoices go unpaid. Putting the same written terms in place, with any relationship discount stated openly, protects both the business and the friendship.

                ## Milestones
                1. Current customers you also know personally listed with their actual terms.
                2. A clear rule on any relationship discount, stated in writing.
                3. Each of these customers on a written agreement.
                4. One awkward conversation about terms held and its outcome noted.
              priority: low
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "Every customer with a personal relationship has written terms, and any relationship discount is stated in writing."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "List customers you also know personally and their current terms"
                - "Decide whether a relationship discount exists and how much"
                - "Put each of these customers on a written agreement"
                - "Plan the wording for the most awkward terms conversation"
            - name: Closing deals when the buyer's budget is frozen
              description: |-
                ## Purpose
                Budget freezes stop deals the buyer still wants, and the tempting response is a discount that will not unfreeze anything. Structures such as a deferred start, a smaller first phase, payments split across financial years or signing now with billing next quarter can keep the deal alive without dropping price. Knowing these options before the freeze arrives lets you respond the same day.

                ## Milestones
                1. Four structures listed that move cost timing without cutting price.
                2. Finance consulted on the cash and revenue effect of each.
                3. One structure offered to a buyer affected by a freeze.
                4. The outcome recorded and the structure added to your negotiation notes.
              priority: low
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "Four budget-friendly structures are written and checked with finance, and one has been offered to a frozen buyer with the outcome recorded."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "List four ways to shift cost timing without lowering price"
                - "Ask finance how each option affects cash and revenue"
                - "Offer one structure to a buyer who has paused for budget reasons"
                - "Record whether the deal moved forward"
            - name: Three-way deals with resellers and partners
              description: |-
                ## Purpose
                When a reseller, integrator or referral partner sits between you and the end customer, each negotiation has three sets of interests and margin has to be shared. Agreeing partner margin, who owns the price conversation, and how discounts are split before the end customer sees a number stops partners quoting against you or giving away your margin.

                ## Milestones
                1. Partner margin and discount-sharing rules written for each partner type.
                2. Ownership of the price conversation agreed per deal.
                3. A rule stopping partners from quoting below an agreed floor.
                4. One joint deal negotiated under the rules and reviewed afterwards.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Written discount-sharing rules exist for each partner type and one joint deal has been reviewed against them."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Write the margin and discount split for each partner type"
                - "Agree with your main partner who leads price conversations"
                - "Set the floor below which partners may not quote"
                - "Review the next joint deal against the rules"
            - name: Liability, indemnity and data terms with counsel
              description: |-
                ## Purpose
                Larger deals bring heavier contract asks: uncapped liability, broad indemnities, data protection addenda and audit rights. Experienced sellers do not negotiate these alone, but they know how to frame the commercial trade, such as a higher cap in exchange for a higher price, and how to run the conversation with both sides' lawyers efficiently.

                ## Milestones
                1. The heavy clauses that came up in the last year listed with their outcomes.
                2. Commercial trades agreed with counsel for raising caps or widening indemnities.
                3. A routine for joint calls with both sides' lawyers, with the seller tracking business points.
                4. Each accepted non-standard term recorded with its exposure and approver.

                ## Notes
                Start from the **Risk register** template to record each non-standard term you accept, its exposure and who approved it. Legal judgement belongs to your lawyer.
              priority: medium
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A risk register lists every accepted non-standard liability or indemnity term with its approver, and pricing trades are agreed with counsel."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "List every non-standard liability or indemnity ask from the last year"
                - "Agree with counsel which risks can be accepted for a price"
                - "Record each accepted non-standard term in a risk register"
                - "Sit in on the next lawyer-to-lawyer call and track business points"
            - name: Pricing a strategic logo deal without setting a precedent
              description: |-
                ## Purpose
                Famous names on your customer list are worth a lot, which is exactly why big brands ask for deep discounts and most-favoured-customer clauses. Structuring the deal so the discount is visible, time-limited and tied to specific returns, such as a public case study, a speaking slot or reference calls, keeps the logo from becoming the new price for everyone.

                ## Milestones
                1. The value of the logo written in concrete terms: references, case study, credibility.
                2. The discount framed as time-limited and tied to named returns.
                3. Any most-favoured-customer or price-protection request reviewed and limited.
                4. Confidentiality of pricing confirmed in the contract.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "The strategic deal's discount is written as time-limited and tied to named returns, with any most-favoured-customer clause limited."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Write what the logo is worth in references, case studies and introductions"
                - "Tie each part of the discount to a named return from the customer"
                - "Ask your lawyer to review any most-favoured-customer request"
                - "Confirm pricing is confidential in the signed contract"
            - name: Negotiation scenario library from past deals
              description: |-
                ## Purpose
                After a few years, a team has seen most negotiation situations more than once, but the lessons sit in individual memories and leave when people do. A library of short write-ups, each with the situation, what the buyer asked, what was traded and what worked, gives new and experienced sellers a reference for the deal in front of them.

                ## Milestones
                1. A simple format agreed: situation, asks, trades, result, lesson.
                2. Ten scenarios written from real past deals.
                3. Scenarios tagged by situation, such as procurement, renewal or competitor undercut.
                4. New scenarios added every quarter.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A scenario library holds at least ten tagged write-ups from real deals, with new entries added each quarter."
                cadence: rolling
              tasks:
                - "Agree the five headings each scenario write-up uses"
                - "Write up three scenarios from deals closed this year"
                - "Tag scenarios by situation so they are easy to find"
                - "Add the quarter's most instructive negotiation to the library @recurring(quarterly)"
            - name: Renegotiating a signed contract mid-term
              description: |-
                ## Purpose
                Customers sometimes ask to reopen a signed contract: to cut seats after layoffs, change scope or pay later. Handling these requests with a clear stance, what the contract allows, what you could offer in exchange for something like a term extension, and when to say no, protects revenue while keeping a customer who may grow again.

                ## Milestones
                1. The contract's terms on changes, reductions and termination checked.
                2. The customer's actual problem understood, not just the request.
                3. An offer prepared that trades any reduction for a longer term or other value.
                4. The amendment signed or the request declined in writing.
              priority: medium
              frontmatter:
                mode: service
                output_kind: decision
                success_criteria: "Each mid-term change request ends in a signed amendment with a stated trade or a written decline."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Check what the contract says about reductions and early termination"
                - "Ask the customer what problem the change is meant to solve"
                - "Prepare a counter-offer that trades any reduction for a longer term"
                - "Send the signed amendment or a written decline"
---

# Deal Negotiation & Closing

This area is for founders, small business owners and sales teams at the point where a buyer wants the deal and the conversation turns to price, terms and signature. It starts with the foundations (walk-away points, your alternatives, tradeable terms, a give-get list, margin floors, clause positions and a closing checklist), then the weekly and monthly machinery of late-stage deals, the negotiation skills worth practising, decisions on payment terms, multi-year structures and pilots, the big dated moments, situations such as a first sales hire or a much larger customer, and finally the specialist work of partner deals, heavy contract terms and strategic logos.

What repeats is a Tuesday late-stage huddle, a Thursday redline chase and a Monday pass over quiet deals, monthly concession, price realisation and renewal checks, a quarter-end closing plan, and yearly reviews of clause positions and prices with your lawyer. The Operational checklist, Meeting notes, Metrics log and Risk register templates pair with the projects that name them. Installing adds all 50 projects as active, so archive the ones that are not for you yet.
