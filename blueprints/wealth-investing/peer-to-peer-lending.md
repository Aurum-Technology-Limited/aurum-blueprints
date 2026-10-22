---
id: wealth-investing.peer-to-peer-lending
name: Peer-to-Peer Lending
description: "Peer-to-peer and crowdfunded lending run as a small, deliberate slice of your wealth: platforms checked before you lend, written limits per loan and platform, defaults expected and tracked, and clean records for tax."
category: personal
version: 1.0.0
tags: [wealth-investing, peer-to-peer-lending, everyone, retiree, p2p-lending, crowdfunding, loan-defaults, platform-risk]
author: Aurum Technology
starter_structure:
  templates:
    - vendor
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
        - name: Peer-to-Peer Lending
          description: "Lending through peer-to-peer and crowdfunding platforms with diversification across loans and realistic default expectations."
          projects:
            - name: Deciding the role and size of your lending allocation
              description: |-
                ## Purpose
                Peer-to-peer loans pay more than savings because borrowers can and do fail to repay, and the platform itself can fail too. Deciding in writing what the lending is for, whether income, diversification away from shares or curiosity, and the most of your investable wealth it may ever hold, stops a few good months of interest from quietly turning it into your largest holding.

                ## Milestones
                1. The reason you lend written in one or two sentences.
                2. Investable wealth estimated, excluding your home, pension and emergency cash.
                3. A maximum lending allocation recorded as a percentage of that figure.
                4. A sum you could lose entirely without changing your plans written beside it.
                5. The decision dated, and agreed with a partner if money is shared.

                ## Notes
                Many regulators require platforms to ask new lenders to confirm they will put no more than a set share of their investable assets into this kind of lending. Treat that limit as a ceiling, not a target.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A dated note states why you lend, the maximum percentage of investable wealth allowed in lending and a total-loss figure you accept."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Write one sentence on what you want peer-to-peer lending to do for you"
                - "Estimate your investable wealth excluding home, pension and emergency cash"
                - "Set a maximum lending percentage and the loss you could absorb"
                - "Record the decision with today's date in your money notes"
            - name: Inventory of every lending and crowdfunding account
              description: |-
                ## Purpose
                People who tried peer-to-peer lending years ago often have small balances stranded on two or three platforms, some still lending, some in wind-down, with forgotten logins. A single inventory of every account, its balance, loans outstanding and status is the starting point for every later decision in this area.

                ## Milestones
                1. Every platform you have ever lent through listed, including closed and dormant ones.
                2. Current balance, cash awaiting investment and loans outstanding recorded for each.
                3. Each account marked as active, paused, in wind-down or closed.
                4. Login access confirmed for every account still holding money.

                ## Notes
                Search your email for platform welcome messages and annual statements. That usually turns up accounts you had forgotten.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A single list shows every lending platform account with balance, outstanding loans, status and confirmed login access."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Search your email for platform welcome messages and annual statements"
                - "List every platform with its balance and loans outstanding"
                - "Mark each account active, paused, in wind-down or closed"
                - "Reset passwords on any account you cannot log in to"
                - "Refresh balances and status for every account in the inventory @recurring(yearly)"
            - name: How platform lending works, loan type by loan type
              description: |-
                ## Purpose
                A platform offering consumer loans, one lending to small businesses and one funding property developers are three different risks that share a label. Learning who the borrowers are, what security sits behind each loan type and how the platform earns its money lets you judge an advertised rate instead of simply comparing headline numbers.

                ## Milestones
                1. The four main loan types understood: consumer, small business, property bridging and development, and invoice or trade finance.
                2. Secured and unsecured lending explained in your own words, with what each means for recovery.
                3. The ways a platform earns money listed, including fees charged to borrowers and to lenders.
                4. A one-page summary written of which loan types you would consider and which you would not.

                ## Notes
                Read a platform's loan book statistics page, not its marketing page. The statistics show what has actually happened to past loans.
              priority: medium
              deadlineOffsetDays: 30
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A one-page summary of the main loan types, their security and the platform's fee model, with your own yes or no against each type."
                cadence: phased
                effort_hours_estimate: "5"
              tasks:
                - "Read the loan book statistics page of two different platforms"
                - "Write down who the borrowers are on each platform"
                - "Note what security, if any, stands behind each loan type"
                - "List which loan types you would lend to and which you would avoid"
            - name: Regulation and client money check for each platform
              description: |-
                ## Purpose
                Lending through a platform is not a bank deposit, so the deposit guarantee that covers savings accounts almost never applies. Checking each platform's authorisation on the regulator's public register, how client money is held, and whether a complaints ombudsman covers you, tells you which protections exist and, more importantly, which do not.

                ## Milestones
                1. Each platform found on your financial regulator's public register, with its permissions noted.
                2. How client money is held, in a segregated trust or client account, confirmed for each.
                3. The ombudsman or complaints scheme that covers each platform recorded.
                4. A plain statement written for each platform of what is and is not protected.

                ## Notes
                Examples include the FCA register in the UK, the SEC and state registers in the US, and national authorities under the EU crowdfunding regulation. If a platform is not on any register, treat that as the answer.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "For every platform you use or are considering, a recorded register entry, client money arrangement, complaints scheme and protection summary."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Look up each platform on your financial regulator's public register"
                - "Find how each platform holds lender cash in its terms"
                - "Note which complaints ombudsman covers each platform"
                - "Write one line per platform on what is not protected"
            - name: Platform due diligence scorecard for a first choice
              description: |-
                ## Purpose
                Choosing a platform is a bigger decision than choosing any single loan, because a weak platform can lose money across every loan it services. Scoring two or three candidates on the same criteria, from years trading and audited accounts to default history and wind-down plans, turns a choice usually made from adverts into one you could defend.

                ## Milestones
                1. A scorecard with the same eight to ten criteria for every candidate platform.
                2. Two or three platforms scored, using their published accounts and loan book data.
                3. Red flags noted, such as late accounts, missing loan data or rates far above rivals.
                4. One platform chosen, with the reason written beside the scores.

                ## Notes
                Start from the **Vendor** template. Useful criteria: years trading, profitability, audited accounts filed on time, full loan book published, historical default rate, provision fund rules, secondary market, wind-down plan and fees.
              priority: high
              deadlineOffsetDays: 45
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A scorecard comparing at least two platforms on the same criteria, with the chosen platform and the reason recorded."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Create a vendor page for each candidate platform"
                - "Download each platform's latest filed accounts"
                - "Score every candidate on the same eight to ten criteria"
                - "Record the chosen platform and the reason in one paragraph"
            - name: Realistic net return after defaults and fees
              description: |-
                ## Purpose
                Headline rates of eight or ten percent are gross figures: defaults, platform fees, cash waiting to be lent and tax all come off before anything reaches you. Working out an expected net return from the platform's own loss data gives you a number to compare honestly with a savings account or a bond fund, and a yardstick for your own results later.

                ## Milestones
                1. The platform's advertised rate and its published historical loss rate recorded.
                2. Lender fees and an allowance for uninvested cash subtracted.
                3. Your tax rate on interest applied to reach an after-tax figure.
                4. A written expected net return range, with a pessimistic case beside it.

                ## Notes
                Use loss rates from loans that have fully run their term, not recent cohorts that have barely started to default.
              priority: high
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A written expected net return range for each platform, after losses, fees, cash drag and tax, with a pessimistic case."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Find the historical loss rate for fully matured loans on your platform"
                - "Subtract lender fees and an allowance for idle cash"
                - "Apply your tax rate on interest to the result"
                - "Write an expected range and a pessimistic case beside it"
            - name: Cash buffer and debt check before lending
              description: |-
                ## Purpose
                Money lent for three or five years cannot be pulled back for a broken boiler, and selling loans early in a stressed market can mean waiting months or taking a loss. Confirming that your emergency cash is in place and that no expensive debt is costing more than lending would earn makes sure the lending money is genuinely spare.

                ## Milestones
                1. Emergency cash confirmed at the level you set, held in easy-access savings.
                2. Every debt listed with its interest rate.
                3. Any debt charging more than your expected net lending return flagged for repayment first.
                4. A written yes or no on whether lending can start now.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A recorded yes or no on starting to lend, based on a confirmed emergency fund and a list of debts compared with expected net return."
                cadence: one-shot
                effort_hours_estimate: "1"
              tasks:
                - "Confirm your emergency cash balance against the level you set"
                - "List every debt with its current interest rate"
                - "Flag any debt costing more than your expected net lending return"
                - "Write down whether lending can start now or after repayments"
            - name: Written lending limits per loan, borrower and platform
              description: |-
                ## Purpose
                Diversification is the only real defence against defaults: spreading a pot across two hundred loans means one failure costs half a percent, while ten loans means one failure costs a tenth. Writing a maximum per loan, per borrower, per loan type and per platform before you lend keeps those rules intact when an attractive loan comes along.

                ## Milestones
                1. A maximum amount or percentage per individual loan written down.
                2. A maximum exposure to any one borrower or development recorded.
                3. Caps set for each loan type and for each platform.
                4. The rules saved in one place you will see before every manual loan choice.

                ## Notes
                A common starting point is no more than one percent of the lending pot in any single loan, but set your own and write down why.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A one-page set of lending limits covering per loan, per borrower, per loan type and per platform, saved and dated."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Set a maximum per loan as an amount and a percentage"
                - "Set a maximum exposure to any single borrower"
                - "Set caps for each loan type and each platform"
                - "Save the limits where you will see them before lending"
            - name: Secure set-up of lending platform accounts
              description: |-
                ## Purpose
                Your lending account holds real money and can usually withdraw only to a nominated bank account, which is a protection worth checking rather than assuming. Setting strong unique passwords, two-factor sign-in, a verified withdrawal account and statement delivery to an address you check closes the gaps fraudsters look for.

                ## Milestones
                1. A unique password stored in a password manager for every platform.
                2. Two-factor sign-in switched on wherever the platform offers it.
                3. The nominated withdrawal bank account verified on each platform.
                4. Statements and alerts set to an email address you read.

                ## Notes
                Platforms will never ask you to move money to a new account by phone or email. Treat any such request as a scam and contact the platform through its website.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Every active platform account has a unique stored password, two-factor sign-in, a verified withdrawal account and working alerts."
                cadence: one-shot
                effort_hours_estimate: "1"
              tasks:
                - "Move every platform password into your password manager"
                - "Switch on two-factor sign-in on each platform"
                - "Check the nominated withdrawal bank account on each platform"
                - "Point statements and alerts to an email address you read"
                - "Review sign-in security and withdrawal accounts on every platform @recurring(yearly)"
            - name: Tax record system for interest, fees and bad debts
              description: |-
                ## Purpose
                Lending interest is usually taxable income, and in several countries losses from defaulted loans can be set against it, but only if you can show which loans failed and when. Building a simple record from the start, with each platform's annual tax statement and a list of written-off loans, saves hours of reconstruction at tax time.

                ## Milestones
                1. A folder per tax year for every platform's annual statement.
                2. A record of loans written off, with amounts and dates.
                3. How your tax authority treats lending interest and bad debt losses noted from its guidance.
                4. Questions for an accountant written down if your situation is unclear.

                ## Notes
                In the UK, for example, peer-to-peer interest counts as savings income and bad debt relief may be available. Check your own tax authority's guidance or ask an accountant.
              priority: high
              deadlineOffsetDays: 60
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A tax record folder exists with per-year statement slots, a written-off loans list and notes on how your tax authority treats lending."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Create a tax folder for this year and last year"
                - "Start a written-off loans list with amount and date columns"
                - "Read your tax authority's guidance on lending interest and losses"
                - "Write down any questions to take to an accountant"
            - name: Monthly lending dashboard
              description: |-
                ## Purpose
                Platform dashboards show their own flattering figures, often an annualised return that ignores loans not yet in default. A monthly line of your own, with amount lent, interest received, loans in arrears, loans defaulted and idle cash across all platforms, shows what is really happening to the money.

                ## Milestones
                1. A dashboard with columns for lent, interest, arrears, defaults and idle cash per platform.
                2. Three months of figures entered.
                3. A combined total across platforms calculated each month.
                4. Any month where arrears rise sharply marked for a closer look.

                ## Notes
                Start from the **Metrics log** template.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A dashboard holding at least six consecutive monthly entries across all active platforms, with combined totals."
                cadence: rolling
              tasks:
                - "Create the dashboard from the metrics log template"
                - "Enter last month's figures for every active platform"
                - "Update the lending dashboard from each platform @recurring(monthly:9)"
                - "Mark any platform whose arrears rose since last month"
            - name: Idle cash sweep on lending platforms
              description: |-
                ## Purpose
                Repayments land as cash that may sit uninvested for weeks if auto-invest finds nothing matching your rules, earning nothing while still exposed to the platform. A short monthly check of idle balances lets you either lend it, loosen a rule deliberately or withdraw it to savings.

                ## Milestones
                1. Idle cash on each platform recorded once a month.
                2. A threshold set above which idle cash is acted on.
                3. Each month's surplus either lent, withdrawn or left with a written reason.
                4. Average idle cash over a quarter compared with the start.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Idle cash on every platform is checked monthly and kept below a written threshold for three months in a row."
                cadence: rolling
              tasks:
                - "Set the idle cash threshold that triggers action"
                - "Check idle cash on every platform and lend or withdraw it @recurring(monthly:23)"
                - "Note the reason whenever cash is left idle on purpose"
            - name: Arrears and default ledger
              description: |-
                ## Purpose
                Late loans are reported differently on each platform, and a loan can move from a week late to a recovery case without much notice. Keeping your own ledger of every loan in arrears or default, with amount, date and recovery news, gives you the facts for your tax losses, your platform reviews and any complaint.

                ## Milestones
                1. A ledger with loan reference, platform, amount, days late and status.
                2. Every loan currently in arrears or default entered.
                3. Recovery updates and amounts recovered recorded as they arrive.
                4. Final losses moved to the written-off list for tax.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "An arrears ledger that lists every late or defaulted loan with status and recoveries, updated monthly for at least six months."
                cadence: rolling
              tasks:
                - "Create the ledger with reference, amount, days late and status"
                - "Add every loan currently in arrears or default"
                - "Update arrears, recoveries and write-offs in the ledger @recurring(monthly:17)"
                - "Move confirmed losses to the written-off list for tax"
            - name: Quarterly platform health check
              description: |-
                ## Purpose
                Platforms rarely fail overnight: late accounts, a paused secondary market, rising arrears, sudden rule changes and staff departures usually come first. Checking each platform against the same warning signs every quarter gives you time to stop lending or start an orderly exit before others rush for the door.

                ## Milestones
                1. A list of eight warning signs to check for each platform.
                2. Each platform's filed accounts, news and lender forum checked against the list.
                3. Every platform rated as fine, watch or exit.
                4. Any platform rated exit moved into the exit project.

                ## Notes
                Start from the **Risk register** template. Useful signs: accounts filed late, loss-making for several years, secondary market delays, falling loan volumes, changed provision fund rules, regulator notices, leadership exits and unexplained rate rises.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every active platform rated fine, watch or exit against the same warning signs each quarter, with the ratings logged."
                cadence: rolling
              tasks:
                - "Write your eight warning signs into the risk register"
                - "Check each platform's filings, news and regulator notices @recurring(quarterly)"
                - "Rate each platform fine, watch or exit and log why"
                - "Read the lender forum or community board for each platform"
            - name: Auto-invest settings review
              description: |-
                ## Purpose
                Auto-invest tools quietly decide which loans your money goes into, and platforms change the products, risk bands and defaults behind them more often than lenders notice. Reviewing the settings each quarter against your written limits stops your money drifting into riskier loans or longer terms you never chose.

                ## Milestones
                1. Current auto-invest settings for each platform written down.
                2. Each setting compared with your written lending limits.
                3. Any drift corrected or a deliberate change recorded.
                4. Platform emails about product changes checked for the quarter.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Auto-invest settings on every platform match your written limits at each quarterly review, with any change recorded."
                cadence: rolling
              tasks:
                - "Screenshot the current auto-invest settings on each platform"
                - "Compare auto-invest settings with your written limits @recurring(quarterly)"
                - "Correct any setting that has drifted from your limits"
                - "Record any deliberate change and the reason"
            - name: Concentration audit across loans and platforms
              description: |-
                ## Purpose
                Diversification erodes on its own: repayments flow out of small loans while a few large ones remain, and one platform grows while another winds down. A short audit of your largest loans, largest borrowers, loan-type mix and platform split shows whether the limits you wrote still hold.

                ## Milestones
                1. The ten largest loan holdings listed as a share of the lending pot.
                2. Exposure by loan type and by platform calculated.
                3. Every breach of your written limits listed.
                4. A plan for each breach, such as pausing new lending there or selling down.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A quarterly table of largest loans, loan-type mix and platform split, with every limit breach and its fix recorded."
                cadence: rolling
              tasks:
                - "Export loan holdings from every platform"
                - "List the ten largest holdings as a share of the pot"
                - "Recalculate exposure by loan type and platform @recurring(quarterly)"
                - "Write a fix for each limit that is breached"
            - name: Annual tax statement collection for lending
              description: |-
                ## Purpose
                Each platform issues its annual tax statement at a different time, and statements from closed or wound-down platforms can be hard to obtain later. Collecting every statement, reconciling the interest with your dashboard and updating your written-off list once a year makes the lending section of a tax return a short job.

                ## Milestones
                1. Every platform's annual statement saved in that tax year's folder.
                2. Interest on statements reconciled with your monthly dashboard totals.
                3. Written-off loans for the year totalled.
                4. The figures passed to whoever prepares your tax return.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Each year, every platform's tax statement is filed, reconciled with your records, and totals for interest and losses are passed on."
                cadence: cyclic
              tasks:
                - "Download each platform's annual tax statement @recurring(yearly)"
                - "Reconcile statement interest with your dashboard totals"
                - "Total the year's written-off loans"
                - "Send interest and loss totals to whoever prepares your tax return"
            - name: Platform terms and loan contract archive
              description: |-
                ## Purpose
                Old terms are rarely kept on platform websites, yet when a loan goes wrong or the rules change, what matters is the version you agreed to at the time. Saving the terms, provision fund rules and key loan agreements each year gives you evidence for any dispute or complaint.

                ## Milestones
                1. Current terms and conditions saved for every active platform.
                2. Provision fund or buyback rules saved where they exist.
                3. Loan agreements for your largest holdings saved.
                4. A yearly reminder set to save new versions.
              priority: low
              frontmatter:
                mode: operating
                output_kind: artifact
                success_criteria: "An archive holds dated copies of each active platform's terms and protection rules, refreshed at least once a year."
                cadence: rolling
              tasks:
                - "Save each platform's current terms as a dated PDF"
                - "Save provision fund or buyback rules where they exist"
                - "Save the loan agreements for your ten largest holdings"
                - "Save fresh copies of every platform's terms @recurring(yearly)"
            - name: Annual lending allocation review
              description: |-
                ## Purpose
                Over a few years lending can grow past its intended share, or shrink as repayments are withdrawn, while your wider portfolio and life change around it. Once a year, comparing the lending pot with the cap you set and your actual net returns tells you whether to keep, grow, trim or stop.

                ## Milestones
                1. Total lending as a share of investable wealth calculated.
                2. Net return for the year compared with your expected range.
                3. A decision recorded: keep, add, trim or stop.
                4. Any change scheduled with dates.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: decision
                success_criteria: "A dated yearly decision to keep, add, trim or stop lending, based on its share of wealth and its net return against expectations."
                cadence: cyclic
              tasks:
                - "Compare total lending with your allocation cap @recurring(yearly)"
                - "Compare the year's net return with your expected range"
                - "Record a keep, add, trim or stop decision with today's date"
            - name: Reading a loan listing properly
              description: |-
                ## Purpose
                A loan listing packs the whole risk into a few fields: credit grade, loan-to-value, term, purpose, security and the borrower's track record. Learning to read those fields, and to spot what is missing, is what separates choosing loans from simply clicking the highest rate.

                ## Milestones
                1. Each field of a typical listing explained in your own words.
                2. Five live listings read and annotated, with the main risk named for each.
                3. A list of information whose absence should stop you lending.
                4. A short checklist used before every manual loan choice.

                ## Notes
                A valuation commissioned by the borrower, or a loan-to-value based on a future value after works, deserves extra scepticism.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Five annotated listings and a pre-lending checklist of fields and missing information that would stop you lending."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Pick five live listings across different loan types"
                - "Annotate each field and name the main risk of each loan"
                - "List information whose absence would stop you lending"
                - "Write a short checklist to use before every manual loan"
            - name: Provision funds, buybacks and guarantees explained
              description: |-
                ## Purpose
                Provision funds and buyback promises make returns look smooth, which is exactly why they are misunderstood: they are usually discretionary, limited in size and only as strong as the platform or originator behind them. Understanding the actual rules lets you price the risk they hide rather than relying on them.

                ## Milestones
                1. The difference between a provision fund, a buyback guarantee and personal guarantees explained.
                2. The coverage ratio of any provision fund you rely on recorded.
                3. Whether payouts are discretionary or contractual confirmed from the terms.
                4. What happens to the protection if the platform or loan originator fails written down.

                ## Notes
                Several platforms have paused or shrunk provision fund payouts under stress. Assume the protection can be withdrawn.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "For each platform with a protection feature, a note of its type, coverage ratio, whether it is discretionary and what happens if the platform fails."
                cadence: phased
                effort_hours_estimate: "3"
              tasks:
                - "Find the provision fund or buyback section in each platform's terms"
                - "Record the coverage ratio the platform publishes"
                - "Note whether payouts are discretionary or contractual"
                - "Write what happens to the protection if the platform fails"
            - name: Secondary market exits and what liquidity really costs
              description: |-
                ## Purpose
                Platforms often advertise that you can sell loans early, but that depends on other lenders wanting to buy, and in a downturn queues can stretch for months or close entirely. Learning how your platform's secondary market works, what it charges and how it behaved in past stress tells you how liquid your money really is.

                ## Milestones
                1. The secondary market rules for each platform written down, including fees and discounts.
                2. Current typical sale times found from the platform or lender forums.
                3. Past occasions when exits froze or slowed noted.
                4. An honest liquidity rating recorded for each platform.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Each platform has a written note of its exit rules, fees, typical sale time and an honest liquidity rating."
                cadence: phased
                effort_hours_estimate: "3"
              tasks:
                - "Read the secondary market section of each platform's terms"
                - "Note the selling fee and any discount needed to sell"
                - "Search lender forums for recent sale times"
                - "Rate each platform's liquidity as good, patchy or poor"
            - name: What happens after a borrower defaults
              description: |-
                ## Purpose
                Default is not the end of a loan: secured lending may go to a receiver, a property sale or a guarantor, while unsecured consumer debt may be sold to a collection agency for pennies. Understanding the recovery process on each platform, and how long it typically takes, sets your expectations for both the cash and the paperwork.

                ## Milestones
                1. The point at which each platform declares a loan in default recorded.
                2. The recovery routes used for secured and unsecured loans described.
                3. Typical recovery times and recovery rates found in published loan book data.
                4. How recoveries are reported to lenders noted.

                ## Notes
                Property recoveries often take one to three years. Plan your cash as if recovered money arrives late, and smaller than hoped.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A written summary per platform of when loans default, how recovery works, typical recovery rates and times, and how updates are reported."
                cadence: phased
                effort_hours_estimate: "3"
              tasks:
                - "Find each platform's definition of a defaulted loan"
                - "Read how secured and unsecured recoveries are handled"
                - "Look up published recovery rates and typical recovery times"
                - "Note where recovery updates appear in your account"
            - name: Platform failure, wind-down plans and backup servicers
              description: |-
                ## Purpose
                Regulated platforms are usually required to have a plan for collecting existing loans if the business closes, often run by a backup servicer, but the cost and speed of that process vary widely. Reading each platform's wind-down arrangements before you need them tells you what would happen to your loans and how long your money could be tied up.

                ## Milestones
                1. Each platform's wind-down or living will arrangements found and summarised.
                2. Any named backup servicer recorded.
                3. Who pays the wind-down costs, and how, noted.
                4. Lessons from at least one past platform wind-down read and summarised.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A summary per platform of its wind-down plan, backup servicer and cost arrangements, plus notes from one past wind-down."
                cadence: phased
                effort_hours_estimate: "3"
              tasks:
                - "Find each platform's wind-down or living will statement"
                - "Record the backup servicer if one is named"
                - "Note who pays the costs of running off the loan book"
                - "Read an account of a past platform wind-down and note the lessons"
            - name: Property-backed loans, valuations and development risk
              description: |-
                ## Purpose
                Bridging and development loans look safe because a building sits behind them, yet they produce some of the largest losses when valuations prove optimistic, builds overrun or sales stall. Learning how loan-to-value is calculated, what a monitoring surveyor does and how development loans are drawn down helps you judge whether the security is real.

                ## Milestones
                1. Day-one loan-to-value and gross development value explained in your own words.
                2. The role of independent valuers and monitoring surveyors described.
                3. Tranche drawdowns and first and second charges understood.
                4. Three property loans reviewed with the weakest point of each noted.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Notes explaining LTV bases, valuer roles, drawdowns and charge ranking, plus three reviewed property loans with their weakest point named."
                cadence: phased
                effort_hours_estimate: "5"
              tasks:
                - "Read how your platform calculates loan-to-value on property loans"
                - "Learn the difference between first and second charge security"
                - "Review three property loans and name the weakest point of each"
                - "Note whether valuers are independent of the borrower"
            - name: Benchmarking lending returns against savings and bonds
              description: |-
                ## Purpose
                Lending only earns its place if its net return beats lower-risk alternatives by enough to pay for default risk, platform risk and money locked away. Setting your realised net return beside the best easy-access savings rate and a short-dated bond fund yield each year gives a clear answer rather than a feeling.

                ## Milestones
                1. Your realised net lending return for the last year calculated.
                2. The best available easy-access savings rate and a short bond fund yield recorded.
                3. The extra return per unit of risk written as a simple margin.
                4. A minimum margin set below which lending stops being worth it.
              priority: medium
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A one-page comparison of net lending return with a savings rate and bond fund yield, and a minimum margin you require."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Calculate your realised net lending return for the last year"
                - "Note the best easy-access savings rate and a short bond fund yield"
                - "Work out the margin lending earned over each"
                - "Write the minimum margin that justifies continuing to lend"
                - "Repeat the savings and bond comparison with fresh figures @recurring(yearly)"
            - name: Auto-invest versus hand-picked loans
              description: |-
                ## Purpose
                Hand-picking loans feels safer but takes hours and often concentrates money in a few loans that looked appealing, while auto-invest spreads widely but on the platform's terms. Deciding which approach, or which mix, suits your time and knowledge saves you from drifting between them.

                ## Milestones
                1. Hours a month you will genuinely spend on lending written down.
                2. Results of any manual loans compared with auto-invest loans on the same platform.
                3. A decision recorded: auto-invest, manual or a set split.
                4. Settings changed to match the decision.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A recorded choice of auto-invest, manual or a fixed split, with platform settings changed to match."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Write the hours a month you will spend choosing loans"
                - "Compare results of manual and auto-invested loans"
                - "Record your chosen approach and split"
                - "Change platform settings to match the decision"
            - name: Adding a second platform to cap platform risk
              description: |-
                ## Purpose
                Holding every loan on one platform means one business failure, fraud or freeze touches all of your lending at once. Adding a carefully chosen second platform, ideally with different loan types and a different owner, caps that risk, but only if it passes the same checks as the first.

                ## Milestones
                1. The share of lending on your main platform calculated.
                2. A second platform scored on the same scorecard as the first.
                3. A starting amount and build-up period set.
                4. The second platform added to your dashboard and health check.
              priority: medium
              deadlineOffsetDays: 90
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A second platform scored on the same criteria as the first, chosen or rejected, and if chosen added to your dashboard and health check."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Calculate the share of lending on your main platform"
                - "Score one or two candidate platforms on your scorecard"
                - "Set a starting amount and a build-up period"
                - "Add the new platform to your dashboard and health check list"
            - name: Holding lending inside a tax-free wrapper
              description: |-
                ## Purpose
                Some countries let peer-to-peer loans sit inside a tax-free account, such as the Innovative Finance ISA in the UK, which can make a real difference to net return for higher-rate taxpayers. Checking whether a wrapper exists for you, whether your platform offers it and what it would use of your annual allowance is a short piece of research worth doing once.

                ## Milestones
                1. Whether a tax-free wrapper for lending exists in your country confirmed.
                2. Which of your platforms offer it, and on what terms, recorded.
                3. The tax saved at your marginal rate estimated.
                4. A decision recorded on whether to use some of your allowance for lending.

                ## Notes
                A wrapper changes the tax, not the risk. Losses inside a tax-free account usually cannot be set against other income.
              priority: medium
              deadlineOffsetDays: 60
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A recorded decision on using a tax-free wrapper for lending, with the estimated tax saving and platform availability noted."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Check whether a tax-free wrapper for lending exists where you live"
                - "List which platforms offer the wrapper and on what terms"
                - "Estimate the tax saved at your marginal rate"
                - "Record whether to use part of your allowance for lending"
            - name: Orderly exit from a platform you no longer trust
              description: |-
                ## Purpose
                When a platform rates exit on your health check, the useful question is how to get out with the least loss, not how fast. Stopping new lending, switching repayments to withdraw, selling on the secondary market where the discount is acceptable and holding the rest to maturity usually beats a panicked sale.

                ## Milestones
                1. Auto-invest switched off and repayments set to withdraw.
                2. Loans split into those worth selling now and those to hold to term.
                3. Sales made within a maximum discount you set in advance.
                4. Remaining loans and expected run-off dates listed.
                5. The account closed once the last loan repays or is written off.
              priority: high
              deadlineOffsetDays: 60
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "New lending stopped, an exit split recorded, sales kept within a pre-set discount and a run-off list of remaining loans kept."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Switch off auto-invest and set repayments to withdraw"
                - "Set the maximum discount you will accept to sell a loan"
                - "List loans to sell now and loans to hold to maturity"
                - "Record the expected final repayment date for remaining loans"
            - name: Rebalancing the mix of loan types
              description: |-
                ## Purpose
                Without any single decision, a lending pot can tilt heavily toward one loan type, often property development because those loans are large and auto-invest fills them. Rebalancing the mix toward the shares you set, by steering new money rather than selling, reduces the chance that one bad sector does most of the damage.

                ## Milestones
                1. Current split by loan type compared with your written caps.
                2. Overweight loan types excluded from new lending until back in range.
                3. Underweight types given priority in auto-invest or manual choices.
                4. The split rechecked after six months.
              priority: low
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "Every loan type is within its written cap, or a recorded plan steers new money until it is, rechecked within six months."
                cadence: phased
                effort_hours_estimate: "2"
              tasks:
                - "Compare your loan type split with your written caps"
                - "Exclude overweight loan types from new lending"
                - "Give underweight types priority in your settings"
                - "Recheck the split six months after the change"
            - name: Stop-lending triggers and a pause plan
              description: |-
                ## Purpose
                Lenders who lost most in past platform failures often kept adding money after the warning signs appeared, because nothing told them to stop. Writing in advance the triggers that pause new lending, such as a frozen secondary market or a changed provision fund, and what you will do next makes the decision before emotions get involved.

                ## Milestones
                1. Five or six specific triggers that pause new lending written down.
                2. The first steps after a trigger listed: what to switch off, check and record.
                3. The conditions for restarting lending written beside them.
                4. The plan saved next to your lending limits.

                ## Notes
                Keep triggers factual and checkable, for example: accounts filed more than three months late.
              priority: high
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A written list of stop-lending triggers, first steps and restart conditions saved with your lending limits."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Write five or six factual triggers that pause new lending"
                - "List the first steps to take when a trigger fires"
                - "Write the conditions that would let lending restart"
                - "Save the plan next to your lending limits"
            - name: Reassessing lending when savings rates rise
              description: |-
                ## Purpose
                When easy-access savings pay four or five percent, a lending platform paying seven before defaults may no longer compensate for the risk and the lock-in. Running a quick reassessment whenever savings rates move sharply keeps the lending pot sized for current conditions rather than those of the year you started.

                ## Milestones
                1. The current best savings rate set beside your expected net lending return.
                2. The margin compared with the minimum you set earlier.
                3. A decision recorded to keep, slow or stop new lending.
                4. Any change applied to auto-invest and withdrawal settings.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A dated decision on new lending after a sharp savings rate change, based on the margin against your written minimum."
                cadence: one-shot
                effort_hours_estimate: "1"
              tasks:
                - "Note today's best easy-access savings rate"
                - "Compare it with your expected net lending return"
                - "Record whether to keep, slow or stop new lending"
                - "Apply the decision to your auto-invest settings"
            - name: Complaint and ombudsman escalation file
              description: |-
                ## Purpose
                If a platform mishandles your money, misdescribes a loan or ignores its own terms, a complaint only works if it is clear, documented and made within the time limits. Preparing the complaint file in order, from the platform's internal process to the ombudsman, means you can act quickly when something goes wrong.

                ## Milestones
                1. Each platform's complaints process and time limits recorded.
                2. The ombudsman or dispute scheme and its deadlines noted.
                3. A complaint letter outline ready, with facts, dates and the remedy sought.
                4. Evidence locations listed: statements, terms archive and arrears ledger.

                ## Notes
                A complaint about a loan that defaulted is unlikely to succeed on its own. Complaints work best where the platform broke its own rules or described the loan wrongly.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A complaint file holds each platform's process and deadlines, the ombudsman route and a ready outline letter with evidence locations."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Record each platform's complaints process and time limits"
                - "Note the ombudsman route and its deadlines"
                - "Ask the agent to draft a complaint letter outline you can adapt"
                - "List where your evidence is kept"
            - name: First-year review of your lending book
              description: |-
                ## Purpose
                Twelve months in, you have real numbers rather than platform promises: interest received, loans late, defaults and how much cash sat idle. A structured first-year review compares those results with the expectations you wrote at the start, and decides whether the area deserves more money, the same or less.

                ## Milestones
                1. Twelve months of dashboard figures totalled.
                2. Realised net return compared with your expected range.
                3. Defaults and arrears compared with the platform's published rates.
                4. Lessons and any rule changes written down.
                5. A decision recorded on the size of the lending pot for year two.
              priority: medium
              deadlineOffsetDays: 365
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A written first-year review with realised return against expectations, default comparison, lessons and a year-two sizing decision."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Book a two-hour slot near the first anniversary of lending"
                - "Total twelve months of dashboard figures"
                - "Compare realised net return and defaults with expectations"
                - "Write lessons, rule changes and the year-two pot size"
            - name: Responding to a platform wind-down announcement
              description: |-
                ## Purpose
                When a platform announces it is closing or entering administration, lenders are flooded with emails, forum rumours and deadlines to opt in or out of proposals. Having a calm checklist ready, from saving records to registering as a creditor and voting on proposals, protects your position at the moment it matters most.

                ## Milestones
                1. All statements, loan lists and terms downloaded before access changes.
                2. The administrator or backup servicer and their communications channel identified.
                3. Any deadlines for claims, votes or opt-ins recorded.
                4. Decisions on proposals made and confirmations saved.
                5. Expected recoveries and timescales written into your arrears ledger.

                ## Notes
                Start from the **Operational checklist** template. Be wary of anyone offering to buy your loans or recover money for a fee after an announcement.
              priority: high
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "Within a week of an announcement, records are saved, the administrator is identified, deadlines are logged and each decision is confirmed in writing."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Create a wind-down checklist from the operational checklist template"
                - "Download all statements, loan lists and terms immediately"
                - "Record the administrator's contact channel and every deadline"
                - "Save written confirmation of every vote or claim you submit"
            - name: Cashing out lending money for a dated goal
              description: |-
                ## Purpose
                Money in multi-year loans cannot be called back on a fixed date, so a house deposit or a planned sabbatical needs the lending run down well ahead. Working back from the date, switching repayments to withdraw and selling only where it costs little gets the cash out on time without forced discounts.

                ## Milestones
                1. The goal, the amount and the date written down.
                2. Loan maturities that fall before the date listed.
                3. Repayments switched to withdraw and new lending stopped on the needed amount.
                4. Any shortfall covered by planned secondary sales within a set discount.
                5. The full amount in your bank account a month before the date.
              priority: medium
              deadlineOffsetDays: 180
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "The amount needed for the goal is back in your bank account at least one month before the goal date, with no sale below the set discount."
                cadence: phased
                effort_hours_estimate: "3"
              tasks:
                - "Write the goal, amount and date"
                - "List loan maturities that fall before the goal date"
                - "Switch repayments to withdraw on the amount needed"
                - "Plan secondary sales for any shortfall within a set discount"
            - name: Responding to platform terms changes and product migrations
              description: |-
                ## Purpose
                Platforms regularly close products, move lenders into new pooled accounts, change fees or alter provision fund rules, often with a short notice period and a default that applies if you do nothing. Reading each change against the terms you hold and choosing deliberately avoids being moved into something you would not have picked.

                ## Milestones
                1. The change notice saved with the old and new terms side by side.
                2. Differences in risk, fees, access and protection listed.
                3. The default outcome and the deadline to opt out recorded.
                4. Your decision made before the deadline and the confirmation saved.
              priority: medium
              frontmatter:
                mode: event
                output_kind: decision
                success_criteria: "For each terms change, a saved comparison of old and new terms and a decision made and confirmed before the opt-out deadline."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Save the change notice next to your archived terms"
                - "Ask the agent to list differences between the old and new terms"
                - "Record the default outcome and the opt-out deadline"
                - "Make your choice and save the platform's confirmation"
            - name: Lending income in retirement
              description: |-
                ## Purpose
                Retirees are often drawn to lending for monthly interest, but defaults and frozen exits hurt more when the money pays for groceries rather than sitting for decades. Setting lending as a small, capped supplement, with interest withdrawn rather than reinvested and no reliance on it for essential bills, keeps the income useful without making it fragile.

                ## Milestones
                1. Essential spending confirmed as covered by pensions, annuities or cash.
                2. Lending capped at a share of wealth agreed with any adviser you use.
                3. Interest set to withdraw monthly to your current account.
                4. A plan written for reducing lending as you age or need simpler finances.

                ## Notes
                If you use a financial adviser, ask how lending sits in your drawdown plan. Many advisers treat it as high risk and size it accordingly.
              priority: medium
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A written retirement lending plan showing essentials covered elsewhere, a capped allocation, interest withdrawn monthly and a run-down plan."
                cadence: phased
                effort_hours_estimate: "3"
              tasks:
                - "Check that essential bills are covered without lending income"
                - "Set or confirm a cap on lending in retirement"
                - "Switch interest to withdraw monthly to your current account"
                - "Write a plan for running lending down over time"
                - "Check that monthly interest withdrawals arrived in your account @recurring(monthly:12)"
            - name: Couple's joint view of lending accounts
              description: |-
                ## Purpose
                Most lending accounts are in one person's name, so the other partner may not know they exist, what they hold or how to reach them in an emergency. A shared summary, agreed limits and an understanding of whose tax return the interest belongs on keep both partners informed without merging accounts.

                ## Milestones
                1. Both partners have seen the account inventory and dashboard.
                2. A joint cap on lending across both partners agreed.
                3. Whose tax return reports each account's interest confirmed.
                4. Emergency access instructions shared with the other partner.
              priority: low
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "Both partners have reviewed the inventory, agreed a joint cap and know whose tax return carries each account and how to reach it."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Book an hour together to go through the account inventory"
                - "Agree a joint cap on lending across both of you"
                - "Confirm whose tax return reports each account's interest"
                - "Share emergency access instructions with your partner"
                - "Walk through the lending summary together @recurring(yearly)"
            - name: Freelancer lending from irregular surplus
              description: |-
                ## Purpose
                Freelancers with lumpy income are tempted to lend a good month's surplus, then find it locked away when a quiet quarter or a tax bill arrives. Lending only from surplus left after tax reserves, a larger emergency buffer and pension contributions keeps lending from becoming an expensive source of cash flow.

                ## Milestones
                1. Tax reserve and a buffer of several months of costs confirmed before any lending.
                2. Pension contributions for the year confirmed or scheduled first.
                3. A rule written for how much of a surplus month may go into lending.
                4. Lending interest added to your self-employed tax records.
              priority: low
              frontmatter:
                mode: building
                output_kind: habit
                success_criteria: "A written surplus rule for lending that applies only after tax reserve, buffer and pension contributions are covered."
                cadence: rolling
              tasks:
                - "Confirm your tax reserve and buffer are fully funded"
                - "Write the share of a surplus month that may go into lending"
                - "Apply the surplus rule after each quarterly tax set-aside @recurring(quarterly)"
                - "Add lending interest to your self-employed tax records"
            - name: Executor's guide to a deceased person's lending accounts
              description: |-
                ## Purpose
                Executors often discover lending accounts only through an annual tax statement, then face platforms with their own bereavement process and loans that cannot be cashed in at once. Working through the accounts methodically, from notifying the platform to deciding whether to sell loans or let them run off, settles this part of the estate correctly.

                ## Milestones
                1. Every platform the person used identified from statements, emails and bank records.
                2. Each platform notified with the documents its bereavement process requires.
                3. Account values at the date of death obtained for the estate valuation.
                4. A decision made per platform to sell loans, run off or transfer to beneficiaries.
                5. Final balances received and statements filed with the estate records.

                ## Notes
                Ask each platform for a valuation at the date of death. The estate's solicitor or accountant will need it for any estate tax return.
              priority: high
              frontmatter:
                mode: service
                output_kind: deliverable
                success_criteria: "Every lending account of the deceased identified, valued at the date of death, settled by sale, run-off or transfer and documented."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Search bank statements and email for lending platform payments"
                - "Contact each platform's bereavement team and list required documents"
                - "Request a valuation at the date of death from each platform"
                - "Decide per platform whether to sell, run off or transfer loans"
            - name: Lending accounts in your letter to heirs
              description: |-
                ## Purpose
                If you died tomorrow, lending accounts would be among the hardest assets for your family to find, because they rarely show up as a bank does. A short letter listing each platform, roughly what it holds, where the statements are and what you would want done saves your executor months.

                ## Milestones
                1. Each platform named with an approximate value and the date recorded.
                2. Where statements, tax records and the terms archive are kept stated.
                3. Your wishes on selling or running off loans written down.
                4. The letter stored with your will or estate papers and its location shared.

                ## Notes
                Do not write passwords in the letter. Point to your password manager's emergency access feature instead.
              priority: medium
              deadlineOffsetDays: 90
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A dated letter naming each lending platform, its approximate value, record locations and your wishes is stored with your estate papers."
                cadence: one-shot
                effort_hours_estimate: "1"
              tasks:
                - "List each platform with an approximate value and today's date"
                - "Note where statements and tax records are kept"
                - "Write your wishes on selling or running off loans"
                - "Store the letter with your will and tell your executor"
                - "Update values and platforms in the heirs letter @recurring(yearly)"
            - name: Phasing a windfall into lending gradually
              description: |-
                ## Purpose
                An inheritance, bonus or property sale can make a large lending deposit tempting, but putting it all in at once concentrates the pot in whatever loans are available that month. Phasing it in over six to twelve months, inside your allocation cap, spreads the money across more borrowers, more loan vintages and more market conditions.

                ## Milestones
                1. The share of the windfall that may go into lending set within your cap.
                2. A monthly phasing schedule written.
                3. The undeployed amount parked in savings meanwhile.
                4. Diversification checked after the final tranche.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A phasing schedule within your allocation cap, with the undeployed amount in savings and a diversification check after the last tranche."
                cadence: phased
                effort_hours_estimate: "2"
              tasks:
                - "Decide how much of the windfall may go into lending"
                - "Write a monthly schedule spreading deposits over six to twelve months"
                - "Park the undeployed amount in easy-access savings"
                - "Check diversification once the final tranche is lent"
            - name: Lending while living abroad or across currencies
              description: |-
                ## Purpose
                Moving country can make you ineligible to keep lending on a platform, change how the interest is taxed and add currency swings to returns, and some foreign marketplaces lend in a currency you do not spend. Checking eligibility, withholding tax and currency exposure before a move or a foreign platform avoids frozen accounts and surprise tax.

                ## Milestones
                1. Each platform's rules on lenders who move abroad checked.
                2. Withholding tax and treaty relief on interest noted from official guidance.
                3. Currency exposure of any foreign-currency lending calculated.
                4. A decision recorded to keep, run off or close each affected account.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "For each lending account affected by residency or currency, eligibility, withholding tax and currency exposure checked and a decision recorded."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Check each platform's terms on lenders who move abroad"
                - "Note withholding tax rules on interest for your new residence"
                - "Calculate how much of your lending is in a foreign currency"
                - "Record whether to keep, run off or close each affected account"
            - name: True annualised return with XIRR
              description: |-
                ## Purpose
                Platform return figures often ignore the timing of your deposits and withdrawals, and sometimes ignore loans in arrears altogether. Calculating your own annualised return with the XIRR function in a spreadsheet, using every deposit, withdrawal and the current value net of expected losses, gives one honest number per platform.

                ## Milestones
                1. Every deposit and withdrawal for each platform listed with dates.
                2. A current value recorded, with loans in default marked down.
                3. XIRR calculated per platform and for the whole lending pot.
                4. Your figure compared with the platform's own reported return.

                ## Notes
                Mark defaulted loans at the recovery you realistically expect, not at face value.
              priority: medium
              deadlineOffsetDays: 45
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A spreadsheet that calculates XIRR per platform and in total from dated cash flows and a written-down current value."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Export every deposit and withdrawal with dates from each platform"
                - "Record current value with defaulted loans written down"
                - "Calculate XIRR per platform and for the whole pot"
                - "Compare your figure with the platform's reported return"
            - name: Cohort default analysis of your own loan book
              description: |-
                ## Purpose
                Defaults arrive late: a batch of three-year loans may look clean for a year, then lose several percent in the second. Grouping your loans by the quarter they were made and tracking how losses build up over time shows whether recent vintages are behaving better or worse than older ones, well before an annual review would.

                ## Milestones
                1. Loans grouped by origination quarter.
                2. Cumulative defaults and recoveries tracked for each group by months since lending.
                3. Your curves compared with the platform's published vintage data.
                4. Any vintage running worse than expected flagged in the health check.
              priority: low
              frontmatter:
                mode: research
                output_kind: artifact
                success_criteria: "A table of cumulative defaults by origination quarter, compared with platform data and refreshed at least twice a year."
                cadence: rolling
              tasks:
                - "Export your full loan history with origination dates"
                - "Group loans by the quarter they were made"
                - "Refresh cumulative defaults per vintage @recurring(monthly:28)"
                - "Compare your vintages with the platform's published data"
            - name: Buying discounted loans on the secondary market
              description: |-
                ## Purpose
                Experienced lenders sometimes buy loans other lenders are selling at a discount, which can lift returns but often means buying exactly the loans better-informed sellers want to leave. Setting rules for what you will buy, how deep a discount must be and how much research each purchase gets keeps this from becoming a way to collect troubled loans.

                ## Milestones
                1. Written rules on which loans you will consider buying second-hand.
                2. A minimum discount and maximum exposure for secondary purchases set.
                3. A research step defined for every purchase, such as reading recent loan updates.
                4. Results of secondary purchases tracked separately on the dashboard.

                ## Notes
                Ask why the loan is for sale. A seller exiting a platform is different from a seller who has read bad news about the borrower.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Written secondary buying rules with a minimum discount and exposure cap, and secondary purchases tracked separately with their results."
                cadence: phased
                effort_hours_estimate: "3"
              tasks:
                - "Write which loans you would consider buying second-hand"
                - "Set a minimum discount and maximum secondary exposure"
                - "Read all recent updates on a loan before buying it"
                - "Track secondary purchases separately on your dashboard"
            - name: Assessing crowdfunded mini-bonds and unlisted debt offers
              description: |-
                ## Purpose
                Crowdfunding sites and promoters also offer mini-bonds and other unlisted debt that look like loans but often carry far fewer protections, no secondary market and a single borrower. Checking how an offer is regulated, who the issuer is and whether its accounts support the interest promised can keep a high-yield advert from becoming a total loss.

                ## Milestones
                1. The legal form of the offer identified: platform loan, mini-bond or other security.
                2. The issuer's filed accounts and directors checked.
                3. Protections that do and do not apply listed.
                4. A recorded decision, usually a small capped amount or a firm no.

                ## Notes
                Several regulators have restricted the marketing of speculative mini-bonds to ordinary investors. Treat promises of fixed high returns from a single company with great caution.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "For any unlisted debt offer, a written note of its legal form, issuer checks and missing protections, with a recorded decision."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Identify whether the offer is a platform loan, mini-bond or other security"
                - "Read the issuer's latest filed accounts"
                - "Check the directors' other companies on the company register"
                - "Record a decision with the amount, if any, you would commit"
            - name: Recession stress test of the lending book
              description: |-
                ## Purpose
                Most lending platforms have little history through a deep recession, so their published default rates may describe kinder years than the next ones. Applying a pessimistic default rate, a frozen secondary market and slow recoveries to your own book shows what a bad two years could cost, and whether you could live with it.

                ## Milestones
                1. A stress default rate chosen, at least double the platform's historical rate.
                2. Expected loss on your book calculated under that rate.
                3. Cash flow modelled with no secondary sales and recoveries delayed two years.
                4. The stressed loss compared with the total-loss figure you accepted at the start.
                5. Any resulting change to your allocation recorded.
              priority: medium
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A written stress test showing expected loss and cash flow under doubled defaults and frozen exits, compared with your accepted loss figure."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Choose a stress default rate at least double the historical rate"
                - "Calculate expected loss on your book at that rate"
                - "Model cash flow with no sales and recoveries delayed two years"
                - "Compare the stressed loss with your accepted loss figure"
---

# Peer-to-Peer Lending

This area is for anyone who lends, or is thinking of lending, through peer-to-peer and loan-based crowdfunding platforms and wants the money treated as the risky, illiquid credit it is rather than a better savings account. It starts with foundations (how much, which platform, what the regulator does and does not protect, written limits and tax records), then the routines that keep a loan book honest, the knowledge behind provision funds, defaults, secondary markets and property loans, decisions about adding, trimming or leaving platforms, dated events such as a wind-down announcement, situations for retirees, couples, freelancers and executors, and finally specialist work on true returns, default cohorts and stress tests.

The rhythm is a monthly dashboard, cash sweep and arrears update, a quarterly platform health check, concentration audit and auto-invest review, and a yearly tax statement collection, terms archive and allocation review. The Vendor, Metrics log, Risk register and Operational checklist templates pair with choosing a platform, the monthly dashboard, the platform health check and the wind-down response. Installing adds all 50 projects as active, so archive the ones that are not for you yet.
