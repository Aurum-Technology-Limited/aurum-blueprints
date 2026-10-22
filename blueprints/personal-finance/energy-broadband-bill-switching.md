---
id: personal-finance.energy-broadband-bill-switching
name: Energy & Broadband Bill Switching
description: "Every contract and end date on one page, your real usage in kWh and Mbps, routine tariff checks, switching playbooks for energy, broadband, mobile and TV, and help for renters, prepayment homes and older relatives."
category: personal
version: 1.0.0
tags: [personal-finance, energy-broadband-bill-switching, everyone, energy-tariffs, broadband, mobile-airtime, loyalty-penalty, switching]
author: Aurum Technology
starter_structure:
  templates:
    - metrics-log
    - purchase-decision
    - operational-checklist
  pillars:
    - name: Personal Finance
      emoji: "💷"
      description: "The day-to-day money system: income, budget, bills, debt, savings buffers, insurance, tax and big purchases, run so that nothing surprises you and every pound has a job."
      pillarFrontmatter:
        review_cadence: monthly
      areas:
        - name: Energy & Broadband Bill Switching
          description: "Comparing and switching energy, broadband, mobile and TV deals at the end of each contract to stop loyalty penalties."
          projects:
            - name: Every energy, broadband, mobile and TV contract on one page
              description: |-
                ## Purpose
                Most households pay four to eight separate providers for energy, broadband, landline, mobile lines and TV, each with its own end date and price. A single list showing provider, monthly cost, tariff name, contract end date and exit fee is the starting point for every switch, and it usually reveals at least one contract that ended months ago and quietly went up.

                ## Milestones
                1. A list of every energy, broadband, landline, mobile and pay-TV contract in the household.
                2. Monthly cost, tariff or package name, end date and exit fee recorded for each.
                3. Contracts already past their end date highlighted.
                4. A yearly total for all of them written at the top of the list.

                ## Notes
                Use the price on the latest bill, not the price you signed up at. Mid-contract rises often mean the two differ.
              priority: high
              deadlineOffsetDays: 14
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A dated list of every household energy, broadband, mobile and TV contract, each with monthly cost, end date and exit fee, plus a yearly total."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Search your bank statements for every energy, broadband, phone and TV payment"
                - "Log in to each provider account and note the tariff name and end date"
                - "Record the exit fee for leaving each contract today"
                - "Add up the yearly cost of all the contracts"
            - name: Twelve months of household energy use in kWh
              description: |-
                ## Purpose
                Comparison results are only as good as the usage you enter, and the default estimate a comparison site offers can be wrong by a third for a small flat or a large family home. Finding your actual annual electricity and gas use in kilowatt hours, from your annual statement or smart meter app, means every quote you see afterwards is priced on your home, not an average one.

                ## Milestones
                1. Annual electricity use in kWh found on a statement or app.
                2. Annual gas use in kWh found, or a note that the home has no gas.
                3. Any day and night split recorded if you have a two-rate meter.
                4. The figures written on the contract list beside the energy supplier.

                ## Notes
                If you moved in recently, ask the supplier for the meter's estimated annual consumption, then replace it with twelve months of your own readings once you have them.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "Your annual electricity and gas use in kWh, with any day and night split, is recorded from real bills or meter data rather than an estimate."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Download the latest annual statement from your energy account"
                - "Find the annual electricity consumption figure in kWh"
                - "Find the annual gas consumption figure in kWh"
                - "Note whether your meter records separate day and night rates"
            - name: Account and meter details pack for switching
              description: |-
                ## Purpose
                Switches stall when you cannot find the meter serial number, the supply point reference or the account number the old provider wants. Gathering them once, with photos of each meter and a note of how to log in to every account, turns a future switch into a ten-minute form rather than an evening of hunting.

                ## Milestones
                1. Photos of every gas and electricity meter showing serial number and current reading.
                2. Supply point reference numbers recorded for each meter.
                3. Account numbers for every broadband, mobile and TV provider listed.
                4. Working log-ins confirmed for every provider account.
                5. The pack stored where a partner or household member can find it.

                ## Notes
                Supply point numbers have local names, for example MPAN for electricity and MPRN for gas in Great Britain, and are usually printed on the bill. Keep passwords in a password manager, not in the pack.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A single folder holds meter photos, supply point numbers and account numbers for every utility, with log-ins tested for each provider."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Photograph each meter so the serial number and reading are both visible"
                - "Copy the supply point numbers from your latest energy bill"
                - "List the account number for every broadband, mobile and TV provider"
                - "Reset any provider log-in that no longer works"
            - name: Real broadband speed and household usage baseline
              description: |-
                ## Purpose
                Many households pay for 500 Mbps or more while using a fraction of it, and others pay for a fast package whose real evening speed is half the advertised figure. A week of speed tests at different times, plus a count of who streams, games, uploads or works from home, tells you the speed you actually need before you shop for the next deal.

                ## Milestones
                1. Wired speed tests recorded at morning, evening and weekend times over one week.
                2. Average download and upload speeds written beside the package's advertised and minimum guaranteed speeds.
                3. A list of the household's heaviest uses, such as video calls, 4K streaming or large uploads.
                4. A target download and upload speed for the next contract agreed.

                ## Notes
                Test over a cable plugged into the router where you can. A Wi-Fi test measures the Wi-Fi as much as the line.
              priority: medium
              deadlineOffsetDays: 21
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A week of dated speed tests with averages, compared with the advertised and guaranteed speeds, and a written target speed for the next contract."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Find the minimum guaranteed speed in your broadband contract summary"
                - "Run a wired speed test morning, evening and at the weekend for a week"
                - "List what each person in the house uses the connection for"
                - "Write down the download and upload speed you actually need"
            - name: Mobile data and minutes use per household line
              description: |-
                ## Purpose
                Families often pay for unlimited data on every line when one teenager uses most of it and a grandparent uses under 2 GB a month. Six months of usage per line, from each account or the phone's own settings, shows which allowance each person really needs and which lines are paying for headroom they never touch.

                ## Milestones
                1. Monthly data, minutes and roaming use recorded for every line over six months.
                2. The highest month for each line identified.
                3. A suitable allowance for each line written down with some headroom.
                4. Lines paying for far more than they use highlighted.
              priority: medium
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "Each household mobile line has six months of recorded usage and a written target allowance for its next airtime deal."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Open each line's account and find six months of data and minutes use"
                - "Check the phone's usage screen for any line without an online account"
                - "Note any roaming use and the countries it was in"
                - "Write a target data allowance for each line"
            - name: Loyalty penalty check on rolled-over contracts
              description: |-
                ## Purpose
                When a fixed deal ends, energy usually moves to a standard variable rate and broadband or TV moves to an out-of-contract price that can add a fifth or more to the bill. Checking each contract's current price against what a new customer pays for the same thing puts a figure on what staying put is costing you right now.

                ## Milestones
                1. Every contract marked as in contract, in its notice window or out of contract.
                2. The current price of each out-of-contract service set beside the new-customer price for the same package.
                3. A yearly loyalty penalty figure worked out for each service.
                4. The two most expensive penalties chosen as the first switches to make.

                ## Notes
                Many regulators require providers to tell you when a contract is ending and to show the best deal they offer you. Look for that message in your account or inbox first.
              priority: high
              deadlineOffsetDays: 14
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "Each household contract is labelled in or out of contract, with a yearly loyalty penalty figure and the first two switches chosen."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Mark each contract on your list as in contract or out of contract"
                - "Look up what a new customer pays for each out-of-contract package"
                - "Work out the yearly difference for each service"
                - "Pick the two biggest penalties to tackle first"
            - name: Contract end date calendar with notice alerts
              description: |-
                ## Purpose
                The best moment to switch or haggle is usually the four to eight weeks before a contract ends, when exit fees fall away and retention teams have room to move. Putting every end date in your calendar with an alert eight weeks ahead means the decision arrives while you still have choices, not after the price has already gone up.

                ## Milestones
                1. Every contract end date entered in your calendar.
                2. An alert set eight weeks before each end date.
                3. A second alert set two weeks before each end date.
                4. The end date of any new contract added on the day it is signed.
              priority: high
              deadlineOffsetDays: 14
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Every household contract end date sits in the calendar with alerts at eight weeks and two weeks before it."
                cadence: one-shot
                effort_hours_estimate: "1"
              tasks:
                - "Enter each contract end date from your list into your calendar"
                - "Set an alert eight weeks before each end date"
                - "Set a second alert two weeks before each end date"
                - "Add a note to each alert saying where the contract details are kept"
            - name: Smart meter working order check
              description: |-
                ## Purpose
                Smart meters that have stopped communicating after a supplier change still need manual readings and cannot support time-of-use or smart tariffs. Checking whether yours sends readings automatically, and whether the in-home display still connects, tells you which tariffs are open to you and whether to ask the supplier for a fix before you compare.

                ## Milestones
                1. Meter type confirmed as traditional, smart and communicating, or smart but not communicating.
                2. The supplier's record of automatic readings checked for the last three months.
                3. A fault reported if readings are not arriving automatically.
                4. A note on the contract list saying whether smart tariffs are open to you.

                ## Notes
                Whether you accept a smart meter is your choice. The point here is knowing what your current meter can do.
              priority: medium
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "The meter's status is recorded as traditional, working smart or faulty smart, with any fault reported to the supplier."
                cadence: one-shot
                effort_hours_estimate: "1"
              tasks:
                - "Check your energy app for automatic readings in the last three months"
                - "Look at the in-home display to see whether it shows live use"
                - "Report a non-communicating smart meter to your supplier"
                - "Record the meter's status on your contract list"
            - name: Account holder and authorised person on each bill
              description: |-
                ## Purpose
                Only the named account holder can usually switch, haggle or cancel, which becomes a problem when that person is ill, away, separated or has died. Recording who holds each account, and adding a second authorised person where the provider allows, keeps the household able to act on any bill.

                ## Milestones
                1. The named account holder recorded for every utility and telecoms contract.
                2. A second authorised person added to each account that allows it.
                3. Accounts in the name of someone who has moved out or died listed for transfer.
                4. Everyone in the household aware of who can speak to which provider.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Every utility and telecoms account has a recorded holder and, where allowed, a named second authorised person."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Note the named account holder on each contract"
                - "Ask each provider how to add a second authorised person"
                - "List any account still in the name of someone who no longer lives here"
                - "Tell the household who is named on each account"
            - name: Monthly meter reading and bill accuracy check
              description: |-
                ## Purpose
                Estimated bills drift, and an estimate that runs low for a year ends in a large catch-up bill while one that runs high locks your money up as credit. Submitting a reading each month, or confirming the smart meter has sent one, and checking that the bill uses it at the agreed unit rate and standing charge keeps the account honest.

                ## Milestones
                1. A reading log with date, meter, reading and photo for each month.
                2. Each bill checked for actual rather than estimated readings.
                3. Unit rates and standing charges on each bill matched to the tariff you agreed.
                4. Any mismatch reported to the supplier within a week of spotting it.

                ## Notes
                Start from the **Metrics log** template. A dated photo of the meter is the strongest evidence if a reading is ever disputed.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Twelve consecutive monthly readings are logged with photos, and each bill has been checked against the agreed rates."
                cadence: rolling
              tasks:
                - "Create a meter reading log from the metrics log template"
                - "Photograph and submit your meter readings @recurring(monthly:28)"
                - "Check the latest energy bill uses actual readings and your agreed rates @recurring(monthly:6)"
                - "Report any wrong rate or estimated reading to the supplier"
            - name: Quarterly energy tariff comparison with your own usage
              description: |-
                ## Purpose
                Energy prices move with wholesale markets and regulated caps, so the deal that was best when you fixed may be beaten within months, and a cheap fix may appear just as your variable rate rises. Running one comparison a quarter with your real kWh figures takes twenty minutes and tells you whether a switch, even after an exit fee, would pay.

                ## Milestones
                1. A comparison run each quarter using your actual annual kWh.
                2. The cheapest three tariffs recorded with unit rate, standing charge and exit fee.
                3. The saving after any exit fee worked out against your current tariff.
                4. A switch started whenever the saving passes the threshold you set.

                ## Notes
                Set a threshold, such as a saving of at least 5 percent of the yearly bill after exit fees, so you are not switching for small change.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Four quarterly comparisons a year are recorded, each with the top three tariffs and the net saving against your current one."
                cadence: rolling
              tasks:
                - "Set the minimum yearly saving that would make a switch worth it"
                - "Run an energy comparison with your actual kWh figures @recurring(quarterly)"
                - "Record the top three tariffs with standing charges and exit fees"
                - "Work out the net saving after any exit fee on your current deal"
            - name: Contracts ending soon monthly watch
              description: |-
                ## Purpose
                Calendar alerts get dismissed, and new contracts get signed without anyone adding the end date. A short monthly look down the contract list for anything ending in the next 60 days, and anything that has already slipped out of contract, catches the ones the alerts missed.

                ## Milestones
                1. The contract list checked once a month.
                2. Every contract within 60 days of its end date flagged for action.
                3. Any contract found out of contract moved to the top of the list.
                4. End dates of newly signed contracts added the same month.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "The contract list shows a monthly check date for twelve months running, with no contract out of contract for more than a month unnoticed."
                cadence: rolling
              tasks:
                - "Add a last checked date column to your contract list"
                - "Look down the contract list for anything ending within 60 days @recurring(monthly:9)"
                - "Flag any contract that has already rolled onto an out-of-contract price"
                - "Add the end date of any contract signed this month"
            - name: Energy direct debit and credit balance review
              description: |-
                ## Purpose
                Suppliers set monthly direct debits from their own forecast, which can leave you well in credit after summer or in debt after a cold winter. Reviewing the balance and projected annual cost each quarter, and asking for the payment to be adjusted or surplus credit refunded, keeps the money in your account instead of theirs.

                ## Milestones
                1. The balance with the supplier recorded each quarter.
                2. Projected annual cost compared with twelve times the monthly direct debit.
                3. A change requested when the two differ by more than a month's payment.
                4. Surplus credit refunded once the winter months have passed.

                ## Notes
                Some credit built up over summer is normal because winter bills are higher. Ask for the excess back, not the whole balance, ahead of winter.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "The energy account balance and direct debit are reviewed four times a year, with any change or refund request recorded."
                cadence: rolling
              tasks:
                - "Find the current credit or debit balance on your energy account"
                - "Compare the projected annual cost with twelve monthly payments @recurring(quarterly)"
                - "Ask the supplier to change the direct debit if the two differ by a month or more"
                - "Request a refund of excess credit each spring @recurring(yearly)"
            - name: Price change notices folder routine
              description: |-
                ## Purpose
                Providers must usually warn you before raising prices, and a price change notice often opens a short window to leave without an exit fee. Sending every provider email to one folder and checking it monthly means those windows are seen while they are open, not discovered on the next bill.

                ## Milestones
                1. A mail folder collecting email from every utility and telecoms provider.
                2. The folder checked once a month.
                3. Every price change notice logged with the new price and any exit window.
                4. A decision recorded on each notice before its window closes.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every price change notice received in a year is logged with the new price, its exit window and the decision taken."
                cadence: rolling
              tasks:
                - "Set up a mail folder for every utility and telecoms provider"
                - "Read the provider folder for price change notices @recurring(monthly:16)"
                - "Log each notice with the new price and the date the exit window closes"
                - "Decide to stay, haggle or leave before each window closes"
            - name: Annual telecoms price rise response
              description: |-
                ## Purpose
                Many broadband and mobile contracts include a yearly rise, set as a fixed amount or linked to inflation, that lands in the same month each year. Knowing the date and the new price in advance lets you decide whether the rise pushes the deal above the market and whether a retention call or switch is worth making that month.

                ## Milestones
                1. The yearly rise date and formula recorded for each broadband, mobile and TV contract.
                2. The new monthly price worked out before it takes effect.
                3. Each new price compared with the current offers for new customers.
                4. A retention call or switch made wherever the rise leaves you paying above market.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Each telecoms contract's yearly rise is recorded in advance, compared with the market and acted on wherever it leaves you above market."
                cadence: cyclic
              tasks:
                - "Find the annual price rise clause in each broadband, mobile and TV contract"
                - "Work out each contract's new monthly price after the rise"
                - "Compare each new price with offers for new customers @recurring(yearly)"
                - "Call the provider to challenge any rise that leaves you above market"
            - name: Broadband speed and outage log
              description: |-
                ## Purpose
                Without dated evidence, providers will rarely discount your bill or release you from a contract for poor speed or repeated drop-outs. A monthly wired speed test and a running log of outages builds the record you need to claim compensation, insist on an engineer, or leave under a minimum speed guarantee.

                ## Milestones
                1. A log with date, time and wired download and upload speed for each monthly test.
                2. Every outage recorded with start time, end time and fault reference.
                3. The minimum guaranteed speed written at the top of the log.
                4. A claim raised whenever speeds stay below the guarantee for the period the contract sets.

                ## Notes
                Check whether your provider pays automatic compensation for long outages or missed engineer appointments. Many do in some countries, but only once the fault is reported.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Twelve months of monthly speed tests and every outage are logged, with any shortfall below the guaranteed speed raised with the provider."
                cadence: rolling
              tasks:
                - "Write the minimum guaranteed speed at the top of a speed log"
                - "Run a wired speed test and record the result @recurring(monthly:21)"
                - "Record each outage with times and the fault reference number"
                - "Raise a claim when speeds stay below the guaranteed minimum"
            - name: Annual utilities switching review and savings record
              description: |-
                ## Purpose
                Once a year it is worth seeing the whole picture: what energy, broadband, mobile and TV cost across twelve months, which switches and retention calls paid off, and which contracts are due next. The review keeps the habit going by showing the money saved, and sets the order of next year's switches.

                ## Milestones
                1. Twelve months of spending on each service totalled.
                2. Every switch and retention deal from the year listed with its yearly saving.
                3. A total saving for the year written at the top.
                4. Next year's end dates listed in the order they fall.

                ## Notes
                Count only the saving against what you would otherwise have paid, not against the most expensive deal on the market.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A yearly review records total utility and telecoms spend, every saving achieved and next year's switching order."
                cadence: cyclic
              tasks:
                - "Total the year's spending on energy, broadband, mobile and TV @recurring(yearly)"
                - "List each switch or retention deal with its yearly saving"
                - "Ask the agent to summarise the year's switches and next year's end dates"
                - "Put next year's contract end dates in date order"
            - name: Reading an energy bill line by line
              description: |-
                ## Purpose
                An energy bill mixes unit rates, standing charges, estimated and actual readings, tax, discounts and the account balance, and most people only read the total. Working through one real bill line by line teaches you what each figure means, where errors hide and which two numbers you need for any comparison.

                ## Milestones
                1. Unit rate and standing charge identified for each fuel.
                2. Actual and estimated readings told apart on the bill.
                3. Tax, discounts and any government support located.
                4. Your own bill annotated with what each line means.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "One of your own energy bills is annotated line by line, with unit rates, standing charges and reading types marked."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Save your latest energy bill as a file you can mark up"
                - "Mark the unit rate and standing charge for each fuel"
                - "Circle each reading and note whether it is actual or estimated"
                - "Write a one-line explanation beside every other charge"
            - name: Fixed and variable energy tariffs compared
              description: |-
                ## Purpose
                A fixed tariff trades the chance of falling prices for certainty, and the right choice depends on how well your budget absorbs a surprise, the exit fee, and where prices go next, which nobody can know. Learning how each type behaves, and how a regulated cap or default tariff works where you live, lets you choose with open eyes rather than chase last month's headline.

                ## Milestones
                1. The difference between fixed, variable, tracker and capped tariffs written in your own words.
                2. How your country's price cap or default tariff works, if it has one, summarised.
                3. A note on what exit fees on fixed deals typically cost.
                4. Your personal rule for when a fix is worth taking recorded.

                ## Notes
                This is about understanding the trade-off, not predicting prices. Treat any forecast you read as one opinion.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A one-page note explains fixed, variable and tracker tariffs, your country's cap rules and your own rule for choosing a fix."
                cadence: phased
                effort_hours_estimate: "3"
              tasks:
                - "Read your energy regulator's guide to tariff types"
                - "Write how fixed, variable and tracker tariffs each respond to price changes"
                - "Summarise how any price cap or default tariff works where you live"
                - "Write your own rule for when a fixed tariff is worth it"
            - name: How an energy switch works, step by step
              description: |-
                ## Purpose
                People put off switching because they fear the supply being cut off, engineers visiting or being billed twice, and none of that normally happens. Understanding who does what, how long it takes, how the cooling-off period works and how the final bill and credit refund are handled removes most of the friction before you start.

                ## Milestones
                1. The steps from application to first bill with the new supplier listed in order.
                2. The cooling-off period and how to cancel within it noted.
                3. What happens to credit or debt on the old account written down.
                4. The typical switch time in your country recorded.

                ## Notes
                In most markets the supply itself does not change: the same wires, pipes and meter, with a different company billing you.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A written step list of an energy switch, covering cooling-off, final bill and credit refund, is saved with your contract list."
                cadence: one-shot
                effort_hours_estimate: "1"
              tasks:
                - "Read your energy regulator's page on switching supplier"
                - "List the steps from application to final bill in order"
                - "Note how long the cooling-off period lasts and how to use it"
                - "Write what happens to any credit or debt on the old account"
            - name: Broadband connection types and what reaches your street
              description: |-
                ## Purpose
                Full fibre, part fibre over copper, cable, fixed wireless, 5G home broadband and satellite differ in speed, reliability and price, and which ones you can actually get depends on your address, not the advert. Checking which networks serve your home and how each technology behaves widens the choice beyond the provider you already have.

                ## Milestones
                1. Every network available at your address listed from an address checker.
                2. The technology behind each network noted.
                3. Typical upload speeds for each technology recorded, not just download.
                4. Any planned full fibre build in your area noted with its expected date.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A list of every broadband network and technology available at your address, with typical speeds and any planned upgrade."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Run your address through an independent broadband availability checker"
                - "List each network and the technology it uses"
                - "Note typical download and upload speeds for each"
                - "Check whether full fibre is planned for your street"
            - name: Mid-contract price rise clauses and exit rights
              description: |-
                ## Purpose
                Some contracts allow rises that were set out at sign-up, while others only allow rises that give you the right to leave free of charge. Knowing which kind you hold, and what your regulator says about unexpected rises, tells you whether a price change notice is a cost to accept or a way out.

                ## Milestones
                1. The price rise clause found in each broadband, mobile and TV contract.
                2. Each clause labelled as a fixed rise, an inflation-linked rise or a discretionary rise.
                3. Your regulator's rules on leaving after an unexpected rise summarised.
                4. Contracts that allow penalty-free exit after a rise marked on your list.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Every telecoms contract is labelled by price rise type, with a note on whether a rise gives you a free exit."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Download the contract summary for each broadband, mobile and TV deal"
                - "Find and copy the price rise clause from each"
                - "Read your regulator's guidance on leaving after a price rise"
                - "Mark each contract with whether a rise lets you leave free"
            - name: Mobile number porting and switching codes
              description: |-
                ## Purpose
                Keeping your number when you change network is normally free and quick, but the steps differ by country, and cancelling a contract before the port completes can lose the number for good. Learning how to request a porting or leaving code, how long it lasts and when the old contract ends means no line is left without service or billed twice.

                ## Milestones
                1. The way to request a porting code on each household network written down.
                2. How long the code stays valid noted.
                3. Whether the old contract ends automatically on porting confirmed.
                4. Any final bill or notice period charge rules recorded.

                ## Notes
                In the UK, for example, a free text to a short code returns a code to move your number or a code to leave without it. Never cancel the old contract yourself before the port completes.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A note for each household network explains how to get a porting code, how long it lasts and how the old contract ends."
                cadence: one-shot
                effort_hours_estimate: "1"
              tasks:
                - "Look up how your network issues a porting code"
                - "Note how many days the code stays valid"
                - "Check whether porting ends the old contract and its notice period"
                - "Save the steps beside each line on your contract list"
            - name: How comparison sites rank deals and what they leave out
              description: |-
                ## Purpose
                Comparison sites earn commission, often show only deals they can sell by default, and may rank by first-year price while hiding the price after a discount ends. Learning to switch on the whole-of-market view, sort by total contract cost and check some providers directly stops a site's ordering from making the choice for you.

                ## Milestones
                1. Two or more comparison sites identified that are accredited or audited, where your regulator runs such a scheme.
                2. The whole-of-market setting found on each.
                3. One search sorted by total cost over the contract length.
                4. Providers that do not appear on comparison sites listed for direct checks.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Two comparison sites are chosen, each searched in whole-of-market mode and sorted by total contract cost."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Find which comparison sites your regulator accredits, if it runs a scheme"
                - "Turn on the setting that shows deals you cannot switch to through the site"
                - "Sort one search by total cost across the full contract"
                - "List the providers you will check directly as well"
            - name: Time-of-use and smart tariffs explained
              description: |-
                ## Purpose
                Tariffs with cheaper overnight rates, half-hourly prices or payments for cutting peak use can lower a bill sharply for a household that shifts washing, dishwashing or car charging, and raise it for one that cannot. Understanding how each type prices your use, and how much of your use could move, shows whether these tariffs are worth comparing at all.

                ## Milestones
                1. Two-rate, time-of-use, half-hourly and demand-response tariffs each described in a sentence.
                2. The share of your electricity use that could move to cheaper hours estimated.
                3. The peak and off-peak hours of two current tariffs noted.
                4. A decision recorded on whether to include these tariffs in your next comparison.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A note describes each smart tariff type and estimates what share of your use could shift, ending in a yes or no on comparing them."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Read one plain-language guide to time-of-use tariffs"
                - "List the appliances you could run overnight or off-peak"
                - "Estimate the share of your electricity those appliances use"
                - "Decide whether to include smart tariffs in your next comparison"
            - name: Choosing an energy tariff from a like-for-like comparison
              description: |-
                ## Purpose
                Once your usage and meter type are known, picking the next tariff is a straight comparison of standing charges, unit rates, contract length, exit fees and the supplier's service record. Doing it against the same yearly kWh for every option, and including your current supplier's own renewal offer, produces a choice you can defend rather than the first result on a list.

                ## Milestones
                1. A shortlist of three to five tariffs priced on your real annual kWh.
                2. Standing charge, unit rate, length and exit fee recorded for each.
                3. Your current supplier's renewal offer included in the comparison.
                4. Each supplier's complaint and service ratings checked.
                5. One tariff chosen with the reasons written down.

                ## Notes
                Start from the **Purchase decision** template. A low unit rate with a high standing charge can cost more in a small home, so compare yearly totals, not headline rates.
              priority: high
              deadlineOffsetDays: 45
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "One energy tariff chosen from a recorded shortlist of at least three, all priced on your real annual kWh, with the reasons noted."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Ask your current supplier for its best renewal offer"
                - "Run a whole-of-market comparison using your annual kWh"
                - "Record the yearly cost and exit fee of the top five tariffs"
                - "Check customer service ratings for each shortlisted supplier"
                - "Choose one tariff and note why it won"
            - name: Switching energy supplier from application to final bill
              description: |-
                ## Purpose
                A switch is only finished when the old supplier's final bill is correct and any credit is back in your bank account, which can take two months after the new supply starts. Treating the switch as a short project, with readings on switch day and checks at each stage, catches the common slips: wrong opening readings, double direct debits and credit that is never refunded.

                ## Milestones
                1. Application made and the cooling-off end date noted.
                2. Dated meter photos taken on the switch date and sent to both suppliers.
                3. Old direct debit left in place until the final bill arrives, then cancelled.
                4. Final bill checked against your switch-day readings.
                5. Any credit from the old supplier refunded to your bank account.

                ## Notes
                Start from the **Operational checklist** template. Cancelling the old direct debit too early can turn a final bill into a missed payment.
              priority: high
              deadlineOffsetDays: 60
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "The switch is complete with a final bill matching switch-day readings, the old direct debit cancelled and any credit refunded."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Apply for the chosen tariff and note the cooling-off end date"
                - "Photograph the meters on switch day and send readings to both suppliers"
                - "Check the old supplier's final bill against your switch-day photos"
                - "Cancel the old direct debit once the final bill is settled"
                - "Chase any credit refund still unpaid a month after the final bill"
            - name: Choosing a broadband deal at the speed you need
              description: |-
                ## Purpose
                With a target speed and a list of networks at your address, the choice becomes a comparison of total cost over the full contract, set-up fees, router quality, upload speed and the price after the first year. Comparing on total contract cost rather than the monthly headline avoids deals that look cheap because of a short discount or a large upfront charge.

                ## Milestones
                1. Three to five deals at or above your target speed shortlisted.
                2. Total cost over the contract worked out for each, including set-up and router fees.
                3. The price after any introductory period noted.
                4. Minimum guaranteed speed and contract length compared.
                5. One deal chosen, or kept as a quote to put to your current provider.

                ## Notes
                Start from the **Purchase decision** template. A 24-month deal at a low starting price can cost more than an 18-month one if the second year rises.
              priority: medium
              deadlineOffsetDays: 45
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "One broadband deal chosen from a shortlist of at least three, compared on total contract cost and guaranteed speed."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Search for deals at or above your target speed at your address"
                - "Work out the total contract cost of each shortlisted deal"
                - "Note the price each deal moves to after any introductory period"
                - "Choose one deal or keep it as a quote for your current provider"
            - name: Retention call to your broadband provider with a rival quote
              description: |-
                ## Purpose
                Retention teams can usually match or beat the price a new customer would pay, but mainly for people who call with a specific rival offer and a clear willingness to leave. A short script, a written competing quote and a walk-away price turn a dreaded phone call into a twenty-minute negotiation that often saves as much as switching.

                ## Milestones
                1. A written rival quote with speed, monthly price and total contract cost.
                2. Your walk-away price set before the call.
                3. The call made to the cancellations or retention team.
                4. Any new offer confirmed in writing before you agree.
                5. A decision recorded: accept the offer or switch to the rival deal.

                ## Notes
                Ask for the team that handles leaving, not general sales. If the offer falls short, say thank you and follow through on the switch.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A retention call made with a written rival quote, ending in either a written new offer or a switch started within a week."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Save a rival quote with speed, monthly price and contract length"
                - "Ask the agent to draft a short retention call script from your quote"
                - "Decide the price at which you will stay"
                - "Call the retention team and ask for written confirmation of any offer"
            - name: Cheaper airtime for each mobile line at contract end
              description: |-
                ## Purpose
                Mobile airtime prices have fallen steadily, so a line that has rolled past its minimum term is often paying well above what the same network charges new customers. Comparing airtime deals for each line on its real usage, including smaller networks that run on the big ones, and porting the number across usually cuts the bill without changing the phone in anyone's pocket.

                ## Milestones
                1. Every line past its minimum term identified.
                2. Two or three airtime deals per line priced on that line's real usage.
                3. The current network asked to match the best offer.
                4. Each line either repriced or ported to a new network with its number kept.

                ## Notes
                Whether to buy, finance or keep a handset belongs with phone and device financing. This project is only about the monthly airtime price.
              priority: medium
              deadlineOffsetDays: 60
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "Every out-of-term mobile line is either repriced by its network or ported to a cheaper airtime deal, with the yearly saving recorded."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "List each mobile line that is past its minimum term"
                - "Price two or three airtime deals for each line on its real usage"
                - "Ask your current network to match the cheapest offer"
                - "Request a porting code for any line that is moving"
            - name: Pay-TV package cut, renegotiate or cancel
              description: |-
                ## Purpose
                Pay-TV packages grow by add-on: a sports pack for one season, a film bundle, a multiroom box nobody uses, a fee for picture quality. Listing what the household actually watches, pricing the same viewing through cheaper packages or standalone services, and calling the provider with that list usually produces a cut, a discount or a clean exit.

                ## Milestones
                1. Every element of the TV package listed with its monthly price.
                2. What each household member watched in the last three months noted.
                3. The same viewing priced through a slimmer package or standalone services.
                4. A call made to the provider to drop unused elements or reprice.
                5. The decision to keep, cut or cancel recorded with the new monthly cost.

                ## Notes
                Standalone streaming services you already pay for belong with your subscription clean-up. Count them here only when comparing like for like.
              priority: medium
              deadlineOffsetDays: 60
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "The TV package is cut, repriced or cancelled, with the new monthly cost and the elements removed recorded."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "List each part of your TV package with its monthly price"
                - "Ask everyone what they actually watched in the last three months"
                - "Price the same viewing through a slimmer package or standalone services"
                - "Call the provider to drop unused add-ons or ask for a better price"
            - name: Bundle or separate contracts decision
              description: |-
                ## Purpose
                Broadband, landline, TV and mobile bundles promise a discount, but they also tie end dates together, turn one switch into four, and sometimes include services you would not buy alone. Pricing your bundle against the same services bought separately shows whether the discount is real and whether the lock-in is worth it.

                ## Milestones
                1. The bundle's monthly cost split into its parts as far as the provider shows.
                2. Each part priced separately on the open market.
                3. The difference over the contract length calculated.
                4. A decision recorded to keep the bundle or split it at the next end date.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A written comparison of your bundle against separate contracts over the contract length, with a keep or split decision."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Write down every service included in your bundle"
                - "Price each service separately on the open market"
                - "Compare the bundle with the separate total over the contract length"
                - "Decide whether to keep or split the bundle at the next end date"
            - name: Landline-free broadband and digital phone decision
              description: |-
                ## Purpose
                Many homes still pay line rental for a landline that only rings with sales calls, while phone networks in several countries are moving home phones onto digital services over broadband. Deciding whether you need a home phone at all, and if so whether a digital line or a mobile can replace it, can trim the bill and avoid surprises when the old network is switched off.

                ## Milestones
                1. Calls made and received on the landline in the last three months counted.
                2. Any device that relies on the landline, such as a care alarm or security system, identified.
                3. Prices for broadband without a phone line or with a digital phone compared.
                4. A decision recorded, with any dependent device moved before the change.

                ## Notes
                Check care alarms and security alarms with their provider before changing anything. Some need a new unit to work over a digital line.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A recorded decision to keep, digitise or drop the landline, with any alarm or care device confirmed working on the new set-up."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Check the last three months of landline calls on your bill"
                - "List any alarm, care pendant or device plugged into the phone line"
                - "Compare prices for broadband with and without a phone service"
                - "Ask the alarm provider what is needed before the landline changes"
            - name: Energy fix end date switch window
              description: |-
                ## Purpose
                The weeks before a fixed energy deal ends are the only time you can move without an exit fee and before the higher default rate begins. Treating the end date as a dated event, with a comparison six weeks out and a decision by three weeks out, stops a single winter quarter on the default rate from wiping out a year of savings.

                ## Milestones
                1. The exit-fee-free window for your fixed deal confirmed with the supplier.
                2. A comparison run about six weeks before the end date.
                3. The renewal offer from your current supplier compared with the market.
                4. A new tariff agreed at least three weeks before the end date.
                5. The first bill on the new tariff checked for the agreed rates.
              priority: high
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A new energy tariff agreed at least three weeks before the fix ended, with the first bill on it checked."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Confirm the date from which your fix can end without an exit fee"
                - "Run a comparison six weeks before the fix ends"
                - "Agree a new tariff three weeks before the end date"
                - "Check the first bill on the new tariff shows the agreed rates"
            - name: Moving home with energy and broadband sorted
              description: |-
                ## Purpose
                Broadband orders can take two to four weeks to go live at a new address, and moving in without readings leaves you arguing about the previous occupant's use. Planning the move as an event, with broadband ordered a month ahead, readings photographed at both homes on the day and the new home put on a chosen tariff within weeks, avoids a dead connection and the expensive default rate.

                ## Milestones
                1. Broadband at the new address ordered at least four weeks before moving.
                2. Broadband at the old address moved or ended with any notice period honoured.
                3. Dated meter photos taken at both properties on moving day.
                4. Both energy suppliers given closing and opening readings.
                5. The new home moved off the default tariff within six weeks.

                ## Notes
                Find out who supplies the new home before you move. You start on that supplier's default rate and can usually switch from day one.
              priority: high
              deadlineOffsetDays: 45
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "Broadband live within a week of moving, readings sent for both homes, and the new home on a chosen tariff within six weeks."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Check which broadband networks reach the new address"
                - "Order broadband for the new home four weeks before moving"
                - "Photograph every meter at both homes on moving day"
                - "Send closing and opening readings to both energy suppliers"
                - "Compare tariffs for the new home within two weeks of moving in"
            - name: Broadband switchover day and equipment return
              description: |-
                ## Purpose
                Switch day is when broadband changes fail in small ways: the new router arrives late, the old service stops early, the engineer slot is missed, or the old router is never returned and a charge follows. A checklist covering the week before, the day itself and the month after keeps you online and stops the old provider billing you for kit or overlap.

                ## Milestones
                1. Installation date and engineer slot confirmed in writing.
                2. The new router set up and tested on switch day.
                3. Smart devices, printers and doorbells reconnected to the new network.
                4. The old provider's equipment returned with proof of postage.
                5. The old provider's final bill checked for overlap and equipment charges.

                ## Notes
                Start from the **Operational checklist** template. Giving the new router the old Wi-Fi name and password lets most devices reconnect on their own.
              priority: medium
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "Broadband switched with no more than a day offline, old equipment returned with proof, and a final bill free of overlap charges."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Confirm the installation date and any engineer slot in writing"
                - "Set the new router's Wi-Fi name and password to match the old ones"
                - "Return the old provider's router and keep proof of postage"
                - "Check the old provider's final bill for overlap or equipment charges"
            - name: Switching rewards and promised credits claim
              description: |-
                ## Purpose
                Gift cards, bill credits, comparison site cashback and referral rewards often arrive months after a switch, and only if a claim form is completed inside a narrow window. Writing down every promised reward with its claim date and checking it arrived turns a vague promise into money you actually receive.

                ## Milestones
                1. Every promised reward recorded with amount, source and claim window.
                2. Screenshots kept of the offer terms at sign-up.
                3. Each claim submitted inside its window.
                4. Each reward confirmed as received or chased with the screenshot.
              priority: low
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "Every reward promised for a switch in the last year is recorded and either received or formally chased."
                cadence: one-shot
                effort_hours_estimate: "1"
              tasks:
                - "Screenshot the reward terms on the day you sign up"
                - "Record each promised reward with its claim window"
                - "Submit each claim form inside its window"
                - "Chase any reward not received by its stated date"
            - name: Pre-winter energy tariff and payment check
              description: |-
                ## Purpose
                Autumn is when energy use climbs and when a variable rate rise, a fix ending or a low direct debit hurts most. A yearly check in early autumn, covering tariff, payment level, meter readings and any support schemes you qualify for, means winter bills arrive as expected rather than as a shock in January.

                ## Milestones
                1. Your tariff and its end date confirmed before the heating season.
                2. The direct debit checked against projected winter use.
                3. Fresh meter readings submitted at the start of autumn.
                4. Eligibility for any winter energy support scheme checked.

                ## Notes
                In the southern hemisphere, run this ahead of your own winter months.
              priority: medium
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "Each autumn the tariff, direct debit, readings and support eligibility are checked and any change made before the first cold month."
                cadence: cyclic
              tasks:
                - "Check your tariff and its end date each autumn @recurring(yearly)"
                - "Ask the supplier whether the direct debit covers projected winter use"
                - "Submit fresh meter readings at the start of the heating season"
                - "Look up any winter energy support schemes you might qualify for"
            - name: Switching suppliers as a renter
              description: |-
                ## Purpose
                Tenants who pay the energy bill directly normally have the right to choose their supplier, even when a letting agent suggests otherwise, but broadband cabling and meter changes may need the landlord's permission. Checking the tenancy, asking the landlord in writing where needed and keeping readings from the start of the tenancy lets a renter switch freely without breaching the agreement.

                ## Milestones
                1. Tenancy agreement checked for any clause about suppliers or telecoms.
                2. Whether you or the landlord pays each bill confirmed.
                3. Landlord permission obtained in writing before any new cabling or meter work.
                4. Move-in readings photographed and kept with the inventory.
                5. A broadband contract length chosen that fits the tenancy term.

                ## Notes
                If the landlord pays the energy bill and recharges you, the right to switch usually sits with them. Ask for the tariff details instead.
              priority: medium
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "Tenancy terms, bill responsibility and landlord permissions are recorded, and any switch or installation is made within the tenancy rules."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Read your tenancy agreement for any clause on suppliers or broadband"
                - "Ask the landlord in writing before booking any new cabling or meter work"
                - "Match the broadband contract length to the remaining tenancy"
                - "Keep move-in meter photos with the tenancy inventory"
            - name: Student house broadband and energy for the academic year
              description: |-
                ## Purpose
                Shared student houses need broadband that lasts the tenancy, not a 24-month contract one person is left holding, and energy that someone is named on. Agreeing in the first week who holds which account, choosing short or tenancy-length contracts and taking readings on day one keeps a house of five from arguing in June.

                ## Milestones
                1. Whether bills are included in the rent confirmed with the landlord.
                2. One named account holder agreed for broadband and one for energy.
                3. A broadband contract that ends with the tenancy chosen.
                4. Opening meter readings photographed in the first week.
                5. Closing readings and broadband cancellation booked for the last week of the tenancy.

                ## Notes
                How the bills are split between housemates belongs with housemate expense splitting. Here the job is getting the contracts right.
              priority: medium
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "Broadband and energy contracts are set up with named holders and end dates that match the tenancy, with opening readings recorded."
                cadence: phased
                effort_hours_estimate: "3"
              tasks:
                - "Ask the landlord whether any bills are included in the rent"
                - "Agree as a house who will hold the broadband and energy accounts"
                - "Compare broadband deals with contracts of twelve months or less"
                - "Book the broadband cancellation for the last week of the tenancy"
            - name: Helping an older relative switch and get priority support
              description: |-
                ## Purpose
                Older people are among the most likely to be on long out-of-contract deals, often paying for broadband or TV packages set up a decade ago, and among the least likely to switch online. Sitting down with a relative, with their permission, to list their contracts, register them for any priority services scheme and move the worst deals saves real money while the accounts stay in their hands.

                ## Milestones
                1. Your relative's agreement recorded, along with which accounts they want reviewed.
                2. Their energy, broadband, phone and TV contracts listed with prices and end dates.
                3. Registration on the priority services or vulnerable customer register completed where eligible.
                4. The two most expensive out-of-contract deals renegotiated or switched.
                5. A way agreed for them to ask for help with future notices.

                ## Notes
                Use the providers' own authorised person or third-party schemes rather than logging in with your relative's password. Priority registers can offer advance warning of supply cuts, accessible bills and a password scheme for callers.
              priority: medium
              frontmatter:
                mode: service
                output_kind: deliverable
                success_criteria: "Your relative's contracts are listed, they are on any priority register they qualify for, and at least two out-of-contract deals are repriced or switched."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Ask your relative which bills they would like help with"
                - "List their contracts together with prices and end dates"
                - "Register them on their energy supplier's priority services list"
                - "Call your relative to ask about any new price letters @recurring(monthly:12)"
            - name: Prepayment meter tariffs and switching with a debt
              description: |-
                ## Purpose
                Prepayment customers often pay more per unit than direct debit customers, and many believe they cannot switch at all, especially with a debt on the meter. In several countries you can switch with a debt below a set limit, ask for the meter to be changed to credit mode, or move to a cheaper prepayment tariff, so checking your options can lower the price of every top-up.

                ## Milestones
                1. Your current prepayment unit rate and standing charge recorded.
                2. Any debt on the meter and its weekly recovery rate written down.
                3. The rules on switching with a prepayment debt checked for your country.
                4. Cheaper prepayment tariffs, or a move to credit mode, compared.
                5. A request made to switch, move to credit mode or lower the debt recovery rate.

                ## Notes
                If you are struggling to top up, tell the supplier: many must offer emergency credit and an affordable repayment plan. Free debt advice services can also help with energy arrears.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "Prepayment rates and any debt are recorded, switching rules checked, and a switch, credit mode or lower repayment request made."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Write down your unit rate, standing charge and any debt on the meter"
                - "Check your regulator's rules on switching with a prepayment debt"
                - "Compare prepayment tariffs with what a credit meter would cost"
                - "Ask your supplier about credit mode or a lower repayment rate"
                - "Recheck your prepayment rate against other tariffs @recurring(quarterly)"
            - name: Social tariffs for broadband and mobile on a low income
              description: |-
                ## Purpose
                Households receiving certain benefits can often get broadband or mobile social tariffs at a fraction of standard prices, usually with no exit fee to move onto them, yet few eligible people know they exist. Checking eligibility and comparing the social tariffs offered at your address can cut a telecoms bill by half or more.

                ## Milestones
                1. The benefits or circumstances that qualify for social tariffs in your country listed.
                2. Your eligibility confirmed against that list.
                3. Social tariffs available at your address compared on speed and price.
                4. An application made, or the reason you do not qualify noted.

                ## Notes
                Your current provider may offer a social tariff and let you move to it mid-contract without a fee. Ask them first.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "Eligibility for social tariffs is checked and either an application made or the reason for not qualifying recorded."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Find the official list of broadband and mobile social tariffs where you live"
                - "Check which qualifying benefits or circumstances apply to you"
                - "Compare the social tariffs available at your address"
                - "Recheck social tariff eligibility and prices @recurring(yearly)"
            - name: Home working broadband with a mobile backup
              description: |-
                ## Purpose
                For someone who works from home, a day without broadband can cost more than a year of the cheapest deal saves, so price is not the only test. Weighing a provider's fault repair times, the upload speed your video calls need and a low-cost mobile data backup gives a set-up that keeps you working when the line drops.

                ## Milestones
                1. Upload speed needed for your video calls and file transfers written down.
                2. Fault repair commitments of shortlisted providers compared.
                3. A mobile hotspot or 4G or 5G router backup priced.
                4. The backup tested by working on it for an hour.
                5. Any employer contribution to home broadband claimed where offered.
              priority: low
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A broadband deal chosen on upload speed and repair commitments, with a mobile backup tested and ready."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Measure the upload speed your video calls and file uploads need"
                - "Compare fault repair times in each provider's service terms"
                - "Price a mobile data plan or router to use as a backup"
                - "Test the backup connection on a working day @recurring(quarterly)"
            - name: When your energy supplier goes out of business
              description: |-
                ## Purpose
                Energy suppliers do fail, sometimes several in one winter, and their customers are moved to a replacement supplier chosen by the regulator. Knowing in advance that your supply continues, that credit is normally protected, and that the readings on the failure date are what matter turns a worrying email into a short list of actions.

                ## Milestones
                1. The regulator's process for supplier failure summarised.
                2. Dated meter photos taken within a day of a failure announcement.
                3. Your credit balance on the failed account recorded from a screenshot.
                4. Contact made with the replacement supplier and a new tariff chosen once allowed.

                ## Notes
                Do not switch away in a panic on the day of the announcement. Wait for the replacement supplier to contact you, as most regulators advise.
              priority: low
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A one-page note on supplier failure steps is saved, with a recent balance screenshot kept in the account details pack."
                cadence: one-shot
                effort_hours_estimate: "1"
              tasks:
                - "Read your regulator's guidance on what happens if a supplier fails"
                - "Keep a recent screenshot of your energy account balance"
                - "Photograph the meters on the day any failure is announced"
                - "Compare tariffs once the replacement supplier contacts you"
            - name: Electric vehicle charging tariff decision
              description: |-
                ## Purpose
                Charging a car at home on a standard rate can cost three or four times as much as on an overnight electric vehicle tariff, but those tariffs often raise daytime rates for the rest of the house. Modelling your annual mileage and household use on two or three such tariffs shows whether the cheap overnight window outweighs the dearer daytime price.

                ## Milestones
                1. Annual home charging kWh estimated from mileage and the car's efficiency.
                2. Household daytime and night-time use estimated separately.
                3. Two or three electric vehicle tariffs costed on both figures.
                4. Charger scheduling compatibility with each tariff checked.
                5. A tariff chosen and the charger set to its cheap hours.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "An electric vehicle tariff choice is recorded with yearly cost workings, and charging is scheduled to its cheap hours."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Estimate yearly charging kWh from your mileage and the car's efficiency"
                - "Cost two or three electric vehicle tariffs on charging plus household use"
                - "Check your charger or car can schedule charging for the cheap hours"
                - "Set the charging schedule to the new tariff's off-peak window"
            - name: Solar export tariff comparison
              description: |-
                ## Purpose
                Export tariffs for solar panels vary several-fold between suppliers, and the best export rate is sometimes tied to buying your electricity from the same company. Comparing export and import together, on your real generation and export figures, finds the pairing that pays most across the year.

                ## Milestones
                1. Annual generation and export in kWh found from the inverter or smart meter.
                2. Export rates from at least three suppliers recorded with their conditions.
                3. Each export offer combined with its required import tariff and costed.
                4. The best combined deal chosen and the export application completed.
                5. The first export payment checked against the meter's export reading.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "An export tariff chosen from at least three costed pairings, with the first payment checked against meter readings."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Find your annual export in kWh from the inverter app or smart meter"
                - "List export rates from three suppliers and any import tie-in"
                - "Cost each export and import pairing for a full year"
                - "Check export payments match your export readings @recurring(quarterly)"
            - name: Half-hourly smart meter data tariff modelling
              description: |-
                ## Purpose
                Smart meters can record use every half hour, and downloading that data lets you price any tariff, including agile and time-of-use deals, on exactly how your household behaves. A spreadsheet or tool that replays your half-hourly data against several tariffs replaces guesswork with a figure, and shows which shifts in usage would move it.

                ## Milestones
                1. Access to your half-hourly consumption data set up through the supplier or a data service.
                2. At least three months of half-hourly data downloaded.
                3. Three or more tariffs priced against the same data.
                4. The cheapest tariff and the main usage shift behind it recorded.

                ## Notes
                Check what consent you give when connecting a third-party data app, and how to withdraw it.
              priority: low
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "Three or more tariffs are priced on your own half-hourly data, with the cheapest identified and the usage shift behind it written down."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Turn on half-hourly data sharing in your energy account"
                - "Download three months of half-hourly consumption data"
                - "Price three tariffs against the same half-hourly data"
                - "Add the latest month of half-hourly data to your model @recurring(monthly:7)"
            - name: Disputing a large catch-up or estimated bill
              description: |-
                ## Purpose
                Catch-up bills for months or years of under-estimated use, often after a meter fault or missed readings, can arrive for hundreds at once. Some regulators limit how far back a supplier can bill when the delay was its own fault, twelve months in Great Britain for example, so checking dates, readings and the rules before paying can remove part of the bill and secure a fair repayment plan.

                ## Milestones
                1. The period the catch-up bill covers and the readings it uses identified.
                2. Your own dated readings and meter photos set against the bill.
                3. Any back-billing limit in your country checked against the dates.
                4. A written dispute sent to the supplier with your evidence.
                5. A corrected bill or an affordable repayment plan agreed in writing.
              priority: medium
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "A written dispute with dated evidence is sent, ending in a corrected bill or a written repayment plan."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Find the start and end dates the catch-up bill covers"
                - "Set your own dated readings and photos beside the bill's readings"
                - "Check whether a back-billing limit applies where you live"
                - "Ask the agent to draft a dispute letter from your dates and evidence"
            - name: Formal complaint and ombudsman escalation
              description: |-
                ## Purpose
                Billing errors, failed switches, missed engineer visits and wrongly applied exit fees sometimes survive every phone call. A formal complaint with a timeline and evidence starts the clock, and after a set period, often eight weeks, an unresolved complaint can usually go to a free ombudsman or dispute scheme that can order a correction and compensation.

                ## Milestones
                1. A dated timeline of the problem, calls and reference numbers.
                2. A formal written complaint sent through the provider's complaints process.
                3. The deadline for the provider's final response noted.
                4. The case referred to the ombudsman or dispute scheme if unresolved by then.
                5. The outcome and any compensation recorded.

                ## Notes
                Ask the provider for a deadlock letter if they say they cannot do more. It lets you go to the ombudsman before the waiting period ends.
              priority: medium
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "A formal complaint with a dated timeline is lodged and either resolved in writing or referred to the ombudsman by the deadline."
                cadence: phased
                effort_hours_estimate: "5"
              tasks:
                - "Write a dated timeline of every call, email and reference number"
                - "Send a formal complaint through the provider's complaints procedure"
                - "Note the date by which the provider must give a final response"
                - "Refer the complaint to the ombudsman if it is unresolved by that date"
---

# Energy & Broadband Bill Switching

This area is for anyone paying for energy, broadband, mobile or TV on a contract that was chosen once and then left to roll on. It starts with foundations (every contract and end date on one page, your real usage, account details and the loyalty penalty check), moves into the routines that catch price rises and expiring deals, the knowledge behind tariffs, connection types and switching codes, then the switches and retention calls themselves, dated moments such as a fix ending or a house move, versions for renters, students, prepayment homes, low incomes and older relatives, and finally specialist work on electric vehicle, solar export and half-hourly tariffs and on disputes.

What repeats is a monthly meter reading and bill check, a monthly look at contracts ending soon and at price notices, a monthly broadband speed test, a quarterly tariff comparison and direct debit review, and a yearly price rise response, pre-winter check and switching review. The Metrics log, Purchase decision and Operational checklist templates pair with the projects that name them. Installing adds all 50 projects as active, so archive the ones that are not for you yet.
