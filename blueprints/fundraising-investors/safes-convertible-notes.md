---
id: fundraising-investors.safes-convertible-notes
name: SAFEs & Convertible Notes
description: "SAFEs and convertible notes handled with care: choosing the instrument, cap and discount, keeping a register and side letter tracker, modelling conversion and taking every holder through the priced round."
category: business
version: 1.0.0
tags: [fundraising-investors, safes-convertible-notes, founder, safe, convertible-notes, valuation-cap, early-stage-funding]
author: Aurum Technology
starter_structure:
  templates:
    - vendor
    - metrics-log
    - meeting-notes
  pillars:
    - name: Fundraising & Investor Relations
      emoji: "💰"
      description: "Raising capital and keeping investors informed: rounds from pre-seed to growth, grants and debt, the data room, cap table, investor updates, board reporting and exits."
      pillarFrontmatter:
        review_cadence: quarterly
      areas:
        - name: SAFEs & Convertible Notes
          description: "Raising money on SAFEs or convertible notes, choosing caps and discounts, and tracking how they convert in later rounds."
          projects:
            - name: Company set-up check before the first SAFE
              description: |-
                ## Purpose
                A SAFE promises shares in a company that must already exist, have founder shares properly issued and own its intellectual property, and gaps here are the first thing an investor's lawyer finds. Checking incorporation, founder share issues, vesting, IP assignment and authorised share headroom now avoids delaying the first cheque by weeks.

                ## Milestones
                1. Certificate of incorporation and constitutional documents located and saved in one folder.
                2. Founder shares formally issued, recorded and, where agreed, subject to vesting.
                3. A signed IP assignment to the company from every founder and early contractor.
                4. Authorised share capital confirmed with headroom for future conversions, or a resolution to increase it drafted.

                ## Notes
                If a founder holds shares through a personal holding company, tell your lawyer now: it changes signature blocks and sometimes the tax picture.

                Before you start: this plan is general information to help you organise your own money decisions. It is not financial, investment, tax or legal advice. Check decisions that matter with a qualified, licensed adviser in your country, and remember that investing and trading can lose money.
              priority: high
              deadlineOffsetDays: 14
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Incorporation documents, founder share records and signed IP assignments sit in one folder, with authorised share headroom confirmed by your lawyer."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Gather the incorporation certificate and constitutional documents into one folder"
                - "Confirm founder shares were formally issued and recorded in the share register"
                - "Collect signed IP assignments from every founder and early contractor"
                - "Ask your lawyer whether authorised share capital covers future conversions"
            - name: SAFE or convertible note decision
              description: |-
                ## Purpose
                SAFEs carry no interest and no maturity date, while convertible notes are debt that accrues interest and falls due, which changes everything if the priced round is late. Some investors, often in markets where SAFEs are less familiar, will only sign notes, so knowing which you will offer and why stops the instrument becoming a debate in every meeting.

                ## Milestones
                1. A one-page comparison of SAFE and note on interest, maturity, repayment risk, paperwork and investor familiarity.
                2. Your lawyer's view on which instrument is customary for your jurisdiction and likely investors.
                3. A decision recorded, with the circumstances in which you would offer the other instrument.
                4. A two-sentence answer ready for investors who ask why you chose it.

                ## Notes
                A note's maturity date gives holders real bargaining power: if no priced round has closed by then, they may be able to ask for repayment. Plan for that before choosing notes.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A written choice between SAFE and convertible note, with your lawyer's input and a fallback position, is saved in the fundraising folder."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "List the investors you expect and which instrument each usually signs"
                - "Write a one-page comparison of SAFE and note on five factors"
                - "Ask your lawyer which instrument is customary where you are incorporated"
                - "Record the decision and the condition for offering the other instrument"
            - name: Post-money or pre-money SAFE choice
              description: |-
                ## Purpose
                On a post-money SAFE the cap fixes each holder's ownership before the priced round, so every extra SAFE dilutes the founders rather than earlier holders; on a pre-money SAFE the dilution is shared and harder to predict. Many founders sign post-money forms without noticing that raising 2 million on a 10 million post-money cap means handing over a fixed 20% before the Series A investor arrives. Modelling both at your planned total sets expectations for every later cheque.

                ## Milestones
                1. The difference between pre-money and post-money ownership written out with one worked example.
                2. Founder ownership after conversion modelled under both forms at your planned total raise.
                3. A form chosen and noted in the fundraising folder.
                4. Co-founders' agreement to the ownership they will give up recorded.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "Founder ownership after conversion is modelled under both SAFE forms, with the chosen form and co-founder agreement recorded."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Work out the ownership one cheque buys under each form"
                - "Model founder ownership at the full planned raise under both forms"
                - "Discuss the result with co-founders and record their agreement"
                - "Note the chosen form and the reason in the fundraising folder"
            - name: Valuation cap range from comparable rounds
              description: |-
                ## Purpose
                Caps are set by what investors in your sector, stage and region have recently accepted, not by a formula, and a cap far above the market stalls a raise while one far below gives away ownership for nothing. Gathering ten recent comparable rounds from founders, accelerators and published round data gives you a range you can defend in a meeting.

                ## Milestones
                1. Ten recent convertible or priced rounds at your stage listed with cap or valuation, raise size, sector and source.
                2. Outliers removed and a low, middle and high cap identified.
                3. Ownership given up at each cap calculated for your planned raise.
                4. A target cap and a walk-away cap written down.

                ## Notes
                Founder anecdotes are more current than published reports but less reliable. Use both and note where each figure came from.
              priority: medium
              deadlineOffsetDays: 30
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A table of at least ten comparable rounds, with a written target cap and walk-away cap derived from it."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Ask three founders who raised in the last year what cap they agreed"
                - "Pull recent round data for your sector and stage from public sources"
                - "Calculate ownership given up at the low, middle and high cap"
                - "Write your target and walk-away caps on one page"
                - "Refresh the comparable rounds table while a raise is open @recurring(quarterly)"
            - name: Cap and discount terms decision
              description: |-
                ## Purpose
                Choosing between a cap only, a discount only, both, or neither with a most-favoured-nation clause decides how much each holder gains if the next round prices high or low. Working through what each combination gives a holder at three Series A valuations shows which terms are generous and which only look generous.

                ## Milestones
                1. Holder ownership at three priced-round valuations calculated for cap only, discount only and cap with discount.
                2. The valuation at which the cap starts to beat the discount identified.
                3. A standard set of economic terms chosen for this raise.
                4. Investor-specific exceptions you would accept written down in advance.

                ## Notes
                Customary discount levels vary by market and over time. Ask your lawyer what is normal now rather than copying a number from an old article.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "Standard economic terms for the raise, chosen after comparing three structures at three priced-round valuations, are written down with permitted exceptions."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Pick three plausible valuations for your next priced round"
                - "Calculate holder ownership under each term structure at each valuation"
                - "Find the valuation where the cap starts to beat the discount"
                - "Write the standard terms and permitted exceptions on one page"
            - name: Startup lawyer for the convertible paperwork
              description: |-
                ## Purpose
                Standard SAFE forms look simple enough to sign alone, yet the mistakes that hurt later, such as an unapproved issue, a missed securities filing or a side letter nobody recorded, are exactly what a good lawyer catches. Engaging one who does early-stage work, on a fixed fee for the round where possible, keeps legal cost predictable and questions quick.

                ## Milestones
                1. Three lawyers or firms with early-stage experience shortlisted from founder referrals.
                2. Fee quotes compared, ideally fixed for the whole convertible round.
                3. An engagement letter signed with scope covering forms, approvals, side letters and filings.
                4. One named contact agreed for quick questions during the raise.

                ## Notes
                Start from the **Vendor** template.
              priority: high
              deadlineOffsetDays: 14
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "An engagement letter with an early-stage lawyer, covering instrument forms, approvals, side letters and filings at a known fee, is signed."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Ask five founders which lawyer handled their SAFE round"
                - "Request fixed-fee quotes from three firms for the round"
                - "Sign an engagement letter covering forms, approvals and filings"
                - "Compare the latest legal bill with the agreed fee @recurring(monthly:12)"
            - name: Standard form and deviations list
              description: |-
                ## Purpose
                Investors sign standard forms quickly because they already know them, and every edit costs legal time and invites renegotiation from the next investor. Keeping the published text untouched and listing each agreed change in one place, with who asked and why, makes it obvious later which holders have special terms.

                ## Milestones
                1. The current version of the standard form downloaded from its publisher and saved unedited.
                2. A deviations list with columns for holder, clause, change, reason and date.
                3. Every requested change reviewed by your lawyer before it is accepted.
                4. The deviations list linked from the instrument register.
              priority: medium
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "An unedited master form and a deviations list showing every holder-specific change, each reviewed by your lawyer, are saved together."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Download the current standard form from the publisher's site"
                - "Save it unedited as the master copy"
                - "Create the deviations list with holder, clause, change, reason and date"
                - "Send each requested change to your lawyer before agreeing it"
            - name: Investor eligibility and securities filing check
              description: |-
                ## Purpose
                Selling a SAFE or note is a sale of securities, and most countries limit who can buy without a prospectus and expect a notice after the sale, for example a Form D filing in the United States. Knowing the investor tests and filing deadlines before the first signature avoids a compliance gap that surfaces in Series A diligence.

                ## Milestones
                1. The exemption your lawyer will rely on identified, with the investor tests it requires.
                2. An investor eligibility confirmation added to the onboarding form.
                3. Filing deadlines that follow the first sale entered in the calendar.
                4. Proof of each filing saved with the instrument records.

                ## Notes
                Friends and family often fail investor sophistication or wealth tests. Ask your lawyer before taking their money, not after.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "The exemption, investor eligibility test and post-sale filing deadlines are confirmed by your lawyer and recorded, with filing proof saved after each close."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Ask your lawyer which securities exemption the raise will use"
                - "Add an investor eligibility confirmation to the onboarding form"
                - "Enter the filing deadline that follows the first sale in the calendar"
                - "Check the list of required regional filings with your lawyer @recurring(yearly)"
            - name: Convertible instrument register
              description: |-
                ## Purpose
                Three years and eight SAFEs later, nobody remembers which holder has a discount, who signed the pre-money form and who holds a pro rata letter, and the Series A conversion depends on every one of those details. One register, updated on the day each instrument signs, becomes the single source the lawyers and the cap table rely on.

                ## Milestones
                1. A register with holder, legal entity, amount, date signed, date funded, form, cap, discount, MFN and side letters.
                2. Every existing instrument entered and checked against its signed copy.
                3. Register totals reconciled to bank receipts.
                4. Read access shared with your lawyer and whoever keeps the books.

                ## Notes
                Start from the **Metrics log** template. Record the investing entity's exact legal name, because that is the name the shares will be issued in.
              priority: high
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Every SAFE and note appears in one register with all economic terms, matching the signed copies and bank receipts exactly."
                cadence: rolling
              tasks:
                - "Create the register with a column for every economic term"
                - "Enter each existing instrument from its signed copy"
                - "Share read access with your lawyer and bookkeeper"
                - "Reconcile register totals to bank receipts @recurring(monthly:4)"
            - name: Conversion preview before the first signature
              description: |-
                ## Purpose
                Founders often discover the true cost of their SAFEs only when the Series A lawyer circulates the pro forma cap table. A simple preview now, showing the planned SAFE stack converting at a low, expected and high priced round with the option pool included, means the first signature is made with the dilution in plain view.

                ## Milestones
                1. Current fully diluted share count, including the option pool, entered in a model.
                2. The planned SAFE stack converted at three priced-round valuations.
                3. Founder, SAFE holder and new investor ownership shown after each scenario.
                4. The preview reviewed with a co-founder or adviser before the first signing.
              priority: medium
              deadlineOffsetDays: 45
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A conversion preview showing ownership after three priced-round scenarios is reviewed with a co-founder or adviser before the first SAFE is signed."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Enter the current fully diluted share count including the pool"
                - "Add the planned SAFEs with their caps and discounts"
                - "Run conversion at a low, expected and high priced round"
                - "Ask the agent to summarise the three scenarios in plain words"
                - "Review the preview with a co-founder or adviser"
            - name: Rolling close tracker for SAFE commitments
              description: |-
                ## Purpose
                Convertible rounds usually close one cheque at a time, so a verbal yes can sit for weeks without a signature or a wire. A tracker that moves each investor from verbal to sent, signed and funded, chased every Tuesday, shows the money actually raised rather than the hoped-for figure.

                ## Milestones
                1. Every investor in the round on a tracker with status verbal, sent, signed or funded.
                2. Each stalled commitment carrying a dated next step.
                3. Funded total, not committed total, reported to co-founders.
                4. Commitments unsigned after 30 days moved to a separate list.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A tracker shows each commitment's stage and a dated next step, with the funded total reported to co-founders every week of the raise."
                cadence: rolling
              tasks:
                - "List every verbal commitment with amount and date"
                - "Send signing links to everyone still at verbal stage"
                - "Chase unsigned and unfunded commitments @recurring(weekly:tue)"
                - "Move commitments unsigned after 30 days to a separate list"
            - name: Funds receipt and investor identity checks
              description: |-
                ## Purpose
                Money arrives from personal accounts, holding companies and trusts, sometimes from a name that does not match the signed SAFE, and your bank may ask where it came from. Matching every receipt to a signed instrument and the right legal entity, and keeping the identity checks your bank or lawyer requires, protects the company in diligence and at conversion.

                ## Milestones
                1. Wire instructions verified by phone with the bank and issued to investors in one standard document.
                2. Every receipt matched to a signed instrument and investing entity.
                3. Each mismatch between payer and signatory resolved in writing.
                4. Identity documents your bank or lawyer requires stored securely.

                ## Notes
                Fraudsters copy wire instruction emails. Tell investors that your bank details will never change by email, and confirm by phone if anyone receives such a message.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every funded instrument is matched to a bank receipt from the named investing entity, with any mismatch explained in writing."
                cadence: rolling
              tasks:
                - "Write one wire instruction document and verify it by phone with the bank"
                - "Tell investors that bank details will never change by email"
                - "Match each new receipt to a signed instrument @recurring(weekly:thu)"
                - "Resolve any payer and signatory mismatch in writing"
            - name: Board approval for each convertible issue
              description: |-
                ## Purpose
                Each SAFE or note normally needs a board resolution, sometimes shareholder consent, and enough authorised shares to cover conversion. Approving the round in one batch, covering its maximum size and standard terms, saves repeated paperwork and closes a gap investors' lawyers look for.

                ## Milestones
                1. The approvals your constitution and any shareholder agreement require for convertible issues confirmed with your lawyer.
                2. A resolution approving the round's maximum size and standard terms passed.
                3. Authorised share headroom checked against the lowest-price conversion scenario.
                4. Signed resolutions filed with the instrument records.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: artifact
                success_criteria: "A signed resolution covers every instrument issued, and authorised shares are sufficient for conversion at the lowest modelled price."
                cadence: rolling
              tasks:
                - "Ask your lawyer which approvals each convertible issue needs"
                - "Draft a resolution approving the round's maximum size and terms"
                - "Collect director signatures and file the resolution"
                - "Check authorised shares against the lowest-price conversion @recurring(quarterly)"
            - name: Executed instrument archive
              description: |-
                ## Purpose
                At conversion the lawyers need a fully signed copy of every SAFE, note, side letter and amendment, and one missing countersignature can hold up a closing. One archive, named consistently and checked each quarter, saves a frantic search through old inboxes and e-signature accounts.

                ## Milestones
                1. A folder structure with one subfolder per holder.
                2. Every instrument and side letter saved as a countersigned copy.
                3. A naming rule of date, holder and document type applied to every file.
                4. A quarterly check finding no missing signatures.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Each holder's folder holds countersigned copies of every instrument and side letter, with no gaps found at the last quarterly check."
                cadence: rolling
              tasks:
                - "Create one archive folder per holder"
                - "Save countersigned copies using a date, holder and document naming rule"
                - "Request any missing countersignatures from holders"
                - "Audit the archive for missing signatures @recurring(quarterly)"
            - name: Monthly SAFE stack conversion model
              description: |-
                ## Purpose
                Every new SAFE, option grant and pool change moves the conversion outcome, and a model last touched six months ago will mislead a term sheet conversation. Refreshing it monthly keeps founders and the board looking at the same numbers when a lead investor asks for the pro forma.

                ## Milestones
                1. The model linked to the instrument register and the option ledger.
                2. New instruments and option grants added each month.
                3. A one-line summary of founder ownership at the expected priced round circulated.
                4. Changes from the previous month explained in a short note.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "The conversion model matches the register and option ledger at each month end, and a one-line ownership summary reaches co-founders."
                cadence: rolling
              tasks:
                - "Link the conversion model to the instrument register"
                - "Refresh the model with new instruments and grants @recurring(monthly:9)"
                - "Write a one-line ownership summary for co-founders"
                - "Note what changed since last month and why"
            - name: Note interest and maturity calendar
              description: |-
                ## Purpose
                Convertible notes accrue interest that usually converts into extra shares, and each note has a maturity date after which holders gain bargaining power. A calendar of maturity dates and a monthly interest figure means no date arrives as a surprise and the share count at conversion is ready when the lawyers ask.

                ## Milestones
                1. Every note's principal, rate, start date and maturity date in one schedule.
                2. Accrued interest calculated to the end of each month.
                3. Maturity dates in the next six months flagged.
                4. A reminder set 90 days before each maturity date.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A schedule shows accrued interest for every note to the latest month end, with reminders set 90 days before each maturity date."
                cadence: rolling
              tasks:
                - "List every note with principal, rate, start and maturity dates"
                - "Set a reminder 90 days before each maturity date"
                - "Recalculate accrued interest on every note @recurring(monthly:28)"
                - "Review maturity dates falling in the next six months @recurring(quarterly)"
            - name: Side letter obligations tracker
              description: |-
                ## Purpose
                Pro rata rights, information rights and MFN clauses are promises that outlive the raise, and breaking one by accident sours a relationship with an early backer. Listing every obligation with its trigger and the action owed means the right people are offered their allocation and receive their reports on time.

                ## Milestones
                1. Every side letter and special clause listed with holder, right, trigger and action owed.
                2. Obligations triggered by the next priced round flagged.
                3. An owner named for each recurring obligation.
                4. No missed obligation found at the last monthly check.

                ## Notes
                Information rights often promise annual accounts within a set period. Put the actual date in the calendar, not just the promise in the tracker.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A tracker lists every side letter right with its trigger and owner, and the latest monthly check records no missed obligation."
                cadence: rolling
              tasks:
                - "List every side letter right by holder, trigger and action owed"
                - "Flag the rights the next priced round will trigger"
                - "Name an owner for each recurring obligation"
                - "Check upcoming side letter obligations @recurring(monthly:15)"
            - name: MFN notice routine for later instruments
              description: |-
                ## Purpose
                A most-favoured-nation clause lets an early holder adopt better terms you later give someone else, often only once you tell them. A short routine that compares every new instrument against existing MFN holders and sends a written notice keeps you inside the contract and avoids an argument at conversion.

                ## Milestones
                1. Every MFN holder and the terms they currently hold listed.
                2. Each new instrument compared against those terms before signing.
                3. A notice template drafted with your lawyer.
                4. Each notice and the holder's election saved in the archive.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every instrument issued after an MFN SAFE has a dated comparison, and any better term triggered a written notice with the holder's election on file."
                cadence: rolling
              tasks:
                - "List all MFN holders with their current terms"
                - "Draft an MFN notice template with your lawyer"
                - "Compare new instruments against MFN holders' terms @recurring(monthly:20)"
                - "File each notice and the holder's reply in the archive"
            - name: Year-end accounting for SAFEs and notes
              description: |-
                ## Purpose
                Accountants classify SAFEs and notes differently under different frameworks, often as liabilities rather than equity, and that choice changes the balance sheet a lender or acquirer reads. Handing your accountant the register, signed copies and side letters at year end gets the treatment decided once and applied the same way every year.

                ## Milestones
                1. Register, signed copies and side letters sent to the accountant within a month of year end.
                2. The accounting treatment of each instrument type recorded in a short memo from the accountant.
                3. Accrued note interest agreed with the year-end accounts.
                4. The disclosure of outstanding convertibles in the annual accounts reviewed before filing.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: deliverable
                success_criteria: "An accountant's memo states the treatment of each instrument type, and the annual accounts disclose every outstanding convertible."
                cadence: cyclic
              tasks:
                - "Ask your accountant how SAFEs and notes are treated under your framework"
                - "Send the register and signed copies to the accountant @recurring(yearly)"
                - "Agree accrued note interest with the year-end accounts"
                - "Review the convertible disclosure note before the accounts are filed"
            - name: Reading the post-money SAFE clause by clause
              description: |-
                ## Purpose
                Most founders who sign a SAFE could not explain its definitions of equity financing, liquidity event and dissolution event, which are exactly the clauses that matter when things go off plan. Reading the standard form slowly, with a plain-language line against each section, makes you a sharper counterpart to investors and lawyers.

                ## Milestones
                1. The current standard form read in full with a note against every section.
                2. The definitions of equity financing, liquidity event and dissolution event rewritten in your own words.
                3. Five questions you could not answer sent to your lawyer.
                4. The annotated copy saved for co-founders.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "An annotated copy of the standard SAFE with a plain-language line against every section, plus your lawyer's answers to five open questions."
                cadence: phased
                effort_hours_estimate: "5"
              tasks:
                - "Save the current standard SAFE as a copy you can annotate"
                - "Write a one-line plain summary against each section"
                - "Rewrite the three event definitions in your own words"
                - "Send your five open questions to your lawyer"
            - name: Conversion price arithmetic for caps and discounts
              description: |-
                ## Purpose
                When a SAFE has both a cap and a discount, the holder usually converts at whichever gives the lower price, and that single rule drives most conversion surprises. Working five examples by hand, then checking them against your model, means you can answer an investor's question in the meeting rather than by email afterwards.

                ## Milestones
                1. The cap price and discount price formulas written out for your chosen form.
                2. Five worked examples at different priced-round valuations done by hand.
                3. Each example checked against the conversion model.
                4. A one-page cheat sheet saved for future negotiations.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Five hand-worked conversion examples match the conversion model, and a one-page cheat sheet is saved."
                cadence: phased
                effort_hours_estimate: "3"
              tasks:
                - "Write the cap price and discount price formulas for your form"
                - "Work five conversion examples by hand at different valuations"
                - "Check each hand result against the conversion model"
                - "Save the formulas and examples as a one-page cheat sheet"
            - name: Convertible note mechanics and qualified financing
              description: |-
                ## Purpose
                Notes add three moving parts a SAFE lacks: interest, a maturity date and a qualified financing threshold that decides whether conversion happens automatically. Understanding how they interact, including what happens at maturity if no qualifying round has closed, is the difference between a note that converts quietly and one that becomes a negotiation.

                ## Milestones
                1. Interest, maturity and qualified financing clauses summarised from the note form you use.
                2. The possible outcomes at maturity listed: conversion, extension or repayment.
                3. A worked example converting principal plus accrued interest.
                4. Your lawyer's answer on who chooses the outcome at maturity recorded.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A written summary of interest, maturity and qualified financing terms, with a worked principal-plus-interest conversion and your lawyer's answer recorded."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Highlight the interest, maturity and conversion clauses in your note form"
                - "List what can happen at maturity under that form"
                - "Work one conversion including accrued interest"
                - "Ask your lawyer who chooses between conversion and repayment at maturity"
            - name: Liquidity and dissolution events in a SAFE
              description: |-
                ## Purpose
                If the company is sold before a priced round, or shuts down, the SAFE stops being a promise of future shares and becomes a claim on money, often the greater of the purchase amount back or the as-converted value. Knowing where SAFE holders rank against creditors and shareholders in each case avoids a nasty surprise in an acquisition conversation.

                ## Milestones
                1. The liquidity event and dissolution event clauses summarised in plain words.
                2. A worked sale example showing SAFE holder payouts at two sale prices.
                3. The ranking of SAFE holders against creditors and shareholders noted from the form.
                4. The summary confirmed by your lawyer.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A plain-language summary and a two-price sale example of SAFE payouts, confirmed by your lawyer, are saved with the annotated form."
                cadence: phased
                effort_hours_estimate: "3"
              tasks:
                - "Summarise the liquidity and dissolution clauses in plain words"
                - "Work SAFE holder payouts at a low and a high sale price"
                - "Note where SAFE holders rank against creditors and shareholders"
                - "Send the summary to your lawyer for confirmation"
            - name: Shadow preferred and liquidation preference overhang
              description: |-
                ## Purpose
                When SAFEs convert at a cap well below the Series A price, holders can receive a liquidation preference worth more than they paid, which new investors often resist. Learning how a shadow or sub-series of preferred shares fixes this, and raising it with your lawyer before the term sheet, prevents a late fight between old and new money.

                ## Milestones
                1. The overhang problem explained with one worked example.
                2. How a shadow or sub-series of preferred shares addresses it summarised.
                3. Your own SAFE stack checked for a large gap between cap and expected price.
                4. Your lawyer briefed before the priced round begins.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A worked overhang example for your own SAFE stack and a note of how your lawyer proposes to handle it at conversion are saved."
                cadence: phased
                effort_hours_estimate: "3"
              tasks:
                - "Work one overhang example with a low cap and a high Series A price"
                - "Summarise how a shadow series of preferred shares changes the outcome"
                - "Compare your caps with your expected priced-round valuation"
                - "Ask your lawyer how they would handle overhang at conversion"
            - name: Worked conversion scenarios for co-founders
              description: |-
                ## Purpose
                Co-founders and early employees need to see conversion, not just hear about it, especially those holding options priced off a pre-round valuation. Three scenarios, a disappointing, expected and strong priced round, laid out as before-and-after ownership tables give everyone the same picture and stop rumours about who owns what.

                ## Milestones
                1. Three before-and-after ownership tables drawn from the conversion model.
                2. Each table explained in two sentences without jargon.
                3. A walkthrough held with co-founders, with questions written down.
                4. Answers to the open questions shared within a week.
              priority: low
              frontmatter:
                mode: learning
                output_kind: artifact
                success_criteria: "Three before-and-after ownership tables have been walked through with every co-founder, and their questions answered in writing within a week."
                cadence: phased
                effort_hours_estimate: "3"
              tasks:
                - "Export three ownership tables from the conversion model"
                - "Write a two-sentence explanation under each table"
                - "Hold a walkthrough with co-founders and note their questions"
                - "Send written answers to the open questions"
            - name: Plain-language SAFE explainer for first-time angels
              description: |-
                ## Purpose
                Angels new to startups often hesitate at a SAFE because it has no share price, no interest and no repayment date. A two-page explainer in plain words, with one worked conversion and a clear statement that most early companies fail and the SAFE may be worth nothing, answers their questions before they are asked and shortens the time from yes to signature.

                ## Milestones
                1. A two-page explainer covering what a SAFE is, how it converts and what happens in a sale or shutdown.
                2. One worked conversion example using your own cap.
                3. A plain risk statement included and the explainer reviewed by your lawyer.
                4. The explainer sent alongside every signing link.

                ## Notes
                The explainer describes the instrument; it is not advice to invest. Your lawyer should approve the wording before it goes to anyone.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A lawyer-reviewed two-page explainer with a worked example and risk statement accompanies every SAFE signing link."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Ask the agent to draft a two-page explainer from your annotated form"
                - "Add one worked conversion example using your own cap"
                - "Write a plain risk statement and send the draft to your lawyer"
                - "Attach the approved explainer to every signing link"
            - name: Tax questions on convertibles for your accountant
              description: |-
                ## Purpose
                Whether a SAFE counts as shares for tax purposes can affect holding periods, eligibility for investor tax relief schemes and how note interest is treated, and the answers differ by country. Preparing a written question list before the raise, and getting written answers, avoids promising investors a tax outcome the instrument cannot deliver.

                ## Milestones
                1. A list of tax questions covering holding periods, investor relief eligibility and note interest.
                2. The list sent to an accountant who advises early-stage companies.
                3. Written answers saved with the fundraising records.
                4. Any answer that affects instrument choice fed back to the SAFE or note decision.

                ## Notes
                In some countries a standard SAFE does not qualify for investor tax relief and a local form does. Ask before choosing the form, not after investors have signed.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Written answers from an accountant to a prepared list of convertible tax questions are saved and reflected in the instrument choice."
                cadence: phased
                effort_hours_estimate: "3"
              tasks:
                - "Write down the tax questions investors have asked so far"
                - "Add questions on holding periods, relief eligibility and note interest"
                - "Send the list to an accountant who advises early-stage companies"
                - "Save the written answers with the fundraising records"
            - name: Tiered caps for early and late cheques
              description: |-
                ## Purpose
                Rewarding the first cheques with a lower cap and raising it as the round fills, sometimes called high-resolution fundraising, can create momentum, but it also leaves a stack of different prices to explain at Series A. Deciding the tiers, the trigger for each step and how you will tell investors, before the first meeting, keeps the approach honest.

                ## Milestones
                1. Two or three cap tiers set, each with the amount raised that triggers the next.
                2. Conversion of the tiered stack modelled at the expected priced round.
                3. A sentence written explaining the tiers to investors.
                4. Each signed instrument tagged with its tier in the register.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A written tier plan with triggers and an investor explanation exists, and every signed instrument is tagged with its tier."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Set two or three cap tiers and the amount that triggers each step"
                - "Model conversion of the tiered stack at the expected priced round"
                - "Write one sentence explaining the tiers to investors"
                - "Add a tier column to the instrument register"
            - name: Uncapped or MFN-only SAFE for a strategic investor
              description: |-
                ## Purpose
                Customers, suppliers and partners sometimes want to invest a small amount on a SAFE with no cap, or with only an MFN clause, so the next round sets their price. Weighing that against a capped SAFE, and against what the strategic relationship is really worth, stops a small cheque setting an awkward precedent for the rest of the round.

                ## Milestones
                1. The strategic benefit the investor brings written in one paragraph.
                2. Capped, uncapped and MFN-only versions compared for holder and founder outcomes.
                3. The effect on other investors' MFN rights checked.
                4. A decision recorded and the chosen form noted in the deviations list.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A recorded decision on the strategic investor's instrument, with the comparison and MFN check saved alongside it."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Write what the strategic investor brings beyond the money"
                - "Compare capped, uncapped and MFN-only outcomes for both sides"
                - "Check whether the chosen terms trigger existing MFN rights"
                - "Record the decision in the deviations list"
            - name: Pro rata side letter policy
              description: |-
                ## Purpose
                Pro rata letters let a holder buy into the next round to keep their stake, and handing them to every small cheque can crowd out the Series A lead. A written policy, such as pro rata only above a set cheque size, gives you a consistent answer when investors ask and protects room in the next round.

                ## Milestones
                1. A cheque-size threshold for pro rata rights agreed with co-founders.
                2. The total possible pro rata demand at the next round estimated.
                3. A standard pro rata side letter form chosen with your lawyer.
                4. The policy written in two sentences for investor conversations.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A two-sentence pro rata policy with a cheque-size threshold, and an estimate of total pro rata demand at the next round, are saved."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Agree a cheque-size threshold for pro rata rights with co-founders"
                - "Estimate total pro rata demand at the next round"
                - "Choose a standard pro rata side letter form with your lawyer"
                - "Write the policy in two sentences for investor conversations"
            - name: Minimum cheque and allocation rules
              description: |-
                ## Purpose
                Twenty small SAFEs mean twenty signatures, twenty identity checks and twenty lines to convert, and some lead investors dislike a long tail of holders. Setting a minimum cheque, a maximum total and an order of priority for allocation before the round gets busy makes the hard conversations short.

                ## Milestones
                1. A minimum cheque size and maximum total raise agreed.
                2. Allocation priority written down, for example strategic value first, then commitment date.
                3. A route offered for smaller investors, such as a single pooled vehicle, checked with your lawyer.
                4. The rules shared with anyone helping you raise.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "Written rules for minimum cheque, maximum total and allocation priority are agreed and shared with everyone helping to raise."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Agree a minimum cheque size and a maximum total raise"
                - "Write the allocation priority in order"
                - "Ask your lawyer whether smaller investors could join through one vehicle"
                - "Share the rules with advisers helping you raise"
            - name: Qualified financing threshold for notes
              description: |-
                ## Purpose
                The threshold that makes a note convert automatically, usually a minimum amount of new money in a priced round, decides whether a small insider round can trigger conversion. Set too high, notes may never convert; set too low, a tiny round converts them at a price nobody intended.

                ## Milestones
                1. The threshold in your note form identified and whether it includes converting notes.
                2. Your realistic next priced round size compared with the threshold.
                3. A threshold agreed with your lawyer and noted in the deviations list.
                4. The effect on existing notes, if any, checked.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A qualified financing threshold, checked against your realistic next round size and agreed with your lawyer, is recorded in the deviations list."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Find the qualified financing definition in your note form"
                - "Check whether converting notes count towards the threshold"
                - "Compare the threshold with your realistic next round size"
                - "Agree the threshold with your lawyer and record it"
            - name: Answering valuation cap pushback
              description: |-
                ## Purpose
                Investors who like the company still push on the cap, often by citing a lower comparable, a smaller market or a risk you have not addressed. Writing and rehearsing answers to the five objections you hear most, and logging each new one after meetings, turns a defensive moment into a short, prepared exchange.

                ## Milestones
                1. The five most common cap objections written down from past meetings.
                2. A short, evidence-based answer prepared for each.
                3. Answers rehearsed aloud with an adviser playing the investor.
                4. New objections logged after each meeting and the answers updated.

                ## Notes
                Start from the **Meeting notes** template to log each objection with the investor's exact words.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Written answers to the five most common cap objections have been rehearsed with an adviser, and the log is updated after each meeting."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Write down the five cap objections you hear most"
                - "Prepare a short, evidence-based answer to each"
                - "Rehearse the answers with an adviser playing the investor"
                - "Log new objections after each investor meeting"
            - name: When to stop stacking SAFEs and price a round
              description: |-
                ## Purpose
                SAFEs are quick to sign, so it is easy to keep raising on them until the total converting at Series A worries the lead. Setting a ceiling on total convertible money and the milestone at which you will raise a priced round instead keeps the stack a size new investors accept.

                ## Milestones
                1. Total convertible money outstanding and its converted ownership calculated.
                2. A ceiling agreed, expressed as both an amount and an ownership percentage.
                3. The milestone that triggers a priced round written down.
                4. The ceiling reviewed with an experienced investor or adviser.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A written ceiling on convertible money, as an amount and an ownership percentage, and the milestone that triggers a priced round are recorded."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Calculate total convertible money and its converted ownership"
                - "Agree a ceiling as an amount and a percentage"
                - "Write the milestone that triggers a priced round"
                - "Compare the outstanding total with the ceiling @recurring(quarterly)"
            - name: Interest rate and maturity terms for a new note
              description: |-
                ## Purpose
                Choosing a note's interest rate, maturity length and what happens at maturity sets how much extra ownership interest buys and how much pressure the date creates later. Agreeing these deliberately, with an optional conversion at maturity rather than repayment where your lawyer thinks it customary, avoids terms you will regret if the next round slips.

                ## Milestones
                1. Market norms for rate and maturity length gathered from your lawyer and two recent founders.
                2. Extra shares from interest modelled over the full maturity period.
                3. The maturity outcome chosen: automatic conversion, holder option or repayment.
                4. Terms recorded in the deviations list before the first note is sent.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "Interest rate, maturity length and maturity outcome for the note are chosen after modelling interest dilution, and recorded before the first note is sent."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Ask your lawyer what rate and maturity length are normal now"
                - "Model the extra shares interest adds over the full term"
                - "Choose what happens at maturity and why"
                - "Record the terms before sending the first note"
            - name: First SAFE signed and funded
              description: |-
                ## Purpose
                Your first signed and funded SAFE tests every piece of the set-up: the form, the approvals, the signing tool, the wire instructions, the filing deadline and the register. Treating it as a rehearsal, with a short review afterwards, means the next ten cheques run smoothly.

                ## Milestones
                1. The first SAFE countersigned and the funds received.
                2. The instrument entered in the register and saved in the archive.
                3. Any filing triggered by the first sale diarised or completed.
                4. A short note of what to fix before the next signing.
              priority: medium
              deadlineOffsetDays: 60
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "The first SAFE is countersigned, funded, entered in the register, archived and any triggered filing diarised, with a fix list written."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Send the first SAFE through your signing tool with the explainer attached"
                - "Confirm receipt of funds and match it to the signed copy"
                - "Enter the instrument in the register and archive"
                - "Write down what to fix before the next signing"
            - name: Accelerator standard SAFE deal review
              description: |-
                ## Purpose
                Many accelerators invest on their own standard SAFE terms, sometimes a fixed amount for a fixed ownership plus a separate uncapped or MFN component, and the offer often arrives with a short deadline. Modelling exactly what the package costs in ownership and how it interacts with your other SAFEs lets you accept or decline on facts.

                ## Milestones
                1. The offer's components and ownership effect written out.
                2. Conversion of the accelerator SAFE modelled alongside your existing stack.
                3. Two alumni asked how the terms played out at their priced round.
                4. A decision recorded before the deadline.
              priority: medium
              deadlineOffsetDays: 14
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A written model of the accelerator SAFE's ownership cost, alongside your existing stack, and a decision recorded before the offer deadline."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Write out each component of the accelerator's offer"
                - "Add the accelerator SAFE to the conversion model"
                - "Ask two alumni how the terms played out at their priced round"
                - "Record your decision before the offer deadline"
            - name: Ninety days before a note matures
              description: |-
                ## Purpose
                Ninety days gives time to talk to every holder, model the options and paper an extension or voluntary conversion before the date passes. Leaving it to the final week hands bargaining power to whichever holder is least patient, and a note in default can alarm the next investor.

                ## Milestones
                1. Every note maturing in the window listed with principal and accrued interest.
                2. Options modelled: extension, conversion at an agreed price or repayment.
                3. A conversation held with each holder and their preference recorded.
                4. Signed extensions or conversion agreements in the archive before the maturity date.

                ## Notes
                Start conversations with the largest holders first; if notes allow a majority to bind the rest, your lawyer can tell you what that majority is.
              priority: high
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "Every note maturing in the window has a signed extension, conversion or repayment agreement on file before its maturity date."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "List every note maturing in the next 90 days with accrued interest"
                - "Model extension, conversion and repayment for each note"
                - "Call each holder and record their preferred option"
                - "Ask your lawyer to paper the agreed extensions or conversions"
            - name: Conversion closing at the priced round
              description: |-
                ## Purpose
                At the Series A closing every SAFE and note converts at once, and the lawyers need the register, signed copies, side letters, accrued interest and each holder's signature on the new share documents. Preparing a conversion pack a month before closing keeps holders from being the reason the round slips.

                ## Milestones
                1. A conversion schedule showing each holder's shares, price and share class, agreed with the lead's lawyer.
                2. Conversion statements sent to every holder with their calculation.
                3. Signatures from every holder on the documents the conversion requires.
                4. The register closed out and each instrument marked converted.
              priority: high
              frontmatter:
                mode: event
                output_kind: deliverable
                success_criteria: "Every SAFE and note is shown as converted on a schedule agreed with the lead's lawyer, with each holder's signed documents on file."
                cadence: one-shot
                effort_hours_estimate: "10"
              tasks:
                - "Send the register, signed copies and side letters to your lawyer"
                - "Ask the agent to draft a conversion statement template for holders"
                - "Agree the conversion schedule with the lead investor's lawyer"
                - "Chase every holder's signature on the conversion documents"
                - "Mark each instrument converted in the register"
            - name: Acquisition offer with SAFEs outstanding
              description: |-
                ## Purpose
                An approach from a buyer before any priced round turns every SAFE into a claim for cash or shares, and the buyer will ask early what the holders receive. Working out each holder's entitlement under the liquidity clause before the price is negotiated shows what the founders and team will actually take home.

                ## Milestones
                1. Each holder's payout calculated at the offered price under the liquidity clause.
                2. Founder and employee proceeds shown after SAFE holders are paid.
                3. Your lawyer's confirmation of the calculation recorded.
                4. A plan for when and how holders will be told.

                ## Notes
                Confidentiality terms with the buyer may limit what you can tell holders, and when. Agree the timing with your lawyer.
              priority: medium
              frontmatter:
                mode: event
                output_kind: deliverable
                success_criteria: "A lawyer-confirmed payout table for every SAFE holder at the offered price, with founder and employee proceeds shown, is ready before price negotiation."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Calculate each holder's payout at the offered price"
                - "Show founder and employee proceeds after holders are paid"
                - "Send the payout table to your lawyer for confirmation"
                - "Agree with your lawyer when holders can be told"
            - name: Company wind-down with SAFEs outstanding
              description: |-
                ## Purpose
                Closing a company that has SAFEs or notes outstanding brings duties to creditors and holders that differ by country, and holders deserve to hear it from you before they hear it elsewhere. Taking professional advice early, working out what the dissolution clause entitles holders to, and writing to them plainly protects both your reputation and your legal position.

                ## Milestones
                1. A lawyer or insolvency professional engaged for the wind-down.
                2. Each holder's position under the dissolution clause, or as a creditor for notes, written down.
                3. A plain letter to holders approved by your adviser and sent.
                4. Holder questions answered and records kept for the required period.

                ## Notes
                Directors' duties can change once a company may be unable to pay its debts. Take professional advice before paying anyone, including holders.
              priority: medium
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A professional is engaged, each holder's entitlement is written down, and an adviser-approved letter has reached every holder."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Book a call with a lawyer or insolvency professional"
                - "Write down each holder's position under the dissolution clause"
                - "Draft a plain letter to holders and have your adviser approve it"
                - "Log every holder question and the answer given"
            - name: Solo founder running a SAFE raise
              description: |-
                ## Purpose
                Without a co-founder, one person pitches, signs, chases wires and keeps the register, and the admin slips first. Protecting two hours a week for paperwork and asking a trusted adviser to check each signed SAFE before it is filed catches the errors a second founder would have spotted.

                ## Milestones
                1. A weekly two-hour block for fundraising admin in the calendar.
                2. An adviser agreed to review each new instrument within a week of signing.
                3. A checklist covering signature, funds, register, archive and filings in use.
                4. No instrument older than a week missing from the register.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A weekly admin block is kept, an adviser reviews each signed instrument, and the register has no instrument missing for more than a week."
                cadence: rolling
              tasks:
                - "Ask one trusted adviser to review each new instrument"
                - "Write a five-step post-signing checklist"
                - "Run the post-signing checklist on any new instrument"
                - "Spend two hours on fundraising admin @recurring(weekly:wed)"
            - name: Founder outside the United States choosing a local convertible form
              description: |-
                ## Purpose
                The SAFE was written for US companies, and founders elsewhere often use local versions, such as the advance subscription agreement common in the UK or adapted SAFEs published by local accelerators and venture associations. Comparing the local form with the US one, with a lawyer in your jurisdiction, avoids an instrument that does not work under your company law or tax rules.

                ## Milestones
                1. Local convertible forms in common use identified with your lawyer.
                2. Key differences from the US SAFE noted, such as long-stop dates or tax relief eligibility.
                3. Investor familiarity with each form checked with two local founders.
                4. A form chosen and the reasons recorded.
              priority: medium
              deadlineOffsetDays: 45
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A local convertible form is chosen with a lawyer in your jurisdiction, with its differences from the US SAFE written down."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Ask a local lawyer which convertible forms are common where you are"
                - "List the differences between the local form and the US SAFE"
                - "Ask two local founders which form their investors signed"
                - "Record the chosen form and the reasons"
            - name: Friends and family on convertible terms
              description: |-
                ## Purpose
                Relatives and friends often invest out of loyalty, may not meet investor eligibility tests and will still be family if the company fails. Giving them the same form and terms as everyone else, a clear written risk statement and a realistic amount they can afford to lose keeps the money and the relationships intact.

                ## Milestones
                1. Eligibility of each friend or family investor checked with your lawyer.
                2. The same standard form and terms offered as to other investors.
                3. A written risk statement given and acknowledged before signing.
                4. A yearly short note sent on the status of their SAFE.

                ## Notes
                Encourage relatives to talk to their own adviser before investing. Never suggest an amount; let them decide what they could afford to lose.
              priority: medium
              frontmatter:
                mode: service
                output_kind: habit
                success_criteria: "Every friend or family investor has passed an eligibility check, signed standard terms and acknowledged a written risk statement."
                cadence: rolling
              tasks:
                - "List every friend or relative who has offered to invest"
                - "Check each one's eligibility with your lawyer"
                - "Give each a written risk statement to acknowledge before signing"
                - "Send a short note on where their SAFE stands @recurring(yearly)"
            - name: Non-US company issuing a SAFE to a US investor
              description: |-
                ## Purpose
                US angels and funds may offer to invest only on a familiar US form, which may not fit a company incorporated elsewhere, and some will suggest re-domiciling first. Getting lawyers in both countries to agree what the investor will sign, and whether a later reorganisation is likely, avoids paying twice for the same paperwork.

                ## Milestones
                1. The investor's requirements on form and jurisdiction written down.
                2. Your local lawyer's view on adapting a US-style SAFE recorded.
                3. Whether a future reorganisation is expected, and how the SAFE would carry over, noted.
                4. A signed instrument both lawyers are comfortable with.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "An instrument approved by lawyers in both jurisdictions is signed, with any expected reorganisation and its effect on the SAFE noted."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Ask the investor exactly which form and jurisdiction they need"
                - "Get your local lawyer's view on adapting a US-style SAFE"
                - "Ask how the SAFE would carry over in a later reorganisation"
                - "Confirm both lawyers approve the final instrument"
            - name: Second-time founder's fast SAFE round
              description: |-
                ## Purpose
                Founders with a previous exit or strong investor relationships can often fill a SAFE round in weeks from people who already know them, and speed tempts them to skip the paperwork discipline. Keeping the register, approvals and filings in step with a fast close means the round that took three weeks does not take three months to clean up.

                ## Milestones
                1. Approvals for the full round size passed before the first signature.
                2. Every instrument entered in the register on the day it signs.
                3. Filings completed within their deadlines.
                4. A post-close check finding every signed copy, receipt and side letter in place.
              priority: low
              frontmatter:
                mode: operating
                output_kind: deliverable
                success_criteria: "The fast round closes with approvals, register entries, filings and archive complete, confirmed by a post-close check."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Pass approvals for the full round size before sending any SAFE"
                - "Enter each instrument in the register on the day it signs"
                - "Complete the filings the first sale triggers"
                - "Run a post-close check of signed copies, receipts and side letters"
            - name: SAFEs held in more than one currency
              description: |-
                ## Purpose
                Holding SAFEs in two or three currencies leaves instruments that will convert at a priced round set in yet another, and the exchange rate used can move ownership noticeably. Agreeing with your lawyer which date's rate applies, and tracking the converted totals monthly, removes an argument nobody expects.

                ## Milestones
                1. Every SAFE's currency and amount recorded in the register.
                2. The exchange rate rule at conversion confirmed with your lawyer.
                3. A home-currency total maintained using a stated monthly rate.
                4. Holders told in writing how the rate will be set.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Each SAFE's currency is recorded, the conversion rate rule is agreed with your lawyer and told to holders, and a monthly home-currency total is kept."
                cadence: rolling
              tasks:
                - "Add currency and amount columns to the register"
                - "Ask your lawyer which exchange rate applies at conversion"
                - "Tell holders in writing how the rate will be set"
                - "Update the home-currency total at a stated rate @recurring(monthly:26)"
            - name: Transfer requests for SAFEs and notes
              description: |-
                ## Purpose
                Holders sometimes ask to move a SAFE or note into a holding company, a fund vehicle or a family member's name, and most forms require company consent. A simple process for checking the request, the new holder's eligibility and the paperwork keeps the register accurate and avoids an unapproved holder appearing at conversion.

                ## Milestones
                1. The transfer clause in each form summarised.
                2. A request checklist covering reason, new holder, eligibility and consent.
                3. Each approved transfer papered and the register updated.
                4. Declined requests answered in writing with the reason.
              priority: low
              frontmatter:
                mode: service
                output_kind: artifact
                success_criteria: "Every transfer request has a written decision, and approved transfers have signed paperwork and an updated register line."
                cadence: rolling
              tasks:
                - "Summarise the transfer clause in each form you have issued"
                - "Write a checklist for reviewing a transfer request"
                - "Check the new holder's eligibility with your lawyer"
                - "Update the register and archive after each approved transfer"
            - name: Disputed conversion calculation with a holder
              description: |-
                ## Purpose
                A holder who expected more shares at conversion, because of a misread cap, a forgotten MFN or a different pool count, can delay a closing by refusing to sign. Showing the calculation step by step, from the clause to the number, and escalating to your lawyer quickly, usually resolves it before the lead investor notices.

                ## Milestones
                1. The holder's expected figure and your figure set side by side.
                2. The difference traced to a specific clause, term or input.
                3. A step-by-step calculation sent to the holder, reviewed by your lawyer.
                4. Agreement or a lawyer-to-lawyer conversation recorded.
              priority: medium
              frontmatter:
                mode: service
                output_kind: deliverable
                success_criteria: "The disputed calculation is traced to a clause, explained in writing and either agreed with the holder or passed to lawyers within two weeks."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Ask the holder to send their calculation in writing"
                - "Trace the difference to a clause, term or input"
                - "Send a step-by-step calculation reviewed by your lawyer"
                - "Record the agreement or hand the matter to the lawyers"
            - name: Amending and restating old notes into SAFEs
              description: |-
                ## Purpose
                Companies with a tail of old notes, some past maturity and still accruing interest, sometimes ask holders to swap them for SAFEs before a priced round, which simplifies conversion but needs every holder's consent or the majority the notes allow. Planning the offer, the treatment of accrued interest and the holder conversations carefully keeps goodwill while cleaning the stack.

                ## Milestones
                1. Every old note listed with principal, interest, maturity status and the consent threshold.
                2. Proposed SAFE terms, including how accrued interest is treated, agreed with your lawyer.
                3. Each holder briefed and their response recorded.
                4. Signed amendments in the archive and the register updated.
              priority: low
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "Every old note is either restated as a SAFE with signed amendments on file or listed with the holder's recorded reason for declining."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "List every old note with interest, maturity status and consent threshold"
                - "Agree proposed SAFE terms and interest treatment with your lawyer"
                - "Brief each holder and record their response"
                - "File signed amendments and update the register"
---

# SAFEs & Convertible Notes

This area is for founders raising on SAFEs or convertible notes who want the speed of a simple instrument without the mess that usually surfaces at Series A. It starts with the foundations (company set-up, SAFE or note, post-money or pre-money, the cap and discount, a lawyer, filings and a register), then the machinery that keeps a convertible stack clean, the mechanics worth learning properly, the decisions on caps, pro rata and when to stop stacking, the dated moments from first signature to conversion or sale, variants for solo, international, friends-and-family and second-time founders, and finally the specialist problems experienced founders meet.

What repeats is a Tuesday chase of unsigned commitments and a Thursday match of wires during a raise, monthly checks of the register, conversion model, side letters, MFN holders, note interest and legal bills on different days, quarterly reviews of comparables, share headroom, the archive and maturities, and a yearly hand-over to your accountant. The Vendor, Metrics log and Meeting notes templates pair with the projects that name them. Installing adds all 50 projects as active, so archive the ones that are not for you yet.
