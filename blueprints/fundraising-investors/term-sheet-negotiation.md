---
id: fundraising-investors.term-sheet-negotiation
name: Term Sheet Negotiation
description: "Term sheets negotiated with your eyes open: the vocabulary and ownership maths, a lawyer and benchmark in place early, a live issues list and concession ledger, the clauses worth pushing on, and a clean signature."
category: business
version: 1.0.0
tags: [fundraising-investors, term-sheet-negotiation, founder, venture-capital, valuation, liquidation-preference, negotiation, startup-law]
author: Aurum Technology
starter_structure:
  templates:
    - vendor
    - reading-queue
    - meeting-notes
    - person
  pillars:
    - name: Fundraising & Investor Relations
      emoji: "💰"
      description: "Raising capital and keeping investors informed: rounds from pre-seed to growth, grants and debt, the data room, cap table, investor updates, board reporting and exits."
      pillarFrontmatter:
        review_cadence: quarterly
      areas:
        - name: Term Sheet Negotiation
          description: "Comparing and negotiating term sheets on valuation, preferences, board seats and protective provisions with advisers and investors."
          projects:
            - name: Term sheet glossary in your own words
              description: |-
                ## Purpose
                Venture term sheets pack twenty or so defined terms into three or four pages, and investors use the vocabulary fluently while many first-time founders nod along. Writing a one-line definition of each term in your own words, with a worked example, means you can hear an offer on a call and know at once which clauses move money and which move control.

                ## Milestones
                1. A glossary covering at least 20 terms, from pre-money valuation to drag-along, each in one plain sentence.
                2. Every term tagged as an economics term, a control term or a process term.
                3. A worked numerical example beside each economics term.
                4. The glossary checked by your lawyer or an experienced founder for errors.

                ## Notes
                Use a model term sheet published by a venture capital association in your country as the source list, so the glossary matches the documents investors will actually send.
              priority: medium
              deadlineOffsetDays: 14
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A glossary of at least 20 term sheet terms, each tagged economics, control or process, reviewed by your lawyer or an experienced founder."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Download a model venture term sheet from your country's venture association"
                - "List every defined term in it on one page"
                - "Write a one-sentence definition and an example for each term"
                - "Ask your lawyer or a founder mentor to mark any definition that is wrong"
                - "Add any new term you meet in a draft or article to the glossary @recurring(monthly:24)"
            - name: Engaging a venture lawyer before the first term sheet
              description: |-
                ## Purpose
                Your lawyer's real value on a term sheet comes before you reply, not after you sign, and firms that do venture work every week know what is market in a way a general commercial lawyer cannot. Choosing one before offers arrive avoids a rushed hire in the 48 hours an investor gives you, and gets a fee estimate agreed while there is still time to compare.

                ## Milestones
                1. Three lawyers or firms with recent venture financings for companies at your stage shortlisted.
                2. Each asked the same questions on experience, who does the work, turnaround times and fees.
                3. A written fee estimate or cap for the term sheet stage and for closing.
                4. An engagement letter signed with one firm, with their conflicts check cleared against your likely investors.

                ## Notes
                Start from the **Vendor** template. Ask whether the firm also acts for any fund you are talking to; investor-side work is common and needs to be disclosed and managed, not hidden.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "An engagement letter with a venture-experienced lawyer is signed, with a written fee estimate for the term sheet and closing stages."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Ask three founders who raised in the last year which lawyer they used and why"
                - "Shortlist three firms with recent financings at your stage"
                - "Send each firm the same five questions on experience, staffing, speed and fees"
                - "Check each firm's conflicts against the investors you are speaking to"
                - "Sign the engagement letter with the firm you choose"
            - name: Pre-money, post-money and fully diluted basis check
              description: |-
                ## Purpose
                Two offers at the same headline valuation can leave you with very different ownership, depending on whether the price is pre-money or post-money and what counts in the fully diluted share count: the option pool, unconverted SAFEs or notes, warrants. Working out your own fully diluted number once, with your lawyer, lets you translate any offer into the one figure that matters, the percentage the new money buys.

                ## Milestones
                1. Your current fully diluted share count written down, listing ordinary shares, options granted, the unallocated pool and any convertibles.
                2. The difference between a pre-money and a post-money price shown on one worked example using your numbers.
                3. A simple calculator that turns an offer's price, amount and pool requirement into investor and founder percentages.
                4. The calculator checked against your lawyer's or cap table tool's figures.

                ## Notes
                Keep this to translating offers. Maintaining the cap table itself, and modelling dilution across future rounds, belong in their own areas.
              priority: high
              deadlineOffsetDays: 14
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A calculator that converts any offer into post-round ownership percentages, matching your lawyer's figures for at least one test case."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Write down every class of share, option and convertible currently outstanding"
                - "Ask your lawyer which instruments count in the fully diluted number"
                - "Build a one-sheet calculator for price, amount and pool top-up"
                - "Test the calculator on a made-up offer and compare it with your lawyer's answer"
            - name: Market terms benchmark for your stage and region
              description: |-
                ## Purpose
                Knowing what is normal right now is the only way to tell a tough term from an unusual one, and normal changes with the funding market: preferences, participation and pool sizes all shift between good years and bad ones. Several law firms and data providers publish regular summaries of venture terms by stage, and a one-page benchmark built from them gives you something factual to point at when you push back.

                ## Milestones
                1. At least two recent published surveys of venture deal terms for your stage and region collected.
                2. One page summarising the typical preference, participation, anti-dilution, board and pool terms they report.
                3. Two or three founders who closed at your stage in the last six months asked what they actually signed.
                4. Points where your region differs from the large venture hubs noted.

                ## Notes
                Published surveys lag the market by a quarter or two and lean towards larger rounds. Treat them as a range, and ask your lawyer what they are seeing this month.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A one-page benchmark of current terms for your stage, drawn from at least two published surveys and two founder conversations, dated this quarter."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Find two recent published surveys of venture financing terms for your stage"
                - "Summarise the typical preference, board, anti-dilution and pool terms on one page"
                - "Ask two founders who closed recently what they signed"
                - "Ask your lawyer which terms in the benchmark are moving this quarter"
                - "Refresh the benchmark before each new round @recurring(yearly)"
            - name: Must-have, tradeable and walk-away terms list
              description: |-
                ## Purpose
                Negotiations go badly when founders decide what matters in the middle of a call with a partner who has done this two hundred times. Sorting every term into must-have, tradeable and walk-away before any offer arrives, and writing down why, turns each later concession into a choice rather than a reflex.

                ## Milestones
                1. Every term from the glossary placed in one of three columns: must-have, tradeable or walk-away.
                2. A one-line reason beside each must-have and walk-away term.
                3. A minimum acceptable valuation and a maximum acceptable dilution written down.
                4. The list agreed with co-founders and shared only with your lawyer.

                ## Notes
                Keep the walk-away column short. Three or four lines you would genuinely refuse are more credible than twelve.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A written list sorting every major term into must-have, tradeable or walk-away, with reasons, a valuation floor and a dilution ceiling, agreed by all founders."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Copy every term from your glossary into three columns"
                - "Write the reason for each must-have and walk-away term in one line"
                - "Set a valuation floor and a dilution ceiling you would sign at"
                - "Share the list with your lawyer and ask what looks unrealistic"
            - name: Co-founder alignment on deal priorities
              description: |-
                ## Purpose
                Co-founders often want different things from the same round: one cares about the headline price, another about keeping board control, a third about how vesting resets on their own shares. Agreeing the order of priorities before an investor tests it stops a lead from splitting the founding team mid-negotiation.

                ## Milestones
                1. Each founder's top three priorities for the round written down separately, then compared.
                2. Disagreements on valuation, control, vesting and any founder share sales named openly.
                3. One ranked list of priorities agreed by all founders.
                4. A rule agreed for who speaks for the company on terms and how founders resolve a split during the negotiation.

                ## Notes
                Founder vesting and acceleration can create personal conflicts of interest between founders. Ask your lawyer whether any founder should take separate advice.
              priority: medium
              deadlineOffsetDays: 14
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "One ranked list of round priorities and a written rule for who speaks on terms, signed off by every founder."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Ask each founder to write their top three priorities privately"
                - "Meet for 90 minutes to compare lists and name the disagreements"
                - "Agree one ranked list of priorities for the round"
                - "Write down who speaks on terms and how a split gets resolved"
                - "Hold a 20-minute co-founder check on priorities during negotiation @recurring(weekly:mon)"
            - name: Side-by-side term sheet comparison grid
              description: |-
                ## Purpose
                Term sheets from different investors arrive in different formats, with the important differences buried in defined terms and footnotes. A single grid with the same rows for every offer, from price and preference to board seats, vetoes and conditions, makes the real trade-offs visible to founders and the board at a glance.

                ## Milestones
                1. A grid with rows for price, amount, pool, preference, participation, anti-dilution, board, protective provisions, vesting, exclusivity, conditions and costs.
                2. Each offer received entered in its own column, with clause references.
                3. Rows where offers differ materially highlighted.
                4. Ownership at close and founder proceeds at two exit values added at the bottom from the waterfall model.
              priority: high
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A comparison grid with at least 12 standard rows, holding every offer received, with material differences highlighted and checked by your lawyer."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Set up a grid with a row for each of twelve standard terms"
                - "Enter each term sheet in its own column with the clause number"
                - "Highlight every row where the offers differ materially"
                - "Ask your lawyer to check the grid against the documents"
            - name: Exit proceeds waterfall at five sale prices
              description: |-
                ## Purpose
                Headline valuation says little about what founders and employees receive in a sale, because preferences are paid first and participation can take a second slice. A waterfall that runs each offer through five exit prices, from a disappointing sale to a strong one, shows exactly where the terms bite and is the most persuasive exhibit you can bring to a negotiation.

                ## Milestones
                1. Five exit values chosen, including one below the total money raised.
                2. Proceeds for each share class calculated at each value under every offer.
                3. Founder and employee pool proceeds shown as amounts, not just percentages.
                4. The breakpoint where each offer's preference stops mattering identified.

                ## Notes
                Include preferences from earlier rounds, not just the new one. Most surprises come from stacking.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A waterfall showing founder, employee and investor proceeds at five exit values for every offer, including a value below total capital raised."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Pick five exit values including one below total money raised"
                - "List every preference already in place with its terms"
                - "Calculate proceeds by class at each exit value for each offer"
                - "Mark the exit value where each offer's preference stops mattering"
            - name: Open issues list during live negotiation
              description: |-
                ## Purpose
                Points agreed on a call get lost between drafts, and a term you thought was settled can quietly reappear in the next markup. One numbered list of open issues, with your position, the investor's position and the status of each, is the shared memory of the negotiation and the agenda for every call.

                ## Milestones
                1. An issues list with columns for clause, your position, investor position, status and owner.
                2. Every open point from the first markup entered.
                3. The list updated the same day after each call or new draft.
                4. Every issue marked closed or consciously conceded before signing.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every point raised in the negotiation appears on the issues list with a status, and none is still open when the term sheet is signed."
                cadence: rolling
              tasks:
                - "Create an issues list with clause, positions, status and owner columns"
                - "Enter every point from the first markup or call"
                - "Update the issues list after every call or new draft @recurring(daily)"
                - "Send the current list to your lawyer before each call"
            - name: Twice-weekly lawyer check-ins on open points
              description: |-
                ## Purpose
                Lawyers billing by the hour tend to wait for instructions, and founders tend to save questions up until they become urgent. Two short fixed calls a week during the negotiation keep decisions moving, keep fees predictable and stop a single question from holding up a draft for days.

                ## Milestones
                1. Two 30-minute slots a week agreed with your lawyer for the length of the negotiation.
                2. A three-line agenda sent before each call, drawn from the issues list.
                3. Decisions from each call written down within the hour.
                4. The calls stopped once the term sheet is signed and the closing work takes over.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Two check-ins a week held throughout the negotiation, each with a written agenda and recorded decisions."
                cadence: rolling
              tasks:
                - "Agree two fixed 30-minute weekly slots with your lawyer"
                - "Send a three-line agenda the evening before each check-in"
                - "Hold a 30-minute open points call with your lawyer @recurring(weekly:tue,fri)"
                - "Write the decisions from each check-in into the issues list within the hour"
            - name: Concession ledger of gives and gets
              description: |-
                ## Purpose
                Every concession you make without getting something back teaches the other side that pushing works. A running ledger of what you gave, what you received and what is left to trade keeps the exchange balanced and gives you a factual answer when an investor says you have not moved.

                ## Milestones
                1. A ledger listing every concession made by either side, with the date and clause.
                2. Each concession paired with what was received in return, or marked unpaired.
                3. A short list of low-cost items you are willing to give away kept ready.
                4. No more than two unpaired concessions by the time of signing.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A ledger pairing every concession with a return, with no more than two unpaired concessions at signing."
                cadence: rolling
              tasks:
                - "List every concession made so far by either side"
                - "Pair each concession with what came back, or mark it unpaired"
                - "Write three low-cost items you would trade if asked"
                - "Review the ledger balance before the week's negotiation calls @recurring(weekly:wed)"
            - name: Exclusivity and expiry date watch
              description: |-
                ## Purpose
                Exclusivity periods and offer expiry dates are the two clocks in any term sheet negotiation. Missing either by a day can cost you an offer or tie you to a lead who is slowing down, so the dates need watching as closely as the bank balance.

                ## Milestones
                1. Every offer's acceptance deadline and every exclusivity end date in one calendar.
                2. Reminders set five days and two days before each date.
                3. A plan written for what you will do if the lead is not ready to close when exclusivity ends.
                4. Your lawyer asked whether exclusivity ends early if the investor changes the agreed terms.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "No acceptance deadline or exclusivity date passes without a decision recorded at least two days before it."
                cadence: rolling
              tasks:
                - "Put every acceptance deadline and exclusivity end date in one calendar"
                - "Set reminders five days and two days before each date"
                - "Check days left on exclusivity and on each offer's expiry @recurring(daily)"
                - "Write what you will do if exclusivity ends before the lead is ready"
            - name: Friday negotiation update to co-founders and board
              description: |-
                ## Purpose
                Silence from the founder doing the talking makes co-founders anxious and prompts existing investors to call the lead directly. A short Friday note covering what moved, what is open and what you need decided keeps everyone aligned and stops side conversations that weaken your position.

                ## Milestones
                1. A distribution list agreed: co-founders, existing board members and your lawyer.
                2. A five-line format: moved, open, risks, decisions needed, next week.
                3. A note sent every Friday for the length of the negotiation.
                4. Decisions requested in one note answered before the next.

                ## Notes
                Assume anything sent to existing investors could be forwarded. Keep your walk-away numbers out of the note.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A Friday update sent every week of the negotiation to the agreed list, with requested decisions answered within the week."
                cadence: rolling
              tasks:
                - "Agree who receives the Friday negotiation update"
                - "Draft the five-line update format"
                - "Send the Friday negotiation update @recurring(weekly:fri)"
                - "Chase any requested decision still unanswered by Wednesday"
            - name: Monthly market terms watch
              description: |-
                ## Purpose
                What counts as a standard term shifts quietly: participation comes back when money is tight, pool sizes creep up, and preferences above one times appear in weak markets. A short monthly habit of logging published rounds and reading the quarterly term surveys means your benchmark is current when a term sheet lands, not six months stale.

                ## Milestones
                1. A reading list of two or three law firm or data provider reports on venture terms.
                2. One published round's disclosed terms logged each month.
                3. Each quarterly survey summarised in three lines in the benchmark.
                4. A note made whenever a term moves from unusual to common, or back.

                ## Notes
                Start from the **Reading queue** template.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Twelve consecutive monthly entries and four quarterly survey summaries added to the benchmark within a year."
                cadence: rolling
              tasks:
                - "Subscribe to two venture term reports from law firms or data providers"
                - "Log one new published round's terms in the benchmark @recurring(monthly:18)"
                - "Summarise the latest quarterly venture terms survey in three lines @recurring(quarterly)"
                - "Flag any term that has moved since last quarter"
            - name: Register of rights granted to investors
              description: |-
                ## Purpose
                Once a term sheet becomes signed documents, the rights you gave away start to bind everyday decisions: issuing new shares, taking on debt, selling the company, even changing the size of the board can need investor consent. A plain register of what each investor can approve, block or receive, checked against the final documents, stops you breaching a consent right by accident.

                ## Milestones
                1. Every consent matter, information right, pro rata right and transfer right listed with the investor who holds it.
                2. Each entry checked against the final signed documents, not just the term sheet.
                3. The register shared with whoever handles finance and company secretarial work.
                4. A rule in place that any financing, large commitment or sale discussion is checked against the register first.

                ## Notes
                The signed documents override the term sheet wherever they differ. Ask your lawyer to confirm the register after closing.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A register of investor rights, confirmed by your lawyer against the signed documents, checked every quarter with no consent matter missed."
                cadence: rolling
              tasks:
                - "List every consent, information, pro rata and transfer right in the term sheet"
                - "Ask your lawyer to confirm the list against the signed documents"
                - "Check upcoming decisions against the investor consent list @recurring(quarterly)"
                - "Review the whole register with your lawyer @recurring(yearly)"
            - name: Quarterly founder peer exchange on terms
              description: |-
                ## Purpose
                Founders rarely compare the terms they signed, so each one negotiates alone against investors who see hundreds of deals. A small group of four to six founders who swap anonymised terms each quarter gives everyone a private, current benchmark and a safe place to ask whether a clause is normal.

                ## Milestones
                1. Four to six founders at similar stages agreed to swap terms under a confidentiality understanding.
                2. A shared format for anonymised terms: stage, amount, preference, board, pool, unusual clauses.
                3. One exchange held each quarter.
                4. At least one clause in your own next negotiation informed by the group.

                ## Notes
                Check your signed documents for confidentiality obligations before sharing anything. Share ranges and structures, and never name investors without permission.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Four quarterly exchanges held in a year with at least four founders, each sharing terms in the agreed anonymised format."
                cadence: rolling
              tasks:
                - "Invite three to five founders at your stage to a terms exchange group"
                - "Check your own documents for confidentiality limits on sharing terms"
                - "Agree a one-page anonymised format for sharing terms"
                - "Swap anonymised term notes with the founder group @recurring(quarterly)"
            - name: Liquidation preference mechanics worked by hand
              description: |-
                ## Purpose
                The liquidation preference decides who gets paid first, and how much, when the company is sold or wound up, and it matters most in exactly the outcomes founders least like to imagine. Working through non-participating, participating and capped participating preferences by hand, on your own numbers, makes the gap between a one times and a two times preference concrete.

                ## Milestones
                1. Non-participating, fully participating and capped participating preferences each explained in one paragraph.
                2. All three worked through at three exit values using your round's size.
                3. The convert-or-take-the-preference choice a non-participating investor makes shown at each value.
                4. Stacked versus equal seniority between series explained with an example.

                ## Notes
                Many markets treat a one times non-participating preference as the usual default, but check your benchmark rather than assuming.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Written worked examples of three preference types at three exit values, plus one seniority example, checked by your lawyer or a mentor."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Read the liquidation preference clause in your model term sheet"
                - "Work a one times non-participating preference at three exit values"
                - "Repeat the calculation for participating and capped participating versions"
                - "Show the investor's convert-or-take-preference choice at each exit"
                - "Ask a mentor to check your worked examples"
            - name: Anti-dilution formulas worked by hand
              description: |-
                ## Purpose
                Anti-dilution protection adjusts an investor's conversion price if you later raise at a lower price, and the formula chosen decides whether a small down round is a nuisance or a disaster for founders. Calculating full ratchet, broad-based weighted average and narrow-based weighted average on the same example shows why the wording of the share count matters.

                ## Milestones
                1. Full ratchet, broad-based and narrow-based weighted average formulas written out.
                2. All three applied to one example down round using your share numbers.
                3. The effect on founder ownership shown for each formula.
                4. The usual carve-outs for option grants and other exempt issues listed.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "One worked down-round example showing founder ownership under all three anti-dilution formulas, with the exempt issues listed."
                cadence: phased
                effort_hours_estimate: "5"
              tasks:
                - "Write out the three common anti-dilution formulas"
                - "Invent one down round priced 30 percent below your expected price"
                - "Calculate the new conversion price under each formula"
                - "List the share issues your lawyer says are usually exempt"
            - name: Protective provisions and investor veto rights
              description: |-
                ## Purpose
                Protective provisions list decisions the company cannot take without consent from the preferred shareholders or a named investor, and a long list can hand a minority investor a veto over the business. Learning what a typical list contains, and which items are fair protection versus operational control, prepares you to redline the real one later.

                ## Milestones
                1. A typical protective provisions list from a model term sheet annotated item by item.
                2. Each item marked as protecting the investor's shares or controlling operations.
                3. The consent threshold explained: which holders vote and what majority applies.
                4. Three items you would try to remove or narrow, with reasons.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "An annotated protective provisions list with every item classed as share protection or operational control, and three target changes written."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Copy the protective provisions clause from a model term sheet"
                - "Mark each item as share protection or operational control"
                - "Ask your lawyer how the consent threshold is usually set"
                - "Write three items you would narrow and why"
            - name: Board composition and control scenarios
              description: |-
                ## Purpose
                Whoever holds the board majority can replace the chief executive, approve budgets and decide on a sale, so a board seat is often worth more than a point of valuation. Mapping who would hold a majority after this round, and after the next two, shows whether a proposed board structure is sustainable for founders.

                ## Milestones
                1. Today's board and its voting rules written down.
                2. Each offer's proposed board shown with who appoints each seat.
                3. Board composition projected across the next two likely rounds.
                4. The roles of observers and independent directors, and how independents get chosen, explained.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A one-page map of board control after this round and the next two, for each offer, reviewed by your lawyer."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Write down today's board seats and who appoints each"
                - "Draw the board each offer proposes"
                - "Project the board after two more rounds with a similar structure"
                - "Find out how independent directors are usually chosen under each offer"
            - name: Founder vesting, cliff and acceleration terms
              description: |-
                ## Purpose
                Investors usually ask founders to put some or all of their existing shares back on a vesting schedule, so that a founder who leaves early does not walk away with a large stake. Understanding credit for time served, cliffs, leaver definitions and single versus double trigger acceleration lets you negotiate a schedule that protects the company without punishing founders who stay.

                ## Milestones
                1. The standard founder vesting schedule in your benchmark written down.
                2. Credit for time already worked calculated for each founder.
                3. Single and double trigger acceleration explained with a sale example.
                4. Good leaver and bad leaver definitions read and questioned.

                ## Notes
                Vesting on founder shares can have personal tax consequences in some countries. Ask a tax adviser before agreeing a schedule.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A written note per founder showing proposed vesting, credit for time served and acceleration, reviewed with your lawyer and a tax adviser."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Note the founder vesting terms in your market benchmark"
                - "Calculate the months of credit each founder could ask for"
                - "Write a sale example showing single and double trigger acceleration"
                - "Book a short call with a tax adviser about founder vesting"
            - name: Drag-along, tag-along and transfer restrictions
              description: |-
                ## Purpose
                Drag-along rights let a defined majority force everyone to join a sale, while tag-along, first refusal and co-sale rights control who can sell shares and to whom. These clauses decide whether founders can be dragged into a sale they oppose, or blocked from selling a small slice of their own shares later.

                ## Milestones
                1. Drag-along, tag-along, right of first refusal and co-sale each explained in one paragraph.
                2. The drag-along trigger threshold in each offer identified, including whose votes count.
                3. Any minimum price or founder consent protection in the drag-along noted.
                4. The effect on a founder wanting to sell a small number of shares later understood.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "One page explaining four transfer clauses, with each offer's drag-along threshold and any founder protections identified."
                cadence: phased
                effort_hours_estimate: "3"
              tasks:
                - "Read the drag-along and transfer clauses in a model term sheet"
                - "Write one paragraph on each of the four clauses"
                - "Note whose votes count towards each offer's drag-along threshold"
                - "Ask your lawyer which drag-along protections founders commonly request"
            - name: Negotiation preparation with alternatives and anchors
              description: |-
                ## Purpose
                Going into a negotiation without knowing your best alternative means any offer looks better than nothing. Writing down your real alternative if this deal fails, the investor's own pressures, where to anchor and the order of concessions gives you a plan you can follow when the call gets uncomfortable.

                ## Milestones
                1. Your best alternative to this deal written in two sentences, with the runway it leaves.
                2. The investor's pressures listed: fund timing, partnership approval, competing deals.
                3. An opening position on the top three terms, with reasons you can say aloud.
                4. An order of concessions agreed with your co-founders.

                ## Notes
                A short book on principled negotiation is worth reading once. Practise saying your positions out loud; it changes how they land.
              priority: medium
              deadlineOffsetDays: 30
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A one-page negotiation plan with your alternative, the investor's pressures, three opening positions and a concession order, agreed with co-founders."
                cadence: phased
                effort_hours_estimate: "5"
              tasks:
                - "Write your best alternative to this deal and the runway it gives"
                - "List the pressures the investor is under right now"
                - "Draft opening positions on your top three terms with reasons"
                - "Rehearse the opening positions aloud with a co-founder"
                - "Agree the order you would concede things in"
            - name: Mock term sheet negotiation with an experienced founder
              description: |-
                ## Purpose
                Reading about negotiation and doing it are different skills, and the first time a partner says 'that is our standard' should not be the real thing. A 60-minute mock session with a founder or angel playing the investor, using a realistic term sheet, exposes the moments you freeze and the concessions you give too easily.

                ## Milestones
                1. A volunteer with investor or repeat-founder experience agreed to play the lead.
                2. A realistic term sheet with three tough clauses prepared for the session.
                3. A 60-minute mock negotiation held, with notes taken.
                4. Three things to change in your approach written down afterwards.
              priority: medium
              deadlineOffsetDays: 45
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A 60-minute mock negotiation held with an experienced founder or angel, with three written changes to your approach."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Ask a repeat founder or angel to play the lead investor for an hour"
                - "Prepare a mock term sheet with three tough clauses"
                - "Run the session and note where you hesitated or conceded"
                - "Write three changes to your approach before the real call"
            - name: Headline valuation against clean terms decision
              description: |-
                ## Purpose
                A higher price with heavy terms can leave founders worse off than a lower price with standard ones, especially if the next round or the exit disappoints. Deciding in advance how much valuation you would trade for cleaner preferences, fewer vetoes or a better board stops the headline number from making the decision for you.

                ## Milestones
                1. Two versions of the same offer modelled: a higher price with heavier terms and a lower price with standard terms.
                2. Founder proceeds compared at the five exit values from the waterfall.
                3. The risk a high price creates for the next round's pricing discussed with an adviser.
                4. A written rule on how much valuation you would give up for which term.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A written trade-off rule between valuation and named terms, backed by a two-version waterfall comparison."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Model a higher price with heavier terms against a lower clean one"
                - "Compare founder proceeds at the five exit values"
                - "Ask an adviser how a high price could affect your next round"
                - "Write down how much valuation you would trade for each key term"
            - name: Choosing between competing term sheets
              description: |-
                ## Purpose
                With two or more offers on the table, the best deal is rarely the one with the biggest number: the partner who will sit on your board, the fund's reserves for later rounds and how the firm behaves in hard times count as much as the terms. A structured decision, built on the grid, reference feedback and a scored comparison, gives the board a clear recommendation and you a choice you can explain.

                ## Milestones
                1. Every offer in the comparison grid with ownership and waterfall figures.
                2. The partner, fund size, reserves and approval process for each investor written down.
                3. Feedback from founder references for each lead summarised in a paragraph.
                4. A scored comparison against the ranked founder priorities.
                5. A recommendation agreed by the founders and recorded.

                ## Notes
                Running reference checks on investors has its own area. Here, just bring the summary in.
              priority: high
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A written recommendation choosing one offer, with a scored comparison against founder priorities and a summary of investor references."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Enter every offer into the comparison grid"
                - "Ask each lead about fund size, reserves and their partnership approval process"
                - "Score each offer against your ranked priorities"
                - "Write a one-page recommendation for founders and the board"
            - name: Option pool top-up placement in the price
              description: |-
                ## Purpose
                An option pool created or enlarged before the money comes in is paid for entirely by existing shareholders, which quietly lowers the real pre-money valuation. Negotiating the size against an actual hiring plan, and whether the top-up sits in the pre-money or the post-money, can be worth as much as a valuation increase.

                ## Milestones
                1. The effective pre-money valuation of each offer calculated after its pool requirement.
                2. A hiring plan for the next 18 months with the equity needed per hire.
                3. A counter-proposal on pool size or placement backed by that plan.
                4. The agreed pool size and placement written into the issues list.

                ## Notes
                Sizing the pool from first principles belongs in its own area. Here the job is to negotiate the number the investor asks for.
              priority: medium
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A counter-proposal on pool size and placement, backed by an 18-month hiring plan, sent to the lead and its outcome recorded."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Calculate each offer's effective pre-money after the pool top-up"
                - "List planned hires for 18 months with the equity each needs"
                - "Draft a counter on pool size or placement backed by the hiring list"
                - "Record the agreed pool size and where it sits"
            - name: Board seat and independent director negotiation
              description: |-
                ## Purpose
                Board seats are among the hardest terms to win back later, because every future lead will want one too. Agreeing a structure now, for example two founder seats, one investor seat and one independent chosen by both, keeps the board balanced through the next round instead of drifting towards investor control.

                ## Milestones
                1. Your proposed board for after this round and after the next written down.
                2. The lead's board request and their reasons recorded.
                3. Terms for any observer seat, including confidentiality and attendance limits, agreed.
                4. The process for appointing an independent director, and who must approve, written into the term sheet.

                ## Notes
                Setting up the board after closing, with meeting rhythms and onboarding, is covered elsewhere. Here the job is the clause.
              priority: medium
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A board composition clause agreed in the term sheet that matches your written two-round board plan, including the independent appointment process."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Write the board you want after this round and after the next"
                - "Ask the lead why they want the seats they have asked for"
                - "Propose limits on observer rights and attendance"
                - "Agree how an independent director is chosen and approved"
            - name: Protective provisions redline
              description: |-
                ## Purpose
                Many investors open with a long protective provisions list and expect it to be trimmed. Going through the lead's list with your lawyer, item by item, and proposing thresholds such as consent only for debt above a set amount or spending outside an approved budget, keeps genuine protection while giving the company room to run.

                ## Milestones
                1. Every protective provision in the lead's term sheet listed and classed.
                2. Monetary thresholds proposed for debt, spending and asset sales.
                3. A redline returned to the lead with a one-line reason per change.
                4. The final list agreed and logged in the issues list.
              priority: medium
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "A redline of the lead's protective provisions, with thresholds and reasons, returned to the lead and the agreed list logged."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "List each protective provision in the lead's term sheet"
                - "Propose a monetary threshold for each spending or debt veto"
                - "Send the redline with a one-line reason per change"
                - "Log the final agreed list in the issues list"
            - name: Investor legal fees cap and deal costs
              description: |-
                ## Purpose
                In most venture rounds the company pays the lead investor's legal fees as well as its own, out of the money being raised. A fixed cap in the term sheet, and an estimate of your own costs to closing, keeps a contested negotiation from eating a noticeable slice of the round.

                ## Milestones
                1. The lead's proposed fee clause and any cap identified.
                2. Your own lawyer's estimate to closing recorded.
                3. A cap on investor fees agreed in the term sheet.
                4. Actual fees on both sides tracked against both figures until closing.
              priority: low
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A cap on investor legal fees written into the term sheet, with actual fees on both sides tracked against estimates until closing."
                cadence: phased
                effort_hours_estimate: "2"
              tasks:
                - "Find the fee clause in the lead's term sheet"
                - "Ask your lawyer for a written estimate to closing"
                - "Propose a fixed cap on the investor's legal fees"
                - "Compare legal fees billed against the estimates @recurring(monthly:12)"
            - name: Pro rata, major investor threshold and information rights
              description: |-
                ## Purpose
                Pro rata rights let investors buy into future rounds to keep their percentage, and information rights fix which reports they receive and how often. Granting both to every small investor can crowd out a future lead and add reporting work, so the major investor threshold is worth setting on purpose.

                ## Milestones
                1. The pro rata and information rights in each offer listed.
                2. A major investor threshold proposed in money terms.
                3. The reports promised, and their frequency, checked against what you already produce.
                4. Any super pro rata request identified and answered.
              priority: low
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "Pro rata and information rights agreed with a stated major investor threshold, and promised reporting that matches what you already produce."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "List the pro rata and information rights in each offer"
                - "Propose a major investor threshold in money terms"
                - "Check promised reports against what you already produce"
                - "Respond in writing to any super pro rata request"
            - name: Pay-to-play, redemption and dividend clause response
              description: |-
                ## Purpose
                Some term sheets include clauses that sit unused in good times but bite in bad ones: pay-to-play, redemption rights that force the company to buy back shares, and cumulative dividends that build up an amount owed to investors. Spotting each one and agreeing a response with your lawyer before replying stops a rare clause slipping through as boilerplate.

                ## Milestones
                1. Every pay-to-play, redemption, dividend or similar clause in each offer flagged.
                2. What each would mean in a weak year written in one paragraph.
                3. A response for each agreed with your lawyer: accept, narrow or remove.
                4. The response sent and the investor's answer logged.
              priority: medium
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "Every pay-to-play, redemption and dividend clause in the offers flagged, with a written response agreed with your lawyer and sent."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Search each offer for pay-to-play, redemption and dividend wording"
                - "Write what each clause would do in a weak year"
                - "Agree a response for each clause with your lawyer"
                - "Log the investor's answer to each response"
            - name: Exclusivity length and closing conditions
              description: |-
                ## Purpose
                Signing a term sheet usually commits you to a period of exclusivity, and the conditions listed before closing decide how easily the investor can walk away during it. A shorter no-shop, a defined diligence list and few open-ended conditions keep the round from stalling while you cannot talk to anyone else.

                ## Milestones
                1. The exclusivity length and every closing condition in the lead's offer listed.
                2. Open-ended conditions, such as diligence satisfactory to the investor alone, identified.
                3. A proposal for exclusivity length and a defined diligence list sent.
                4. The agreed exclusivity end date entered in the deadline calendar.
              priority: medium
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "Exclusivity length and closing conditions agreed, with no open-ended conditions left and the end date in the deadline calendar."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "List the exclusivity period and every closing condition"
                - "Mark any condition left to the investor's discretion"
                - "Propose a shorter no-shop and a defined diligence list"
                - "Enter the agreed exclusivity end date in the deadline calendar"
            - name: 48-hour plan for the first term sheet
              description: |-
                ## Purpose
                The first term sheet arrives after weeks of meetings, often with a call from a partner who wants a quick yes. A 48-hour plan prepared in advance (thank them, read it with your lawyer, run the numbers, tell other investors in process) means excitement does not lead to a signature before anyone has read clause twelve.

                ## Milestones
                1. The lead thanked within hours, without accepting or rejecting.
                2. Your lawyer's first read received within 24 hours.
                3. The offer entered in the comparison grid and the waterfall.
                4. Other investors in process told that a term sheet has arrived and given a date to respond.
                5. A reply strategy agreed with co-founders within 48 hours.
              priority: high
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "Within 48 hours of the first term sheet, a lawyer's read, a grid entry, a waterfall and a founder-agreed reply strategy all exist."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Write the short thank-you note you will send when the term sheet lands"
                - "Agree with your lawyer that they will read any term sheet within 24 hours"
                - "Draft the note telling other investors in process an offer has arrived"
                - "Block a 90-minute founder meeting for the day after it arrives"
            - name: Exploding term sheet response
              description: |-
                ## Purpose
                An exploding term sheet expires in a day or two, designed to stop you collecting rival offers. Knowing in advance how you will respond, whether by asking for a reasonable extension, speeding up other investors or walking away, removes the panic and keeps the decision yours.

                ## Milestones
                1. A standard request for a reasonable extension drafted.
                2. A list of investors you would ask to speed up, with the step each still needs.
                3. A rule written for when you would sign without competing offers.
                4. Your lawyer's view on the minimum time needed for a proper read recorded.
              priority: high
              deadlineOffsetDays: 14
              frontmatter:
                mode: event
                output_kind: decision
                success_criteria: "A drafted extension request, an acceleration list and a written sign-or-wait rule exist before any short-dated offer arrives."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Draft a polite request for a one-week extension"
                - "List investors you would ask to accelerate and what each needs"
                - "Write the rule for when you would sign without a rival offer"
                - "Ask your lawyer the minimum time they need for a proper read"
            - name: Negotiation call preparation pack
              description: |-
                ## Purpose
                Negotiation calls with a lead partner are short and fast, and the founder who arrives with a one-page brief usually ends the call with more agreed. A standard pack covering the three issues to settle, your positions and fallbacks, what you will give and what you will not discuss takes twenty minutes to fill in and changes how the call goes.

                ## Milestones
                1. A one-page call brief format with issues, positions, fallbacks, gives and topics to avoid.
                2. A brief filled in before every negotiation call.
                3. Notes taken during each call and sent to your lawyer the same day.
                4. A written recap of agreed points sent to the investor after each call.

                ## Notes
                Start from the **Meeting notes** template. Send the written recap yourself; whoever writes the summary shapes what was agreed.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A one-page call brief exists and has been filled in, and followed by a written recap to the investor, for at least one negotiation call."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Draft a one-page call brief with issues, positions, fallbacks and gives"
                - "Fill in the brief before the next negotiation call"
                - "Send your call notes to your lawyer the same day"
                - "Email the investor a written recap of agreed points after each call"
            - name: Board approval to sign the term sheet
              description: |-
                ## Purpose
                If you have an existing board or investors with consent rights, accepting a new term sheet usually needs their approval, and some will have views on price and terms. A short board paper with the recommendation, the grid and the waterfall, sent with time for questions, avoids a last-minute objection after you have told the lead yes.

                ## Milestones
                1. Your lawyer's confirmation of which approvals are needed to sign the term sheet.
                2. A board paper with the recommendation, comparison grid, waterfall and key risks.
                3. Each director briefed individually before the meeting.
                4. The approval minuted or given in writing.
              priority: medium
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "Written or minuted board approval to sign the term sheet, given after a board paper with recommendation, grid and waterfall."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Ask your lawyer which approvals are needed before signing"
                - "Write a two-page board paper with the recommendation and risks"
                - "Brief each director by phone before the meeting"
                - "Get the approval minuted or confirmed in writing"
            - name: Declining the other term sheets gracefully
              description: |-
                ## Purpose
                How you turn down an investor who offered terms affects whether they back you next round, refer other founders or speak well of you to their partners. A prompt, honest call followed by a short note, made only after the chosen term sheet is signed, keeps the relationship worth having.

                ## Milestones
                1. A list of every investor who offered or came close to offering.
                2. A call made to each within two days of signing the chosen term sheet.
                3. A short follow-up note sent with thanks and an offer to keep in touch.
                4. Each declined investor's details and comments saved for the next round.

                ## Notes
                Start from the **Person** template. Use one record per investor worth keeping warm, and do not share the winning terms unless you are free to and it helps.
              priority: low
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "Every investor who offered terms received a call and a note within two days of signing, with their details saved for the next round."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "List every investor who offered or nearly offered terms"
                - "Call each one within two days of signing"
                - "Send a short thank-you note after each call"
                - "Save each investor's feedback for your next round"
            - name: Signing the term sheet and handover to closing
              description: |-
                ## Purpose
                A signed term sheet is the starting gun for weeks of legal documents, diligence and conditions, and points left vague now become arguments later. Signing after a final check against the issues list, and handing a clean summary to whoever runs the closing, carries what you won in negotiation into the definitive documents.

                ## Milestones
                1. The final term sheet checked line by line against the closed issues list.
                2. Binding and non-binding clauses confirmed with your lawyer.
                3. The term sheet signed by all required parties and filed.
                4. A one-page summary of agreed terms and side understandings handed to the closing lead.
                5. The exclusivity end date and any closing deadline entered in the calendar.
              priority: medium
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "The signed term sheet matches the closed issues list, and a one-page summary of agreed terms has been handed to the closing lead."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Check the final draft line by line against the closed issues list"
                - "Ask your lawyer which clauses are binding and which are not"
                - "Sign and file the term sheet with all signatures"
                - "Hand a one-page summary of agreed terms to the closing lead"
            - name: Solo founder negotiating without a co-founder
              description: |-
                ## Purpose
                Without a co-founder there is nobody to play the second voice, check your reading of a call or tell you that you are about to give too much away. A solo founder can rebuild that support with a named adviser, a lawyer briefed to push back, and a firm rule of never agreeing anything on the call itself.

                ## Milestones
                1. One experienced adviser agreed to be your sounding board for the negotiation.
                2. A rule written and stated to investors: no terms agreed on the call, replies in writing within a day.
                3. Your lawyer briefed to raise points you find hard to raise yourself.
                4. A weekly debrief held with the adviser throughout the negotiation.
              priority: medium
              frontmatter:
                mode: building
                output_kind: habit
                success_criteria: "A named adviser, a written no-agreement-on-the-call rule and a weekly adviser debrief were in place throughout the negotiation."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Ask one experienced founder or angel to be your sounding board"
                - "Write your rule that no term is agreed on a live call"
                - "Brief your lawyer on points you want them to raise for you"
                - "Hold a weekly debrief with your adviser during the negotiation @recurring(weekly:thu)"
            - name: Founder parent negotiating on a protected timetable
              description: |-
                ## Purpose
                Negotiations rarely respect school runs, bedtimes or a partner's shifts, and investors often push urgency late in the evening. Founders with children or caring duties can set call windows, a 24-hour reply rule and backup at home for the final week, so decisions are made rested rather than at midnight.

                ## Milestones
                1. Fixed windows for negotiation calls agreed and shared with the lead.
                2. A 24-hour written reply rule stated to investors at the start.
                3. Childcare or care cover arranged for the expected signing week.
                4. No term agreed outside the agreed windows.
              priority: low
              frontmatter:
                mode: building
                output_kind: habit
                success_criteria: "Call windows and a 24-hour reply rule were stated to the lead and held, with care cover arranged for signing week."
                cadence: phased
                effort_hours_estimate: "2"
              tasks:
                - "Choose two daily windows when you will take negotiation calls"
                - "Tell the lead your call windows and 24-hour reply rule"
                - "Arrange childcare or care cover for the likely signing week"
                - "Check next week's negotiation calls against family commitments @recurring(weekly:sun)"
            - name: Single term sheet with no competing offer
              description: |-
                ## Purpose
                One term sheet and no backup is the most common position for first-time founders, and the instinct is to sign whatever arrives. You still have some bargaining power, because the investor has spent weeks on the deal and wants it, so a few well-chosen asks on the terms that matter most, raised politely, often succeed where a fight on everything would not.

                ## Milestones
                1. Your runway and real alternatives written down honestly.
                2. No more than three asks chosen from your must-have list.
                3. Each ask framed with a reason grounded in the benchmark.
                4. The investor's response to each ask recorded and a sign decision made.
              priority: medium
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A sign decision recorded after at most three benchmark-backed asks were made to the sole investor and their answers logged."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Write your runway and real alternatives honestly on one page"
                - "Pick no more than three asks from your must-have list"
                - "Back each ask with a figure from your terms benchmark"
                - "Record the investor's answer to each ask"
            - name: Insider-led round terms from existing investors
              description: |-
                ## Purpose
                When existing investors lead a round themselves, there is no outside price to test the terms against, and the people setting the price may also sit on your board. A fair process, with an outside benchmark, input from independent directors or other shareholders, and room to accept outside money on the same terms, protects founders and minority holders.

                ## Milestones
                1. The conflict of interest acknowledged and the approval process agreed with your lawyer.
                2. Price and terms tested against your benchmark or an outside indication.
                3. A decision made on whether other shareholders can participate on the same terms.
                4. Board approval given, with conflicted directors handling their interest as your lawyer advises.

                ## Notes
                Insider rounds at a lower price, with recapitalisation, have their own area. This one covers ordinary insider-led rounds and extensions.
              priority: low
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "An insider-led term sheet approved through a process your lawyer has confirmed, with terms checked against an outside benchmark."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Ask your lawyer how conflicted directors should handle approval"
                - "Test the insider price against your benchmark or an outside view"
                - "Decide whether other shareholders can join on the same terms"
                - "Record the board's approval and how conflicts were handled"
            - name: Cross-border lead investor and governing law
              description: |-
                ## Purpose
                Cross-border leads often send a term sheet in their home country's format, with its law, share classes and expectations, which may not fit your company's jurisdiction. Spotting the mismatches early, including any request to move the parent company abroad, saves weeks of rework and an expensive surprise at closing.

                ## Milestones
                1. The governing law, jurisdiction and template the lead proposes identified.
                2. Terms that do not translate into your company's jurisdiction listed by your lawyer.
                3. Any request to reorganise the company into another country noted, with its tax and cost implications from an adviser.
                4. An agreed approach on law, documents and currency written into the term sheet.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A term sheet with governing law, document template and currency agreed, after your lawyer has listed every term that does not translate."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Note the governing law and template the lead's term sheet uses"
                - "Ask your lawyer which terms do not work in your jurisdiction"
                - "Get adviser input on the cost of any proposed move of the parent company"
                - "Agree the law, documents and currency in writing"
            - name: Second-time founder negotiating from a track record
              description: |-
                ## Purpose
                Having built and sold, or wound down, a company before changes what you can ask for: investors price in your record, and some terms written for unknown founders are open to discussion. Writing down what your track record genuinely supports, and what it does not, keeps the ask confident without overreaching.

                ## Milestones
                1. Your track record summarised as facts: outcomes, capital returned, team members who followed you.
                2. Terms that experienced founders commonly negotiate, such as vesting credit or board structure, listed.
                3. Three asks chosen that your record supports.
                4. Lessons from your previous term sheet written down.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "Three track-record-backed asks chosen and raised, with lessons from your previous term sheet written down beforehand."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Write your previous company's outcomes as plain facts"
                - "List the lessons from the last term sheet you signed"
                - "Choose three asks your track record genuinely supports"
                - "Test the asks with your lawyer before raising them"
            - name: Participating preferred and multiple preferences
              description: |-
                ## Purpose
                Participation lets an investor take its preference and then share in what is left, and a multiple above one times repays two or three times the money before anyone else. These structures appear more in tight markets and rescue rounds, and caps, sunsets and conversion thresholds can blunt them when outright removal fails.

                ## Milestones
                1. Every participation feature and preference multiple in the offers identified.
                2. The effect modelled at five exit values in the waterfall.
                3. Fallbacks listed: a participation cap, a sunset after a set exit value or time, conversion triggers.
                4. A written response agreed with your lawyer and sent.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "Any participation or preference multiple in the offers modelled at five exit values, with a written response and fallback sent."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Mark any participation or multiple above one times in each offer"
                - "Add the structure to the waterfall at five exit values"
                - "List fallbacks such as a participation cap or a sunset"
                - "Send a written response agreed with your lawyer"
            - name: Strategic investor clauses on sale and commercial rights
              description: |-
                ## Purpose
                Corporate investors sometimes ask for rights a financial fund would not: notice or first refusal on a sale of the company, exclusivity in a market, or commercial terms tied to the investment. These can put off other buyers and investors later, so each one needs to be priced, narrowed or kept out of the term sheet entirely.

                ## Milestones
                1. Every strategic clause in the offer listed: sale notice, first refusal, exclusivity, commercial ties.
                2. The effect of each on a future sale process discussed with your lawyer or a banker.
                3. A response for each: remove, narrow, time-limit or accept at a price.
                4. Commercial agreements kept in separate documents from the investment terms.

                ## Notes
                Whether to take corporate money at all belongs in its own area. This project handles the clauses once an offer exists.
              priority: low
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "Every strategic clause in a corporate investor's term sheet has a written response, with commercial terms moved into separate documents."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "List every sale, exclusivity and commercial clause in the corporate offer"
                - "Ask your lawyer how each could affect a future sale"
                - "Propose removing, narrowing or time-limiting each clause"
                - "Move commercial terms into a separate agreement"
            - name: Tranched investment and milestone conditions
              description: |-
                ## Purpose
                Tranched rounds release money in stages as milestones are hit, which can look like a bigger round while leaving the investor free to stop funding. Defining milestones the company controls, with objective tests and a deadline for the investor's decision, makes the second tranche something you can plan around.

                ## Milestones
                1. Every tranche, amount and milestone in the offer written down.
                2. Each milestone tested as objective, measurable and within the company's control.
                3. What happens if a milestone is missed, or the investor declines to fund, clarified in writing.
                4. Runway planned on the first tranche alone.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "Each tranche milestone is objective and in the company's control, with the consequence of a missed milestone written in the term sheet."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "List each tranche with its amount, milestone and date"
                - "Rewrite any milestone that is vague or outside your control"
                - "Ask what happens if the investor declines the second tranche"
                - "Build the runway plan on the first tranche only"
            - name: Side letters and most favoured nation clauses
              description: |-
                ## Purpose
                Side letters give individual investors extra rights outside the main documents, and a most favoured nation clause promises one investor any better terms later given to another. Tracking both from the term sheet stage stops a promise to one angel from cascading into a concession to everyone.

                ## Milestones
                1. Every side letter request and most favoured nation clause in the round listed.
                2. Each one checked against what the lead has agreed.
                3. Requests accepted, narrowed or refused in writing.
                4. Agreed side letters added to the register of investor rights.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Every side letter and most favoured nation clause in the round listed, answered in writing and added to the investor rights register."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "List every side letter request and favoured terms clause"
                - "Check each request against what the lead has agreed"
                - "Reply to each side letter request in writing"
                - "Add agreed side letters to the investor rights register"
            - name: Term sheet post-mortem and personal playbook
              description: |-
                ## Purpose
                Every fundraise teaches lessons that fade within a month of the money arriving. A short post-mortem on what you won, what you gave too easily and what you would prepare differently becomes a personal playbook that makes the next negotiation faster and calmer.

                ## Milestones
                1. A post-mortem written within four weeks of signing.
                2. Three terms you would negotiate differently named, with reasons.
                3. Your must-have list and benchmark updated with what you learned.
                4. A two-page playbook ready for the next round.
              priority: medium
              deadlineOffsetDays: 60
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A two-page playbook, based on a post-mortem written within four weeks of signing, saved alongside an updated must-have list and benchmark."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Book an hour within four weeks of signing for a post-mortem"
                - "Name three terms you would negotiate differently and why"
                - "Update the must-have list and benchmark with what you learned"
                - "Ask the agent to draft a two-page playbook from your post-mortem notes"
                - "Reread your playbook before any new fundraise @recurring(yearly)"
---

# Term Sheet Negotiation

This area is for founders holding, or about to receive, a term sheet who want to negotiate it with their eyes open rather than sign the first draft. It starts with the foundations (a glossary, a venture lawyer, the ownership maths, a market benchmark and your must-have list), then the machinery of a live negotiation, the mechanics of preferences, anti-dilution, vetoes, board control and vesting, the specific clauses worth negotiating, the dated moments from the first offer to signing, variants for solo, parent, single-offer, insider-led, cross-border and repeat founders, and finally the structured and strategic terms experienced founders meet.

What repeats during a negotiation is a daily issues list update and deadline check, twice-weekly lawyer calls, a Monday co-founder check, a Wednesday concession review and a Friday update to the board, with a monthly market terms log and quarterly checks of the rights you granted once the deal is signed. The Vendor, Reading queue, Meeting notes and Person templates pair with the projects that name them. Installing adds all 50 projects as active, so archive the ones that are not for you yet.
