---
id: fundraising-investors.cap-table-management
name: Cap Table Management
description: "An accurate cap table rebuilt from signed documents, routines for grants, vesting, transfers and filings, and pro forma models that show what each new deal does to ownership."
category: business
version: 1.0.0
tags: [fundraising-investors, cap-table-management, founder, manager, equity, share-register, option-grants, ownership-modelling]
author: Aurum Technology
starter_structure:
  templates:
    - purchase-decision
    - operational-checklist
    - compliance-control
    - remediation-plan
  pillars:
    - name: Fundraising & Investor Relations
      emoji: "💰"
      description: "Raising capital and keeping investors informed: rounds from pre-seed to growth, grants and debt, the data room, cap table, investor updates, board reporting and exits."
      pillarFrontmatter:
        review_cadence: quarterly
      areas:
        - name: Cap Table Management
          description: "Keeping the capitalisation table accurate through rounds, option grants, transfers and conversions, and modelling the effect of new deals."
          projects:
            - name: Choosing the master cap table record
              description: |-
                ## Purpose
                Most early companies hold ownership in three places at once: a spreadsheet a founder built, the statutory register the lawyer keeps, and whatever the incorporation service shows. Deciding which one is the master working record, and that the others are copies reconciled to it, ends the arguments about which number is right before an investor asks.

                ## Milestones
                1. Every place that currently records share ownership listed, with who maintains each.
                2. One record named as the master working record and the reason written down.
                3. The other records labelled as copies, with a rule for how each is kept in line.
                4. The decision shared with the company's lawyer and anyone who edits the records.

                ## Notes
                The legal position is set by the statutory register and the signed documents, not by a spreadsheet. The master working record should mirror them, never the other way round.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A written note names the master cap table record, lists every copy and states how each copy is reconciled to it."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "List every spreadsheet, register and system that shows who owns shares"
                - "Ask the company's lawyer who keeps the statutory register of members"
                - "Write a one-paragraph note naming the master record and why"
                - "Share the note with everyone who edits any ownership record"
            - name: Equity document archive for every share issue
              description: |-
                ## Purpose
                Diligence teams test a cap table by asking for the paper behind each line: the subscription letter, the board minute, the filing receipt, the option agreement. Gathering every equity document into one indexed folder now, while the people who signed them are still reachable, turns a two-week scramble into an afternoon.

                ## Milestones
                1. One folder holding the incorporation documents, articles and every version of the shareholders' agreement.
                2. Each share issue backed by its subscription document, approval and filing receipt.
                3. Every option, warrant, SAFE and note agreement filed as a signed copy.
                4. An index listing each document against the cap table line it supports.
                5. Gaps listed separately, with who can supply each missing item.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "An indexed equity folder in which every cap table line points to at least one signed supporting document, with remaining gaps listed."
                cadence: one-shot
                effort_hours_estimate: "10"
              tasks:
                - "Create an equity documents folder with sub-folders by instrument type"
                - "Request copies of all signed share documents from the company's lawyer"
                - "Index each document against the cap table line it supports"
                - "List every missing signature or document and who can supply it"
                - "File newly signed equity documents in the archive @recurring(monthly:20)"
            - name: Line-by-line rebuild of the cap table from source documents
              description: |-
                ## Purpose
                Cap tables inherited from a founder's spreadsheet often carry rounding fixes, forgotten transfers and grants that were promised but never approved. Rebuilding every line from the signed documents, in date order, shows the true position and exposes the differences while they are still cheap to fix.

                ## Milestones
                1. A fresh ledger with one row per equity event, in date order, each citing its document.
                2. Share counts per holder and per class calculated from that ledger alone.
                3. A difference list comparing the rebuilt table with the old spreadsheet.
                4. Each difference explained, corrected or passed to the lawyer for remediation.

                ## Notes
                Rebuild from a ledger of events, not by editing the old totals. A table that only stores current balances cannot explain itself to an investor's lawyer.
              priority: high
              deadlineOffsetDays: 45
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A rebuilt cap table whose totals come from a dated event ledger, with every difference against the old version explained or assigned."
                cadence: phased
                effort_hours_estimate: "16"
              tasks:
                - "Save the current cap table spreadsheet as a dated reference copy"
                - "Enter each share issue, transfer and cancellation as a dated ledger row"
                - "Calculate holdings per holder and class from the ledger rows"
                - "Compare the rebuilt totals with the old spreadsheet line by line"
                - "Send unexplained differences to the company's lawyer"
            - name: Statutory register of members reconciliation
              description: |-
                ## Purpose
                In most jurisdictions the legal record of who owns shares is the company's register of members, kept by the company or its agent and sometimes mirrored in a public registry filing. If the register and the working cap table disagree, the register usually wins, so matching them holder by holder is the first real test of the cap table's accuracy.

                ## Milestones
                1. A current copy of the statutory register obtained from whoever keeps it.
                2. Holder names, addresses, classes and share numbers compared line by line.
                3. The latest public registry filing compared with both records.
                4. Every mismatch corrected in the right record, with the correction documented.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: research
                output_kind: artifact
                success_criteria: "A signed-off reconciliation shows the statutory register, the registry filing and the cap table agree for every holder and class."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Request a current copy of the register of members"
                - "Download the latest shareholder filing from the company registry"
                - "Match each holder's name, class and share count across all three records"
                - "Agree with the lawyer which record each mismatch must be corrected in"
            - name: Share class rights summary sheet
              description: |-
                ## Purpose
                Ordinary, preferred, growth and non-voting shares can carry very different rights to votes, dividends, liquidation proceeds and conversion, and those rights sit scattered across the articles and investment agreements. One page per class, with the clause reference for each right, lets anyone modelling a deal apply the right rules.

                ## Milestones
                1. Every share class in issue listed with its current number of shares.
                2. Votes, dividends, liquidation preference, conversion and anti-dilution terms recorded for each class.
                3. Each right referenced to its clause in the articles or agreement.
                4. The summary checked by the company's lawyer.

                ## Notes
                Write down what the documents actually say, including oddities. Do not paraphrase an unusual preference into a standard one.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A one-page summary per share class, citing the clause for each right, has been reviewed by the company's lawyer."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "List every share class currently in issue and its share count"
                - "Copy each class's voting, dividend and preference terms with clause numbers"
                - "Ask the agent to draft a plain-language line for each right from the clauses"
                - "Send the finished summary to the company's lawyer for a check"
            - name: Agreed fully diluted share count definition
              description: |-
                ## Purpose
                Fully diluted can mean issued shares only, or issued shares plus granted options, plus the unallocated pool, plus SAFEs and warrants, and term sheets price a round off whichever version the investor writes in. Agreeing the company's own definition, and showing each component separately, stops a price per share being calculated on a number nobody else recognises.

                ## Milestones
                1. Each component listed: issued shares, granted options, unallocated pool, warrants and convertibles.
                2. The company's default definition written down, with what is in and what is out.
                3. The cap table showing each component on its own line above a fully diluted total.
                4. The definition compared with the wording in the latest investment agreement.
              priority: medium
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A written fully diluted definition sits in the cap table, with every component on its own line and a reconciled total."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "List every instrument that could become shares in future"
                - "Write which components the company counts as fully diluted"
                - "Add a separate line for each component to the summary tab"
                - "Compare the definition with the wording in the last investment agreement"
            - name: Cap table software selection
              description: |-
                ## Purpose
                Spreadsheets stop coping somewhere around the second priced round, a few dozen option holders or the first secondary sale. Comparing two or three equity management tools on the same criteria (register output, vesting, scenario modelling, holder portal, export and cost) gives a choice that will still fit after the next round.

                ## Milestones
                1. Requirements written: holder count, instruments, countries, reports and budget.
                2. Three tools shortlisted and scored against the same criteria.
                3. A demo or trial run with the company's own anonymised data.
                4. A tool chosen, or a reasoned decision to stay on a spreadsheet for another year.

                ## Notes
                Start from the **Purchase decision** template. Confirm the tool exports the full event ledger, not just current balances, so you are never locked in.
              priority: medium
              deadlineOffsetDays: 60
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A scored comparison of three equity management tools and a recorded decision, with export of the full event ledger confirmed."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Write the number of holders, instruments and countries the tool must handle"
                - "Shortlist three equity management tools within budget"
                - "Score each tool on register output, vesting, modelling, export and cost"
                - "Run one demo using anonymised company data"
                - "Record the decision and the date to revisit it"
            - name: Cap table access and confidentiality rules
              description: |-
                ## Purpose
                A cap table shows every holder's stake, grants that track salary levels and sometimes home addresses, so sending the full file to a prospective investor or a recruiter is a privacy breach waiting to happen. Defining who may see the full ledger, who sees a summary by class and who sees only their own holding keeps sensitive data contained.

                ## Milestones
                1. Three views defined: full ledger, summary by class and individual holding.
                2. Each role mapped to the view it may see.
                3. Current access to every copy checked and trimmed to match.
                4. A quarterly access review in the calendar.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Written access rules for three cap table views, with current access matched to them and reviewed every quarter."
                cadence: rolling
              tasks:
                - "List everyone who currently has access to any cap table copy"
                - "Define the full, summary and individual views and who sees each"
                - "Remove access that does not match the rules"
                - "Review who can open the cap table and its exports @recurring(quarterly)"
            - name: Cap table owner and change approval rule
              description: |-
                ## Purpose
                Cap tables decay when three people edit them and nobody approves anything. Naming one owner, one reviewer and the evidence each change needs (a board approval, a signed document, payment received) means no line is ever added on the strength of an email promise.

                ## Milestones
                1. One cap table owner and one reviewer named.
                2. The evidence required for each type of change written down.
                3. A rule in force that no change is entered before its approval exists.
                4. The rule shared with founders, finance and the company's lawyer.
              priority: high
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A written rule names the cap table owner and reviewer and lists the evidence each type of change needs before entry."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Name the person who owns cap table updates and the person who reviews them"
                - "Write the evidence each type of change needs before it is entered"
                - "Agree the rule with the founders and the company's lawyer"
                - "Revisit the owner, reviewer and evidence rule @recurring(yearly)"
            - name: Equity event log kept current
              description: |-
                ## Purpose
                Grants, exercises, transfers and cancellations happen between board meetings, and the ones entered weeks later are the ones entered wrong. Logging each event within a week, with its date, document and approver, keeps the ledger a live record rather than a quarterly reconstruction.

                ## Milestones
                1. A log with columns for event date, type, holder, class, quantity, price, document and approver.
                2. Every event since the last reconciliation entered.
                3. A weekly slot held for entering the week's events.
                4. Three months in which no event was entered more than seven days after it happened.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Three consecutive months in which every equity event was logged within seven days, each with its document reference."
                cadence: rolling
              tasks:
                - "Add document reference and approver columns to the event log"
                - "Enter any equity events since the last reconciliation"
                - "Log the week's equity events with dates and documents @recurring(weekly:fri)"
            - name: Monthly cap table reconciliation
              description: |-
                ## Purpose
                Small differences compound: one missed cancellation becomes a wrong fully diluted count, which becomes a wrong price per share in the next round. A monthly check that the ledger, the register, the summary tab and the pool balance all agree takes twenty minutes when nothing has changed and catches errors within weeks.

                ## Milestones
                1. A short list of the four totals that must agree each month.
                2. The first month's reconciliation completed, with differences noted.
                3. Six monthly reconciliations completed in a row.
                4. Any difference carried forward explained in writing.

                ## Notes
                Check the unallocated pool balance every time. Grants, lapses and exercises all move it, and it is the number most often wrong.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Six consecutive monthly reconciliations recorded, each showing ledger, register, summary and pool totals agree or explaining the difference."
                cadence: rolling
              tasks:
                - "Write the four totals the monthly reconciliation must tie together"
                - "Reconcile ledger, register, summary and pool totals for the month @recurring(monthly:12)"
                - "Note each unexplained difference and who will resolve it"
            - name: Option grant recording after board approval
              description: |-
                ## Purpose
                Offer letters promise options, but options only exist once the board or shareholders approve the grant and the holder signs the agreement. Recording each grant from the approval itself, with exercise price, vesting start and number, closes the gap between what staff believe they hold and what the company has actually granted.

                ## Milestones
                1. A list of every promised grant not yet approved.
                2. Each approved grant entered from the board minute or written resolution.
                3. A signed option agreement matched to every recorded grant.
                4. No promise older than one board cycle left without approval.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every option grant on the cap table matches a dated approval and a signed agreement, with no promise left unapproved beyond one board cycle."
                cadence: rolling
              tasks:
                - "List every option promised in an offer letter that is not yet approved"
                - "Add pending grants to the next board meeting's approval list"
                - "Enter each approved grant with exercise price, vesting start and quantity"
                - "Check for promised grants still awaiting approval @recurring(monthly:18)"
            - name: Vesting schedule tracker and cliff dates
              description: |-
                ## Purpose
                Vested and unvested balances change every month for every option holder, and the cliff date is when an employee's first block of equity becomes theirs. A tracker showing upcoming cliffs, fully vested holders and acceleration terms lets managers answer staff questions accurately and lets leavers be processed on the right numbers.

                ## Milestones
                1. Vesting start, cliff, schedule and acceleration terms recorded for every grant.
                2. Vested and unvested balances calculated per holder as at any chosen date.
                3. A list of cliffs and final vesting dates falling in the next ninety days.
                4. Holders reaching a cliff told in writing what has vested.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A tracker shows vested and unvested balances for every grant as at today, with cliffs due in the next ninety days listed."
                cadence: rolling
              tasks:
                - "Record vesting start, cliff and acceleration terms for every grant"
                - "Build a vested balance formula that works as at any chosen date"
                - "List cliffs and final vesting dates due in the next ninety days @recurring(monthly:25)"
                - "Tell each holder what has vested when they pass their cliff"
            - name: Leaver equity checklist
              description: |-
                ## Purpose
                When someone leaves, their unvested options usually lapse, a clock starts on exercising the vested ones, and good or bad leaver terms may decide the price of any shares they hold. A fixed checklist run on every departure stops lapsed options sitting on the table and stops exercise windows closing without the person being told.

                ## Milestones
                1. A checklist covering vesting stop, lapse, exercise window, leaver terms and return to the pool.
                2. Every leaver of the past two years run through it.
                3. Lapsed options returned to the pool on the cap table.
                4. Each leaver sent a written statement of what they keep and their exercise deadline.

                ## Notes
                Start from the **Operational checklist** template. Whether someone is a good or bad leaver is a legal question under your articles and plan rules; record the decision, do not make it in the spreadsheet.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every leaver from the past two years has been processed through the checklist, with lapsed options returned to the pool and statements sent."
                cadence: rolling
              tasks:
                - "Write the leaver checklist from the option plan rules and the articles"
                - "Run the checklist for every leaver of the past two years"
                - "Return lapsed options to the unallocated pool on the cap table"
                - "Check for leaver exercise windows closing in the next 30 days @recurring(monthly:4)"
            - name: Option exercise processing routine
              description: |-
                ## Purpose
                An exercise turns an option into shares, and it needs a notice, payment of the exercise price, an approval, a share issue, a register entry and often a tax or payroll step. Writing the routine once, in order, means the person exercising gets their shares promptly and the cap table moves the option into the share column on the right date.

                ## Milestones
                1. The exercise steps written in order, with who does each.
                2. A standard exercise notice and payment instructions ready to send.
                3. The last three exercises checked against the routine.
                4. Each exercise recorded as option cancelled and shares issued on the same date.

                ## Notes
                Exercises can create tax and payroll reporting duties for both the company and the holder. Ask your accountant which apply before the first one and keep their answer with the routine.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A written exercise routine is used for every exercise, each recorded on the cap table with notice, payment and share issue dates."
                cadence: rolling
              tasks:
                - "Write the exercise steps from notice through to register entry"
                - "Prepare a standard exercise notice with payment instructions"
                - "Ask the accountant which tax or payroll steps an exercise triggers"
                - "Check the last three exercises followed every step"
            - name: Share transfers and right of first refusal handling
              description: |-
                ## Purpose
                Transfers between shareholders, to family trusts or to an outside buyer usually need board consent, a pre-emption or first refusal offer to other holders, a signed transfer form and sometimes stamp duty. Handling each one through the same steps keeps the register lawful and avoids a buyer who paid for shares the company never recognised.

                ## Milestones
                1. The transfer restrictions in the articles and shareholders' agreement summarised.
                2. A step list from transfer request to register update.
                3. First refusal notices sent and their response periods tracked.
                4. Each completed transfer entered on the register and the cap table on the same date.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every transfer in the last year went through the written steps, with first refusal periods recorded and the register updated."
                cadence: rolling
              tasks:
                - "Summarise the transfer restrictions in the articles and shareholders' agreement"
                - "Write the steps from transfer request to register update"
                - "Track each first refusal notice and its response deadline"
                - "Enter completed transfers on the register and cap table together"
            - name: Statutory filings after share issues
              description: |-
                ## Purpose
                Many company registries require a filing within weeks of new shares being allotted, and changes to share classes or rights can need filings of their own. Tracking each issue through to its filing receipt avoids late penalties and keeps the public record in line with what investors are told.

                ## Milestones
                1. The filings your registry requires after allotments, transfers and class changes listed with deadlines.
                2. Every share issue of the past two years matched to a filing receipt.
                3. Late or missing filings made, or handed to the company secretary.
                4. A quarterly check confirming no recent issue lacks a receipt.

                ## Notes
                Start from the **Compliance control** template. Deadlines differ by country (in the UK, for example, a return of allotment is due within a month), so confirm yours with your company secretary or lawyer.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every share issue of the last two years has a filing receipt in the archive, and the quarterly check has run for a full year."
                cadence: rolling
              tasks:
                - "Ask the company secretary which filings follow an allotment and their deadlines"
                - "Match each share issue of the last two years to its filing receipt"
                - "File or hand over any missing filings"
                - "Check every recent share issue has a filing receipt @recurring(quarterly)"
            - name: Quarterly cap table snapshot for the board
              description: |-
                ## Purpose
                Boards approve grants and rounds but rarely see the whole ownership picture between fundraises. A one-page snapshot each quarter, showing holdings by class, the pool balance, grants and lapses since last quarter and the fully diluted total, keeps directors approving from the same numbers.

                ## Milestones
                1. A one-page snapshot layout agreed with the chair.
                2. Pool balance, grants, lapses and exercises since last quarter shown.
                3. Four quarterly snapshots included in board packs.
                4. Board questions on the snapshot answered before the next meeting.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: deliverable
                success_criteria: "Four consecutive board packs each include a one-page cap table snapshot with pool movements since the previous quarter."
                cadence: cyclic
              tasks:
                - "Agree the snapshot layout with the board chair"
                - "Prepare the quarterly cap table snapshot for the board pack @recurring(quarterly)"
                - "Note board questions on the snapshot and answer them in writing"
            - name: Annual cap table review with legal counsel
              description: |-
                ## Purpose
                Once a year the company's lawyer should see the full ledger, the register and the documents together, because errors in the cap table are often errors in the legal paperwork too. Booking this before year end, rather than at the start of a round, gives time to fix what it finds without an investor watching.

                ## Milestones
                1. The review booked at the same point each year.
                2. Ledger, register, document index and open issues sent a fortnight ahead.
                3. Findings recorded with an owner and due date for each.
                4. All findings from the previous review closed.
              priority: high
              frontmatter:
                mode: operating
                output_kind: event-completion
                success_criteria: "An annual review has been held with counsel two years running, each with written findings closed before the next."
                cadence: cyclic
              tasks:
                - "Book the annual cap table review with the company's lawyer @recurring(yearly)"
                - "Send the ledger, register and document index two weeks before"
                - "Record each finding with an owner and a due date"
            - name: Annual equity statements for every holder
              description: |-
                ## Purpose
                Shareholders and option holders often have only a vague idea of what they own, which leads to anxious questions at every round and disputes at exit. A yearly statement to each holder, showing class, number, vesting and exercise price, invites corrections early and builds trust in the record.

                ## Milestones
                1. A statement layout showing holdings, vesting and exercise prices.
                2. Statements sent to every shareholder and option holder.
                3. Queries logged and answered within two weeks.
                4. Corrections made on the cap table with the evidence filed.

                ## Notes
                Send each holder only their own figures. A careless mail merge from the full cap table is the usual way a whole company learns everyone's grants.
              priority: medium
              frontmatter:
                mode: service
                output_kind: deliverable
                success_criteria: "Every holder receives a personal statement each year, and every query raised is answered within two weeks."
                cadence: cyclic
              tasks:
                - "Design a one-page holder statement showing class, number and vesting"
                - "Test the mail merge on one record before sending any statements"
                - "Send each holder their own equity statement @recurring(yearly)"
                - "Log holder queries and answer each within two weeks"
            - name: Issued, outstanding and fully diluted shares explained
              description: |-
                ## Purpose
                Founders and finance managers are often asked their ownership percentage and give three different answers depending on which base they use. Learning the difference between authorised, issued, outstanding and fully diluted shares, and practising on your own table, makes every later conversation with investors precise.

                ## Milestones
                1. Authorised, issued, outstanding and fully diluted each defined in your own words.
                2. Your own cap table's total calculated on each basis.
                3. Each founder's percentage shown on every basis side by side.
                4. A one-paragraph explainer saved for new managers.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Your own ownership figures are calculated on four bases, with a saved one-paragraph explainer of the differences."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Write a one-line definition of authorised, issued, outstanding and fully diluted"
                - "Calculate each founder's percentage on all four bases"
                - "Save a short explainer for anyone new who edits the cap table"
            - name: Price per share from pre-money valuation
              description: |-
                ## Purpose
                Investors agree a valuation, but lawyers issue shares, and the bridge between them is the price per share: the pre-money valuation divided by whichever share count the term sheet specifies. Working the arithmetic yourself, including where any pool top-up sits, means you can check the closing numbers instead of simply trusting them.

                ## Milestones
                1. The price per share formula written with the term sheet's definition of the count.
                2. A worked example from the last round matched to the actual issue price.
                3. The effect of adding the pool before or after the money shown in one example.
                4. New investor shares calculated and checked against the closing documents.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A worked price per share calculation for the last round matches the issue price in the closing documents."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Write the price per share formula using the term sheet's share count definition"
                - "Recalculate the last round's issue price from its pre-money valuation"
                - "Model the same round with the pool added before and after the money"
                - "Check the investor share numbers against the closing documents"
            - name: Showing unconverted SAFEs and notes on the cap table
              description: |-
                ## Purpose
                SAFEs and convertible notes are not shares yet, so many cap tables leave them off and every ownership figure looks better than it is. Learning to show them as a separate block, with estimated conversion shares at sample round prices, gives a truthful fully diluted view without pretending the numbers are final.

                ## Milestones
                1. Every unconverted instrument listed with amount, cap, discount and date.
                2. A separate convertibles block on the cap table, outside issued shares.
                3. Estimated conversion shares shown at two sample round prices.
                4. A visible note stating that conversion figures are estimates until a round closes.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "The cap table shows every unconverted SAFE and note in its own block, with estimated conversion shares at two sample prices."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "List every SAFE and note with amount, cap, discount and issue date"
                - "Add a convertibles block below the issued shares"
                - "Estimate conversion shares at two sample round prices"
                - "Label the conversion figures clearly as estimates"
            - name: Liquidation preference waterfall basics
              description: |-
                ## Purpose
                Ownership percentages say little about who receives what at a sale, because preferred shares may take their money back first, sometimes with a multiple or participation on top. Building a simple waterfall from your own share classes shows at which sale prices preferences matter and at which everyone is effectively paid as common.

                ## Milestones
                1. The preference terms of each class taken from the rights summary.
                2. A waterfall that pays preferences, then participation, then common, at any sale price.
                3. Proceeds per class shown at three sale values.
                4. The sale value at which each preferred class would rather convert identified.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A working waterfall built from your own classes shows proceeds per class at three sale values and the conversion point for each preferred class."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Copy each class's preference multiple and participation terms into the model"
                - "Build the payout order from preferences down to common"
                - "Show proceeds per class at a low, middle and high sale value"
                - "Find the sale value at which each preferred class would convert"
            - name: Anti-dilution adjustment arithmetic
              description: |-
                ## Purpose
                If a future round is priced below an earlier one, anti-dilution clauses can increase the shares earlier investors receive on conversion. Learning the broad-based weighted average and full ratchet formulas, and running them on your own classes, shows the ownership cost of a lower price before anyone proposes one.

                ## Milestones
                1. The anti-dilution clause for each preferred class identified.
                2. The weighted average formula worked through with your own share counts.
                3. A full ratchet comparison shown at the same price.
                4. Extra conversion shares per class shown at two lower prices.

                ## Notes
                The exact definitions in your articles override any textbook formula, especially which shares count in the broad base. Have counsel confirm your reading before relying on it.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Anti-dilution adjustments are calculated for each preferred class at two lower prices, using the base defined in your own articles."
                cadence: phased
                effort_hours_estimate: "5"
              tasks:
                - "Find the anti-dilution clause for each preferred class"
                - "Work the weighted average formula with your own share counts"
                - "Compare the result with a full ratchet at the same price"
                - "Ask counsel to confirm which shares count in the broad base"
            - name: Employee equity types and how each is recorded
              description: |-
                ## Purpose
                Options, restricted shares, growth shares, phantom units and share appreciation rights all feel like equity to an employee, but some are shares, some are rights to shares and some are cash promises. Learning how each is recorded, and where it sits on the cap table if at all, avoids counting a cash bonus as dilution or missing a real share class.

                ## Milestones
                1. A list of every equity-like award the company has made.
                2. Each award type classed as shares, rights to shares or cash-settled.
                3. The cap table treatment written down for each type.
                4. Any tax-advantaged scheme (EMI in the UK or ISOs in the US, for example) flagged for its extra record-keeping.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Each type of equity award the company uses is classed and has a written cap table treatment."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "List every type of equity award the company has made"
                - "Class each award as shares, rights to shares or cash-settled"
                - "Write how each award type appears on the cap table"
                - "Note any extra records a tax-advantaged scheme requires"
            - name: Cap table spreadsheet structure and checks
              description: |-
                ## Purpose
                Most cap table errors come from the spreadsheet itself: typed-over totals, formulas copied one row short, a sorted column that broke the link to a holder. Rebuilding the workbook as a ledger tab, a calculation tab and an output tab, with check cells that flag disagreement, catches those errors the moment they are made.

                ## Milestones
                1. The workbook split into ledger, calculation and output tabs.
                2. No typed number left in any calculated cell.
                3. Check cells that flag when ledger, class and holder totals disagree.
                4. A change log tab recording who edited what and when.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A workbook with separate ledger, calculation and output tabs whose check cells show zero difference across all totals."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Move all raw entries to a single ledger tab"
                - "Replace typed totals with formulas that read the ledger"
                - "Add check cells comparing holder, class and grand totals"
                - "Ask the agent to review the formulas for ranges that stop short"
            - name: Historical cap table error remediation
              description: |-
                ## Purpose
                Rebuilding the cap table usually turns something up: shares issued without a board minute, an unsigned option agreement, a transfer never registered, grants above the plan limit. Fixing each through the right corrective step, often a ratifying resolution or a fresh signature, is far easier now than under a buyer's diligence deadline.

                ## Milestones
                1. Every defect from the rebuild listed with its cause and the shares affected.
                2. Counsel's proposed fix recorded for each defect.
                3. Ratifying resolutions, confirmations or re-signed documents completed.
                4. The cap table and register updated and the remediation file closed.

                ## Notes
                Start from the **Remediation plan** template. Some fixes need shareholder approval or registry filings, so allow time for a meeting or written resolution.
              priority: high
              deadlineOffsetDays: 90
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "Every defect found in the rebuild has a documented fix completed and filed, with the cap table and register updated to match."
                cadence: phased
                effort_hours_estimate: "15"
              tasks:
                - "List each defect from the rebuild with its cause and share count"
                - "Ask counsel for the corrective step for each defect"
                - "Collect ratifying resolutions and replacement signatures"
                - "Update the register and cap table once each fix is complete"
            - name: Moving the cap table from spreadsheet to software
              description: |-
                ## Purpose
                Migration is where clean data gets damaged if it is rushed: holders duplicated, vesting schedules reset, convertibles dropped. Running it as a project with a frozen cut-over date, a parallel month and a sign-off reconciliation means the new tool starts with figures you have already proved.

                ## Milestones
                1. A cut-over date agreed, with no equity events booked in the final week.
                2. Ledger, grants, vesting schedules and convertibles imported.
                3. Totals in the tool reconciled to the spreadsheet for every holder and class.
                4. One month run in parallel before the spreadsheet is archived as read-only.
              priority: medium
              deadlineOffsetDays: 75
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "The new tool's holder and class totals reconcile exactly to the spreadsheet after a month in parallel, and the spreadsheet is archived read-only."
                cadence: phased
                effort_hours_estimate: "14"
              tasks:
                - "Agree a cut-over date and freeze equity events the week before"
                - "Import the ledger, grants and convertibles into the new tool"
                - "Reconcile holder and class totals between tool and spreadsheet"
                - "Archive the spreadsheet as read-only after one parallel month"
            - name: Nominee structure for small angel holdings
              description: |-
                ## Purpose
                A long tail of small angel or community holdings can mean dozens of signatures for every shareholder resolution and every round. Some companies consolidate these behind a nominee that holds the shares legally for the investors, and weighing that option with counsel, including its costs and consents, is a decision worth making before the tail grows.

                ## Milestones
                1. The number of holders below a chosen size, and the signatures they cost each round, counted.
                2. A nominee, powers of attorney and existing drag-along terms compared with counsel.
                3. Costs, investor consent needed and reporting duties recorded for each option.
                4. A decision recorded, with the next step if a change is chosen.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A recorded decision on consolidating small holdings compares at least two options, with costs and consent requirements from counsel."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Count holders below a chosen holding size"
                - "Count the signatures those holders needed in the last round"
                - "Ask counsel to compare a nominee with relying on existing drag and proxy terms"
                - "Record the decision and the reasons for it"
            - name: Share subdivision before a round
              description: |-
                ## Purpose
                Founders' shares are sometimes issued in tiny numbers at a high nominal value, which makes option grants awkward and prices per share odd. A subdivision splits each share into many without changing anyone's percentage, and it is cleanest done before a round so the new investors' documents start from the split.

                ## Milestones
                1. The case for a subdivision written, with the target share count.
                2. Counsel's steps confirmed, including resolutions, filings and option plan adjustments.
                3. Every holding, grant and exercise price adjusted by the same ratio.
                4. The post-split cap table reconciled to the register and filings.
              priority: low
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "A subdivision is completed with every holding, option and exercise price adjusted by one ratio and reconciled to the register."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Write why a subdivision helps and the share count you want"
                - "Ask counsel for the resolutions and filings a subdivision needs"
                - "Adjust every holding, grant and exercise price by the split ratio"
                - "Reconcile the post-split table to the updated register"
            - name: Company share buyback decision and records
              description: |-
                ## Purpose
                Buying back shares, whether from a leaver under the articles or an angel who wants out, is tightly regulated in many jurisdictions: it may need distributable reserves, shareholder approval, a specific contract and a filing. Recording the decision, the approvals and the cancellation or treasury holding correctly keeps the cap table and the register honest.

                ## Milestones
                1. The proposed buyback, price and source of funds described.
                2. The approvals and filings counsel says are required listed.
                3. Each approval obtained before the payment is made.
                4. Shares cancelled or held in treasury, with the register and cap table updated.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A buyback is recorded with its approvals, payment and filing, and the shares show as cancelled or in treasury on both records."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Describe the proposed buyback, the price and where the money comes from"
                - "Ask counsel which approvals and filings the buyback needs"
                - "Collect each approval before any payment is made"
                - "Mark the shares as cancelled or in treasury on register and cap table"
            - name: Investor rights and ownership thresholds register
              description: |-
                ## Purpose
                Pro rata rights, information rights, board seats and consent rights are often tied to holding a minimum stake or qualifying as a major investor. A register showing who holds which right, and the threshold that keeps it, tells you before each issue whose rights will switch on or off.

                ## Milestones
                1. Every holder right taken from the investment agreements, with its threshold.
                2. Each holder's current stake compared with each threshold.
                3. Rights that would change after the next planned issue flagged.
                4. The register refreshed after every issue and at least once a year.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A register lists every threshold-linked investor right, with each holder's current stake and whether the right is held."
                cadence: rolling
              tasks:
                - "Extract every pro rata, information, board and consent right with its threshold"
                - "Compare each holder's stake with the threshold for each right"
                - "Flag rights that would change after the next planned issue"
                - "Refresh the rights register against current holdings @recurring(yearly)"
            - name: Share class consolidation or redesignation
              description: |-
                ## Purpose
                After several rounds a company can carry five or six share classes with small differences, and every new deal has to be modelled against all of them. Consolidating or redesignating classes, usually alongside a round or restructure, simplifies future modelling and voting, but it needs class consents and careful share-by-share mapping.

                ## Milestones
                1. Each class's rights compared to see which differ in substance.
                2. A simpler proposed structure mapped share by share from old to new.
                3. The class consents and resolutions counsel requires listed.
                4. The new structure reflected in the register, cap table and rights summary.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A mapping of old to new classes is approved by the required class votes, with register, cap table and rights summary updated."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Compare the rights of each class side by side"
                - "Draft a mapping of each old class to the proposed new class"
                - "Ask counsel which class consents the change needs"
                - "Update the register, cap table and rights summary after approval"
            - name: Pro forma cap table for the next priced round
              description: |-
                ## Purpose
                Before signing a term sheet you need to know exactly what the company looks like the day after closing: new investor shares, converted SAFEs, the pool top-up and every holder's new percentage. A pro forma built from the current ledger and the proposed terms lets you and counsel check the numbers the closing documents will use.

                ## Milestones
                1. The round size, pre-money valuation and pool terms entered as inputs.
                2. Convertibles converted on the terms each instrument specifies.
                3. New shares per investor and the price per share calculated.
                4. Each holder's before and after percentage shown and checked with counsel.

                ## Notes
                Keep the pro forma on a separate scenario tab. Never type proposed numbers into the live ledger.
              priority: high
              deadlineOffsetDays: 45
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A pro forma shows every holder's pre and post-round shares and percentages, checked against the term sheet by counsel."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Enter the round size, pre-money valuation and pool terms as inputs"
                - "Convert each SAFE and note using its own cap and discount"
                - "Calculate the price per share and new shares per investor"
                - "Send the pro forma to counsel to check against the term sheet"
            - name: Post-closing cap table reconciliation
              description: |-
                ## Purpose
                Closing documents are drafted from a pro forma that may have changed three times during negotiation, and conversions are where most mistakes appear. Reconciling the final share issue, conversions and pool change to the signed documents within a week of closing means the new investors' first look at the cap table matches what they signed.

                ## Milestones
                1. The signed closing documents and final funds flow collected.
                2. New shares, conversions and pool changes entered from the signed figures.
                3. The live cap table matched to the closing capitalisation schedule.
                4. The updated cap table sent to counsel and the lead investor.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: event
                output_kind: artifact
                success_criteria: "Within a week of closing, the live cap table matches the signed capitalisation schedule for every holder and class."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Collect the signed closing documents and the final funds flow"
                - "Enter new shares, conversions and pool changes from the signed figures"
                - "Match the live cap table to the closing capitalisation schedule"
                - "Send the reconciled cap table to counsel and the lead investor"
            - name: Cap table pack for investor due diligence
              description: |-
                ## Purpose
                Diligence requests on equity are predictable: the current cap table, the ledger, the option schedule, the convertibles schedule and the documents behind them. Preparing that pack before a round starts, with a reconciliation statement and a named contact for questions, makes the company look in control and shortens the legal timetable.

                ## Milestones
                1. Summary, ledger, option and convertible schedules exported as at one date.
                2. A short statement of how the pack reconciles to the register.
                3. Supporting documents linked from each schedule.
                4. Personal data trimmed to what diligence actually needs.
              priority: medium
              deadlineOffsetDays: 30
              frontmatter:
                mode: service
                output_kind: deliverable
                success_criteria: "A diligence pack dated as at one day holds four schedules, a reconciliation statement and linked documents, ready for the data room."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Export the summary, ledger, option and convertible schedules as at one date"
                - "Write a short note on how the pack reconciles to the register"
                - "Link each schedule line to its supporting document"
                - "Remove home addresses and other personal data diligence does not need"
            - name: Exit waterfall for an acquisition offer
              description: |-
                ## Purpose
                Once an offer arrives, every holder wants to know what they would receive, and the answer depends on preferences, option exercise prices, any management carve-out and transaction costs. A holder-by-holder waterfall at the offered price, checked with counsel, keeps the board's discussion factual and stops rumours about payouts.

                ## Milestones
                1. The headline price, costs, escrow and any carve-out entered as inputs.
                2. Preferences, conversions and option net proceeds calculated per holder.
                3. Proceeds per holder and class shown at the offer price and two alternatives.
                4. The model checked by counsel or the company's adviser before it is shared.
              priority: medium
              frontmatter:
                mode: event
                output_kind: decision
                success_criteria: "A holder-by-holder waterfall at the offered price and two alternatives is checked by counsel before the board sees it."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Enter the offer price, costs, escrow and any carve-out as inputs"
                - "Calculate net proceeds for each option holder after exercise price"
                - "Show proceeds per holder at the offer and two alternative prices"
                - "Ask counsel to check the waterfall before the board meeting"
            - name: Warrant records from a debt facility or partner deal
              description: |-
                ## Purpose
                Lenders and some commercial partners take warrants: rights to buy shares at a set price, often with a coverage formula, an expiry date and net exercise terms. Recording each warrant with its formula and expiry, and including it in the fully diluted count, prevents a forgotten instrument surfacing at the next round or at exit.

                ## Milestones
                1. Every warrant listed with holder, class, number or formula, price and expiry.
                2. Coverage formulas recalculated where the number depends on a later round.
                3. Warrants included in the fully diluted count.
                4. Expiry dates reviewed each year, with the holder contacted where needed.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Every warrant is on the cap table with its terms and expiry date, and counted in the fully diluted total."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "List every warrant with holder, class, quantity or formula and price"
                - "Recalculate any warrant whose share number depends on a later round"
                - "Add warrants to the fully diluted total"
                - "Review warrant expiry dates and exercise terms @recurring(yearly)"
            - name: Year-end share capital figures for the accounts
              description: |-
                ## Purpose
                The annual accounts need share capital, share premium, shares issued during the year and, under most reporting frameworks, inputs for the share-based payment charge on options. Handing the accountant a reconciled schedule from the cap table, rather than letting them rebuild it from bank receipts, avoids a mismatch between the accounts and the register.

                ## Milestones
                1. Shares issued, cancelled and transferred in the year listed with prices.
                2. Share capital and premium movements reconciled to the bank and the ledger.
                3. Grant, lapse and exercise data for the share-based payment calculation prepared.
                4. The schedule agreed with the accountant before the accounts are signed.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: deliverable
                success_criteria: "A year-end equity schedule, reconciled to the ledger and bank, is agreed with the accountant before the accounts are signed."
                cadence: cyclic
              tasks:
                - "Send the accountant a schedule of shares issued and cancelled in the year @recurring(yearly)"
                - "Reconcile share capital and premium to bank receipts"
                - "Prepare grant, lapse and exercise data for the share-based payment charge"
            - name: First equity grants by a solo founder
              description: |-
                ## Purpose
                A solo founder making the first few grants to early hires often does it by email and handshake, then discovers at seed that none were ever approved. Setting up a simple plan or grant documents, an approval habit and a clean record for the first five grants costs a few hours and prevents the commonest seed-stage clean-up.

                ## Milestones
                1. Counsel's view recorded on whether an option plan or direct share grants suit the company.
                2. The plan or grant documents adopted with the right approvals.
                3. Each early hire's grant approved, signed and recorded with vesting terms.
                4. Each hire told in writing exactly what they hold.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "The first grants to early hires are each approved, signed and on the cap table, with written confirmation sent to every holder."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "List every equity promise made to early hires so far"
                - "Ask counsel whether an option plan or direct share grants fit"
                - "Approve each grant by board resolution before calling it final"
                - "Send each early hire a written note of what they hold"
            - name: Co-founder departure and share recovery
              description: |-
                ## Purpose
                When a co-founder leaves, founder vesting or leaver terms usually let the company buy back or cancel unvested shares, and sometimes vested ones at a set price. Getting the numbers, approvals and documents right in the first weeks keeps the remaining founders' ownership correct and avoids an inactive holder blocking future rounds.

                ## Milestones
                1. The co-founder's vested and unvested shares calculated as at the leaving date.
                2. The applicable leaver terms confirmed with counsel.
                3. The buyback, cancellation or transfer completed with approvals.
                4. The register and cap table updated and the signed documents filed.

                ## Notes
                This is often emotional. Agree the figures in writing before discussing them, and let counsel handle the legal classification.
              priority: high
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "The departing co-founder's shares are bought back, cancelled or retained exactly as the leaver terms specify, with register and cap table updated."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "Calculate vested and unvested founder shares as at the leaving date"
                - "Ask counsel which leaver terms apply and what they require"
                - "Complete the buyback, cancellation or transfer with its approvals"
                - "File the signed departure documents and update both records"
            - name: Finance manager taking over the cap table
              description: |-
                ## Purpose
                As a company grows, the cap table usually moves from a founder's laptop to a finance manager or company secretary, and much of its history stays in the founder's memory. A structured handover, with the ledger, documents, open issues and the founder's explanations recorded, gives the new owner a record they can defend.

                ## Milestones
                1. Ledger, register, document index and software access handed over.
                2. A walk-through of every round and unusual event recorded.
                3. Open issues and undocumented promises listed.
                4. The new owner's first monthly reconciliation completed without help.
              priority: medium
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: knowledge
                success_criteria: "The new cap table owner has completed a solo reconciliation and holds a recorded walk-through of every round and open issue."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Book a two-hour walk-through of every round with the founder"
                - "Transfer ownership of the ledger, register and software accounts"
                - "List undocumented promises and open issues"
                - "Ask the agent to turn the walk-through notes into a round-by-round history"
            - name: Holding company restructure share mapping
              description: |-
                ## Purpose
                Moving a company under a new holding company, or flipping it to another country before a round, usually means every holder exchanges their shares for shares in the new top company. Mapping each holding, option and convertible from old to new, and proving the totals match, is the cap table's part of a project that counsel and tax advisers lead.

                ## Milestones
                1. Every holding, option and convertible in the old company listed.
                2. The exchange ratio and class mapping confirmed by counsel.
                3. A new cap table built from the mapping and reconciled holder by holder.
                4. Old options replaced or assumed, with holders told their new terms.

                ## Notes
                Restructures carry tax consequences for the company and for holders. Keep this project to the records; the structure itself is for tax and legal advisers.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A new holding company cap table reconciles holder by holder to the old one using the agreed exchange ratio."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "List every holding, option and convertible in the old company"
                - "Confirm the exchange ratio and class mapping with counsel"
                - "Build the new cap table from the mapping and reconcile each holder"
                - "Tell each holder their new holding and terms in writing"
            - name: Transmission after death, divorce or insolvency
              description: |-
                ## Purpose
                Shares do not disappear when a holder dies, divorces or becomes insolvent; they pass to executors, to an ex-spouse under a court order or to a trustee, often with transfer restrictions in the articles still applying. Knowing what evidence to ask for and how the register records it lets the company respond calmly and correctly when it happens.

                ## Milestones
                1. The articles' provisions on transmission and compulsory transfer summarised.
                2. The evidence required for each situation listed, such as probate, a court order or a trustee appointment.
                3. A respectful letter template ready for executors or representatives.
                4. A rule that the register and cap table change only on receipt of the evidence.
              priority: low
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A written procedure lists the evidence needed for each transmission situation, with a letter template ready to send."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Summarise what the articles say about transmission and compulsory transfer"
                - "List the evidence counsel wants for death, divorce and insolvency cases"
                - "Draft a short, respectful letter to executors or representatives"
                - "Hold any register change until the evidence is received"
            - name: Equity holders in several countries
              description: |-
                ## Purpose
                Once option holders work in three or four countries, each grant can carry local securities filings, tax reporting, exercise rules or sub-plan terms. Adding country, residency and sub-plan fields to the cap table, and checking each country's requirements yearly with advisers, keeps grants valid where people actually live.

                ## Milestones
                1. Country of residence and sub-plan recorded for every holder.
                2. Each country's filing and reporting requirements listed with advisers.
                3. Every grant checked against the right local terms.
                4. A yearly check of residency changes and new countries in place.
              priority: low
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "Every holder has country and sub-plan fields filled, and each country's requirements are listed with an adviser's confirmation."
                cadence: rolling
              tasks:
                - "Add country of residence and sub-plan fields for every holder"
                - "Ask advisers which filings and reporting each country requires"
                - "Check each grant was made on the right local terms"
                - "Check holders' residency and any new countries @recurring(yearly)"
            - name: Cap table effect of competing term sheets
              description: |-
                ## Purpose
                Two offers with similar headline valuations can leave holders in very different places once pool top-ups, preferences and conversion terms are applied. Running each offer through the same pro forma and waterfall, side by side, shows founders, employees and existing investors what each offer actually means for them.

                ## Milestones
                1. Each offer's terms entered as a separate scenario on the same base.
                2. Post-round ownership per holder group compared across offers.
                3. Proceeds per group compared at three exit values.
                4. A one-page comparison shared with the board and counsel.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A one-page comparison of every live offer shows ownership and exit proceeds per holder group, built on one base cap table."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Enter each offer as its own scenario on the same base cap table"
                - "Compare post-round ownership for founders, staff and investors"
                - "Compare proceeds per group at three exit values"
                - "Share the one-page comparison with the board and counsel"
            - name: Voting control analysis by class and holder
              description: |-
                ## Purpose
                Ordinary resolutions, special resolutions, class consents and investor protective provisions each need a different majority from a different group of holders. Mapping which holders can pass, or block, each kind of decision shows founders where control really sits and which signatures each future deal will need.

                ## Milestones
                1. The majority each decision type needs taken from the law, the articles and the agreements.
                2. Voting power by holder and class calculated on the current register.
                3. Blocking positions for each decision type identified.
                4. The analysis refreshed after each round.
              priority: low
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A table shows, for each decision type, the required majority and which holders can pass or block it on the current register."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "List the majority each type of resolution and consent needs"
                - "Calculate voting power by holder and class from the register"
                - "Identify which holders or groups can block each decision type"
                - "Ask the agent to summarise the blocking positions in plain language"
            - name: HR and payroll links to the cap table
              description: |-
                ## Purpose
                Starters, leavers, promotions and moves abroad are recorded first in HR and payroll systems, and the cap table only learns about them if someone remembers to tell it. A monthly comparison, or an integration where the tools allow it, catches leavers whose options never lapsed and hires whose grants never reached the board.

                ## Milestones
                1. The HR events that affect equity listed: start, leave, grant promise, country move and extended leave.
                2. A monthly comparison of HR changes with the cap table set up.
                3. Integration options between the HR system and the equity tool checked.
                4. Three months with no HR event missing from the cap table.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Three consecutive months in which every equity-relevant HR event appears on the cap table within the same month."
                cadence: rolling
              tasks:
                - "List the HR events that change someone's equity"
                - "Check whether the HR system and equity tool can share data"
                - "Compare HR starters and leavers with the cap table @recurring(monthly:8)"
            - name: Point-in-time cap table history
              description: |-
                ## Purpose
                Acquirers, auditors and tax authorities ask what the cap table looked like on a specific past date: the day of a grant, the end of a tax year, the date a holder acquired their shares. Keeping dated versions and a ledger that can produce any as-at view answers those questions in minutes and supports holders' own tax relief claims.

                ## Milestones
                1. The ledger able to produce holdings as at any chosen date.
                2. Dated snapshots saved at every round close and year end.
                3. Acquisition dates recorded for each holding where tax reliefs depend on them.
                4. An as-at report tested against a known past date.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "An as-at report for a chosen past date matches the saved snapshot for that date exactly."
                cadence: rolling
              tasks:
                - "Add an as-at date filter to the ledger calculations"
                - "Test the as-at report against the last round's closing schedule"
                - "Record the acquisition date of each holding"
                - "Save a dated cap table snapshot @recurring(monthly:28)"
---

# Cap Table Management

This area is for founders and finance managers who keep the record of who owns the company, from the first grants to early hires through to a cap table with several share classes and dozens of holders. It starts with the foundations (one master record, every equity document gathered, a rebuild from source and a match to the statutory register), then the routines that keep it accurate, the skills behind the arithmetic, clean-up and structural decisions, the round, exit and year-end events, the situations that change ownership, and finally the specialist modelling of control and competing offers.

What repeats is a weekly equity event log, a monthly reconciliation with checks on pending grants, vesting cliffs, leaver exercise windows and HR changes, a quarterly board snapshot, access review and filings check, and an annual review with counsel, holder statements and year-end figures for the accounts. The Purchase decision, Operational checklist, Compliance control and Remediation plan templates pair with the projects that name them. Installing adds all 50 projects as active, so archive the ones that are not for you yet.
