---
id: fundraising-investors.secondary-share-sales-liquidity
name: Secondary Share Sales & Liquidity
description: "Liquidity goals, transfer rules and approvals in place, then the routines and decisions to run tender offers and direct secondary sales cleanly for founders, staff and early backers."
category: business
version: 1.0.0
tags: [fundraising-investors, secondary-share-sales-liquidity, founder, manager, tender-offer, secondary-sales, employee-liquidity, transfer-restrictions]
author: Aurum Technology
starter_structure:
  templates:
    - board-meeting
    - risk-register
    - operational-checklist
    - vendor
    - meeting-notes
  pillars:
    - name: Fundraising & Investor Relations
      emoji: "💰"
      description: "Raising capital and keeping investors informed: rounds from pre-seed to growth, grants and debt, the data room, cap table, investor updates, board reporting and exits."
      pillarFrontmatter:
        review_cadence: quarterly
      areas:
        - name: Secondary Share Sales & Liquidity
          description: "Arranging secondary sales and tender offers so founders, employees and early investors can sell some shares before an exit."
          projects:
            - name: Liquidity goals and seller demand survey
              description: |-
                ## Purpose
                Before anyone talks to a buyer, you need to know who actually wants to sell, roughly how much, and why. A short confidential survey of founders, long-serving employees and early investors turns rumour into a demand figure, and it shows whether you are looking at a single founder sale, a handful of angels or a company-wide tender offer.

                ## Milestones
                1. A written statement of what the company wants a liquidity event to achieve, such as retention, founder security or a tidier cap table.
                2. A confidential, non-binding survey sent to eligible holders asking whether they would sell and roughly what share of their holding.
                3. Responses summarised as total shares and approximate value by holder group, with no names in the summary.
                4. A recommendation on whether demand justifies a direct sale, a tender offer or no action this year.

                ## Notes
                Ask counsel to check the survey wording before it goes out, so it cannot be read as an offer to buy or a promise of liquidity.

                Before you start: this plan is general information to help you organise your own money decisions. It is not financial, investment, tax or legal advice. Check decisions that matter with a qualified, licensed adviser in your country, and remember that investing and trading can lose money.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A summary of seller demand by holder group, with a recommended next step, is presented to the board within 30 days of starting."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Write three sentences on why the company wants to offer liquidity now"
                - "Ask counsel to confirm the survey wording is clearly non-binding"
                - "Send the confidential interest survey to eligible holders"
                - "Summarise demand by holder group without naming individuals"
            - name: Transfer restriction inventory across company documents
              description: |-
                ## Purpose
                Most private companies restrict share transfers in several places at once: the articles or bylaws, the shareholders agreement, a refusal and co-sale agreement, the option plan and individual grant letters. Pulling every restriction into one table, with its clause reference, stops a sale being agreed that the documents never allowed.

                ## Milestones
                1. Every constitutional document, investor agreement and equity plan that touches transfers collected in one folder.
                2. A table listing each restriction, its clause reference, who benefits and the notice period it requires.
                3. Conflicts or gaps between documents flagged for counsel.
                4. Counsel's comments recorded and the table marked as reviewed with a date.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: research
                output_kind: artifact
                success_criteria: "A transfer restriction table covering every relevant document, reviewed by counsel and dated, is saved in the legal folder."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "List every document that might restrict a share transfer"
                - "Pull each transfer clause into one table with its reference"
                - "Note the notice period and beneficiary for each restriction"
                - "Send the table to counsel for review and a dated sign-off"
            - name: Board-approved secondary transfer policy
              description: |-
                ## Purpose
                Without a written policy, every request to sell becomes a one-off negotiation, and employees learn that the answer depends on who asks. A short board-approved policy says when transfers are considered, which buyers are acceptable, what minimum sizes apply and how the company uses its refusal right, so answers are consistent and quick.

                ## Milestones
                1. A two-page policy covering eligibility, timing, approved buyers, minimum sizes and how refusal rights are used.
                2. Comments from counsel and the investor directors resolved.
                3. The policy approved by the board and minuted.
                4. The approved policy shared with every shareholder who is able to sell.

                ## Notes
                Start from the **Board meeting** template for the approval paper. Keep the policy itself short; procedures and forms can sit behind it.
              priority: high
              deadlineOffsetDays: 60
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A secondary transfer policy approved by the board is in the minutes and has been sent to every eligible shareholder."
                cadence: one-shot
                effort_hours_estimate: "10"
              tasks:
                - "Draft the policy headings: eligibility, buyers, sizes, timing and refusal rights"
                - "Ask the agent to turn the transfer restriction table into a first policy draft"
                - "Circulate the draft to counsel and the investor directors"
                - "Table the policy for board approval"
                - "Review the transfer policy with the board each year @recurring(yearly)"
            - name: Eligible holdings list for a liquidity event
              description: |-
                ## Purpose
                Sellers can only sell shares they own outright, which excludes unvested options and, in most structures, options that have not been exercised. Drawing an eligibility list from the cap table, with share class, vested and exercised amounts for each holder, shows the real pool of saleable shares before anyone sets a size.

                ## Milestones
                1. A dated snapshot of the cap table frozen for the exercise.
                2. Each holder marked with share class, vested amount and exercised amount.
                3. Former employees with exercised shares shown as a separate group.
                4. A total of potentially saleable shares by class and holder group.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "An eligibility list dated to one cap table snapshot shows saleable shares by class and holder group, checked by finance."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Export a dated snapshot of the cap table"
                - "Mark each holder's vested, exercised and unvested amounts"
                - "Group former employees separately from current staff"
                - "Total the saleable shares by class and holder group"
            - name: Choosing between a direct sale, tender offer or buyback
              description: |-
                ## Purpose
                Three structures cover most private liquidity: individual holders selling directly to an approved buyer, a company-run tender offer open to a defined group, and the company buying shares back with its own cash. Each has different costs, approval steps, tax and securities questions and effects on the cap table, so the choice deserves a written comparison rather than a default.

                ## Milestones
                1. A one-page comparison of the three structures on cost, approvals, timetable, tax questions and cap table effect.
                2. Comments from counsel and the tax adviser added to the comparison.
                3. A preferred structure chosen with the reasons written down.
                4. The decision minuted by the board or recorded by the founders.
              priority: high
              deadlineOffsetDays: 45
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A written comparison of the three structures exists, with the chosen structure and its reasons recorded in board minutes."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Set out the three structures side by side on one page"
                - "Ask counsel which approvals each structure would need"
                - "Ask the tax adviser which questions each structure raises for sellers"
                - "Record the chosen structure and the reasons for it"
            - name: Approvals and waivers map for a share transfer
              description: |-
                ## Purpose
                A single sale can need board consent, a preferred majority vote, waivers of the company's and investors' refusal and co-sale rights, and sometimes lender consent under a debt facility. Mapping who must sign what, and in what order, is the difference between a two-week and a two-month completion.

                ## Milestones
                1. Every consent, waiver and notice a transfer could need listed with the document that requires it.
                2. Named signatories and their usual turnaround time noted for each.
                3. Template consent and waiver wording obtained from counsel.
                4. A sequenced approval checklist ready to reuse on the next transfer.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A sequenced approvals checklist with named signatories and counsel-approved waiver wording is saved and ready for the next transfer."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "List each consent and waiver a transfer could require"
                - "Check the debt facility for any lender consent on share transfers"
                - "Get template waiver and consent wording from counsel"
                - "Put the approvals into the order they must be signed"
            - name: Engaging counsel and a tax adviser for the secondary
              description: |-
                ## Purpose
                Secondary sales touch corporate law, securities rules and personal tax at the same time, and the company's usual lawyer may run very few of them. Agreeing scope and fees with counsel who has done tender offers, and with a tax adviser who can brief sellers in general terms, avoids surprises once a buyer is waiting.

                ## Milestones
                1. Two or three law firms asked about their recent secondary and tender offer work.
                2. An engagement letter signed with scope, fee estimate and who pays.
                3. A tax adviser identified who can prepare a general note for sellers.
                4. Clear written agreement on whether sellers or the company bear each adviser cost.
              priority: medium
              deadlineOffsetDays: 21
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "Signed engagement letters with counsel and a tax adviser set out scope, fee estimates and who pays each cost."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Ask your current counsel how many secondaries they handled last year"
                - "Request fee estimates from two firms with tender offer experience"
                - "Agree in writing whether sellers or the company pay adviser costs"
                - "Sign the engagement letters with the chosen counsel and tax adviser"
            - name: Buyer information pack and confidentiality terms
              description: |-
                ## Purpose
                Buyers will ask for financial statements, the latest board deck, the cap table and the charter before pricing anything, and every document shared outside the investor base is a leak risk. Deciding in advance what a secondary buyer may see, under which confidentiality agreement and through which data room folder, keeps disclosure consistent from one buyer to the next.

                ## Milestones
                1. A tiered list of what buyers see before and after signing a confidentiality agreement.
                2. A standard confidentiality agreement for secondary buyers approved by counsel.
                3. A separate data room folder for secondary buyers with access logging switched on.
                4. A written rule that sellers may not pass company information directly to buyers.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A tiered disclosure list, an approved buyer NDA and a logged buyer folder exist, and sellers have the no-sharing rule in writing."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Decide which documents buyers see before and after an NDA"
                - "Get a standard secondary buyer NDA approved by counsel"
                - "Set up a logged data room folder just for secondary buyers"
                - "Tell sellers in writing not to pass company documents to buyers"
            - name: Liquidity programme risk register
              description: |-
                ## Purpose
                Every secondary carries risks that are easy to miss in the excitement: a low price dragging down the next common share valuation, key people selling and then leaving, an unwelcome buyer joining the register, or a breach of securities rules. A short register with an owner and a mitigation for each risk gives the board something concrete to review.

                ## Milestones
                1. A register listing the main risks of the liquidity programme.
                2. An owner, likelihood, impact and mitigation recorded for each risk.
                3. The register reviewed alongside each board pack.
                4. Closed risks kept with a note of how they were resolved.

                ## Notes
                Start from the **Risk register** template. Retention risk is the one most often left off: ask who would leave if they sold half their shares.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: artifact
                success_criteria: "A liquidity risk register with an owner and mitigation for every risk has been reviewed with at least two consecutive board packs."
                cadence: rolling
              tasks:
                - "Create the liquidity risk register from the template"
                - "Add the five risks the board would worry about most"
                - "Assign an owner and a mitigation to each risk"
                - "Review the liquidity risk register before each board meeting @recurring(quarterly)"
            - name: Inbound share sale request triage
              description: |-
                ## Purpose
                Requests to sell arrive by email, in one-to-ones and through brokers, and a slow or inconsistent reply is how employees end up signing side deals the company never sees. A single inbox, an acknowledgement within a few days and a standard first reply pointing to the policy keep every request visible and handled the same way.

                ## Milestones
                1. One named inbox or form for every request to sell shares.
                2. A standard acknowledgement that explains the policy and next steps.
                3. Every request logged with date, holder, share class and amount.
                4. No request left without a reply for more than five working days.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every share sale request in the last quarter is logged and was acknowledged within five working days."
                cadence: rolling
              tasks:
                - "Set up a single inbox or form for share sale requests"
                - "Write the standard acknowledgement that points to the transfer policy"
                - "Review the request inbox and reply to each new request @recurring(weekly:tue)"
                - "Send a summary of open requests to the finance lead @recurring(monthly:5)"
            - name: Right of first refusal notice tracker
              description: |-
                ## Purpose
                Once a holder serves a transfer notice, the company and often the investors have a fixed number of days to exercise or waive their refusal right, and letting the period lapse can waive it by default. A tracker with notice date, expiry date and decision owner protects rights the company may want to use.

                ## Milestones
                1. A tracker listing each notice received, its expiry date and the decision owner.
                2. Investors holding secondary refusal rights notified within the period the agreement sets.
                3. Each notice closed with a recorded exercise or a signed waiver.
                4. No refusal period missed in twelve months.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every transfer notice in the last twelve months closed with a recorded exercise or signed waiver before its expiry date."
                cadence: rolling
              tasks:
                - "Build a tracker with notice date, expiry date and decision owner"
                - "Add calendar reminders five days before each expiry"
                - "Check open refusal notices against their expiry dates @recurring(weekly:thu)"
                - "File every exercise or waiver with the transfer record"
            - name: Secondary transfer register and evidence file
              description: |-
                ## Purpose
                Each completed transfer changes the register of members, may need a transfer tax return in some countries, and must leave a clean trail for the next round's diligence. A register of secondary transfers with price, date and buyer, linked to the signed documents, makes that trail complete.

                ## Milestones
                1. A transfer register with date, seller, buyer, class, number of shares and price per share.
                2. Signed transfer forms, waivers and board consents linked to every entry.
                3. The register reconciled with the cap table and the statutory register.
                4. A clean report of all secondary transfers producible in under an hour.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every secondary transfer since the last round is in the register with linked documents and matches the cap table."
                cadence: rolling
              tasks:
                - "Set up the transfer register columns"
                - "Back-fill every secondary transfer since the last round"
                - "Link each entry to its signed transfer documents"
                - "Reconcile the transfer register with the cap table @recurring(monthly:12)"
            - name: Broker and marketplace approach log
              description: |-
                ## Purpose
                Secondary brokers and online marketplaces regularly contact employees and early investors directly, sometimes offering structures that sidestep the company's transfer rules. Logging every approach the company hears about shows which intermediaries are circling, what prices they quote and whether shareholders need a reminder of the rules.

                ## Milestones
                1. A log of approaches with date, intermediary, who was contacted and any price mentioned.
                2. A short note to staff asking them to forward approaches rather than reply.
                3. Repeat intermediaries identified and a company response agreed for each.
                4. Quoted prices passed to the secondary price tracker.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Six months of broker approaches are logged with quoted prices, and a standard company reply is in use."
                cadence: rolling
              tasks:
                - "Create the approach log with date, intermediary and quoted price"
                - "Ask staff to forward any broker approach to the request inbox"
                - "Agree a standard reply to unsolicited broker approaches"
                - "Review the approach log for repeat intermediaries @recurring(monthly:20)"
            - name: Annual liquidity window calendar
              description: |-
                ## Purpose
                Companies that allow secondaries at any time spend all year on transfers and give buyers a steady drip of information. Fixing one or two windows a year, timed after the audited accounts or a board meeting, concentrates the work, simplifies valuation questions and gives employees a date to plan around.

                ## Milestones
                1. The number of windows per year agreed by the board.
                2. Window dates set to follow accounts or board meetings and avoid fundraising periods.
                3. Dates published to eligible holders at least two months ahead.
                4. Requests outside a window referred to the next one unless the policy allows an exception.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "The next twelve months' liquidity windows are approved by the board and were published to eligible holders two months ahead."
                cadence: cyclic
              tasks:
                - "Propose one or two window dates tied to the reporting calendar"
                - "Check the dates avoid any planned fundraising period"
                - "Publish the next window dates to eligible holders"
                - "Set next year's liquidity window dates at the year-end board meeting @recurring(yearly)"
            - name: Secondary price tracker against recent rounds
              description: |-
                ## Purpose
                Prices paid in secondaries tell the board how buyers see the company, and a pattern of deep discounts is a warning sign before the next round. A tracker of every trade, bid and broker indication, set against the last preferred price and the latest common valuation, makes that pattern visible.

                ## Milestones
                1. Every secondary price and serious quote from the last two years in one table.
                2. Each shown as a discount or premium to the last preferred price.
                3. The latest common share valuation shown alongside.
                4. A short trend comment written each quarter for the board note.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: knowledge
                success_criteria: "A price tracker covering two years of trades and quotes, with discount to preferred shown, is updated each quarter."
                cadence: rolling
              tasks:
                - "List every secondary price and quote from the last two years"
                - "Show each as a discount or premium to the last preferred price"
                - "Add the latest common share valuation for comparison"
                - "Update the price tracker with new trades and quotes @recurring(quarterly)"
            - name: Shareholder liquidity FAQ
              description: |-
                ## Purpose
                Employees hear stories about colleagues at other companies selling shares and assume either that they can sell any time or never. A plain-language FAQ covering the policy, the windows, how to ask, and what the exercise and tax steps involve answers most questions before they turn into requests.

                ## Milestones
                1. An FAQ of 15 to 25 questions checked by counsel.
                2. Links to the transfer policy and the window calendar included.
                3. The FAQ published where employees already find equity information.
                4. Questions that keep arriving added at each refresh.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A counsel-checked liquidity FAQ of at least 15 questions is published beside the equity plan documents and refreshed yearly."
                cadence: cyclic
              tasks:
                - "Ask the agent to draft an FAQ from the transfer policy"
                - "Have counsel check the FAQ for anything that reads as advice"
                - "Publish the FAQ beside the equity plan documents"
                - "Refresh the liquidity FAQ with new questions @recurring(yearly)"
            - name: Quarterly board note on secondary activity
              description: |-
                ## Purpose
                Directors need to know which shares changed hands, at what prices and to whom, both for oversight and because transfers can shift voting thresholds. A one-page note each quarter, drawn from the transfer register and price tracker, keeps the board informed without a long agenda item.

                ## Milestones
                1. A one-page format covering transfers, prices, refusal decisions and open requests.
                2. The note included in each quarterly board pack.
                3. Any holder crossing a voting or reporting threshold flagged.
                4. Board questions and decisions on secondaries recorded in the minutes.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Four consecutive board packs each include the one-page secondary activity note."
                cadence: cyclic
              tasks:
                - "Design the one-page secondary activity note"
                - "Pull transfers and prices from the register and tracker"
                - "Flag any holder crossing a voting or reporting threshold"
                - "Send the secondary note with the board pack @recurring(quarterly)"
            - name: Post-transfer filings and certificate checklist
              description: |-
                ## Purpose
                After money moves, the job is not finished until the register is updated, old certificates are cancelled and new ones issued, any companies registry filing is made and any transfer tax is paid. A reusable checklist means the steps happen in the same order every time, whoever runs them.

                ## Milestones
                1. A checklist covering register update, certificates, registry filings, transfer tax and notices to holders.
                2. The filings and taxes that apply in your jurisdiction confirmed by counsel.
                3. The checklist tested on the most recent transfer.
                4. Every transfer in the year closed out against the checklist.

                ## Notes
                Start from the **Operational checklist** template. Filing and transfer tax rules differ widely between countries, so ask counsel rather than copying another company's list.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every transfer completed in the last year has a closed checklist showing register, certificate, filing and tax steps done."
                cadence: rolling
              tasks:
                - "Create the post-transfer checklist from the template"
                - "Confirm with counsel which registry filings and transfer taxes apply"
                - "Run the checklist on the most recent transfer as a test"
                - "Review the checklist against any rule changes from counsel @recurring(yearly)"
            - name: Former employee shareholder contact list
              description: |-
                ## Purpose
                Former employees often make up a large share of sellers in a tender, yet their work email stops working the day they leave. Keeping personal contact details for every leaver who holds shares means offer notices reach everyone entitled to them, which matters for fairness and often for securities rules.

                ## Milestones
                1. Personal contact details collected at exit for every leaver who holds shares or vested options.
                2. Existing former holders traced and their details confirmed.
                3. The list stored securely with access limited to finance and legal.
                4. Details added each month for anyone who left.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every former employee who holds shares or vested options has a confirmed personal contact on a restricted-access list."
                cadence: rolling
              tasks:
                - "Add a personal email request to the leaver checklist"
                - "Trace current contact details for existing former holders"
                - "Restrict access to the contact list to finance and legal"
                - "Add contact details for anyone who left the company that month @recurring(monthly:28)"
            - name: How secondary share prices are set
              description: |-
                ## Purpose
                Secondary buyers usually price common shares below the last preferred round, because preferred shares carry liquidation preferences and other rights common shares lack. Understanding what drives the discount, from the preference stack to information access and deal size, lets founders and managers judge whether an offer is reasonable.

                ## Milestones
                1. The main drivers of the discount to preferred written down in plain words.
                2. The company's own preference stack summarised as it affects common holders.
                3. Two or three recent published reports on secondary pricing read and noted.
                4. A view on a reasonable price range discussed with a financial adviser or counsel.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A one-page note explains the discount drivers and the company's preference stack, and has been discussed with an adviser."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Read two recent published reports on secondary market pricing"
                - "Summarise the company's preference stack in one paragraph"
                - "List the factors that would widen or narrow the discount"
                - "Discuss a reasonable price range with a financial adviser"
            - name: Refusal, co-sale and drag-along rights in practice
              description: |-
                ## Purpose
                Refusal rights let the company or investors step in and buy shares on the same terms, co-sale rights let investors sell alongside a founder, and drag-along rights can force a sale at exit. Working through how each would operate on a real transfer, using your own documents, makes negotiations with buyers and investors much faster.

                ## Milestones
                1. Each right explained in two sentences using the company's own clause.
                2. A worked example of a founder sale showing the refusal and co-sale steps.
                3. Questions on how the rights interact sent to counsel.
                4. Counsel's answers saved beside the transfer restriction table.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A worked founder sale example using the company's own refusal and co-sale clauses is saved with counsel's answers attached."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Read the refusal and co-sale clauses in your investor agreements"
                - "Write a worked example of a founder selling 5 percent of their holding"
                - "Send counsel the questions the example raises"
                - "Save the answers next to the transfer restriction table"
            - name: Tax questions on secondary proceeds
              description: |-
                ## Purpose
                Selling shares can trigger capital gains tax, and selling shares just acquired through an option exercise raises separate questions about how the exercise itself is taxed. In some countries, a price above fair market value in a company-involved sale can be treated partly as employment income. Preparing the questions for a tax adviser, rather than guessing, protects sellers from a bill they did not expect.

                ## Milestones
                1. Holder types listed: founders, employees with exercised shares, employees exercising to sell, and investors.
                2. Questions for each type written for the tax adviser.
                3. A general note from the adviser that sellers may read, recommending personal advice.
                4. Sellers told in writing that the company does not give personal tax advice.

                ## Notes
                This project organises questions. Only a qualified tax adviser can answer them for a particular seller.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A general tax note from a qualified adviser, covering each holder type, is available to sellers before any offer opens."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "List the share and option types sellers hold"
                - "Write the questions each type raises for the tax adviser"
                - "Ask the adviser for a general note sellers can read"
                - "Ask your adviser each year whether rule changes affect the note @recurring(yearly)"
            - name: Securities rules for private share sales
              description: |-
                ## Purpose
                Private share sales usually rely on exemptions from securities registration, and those exemptions limit who may buy and how the offer may be made. A company-sponsored offer to many holders can also fall under tender offer rules in some jurisdictions, with minimum offer periods and disclosure duties. Learning the right questions to ask counsel prevents an offer being structured in a way that later has to be unwound.

                ## Milestones
                1. The exemption the company relies on for secondary sales identified with counsel.
                2. Buyer eligibility requirements written in plain words.
                3. Whether a planned offer could count as a tender offer confirmed by counsel.
                4. Any minimum offer period or disclosure duty added to the timetable.

                ## Notes
                Rules differ by country and by where each holder lives. Treat this as a list of questions for counsel, not as conclusions.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Counsel has confirmed in writing which exemption applies, who may buy and whether tender offer rules apply to the planned offer."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Ask counsel which securities exemption covers secondary sales"
                - "Write down the buyer eligibility rules in plain words"
                - "Ask whether a company-wide offer would count as a tender offer"
                - "Add any required offer period to the liquidity calendar"
            - name: Secondary buyer landscape map
              description: |-
                ## Purpose
                Buyers range from existing investors topping up, to dedicated secondary funds, crossover funds, family offices and individuals buying through special purpose vehicles. Mapping who buys at your stage and size, and what each type usually asks for, lets you go to the right buyers first instead of whoever calls.

                ## Milestones
                1. Buyer types listed with typical cheque size and the information each asks for.
                2. Existing investors asked whether they want to buy more in a secondary.
                3. Five to ten named firms shortlisted that buy at your stage.
                4. Buyer types the company would decline, and why, written down.
              priority: medium
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A buyer map with at least five named firms at your stage, plus existing investors' stated appetite, is saved and shared with the board."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Ask each existing investor whether they would buy in a secondary"
                - "List secondary funds that bought at your stage in the last year"
                - "Note what each buyer type typically asks to see"
                - "Write down the buyer types the company will not accept"
                - "Add new buyers who approach the company to the map @recurring(monthly:16)"
            - name: Reading a secondary share purchase agreement
              description: |-
                ## Purpose
                The purchase agreement for a secondary covers price, the seller's warranties about title, conditions, any price adjustment and often a joinder to the shareholders agreement. Founders and managers who can read one clause by clause can spot when a buyer asks for warranties about the company that a selling shareholder should never give.

                ## Milestones
                1. A sample secondary purchase agreement read with each clause summarised.
                2. Seller warranties separated into title warranties and company warranties.
                3. Clauses the company must approve, such as joinders, identified.
                4. A one-page checklist ready for reviewing future agreements.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A one-page review checklist for secondary purchase agreements exists, built from a clause-by-clause read of a real sample."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Get a sample secondary purchase agreement from counsel"
                - "Summarise each clause in one line"
                - "Highlight any warranty about the company rather than the shares"
                - "Turn the summary into a one-page review checklist"
            - name: Equity basics session for tender participants
              description: |-
                ## Purpose
                Many employees cannot tell a vested option from an exercised share or say what exercising costs, yet a tender asks them to decide about both within a few weeks. A short session run by finance or people managers before an offer opens covers the mechanics, so the offer period is spent deciding rather than learning.

                ## Milestones
                1. A 30 minute session covering vesting, exercise, share classes and how a tender works.
                2. Slides reviewed by counsel so nothing reads as personal advice.
                3. A recording and slides available to anyone who missed it.
                4. Questions from each session added to the liquidity FAQ.
              priority: medium
              frontmatter:
                mode: service
                output_kind: deliverable
                success_criteria: "The equity basics session has run before the offer opens, with a recording available and attendance above half of eligible staff."
                cadence: cyclic
              tasks:
                - "Outline the session around vesting, exercise and share classes"
                - "Ask counsel to review the slides before the session"
                - "Run the session and share the recording"
                - "Run the equity basics session for recent joiners @recurring(quarterly)"
            - name: Selecting a tender agent or secondary platform
              description: |-
                ## Purpose
                Running a tender for more than a handful of sellers means collecting elections, checking identities, holding funds and paying out, and specialist tender agents and secondary platforms do this for a fee. Comparing two or three on cost, experience with your share structure and how they handle option exercises avoids choosing on a polished demo alone.

                ## Milestones
                1. Two or three providers shortlisted with fees and recent tender references.
                2. Each scored on cost, option exercise handling, cross-border sellers and reporting.
                3. References taken from two companies that used each finalist.
                4. A provider chosen and the engagement terms signed.

                ## Notes
                Start from the **Vendor** template for each provider so fees, contacts and contract terms sit in one place.
              priority: medium
              deadlineOffsetDays: 45
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A tender agent or platform is chosen from a scored shortlist of at least two, with references taken and terms signed."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Shortlist three tender agents or secondary platforms"
                - "Score each on fees, exercise handling and cross-border sellers"
                - "Call two companies that used each finalist"
                - "Sign the engagement with the chosen provider"
            - name: Setting the tender price and total size
              description: |-
                ## Purpose
                Price and size are the two numbers everyone remembers about a tender, and they interact: a higher price attracts more sellers and needs more cash, while a size cap protects the buyer and the cap table. Agreeing both with the buyer and the board, with the reasoning written down, prevents later arguments and gives the independent valuer a clear record.

                ## Milestones
                1. A price range proposed with reasoning set against the last round and recent secondaries.
                2. A total size agreed with the buyer as both a share count and a cash figure.
                3. The independent valuer told of the proposed price before it is fixed.
                4. Final price and size approved by the board and minuted.

                ## Notes
                A secondary price can feed into the next common share valuation used for option pricing. Ask the valuer how they will weigh it before the price is final, not after.
              priority: high
              deadlineOffsetDays: 60
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "Board minutes record the approved tender price and size, the reasoning behind them and the valuer's comments."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Put the proposed price beside the last round and recent trades"
                - "Agree the total share count and cash amount with the buyer"
                - "Ask the independent valuer how this price will be treated"
                - "Take the final price and size to the board for approval"
            - name: Participation rules for who may sell and how much
              description: |-
                ## Purpose
                Open-ended participation lets the earliest employees sell everything and walk away, while tight caps frustrate people who genuinely need the money. Eligibility rules on tenure, vested holdings and current or former status, plus a cap such as a percentage of vested shares, balance retention against fairness and must be set before the offer opens.

                ## Milestones
                1. Eligibility rules written for current employees, former employees, founders and investors.
                2. A per-person cap set as a percentage of vested or held shares.
                3. The effect of two cap levels modelled on the eligible holdings list.
                4. Rules approved by the board and written into the offer documents.
              priority: high
              deadlineOffsetDays: 60
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "Board-approved participation rules with a stated per-person cap appear in the offer documents before launch."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Draft eligibility rules for each holder group"
                - "Model two cap levels against the eligible holdings list"
                - "Check the rules treat similar holders the same way"
                - "Get board approval for the final participation rules"
            - name: Approved buyer criteria and vetting
              description: |-
                ## Purpose
                Whoever buys in a secondary joins the register and may gain information rights, so a competitor, a buyer with regulatory problems or a vehicle hiding dozens of investors can cause trouble for years. Written criteria and a short vetting step for each proposed buyer let the board approve or decline quickly and consistently.

                ## Milestones
                1. Criteria covering competitors, identity and sanctions checks, buyer structure and minimum size.
                2. A vetting form each proposed buyer completes.
                3. Identity and sanctions checks carried out through counsel or the tender agent.
                4. Each buyer decision recorded with the reason.
              priority: medium
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "Written buyer criteria exist and every buyer approved in the last year has a completed vetting form and a recorded decision."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Write the approved buyer criteria"
                - "Prepare a short vetting form for proposed buyers"
                - "Arrange identity and sanctions checks through counsel or the agent"
                - "Record each buyer approval or refusal with the reason"
            - name: Proration method for an oversubscribed offer
              description: |-
                ## Purpose
                If sellers tender more shares than the buyer will take, the company needs a fair way to scale everyone back, and the method must be stated in the offer before anyone tenders. Straight pro rata, a minimum allocation for small holders first, or priority for long-serving staff each produce different winners and losers.

                ## Milestones
                1. Two or three proration methods modelled on likely demand from the survey.
                2. The effect on small holders and former employees shown for each method.
                3. A method chosen and written into the offer document.
                4. A worked proration example included in the FAQ.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "The offer document states one proration method, chosen after modelling at least two, with a worked example in the FAQ."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Model pro rata and small-holder-first methods on survey demand"
                - "Show how each method treats holders below a set share count"
                - "Write the chosen method into the offer document"
                - "Add a worked proration example to the FAQ"
            - name: Exercise funding for employees selling options
              description: |-
                ## Purpose
                Employees holding unexercised options usually have to exercise before they can sell, which means paying the exercise price and sometimes tax up front. Deciding whether the tender lets them exercise and sell at the same moment, with costs netted from proceeds, determines whether the people who most need liquidity can take part at all.

                ## Milestones
                1. The option plan checked for whether net or cashless exercise is permitted.
                2. The tender agent's process for exercise and sale at the same moment confirmed.
                3. Withholding steps on exercise confirmed with the tax adviser.
                4. The exercise route explained in the offer documents with a worked example.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "The offer documents describe one confirmed exercise route, checked against the option plan and with the tax adviser."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Check the option plan for net or cashless exercise terms"
                - "Ask the tender agent how same-day exercise and sale works"
                - "Confirm withholding on exercise with the tax adviser"
                - "Write a worked exercise example into the offer documents"
            - name: Funding the purchase from company cash or investors
              description: |-
                ## Purpose
                A tender can be funded by new or existing investors buying the shares, by the company buying them back, or by a mix of both. Company cash spent on a buyback is cash not spent on growth, and buybacks may be limited by reserves or solvency tests in some jurisdictions, while an investor-funded tender changes who owns what.

                ## Milestones
                1. The runway effect of a company buyback modelled.
                2. Legal limits on buybacks, such as reserves or solvency tests, confirmed by counsel.
                3. Lead investors' appetite to fund the purchase tested.
                4. A funding mix chosen and recorded by the board.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "The board has recorded a funding decision for the tender, supported by a runway model and counsel's note on buyback limits."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Model the runway effect of a company buyback"
                - "Ask counsel what legal limits apply to a share buyback"
                - "Ask lead investors whether they would fund the purchase"
                - "Record the funding decision in the board minutes"
            - name: Restrictions passed on to secondary buyers
              description: |-
                ## Purpose
                Shares sold in a secondary should arrive with the same strings attached: the buyer signs up to the shareholders agreement, accepts the refusal rights and any lock-up for a future listing, and sometimes gives a voting proxy. Agreeing the standard package once means every buyer signs the same joinder and the register stays governable.

                ## Milestones
                1. A list of obligations every incoming holder must accept.
                2. A standard joinder deed approved by counsel.
                3. A decision on voting proxies and lock-up terms for secondary buyers.
                4. The joinder included in every secondary completion checklist.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A counsel-approved standard joinder exists and every secondary buyer in the last year has signed it."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "List the obligations every new holder must accept"
                - "Get a standard joinder deed from counsel"
                - "Decide whether secondary buyers give a voting proxy"
                - "Add the joinder to the buyer information pack"
            - name: Company tender offer from launch to settlement
              description: |-
                ## Purpose
                Company-sponsored tender offers typically run from board approval through an offer period of several weeks to elections, proration and payment, with sellers, buyers, counsel and the tender agent all working to one timetable. Treating the tender as a dated project with a critical path keeps the offer period honest and gets money to sellers on the date they were promised.

                ## Milestones
                1. A timetable with board approval, launch, offer period, election deadline and payment date.
                2. Offer documents issued to every eligible holder on launch day.
                3. All elections received, checked and prorated by the stated method.
                4. Proceeds paid and the register updated by the published payment date.
                5. Seller confirmations and the final register filed.
              priority: high
              deadlineOffsetDays: 120
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "The tender closes with every valid election settled and the register updated on or before the published payment date."
                cadence: phased
                effort_hours_estimate: "40"
              tasks:
                - "Draft the tender timetable back from the target payment date"
                - "Agree a weekly call with counsel, the agent and the buyer for the offer period"
                - "Send launch documents to every eligible holder on the same day"
                - "Confirm payments and register updates on the payment date"
            - name: Tender offer document pack
              description: |-
                ## Purpose
                Sellers decide from the offer document, so it needs price, size, eligibility, proration, the exercise route, tax warnings, risk factors and the deadline in language a non-specialist can follow. Preparing the pack with counsel, together with an election form and instructions, is the single largest piece of work in a tender.

                ## Milestones
                1. An offer to purchase covering price, size, eligibility, proration and timetable.
                2. An election form and instructions sellers can complete without help.
                3. Company information and risk factors agreed with counsel.
                4. The pack read for clarity by two people outside finance.
              priority: medium
              deadlineOffsetDays: 75
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "A counsel-approved offer pack with an election form is final at least one week before launch."
                cadence: one-shot
                effort_hours_estimate: "15"
              tasks:
                - "Agree the contents list for the offer pack with counsel"
                - "Ask the agent to draft plain-language instructions for the election form"
                - "Agree the company information and risk factors with counsel"
                - "Ask two people outside finance to read the pack for clarity"
            - name: Employee briefing for the tender offer
              description: |-
                ## Purpose
                An all-hands briefing early in the offer period answers the questions everyone has and makes sure the same information reaches every eligible holder at once, which counsel will usually want for fairness. Recording it, with every question and answer written up, covers the people who could not attend, including former employees.

                ## Milestones
                1. A briefing date set within the first week of the offer period.
                2. Speakers and script agreed with counsel.
                3. The briefing held, recorded and shared with all eligible holders, leavers included.
                4. Every question answered in writing and added to the FAQ.

                ## Notes
                Start from the **Meeting notes** template to capture questions and the agreed answers.
              priority: medium
              deadlineOffsetDays: 90
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "The briefing is held in the first week of the offer and written answers to every question are sent to all eligible holders."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Book the briefing within the first week of the offer"
                - "Agree the script and speakers with counsel"
                - "Record the briefing and send it to former employees too"
                - "Publish written answers to every question asked"
            - name: Secondary sale alongside a new funding round
              description: |-
                ## Purpose
                New lead investors sometimes buy existing shares as well as new ones, to reach their target ownership at a blended price. Running the secondary inside the round means agreeing price, sellers, documents and closing with the lead, and keeping the secondary price clearly separate from the primary price in every record.

                ## Milestones
                1. The secondary amount and price agreed with the lead and shown in the term sheet.
                2. Selling holders and allocations agreed and approved by the board.
                3. Secondary documents prepared to close at the same time as the primary.
                4. The secondary price recorded separately for the valuation provider.
              priority: medium
              deadlineOffsetDays: 90
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "The secondary closes on the same day as the primary round, with its price recorded separately and sent to the valuer."
                cadence: phased
                effort_hours_estimate: "12"
              tasks:
                - "Ask the lead whether they want a secondary component"
                - "Agree which holders may sell into the round"
                - "Align secondary and primary closing documents with counsel"
                - "Send the separate secondary price record to the valuation provider"
            - name: Settlement day for a direct share sale
              description: |-
                ## Purpose
                On a direct sale, settlement is the moment the buyer's money and the signed transfer meet, and it fails when a waiver is missing or a bank detail is wrong. A completion run-sheet listing every document, signature and payment, checked the day before, turns closing into a twenty minute job.

                ## Milestones
                1. A completion run-sheet listing every document, signature and payment.
                2. Buyer funds and seller bank details confirmed the day before.
                3. All waivers and consents signed before completion.
                4. The register updated and both parties told that completion has happened.
              priority: low
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "The sale completes on the planned day with every waiver signed and the register updated the same day."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "List every document and signature needed at completion"
                - "Confirm the buyer's funds and the seller's bank details the day before"
                - "Check every waiver and consent is signed"
                - "Update the register and confirm completion to both parties"
            - name: Post-tender review and lessons
              description: |-
                ## Purpose
                Within a month of payment, the people who ran the tender still remember what went wrong. A short review of participation, reaction to the price, timetable slippage, cost and seller feedback turns one tender into a better second one and gives the board evidence for the next window.

                ## Milestones
                1. Participation rate, cost and timetable figures pulled together.
                2. Feedback collected from sellers and from eligible holders who chose not to sell.
                3. A review held with counsel, the tender agent and finance.
                4. Lessons written into the plan for the next liquidity window.
              priority: low
              frontmatter:
                mode: event
                output_kind: knowledge
                success_criteria: "A written post-tender review with participation, cost and feedback is presented to the board within two months of payment."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Pull participation, cost and timetable figures from the tender"
                - "Send a three-question feedback form to sellers and non-sellers"
                - "Hold a 45 minute review with counsel, the agent and finance"
                - "Write the lessons into the next window plan"
            - name: Founder liquidity sale negotiation with the lead investor
              description: |-
                ## Purpose
                Founders who have taken a low salary for years often want to sell a modest part of their holding in a later round, and investors usually accept it when the amount is small enough that the founder stays committed. Preparing a reasoned ask, covering what you sell, why and how much you keep, makes it a calm conversation rather than a signal of doubt.

                ## Milestones
                1. A personal reason and amount written down, with remaining ownership shown.
                2. The ask discussed with co-founders and the board chair before the lead.
                3. The amount and price agreed with the lead and reflected in the term sheet.
                4. The founder sale disclosed to the board and recorded in the minutes.

                ## Notes
                Take personal tax and financial advice on the amount before the conversation, not after the price is agreed.
              priority: high
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "An agreed founder sale amount and price appear in the term sheet and are disclosed in board minutes."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Write down why you want to sell and what you will keep"
                - "Show your remaining ownership after the sale in one table"
                - "Talk to your co-founders before raising it with the lead"
                - "Record the agreed founder sale in the board minutes"
            - name: Departing employee selling vested shares
              description: |-
                ## Purpose
                When someone leaves with exercised shares, they often want to sell soon, and the manager handling their exit is the first person asked. A standard route, from pointing them to the policy to running refusal rights and approving a buyer, treats leavers fairly and stops informal promises being made in the exit meeting.

                ## Milestones
                1. A leaver script explaining the policy, the windows and who to contact.
                2. People managers told not to promise sales or prices.
                3. Each leaver request routed into the request inbox and refusal tracker.
                4. Each leaver told in writing whether the sale proceeds or waits for a window.
              priority: medium
              frontmatter:
                mode: service
                output_kind: deliverable
                success_criteria: "Every leaver who asked to sell in the last year received the standard script and a written answer within ten working days."
                cadence: rolling
              tasks:
                - "Write the leaver script for share sale questions"
                - "Brief people managers not to promise sales or prices"
                - "Route each leaver request into the request inbox"
                - "Tell the leaver in writing whether the sale proceeds or waits"
            - name: Helping an early angel sell their stake
              description: |-
                ## Purpose
                Early angels may want to recycle money into new investments long before an exit, and a stuck angel can become a quiet critic. Helping them find an approved buyer, often an existing investor or a secondary fund, clears a small holding from the register and keeps goodwill with someone who backed you first.

                ## Milestones
                1. The angel's holding, share class and transfer rights confirmed.
                2. Existing investors offered the shares first under the refusal process.
                3. An approved buyer found if investors decline.
                4. The sale completed with a joinder signed by the buyer.
              priority: low
              frontmatter:
                mode: service
                output_kind: deliverable
                success_criteria: "The angel's shares are sold to an approved buyer who has signed the joinder, with refusal rights properly offered first."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Confirm the angel's holding and share class"
                - "Offer the shares to existing investors through the refusal process"
                - "Introduce the angel to two approved buyers if investors decline"
                - "Check the buyer signs the joinder before completion"
            - name: Finance manager's tender offer workplan
              description: |-
                ## Purpose
                The finance or legal manager running a tender juggles counsel, the agent, the buyer, the board and hundreds of seller questions while still doing the day job. A workplan with owners, a decision log and a shared question inbox lets one person run it without becoming the bottleneck.

                ## Milestones
                1. A workplan with every workstream, owner and due date.
                2. A decision log recording what was decided, by whom and when.
                3. A shared question inbox with agreed response times.
                4. Cover arranged for the manager's normal duties during the offer period.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A workplan with named owners and a decision log is in use from launch, and seller questions are answered within the agreed time."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "Break the tender into workstreams with owners and dates"
                - "Start a decision log for the tender"
                - "Set up a shared inbox for seller questions"
                - "Agree cover for your normal duties during the offer period"
            - name: Sellers in several countries in one offer
              description: |-
                ## Purpose
                Distributed teams mean a single tender can reach holders in five or ten countries, each with its own securities rules, tax withholding and sometimes currency controls. Mapping where eligible holders live, and what counsel advises for each country, decides whether everyone can take part or some need a different route.

                ## Milestones
                1. Eligible holders counted by country of residence.
                2. Local securities and tax questions listed for each country.
                3. Counsel's view on each country recorded, including any exclusions.
                4. Payment currency and withholding approach agreed with the tender agent.
              priority: medium
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "Every country with eligible holders has a recorded counsel view and an agreed payment and withholding approach before launch."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Count eligible holders by country of residence"
                - "List the securities and tax questions for each country"
                - "Get counsel's view on each country with holders"
                - "Agree payment currency and withholding with the tender agent"
            - name: Founder sale for a personal milestone
              description: |-
                ## Purpose
                Buying a home, paying school fees or supporting family can make a founder want a sale outside any round or window. Planning it openly, with the board told early, a personal tax adviser engaged and the sale run through the normal policy, avoids the impression of a founder quietly heading for the door.

                ## Milestones
                1. The personal need and amount written down with a timeline.
                2. Personal tax and financial advice taken before agreeing a price.
                3. The board chair told before any buyer is approached.
                4. The sale run through the policy with refusal rights honoured.
              priority: low
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "The founder sale is completed through the normal policy after the board chair was told and personal advice was taken."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Write down the amount you need and by when"
                - "Book a session with a personal tax adviser"
                - "Tell the board chair before speaking to any buyer"
                - "Serve the transfer notice under the normal policy"
            - name: Buyer concentration and SPV look-through controls
              description: |-
                ## Purpose
                Special purpose vehicles let many small investors buy through one name on the register, which can hide competitors, push the company toward holder-count thresholds that bring extra securities duties in some jurisdictions, and complicate future votes. Look-through disclosure and a cap on vehicle holdings keep the register understandable.

                ## Milestones
                1. Current holders that are vehicles identified, with their underlying investor counts.
                2. Any holder-count threshold relevant to the company confirmed by counsel.
                3. A rule on vehicle buyers, including disclosure of underlying investors, approved.
                4. Vehicle holdings shown separately in the quarterly board note.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "An approved rule on vehicle buyers is in the transfer policy and every vehicle holder's underlying investor count is on file."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Identify every holder that is a vehicle for other investors"
                - "Ask counsel which holder-count thresholds apply to the company"
                - "Draft a rule requiring vehicle buyers to disclose underlying investors"
                - "Check the register for new vehicle holders @recurring(quarterly)"
            - name: Preferred share conversion on secondary transfer
              description: |-
                ## Purpose
                Some companies require preferred shares sold to new buyers to convert to common, or re-designate common shares sold at a premium, to stop secondary trades distorting the preference stack and the common share valuation. Deciding whether to adopt such a rule, and amending the documents if so, is a specialist call for the board with counsel.

                ## Milestones
                1. Options for conversion or re-designation on transfer set out with counsel.
                2. The effect on existing investors and on the common valuation explained.
                3. Investor consents needed for any amendment confirmed.
                4. A decision recorded and, if adopted, the documents amended.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "The board has recorded a decision on conversion or re-designation on transfer, with counsel's written options attached."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Ask counsel how conversion on transfer would work in your documents"
                - "Explain the effect on investors and the common share valuation"
                - "Check which investor consents an amendment would need"
                - "Record the board's decision on conversion on transfer"
            - name: Company stance on forward contracts and indirect sales
              description: |-
                ## Purpose
                Some shareholders sell the economic value of their shares without transferring them, through prepaid forward contracts or similar agreements that settle at an exit. These can conflict with transfer restrictions and leave the company unsure who really holds the economics, so the board should decide its stance and write it into the policy.

                ## Milestones
                1. Counsel's view on whether current documents already restrict forward contracts recorded.
                2. A policy clause on forward contracts and indirect sales drafted.
                3. A disclosure question about indirect sales added to the leaver checklist.
                4. The board's stance approved and added to the transfer policy.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "The transfer policy contains a board-approved clause on forward contracts and indirect sales."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Ask counsel whether your documents already restrict forward contracts"
                - "Draft a policy clause on forward contracts and indirect sales"
                - "Add a disclosure question about indirect sales to the leaver checklist"
                - "Take the stance to the board for approval"
            - name: Benchmarking the liquidity programme against peers
              description: |-
                ## Purpose
                Founders and managers who have run two or three windows start to ask how their programme compares: how often peers run tenders, what share of vested holdings they allow and what discounts they accept. A benchmark drawn from published reports, advisers and peer founders gives the board context for the next multi-year plan.

                ## Milestones
                1. Liquidity practices of five to ten peer companies gathered from reports and conversations.
                2. Frequency, caps, discount and participation rate compared.
                3. Gaps between your programme and peers noted.
                4. A recommendation for the next three years presented to the board.
              priority: medium
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A peer benchmark covering at least five companies, with a three-year recommendation, has been presented to the board."
                cadence: cyclic
              tasks:
                - "Gather two published reports on private company tender offers"
                - "Ask three peer founders or finance leads how they run liquidity"
                - "Compare frequency, caps, discount and participation"
                - "Refresh the peer benchmark before the year-end board meeting @recurring(yearly)"
---

# Secondary Share Sales & Liquidity

This area is for founders who want themselves, their team or early backers to sell some shares before an exit, and for the finance, legal and people managers who make that happen without damaging the cap table. It starts with the foundations (seller demand, every transfer restriction, a written policy, the right structure and the approvals map), then the routines for sale requests, refusal notices, the transfer register and board reporting, the knowledge behind pricing, rights, tax and securities rules, the decisions on price, eligibility, buyers and funding, the tender offer itself, the situations founders, leavers and early angels bring, and finally specialist controls on vehicles, conversions and indirect sales.

What repeats is a weekly look at the request inbox and open refusal deadlines, monthly checks on the transfer register, broker approaches and leaver contact details, a quarterly price update, board note and equity session for new joiners, and a yearly policy review and liquidity window. The Board meeting, Risk register, Operational checklist, Vendor and Meeting notes templates pair with the projects that name them. Installing adds all 50 projects as active, so archive the ones that are not for you yet.
