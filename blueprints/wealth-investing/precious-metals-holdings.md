---
id: wealth-investing.precious-metals-holdings
name: Precious Metals Holdings
description: "Gold and silver held on purpose: a written role and cap, a dealer and storage you trust, insurance and cost records in order, and clear plans for selling the metal or passing it on."
category: personal
version: 1.0.0
tags: [wealth-investing, precious-metals-holdings, everyone, gold, silver, bullion, storage, insurance]
author: Aurum Technology
starter_structure:
  templates:
    - purchase-decision
    - vendor
    - metrics-log
    - operational-checklist
    - risk-register
  pillars:
    - name: Wealth & Investing
      emoji: "📈"
      description: "Building long-term wealth: pensions and retirement accounts, index investing, property, side income, estate planning and the slow, boring decisions that compound over decades."
      pillarFrontmatter:
        review_cadence: quarterly
      areas:
        - name: Precious Metals Holdings
          description: "Holding gold and silver through funds, bullion or coins, with storage, insurance and a clear role in the portfolio."
          projects:
            - name: Writing down why you hold gold and silver
              description: |-
                ## Purpose
                Most people buy gold after reading a frightening headline, then never decide what it is for, so the amount drifts with the news rather than with any plan. Writing the role you want metal to play, whether a crisis hedge, a store of value outside the banking system or simple diversification, and capping it as a share of investable wealth, turns a reaction into a decision you can hold to.

                ## Milestones
                1. The role you want gold and silver to play written in one or two sentences.
                2. Your investable wealth estimated, leaving out your home and emergency cash.
                3. A maximum metals allocation recorded as a percentage of that figure.
                4. What metal is not expected to do noted, such as paying an income.
                5. The decision dated and agreed with a partner if money is shared.

                ## Notes
                There is no correct percentage. If you use a financial adviser, share the cap so it sits inside your wider plan rather than beside it.

                Before you start: this plan is general information to help you organise your own money decisions. It is not financial, investment, tax or legal advice. Check decisions that matter with a qualified, licensed adviser in your country, and remember that investing and trading can lose money.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A dated note giving the role of precious metals in your wealth and a maximum allocation as a percentage of investable assets."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Write one sentence on what you want gold and silver to do for you"
                - "Estimate investable wealth excluding your home and emergency fund"
                - "Set a maximum metals percentage and write it beside the role"
                - "Revisit the role and the cap at your yearly wealth review @recurring(yearly)"
            - name: Inventory of every coin, bar and metals fund you own
              description: |-
                ## Purpose
                Precious metals scatter easily: a fund bought years ago on one platform, sovereigns from a grandparent, a silver bar won in a raffle, a vault account opened during a price spike. One list showing every holding, its weight, purity, where it sits and how you proved you bought it is the base for storage, insurance, tax and anyone who one day has to find it.

                ## Milestones
                1. Every fund, vault account, coin and bar you own listed, including inherited items.
                2. Each physical item described by type, weight, purity and quantity.
                3. Each entry noting where it is kept and whether a receipt exists.
                4. The list stored securely, with no safe codes or passwords in it.

                ## Notes
                Check old email for dealer order confirmations and platform statements; they often reveal holdings you had forgotten. Keep safe combinations and vault logins out of this list.
              priority: high
              deadlineOffsetDays: 14
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A dated inventory of every precious metals holding with type, weight, purity, location and proof of purchase noted."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Search your email for bullion dealer and fund platform confirmations"
                - "List every coin, bar and fund with weight, purity and location"
                - "Note which items have a receipt and which have none"
                - "Store the inventory where a trusted person could find it"
            - name: Funds, vaulted bullion or coins at home compared
              description: |-
                ## Purpose
                Gold and silver can be owned three main ways, and each fails differently: a fund depends on its custodian and platform, a vault account on the operator, and coins at home on your locks and your insurer. Comparing the three against your own reasons for holding metal, before buying more, stops you paying for physical ownership you do not need or trusting paper you would not want in a crisis.

                ## Milestones
                1. Funds, professionally vaulted bullion and home storage each described in a paragraph.
                2. Each option scored on cost, ease of selling, counterparty risk and tax.
                3. The option that matches your written role for metal chosen.
                4. Any mix between the options recorded with a rough split.

                ## Notes
                Someone holding metal for diversification often finds a fund enough; someone holding it as insurance against the financial system usually wants physical metal they can identify by bar or coin.
              priority: high
              deadlineOffsetDays: 45
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A written comparison of funds, vaulted bullion and home storage with a chosen route or split recorded and dated."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "List what each route costs per year on a holding of your size"
                - "Write down who you would be relying on under each route"
                - "Score each route against the role you wrote for metal"
                - "Record the chosen route and any split between routes"
            - name: Choosing a physically backed gold or silver fund
              description: |-
                ## Purpose
                Exchange-traded gold and silver products differ more than their names suggest: some hold allocated bars with a published list, some hold derivatives, and yearly charges vary several times over. Picking one with checked backing, a known custodian and a charge you have compared means the simplest route to metal is also a sound one.

                ## Milestones
                1. Three funds available on your platform shortlisted.
                2. Each fund's backing, custodian and bar list publication confirmed from its documents.
                3. Yearly charges and the typical dealing spread compared.
                4. One fund chosen and the reason written down.

                ## Notes
                Start from the **Purchase decision** template. Check the fund's legal structure as well as its charge: a product that tracks the price with swaps is not the same as one holding metal.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "One gold or silver fund chosen, with its backing, custodian and yearly charge recorded against two alternatives."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Search your platform for physically backed gold and silver products"
                - "Read each fund's factsheet for custodian and bar list details"
                - "Compare yearly charges and recent bid and offer spreads"
                - "Write down the chosen fund and the reason"
            - name: Choosing a reputable bullion dealer
              description: |-
                ## Purpose
                Buying physical metal means trusting a dealer with your money before the metal arrives, and the gap between good and poor dealers shows up in premiums, buyback prices, delivery and what happens if they fold. Checking track record, trade association membership, how customer money is held and the buyback promise before the first order saves you from the most common bullion losses.

                ## Milestones
                1. Three dealers shortlisted from trade association member lists or long-standing names.
                2. Each dealer's years trading, reviews and complaint history checked.
                3. Premiums and buyback prices on the same coin or bar compared on one day.
                4. Delivery insurance, payment protection and buyback terms read and noted.
                5. One primary dealer and one backup chosen.

                ## Notes
                Start from the **Vendor** template. Be wary of any dealer that cold calls, pushes collectable or proof coins for investment, or asks for payment in ways you cannot trace.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A primary and backup bullion dealer chosen, each with checked history, compared premiums and recorded buyback terms."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Find the member list of a recognised bullion trade association"
                - "Compare buying and buyback prices for one coin across three dealers"
                - "Read each dealer's delivery and buyback terms"
                - "Confirm your chosen dealer is still trading normally @recurring(yearly)"
            - name: Storage plan for physical bullion
              description: |-
                ## Purpose
                Physical metal is only as safe as the place it sits, and a sock drawer or a cheap cabinet safe is exactly where burglars look. Deciding between a bolted home safe, a bank safe deposit box and a professional vault, with the trade-offs on cost, access and insurance written down, means you know where the metal lives before it arrives.

                ## Milestones
                1. Home safe, safe deposit box and professional vault compared on cost, access and insurability.
                2. Your insurer asked which safe rating or storage it accepts.
                3. A storage choice made and the total value it can hold noted.
                4. Who knows where the metal is kept decided and kept to that list.

                ## Notes
                Many home insurers cap cover for bullion unless it is in a rated, fixed safe. Ask before buying a safe, not after. Talk about holdings with as few people as possible.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A written storage decision for physical metal, confirmed acceptable to your insurer, with a maximum value for that location."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Ask your home insurer what cover applies to bullion and in what safe"
                - "Price a rated bolted safe, a safe deposit box and a vault account"
                - "Choose where the metal will live and the most it should hold"
                - "List the few people who will know where it is kept"
            - name: Insuring bullion kept at home or in a vault
              description: |-
                ## Purpose
                Ordinary home contents policies often cover precious metals only up to a low single-item or valuables limit, and some exclude bullion altogether unless it is declared. Checking the actual wording, declaring the holding and confirming what any vault insures on your behalf closes a gap many holders only discover after a theft.

                ## Milestones
                1. Your contents policy wording on valuables, cash and bullion read and noted.
                2. The holding declared to the insurer with its current value.
                3. Any vault or storage provider's insurance terms confirmed in writing.
                4. The sum insured matched to current value, with any shortfall closed.

                ## Notes
                Insurers usually want proof of ownership, so keep receipts or photographs with serial numbers. Keep a copy of the policy schedule outside the house.
              priority: high
              deadlineOffsetDays: 45
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Every physical metal holding is either declared on a home policy or covered by vault insurance, with the sum insured recorded."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Find the valuables and bullion clauses in your contents policy"
                - "Call your insurer to declare bullion and its current value"
                - "Get the vault's insurance terms in writing if you use one"
                - "Photograph coins and bars with any serial numbers for proof"
            - name: Cost basis records from the first purchase
              description: |-
                ## Purpose
                When you eventually sell, the tax authority will want to know what you paid, including premium and delivery, and a missing receipt can mean paying tax on the whole sale price. Keeping a clean record of every purchase and sale from today, and rebuilding what you can for past ones, turns a future tax return from guesswork into arithmetic.

                ## Milestones
                1. A record with date, item, quantity, price paid, premium and costs for each purchase.
                2. Past purchases rebuilt from statements, emails and bank records where possible.
                3. Items with no evidence of cost flagged clearly.
                4. Copies of receipts stored in one folder, paper and digital.

                ## Notes
                Rules differ by country and by type of item, so ask a tax professional how to treat inherited or gifted metal and anything bought before records began.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A purchase and sale record covering every holding, with receipts filed and items lacking evidence of cost flagged."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Create one folder for bullion receipts and fund contract notes"
                - "Rebuild past purchases from bank statements and dealer emails"
                - "Flag every item with no evidence of what it cost"
                - "Note how inherited items were valued at the date of death"
            - name: First small bullion purchase as a dry run
              description: |-
                ## Purpose
                Ordering a single coin before a larger purchase tests the whole chain: how the dealer takes payment, how long delivery takes, what the packaging looks like, how you check the item and where it goes when it arrives. Problems found on a small order cost little, and the record of that order becomes the template for every later one.

                ## Milestones
                1. One widely recognised bullion coin ordered from your chosen dealer.
                2. Delivery received, signed for and the item checked against the order.
                3. Weight and dimensions checked against the published specification.
                4. The coin stored in its planned place and added to your records.

                ## Notes
                A common sovereign-sized or one-ounce coin is easier to resell than an unusual one. Never let a delivery wait unattended on a doorstep.
              priority: medium
              deadlineOffsetDays: 60
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "One bullion coin bought, delivered, checked against its specification, stored and recorded within 60 days."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Order one common bullion coin from your chosen dealer"
                - "Arrange to be home to sign for the delivery"
                - "Weigh and measure the coin against the mint's specification"
                - "Add the coin and its receipt to your records"
            - name: Precious metals holdings register
              description: |-
                ## Purpose
                An inventory tells you what you own once; a register keeps it true. A single sheet with each holding, its fine weight in grams or ounces, cost, location and a current value column lets you see the size of the metals slice at a glance and makes insurance, tax and estate paperwork quick.

                ## Milestones
                1. A register with columns for item, fine weight, purity, cost, location and value.
                2. Every item from your inventory entered with its fine metal content.
                3. A total of fine gold and fine silver calculated.
                4. A cell showing metals as a share of investable wealth.

                ## Notes
                Start from the **Metrics log** template. Record fine weight, not gross weight: a 22 carat coin weighs more than the gold it contains.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A register listing every holding with fine weight, cost and location, totalling fine gold and silver and the metals share of wealth."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Create the register from the metrics log template"
                - "Enter each item with its fine metal weight and purity"
                - "Add totals for fine gold and fine silver"
                - "Link the register to your cost basis records folder"
            - name: Monthly valuation of the metals slice
              description: |-
                ## Purpose
                Prices of gold and silver can move 10 percent or more in a few weeks, so a value you last checked a year ago tells you little about your real allocation or insurance cover. A short monthly update of spot prices in the register keeps the numbers honest and shows early when the slice has grown past your cap.

                ## Milestones
                1. One reliable source for spot gold and silver prices chosen and noted.
                2. Values in the register updated on the same day each month.
                3. The metals share of investable wealth recalculated each time.
                4. Any breach of the cap noted for the next rebalancing check.

                ## Notes
                Value physical metal at a dealer's buyback price rather than spot if you want a figure you could actually receive.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "The holdings register shows a valuation for each of the last six months, with the metals share of wealth recalculated each time."
                cadence: rolling
              tasks:
                - "Choose one source for daily gold and silver prices"
                - "Decide whether to value at spot or at buyback price"
                - "Update values and the metals share in the register @recurring(monthly:9)"
                - "Flag any month when the share exceeds your cap"
            - name: Fixed monthly buying plan for gold
              description: |-
                ## Purpose
                Buying in one lump after a price surge is the most common way people end up regretting gold. A small fixed amount on a set day each month, into a fund or a dealer's accumulation account, spreads the entry price and removes the temptation to time headlines, until the slice reaches its cap.

                ## Milestones
                1. A monthly amount set that fits your budget and your cap.
                2. A fund or accumulation account chosen that allows small regular purchases.
                3. An automatic payment or regular investment set up.
                4. A stopping point written down: the share at which buying pauses.

                ## Notes
                Check minimum purchase sizes and per-trade charges; on small amounts a fixed fee can outweigh the benefit.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A regular monthly gold purchase is running automatically, with a written pause point tied to your allocation cap."
                cadence: rolling
              tasks:
                - "Pick a monthly amount that fits both budget and cap"
                - "Set up an automatic regular purchase on your chosen account"
                - "Confirm the monthly purchase went through and log it @recurring(monthly:16)"
                - "Check the amount still fits your cap and budget @recurring(yearly)"
            - name: Rebalancing bands for the metals slice
              description: |-
                ## Purpose
                After a strong year for gold, a 5 percent slice can become 9 percent without you buying anything, quietly changing the risk you carry. Setting bands around your target, and checking them each quarter, gives you a rule for trimming after rallies and topping up after falls without arguing with yourself.

                ## Milestones
                1. A target metals share and an upper and lower band written down.
                2. The method for trimming chosen: selling metal or directing new money elsewhere.
                3. Selling costs and tax checked for the holding you would trim first.
                4. A quarterly check scheduled and the first one completed.

                ## Notes
                For physical metal, trimming by redirecting new savings is often cheaper than selling, because buyback spreads are wide.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Written bands around a target metals share, with at least two quarterly checks recorded and any action taken noted."
                cadence: rolling
              tasks:
                - "Write your target share with upper and lower bands"
                - "Decide which holding you would trim or top up first"
                - "Compare the metals share with your bands @recurring(quarterly)"
                - "Record what you did, or why you did nothing"
            - name: Home safe and storage check routine
              description: |-
                ## Purpose
                Safes fail quietly: bolts work loose, batteries in electronic locks die, damp gets in and tarnishes silver, and a spare key ends up in an obvious drawer. A short quarterly check of the safe and its contents catches these before they matter and keeps the people who know about it to the agreed few.

                ## Milestones
                1. A one-page checklist for the safe covering fixings, lock, battery, damp and contents.
                2. The safe bolted down and its fixing confirmed.
                3. Silver stored in sealed tubes or bags with a moisture absorber.
                4. Spare keys or codes kept away from the safe itself.

                ## Notes
                Start from the **Operational checklist** template. Handle coins by the edges or with cotton gloves; fingerprints can mark proof finishes and silver.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A written safe checklist, with quarterly checks recorded for a full year and any fixes noted."
                cadence: rolling
              tasks:
                - "Write a safe checklist from the operational checklist template"
                - "Add moisture absorbers to the safe and silver containers"
                - "Move any spare key or code away from the safe"
                - "Run the safe checklist and note any problems @recurring(quarterly)"
            - name: Annual physical count against the register
              description: |-
                ## Purpose
                Coins get moved, lent for a valuation or tucked into a different box, and memory is a poor guide to what is actually there. Counting every coin and bar once a year against the register, and photographing the result, proves the metal still exists and gives insurers and executors something solid.

                ## Milestones
                1. Every physical item counted and matched to the register.
                2. Any difference investigated and explained.
                3. Dated photographs of the holding stored with the register.
                4. The count recorded with the date and who carried it out.

                ## Notes
                Do the count with a second trusted person if you can; it also teaches them where things are.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A dated annual count matching every physical item to the register, with photographs and any discrepancy explained."
                cadence: cyclic
              tasks:
                - "Pick a quiet day each year for the count"
                - "Count every coin and bar against the register @recurring(yearly)"
                - "Photograph the holding and store the photos with the register"
                - "Investigate and note any difference from the register"
            - name: Vault statement and fund holdings reconciliation
              description: |-
                ## Purpose
                If you hold metal through a vault account or a fund, your only proof it exists is the provider's statement, and errors or quiet changes in terms are easy to miss. Comparing each statement with your own register, and reading any notices of changed fees or custodians, keeps the paper record and the real metal in step.

                ## Milestones
                1. Every vault and fund statement source listed with how to download it.
                2. The latest statement matched to the register by weight, not just value.
                3. Any fee change, custodian change or new terms noted.
                4. Differences raised with the provider in writing.

                ## Notes
                Fund units fall slightly in metal content each year as charges are taken from the metal. That drift is normal; a sudden change is not.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Each quarter's vault and fund statements matched to the register by fine weight, with any differences raised in writing."
                cadence: rolling
              tasks:
                - "List where to download each vault and fund statement"
                - "Download statements and match them to the register by weight @recurring(quarterly)"
                - "Note any change in fees, custodian or terms"
                - "Email the provider about any difference you cannot explain"
            - name: Insurance renewal and yearly revaluation
              description: |-
                ## Purpose
                A sum insured set when gold was much cheaper can leave a large gap after a strong run in prices, and insurers settle on what you declared. Revaluing the holding before each renewal, and adjusting the declared figure, keeps cover in line with what you would actually need to replace.

                ## Milestones
                1. The renewal date of the policy covering metal noted.
                2. The holding revalued at replacement cost a month before renewal.
                3. The declared value updated with the insurer.
                4. The new schedule filed with the register.

                ## Notes
                Replacement cost includes dealer premium, so it is higher than spot value. Ask your insurer which figure they want.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "The declared insured value of physical metal is updated within a month before each renewal and the schedule filed."
                cadence: cyclic
              tasks:
                - "Note the renewal date of the policy that covers your metal"
                - "Revalue at replacement cost and update the insurer @recurring(yearly)"
                - "File the new policy schedule with the register"
                - "Ask whether a rated safe would lower the premium"
            - name: Premium and buyback spread log
              description: |-
                ## Purpose
                Dealer premiums over spot rise sharply when demand surges and fall back when it calms, and the gap between what a dealer sells at and buys back at is the real cost of physical ownership. Logging the premium and buyback price on the coin or bar you usually buy shows when buying is expensive and what selling would actually return.

                ## Milestones
                1. One reference coin and one reference bar chosen for tracking.
                2. Sell price, buyback price and spot recorded on a set day each month.
                3. Premium over spot and round-trip spread calculated as percentages.
                4. A note of what premium you consider too high to buy at.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Six months of premium and buyback spread figures for a reference coin and bar, with a personal maximum premium written down."
                cadence: rolling
              tasks:
                - "Choose one reference coin and one reference bar"
                - "Log sell, buyback and spot prices for both @recurring(monthly:23)"
                - "Calculate the premium and the round-trip spread"
                - "Write the premium above which you will wait"
            - name: Transaction paperwork filing routine
              description: |-
                ## Purpose
                Invoices, delivery notes, vault confirmations and contract notes arrive by post and email and are rarely in one place when a tax return or insurance claim needs them. A short monthly session filing anything new into the cost basis folder keeps records complete without a scramble years later.

                ## Milestones
                1. A single paper folder and a single digital folder named and in use.
                2. An email filter or label catching dealer and platform messages.
                3. Each month's documents filed and linked in the register.
                4. Nothing older than a month left unfiled.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every precious metals transaction in the last year has its document filed and referenced in the register."
                cadence: rolling
              tasks:
                - "Set up an email label for dealer and platform messages"
                - "Scan any paper invoices into the digital folder"
                - "File new metals documents and update the register @recurring(monthly:4)"
                - "Check the folder for gaps before each tax return"
            - name: How spot price, premiums and spreads work
              description: |-
                ## Purpose
                The headline gold price is a wholesale figure for large bars, and nobody buying a single coin pays it. Understanding how spot is set, why small coins carry higher premiums than large bars, and why buyback prices sit below spot lets you judge any quote in seconds and see the true break-even on a purchase.

                ## Milestones
                1. A short note explaining spot price and where it comes from.
                2. Premiums compared across a small coin, a one-ounce coin and a larger bar.
                3. The price rise needed to break even on a typical purchase worked out.
                4. Three quotes checked against your own calculation.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A one-page note on spot, premium and spread, with a worked break-even figure for a real coin or bar quote."
                cadence: phased
                effort_hours_estimate: "3"
              tasks:
                - "Read how the benchmark gold and silver prices are set"
                - "Compare premiums on three sizes of coin and bar"
                - "Work out the break-even price rise on one purchase"
                - "Write a one-page note in your own words"
            - name: Purity, fineness and recognised refiners
              description: |-
                ## Purpose
                Bullion is sold in fineness figures such as 999.9 and 916.7, and in carats for some coins, and a bar from an unknown refiner can be hard to sell even if it is genuine. Learning how purity is stated and which refiners and mints are widely recognised means you buy items any dealer will take back.

                ## Milestones
                1. Fineness and carat conversions written in a short table.
                2. Fine weight worked out for three coins you own or might buy.
                3. A list of widely recognised mints and refiners kept with the register.
                4. Every item you hold marked as recognised or not.

                ## Notes
                Industry good delivery lists, such as the one kept by the London bullion market, are a useful starting point for recognised refiners.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A fineness table and a recognised refiner list, with every holding in the register marked as recognised or not."
                cadence: phased
                effort_hours_estimate: "3"
              tasks:
                - "Make a table converting carats to fineness"
                - "Calculate fine weight for three common coins"
                - "Find a published list of accredited refiners"
                - "Mark each holding in the register as recognised or not"
            - name: Spotting counterfeit coins and bars
              description: |-
                ## Purpose
                Fake bullion coins and tungsten-filled bars are sold online and at private sales, often at a tempting discount to spot. Knowing the simple checks, weight, diameter, thickness, magnetism and the sound of a struck coin, and when to ask a dealer to test with proper equipment, protects you whenever metal comes from anywhere but a reputable dealer.

                ## Milestones
                1. Official specifications for the coins you hold or plan to buy written down.
                2. A precise scale and calipers bought or borrowed.
                3. Every coin you own checked for weight and dimensions.
                4. A rule written: metal from private sellers is tested before payment.

                ## Notes
                Simple tests catch crude fakes, not good ones. A reputable dealer can test with electronic or X-ray equipment, and that is worth the fee for anything bought privately.
              priority: high
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Specifications for your coin types recorded and every coin you hold checked for weight and dimensions, with results noted."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Look up the mint specifications for each coin type you hold"
                - "Buy or borrow a scale accurate to 0.01 grams and calipers"
                - "Weigh and measure every coin and note any outliers"
                - "Write your rule for testing metal from private sellers"
            - name: How physically backed metal funds hold their gold
              description: |-
                ## Purpose
                A gold fund is a promise that bars sit in a vault in your favour, and the details of that promise matter most when markets are stressed. Learning how the trustee, custodian and any sub-custodians fit together, how bar lists are published and what happens if the issuer fails, lets you judge any fund on more than its charge.

                ## Milestones
                1. The roles of issuer, trustee and custodian described for your fund.
                2. The fund's latest bar list located and opened.
                3. The prospectus section on issuer failure read and summarised.
                4. One risk you had not considered written down.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A half-page summary of how your chosen fund holds metal, naming its custodian and what happens if the issuer fails."
                cadence: phased
                effort_hours_estimate: "3"
              tasks:
                - "Find your fund's prospectus and latest bar list"
                - "Name the issuer, trustee and custodian in a note"
                - "Read the section on what happens if the issuer fails"
                - "Ask the agent to summarise the custody section in plain words"
            - name: Allocated, unallocated and pooled metal accounts
              description: |-
                ## Purpose
                With allocated metal, specific bars are yours; with unallocated or pooled accounts, you are a creditor with a claim on metal, which can matter enormously if the provider fails. Understanding the difference, and which one you hold in every vault or online account, is the single most useful thing to know before trusting a provider with your metal.

                ## Milestones
                1. Allocated, unallocated and pooled ownership explained in a short note.
                2. The ownership type of every vault or online account confirmed from its terms.
                3. Whether you can take delivery or inspect, and at what cost, noted for each.
                4. Any unallocated holding marked for a decision.

                ## Notes
                Unallocated accounts are cheaper for a reason. They are not wrong, but you should hold one knowingly.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "The ownership type of every vault or online metal account is confirmed from its terms and recorded in the register."
                cadence: phased
                effort_hours_estimate: "2"
              tasks:
                - "Read your provider's terms on ownership of the metal"
                - "Record allocated, unallocated or pooled against each account"
                - "Note the cost and process of taking delivery"
                - "Flag any unallocated holding for review"
            - name: Gold's long drawdowns and what moves the price
              description: |-
                ## Purpose
                Gold is often sold as safe, yet it lost more than half its value between 1980 and 1982 and fell by over 40 percent between 2011 and 2015, taking years to recover. Studying those periods, and the usual drivers such as real interest rates, the US dollar and central bank buying, sets honest expectations before the next fall tests your nerve.

                ## Milestones
                1. A price chart covering at least forty years studied.
                2. The two largest falls and how long recovery took noted.
                3. Three main drivers of the gold price described in your own words.
                4. A sentence written on how you would respond to a 40 percent fall.

                ## Notes
                Silver's falls have historically been deeper than gold's. Nothing here predicts the next move; it only shows what has been possible.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A note recording gold's two largest historic falls, their recovery times and three price drivers, with your planned response."
                cadence: phased
                effort_hours_estimate: "3"
              tasks:
                - "Find a long-run gold price chart in real and nominal terms"
                - "Note the largest falls and how long each took to recover"
                - "Read about real interest rates and the gold price"
                - "Write how you would respond to a 40 percent fall"
            - name: How precious metals are taxed where you live
              description: |-
                ## Purpose
                Metals are taxed differently from shares in many countries: for example, some tax bullion gains as collectibles at a higher rate, some exempt certain legal tender coins, and silver often carries sales tax or VAT where investment gold does not. Knowing your own rules before buying shapes which form of metal makes sense for you and what records to keep.

                ## Milestones
                1. Your tax authority's guidance on precious metals found and saved.
                2. Purchase taxes on gold and silver bullion noted.
                3. Tax on gains from coins, bars and funds summarised separately.
                4. Questions for a tax professional listed.

                ## Notes
                Treat what you find as a starting point and confirm with a tax professional before any large sale. Rules change, so note the date you checked.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A dated summary of purchase and gains taxes on gold and silver coins, bars and funds in your country, from official guidance."
                cadence: phased
                effort_hours_estimate: "3"
              tasks:
                - "Find your tax authority's guidance on investment gold and silver"
                - "Note whether purchase taxes apply to gold and to silver"
                - "Summarise gains tax for coins, bars and funds separately"
                - "Check for changes to precious metals tax rules @recurring(yearly)"
            - name: Silver's volatility and the gold to silver ratio
              description: |-
                ## Purpose
                Silver is part industrial metal and part monetary metal, so it tends to swing harder than gold in both directions, and it is bulkier to store for the same value. Learning how the gold to silver ratio has moved, and why silver costs more to hold physically, helps you decide how much of the slice belongs in silver at all.

                ## Milestones
                1. The historical range of the gold to silver ratio noted.
                2. Silver's largest past falls compared with gold's.
                3. The storage space needed for a set value of silver worked out.
                4. Purchase tax and premium differences between the two metals noted.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A note comparing silver with gold on volatility, storage space, premiums and taxes, with the ratio's historical range."
                cadence: phased
                effort_hours_estimate: "2"
              tasks:
                - "Look up the historical range of the gold to silver ratio"
                - "Compare silver's largest past falls with gold's"
                - "Work out how much space a set value of silver takes"
                - "Note premium and tax differences between the two metals"
            - name: Mining shares versus the metal itself
              description: |-
                ## Purpose
                Gold mining shares are often sold as a cheaper way into gold, but they carry company, country and cost risks and have at times fallen while gold rose. Understanding how they behave differently from bullion stops a holder from thinking they own a metals hedge when they own equities.

                ## Milestones
                1. The main risks of mining companies listed beside those of bullion.
                2. A period when miners and gold moved differently identified.
                3. Any mining funds you hold classed as equities in your register.
                4. A decision recorded on whether miners belong in the metals slice.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A written decision on whether mining shares count toward your metals allocation, with any held reclassified accordingly."
                cadence: phased
                effort_hours_estimate: "2"
              tasks:
                - "List the risks a mining company carries that bullion does not"
                - "Compare a mining fund's past returns with gold over ten years"
                - "Reclassify any mining holdings in your register"
                - "Record whether miners count toward your metals cap"
            - name: Bars versus coins for your next purchase
              description: |-
                ## Purpose
                Large bars carry lower premiums per gram but are harder to sell in part, while coins cost more yet can be sold one at a time and are widely recognised. Deciding the format of your next purchase against how and when you expect to sell keeps the money you spend on premiums in proportion to the flexibility you get.

                ## Milestones
                1. Premium per gram compared across two coin sizes and two bar sizes.
                2. How you expect to sell, in one go or in parts, written down.
                3. Any tax differences between coins and bars in your country noted.
                4. A format chosen for the next purchase.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A written choice of format for the next purchase, backed by a premium per gram comparison of at least four items."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Compare premium per gram on two coins and two bars"
                - "Write how you expect to sell, all at once or in parts"
                - "Check for tax differences between coins and bars"
                - "Record the format you will buy next"
            - name: Gold and silver split within the metals slice
              description: |-
                ## Purpose
                Two holders with the same metals allocation can carry very different risk depending on how much is silver. Choosing the split deliberately, with silver's volatility, storage needs and purchase taxes in view, means the slice behaves the way you expected when prices move.

                ## Milestones
                1. Your current split between gold and silver calculated by value.
                2. Reasons for holding silver at all written down.
                3. A target split chosen and recorded beside the overall cap.
                4. Future purchases directed toward the target.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A target split between gold and silver recorded beside your metals cap, with the current split calculated."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Calculate your current gold and silver split by value"
                - "Write why you would hold silver beyond gold"
                - "Choose and record a target split"
                - "Set future purchases to move toward the target"
            - name: Moving bullion from home to a professional vault
              description: |-
                ## Purpose
                Once a home holding grows past what your insurer will cover, or past what you are comfortable keeping in the house, a professional vault becomes worth its fee. Comparing vault operators on ownership terms, insurance, audit and access, then moving the metal safely, ends the worry of keeping a large value at home.

                ## Milestones
                1. The value at which home storage stops making sense for you written down.
                2. Two or three vault operators compared on fees, ownership type, audit and insurance.
                3. A vault chosen and the account opened in your name.
                4. Metal delivered by insured transport and confirmed on the first statement.

                ## Notes
                Start from the **Vendor** template. Check that the vault holds metal in your name, allocated and segregated, and that independent audits are published.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A vault chosen against written criteria, with home metal transferred and confirmed on a statement in your name."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Write the value above which you will not keep metal at home"
                - "Compare vault fees, ownership type, audits and insurance"
                - "Open the chosen vault account in your own name"
                - "Arrange insured transport and confirm receipt on the statement"
            - name: Cutting the yearly cost of holding metal
              description: |-
                ## Purpose
                Since gold pays no income, every fund charge, storage fee and insurance premium comes straight out of its return, and a holding left alone for a decade can lose a noticeable slice to costs. Adding up what the metals slice costs each year, then cutting what you can, is one of the few certain improvements available.

                ## Milestones
                1. Fund charges, vault fees, safe deposit rent and insurance for metal totalled.
                2. The total expressed as a percentage of the metals value.
                3. Cheaper equivalents found for the costliest item.
                4. At least one change made or a reason recorded for keeping it.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "The yearly cost of holding metal totalled as a percentage, with at least one cost cut or kept for a recorded reason."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Total every yearly charge linked to holding metal"
                - "Divide the total by the metals value"
                - "Find a cheaper equivalent for the costliest item"
                - "Recalculate the yearly holding cost percentage @recurring(yearly)"
            - name: Consolidating scattered coins, bars and accounts
              description: |-
                ## Purpose
                Five small holdings with three dealers, two platforms and a safe deposit box mean more fees, more paperwork and more for an executor to find. Bringing metal into fewer places, without selling and rebuying unless it is cheaper, simplifies records and often cuts costs.

                ## Milestones
                1. Every location of metal listed with its yearly cost.
                2. A target of no more than two or three locations set.
                3. Transfer or delivery options and their costs checked for each small holding.
                4. Holdings moved or closed and the register updated.
              priority: low
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "Precious metals held in no more than three locations, with closed accounts confirmed in writing and the register updated."
                cadence: phased
                effort_hours_estimate: "5"
              tasks:
                - "List every place you hold metal and what it costs"
                - "Choose the two or three locations you will keep"
                - "Ask each provider how to transfer or take delivery"
                - "Get written confirmation for each closed account"
            - name: Holding gold inside a tax-advantaged account
              description: |-
                ## Purpose
                In many countries a gold fund can be held inside a tax-free or tax-deferred account, which can change the after-tax result considerably, while schemes to hold physical bullion in a retirement account often come with high fees and heavy selling. Checking which forms your own accounts allow, and at what cost, puts the metal in the most efficient wrapper you have.

                ## Milestones
                1. Each tax-advantaged account you hold checked for whether metal funds are allowed.
                2. Any scheme for holding physical bullion in a retirement account priced in full.
                3. The after-tax difference of holding the fund inside or outside the wrapper estimated.
                4. A decision recorded on where the metal belongs.

                ## Notes
                Be cautious with firms that approach you to move retirement savings into physical metal. Check fees, custodian and buyback terms independently, and speak to a regulated adviser first.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A written decision on which account holds your metal, with fund eligibility and costs checked for each tax-advantaged account."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Check which of your tax-advantaged accounts allow metal funds"
                - "Price any physical bullion retirement scheme in full"
                - "Estimate the tax difference of holding inside the wrapper"
                - "Record where the metal will be held and why"
            - name: Written sell rules for your metals
              description: |-
                ## Purpose
                Without a plan, people sell metal in a panic after a fall or never sell at all, even when the slice has doubled past its cap. Writing in advance when you would sell, such as breaching your upper band, a planned expense or a change in your reasons, which items go first and through whom, makes selling a calm administrative step.

                ## Milestones
                1. Three or four situations in which you would sell written down.
                2. The order in which items would be sold, cheapest to sell first.
                3. The dealer or platform you would sell through and its buyback process noted.
                4. Tax to set aside on a sale estimated.

                ## Notes
                Sell rules are about your own plan, not predictions of the price. Keep them beside the register so you see them every month.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A one-page set of sell rules naming triggers, selling order, route and tax set-aside, filed with the register."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Write the situations in which you would sell some metal"
                - "Rank your items from cheapest to most costly to sell"
                - "Note which dealer or platform you would sell through"
                - "File the rules beside the holdings register"
            - name: Checking a gold sales pitch before you buy
              description: |-
                ## Purpose
                Cold calls, late-night adverts and online promotions sell commemorative and proof coins, gold retirement schemes and unregulated vault accounts at prices well above the metal's worth. A fixed set of checks, applied before paying anything, filters out pitches whose price, seller or promised returns do not hold up.

                ## Milestones
                1. A checklist covering premium over spot, seller history, regulation and buyback.
                2. Warning signs written down: urgency, guaranteed returns, unusual payment requests.
                3. One recent offer, or one you can find, run through the checklist.
                4. A rule agreed with your household: no purchase on a cold call.

                ## Notes
                Ask any seller what they would pay to buy the same item back today. The gap between that and their selling price tells you more than any brochure.
              priority: medium
              frontmatter:
                mode: research
                output_kind: artifact
                success_criteria: "A written checklist for gold sales offers, tested on at least one real offer, with a household no cold call purchases rule."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Write a checklist for judging any precious metals offer"
                - "Ask the seller for today's buyback price on the item"
                - "Check the seller against your regulator's warning list"
                - "Agree a no purchase on cold calls rule with your household"
            - name: Selling part of your metal for a planned expense
              description: |-
                ## Purpose
                Selling physical metal takes longer than selling a fund: quotes, posting or delivering, testing and payment can stretch over days or weeks. Planning a sale for a known expense, such as a deposit, a wedding or school fees, with the date working back, gets the money in time at a fair price and with the tax paperwork ready.

                ## Milestones
                1. The amount needed and the date it is needed written down.
                2. Items to sell chosen from your sell rules.
                3. Buyback quotes from at least two dealers compared on the same day.
                4. Metal sold, money received and the sale recorded with tax noted.

                ## Notes
                Never post bullion without insured, tracked delivery arranged by or agreed with the dealer.
              priority: medium
              deadlineOffsetDays: 120
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "The planned amount raised from metal sales before the date needed, with the sale recorded for tax."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Write the amount needed and the date you need it"
                - "Choose which items to sell using your sell rules"
                - "Get buyback quotes from two dealers on the same day"
                - "Record the sale price and costs in your tax records"
            - name: Valuing and selling unwanted gold jewellery
              description: |-
                ## Purpose
                Broken chains, single earrings and dated pieces in a drawer are often worth their gold content, but cash-for-gold buyers can pay well below that. Weighing and identifying the carat of each piece, then comparing offers from a jeweller, a scrap buyer and a bullion dealer, turns a drawer of odds and ends into a fair sum.

                ## Milestones
                1. Pieces sorted into keep, sell and family heirloom.
                2. Each piece to sell weighed and its hallmark or carat noted.
                3. Melt value worked out from the gold price and carat.
                4. Offers from at least two buyers compared against melt value before selling.

                ## Notes
                Check with family before selling anything with sentimental value. Pieces with stones or a known maker may be worth more as jewellery than as scrap.
              priority: low
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "Unwanted gold jewellery sold for at least the best of two quotes, each compared with a calculated melt value."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Sort jewellery into keep, sell and heirloom piles"
                - "Weigh each sell piece and note its carat or hallmark"
                - "Calculate melt value from today's gold price"
                - "Get two offers and compare them with melt value"
            - name: Moving house with bullion in your keeping
              description: |-
                ## Purpose
                A move is when bullion is most likely to go missing: boxes are packed by strangers, safes are unbolted and new locks are unknown. Planning how the metal travels, kept out of the removal van and carried yourself or held at a vault for a few weeks, with insurance checked for transit, keeps it safe through the chaos.

                ## Milestones
                1. Insurer asked whether cover applies in transit and at the new address.
                2. A decision made to carry the metal yourself or lodge it temporarily.
                3. The safe moved and bolted down at the new home before metal returns.
                4. A full count done at the new address against the register.
              priority: medium
              deadlineOffsetDays: 90
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "All metal accounted for at the new address by a count against the register, with insurance confirmed for the new home."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Ask your insurer about cover during the move and at the new address"
                - "Decide to carry the metal yourself or store it temporarily"
                - "Keep the metal out of the removal company's inventory"
                - "Count everything against the register after the move"
            - name: Carrying bullion across a border
              description: |-
                ## Purpose
                Many countries require you to declare gold, and sometimes coins, above a cash-equivalent threshold when entering or leaving, and failing to do so can mean seizure. Checking the rules for both ends before travelling with metal, or arranging insured shipment instead, keeps a move abroad or a family transfer legal and safe.

                ## Milestones
                1. Customs rules on precious metals for both countries found from official sources.
                2. Any declaration threshold and form noted.
                3. Carrying compared with insured shipment by a specialist courier.
                4. Paperwork prepared, including proof of purchase and any declaration.

                ## Notes
                Rules differ widely and change. Use the customs authority's own pages and keep copies of every form.
              priority: medium
              deadlineOffsetDays: 60
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "Metal moved across a border with customs rules for both countries checked and any declaration completed and kept."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Find both countries' customs rules on carrying precious metals"
                - "Note any declaration threshold and the form required"
                - "Get a quote for insured specialist shipping"
                - "Pack receipts and declaration copies with your travel papers"
            - name: Dealer or vault failure response plan
              description: |-
                ## Purpose
                Bullion dealers and vault operators have failed before, sometimes with customer metal missing. Writing down in calm times what you would do if your dealer or vault stopped answering, who to contact, what proof of ownership you hold and which regulator or administrator to approach, turns a frightening event into a list of steps.

                ## Milestones
                1. Each provider's risks listed in a short register.
                2. Proof of ownership for each holding stored outside the provider's systems.
                3. The regulator, ombudsman or trade body for each provider noted.
                4. Steps to take in the first week of a failure written down.

                ## Notes
                Start from the **Risk register** template. Allocated, segregated metal is usually far easier to recover than an unallocated claim.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A risk register for each metals provider with proof of ownership stored independently and a first-week failure plan written."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Start a risk register for each metals provider"
                - "Save statements and confirmations outside the provider's website"
                - "Note the regulator or trade body for each provider"
                - "Scan the news for trouble at your dealer or vault @recurring(quarterly)"
            - name: Inheriting gold and silver from someone who has died
              description: |-
                ## Purpose
                Executors often find coins in a safe, a vault statement in a drawer or a fund on a platform, with no record of what was paid. Identifying, valuing and securing the metal at the date of death, then deciding with the beneficiaries whether to keep or sell, keeps the estate accounts correct and the family's trust intact.

                ## Milestones
                1. All metal found, listed and moved to secure storage.
                2. A valuation at the date of death obtained from a dealer or the fund platform.
                3. Each provider notified and their bereavement process started.
                4. Beneficiaries told what exists and their choice to keep or sell recorded.
                5. The value at death filed as the base cost for anyone who keeps metal.

                ## Notes
                Work with the estate's solicitor or the probate service in your country. Do not sell or distribute metal before the executor has the authority to do so.
              priority: high
              deadlineOffsetDays: 90
              frontmatter:
                mode: service
                output_kind: deliverable
                success_criteria: "Every inherited metal holding listed, valued at the date of death and secured, with beneficiaries' decisions recorded."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "Search the home, papers and email for coins, bars and statements"
                - "Move any physical metal to secure storage"
                - "Get a dealer valuation at the date of death"
                - "Write to each provider with the death certificate"
            - name: Access letter so heirs can find your metal
              description: |-
                ## Purpose
                Physical metal is unusually easy to lose to an estate: a safe nobody can open, a vault nobody knew about, coins under floorboards. A sealed letter, kept with your will, saying what exists, where it is and how an executor reaches it, without putting codes in the same place, means your metal reaches the people you meant it for.

                ## Milestones
                1. A letter listing every holding and its location written.
                2. How the executor reaches the safe code, key or vault login set out separately.
                3. The letter lodged with your will or with your solicitor.
                4. One trusted person told the letter exists.

                ## Notes
                Keep the letter and the means of access in different places so finding one is not enough to steal the metal.
              priority: high
              deadlineOffsetDays: 60
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A dated access letter listing every holding and its location is lodged with your will, with access details stored separately."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "List every holding and where it is in a letter"
                - "Store the safe code or vault login separately from the letter"
                - "Lodge the letter with your will or solicitor"
                - "Update the access letter after the annual count @recurring(yearly)"
            - name: Gold coins as a gift for a child
              description: |-
                ## Purpose
                In many families a gold coin marks a birth, a naming ceremony or a coming of age, and some parents add one each birthday. Choosing a coin that holds its value as metal rather than an overpriced commemorative piece, recording it in the child's name and deciding when they receive it makes the tradition a real asset rather than a drawer ornament.

                ## Milestones
                1. A widely recognised bullion coin chosen over commemorative proof sets.
                2. Each coin recorded as belonging to the child, with receipt kept.
                3. Where the coins are stored and the age they will be handed over decided.
                4. Grandparents or relatives who want to contribute told the plan.

                ## Notes
                Gifts of value may have tax or reporting consequences in some countries; keep a note of the date and value of each gift.
              priority: low
              frontmatter:
                mode: building
                output_kind: habit
                success_criteria: "Coins given to a child recorded in their name with receipts, storage and a handover age agreed and written down."
                cadence: rolling
              tasks:
                - "Choose a bullion coin rather than a commemorative set"
                - "Start a list of coins held for the child with receipts"
                - "Agree the age at which the child receives the coins"
                - "Add the birthday coin and record it in the child's list @recurring(yearly)"
            - name: Family gold held as jewellery
              description: |-
                ## Purpose
                In many households, from South Asian and Middle Eastern to Caribbean and West African families, wealth has long been kept as gold bangles, chains and wedding sets passed between generations. Weighing, valuing and recording these pieces, and agreeing who they belong to, brings them into your wealth picture and your insurance without changing their meaning to the family.

                ## Milestones
                1. Each piece photographed, weighed and its carat noted.
                2. Ownership of each piece agreed and written down within the family.
                3. Gold content valued and added to the register as a separate line.
                4. Insurance cover for high-value pieces confirmed.

                ## Notes
                Jewellery value as metal and value as a piece are different numbers. Record both where a jeweller has valued it.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Family gold jewellery photographed, weighed, valued and recorded with agreed ownership and insurance confirmed."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Photograph and weigh each piece of family gold"
                - "Note the carat or hallmark of each piece"
                - "Agree and write down who each piece belongs to"
                - "Add family gold to the register as its own line"
            - name: Precious metals decisions as a couple
              description: |-
                ## Purpose
                One partner often buys and stores the metal while the other has little idea what exists or where, which becomes a real problem in illness, separation or death. Agreeing the role and cap together, putting ownership on record and making sure both know how to reach the metal protects both of you.

                ## Milestones
                1. Both partners agree the role and cap for metals.
                2. Ownership of each holding recorded as joint or individual.
                3. Both partners able to reach the safe, vault account and fund platform.
                4. A yearly conversation on metals added to your money review.
              priority: medium
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A shared written role, cap and ownership record for metals, with both partners confirmed able to reach every holding."
                cadence: rolling
              tasks:
                - "Show your partner the register and where each holding is"
                - "Record each holding as joint or individually owned"
                - "Confirm both of you can reach every account and the safe"
                - "Talk through the metals slice together @recurring(yearly)"
            - name: Reshaping metals holdings as retirement nears
              description: |-
                ## Purpose
                Metal pays no income, so as retirement approaches the question shifts from how much to hold to how it will be turned into spending money, and who will manage it if you cannot. Reviewing the slice five or so years before retiring, simplifying storage and deciding what to sell or keep, avoids having to sell bullion in a hurry later.

                ## Milestones
                1. The metals slice reviewed against your retirement income plan.
                2. A decision recorded on keeping, reducing or simplifying the holding.
                3. Storage simplified to locations you can manage at an older age.
                4. Any planned sales spread over tax years where that helps.

                ## Notes
                Discuss the role of metal in retirement with your financial adviser or planner if you have one; this project prepares the questions.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A written decision on the size and storage of your metals slice in retirement, with any sales scheduled across tax years."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Compare the metals slice with your retirement income plan"
                - "Decide whether to keep, reduce or simplify the holding"
                - "List storage arrangements you could manage at eighty"
                - "Spread any planned sales across tax years where useful"
            - name: Reading a vault's bar list and audit reports
              description: |-
                ## Purpose
                Serious vaults and metal funds publish bar lists, with refiner, serial number and weight, and independent audit reports. Learning to check that your allocated bars appear on the list, and that audits are recent, unqualified and by a known firm, gives you evidence rather than reassurance that the metal is really there.

                ## Milestones
                1. The latest bar list for your vault or fund downloaded.
                2. Your own allocated bars found on it by serial number, where applicable.
                3. The most recent audit report read for date, auditor and any qualifications.
                4. Any gap or delay in reporting raised with the provider.
              priority: low
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "Your allocated bars matched to the latest published bar list and the latest audit confirmed as recent and unqualified."
                cadence: cyclic
                effort_hours_estimate: "2"
              tasks:
                - "Download your vault's or fund's latest bar list"
                - "Search the list for your bar serial numbers"
                - "Read the latest audit report's date, auditor and opinion"
                - "Download the new bar list and audit report @recurring(yearly)"
            - name: Holding metal in more than one country
              description: |-
                ## Purpose
                Some holders split metal between vaults in different countries so that one government's rules, one operator or one event cannot reach all of it. It adds cost and paperwork, including foreign account reporting in some countries, so it is worth doing only with a clear reason and a full view of the obligations.

                ## Milestones
                1. The reason for holding metal abroad written down.
                2. Reporting obligations on foreign holdings in your country checked.
                3. Vault operators in a second country compared on terms and audits.
                4. A decision recorded and, if going ahead, reporting dates added to your calendar.

                ## Notes
                Foreign holdings can trigger reporting rules even when no tax is due. Check with a tax professional before opening an account abroad.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A written decision on holding metal abroad, with your reporting obligations checked and any required dates recorded."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Write why you would hold metal outside your country"
                - "Check your country's reporting rules for foreign holdings"
                - "Compare two vaults abroad on terms, audits and fees"
                - "Record the decision and any reporting dates"
            - name: Vetting gold leasing and yield offers
              description: |-
                ## Purpose
                Some platforms offer interest on gold or silver by leasing it to others, turning metal you own outright into a loan with a counterparty. Before accepting a yield on metal, checking who borrows it, what security exists and what happens if they default protects the very quality that made you buy metal in the first place.

                ## Milestones
                1. The offer's terms read for who borrows the metal and on what security.
                2. Whether the metal stays allocated in your name confirmed or ruled out.
                3. Default history of the platform or borrower researched.
                4. A decision recorded to accept, limit or decline.

                ## Notes
                A yield on metal is payment for taking credit risk. Most holders who buy gold as insurance decline it.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "Any gold or silver yield offer assessed for borrower, security and ownership, with a written decision to accept, limit or decline."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Find out who borrows the metal under the yield offer"
                - "Check whether your metal stays allocated in your name"
                - "Search for defaults or complaints about the platform"
                - "Record your decision and the reason"
---

# Precious Metals Holdings

This area is for anyone who owns, or is thinking about owning, gold and silver as part of their wealth, whether that is a fund on a platform, a few sovereigns in a drawer or bars in a professional vault. It starts with foundations (why you hold metal and how much, an inventory, the choice between funds, vaulted bullion and coins at home, a dealer, storage, insurance and cost records), then the routines that keep holdings counted and valued, the knowledge that stops expensive mistakes, decisions and improvements, dated events such as selling for a planned expense, situations for heirs, couples, parents and people near retirement, and finally specialist work such as reading a vault's bar list.

The rhythm is a monthly valuation, buying plan, premium log and paperwork filing, quarterly band, safe and statement checks, and a yearly physical count, insurance revaluation, cost review and access letter update. The Purchase decision, Vendor, Metrics log, Operational checklist and Risk register templates pair with choosing a fund, choosing a dealer, the holdings register, the annual count and the failure response plan. Installing adds all 50 projects as active, so archive the ones that are not for you yet.
