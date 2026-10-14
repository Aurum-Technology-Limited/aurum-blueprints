---
id: wealth-investing.cryptocurrency-holdings
name: Cryptocurrency Holdings
description: "A small, deliberate crypto allocation run with care: a written size limit, locked-down exchange accounts, tested seed phrase backups, clean records for tax and a plan for who can reach the coins if you cannot."
category: personal
version: 1.0.0
tags: [wealth-investing, cryptocurrency-holdings, everyone, cryptocurrency, self-custody, hardware-wallet, crypto-tax]
author: Aurum Technology
starter_structure:
  templates:
    - vendor
    - purchase-decision
    - metrics-log
    - risk-register
    - operational-checklist
  pillars:
    - name: Wealth & Investing
      emoji: "📈"
      description: "Building long-term wealth: pensions and retirement accounts, index investing, property, side income, estate planning and the slow, boring decisions that compound over decades."
      pillarFrontmatter:
        review_cadence: quarterly
      areas:
        - name: Cryptocurrency Holdings
          description: "Managing a small, deliberate allocation to cryptocurrencies with secure custody, position limits and records for tax."
          projects:
            - name: Deciding why you hold crypto and how much
              description: |-
                ## Purpose
                Most people who end up hurt by crypto never decided how much of their wealth it should be, so the amount grew with every price rise and every tip from a friend. Writing down the role it plays for you, whether speculation, a long-term hedge or curiosity, and the most you could watch fall to zero without changing your life, turns a vague interest into a deliberate allocation.

                ## Milestones
                1. The reason you hold crypto written in one or two sentences.
                2. Your investable wealth estimated, excluding your home and emergency cash.
                3. A maximum crypto allocation recorded as a percentage of that figure.
                4. A sum you could lose entirely without changing your plans written beside it.
                5. The decision dated, and agreed with a partner if money is shared.

                ## Notes
                There is no correct number. What matters is that it is written before the next big price move, not during it. If you work with a financial adviser, share the cap so it sits inside your wider plan.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A written maximum crypto allocation, as a percentage of investable wealth, with the reason for holding and a total-loss figure, dated."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Write one sentence on why you want to hold crypto at all"
                - "Estimate your investable wealth excluding home and emergency cash"
                - "Set a maximum crypto percentage and the loss you could absorb"
                - "Record the decision with today's date where you keep money notes"
            - name: Inventory of every crypto account and wallet
              description: |-
                ## Purpose
                Crypto has a habit of scattering: an app bought on a whim, an exchange account opened for one token, a software wallet on an old phone, rewards sitting on a card platform. A single list of every place you hold or once held coins, with the login method and recovery route for each, is the base for security, tax records and anyone who may one day need to find them.

                ## Milestones
                1. Every exchange, app, broker and wallet you have used listed, including dormant ones.
                2. Each entry noting the email used, the two-factor method and the rough balance.
                3. Software wallets on old phones and laptops identified and marked for checking.
                4. The inventory stored somewhere secure, holding no passwords or seed words.

                ## Notes
                Searching your email for welcome and verification messages from exchanges is the fastest way to find accounts you have forgotten. Never put seed phrases or passwords in this list.
              priority: high
              deadlineOffsetDays: 14
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A dated inventory listing every crypto account and wallet you hold or have held, with login and recovery method, and no secrets in it."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Search your email for exchange sign-up and verification messages"
                - "List every account and wallet with its email and two-factor method"
                - "Check old phones and laptops for wallet apps or wallet files"
                - "Add any newly opened account or wallet to the inventory @recurring(quarterly)"
            - name: Per-coin and per-platform concentration limits
              description: |-
                ## Purpose
                A sensible overall cap still leaves room for trouble if most of it sits in one small token or on one exchange. Setting a ceiling for any single coin, a lower one for speculative tokens, and a maximum to leave on any single platform means one failure, whether a project collapse or a frozen exchange, costs a slice rather than the lot.

                ## Milestones
                1. A maximum share of the crypto allocation for any single coin written down.
                2. A lower ceiling set for small or newly launched tokens.
                3. A maximum balance to leave on any one exchange or app recorded.
                4. Current holdings checked against all three limits, with breaches listed.
              priority: medium
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "Three written limits, per coin, per speculative token and per platform, with current holdings checked against each and any breach listed."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Set the most any single coin may be of your crypto allocation"
                - "Set a lower ceiling for tokens less than a few years old"
                - "Decide the most you will leave on any one exchange"
                - "Compare current balances with each limit and list breaches"
            - name: Choosing a regulated exchange to buy and sell
              description: |-
                ## Purpose
                Exchanges vary enormously in licensing, fees, how they hold client coins and how they behave when markets panic. Picking one or two that are registered with your financial regulator, publish proof of reserves and allow withdrawals to your own wallet gives you a dependable way in and out instead of whichever app advertised loudest.

                ## Milestones
                1. Two or three exchanges checked on your financial regulator's register.
                2. Each compared on trading fees, spreads, withdrawal fees and supported withdrawal networks.
                3. How each holds client assets, and any published proof of reserves, noted.
                4. One main exchange chosen, with a second named as a backup if needed.

                ## Notes
                Start from the **Vendor** template. Registration is not the same as the protection a bank deposit has, so check what, if anything, covers you if the exchange fails.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "One main exchange chosen after checking regulator registration, fees and custody arrangements for at least two options, with the comparison saved."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Check your financial regulator's register for exchanges serving your country"
                - "Compare fees, spreads and withdrawal costs for two or three exchanges"
                - "Read how each exchange holds client coins and whether it publishes reserves"
                - "Record your chosen exchange and the reasons in a vendor note"
            - name: Exchange account security lockdown
              description: |-
                ## Purpose
                Most crypto theft from ordinary people comes through account takeover: a reused password, a text message code intercepted after a SIM swap, or a convincing phishing page. Moving every exchange account to a unique password, app or hardware-key two-factor and a withdrawal address allowlist closes the routes attackers actually use.

                ## Milestones
                1. Each exchange account using a unique password generated by a password manager.
                2. Text message two-factor replaced with an authenticator app or hardware security key everywhere.
                3. Withdrawal address allowlists switched on where the exchange offers them.
                4. Anti-phishing codes set so genuine exchange emails can be recognised.
                5. Your mobile provider asked to add a PIN before any SIM change or number transfer.
              priority: high
              deadlineOffsetDays: 14
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "Every exchange account uses a unique password, non-SMS two-factor and, where offered, a withdrawal allowlist, recorded in the inventory."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Move every exchange password into a password manager with unique entries"
                - "Replace text message codes with an authenticator app or security key"
                - "Turn on withdrawal address allowlists on each exchange"
                - "Ask your mobile provider to add a SIM change PIN to your account"
            - name: Choosing a hardware wallet for self-custody
              description: |-
                ## Purpose
                Once your holdings are more than you would shrug off losing, keeping the keys yourself on a dedicated device removes exchange failure from the list of risks, and adds your own mistakes to it. Choosing a hardware wallet bought direct from the maker or an authorised reseller, with clear documentation and support for the coins you hold, is the first step to doing self-custody properly.

                ## Milestones
                1. A balance threshold written down above which coins move to self-custody.
                2. Two or three hardware wallets compared on supported coins, screen, backup options and security record.
                3. A device ordered direct from the manufacturer or an authorised reseller.
                4. The packaging and tamper seals checked on arrival, with the device set up as new.

                ## Notes
                Start from the **Purchase decision** template. Never use a second-hand device or one that arrives with a recovery phrase already printed: that is a known theft method.
              priority: high
              deadlineOffsetDays: 45
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A hardware wallet bought from the maker or an authorised reseller, compared against at least one alternative, with your self-custody threshold written down."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Decide the balance above which coins move off exchanges"
                - "Compare two or three hardware wallets on the coins you actually hold"
                - "Order the chosen device direct from the maker or an authorised reseller"
                - "Check the seals and set the device up as new when it arrives"
            - name: Seed phrase backup and storage plan
              description: |-
                ## Purpose
                The recovery phrase is the wallet: anyone who sees it can take everything, and if it is lost along with the device, so are the coins. Writing it once, offline, onto something that survives fire and water, and storing copies in two places you control, turns the most common self-custody failure into a solved problem.

                ## Milestones
                1. The recovery phrase written by hand, never photographed, typed or stored in the cloud.
                2. A fire and water resistant copy made, such as stamped or engraved metal.
                3. Two separate secure locations chosen and the copies placed.
                4. Where each copy is kept, without the words themselves, added to your inventory.

                ## Notes
                Splitting the words across locations, half here and half there, weakens security more than people expect. If you want protection against one copy being found, look at a passphrase or multisignature instead.
              priority: high
              deadlineOffsetDays: 45
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Two offline copies of the recovery phrase, one fire and water resistant, in two separate secure locations, with locations recorded but no words."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Write the recovery phrase by hand on the card supplied with the wallet"
                - "Make a fire and water resistant copy of the phrase"
                - "Place the two copies in separate secure locations"
                - "Check both backup copies are intact and readable @recurring(yearly)"
            - name: First test transfer to your own wallet
              description: |-
                ## Purpose
                Sending coins to the wrong network or a mistyped address is permanent, and the first transfer is when most people learn that. Moving a small test amount from the exchange to the hardware wallet, checking the address on the device screen and confirming receipt builds the habit before a large sum is at stake.

                ## Milestones
                1. A receiving address generated on the hardware wallet and checked on its own screen.
                2. The correct network confirmed on both the exchange and the wallet.
                3. A small test amount sent and seen arriving in the wallet.
                4. The remaining balance sent only after the test succeeded, with fees noted.

                ## Notes
                Clipboard malware can swap a copied address for an attacker's. Always compare the first and last several characters on the device screen, not just on the computer.
              priority: medium
              deadlineOffsetDays: 60
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "A test transfer and a full transfer from an exchange to your hardware wallet completed, with addresses verified on the device and fees recorded."
                cadence: one-shot
                effort_hours_estimate: "1"
              tasks:
                - "Generate a receiving address on the hardware wallet"
                - "Confirm the withdrawal network matches the coin and the wallet"
                - "Send a small test amount and confirm it arrives"
                - "Transfer the remaining balance and note the fee paid"
            - name: Crypto tax records from day one
              description: |-
                ## Purpose
                Tax authorities in many countries now receive data directly from exchanges, and most treat swapping one coin for another, spending crypto or receiving rewards as taxable events. Choosing how you will keep records, usually a crypto tax tool fed by exchange exports, and downloading full histories now saves a painful reconstruction years later when an exchange has closed.

                ## Milestones
                1. The records your tax authority expects crypto holders to keep written down.
                2. The cost basis or pooling rule that applies to you noted.
                3. A record-keeping method chosen, whether a crypto tax tool or a spreadsheet.
                4. Every existing account's full transaction history downloaded and imported.

                ## Notes
                Exchanges sometimes trim old history or shut down. Download full exports now, not when you need them. If your situation is unusual, an accountant who handles crypto is worth the fee.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A record-keeping method in use, with the applicable cost basis rule noted and complete transaction history imported for every account."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Check what records your tax authority expects crypto holders to keep"
                - "Choose a crypto tax tool or a spreadsheet for your records"
                - "Download the full transaction history from every account"
                - "Import each history and note the cost basis rule the tool applies"
            - name: Crypto holdings register
              description: |-
                ## Purpose
                Prices move every minute, but a calm month-end snapshot is enough to see whether the allocation still fits. A register showing each coin, where it is held, the quantity and the month-end value in your home currency makes limit checks, tax work and conversations with a partner or adviser quick.

                ## Milestones
                1. A register with columns for coin, location, quantity, month-end value and share of the allocation.
                2. Every holding from the inventory entered.
                3. The total compared each month with your overall cap and concentration limits.
                4. At least three consecutive month-end snapshots recorded.

                ## Notes
                Start from the **Metrics log** template. Record values on the same day each month so the comparison is fair, and resist checking prices daily.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: artifact
                success_criteria: "A register holding at least three consecutive month-end snapshots of every crypto holding, with location and share of the allocation."
                cadence: rolling
              tasks:
                - "Create the register from the metrics log template"
                - "Enter every holding from your inventory with its location"
                - "Record month-end quantities and values in the register @recurring(monthly:28)"
                - "Note the total as a share of investable wealth against your cap"
            - name: Monthly sweep from exchange to self-custody
              description: |-
                ## Purpose
                Regular buying leaves coins piling up on the exchange, and each month they sit there is another month of exchange risk. A fixed monthly sweep that moves anything above your per-platform limit to the hardware wallet keeps exchange balances small without daily attention.

                ## Milestones
                1. The per-platform limit from your concentration rules written on the sweep checklist.
                2. A sweep day chosen that falls after your regular purchase settles.
                3. Withdrawal fees checked, with sweeps batched when a fee would eat a noticeable share.
                4. Three consecutive sweeps completed with exchange balances under the limit.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Exchange balances are below your per-platform limit after three consecutive monthly sweeps, each logged with the fee paid."
                cadence: rolling
              tasks:
                - "Choose a sweep day a few days after your regular purchase"
                - "Check the withdrawal fee and minimum withdrawal on your exchange"
                - "Sweep coins above the platform limit to your hardware wallet @recurring(monthly:15)"
                - "Log each sweep's amount and fee in the holdings register"
            - name: Rebalancing bands for the crypto slice
              description: |-
                ## Purpose
                Crypto can double or halve within months, so a small allocation can quietly triple or shrink to almost nothing. A written rule, for example trimming back to target when the slice passes an upper band and topping up only from new money when it falls below a lower one, means you act on a number you chose in a calm moment.

                ## Milestones
                1. Upper and lower bands around your target allocation written down.
                2. The method for trimming chosen, including which holdings are sold first.
                3. The tax cost of a trim estimated before any sale.
                4. The bands checked each quarter, with any action and its reason logged.

                ## Notes
                Selling usually creates a taxable disposal. Check the likely bill with your records before trimming, and consider whether new contributions alone can restore the balance.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Written rebalancing bands for the crypto allocation, with at least two quarterly checks logged and any trim recorded with its tax estimate."
                cadence: cyclic
              tasks:
                - "Write upper and lower bands around your crypto target"
                - "Decide which holdings to trim first if the upper band is breached"
                - "Compare the crypto share against the bands @recurring(quarterly)"
                - "Estimate the tax on any trim before placing the sale"
            - name: Fixed regular buying plan
              description: |-
                ## Purpose
                Buying a fixed amount on a fixed day removes the temptation to chase a rally or wait for a dip that never comes. Setting a modest recurring purchase that fits inside your cap, using an order type that avoids the wide spreads of instant-buy buttons, keeps contributions boring and cheap.

                ## Milestones
                1. A monthly amount chosen that keeps you inside your cap for the next year.
                2. The recurring purchase set up with a known fee and order type.
                3. A rule written for pausing purchases if the allocation passes its upper band.
                4. Six months of purchases completed at the expected fee.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A recurring crypto purchase of a fixed amount running for six months at a known fee, with a written pause rule tied to the cap."
                cadence: rolling
              tasks:
                - "Work out a monthly amount that keeps you within your cap for a year"
                - "Set up the recurring purchase using the lowest-cost order type"
                - "Write down when you would pause purchases"
                - "Check the purchase went through at the expected fee @recurring(monthly:6)"
            - name: Quarterly transaction export and reconciliation
              description: |-
                ## Purpose
                Tax tools miss transfers between your own wallets, mislabel staking rewards and double count swaps unless someone checks. Exporting every account each quarter and clearing the tool's warnings while memories are fresh turns the year-end job into a review rather than an investigation.

                ## Milestones
                1. Exports downloaded from every exchange and wallet for the quarter.
                2. Transfers between your own accounts matched so they are not treated as sales.
                3. Missing cost basis warnings in the tax tool cleared or explained.
                4. Quarter-end balances in the tool matching real balances.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Each quarter, every account's transactions are imported and the tax tool's balances match real holdings with no unexplained warnings."
                cadence: rolling
              tasks:
                - "Download transaction exports from every exchange and wallet @recurring(quarterly)"
                - "Match transfers between your own wallets in the tax tool"
                - "Clear or explain each missing cost basis warning"
                - "Compare tool balances with real balances for every account"
            - name: Monthly crypto security review
              description: |-
                ## Purpose
                Security settings drift: an old phone stays logged in, an API key made for a tax tool keeps trading rights, a website still holds permission to move tokens from your wallet. A short monthly review of sessions, devices, keys and token approvals catches these before an attacker does.

                ## Milestones
                1. Active sessions and authorised devices checked on every exchange.
                2. API keys reduced to read-only, with unused keys deleted.
                3. Token approvals in any software wallet reviewed and old ones revoked.
                4. Account emails checked for any login or withdrawal notice you did not expect.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A security review completed monthly for three months, with stale sessions, unused API keys and old token approvals removed each time."
                cadence: rolling
              tasks:
                - "Log out unknown sessions and devices on each exchange @recurring(monthly:19)"
                - "Set tax tool API keys to read-only and delete unused ones"
                - "Revoke token approvals you no longer use @recurring(quarterly)"
                - "Search your email for login alerts you do not recognise"
            - name: Wallet firmware and software update routine
              description: |-
                ## Purpose
                Hardware wallet makers fix security flaws and add coin support through firmware, but fake update prompts are also a favourite phishing trick. Updating only through the maker's official app, reached from a saved bookmark, and having your recovery backup to hand before each update keeps the device current without exposing it.

                ## Milestones
                1. The official companion app installed from the maker's own site, with the address bookmarked.
                2. Current firmware version recorded in your inventory.
                3. A rule written never to enter the recovery phrase on a computer or phone during an update.
                4. Updates applied through the official app, with the date logged.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Wallet firmware is current, updated only through the maker's official app, with version and date recorded in your inventory."
                cadence: rolling
              tasks:
                - "Bookmark the hardware wallet maker's official website"
                - "Record the device's current firmware version in your inventory"
                - "Check for firmware updates in the official app @recurring(quarterly)"
                - "Confirm your backup is to hand before applying an update"
            - name: Exchange health watch
              description: |-
                ## Purpose
                Several large exchanges and lenders have frozen withdrawals with little warning, and the signs, such as slow withdrawals, regulator warnings or vanishing reserve reports, were often visible weeks before. A quarterly look at each platform you use, with a written trigger for moving funds out, gives you time to act while withdrawals still work.

                ## Milestones
                1. Each platform's regulatory status and any warnings from regulators checked.
                2. Published proof of reserves or audit statements noted with dates.
                3. Triggers for withdrawing everything written down, such as halted withdrawals or a lost licence.
                4. A risk entry kept for each platform with its last check date.

                ## Notes
                Start from the **Risk register** template.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A risk entry for every crypto platform you use, checked quarterly, with written triggers for withdrawing funds."
                cadence: rolling
              tasks:
                - "Create a risk entry for each exchange and app you use"
                - "Write the signs that would make you withdraw everything"
                - "Check regulator warnings and reserve reports for each platform @recurring(quarterly)"
                - "Withdraw from any platform that meets a trigger"
            - name: Annual crypto tax report
              description: |-
                ## Purpose
                Crypto gains, losses and income usually need reporting on your annual return, and the numbers come out of the records kept through the year. Producing a report from your tax tool soon after the tax year ends, checking it against exchange statements and handing it to whoever files your return avoids last-minute estimates.

                ## Milestones
                1. The tax tool's report produced for the closed tax year.
                2. Gains, losses and income figures checked against exchange annual statements.
                3. Any losses from scams, failed exchanges or lost keys documented with evidence.
                4. The figures included in your return or passed to your accountant before the deadline.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: deliverable
                success_criteria: "A crypto tax report for the closed tax year, checked against exchange statements, included in your return before the filing deadline."
                cadence: cyclic
              tasks:
                - "Generate the crypto tax report once the tax year closes @recurring(yearly)"
                - "Check the totals against each exchange's annual statement"
                - "Gather evidence for any loss you intend to claim"
                - "Send the report to your accountant or enter it in your return"
            - name: Staking and rewards income log
              description: |-
                ## Purpose
                Staking rewards, interest from crypto savings products and airdropped tokens are often treated as income when received, at their value on that day, and then again for gains when sold. Logging each reward with its date and value as it arrives means the income figure and the later cost basis are both right.

                ## Milestones
                1. Every source of rewards listed: staking, savings products, airdrops and referral bonuses.
                2. A log with date, coin, quantity and home-currency value on receipt.
                3. Rewards in your tax tool checked against the log.
                4. A full year of rewards totalled for your tax return.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every staking reward and airdrop for the year logged with date and home-currency value, matching the tax tool's income total."
                cadence: rolling
              tasks:
                - "List every product that pays you crypto rewards"
                - "Set up a rewards log with date, coin, quantity and value"
                - "Record rewards received during the month @recurring(monthly:12)"
                - "Compare the log with the income figures in your tax tool"
            - name: Wallet recovery drill
              description: |-
                ## Purpose
                A backup that has never been tested is a hope, not a plan: words get miscopied, a passphrase gets forgotten, a device model gets discontinued. Restoring the wallet from your written phrase onto a spare or reset device once a year proves the backup works and that you still remember how.

                ## Milestones
                1. A drill checklist written, covering what to restore, on which device and how to verify it.
                2. The wallet restored from the written phrase, with the same addresses appearing.
                3. Any passphrase confirmed as remembered or correctly stored.
                4. The spare device wiped afterwards and the drill date logged.

                ## Notes
                Start from the **Operational checklist** template. Never type the recovery phrase into a computer, phone or website as part of a drill; use a hardware device only.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A successful restore from the written recovery phrase onto a hardware device, with matching addresses and the date recorded, within the last 12 months."
                cadence: cyclic
              tasks:
                - "Write a recovery drill checklist from the operational checklist template"
                - "Restore the wallet from paper on a spare or reset hardware device"
                - "Confirm the first receiving address matches your records"
                - "Run the full recovery drill again @recurring(yearly)"
            - name: How keys, addresses and transactions work
              description: |-
                ## Purpose
                Almost every crypto mistake, from sending to the wrong network to trusting a fake support agent, comes from not knowing what a private key does. Spending a few hours on how keys, addresses, signatures and confirmations fit together makes every later security and custody decision easier to judge.

                ## Milestones
                1. The difference between a private key, a public address and a recovery phrase explained in your own words.
                2. What a confirmation is, and why transfers cannot be reversed, understood.
                3. Why the same coin can exist on several networks noted with one example.
                4. Three questions you still had written down and answered.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A one-page note in your own words explaining keys, addresses, recovery phrases and confirmations, with three open questions answered."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Read your hardware wallet maker's guide to keys and recovery phrases"
                - "Write a one-page explanation of keys and addresses in your own words"
                - "Look up one coin that exists on more than one network"
                - "Ask the agent to quiz you on the gaps in your one-page note"
            - name: Custody options compared
              description: |-
                ## Purpose
                Holding coins on an exchange, in your own wallet, in a shared multisignature setup or through an exchange-traded product each swaps one set of risks for another. Comparing them against your balance and your own habits shows which mix suits you, rather than whichever one forums argue loudest for.

                ## Milestones
                1. Four custody options listed with who controls the keys in each.
                2. The main risk of each written: exchange failure, personal error, complexity or fund costs.
                3. Each option rated for your current balance and comfort with technology.
                4. A preferred custody mix chosen for the next year.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A written comparison of four custody options with a chosen custody mix for the next year and the reasons for it."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "List who controls the keys in each custody option"
                - "Write the main way you could lose money under each"
                - "Rate each option for your balance and comfort with technology"
                - "Record the custody mix you will use for the coming year"
            - name: Recognising crypto scams and phishing
              description: |-
                ## Purpose
                Fake support agents, cloned wallet apps, giveaway livestreams, romance-led investment pitches and recovery services that steal a second time are all common, and none can be reversed once coins move. Learning the patterns and writing a short household rule list, starting with never sharing a recovery phrase with anyone, protects you and the people you live with.

                ## Milestones
                1. The common crypto scam patterns read about in warnings from your regulator or a consumer body.
                2. A rule list written: nobody legitimate asks for a recovery phrase, and real support never starts in your messages.
                3. Official websites and apps bookmarked so links are never followed from emails or adverts.
                4. The rule list shared with your household.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A written scam rule list shared with your household, and bookmarks in place for every official crypto site you use."
                cadence: phased
                effort_hours_estimate: "3"
              tasks:
                - "Read your financial regulator's warnings about crypto scams"
                - "Write a short rule list starting with never sharing a recovery phrase"
                - "Bookmark the official sites for every exchange and wallet you use"
                - "Talk the rule list through with everyone in your household"
            - name: Stablecoins and how they can fail
              description: |-
                ## Purpose
                Stablecoins look like cash on an exchange screen but are promises from an issuer, backed by reserves of varying quality, and some have lost their peg suddenly. Understanding how the ones you hold are backed, who can freeze them and how you would redeem them stops you treating them as a bank account.

                ## Milestones
                1. Each stablecoin you hold listed with its issuer and type of backing.
                2. The issuer's latest reserve report or attestation read and dated.
                3. Whether the issuer can freeze balances, and how redemption works, noted.
                4. A maximum you will hold in stablecoins set and written down.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A note for each stablecoin you hold covering issuer, backing, freeze powers and redemption, plus a written maximum holding."
                cadence: phased
                effort_hours_estimate: "3"
              tasks:
                - "List every stablecoin you hold with its issuer"
                - "Read each issuer's most recent reserve attestation"
                - "Note whether the issuer can freeze or blacklist balances"
                - "Set the most you will keep in stablecoins at any time"
            - name: Reading a token's supply and white paper critically
              description: |-
                ## Purpose
                Two tokens with the same price can have very different futures depending on how many more will be created, who holds the early allocation and when insiders can sell. Practising on tokens you hold or are tempted by, reading supply schedules, insider allocations and the white paper's actual claims, makes marketing much easier to see through.

                ## Milestones
                1. Circulating supply, maximum supply and issuance rate found for one token.
                2. The share held by founders, early investors and the treasury noted, with release dates.
                3. The white paper's core claim summarised in two sentences, with what would prove it wrong.
                4. The same review repeated for every token you hold.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A one-page supply and claims review for each token you hold, covering issuance, insider allocations and release dates."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Find the circulating and maximum supply of one token you hold"
                - "Note founder and early investor allocations and their release dates"
                - "Summarise the white paper's core claim in two sentences"
                - "Ask the agent to list the weakest assumptions in your summary"
            - name: How crypto is taxed where you live
              description: |-
                ## Purpose
                Rules differ widely: some countries tax each coin-to-coin swap, some treat staking rewards as income, some apply special pooling rules, and a few treat frequent traders differently from investors. Learning the handful of rules that apply to you means your records capture the right events from the start.

                ## Milestones
                1. The taxable events in your country listed: selling, swapping, spending, gifting and rewards.
                2. The annual allowance or threshold for gains, if any, noted.
                3. How losses are treated, including lost keys and failed platforms, understood.
                4. Questions you could not answer written down for an accountant.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A written list of the crypto taxable events, allowances and loss rules that apply in your country, with open questions noted for an accountant."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "List the crypto events your tax authority treats as taxable"
                - "Note any annual allowance or threshold for gains"
                - "Read how your tax authority treats lost or stolen crypto"
                - "Write down questions to put to an accountant"
            - name: Consolidating scattered crypto accounts
              description: |-
                ## Purpose
                Every extra exchange account is another password to defend, another export to download and another place a balance can be forgotten. Moving small balances into your chosen exchange or wallet and closing the dormant accounts shrinks what you have to protect and the records you have to keep.

                ## Milestones
                1. Dormant accounts identified from your inventory, with their balances.
                2. Full transaction history downloaded from each account before anything is moved.
                3. Small balances moved to your main exchange or hardware wallet where fees allow.
                4. Accounts closed and marked closed in the inventory with the date.
              priority: medium
              deadlineOffsetDays: 120
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "Every dormant crypto account emptied, its history downloaded and closed, leaving no more than two active exchanges in the inventory."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Mark dormant accounts and their balances in your inventory"
                - "Download the full history from each before moving anything"
                - "Move remaining balances to your main exchange or wallet"
                - "Close each emptied account and note the closure date"
            - name: Exchange-traded crypto products versus direct coins
              description: |-
                ## Purpose
                In some countries you can now hold crypto exposure through exchange-traded products in an ordinary brokerage or tax-advantaged account, swapping key management for an annual fee and the fund's own custody arrangements. Comparing that route with holding coins yourself, on cost, tax treatment, custody and what you actually own, settles which suits your allocation.

                ## Milestones
                1. The products available to you, and the account types that can hold them, listed.
                2. Annual charges compared with your current exchange and withdrawal costs.
                3. The tax treatment of each route checked against your tax authority's guidance.
                4. A decision recorded on which part of the allocation, if any, uses each route.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A recorded decision on how much of the crypto allocation sits in exchange-traded products versus direct coins, with cost and tax compared."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Check which crypto exchange-traded products your broker offers"
                - "Compare annual charges with your current direct holding costs"
                - "Check how each route is taxed in your country"
                - "Record which route you will use for which part of the allocation"
            - name: Deciding whether to stake your coins
              description: |-
                ## Purpose
                Staking pays a reward for helping secure a network, but the coins may be locked for days or weeks, can be cut for validator faults, and are sometimes lent onward by the platform offering it. Weighing the reward against lock-up, penalties, platform risk and the extra tax records lets you say yes or no for good reasons.

                ## Milestones
                1. The coins you hold that can be staked listed with the typical reward rate.
                2. Lock-up and withdrawal periods for each staking route written down.
                3. Who holds the keys in each route, and whether coins are lent onward, checked.
                4. A decision recorded for each coin: stake, do not stake, or revisit.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A written stake or do not stake decision for each eligible coin, with lock-up period, custody and penalty risk noted."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "List which of your coins can be staked and the typical reward"
                - "Write the lock-up and withdrawal period for each route"
                - "Read the staking terms on who holds the keys"
                - "Record a stake or do not stake decision for each coin"
            - name: Cutting the cost of buying crypto
              description: |-
                ## Purpose
                Instant-buy buttons and card purchases can cost several percent through spreads and fees, which on a regular purchase adds up to real money. Working out what you actually paid on recent buys, then switching to order-book trading, bank transfers and cheaper withdrawal networks, can cut costs sharply.

                ## Milestones
                1. The all-in cost of your last three purchases worked out, including spread.
                2. The cheapest funding method on your exchange identified.
                3. Regular purchases switched to the lowest-cost order type available.
                4. Withdrawal networks and batching chosen to keep transfer fees small.
              priority: low
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "The all-in cost of recent purchases calculated, and regular buys moved to the cheapest funding method and order type available."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Work out the full cost of your last three purchases, including spread"
                - "Compare card, bank transfer and other funding fees on your exchange"
                - "Switch your regular buy to the cheapest order type"
                - "Choose the lowest-fee withdrawal network for each coin"
            - name: Written sell rules for each coin you hold
              description: |-
                ## Purpose
                Selling decisions made in a euphoric week or a crash tend to be the worst ones. Writing for each coin what would make you sell part or all of it, such as a broken reason for holding, a security failure in the project or a rise that takes it over its limit, gives you an answer before the question arrives.

                ## Milestones
                1. One reason for holding each coin written in a sentence.
                2. For each coin, two or three events that would mean the reason no longer holds.
                3. Price-based trims tied to your concentration limits, not to predictions.
                4. The rules stored where you will see them before any sale.
              priority: medium
              deadlineOffsetDays: 60
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A written sell rule for every coin you hold, naming the reason for holding and the events that would trigger a sale."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Write one sentence on why you hold each coin"
                - "List the events that would break that reason for each coin"
                - "Link any price-based trim to your concentration limits"
                - "Reread and update your sell rules @recurring(yearly)"
            - name: Unwinding forgotten DeFi and liquidity positions
              description: |-
                ## Purpose
                Experiments from a few years ago, a liquidity pool here and a lending deposit there, often sit forgotten in old wallet addresses while the projects behind them decay or get exploited. Finding every open position, withdrawing what is still recoverable and recording each exit cleans up both the risk and the tax records.

                ## Milestones
                1. Every wallet address you have used with DeFi apps listed.
                2. Open positions found with a read-only portfolio viewer, without connecting a wallet.
                3. Recoverable positions withdrawn to your main wallet.
                4. Each withdrawal recorded in your tax tool with its value.
              priority: low
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "No open DeFi positions remain in old addresses except ones you chose to keep, with every withdrawal recorded in your tax tool."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "List every wallet address you have used with DeFi apps"
                - "Paste each address into a read-only portfolio viewer"
                - "Withdraw recoverable positions to your main wallet"
                - "Record each withdrawal and its value in your tax tool"
            - name: Tracing lost or forgotten crypto
              description: |-
                ## Purpose
                Early buyers often have coins in a wallet file on an old laptop, an exchange account under a former email or a paper wallet in a drawer. A methodical search through old devices, email archives and papers can recover holdings worth far more than the effort, provided you avoid recovery services that ask for your keys.

                ## Milestones
                1. Old devices, email accounts and paper files listed for searching.
                2. Wallet files and paper wallets found and copied safely before any attempt to open them.
                3. Exchanges contacted through official channels about accounts under old emails.
                4. Recovered coins moved to your current wallet and added to the inventory and tax records.

                ## Notes
                Many recovery services are scams. Never send a wallet file or phrase to a stranger; if you need help with an encrypted wallet, use a firm with a verifiable track record and a written contract.
              priority: low
              frontmatter:
                mode: research
                output_kind: deliverable
                success_criteria: "Every old device, email account and paper file searched, with any recovered coins in your current wallet and recorded."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "List old phones, laptops and email addresses you used before"
                - "Search old email for exchange and wallet messages"
                - "Copy any wallet files found to an offline drive before opening them"
                - "Contact exchanges through their official support pages about old accounts"
            - name: Cashing out for a house deposit or big purchase
              description: |-
                ## Purpose
                Turning crypto into money for a property deposit, a car or school fees runs into problems people do not expect: bank checks on where the money came from, withdrawal limits, a tax bill and a falling price while you wait. Planning the sale months ahead, in stages and with the paperwork ready, gets the cash there on time.

                ## Milestones
                1. The amount needed and the date it must be in your bank written down.
                2. Sales planned in stages, with the tax on each estimated.
                3. A source of funds pack ready: purchase history, exchange statements and tax records.
                4. Your bank or lender told in advance that the funds come from crypto sales.
                5. The money received and the tax set aside in a separate account.
              priority: medium
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "The target sum in your bank account by the date needed, with a source of funds pack accepted by the lender and the tax set aside."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Write down the amount needed and the date it must arrive"
                - "Plan the sale in stages and estimate the tax on each"
                - "Put together a source of funds pack from your records"
                - "Tell your bank or mortgage lender the deposit comes from crypto"
            - name: Exchange failure response plan
              description: |-
                ## Purpose
                When an exchange halts withdrawals, the first hours matter: confused messages, fake recovery offers and rumours spread fast. A one-page plan written now, covering what to download, who to contact and how to record the loss for tax and creditor claims, means you act calmly instead of reacting.

                ## Milestones
                1. A list of what to save immediately: balances, history, statements and screenshots.
                2. The official channels for updates on each exchange noted, with a warning about impostors.
                3. How creditor claims work in an exchange insolvency in your country read and summarised.
                4. The plan stored with your inventory and shared with a partner if you have one.
              priority: high
              deadlineOffsetDays: 60
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A one-page exchange failure plan covering evidence to save, official channels and the claims process, stored with your inventory."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Write the evidence to save the moment withdrawals stop"
                - "Note each exchange's official status page and support address"
                - "Read how creditor claims work in an exchange insolvency"
                - "Store the plan next to your crypto inventory"
            - name: Handling a chain split or airdrop
              description: |-
                ## Purpose
                A chain split or an airdrop can put new tokens in your wallet, and with them come questions: is it safe to claim, how is it taxed, and is the message telling you to claim it a scam. Writing a short procedure before the next one, with your records ready, avoids exposing your main wallet to a rushed claim.

                ## Milestones
                1. A rule that main-wallet coins move to a fresh wallet before any forked tokens are claimed.
                2. Your tax authority's view on forks and airdrops noted.
                3. A list of the warning signs of fake airdrop claim sites.
                4. Any tokens received recorded with date and value.
              priority: low
              frontmatter:
                mode: event
                output_kind: artifact
                success_criteria: "A written chain split and airdrop procedure, with your tax authority's treatment noted and any tokens received recorded at their value."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Read your tax authority's view on forked and airdropped tokens"
                - "Write a rule to move coins to a fresh wallet before claiming"
                - "List the warning signs of fake airdrop claim sites"
                - "Record any tokens received with date and value"
            - name: First-year crypto holding review
              description: |-
                ## Purpose
                Twelve months in, you have enough history to see whether the plan worked: whether the allocation stayed inside its limits, what fees cost, whether security routines happened and how you felt in the worst month. Reviewing it honestly, with numbers, decides whether to keep, shrink or end the experiment.

                ## Milestones
                1. Twelve months of register snapshots compared with your cap and limits.
                2. Total fees and tax for the year added up.
                3. Missed security reviews, sweeps or drills listed.
                4. A decision recorded: keep the allocation as it is, change the limits, or wind it down.
              priority: medium
              deadlineOffsetDays: 365
              frontmatter:
                mode: event
                output_kind: decision
                success_criteria: "A written first-year review with fees, tax and limit breaches totalled, ending in a recorded keep, change or wind-down decision."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Compare twelve month-end snapshots with your cap and limits"
                - "Add up fees and tax paid on crypto over the year"
                - "List any routines you skipped and why"
                - "Ask the agent to summarise the year's register into a one-page review"
                - "Record whether to keep, change or wind down the allocation"
            - name: Crypto access plan for your heirs
              description: |-
                ## Purpose
                Large amounts of crypto are believed lost for good because holders died without telling anyone how to reach it. A letter of instruction that explains what you hold and where, how to find the backups and who to trust for help, without writing the recovery phrase in the letter, lets your family recover it without exposing it while you are alive.

                ## Milestones
                1. A letter of instruction listing holdings, wallets, exchanges and where backups are kept.
                2. The letter stored separately from the recovery phrase, so neither alone gives access.
                3. Your executor or a trusted person told the letter exists and where to find it.
                4. Your will checked with whoever drafted it so crypto assets are covered.
                5. The letter reviewed after any change of wallet or exchange.

                ## Notes
                Start from the **Operational checklist** template. Never put the recovery phrase in a will, which may become a public document after death.
              priority: high
              deadlineOffsetDays: 90
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A letter of instruction covering every crypto holding, stored apart from the backups, with your executor aware of where it is."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Draft a letter of instruction covering every wallet and exchange"
                - "Store the letter apart from the recovery phrase backups"
                - "Tell your executor the letter exists and where it is"
                - "Review the access letter against your inventory @recurring(yearly)"
            - name: Inheriting crypto from someone who has died
              description: |-
                ## Purpose
                Executors and families often find a hardware wallet in a drawer or an exchange app on a phone with no idea what to do next, while scammers watch for exactly that. Securing devices and papers, contacting exchanges through their bereavement process and recording the value at the date of death protects the estate and the people inheriting it.

                ## Milestones
                1. Devices, papers and any letter of instruction gathered and kept offline and secure.
                2. Each exchange's deceased account process started through official channels.
                3. The value of holdings on the date of death recorded for the estate and tax.
                4. Help from the estate's solicitor or a reputable specialist agreed in writing before keys are handled.

                ## Notes
                Do not switch on unfamiliar devices or type any phrase found in papers into a website. Anyone who contacts the family offering to recover funds for a fee should be treated as a scammer.
              priority: medium
              frontmatter:
                mode: service
                output_kind: deliverable
                success_criteria: "Every crypto holding of the deceased identified, valued at the date of death and either recovered or under a written plan with the estate's adviser."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "Gather every device, paper and note that may relate to crypto"
                - "Store the devices switched off and secure until a plan is agreed"
                - "Contact each exchange through its official deceased account process"
                - "Record the value of holdings on the date of death"
            - name: Crypto decisions as a couple
              description: |-
                ## Purpose
                Friction over crypto is common in couples when one partner holds more, or takes more risk, than the other knows about. Agreeing together on the cap, who can reach what and how often you look at it turns a private bet into a shared, visible part of household wealth.

                ## Milestones
                1. Both partners able to see current holdings and the cap.
                2. A joint limit on the share of household wealth held in crypto agreed.
                3. A rule that purchases above a set amount need both partners to agree.
                4. Each partner knowing where the access letter and backups are.
              priority: low
              frontmatter:
                mode: operating
                output_kind: decision
                success_criteria: "A joint crypto cap and purchase rule agreed by both partners, with a quarterly check-in held at least twice."
                cadence: rolling
              tasks:
                - "Share the current holdings register with your partner"
                - "Agree a joint cap on crypto as a share of household wealth"
                - "Set the purchase size that needs both partners to agree"
                - "Hold a short crypto check-in together @recurring(quarterly)"
            - name: Being paid in crypto as a freelancer
              description: |-
                ## Purpose
                Freelancers and contractors paid in crypto face two jobs at once: income tax on the value when paid, and a price that can move before they convert it. A written policy for how much to convert straight away, how to record each payment and where to hold the tax money keeps income predictable.

                ## Milestones
                1. A share of each crypto payment to convert to your home currency on receipt chosen.
                2. Each payment logged with date, client, amount and home-currency value.
                3. Tax on crypto income set aside in cash in a separate account.
                4. Invoices stating the amount in your home currency, with the rate used at payment.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every crypto payment for a quarter logged at its home-currency value, with the agreed share converted and tax set aside in cash."
                cadence: rolling
              tasks:
                - "Decide what share of each crypto payment to convert straight away"
                - "Set up a log for client payments with their value on receipt"
                - "Log crypto payments and move tax money to savings @recurring(monthly:3)"
                - "Show the home-currency amount on every invoice"
            - name: Shrinking crypto risk as retirement nears
              description: |-
                ## Purpose
                Sharp falls matter far more when you will soon be living off your savings than when you are decades from needing them. Deciding in your fifties or sixties how the crypto allocation should change as retirement approaches, and whether any of it will become income, stops a crash from landing in the wrong year.

                ## Milestones
                1. Your expected retirement date and the crypto share you want at that point written down.
                2. A schedule of gradual trims across tax years, with the tax on each estimated.
                3. A decision on whether any crypto will fund retirement spending or stay a long-term holding.
                4. The plan shared with your adviser or partner, if you have one.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A written glide plan for the crypto allocation up to retirement, with trim dates, estimated tax and a decision on using crypto for income."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Write your expected retirement date and target crypto share"
                - "Plan gradual trims across tax years and estimate the tax"
                - "Decide whether any crypto will fund retirement spending"
                - "Share the plan with your adviser or partner"
            - name: Talking with a teenager who wants to buy crypto
              description: |-
                ## Purpose
                Teenagers meet crypto through games, streamers and friends, often alongside promises that would never appear in a regulated advert. A calm conversation that covers scams, what drives prices and why keys matter, plus a small supervised amount if you choose, teaches more than a flat no.

                ## Milestones
                1. What your teenager has seen or been told about crypto heard out first.
                2. Common scams aimed at young people discussed with real examples.
                3. Any age rules for exchange accounts in your country checked.
                4. A family decision recorded: no crypto for now, or a small supervised amount with written limits.
              priority: low
              frontmatter:
                mode: service
                output_kind: decision
                success_criteria: "A written family rule on teenage crypto use, agreed after one conversation covering scams, prices and keys."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Ask your teenager what they have seen about crypto online"
                - "Show them two real scam examples from your regulator's warnings"
                - "Check the minimum age for exchange accounts where you live"
                - "Agree and write down a family rule on crypto for now"
            - name: Recovering after a crypto scam or theft
              description: |-
                ## Purpose
                Victims of crypto fraud are routinely targeted a second time by firms promising to trace the coins for a fee. Reporting quickly through the right channels, securing remaining accounts, keeping the evidence and recording the loss for tax gives you the best realistic chance of help and stops the damage growing.

                ## Milestones
                1. Remaining accounts secured: passwords changed, sessions ended and funds moved to a new wallet.
                2. The theft reported to the police or national fraud service, the exchange involved and your financial regulator.
                3. Transaction IDs, addresses, messages and screenshots saved in one folder.
                4. The loss and its tax treatment discussed with an accountant.
                5. A rule written to ignore anyone who makes contact offering recovery for a fee.
              priority: high
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "Remaining funds moved to a new wallet, the theft reported to police and the exchange, and all evidence saved in one folder."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Move any remaining coins to a new wallet with a new recovery phrase"
                - "Report the theft to the police and the exchange involved"
                - "Save every transaction ID, address and message in one folder"
                - "Write a rule to ignore unsolicited offers to recover the coins"
            - name: Multisignature vault for larger holdings
              description: |-
                ## Purpose
                Above a certain size, a single device and a single phrase become a single point of failure, whether from theft, fire or one mistake. A two-of-three multisignature setup spreads control across three keys in different places, so no single loss or theft is fatal, at the cost of extra complexity that must be documented.

                ## Milestones
                1. The balance at which multisignature becomes worth the complexity written down.
                2. Three keys set up on devices from at least two makers, kept in separate locations.
                3. The wallet configuration file backed up alongside each key.
                4. A test spend needing two keys made before the main balance is moved.
                5. Your heirs' access letter updated to explain the setup.
              priority: low
              deadlineOffsetDays: 180
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A two-of-three multisignature wallet holding the main balance, with a successful two-key test spend and configuration backups stored with each key."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "Write the balance above which you will use multisignature"
                - "Set up three keys on devices from at least two makers"
                - "Back up the wallet configuration file with each key"
                - "Make a small test spend that needs two keys to sign"
            - name: Hardware wallet passphrase protection
              description: |-
                ## Purpose
                Adding a passphrase to the recovery phrase creates a separate hidden wallet, so someone who finds your written words still cannot reach the main funds. It also means forgetting the passphrase loses everything, so it needs its own backup and careful testing before any money moves.

                ## Milestones
                1. The trade-off of a passphrase understood and a decision made.
                2. A passphrase chosen and stored separately from the recovery phrase.
                3. Funds moved to the passphrase wallet only after a successful restore test.
                4. The heirs' access letter updated to explain where the passphrase backup is.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A passphrase wallet restored successfully on a reset device before funding, with the passphrase backed up apart from the recovery phrase."
                cadence: phased
                effort_hours_estimate: "3"
              tasks:
                - "Read the wallet maker's guide to passphrase wallets"
                - "Choose a passphrase and store it apart from the recovery phrase"
                - "Restore the passphrase wallet on a reset device before funding it"
                - "Update the access letter to explain the passphrase backup"
            - name: Running your own node to verify transactions
              description: |-
                ## Purpose
                Wallet apps usually ask someone else's server for your balance, which reveals your addresses and means trusting their answer. Running your own full node on a small home computer lets you verify your own transactions and keep your addresses private, for those who value that enough to maintain it.

                ## Milestones
                1. The hardware, storage and bandwidth needs for the network you hold checked.
                2. A node installed and fully synchronised.
                3. Your wallet software connected to your own node.
                4. A monthly check that the node is running current software.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A fully synchronised node running at home, with your wallet software connected to it and a monthly health check logged."
                cadence: phased
                effort_hours_estimate: "12"
              tasks:
                - "Check the storage and bandwidth a full node needs for your network"
                - "Install node software on a spare computer and let it synchronise"
                - "Point your wallet software at your own node"
                - "Check the node is synced and running current software @recurring(monthly:24)"
            - name: Keeping your holdings private and physically safe
              description: |-
                ## Purpose
                People who talk about their crypto online or at work have been targeted for burglary, extortion and SIM swap attacks. Reducing what others can learn, from social posts and reused addresses to the delivery address for a hardware wallet, lowers the chance of being picked out.

                ## Milestones
                1. Public posts mentioning crypto holdings reviewed and removed.
                2. A household rule not to discuss amounts held with anyone outside it.
                3. Fresh receiving addresses used for each deposit rather than one reused address.
                4. A small decoy balance or passphrase setup considered for duress situations.
                5. Hardware wallets delivered to an address that does not reveal your home, where practical.
              priority: medium
              frontmatter:
                mode: building
                output_kind: habit
                success_criteria: "No public posts reveal your holdings, a household privacy rule is agreed and every new deposit uses a fresh receiving address."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Review your social media for posts that mention holdings"
                - "Delete or restrict posts that reveal amounts or wallets"
                - "Switch to a fresh receiving address for each deposit"
                - "Agree a household rule not to discuss amounts held"
            - name: Vetting crypto lending and yield offers
              description: |-
                ## Purpose
                Platforms offering high yields on deposited crypto have collapsed repeatedly, taking customer deposits with them, because the yield came from lending those deposits on to risky borrowers. A written checklist covering where the yield comes from, who holds the keys and what happens in insolvency lets you assess any new offer in minutes, usually as a no.

                ## Milestones
                1. A checklist covering source of yield, custody, onward lending, licensing and insolvency treatment.
                2. Any yield products you already use run through the checklist.
                3. Products that fail withdrawn from, with the exit recorded.
                4. A maximum, if any, set for holdings in yield products.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A written yield checklist applied to every yield product you use, with failing products exited and a maximum holding recorded."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Write a checklist for judging any crypto yield offer"
                - "Run each yield product you use through the checklist"
                - "Withdraw from any product that fails the checklist"
                - "Set the most you will hold in yield products"
            - name: Verifying an exchange's proof of reserves
              description: |-
                ## Purpose
                Proof of reserves reports can show that an exchange holds customer assets, but only if you check your own balance appears in them and understand what the report leaves out, such as liabilities. Learning to verify your account's inclusion and read the auditor's scope turns a marketing badge into evidence you can weigh.

                ## Milestones
                1. The latest proof of reserves report found for each exchange you use.
                2. Your own account's inclusion verified with the exchange's tool.
                3. Whether liabilities were covered, and who did the work, noted.
                4. The result added to the exchange's entry in your risk register.
              priority: low
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "Your account's inclusion in each exchange's latest proof of reserves verified, with the report's scope noted in your risk register."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Find the latest proof of reserves report for your main exchange"
                - "Use the exchange's verification tool to check your account is included"
                - "Note whether the report covers liabilities as well as assets"
                - "Add the findings to the exchange entry in your risk register"
---

# Cryptocurrency Holdings

This area is for anyone who holds, or is about to hold, a slice of their wealth in cryptocurrency and wants it to stay small, safe and properly recorded. It starts with the foundations (why and how much, an inventory, concentration limits, an exchange, account security, a hardware wallet, seed backups and tax records), then the routines that keep it in order, the knowledge that prevents expensive mistakes, improvements and decisions, dated events such as cashing out for a house deposit, situations for couples, freelancers, executors, parents and people nearing retirement, and finally specialist work such as multisignature, passphrases and running your own node.

The rhythm is a monthly register snapshot, exchange sweep and security review, quarterly exports, band checks, firmware updates and exchange health checks, and a yearly tax report, backup check and recovery drill. The Vendor, Purchase decision, Metrics log, Risk register and Operational checklist templates pair with choosing an exchange, choosing a hardware wallet, the holdings register, the exchange health watch, the recovery drill and the heirs' access letter. Installing adds all 50 projects as active, so archive the ones that are not for you yet.
