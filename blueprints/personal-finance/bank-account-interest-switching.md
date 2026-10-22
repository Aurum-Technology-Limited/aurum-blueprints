---
id: personal-finance.bank-account-interest-switching
name: Bank Account & Interest Switching
description: "Every account and rate on one page, a fee audit, a guaranteed current account switch, top-rate savings moves, bonus and maturity dates tracked, and a yearly review so loyalty never costs you interest."
category: personal
version: 1.0.0
tags: [personal-finance, bank-account-interest-switching, everyone, savings-interest, current-account, switching, bank-fees, deposit-protection]
author: Aurum Technology
starter_structure:
  templates:
    - purchase-decision
    - operational-checklist
    - metrics-log
    - risk-register
  pillars:
    - name: Personal Finance
      emoji: "💷"
      description: "The day-to-day money system: income, budget, bills, debt, savings buffers, insurance, tax and big purchases, run so that nothing surprises you and every pound has a job."
      pillarFrontmatter:
        review_cadence: monthly
      areas:
        - name: Bank Account & Interest Switching
          description: "Moving to better current and savings accounts for higher interest, switching bonuses and lower fees."
          projects:
            - name: Every bank and savings account on one page
              description: |-
                ## Purpose
                Most households hold more accounts than they remember: an old savings account from a first job, a bonus account whose rate fell years ago, a child's account opened by a grandparent. A single list with provider, account type, balance, current rate, access rules and fees is the starting point for every switch, and it usually reveals money earning close to nothing.

                ## Milestones
                1. A list of every current, savings and fixed-term account in the household, including dormant ones.
                2. Balance, current interest rate, access rules and monthly fee recorded for each account.
                3. The banking group behind each brand noted beside it.
                4. Accounts paying less than the best easy-access rate highlighted.

                ## Notes
                Record the rate the provider shows today, not the rate you opened at. Old accounts are often moved to a lower rate with only a short notice.
              priority: high
              deadlineOffsetDays: 14
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A dated list of every account in the household, each with balance, current rate, access rules, fees and banking group."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Write down every bank, building society and savings provider you have used in the last ten years"
                - "Log in to each account and copy the balance and current rate onto the list"
                - "Note the access rules and any monthly fee for each account"
                - "Update balances and rates on the account list @recurring(quarterly)"
            - name: Current account fees and charges audit
              description: |-
                ## Purpose
                Monthly account fees, packaged account charges, cash withdrawal fees abroad and charges for paper statements add up quietly, often to more than a year of interest on a modest savings balance. Going through twelve months of statements once shows what your current account really costs and whether any benefit you pay for is ever used.

                ## Milestones
                1. Twelve months of current account statements downloaded.
                2. Every fee and charge listed by type with a yearly total.
                3. Each paid-for benefit marked as used, unused, or duplicated by cover you already hold.
                4. A yearly cost figure for the account written down, ready to compare with alternatives.

                ## Notes
                Overdraft interest belongs in a separate plan if you are regularly overdrawn. This audit is about the price of the account itself.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A yearly total of every fee charged on your current account, with each paid benefit marked as used or unused."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Download the last twelve months of current account statements"
                - "Search the statements for monthly fees, foreign transaction charges and cash withdrawal fees"
                - "List each fee by type and add up the yearly total"
                - "Mark every benefit you pay for as used or unused"
            - name: Interest earned versus inflation check
              description: |-
                ## Purpose
                A savings balance earning less than inflation loses spending power every year, even though the number on screen goes up. Working out what each account actually pays in a year, and setting that beside the latest inflation figure, shows which balances are shrinking in real terms and how much a better rate would be worth in money rather than percentages.

                ## Milestones
                1. A yearly interest figure in money worked out for every savings balance.
                2. The latest published inflation figure noted with its date.
                3. Each account marked as beating or trailing inflation.
                4. The yearly gain from moving the largest trailing balance to a top rate written down in money.
              priority: medium
              frontmatter:
                mode: building
                output_kind: knowledge
                success_criteria: "Every savings balance has a yearly interest figure in money and a note of whether it beats the latest inflation rate."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Multiply each balance by its rate to estimate a year of interest"
                - "Look up the latest consumer price inflation figure from the national statistics office"
                - "Mark each account as beating or trailing inflation"
                - "Repeat the comparison with the newest inflation figure @recurring(yearly)"
            - name: Deposit protection limits check
              description: |-
                ## Purpose
                Most countries guarantee deposits up to a limit per person per banking licence, and several familiar brands can share one licence, so money spread across them may be protected only once. Checking your scheme's limit and which licence each account sits under tells you whether any balance is above the cover before anything goes wrong.

                ## Milestones
                1. Your national deposit guarantee limit, and what it covers, written down.
                2. The banking licence behind each of your accounts confirmed.
                3. Total balances per licence added up.
                4. Any amount above the limit flagged with a dated plan to move it.

                ## Notes
                Start from the **Risk register** template. Joint accounts are usually covered per holder, so check how your scheme treats them. In the UK, for example, the Financial Services Compensation Scheme publishes a checker for which brands share a licence.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "Total balances per banking licence listed, with no amount above the national deposit protection limit left without a plan."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Look up the deposit guarantee limit on your national scheme's website"
                - "Check which banking licence each of your providers operates under"
                - "Add up your balances under each licence"
                - "Recheck balances per licence against the protection limit @recurring(yearly)"
            - name: Idle cash sweep out of the current account
              description: |-
                ## Purpose
                Current accounts usually pay little or nothing, yet many people leave two or three months of spending sitting in them out of habit. Deciding how much buffer the current account really needs, then moving everything above it into an interest-paying account, earns a return on money that was doing nothing.

                ## Milestones
                1. The lowest balance your current account reached in each of the last three months found.
                2. A buffer figure agreed that covers bills landing before payday, plus a margin.
                3. Everything above the buffer moved to an interest-paying account.
                4. A monthly sweep in the calendar on a date after the main bills have gone out.

                ## Notes
                Keep enough in the current account to cover direct debits due before payday. A bounced payment costs more than a month of interest on the sweep.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: building
                output_kind: habit
                success_criteria: "The current account holds no more than the agreed buffer, with the excess earning interest in a savings account."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Find the lowest point your current account reached in each of the last three months"
                - "Set a buffer figure that covers bills due before payday"
                - "Move everything above the buffer into an interest-paying account"
                - "Sweep any balance above the buffer into savings @recurring(monthly:28)"
            - name: Online banking access check for every account
              description: |-
                ## Purpose
                An account you cannot log in to is an account you will never switch, and many people discover a forgotten password or an old phone number on the provider's file only when a better rate appears. Confirming access to every account now, and updating contact details, means each later move takes minutes rather than a week of letters.

                ## Milestones
                1. A successful log-in confirmed for every account on your list.
                2. Registered phone number, email and postal address current at every provider.
                3. The app or security device for each account set up and working.
                4. Accounts that can only be run by post or in a branch identified.

                ## Notes
                Keep log-in details in a password manager, never on the account list itself.
              priority: medium
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "Every account on your list has been logged into within the last month, with current contact details on file at each provider."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Try logging in to each account on your list and note any that fail"
                - "Reset access for each failed account through the provider's recovery route"
                - "Update your phone number, email and address with every provider"
                - "Log in to every account once to confirm access still works @recurring(yearly)"
            - name: Identity documents ready for opening accounts
              description: |-
                ## Purpose
                Top rates and switching offers are often withdrawn at short notice, and an application stalls when you cannot find a passport, a recent utility bill or your tax reference. A small secure pack of the documents banks ask for lets you open an account in one sitting when an offer appears.

                ## Milestones
                1. A valid photo ID available, with its expiry date noted.
                2. Two recent proofs of address in your name saved as files.
                3. Your tax reference and any national identity number written down where you can find them.
                4. Three years of address history written out with move dates, since many applications ask for it.
              priority: medium
              deadlineOffsetDays: 21
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A secure folder holds valid photo ID, two recent proofs of address, tax references and three years of address history."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Check the expiry date on your passport or driving licence"
                - "Save two recent bills or statements as proof of address"
                - "Write out your addresses for the last three years with move dates"
                - "Store the pack in an encrypted folder or password manager"
            - name: Benchmark rate and comparison sources
              description: |-
                ## Purpose
                Without a reference point there is no way to tell whether the rate in a bank's letter is good or poor this month. Picking two independent comparison sources and noting today's best easy-access, notice and one-year fixed rates gives you a benchmark to judge every account and every notice against.

                ## Milestones
                1. Two comparison sources chosen that list rates across the whole market, not just paying partners.
                2. The central bank base rate noted with the date it was set.
                3. Today's best easy-access, notice and one-year fixed rates recorded.
                4. The gap between your best account and the market best written down.

                ## Notes
                Some comparison sites rank by commission. Read how each site says it orders its results before trusting the top row.
              priority: medium
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "Two comparison sources chosen and today's best easy-access, notice and one-year fixed rates recorded beside the base rate."
                cadence: one-shot
                effort_hours_estimate: "1"
              tasks:
                - "Choose two independent savings comparison sources and bookmark them"
                - "Note the central bank's current base rate and the date it was set"
                - "Record today's top easy-access, notice and one-year fixed rates"
                - "Work out the gap between your best account and the market best"
            - name: Lost and forgotten account search
              description: |-
                ## Purpose
                Balances left untouched for years can become dormant, and in some countries are passed to a reclaim fund, though the owner can still get them back. Searching for accounts from previous addresses, childhood savings and old workplaces can recover real money and removes loose ends from your list.

                ## Milestones
                1. Every past address and name you have banked under listed.
                2. A search made through your country's free official tracing service, where one exists.
                3. Each account found either claimed and closed or added to your account list.
                4. Paperwork from the search filed with the account list.

                ## Notes
                Official tracing services are free. Be wary of firms that charge a percentage to find your own money.
              priority: medium
              deadlineOffsetDays: 60
              frontmatter:
                mode: research
                output_kind: deliverable
                success_criteria: "A search through an official tracing service completed, with every account found either reclaimed or added to your list."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "List every address and surname you have held a bank account under"
                - "Search the free official lost account tracing service in your country"
                - "Ask relatives about savings accounts opened for you as a child"
                - "Claim each balance found or add the account to your list"
            - name: Monthly savings rate check
              description: |-
                ## Purpose
                Savings rates move every few weeks, and providers rarely tell existing customers when a newer account at the same bank pays more. Ten minutes on a fixed day each month, comparing your rates with the best buys, catches drift early so the move-or-stay decision is made on numbers rather than on a letter months later.

                ## Milestones
                1. A rate log with one row per account and one column per month.
                2. A fixed monthly date in the calendar for the check.
                3. Six consecutive months of rates recorded.
                4. Every account more than your agreed margin below the market flagged for action.

                ## Notes
                Start from the **Metrics log** template.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Six consecutive monthly rate checks logged, each with every account's rate set against the market best."
                cadence: rolling
              tasks:
                - "Set up a rate log with a row for each savings account"
                - "Compare your savings rates with the current best buys @recurring(monthly:9)"
                - "Flag any account that falls further behind the market than your agreed margin"
            - name: Bonus rate and maturity date calendar
              description: |-
                ## Purpose
                Introductory bonuses usually last twelve months and fixed terms end on a set date, after which the money often drops into a low-paying account. A reminder sixty days before each end date leaves time to research and open the next account, so nothing rolls over by default.

                ## Milestones
                1. Every bonus end date and fixed-term maturity date found in the account documents.
                2. A calendar reminder set sixty days before each one.
                3. The rate or account each product falls into on expiry noted.
                4. A year passed with no product reaching its end date without a decision.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every bonus and fixed-term end date has a reminder sixty days ahead, and none passed in the last year without a decision."
                cadence: rolling
              tasks:
                - "Find the bonus end date or maturity date for each savings product"
                - "Add a reminder sixty days before each end date"
                - "Note what each product pays once the bonus or term ends"
                - "Check for any rate ending in the next sixty days @recurring(monthly:3)"
            - name: Regular saver monthly deposit routine
              description: |-
                ## Purpose
                Regular saver accounts often pay some of the highest rates on the market, but only on a capped monthly deposit, and missing a month can cost the rate or close the account. A standing order on a fixed date after payday keeps the deposits flowing and the rate earned for the full year.

                ## Milestones
                1. The deposit cap, minimum and missed-payment rules for each regular saver written down.
                2. A standing order set up for each account on a date after payday.
                3. Twelve monthly deposits made without a miss.
                4. A home chosen for the balance before the twelve-month term ends.

                ## Notes
                The quoted rate applies to a growing balance, so a year of deposits earns roughly half what the headline rate suggests on the final total.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Twelve consecutive monthly deposits made into each regular saver with no missed payment."
                cadence: rolling
              tasks:
                - "Read the deposit cap and missed-payment rules for each regular saver"
                - "Set up a standing order for each one on a date after payday"
                - "Confirm each regular saver deposit has arrived @recurring(monthly:5)"
                - "Add the end date of each regular saver to your calendar"
            - name: Bank notices and rate cut inbox routine
              description: |-
                ## Purpose
                Providers have to tell you about rate cuts and fee changes, but the notice often arrives as a secure message or a generic email that is easy to ignore. One folder for every bank notice and a monthly scan of it means a quiet cut to your savings rate is spotted within weeks, not discovered at the annual review.

                ## Milestones
                1. An email folder or filter collecting messages from every bank you use.
                2. The secure message inbox in each banking app checked.
                3. Each rate or fee change noted in the account list with its effective date.
                4. Twelve monthly scans completed.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every rate or fee change notice from the last twelve months recorded in the account list with its effective date."
                cadence: rolling
              tasks:
                - "Create an email folder or filter for messages from each bank you use"
                - "Check the secure message inbox in every banking app"
                - "Scan the bank notices folder for rate cuts and fee changes @recurring(monthly:24)"
                - "Record each change in the account list with its effective date"
            - name: Switching offer watchlist
              description: |-
                ## Purpose
                Banks run cash incentives for moving a current account several times a year, often for only a few weeks, with conditions such as a minimum monthly pay-in or a set number of direct debits. Checking the offers monthly against your own eligibility notes means you catch the ones you can actually meet and skip the rest without a second thought.

                ## Milestones
                1. Eligibility notes written: banks you have taken bonuses from, the pay-in you can route, the direct debits you can move.
                2. A monthly check of current offers in the calendar.
                3. Each offer screened against the notes in under ten minutes.
                4. At least one qualifying offer acted on or consciously passed over within a year.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Twelve monthly offer checks recorded, each listing the live offers and whether you qualify for them."
                cadence: rolling
              tasks:
                - "Write down the banks whose switching bonus you have already received"
                - "Note the monthly pay-in and number of direct debits you could move"
                - "Check current account switching offers against your eligibility notes @recurring(monthly:17)"
            - name: Annual interest statements and tax record
              description: |-
                ## Purpose
                Interest is taxable in many countries above an allowance, and banks may or may not report it to the tax authority for you. Collecting each provider's annual interest statement after the tax year ends gives an accurate total for any tax return and a simple check that interest was paid as promised.

                ## Milestones
                1. Your tax year dates and any savings interest allowance noted from the tax authority's guidance.
                2. An annual interest statement saved for every account that paid interest.
                3. Total interest for the year added up across providers.
                4. The total passed to whoever prepares your tax return, or the return completed.

                ## Notes
                Interest in tax-free accounts is usually treated separately. Ask your tax authority or an adviser how interest is taxed in your situation.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: artifact
                success_criteria: "A folder holds every provider's annual interest statement for the last tax year, with the total added up and passed on."
                cadence: cyclic
              tasks:
                - "Look up your tax year dates and savings interest allowance on the tax authority website"
                - "Download the annual interest statement from every provider @recurring(yearly)"
                - "Add up total interest earned across all accounts"
                - "Give the total to whoever prepares your tax return"
            - name: Annual bank and savings review
              description: |-
                ## Purpose
                Once a year it is worth stepping back from the monthly checks and asking the bigger questions: does the current account still suit how you live, which accounts should close, is any balance above protection limits, and did you earn what you expected. An hour with the account list and a year of notes keeps the whole set-up deliberate rather than inherited.

                ## Milestones
                1. The account list brought fully up to date.
                2. Total interest earned this year compared with the year before.
                3. Every account marked keep, move or close.
                4. Three actions for the coming year written down with dates.
              priority: high
              frontmatter:
                mode: operating
                output_kind: decision
                success_criteria: "An annual review held, with every account marked keep, move or close and three dated actions recorded."
                cadence: cyclic
              tasks:
                - "Book an hour for the annual bank and savings review @recurring(yearly)"
                - "Compare total interest earned with last year's figure"
                - "Mark every account keep, move or close"
                - "Write three dated actions for the coming year"
            - name: Weighted average savings rate tracker
              description: |-
                ## Purpose
                Individual rates hide the overall picture: a high-paying regular saver with a small balance can sit beside a large sum earning almost nothing. One weighted average rate across all your savings, worked out each quarter, tells you in a single number whether the system as a whole is getting better.

                ## Milestones
                1. A formula set up: each balance times its rate, summed, then divided by total savings.
                2. A first weighted average figure calculated and recorded.
                3. The figure compared with the best easy-access rate each quarter.
                4. Four quarterly figures recorded.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Four quarterly weighted average savings rates recorded, each beside the best easy-access rate of the day."
                cadence: rolling
              tasks:
                - "Ask the agent to set up a weighted average rate formula from your account list"
                - "Calculate your first weighted average savings rate"
                - "Recalculate the weighted average rate and record it beside the market best @recurring(quarterly)"
            - name: AER, gross rate and monthly interest explained
              description: |-
                ## Purpose
                Savings rates are quoted in several ways: the gross rate, the annual equivalent rate that allows for compounding, and sometimes a monthly rate that looks lower but is not. Understanding the difference lets you compare an account paying interest monthly with one paying annually on equal terms, and spot when a headline figure includes a temporary bonus.

                ## Milestones
                1. Gross rate, AER and the effect of payment frequency explained in your own words.
                2. Two real accounts with different payment frequencies compared on AER.
                3. Whether each of your current rates includes a bonus confirmed.
                4. A one-line rule written: compare on AER, then check what is fixed and for how long.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A written one-line comparison rule, and two real accounts with different payment frequencies compared correctly on AER."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Read a plain-language guide to gross rate and AER from a consumer finance body"
                - "Compare one monthly-interest account with one annual-interest account on AER"
                - "Check whether each of your current rates includes a bonus"
                - "Write a one-line comparison rule at the top of your account list"
            - name: Reading a savings account summary box
              description: |-
                ## Purpose
                Every savings product comes with a short summary of key facts: the rate and whether it is variable, how and when you can withdraw, what happens at the end of a term, and limits on deposits. Learning to read it in two minutes prevents surprises such as a withdrawal that closes the account or a bonus lost on the fourth withdrawal of the year.

                ## Milestones
                1. The key facts summary for your main savings account read end to end.
                2. Its withdrawal limits and penalties written down.
                3. What happens to the money at the end of the term or bonus noted.
                4. Two accounts you are considering read the same way and compared.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Key facts for three accounts summarised, each with withdrawal rules and what happens at the end of the term or bonus."
                cadence: one-shot
                effort_hours_estimate: "1"
              tasks:
                - "Download the key facts summary for your main savings account"
                - "Note the withdrawal limits and any penalty for breaking them"
                - "Find out what happens to the money at the end of the term or bonus"
                - "Read the summaries for two accounts you are considering the same way"
            - name: How a guaranteed current account switch works
              description: |-
                ## Purpose
                In several countries a formal switching service moves your balance, standing orders, direct debits and incoming payments to the new bank on a set date, and redirects payments sent to the old account for a period afterwards. Knowing what is moved for you, what is not and what the guarantee covers takes the fear out of moving the account your salary goes into.

                ## Milestones
                1. Whether your country has a formal switching service, and its timetable, confirmed.
                2. What moves automatically and what you must move yourself listed.
                3. The guarantee for payments that go wrong during a switch understood.
                4. The difference between a full switch and a partial switch noted.

                ## Notes
                In the UK, for example, the Current Account Switch Service completes a full switch in seven working days. Payments set up on your debit card, often called recurring card payments, usually do not move and need updating by hand.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A written note of what your country's switching service moves, what it does not, and what its guarantee covers."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Read the official guide to your country's current account switching service"
                - "List what moves automatically and what you must update yourself"
                - "Find out what the switching guarantee covers if a payment fails"
                - "Note the difference between a full switch and a partial switch"
            - name: Easy access, notice and fixed-term accounts compared
              description: |-
                ## Purpose
                Higher rates usually come in return for giving up access: notice accounts make you wait 30 to 120 days, and fixed-term accounts lock money away for one to five years. Understanding the trade-off lets you place each part of your savings in the type that matches when you might need it, instead of chasing the top rate on money you may need next month.

                ## Milestones
                1. The access rules and typical rate gap for easy access, notice and fixed-term accounts written down.
                2. Each savings balance labelled with when it might be needed.
                3. A matching account type chosen for each balance.
                4. Early withdrawal rules on fixed terms understood, including whether they are allowed at all.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Every savings balance labelled with when it may be needed and matched to an easy access, notice or fixed-term account type."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Write the access rules for easy access, notice and fixed-term accounts side by side"
                - "Label each savings balance with when you might need it"
                - "Match each balance to an account type"
                - "Check whether fixed terms you are considering allow early withdrawal"
            - name: Tax-free savings wrappers and transfer rules
              description: |-
                ## Purpose
                Many tax systems offer a tax-free savings account with a yearly allowance, and the rules on moving money between providers matter: withdrawing and paying back in can use up allowance, while an official transfer usually does not. Learning your country's rules before chasing a better tax-free rate protects the allowance you have already built up.

                ## Milestones
                1. Your country's tax-free savings account type, yearly allowance and tax year dates noted.
                2. The official transfer process and its typical timescale written down.
                3. Whether your provider allows flexible withdrawals confirmed.
                4. Each tax-free account listed with its rate and how much of this year's allowance is used.

                ## Notes
                In the UK, for example, cash ISA transfers must be requested through the new provider. Rules vary and change, so check your tax authority's current guidance rather than an old article.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A note of your tax-free savings allowance, transfer process and flexibility rules, with each tax-free account and its rate listed."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Read your tax authority's guidance on tax-free savings accounts"
                - "Write down the official transfer process and how long it takes"
                - "Ask your provider whether withdrawals can be replaced within the same tax year"
                - "List each tax-free account with its rate and allowance used this year"
            - name: How central bank rate moves reach your savings
              description: |-
                ## Purpose
                When the central bank changes its base rate, variable savings rates usually follow, but slowly, partly and not always for existing customers. Knowing the usual lag, and which of your accounts are fixed, variable or tracking the base rate, tells you what to expect after each announcement and where to look first.

                ## Milestones
                1. The central bank's announcement schedule for the year found.
                2. Each account labelled fixed, variable or tracker.
                3. The change passed on by each provider after the last base rate move checked.
                4. A note of which providers moved quickly and which lagged.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Every account labelled fixed, variable or tracker, with the pass-through after the last base rate change recorded for each."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Find the central bank's rate announcement dates for this year"
                - "Label each account as fixed, variable or tracker"
                - "Compare each variable rate before and after the last base rate change"
                - "Note which providers passed changes on quickly and which lagged"
            - name: Spotting teaser rates and hidden conditions
              description: |-
                ## Purpose
                Headline rates often carry conditions: a bonus lasting only twelve months, a rate paid only on the first slice of the balance, limits on withdrawals, a requirement to hold the bank's current account, or a rate for app users only. Practising a short checklist on three advertised accounts trains you to see the real rate before opening anything.

                ## Milestones
                1. A five-point checklist written: bonus length, balance tiers, withdrawal limits, linked account requirement, rate after expiry.
                2. Three advertised top-rate accounts run through the checklist.
                3. The real rate after year one estimated for each.
                4. The checklist saved beside your comparison sources.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A five-point conditions checklist written and applied to three advertised accounts, each with a year-two rate estimated."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Write a five-point checklist for savings account conditions"
                - "Run three advertised top-rate accounts through the checklist"
                - "Estimate what each account would pay after the first year"
                - "Save the checklist next to your comparison source bookmarks"
            - name: Prize-linked savings and their expected return
              description: |-
                ## Purpose
                Some governments and banks offer prize-linked savings where interest is paid out as prize draws instead of a rate, often with the capital fully protected. Learning how the published prize fund rate compares with what a typical holder actually wins helps you decide whether such an account deserves part of your savings or mostly offers the excitement of a draw.

                ## Milestones
                1. The prize fund rate and odds per unit for one prize-linked product noted.
                2. The likely result for a holding of your size estimated from the provider's own figures or calculator.
                3. That result compared with the best easy-access rate.
                4. A decision written on whether to hold, add to or cash in.

                ## Notes
                Premium Bonds in the UK are one example. This project is about savings mechanics, not investment advice.
              priority: low
              frontmatter:
                mode: learning
                output_kind: decision
                success_criteria: "The likely yearly return on your prize-linked holding compared with the best easy-access rate, and a hold, add or cash-in decision recorded."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Look up the current prize fund rate and odds for the prize-linked product"
                - "Use the provider's calculator to estimate likely winnings for your holding"
                - "Compare the likely result with the best easy-access rate"
                - "Write down whether you will hold, add to or cash in"
            - name: Choosing a new main current account
              description: |-
                ## Purpose
                The account your salary lands in shapes your fees, your card abroad, the app you open daily and whether you can reach a branch. Scoring three candidates against criteria set in advance, rather than picking the largest switching bonus, gives you an account worth keeping for years.

                ## Milestones
                1. Five criteria agreed, such as fees, app quality, spending abroad, branch or phone access and customer service ratings.
                2. Three candidate accounts shortlisted that meet the basics.
                3. Each candidate scored against the criteria and on yearly cost.
                4. A choice recorded with the reason in a sentence.

                ## Notes
                Start from the **Purchase decision** template. Independent customer service surveys of banks are published in several countries and are worth a look.
              priority: high
              deadlineOffsetDays: 45
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "Three current accounts scored against five written criteria, with the chosen account and the reason recorded."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Write the five things your main account must do well"
                - "Shortlist three current accounts that meet them"
                - "Score each against the criteria and on yearly cost"
                - "Record your choice and the reason in one sentence"
            - name: Full current account switch with the switching service
              description: |-
                ## Purpose
                Moving the main account is the switch most people put off, because salary, rent and dozens of direct debits run through it. Running it as a planned project with a chosen date, a list of every payment and a check afterwards turns it into two calm weeks rather than a month of worry.

                ## Milestones
                1. A list of every standing order, direct debit and recurring card payment on the old account.
                2. A switch date chosen away from payday and large bills.
                3. The switch completed and the old account closed by the service.
                4. Recurring card payments and anyone paying you directly given the new details.
                5. The first full month on the new account checked for missed payments.

                ## Notes
                Start from the **Operational checklist** template. Download the old account's statements before the switch date, because access usually ends when it closes.
              priority: high
              deadlineOffsetDays: 75
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "The switch completed through the service, with no missed payment in the first full month on the new account."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Export the list of standing orders and direct debits on the old account"
                - "List recurring card payments from the last three statements"
                - "Apply for the new account and choose a switch date clear of payday"
                - "Update every recurring card payment with the new card details"
                - "Check the first month's statement for anything that did not move"
            - name: Moving easy-access savings to a top-rate account
              description: |-
                ## Purpose
                Easy-access money left with the bank you have always used is often earning a fraction of the best rate available, and on a few thousand the gap can be worth a meal out every month. Opening a top-rate easy-access account and moving the balance is one of the quickest wins in this area, usually done in an afternoon.

                ## Milestones
                1. The best easy-access account whose conditions you can meet chosen.
                2. The new account opened with your current account nominated as the linked account.
                3. A small test transfer made and received.
                4. The balance moved and the old account either kept for a purpose or closed.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "Easy-access savings moved to an account paying within your agreed margin of the market best, confirmed on the new statement."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Pick the best easy-access account whose conditions you can meet"
                - "Open the account and nominate your current account as the linked account"
                - "Send a small test payment before moving the full balance"
                - "Move the balance and decide whether to close the old account"
            - name: Personal move-or-stay rule for savings rates
              description: |-
                ## Purpose
                Chasing every small rate difference costs time and creates a sprawl of accounts, while never moving leaves real money behind. A written personal rule, such as move when the gap passes a set margin on a balance above a set size, turns every rate cut notice into a two-minute decision instead of a debate.

                ## Milestones
                1. The yearly gain that makes a move worth an hour of your time worked out.
                2. A rule written in terms of rate gap and balance size.
                3. The rule applied to every savings account on your list.
                4. The rule kept at the top of the rate log.
              priority: medium
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A written move-or-stay rule based on rate gap and balance size, applied once to every savings account you hold."
                cadence: one-shot
                effort_hours_estimate: "1"
              tasks:
                - "Decide how much a year of extra interest must be to justify an hour of admin"
                - "Turn that figure into a rate gap and balance threshold"
                - "Apply the rule to every savings account you hold"
                - "Write the rule at the top of your rate log"
            - name: Fixed-term savings ladder
              description: |-
                ## Purpose
                Locking everything into one long fixed term earns a good rate but leaves no access, and puts all the money up for renewal on the same day. A ladder, with equal sums fixed for one, two and three years and each rung reinvested at the long end when it matures, returns a share of money every year and spreads the risk of renewing at a bad moment.

                ## Milestones
                1. The sum you can lock away for at least a year agreed.
                2. The number of rungs and their lengths chosen.
                3. Each rung placed in the best fixed-term account for its length.
                4. Maturity dates added to the bonus and maturity calendar.
                5. The first maturing rung reinvested at the top of the ladder.

                ## Notes
                Money that might be needed for emergencies does not belong in a ladder. Keep it in easy access.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "At least three fixed-term rungs with staggered maturity dates in place, each date recorded in the calendar."
                cadence: phased
                effort_hours_estimate: "5"
              tasks:
                - "Agree the sum you can lock away for at least a year"
                - "Choose the number of rungs and the length of each"
                - "Open the best fixed-term account for each rung length"
                - "Add each rung's maturity date to the calendar"
            - name: Closing dormant and small-balance accounts
              description: |-
                ## Purpose
                Every extra account is another log-in, another stream of notices and another place for a balance to sit forgotten at a poor rate. Closing the ones with no clear job, after moving the money and redirecting any payments, leaves a shorter list that is far easier to watch.

                ## Milestones
                1. Each account without a clear job marked for closure.
                2. Payments in and out of those accounts redirected.
                3. Balances moved and each closure confirmed in writing.
                4. Closure letters filed and the account list updated.

                ## Notes
                Wait for any final interest payment before closing, and keep the closure letter in case money arrives later.
              priority: low
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "Every account without a clear purpose closed, with written closure confirmation filed and the account list updated."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Mark every account on your list that has no clear job"
                - "Redirect any payments going in or out of those accounts"
                - "Move the balances and ask each provider to close the account"
                - "File the closure letters and update the account list"
            - name: Packaged account keep or downgrade decision
              description: |-
                ## Purpose
                Packaged current accounts bundle travel insurance, phone cover or breakdown cover for a monthly fee, and they pay off only if you use and qualify for the benefits. Pricing each benefit separately and checking the eligibility small print shows whether a free account plus the cover you need would cost less.

                ## Milestones
                1. Every benefit in the package listed with its eligibility rules.
                2. A standalone price found for each benefit you actually need.
                3. The yearly fee compared with the total standalone cost.
                4. A keep or downgrade decision made, with any replacement cover arranged before downgrading.

                ## Notes
                Travel insurance in packaged accounts often has age limits or excludes existing medical conditions unless you declare them. Check before relying on it.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "The packaged account's yearly fee compared with the standalone cost of the benefits you use, and a keep or downgrade decision recorded."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "List every benefit included in your packaged account"
                - "Check the age, health and device limits on each insurance benefit"
                - "Price standalone cover for the benefits you would keep"
                - "Downgrade or keep, arranging replacement cover first if downgrading"
            - name: Tax-free savings transfer to a better rate
              description: |-
                ## Purpose
                Tax-free savings accounts often drift to low rates after the first year, and the money can feel stuck because withdrawing it would waste the allowance. An official transfer to a better-paying tax-free account keeps the tax status intact and can lift the rate on years of accumulated allowance in one go.

                ## Milestones
                1. The best tax-free rate that accepts transfers in found.
                2. Any penalty for leaving a fixed-rate tax-free account early checked.
                3. The transfer requested through the new provider.
                4. The full balance confirmed in the new account and the old one closed.

                ## Notes
                Never withdraw the money yourself to move it. Start the transfer from the new provider's side.
              priority: medium
              deadlineOffsetDays: 90
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "The tax-free balance transferred through the official process to a higher rate, with the full amount confirmed at the new provider."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Compare your tax-free savings rate with the best transfer-in rates"
                - "Check that the new account accepts transfers in from other providers"
                - "Request the transfer through the new provider, not by withdrawing"
                - "Confirm the full balance arrived and the old account closed"
            - name: Ethical bank research and choice
              description: |-
                ## Purpose
                Banks lend your deposits on, and some publish exactly what they finance while others say little. If it matters to you where the money goes, comparing what candidate banks disclose about their lending lets you move savings or your main account to match your values, and see plainly what that costs in rate.

                ## Milestones
                1. The two or three issues that matter most to you written down.
                2. What three candidate banks publish about their lending gathered.
                3. Their rates and fees set beside your current accounts.
                4. A decision on which money, if any, moves and to where.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "Three banks compared on published lending and on rate, with a recorded decision on which accounts move."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Write down the two or three lending issues that matter most to you"
                - "Read what three candidate banks publish about what they finance"
                - "Set their rates and fees beside your current accounts"
                - "Decide which money moves, if any, and record why"
            - name: Trying an app-based bank alongside your main account
              description: |-
                ## Purpose
                App-based banks often offer instant spending notifications, fee-free card use abroad and quick account opening, but changing your main account on the strength of an advert is a big step. Running one as a secondary account for two months, with a slice of spending routed through it, shows whether you like it enough to switch fully.

                ## Milestones
                1. One app-based account opened as a secondary account.
                2. A defined slice of spending, such as groceries or travel, routed through it for two months.
                3. Notes kept on the app, support response and any fees met.
                4. A decision made to switch fully, keep it as a secondary account or close it.
              priority: low
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "Two months of real spending run through an app-based account, with a switch, keep or close decision recorded."
                cadence: phased
                effort_hours_estimate: "3"
              tasks:
                - "Choose one app-based account to trial and check its deposit protection"
                - "Route one category of spending through it for two months"
                - "Note what you like, what annoys you and any fees"
                - "Decide whether to switch fully, keep it as a spare or close it"
            - name: Switching bonus claim from start to payout
              description: |-
                ## Purpose
                A switching bonus is paid only if every condition is met inside the qualifying window: a full switch through the service, a minimum pay-in, a set number of active direct debits, sometimes app log-ins or card payments. Writing the conditions as a dated checklist and tracking them until the money lands is the difference between collecting the bonus and losing it on a technicality.

                ## Milestones
                1. Every bonus condition and its deadline copied from the offer terms.
                2. Each condition met, with evidence saved such as a screenshot of the pay-in.
                3. The bonus received, or a complaint raised once the stated payment date passes.
                4. The bonus noted in your switching record.

                ## Notes
                Offer terms can change after you apply. Save a copy of the terms on the day you sign up.
              priority: high
              deadlineOffsetDays: 120
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "Every bonus condition met with saved evidence and the bonus credited to the account, or a formal complaint raised."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Save a copy of the offer terms on the day you apply"
                - "Write each condition with its deadline as a checklist"
                - "Screenshot the evidence as each condition is met"
                - "Chase the bank in writing if the bonus has not arrived by the stated date"
            - name: Fixed-term bond maturity week
              description: |-
                ## Purpose
                When a fixed-term account matures, many providers move the money into a low-rate easy-access account or roll it into a new fix at whatever rate they choose, unless you give instructions in time. Treating the maturity week as a dated event, with the next home chosen in advance, keeps the money earning a competitive rate from the first day.

                ## Milestones
                1. The deadline for maturity instructions confirmed with the provider.
                2. The next home for the money chosen two weeks before maturity.
                3. Instructions given, or the new account opened and ready to receive.
                4. The money confirmed as earning the new rate within days of maturity.
              priority: medium
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "The matured balance is earning its new chosen rate within one week of the maturity date."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Confirm the maturity date and the instructions deadline with the provider"
                - "Compare fixed and easy-access rates two weeks before maturity"
                - "Give maturity instructions or open the new account"
                - "Check the money has arrived and is earning the new rate"
            - name: Bonus rate end date move
              description: |-
                ## Purpose
                The day an introductory bonus ends, an easy-access account can drop from near the top of the table to near the bottom. Opening the replacement account a few weeks ahead and moving the balance in the week the bonus expires means you lose almost nothing to the drop.

                ## Milestones
                1. The exact date the bonus ends confirmed.
                2. A replacement account chosen and opened two weeks before.
                3. The balance moved in the week the bonus expires.
                4. The new account's own bonus end date added to the calendar.
              priority: medium
              frontmatter:
                mode: event
                output_kind: deliverable
                success_criteria: "The balance moved to a replacement account within seven days of the old bonus ending, with the new end date in the calendar."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Confirm the exact date the bonus rate ends"
                - "Choose and open the replacement account two weeks before"
                - "Move the balance in the week the bonus expires"
                - "Add the new account's bonus end date to the calendar"
            - name: Rate check after a central bank decision
              description: |-
                ## Purpose
                A base rate change is the moment your variable savings rates are most likely to move, and the best-buy tables reshuffle within days. Checking your accounts three weeks after an announcement, rather than waiting for the bank's letter, tells you who has passed the change on and whether your move-or-stay rule now says go.

                ## Milestones
                1. The date and size of the latest base rate change noted.
                2. Each variable account's rate checked three weeks later.
                3. The new rates compared with the reshuffled best buys.
                4. The move-or-stay rule applied to any account that fell behind.
              priority: low
              frontmatter:
                mode: event
                output_kind: decision
                success_criteria: "Every variable account's rate rechecked within a month of a base rate change, with a move or stay decision recorded for each."
                cadence: one-shot
                effort_hours_estimate: "1"
              tasks:
                - "Note the date and size of the latest base rate change"
                - "Check each variable account's rate three weeks after the announcement"
                - "Compare the new rates with the reshuffled best buys"
                - "Apply your move-or-stay rule to any account that fell behind"
            - name: Student account to graduate account move
              description: |-
                ## Purpose
                Student current accounts usually convert to a graduate account a set time after the course ends, and later to a standard account with different fees and terms. Comparing your own bank's graduate offer with others before the conversion date means you pick an account that suits a first salary rather than drifting into whatever the bank chooses.

                ## Milestones
                1. The conversion date and the account your student account becomes confirmed.
                2. Your bank's graduate account compared with two others.
                3. The terms after the graduate period ends noted.
                4. A decision made to stay or switch, with the next conversion date in the calendar.
              priority: medium
              deadlineOffsetDays: 60
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "Your bank's graduate account compared with two alternatives and a stay or switch decision recorded before the conversion date."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Find the date your student account converts and what it becomes"
                - "Compare your bank's graduate account with two others"
                - "Check the fees and terms that apply after the graduate period ends"
                - "Switch or stay, and add the next conversion date to your calendar"
            - name: Children's savings account at a competitive rate
              description: |-
                ## Purpose
                Children's savings accounts can pay well above adult easy-access rates, yet many balances sit in an account opened at birth whose rate fell years ago. For parents and grandparents, comparing the market, checking who controls the account and at what age the child gains access, and moving a lagging balance can add noticeably to the sum the child eventually receives.

                ## Milestones
                1. The current rate on each child's account found.
                2. The best children's savings and junior regular saver rates compared.
                3. Who can operate the account, and at what age the child takes over, confirmed.
                4. Any lagging balance moved to a better account in the child's name.
              priority: low
              frontmatter:
                mode: research
                output_kind: deliverable
                success_criteria: "Each child's savings rate compared with the market, with any lagging balance moved and the takeover age recorded."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Check the current rate on each child's savings account"
                - "Compare it with the best children's savings and junior regular savers"
                - "Confirm who can operate the account and at what age the child takes over"
                - "Recheck the child's account rate on their birthday @recurring(yearly)"
            - name: Banking in later life with branch and phone access
              description: |-
                ## Purpose
                Older savers often hold the largest balances in the oldest accounts at the lowest rates, partly because many of the best deals are app-only. Finding competitive accounts that can still be run by phone, post or in a branch, and arranging trusted access in case it is ever needed, lets you earn a fair rate without banking in a way that feels unsafe.

                ## Milestones
                1. Each account labelled with how it can be run: branch, phone, post or app.
                2. Two or three competitive accounts found that offer postal or phone access.
                3. The bank's options for a trusted person, such as a third party mandate, understood.
                4. Older low-rate accounts moved or their rate improved.

                ## Notes
                A third party mandate and a registered power of attorney are different things. Ask the bank which one fits your situation.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "Older accounts earning below the market moved or renegotiated, using accounts you can run by branch, phone or post."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "List which of your accounts can be run by branch, phone or post"
                - "Search for competitive accounts that offer postal or phone access"
                - "Ask your bank how it handles a third party mandate or power of attorney"
                - "Ask the branch for the current rate on each older account @recurring(yearly)"
            - name: Helping an older relative move neglected savings
              description: |-
                ## Purpose
                Many people helping a parent or grandparent find savings that have paid almost nothing for years, but the money is theirs and every decision must be too. Sitting down together to list their accounts, compare rates and move money only with their agreement, or under a registered power of attorney, can raise their income while leaving every choice in their hands.

                ## Milestones
                1. Your relative's agreement to a review, in their own words.
                2. Their accounts and rates listed together at a time that suits them.
                3. Better accounts opened in their name, with their consent, for any lagging balance.
                4. A regular check-in agreed that they are comfortable with.

                ## Notes
                Never use their log-in details yourself. Ask the bank about formal third party access, and watch for anyone else pressing them to move money.
              priority: medium
              frontmatter:
                mode: service
                output_kind: deliverable
                success_criteria: "Your relative's accounts reviewed with them, and any lagging balance moved with their written or spoken agreement."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Ask your relative whether they would like help reviewing their savings"
                - "List their accounts and rates together at a time that suits them"
                - "Help them open a better account in their own name, with their agreement"
                - "Check in with your relative about their accounts @recurring(quarterly)"
            - name: Basic bank account after being refused elsewhere
              description: |-
                ## Purpose
                People with a poor credit history, a short address history or a past insolvency can be refused a standard current account, yet many countries require large banks to offer a fee-free basic account with no overdraft. Knowing it exists and how to ask for it gets wages paid into a proper account and direct debits set up, which is usually cheaper than prepaid cards or cash.

                ## Milestones
                1. The basic account rules in your country, and which banks must offer one, found.
                2. An application made, naming the basic account specifically.
                3. Income and direct debits moved into the new account.
                4. A date noted to review an upgrade to a standard account after a year of steady use.

                ## Notes
                If a bank refuses, ask for the reason in writing and try another provider on the list.
              priority: medium
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "A fee-free basic bank account open, with income paid in and at least one direct debit running from it."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Look up which banks in your country must offer a basic bank account"
                - "Apply for a basic account by name at one of them"
                - "Move your income and direct debits into the new account"
                - "Note a date a year from now to ask about upgrading"
            - name: Keeping a home bank account while living abroad
              description: |-
                ## Purpose
                Moving abroad can leave you with a home account the bank closes because you are no longer resident, while exchange margins and card fees quietly take a few percent of every transfer. Checking your bank's residency rules before you go, and choosing a low-cost way to move money between countries, keeps both sides of your finances working.

                ## Milestones
                1. Your bank's rules for customers living abroad confirmed in writing.
                2. Exchange costs on your bank card compared with a specialist transfer service.
                3. Address and tax residency details updated with the bank.
                4. The home account kept active so it is not marked dormant.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "Your home bank has confirmed you can keep the account while abroad, and a low-cost transfer route has been chosen and tested."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Ask your bank whether it keeps accounts open for customers living abroad"
                - "Compare exchange costs on your card with a low-fee transfer service"
                - "Update your address and tax residency status with the bank"
                - "Log in and make a small transaction on the home account @recurring(yearly)"
            - name: Separate account for side income
              description: |-
                ## Purpose
                Running freelance or side-business payments through a personal current account muddles your records and may breach the account terms if the activity grows. Opening a separate account, personal or business depending on what the bank allows, and comparing fees on incoming payments keeps side income visible and easy to evidence.

                ## Milestones
                1. Your current account's terms on business use checked.
                2. Two or three accounts compared on monthly fees and charges for receiving payments.
                3. A separate account opened and clients given the new details.
                4. Personal spending kept out of the new account for three months.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A separate account receiving all side income, chosen after comparing fees on at least two options."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Read your current account terms on business or self-employed use"
                - "Compare two or three accounts on fees for receiving payments"
                - "Open the chosen account and send clients the new details"
                - "Move any side income still arriving in the personal account"
            - name: Temporary large balance protection plan
              description: |-
                ## Purpose
                House sale proceeds, an inheritance or a lump sum can push a balance far above the deposit protection limit for weeks or months. Some schemes give temporary extra cover for certain life events, and spreading the rest across separate banking licences protects it, so deciding where the money will sit before it arrives avoids a scramble on completion day.

                ## Milestones
                1. The expected sum and arrival date written down.
                2. Your scheme's rules on temporary high balances checked.
                3. Accounts under separate licences chosen and opened in advance.
                4. The money spread so no licence holds more than the cover, within days of arrival.

                ## Notes
                Ask your solicitor or the paying party which account the money will land in first, and keep that stay short.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A written plan names accounts under separate licences for the incoming sum, with none set to hold more than the protection limit."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Write down the expected sum and when it should arrive"
                - "Check your deposit scheme's rules on temporary high balances"
                - "Open accounts under separate banking licences before the money arrives"
                - "Spread the balance across them within days of it landing"
            - name: Repeat switching bonus record
              description: |-
                ## Purpose
                People who switch current accounts regularly to collect bonuses need to know which banks they have used, when, and which brands share a group, because most offers exclude anyone who has had a bonus from that group before. A tidy record also keeps track of credit searches and how many accounts are open at once.

                ## Milestones
                1. Every switching bonus received listed with bank, group and date.
                2. The type of credit search each application used noted.
                3. Exclusion periods for each bank group written beside its entry.
                4. Each new switch added within a week of completing.
              priority: low
              frontmatter:
                mode: operating
                output_kind: artifact
                success_criteria: "A switching record listing every bonus, bank group, date and credit search type, updated within a week of each new switch."
                cadence: rolling
              tasks:
                - "List every switching bonus you have received with the bank and date"
                - "Note the banking group behind each brand"
                - "Record whether each application used a hard or soft credit search"
                - "Add each new switch and its outcome to the record"
            - name: Savings platform hub evaluation
              description: |-
                ## Purpose
                Savings platforms let you open fixed and easy-access accounts with many partner banks through one log-in, which makes laddering and spreading money across licences far simpler. Checking how the platform holds your money, what it charges, whether its rates trail the direct market and how deposit protection applies tells you if the convenience is worth it.

                ## Milestones
                1. How the platform holds client money, and in whose name, understood.
                2. Platform fees or rate margins compared with the same banks direct.
                3. Deposit protection on platform accounts confirmed per partner bank.
                4. A decision recorded on whether to use the platform and for which money.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "One savings platform checked on custody, fees and protection, with a use or skip decision recorded."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Read how the platform holds client money and in whose name"
                - "Compare platform rates with the same banks' direct rates"
                - "Confirm how deposit protection applies to each partner bank"
                - "Decide whether to use the platform and for which savings"
            - name: Complaint over a failed switch or wrong interest
              description: |-
                ## Purpose
                Switches occasionally go wrong: a missed direct debit with a late fee, a bonus never paid, interest calculated at the wrong rate. Using the bank's formal complaints process with dates and evidence, and escalating to the financial ombudsman if the bank does not resolve it in the set time, usually puts things right and can bring compensation for the trouble.

                ## Milestones
                1. A timeline of what went wrong, with dates and amounts.
                2. A formal complaint raised and its reference number recorded.
                3. The bank's final response received or its deadline passed.
                4. The complaint resolved or referred to the ombudsman.

                ## Notes
                Ask the agent to draft the complaint letter from your timeline, then check every figure yourself before sending.
              priority: low
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "A formal complaint raised with a reference number and resolved, or referred to the ombudsman once the bank's deadline passed."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Write a timeline of what went wrong with dates and amounts"
                - "Raise a formal complaint through the bank's complaints process"
                - "Diary the date the bank's final response is due"
                - "Refer the complaint to the financial ombudsman if it is not resolved"
---

# Bank Account & Interest Switching

This area is for anyone whose money sits in accounts chosen years ago and rarely looked at since. It starts with foundations (every account on one page, a fee audit, deposit protection, working log-ins and an identity pack), moves into the routines that catch rate drift and expiring bonuses, the knowledge behind rates and switching, then the switches and decisions themselves, dated events such as bonus claims and maturities, versions for graduates, parents, older savers and people living abroad, and finally specialist work on large balances, savings platforms and complaints.

What repeats is a monthly rate check, a monthly scan of bank notices, a monthly look at switching offers and upcoming end dates, regular saver deposits, a quarterly weighted average rate, and a yearly review with interest statements gathered for tax. The Purchase decision, Operational checklist, Metrics log and Risk register templates pair with the projects that name them. Installing adds all 50 projects as active, so archive the ones that are not for you yet.
